(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function l(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(r){if(r.ep)return;r.ep=!0;const c=l(r);fetch(r.href,c)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function on(e,a){const l=new Set(e.split(","));return a?o=>l.has(o.toLowerCase()):o=>l.has(o)}const je={},aa=[],vt=()=>{},up=()=>!1,nl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),qo=e=>e.startsWith("onUpdate:"),Xe=Object.assign,Uo=(e,a)=>{const l=e.indexOf(a);l>-1&&e.splice(l,1)},cp=Object.prototype.hasOwnProperty,Pe=(e,a)=>cp.call(e,a),ge=Array.isArray,la=e=>Ca(e)==="[object Map]",qi=e=>Ca(e)==="[object Set]",zs=e=>Ca(e)==="[object Date]",dp=e=>Ca(e)==="[object RegExp]",we=e=>typeof e=="function",Qe=e=>typeof e=="string",Si=e=>typeof e=="symbol",Ue=e=>e!==null&&typeof e=="object",Yo=e=>(Ue(e)||we(e))&&we(e.then)&&we(e.catch),Bc=Object.prototype.toString,Ca=e=>Bc.call(e),mp=e=>Ca(e).slice(8,-1),Tc=e=>Ca(e)==="[object Object]",Jo=e=>Qe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Fa=on(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sn=e=>{const a=Object.create(null);return l=>a[l]||(a[l]=e(l))},pp=/-(\w)/g,ht=sn(e=>e.replace(pp,(a,l)=>l?l.toUpperCase():"")),fp=/\B([A-Z])/g,$t=sn(e=>e.replace(fp,"-$1").toLowerCase()),ol=sn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ha=sn(e=>e?`on${ol(e)}`:""),Ht=(e,a)=>!Object.is(e,a),na=(e,a)=>{for(let l=0;l<e.length;l++)e[l](a)},Il=(e,a,l)=>{Object.defineProperty(e,a,{configurable:!0,enumerable:!1,value:l})},Ja=e=>{const a=parseFloat(e);return isNaN(a)?e:a},Dl=e=>{const a=Qe(e)?Number(e):NaN;return isNaN(a)?e:a};let Ps;const Lc=()=>Ps||(Ps=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),gp="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",hp=on(gp);function Aa(e){if(ge(e)){const a={};for(let l=0;l<e.length;l++){const o=e[l],r=Qe(o)?yp(o):Aa(o);if(r)for(const c in r)a[c]=r[c]}return a}else if(Qe(e)||Ue(e))return e}const _p=/;(?![^(]*\))/g,bp=/:([^]+)/,vp=/\/\*[^]*?\*\//g;function yp(e){const a={};return e.replace(vp,"").split(_p).forEach(l=>{if(l){const o=l.split(bp);o.length>1&&(a[o[0].trim()]=o[1].trim())}}),a}function sl(e){let a="";if(Qe(e))a=e;else if(ge(e))for(let l=0;l<e.length;l++){const o=sl(e[l]);o&&(a+=o+" ")}else if(Ue(e))for(const l in e)e[l]&&(a+=l+" ");return a.trim()}function Sp(e){if(!e)return null;let{class:a,style:l}=e;return a&&!Qe(a)&&(e.class=sl(a)),l&&(e.style=Aa(l)),e}const wp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cp=on(wp);function Ic(e){return!!e||e===""}function Ap(e,a){if(e.length!==a.length)return!1;let l=!0;for(let o=0;l&&o<e.length;o++)l=Zt(e[o],a[o]);return l}function Zt(e,a){if(e===a)return!0;let l=zs(e),o=zs(a);if(l||o)return l&&o?e.getTime()===a.getTime():!1;if(l=Si(e),o=Si(a),l||o)return e===a;if(l=ge(e),o=ge(a),l||o)return l&&o?Ap(e,a):!1;if(l=Ue(e),o=Ue(a),l||o){if(!l||!o)return!1;const r=Object.keys(e).length,c=Object.keys(a).length;if(r!==c)return!1;for(const m in e){const f=e.hasOwnProperty(m),s=a.hasOwnProperty(m);if(f&&!s||!f&&s||!Zt(e[m],a[m]))return!1}}return String(e)===String(a)}function rn(e,a){return e.findIndex(l=>Zt(l,a))}const Te=e=>Qe(e)?e:e==null?"":ge(e)||Ue(e)&&(e.toString===Bc||!we(e.toString))?JSON.stringify(e,Dc,2):String(e),Dc=(e,a)=>a&&a.__v_isRef?Dc(e,a.value):la(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((l,[o,r],c)=>(l[Ln(o,c)+" =>"]=r,l),{})}:qi(a)?{[`Set(${a.size})`]:[...a.values()].map(l=>Ln(l))}:Si(a)?Ln(a):Ue(a)&&!ge(a)&&!Tc(a)?String(a):a,Ln=(e,a="")=>{var l;return Si(e)?`Symbol(${(l=e.description)!=null?l:a})`:e};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kt;class Wo{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kt,!a&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const l=kt;try{return kt=this,a()}finally{kt=l}}}on(){kt=this}off(){kt=this.parent}stop(a){if(this._active){let l,o;for(l=0,o=this.effects.length;l<o;l++)this.effects[l].stop();for(l=0,o=this.cleanups.length;l<o;l++)this.cleanups[l]();if(this.scopes)for(l=0,o=this.scopes.length;l<o;l++)this.scopes[l].stop(!0);if(!this.detached&&this.parent&&!a){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function kp(e){return new Wo(e)}function Ec(e,a=kt){a&&a.active&&a.effects.push(e)}function Ko(){return kt}function Rc(e){kt&&kt.cleanups.push(e)}let Di;class fa{constructor(a,l,o,r){this.fn=a,this.trigger=l,this.scheduler=o,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Ec(this,r)}get dirty(){if(this._dirtyLevel===1){Ui();for(let a=0;a<this._depsLength;a++){const l=this.deps[a];if(l.computed&&(xp(l.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),Yi()}return this._dirtyLevel>=2}set dirty(a){this._dirtyLevel=a?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let a=_i,l=Di;try{return _i=!0,Di=this,this._runnings++,Ms(this),this.fn()}finally{Vs(this),this._runnings--,Di=l,_i=a}}stop(){var a;this.active&&(Ms(this),Vs(this),(a=this.onStop)==null||a.call(this),this.active=!1)}}function xp(e){return e.value}function Ms(e){e._trackId++,e._depsLength=0}function Vs(e){if(e.deps&&e.deps.length>e._depsLength){for(let a=e._depsLength;a<e.deps.length;a++)zc(e.deps[a],e);e.deps.length=e._depsLength}}function zc(e,a){const l=e.get(a);l!==void 0&&a._trackId!==l&&(e.delete(a),e.size===0&&e.cleanup())}function $p(e,a){e.effect instanceof fa&&(e=e.effect.fn);const l=new fa(e,vt,()=>{l.dirty&&l.run()});a&&(Xe(l,a),a.scope&&Ec(l,a.scope)),(!a||!a.lazy)&&l.run();const o=l.run.bind(l);return o.effect=l,o}function Bp(e){e.effect.stop()}let _i=!0,to=0;const Pc=[];function Ui(){Pc.push(_i),_i=!1}function Yi(){const e=Pc.pop();_i=e===void 0?!0:e}function Xo(){to++}function Qo(){for(to--;!to&&io.length;)io.shift()()}function Mc(e,a,l){if(a.get(e)!==e._trackId){a.set(e,e._trackId);const o=e.deps[e._depsLength];o!==a?(o&&zc(o,e),e.deps[e._depsLength++]=a):e._depsLength++}}const io=[];function Vc(e,a,l){Xo();for(const o of e.keys())if(o._dirtyLevel<a&&e.get(o)===o._trackId){const r=o._dirtyLevel;o._dirtyLevel=a,r===0&&(o._shouldSchedule=!0,o.trigger())}Fc(e),Qo()}function Fc(e){for(const a of e.keys())a.scheduler&&a._shouldSchedule&&(!a._runnings||a.allowRecurse)&&e.get(a)===a._trackId&&(a._shouldSchedule=!1,io.push(a.scheduler))}const Hc=(e,a)=>{const l=new Map;return l.cleanup=e,l.computed=a,l},El=new WeakMap,Ei=Symbol(""),ao=Symbol("");function wt(e,a,l){if(_i&&Di){let o=El.get(e);o||El.set(e,o=new Map);let r=o.get(l);r||o.set(l,r=Hc(()=>o.delete(l))),Mc(Di,r)}}function Xt(e,a,l,o,r,c){const m=El.get(e);if(!m)return;let f=[];if(a==="clear")f=[...m.values()];else if(l==="length"&&ge(e)){const s=Number(o);m.forEach((u,g)=>{(g==="length"||!Si(g)&&g>=s)&&f.push(u)})}else switch(l!==void 0&&f.push(m.get(l)),a){case"add":ge(e)?Jo(l)&&f.push(m.get("length")):(f.push(m.get(Ei)),la(e)&&f.push(m.get(ao)));break;case"delete":ge(e)||(f.push(m.get(Ei)),la(e)&&f.push(m.get(ao)));break;case"set":la(e)&&f.push(m.get(Ei));break}Xo();for(const s of f)s&&Vc(s,2);Qo()}function Tp(e,a){var l;return(l=El.get(e))==null?void 0:l.get(a)}const Lp=on("__proto__,__v_isRef,__isVue"),Nc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Si)),Fs=Ip();function Ip(){const e={};return["includes","indexOf","lastIndexOf"].forEach(a=>{e[a]=function(...l){const o=Ee(this);for(let c=0,m=this.length;c<m;c++)wt(o,"get",c+"");const r=o[a](...l);return r===-1||r===!1?o[a](...l.map(Ee)):r}}),["push","pop","shift","unshift","splice"].forEach(a=>{e[a]=function(...l){Ui(),Xo();const o=Ee(this)[a].apply(this,l);return Qo(),Yi(),o}}),e}function Dp(e){const a=Ee(this);return wt(a,"has",e),a.hasOwnProperty(e)}class Oc{constructor(a=!1,l=!1){this._isReadonly=a,this._shallow=l}get(a,l,o){const r=this._isReadonly,c=this._shallow;if(l==="__v_isReactive")return!r;if(l==="__v_isReadonly")return r;if(l==="__v_isShallow")return c;if(l==="__v_raw")return o===(r?c?Jc:Yc:c?Uc:qc).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(o)?a:void 0;const m=ge(a);if(!r){if(m&&Pe(Fs,l))return Reflect.get(Fs,l,o);if(l==="hasOwnProperty")return Dp}const f=Reflect.get(a,l,o);return(Si(l)?Nc.has(l):Lp(l))||(r||wt(a,"get",l),c)?f:ct(f)?m&&Jo(l)?f:f.value:Ue(f)?r?es(f):ti(f):f}}class jc extends Oc{constructor(a=!1){super(!1,a)}set(a,l,o,r){let c=a[l];if(!this._shallow){const s=Mi(c);if(!Wa(o)&&!Mi(o)&&(c=Ee(c),o=Ee(o)),!ge(a)&&ct(c)&&!ct(o))return s?!1:(c.value=o,!0)}const m=ge(a)&&Jo(l)?Number(l)<a.length:Pe(a,l),f=Reflect.set(a,l,o,r);return a===Ee(r)&&(m?Ht(o,c)&&Xt(a,"set",l,o):Xt(a,"add",l,o)),f}deleteProperty(a,l){const o=Pe(a,l);a[l];const r=Reflect.deleteProperty(a,l);return r&&o&&Xt(a,"delete",l,void 0),r}has(a,l){const o=Reflect.has(a,l);return(!Si(l)||!Nc.has(l))&&wt(a,"has",l),o}ownKeys(a){return wt(a,"iterate",ge(a)?"length":Ei),Reflect.ownKeys(a)}}class Gc extends Oc{constructor(a=!1){super(!0,a)}set(a,l){return!0}deleteProperty(a,l){return!0}}const Ep=new jc,Rp=new Gc,zp=new jc(!0),Pp=new Gc(!0),Zo=e=>e,un=e=>Reflect.getPrototypeOf(e);function dl(e,a,l=!1,o=!1){e=e.__v_raw;const r=Ee(e),c=Ee(a);l||(Ht(a,c)&&wt(r,"get",a),wt(r,"get",c));const{has:m}=un(r),f=o?Zo:l?as:Ka;if(m.call(r,a))return f(e.get(a));if(m.call(r,c))return f(e.get(c));e!==r&&e.get(a)}function ml(e,a=!1){const l=this.__v_raw,o=Ee(l),r=Ee(e);return a||(Ht(e,r)&&wt(o,"has",e),wt(o,"has",r)),e===r?l.has(e):l.has(e)||l.has(r)}function pl(e,a=!1){return e=e.__v_raw,!a&&wt(Ee(e),"iterate",Ei),Reflect.get(e,"size",e)}function Hs(e){e=Ee(e);const a=Ee(this);return un(a).has.call(a,e)||(a.add(e),Xt(a,"add",e,e)),this}function Ns(e,a){a=Ee(a);const l=Ee(this),{has:o,get:r}=un(l);let c=o.call(l,e);c||(e=Ee(e),c=o.call(l,e));const m=r.call(l,e);return l.set(e,a),c?Ht(a,m)&&Xt(l,"set",e,a):Xt(l,"add",e,a),this}function Os(e){const a=Ee(this),{has:l,get:o}=un(a);let r=l.call(a,e);r||(e=Ee(e),r=l.call(a,e)),o&&o.call(a,e);const c=a.delete(e);return r&&Xt(a,"delete",e,void 0),c}function js(){const e=Ee(this),a=e.size!==0,l=e.clear();return a&&Xt(e,"clear",void 0,void 0),l}function fl(e,a){return function(o,r){const c=this,m=c.__v_raw,f=Ee(m),s=a?Zo:e?as:Ka;return!e&&wt(f,"iterate",Ei),m.forEach((u,g)=>o.call(r,s(u),s(g),c))}}function gl(e,a,l){return function(...o){const r=this.__v_raw,c=Ee(r),m=la(c),f=e==="entries"||e===Symbol.iterator&&m,s=e==="keys"&&m,u=r[e](...o),g=l?Zo:a?as:Ka;return!a&&wt(c,"iterate",s?ao:Ei),{next(){const{value:d,done:h}=u.next();return h?{value:d,done:h}:{value:f?[g(d[0]),g(d[1])]:g(d),done:h}},[Symbol.iterator](){return this}}}}function li(e){return function(...a){return e==="delete"?!1:e==="clear"?void 0:this}}function Mp(){const e={get(c){return dl(this,c)},get size(){return pl(this)},has:ml,add:Hs,set:Ns,delete:Os,clear:js,forEach:fl(!1,!1)},a={get(c){return dl(this,c,!1,!0)},get size(){return pl(this)},has:ml,add:Hs,set:Ns,delete:Os,clear:js,forEach:fl(!1,!0)},l={get(c){return dl(this,c,!0)},get size(){return pl(this,!0)},has(c){return ml.call(this,c,!0)},add:li("add"),set:li("set"),delete:li("delete"),clear:li("clear"),forEach:fl(!0,!1)},o={get(c){return dl(this,c,!0,!0)},get size(){return pl(this,!0)},has(c){return ml.call(this,c,!0)},add:li("add"),set:li("set"),delete:li("delete"),clear:li("clear"),forEach:fl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(c=>{e[c]=gl(c,!1,!1),l[c]=gl(c,!0,!1),a[c]=gl(c,!1,!0),o[c]=gl(c,!0,!0)}),[e,l,a,o]}const[Vp,Fp,Hp,Np]=Mp();function cn(e,a){const l=a?e?Np:Hp:e?Fp:Vp;return(o,r,c)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(Pe(l,r)&&r in o?l:o,r,c)}const Op={get:cn(!1,!1)},jp={get:cn(!1,!0)},Gp={get:cn(!0,!1)},qp={get:cn(!0,!0)},qc=new WeakMap,Uc=new WeakMap,Yc=new WeakMap,Jc=new WeakMap;function Up(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yp(e){return e.__v_skip||!Object.isExtensible(e)?0:Up(mp(e))}function ti(e){return Mi(e)?e:dn(e,!1,Ep,Op,qc)}function Wc(e){return dn(e,!1,zp,jp,Uc)}function es(e){return dn(e,!0,Rp,Gp,Yc)}function Jp(e){return dn(e,!0,Pp,qp,Jc)}function dn(e,a,l,o,r){if(!Ue(e)||e.__v_raw&&!(a&&e.__v_isReactive))return e;const c=r.get(e);if(c)return c;const m=Yp(e);if(m===0)return e;const f=new Proxy(e,m===2?o:l);return r.set(e,f),f}function Ri(e){return Mi(e)?Ri(e.__v_raw):!!(e&&e.__v_isReactive)}function Mi(e){return!!(e&&e.__v_isReadonly)}function Wa(e){return!!(e&&e.__v_isShallow)}function ts(e){return Ri(e)||Mi(e)}function Ee(e){const a=e&&e.__v_raw;return a?Ee(a):e}function is(e){return Il(e,"__v_skip",!0),e}const Ka=e=>Ue(e)?ti(e):e,as=e=>Ue(e)?es(e):e;class Kc{constructor(a,l,o,r){this._setter=l,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new fa(()=>a(this._value),()=>oa(this,1),()=>this.dep&&Fc(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const a=Ee(this);return(!a._cacheable||a.effect.dirty)&&Ht(a._value,a._value=a.effect.run())&&oa(a,2),ls(a),a.effect._dirtyLevel>=1&&oa(a,1),a._value}set value(a){this._setter(a)}get _dirty(){return this.effect.dirty}set _dirty(a){this.effect.dirty=a}}function Wp(e,a,l=!1){let o,r;const c=we(e);return c?(o=e,r=vt):(o=e.get,r=e.set),new Kc(o,r,c||!r,l)}function ls(e){_i&&Di&&(e=Ee(e),Mc(Di,e.dep||(e.dep=Hc(()=>e.dep=void 0,e instanceof Kc?e:void 0))))}function oa(e,a=2,l){e=Ee(e);const o=e.dep;o&&Vc(o,a)}function ct(e){return!!(e&&e.__v_isRef===!0)}function G(e){return Qc(e,!1)}function Xc(e){return Qc(e,!0)}function Qc(e,a){return ct(e)?e:new Kp(e,a)}class Kp{constructor(a,l){this.__v_isShallow=l,this.dep=void 0,this.__v_isRef=!0,this._rawValue=l?a:Ee(a),this._value=l?a:Ka(a)}get value(){return ls(this),this._value}set value(a){const l=this.__v_isShallow||Wa(a)||Mi(a);a=l?a:Ee(a),Ht(a,this._rawValue)&&(this._rawValue=a,this._value=l?a:Ka(a),oa(this,2))}}function Xp(e){oa(e,2)}function p(e){return ct(e)?e.value:e}function Qp(e){return we(e)?e():p(e)}const Zp={get:(e,a,l)=>p(Reflect.get(e,a,l)),set:(e,a,l,o)=>{const r=e[a];return ct(r)&&!ct(l)?(r.value=l,!0):Reflect.set(e,a,l,o)}};function ns(e){return Ri(e)?e:new Proxy(e,Zp)}class ef{constructor(a){this.dep=void 0,this.__v_isRef=!0;const{get:l,set:o}=a(()=>ls(this),()=>oa(this));this._get=l,this._set=o}get value(){return this._get()}set value(a){this._set(a)}}function Zc(e){return new ef(e)}function tf(e){const a=ge(e)?new Array(e.length):{};for(const l in e)a[l]=ed(e,l);return a}class af{constructor(a,l,o){this._object=a,this._key=l,this._defaultValue=o,this.__v_isRef=!0}get value(){const a=this._object[this._key];return a===void 0?this._defaultValue:a}set value(a){this._object[this._key]=a}get dep(){return Tp(Ee(this._object),this._key)}}class lf{constructor(a){this._getter=a,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function lo(e,a,l){return ct(e)?e:we(e)?new lf(e):Ue(e)&&arguments.length>1?ed(e,a,l):G(e)}function ed(e,a,l){const o=e[a];return ct(o)?o:new af(e,a,l)}const nf={GET:"get",HAS:"has",ITERATE:"iterate"},of={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function sf(e,a){}const rf={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},uf={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function Qt(e,a,l,o){let r;try{r=o?e(...o):e()}catch(c){Ji(c,a,l)}return r}function Bt(e,a,l,o){if(we(e)){const c=Qt(e,a,l,o);return c&&Yo(c)&&c.catch(m=>{Ji(m,a,l)}),c}const r=[];for(let c=0;c<e.length;c++)r.push(Bt(e[c],a,l,o));return r}function Ji(e,a,l,o=!0){const r=a?a.vnode:null;if(a){let c=a.parent;const m=a.proxy,f=`https://vuejs.org/error-reference/#runtime-${l}`;for(;c;){const u=c.ec;if(u){for(let g=0;g<u.length;g++)if(u[g](e,m,f)===!1)return}c=c.parent}const s=a.appContext.config.errorHandler;if(s){Qt(s,null,10,[e,m,f]);return}}cf(e,l,r,o)}function cf(e,a,l,o=!0){console.error(e)}let Xa=!1,no=!1;const mt=[];let jt=0;const sa=[];let ui=null,Li=0;const td=Promise.resolve();let os=null;function ka(e){const a=os||td;return e?a.then(this?e.bind(this):e):a}function df(e){let a=jt+1,l=mt.length;for(;a<l;){const o=a+l>>>1,r=mt[o],c=Qa(r);c<e||c===e&&r.pre?a=o+1:l=o}return a}function mn(e){(!mt.length||!mt.includes(e,Xa&&e.allowRecurse?jt+1:jt))&&(e.id==null?mt.push(e):mt.splice(df(e.id),0,e),id())}function id(){!Xa&&!no&&(no=!0,os=td.then(ad))}function mf(e){const a=mt.indexOf(e);a>jt&&mt.splice(a,1)}function Rl(e){ge(e)?sa.push(...e):(!ui||!ui.includes(e,e.allowRecurse?Li+1:Li))&&sa.push(e),id()}function Gs(e,a,l=Xa?jt+1:0){for(;l<mt.length;l++){const o=mt[l];if(o&&o.pre){if(e&&o.id!==e.uid)continue;mt.splice(l,1),l--,o()}}}function zl(e){if(sa.length){const a=[...new Set(sa)].sort((l,o)=>Qa(l)-Qa(o));if(sa.length=0,ui){ui.push(...a);return}for(ui=a,Li=0;Li<ui.length;Li++)ui[Li]();ui=null,Li=0}}const Qa=e=>e.id==null?1/0:e.id,pf=(e,a)=>{const l=Qa(e)-Qa(a);if(l===0){if(e.pre&&!a.pre)return-1;if(a.pre&&!e.pre)return 1}return l};function ad(e){no=!1,Xa=!0,mt.sort(pf);try{for(jt=0;jt<mt.length;jt++){const a=mt[jt];a&&a.active!==!1&&Qt(a,null,14)}}finally{jt=0,mt.length=0,zl(),Xa=!1,os=null,(mt.length||sa.length)&&ad()}}let Zi,hl=[];function ld(e,a){var l,o;Zi=e,Zi?(Zi.enabled=!0,hl.forEach(({event:r,args:c})=>Zi.emit(r,...c)),hl=[]):typeof window<"u"&&window.HTMLElement&&!((o=(l=window.navigator)==null?void 0:l.userAgent)!=null&&o.includes("jsdom"))?((a.__VUE_DEVTOOLS_HOOK_REPLAY__=a.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(c=>{ld(c,a)}),setTimeout(()=>{Zi||(a.__VUE_DEVTOOLS_HOOK_REPLAY__=null,hl=[])},3e3)):hl=[]}function ff(e,a,...l){if(e.isUnmounted)return;const o=e.vnode.props||je;let r=l;const c=a.startsWith("update:"),m=c&&a.slice(7);if(m&&m in o){const g=`${m==="modelValue"?"model":m}Modifiers`,{number:d,trim:h}=o[g]||je;h&&(r=l.map(v=>Qe(v)?v.trim():v)),d&&(r=l.map(Ja))}let f,s=o[f=Ha(a)]||o[f=Ha(ht(a))];!s&&c&&(s=o[f=Ha($t(a))]),s&&Bt(s,e,6,r);const u=o[f+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[f])return;e.emitted[f]=!0,Bt(u,e,6,r)}}function nd(e,a,l=!1){const o=a.emitsCache,r=o.get(e);if(r!==void 0)return r;const c=e.emits;let m={},f=!1;if(!we(e)){const s=u=>{const g=nd(u,a,!0);g&&(f=!0,Xe(m,g))};!l&&a.mixins.length&&a.mixins.forEach(s),e.extends&&s(e.extends),e.mixins&&e.mixins.forEach(s)}return!c&&!f?(Ue(e)&&o.set(e,null),null):(ge(c)?c.forEach(s=>m[s]=null):Xe(m,c),Ue(e)&&o.set(e,m),m)}function pn(e,a){return!e||!nl(a)?!1:(a=a.slice(2).replace(/Once$/,""),Pe(e,a[0].toLowerCase()+a.slice(1))||Pe(e,$t(a))||Pe(e,a))}let it=null,fn=null;function Za(e){const a=it;return it=e,fn=e&&e.type.__scopeId||null,a}function od(e){fn=e}function sd(){fn=null}const gf=e=>i;function i(e,a=it,l){if(!a||e._n)return e;const o=(...r)=>{o._d&&fo(-1);const c=Za(a);let m;try{m=e(...r)}finally{Za(c),o._d&&fo(1)}return m};return o._n=!0,o._c=!0,o._d=!0,o}function $l(e){const{type:a,vnode:l,proxy:o,withProxy:r,props:c,propsOptions:[m],slots:f,attrs:s,emit:u,render:g,renderCache:d,data:h,setupState:v,ctx:_,inheritAttrs:C}=e;let k,T;const b=Za(e);try{if(l.shapeFlag&4){const x=r||o,B=x;k=xt(g.call(B,x,d,c,v,h,_)),T=s}else{const x=a;k=xt(x.length>1?x(c,{attrs:s,slots:f,emit:u}):x(c,null)),T=a.props?s:_f(s)}}catch(x){ja.length=0,Ji(x,e,1),k=t(ft)}let w=k;if(T&&C!==!1){const x=Object.keys(T),{shapeFlag:B}=w;x.length&&B&7&&(m&&x.some(qo)&&(T=bf(T,m)),w=Gt(w,T))}return l.dirs&&(w=Gt(w),w.dirs=w.dirs?w.dirs.concat(l.dirs):l.dirs),l.transition&&(w.transition=l.transition),k=w,Za(b),k}function hf(e,a=!0){let l;for(let o=0;o<e.length;o++){const r=e[o];if(zt(r)){if(r.type!==ft||r.children==="v-if"){if(l)return;l=r}}else return}return l}const _f=e=>{let a;for(const l in e)(l==="class"||l==="style"||nl(l))&&((a||(a={}))[l]=e[l]);return a},bf=(e,a)=>{const l={};for(const o in e)(!qo(o)||!(o.slice(9)in a))&&(l[o]=e[o]);return l};function vf(e,a,l){const{props:o,children:r,component:c}=e,{props:m,children:f,patchFlag:s}=a,u=c.emitsOptions;if(a.dirs||a.transition)return!0;if(l&&s>=0){if(s&1024)return!0;if(s&16)return o?qs(o,m,u):!!m;if(s&8){const g=a.dynamicProps;for(let d=0;d<g.length;d++){const h=g[d];if(m[h]!==o[h]&&!pn(u,h))return!0}}}else return(r||f)&&(!f||!f.$stable)?!0:o===m?!1:o?m?qs(o,m,u):!0:!!m;return!1}function qs(e,a,l){const o=Object.keys(a);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const c=o[r];if(a[c]!==e[c]&&!pn(l,c))return!0}return!1}function ss({vnode:e,parent:a},l){for(;a;){const o=a.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=a.vnode).el=l,a=a.parent;else break}}const rs="components",yf="directives";function y(e,a){return us(rs,e,!0,a)||e}const rd=Symbol.for("v-ndc");function ud(e){return Qe(e)?us(rs,e,!1)||e:e||rd}function gn(e){return us(yf,e)}function us(e,a,l=!0,o=!1){const r=it||lt;if(r){const c=r.type;if(e===rs){const f=vo(c,!1);if(f&&(f===a||f===ht(a)||f===ol(ht(a))))return c}const m=Us(r[e]||c[e],a)||Us(r.appContext[e],a);return!m&&o?c:m}}function Us(e,a){return e&&(e[a]||e[ht(a)]||e[ol(ht(a))])}const cd=e=>e.__isSuspense;let oo=0;const Sf={name:"Suspense",__isSuspense:!0,process(e,a,l,o,r,c,m,f,s,u){if(e==null)Cf(a,l,o,r,c,m,f,s,u);else{if(c&&c.deps>0){a.suspense=e.suspense;return}Af(e,a,l,o,r,m,f,s,u)}},hydrate:kf,create:cs,normalize:xf},wf=Sf;function el(e,a){const l=e.props&&e.props[a];we(l)&&l()}function Cf(e,a,l,o,r,c,m,f,s){const{p:u,o:{createElement:g}}=s,d=g("div"),h=e.suspense=cs(e,r,o,a,d,l,c,m,f,s);u(null,h.pendingBranch=e.ssContent,d,null,o,h,c,m),h.deps>0?(el(e,"onPending"),el(e,"onFallback"),u(null,e.ssFallback,a,l,o,null,c,m),ra(h,e.ssFallback)):h.resolve(!1,!0)}function Af(e,a,l,o,r,c,m,f,{p:s,um:u,o:{createElement:g}}){const d=a.suspense=e.suspense;d.vnode=a,a.el=e.el;const h=a.ssContent,v=a.ssFallback,{activeBranch:_,pendingBranch:C,isInFallback:k,isHydrating:T}=d;if(C)d.pendingBranch=h,Ft(h,C)?(s(C,h,d.hiddenContainer,null,r,d,c,m,f),d.deps<=0?d.resolve():k&&(T||(s(_,v,l,o,r,null,c,m,f),ra(d,v)))):(d.pendingId=oo++,T?(d.isHydrating=!1,d.activeBranch=C):u(C,r,d),d.deps=0,d.effects.length=0,d.hiddenContainer=g("div"),k?(s(null,h,d.hiddenContainer,null,r,d,c,m,f),d.deps<=0?d.resolve():(s(_,v,l,o,r,null,c,m,f),ra(d,v))):_&&Ft(h,_)?(s(_,h,l,o,r,d,c,m,f),d.resolve(!0)):(s(null,h,d.hiddenContainer,null,r,d,c,m,f),d.deps<=0&&d.resolve()));else if(_&&Ft(h,_))s(_,h,l,o,r,d,c,m,f),ra(d,h);else if(el(a,"onPending"),d.pendingBranch=h,h.shapeFlag&512?d.pendingId=h.component.suspenseId:d.pendingId=oo++,s(null,h,d.hiddenContainer,null,r,d,c,m,f),d.deps<=0)d.resolve();else{const{timeout:b,pendingId:w}=d;b>0?setTimeout(()=>{d.pendingId===w&&d.fallback(v)},b):b===0&&d.fallback(v)}}function cs(e,a,l,o,r,c,m,f,s,u,g=!1){const{p:d,m:h,um:v,n:_,o:{parentNode:C,remove:k}}=u;let T;const b=$f(e);b&&a!=null&&a.pendingBranch&&(T=a.pendingId,a.deps++);const w=e.props?Dl(e.props.timeout):void 0,x=c,B={vnode:e,parent:a,parentComponent:l,namespace:m,container:o,hiddenContainer:r,deps:0,pendingId:oo++,timeout:typeof w=="number"?w:-1,activeBranch:null,pendingBranch:null,isInFallback:!g,isHydrating:g,isUnmounted:!1,effects:[],resolve(I=!1,V=!1){const{vnode:F,activeBranch:z,pendingBranch:j,pendingId:X,effects:U,parentComponent:pe,container:Be}=B;let q=!1;B.isHydrating?B.isHydrating=!1:I||(q=z&&j.transition&&j.transition.mode==="out-in",q&&(z.transition.afterLeave=()=>{X===B.pendingId&&(h(j,Be,c===x?_(z):c,0),Rl(U))}),z&&(C(z.el)!==B.hiddenContainer&&(c=_(z)),v(z,pe,B,!0)),q||h(j,Be,c,0)),ra(B,j),B.pendingBranch=null,B.isInFallback=!1;let K=B.parent,de=!1;for(;K;){if(K.pendingBranch){K.effects.push(...U),de=!0;break}K=K.parent}!de&&!q&&Rl(U),B.effects=[],b&&a&&a.pendingBranch&&T===a.pendingId&&(a.deps--,a.deps===0&&!V&&a.resolve()),el(F,"onResolve")},fallback(I){if(!B.pendingBranch)return;const{vnode:V,activeBranch:F,parentComponent:z,container:j,namespace:X}=B;el(V,"onFallback");const U=_(F),pe=()=>{B.isInFallback&&(d(null,I,j,U,z,null,X,f,s),ra(B,I))},Be=I.transition&&I.transition.mode==="out-in";Be&&(F.transition.afterLeave=pe),B.isInFallback=!0,v(F,z,null,!0),Be||pe()},move(I,V,F){B.activeBranch&&h(B.activeBranch,I,V,F),B.container=I},next(){return B.activeBranch&&_(B.activeBranch)},registerDep(I,V){const F=!!B.pendingBranch;F&&B.deps++;const z=I.vnode.el;I.asyncDep.catch(j=>{Ji(j,I,0)}).then(j=>{if(I.isUnmounted||B.isUnmounted||B.pendingId!==I.suspenseId)return;I.asyncResolved=!0;const{vnode:X}=I;_o(I,j,!1),z&&(X.el=z);const U=!z&&I.subTree.el;V(I,X,C(z||I.subTree.el),z?null:_(I.subTree),B,m,s),U&&k(U),ss(I,X.el),F&&--B.deps===0&&B.resolve()})},unmount(I,V){B.isUnmounted=!0,B.activeBranch&&v(B.activeBranch,l,I,V),B.pendingBranch&&v(B.pendingBranch,l,I,V)}};return B}function kf(e,a,l,o,r,c,m,f,s){const u=a.suspense=cs(a,o,l,e.parentNode,document.createElement("div"),null,r,c,m,f,!0),g=s(e,u.pendingBranch=a.ssContent,l,u,c,m);return u.deps===0&&u.resolve(!1,!0),g}function xf(e){const{shapeFlag:a,children:l}=e,o=a&32;e.ssContent=Ys(o?l.default:l),e.ssFallback=o?Ys(l.fallback):t(ft)}function Ys(e){let a;if(we(e)){const l=Ni&&e._c;l&&(e._d=!1,$()),e=e(),l&&(e._d=!0,a=yt,Od())}return ge(e)&&(e=hf(e)),e=xt(e),a&&!e.dynamicChildren&&(e.dynamicChildren=a.filter(l=>l!==e)),e}function dd(e,a){a&&a.pendingBranch?ge(e)?a.effects.push(...e):a.effects.push(e):Rl(e)}function ra(e,a){e.activeBranch=a;const{vnode:l,parentComponent:o}=e;let r=a.el;for(;!r&&a.component;)a=a.component.subTree,r=a.el;l.el=r,o&&o.subTree===l&&(o.vnode.el=r,ss(o,r))}function $f(e){var a;return((a=e.props)==null?void 0:a.suspensible)!=null&&e.props.suspensible!==!1}const md=Symbol.for("v-scx"),pd=()=>Fe(md);function ds(e,a){return rl(e,null,a)}function fd(e,a){return rl(e,null,{flush:"post"})}function gd(e,a){return rl(e,null,{flush:"sync"})}const _l={};function pt(e,a,l){return rl(e,a,l)}function rl(e,a,{immediate:l,deep:o,flush:r,once:c,onTrack:m,onTrigger:f}=je){if(a&&c){const I=a;a=(...V)=>{I(...V),B()}}const s=lt,u=I=>o===!0?I:Ii(I,o===!1?1:void 0);let g,d=!1,h=!1;if(ct(e)?(g=()=>e.value,d=Wa(e)):Ri(e)?(g=()=>u(e),d=!0):ge(e)?(h=!0,d=e.some(I=>Ri(I)||Wa(I)),g=()=>e.map(I=>{if(ct(I))return I.value;if(Ri(I))return u(I);if(we(I))return Qt(I,s,2)})):we(e)?a?g=()=>Qt(e,s,2):g=()=>(v&&v(),Bt(e,s,3,[_])):g=vt,a&&o){const I=g;g=()=>Ii(I())}let v,_=I=>{v=w.onStop=()=>{Qt(I,s,4),v=w.onStop=void 0}},C;if(cl)if(_=vt,a?l&&Bt(a,s,3,[g(),h?[]:void 0,_]):g(),r==="sync"){const I=pd();C=I.__watcherHandles||(I.__watcherHandles=[])}else return vt;let k=h?new Array(e.length).fill(_l):_l;const T=()=>{if(!(!w.active||!w.dirty))if(a){const I=w.run();(o||d||(h?I.some((V,F)=>Ht(V,k[F])):Ht(I,k)))&&(v&&v(),Bt(a,s,3,[I,k===_l?void 0:h&&k[0]===_l?[]:k,_]),k=I)}else w.run()};T.allowRecurse=!!a;let b;r==="sync"?b=T:r==="post"?b=()=>rt(T,s&&s.suspense):(T.pre=!0,s&&(T.id=s.uid),b=()=>mn(T));const w=new fa(g,vt,b),x=Ko(),B=()=>{w.stop(),x&&Uo(x.effects,w)};return a?l?T():k=w.run():r==="post"?rt(w.run.bind(w),s&&s.suspense):w.run(),C&&C.push(B),B}function Bf(e,a,l){const o=this.proxy,r=Qe(e)?e.includes(".")?hd(o,e):()=>o[e]:e.bind(o,o);let c;we(a)?c=a:(c=a.handler,l=a);const m=Oi(this),f=rl(r,c.bind(o),l);return m(),f}function hd(e,a){const l=a.split(".");return()=>{let o=e;for(let r=0;r<l.length&&o;r++)o=o[l[r]];return o}}function Ii(e,a,l=0,o){if(!Ue(e)||e.__v_skip)return e;if(a&&a>0){if(l>=a)return e;l++}if(o=o||new Set,o.has(e))return e;if(o.add(e),ct(e))Ii(e.value,a,l,o);else if(ge(e))for(let r=0;r<e.length;r++)Ii(e[r],a,l,o);else if(qi(e)||la(e))e.forEach(r=>{Ii(r,a,l,o)});else if(Tc(e))for(const r in e)Ii(e[r],a,l,o);return e}function bi(e,a){if(it===null)return e;const l=wn(it)||it.proxy,o=e.dirs||(e.dirs=[]);for(let r=0;r<a.length;r++){let[c,m,f,s=je]=a[r];c&&(we(c)&&(c={mounted:c,updated:c}),c.deep&&Ii(m),o.push({dir:c,instance:l,value:m,oldValue:void 0,arg:f,modifiers:s}))}return e}function Ot(e,a,l,o){const r=e.dirs,c=a&&a.dirs;for(let m=0;m<r.length;m++){const f=r[m];c&&(f.oldValue=c[m].value);let s=f.dir[o];s&&(Ui(),Bt(s,l,8,[e.el,f,e,a]),Yi())}}const ci=Symbol("_leaveCb"),bl=Symbol("_enterCb");function ms(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ci(()=>{e.isMounted=!0}),vn(()=>{e.isUnmounting=!0}),e}const It=[Function,Array],ps={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:It,onEnter:It,onAfterEnter:It,onEnterCancelled:It,onBeforeLeave:It,onLeave:It,onAfterLeave:It,onLeaveCancelled:It,onBeforeAppear:It,onAppear:It,onAfterAppear:It,onAppearCancelled:It},Tf={name:"BaseTransition",props:ps,setup(e,{slots:a}){const l=qt(),o=ms();let r;return()=>{const c=a.default&&hn(a.default(),!0);if(!c||!c.length)return;let m=c[0];if(c.length>1){for(const C of c)if(C.type!==ft){m=C;break}}const f=Ee(e),{mode:s}=f;if(o.isLeaving)return In(m);const u=Js(m);if(!u)return In(m);const g=ga(u,f,o,l);Vi(u,g);const d=l.subTree,h=d&&Js(d);let v=!1;const{getTransitionKey:_}=u.type;if(_){const C=_();r===void 0?r=C:C!==r&&(r=C,v=!0)}if(h&&h.type!==ft&&(!Ft(u,h)||v)){const C=ga(h,f,o,l);if(Vi(h,C),s==="out-in")return o.isLeaving=!0,C.afterLeave=()=>{o.isLeaving=!1,l.update.active!==!1&&(l.effect.dirty=!0,l.update())},In(m);s==="in-out"&&u.type!==ft&&(C.delayLeave=(k,T,b)=>{const w=bd(o,h);w[String(h.key)]=h,k[ci]=()=>{T(),k[ci]=void 0,delete g.delayedLeave},g.delayedLeave=b})}return m}}},_d=Tf;function bd(e,a){const{leavingVNodes:l}=e;let o=l.get(a.type);return o||(o=Object.create(null),l.set(a.type,o)),o}function ga(e,a,l,o){const{appear:r,mode:c,persisted:m=!1,onBeforeEnter:f,onEnter:s,onAfterEnter:u,onEnterCancelled:g,onBeforeLeave:d,onLeave:h,onAfterLeave:v,onLeaveCancelled:_,onBeforeAppear:C,onAppear:k,onAfterAppear:T,onAppearCancelled:b}=a,w=String(e.key),x=bd(l,e),B=(F,z)=>{F&&Bt(F,o,9,z)},I=(F,z)=>{const j=z[1];B(F,z),ge(F)?F.every(X=>X.length<=1)&&j():F.length<=1&&j()},V={mode:c,persisted:m,beforeEnter(F){let z=f;if(!l.isMounted)if(r)z=C||f;else return;F[ci]&&F[ci](!0);const j=x[w];j&&Ft(e,j)&&j.el[ci]&&j.el[ci](),B(z,[F])},enter(F){let z=s,j=u,X=g;if(!l.isMounted)if(r)z=k||s,j=T||u,X=b||g;else return;let U=!1;const pe=F[bl]=Be=>{U||(U=!0,Be?B(X,[F]):B(j,[F]),V.delayedLeave&&V.delayedLeave(),F[bl]=void 0)};z?I(z,[F,pe]):pe()},leave(F,z){const j=String(e.key);if(F[bl]&&F[bl](!0),l.isUnmounting)return z();B(d,[F]);let X=!1;const U=F[ci]=pe=>{X||(X=!0,z(),pe?B(_,[F]):B(v,[F]),F[ci]=void 0,x[j]===e&&delete x[j])};x[j]=e,h?I(h,[F,U]):U()},clone(F){return ga(F,a,l,o)}};return V}function In(e){if(ul(e))return e=Gt(e),e.children=null,e}function Js(e){return ul(e)?e.children?e.children[0]:void 0:e}function Vi(e,a){e.shapeFlag&6&&e.component?Vi(e.component.subTree,a):e.shapeFlag&128?(e.ssContent.transition=a.clone(e.ssContent),e.ssFallback.transition=a.clone(e.ssFallback)):e.transition=a}function hn(e,a=!1,l){let o=[],r=0;for(let c=0;c<e.length;c++){let m=e[c];const f=l==null?m.key:String(l)+String(m.key!=null?m.key:c);m.type===Ce?(m.patchFlag&128&&r++,o=o.concat(hn(m.children,a,f))):(a||m.type!==ft)&&o.push(f!=null?Gt(m,{key:f}):m)}if(r>1)for(let c=0;c<o.length;c++)o[c].patchFlag=-2;return o}/*! #__NO_SIDE_EFFECTS__ */function R(e,a){return we(e)?Xe({name:e.name},a,{setup:e}):e}const zi=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Lf(e){we(e)&&(e={loader:e});const{loader:a,loadingComponent:l,errorComponent:o,delay:r=200,timeout:c,suspensible:m=!0,onError:f}=e;let s=null,u,g=0;const d=()=>(g++,s=null,h()),h=()=>{let v;return s||(v=s=a().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),f)return new Promise((C,k)=>{f(_,()=>C(d()),()=>k(_),g+1)});throw _}).then(_=>v!==s&&s?s:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),u=_,_)))};return R({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return u},setup(){const v=lt;if(u)return()=>Dn(u,v);const _=b=>{s=null,Ji(b,v,13,!o)};if(m&&v.suspense||cl)return h().then(b=>()=>Dn(b,v)).catch(b=>(_(b),()=>o?t(o,{error:b}):null));const C=G(!1),k=G(),T=G(!!r);return r&&setTimeout(()=>{T.value=!1},r),c!=null&&setTimeout(()=>{if(!C.value&&!k.value){const b=new Error(`Async component timed out after ${c}ms.`);_(b),k.value=b}},c),h().then(()=>{C.value=!0,v.parent&&ul(v.parent.vnode)&&(v.parent.effect.dirty=!0,mn(v.parent.update))}).catch(b=>{_(b),k.value=b}),()=>{if(C.value&&u)return Dn(u,v);if(k.value&&o)return t(o,{error:k.value});if(l&&!T.value)return t(l)}}})}function Dn(e,a){const{ref:l,props:o,children:r,ce:c}=a.vnode,m=t(e,o,r);return m.ref=l,m.ce=c,delete a.vnode.ce,m}const ul=e=>e.type.__isKeepAlive,If={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:a}){const l=qt(),o=l.ctx;if(!o.renderer)return()=>{const b=a.default&&a.default();return b&&b.length===1?b[0]:b};const r=new Map,c=new Set;let m=null;const f=l.suspense,{renderer:{p:s,m:u,um:g,o:{createElement:d}}}=o,h=d("div");o.activate=(b,w,x,B,I)=>{const V=b.component;u(b,w,x,0,f),s(V.vnode,b,w,x,V,f,B,b.slotScopeIds,I),rt(()=>{V.isDeactivated=!1,V.a&&na(V.a);const F=b.props&&b.props.onVnodeMounted;F&&_t(F,V.parent,b)},f)},o.deactivate=b=>{const w=b.component;u(b,h,null,1,f),rt(()=>{w.da&&na(w.da);const x=b.props&&b.props.onVnodeUnmounted;x&&_t(x,w.parent,b),w.isDeactivated=!0},f)};function v(b){En(b),g(b,l,f,!0)}function _(b){r.forEach((w,x)=>{const B=vo(w.type);B&&(!b||!b(B))&&C(x)})}function C(b){const w=r.get(b);!m||!Ft(w,m)?v(w):m&&En(m),r.delete(b),c.delete(b)}pt(()=>[e.include,e.exclude],([b,w])=>{b&&_(x=>Ra(b,x)),w&&_(x=>!Ra(w,x))},{flush:"post",deep:!0});let k=null;const T=()=>{k!=null&&r.set(k,Rn(l.subTree))};return Ci(T),bn(T),vn(()=>{r.forEach(b=>{const{subTree:w,suspense:x}=l,B=Rn(w);if(b.type===B.type&&b.key===B.key){En(B);const I=B.component.da;I&&rt(I,x);return}v(b)})}),()=>{if(k=null,!a.default)return null;const b=a.default(),w=b[0];if(b.length>1)return m=null,b;if(!zt(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return m=null,w;let x=Rn(w);const B=x.type,I=vo(zi(x)?x.type.__asyncResolved||{}:B),{include:V,exclude:F,max:z}=e;if(V&&(!I||!Ra(V,I))||F&&I&&Ra(F,I))return m=x,w;const j=x.key==null?B:x.key,X=r.get(j);return x.el&&(x=Gt(x),w.shapeFlag&128&&(w.ssContent=x)),k=j,X?(x.el=X.el,x.component=X.component,x.transition&&Vi(x,x.transition),x.shapeFlag|=512,c.delete(j),c.add(j)):(c.add(j),z&&c.size>parseInt(z,10)&&C(c.values().next().value)),x.shapeFlag|=256,m=x,cd(w.type)?w:x}}},Df=If;function Ra(e,a){return ge(e)?e.some(l=>Ra(l,a)):Qe(e)?e.split(",").includes(a):dp(e)?e.test(a):!1}function fs(e,a){vd(e,"a",a)}function gs(e,a){vd(e,"da",a)}function vd(e,a,l=lt){const o=e.__wdc||(e.__wdc=()=>{let r=l;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(_n(a,o,l),l){let r=l.parent;for(;r&&r.parent;)ul(r.parent.vnode)&&Ef(o,a,l,r),r=r.parent}}function Ef(e,a,l,o){const r=_n(a,e,o,!0);Wi(()=>{Uo(o[a],r)},l)}function En(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Rn(e){return e.shapeFlag&128?e.ssContent:e}function _n(e,a,l=lt,o=!1){if(l){const r=l[e]||(l[e]=[]),c=a.__weh||(a.__weh=(...m)=>{if(l.isUnmounted)return;Ui();const f=Oi(l),s=Bt(a,l,e,m);return f(),Yi(),s});return o?r.unshift(c):r.push(c),c}}const ii=e=>(a,l=lt)=>(!cl||e==="sp")&&_n(e,(...o)=>a(...o),l),yd=ii("bm"),Ci=ii("m"),Sd=ii("bu"),bn=ii("u"),vn=ii("bum"),Wi=ii("um"),wd=ii("sp"),Cd=ii("rtg"),Ad=ii("rtc");function kd(e,a=lt){_n("ec",e,a)}function tt(e,a,l,o){let r;const c=l&&l[o];if(ge(e)||Qe(e)){r=new Array(e.length);for(let m=0,f=e.length;m<f;m++)r[m]=a(e[m],m,void 0,c&&c[m])}else if(typeof e=="number"){r=new Array(e);for(let m=0;m<e;m++)r[m]=a(m+1,m,void 0,c&&c[m])}else if(Ue(e))if(e[Symbol.iterator])r=Array.from(e,(m,f)=>a(m,f,void 0,c&&c[f]));else{const m=Object.keys(e);r=new Array(m.length);for(let f=0,s=m.length;f<s;f++){const u=m[f];r[f]=a(e[u],u,f,c&&c[f])}}else r=[];return l&&(l[o]=r),r}function Rf(e,a){for(let l=0;l<a.length;l++){const o=a[l];if(ge(o))for(let r=0;r<o.length;r++)e[o[r].name]=o[r].fn;else o&&(e[o.name]=o.key?(...r)=>{const c=o.fn(...r);return c&&(c.key=o.key),c}:o.fn)}return e}function Fi(e,a,l={},o,r){if(it.isCE||it.parent&&zi(it.parent)&&it.parent.isCE)return a!=="default"&&(l.name=a),t("slot",l,o&&o());let c=e[a];c&&c._c&&(c._d=!1),$();const m=c&&xd(c(l)),f=D(Ce,{key:l.key||m&&m.key||`_${a}`},m||(o?o():[]),m&&e._===1?64:-2);return!r&&f.scopeId&&(f.slotScopeIds=[f.scopeId+"-s"]),c&&c._c&&(c._d=!0),f}function xd(e){return e.some(a=>zt(a)?!(a.type===ft||a.type===Ce&&!xd(a.children)):!0)?e:null}function zf(e,a){const l={};for(const o in e)l[a&&/[A-Z]/.test(o)?`on:${o}`:Ha(o)]=e[o];return l}const so=e=>e?Yd(e)?wn(e)||e.proxy:so(e.parent):null,Na=Xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>so(e.parent),$root:e=>so(e.root),$emit:e=>e.emit,$options:e=>hs(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,mn(e.update)}),$nextTick:e=>e.n||(e.n=ka.bind(e.proxy)),$watch:e=>Bf.bind(e)}),zn=(e,a)=>e!==je&&!e.__isScriptSetup&&Pe(e,a),ro={get({_:e},a){const{ctx:l,setupState:o,data:r,props:c,accessCache:m,type:f,appContext:s}=e;let u;if(a[0]!=="$"){const v=m[a];if(v!==void 0)switch(v){case 1:return o[a];case 2:return r[a];case 4:return l[a];case 3:return c[a]}else{if(zn(o,a))return m[a]=1,o[a];if(r!==je&&Pe(r,a))return m[a]=2,r[a];if((u=e.propsOptions[0])&&Pe(u,a))return m[a]=3,c[a];if(l!==je&&Pe(l,a))return m[a]=4,l[a];uo&&(m[a]=0)}}const g=Na[a];let d,h;if(g)return a==="$attrs"&&wt(e,"get",a),g(e);if((d=f.__cssModules)&&(d=d[a]))return d;if(l!==je&&Pe(l,a))return m[a]=4,l[a];if(h=s.config.globalProperties,Pe(h,a))return h[a]},set({_:e},a,l){const{data:o,setupState:r,ctx:c}=e;return zn(r,a)?(r[a]=l,!0):o!==je&&Pe(o,a)?(o[a]=l,!0):Pe(e.props,a)||a[0]==="$"&&a.slice(1)in e?!1:(c[a]=l,!0)},has({_:{data:e,setupState:a,accessCache:l,ctx:o,appContext:r,propsOptions:c}},m){let f;return!!l[m]||e!==je&&Pe(e,m)||zn(a,m)||(f=c[0])&&Pe(f,m)||Pe(o,m)||Pe(Na,m)||Pe(r.config.globalProperties,m)},defineProperty(e,a,l){return l.get!=null?e._.accessCache[a]=0:Pe(l,"value")&&this.set(e,a,l.value,null),Reflect.defineProperty(e,a,l)}},Pf=Xe({},ro,{get(e,a){if(a!==Symbol.unscopables)return ro.get(e,a,e)},has(e,a){return a[0]!=="_"&&!hp(a)}});function Mf(){return null}function Vf(){return null}function Ff(e){}function Hf(e){}function Nf(){return null}function Of(){}function jf(e,a){return null}function Gf(){return Bd().slots}function $d(){return Bd().attrs}function Bd(){const e=qt();return e.setupContext||(e.setupContext=Kd(e))}function tl(e){return ge(e)?e.reduce((a,l)=>(a[l]=null,a),{}):e}function qf(e,a){const l=tl(e);for(const o in a){if(o.startsWith("__skip"))continue;let r=l[o];r?ge(r)||we(r)?r=l[o]={type:r,default:a[o]}:r.default=a[o]:r===null&&(r=l[o]={default:a[o]}),r&&a[`__skip_${o}`]&&(r.skipFactory=!0)}return l}function Uf(e,a){return!e||!a?e||a:ge(e)&&ge(a)?e.concat(a):Xe({},tl(e),tl(a))}function Yf(e,a){const l={};for(const o in e)a.includes(o)||Object.defineProperty(l,o,{enumerable:!0,get:()=>e[o]});return l}function Jf(e){const a=qt();let l=e();return ho(),Yo(l)&&(l=l.catch(o=>{throw Oi(a),o})),[l,()=>Oi(a)]}let uo=!0;function Wf(e){const a=hs(e),l=e.proxy,o=e.ctx;uo=!1,a.beforeCreate&&Ws(a.beforeCreate,e,"bc");const{data:r,computed:c,methods:m,watch:f,provide:s,inject:u,created:g,beforeMount:d,mounted:h,beforeUpdate:v,updated:_,activated:C,deactivated:k,beforeDestroy:T,beforeUnmount:b,destroyed:w,unmounted:x,render:B,renderTracked:I,renderTriggered:V,errorCaptured:F,serverPrefetch:z,expose:j,inheritAttrs:X,components:U,directives:pe,filters:Be}=a;if(u&&Kf(u,o,null),m)for(const de in m){const ie=m[de];we(ie)&&(o[de]=ie.bind(l))}if(r){const de=r.call(l,l);Ue(de)&&(e.data=ti(de))}if(uo=!0,c)for(const de in c){const ie=c[de],Ie=we(ie)?ie.bind(l,l):we(ie.get)?ie.get.bind(l,l):vt,We=!we(ie)&&we(ie.set)?ie.set.bind(l):vt,nt=H({get:Ie,set:We});Object.defineProperty(o,de,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Ye=>nt.value=Ye})}if(f)for(const de in f)Td(f[de],o,l,de);if(s){const de=we(s)?s.call(l):s;Reflect.ownKeys(de).forEach(ie=>{ut(ie,de[ie])})}g&&Ws(g,e,"c");function K(de,ie){ge(ie)?ie.forEach(Ie=>de(Ie.bind(l))):ie&&de(ie.bind(l))}if(K(yd,d),K(Ci,h),K(Sd,v),K(bn,_),K(fs,C),K(gs,k),K(kd,F),K(Ad,I),K(Cd,V),K(vn,b),K(Wi,x),K(wd,z),ge(j))if(j.length){const de=e.exposed||(e.exposed={});j.forEach(ie=>{Object.defineProperty(de,ie,{get:()=>l[ie],set:Ie=>l[ie]=Ie})})}else e.exposed||(e.exposed={});B&&e.render===vt&&(e.render=B),X!=null&&(e.inheritAttrs=X),U&&(e.components=U),pe&&(e.directives=pe)}function Kf(e,a,l=vt){ge(e)&&(e=co(e));for(const o in e){const r=e[o];let c;Ue(r)?"default"in r?c=Fe(r.from||o,r.default,!0):c=Fe(r.from||o):c=Fe(r),ct(c)?Object.defineProperty(a,o,{enumerable:!0,configurable:!0,get:()=>c.value,set:m=>c.value=m}):a[o]=c}}function Ws(e,a,l){Bt(ge(e)?e.map(o=>o.bind(a.proxy)):e.bind(a.proxy),a,l)}function Td(e,a,l,o){const r=o.includes(".")?hd(l,o):()=>l[o];if(Qe(e)){const c=a[e];we(c)&&pt(r,c)}else if(we(e))pt(r,e.bind(l));else if(Ue(e))if(ge(e))e.forEach(c=>Td(c,a,l,o));else{const c=we(e.handler)?e.handler.bind(l):a[e.handler];we(c)&&pt(r,c,e)}}function hs(e){const a=e.type,{mixins:l,extends:o}=a,{mixins:r,optionsCache:c,config:{optionMergeStrategies:m}}=e.appContext,f=c.get(a);let s;return f?s=f:!r.length&&!l&&!o?s=a:(s={},r.length&&r.forEach(u=>Pl(s,u,m,!0)),Pl(s,a,m)),Ue(a)&&c.set(a,s),s}function Pl(e,a,l,o=!1){const{mixins:r,extends:c}=a;c&&Pl(e,c,l,!0),r&&r.forEach(m=>Pl(e,m,l,!0));for(const m in a)if(!(o&&m==="expose")){const f=Xf[m]||l&&l[m];e[m]=f?f(e[m],a[m]):a[m]}return e}const Xf={data:Ks,props:Xs,emits:Xs,methods:za,computed:za,beforeCreate:gt,created:gt,beforeMount:gt,mounted:gt,beforeUpdate:gt,updated:gt,beforeDestroy:gt,beforeUnmount:gt,destroyed:gt,unmounted:gt,activated:gt,deactivated:gt,errorCaptured:gt,serverPrefetch:gt,components:za,directives:za,watch:Zf,provide:Ks,inject:Qf};function Ks(e,a){return a?e?function(){return Xe(we(e)?e.call(this,this):e,we(a)?a.call(this,this):a)}:a:e}function Qf(e,a){return za(co(e),co(a))}function co(e){if(ge(e)){const a={};for(let l=0;l<e.length;l++)a[e[l]]=e[l];return a}return e}function gt(e,a){return e?[...new Set([].concat(e,a))]:a}function za(e,a){return e?Xe(Object.create(null),e,a):a}function Xs(e,a){return e?ge(e)&&ge(a)?[...new Set([...e,...a])]:Xe(Object.create(null),tl(e),tl(a??{})):a}function Zf(e,a){if(!e)return a;if(!a)return e;const l=Xe(Object.create(null),e);for(const o in a)l[o]=gt(e[o],a[o]);return l}function Ld(){return{app:null,config:{isNativeTag:up,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let eg=0;function tg(e,a){return function(o,r=null){we(o)||(o=Xe({},o)),r!=null&&!Ue(r)&&(r=null);const c=Ld(),m=new WeakSet;let f=!1;const s=c.app={_uid:eg++,_component:o,_props:r,_container:null,_context:c,_instance:null,version:Qd,get config(){return c.config},set config(u){},use(u,...g){return m.has(u)||(u&&we(u.install)?(m.add(u),u.install(s,...g)):we(u)&&(m.add(u),u(s,...g))),s},mixin(u){return c.mixins.includes(u)||c.mixins.push(u),s},component(u,g){return g?(c.components[u]=g,s):c.components[u]},directive(u,g){return g?(c.directives[u]=g,s):c.directives[u]},mount(u,g,d){if(!f){const h=t(o,r);return h.appContext=c,d===!0?d="svg":d===!1&&(d=void 0),g&&a?a(h,u):e(h,u,d),f=!0,s._container=u,u.__vue_app__=s,wn(h.component)||h.component.proxy}},unmount(){f&&(e(null,s._container),delete s._container.__vue_app__)},provide(u,g){return c.provides[u]=g,s},runWithContext(u){il=s;try{return u()}finally{il=null}}};return s}}let il=null;function ut(e,a){if(lt){let l=lt.provides;const o=lt.parent&&lt.parent.provides;o===l&&(l=lt.provides=Object.create(o)),l[e]=a}}function Fe(e,a,l=!1){const o=lt||it;if(o||il){const r=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:il._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return l&&we(a)?a.call(o&&o.proxy):a}}function ig(){return!!(lt||it||il)}function ag(e,a,l,o=!1){const r={},c={};Il(c,Sn,1),e.propsDefaults=Object.create(null),Id(e,a,r,c);for(const m in e.propsOptions[0])m in r||(r[m]=void 0);l?e.props=o?r:Wc(r):e.type.props?e.props=r:e.props=c,e.attrs=c}function lg(e,a,l,o){const{props:r,attrs:c,vnode:{patchFlag:m}}=e,f=Ee(r),[s]=e.propsOptions;let u=!1;if((o||m>0)&&!(m&16)){if(m&8){const g=e.vnode.dynamicProps;for(let d=0;d<g.length;d++){let h=g[d];if(pn(e.emitsOptions,h))continue;const v=a[h];if(s)if(Pe(c,h))v!==c[h]&&(c[h]=v,u=!0);else{const _=ht(h);r[_]=mo(s,f,_,v,e,!1)}else v!==c[h]&&(c[h]=v,u=!0)}}}else{Id(e,a,r,c)&&(u=!0);let g;for(const d in f)(!a||!Pe(a,d)&&((g=$t(d))===d||!Pe(a,g)))&&(s?l&&(l[d]!==void 0||l[g]!==void 0)&&(r[d]=mo(s,f,d,void 0,e,!0)):delete r[d]);if(c!==f)for(const d in c)(!a||!Pe(a,d))&&(delete c[d],u=!0)}u&&Xt(e,"set","$attrs")}function Id(e,a,l,o){const[r,c]=e.propsOptions;let m=!1,f;if(a)for(let s in a){if(Fa(s))continue;const u=a[s];let g;r&&Pe(r,g=ht(s))?!c||!c.includes(g)?l[g]=u:(f||(f={}))[g]=u:pn(e.emitsOptions,s)||(!(s in o)||u!==o[s])&&(o[s]=u,m=!0)}if(c){const s=Ee(l),u=f||je;for(let g=0;g<c.length;g++){const d=c[g];l[d]=mo(r,s,d,u[d],e,!Pe(u,d))}}return m}function mo(e,a,l,o,r,c){const m=e[l];if(m!=null){const f=Pe(m,"default");if(f&&o===void 0){const s=m.default;if(m.type!==Function&&!m.skipFactory&&we(s)){const{propsDefaults:u}=r;if(l in u)o=u[l];else{const g=Oi(r);o=u[l]=s.call(null,a),g()}}else o=s}m[0]&&(c&&!f?o=!1:m[1]&&(o===""||o===$t(l))&&(o=!0))}return o}function Dd(e,a,l=!1){const o=a.propsCache,r=o.get(e);if(r)return r;const c=e.props,m={},f=[];let s=!1;if(!we(e)){const g=d=>{s=!0;const[h,v]=Dd(d,a,!0);Xe(m,h),v&&f.push(...v)};!l&&a.mixins.length&&a.mixins.forEach(g),e.extends&&g(e.extends),e.mixins&&e.mixins.forEach(g)}if(!c&&!s)return Ue(e)&&o.set(e,aa),aa;if(ge(c))for(let g=0;g<c.length;g++){const d=ht(c[g]);Qs(d)&&(m[d]=je)}else if(c)for(const g in c){const d=ht(g);if(Qs(d)){const h=c[g],v=m[d]=ge(h)||we(h)?{type:h}:Xe({},h);if(v){const _=tr(Boolean,v.type),C=tr(String,v.type);v[0]=_>-1,v[1]=C<0||_<C,(_>-1||Pe(v,"default"))&&f.push(d)}}}const u=[m,f];return Ue(e)&&o.set(e,u),u}function Qs(e){return e[0]!=="$"}function Zs(e){const a=e&&e.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:e===null?"null":""}function er(e,a){return Zs(e)===Zs(a)}function tr(e,a){return ge(a)?a.findIndex(l=>er(l,e)):we(a)&&er(a,e)?0:-1}const Ed=e=>e[0]==="_"||e==="$stable",_s=e=>ge(e)?e.map(xt):[xt(e)],ng=(e,a,l)=>{if(a._n)return a;const o=i((...r)=>_s(a(...r)),l);return o._c=!1,o},Rd=(e,a,l)=>{const o=e._ctx;for(const r in e){if(Ed(r))continue;const c=e[r];if(we(c))a[r]=ng(r,c,o);else if(c!=null){const m=_s(c);a[r]=()=>m}}},zd=(e,a)=>{const l=_s(a);e.slots.default=()=>l},og=(e,a)=>{if(e.vnode.shapeFlag&32){const l=a._;l?(e.slots=Ee(a),Il(a,"_",l)):Rd(a,e.slots={})}else e.slots={},a&&zd(e,a);Il(e.slots,Sn,1)},sg=(e,a,l)=>{const{vnode:o,slots:r}=e;let c=!0,m=je;if(o.shapeFlag&32){const f=a._;f?l&&f===1?c=!1:(Xe(r,a),!l&&f===1&&delete r._):(c=!a.$stable,Rd(a,r)),m=a}else a&&(zd(e,a),m={default:1});if(c)for(const f in r)!Ed(f)&&m[f]==null&&delete r[f]};function Ml(e,a,l,o,r=!1){if(ge(e)){e.forEach((h,v)=>Ml(h,a&&(ge(a)?a[v]:a),l,o,r));return}if(zi(o)&&!r)return;const c=o.shapeFlag&4?wn(o.component)||o.component.proxy:o.el,m=r?null:c,{i:f,r:s}=e,u=a&&a.r,g=f.refs===je?f.refs={}:f.refs,d=f.setupState;if(u!=null&&u!==s&&(Qe(u)?(g[u]=null,Pe(d,u)&&(d[u]=null)):ct(u)&&(u.value=null)),we(s))Qt(s,f,12,[m,g]);else{const h=Qe(s),v=ct(s),_=e.f;if(h||v){const C=()=>{if(_){const k=h?Pe(d,s)?d[s]:g[s]:s.value;r?ge(k)&&Uo(k,c):ge(k)?k.includes(c)||k.push(c):h?(g[s]=[c],Pe(d,s)&&(d[s]=g[s])):(s.value=[c],e.k&&(g[e.k]=s.value))}else h?(g[s]=m,Pe(d,s)&&(d[s]=m)):v&&(s.value=m,e.k&&(g[e.k]=m))};r||_?C():(C.id=-1,rt(C,l))}}}let ni=!1;const rg=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",ug=e=>e.namespaceURI.includes("MathML"),vl=e=>{if(rg(e))return"svg";if(ug(e))return"mathml"},yl=e=>e.nodeType===8;function cg(e){const{mt:a,p:l,o:{patchProp:o,createText:r,nextSibling:c,parentNode:m,remove:f,insert:s,createComment:u}}=e,g=(w,x)=>{if(!x.hasChildNodes()){l(null,w,x),zl(),x._vnode=w;return}ni=!1,d(x.firstChild,w,null,null,null),zl(),x._vnode=w,ni&&console.error("Hydration completed but contains mismatches.")},d=(w,x,B,I,V,F=!1)=>{const z=yl(w)&&w.data==="[",j=()=>C(w,x,B,I,V,z),{type:X,ref:U,shapeFlag:pe,patchFlag:Be}=x;let q=w.nodeType;x.el=w,Be===-2&&(F=!1,x.dynamicChildren=null);let K=null;switch(X){case Hi:q!==3?x.children===""?(s(x.el=r(""),m(w),w),K=w):K=j():(w.data!==x.children&&(ni=!0,w.data=x.children),K=c(w));break;case ft:b(w)?(K=c(w),T(x.el=w.content.firstChild,w,B)):q!==8||z?K=j():K=c(w);break;case Pi:if(z&&(w=c(w),q=w.nodeType),q===1||q===3){K=w;const de=!x.children.length;for(let ie=0;ie<x.staticCount;ie++)de&&(x.children+=K.nodeType===1?K.outerHTML:K.data),ie===x.staticCount-1&&(x.anchor=K),K=c(K);return z?c(K):K}else j();break;case Ce:z?K=_(w,x,B,I,V,F):K=j();break;default:if(pe&1)(q!==1||x.type.toLowerCase()!==w.tagName.toLowerCase())&&!b(w)?K=j():K=h(w,x,B,I,V,F);else if(pe&6){x.slotScopeIds=V;const de=m(w);if(z?K=k(w):yl(w)&&w.data==="teleport start"?K=k(w,w.data,"teleport end"):K=c(w),a(x,de,null,B,I,vl(de),F),zi(x)){let ie;z?(ie=t(Ce),ie.anchor=K?K.previousSibling:de.lastChild):ie=w.nodeType===3?n(""):t("div"),ie.el=w,x.component.subTree=ie}}else pe&64?q!==8?K=j():K=x.type.hydrate(w,x,B,I,V,F,e,v):pe&128&&(K=x.type.hydrate(w,x,B,I,vl(m(w)),V,F,e,d))}return U!=null&&Ml(U,null,I,x),K},h=(w,x,B,I,V,F)=>{F=F||!!x.dynamicChildren;const{type:z,props:j,patchFlag:X,shapeFlag:U,dirs:pe,transition:Be}=x,q=z==="input"||z==="option";if(q||X!==-1){pe&&Ot(x,null,B,"created");let K=!1;if(b(w)){K=Fd(I,Be)&&B&&B.vnode.props&&B.vnode.props.appear;const ie=w.content.firstChild;K&&Be.beforeEnter(ie),T(ie,w,B),x.el=w=ie}if(U&16&&!(j&&(j.innerHTML||j.textContent))){let ie=v(w.firstChild,x,w,B,I,V,F);for(;ie;){ni=!0;const Ie=ie;ie=ie.nextSibling,f(Ie)}}else U&8&&w.textContent!==x.children&&(ni=!0,w.textContent=x.children);if(j)if(q||!F||X&48)for(const ie in j)(q&&(ie.endsWith("value")||ie==="indeterminate")||nl(ie)&&!Fa(ie)||ie[0]===".")&&o(w,ie,null,j[ie],void 0,void 0,B);else j.onClick&&o(w,"onClick",null,j.onClick,void 0,void 0,B);let de;(de=j&&j.onVnodeBeforeMount)&&_t(de,B,x),pe&&Ot(x,null,B,"beforeMount"),((de=j&&j.onVnodeMounted)||pe||K)&&dd(()=>{de&&_t(de,B,x),K&&Be.enter(w),pe&&Ot(x,null,B,"mounted")},I)}return w.nextSibling},v=(w,x,B,I,V,F,z)=>{z=z||!!x.dynamicChildren;const j=x.children,X=j.length;for(let U=0;U<X;U++){const pe=z?j[U]:j[U]=xt(j[U]);if(w)w=d(w,pe,I,V,F,z);else{if(pe.type===Hi&&!pe.children)continue;ni=!0,l(null,pe,B,null,I,V,vl(B),F)}}return w},_=(w,x,B,I,V,F)=>{const{slotScopeIds:z}=x;z&&(V=V?V.concat(z):z);const j=m(w),X=v(c(w),x,j,B,I,V,F);return X&&yl(X)&&X.data==="]"?c(x.anchor=X):(ni=!0,s(x.anchor=u("]"),j,X),X)},C=(w,x,B,I,V,F)=>{if(ni=!0,x.el=null,F){const X=k(w);for(;;){const U=c(w);if(U&&U!==X)f(U);else break}}const z=c(w),j=m(w);return f(w),l(null,x,j,z,B,I,vl(j),V),z},k=(w,x="[",B="]")=>{let I=0;for(;w;)if(w=c(w),w&&yl(w)&&(w.data===x&&I++,w.data===B)){if(I===0)return c(w);I--}return w},T=(w,x,B)=>{const I=x.parentNode;I&&I.replaceChild(w,x);let V=B;for(;V;)V.vnode.el===x&&(V.vnode.el=V.subTree.el=w),V=V.parent},b=w=>w.nodeType===1&&w.tagName.toLowerCase()==="template";return[g,d]}const rt=dd;function Pd(e){return Vd(e)}function Md(e){return Vd(e,cg)}function Vd(e,a){const l=Lc();l.__VUE__=!0;const{insert:o,remove:r,patchProp:c,createElement:m,createText:f,createComment:s,setText:u,setElementText:g,parentNode:d,nextSibling:h,setScopeId:v=vt,insertStaticContent:_}=e,C=(L,E,O,Q=null,Z=null,le=null,re=void 0,ae=null,ne=!!E.dynamicChildren)=>{if(L===E)return;L&&!Ft(L,E)&&(Q=oe(L),Ye(L,Z,le,!0),L=null),E.patchFlag===-2&&(ne=!1,E.dynamicChildren=null);const{type:te,ref:me,shapeFlag:ye}=E;switch(te){case Hi:k(L,E,O,Q);break;case ft:T(L,E,O,Q);break;case Pi:L==null&&b(E,O,Q,re);break;case Ce:U(L,E,O,Q,Z,le,re,ae,ne);break;default:ye&1?B(L,E,O,Q,Z,le,re,ae,ne):ye&6?pe(L,E,O,Q,Z,le,re,ae,ne):(ye&64||ye&128)&&te.process(L,E,O,Q,Z,le,re,ae,ne,Ne)}me!=null&&Z&&Ml(me,L&&L.ref,le,E||L,!E)},k=(L,E,O,Q)=>{if(L==null)o(E.el=f(E.children),O,Q);else{const Z=E.el=L.el;E.children!==L.children&&u(Z,E.children)}},T=(L,E,O,Q)=>{L==null?o(E.el=s(E.children||""),O,Q):E.el=L.el},b=(L,E,O,Q)=>{[L.el,L.anchor]=_(L.children,E,O,Q,L.el,L.anchor)},w=({el:L,anchor:E},O,Q)=>{let Z;for(;L&&L!==E;)Z=h(L),o(L,O,Q),L=Z;o(E,O,Q)},x=({el:L,anchor:E})=>{let O;for(;L&&L!==E;)O=h(L),r(L),L=O;r(E)},B=(L,E,O,Q,Z,le,re,ae,ne)=>{E.type==="svg"?re="svg":E.type==="math"&&(re="mathml"),L==null?I(E,O,Q,Z,le,re,ae,ne):z(L,E,Z,le,re,ae,ne)},I=(L,E,O,Q,Z,le,re,ae)=>{let ne,te;const{props:me,shapeFlag:ye,transition:ve,dirs:Ae}=L;if(ne=L.el=m(L.type,le,me&&me.is,me),ye&8?g(ne,L.children):ye&16&&F(L.children,ne,null,Q,Z,Pn(L,le),re,ae),Ae&&Ot(L,null,Q,"created"),V(ne,L,L.scopeId,re,Q),me){for(const qe in me)qe!=="value"&&!Fa(qe)&&c(ne,qe,null,me[qe],le,L.children,Q,Z,se);"value"in me&&c(ne,"value",null,me.value,le),(te=me.onVnodeBeforeMount)&&_t(te,Q,L)}Ae&&Ot(L,null,Q,"beforeMount");const De=Fd(Z,ve);De&&ve.beforeEnter(ne),o(ne,E,O),((te=me&&me.onVnodeMounted)||De||Ae)&&rt(()=>{te&&_t(te,Q,L),De&&ve.enter(ne),Ae&&Ot(L,null,Q,"mounted")},Z)},V=(L,E,O,Q,Z)=>{if(O&&v(L,O),Q)for(let le=0;le<Q.length;le++)v(L,Q[le]);if(Z){let le=Z.subTree;if(E===le){const re=Z.vnode;V(L,re,re.scopeId,re.slotScopeIds,Z.parent)}}},F=(L,E,O,Q,Z,le,re,ae,ne=0)=>{for(let te=ne;te<L.length;te++){const me=L[te]=ae?di(L[te]):xt(L[te]);C(null,me,E,O,Q,Z,le,re,ae)}},z=(L,E,O,Q,Z,le,re)=>{const ae=E.el=L.el;let{patchFlag:ne,dynamicChildren:te,dirs:me}=E;ne|=L.patchFlag&16;const ye=L.props||je,ve=E.props||je;let Ae;if(O&&xi(O,!1),(Ae=ve.onVnodeBeforeUpdate)&&_t(Ae,O,E,L),me&&Ot(E,L,O,"beforeUpdate"),O&&xi(O,!0),te?j(L.dynamicChildren,te,ae,O,Q,Pn(E,Z),le):re||ie(L,E,ae,null,O,Q,Pn(E,Z),le,!1),ne>0){if(ne&16)X(ae,E,ye,ve,O,Q,Z);else if(ne&2&&ye.class!==ve.class&&c(ae,"class",null,ve.class,Z),ne&4&&c(ae,"style",ye.style,ve.style,Z),ne&8){const De=E.dynamicProps;for(let qe=0;qe<De.length;qe++){const Ke=De[qe],ot=ye[Ke],Pt=ve[Ke];(Pt!==ot||Ke==="value")&&c(ae,Ke,ot,Pt,Z,L.children,O,Q,se)}}ne&1&&L.children!==E.children&&g(ae,E.children)}else!re&&te==null&&X(ae,E,ye,ve,O,Q,Z);((Ae=ve.onVnodeUpdated)||me)&&rt(()=>{Ae&&_t(Ae,O,E,L),me&&Ot(E,L,O,"updated")},Q)},j=(L,E,O,Q,Z,le,re)=>{for(let ae=0;ae<E.length;ae++){const ne=L[ae],te=E[ae],me=ne.el&&(ne.type===Ce||!Ft(ne,te)||ne.shapeFlag&70)?d(ne.el):O;C(ne,te,me,null,Q,Z,le,re,!0)}},X=(L,E,O,Q,Z,le,re)=>{if(O!==Q){if(O!==je)for(const ae in O)!Fa(ae)&&!(ae in Q)&&c(L,ae,O[ae],null,re,E.children,Z,le,se);for(const ae in Q){if(Fa(ae))continue;const ne=Q[ae],te=O[ae];ne!==te&&ae!=="value"&&c(L,ae,te,ne,re,E.children,Z,le,se)}"value"in Q&&c(L,"value",O.value,Q.value,re)}},U=(L,E,O,Q,Z,le,re,ae,ne)=>{const te=E.el=L?L.el:f(""),me=E.anchor=L?L.anchor:f("");let{patchFlag:ye,dynamicChildren:ve,slotScopeIds:Ae}=E;Ae&&(ae=ae?ae.concat(Ae):Ae),L==null?(o(te,O,Q),o(me,O,Q),F(E.children||[],O,me,Z,le,re,ae,ne)):ye>0&&ye&64&&ve&&L.dynamicChildren?(j(L.dynamicChildren,ve,O,Z,le,re,ae),(E.key!=null||Z&&E===Z.subTree)&&bs(L,E,!0)):ie(L,E,O,me,Z,le,re,ae,ne)},pe=(L,E,O,Q,Z,le,re,ae,ne)=>{E.slotScopeIds=ae,L==null?E.shapeFlag&512?Z.ctx.activate(E,O,Q,re,ne):Be(E,O,Q,Z,le,re,ne):q(L,E,ne)},Be=(L,E,O,Q,Z,le,re)=>{const ae=L.component=Ud(L,Q,Z);if(ul(L)&&(ae.ctx.renderer=Ne),Jd(ae),ae.asyncDep){if(Z&&Z.registerDep(ae,K),!L.el){const ne=ae.subTree=t(ft);T(null,ne,E,O)}}else K(ae,L,E,O,Z,le,re)},q=(L,E,O)=>{const Q=E.component=L.component;if(vf(L,E,O))if(Q.asyncDep&&!Q.asyncResolved){de(Q,E,O);return}else Q.next=E,mf(Q.update),Q.effect.dirty=!0,Q.update();else E.el=L.el,Q.vnode=E},K=(L,E,O,Q,Z,le,re)=>{const ae=()=>{if(L.isMounted){let{next:me,bu:ye,u:ve,parent:Ae,vnode:De}=L;{const Xi=Hd(L);if(Xi){me&&(me.el=De.el,de(L,me,re)),Xi.asyncDep.then(()=>{L.isUnmounted||ae()});return}}let qe=me,Ke;xi(L,!1),me?(me.el=De.el,de(L,me,re)):me=De,ye&&na(ye),(Ke=me.props&&me.props.onVnodeBeforeUpdate)&&_t(Ke,Ae,me,De),xi(L,!0);const ot=$l(L),Pt=L.subTree;L.subTree=ot,C(Pt,ot,d(Pt.el),oe(Pt),L,Z,le),me.el=ot.el,qe===null&&ss(L,ot.el),ve&&rt(ve,Z),(Ke=me.props&&me.props.onVnodeUpdated)&&rt(()=>_t(Ke,Ae,me,De),Z)}else{let me;const{el:ye,props:ve}=E,{bm:Ae,m:De,parent:qe}=L,Ke=zi(E);if(xi(L,!1),Ae&&na(Ae),!Ke&&(me=ve&&ve.onVnodeBeforeMount)&&_t(me,qe,E),xi(L,!0),ye&&$e){const ot=()=>{L.subTree=$l(L),$e(ye,L.subTree,L,Z,null)};Ke?E.type.__asyncLoader().then(()=>!L.isUnmounted&&ot()):ot()}else{const ot=L.subTree=$l(L);C(null,ot,O,Q,L,Z,le),E.el=ot.el}if(De&&rt(De,Z),!Ke&&(me=ve&&ve.onVnodeMounted)){const ot=E;rt(()=>_t(me,qe,ot),Z)}(E.shapeFlag&256||qe&&zi(qe.vnode)&&qe.vnode.shapeFlag&256)&&L.a&&rt(L.a,Z),L.isMounted=!0,E=O=Q=null}},ne=L.effect=new fa(ae,vt,()=>mn(te),L.scope),te=L.update=()=>{ne.dirty&&ne.run()};te.id=L.uid,xi(L,!0),te()},de=(L,E,O)=>{E.component=L;const Q=L.vnode.props;L.vnode=E,L.next=null,lg(L,E.props,Q,O),sg(L,E.children,O),Ui(),Gs(L),Yi()},ie=(L,E,O,Q,Z,le,re,ae,ne=!1)=>{const te=L&&L.children,me=L?L.shapeFlag:0,ye=E.children,{patchFlag:ve,shapeFlag:Ae}=E;if(ve>0){if(ve&128){We(te,ye,O,Q,Z,le,re,ae,ne);return}else if(ve&256){Ie(te,ye,O,Q,Z,le,re,ae,ne);return}}Ae&8?(me&16&&se(te,Z,le),ye!==te&&g(O,ye)):me&16?Ae&16?We(te,ye,O,Q,Z,le,re,ae,ne):se(te,Z,le,!0):(me&8&&g(O,""),Ae&16&&F(ye,O,Q,Z,le,re,ae,ne))},Ie=(L,E,O,Q,Z,le,re,ae,ne)=>{L=L||aa,E=E||aa;const te=L.length,me=E.length,ye=Math.min(te,me);let ve;for(ve=0;ve<ye;ve++){const Ae=E[ve]=ne?di(E[ve]):xt(E[ve]);C(L[ve],Ae,O,null,Z,le,re,ae,ne)}te>me?se(L,Z,le,!0,!1,ye):F(E,O,Q,Z,le,re,ae,ne,ye)},We=(L,E,O,Q,Z,le,re,ae,ne)=>{let te=0;const me=E.length;let ye=L.length-1,ve=me-1;for(;te<=ye&&te<=ve;){const Ae=L[te],De=E[te]=ne?di(E[te]):xt(E[te]);if(Ft(Ae,De))C(Ae,De,O,null,Z,le,re,ae,ne);else break;te++}for(;te<=ye&&te<=ve;){const Ae=L[ye],De=E[ve]=ne?di(E[ve]):xt(E[ve]);if(Ft(Ae,De))C(Ae,De,O,null,Z,le,re,ae,ne);else break;ye--,ve--}if(te>ye){if(te<=ve){const Ae=ve+1,De=Ae<me?E[Ae].el:Q;for(;te<=ve;)C(null,E[te]=ne?di(E[te]):xt(E[te]),O,De,Z,le,re,ae,ne),te++}}else if(te>ve)for(;te<=ye;)Ye(L[te],Z,le,!0),te++;else{const Ae=te,De=te,qe=new Map;for(te=De;te<=ve;te++){const At=E[te]=ne?di(E[te]):xt(E[te]);At.key!=null&&qe.set(At.key,te)}let Ke,ot=0;const Pt=ve-De+1;let Xi=!1,Ds=0;const Ba=new Array(Pt);for(te=0;te<Pt;te++)Ba[te]=0;for(te=Ae;te<=ye;te++){const At=L[te];if(ot>=Pt){Ye(At,Z,le,!0);continue}let Nt;if(At.key!=null)Nt=qe.get(At.key);else for(Ke=De;Ke<=ve;Ke++)if(Ba[Ke-De]===0&&Ft(At,E[Ke])){Nt=Ke;break}Nt===void 0?Ye(At,Z,le,!0):(Ba[Nt-De]=te+1,Nt>=Ds?Ds=Nt:Xi=!0,C(At,E[Nt],O,null,Z,le,re,ae,ne),ot++)}const Es=Xi?dg(Ba):aa;for(Ke=Es.length-1,te=Pt-1;te>=0;te--){const At=De+te,Nt=E[At],Rs=At+1<me?E[At+1].el:Q;Ba[te]===0?C(null,Nt,O,Rs,Z,le,re,ae,ne):Xi&&(Ke<0||te!==Es[Ke]?nt(Nt,O,Rs,2):Ke--)}}},nt=(L,E,O,Q,Z=null)=>{const{el:le,type:re,transition:ae,children:ne,shapeFlag:te}=L;if(te&6){nt(L.component.subTree,E,O,Q);return}if(te&128){L.suspense.move(E,O,Q);return}if(te&64){re.move(L,E,O,Ne);return}if(re===Ce){o(le,E,O);for(let ye=0;ye<ne.length;ye++)nt(ne[ye],E,O,Q);o(L.anchor,E,O);return}if(re===Pi){w(L,E,O);return}if(Q!==2&&te&1&&ae)if(Q===0)ae.beforeEnter(le),o(le,E,O),rt(()=>ae.enter(le),Z);else{const{leave:ye,delayLeave:ve,afterLeave:Ae}=ae,De=()=>o(le,E,O),qe=()=>{ye(le,()=>{De(),Ae&&Ae()})};ve?ve(le,De,qe):qe()}else o(le,E,O)},Ye=(L,E,O,Q=!1,Z=!1)=>{const{type:le,props:re,ref:ae,children:ne,dynamicChildren:te,shapeFlag:me,patchFlag:ye,dirs:ve}=L;if(ae!=null&&Ml(ae,null,O,L,!0),me&256){E.ctx.deactivate(L);return}const Ae=me&1&&ve,De=!zi(L);let qe;if(De&&(qe=re&&re.onVnodeBeforeUnmount)&&_t(qe,E,L),me&6)Y(L.component,O,Q);else{if(me&128){L.suspense.unmount(O,Q);return}Ae&&Ot(L,null,E,"beforeUnmount"),me&64?L.type.remove(L,E,O,Z,Ne,Q):te&&(le!==Ce||ye>0&&ye&64)?se(te,E,O,!1,!0):(le===Ce&&ye&384||!Z&&me&16)&&se(ne,E,O),Q&&Ut(L)}(De&&(qe=re&&re.onVnodeUnmounted)||Ae)&&rt(()=>{qe&&_t(qe,E,L),Ae&&Ot(L,null,E,"unmounted")},O)},Ut=L=>{const{type:E,el:O,anchor:Q,transition:Z}=L;if(E===Ce){Lt(O,Q);return}if(E===Pi){x(L);return}const le=()=>{r(O),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(L.shapeFlag&1&&Z&&!Z.persisted){const{leave:re,delayLeave:ae}=Z,ne=()=>re(O,le);ae?ae(L.el,le,ne):ne()}else le()},Lt=(L,E)=>{let O;for(;L!==E;)O=h(L),r(L),L=O;r(E)},Y=(L,E,O)=>{const{bum:Q,scope:Z,update:le,subTree:re,um:ae}=L;Q&&na(Q),Z.stop(),le&&(le.active=!1,Ye(re,L,E,O)),ae&&rt(ae,E),rt(()=>{L.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&L.asyncDep&&!L.asyncResolved&&L.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},se=(L,E,O,Q=!1,Z=!1,le=0)=>{for(let re=le;re<L.length;re++)Ye(L[re],E,O,Q,Z)},oe=L=>L.shapeFlag&6?oe(L.component.subTree):L.shapeFlag&128?L.suspense.next():h(L.anchor||L.el);let _e=!1;const He=(L,E,O)=>{L==null?E._vnode&&Ye(E._vnode,null,null,!0):C(E._vnode||null,L,E,null,null,null,O),_e||(_e=!0,Gs(),zl(),_e=!1),E._vnode=L},Ne={p:C,um:Ye,m:nt,r:Ut,mt:Be,mc:F,pc:ie,pbc:j,n:oe,o:e};let xe,$e;return a&&([xe,$e]=a(Ne)),{render:He,hydrate:xe,createApp:tg(He,xe)}}function Pn({type:e,props:a},l){return l==="svg"&&e==="foreignObject"||l==="mathml"&&e==="annotation-xml"&&a&&a.encoding&&a.encoding.includes("html")?void 0:l}function xi({effect:e,update:a},l){e.allowRecurse=a.allowRecurse=l}function Fd(e,a){return(!e||e&&!e.pendingBranch)&&a&&!a.persisted}function bs(e,a,l=!1){const o=e.children,r=a.children;if(ge(o)&&ge(r))for(let c=0;c<o.length;c++){const m=o[c];let f=r[c];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=r[c]=di(r[c]),f.el=m.el),l||bs(m,f)),f.type===Hi&&(f.el=m.el)}}function dg(e){const a=e.slice(),l=[0];let o,r,c,m,f;const s=e.length;for(o=0;o<s;o++){const u=e[o];if(u!==0){if(r=l[l.length-1],e[r]<u){a[o]=r,l.push(o);continue}for(c=0,m=l.length-1;c<m;)f=c+m>>1,e[l[f]]<u?c=f+1:m=f;u<e[l[c]]&&(c>0&&(a[o]=l[c-1]),l[c]=o)}}for(c=l.length,m=l[c-1];c-- >0;)l[c]=m,m=a[m];return l}function Hd(e){const a=e.subTree.component;if(a)return a.asyncDep&&!a.asyncResolved?a:Hd(a)}const mg=e=>e.__isTeleport,Oa=e=>e&&(e.disabled||e.disabled===""),ir=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ar=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,po=(e,a)=>{const l=e&&e.to;return Qe(l)?a?a(l):null:l},pg={name:"Teleport",__isTeleport:!0,process(e,a,l,o,r,c,m,f,s,u){const{mc:g,pc:d,pbc:h,o:{insert:v,querySelector:_,createText:C,createComment:k}}=u,T=Oa(a.props);let{shapeFlag:b,children:w,dynamicChildren:x}=a;if(e==null){const B=a.el=C(""),I=a.anchor=C("");v(B,l,o),v(I,l,o);const V=a.target=po(a.props,_),F=a.targetAnchor=C("");V&&(v(F,V),m==="svg"||ir(V)?m="svg":(m==="mathml"||ar(V))&&(m="mathml"));const z=(j,X)=>{b&16&&g(w,j,X,r,c,m,f,s)};T?z(l,I):V&&z(V,F)}else{a.el=e.el;const B=a.anchor=e.anchor,I=a.target=e.target,V=a.targetAnchor=e.targetAnchor,F=Oa(e.props),z=F?l:I,j=F?B:V;if(m==="svg"||ir(I)?m="svg":(m==="mathml"||ar(I))&&(m="mathml"),x?(h(e.dynamicChildren,x,z,r,c,m,f),bs(e,a,!0)):s||d(e,a,z,j,r,c,m,f,!1),T)F?a.props&&e.props&&a.props.to!==e.props.to&&(a.props.to=e.props.to):Sl(a,l,B,u,1);else if((a.props&&a.props.to)!==(e.props&&e.props.to)){const X=a.target=po(a.props,_);X&&Sl(a,X,null,u,0)}else F&&Sl(a,I,V,u,1)}Nd(a)},remove(e,a,l,o,{um:r,o:{remove:c}},m){const{shapeFlag:f,children:s,anchor:u,targetAnchor:g,target:d,props:h}=e;if(d&&c(g),m&&c(u),f&16){const v=m||!Oa(h);for(let _=0;_<s.length;_++){const C=s[_];r(C,a,l,v,!!C.dynamicChildren)}}},move:Sl,hydrate:fg};function Sl(e,a,l,{o:{insert:o},m:r},c=2){c===0&&o(e.targetAnchor,a,l);const{el:m,anchor:f,shapeFlag:s,children:u,props:g}=e,d=c===2;if(d&&o(m,a,l),(!d||Oa(g))&&s&16)for(let h=0;h<u.length;h++)r(u[h],a,l,2);d&&o(f,a,l)}function fg(e,a,l,o,r,c,{o:{nextSibling:m,parentNode:f,querySelector:s}},u){const g=a.target=po(a.props,s);if(g){const d=g._lpa||g.firstChild;if(a.shapeFlag&16)if(Oa(a.props))a.anchor=u(m(e),a,f(e),l,o,r,c),a.targetAnchor=d;else{a.anchor=m(e);let h=d;for(;h;)if(h=m(h),h&&h.nodeType===8&&h.data==="teleport anchor"){a.targetAnchor=h,g._lpa=a.targetAnchor&&m(a.targetAnchor);break}u(d,a,g,l,o,r,c)}Nd(a)}return a.anchor&&m(a.anchor)}const yn=pg;function Nd(e){const a=e.ctx;if(a&&a.ut){let l=e.children[0].el;for(;l&&l!==e.targetAnchor;)l.nodeType===1&&l.setAttribute("data-v-owner",a.uid),l=l.nextSibling;a.ut()}}const Ce=Symbol.for("v-fgt"),Hi=Symbol.for("v-txt"),ft=Symbol.for("v-cmt"),Pi=Symbol.for("v-stc"),ja=[];let yt=null;function $(e=!1){ja.push(yt=e?null:[])}function Od(){ja.pop(),yt=ja[ja.length-1]||null}let Ni=1;function fo(e){Ni+=e}function jd(e){return e.dynamicChildren=Ni>0?yt||aa:null,Od(),Ni>0&&yt&&yt.push(e),e}function he(e,a,l,o,r,c){return jd(S(e,a,l,o,r,c,!0))}function D(e,a,l,o,r){return jd(t(e,a,l,o,r,!0))}function zt(e){return e?e.__v_isVNode===!0:!1}function Ft(e,a){return e.type===a.type&&e.key===a.key}function gg(e){}const Sn="__vInternal",Gd=({key:e})=>e??null,Bl=({ref:e,ref_key:a,ref_for:l})=>(typeof e=="number"&&(e=""+e),e!=null?Qe(e)||ct(e)||we(e)?{i:it,r:e,k:a,f:!!l}:e:null);function S(e,a=null,l=null,o=0,r=null,c=e===Ce?0:1,m=!1,f=!1){const s={__v_isVNode:!0,__v_skip:!0,type:e,props:a,key:a&&Gd(a),ref:a&&Bl(a),scopeId:fn,slotScopeIds:null,children:l,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:c,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:it};return f?(ys(s,l),c&128&&e.normalize(s)):l&&(s.shapeFlag|=Qe(l)?8:16),Ni>0&&!m&&yt&&(s.patchFlag>0||c&6)&&s.patchFlag!==32&&yt.push(s),s}const t=hg;function hg(e,a=null,l=null,o=0,r=null,c=!1){if((!e||e===rd)&&(e=ft),zt(e)){const f=Gt(e,a,!0);return l&&ys(f,l),Ni>0&&!c&&yt&&(f.shapeFlag&6?yt[yt.indexOf(e)]=f:yt.push(f)),f.patchFlag|=-2,f}if(Ag(e)&&(e=e.__vccOpts),a){a=qd(a);let{class:f,style:s}=a;f&&!Qe(f)&&(a.class=sl(f)),Ue(s)&&(ts(s)&&!ge(s)&&(s=Xe({},s)),a.style=Aa(s))}const m=Qe(e)?1:cd(e)?128:mg(e)?64:Ue(e)?4:we(e)?2:0;return S(e,a,l,o,r,m,c,!0)}function qd(e){return e?ts(e)||Sn in e?Xe({},e):e:null}function Gt(e,a,l=!1){const{props:o,ref:r,patchFlag:c,children:m}=e,f=a?Ki(o||{},a):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Gd(f),ref:a&&a.ref?l&&r?ge(r)?r.concat(Bl(a)):[r,Bl(a)]:Bl(a):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:m,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:a&&e.type!==Ce?c===-1?16:c|16:c,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Gt(e.ssContent),ssFallback:e.ssFallback&&Gt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function n(e=" ",a=0){return t(Hi,null,e,a)}function _g(e,a){const l=t(Pi,null,e);return l.staticCount=a,l}function vs(e="",a=!1){return a?($(),D(ft,null,e)):t(ft,null,e)}function xt(e){return e==null||typeof e=="boolean"?t(ft):ge(e)?t(Ce,null,e.slice()):typeof e=="object"?di(e):t(Hi,null,String(e))}function di(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Gt(e)}function ys(e,a){let l=0;const{shapeFlag:o}=e;if(a==null)a=null;else if(ge(a))l=16;else if(typeof a=="object")if(o&65){const r=a.default;r&&(r._c&&(r._d=!1),ys(e,r()),r._c&&(r._d=!0));return}else{l=32;const r=a._;!r&&!(Sn in a)?a._ctx=it:r===3&&it&&(it.slots._===1?a._=1:(a._=2,e.patchFlag|=1024))}else we(a)?(a={default:a,_ctx:it},l=32):(a=String(a),o&64?(l=16,a=[n(a)]):l=8);e.children=a,e.shapeFlag|=l}function Ki(...e){const a={};for(let l=0;l<e.length;l++){const o=e[l];for(const r in o)if(r==="class")a.class!==o.class&&(a.class=sl([a.class,o.class]));else if(r==="style")a.style=Aa([a.style,o.style]);else if(nl(r)){const c=a[r],m=o[r];m&&c!==m&&!(ge(c)&&c.includes(m))&&(a[r]=c?[].concat(c,m):m)}else r!==""&&(a[r]=o[r])}return a}function _t(e,a,l,o=null){Bt(e,a,7,[l,o])}const bg=Ld();let vg=0;function Ud(e,a,l){const o=e.type,r=(a?a.appContext:e.appContext)||bg,c={uid:vg++,vnode:e,type:o,parent:a,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Wo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dd(o,r),emitsOptions:nd(o,r),emit:null,emitted:null,propsDefaults:je,inheritAttrs:o.inheritAttrs,ctx:je,data:je,props:je,attrs:je,slots:je,refs:je,setupState:je,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:l,suspenseId:l?l.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return c.ctx={_:c},c.root=a?a.root:c,c.emit=ff.bind(null,c),e.ce&&e.ce(c),c}let lt=null;const qt=()=>lt||it;let Vl,go;{const e=Lc(),a=(l,o)=>{let r;return(r=e[l])||(r=e[l]=[]),r.push(o),c=>{r.length>1?r.forEach(m=>m(c)):r[0](c)}};Vl=a("__VUE_INSTANCE_SETTERS__",l=>lt=l),go=a("__VUE_SSR_SETTERS__",l=>cl=l)}const Oi=e=>{const a=lt;return Vl(e),e.scope.on(),()=>{e.scope.off(),Vl(a)}},ho=()=>{lt&&lt.scope.off(),Vl(null)};function Yd(e){return e.vnode.shapeFlag&4}let cl=!1;function Jd(e,a=!1){a&&go(a);const{props:l,children:o}=e.vnode,r=Yd(e);ag(e,l,r,a),og(e,o);const c=r?yg(e,a):void 0;return a&&go(!1),c}function yg(e,a){const l=e.type;e.accessCache=Object.create(null),e.proxy=is(new Proxy(e.ctx,ro));const{setup:o}=l;if(o){const r=e.setupContext=o.length>1?Kd(e):null,c=Oi(e);Ui();const m=Qt(o,e,0,[e.props,r]);if(Yi(),c(),Yo(m)){if(m.then(ho,ho),a)return m.then(f=>{_o(e,f,a)}).catch(f=>{Ji(f,e,0)});e.asyncDep=m}else _o(e,m,a)}else Wd(e,a)}function _o(e,a,l){we(a)?e.type.__ssrInlineRender?e.ssrRender=a:e.render=a:Ue(a)&&(e.setupState=ns(a)),Wd(e,l)}let Fl,bo;function Sg(e){Fl=e,bo=a=>{a.render._rc&&(a.withProxy=new Proxy(a.ctx,Pf))}}const wg=()=>!Fl;function Wd(e,a,l){const o=e.type;if(!e.render){if(!a&&Fl&&!o.render){const r=o.template||hs(e).template;if(r){const{isCustomElement:c,compilerOptions:m}=e.appContext.config,{delimiters:f,compilerOptions:s}=o,u=Xe(Xe({isCustomElement:c,delimiters:f},m),s);o.render=Fl(r,u)}}e.render=o.render||vt,bo&&bo(e)}{const r=Oi(e);Ui();try{Wf(e)}finally{Yi(),r()}}}function Cg(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(a,l){return wt(e,"get","$attrs"),a[l]}}))}function Kd(e){const a=l=>{e.exposed=l||{}};return{get attrs(){return Cg(e)},slots:e.slots,emit:e.emit,expose:a}}function wn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ns(is(e.exposed)),{get(a,l){if(l in a)return a[l];if(l in Na)return Na[l](e)},has(a,l){return l in a||l in Na}}))}function vo(e,a=!0){return we(e)?e.displayName||e.name:e.name||a&&e.__name}function Ag(e){return we(e)&&"__vccOpts"in e}const H=(e,a)=>Wp(e,a,cl);function kg(e,a,l=je){const o=qt(),r=ht(a),c=$t(a),m=Zc((s,u)=>{let g;return gd(()=>{const d=e[a];Ht(g,d)&&(g=d,u())}),{get(){return s(),l.get?l.get(g):g},set(d){const h=o.vnode.props;!(h&&(a in h||r in h||c in h)&&(`onUpdate:${a}`in h||`onUpdate:${r}`in h||`onUpdate:${c}`in h))&&Ht(d,g)&&(g=d,u()),o.emit(`update:${a}`,l.set?l.set(d):d)}}}),f=a==="modelValue"?"modelModifiers":`${a}Modifiers`;return m[Symbol.iterator]=()=>{let s=0;return{next(){return s<2?{value:s++?e[f]||{}:m,done:!1}:{done:!0}}}},m}function J(e,a,l){const o=arguments.length;return o===2?Ue(a)&&!ge(a)?zt(a)?t(e,null,[a]):t(e,a):t(e,null,a):(o>3?l=Array.prototype.slice.call(arguments,2):o===3&&zt(l)&&(l=[l]),t(e,a,l))}function xg(){}function $g(e,a,l,o){const r=l[o];if(r&&Xd(r,e))return r;const c=a();return c.memo=e.slice(),l[o]=c}function Xd(e,a){const l=e.memo;if(l.length!=a.length)return!1;for(let o=0;o<l.length;o++)if(Ht(l[o],a[o]))return!1;return Ni>0&&yt&&yt.push(e),!0}const Qd="3.4.15",Bg=vt,Tg=uf,Lg=Zi,Ig=ld,Dg={createComponentInstance:Ud,setupComponent:Jd,renderComponentRoot:$l,setCurrentRenderingInstance:Za,isVNode:zt,normalizeVNode:xt},Eg=Dg,Rg=null,zg=null,Pg=null;/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Mg="http://www.w3.org/2000/svg",Vg="http://www.w3.org/1998/Math/MathML",mi=typeof document<"u"?document:null,lr=mi&&mi.createElement("template"),Fg={insert:(e,a,l)=>{a.insertBefore(e,l||null)},remove:e=>{const a=e.parentNode;a&&a.removeChild(e)},createElement:(e,a,l,o)=>{const r=a==="svg"?mi.createElementNS(Mg,e):a==="mathml"?mi.createElementNS(Vg,e):mi.createElement(e,l?{is:l}:void 0);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>mi.createTextNode(e),createComment:e=>mi.createComment(e),setText:(e,a)=>{e.nodeValue=a},setElementText:(e,a)=>{e.textContent=a},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>mi.querySelector(e),setScopeId(e,a){e.setAttribute(a,"")},insertStaticContent(e,a,l,o,r,c){const m=l?l.previousSibling:a.lastChild;if(r&&(r===c||r.nextSibling))for(;a.insertBefore(r.cloneNode(!0),l),!(r===c||!(r=r.nextSibling)););else{lr.innerHTML=o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e;const f=lr.content;if(o==="svg"||o==="mathml"){const s=f.firstChild;for(;s.firstChild;)f.appendChild(s.firstChild);f.removeChild(s)}a.insertBefore(f,l)}return[m?m.nextSibling:a.firstChild,l?l.previousSibling:a.lastChild]}},oi="transition",Ta="animation",ha=Symbol("_vtc"),Cn=(e,{slots:a})=>J(_d,em(e),a);Cn.displayName="Transition";const Zd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Hg=Cn.props=Xe({},ps,Zd),$i=(e,a=[])=>{ge(e)?e.forEach(l=>l(...a)):e&&e(...a)},nr=e=>e?ge(e)?e.some(a=>a.length>1):e.length>1:!1;function em(e){const a={};for(const U in e)U in Zd||(a[U]=e[U]);if(e.css===!1)return a;const{name:l="v",type:o,duration:r,enterFromClass:c=`${l}-enter-from`,enterActiveClass:m=`${l}-enter-active`,enterToClass:f=`${l}-enter-to`,appearFromClass:s=c,appearActiveClass:u=m,appearToClass:g=f,leaveFromClass:d=`${l}-leave-from`,leaveActiveClass:h=`${l}-leave-active`,leaveToClass:v=`${l}-leave-to`}=e,_=Ng(r),C=_&&_[0],k=_&&_[1],{onBeforeEnter:T,onEnter:b,onEnterCancelled:w,onLeave:x,onLeaveCancelled:B,onBeforeAppear:I=T,onAppear:V=b,onAppearCancelled:F=w}=a,z=(U,pe,Be)=>{ri(U,pe?g:f),ri(U,pe?u:m),Be&&Be()},j=(U,pe)=>{U._isLeaving=!1,ri(U,d),ri(U,v),ri(U,h),pe&&pe()},X=U=>(pe,Be)=>{const q=U?V:b,K=()=>z(pe,U,Be);$i(q,[pe,K]),or(()=>{ri(pe,U?s:c),Yt(pe,U?g:f),nr(q)||sr(pe,o,C,K)})};return Xe(a,{onBeforeEnter(U){$i(T,[U]),Yt(U,c),Yt(U,m)},onBeforeAppear(U){$i(I,[U]),Yt(U,s),Yt(U,u)},onEnter:X(!1),onAppear:X(!0),onLeave(U,pe){U._isLeaving=!0;const Be=()=>j(U,pe);Yt(U,d),im(),Yt(U,h),or(()=>{U._isLeaving&&(ri(U,d),Yt(U,v),nr(x)||sr(U,o,k,Be))}),$i(x,[U,Be])},onEnterCancelled(U){z(U,!1),$i(w,[U])},onAppearCancelled(U){z(U,!0),$i(F,[U])},onLeaveCancelled(U){j(U),$i(B,[U])}})}function Ng(e){if(e==null)return null;if(Ue(e))return[Mn(e.enter),Mn(e.leave)];{const a=Mn(e);return[a,a]}}function Mn(e){return Dl(e)}function Yt(e,a){a.split(/\s+/).forEach(l=>l&&e.classList.add(l)),(e[ha]||(e[ha]=new Set)).add(a)}function ri(e,a){a.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const l=e[ha];l&&(l.delete(a),l.size||(e[ha]=void 0))}function or(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Og=0;function sr(e,a,l,o){const r=e._endId=++Og,c=()=>{r===e._endId&&o()};if(l)return setTimeout(c,l);const{type:m,timeout:f,propCount:s}=tm(e,a);if(!m)return o();const u=m+"end";let g=0;const d=()=>{e.removeEventListener(u,h),c()},h=v=>{v.target===e&&++g>=s&&d()};setTimeout(()=>{g<s&&d()},f+1),e.addEventListener(u,h)}function tm(e,a){const l=window.getComputedStyle(e),o=_=>(l[_]||"").split(", "),r=o(`${oi}Delay`),c=o(`${oi}Duration`),m=rr(r,c),f=o(`${Ta}Delay`),s=o(`${Ta}Duration`),u=rr(f,s);let g=null,d=0,h=0;a===oi?m>0&&(g=oi,d=m,h=c.length):a===Ta?u>0&&(g=Ta,d=u,h=s.length):(d=Math.max(m,u),g=d>0?m>u?oi:Ta:null,h=g?g===oi?c.length:s.length:0);const v=g===oi&&/\b(transform|all)(,|$)/.test(o(`${oi}Property`).toString());return{type:g,timeout:d,propCount:h,hasTransform:v}}function rr(e,a){for(;e.length<a.length;)e=e.concat(e);return Math.max(...a.map((l,o)=>ur(l)+ur(e[o])))}function ur(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function im(){return document.body.offsetHeight}function jg(e,a,l){const o=e[ha];o&&(a=(a?[a,...o]:[...o]).join(" ")),a==null?e.removeAttribute("class"):l?e.setAttribute("class",a):e.className=a}const Ss=Symbol("_vod"),am={beforeMount(e,{value:a},{transition:l}){e[Ss]=e.style.display==="none"?"":e.style.display,l&&a?l.beforeEnter(e):La(e,a)},mounted(e,{value:a},{transition:l}){l&&a&&l.enter(e)},updated(e,{value:a,oldValue:l},{transition:o}){!a!=!l&&(o?a?(o.beforeEnter(e),La(e,!0),o.enter(e)):o.leave(e,()=>{La(e,!1)}):La(e,a))},beforeUnmount(e,{value:a}){La(e,a)}};function La(e,a){e.style.display=a?e[Ss]:"none"}function Gg(){am.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const lm=Symbol("");function qg(e){const a=qt();if(!a)return;const l=a.ut=(r=e(a.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${a.uid}"]`)).forEach(c=>So(c,r))},o=()=>{const r=e(a.proxy);yo(a.subTree,r),l(r)};fd(o),Ci(()=>{const r=new MutationObserver(o);r.observe(a.subTree.el.parentNode,{childList:!0}),Wi(()=>r.disconnect())})}function yo(e,a){if(e.shapeFlag&128){const l=e.suspense;e=l.activeBranch,l.pendingBranch&&!l.isHydrating&&l.effects.push(()=>{yo(l.activeBranch,a)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)So(e.el,a);else if(e.type===Ce)e.children.forEach(l=>yo(l,a));else if(e.type===Pi){let{el:l,anchor:o}=e;for(;l&&(So(l,a),l!==o);)l=l.nextSibling}}function So(e,a){if(e.nodeType===1){const l=e.style;let o="";for(const r in a)l.setProperty(`--${r}`,a[r]),o+=`--${r}: ${a[r]};`;l[lm]=o}}function Ug(e,a,l){const o=e.style,r=o.display,c=Qe(l);if(l&&!c){if(a&&!Qe(a))for(const m in a)l[m]==null&&wo(o,m,"");for(const m in l)wo(o,m,l[m])}else if(c){if(a!==l){const m=o[lm];m&&(l+=";"+m),o.cssText=l}}else a&&e.removeAttribute("style");Ss in e&&(o.display=r)}const cr=/\s*!important$/;function wo(e,a,l){if(ge(l))l.forEach(o=>wo(e,a,o));else if(l==null&&(l=""),a.startsWith("--"))e.setProperty(a,l);else{const o=Yg(e,a);cr.test(l)?e.setProperty($t(o),l.replace(cr,""),"important"):e[o]=l}}const dr=["Webkit","Moz","ms"],Vn={};function Yg(e,a){const l=Vn[a];if(l)return l;let o=ht(a);if(o!=="filter"&&o in e)return Vn[a]=o;o=ol(o);for(let r=0;r<dr.length;r++){const c=dr[r]+o;if(c in e)return Vn[a]=c}return a}const mr="http://www.w3.org/1999/xlink";function Jg(e,a,l,o,r){if(o&&a.startsWith("xlink:"))l==null?e.removeAttributeNS(mr,a.slice(6,a.length)):e.setAttributeNS(mr,a,l);else{const c=Cp(a);l==null||c&&!Ic(l)?e.removeAttribute(a):e.setAttribute(a,c?"":l)}}function Wg(e,a,l,o,r,c,m){if(a==="innerHTML"||a==="textContent"){o&&m(o,r,c),e[a]=l??"";return}const f=e.tagName;if(a==="value"&&f!=="PROGRESS"&&!f.includes("-")){e._value=l;const u=f==="OPTION"?e.getAttribute("value"):e.value,g=l??"";u!==g&&(e.value=g),l==null&&e.removeAttribute(a);return}let s=!1;if(l===""||l==null){const u=typeof e[a];u==="boolean"?l=Ic(l):l==null&&u==="string"?(l="",s=!0):u==="number"&&(l=0,s=!0)}try{e[a]=l}catch{}s&&e.removeAttribute(a)}function Kt(e,a,l,o){e.addEventListener(a,l,o)}function Kg(e,a,l,o){e.removeEventListener(a,l,o)}const pr=Symbol("_vei");function Xg(e,a,l,o,r=null){const c=e[pr]||(e[pr]={}),m=c[a];if(o&&m)m.value=o;else{const[f,s]=Qg(a);if(o){const u=c[a]=th(o,r);Kt(e,f,u,s)}else m&&(Kg(e,f,m,s),c[a]=void 0)}}const fr=/(?:Once|Passive|Capture)$/;function Qg(e){let a;if(fr.test(e)){a={};let o;for(;o=e.match(fr);)e=e.slice(0,e.length-o[0].length),a[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$t(e.slice(2)),a]}let Fn=0;const Zg=Promise.resolve(),eh=()=>Fn||(Zg.then(()=>Fn=0),Fn=Date.now());function th(e,a){const l=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=l.attached)return;Bt(ih(o,l.value),a,5,[o])};return l.value=e,l.attached=eh(),l}function ih(e,a){if(ge(a)){const l=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{l.call(e),e._stopped=!0},a.map(o=>r=>!r._stopped&&o&&o(r))}else return a}const gr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ah=(e,a,l,o,r,c,m,f,s)=>{const u=r==="svg";a==="class"?jg(e,o,u):a==="style"?Ug(e,l,o):nl(a)?qo(a)||Xg(e,a,l,o,m):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):lh(e,a,o,u))?Wg(e,a,o,c,m,f,s):(a==="true-value"?e._trueValue=o:a==="false-value"&&(e._falseValue=o),Jg(e,a,o,u))};function lh(e,a,l,o){if(o)return!!(a==="innerHTML"||a==="textContent"||a in e&&gr(a)&&we(l));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&e.tagName==="INPUT"||a==="type"&&e.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return gr(a)&&Qe(l)?!1:a in e}/*! #__NO_SIDE_EFFECTS__ */function nm(e,a){const l=R(e);class o extends An{constructor(c){super(l,c,a)}}return o.def=l,o}/*! #__NO_SIDE_EFFECTS__ */const nh=e=>nm(e,_m),oh=typeof HTMLElement<"u"?HTMLElement:class{};class An extends oh{constructor(a,l={},o){super(),this._def=a,this._props=l,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&o?o(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),ka(()=>{this._connected||(Ol(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let o=0;o<this.attributes.length;o++)this._setAttr(this.attributes[o].name);this._ob=new MutationObserver(o=>{for(const r of o)this._setAttr(r.attributeName)}),this._ob.observe(this,{attributes:!0});const a=(o,r=!1)=>{const{props:c,styles:m}=o;let f;if(c&&!ge(c))for(const s in c){const u=c[s];(u===Number||u&&u.type===Number)&&(s in this._props&&(this._props[s]=Dl(this._props[s])),(f||(f=Object.create(null)))[ht(s)]=!0)}this._numberProps=f,r&&this._resolveProps(o),this._applyStyles(m),this._update()},l=this._def.__asyncLoader;l?l().then(o=>a(o,!0)):a(this._def)}_resolveProps(a){const{props:l}=a,o=ge(l)?l:Object.keys(l||{});for(const r of Object.keys(this))r[0]!=="_"&&o.includes(r)&&this._setProp(r,this[r],!0,!1);for(const r of o.map(ht))Object.defineProperty(this,r,{get(){return this._getProp(r)},set(c){this._setProp(r,c)}})}_setAttr(a){let l=this.getAttribute(a);const o=ht(a);this._numberProps&&this._numberProps[o]&&(l=Dl(l)),this._setProp(o,l,!1)}_getProp(a){return this._props[a]}_setProp(a,l,o=!0,r=!0){l!==this._props[a]&&(this._props[a]=l,r&&this._instance&&this._update(),o&&(l===!0?this.setAttribute($t(a),""):typeof l=="string"||typeof l=="number"?this.setAttribute($t(a),l+""):l||this.removeAttribute($t(a))))}_update(){Ol(this._createVNode(),this.shadowRoot)}_createVNode(){const a=t(this._def,Xe({},this._props));return this._instance||(a.ce=l=>{this._instance=l,l.isCE=!0;const o=(c,m)=>{this.dispatchEvent(new CustomEvent(c,{detail:m}))};l.emit=(c,...m)=>{o(c,m),$t(c)!==c&&o($t(c),m)};let r=this;for(;r=r&&(r.parentNode||r.host);)if(r instanceof An){l.parent=r._instance,l.provides=r._instance.provides;break}}),a}_applyStyles(a){a&&a.forEach(l=>{const o=document.createElement("style");o.textContent=l,this.shadowRoot.appendChild(o)})}}function sh(e="$style"){{const a=qt();if(!a)return je;const l=a.type.__cssModules;if(!l)return je;const o=l[e];return o||je}}const om=new WeakMap,sm=new WeakMap,Hl=Symbol("_moveCb"),hr=Symbol("_enterCb"),rm={name:"TransitionGroup",props:Xe({},Hg,{tag:String,moveClass:String}),setup(e,{slots:a}){const l=qt(),o=ms();let r,c;return bn(()=>{if(!r.length)return;const m=e.moveClass||`${e.name||"v"}-move`;if(!mh(r[0].el,l.vnode.el,m))return;r.forEach(uh),r.forEach(ch);const f=r.filter(dh);im(),f.forEach(s=>{const u=s.el,g=u.style;Yt(u,m),g.transform=g.webkitTransform=g.transitionDuration="";const d=u[Hl]=h=>{h&&h.target!==u||(!h||/transform$/.test(h.propertyName))&&(u.removeEventListener("transitionend",d),u[Hl]=null,ri(u,m))};u.addEventListener("transitionend",d)})}),()=>{const m=Ee(e),f=em(m);let s=m.tag||Ce;r=c,c=a.default?hn(a.default()):[];for(let u=0;u<c.length;u++){const g=c[u];g.key!=null&&Vi(g,ga(g,f,o,l))}if(r)for(let u=0;u<r.length;u++){const g=r[u];Vi(g,ga(g,f,o,l)),om.set(g,g.el.getBoundingClientRect())}return t(s,null,c)}}},rh=e=>delete e.mode;rm.props;const um=rm;function uh(e){const a=e.el;a[Hl]&&a[Hl](),a[hr]&&a[hr]()}function ch(e){sm.set(e,e.el.getBoundingClientRect())}function dh(e){const a=om.get(e),l=sm.get(e),o=a.left-l.left,r=a.top-l.top;if(o||r){const c=e.el.style;return c.transform=c.webkitTransform=`translate(${o}px,${r}px)`,c.transitionDuration="0s",e}}function mh(e,a,l){const o=e.cloneNode(),r=e[ha];r&&r.forEach(f=>{f.split(/\s+/).forEach(s=>s&&o.classList.remove(s))}),l.split(/\s+/).forEach(f=>f&&o.classList.add(f)),o.style.display="none";const c=a.nodeType===1?a:a.parentNode;c.appendChild(o);const{hasTransform:m}=tm(o);return c.removeChild(o),m}const wi=e=>{const a=e.props["onUpdate:modelValue"]||!1;return ge(a)?l=>na(a,l):a};function ph(e){e.target.composing=!0}function _r(e){const a=e.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const Rt=Symbol("_assign"),Nl={created(e,{modifiers:{lazy:a,trim:l,number:o}},r){e[Rt]=wi(r);const c=o||r.props&&r.props.type==="number";Kt(e,a?"change":"input",m=>{if(m.target.composing)return;let f=e.value;l&&(f=f.trim()),c&&(f=Ja(f)),e[Rt](f)}),l&&Kt(e,"change",()=>{e.value=e.value.trim()}),a||(Kt(e,"compositionstart",ph),Kt(e,"compositionend",_r),Kt(e,"change",_r))},mounted(e,{value:a}){e.value=a??""},beforeUpdate(e,{value:a,modifiers:{lazy:l,trim:o,number:r}},c){if(e[Rt]=wi(c),e.composing)return;const m=r||e.type==="number"?Ja(e.value):e.value,f=a??"";m!==f&&(document.activeElement===e&&e.type!=="range"&&(l||o&&e.value.trim()===f)||(e.value=f))}},ws={deep:!0,created(e,a,l){e[Rt]=wi(l),Kt(e,"change",()=>{const o=e._modelValue,r=_a(e),c=e.checked,m=e[Rt];if(ge(o)){const f=rn(o,r),s=f!==-1;if(c&&!s)m(o.concat(r));else if(!c&&s){const u=[...o];u.splice(f,1),m(u)}}else if(qi(o)){const f=new Set(o);c?f.add(r):f.delete(r),m(f)}else m(dm(e,c))})},mounted:br,beforeUpdate(e,a,l){e[Rt]=wi(l),br(e,a,l)}};function br(e,{value:a,oldValue:l},o){e._modelValue=a,ge(a)?e.checked=rn(a,o.props.value)>-1:qi(a)?e.checked=a.has(o.props.value):a!==l&&(e.checked=Zt(a,dm(e,!0)))}const Cs={created(e,{value:a},l){e.checked=Zt(a,l.props.value),e[Rt]=wi(l),Kt(e,"change",()=>{e[Rt](_a(e))})},beforeUpdate(e,{value:a,oldValue:l},o){e[Rt]=wi(o),a!==l&&(e.checked=Zt(a,o.props.value))}},cm={deep:!0,created(e,{value:a,modifiers:{number:l}},o){const r=qi(a);Kt(e,"change",()=>{const c=Array.prototype.filter.call(e.options,m=>m.selected).map(m=>l?Ja(_a(m)):_a(m));e[Rt](e.multiple?r?new Set(c):c:c[0]),e._assigning=!0,ka(()=>{e._assigning=!1})}),e[Rt]=wi(o)},mounted(e,{value:a,oldValue:l,modifiers:{number:o}}){vr(e,a,l,o)},beforeUpdate(e,a,l){e[Rt]=wi(l)},updated(e,{value:a,oldValue:l,modifiers:{number:o}}){e._assigning||vr(e,a,l,o)}};function vr(e,a,l,o){const r=e.multiple,c=ge(a);if(!(r&&!c&&!qi(a))&&!(c&&Zt(a,l))){for(let m=0,f=e.options.length;m<f;m++){const s=e.options[m],u=_a(s);if(r)if(c){const g=typeof u;g==="string"||g==="number"?s.selected=a.includes(o?Ja(u):u):s.selected=rn(a,u)>-1}else s.selected=a.has(u);else if(Zt(_a(s),a)){e.selectedIndex!==m&&(e.selectedIndex=m);return}}!r&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function _a(e){return"_value"in e?e._value:e.value}function dm(e,a){const l=a?"_trueValue":"_falseValue";return l in e?e[l]:a}const mm={created(e,a,l){wl(e,a,l,null,"created")},mounted(e,a,l){wl(e,a,l,null,"mounted")},beforeUpdate(e,a,l,o){wl(e,a,l,o,"beforeUpdate")},updated(e,a,l,o){wl(e,a,l,o,"updated")}};function pm(e,a){switch(e){case"SELECT":return cm;case"TEXTAREA":return Nl;default:switch(a){case"checkbox":return ws;case"radio":return Cs;default:return Nl}}}function wl(e,a,l,o,r){const m=pm(e.tagName,l.props&&l.props.type)[r];m&&m(e,a,l,o)}function fh(){Nl.getSSRProps=({value:e})=>({value:e}),Cs.getSSRProps=({value:e},a)=>{if(a.props&&Zt(a.props.value,e))return{checked:!0}},ws.getSSRProps=({value:e},a)=>{if(ge(e)){if(a.props&&rn(e,a.props.value)>-1)return{checked:!0}}else if(qi(e)){if(a.props&&e.has(a.props.value))return{checked:!0}}else if(e)return{checked:!0}},mm.getSSRProps=(e,a)=>{if(typeof a.type!="string")return;const l=pm(a.type.toUpperCase(),a.props&&a.props.type);if(l.getSSRProps)return l.getSSRProps(e,a)}}const gh=["ctrl","shift","alt","meta"],hh={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,a)=>gh.some(l=>e[`${l}Key`]&&!a.includes(l))},Tt=(e,a)=>{const l=e._withMods||(e._withMods={}),o=a.join(".");return l[o]||(l[o]=(r,...c)=>{for(let m=0;m<a.length;m++){const f=hh[a[m]];if(f&&f(r,a))return}return e(r,...c)})},_h={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},bh=(e,a)=>{const l=e._withKeys||(e._withKeys={}),o=a.join(".");return l[o]||(l[o]=r=>{if(!("key"in r))return;const c=$t(r.key);if(a.some(m=>m===c||_h[m]===c))return e(r)})},fm=Xe({patchProp:ah},Fg);let Ga,yr=!1;function gm(){return Ga||(Ga=Pd(fm))}function hm(){return Ga=yr?Ga:Md(fm),yr=!0,Ga}const Ol=(...e)=>{gm().render(...e)},_m=(...e)=>{hm().hydrate(...e)},bm=(...e)=>{const a=gm().createApp(...e),{mount:l}=a;return a.mount=o=>{const r=ym(o);if(!r)return;const c=a._component;!we(c)&&!c.render&&!c.template&&(c.template=r.innerHTML),r.innerHTML="";const m=l(r,!1,vm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),m},a},vh=(...e)=>{const a=hm().createApp(...e),{mount:l}=a;return a.mount=o=>{const r=ym(o);if(r)return l(r,!0,vm(r))},a};function vm(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ym(e){return Qe(e)?document.querySelector(e):e}let Sr=!1;const yh=()=>{Sr||(Sr=!0,fh(),Gg())};/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Sh=()=>{},wh=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:_d,BaseTransitionPropsValidators:ps,Comment:ft,DeprecationTypes:Pg,EffectScope:Wo,ErrorCodes:rf,ErrorTypeStrings:Tg,Fragment:Ce,KeepAlive:Df,ReactiveEffect:fa,Static:Pi,Suspense:wf,Teleport:yn,Text:Hi,TrackOpTypes:nf,Transition:Cn,TransitionGroup:um,TriggerOpTypes:of,VueElement:An,assertNumber:sf,callWithAsyncErrorHandling:Bt,callWithErrorHandling:Qt,camelize:ht,capitalize:ol,cloneVNode:Gt,compatUtils:zg,compile:Sh,computed:H,createApp:bm,createBlock:D,createCommentVNode:vs,createElementBlock:he,createElementVNode:S,createHydrationRenderer:Md,createPropsRestProxy:Yf,createRenderer:Pd,createSSRApp:vh,createSlots:Rf,createStaticVNode:_g,createTextVNode:n,createVNode:t,customRef:Zc,defineAsyncComponent:Lf,defineComponent:R,defineCustomElement:nm,defineEmits:Vf,defineExpose:Ff,defineModel:Of,defineOptions:Hf,defineProps:Mf,defineSSRCustomElement:nh,defineSlots:Nf,devtools:Lg,effect:$p,effectScope:kp,getCurrentInstance:qt,getCurrentScope:Ko,getTransitionRawChildren:hn,guardReactiveProps:qd,h:J,handleError:Ji,hasInjectionContext:ig,hydrate:_m,initCustomFormatter:xg,initDirectivesForSSR:yh,inject:Fe,isMemoSame:Xd,isProxy:ts,isReactive:Ri,isReadonly:Mi,isRef:ct,isRuntimeOnly:wg,isShallow:Wa,isVNode:zt,markRaw:is,mergeDefaults:qf,mergeModels:Uf,mergeProps:Ki,nextTick:ka,normalizeClass:sl,normalizeProps:Sp,normalizeStyle:Aa,onActivated:fs,onBeforeMount:yd,onBeforeUnmount:vn,onBeforeUpdate:Sd,onDeactivated:gs,onErrorCaptured:kd,onMounted:Ci,onRenderTracked:Ad,onRenderTriggered:Cd,onScopeDispose:Rc,onServerPrefetch:wd,onUnmounted:Wi,onUpdated:bn,openBlock:$,popScopeId:sd,provide:ut,proxyRefs:ns,pushScopeId:od,queuePostFlushCb:Rl,reactive:ti,readonly:es,ref:G,registerRuntimeCompiler:Sg,render:Ol,renderList:tt,renderSlot:Fi,resolveComponent:y,resolveDirective:gn,resolveDynamicComponent:ud,resolveFilter:Rg,resolveTransitionHooks:ga,setBlockTracking:fo,setDevtoolsHook:Ig,setTransitionHooks:Vi,shallowReactive:Wc,shallowReadonly:Jp,shallowRef:Xc,ssrContextKey:md,ssrUtils:Eg,stop:Bp,toDisplayString:Te,toHandlerKey:Ha,toHandlers:zf,toRaw:Ee,toRef:lo,toRefs:tf,toValue:Qp,transformVNodeArgs:gg,triggerRef:Xp,unref:p,useAttrs:$d,useCssModule:sh,useCssVars:qg,useModel:kg,useSSRContext:pd,useSlots:Gf,useTransitionState:ms,vModelCheckbox:ws,vModelDynamic:mm,vModelRadio:Cs,vModelSelect:cm,vModelText:Nl,vShow:am,version:Qd,warn:Bg,watch:pt,watchEffect:ds,watchPostEffect:fd,watchSyncEffect:gd,withAsyncContext:Jf,withCtx:i,withDefaults:jf,withDirectives:bi,withKeys:bh,withMemo:$g,withModifiers:Tt,withScopeId:gf},Symbol.toStringTag,{value:"Module"})),Ch=R({name:"App"}),ke=(e,a)=>{const l=e.__vccOpts||e;for(const[o,r]of a)l[o]=r;return l};function Ah(e,a,l,o,r,c){const m=y("router-view");return $(),D(m)}const kh=ke(Ch,[["render",Ah]]);/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Sm=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",xa=e=>Sm?Symbol(e):"_vr_"+e,wm=xa("rvlm"),wr=xa("rvd"),kn=xa("r"),As=xa("rl"),Co=xa("rvl"),ea=typeof window<"u";function xh(e){return e.__esModule||Sm&&e[Symbol.toStringTag]==="Module"}const Je=Object.assign;function Hn(e,a){const l={};for(const o in a){const r=a[o];l[o]=Array.isArray(r)?r.map(e):e(r)}return l}const qa=()=>{},$h=/\/$/,Bh=e=>e.replace($h,"");function Nn(e,a,l="/"){let o,r={},c="",m="";const f=a.indexOf("?"),s=a.indexOf("#",f>-1?f:0);return f>-1&&(o=a.slice(0,f),c=a.slice(f+1,s>-1?s:a.length),r=e(c)),s>-1&&(o=o||a.slice(0,s),m=a.slice(s,a.length)),o=Dh(o??a,l),{fullPath:o+(c&&"?")+c+m,path:o,query:r,hash:m}}function Th(e,a){const l=a.query?e(a.query):"";return a.path+(l&&"?")+l+(a.hash||"")}function Cr(e,a){return!a||!e.toLowerCase().startsWith(a.toLowerCase())?e:e.slice(a.length)||"/"}function Lh(e,a,l){const o=a.matched.length-1,r=l.matched.length-1;return o>-1&&o===r&&ba(a.matched[o],l.matched[r])&&Cm(a.params,l.params)&&e(a.query)===e(l.query)&&a.hash===l.hash}function ba(e,a){return(e.aliasOf||e)===(a.aliasOf||a)}function Cm(e,a){if(Object.keys(e).length!==Object.keys(a).length)return!1;for(const l in e)if(!Ih(e[l],a[l]))return!1;return!0}function Ih(e,a){return Array.isArray(e)?Ar(e,a):Array.isArray(a)?Ar(a,e):e===a}function Ar(e,a){return Array.isArray(a)?e.length===a.length&&e.every((l,o)=>l===a[o]):e.length===1&&e[0]===a}function Dh(e,a){if(e.startsWith("/"))return e;if(!e)return a;const l=a.split("/"),o=e.split("/");let r=l.length-1,c,m;for(c=0;c<o.length;c++)if(m=o[c],!(r===1||m==="."))if(m==="..")r--;else break;return l.slice(0,r).join("/")+"/"+o.slice(c-(c===o.length?1:0)).join("/")}var al;(function(e){e.pop="pop",e.push="push"})(al||(al={}));var Ua;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ua||(Ua={}));function Eh(e){if(!e)if(ea){const a=document.querySelector("base");e=a&&a.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Bh(e)}const Rh=/^[^#]+#/;function zh(e,a){return e.replace(Rh,"#")+a}function Ph(e,a){const l=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:a.behavior,left:o.left-l.left-(a.left||0),top:o.top-l.top-(a.top||0)}}const xn=()=>({left:window.pageXOffset,top:window.pageYOffset});function Mh(e){let a;if("el"in e){const l=e.el,o=typeof l=="string"&&l.startsWith("#"),r=typeof l=="string"?o?document.getElementById(l.slice(1)):document.querySelector(l):l;if(!r)return;a=Ph(r,e)}else a=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function kr(e,a){return(history.state?history.state.position-a:-1)+e}const Ao=new Map;function Vh(e,a){Ao.set(e,a)}function Fh(e){const a=Ao.get(e);return Ao.delete(e),a}let Hh=()=>location.protocol+"//"+location.host;function Am(e,a){const{pathname:l,search:o,hash:r}=a,c=e.indexOf("#");if(c>-1){let f=r.includes(e.slice(c))?e.slice(c).length:1,s=r.slice(f);return s[0]!=="/"&&(s="/"+s),Cr(s,"")}return Cr(l,e)+o+r}function Nh(e,a,l,o){let r=[],c=[],m=null;const f=({state:h})=>{const v=Am(e,location),_=l.value,C=a.value;let k=0;if(h){if(l.value=v,a.value=h,m&&m===_){m=null;return}k=C?h.position-C.position:0}else o(v);r.forEach(T=>{T(l.value,_,{delta:k,type:al.pop,direction:k?k>0?Ua.forward:Ua.back:Ua.unknown})})};function s(){m=l.value}function u(h){r.push(h);const v=()=>{const _=r.indexOf(h);_>-1&&r.splice(_,1)};return c.push(v),v}function g(){const{history:h}=window;h.state&&h.replaceState(Je({},h.state,{scroll:xn()}),"")}function d(){for(const h of c)h();c=[],window.removeEventListener("popstate",f),window.removeEventListener("beforeunload",g)}return window.addEventListener("popstate",f),window.addEventListener("beforeunload",g),{pauseListeners:s,listen:u,destroy:d}}function xr(e,a,l,o=!1,r=!1){return{back:e,current:a,forward:l,replaced:o,position:window.history.length,scroll:r?xn():null}}function Oh(e){const{history:a,location:l}=window,o={value:Am(e,l)},r={value:a.state};r.value||c(o.value,{back:null,current:o.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function c(s,u,g){const d=e.indexOf("#"),h=d>-1?(l.host&&document.querySelector("base")?e:e.slice(d))+s:Hh()+e+s;try{a[g?"replaceState":"pushState"](u,"",h),r.value=u}catch(v){console.error(v),l[g?"replace":"assign"](h)}}function m(s,u){const g=Je({},a.state,xr(r.value.back,s,r.value.forward,!0),u,{position:r.value.position});c(s,g,!0),o.value=s}function f(s,u){const g=Je({},r.value,a.state,{forward:s,scroll:xn()});c(g.current,g,!0);const d=Je({},xr(o.value,s,null),{position:g.position+1},u);c(s,d,!1),o.value=s}return{location:o,state:r,push:f,replace:m}}function jh(e){e=Eh(e);const a=Oh(e),l=Nh(e,a.state,a.location,a.replace);function o(c,m=!0){m||l.pauseListeners(),history.go(c)}const r=Je({location:"",base:e,go:o,createHref:zh.bind(null,e)},a,l);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>a.state.value}),r}function Gh(e){return typeof e=="string"||e&&typeof e=="object"}function km(e){return typeof e=="string"||typeof e=="symbol"}const si={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xm=xa("nf");var $r;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})($r||($r={}));function va(e,a){return Je(new Error,{type:e,[xm]:!0},a)}function Bi(e,a){return e instanceof Error&&xm in e&&(a==null||!!(e.type&a))}const Br="[^/]+?",qh={sensitive:!1,strict:!1,start:!0,end:!0},Uh=/[.+*?^${}()[\]/\\]/g;function Yh(e,a){const l=Je({},qh,a),o=[];let r=l.start?"^":"";const c=[];for(const u of e){const g=u.length?[]:[90];l.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const h=u[d];let v=40+(l.sensitive?.25:0);if(h.type===0)d||(r+="/"),r+=h.value.replace(Uh,"\\$&"),v+=40;else if(h.type===1){const{value:_,repeatable:C,optional:k,regexp:T}=h;c.push({name:_,repeatable:C,optional:k});const b=T||Br;if(b!==Br){v+=10;try{new RegExp(`(${b})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+x.message)}}let w=C?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;d||(w=k&&u.length<2?`(?:/${w})`:"/"+w),k&&(w+="?"),r+=w,v+=20,k&&(v+=-8),C&&(v+=-20),b===".*"&&(v+=-50)}g.push(v)}o.push(g)}if(l.strict&&l.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}l.strict||(r+="/?"),l.end?r+="$":l.strict&&(r+="(?:/|$)");const m=new RegExp(r,l.sensitive?"":"i");function f(u){const g=u.match(m),d={};if(!g)return null;for(let h=1;h<g.length;h++){const v=g[h]||"",_=c[h-1];d[_.name]=v&&_.repeatable?v.split("/"):v}return d}function s(u){let g="",d=!1;for(const h of e){(!d||!g.endsWith("/"))&&(g+="/"),d=!1;for(const v of h)if(v.type===0)g+=v.value;else if(v.type===1){const{value:_,repeatable:C,optional:k}=v,T=_ in u?u[_]:"";if(Array.isArray(T)&&!C)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=Array.isArray(T)?T.join("/"):T;if(!b)if(k)h.length<2&&(g.endsWith("/")?g=g.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);g+=b}}return g}return{re:m,score:o,keys:c,parse:f,stringify:s}}function Jh(e,a){let l=0;for(;l<e.length&&l<a.length;){const o=a[l]-e[l];if(o)return o;l++}return e.length<a.length?e.length===1&&e[0]===80?-1:1:e.length>a.length?a.length===1&&a[0]===80?1:-1:0}function Wh(e,a){let l=0;const o=e.score,r=a.score;for(;l<o.length&&l<r.length;){const c=Jh(o[l],r[l]);if(c)return c;l++}return r.length-o.length}const Kh={type:0,value:""},Xh=/[a-zA-Z0-9_]/;function Qh(e){if(!e)return[[]];if(e==="/")return[[Kh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function a(v){throw new Error(`ERR (${l})/"${u}": ${v}`)}let l=0,o=l;const r=[];let c;function m(){c&&r.push(c),c=[]}let f=0,s,u="",g="";function d(){u&&(l===0?c.push({type:0,value:u}):l===1||l===2||l===3?(c.length>1&&(s==="*"||s==="+")&&a(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),c.push({type:1,value:u,regexp:g,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):a("Invalid state to consume buffer"),u="")}function h(){u+=s}for(;f<e.length;){if(s=e[f++],s==="\\"&&l!==2){o=l,l=4;continue}switch(l){case 0:s==="/"?(u&&d(),m()):s===":"?(d(),l=1):h();break;case 4:h(),l=o;break;case 1:s==="("?l=2:Xh.test(s)?h():(d(),l=0,s!=="*"&&s!=="?"&&s!=="+"&&f--);break;case 2:s===")"?g[g.length-1]=="\\"?g=g.slice(0,-1)+s:l=3:g+=s;break;case 3:d(),l=0,s!=="*"&&s!=="?"&&s!=="+"&&f--,g="";break;default:a("Unknown state");break}}return l===2&&a(`Unfinished custom RegExp for param "${u}"`),d(),m(),r}function Zh(e,a,l){const o=Yh(Qh(e.path),l),r=Je(o,{record:e,parent:a,children:[],alias:[]});return a&&!r.record.aliasOf==!a.record.aliasOf&&a.children.push(r),r}function e_(e,a){const l=[],o=new Map;a=Lr({strict:!1,end:!0,sensitive:!1},a);function r(g){return o.get(g)}function c(g,d,h){const v=!h,_=i_(g);_.aliasOf=h&&h.record;const C=Lr(a,g),k=[_];if("alias"in g){const w=typeof g.alias=="string"?[g.alias]:g.alias;for(const x of w)k.push(Je({},_,{components:h?h.record.components:_.components,path:x,aliasOf:h?h.record:_}))}let T,b;for(const w of k){const{path:x}=w;if(d&&x[0]!=="/"){const B=d.record.path,I=B[B.length-1]==="/"?"":"/";w.path=d.record.path+(x&&I+x)}if(T=Zh(w,d,C),h?h.alias.push(T):(b=b||T,b!==T&&b.alias.push(T),v&&g.name&&!Tr(T)&&m(g.name)),"children"in _){const B=_.children;for(let I=0;I<B.length;I++)c(B[I],T,h&&h.children[I])}h=h||T,s(T)}return b?()=>{m(b)}:qa}function m(g){if(km(g)){const d=o.get(g);d&&(o.delete(g),l.splice(l.indexOf(d),1),d.children.forEach(m),d.alias.forEach(m))}else{const d=l.indexOf(g);d>-1&&(l.splice(d,1),g.record.name&&o.delete(g.record.name),g.children.forEach(m),g.alias.forEach(m))}}function f(){return l}function s(g){let d=0;for(;d<l.length&&Wh(g,l[d])>=0;)d++;l.splice(d,0,g),g.record.name&&!Tr(g)&&o.set(g.record.name,g)}function u(g,d){let h,v={},_,C;if("name"in g&&g.name){if(h=o.get(g.name),!h)throw va(1,{location:g});C=h.record.name,v=Je(t_(d.params,h.keys.filter(b=>!b.optional).map(b=>b.name)),g.params),_=h.stringify(v)}else if("path"in g)_=g.path,h=l.find(b=>b.re.test(_)),h&&(v=h.parse(_),C=h.record.name);else{if(h=d.name?o.get(d.name):l.find(b=>b.re.test(d.path)),!h)throw va(1,{location:g,currentLocation:d});C=h.record.name,v=Je({},d.params,g.params),_=h.stringify(v)}const k=[];let T=h;for(;T;)k.unshift(T.record),T=T.parent;return{name:C,path:_,params:v,matched:k,meta:l_(k)}}return e.forEach(g=>c(g)),{addRoute:c,resolve:u,removeRoute:m,getRoutes:f,getRecordMatcher:r}}function t_(e,a){const l={};for(const o of a)o in e&&(l[o]=e[o]);return l}function i_(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:a_(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function a_(e){const a={},l=e.props||!1;if("component"in e)a.default=l;else for(const o in e.components)a[o]=typeof l=="boolean"?l:l[o];return a}function Tr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function l_(e){return e.reduce((a,l)=>Je(a,l.meta),{})}function Lr(e,a){const l={};for(const o in e)l[o]=o in a?a[o]:e[o];return l}const $m=/#/g,n_=/&/g,o_=/\//g,s_=/=/g,r_=/\?/g,Bm=/\+/g,u_=/%5B/g,c_=/%5D/g,Tm=/%5E/g,d_=/%60/g,Lm=/%7B/g,m_=/%7C/g,Im=/%7D/g,p_=/%20/g;function ks(e){return encodeURI(""+e).replace(m_,"|").replace(u_,"[").replace(c_,"]")}function f_(e){return ks(e).replace(Lm,"{").replace(Im,"}").replace(Tm,"^")}function ko(e){return ks(e).replace(Bm,"%2B").replace(p_,"+").replace($m,"%23").replace(n_,"%26").replace(d_,"`").replace(Lm,"{").replace(Im,"}").replace(Tm,"^")}function g_(e){return ko(e).replace(s_,"%3D")}function h_(e){return ks(e).replace($m,"%23").replace(r_,"%3F")}function __(e){return e==null?"":h_(e).replace(o_,"%2F")}function jl(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function b_(e){const a={};if(e===""||e==="?")return a;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<o.length;++r){const c=o[r].replace(Bm," "),m=c.indexOf("="),f=jl(m<0?c:c.slice(0,m)),s=m<0?null:jl(c.slice(m+1));if(f in a){let u=a[f];Array.isArray(u)||(u=a[f]=[u]),u.push(s)}else a[f]=s}return a}function Ir(e){let a="";for(let l in e){const o=e[l];if(l=g_(l),o==null){o!==void 0&&(a+=(a.length?"&":"")+l);continue}(Array.isArray(o)?o.map(c=>c&&ko(c)):[o&&ko(o)]).forEach(c=>{c!==void 0&&(a+=(a.length?"&":"")+l,c!=null&&(a+="="+c))})}return a}function v_(e){const a={};for(const l in e){const o=e[l];o!==void 0&&(a[l]=Array.isArray(o)?o.map(r=>r==null?null:""+r):o==null?o:""+o)}return a}function Ia(){let e=[];function a(o){return e.push(o),()=>{const r=e.indexOf(o);r>-1&&e.splice(r,1)}}function l(){e=[]}return{add:a,list:()=>e,reset:l}}function y_(e,a,l){const o=()=>{e[a].delete(l)};Wi(o),gs(o),fs(()=>{e[a].add(l)}),e[a].add(l)}function S_(e){const a=Fe(wm,{}).value;a&&y_(a,"updateGuards",e)}function pi(e,a,l,o,r){const c=o&&(o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise((m,f)=>{const s=d=>{d===!1?f(va(4,{from:l,to:a})):d instanceof Error?f(d):Gh(d)?f(va(2,{from:a,to:d})):(c&&o.enterCallbacks[r]===c&&typeof d=="function"&&c.push(d),m())},u=e.call(o&&o.instances[r],a,l,s);let g=Promise.resolve(u);e.length<3&&(g=g.then(s)),g.catch(d=>f(d))})}function On(e,a,l,o){const r=[];for(const c of e)for(const m in c.components){let f=c.components[m];if(!(a!=="beforeRouteEnter"&&!c.instances[m]))if(w_(f)){const u=(f.__vccOpts||f)[a];u&&r.push(pi(u,l,o,c,m))}else{let s=f();r.push(()=>s.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${m}" at "${c.path}"`));const g=xh(u)?u.default:u;c.components[m]=g;const h=(g.__vccOpts||g)[a];return h&&pi(h,l,o,c,m)()}))}}return r}function w_(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Dr(e){const a=Fe(kn),l=Fe(As),o=H(()=>a.resolve(p(e.to))),r=H(()=>{const{matched:s}=o.value,{length:u}=s,g=s[u-1],d=l.matched;if(!g||!d.length)return-1;const h=d.findIndex(ba.bind(null,g));if(h>-1)return h;const v=Er(s[u-2]);return u>1&&Er(g)===v&&d[d.length-1].path!==v?d.findIndex(ba.bind(null,s[u-2])):h}),c=H(()=>r.value>-1&&k_(l.params,o.value.params)),m=H(()=>r.value>-1&&r.value===l.matched.length-1&&Cm(l.params,o.value.params));function f(s={}){return A_(s)?a[p(e.replace)?"replace":"push"](p(e.to)).catch(qa):Promise.resolve()}return{route:o,href:H(()=>o.value.href),isActive:c,isExactActive:m,navigate:f}}const C_=R({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Dr,setup(e,{slots:a}){const l=ti(Dr(e)),{options:o}=Fe(kn),r=H(()=>({[Rr(e.activeClass,o.linkActiveClass,"router-link-active")]:l.isActive,[Rr(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:l.isExactActive}));return()=>{const c=a.default&&a.default(l);return e.custom?c:J("a",{"aria-current":l.isExactActive?e.ariaCurrentValue:null,href:l.href,onClick:l.navigate,class:r.value},c)}}}),xs=C_;function A_(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const a=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return e.preventDefault&&e.preventDefault(),!0}}function k_(e,a){for(const l in a){const o=a[l],r=e[l];if(typeof o=="string"){if(o!==r)return!1}else if(!Array.isArray(r)||r.length!==o.length||o.some((c,m)=>c!==r[m]))return!1}return!0}function Er(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Rr=(e,a,l)=>e??a??l,x_=R({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:a,slots:l}){const o=Fe(Co),r=H(()=>e.route||o.value),c=Fe(wr,0),m=H(()=>r.value.matched[c]);ut(wr,c+1),ut(wm,m),ut(Co,r);const f=G();return pt(()=>[f.value,m.value,e.name],([s,u,g],[d,h,v])=>{u&&(u.instances[g]=s,h&&h!==u&&s&&s===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),s&&u&&(!h||!ba(u,h)||!d)&&(u.enterCallbacks[g]||[]).forEach(_=>_(s))},{flush:"post"}),()=>{const s=r.value,u=m.value,g=u&&u.components[e.name],d=e.name;if(!g)return zr(l.default,{Component:g,route:s});const h=u.props[e.name],v=h?h===!0?s.params:typeof h=="function"?h(s):h:null,C=J(g,Je({},v,a,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(u.instances[d]=null)},ref:f}));return zr(l.default,{Component:C,route:s})||C}}});function zr(e,a){if(!e)return null;const l=e(a);return l.length===1?l[0]:l}const $_=x_;function B_(e){const a=e_(e.routes,e),l=e.parseQuery||b_,o=e.stringifyQuery||Ir,r=e.history,c=Ia(),m=Ia(),f=Ia(),s=Xc(si);let u=si;ea&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const g=Hn.bind(null,Y=>""+Y),d=Hn.bind(null,__),h=Hn.bind(null,jl);function v(Y,se){let oe,_e;return km(Y)?(oe=a.getRecordMatcher(Y),_e=se):_e=Y,a.addRoute(_e,oe)}function _(Y){const se=a.getRecordMatcher(Y);se&&a.removeRoute(se)}function C(){return a.getRoutes().map(Y=>Y.record)}function k(Y){return!!a.getRecordMatcher(Y)}function T(Y,se){if(se=Je({},se||s.value),typeof Y=="string"){const $e=Nn(l,Y,se.path),L=a.resolve({path:$e.path},se),E=r.createHref($e.fullPath);return Je($e,L,{params:h(L.params),hash:jl($e.hash),redirectedFrom:void 0,href:E})}let oe;if("path"in Y)oe=Je({},Y,{path:Nn(l,Y.path,se.path).path});else{const $e=Je({},Y.params);for(const L in $e)$e[L]==null&&delete $e[L];oe=Je({},Y,{params:d(Y.params)}),se.params=d(se.params)}const _e=a.resolve(oe,se),He=Y.hash||"";_e.params=g(h(_e.params));const Ne=Th(o,Je({},Y,{hash:f_(He),path:_e.path})),xe=r.createHref(Ne);return Je({fullPath:Ne,hash:He,query:o===Ir?v_(Y.query):Y.query||{}},_e,{redirectedFrom:void 0,href:xe})}function b(Y){return typeof Y=="string"?Nn(l,Y,s.value.path):Je({},Y)}function w(Y,se){if(u!==Y)return va(8,{from:se,to:Y})}function x(Y){return V(Y)}function B(Y){return x(Je(b(Y),{replace:!0}))}function I(Y){const se=Y.matched[Y.matched.length-1];if(se&&se.redirect){const{redirect:oe}=se;let _e=typeof oe=="function"?oe(Y):oe;return typeof _e=="string"&&(_e=_e.includes("?")||_e.includes("#")?_e=b(_e):{path:_e},_e.params={}),Je({query:Y.query,hash:Y.hash,params:Y.params},_e)}}function V(Y,se){const oe=u=T(Y),_e=s.value,He=Y.state,Ne=Y.force,xe=Y.replace===!0,$e=I(oe);if($e)return V(Je(b($e),{state:He,force:Ne,replace:xe}),se||oe);const L=oe;L.redirectedFrom=se;let E;return!Ne&&Lh(o,_e,oe)&&(E=va(16,{to:L,from:_e}),We(_e,_e,!0,!1)),(E?Promise.resolve(E):z(L,_e)).catch(O=>Bi(O)?O:de(O,L,_e)).then(O=>{if(O){if(Bi(O,2))return V(Je(b(O.to),{state:He,force:Ne,replace:xe}),se||L)}else O=X(L,_e,!0,xe,He);return j(L,_e,O),O})}function F(Y,se){const oe=w(Y,se);return oe?Promise.reject(oe):Promise.resolve()}function z(Y,se){let oe;const[_e,He,Ne]=T_(Y,se);oe=On(_e.reverse(),"beforeRouteLeave",Y,se);for(const $e of _e)$e.leaveGuards.forEach(L=>{oe.push(pi(L,Y,se))});const xe=F.bind(null,Y,se);return oe.push(xe),Qi(oe).then(()=>{oe=[];for(const $e of c.list())oe.push(pi($e,Y,se));return oe.push(xe),Qi(oe)}).then(()=>{oe=On(He,"beforeRouteUpdate",Y,se);for(const $e of He)$e.updateGuards.forEach(L=>{oe.push(pi(L,Y,se))});return oe.push(xe),Qi(oe)}).then(()=>{oe=[];for(const $e of Y.matched)if($e.beforeEnter&&!se.matched.includes($e))if(Array.isArray($e.beforeEnter))for(const L of $e.beforeEnter)oe.push(pi(L,Y,se));else oe.push(pi($e.beforeEnter,Y,se));return oe.push(xe),Qi(oe)}).then(()=>(Y.matched.forEach($e=>$e.enterCallbacks={}),oe=On(Ne,"beforeRouteEnter",Y,se),oe.push(xe),Qi(oe))).then(()=>{oe=[];for(const $e of m.list())oe.push(pi($e,Y,se));return oe.push(xe),Qi(oe)}).catch($e=>Bi($e,8)?$e:Promise.reject($e))}function j(Y,se,oe){for(const _e of f.list())_e(Y,se,oe)}function X(Y,se,oe,_e,He){const Ne=w(Y,se);if(Ne)return Ne;const xe=se===si,$e=ea?history.state:{};oe&&(_e||xe?r.replace(Y.fullPath,Je({scroll:xe&&$e&&$e.scroll},He)):r.push(Y.fullPath,He)),s.value=Y,We(Y,se,oe,xe),Ie()}let U;function pe(){U=r.listen((Y,se,oe)=>{const _e=T(Y),He=I(_e);if(He){V(Je(He,{replace:!0}),_e).catch(qa);return}u=_e;const Ne=s.value;ea&&Vh(kr(Ne.fullPath,oe.delta),xn()),z(_e,Ne).catch(xe=>Bi(xe,12)?xe:Bi(xe,2)?(V(xe.to,_e).then($e=>{Bi($e,20)&&!oe.delta&&oe.type===al.pop&&r.go(-1,!1)}).catch(qa),Promise.reject()):(oe.delta&&r.go(-oe.delta,!1),de(xe,_e,Ne))).then(xe=>{xe=xe||X(_e,Ne,!1),xe&&(oe.delta?r.go(-oe.delta,!1):oe.type===al.pop&&Bi(xe,20)&&r.go(-1,!1)),j(_e,Ne,xe)}).catch(qa)})}let Be=Ia(),q=Ia(),K;function de(Y,se,oe){Ie(Y);const _e=q.list();return _e.length?_e.forEach(He=>He(Y,se,oe)):console.error(Y),Promise.reject(Y)}function ie(){return K&&s.value!==si?Promise.resolve():new Promise((Y,se)=>{Be.add([Y,se])})}function Ie(Y){K||(K=!0,pe(),Be.list().forEach(([se,oe])=>Y?oe(Y):se()),Be.reset())}function We(Y,se,oe,_e){const{scrollBehavior:He}=e;if(!ea||!He)return Promise.resolve();const Ne=!oe&&Fh(kr(Y.fullPath,0))||(_e||!oe)&&history.state&&history.state.scroll||null;return ka().then(()=>He(Y,se,Ne)).then(xe=>xe&&Mh(xe)).catch(xe=>de(xe,Y,se))}const nt=Y=>r.go(Y);let Ye;const Ut=new Set;return{currentRoute:s,addRoute:v,removeRoute:_,hasRoute:k,getRoutes:C,resolve:T,options:e,push:x,replace:B,go:nt,back:()=>nt(-1),forward:()=>nt(1),beforeEach:c.add,beforeResolve:m.add,afterEach:f.add,onError:q.add,isReady:ie,install(Y){const se=this;Y.component("RouterLink",xs),Y.component("RouterView",$_),Y.config.globalProperties.$router=se,Object.defineProperty(Y.config.globalProperties,"$route",{enumerable:!0,get:()=>p(s)}),ea&&!Ye&&s.value===si&&(Ye=!0,x(r.location).catch(He=>{}));const oe={};for(const He in si)oe[He]=H(()=>s.value[He]);Y.provide(kn,se),Y.provide(As,ti(oe)),Y.provide(Co,s);const _e=Y.unmount;Ut.add(Y),Y.unmount=function(){Ut.delete(Y),Ut.size<1&&(u=si,U&&U(),s.value=si,Ye=!1,K=!1),_e()}}}}function Qi(e){return e.reduce((a,l)=>a.then(()=>l()),Promise.resolve())}function T_(e,a){const l=[],o=[],r=[],c=Math.max(a.matched.length,e.matched.length);for(let m=0;m<c;m++){const f=a.matched[m];f&&(e.matched.find(u=>ba(u,f))?o.push(f):l.push(f));const s=e.matched[m];s&&(a.matched.find(u=>ba(u,s))||r.push(s))}return[l,o,r]}function Dm(){return Fe(kn)}function Em(){return Fe(As)}const L_={__name:"Navbar",props:["onClick"],setup(e){const a=G(),l=Dm();function o(r){return r.charAt(0).toUpperCase()+r.slice(1)}return ds(()=>{const m=l.currentRoute.value.path.match(/\/([^/]+)$/);m&&(a.value=o(m[1]))}),(r,c)=>{const m=y("SuiIcon"),f=y("SuiMenuItem"),s=y("SuiMenu");return $(),D(s,{id:"navbar",fixed:"",icon:"",inverted:"",size:"big"},{default:i(()=>[t(f,{onClick:e.onClick},{default:i(()=>[t(m,{name:"hamburger"})]),_:1},8,["onClick"]),t(f,null,{default:i(()=>[n(Te(a.value),1)]),_:1})]),_:1})}}},I_=ke(L_,[["__scopeId","data-v-338afb35"]]),D_=R({name:"Sidebar",setup(){const e=Em();return{isActive:m=>e.path===m,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),E_=S("strong",null," Fomantic UI Vue ",-1),R_=S("b",null,"Getting Started",-1);function z_(e,a,l,o,r,c){const m=y("sui-menu-item"),f=y("sui-menu-header"),s=y("sui-menu-menu"),u=y("sui-menu");return $(),D(u,{fluid:"",inverted:"",vertical:""},{default:i(()=>[t(m,{as:"div"},{default:i(()=>[E_]),_:1}),t(m,{as:"router-link",to:"/"},{default:i(()=>[R_]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Elements"}),t(s,null,{default:i(()=>[($(!0),he(Ce,null,tt(e.elements,g=>($(),D(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Collections"}),t(s,null,{default:i(()=>[($(!0),he(Ce,null,tt(e.collections,g=>($(),D(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Views"}),t(s,null,{default:i(()=>[($(!0),he(Ce,null,tt(e.views,g=>($(),D(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Modules"}),t(s,null,{default:i(()=>[($(!0),he(Ce,null,tt(e.modules,g=>($(),D(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const P_=ke(D_,[["render",z_]]),M_={class:"sidemenu"},V_={style:{flex:"1","overflow-y":"scroll"}},F_={__name:"Sidebar",setup(e){return(a,l)=>($(),he("div",M_,[S("div",V_,[t(P_)])]))}},H_=ke(F_,[["__scopeId","data-v-379ef704"]]),N_=R({name:"Sidebar",setup(){const e=Em();return{isActive:m=>e.path===m,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),O_=S("strong",null," Fomantic UI Vue ",-1),j_=S("b",null,"Getting Started",-1);function G_(e,a,l,o,r,c){const m=y("sui-menu-item"),f=y("sui-menu-header"),s=y("sui-menu-menu"),u=y("sui-sidebar");return $(),D(u,{dimmed:"",inverted:"",style:{width:"250px"}},{default:i(()=>[t(m,{as:"div"},{default:i(()=>[O_]),_:1}),t(m,{as:"router-link",to:"/"},{default:i(()=>[j_]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Elements"}),t(s,null,{default:i(()=>[($(!0),he(Ce,null,tt(e.elements,g=>($(),D(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Collections"}),t(s,null,{default:i(()=>[($(!0),he(Ce,null,tt(e.collections,g=>($(),D(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Views"}),t(s,null,{default:i(()=>[($(!0),he(Ce,null,tt(e.views,g=>($(),D(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Modules"}),t(s,null,{default:i(()=>[($(!0),he(Ce,null,tt(e.modules,g=>($(),D(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const q_=ke(N_,[["render",G_]]),U_={class:"pusher",style:{height:"100vh"}},Y_={class:"article"},J_={__name:"Home",setup(e){const a=G(!1),l=()=>a.value=!a.value;return S_(()=>{a.value=!1}),(o,r)=>{const c=y("router-view"),m=y("SuiSegment");return $(),D(m,{class:"pushable",style:{border:"none"}},{default:i(()=>[t(q_,{visible:a.value},null,8,["visible"]),S("div",U_,[t(H_),t(I_,{"on-click":l}),S("div",Y_,[t(c)])])]),_:1})}}},W_=ke(J_,[["__scopeId","data-v-0bfd4ee9"]]),K_={__name:"DocSections",props:["docs"],setup(e){const a=e,l=H(()=>[...new Set(a.docs.map(o=>o.category))]);return(o,r)=>{const c=y("SuiHeader");return $(!0),he(Ce,null,tt(l.value,(m,f)=>($(),he(Ce,{key:m},[t(c,{as:"h2",dividing:"",style:Aa({marginTop:f!==0?"5rem":"0",paddingTop:"2rem"})},{default:i(()=>[n(Te(m),1)]),_:2},1032,["style"]),($(!0),he(Ce,null,tt(e.docs.filter(s=>s.category===m),(s,u)=>($(),D(ud(s.component),{key:s.label+"_"+u,id:s.id,style:{paddingTop:"3rem"}},null,8,["id"]))),128))],64))),128)}}},X_=e=>(od("data-v-e2ae2e49"),e=e(),sd(),e),Q_={class:"item"},Z_=X_(()=>S("i",{class:"dropdown icon"},null,-1)),eb={class:"content menu active"},tb={__name:"DocTableLink",props:["header","items"],setup(e){const{id:a}=$d(),l=m=>{m.preventDefault();const f=document.getElementById(a);f.open?r(f):(f.open=!0,o(f))},o=m=>{m.querySelector(".title").classList.add("active");const s=m.querySelector(".content"),u=s.offsetHeight;s.style.maxHeight=0,requestAnimationFrame(()=>{s.style.maxHeight=`${u}px`});const g=new AbortController;s.addEventListener("transitionend",()=>{s.removeAttribute("style"),g.abort()},{signal:g.signal})},r=m=>{const f=m.querySelector(".title"),s=m.querySelector(".content"),u=s.offsetHeight;s.style.maxHeight=`${u}px`,requestAnimationFrame(()=>{s.style.maxHeight=0,f.classList.remove("active")});const g=new AbortController;s.addEventListener("transitionend",()=>{s.removeAttribute("style"),m.open=!1,g.abort()},{signal:g.signal})},c=(m,f)=>{m.preventDefault(),document.getElementById(f.replace("_link","")).scrollIntoView({behavior:"smooth",block:"start"})};return(m,f)=>($(),he("details",Q_,[S("summary",{class:"title",onClick:l},[Z_,S("b",null,Te(e.header),1)]),S("div",eb,[($(!0),he(Ce,null,tt(e.items,s=>($(),D(p(xs),{to:`#${s.id}`,class:"item",onClick:u=>c(u,s.id)},{default:i(()=>[n(Te(s.label),1)]),_:2},1032,["to","onClick"]))),256))])]))}},ib=ke(tb,[["__scopeId","data-v-e2ae2e49"]]),ab={class:"sticky"},lb={class:"ui vertical following fluid accordion text large menu"},nb={__name:"DocTableContents",props:["title","links"],setup(e){const a=e,l=[...new Set(a.links.map(o=>o.category))];return(o,r)=>{const c=y("SuiHeader"),m=y("SuiRail");return $(),D(m,{id:"table-contents",position:"right",dividing:""},{default:i(()=>[S("div",ab,[t(c,{as:"h3"},{default:i(()=>[n(Te(e.title),1)]),_:1}),S("div",lb,[($(),he(Ce,null,tt(l,f=>t(ib,{id:`${f}_link`,header:f,items:e.links.filter(s=>s.category===f)},null,8,["id","header","items"])),64))])])]),_:1})}}},ob=ke(nb,[["__scopeId","data-v-bd90305d"]]),sb={class:"intro"},rb={__name:"DocComponent",props:["title","description","componentDocs"],setup(e){const a=G();return(l,o)=>{const r=y("SuiHeaderSubheader"),c=y("SuiHeader"),m=y("SuiDivider"),f=y("SuiIcon"),s=y("SuiMenuItem"),u=y("SuiPopup"),g=y("SuiMenu"),d=y("SuiContainer"),h=y("SuiSegment");return $(),he("div",null,[t(h,{id:"masthead",vertical:"",style:{"border-bottom":"1px solid #DDDDDD"}},{default:i(()=>[t(d,{class:"main"},{default:i(()=>[S("div",sb,[t(c,{as:"h1"},{default:i(()=>[n(Te(e.title)+" ",1),t(r,null,{default:i(()=>[n(Te(e.description),1)]),_:1})]),_:1}),t(m,{hidden:""}),t(g,{icon:"",floated:"right"},{default:i(()=>[t(s,{as:"a",icon:"",ref_key:"el",ref:a,href:"https://github.com/nightswinger/vue-fomantic-ui"},{default:i(()=>[t(f,{name:"alternate github"})]),_:1},512),t(u,{trigger:a.value,position:"top right"},{default:i(()=>[n(" View Project on GitHub ")]),_:1},8,["trigger"])]),_:1})])]),_:1})]),_:1}),t(d,{class:"main"},{default:i(()=>[t(h,{basic:"",fitted:""},{default:i(()=>[e.componentDocs?($(),he(Ce,{key:0},[t(K_,{docs:e.componentDocs},null,8,["docs"]),t(ob,{title:e.title,links:e.componentDocs},null,8,["title","links"])],64)):vs("",!0),Fi(l.$slots,"default",{},void 0,!0)]),_:3})]),_:3})])}}},Ct=ke(rb,[["__scopeId","data-v-d22eb33f"]]);var Pr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function ub(e){if(e.__esModule)return e;var a=e.default;if(typeof a=="function"){var l=function o(){return this instanceof o?Reflect.construct(a,arguments,this.constructor):a.apply(this,arguments)};l.prototype=a.prototype}else l={};return Object.defineProperty(l,"__esModule",{value:!0}),Object.keys(e).forEach(function(o){var r=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(l,o,r.get?r:{enumerable:!0,get:function(){return e[o]}})}),l}var zm={exports:{}};(function(e){var a=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var l=function(o){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,c=0,m={},f={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function b(w){return w instanceof s?new s(w.type,b(w.content),w.alias):Array.isArray(w)?w.map(b):w.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++c}),b.__id},clone:function b(w,x){x=x||{};var B,I;switch(f.util.type(w)){case"Object":if(I=f.util.objId(w),x[I])return x[I];B={},x[I]=B;for(var V in w)w.hasOwnProperty(V)&&(B[V]=b(w[V],x));return B;case"Array":return I=f.util.objId(w),x[I]?x[I]:(B=[],x[I]=B,w.forEach(function(F,z){B[z]=b(F,x)}),B);default:return w}},getLanguage:function(b){for(;b;){var w=r.exec(b.className);if(w)return w[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,w){b.className=b.className.replace(RegExp(r,"gi"),""),b.classList.add("language-"+w)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(B){var b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(B.stack)||[])[1];if(b){var w=document.getElementsByTagName("script");for(var x in w)if(w[x].src==b)return w[x]}return null}},isActive:function(b,w,x){for(var B="no-"+w;b;){var I=b.classList;if(I.contains(w))return!0;if(I.contains(B))return!1;b=b.parentElement}return!!x}},languages:{plain:m,plaintext:m,text:m,txt:m,extend:function(b,w){var x=f.util.clone(f.languages[b]);for(var B in w)x[B]=w[B];return x},insertBefore:function(b,w,x,B){B=B||f.languages;var I=B[b],V={};for(var F in I)if(I.hasOwnProperty(F)){if(F==w)for(var z in x)x.hasOwnProperty(z)&&(V[z]=x[z]);x.hasOwnProperty(F)||(V[F]=I[F])}var j=B[b];return B[b]=V,f.languages.DFS(f.languages,function(X,U){U===j&&X!=b&&(this[X]=V)}),V},DFS:function b(w,x,B,I){I=I||{};var V=f.util.objId;for(var F in w)if(w.hasOwnProperty(F)){x.call(w,F,w[F],B||F);var z=w[F],j=f.util.type(z);j==="Object"&&!I[V(z)]?(I[V(z)]=!0,b(z,x,null,I)):j==="Array"&&!I[V(z)]&&(I[V(z)]=!0,b(z,x,F,I))}}},plugins:{},highlightAll:function(b,w){f.highlightAllUnder(document,b,w)},highlightAllUnder:function(b,w,x){var B={callback:x,container:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};f.hooks.run("before-highlightall",B),B.elements=Array.prototype.slice.apply(B.container.querySelectorAll(B.selector)),f.hooks.run("before-all-elements-highlight",B);for(var I=0,V;V=B.elements[I++];)f.highlightElement(V,w===!0,B.callback)},highlightElement:function(b,w,x){var B=f.util.getLanguage(b),I=f.languages[B];f.util.setLanguage(b,B);var V=b.parentElement;V&&V.nodeName.toLowerCase()==="pre"&&f.util.setLanguage(V,B);var F=b.textContent,z={element:b,language:B,grammar:I,code:F};function j(U){z.highlightedCode=U,f.hooks.run("before-insert",z),z.element.innerHTML=z.highlightedCode,f.hooks.run("after-highlight",z),f.hooks.run("complete",z),x&&x.call(z.element)}if(f.hooks.run("before-sanity-check",z),V=z.element.parentElement,V&&V.nodeName.toLowerCase()==="pre"&&!V.hasAttribute("tabindex")&&V.setAttribute("tabindex","0"),!z.code){f.hooks.run("complete",z),x&&x.call(z.element);return}if(f.hooks.run("before-highlight",z),!z.grammar){j(f.util.encode(z.code));return}if(w&&o.Worker){var X=new Worker(f.filename);X.onmessage=function(U){j(U.data)},X.postMessage(JSON.stringify({language:z.language,code:z.code,immediateClose:!0}))}else j(f.highlight(z.code,z.grammar,z.language))},highlight:function(b,w,x){var B={code:b,grammar:w,language:x};if(f.hooks.run("before-tokenize",B),!B.grammar)throw new Error('The language "'+B.language+'" has no grammar.');return B.tokens=f.tokenize(B.code,B.grammar),f.hooks.run("after-tokenize",B),s.stringify(f.util.encode(B.tokens),B.language)},tokenize:function(b,w){var x=w.rest;if(x){for(var B in x)w[B]=x[B];delete w.rest}var I=new d;return h(I,I.head,b),g(b,I,w,I.head,0),_(I)},hooks:{all:{},add:function(b,w){var x=f.hooks.all;x[b]=x[b]||[],x[b].push(w)},run:function(b,w){var x=f.hooks.all[b];if(!(!x||!x.length))for(var B=0,I;I=x[B++];)I(w)}},Token:s};o.Prism=f;function s(b,w,x,B){this.type=b,this.content=w,this.alias=x,this.length=(B||"").length|0}s.stringify=function b(w,x){if(typeof w=="string")return w;if(Array.isArray(w)){var B="";return w.forEach(function(j){B+=b(j,x)}),B}var I={type:w.type,content:b(w.content,x),tag:"span",classes:["token",w.type],attributes:{},language:x},V=w.alias;V&&(Array.isArray(V)?Array.prototype.push.apply(I.classes,V):I.classes.push(V)),f.hooks.run("wrap",I);var F="";for(var z in I.attributes)F+=" "+z+'="'+(I.attributes[z]||"").replace(/"/g,"&quot;")+'"';return"<"+I.tag+' class="'+I.classes.join(" ")+'"'+F+">"+I.content+"</"+I.tag+">"};function u(b,w,x,B){b.lastIndex=w;var I=b.exec(x);if(I&&B&&I[1]){var V=I[1].length;I.index+=V,I[0]=I[0].slice(V)}return I}function g(b,w,x,B,I,V){for(var F in x)if(!(!x.hasOwnProperty(F)||!x[F])){var z=x[F];z=Array.isArray(z)?z:[z];for(var j=0;j<z.length;++j){if(V&&V.cause==F+","+j)return;var X=z[j],U=X.inside,pe=!!X.lookbehind,Be=!!X.greedy,q=X.alias;if(Be&&!X.pattern.global){var K=X.pattern.toString().match(/[imsuy]*$/)[0];X.pattern=RegExp(X.pattern.source,K+"g")}for(var de=X.pattern||X,ie=B.next,Ie=I;ie!==w.tail&&!(V&&Ie>=V.reach);Ie+=ie.value.length,ie=ie.next){var We=ie.value;if(w.length>b.length)return;if(!(We instanceof s)){var nt=1,Ye;if(Be){if(Ye=u(de,Ie,b,pe),!Ye||Ye.index>=b.length)break;var se=Ye.index,Ut=Ye.index+Ye[0].length,Lt=Ie;for(Lt+=ie.value.length;se>=Lt;)ie=ie.next,Lt+=ie.value.length;if(Lt-=ie.value.length,Ie=Lt,ie.value instanceof s)continue;for(var Y=ie;Y!==w.tail&&(Lt<Ut||typeof Y.value=="string");Y=Y.next)nt++,Lt+=Y.value.length;nt--,We=b.slice(Ie,Lt),Ye.index-=Ie}else if(Ye=u(de,0,We,pe),!Ye)continue;var se=Ye.index,oe=Ye[0],_e=We.slice(0,se),He=We.slice(se+oe.length),Ne=Ie+We.length;V&&Ne>V.reach&&(V.reach=Ne);var xe=ie.prev;_e&&(xe=h(w,xe,_e),Ie+=_e.length),v(w,xe,nt);var $e=new s(F,U?f.tokenize(oe,U):oe,q,oe);if(ie=h(w,xe,$e),He&&h(w,ie,He),nt>1){var L={cause:F+","+j,reach:Ne};g(b,w,x,ie.prev,Ie,L),V&&L.reach>V.reach&&(V.reach=L.reach)}}}}}}function d(){var b={value:null,prev:null,next:null},w={value:null,prev:b,next:null};b.next=w,this.head=b,this.tail=w,this.length=0}function h(b,w,x){var B=w.next,I={value:x,prev:w,next:B};return w.next=I,B.prev=I,b.length++,I}function v(b,w,x){for(var B=w.next,I=0;I<x&&B!==b.tail;I++)B=B.next;w.next=B,B.prev=w,b.length-=I}function _(b){for(var w=[],x=b.head.next;x!==b.tail;)w.push(x.value),x=x.next;return w}if(!o.document)return o.addEventListener&&(f.disableWorkerMessageHandler||o.addEventListener("message",function(b){var w=JSON.parse(b.data),x=w.language,B=w.code,I=w.immediateClose;o.postMessage(f.highlight(B,f.languages[x],x)),I&&o.close()},!1)),f;var C=f.util.currentScript();C&&(f.filename=C.src,C.hasAttribute("data-manual")&&(f.manual=!0));function k(){f.manual||f.highlightAll()}if(!f.manual){var T=document.readyState;T==="loading"||T==="interactive"&&C&&C.defer?document.addEventListener("DOMContentLoaded",k):window.requestAnimationFrame?window.requestAnimationFrame(k):window.setTimeout(k,16)}return f}(a);e.exports&&(e.exports=l),typeof Pr<"u"&&(Pr.Prism=l),l.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},l.languages.markup.tag.inside["attr-value"].inside.entity=l.languages.markup.entity,l.languages.markup.doctype.inside["internal-subset"].inside=l.languages.markup,l.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(l.languages.markup.tag,"addInlined",{value:function(r,c){var m={};m["language-"+c]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:l.languages[c]},m.cdata=/^<!\[CDATA\[|\]\]>$/i;var f={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:m}};f["language-"+c]={pattern:/[\s\S]+/,inside:l.languages[c]};var s={};s[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:f},l.languages.insertBefore("markup","cdata",s)}}),Object.defineProperty(l.languages.markup.tag,"addAttribute",{value:function(o,r){l.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:l.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),l.languages.html=l.languages.markup,l.languages.mathml=l.languages.markup,l.languages.svg=l.languages.markup,l.languages.xml=l.languages.extend("markup",{}),l.languages.ssml=l.languages.xml,l.languages.atom=l.languages.xml,l.languages.rss=l.languages.xml,function(o){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var c=o.languages.markup;c&&(c.tag.addInlined("style","css"),c.tag.addAttribute("style","css"))}(l),l.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},l.languages.javascript=l.languages.extend("clike",{"class-name":[l.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),l.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,l.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:l.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:l.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:l.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:l.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:l.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),l.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:l.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),l.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),l.languages.markup&&(l.languages.markup.tag.addInlined("script","javascript"),l.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),l.languages.js=l.languages.javascript,function(){if(typeof l>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading…",r=function(C,k){return"✖ Error "+C+" while fetching file: "+k},c="✖ Error: File does not exist or is empty",m={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},f="data-src-status",s="loading",u="loaded",g="failed",d="pre[data-src]:not(["+f+'="'+u+'"]):not(['+f+'="'+s+'"])';function h(C,k,T){var b=new XMLHttpRequest;b.open("GET",C,!0),b.onreadystatechange=function(){b.readyState==4&&(b.status<400&&b.responseText?k(b.responseText):b.status>=400?T(r(b.status,b.statusText)):T(c))},b.send(null)}function v(C){var k=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(C||"");if(k){var T=Number(k[1]),b=k[2],w=k[3];return b?w?[T,Number(w)]:[T,void 0]:[T,T]}}l.hooks.add("before-highlightall",function(C){C.selector+=", "+d}),l.hooks.add("before-sanity-check",function(C){var k=C.element;if(k.matches(d)){C.code="",k.setAttribute(f,s);var T=k.appendChild(document.createElement("CODE"));T.textContent=o;var b=k.getAttribute("data-src"),w=C.language;if(w==="none"){var x=(/\.(\w+)$/.exec(b)||[,"none"])[1];w=m[x]||x}l.util.setLanguage(T,w),l.util.setLanguage(k,w);var B=l.plugins.autoloader;B&&B.loadLanguages(w),h(b,function(I){k.setAttribute(f,u);var V=v(k.getAttribute("data-range"));if(V){var F=I.split(/\r\n?|\n/g),z=V[0],j=V[1]==null?F.length:V[1];z<0&&(z+=F.length),z=Math.max(0,Math.min(z-1,F.length)),j<0&&(j+=F.length),j=Math.max(0,Math.min(j,F.length)),I=F.slice(z,j).join(`
`),k.hasAttribute("data-start")||k.setAttribute("data-start",String(z+1))}T.textContent=I,l.highlightElement(T)},function(I){k.setAttribute(f,g),T.textContent=I})}}),l.plugins.fileHighlight={highlight:function(k){for(var T=(k||document).querySelectorAll(d),b=0,w;w=T[b++];)l.highlightElement(w)}};var _=!1;l.fileHighlight=function(){_||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),_=!0),l.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(zm);var Pm=zm.exports;const cb=Rm(Pm),Tl={mounted(e,a){var r;const l=a.modifiers,o=a.value;l.script||o==="script"?e.className="language-javascript":e.className="language-markup",cb.highlightElement(e.children[0]),(r=e.children[0].parentElement)==null||r.setAttribute("tabindex","-1")}},db={style:{paddingTop:"3rem"}},mb=S("p",null," Fomantic-UI Vue provides UI components based on Fomantic-UI. ",-1),pb=S("code",null,`$ npm install vue-fomantic-ui
$ npm install fomantic-ui-css
# or
$ yarn add vue-fomantic-ui
$ yarn add fomantic-ui-css`,-1),fb=[pb],gb={style:{paddingTop:"3rem",marginBottom:"3rem"}},hb=S("p",null," You can import all components as Vue plugin. ",-1),_b=S("code",null,`import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

const app = createApp(App)

app.use(FomanticUI)`,-1),bb=[_b],vb=S("br",null,null,-1),yb=S("p",null," Or pick a component indivisually, add it to your components option. ",-1),Sb=S("code",null,`import { SuiButton } from 'vue-fomantic-ui'

export default {
  components: { SuiButton },
  // ...
}`,-1),wb=[Sb],Cb={__name:"GettingStarted",setup(e){return(a,l)=>{const o=y("SuiHeader");return $(),D(Ct,{title:"Getting Started",description:"Getting up and running with Fomantic-UI Vue"},{default:i(()=>[S("section",db,[t(o,{as:"h2"},{default:i(()=>[n("Install")]),_:1}),mb,t(o,{as:"h3"},{default:i(()=>[n("via Package Manager")]),_:1}),bi(($(),he("pre",null,fb)),[[p(Tl)]])]),S("section",gb,[t(o,{as:"h2"},{default:i(()=>[n("Usage")]),_:1}),hb,bi(($(),he("pre",null,bb)),[[p(Tl),void 0,void 0,{script:!0}]]),vb,yb,bi(($(),he("pre",null,wb)),[[p(Tl),void 0,void 0,{script:!0}]])])]),_:1})}}};function Mm(e){var a,l,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(l=Mm(e[a]))&&(o&&(o+=" "),o+=l);else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function ee(){for(var e,a,l=0,o="";l<arguments.length;)(e=arguments[l++])&&(a=Mm(e))&&(o&&(o+=" "),o+=a);return o}const A=(e,a)=>e?a:"",Ve=(e,a)=>typeof e=="string"?`${e} ${a}`:"",Me=(e,a)=>e===!0?a:e==="below"?`${a} ${e}`:typeof e=="string"?`${e} ${a}`:"",$a=e=>e==="justified"?"justified":Ve(e,"aligned"),ai=(e,a)=>typeof e=="number"&&a?`${xo(e)} ${a}`:typeof e=="number"&&!a?xo(e):typeof e=="string"&&e==="equal"?`${e} width`:"",Da=(e,a)=>e?`${xo(e)} wide ${a}`:"",xo=e=>["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"][e-1],W=R({name:"SuiIcon",props:{as:String,bordered:Boolean,circular:Boolean,color:String,corner:[Boolean,String],disabled:Boolean,fitted:Boolean,flipped:String,inverted:Boolean,link:Boolean,loading:Boolean,name:String,rotated:String,size:String},setup(e){return{computedClass:H(()=>ee(e.color,e.name,e.size,A(e.bordered,"bordered"),A(e.circular,"circular"),A(e.disabled,"disabled"),A(e.fitted,"fitted"),A(e.inverted,"inverted"),A(e.link,"link"),A(e.loading,"loading"),Ve(e.flipped,"flipped"),Ve(e.rotated,"rotated"),Me(e.corner,"corner"),"icon"))}},render(){let e=this.$props.as||"i";return J(e,{"aria-hidden":!0,class:this.computedClass})}}),gi=R({name:"SuiIconGroup",props:{as:String,size:String},setup(e){return{computedClass:H(()=>ee(e.size,"icons"))}},render(){var e,a;let l=this.$props.as||"i";return J(l,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ab={install(e){e.component(W.name,W),e.component(gi.name,gi)}},kb=()=>({icon:[Boolean,String]}),xb=e=>({iconClasses:H(()=>typeof e.icon=="boolean"&&e.icon||e.labeled&&e.icon?"icon":ee({icon:e.icon&&!e.content}))}),$b=["right","left"],Bb=()=>({labeled:[Boolean,String]}),Tb=e=>({labeledClasses:H(()=>typeof e.labeled=="boolean"&&e.labeled?"labeled":$b.includes(e.labeled)?`${e.labeled} labeled`:"")}),Lb=["double","elastic"],Ib=()=>({loading:{type:[Boolean,String],validator:e=>Lb.includes(e)||typeof e=="boolean"}}),Db=e=>({loadingClasses:H(()=>ee(e.loading,{loading:e.loading}))}),P=R({name:"SuiButton",props:{active:Boolean,animated:[Boolean,String],as:{type:String,default:"button"},attached:String,basic:Boolean,circular:Boolean,color:String,compact:Boolean,content:[String,Array],disabled:Boolean,facebook:Boolean,floated:String,fluid:Boolean,google:Boolean,linkedin:Boolean,instagram:Boolean,inverted:Boolean,negative:Boolean,positive:Boolean,primary:Boolean,secondary:Boolean,size:String,telegram:Boolean,tertiary:Boolean,toggle:Boolean,twitter:Boolean,vk:Boolean,whatsapp:Boolean,youtube:Boolean,...kb(),...Bb(),...Ib()},setup(e){const{iconClasses:a}=xb(e),{labeledClasses:l}=Tb(e),{loadingClasses:o}=Db(e);return{classes:H(()=>ee("ui",e.color,e.size,A(e.active,"active"),A(e.basic,"basic"),A(e.circular,"circular"),A(e.compact,"compact"),A(e.disabled,"disabled"),A(e.facebook,"facebook"),A(e.fluid,"fluid"),A(e.google,"google"),A(e.linkedin,"linkedin"),A(e.instagram,"instagram"),A(e.inverted,"inverted"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.primary,"primary"),A(e.secondary,"secondary"),A(e.telegram,"telegram"),A(e.tertiary,"tertiary"),A(e.toggle,"toggle"),A(e.twitter,"twitter"),A(e.vk,"vk"),A(e.whatsapp,"whatsapp"),A(e.youtube,"youtube"),Ve(e.attached,"attached"),Ve(e.floated,"floated"),Me(e.animated,"animated"),a.value,l.value,o.value,"button"))}},render(){let e=this.as||"div";return t(e,{class:this.classes,role:"button"},{default:()=>{var a,l;return[typeof this.icon=="string"&&t(W,{name:this.icon},null),this.content||((l=(a=this.$slots).default)==null?void 0:l.call(a))]}})}}),fi=R({name:"SuiButtonContent",props:{hidden:Boolean,visible:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.hidden,"hidden"),A(e.visible,"visible"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),dt=R({name:"SuiButtonGroup",props:{attached:String,basic:Boolean,color:String,icon:Boolean,labeled:Boolean,size:String,vertical:Boolean,widths:Number},setup(e){return{computedClass:H(()=>ee("ui",e.color,e.size,A(e.basic,"basic"),A(e.icon,"icon"),A(e.labeled,"labeled"),A(e.vertical,"vertical"),Ve(e.attached,"attached"),ai(e.widths,""),"buttons"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Eb={install(e){e.component(P.name,P),e.component(fi.name,fi),e.component(dt.name,dt)}},vi=R({name:"SuiContainer",props:{fluid:Boolean,text:Boolean,textAlign:String},setup(e){return{computedClass:H(()=>ee("ui",A(e.fluid,"fluid"),A(e.text,"text"),$a(e.textAlign),"container"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Rb={install(e){e.component(vi.name,vi)}},Oe=R({name:"SuiDivider",props:{clearing:Boolean,fitted:Boolean,hidden:Boolean,horizontal:Boolean,inverted:Boolean,section:Boolean,textAlign:String,vertical:Boolean},setup(e){return{computedClass:H(()=>ee("ui",A(e.clearing,"clearing"),A(e.fitted,"fitted"),A(e.hidden,"hidden"),A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),A(e.section,"section"),A(e.vertical,"vertical"),Ve(e.textAlign,"aligned"),"divider"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),zb={install(e){e.component(Oe.name,Oe)}},St=R({name:"SuiEmoji",props:{disabled:Boolean,link:Boolean,loading:Boolean,name:String,size:String},setup(e){return{computedClass:H(()=>ee(e.size,A(e.disabled,"disabled"),A(e.link,"link"),A(e.loading,"loading")))}},render(){return this.computedClass?J("em",{class:this.computedClass,"data-emoji":this.$props.name}):J("em",{"data-emoji":this.$props.name})}}),Pb={install(e){e.component(St.name,St)}},Mt=R({name:"SuiFlag",props:{name:String},setup(e){return{computedClass:H(()=>ee(e.name,"flag"))}},render(){return J("i",{class:this.computedClass})}}),Mb={install(e){e.component(Mt.name,Mt)}},ya=R({name:"SuiHeaderSubheader",props:{as:String},setup(e){return{elementType:e.as||"div"}},render(){var e,a;return J(this.elementType,{class:"sub header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),fe=R({name:"SuiHeader",components:{HeaderSubheader:ya},props:{as:String,attached:[Boolean,String],block:Boolean,color:String,content:String,disabled:Boolean,dividing:Boolean,floated:String,icon:Boolean,image:Boolean,inverted:Boolean,size:String,sub:Boolean,subheader:String,textAlign:String},setup(e){const a=e.as||"div",l=H(()=>ee("ui",e.color,e.size,A(e.block,"block"),A(e.disabled,"disabled"),A(e.dividing,"dividing"),A(e.icon,"icon"),A(e.image,"image"),A(e.inverted,"inverted"),A(e.sub,"sub"),Ve(e.floated,"floated"),Me(e.attached,"attached"),$a(e.textAlign),"header"));return{elementType:a,computedClass:l}},render(){var e,a;let l=[];return this.content&&l.push(this.content),this.subheader&&l.push(J(ya,{},this.subheader)),l.length>0?J(this.elementType,{class:this.computedClass},l):J(this.elementType,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Gl=R({name:"SuiHeaderContent",render(){var e,a;return J("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Vb={install(e){e.component(fe.name,fe),e.component(Gl.name,Gl),e.component(ya.name,ya)}},Vm=["top","middle","bottom"],Fb={verticalAlign:{type:String,validator:e=>Vm.includes(e)}};function Hb(e){return{verticalAlignClass:H(()=>e.verticalAlign&&Vm.includes(e.verticalAlign)?`${e.verticalAlign} aligned`:null)}}const Nb=["left","right"],Ob={floated:{type:String,validator:e=>Nb.includes(e)}};function jb(e){return{floatedClass:H(()=>e.floated&&(e.floated==="left"||e.floated==="right")?`${e.floated} floated`:null)}}const N=R({name:"SuiLabel",props:{as:String,attached:String,basic:Boolean,circular:Boolean,color:String,corner:String,empty:Boolean,floating:Boolean,horizontal:Boolean,icon:String,image:Boolean,inverted:Boolean,pointing:[Boolean,String],prompt:Boolean,ribbon:[Boolean,String],size:String,tag:Boolean},setup(e,{slots:a}){const l=H(()=>ee("ui",e.size,e.color,A(e.basic,"basic"),A(e.circular,"circular"),A(e.empty,"empty"),A(e.floating,"floating"),A(e.horizontal,"horizontal"),A(e.image,"image"),A(e.inverted,"inverted"),A(e.prompt,"prompt"),A(e.tag,"tag"),Ve(e.attached,"attached"),Ve(e.corner,"corner"),Me(e.pointing,"pointing"),Me(e.ribbon,"ribbon"),"label"));let o=e.as||"div";return e.icon?()=>J(o,{class:l.value},J(W,{name:e.icon})):()=>{var r;return J(o,{class:l.value},(r=a.default)==null?void 0:r.call(a))}}}),ji=R({name:"SuiLabelDetail",render(){var e,a;return t("div",{class:"detail"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Gi=R({name:"SuiLabelGroup",props:{basic:Boolean,circular:Boolean,color:String,size:String,tag:Boolean},setup(e,{slots:a}){const l=H(()=>ee("ui",e.color,e.size,A(e.basic,"basic"),A(e.circular,"circular"),A(e.tag,"tag"),"labels"));return()=>{var o;return J("div",{class:l.value},(o=a.default)==null?void 0:o.call(a))}}}),Gb={install(e){e.component(N.name,N),e.component(ji.name,ji),e.component(Gi.name,Gi)}},ce=R({name:"SuiImage",props:{as:String,avatar:Boolean,bordered:Boolean,centered:Boolean,circular:Boolean,disabled:Boolean,fluid:Boolean,hidden:Boolean,href:String,inline:Boolean,label:Object,target:String,wrapped:Boolean,rounded:Boolean,size:String,spaced:[Boolean,String],src:String,...Fb,...Ob},setup(e,{slots:a}){const{verticalAlignClass:l}=Hb(e),{floatedClass:o}=jb(e),r=H(()=>ee("ui",e.size,l.value,o.value,A(e.avatar,"avatar"),A(e.bordered,"bordered"),A(e.centered,"centered"),A(e.circular,"circular"),A(e.disabled,"disabled"),A(e.fluid,"fluid"),A(e.hidden,"hidden"),A(e.inline,"inline"),A(e.rounded,"rounded"),Me(e.spaced,"spaced"),"image"));if(e.as==="a"||e.as==="router-link"){let c=e.as;return e.as==="router-link"&&(c=y(e.as)),()=>{var m;return J(c,{class:r.value,href:e.href,target:e.target&&e.target},J("img",{src:e.src},(m=a.default)==null?void 0:m.call(a)))}}return e.wrapped?()=>{var c;return J("div",{class:r.value},J("img",{src:e.src},(c=a.default)==null?void 0:c.call(a)))}:e.label?()=>J("div",{class:r.value},[J("img",{src:e.src}),J(N,{...e.label})]):()=>t("img",{class:r.value,src:e.src},null)}}),ql=R({name:"SuiImageGroup",props:{size:String},setup(e,{slots:a}){const l=H(()=>ee("ui",e.size,"images"));return()=>{var o;return J("div",{class:l.value},(o=a.default)==null?void 0:o.call(a))}}}),qb={install(e){e.component(ce.name,ce),e.component(ql.name,ql)}},et=R({name:"SuiInput",emits:["update:modelValue"],props:{action:String,disabled:Boolean,error:Boolean,fluid:Boolean,focus:Boolean,icon:String,iconPosition:String,inverted:Boolean,label:String,labeled:Boolean,loading:Boolean,modelValue:String,placeholder:String,size:String,transparent:Boolean,type:String},setup(e,{emit:a}){const l=H(()=>typeof e.icon=="string"||e.loading),o=H(()=>!!e.label||e.labeled),r=H(()=>ee("ui",e.size,e.action&&"action",A(e.disabled,"disabled"),A(e.error,"error"),A(e.fluid,"fluid"),A(e.focus,"focus"),e.iconPosition,A(l.value,"icon"),A(e.inverted,"inverted"),A(e.loading,"loading"),A(e.transparent,"transparent"),A(o.value,"labeled"),"input")),c=m=>a("update:modelValue",m.target.value);return()=>t("div",{class:r.value},[e.label&&t(N,null,{default:()=>[e.label]}),t("input",{type:e.type||"text",placeholder:e.placeholder,value:e.modelValue,onInput:m=>c(m)},null),l.value&&t(W,{name:e.icon||"spinner"},null),e.action&&t(P,null,{default:()=>[e.action]})])}}),Ub={install(e){e.component(et.name,et)}},$o=R({name:"SuiList",props:{animated:Boolean,as:String,bulleted:Boolean,celled:Boolean,divided:Boolean,floated:String,horizontal:Boolean,inverted:Boolean,ordered:Boolean,relaxed:Boolean,link:Boolean,selection:Boolean,verticalAlign:String},setup(e,{slots:a}){const l=H(()=>ee("ui",A(e.animated,"animated"),A(e.bulleted,"bulleted"),A(e.celled,"celled"),A(e.divided,"divided"),A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),A(e.link,"link"),A(e.ordered,"ordered"),A(e.relaxed,"relaxed"),A(e.selection,"selection"),Ve(e.verticalAlign,"aligned"),Ve(e.floated,"floated"),"list"));let o=e.as||"div";return()=>{var r;return J(o,{class:l.value},(r=a.default)==null?void 0:r.call(a))}}}),ta=R({name:"SuiListItem",props:{active:Boolean,as:String,disabled:Boolean},setup(e,{slots:a}){let l=e.as||"div";const o=H(()=>ee(A(e.active,"active"),A(e.disabled,"disabled"),"item"));return()=>{var r;return J(l,{class:o.value},(r=a.default)==null?void 0:r.call(a))}}}),Mr=R({name:"SuiListIcon",components:{Icon:W},setup(e,{slots:a}){return()=>{var l;return J(y(W.name),{...e},(l=a.default)==null?void 0:l.call(a))}}}),Vr=R({name:"SuiListContent",props:{verticalAlign:String},setup(e){return{computedClass:H(()=>ee(Ve(e.verticalAlign,"aligned"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Fr=R({name:"SuiListHeader",props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:a}){return()=>{var l;return J(e.as,{class:"header"},(l=a.default)==null?void 0:l.call(a))}}}),Hr=R({name:"SuiListDescription",props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:a}){return()=>{var l;return J(e.as,{class:"description"},(l=a.default)==null?void 0:l.call(a))}}}),Nr=R({name:"SuiListList",render(){var e,a;return t("div",{class:"list"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Yb={install(e){e.component($o.name,$o),e.component(ta.name,ta),e.component(Mr.name,Mr),e.component(Vr.name,Vr),e.component(Fr.name,Fr),e.component(Hr.name,Hr),e.component(Nr.name,Nr)}},Re=R({name:"SuiLoader",props:{active:Boolean,color:String,disabled:Boolean,fast:Boolean,indeterminate:Boolean,inline:[Boolean,String],inverted:Boolean,size:String,slow:Boolean,text:Boolean},setup(e,{slots:a}){return{computedClass:H(()=>{var l;return ee("ui",e.color,e.size,A(e.active,"active"),A(e.disabled,"disabled"),A(e.fast,"fast"),A(e.indeterminate,"indeterminate"),A(e.inverted,"inverted"),A(e.slow,"slow"),A(e.text||!!((l=a.default)!=null&&l.call(a)),"text"),Me(e.inline,"inline"),"loader")})}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Jb={install(e){e.component(Re.name,Re)}},Or=R({name:"SuiRail",props:{attached:Boolean,close:[Boolean,String],dividing:Boolean,internal:Boolean,position:String,size:String},setup(e){return{computedClass:H(()=>ee("ui",e.position,e.size,A(e.attached,"attached"),A(e.dividing,"dividing"),A(e.internal,"internal"),Me(e.close,"close"),"rail"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Wb={install(e){e.component(Or.name,Or)}},jr=R({name:"SuiReveal",props:{active:Boolean,animated:String,disabled:Boolean,instant:Boolean},setup(e){return{computedClass:H(()=>ee("ui",e.animated,A(e.active,"active"),A(e.disabled,"disabled"),A(e.instant,"instant"),"reveal"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Gr=R({name:"SuiRevealContent",props:{visible:Boolean,hidden:Boolean},setup(e){return{computedClass:H(()=>ee("ui",A(e.visible,"visible"),A(e.hidden,"hidden"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Kb={install(e){e.component(jr.name,jr),e.component(Gr.name,Gr)}},Le=R({name:"SuiSegment",props:{attached:[Boolean,String],basic:Boolean,circular:Boolean,clearing:Boolean,color:String,compact:Boolean,disabled:Boolean,fitted:[Boolean,String],floated:String,inverted:Boolean,loading:Boolean,padded:[Boolean,String],piled:Boolean,placeholder:Boolean,raised:Boolean,secondary:Boolean,size:String,stacked:Boolean,tertiary:Boolean,textAlign:String,vertical:Boolean},setup(e){return{computedClass:H(()=>ee("ui",e.color,e.size,A(e.basic,"basic"),A(e.circular,"circular"),A(e.clearing,"clearing"),A(e.compact,"compact"),A(e.disabled,"disabled"),A(e.inverted,"inverted"),A(e.loading,"loading"),A(e.piled,"piled"),A(e.placeholder,"placeholder"),A(e.raised,"raised"),A(e.secondary,"secondary"),A(e.stacked,"stacked"),A(e.tertiary,"tertiary"),A(e.vertical,"vertical"),Ve(e.floated,"floated"),Ve(e.textAlign,"aligned"),Me(e.attached,"attached"),Me(e.fitted,"fitted"),Me(e.padded,"padded"),"segment"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),qr=R({name:"SuiSegmentGroup",props:{compact:Boolean,horizontal:Boolean,piled:Boolean,raised:Boolean,size:String,stacked:Boolean},setup(e){return{computedClass:H(()=>ee("ui",e.size,A(e.compact,"compact"),A(e.horizontal,"horizontal"),A(e.piled,"piled"),A(e.raised,"raised"),A(e.stacked,"stacked"),"segments"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Ur=R({name:"SuiSegmentInline",render(){var e,a;return t("div",{class:"inline"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Xb={install(e){e.component(Le.name,Le),e.component(qr.name,qr),e.component(Ur.name,Ur)}},Yr=R({name:"SuiStep",props:{active:Boolean,completed:Boolean,disabled:Boolean,fluid:Boolean,href:String,link:Boolean,vertical:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.active,"active"),A(e.completed,"completed"),A(e.disabled,"disabled"),A(e.fluid,"fluid"),A(e.link,"link"),A(e.vertical,"vertical"),"step"))}},render(){var e,a,l,o;return this.href?t("a",{class:this.computedClass,href:this.href},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("div",{class:this.computedClass},[(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),Qb=["one","two","three","four","five","six","seven","eight"],Jr=R({name:"SuiStepGroup",props:{attached:String,fluid:Boolean,inverted:Boolean,ordered:Boolean,size:String,stackable:String,unstackable:Boolean,vertical:Boolean,widths:Number},setup(e){const{widths:a}=e;return{computedClass:H(()=>ee("ui",a&&Qb[a-1],e.size,A(e.fluid,"fluid"),A(e.inverted,"inverted"),A(e.ordered,"ordered"),A(e.unstackable,"unstackable"),A(e.vertical,"vertical"),Ve(e.attached,"attached"),Ve(e.stackable,"stackable"),"steps"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Wr=R({name:"SuiStepContent",render(){var e,a;return t("div",{class:"content"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Kr=R({name:"SuiStepTitle",render(){var e,a;return t("div",{class:"title"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Xr=R({name:"SuiStepDescription",render(){var e,a;return t("div",{class:"description"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Zb={install(e){e.component(Yr.name,Yr),e.component(Jr.name,Jr),e.component(Wr.name,Wr),e.component(Kr.name,Kr),e.component(Xr.name,Xr)}},ev=Object.freeze(Object.defineProperty({__proto__:null,Button:Eb,Container:Rb,Divider:zb,Emoji:Pb,Flag:Mb,Header:Vb,Icon:Ab,Image:qb,Input:Ub,Label:Gb,List:Yb,Loader:Jb,Rail:Wb,Reveal:Kb,Segment:Xb,Step:Zb},Symbol.toStringTag,{value:"Module"})),Bo=R({name:"SuiBreadcrumbDivider",props:{icon:String},setup(e){return{computedClass:H(()=>ee(e.icon,"icon","divider"))}},render(){var e,a;return this.icon?t("i",{"aria-hidden":"true",class:this.computedClass},null):t("div",{class:"divider"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),To=R({name:"SuiBreadcrumbSection",props:{active:Boolean,href:String,link:Boolean,to:String},setup(e){const a=H(()=>ee(A(e.active,"active"),"section")),l=e.link||!!e.href;return{computedClass:a,isLink:l}},render(){let e="div";this.isLink?e="a":this.to&&(e=y("router-link"));const a={href:this.href,to:this.to};return t(e,Ki({class:this.computedClass},a),{default:()=>{var l,o;return[(o=(l=this.$slots).default)==null?void 0:o.call(l)]}})}}),Qr=R({name:"SuiBreadcrumb",props:{icon:String,inverted:Boolean,sections:{type:Array,default:()=>[]},size:String},setup(e){return{computedClass:H(()=>ee("ui",e.size,A(e.inverted,"inverted"),"breadcrumb"))}},render(){var e,a;const l=()=>{var o;return(o=this.sections)==null?void 0:o.map((r,c)=>{const m={active:r.active,href:r.href,link:r.link,to:r.to};return t(Ce,null,[t(To,m,{default:()=>[r.content]}),this.sections.length!==c+1&&t(Bo,{icon:this.icon},{default:()=>[n(" / ")]})])})};return t("div",{class:this.computedClass},[((a=(e=this.$slots).default)==null?void 0:a.call(e))||l()])}}),tv={install(e){e.component(Qr.name,Qr),e.component(Bo.name,Bo),e.component(To.name,To)}},Ul=R({name:"SuiForm",props:{error:Boolean,inverted:Boolean,loading:Boolean,reply:Boolean,success:Boolean,unstackable:Boolean,warning:Boolean,size:String},setup(e){return{computedClass:H(()=>ee("ui",e.size,A(e.error,"error"),A(e.inverted,"inverted"),A(e.loading,"loading"),A(e.reply,"reply"),A(e.success,"success"),A(e.unstackable,"unstackable"),A(e.warning,"warning"),"form"))}},render(){var e,a;return t("form",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Zr=["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"];function iv(e){return{widthClass:H(()=>Number(e.width)>0?`${Zr[Number(e.width)-1]} wide`:typeof e.width=="string"||Zr.includes(e.width)?`${e.width} wide`:null)}}const hi=R({name:"SuiFormField",emits:["update:modelValue"],props:{disabled:Boolean,error:Boolean,inline:Boolean,label:String,modelValue:String,placeholder:String,required:Boolean,type:String,width:String||Number},setup(e,{emit:a}){const{widthClass:l}=iv(e),o=H(()=>ee(A(e.disabled,"disabled"),A(e.error,"error"),A(e.inline,"inline"),A(e.required,"required"),l.value,"field")),r=e.type||"text";return{computedClass:o,inputType:r,onInput:c=>a("update:modelValue",c.target.value)}},render(){var e,a;return this.label?t("div",{class:this.computedClass},[t("label",null,[this.label]),t("input",{type:this.inputType,placeholder:this.placeholder,value:this.modelValue,onInput:this.onInput},null)]):t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),eu=R({name:"SuiFormGroup",props:{widths:String},setup(e){return{computedClass:H(()=>ee(Ve(e.widths,"width"),"fields"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),tu=R({name:"SuiFormTextarea",props:{label:String,placeholder:String},render(){return this.label&&t("div",{class:"field"},[t("label",null,[this.label]),t("textarea",{placeholder:this.placeholder},null)]),t("div",{class:"field"},[t("textarea",{placeholder:this.placeholder},null)])}}),av={install(e){e.component(Ul.name,Ul),e.component(hi.name,hi),e.component(eu.name,eu),e.component(tu.name,tu)}},Sa=R({name:"SuiGrid",props:{celled:[Boolean,String],centered:Boolean,columns:[Number,String],compact:Boolean,container:Boolean,divided:[Boolean,String],doubling:Boolean,inverted:Boolean,padded:[Boolean,String],relaxed:[Boolean,String],reversed:String,stackable:Boolean,textAlign:String,verticalAlign:String},setup(e){return{computedClass:H(()=>ee("ui",e.container&&"container",A(e.centered,"centered"),A(e.compact,"compact"),A(e.doubling,"doubling"),A(e.inverted,"inverted"),A(e.stackable,"stackable"),Ve(e.reversed,"reversed"),Ve(e.verticalAlign,"aligned"),Me(e.celled,"celled"),Me(e.divided,"divided"),Me(e.padded,"padded"),Me(e.relaxed,"relaxed"),$a(e.textAlign),ai(e.columns,"column"),"grid"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),bt=R({name:"SuiGridColumn",props:{color:String,computer:Number,floated:String,largeScreen:Number,mobile:Number,only:String,tablet:Number,textAlign:String,width:Number,widescreen:Number},setup(e){return{computedClass:H(()=>ee(e.color,Ve(e.floated,"floated"),Ve(e.only,"only"),$a(e.textAlign),ai(e.width,"wide"),Da(e.mobile,"mobile"),Da(e.tablet,"tablet"),Da(e.computer,"computer"),Da(e.largeScreen,"large screen"),Da(e.widescreen,"widescreen"),"column"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Yl=R({name:"SuiGridRow",props:{centered:Boolean,color:String,columns:Number,only:String,stretched:Boolean,textAlign:String},setup(e){return{computedClass:H(()=>ee(e.color,A(e.centered,"centered"),A(e.stretched,"stretched"),Ve(e.only,"only"),ai(e.columns,"column"),$a(e.textAlign),"row"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),lv={install(e){e.component(Sa.name,Sa),e.component(bt.name,bt),e.component(Yl.name,Yl)}},Lo=R({name:"SuiMenu",props:{attached:[Boolean,String],borderless:Boolean,color:Boolean,compact:Boolean,fixed:Boolean,floated:[Boolean,String],fluid:Boolean,icon:[Boolean,String],inverted:Boolean,pagination:Boolean,pointing:Boolean,secondary:Boolean,size:String,stackable:Boolean,tabular:[Boolean,String],text:Boolean,vertical:Boolean,widths:Number},setup(e){return{computedClass:H(()=>ee("ui",e.color,e.size,A(e.borderless,"borderless"),A(e.compact,"compact"),A(e.fixed,"fixed"),A(e.fluid,"fluid"),A(e.inverted,"inverted"),A(e.pagination,"pagination"),A(e.pointing,"pointing"),A(e.secondary,"secondary"),A(e.stackable,"stackable"),A(e.text,"text"),A(e.vertical,"vertical"),Me(e.attached,"attached"),Me(e.floated,"floated"),Me(e.icon,"icon"),Me(e.tabular,"tabular"),ai(e.widths,"item"),"menu"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),iu=R({name:"SuiMenuHeader",props:{as:String,content:String},setup(e,{slots:a}){let l=e.as||"div";return()=>t(l,{class:"header"},{default:()=>{var o;return[e.content||((o=a.default)==null?void 0:o.call(a))]}})}}),Jl=R({name:"SuiMenuItem",props:{action:Boolean,active:Boolean,as:String,browse:Boolean,color:String,disabled:Boolean,fitted:[Boolean,String],header:Boolean,icon:Boolean,index:Number,link:Boolean,name:String,position:String,stackable:Boolean},setup(e,{slots:a}){let l=e.as||"a";e.header&&(l="div"),e.as==="router-link"&&(l=y(e.as));const o=H(()=>ee(e.color,e.position,A(e.action,"action"),A(e.active,"active"),A(e.browse,"browse"),A(e.disabled,"disabled"),A(e.header,"header"),A(e.link,"link"),Me(e.fitted,"fitted"),"item"));return()=>t(l,{class:o.value},{default:()=>{var r;return[e.name||((r=a.default)==null?void 0:r.call(a))]}})}}),au=R({name:"SuiMenuMenu",props:{position:String},setup(e){const{position:a}=e;return{computedClass:H(()=>ee(a,"menu"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),nv={install(e){e.component(Lo.name,Lo),e.component(iu.name,iu),e.component(Jl.name,Jl),e.component(au.name,au)}},lu=R({name:"SuiMessage",props:{attached:[Boolean,String],color:String,compact:Boolean,content:String,header:String,error:Boolean,floating:Boolean,hidden:Boolean,icon:Boolean,info:Boolean,negative:Boolean,positive:Boolean,size:String,success:Boolean,visible:Boolean,warning:Boolean},setup(e){return{computedClass:H(()=>ee("ui",e.color,e.size,A(e.compact,"compact"),A(e.error,"error"),A(e.floating,"floating"),A(e.hidden,"hidden"),A(e.icon,"icon"),A(e.info,"info"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.success,"success"),A(e.visible,"visible"),A(e.warning,"warning"),Me(e.attached,"attached"),"message"))}},render(){var e,a;return t("div",{class:this.computedClass},[(this.header||this.content)&&t(Io,null,{default:()=>[t(Do,null,{default:()=>[this.header]}),t("p",null,[this.content])]}),(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Io=R({name:"SuiMessageContent",render(){var e,a;return J("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Do=R({name:"SuiMessageHeader",render(){var e,a;return J("div",{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),nu=R({name:"SuiMessageItem",render(){var e,a;return J("li",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ou=R({name:"SuiMessageList",render(){var e,a;return J("ul",{class:"list"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ov={install(e){e.component(lu.name,lu),e.component(Io.name,Io),e.component(Do.name,Do),e.component(nu.name,nu),e.component(ou.name,ou)}},su=R({name:"SuiTable",props:{attached:[Boolean,String],basic:[Boolean,String],celled:Boolean,collapsing:Boolean,color:String,columns:Number,compact:[Boolean,String],definition:Boolean,fixed:Boolean,inverted:Boolean,padded:[Boolean,String],selectable:Boolean,singleLine:Boolean,size:String,stackable:Boolean,striped:Boolean,structured:Boolean,unstackable:Boolean},setup(e){return{computedClass:H(()=>ee("ui",e.color,e.size,A(e.celled,"celled"),A(e.collapsing,"collapsing"),A(e.definition,"definition"),A(e.fixed,"fixed"),A(e.inverted,"inverted"),A(e.selectable,"selectable"),A(e.singleLine,"single line"),A(e.stackable,"stackable"),A(e.striped,"striped"),A(e.structured,"structured"),A(e.unstackable,"unstackable"),Me(e.attached,"attached"),Me(e.basic,"basic"),Me(e.compact,"compact"),Me(e.padded,"padded"),ai(e.columns,"column"),"table"))}},render(){var e,a;return t("table",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),ru=R({name:"SuiTableBody",render(){var e,a;return J("tbody",{},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),uu=R({name:"SuiTableCell",props:{active:Boolean,collapsing:Boolean,color:String,disabled:Boolean,error:Boolean,marked:String,negative:Boolean,positive:Boolean,selectable:Boolean,singleLine:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:H(()=>ee(e.color,A(e.active,"active"),A(e.collapsing,"collapsing"),A(e.disabled,"disabled"),A(e.error,"error"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.selectable,"selectable"),A(e.singleLine,"single line"),A(e.warning,"warning"),Ve(e.verticalAlign,"aligned"),Ve(e.marked,"marked"),$a(e.textAlign)))}},render(){var e,a,l,o;return this.computedClass?t("td",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("td",null,[(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),cu=R({name:"SuiTableFooter",props:{fullWidth:Boolean},setup(e){const{fullWidth:a}=e;return{computedClass:H(()=>ee(A(a,"full-width")))}},render(){var e,a,l,o;return this.computedClass?J("tfoot",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):J("tfoot",{},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),du=R({name:"SuiTableHeader",props:{fullWidth:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.fullWidth,"full-width")))}},render(){var e,a,l,o;return this.computedClass?J("thead",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):J("thead",{},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),mu=R({name:"SuiTableHeaderCell",props:{singleLine:Boolean,textAlign:String,width:Number},setup(e){return{computedClass:H(()=>ee(A(e.singleLine,"single line"),Ve(e.textAlign,"aligned"),ai(e.width,"wide")))}},render(){var e,a,l,o;return this.computedClass?t("th",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("th",null,[(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),pu=R({name:"SuiTableRow",props:{active:Boolean,color:String,disabled:Boolean,error:Boolean,negative:Boolean,positive:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:H(()=>ee(e.color,A(e.active,"active"),A(e.disabled,"disabled"),A(e.error,"error"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.warning,"warning"),Ve(e.textAlign,"aligned"),Ve(e.verticalAlign,"aligned")))}},render(){var e,a,l,o;return this.computedClass?t("tr",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("tr",null,[(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),sv={install(e){e.component(su.name,su),e.component(ru.name,ru),e.component(uu.name,uu),e.component(cu.name,cu),e.component(du.name,du),e.component(mu.name,mu),e.component(pu.name,pu)}},rv=Object.freeze(Object.defineProperty({__proto__:null,Breadcrumb:tv,Form:av,Grid:lv,Menu:nv,Message:ov,Table:sv},Symbol.toStringTag,{value:"Module"})),fu=R({name:"SuiAdvertisement",props:{centered:Boolean,test:String,unit:String},setup(e){return{computedClass:H(()=>ee("ui",e.unit,A(e.centered,"centered"),A(!!e.test,"test"),"ad"))}},render(){var e,a,l,o;return this.$props.test?J("div",{class:this.computedClass,"data-text":this.$props.test},(a=(e=this.$slots).default)==null?void 0:a.call(e)):J("div",{class:this.computedClass},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),uv={install(e){e.component(fu.name,fu)}},gu=R({name:"SuiCard",props:{centered:Boolean,color:String,fluid:Boolean,horizontal:Boolean,href:String,link:Boolean,raised:Boolean},setup(e){return{computedClass:H(()=>ee("ui",e.color,A(e.centered,"centered"),A(e.fluid,"fluid"),A(e.horizontal,"horizontal"),A(e.link,"link"),A(e.raised,"raised"),"card"))}},render(){var e,a,l,o;return this.$props.href||this.$props.link?J("a",{class:this.computedClass,href:this.$slots.href},(a=(e=this.$slots).default)==null?void 0:a.call(e)):J("div",{class:this.computedClass},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),hu=R({name:"SuiCardContent",props:{extra:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.extra,"extra"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),_u=R({name:"SuiCardDescription",props:{textAlign:String},setup(e){return{computedClass:H(()=>ee(Ve(e.textAlign,"aligned"),"description"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),bu=R({name:"SuiCardGroup",props:{centered:Boolean,doubling:Boolean,inverted:Boolean,itemsPerRow:Number,stackable:Boolean},setup(e){return{computedClass:H(()=>ee("ui",A(e.centered,"centered"),A(e.doubling,"doubling"),A(e.inverted,"inverted"),A(e.stackable,"stackable"),ai(e.itemsPerRow,""),"cards"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),vu=R({name:"SuiCardHeader",props:{textAlign:String},setup(e){return{computedClass:H(()=>ee(Ve(e.textAlign,"aligned"),"header"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),yu=R({name:"SuiCardMeta",render(){var e,a;return J("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),cv={install(e){e.component(gu.name,gu),e.component(hu.name,hu),e.component(_u.name,_u),e.component(bu.name,bu),e.component(vu.name,vu),e.component(yu.name,yu)}},Su=R({name:"SuiComment",render(){var e,a;return J("div",{class:"comment"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),wu=R({name:"SuiCommentAction",props:{active:Boolean},setup(e){const{active:a}=e;return{computedClass:H(()=>ee(A(a,"active")))}},render(){var e,a,l,o;return this.computedClass?J("a",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):J("a",{},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),Cu=R({name:"SuiCommentActions",render(){var e,a;return J("div",{class:"actions"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Au=R({name:"SuiCommentAuthor",props:{as:String},render(){var e,a;let l=this.$props.as||"div";return J(l,{class:"author"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ku=R({name:"SuiCommentAvatar",props:{as:String,src:String},render(){let e=this.$props.as||"div";return J(e,{class:"avatar"},J("img",{src:this.$props.src}))}}),xu=R({name:"SuiCommentContent",render(){var e,a;return J("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),$u=R({name:"SuiCommentGroup",props:{collapsed:Boolean,inverted:Boolean,minimal:Boolean,size:String,threaded:Boolean},setup(e){return{computedClass:H(()=>ee("ui",e.size,A(e.collapsed,"collapsed"),A(e.inverted,"inverted"),A(e.minimal,"minimal"),A(e.threaded,"threaded"),"comments"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Bu=R({name:"SuiCommentMetadata",render(){var e,a;return J("div",{class:"metadata"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Tu=R({name:"SuiCommentText",render(){var e,a;return J("div",{class:"text"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),dv={install(e){e.component(Su.name,Su),e.component(wu.name,wu),e.component(Cu.name,Cu),e.component(Au.name,Au),e.component(ku.name,ku),e.component(xu.name,xu),e.component($u.name,$u),e.component(Bu.name,Bu),e.component(Tu.name,Tu)}},Lu=R({name:"SuiFeed",props:{inverted:Boolean,size:String},setup(e){return{computedClass:H(()=>ee("ui",e.size,A(e.inverted,"inverted"),"feed"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Iu=R({name:"SuiFeedContent",render(){var e,a;return J("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Du=R({name:"SuiFeedDate",render(){var e,a;return J("div",{class:"date"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Eu=R({name:"SuiFeedEvent",render(){var e,a;return J("div",{class:"event"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ru=R({name:"SuiFeedExtra",props:{images:Boolean,text:Boolean},setup(e){const{images:a,text:l}=e;return{computedClass:H(()=>ee(A(a,"images"),A(l,"text"),"extra"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),zu=R({name:"SuiFeedLabel",render(){var e,a;return J("div",{class:"label"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Pu=R({name:"SuiFeedLike",render(){var e,a;return J("a",{class:"like"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Mu=R({name:"SuiFeedMeta",render(){var e,a;return J("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Vu=R({name:"SuiFeedSummary",render(){var e,a;return J("div",{class:"summary"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Fu=R({name:"SuiFeedUser",render(){var e,a;return J("a",{class:"user"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),mv={install(e){e.component(Lu.name,Lu),e.component(Iu.name,Iu),e.component(Du.name,Du),e.component(Eu.name,Eu),e.component(Ru.name,Ru),e.component(zu.name,zu),e.component(Pu.name,Pu),e.component(Mu.name,Mu),e.component(Vu.name,Vu),e.component(Fu.name,Fu)}},Hu=R({name:"SuiItem",render(){var e,a;return J("div",{class:"item"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Nu=R({name:"SuiItemContent",props:{verticalAlign:String},setup(e){const{verticalAlign:a}=e;return{computedClass:H(()=>ee(Ve(a,"aligned"),"content"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ou=R({name:"SuiItemDescription",render(){var e,a;return J("div",{class:"description"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ju=R({name:"SuiItemExtra",render(){var e,a;return J("div",{class:"extra"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Gu=R({name:"SuiItemGroup",props:{divided:Boolean,inverted:Boolean,link:Boolean,relaxed:[Boolean,String],unstackable:Boolean},setup(e){return{computedClass:H(()=>ee("ui",A(e.divided,"divided"),A(e.inverted,"inverted"),A(e.link,"link"),A(e.unstackable,"unstackable"),Me(e.relaxed,"relaxed"),"items"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),qu=R({name:"SuiItemHeader",props:{as:String},render(){var e,a;let l=this.$props.as||"div";return J(l,{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Uu=R({name:"SuiItemImage",props:{size:String},setup(e){return{computedClass:H(()=>ee(e.size,"image"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Yu=R({name:"SuiItemMeta",render(){var e,a;return J("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),pv={install(e){e.component(Hu.name,Hu),e.component(Nu.name,Nu),e.component(Ou.name,Ou),e.component(ju.name,ju),e.component(Gu.name,Gu),e.component(qu.name,qu),e.component(Uu.name,Uu),e.component(Yu.name,Yu)}},Wl=R({name:"SuiStatisticLabel",props:{content:String},render(){var e,a;return this.$props.content?J("div",{class:"label"},this.$props.content):J("div",{class:"label"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Kl=R({name:"SuiStatisticValue",props:{content:String,text:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.text,"text"),"value"))}},render(){var e,a;return this.$props.content?J("div",{class:this.computedClass},this.$props.content):J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ju=R({name:"SuiStatistic",components:{StatisticLabel:Wl,StatisticValue:Kl},props:{color:String,floated:[Boolean,String],horizontal:Boolean,inverted:Boolean,label:String,size:String,text:Boolean,value:String},setup(e){const a=Fe("ui",!0);return{computedClass:H(()=>ee(a&&"ui",e.color,e.size,A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),A(e.text,"text"),Me(e.floated,"floated"),"statistic"))}},render(){var e,a,l,o,r,c;let m=[];return this.$props.value&&m.push(J(Kl,{content:this.$props.value},(a=(e=this.$slots).default)==null?void 0:a.call(e))),this.$props.label&&m.push(J(Wl,{content:this.$props.label},(o=(l=this.$slots).default)==null?void 0:o.call(l))),J("div",{class:this.computedClass},m.length>0?m:(c=(r=this.$slots).default)==null?void 0:c.call(r))}}),Wu=R({name:"SuiStatisticGroup",props:{color:String,horizontal:Boolean,inverted:Boolean,size:String,widths:Number},setup(e){return ut("ui",!1),{computedClass:H(()=>ee("ui",e.color,e.size,A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),ai(e.widths,""),"statistics"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),fv={install(e){e.component(Ju.name,Ju),e.component(Wu.name,Wu),e.component(Wl.name,Wl),e.component(Kl.name,Kl)}},gv=Object.freeze(Object.defineProperty({__proto__:null,Advertisement:uv,Card:cv,Comment:dv,Feed:mv,Item:pv,Statistic:fv},Symbol.toStringTag,{value:"Module"})),Ku=R({name:"SuiAccordion",props:{fluid:Boolean,inverted:Boolean,multiple:Boolean,styled:Boolean},setup(e){const a=e.multiple?G([]):G(-1),l=r=>e.multiple?a.value.includes(r):a.value===r,o=r=>{const c=l(r);e.multiple?c?a.value=a.value.filter(m=>m!==r):a.value.push(r):a.value=c?-1:r};return ut("isTabActive",l),ut("updateActiveIndex",o),{computedClass:H(()=>ee("ui",A(e.fluid,"fluid"),A(e.inverted,"inverted"),A(e.styled,"styled"),"accordion"))}},render(){var e,a;const l=o=>(o.forEach((r,c)=>{r.props.index=c}),o);return t("div",{class:this.computedClass},[l((a=(e=this.$slots).default)==null?void 0:a.call(e))])}}),Xu=R({name:"SuiAccordionAccordion",render(){var e,a;return J("div",{class:"accordion"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Eo=R({name:"SuiAccordionContent",props:{active:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.active,"active"),"content"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Qu=R({name:"SuiAccordionTab",props:{index:Number,title:String},setup(e){const a=Fe("isTabActive"),l=Fe("updateActiveIndex"),o=H(()=>ee(A(a(e.index),"active"),"title"));return{isTabActive:a,updateActiveIndex:l,titleClass:o}},render(){return t(Ce,null,[t("div",{class:this.titleClass,onClick:()=>this.updateActiveIndex(this.index)},[t(W,{name:"dropdown"},null),this.title]),t(Eo,{active:this.isTabActive(this.index)},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})])}}),Zu=R({name:"SuiAccordionTitle",props:{active:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.active,"active"),"title"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),hv={install(e){e.component(Ku.name,Ku),e.component(Xu.name,Xu),e.component(Eo.name,Eo),e.component(Qu.name,Qu),e.component(Zu.name,Zu)}},_v=(e,a,l)=>{e.clickOutside=o=>{e===o.target||e.contains(o.target)||a.value(o,e)},document.body.addEventListener("click",e.clickOutside)},bv=(e,a,l)=>{document.body.removeEventListener("click",e.clickOutside)},$s={mounted:_v,unmounted:bv};function vv(e,a={}){const l=G(e.value?"open":"closed"),o=()=>l.value=e.value?"open":"closed";pt(e,f=>{l.value=f?"opening":"closing"});const r=f=>{f.addEventListener("animationend",o,!0)},c=f=>{f&&f.removeEventListener("animationend",o)},m=H((f="scale")=>{switch(l.value){case"opening":return`animating ${f} in`;case"open":return"visible active";case"closing":return`visible active animating ${f} out`;case"closed":return"hidden"}});return{setupAnimation:r,removeAnimation:c,computeAnimationClass:m}}const yv=R({name:"SuiCalendarDay",emits:["select-day"],props:{active:Boolean,date:null,disabled:Boolean,onSelectDay:Function},setup(e,{emit:a}){const l=G(!1),o=()=>{e.disabled||(l.value=!0)},r=()=>l.value=!1,c=()=>{e.disabled||a("select-day",e.date)},m=()=>{let s=new Date;return s.getFullYear()===e.date.year&&s.getMonth()===e.date.month&&s.getDate()===e.date.day},f=H(()=>ee("link",A(l.value,"focus"),A(e.active&&!e.disabled,"active"),A(e.disabled,"adjacent disabled"),A(m(),"today")));return{onMouseEnter:o,onMouseLeave:r,onClick:c,computedClass:f}},render(){var e,a;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:Tt(this.onClick,["stop"])},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Sv=R({name:"SuiCalendarDateTable",setup(){const{calendarDays:e,updateSelectMode:a,set:l,add:o,subtract:r,selectedDate:c,setSelectedDate:m,selectType:f,updateVisible:s,formatDate:u}=Fe(Ai);return{calendarDays:e,isEqualDay:g=>{if(!c.value)return!1;const d=c.value;return d.getFullYear()===g.year&&d.getMonth()===g.month&&d.getDate()===g.day},onSelectDay:g=>{if(l(g.year,"years"),l(g.month,"months"),l(g.day,"days"),f.value==="date"){let d=new Date(g.year,g.month,g.day);m(d),s(!1);return}a("hour")},updateSelectMode:a,formatDate:u,add:o,subtract:r}},render(){const e=()=>this.calendarDays.map((a,l)=>t("tr",null,[a.map(o=>t(yv,{active:this.isEqualDay(o),date:o,disabled:!o.currentMonth,onSelectDay:this.onSelectDay},{default:()=>[o.day]}))]));return t("table",{class:"ui celled center aligned unstackable table day seven column"},[t("thead",null,[t("tr",null,[t("th",{colspan:7},[t("span",{class:"link",onClick:Tt(()=>this.updateSelectMode("month"),["stop"])},[this.formatDate("date")]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"months")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"months")},[t("i",{class:"chevron right icon"},null)])])]),t("tr",null,[t("th",null,[n("S")]),t("th",null,[n("M")]),t("th",null,[n("T")]),t("th",null,[n("W")]),t("th",null,[n("T")]),t("th",null,[n("F")]),t("th",null,[n("S")])])]),t("tbody",null,[e()])])}}),Se=R({name:"SuiCalendarTableCell",emits:["click-cell"],props:{active:Boolean,today:Boolean,value:null,onClickCell:Function},setup(e){const a=G(!1),l=()=>a.value=!0,o=()=>a.value=!1,r=H(()=>ee("link",A(e.active,"active"),A(e.today,"today"),A(a.value,"focus")));return{onMouseEnter:l,onMouseLeave:o,computedClass:r}},render(){var e,a;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:Tt(()=>this.$emit("click-cell",this.value),["stop"])},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),wv=R({name:"SuiCalendarMonthTable",setup(){const{state:e,set:a,add:l,subtract:o,selectedDate:r,updateSelectMode:c}=Fe(Ai);return{state:e,add:l,subtract:o,updateSelectMode:c,isActive:m=>r.value?e.year===r.value.getFullYear()&&e.month===m:!1,isThisMonth:m=>{let f=new Date;return m===f.getMonth()&&e.year===f.getFullYear()},onClickCell:m=>{a(m,"months"),c("day")}}},render(){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=()=>Array(4).fill(0).map((l,o)=>t("tr",null,[t(Se,{value:o*3,active:this.isActive(o*3),today:this.isThisMonth(o*3),onClickCell:this.onClickCell},{default:()=>[e[o*3]]}),t(Se,{value:o*3+1,active:this.isActive(o*3+1),today:this.isThisMonth(o*3+1),onClickCell:this.onClickCell},{default:()=>[e[o*3+1]]}),t(Se,{value:o*3+2,active:this.isActive(o*3+2),today:this.isThisMonth(o*3+2),onClickCell:this.onClickCell},{default:()=>[e[o*3+2]]})]));return t("table",{class:"ui celled center aligned unstackable table month three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:Tt(()=>this.updateSelectMode("year"),["stop"])},[this.state.year]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"years")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"years")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[a()])])}}),Cv=R({name:"SuiCalendarYearTable",setup(e){const{state:a,set:l,add:o,subtract:r,selectedDate:c,updateSelectMode:m}=Fe(Ai),f=()=>o(10,"years"),s=()=>r(10,"years"),u=H(()=>Math.round(a.year/10)*10+1);return{updateSelectMode:m,moveNextTwelveYears:f,movePrevTwelveYears:s,headerStartYear:u,isActive:g=>c.value?g===c.value.getFullYear():!1,isThisYear:g=>g===new Date().getFullYear(),onClickCell:g=>{l(g,"years"),m("day")}}},render(){return t("table",{class:"ui celled center aligned unstackable table year three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:Tt(()=>this.updateSelectMode("day"),["stop"])},[this.headerStartYear,n(" - "),this.headerStartYear+11]),t("span",{class:"prev link",onClick:this.movePrevTwelveYears},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.moveNextTwelveYears},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(Se,{value:this.headerStartYear,active:this.isActive(this.headerStartYear),today:this.isThisYear(this.headerStartYear),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear]}),t(Se,{value:this.headerStartYear+1,active:this.isActive(this.headerStartYear+1),today:this.isThisYear(this.headerStartYear+1),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+1]}),t(Se,{value:this.headerStartYear+2,active:this.isActive(this.headerStartYear+2),today:this.isThisYear(this.headerStartYear+2),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+2]})]),t("tr",null,[t(Se,{value:this.headerStartYear+3,active:this.isActive(this.headerStartYear+3),today:this.isThisYear(this.headerStartYear+3),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+3]}),t(Se,{value:this.headerStartYear+4,active:this.isActive(this.headerStartYear+4),today:this.isThisYear(this.headerStartYear+4),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+4]}),t(Se,{value:this.headerStartYear+5,active:this.isActive(this.headerStartYear+5),today:this.isThisYear(this.headerStartYear+5),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+5]})]),t("tr",null,[t(Se,{value:this.headerStartYear+6,active:this.isActive(this.headerStartYear+6),today:this.isThisYear(this.headerStartYear+6),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+6]}),t(Se,{value:this.headerStartYear+7,active:this.isActive(this.headerStartYear+7),today:this.isThisYear(this.headerStartYear+7),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+7]}),t(Se,{value:this.headerStartYear+8,active:this.isActive(this.headerStartYear+8),today:this.isThisYear(this.headerStartYear+8),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+8]})]),t("tr",null,[t(Se,{value:this.headerStartYear+9,active:this.isActive(this.headerStartYear+9),today:this.isThisYear(this.headerStartYear+9),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+9]}),t(Se,{value:this.headerStartYear+10,active:this.isActive(this.headerStartYear+10),today:this.isThisYear(this.headerStartYear+10),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+10]}),t(Se,{value:this.headerStartYear+11,active:this.isActive(this.headerStartYear+11),today:this.isThisYear(this.headerStartYear+11),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+11]})])])])}}),Av=R({name:"SuiCalendarHourTable",setup(){const{updateSelectMode:e,state:a,set:l,add:o,subtract:r,formatDate:c,selectedDate:m}=Fe(Ai);return{updateSelectMode:e,formatDate:c,onPrevClick:()=>r(1,"days"),onNextClick:()=>o(1,"days"),onClickCell:f=>{l(f,"hours"),e("minute")},isActive:f=>{if(!m.value)return!1;let s=m.value.getFullYear(),u=m.value.getMonth(),g=m.value.getDate(),d=m.value.getHours();return a.year===s&&a.month===u&&a.day===g&&f===d}}},render(){return t("table",{class:"ui celled center aligned unstackable table hour four column"},[t("thead",null,[t("tr",null,[t("th",{colspan:4},[t("span",{class:"link",onClick:Tt(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:this.onPrevClick},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.onNextClick},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(Se,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},{default:()=>[n("12:00 AM")]}),t(Se,{active:this.isActive(1),value:1,onClickCell:this.onClickCell},{default:()=>[n("1:00 AM")]}),t(Se,{active:this.isActive(2),value:2,onClickCell:this.onClickCell},{default:()=>[n("2:00 AM")]}),t(Se,{active:this.isActive(3),value:3,onClickCell:this.onClickCell},{default:()=>[n("3:00 AM")]})]),t("tr",null,[t(Se,{active:this.isActive(4),value:4,onClickCell:this.onClickCell},{default:()=>[n("4:00 AM")]}),t(Se,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},{default:()=>[n("5:00 AM")]}),t(Se,{active:this.isActive(6),value:6,onClickCell:this.onClickCell},{default:()=>[n("6:00 AM")]}),t(Se,{active:this.isActive(7),value:7,onClickCell:this.onClickCell},{default:()=>[n("7:00 AM")]})]),t("tr",null,[t(Se,{active:this.isActive(8),value:8,onClickCell:this.onClickCell},{default:()=>[n("8:00 AM")]}),t(Se,{active:this.isActive(9),value:9,onClickCell:this.onClickCell},{default:()=>[n("9:00 AM")]}),t(Se,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},{default:()=>[n("10:00 AM")]}),t(Se,{active:this.isActive(11),value:11,onClickCell:this.onClickCell},{default:()=>[n("11:00 AM")]})]),t("tr",null,[t(Se,{active:this.isActive(12),value:12,onClickCell:this.onClickCell},{default:()=>[n("12:00 PM")]}),t(Se,{active:this.isActive(13),value:13,onClickCell:this.onClickCell},{default:()=>[n("1:00 PM")]}),t(Se,{active:this.isActive(14),value:14,onClickCell:this.onClickCell},{default:()=>[n("2:00 PM")]}),t(Se,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},{default:()=>[n("3:00 PM")]})]),t("tr",null,[t(Se,{active:this.isActive(16),value:16,onClickCell:this.onClickCell},{default:()=>[n("4:00 PM")]}),t(Se,{active:this.isActive(17),value:17,onClickCell:this.onClickCell},{default:()=>[n("5:00 PM")]}),t(Se,{active:this.isActive(18),value:18,onClickCell:this.onClickCell},{default:()=>[n("6:00 PM")]}),t(Se,{active:this.isActive(19),value:19,onClickCell:this.onClickCell},{default:()=>[n("7:00 PM")]})]),t("tr",null,[t(Se,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},{default:()=>[n("8:00 PM")]}),t(Se,{active:this.isActive(21),value:21,onClickCell:this.onClickCell},{default:()=>[n("9:00 PM")]}),t(Se,{active:this.isActive(22),value:22,onClickCell:this.onClickCell},{default:()=>[n("10:00 PM")]}),t(Se,{active:this.isActive(23),value:23,onClickCell:this.onClickCell},{default:()=>[n("11:00 PM")]})])])])}});function Dt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!zt(e)}const kv=R({name:"SuiCalendarMinuteTable",setup(){const{state:e,set:a,add:l,subtract:o,formatDate:r,updateSelectMode:c,updateVisible:m,selectedDate:f}=Fe(Ai);return{add:l,subtract:o,formatDate:r,updateSelectMode:c,getTimeLabel:s=>{let u=e.hour%12,g=e.hour>12?"PM":"AM",d=s.toString().padStart(2,"0");return e.hour===0?`12:${d} AM`:e.hour===12?`12:${d} PM`:`${u}:${d} ${g}`},onClickCell:s=>{a(s,"minutes"),f.value=new Date(e.year,e.month,e.day,e.hour,e.minute),m(!1)},isActive:s=>{if(!f.value)return!1;let u=f.value.getFullYear(),g=f.value.getMonth(),d=f.value.getDate(),h=f.value.getHours(),v=f.value.getMinutes();return e.year===u&&e.month===g&&e.day===d&&e.hour===h&&s===v}}},render(){let e,a,l,o,r,c,m,f,s,u,g,d;return t("table",{class:"ui celled center aligned unstackable table minute three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:Tt(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"days")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"days")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(Se,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},Dt(e=this.getTimeLabel(0))?e:{default:()=>[e]}),t(Se,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},Dt(a=this.getTimeLabel(5))?a:{default:()=>[a]}),t(Se,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},Dt(l=this.getTimeLabel(10))?l:{default:()=>[l]})]),t("tr",null,[t(Se,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},Dt(o=this.getTimeLabel(15))?o:{default:()=>[o]}),t(Se,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},Dt(r=this.getTimeLabel(20))?r:{default:()=>[r]}),t(Se,{active:this.isActive(25),value:25,onClickCell:this.onClickCell},Dt(c=this.getTimeLabel(25))?c:{default:()=>[c]})]),t("tr",null,[t(Se,{active:this.isActive(30),value:30,onClickCell:this.onClickCell},Dt(m=this.getTimeLabel(30))?m:{default:()=>[m]}),t(Se,{active:this.isActive(35),value:35,onClickCell:this.onClickCell},Dt(f=this.getTimeLabel(35))?f:{default:()=>[f]}),t(Se,{active:this.isActive(40),value:40,onClickCell:this.onClickCell},Dt(s=this.getTimeLabel(40))?s:{default:()=>[s]})]),t("tr",null,[t(Se,{active:this.isActive(45),value:45,onClickCell:this.onClickCell},Dt(u=this.getTimeLabel(45))?u:{default:()=>[u]}),t(Se,{active:this.isActive(50),value:50,onClickCell:this.onClickCell},Dt(g=this.getTimeLabel(50))?g:{default:()=>[g]}),t(Se,{active:this.isActive(55),value:55,onClickCell:this.onClickCell},Dt(d=this.getTimeLabel(55))?d:{default:()=>[d]})])])])}}),xv=R({name:"SuiCalendarBody",setup(){const e=G(null),{visible:a,selectMode:l}=Fe(Ai),{setupAnimation:o,removeAnimation:r,computeAnimationClass:c}=vv(a);Ci(()=>o(e.value)),Wi(()=>r(e.value));const m=H(()=>ee("ui popup calendar","bottom left","transition",c.value));return{rootRef:e,computedClass:m,selectMode:l}},render(){const e=()=>{switch(this.selectMode){case"day":return t(Sv,null,null);case"month":return t(wv,null,null);case"year":return t(Cv,null,null);case"hour":return t(Av,null,null);case"minute":return t(kv,null,null)}};return t("div",{ref:a=>this.rootRef=a,class:this.computedClass,style:"inset: 38px auto auto 0px;"},[e()])}}),$v=R({name:"SuiCalendarInput",props:{placeholder:String,value:null},setup(e){const{visible:a,updateVisible:l,updateSelectMode:o,set:r,state:c,formatCalendarDate:m}=Fe(Ai);return{visible:a,formatCalendarDate:m,onClick:()=>{a.value||(o("day"),e.value&&(r(e.value.getFullYear(),"years"),r(e.value.getMonth(),"months"))),l(!a.value)}}},render(){return t("input",{type:"text",placeholder:this.placeholder,value:this.formatCalendarDate(this.value),onClick:()=>this.onClick()},null)}}),Bv=(e,a)=>{let l=new Date;l.setDate(1),l.setMonth(a),l.setFullYear(e);let o=l.getDay();return o>=7?o-7:o},Tv=(e,a)=>{let l,o;return a===0?(l=11,o=e-1):(l=a-1,o=e),32-new Date(o,l,32).getDate()},jn=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e];function Lv(){const e=G(!1),a=(C=!1)=>e.value=C,l=new Date;function o(C){if(!C)return;let k=C.getFullYear(),T=jn(C.getMonth()),b=C.getDate(),w=C.getHours(),x=C.getMinutes(),B=w>11?"PM":"AM";w=w%12,w===0&&(w=12);let I=x.toString().padStart(2,"0");return`${T} ${b}, ${k} ${w}:${I} ${B}`}const r=G("default"),c=G("day");function m(C){c.value=C}const f=G(null),s=C=>{f.value=C},u=ti({year:l.getFullYear(),month:l.getMonth(),day:l.getDate(),hour:l.getHours(),minute:l.getMinutes()}),g=(C,k)=>{switch(k){case"years":u.year=C;break;case"months":u.month=C;break;case"days":u.day=C;break;case"hours":u.hour=C;break;case"minutes":u.minute=C}},d=(C,k)=>{let T=new Date(u.year,u.month,u.day,u.hour);switch(k){case"years":T.setFullYear(T.getFullYear()+C);break;case"months":T.setMonth(T.getMonth()+C);break;case"days":T.setDate(T.getDate()+C);break;case"hours":T.setHours(T.getHours()+C);break}u.year=T.getFullYear(),u.month=T.getMonth(),u.day=T.getDate(),u.hour=T.getHours()},h=(C,k)=>{let T=new Date(u.year,u.month,u.day,u.hour);switch(k){case"years":T.setFullYear(T.getFullYear()-C);break;case"months":T.setMonth(T.getMonth()-C);break;case"days":T.setDate(T.getDate()-C);break;case"hours":T.setHours(T.getHours()-C);break}u.year=T.getFullYear(),u.month=T.getMonth(),u.day=T.getDate(),u.hour=T.getHours()},v=(C="default")=>C==="date"?`${jn(u.month)} ${u.year}`:`${jn(u.month)} ${u.day}, ${u.year}`,_=H(()=>{let C=u.month,k=u.year;C>11&&(C=C%11-1,k+=1);let T=[],b=Bv(k,C),w=32-new Date(k,C,32).getDate(),x=Tv(k,C),B=1;for(let I=0;I<6;I++){let V=[];if(I===0){for(let z=x-b+1;z<=x;z++){let j=C===0?11:C-1,X=C===0?k-1:k;V.push({day:z,month:j,year:X,currentMonth:!1})}let F=7-V.length;for(let z=0;z<F;z++)V.push({day:B,month:C,year:k,currentMonth:!0}),B++}else for(let F=0;F<7;F++){if(B>w){let z=C===11?0:C+1,j=C===11?k+1:k;V.push({day:B-w,month:z,year:j,currentMonth:!1})}else V.push({day:B,month:C,year:k,currentMonth:!0});B++}T.push(V)}return T});return{visible:e,updateVisible:a,calendarDays:_,formatCalendarDate:o,selectMode:c,updateSelectMode:m,selectType:r,selectedDate:f,setSelectedDate:s,state:u,set:g,add:d,subtract:h,formatDate:v}}const Ai=Symbol("useCalendar"),ec=R({name:"SuiCalendar",directives:{clickoutside:$s},emits:["update:modelValue"],props:{modelValue:null,placeholder:String},setup(e,{emit:a}){const l=Lv();ut(Ai,l);const{updateVisible:o,selectedDate:r}=l;return pt(r,c=>{a("update:modelValue",c)}),{updateVisible:o}},render(){return bi(t("div",{class:"ui calendar"},[t("div",{class:"ui input left icon"},[t(xv,null,null),t("i",{class:"calendar icon"},null),t($v,{placeholder:this.placeholder,value:this.modelValue},null)])]),[[gn("clickoutside"),()=>this.updateVisible(!1)]])}}),Iv={install:e=>{e.component(ec.name,ec)}},tc=R({name:"SuiCheckbox",emits:["update:modelValue","change","click"],props:{disabled:Boolean,indeterminate:Boolean,label:String,modelValue:null,radio:Boolean,readOnly:Boolean,slider:Boolean,toggle:Boolean,value:null},setup(e,{emit:a}){const l=H(()=>ee("ui",!e.label&&"fitted",A(e.disabled,"disabled"),A(e.indeterminate,"indeterminate"),A(e.radio,"radio"),A(e.readOnly,"read-only"),A(e.slider,"slider"),A(e.toggle,"toggle"),"checkbox")),o=H(()=>Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue);return{computedClass:l,checked:o,onClick:r=>{if(e.disabled||e.readOnly)return;let c;e.value?o.value?c=e.modelValue.filter(m=>e.value!==m):c=e.modelValue?[...e.modelValue,e.value]:[e.value]:c=!e.modelValue,a("change",r),a("click",r),a("update:modelValue",c)}}},render(){return t("div",{class:this.computedClass,onClick:this.onClick},[t("input",{type:this.radio?"radio":"checkbox",class:"hidden",checked:this.checked,readonly:!0},null),t("label",null,[this.label])])}}),Dv={install(e){e.component(tc.name,tc)}},Vt=R({name:"SuiDimmer",props:{active:Boolean,inverted:Boolean,page:Boolean,simple:Boolean,verticalAlign:String},setup(e){return{computedClass:H(()=>ee("ui",A(e.active,"active"),A(e.inverted,"inverted"),A(e.page,"page"),A(e.simple,"simple"),Ve(e.verticalAlign,"aligned"),"dimmer"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ic=R({name:"SuiDimmerDimmable",components:{Segment:Le},props:{blurring:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.blurring,"blurring"),"dimmable"))}},render(){var e,a;return J(Le,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ev={install(e){e.component(Vt.name,Vt),e.component(ic.name,ic)}},Rv=(e,a)=>e.map(l=>l[a]),zv=R({name:"SuiDropdownText",emits:["remove"],props:{clearable:Boolean,filtered:Boolean,icon:{type:String,default:"dropdown"},item:[Object,String],placeholder:String,text:String,onRemove:Function},setup(e){return{computedClass:H(()=>ee(A(e.filtered,"filtered"),A(!e.text&&!e.item||Array.isArray(e.item)&&e.item.length===0,"default"),"text"))}},render(){var e,a;let l;if(this.item&&!Array.isArray(this.item))if(typeof this.item=="object"){const{flag:c,text:m}=this.item;l=t(Ce,null,[c&&t("i",{class:`${c} flag`},null),m])}else l=this.item;else l=this.text||this.placeholder;const o=typeof this.item=="object"?(e=this.item)==null?void 0:e.image:null,r=typeof this.item=="object"?(a=this.item)==null?void 0:a.label:null;return t(Ce,null,[t("div",{class:this.computedClass},[o&&t(ce,o,null),r&&t(N,r,null),l]),t("i",{class:`${this.icon} icon`},null),this.$props.clearable&&t("i",{class:"remove icon",onClick:Tt(()=>this.$emit("remove"),["stop"])},null)])}}),Pv=e=>{const a=ti({visible:!1,animating:!1,direction:"down",multiple:e.multiple});return pt(()=>a.visible,()=>{a.animating=!0,setTimeout(()=>a.animating=!1,200)}),{state:a,show:()=>!a.animating&&(a.visible=!0),hide:()=>{a.animating||(a.visible=!1)}}};function Mv(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!zt(e)}const ac=R({name:"SuiDropdown",directives:{clickoutside:$s},emits:["update:modelValue"],props:{button:Boolean,clearable:Boolean,compact:Boolean,floating:Boolean,fluid:Boolean,icon:String,inline:Boolean,item:Boolean,labeled:Boolean,modelValue:[Object,String],multiple:Boolean,options:Array,placeholder:String,pointing:[Boolean,String],scrolling:Boolean,selection:Boolean,search:Boolean,searchInMenu:Boolean,simple:Boolean,text:String},setup(e,{emit:a}){const l=Pv(e);ut("useDropdown",l);const{state:o,show:r,hide:c}=l,m=H(()=>ee("ui",A(e.button,"button"),A(e.clearable,"clearable"),A(e.compact,"compact"),A(e.floating,"floating"),A(e.fluid,"fluid"),A(!!e.icon,"icon"),A(e.inline,"inline"),A(e.item,"item"),A(e.labeled,"labeled"),A(e.multiple,"multiple"),A(e.search,"search"),A(e.scrolling,"scrolling"),A(e.selection,"selection"),A(e.simple,"simple"),Me(e.pointing,"pointing"),"dropdown",A(o.visible,"active visible"),A(o.direction==="up","upward"))),f=()=>{var k;if(o.visible)return c();(k=h.value)==null||k.focus(),r()},s=()=>{e.search&&h.value&&h.value.focus(),r()},u=()=>c(),g=G(""),d=H(()=>{const k=g.value.toLowerCase();return e.options.filter(T=>{const b=typeof T=="object"?T.text:T,w=b.toLowerCase().includes(k);if(!e.multiple)return w;if(Array.isArray(e.modelValue)){const x=typeof T=="object"?Rv(e.modelValue,"text").includes(b):e.modelValue.includes(b);return w&&!x}return w})}),h=G(null),v=k=>g.value=k.target.value,_=k=>{var T;if(g.value="",e.search&&((T=h.value)==null||T.focus()),e.multiple){let b=Array.isArray(e.modelValue)?[...e.modelValue,k]:[k];return a("update:modelValue",b)}return a("update:modelValue",k)},C=k=>{if(Array.isArray(e.modelValue)){const T=e.modelValue.findIndex(b=>b===k);if(T>-1){let b=Object.assign(e.modelValue);b.splice(T,1),a("update:modelValue",b)}}};return ut("selection",e.selection),{computedClass:m,onClick:f,openMenu:s,closeMenu:u,filteredText:g,filteredOptions:d,inputRef:h,onInput:v,onSelect:_,removeItem:C}},render(){var e,a;const l=()=>{if(Array.isArray(this.$props.modelValue))return this.$props.modelValue.map(m=>typeof m=="object"?t("a",{class:"ui label"},[m.flag&&t("i",{class:`${m.flag} flag`},null),m.text,t("i",{class:"delete icon",onClick:Tt(()=>this.removeItem(m),["stop"])},null)]):t("a",{class:"ui label"},[m,t("i",{class:"delete icon",onClick:Tt(()=>this.removeItem(m),["stop"])},null)]))},o=()=>this.filteredOptions.filter(m=>this.$props.multiple&&Array.isArray(this.$props.modelValue)?!this.$props.modelValue.includes(m):!0).map(m=>t(Ro,{item:m,active:this.$props.modelValue&&typeof m=="object"?m.text===this.$props.modelValue.text:m===this.$props.modelValue,text:typeof m=="object"?m.text:m,flag:typeof m=="object"&&Object.keys(m).includes("flag")?m.flag:"",image:m.image,label:m.label,disabled:m.disabled,onSelect:this.onSelect},null)),r=()=>{let m={clearable:this.clearable,filtered:this.filteredText.length>0,icon:this.icon,item:this.modelValue,placeholder:this.placeholder,text:this.text};return t(zv,Ki(m,{onRemove:()=>this.$emit("update:modelValue",null)}),null)},c=()=>{let m;return t(zo,{search:this.$props.searchInMenu,onSearch:this.onInput},Mv(m=o())?m:{default:()=>[m]})};return bi(t("div",{class:this.computedClass,onClick:this.onClick},[this.$props.multiple&&l(),this.search&&t("input",{ref:m=>this.inputRef=m,type:"text",class:"search",autocomplete:"off",tabindex:0,value:this.filteredText,onInput:m=>this.onInput(m)},null),this.search&&this.multiple&&t("span",{class:"sizer"},null),r(),((a=(e=this.$slots).default)==null?void 0:a.call(e))||c()]),[[gn("clickoutside"),this.closeMenu]])}}),Ro=R({name:"SuiDropdownItem",emits:["select"],props:{active:Boolean,flag:String,description:String,icon:String,image:Object,item:[Object,String],label:Object,text:String,disabled:Boolean,onSelect:Function},setup(e,{emit:a}){const{state:l,hide:o}=Fe("useDropdown");return{computedClass:H(()=>ee(A(e.active,"active"),A(e.disabled,"disabled"),"item")),onClick:()=>{l.multiple||o(),a("select",e.item?e.item:e.text)}}},render(){return t("div",{class:this.computedClass,onClick:Tt(this.onClick,["stop"])},[this.flag&&t("i",{class:`${this.flag} flag`},null),this.icon&&t("i",{class:`${this.icon} icon`},null),this.image&&t(ce,this.image,null),this.label&&t(N,this.label,null),this.description&&t("span",{class:"description"},[this.description]),this.text])}}),zo=R({name:"SuiDropdownMenu",emits:["search"],props:{search:Boolean,onSearch:Function},setup(e,{emit:a,slots:l}){const{state:o}=Fe("useDropdown"),r=G(null),c=H(()=>{let f=()=>o.visible?`animating slide ${o.direction} in visible`:`animating slide ${o.direction} out visible`;return ee("menu","transition",A(o.visible,"visible"),A(!o.visible&&!o.animating,"hidden"),A(o.animating,f()))});pt(()=>o.visible,f=>{if(!f||!r.value)return;let s=r.value.parentElement;const{top:u,height:g}=s==null?void 0:s.getBoundingClientRect(),d=u-m.value.length*37,h=document.documentElement.clientHeight-u-g-m.value.length*37;o.direction=d>h?"up":"down"});const m=H(()=>{var f;let s=[],u=(f=l.default)==null?void 0:f.call(l);return u&&u.forEach(g=>{g.type.name==="SuiSelectItem"&&s.push(g)}),s});return{container:r,computedClass:c,onSearchInput:f=>a("search",f)}},render(){var e,a,l,o;const r=()=>t(Ce,null,[t("div",{class:"ui left icon input",onClick:Tt(()=>{},["stop"])},[t("input",{type:"text",onInput:c=>this.onSearchInput(c)},null),t("i",{class:"search icon"},null)]),t("div",{class:"ui divider"},null)]);return t("div",{ref:c=>this.container=c,class:this.computedClass},[this.$slots.header&&t("div",{class:"header"},[(a=(e=this.$slots).header)==null?void 0:a.call(e)]),this.$props.search&&r(),(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),Vv={install(e){e.component(ac.name,ac),e.component(Ro.name,Ro),e.component(zo.name,zo)}},lc=R({name:"SuiEmbed",props:{active:Boolean,aspectRatio:Boolean,autoplay:Boolean,id:String,placeholder:String,source:String,url:String},setup(e){const a=G(e.active),l=()=>{a.value=!a.value},o=()=>e.source==="youtube"?[`//www.youtube.com/embed/${e.id}`,"?autohide=true",`&amp;autoplay=${e.autoplay}`,"&amp;jsapi=false"].join(""):e.url,r=H(()=>ee("ui",e.aspectRatio,A(a.value,"active"),"embed"));return{active:a,getSrc:o,clickHandler:l,computedClass:r}},render(){let e=[J("i",{class:"video play icon"}),J("img",{class:"placeholder",src:this.placeholder})];return this.active&&e.push(J("div",{class:"embed"},J("iframe",{src:this.getSrc()}))),J("div",{class:this.computedClass,onClick:this.clickHandler},e)}}),Fv={install(e){e.component(lc.name,lc)}};function Hv(e){return Ko()?(Rc(e),!0):!1}function Fm(e){return typeof e=="function"?e():p(e)}const Hm=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Nv=Object.prototype.toString,Ov=e=>Nv.call(e)==="[object Object]",Ll=()=>{},jv=Gv();function Gv(){var e,a;return Hm&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((a=window==null?void 0:window.navigator)==null?void 0:a.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function Pa(e){var a;const l=Fm(e);return(a=l==null?void 0:l.$el)!=null?a:l}const Nm=Hm?window:void 0;function Gn(...e){let a,l,o,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([l,o,r]=e,a=Nm):[a,l,o,r]=e,!a)return Ll;Array.isArray(l)||(l=[l]),Array.isArray(o)||(o=[o]);const c=[],m=()=>{c.forEach(g=>g()),c.length=0},f=(g,d,h,v)=>(g.addEventListener(d,h,v),()=>g.removeEventListener(d,h,v)),s=pt(()=>[Pa(a),Fm(r)],([g,d])=>{if(m(),!g)return;const h=Ov(d)?{...d}:d;c.push(...l.flatMap(v=>o.map(_=>f(g,v,_,h))))},{immediate:!0,flush:"post"}),u=()=>{s(),m()};return Hv(u),u}let nc=!1;function qv(e,a,l={}){const{window:o=Nm,ignore:r=[],capture:c=!0,detectIframe:m=!1}=l;if(!o)return Ll;jv&&!nc&&(nc=!0,Array.from(o.document.body.children).forEach(g=>g.addEventListener("click",Ll)),o.document.documentElement.addEventListener("click",Ll));let f=!0;const s=g=>r.some(d=>{if(typeof d=="string")return Array.from(o.document.querySelectorAll(d)).some(h=>h===g.target||g.composedPath().includes(h));{const h=Pa(d);return h&&(g.target===h||g.composedPath().includes(h))}}),u=[Gn(o,"click",g=>{const d=Pa(e);if(!(!d||d===g.target||g.composedPath().includes(d))){if(g.detail===0&&(f=!s(g)),!f){f=!0;return}a(g)}},{passive:!0,capture:c}),Gn(o,"pointerdown",g=>{const d=Pa(e);f=!s(g)&&!!(d&&!g.composedPath().includes(d))},{passive:!0}),m&&Gn(o,"blur",g=>{setTimeout(()=>{var d;const h=Pa(e);((d=o.document.activeElement)==null?void 0:d.tagName)==="IFRAME"&&!(h!=null&&h.contains(o.document.activeElement))&&a(g)},0)})].filter(Boolean);return()=>u.forEach(g=>g())}function Om(e,a="scale"){const l=G(e.modelValue?"open":"closed");return pt(()=>e.modelValue,o=>{l.value=o?"opening":"closing"}),{animationClasses:H(()=>{switch(l.value){case"opening":return`animating ${a} in`;case"open":return"visible active";case"closing":return`visible active animating ${a} out`;case"closed":return"hidden"}}),isClosed:H(()=>l.value==="closed"),onAnimationEnd:()=>l.value=e.modelValue?"open":"closed"}}const Uv=R({name:"SuiModalDemmer",props:{blurring:Boolean,inverted:Boolean,modelValue:Boolean},setup(e){const{animationClasses:a,isClosed:l,onAnimationEnd:o}=Om(e,"fade"),r=H(()=>ee("ui","page modals dimmer transition",A(e.inverted,"inverted"),a.value)),c=H(()=>({display:l.value?"none !important":"flex !important",animationDuration:"500ms"})),m=H(()=>ee("dimmable","dimmed",A(e.blurring,"blurring")));return pt(()=>e.modelValue,f=>{if(f){document.body.classList.add(...m.value.split(" "));return}document.body.classList.remove(...m.value.split(" "))}),{className:r,style:c,onAnimationEnd:o}},render(){var e,a;return t("div",{class:this.className,style:this.style,onAnimationend:this.onAnimationEnd},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Xl=R({name:"SuiModal",props:{basic:Boolean,closeIcon:Boolean,dimmer:String,modelValue:Boolean,size:String,closable:{type:Boolean,default:!0},overlay:Boolean,fullscreen:Boolean},setup(e,{emit:a}){const l=G(),{animationClasses:o,isClosed:r}=Om(e),c=H(()=>ee("ui",e.size,A(e.basic,"basic"),A(e.overlay,"overlay"),A(e.fullscreen,"fullscreen"),"modal","transition",o.value)),m=H(()=>({display:r.value?"none !important":"block !important",animationDuration:"500ms"})),f=()=>a("update:modelValue",!1);return qv(l,()=>e.closable&&a("update:modelValue",!1)),{computedClass:c,style:m,close:f,modalRef:l}},render(){return t(yn,{to:"body"},{default:()=>[t(Uv,{blurring:this.dimmer==="blurring",inverted:this.dimmer==="inverted",modelValue:this.modelValue},{default:()=>{var e,a;return[t("div",{class:this.computedClass,style:this.style,onClick:l=>l.stopPropagation(),ref:l=>this.modalRef=l},[this.closeIcon&&t("i",{"aria-hidden":"true",class:"close icon",onClick:this.close},null),(a=(e=this.$slots).default)==null?void 0:a.call(e)])]}})]})}}),Ql=R({name:"SuiModalActions",render(){var e,a;return t("div",{class:"actions"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Zl=R({name:"SuiModalContent",props:{image:Boolean,scrolling:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.image,"image"),A(e.scrolling,"scrolling"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Po=R({name:"SuiModalDescription",render(){var e,a;return J("div",{class:"description"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),en=R({name:"SuiModalHeader",render(){var e,a;return J("div",{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Yv={install(e){e.component(Xl.name,Xl),e.component(Ql.name,Ql),e.component(Zl.name,Zl),e.component(Po.name,Po),e.component(en.name,en)}},Jv=e=>{const a=G(!1),l=lo(e,"position"),o=G(null),r=lo(e,"trigger"),c=()=>{a.value=!0,ka(()=>f())},m=()=>{a.value=!1},f=()=>{if(!o.value||!r.value)return;let s=0,u=0;const g=o.value,d=r.value.$el;g.style.transform=`translate(${s}px, ${u}px)`;const{top:h,left:v,width:_,height:C}=d.getBoundingClientRect(),k=g.getBoundingClientRect(),{pageXOffset:T,pageYOffset:b}=window;if(l.value.includes("top")?(s=T+v,u=b+h-g.offsetTop-g.offsetHeight):(s=v,u=h+C-k.top),l.value.includes("right")){const w=_-k.width;s=v+w}if(l.value.includes("center")){const w=_/2-k.width/2;s=v+w}l.value==="right center"&&(s=v+_,u=h+C/2-k.top-k.height/2),l.value==="left center"&&(s=v-k.width,u=h+C/2-k.top-k.height/2),g.style.display="flex",g.style.position="absolute",g.style.transform=`translate(${s}px, ${u}px)`};return{show:a,showPopup:c,hidePopup:m,placement:l,popupRef:o,triggerRef:r}},oc=R({name:"SuiPopup",props:{basic:Boolean,content:String,flowing:Boolean,header:String,inverted:Boolean,position:{type:String,default:"top left"},size:String,trigger:Object,wide:[Boolean,String]},setup(e,{slots:a}){const{show:l,showPopup:o,hidePopup:r,popupRef:c,triggerRef:m}=Jv(e);ds(()=>{var h,v,_;(h=m.value)!=null&&h.$el&&((v=m.value)==null||v.$el.addEventListener("mouseenter",o),(_=m.value)==null||_.$el.addEventListener("mouseleave",r))});const f=G(l.value?"open":"close");H(()=>f.value!=="closed"),pt(()=>l.value,h=>{f.value=h?"opening":"closing"});const s=(h,v="scale")=>{switch(h){case"opening":return`animating ${v} in`;case"open":return"visible active";case"closing":return`visible active animating ${v} out`;case"closed":return"hidden"}},u=()=>f.value=l.value?"open":"closed";Ci(()=>{var h;(h=c.value)==null||h.addEventListener("animationend",u,!0)}),Wi(()=>{var h;(h=c.value)==null||h.removeEventListener("animationend",u)});const g={position:"initial",animationDuration:"200ms"},d=H(()=>ee("ignored ui",e.position,e.size,A(e.basic,"basic"),A(e.flowing,"flowing"),A(e.inverted,"inverted"),Me(e.wide,"wide"),"popup transition",s(f.value,"scale")));return()=>t(yn,{to:"body"},{default:()=>{var h;return[t("div",{ref:c,style:"display: flex; position: absolute; transform: translate(0px, 0px);"},[t("div",{class:d.value,style:g},[e.header&&t("div",{class:"header"},[e.header]),t("div",{class:"content"},[e.content?e.content:(h=a.default)==null?void 0:h.call(a)])])])]}})}}),Wv={install(e){e.component(oc.name,oc)}},Kv=["top","bottom","left"],Bs=()=>({attached:{type:String,validator:e=>Kv.includes(e)}}),jm=e=>({attachedClasses:H(()=>ee(e.attached,{attached:e.attached}))}),Xv=["red","orange","yellow","olive","green","teal","blue","purple","violet","pink","brown","grey","black"],Gm=()=>({color:{type:String,validator:e=>Xv.includes(e)}}),qm=e=>({colorClasses:H(()=>ee(e.inverted&&"inverted",e.color))}),tn=R({name:"SuiProgress",props:{active:Boolean,disabled:Boolean,error:Boolean,indicating:Boolean,inverted:Boolean,label:String,percent:Number,progress:[Boolean,String],size:String,success:Boolean,warning:Boolean,...Bs(),...Gm()},setup(e){const{attachedClasses:a}=jm(e),{colorClasses:l}=qm(e),o=H(()=>ee("ui",l.value,e.size,A(e.active||e.indicating,"active"),A(e.disabled,"disabled"),A(e.error,"error"),A(e.indicating,"indicating"),A(e.success,"success"),A(e.warning,"warning"),a.value,"progress")),r=H(()=>ee(Me(e.progress,"progress"))),c=H(()=>e.progress!=="centered"?{}:{right:0});return()=>t("div",{class:o.value,"data-percent":e.percent},[t("div",{class:"bar",style:`width: ${e.percent}%; transition-duration: 300ms;`},[e.progress&&t("div",{class:r.value,style:c.value},[`${e.percent}%`])]),e.label&&t("div",{class:"label"},[e.label])])}}),Qv={install(e){e.component(tn.name,tn)}},Zv=R({name:"SuiRatingIcon",props:{icon:String,index:{type:Number,default:0}},setup(e){const a=Fe("rating",G(0)),l=Fe("updateRating"),o=Fe("selectedIndex",G(0)),r=Fe("updateSelectedIndex"),c=Fe("clearable",!1),m=Fe("disabled",!1),f=()=>{if(!m){if(c&&e.index===a.value){l(0),r(0);return}l(e.index)}},s=()=>{m||r(e.index)},u=H(()=>e.index<=a.value),g=H(()=>e.index<=o.value),d=H(()=>ee(e.icon,A(u.value,"active"),A(g.value,"selected"),"icon"));return()=>t("i",{class:d.value,onClick:()=>f(),onMouseenter:()=>s()},null)}}),sc=R({name:"SuiRating",props:{clearable:Boolean,color:String,defaultRating:{type:Number,default:0},disabled:Boolean,icon:{type:String,default:"star"},maxRating:{type:Number,default:1},modelValue:Number,size:String},setup(e,{emit:a}){const l=G(e.modelValue||e.defaultRating),o=G(!1),r=G(0),c=g=>{l.value=g,a("update:modelValue",g),a("change",g)},m=g=>r.value=g,f=()=>{e.disabled||(o.value=!0)},s=()=>{e.disabled||(o.value=!1,m(0))},u=H(()=>ee("ui",e.color,e.icon,e.size,A(e.disabled,"disabled"),"rating",A(o.value,"selected")));return ut("rating",l),ut("updateRating",c),ut("selectedIndex",r),ut("updateSelectedIndex",m),ut("clearable",e.clearable),ut("disabled",e.disabled),()=>t("div",{class:u.value,onMouseenter:()=>f(),onMouseleave:()=>s()},[[...Array(e.maxRating)].map((g,d)=>t(Zv,{icon:e.icon,index:d+1},null))])}}),e1={install(e){e.component(sc.name,sc)}},rc=R({name:"SuiSearch",props:{icon:String,placeholder:String},setup(e){return()=>t("div",{class:"ui search"},[t("div",{class:"ui icon input"},[t("input",{type:"text",class:"prompt",placeholder:e.placeholder},null),t("i",{class:"search icon"},null)]),t("div",{class:"results"},null)])}}),t1={install(e){e.component(rc.name,rc)}},uc=R({name:"SuiSidebar",directives:{clickoutside:$s},emits:["update:visible","show","hide"],props:{animation:{type:String,default:"overlay"},dimmed:Boolean,direction:{type:String,default:"left"},icon:[Boolean,String],inverted:Boolean,visible:Boolean},setup(e,{emit:a}){const l=ti({animating:!1}),o=H(()=>{const r=e.direction==="right"||e.direction==="left";return ee("ui","sidebar",e.direction,e.animation,A(e.inverted,"inverted"),A(e.visible,"visible"),A(l.animating,"animating"),A(r,"vertical"),Me(e.icon,"icon"),"menu")});return pt(()=>e.visible,()=>{if(l.animating=!0,setTimeout(()=>l.animating=!1,500),e.dimmed){const r=document.querySelector(".pusher");r&&r.classList.toggle("dimmed")}}),{computedClass:o,onClickPusher:r=>{const c=r.path||r.composedPath&&r.composedPath();c&&c.find(m=>m.classList&&m.classList.contains("pusher"))&&e.visible&&a("update:visible",!1)}}},render(){var e,a;return bi(t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]),[[gn("clickoutside"),this.onClickPusher]])}}),i1={install:e=>{e.component(uc.name,uc)}};class qn{static getWindowScrollTop(){let{documentElement:a}=document;return(window.pageYOffset||a.scrollTop)-(a.clientTop||0)}static getWindowScrollLeft(){let{documentElement:a}=document;return(window.pageXOffset||a.scrollLeft)-(a.clientLeft||0)}static hasClass(a,l){return a.classList.contains(l)}}const cc=R({name:"SuiSlider",emits:["change","slideend","update:modelValue"],props:{color:String,disabled:Boolean,inverted:Boolean,labeled:[Boolean,String],labels:Array,max:{type:Number,default:10},min:{type:Number,default:0},modelValue:{type:[Number,Array],default:0},range:Boolean,reversed:Boolean,size:String,step:{type:Number,default:1},vertical:Boolean,verticalHeight:{type:[Number,String],default:200}},setup(e,{emit:a}){const l=H(()=>ee("ui",e.color,e.size,A(e.disabled,"disabled"),A(e.inverted,"inverted"),A(e.reversed,"reversed"),A(e.vertical,"vertical"),Me(e.labeled,"labeled"),"slider")),o=()=>100*(e.modelValue[0]-e.min)/(e.max-e.min),r=()=>100*(e.modelValue[1]-e.min)/(e.max-e.min),c=H(()=>{if(e.range)return e.reversed&&!e.vertical?{right:o()+"%",width:r()-o()+"%"}:e.vertical?e.reversed?{bottom:o()+"%",height:r()-o()+"%"}:{top:o()+"%",height:r()-o()+"%"}:{left:o()+"%",width:r()-o()+"%"};let q=e.modelValue>e.max?e.max:e.modelValue;return e.reversed?e.vertical?{bottom:"0%",top:`${100-(q-e.min)/(e.max-e.min)*100}%`}:{right:"0%",left:`${100-(q-e.min)/(e.max-e.min)*100}%`}:e.vertical?{top:"0%",bottom:`${100-(q-e.min)/(e.max-e.min)*100}%`}:{left:"0%",right:`${100-(q-e.min)/(e.max-e.min)*100}%`}}),m=H(()=>{let q=e.range?e.modelValue[0]:e.modelValue>e.max?e.max:e.modelValue;return!e.reversed&&e.vertical?{top:`calc(${(q-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:e.reversed&&e.vertical?{top:"auto",bottom:`calc(${(q-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.reversed&&!e.vertical?{left:"auto",right:`calc(${(q-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{left:`calc(${(q-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),f=H(()=>{let q=e.modelValue[1]>e.max?e.max:e.modelValue[1];return e.reversed&&!e.vertical?{left:"auto",right:`calc(${(q-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.vertical?e.reversed?{top:"auto",bottom:`calc(${(q-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{top:`calc(${(q-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:{left:`calc(${(q-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),s=H(()=>e.labels?e.labels:[...Array(e.max-e.min+1)].map((q,K)=>K*e.step+e.min)),u=()=>{var q,K;let de=1,ie=g(),Ie=(e.vertical?(q=h.value)==null?void 0:q.clientHeight:(K=h.value)==null?void 0:K.clientWidth)||0,We=1;if(Ie>0)for(;Ie/ie*We<100;)ie%We||(de=We),We+=1;return de},g=()=>Math.round((e.max-e.min)/e.step),d=G(null),h=G(null),v=G(0),_=G(0),C=G(0),k=G(0),T=()=>{if(!d.value)return;let q=d.value.getBoundingClientRect();v.value=q.left+qn.getWindowScrollLeft(),_.value=q.top+qn.getWindowScrollTop(),C.value=d.value.offsetWidth,k.value=d.value.offsetHeight},b=G(0),w=q=>{let{pageX:K,pageY:de}=q.touches?q.touches[0]:q,ie,Ie;e.vertical?ie=(_.value+k.value-de)*100/k.value:ie=(K-v.value)*100/C.value,Ie=(e.max-e.min)*(ie/100)+e.min;const We=e.range?e.modelValue[b.value]:e.modelValue||0;Ie=We+Math.round(Ie/e.step-We/e.step)*e.step,e.reversed&&(Ie=e.max-Ie+e.min),e.vertical&&(Ie=e.max-Ie+e.min),x(Ie)},x=q=>{let K=q,de;if(e.range)if(de=e.modelValue?[...e.modelValue]:[],b.value===0){let ie=e.modelValue?e.modelValue[1]:e.max;K<e.min?K=e.min:K>ie&&(K=ie),de[0]=K,de[1]=de[1]||e.max}else{let ie=e.modelValue?e.modelValue[0]:e.min;K>e.max?K=e.max:K<ie&&(K=ie),de[0]=de[0]||e.min,de[1]=K}else K<e.min&&(K=e.min),K>e.max&&(K=e.max),de=K;a("update:modelValue",de),a("change",de)},B=G(!1),I=q=>B.value=q,V=(q,K=0)=>{I(!0),T(),b.value=K,q.preventDefault()},F=q=>{B.value&&(I(!1),document.removeEventListener("mousemove",z),a("slideend",{event:q,value:e.modelValue}))},z=q=>{B.value&&(w(q),q==null||q.preventDefault())},j=(q,K=0)=>{e.disabled||(V(q,K),document.addEventListener("mousemove",z),document.addEventListener("mouseup",F),q.preventDefault())},X=(q,K=0)=>{switch(b.value=K,q.code){case"ArrowUp":e.vertical&&(e.reversed?U():pe()),q.preventDefault();break;case"ArrowDown":e.vertical&&(e.reversed?pe():U()),q.preventDefault();break;case"ArrowRight":e.reversed?pe():U(),q.preventDefault();break;case"ArrowLeft":e.reversed?U():pe(),q.preventDefault();break}},U=()=>{let q=0;e.range?q=e.modelValue[b.value]+e.step:q=e.modelValue+e.step,x(q)},pe=()=>{let q=0;e.range?q=e.modelValue[b.value]-e.step:q=e.modelValue-e.step,x(q)},Be=q=>{if(!e.disabled&&!qn.hasClass(q.target,"thumb")){if(e.range){let K=(e.vertical?q.offsetY/q.target.clientHeight:q.offsetX/q.target.clientWidth)*100,de=(o()+r())/2;K<de?b.value=e.reversed?1:0:b.value=e.reversed?0:1}T(),w(q)}};return()=>t("div",{ref:q=>d.value=q,class:l.value,style:e.vertical?`height: ${e.verticalHeight}px;`:""},[t("div",{class:"inner",onClick:Be},[t("div",{class:"track",ref:q=>h.value=q},null),t("div",{class:"track-fill",style:c.value},null),t("div",{class:"thumb",style:m.value,onMousedown:q=>j(q),onTouchstart:q=>V(q),onTouchmove:q=>z(q),onTouchend:q=>F(q),onKeydown:q=>X(q),tabindex:0},null),e.range&&t("div",{class:"thumb second",style:f.value,onMousedown:q=>j(q,1),onTouchstart:q=>V(q,1),onTouchmove:q=>z(q),onTouchend:q=>F(q),onKeydown:q=>X(q,1),tabindex:0},null)]),e.labeled&&t("ul",{class:"auto labels"},[[...Array(g()+1)].map((q,K)=>{let de=K/g();return K%u()?t("li",{class:"halftick label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${de} + 7px);`},null):t("li",{class:"label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${de} + 7px);`},[e.reversed&&!e.vertical?e.labels?e.labels[g()-K]:s.value[g()-K]:e.labels?e.labels[K]:s.value[K]])})])])}}),a1={install(e){e.component(cc.name,cc)}},Mo=R({name:"SuiTabPanel",props:{active:Boolean,attached:[Boolean,String],header:String},setup(e){return{computedClass:H(()=>ee("ui tab segment",A(e.active,"active"),Me(e.attached,"attached")))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),dc=R({name:"SuiTab",emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},pointing:Boolean,secondary:Boolean,text:Boolean},setup(e,{emit:a,slots:l}){const o=G(e.activeIndex);pt(()=>e.activeIndex,u=>{o.value=u});const r=(u,g)=>{o.value!==g&&(o.value=g,a("update:activeIndex",g),a("tab-change",{event:u,index:g})),a("tab-click",{event:u,index:g})},c=(u,g)=>{u.key==="Enter"&&r(u,g)},m=H(()=>{var u,g;let d=[];return(u=l.default)!=null&&u.call(l)&&((g=l.default)==null||g.call(l).forEach(h=>{h.type.name==="SuiTabPanel"&&d.push(h)})),d}),f=H(()=>!e.secondary&&!e.pointing&&!e.text),s=H(()=>ee("ui menu",A(f.value,"tabular attached"),A(e.pointing,"pointing"),A(e.secondary,"secondary"),A(e.text,"text")));return{onClick:r,onKeyDown:c,tabIndex:o,tabs:m,tabMenuClass:s,isDefaultMenu:f}},render(){const e=()=>this.tabs.map((l,o)=>t("a",{class:`item ${this.tabIndex===o&&"active"}`,onClick:r=>this.onClick(r,o),onKeydown:r=>this.onKeyDown(r,o),tabindex:0},[l.props.header])),a=()=>this.tabs.map((l,o)=>t(Mo,Ki(l.props,{active:this.tabIndex===o,attached:this.isDefaultMenu?"bottom":!1}),{default:()=>{var r,c;return[(c=(r=l.children).default)==null?void 0:c.call(r)]}}));return t(Ce,null,[t("div",{class:this.tabMenuClass},[e()]),a()])}}),l1={install(e){e.component(dc.name,dc),e.component(Mo.name,Mo)}};function n1(e,a){e.indexOf(a)===-1&&e.push(a)}const Um=(e,a,l)=>Math.min(Math.max(l,e),a),Et={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},an=e=>typeof e=="number",ua=e=>Array.isArray(e)&&!an(e[0]),o1=(e,a,l)=>{const o=a-e;return((l-e)%o+o)%o+e};function s1(e,a){return ua(e)?e[o1(0,e.length,a)]:e}const Ym=(e,a,l)=>-l*e+l*a+e,Jm=()=>{},yi=e=>e,Ts=(e,a,l)=>a-e===0?1:(l-e)/(a-e);function Wm(e,a){const l=e[e.length-1];for(let o=1;o<=a;o++){const r=Ts(0,a,o);e.push(Ym(l,1,r))}}function r1(e){const a=[0];return Wm(a,e-1),a}function u1(e,a=r1(e.length),l=yi){const o=e.length,r=o-a.length;return r>0&&Wm(a,r),c=>{let m=0;for(;m<o-2&&!(c<a[m+1]);m++);let f=Um(0,1,Ts(a[m],a[m+1],c));return f=s1(l,m)(f),Ym(e[m],e[m+1],f)}}const Km=e=>Array.isArray(e)&&an(e[0]),Vo=e=>typeof e=="object"&&!!e.createAnimation,wa=e=>typeof e=="function",c1=e=>typeof e=="string",Ya={ms:e=>e*1e3,s:e=>e/1e3},Xm=(e,a,l)=>(((1-3*l+3*a)*e+(3*l-6*a))*e+3*a)*e,d1=1e-7,m1=12;function p1(e,a,l,o,r){let c,m,f=0;do m=a+(l-a)/2,c=Xm(m,o,r)-e,c>0?l=m:a=m;while(Math.abs(c)>d1&&++f<m1);return m}function Ma(e,a,l,o){if(e===a&&l===o)return yi;const r=c=>p1(c,0,1,e,l);return c=>c===0||c===1?c:Xm(r(c),a,o)}const f1=(e,a="end")=>l=>{l=a==="end"?Math.min(l,.999):Math.max(l,.001);const o=l*e,r=a==="end"?Math.floor(o):Math.ceil(o);return Um(0,1,r/e)},mc={ease:Ma(.25,.1,.25,1),"ease-in":Ma(.42,0,1,1),"ease-in-out":Ma(.42,0,.58,1),"ease-out":Ma(0,0,.58,1)},g1=/\((.*?)\)/;function pc(e){if(wa(e))return e;if(Km(e))return Ma(...e);if(mc[e])return mc[e];if(e.startsWith("steps")){const a=g1.exec(e);if(a){const l=a[1].split(",");return f1(parseFloat(l[0]),l[1].trim())}}return yi}class Qm{constructor(a,l=[0,1],{easing:o,duration:r=Et.duration,delay:c=Et.delay,endDelay:m=Et.endDelay,repeat:f=Et.repeat,offset:s,direction:u="normal",autoplay:g=!0}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=yi,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((h,v)=>{this.resolve=h,this.reject=v}),o=o||Et.easing,Vo(o)){const h=o.createAnimation(l);o=h.easing,l=h.keyframes||l,r=h.duration||r}this.repeat=f,this.easing=ua(o)?yi:pc(o),this.updateDuration(r);const d=u1(l,s,ua(o)?o.map(pc):yi);this.tick=h=>{var v;c=c;let _=0;this.pauseTime!==void 0?_=this.pauseTime:_=(h-this.startTime)*this.rate,this.t=_,_/=1e3,_=Math.max(_-c,0),this.playState==="finished"&&this.pauseTime===void 0&&(_=this.totalDuration);const C=_/this.duration;let k=Math.floor(C),T=C%1;!T&&C>=1&&(T=1),T===1&&k--;const b=k%2;(u==="reverse"||u==="alternate"&&b||u==="alternate-reverse"&&!b)&&(T=1-T);const w=_>=this.totalDuration?1:Math.min(T,1),x=d(this.easing(w));a(x),this.pauseTime===void 0&&(this.playState==="finished"||_>=this.totalDuration+m)?(this.playState="finished",(v=this.resolve)===null||v===void 0||v.call(this,x)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},g&&this.play()}play(){const a=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=a-this.pauseTime:this.startTime||(this.startTime=a),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var a;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(a=this.reject)===null||a===void 0||a.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(a){this.duration=a,this.totalDuration=a*(this.repeat+1)}get currentTime(){return this.t}set currentTime(a){this.pauseTime!==void 0||this.rate===0?this.pauseTime=a:this.startTime=performance.now()-a/this.rate}get playbackRate(){return this.rate}set playbackRate(a){this.rate=a}}class h1{setAnimation(a){this.animation=a,a==null||a.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const Un=new WeakMap;function Zm(e){return Un.has(e)||Un.set(e,{transforms:[],values:new Map}),Un.get(e)}function _1(e,a){return e.has(a)||e.set(a,new h1),e.get(a)}const b1=["","X","Y","Z"],v1=["translate","scale","rotate","skew"],ln={x:"translateX",y:"translateY",z:"translateZ"},fc={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:e=>e+"deg"},y1={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:e=>e+"px"},rotate:fc,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:yi},skew:fc},ll=new Map,Ls=e=>`--motion-${e}`,nn=["x","y","z"];v1.forEach(e=>{b1.forEach(a=>{nn.push(e+a),ll.set(Ls(e+a),y1[e])})});const S1=(e,a)=>nn.indexOf(e)-nn.indexOf(a),w1=new Set(nn),ep=e=>w1.has(e),C1=(e,a)=>{ln[a]&&(a=ln[a]);const{transforms:l}=Zm(e);n1(l,a),e.style.transform=A1(l)},A1=e=>e.sort(S1).reduce(k1,"").trim(),k1=(e,a)=>`${e} ${a}(var(${Ls(a)}))`,Fo=e=>e.startsWith("--"),gc=new Set;function x1(e){if(!gc.has(e)){gc.add(e);try{const{syntax:a,initialValue:l}=ll.has(e)?ll.get(e):{};CSS.registerProperty({name:e,inherits:!1,syntax:a,initialValue:l})}catch{}}}const Yn=(e,a)=>document.createElement("div").animate(e,a),hc={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{Yn({opacity:[1]})}catch{return!1}return!0},finished:()=>!!Yn({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{Yn({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},Jn={},ia={};for(const e in hc)ia[e]=()=>(Jn[e]===void 0&&(Jn[e]=hc[e]()),Jn[e]);const $1=.015,B1=(e,a)=>{let l="";const o=Math.round(a/$1);for(let r=0;r<o;r++)l+=e(Ts(0,o-1,r))+", ";return l.substring(0,l.length-2)},_c=(e,a)=>wa(e)?ia.linearEasing()?`linear(${B1(e,a)})`:Et.easing:Km(e)?T1(e):e,T1=([e,a,l,o])=>`cubic-bezier(${e}, ${a}, ${l}, ${o})`;function L1(e,a){for(let l=0;l<e.length;l++)e[l]===null&&(e[l]=l?e[l-1]:a());return e}const I1=e=>Array.isArray(e)?e:[e];function Ho(e){return ln[e]&&(e=ln[e]),ep(e)?Ls(e):e}const Cl={get:(e,a)=>{a=Ho(a);let l=Fo(a)?e.style.getPropertyValue(a):getComputedStyle(e)[a];if(!l&&l!==0){const o=ll.get(a);o&&(l=o.initialValue)}return l},set:(e,a,l)=>{a=Ho(a),Fo(a)?e.style.setProperty(a,l):e.style[a]=l}};function tp(e,a=!0){if(!(!e||e.playState==="finished"))try{e.stop?e.stop():(a&&e.commitStyles(),e.cancel())}catch{}}function D1(e,a){var l;let o=(a==null?void 0:a.toDefaultUnit)||yi;const r=e[e.length-1];if(c1(r)){const c=((l=r.match(/(-?[\d.]+)([a-z%]*)/))===null||l===void 0?void 0:l[2])||"";c&&(o=m=>m+c)}return o}function E1(){return window.__MOTION_DEV_TOOLS_RECORD}function R1(e,a,l,o={},r){const c=E1(),m=o.record!==!1&&c;let f,{duration:s=Et.duration,delay:u=Et.delay,endDelay:g=Et.endDelay,repeat:d=Et.repeat,easing:h=Et.easing,persist:v=!1,direction:_,offset:C,allowWebkitAcceleration:k=!1,autoplay:T=!0}=o;const b=Zm(e),w=ep(a);let x=ia.waapi();w&&C1(e,a);const B=Ho(a),I=_1(b.values,B),V=ll.get(B);return tp(I.animation,!(Vo(h)&&I.generator)&&o.record!==!1),()=>{const F=()=>{var X,U;return(U=(X=Cl.get(e,B))!==null&&X!==void 0?X:V==null?void 0:V.initialValue)!==null&&U!==void 0?U:0};let z=L1(I1(l),F);const j=D1(z,V);if(Vo(h)){const X=h.createAnimation(z,a!=="opacity",F,B,I);h=X.easing,z=X.keyframes||z,s=X.duration||s}if(Fo(B)&&(ia.cssRegisterProperty()?x1(B):x=!1),w&&!ia.linearEasing()&&(wa(h)||ua(h)&&h.some(wa))&&(x=!1),x){V&&(z=z.map(pe=>an(pe)?V.toDefaultUnit(pe):pe)),z.length===1&&(!ia.partialKeyframes()||m)&&z.unshift(F());const X={delay:Ya.ms(u),duration:Ya.ms(s),endDelay:Ya.ms(g),easing:ua(h)?void 0:_c(h,s),direction:_,iterations:d+1,fill:"both"};f=e.animate({[B]:z,offset:C,easing:ua(h)?h.map(pe=>_c(pe,s)):void 0},X),f.finished||(f.finished=new Promise((pe,Be)=>{f.onfinish=pe,f.oncancel=Be}));const U=z[z.length-1];f.finished.then(()=>{v||(Cl.set(e,B,U),f.cancel())}).catch(Jm),k||(f.playbackRate=1.000001)}else if(r&&w)z=z.map(X=>typeof X=="string"?parseFloat(X):X),z.length===1&&z.unshift(parseFloat(F())),f=new r(X=>{Cl.set(e,B,j?j(X):X)},z,Object.assign(Object.assign({},o),{duration:s,easing:h}));else{const X=z[z.length-1];Cl.set(e,B,V&&an(X)?V.toDefaultUnit(X):X)}return m&&c(e,a,z,{duration:s,delay:u,easing:h,repeat:d,offset:C},"motion-one"),I.setAnimation(f),f&&!T&&f.pause(),f}}const z1=(e,a)=>e[a]?Object.assign(Object.assign({},e),e[a]):Object.assign({},e);function P1(e,a){var l;return typeof e=="string"?a?((l=a[e])!==null&&l!==void 0||(a[e]=document.querySelectorAll(e)),e=a[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const M1=e=>e(),ip=(e,a,l=Et.duration)=>new Proxy({animations:e.map(M1).filter(Boolean),duration:l,options:a},F1),V1=e=>e.animations[0],F1={get:(e,a)=>{const l=V1(e);switch(a){case"duration":return e.duration;case"currentTime":return Ya.s((l==null?void 0:l[a])||0);case"playbackRate":case"playState":return l==null?void 0:l[a];case"finished":return e.finished||(e.finished=Promise.all(e.animations.map(H1)).catch(Jm)),e.finished;case"stop":return()=>{e.animations.forEach(o=>tp(o))};case"forEachNative":return o=>{e.animations.forEach(r=>o(r,e))};default:return typeof(l==null?void 0:l[a])>"u"?void 0:()=>e.animations.forEach(o=>o[a]())}},set:(e,a,l)=>{switch(a){case"currentTime":l=Ya.ms(l);case"playbackRate":for(let o=0;o<e.animations.length;o++)e.animations[o][a]=l;return!0}return!1}},H1=e=>e.finished;function N1(e,a,l){return wa(e)?e(a,l):e}function O1(e){return function(a,l,o={}){a=P1(a);const r=a.length,c=[];for(let m=0;m<r;m++){const f=a[m];for(const s in l){const u=z1(o,s);u.delay=N1(u.delay,m,r);const g=R1(f,s,l[s],u,e);c.push(g)}}return ip(c,o,o.duration)}}const j1=O1(Qm);function G1(e,a={}){return ip([()=>{const l=new Qm(e,[0,1],a);return l.finished.catch(()=>{}),l}],a,a.duration)}function q1(e,a,l){return(wa(e)?G1:j1)(e,a,l)}const be=(e,a)=>(l,{duration:o,keyframesOverride:r={}})=>q1(l,{...e,...r},{autoplay:!1,...a,duration:o}),bc=be({transform:["scale(0.8) translateZ(0px)","scale(0.8) translateZ(0px)","scale(1.05) translateZ(0px)","scale(1) translateZ(0px)"],opacity:[null,.7,1,null],zIndex:[-1,-1,999,999]},{duration:.5,offset:[0,.1,.8,1]}),U1=be({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,-1,null,-1]},{duration:.5,offset:[0,.5,.8,1]}),Y1=be({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,1,null,1]},{duration:.5,offset:[0,.5,.8,1]}),J1=be({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(0)","scale(1)"],opacity:[0,1]},{duration:.4,offset:[0,1]}),W1=be({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(1)","scale(0)"],opacity:[1,0]},{duration:.4,offset:[0,1]}),K1=be({opacity:[0,1]},{duration:.5,offset:[0,1]}),X1=be({opacity:[0,1],transform:["translateY(10%)","export translateY(0%)"]},{duration:.5,offset:[0,1]}),Q1=be({opacity:[0,1],transform:["translateY(-10%)","translateY(0%)"]},{duration:.5,offset:[0,1]}),Z1=be({opacity:[0,1],transform:["translateX(10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),ey=be({opacity:[0,1],transform:["translateX(-10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),ty=be({opacity:[1,0]},{duration:.5,offset:[0,1]}),iy=be({opacity:[1,0],transform:["translateY(0%)","texport ranslateY(5%)"]},{duration:.5,offset:[0,1]}),ay=be({opacity:[1,0],transform:["translateY(0%)","translateY(-5%)"]},{duration:.5,offset:[0,1]}),ly=be({opacity:[1,0],transform:["translateX(0%)","translateX(5%)"]},{duration:.5,offset:[0,1]}),ny=be({opacity:[1,0],transform:["translateX(0%)","translateX(-5%)"]},{duration:.5,offset:[0,1]}),oy=be({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["scale3d(.3, .3, .3)","scale3d(1.1, 1.1, 1.1)","scale3d(.9, .9, .9)","scale3d(1.03, 1.03, 1.03)","scale3d(.97, .97, .97)","scale3d(1, 1, 1)"],opacity:[0,null,null,1,null,1]},{duration:.6,offset:[0,.2,.4,.6,.8,1]}),sy=be({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, 1500px, 0","translate3d(0, -20px, 0)","translate3d(0, 10px, 0)","translate3d(0, -5px, 0)","translate3d(0, 0, 0)"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),ry=be({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, -1500px, 0","translate3d(0, 25px, 0)","translate3d(0, -10px, 0)","translate3d(0, 5px, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),uy=be({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(1500px, 0, 0","translate3d(-25px, 0, 0)","translate3d(10px, 0, 0)","translate3d(-5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),cy=be({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(-1500px, 0, 0","translate3d(25px, 0, 0)","translate3d(-10px, 0, 0)","translate3d(5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),dy=be({transform:["scale3d(.9, .9, .9)","scale3d(1.1, 1.1, 1.1)","scale3d(1.1, 1.1, 1.1)","scale3d(.3, .3, .3)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.5,.55,1]}),my=be({transform:["translate3d(0, 10px, 0)","translate3d(0, -20px, 0)","translate3d(0, -20px, 0)","translate3d(0, 2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),py=be({transform:["translate3d(0, -10px, 0)","translate3d(0, 20px, 0)","translate3d(0, 20px, 0)","translate3d(0, -2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),fy=be({transform:["translate3d(-20px, 0, 0)","translate3d(2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),gy=be({transform:["translate3d(20px, 0, 0)","translate3d(-2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),hy=be({transform:["perspective(2000px) rotateY(-90deg)","perspective(2000px) rotateY(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),_y=be({transform:["perspective(2000px) rotateY(0deg)","perspective(2000px) rotateY(90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),by=be({transform:["perspective(2000px) rotateX(-90deg)","perspective(2000px) rotateX(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),vy=be({transform:["perspective(2000px) rotateX(0deg)","perspective(2000px) rotateX(-90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),yy=be({transform:["scale(0.8)","scale(1)"],opacity:[0,1]},{duration:.5,offset:[0,1]}),Sy=be({transform:["scale(1)","scale(0.9)"],opacity:[1,0]},{duration:.5,offset:[0,1]}),ap={transform:["scaleY(0)","scaleY(1)"],opacity:[0,1]},lp={transform:["scaleX(0)","scaleX(1)"],opacity:[0,1]},np={transform:["scaleY(1)","scaleY(0)"],opacity:[1,0]},wy={transform:["scaleX(1)","scaleX(0)"],opacity:[1,0]},Cy=be({transformOrigin:"top center",...ap},{offset:[0,1]}),Ay=be({transformOrigin:"bottom center",...ap},{offset:[0,1]}),ky=be({transformOrigin:"center right",...lp},{offset:[0,1]}),xy=be({transformOrigin:"center left",...lp},{offset:[0,1]}),$y=be({transformOrigin:"top center",...np},{offset:[0,1]}),By=be({transformOrigin:"bottom center",...np},{offset:[0,1]}),vc=be({transformOrigin:"center left",...wy},{offset:[0,1]}),ki=.8,ca={transform:["perspective(1000px) rotateX(90deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(15deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},da={transform:["perspective(1000px) rotateY(-90deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-17.5deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},ma={transform:["perspective(1000px) rotateX(0deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(17.5deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},pa={transform:["perspective(1000px) rotateY(0deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(-10deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},Ty=be({transformOrigin:"top center",transform:ca.transform,opacity:ca.opacity},{duration:ki,offset:ca.offset}),Ly=be({transformOrigin:"bottom center",transform:ca.transform,opacity:ca.opacity},{duration:ki,offset:ca.offset}),Iy=be({transformOrigin:"center right",transform:da.transform,opacity:da.opacity},{duration:ki,offset:da.offset}),Dy=be({transformOrigin:"center left",transform:da.transform,opacity:da.opacity},{duration:ki,offset:da.offset}),Ey=be({transformOrigin:"top center",transform:ma.transform,opacity:ma.opacity},{duration:ki,offset:ma.offset}),Ry=be({transformOrigin:"bottom center",transform:ma.transform,opacity:ma.opacity},{duration:ki,offset:ma.offset}),zy=be({transformOrigin:"center right",transform:pa.transform,opacity:pa.opacity},{duration:ki,offset:pa.offset}),Py=be({transformOrigin:"center left",transform:pa.transform,opacity:pa.opacity},{duration:ki,offset:pa.offset}),My=be({transform:["scale(0)","scale(1)"],opacity:[1,1]},{offset:[0,1]}),Vy=be({transform:["scale(1)","scale(0)"],opacity:[1,1]},{offset:[0,1]}),Fy=be({transform:["translateY(0)","translateY(0)","translateY(-30px)","translateY(0)","translateY(-15px)","translateY(0)","translateY(0)"]},{offset:[0,.2,.4,.5,.6,.8,1]}),Hy=be({opacity:[1,0,1,0,1]},{offset:[0,.25,.5,.75,1]}),Ny=be({animationTimingFunction:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",backgroundColor:["#FCFCFD","#FFF6CD","FCFCFD"]},{duration:2,offset:[0,.3,1]}),Oy=be({transform:["scale3d(1, 1, 1)","scale3d(1.25, 0.75, 1)","scale3d(0.75, 1.25, 1)","scale3d(1.15, 0.85, 1)","scale3d(0.95, 1.05, 1)","scale3d(1.05, 0.95, 1)","scale3d(1, 1, 1)"]},{duration:.75,offset:[0,.3,.4,.5,.6,.75,1]}),jy=be({transform:["scale(1)","scale(0.9)","scale(1)"],opacity:[1,.7,1]},{offset:[0,.5,1]}),Gy=be({transform:["translateX(0)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(0)"]}),qy=be({transform:["scale(1)","scale(0.9) rotate(-3deg)","scale(0.9) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1) rotate(0)"]},{offset:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]}),Uy={browse:[bc,U1],"browse right":[bc,Y1],drop:[J1,W1],fade:[K1,ty],"fade up":[X1,iy],"fade down":[Q1,ay],"fade left":[Z1,ly],"fade right":[ey,ny],fly:[oy,dy],"fly up":[sy,my],"fly down":[ry,py],"fly left":[uy,fy],"fly right":[cy,gy],"horizontal flip":[hy,_y],"vertical flip":[by,vy],scale:[yy,Sy],"slide up":[Ay,By],"slide down":[Cy,$y],"slide left":[ky,vc],"slide right":[xy,vc],"swing up":[Ly,Ry],"swing down":[Ty,Ey],"swing left":[Iy,zy],"swing right":[Dy,Py],zoom:[My,Vy]},Yy={bounce:[Fy,void 0],flash:[Hy,void 0],glow:[Ny,void 0],jiggle:[Oy,void 0],pulse:[jy,void 0],shake:[Gy,void 0],tada:[qy,void 0]},op=e=>({...Uy,...Yy})[e],Jy=e=>{const[a,l]=op(e.animation),o=H(()=>e.duration?e.duration/1e3:.5),r=H(()=>(m,f)=>{if(!a)return f();const s=a(m,{duration:o.value});s.play(),s.finished.then(f)}),c=H(()=>(m,f)=>{if(!l)return f();const s=l(m,{duration:o.value});s.play(),s.finished.then(f)});return{onEnter:r,onLeave:c}},yc=R({name:"SuiTransition",props:{animation:{type:String,default:"fade"},duration:{type:Number,default:500}},setup(e){const{onEnter:a,onLeave:l}=Jy(e);return{onEnter:a,onLeave:l}},render(){return t(Cn,{onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})}}),No=R({name:"SuiTransitionGroup",props:{tag:String,animation:{type:String,default:"fade"},enterKeyframes:{type:Function,default:()=>({})},leaveKeyframes:{type:Function,default:()=>({})}},setup(e){const[a,l]=op(e.animation),o=H(()=>(c,m)=>{if(!a)return m();const f=a(c,{duration:.5,keyframesOverride:e.enterKeyframes(c)});f.play(),f.finished.then(m)}),r=H(()=>(c,m)=>{if(!l)return m();const f=l(c,{duration:.5,keyframesOverride:e.leaveKeyframes(c)});f.play(),f.finished.then(m)});return{onEnter:o,onLeave:r}},render(){return t(um,{tag:this.tag,onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})}}),Wy={install(e){e.component(yc.name,yc),e.component(No.name,No)}},Ky=Object.freeze(Object.defineProperty({__proto__:null,Accordion:hv,Calendar:Iv,Checkbox:Dv,Dimmer:Ev,Dropdown:Vv,Embed:Fv,Modal:Yv,Popup:Wv,Progress:Qv,Rating:e1,Search:t1,Sidebar:i1,Slider:a1,Tab:l1,Transition:Wy},Symbol.toStringTag,{value:"Module"})),Wn=R({name:"SuiToastActions",props:{aligned:String,basic:Boolean,vertical:Boolean,...Bs()},setup(e,{slots:a}){const l=H(()=>ee("actions",e.basic&&"basic",e.aligned,e.vertical&&"vertical"));return()=>{var o;return e.attached?t(dt,{attached:e.attached,vertical:e.vertical},{default:()=>{var r;return[(r=a.default)==null?void 0:r.call(a)]}}):t("div",{class:l.value},[(o=a.default)==null?void 0:o.call(a)])}}}),Xy=R({name:"SuiToastBox",props:{unclickable:Boolean,verticalAttached:Boolean},setup(e,{slots:a}){const l=H(()=>ee("floating toast-box compact",e.unclickable&&"unclickable"));return()=>{var o,r;return e.verticalAttached?t("div",{class:l.value,style:"display: block !important;"},[t("div",{class:"vertical attached compact right"},[(o=a.default)==null?void 0:o.call(a)])]):t("div",{class:l.value,style:"display: block !important;"},[(r=a.default)==null?void 0:r.call(a)])}}});function Kn(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!zt(e)}const Qy=R({name:"SuiToast",emits:["click","close"],props:{id:Number,displayTime:{type:Number,default:3e3},type:String,title:String,message:{type:String,required:!0},centered:Boolean,messageStyle:Boolean,actions:Function,actionsProps:Object,showProgress:{type:String},showProgressColor:String,showProgressUp:Boolean,inverted:Boolean,...Gm()},setup(e,{emit:a}){const{colorClasses:l}=qm(e),o=H(()=>{var m,f,s,u,g;return ee(e.centered&&"center aligned",e.type||"neutral",l.value,"ui",e.messageStyle?"message":"toast",e.actions&&!((m=e.actionsProps)!=null&&m.vertical)&&"actions",((f=e.actionsProps)==null?void 0:f.attached)==="top"&&"bottom attached",((s=e.actionsProps)==null?void 0:s.attached)==="bottom"&&"top attached",((u=e.actionsProps)==null?void 0:u.attached)==="left"&&"left attached",((g=e.actionsProps)==null?void 0:g.vertical)&&"vertical","compact")}),r=G(e.showProgressUp?0:100),c=()=>{const m=e.displayTime/100;setTimeout(()=>{const f=setInterval(()=>{if(e.showProgressUp){r.value>=100&&clearInterval(f),r.value+=1;return}r.value<=0&&clearInterval(f),r.value-=1},m)},500)};return Ci(()=>e.showProgress&&c()),setTimeout(()=>e.displayTime>0&&a("close"),e.displayTime+750),{classes:o,progress:r}},render(){var e;let a,l,o;return t(Xy,{unclickable:!!this.actions,verticalAttached:((e=this.actionsProps)==null?void 0:e.attached)==="left"},{default:()=>{var r,c,m,f;return[this.showProgress==="top"&&t(tn,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null),this.actions&&(((r=this.actionsProps)==null?void 0:r.attached)==="top"||((c=this.actionsProps)==null?void 0:c.attached)==="left")&&t(Wn,this.actionsProps,Kn(a=this.actions({close:()=>this.$emit("close")}))?a:{default:()=>[a]}),t("div",{role:"alert",class:this.classes,onClick:()=>!this.actions&&this.$emit("click")},[t("div",{class:"content"},[this.title&&t("div",{class:"ui header"},[this.title]),t("div",{class:"message"},[this.message])]),this.actions&&!((m=this.actionsProps)!=null&&m.attached)&&t(Wn,this.actionsProps,Kn(l=this.actions({close:()=>this.$emit("close")}))?l:{default:()=>[l]})]),this.actions&&((f=this.actionsProps)==null?void 0:f.attached)==="bottom"&&t(Wn,this.actionsProps,Kn(o=this.actions({close:()=>this.$emit("close")}))?o:{default:()=>[o]}),this.showProgress==="bottom"&&t(tn,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null)]}})}}),Zy=["top right","top center","top left","bottom right","bottom center","bottom left","centered"],eS=({defaultValue:e}={})=>({position:{type:String,validator:a=>Zy.includes(a),default:e}}),tS=e=>({positionClasses:H(()=>e.position||"")});function iS(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!zt(e)}const aS=R({name:"SuiToastContainer",props:{horizontal:Boolean,...Bs(),...eS({defaultValue:"top right"})},setup(e){const{items:a,remove:l}=sp(),{attachedClasses:o}=jm(e),{positionClasses:r}=tS(e);return{classes:H(()=>ee(o.value||r.value,"ui toast-container",e.horizontal&&"horizontal")),items:a,remove:l,enterKeyframes:c=>{if(!(c instanceof HTMLElement))return{};const m=[0,`${c.offsetHeight}px`],f=[0,`${parseInt(getComputedStyle(c).marginBottom,10)}px`];return{height:m,marginBottom:f}},leaveKeyframes:c=>{if(!(c instanceof HTMLElement))return{};const m=[`${c.offsetWidth}px`,0],f=[`${c.offsetHeight}px`,0],s=e.horizontal?{width:m}:{height:f},u=[`${parseInt(getComputedStyle(c).marginBottom,10)}px`,0];return{...s,marginBottom:u}}}},render(){let e;return t(yn,{to:"body"},{default:()=>[t("div",{class:this.classes},[t(No,{animation:"scale",enterKeyframes:this.enterKeyframes,leaveKeyframes:this.leaveKeyframes},iS(e=this.items.filter(({position:a,attached:l})=>this.attached?l===this.attached:a===this.position).filter(({horizontal:a})=>this.horizontal===!!a).map(({id:a,...l})=>t(Qy,Ki({key:a},l,{onClick:()=>this.remove(a),onClose:()=>this.remove(a)}),null)))?e:{default:()=>[e]})])]})}}),lS=G(1),Ea=G([]),sp=()=>({items:Ea,add:e=>{e.position=e.position||"top right",Ea.value=[...Ea.value,{id:lS.value++,...e}]},remove:e=>{Ea.value=Ea.value.filter(a=>a.id!==e)}}),st=()=>{var e;const a=(e=qt())==null?void 0:e.appContext,{add:l}=sp();return{toast:o=>{const{position:r,attached:c,horizontal:m}=o;sS({position:r,attached:c,horizontal:m})||oS(a,{position:r,attached:c,horizontal:m}),l(o)}}},nS=(e,{appContext:a,element:l}={})=>{const o=l||document.createElement("div");return a&&(e.appContext=a),Ol(e,o),{vNode:e,el:o}},oS=(e,{position:a="top right",attached:l,horizontal:o=!1}={})=>{const r=J(aS,{position:a,attached:l,horizontal:o}),{el:c}=nS(r,{appContext:e});return{vNode:r,el:c}},sS=({position:e="top right",attached:a,horizontal:l})=>{const o=a?`.ui.toast-container.${a}.attached`:`.ui.toast-container.${e.split(" ").join(".")}${l?".horizontal":":not(.horizontal)"}`;return document.querySelector(o)};function rS(e){Object.values({...ev,...rv,...gv,...Ky}).map(a=>e.use(a))}const uS={install:rS},cS=Object.assign({inheritAttrs:!1},{__name:"DocSectionText",props:["label","onClick"],setup(e){const a=Dm(),l=H(()=>{const r=a.currentRoute.value.path;return r.lastIndexOf("/")===r.length-1?r.slice(0,-1):r}),o=r=>{r.preventDefault();const m=r.target.parentElement.getAttribute("href"),f=m.slice(m.indexOf("#")+1),s=document.getElementById(f);s&&s.scrollIntoView({behavior:"smooth"})};return(r,c)=>{const m=y("SuiHeader"),f=y("SuiGridColumn"),s=y("SuiGridRow");return $(),he(Ce,null,[t(s,null,{default:i(()=>[t(f,null,{default:i(()=>[t(m,{as:"h3",class:"doc-section-text"},{default:i(()=>[n(Te(e.label)+" ",1),t(p(xs),{to:`${l.value}#${r.$attrs.id}`,target:"_self",onClick:o},{default:i(()=>[t(p(W),{name:"linkify",color:"grey",size:"small",link:"",fitted:""})]),_:1},8,["to"])]),_:1})]),_:1}),t(f,{textAlign:"right"},{default:i(()=>[t(p(W),{name:"code",color:"grey",link:"",onClick:e.onClick},null,8,["onClick"])]),_:1})]),_:1}),S("p",null,[Fi(r.$slots,"default",{},void 0,!0)])],64)}}}),dS=ke(cS,[["__scopeId","data-v-a2b78897"]]),mS={class:"inner"},pS={__name:"DocSectionCode",props:["code","hideCode"],setup(e){return(a,l)=>{const o=y("SuiGridColumn"),r=y("SuiGridRow");return $(),D(r,null,{default:i(()=>[t(o,{width:16},{default:i(()=>[Fi(a.$slots,"default",{},void 0,!0)]),_:3}),t(o,{width:16,id:"accordion","aria-hidden":e.hideCode},{default:i(()=>[S("div",mS,[bi(($(),he("pre",null,[S("code",null,Te(e.code)+`
`,1)])),[[p(Tl)]])])]),_:1},8,["aria-hidden"])]),_:3})}}},fS=ke(pS,[["__scopeId","data-v-965e7ddc"]]),M={__name:"DocSection",props:["label","code"],setup(e){const a=G(!0),l=()=>a.value=!a.value;return(o,r)=>{const c=y("SuiGrid");return $(),he("section",null,[t(c,{columns:2},{default:i(()=>[t(dS,Ki({label:e.label,"on-click":l},o.$attrs),{default:i(()=>[Fi(o.$slots,"description")]),_:3},16,["label"]),t(fS,{code:e.code,"hide-code":a.value},{default:i(()=>[Fi(o.$slots,"example")]),_:3},8,["code","hide-code"])]),_:3})])}}},gS=`<template>
  <SuiButton @click="onClick">{{ label }}</SuiButton>
</template>

<script setup>
import { ref } from 'vue'
import { SuiButton } from 'vue-fomantic-ui'

const label = ref('Follow')
const onClick = () => label.value = label.value === 'Follow' ? 'Following' : 'Follow'
<\/script>`,hS={__name:"ButtonDoc",setup(e){const a=G("Follow"),l=()=>a.value=a.value==="Follow"?"Following":"Follow";return(o,r)=>($(),D(M,{label:"Button",code:gS},{description:i(()=>[n(" A standard button ")]),example:i(()=>[t(p(P),{onClick:l},{default:i(()=>[n(Te(a.value),1)]),_:1})]),_:1}))}},_S=`<template>
  <SuiButton primary>Save</SuiButton>
  <SuiButton secondary>Okay</SuiButton>
  <SuiButton>Cancel</SuiButton>
</template>`,bS={__name:"EmphasisDoc",setup(e){return(a,l)=>($(),D(M,{label:"Emphasis",code:_S},{description:i(()=>[n(" A button can be formatted to show different levels of emphasis ")]),example:i(()=>[t(p(P),{primary:""},{default:i(()=>[n("Save")]),_:1}),t(p(P),{secondary:""},{default:i(()=>[n("Okay")]),_:1}),t(p(P),null,{default:i(()=>[n("Cancel")]),_:1})]),_:1}))}},vS=`<template>
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
</template>`,yS={__name:"AnimatedDoc",setup(e){return(a,l)=>($(),D(M,{label:"Animated",code:vS},{description:i(()=>[n(" A button can animate to show hidden content ")]),example:i(()=>[t(p(P),{animated:""},{default:i(()=>[t(p(fi),{visible:""},{default:i(()=>[n("Next")]),_:1}),t(p(fi),{hidden:""},{default:i(()=>[t(p(W),{name:"arrow right"})]),_:1})]),_:1}),t(p(P),{animated:"vertical"},{default:i(()=>[t(p(fi),{visible:""},{default:i(()=>[t(p(W),{name:"shop"})]),_:1}),t(p(fi),{hidden:""},{default:i(()=>[n("Shop")]),_:1})]),_:1}),t(p(P),{animated:"fade"},{default:i(()=>[t(p(fi),{visible:""},{default:i(()=>[n(" Sign-up for a Pro account ")]),_:1}),t(p(fi),{hidden:""},{default:i(()=>[n("$12.99 a month")]),_:1})]),_:1})]),_:1}))}},SS=`<template>
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
</template>`,wS={__name:"LabeledDoc",setup(e){return(a,l)=>($(),D(M,{label:"Labeled",code:SS},{description:i(()=>[n(" A button can appear alongside a label ")]),example:i(()=>[t(p(P),{labeled:"right",as:"div"},{default:i(()=>[t(p(P),{icon:"heart",content:" Like"}),t(p(N),{basic:""},{default:i(()=>[n("2,048")]),_:1})]),_:1}),t(p(P),{labeled:"left",as:"div"},{default:i(()=>[t(p(N),{basic:"",pointing:"right"},{default:i(()=>[n("2,048")]),_:1}),t(p(P),{icon:"heart",content:" Like"})]),_:1}),t(p(P),{labeled:"left",as:"div"},{default:i(()=>[t(p(N),{basic:""},{default:i(()=>[n("1,048")]),_:1}),t(p(P),{icon:"fork"})]),_:1})]),_:1}))}},CS=`<template>
  <SuiButton icon="cloud" />
</template>`,AS={__name:"IconDoc",setup(e){return(a,l)=>($(),D(M,{label:"Icon",code:CS},{description:i(()=>[n(" A button can have only an icon ")]),example:i(()=>[t(p(P),{icon:"cloud"})]),_:1}))}},kS=`<template>
  <SuiButton labeled icon="pause" content="Pause" />
  <SuiButton labeled="right" icon="right arrow" content="Next" />
  <SuiButton labeled icon>
    <SuiIcon loading name="spinner" />
    Loading
  </SuiButton>
</template>`,xS={__name:"LabeledIconDoc",setup(e){return(a,l)=>($(),D(M,{label:"Labeled Icon",code:kS},{description:i(()=>[n(" A button can use an icon as a label ")]),example:i(()=>[t(p(P),{labeled:"",icon:"pause",content:"Pause"}),t(p(P),{labeled:"right",icon:"right arrow",content:"Next"}),t(p(P),{labeled:"",icon:""},{default:i(()=>[t(p(W),{loading:"",name:"spinner"}),n(" Loading ")]),_:1})]),_:1}))}},$S=`<template>
  <SuiButton basic primary>Primary</SuiButton>
  <SuiButton basic secondary>Secondary</SuiButton>
  <SuiButton basic positive>Positive</SuiButton>
  <SuiButton basic negative>Negative</SuiButton>
</template>`,BS={__name:"BasicDoc",setup(e){return(a,l)=>($(),D(M,{label:"Basic",code:$S},{description:i(()=>[n(" A basic button is less pronounced ")]),example:i(()=>[t(p(P),{basic:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(p(P),{basic:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(p(P),{basic:"",positive:""},{default:i(()=>[n("Positive")]),_:1}),t(p(P),{basic:"",negative:""},{default:i(()=>[n("Negative")]),_:1})]),_:1}))}},TS=`<template>
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
</template>`,LS={__name:"TertiaryDoc",setup(e){return(a,l)=>($(),D(M,{label:"Tertiary",code:TS},{description:i(()=>[n(" An none bordered less important button ")]),example:i(()=>[t(p(P),{tertiary:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(p(P),{tertiary:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(p(P),{tertiary:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(p(P),{tertiary:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(p(P),{tertiary:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(p(P),{tertiary:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(p(P),{tertiary:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(p(P),{tertiary:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(p(P),{tertiary:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(p(P),{tertiary:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(p(P),{tertiary:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(p(P),{tertiary:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(p(P),{tertiary:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(p(P),{tertiary:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(p(P),{tertiary:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},IS=`<template>
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
</template>`,DS={__name:"InvertedDoc",setup(e){return(a,l)=>($(),D(M,{label:"Inverted",code:IS},{description:i(()=>[n(" A button can be formatted to appear on dark backgrounds ")]),example:i(()=>[t(p(Le),{inverted:""},{default:i(()=>[t(p(P),{inverted:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(p(P),{inverted:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(p(P),{inverted:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(p(P),{inverted:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(p(P),{inverted:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(p(P),{inverted:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(p(P),{inverted:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(p(P),{inverted:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(p(P),{inverted:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(p(P),{inverted:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(p(P),{inverted:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(p(P),{inverted:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(p(P),{inverted:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(p(P),{inverted:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(p(P),{inverted:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1})]),_:1}))}},ES=`<template>
  <SuiButtonGroup>
    <SuiButton content="One" />
    <SuiButton content="Two" />
    <SuiButton content="Three" />
  </SuiButtonGroup>
</template>`,RS={__name:"ButtonsDoc",setup(e){return(a,l)=>($(),D(M,{label:"Buttons",code:ES},{description:i(()=>[n(" Buttons can exist together as a group ")]),example:i(()=>[t(p(dt),null,{default:i(()=>[t(p(P),{content:"One"}),t(p(P),{content:"Two"}),t(p(P),{content:"Three"})]),_:1})]),_:1}))}},zS=`<template>
  <SuiButtonGroup icon>
    <SuiButton icon="align left" />
    <SuiButton icon="align center" />
    <SuiButton icon="align right" />
    <SuiButton icon="align justify" />
  </SuiButtonGroup>
</template>`,PS={__name:"IconButtonsDoc",setup(e){return(a,l)=>($(),D(M,{label:"Icon Buttons",code:zS},{description:i(()=>[n(" Button groups can show groups of icons ")]),example:i(()=>[t(p(dt),{icon:""},{default:i(()=>[t(p(P),{icon:"align left"}),t(p(P),{icon:"align center"}),t(p(P),{icon:"align right"}),t(p(P),{icon:"align justify"})]),_:1})]),_:1}))}},MS=S("div",{class:"or"},null,-1),VS=S("div",{class:"or","data-text":"ou"},null,-1),FS=`<template>
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
</template>`,HS={__name:"ConditionalsDoc",setup(e){return(a,l)=>($(),D(M,{label:"Conditionals",code:FS},{description:i(()=>[n(" Button groups can contain conditionals ")]),example:i(()=>[t(p(dt),null,{default:i(()=>[t(p(P),{content:"Cancel"}),MS,t(p(P),{content:"Save",positive:""})]),_:1}),t(p(dt),null,{default:i(()=>[t(p(P),{content:"un"}),VS,t(p(P),{content:"deux",positive:""})]),_:1})]),_:1}))}},NS=`<template>
  <SuiButton active icon="user" content=" Follow" />
</template>`,OS={__name:"ActiveDoc",setup(e){return(a,l)=>($(),D(M,{label:"Active",code:NS},{description:i(()=>[n(" A button can show it is currently the active user selection ")]),example:i(()=>[t(p(P),{active:"",icon:"user",content:" Follow"})]),_:1}))}},jS=`<template>
  <SuiButton disabled icon="user" content=" Followed" />
</template>`,GS={__name:"DisabledDoc",setup(e){return(a,l)=>($(),D(M,{label:"Disabled",code:jS},{description:i(()=>[n(" A button can show it is currently unable to be interacted with ")]),example:i(()=>[t(p(P),{disabled:"",icon:"user",content:" Followed"})]),_:1}))}},qS=`<template>
  <SuiButton loading content="Loading" />
  <SuiButton loading="double" primary content="Loading" />
  <SuiButton loading="elastic" secondary content="Loading" />
</template>`,US={__name:"LoadingDoc",setup(e){return(a,l)=>($(),D(M,{label:"Loading",code:qS},{description:i(()=>[n(" A button can show a loading indicator ")]),example:i(()=>[t(p(P),{loading:"",content:"Loading"}),t(p(P),{loading:"double",primary:"",content:"Loading"}),t(p(P),{loading:"elastic",secondary:"",content:"Loading"})]),_:1}))}},YS=`<template>
  <SuiButton facebook icon="facebook" content=" Facebook" />
  <SuiButton twitter icon="twitter" content=" Twitter" />
  <SuiButton vk icon="vk" content="VK" />
  <SuiButton linkedin icon="linkedin" content=" LinkedIn" />
  <SuiButton instagram icon="instagram" content=" Instagram" />
  <SuiButton youtube icon="youtube" content=" YouTube" />
  <SuiButton whatsapp icon="whatsapp" content=" WhatsApp" />
  <SuiButton telegram icon="telegram" content=" Telegram" />
</template>`,JS={__name:"SocialDoc",setup(e){return(a,l)=>($(),D(M,{label:"Social",code:YS},{description:i(()=>[n(" A button can be formatted to link to a social website ")]),example:i(()=>[t(p(P),{facebook:"",icon:"facebook",content:" Facebook"}),t(p(P),{twitter:"",icon:"twitter",content:" Twitter"}),t(p(P),{vk:"",icon:"vk",content:"VK"}),t(p(P),{linkedin:"",icon:"linkedin",content:" LinkedIn"}),t(p(P),{instagram:"",icon:"instagram",content:" Instagram"}),t(p(P),{youtube:"",icon:"youtube",content:" YouTube"}),t(p(P),{whatsapp:"",icon:"whatsapp",content:" WhatsApp"}),t(p(P),{telegram:"",icon:"telegram",content:" Telegram"})]),_:1}))}},WS=`<template>
  <SuiButton size="mini" content="Mini" />
  <SuiButton size="tiny" content="Tiny" />
  <SuiButton size="small" content="Small" />
  <SuiButton size="medium" content="Medium" />
  <SuiButton size="large" content="Large" />
  <SuiButton size="big" content="Big" />
  <SuiButton size="huge" content="Huge" />
  <SuiButton size="massive" content="Massive" />
</template>`,KS={__name:"SizeDoc",setup(e){return(a,l)=>($(),D(M,{label:"Size",code:WS},{description:i(()=>[n(" A button can have different sizes ")]),example:i(()=>[t(p(P),{size:"mini",content:"Mini"}),t(p(P),{size:"tiny",content:"Tiny"}),t(p(P),{size:"small",content:"Small"}),t(p(P),{size:"medium",content:"Medium"}),t(p(P),{size:"large",content:"Large"}),t(p(P),{size:"big",content:"Big"}),t(p(P),{size:"huge",content:"Huge"}),t(p(P),{size:"massive",content:"Massive"})]),_:1}))}},XS=`<template>
  <SuiButton floated="left" content="Left Floated" />
  <SuiButton floated="right" content="Right Floated" />
</template>`,QS={__name:"FloatedDoc",setup(e){return(a,l)=>($(),D(M,{label:"Floated",code:XS},{description:i(()=>[n(" A button can be aligned to the left or right of its container ")]),example:i(()=>[t(p(P),{floated:"left",content:"Left Floated"}),t(p(P),{floated:"right",content:"Right Floated"})]),_:1}))}},ZS=`<template>
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
</template>`,ew={__name:"ColoredDoc",setup(e){return(a,l)=>($(),D(M,{label:"Colored",code:ZS},{description:i(()=>[n(" A button can have different colors ")]),example:i(()=>[t(p(P),{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(p(P),{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(p(P),{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(p(P),{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(p(P),{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(p(P),{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(p(P),{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(p(P),{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(p(P),{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(p(P),{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(p(P),{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(p(P),{color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(p(P),{color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},tw=`<template>
  <SuiButton compact content="Hold" />
  <SuiButton compact icon="pause" />
  <SuiButton compact labeled icon="pause" content="Pause" />
</template>`,iw={__name:"CompactDoc",setup(e){return(a,l)=>($(),D(M,{label:"Compact",code:tw},{description:i(()=>[n(" A button can reduce its padding to fit into tighter spaces ")]),example:i(()=>[t(p(P),{compact:"",content:"Hold"}),t(p(P),{compact:"",icon:"pause"}),t(p(P),{compact:"",labeled:"",icon:"pause",content:"Pause"})]),_:1}))}},aw=`<template>
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
<\/script>`,lw={__name:"ToggleDoc",setup(e){const a=G(!1);return(l,o)=>($(),D(M,{label:"Toggle",code:aw},{description:i(()=>[n(" A button can be formatted to toggle on and off ")]),example:i(()=>[t(p(P),{toggle:"",active:a.value,onClick:()=>a.value=!a.value,content:a.value?"Voted":"Vote",style:{"min-width":"200px"}},null,8,["active","onClick","content"])]),_:1}))}},nw=`<template>
  <SuiButton positive content="Positive Button" />
</template>`,ow={__name:"PositiveDoc",setup(e){return(a,l)=>($(),D(M,{label:"Positive",code:nw},{description:i(()=>[n(" A button can hint towards a positive consequence ")]),example:i(()=>[t(p(P),{positive:"",content:"Positive Button"})]),_:1}))}},sw=`<template>
  <SuiButton negative content="Negative Button" />
</template>`,rw={__name:"NegativeDoc",setup(e){return(a,l)=>($(),D(M,{label:"Negative",code:sw},{description:i(()=>[n(" A button can hint towards a negative consequence ")]),example:i(()=>[t(p(P),{negative:"",content:"Negative Button"})]),_:1}))}},uw=`<template>
  <SuiButton fluid content="Fits container" />
</template>`,cw={__name:"FluidDoc",setup(e){return(a,l)=>($(),D(M,{label:"Fluid",code:uw},{description:i(()=>[n(" A button can take the width of its container ")]),example:i(()=>[t(p(P),{fluid:"",content:"Fits container"})]),_:1}))}},dw=`<template>
  <SuiButton circular icon="settings" />
</template>`,mw={__name:"CircularDoc",setup(e){return(a,l)=>($(),D(M,{label:"Circular",code:dw},{description:i(()=>[n(" A button can be circular ")]),example:i(()=>[t(p(P),{circular:"",icon:"settings"})]),_:1}))}},pw=S("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?",-1),fw=`<template>
  <SuiButton attached="top" content="Top" />
  <SuiSegment>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?</p>
  </SuiSegment>
  <SuiButton attached="bottom" content="Bottom" />
</template>`,gw={__name:"VerticallyAttachedDoc",setup(e){return(a,l)=>($(),D(M,{label:"Vertically Attached",code:fw},{description:i(()=>[n(" A button can be attached to the top or bottom of other content ")]),example:i(()=>[t(p(P),{attached:"top",content:"Top"}),t(p(Le),{attached:""},{default:i(()=>[pw]),_:1}),t(p(P),{attached:"bottom",content:"Bottom"})]),_:1}))}},hw=`<template>
  <SuiButton attached="left" content="Left" />
  <SuiButton attached="right" content="Right" />
</template>`,_w={__name:"HorizontallyAttachedDoc",setup(e){return(a,l)=>($(),D(M,{label:"Horizontally Attached",code:hw},{description:i(()=>[n(" A button can be attached to the left or right of other content ")]),example:i(()=>[t(p(P),{attached:"left",content:"Left"}),t(p(P),{attached:"right",content:"Right"})]),_:1}))}},bw=`<template>
  <SuiButtonGroup vertical>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,vw={__name:"VerticalButtonsDoc",setup(e){return(a,l)=>($(),D(M,{label:"Vertical Buttons",code:bw},{description:i(()=>[n(" Groups can be formatted to appear vertically ")]),example:i(()=>[t(p(dt),{vertical:""},{default:i(()=>[t(p(P),null,{default:i(()=>[n("Feed")]),_:1}),t(p(P),null,{default:i(()=>[n("Messages")]),_:1}),t(p(P),null,{default:i(()=>[n("Events")]),_:1}),t(p(P),null,{default:i(()=>[n("Photos")]),_:1})]),_:1})]),_:1}))}},yw=`<template>
  <SuiButtonGroup stackable>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,Sw={__name:"StackableButtonsDoc",setup(e){return(a,l)=>($(),D(M,{label:"Stackable Buttons",code:yw},{description:i(()=>[n(" Horizontal groups can automatically be stacked on mobile devices ")]),example:i(()=>[t(p(dt),{stackable:""},{default:i(()=>[t(p(P),null,{default:i(()=>[n("Feed")]),_:1}),t(p(P),null,{default:i(()=>[n("Messages")]),_:1}),t(p(P),null,{default:i(()=>[n("Events")]),_:1}),t(p(P),null,{default:i(()=>[n("Photos")]),_:1})]),_:1})]),_:1}))}},ww=`<template>
  <SuiButtonGroup vertical labeled icon>
    <SuiButton icon="pause" content="Pause" />
    <SuiButton icon="play" content="Play" />
    <SuiButton icon="shuffle" content="Shuffle" />
  </SuiButtonGroup>
</template>`,Cw={__name:"LabeledIconButtonsDoc",setup(e){return(a,l)=>($(),D(M,{label:"Icon Buttons",code:ww},{description:i(()=>[n(" Groups can be formatted as labeled icons ")]),example:i(()=>[t(p(dt),{vertical:"",labeled:"",icon:""},{default:i(()=>[t(p(P),{icon:"pause",content:"Pause"}),t(p(P),{icon:"play",content:"Play"}),t(p(P),{icon:"shuffle",content:"Shuffle"})]),_:1})]),_:1}))}},Aw=`<template>
  <SuiButtonGroup>
    <SuiButton labeled icon="left chevron" content="Back" />
    <SuiButton icon="stop" content="Stop" />
    <SuiButton icon labeled="right">
      <SuiIcon name="right chevron" />
      Forward
    </SuiButton>
  </SuiButtonGroup>
</template>`,kw={__name:"MixedGroupDoc",setup(e){return(a,l)=>($(),D(M,{label:"Mixed Group",code:Aw},{description:i(()=>[n(" Button groups can show groups of icons ")]),example:i(()=>[t(p(dt),null,{default:i(()=>[t(p(P),{labeled:"",icon:"left chevron",content:"Back"}),t(p(P),{icon:"stop",content:"Stop"}),t(p(P),{icon:"",labeled:"right"},{default:i(()=>[t(p(W),{name:"right chevron"}),n(" Forward ")]),_:1})]),_:1})]),_:1}))}},xw=`<template>
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
</template>`,$w={__name:"EqualWidthDoc",setup(e){return(a,l)=>($(),D(M,{label:"Equal Width",code:xw},{description:i(()=>[n(" Groups can have their widths divided evenly ")]),example:i(()=>[t(p(dt),{widths:5},{default:i(()=>[t(p(P),null,{default:i(()=>[n("Overview")]),_:1}),t(p(P),null,{default:i(()=>[n("Specs")]),_:1}),t(p(P),null,{default:i(()=>[n("Warranty")]),_:1}),t(p(P),null,{default:i(()=>[n("Reviews")]),_:1}),t(p(P),null,{default:i(()=>[n("Support")]),_:1})]),_:1}),t(p(dt),{widths:3},{default:i(()=>[t(p(P),null,{default:i(()=>[n("Overview")]),_:1}),t(p(P),null,{default:i(()=>[n("Specs")]),_:1}),t(p(P),null,{default:i(()=>[n("Support")]),_:1})]),_:1})]),_:1}))}},Bw=`<template>
  <SuiButtonGroup color="blue">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Tw={__name:"ColoredButtonsDoc",setup(e){return(a,l)=>($(),D(M,{label:"Colored Buttons",code:Bw},{description:i(()=>[n(" Groups can have a shared color ")]),example:i(()=>[t(p(dt),{color:"blue"},{default:i(()=>[t(p(P),null,{default:i(()=>[n("One")]),_:1}),t(p(P),null,{default:i(()=>[n("Two")]),_:1}),t(p(P),null,{default:i(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},Lw=`<template>
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
</template>`,Iw={__name:"BasicButtonsDoc",setup(e){return(a,l)=>($(),D(M,{label:"Basic Buttons",code:Lw},{description:i(()=>[n(" A button group can be less pronounced ")]),example:i(()=>[t(p(dt),{basic:""},{default:i(()=>[t(p(P),null,{default:i(()=>[n("One")]),_:1}),t(p(P),null,{default:i(()=>[n("Two")]),_:1}),t(p(P),null,{default:i(()=>[n("Three")]),_:1})]),_:1}),t(p(dt),null,{default:i(()=>[t(p(P),{basic:"",color:"red"},{default:i(()=>[n("One")]),_:1}),t(p(P),{basic:"",color:"blue"},{default:i(()=>[n("Two")]),_:1}),t(p(P),{basic:"",color:"green"},{default:i(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},Dw=`<template>
  <SuiButtonGroup size="large">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Ew={__name:"GroupSizesDoc",setup(e){return(a,l)=>($(),D(M,{label:"Group Sizes",code:Dw},{description:i(()=>[n(" Groups can have a shared color ")]),example:i(()=>[t(p(dt),{size:"large"},{default:i(()=>[t(p(P),null,{default:i(()=>[n("One")]),_:1}),t(p(P),null,{default:i(()=>[n("Two")]),_:1}),t(p(P),null,{default:i(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},Rw={__name:"Button",setup(e){const a=[{id:"button",label:"Button",category:"Types",component:hS},{id:"emphasis",label:"Emphasis",category:"Types",component:bS},{id:"animated",label:"Animated",category:"Types",component:yS},{id:"labeled",label:"Labeled",category:"Types",component:wS},{id:"icon",label:"Icon",category:"Types",component:AS},{id:"labeled-icon",label:"Labeled Icon",category:"Types",component:xS},{id:"basic",label:"Basic",category:"Types",component:BS},{id:"tertiary",label:"Tertiary",category:"Types",component:LS},{id:"inverted",label:"Inverted",category:"Types",component:DS},{id:"buttons",label:"Buttons",category:"Groups",component:RS},{id:"icon-buttons",label:"Icon Buttons",category:"Groups",component:PS},{id:"content",label:"Content",category:"Content",component:HS},{id:"active",label:"Active",category:"States",component:OS},{id:"disabled",label:"Disabled",category:"States",component:GS},{id:"loading",label:"Loading",category:"States",component:US},{id:"social",label:"Social",category:"Variations",component:JS},{id:"size",label:"Size",category:"Variations",component:KS},{id:"floated",label:"Floated",category:"Variations",component:QS},{id:"colored",label:"Colored",category:"Variations",component:ew},{id:"compact",label:"Compact",category:"Variations",component:iw},{id:"toggle",label:"Toggle",category:"Variations",component:lw},{id:"positive",label:"Positive",category:"Variations",component:ow},{id:"negative",label:"Negative",category:"Variations",component:rw},{id:"fluid",label:"Fluid",category:"Variations",component:cw},{id:"circular",label:"Circular",category:"Variations",component:mw},{id:"vertically-attached",label:"Vertically Attached",category:"Variations",component:gw},{id:"horizontally-attached",label:"Horizontally Attached",category:"Variations",component:_w},{id:"vertical-buttons",label:"Vertical Buttons",category:"Group Variations",component:vw},{id:"stackable-buttons",label:"Stackable Buttons",category:"Group Variations",component:Sw},{id:"labeled-icon-buttons",label:"Labeled Icon Buttons",category:"Group Variations",component:Cw},{id:"mixed-group",label:"Mixed Group",category:"Group Variations",component:kw},{id:"equal-width",label:"Equal Width",category:"Group Variations",component:$w},{id:"colored-buttons",label:"Colored Buttons",category:"Group Variations",component:Tw},{id:"basic-buttons",label:"Basic Buttons",category:"Group Variations",component:Iw},{id:"group-sizes",label:"Group Sizes",category:"Group Variations",component:Ew}];return(l,o)=>($(),D(Ct,{title:"Button",description:"A button indicates a possible user action","component-docs":a}))}},zw=S("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Pw=`<template>
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
</template>`,Mw={__name:"ContainerDoc",setup(e){return(a,l)=>($(),D(M,{label:"Container",code:Pw},{description:i(()=>[n(" A standard container ")]),example:i(()=>[t(p(vi),null,{default:i(()=>[zw]),_:1})]),_:1}))}},Vw=S("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Fw=`<template>
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
</template>`,Hw={__name:"TextContainerDoc",setup(e){return(a,l)=>($(),D(M,{label:"Text Container",code:Fw},{description:i(()=>[n(" A container can reduce its maximum width to more naturally accommodate a single column of text ")]),example:i(()=>[t(p(vi),{text:""},{default:i(()=>[t(p(fe),{as:"h2"},{default:i(()=>[n("Header")]),_:1}),Vw]),_:1})]),_:1}))}},Nw=`<template>
  <SuiContainer textAlign="left">Left Aligned</SuiContainer>
  <SuiContainer textAlign="center">Center Aligned</SuiContainer>
  <SuiContainer textAlign="right">Right Aligned</SuiContainer>
</template>`,Ow={__name:"TextAlignmentDoc",setup(e){return(a,l)=>($(),D(M,{label:"Text Alignment",code:Nw},{description:i(()=>[n(" A container can specify its text alignment ")]),example:i(()=>[t(p(vi),{textAlign:"left"},{default:i(()=>[n("Left Aligned")]),_:1}),t(p(vi),{textAlign:"center"},{default:i(()=>[n("Center Aligned")]),_:1}),t(p(vi),{textAlign:"right"},{default:i(()=>[n("Right Aligned")]),_:1})]),_:1}))}},jw=S("p",null," Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today. ",-1),Gw=`<template>
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
</template>`,qw={__name:"FluidDoc",setup(e){return(a,l)=>($(),D(M,{label:"Fluid",code:Gw},{description:i(()=>[n(" A fluid container has no maximum width ")]),example:i(()=>[t(p(vi),{fluid:""},{default:i(()=>[t(p(fe),{as:"h2"},{default:i(()=>[n("Dogs Roles with Humans")]),_:1}),jw]),_:1})]),_:1}))}},Uw={__name:"Container",setup(e){const a=[{id:"container",label:"Container",category:"Types",component:Mw},{id:"text-container",label:"Text Container",category:"Types",component:Hw},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:Ow},{id:"fluid",label:"Fluid",category:"Variations",component:qw}];return(l,o)=>($(),D(Ct,{title:"Container",description:"A container limits content to a maximum width","component-docs":a}))}},Yw=`<template>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider />
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,Jw={__name:"DividerDoc",setup(e){return(a,l)=>($(),D(M,{label:"Divider",code:Yw},{description:i(()=>[n(" A standard divider ")]),example:i(()=>[t(p(ce),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(p(Oe)),t(p(ce),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},Ww=S("label",null,"Username",-1),Kw=S("input",{type:"text",placeholder:"Username"},null,-1),Xw=S("label",null,"Password",-1),Qw=S("input",{type:"password",placeholder:"Password"},null,-1),Zw=`<template>
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
</template>`,eC={__name:"VerticalDividerDoc",setup(e){return(a,l)=>($(),D(M,{label:"Vertical Divider",code:Zw},{description:i(()=>[n(" A divider can segment content vertically. ")]),example:i(()=>[t(p(Le),{placeholder:""},{default:i(()=>[t(p(Sa),{columns:"equal"},{default:i(()=>[t(p(bt),null,{default:i(()=>[t(p(Ul),null,{default:i(()=>[t(p(hi),null,{default:i(()=>[Ww,Kw]),_:1}),t(p(hi),null,{default:i(()=>[Xw,Qw]),_:1}),t(p(P),{primary:""},{default:i(()=>[n("Login")]),_:1})]),_:1})]),_:1}),t(p(bt),{textAlign:"middle"},{default:i(()=>[t(p(P),{secondary:"",icon:"signup",content:"Sign Up"})]),_:1})]),_:1}),t(p(Oe),{vertical:""},{default:i(()=>[n("Or")]),_:1})]),_:1})]),_:1}))}},tC=`<template>
  <SuiSegment basic textAlign="center">
    <SuiInput icon="search" iconPosition="left" action="Search" placeholder="Order #" />
    <SuiDivider horizontal>Or</SuiDivider>
    <SuiButton labeled icon="add" color="green" content="Create New Order" />
  </SuiSegment>
</template>`,iC={__name:"HorizontalDividerDoc",setup(e){return(a,l)=>($(),D(M,{label:"Horizontal Divider",code:tC},{description:i(()=>[n(" A divider can segment content horizontally ")]),example:i(()=>[t(p(Le),{basic:"",textAlign:"center"},{default:i(()=>[t(p(et),{icon:"search",iconPosition:"left",action:"Search",placeholder:"Order #"}),t(p(Oe),{horizontal:""},{default:i(()=>[n("Or")]),_:1}),t(p(P),{labeled:"",icon:"add",color:"green",content:"Create New Order"})]),_:1})]),_:1}))}},aC=`<template>
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
</template>`,lC={__name:"HorizontalAlignmentDoc",setup(e){return(a,l)=>($(),D(M,{label:"Horizontal Alignment",code:aC},{description:i(()=>[n(" A horizontal divider can be aligned ")]),example:i(()=>[t(p(Oe),{horizontal:"",textAlign:"left"},{default:i(()=>[t(p(W),{name:"left align"}),n(" Left Aligned ")]),_:1}),t(p(Oe),{horizontal:"",textAlign:"center"},{default:i(()=>[t(p(W),{name:"center align"}),n(" Center Aligned ")]),_:1}),t(p(Oe),{horizontal:"",textAlign:"right"},{default:i(()=>[t(p(W),{name:"right align"}),n(" Right Aligned ")]),_:1})]),_:1}))}},nC=`<template>
  <SuiSegment inverted>
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider inverted />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider horizontal inverted>Horizontal</SuiDivider>
  </SuiSegment>
</template>`,oC={__name:"InvertedDoc",setup(e){return(a,l)=>($(),D(M,{label:"Inverted",code:nC},{description:i(()=>[n(" A divider can have its colors inverted ")]),example:i(()=>[t(p(Le),{inverted:""},{default:i(()=>[t(p(ce),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(p(Oe),{inverted:""}),t(p(ce),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(p(Oe),{horizontal:"",inverted:""},{default:i(()=>[n("Horizontal")]),_:1})]),_:1})]),_:1}))}},sC=`<template>
  <SuiSegment>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
    <SuiDivider fitted />
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
  </SuiSegment>
</template>`,rC={__name:"FittedDoc",setup(e){return(a,l)=>($(),D(M,{label:"Inverted",code:sC},{description:i(()=>[n(" A divider can be fitted, without any space above or below it. ")]),example:i(()=>[t(p(Le),null,{default:i(()=>[n(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),t(p(Oe),{fitted:""}),n(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. ")]),_:1})]),_:1}))}},uC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider hidden />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,cC={__name:"HiddenDoc",setup(e){return(a,l)=>($(),D(M,{label:"Hidden",code:uC},{description:i(()=>[n(" A hidden divider divides content without creating a dividing line ")]),example:i(()=>[t(p(fe),null,{default:i(()=>[n("Section One")]),_:1}),t(p(ce),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(p(Oe),{hidden:""}),t(p(fe),null,{default:i(()=>[n("Section Two")]),_:1}),t(p(ce),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},dC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider section />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,mC={__name:"SectionDoc",setup(e){return(a,l)=>($(),D(M,{label:"Section",code:dC},{description:i(()=>[n(" A divider can provide greater margins to divide sections of content ")]),example:i(()=>[t(p(fe),null,{default:i(()=>[n("Section One")]),_:1}),t(p(ce),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(p(Oe),{section:""}),t(p(fe),null,{default:i(()=>[n("Section Two")]),_:1}),t(p(ce),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},pC=`<template>
  <SuiSegment>
    <SuiHeader floated="right">Section One</SuiHeader>
    <SuiDivider clearing />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,fC={__name:"ClearingDoc",setup(e){return(a,l)=>($(),D(M,{label:"Clearing",code:pC},{description:i(()=>[n(" A divider can clear the contents above it ")]),example:i(()=>[t(p(Le),null,{default:i(()=>[t(p(fe),{floated:"right"},{default:i(()=>[n("Section One")]),_:1}),t(p(Oe),{clearing:""}),t(p(ce),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},gC=`<template>
  <SuiDivider size="mini">MINI</SuiDivider>
  <SuiDivider size="tiny">TINY</SuiDivider>
  <SuiDivider size="small">SMALL</SuiDivider>
  <SuiDivider size="large">LARGE</SuiDivider>
  <SuiDivider size="big">BIG</SuiDivider>
  <SuiDivider size="huge">HUGE</SuiDivider>
  <SuiDivider size="massive">MASSIVE</SuiDivider>
</template>`,hC={__name:"SizeDoc",setup(e){return(a,l)=>($(),D(M,{label:"Size",code:gC},{description:i(()=>[n(" A divider text can vary in size ")]),example:i(()=>[t(p(Oe),{horizontal:"",size:"mini"},{default:i(()=>[n("MINI")]),_:1}),t(p(Oe),{horizontal:"",size:"tiny"},{default:i(()=>[n("TINY")]),_:1}),t(p(Oe),{horizontal:"",size:"small"},{default:i(()=>[n("SMALL")]),_:1}),t(p(Oe),{horizontal:"",size:"large"},{default:i(()=>[n("LARGE")]),_:1}),t(p(Oe),{horizontal:"",size:"big"},{default:i(()=>[n("BIG")]),_:1}),t(p(Oe),{horizontal:"",size:"huge"},{default:i(()=>[n("HUGE")]),_:1}),t(p(Oe),{horizontal:"",size:"massive"},{default:i(()=>[n("MASSIVE")]),_:1})]),_:1}))}},_C={__name:"Divider",setup(e){const a=[{id:"divider",label:"Divider",category:"Types",component:Jw},{id:"vertical-divider",label:"Vertical Divider",category:"Types",component:eC},{id:"horizontal-divider",label:"Horizontal Divider",category:"Types",component:iC},{id:"horizontal-alignment",label:"Horizontal Alignment",category:"Types",component:lC},{id:"inverted",label:"Inverted",category:"Variations",component:oC},{id:"fitted",label:"Fitted",category:"Variations",component:rC},{id:"hidden",label:"Hidden",category:"Variations",component:cC},{id:"section",label:"Section",category:"Variations",component:mC},{id:"clearing",label:"Clearing",category:"Variations",component:fC},{id:"size",label:"Size",category:"Variations",component:hC}];return(l,o)=>($(),D(Ct,{title:"Divider",description:"A divider visually segments content into groups","component-docs":a}))}},bC=`<template>
  <SuiEmoji name="anguished" disabled />
</template>`,vC={__name:"DisabledDoc",setup(e){return(a,l)=>($(),D(M,{label:"Disabled",code:bC},{description:i(()=>[n(" An emoji can show that it is disabled ")]),example:i(()=>[t(p(St),{name:"anguished",disabled:""})]),_:1}))}},yC=`<template>
  <SuiEmoji name="angel" loading />
  <SuiEmoji name="blush" loading />
  <SuiEmoji name="grin" loading />
</template>`,SC={__name:"LoadingDoc",setup(e){return(a,l)=>($(),D(M,{label:"Loading",code:yC},{description:i(()=>[n(" An emoji can be used as a simple loader ")]),example:i(()=>[t(p(St),{name:"angel",loading:""}),t(p(St),{name:"blush",loading:""}),t(p(St),{name:"grin",loading:""})]),_:1}))}},wC=`<template>
  <SuiEmoji name="relaxed" size="small" />
  <SuiEmoji name="relaxed" size="medium" />
  <SuiEmoji name="relaxed" size="large" />
  <SuiEmoji name="relaxed" size="big" />
</template>`,CC={__name:"SizeDoc",setup(e){return(a,l)=>($(),D(M,{label:"Size",code:wC},{description:i(()=>[n(" An emoji can vary in size ")]),example:i(()=>[t(p(St),{name:"relaxed",size:"small"}),t(p(St),{name:"relaxed",size:"medium"}),t(p(St),{name:"relaxed",size:"large"}),t(p(St),{name:"relaxed",size:"big"})]),_:1}))}},AC=`<template>
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
</template>`,kC={__name:"AutosizingDoc",setup(e){return(a,l)=>($(),D(M,{label:"Autosizing",code:AC},{description:i(()=>[n(" If no specific size class is given, all emojis are automatically sized according to the current element font-size ")]),example:i(()=>[t(p(fe),{size:"small"},{default:i(()=>[n(" Within a Header "),t(p(St),{name:"relaxed"})]),_:1}),t(p(P),{as:"div",size:"large"},{default:i(()=>[n(" Within a Button "),t(p(St),{name:"relaxed"})]),_:1}),t(p(N),{size:"massive"},{default:i(()=>[n(" Within a Label "),t(p(St),{name:"relaxed"})]),_:1})]),_:1}))}},xC=`<template>
  <SuiEmoji link name="slight_smile" size="medium" />
</template>`,$C={__name:"LinkDoc",setup(e){return(a,l)=>($(),D(M,{label:"Link",code:xC},{description:i(()=>[n(" An emoji can be formatted as a link ")]),example:i(()=>[t(p(St),{link:"",name:"slight_smile",size:"medium"})]),_:1}))}},BC={__name:"Emoji",setup(e){const a=[{id:"disabled",label:"Disabled",category:"States",component:vC},{id:"loading",label:"Loading",category:"States",component:SC},{id:"size",label:"Size",category:"Variations",component:CC},{id:"autosizing",label:"Autosizing",category:"Variations",component:kC},{id:"link",label:"Link",category:"Variations",component:$C}];return(l,o)=>($(),D(Ct,{title:"Emoji",description:"An emoji is a glyph used to represent an emotional state","component-docs":a}))}},TC=`<template>
  <SuiFlag name="de" size="small" />
  <SuiFlag name="fr" size="medium" />
  <SuiFlag name="li" size="large" />
  <SuiFlag name="jp" size="big" />
  <SuiFlag name="gb" size="huge" />
  <SuiFlag name="un" size="massive" />
</template>`,LC={__name:"SizeDoc",setup(e){return(a,l)=>($(),D(M,{label:"Size",code:TC},{description:i(()=>[n(" A flag can vary in size ")]),example:i(()=>[t(p(Mt),{name:"de",size:"small"}),t(p(Mt),{name:"fr",size:"medium"}),t(p(Mt),{name:"li",size:"large"}),t(p(Mt),{name:"jp",size:"big"}),t(p(Mt),{name:"gb",size:"huge"}),t(p(Mt),{name:"un",size:"massive"})]),_:1}))}},IC=`<template>
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
</template>`,DC={__name:"AutosizingDoc",setup(e){return(a,l)=>($(),D(M,{label:"Autosizing",code:IC},{description:i(()=>[n(" If no specific size class is given, all flags are automatically sized according to the current element font-size ")]),example:i(()=>[t(p(fe),{size:"small"},{default:i(()=>[n(" Within a Header "),t(p(Mt),{name:"us"})]),_:1}),t(p(P),{as:"div",size:"large"},{default:i(()=>[n(" Within a Button "),t(p(Mt),{name:"eu"})]),_:1}),t(p(N),{size:"massive"},{default:i(()=>[n(" Within a Label "),t(p(Mt),{name:"pirate"})]),_:1})]),_:1}))}},EC={__name:"Flag",setup(e){const a=[{id:"size",label:"Size",category:"Types",component:LC},{id:"autosizing",label:"Autosizing",category:"Types",component:DC}];return(l,o)=>($(),D(Ct,{title:"Flag",description:"A flag is used to represent a political state","component-docs":a}))}},RC=`<template>
  <SuiHeader as="h1">First Header</SuiHeader>
  <SuiHeader as="h2">Second Header</SuiHeader>
  <SuiHeader as="h3">Third Header</SuiHeader>
  <SuiHeader as="h4">Fourth Header</SuiHeader>
  <SuiHeader as="h5">Fifth Header</SuiHeader>
</template>`,zC={__name:"PageHeadersDoc",setup(e){return(a,l)=>($(),D(M,{label:"Page Headers",code:RC},{description:i(()=>[n(" Headers may be oriented to give the hierarchy of a section in the context of the page ")]),example:i(()=>[t(p(fe),{as:"h1"},{default:i(()=>[n("First Header")]),_:1}),t(p(fe),{as:"h2"},{default:i(()=>[n("Second Header")]),_:1}),t(p(fe),{as:"h3"},{default:i(()=>[n("Third Header")]),_:1}),t(p(fe),{as:"h4"},{default:i(()=>[n("Fourth Header")]),_:1}),t(p(fe),{as:"h5"},{default:i(()=>[n("Fifth Header")]),_:1})]),_:1}))}},PC=`<template>
  <SuiHeader size="huge">Huge Header</SuiHeader>
  <SuiHeader size="large">Large Header</SuiHeader>
  <SuiHeader size="medium">Medium Header</SuiHeader>
  <SuiHeader size="small">Small Header</SuiHeader>
  <SuiHeader size="tiny">Tiny Header</SuiHeader>
</template>`,MC={__name:"ContentHeadersDoc",setup(e){return(a,l)=>($(),D(M,{label:"Content Headers",code:PC},{description:i(()=>[n(" Headers may be oriented to give the importance of a section in the context of the content that surrounds it ")]),example:i(()=>[t(p(fe),{size:"huge"},{default:i(()=>[n("Huge Header")]),_:1}),t(p(fe),{size:"large"},{default:i(()=>[n("Large Header")]),_:1}),t(p(fe),{size:"medium"},{default:i(()=>[n("Medium Header")]),_:1}),t(p(fe),{size:"small"},{default:i(()=>[n("Small Header")]),_:1}),t(p(fe),{size:"tiny"},{default:i(()=>[n("Tiny Header")]),_:1})]),_:1}))}},VC=`<template>
  <SuiHeader icon>
    <SuiIcon name="settings" />
    <SuiHeaderContent>
      Account Settings
    </SuiHeaderContent>
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,FC={__name:"IconHeadersDoc",setup(e){return(a,l)=>($(),D(M,{label:"Icon Headers",code:VC},{description:i(()=>[n(" A header can be formatted to emphasize an icon ")]),example:i(()=>[t(p(fe),{icon:""},{default:i(()=>[t(p(W),{name:"settings"}),t(p(Gl),null,{default:i(()=>[n(" Account Settings ")]),_:1}),t(p(ya),null,{default:i(()=>[n(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},HC=S("span",null,"$10.99",-1),NC=`<template>
  <SuiHeader sub>Price</SuiHeader>
  <span>$10.99</span>
</template>`,OC={__name:"SubHeadersDoc",setup(e){return(a,l)=>($(),D(M,{label:"Sub Headers",code:NC},{description:i(()=>[n(" Headers may be formatted to label smaller or de-emphasized content. ")]),example:i(()=>[t(p(fe),{sub:""},{default:i(()=>[n("Price")]),_:1}),HC]),_:1}))}},jC=`<template>
  <SuiHeader as="h2">
    <SuiImage src="/images/avatar/large/steve.jpg" avatar />
    Steve
  </SuiHeader>
</template>`,GC={__name:"ImageDoc",setup(e){return(a,l)=>($(),D(M,{label:"Image",code:jC},{description:i(()=>[n(" A header may contain an image ")]),example:i(()=>[t(p(fe),{as:"h2"},{default:i(()=>[t(p(ce),{src:"/vue-fomantic-ui/images/avatar/large/steve.jpg",avatar:""}),n(" Steve ")]),_:1})]),_:1}))}},qC=`<template>
  <SuiHeader as="h2">
    <SuiIcon name="plug" />
    <SuiHeaderContent>
      Uptime Guarantee
    </SuiHeaderContent>
  </SuiHeader>
</template>`,UC={__name:"IconDoc",setup(e){return(a,l)=>($(),D(M,{label:"Icon",code:qC},{description:i(()=>[n(" A header may contain an Icon ")]),example:i(()=>[t(p(fe),{as:"h2"},{default:i(()=>[t(p(W),{name:"plug"}),t(p(Gl),null,{default:i(()=>[n(" Uptime Guarantee ")]),_:1})]),_:1})]),_:1}))}},YC=`<template>
  <SuiHeader as="h2">
    Account Settings
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,JC={__name:"SubheaderDoc",setup(e){return(a,l)=>($(),D(M,{label:"Subheader",code:YC},{description:i(()=>[n(" Headers may contain subheaders ")]),example:i(()=>[t(p(fe),{as:"h2"},{default:i(()=>[n(" Account Settings "),t(p(ya),null,{default:i(()=>[n(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},WC=`<template>
  <SuiHeader disabled>
    Disabled Header
  </SuiHeader>
</template>`,KC={__name:"DisabledDoc",setup(e){return(a,l)=>($(),D(M,{label:"Disabled",code:WC},{description:i(()=>[n(" A header can show that it is inactive ")]),example:i(()=>[t(p(fe),{disabled:""},{default:i(()=>[n(" Disabled Header ")]),_:1})]),_:1}))}},XC=`<template>
  <SuiHeader as="h3" dividing>
    Dividing Header
  </SuiHeader>
</template>`,QC={__name:"DividingDoc",setup(e){return(a,l)=>($(),D(M,{label:"Dividing",code:XC},{description:i(()=>[n(" A header can be formatted to divide itself from the content below it ")]),example:i(()=>[t(p(fe),{as:"h3",dividing:""},{default:i(()=>[n(" Dividing Header ")]),_:1})]),_:1}))}},ZC=`<template>
  <SuiHeader as="h3" block>
    Block Header
  </SuiHeader>
</template>`,eA={__name:"BlockDoc",setup(e){return(a,l)=>($(),D(M,{label:"Block",code:ZC},{description:i(()=>[n(" A header can be formatted to appear inside a content block ")]),example:i(()=>[t(p(fe),{as:"h3",block:""},{default:i(()=>[n(" Block Header ")]),_:1})]),_:1}))}},tA=`<template>
  <SuiHeader as="h2" attached="top">
    Attached Header
  </SuiHeader>
  <SuiSegment attached>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </SuiSegment>
</template>`,iA={__name:"AttachedDoc",setup(e){return(a,l)=>($(),D(M,{label:"Attached",code:tA},{description:i(()=>[n(" A header can be attached to other content, like a segment ")]),example:i(()=>[t(p(fe),{as:"h2",attached:"top"},{default:i(()=>[n(" Attached Header ")]),_:1}),t(p(Le),{attached:""},{default:i(()=>[n(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),_:1})]),_:1}))}},aA=`<template>
  <SuiSegment clearing>
    <SuiHeader as="h3" floated="right">
      Go Forward
    </SuiHeader>
    <SuiHeader as="h3" floated="left">
      Go Back
    </SuiHeader>
  </SuiSegment>
</template>`,lA={__name:"FloatingDoc",setup(e){return(a,l)=>($(),D(M,{label:"Floating",code:aA},{description:i(()=>[n(" A header can sit to the left or right of other content ")]),example:i(()=>[t(p(Le),{clearing:""},{default:i(()=>[t(p(fe),{as:"h3",floated:"right"},{default:i(()=>[n(" Go Forward ")]),_:1}),t(p(fe),{as:"h3",floated:"left"},{default:i(()=>[n(" Go Back ")]),_:1})]),_:1})]),_:1}))}},nA=`<template>
  <SuiSegment>
    <SuiHeader as="h3" textAlign="right">Float Right</SuiHeader>
    <SuiHeader as="h3" textAlign="left">Float Left</SuiHeader>
    <SuiHeader as="h3" textAlign="justified">
      This text takes up the full width of the container
    </SuiHeader>
    <SuiHeader as="h3" textAlign="center">Centered</SuiHeader>
  </SuiSegment>
</template>`,oA={__name:"TextAlignmentDoc",setup(e){return(a,l)=>($(),D(M,{label:"Text Alignment",code:nA},{description:i(()=>[n(" A header can have its text aligned to a side ")]),example:i(()=>[t(p(Le),null,{default:i(()=>[t(p(fe),{as:"h3",textAlign:"right"},{default:i(()=>[n("Float Right")]),_:1}),t(p(fe),{as:"h3",textAlign:"left"},{default:i(()=>[n("Float Left")]),_:1}),t(p(fe),{as:"h3",textAlign:"justified"},{default:i(()=>[n(" This text takes up the full width of the container ")]),_:1}),t(p(fe),{as:"h3",textAlign:"center"},{default:i(()=>[n("Centered")]),_:1})]),_:1})]),_:1}))}},sA=`<template>
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
</template>`,rA={__name:"ColoredDoc",setup(e){return(a,l)=>($(),D(M,{label:"Colored",code:sA},{description:i(()=>[n(" A header can be formatted with different colors ")]),example:i(()=>[t(p(fe),{as:"h4",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(p(fe),{as:"h4",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(p(fe),{as:"h4",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(p(fe),{as:"h4",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(p(fe),{as:"h4",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(p(fe),{as:"h4",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(p(fe),{as:"h4",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(p(fe),{as:"h4",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(p(fe),{as:"h4",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(p(fe),{as:"h4",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(p(fe),{as:"h4",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(p(fe),{as:"h4",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(p(fe),{as:"h4",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(p(fe),{as:"h4",color:"grey"},{default:i(()=>[n("Grey")]),_:1})]),_:1}))}},uA=`<template>
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
</template>`,cA={__name:"InvertedDoc",setup(e){return(a,l)=>($(),D(M,{label:"Colored",code:uA},{description:i(()=>[n(" A header can have its colors inverted for contrast ")]),example:i(()=>[t(p(Le),{inverted:""},{default:i(()=>[t(p(fe),{as:"h4",inverted:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(p(fe),{as:"h4",inverted:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(p(fe),{as:"h4",inverted:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(p(fe),{as:"h4",inverted:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(p(fe),{as:"h4",inverted:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(p(fe),{as:"h4",inverted:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(p(fe),{as:"h4",inverted:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(p(fe),{as:"h4",inverted:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(p(fe),{as:"h4",inverted:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(p(fe),{as:"h4",inverted:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(p(fe),{as:"h4",inverted:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(p(fe),{as:"h4",inverted:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1})]),_:1})]),_:1}))}},dA={__name:"Header",setup(e){const a=[{id:"page-headers",label:"Page Headers",category:"Types",component:zC},{id:"content-headers",label:"Content Headers",category:"Types",component:MC},{id:"icon-headers",label:"Icon Headers",category:"Types",component:FC},{id:"sub-headers",label:"Sub Headers",category:"Types",component:OC},{id:"image",label:"Image",category:"Content",component:GC},{id:"icon",label:"Icon",category:"Content",component:UC},{id:"subheader",label:"Subheader",category:"Content",component:JC},{id:"disabled",label:"Disabled",category:"States",component:KC},{id:"dividing",label:"Dividing",category:"Variations",component:QC},{id:"block",label:"Block",category:"Variations",component:eA},{id:"attached",label:"Attached",category:"Variations",component:iA},{id:"floating",label:"Floating",category:"Variations",component:lA},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:oA},{id:"colored",label:"Colored",category:"Variations",component:rA},{id:"inverted",label:"Inverted",category:"Variations",component:cA}];return(l,o)=>($(),D(Ct,{title:"Header",description:"A header provides a short summary of content","component-docs":a}))}},mA=`<template>
  <SuiIcon name="users" disabled />
</template>`,pA={__name:"DisabledDoc",setup(e){return(a,l)=>($(),D(M,{label:"Disabled",code:mA},{description:i(()=>[n(" An icon can show that it is disabled ")]),example:i(()=>[t(p(W),{name:"users",disabled:""})]),_:1}))}},fA=`<template>
  <SuiIcon name="spinner" loading />
  <SuiIcon name="notched circle" loading />
  <SuiIcon name="asterisk" loading />
</template>`,gA={__name:"LoadingDoc",setup(e){return(a,l)=>($(),D(M,{label:"Loading",code:fA},{description:i(()=>[n(" An icon can be used as a simple loader ")]),example:i(()=>[t(p(W),{name:"spinner",loading:""}),t(p(W),{name:"notched circle",loading:""}),t(p(W),{name:"asterisk",loading:""})]),_:1}))}},hA=S("br",null,null,-1),_A=`<template>
  <div>
    This icon
    <SuiIcon name="help" fitted />
    is fitted.
    <br />
    This icon
    <SuiIcon name="help" />
    is not fitted.
  </div>
</template>`,bA={__name:"FittedDoc",setup(e){return(a,l)=>($(),D(M,{label:"Fitted",code:_A},{description:i(()=>[n(" An icon can be fitted, without any space to the left or right of it. ")]),example:i(()=>[S("div",null,[n(" This icon "),t(p(W),{name:"help",fitted:""}),n(" is fitted. "),hA,n(" This icon "),t(p(W),{name:"help"}),n(" is not fitted. ")])]),_:1}))}},vA=`<template>
  <SuiIcon name="home" size="mini" />
  <SuiIcon name="home" size="tiny" />
  <SuiIcon name="home" size="small" />
  <SuiIcon name="home" />
  <SuiIcon name="home" size="large" />
  <SuiIcon name="home" size="big" />
  <SuiIcon name="home" size="huge" />
  <SuiIcon name="home" size="massive" />
</template>`,yA={__name:"SizeDoc",setup(e){return(a,l)=>($(),D(M,{label:"Size",code:vA},{description:i(()=>[n(" An icon can vary in size ")]),example:i(()=>[t(p(W),{name:"home",size:"mini"}),t(p(W),{name:"home",size:"tiny"}),t(p(W),{name:"home",size:"small"}),t(p(W),{name:"home"}),t(p(W),{name:"home",size:"large"}),t(p(W),{name:"home",size:"big"}),t(p(W),{name:"home",size:"huge"}),t(p(W),{name:"home",size:"massive"})]),_:1}))}},SA=`<template>
  <SuiIcon name="close" link />
  <SuiIcon name="help" link />
</template>`,wA={__name:"LinkDoc",setup(e){return(a,l)=>($(),D(M,{label:"Link",code:SA},{description:i(()=>[n(" An icon can be formatted as a link ")]),example:i(()=>[t(p(W),{name:"close",link:""}),t(p(W),{name:"help",link:""})]),_:1}))}},CA=`<template>
  <SuiIcon name="cloud" flipped="horizontally" />
  <SuiIcon name="cloud" flipped="vertically" />
</template>`,AA={__name:"FlippedDoc",setup(e){return(a,l)=>($(),D(M,{label:"Flipped",code:CA},{description:i(()=>[n(" An icon can be flipped ")]),example:i(()=>[t(p(W),{name:"cloud",flipped:"horizontally"}),t(p(W),{name:"cloud",flipped:"vertically"})]),_:1}))}},kA=`<template>
  <SuiIcon name="cloud" rotated="clockwise" />
  <SuiIcon name="cloud" rotated="counterclockwise" />
</template>`,xA={__name:"RotatedDoc",setup(e){return(a,l)=>($(),D(M,{label:"Rotated",code:kA},{description:i(()=>[n(" An icon can be rotated ")]),example:i(()=>[t(p(W),{name:"cloud",rotated:"clockwise"}),t(p(W),{name:"cloud",rotated:"counterclockwise"})]),_:1}))}},$A=`<template>
  <SuiIcon name="users" circular />
  <SuiIcon name="users" circular color="teal" />
  <SuiIcon name="users" circular inverted />
  <SuiIcon name="users" circular inverted color="teal" />
</template>`,BA={__name:"CircularDoc",setup(e){return(a,l)=>($(),D(M,{label:"Circular",code:$A},{description:i(()=>[n(" An icon can be formatted to appear circular ")]),example:i(()=>[t(p(W),{name:"users",circular:""}),t(p(W),{name:"users",circular:"",color:"teal"}),t(p(W),{name:"users",circular:"",inverted:""}),t(p(W),{name:"users",circular:"",inverted:"",color:"teal"})]),_:1}))}},TA=`<template>
  <SuiIcon name="users" circular colored color="red" />
  <SuiIcon name="users" circular colored color="green" />
  <SuiIcon name="users" circular colored color="blue" />
</template>`,LA={__name:"CircularColoredDoc",setup(e){return(a,l)=>($(),D(M,{label:"Circular Colored",code:TA},{description:i(()=>[n(" The circular color can appear in the same color as the icon itself ")]),example:i(()=>[t(p(W),{name:"users",circular:"",colored:"",color:"red"}),t(p(W),{name:"users",circular:"",colored:"",color:"green"}),t(p(W),{name:"users",circular:"",colored:"",color:"blue"})]),_:1}))}},IA=`<template>
  <SuiIcon name="users" bordered />
  <SuiIcon name="users" bordered color="teal" />
  <SuiIcon name="users" bordered inverted color="black" />
  <SuiIcon name="users" bordered inverted color="teal" />
</template>`,DA={__name:"BorderedDoc",setup(e){return(a,l)=>($(),D(M,{label:"Bordered",code:IA},{description:i(()=>[n(" An icon can be formatted to appear bordered ")]),example:i(()=>[t(p(W),{name:"users",bordered:""}),t(p(W),{name:"users",bordered:"",color:"teal"}),t(p(W),{name:"users",bordered:"",inverted:"",color:"black"}),t(p(W),{name:"users",bordered:"",inverted:"",color:"teal"})]),_:1}))}},EA=`<template>
  <SuiIcon name="users" bordered colored color="red" />
  <SuiIcon name="users" bordered colored color="green" />
  <SuiIcon name="users" bordered colored color="blue" />
</template>`,RA={__name:"BorderedColoredDoc",setup(e){return(a,l)=>($(),D(M,{label:"Bordered Colored",code:EA},{description:i(()=>[n(" The bordered color can appear in the same color as the icon itself ")]),example:i(()=>[t(p(W),{name:"users",bordered:"",colored:"",color:"red"}),t(p(W),{name:"users",bordered:"",colored:"",color:"green"}),t(p(W),{name:"users",bordered:"",colored:"",color:"blue"})]),_:1}))}},zA=`<template>
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
</template>`,PA={__name:"ColoredDoc",setup(e){return(a,l)=>($(),D(M,{label:"Colored",code:zA},{description:i(()=>[n(" An icon can be formatted with different colors ")]),example:i(()=>[t(p(W),{name:"users",primary:""}),t(p(W),{name:"users",secondary:""}),t(p(W),{name:"users",color:"red"}),t(p(W),{name:"users",color:"orange"}),t(p(W),{name:"users",color:"yellow"}),t(p(W),{name:"users",color:"olive"}),t(p(W),{name:"users",color:"green"}),t(p(W),{name:"users",color:"teal"}),t(p(W),{name:"users",color:"blue"}),t(p(W),{name:"users",color:"violet"}),t(p(W),{name:"users",color:"purple"}),t(p(W),{name:"users",color:"pink"}),t(p(W),{name:"users",color:"brown"}),t(p(W),{name:"users",color:"grey"}),t(p(W),{name:"users",color:"black"})]),_:1}))}},MA=`<template>
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
</template>`,VA={__name:"InvertedDoc",setup(e){return(a,l)=>($(),D(M,{label:"Inverted",code:MA},{description:i(()=>[n(" An icon can have its colors inverted for contrast ")]),example:i(()=>[t(p(W),{name:"users",inverted:""}),t(p(W),{name:"users",inverted:"",primary:""}),t(p(W),{name:"users",inverted:"",secondary:""}),t(p(W),{name:"users",inverted:"",color:"red"}),t(p(W),{name:"users",inverted:"",color:"orange"}),t(p(W),{name:"users",inverted:"",color:"yellow"}),t(p(W),{name:"users",inverted:"",color:"olive"}),t(p(W),{name:"users",inverted:"",color:"green"}),t(p(W),{name:"users",inverted:"",color:"teal"}),t(p(W),{name:"users",inverted:"",color:"blue"}),t(p(W),{name:"users",inverted:"",color:"violet"}),t(p(W),{name:"users",inverted:"",color:"purple"}),t(p(W),{name:"users",inverted:"",color:"pink"}),t(p(W),{name:"users",inverted:"",color:"brown"}),t(p(W),{name:"users",inverted:"",color:"grey"})]),_:1}))}},FA=`<template>
  <SuiIconGroup size="huge">
    <SuiIcon name="circle outline" size="big" />
    <SuiIcon name="user" />
  </SuiIconGroup>
  <SuiIconGroup size="huge">
    <SuiIcon name="dont" size="big" color="red" />
    <SuiIcon name="user" color="black" />
  </SuiIconGroup>
</template>`,HA={__name:"IconsDoc",setup(e){return(a,l)=>($(),D(M,{label:"Icons",code:FA},{description:i(()=>[n(" Several icons can be used together as a group ")]),example:i(()=>[t(p(gi),{size:"huge"},{default:i(()=>[t(p(W),{name:"circle outline",size:"big"}),t(p(W),{name:"user"})]),_:1}),t(p(gi),{size:"huge"},{default:i(()=>[t(p(W),{name:"dont",size:"big",color:"red"}),t(p(W),{name:"user",color:"black"})]),_:1})]),_:1}))}},NA=`<template>
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
</template>`,OA={__name:"CornerIconDoc",setup(e){return(a,l)=>($(),D(M,{label:"Corner Icon",code:NA},{description:i(()=>[n(" A group of icons can display a smaller corner icon ")]),example:i(()=>[t(p(gi),{size:"huge"},{default:i(()=>[t(p(W),{name:"puzzle"}),t(p(W),{name:"add",corner:"top left"})]),_:1}),t(p(gi),{size:"huge"},{default:i(()=>[t(p(W),{name:"puzzle"}),t(p(W),{name:"add",corner:"top right"})]),_:1}),t(p(gi),{size:"huge"},{default:i(()=>[t(p(W),{name:"puzzle"}),t(p(W),{name:"add",corner:"bottom left"})]),_:1}),t(p(gi),{size:"huge"},{default:i(()=>[t(p(W),{name:"puzzle"}),t(p(W),{name:"add",corner:"bottom right"})]),_:1})]),_:1}))}},jA={__name:"Icon",setup(e){const a=[{id:"disabled",label:"Disabled",category:"States",component:pA},{id:"loading",label:"Loading",category:"States",component:gA},{id:"fitted",label:"Fitted",category:"Variations",component:bA},{id:"size",label:"Size",category:"Variations",component:yA},{id:"link",label:"Link",category:"Variations",component:wA},{id:"flipped",label:"Flipped",category:"Variations",component:AA},{id:"rotated",label:"Rotated",category:"Variations",component:xA},{id:"circular",label:"Circular",category:"Variations",component:BA},{id:"circular-colored",label:"Circular Colored",category:"Variations",component:LA},{id:"bordered",label:"Bordered",category:"Variations",component:DA},{id:"bordered-colored",label:"Bordered Colored",category:"Variations",component:RA},{id:"colored",label:"Colored",category:"Variations",component:PA},{id:"inverted",label:"Inverted",category:"Variations",component:VA},{id:"icons",label:"Icons",category:"Groups",component:HA},{id:"corner-icon",label:"Corner Icon",category:"Groups",component:OA}];return(l,o)=>($(),D(Ct,{title:"Icon",description:"An icon is a glyph used to represent something else","component-docs":a}))}},GA=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" />
</template>`,qA={__name:"ImageDoc",setup(e){return(a,l)=>($(),D(M,{label:"Image",code:GA},{description:i(()=>[n(" An image ")]),example:i(()=>[t(p(ce),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}))}},UA=`<template>
  <SuiImage
    as="a"
    size="medium"
    href="https://google.com"
    src="/images/wireframe/image-text.png"
    target="_blank"
  />
</template>`,YA={__name:"ImageLinkDoc",setup(e){return(a,l)=>($(),D(M,{label:"Image Link",code:UA},{description:i(()=>[n(" An image can be formatted to link to other content ")]),example:i(()=>[t(p(ce),{as:"a",size:"medium",href:"https://google.com",src:"/vue-fomantic-ui/images/wireframe/image-text.png",target:"_blank"})]),_:1}))}},JA=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" hidden />
</template>`,WA={__name:"HiddenDoc",setup(e){return(a,l)=>($(),D(M,{label:"Hidden",code:JA},{description:i(()=>[n(" An image can be hidden ")]),example:i(()=>[t(p(ce),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png",hidden:""})]),_:1}))}},KA=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" disabled />
</template>`,XA={__name:"DisabledDoc",setup(e){return(a,l)=>($(),D(M,{label:"Disabled",code:KA},{description:i(()=>[n(" An image can show that it is disabled and cannot be selected ")]),example:i(()=>[t(p(ce),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png",disabled:""})]),_:1}))}},QA=S("span",null,"Username",-1),ZA=`<template>
  <SuiImage src="/images/wireframe/square-image.png" avatar />
  <span>Username</span>
</template>`,e0={__name:"AvatarDoc",setup(e){return(a,l)=>($(),D(M,{label:"Avatar",code:ZA},{description:i(()=>[n(" An image may be formatted to appear inline with text as an avatar ")]),example:i(()=>[t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/square-image.png",avatar:""}),QA]),_:1}))}},t0=`<template>
  <SuiImage size="medium" src="/images/wireframe/white-image.png" bordered />
</template>`,i0={__name:"BorderedDoc",setup(e){return(a,l)=>($(),D(M,{label:"Bordered",code:t0},{description:i(()=>[n(" An image may include a border to emphasize the edges of white or transparent content ")]),example:i(()=>[t(p(ce),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/white-image.png",bordered:""})]),_:1}))}},a0=`<template>
  <SuiImage src="/images/wireframe/image.png" fluid />
</template>`,l0={__name:"FluidDoc",setup(e){return(a,l)=>($(),D(M,{label:"Fluid",code:a0},{description:i(()=>[n(" An image can take up the width of its container ")]),example:i(()=>[t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/image.png",fluid:""})]),_:1}))}},n0=`<template>
  <SuiImage src="/images/wireframe/image.png" rounded />
</template>`,o0={__name:"RoundedDoc",setup(e){return(a,l)=>($(),D(M,{label:"Rounded",code:n0},{description:i(()=>[n(" An image may appear rounded ")]),example:i(()=>[t(p(ce),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png",rounded:""})]),_:1}))}},s0=`<template>
  <SuiImage src="/images/wireframe/square-image.png" circular />
</template>`,r0={__name:"CircularDoc",setup(e){return(a,l)=>($(),D(M,{label:"Circular",code:s0},{description:i(()=>[n(" An image may appear circular ")]),example:i(()=>[t(p(ce),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/square-image.png",circular:""})]),_:1}))}},u0=S("span",null,"Top Aligned",-1),c0=S("span",null,"Middle Aligned",-1),d0=S("span",null,"Bottom Aligned",-1),m0=`<template>
  <SuiImage verticalAlign="top" size="tiny" src="/images/wireframe/image.png" />
  <span>Top Aligned</span>
  <SuiDivider />
  <SuiImage verticalAlign="middle" size="tiny" src="/images/wireframe/image.png" />
  <span>Middle Aligned</span>
  <SuiDivider />
  <SuiImage verticalAlign="bottom" size="tiny" src="/images/wireframe/image.png" />
  <span>Bottom Aligned</span>
</template>`,p0={__name:"VerticallyAlignedDoc",setup(e){return(a,l)=>($(),D(M,{label:"Vertically Aligned",code:m0},{description:i(()=>[n(" An image can specify its vertical alignment ")]),example:i(()=>[t(p(ce),{verticalAlign:"top",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),u0,t(p(Oe)),t(p(ce),{verticalAlign:"middle",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),c0,t(p(Oe)),t(p(ce),{verticalAlign:"bottom",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),d0]),_:1}))}},f0=S("p",null," Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ",-1),g0=S("p",null," Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. ",-1),h0=S("p",null," Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id. ",-1),_0=`<template>
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
</template>`,b0={__name:"CenteredDoc",setup(e){return(a,l)=>($(),D(M,{label:"Centered",code:_0},{description:i(()=>[n(" An image can appear centered in a content block ")]),example:i(()=>[t(p(Le),null,{default:i(()=>[t(p(ce),{centered:"",size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png"}),f0,g0,t(p(ce),{centered:"",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),h0]),_:1})]),_:1}))}},v0=`<template>
  <SuiSegment>
    <p>
      Te eum doming eirmod, nominati pertinacia <SuiImage spaced size="mini" src="/images/wireframe/image.png" /> argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
    </p>
  </SuiSegment>
</template>`,y0={__name:"SpacedDoc",setup(e){return(a,l)=>($(),D(M,{label:"Spaced",code:v0},{description:i(()=>[n(" An image can appear centered in a content block ")]),example:i(()=>[t(p(Le),null,{default:i(()=>[S("p",null,[n(" Te eum doming eirmod, nominati pertinacia "),t(p(ce),{spaced:"",size:"mini",src:"/vue-fomantic-ui/images/wireframe/image.png"}),n(" argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ")])]),_:1})]),_:1}))}},S0=S("p",null," Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ",-1),w0=S("p",null," Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. ",-1),C0=S("p",null," Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id. ",-1),A0=`<template>
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
</template>`,k0={__name:"FloatedDoc",setup(e){return(a,l)=>($(),D(M,{label:"Floated",code:A0},{description:i(()=>[n(" An image can sit to the left or right of other content ")]),example:i(()=>[t(p(Le),null,{default:i(()=>[t(p(ce),{floated:"left",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),S0,t(p(ce),{floated:"right",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),w0,C0]),_:1})]),_:1}))}},x0=`<template>
  <SuiImage size="mini" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="tiny" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="small" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="medium" src="/images/wireframe/image.png" />
</template>`,$0={__name:"SizeDoc",setup(e){return(a,l)=>($(),D(M,{label:"Size",code:x0},{description:i(()=>[n(" An image may appear at different sizes ")]),example:i(()=>[t(p(ce),{size:"mini",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(p(Oe),{hidden:""}),t(p(ce),{size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(p(Oe),{hidden:""}),t(p(ce),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(p(Oe),{hidden:""}),t(p(ce),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}))}},B0=`<template>
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
</template>`,T0={__name:"GroupSizeDoc",setup(e){return(a,l)=>($(),D(M,{label:"Size",code:B0},{description:i(()=>[n(" A group of images can be formatted to have the same size. ")]),example:i(()=>[t(p(ql),{size:"tiny"},{default:i(()=>[t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(p(Oe),{hidden:""}),t(p(ql),{size:"small"},{default:i(()=>[t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1}))}},L0={__name:"Image",setup(e){const a=[{id:"image",label:"Image",category:"Types",component:qA},{id:"image-link",label:"Image Link",category:"Types",component:YA},{id:"hidden",label:"Hidden",category:"States",component:WA},{id:"disabled",label:"Disabled",category:"States",component:XA},{id:"avatar",label:"Avatar",category:"Variations",component:e0},{id:"bordered",label:"Bordered",category:"Variations",component:i0},{id:"fluid",label:"Fluid",category:"Variations",component:l0},{id:"rounded",label:"Rounded",category:"Variations",component:o0},{id:"circular",label:"Circular",category:"Variations",component:r0},{id:"vertically-aligned",label:"Vertically Aligned",category:"Variations",component:p0},{id:"centered",label:"Centered",category:"Variations",component:b0},{id:"spaced",label:"Spaced",category:"Variations",component:y0},{id:"floated",label:"Floated",category:"Variations",component:k0},{id:"size",label:"Size",category:"Variations",component:$0},{id:"group-size",label:"Size",category:"Groups",component:T0}];return(l,o)=>($(),D(Ct,{title:"Image",description:"An image is a graphic representation of something","component-docs":a}))}},I0=`<template>
  <SuiInput placeholder="Search..." />
</template>`,D0={__name:"InputDoc",setup(e){return(a,l)=>($(),D(M,{label:"Input",code:I0},{description:i(()=>[n(" A standard input ")]),example:i(()=>[t(p(et),{placeholder:"Search..."})]),_:1}))}},E0=`<template>
  <SuiInput focus placeholder="Search..." />
</template>`,R0={__name:"FocusDoc",setup(e){return(a,l)=>($(),D(M,{label:"Focus",code:E0},{description:i(()=>[n(" An input field can show a user is currently interacting with it ")]),example:i(()=>[t(p(et),{focus:"",placeholder:"Search..."})]),_:1}))}},z0=`<template>
  <SuiInput loading icon="user" placeholder="Search..." />
  <SuiInput loading icon="user" iconPosition="left" placeholder="Search..." />
</template>`,P0={__name:"LoadingDoc",setup(e){return(a,l)=>($(),D(M,{label:"Loading",code:z0},{description:i(()=>[n(" An icon input field can show that it is currently loading data ")]),example:i(()=>[t(p(et),{loading:"",icon:"user",placeholder:"Search..."}),t(p(et),{loading:"",icon:"user",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},M0=`<template>
  <SuiInput disabled placeholder="Search..." />
</template>`,V0={__name:"DisabledDoc",setup(e){return(a,l)=>($(),D(M,{label:"Disabled",code:M0},{description:i(()=>[n(" An input field can show that it is disabled ")]),example:i(()=>[t(p(et),{disabled:"",placeholder:"Search..."})]),_:1}))}},F0=`<template>
  <SuiInput error placeholder="Search..." />
</template>`,H0={__name:"ErrorDoc",setup(e){return(a,l)=>($(),D(M,{label:"Error",code:F0},{description:i(()=>[n(" An input field can show the data contains errors ")]),example:i(()=>[t(p(et),{error:"",placeholder:"Search..."})]),_:1}))}},N0=`<template>
  <SuiInput icon="search" placeholder="Search..." />
  <SuiInput icon="users" iconPosition="left" placeholder="Search..." />
</template>`,O0={__name:"IconDoc",setup(e){return(a,l)=>($(),D(M,{label:"Icon",code:N0},{description:i(()=>[n(" An input can be formatted with an icon ")]),example:i(()=>[t(p(et),{icon:"search",placeholder:"Search..."}),t(p(et),{icon:"users",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},j0=`<template>
  <SuiInput label="http://" placeholder="mysite.com" />
</template>`,G0={__name:"LabeledDoc",setup(e){return(a,l)=>($(),D(M,{label:"Labeled",code:j0},{description:i(()=>[n(" An input can be formatted with a label ")]),example:i(()=>[t(p(et),{label:"http://",placeholder:"mysite.com"})]),_:1}))}},q0=`<template>
  <SuiInput action="Search" />
</template>`,U0={__name:"ActionDoc",setup(e){return(a,l)=>($(),D(M,{label:"Action",code:q0},{description:i(()=>[n(" An input can be formatted to alert the user to an action they may perform ")]),example:i(()=>[t(p(et),{action:"Search"})]),_:1}))}},Y0=`<template>
  <SuiInput transparent icon="search" placeholder="Search..." />
</template>`,J0={__name:"TransparentDoc",setup(e){return(a,l)=>($(),D(M,{label:"Transparent",code:Y0},{description:i(()=>[n(" A transparent input has no background ")]),example:i(()=>[t(p(et),{transparent:"",icon:"search",placeholder:"Search..."})]),_:1}))}},W0=`<template>
  <SuiSegment inverted>
    <SuiInput inverted placeholder="Search..." />
  </SuiSegment>
</template>`,K0={__name:"InvertedDoc",setup(e){return(a,l)=>{const o=y("SuiSegment");return $(),D(M,{label:"Inverted",code:W0},{description:i(()=>[n(" An input can be formatted to appear on dark backgrounds ")]),example:i(()=>[t(o,{inverted:""},{default:i(()=>[t(p(et),{inverted:"",placeholder:"Search..."})]),_:1})]),_:1})}}},X0=`<template>
  <SuiInput fluid icon="search" placeholder="Search..." />
</template>`,Q0={__name:"FluidDoc",setup(e){return(a,l)=>($(),D(M,{label:"Fluid",code:X0},{description:i(()=>[n(" An input can take the size of its container ")]),example:i(()=>[t(p(et),{fluid:"",icon:"search",placeholder:"Search..."})]),_:1}))}},Z0=`<template>
  <SuiInput icon="search" placeholder="Search mini..." size="mini" />
  <SuiInput icon="search" placeholder="Search small..." size="small" />
  <SuiInput icon="search" placeholder="Search large..." size="large" />
  <SuiInput icon="search" placeholder="Search big..." size="big" />
  <SuiInput icon="search" placeholder="Search huge..." size="huge" />
  <SuiInput icon="search" placeholder="Search massive..." size="massive" />
</template>`,ek={__name:"SizeDoc",setup(e){return(a,l)=>($(),D(M,{label:"Size",code:Z0},{description:i(()=>[n(" An input can vary in size ")]),example:i(()=>[t(p(et),{icon:"search",placeholder:"Search mini...",size:"mini"}),t(p(et),{icon:"search",placeholder:"Search small...",size:"small"}),t(p(et),{icon:"search",placeholder:"Search large...",size:"large"}),t(p(et),{icon:"search",placeholder:"Search big...",size:"big"}),t(p(et),{icon:"search",placeholder:"Search huge...",size:"huge"}),t(p(et),{icon:"search",placeholder:"Search massive...",size:"massive"})]),_:1}))}},tk={__name:"Input",setup(e){const a=[{id:"input",label:"Input",category:"Types",component:D0},{id:"focus",label:"Focus",category:"States",component:R0},{id:"loading",label:"Loading",category:"States",component:P0},{id:"disabled",label:"Disabled",category:"States",component:V0},{id:"error",label:"Error",category:"States",component:H0},{id:"icon",label:"Icon",category:"Variations",component:O0},{id:"labeled",label:"Labeled",category:"Variations",component:G0},{id:"action",label:"Action",category:"Variations",component:U0},{id:"transparent",label:"Transparent",category:"Variations",component:J0},{id:"inverted",label:"Inverted",category:"Variations",component:K0},{id:"fluid",label:"Fluid",category:"Variations",component:Q0},{id:"size",label:"Size",category:"Variations",component:ek}];return(l,o)=>($(),D(Ct,{title:"Input",description:"An input is a field used to elicit a response from a user","component-docs":a}))}},ik=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
</template>`,ak={__name:"LabelDoc",setup(e){return(a,l)=>($(),D(M,{label:"Label",code:ik},{description:i(()=>[n(" A label ")]),example:i(()=>[t(p(N),null,{default:i(()=>[t(p(W),{name:"mail"}),n(" 23 ")]),_:1})]),_:1}))}},Oo="/vue-fomantic-ui/images/avatar/small/joe.jpg",rp="/vue-fomantic-ui/images/avatar/small/veronika.jpg",ei="/vue-fomantic-ui/images/avatar/small/elliot.jpg",lk=S("img",{src:Oo},null,-1),nk=S("img",{src:rp},null,-1),ok=S("img",{src:ei},null,-1),sk=`<template>
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
</template>`,rk={__name:"ImageDoc",setup(e){return(a,l)=>($(),D(M,{label:"Image",code:sk},{description:i(()=>[n(" A label can be formatted to emphasize an image ")]),example:i(()=>[t(p(N),{as:"a",image:""},{default:i(()=>[lk,n(" Joe ")]),_:1}),t(p(N),{as:"a",image:"",color:"blue"},{default:i(()=>[nk,n(" Veronika "),t(p(ji),null,{default:i(()=>[n("Friend")]),_:1})]),_:1}),t(p(N),{as:"a",image:""},{default:i(()=>[ok,n(" Elliot "),t(p(W),{name:"delete"})]),_:1})]),_:1}))}},uk=S("input",{type:"text",placeholder:"First Name"},null,-1),ck=S("input",{type:"text"},null,-1),dk=S("input",{type:"text",placeholder:"Username"},null,-1),mk=S("input",{type:"password"},null,-1),pk=`<template>
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
</template>`,fk={__name:"PointingDoc",setup(e){return(a,l)=>($(),D(M,{label:"Pointing",code:pk},{description:i(()=>[n(" A label can point to content next to it ")]),example:i(()=>[t(p(Ul),{fluid:""},{default:i(()=>[t(p(hi),null,{default:i(()=>[uk,t(p(N),{pointing:""},{default:i(()=>[n("Please enter a value")]),_:1})]),_:1}),t(p(Oe)),t(p(hi),null,{default:i(()=>[t(p(N),{pointing:"below"},{default:i(()=>[n("Please enter a value")]),_:1}),ck]),_:1}),t(p(Oe)),t(p(hi),{inline:""},{default:i(()=>[dk,t(p(N),{pointing:"left",color:"red",basic:""},{default:i(()=>[n("That name is taken!")]),_:1})]),_:1}),t(p(Oe)),t(p(hi),{inline:""},{default:i(()=>[t(p(N),{pointing:"right",color:"red",basic:""},{default:i(()=>[n("Your password must be 6 characters or more")]),_:1}),mk]),_:1})]),_:1})]),_:1}))}},gk=`<template>
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
</template>`,hk={__name:"CornerDoc",setup(e){return(a,l)=>($(),D(M,{label:"Corner",code:gk},{description:i(()=>[n(" A label can position itself in the corner of an element ")]),example:i(()=>[t(p(Sa),{columns:2},{default:i(()=>[t(p(bt),null,{default:i(()=>[t(p(ce),{label:{as:"a",corner:"left",icon:"heart"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(p(bt),null,{default:i(()=>[t(p(ce),{label:{as:"a",color:"red",corner:"right",icon:"save"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1})]),_:1}))}},_k=`<template>
  <SuiLabel as="a" tag>New</SuiLabel>
  <SuiLabel as="a" tag color="red">Upcoming</SuiLabel>
  <SuiLabel as="a" tag color="teal">Featured</SuiLabel>
</template>`,bk={__name:"TagDoc",setup(e){return(a,l)=>($(),D(M,{label:"Tag",code:_k},{description:i(()=>[n(" A label can appear as a tag ")]),example:i(()=>[t(p(N),{as:"a",tag:""},{default:i(()=>[n("New")]),_:1}),t(p(N),{as:"a",tag:"",color:"red"},{default:i(()=>[n("Upcoming")]),_:1}),t(p(N),{as:"a",tag:"",color:"teal"},{default:i(()=>[n("Featured")]),_:1})]),_:1}))}},vk=S("span",null,"Account Details",-1),yk=S("span",null,"User Reviews",-1),Sk=S("span",null,"Technical Specifications",-1),wk=S("span",null,"User Reviews",-1),Ck=`<template>
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
</template>`,Ak={__name:"RibbonDoc",setup(e){return(a,l)=>($(),D(M,{label:"Ribbon",code:Ck},{description:i(()=>[n(" A label can appear as a ribbon attaching itself to an element. ")]),example:i(()=>[t(p(Sa),{columns:2},{default:i(()=>[t(p(bt),null,{default:i(()=>[t(p(Le),{raised:""},{default:i(()=>[t(p(N),{as:"a",ribbon:"",color:"red"},{default:i(()=>[n("Overview")]),_:1}),vk,t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),t(p(N),{as:"a",ribbon:"",color:"blue"},{default:i(()=>[n("Community")]),_:1}),yk,t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(p(bt),null,{default:i(()=>[t(p(Le),{raised:""},{default:i(()=>[t(p(N),{as:"a",ribbon:"right",color:"orange"},{default:i(()=>[n("Specs")]),_:1}),Sk,t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),t(p(N),{as:"a",ribbon:"right",color:"teal"},{default:i(()=>[n("Reviews")]),_:1}),wk,t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1}))}},kk=`<template>
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
</template>`,xk={__name:"AttachedDoc",setup(e){return(a,l)=>($(),D(M,{label:"Attached",code:kk},{description:i(()=>[n(" A label can attach to a content segment ")]),example:i(()=>[t(p(Sa),{columns:3},{default:i(()=>[t(p(Yl),null,{default:i(()=>[t(p(bt),null,{default:i(()=>[t(p(Le),{padded:""},{default:i(()=>[t(p(N),{attached:"top"},{default:i(()=>[n("HTML")]),_:1}),t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(p(bt),null,{default:i(()=>[t(p(Le),{padded:""},{default:i(()=>[t(p(N),{attached:"bottom"},{default:i(()=>[n("CSS")]),_:1}),t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(p(bt),null,{default:i(()=>[t(p(Le),{padded:""},{default:i(()=>[t(p(N),{attached:"top right"},{default:i(()=>[n("Code")]),_:1}),t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1}),t(p(Yl),null,{default:i(()=>[t(p(bt),null,{default:i(()=>[t(p(Le),{padded:""},{default:i(()=>[t(p(N),{attached:"top left"},{default:i(()=>[n("View")]),_:1}),t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(p(bt),null,{default:i(()=>[t(p(Le),{padded:""},{default:i(()=>[t(p(N),{attached:"bottom left"},{default:i(()=>[n("User View")]),_:1}),t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(p(bt),null,{default:i(()=>[t(p(Le),{padded:""},{default:i(()=>[t(p(N),{attached:"bottom right"},{default:i(()=>[n("Admin View")]),_:1}),t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},$k=`<template>
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
</template>`,Bk={__name:"HorizontalDoc",setup(e){return(a,l)=>($(),D(M,{label:"Horizontal",code:$k},{description:i(()=>[n(" A horizontal label is formatted to label content along-side it horizontally ")]),example:i(()=>[t(p($o),{divided:"",selection:""},{default:i(()=>[t(p(ta),null,{default:i(()=>[t(p(N),{color:"red",horizontal:""},{default:i(()=>[n("Fruit")]),_:1}),n(" Kumquats ")]),_:1}),t(p(ta),null,{default:i(()=>[t(p(N),{color:"purple",horizontal:""},{default:i(()=>[n("Candy")]),_:1}),n(" Ice Cream ")]),_:1}),t(p(ta),null,{default:i(()=>[t(p(N),{color:"red",horizontal:""},{default:i(()=>[n("Fruit")]),_:1}),n(" Orange ")]),_:1}),t(p(ta),null,{default:i(()=>[t(p(N),{horizontal:""},{default:i(()=>[n("Dog")]),_:1}),n(" Poodle ")]),_:1})]),_:1})]),_:1}))}},Tk=`<template>
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
</template>`,Lk={__name:"FloatingDoc",setup(e){return(a,l)=>($(),D(M,{label:"Floating",code:Tk},{description:i(()=>[n(" A label can float above or below another element ")]),example:i(()=>[t(p(Lo),{compact:""},{default:i(()=>[t(p(Jl),null,{default:i(()=>[t(p(W),{name:"mail"}),n(" Messages "),t(p(N),{floating:"",color:"red"},{default:i(()=>[n("22")]),_:1})]),_:1}),t(p(Jl),null,{default:i(()=>[t(p(W),{name:"users"}),n(" Friends "),t(p(N),{floating:"",color:"teal"},{default:i(()=>[n("22")]),_:1})]),_:1})]),_:1})]),_:1}))}},Ik=`<template>
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
</template>`,Dk={__name:"InvertedDoc",setup(e){return(a,l)=>($(),D(M,{label:"Inverted",code:Ik},{description:i(()=>[n(" All Variants of Label can be inverted ")]),example:i(()=>[t(p(Le),{inverted:""},{default:i(()=>[t(p(N),{as:"a",inverted:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(p(N),{as:"a",inverted:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(p(N),{as:"a",inverted:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(p(N),{as:"a",inverted:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(p(N),{as:"a",inverted:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(p(N),{as:"a",basic:"",inverted:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(p(N),{as:"a",basic:"",inverted:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(p(N),{as:"a",basic:"",inverted:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(p(N),{as:"a",basic:"",inverted:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(p(N),{as:"a",basic:"",inverted:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(p(N),{as:"a",tag:"",inverted:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(p(N),{as:"a",tag:"",inverted:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(p(N),{as:"a",tag:"",inverted:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(p(N),{as:"a",tag:"",inverted:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(p(N),{as:"a",tag:"",inverted:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1})]),_:1}))}},Ek=`<template>
  <SuiLabel>
    Dogs
    <SuiLabelDetail>214</SuiLabelDetail>
  </SuiLabel>
</template>`,Rk={__name:"DetailDoc",setup(e){return(a,l)=>($(),D(M,{label:"Detail",code:Ek},{description:i(()=>[n(" A label can contain a detail ")]),example:i(()=>[t(p(N),null,{default:i(()=>[n(" Dogs "),t(p(ji),null,{default:i(()=>[n("214")]),_:1})]),_:1})]),_:1}))}},zk=`<template>
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
</template>`,Pk={__name:"IconDoc",setup(e){return(a,l)=>($(),D(M,{label:"Icon",code:zk},{description:i(()=>[n(" A label can include an icon ")]),example:i(()=>[t(p(N),null,{default:i(()=>[t(p(W),{name:"mail"}),n(" Mail ")]),_:1}),t(p(N),null,{default:i(()=>[t(p(W),{name:"checkmark"}),n(" Test Passed ")]),_:1}),t(p(N),{icon:"dog"}),t(p(N),{icon:"cat"})]),_:1}))}},Mk=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
    <SuiLabelContent>View Mail</SuiLabelContent>
  </SuiLabel>
</template>`,Vk={__name:"LinkDoc",setup(e){return(a,l)=>($(),D(M,{label:"Link",code:Mk},{description:i(()=>[n(" A label can be a link or contain an item that links ")]),example:i(()=>[t(p(N),{as:"a"},{default:i(()=>[t(p(W),{name:"mail"}),n(" 23 ")]),_:1}),t(p(N),null,{default:i(()=>[t(p(W),{name:"mail"}),n(" 23 "),t(p(ji),null,{default:i(()=>[n("View Mail")]),_:1})]),_:1})]),_:1}))}},Fk=`<template>
  <SuiLabel disabled>Disabled Label</SuiLabel>
</template>`,Hk={__name:"DisabledDoc",setup(e){return(a,l)=>($(),D(M,{label:"Disabled",code:Fk},{description:i(()=>[n(" A label can show it is currently unable to be interacted with ")]),example:i(()=>[t(p(N),{disabled:""},{default:i(()=>[n("Disabled Label")]),_:1})]),_:1}))}},Nk=`<template>
  <SuiLabel fluid>Fits container</SuiLabel>
</template>`,Ok={__name:"FluidDoc",setup(e){return(a,l)=>($(),D(M,{label:"Fluid",code:Nk},{description:i(()=>[n(" A label can take the width of its container ")]),example:i(()=>[t(p(N),{fluid:""},{default:i(()=>[n("Fits container")]),_:1})]),_:1}))}},jk=`<template>
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
</template>`,Gk={__name:"CircularDoc",setup(e){return(a,l)=>($(),D(M,{label:"Circular",code:jk},{description:i(()=>[n(" A label can be circular ")]),example:i(()=>[t(p(N),{circular:"",color:"red"},{default:i(()=>[n("2")]),_:1}),t(p(N),{circular:"",color:"orange"},{default:i(()=>[n("2")]),_:1}),t(p(N),{circular:"",color:"yellow"},{default:i(()=>[n("2")]),_:1}),t(p(N),{circular:"",color:"olive"},{default:i(()=>[n("2")]),_:1}),t(p(N),{circular:"",color:"green"},{default:i(()=>[n("2")]),_:1}),t(p(N),{circular:"",color:"teal"},{default:i(()=>[n("2")]),_:1}),t(p(N),{circular:"",color:"blue"},{default:i(()=>[n("2")]),_:1}),t(p(N),{circular:"",color:"violet"},{default:i(()=>[n("2")]),_:1}),t(p(N),{circular:"",color:"purple"},{default:i(()=>[n("2")]),_:1}),t(p(N),{circular:"",color:"pink"},{default:i(()=>[n("2")]),_:1}),t(p(N),{circular:"",color:"brown"},{default:i(()=>[n("2")]),_:1}),t(p(N),{circular:"",color:"grey"},{default:i(()=>[n("2")]),_:1}),t(p(N),{circular:"",color:"black"},{default:i(()=>[n("2")]),_:1})]),_:1}))}},qk=S("img",{src:ei},null,-1),Uk=`<template>
  <SuiLabel as="a" basic>Basic</SuiLabel>
  <SuiLabel as="a" basic pointing>Pointing</SuiLabel>
  <SuiLabel as="a" basic image>
    <img src="/images/avatar/small/elliot.jpg" />
    Elliot
  </SuiLabel>
  <SuiLabel as="a" basic pointing color="red">Red Pointing</SuiLabel>
  <SuiLabel as="a" basic color="blue">Blue</SuiLabel>
</template>`,Yk={__name:"BasicDoc",setup(e){return(a,l)=>($(),D(M,{label:"Basic",code:Uk},{description:i(()=>[n(" A label can reduce its complexity ")]),example:i(()=>[t(p(N),{as:"a",basic:""},{default:i(()=>[n("Basic")]),_:1}),t(p(N),{as:"a",basic:"",pointing:""},{default:i(()=>[n("Pointing")]),_:1}),t(p(N),{as:"a",basic:"",image:""},{default:i(()=>[qk,n(" Elliot ")]),_:1}),t(p(N),{as:"a",basic:"",pointing:"",color:"red"},{default:i(()=>[n("Red Pointing")]),_:1}),t(p(N),{as:"a",basic:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1})]),_:1}))}},Jk=`<template>
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
</template>`,Wk={__name:"ColoredDoc",setup(e){return(a,l)=>($(),D(M,{label:"Colored",code:Jk},{description:i(()=>[n(" A label can have different colors ")]),example:i(()=>[t(p(N),{as:"a",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(p(N),{as:"a",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(p(N),{as:"a",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(p(N),{as:"a",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(p(N),{as:"a",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(p(N),{as:"a",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(p(N),{as:"a",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(p(N),{as:"a",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(p(N),{as:"a",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(p(N),{as:"a",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(p(N),{as:"a",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(p(N),{as:"a",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(p(N),{as:"a",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(p(N),{as:"a",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(p(N),{as:"a",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},Kk=`<template>
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
</template>`,Xk={__name:"BasicTagDoc",setup(e){return(a,l)=>($(),D(M,{label:"Basic Tag",code:Kk},{description:i(()=>[]),example:i(()=>[t(p(N),{as:"a",basic:"",tag:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(p(N),{as:"a",basic:"",tag:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(p(N),{as:"a",basic:"",tag:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(p(N),{as:"a",basic:"",tag:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(p(N),{as:"a",basic:"",tag:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(p(N),{as:"a",basic:"",tag:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(p(N),{as:"a",basic:"",tag:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(p(N),{as:"a",basic:"",tag:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(p(N),{as:"a",basic:"",tag:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(p(N),{as:"a",basic:"",tag:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(p(N),{as:"a",basic:"",tag:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(p(N),{as:"a",basic:"",tag:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(p(N),{as:"a",basic:"",tag:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(p(N),{as:"a",basic:"",tag:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(p(N),{as:"a",basic:"",tag:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},Qk=`<template>
  <SuiLabel size="mini">Mini</SuiLabel>
  <SuiLabel size="tiny">Tiny</SuiLabel>
  <SuiLabel size="small">Small</SuiLabel>
  <SuiLabel>Medium</SuiLabel>
  <SuiLabel size="large">Large</SuiLabel>
  <SuiLabel size="big">Big</SuiLabel>
  <SuiLabel size="huge">Huge</SuiLabel>
  <SuiLabel size="massive">Massive</SuiLabel>
</template>`,Zk={__name:"SizeDoc",setup(e){return(a,l)=>($(),D(M,{label:"Size",code:Qk},{description:i(()=>[n(" A label can be small or large ")]),example:i(()=>[t(p(N),{size:"mini"},{default:i(()=>[n("Mini")]),_:1}),t(p(N),{size:"tiny"},{default:i(()=>[n("Tiny")]),_:1}),t(p(N),{size:"small"},{default:i(()=>[n("Small")]),_:1}),t(p(N),null,{default:i(()=>[n("Medium")]),_:1}),t(p(N),{size:"large"},{default:i(()=>[n("Large")]),_:1}),t(p(N),{size:"big"},{default:i(()=>[n("Big")]),_:1}),t(p(N),{size:"huge"},{default:i(()=>[n("Huge")]),_:1}),t(p(N),{size:"massive"},{default:i(()=>[n("Massive")]),_:1})]),_:1}))}},ex=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,tx={__name:"GroupSizeDoc",setup(e){return(a,l)=>($(),D(M,{label:"Group Size",code:ex},{description:i(()=>[n(" Labels can share sizes together ")]),example:i(()=>[t(p(Gi),{size:"huge"},{default:i(()=>[t(p(N),null,{default:i(()=>[n("Fun")]),_:1}),t(p(N),null,{default:i(()=>[n("Happy")]),_:1}),t(p(N),null,{default:i(()=>[n("Smart")]),_:1}),t(p(N),null,{default:i(()=>[n("Witty")]),_:1})]),_:1})]),_:1}))}},ix=`<template>
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
</template>`,ax={__name:"ColoredGroupDoc",setup(e){return(a,l)=>($(),D(M,{label:"Clored Group",code:ix},{description:i(()=>[n(" Labels can share colors together ")]),example:i(()=>[t(p(Gi),{color:"blue"},{default:i(()=>[t(p(N),null,{default:i(()=>[n(" Fun "),t(p(W),{name:"close"})]),_:1}),t(p(N),null,{default:i(()=>[n(" Happy "),t(p(ji),null,{default:i(()=>[n("Smart")]),_:1})]),_:1}),t(p(N),null,{default:i(()=>[n("Insane")]),_:1}),t(p(N),null,{default:i(()=>[n("Exciting")]),_:1})]),_:1})]),_:1}))}},lx=`<template>
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
</template>`,nx={__name:"BasicGroupDoc",setup(e){return(a,l)=>($(),D(M,{label:"Basic Group",code:lx},{description:i(()=>[n(" Labels can share their style together ")]),example:i(()=>[t(p(Gi),{basic:""},{default:i(()=>[t(p(N),null,{default:i(()=>[n(" Fun "),t(p(W),{name:"close"})]),_:1}),t(p(N),null,{default:i(()=>[n(" Happy "),t(p(ji),null,{default:i(()=>[n("Smart")]),_:1})]),_:1}),t(p(N),null,{default:i(()=>[n("Insane")]),_:1}),t(p(N),null,{default:i(()=>[n("Exciting")]),_:1})]),_:1})]),_:1}))}},ox=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,sx={__name:"TagGroupDoc",setup(e){return(a,l)=>($(),D(M,{label:"Tag Group",code:ox},{description:i(()=>[n(" Labels can share tag formatting ")]),example:i(()=>[t(p(Gi),{tag:""},{default:i(()=>[t(p(N),{as:"a"},{default:i(()=>[n("$10.00")]),_:1}),t(p(N),{as:"a"},{default:i(()=>[n("$19.99")]),_:1}),t(p(N),{as:"a"},{default:i(()=>[n("$24.99")]),_:1}),t(p(N),{as:"a"},{default:i(()=>[n("$10.25")]),_:1})]),_:1})]),_:1}))}},rx=`<template>
  <SuiLabelGroup tag>
    <SuiLabel as="a">1</SuiLabel>
    <SuiLabel as="a">3</SuiLabel>
    <SuiLabel as="a">4</SuiLabel>
    <SuiLabel as="a">14</SuiLabel>
    <SuiLabel as="a">16</SuiLabel>
    <SuiLabel as="a">34</SuiLabel>
  </SuiLabelGroup>
</template>`,ux={__name:"CircularGroupDoc",setup(e){return(a,l)=>($(),D(M,{label:"Circular Group",code:rx},{description:i(()=>[n(" Labels can share shapes ")]),example:i(()=>[t(p(Gi),{circular:""},{default:i(()=>[t(p(N),{as:"a"},{default:i(()=>[n("1")]),_:1}),t(p(N),{as:"a"},{default:i(()=>[n("3")]),_:1}),t(p(N),{as:"a"},{default:i(()=>[n("4")]),_:1}),t(p(N),{as:"a"},{default:i(()=>[n("14")]),_:1}),t(p(N),{as:"a"},{default:i(()=>[n("16")]),_:1}),t(p(N),{as:"a"},{default:i(()=>[n("34")]),_:1})]),_:1})]),_:1}))}},cx={__name:"Label",setup(e){const a=[{id:"label",label:"Label",category:"Types",component:ak},{id:"image",label:"Image",category:"Types",component:rk},{id:"pointing",label:"Pointing",category:"Types",component:fk},{id:"corner",label:"Corner",category:"Types",component:hk},{id:"tag",label:"Tag",category:"Types",component:bk},{id:"ribbon",label:"Ribbon",category:"Types",component:Ak},{id:"attached",label:"Attached",category:"Types",component:xk},{id:"horizontal",label:"Horizontal",category:"Types",component:Bk},{id:"floating",label:"Floating",category:"Types",component:Lk},{id:"inverted",label:"Inverted",category:"Types",component:Dk},{id:"detail",label:"Detail",category:"Content",component:Rk},{id:"icon",label:"Icon",category:"Content",component:Pk},{id:"link",label:"Link",category:"Content",component:Vk},{id:"disabled",label:"Disabled",category:"States",component:Hk},{id:"fluid",label:"Fluid",category:"Variations",component:Ok},{id:"circular",label:"Circular",category:"Variations",component:Gk},{id:"basic",label:"Basic",category:"Variations",component:Yk},{id:"colored",label:"Colored",category:"Variations",component:Wk},{id:"basic-tag",label:"Basic Tag",category:"Variations",component:Xk},{id:"size",label:"Size",category:"Variations",component:Zk},{id:"group-size",label:"Group Size",category:"Groups",component:tx},{id:"colored-group",label:"Colored Group",category:"Groups",component:ax},{id:"basic-group",label:"Basic Group",category:"Groups",component:nx},{id:"tag-group",label:"Tag Group",category:"Groups",component:sx},{id:"circular-group",label:"Circular Group",category:"Groups",component:ux}];return(l,o)=>($(),D(Ct,{title:"Label",description:"A label displays content classification","component-docs":a}))}},dx=ub(wh);function mx(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Al=dx,Xn=mx(Pm),px=Al.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function(a,l){var o=l.slots,r=l.attrs,c=o&&o.default&&o.default()||[],m=a.code||c&&c.length?c[0].children:"",f=a.inline,s=a.language,u=Xn.languages[s],g="language-".concat(s);return function(){return f?Al.h("code",{class:[g],innerHTML:Xn.highlight(m,u)}):Al.h("pre",Object.assign({},r,{class:[r.class,g]}),[Al.h("code",Object.assign({},r,{class:[r.class,g],innerHTML:Xn.highlight(m,u)}))])}}}),fx=px;const gx=Rm(fx),hx=R({name:"DocExample",components:{Prism:gx},props:{title:String,description:String,code:String},setup(){const e=G(!1);return{active:e,toggle:()=>e.value=!e.value}}}),_x={class:"example"};function bx(e,a,l,o,r,c){const m=y("sui-header-subheader"),f=y("sui-header"),s=y("sui-grid-column"),u=y("sui-icon"),g=y("sui-grid-row"),d=y("prism"),h=y("sui-grid");return $(),he("div",_x,[t(h,{columns:2},{default:i(()=>[t(g,null,{default:i(()=>[t(s,null,{default:i(()=>[t(f,{as:"h3"},{default:i(()=>[n(Te(e.title)+" ",1),t(m,null,{default:i(()=>[n(Te(e.description),1)]),_:1})]),_:1})]),_:1}),t(s,{textAlign:"right"},{default:i(()=>[t(u,{name:"code",color:"grey",onClick:e.toggle,link:""},null,8,["onClick"])]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(s,{width:16},{default:i(()=>[Fi(e.$slots,"default",{},void 0,!0)]),_:3}),e.active?($(),D(s,{key:0,width:16},{default:i(()=>[t(d,{language:"markup"},{default:i(()=>[n(Te(e.code),1)]),_:1})]),_:1})):vs("",!0)]),_:3})]),_:3})])}const Ge=ke(hx,[["render",bx],["__scopeId","data-v-fcfb6a67"]]),vx="/vue-fomantic-ui/images/avatar/small/rachel.png",yx="/vue-fomantic-ui/images/avatar/small/lindsay.png",Sx="/vue-fomantic-ui/images/avatar/small/matthew.png",$n="/vue-fomantic-ui/images/avatar/small/jenny.jpg",wx="/vue-fomantic-ui/images/avatar/small/tom.jpg",kl="/vue-fomantic-ui/images/avatar/small/christian.jpg",Bn="/vue-fomantic-ui/images/avatar/small/matt.jpg",Va="/vue-fomantic-ui/images/avatar/small/helen.jpg",Ti="/vue-fomantic-ui/images/avatar/small/daniel.jpg",jo="/vue-fomantic-ui/images/avatar/small/stevie.jpg",Wt="/vue-fomantic-ui/images/wireframe/square-image.png",Cx=R({name:"ListDoc",components:{DocExample:Ge},setup(){return{listCode:`<sui-list>
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
</div>`}}}),Ax={class:"intro"},kx=S("div",null,"Benefits",-1),xx={class:"list"},$x=S("a",null,"Languages",-1),Bx=S("a",null,[S("b",null,"Arrested Development")],-1),Tx=S("a",null,[S("b",null,"Bob's Burgers")],-1),Lx=S("a",null,[S("b",null,"The Godfather Part 2")],-1),Ix=S("a",null,[S("b",null,"Twin Peaks")],-1),Dx=S("a",null,[S("b",null,"Arrested Development")],-1),Ex=S("a",null,[S("b",null,"Bob's Burgers")],-1),Rx=S("a",null,[S("b",null,"The Godfather Part 2")],-1);function zx(e,a,l,o,r,c){const m=y("sui-header-subheader"),f=y("sui-header"),s=y("sui-divider"),u=y("sui-icon"),g=y("sui-menu-item"),d=y("sui-menu"),h=y("sui-container"),v=y("sui-segment"),_=y("sui-list-item"),C=y("sui-list"),k=y("doc-example"),T=y("sui-list-list"),b=y("sui-list-header"),w=y("sui-list-description"),x=y("sui-list-content"),B=y("sui-image");return $(),he("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",Ax,[t(f,{as:"h1"},{default:i(()=>[n("List "),t(m,null,{default:i(()=>[n(" A list is used to group related content ")]),_:1})]),_:1}),t(s,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(k,{title:"List",description:"A list groups related content",code:e.listCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Apples")]),_:1}),t(_,null,{default:i(()=>[n("Pears")]),_:1}),t(_,null,{default:i(()=>[n("Oranges")]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Bulleted",description:"A list can mark items with a bullet",code:e.bulletedCode},{default:i(()=>[t(C,{bulleted:""},{default:i(()=>[t(_,null,{default:i(()=>[n("Gaining Access")]),_:1}),t(_,null,{default:i(()=>[n("Inviting Friends")]),_:1}),t(_,null,{default:i(()=>[kx,S("div",xx,[t(_,{as:"a"},{default:i(()=>[n("Link to somewhere")]),_:1}),t(_,null,{default:i(()=>[n("Rebates")]),_:1}),t(_,null,{default:i(()=>[n("Discounts")]),_:1})])]),_:1}),t(_,null,{default:i(()=>[n("Warranty")]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Ordered",description:"A list can be ordered numerically",code:e.orderedCode},{default:i(()=>[t(C,{ordered:""},{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Getting Started")]),_:1}),t(_,{as:"a"},{default:i(()=>[n("Introduction")]),_:1}),t(_,null,{default:i(()=>[$x,t(T,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("HTML")]),_:1}),t(_,{as:"a"},{default:i(()=>[n("Javascript")]),_:1}),t(_,{as:"a"},{default:i(()=>[n("CSS")]),_:1})]),_:1})]),_:1}),t(_,{as:"a"},{default:i(()=>[n("Review")]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Link",description:"A list can be specially formatted for navigation links",code:e.linkCode},{default:i(()=>[t(C,{link:""},{default:i(()=>[t(_,{active:""},{default:i(()=>[n("Home")]),_:1}),t(_,{as:"a"},{default:i(()=>[n("About")]),_:1}),t(_,{as:"a"},{default:i(()=>[n("Jobs")]),_:1}),t(_,{as:"a"},{default:i(()=>[n("Team")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(k,{title:"Item",description:"A list item can contain a set of items",code:e.itemCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[n("1")]),_:1}),t(_,null,{default:i(()=>[n("2")]),_:1}),t(_,null,{default:i(()=>[n("3")]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Icon",description:"A list item can contain an icon",code:e.iconCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[t(u,{name:"help"}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Floated Icon")]),_:1}),t(w,null,{default:i(()=>[n(" This text will always have a left margin to make sure it sits alongside your icon ")]),_:1})]),_:1})]),_:1}),t(_,{as:"a"},{default:i(()=>[t(u,{name:"right triangle"}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Icon Alignment")]),_:1}),t(w,null,{default:i(()=>[n(" Floated icons are by default top aligned. To have an icon top aligned try this example ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(u,{name:"help"}),n(" Inline Text ")]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Image",description:"A list can contain an image",code:e.imageContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(B,{avatar:"",src:vx}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Rachel")]),_:1}),t(w,null,{default:i(()=>[n(" Last seen watching "),Bx,n(" just now. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:yx}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Lindsay")]),_:1}),t(w,null,{default:i(()=>[n(" Last seen watching "),Tx,n(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:Sx}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Matthew")]),_:1}),t(w,null,{default:i(()=>[n(" Last seen watching "),Lx,n(" yesterday. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:$n}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Jenny Hess")]),_:1}),t(w,null,{default:i(()=>[n(" Last seen watching "),Ix,n(" 3 days ago. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:rp}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Veronika Ossi")]),_:1}),t(w,null,{default:i(()=>[n(" Has not watched anything recently ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Link",description:"A list can contain links",code:e.linkContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("What is a FAQ?")]),_:1}),t(_,{as:"a"},{default:i(()=>[n("Who is our user?")]),_:1}),t(_,{as:"a"},{default:i(()=>[n("Where is our office located?")]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"header",description:"A list item can contain a header",code:e.headerContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[n("New York City")]),_:1}),n(" A lovely city ")]),_:1}),t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Chicago")]),_:1}),n(" Also quite a lovely city ")]),_:1}),t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Los Angeles")]),_:1}),n(" Sometimes can be a lovely city ")]),_:1}),t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[n("San Francisco")]),_:1}),n(" What a lovely city ")]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Description",description:"A list item can contain a description",code:e.descriptionContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(u,{name:"map marker"}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("Krolewskie Jadlo")]),_:1}),t(w,null,{default:i(()=>[n(" An excellent polish restaurant, quick delivery and hearty, filling meals. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(u,{name:"map marker"}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("Xian Famous Foods")]),_:1}),t(w,null,{default:i(()=>[n(" A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(u,{name:"map marker"}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("Sapporo Haru")]),_:1}),t(w,null,{default:i(()=>[n(" Greenpoint's best choice for quick and delicious sushi. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(u,{name:"map marker"}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("Enid's")]),_:1}),t(w,null,{default:i(()=>[n(" At night a bar, during the day a delicious brunch spot. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(k,{title:"Horizontal",description:"A list can be formatted to have items appear horizontally",code:e.horizontalVarCode},{default:i(()=>[t(C,{horizontal:""},{default:i(()=>[t(_,null,{default:i(()=>[t(B,{avatar:"",src:wx}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Tom")]),_:1}),n(" Top Contributor ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:kl}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Christian Rocha")]),_:1}),n(" Admin ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:Bn}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Matt")]),_:1}),n(" Top Rated User ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Inverted",description:"A list can be inverted to appear on a dark background",code:e.invertedVarCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(C,{inverted:"",relaxed:"",divided:""},{default:i(()=>[t(_,null,{default:i(()=>[t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Snickerdoodle")]),_:1}),n(" An excellent companion ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Poodle")]),_:1}),n(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Paulo")]),_:1}),n(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Selection",description:"A selection list formats list items as possible choices",code:e.selectionVarCode},{default:i(()=>[t(C,{selection:"",verticalAlign:"middle"},{default:i(()=>[t(_,null,{default:i(()=>[t(B,{avatar:"",src:Va}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:kl}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:Ti}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Animated",description:"A list can animate to set the current item apart from the list",code:e.animatedVarCode},{default:i(()=>[t(C,{animated:"",verticalAlign:"middle"},{default:i(()=>[t(_,null,{default:i(()=>[t(B,{avatar:"",src:Va}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:kl}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:Ti}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Relaxed",description:"A list can relax its padding to provide more negative space",code:e.relaxedVarCode},{default:i(()=>[t(C,{relaxed:""},{default:i(()=>[t(_,null,{default:i(()=>[t(B,{avatar:"",src:Ti}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("Daniel Louise")]),_:1}),t(w,null,{default:i(()=>[n(" Last seen watching "),Dx,n(" just now. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:jo}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("Stevie Feliciano")]),_:1}),t(w,null,{default:i(()=>[n(" Last seen watching "),Ex,n(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:ei}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(w,null,{default:i(()=>[n(" Last seen watching "),Rx,n(" yesterday. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Divided",description:"A list can show divisions between content",code:e.dividedVarCode},{default:i(()=>[t(C,{divided:"",verticalAlign:"middle"},{default:i(()=>[t(_,null,{default:i(()=>[t(B,{avatar:"",src:Ti}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("Daniel Louise")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:jo}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("Stevie Feliciano")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:ei}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Celled",description:"A list can divide its items into cells",code:e.celledVarCode},{default:i(()=>[t(C,{celled:""},{default:i(()=>[t(_,null,{default:i(()=>[t(B,{avatar:"",src:Va}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Snickerdoodle")]),_:1}),n(" An excellent companion ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:Ti}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Poodle")]),_:1}),n(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:Ti}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Paulo")]),_:1}),n(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Size",description:"A list can vary in size",code:e.sizeCode},{default:i(()=>[t(C,{horizontal:"",divided:"",size:"mini"},{default:i(()=>[t(_,null,{default:i(()=>[t(B,{avatar:"",src:Va}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:kl}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:Ti}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content Variations")]),_:1}),t(k,{title:"Vertical Aligned",description:"An element inside a list can be vertically aligned",code:e.verticalAlignedCode},{default:i(()=>[t(C,{horizontal:""},{default:i(()=>[t(_,null,{default:i(()=>[t(B,{avatar:"",src:Wt}),t(x,{verticalAlign:"top"},{default:i(()=>[n(" Top Aligned ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:Wt}),t(x,{verticalAlign:"middle"},{default:i(()=>[n(" Middle ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:Wt}),t(x,{verticalAlign:"bottom"},{default:i(()=>[n(" Bottom ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Floated",description:"An list, or an element inside a list can be floated left or right",code:e.floatedCode},{default:i(()=>[S("div",null,[t(C,{floated:"right",horizontal:""},{default:i(()=>[t(_,{disabled:""},{default:i(()=>[n("© GitHub, Inc.")]),_:1}),t(_,{as:"a"},{default:i(()=>[n("Terms")]),_:1}),t(_,{as:"a"},{default:i(()=>[n("Privacy")]),_:1}),t(_,{as:"a"},{default:i(()=>[n("Contact")]),_:1})]),_:1}),t(C,{horizontal:""},{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("About Us")]),_:1}),t(_,{as:"a"},{default:i(()=>[n("Jobs")]),_:1})]),_:1})])]),_:1},8,["code"])]),_:1})])}const Px=ke(Cx,[["render",zx]]),Mx=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader />
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Vx={__name:"LoaderDoc",setup(e){return(a,l)=>($(),D(M,{label:"Loader",code:Mx},{description:i(()=>[n(" A loader ")]),example:i(()=>[t(p(Le),null,{default:i(()=>[t(p(Vt),{active:""},{default:i(()=>[t(p(Re))]),_:1}),t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Fx=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text>Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Hx={__name:"TextLoaderDoc",setup(e){return(a,l)=>($(),D(M,{label:"Text Loader",code:Fx},{description:i(()=>[n(" A loader can contain text ")]),example:i(()=>[t(p(Le),null,{default:i(()=>[t(p(Vt),{active:""},{default:i(()=>[t(p(Re),{text:""},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Nx=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader Indeterminate text>Preparing Files</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Ox={__name:"IndeterminateDoc",setup(e){return(a,l)=>($(),D(M,{label:"Indeterminate",code:Nx},{description:i(()=>[n(" A loader can show it's unsure of how long a task will take ")]),example:i(()=>[t(p(Le),null,{default:i(()=>[t(p(Vt),{active:""},{default:i(()=>[t(p(Re),{Indeterminate:"",text:""},{default:i(()=>[n("Preparing Files")]),_:1})]),_:1}),t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},jx=`<template>
  <SuiSegment>
    <SuiLoader active />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Gx={__name:"ActiveDoc",setup(e){return(a,l)=>($(),D(M,{label:"Active",code:jx},{description:i(()=>[n(" A loader can be active or visible ")]),example:i(()=>[t(p(Le),null,{default:i(()=>[t(p(Re),{active:""}),t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},qx=`<template>
  <SuiSegment>
    <SuiLoader disabled />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Ux={__name:"DisabledDoc",setup(e){return(a,l)=>($(),D(M,{label:"Disabled",code:qx},{description:i(()=>[n(" A loader can be disabled or hidden ")]),example:i(()=>[t(p(Le),null,{default:i(()=>[t(p(Re),{disabled:""}),t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Yx=`<template>
  <SuiLoader active inline />
</template>`,Jx={__name:"InlineDoc",setup(e){return(a,l)=>($(),D(M,{label:"Inline",code:Yx},{description:i(()=>[n(" Loaders can appear inline with content ")]),example:i(()=>[t(p(Re),{active:"",inline:""})]),_:1}))}},Wx=`<template>
  <SuiLoader active inline />
</template>`,Kx={__name:"InlineCenterDoc",setup(e){return(a,l)=>($(),D(M,{label:"Inline Center",code:Wx},{description:i(()=>[n(" Loaders can appear inline centered with content ")]),example:i(()=>[t(p(Re),{active:"",inline:"centered"})]),_:1}))}},Xx=`<template>
  <SuiLoader slow active inline />
  <SuiLoader active inline />
  <SuiLoader fast active inline />
</template>`,Qx={__name:"SpeedDoc",setup(e){return(a,l)=>($(),D(M,{label:"Speed",code:Xx},{description:i(()=>[n(" Loaders can appear slow, normal or fast ")]),example:i(()=>[t(p(Re),{slow:"",active:"",inline:""}),t(p(Re),{active:"",inline:""}),t(p(Re),{fast:"",active:"",inline:""})]),_:1}))}},Zx=`<template>
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
</template>`,e$={__name:"ColorsDoc",setup(e){return(a,l)=>($(),D(M,{label:"Colors",code:Zx},{description:i(()=>[n(" Loaders can be different colors ")]),example:i(()=>[t(p(Re),{active:"",inline:"",primary:""}),t(p(Re),{active:"",inline:"",secondary:""}),t(p(Re),{active:"",inline:"",color:"red"}),t(p(Re),{active:"",inline:"",color:"orange"}),t(p(Re),{active:"",inline:"",color:"yellow"}),t(p(Re),{active:"",inline:"",color:"olive"}),t(p(Re),{active:"",inline:"",color:"green"}),t(p(Re),{active:"",inline:"",color:"teal"}),t(p(Re),{active:"",inline:"",color:"blue"}),t(p(Re),{active:"",inline:"",color:"violet"}),t(p(Re),{active:"",inline:"",color:"purple"}),t(p(Re),{active:"",inline:"",color:"pink"}),t(p(Re),{active:"",inline:"",color:"brown"}),t(p(Re),{active:"",inline:"",color:"grey"}),t(p(Re),{active:"",inline:"",color:"black"})]),_:1}))}},t$=`<template>
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
</template>`,i$={__name:"SizeDoc",setup(e){return(a,l)=>($(),D(M,{label:"Size",code:t$},{description:i(()=>[n(" Loaders can have different sizes ")]),example:i(()=>[t(p(Le),null,{default:i(()=>[t(p(Vt),{active:""},{default:i(()=>[t(p(Re),{text:"",size:"mini"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(p(Le),null,{default:i(()=>[t(p(Vt),{active:""},{default:i(()=>[t(p(Re),{text:"",size:"tiny"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(p(Le),null,{default:i(()=>[t(p(Vt),{active:""},{default:i(()=>[t(p(Re),{text:"",size:"small"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(p(Le),null,{default:i(()=>[t(p(Vt),{active:""},{default:i(()=>[t(p(Re),{text:"",size:"large"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(p(Le),null,{default:i(()=>[t(p(Vt),{active:""},{default:i(()=>[t(p(Re),{text:"",size:"big"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(p(Le),null,{default:i(()=>[t(p(Vt),{active:""},{default:i(()=>[t(p(Re),{text:"",size:"huge"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},a$=`<template>
  <SuiSegment inverted>
    <SuiLoader active inverted />

    <SuiImage src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,l$={__name:"InvertedDoc",setup(e){return(a,l)=>($(),D(M,{label:"Inverted",code:a$},{description:i(()=>[n(" Loaders can have their colors inverted. ")]),example:i(()=>[t(p(Le),{inverted:""},{default:i(()=>[t(p(Re),{active:"",inverted:""}),t(p(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},n$={__name:"Loader",setup(e){const a=[{id:"loader",label:"Loader",category:"Types",component:Vx},{id:"text-loader",label:"Text Loader",category:"Types",component:Hx},{id:"indeterminate",label:"Indeterminate",category:"States",component:Ox},{id:"active",label:"Active",category:"States",component:Gx},{id:"disabled",label:"Disabled",category:"States",component:Ux},{id:"inline",label:"Inline",category:"Variations",component:Jx},{id:"inline-center",label:"Inline Center",category:"Variations",component:Kx},{id:"speed",label:"Speed",category:"Variations",component:Qx},{id:"colors",label:"Colors",category:"Variations",component:e$},{id:"size",label:"Size",category:"Variations",component:i$},{id:"inverted",label:"Inverted",category:"Variations",component:l$}];return(l,o)=>($(),D(Ct,{title:"Loader",description:"A loader alerts a user to wait for an activity to complete","component-docs":a}))}},at="/vue-fomantic-ui/images/wireframe/short-paragraph.png",o$=R({name:"RailDoc",components:{DocExample:Ge},setup(){return{railCode:`<sui-grid centered :columns="3">
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
</sui-grid>`}}}),s$={class:"intro"};function r$(e,a,l,o,r,c){const m=y("sui-header-subheader"),f=y("sui-header"),s=y("sui-divider"),u=y("sui-icon"),g=y("sui-menu-item"),d=y("sui-menu"),h=y("sui-container"),v=y("sui-segment"),_=y("sui-image"),C=y("sui-rail"),k=y("sui-grid-column"),T=y("sui-grid"),b=y("doc-example");return $(),he("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",s$,[t(f,{as:"h1"},{default:i(()=>[n("Rail "),t(m,null,{default:i(()=>[n(" A rail is used to show accompanying content outside the boundaries of the main view of a site ")]),_:1})]),_:1}),t(s,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(b,{title:"Rail",description:"A rail can be presented on the left or right side of a container",code:e.railCode},{default:i(()=>[t(T,{centered:"",columns:3},{default:i(()=>[t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[t(_,{src:at}),t(C,{position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(C,{position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Internal",description:"A rail can attach itself to the inside of a container",code:e.internalCode},{default:i(()=>[t(v,{textAlign:"center"},{default:i(()=>[t(_,{src:at}),t(C,{internal:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[n("Left Rail Content")]),_:1})]),_:1}),t(C,{internal:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[n("Right Rail Content")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Dividing",description:"A rail can create a division between itself and a container",code:e.dividingCode},{default:i(()=>[t(T,{centered:"",columns:3},{default:i(()=>[t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[t(_,{src:at}),t(C,{dividing:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(C,{dividing:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(b,{title:"Attached",description:"A rail can appear attached to the main viewport",code:e.attachedCode},{default:i(()=>[t(T,{centered:"",columns:3},{default:i(()=>[t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[t(_,{src:at}),t(C,{attached:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(C,{attached:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Close",description:"A rail can appear closer to the main viewport",code:e.closeCode},{default:i(()=>[t(T,{centered:"",columns:3},{default:i(()=>[t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[t(_,{src:at}),t(C,{close:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(C,{close:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Size",description:"A rail can have different sizes",code:e.sizeCode},{default:i(()=>[t(T,{centered:"",columns:3},{default:i(()=>[t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[t(_,{src:at}),t(C,{size:"small",position:"left"},{default:i(()=>[n(" Left Small Rail ")]),_:1}),t(C,{size:"large",position:"right"},{default:i(()=>[n(" Right Large Rail ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const u$=ke(o$,[["render",r$]]),c$="/vue-fomantic-ui/images/avatar/large/ade.jpg",Sc="/vue-fomantic-ui/images/avatar/large/chris.jpg",Go="/vue-fomantic-ui/images/avatar/large/stevie.jpg",wc="/vue-fomantic-ui/images/avatar/large/nan.jpg",d$=R({name:"RevealDoc",components:{DocExample:Ge},setup(){return{fadeCode:`<sui-reveal animated="fade">
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
</sui-reveal>`}}}),m$={class:"intro"};function p$(e,a,l,o,r,c){const m=y("sui-header-subheader"),f=y("sui-header"),s=y("sui-divider"),u=y("sui-icon"),g=y("sui-menu-item"),d=y("sui-menu"),h=y("sui-container"),v=y("sui-segment"),_=y("sui-image"),C=y("sui-reveal-content"),k=y("sui-reveal"),T=y("doc-example");return $(),he("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",m$,[t(f,{as:"h1"},{default:i(()=>[n("Reveal "),t(m,null,{default:i(()=>[n(" A reveal displays additional content in place of previous content when activated ")]),_:1})]),_:1}),t(s,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(T,{title:"Fade",description:"An element can disappear to reveal content below",code:e.fadeCode},{default:i(()=>[t(k,{animated:"fade"},{default:i(()=>[t(C,{visible:""},{default:i(()=>[t(_,{size:"small",src:Wt})]),_:1}),t(C,{hidden:""},{default:i(()=>[t(_,{size:"small",src:c$})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Move",description:"An element can move in a direction to reveal content",code:e.moveCode},{default:i(()=>[t(k,{animated:"move"},{default:i(()=>[t(C,{visible:""},{default:i(()=>[t(_,{size:"small",src:Wt})]),_:1}),t(C,{hidden:""},{default:i(()=>[t(_,{size:"small",src:Sc})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Rotate",description:"An element can rotate to reveal content below",code:e.rotateCode},{default:i(()=>[t(k,{animated:"rotate"},{default:i(()=>[t(C,{visible:""},{default:i(()=>[t(_,{circular:"",size:"small",src:Wt})]),_:1}),t(C,{hidden:""},{default:i(()=>[t(_,{circular:"",size:"small",src:Go})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(T,{title:"Active",description:"An active reveal displays its hidden content",code:e.activeCode},{default:i(()=>[t(k,{active:"",animated:"move"},{default:i(()=>[t(C,{visible:""},{default:i(()=>[t(_,{size:"small",src:Wt})]),_:1}),t(C,{hidden:""},{default:i(()=>[t(_,{size:"small",src:wc})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Disabled",description:"A disabled reveal will not animate when hovered",code:e.disabledCode},{default:i(()=>[t(k,{disabled:"",animated:"move"},{default:i(()=>[t(C,{visible:""},{default:i(()=>[t(_,{size:"small",src:Wt})]),_:1}),t(C,{hidden:""},{default:i(()=>[t(_,{size:"small",src:wc})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(T,{title:"Instant",description:"An element can show its content without delay",code:e.instantCode},{default:i(()=>[t(k,{instant:"",animated:"move"},{default:i(()=>[t(C,{visible:""},{default:i(()=>[t(_,{size:"small",src:Wt})]),_:1}),t(C,{hidden:""},{default:i(()=>[t(_,{size:"small",src:Sc})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const f$=ke(d$,[["render",p$]]),g$=R({name:"SegmentDoc",components:{DocExample:Ge},setup(){return{segmentCode:"<sui-segment>Pellentesque habitant morbi tristique senectus.</sui-segment>",placeholderCode:`<sui-segment placeholder>
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
</sui-segment>`}}}),h$={class:"intro"},_$=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),b$=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),v$=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),y$=S("p",null,"Top",-1),S$=S("p",null,"Middle",-1),w$=S("p",null,"Middle",-1),C$=S("p",null,"Middle",-1),A$=S("p",null,"Bottom",-1),k$=S("p",null,"I'm here to tell you something, and you will probably read me first.",-1),x$=S("p",null,"This segment is on top",-1),$$=S("p",null,"This segment is attached on both sides",-1),B$=S("p",null,"This segment is on bottom",-1),T$=S("p",null,"Fitted Segment",-1),L$=S("p",null,"Horizontally fitted segment",-1),I$=S("p",null,"Vertically fitted segment",-1),D$=S("p",null,"I'm here to tell you something, and you will probably read me first.",-1),E$=S("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),R$=S("p",null,"If you notice me you must be looking very hard.",-1),z$=S("p",null,"This segment will appear to the right",-1),P$=S("p",null,"This segment will appear to the left",-1),M$=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1);function V$(e,a,l,o,r,c){const m=y("sui-header-subheader"),f=y("sui-header"),s=y("sui-divider"),u=y("sui-icon"),g=y("sui-menu-item"),d=y("sui-menu"),h=y("sui-container"),v=y("sui-segment"),_=y("doc-example"),C=y("sui-button"),k=y("sui-segment-group");return $(),he("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",h$,[t(f,{as:"h1"},{default:i(()=>[n("Segment "),t(m,null,{default:i(()=>[n(" A segment is used to create a grouping of related content ")]),_:1})]),_:1}),t(s,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(_,{title:"Segment",description:"A segment of content",code:e.segmentCode},{default:i(()=>[t(v,null,{default:i(()=>[n("Pellentesque habitant morbi tristique senectus.")]),_:1})]),_:1},8,["code"]),t(_,{title:"Placeholder Segment",description:"A segment can be used to reserve space for conditionally displayed content",code:e.placeholderCode},{default:i(()=>[t(v,{placeholder:""},{default:i(()=>[t(f,{icon:""},{default:i(()=>[t(u,{name:"file outline"}),n(" No documents are listed for this customer. ")]),_:1}),t(C,{color:"primary"},{default:i(()=>[n("Add Document")]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Raised",description:"A segment may be formatted to raise above the page",code:e.raisedCode},{default:i(()=>[t(v,{raised:""},{default:i(()=>[_$]),_:1})]),_:1},8,["code"]),t(_,{title:"Stacked",description:"A segment can be formatted to show it contains multiple pages",code:e.stackedCode},{default:i(()=>[t(v,{stacked:""},{default:i(()=>[b$]),_:1})]),_:1},8,["code"]),t(_,{title:"Piled",description:"A segment can be formatted to look like a pile of pages",code:e.piledCode},{default:i(()=>[t(v,{piled:""},{default:i(()=>[v$]),_:1})]),_:1},8,["code"]),t(_,{title:"Vertical Segment",description:"A vertical segment formats content to be aligned as part of a vertical group",code:e.verticalCode},{default:i(()=>[S("div",null,[t(v,{vertical:""},{default:i(()=>[n(" Te eum doming eirmod, nominati pertinacia argumentum ad his. ")]),_:1}),t(v,{vertical:""},{default:i(()=>[n(" Pellentesque habitant morbi tristique senectus. ")]),_:1}),t(v,{vertical:""},{default:i(()=>[n(" Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. ")]),_:1})])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Groups")]),_:1}),t(_,{title:"Segments",description:"A group of segments can be formatted to appear together",code:e.segmentsCode},{default:i(()=>[t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[y$]),_:1}),t(v,null,{default:i(()=>[S$]),_:1}),t(v,null,{default:i(()=>[w$]),_:1}),t(v,null,{default:i(()=>[C$]),_:1}),t(v,null,{default:i(()=>[A$]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Nested Segments",description:"A group of segments can be nested in another group of segments",code:e.nestedCode},{default:i(()=>[t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Top")]),_:1}),t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Nested Top")]),_:1}),t(v,null,{default:i(()=>[n("Nested Middle")]),_:1}),t(v,null,{default:i(()=>[n("Nested Bottom")]),_:1})]),_:1}),t(k,{horizontal:""},{default:i(()=>[t(v,null,{default:i(()=>[n("Top")]),_:1}),t(v,null,{default:i(()=>[n("Middle")]),_:1}),t(v,null,{default:i(()=>[n("Bottom")]),_:1})]),_:1}),t(v,null,{default:i(()=>[n("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Horizontal Segments",description:"A segment group can appear horizontally",code:e.horizontalCode},{default:i(()=>[t(k,{horizontal:""},{default:i(()=>[t(v,null,{default:i(()=>[n("Left")]),_:1}),t(v,null,{default:i(()=>[n("Middle")]),_:1}),t(v,null,{default:i(()=>[n("Right")]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Raised Segments",description:"A group of segments can be raised",code:e.raisedSegmentsCode},{default:i(()=>[t(k,{raised:""},{default:i(()=>[t(v,null,{default:i(()=>[n("Top")]),_:1}),t(v,null,{default:i(()=>[n("Middle")]),_:1}),t(v,null,{default:i(()=>[n("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Stacked Segments",description:"A group of segments can be stacked",code:e.stackedSegmentsCode},{default:i(()=>[t(k,{stacked:""},{default:i(()=>[t(v,null,{default:i(()=>[n("Top")]),_:1}),t(v,null,{default:i(()=>[n("Middle")]),_:1}),t(v,null,{default:i(()=>[n("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Piled Segments",description:"A group of segments can be piled",code:e.piledSegmentsCode},{default:i(()=>[t(k,{piled:""},{default:i(()=>[t(v,null,{default:i(()=>[n("Top")]),_:1}),t(v,null,{default:i(()=>[n("Middle")]),_:1}),t(v,null,{default:i(()=>[n("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(_,{title:"Disabled",description:"A segment may show its content is disabled",code:e.disabledCode},{default:i(()=>[t(v,{disabled:""},{default:i(()=>[n("Disabled content")]),_:1})]),_:1},8,["code"]),t(_,{title:"Loading",description:"A segment may show its content is being loaded",code:e.loadingCode},{default:i(()=>[t(v,{loading:""},{default:i(()=>[n("Now Loading...")]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(_,{title:"Inverted",description:"A segment can have its colors inverted for contrast",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[k$]),_:1})]),_:1},8,["code"]),t(_,{title:"Attached",description:"A segment can be attached to other content on a page",code:e.attachedCode},{default:i(()=>[S("div",null,[t(v,{attached:"top"},{default:i(()=>[x$]),_:1}),t(v,{attached:""},{default:i(()=>[$$]),_:1}),t(v,{attached:"bottom"},{default:i(()=>[B$]),_:1})])]),_:1},8,["code"]),t(_,{title:"Padded",description:"A segment can increase its padding",code:e.paddedCode},{default:i(()=>[t(v,{padded:""},{default:i(()=>[n("Padded content")]),_:1})]),_:1},8,["code"]),t(_,{title:"Fitted",description:"A segment can remove its padding, vertically or horizontally",code:e.fittedCode},{default:i(()=>[S("div",null,[t(v,{fitted:""},{default:i(()=>[T$]),_:1}),t(v,{fitted:"horizontally"},{default:i(()=>[L$]),_:1}),t(v,{fitted:"vertically"},{default:i(()=>[I$]),_:1})])]),_:1},8,["code"]),t(_,{title:"Compact",description:"A segment may take up only as much space as is necessary",code:e.compactCode},{default:i(()=>[t(v,{compact:""},{default:i(()=>[n("Compact content")]),_:1})]),_:1},8,["code"]),t(_,{title:"Colored",description:"A segment can be colored",code:e.coloredCode},{default:i(()=>[S("div",null,[t(v,{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(v,{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(v,{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(v,{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(v,{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(v,{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(v,{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(v,{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(v,{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(v,{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(v,{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(v,{color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(v,{color:"black"},{default:i(()=>[n("Black")]),_:1})])]),_:1},8,["code"]),t(_,{title:"Emphasis",description:"A segment can be formatted to appear more or less noticeable",code:e.emphasisCode},{default:i(()=>[S("div",null,[t(v,null,{default:i(()=>[D$]),_:1}),t(v,{secondary:""},{default:i(()=>[E$]),_:1}),t(v,{tertiary:""},{default:i(()=>[R$]),_:1})])]),_:1},8,["code"]),t(_,{title:"Circular",description:"A segment can be circular",code:e.circularCode},{default:i(()=>[S("div",null,[t(v,{circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[t(f,{as:"h2"},{default:i(()=>[n(" Buy Now "),t(m,null,{default:i(()=>[n(" $10.99 ")]),_:1})]),_:1})]),_:1}),t(v,{inverted:"",circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[t(f,{as:"h2"},{default:i(()=>[n(" Buy Now "),t(m,null,{default:i(()=>[n(" $10.99 ")]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(_,{title:"Clearing",description:"A segment can clear floated content",code:e.clearingCode},{default:i(()=>[t(v,{clearing:""},{default:i(()=>[t(C,{floated:"right"},{default:i(()=>[n("Floated")]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Floated",description:"A segment can appear to the left or right of other content",code:e.floatedCode},{default:i(()=>[S("div",null,[t(v,{floated:"right"},{default:i(()=>[z$]),_:1}),t(v,{floated:"left"},{default:i(()=>[P$]),_:1})])]),_:1},8,["code"]),t(_,{title:"Text Alignment",description:"A segment can have its text aligned to a side",code:e.textAlignCode},{default:i(()=>[S("div",null,[t(v,{textAlign:"right"},{default:i(()=>[n(" Right ")]),_:1}),t(v,{textAlign:"left"},{default:i(()=>[n(" Left ")]),_:1}),t(v,{textAlign:"center"},{default:i(()=>[n(" Center ")]),_:1})])]),_:1},8,["code"]),t(_,{title:"Basic",description:"A basic segment has no special formatting",code:e.basicCode},{default:i(()=>[t(v,{basic:""},{default:i(()=>[M$]),_:1})]),_:1},8,["code"])]),_:1})])}const F$=ke(g$,[["render",V$]]),H$=R({name:"StepDoc",components:{DocExample:Ge},setup(){return{stepCode:`<sui-step-group>
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
</sui-segment>`}}}),N$={class:"intro"},O$=S("p",null,"The steps take up the entire column width",-1),j$=S("p",null,"Main content",-1);function G$(e,a,l,o,r,c){const m=y("sui-header-subheader"),f=y("sui-header"),s=y("sui-divider"),u=y("sui-icon"),g=y("sui-menu-item"),d=y("sui-menu"),h=y("sui-container"),v=y("sui-segment"),_=y("sui-step"),C=y("sui-step-group"),k=y("doc-example"),T=y("sui-step-title"),b=y("sui-step-description"),w=y("sui-step-content"),x=y("sui-grid-column"),B=y("sui-grid");return $(),he("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",N$,[t(f,{as:"h1"},{default:i(()=>[n("Step "),t(m,null,{default:i(()=>[n(" A step shows the completion status of an activity in a series of activities ")]),_:1})]),_:1}),t(s,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(k,{title:"Step",description:"A single step",code:e.stepCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Shipping")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Groups")]),_:1}),t(k,{title:"Steps",description:"A set of steps",code:e.stepsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Shipping")]),_:1}),t(b,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Billing")]),_:1}),t(b,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(_,{disabled:""},{default:i(()=>[t(u,{name:"info"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Ordered",description:"A step can show a ordered sequence of steps",code:e.orderedCode},{default:i(()=>[t(C,{ordered:""},{default:i(()=>[t(_,{completed:""},{default:i(()=>[t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Shipping")]),_:1}),t(b,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,{completed:""},{default:i(()=>[t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Billing")]),_:1}),t(b,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(_,{active:""},{default:i(()=>[t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(b,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Vertical",description:"A step can be displayed stacked vertically",code:e.verticalCode},{default:i(()=>[t(C,{vertical:""},{default:i(()=>[t(_,{completed:""},{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Shipping")]),_:1}),t(b,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,{completed:""},{default:i(()=>[t(u,{name:"credit card"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Billing")]),_:1}),t(b,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(_,{active:""},{default:i(()=>[t(u,{name:"info"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(b,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(k,{title:"Description",description:"A step can contain a description",code:e.descriptionCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Shipping")]),_:1}),t(b,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Icon",description:"A step can contain an icon",code:e.iconCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Shipping")]),_:1}),t(b,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Link",description:"A step can link",code:e.linkCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,{link:""},{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Shipping")]),_:1}),t(b,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Billing")]),_:1}),t(b,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(k,{title:"Active",description:"A step can be highlighted as active",code:e.activeCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Billing")]),_:1}),t(b,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Completed",description:"A step can show that a user has completed it",code:e.completedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,{completed:""},{default:i(()=>[t(u,{name:"payment"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Billing")]),_:1}),t(b,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Disabled",description:"A step can show that it cannot be selected",code:e.disabledCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,{disabled:""},{default:i(()=>[n("Billing")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(k,{title:"Stackable",description:"A step can stack vertically only on smaller screens",code:e.stackableCode},{default:i(()=>[t(C,{stackable:"tablet"},{default:i(()=>[t(_,null,{default:i(()=>[t(u,{name:"plane"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Shipping")]),_:1}),t(b,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,{active:""},{default:i(()=>[t(u,{name:"dollar"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Billing")]),_:1}),t(b,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(_,{disabled:""},{default:i(()=>[t(u,{name:"info circle"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(b,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Unstackable",description:"A step can prevent itself from stacking on mobile",code:e.unstackableCode},{default:i(()=>[t(C,{unstackable:""},{default:i(()=>[t(_,null,{default:i(()=>[t(u,{name:"plane"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Shipping")]),_:1}),t(b,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,{active:""},{default:i(()=>[t(u,{name:"dollar"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Billing")]),_:1}),t(b,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(_,{disabled:""},{default:i(()=>[t(u,{name:"info circle"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(b,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Fluid",description:"A fluid step takes up the width of its container",code:e.fluidCode},{default:i(()=>[t(B,{columns:2},{default:i(()=>[t(x,null,{default:i(()=>[t(C,{fluid:"",vertical:""},{default:i(()=>[t(_,{completed:""},{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Shipping")]),_:1}),t(b,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,{active:""},{default:i(()=>[t(u,{name:"dollar"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Billing")]),_:1}),t(b,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(x,null,{default:i(()=>[O$]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Attached",description:"Steps can be attached to other elements",code:e.attachedCode},{default:i(()=>[S("div",null,[t(C,{attached:"top"},{default:i(()=>[t(_,null,{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Shipping")]),_:1}),t(b,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Billing")]),_:1}),t(b,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{attached:""},{default:i(()=>[j$]),_:1}),t(C,{attached:"bottom"},{default:i(()=>[t(_,null,{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Shipping")]),_:1}),t(b,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Billing")]),_:1}),t(b,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(k,{title:"Evenly Divided",description:"Steps can be divided evenly inside their parent",code:e.evenlyDividedCode},{default:i(()=>[t(C,{widths:2},{default:i(()=>[t(_,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Billing")]),_:1})]),_:1})]),_:1}),t(_,{disabled:""},{default:i(()=>[t(u,{name:"info"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Size",description:"Steps can have different sizes",code:e.sizeCode},{default:i(()=>[t(C,{size:"mini"},{default:i(()=>[t(_,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Billing")]),_:1})]),_:1})]),_:1}),t(_,{disabled:""},{default:i(()=>[t(u,{name:"info"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Inverted",description:"A step's color can be inverted",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(C,{inverted:"",vertical:""},{default:i(()=>[t(_,{completed:""},{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Shipping")]),_:1}),t(b,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,{completed:""},{default:i(()=>[t(u,{name:"credit card"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Billing")]),_:1}),t(b,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(_,{active:""},{default:i(()=>[t(u,{name:"info"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(b,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const q$=ke(H$,[["render",G$]]),U$=R({name:"DocPageHeader",props:{title:String,sub:String}}),Y$={class:"intro",style:{padding:"2rem"}};function J$(e,a,l,o,r,c){const m=y("sui-header-subheader"),f=y("sui-header"),s=y("sui-divider"),u=y("sui-icon"),g=y("sui-menu-item"),d=y("sui-menu"),h=y("sui-container"),v=y("sui-segment");return $(),D(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",Y$,[t(f,{as:"h1"},{default:i(()=>[n(Te(e.title)+" ",1),t(m,null,{default:i(()=>[n(Te(e.sub),1)]),_:1})]),_:1}),t(s,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1})}const Ze=ke(U$,[["render",J$]]),W$=R({name:"BreadcrumbDoc",components:{DocPageHeader:Ze,DocExample:Ge},setup(){return{breadcrumbCode:`<sui-breadcrumb>
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
</sui-breadcrumb>`}}});function K$(e,a,l,o,r,c){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-breadcrumb-section"),u=y("sui-breadcrumb-divider"),g=y("sui-breadcrumb"),d=y("doc-example"),h=y("sui-segment"),v=y("sui-container");return $(),he("div",null,[t(m,{title:"Breadcrumb",sub:"A breadcrumb is used to show hierarchy between content"}),t(v,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(d,{title:"Breadcrumb",description:"A standard breadcrumb",code:e.breadcrumbCode},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{link:""},{default:i(()=>[n("Home")]),_:1}),t(u,null,{default:i(()=>[n(" / ")]),_:1}),t(s,{link:""},{default:i(()=>[n("Store")]),_:1}),t(u,null,{default:i(()=>[n(" / ")]),_:1}),t(s,{active:""},{default:i(()=>[n("T-Shirt")]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{description:"You can do the same using shorthands",code:e.breadcrumbCode2},{default:i(()=>[t(g,{sections:[{content:"Home",link:!0},{content:"Store",link:!0},{content:"T-Shirt",active:!0}],icon:"right angle"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(d,{title:"Divider",description:"A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text",code:e.dividerCode},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{link:""},{default:i(()=>[n("Home")]),_:1}),t(u,{icon:"right chevron"}),t(s,{link:""},{default:i(()=>[n("Registration")]),_:1}),t(u,{icon:"right arrow"}),t(s,{active:""},{default:i(()=>[n("Personal Information")]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Section",description:"A breadcrumb can contain sections that can either be formatted as a link or text",code:e.sectionCode},{default:i(()=>[t(g,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Home")]),_:1}),t(u,null,{default:i(()=>[n(" / ")]),_:1}),t(s,{active:""},{default:i(()=>[n("Search")]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Link",description:"A section may be linkable or contain a link",code:e.linkCode},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{link:""},{default:i(()=>[n("Home")]),_:1}),t(u,null,{default:i(()=>[n(" / ")]),_:1}),t(s,{active:""},{default:i(()=>[n("Search")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(d,{title:"Active",description:"A section can be active",code:e.activeCode},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{link:""},{default:i(()=>[n("Product")]),_:1}),t(u,null,{default:i(()=>[n(" / ")]),_:1}),t(s,{active:""},{default:i(()=>[n("Paper Towels")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(d,{title:"Inverted",description:"A breadcrumb can be inverted",code:e.invertedCode},{default:i(()=>[t(h,{inverted:""},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(s,{link:""},{default:i(()=>[n("Home")]),_:1}),t(u,{icon:"right chevron"}),t(s,{link:""},{default:i(()=>[n("Registration")]),_:1}),t(u,{icon:"right chevron"}),t(s,{active:""},{default:i(()=>[n("Personal Information")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Size",description:"A breadcrumb can vary in size",code:e.sizeCode},{default:i(()=>[t(g,{size:"mini"},{default:i(()=>[t(s,{link:""},{default:i(()=>[n("Home")]),_:1}),t(u,{icon:"right chevron"}),t(s,{link:""},{default:i(()=>[n("Registration")]),_:1}),t(u,{icon:"right chevron"}),t(s,null,{default:i(()=>[n("Personal Information")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const X$=ke(W$,[["render",K$]]),Q$=R({name:"FormDoc",components:{DocPageHeader:Ze,DocExample:Ge},setup(){return{formCode:`<sui-form>
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
</sui-form>`}}});function Z$(e,a,l,o,r,c){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-form-field"),u=y("sui-checkbox"),g=y("sui-button"),d=y("sui-form"),h=y("doc-example"),v=y("sui-form-group"),_=y("sui-container");return $(),he("div",null,[t(m,{title:"Form",sub:"A form displays a set of related user input fields in a structured way"}),t(_,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(h,{title:"Form",description:"A form",code:e.formCode},{default:i(()=>[t(d,null,{default:i(()=>[t(s,{label:"First Name",placeholder:"First Name"}),t(s,{label:"Last Name",placeholder:"Last Name"}),t(s,null,{default:i(()=>[t(u,{label:"I agree to the Terms and Conditions"})]),_:1}),t(g,null,{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(h,{title:"Field",description:"A field is a form element containing a label and an input",code:e.fieldCode},{default:i(()=>[t(d,null,{default:i(()=>[t(s,{label:"Enter Password",type:"password"})]),_:1})]),_:1},8,["code"]),t(h,{title:"Fields",description:"A set of fields can appear grouped together",code:e.fieldsCode},{default:i(()=>[t(d,null,{default:i(()=>[t(v,null,{default:i(()=>[t(s,{label:"First name",placeholder:"First Name"}),t(s,{label:"Middle name",placeholder:"Middle Name"}),t(s,{label:"Last name",placeholder:"Last Name"})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const eB=ke(Q$,[["render",Z$]]),ue="/vue-fomantic-ui/images/wireframe/image.png",Jt="/vue-fomantic-ui/images/wireframe/media-paragraph.png",ze="/vue-fomantic-ui/images/wireframe/paragraph.png",Cc="/vue-fomantic-ui/images/wireframe/centered-paragraph.png",tB=R({name:"GridDoc",components:{DocPageHeader:Ze,DocExample:Ge},setup(){return{numbers:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],gridCode:`<sui-grid>
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
</sui-grid>`}}}),iB=S("br",null,null,-1);function aB(e,a,l,o,r,c){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-image"),u=y("sui-grid-column"),g=y("sui-grid"),d=y("doc-example"),h=y("sui-grid-row"),v=y("sui-segment"),_=y("sui-divider"),C=y("sui-menu-item"),k=y("sui-menu"),T=y("sui-container");return $(),he("div",null,[t(m,{title:"Grid",sub:"A grid is used to harmonize negative space in a layout"}),t(T,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(d,{title:"Grid",description:"A basic grid",code:e.gridCode},{default:i(()=>[t(g,null,{default:i(()=>[($(!0),he(Ce,null,tt(e.numbers,b=>($(),D(u,{key:b},{default:i(()=>[t(s,{src:ue})]),_:2},1024))),128))]),_:1})]),_:1},8,["code"]),t(d,{title:"Divided",description:"A grid can have dividers between its columns",code:e.dividedCode},{default:i(()=>[t(g,{columns:3,divided:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:Jt})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:Jt})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:Jt})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:Jt})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:Jt})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:Jt})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Vertical Divided",description:"A grid can have dividers between rows",code:e.verticalDividedCode},{default:i(()=>[t(g,{divided:"vertically"},{default:i(()=>[t(h,{columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(h,{columns:3},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Celled",description:"A grid can have rows divided into cells",code:e.celledCode},{default:i(()=>[t(g,{celled:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,{width:3},{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,{width:13},{default:i(()=>[t(s,{src:Cc})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{width:3},{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,{width:10},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{width:3},{default:i(()=>[t(s,{src:ue})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Internally Celled",description:"A grid can have rows divisions only between internal rows",code:e.internallyCelledCode},{default:i(()=>[t(g,{celled:"internally"},{default:i(()=>[t(h,null,{default:i(()=>[t(u,{width:3},{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,{width:13},{default:i(()=>[t(s,{src:Cc})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{width:3},{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,{width:10},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{width:3},{default:i(()=>[t(s,{src:ue})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(d,{title:"Rows",description:"A row is a horizontal grouping of columns",code:e.rowsCode},{default:i(()=>[t(g,{columns:3},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Columns",description:"Columns each contain gutters giving them equal spacing from other columns",code:e.columnsCode},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{width:8},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{width:8},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{width:8},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{width:8},{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(d,{title:"Floated",description:"A column can sit flush against the left or right edge of a row",code:e.floatedCode},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{floated:"left",width:5},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{floated:"right",width:5},{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Column Width",description:"A column can vary in width taking up more than a single grid column",code:e.columnWidthCode},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{width:4},{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,{width:9},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{width:3},{default:i(()=>[t(s,{src:Jt})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Column Count",description:"A grid can have a different number of columns per row",code:e.columnCountCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,{columns:3},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1})]),_:1}),t(h,{columns:4},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Equal Width",description:"Equal Width",code:e.equalWidthCode},{default:i(()=>[t(g,{columns:"equal"},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("1")]),_:1})]),_:1}),t(u,{width:8},{default:i(()=>[t(v,null,{default:i(()=>[n("2")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("3")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Stretched",description:"A row can stretch its contents to take up the entire column height",code:e.stretchedCode},{default:i(()=>[t(g,{columns:3,divided:""},{default:i(()=>[t(h,{stretched:""},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("1")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("1")]),_:1}),t(v,null,{default:i(()=>[n("2")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("1")]),_:1}),t(v,null,{default:i(()=>[n("2")]),_:1}),t(v,null,{default:i(()=>[n("3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Padded",description:"A grid can preserve its vertical and horizontal gutters on first and last columns",code:e.paddedCode},{default:i(()=>[S("div",null,[t(_),t(g,{padded:"",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})])]),_:1},8,["code"]),t(d,{title:"Relaxed",description:"A grid can increase its gutters to allow for more negative space",code:e.relaxedCode},{default:i(()=>[t(g,{relaxed:"",columns:4},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Colored",description:"A row or column can be colored",code:e.coloredCode},{default:i(()=>[t(g,{padded:"",columns:5},{default:i(()=>[t(u,{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u,{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u,{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u,{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u,{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u,{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u,{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u,{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u,{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u,{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u,{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u,{color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(u,{color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Centered",description:"A grid can have its columns centered",code:e.centeredCode},{default:i(()=>[t(g,{centered:"",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(h,{centered:"",columns:4},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Text Alignment",description:"A grid, row, or column can specify its text alignment",code:e.textAlignCode},{default:i(()=>[t(g,{textAlign:"center",columns:3},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(k,{vertical:"",fluid:""},{default:i(()=>[t(C,{header:""},{default:i(()=>[n("Cats")]),_:1})]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(k,{vertical:"",fluid:""},{default:i(()=>[t(C,{header:""},{default:i(()=>[n("Dogs")]),_:1}),t(C,null,{default:i(()=>[n("Poodle")]),_:1}),t(C,null,{default:i(()=>[n("Cockerspaniel")]),_:1})]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(k,{vertical:"",fluid:""},{default:i(()=>[t(C,{header:""},{default:i(()=>[n("Monkeys")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Vertical Alignment",description:"A grid, row, or column can specify its vertical alignment to have all its columns vertically centered",code:e.verticalAlignCode},{default:i(()=>[t(g,{verticalAlign:"middle",columns:4,centered:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue}),iB,t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Responsive Variations")]),_:1}),t(d,{title:"Doubling",description:"A grid can double its column width on tablet and mobile sizes",code:e.doublingCode},{default:i(()=>[t(g,{doubling:"",columns:5},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"stackable",description:"A grid can have its columns stack on-top of each other after reaching mobile breakpoints",code:e.stackableCode},{default:i(()=>[t(g,{stackable:"",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Reversed",description:"A grid or row can specify that its columns should reverse order at different device sizes",code:e.reversedCode},{default:i(()=>[t(g,{reversed:"computer vertically"},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Computer Row 3")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Computer Row 2")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Computer Row 1")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Device Visibility",description:"A columns or row can appear only for a specific device, or screen sizes",code:e.deviceVisibilityCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,{only:"large screen",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Large Screen")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Large Screen")]),_:1})]),_:1})]),_:1}),t(h,{only:"widescreen",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Widescreen")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Widescreen")]),_:1})]),_:1})]),_:1}),t(h,{only:"mobile",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Mobile")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Mobile")]),_:1})]),_:1})]),_:1}),t(h,{columns:3},{default:i(()=>[t(u,{only:"computer"},{default:i(()=>[t(v,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(u,{only:"mobile"},{default:i(()=>[t(v,null,{default:i(()=>[n("Tablet and Mobile")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("All Sizes")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("All Sizes")]),_:1})]),_:1})]),_:1}),t(h,{only:"computer",columns:4},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Computer")]),_:1})]),_:1})]),_:1}),t(h,{only:"tablet",columns:3},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Tablet")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Tablet")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Tablet")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Responsive Width",description:"A column can specify a width for a specific device",code:e.responsiveWidthCode},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const lB=ke(tB,[["render",aB]]),nB="/vue-fomantic-ui/images/logo.png",oB=R({name:"MenuDoc",components:{DocPageHeader:Ze,DocExample:Ge},setup(){return{menuCode:`<sui-menu>
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
</sui-menu>`}}}),sB=S("p",null,"Check out our new promotions",-1),rB=S("p",null,"Check out our collection of coupons",-1),uB=S("p",null,"Visit our rebate forum for information on claiming rebates",-1),cB=S("img",{src:nB},null,-1);function dB(e,a,l,o,r,c){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-menu-item"),u=y("sui-menu"),g=y("doc-example"),d=y("sui-input"),h=y("sui-menu-menu"),v=y("sui-label"),_=y("sui-button"),C=y("sui-dropdown-item"),k=y("sui-dropdown-menu"),T=y("sui-dropdown"),b=y("sui-icon"),w=y("sui-segment"),x=y("sui-container");return $(),he("div",null,[t(m,{title:"Menu",sub:"A menu displays grouped navigation actions"}),t(x,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(g,{title:"Menu",description:"A menu",code:e.menuCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Editorials")]),_:1}),t(s,null,{default:i(()=>[n("Reviews")]),_:1}),t(s,null,{default:i(()=>[n("Upcoming Events")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Secondary Menu",description:"A menu can adjust its appearance to de-emphasize its contents",code:e.secondaryMenuCode},{default:i(()=>[t(u,{secondary:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Home")]),_:1}),t(s,null,{default:i(()=>[n("Messages")]),_:1}),t(s,null,{default:i(()=>[n("Friends")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(s,null,{default:i(()=>[t(d,{icon:"search",placeholder:"Search..."})]),_:1}),t(s,null,{default:i(()=>[n("logout")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Pointing",description:"A menu can point to show its relationship to nearby content",code:e.pointingCode},{default:i(()=>[t(u,{pointing:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Home")]),_:1}),t(s,null,{default:i(()=>[n("Messages")]),_:1}),t(s,null,{default:i(()=>[n("Friends")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(s,null,{default:i(()=>[t(d,{transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Tabular",description:"A menu can be formatted to show tabs of information",code:e.tabularCode},{default:i(()=>[t(u,{tabular:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Bio")]),_:1}),t(s,null,{default:i(()=>[n("Photos")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Text",description:"A menu can be formatted for text content",code:e.textCode},{default:i(()=>[t(u,{text:""},{default:i(()=>[t(s,{header:""},{default:i(()=>[n("Sort By")]),_:1}),t(s,{active:""},{default:i(()=>[n("Closest")]),_:1}),t(s,null,{default:i(()=>[n("Most Comments")]),_:1}),t(s,null,{default:i(()=>[n("Most Popular")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Vertical Menu",description:"A vertical menu displays elements vertically",code:e.verticalMenuCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(s,{active:"",color:"teal"},{default:i(()=>[n(" Inbox "),t(v,{color:"teal",pointing:"left"},{default:i(()=>[n("1")]),_:1})]),_:1}),t(s,null,{default:i(()=>[n(" Spam "),t(v,null,{default:i(()=>[n("51")]),_:1})]),_:1}),t(s,null,{default:i(()=>[n(" Updates "),t(v,null,{default:i(()=>[n("1")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(d,{transparent:"",icon:"search",placeholder:"Search mail..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Pagination",description:"A pagination menu is specially formatted to present links to pages of content",code:e.paginationCode},{default:i(()=>[t(u,{pagination:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("1")]),_:1}),t(s,{disabled:""},{default:i(()=>[n("...")]),_:1}),t(s,null,{default:i(()=>[n("10")]),_:1}),t(s,null,{default:i(()=>[n("11")]),_:1}),t(s,null,{default:i(()=>[n("12")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(g,{title:"Header",description:"A menu item may include a header or may itself be a header",code:e.headerCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{header:""},{default:i(()=>[n("Our Company")]),_:1}),t(s,null,{default:i(()=>[n("About us")]),_:1}),t(s,null,{default:i(()=>[n("Jobs")]),_:1}),t(s,null,{default:i(()=>[n("Locations")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"textContentCode",description:"A vertical menu item can include any type of text content",code:e.textContentCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(s,null,{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Promotions")]),_:1}),sB]),_:1}),t(s,null,{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Coupons")]),_:1}),rB]),_:1}),t(s,null,{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Rebates")]),_:1}),uB]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Input",description:"A menu item can contain an input inside of it",code:e.inputCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{as:"div"},{default:i(()=>[t(d,{icon:"search",placeholder:"Search..."})]),_:1}),t(s,{position:"right",as:"div"},{default:i(()=>[t(d,{placeholder:"Navigate to ..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Button",description:"A menu item can contain a button inside of it",code:e.buttonCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{as:"div"},{default:i(()=>[t(_,{color:"primary"},{default:i(()=>[n("Sign up")]),_:1})]),_:1}),t(s,{as:"div"},{default:i(()=>[t(_,null,{default:i(()=>[n("Log in")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Link Item",description:"A menu may contain a link item, or an item formatted as if it is a link",code:e.linkItemCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(s,{href:"https://google.com"},{default:i(()=>[n("Visit Google")]),_:1}),t(s,{link:"",as:"div"},{default:i(()=>[n("Javascript Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Dropdown Item",description:"An item may contain a nested menu in a dropdown",code:e.dropdownItemCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(T,{item:"",text:"Categories"},{default:i(()=>[t(k,null,{default:i(()=>[t(C,{text:"Electoronics"}),t(C,{text:"Automotive"}),t(C,{text:"Home"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Menu",description:"A menu may contain another menu group in the same level as menu items",code:e.menuContentCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Browse")]),_:1}),t(s,null,{default:i(()=>[n("Submit")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(s,null,{default:i(()=>[n("Sign up")]),_:1}),t(s,null,{default:i(()=>[n("Help")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Sub Menu",description:"A menu item may contain another menu nested inside that acts as a grouped sub-menu",code:e.subMenuCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(s,{as:"div"},{default:i(()=>[t(d,{placeholder:"Search..."})]),_:1}),t(s,{as:"div"},{default:i(()=>[n(" Home "),t(h,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Search")]),_:1}),t(s,null,{default:i(()=>[n("Add")]),_:1}),t(s,null,{default:i(()=>[n("Remove")]),_:1})]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(b,{name:"grid layout"}),n(" Browse ")]),_:1}),t(s,null,{default:i(()=>[n("Messages")]),_:1}),t(T,{item:"",text:"More"},{default:i(()=>[t(k,null,{default:i(()=>[t(C,{icon:"edit",text:"Edit Profile"}),t(C,{icon:"globe",text:"Choose Language"}),t(C,{icon:"settings",text:"Account Settings"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(g,{title:"Hover",description:"A menu item can be hovered",code:e.hoverCode},{default:i(()=>[t(u,{compact:""},{default:i(()=>[t(s,null,{default:i(()=>[n("A link")]),_:1}),t(s,{as:"div",link:""},{default:i(()=>[n("div Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Active",description:"A menu item can be active",code:e.activeCode},{default:i(()=>[t(u,{compact:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(g,{title:"Stackable",description:"A menu can stack at mobile resolutions",code:e.stackableCode},{default:i(()=>[t(u,{stackable:""},{default:i(()=>[t(s,{as:"div"},{default:i(()=>[cB]),_:1}),t(s,null,{default:i(()=>[n("Features")]),_:1}),t(s,null,{default:i(()=>[n("Testimonials")]),_:1}),t(s,null,{default:i(()=>[n("Sign in")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Inverted",description:"A menu may have its colors inverted to show greater contrast",code:e.invertedCode},{default:i(()=>[t(u,{inverted:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Home")]),_:1}),t(s,null,{default:i(()=>[n("Messages")]),_:1}),t(s,null,{default:i(()=>[n("Friends")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored",description:"Additional colors can be specified",code:e.coloredCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{active:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(s,{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(s,{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(s,{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(s,{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(s,{color:"teal"},{default:i(()=>[n("Teal")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Icons",description:"A menu may have just icons",code:e.iconsCode},{default:i(()=>[t(u,{icon:""},{default:i(()=>[t(s,null,{default:i(()=>[t(b,{name:"gamepad"})]),_:1}),t(s,null,{default:i(()=>[t(b,{name:"video camera"})]),_:1}),t(s,null,{default:i(()=>[t(b,{name:"video play"})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Labeled Icon",description:"A menu may have labeled icons",code:e.labeledIconCode},{default:i(()=>[t(u,{icon:"labeled"},{default:i(()=>[t(s,null,{default:i(()=>[t(b,{name:"gamepad"}),n(" Games ")]),_:1}),t(s,null,{default:i(()=>[t(b,{name:"video camera"}),n(" Channels ")]),_:1}),t(s,null,{default:i(()=>[t(b,{name:"video play"}),n(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Fluid",description:"A vertical menu may take the size of its container",code:e.fluidCode},{default:i(()=>[t(u,{fluid:"",vertical:""},{default:i(()=>[t(s,null,{default:i(()=>[n("Run")]),_:1}),t(s,null,{default:i(()=>[n("Walk")]),_:1}),t(s,null,{default:i(()=>[n("Bike")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Compact",description:"A menu can take up only the space necessary to fit its content",code:e.compactCode},{default:i(()=>[t(u,{compact:""},{default:i(()=>[t(s,null,{default:i(()=>[t(b,{name:"gamepad"}),n(" Games ")]),_:1}),t(s,null,{default:i(()=>[t(b,{name:"video camera"}),n(" Channels ")]),_:1}),t(s,null,{default:i(()=>[t(b,{name:"video play"}),n(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Evenly Divided",description:"A menu may divide its items evenly",code:e.evenlyDividedCode},{default:i(()=>[t(u,{fluid:"",widths:3},{default:i(()=>[t(s,null,{default:i(()=>[n("Buy")]),_:1}),t(s,null,{default:i(()=>[n("Sell")]),_:1}),t(s,null,{default:i(()=>[n("Rent")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Attached",description:"A menu may be attached to other content segments",code:e.attachedCode},{default:i(()=>[S("div",null,[t(u,{attached:"top",tabular:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("tab1")]),_:1}),t(s,null,{default:i(()=>[n("tab2")]),_:1})]),_:1}),t(w,{attached:"bottom"},{default:i(()=>[n(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. ")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Size",description:"A menu can vary in size",code:e.sizeCode},{default:i(()=>[t(u,{size:"mini"},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Home")]),_:1}),t(s,null,{default:i(()=>[n("Messages")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(T,{item:"",text:"Language"},{default:i(()=>[t(k,null,{default:i(()=>[t(C,null,{default:i(()=>[n("English")]),_:1}),t(C,null,{default:i(()=>[n("Russian")]),_:1}),t(C,null,{default:i(()=>[n("Spanish")]),_:1})]),_:1})]),_:1}),t(s,{as:"div"},{default:i(()=>[t(_,{color:"primary"},{default:i(()=>[n("Sign up")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Fitted",description:"A menu item or menu can remove element padding, vertically or horizontally",code:e.fittedCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{fitted:""},{default:i(()=>[n("No padding whatsoever")]),_:1}),t(s,{fitted:"horizontally"},{default:i(()=>[n("No horizontal padding")]),_:1}),t(s,{fitted:"vertically"},{default:i(()=>[n("No vertical padding")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Borderless",description:"A menu item or menu can have no borders",code:e.borderlessCode},{default:i(()=>[t(u,{borderless:""},{default:i(()=>[t(s,null,{default:i(()=>[n("1")]),_:1}),t(s,null,{default:i(()=>[n("2")]),_:1}),t(s,null,{default:i(()=>[n("3")]),_:1}),t(s,null,{default:i(()=>[n("4")]),_:1}),t(s,null,{default:i(()=>[n("5")]),_:1}),t(s,null,{default:i(()=>[n("6")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const mB=ke(oB,[["render",dB]]),pB=R({name:"MessageDoc",components:{DocPageHeader:Ze,DocExample:Ge},setup(){return{messageCode:`<sui-message>
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
</div>`}}}),fB=S("p",null,"We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.",-1),gB=S("p",null,"Get the best news in your e-mail every day.",-1),hB=S("p",null,"You can't see me",-1),_B=S("p",null,"You can always see me",-1),bB=S("p",null,"Way to go!",-1),vB=S("p",null,"Get all the best inventions in your e-mail every day. Sign up now!",-1),yB=S("a",{href:"#"},"Login here",-1),SB=S("p",null,[n("Go to your "),S("b",null,"special offers"),n(" page to see now.")],-1),wB=S("p",null,"That offer has expired",-1);function CB(e,a,l,o,r,c){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-message-header"),u=y("sui-message"),g=y("doc-example"),d=y("sui-message-item"),h=y("sui-message-list"),v=y("sui-icon"),_=y("sui-message-content"),C=y("sui-form-field"),k=y("sui-form-group"),T=y("sui-button"),b=y("sui-form"),w=y("sui-container");return $(),he("div",null,[t(m,{title:"Message",sub:"A message displays information that explains nearby content"}),t(w,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(g,{title:"Message",description:"A basic message",code:e.messageCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Changes in Service")]),_:1}),fB]),_:1})]),_:1},8,["code"]),t(g,{title:"List Message",description:"A message with a list",code:e.listMessageCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("New Site Features")]),_:1}),t(h,null,{default:i(()=>[t(d,null,{default:i(()=>[n("You can now have cover images on blog pages")]),_:1}),t(d,null,{default:i(()=>[n("Drafts will now auto-save while writing")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Icon Message",description:"A message can contain an icon",code:e.iconMessageCode},{default:i(()=>[t(u,{icon:""},{default:i(()=>[t(v,{name:"inbox"}),t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[n(" Have you heard about our mailing list? ")]),_:1}),gB]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(g,{title:"Hidden",description:"A message can be hidden",code:e.hiddenCode},{default:i(()=>[t(u,{hidden:""},{default:i(()=>[hB]),_:1})]),_:1},8,["code"]),t(g,{title:"Visible",description:"A message can be set to visible to force itself to be shown",code:e.visibleCode},{default:i(()=>[t(u,{visible:""},{default:i(()=>[_B]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(g,{title:"Floating",description:"A message can float above content that it is related to",code:e.floatingCode},{default:i(()=>[t(u,{floating:""},{default:i(()=>[bB]),_:1})]),_:1},8,["code"]),t(g,{title:"Compact",description:"A message can only take up the width of its content",code:e.compactCode},{default:i(()=>[t(u,{compact:""},{default:i(()=>[vB]),_:1})]),_:1},8,["code"]),t(g,{title:"Attached",description:"A message can be formatted to attach itself to other content",code:e.attachedCode},{default:i(()=>[S("div",null,[t(u,{attached:"",header:"Welcome to our site!",content:"Fill out the form below to sign-up for a new account"}),t(b,{class:"attached fluid segment"},{default:i(()=>[t(k,{widths:"equal"},{default:i(()=>[t(C,{label:"First Name",placeholder:"First Name"}),t(C,{label:"Last Name",placeholder:"Last Name"})]),_:1}),t(C,{label:"Username",placeholder:"Username"}),t(C,{label:"Password",placeholder:"Password"}),t(T,{color:"primary"},{default:i(()=>[n("Submit")]),_:1})]),_:1}),t(u,{attached:"bottom",warning:""},{default:i(()=>[t(v,{name:"help"}),n(" Already signed up? "),yB,n(" instead. ")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Warning",description:"A message may be formatted to display warning messages",code:e.warningCode},{default:i(()=>[t(u,{warning:""},{default:i(()=>[t(v,{name:"close"}),t(s,null,{default:i(()=>[n(" You must register before you can do that! ")]),_:1}),n(" Visit our registration page, then try again ")]),_:1})]),_:1},8,["code"]),t(g,{title:"Info",description:"A message may be formatted to display information",code:e.infoCode},{default:i(()=>[t(u,{info:""},{default:i(()=>[t(s,null,{default:i(()=>[n("Was this what you wanted?")]),_:1}),t(h,null,{default:i(()=>[n("It's good to see you again.")]),_:1}),t(h,null,{default:i(()=>[n("Did you know it's been a while?")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Positive / Success",description:"A message may be formatted to display a positive message",code:e.positiveSuccessCode},{default:i(()=>[t(u,{positive:""},{default:i(()=>[t(s,null,{default:i(()=>[n("You are eligible for a reward")]),_:1}),SB]),_:1})]),_:1},8,["code"]),t(g,{title:"Negative / Error",description:"A message may be formatted to display a negative message",code:e.negativeErrorCode},{default:i(()=>[t(u,{negative:""},{default:i(()=>[t(v,{name:"close"}),t(s,null,{default:i(()=>[n("We're sorry we can't apply that discount")]),_:1}),wB]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored",description:"A message can be formatted to be different colors",code:e.coloredCode},{default:i(()=>[S("div",null,[t(u,{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u,{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u,{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u,{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u,{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u,{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u,{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u,{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u,{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u,{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u,{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u,{color:"black"},{default:i(()=>[n("Black")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Size",description:"A message can have different sizes",code:e.sizeCode},{default:i(()=>[S("div",null,[t(u,{size:"mini"},{default:i(()=>[n("This is a mini message.")]),_:1}),t(u,{size:"large"},{default:i(()=>[n("This is a large message.")]),_:1}),t(u,{size:"massive"},{default:i(()=>[n("This is a massive message.")]),_:1})])]),_:1},8,["code"])]),_:1})])}const AB=ke(pB,[["render",CB]]),kB=R({name:"TableDoc",components:{DocPageHeader:Ze,DocExample:Ge},setup(){return{tableCode:`<sui-table celled>
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
</sui-table>`}}}),xB=S("a",{href:"#"},"Edit",-1),$B=S("a",{href:"#"},"Edit",-1),BB=S("a",{href:"#"},"Edit",-1),TB=S("br",null,null,-1),LB=S("br",null,null,-1),IB=S("br",null,null,-1),DB=S("br",null,null,-1),EB=S("br",null,null,-1),RB=S("br",null,null,-1),zB=S("br",null,null,-1);function PB(e,a,l,o,r,c){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-table-header-cell"),u=y("sui-table-row"),g=y("sui-table-header"),d=y("sui-table-cell"),h=y("sui-table-body"),v=y("sui-table"),_=y("doc-example"),C=y("sui-icon"),k=y("sui-table-footer"),T=y("sui-container");return $(),he("div",null,[t(m,{title:"Table",sub:"A table displays a collections of data grouped into rows"}),t(T,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(_,{title:"Table",description:"A standard table",code:e.tableCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Age")]),_:1}),t(s,null,{default:i(()=>[n("Job")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("James")]),_:1}),t(d,null,{default:i(()=>[n("24")]),_:1}),t(d,null,{default:i(()=>[n("Engineer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jill")]),_:1}),t(d,null,{default:i(()=>[n("26")]),_:1}),t(d,null,{default:i(()=>[n("Engineer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Elyse")]),_:1}),t(d,null,{default:i(()=>[n("24")]),_:1}),t(d,null,{default:i(()=>[n("Designer")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Definition",description:"A table may be formatted to emphasize a first column that defines a rows content",code:e.definitionCode},{default:i(()=>[t(v,{definition:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s),t(s,null,{default:i(()=>[n("Arguments")]),_:1}),t(s,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("reset rating")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1}),t(d,null,{default:i(()=>[n("Resets rating to default value")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("set rating")]),_:1}),t(d,null,{default:i(()=>[n("rating (integer)")]),_:1}),t(d,null,{default:i(()=>[n("Sets the current star rating to specified value")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Structured",description:"A table can be formatted to display complex structured data",code:e.structuredCode},{default:i(()=>[t(v,{structured:"",celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{rowspan:"2"},{default:i(()=>[n("Name")]),_:1}),t(s,{rowspan:"2"},{default:i(()=>[n("Type")]),_:1}),t(s,{rowspan:"2"},{default:i(()=>[n("Files")]),_:1}),t(s,{colspan:"3"},{default:i(()=>[n("Languages")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Ruby")]),_:1}),t(s,null,{default:i(()=>[n("Javascript")]),_:1}),t(s,null,{default:i(()=>[n("Python")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Alpha Team")]),_:1}),t(d,null,{default:i(()=>[n("Project 1")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[n("2")]),_:1}),t(d,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(d),t(d)]),_:1}),t(u,null,{default:i(()=>[t(d,{rowspan:"3"},{default:i(()=>[n("Beta Team")]),_:1}),t(d,null,{default:i(()=>[n("Project 1")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[n("52")]),_:1}),t(d,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(d),t(d)]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Project 2")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[n("12")]),_:1}),t(d),t(d,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(d)]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Project 3")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[n("21")]),_:1}),t(d,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(d),t(d)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(_,{title:"Positive / Negative",description:"A cell or row may let a user know whether a value is good or bad",code:e.positiveNegativeCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(d,null,{default:i(()=>[n("Unknown")]),_:1}),t(d,{negative:""},{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,{positive:""},{default:i(()=>[t(d,null,{default:i(()=>[n("Jimmy")]),_:1}),t(d,null,{default:i(()=>[t(C,{name:"checkmark"}),n(" Approved ")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Unknown")]),_:1}),t(d,{positive:""},{default:i(()=>[t(C,{name:"close"}),n(" Requires call ")]),_:1})]),_:1}),t(u,{negative:""},{default:i(()=>[t(d,null,{default:i(()=>[n("Jill")]),_:1}),t(d,null,{default:i(()=>[n("Unknown")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Error",description:"A cell or row may call attention to an error or a negative value",code:e.errorCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,{error:""},{default:i(()=>[t(d,null,{default:i(()=>[n("Jimmy")]),_:1}),t(d,null,{default:i(()=>[n("Cannot pull data")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,{error:""},{default:i(()=>[t(C,{name:"attention"}),n(" Requires call ")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jill")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Warning",description:"A cell or row may warn a user",code:e.warningCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(d,null,{default:i(()=>[n("Unknown")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,{warning:""},{default:i(()=>[t(d,null,{default:i(()=>[n("Jimmy")]),_:1}),t(d,null,{default:i(()=>[t(C,{name:"attention"}),n(" Requires Action ")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Unknown")]),_:1}),t(d,{warning:""},{default:i(()=>[t(C,{name:"attention"}),n(" Hostile ")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jill")]),_:1}),t(d,null,{default:i(()=>[n("Unknown")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Active",description:"A cell or row can be active or selected by a user",code:e.activeCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,{active:""},{default:i(()=>[t(d,null,{default:i(()=>[n("Jimmy")]),_:1}),t(d,null,{default:i(()=>[n("Selected")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,{active:""},{default:i(()=>[n("Jill")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Disabled",description:"A cell can be disabled",code:e.disabledCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{disabled:""},{default:i(()=>[t(d,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jimmy")]),_:1}),t(d,null,{default:i(()=>[n("Selected")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,{disabled:""},{default:i(()=>[n("Jill")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Colored Cells",description:"A cell can be styled by the central color palette colors",code:e.coloredCellsCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,{color:"orange"},{default:i(()=>[n("No Name Specified")]),_:1}),t(d,null,{default:i(()=>[n("Unknown")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,{color:"blue"},{default:i(()=>[t(d,null,{default:i(()=>[n("Jimmy")]),_:1}),t(d,null,{default:i(()=>[t(C,{name:"microphone"}),n(" Recording session ")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Unknown")]),_:1}),t(d,{color:"pink"},{default:i(()=>[t(C,{name:"child"}),n(" Baby Party ")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jill")]),_:1}),t(d,null,{default:i(()=>[n("Unknown")]),_:1}),t(d,{color:"green"},{default:i(()=>[n("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Marked",description:"A cell or row can be marked by a colored left or right border",code:e.markedCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,{marked:"right",color:"blue"},{default:i(()=>[n("No Name Specified")]),_:1}),t(d,{marked:"left",color:"red"},{default:i(()=>[n("Unknown")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,{marked:"left",color:"green"},{default:i(()=>[n("Jimmy")]),_:1}),t(d,null,{default:i(()=>[t(C,{name:"microphone"}),n(" Recording session ")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Unknown")]),_:1}),t(d,{marked:"left",color:"orange"},{default:i(()=>[t(C,{name:"child"}),n(" Baby Party ")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jill")]),_:1}),t(d,null,{default:i(()=>[n("Unknown")]),_:1}),t(d,{marked:"right",color:"purple"},{default:i(()=>[n("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(_,{title:"Single Line",description:"A table can specify that its cell contents should remain on a single line, and not wrap",code:e.singleLineCode},{default:i(()=>[t(v,{"single-line":""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Registration Date")]),_:1}),t(s,null,{default:i(()=>[n("E-mail address")]),_:1}),t(s,null,{default:i(()=>[n("Premium Plan")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John Lilki")]),_:1}),t(d,null,{default:i(()=>[n("September 14, 2013")]),_:1}),t(d,null,{default:i(()=>[n("jhlilk22@yahoo.com")]),_:1}),t(d,null,{default:i(()=>[n("No")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie Harington")]),_:1}),t(d,null,{default:i(()=>[n("January 11, 2014")]),_:1}),t(d,null,{default:i(()=>[n("jamieharingonton@yahoo.com")]),_:1}),t(d,null,{default:i(()=>[n("Yes")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jill Lewis")]),_:1}),t(d,null,{default:i(()=>[n("May 11, 2014")]),_:1}),t(d,null,{default:i(()=>[n("jilsewris22@yahoo.com")]),_:1}),t(d,null,{default:i(()=>[n("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Fixed",description:"A table can use `table-layout: fixed` a special faster form of table rendering that does not resize table cells based on content",code:e.fixedCode},{default:i(()=>[t(v,{fixed:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jimmy")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Denied")]),_:1}),t(d,null,{default:i(()=>[n("Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Stacking",descirption:"A table can specify how it stacks table content responsively",code:e.stackingCode},{default:i(()=>[t(v,{stackable:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jimmy")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Denied")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Selectable Row",description:"A table can have its rows appear selectable",code:e.selectableRowCode},{default:i(()=>[t(v,{selectable:"",celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,{positive:""},{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,{warning:""},{default:i(()=>[t(d,null,{default:i(()=>[n("Jimmy")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,{negative:""},{default:i(()=>[n("Denied")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Selectable Cell",description:"A table cell can be selectable",code:e.selectableCellCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,{positive:""},{default:i(()=>[n("Approved")]),_:1}),t(d,{selectable:""},{default:i(()=>[xB]),_:1})]),_:1}),t(u,{warning:""},{default:i(()=>[t(d,null,{default:i(()=>[n("Jimmy")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,{selectable:""},{default:i(()=>[$B]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,{negative:""},{default:i(()=>[n("Denied")]),_:1}),t(d,{selectable:""},{default:i(()=>[BB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Verical Alignment",description:"A table header, row, or cell can adjust its vertical alignment",code:e.verticalAlignmentCode},{default:i(()=>[t(v,{striped:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{verticalAlign:"top"},{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,{verticalAlign:"top"},{default:i(()=>[n(" Notes "),TB,n(" 1"),LB,n(" 2"),IB]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,{verticalAlign:"bottom"},{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n(" Notes "),DB,n(" 1"),EB,n(" 2"),RB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Text Alignment",description:"A table header, row, or cell can adjust its text alignment",code:e.textAlignCode},{default:i(()=>[t(v,{striped:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,{textAlign:"right"},{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{textAlign:"center"},{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Striped",description:"A table can stripe alternate rows of content with a darker color to increase contrast",code:e.stripedCode},{default:i(()=>[t(v,{striped:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Date Joined")]),_:1}),t(s,null,{default:i(()=>[n("E-mail")]),_:1}),t(s,null,{default:i(()=>[n("Called")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John Lilki")]),_:1}),t(d,null,{default:i(()=>[n("September 14, 2013")]),_:1}),t(d,null,{default:i(()=>[n("jhlilk22@yahoo.com")]),_:1}),t(d,null,{default:i(()=>[n("No")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie Harington")]),_:1}),t(d,null,{default:i(()=>[n("January 11, 2014")]),_:1}),t(d,null,{default:i(()=>[n("jamieharingonton@yahoo.com")]),_:1}),t(d,null,{default:i(()=>[n("Yes")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jill Lewis")]),_:1}),t(d,null,{default:i(()=>[n("May 11, 2014")]),_:1}),t(d,null,{default:i(()=>[n("jilsewris22@yahoo.com")]),_:1}),t(d,null,{default:i(()=>[n("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Celled",description:"A table may be divided each row into separate cells",code:e.celledCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jill")]),_:1}),t(d,null,{default:i(()=>[n("Denied")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1}),t(k,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("3 People")]),_:1}),t(d,null,{default:i(()=>[n("2 Approved")]),_:1}),t(d)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Basic",description:"A table can reduce its complexity to increase readability",code:e.basicCode},{default:i(()=>[S("div",null,[t(v,{basic:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jill")]),_:1}),t(d,null,{default:i(()=>[n("Denied")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1}),zB,t(v,{basic:"very"},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jill")]),_:1}),t(d,null,{default:i(()=>[n("Denied")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(_,{title:"Collapsing",description:"A table can be collapsing, taking up only as much space as its rows",code:e.collapsingCode},{default:i(()=>[t(v,{collapsing:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Age")]),_:1}),t(s,null,{default:i(()=>[n("Gender")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("27")]),_:1}),t(d,null,{default:i(()=>[n("Male")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("32")]),_:1}),t(d,null,{default:i(()=>[n("Other")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jill")]),_:1}),t(d,null,{default:i(()=>[n("Denied")]),_:1}),t(d,null,{default:i(()=>[n("22")]),_:1}),t(d,null,{default:i(()=>[n("Other")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1}),t(k,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("3 People")]),_:1}),t(s,null,{default:i(()=>[n("2 Approved")]),_:1}),t(s),t(s),t(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Collapsing Cell",description:"A cell can be collapsing so that it only uses as much space as required",code:e.collapsingCellCode},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,{collapsing:""},{default:i(()=>[t(C,{name:"folder"}),n(" node_modules ")]),_:1}),t(d,null,{default:i(()=>[n("Initial commit")]),_:1}),t(d,null,{default:i(()=>[n("10 hours ago")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,{collapsing:""},{default:i(()=>[t(C,{name:"folder"}),n(" node_modules ")]),_:1}),t(d,null,{default:i(()=>[n("Initial commit")]),_:1}),t(d,null,{default:i(()=>[n("10 hours ago")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,{collapsing:""},{default:i(()=>[t(C,{name:"folder"}),n(" node_modules ")]),_:1}),t(d,null,{default:i(()=>[n("Initial commit")]),_:1}),t(d,null,{default:i(()=>[n("10 hours ago")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Column Count",description:"A table can specify its column count to divide its content evenly",code:e.columnCountCode},{default:i(()=>[t(v,{columns:5},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Age")]),_:1}),t(s,null,{default:i(()=>[n("Gender")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("27")]),_:1}),t(d,null,{default:i(()=>[n("Male")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("32")]),_:1}),t(d,null,{default:i(()=>[n("Other")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jill")]),_:1}),t(d,null,{default:i(()=>[n("Denied")]),_:1}),t(d,null,{default:i(()=>[n("22")]),_:1}),t(d,null,{default:i(()=>[n("Other")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1}),t(k,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("3 People")]),_:1}),t(s,null,{default:i(()=>[n("2 Approved")]),_:1}),t(s),t(s),t(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Column Width",description:"Column Width",code:e.columnWidthCode},{default:i(()=>[t(v,null,{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{width:10},{default:i(()=>[n("Name")]),_:1}),t(s,{width:6},{default:i(()=>[n("Status")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Colored",description:"A table can be given a color to distinguish it from other tables",code:e.coloredCode},{default:i(()=>[t(v,{color:"red"},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Food")]),_:1}),t(s,null,{default:i(()=>[n("Calories")]),_:1}),t(s,null,{default:i(()=>[n("Protein")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Apples")]),_:1}),t(d,null,{default:i(()=>[n("200")]),_:1}),t(d,null,{default:i(()=>[n("0g")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Orange")]),_:1}),t(d,null,{default:i(()=>[n("310")]),_:1}),t(d,null,{default:i(()=>[n("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Inverted",description:"A table's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Food")]),_:1}),t(s,null,{default:i(()=>[n("Calories")]),_:1}),t(s,null,{default:i(()=>[n("Protein")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Apples")]),_:1}),t(d,null,{default:i(()=>[n("200")]),_:1}),t(d,null,{default:i(()=>[n("0g")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Orange")]),_:1}),t(d,null,{default:i(()=>[n("310")]),_:1}),t(d,null,{default:i(()=>[n("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Padded",description:"A table may sometimes need to be more padded for legibility",code:e.paddedCode},{default:i(()=>[S("div",null,[t(v,{padded:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{padded:"very"},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(_,{title:"Compact",description:"A table may sometimes need to be more compact to make more rows visible at a time",code:e.compactCode},{default:i(()=>[S("div",null,[t(v,{compact:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{compact:"very"},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(_,{title:"Size",description:"A table can also be small or large",code:e.sizeCode},{default:i(()=>[t(v,{size:"small"},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jill")]),_:1}),t(d,null,{default:i(()=>[n("Denied")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const MB=ke(kB,[["render",PB]]),VB=R({name:"AdvertisementDoc",components:{DocPageHeader:Ze,DocExample:Ge},setup(){return{adCode:`<sui-advertisement unit="medium rectangle">
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
</div>`,panoramaCode:'<sui-advertisement unit="panorama" test="Panorama" />',netboardCode:'<sui-advertisement unit="netboard" test="Netboard" />',centeredCode:'<sui-advertisement centered unit="banner" test="Centered" /> ',testCode:'<sui-advertisement unit="medium rectangle" test="Ad Unit 1" />'}}}),FB=S("img",{src:ue},null,-1),HB=S("br",null,null,-1);function NB(e,a,l,o,r,c){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-advertisement"),u=y("doc-example"),g=y("sui-container");return $(),he("div",null,[t(m,{title:"Advertisement",sub:"An ad displays third-party promotional content"}),t(g,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(u,{title:"Ad",description:"A standard ad",code:e.adCode},{default:i(()=>[t(s,{unit:"medium rectangle"},{default:i(()=>[FB]),_:1})]),_:1},8,["code"]),t(u,{title:"Common Units",description:"An advertisement can appear in common ad unit sizes",code:e.commonUnitsCode},{default:i(()=>[S("div",null,[t(s,{unit:"medium rectangle",test:"Medium Rectangle"}),t(s,{unit:"banner",test:"Banner"}),t(s,{unit:"leaderboard",test:"Leaderboard"}),t(s,{unit:"large rectangle",test:"Large Rectangle"}),t(s,{unit:"half page",test:"Half Page"})])]),_:1},8,["code"]),t(u,{title:"Mobile",description:"An ad can use common mobile ad sizes",code:e.mobileCode},{default:i(()=>[S("div",null,[t(s,{unit:"mobile banner",test:"Mobile Banner"}),t(s,{unit:"mobile leaderboard",test:"Mobile Leaderboard"})])]),_:1},8,["code"]),t(u,{title:"Rectangle",description:"An ad can use a common rectangle ad unit size",code:e.rectangleCode},{default:i(()=>[t(s,{unit:"medium rectangle",test:"Medium Rectangle"})]),_:1},8,["code"]),t(u,{title:"Button",description:"An ad can use button ad unit size",code:e.buttonCode},{default:i(()=>[S("div",null,[t(s,{unit:"button",test:"Button"}),t(s,{unit:"square button",test:"Square Button"}),t(s,{unit:"small button",test:"Small Button"})])]),_:1},8,["code"]),t(u,{title:"Skyscraper",description:"An ad can use skyscraper ad unit size",code:e.skyscraperCode},{default:i(()=>[S("div",null,[t(s,{unit:"skyscraper",test:"Skyscraper"}),HB,t(s,{unit:"wide skyscraper",test:"Wide Skyscraper"})])]),_:1},8,["code"]),t(u,{title:"Banner",description:"An ad can use banner ad unit size",code:e.bannerCode},{default:i(()=>[S("div",null,[t(s,{unit:"banner",test:"Banner"}),t(s,{unit:"vertical banner",test:"Vertical Banner"}),t(s,{unit:"top banner",test:"Top Banner"}),t(s,{unit:"half banner",test:"Half Banner"})])]),_:1},8,["code"]),t(u,{title:"Leaderboard",description:"An ad can use leaderboard ad unit size",code:e.leaderboardCode},{default:i(()=>[S("div",null,[t(s,{unit:"leaderboard",test:"Leaderboard"}),t(s,{unit:"large leaderboard",test:"Large Leaderboard"}),t(s,{unit:"billboard",test:"Billboard"})])]),_:1},8,["code"]),t(u,{title:"Panorama",description:"An ad can use panorama ad unit size",code:e.panoramaCode},{default:i(()=>[t(s,{unit:"panorama",test:"Panorama"})]),_:1},8,["code"]),t(u,{title:"Netboard",description:"An ad can use netboard ad unit size",code:e.netboardCode},{default:i(()=>[t(s,{unit:"netboard",test:"Netboard"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(u,{title:"Centered",description:"An advertisement can appear centered",code:e.centeredCode},{default:i(()=>[t(s,{centered:"",unit:"banner",test:"Centered"})]),_:1},8,["code"]),t(u,{title:"Test",description:"A advertisement can be formatted to help verify placement",code:e.testCode},{default:i(()=>[t(s,{unit:"medium rectangle",test:"Ad Unit 1"})]),_:1},8,["code"])]),_:1})])}const OB=ke(VB,[["render",NB]]),Ac="/vue-fomantic-ui/images/avatar/large/kristy.png",jB="/vue-fomantic-ui/images/avatar/large/daniel.jpg",Qn="/vue-fomantic-ui/images/avatar/large/helen.jpg",Zn="/vue-fomantic-ui/images/avatar/large/elliot.jpg",eo="/vue-fomantic-ui/images/avatar/large/elyse.png",GB="/vue-fomantic-ui/images/avatar/large/matthew.png",qB="/vue-fomantic-ui/images/avatar/large/molly.png",xl="/vue-fomantic-ui/images/wireframe/white-image.png",kc="/vue-fomantic-ui/images/avatar/large/jenny.jpg",xc="/vue-fomantic-ui/images/avatar/large/veronika.jpg",$c="/vue-fomantic-ui/images/avatar/large/steve.jpg",UB=R({name:"CardDoc",components:{DocPageHeader:Ze,DocExample:Ge},setup(){return{cardCode:`<sui-card>
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
</sui-card-group>`}}}),YB=S("span",{class:"date"},"Joined in 2013",-1),JB=S("a",null,"Elliot Fu",-1),WB=S("a",null,"Jenny Hess",-1),KB=S("a",null,"Stevie Feliciano",-1),XB=S("a",null,"Administrator",-1),QB=S("a",null,"Helen Troy",-1),ZB=S("span",{class:"date"},"Joined in 2013",-1),eT=S("span",null,"2 days ago",-1),tT=S("a",null,"Animals",-1),iT=S("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),aT=S("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),lT=S("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),nT=S("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),oT=S("span",{class:"category"},"Animals",-1),sT=S("span",{class:"category"},"Animals",-1),rT=S("div",{class:"right floated author"},[S("img",{class:"ui avatar image",src:Bn}),n(" Matt ")],-1),uT=S("span",{class:"category"},"Animals",-1),cT=S("div",{class:"right floated author"},[S("img",{class:"ui avatar image",src:Bn}),n(" Matt ")],-1),dT=S("p",null,"Jenny is a student studying Media Management at the New School",-1),mT=S("div",{class:"center aligned author"},[S("img",{class:"ui avatar image",src:$n}),n(" Jenny ")],-1),pT=S("a",null,"Friends",-1),fT=S("span",{class:"right floated"}," Joined in 2013 ",-1),gT=S("a",null,[S("i",{class:"user icon"}),n(" 75 Friends ")],-1),hT=S("a",null,"Coworker",-1),_T=S("span",{class:"right floated"}," Joined in 2011 ",-1),bT=S("a",null,[S("i",{class:"user icon"}),n(" 35 Friends ")],-1),vT=S("a",null,"Coworker",-1),yT=S("span",{class:"right floated"}," Joined in 2014 ",-1),ST=S("a",null,[S("i",{class:"user icon"}),n(" 151 Friends ")],-1);function wT(e,a,l,o,r,c){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-image"),u=y("sui-card-header"),g=y("sui-card-meta"),d=y("sui-card-description"),h=y("sui-card-content"),v=y("sui-icon"),_=y("sui-card"),C=y("doc-example"),k=y("sui-button"),T=y("sui-button-group"),b=y("sui-card-group"),w=y("sui-feed-summary"),x=y("sui-feed-content"),B=y("sui-feed-event"),I=y("sui-feed"),V=y("sui-grid-column"),F=y("sui-grid"),z=y("sui-segment"),j=y("sui-container");return $(),he("div",null,[t(m,{title:"Card",sub:"A card displays site content in a manner similar to a playing card"}),t(j,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(C,{title:"Card",description:"A single card",code:e.cardCode},{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:Ac,wrapped:""}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Kristy")]),_:1}),t(g,null,{default:i(()=>[YB]),_:1}),t(d,null,{default:i(()=>[n(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[S("a",null,[t(v,{name:"user"}),n(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Cards",description:"A group of cards",code:e.cardsCode},{default:i(()=>[t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(s,{src:ei,floated:"right",size:"mini"}),t(u,null,{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[n("Friends of Veronika")]),_:1}),t(d,null,{default:i(()=>[n("Elliot requested permission to view your contact details")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(T,{widths:2},{default:i(()=>[t(k,{basic:"",color:"green"},{default:i(()=>[n("Approve")]),_:1}),t(k,{basic:"",color:"red"},{default:i(()=>[n("Decline")]),_:1})]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(s,{src:$n,floated:"right",size:"mini"}),t(u,null,{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[n("New Member")]),_:1}),t(d,null,{default:i(()=>[n("Jenny wants to add you to the group best friends")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(T,{widths:2},{default:i(()=>[t(k,{basic:"",color:"green"},{default:i(()=>[n("Approve")]),_:1}),t(k,{basic:"",color:"red"},{default:i(()=>[n("Decline")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(C,{title:"Content Block",description:"A card can contain blocks of content",code:e.contentBlockCode},{default:i(()=>[t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Project Timeline")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(f,{sub:""},{default:i(()=>[n("Activity")]),_:1}),t(I,{size:"small"},{default:i(()=>[t(B,null,{default:i(()=>[t(x,null,{default:i(()=>[t(w,null,{default:i(()=>[JB,n(" added "),WB,n(" to the project ")]),_:1})]),_:1})]),_:1}),t(B,null,{default:i(()=>[t(x,null,{default:i(()=>[t(w,null,{default:i(()=>[KB,n(" was added as an "),XB]),_:1})]),_:1})]),_:1}),t(B,null,{default:i(()=>[t(x,null,{default:i(()=>[t(w,null,{default:i(()=>[QB,n(" added two pictures ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(k,{as:"button"},{default:i(()=>[n("Join Project")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Image",description:"A card can contain an image",code:e.imageCode},{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:Ac,wrapped:""}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Kristy")]),_:1}),t(g,null,{default:i(()=>[ZB]),_:1}),t(d,null,{default:i(()=>[n(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[S("a",null,[t(v,{name:"user"}),n(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Header",description:"A card can contain a header",code:e.headerCode},{default:i(()=>[t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[n("Friend")]),_:1}),t(d,null,{default:i(()=>[n(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Veronika Ossi")]),_:1}),t(g,null,{default:i(()=>[n("Friend")]),_:1}),t(d,null,{default:i(()=>[n(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[n("Friend")]),_:1}),t(d,null,{default:i(()=>[n(" Jenny is a student studying Media Management at the New School ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Metadata",description:"A card can contain content metadata",code:e.metadataCode},{default:i(()=>[t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[eT,tT]),_:1}),t(d,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Buttons",description:"A card can contain buttons",code:e.buttonsCode},{default:i(()=>[t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Elliot Fu")]),_:1}),t(d,null,{default:i(()=>[n(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1}),t(k,{attached:"bottom"},{default:i(()=>[t(v,{name:"add"}),n(" Add Friend ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Veronika Ossi")]),_:1}),t(d,null,{default:i(()=>[n(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1}),t(k,{attached:"bottom"},{default:i(()=>[t(v,{name:"add"}),n(" Add Friend ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Description",description:"A card can contain a description with one or more paragraphs",code:e.descriptionCode},{default:i(()=>[t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[n("2 days ago")]),_:1}),t(d,null,{default:i(()=>[iT,aT]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Extra Content",description:"A card can contain extra content meant to be formatted separately from the main content",code:e.extraContentCode},{default:i(()=>[t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[n("2 days ago")]),_:1}),t(d,null,{default:i(()=>[lT,nT]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(v,{name:"check"}),n(" 121 Votes ")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(C,{title:"Fluid Card",description:"A fluid card takes up the width of its container",code:e.fluidCardCode},{default:i(()=>[t(F,{columns:3},{default:i(()=>[t(V,null,{default:i(()=>[t(_,{fluid:""},{default:i(()=>[t(s,{src:jB}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Daniel Louise")]),_:1})]),_:1})]),_:1})]),_:1}),t(V,null,{default:i(()=>[t(_,{fluid:""},{default:i(()=>[t(s,{src:Qn}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Helen Troy")]),_:1})]),_:1})]),_:1})]),_:1}),t(V,null,{default:i(()=>[t(_,{fluid:""},{default:i(()=>[t(s,{src:Zn}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Centered Card",description:"A card can center itself inside its container",code:e.centeredCardCode},{default:i(()=>[t(_,{centered:""},{default:i(()=>[t(s,{src:eo}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Elyse")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Horizontal Cards",description:"A card can display horizontally",code:e.horizontalCardsCode},{default:i(()=>[t(_,{horizontal:""},{default:i(()=>[t(s,{src:eo}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[oT]),_:1}),t(d,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Raised Card",description:"A card may be formatted to raise above the page",code:e.raisedCode},{default:i(()=>[t(_,{raised:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[sT]),_:1}),t(d,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[rT]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Link Card",description:"A card can be formatted so that the entire contents link to another page",code:e.linkCardCode},{default:i(()=>[t(_,{href:"#",raised:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[uT]),_:1}),t(d,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[cT]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Text Alignment",description:"Any element inside a card can have its text alignment specified",code:e.textAlignCode},{default:i(()=>[t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,{textAlign:"center"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(d,{textAlign:"center"},{default:i(()=>[dT]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[mT]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Inverted",description:"Card's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(z,{inverted:""},{default:i(()=>[t(b,{inverted:""},{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:GB}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Matt Giampietro")]),_:1}),t(g,null,{default:i(()=>[pT]),_:1}),t(d,null,{default:i(()=>[n(" Matthew is an interior designer living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[fT,gT]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:qB}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Molly")]),_:1}),t(g,null,{default:i(()=>[hT]),_:1}),t(d,null,{default:i(()=>[n(" Molly is a personal assistant living in Paris. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[_T,bT]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:eo}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Elyse")]),_:1}),t(g,null,{default:i(()=>[vT]),_:1}),t(d,null,{default:i(()=>[n(" Elyse is a copywriter working in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[yT,ST]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Colored",description:"A card can specify a color",code:e.coloredCode},{default:i(()=>[t(b,{itemsPerRow:4},{default:i(()=>[t(_,{color:"primary",href:"#"},{default:i(()=>[t(s,{src:xl})]),_:1}),t(_,{color:"secondary",href:"#"},{default:i(()=>[t(s,{src:xl})]),_:1}),t(_,{color:"red",href:"#"},{default:i(()=>[t(s,{src:xl})]),_:1}),t(_,{color:"orange",href:"#"},{default:i(()=>[t(s,{src:xl})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Column Count",description:"A group of cards can set how many cards should exist in a row",code:e.columnCountCode},{default:i(()=>[t(b,{itemsPerRow:4},{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:ue})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Stackable",description:"A group of cards can automatically stack rows to a single columns on mobile devices",code:e.stackableCode},{default:i(()=>[t(b,{itemsPerRow:3,stackable:""},{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:Zn})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:Qn})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:kc})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:xc})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:Go})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:$c})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Doubling",description:"A group of cards can double its column width for mobile",code:e.doublingCode},{default:i(()=>[t(b,{itemsPerRow:6,doubling:""},{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:Zn})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:Qn})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:kc})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:xc})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:Go})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:$c})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const CT=ke(UB,[["render",wT]]),AT=R({name:"CommentDoc",components:{DocPageHeader:Ze,DocExample:Ge},setup(){return{commentsCode:`<sui-comment-group>
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
  </sui-segment>`}}}),kT=S("span",null,"Today at 5:42PM",-1),xT=S("a",null,"Reply",-1),$T=S("span",null,"Yesterday at 12:30AM",-1),BT=S("a",null,"Reply",-1),TT={class:"comments"},LT=S("span",null,"Just now",-1),IT=S("a",null,"Reply",-1),DT=S("span",null,"5 days ago",-1),ET=S("a",null,"Reply",-1),RT=S("div",{class:"date"},"2 days ago",-1),zT=S("div",{class:"rating"},[S("i",{class:"star icon"}),n(" 5 Faves ")],-1),PT=S("a",null,"Reply",-1),MT=S("a",null,"Save",-1),VT=S("a",null,"Hide",-1),FT=S("a",null,[S("i",{class:"expand icon"}),n(" Full-screen ")],-1),HT=S("a",null,"Reply",-1),NT=S("a",null,"Reply",-1),OT=S("a",null,"Replay",-1),jT=S("span",null,"Today at 5:42PM",-1),GT=S("a",{href:"#"},"Replay",-1),qT=S("span",null,"Yesterday at 12:30AM",-1),UT=S("a",{href:"#"},"Replay",-1),YT=S("span",null,"Just now",-1),JT=S("a",{href:"#"},"Replay",-1),WT=S("span",null,"5 days ago",-1),KT=S("a",{href:"#"},"Replay",-1),XT=S("span",null,"Today at 5:42PM",-1),QT=S("a",{href:"#"},"Replay",-1),ZT=S("span",null,"Yesterday at 12:30AM",-1),e2=S("a",{href:"#"},"Replay",-1),t2=S("span",null,"Just now",-1),i2=S("a",{href:"#"},"Replay",-1),a2=S("span",null,"5 days ago",-1),l2=S("a",{href:"#"},"Replay",-1),n2=S("span",null,"Today at 5:42PM",-1),o2=S("a",{href:"#"},"Replay",-1),s2=S("span",null,"Yesterday at 12:30AM",-1),r2=S("a",{href:"#"},"Replay",-1),u2=S("span",null,"Just now",-1),c2=S("a",{href:"#"},"Replay",-1),d2=S("span",null,"5 days ago",-1),m2=S("a",{href:"#"},"Replay",-1),p2=S("span",null,"Today at 5:42PM",-1),f2=S("a",{href:"#"},"Replay",-1),g2=S("span",null,"Yesterday at 12:30AM",-1),h2=S("a",{href:"#"},"Replay",-1),_2=S("span",null,"Just now",-1),b2=S("a",{href:"#"},"Replay",-1),v2=S("span",null,"5 days ago",-1),y2=S("a",{href:"#"},"Replay",-1);function S2(e,a,l,o,r,c){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-comment-avatar"),u=y("sui-comment-author"),g=y("sui-comment-metadata"),d=y("sui-comment-text"),h=y("sui-comment-actions"),v=y("sui-comment-content"),_=y("sui-comment"),C=y("sui-comment-group"),k=y("doc-example"),T=y("sui-form-textarea"),b=y("sui-icon"),w=y("sui-button"),x=y("sui-form"),B=y("sui-segment"),I=y("sui-container");return $(),he("div",null,[t(m,{title:"Comment",sub:"A comment displays user feedback to site content"}),t(I,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(k,{title:"Comments",description:"A basic list of comments",code:e.commentsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(f,{as:"h3",dividing:""},{default:i(()=>[n("Comments")]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Matt")]),_:1}),t(g,null,{default:i(()=>[kT]),_:1}),t(d,null,{default:i(()=>[n("How artistic!")]),_:1}),t(h,null,{default:i(()=>[xT]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[$T]),_:1}),t(d,null,{default:i(()=>[n("This has been very useful for my research. Thanks as well!")]),_:1}),t(h,null,{default:i(()=>[BT]),_:1})]),_:1}),S("div",TT,[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[LT]),_:1}),t(d,null,{default:i(()=>[n("Elliot you are always so right :)")]),_:1}),t(h,null,{default:i(()=>[IT]),_:1})]),_:1})]),_:1})])]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Joe Henderson")]),_:1}),t(g,null,{default:i(()=>[DT]),_:1}),t(d,null,{default:i(()=>[n("Dude, this is awesome. Thanks so much")]),_:1}),t(h,null,{default:i(()=>[ET]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(k,{title:"avatar",description:"A comment can contain an image or avatar",code:e.avatarCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Metadata",description:"A comment can contain metadata about the comment, an arbitrary amount of metadata may be defined",code:e.metadataCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/stevie.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Stevie Feliciano")]),_:1}),t(g,null,{default:i(()=>[RT,zT]),_:1}),t(d,null,{default:i(()=>[n(" Hey guys, I hope this example comment is helping you read this documentation. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Actions",description:"A comment can contain an list of actions a user may perform related to this comment",code:e.actionsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Tom Lukic")]),_:1}),t(d,null,{default:i(()=>[n(" This will be great for business reports. I will definitely download this. ")]),_:1}),t(h,null,{default:i(()=>[PT,MT,VT,FT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Reply Form",description:"A comment can contain a form to reply to a comment. This may have arbitrary content",code:e.replyFormCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/steve.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Steve Jobs")]),_:1}),t(g,null,{default:i(()=>[n("2 days ago")]),_:1}),t(d,null,{default:i(()=>[n("Revolutionary!")]),_:1}),t(h,null,{default:i(()=>[HT]),_:1}),t(x,{reply:""},{default:i(()=>[t(T),t(w,{color:"primary",icon:"",labelPosition:"left"},{default:i(()=>[t(b,{name:"edit"}),n(" Add Reply ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(k,{title:"Collapsed",description:"Comments can be collapsed, or hidden from view",code:e.collapsedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/christian.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Christian Rocha")]),_:1}),t(g,null,{default:i(()=>[n("2 days ago")]),_:1}),t(d,null,{default:i(()=>[n(" I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket? ")]),_:1}),t(h,null,{default:i(()=>[NT]),_:1})]),_:1}),t(C,{collapsed:""},{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[n("1 days ago")]),_:1}),t(d,null,{default:i(()=>[n("No, it wont")]),_:1}),t(h,null,{default:i(()=>[OT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(k,{title:"Threaded",description:"A comment list can be threaded to showing the relationship between conversations",code:e.threadedCode},{default:i(()=>[t(C,{threaded:""},{default:i(()=>[t(f,{as:"h3",dividing:""},{default:i(()=>[n("Comments")]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Matt")]),_:1}),t(g,null,{default:i(()=>[jT]),_:1}),t(d,null,{default:i(()=>[n(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[GT]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[qT]),_:1}),t(d,null,{default:i(()=>[n(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[UT]),_:1})]),_:1}),t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[YT]),_:1}),t(d,null,{default:i(()=>[n(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[JT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Joe Henderson")]),_:1}),t(g,null,{default:i(()=>[WT]),_:1}),t(d,null,{default:i(()=>[n(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[KT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Minimal",description:"Comments can hide extra information unless a user shows intent to interact with a comment",code:e.minimalCode},{default:i(()=>[t(C,{minimal:""},{default:i(()=>[t(f,{as:"h3",dividing:""},{default:i(()=>[n("Comments")]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Matt")]),_:1}),t(g,null,{default:i(()=>[XT]),_:1}),t(d,null,{default:i(()=>[n(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[QT]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[ZT]),_:1}),t(d,null,{default:i(()=>[n(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[e2]),_:1})]),_:1}),t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[t2]),_:1}),t(d,null,{default:i(()=>[n(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[i2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Joe Henderson")]),_:1}),t(g,null,{default:i(()=>[a2]),_:1}),t(d,null,{default:i(()=>[n(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[l2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Size",description:"Comments can have different sizes",code:e.sizeCode},{default:i(()=>[t(C,{size:"small"},{default:i(()=>[t(f,{as:"h3",dividing:""},{default:i(()=>[n("Comments")]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Matt")]),_:1}),t(g,null,{default:i(()=>[n2]),_:1}),t(d,null,{default:i(()=>[n(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[o2]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[s2]),_:1}),t(d,null,{default:i(()=>[n(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[r2]),_:1})]),_:1}),t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[u2]),_:1}),t(d,null,{default:i(()=>[n(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[c2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Joe Henderson")]),_:1}),t(g,null,{default:i(()=>[d2]),_:1}),t(d,null,{default:i(()=>[n(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[m2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Inverted",description:"Comments's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(B,{inverted:""},{default:i(()=>[t(C,{inverted:""},{default:i(()=>[t(f,{as:"h3",inverted:"",dividing:""},{default:i(()=>[n("Comments")]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Matt")]),_:1}),t(g,null,{default:i(()=>[p2]),_:1}),t(d,null,{default:i(()=>[n(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[f2]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[g2]),_:1}),t(d,null,{default:i(()=>[n(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[h2]),_:1})]),_:1}),t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[_2]),_:1}),t(d,null,{default:i(()=>[n(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[b2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Joe Henderson")]),_:1}),t(g,null,{default:i(()=>[v2]),_:1}),t(d,null,{default:i(()=>[n(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[y2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const w2=ke(AT,[["render",S2]]),C2=R({name:"FeedDoc",components:{DocPageHeader:Ze,DocExample:Ge},setup(){return{feedCode:`<sui-feed>
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
</sui-feed>`}}}),A2=S("img",{src:ei},null,-1),k2=S("img",{src:ei},null,-1),x2=S("a",null,"Coworkers",-1),$2=S("img",{src:$n},null,-1),B2=S("a",null,"Jenny Hess",-1),T2=S("a",null,"coworker",-1),L2=S("img",{src:Va},null,-1),I2=S("a",null,"Helen Troy",-1),D2=S("a",null,[S("img",{src:ue})],-1),E2=S("a",null,[S("img",{src:ue})],-1),R2=S("a",null,"Elliot Fu",-1),z2=S("a",null,"Jenny Hess",-1),P2=S("a",null,"Stevie Feliciano",-1),M2=S("a",null,"Elliot Fu",-1),V2=S("a",null,"Helen Troy",-1),F2=S("a",null,"Christian Rocha",-1),H2=S("img",{src:ei},null,-1),N2=S("div",{class:"date"},"Just now",-1),O2=S("a",{class:"user"},"Elliot Fu",-1);function j2(e,a,l,o,r,c){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-feed-label"),u=y("sui-feed-user"),g=y("sui-feed-date"),d=y("sui-feed-summary"),h=y("sui-icon"),v=y("sui-feed-like"),_=y("sui-feed-meta"),C=y("sui-feed-content"),k=y("sui-feed-event"),T=y("sui-feed"),b=y("doc-example"),w=y("sui-feed-extra"),x=y("sui-segment"),B=y("sui-container");return $(),he("div",null,[t(m,{title:"Feed",sub:"A feed presents user activity chronologically"}),t(B,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(b,{title:"Feed",description:"A feed",code:e.feedCode},{default:i(()=>[t(T,null,{default:i(()=>[t(k,null,{default:i(()=>[t(s,null,{default:i(()=>[A2]),_:1}),t(C,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Elliot Fu")]),_:1}),n(" added you as a friend "),t(g,null,{default:i(()=>[n("1 Hour Ago")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(v,null,{default:i(()=>[t(h,{name:"like"}),n(" 4 Likes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(b,{title:"Label",description:"An event can contain an image or icon label",code:e.labelCode},{default:i(()=>[t(T,null,{default:i(()=>[t(k,null,{default:i(()=>[t(s,null,{default:i(()=>[k2]),_:1}),t(C,null,{default:i(()=>[n(" You added Elliot Fu to the group "),x2]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Date",description:"An event or an event summary can contain a date",code:e.dateCode},{default:i(()=>[t(T,null,{default:i(()=>[t(k,null,{default:i(()=>[t(s,null,{default:i(()=>[$2]),_:1}),t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[n(" 3 days ago ")]),_:1}),t(d,null,{default:i(()=>[n(" You added "),B2,n(" to your "),T2,n(" group. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Additional information",description:"An event can contain additional information like a set of images or text",code:e.additionalInfoCode},{default:i(()=>[t(T,null,{default:i(()=>[t(k,null,{default:i(()=>[t(s,null,{default:i(()=>[L2]),_:1}),t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[n(" 3 days ago ")]),_:1}),t(d,null,{default:i(()=>[I2,n(" added 2 photos ")]),_:1}),t(w,{images:""},{default:i(()=>[D2,E2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(b,{title:"Size",description:"A feed can have different sizes",code:e.sizeCode},{default:i(()=>[t(T,{size:"small"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Followers Activity")]),_:1}),t(k,null,{default:i(()=>[t(C,null,{default:i(()=>[t(d,null,{default:i(()=>[R2,n(" added "),z2,n(" as a friend ")]),_:1})]),_:1})]),_:1}),t(k,null,{default:i(()=>[t(C,null,{default:i(()=>[t(d,null,{default:i(()=>[P2,n(" added "),M2,n(" as a friend ")]),_:1})]),_:1})]),_:1}),t(k,null,{default:i(()=>[t(C,null,{default:i(()=>[t(d,null,{default:i(()=>[V2,n(" added "),F2,n(" as a friend ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Inverted",description:"A feed's color can be inverted",code:e.invertedCode},{default:i(()=>[t(x,{inverted:""},{default:i(()=>[t(T,{inverted:""},{default:i(()=>[t(k,null,{default:i(()=>[t(s,null,{default:i(()=>[H2]),_:1}),t(C,null,{default:i(()=>[N2,t(d,null,{default:i(()=>[O2,n(" posted on his page ")]),_:1}),t(w,{text:""},{default:i(()=>[n(" Hey there ! ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const G2=ke(C2,[["render",j2]]),q2=R({name:"ItemDoc",components:{DocPageHeader:Ze,DocExample:Ge},setup(){return{itemsCode:`<sui-item-group>
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
</sui-item-group>`}}}),U2=S("img",{src:ue},null,-1),Y2=S("span",null,"Description",-1),J2=S("img",{src:at},null,-1),W2=S("img",{src:ue},null,-1),K2=S("span",null,"Description",-1),X2=S("img",{src:at},null,-1),Q2=S("img",{src:ue},null,-1),Z2=S("img",{src:ue},null,-1),eL=S("img",{src:ue},null,-1),tL=S("img",{src:ue},null,-1),iL=S("img",{src:ue},null,-1),aL=S("img",{src:ue},null,-1),lL=S("img",{src:ue},null,-1),nL=S("span",{class:"price"},"$1200",-1),oL=S("span",{class:"stay"},"1 Month",-1),sL=S("img",{src:at},null,-1),rL=S("span",{class:"price"},"$1000",-1),uL=S("span",{class:"stay"},"2 Weeks",-1),cL=S("img",{src:at},null,-1),dL=S("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),mL=S("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),pL=S("img",{src:at},null,-1),fL=S("img",{src:ue},null,-1),gL=S("span",{class:"cinema"},"Union Square 14",-1),hL=S("img",{src:at},null,-1),_L=S("img",{src:ue},null,-1),bL=S("span",{class:"cinema"},"IFC Cinema",-1),vL=S("img",{src:at},null,-1),yL=S("img",{src:ue},null,-1),SL=S("span",{class:"cinema"},"IFC",-1),wL=S("img",{src:at},null,-1),CL=S("img",{src:at},null,-1),AL=S("img",{src:at},null,-1),kL=S("img",{src:at},null,-1),xL=S("span",{class:"price"},"$1200",-1),$L=S("span",{class:"stay"},"1 Month",-1),BL=S("img",{src:at},null,-1),TL=S("span",{class:"price"},"$1000",-1),LL=S("span",{class:"stay"},"2 Weeks",-1),IL=S("img",{src:at},null,-1);function DL(e,a,l,o,r,c){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-item-image"),u=y("sui-item-header"),g=y("sui-item-meta"),d=y("sui-item-description"),h=y("sui-item-extra"),v=y("sui-item-content"),_=y("sui-item"),C=y("sui-item-group"),k=y("doc-example"),T=y("sui-image"),b=y("sui-icon"),w=y("sui-label"),x=y("sui-button"),B=y("sui-segment"),I=y("sui-container");return $(),he("div",null,[t(m,{title:"Item",sub:"An item view presents large collections of site content for display"}),t(I,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(k,{title:"Items",description:"A group of items",code:e.itemsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[U2]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Header")]),_:1}),t(g,null,{default:i(()=>[Y2]),_:1}),t(d,null,{default:i(()=>[J2]),_:1}),t(h,null,{default:i(()=>[n(" Additional Details ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[W2]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Header")]),_:1}),t(g,null,{default:i(()=>[K2]),_:1}),t(d,null,{default:i(()=>[X2]),_:1}),t(h,null,{default:i(()=>[n(" Additional Details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(k,{title:"Image",description:"An item can contain an image",code:e.imageCode},{default:i(()=>[t(C,{divided:""},{default:i(()=>[t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[Q2]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[Z2]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[eL]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Content",description:"An item can contain content",code:e.contentCode},{default:i(()=>[t(C,{divided:""},{default:i(()=>[t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[tL]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[n(" Content A ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[iL]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[n(" Content B ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[aL]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[n(" Content C ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Header",description:"An item can contain a header",code:e.headerCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[lL]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[n("12 Years a Slave")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Metadata",description:"An item can contain content metadata",code:e.metadataCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(T,{size:"small",src:ue}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Arrowhead Valley Camp")]),_:1}),t(g,null,{default:i(()=>[nL,oL]),_:1}),t(d,null,{default:i(()=>[sL]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(T,{size:"small",src:ue}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Buck's Homebrew Stayaway")]),_:1}),t(g,null,{default:i(()=>[rL,uL]),_:1}),t(d,null,{default:i(()=>[cL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Description",description:"An item can contain a description with a single or multiple paragraphs",code:e.descriptionCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(T,{size:"small",src:ue}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(d,null,{default:i(()=>[dL,mL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Extra Content",description:"An item can contain extra content meant to be formatted separately from the main content",code:e.extraContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(d,null,{default:i(()=>[pL]),_:1}),t(h,null,{default:i(()=>[t(b,{name:"check",color:"green"}),n(" 121 Votes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(k,{title:"Divided",description:"Items can be divided to better distinguish between grouped content",code:e.dividedCode},{default:i(()=>[t(C,{divided:""},{default:i(()=>[t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[fL]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("12 Years a Slave")]),_:1}),t(g,null,{default:i(()=>[gL]),_:1}),t(d,null,{default:i(()=>[hL]),_:1}),t(h,null,{default:i(()=>[t(w,null,{default:i(()=>[n("IMAX")]),_:1}),t(w,null,{default:i(()=>[t(b,{name:"globe"}),n(" Additional Languages ")]),_:1})]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[_L]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("My Neighbor Totoro")]),_:1}),t(g,null,{default:i(()=>[bL]),_:1}),t(d,null,{default:i(()=>[vL]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right",color:"primary"},{default:i(()=>[n(" Buy tickets "),t(b,{name:"right chevron"})]),_:1}),t(w,null,{default:i(()=>[n("Limited")]),_:1})]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[yL]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Watchmen")]),_:1}),t(g,null,{default:i(()=>[SL]),_:1}),t(d,null,{default:i(()=>[wL]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right",color:"primary"},{default:i(()=>[n(" Buy tickets "),t(b,{name:"right chevron"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Relaxed",description:"A group of items can relax its padding to provide more negative space",code:e.relaxedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(T,{size:"tiny",src:ue}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("12 Years a Slave")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(T,{size:"tiny",src:ue}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("My Neighbor Totoro")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(T,{size:"tiny",src:ue}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Watchmen")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Vertical Alignment",description:"Content can specify its vertical alignment",code:e.verticalAlignCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(T,{size:"small",src:ue}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Top Aligned")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(T,{size:"small",src:ue}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[n("Middle Aligned")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(T,{size:"small",src:ue}),t(v,{verticalAlign:"bottom"},{default:i(()=>[t(u,null,{default:i(()=>[n("Bottom Aligned")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Floated Content",description:"Any content element can be floated left or right",code:e.floatedContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(T,{size:"small",src:ue}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[n("Content A")]),_:1}),t(d,null,{default:i(()=>[CL]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right"},{default:i(()=>[n("Action")]),_:1})]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(T,{size:"small",src:ue}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[n("Content B")]),_:1}),t(d,null,{default:i(()=>[AL]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right"},{default:i(()=>[n("Action")]),_:1})]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(T,{size:"small",src:ue}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[n("Content C")]),_:1}),t(d,null,{default:i(()=>[kL]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right"},{default:i(()=>[n("Action")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Inverted",description:"An item can be inverted to appear on a dark background",code:e.invertedCode},{default:i(()=>[t(B,{inverted:""},{default:i(()=>[t(C,{inverted:""},{default:i(()=>[t(_,null,{default:i(()=>[t(T,{size:"small",src:ue}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Arrowhead Valley Camp")]),_:1}),t(g,null,{default:i(()=>[xL,$L]),_:1}),t(d,null,{default:i(()=>[BL]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(T,{size:"small",src:ue}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Buck's Homebrew Stayaway")]),_:1}),t(g,null,{default:i(()=>[TL,LL]),_:1}),t(d,null,{default:i(()=>[IL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const EL=ke(q2,[["render",DL]]),RL=R({name:"StatisticDoc",components:{DocPageHeader:Ze,DocExample:Ge},setup(){return{statisticCode:'<sui-statistic value="5,550" label="Downloads" />',groupCode:`<sui-statistic-group>
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
<sui-statistic size="huge" value="2,204" label="Views" />`}}}),zL=S("br",null,null,-1),PL=S("br",null,null,-1),ML=S("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),VL=S("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),FL=S("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),HL=S("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1);function NL(e,a,l,o,r,c){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-statistic"),u=y("doc-example"),g=y("sui-statistic-group"),d=y("sui-statistic-value"),h=y("sui-statistic-label"),v=y("sui-icon"),_=y("sui-image"),C=y("sui-segment"),k=y("sui-container");return $(),he("div",null,[t(m,{title:"Statistic",sub:"A statistic emphasizes the current value of an attribute"}),t(k,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(u,{title:"Statistic",description:"A statistic can display a value with a label above or below it",code:e.statisticCode},{default:i(()=>[t(s,{value:"5,550",label:"Downloads"})]),_:1},8,["code"]),t(u,{title:"Statistic Group",description:"A group of statistics",code:e.groupCode},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{value:"22",label:"Faves"}),t(s,{value:"31,200",label:"Views"}),t(s,{value:"22",label:"Members"})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(u,{title:"Value",description:"A statistic can contain a numeric, icon, image, or text value",code:e.valueCode},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{value:"22",label:"Faves"}),t(s,null,{default:i(()=>[t(d,{text:""},{default:i(()=>[n(" Three"),zL,n(" Thousand ")]),_:1}),t(h,null,{default:i(()=>[n("Signups")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(d,null,{default:i(()=>[t(v,{name:"plane"}),n(" 5 ")]),_:1}),t(h,null,{default:i(()=>[n("Flights")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(d,null,{default:i(()=>[t(_,{circular:"",inline:"",src:Oo}),n(" 42 ")]),_:1}),t(h,null,{default:i(()=>[n("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(u,{title:"Label",description:"A statistic can contain a label to help provide context for the presented value",code:e.labelCode},{default:i(()=>[t(s,{value:"2,204",label:"Views"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(u,{title:"Horizontal Statistic",description:"A statistic can present its measurement horizontally",code:e.horizontalCode},{default:i(()=>[t(s,{horizontal:"",value:"2,204",label:"Views"})]),_:1},8,["code"]),t(u,{title:"Colored",description:"A statistic can be formatted to be different colors",code:e.coloredCode},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{color:"red",value:"27",label:"Red"}),t(s,{color:"orange",value:"8",label:"Orange"}),t(s,{color:"yellow",value:"28",label:"Yellow"}),t(s,{color:"olive",value:"7",label:"Olive"}),t(s,{color:"green",value:"14",label:"Green"}),t(s,{color:"teal",value:"82",label:"Teal"}),t(s,{color:"blue",value:"1",label:"Blue"}),t(s,{color:"violet",value:"22",label:"Violet"}),t(s,{color:"purple",value:"23",label:"Purple"}),t(s,{color:"pink",value:"15",label:"Pink"}),t(s,{color:"brown",value:"36",label:"Brown"}),t(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),t(u,{title:"Inverted",description:"A statistic can be formatted to fit on a dark background",code:e.invertedCode},{default:i(()=>[t(C,{inverted:""},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(s,{color:"red",value:"27",label:"Red"}),t(s,{color:"orange",value:"8",label:"Orange"}),t(s,{color:"yellow",value:"28",label:"Yellow"}),t(s,{color:"olive",value:"7",label:"Olive"}),t(s,{color:"green",value:"14",label:"Green"}),t(s,{color:"teal",value:"82",label:"Teal"}),t(s,{color:"blue",value:"1",label:"Blue"}),t(s,{color:"violet",value:"22",label:"Violet"}),t(s,{color:"purple",value:"23",label:"Purple"}),t(s,{color:"pink",value:"15",label:"Pink"}),t(s,{color:"brown",value:"36",label:"Brown"}),t(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1})]),_:1},8,["code"]),t(u,{title:"Stackable",description:"A statistic can automatically stack rows to a single columns on mobile devices",code:e.stackableCode},{default:i(()=>[t(g,{stackable:""},{default:i(()=>[t(s,{color:"red",value:"27",label:"Red"}),t(s,{color:"orange",value:"8",label:"Orange"}),t(s,{color:"yellow",value:"28",label:"Yellow"}),t(s,{color:"olive",value:"7",label:"Olive"}),t(s,{color:"green",value:"14",label:"Green"}),t(s,{color:"teal",value:"82",label:"Teal"}),t(s,{color:"blue",value:"1",label:"Blue"}),t(s,{color:"violet",value:"22",label:"Violet"}),t(s,{color:"purple",value:"23",label:"Purple"}),t(s,{color:"pink",value:"15",label:"Pink"}),t(s,{color:"brown",value:"36",label:"Brown"}),t(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),t(u,{title:"Evenly Divided",description:"A statistic group can have its items divided evenly",code:e.evenlyDividedCode},{default:i(()=>[t(g,{widths:4},{default:i(()=>[t(s,{value:"22",label:"Faves"}),t(s,null,{default:i(()=>[t(d,{text:""},{default:i(()=>[n(" Three"),PL,n(" Thousand ")]),_:1}),t(h,null,{default:i(()=>[n("Signups")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(d,null,{default:i(()=>[t(v,{name:"plane"}),n(" 5 ")]),_:1}),t(h,null,{default:i(()=>[n("Flights")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(d,null,{default:i(()=>[t(_,{circular:"",inline:"",src:Oo}),n(" 42 ")]),_:1}),t(h,null,{default:i(()=>[n("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(u,{title:"Floated",description:"An statistic can sit to the left or right of other content",code:e.floatedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(s,{floated:"right",value:"2,204",label:"Views"}),ML,VL,t(s,{floated:"left",value:"2,204",label:"Views"}),FL,HL]),_:1})]),_:1},8,["code"]),t(u,{title:"Size",description:"A statistic can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{size:"mini",value:"2,204",label:"Views"}),t(s,{size:"tiny",value:"2,204",label:"Views"}),t(s,{size:"small",value:"2,204",label:"Views"}),t(s,{value:"2,204",label:"Views"}),t(s,{size:"large",value:"2,204",label:"Views"}),t(s,{size:"huge",value:"2,204",label:"Views"})]),_:1},8,["code"])]),_:1})])}const OL=ke(RL,[["render",NL]]),jL=R({name:"AccordionDoc",components:{DocPageHeader:Ze,DocExample:Ge},setup(){return{accordionCode:`<sui-accordion>
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
</sui-segment>`}}}),GL=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),qL=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),UL=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),YL=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),JL=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),WL=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),KL=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),XL=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),QL=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),ZL=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),eI=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),tI=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),iI=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),aI=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),lI=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),nI=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),oI=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),sI=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),rI=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),uI=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1);function cI(e,a,l,o,r,c){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-accordion-tab"),u=y("sui-accordion"),g=y("doc-example"),d=y("sui-segment"),h=y("sui-container");return $(),he("div",null,[t(m,{title:"Accordion",sub:"An accordion allows users to toggle the display of sections of content"}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(g,{title:"Accordion",description:"A standard accordion",code:e.accordionCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[GL]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[qL]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[UL,YL]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Styled",description:"A styled accordion adds basic formatting",code:e.styledCode},{default:i(()=>[t(u,{styled:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[JL]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[WL]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[KL,XL]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(g,{title:"Fluid",description:"An accordion can take up the width of its container",code:e.fluidCode},{default:i(()=>[t(u,{fluid:"",styled:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[QL]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[ZL]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[eI,tI]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Inverted",description:"An accordion can be formatted to appear on dark backgrounds",code:e.invertedCode},{default:i(()=>[t(d,{inverted:""},{default:i(()=>[t(u,{inverted:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[iI]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[aI]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[lI,nI]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Usage")]),_:1}),t(g,{title:"Multiple",description:"An accordion can have multiple panels open at the same time",code:e.multipleCode},{default:i(()=>[t(u,{multiple:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[oI]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[sI]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[rI,uI]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const dI=ke(jL,[["render",cI]]),mI=R({name:"CalendarDoc",components:{DocPageHeader:Ze,DocExample:Ge},setup(){return{calendar1:G(null),calendarCode:'<sui-calendar v-model="calendar1" placeholder="Date/Time" />'}}});function pI(e,a,l,o,r,c){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-calendar"),u=y("doc-example"),g=y("sui-container");return $(),he("div",null,[t(m,{title:"Calendar",sub:"A calendar allows users to select any date or time"}),t(g,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(u,{title:"Calendar",description:"A standard calendar",code:e.calendarCode},{default:i(()=>[t(s,{modelValue:e.calendar1,"onUpdate:modelValue":a[0]||(a[0]=d=>e.calendar1=d),placeholder:"Date/Time"},null,8,["modelValue"])]),_:1},8,["code"])]),_:1})])}const fI=ke(mI,[["render",pI]]),gI=R({name:"PropertyListTable",props:{properties:Array}});function hI(e,a,l,o,r,c){const m=y("sui-table-header-cell"),f=y("sui-table-row"),s=y("sui-table-header"),u=y("sui-table-cell"),g=y("sui-table-body"),d=y("sui-table");return $(),D(d,{celled:""},{default:i(()=>[t(s,null,{default:i(()=>[t(f,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Name")]),_:1}),t(m,null,{default:i(()=>[n("Type")]),_:1}),t(m,null,{default:i(()=>[n("Default")]),_:1}),t(m,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[($(!0),he(Ce,null,tt(e.properties,h=>($(),D(f,{key:h.name},{default:i(()=>[t(u,null,{default:i(()=>[n(Te(h.name),1)]),_:2},1024),t(u,null,{default:i(()=>[n(Te(h.type),1)]),_:2},1024),t(u,null,{default:i(()=>[n(Te(h.default),1)]),_:2},1024),t(u,null,{default:i(()=>[n(Te(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const Tn=ke(gI,[["render",hI]]),_I=R({name:"CheckboxDoc",components:{DocPageHeader:Ze,DocExample:Ge,PropertyListTable:Tn},setup(){const e=G(!1),a='<sui-checkbox label="Make my profile visible" v-model="checked" />',l=G([]),o=`<sui-checkbox label="Apple" value="Apple" v-model="selected"  />
<sui-checkbox label="Banana" value="Banana" v-model="selected"  />
<sui-checkbox label="Chocolate" value="Chocolate" v-model="selected"  />`,r=G(!1),c='<sui-checkbox toggle v-model="toggle" />',m=G(!1);return{checked:e,checkboxCode:a,selected:l,multipleCode:o,toggle:r,toggleCode:c,slider:m,sliderCode:'<sui-checkbox slider v-model="slider" />',properties:[{name:"label",type:"string",default:"null",description:"Label of the checkbox."},{name:"modelValue",type:"any",default:"null",description:"Value binding of the checkbox."},{name:"value",type:"any",default:"null",description:"Value of the checkbox."}],events:[{name:"change",description:"Callback to invoke when checkbox value is changed."},{name:"click",description:"Callback to invoke when checkbox is clicked."}]}}}),bI={class:"ui form"},vI={class:"grouped fields"},yI={class:"field"},SI={class:"field"},wI={class:"field"};function CI(e,a,l,o,r,c){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-checkbox"),u=y("doc-example"),g=y("property-list-table"),d=y("sui-table-header-cell"),h=y("sui-table-row"),v=y("sui-table-header"),_=y("sui-table-cell"),C=y("sui-table-body"),k=y("sui-table"),T=y("sui-container");return $(),he("div",null,[t(m,{title:"Checkbox",sub:"A checkbox allows a user to select a value from a small set of options, often binary"}),t(T,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(u,{title:"Checkbox",description:"A standard checkbox",code:e.checkboxCode},{default:i(()=>[t(s,{label:"Make my profile visible",modelValue:e.checked,"onUpdate:modelValue":a[0]||(a[0]=b=>e.checked=b)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Multiple",description:"Multiple mode is enabled by default, v-model property refers to an array to bind the selected values",code:e.multipleCode},{default:i(()=>[S("div",bI,[S("div",vI,[S("div",yI,[t(s,{label:"Apple",value:"Apple",modelValue:e.selected,"onUpdate:modelValue":a[1]||(a[1]=b=>e.selected=b)},null,8,["modelValue"])]),S("div",SI,[t(s,{label:"Banana",value:"Banana",modelValue:e.selected,"onUpdate:modelValue":a[2]||(a[2]=b=>e.selected=b)},null,8,["modelValue"])]),S("div",wI,[t(s,{label:"Chocolate",value:"Chocolate",modelValue:e.selected,"onUpdate:modelValue":a[3]||(a[3]=b=>e.selected=b)},null,8,["modelValue"])])])]),n(" selected : "+Te(e.selected),1)]),_:1},8,["code"]),t(u,{title:"Toggle",description:"A checkbox can toggle",code:e.toggleCode},{default:i(()=>[t(s,{toggle:"",modelValue:e.toggle,"onUpdate:modelValue":a[4]||(a[4]=b=>e.toggle=b)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Slider",description:"A checkbox can look like a slider",code:e.sliderCode},{default:i(()=>[t(s,{slider:"",modelValue:e.slider,"onUpdate:modelValue":a[5]||(a[5]=b=>e.slider=b)},null,8,["modelValue"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(g,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(k,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Name")]),_:1}),t(d,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[($(!0),he(Ce,null,tt(e.events,b=>($(),D(h,{key:b.name},{default:i(()=>[t(_,null,{default:i(()=>[n(Te(b.name),1)]),_:2},1024),t(_,null,{default:i(()=>[n(Te(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const AI=ke(_I,[["render",CI]]),kI=R({name:"DimmerDoc",components:{DocPageHeader:Ze,DocExample:Ge},setup(){const e=`<sui-dimmer-dimmable>
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
</div>`}}});function xI(e,a,l,o,r,c){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-image"),u=y("sui-image-group"),g=y("sui-dimmer"),d=y("sui-dimmer-dimmable"),h=y("doc-example"),v=y("sui-icon"),_=y("sui-button"),C=y("sui-header-subheader"),k=y("sui-container");return $(),he("div",null,[t(m,{title:"Dimmer",sub:"A dimmer hides distractions to focus attention on particular content"}),t(k,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(h,{title:"Dimmer",description:"A simple dimmer displays no content",code:e.dimmerCode},{default:i(()=>[t(d,null,{default:i(()=>[t(f,{as:"h3"},{default:i(()=>[n("Overlayable Section")]),_:1}),t(u,{size:"small"},{default:i(()=>[t(s,{src:ue}),t(s,{src:ue}),t(s,{src:ue})]),_:1}),t(s,{size:"medium",src:Jt}),t(g,{active:""})]),_:1})]),_:1},8,["code"]),t(h,{title:"Content Dimmer",description:"A dimmer can display content",code:e.contentDimmerCode},{default:i(()=>[t(d,null,{default:i(()=>[t(f,{as:"h3"},{default:i(()=>[n("Overlayable Section")]),_:1}),t(u,{size:"small"},{default:i(()=>[t(s,{src:ue}),t(s,{src:ue}),t(s,{src:ue})]),_:1}),t(s,{size:"medium",src:Jt}),t(g,{active:""},{default:i(()=>[t(f,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(v,{name:"heart"}),n(" Dimmed Message! ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Page Dimmer",description:"A dimmer can be formatted to be fixed to the page",code:e.pageDimmerCode},{default:i(()=>[S("div",null,[t(_,{labeled:"",icon:"",onClick:a[0]||(a[0]=T=>e.active=!0)},{default:i(()=>[t(v,{name:"plus"}),n(" Show ")]),_:1}),t(g,{active:e.active,page:"",onClick:a[1]||(a[1]=T=>e.active=!1)},{default:i(()=>[t(f,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(v,{name:"heart"}),n(" Dimmed Message! "),t(C,null,{default:i(()=>[n("Dimmer sub-header")]),_:1})]),_:1})]),_:1},8,["active"])])]),_:1},8,["code"])]),_:1})])}const $I=ke(kI,[["render",xI]]),BI=R({name:"DropdownDoc",components:{DocPageHeader:Ze,DocExample:Ge},setup(){const e=`<sui-dropdown text="File">
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
/>`,o=G(null),r=[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"},{value:"ad",flag:"ad",text:"Andorra"},{value:"ao",flag:"ao",text:"Angola"},{value:"ai",flag:"ai",text:"Anguilla"},{value:"ag",flag:"ag",text:"Antigua"},{value:"ar",flag:"ar",text:"Argentina"},{value:"am",flag:"am",text:"Armenia"},{value:"aw",flag:"aw",text:"Aruba"},{value:"au",flag:"au",text:"Australia"},{value:"at",flag:"at",text:"Austria"},{value:"az",flag:"az",text:"Azerbaijan"},{value:"bs",flag:"bs",text:"Bahamas"},{value:"bh",flag:"bh",text:"Bahrain"},{value:"bd",flag:"bd",text:"Bangladesh"},{value:"bb",flag:"bb",text:"Barbados"},{value:"by",flag:"by",text:"Belarus"},{value:"be",flag:"be",text:"Belgium"},{value:"bz",flag:"bz",text:"Belize"},{value:"bj",flag:"bj",text:"Benin"}],c=`<sui-dropdown
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
/>`,u=G(null),g=`<sui-dropdown
  selection
  multiple
  fluid
  v-model="selected4"
  placeholder="Skills"
  :options="['Angular', 'CSS', 'Ember', 'HTML', 'Javascript', 'NodeJS']"
/>`,d=G(null),h=`<sui-dropdown
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
/>`,v=G(null),_=`<sui-dropdown
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
/>`,T=G({text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}});return{dropdownCode:e,selected1:a,selectionCode:l,selected2:o,searchSelectionOptions:r,searchSelectionCode:c,selected3:m,clearableSelectionOptions:f,clearableSelectionCode:s,selected4:u,multipleCode:g,selected5:d,multipleCode2:h,selected6:v,searchDropdownCode:_,selected7:C,searchInMenuCode:k,selected8:T,inlineCode:`<span>
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
</sui-button-group>`}}});function TI(e,a,l,o,r,c){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-dropdown-item"),u=y("sui-divider"),g=y("sui-dropdown-menu"),d=y("sui-dropdown"),h=y("doc-example"),v=y("sui-button"),_=y("sui-button-group"),C=y("sui-container");return $(),he("div",null,[t(m,{title:"Dropdown",sub:"A dropdown allows a user to select a value from a series of options"}),t(C,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(h,{title:"Dropdown",description:"A dropdown",code:e.dropdownCode},{default:i(()=>[t(d,{text:"File"},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{text:"New"}),t(s,{text:"Open...",description:"ctrl + o"}),t(s,{text:"Save as...",description:"ctrl + s"}),t(s,{text:"Rename",description:"ctrl + r"}),t(s,{text:"Make a copy"}),t(s,{icon:"folder",text:"Move to folder"}),t(s,{icon:"trash",text:"Move to trash"}),t(u),t(s,{text:"Download As..."}),t(s,{text:"Publish To Web"}),t(s,{text:"E-mail Collaborators"})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Selection",description:"A dropdown can be used to select between choices in a form",code:e.selectionCode},{default:i(()=>[t(d,{selection:"",placeholder:"Pet",modelValue:e.selected1,"onUpdate:modelValue":a[0]||(a[0]=k=>e.selected1=k),options:["Cat","Dog","Bird","Rabbit","Squirrel","Horse"]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search Selection",description:"A selection dropdown can allow a user to search through a large list of choices",code:e.searchSelectionCode},{default:i(()=>[t(d,{search:"",selection:"",fluid:"",modelValue:e.selected2,"onUpdate:modelValue":a[1]||(a[1]=k=>e.selected2=k),options:e.searchSelectionOptions,placeholder:"Select Country"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(h,{title:"Clearable Selection",description:"A clearable selection dropdown can allow a user to cancel to cancel a previous selection",code:e.clearableSelectionCode},{default:i(()=>[t(d,{clearable:"",selection:"",modelValue:e.selected3,"onUpdate:modelValue":a[2]||(a[2]=k=>e.selected3=k),options:e.clearableSelectionOptions,placeholder:"Select Language"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(h,{title:"Multiple Selection",description:"A selection dropdown can allow multiple selections",code:e.multipleCode},{default:i(()=>[t(d,{selection:"",multiple:"",fluid:"",modelValue:e.selected4,"onUpdate:modelValue":a[3]||(a[3]=k=>e.selected4=k),placeholder:"Skills",options:["Angular","CSS","Ember","HTML","Javascript","NodeJS"]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{code:e.multipleCode2},{default:i(()=>[t(d,{selection:"",multiple:"",fluid:"",search:"",modelValue:e.selected5,"onUpdate:modelValue":a[4]||(a[4]=k=>e.selected5=k),placeholder:"Skills",options:[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"}]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search Dropdown",description:"A dropdown can be searchable",code:e.searchDropdownCode},{default:i(()=>[t(d,{button:"",floating:"",labeled:"",search:"",icon:"world",modelValue:e.selected6,"onUpdate:modelValue":a[5]||(a[5]=k=>e.selected6=k),options:[{text:"Arabic",value:"Arabic"},{text:"Chinese",value:"Chinese"},{text:"Danish",value:"Danish"},{text:"Dutch",value:"Dutch"},{text:"English",value:"English"},{text:"French",value:"French"},{text:"German",value:"German"},{text:"Greek",value:"Greek"},{text:"Hungarian",value:"Hungarian"},{text:"Italian",value:"Italian"},{text:"Japanese",value:"Japanese"},{text:"Korean",value:"Korean"},{text:"Lithuanian",value:"Lithuanian"},{text:"Persian",value:"Persian"},{text:"Polish",value:"Polish"},{text:"Portuguese",value:"Portuguese"},{text:"Russian",value:"Russian"},{text:"Spanish",value:"Spanish"},{text:"Swedish",value:"Swedish"},{text:"Turkish",value:"Turkish"},{text:"Vietnamese",value:"Vietnamese"}],text:"Select Language"},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search In-Menu",description:"A dropdown can include a search prompt inside its menu",code:e.searchInMenuCode},{default:i(()=>[t(d,{text:"Filter Posts",icon:"filter",floating:"",labeled:"",button:"",searchInMenu:"",modelValue:e.selected7,"onUpdate:modelValue":a[6]||(a[6]=k=>e.selected7=k),options:[{text:"Important",value:"Important",label:{color:"red",empty:!0,circular:!0}},{text:"Announcement",value:"Announcement",label:{color:"blue",empty:!0,circular:!0}},{text:"Cannot Fix",value:"Cannot Fix",label:{color:"black",empty:!0,circular:!0}},{text:"News",value:"News",label:{color:"purple",empty:!0,circular:!0}},{text:"Enhancement",value:"Enhancement",label:{color:"orange",empty:!0,circular:!0}},{text:"Change Declined",value:"Change Declined",label:{empty:!0,circular:!0}},{text:"Off Topic",value:"Off Topic",label:{color:"yellow",empty:!0,circular:!0}},{text:"Interesting",value:"Interesting",label:{color:"pink",empty:!0,circular:!0}},{text:"Discussion",value:"Discussion",label:{color:"green",empty:!0,circular:!0}}]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Inline",description:"A dropdown can be formatted to appear inline in other content",code:e.inlineCode},{default:i(()=>[S("span",null,[n(" Show me posts by "),t(d,{inline:"",modelValue:e.selected8,"onUpdate:modelValue":a[7]||(a[7]=k=>e.selected8=k),options:[{text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}},{text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/images/avatar/small/elliot.jpg"}},{text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/images/avatar/small/stevie.jpg"}},{text:"Christian",value:"Christian",image:{avatar:!0,src:"/images/avatar/small/christian.jpg"}}]},null,8,["modelValue","options"])])]),_:1},8,["code"]),t(h,{title:"Pointing",description:"A dropdown can be formatted so that its menu is pointing",code:e.pointingCode},{default:i(()=>[t(d,{icon:"wrench",button:"",pointing:"top left"},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{text:"New"}),t(s,{text:"Save As"}),t(s,{text:"Edit"})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Floating",description:"A dropdown menu can appear to be floating below an element",code:e.floatingCode},{default:i(()=>[t(_,{color:"teal"},{default:i(()=>[t(v,null,{default:i(()=>[n("Save")]),_:1}),t(d,{floating:"",button:"",icon:"dropdown"},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{text:"Edit Post",icon:"edit"}),t(s,{text:"Remove Post",icon:"delete"}),t(s,{text:"Hide Post",icon:"hide"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const LI=ke(BI,[["render",TI]]),II=R({name:"EmbedDoc",components:{DocPageHeader:Ze,DocExample:Ge},setup(){return{youtubeCode:`<sui-embed
  id="O6Xo21L0ybE"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`,aspectRatioCode:`<sui-embed
  aspectRatio="4:3"
  id="HTZudKi36bo"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`}}});function DI(e,a,l,o,r,c){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-embed"),u=y("doc-example"),g=y("sui-container");return $(),he("div",null,[t(m,{title:"Embed",sub:"An embed displays content from other websites like YouTube videos or Google Maps"}),t(g,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(u,{title:"YouTube",description:"An embed can be used to display YouTube Content",code:e.youtubeCode},{default:i(()=>[t(s,{id:"O6Xo21L0ybE",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(u,{title:"Aspect Ratio",description:"An embed can specify an alternative aspect ratio",code:e.aspectRatioCode},{default:i(()=>[t(s,{aspectRatio:"4:3",id:"HTZudKi36bo",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"])]),_:1})])}const EI=ke(II,[["render",DI]]),RI=S("p",null," We've found the following gravatar image associated with your e-mail address. ",-1),zI=S("p",null,"Is it okay to use this photo?",-1),PI=`<template>
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
<\/script>`,MI={__name:"ModalDoc",setup(e){const a=G(!1);return(l,o)=>($(),D(M,{label:"Modal",code:PI},{description:i(()=>[n(" A standard modal ")]),example:i(()=>[t(p(P),{onClick:o[0]||(o[0]=r=>a.value=!0)},{default:i(()=>[n("Show Modal")]),_:1}),t(p(Xl),{modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=r=>a.value=r)},{default:i(()=>[t(p(en),null,{default:i(()=>[n("Select a Photo")]),_:1}),t(p(Zl),{image:""},{default:i(()=>[t(p(ce),{wrapped:"",size:"medium",src:"/vue-fomantic-ui/images/avatar/large/rachel.png"}),t(p(Po),null,{default:i(()=>[t(p(fe),null,{default:i(()=>[n("Default Profile Image")]),_:1}),RI,zI]),_:1})]),_:1}),t(p(Ql),null,{default:i(()=>[t(p(P),{positive:"",onClick:o[1]||(o[1]=r=>a.value=!1)},{default:i(()=>[n("OK")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},VI=S("p",null," Your inbox is getting full, would you like us to enable automatic archiving of old messages? ",-1),FI=`<template>
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
<\/script>`,HI={__name:"BasicDoc",setup(e){const a=G(!1);return(l,o)=>($(),D(M,{label:"Basic",code:FI},{description:i(()=>[n(" A modal can reduce its complexity ")]),example:i(()=>[t(p(P),{onClick:o[0]||(o[0]=r=>a.value=!0)},{default:i(()=>[n("Basic Modal")]),_:1}),t(p(Xl),{basic:"",modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=r=>a.value=r)},{default:i(()=>[t(p(en),{icon:""},{default:i(()=>[t(p(W),{name:"archive"}),n(" Archive Old Messages")]),_:1}),t(p(Zl),null,{default:i(()=>[VI]),_:1}),t(p(Ql),null,{default:i(()=>[t(p(P),{basic:"",color:"red",inverted:"",icon:"remove",content:"No",onClick:o[1]||(o[1]=r=>a.value=!1)}),t(p(P),{basic:"",color:"green",icon:"checkmark",content:"Yes"})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},NI={__name:"Modal",setup(e){const a=[{id:"modal",label:"Modal",category:"Types",component:MI},{id:"basic",label:"Basic",category:"Types",component:HI}];return(l,o)=>($(),D(Ct,{title:"Modal",description:"A modal displays content that temporarily blocks interactions with the main view of a site","component-docs":a}))}},OI="/vue-fomantic-ui/images/movies/totoro-horizontal.jpg",jI=R({name:"PopupDoc",components:{DocPageHeader:Ze,DocExample:Ge},setup(){const e=G(null),a=`<sui-button icon ref="trigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup :trigger="trigger">
  Add users to your feed
</sui-popup>`,l=G(null),o=G(null),r=G(null),c=`<sui-image avatar src="/images/avatar/small/elliot.jpg" ref="titledTrigger1" />
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
</sui-popup>`,s=G(null),u=`<sui-button icon ref="basicTrigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup
  :trigger="basicTrigger"
  basic
  content="The default theme's basic popup removes the pointing arrow."
/>`,g=G(null),d=G(null),h=G(null),v=`<sui-icon name="heart" circular ref="wideTrigger1" />
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
</sui-popup>`,_=G(null),C=G(null),k=G(null),T=G(null),b=G(null),w=G(null),x=G(null),B=G(null),I=`<sui-button ref="positionTrigger1">Top Left</sui-button>
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
<sui-popup :trigger="positionTrigger8" position="left center" content="I am positioned to the left center" />`,V=G(null),F=`<sui-button ref="flowingTrigger">Show Flowing Popup</sui-button>
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
</sui-popup>`,z=G(null),j=G(null),X=G(null),U=G(null),pe=G(null),Be=`<sui-icon name="heart" circular link ref="sizeTrigger1" />
<sui-icon name="heart" circular link ref="sizeTrigger2" />
<sui-icon name="heart" circular link ref="sizeTrigger3" />
<sui-icon name="heart" circular link ref="sizeTrigger4" />
<sui-icon name="heart" circular link ref="sizeTrigger5" />

<sui-popup size="mini" content="Hello. This is a mini popup" :trigger="sizeTrigger1" />
<sui-popup size="tiny" content="Hello. This is a tiny popup" :trigger="sizeTrigger2" />
<sui-popup size="small" content="Hello. This is a small popup" :trigger="sizeTrigger3" />
<sui-popup size="large" content="Hello. This is a large popup" :trigger="sizeTrigger4" />
<sui-popup size="huge" content="Hello. This is a huge popup" :trigger="sizeTrigger5" />`,q=G(null),K=G(null);return{popupTrigger:e,popupCode:a,titledTrigger1:l,titledTrigger2:o,titledTrigger3:r,titledCode:c,triggerTriger:m,triggerCode:f,basicTrigger:s,basicCode:u,wideTrigger1:g,wideTrigger2:d,wideTrigger3:h,wideCode:v,positionTrigger1:_,positionTrigger2:C,positionTrigger3:k,positionTrigger4:T,positionTrigger5:b,positionTrigger6:w,positionTrigger7:x,positionTrigger8:B,positionCode:I,flowingTrigger:V,flowingCode:F,sizeTrigger1:z,sizeTrigger2:j,sizeTrigger3:X,sizeTrigger4:U,sizeTrigger5:pe,sizeCode:Be,invertedTrigger1:q,invertedTrigger2:K,invertedCode:`<sui-icon name="heart" circular ref="invertedTrigger1" />
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
/>`}}}),GI=S("p",null,[S("b",null,"2"),n(" projects, $10 a month ")],-1),qI=S("p",null,[S("b",null,"5"),n(" projects, $20 a month ")],-1),UI=S("p",null,[S("b",null,"8"),n(" projects, $25 a month ")],-1);function YI(e,a,l,o,r,c){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-icon"),u=y("sui-button"),g=y("sui-popup"),d=y("doc-example"),h=y("sui-image"),v=y("sui-card-header"),_=y("sui-card-description"),C=y("sui-card-content"),k=y("sui-card"),T=y("sui-rating"),b=y("sui-divider"),w=y("sui-grid-column"),x=y("sui-grid"),B=y("sui-container");return $(),he("div",null,[t(m,{title:"Popup",sub:"A popup displays additional information on top of a page"}),t(B,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(d,{title:"Popup",description:"An element can specify popup content to appear",code:e.popupCode},{default:i(()=>[t(u,{icon:"",ref:"popupTrigger"},{default:i(()=>[t(s,{name:"add"})]),_:1},512),t(g,{trigger:e.popupTrigger},{default:i(()=>[n(" Add users to your feed ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(d,{title:"Titled",description:"An element can specify popup content with a title",code:e.titledCode},{default:i(()=>[t(h,{avatar:"",src:ei,ref:"titledTrigger1"},null,512),t(h,{avatar:"",src:jo,ref:"titledTrigger2"},null,512),t(h,{avatar:"",src:Bn,ref:"titledTrigger3"},null,512),t(g,{trigger:e.titledTrigger1,header:"Elliot Fu",content:"Elliot has been a member since July 2012"},null,8,["trigger"]),t(g,{trigger:e.titledTrigger2,header:"Stevie Feliciano",content:"Stevie has been a member since August 2013"},null,8,["trigger"]),t(g,{trigger:e.titledTrigger3,header:"Matt",content:"Matt has been a member since July 2014"},null,8,["trigger"])]),_:1},8,["code"]),t(d,{title:"Trigger",description:"A trigger can be complex element",code:e.triggerCode},{default:i(()=>[t(k,{ref:"triggerTriger"},{default:i(()=>[t(h,{src:OI}),t(C,null,{default:i(()=>[t(v,null,{default:i(()=>[n("My Neighbor Totoro")]),_:1}),t(_,null,{default:i(()=>[n(" Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits. ")]),_:1})]),_:1})]),_:1},512),t(g,{trigger:e.triggerTriger,header:"User Rating"},{default:i(()=>[t(T,{icon:"star",defaultRating:3,maxRating:4})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(d,{title:"Basic",description:"A popup can provide more basic formatting",code:e.basicCode},{default:i(()=>[t(u,{icon:"",ref:"basicTrigger"},{default:i(()=>[t(s,{name:"add"})]),_:1},512),t(g,{trigger:e.basicTrigger,basic:"",content:"The default theme's basic popup removes the pointing arrow."},null,8,["trigger"])]),_:1},8,["code"]),t(d,{title:"Position",description:"A popup can be position around its trigger",code:e.positionCode},{default:i(()=>[t(u,{ref:"positionTrigger1"},{default:i(()=>[n("Top Left")]),_:1},512),t(u,{ref:"positionTrigger2"},{default:i(()=>[n("Top Center")]),_:1},512),t(u,{ref:"positionTrigger3"},{default:i(()=>[n("Top Right")]),_:1},512),t(b),t(u,{ref:"positionTrigger4"},{default:i(()=>[n("Bottom Left")]),_:1},512),t(u,{ref:"positionTrigger5"},{default:i(()=>[n("Bottom Center")]),_:1},512),t(u,{ref:"positionTrigger6"},{default:i(()=>[n("Bottom Right")]),_:1},512),t(b),t(u,{ref:"positionTrigger7"},{default:i(()=>[n("Right Center")]),_:1},512),t(u,{ref:"positionTrigger8"},{default:i(()=>[n("Left Center")]),_:1},512),t(g,{trigger:e.positionTrigger1,position:"top left",content:"I am positioned to the top left"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger2,position:"top center",content:"I am positioned to the top center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger3,position:"top right",content:"I am positioned to the top right"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger4,position:"bottom left",content:"I am positioned to the bottom left"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger5,position:"bottom center",content:"I am positioned to the bottom center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger6,position:"bottom right",content:"I am positioned to the bottom right"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger7,position:"right center",content:"I am positioned to the right center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger8,position:"left center",content:"I am positioned to the left center"},null,8,["trigger"])]),_:1},8,["code"]),t(d,{title:"Flowing",description:"A popup can have no maximum width and continue to flow to fit its content",code:e.flowingCode},{default:i(()=>[t(u,{ref:"flowingTrigger"},{default:i(()=>[n("Show Flowing Popup")]),_:1},512),t(g,{trigger:e.flowingTrigger,flowing:""},{default:i(()=>[t(x,{centered:"",divided:"",columns:3},{default:i(()=>[t(w,{textAlign:"center"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Basic Plan")]),_:1}),GI,t(u,null,{default:i(()=>[n("Choose")]),_:1})]),_:1}),t(w,{textAlign:"center"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Business Plan")]),_:1}),qI,t(u,null,{default:i(()=>[n("Choose")]),_:1})]),_:1}),t(w,{textAlign:"center"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Premium Plan")]),_:1}),UI,t(u,null,{default:i(()=>[n("Choose")]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(d,{title:"Size",description:"A popup can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger1"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger2"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger3"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger4"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger5"},null,512),t(g,{size:"mini",content:"Hello. This is a mini popup",trigger:e.sizeTrigger1},null,8,["trigger"]),t(g,{size:"tiny",content:"Hello. This is a tiny popup",trigger:e.sizeTrigger2},null,8,["trigger"]),t(g,{size:"small",content:"Hello. This is a small popup",trigger:e.sizeTrigger3},null,8,["trigger"]),t(g,{size:"large",content:"Hello. This is a large popup",trigger:e.sizeTrigger4},null,8,["trigger"]),t(g,{size:"huge",content:"Hello. This is a huge popup",trigger:e.sizeTrigger5},null,8,["trigger"])]),_:1},8,["code"]),t(d,{title:"Wide",description:"A popup can be extra wide to allow for longer content",code:e.wideCode},{default:i(()=>[t(s,{name:"heart",circular:"",ref:"wideTrigger1"},null,512),t(s,{name:"heart",circular:"",ref:"wideTrigger2"},null,512),t(s,{name:"heart",circular:"",ref:"wideTrigger3"},null,512),t(g,{trigger:e.wideTrigger1},{default:i(()=>[n(" Hello. This is a regular pop-up which does not allow for lots of content. You cannot fit a lot of words here as the paragraphs will be pretty narrow. ")]),_:1},8,["trigger"]),t(g,{trigger:e.wideTrigger2,wide:""},{default:i(()=>[n(" Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"]),t(g,{trigger:e.wideTrigger3,wide:"very"},{default:i(()=>[n(" Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(d,{title:"Inverted",description:"A popup can have its colors inverted",code:e.invertedCode},{default:i(()=>[t(s,{name:"heart",circular:"",ref:"invertedTrigger1"},null,512),t(u,{icon:"",ref:"invertedTrigger2"},{default:i(()=>[t(s,{name:"add"})]),_:1},512),t(g,{trigger:e.invertedTrigger1,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"]),t(g,{trigger:e.invertedTrigger2,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"])]),_:1},8,["code"])]),_:1})])}const JI=ke(jI,[["render",YI]]),WI=R({name:"ProgressDoc",components:{DocPageHeader:Ze,DocExample:Ge},setup(){return{standardCode:'<sui-progress :percent="42" label="Uploading Files" progress />',indicatingCode:'<sui-progress :percent="30" label="30% Founded" indicating active />',barCode:'<sui-progress :percent="33" />',progressCode:'<sui-progress :percent="14" progress />',centeredCode:'<sui-progress :percent="68" progress="centered" />',labelCode:'<sui-progress :percent="37" label="Uploading Files" progress />',activeCode:'<sui-progress :percent="33" label="Uploading Files" progress active />',successCode:'<sui-progress :percent="100" label="Everything worked, your file is all ready." progress success />',warningCode:`<sui-progress :percent="100" label="Your file didn't meet the minimum resolution requirements." progress warning />`,errorCode:'<sui-progress :percent="100" label="There was an error." progress error />',disabledCode:'<sui-progress :percent="25" disabled />',invertedCode:`<sui-segment inverted>
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
<sui-progress :percent="73" color="black" />`}}});function KI(e,a,l,o,r,c){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-progress"),u=y("doc-example"),g=y("sui-segment"),d=y("sui-container");return $(),he("div",null,[t(m,{title:"Progress",sub:"A progress bar shows the progression of a task"}),t(d,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(u,{title:"Standard",description:"A standard progress bar",code:e.standardCode},{default:i(()=>[t(s,{percent:42,label:"Uploading Files",progress:""})]),_:1},8,["code"]),t(u,{title:"Indicating",description:"An indicating progress bar visually indicates the current level of progress of a task",code:e.indicatingCode},{default:i(()=>[t(s,{percent:30,label:"30% Founded",indicating:"",active:""})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(u,{title:"Bar",description:"A progress element can contain a bar visually indicating progress",code:e.barCode},{default:i(()=>[t(s,{percent:33})]),_:1},8,["code"]),t(u,{title:"Progress",description:"A progress bar can contain a text value indicating current progress",code:e.progressCode},{default:i(()=>[t(s,{percent:14,progress:""})]),_:1},8,["code"]),t(u,{title:"Centered Progress Text",description:"The text inside a progress can be centered",code:e.centeredCode},{default:i(()=>[t(s,{percent:68,progress:"centered"})]),_:1},8,["code"]),t(u,{title:"Label",description:"A progress element can contain a label",code:e.labelCode},{default:i(()=>[t(s,{percent:37,label:"Uploading Files",progress:""})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(u,{title:"Active",description:"A progress bar can show activity",code:e.activeCode},{default:i(()=>[t(s,{percent:33,label:"Uploading Files",progress:"",active:""})]),_:1},8,["code"]),t(u,{title:"Success",description:"A progress bar can show a success state",code:e.successCode},{default:i(()=>[t(s,{percent:100,label:"Everything worked, your file is all ready.",progress:"",success:""})]),_:1},8,["code"]),t(u,{title:"Warning",description:"A progress bar can show a warning state",code:e.warningCode},{default:i(()=>[t(s,{percent:100,label:"Your file didn't meet the minimum resolution requirements.",progress:"",warning:""})]),_:1},8,["code"]),t(u,{title:"Error",description:"A progress bar can show an error state",code:e.errorCode},{default:i(()=>[t(s,{percent:100,label:"There was an error.",progress:"",error:""})]),_:1},8,["code"]),t(u,{title:"Disabled",description:"A progress bar can be disabled",code:e.disabledCode},{default:i(()=>[t(s,{percent:25,disabled:""})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(u,{title:"Inverted",description:"A progress bar can have its colors inverted",code:e.invertedCode},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(s,{inverted:"",percent:41,label:"Uploading Files",progress:""}),t(s,{inverted:"",percent:100,label:"Success",success:"",progress:""}),t(s,{inverted:"",percent:100,label:"Warning",warning:"",progress:""}),t(s,{inverted:"",percent:100,label:"Error",error:"",progress:""})]),_:1})]),_:1},8,["code"]),t(u,{title:"Attached",description:"A progress bar can show progress of an element",code:e.attachedCode},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{percent:47,attached:"top"}),n(" La la la la "),t(s,{percent:26,attached:"bottom"})]),_:1})]),_:1},8,["code"]),t(u,{title:"Size",description:"A progress bar can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{percent:88,size:"tiny",label:"tiny"}),t(s,{percent:100,size:"small",label:"small",success:""}),t(s,{percent:83,label:"standard"}),t(s,{percent:73,size:"large",label:"large"}),t(s,{percent:94,size:"big",label:"big"})]),_:1},8,["code"]),t(u,{title:"Color",description:"A progress bar can have different colors",code:e.colorCode},{default:i(()=>[t(s,{percent:32,color:"red"}),t(s,{percent:53,color:"orange"}),t(s,{percent:13,color:"yellow"}),t(s,{percent:37,color:"olive"}),t(s,{percent:83,color:"green"}),t(s,{percent:24,color:"teal"}),t(s,{percent:88,color:"blue"}),t(s,{percent:41,color:"violet"}),t(s,{percent:47,color:"purple"}),t(s,{percent:30,color:"pink"}),t(s,{percent:68,color:"brown"}),t(s,{percent:35,color:"grey"}),t(s,{percent:73,color:"black"})]),_:1},8,["code"])]),_:1})])}const XI=ke(WI,[["render",KI]]),QI=R({name:"RatingDoc",components:{DocPageHeader:Ze,DocExample:Ge,PropertyListTable:Tn},setup(){return{ratingCode:'<sui-rating v-model="value" />',iconCode:`<sui-rating :defaultRating="2" :maxRating="4" color="yellow" />
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
<sui-rating size="massive" :defaultRating="3" :maxRating="4" color="yellow" />`,properties:[{name:"color",type:"string",default:"",description:"A rating can have different colors"},{name:"defaultRating",type:"number",default:0,description:"The initial value of rating."},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"icon",type:"string",default:"star",description:"A rating can use a set of specified icons."},{name:"maxRating",type:"number",default:1,description:"The total number of icons."},{name:"modelValue",type:"number",default:"null",description:"A value of rating."},{name:"size",type:"string",default:"",description:"A rating can have different sizes."}],events:[{name:"change",description:"Callback to invoke on value change."}]}}}),ZI=S("br",null,null,-1),eD=S("br",null,null,-1),tD=S("br",null,null,-1),iD=S("br",null,null,-1),aD=S("br",null,null,-1),lD=S("br",null,null,-1),nD=S("br",null,null,-1),oD=S("br",null,null,-1),sD=S("br",null,null,-1),rD=S("br",null,null,-1),uD=S("br",null,null,-1),cD=S("br",null,null,-1),dD=S("br",null,null,-1),mD=S("br",null,null,-1),pD=S("br",null,null,-1),fD=S("br",null,null,-1),gD=S("br",null,null,-1),hD=S("br",null,null,-1),_D=S("br",null,null,-1),bD=S("br",null,null,-1),vD=S("br",null,null,-1),yD=S("br",null,null,-1),SD=S("br",null,null,-1),wD=S("br",null,null,-1),CD=S("br",null,null,-1),AD=S("br",null,null,-1),kD=S("br",null,null,-1),xD=S("br",null,null,-1),$D=S("br",null,null,-1),BD=S("br",null,null,-1),TD=S("br",null,null,-1),LD=S("br",null,null,-1),ID=S("br",null,null,-1),DD=S("br",null,null,-1),ED=S("br",null,null,-1),RD=S("br",null,null,-1),zD=S("br",null,null,-1),PD=S("br",null,null,-1),MD=S("br",null,null,-1),VD=S("br",null,null,-1),FD=S("br",null,null,-1),HD=S("br",null,null,-1),ND=S("br",null,null,-1),OD=S("br",null,null,-1),jD=S("br",null,null,-1),GD=S("br",null,null,-1),qD=S("br",null,null,-1),UD=S("br",null,null,-1);function YD(e,a,l,o,r,c){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-rating"),u=y("doc-example"),g=y("property-list-table"),d=y("sui-table-header-cell"),h=y("sui-table-row"),v=y("sui-table-header"),_=y("sui-table-cell"),C=y("sui-table-body"),k=y("sui-table"),T=y("sui-container");return $(),he("div",null,[t(m,{title:"Rating",sub:"A rating indicates user interest in content"}),t(T,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(u,{title:"Rating",description:"A Basic rating",code:e.ratingCode},{default:i(()=>[t(s)]),_:1},8,["code"]),t(u,{title:"Icon",description:"You can use any available icon as rating indicator",code:e.iconCode},{default:i(()=>[t(s,{defaultRating:2,maxRating:4,color:"yellow"}),ZI,eD,t(s,{defaultRating:2,maxRating:4,icon:"heart",color:"red"}),tD,iD,t(s,{defaultRating:2,maxRating:4,icon:"female",color:"purple"}),aD,lD,t(s,{defaultRating:2,maxRating:4,icon:"male",color:"blue"}),nD,oD,t(s,{defaultRating:2,maxRating:4,icon:"cloud",color:"grey"}),sD,rD,t(s,{defaultRating:2,maxRating:4,icon:"cat",color:"pink"}),uD,cD,t(s,{defaultRating:2,maxRating:4,icon:"circle",color:"orange"})]),_:1},8,["code"]),t(u,{title:"Color",description:"You can specify any color of the FUI color palette",code:e.colorCode},{default:i(()=>[t(s,{defaultRating:1,maxRating:7,color:"red"}),dD,mD,t(s,{defaultRating:2,maxRating:7,color:"orange"}),pD,fD,t(s,{defaultRating:3,maxRating:7,color:"yellow"}),gD,hD,t(s,{defaultRating:4,maxRating:7,color:"olive"}),_D,bD,t(s,{defaultRating:5,maxRating:7,color:"green"}),vD,yD,t(s,{defaultRating:6,maxRating:7,color:"teal"}),SD,wD,t(s,{defaultRating:6,maxRating:7,color:"blue"}),CD,AD,t(s,{defaultRating:5,maxRating:7,color:"violet"}),kD,xD,t(s,{defaultRating:4,maxRating:7,color:"purple"}),$D,BD,t(s,{defaultRating:3,maxRating:7,color:"pink"}),TD,LD,t(s,{defaultRating:2,maxRating:7,color:"brown"}),ID,DD,t(s,{defaultRating:1,maxRating:7,color:"grey"}),ED,RD,t(s,{defaultRating:1,maxRating:7,color:"black"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(u,{title:"Disabled",description:"A rating can be started in non-interactive mode by adding a disabled class",code:e.disabledCode},{default:i(()=>[t(s,{disabled:"",defaultRating:3,maxRating:5,color:"yellow"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(u,{title:"Size",description:"A rating can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{size:"mini",defaultRating:3,maxRating:4,color:"yellow"}),zD,PD,t(s,{size:"tiny",defaultRating:3,maxRating:4,color:"yellow"}),MD,VD,t(s,{size:"small",defaultRating:3,maxRating:4,color:"yellow"}),FD,HD,t(s,{defaultRating:3,maxRating:4,color:"yellow"}),ND,OD,t(s,{size:"large",defaultRating:3,maxRating:4,color:"yellow"}),jD,GD,t(s,{size:"huge",defaultRating:3,maxRating:4,color:"yellow"}),qD,UD,t(s,{size:"massive",defaultRating:3,maxRating:4,color:"yellow"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(g,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(k,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Name")]),_:1}),t(d,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[($(!0),he(Ce,null,tt(e.events,b=>($(),D(h,{key:b.name},{default:i(()=>[t(_,null,{default:i(()=>[n(Te(b.name),1)]),_:2},1024),t(_,null,{default:i(()=>[n(Te(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const JD=ke(QI,[["render",YD]]),WD=R({name:"SidebarDoc",components:{DocPageHeader:Ze,DocExample:Ge,PropertyListTable:Tn},setup(){return{visible1:G(!1),sidebarCode:`<sui-grid :columns="1">
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
</sui-grid>`,properties:[{name:"animation",type:"string",default:"overlay",description:"Specifies the animation of the sidebar."},{name:"dimmed",type:"boolean",default:"false",description:"When specified, display the dim inside pusher content."},{name:"direction",type:"string",default:"left",description:"Specifies the direction the sidebar should appear on."},{name:"visible",type:"boolean",default:"false",description:"Specifies the visibility of the sidebar."}],events:[{name:"hide",description:"Callback to invoke when sidebar hide."},{name:"show",description:"Callback to invoke when sidebar show."}]}}}),KD={class:"pusher"};function XD(e,a,l,o,r,c){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-icon"),u=y("sui-button"),g=y("sui-grid-column"),d=y("sui-menu-item"),h=y("sui-sidebar"),v=y("sui-image"),_=y("sui-segment"),C=y("sui-grid"),k=y("doc-example"),T=y("property-list-table"),b=y("sui-table-header-cell"),w=y("sui-table-row"),x=y("sui-table-header"),B=y("sui-table-cell"),I=y("sui-table-body"),V=y("sui-table"),F=y("sui-container");return $(),he("div",null,[t(m,{title:"Sidebar",sub:"A sidebar hides additional content beside a page"}),t(F,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(k,{title:"Sidebar",description:"A sidebar",code:e.sidebarCode},{default:i(()=>[t(C,{columns:1},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{onClick:a[0]||(a[0]=z=>e.visible1=!e.visible1),icon:""},{default:i(()=>[t(s,{name:"arrow right"})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(_,{class:"pushable"},{default:i(()=>[t(h,{visible:e.visible1,"onUpdate:visible":a[1]||(a[1]=z=>e.visible1=z),dimmed:"",icon:"labeled",inverted:""},{default:i(()=>[t(d,null,{default:i(()=>[t(s,{name:"home"}),n(" Home ")]),_:1}),t(d,null,{default:i(()=>[t(s,{name:"gamepad"}),n(" Games ")]),_:1}),t(d,null,{default:i(()=>[t(s,{name:"camera"}),n(" Channels ")]),_:1})]),_:1},8,["visible"]),S("div",KD,[t(_,null,{default:i(()=>[t(f,{as:"h2"},{default:i(()=>[n("Main Header")]),_:1}),t(v,{src:ze})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(T,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(V,{celled:""},{default:i(()=>[t(x,null,{default:i(()=>[t(w,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Name")]),_:1}),t(b,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(I,null,{default:i(()=>[($(!0),he(Ce,null,tt(e.events,z=>($(),D(w,{key:z.name},{default:i(()=>[t(B,null,{default:i(()=>[n(Te(z.name),1)]),_:2},1024),t(B,null,{default:i(()=>[n(Te(z.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const QD=ke(WD,[["render",XD]]),ZD=R({name:"SliderDoc",components:{DocPageHeader:Ze,DocExample:Ge},setup(){const e=G(5),a='<sui-slider v-model="slider1" />',l=G(4),o='<sui-slider labeled v-model="slider2" />',r=G(6),c='<sui-slider labeled="ticked" v-model="slider3" />',m=G(0),f=`<sui-slider
  v-model="slider4"
  labeled="ticked"
  :labels='["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ/ς", "τ", "υ", "φ"]'
  :max="20"
/>`,s=G(40),u='<sui-slider v-model="slider5" labeled :step="5" :max="120" :min="20" />',g=G([]);g.value.push(20,60);const d='<sui-slider v-model="slider6" range labeled="ticked" :min="5" :max="100" :step="5" />',h=G(7),v='<sui-slider disabled v-model="slider7" />',_=G(8),C=`<sui-segment inverted>
  <sui-slider inverted v-model="slider8" />
</sui-segment>`,k=G(3),T='<sui-slider reversed v-model="slider9" />',b=G(18),w='<sui-slider vertical v-model="slider10" :max="20" />',x=G(5),B=G(5),I=G(5),V=G(5),F=G(5),z=G(5),j=G(5),X=G(5),U=G(5),pe=G(5),Be=G(5),q=G(5),K=G(5),de=`<sui-slider color="red" v-model="redSlider" />
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
</sui-segment>`,Ie=G(5),We=G(5),nt=G(5);return{slider1:e,sliderCode:a,slider2:l,labeledSliderCode:o,slider3:r,labeledTickedCode:c,slider4:m,customLabelsCode:f,slider5:s,stepCode:u,slider6:g,rangeCode:d,slider7:h,disabledCode:v,slider8:_,invertedCode:C,slider9:k,reversedCode:T,slider10:b,verticalCode:w,redSlider:x,orangeSlider:B,yellowSlider:I,oliveSlider:V,greenSlider:F,tealSlider:z,blueSlider:j,violetSlider:X,purpleSlider:U,pinkSlider:pe,brownSlider:Be,greySlider:q,blackSlider:K,coloredCode:de,invertedColoredCode:ie,smallSlider:Ie,largeSlider:We,bigSlider:nt,sizeCode:`<sui-slider size="small" color="red" v-model="smallSlider" />
<sui-slider size="large" color="yellow" v-model="largeSlider" />
<sui-slider size="big" color="olive" v-model="bigSlider" />`,properties:[{name:"color",type:"string",default:"",description:"A slider can have different colors"},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"inverted",type:"boolean",default:!1,description:"A slider can be formatted to appear on dark backgrounds."},{name:"labeled",type:"boolean|string",default:!1,description:"A slider can show its labels."},{name:"labels",type:"string[]",default:"",description:"A slider can have a custom label according to the label value."},{name:"max",type:"number",default:10,description:"Maximum boundary value."},{name:"min",type:"number",default:0,description:"Mininum boundary value."},{name:"modelValue",type:"number|number[]",default:0,description:"A value of component."},{name:"range",type:"boolean",default:!1,description:"When specified, allows two boundary values to be picked."},{name:"reversed",type:"boolean",default:!1,description:"A slider can be reversed."},{name:"size",type:"string",default:"",description:"A slider can have different sizes."},{name:"step",type:"number",default:1,description:"Step factor to increment/decrement the value."},{name:"vertical",type:"boolean",default:!1,description:"When specified, orientation of the slider becomes vertical."},{name:"verticalHeight",type:"number|string",default:200,description:"Height of the vertical slider."}],events:[{name:"change",description:"Callback to invoke on value change."},{name:"slideend",description:"Callback to invoke when slide end."}]}}});function eE(e,a,l,o,r,c){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-slider"),u=y("doc-example"),g=y("sui-segment"),d=y("sui-table-header-cell"),h=y("sui-table-row"),v=y("sui-table-header"),_=y("sui-table-cell"),C=y("sui-table-body"),k=y("sui-table"),T=y("sui-container");return $(),he("div",null,[t(m,{title:"Slider",sub:"A slider allows users to select values within a range"}),t(T,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(u,{title:"Slider",description:"A standard slider",code:e.sliderCode},{default:i(()=>[t(s,{modelValue:e.slider1,"onUpdate:modelValue":a[0]||(a[0]=b=>e.slider1=b)},null,8,["modelValue"]),n(" "+Te(e.slider1),1)]),_:1},8,["code"]),t(u,{title:"Labeled Slider",description:"A slider that show its labels",code:e.labeledSliderCode},{default:i(()=>[t(s,{labeled:"",modelValue:e.slider2,"onUpdate:modelValue":a[1]||(a[1]=b=>e.slider2=b)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Labeled Ticked Slider",description:"A slider that show its labels and ticks",code:e.labeledTickedCode},{default:i(()=>[t(s,{labeled:"ticked",modelValue:e.slider3,"onUpdate:modelValue":a[2]||(a[2]=b=>e.slider3=b)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Custom Interpreted Labels",description:"You can provide a function which returns a custom label according to the label value",code:e.customLabelsCode},{default:i(()=>[t(s,{modelValue:e.slider4,"onUpdate:modelValue":a[3]||(a[3]=b=>e.slider4=b),labeled:"ticked",labels:["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ/ς","τ","υ","φ"],max:20},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Step",description:"A slider can change the default step increment",code:e.stepCode},{default:i(()=>[t(s,{modelValue:e.slider5,"onUpdate:modelValue":a[4]||(a[4]=b=>e.slider5=b),labeled:"",step:5,max:120,min:20},null,8,["modelValue"]),n(" "+Te(e.slider5),1)]),_:1},8,["code"]),t(u,{title:"Range",description:"A range slider which allow you to select a range between two values",code:e.rangeCode},{default:i(()=>[t(s,{modelValue:e.slider6,"onUpdate:modelValue":a[5]||(a[5]=b=>e.slider6=b),range:"",labeled:"ticked",min:5,max:100,step:5},null,8,["modelValue"]),n(" "+Te(e.slider6),1)]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(u,{title:"Disabled",description:"A slider can appear disabled",code:e.disabledCode},{default:i(()=>[t(s,{disabled:"",modelValue:e.slider7,"onUpdate:modelValue":a[6]||(a[6]=b=>e.slider7=b)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Inverted",description:"A slider can be inverted",code:e.invertedCode},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(s,{inverted:"",modelValue:e.slider8,"onUpdate:modelValue":a[7]||(a[7]=b=>e.slider8=b)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(u,{title:"Reversed",description:"A slider can be reversed",code:e.reversedCode},{default:i(()=>[t(s,{reversed:"",modelValue:e.slider9,"onUpdate:modelValue":a[8]||(a[8]=b=>e.slider9=b)},null,8,["modelValue"]),n(" "+Te(e.slider9),1)]),_:1},8,["code"]),t(u,{title:"Vertical",description:"A slider can be vertical",code:e.verticalCode},{default:i(()=>[t(s,{vertical:"",modelValue:e.slider10,"onUpdate:modelValue":a[9]||(a[9]=b=>e.slider10=b),max:20},null,8,["modelValue"]),n(" "+Te(e.slider10),1)]),_:1},8,["code"]),t(u,{title:"Colored",description:"A slider can be different colors",code:e.coloredCode},{default:i(()=>[t(s,{color:"red",modelValue:e.redSlider,"onUpdate:modelValue":a[10]||(a[10]=b=>e.redSlider=b)},null,8,["modelValue"]),t(s,{color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":a[11]||(a[11]=b=>e.orangeSlider=b)},null,8,["modelValue"]),t(s,{color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":a[12]||(a[12]=b=>e.yellowSlider=b)},null,8,["modelValue"]),t(s,{color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":a[13]||(a[13]=b=>e.oliveSlider=b)},null,8,["modelValue"]),t(s,{color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":a[14]||(a[14]=b=>e.greenSlider=b)},null,8,["modelValue"]),t(s,{color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":a[15]||(a[15]=b=>e.tealSlider=b)},null,8,["modelValue"]),t(s,{color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":a[16]||(a[16]=b=>e.blueSlider=b)},null,8,["modelValue"]),t(s,{color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":a[17]||(a[17]=b=>e.violetSlider=b)},null,8,["modelValue"]),t(s,{color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":a[18]||(a[18]=b=>e.purpleSlider=b)},null,8,["modelValue"]),t(s,{color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":a[19]||(a[19]=b=>e.pinkSlider=b)},null,8,["modelValue"]),t(s,{color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":a[20]||(a[20]=b=>e.brownSlider=b)},null,8,["modelValue"]),t(s,{color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":a[21]||(a[21]=b=>e.greySlider=b)},null,8,["modelValue"]),t(s,{color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":a[22]||(a[22]=b=>e.blackSlider=b)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Inverted Colored",description:"A slider can be different colors while inverted",code:e.invertedColoredCode},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(s,{inverted:"",color:"red",modelValue:e.redSlider,"onUpdate:modelValue":a[23]||(a[23]=b=>e.redSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":a[24]||(a[24]=b=>e.orangeSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":a[25]||(a[25]=b=>e.yellowSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":a[26]||(a[26]=b=>e.oliveSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":a[27]||(a[27]=b=>e.greenSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":a[28]||(a[28]=b=>e.tealSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":a[29]||(a[29]=b=>e.blueSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":a[30]||(a[30]=b=>e.violetSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":a[31]||(a[31]=b=>e.purpleSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":a[32]||(a[32]=b=>e.pinkSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":a[33]||(a[33]=b=>e.brownSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":a[34]||(a[34]=b=>e.greySlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":a[35]||(a[35]=b=>e.blackSlider=b)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(u,{title:"Size",description:"A slider can have different sizes",code:e.sizeCode},{default:i(()=>[t(s,{size:"small",color:"red",modelValue:e.smallSlider,"onUpdate:modelValue":a[36]||(a[36]=b=>e.smallSlider=b)},null,8,["modelValue"]),t(s,{size:"large",color:"yellow",modelValue:e.largeSlider,"onUpdate:modelValue":a[37]||(a[37]=b=>e.largeSlider=b)},null,8,["modelValue"]),t(s,{size:"big",color:"olive",modelValue:e.bigSlider,"onUpdate:modelValue":a[38]||(a[38]=b=>e.bigSlider=b)},null,8,["modelValue"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(k,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Name")]),_:1}),t(d,null,{default:i(()=>[n("Type")]),_:1}),t(d,null,{default:i(()=>[n("Default")]),_:1}),t(d,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[($(!0),he(Ce,null,tt(e.properties,b=>($(),D(h,{key:b.name},{default:i(()=>[t(_,null,{default:i(()=>[n(Te(b.name),1)]),_:2},1024),t(_,null,{default:i(()=>[n(Te(b.type),1)]),_:2},1024),t(_,null,{default:i(()=>[n(Te(b.default),1)]),_:2},1024),t(_,null,{default:i(()=>[n(Te(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(k,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Name")]),_:1}),t(d,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[($(!0),he(Ce,null,tt(e.events,b=>($(),D(h,{key:b.name},{default:i(()=>[t(_,null,{default:i(()=>[n(Te(b.name),1)]),_:2},1024),t(_,null,{default:i(()=>[n(Te(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const tE=ke(ZD,[["render",eE]]),iE=R({name:"TabDoc",components:{DocPageHeader:Ze,DocExample:Ge,PropertyListTable:Tn},setup(){return{basicCode:`<sui-tab>
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
</sui-tab>`,tabProperties:[{name:"activeIndex",type:"string",default:0,description:"Index of the active tab."},{name:"pointing",type:"boolean",default:!1,description:""}],tabPanelProperties:[{name:"header",type:"boolean",default:"null",description:"Orientation of tab headers."}],events:[{name:"tab-change",description:"Callback to invoke when an active tab is changed."},{name:"tab-click",description:"Callback to invoke when an tab is clicked."}]}}});function aE(e,a,l,o,r,c){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-tab-panel"),u=y("sui-tab"),g=y("doc-example"),d=y("property-list-table"),h=y("sui-table-header-cell"),v=y("sui-table-row"),_=y("sui-table-header"),C=y("sui-table-cell"),k=y("sui-table-body"),T=y("sui-table"),b=y("sui-container");return $(),he("div",null,[t(m,{title:"Tab",sub:"A tab is a hidden section of content activated by a menu"}),t(b,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Examples")]),_:1}),t(g,{title:"Basic",code:e.basicCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Pointing",code:e.pointingCode},{default:i(()=>[t(u,{pointing:""},{default:i(()=>[t(s,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Secondary",code:e.secondaryCode},{default:i(()=>[t(u,{secondary:""},{default:i(()=>[t(s,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Text",code:e.textCode},{default:i(()=>[t(u,{text:""},{default:i(()=>[t(s,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(f,{as:"h3"},{default:i(()=>[n("Tab")]),_:1}),t(d,{properties:e.tabProperties},null,8,["properties"]),t(f,{as:"h3"},{default:i(()=>[n("TabPanel")]),_:1}),t(d,{properties:e.tabPanelProperties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(T,{celled:""},{default:i(()=>[t(_,null,{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Name")]),_:1}),t(h,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(k,null,{default:i(()=>[($(!0),he(Ce,null,tt(e.events,w=>($(),D(v,{key:w.name},{default:i(()=>[t(C,null,{default:i(()=>[n(Te(w.name),1)]),_:2},1024),t(C,null,{default:i(()=>[n(Te(w.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const lE=ke(iE,[["render",aE]]),nE=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({ message: 'I am a toast, nice to meet you !' })
}
<\/script>`,oE={__name:"MinimalDoc",setup(e){const{toast:a}=st(),l=()=>{a({message:"I am a toast, nice to meet you !"})};return(o,r)=>{const c=y("SuiButton");return $(),D(M,{label:"Minimal",code:nE},{description:i(()=>[n(" A minimal toast will just display a message. ")]),example:i(()=>[t(c,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},sE=`<template>
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
<\/script>`,rE={__name:"TitledDoc",setup(e){const{toast:a}=st(),l=()=>{a({title:"Better ?",message:"Hey look, I have a title !"})};return(o,r)=>{const c=y("SuiButton");return $(),D(M,{label:"Titled",code:sE},{description:i(()=>[n(" You can add a title to your toast. ")]),example:i(()=>[t(c,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},uE=`<template>
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
<\/script>`,cE={__name:"ProgressBarDoc",setup(e){const{toast:a}=st(),l=o=>{a({title:"LOOK",message:"See, how long i will last",showProgress:"bottom",showProgressColor:o})};return(o,r)=>{const c=y("SuiButton");return $(),D(M,{label:"Progress Bar",code:uE},{description:i(()=>[n(" You can attach a progress bar to your toast. ")]),example:i(()=>[t(c,{onClick:l},{default:i(()=>[n("Show")]),_:1}),t(c,{color:"red",onClick:r[0]||(r[0]=m=>l("red"))},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},dE=`<template>
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
<\/script>`,mE={__name:"ToastTypeDoc",setup(e){const{toast:a}=st(),l=o=>{a({message:"You're using the good framework !",type:o})};return(o,r)=>{const c=y("SuiButton");return $(),D(M,{label:"Toast Type",code:dE},{description:i(()=>[n(" A toast can be used to display different types of informations. ")]),example:i(()=>[t(c,{onClick:r[0]||(r[0]=m=>l("success")),positive:""},{default:i(()=>[n("Success")]),_:1}),t(c,{onClick:r[1]||(r[1]=m=>l("error")),negative:""},{default:i(()=>[n("Error")]),_:1}),t(c,{onClick:r[2]||(r[2]=m=>l("warning")),color:"yellow"},{default:i(()=>[n("Warning")]),_:1})]),_:1})}}},pE=`<template>
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
<\/script>`,fE={__name:"PositionDoc",setup(e){const{toast:a}=st(),l=o=>{a({position:o,message:"Look, I'm here !"})};return(o,r)=>{const c=y("SuiButton");return $(),D(M,{label:"Position",code:pE},{description:i(()=>[n(" A toast can appear at different positions on the screen. ")]),example:i(()=>[t(c,{onClick:r[0]||(r[0]=m=>l("top left"))},{default:i(()=>[n("Top Left")]),_:1}),t(c,{onClick:r[1]||(r[1]=m=>l("bottom right"))},{default:i(()=>[n("Bottom Right")]),_:1})]),_:1})}}},gE=S("br",null,null,-1),hE=`<template>
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
<\/script>`,_E={__name:"AttachedPosition",setup(e){const{toast:a}=st(),l=o=>{a({attached:o,title:"Watch out!",message:`I am a ${o} attached toast`})};return(o,r)=>{const c=y("SuiButton");return $(),D(M,{label:"Attached Position",code:hE},{description:i(()=>[n(" A toast can have an attached position which will show the toast over the whole width of the screen."),gE,n(" Just like notifications on mobile devices. ")]),example:i(()=>[t(c,{onClick:r[0]||(r[0]=m=>l("top"))},{default:i(()=>[n("Top")]),_:1}),t(c,{onClick:r[1]||(r[1]=m=>l("bottom"))},{default:i(()=>[n("Bottom")]),_:1})]),_:1})}}},bE=`<template>
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
<\/script>`,vE={__name:"DirectionDoc",setup(e){const{toast:a}=st(),l=()=>{a({horizontal:!0,position:"top left",title:"Watch out!",message:"Next one will open to the right"})};return(o,r)=>{const c=y("SuiButton");return $(),D(M,{label:"Direction",code:bE},{description:i(()=>[n(" Toasts can stack horizontal ")]),example:i(()=>[t(c,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},yE=`<template>
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
<\/script>`,SE={__name:"CenterAligned",setup(e){const{toast:a}=st(),l=()=>{a({centered:!0,title:"Veronika has joined",message:"Welcome to the Fomantic-UI community!"})};return(o,r)=>{const c=y("SuiButton");return $(),D(M,{label:"Center Aligned",code:yE},{description:i(()=>[n(" The toasts content can be shown center aligned. ")]),example:i(()=>[t(c,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},wE=`<template>
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
<\/script>`,CE={__name:"DurationDoc",setup(e){const{toast:a}=st(),l=o=>{a({displayTime:o,message:o===0?"I'll stay here until you click on me !":"You will see me for 5 seconds."})};return(o,r)=>{const c=y("SuiButton");return $(),D(M,{label:"Duration",code:wE},{description:i(()=>[n(" You can choose how long a toast should be displayed. ")]),example:i(()=>[t(c,{onClick:r[0]||(r[0]=m=>l(5e3))},{default:i(()=>[n("5 seconds")]),_:1}),t(c,{onClick:r[1]||(r[1]=m=>l(0))},{default:i(()=>[n("Stay")]),_:1})]),_:1})}}},AE=`<template>
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
<\/script>`,kE={__name:"MessageStyleDoc",setup(e){const{toast:a}=st(),l=()=>{a({messageStyle:!0,message:"I got my style from the message class",color:"purple"})};return(o,r)=>{const c=y("SuiButton");return $(),D(M,{label:"Use Message Style",code:AE},{description:i(()=>[n(" You can use all of the styles and colors from the message component. ")]),example:i(()=>[t(c,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},xE=`<template>
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
<\/script>`,$E={__name:"IncreasingProgressBarDoc",setup(e){const{toast:a}=st(),l=()=>{a({title:"LOOK",message:"See, how long i will last",showProgress:"top",showProgressUp:!0})};return(o,r)=>{const c=y("SuiButton");return $(),D(M,{label:"Increasing Progress Bar",code:xE},{description:i(()=>[n(" You can use the progress bar to show the progress of a task. ")]),example:i(()=>[t(c,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},BE=`<template>
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
<\/script>`,TE={__name:"ColorVariantsDoc",setup(e){const{toast:a}=st(),l=G(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],r=()=>{a({color:o[l.value],message:"I am a colorful toast",showProgress:"bottom"}),l.value=(l.value+1)%o.length};return(c,m)=>{const f=y("SuiButton");return $(),D(M,{label:"Color Variants",code:BE},{description:i(()=>[n(" You can use all of the usual color names. ")]),example:i(()=>[t(f,{onClick:r},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},LE={__name:"InvertedColorsDoc",setup(e){const{toast:a}=st(),l=G(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],r=()=>{a({color:o[l.value],inverted:!0,message:"I am an inverted colorful toast",showProgress:"bottom"}),l.value=(l.value+1)%o.length};return(c,m)=>{const f=y("SuiButton");return $(),D(M,{label:"Inverted Colors",code:c.code},{description:i(()=>[n(" Same as above, just add inverted to the class definition. ")]),example:i(()=>[t(f,{onClick:r},{default:i(()=>[n("Show")]),_:1})]),_:1},8,["code"])}}},IE=`<template>
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
<\/script>`,DE={__name:"ActionGeneralDoc",setup(e){const{toast:a}=st(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[J(P,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>[J(W,{name:"check"}),"Yes"]),J(P,{color:"red",icon:!0},()=>[J(W,{name:"ban"})]),J(P,{color:"blue",onclick:()=>a({message:"Returning false from the click handler avoids closing the toast"})},()=>"?")]})};return(o,r)=>($(),D(M,{label:"General",code:IE},{description:i(()=>[n(" Define click actions to your toast by providing a text and/or icon, optional class and click handler. ")]),example:i(()=>[t(p(P),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},EE=`<template>
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
<\/script>`,RE={__name:"ActionBasicDoc",setup(e){const{toast:a}=st(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[J(P,{color:"yellow",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really")],actionsProps:{basic:!0,aligned:"left"}})};return(o,r)=>($(),D(M,{label:"Basic",code:EE},{description:i(()=>[n(" The classActions setting provides you a way to adjust the overall appearance of the action buttons. Using basic class does not lighten the actions background. left aligns the buttons to the left. ")]),example:i(()=>[t(p(P),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},zE=`<template>
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
<\/script>`,PE={__name:"ActionAttachedDoc",setup(e){const{toast:a}=st(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[J(P,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),J(P,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"top"}})};return(o,r)=>($(),D(M,{label:"Attached",code:zE},{description:i(()=>[n(" Using attached converts your actions into a Button group. Also add top to display the actions attached to the top of the toast. ")]),example:i(()=>[t(p(P),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},ME=`<template>
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
<\/script>`,VE={__name:"ActionVerticalDoc",setup(e){const{toast:a}=st(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[J(P,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),J(P,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{vertical:!0}})};return(o,r)=>($(),D(M,{label:"Vertical",code:ME},{description:i(()=>[n(" You can use vertical to display your actions to the right of the toast. ")]),example:i(()=>[t(p(P),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},FE=S("br",null,null,-1),HE=`<template>
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
<\/script>`,NE={__name:"ActionVerticalAttachedDoc",setup(e){const{toast:a}=st(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[J(P,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),J(P,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"left",vertical:!0}})};return(o,r)=>($(),D(M,{label:"Vertical Attached",code:HE},{description:i(()=>[n(" Vertical actions can also be displayed as button groups using vertical attached."),FE,n(" Vertical attached actions also support left. ")]),example:i(()=>[t(p(P),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},OE={__name:"Toast",setup(e){const a=[{id:"minimal",label:"Minimal",category:"Types",component:oE},{id:"titled",label:"Titled",category:"Types",component:rE},{id:"progress-bar",label:"Progress Bar",category:"Types",component:cE},{id:"toast-type",label:"Toast Type",category:"Variations",component:mE},{id:"position",label:"Position",category:"Variations",component:fE},{id:"attached-position",label:"Attached Position",category:"Variations",component:_E},{id:"direction",label:"Direction",category:"Variations",component:vE},{id:"center-aligned",label:"Center Aligned",category:"Variations",component:SE},{id:"duration",label:"Duration",category:"Variations",component:CE},{id:"message-style",label:"Use Message Style",category:"Variations",component:kE},{id:"increasing-progress-bar",label:"Increasing Progress Bar",category:"Variations",component:$E},{id:"color-variants",label:"Color Variants",category:"Variations",component:TE},{id:"inverted-colors",label:"Inverted Colors",category:"Variations",component:LE},{id:"general",label:"General",category:"Actions",component:DE},{id:"action-basic",label:"Basic",category:"Actions",component:RE},{id:"action-attached",label:"Attached",category:"Actions",component:PE},{id:"action-vertical",label:"Vertical",category:"Actions",component:VE},{id:"action-vertical-attached",label:"Vertical Attached",category:"Actions",component:NE}];return(l,o)=>($(),D(Ct,{title:"Toast",description:"A toast allows users to be notified of an event","component-docs":a}))}},jE=[{path:"/",component:W_,children:[{path:"/",component:Cb},{path:"elements/button",component:Rw},{path:"elements/container",component:Uw},{path:"elements/divider",component:_C},{path:"elements/emoji",component:BC},{path:"elements/flag",component:EC},{path:"elements/header",component:dA},{path:"elements/icon",component:jA},{path:"elements/image",component:L0},{path:"elements/input",component:tk},{path:"elements/label",component:cx},{path:"elements/list",component:Px},{path:"elements/loader",component:n$},{path:"elements/rail",component:u$},{path:"elements/reveal",component:f$},{path:"elements/segment",component:F$},{path:"elements/step",component:q$},{path:"collections/breadcrumb",component:X$},{path:"collections/form",component:eB},{path:"collections/grid",component:lB},{path:"collections/menu",component:mB},{path:"collections/message",component:AB},{path:"collections/table",component:MB},{path:"views/advertisement",component:OB},{path:"views/card",component:CT},{path:"views/comment",component:w2},{path:"views/feed",component:G2},{path:"views/item",component:EL},{path:"views/statistic",component:OL},{path:"modules/accordion",component:dI},{path:"modules/calendar",component:fI},{path:"modules/checkbox",component:AI},{path:"modules/dimmer",component:$I},{path:"modules/dropdown",component:LI},{path:"modules/embed",component:EI},{path:"modules/modal",component:NI},{path:"modules/popup",component:JI},{path:"modules/progress",component:XI},{path:"modules/rating",component:JD},{path:"modules/sidebar",component:QD},{path:"modules/slider",component:tE},{path:"modules/tab",component:lE},{path:"modules/toast",component:OE}]}],GE=B_({history:jh("/vue-fomantic-ui/"),routes:jE,scrollBehavior(e,a,l){var o;e.hash||(o=document.querySelector(".article"))==null||o.scrollTo(0,0)}});(function(e){var a="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",l={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},o={bash:l,environment:{pattern:RegExp("\\$"+a),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+a),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+a),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:o},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:l}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:o},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:o.entity}}],environment:{pattern:RegExp("\\$?"+a),alias:"constant"},variable:o.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},l.inside=e.languages.bash;for(var r=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],c=o.variable[1].inside,m=0;m<r.length;m++)c[r[m]]=e.languages.bash[r[m]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);const Is=bm(kh);Is.use(GE);Is.use(uS);Is.mount("#app");

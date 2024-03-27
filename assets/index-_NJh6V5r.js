(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function a(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=a(s);fetch(s.href,c)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ln(e,i){const a=new Set(e.split(","));return i?o=>a.has(o.toLowerCase()):o=>a.has(o)}const qe={},sl=[],vt=()=>{},Md=()=>!1,pa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Io=e=>e.startsWith("onUpdate:"),Ke=Object.assign,Eo=(e,i)=>{const a=e.indexOf(i);a>-1&&e.splice(a,1)},Nd=Object.prototype.hasOwnProperty,Re=(e,i)=>Nd.call(e,i),ge=Array.isArray,rl=e=>xl(e)==="[object Map]",Ji=e=>xl(e)==="[object Set]",Ds=e=>xl(e)==="[object Date]",Hd=e=>xl(e)==="[object RegExp]",we=e=>typeof e=="function",Xe=e=>typeof e=="string",wi=e=>typeof e=="symbol",je=e=>e!==null&&typeof e=="object",Ro=e=>(je(e)||we(e))&&we(e.then)&&we(e.catch),Gr=Object.prototype.toString,xl=e=>Gr.call(e),Od=e=>xl(e).slice(8,-1),jr=e=>xl(e)==="[object Object]",Po=e=>Xe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,jl=ln(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),an=e=>{const i=Object.create(null);return a=>i[a]||(i[a]=e(a))},qd=/-(\w)/g,_t=an(e=>e.replace(qd,(i,a)=>a?a.toUpperCase():"")),Gd=/\B([A-Z])/g,$t=an(e=>e.replace(Gd,"-$1").toLowerCase()),ma=an(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ul=an(e=>e?`on${ma(e)}`:""),qt=(e,i)=>!Object.is(e,i),ul=(e,i)=>{for(let a=0;a<e.length;a++)e[a](i)},Ma=(e,i,a)=>{Object.defineProperty(e,i,{configurable:!0,enumerable:!1,value:a})},ea=e=>{const i=parseFloat(e);return isNaN(i)?e:i},Na=e=>{const i=Xe(e)?Number(e):NaN;return isNaN(i)?e:i};let Ls;const Ur=()=>Ls||(Ls=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),jd="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",Ud=ln(jd);function kl(e){if(ge(e)){const i={};for(let a=0;a<e.length;a++){const o=e[a],s=Xe(o)?Kd(o):kl(o);if(s)for(const c in s)i[c]=s[c]}return i}else if(Xe(e)||je(e))return e}const Yd=/;(?![^(]*\))/g,Jd=/:([^]+)/,Wd=/\/\*[^]*?\*\//g;function Kd(e){const i={};return e.replace(Wd,"").split(Yd).forEach(a=>{if(a){const o=a.split(Jd);o.length>1&&(i[o[0].trim()]=o[1].trim())}}),i}function fa(e){let i="";if(Xe(e))i=e;else if(ge(e))for(let a=0;a<e.length;a++){const o=fa(e[a]);o&&(i+=o+" ")}else if(je(e))for(const a in e)e[a]&&(i+=a+" ");return i.trim()}function Xd(e){if(!e)return null;let{class:i,style:a}=e;return i&&!Xe(i)&&(e.class=fa(i)),a&&(e.style=kl(a)),e}const Qd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zd=ln(Qd);function Yr(e){return!!e||e===""}function ep(e,i){if(e.length!==i.length)return!1;let a=!0;for(let o=0;a&&o<e.length;o++)a=ai(e[o],i[o]);return a}function ai(e,i){if(e===i)return!0;let a=Ds(e),o=Ds(i);if(a||o)return a&&o?e.getTime()===i.getTime():!1;if(a=wi(e),o=wi(i),a||o)return e===i;if(a=ge(e),o=ge(i),a||o)return a&&o?ep(e,i):!1;if(a=je(e),o=je(i),a||o){if(!a||!o)return!1;const s=Object.keys(e).length,c=Object.keys(i).length;if(s!==c)return!1;for(const d in e){const f=e.hasOwnProperty(d),u=i.hasOwnProperty(d);if(f&&!u||!f&&u||!ai(e[d],i[d]))return!1}}return String(e)===String(i)}function nn(e,i){return e.findIndex(a=>ai(a,i))}const $e=e=>Xe(e)?e:e==null?"":ge(e)||je(e)&&(e.toString===Gr||!we(e.toString))?JSON.stringify(e,Jr,2):String(e),Jr=(e,i)=>i&&i.__v_isRef?Jr(e,i.value):rl(i)?{[`Map(${i.size})`]:[...i.entries()].reduce((a,[o,s],c)=>(a[kn(o,c)+" =>"]=s,a),{})}:Ji(i)?{[`Set(${i.size})`]:[...i.values()].map(a=>kn(a))}:wi(i)?kn(i):je(i)&&!ge(i)&&!jr(i)?String(i):i,kn=(e,i="")=>{var a;return wi(e)?`Symbol(${(a=e.description)!=null?a:i})`:e};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xt;class zo{constructor(i=!1){this.detached=i,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xt,!i&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}run(i){if(this._active){const a=xt;try{return xt=this,i()}finally{xt=a}}}on(){xt=this}off(){xt=this.parent}stop(i){if(this._active){let a,o;for(a=0,o=this.effects.length;a<o;a++)this.effects[a].stop();for(a=0,o=this.cleanups.length;a<o;a++)this.cleanups[a]();if(this.scopes)for(a=0,o=this.scopes.length;a<o;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!i){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function tp(e){return new zo(e)}function Wr(e,i=xt){i&&i.active&&i.effects.push(e)}function Fo(){return xt}function Kr(e){xt&&xt.cleanups.push(e)}let Pi;class bl{constructor(i,a,o,s){this.fn=i,this.trigger=a,this.scheduler=o,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Wr(this,s)}get dirty(){if(this._dirtyLevel===1){Wi();for(let i=0;i<this._depsLength;i++){const a=this.deps[i];if(a.computed&&(ip(a.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),Ki()}return this._dirtyLevel>=2}set dirty(i){this._dirtyLevel=i?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let i=vi,a=Pi;try{return vi=!0,Pi=this,this._runnings++,Is(this),this.fn()}finally{Es(this),this._runnings--,Pi=a,vi=i}}stop(){var i;this.active&&(Is(this),Es(this),(i=this.onStop)==null||i.call(this),this.active=!1)}}function ip(e){return e.value}function Is(e){e._trackId++,e._depsLength=0}function Es(e){if(e.deps&&e.deps.length>e._depsLength){for(let i=e._depsLength;i<e.deps.length;i++)Xr(e.deps[i],e);e.deps.length=e._depsLength}}function Xr(e,i){const a=e.get(i);a!==void 0&&i._trackId!==a&&(e.delete(i),e.size===0&&e.cleanup())}function lp(e,i){e.effect instanceof bl&&(e=e.effect.fn);const a=new bl(e,vt,()=>{a.dirty&&a.run()});i&&(Ke(a,i),i.scope&&Wr(a,i.scope)),(!i||!i.lazy)&&a.run();const o=a.run.bind(a);return o.effect=a,o}function ap(e){e.effect.stop()}let vi=!0,Wn=0;const Qr=[];function Wi(){Qr.push(vi),vi=!1}function Ki(){const e=Qr.pop();vi=e===void 0?!0:e}function Vo(){Wn++}function Mo(){for(Wn--;!Wn&&Kn.length;)Kn.shift()()}function Zr(e,i,a){if(i.get(e)!==e._trackId){i.set(e,e._trackId);const o=e.deps[e._depsLength];o!==i?(o&&Xr(o,e),e.deps[e._depsLength++]=i):e._depsLength++}}const Kn=[];function eu(e,i,a){Vo();for(const o of e.keys())if(o._dirtyLevel<i&&e.get(o)===o._trackId){const s=o._dirtyLevel;o._dirtyLevel=i,s===0&&(o._shouldSchedule=!0,o.trigger())}tu(e),Mo()}function tu(e){for(const i of e.keys())i.scheduler&&i._shouldSchedule&&(!i._runnings||i.allowRecurse)&&e.get(i)===i._trackId&&(i._shouldSchedule=!1,Kn.push(i.scheduler))}const iu=(e,i)=>{const a=new Map;return a.cleanup=e,a.computed=i,a},Ha=new WeakMap,zi=Symbol(""),Xn=Symbol("");function wt(e,i,a){if(vi&&Pi){let o=Ha.get(e);o||Ha.set(e,o=new Map);let s=o.get(a);s||o.set(a,s=iu(()=>o.delete(a))),Zr(Pi,s)}}function ii(e,i,a,o,s,c){const d=Ha.get(e);if(!d)return;let f=[];if(i==="clear")f=[...d.values()];else if(a==="length"&&ge(e)){const u=Number(o);d.forEach((p,g)=>{(g==="length"||!wi(g)&&g>=u)&&f.push(p)})}else switch(a!==void 0&&f.push(d.get(a)),i){case"add":ge(e)?Po(a)&&f.push(d.get("length")):(f.push(d.get(zi)),rl(e)&&f.push(d.get(Xn)));break;case"delete":ge(e)||(f.push(d.get(zi)),rl(e)&&f.push(d.get(Xn)));break;case"set":rl(e)&&f.push(d.get(zi));break}Vo();for(const u of f)u&&eu(u,2);Mo()}function np(e,i){var a;return(a=Ha.get(e))==null?void 0:a.get(i)}const op=ln("__proto__,__v_isRef,__isVue"),lu=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(wi)),Rs=sp();function sp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(i=>{e[i]=function(...a){const o=Ee(this);for(let c=0,d=this.length;c<d;c++)wt(o,"get",c+"");const s=o[i](...a);return s===-1||s===!1?o[i](...a.map(Ee)):s}}),["push","pop","shift","unshift","splice"].forEach(i=>{e[i]=function(...a){Wi(),Vo();const o=Ee(this)[i].apply(this,a);return Mo(),Ki(),o}}),e}function rp(e){const i=Ee(this);return wt(i,"has",e),i.hasOwnProperty(e)}class au{constructor(i=!1,a=!1){this._isReadonly=i,this._shallow=a}get(i,a,o){const s=this._isReadonly,c=this._shallow;if(a==="__v_isReactive")return!s;if(a==="__v_isReadonly")return s;if(a==="__v_isShallow")return c;if(a==="__v_raw")return o===(s?c?cu:uu:c?ru:su).get(i)||Object.getPrototypeOf(i)===Object.getPrototypeOf(o)?i:void 0;const d=ge(i);if(!s){if(d&&Re(Rs,a))return Reflect.get(Rs,a,o);if(a==="hasOwnProperty")return rp}const f=Reflect.get(i,a,o);return(wi(a)?lu.has(a):op(a))||(s||wt(i,"get",a),c)?f:ct(f)?d&&Po(a)?f:f.value:je(f)?s?Ho(f):oi(f):f}}class nu extends au{constructor(i=!1){super(!1,i)}set(i,a,o,s){let c=i[a];if(!this._shallow){const u=Hi(c);if(!ta(o)&&!Hi(o)&&(c=Ee(c),o=Ee(o)),!ge(i)&&ct(c)&&!ct(o))return u?!1:(c.value=o,!0)}const d=ge(i)&&Po(a)?Number(a)<i.length:Re(i,a),f=Reflect.set(i,a,o,s);return i===Ee(s)&&(d?qt(o,c)&&ii(i,"set",a,o):ii(i,"add",a,o)),f}deleteProperty(i,a){const o=Re(i,a);i[a];const s=Reflect.deleteProperty(i,a);return s&&o&&ii(i,"delete",a,void 0),s}has(i,a){const o=Reflect.has(i,a);return(!wi(a)||!lu.has(a))&&wt(i,"has",a),o}ownKeys(i){return wt(i,"iterate",ge(i)?"length":zi),Reflect.ownKeys(i)}}class ou extends au{constructor(i=!1){super(!0,i)}set(i,a){return!0}deleteProperty(i,a){return!0}}const up=new nu,cp=new ou,dp=new nu(!0),pp=new ou(!0),No=e=>e,on=e=>Reflect.getPrototypeOf(e);function va(e,i,a=!1,o=!1){e=e.__v_raw;const s=Ee(e),c=Ee(i);a||(qt(i,c)&&wt(s,"get",i),wt(s,"get",c));const{has:d}=on(s),f=o?No:a?Go:ia;if(d.call(s,i))return f(e.get(i));if(d.call(s,c))return f(e.get(c));e!==s&&e.get(i)}function Sa(e,i=!1){const a=this.__v_raw,o=Ee(a),s=Ee(e);return i||(qt(e,s)&&wt(o,"has",e),wt(o,"has",s)),e===s?a.has(e):a.has(e)||a.has(s)}function ya(e,i=!1){return e=e.__v_raw,!i&&wt(Ee(e),"iterate",zi),Reflect.get(e,"size",e)}function Ps(e){e=Ee(e);const i=Ee(this);return on(i).has.call(i,e)||(i.add(e),ii(i,"add",e,e)),this}function zs(e,i){i=Ee(i);const a=Ee(this),{has:o,get:s}=on(a);let c=o.call(a,e);c||(e=Ee(e),c=o.call(a,e));const d=s.call(a,e);return a.set(e,i),c?qt(i,d)&&ii(a,"set",e,i):ii(a,"add",e,i),this}function Fs(e){const i=Ee(this),{has:a,get:o}=on(i);let s=a.call(i,e);s||(e=Ee(e),s=a.call(i,e)),o&&o.call(i,e);const c=i.delete(e);return s&&ii(i,"delete",e,void 0),c}function Vs(){const e=Ee(this),i=e.size!==0,a=e.clear();return i&&ii(e,"clear",void 0,void 0),a}function wa(e,i){return function(o,s){const c=this,d=c.__v_raw,f=Ee(d),u=i?No:e?Go:ia;return!e&&wt(f,"iterate",zi),d.forEach((p,g)=>o.call(s,u(p),u(g),c))}}function Ca(e,i,a){return function(...o){const s=this.__v_raw,c=Ee(s),d=rl(c),f=e==="entries"||e===Symbol.iterator&&d,u=e==="keys"&&d,p=s[e](...o),g=a?No:i?Go:ia;return!i&&wt(c,"iterate",u?Xn:zi),{next(){const{value:m,done:_}=p.next();return _?{value:m,done:_}:{value:f?[g(m[0]),g(m[1])]:g(m),done:_}},[Symbol.iterator](){return this}}}}function ui(e){return function(...i){return e==="delete"?!1:e==="clear"?void 0:this}}function mp(){const e={get(c){return va(this,c)},get size(){return ya(this)},has:Sa,add:Ps,set:zs,delete:Fs,clear:Vs,forEach:wa(!1,!1)},i={get(c){return va(this,c,!1,!0)},get size(){return ya(this)},has:Sa,add:Ps,set:zs,delete:Fs,clear:Vs,forEach:wa(!1,!0)},a={get(c){return va(this,c,!0)},get size(){return ya(this,!0)},has(c){return Sa.call(this,c,!0)},add:ui("add"),set:ui("set"),delete:ui("delete"),clear:ui("clear"),forEach:wa(!0,!1)},o={get(c){return va(this,c,!0,!0)},get size(){return ya(this,!0)},has(c){return Sa.call(this,c,!0)},add:ui("add"),set:ui("set"),delete:ui("delete"),clear:ui("clear"),forEach:wa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(c=>{e[c]=Ca(c,!1,!1),a[c]=Ca(c,!0,!1),i[c]=Ca(c,!1,!0),o[c]=Ca(c,!0,!0)}),[e,a,i,o]}const[fp,gp,hp,_p]=mp();function sn(e,i){const a=i?e?_p:hp:e?gp:fp;return(o,s,c)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(Re(a,s)&&s in o?a:o,s,c)}const bp={get:sn(!1,!1)},vp={get:sn(!1,!0)},Sp={get:sn(!0,!1)},yp={get:sn(!0,!0)},su=new WeakMap,ru=new WeakMap,uu=new WeakMap,cu=new WeakMap;function wp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cp(e){return e.__v_skip||!Object.isExtensible(e)?0:wp(Od(e))}function oi(e){return Hi(e)?e:rn(e,!1,up,bp,su)}function du(e){return rn(e,!1,dp,vp,ru)}function Ho(e){return rn(e,!0,cp,Sp,uu)}function Ap(e){return rn(e,!0,pp,yp,cu)}function rn(e,i,a,o,s){if(!je(e)||e.__v_raw&&!(i&&e.__v_isReactive))return e;const c=s.get(e);if(c)return c;const d=Cp(e);if(d===0)return e;const f=new Proxy(e,d===2?o:a);return s.set(e,f),f}function Fi(e){return Hi(e)?Fi(e.__v_raw):!!(e&&e.__v_isReactive)}function Hi(e){return!!(e&&e.__v_isReadonly)}function ta(e){return!!(e&&e.__v_isShallow)}function Oo(e){return Fi(e)||Hi(e)}function Ee(e){const i=e&&e.__v_raw;return i?Ee(i):e}function qo(e){return Ma(e,"__v_skip",!0),e}const ia=e=>je(e)?oi(e):e,Go=e=>je(e)?Ho(e):e;class pu{constructor(i,a,o,s){this._setter=a,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new bl(()=>i(this._value),()=>cl(this,1),()=>this.dep&&tu(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=o}get value(){const i=Ee(this);return(!i._cacheable||i.effect.dirty)&&qt(i._value,i._value=i.effect.run())&&cl(i,2),jo(i),i.effect._dirtyLevel>=1&&cl(i,1),i._value}set value(i){this._setter(i)}get _dirty(){return this.effect.dirty}set _dirty(i){this.effect.dirty=i}}function xp(e,i,a=!1){let o,s;const c=we(e);return c?(o=e,s=vt):(o=e.get,s=e.set),new pu(o,s,c||!s,a)}function jo(e){vi&&Pi&&(e=Ee(e),Zr(Pi,e.dep||(e.dep=iu(()=>e.dep=void 0,e instanceof pu?e:void 0))))}function cl(e,i=2,a){e=Ee(e);const o=e.dep;o&&eu(o,i)}function ct(e){return!!(e&&e.__v_isRef===!0)}function j(e){return fu(e,!1)}function mu(e){return fu(e,!0)}function fu(e,i){return ct(e)?e:new kp(e,i)}class kp{constructor(i,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?i:Ee(i),this._value=a?i:ia(i)}get value(){return jo(this),this._value}set value(i){const a=this.__v_isShallow||ta(i)||Hi(i);i=a?i:Ee(i),qt(i,this._rawValue)&&(this._rawValue=i,this._value=a?i:ia(i),cl(this,2))}}function Bp(e){cl(e,2)}function r(e){return ct(e)?e.value:e}function $p(e){return we(e)?e():r(e)}const Tp={get:(e,i,a)=>r(Reflect.get(e,i,a)),set:(e,i,a,o)=>{const s=e[i];return ct(s)&&!ct(a)?(s.value=a,!0):Reflect.set(e,i,a,o)}};function Uo(e){return Fi(e)?e:new Proxy(e,Tp)}class Dp{constructor(i){this.dep=void 0,this.__v_isRef=!0;const{get:a,set:o}=i(()=>jo(this),()=>cl(this));this._get=a,this._set=o}get value(){return this._get()}set value(i){this._set(i)}}function gu(e){return new Dp(e)}function Lp(e){const i=ge(e)?new Array(e.length):{};for(const a in e)i[a]=hu(e,a);return i}class Ip{constructor(i,a,o){this._object=i,this._key=a,this._defaultValue=o,this.__v_isRef=!0}get value(){const i=this._object[this._key];return i===void 0?this._defaultValue:i}set value(i){this._object[this._key]=i}get dep(){return np(Ee(this._object),this._key)}}class Ep{constructor(i){this._getter=i,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Qn(e,i,a){return ct(e)?e:we(e)?new Ep(e):je(e)&&arguments.length>1?hu(e,i,a):j(e)}function hu(e,i,a){const o=e[i];return ct(o)?o:new Ip(e,i,a)}const Rp={GET:"get",HAS:"has",ITERATE:"iterate"},Pp={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zp(e,i){}const Fp={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},Vp={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function li(e,i,a,o){let s;try{s=o?e(...o):e()}catch(c){Xi(c,i,a)}return s}function Lt(e,i,a,o){if(we(e)){const c=li(e,i,a,o);return c&&Ro(c)&&c.catch(d=>{Xi(d,i,a)}),c}const s=[];for(let c=0;c<e.length;c++)s.push(Lt(e[c],i,a,o));return s}function Xi(e,i,a,o=!0){const s=i?i.vnode:null;if(i){let c=i.parent;const d=i.proxy,f=`https://vuejs.org/error-reference/#runtime-${a}`;for(;c;){const p=c.ec;if(p){for(let g=0;g<p.length;g++)if(p[g](e,d,f)===!1)return}c=c.parent}const u=i.appContext.config.errorHandler;if(u){li(u,null,10,[e,d,f]);return}}Mp(e,a,s,o)}function Mp(e,i,a,o=!0){console.error(e)}let la=!1,Zn=!1;const dt=[];let Jt=0;const dl=[];let fi=null,Ii=0;const _u=Promise.resolve();let Yo=null;function Bl(e){const i=Yo||_u;return e?i.then(this?e.bind(this):e):i}function Np(e){let i=Jt+1,a=dt.length;for(;i<a;){const o=i+a>>>1,s=dt[o],c=aa(s);c<e||c===e&&s.pre?i=o+1:a=o}return i}function un(e){(!dt.length||!dt.includes(e,la&&e.allowRecurse?Jt+1:Jt))&&(e.id==null?dt.push(e):dt.splice(Np(e.id),0,e),bu())}function bu(){!la&&!Zn&&(Zn=!0,Yo=_u.then(vu))}function Hp(e){const i=dt.indexOf(e);i>Jt&&dt.splice(i,1)}function Oa(e){ge(e)?dl.push(...e):(!fi||!fi.includes(e,e.allowRecurse?Ii+1:Ii))&&dl.push(e),bu()}function Ms(e,i,a=la?Jt+1:0){for(;a<dt.length;a++){const o=dt[a];if(o&&o.pre){if(e&&o.id!==e.uid)continue;dt.splice(a,1),a--,o()}}}function qa(e){if(dl.length){const i=[...new Set(dl)].sort((a,o)=>aa(a)-aa(o));if(dl.length=0,fi){fi.push(...i);return}for(fi=i,Ii=0;Ii<fi.length;Ii++)fi[Ii]();fi=null,Ii=0}}const aa=e=>e.id==null?1/0:e.id,Op=(e,i)=>{const a=aa(e)-aa(i);if(a===0){if(e.pre&&!i.pre)return-1;if(i.pre&&!e.pre)return 1}return a};function vu(e){Zn=!1,la=!0,dt.sort(Op);try{for(Jt=0;Jt<dt.length;Jt++){const i=dt[Jt];i&&i.active!==!1&&li(i,null,14)}}finally{Jt=0,dt.length=0,qa(),la=!1,Yo=null,(dt.length||dl.length)&&vu()}}let al,Aa=[];function Su(e,i){var a,o;al=e,al?(al.enabled=!0,Aa.forEach(({event:s,args:c})=>al.emit(s,...c)),Aa=[]):typeof window<"u"&&window.HTMLElement&&!((o=(a=window.navigator)==null?void 0:a.userAgent)!=null&&o.includes("jsdom"))?((i.__VUE_DEVTOOLS_HOOK_REPLAY__=i.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(c=>{Su(c,i)}),setTimeout(()=>{al||(i.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Aa=[])},3e3)):Aa=[]}function qp(e,i,...a){if(e.isUnmounted)return;const o=e.vnode.props||qe;let s=a;const c=i.startsWith("update:"),d=c&&i.slice(7);if(d&&d in o){const g=`${d==="modelValue"?"model":d}Modifiers`,{number:m,trim:_}=o[g]||qe;_&&(s=a.map(w=>Xe(w)?w.trim():w)),m&&(s=a.map(ea))}let f,u=o[f=Ul(i)]||o[f=Ul(_t(i))];!u&&c&&(u=o[f=Ul($t(i))]),u&&Lt(u,e,6,s);const p=o[f+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[f])return;e.emitted[f]=!0,Lt(p,e,6,s)}}function yu(e,i,a=!1){const o=i.emitsCache,s=o.get(e);if(s!==void 0)return s;const c=e.emits;let d={},f=!1;if(!we(e)){const u=p=>{const g=yu(p,i,!0);g&&(f=!0,Ke(d,g))};!a&&i.mixins.length&&i.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!c&&!f?(je(e)&&o.set(e,null),null):(ge(c)?c.forEach(u=>d[u]=null):Ke(d,c),je(e)&&o.set(e,d),d)}function cn(e,i){return!e||!pa(i)?!1:(i=i.slice(2).replace(/Once$/,""),Re(e,i[0].toLowerCase()+i.slice(1))||Re(e,$t(i))||Re(e,i))}let tt=null,dn=null;function na(e){const i=tt;return tt=e,dn=e&&e.type.__scopeId||null,i}function wu(e){dn=e}function Cu(){dn=null}const Gp=e=>l;function l(e,i=tt,a){if(!i||e._n)return e;const o=(...s)=>{o._d&&so(-1);const c=na(i);let d;try{d=e(...s)}finally{na(c),o._d&&so(1)}return d};return o._n=!0,o._c=!0,o._d=!0,o}function Pa(e){const{type:i,vnode:a,proxy:o,withProxy:s,props:c,propsOptions:[d],slots:f,attrs:u,emit:p,render:g,renderCache:m,data:_,setupState:w,ctx:S,inheritAttrs:A}=e;let T,L;const h=na(e);try{if(a.shapeFlag&4){const C=s||o,$=C;T=kt(g.call($,C,m,c,w,_,S)),L=u}else{const C=i;T=kt(C.length>1?C(c,{attrs:u,slots:f,emit:p}):C(c,null)),L=i.props?u:Up(u)}}catch(C){Wl.length=0,Xi(C,e,1),T=t(mt)}let b=T;if(L&&A!==!1){const C=Object.keys(L),{shapeFlag:$}=b;C.length&&$&7&&(d&&C.some(Io)&&(L=Yp(L,d)),b=Wt(b,L))}return a.dirs&&(b=Wt(b),b.dirs=b.dirs?b.dirs.concat(a.dirs):a.dirs),a.transition&&(b.transition=a.transition),T=b,na(h),T}function jp(e,i=!0){let a;for(let o=0;o<e.length;o++){const s=e[o];if(Ct(s)){if(s.type!==mt||s.children==="v-if"){if(a)return;a=s}}else return}return a}const Up=e=>{let i;for(const a in e)(a==="class"||a==="style"||pa(a))&&((i||(i={}))[a]=e[a]);return i},Yp=(e,i)=>{const a={};for(const o in e)(!Io(o)||!(o.slice(9)in i))&&(a[o]=e[o]);return a};function Jp(e,i,a){const{props:o,children:s,component:c}=e,{props:d,children:f,patchFlag:u}=i,p=c.emitsOptions;if(i.dirs||i.transition)return!0;if(a&&u>=0){if(u&1024)return!0;if(u&16)return o?Ns(o,d,p):!!d;if(u&8){const g=i.dynamicProps;for(let m=0;m<g.length;m++){const _=g[m];if(d[_]!==o[_]&&!cn(p,_))return!0}}}else return(s||f)&&(!f||!f.$stable)?!0:o===d?!1:o?d?Ns(o,d,p):!0:!!d;return!1}function Ns(e,i,a){const o=Object.keys(i);if(o.length!==Object.keys(e).length)return!0;for(let s=0;s<o.length;s++){const c=o[s];if(i[c]!==e[c]&&!cn(a,c))return!0}return!1}function Jo({vnode:e,parent:i},a){for(;i;){const o=i.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=i.vnode).el=a,i=i.parent;else break}}const Wo="components",Wp="directives";function B(e,i){return Ko(Wo,e,!0,i)||e}const Au=Symbol.for("v-ndc");function xu(e){return Xe(e)?Ko(Wo,e,!1)||e:e||Au}function pn(e){return Ko(Wp,e)}function Ko(e,i,a=!0,o=!1){const s=tt||lt;if(s){const c=s.type;if(e===Wo){const f=mo(c,!1);if(f&&(f===i||f===_t(i)||f===ma(_t(i))))return c}const d=Hs(s[e]||c[e],i)||Hs(s.appContext[e],i);return!d&&o?c:d}}function Hs(e,i){return e&&(e[i]||e[_t(i)]||e[ma(_t(i))])}const ku=e=>e.__isSuspense;let eo=0;const Kp={name:"Suspense",__isSuspense:!0,process(e,i,a,o,s,c,d,f,u,p){if(e==null)Qp(i,a,o,s,c,d,f,u,p);else{if(c&&c.deps>0){i.suspense=e.suspense;return}Zp(e,i,a,o,s,d,f,u,p)}},hydrate:em,create:Xo,normalize:tm},Xp=Kp;function oa(e,i){const a=e.props&&e.props[i];we(a)&&a()}function Qp(e,i,a,o,s,c,d,f,u){const{p,o:{createElement:g}}=u,m=g("div"),_=e.suspense=Xo(e,s,o,i,m,a,c,d,f,u);p(null,_.pendingBranch=e.ssContent,m,null,o,_,c,d),_.deps>0?(oa(e,"onPending"),oa(e,"onFallback"),p(null,e.ssFallback,i,a,o,null,c,d),pl(_,e.ssFallback)):_.resolve(!1,!0)}function Zp(e,i,a,o,s,c,d,f,{p:u,um:p,o:{createElement:g}}){const m=i.suspense=e.suspense;m.vnode=i,i.el=e.el;const _=i.ssContent,w=i.ssFallback,{activeBranch:S,pendingBranch:A,isInFallback:T,isHydrating:L}=m;if(A)m.pendingBranch=_,Ot(_,A)?(u(A,_,m.hiddenContainer,null,s,m,c,d,f),m.deps<=0?m.resolve():T&&(L||(u(S,w,a,o,s,null,c,d,f),pl(m,w)))):(m.pendingId=eo++,L?(m.isHydrating=!1,m.activeBranch=A):p(A,s,m),m.deps=0,m.effects.length=0,m.hiddenContainer=g("div"),T?(u(null,_,m.hiddenContainer,null,s,m,c,d,f),m.deps<=0?m.resolve():(u(S,w,a,o,s,null,c,d,f),pl(m,w))):S&&Ot(_,S)?(u(S,_,a,o,s,m,c,d,f),m.resolve(!0)):(u(null,_,m.hiddenContainer,null,s,m,c,d,f),m.deps<=0&&m.resolve()));else if(S&&Ot(_,S))u(S,_,a,o,s,m,c,d,f),pl(m,_);else if(oa(i,"onPending"),m.pendingBranch=_,_.shapeFlag&512?m.pendingId=_.component.suspenseId:m.pendingId=eo++,u(null,_,m.hiddenContainer,null,s,m,c,d,f),m.deps<=0)m.resolve();else{const{timeout:h,pendingId:b}=m;h>0?setTimeout(()=>{m.pendingId===b&&m.fallback(w)},h):h===0&&m.fallback(w)}}function Xo(e,i,a,o,s,c,d,f,u,p,g=!1){const{p:m,m:_,um:w,n:S,o:{parentNode:A,remove:T}}=p;let L;const h=im(e);h&&i!=null&&i.pendingBranch&&(L=i.pendingId,i.deps++);const b=e.props?Na(e.props.timeout):void 0,C=c,$={vnode:e,parent:i,parentComponent:a,namespace:d,container:o,hiddenContainer:s,deps:0,pendingId:eo++,timeout:typeof b=="number"?b:-1,activeBranch:null,pendingBranch:null,isInFallback:!g,isHydrating:g,isUnmounted:!1,effects:[],resolve(E=!1,V=!1){const{vnode:N,activeBranch:z,pendingBranch:G,pendingId:X,effects:Y,parentComponent:pe,container:xe}=$;let U=!1;$.isHydrating?$.isHydrating=!1:E||(U=z&&G.transition&&G.transition.mode==="out-in",U&&(z.transition.afterLeave=()=>{X===$.pendingId&&(_(G,xe,c===C?S(z):c,0),Oa(Y))}),z&&(A(z.el)!==$.hiddenContainer&&(c=S(z)),w(z,pe,$,!0)),U||_(G,xe,c,0)),pl($,G),$.pendingBranch=null,$.isInFallback=!1;let W=$.parent,ue=!1;for(;W;){if(W.pendingBranch){W.effects.push(...Y),ue=!0;break}W=W.parent}!ue&&!U&&Oa(Y),$.effects=[],h&&i&&i.pendingBranch&&L===i.pendingId&&(i.deps--,i.deps===0&&!V&&i.resolve()),oa(N,"onResolve")},fallback(E){if(!$.pendingBranch)return;const{vnode:V,activeBranch:N,parentComponent:z,container:G,namespace:X}=$;oa(V,"onFallback");const Y=S(N),pe=()=>{$.isInFallback&&(m(null,E,G,Y,z,null,X,f,u),pl($,E))},xe=E.transition&&E.transition.mode==="out-in";xe&&(N.transition.afterLeave=pe),$.isInFallback=!0,w(N,z,null,!0),xe||pe()},move(E,V,N){$.activeBranch&&_($.activeBranch,E,V,N),$.container=E},next(){return $.activeBranch&&S($.activeBranch)},registerDep(E,V){const N=!!$.pendingBranch;N&&$.deps++;const z=E.vnode.el;E.asyncDep.catch(G=>{Xi(G,E,0)}).then(G=>{if(E.isUnmounted||$.isUnmounted||$.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:X}=E;co(E,G,!1),z&&(X.el=z);const Y=!z&&E.subTree.el;V(E,X,A(z||E.subTree.el),z?null:S(E.subTree),$,d,u),Y&&T(Y),Jo(E,X.el),N&&--$.deps===0&&$.resolve()})},unmount(E,V){$.isUnmounted=!0,$.activeBranch&&w($.activeBranch,a,E,V),$.pendingBranch&&w($.pendingBranch,a,E,V)}};return $}function em(e,i,a,o,s,c,d,f,u){const p=i.suspense=Xo(i,o,a,e.parentNode,document.createElement("div"),null,s,c,d,f,!0),g=u(e,p.pendingBranch=i.ssContent,a,p,c,d);return p.deps===0&&p.resolve(!1,!0),g}function tm(e){const{shapeFlag:i,children:a}=e,o=i&32;e.ssContent=Os(o?a.default:a),e.ssFallback=o?Os(a.fallback):t(mt)}function Os(e){let i;if(we(e)){const a=ji&&e._c;a&&(e._d=!1,y()),e=e(),a&&(e._d=!0,i=St,ac())}return ge(e)&&(e=jp(e)),e=kt(e),i&&!e.dynamicChildren&&(e.dynamicChildren=i.filter(a=>a!==e)),e}function Bu(e,i){i&&i.pendingBranch?ge(e)?i.effects.push(...e):i.effects.push(e):Oa(e)}function pl(e,i){e.activeBranch=i;const{vnode:a,parentComponent:o}=e;let s=i.el;for(;!s&&i.component;)i=i.component.subTree,s=i.el;a.el=s,o&&o.subTree===a&&(o.vnode.el=s,Jo(o,s))}function im(e){var i;return((i=e.props)==null?void 0:i.suspensible)!=null&&e.props.suspensible!==!1}const $u=Symbol.for("v-scx"),Tu=()=>Ve($u);function Qo(e,i){return ga(e,null,i)}function Du(e,i){return ga(e,null,{flush:"post"})}function Lu(e,i){return ga(e,null,{flush:"sync"})}const xa={};function pt(e,i,a){return ga(e,i,a)}function ga(e,i,{immediate:a,deep:o,flush:s,once:c,onTrack:d,onTrigger:f}=qe){if(i&&c){const E=i;i=(...V)=>{E(...V),$()}}const u=lt,p=E=>o===!0?E:Ei(E,o===!1?1:void 0);let g,m=!1,_=!1;if(ct(e)?(g=()=>e.value,m=ta(e)):Fi(e)?(g=()=>p(e),m=!0):ge(e)?(_=!0,m=e.some(E=>Fi(E)||ta(E)),g=()=>e.map(E=>{if(ct(E))return E.value;if(Fi(E))return p(E);if(we(E))return li(E,u,2)})):we(e)?i?g=()=>li(e,u,2):g=()=>(w&&w(),Lt(e,u,3,[S])):g=vt,i&&o){const E=g;g=()=>Ei(E())}let w,S=E=>{w=b.onStop=()=>{li(E,u,4),w=b.onStop=void 0}},A;if(_a)if(S=vt,i?a&&Lt(i,u,3,[g(),_?[]:void 0,S]):g(),s==="sync"){const E=Tu();A=E.__watcherHandles||(E.__watcherHandles=[])}else return vt;let T=_?new Array(e.length).fill(xa):xa;const L=()=>{if(!(!b.active||!b.dirty))if(i){const E=b.run();(o||m||(_?E.some((V,N)=>qt(V,T[N])):qt(E,T)))&&(w&&w(),Lt(i,u,3,[E,T===xa?void 0:_&&T[0]===xa?[]:T,S]),T=E)}else b.run()};L.allowRecurse=!!i;let h;s==="sync"?h=L:s==="post"?h=()=>rt(L,u&&u.suspense):(L.pre=!0,u&&(L.id=u.uid),h=()=>un(L));const b=new bl(g,vt,h),C=Fo(),$=()=>{b.stop(),C&&Eo(C.effects,b)};return i?a?L():T=b.run():s==="post"?rt(b.run.bind(b),u&&u.suspense):b.run(),A&&A.push($),$}function lm(e,i,a){const o=this.proxy,s=Xe(e)?e.includes(".")?Iu(o,e):()=>o[e]:e.bind(o,o);let c;we(i)?c=i:(c=i.handler,a=i);const d=Ui(this),f=ga(s,c.bind(o),a);return d(),f}function Iu(e,i){const a=i.split(".");return()=>{let o=e;for(let s=0;s<a.length&&o;s++)o=o[a[s]];return o}}function Ei(e,i,a=0,o){if(!je(e)||e.__v_skip)return e;if(i&&i>0){if(a>=i)return e;a++}if(o=o||new Set,o.has(e))return e;if(o.add(e),ct(e))Ei(e.value,i,a,o);else if(ge(e))for(let s=0;s<e.length;s++)Ei(e[s],i,a,o);else if(Ji(e)||rl(e))e.forEach(s=>{Ei(s,i,a,o)});else if(jr(e))for(const s in e)Ei(e[s],i,a,o);return e}function Si(e,i){if(tt===null)return e;const a=vn(tt)||tt.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<i.length;s++){let[c,d,f,u=qe]=i[s];c&&(we(c)&&(c={mounted:c,updated:c}),c.deep&&Ei(d),o.push({dir:c,instance:a,value:d,oldValue:void 0,arg:f,modifiers:u}))}return e}function jt(e,i,a,o){const s=e.dirs,c=i&&i.dirs;for(let d=0;d<s.length;d++){const f=s[d];c&&(f.oldValue=c[d].value);let u=f.dir[o];u&&(Wi(),Lt(u,a,8,[e.el,f,e,i]),Ki())}}const gi=Symbol("_leaveCb"),ka=Symbol("_enterCb");function Zo(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ai(()=>{e.isMounted=!0}),hn(()=>{e.isUnmounting=!0}),e}const zt=[Function,Array],es={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:zt,onEnter:zt,onAfterEnter:zt,onEnterCancelled:zt,onBeforeLeave:zt,onLeave:zt,onAfterLeave:zt,onLeaveCancelled:zt,onBeforeAppear:zt,onAppear:zt,onAfterAppear:zt,onAppearCancelled:zt},am={name:"BaseTransition",props:es,setup(e,{slots:i}){const a=Kt(),o=Zo();let s;return()=>{const c=i.default&&mn(i.default(),!0);if(!c||!c.length)return;let d=c[0];if(c.length>1){for(const A of c)if(A.type!==mt){d=A;break}}const f=Ee(e),{mode:u}=f;if(o.isLeaving)return Bn(d);const p=qs(d);if(!p)return Bn(d);const g=vl(p,f,o,a);Oi(p,g);const m=a.subTree,_=m&&qs(m);let w=!1;const{getTransitionKey:S}=p.type;if(S){const A=S();s===void 0?s=A:A!==s&&(s=A,w=!0)}if(_&&_.type!==mt&&(!Ot(p,_)||w)){const A=vl(_,f,o,a);if(Oi(_,A),u==="out-in")return o.isLeaving=!0,A.afterLeave=()=>{o.isLeaving=!1,a.update.active!==!1&&(a.effect.dirty=!0,a.update())},Bn(d);u==="in-out"&&p.type!==mt&&(A.delayLeave=(T,L,h)=>{const b=Ru(o,_);b[String(_.key)]=_,T[gi]=()=>{L(),T[gi]=void 0,delete g.delayedLeave},g.delayedLeave=h})}return d}}},Eu=am;function Ru(e,i){const{leavingVNodes:a}=e;let o=a.get(i.type);return o||(o=Object.create(null),a.set(i.type,o)),o}function vl(e,i,a,o){const{appear:s,mode:c,persisted:d=!1,onBeforeEnter:f,onEnter:u,onAfterEnter:p,onEnterCancelled:g,onBeforeLeave:m,onLeave:_,onAfterLeave:w,onLeaveCancelled:S,onBeforeAppear:A,onAppear:T,onAfterAppear:L,onAppearCancelled:h}=i,b=String(e.key),C=Ru(a,e),$=(N,z)=>{N&&Lt(N,o,9,z)},E=(N,z)=>{const G=z[1];$(N,z),ge(N)?N.every(X=>X.length<=1)&&G():N.length<=1&&G()},V={mode:c,persisted:d,beforeEnter(N){let z=f;if(!a.isMounted)if(s)z=A||f;else return;N[gi]&&N[gi](!0);const G=C[b];G&&Ot(e,G)&&G.el[gi]&&G.el[gi](),$(z,[N])},enter(N){let z=u,G=p,X=g;if(!a.isMounted)if(s)z=T||u,G=L||p,X=h||g;else return;let Y=!1;const pe=N[ka]=xe=>{Y||(Y=!0,xe?$(X,[N]):$(G,[N]),V.delayedLeave&&V.delayedLeave(),N[ka]=void 0)};z?E(z,[N,pe]):pe()},leave(N,z){const G=String(e.key);if(N[ka]&&N[ka](!0),a.isUnmounting)return z();$(m,[N]);let X=!1;const Y=N[gi]=pe=>{X||(X=!0,z(),pe?$(S,[N]):$(w,[N]),N[gi]=void 0,C[G]===e&&delete C[G])};C[G]=e,_?E(_,[N,Y]):Y()},clone(N){return vl(N,i,a,o)}};return V}function Bn(e){if(ha(e))return e=Wt(e),e.children=null,e}function qs(e){return ha(e)?e.children?e.children[0]:void 0:e}function Oi(e,i){e.shapeFlag&6&&e.component?Oi(e.component.subTree,i):e.shapeFlag&128?(e.ssContent.transition=i.clone(e.ssContent),e.ssFallback.transition=i.clone(e.ssFallback)):e.transition=i}function mn(e,i=!1,a){let o=[],s=0;for(let c=0;c<e.length;c++){let d=e[c];const f=a==null?d.key:String(a)+String(d.key!=null?d.key:c);d.type===Ce?(d.patchFlag&128&&s++,o=o.concat(mn(d.children,i,f))):(i||d.type!==mt)&&o.push(f!=null?Wt(d,{key:f}):d)}if(s>1)for(let c=0;c<o.length;c++)o[c].patchFlag=-2;return o}/*! #__NO_SIDE_EFFECTS__ */function F(e,i){return we(e)?Ke({name:e.name},i,{setup:e}):e}const Vi=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function nm(e){we(e)&&(e={loader:e});const{loader:i,loadingComponent:a,errorComponent:o,delay:s=200,timeout:c,suspensible:d=!0,onError:f}=e;let u=null,p,g=0;const m=()=>(g++,u=null,_()),_=()=>{let w;return u||(w=u=i().catch(S=>{if(S=S instanceof Error?S:new Error(String(S)),f)return new Promise((A,T)=>{f(S,()=>A(m()),()=>T(S),g+1)});throw S}).then(S=>w!==u&&u?u:(S&&(S.__esModule||S[Symbol.toStringTag]==="Module")&&(S=S.default),p=S,S)))};return F({name:"AsyncComponentWrapper",__asyncLoader:_,get __asyncResolved(){return p},setup(){const w=lt;if(p)return()=>$n(p,w);const S=h=>{u=null,Xi(h,w,13,!o)};if(d&&w.suspense||_a)return _().then(h=>()=>$n(h,w)).catch(h=>(S(h),()=>o?t(o,{error:h}):null));const A=j(!1),T=j(),L=j(!!s);return s&&setTimeout(()=>{L.value=!1},s),c!=null&&setTimeout(()=>{if(!A.value&&!T.value){const h=new Error(`Async component timed out after ${c}ms.`);S(h),T.value=h}},c),_().then(()=>{A.value=!0,w.parent&&ha(w.parent.vnode)&&(w.parent.effect.dirty=!0,un(w.parent.update))}).catch(h=>{S(h),T.value=h}),()=>{if(A.value&&p)return $n(p,w);if(T.value&&o)return t(o,{error:T.value});if(a&&!L.value)return t(a)}}})}function $n(e,i){const{ref:a,props:o,children:s,ce:c}=i.vnode,d=t(e,o,s);return d.ref=a,d.ce=c,delete i.vnode.ce,d}const ha=e=>e.type.__isKeepAlive,om={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:i}){const a=Kt(),o=a.ctx;if(!o.renderer)return()=>{const h=i.default&&i.default();return h&&h.length===1?h[0]:h};const s=new Map,c=new Set;let d=null;const f=a.suspense,{renderer:{p:u,m:p,um:g,o:{createElement:m}}}=o,_=m("div");o.activate=(h,b,C,$,E)=>{const V=h.component;p(h,b,C,0,f),u(V.vnode,h,b,C,V,f,$,h.slotScopeIds,E),rt(()=>{V.isDeactivated=!1,V.a&&ul(V.a);const N=h.props&&h.props.onVnodeMounted;N&&bt(N,V.parent,h)},f)},o.deactivate=h=>{const b=h.component;p(h,_,null,1,f),rt(()=>{b.da&&ul(b.da);const C=h.props&&h.props.onVnodeUnmounted;C&&bt(C,b.parent,h),b.isDeactivated=!0},f)};function w(h){Tn(h),g(h,a,f,!0)}function S(h){s.forEach((b,C)=>{const $=mo(b.type);$&&(!h||!h($))&&A(C)})}function A(h){const b=s.get(h);!d||!Ot(b,d)?w(b):d&&Tn(d),s.delete(h),c.delete(h)}pt(()=>[e.include,e.exclude],([h,b])=>{h&&S(C=>Nl(h,C)),b&&S(C=>!Nl(b,C))},{flush:"post",deep:!0});let T=null;const L=()=>{T!=null&&s.set(T,Dn(a.subTree))};return Ai(L),gn(L),hn(()=>{s.forEach(h=>{const{subTree:b,suspense:C}=a,$=Dn(b);if(h.type===$.type&&h.key===$.key){Tn($);const E=$.component.da;E&&rt(E,C);return}w(h)})}),()=>{if(T=null,!i.default)return null;const h=i.default(),b=h[0];if(h.length>1)return d=null,h;if(!Ct(b)||!(b.shapeFlag&4)&&!(b.shapeFlag&128))return d=null,b;let C=Dn(b);const $=C.type,E=mo(Vi(C)?C.type.__asyncResolved||{}:$),{include:V,exclude:N,max:z}=e;if(V&&(!E||!Nl(V,E))||N&&E&&Nl(N,E))return d=C,b;const G=C.key==null?$:C.key,X=s.get(G);return C.el&&(C=Wt(C),b.shapeFlag&128&&(b.ssContent=C)),T=G,X?(C.el=X.el,C.component=X.component,C.transition&&Oi(C,C.transition),C.shapeFlag|=512,c.delete(G),c.add(G)):(c.add(G),z&&c.size>parseInt(z,10)&&A(c.values().next().value)),C.shapeFlag|=256,d=C,ku(b.type)?b:C}}},sm=om;function Nl(e,i){return ge(e)?e.some(a=>Nl(a,i)):Xe(e)?e.split(",").includes(i):Hd(e)?e.test(i):!1}function ts(e,i){Pu(e,"a",i)}function is(e,i){Pu(e,"da",i)}function Pu(e,i,a=lt){const o=e.__wdc||(e.__wdc=()=>{let s=a;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(fn(i,o,a),a){let s=a.parent;for(;s&&s.parent;)ha(s.parent.vnode)&&rm(o,i,a,s),s=s.parent}}function rm(e,i,a,o){const s=fn(i,e,o,!0);Qi(()=>{Eo(o[i],s)},a)}function Tn(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Dn(e){return e.shapeFlag&128?e.ssContent:e}function fn(e,i,a=lt,o=!1){if(a){const s=a[e]||(a[e]=[]),c=i.__weh||(i.__weh=(...d)=>{if(a.isUnmounted)return;Wi();const f=Ui(a),u=Lt(i,a,e,d);return f(),Ki(),u});return o?s.unshift(c):s.push(c),c}}const si=e=>(i,a=lt)=>(!_a||e==="sp")&&fn(e,(...o)=>i(...o),a),zu=si("bm"),Ai=si("m"),Fu=si("bu"),gn=si("u"),hn=si("bum"),Qi=si("um"),Vu=si("sp"),Mu=si("rtg"),Nu=si("rtc");function Hu(e,i=lt){fn("ec",e,i)}function Qe(e,i,a,o){let s;const c=a&&a[o];if(ge(e)||Xe(e)){s=new Array(e.length);for(let d=0,f=e.length;d<f;d++)s[d]=i(e[d],d,void 0,c&&c[d])}else if(typeof e=="number"){s=new Array(e);for(let d=0;d<e;d++)s[d]=i(d+1,d,void 0,c&&c[d])}else if(je(e))if(e[Symbol.iterator])s=Array.from(e,(d,f)=>i(d,f,void 0,c&&c[f]));else{const d=Object.keys(e);s=new Array(d.length);for(let f=0,u=d.length;f<u;f++){const p=d[f];s[f]=i(e[p],p,f,c&&c[f])}}else s=[];return a&&(a[o]=s),s}function um(e,i){for(let a=0;a<i.length;a++){const o=i[a];if(ge(o))for(let s=0;s<o.length;s++)e[o[s].name]=o[s].fn;else o&&(e[o.name]=o.key?(...s)=>{const c=o.fn(...s);return c&&(c.key=o.key),c}:o.fn)}return e}function qi(e,i,a={},o,s){if(tt.isCE||tt.parent&&Vi(tt.parent)&&tt.parent.isCE)return i!=="default"&&(a.name=i),t("slot",a,o&&o());let c=e[i];c&&c._c&&(c._d=!1),y();const d=c&&Ou(c(a)),f=x(Ce,{key:a.key||d&&d.key||`_${i}`},d||(o?o():[]),d&&e._===1?64:-2);return!s&&f.scopeId&&(f.slotScopeIds=[f.scopeId+"-s"]),c&&c._c&&(c._d=!0),f}function Ou(e){return e.some(i=>Ct(i)?!(i.type===mt||i.type===Ce&&!Ou(i.children)):!0)?e:null}function cm(e,i){const a={};for(const o in e)a[i&&/[A-Z]/.test(o)?`on:${o}`:Ul(o)]=e[o];return a}const to=e=>e?uc(e)?vn(e)||e.proxy:to(e.parent):null,Yl=Ke(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>to(e.parent),$root:e=>to(e.root),$emit:e=>e.emit,$options:e=>ls(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,un(e.update)}),$nextTick:e=>e.n||(e.n=Bl.bind(e.proxy)),$watch:e=>lm.bind(e)}),Ln=(e,i)=>e!==qe&&!e.__isScriptSetup&&Re(e,i),io={get({_:e},i){const{ctx:a,setupState:o,data:s,props:c,accessCache:d,type:f,appContext:u}=e;let p;if(i[0]!=="$"){const w=d[i];if(w!==void 0)switch(w){case 1:return o[i];case 2:return s[i];case 4:return a[i];case 3:return c[i]}else{if(Ln(o,i))return d[i]=1,o[i];if(s!==qe&&Re(s,i))return d[i]=2,s[i];if((p=e.propsOptions[0])&&Re(p,i))return d[i]=3,c[i];if(a!==qe&&Re(a,i))return d[i]=4,a[i];lo&&(d[i]=0)}}const g=Yl[i];let m,_;if(g)return i==="$attrs"&&wt(e,"get",i),g(e);if((m=f.__cssModules)&&(m=m[i]))return m;if(a!==qe&&Re(a,i))return d[i]=4,a[i];if(_=u.config.globalProperties,Re(_,i))return _[i]},set({_:e},i,a){const{data:o,setupState:s,ctx:c}=e;return Ln(s,i)?(s[i]=a,!0):o!==qe&&Re(o,i)?(o[i]=a,!0):Re(e.props,i)||i[0]==="$"&&i.slice(1)in e?!1:(c[i]=a,!0)},has({_:{data:e,setupState:i,accessCache:a,ctx:o,appContext:s,propsOptions:c}},d){let f;return!!a[d]||e!==qe&&Re(e,d)||Ln(i,d)||(f=c[0])&&Re(f,d)||Re(o,d)||Re(Yl,d)||Re(s.config.globalProperties,d)},defineProperty(e,i,a){return a.get!=null?e._.accessCache[i]=0:Re(a,"value")&&this.set(e,i,a.value,null),Reflect.defineProperty(e,i,a)}},dm=Ke({},io,{get(e,i){if(i!==Symbol.unscopables)return io.get(e,i,e)},has(e,i){return i[0]!=="_"&&!Ud(i)}});function pm(){return null}function mm(){return null}function fm(e){}function gm(e){}function hm(){return null}function _m(){}function bm(e,i){return null}function vm(){return Gu().slots}function qu(){return Gu().attrs}function Gu(){const e=Kt();return e.setupContext||(e.setupContext=pc(e))}function sa(e){return ge(e)?e.reduce((i,a)=>(i[a]=null,i),{}):e}function Sm(e,i){const a=sa(e);for(const o in i){if(o.startsWith("__skip"))continue;let s=a[o];s?ge(s)||we(s)?s=a[o]={type:s,default:i[o]}:s.default=i[o]:s===null&&(s=a[o]={default:i[o]}),s&&i[`__skip_${o}`]&&(s.skipFactory=!0)}return a}function ym(e,i){return!e||!i?e||i:ge(e)&&ge(i)?e.concat(i):Ke({},sa(e),sa(i))}function wm(e,i){const a={};for(const o in e)i.includes(o)||Object.defineProperty(a,o,{enumerable:!0,get:()=>e[o]});return a}function Cm(e){const i=Kt();let a=e();return uo(),Ro(a)&&(a=a.catch(o=>{throw Ui(i),o})),[a,()=>Ui(i)]}let lo=!0;function Am(e){const i=ls(e),a=e.proxy,o=e.ctx;lo=!1,i.beforeCreate&&Gs(i.beforeCreate,e,"bc");const{data:s,computed:c,methods:d,watch:f,provide:u,inject:p,created:g,beforeMount:m,mounted:_,beforeUpdate:w,updated:S,activated:A,deactivated:T,beforeDestroy:L,beforeUnmount:h,destroyed:b,unmounted:C,render:$,renderTracked:E,renderTriggered:V,errorCaptured:N,serverPrefetch:z,expose:G,inheritAttrs:X,components:Y,directives:pe,filters:xe}=i;if(p&&xm(p,o,null),d)for(const ue in d){const le=d[ue];we(le)&&(o[ue]=le.bind(a))}if(s){const ue=s.call(a,a);je(ue)&&(e.data=oi(ue))}if(lo=!0,c)for(const ue in c){const le=c[ue],De=we(le)?le.bind(a,a):we(le.get)?le.get.bind(a,a):vt,Je=!we(le)&&we(le.set)?le.set.bind(a):vt,at=M({get:De,set:Je});Object.defineProperty(o,ue,{enumerable:!0,configurable:!0,get:()=>at.value,set:Ue=>at.value=Ue})}if(f)for(const ue in f)ju(f[ue],o,a,ue);if(u){const ue=we(u)?u.call(a):u;Reflect.ownKeys(ue).forEach(le=>{ut(le,ue[le])})}g&&Gs(g,e,"c");function W(ue,le){ge(le)?le.forEach(De=>ue(De.bind(a))):le&&ue(le.bind(a))}if(W(zu,m),W(Ai,_),W(Fu,w),W(gn,S),W(ts,A),W(is,T),W(Hu,N),W(Nu,E),W(Mu,V),W(hn,h),W(Qi,C),W(Vu,z),ge(G))if(G.length){const ue=e.exposed||(e.exposed={});G.forEach(le=>{Object.defineProperty(ue,le,{get:()=>a[le],set:De=>a[le]=De})})}else e.exposed||(e.exposed={});$&&e.render===vt&&(e.render=$),X!=null&&(e.inheritAttrs=X),Y&&(e.components=Y),pe&&(e.directives=pe)}function xm(e,i,a=vt){ge(e)&&(e=ao(e));for(const o in e){const s=e[o];let c;je(s)?"default"in s?c=Ve(s.from||o,s.default,!0):c=Ve(s.from||o):c=Ve(s),ct(c)?Object.defineProperty(i,o,{enumerable:!0,configurable:!0,get:()=>c.value,set:d=>c.value=d}):i[o]=c}}function Gs(e,i,a){Lt(ge(e)?e.map(o=>o.bind(i.proxy)):e.bind(i.proxy),i,a)}function ju(e,i,a,o){const s=o.includes(".")?Iu(a,o):()=>a[o];if(Xe(e)){const c=i[e];we(c)&&pt(s,c)}else if(we(e))pt(s,e.bind(a));else if(je(e))if(ge(e))e.forEach(c=>ju(c,i,a,o));else{const c=we(e.handler)?e.handler.bind(a):i[e.handler];we(c)&&pt(s,c,e)}}function ls(e){const i=e.type,{mixins:a,extends:o}=i,{mixins:s,optionsCache:c,config:{optionMergeStrategies:d}}=e.appContext,f=c.get(i);let u;return f?u=f:!s.length&&!a&&!o?u=i:(u={},s.length&&s.forEach(p=>Ga(u,p,d,!0)),Ga(u,i,d)),je(i)&&c.set(i,u),u}function Ga(e,i,a,o=!1){const{mixins:s,extends:c}=i;c&&Ga(e,c,a,!0),s&&s.forEach(d=>Ga(e,d,a,!0));for(const d in i)if(!(o&&d==="expose")){const f=km[d]||a&&a[d];e[d]=f?f(e[d],i[d]):i[d]}return e}const km={data:js,props:Us,emits:Us,methods:Hl,computed:Hl,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:Hl,directives:Hl,watch:$m,provide:js,inject:Bm};function js(e,i){return i?e?function(){return Ke(we(e)?e.call(this,this):e,we(i)?i.call(this,this):i)}:i:e}function Bm(e,i){return Hl(ao(e),ao(i))}function ao(e){if(ge(e)){const i={};for(let a=0;a<e.length;a++)i[e[a]]=e[a];return i}return e}function ht(e,i){return e?[...new Set([].concat(e,i))]:i}function Hl(e,i){return e?Ke(Object.create(null),e,i):i}function Us(e,i){return e?ge(e)&&ge(i)?[...new Set([...e,...i])]:Ke(Object.create(null),sa(e),sa(i??{})):i}function $m(e,i){if(!e)return i;if(!i)return e;const a=Ke(Object.create(null),e);for(const o in i)a[o]=ht(e[o],i[o]);return a}function Uu(){return{app:null,config:{isNativeTag:Md,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tm=0;function Dm(e,i){return function(o,s=null){we(o)||(o=Ke({},o)),s!=null&&!je(s)&&(s=null);const c=Uu(),d=new WeakSet;let f=!1;const u=c.app={_uid:Tm++,_component:o,_props:s,_container:null,_context:c,_instance:null,version:fc,get config(){return c.config},set config(p){},use(p,...g){return d.has(p)||(p&&we(p.install)?(d.add(p),p.install(u,...g)):we(p)&&(d.add(p),p(u,...g))),u},mixin(p){return c.mixins.includes(p)||c.mixins.push(p),u},component(p,g){return g?(c.components[p]=g,u):c.components[p]},directive(p,g){return g?(c.directives[p]=g,u):c.directives[p]},mount(p,g,m){if(!f){const _=t(o,s);return _.appContext=c,m===!0?m="svg":m===!1&&(m=void 0),g&&i?i(_,p):e(_,p,m),f=!0,u._container=p,p.__vue_app__=u,vn(_.component)||_.component.proxy}},unmount(){f&&(e(null,u._container),delete u._container.__vue_app__)},provide(p,g){return c.provides[p]=g,u},runWithContext(p){ra=u;try{return p()}finally{ra=null}}};return u}}let ra=null;function ut(e,i){if(lt){let a=lt.provides;const o=lt.parent&&lt.parent.provides;o===a&&(a=lt.provides=Object.create(o)),a[e]=i}}function Ve(e,i,a=!1){const o=lt||tt;if(o||ra){const s=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:ra._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return a&&we(i)?i.call(o&&o.proxy):i}}function Lm(){return!!(lt||tt||ra)}function Im(e,i,a,o=!1){const s={},c={};Ma(c,bn,1),e.propsDefaults=Object.create(null),Yu(e,i,s,c);for(const d in e.propsOptions[0])d in s||(s[d]=void 0);a?e.props=o?s:du(s):e.type.props?e.props=s:e.props=c,e.attrs=c}function Em(e,i,a,o){const{props:s,attrs:c,vnode:{patchFlag:d}}=e,f=Ee(s),[u]=e.propsOptions;let p=!1;if((o||d>0)&&!(d&16)){if(d&8){const g=e.vnode.dynamicProps;for(let m=0;m<g.length;m++){let _=g[m];if(cn(e.emitsOptions,_))continue;const w=i[_];if(u)if(Re(c,_))w!==c[_]&&(c[_]=w,p=!0);else{const S=_t(_);s[S]=no(u,f,S,w,e,!1)}else w!==c[_]&&(c[_]=w,p=!0)}}}else{Yu(e,i,s,c)&&(p=!0);let g;for(const m in f)(!i||!Re(i,m)&&((g=$t(m))===m||!Re(i,g)))&&(u?a&&(a[m]!==void 0||a[g]!==void 0)&&(s[m]=no(u,f,m,void 0,e,!0)):delete s[m]);if(c!==f)for(const m in c)(!i||!Re(i,m))&&(delete c[m],p=!0)}p&&ii(e,"set","$attrs")}function Yu(e,i,a,o){const[s,c]=e.propsOptions;let d=!1,f;if(i)for(let u in i){if(jl(u))continue;const p=i[u];let g;s&&Re(s,g=_t(u))?!c||!c.includes(g)?a[g]=p:(f||(f={}))[g]=p:cn(e.emitsOptions,u)||(!(u in o)||p!==o[u])&&(o[u]=p,d=!0)}if(c){const u=Ee(a),p=f||qe;for(let g=0;g<c.length;g++){const m=c[g];a[m]=no(s,u,m,p[m],e,!Re(p,m))}}return d}function no(e,i,a,o,s,c){const d=e[a];if(d!=null){const f=Re(d,"default");if(f&&o===void 0){const u=d.default;if(d.type!==Function&&!d.skipFactory&&we(u)){const{propsDefaults:p}=s;if(a in p)o=p[a];else{const g=Ui(s);o=p[a]=u.call(null,i),g()}}else o=u}d[0]&&(c&&!f?o=!1:d[1]&&(o===""||o===$t(a))&&(o=!0))}return o}function Ju(e,i,a=!1){const o=i.propsCache,s=o.get(e);if(s)return s;const c=e.props,d={},f=[];let u=!1;if(!we(e)){const g=m=>{u=!0;const[_,w]=Ju(m,i,!0);Ke(d,_),w&&f.push(...w)};!a&&i.mixins.length&&i.mixins.forEach(g),e.extends&&g(e.extends),e.mixins&&e.mixins.forEach(g)}if(!c&&!u)return je(e)&&o.set(e,sl),sl;if(ge(c))for(let g=0;g<c.length;g++){const m=_t(c[g]);Ys(m)&&(d[m]=qe)}else if(c)for(const g in c){const m=_t(g);if(Ys(m)){const _=c[g],w=d[m]=ge(_)||we(_)?{type:_}:Ke({},_);if(w){const S=Ks(Boolean,w.type),A=Ks(String,w.type);w[0]=S>-1,w[1]=A<0||S<A,(S>-1||Re(w,"default"))&&f.push(m)}}}const p=[d,f];return je(e)&&o.set(e,p),p}function Ys(e){return e[0]!=="$"}function Js(e){const i=e&&e.toString().match(/^\s*(function|class) (\w+)/);return i?i[2]:e===null?"null":""}function Ws(e,i){return Js(e)===Js(i)}function Ks(e,i){return ge(i)?i.findIndex(a=>Ws(a,e)):we(i)&&Ws(i,e)?0:-1}const Wu=e=>e[0]==="_"||e==="$stable",as=e=>ge(e)?e.map(kt):[kt(e)],Rm=(e,i,a)=>{if(i._n)return i;const o=l((...s)=>as(i(...s)),a);return o._c=!1,o},Ku=(e,i,a)=>{const o=e._ctx;for(const s in e){if(Wu(s))continue;const c=e[s];if(we(c))i[s]=Rm(s,c,o);else if(c!=null){const d=as(c);i[s]=()=>d}}},Xu=(e,i)=>{const a=as(i);e.slots.default=()=>a},Pm=(e,i)=>{if(e.vnode.shapeFlag&32){const a=i._;a?(e.slots=Ee(i),Ma(i,"_",a)):Ku(i,e.slots={})}else e.slots={},i&&Xu(e,i);Ma(e.slots,bn,1)},zm=(e,i,a)=>{const{vnode:o,slots:s}=e;let c=!0,d=qe;if(o.shapeFlag&32){const f=i._;f?a&&f===1?c=!1:(Ke(s,i),!a&&f===1&&delete s._):(c=!i.$stable,Ku(i,s)),d=i}else i&&(Xu(e,i),d={default:1});if(c)for(const f in s)!Wu(f)&&d[f]==null&&delete s[f]};function ja(e,i,a,o,s=!1){if(ge(e)){e.forEach((_,w)=>ja(_,i&&(ge(i)?i[w]:i),a,o,s));return}if(Vi(o)&&!s)return;const c=o.shapeFlag&4?vn(o.component)||o.component.proxy:o.el,d=s?null:c,{i:f,r:u}=e,p=i&&i.r,g=f.refs===qe?f.refs={}:f.refs,m=f.setupState;if(p!=null&&p!==u&&(Xe(p)?(g[p]=null,Re(m,p)&&(m[p]=null)):ct(p)&&(p.value=null)),we(u))li(u,f,12,[d,g]);else{const _=Xe(u),w=ct(u),S=e.f;if(_||w){const A=()=>{if(S){const T=_?Re(m,u)?m[u]:g[u]:u.value;s?ge(T)&&Eo(T,c):ge(T)?T.includes(c)||T.push(c):_?(g[u]=[c],Re(m,u)&&(m[u]=g[u])):(u.value=[c],e.k&&(g[e.k]=u.value))}else _?(g[u]=d,Re(m,u)&&(m[u]=d)):w&&(u.value=d,e.k&&(g[e.k]=d))};s||S?A():(A.id=-1,rt(A,a))}}}let ci=!1;const Fm=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",Vm=e=>e.namespaceURI.includes("MathML"),Ba=e=>{if(Fm(e))return"svg";if(Vm(e))return"mathml"},$a=e=>e.nodeType===8;function Mm(e){const{mt:i,p:a,o:{patchProp:o,createText:s,nextSibling:c,parentNode:d,remove:f,insert:u,createComment:p}}=e,g=(b,C)=>{if(!C.hasChildNodes()){a(null,b,C),qa(),C._vnode=b;return}ci=!1,m(C.firstChild,b,null,null,null),qa(),C._vnode=b,ci&&console.error("Hydration completed but contains mismatches.")},m=(b,C,$,E,V,N=!1)=>{const z=$a(b)&&b.data==="[",G=()=>A(b,C,$,E,V,z),{type:X,ref:Y,shapeFlag:pe,patchFlag:xe}=C;let U=b.nodeType;C.el=b,xe===-2&&(N=!1,C.dynamicChildren=null);let W=null;switch(X){case Gi:U!==3?C.children===""?(u(C.el=s(""),d(b),b),W=b):W=G():(b.data!==C.children&&(ci=!0,b.data=C.children),W=c(b));break;case mt:h(b)?(W=c(b),L(C.el=b.content.firstChild,b,$)):U!==8||z?W=G():W=c(b);break;case Mi:if(z&&(b=c(b),U=b.nodeType),U===1||U===3){W=b;const ue=!C.children.length;for(let le=0;le<C.staticCount;le++)ue&&(C.children+=W.nodeType===1?W.outerHTML:W.data),le===C.staticCount-1&&(C.anchor=W),W=c(W);return z?c(W):W}else G();break;case Ce:z?W=S(b,C,$,E,V,N):W=G();break;default:if(pe&1)(U!==1||C.type.toLowerCase()!==b.tagName.toLowerCase())&&!h(b)?W=G():W=_(b,C,$,E,V,N);else if(pe&6){C.slotScopeIds=V;const ue=d(b);if(z?W=T(b):$a(b)&&b.data==="teleport start"?W=T(b,b.data,"teleport end"):W=c(b),i(C,ue,null,$,E,Ba(ue),N),Vi(C)){let le;z?(le=t(Ce),le.anchor=W?W.previousSibling:ue.lastChild):le=b.nodeType===3?n(""):t("div"),le.el=b,C.component.subTree=le}}else pe&64?U!==8?W=G():W=C.type.hydrate(b,C,$,E,V,N,e,w):pe&128&&(W=C.type.hydrate(b,C,$,E,Ba(d(b)),V,N,e,m))}return Y!=null&&ja(Y,null,E,C),W},_=(b,C,$,E,V,N)=>{N=N||!!C.dynamicChildren;const{type:z,props:G,patchFlag:X,shapeFlag:Y,dirs:pe,transition:xe}=C,U=z==="input"||z==="option";if(U||X!==-1){pe&&jt(C,null,$,"created");let W=!1;if(h(b)){W=tc(E,xe)&&$&&$.vnode.props&&$.vnode.props.appear;const le=b.content.firstChild;W&&xe.beforeEnter(le),L(le,b,$),C.el=b=le}if(Y&16&&!(G&&(G.innerHTML||G.textContent))){let le=w(b.firstChild,C,b,$,E,V,N);for(;le;){ci=!0;const De=le;le=le.nextSibling,f(De)}}else Y&8&&b.textContent!==C.children&&(ci=!0,b.textContent=C.children);if(G)if(U||!N||X&48)for(const le in G)(U&&(le.endsWith("value")||le==="indeterminate")||pa(le)&&!jl(le)||le[0]===".")&&o(b,le,null,G[le],void 0,void 0,$);else G.onClick&&o(b,"onClick",null,G.onClick,void 0,void 0,$);let ue;(ue=G&&G.onVnodeBeforeMount)&&bt(ue,$,C),pe&&jt(C,null,$,"beforeMount"),((ue=G&&G.onVnodeMounted)||pe||W)&&Bu(()=>{ue&&bt(ue,$,C),W&&xe.enter(b),pe&&jt(C,null,$,"mounted")},E)}return b.nextSibling},w=(b,C,$,E,V,N,z)=>{z=z||!!C.dynamicChildren;const G=C.children,X=G.length;for(let Y=0;Y<X;Y++){const pe=z?G[Y]:G[Y]=kt(G[Y]);if(b)b=m(b,pe,E,V,N,z);else{if(pe.type===Gi&&!pe.children)continue;ci=!0,a(null,pe,$,null,E,V,Ba($),N)}}return b},S=(b,C,$,E,V,N)=>{const{slotScopeIds:z}=C;z&&(V=V?V.concat(z):z);const G=d(b),X=w(c(b),C,G,$,E,V,N);return X&&$a(X)&&X.data==="]"?c(C.anchor=X):(ci=!0,u(C.anchor=p("]"),G,X),X)},A=(b,C,$,E,V,N)=>{if(ci=!0,C.el=null,N){const X=T(b);for(;;){const Y=c(b);if(Y&&Y!==X)f(Y);else break}}const z=c(b),G=d(b);return f(b),a(null,C,G,z,$,E,Ba(G),V),z},T=(b,C="[",$="]")=>{let E=0;for(;b;)if(b=c(b),b&&$a(b)&&(b.data===C&&E++,b.data===$)){if(E===0)return c(b);E--}return b},L=(b,C,$)=>{const E=C.parentNode;E&&E.replaceChild(b,C);let V=$;for(;V;)V.vnode.el===C&&(V.vnode.el=V.subTree.el=b),V=V.parent},h=b=>b.nodeType===1&&b.tagName.toLowerCase()==="template";return[g,m]}const rt=Bu;function Qu(e){return ec(e)}function Zu(e){return ec(e,Mm)}function ec(e,i){const a=Ur();a.__VUE__=!0;const{insert:o,remove:s,patchProp:c,createElement:d,createText:f,createComment:u,setText:p,setElementText:g,parentNode:m,nextSibling:_,setScopeId:w=vt,insertStaticContent:S}=e,A=(D,R,q,Q=null,Z=null,ne=null,de=void 0,ae=null,se=!!R.dynamicChildren)=>{if(D===R)return;D&&!Ot(D,R)&&(Q=re(D),Ue(D,Z,ne,!0),D=null),R.patchFlag===-2&&(se=!1,R.dynamicChildren=null);const{type:ie,ref:me,shapeFlag:ve}=R;switch(ie){case Gi:T(D,R,q,Q);break;case mt:L(D,R,q,Q);break;case Mi:D==null&&h(R,q,Q,de);break;case Ce:Y(D,R,q,Q,Z,ne,de,ae,se);break;default:ve&1?$(D,R,q,Q,Z,ne,de,ae,se):ve&6?pe(D,R,q,Q,Z,ne,de,ae,se):(ve&64||ve&128)&&ie.process(D,R,q,Q,Z,ne,de,ae,se,Ne)}me!=null&&Z&&ja(me,D&&D.ref,ne,R||D,!R)},T=(D,R,q,Q)=>{if(D==null)o(R.el=f(R.children),q,Q);else{const Z=R.el=D.el;R.children!==D.children&&p(Z,R.children)}},L=(D,R,q,Q)=>{D==null?o(R.el=u(R.children||""),q,Q):R.el=D.el},h=(D,R,q,Q)=>{[D.el,D.anchor]=S(D.children,R,q,Q,D.el,D.anchor)},b=({el:D,anchor:R},q,Q)=>{let Z;for(;D&&D!==R;)Z=_(D),o(D,q,Q),D=Z;o(R,q,Q)},C=({el:D,anchor:R})=>{let q;for(;D&&D!==R;)q=_(D),s(D),D=q;s(R)},$=(D,R,q,Q,Z,ne,de,ae,se)=>{R.type==="svg"?de="svg":R.type==="math"&&(de="mathml"),D==null?E(R,q,Q,Z,ne,de,ae,se):z(D,R,Z,ne,de,ae,se)},E=(D,R,q,Q,Z,ne,de,ae)=>{let se,ie;const{props:me,shapeFlag:ve,transition:be,dirs:Ae}=D;if(se=D.el=d(D.type,ne,me&&me.is,me),ve&8?g(se,D.children):ve&16&&N(D.children,se,null,Q,Z,In(D,ne),de,ae),Ae&&jt(D,null,Q,"created"),V(se,D,D.scopeId,de,Q),me){for(const Ge in me)Ge!=="value"&&!jl(Ge)&&c(se,Ge,null,me[Ge],ne,D.children,Q,Z,ce);"value"in me&&c(se,"value",null,me.value,ne),(ie=me.onVnodeBeforeMount)&&bt(ie,Q,D)}Ae&&jt(D,null,Q,"beforeMount");const Le=tc(Z,be);Le&&be.beforeEnter(se),o(se,R,q),((ie=me&&me.onVnodeMounted)||Le||Ae)&&rt(()=>{ie&&bt(ie,Q,D),Le&&be.enter(se),Ae&&jt(D,null,Q,"mounted")},Z)},V=(D,R,q,Q,Z)=>{if(q&&w(D,q),Q)for(let ne=0;ne<Q.length;ne++)w(D,Q[ne]);if(Z){let ne=Z.subTree;if(R===ne){const de=Z.vnode;V(D,de,de.scopeId,de.slotScopeIds,Z.parent)}}},N=(D,R,q,Q,Z,ne,de,ae,se=0)=>{for(let ie=se;ie<D.length;ie++){const me=D[ie]=ae?hi(D[ie]):kt(D[ie]);A(null,me,R,q,Q,Z,ne,de,ae)}},z=(D,R,q,Q,Z,ne,de)=>{const ae=R.el=D.el;let{patchFlag:se,dynamicChildren:ie,dirs:me}=R;se|=D.patchFlag&16;const ve=D.props||qe,be=R.props||qe;let Ae;if(q&&Bi(q,!1),(Ae=be.onVnodeBeforeUpdate)&&bt(Ae,q,R,D),me&&jt(R,D,q,"beforeUpdate"),q&&Bi(q,!0),ie?G(D.dynamicChildren,ie,ae,q,Q,In(R,Z),ne):de||le(D,R,ae,null,q,Q,In(R,Z),ne,!1),se>0){if(se&16)X(ae,R,ve,be,q,Q,Z);else if(se&2&&ve.class!==be.class&&c(ae,"class",null,be.class,Z),se&4&&c(ae,"style",ve.style,be.style,Z),se&8){const Le=R.dynamicProps;for(let Ge=0;Ge<Le.length;Ge++){const We=Le[Ge],nt=ve[We],Ht=be[We];(Ht!==nt||We==="value")&&c(ae,We,nt,Ht,Z,D.children,q,Q,ce)}}se&1&&D.children!==R.children&&g(ae,R.children)}else!de&&ie==null&&X(ae,R,ve,be,q,Q,Z);((Ae=be.onVnodeUpdated)||me)&&rt(()=>{Ae&&bt(Ae,q,R,D),me&&jt(R,D,q,"updated")},Q)},G=(D,R,q,Q,Z,ne,de)=>{for(let ae=0;ae<R.length;ae++){const se=D[ae],ie=R[ae],me=se.el&&(se.type===Ce||!Ot(se,ie)||se.shapeFlag&70)?m(se.el):q;A(se,ie,me,null,Q,Z,ne,de,!0)}},X=(D,R,q,Q,Z,ne,de)=>{if(q!==Q){if(q!==qe)for(const ae in q)!jl(ae)&&!(ae in Q)&&c(D,ae,q[ae],null,de,R.children,Z,ne,ce);for(const ae in Q){if(jl(ae))continue;const se=Q[ae],ie=q[ae];se!==ie&&ae!=="value"&&c(D,ae,ie,se,de,R.children,Z,ne,ce)}"value"in Q&&c(D,"value",q.value,Q.value,de)}},Y=(D,R,q,Q,Z,ne,de,ae,se)=>{const ie=R.el=D?D.el:f(""),me=R.anchor=D?D.anchor:f("");let{patchFlag:ve,dynamicChildren:be,slotScopeIds:Ae}=R;Ae&&(ae=ae?ae.concat(Ae):Ae),D==null?(o(ie,q,Q),o(me,q,Q),N(R.children||[],q,me,Z,ne,de,ae,se)):ve>0&&ve&64&&be&&D.dynamicChildren?(G(D.dynamicChildren,be,q,Z,ne,de,ae),(R.key!=null||Z&&R===Z.subTree)&&ns(D,R,!0)):le(D,R,q,me,Z,ne,de,ae,se)},pe=(D,R,q,Q,Z,ne,de,ae,se)=>{R.slotScopeIds=ae,D==null?R.shapeFlag&512?Z.ctx.activate(R,q,Q,de,se):xe(R,q,Q,Z,ne,de,se):U(D,R,se)},xe=(D,R,q,Q,Z,ne,de)=>{const ae=D.component=rc(D,Q,Z);if(ha(D)&&(ae.ctx.renderer=Ne),cc(ae),ae.asyncDep){if(Z&&Z.registerDep(ae,W),!D.el){const se=ae.subTree=t(mt);L(null,se,R,q)}}else W(ae,D,R,q,Z,ne,de)},U=(D,R,q)=>{const Q=R.component=D.component;if(Jp(D,R,q))if(Q.asyncDep&&!Q.asyncResolved){ue(Q,R,q);return}else Q.next=R,Hp(Q.update),Q.effect.dirty=!0,Q.update();else R.el=D.el,Q.vnode=R},W=(D,R,q,Q,Z,ne,de)=>{const ae=()=>{if(D.isMounted){let{next:me,bu:ve,u:be,parent:Ae,vnode:Le}=D;{const tl=ic(D);if(tl){me&&(me.el=Le.el,ue(D,me,de)),tl.asyncDep.then(()=>{D.isUnmounted||ae()});return}}let Ge=me,We;Bi(D,!1),me?(me.el=Le.el,ue(D,me,de)):me=Le,ve&&ul(ve),(We=me.props&&me.props.onVnodeBeforeUpdate)&&bt(We,Ae,me,Le),Bi(D,!0);const nt=Pa(D),Ht=D.subTree;D.subTree=nt,A(Ht,nt,m(Ht.el),re(Ht),D,Z,ne),me.el=nt.el,Ge===null&&Jo(D,nt.el),be&&rt(be,Z),(We=me.props&&me.props.onVnodeUpdated)&&rt(()=>bt(We,Ae,me,Le),Z)}else{let me;const{el:ve,props:be}=R,{bm:Ae,m:Le,parent:Ge}=D,We=Vi(R);if(Bi(D,!1),Ae&&ul(Ae),!We&&(me=be&&be.onVnodeBeforeMount)&&bt(me,Ge,R),Bi(D,!0),ve&&Be){const nt=()=>{D.subTree=Pa(D),Be(ve,D.subTree,D,Z,null)};We?R.type.__asyncLoader().then(()=>!D.isUnmounted&&nt()):nt()}else{const nt=D.subTree=Pa(D);A(null,nt,q,Q,D,Z,ne),R.el=nt.el}if(Le&&rt(Le,Z),!We&&(me=be&&be.onVnodeMounted)){const nt=R;rt(()=>bt(me,Ge,nt),Z)}(R.shapeFlag&256||Ge&&Vi(Ge.vnode)&&Ge.vnode.shapeFlag&256)&&D.a&&rt(D.a,Z),D.isMounted=!0,R=q=Q=null}},se=D.effect=new bl(ae,vt,()=>un(ie),D.scope),ie=D.update=()=>{se.dirty&&se.run()};ie.id=D.uid,Bi(D,!0),ie()},ue=(D,R,q)=>{R.component=D;const Q=D.vnode.props;D.vnode=R,D.next=null,Em(D,R.props,Q,q),zm(D,R.children,q),Wi(),Ms(D),Ki()},le=(D,R,q,Q,Z,ne,de,ae,se=!1)=>{const ie=D&&D.children,me=D?D.shapeFlag:0,ve=R.children,{patchFlag:be,shapeFlag:Ae}=R;if(be>0){if(be&128){Je(ie,ve,q,Q,Z,ne,de,ae,se);return}else if(be&256){De(ie,ve,q,Q,Z,ne,de,ae,se);return}}Ae&8?(me&16&&ce(ie,Z,ne),ve!==ie&&g(q,ve)):me&16?Ae&16?Je(ie,ve,q,Q,Z,ne,de,ae,se):ce(ie,Z,ne,!0):(me&8&&g(q,""),Ae&16&&N(ve,q,Q,Z,ne,de,ae,se))},De=(D,R,q,Q,Z,ne,de,ae,se)=>{D=D||sl,R=R||sl;const ie=D.length,me=R.length,ve=Math.min(ie,me);let be;for(be=0;be<ve;be++){const Ae=R[be]=se?hi(R[be]):kt(R[be]);A(D[be],Ae,q,null,Z,ne,de,ae,se)}ie>me?ce(D,Z,ne,!0,!1,ve):N(R,q,Q,Z,ne,de,ae,se,ve)},Je=(D,R,q,Q,Z,ne,de,ae,se)=>{let ie=0;const me=R.length;let ve=D.length-1,be=me-1;for(;ie<=ve&&ie<=be;){const Ae=D[ie],Le=R[ie]=se?hi(R[ie]):kt(R[ie]);if(Ot(Ae,Le))A(Ae,Le,q,null,Z,ne,de,ae,se);else break;ie++}for(;ie<=ve&&ie<=be;){const Ae=D[ve],Le=R[be]=se?hi(R[be]):kt(R[be]);if(Ot(Ae,Le))A(Ae,Le,q,null,Z,ne,de,ae,se);else break;ve--,be--}if(ie>ve){if(ie<=be){const Ae=be+1,Le=Ae<me?R[Ae].el:Q;for(;ie<=be;)A(null,R[ie]=se?hi(R[ie]):kt(R[ie]),q,Le,Z,ne,de,ae,se),ie++}}else if(ie>be)for(;ie<=ve;)Ue(D[ie],Z,ne,!0),ie++;else{const Ae=ie,Le=ie,Ge=new Map;for(ie=Le;ie<=be;ie++){const At=R[ie]=se?hi(R[ie]):kt(R[ie]);At.key!=null&&Ge.set(At.key,ie)}let We,nt=0;const Ht=be-Le+1;let tl=!1,Bs=0;const Rl=new Array(Ht);for(ie=0;ie<Ht;ie++)Rl[ie]=0;for(ie=Ae;ie<=ve;ie++){const At=D[ie];if(nt>=Ht){Ue(At,Z,ne,!0);continue}let Gt;if(At.key!=null)Gt=Ge.get(At.key);else for(We=Le;We<=be;We++)if(Rl[We-Le]===0&&Ot(At,R[We])){Gt=We;break}Gt===void 0?Ue(At,Z,ne,!0):(Rl[Gt-Le]=ie+1,Gt>=Bs?Bs=Gt:tl=!0,A(At,R[Gt],q,null,Z,ne,de,ae,se),nt++)}const $s=tl?Nm(Rl):sl;for(We=$s.length-1,ie=Ht-1;ie>=0;ie--){const At=Le+ie,Gt=R[At],Ts=At+1<me?R[At+1].el:Q;Rl[ie]===0?A(null,Gt,q,Ts,Z,ne,de,ae,se):tl&&(We<0||ie!==$s[We]?at(Gt,q,Ts,2):We--)}}},at=(D,R,q,Q,Z=null)=>{const{el:ne,type:de,transition:ae,children:se,shapeFlag:ie}=D;if(ie&6){at(D.component.subTree,R,q,Q);return}if(ie&128){D.suspense.move(R,q,Q);return}if(ie&64){de.move(D,R,q,Ne);return}if(de===Ce){o(ne,R,q);for(let ve=0;ve<se.length;ve++)at(se[ve],R,q,Q);o(D.anchor,R,q);return}if(de===Mi){b(D,R,q);return}if(Q!==2&&ie&1&&ae)if(Q===0)ae.beforeEnter(ne),o(ne,R,q),rt(()=>ae.enter(ne),Z);else{const{leave:ve,delayLeave:be,afterLeave:Ae}=ae,Le=()=>o(ne,R,q),Ge=()=>{ve(ne,()=>{Le(),Ae&&Ae()})};be?be(ne,Le,Ge):Ge()}else o(ne,R,q)},Ue=(D,R,q,Q=!1,Z=!1)=>{const{type:ne,props:de,ref:ae,children:se,dynamicChildren:ie,shapeFlag:me,patchFlag:ve,dirs:be}=D;if(ae!=null&&ja(ae,null,q,D,!0),me&256){R.ctx.deactivate(D);return}const Ae=me&1&&be,Le=!Vi(D);let Ge;if(Le&&(Ge=de&&de.onVnodeBeforeUnmount)&&bt(Ge,R,D),me&6)K(D.component,q,Q);else{if(me&128){D.suspense.unmount(q,Q);return}Ae&&jt(D,null,R,"beforeUnmount"),me&64?D.type.remove(D,R,q,Z,Ne,Q):ie&&(ne!==Ce||ve>0&&ve&64)?ce(ie,R,q,!1,!0):(ne===Ce&&ve&384||!Z&&me&16)&&ce(se,R,q),Q&&Xt(D)}(Le&&(Ge=de&&de.onVnodeUnmounted)||Ae)&&rt(()=>{Ge&&bt(Ge,R,D),Ae&&jt(D,null,R,"unmounted")},q)},Xt=D=>{const{type:R,el:q,anchor:Q,transition:Z}=D;if(R===Ce){Pt(q,Q);return}if(R===Mi){C(D);return}const ne=()=>{s(q),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(D.shapeFlag&1&&Z&&!Z.persisted){const{leave:de,delayLeave:ae}=Z,se=()=>de(q,ne);ae?ae(D.el,ne,se):se()}else ne()},Pt=(D,R)=>{let q;for(;D!==R;)q=_(D),s(D),D=q;s(R)},K=(D,R,q)=>{const{bum:Q,scope:Z,update:ne,subTree:de,um:ae}=D;Q&&ul(Q),Z.stop(),ne&&(ne.active=!1,Ue(de,D,R,q)),ae&&rt(ae,R),rt(()=>{D.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&D.asyncDep&&!D.asyncResolved&&D.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},ce=(D,R,q,Q=!1,Z=!1,ne=0)=>{for(let de=ne;de<D.length;de++)Ue(D[de],R,q,Q,Z)},re=D=>D.shapeFlag&6?re(D.component.subTree):D.shapeFlag&128?D.suspense.next():_(D.anchor||D.el);let he=!1;const Me=(D,R,q)=>{D==null?R._vnode&&Ue(R._vnode,null,null,!0):A(R._vnode||null,D,R,null,null,null,q),he||(he=!0,Ms(),qa(),he=!1),R._vnode=D},Ne={p:A,um:Ue,m:at,r:Xt,mt:xe,mc:N,pc:le,pbc:G,n:re,o:e};let ke,Be;return i&&([ke,Be]=i(Ne)),{render:Me,hydrate:ke,createApp:Dm(Me,ke)}}function In({type:e,props:i},a){return a==="svg"&&e==="foreignObject"||a==="mathml"&&e==="annotation-xml"&&i&&i.encoding&&i.encoding.includes("html")?void 0:a}function Bi({effect:e,update:i},a){e.allowRecurse=i.allowRecurse=a}function tc(e,i){return(!e||e&&!e.pendingBranch)&&i&&!i.persisted}function ns(e,i,a=!1){const o=e.children,s=i.children;if(ge(o)&&ge(s))for(let c=0;c<o.length;c++){const d=o[c];let f=s[c];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=s[c]=hi(s[c]),f.el=d.el),a||ns(d,f)),f.type===Gi&&(f.el=d.el)}}function Nm(e){const i=e.slice(),a=[0];let o,s,c,d,f;const u=e.length;for(o=0;o<u;o++){const p=e[o];if(p!==0){if(s=a[a.length-1],e[s]<p){i[o]=s,a.push(o);continue}for(c=0,d=a.length-1;c<d;)f=c+d>>1,e[a[f]]<p?c=f+1:d=f;p<e[a[c]]&&(c>0&&(i[o]=a[c-1]),a[c]=o)}}for(c=a.length,d=a[c-1];c-- >0;)a[c]=d,d=i[d];return a}function ic(e){const i=e.subTree.component;if(i)return i.asyncDep&&!i.asyncResolved?i:ic(i)}const Hm=e=>e.__isTeleport,Jl=e=>e&&(e.disabled||e.disabled===""),Xs=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Qs=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,oo=(e,i)=>{const a=e&&e.to;return Xe(a)?i?i(a):null:a},Om={name:"Teleport",__isTeleport:!0,process(e,i,a,o,s,c,d,f,u,p){const{mc:g,pc:m,pbc:_,o:{insert:w,querySelector:S,createText:A,createComment:T}}=p,L=Jl(i.props);let{shapeFlag:h,children:b,dynamicChildren:C}=i;if(e==null){const $=i.el=A(""),E=i.anchor=A("");w($,a,o),w(E,a,o);const V=i.target=oo(i.props,S),N=i.targetAnchor=A("");V&&(w(N,V),d==="svg"||Xs(V)?d="svg":(d==="mathml"||Qs(V))&&(d="mathml"));const z=(G,X)=>{h&16&&g(b,G,X,s,c,d,f,u)};L?z(a,E):V&&z(V,N)}else{i.el=e.el;const $=i.anchor=e.anchor,E=i.target=e.target,V=i.targetAnchor=e.targetAnchor,N=Jl(e.props),z=N?a:E,G=N?$:V;if(d==="svg"||Xs(E)?d="svg":(d==="mathml"||Qs(E))&&(d="mathml"),C?(_(e.dynamicChildren,C,z,s,c,d,f),ns(e,i,!0)):u||m(e,i,z,G,s,c,d,f,!1),L)N?i.props&&e.props&&i.props.to!==e.props.to&&(i.props.to=e.props.to):Ta(i,a,$,p,1);else if((i.props&&i.props.to)!==(e.props&&e.props.to)){const X=i.target=oo(i.props,S);X&&Ta(i,X,null,p,0)}else N&&Ta(i,E,V,p,1)}lc(i)},remove(e,i,a,o,{um:s,o:{remove:c}},d){const{shapeFlag:f,children:u,anchor:p,targetAnchor:g,target:m,props:_}=e;if(m&&c(g),d&&c(p),f&16){const w=d||!Jl(_);for(let S=0;S<u.length;S++){const A=u[S];s(A,i,a,w,!!A.dynamicChildren)}}},move:Ta,hydrate:qm};function Ta(e,i,a,{o:{insert:o},m:s},c=2){c===0&&o(e.targetAnchor,i,a);const{el:d,anchor:f,shapeFlag:u,children:p,props:g}=e,m=c===2;if(m&&o(d,i,a),(!m||Jl(g))&&u&16)for(let _=0;_<p.length;_++)s(p[_],i,a,2);m&&o(f,i,a)}function qm(e,i,a,o,s,c,{o:{nextSibling:d,parentNode:f,querySelector:u}},p){const g=i.target=oo(i.props,u);if(g){const m=g._lpa||g.firstChild;if(i.shapeFlag&16)if(Jl(i.props))i.anchor=p(d(e),i,f(e),a,o,s,c),i.targetAnchor=m;else{i.anchor=d(e);let _=m;for(;_;)if(_=d(_),_&&_.nodeType===8&&_.data==="teleport anchor"){i.targetAnchor=_,g._lpa=i.targetAnchor&&d(i.targetAnchor);break}p(m,i,g,a,o,s,c)}lc(i)}return i.anchor&&d(i.anchor)}const _n=Om;function lc(e){const i=e.ctx;if(i&&i.ut){let a=e.children[0].el;for(;a&&a!==e.targetAnchor;)a.nodeType===1&&a.setAttribute("data-v-owner",i.uid),a=a.nextSibling;i.ut()}}const Ce=Symbol.for("v-fgt"),Gi=Symbol.for("v-txt"),mt=Symbol.for("v-cmt"),Mi=Symbol.for("v-stc"),Wl=[];let St=null;function y(e=!1){Wl.push(St=e?null:[])}function ac(){Wl.pop(),St=Wl[Wl.length-1]||null}let ji=1;function so(e){ji+=e}function nc(e){return e.dynamicChildren=ji>0?St||sl:null,ac(),ji>0&&St&&St.push(e),e}function ye(e,i,a,o,s,c){return nc(k(e,i,a,o,s,c,!0))}function x(e,i,a,o,s){return nc(t(e,i,a,o,s,!0))}function Ct(e){return e?e.__v_isVNode===!0:!1}function Ot(e,i){return e.type===i.type&&e.key===i.key}function Gm(e){}const bn="__vInternal",oc=({key:e})=>e??null,za=({ref:e,ref_key:i,ref_for:a})=>(typeof e=="number"&&(e=""+e),e!=null?Xe(e)||ct(e)||we(e)?{i:tt,r:e,k:i,f:!!a}:e:null);function k(e,i=null,a=null,o=0,s=null,c=e===Ce?0:1,d=!1,f=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:i,key:i&&oc(i),ref:i&&za(i),scopeId:dn,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:c,patchFlag:o,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:tt};return f?(ss(u,a),c&128&&e.normalize(u)):a&&(u.shapeFlag|=Xe(a)?8:16),ji>0&&!d&&St&&(u.patchFlag>0||c&6)&&u.patchFlag!==32&&St.push(u),u}const t=jm;function jm(e,i=null,a=null,o=0,s=null,c=!1){if((!e||e===Au)&&(e=mt),Ct(e)){const f=Wt(e,i,!0);return a&&ss(f,a),ji>0&&!c&&St&&(f.shapeFlag&6?St[St.indexOf(e)]=f:St.push(f)),f.patchFlag|=-2,f}if(Zm(e)&&(e=e.__vccOpts),i){i=sc(i);let{class:f,style:u}=i;f&&!Xe(f)&&(i.class=fa(f)),je(u)&&(Oo(u)&&!ge(u)&&(u=Ke({},u)),i.style=kl(u))}const d=Xe(e)?1:ku(e)?128:Hm(e)?64:je(e)?4:we(e)?2:0;return k(e,i,a,o,s,d,c,!0)}function sc(e){return e?Oo(e)||bn in e?Ke({},e):e:null}function Wt(e,i,a=!1){const{props:o,ref:s,patchFlag:c,children:d}=e,f=i?Zi(o||{},i):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&oc(f),ref:i&&i.ref?a&&s?ge(s)?s.concat(za(i)):[s,za(i)]:za(i):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:d,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:i&&e.type!==Ce?c===-1?16:c|16:c,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Wt(e.ssContent),ssFallback:e.ssFallback&&Wt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function n(e=" ",i=0){return t(Gi,null,e,i)}function Um(e,i){const a=t(Mi,null,e);return a.staticCount=i,a}function os(e="",i=!1){return i?(y(),x(mt,null,e)):t(mt,null,e)}function kt(e){return e==null||typeof e=="boolean"?t(mt):ge(e)?t(Ce,null,e.slice()):typeof e=="object"?hi(e):t(Gi,null,String(e))}function hi(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Wt(e)}function ss(e,i){let a=0;const{shapeFlag:o}=e;if(i==null)i=null;else if(ge(i))a=16;else if(typeof i=="object")if(o&65){const s=i.default;s&&(s._c&&(s._d=!1),ss(e,s()),s._c&&(s._d=!0));return}else{a=32;const s=i._;!s&&!(bn in i)?i._ctx=tt:s===3&&tt&&(tt.slots._===1?i._=1:(i._=2,e.patchFlag|=1024))}else we(i)?(i={default:i,_ctx:tt},a=32):(i=String(i),o&64?(a=16,i=[n(i)]):a=8);e.children=i,e.shapeFlag|=a}function Zi(...e){const i={};for(let a=0;a<e.length;a++){const o=e[a];for(const s in o)if(s==="class")i.class!==o.class&&(i.class=fa([i.class,o.class]));else if(s==="style")i.style=kl([i.style,o.style]);else if(pa(s)){const c=i[s],d=o[s];d&&c!==d&&!(ge(c)&&c.includes(d))&&(i[s]=c?[].concat(c,d):d)}else s!==""&&(i[s]=o[s])}return i}function bt(e,i,a,o=null){Lt(e,i,7,[a,o])}const Ym=Uu();let Jm=0;function rc(e,i,a){const o=e.type,s=(i?i.appContext:e.appContext)||Ym,c={uid:Jm++,vnode:e,type:o,parent:i,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new zo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:i?i.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ju(o,s),emitsOptions:yu(o,s),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:o.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return c.ctx={_:c},c.root=i?i.root:c,c.emit=qp.bind(null,c),e.ce&&e.ce(c),c}let lt=null;const Kt=()=>lt||tt;let Ua,ro;{const e=Ur(),i=(a,o)=>{let s;return(s=e[a])||(s=e[a]=[]),s.push(o),c=>{s.length>1?s.forEach(d=>d(c)):s[0](c)}};Ua=i("__VUE_INSTANCE_SETTERS__",a=>lt=a),ro=i("__VUE_SSR_SETTERS__",a=>_a=a)}const Ui=e=>{const i=lt;return Ua(e),e.scope.on(),()=>{e.scope.off(),Ua(i)}},uo=()=>{lt&&lt.scope.off(),Ua(null)};function uc(e){return e.vnode.shapeFlag&4}let _a=!1;function cc(e,i=!1){i&&ro(i);const{props:a,children:o}=e.vnode,s=uc(e);Im(e,a,s,i),Pm(e,o);const c=s?Wm(e,i):void 0;return i&&ro(!1),c}function Wm(e,i){const a=e.type;e.accessCache=Object.create(null),e.proxy=qo(new Proxy(e.ctx,io));const{setup:o}=a;if(o){const s=e.setupContext=o.length>1?pc(e):null,c=Ui(e);Wi();const d=li(o,e,0,[e.props,s]);if(Ki(),c(),Ro(d)){if(d.then(uo,uo),i)return d.then(f=>{co(e,f,i)}).catch(f=>{Xi(f,e,0)});e.asyncDep=d}else co(e,d,i)}else dc(e,i)}function co(e,i,a){we(i)?e.type.__ssrInlineRender?e.ssrRender=i:e.render=i:je(i)&&(e.setupState=Uo(i)),dc(e,a)}let Ya,po;function Km(e){Ya=e,po=i=>{i.render._rc&&(i.withProxy=new Proxy(i.ctx,dm))}}const Xm=()=>!Ya;function dc(e,i,a){const o=e.type;if(!e.render){if(!i&&Ya&&!o.render){const s=o.template||ls(e).template;if(s){const{isCustomElement:c,compilerOptions:d}=e.appContext.config,{delimiters:f,compilerOptions:u}=o,p=Ke(Ke({isCustomElement:c,delimiters:f},d),u);o.render=Ya(s,p)}}e.render=o.render||vt,po&&po(e)}{const s=Ui(e);Wi();try{Am(e)}finally{Ki(),s()}}}function Qm(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(i,a){return wt(e,"get","$attrs"),i[a]}}))}function pc(e){const i=a=>{e.exposed=a||{}};return{get attrs(){return Qm(e)},slots:e.slots,emit:e.emit,expose:i}}function vn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Uo(qo(e.exposed)),{get(i,a){if(a in i)return i[a];if(a in Yl)return Yl[a](e)},has(i,a){return a in i||a in Yl}}))}function mo(e,i=!0){return we(e)?e.displayName||e.name:e.name||i&&e.__name}function Zm(e){return we(e)&&"__vccOpts"in e}const M=(e,i)=>xp(e,i,_a);function ef(e,i,a=qe){const o=Kt(),s=_t(i),c=$t(i),d=gu((u,p)=>{let g;return Lu(()=>{const m=e[i];qt(g,m)&&(g=m,p())}),{get(){return u(),a.get?a.get(g):g},set(m){const _=o.vnode.props;!(_&&(i in _||s in _||c in _)&&(`onUpdate:${i}`in _||`onUpdate:${s}`in _||`onUpdate:${c}`in _))&&qt(m,g)&&(g=m,p()),o.emit(`update:${i}`,a.set?a.set(m):m)}}}),f=i==="modelValue"?"modelModifiers":`${i}Modifiers`;return d[Symbol.iterator]=()=>{let u=0;return{next(){return u<2?{value:u++?e[f]||{}:d,done:!1}:{done:!0}}}},d}function ee(e,i,a){const o=arguments.length;return o===2?je(i)&&!ge(i)?Ct(i)?t(e,null,[i]):t(e,i):t(e,null,i):(o>3?a=Array.prototype.slice.call(arguments,2):o===3&&Ct(a)&&(a=[a]),t(e,i,a))}function tf(){}function lf(e,i,a,o){const s=a[o];if(s&&mc(s,e))return s;const c=i();return c.memo=e.slice(),a[o]=c}function mc(e,i){const a=e.memo;if(a.length!=i.length)return!1;for(let o=0;o<a.length;o++)if(qt(a[o],i[o]))return!1;return ji>0&&St&&St.push(e),!0}const fc="3.4.15",af=vt,nf=Vp,of=al,sf=Su,rf={createComponentInstance:rc,setupComponent:cc,renderComponentRoot:Pa,setCurrentRenderingInstance:na,isVNode:Ct,normalizeVNode:kt},uf=rf,cf=null,df=null,pf=null;/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const mf="http://www.w3.org/2000/svg",ff="http://www.w3.org/1998/Math/MathML",_i=typeof document<"u"?document:null,Zs=_i&&_i.createElement("template"),gf={insert:(e,i,a)=>{i.insertBefore(e,a||null)},remove:e=>{const i=e.parentNode;i&&i.removeChild(e)},createElement:(e,i,a,o)=>{const s=i==="svg"?_i.createElementNS(mf,e):i==="mathml"?_i.createElementNS(ff,e):_i.createElement(e,a?{is:a}:void 0);return e==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:e=>_i.createTextNode(e),createComment:e=>_i.createComment(e),setText:(e,i)=>{e.nodeValue=i},setElementText:(e,i)=>{e.textContent=i},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>_i.querySelector(e),setScopeId(e,i){e.setAttribute(i,"")},insertStaticContent(e,i,a,o,s,c){const d=a?a.previousSibling:i.lastChild;if(s&&(s===c||s.nextSibling))for(;i.insertBefore(s.cloneNode(!0),a),!(s===c||!(s=s.nextSibling)););else{Zs.innerHTML=o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e;const f=Zs.content;if(o==="svg"||o==="mathml"){const u=f.firstChild;for(;u.firstChild;)f.appendChild(u.firstChild);f.removeChild(u)}i.insertBefore(f,a)}return[d?d.nextSibling:i.firstChild,a?a.previousSibling:i.lastChild]}},di="transition",Pl="animation",Sl=Symbol("_vtc"),Sn=(e,{slots:i})=>ee(Eu,hc(e),i);Sn.displayName="Transition";const gc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},hf=Sn.props=Ke({},es,gc),$i=(e,i=[])=>{ge(e)?e.forEach(a=>a(...i)):e&&e(...i)},er=e=>e?ge(e)?e.some(i=>i.length>1):e.length>1:!1;function hc(e){const i={};for(const Y in e)Y in gc||(i[Y]=e[Y]);if(e.css===!1)return i;const{name:a="v",type:o,duration:s,enterFromClass:c=`${a}-enter-from`,enterActiveClass:d=`${a}-enter-active`,enterToClass:f=`${a}-enter-to`,appearFromClass:u=c,appearActiveClass:p=d,appearToClass:g=f,leaveFromClass:m=`${a}-leave-from`,leaveActiveClass:_=`${a}-leave-active`,leaveToClass:w=`${a}-leave-to`}=e,S=_f(s),A=S&&S[0],T=S&&S[1],{onBeforeEnter:L,onEnter:h,onEnterCancelled:b,onLeave:C,onLeaveCancelled:$,onBeforeAppear:E=L,onAppear:V=h,onAppearCancelled:N=b}=i,z=(Y,pe,xe)=>{mi(Y,pe?g:f),mi(Y,pe?p:d),xe&&xe()},G=(Y,pe)=>{Y._isLeaving=!1,mi(Y,m),mi(Y,w),mi(Y,_),pe&&pe()},X=Y=>(pe,xe)=>{const U=Y?V:h,W=()=>z(pe,Y,xe);$i(U,[pe,W]),tr(()=>{mi(pe,Y?u:c),Zt(pe,Y?g:f),er(U)||ir(pe,o,A,W)})};return Ke(i,{onBeforeEnter(Y){$i(L,[Y]),Zt(Y,c),Zt(Y,d)},onBeforeAppear(Y){$i(E,[Y]),Zt(Y,u),Zt(Y,p)},onEnter:X(!1),onAppear:X(!0),onLeave(Y,pe){Y._isLeaving=!0;const xe=()=>G(Y,pe);Zt(Y,m),bc(),Zt(Y,_),tr(()=>{Y._isLeaving&&(mi(Y,m),Zt(Y,w),er(C)||ir(Y,o,T,xe))}),$i(C,[Y,xe])},onEnterCancelled(Y){z(Y,!1),$i(b,[Y])},onAppearCancelled(Y){z(Y,!0),$i(N,[Y])},onLeaveCancelled(Y){G(Y),$i($,[Y])}})}function _f(e){if(e==null)return null;if(je(e))return[En(e.enter),En(e.leave)];{const i=En(e);return[i,i]}}function En(e){return Na(e)}function Zt(e,i){i.split(/\s+/).forEach(a=>a&&e.classList.add(a)),(e[Sl]||(e[Sl]=new Set)).add(i)}function mi(e,i){i.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const a=e[Sl];a&&(a.delete(i),a.size||(e[Sl]=void 0))}function tr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let bf=0;function ir(e,i,a,o){const s=e._endId=++bf,c=()=>{s===e._endId&&o()};if(a)return setTimeout(c,a);const{type:d,timeout:f,propCount:u}=_c(e,i);if(!d)return o();const p=d+"end";let g=0;const m=()=>{e.removeEventListener(p,_),c()},_=w=>{w.target===e&&++g>=u&&m()};setTimeout(()=>{g<u&&m()},f+1),e.addEventListener(p,_)}function _c(e,i){const a=window.getComputedStyle(e),o=S=>(a[S]||"").split(", "),s=o(`${di}Delay`),c=o(`${di}Duration`),d=lr(s,c),f=o(`${Pl}Delay`),u=o(`${Pl}Duration`),p=lr(f,u);let g=null,m=0,_=0;i===di?d>0&&(g=di,m=d,_=c.length):i===Pl?p>0&&(g=Pl,m=p,_=u.length):(m=Math.max(d,p),g=m>0?d>p?di:Pl:null,_=g?g===di?c.length:u.length:0);const w=g===di&&/\b(transform|all)(,|$)/.test(o(`${di}Property`).toString());return{type:g,timeout:m,propCount:_,hasTransform:w}}function lr(e,i){for(;e.length<i.length;)e=e.concat(e);return Math.max(...i.map((a,o)=>ar(a)+ar(e[o])))}function ar(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function bc(){return document.body.offsetHeight}function vf(e,i,a){const o=e[Sl];o&&(i=(i?[i,...o]:[...o]).join(" ")),i==null?e.removeAttribute("class"):a?e.setAttribute("class",i):e.className=i}const rs=Symbol("_vod"),vc={beforeMount(e,{value:i},{transition:a}){e[rs]=e.style.display==="none"?"":e.style.display,a&&i?a.beforeEnter(e):zl(e,i)},mounted(e,{value:i},{transition:a}){a&&i&&a.enter(e)},updated(e,{value:i,oldValue:a},{transition:o}){!i!=!a&&(o?i?(o.beforeEnter(e),zl(e,!0),o.enter(e)):o.leave(e,()=>{zl(e,!1)}):zl(e,i))},beforeUnmount(e,{value:i}){zl(e,i)}};function zl(e,i){e.style.display=i?e[rs]:"none"}function Sf(){vc.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const Sc=Symbol("");function yf(e){const i=Kt();if(!i)return;const a=i.ut=(s=e(i.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${i.uid}"]`)).forEach(c=>go(c,s))},o=()=>{const s=e(i.proxy);fo(i.subTree,s),a(s)};Du(o),Ai(()=>{const s=new MutationObserver(o);s.observe(i.subTree.el.parentNode,{childList:!0}),Qi(()=>s.disconnect())})}function fo(e,i){if(e.shapeFlag&128){const a=e.suspense;e=a.activeBranch,a.pendingBranch&&!a.isHydrating&&a.effects.push(()=>{fo(a.activeBranch,i)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)go(e.el,i);else if(e.type===Ce)e.children.forEach(a=>fo(a,i));else if(e.type===Mi){let{el:a,anchor:o}=e;for(;a&&(go(a,i),a!==o);)a=a.nextSibling}}function go(e,i){if(e.nodeType===1){const a=e.style;let o="";for(const s in i)a.setProperty(`--${s}`,i[s]),o+=`--${s}: ${i[s]};`;a[Sc]=o}}function wf(e,i,a){const o=e.style,s=o.display,c=Xe(a);if(a&&!c){if(i&&!Xe(i))for(const d in i)a[d]==null&&ho(o,d,"");for(const d in a)ho(o,d,a[d])}else if(c){if(i!==a){const d=o[Sc];d&&(a+=";"+d),o.cssText=a}}else i&&e.removeAttribute("style");rs in e&&(o.display=s)}const nr=/\s*!important$/;function ho(e,i,a){if(ge(a))a.forEach(o=>ho(e,i,o));else if(a==null&&(a=""),i.startsWith("--"))e.setProperty(i,a);else{const o=Cf(e,i);nr.test(a)?e.setProperty($t(o),a.replace(nr,""),"important"):e[o]=a}}const or=["Webkit","Moz","ms"],Rn={};function Cf(e,i){const a=Rn[i];if(a)return a;let o=_t(i);if(o!=="filter"&&o in e)return Rn[i]=o;o=ma(o);for(let s=0;s<or.length;s++){const c=or[s]+o;if(c in e)return Rn[i]=c}return i}const sr="http://www.w3.org/1999/xlink";function Af(e,i,a,o,s){if(o&&i.startsWith("xlink:"))a==null?e.removeAttributeNS(sr,i.slice(6,i.length)):e.setAttributeNS(sr,i,a);else{const c=Zd(i);a==null||c&&!Yr(a)?e.removeAttribute(i):e.setAttribute(i,c?"":a)}}function xf(e,i,a,o,s,c,d){if(i==="innerHTML"||i==="textContent"){o&&d(o,s,c),e[i]=a??"";return}const f=e.tagName;if(i==="value"&&f!=="PROGRESS"&&!f.includes("-")){e._value=a;const p=f==="OPTION"?e.getAttribute("value"):e.value,g=a??"";p!==g&&(e.value=g),a==null&&e.removeAttribute(i);return}let u=!1;if(a===""||a==null){const p=typeof e[i];p==="boolean"?a=Yr(a):a==null&&p==="string"?(a="",u=!0):p==="number"&&(a=0,u=!0)}try{e[i]=a}catch{}u&&e.removeAttribute(i)}function ti(e,i,a,o){e.addEventListener(i,a,o)}function kf(e,i,a,o){e.removeEventListener(i,a,o)}const rr=Symbol("_vei");function Bf(e,i,a,o,s=null){const c=e[rr]||(e[rr]={}),d=c[i];if(o&&d)d.value=o;else{const[f,u]=$f(i);if(o){const p=c[i]=Lf(o,s);ti(e,f,p,u)}else d&&(kf(e,f,d,u),c[i]=void 0)}}const ur=/(?:Once|Passive|Capture)$/;function $f(e){let i;if(ur.test(e)){i={};let o;for(;o=e.match(ur);)e=e.slice(0,e.length-o[0].length),i[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$t(e.slice(2)),i]}let Pn=0;const Tf=Promise.resolve(),Df=()=>Pn||(Tf.then(()=>Pn=0),Pn=Date.now());function Lf(e,i){const a=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=a.attached)return;Lt(If(o,a.value),i,5,[o])};return a.value=e,a.attached=Df(),a}function If(e,i){if(ge(i)){const a=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{a.call(e),e._stopped=!0},i.map(o=>s=>!s._stopped&&o&&o(s))}else return i}const cr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ef=(e,i,a,o,s,c,d,f,u)=>{const p=s==="svg";i==="class"?vf(e,o,p):i==="style"?wf(e,a,o):pa(i)?Io(i)||Bf(e,i,a,o,d):(i[0]==="."?(i=i.slice(1),!0):i[0]==="^"?(i=i.slice(1),!1):Rf(e,i,o,p))?xf(e,i,o,c,d,f,u):(i==="true-value"?e._trueValue=o:i==="false-value"&&(e._falseValue=o),Af(e,i,o,p))};function Rf(e,i,a,o){if(o)return!!(i==="innerHTML"||i==="textContent"||i in e&&cr(i)&&we(a));if(i==="spellcheck"||i==="draggable"||i==="translate"||i==="form"||i==="list"&&e.tagName==="INPUT"||i==="type"&&e.tagName==="TEXTAREA")return!1;if(i==="width"||i==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return cr(i)&&Xe(a)?!1:i in e}/*! #__NO_SIDE_EFFECTS__ */function yc(e,i){const a=F(e);class o extends yn{constructor(c){super(a,c,i)}}return o.def=a,o}/*! #__NO_SIDE_EFFECTS__ */const Pf=e=>yc(e,Ec),zf=typeof HTMLElement<"u"?HTMLElement:class{};class yn extends zf{constructor(i,a={},o){super(),this._def=i,this._props=a,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&o?o(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),Bl(()=>{this._connected||(Ka(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let o=0;o<this.attributes.length;o++)this._setAttr(this.attributes[o].name);this._ob=new MutationObserver(o=>{for(const s of o)this._setAttr(s.attributeName)}),this._ob.observe(this,{attributes:!0});const i=(o,s=!1)=>{const{props:c,styles:d}=o;let f;if(c&&!ge(c))for(const u in c){const p=c[u];(p===Number||p&&p.type===Number)&&(u in this._props&&(this._props[u]=Na(this._props[u])),(f||(f=Object.create(null)))[_t(u)]=!0)}this._numberProps=f,s&&this._resolveProps(o),this._applyStyles(d),this._update()},a=this._def.__asyncLoader;a?a().then(o=>i(o,!0)):i(this._def)}_resolveProps(i){const{props:a}=i,o=ge(a)?a:Object.keys(a||{});for(const s of Object.keys(this))s[0]!=="_"&&o.includes(s)&&this._setProp(s,this[s],!0,!1);for(const s of o.map(_t))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(c){this._setProp(s,c)}})}_setAttr(i){let a=this.getAttribute(i);const o=_t(i);this._numberProps&&this._numberProps[o]&&(a=Na(a)),this._setProp(o,a,!1)}_getProp(i){return this._props[i]}_setProp(i,a,o=!0,s=!0){a!==this._props[i]&&(this._props[i]=a,s&&this._instance&&this._update(),o&&(a===!0?this.setAttribute($t(i),""):typeof a=="string"||typeof a=="number"?this.setAttribute($t(i),a+""):a||this.removeAttribute($t(i))))}_update(){Ka(this._createVNode(),this.shadowRoot)}_createVNode(){const i=t(this._def,Ke({},this._props));return this._instance||(i.ce=a=>{this._instance=a,a.isCE=!0;const o=(c,d)=>{this.dispatchEvent(new CustomEvent(c,{detail:d}))};a.emit=(c,...d)=>{o(c,d),$t(c)!==c&&o($t(c),d)};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof yn){a.parent=s._instance,a.provides=s._instance.provides;break}}),i}_applyStyles(i){i&&i.forEach(a=>{const o=document.createElement("style");o.textContent=a,this.shadowRoot.appendChild(o)})}}function Ff(e="$style"){{const i=Kt();if(!i)return qe;const a=i.type.__cssModules;if(!a)return qe;const o=a[e];return o||qe}}const wc=new WeakMap,Cc=new WeakMap,Ja=Symbol("_moveCb"),dr=Symbol("_enterCb"),Ac={name:"TransitionGroup",props:Ke({},hf,{tag:String,moveClass:String}),setup(e,{slots:i}){const a=Kt(),o=Zo();let s,c;return gn(()=>{if(!s.length)return;const d=e.moveClass||`${e.name||"v"}-move`;if(!Of(s[0].el,a.vnode.el,d))return;s.forEach(Mf),s.forEach(Nf);const f=s.filter(Hf);bc(),f.forEach(u=>{const p=u.el,g=p.style;Zt(p,d),g.transform=g.webkitTransform=g.transitionDuration="";const m=p[Ja]=_=>{_&&_.target!==p||(!_||/transform$/.test(_.propertyName))&&(p.removeEventListener("transitionend",m),p[Ja]=null,mi(p,d))};p.addEventListener("transitionend",m)})}),()=>{const d=Ee(e),f=hc(d);let u=d.tag||Ce;s=c,c=i.default?mn(i.default()):[];for(let p=0;p<c.length;p++){const g=c[p];g.key!=null&&Oi(g,vl(g,f,o,a))}if(s)for(let p=0;p<s.length;p++){const g=s[p];Oi(g,vl(g,f,o,a)),wc.set(g,g.el.getBoundingClientRect())}return t(u,null,c)}}},Vf=e=>delete e.mode;Ac.props;const xc=Ac;function Mf(e){const i=e.el;i[Ja]&&i[Ja](),i[dr]&&i[dr]()}function Nf(e){Cc.set(e,e.el.getBoundingClientRect())}function Hf(e){const i=wc.get(e),a=Cc.get(e),o=i.left-a.left,s=i.top-a.top;if(o||s){const c=e.el.style;return c.transform=c.webkitTransform=`translate(${o}px,${s}px)`,c.transitionDuration="0s",e}}function Of(e,i,a){const o=e.cloneNode(),s=e[Sl];s&&s.forEach(f=>{f.split(/\s+/).forEach(u=>u&&o.classList.remove(u))}),a.split(/\s+/).forEach(f=>f&&o.classList.add(f)),o.style.display="none";const c=i.nodeType===1?i:i.parentNode;c.appendChild(o);const{hasTransform:d}=_c(o);return c.removeChild(o),d}const Ci=e=>{const i=e.props["onUpdate:modelValue"]||!1;return ge(i)?a=>ul(i,a):i};function qf(e){e.target.composing=!0}function pr(e){const i=e.target;i.composing&&(i.composing=!1,i.dispatchEvent(new Event("input")))}const Mt=Symbol("_assign"),Wa={created(e,{modifiers:{lazy:i,trim:a,number:o}},s){e[Mt]=Ci(s);const c=o||s.props&&s.props.type==="number";ti(e,i?"change":"input",d=>{if(d.target.composing)return;let f=e.value;a&&(f=f.trim()),c&&(f=ea(f)),e[Mt](f)}),a&&ti(e,"change",()=>{e.value=e.value.trim()}),i||(ti(e,"compositionstart",qf),ti(e,"compositionend",pr),ti(e,"change",pr))},mounted(e,{value:i}){e.value=i??""},beforeUpdate(e,{value:i,modifiers:{lazy:a,trim:o,number:s}},c){if(e[Mt]=Ci(c),e.composing)return;const d=s||e.type==="number"?ea(e.value):e.value,f=i??"";d!==f&&(document.activeElement===e&&e.type!=="range"&&(a||o&&e.value.trim()===f)||(e.value=f))}},us={deep:!0,created(e,i,a){e[Mt]=Ci(a),ti(e,"change",()=>{const o=e._modelValue,s=yl(e),c=e.checked,d=e[Mt];if(ge(o)){const f=nn(o,s),u=f!==-1;if(c&&!u)d(o.concat(s));else if(!c&&u){const p=[...o];p.splice(f,1),d(p)}}else if(Ji(o)){const f=new Set(o);c?f.add(s):f.delete(s),d(f)}else d(Bc(e,c))})},mounted:mr,beforeUpdate(e,i,a){e[Mt]=Ci(a),mr(e,i,a)}};function mr(e,{value:i,oldValue:a},o){e._modelValue=i,ge(i)?e.checked=nn(i,o.props.value)>-1:Ji(i)?e.checked=i.has(o.props.value):i!==a&&(e.checked=ai(i,Bc(e,!0)))}const cs={created(e,{value:i},a){e.checked=ai(i,a.props.value),e[Mt]=Ci(a),ti(e,"change",()=>{e[Mt](yl(e))})},beforeUpdate(e,{value:i,oldValue:a},o){e[Mt]=Ci(o),i!==a&&(e.checked=ai(i,o.props.value))}},kc={deep:!0,created(e,{value:i,modifiers:{number:a}},o){const s=Ji(i);ti(e,"change",()=>{const c=Array.prototype.filter.call(e.options,d=>d.selected).map(d=>a?ea(yl(d)):yl(d));e[Mt](e.multiple?s?new Set(c):c:c[0]),e._assigning=!0,Bl(()=>{e._assigning=!1})}),e[Mt]=Ci(o)},mounted(e,{value:i,oldValue:a,modifiers:{number:o}}){fr(e,i,a,o)},beforeUpdate(e,i,a){e[Mt]=Ci(a)},updated(e,{value:i,oldValue:a,modifiers:{number:o}}){e._assigning||fr(e,i,a,o)}};function fr(e,i,a,o){const s=e.multiple,c=ge(i);if(!(s&&!c&&!Ji(i))&&!(c&&ai(i,a))){for(let d=0,f=e.options.length;d<f;d++){const u=e.options[d],p=yl(u);if(s)if(c){const g=typeof p;g==="string"||g==="number"?u.selected=i.includes(o?ea(p):p):u.selected=nn(i,p)>-1}else u.selected=i.has(p);else if(ai(yl(u),i)){e.selectedIndex!==d&&(e.selectedIndex=d);return}}!s&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function yl(e){return"_value"in e?e._value:e.value}function Bc(e,i){const a=i?"_trueValue":"_falseValue";return a in e?e[a]:i}const $c={created(e,i,a){Da(e,i,a,null,"created")},mounted(e,i,a){Da(e,i,a,null,"mounted")},beforeUpdate(e,i,a,o){Da(e,i,a,o,"beforeUpdate")},updated(e,i,a,o){Da(e,i,a,o,"updated")}};function Tc(e,i){switch(e){case"SELECT":return kc;case"TEXTAREA":return Wa;default:switch(i){case"checkbox":return us;case"radio":return cs;default:return Wa}}}function Da(e,i,a,o,s){const d=Tc(e.tagName,a.props&&a.props.type)[s];d&&d(e,i,a,o)}function Gf(){Wa.getSSRProps=({value:e})=>({value:e}),cs.getSSRProps=({value:e},i)=>{if(i.props&&ai(i.props.value,e))return{checked:!0}},us.getSSRProps=({value:e},i)=>{if(ge(e)){if(i.props&&nn(e,i.props.value)>-1)return{checked:!0}}else if(Ji(e)){if(i.props&&e.has(i.props.value))return{checked:!0}}else if(e)return{checked:!0}},$c.getSSRProps=(e,i)=>{if(typeof i.type!="string")return;const a=Tc(i.type.toUpperCase(),i.props&&i.props.type);if(a.getSSRProps)return a.getSSRProps(e,i)}}const jf=["ctrl","shift","alt","meta"],Uf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,i)=>jf.some(a=>e[`${a}Key`]&&!i.includes(a))},It=(e,i)=>{const a=e._withMods||(e._withMods={}),o=i.join(".");return a[o]||(a[o]=(s,...c)=>{for(let d=0;d<i.length;d++){const f=Uf[i[d]];if(f&&f(s,i))return}return e(s,...c)})},Yf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Jf=(e,i)=>{const a=e._withKeys||(e._withKeys={}),o=i.join(".");return a[o]||(a[o]=s=>{if(!("key"in s))return;const c=$t(s.key);if(i.some(d=>d===c||Yf[d]===c))return e(s)})},Dc=Ke({patchProp:Ef},gf);let Kl,gr=!1;function Lc(){return Kl||(Kl=Qu(Dc))}function Ic(){return Kl=gr?Kl:Zu(Dc),gr=!0,Kl}const Ka=(...e)=>{Lc().render(...e)},Ec=(...e)=>{Ic().hydrate(...e)},Rc=(...e)=>{const i=Lc().createApp(...e),{mount:a}=i;return i.mount=o=>{const s=zc(o);if(!s)return;const c=i._component;!we(c)&&!c.render&&!c.template&&(c.template=s.innerHTML),s.innerHTML="";const d=a(s,!1,Pc(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),d},i},Wf=(...e)=>{const i=Ic().createApp(...e),{mount:a}=i;return i.mount=o=>{const s=zc(o);if(s)return a(s,!0,Pc(s))},i};function Pc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function zc(e){return Xe(e)?document.querySelector(e):e}let hr=!1;const Kf=()=>{hr||(hr=!0,Gf(),Sf())};/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Xf=()=>{},Qf=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:Eu,BaseTransitionPropsValidators:es,Comment:mt,DeprecationTypes:pf,EffectScope:zo,ErrorCodes:Fp,ErrorTypeStrings:nf,Fragment:Ce,KeepAlive:sm,ReactiveEffect:bl,Static:Mi,Suspense:Xp,Teleport:_n,Text:Gi,TrackOpTypes:Rp,Transition:Sn,TransitionGroup:xc,TriggerOpTypes:Pp,VueElement:yn,assertNumber:zp,callWithAsyncErrorHandling:Lt,callWithErrorHandling:li,camelize:_t,capitalize:ma,cloneVNode:Wt,compatUtils:df,compile:Xf,computed:M,createApp:Rc,createBlock:x,createCommentVNode:os,createElementBlock:ye,createElementVNode:k,createHydrationRenderer:Zu,createPropsRestProxy:wm,createRenderer:Qu,createSSRApp:Wf,createSlots:um,createStaticVNode:Um,createTextVNode:n,createVNode:t,customRef:gu,defineAsyncComponent:nm,defineComponent:F,defineCustomElement:yc,defineEmits:mm,defineExpose:fm,defineModel:_m,defineOptions:gm,defineProps:pm,defineSSRCustomElement:Pf,defineSlots:hm,devtools:of,effect:lp,effectScope:tp,getCurrentInstance:Kt,getCurrentScope:Fo,getTransitionRawChildren:mn,guardReactiveProps:sc,h:ee,handleError:Xi,hasInjectionContext:Lm,hydrate:Ec,initCustomFormatter:tf,initDirectivesForSSR:Kf,inject:Ve,isMemoSame:mc,isProxy:Oo,isReactive:Fi,isReadonly:Hi,isRef:ct,isRuntimeOnly:Xm,isShallow:ta,isVNode:Ct,markRaw:qo,mergeDefaults:Sm,mergeModels:ym,mergeProps:Zi,nextTick:Bl,normalizeClass:fa,normalizeProps:Xd,normalizeStyle:kl,onActivated:ts,onBeforeMount:zu,onBeforeUnmount:hn,onBeforeUpdate:Fu,onDeactivated:is,onErrorCaptured:Hu,onMounted:Ai,onRenderTracked:Nu,onRenderTriggered:Mu,onScopeDispose:Kr,onServerPrefetch:Vu,onUnmounted:Qi,onUpdated:gn,openBlock:y,popScopeId:Cu,provide:ut,proxyRefs:Uo,pushScopeId:wu,queuePostFlushCb:Oa,reactive:oi,readonly:Ho,ref:j,registerRuntimeCompiler:Km,render:Ka,renderList:Qe,renderSlot:qi,resolveComponent:B,resolveDirective:pn,resolveDynamicComponent:xu,resolveFilter:cf,resolveTransitionHooks:vl,setBlockTracking:so,setDevtoolsHook:sf,setTransitionHooks:Oi,shallowReactive:du,shallowReadonly:Ap,shallowRef:mu,ssrContextKey:$u,ssrUtils:uf,stop:ap,toDisplayString:$e,toHandlerKey:Ul,toHandlers:cm,toRaw:Ee,toRef:Qn,toRefs:Lp,toValue:$p,transformVNodeArgs:Gm,triggerRef:Bp,unref:r,useAttrs:qu,useCssModule:Ff,useCssVars:yf,useModel:ef,useSSRContext:Tu,useSlots:vm,useTransitionState:Zo,vModelCheckbox:us,vModelDynamic:$c,vModelRadio:cs,vModelSelect:kc,vModelText:Wa,vShow:vc,version:fc,warn:af,watch:pt,watchEffect:Qo,watchPostEffect:Du,watchSyncEffect:Lu,withAsyncContext:Cm,withCtx:l,withDefaults:bm,withDirectives:Si,withKeys:Jf,withMemo:lf,withModifiers:It,withScopeId:Gp},Symbol.toStringTag,{value:"Module"})),Zf=F({name:"App"}),He=(e,i)=>{const a=e.__vccOpts||e;for(const[o,s]of i)a[o]=s;return a};function eg(e,i,a,o,s,c){const d=B("router-view");return y(),x(d)}const tg=He(Zf,[["render",eg]]),ig="modulepreload",lg=function(e){return"/vue-fomantic-ui/"+e},_r={},Qt=function(i,a,o){let s=Promise.resolve();if(a&&a.length>0){const c=document.getElementsByTagName("link");s=Promise.all(a.map(d=>{if(d=lg(d),d in _r)return;_r[d]=!0;const f=d.endsWith(".css"),u=f?'[rel="stylesheet"]':"";if(!!o)for(let m=c.length-1;m>=0;m--){const _=c[m];if(_.href===d&&(!f||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${u}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":ig,f||(g.as="script",g.crossOrigin=""),g.href=d,document.head.appendChild(g),f)return new Promise((m,_)=>{g.addEventListener("load",m),g.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${d}`)))})}))}return s.then(()=>i()).catch(c=>{const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c})};/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Fc=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",$l=e=>Fc?Symbol(e):"_vr_"+e,Vc=$l("rvlm"),br=$l("rvd"),wn=$l("r"),ds=$l("rl"),_o=$l("rvl"),nl=typeof window<"u";function ag(e){return e.__esModule||Fc&&e[Symbol.toStringTag]==="Module"}const Ye=Object.assign;function zn(e,i){const a={};for(const o in i){const s=i[o];a[o]=Array.isArray(s)?s.map(e):e(s)}return a}const Xl=()=>{},ng=/\/$/,og=e=>e.replace(ng,"");function Fn(e,i,a="/"){let o,s={},c="",d="";const f=i.indexOf("?"),u=i.indexOf("#",f>-1?f:0);return f>-1&&(o=i.slice(0,f),c=i.slice(f+1,u>-1?u:i.length),s=e(c)),u>-1&&(o=o||i.slice(0,u),d=i.slice(u,i.length)),o=cg(o??i,a),{fullPath:o+(c&&"?")+c+d,path:o,query:s,hash:d}}function sg(e,i){const a=i.query?e(i.query):"";return i.path+(a&&"?")+a+(i.hash||"")}function vr(e,i){return!i||!e.toLowerCase().startsWith(i.toLowerCase())?e:e.slice(i.length)||"/"}function rg(e,i,a){const o=i.matched.length-1,s=a.matched.length-1;return o>-1&&o===s&&wl(i.matched[o],a.matched[s])&&Mc(i.params,a.params)&&e(i.query)===e(a.query)&&i.hash===a.hash}function wl(e,i){return(e.aliasOf||e)===(i.aliasOf||i)}function Mc(e,i){if(Object.keys(e).length!==Object.keys(i).length)return!1;for(const a in e)if(!ug(e[a],i[a]))return!1;return!0}function ug(e,i){return Array.isArray(e)?Sr(e,i):Array.isArray(i)?Sr(i,e):e===i}function Sr(e,i){return Array.isArray(i)?e.length===i.length&&e.every((a,o)=>a===i[o]):e.length===1&&e[0]===i}function cg(e,i){if(e.startsWith("/"))return e;if(!e)return i;const a=i.split("/"),o=e.split("/");let s=a.length-1,c,d;for(c=0;c<o.length;c++)if(d=o[c],!(s===1||d==="."))if(d==="..")s--;else break;return a.slice(0,s).join("/")+"/"+o.slice(c-(c===o.length?1:0)).join("/")}var ua;(function(e){e.pop="pop",e.push="push"})(ua||(ua={}));var Ql;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ql||(Ql={}));function dg(e){if(!e)if(nl){const i=document.querySelector("base");e=i&&i.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),og(e)}const pg=/^[^#]+#/;function mg(e,i){return e.replace(pg,"#")+i}function fg(e,i){const a=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:i.behavior,left:o.left-a.left-(i.left||0),top:o.top-a.top-(i.top||0)}}const Cn=()=>({left:window.pageXOffset,top:window.pageYOffset});function gg(e){let i;if("el"in e){const a=e.el,o=typeof a=="string"&&a.startsWith("#"),s=typeof a=="string"?o?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!s)return;i=fg(s,e)}else i=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(i):window.scrollTo(i.left!=null?i.left:window.pageXOffset,i.top!=null?i.top:window.pageYOffset)}function yr(e,i){return(history.state?history.state.position-i:-1)+e}const bo=new Map;function hg(e,i){bo.set(e,i)}function _g(e){const i=bo.get(e);return bo.delete(e),i}let bg=()=>location.protocol+"//"+location.host;function Nc(e,i){const{pathname:a,search:o,hash:s}=i,c=e.indexOf("#");if(c>-1){let f=s.includes(e.slice(c))?e.slice(c).length:1,u=s.slice(f);return u[0]!=="/"&&(u="/"+u),vr(u,"")}return vr(a,e)+o+s}function vg(e,i,a,o){let s=[],c=[],d=null;const f=({state:_})=>{const w=Nc(e,location),S=a.value,A=i.value;let T=0;if(_){if(a.value=w,i.value=_,d&&d===S){d=null;return}T=A?_.position-A.position:0}else o(w);s.forEach(L=>{L(a.value,S,{delta:T,type:ua.pop,direction:T?T>0?Ql.forward:Ql.back:Ql.unknown})})};function u(){d=a.value}function p(_){s.push(_);const w=()=>{const S=s.indexOf(_);S>-1&&s.splice(S,1)};return c.push(w),w}function g(){const{history:_}=window;_.state&&_.replaceState(Ye({},_.state,{scroll:Cn()}),"")}function m(){for(const _ of c)_();c=[],window.removeEventListener("popstate",f),window.removeEventListener("beforeunload",g)}return window.addEventListener("popstate",f),window.addEventListener("beforeunload",g),{pauseListeners:u,listen:p,destroy:m}}function wr(e,i,a,o=!1,s=!1){return{back:e,current:i,forward:a,replaced:o,position:window.history.length,scroll:s?Cn():null}}function Sg(e){const{history:i,location:a}=window,o={value:Nc(e,a)},s={value:i.state};s.value||c(o.value,{back:null,current:o.value,forward:null,position:i.length-1,replaced:!0,scroll:null},!0);function c(u,p,g){const m=e.indexOf("#"),_=m>-1?(a.host&&document.querySelector("base")?e:e.slice(m))+u:bg()+e+u;try{i[g?"replaceState":"pushState"](p,"",_),s.value=p}catch(w){console.error(w),a[g?"replace":"assign"](_)}}function d(u,p){const g=Ye({},i.state,wr(s.value.back,u,s.value.forward,!0),p,{position:s.value.position});c(u,g,!0),o.value=u}function f(u,p){const g=Ye({},s.value,i.state,{forward:u,scroll:Cn()});c(g.current,g,!0);const m=Ye({},wr(o.value,u,null),{position:g.position+1},p);c(u,m,!1),o.value=u}return{location:o,state:s,push:f,replace:d}}function yg(e){e=dg(e);const i=Sg(e),a=vg(e,i.state,i.location,i.replace);function o(c,d=!0){d||a.pauseListeners(),history.go(c)}const s=Ye({location:"",base:e,go:o,createHref:mg.bind(null,e)},i,a);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>i.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>i.state.value}),s}function wg(e){return typeof e=="string"||e&&typeof e=="object"}function Hc(e){return typeof e=="string"||typeof e=="symbol"}const pi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Oc=$l("nf");var Cr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Cr||(Cr={}));function Cl(e,i){return Ye(new Error,{type:e,[Oc]:!0},i)}function Ti(e,i){return e instanceof Error&&Oc in e&&(i==null||!!(e.type&i))}const Ar="[^/]+?",Cg={sensitive:!1,strict:!1,start:!0,end:!0},Ag=/[.+*?^${}()[\]/\\]/g;function xg(e,i){const a=Ye({},Cg,i),o=[];let s=a.start?"^":"";const c=[];for(const p of e){const g=p.length?[]:[90];a.strict&&!p.length&&(s+="/");for(let m=0;m<p.length;m++){const _=p[m];let w=40+(a.sensitive?.25:0);if(_.type===0)m||(s+="/"),s+=_.value.replace(Ag,"\\$&"),w+=40;else if(_.type===1){const{value:S,repeatable:A,optional:T,regexp:L}=_;c.push({name:S,repeatable:A,optional:T});const h=L||Ar;if(h!==Ar){w+=10;try{new RegExp(`(${h})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${S}" (${h}): `+C.message)}}let b=A?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;m||(b=T&&p.length<2?`(?:/${b})`:"/"+b),T&&(b+="?"),s+=b,w+=20,T&&(w+=-8),A&&(w+=-20),h===".*"&&(w+=-50)}g.push(w)}o.push(g)}if(a.strict&&a.end){const p=o.length-1;o[p][o[p].length-1]+=.7000000000000001}a.strict||(s+="/?"),a.end?s+="$":a.strict&&(s+="(?:/|$)");const d=new RegExp(s,a.sensitive?"":"i");function f(p){const g=p.match(d),m={};if(!g)return null;for(let _=1;_<g.length;_++){const w=g[_]||"",S=c[_-1];m[S.name]=w&&S.repeatable?w.split("/"):w}return m}function u(p){let g="",m=!1;for(const _ of e){(!m||!g.endsWith("/"))&&(g+="/"),m=!1;for(const w of _)if(w.type===0)g+=w.value;else if(w.type===1){const{value:S,repeatable:A,optional:T}=w,L=S in p?p[S]:"";if(Array.isArray(L)&&!A)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const h=Array.isArray(L)?L.join("/"):L;if(!h)if(T)_.length<2&&(g.endsWith("/")?g=g.slice(0,-1):m=!0);else throw new Error(`Missing required param "${S}"`);g+=h}}return g}return{re:d,score:o,keys:c,parse:f,stringify:u}}function kg(e,i){let a=0;for(;a<e.length&&a<i.length;){const o=i[a]-e[a];if(o)return o;a++}return e.length<i.length?e.length===1&&e[0]===80?-1:1:e.length>i.length?i.length===1&&i[0]===80?1:-1:0}function Bg(e,i){let a=0;const o=e.score,s=i.score;for(;a<o.length&&a<s.length;){const c=kg(o[a],s[a]);if(c)return c;a++}return s.length-o.length}const $g={type:0,value:""},Tg=/[a-zA-Z0-9_]/;function Dg(e){if(!e)return[[]];if(e==="/")return[[$g]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function i(w){throw new Error(`ERR (${a})/"${p}": ${w}`)}let a=0,o=a;const s=[];let c;function d(){c&&s.push(c),c=[]}let f=0,u,p="",g="";function m(){p&&(a===0?c.push({type:0,value:p}):a===1||a===2||a===3?(c.length>1&&(u==="*"||u==="+")&&i(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),c.push({type:1,value:p,regexp:g,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):i("Invalid state to consume buffer"),p="")}function _(){p+=u}for(;f<e.length;){if(u=e[f++],u==="\\"&&a!==2){o=a,a=4;continue}switch(a){case 0:u==="/"?(p&&m(),d()):u===":"?(m(),a=1):_();break;case 4:_(),a=o;break;case 1:u==="("?a=2:Tg.test(u)?_():(m(),a=0,u!=="*"&&u!=="?"&&u!=="+"&&f--);break;case 2:u===")"?g[g.length-1]=="\\"?g=g.slice(0,-1)+u:a=3:g+=u;break;case 3:m(),a=0,u!=="*"&&u!=="?"&&u!=="+"&&f--,g="";break;default:i("Unknown state");break}}return a===2&&i(`Unfinished custom RegExp for param "${p}"`),m(),d(),s}function Lg(e,i,a){const o=xg(Dg(e.path),a),s=Ye(o,{record:e,parent:i,children:[],alias:[]});return i&&!s.record.aliasOf==!i.record.aliasOf&&i.children.push(s),s}function Ig(e,i){const a=[],o=new Map;i=kr({strict:!1,end:!0,sensitive:!1},i);function s(g){return o.get(g)}function c(g,m,_){const w=!_,S=Rg(g);S.aliasOf=_&&_.record;const A=kr(i,g),T=[S];if("alias"in g){const b=typeof g.alias=="string"?[g.alias]:g.alias;for(const C of b)T.push(Ye({},S,{components:_?_.record.components:S.components,path:C,aliasOf:_?_.record:S}))}let L,h;for(const b of T){const{path:C}=b;if(m&&C[0]!=="/"){const $=m.record.path,E=$[$.length-1]==="/"?"":"/";b.path=m.record.path+(C&&E+C)}if(L=Lg(b,m,A),_?_.alias.push(L):(h=h||L,h!==L&&h.alias.push(L),w&&g.name&&!xr(L)&&d(g.name)),"children"in S){const $=S.children;for(let E=0;E<$.length;E++)c($[E],L,_&&_.children[E])}_=_||L,u(L)}return h?()=>{d(h)}:Xl}function d(g){if(Hc(g)){const m=o.get(g);m&&(o.delete(g),a.splice(a.indexOf(m),1),m.children.forEach(d),m.alias.forEach(d))}else{const m=a.indexOf(g);m>-1&&(a.splice(m,1),g.record.name&&o.delete(g.record.name),g.children.forEach(d),g.alias.forEach(d))}}function f(){return a}function u(g){let m=0;for(;m<a.length&&Bg(g,a[m])>=0;)m++;a.splice(m,0,g),g.record.name&&!xr(g)&&o.set(g.record.name,g)}function p(g,m){let _,w={},S,A;if("name"in g&&g.name){if(_=o.get(g.name),!_)throw Cl(1,{location:g});A=_.record.name,w=Ye(Eg(m.params,_.keys.filter(h=>!h.optional).map(h=>h.name)),g.params),S=_.stringify(w)}else if("path"in g)S=g.path,_=a.find(h=>h.re.test(S)),_&&(w=_.parse(S),A=_.record.name);else{if(_=m.name?o.get(m.name):a.find(h=>h.re.test(m.path)),!_)throw Cl(1,{location:g,currentLocation:m});A=_.record.name,w=Ye({},m.params,g.params),S=_.stringify(w)}const T=[];let L=_;for(;L;)T.unshift(L.record),L=L.parent;return{name:A,path:S,params:w,matched:T,meta:zg(T)}}return e.forEach(g=>c(g)),{addRoute:c,resolve:p,removeRoute:d,getRoutes:f,getRecordMatcher:s}}function Eg(e,i){const a={};for(const o of i)o in e&&(a[o]=e[o]);return a}function Rg(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Pg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function Pg(e){const i={},a=e.props||!1;if("component"in e)i.default=a;else for(const o in e.components)i[o]=typeof a=="boolean"?a:a[o];return i}function xr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function zg(e){return e.reduce((i,a)=>Ye(i,a.meta),{})}function kr(e,i){const a={};for(const o in e)a[o]=o in i?i[o]:e[o];return a}const qc=/#/g,Fg=/&/g,Vg=/\//g,Mg=/=/g,Ng=/\?/g,Gc=/\+/g,Hg=/%5B/g,Og=/%5D/g,jc=/%5E/g,qg=/%60/g,Uc=/%7B/g,Gg=/%7C/g,Yc=/%7D/g,jg=/%20/g;function ps(e){return encodeURI(""+e).replace(Gg,"|").replace(Hg,"[").replace(Og,"]")}function Ug(e){return ps(e).replace(Uc,"{").replace(Yc,"}").replace(jc,"^")}function vo(e){return ps(e).replace(Gc,"%2B").replace(jg,"+").replace(qc,"%23").replace(Fg,"%26").replace(qg,"`").replace(Uc,"{").replace(Yc,"}").replace(jc,"^")}function Yg(e){return vo(e).replace(Mg,"%3D")}function Jg(e){return ps(e).replace(qc,"%23").replace(Ng,"%3F")}function Wg(e){return e==null?"":Jg(e).replace(Vg,"%2F")}function Xa(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Kg(e){const i={};if(e===""||e==="?")return i;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<o.length;++s){const c=o[s].replace(Gc," "),d=c.indexOf("="),f=Xa(d<0?c:c.slice(0,d)),u=d<0?null:Xa(c.slice(d+1));if(f in i){let p=i[f];Array.isArray(p)||(p=i[f]=[p]),p.push(u)}else i[f]=u}return i}function Br(e){let i="";for(let a in e){const o=e[a];if(a=Yg(a),o==null){o!==void 0&&(i+=(i.length?"&":"")+a);continue}(Array.isArray(o)?o.map(c=>c&&vo(c)):[o&&vo(o)]).forEach(c=>{c!==void 0&&(i+=(i.length?"&":"")+a,c!=null&&(i+="="+c))})}return i}function Xg(e){const i={};for(const a in e){const o=e[a];o!==void 0&&(i[a]=Array.isArray(o)?o.map(s=>s==null?null:""+s):o==null?o:""+o)}return i}function Fl(){let e=[];function i(o){return e.push(o),()=>{const s=e.indexOf(o);s>-1&&e.splice(s,1)}}function a(){e=[]}return{add:i,list:()=>e,reset:a}}function Qg(e,i,a){const o=()=>{e[i].delete(a)};Qi(o),is(o),ts(()=>{e[i].add(a)}),e[i].add(a)}function Zg(e){const i=Ve(Vc,{}).value;i&&Qg(i,"updateGuards",e)}function bi(e,i,a,o,s){const c=o&&(o.enterCallbacks[s]=o.enterCallbacks[s]||[]);return()=>new Promise((d,f)=>{const u=m=>{m===!1?f(Cl(4,{from:a,to:i})):m instanceof Error?f(m):wg(m)?f(Cl(2,{from:i,to:m})):(c&&o.enterCallbacks[s]===c&&typeof m=="function"&&c.push(m),d())},p=e.call(o&&o.instances[s],i,a,u);let g=Promise.resolve(p);e.length<3&&(g=g.then(u)),g.catch(m=>f(m))})}function Vn(e,i,a,o){const s=[];for(const c of e)for(const d in c.components){let f=c.components[d];if(!(i!=="beforeRouteEnter"&&!c.instances[d]))if(eh(f)){const p=(f.__vccOpts||f)[i];p&&s.push(bi(p,a,o,c,d))}else{let u=f();s.push(()=>u.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${c.path}"`));const g=ag(p)?p.default:p;c.components[d]=g;const _=(g.__vccOpts||g)[i];return _&&bi(_,a,o,c,d)()}))}}return s}function eh(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function $r(e){const i=Ve(wn),a=Ve(ds),o=M(()=>i.resolve(r(e.to))),s=M(()=>{const{matched:u}=o.value,{length:p}=u,g=u[p-1],m=a.matched;if(!g||!m.length)return-1;const _=m.findIndex(wl.bind(null,g));if(_>-1)return _;const w=Tr(u[p-2]);return p>1&&Tr(g)===w&&m[m.length-1].path!==w?m.findIndex(wl.bind(null,u[p-2])):_}),c=M(()=>s.value>-1&&lh(a.params,o.value.params)),d=M(()=>s.value>-1&&s.value===a.matched.length-1&&Mc(a.params,o.value.params));function f(u={}){return ih(u)?i[r(e.replace)?"replace":"push"](r(e.to)).catch(Xl):Promise.resolve()}return{route:o,href:M(()=>o.value.href),isActive:c,isExactActive:d,navigate:f}}const th=F({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$r,setup(e,{slots:i}){const a=oi($r(e)),{options:o}=Ve(wn),s=M(()=>({[Dr(e.activeClass,o.linkActiveClass,"router-link-active")]:a.isActive,[Dr(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const c=i.default&&i.default(a);return e.custom?c:ee("a",{"aria-current":a.isExactActive?e.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:s.value},c)}}}),ms=th;function ih(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const i=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(i))return}return e.preventDefault&&e.preventDefault(),!0}}function lh(e,i){for(const a in i){const o=i[a],s=e[a];if(typeof o=="string"){if(o!==s)return!1}else if(!Array.isArray(s)||s.length!==o.length||o.some((c,d)=>c!==s[d]))return!1}return!0}function Tr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Dr=(e,i,a)=>e??i??a,ah=F({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:i,slots:a}){const o=Ve(_o),s=M(()=>e.route||o.value),c=Ve(br,0),d=M(()=>s.value.matched[c]);ut(br,c+1),ut(Vc,d),ut(_o,s);const f=j();return pt(()=>[f.value,d.value,e.name],([u,p,g],[m,_,w])=>{p&&(p.instances[g]=u,_&&_!==p&&u&&u===m&&(p.leaveGuards.size||(p.leaveGuards=_.leaveGuards),p.updateGuards.size||(p.updateGuards=_.updateGuards))),u&&p&&(!_||!wl(p,_)||!m)&&(p.enterCallbacks[g]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=s.value,p=d.value,g=p&&p.components[e.name],m=e.name;if(!g)return Lr(a.default,{Component:g,route:u});const _=p.props[e.name],w=_?_===!0?u.params:typeof _=="function"?_(u):_:null,A=ee(g,Ye({},w,i,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(p.instances[m]=null)},ref:f}));return Lr(a.default,{Component:A,route:u})||A}}});function Lr(e,i){if(!e)return null;const a=e(i);return a.length===1?a[0]:a}const nh=ah;function oh(e){const i=Ig(e.routes,e),a=e.parseQuery||Kg,o=e.stringifyQuery||Br,s=e.history,c=Fl(),d=Fl(),f=Fl(),u=mu(pi);let p=pi;nl&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const g=zn.bind(null,K=>""+K),m=zn.bind(null,Wg),_=zn.bind(null,Xa);function w(K,ce){let re,he;return Hc(K)?(re=i.getRecordMatcher(K),he=ce):he=K,i.addRoute(he,re)}function S(K){const ce=i.getRecordMatcher(K);ce&&i.removeRoute(ce)}function A(){return i.getRoutes().map(K=>K.record)}function T(K){return!!i.getRecordMatcher(K)}function L(K,ce){if(ce=Ye({},ce||u.value),typeof K=="string"){const Be=Fn(a,K,ce.path),D=i.resolve({path:Be.path},ce),R=s.createHref(Be.fullPath);return Ye(Be,D,{params:_(D.params),hash:Xa(Be.hash),redirectedFrom:void 0,href:R})}let re;if("path"in K)re=Ye({},K,{path:Fn(a,K.path,ce.path).path});else{const Be=Ye({},K.params);for(const D in Be)Be[D]==null&&delete Be[D];re=Ye({},K,{params:m(K.params)}),ce.params=m(ce.params)}const he=i.resolve(re,ce),Me=K.hash||"";he.params=g(_(he.params));const Ne=sg(o,Ye({},K,{hash:Ug(Me),path:he.path})),ke=s.createHref(Ne);return Ye({fullPath:Ne,hash:Me,query:o===Br?Xg(K.query):K.query||{}},he,{redirectedFrom:void 0,href:ke})}function h(K){return typeof K=="string"?Fn(a,K,u.value.path):Ye({},K)}function b(K,ce){if(p!==K)return Cl(8,{from:ce,to:K})}function C(K){return V(K)}function $(K){return C(Ye(h(K),{replace:!0}))}function E(K){const ce=K.matched[K.matched.length-1];if(ce&&ce.redirect){const{redirect:re}=ce;let he=typeof re=="function"?re(K):re;return typeof he=="string"&&(he=he.includes("?")||he.includes("#")?he=h(he):{path:he},he.params={}),Ye({query:K.query,hash:K.hash,params:K.params},he)}}function V(K,ce){const re=p=L(K),he=u.value,Me=K.state,Ne=K.force,ke=K.replace===!0,Be=E(re);if(Be)return V(Ye(h(Be),{state:Me,force:Ne,replace:ke}),ce||re);const D=re;D.redirectedFrom=ce;let R;return!Ne&&rg(o,he,re)&&(R=Cl(16,{to:D,from:he}),Je(he,he,!0,!1)),(R?Promise.resolve(R):z(D,he)).catch(q=>Ti(q)?q:ue(q,D,he)).then(q=>{if(q){if(Ti(q,2))return V(Ye(h(q.to),{state:Me,force:Ne,replace:ke}),ce||D)}else q=X(D,he,!0,ke,Me);return G(D,he,q),q})}function N(K,ce){const re=b(K,ce);return re?Promise.reject(re):Promise.resolve()}function z(K,ce){let re;const[he,Me,Ne]=sh(K,ce);re=Vn(he.reverse(),"beforeRouteLeave",K,ce);for(const Be of he)Be.leaveGuards.forEach(D=>{re.push(bi(D,K,ce))});const ke=N.bind(null,K,ce);return re.push(ke),il(re).then(()=>{re=[];for(const Be of c.list())re.push(bi(Be,K,ce));return re.push(ke),il(re)}).then(()=>{re=Vn(Me,"beforeRouteUpdate",K,ce);for(const Be of Me)Be.updateGuards.forEach(D=>{re.push(bi(D,K,ce))});return re.push(ke),il(re)}).then(()=>{re=[];for(const Be of K.matched)if(Be.beforeEnter&&!ce.matched.includes(Be))if(Array.isArray(Be.beforeEnter))for(const D of Be.beforeEnter)re.push(bi(D,K,ce));else re.push(bi(Be.beforeEnter,K,ce));return re.push(ke),il(re)}).then(()=>(K.matched.forEach(Be=>Be.enterCallbacks={}),re=Vn(Ne,"beforeRouteEnter",K,ce),re.push(ke),il(re))).then(()=>{re=[];for(const Be of d.list())re.push(bi(Be,K,ce));return re.push(ke),il(re)}).catch(Be=>Ti(Be,8)?Be:Promise.reject(Be))}function G(K,ce,re){for(const he of f.list())he(K,ce,re)}function X(K,ce,re,he,Me){const Ne=b(K,ce);if(Ne)return Ne;const ke=ce===pi,Be=nl?history.state:{};re&&(he||ke?s.replace(K.fullPath,Ye({scroll:ke&&Be&&Be.scroll},Me)):s.push(K.fullPath,Me)),u.value=K,Je(K,ce,re,ke),De()}let Y;function pe(){Y=s.listen((K,ce,re)=>{const he=L(K),Me=E(he);if(Me){V(Ye(Me,{replace:!0}),he).catch(Xl);return}p=he;const Ne=u.value;nl&&hg(yr(Ne.fullPath,re.delta),Cn()),z(he,Ne).catch(ke=>Ti(ke,12)?ke:Ti(ke,2)?(V(ke.to,he).then(Be=>{Ti(Be,20)&&!re.delta&&re.type===ua.pop&&s.go(-1,!1)}).catch(Xl),Promise.reject()):(re.delta&&s.go(-re.delta,!1),ue(ke,he,Ne))).then(ke=>{ke=ke||X(he,Ne,!1),ke&&(re.delta?s.go(-re.delta,!1):re.type===ua.pop&&Ti(ke,20)&&s.go(-1,!1)),G(he,Ne,ke)}).catch(Xl)})}let xe=Fl(),U=Fl(),W;function ue(K,ce,re){De(K);const he=U.list();return he.length?he.forEach(Me=>Me(K,ce,re)):console.error(K),Promise.reject(K)}function le(){return W&&u.value!==pi?Promise.resolve():new Promise((K,ce)=>{xe.add([K,ce])})}function De(K){W||(W=!0,pe(),xe.list().forEach(([ce,re])=>K?re(K):ce()),xe.reset())}function Je(K,ce,re,he){const{scrollBehavior:Me}=e;if(!nl||!Me)return Promise.resolve();const Ne=!re&&_g(yr(K.fullPath,0))||(he||!re)&&history.state&&history.state.scroll||null;return Bl().then(()=>Me(K,ce,Ne)).then(ke=>ke&&gg(ke)).catch(ke=>ue(ke,K,ce))}const at=K=>s.go(K);let Ue;const Xt=new Set;return{currentRoute:u,addRoute:w,removeRoute:S,hasRoute:T,getRoutes:A,resolve:L,options:e,push:C,replace:$,go:at,back:()=>at(-1),forward:()=>at(1),beforeEach:c.add,beforeResolve:d.add,afterEach:f.add,onError:U.add,isReady:le,install(K){const ce=this;K.component("RouterLink",ms),K.component("RouterView",nh),K.config.globalProperties.$router=ce,Object.defineProperty(K.config.globalProperties,"$route",{enumerable:!0,get:()=>r(u)}),nl&&!Ue&&u.value===pi&&(Ue=!0,C(s.location).catch(Me=>{}));const re={};for(const Me in pi)re[Me]=M(()=>u.value[Me]);K.provide(wn,ce),K.provide(ds,oi(re)),K.provide(_o,u);const he=K.unmount;Xt.add(K),K.unmount=function(){Xt.delete(K),Xt.size<1&&(p=pi,Y&&Y(),u.value=pi,Ue=!1,W=!1),he()}}}}function il(e){return e.reduce((i,a)=>i.then(()=>a()),Promise.resolve())}function sh(e,i){const a=[],o=[],s=[],c=Math.max(i.matched.length,e.matched.length);for(let d=0;d<c;d++){const f=i.matched[d];f&&(e.matched.find(p=>wl(p,f))?o.push(f):a.push(f));const u=e.matched[d];u&&(i.matched.find(p=>wl(p,u))||s.push(u))}return[a,o,s]}function Jc(){return Ve(wn)}function Wc(){return Ve(ds)}const rh={__name:"Navbar",props:["onClick"],setup(e){const i=j(),a=Jc();function o(s){return s.charAt(0).toUpperCase()+s.slice(1)}return Qo(()=>{const d=a.currentRoute.value.path.match(/\/([^/]+)$/);d&&(i.value=o(d[1]))}),(s,c)=>{const d=B("SuiIcon"),f=B("SuiMenuItem"),u=B("SuiMenu");return y(),x(u,{id:"navbar",fixed:"",icon:"",inverted:"",size:"big"},{default:l(()=>[t(f,{onClick:e.onClick},{default:l(()=>[t(d,{name:"hamburger"})]),_:1},8,["onClick"]),t(f,null,{default:l(()=>[n($e(i.value),1)]),_:1})]),_:1})}}},uh=He(rh,[["__scopeId","data-v-338afb35"]]),ch=F({name:"Sidebar",setup(){const e=Wc();return{isActive:d=>e.path===d,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),dh=k("strong",null," Fomantic UI Vue ",-1),ph=k("b",null,"Getting Started",-1);function mh(e,i,a,o,s,c){const d=B("sui-menu-item"),f=B("sui-menu-header"),u=B("sui-menu-menu"),p=B("sui-menu");return y(),x(p,{fluid:"",inverted:"",vertical:""},{default:l(()=>[t(d,{as:"div"},{default:l(()=>[dh]),_:1}),t(d,{as:"router-link",to:"/"},{default:l(()=>[ph]),_:1}),t(d,{as:"div"},{default:l(()=>[t(f,{content:"Elements"}),t(u,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.elements,g=>(y(),x(d,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(d,{as:"div"},{default:l(()=>[t(f,{content:"Collections"}),t(u,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.collections,g=>(y(),x(d,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(d,{as:"div"},{default:l(()=>[t(f,{content:"Views"}),t(u,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.views,g=>(y(),x(d,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(d,{as:"div"},{default:l(()=>[t(f,{content:"Modules"}),t(u,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.modules,g=>(y(),x(d,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const fh=He(ch,[["render",mh]]),gh={class:"sidemenu"},hh={style:{flex:"1","overflow-y":"scroll"}},_h={__name:"Sidebar",setup(e){return(i,a)=>(y(),ye("div",gh,[k("div",hh,[t(fh)])]))}},bh=He(_h,[["__scopeId","data-v-379ef704"]]),vh=F({name:"Sidebar",setup(){const e=Wc();return{isActive:d=>e.path===d,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),Sh=k("strong",null," Fomantic UI Vue ",-1),yh=k("b",null,"Getting Started",-1);function wh(e,i,a,o,s,c){const d=B("sui-menu-item"),f=B("sui-menu-header"),u=B("sui-menu-menu"),p=B("sui-sidebar");return y(),x(p,{dimmed:"",inverted:"",style:{width:"250px"}},{default:l(()=>[t(d,{as:"div"},{default:l(()=>[Sh]),_:1}),t(d,{as:"router-link",to:"/"},{default:l(()=>[yh]),_:1}),t(d,{as:"div"},{default:l(()=>[t(f,{content:"Elements"}),t(u,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.elements,g=>(y(),x(d,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(d,{as:"div"},{default:l(()=>[t(f,{content:"Collections"}),t(u,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.collections,g=>(y(),x(d,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(d,{as:"div"},{default:l(()=>[t(f,{content:"Views"}),t(u,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.views,g=>(y(),x(d,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(d,{as:"div"},{default:l(()=>[t(f,{content:"Modules"}),t(u,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.modules,g=>(y(),x(d,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const Ch=He(vh,[["render",wh]]),Ah={class:"pusher",style:{height:"100vh"}},xh={class:"article"},kh={__name:"Home",setup(e){const i=j(!1),a=()=>i.value=!i.value;return Zg(()=>{i.value=!1}),(o,s)=>{const c=B("router-view"),d=B("SuiSegment");return y(),x(d,{class:"pushable",style:{border:"none"}},{default:l(()=>[t(Ch,{visible:i.value},null,8,["visible"]),k("div",Ah,[t(bh),t(uh,{"on-click":a}),k("div",xh,[t(c)])])]),_:1})}}},Bh=He(kh,[["__scopeId","data-v-0bfd4ee9"]]),$h={__name:"DocSections",props:["docs"],setup(e){const i=e,a=M(()=>[...new Set(i.docs.map(o=>o.category))]);return(o,s)=>{const c=B("SuiHeader");return y(!0),ye(Ce,null,Qe(a.value,(d,f)=>(y(),ye(Ce,{key:d},[t(c,{as:"h2",dividing:"",style:kl({marginTop:f!==0?"5rem":"0",paddingTop:"2rem"})},{default:l(()=>[n($e(d),1)]),_:2},1032,["style"]),(y(!0),ye(Ce,null,Qe(e.docs.filter(u=>u.category===d),(u,p)=>(y(),x(xu(u.component),{key:u.label+"_"+p,id:u.id,style:{paddingTop:"3rem"}},null,8,["id"]))),128))],64))),128)}}},Th=e=>(wu("data-v-e2ae2e49"),e=e(),Cu(),e),Dh={class:"item"},Lh=Th(()=>k("i",{class:"dropdown icon"},null,-1)),Ih={class:"content menu active"},Eh={__name:"DocTableLink",props:["header","items"],setup(e){const{id:i}=qu(),a=d=>{d.preventDefault();const f=document.getElementById(i);f.open?s(f):(f.open=!0,o(f))},o=d=>{d.querySelector(".title").classList.add("active");const u=d.querySelector(".content"),p=u.offsetHeight;u.style.maxHeight=0,requestAnimationFrame(()=>{u.style.maxHeight=`${p}px`});const g=new AbortController;u.addEventListener("transitionend",()=>{u.removeAttribute("style"),g.abort()},{signal:g.signal})},s=d=>{const f=d.querySelector(".title"),u=d.querySelector(".content"),p=u.offsetHeight;u.style.maxHeight=`${p}px`,requestAnimationFrame(()=>{u.style.maxHeight=0,f.classList.remove("active")});const g=new AbortController;u.addEventListener("transitionend",()=>{u.removeAttribute("style"),d.open=!1,g.abort()},{signal:g.signal})},c=(d,f)=>{d.preventDefault(),document.getElementById(f.replace("_link","")).scrollIntoView({behavior:"smooth",block:"start"})};return(d,f)=>(y(),ye("details",Dh,[k("summary",{class:"title",onClick:a},[Lh,k("b",null,$e(e.header),1)]),k("div",Ih,[(y(!0),ye(Ce,null,Qe(e.items,u=>(y(),x(r(ms),{to:`#${u.id}`,class:"item",onClick:p=>c(p,u.id)},{default:l(()=>[n($e(u.label),1)]),_:2},1032,["to","onClick"]))),256))])]))}},Rh=He(Eh,[["__scopeId","data-v-e2ae2e49"]]),Ph={class:"sticky"},zh={class:"ui vertical following fluid accordion text large menu"},Fh={__name:"DocTableContents",props:["title","links"],setup(e){const i=e,a=[...new Set(i.links.map(o=>o.category))];return(o,s)=>{const c=B("SuiHeader"),d=B("SuiRail");return y(),x(d,{id:"table-contents",position:"right",dividing:""},{default:l(()=>[k("div",Ph,[t(c,{as:"h3"},{default:l(()=>[n($e(e.title),1)]),_:1}),k("div",zh,[(y(),ye(Ce,null,Qe(a,f=>t(Rh,{id:`${f}_link`,header:f,items:e.links.filter(u=>u.category===f)},null,8,["id","header","items"])),64))])])]),_:1})}}},Vh=He(Fh,[["__scopeId","data-v-bd90305d"]]),Mh={class:"intro"},Nh={__name:"DocComponent",props:["title","description","componentDocs"],setup(e){const i=j();return(a,o)=>{const s=B("SuiHeaderSubheader"),c=B("SuiHeader"),d=B("SuiDivider"),f=B("SuiIcon"),u=B("SuiMenuItem"),p=B("SuiPopup"),g=B("SuiMenu"),m=B("SuiContainer"),_=B("SuiSegment");return y(),ye("div",null,[t(_,{id:"masthead",vertical:"",style:{"border-bottom":"1px solid #DDDDDD"}},{default:l(()=>[t(m,{class:"main"},{default:l(()=>[k("div",Mh,[t(c,{as:"h1"},{default:l(()=>[n($e(e.title)+" ",1),t(s,null,{default:l(()=>[n($e(e.description),1)]),_:1})]),_:1}),t(d,{hidden:""}),t(g,{icon:"",floated:"right"},{default:l(()=>[t(u,{as:"a",icon:"",ref_key:"el",ref:i,href:"https://github.com/nightswinger/vue-fomantic-ui"},{default:l(()=>[t(f,{name:"alternate github"})]),_:1},512),t(p,{trigger:i.value,position:"top right"},{default:l(()=>[n(" View Project on GitHub ")]),_:1},8,["trigger"])]),_:1})])]),_:1})]),_:1}),t(m,{class:"main"},{default:l(()=>[t(_,{basic:"",fitted:""},{default:l(()=>[e.componentDocs?(y(),ye(Ce,{key:0},[t($h,{docs:e.componentDocs},null,8,["docs"]),t(Vh,{title:e.title,links:e.componentDocs},null,8,["title","links"])],64)):os("",!0),qi(a.$slots,"default",{},void 0,!0)]),_:3})]),_:3})])}}},ot=He(Nh,[["__scopeId","data-v-d22eb33f"]]);var Ir=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Kc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Hh(e){if(e.__esModule)return e;var i=e.default;if(typeof i=="function"){var a=function o(){return this instanceof o?Reflect.construct(i,arguments,this.constructor):i.apply(this,arguments)};a.prototype=i.prototype}else a={};return Object.defineProperty(a,"__esModule",{value:!0}),Object.keys(e).forEach(function(o){var s=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(a,o,s.get?s:{enumerable:!0,get:function(){return e[o]}})}),a}var Xc={exports:{}};(function(e){var i=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var a=function(o){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,c=0,d={},f={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function h(b){return b instanceof u?new u(b.type,h(b.content),b.alias):Array.isArray(b)?b.map(h):b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(h){return Object.prototype.toString.call(h).slice(8,-1)},objId:function(h){return h.__id||Object.defineProperty(h,"__id",{value:++c}),h.__id},clone:function h(b,C){C=C||{};var $,E;switch(f.util.type(b)){case"Object":if(E=f.util.objId(b),C[E])return C[E];$={},C[E]=$;for(var V in b)b.hasOwnProperty(V)&&($[V]=h(b[V],C));return $;case"Array":return E=f.util.objId(b),C[E]?C[E]:($=[],C[E]=$,b.forEach(function(N,z){$[z]=h(N,C)}),$);default:return b}},getLanguage:function(h){for(;h;){var b=s.exec(h.className);if(b)return b[1].toLowerCase();h=h.parentElement}return"none"},setLanguage:function(h,b){h.className=h.className.replace(RegExp(s,"gi"),""),h.classList.add("language-"+b)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch($){var h=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec($.stack)||[])[1];if(h){var b=document.getElementsByTagName("script");for(var C in b)if(b[C].src==h)return b[C]}return null}},isActive:function(h,b,C){for(var $="no-"+b;h;){var E=h.classList;if(E.contains(b))return!0;if(E.contains($))return!1;h=h.parentElement}return!!C}},languages:{plain:d,plaintext:d,text:d,txt:d,extend:function(h,b){var C=f.util.clone(f.languages[h]);for(var $ in b)C[$]=b[$];return C},insertBefore:function(h,b,C,$){$=$||f.languages;var E=$[h],V={};for(var N in E)if(E.hasOwnProperty(N)){if(N==b)for(var z in C)C.hasOwnProperty(z)&&(V[z]=C[z]);C.hasOwnProperty(N)||(V[N]=E[N])}var G=$[h];return $[h]=V,f.languages.DFS(f.languages,function(X,Y){Y===G&&X!=h&&(this[X]=V)}),V},DFS:function h(b,C,$,E){E=E||{};var V=f.util.objId;for(var N in b)if(b.hasOwnProperty(N)){C.call(b,N,b[N],$||N);var z=b[N],G=f.util.type(z);G==="Object"&&!E[V(z)]?(E[V(z)]=!0,h(z,C,null,E)):G==="Array"&&!E[V(z)]&&(E[V(z)]=!0,h(z,C,N,E))}}},plugins:{},highlightAll:function(h,b){f.highlightAllUnder(document,h,b)},highlightAllUnder:function(h,b,C){var $={callback:C,container:h,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};f.hooks.run("before-highlightall",$),$.elements=Array.prototype.slice.apply($.container.querySelectorAll($.selector)),f.hooks.run("before-all-elements-highlight",$);for(var E=0,V;V=$.elements[E++];)f.highlightElement(V,b===!0,$.callback)},highlightElement:function(h,b,C){var $=f.util.getLanguage(h),E=f.languages[$];f.util.setLanguage(h,$);var V=h.parentElement;V&&V.nodeName.toLowerCase()==="pre"&&f.util.setLanguage(V,$);var N=h.textContent,z={element:h,language:$,grammar:E,code:N};function G(Y){z.highlightedCode=Y,f.hooks.run("before-insert",z),z.element.innerHTML=z.highlightedCode,f.hooks.run("after-highlight",z),f.hooks.run("complete",z),C&&C.call(z.element)}if(f.hooks.run("before-sanity-check",z),V=z.element.parentElement,V&&V.nodeName.toLowerCase()==="pre"&&!V.hasAttribute("tabindex")&&V.setAttribute("tabindex","0"),!z.code){f.hooks.run("complete",z),C&&C.call(z.element);return}if(f.hooks.run("before-highlight",z),!z.grammar){G(f.util.encode(z.code));return}if(b&&o.Worker){var X=new Worker(f.filename);X.onmessage=function(Y){G(Y.data)},X.postMessage(JSON.stringify({language:z.language,code:z.code,immediateClose:!0}))}else G(f.highlight(z.code,z.grammar,z.language))},highlight:function(h,b,C){var $={code:h,grammar:b,language:C};if(f.hooks.run("before-tokenize",$),!$.grammar)throw new Error('The language "'+$.language+'" has no grammar.');return $.tokens=f.tokenize($.code,$.grammar),f.hooks.run("after-tokenize",$),u.stringify(f.util.encode($.tokens),$.language)},tokenize:function(h,b){var C=b.rest;if(C){for(var $ in C)b[$]=C[$];delete b.rest}var E=new m;return _(E,E.head,h),g(h,E,b,E.head,0),S(E)},hooks:{all:{},add:function(h,b){var C=f.hooks.all;C[h]=C[h]||[],C[h].push(b)},run:function(h,b){var C=f.hooks.all[h];if(!(!C||!C.length))for(var $=0,E;E=C[$++];)E(b)}},Token:u};o.Prism=f;function u(h,b,C,$){this.type=h,this.content=b,this.alias=C,this.length=($||"").length|0}u.stringify=function h(b,C){if(typeof b=="string")return b;if(Array.isArray(b)){var $="";return b.forEach(function(G){$+=h(G,C)}),$}var E={type:b.type,content:h(b.content,C),tag:"span",classes:["token",b.type],attributes:{},language:C},V=b.alias;V&&(Array.isArray(V)?Array.prototype.push.apply(E.classes,V):E.classes.push(V)),f.hooks.run("wrap",E);var N="";for(var z in E.attributes)N+=" "+z+'="'+(E.attributes[z]||"").replace(/"/g,"&quot;")+'"';return"<"+E.tag+' class="'+E.classes.join(" ")+'"'+N+">"+E.content+"</"+E.tag+">"};function p(h,b,C,$){h.lastIndex=b;var E=h.exec(C);if(E&&$&&E[1]){var V=E[1].length;E.index+=V,E[0]=E[0].slice(V)}return E}function g(h,b,C,$,E,V){for(var N in C)if(!(!C.hasOwnProperty(N)||!C[N])){var z=C[N];z=Array.isArray(z)?z:[z];for(var G=0;G<z.length;++G){if(V&&V.cause==N+","+G)return;var X=z[G],Y=X.inside,pe=!!X.lookbehind,xe=!!X.greedy,U=X.alias;if(xe&&!X.pattern.global){var W=X.pattern.toString().match(/[imsuy]*$/)[0];X.pattern=RegExp(X.pattern.source,W+"g")}for(var ue=X.pattern||X,le=$.next,De=E;le!==b.tail&&!(V&&De>=V.reach);De+=le.value.length,le=le.next){var Je=le.value;if(b.length>h.length)return;if(!(Je instanceof u)){var at=1,Ue;if(xe){if(Ue=p(ue,De,h,pe),!Ue||Ue.index>=h.length)break;var ce=Ue.index,Xt=Ue.index+Ue[0].length,Pt=De;for(Pt+=le.value.length;ce>=Pt;)le=le.next,Pt+=le.value.length;if(Pt-=le.value.length,De=Pt,le.value instanceof u)continue;for(var K=le;K!==b.tail&&(Pt<Xt||typeof K.value=="string");K=K.next)at++,Pt+=K.value.length;at--,Je=h.slice(De,Pt),Ue.index-=De}else if(Ue=p(ue,0,Je,pe),!Ue)continue;var ce=Ue.index,re=Ue[0],he=Je.slice(0,ce),Me=Je.slice(ce+re.length),Ne=De+Je.length;V&&Ne>V.reach&&(V.reach=Ne);var ke=le.prev;he&&(ke=_(b,ke,he),De+=he.length),w(b,ke,at);var Be=new u(N,Y?f.tokenize(re,Y):re,U,re);if(le=_(b,ke,Be),Me&&_(b,le,Me),at>1){var D={cause:N+","+G,reach:Ne};g(h,b,C,le.prev,De,D),V&&D.reach>V.reach&&(V.reach=D.reach)}}}}}}function m(){var h={value:null,prev:null,next:null},b={value:null,prev:h,next:null};h.next=b,this.head=h,this.tail=b,this.length=0}function _(h,b,C){var $=b.next,E={value:C,prev:b,next:$};return b.next=E,$.prev=E,h.length++,E}function w(h,b,C){for(var $=b.next,E=0;E<C&&$!==h.tail;E++)$=$.next;b.next=$,$.prev=b,h.length-=E}function S(h){for(var b=[],C=h.head.next;C!==h.tail;)b.push(C.value),C=C.next;return b}if(!o.document)return o.addEventListener&&(f.disableWorkerMessageHandler||o.addEventListener("message",function(h){var b=JSON.parse(h.data),C=b.language,$=b.code,E=b.immediateClose;o.postMessage(f.highlight($,f.languages[C],C)),E&&o.close()},!1)),f;var A=f.util.currentScript();A&&(f.filename=A.src,A.hasAttribute("data-manual")&&(f.manual=!0));function T(){f.manual||f.highlightAll()}if(!f.manual){var L=document.readyState;L==="loading"||L==="interactive"&&A&&A.defer?document.addEventListener("DOMContentLoaded",T):window.requestAnimationFrame?window.requestAnimationFrame(T):window.setTimeout(T,16)}return f}(i);e.exports&&(e.exports=a),typeof Ir<"u"&&(Ir.Prism=a),a.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(s,c){var d={};d["language-"+c]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[c]},d.cdata=/^<!\[CDATA\[|\]\]>$/i;var f={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:d}};f["language-"+c]={pattern:/[\s\S]+/,inside:a.languages[c]};var u={};u[s]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return s}),"i"),lookbehind:!0,greedy:!0,inside:f},a.languages.insertBefore("markup","cdata",u)}}),Object.defineProperty(a.languages.markup.tag,"addAttribute",{value:function(o,s){a.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:a.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,function(o){var s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+s.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var c=o.languages.markup;c&&(c.tag.addInlined("style","css"),c.tag.addAttribute("style","css"))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),a.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),a.languages.markup&&(a.languages.markup.tag.addInlined("script","javascript"),a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),a.languages.js=a.languages.javascript,function(){if(typeof a>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading…",s=function(A,T){return"✖ Error "+A+" while fetching file: "+T},c="✖ Error: File does not exist or is empty",d={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},f="data-src-status",u="loading",p="loaded",g="failed",m="pre[data-src]:not(["+f+'="'+p+'"]):not(['+f+'="'+u+'"])';function _(A,T,L){var h=new XMLHttpRequest;h.open("GET",A,!0),h.onreadystatechange=function(){h.readyState==4&&(h.status<400&&h.responseText?T(h.responseText):h.status>=400?L(s(h.status,h.statusText)):L(c))},h.send(null)}function w(A){var T=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(A||"");if(T){var L=Number(T[1]),h=T[2],b=T[3];return h?b?[L,Number(b)]:[L,void 0]:[L,L]}}a.hooks.add("before-highlightall",function(A){A.selector+=", "+m}),a.hooks.add("before-sanity-check",function(A){var T=A.element;if(T.matches(m)){A.code="",T.setAttribute(f,u);var L=T.appendChild(document.createElement("CODE"));L.textContent=o;var h=T.getAttribute("data-src"),b=A.language;if(b==="none"){var C=(/\.(\w+)$/.exec(h)||[,"none"])[1];b=d[C]||C}a.util.setLanguage(L,b),a.util.setLanguage(T,b);var $=a.plugins.autoloader;$&&$.loadLanguages(b),_(h,function(E){T.setAttribute(f,p);var V=w(T.getAttribute("data-range"));if(V){var N=E.split(/\r\n?|\n/g),z=V[0],G=V[1]==null?N.length:V[1];z<0&&(z+=N.length),z=Math.max(0,Math.min(z-1,N.length)),G<0&&(G+=N.length),G=Math.max(0,Math.min(G,N.length)),E=N.slice(z,G).join(`
`),T.hasAttribute("data-start")||T.setAttribute("data-start",String(z+1))}L.textContent=E,a.highlightElement(L)},function(E){T.setAttribute(f,g),L.textContent=E})}}),a.plugins.fileHighlight={highlight:function(T){for(var L=(T||document).querySelectorAll(m),h=0,b;b=L[h++];)a.highlightElement(b)}};var S=!1;a.fileHighlight=function(){S||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),S=!0),a.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Xc);var Qc=Xc.exports;const Oh=Kc(Qc),Fa={mounted(e,i){var s;const a=i.modifiers,o=i.value;a.script||o==="script"?e.className="language-javascript":e.className="language-markup",Oh.highlightElement(e.children[0]),(s=e.children[0].parentElement)==null||s.setAttribute("tabindex","-1")}},qh={style:{paddingTop:"3rem"}},Gh=k("p",null," Fomantic-UI Vue provides UI components based on Fomantic-UI. ",-1),jh=k("code",null,`$ npm install vue-fomantic-ui
$ npm install fomantic-ui-css
# or
$ yarn add vue-fomantic-ui
$ yarn add fomantic-ui-css`,-1),Uh=[jh],Yh={style:{paddingTop:"3rem",marginBottom:"3rem"}},Jh=k("p",null," You can import all components as Vue plugin. ",-1),Wh=k("code",null,`import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

const app = createApp(App)

app.use(FomanticUI)`,-1),Kh=[Wh],Xh=k("br",null,null,-1),Qh=k("p",null," Or pick a component indivisually, add it to your components option. ",-1),Zh=k("code",null,`import { SuiButton } from 'vue-fomantic-ui'

export default {
  components: { SuiButton },
  // ...
}`,-1),e_=[Zh],t_={__name:"GettingStarted",setup(e){return(i,a)=>{const o=B("SuiHeader");return y(),x(ot,{title:"Getting Started",description:"Getting up and running with Fomantic-UI Vue"},{default:l(()=>[k("section",qh,[t(o,{as:"h2"},{default:l(()=>[n("Install")]),_:1}),Gh,t(o,{as:"h3"},{default:l(()=>[n("via Package Manager")]),_:1}),Si((y(),ye("pre",null,Uh)),[[r(Fa)]])]),k("section",Yh,[t(o,{as:"h2"},{default:l(()=>[n("Usage")]),_:1}),Jh,Si((y(),ye("pre",null,Kh)),[[r(Fa),void 0,void 0,{script:!0}]]),Xh,Qh,Si((y(),ye("pre",null,e_)),[[r(Fa),void 0,void 0,{script:!0}]])])]),_:1})}}};function Zc(e){var i,a,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(i=0;i<e.length;i++)e[i]&&(a=Zc(e[i]))&&(o&&(o+=" "),o+=a);else for(i in e)e[i]&&(o&&(o+=" "),o+=i);return o}function te(){for(var e,i,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(i=Zc(e))&&(o&&(o+=" "),o+=i);return o}const v=(e,i)=>e?i:"",Pe=(e,i)=>typeof e=="string"?`${e} ${i}`:"",Ie=(e,i)=>e===!0?i:e==="below"?`${i} ${e}`:typeof e=="string"?`${e} ${i}`:"",Tl=e=>e==="justified"?"justified":Pe(e,"aligned"),ri=(e,i)=>typeof e=="number"&&i?`${So(e)} ${i}`:typeof e=="number"&&!i?So(e):typeof e=="string"&&e==="equal"?`${e} width`:"",Vl=(e,i)=>e?`${So(e)} wide ${i}`:"",So=e=>["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"][e-1],i_=F({props:{fluid:Boolean,inverted:Boolean,multiple:Boolean,styled:Boolean},setup(e){const i=e.multiple?j([]):j(-1),a=s=>e.multiple?i.value.includes(s):i.value===s,o=s=>{const c=a(s);e.multiple?c?i.value=i.value.filter(d=>d!==s):i.value.push(s):i.value=c?-1:s};return ut("isTabActive",a),ut("updateActiveIndex",o),{computedClass:M(()=>te("ui",v(e.fluid,"fluid"),v(e.inverted,"inverted"),v(e.styled,"styled"),"accordion"))}},render(){var e,i;const a=o=>(o.forEach((s,c)=>{s.props.index=c}),o);return t("div",{class:this.computedClass},[a((i=(e=this.$slots).default)==null?void 0:i.call(e))])}}),l_=F({render(){var e,i;return ee("div",{class:"accordion"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),ed=F({props:{active:Boolean},setup(e){return{computedClass:M(()=>te(v(e.active,"active"),"content"))}},render(){var e,i;return ee("div",{class:this.computedClass},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),J=F({props:{as:String,bordered:Boolean,circular:Boolean,color:String,colored:Boolean,corner:[Boolean,String],disabled:Boolean,fitted:Boolean,flipped:String,inverted:Boolean,link:Boolean,loading:Boolean,name:String,primary:Boolean,rotated:String,secondary:Boolean,size:String},setup(e){return{classes:M(()=>te(e.color,e.name,e.size,v(e.primary,"primary"),v(e.secondary,"secondary"),v(e.bordered,"bordered"),v(e.circular,"circular"),v(e.colored,"colored"),v(e.disabled,"disabled"),v(e.fitted,"fitted"),v(e.inverted,"inverted"),v(e.link,"link"),v(e.loading,"loading"),Pe(e.flipped,"flipped"),Pe(e.rotated,"rotated"),Ie(e.corner,"corner"),"icon"))}},render(){let e=this.$props.as||"i";return ee(e,{"aria-hidden":!0,class:this.classes})}}),a_=F({props:{index:Number,title:String},setup(e){const i=Ve("isTabActive"),a=Ve("updateActiveIndex"),o=M(()=>te(v(i(e.index),"active"),"title"));return{isTabActive:i,updateActiveIndex:a,titleClass:o}},render(){return t(Ce,null,[t("div",{class:this.titleClass,onClick:()=>this.updateActiveIndex(this.index)},[t(J,{name:"dropdown"},null),this.title]),t(ed,{active:this.isTabActive(this.index)},{default:()=>{var e,i;return[(i=(e=this.$slots).default)==null?void 0:i.call(e)]}})])}}),n_=F({props:{active:Boolean},setup(e){return{computedClass:M(()=>te(v(e.active,"active"),"title"))}},render(){var e,i;return ee("div",{class:this.computedClass},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),o_={install(e){e.component("SuiAccordion",i_),e.component("SuiAccordionAccordion",l_),e.component("SuiAccordionContent",ed),e.component("SuiAccordionTab",a_),e.component("SuiAccordionTitle",n_)}},s_=F({props:{centered:Boolean,test:String,unit:String},setup(e){return{computedClass:M(()=>te("ui",e.unit,v(e.centered,"centered"),v(!!e.test,"test"),"ad"))}},render(){var e,i,a,o;return this.$props.test?ee("div",{class:this.computedClass,"data-text":this.$props.test},(i=(e=this.$slots).default)==null?void 0:i.call(e)):ee("div",{class:this.computedClass},(o=(a=this.$slots).default)==null?void 0:o.call(a))}}),r_={install(e){e.component("SuiAdvertisement",s_)}},Tt=F({props:{icon:String},setup(e){return{computedClass:M(()=>te(e.icon,"icon","divider"))}},render(){var e,i;return this.icon?t("i",{"aria-hidden":"true",class:this.computedClass},null):t("div",{class:"divider"},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),et=F({props:{active:Boolean,href:String,link:Boolean,to:String},setup(e){const i=M(()=>te(v(e.active,"active"),"section")),a=e.link||!!e.href;return{computedClass:i,isLink:a}},render(){let e="div";this.isLink?e="a":this.to&&(e=B("router-link"));const i={href:this.href,to:this.to};return t(e,Zi({class:this.computedClass},i),{default:()=>{var a,o;return[(o=(a=this.$slots).default)==null?void 0:o.call(a)]}})}}),ni=F({props:{icon:String,inverted:Boolean,sections:{type:Array,default:()=>[]},size:String},setup(e){return{computedClass:M(()=>te("ui",e.size,v(e.inverted,"inverted"),"breadcrumb"))}},render(){var e,i;const a=()=>{var o;return(o=this.sections)==null?void 0:o.map((s,c)=>{const d={active:s.active,href:s.href,link:s.link,to:s.to};return t(Ce,null,[t(et,d,{default:()=>[s.content]}),this.sections.length!==c+1&&t(Tt,{icon:this.icon},{default:()=>[n(" / ")]})])})};return t("div",{class:this.computedClass},[((i=(e=this.$slots).default)==null?void 0:i.call(e))||a()])}}),u_={install(e){e.component("SuiBreadcrumb",ni),e.component("SuiBreadcrumbDivider",Tt),e.component("SuiBreadcrumbSection",et)}},Ri=F({props:{as:String,size:String},setup(e){return{computedClass:M(()=>te(e.size,"icons"))}},render(){var e,i;let a=this.$props.as||"i";return ee(a,{class:this.computedClass},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),c_={install(e){e.component("SuiIcon",J),e.component("SuiIconGroup",Ri)}},d_=()=>({icon:[Boolean,String]}),p_=e=>({iconClasses:M(()=>typeof e.icon=="boolean"&&e.icon||e.labeled&&e.icon?"icon":te({icon:e.icon&&!e.content}))}),m_=["right","left"],f_=()=>({labeled:[Boolean,String]}),g_=e=>({labeledClasses:M(()=>typeof e.labeled=="boolean"&&e.labeled?"labeled":m_.includes(e.labeled)?`${e.labeled} labeled`:"")}),h_=["double","usual double","elastic"],td=()=>({loading:{type:[Boolean,String],validator:e=>h_.includes(e)||typeof e=="boolean"}}),id=e=>({loadingClasses:M(()=>te(e.loading,{loading:e.loading}))}),P=F({props:{active:Boolean,animated:[Boolean,String],as:{type:String,default:"button"},attached:String,basic:Boolean,circular:Boolean,color:String,compact:Boolean,content:[String,Array],disabled:Boolean,facebook:Boolean,floated:String,fluid:Boolean,google:Boolean,linkedin:Boolean,instagram:Boolean,inverted:Boolean,negative:Boolean,positive:Boolean,primary:Boolean,secondary:Boolean,size:String,telegram:Boolean,tertiary:Boolean,toggle:Boolean,twitter:Boolean,vk:Boolean,whatsapp:Boolean,youtube:Boolean,...d_(),...f_(),...td()},setup(e){const{iconClasses:i}=p_(e),{labeledClasses:a}=g_(e),{loadingClasses:o}=id(e);return{classes:M(()=>te("ui",e.color,e.size,v(e.active,"active"),v(e.basic,"basic"),v(e.circular,"circular"),v(e.compact,"compact"),v(e.disabled,"disabled"),v(e.facebook,"facebook"),v(e.fluid,"fluid"),v(e.google,"google"),v(e.linkedin,"linkedin"),v(e.instagram,"instagram"),v(e.inverted,"inverted"),v(e.negative,"negative"),v(e.positive,"positive"),v(e.primary,"primary"),v(e.secondary,"secondary"),v(e.telegram,"telegram"),v(e.tertiary,"tertiary"),v(e.toggle,"toggle"),v(e.twitter,"twitter"),v(e.vk,"vk"),v(e.whatsapp,"whatsapp"),v(e.youtube,"youtube"),Pe(e.attached,"attached"),Pe(e.floated,"floated"),Ie(e.animated,"animated"),i.value,a.value,o.value,"button"))}},render(){var e,i;const a=this.attached?"div":this.as;return ee(a,{class:this.classes,role:"button"},[typeof this.icon=="string"&&ee(J,{name:this.icon}),this.content||((i=(e=this.$slots).default)==null?void 0:i.call(e))])}}),Li=F({props:{hidden:Boolean,visible:Boolean},setup(e){return{computedClass:M(()=>te(v(e.hidden,"hidden"),v(e.visible,"visible"),"content"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),ft=F({props:{attached:String,basic:Boolean,color:String,icon:Boolean,labeled:Boolean,size:String,vertical:Boolean,widths:Number},setup(e){return{computedClass:M(()=>te("ui",e.color,e.size,v(e.basic,"basic"),v(e.icon,"icon"),v(e.labeled,"labeled"),v(e.vertical,"vertical"),Pe(e.attached,"attached"),ri(e.widths,""),"buttons"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),__={install(e){e.component("SuiButton",P),e.component("SuiButtonContent",Li),e.component("SuiButtonGroup",ft)}},b_=(e,i,a)=>{e.clickOutside=o=>{e===o.target||e.contains(o.target)||i.value(o,e)},document.body.addEventListener("click",e.clickOutside)},v_=(e,i,a)=>{document.body.removeEventListener("click",e.clickOutside)},fs={mounted:b_,unmounted:v_};function S_(e,i={}){const a=j(e.value?"open":"closed"),o=()=>a.value=e.value?"open":"closed";pt(e,f=>{a.value=f?"opening":"closing"});const s=f=>{f.addEventListener("animationend",o,!0)},c=f=>{f&&f.removeEventListener("animationend",o)},d=M((f="scale")=>{switch(a.value){case"opening":return`animating ${f} in`;case"open":return"visible active";case"closing":return`visible active animating ${f} out`;case"closed":return"hidden"}});return{setupAnimation:s,removeAnimation:c,computeAnimationClass:d}}const y_=F({name:"SuiCalendarDay",emits:["select-day"],props:{active:Boolean,date:null,disabled:Boolean,onSelectDay:Function},setup(e,{emit:i}){const a=j(!1),o=()=>{e.disabled||(a.value=!0)},s=()=>a.value=!1,c=()=>{e.disabled||i("select-day",e.date)},d=()=>{let u=new Date;return u.getFullYear()===e.date.year&&u.getMonth()===e.date.month&&u.getDate()===e.date.day},f=M(()=>te("link",v(a.value,"focus"),v(e.active&&!e.disabled,"active"),v(e.disabled,"adjacent disabled"),v(d(),"today")));return{onMouseEnter:o,onMouseLeave:s,onClick:c,computedClass:f}},render(){var e,i;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:It(this.onClick,["stop"])},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),w_=F({name:"SuiCalendarDateTable",setup(){const{calendarDays:e,updateSelectMode:i,set:a,add:o,subtract:s,selectedDate:c,setSelectedDate:d,selectType:f,updateVisible:u,formatDate:p}=Ve(xi);return{calendarDays:e,isEqualDay:g=>{if(!c.value)return!1;const m=c.value;return m.getFullYear()===g.year&&m.getMonth()===g.month&&m.getDate()===g.day},onSelectDay:g=>{if(a(g.year,"years"),a(g.month,"months"),a(g.day,"days"),f.value==="date"){let m=new Date(g.year,g.month,g.day);d(m),u(!1);return}i("hour")},updateSelectMode:i,formatDate:p,add:o,subtract:s}},render(){const e=()=>this.calendarDays.map((i,a)=>t("tr",null,[i.map(o=>t(y_,{active:this.isEqualDay(o),date:o,disabled:!o.currentMonth,onSelectDay:this.onSelectDay},{default:()=>[o.day]}))]));return t("table",{class:"ui celled center aligned unstackable table day seven column"},[t("thead",null,[t("tr",null,[t("th",{colspan:7},[t("span",{class:"link",onClick:It(()=>this.updateSelectMode("month"),["stop"])},[this.formatDate("date")]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"months")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"months")},[t("i",{class:"chevron right icon"},null)])])]),t("tr",null,[t("th",null,[n("S")]),t("th",null,[n("M")]),t("th",null,[n("T")]),t("th",null,[n("W")]),t("th",null,[n("T")]),t("th",null,[n("F")]),t("th",null,[n("S")])])]),t("tbody",null,[e()])])}}),Se=F({name:"SuiCalendarTableCell",emits:["click-cell"],props:{active:Boolean,today:Boolean,value:null,onClickCell:Function},setup(e){const i=j(!1),a=()=>i.value=!0,o=()=>i.value=!1,s=M(()=>te("link",v(e.active,"active"),v(e.today,"today"),v(i.value,"focus")));return{onMouseEnter:a,onMouseLeave:o,computedClass:s}},render(){var e,i;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:It(()=>this.$emit("click-cell",this.value),["stop"])},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),C_=F({name:"SuiCalendarMonthTable",setup(){const{state:e,set:i,add:a,subtract:o,selectedDate:s,updateSelectMode:c}=Ve(xi);return{state:e,add:a,subtract:o,updateSelectMode:c,isActive:d=>s.value?e.year===s.value.getFullYear()&&e.month===d:!1,isThisMonth:d=>{let f=new Date;return d===f.getMonth()&&e.year===f.getFullYear()},onClickCell:d=>{i(d,"months"),c("day")}}},render(){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i=()=>Array(4).fill(0).map((a,o)=>t("tr",null,[t(Se,{value:o*3,active:this.isActive(o*3),today:this.isThisMonth(o*3),onClickCell:this.onClickCell},{default:()=>[e[o*3]]}),t(Se,{value:o*3+1,active:this.isActive(o*3+1),today:this.isThisMonth(o*3+1),onClickCell:this.onClickCell},{default:()=>[e[o*3+1]]}),t(Se,{value:o*3+2,active:this.isActive(o*3+2),today:this.isThisMonth(o*3+2),onClickCell:this.onClickCell},{default:()=>[e[o*3+2]]})]));return t("table",{class:"ui celled center aligned unstackable table month three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:It(()=>this.updateSelectMode("year"),["stop"])},[this.state.year]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"years")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"years")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[i()])])}}),A_=F({name:"SuiCalendarYearTable",setup(e){const{state:i,set:a,add:o,subtract:s,selectedDate:c,updateSelectMode:d}=Ve(xi),f=()=>o(10,"years"),u=()=>s(10,"years"),p=M(()=>Math.round(i.year/10)*10+1);return{updateSelectMode:d,moveNextTwelveYears:f,movePrevTwelveYears:u,headerStartYear:p,isActive:g=>c.value?g===c.value.getFullYear():!1,isThisYear:g=>g===new Date().getFullYear(),onClickCell:g=>{a(g,"years"),d("day")}}},render(){return t("table",{class:"ui celled center aligned unstackable table year three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:It(()=>this.updateSelectMode("day"),["stop"])},[this.headerStartYear,n(" - "),this.headerStartYear+11]),t("span",{class:"prev link",onClick:this.movePrevTwelveYears},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.moveNextTwelveYears},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(Se,{value:this.headerStartYear,active:this.isActive(this.headerStartYear),today:this.isThisYear(this.headerStartYear),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear]}),t(Se,{value:this.headerStartYear+1,active:this.isActive(this.headerStartYear+1),today:this.isThisYear(this.headerStartYear+1),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+1]}),t(Se,{value:this.headerStartYear+2,active:this.isActive(this.headerStartYear+2),today:this.isThisYear(this.headerStartYear+2),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+2]})]),t("tr",null,[t(Se,{value:this.headerStartYear+3,active:this.isActive(this.headerStartYear+3),today:this.isThisYear(this.headerStartYear+3),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+3]}),t(Se,{value:this.headerStartYear+4,active:this.isActive(this.headerStartYear+4),today:this.isThisYear(this.headerStartYear+4),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+4]}),t(Se,{value:this.headerStartYear+5,active:this.isActive(this.headerStartYear+5),today:this.isThisYear(this.headerStartYear+5),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+5]})]),t("tr",null,[t(Se,{value:this.headerStartYear+6,active:this.isActive(this.headerStartYear+6),today:this.isThisYear(this.headerStartYear+6),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+6]}),t(Se,{value:this.headerStartYear+7,active:this.isActive(this.headerStartYear+7),today:this.isThisYear(this.headerStartYear+7),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+7]}),t(Se,{value:this.headerStartYear+8,active:this.isActive(this.headerStartYear+8),today:this.isThisYear(this.headerStartYear+8),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+8]})]),t("tr",null,[t(Se,{value:this.headerStartYear+9,active:this.isActive(this.headerStartYear+9),today:this.isThisYear(this.headerStartYear+9),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+9]}),t(Se,{value:this.headerStartYear+10,active:this.isActive(this.headerStartYear+10),today:this.isThisYear(this.headerStartYear+10),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+10]}),t(Se,{value:this.headerStartYear+11,active:this.isActive(this.headerStartYear+11),today:this.isThisYear(this.headerStartYear+11),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+11]})])])])}}),x_=F({name:"SuiCalendarHourTable",setup(){const{updateSelectMode:e,state:i,set:a,add:o,subtract:s,formatDate:c,selectedDate:d}=Ve(xi);return{updateSelectMode:e,formatDate:c,onPrevClick:()=>s(1,"days"),onNextClick:()=>o(1,"days"),onClickCell:f=>{a(f,"hours"),e("minute")},isActive:f=>{if(!d.value)return!1;let u=d.value.getFullYear(),p=d.value.getMonth(),g=d.value.getDate(),m=d.value.getHours();return i.year===u&&i.month===p&&i.day===g&&f===m}}},render(){return t("table",{class:"ui celled center aligned unstackable table hour four column"},[t("thead",null,[t("tr",null,[t("th",{colspan:4},[t("span",{class:"link",onClick:It(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:this.onPrevClick},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.onNextClick},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(Se,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},{default:()=>[n("12:00 AM")]}),t(Se,{active:this.isActive(1),value:1,onClickCell:this.onClickCell},{default:()=>[n("1:00 AM")]}),t(Se,{active:this.isActive(2),value:2,onClickCell:this.onClickCell},{default:()=>[n("2:00 AM")]}),t(Se,{active:this.isActive(3),value:3,onClickCell:this.onClickCell},{default:()=>[n("3:00 AM")]})]),t("tr",null,[t(Se,{active:this.isActive(4),value:4,onClickCell:this.onClickCell},{default:()=>[n("4:00 AM")]}),t(Se,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},{default:()=>[n("5:00 AM")]}),t(Se,{active:this.isActive(6),value:6,onClickCell:this.onClickCell},{default:()=>[n("6:00 AM")]}),t(Se,{active:this.isActive(7),value:7,onClickCell:this.onClickCell},{default:()=>[n("7:00 AM")]})]),t("tr",null,[t(Se,{active:this.isActive(8),value:8,onClickCell:this.onClickCell},{default:()=>[n("8:00 AM")]}),t(Se,{active:this.isActive(9),value:9,onClickCell:this.onClickCell},{default:()=>[n("9:00 AM")]}),t(Se,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},{default:()=>[n("10:00 AM")]}),t(Se,{active:this.isActive(11),value:11,onClickCell:this.onClickCell},{default:()=>[n("11:00 AM")]})]),t("tr",null,[t(Se,{active:this.isActive(12),value:12,onClickCell:this.onClickCell},{default:()=>[n("12:00 PM")]}),t(Se,{active:this.isActive(13),value:13,onClickCell:this.onClickCell},{default:()=>[n("1:00 PM")]}),t(Se,{active:this.isActive(14),value:14,onClickCell:this.onClickCell},{default:()=>[n("2:00 PM")]}),t(Se,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},{default:()=>[n("3:00 PM")]})]),t("tr",null,[t(Se,{active:this.isActive(16),value:16,onClickCell:this.onClickCell},{default:()=>[n("4:00 PM")]}),t(Se,{active:this.isActive(17),value:17,onClickCell:this.onClickCell},{default:()=>[n("5:00 PM")]}),t(Se,{active:this.isActive(18),value:18,onClickCell:this.onClickCell},{default:()=>[n("6:00 PM")]}),t(Se,{active:this.isActive(19),value:19,onClickCell:this.onClickCell},{default:()=>[n("7:00 PM")]})]),t("tr",null,[t(Se,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},{default:()=>[n("8:00 PM")]}),t(Se,{active:this.isActive(21),value:21,onClickCell:this.onClickCell},{default:()=>[n("9:00 PM")]}),t(Se,{active:this.isActive(22),value:22,onClickCell:this.onClickCell},{default:()=>[n("10:00 PM")]}),t(Se,{active:this.isActive(23),value:23,onClickCell:this.onClickCell},{default:()=>[n("11:00 PM")]})])])])}});function Ft(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ct(e)}const k_=F({name:"SuiCalendarMinuteTable",setup(){const{state:e,set:i,add:a,subtract:o,formatDate:s,updateSelectMode:c,updateVisible:d,selectedDate:f}=Ve(xi);return{add:a,subtract:o,formatDate:s,updateSelectMode:c,getTimeLabel:u=>{let p=e.hour%12,g=e.hour>12?"PM":"AM",m=u.toString().padStart(2,"0");return e.hour===0?`12:${m} AM`:e.hour===12?`12:${m} PM`:`${p}:${m} ${g}`},onClickCell:u=>{i(u,"minutes"),f.value=new Date(e.year,e.month,e.day,e.hour,e.minute),d(!1)},isActive:u=>{if(!f.value)return!1;let p=f.value.getFullYear(),g=f.value.getMonth(),m=f.value.getDate(),_=f.value.getHours(),w=f.value.getMinutes();return e.year===p&&e.month===g&&e.day===m&&e.hour===_&&u===w}}},render(){let e,i,a,o,s,c,d,f,u,p,g,m;return t("table",{class:"ui celled center aligned unstackable table minute three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:It(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"days")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"days")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(Se,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},Ft(e=this.getTimeLabel(0))?e:{default:()=>[e]}),t(Se,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},Ft(i=this.getTimeLabel(5))?i:{default:()=>[i]}),t(Se,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},Ft(a=this.getTimeLabel(10))?a:{default:()=>[a]})]),t("tr",null,[t(Se,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},Ft(o=this.getTimeLabel(15))?o:{default:()=>[o]}),t(Se,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},Ft(s=this.getTimeLabel(20))?s:{default:()=>[s]}),t(Se,{active:this.isActive(25),value:25,onClickCell:this.onClickCell},Ft(c=this.getTimeLabel(25))?c:{default:()=>[c]})]),t("tr",null,[t(Se,{active:this.isActive(30),value:30,onClickCell:this.onClickCell},Ft(d=this.getTimeLabel(30))?d:{default:()=>[d]}),t(Se,{active:this.isActive(35),value:35,onClickCell:this.onClickCell},Ft(f=this.getTimeLabel(35))?f:{default:()=>[f]}),t(Se,{active:this.isActive(40),value:40,onClickCell:this.onClickCell},Ft(u=this.getTimeLabel(40))?u:{default:()=>[u]})]),t("tr",null,[t(Se,{active:this.isActive(45),value:45,onClickCell:this.onClickCell},Ft(p=this.getTimeLabel(45))?p:{default:()=>[p]}),t(Se,{active:this.isActive(50),value:50,onClickCell:this.onClickCell},Ft(g=this.getTimeLabel(50))?g:{default:()=>[g]}),t(Se,{active:this.isActive(55),value:55,onClickCell:this.onClickCell},Ft(m=this.getTimeLabel(55))?m:{default:()=>[m]})])])])}}),B_=F({name:"SuiCalendarBody",setup(){const e=j(null),{visible:i,selectMode:a}=Ve(xi),{setupAnimation:o,removeAnimation:s,computeAnimationClass:c}=S_(i);Ai(()=>o(e.value)),Qi(()=>s(e.value));const d=M(()=>te("ui popup calendar","bottom left","transition",c.value));return{rootRef:e,computedClass:d,selectMode:a}},render(){const e=()=>{switch(this.selectMode){case"day":return t(w_,null,null);case"month":return t(C_,null,null);case"year":return t(A_,null,null);case"hour":return t(x_,null,null);case"minute":return t(k_,null,null)}};return t("div",{ref:i=>this.rootRef=i,class:this.computedClass,style:"inset: 38px auto auto 0px;"},[e()])}}),$_=F({name:"SuiCalendarInput",props:{placeholder:String,value:null},setup(e){const{visible:i,updateVisible:a,updateSelectMode:o,set:s,state:c,formatCalendarDate:d}=Ve(xi);return{visible:i,formatCalendarDate:d,onClick:()=>{i.value||(o("day"),e.value&&(s(e.value.getFullYear(),"years"),s(e.value.getMonth(),"months"))),a(!i.value)}}},render(){return t("input",{type:"text",placeholder:this.placeholder,value:this.formatCalendarDate(this.value),onClick:()=>this.onClick()},null)}}),T_=(e,i)=>{let a=new Date;a.setDate(1),a.setMonth(i),a.setFullYear(e);let o=a.getDay();return o>=7?o-7:o},D_=(e,i)=>{let a,o;return i===0?(a=11,o=e-1):(a=i-1,o=e),32-new Date(o,a,32).getDate()},Mn=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e];function L_(){const e=j(!1),i=(A=!1)=>e.value=A,a=new Date;function o(A){if(!A)return;let T=A.getFullYear(),L=Mn(A.getMonth()),h=A.getDate(),b=A.getHours(),C=A.getMinutes(),$=b>11?"PM":"AM";b=b%12,b===0&&(b=12);let E=C.toString().padStart(2,"0");return`${L} ${h}, ${T} ${b}:${E} ${$}`}const s=j("default"),c=j("day");function d(A){c.value=A}const f=j(null),u=A=>{f.value=A},p=oi({year:a.getFullYear(),month:a.getMonth(),day:a.getDate(),hour:a.getHours(),minute:a.getMinutes()}),g=(A,T)=>{switch(T){case"years":p.year=A;break;case"months":p.month=A;break;case"days":p.day=A;break;case"hours":p.hour=A;break;case"minutes":p.minute=A}},m=(A,T)=>{let L=new Date(p.year,p.month,p.day,p.hour);switch(T){case"years":L.setFullYear(L.getFullYear()+A);break;case"months":L.setMonth(L.getMonth()+A);break;case"days":L.setDate(L.getDate()+A);break;case"hours":L.setHours(L.getHours()+A);break}p.year=L.getFullYear(),p.month=L.getMonth(),p.day=L.getDate(),p.hour=L.getHours()},_=(A,T)=>{let L=new Date(p.year,p.month,p.day,p.hour);switch(T){case"years":L.setFullYear(L.getFullYear()-A);break;case"months":L.setMonth(L.getMonth()-A);break;case"days":L.setDate(L.getDate()-A);break;case"hours":L.setHours(L.getHours()-A);break}p.year=L.getFullYear(),p.month=L.getMonth(),p.day=L.getDate(),p.hour=L.getHours()},w=(A="default")=>A==="date"?`${Mn(p.month)} ${p.year}`:`${Mn(p.month)} ${p.day}, ${p.year}`,S=M(()=>{let A=p.month,T=p.year;A>11&&(A=A%11-1,T+=1);let L=[],h=T_(T,A),b=32-new Date(T,A,32).getDate(),C=D_(T,A),$=1;for(let E=0;E<6;E++){let V=[];if(E===0){for(let z=C-h+1;z<=C;z++){let G=A===0?11:A-1,X=A===0?T-1:T;V.push({day:z,month:G,year:X,currentMonth:!1})}let N=7-V.length;for(let z=0;z<N;z++)V.push({day:$,month:A,year:T,currentMonth:!0}),$++}else for(let N=0;N<7;N++){if($>b){let z=A===11?0:A+1,G=A===11?T+1:T;V.push({day:$-b,month:z,year:G,currentMonth:!1})}else V.push({day:$,month:A,year:T,currentMonth:!0});$++}L.push(V)}return L});return{visible:e,updateVisible:i,calendarDays:S,formatCalendarDate:o,selectMode:c,updateSelectMode:d,selectType:s,selectedDate:f,setSelectedDate:u,state:p,set:g,add:m,subtract:_,formatDate:w}}const xi=Symbol("useCalendar"),I_=F({directives:{clickoutside:fs},emits:["update:modelValue"],props:{modelValue:null,placeholder:String},setup(e,{emit:i}){const a=L_();ut(xi,a);const{updateVisible:o,selectedDate:s}=a;return pt(s,c=>{i("update:modelValue",c)}),{updateVisible:o}},render(){return Si(t("div",{class:"ui calendar"},[t("div",{class:"ui input left icon"},[t(B_,null,null),t("i",{class:"calendar icon"},null),t($_,{placeholder:this.placeholder,value:this.modelValue},null)])]),[[pn("clickoutside"),()=>this.updateVisible(!1)]])}}),E_={install:e=>{e.component("SuiCalendar",I_)}},R_=["mini","tiny","small","medium","large","big","huge","massive"],Dl=()=>({size:{type:String,validator:e=>R_.includes(e)}}),Ll=e=>({sizeClass:M(()=>e.size)}),P_=F((e,{slots:i})=>{const{loadingClasses:a}=id(e),{sizeClass:o}=Ll(e),s=M(()=>te("ui",e.color,v(e.centered,"centered"),v(e.disabled,"disabled"),v(e.fluid,"fluid"),v(e.horizontal,"horizontal"),v(e.link,"link"),v(e.primary,"primary"),v(e.raised,"raised"),v(e.secondary,"secondary"),a.value,o.value,"card"));return()=>{var c,d;return e.href||e.link?t("a",{class:s.value,href:e.href},[(c=i.default)==null?void 0:c.call(i)]):t("div",{class:s.value},[(d=i.default)==null?void 0:d.call(i)])}},{props:{centered:Boolean,color:String,disabled:Boolean,fluid:Boolean,horizontal:Boolean,href:String,link:Boolean,primary:Boolean,raised:Boolean,secondary:Boolean,...td(),...Dl()}}),z_=F((e,{slots:i})=>{const a=M(()=>te(v(e.extra,"extra"),"content"));return()=>{var o,s,c,d;return t("div",{class:a.value},[e.header&&t("div",{class:"header"},[e.header]),i.header&&t("div",{class:"header"},[(o=i.header)==null?void 0:o.call(i)]),i.meta&&t("div",{class:"meta"},[(s=i.meta)==null?void 0:s.call(i)]),i.description&&t("div",{class:"description"},[(c=i.description)==null?void 0:c.call(i)]),(d=i.default)==null?void 0:d.call(i)])}},{props:{extra:Boolean,header:String}}),F_=F({props:{textAlign:String},setup(e){return{computedClass:M(()=>te(Pe(e.textAlign,"aligned"),"description"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),V_=F({props:{basic:Boolean,centered:Boolean,doubling:Boolean,horizontal:Boolean,inverted:Boolean,itemsPerRow:Number,stackable:Boolean},setup(e){return{classes:M(()=>te("ui",v(e.basic,"basic"),v(e.centered,"centered"),v(e.doubling,"doubling"),v(e.horizontal,"horizontal"),v(e.inverted,"inverted"),v(e.stackable,"stackable"),ri(e.itemsPerRow,""),"cards"))}},render(){var e,i;return t("div",{class:this.classes},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),M_=F({props:{textAlign:String},setup(e){return{computedClass:M(()=>te(Pe(e.textAlign,"aligned"),"header"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),N_=F({render(){var e,i;return ee("div",{class:"meta"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),H_={install(e){e.component("SuiCard",P_),e.component("SuiCardContent",z_),e.component("SuiCardDescription",F_),e.component("SuiCardGroup",V_),e.component("SuiCardHeader",M_),e.component("SuiCardMeta",N_)}},ld=F({emits:["update:modelValue","change","click"],props:{disabled:Boolean,indeterminate:Boolean,label:String,modelValue:null,radio:Boolean,readOnly:Boolean,slider:Boolean,toggle:Boolean,value:null},setup(e,{emit:i}){const a=M(()=>te("ui",!e.label&&"fitted",v(e.disabled,"disabled"),v(e.indeterminate,"indeterminate"),v(e.radio,"radio"),v(e.readOnly,"read-only"),v(e.slider,"slider"),v(e.toggle,"toggle"),"checkbox")),o=M(()=>Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue);return{computedClass:a,checked:o,onClick:s=>{if(e.disabled||e.readOnly)return;let c;e.value?o.value?c=e.modelValue.filter(d=>e.value!==d):c=e.modelValue?[...e.modelValue,e.value]:[e.value]:c=!e.modelValue,i("change",s),i("click",s),i("update:modelValue",c)}}},render(){return t("div",{class:this.computedClass,onClick:this.onClick},[t("input",{type:this.radio?"radio":"checkbox",class:"hidden",checked:this.checked,readonly:!0},null),t("label",null,[this.label])])}}),O_={install(e){e.component("SuiCheckbox",ld)}},ad=F({name:"SuiCommentAvatar",props:{as:String,src:String},render(){let e=this.$props.as||"div";return this.src?ee(e,{class:"avatar"},ee("img",{src:this.$props.src})):t("div",{class:"avatar"},[this.$slots.default&&this.$slots.default()])}});function q_(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ct(e)}const G_=F({name:"SuiComment",render(){let e;return t("div",{class:"comment"},[this.$slots.avatar&&t(ad,{as:"a"},q_(e=this.$slots.avatar())?e:{default:()=>[e]}),t("div",{class:"content"},[this.$slots.author&&t("a",{class:"author"},[this.$slots.author()]),this.$slots.metadata&&t("div",{class:"metadata"},[this.$slots.metadata()]),this.$slots.text&&t("div",{class:"text"},[this.$slots.text()]),this.$slots.actions&&t("div",{class:"actions"},[this.$slots.actions()])]),this.$slots.default&&this.$slots.default()])}}),j_=F({props:{active:Boolean},setup(e){const{active:i}=e;return{computedClass:M(()=>te(v(i,"active")))}},render(){var e,i,a,o;return this.computedClass?ee("a",{class:this.computedClass},(i=(e=this.$slots).default)==null?void 0:i.call(e)):ee("a",{},(o=(a=this.$slots).default)==null?void 0:o.call(a))}}),U_=F({render(){var e,i;return ee("div",{class:"actions"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Y_=F({props:{as:String},render(){var e,i;let a=this.$props.as||"div";return ee(a,{class:"author"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),J_=F({render(){var e,i;return ee("div",{class:"content"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),W_=F({props:{collapsed:Boolean,inverted:Boolean,minimal:Boolean,size:String,threaded:Boolean},setup(e){return{computedClass:M(()=>te("ui",e.size,v(e.collapsed,"collapsed"),v(e.inverted,"inverted"),v(e.minimal,"minimal"),v(e.threaded,"threaded"),"comments"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),K_=F({render(){var e,i;return ee("div",{class:"metadata"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),X_=F({render(){var e,i;return ee("div",{class:"text"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Q_={install(e){e.component("SuiComment",G_),e.component("SuiCommentAction",j_),e.component("SuiCommentActions",U_),e.component("SuiCommentAuthor",Y_),e.component("SuiCommentAvatar",ad),e.component("SuiCommentContent",J_),e.component("SuiCommentGroup",W_),e.component("SuiCommentMetadata",K_),e.component("SuiCommentText",X_)}},Ni=F({props:{fluid:Boolean,text:Boolean,textAlign:String},setup(e){return{computedClass:M(()=>te("ui",v(e.fluid,"fluid"),v(e.text,"text"),Tl(e.textAlign),"container"))}},render(){var e,i;return ee("div",{class:this.computedClass},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Z_={install(e){e.component("SuiContainer",Ni)}},Ut=F({props:{active:Boolean,inverted:Boolean,page:Boolean,simple:Boolean,verticalAlign:String},setup(e){return{computedClass:M(()=>te("ui",v(e.active,"active"),v(e.inverted,"inverted"),v(e.page,"page"),v(e.simple,"simple"),Pe(e.verticalAlign,"aligned"),"dimmer"))}},render(){var e,i;return ee("div",{class:this.computedClass},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),eb=F((e,{slots:i})=>{const a=M(()=>te("ui",v(e.blurring,"blurring"),"dimmable","segment"));return()=>{var o;return t("div",{class:a.value},[(o=i.default)==null?void 0:o.call(i)])}},{props:{blurring:Boolean}}),tb={install(e){e.component("SuiDimmer",Ut),e.component("SuiDimmerDimmable",eb)}},Fe=F({props:{clearing:Boolean,fitted:Boolean,hidden:Boolean,horizontal:Boolean,inverted:Boolean,section:Boolean,textAlign:String,vertical:Boolean,...Dl()},setup(e){const{sizeClass:i}=Ll(e);return{classes:M(()=>te("ui",i.value,v(e.clearing,"clearing"),v(e.fitted,"fitted"),v(e.hidden,"hidden"),v(e.horizontal,"horizontal"),v(e.inverted,"inverted"),v(e.section,"section"),v(e.vertical,"vertical"),Pe(e.textAlign,"aligned"),"divider"))}},render(){var e,i;return ee("div",{class:this.classes},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),ib={install(e){e.component("SuiDivider",Fe)}},lb=(e,i)=>e.map(a=>a[i]),nd=["top","middle","bottom"],ab={verticalAlign:{type:String,validator:e=>nd.includes(e)}};function nb(e){return{verticalAlignClass:M(()=>e.verticalAlign&&nd.includes(e.verticalAlign)?`${e.verticalAlign} aligned`:null)}}const ob=["left","right"],sb={floated:{type:String,validator:e=>ob.includes(e)}};function rb(e){return{floatedClass:M(()=>e.floated&&(e.floated==="left"||e.floated==="right")?`${e.floated} floated`:null)}}const O=F({props:{as:String,attached:String,basic:Boolean,circular:Boolean,color:String,corner:String,empty:Boolean,floating:Boolean,horizontal:Boolean,icon:String,image:Boolean,inverted:Boolean,pointing:[Boolean,String],prompt:Boolean,ribbon:[Boolean,String],size:String,tag:Boolean},setup(e,{slots:i}){const a=M(()=>te("ui",e.size,e.color,v(e.basic,"basic"),v(e.circular,"circular"),v(e.empty,"empty"),v(e.floating,"floating"),v(e.horizontal,"horizontal"),v(!!e.icon&&i.default===void 0,"icon"),v(e.image,"image"),v(e.inverted,"inverted"),v(e.prompt,"prompt"),v(e.tag,"tag"),Pe(e.attached,"attached"),Pe(e.corner,"corner"),Ie(e.pointing,"pointing"),Ie(e.ribbon,"ribbon"),"label"));let o=e.as||"div";return e.icon?()=>{var s;return ee(o,{class:a.value},[ee(J,{name:e.icon}),(s=i.default)==null?void 0:s.call(i)])}:()=>{var s;return ee(o,{class:a.value},(s=i.default)==null?void 0:s.call(i))}}}),Il=F({render(){var e,i;return t("div",{class:"detail"},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),El=F({props:{basic:Boolean,circular:Boolean,color:String,size:String,tag:Boolean},setup(e,{slots:i}){const a=M(()=>te("ui",e.color,e.size,v(e.basic,"basic"),v(e.circular,"circular"),v(e.tag,"tag"),"labels"));return()=>{var o;return ee("div",{class:a.value},(o=i.default)==null?void 0:o.call(i))}}}),ub={install(e){e.component("SuiLabel",O),e.component("SuiLabelDetail",Il),e.component("SuiLabelGroup",El)}},oe=F({props:{as:String,avatar:Boolean,bordered:Boolean,centered:Boolean,circular:Boolean,disabled:Boolean,fluid:Boolean,hidden:Boolean,href:String,inline:Boolean,label:Object,target:String,wrapped:Boolean,rounded:Boolean,size:String,spaced:[Boolean,String],src:String,...ab,...sb},setup(e,{slots:i}){const{verticalAlignClass:a}=nb(e),{floatedClass:o}=rb(e),s=M(()=>te("ui",e.size,a.value,o.value,v(e.avatar,"avatar"),v(e.bordered,"bordered"),v(e.centered,"centered"),v(e.circular,"circular"),v(e.disabled,"disabled"),v(e.fluid,"fluid"),v(e.hidden,"hidden"),v(e.inline,"inline"),v(e.rounded,"rounded"),Ie(e.spaced,"spaced"),"image"));if(e.as==="a"||e.as==="router-link"){let c=e.as;return e.as==="router-link"&&(c=B(e.as)),()=>{var d;return ee(c,{class:s.value,href:e.href,target:e.target&&e.target},ee("img",{src:e.src},(d=i.default)==null?void 0:d.call(i)))}}return e.wrapped?()=>{var c;return ee("div",{class:s.value},ee("img",{src:e.src},(c=i.default)==null?void 0:c.call(i)))}:e.label?()=>ee("div",{class:s.value},[ee("img",{src:e.src}),ee(O,{...e.label})]):()=>t("img",{class:s.value,src:e.src},null)}}),yo=F({props:{size:String},setup(e,{slots:i}){const a=M(()=>te("ui",e.size,"images"));return()=>{var o;return ee("div",{class:a.value},(o=i.default)==null?void 0:o.call(i))}}}),cb={install(e){e.component("SuiImage",oe),e.component("SuiImageGroup",yo)}},db=F({name:"SuiDropdownText",emits:["remove"],props:{clearable:Boolean,filtered:Boolean,icon:{type:String,default:"dropdown"},item:[Object,String],placeholder:String,text:String,onRemove:Function},setup(e){return{computedClass:M(()=>te(v(e.filtered,"filtered"),v(!e.text&&!e.item||Array.isArray(e.item)&&e.item.length===0,"default"),"text"))}},render(){var e,i;let a;if(this.item&&!Array.isArray(this.item))if(typeof this.item=="object"){const{flag:c,text:d}=this.item;a=t(Ce,null,[c&&t("i",{class:`${c} flag`},null),d])}else a=this.item;else a=this.text||this.placeholder;const o=typeof this.item=="object"?(e=this.item)==null?void 0:e.image:null,s=typeof this.item=="object"?(i=this.item)==null?void 0:i.label:null;return t(Ce,null,[t("div",{class:this.computedClass},[o&&t(oe,o,null),s&&t(O,s,null),a]),t("i",{class:`${this.icon} icon`},null),this.$props.clearable&&t("i",{class:"remove icon",onClick:It(()=>this.$emit("remove"),["stop"])},null)])}}),pb=e=>{const i=oi({visible:!1,animating:!1,direction:"down",multiple:e.multiple});return pt(()=>i.visible,()=>{i.animating=!0,setTimeout(()=>i.animating=!1,200)}),{state:i,show:()=>!i.animating&&(i.visible=!0),hide:()=>{i.animating||(i.visible=!1)}}};function mb(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ct(e)}const fb=F({directives:{clickoutside:fs},emits:["update:modelValue"],props:{button:Boolean,clearable:Boolean,compact:Boolean,floating:Boolean,fluid:Boolean,icon:String,inline:Boolean,item:Boolean,labeled:Boolean,modelValue:[Object,String],multiple:Boolean,options:Array,placeholder:String,pointing:[Boolean,String],scrolling:Boolean,selection:Boolean,search:Boolean,searchInMenu:Boolean,simple:Boolean,text:String},setup(e,{emit:i}){const a=pb(e);ut("useDropdown",a);const{state:o,show:s,hide:c}=a,d=M(()=>te("ui",v(e.button,"button"),v(e.clearable,"clearable"),v(e.compact,"compact"),v(e.floating,"floating"),v(e.fluid,"fluid"),v(!!e.icon,"icon"),v(e.inline,"inline"),v(e.item,"item"),v(e.labeled,"labeled"),v(e.multiple,"multiple"),v(e.search,"search"),v(e.scrolling,"scrolling"),v(e.selection,"selection"),v(e.simple,"simple"),Ie(e.pointing,"pointing"),"dropdown",v(o.visible,"active visible"),v(o.direction==="up","upward"))),f=()=>{var T;if(o.visible)return c();(T=_.value)==null||T.focus(),s()},u=()=>{e.search&&_.value&&_.value.focus(),s()},p=()=>c(),g=j(""),m=M(()=>{const T=g.value.toLowerCase();return e.options.filter(L=>{const h=typeof L=="object"?L.text:L,b=h.toLowerCase().includes(T);if(!e.multiple)return b;if(Array.isArray(e.modelValue)){const C=typeof L=="object"?lb(e.modelValue,"text").includes(h):e.modelValue.includes(h);return b&&!C}return b})}),_=j(null),w=T=>g.value=T.target.value,S=T=>{var L;if(g.value="",e.search&&((L=_.value)==null||L.focus()),e.multiple){let h=Array.isArray(e.modelValue)?[...e.modelValue,T]:[T];return i("update:modelValue",h)}return i("update:modelValue",T)},A=T=>{if(Array.isArray(e.modelValue)){const L=e.modelValue.findIndex(h=>h===T);if(L>-1){let h=Object.assign(e.modelValue);h.splice(L,1),i("update:modelValue",h)}}};return ut("selection",e.selection),{computedClass:d,onClick:f,openMenu:u,closeMenu:p,filteredText:g,filteredOptions:m,inputRef:_,onInput:w,onSelect:S,removeItem:A}},render(){var e,i;const a=()=>{if(Array.isArray(this.$props.modelValue))return this.$props.modelValue.map(d=>typeof d=="object"?t("a",{class:"ui label"},[d.flag&&t("i",{class:`${d.flag} flag`},null),d.text,t("i",{class:"delete icon",onClick:It(()=>this.removeItem(d),["stop"])},null)]):t("a",{class:"ui label"},[d,t("i",{class:"delete icon",onClick:It(()=>this.removeItem(d),["stop"])},null)]))},o=()=>this.filteredOptions.filter(d=>this.$props.multiple&&Array.isArray(this.$props.modelValue)?!this.$props.modelValue.includes(d):!0).map(d=>t(od,{item:d,active:this.$props.modelValue&&typeof d=="object"?d.text===this.$props.modelValue.text:d===this.$props.modelValue,text:typeof d=="object"?d.text:d,flag:typeof d=="object"&&Object.keys(d).includes("flag")?d.flag:"",image:d.image,label:d.label,disabled:d.disabled,onSelect:this.onSelect},null)),s=()=>{let d={clearable:this.clearable,filtered:this.filteredText.length>0,icon:this.icon,item:this.modelValue,placeholder:this.placeholder,text:this.text};return t(db,Zi(d,{onRemove:()=>this.$emit("update:modelValue",null)}),null)},c=()=>{let d;return t(sd,{search:this.$props.searchInMenu,onSearch:this.onInput},mb(d=o())?d:{default:()=>[d]})};return Si(t("div",{class:this.computedClass,onClick:this.onClick},[this.$props.multiple&&a(),this.search&&t("input",{ref:d=>this.inputRef=d,type:"text",class:"search",autocomplete:"off",tabindex:0,value:this.filteredText,onInput:d=>this.onInput(d)},null),this.search&&this.multiple&&t("span",{class:"sizer"},null),s(),((i=(e=this.$slots).default)==null?void 0:i.call(e))||c()]),[[pn("clickoutside"),this.closeMenu]])}}),od=F({emits:["select"],props:{active:Boolean,flag:String,description:String,icon:String,image:Object,item:[Object,String],label:Object,text:String,disabled:Boolean,onSelect:Function},setup(e,{emit:i}){const{state:a,hide:o}=Ve("useDropdown");return{computedClass:M(()=>te(v(e.active,"active"),v(e.disabled,"disabled"),"item")),onClick:()=>{a.multiple||o(),i("select",e.item?e.item:e.text)}}},render(){return t("div",{class:this.computedClass,onClick:It(this.onClick,["stop"])},[this.flag&&t("i",{class:`${this.flag} flag`},null),this.icon&&t("i",{class:`${this.icon} icon`},null),this.image&&t(oe,this.image,null),this.label&&t(O,this.label,null),this.description&&t("span",{class:"description"},[this.description]),this.text])}}),sd=F({emits:["search"],props:{search:Boolean,onSearch:Function},setup(e,{emit:i,slots:a}){const{state:o}=Ve("useDropdown"),s=j(null),c=M(()=>{let f=()=>o.visible?`animating slide ${o.direction} in visible`:`animating slide ${o.direction} out visible`;return te("menu","transition",v(o.visible,"visible"),v(!o.visible&&!o.animating,"hidden"),v(o.animating,f()))});pt(()=>o.visible,f=>{if(!f||!s.value)return;let u=s.value.parentElement;const{top:p,height:g}=u==null?void 0:u.getBoundingClientRect(),m=p-d.value.length*37,_=document.documentElement.clientHeight-p-g-d.value.length*37;o.direction=m>_?"up":"down"});const d=M(()=>{var f;let u=[],p=(f=a.default)==null?void 0:f.call(a);return p&&p.forEach(g=>{g.type.name==="SuiSelectItem"&&u.push(g)}),u});return{container:s,computedClass:c,onSearchInput:f=>i("search",f)}},render(){var e,i,a,o;const s=()=>t(Ce,null,[t("div",{class:"ui left icon input",onClick:It(()=>{},["stop"])},[t("input",{type:"text",onInput:c=>this.onSearchInput(c)},null),t("i",{class:"search icon"},null)]),t("div",{class:"ui divider"},null)]);return t("div",{ref:c=>this.container=c,class:this.computedClass},[this.$slots.header&&t("div",{class:"header"},[(i=(e=this.$slots).header)==null?void 0:i.call(e)]),this.$props.search&&s(),(o=(a=this.$slots).default)==null?void 0:o.call(a)])}}),gb={install(e){e.component("SuiDropdown",fb),e.component("SuiDropdownItem",od),e.component("SuiDropdownMenu",sd)}},hb=F({props:{active:Boolean,aspectRatio:Boolean,autoplay:Boolean,id:String,placeholder:String,source:String,url:String},setup(e){const i=j(e.active),a=()=>{i.value=!i.value},o=()=>e.source==="youtube"?[`//www.youtube.com/embed/${e.id}`,"?autohide=true",`&amp;autoplay=${e.autoplay}`,"&amp;jsapi=false"].join(""):e.url,s=M(()=>te("ui",e.aspectRatio,v(i.value,"active"),"embed"));return{active:i,getSrc:o,clickHandler:a,computedClass:s}},render(){let e=[ee("i",{class:"video play icon"}),ee("img",{class:"placeholder",src:this.placeholder})];return this.active&&e.push(ee("div",{class:"embed"},ee("iframe",{src:this.getSrc()}))),ee("div",{class:this.computedClass,onClick:this.clickHandler},e)}}),_b={install(e){e.component("SuiEmbed",hb)}},Dt=F({props:{disabled:Boolean,link:Boolean,loading:Boolean,name:String,size:String},setup(e){return{computedClass:M(()=>te(e.size,v(e.disabled,"disabled"),v(e.link,"link"),v(e.loading,"loading")))}},render(){return this.computedClass?ee("em",{class:this.computedClass,"data-emoji":this.$props.name}):ee("em",{"data-emoji":this.$props.name})}}),bb={install(e){e.component("SuiEmoji",Dt)}},vb=F({props:{disabled:Boolean,inverted:Boolean,size:String},setup(e,{slots:i}){const a=M(()=>te("ui",e.size,v(e.disabled,"disabled"),v(e.inverted,"inverted"),"feed"));return()=>{var o;return ee("div",{class:a.value},(o=i.default)==null?void 0:o.call(i))}}}),Sb=F({render(){var e,i;return ee("div",{class:"content"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),yb=F({render(){var e,i;return ee("div",{class:"date"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),wb=F({props:{disabled:Boolean},setup(e,{slots:i}){const a=M(()=>te(v(e.disabled,"disabled"),"event"));return()=>{var o;return t("div",{class:a.value},[i.label&&t("div",{class:"label"},[i.label()]),(i.summary||i.meta)&&t("div",{class:"content"},[i.summary&&t("div",{class:"summary"},[i.summary()]),i.extraText&&t("div",{class:"extra text"},[i.extraText()]),i.extraImages&&t("div",{class:"extra images"},[i.extraImages()]),i.meta&&t("div",{class:"meta"},[i.meta()])]),(o=i.default)==null?void 0:o.call(i)])}}}),Cb=F({props:{images:Boolean,text:Boolean},setup(e){const{images:i,text:a}=e;return{computedClass:M(()=>te(v(i,"images"),v(a,"text"),"extra"))}},render(){var e,i;return ee("div",{class:this.computedClass},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Ab=F({render(){var e,i;return ee("div",{class:"label"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),xb=F({render(){var e,i;return ee("a",{class:"like"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),kb=F({render(){var e,i;return ee("div",{class:"meta"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Bb=F({render(){var e,i;return ee("div",{class:"summary"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),$b=F({render(){var e,i;return ee("a",{class:"user"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Tb={install(e){e.component("SuiFeed",vb),e.component("SuiFeedContent",Sb),e.component("SuiFeedDate",yb),e.component("SuiFeedEvent",wb),e.component("SuiFeedExtra",Cb),e.component("SuiFeedLabel",Ab),e.component("SuiFeedLike",xb),e.component("SuiFeedMeta",kb),e.component("SuiFeedSummary",Bb),e.component("SuiFeedUser",$b)}},Yt=F(e=>{const{sizeClass:i}=Ll(e),a=M(()=>te(i.value,e.name,"flag"));return()=>t("i",{class:a.value},null)},{props:{name:String,...Dl()}}),Db={install(e){e.component("SuiFlag",Yt)}},Nt=F({props:{error:Boolean,info:Boolean,inverted:Boolean,loading:Boolean,reply:Boolean,success:Boolean,unstackable:Boolean,warning:Boolean,size:String},setup(e){return{classes:M(()=>te("ui",e.size,v(e.error,"error"),v(e.info,"info"),v(e.inverted,"inverted"),v(e.loading,"loading"),v(e.reply,"reply"),v(e.success,"success"),v(e.unstackable,"unstackable"),v(e.warning,"warning"),"form"))}},render(){var e,i;return t("form",{class:this.classes},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),Er=["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"];function Lb(e){return{widthClass:M(()=>Number(e.width)>0?`${Er[Number(e.width)-1]} wide`:typeof e.width=="string"||Er.includes(e.width)?`${e.width} wide`:null)}}const it=F({emits:["update:modelValue"],props:{disabled:Boolean,error:Boolean,inline:Boolean,label:String,modelValue:String,placeholder:String,required:Boolean,type:String,width:String||Number},setup(e,{emit:i}){const{widthClass:a}=Lb(e),o=M(()=>te(v(e.disabled,"disabled"),v(e.error,"error"),v(e.inline,"inline"),v(e.required,"required"),a.value,"field")),s=e.type||"text";return{computedClass:o,inputType:s,onInput:c=>i("update:modelValue",c.target.value)}},render(){var e,i;return this.label?t("div",{class:this.computedClass},[t("label",null,[this.label]),t("input",{type:this.inputType,placeholder:this.placeholder,value:this.modelValue,onInput:this.onInput},null)]):t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),gs=F({props:{widths:String},setup(e){return{computedClass:M(()=>te(Pe(e.widths,"width"),"fields"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),wo=F({props:{label:String,placeholder:String,rows:[Number,String]},render(){return this.label?t("div",{class:"field"},[t("label",null,[this.label]),t("textarea",{placeholder:this.placeholder,rows:this.rows},null)]):t("div",{class:"field"},[t("textarea",{placeholder:this.placeholder,rows:this.rows},null)])}}),Ib={install(e){e.component("SuiForm",Nt),e.component("SuiFormField",it),e.component("SuiFormGroup",gs),e.component("SuiFormTextarea",wo)}},ba=F({props:{celled:[Boolean,String],centered:Boolean,columns:[Number,String],compact:Boolean,container:Boolean,divided:[Boolean,String],doubling:Boolean,inverted:Boolean,padded:[Boolean,String],relaxed:[Boolean,String],reversed:String,stackable:Boolean,textAlign:String,verticalAlign:String},setup(e){return{computedClass:M(()=>te("ui",e.container&&"container",v(e.centered,"centered"),v(e.compact,"compact"),v(e.doubling,"doubling"),v(e.inverted,"inverted"),v(e.stackable,"stackable"),Pe(e.reversed,"reversed"),Pe(e.verticalAlign,"aligned"),Ie(e.celled,"celled"),Ie(e.divided,"divided"),Ie(e.padded,"padded"),Ie(e.relaxed,"relaxed"),Tl(e.textAlign),ri(e.columns,"column"),"grid"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),Bt=F({props:{color:String,computer:Number,floated:String,largeScreen:Number,mobile:Number,only:String,tablet:Number,textAlign:String,width:Number,widescreen:Number},setup(e){return{computedClass:M(()=>te(e.color,Pe(e.floated,"floated"),Pe(e.only,"only"),Tl(e.textAlign),ri(e.width,"wide"),Vl(e.mobile,"mobile"),Vl(e.tablet,"tablet"),Vl(e.computer,"computer"),Vl(e.largeScreen,"large screen"),Vl(e.widescreen,"widescreen"),"column"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),Co=F({props:{centered:Boolean,color:String,columns:Number,only:String,stretched:Boolean,textAlign:String},setup(e){return{computedClass:M(()=>te(e.color,v(e.centered,"centered"),v(e.stretched,"stretched"),Pe(e.only,"only"),ri(e.columns,"column"),Tl(e.textAlign),"row"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),Eb={install(e){e.component("SuiGrid",ba),e.component("SuiGridColumn",Bt),e.component("SuiGridRow",Co)}},Yi=F({props:{as:String},setup(e){return{elementType:e.as||"div"}},render(){var e,i;return ee(this.elementType,{class:"sub header"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),fe=F({components:{HeaderSubheader:Yi},props:{as:String,attached:[Boolean,String],block:Boolean,color:String,content:String,disabled:Boolean,dividing:Boolean,floated:String,icon:Boolean,image:Boolean,inverted:Boolean,primary:Boolean,secondary:Boolean,size:String,sub:Boolean,subheader:String,textAlign:String},setup(e){const i=e.as||"div",a=M(()=>te("ui",e.color,e.size,v(e.primary,"primary"),v(e.secondary,"secondary"),v(e.block,"block"),v(e.disabled,"disabled"),v(e.dividing,"dividing"),v(e.icon,"icon"),v(e.image,"image"),v(e.inverted,"inverted"),v(e.sub,"sub"),Pe(e.floated,"floated"),Ie(e.attached,"attached"),Tl(e.textAlign),"header"));return{elementType:i,computedClass:a}},render(){var e,i;let a=[];return this.content&&a.push(this.content),this.subheader&&a.push(ee(Yi,{},this.subheader)),a.length>0?ee(this.elementType,{class:this.computedClass},a):ee(this.elementType,{class:this.computedClass},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),hs=F({render(){var e,i;return ee("div",{class:"content"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Rb={install(e){e.component("SuiHeader",fe),e.component("SuiHeaderContent",hs),e.component("SuiHeaderSubheader",Yi)}},Ze=F({emits:["update:modelValue"],props:{action:String,disabled:Boolean,error:Boolean,fluid:Boolean,focus:Boolean,icon:String,iconPosition:String,inverted:Boolean,label:String,labeled:Boolean,loading:Boolean,modelValue:String,placeholder:String,size:String,transparent:Boolean,type:String},setup(e,{emit:i}){const a=M(()=>typeof e.icon=="string"||e.loading),o=M(()=>!!e.label||e.labeled),s=M(()=>te("ui",e.size,e.action&&"action",v(e.disabled,"disabled"),v(e.error,"error"),v(e.fluid,"fluid"),v(e.focus,"focus"),e.iconPosition,v(a.value,"icon"),v(e.inverted,"inverted"),v(e.loading,"loading"),v(e.transparent,"transparent"),v(o.value,"labeled"),"input")),c=d=>i("update:modelValue",d.target.value);return()=>t("div",{class:s.value},[e.label&&t(O,null,{default:()=>[e.label]}),t("input",{type:e.type||"text",placeholder:e.placeholder,value:e.modelValue,onInput:d=>c(d)},null),a.value&&t(J,{name:e.icon||"spinner"},null),e.action&&t(P,null,{default:()=>[e.action]})])}}),Pb={install(e){e.component("SuiInput",Ze)}},zb=F({setup(e,{slots:i}){return()=>{var a;return t("div",{class:"item"},[i.image&&t("div",{class:"image"},[i.image()]),(i.header||i.metadata||i.description||i.extra)&&t("div",{class:"content"},[i.header&&t("div",{class:"header"},[i.header()]),i.metadata&&t("div",{class:"meta"},[i.metadata()]),i.description&&t("div",{class:"description"},[i.description()]),i.extra&&t("div",{class:"extra"},[i.extra()])]),(a=i.default)==null?void 0:a.call(i)])}}}),Fb=F({props:{verticalAlign:String},setup(e,{slots:i}){const{verticalAlign:a}=e,o=M(()=>te(Pe(a,"aligned"),"content"));return()=>{var s;return t("div",{class:o.value},[(s=i.default)==null?void 0:s.call(i),i.header&&t("div",{class:"header"},[i.header()]),i.metadata&&t("div",{class:"meta"},[i.metadata()]),i.description&&t("div",{class:"description"},[i.description()])])}}}),Vb=F({render(){var e,i;return ee("div",{class:"description"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Mb=F({render(){var e,i;return ee("div",{class:"extra"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Nb=F({props:{divided:Boolean,inverted:Boolean,link:Boolean,relaxed:[Boolean,String],unstackable:Boolean},setup(e){return{computedClass:M(()=>te("ui",v(e.divided,"divided"),v(e.inverted,"inverted"),v(e.link,"link"),v(e.unstackable,"unstackable"),Ie(e.relaxed,"relaxed"),"items"))}},render(){var e,i;return ee("div",{class:this.computedClass},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Hb=F({props:{as:String},render(){var e,i;let a=this.$props.as||"div";return ee(a,{class:"header"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Ob=F({props:{size:String},setup(e){return{computedClass:M(()=>te(e.size,"image"))}},render(){var e,i;return ee("div",{class:this.computedClass},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),qb=F({render(){var e,i;return ee("div",{class:"meta"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Gb={install(e){e.component("SuiItem",zb),e.component("SuiItemContent",Fb),e.component("SuiItemDescription",Vb),e.component("SuiItemExtra",Mb),e.component("SuiItemGroup",Nb),e.component("SuiItemHeader",Hb),e.component("SuiItemImage",Ob),e.component("SuiItemMeta",qb)}},rd=F((e,{slots:i})=>{const{sizeClass:a}=Ll(e),o=M(()=>te("ui",v(e.animated,"animated"),v(e.bulleted,"bulleted"),v(e.celled,"celled"),v(e.divided,"divided"),v(e.horizontal,"horizontal"),v(e.inverted,"inverted"),v(e.link,"link"),v(e.ordered,"ordered"),v(e.relaxed,"relaxed"),v(e.selection,"selection"),Pe(e.verticalAlign,"aligned"),Pe(e.floated,"floated"),a.value,"list"));let s=e.as||"div";return()=>{var c;return ee(s,{class:o.value},(c=i.default)==null?void 0:c.call(i))}},{props:{animated:Boolean,as:String,bulleted:Boolean,celled:Boolean,divided:Boolean,floated:String,horizontal:Boolean,inverted:Boolean,ordered:Boolean,relaxed:Boolean,link:Boolean,selection:Boolean,verticalAlign:String,...Dl()}}),Ol=F((e,{slots:i})=>{const a=M(()=>te(v(e.active,"active"),v(e.disabled,"disabled"),"item"));let o=e.as||"div";return()=>{var s;return ee(o,{class:a.value},(s=i.default)==null?void 0:s.call(i))}},{props:{active:Boolean,as:String,disabled:Boolean}}),jb=F({setup(e,{slots:i}){return()=>{var a;return ee(J,{...e},(a=i.default)==null?void 0:a.call(i))}}}),Ub=F({props:{verticalAlign:String},setup(e){return{computedClass:M(()=>te(Pe(e.verticalAlign,"aligned"),"content"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),Yb=F({props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:i}){return()=>{var a;return ee(e.as,{class:"header"},(a=i.default)==null?void 0:a.call(i))}}}),Jb=F({props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:i}){return()=>{var a;return ee(e.as,{class:"description"},(a=i.default)==null?void 0:a.call(i))}}}),Wb=F({render(){var e,i;return t("div",{class:"list"},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),Kb={install(e){e.component("SuiList",rd),e.component("SuiListItem",Ol),e.component("SuiListIcon",jb),e.component("SuiListContent",Ub),e.component("SuiListHeader",Yb),e.component("SuiListDescription",Jb),e.component("SuiListList",Wb)}},Qa=F({props:{action:Boolean,active:Boolean,as:String,browse:Boolean,color:String,disabled:Boolean,fitted:[Boolean,String],header:Boolean,icon:Boolean,index:Number,link:Boolean,name:String,position:String,stackable:Boolean},emits:["selected"],setup(e,{slots:i,emit:a}){let o=e.as||"a";e.header&&(o="div"),e.as==="router-link"&&(o=B(e.as));const s=M(()=>te(e.color,e.position,v(e.action,"action"),v(e.active,"active"),v(e.browse,"browse"),v(e.disabled,"disabled"),v(e.header,"header"),v(e.icon,"icon"),v(e.link,"link"),Ie(e.fitted,"fitted"),"item")),c=M(()=>!e.header&&!e.disabled&&e.as!=="div");return()=>t(o,{class:s.value,onClick:()=>c.value&&a("selected",e.index)},{default:()=>{var d;return[e.name||((d=i.default)==null?void 0:d.call(i))]}})}}),ud=F({props:{attached:[Boolean,String],borderless:Boolean,color:Boolean,compact:Boolean,fixed:Boolean,floated:[Boolean,String],fluid:Boolean,icon:[Boolean,String],inverted:Boolean,items:Array,pagination:Boolean,pointing:Boolean,secondary:Boolean,size:String,stackable:Boolean,tabular:[Boolean,String],text:Boolean,vertical:Boolean,widths:Number},emits:["selected"],setup(e,{slots:i,emit:a}){const o=j(-1),s=M(()=>te("ui",e.color,e.size,v(e.borderless,"borderless"),v(e.compact,"compact"),v(e.fixed,"fixed"),v(e.fluid,"fluid"),v(e.inverted,"inverted"),v(e.pagination,"pagination"),v(e.pointing,"pointing"),v(e.secondary,"secondary"),v(e.stackable,"stackable"),v(e.text,"text"),v(e.vertical,"vertical"),Ie(e.attached,"attached"),Ie(e.floated,"floated"),Ie(e.icon,"icon"),Ie(e.tabular,"tabular"),ri(e.widths,"item"),"menu")),c=u=>typeof u=="string"?u:u.text,d=(u,p)=>{if(typeof u!="string")return u[p]},f=(u,p)=>{o.value=u,a("selected",p)};return()=>t("div",{class:s.value},[i.default&&i.default(),e.items&&e.items.map((u,p)=>t(Qa,{index:p,active:p===o.value,as:typeof u!="string"?d(u,"as"):void 0,color:d(u,"color"),header:typeof u!="string"&&u.header,onSelected:g=>f(g,u)},{default:()=>[typeof u!="string"&&u.icon&&t(J,{name:u.icon},null),c(u)]})),i.right&&t("div",{class:"right menu"},[i.right()])])}}),Xb=F({props:{as:String,content:String},setup(e,{slots:i}){let a=e.as||"div";return()=>t(a,{class:"header"},{default:()=>{var o;return[e.content||((o=i.default)==null?void 0:o.call(i))]}})}}),Qb=F({props:{position:String},setup(e){const{position:i}=e;return{computedClass:M(()=>te(i,"menu"))}},render(){var e,i;return ee("div",{class:this.computedClass},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Zb={install(e){e.component("SuiMenu",ud),e.component("SuiMenuHeader",Xb),e.component("SuiMenuItem",Qa),e.component("SuiMenuMenu",Qb)}},An=F({props:{attached:[Boolean,String],aligned:String,color:String,closable:Boolean,compact:Boolean,content:String,header:String,error:Boolean,floating:Boolean,hidden:Boolean,icon:[Boolean,String],info:Boolean,list:Array,negative:Boolean,positive:Boolean,size:String,success:Boolean,visible:Boolean,warning:Boolean},emits:["close"],setup(e,{emit:i,slots:a}){const o=M(()=>te("ui",e.color,e.size,v(e.compact,"compact"),v(e.error,"error"),v(e.floating,"floating"),v(e.hidden,"hidden"),v(!!e.icon,"icon"),v(e.info,"info"),v(e.negative,"negative"),v(e.positive,"positive"),v(e.success,"success"),v(e.visible,"visible"),v(e.warning,"warning"),Pe(e.aligned,"aligned"),Ie(e.attached,"attached"),"message")),s=j(),c=()=>{var d;const f=(d=s.value)==null?void 0:d.animate([{opacity:1},{opacity:0}],200);f&&(f.onfinish=()=>{var u;return(u=s.value)==null?void 0:u.classList.add("hidden")},i("close"))};return()=>{var d,f;return t("div",{ref:s,class:o.value},[e.closable&&t("i",{class:"close icon",onClick:c},null),typeof e.icon=="string"&&t(J,{name:e.icon},null),(d=a.default)==null?void 0:d.call(a),(e.content||a.content||e.header||e.list)&&t("div",{class:"content"},[e.header&&t("div",{class:"header"},[e.header]),e.content&&t("p",null,[e.content]),(f=a.content)==null?void 0:f.call(a),Array.isArray(e.list)&&t("ul",{class:"list"},[e.list.map((u,p)=>t("li",{key:p},[u]))])])])}}}),ev=F({render(){var e,i;return ee("div",{class:"content"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),tv=F({render(){var e,i;return ee("div",{class:"header"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),iv=F({render(){var e,i;return ee("li",{class:"content"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),lv=F({render(){var e,i;return ee("ul",{class:"list"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),av={install(e){e.component("SuiMessage",An),e.component("SuiMessageContent",ev),e.component("SuiMessageHeader",tv),e.component("SuiMessageItem",iv),e.component("SuiMessageList",lv)}};function nv(e){return Fo()?(Kr(e),!0):!1}function cd(e){return typeof e=="function"?e():r(e)}const dd=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ov=Object.prototype.toString,sv=e=>ov.call(e)==="[object Object]",Va=()=>{},rv=uv();function uv(){var e,i;return dd&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((i=window==null?void 0:window.navigator)==null?void 0:i.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function ql(e){var i;const a=cd(e);return(i=a==null?void 0:a.$el)!=null?i:a}const pd=dd?window:void 0;function Nn(...e){let i,a,o,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([a,o,s]=e,i=pd):[i,a,o,s]=e,!i)return Va;Array.isArray(a)||(a=[a]),Array.isArray(o)||(o=[o]);const c=[],d=()=>{c.forEach(g=>g()),c.length=0},f=(g,m,_,w)=>(g.addEventListener(m,_,w),()=>g.removeEventListener(m,_,w)),u=pt(()=>[ql(i),cd(s)],([g,m])=>{if(d(),!g)return;const _=sv(m)?{...m}:m;c.push(...a.flatMap(w=>o.map(S=>f(g,w,S,_))))},{immediate:!0,flush:"post"}),p=()=>{u(),d()};return nv(p),p}let Rr=!1;function cv(e,i,a={}){const{window:o=pd,ignore:s=[],capture:c=!0,detectIframe:d=!1}=a;if(!o)return Va;rv&&!Rr&&(Rr=!0,Array.from(o.document.body.children).forEach(g=>g.addEventListener("click",Va)),o.document.documentElement.addEventListener("click",Va));let f=!0;const u=g=>s.some(m=>{if(typeof m=="string")return Array.from(o.document.querySelectorAll(m)).some(_=>_===g.target||g.composedPath().includes(_));{const _=ql(m);return _&&(g.target===_||g.composedPath().includes(_))}}),p=[Nn(o,"click",g=>{const m=ql(e);if(!(!m||m===g.target||g.composedPath().includes(m))){if(g.detail===0&&(f=!u(g)),!f){f=!0;return}i(g)}},{passive:!0,capture:c}),Nn(o,"pointerdown",g=>{const m=ql(e);f=!u(g)&&!!(m&&!g.composedPath().includes(m))},{passive:!0}),d&&Nn(o,"blur",g=>{setTimeout(()=>{var m;const _=ql(e);((m=o.document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(_!=null&&_.contains(o.document.activeElement))&&i(g)},0)})].filter(Boolean);return()=>p.forEach(g=>g())}function md(e,i="scale"){const a=j(e.modelValue?"open":"closed");return pt(()=>e.modelValue,o=>{a.value=o?"opening":"closing"}),{animationClasses:M(()=>{switch(a.value){case"opening":return`animating ${i} in`;case"open":return"visible active";case"closing":return`visible active animating ${i} out`;case"closed":return"hidden"}}),isClosed:M(()=>a.value==="closed"),onAnimationEnd:()=>a.value=e.modelValue?"open":"closed"}}const dv=F({props:{blurring:Boolean,inverted:Boolean,modelValue:Boolean},setup(e){const{animationClasses:i,isClosed:a,onAnimationEnd:o}=md(e,"fade"),s=M(()=>te("ui","page modals dimmer transition",v(e.inverted,"inverted"),i.value)),c=M(()=>({display:a.value?"none !important":"flex !important",animationDuration:"500ms"})),d=M(()=>te("dimmable","dimmed",v(e.blurring,"blurring")));return pt(()=>e.modelValue,f=>{if(f){document.body.classList.add(...d.value.split(" "));return}document.body.classList.remove(...d.value.split(" "))}),{className:s,style:c,onAnimationEnd:o}},render(){var e,i;return t("div",{class:this.className,style:this.style,onAnimationend:this.onAnimationEnd},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),_s=F({props:{basic:Boolean,closeIcon:Boolean,dimmer:String,modelValue:Boolean,size:String,closable:{type:Boolean,default:!0},overlay:Boolean,fullscreen:Boolean},setup(e,{emit:i}){const a=j(),{animationClasses:o,isClosed:s}=md(e),c=M(()=>te("ui",e.size,v(e.basic,"basic"),v(e.overlay,"overlay"),v(e.fullscreen,"fullscreen"),"modal","transition",o.value)),d=M(()=>({display:s.value?"none !important":"block !important",animationDuration:"500ms"})),f=()=>i("update:modelValue",!1);return cv(a,()=>e.closable&&i("update:modelValue",!1)),{computedClass:c,style:d,close:f,modalRef:a}},render(){return t(_n,{to:"body"},{default:()=>[t(dv,{blurring:this.dimmer==="blurring",inverted:this.dimmer==="inverted",modelValue:this.modelValue},{default:()=>{var e,i;return[t("div",{class:this.computedClass,style:this.style,onClick:a=>a.stopPropagation(),ref:a=>this.modalRef=a},[this.closeIcon&&t("i",{"aria-hidden":"true",class:"close icon",onClick:this.close},null),(i=(e=this.$slots).default)==null?void 0:i.call(e)])]}})]})}}),bs=F({render(){var e,i;return t("div",{class:"actions"},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),vs=F({props:{image:Boolean,scrolling:Boolean},setup(e){return{computedClass:M(()=>te(v(e.image,"image"),v(e.scrolling,"scrolling"),"content"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),fd=F({render(){var e,i;return ee("div",{class:"description"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Ss=F({render(){var e,i;return ee("div",{class:"header"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),pv={install(e){e.component("SuiModal",_s),e.component("SuiModalActions",bs),e.component("SuiModalContent",vs),e.component("SuiModalDescription",fd),e.component("SuiModalHeader",Ss)}},mv=e=>{const i=j(!1),a=Qn(e,"position"),o=j(null),s=Qn(e,"trigger"),c=()=>{i.value=!0,Bl(()=>f())},d=()=>{i.value=!1},f=()=>{if(!o.value||!s.value)return;let u=0,p=0;const g=o.value,m=s.value.$el;g.style.transform=`translate(${u}px, ${p}px)`;const{top:_,left:w,width:S,height:A}=m.getBoundingClientRect(),T=g.getBoundingClientRect(),{pageXOffset:L,pageYOffset:h}=window;if(a.value.includes("top")?(u=L+w,p=h+_-g.offsetTop-g.offsetHeight):(u=w,p=_+A-T.top),a.value.includes("right")){const b=S-T.width;u=w+b}if(a.value.includes("center")){const b=S/2-T.width/2;u=w+b}a.value==="right center"&&(u=w+S,p=_+A/2-T.top-T.height/2),a.value==="left center"&&(u=w-T.width,p=_+A/2-T.top-T.height/2),g.style.display="flex",g.style.position="absolute",g.style.transform=`translate(${u}px, ${p}px)`};return{show:i,showPopup:c,hidePopup:d,placement:a,popupRef:o,triggerRef:s}},fv=F({props:{basic:Boolean,content:String,flowing:Boolean,header:String,inverted:Boolean,position:{type:String,default:"top left"},size:String,trigger:Object,wide:[Boolean,String]},setup(e,{slots:i}){const{show:a,showPopup:o,hidePopup:s,popupRef:c,triggerRef:d}=mv(e);Qo(()=>{var _,w,S;(_=d.value)!=null&&_.$el&&((w=d.value)==null||w.$el.addEventListener("mouseenter",o),(S=d.value)==null||S.$el.addEventListener("mouseleave",s))});const f=j(a.value?"open":"close");M(()=>f.value!=="closed"),pt(()=>a.value,_=>{f.value=_?"opening":"closing"});const u=(_,w="scale")=>{switch(_){case"opening":return`animating ${w} in`;case"open":return"visible active";case"closing":return`visible active animating ${w} out`;case"closed":return"hidden"}},p=()=>f.value=a.value?"open":"closed";Ai(()=>{var _;(_=c.value)==null||_.addEventListener("animationend",p,!0)}),Qi(()=>{var _;(_=c.value)==null||_.removeEventListener("animationend",p)});const g={position:"initial",animationDuration:"200ms"},m=M(()=>te("ignored ui",e.position,e.size,v(e.basic,"basic"),v(e.flowing,"flowing"),v(e.inverted,"inverted"),Ie(e.wide,"wide"),"popup transition",u(f.value,"scale")));return()=>t(_n,{to:"body"},{default:()=>{var _;return[t("div",{ref:c,style:"display: flex; position: absolute; transform: translate(0px, 0px);"},[t("div",{class:m.value,style:g},[e.header&&t("div",{class:"header"},[e.header]),t("div",{class:"content"},[e.content?e.content:(_=i.default)==null?void 0:_.call(i)])])])]}})}}),gv={install(e){e.component("SuiPopup",fv)}},hv=["top","bottom","left"],ys=()=>({attached:{type:String,validator:e=>hv.includes(e)}}),gd=e=>({attachedClasses:M(()=>te(e.attached,{attached:e.attached}))}),_v=["red","orange","yellow","olive","green","teal","blue","purple","violet","pink","brown","grey","black"],ws=()=>({color:{type:String,validator:e=>_v.includes(e)}}),Cs=e=>({colorClasses:M(()=>te(e.inverted&&"inverted",e.color))}),Ao=F({props:{active:Boolean,disabled:Boolean,error:Boolean,indeterminate:[Boolean,String],indicating:Boolean,inverted:Boolean,label:String,percent:Number,progress:[Boolean,String],size:String,success:Boolean,warning:Boolean,...ys(),...ws()},setup(e,{slots:i}){const{attachedClasses:a}=gd(e),{colorClasses:o}=Cs(e),s=M(()=>te("ui",o.value,e.size,v(e.active||e.indicating,"active"),v(e.disabled,"disabled"),v(e.error,"error"),v(e.indicating,"indicating"),v(e.success,"success"),v(e.warning,"warning"),Ie(e.indeterminate,"indeterminate"),a.value,"progress")),c=M(()=>te(Ie(e.progress,"progress"))),d=M(()=>e.progress!=="centered"?{}:{right:0});return()=>{var f;return t("div",{class:s.value,"data-percent":e.percent},[t("div",{class:"bar",style:`width: ${e.percent}%; transition-duration: 300ms;`},[e.progress&&t("div",{class:c.value,style:d.value},[((f=i.default)==null?void 0:f.call(i))||`${e.percent}%`])]),e.label&&t("div",{class:"label"},[e.label])])}}}),bv={install(e){e.component("SuiProgress",Ao)}},vv=F({props:{attached:Boolean,close:[Boolean,String],dividing:Boolean,internal:Boolean,position:String,size:String},setup(e){return{computedClass:M(()=>te("ui",e.position,e.size,v(e.attached,"attached"),v(e.dividing,"dividing"),v(e.internal,"internal"),Ie(e.close,"close"),"rail"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),Sv={install(e){e.component("SuiRail",vv)}},yv=F({props:{icon:String,index:{type:Number,default:0}},setup(e){const i=Ve("rating",j(0)),a=Ve("updateRating"),o=Ve("selectedIndex",j(0)),s=Ve("updateSelectedIndex"),c=Ve("clearable",!1),d=Ve("disabled",!1),f=()=>{if(!d){if(c&&e.index===i.value){a(0),s(0);return}a(e.index)}},u=()=>{d||s(e.index)},p=M(()=>e.index<=i.value),g=M(()=>e.index<=o.value),m=M(()=>te(e.icon,v(p.value,"active"),v(g.value,"selected"),"icon"));return()=>t("i",{class:m.value,onClick:()=>f(),onMouseenter:()=>u()},null)}}),wv=F({props:{clearable:Boolean,color:String,defaultRating:{type:Number,default:0},disabled:Boolean,icon:{type:String,default:"star"},maxRating:{type:Number,default:1},modelValue:Number,size:String},setup(e,{emit:i}){const a=j(e.modelValue||e.defaultRating),o=j(!1),s=j(0),c=g=>{a.value=g,i("update:modelValue",g),i("change",g)},d=g=>s.value=g,f=()=>{e.disabled||(o.value=!0)},u=()=>{e.disabled||(o.value=!1,d(0))},p=M(()=>te("ui",e.color,e.icon,e.size,v(e.disabled,"disabled"),"rating",v(o.value,"selected")));return ut("rating",a),ut("updateRating",c),ut("selectedIndex",s),ut("updateSelectedIndex",d),ut("clearable",e.clearable),ut("disabled",e.disabled),()=>t("div",{class:p.value,onMouseenter:()=>f(),onMouseleave:()=>u()},[[...Array(e.maxRating)].map((g,m)=>t(yv,{icon:e.icon,index:m+1},null))])}}),Cv={install(e){e.component("SuiRating",wv)}},el=F({props:{active:Boolean,animated:String,disabled:Boolean,instant:Boolean},setup(e){return{computedClass:M(()=>te("ui",e.animated,v(e.active,"active"),v(e.disabled,"disabled"),v(e.instant,"instant"),"reveal"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),Et=F({props:{visible:Boolean,hidden:Boolean},setup(e){return{computedClass:M(()=>te("ui",v(e.visible,"visible"),v(e.hidden,"hidden"),"content"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),Av={install(e){e.component("SuiReveal",el),e.component("SuiRevealContent",Et)}},xv=F({props:{icon:String,placeholder:String},setup(e){return()=>t("div",{class:"ui search"},[t("div",{class:"ui icon input"},[t("input",{type:"text",class:"prompt",placeholder:e.placeholder},null),t("i",{class:"search icon"},null)]),t("div",{class:"results"},null)])}}),kv={install(e){e.component("SuiSearch",xv)}},H=F((e,{slots:i})=>{const{colorClasses:a}=Cs(e),{sizeClass:o}=Ll(e),s=M(()=>te("ui",a.value,o.value,v(e.basic,"basic"),v(e.circular,"circular"),v(e.clearing,"clearing"),v(e.compact,"compact"),v(e.disabled,"disabled"),v(e.inverted,"inverted"),v(e.loading,"loading"),v(e.piled,"piled"),v(e.placeholder,"placeholder"),v(e.raised,"raised"),v(e.secondary,"secondary"),v(e.stacked,"stacked"),v(e.tertiary,"tertiary"),v(e.vertical,"vertical"),Pe(e.floated,"floated"),Pe(e.textAlign,"aligned"),Ie(e.attached,"attached"),Ie(e.fitted,"fitted"),Ie(e.padded,"padded"),Ie(e.scrolling,"scrolling"),"segment"));return()=>{var c;return t("div",{class:s.value},[(c=i.default)==null?void 0:c.call(i)])}},{props:{attached:[Boolean,String],basic:Boolean,circular:Boolean,clearing:Boolean,compact:Boolean,disabled:Boolean,fitted:[Boolean,String],floated:String,inverted:Boolean,loading:Boolean,padded:[Boolean,String],piled:Boolean,placeholder:Boolean,raised:Boolean,scrolling:[Boolean,String],secondary:Boolean,stacked:Boolean,tertiary:Boolean,textAlign:String,vertical:Boolean,...ws(),...Dl()}}),yt=F((e,{slots:i})=>{const{sizeClass:a}=Ll(e),o=M(()=>te("ui",a.value,v(e.basic,"basic"),v(e.compact,"compact"),v(e.horizontal,"horizontal"),v(e.piled,"piled"),v(e.raised,"raised"),v(e.stacked,"stacked"),"segments"));return()=>{var s;return t("div",{class:o.value},[(s=i.default)==null?void 0:s.call(i)])}},{props:{basic:Boolean,compact:Boolean,horizontal:Boolean,piled:Boolean,raised:Boolean,stacked:Boolean,...Dl()}}),Bv=F({render(){var e,i;return t("div",{class:"inline"},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),$v={install(e){e.component("SuiSegment",H),e.component("SuiSegmentGroup",yt),e.component("SuiSegmentInline",Bv)}},Tv=F({directives:{clickoutside:fs},emits:["update:visible","show","hide"],props:{animation:{type:String,default:"overlay"},dimmed:Boolean,direction:{type:String,default:"left"},icon:[Boolean,String],inverted:Boolean,visible:Boolean},setup(e,{emit:i}){const a=oi({animating:!1}),o=M(()=>{const s=e.direction==="right"||e.direction==="left";return te("ui","sidebar",e.direction,e.animation,v(e.inverted,"inverted"),v(e.visible,"visible"),v(a.animating,"animating"),v(s,"vertical"),Ie(e.icon,"icon"),"menu")});return pt(()=>e.visible,()=>{if(a.animating=!0,setTimeout(()=>a.animating=!1,500),e.dimmed){const s=document.querySelector(".pusher");s&&s.classList.toggle("dimmed")}}),{computedClass:o,onClickPusher:s=>{const c=s.path||s.composedPath&&s.composedPath();c&&c.find(d=>d.classList&&d.classList.contains("pusher"))&&e.visible&&i("update:visible",!1)}}},render(){var e,i;return Si(t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)]),[[pn("clickoutside"),this.onClickPusher]])}}),Dv={install:e=>{e.component("SuiSidebar",Tv)}};class Hn{static getWindowScrollTop(){let{documentElement:i}=document;return(window.pageYOffset||i.scrollTop)-(i.clientTop||0)}static getWindowScrollLeft(){let{documentElement:i}=document;return(window.pageXOffset||i.scrollLeft)-(i.clientLeft||0)}static hasClass(i,a){return i.classList.contains(a)}}const Lv=F({emits:["change","slideend","update:modelValue"],props:{color:String,disabled:Boolean,inverted:Boolean,labeled:[Boolean,String],labels:Array,max:{type:Number,default:10},min:{type:Number,default:0},modelValue:{type:[Number,Array],default:0},range:Boolean,reversed:Boolean,size:String,step:{type:Number,default:1},vertical:Boolean,verticalHeight:{type:[Number,String],default:200}},setup(e,{emit:i}){const a=M(()=>te("ui",e.color,e.size,v(e.disabled,"disabled"),v(e.inverted,"inverted"),v(e.reversed,"reversed"),v(e.vertical,"vertical"),Ie(e.labeled,"labeled"),"slider")),o=()=>100*(e.modelValue[0]-e.min)/(e.max-e.min),s=()=>100*(e.modelValue[1]-e.min)/(e.max-e.min),c=M(()=>{if(e.range)return e.reversed&&!e.vertical?{right:o()+"%",width:s()-o()+"%"}:e.vertical?e.reversed?{bottom:o()+"%",height:s()-o()+"%"}:{top:o()+"%",height:s()-o()+"%"}:{left:o()+"%",width:s()-o()+"%"};let U=e.modelValue>e.max?e.max:e.modelValue;return e.reversed?e.vertical?{bottom:"0%",top:`${100-(U-e.min)/(e.max-e.min)*100}%`}:{right:"0%",left:`${100-(U-e.min)/(e.max-e.min)*100}%`}:e.vertical?{top:"0%",bottom:`${100-(U-e.min)/(e.max-e.min)*100}%`}:{left:"0%",right:`${100-(U-e.min)/(e.max-e.min)*100}%`}}),d=M(()=>{let U=e.range?e.modelValue[0]:e.modelValue>e.max?e.max:e.modelValue;return!e.reversed&&e.vertical?{top:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:e.reversed&&e.vertical?{top:"auto",bottom:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.reversed&&!e.vertical?{left:"auto",right:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{left:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),f=M(()=>{let U=e.modelValue[1]>e.max?e.max:e.modelValue[1];return e.reversed&&!e.vertical?{left:"auto",right:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.vertical?e.reversed?{top:"auto",bottom:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{top:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:{left:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),u=M(()=>e.labels?e.labels:[...Array(e.max-e.min+1)].map((U,W)=>W*e.step+e.min)),p=()=>{var U,W;let ue=1,le=g(),De=(e.vertical?(U=_.value)==null?void 0:U.clientHeight:(W=_.value)==null?void 0:W.clientWidth)||0,Je=1;if(De>0)for(;De/le*Je<100;)le%Je||(ue=Je),Je+=1;return ue},g=()=>Math.round((e.max-e.min)/e.step),m=j(null),_=j(null),w=j(0),S=j(0),A=j(0),T=j(0),L=()=>{if(!m.value)return;let U=m.value.getBoundingClientRect();w.value=U.left+Hn.getWindowScrollLeft(),S.value=U.top+Hn.getWindowScrollTop(),A.value=m.value.offsetWidth,T.value=m.value.offsetHeight},h=j(0),b=U=>{let{pageX:W,pageY:ue}=U.touches?U.touches[0]:U,le,De;e.vertical?le=(S.value+T.value-ue)*100/T.value:le=(W-w.value)*100/A.value,De=(e.max-e.min)*(le/100)+e.min;const Je=e.range?e.modelValue[h.value]:e.modelValue||0;De=Je+Math.round(De/e.step-Je/e.step)*e.step,e.reversed&&(De=e.max-De+e.min),e.vertical&&(De=e.max-De+e.min),C(De)},C=U=>{let W=U,ue;if(e.range)if(ue=e.modelValue?[...e.modelValue]:[],h.value===0){let le=e.modelValue?e.modelValue[1]:e.max;W<e.min?W=e.min:W>le&&(W=le),ue[0]=W,ue[1]=ue[1]||e.max}else{let le=e.modelValue?e.modelValue[0]:e.min;W>e.max?W=e.max:W<le&&(W=le),ue[0]=ue[0]||e.min,ue[1]=W}else W<e.min&&(W=e.min),W>e.max&&(W=e.max),ue=W;i("update:modelValue",ue),i("change",ue)},$=j(!1),E=U=>$.value=U,V=(U,W=0)=>{E(!0),L(),h.value=W,U.preventDefault()},N=U=>{$.value&&(E(!1),document.removeEventListener("mousemove",z),i("slideend",{event:U,value:e.modelValue}))},z=U=>{$.value&&(b(U),U==null||U.preventDefault())},G=(U,W=0)=>{e.disabled||(V(U,W),document.addEventListener("mousemove",z),document.addEventListener("mouseup",N),U.preventDefault())},X=(U,W=0)=>{switch(h.value=W,U.code){case"ArrowUp":e.vertical&&(e.reversed?Y():pe()),U.preventDefault();break;case"ArrowDown":e.vertical&&(e.reversed?pe():Y()),U.preventDefault();break;case"ArrowRight":e.reversed?pe():Y(),U.preventDefault();break;case"ArrowLeft":e.reversed?Y():pe(),U.preventDefault();break}},Y=()=>{let U=0;e.range?U=e.modelValue[h.value]+e.step:U=e.modelValue+e.step,C(U)},pe=()=>{let U=0;e.range?U=e.modelValue[h.value]-e.step:U=e.modelValue-e.step,C(U)},xe=U=>{if(!e.disabled&&!Hn.hasClass(U.target,"thumb")){if(e.range){let W=(e.vertical?U.offsetY/U.target.clientHeight:U.offsetX/U.target.clientWidth)*100,ue=(o()+s())/2;W<ue?h.value=e.reversed?1:0:h.value=e.reversed?0:1}L(),b(U)}};return()=>t("div",{ref:U=>m.value=U,class:a.value,style:e.vertical?`height: ${e.verticalHeight}px;`:""},[t("div",{class:"inner",onClick:xe},[t("div",{class:"track",ref:U=>_.value=U},null),t("div",{class:"track-fill",style:c.value},null),t("div",{class:"thumb",style:d.value,onMousedown:U=>G(U),onTouchstart:U=>V(U),onTouchmove:U=>z(U),onTouchend:U=>N(U),onKeydown:U=>X(U),tabindex:0},null),e.range&&t("div",{class:"thumb second",style:f.value,onMousedown:U=>G(U,1),onTouchstart:U=>V(U,1),onTouchmove:U=>z(U),onTouchend:U=>N(U),onKeydown:U=>X(U,1),tabindex:0},null)]),e.labeled&&t("ul",{class:"auto labels"},[[...Array(g()+1)].map((U,W)=>{let ue=W/g();return W%p()?t("li",{class:"halftick label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${ue} + 7px);`},null):t("li",{class:"label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${ue} + 7px);`},[e.reversed&&!e.vertical?e.labels?e.labels[g()-W]:u.value[g()-W]:e.labels?e.labels[W]:u.value[W]])})])])}}),Iv={install(e){e.component("SuiSlider",Lv)}},xo=F({props:{content:String},render(){var e,i;return this.$props.content?ee("div",{class:"label"},this.$props.content):ee("div",{class:"label"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),ko=F({props:{content:String,text:Boolean},setup(e){return{computedClass:M(()=>te(v(e.text,"text"),"value"))}},render(){var e,i;return this.$props.content?ee("div",{class:this.computedClass},this.$props.content):ee("div",{class:this.computedClass},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Ev=F({components:{StatisticLabel:xo,StatisticValue:ko},props:{color:String,floated:[Boolean,String],fluid:Boolean,horizontal:Boolean,inverted:Boolean,label:String,size:String,text:Boolean,value:String},setup(e){const i=Ve("ui",!0);return{computedClass:M(()=>te(i&&"ui",e.color,e.size,v(e.fluid,"fluid"),v(e.horizontal,"horizontal"),v(e.inverted,"inverted"),v(e.text,"text"),Ie(e.floated,"floated"),"statistic"))}},render(){var e,i,a,o,s,c;let d=[];return this.$props.value&&d.push(ee(ko,{content:this.$props.value},(i=(e=this.$slots).default)==null?void 0:i.call(e))),this.$props.label&&d.push(ee(xo,{content:this.$props.label},(o=(a=this.$slots).default)==null?void 0:o.call(a))),ee("div",{class:this.computedClass},d.length>0?d:(c=(s=this.$slots).default)==null?void 0:c.call(s))}}),Rv=F({props:{color:String,horizontal:Boolean,inverted:Boolean,size:String,stackable:Boolean,widths:Number},setup(e){return ut("ui",!1),{classes:M(()=>te("ui",e.color,e.size,v(e.horizontal,"horizontal"),v(e.inverted,"inverted"),v(e.stackable,"stackable"),ri(e.widths,""),"statistics"))}},render(){var e,i;return ee("div",{class:this.classes},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Pv={install(e){e.component("SuiStatistic",Ev),e.component("SuiStatisticGroup",Rv),e.component("SuiStatisticLabel",xo),e.component("SuiStatisticValue",ko)}},zv=F((e,{slots:i})=>{const a=M(()=>te(v(e.active,"active"),v(e.completed,"completed"),v(e.disabled,"disabled"),v(e.fluid,"fluid"),v(e.link,"link"),v(e.vertical,"vertical"),"step"));return()=>{var o,s;return e.href?t("a",{class:a.value,href:e.href},[(o=i.default)==null?void 0:o.call(i)]):t("div",{class:a.value},[e.icon&&t(J,{name:e.icon},null),(e.title||e.description)&&t("div",{class:"content"},[e.title&&t("div",{class:"title"},[e.title]),e.description&&t("div",{class:"description"},[e.description])]),(s=i.default)==null?void 0:s.call(i)])}},{props:{active:Boolean,completed:Boolean,description:String,disabled:Boolean,fluid:Boolean,href:String,icon:String,link:Boolean,title:String,vertical:Boolean}}),Fv=["one","two","three","four","five","six","seven","eight"],Vv=F({props:{attached:String,fluid:Boolean,inverted:Boolean,ordered:Boolean,size:String,stackable:String,unstackable:Boolean,vertical:Boolean,widths:Number},setup(e){const{widths:i}=e;return{computedClass:M(()=>te("ui",i&&Fv[i-1],e.size,v(e.fluid,"fluid"),v(e.inverted,"inverted"),v(e.ordered,"ordered"),v(e.unstackable,"unstackable"),v(e.vertical,"vertical"),Pe(e.attached,"attached"),Pe(e.stackable,"stackable"),"steps"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),Mv=F({render(){var e,i;return t("div",{class:"content"},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),Nv=F({render(){var e,i;return t("div",{class:"title"},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),Hv=F({render(){var e,i;return t("div",{class:"description"},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),Ov={install(e){e.component("SuiStep",zv),e.component("SuiStepGroup",Vv),e.component("SuiStepContent",Mv),e.component("SuiStepTitle",Nv),e.component("SuiStepDescription",Hv)}},hd=F({props:{active:Boolean,attached:[Boolean,String],header:String},setup(e){return{computedClass:M(()=>te("ui tab segment",v(e.active,"active"),Ie(e.attached,"attached")))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),qv=F({emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},pointing:Boolean,secondary:Boolean,text:Boolean},setup(e,{emit:i,slots:a}){const o=j(e.activeIndex);pt(()=>e.activeIndex,p=>{o.value=p});const s=(p,g)=>{o.value!==g&&(o.value=g,i("update:activeIndex",g),i("tab-change",{event:p,index:g})),i("tab-click",{event:p,index:g})},c=(p,g)=>{p.key==="Enter"&&s(p,g)},d=M(()=>{var p,g;let m=[];return(p=a.default)!=null&&p.call(a)&&((g=a.default)==null||g.call(a).forEach(_=>{Ct(_)&&m.push(_)})),m}),f=M(()=>!e.secondary&&!e.pointing&&!e.text),u=M(()=>te("ui menu",v(f.value,"tabular attached"),v(e.pointing,"pointing"),v(e.secondary,"secondary"),v(e.text,"text")));return{onClick:s,onKeyDown:c,tabIndex:o,tabs:d,tabMenuClass:u,isDefaultMenu:f}},render(){const e=()=>this.tabs.map((a,o)=>t("a",{class:`item ${this.tabIndex===o&&"active"}`,onClick:s=>this.onClick(s,o),onKeydown:s=>this.onKeyDown(s,o),tabindex:0},[a.props.header])),i=()=>this.tabs.map((a,o)=>t(hd,Zi(a.props,{active:this.tabIndex===o,attached:this.isDefaultMenu?"bottom":!1}),{default:()=>{var s,c;return[(c=(s=a.children).default)==null?void 0:c.call(s)]}}));return t(Ce,null,[t("div",{class:this.tabMenuClass},[e()]),i()])}}),Gv={install(e){e.component("SuiTab",qv),e.component("SuiTabPanel",hd)}},jv=["long","very long","short","very short"],Uv=({defaultValue:e}={})=>({scrolling:{type:String,validator:i=>jv.includes(i),default:e}}),Yv=e=>({scrollingClasses:M(()=>te(e.scrolling,!!e.scrolling&&"scrolling"))}),_d=F({props:{columns:Array,definition:Boolean,fullWidth:Boolean},setup(e,{slots:i}){const a=M(()=>te(v(e.fullWidth,"full-width")));return()=>{var o;return e.columns?t("thead",{class:a.value},[i.default?i.default():t("tr",null,[e.definition&&t("th",null,null),e.columns.map(s=>{const{header:c,field:d}=s.props;return t("th",{key:d},[c])})])]):t("thead",{class:a.value},[(o=i.default)==null?void 0:o.call(i)])}}}),Bo=F({props:{active:Boolean,className:String,collapsing:Boolean,color:String,disabled:Boolean,error:Boolean,marked:String,negative:Boolean,positive:Boolean,rowspan:Number,selectable:Boolean,singleLine:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e,{emit:i,slots:a}){const o=M(()=>te(e.color,e.className,v(e.active,"active"),v(e.collapsing,"collapsing"),v(e.disabled,"disabled"),v(e.error,"error"),v(e.negative,"negative"),v(e.positive,"positive"),v(e.selectable,"selectable"),v(e.singleLine,"single line"),v(e.warning,"warning"),Pe(e.verticalAlign,"aligned"),Pe(e.marked,"marked"),Tl(e.textAlign))),s=()=>{e.selectable&&i("click-cell")};return()=>{var c,d;return t("td",{class:o.value,rowspan:e.rowspan,onClick:s},[e.selectable?t("a",null,[(c=a.default)==null?void 0:c.call(a)]):(d=a.default)==null?void 0:d.call(a)])}}}),bd=F({props:{columns:Array,definitionClass:String,rows:Array,rowsGroupBy:String,rowActive:Function,rowClass:[Boolean,Function],rowColor:Function,rowDisabled:Function,rowError:Function,rowNegative:Function,rowPositive:Function,rowWarning:Function},emits:["row-click","cell-click"],setup(e,{emit:i,slots:a}){const o=(c,d)=>{var f;if(!e.rows||!e.rowsGroupBy||e.rowsGroupBy!==c||d===0)return!0;const u=e.rows[d][c],p=(f=e.rows[d-1])==null?void 0:f[c];return u!==p},s=(c,d)=>{var f;if(!e.rows||!e.rowsGroupBy||e.rowsGroupBy!==c)return;const u=e.rows[d][c];let p=u,g=0;for(;u===p&&(g++,p=(f=e.rows[d+g])==null?void 0:f[c],!!p););return g>1?g:void 0};return()=>{var c,d;return!e.columns||e.columns.length===0?t("tbody",null,[(c=a.default)==null?void 0:c.call(a)]):t("tbody",null,[(d=e.rows)==null?void 0:d.map((f,u)=>{var p;return t("tr",{key:f.id,class:typeof e.rowClass=="function"?e.rowClass({data:f,index:u}):e.rowClass,onClick:()=>i("row-click",{data:f})},[a.definition&&t(Bo,{className:e.definitionClass},{default:()=>{var g;return[(g=a.definition)==null?void 0:g.call(a,{data:f})]}}),(p=e.columns)==null?void 0:p.map(g=>{var m,_,w,S,A,T,L;const{field:h,header:b,active:C,cellClass:$,collapsing:E,color:V,disabled:N,error:z,negative:G,positive:X,marked:Y,selectable:pe,warning:xe}=g.props,U=o(h,u),W=s(h,u);return U&&t(Bo,{"data-label":b,key:h,className:typeof $=="function"?$({data:f,value:f[h],index:u}):$,rowspan:W,active:((m=e.rowActive)==null?void 0:m.call(e,{data:f,index:u}))||(C==null?void 0:C({value:f[h],index:u})),collapsing:E,color:((_=e.rowColor)==null?void 0:_.call(e,{data:f,index:u}))||(V==null?void 0:V({value:f[h],index:u})),disabled:((w=e.rowDisabled)==null?void 0:w.call(e,{data:f,index:u}))||(N==null?void 0:N({value:f[h],index:u})),error:((S=e.rowError)==null?void 0:S.call(e,{data:f,index:u}))||(z==null?void 0:z({value:f[h],index:u})),negative:((A=e.rowNegative)==null?void 0:A.call(e,{data:f,index:u}))||(G==null?void 0:G({value:f[h],index:u})),positive:((T=e.rowPositive)==null?void 0:T.call(e,{data:f,index:u}))||(X==null?void 0:X({value:f[h],index:u})),marked:Y==null?void 0:Y({data:f,value:f[h],index:u}),selectable:typeof pe=="function"?pe==null?void 0:pe({data:f,value:f[h],index:u}):pe,warning:((L=e.rowWarning)==null?void 0:L.call(e,{data:f,index:u}))||(xe==null?void 0:xe({value:f[h],index:u})),"onClick-cell":()=>{i("cell-click",{data:f,value:f[h],index:u})}},{default:()=>{var ue,le;return[g.children?(le=(ue=g.children).body)==null?void 0:le.call(ue,{data:f}):f[h]]}})})])})])}}}),vd=F({props:{fullWidth:Boolean},setup(e){const{fullWidth:i}=e;return{computedClass:M(()=>te(v(i,"full-width")))}},render(){var e,i,a,o;return this.computedClass?ee("tfoot",{class:this.computedClass},(i=(e=this.$slots).default)==null?void 0:i.call(e)):ee("tfoot",{},(o=(a=this.$slots).default)==null?void 0:o.call(a))}}),Jv=F({props:{attached:[Boolean,String],basic:[Boolean,String],celled:Boolean,collapsing:Boolean,color:String,columns:Number,compact:[Boolean,String],definition:Boolean,definitionClass:String,fixed:Boolean,hideHeader:Boolean,inverted:Boolean,items:Array,rowActive:Function,rowClass:[Boolean,Function],rowColor:Function,rowDisabled:Function,rowError:Function,rowNegative:Function,rowPositive:Function,rowWarning:Function,rowsGroupBy:String,padded:[Boolean,String],selectable:Boolean,singleLine:Boolean,size:String,stackable:Boolean,striped:Boolean,structured:Boolean,unstackable:Boolean,...Uv()},setup(e,{emit:i,slots:a}){const{scrollingClasses:o}=Yv(e),s=M(()=>te("ui",e.color,e.size,v(e.celled,"celled"),v(e.collapsing,"collapsing"),v(e.definition,"definition"),v(e.fixed,"fixed"),v(e.inverted,"inverted"),v(e.selectable,"selectable"),v(e.singleLine,"single line"),v(e.stackable,"stackable"),v(e.striped,"striped"),v(e.structured,"structured"),v(e.unstackable,"unstackable"),Ie(e.attached,"attached"),Ie(e.basic,"basic"),Ie(e.compact,"compact"),Ie(e.padded,"padded"),ri(e.columns,"column"),o.value,"table")),c=M(()=>{var d;const f=(d=a.default)==null?void 0:d.call(a);return f==null?void 0:f.filter(u=>{var p;return((p=u.type)==null?void 0:p.name)==="Column"})});return()=>{var d;return!c.value||c.value.length===0?t("table",{class:s.value},[(d=a.default)==null?void 0:d.call(a)]):t("table",{class:s.value},[!e.hideHeader&&t(_d,{columns:c.value,definition:!!a.definition},{default:a.header}),t(bd,{columns:c.value,definitionClass:e.definitionClass,rows:e.items,rowsGroupBy:e.rowsGroupBy,rowActive:e.rowActive,rowClass:e.rowClass,rowColor:e.rowColor,rowDisabled:e.rowDisabled,rowError:e.rowError,rowNegative:e.rowNegative,rowPositive:e.rowPositive,rowWarning:e.rowWarning,"onRow-click":f=>e.selectable&&i("row:select",{data:f.data}),"onCell-click":f=>i("cell:select",{data:f.data,value:f.value})},{definition:a.definition}),t(vd,null,a.footer)])}}}),Wv=F({props:{singleLine:Boolean,textAlign:String,width:Number},setup(e){return{computedClass:M(()=>te(v(e.singleLine,"single line"),Pe(e.textAlign,"aligned"),ri(e.width,"wide")))}},render(){var e,i,a,o;return this.computedClass?t("th",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)]):t("th",null,[(o=(a=this.$slots).default)==null?void 0:o.call(a)])}}),Kv=F({props:{active:Boolean,color:String,disabled:Boolean,error:Boolean,negative:Boolean,positive:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:M(()=>te(e.color,v(e.active,"active"),v(e.disabled,"disabled"),v(e.error,"error"),v(e.negative,"negative"),v(e.positive,"positive"),v(e.warning,"warning"),Pe(e.textAlign,"aligned"),Pe(e.verticalAlign,"aligned")))}},render(){var e,i,a,o;return this.computedClass?t("tr",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)]):t("tr",null,[(o=(a=this.$slots).default)==null?void 0:o.call(a)])}}),Xv=F({name:"Column",props:{active:Function,cellClass:[Boolean,Function],collapsing:Boolean,field:String,header:String,error:Function,color:Function,negative:Function,positive:Function,marked:Function,selectable:[Boolean,Function],warning:Function}}),Qv={install(e){e.component("SuiTable",Jv),e.component("SuiTableBody",bd),e.component("SuiTableCell",Bo),e.component("SuiTableFooter",vd),e.component("SuiTableHeader",_d),e.component("SuiTableHeaderCell",Wv),e.component("SuiTableRow",Kv),e.component("SuiColumn",Xv)}};function Zv(e,i){e.indexOf(i)===-1&&e.push(i)}const Sd=(e,i,a)=>Math.min(Math.max(a,e),i),Vt={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},Za=e=>typeof e=="number",ml=e=>Array.isArray(e)&&!Za(e[0]),e1=(e,i,a)=>{const o=i-e;return((a-e)%o+o)%o+e};function t1(e,i){return ml(e)?e[e1(0,e.length,i)]:e}const yd=(e,i,a)=>-a*e+a*i+e,wd=()=>{},yi=e=>e,As=(e,i,a)=>i-e===0?1:(a-e)/(i-e);function Cd(e,i){const a=e[e.length-1];for(let o=1;o<=i;o++){const s=As(0,i,o);e.push(yd(a,1,s))}}function i1(e){const i=[0];return Cd(i,e-1),i}function l1(e,i=i1(e.length),a=yi){const o=e.length,s=o-i.length;return s>0&&Cd(i,s),c=>{let d=0;for(;d<o-2&&!(c<i[d+1]);d++);let f=Sd(0,1,As(i[d],i[d+1],c));return f=t1(a,d)(f),yd(e[d],e[d+1],f)}}const Ad=e=>Array.isArray(e)&&Za(e[0]),$o=e=>typeof e=="object"&&!!e.createAnimation,Al=e=>typeof e=="function",a1=e=>typeof e=="string",Zl={ms:e=>e*1e3,s:e=>e/1e3},xd=(e,i,a)=>(((1-3*a+3*i)*e+(3*a-6*i))*e+3*i)*e,n1=1e-7,o1=12;function s1(e,i,a,o,s){let c,d,f=0;do d=i+(a-i)/2,c=xd(d,o,s)-e,c>0?a=d:i=d;while(Math.abs(c)>n1&&++f<o1);return d}function Gl(e,i,a,o){if(e===i&&a===o)return yi;const s=c=>s1(c,0,1,e,a);return c=>c===0||c===1?c:xd(s(c),i,o)}const r1=(e,i="end")=>a=>{a=i==="end"?Math.min(a,.999):Math.max(a,.001);const o=a*e,s=i==="end"?Math.floor(o):Math.ceil(o);return Sd(0,1,s/e)},Pr={ease:Gl(.25,.1,.25,1),"ease-in":Gl(.42,0,1,1),"ease-in-out":Gl(.42,0,.58,1),"ease-out":Gl(0,0,.58,1)},u1=/\((.*?)\)/;function zr(e){if(Al(e))return e;if(Ad(e))return Gl(...e);if(Pr[e])return Pr[e];if(e.startsWith("steps")){const i=u1.exec(e);if(i){const a=i[1].split(",");return r1(parseFloat(a[0]),a[1].trim())}}return yi}class kd{constructor(i,a=[0,1],{easing:o,duration:s=Vt.duration,delay:c=Vt.delay,endDelay:d=Vt.endDelay,repeat:f=Vt.repeat,offset:u,direction:p="normal",autoplay:g=!0}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=yi,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((_,w)=>{this.resolve=_,this.reject=w}),o=o||Vt.easing,$o(o)){const _=o.createAnimation(a);o=_.easing,a=_.keyframes||a,s=_.duration||s}this.repeat=f,this.easing=ml(o)?yi:zr(o),this.updateDuration(s);const m=l1(a,u,ml(o)?o.map(zr):yi);this.tick=_=>{var w;c=c;let S=0;this.pauseTime!==void 0?S=this.pauseTime:S=(_-this.startTime)*this.rate,this.t=S,S/=1e3,S=Math.max(S-c,0),this.playState==="finished"&&this.pauseTime===void 0&&(S=this.totalDuration);const A=S/this.duration;let T=Math.floor(A),L=A%1;!L&&A>=1&&(L=1),L===1&&T--;const h=T%2;(p==="reverse"||p==="alternate"&&h||p==="alternate-reverse"&&!h)&&(L=1-L);const b=S>=this.totalDuration?1:Math.min(L,1),C=m(this.easing(b));i(C),this.pauseTime===void 0&&(this.playState==="finished"||S>=this.totalDuration+d)?(this.playState="finished",(w=this.resolve)===null||w===void 0||w.call(this,C)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},g&&this.play()}play(){const i=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=i-this.pauseTime:this.startTime||(this.startTime=i),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var i;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(i=this.reject)===null||i===void 0||i.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(i){this.duration=i,this.totalDuration=i*(this.repeat+1)}get currentTime(){return this.t}set currentTime(i){this.pauseTime!==void 0||this.rate===0?this.pauseTime=i:this.startTime=performance.now()-i/this.rate}get playbackRate(){return this.rate}set playbackRate(i){this.rate=i}}class c1{setAnimation(i){this.animation=i,i==null||i.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const On=new WeakMap;function Bd(e){return On.has(e)||On.set(e,{transforms:[],values:new Map}),On.get(e)}function d1(e,i){return e.has(i)||e.set(i,new c1),e.get(i)}const p1=["","X","Y","Z"],m1=["translate","scale","rotate","skew"],en={x:"translateX",y:"translateY",z:"translateZ"},Fr={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:e=>e+"deg"},f1={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:e=>e+"px"},rotate:Fr,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:yi},skew:Fr},ca=new Map,xs=e=>`--motion-${e}`,tn=["x","y","z"];m1.forEach(e=>{p1.forEach(i=>{tn.push(e+i),ca.set(xs(e+i),f1[e])})});const g1=(e,i)=>tn.indexOf(e)-tn.indexOf(i),h1=new Set(tn),$d=e=>h1.has(e),_1=(e,i)=>{en[i]&&(i=en[i]);const{transforms:a}=Bd(e);Zv(a,i),e.style.transform=b1(a)},b1=e=>e.sort(g1).reduce(v1,"").trim(),v1=(e,i)=>`${e} ${i}(var(${xs(i)}))`,To=e=>e.startsWith("--"),Vr=new Set;function S1(e){if(!Vr.has(e)){Vr.add(e);try{const{syntax:i,initialValue:a}=ca.has(e)?ca.get(e):{};CSS.registerProperty({name:e,inherits:!1,syntax:i,initialValue:a})}catch{}}}const qn=(e,i)=>document.createElement("div").animate(e,i),Mr={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{qn({opacity:[1]})}catch{return!1}return!0},finished:()=>!!qn({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{qn({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},Gn={},ol={};for(const e in Mr)ol[e]=()=>(Gn[e]===void 0&&(Gn[e]=Mr[e]()),Gn[e]);const y1=.015,w1=(e,i)=>{let a="";const o=Math.round(i/y1);for(let s=0;s<o;s++)a+=e(As(0,o-1,s))+", ";return a.substring(0,a.length-2)},Nr=(e,i)=>Al(e)?ol.linearEasing()?`linear(${w1(e,i)})`:Vt.easing:Ad(e)?C1(e):e,C1=([e,i,a,o])=>`cubic-bezier(${e}, ${i}, ${a}, ${o})`;function A1(e,i){for(let a=0;a<e.length;a++)e[a]===null&&(e[a]=a?e[a-1]:i());return e}const x1=e=>Array.isArray(e)?e:[e];function Do(e){return en[e]&&(e=en[e]),$d(e)?xs(e):e}const La={get:(e,i)=>{i=Do(i);let a=To(i)?e.style.getPropertyValue(i):getComputedStyle(e)[i];if(!a&&a!==0){const o=ca.get(i);o&&(a=o.initialValue)}return a},set:(e,i,a)=>{i=Do(i),To(i)?e.style.setProperty(i,a):e.style[i]=a}};function Td(e,i=!0){if(!(!e||e.playState==="finished"))try{e.stop?e.stop():(i&&e.commitStyles(),e.cancel())}catch{}}function k1(e,i){var a;let o=(i==null?void 0:i.toDefaultUnit)||yi;const s=e[e.length-1];if(a1(s)){const c=((a=s.match(/(-?[\d.]+)([a-z%]*)/))===null||a===void 0?void 0:a[2])||"";c&&(o=d=>d+c)}return o}function B1(){return window.__MOTION_DEV_TOOLS_RECORD}function $1(e,i,a,o={},s){const c=B1(),d=o.record!==!1&&c;let f,{duration:u=Vt.duration,delay:p=Vt.delay,endDelay:g=Vt.endDelay,repeat:m=Vt.repeat,easing:_=Vt.easing,persist:w=!1,direction:S,offset:A,allowWebkitAcceleration:T=!1,autoplay:L=!0}=o;const h=Bd(e),b=$d(i);let C=ol.waapi();b&&_1(e,i);const $=Do(i),E=d1(h.values,$),V=ca.get($);return Td(E.animation,!($o(_)&&E.generator)&&o.record!==!1),()=>{const N=()=>{var X,Y;return(Y=(X=La.get(e,$))!==null&&X!==void 0?X:V==null?void 0:V.initialValue)!==null&&Y!==void 0?Y:0};let z=A1(x1(a),N);const G=k1(z,V);if($o(_)){const X=_.createAnimation(z,i!=="opacity",N,$,E);_=X.easing,z=X.keyframes||z,u=X.duration||u}if(To($)&&(ol.cssRegisterProperty()?S1($):C=!1),b&&!ol.linearEasing()&&(Al(_)||ml(_)&&_.some(Al))&&(C=!1),C){V&&(z=z.map(pe=>Za(pe)?V.toDefaultUnit(pe):pe)),z.length===1&&(!ol.partialKeyframes()||d)&&z.unshift(N());const X={delay:Zl.ms(p),duration:Zl.ms(u),endDelay:Zl.ms(g),easing:ml(_)?void 0:Nr(_,u),direction:S,iterations:m+1,fill:"both"};f=e.animate({[$]:z,offset:A,easing:ml(_)?_.map(pe=>Nr(pe,u)):void 0},X),f.finished||(f.finished=new Promise((pe,xe)=>{f.onfinish=pe,f.oncancel=xe}));const Y=z[z.length-1];f.finished.then(()=>{w||(La.set(e,$,Y),f.cancel())}).catch(wd),T||(f.playbackRate=1.000001)}else if(s&&b)z=z.map(X=>typeof X=="string"?parseFloat(X):X),z.length===1&&z.unshift(parseFloat(N())),f=new s(X=>{La.set(e,$,G?G(X):X)},z,Object.assign(Object.assign({},o),{duration:u,easing:_}));else{const X=z[z.length-1];La.set(e,$,V&&Za(X)?V.toDefaultUnit(X):X)}return d&&c(e,i,z,{duration:u,delay:p,easing:_,repeat:m,offset:A},"motion-one"),E.setAnimation(f),f&&!L&&f.pause(),f}}const T1=(e,i)=>e[i]?Object.assign(Object.assign({},e),e[i]):Object.assign({},e);function D1(e,i){var a;return typeof e=="string"?i?((a=i[e])!==null&&a!==void 0||(i[e]=document.querySelectorAll(e)),e=i[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const L1=e=>e(),Dd=(e,i,a=Vt.duration)=>new Proxy({animations:e.map(L1).filter(Boolean),duration:a,options:i},E1),I1=e=>e.animations[0],E1={get:(e,i)=>{const a=I1(e);switch(i){case"duration":return e.duration;case"currentTime":return Zl.s((a==null?void 0:a[i])||0);case"playbackRate":case"playState":return a==null?void 0:a[i];case"finished":return e.finished||(e.finished=Promise.all(e.animations.map(R1)).catch(wd)),e.finished;case"stop":return()=>{e.animations.forEach(o=>Td(o))};case"forEachNative":return o=>{e.animations.forEach(s=>o(s,e))};default:return typeof(a==null?void 0:a[i])>"u"?void 0:()=>e.animations.forEach(o=>o[i]())}},set:(e,i,a)=>{switch(i){case"currentTime":a=Zl.ms(a);case"playbackRate":for(let o=0;o<e.animations.length;o++)e.animations[o][i]=a;return!0}return!1}},R1=e=>e.finished;function P1(e,i,a){return Al(e)?e(i,a):e}function z1(e){return function(i,a,o={}){i=D1(i);const s=i.length,c=[];for(let d=0;d<s;d++){const f=i[d];for(const u in a){const p=T1(o,u);p.delay=P1(p.delay,d,s);const g=$1(f,u,a[u],p,e);c.push(g)}}return Dd(c,o,o.duration)}}const F1=z1(kd);function V1(e,i={}){return Dd([()=>{const a=new kd(e,[0,1],i);return a.finished.catch(()=>{}),a}],i,i.duration)}function M1(e,i,a){return(Al(e)?V1:F1)(e,i,a)}const _e=(e,i)=>(a,{duration:o,keyframesOverride:s={}})=>M1(a,{...e,...s},{autoplay:!1,...i,duration:o}),Hr=_e({transform:["scale(0.8) translateZ(0px)","scale(0.8) translateZ(0px)","scale(1.05) translateZ(0px)","scale(1) translateZ(0px)"],opacity:[null,.7,1,null],zIndex:[-1,-1,999,999]},{duration:.5,offset:[0,.1,.8,1]}),N1=_e({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,-1,null,-1]},{duration:.5,offset:[0,.5,.8,1]}),H1=_e({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,1,null,1]},{duration:.5,offset:[0,.5,.8,1]}),O1=_e({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(0)","scale(1)"],opacity:[0,1]},{duration:.4,offset:[0,1]}),q1=_e({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(1)","scale(0)"],opacity:[1,0]},{duration:.4,offset:[0,1]}),G1=_e({opacity:[0,1]},{duration:.5,offset:[0,1]}),j1=_e({opacity:[0,1],transform:["translateY(10%)","export translateY(0%)"]},{duration:.5,offset:[0,1]}),U1=_e({opacity:[0,1],transform:["translateY(-10%)","translateY(0%)"]},{duration:.5,offset:[0,1]}),Y1=_e({opacity:[0,1],transform:["translateX(10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),J1=_e({opacity:[0,1],transform:["translateX(-10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),W1=_e({opacity:[1,0]},{duration:.5,offset:[0,1]}),K1=_e({opacity:[1,0],transform:["translateY(0%)","texport ranslateY(5%)"]},{duration:.5,offset:[0,1]}),X1=_e({opacity:[1,0],transform:["translateY(0%)","translateY(-5%)"]},{duration:.5,offset:[0,1]}),Q1=_e({opacity:[1,0],transform:["translateX(0%)","translateX(5%)"]},{duration:.5,offset:[0,1]}),Z1=_e({opacity:[1,0],transform:["translateX(0%)","translateX(-5%)"]},{duration:.5,offset:[0,1]}),eS=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["scale3d(.3, .3, .3)","scale3d(1.1, 1.1, 1.1)","scale3d(.9, .9, .9)","scale3d(1.03, 1.03, 1.03)","scale3d(.97, .97, .97)","scale3d(1, 1, 1)"],opacity:[0,null,null,1,null,1]},{duration:.6,offset:[0,.2,.4,.6,.8,1]}),tS=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, 1500px, 0","translate3d(0, -20px, 0)","translate3d(0, 10px, 0)","translate3d(0, -5px, 0)","translate3d(0, 0, 0)"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),iS=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, -1500px, 0","translate3d(0, 25px, 0)","translate3d(0, -10px, 0)","translate3d(0, 5px, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),lS=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(1500px, 0, 0","translate3d(-25px, 0, 0)","translate3d(10px, 0, 0)","translate3d(-5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),aS=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(-1500px, 0, 0","translate3d(25px, 0, 0)","translate3d(-10px, 0, 0)","translate3d(5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),nS=_e({transform:["scale3d(.9, .9, .9)","scale3d(1.1, 1.1, 1.1)","scale3d(1.1, 1.1, 1.1)","scale3d(.3, .3, .3)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.5,.55,1]}),oS=_e({transform:["translate3d(0, 10px, 0)","translate3d(0, -20px, 0)","translate3d(0, -20px, 0)","translate3d(0, 2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),sS=_e({transform:["translate3d(0, -10px, 0)","translate3d(0, 20px, 0)","translate3d(0, 20px, 0)","translate3d(0, -2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),rS=_e({transform:["translate3d(-20px, 0, 0)","translate3d(2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),uS=_e({transform:["translate3d(20px, 0, 0)","translate3d(-2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),cS=_e({transform:["perspective(2000px) rotateY(-90deg)","perspective(2000px) rotateY(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),dS=_e({transform:["perspective(2000px) rotateY(0deg)","perspective(2000px) rotateY(90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),pS=_e({transform:["perspective(2000px) rotateX(-90deg)","perspective(2000px) rotateX(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),mS=_e({transform:["perspective(2000px) rotateX(0deg)","perspective(2000px) rotateX(-90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),fS=_e({transform:["scale(0.8)","scale(1)"],opacity:[0,1]},{duration:.5,offset:[0,1]}),gS=_e({transform:["scale(1)","scale(0.9)"],opacity:[1,0]},{duration:.5,offset:[0,1]}),Ld={transform:["scaleY(0)","scaleY(1)"],opacity:[0,1]},Id={transform:["scaleX(0)","scaleX(1)"],opacity:[0,1]},Ed={transform:["scaleY(1)","scaleY(0)"],opacity:[1,0]},hS={transform:["scaleX(1)","scaleX(0)"],opacity:[1,0]},_S=_e({transformOrigin:"top center",...Ld},{offset:[0,1]}),bS=_e({transformOrigin:"bottom center",...Ld},{offset:[0,1]}),vS=_e({transformOrigin:"center right",...Id},{offset:[0,1]}),SS=_e({transformOrigin:"center left",...Id},{offset:[0,1]}),yS=_e({transformOrigin:"top center",...Ed},{offset:[0,1]}),wS=_e({transformOrigin:"bottom center",...Ed},{offset:[0,1]}),Or=_e({transformOrigin:"center left",...hS},{offset:[0,1]}),ki=.8,fl={transform:["perspective(1000px) rotateX(90deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(15deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},gl={transform:["perspective(1000px) rotateY(-90deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-17.5deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},hl={transform:["perspective(1000px) rotateX(0deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(17.5deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},_l={transform:["perspective(1000px) rotateY(0deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(-10deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},CS=_e({transformOrigin:"top center",transform:fl.transform,opacity:fl.opacity},{duration:ki,offset:fl.offset}),AS=_e({transformOrigin:"bottom center",transform:fl.transform,opacity:fl.opacity},{duration:ki,offset:fl.offset}),xS=_e({transformOrigin:"center right",transform:gl.transform,opacity:gl.opacity},{duration:ki,offset:gl.offset}),kS=_e({transformOrigin:"center left",transform:gl.transform,opacity:gl.opacity},{duration:ki,offset:gl.offset}),BS=_e({transformOrigin:"top center",transform:hl.transform,opacity:hl.opacity},{duration:ki,offset:hl.offset}),$S=_e({transformOrigin:"bottom center",transform:hl.transform,opacity:hl.opacity},{duration:ki,offset:hl.offset}),TS=_e({transformOrigin:"center right",transform:_l.transform,opacity:_l.opacity},{duration:ki,offset:_l.offset}),DS=_e({transformOrigin:"center left",transform:_l.transform,opacity:_l.opacity},{duration:ki,offset:_l.offset}),LS=_e({transform:["scale(0)","scale(1)"],opacity:[1,1]},{offset:[0,1]}),IS=_e({transform:["scale(1)","scale(0)"],opacity:[1,1]},{offset:[0,1]}),ES=_e({transform:["translateY(0)","translateY(0)","translateY(-30px)","translateY(0)","translateY(-15px)","translateY(0)","translateY(0)"]},{offset:[0,.2,.4,.5,.6,.8,1]}),RS=_e({opacity:[1,0,1,0,1]},{offset:[0,.25,.5,.75,1]}),PS=_e({animationTimingFunction:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",backgroundColor:["#FCFCFD","#FFF6CD","FCFCFD"]},{duration:2,offset:[0,.3,1]}),zS=_e({transform:["scale3d(1, 1, 1)","scale3d(1.25, 0.75, 1)","scale3d(0.75, 1.25, 1)","scale3d(1.15, 0.85, 1)","scale3d(0.95, 1.05, 1)","scale3d(1.05, 0.95, 1)","scale3d(1, 1, 1)"]},{duration:.75,offset:[0,.3,.4,.5,.6,.75,1]}),FS=_e({transform:["scale(1)","scale(0.9)","scale(1)"],opacity:[1,.7,1]},{offset:[0,.5,1]}),VS=_e({transform:["translateX(0)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(0)"]}),MS=_e({transform:["scale(1)","scale(0.9) rotate(-3deg)","scale(0.9) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1) rotate(0)"]},{offset:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]}),NS={browse:[Hr,N1],"browse right":[Hr,H1],drop:[O1,q1],fade:[G1,W1],"fade up":[j1,K1],"fade down":[U1,X1],"fade left":[Y1,Q1],"fade right":[J1,Z1],fly:[eS,nS],"fly up":[tS,oS],"fly down":[iS,sS],"fly left":[lS,rS],"fly right":[aS,uS],"horizontal flip":[cS,dS],"vertical flip":[pS,mS],scale:[fS,gS],"slide up":[bS,wS],"slide down":[_S,yS],"slide left":[vS,Or],"slide right":[SS,Or],"swing up":[AS,$S],"swing down":[CS,BS],"swing left":[xS,TS],"swing right":[kS,DS],zoom:[LS,IS]},HS={bounce:[ES,void 0],flash:[RS,void 0],glow:[PS,void 0],jiggle:[zS,void 0],pulse:[FS,void 0],shake:[VS,void 0],tada:[MS,void 0]},Rd=e=>({...NS,...HS})[e],OS=e=>{const[i,a]=Rd(e.animation),o=M(()=>e.duration?e.duration/1e3:.5),s=M(()=>(d,f)=>{if(!i)return f();const u=i(d,{duration:o.value});u.play(),u.finished.then(f)}),c=M(()=>(d,f)=>{if(!a)return f();const u=a(d,{duration:o.value});u.play(),u.finished.then(f)});return{onEnter:s,onLeave:c}},qS=F({props:{animation:{type:String,default:"fade"},duration:{type:Number,default:500}},setup(e){const{onEnter:i,onLeave:a}=OS(e);return{onEnter:i,onLeave:a}},render(){return t(Sn,{onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,i;return[(i=(e=this.$slots).default)==null?void 0:i.call(e)]}})}}),Pd=F({props:{tag:String,animation:{type:String,default:"fade"},enterKeyframes:{type:Function,default:()=>({})},leaveKeyframes:{type:Function,default:()=>({})}},setup(e){const[i,a]=Rd(e.animation),o=M(()=>(c,d)=>{if(!i)return d();const f=i(c,{duration:.5,keyframesOverride:e.enterKeyframes(c)});f.play(),f.finished.then(d)}),s=M(()=>(c,d)=>{if(!a)return d();const f=a(c,{duration:.5,keyframesOverride:e.leaveKeyframes(c)});f.play(),f.finished.then(d)});return{onEnter:o,onLeave:s}},render(){return t(xc,{tag:this.tag,onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,i;return[(i=(e=this.$slots).default)==null?void 0:i.call(e)]}})}}),GS={install(e){e.component("SuiTransition",qS),e.component("SuiTransitionGroup",Pd)}},jS=Object.freeze(Object.defineProperty({__proto__:null,Accordion:o_,Advertisement:r_,Breadcrumb:u_,Button:__,Calendar:E_,Card:H_,Checkbox:O_,Comment:Q_,Container:Z_,Dimmer:tb,Divider:ib,Dropdown:gb,Embed:_b,Emoji:bb,Feed:Tb,Flag:Db,Form:Ib,Grid:Eb,Header:Rb,Icon:c_,Image:cb,Input:Pb,Item:Gb,Label:ub,List:Kb,Menu:Zb,Message:av,Modal:pv,Popup:gv,Progress:bv,Rail:Sv,Rating:Cv,Reveal:Av,Search:kv,Segment:$v,Sidebar:Dv,Slider:Iv,Statistic:Pv,Step:Ov,Tab:Gv,Table:Qv,Transition:GS},Symbol.toStringTag,{value:"Module"})),ze=F({props:{active:Boolean,color:String,disabled:Boolean,fast:Boolean,indeterminate:Boolean,inline:[Boolean,String],inverted:Boolean,size:String,slow:Boolean,text:Boolean},setup(e,{slots:i}){return{computedClass:M(()=>{var a;return te("ui",e.color,e.size,v(e.active,"active"),v(e.disabled,"disabled"),v(e.fast,"fast"),v(e.indeterminate,"indeterminate"),v(e.inverted,"inverted"),v(e.slow,"slow"),v(e.text||!!((a=i.default)!=null&&a.call(i)),"text"),Ie(e.inline,"inline"),"loader")})}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),jn=F({name:"SuiToastActions",props:{aligned:String,basic:Boolean,vertical:Boolean,...ys()},setup(e,{slots:i}){const a=M(()=>te("actions",e.basic&&"basic",e.aligned,e.vertical&&"vertical"));return()=>{var o;return e.attached?t(ft,{attached:e.attached,vertical:e.vertical},{default:()=>{var s;return[(s=i.default)==null?void 0:s.call(i)]}}):t("div",{class:a.value},[(o=i.default)==null?void 0:o.call(i)])}}}),US=F({name:"SuiToastBox",props:{unclickable:Boolean,verticalAttached:Boolean},setup(e,{slots:i}){const a=M(()=>te("floating toast-box compact",e.unclickable&&"unclickable"));return()=>{var o,s;return e.verticalAttached?t("div",{class:a.value,style:"display: block !important;"},[t("div",{class:"vertical attached compact right"},[(o=i.default)==null?void 0:o.call(i)])]):t("div",{class:a.value,style:"display: block !important;"},[(s=i.default)==null?void 0:s.call(i)])}}});function Un(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ct(e)}const YS=F({name:"SuiToast",emits:["click","close"],props:{id:Number,displayTime:{type:Number,default:3e3},type:String,title:String,message:{type:String,required:!0},centered:Boolean,messageStyle:Boolean,actions:Function,actionsProps:Object,showProgress:{type:String},showProgressColor:String,showProgressUp:Boolean,inverted:Boolean,...ws()},setup(e,{emit:i}){const{colorClasses:a}=Cs(e),o=M(()=>{var d,f,u,p,g;return te(e.centered&&"center aligned",e.type||"neutral",a.value,"ui",e.messageStyle?"message":"toast",e.actions&&!((d=e.actionsProps)!=null&&d.vertical)&&"actions",((f=e.actionsProps)==null?void 0:f.attached)==="top"&&"bottom attached",((u=e.actionsProps)==null?void 0:u.attached)==="bottom"&&"top attached",((p=e.actionsProps)==null?void 0:p.attached)==="left"&&"left attached",((g=e.actionsProps)==null?void 0:g.vertical)&&"vertical","compact")}),s=j(e.showProgressUp?0:100),c=()=>{const d=e.displayTime/100;setTimeout(()=>{const f=setInterval(()=>{if(e.showProgressUp){s.value>=100&&clearInterval(f),s.value+=1;return}s.value<=0&&clearInterval(f),s.value-=1},d)},500)};return Ai(()=>e.showProgress&&c()),setTimeout(()=>e.displayTime>0&&i("close"),e.displayTime+750),{classes:o,progress:s}},render(){var e;let i,a,o;return t(US,{unclickable:!!this.actions,verticalAttached:((e=this.actionsProps)==null?void 0:e.attached)==="left"},{default:()=>{var s,c,d,f;return[this.showProgress==="top"&&t(Ao,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null),this.actions&&(((s=this.actionsProps)==null?void 0:s.attached)==="top"||((c=this.actionsProps)==null?void 0:c.attached)==="left")&&t(jn,this.actionsProps,Un(i=this.actions({close:()=>this.$emit("close")}))?i:{default:()=>[i]}),t("div",{role:"alert",class:this.classes,onClick:()=>!this.actions&&this.$emit("click")},[t("div",{class:"content"},[this.title&&t("div",{class:"ui header"},[this.title]),t("div",{class:"message"},[this.message])]),this.actions&&!((d=this.actionsProps)!=null&&d.attached)&&t(jn,this.actionsProps,Un(a=this.actions({close:()=>this.$emit("close")}))?a:{default:()=>[a]})]),this.actions&&((f=this.actionsProps)==null?void 0:f.attached)==="bottom"&&t(jn,this.actionsProps,Un(o=this.actions({close:()=>this.$emit("close")}))?o:{default:()=>[o]}),this.showProgress==="bottom"&&t(Ao,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null)]}})}}),JS=["top right","top center","top left","bottom right","bottom center","bottom left","centered"],WS=({defaultValue:e}={})=>({position:{type:String,validator:i=>JS.includes(i),default:e}}),KS=e=>({positionClasses:M(()=>e.position||"")});function XS(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ct(e)}const QS=F({name:"SuiToastContainer",props:{horizontal:Boolean,...ys(),...WS({defaultValue:"top right"})},setup(e){const{items:i,remove:a}=zd(),{attachedClasses:o}=gd(e),{positionClasses:s}=KS(e);return{classes:M(()=>te(o.value||s.value,"ui toast-container",e.horizontal&&"horizontal")),items:i,remove:a,enterKeyframes:c=>{if(!(c instanceof HTMLElement))return{};const d=[0,`${c.offsetHeight}px`],f=[0,`${parseInt(getComputedStyle(c).marginBottom,10)}px`];return{height:d,marginBottom:f}},leaveKeyframes:c=>{if(!(c instanceof HTMLElement))return{};const d=[`${c.offsetWidth}px`,0],f=[`${c.offsetHeight}px`,0],u=e.horizontal?{width:d}:{height:f},p=[`${parseInt(getComputedStyle(c).marginBottom,10)}px`,0];return{...u,marginBottom:p}}}},render(){let e;return t(_n,{to:"body"},{default:()=>[t("div",{class:this.classes},[t(Pd,{animation:"scale",enterKeyframes:this.enterKeyframes,leaveKeyframes:this.leaveKeyframes},XS(e=this.items.filter(({position:i,attached:a})=>this.attached?a===this.attached:i===this.position).filter(({horizontal:i})=>this.horizontal===!!i).map(({id:i,...a})=>t(YS,Zi({key:i},a,{onClick:()=>this.remove(i),onClose:()=>this.remove(i)}),null)))?e:{default:()=>[e]})])]})}}),ZS=j(1),Ml=j([]),zd=()=>({items:Ml,add:e=>{e.position=e.position||"top right",Ml.value=[...Ml.value,{id:ZS.value++,...e}]},remove:e=>{Ml.value=Ml.value.filter(i=>i.id!==e)}}),st=()=>{var e;const i=(e=Kt())==null?void 0:e.appContext,{add:a}=zd();return{toast:o=>{const{position:s,attached:c,horizontal:d}=o;iy({position:s,attached:c,horizontal:d})||ty(i,{position:s,attached:c,horizontal:d}),a(o)}}},ey=(e,{appContext:i,element:a}={})=>{const o=a||document.createElement("div");return i&&(e.appContext=i),Ka(e,o),{vNode:e,el:o}},ty=(e,{position:i="top right",attached:a,horizontal:o=!1}={})=>{const s=ee(QS,{position:i,attached:a,horizontal:o}),{el:c}=ey(s,{appContext:e});return{vNode:s,el:c}},iy=({position:e="top right",attached:i,horizontal:a})=>{const o=i?`.ui.toast-container.${i}.attached`:`.ui.toast-container.${e.split(" ").join(".")}${a?".horizontal":":not(.horizontal)"}`;return document.querySelector(o)};function ly(e){Object.values({...jS}).map(i=>e.use(i))}const ay={install:ly},ny=Object.assign({inheritAttrs:!1},{__name:"DocSectionText",props:["label","onClick"],setup(e){const i=Jc(),a=M(()=>{const s=i.currentRoute.value.path;return s.lastIndexOf("/")===s.length-1?s.slice(0,-1):s}),o=s=>{s.preventDefault();const d=s.target.parentElement.getAttribute("href"),f=d.slice(d.indexOf("#")+1),u=document.getElementById(f);u&&u.scrollIntoView({behavior:"smooth"})};return(s,c)=>{const d=B("SuiHeader"),f=B("SuiGridColumn"),u=B("SuiGridRow");return y(),ye(Ce,null,[t(u,null,{default:l(()=>[t(f,null,{default:l(()=>[t(d,{as:"h3",class:"doc-section-text"},{default:l(()=>[n($e(e.label)+" ",1),t(r(ms),{to:`${a.value}#${s.$attrs.id}`,target:"_self",onClick:o},{default:l(()=>[t(r(J),{name:"linkify",color:"grey",size:"small",link:"",fitted:""})]),_:1},8,["to"])]),_:1})]),_:1}),t(f,{textAlign:"right"},{default:l(()=>[t(r(J),{name:"code",color:"grey",link:"",onClick:e.onClick},null,8,["onClick"])]),_:1})]),_:1}),k("p",null,[qi(s.$slots,"default",{},void 0,!0)])],64)}}}),oy=He(ny,[["__scopeId","data-v-a2b78897"]]),sy={class:"inner"},ry={__name:"DocSectionCode",props:["code","hideCode"],setup(e){return(i,a)=>{const o=B("SuiGridColumn"),s=B("SuiGridRow");return y(),x(s,null,{default:l(()=>[t(o,{width:16},{default:l(()=>[qi(i.$slots,"default",{},void 0,!0)]),_:3}),t(o,{width:16,id:"accordion","aria-hidden":e.hideCode},{default:l(()=>[k("div",sy,[Si((y(),ye("pre",null,[k("code",null,$e(e.code)+`
`,1)])),[[r(Fa)]])])]),_:1},8,["aria-hidden"])]),_:3})}}},uy=He(ry,[["__scopeId","data-v-965e7ddc"]]),I={__name:"DocSection",props:["label","code"],setup(e){const i=j(!0),a=()=>i.value=!i.value;return(o,s)=>{const c=B("SuiGrid");return y(),ye("section",null,[t(c,{columns:2},{default:l(()=>[t(oy,Zi({label:e.label,"on-click":a},o.$attrs),{default:l(()=>[qi(o.$slots,"description")]),_:3},16,["label"]),t(uy,{code:e.code,"hide-code":i.value},{default:l(()=>[qi(o.$slots,"example")]),_:3},8,["code","hide-code"])]),_:3})])}}},cy=`<template>
  <SuiButton @click="onClick">{{ label }}</SuiButton>
</template>

<script setup>
import { ref } from 'vue'
import { SuiButton } from 'vue-fomantic-ui'

const label = ref('Follow')
const onClick = () => label.value = label.value === 'Follow' ? 'Following' : 'Follow'
<\/script>`,dy={__name:"ButtonDoc",setup(e){const i=j("Follow"),a=()=>i.value=i.value==="Follow"?"Following":"Follow";return(o,s)=>(y(),x(I,{label:"Button",code:cy},{description:l(()=>[n(" A standard button ")]),example:l(()=>[t(r(P),{onClick:a},{default:l(()=>[n($e(i.value),1)]),_:1})]),_:1}))}},py=`<template>
  <SuiButton primary>Save</SuiButton>
  <SuiButton secondary>Okay</SuiButton>
  <SuiButton>Cancel</SuiButton>
</template>`,my={__name:"EmphasisDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Emphasis",code:py},{description:l(()=>[n(" A button can be formatted to show different levels of emphasis ")]),example:l(()=>[t(r(P),{primary:""},{default:l(()=>[n("Save")]),_:1}),t(r(P),{secondary:""},{default:l(()=>[n("Okay")]),_:1}),t(r(P),null,{default:l(()=>[n("Cancel")]),_:1})]),_:1}))}},fy=`<template>
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
</template>`,gy={__name:"AnimatedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Animated",code:fy},{description:l(()=>[n(" A button can animate to show hidden content ")]),example:l(()=>[t(r(P),{animated:""},{default:l(()=>[t(r(Li),{visible:""},{default:l(()=>[n("Next")]),_:1}),t(r(Li),{hidden:""},{default:l(()=>[t(r(J),{name:"arrow right"})]),_:1})]),_:1}),t(r(P),{animated:"vertical"},{default:l(()=>[t(r(Li),{visible:""},{default:l(()=>[t(r(J),{name:"shop"})]),_:1}),t(r(Li),{hidden:""},{default:l(()=>[n("Shop")]),_:1})]),_:1}),t(r(P),{animated:"fade"},{default:l(()=>[t(r(Li),{visible:""},{default:l(()=>[n(" Sign-up for a Pro account ")]),_:1}),t(r(Li),{hidden:""},{default:l(()=>[n("$12.99 a month")]),_:1})]),_:1})]),_:1}))}},hy=`<template>
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
</template>`,_y={__name:"LabeledDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Labeled",code:hy},{description:l(()=>[n(" A button can appear alongside a label ")]),example:l(()=>[t(r(P),{labeled:"right",as:"div"},{default:l(()=>[t(r(P),{icon:"heart",content:" Like"}),t(r(O),{basic:""},{default:l(()=>[n("2,048")]),_:1})]),_:1}),t(r(P),{labeled:"left",as:"div"},{default:l(()=>[t(r(O),{basic:"",pointing:"right"},{default:l(()=>[n("2,048")]),_:1}),t(r(P),{icon:"heart",content:" Like"})]),_:1}),t(r(P),{labeled:"left",as:"div"},{default:l(()=>[t(r(O),{basic:""},{default:l(()=>[n("1,048")]),_:1}),t(r(P),{icon:"fork"})]),_:1})]),_:1}))}},by=`<template>
  <SuiButton icon="cloud" />
</template>`,vy={__name:"IconDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Icon",code:by},{description:l(()=>[n(" A button can have only an icon ")]),example:l(()=>[t(r(P),{icon:"cloud"})]),_:1}))}},Sy=`<template>
  <SuiButton labeled icon="pause" content="Pause" />
  <SuiButton labeled="right" icon="right arrow" content="Next" />
  <SuiButton labeled icon>
    <SuiIcon loading name="spinner" />
    Loading
  </SuiButton>
</template>`,yy={__name:"LabeledIconDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Labeled Icon",code:Sy},{description:l(()=>[n(" A button can use an icon as a label ")]),example:l(()=>[t(r(P),{labeled:"",icon:"pause",content:"Pause"}),t(r(P),{labeled:"right",icon:"right arrow",content:"Next"}),t(r(P),{labeled:"",icon:""},{default:l(()=>[t(r(J),{loading:"",name:"spinner"}),n(" Loading ")]),_:1})]),_:1}))}},wy=`<template>
  <SuiButton basic primary>Primary</SuiButton>
  <SuiButton basic secondary>Secondary</SuiButton>
  <SuiButton basic positive>Positive</SuiButton>
  <SuiButton basic negative>Negative</SuiButton>
</template>`,Cy={__name:"BasicDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Basic",code:wy},{description:l(()=>[n(" A basic button is less pronounced ")]),example:l(()=>[t(r(P),{basic:"",primary:""},{default:l(()=>[n("Primary")]),_:1}),t(r(P),{basic:"",secondary:""},{default:l(()=>[n("Secondary")]),_:1}),t(r(P),{basic:"",positive:""},{default:l(()=>[n("Positive")]),_:1}),t(r(P),{basic:"",negative:""},{default:l(()=>[n("Negative")]),_:1})]),_:1}))}},Ay=`<template>
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
</template>`,xy={__name:"TertiaryDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Tertiary",code:Ay},{description:l(()=>[n(" An none bordered less important button ")]),example:l(()=>[t(r(P),{tertiary:"",primary:""},{default:l(()=>[n("Primary")]),_:1}),t(r(P),{tertiary:"",secondary:""},{default:l(()=>[n("Secondary")]),_:1}),t(r(P),{tertiary:"",color:"red"},{default:l(()=>[n("Red")]),_:1}),t(r(P),{tertiary:"",color:"orange"},{default:l(()=>[n("Orange")]),_:1}),t(r(P),{tertiary:"",color:"yellow"},{default:l(()=>[n("Yellow")]),_:1}),t(r(P),{tertiary:"",color:"olive"},{default:l(()=>[n("Olive")]),_:1}),t(r(P),{tertiary:"",color:"green"},{default:l(()=>[n("Green")]),_:1}),t(r(P),{tertiary:"",color:"teal"},{default:l(()=>[n("Teal")]),_:1}),t(r(P),{tertiary:"",color:"blue"},{default:l(()=>[n("Blue")]),_:1}),t(r(P),{tertiary:"",color:"violet"},{default:l(()=>[n("Violet")]),_:1}),t(r(P),{tertiary:"",color:"purple"},{default:l(()=>[n("Purple")]),_:1}),t(r(P),{tertiary:"",color:"pink"},{default:l(()=>[n("Pink")]),_:1}),t(r(P),{tertiary:"",color:"brown"},{default:l(()=>[n("Brown")]),_:1}),t(r(P),{tertiary:"",color:"grey"},{default:l(()=>[n("Grey")]),_:1}),t(r(P),{tertiary:"",color:"black"},{default:l(()=>[n("Black")]),_:1})]),_:1}))}},ky=`<template>
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
</template>`,By={__name:"InvertedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Inverted",code:ky},{description:l(()=>[n(" A button can be formatted to appear on dark backgrounds ")]),example:l(()=>[t(r(H),{inverted:""},{default:l(()=>[t(r(P),{inverted:"",primary:""},{default:l(()=>[n("Primary")]),_:1}),t(r(P),{inverted:"",secondary:""},{default:l(()=>[n("Secondary")]),_:1}),t(r(P),{inverted:"",color:"red"},{default:l(()=>[n("Red")]),_:1}),t(r(P),{inverted:"",color:"orange"},{default:l(()=>[n("Orange")]),_:1}),t(r(P),{inverted:"",color:"yellow"},{default:l(()=>[n("Yellow")]),_:1}),t(r(P),{inverted:"",color:"olive"},{default:l(()=>[n("Olive")]),_:1}),t(r(P),{inverted:"",color:"green"},{default:l(()=>[n("Green")]),_:1}),t(r(P),{inverted:"",color:"teal"},{default:l(()=>[n("Teal")]),_:1}),t(r(P),{inverted:"",color:"blue"},{default:l(()=>[n("Blue")]),_:1}),t(r(P),{inverted:"",color:"violet"},{default:l(()=>[n("Violet")]),_:1}),t(r(P),{inverted:"",color:"purple"},{default:l(()=>[n("Purple")]),_:1}),t(r(P),{inverted:"",color:"pink"},{default:l(()=>[n("Pink")]),_:1}),t(r(P),{inverted:"",color:"brown"},{default:l(()=>[n("Brown")]),_:1}),t(r(P),{inverted:"",color:"grey"},{default:l(()=>[n("Grey")]),_:1}),t(r(P),{inverted:"",color:"black"},{default:l(()=>[n("Black")]),_:1})]),_:1})]),_:1}))}},$y=`<template>
  <SuiButtonGroup>
    <SuiButton content="One" />
    <SuiButton content="Two" />
    <SuiButton content="Three" />
  </SuiButtonGroup>
</template>`,Ty={__name:"ButtonsDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Buttons",code:$y},{description:l(()=>[n(" Buttons can exist together as a group ")]),example:l(()=>[t(r(ft),null,{default:l(()=>[t(r(P),{content:"One"}),t(r(P),{content:"Two"}),t(r(P),{content:"Three"})]),_:1})]),_:1}))}},Dy=`<template>
  <SuiButtonGroup icon>
    <SuiButton icon="align left" />
    <SuiButton icon="align center" />
    <SuiButton icon="align right" />
    <SuiButton icon="align justify" />
  </SuiButtonGroup>
</template>`,Ly={__name:"IconButtonsDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Icon Buttons",code:Dy},{description:l(()=>[n(" Button groups can show groups of icons ")]),example:l(()=>[t(r(ft),{icon:""},{default:l(()=>[t(r(P),{icon:"align left"}),t(r(P),{icon:"align center"}),t(r(P),{icon:"align right"}),t(r(P),{icon:"align justify"})]),_:1})]),_:1}))}},Iy=k("div",{class:"or"},null,-1),Ey=k("div",{class:"or","data-text":"ou"},null,-1),Ry=`<template>
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
</template>`,Py={__name:"ConditionalsDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Conditionals",code:Ry},{description:l(()=>[n(" Button groups can contain conditionals ")]),example:l(()=>[t(r(ft),null,{default:l(()=>[t(r(P),{content:"Cancel"}),Iy,t(r(P),{content:"Save",positive:""})]),_:1}),t(r(ft),null,{default:l(()=>[t(r(P),{content:"un"}),Ey,t(r(P),{content:"deux",positive:""})]),_:1})]),_:1}))}},zy=`<template>
  <SuiButton active icon="user" content=" Follow" />
</template>`,Fy={__name:"ActiveDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Active",code:zy},{description:l(()=>[n(" A button can show it is currently the active user selection ")]),example:l(()=>[t(r(P),{active:"",icon:"user",content:" Follow"})]),_:1}))}},Vy=`<template>
  <SuiButton disabled icon="user" content=" Followed" />
</template>`,My={__name:"DisabledDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Disabled",code:Vy},{description:l(()=>[n(" A button can show it is currently unable to be interacted with ")]),example:l(()=>[t(r(P),{disabled:"",icon:"user",content:" Followed"})]),_:1}))}},Ny=`<template>
  <SuiButton loading content="Loading" />
  <SuiButton loading="double" primary content="Loading" />
  <SuiButton loading="elastic" secondary content="Loading" />
</template>`,Hy={__name:"LoadingDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Loading",code:Ny},{description:l(()=>[n(" A button can show a loading indicator ")]),example:l(()=>[t(r(P),{loading:"",content:"Loading"}),t(r(P),{loading:"double",primary:"",content:"Loading"}),t(r(P),{loading:"elastic",secondary:"",content:"Loading"})]),_:1}))}},Oy=`<template>
  <SuiButton facebook icon="facebook" content=" Facebook" />
  <SuiButton twitter icon="twitter" content=" Twitter" />
  <SuiButton vk icon="vk" content="VK" />
  <SuiButton linkedin icon="linkedin" content=" LinkedIn" />
  <SuiButton instagram icon="instagram" content=" Instagram" />
  <SuiButton youtube icon="youtube" content=" YouTube" />
  <SuiButton whatsapp icon="whatsapp" content=" WhatsApp" />
  <SuiButton telegram icon="telegram" content=" Telegram" />
</template>`,qy={__name:"SocialDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Social",code:Oy},{description:l(()=>[n(" A button can be formatted to link to a social website ")]),example:l(()=>[t(r(P),{facebook:"",icon:"facebook",content:" Facebook"}),t(r(P),{twitter:"",icon:"twitter",content:" Twitter"}),t(r(P),{vk:"",icon:"vk",content:"VK"}),t(r(P),{linkedin:"",icon:"linkedin",content:" LinkedIn"}),t(r(P),{instagram:"",icon:"instagram",content:" Instagram"}),t(r(P),{youtube:"",icon:"youtube",content:" YouTube"}),t(r(P),{whatsapp:"",icon:"whatsapp",content:" WhatsApp"}),t(r(P),{telegram:"",icon:"telegram",content:" Telegram"})]),_:1}))}},Gy=`<template>
  <SuiButton size="mini" content="Mini" />
  <SuiButton size="tiny" content="Tiny" />
  <SuiButton size="small" content="Small" />
  <SuiButton size="medium" content="Medium" />
  <SuiButton size="large" content="Large" />
  <SuiButton size="big" content="Big" />
  <SuiButton size="huge" content="Huge" />
  <SuiButton size="massive" content="Massive" />
</template>`,jy={__name:"SizeDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Size",code:Gy},{description:l(()=>[n(" A button can have different sizes ")]),example:l(()=>[t(r(P),{size:"mini",content:"Mini"}),t(r(P),{size:"tiny",content:"Tiny"}),t(r(P),{size:"small",content:"Small"}),t(r(P),{size:"medium",content:"Medium"}),t(r(P),{size:"large",content:"Large"}),t(r(P),{size:"big",content:"Big"}),t(r(P),{size:"huge",content:"Huge"}),t(r(P),{size:"massive",content:"Massive"})]),_:1}))}},Uy=`<template>
  <SuiButton floated="left" content="Left Floated" />
  <SuiButton floated="right" content="Right Floated" />
</template>`,Yy={__name:"FloatedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Floated",code:Uy},{description:l(()=>[n(" A button can be aligned to the left or right of its container ")]),example:l(()=>[t(r(P),{floated:"left",content:"Left Floated"}),t(r(P),{floated:"right",content:"Right Floated"})]),_:1}))}},Jy=`<template>
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
</template>`,Wy={__name:"ColoredDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Colored",code:Jy},{description:l(()=>[n(" A button can have different colors ")]),example:l(()=>[t(r(P),{color:"red"},{default:l(()=>[n("Red")]),_:1}),t(r(P),{color:"orange"},{default:l(()=>[n("Orange")]),_:1}),t(r(P),{color:"yellow"},{default:l(()=>[n("Yellow")]),_:1}),t(r(P),{color:"olive"},{default:l(()=>[n("Olive")]),_:1}),t(r(P),{color:"green"},{default:l(()=>[n("Green")]),_:1}),t(r(P),{color:"teal"},{default:l(()=>[n("Teal")]),_:1}),t(r(P),{color:"blue"},{default:l(()=>[n("Blue")]),_:1}),t(r(P),{color:"violet"},{default:l(()=>[n("Violet")]),_:1}),t(r(P),{color:"purple"},{default:l(()=>[n("Purple")]),_:1}),t(r(P),{color:"pink"},{default:l(()=>[n("Pink")]),_:1}),t(r(P),{color:"brown"},{default:l(()=>[n("Brown")]),_:1}),t(r(P),{color:"grey"},{default:l(()=>[n("Grey")]),_:1}),t(r(P),{color:"black"},{default:l(()=>[n("Black")]),_:1})]),_:1}))}},Ky=`<template>
  <SuiButton compact content="Hold" />
  <SuiButton compact icon="pause" />
  <SuiButton compact labeled icon="pause" content="Pause" />
</template>`,Xy={__name:"CompactDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Compact",code:Ky},{description:l(()=>[n(" A button can reduce its padding to fit into tighter spaces ")]),example:l(()=>[t(r(P),{compact:"",content:"Hold"}),t(r(P),{compact:"",icon:"pause"}),t(r(P),{compact:"",labeled:"",icon:"pause",content:"Pause"})]),_:1}))}},Qy=`<template>
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
<\/script>`,Zy={__name:"ToggleDoc",setup(e){const i=j(!1);return(a,o)=>(y(),x(I,{label:"Toggle",code:Qy},{description:l(()=>[n(" A button can be formatted to toggle on and off ")]),example:l(()=>[t(r(P),{toggle:"",active:i.value,onClick:()=>i.value=!i.value,content:i.value?"Voted":"Vote",style:{"min-width":"200px"}},null,8,["active","onClick","content"])]),_:1}))}},ew=`<template>
  <SuiButton positive content="Positive Button" />
</template>`,tw={__name:"PositiveDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Positive",code:ew},{description:l(()=>[n(" A button can hint towards a positive consequence ")]),example:l(()=>[t(r(P),{positive:"",content:"Positive Button"})]),_:1}))}},iw=`<template>
  <SuiButton negative content="Negative Button" />
</template>`,lw={__name:"NegativeDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Negative",code:iw},{description:l(()=>[n(" A button can hint towards a negative consequence ")]),example:l(()=>[t(r(P),{negative:"",content:"Negative Button"})]),_:1}))}},aw=`<template>
  <SuiButton fluid content="Fits container" />
</template>`,nw={__name:"FluidDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Fluid",code:aw},{description:l(()=>[n(" A button can take the width of its container ")]),example:l(()=>[t(r(P),{fluid:"",content:"Fits container"})]),_:1}))}},ow=`<template>
  <SuiButton circular icon="settings" />
</template>`,sw={__name:"CircularDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Circular",code:ow},{description:l(()=>[n(" A button can be circular ")]),example:l(()=>[t(r(P),{circular:"",icon:"settings"})]),_:1}))}},rw=k("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?",-1),uw=`<template>
  <SuiButton attached="top" content="Top" />
  <SuiSegment>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?</p>
  </SuiSegment>
  <SuiButton attached="bottom" content="Bottom" />
</template>`,cw={__name:"VerticallyAttachedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Vertically Attached",code:uw},{description:l(()=>[n(" A button can be attached to the top or bottom of other content ")]),example:l(()=>[t(r(P),{attached:"top",content:"Top"}),t(r(H),{attached:""},{default:l(()=>[rw]),_:1}),t(r(P),{attached:"bottom",content:"Bottom"})]),_:1}))}},dw=`<template>
  <SuiButton attached="left" content="Left" />
  <SuiButton attached="right" content="Right" />
</template>`,pw={__name:"HorizontallyAttachedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Horizontally Attached",code:dw},{description:l(()=>[n(" A button can be attached to the left or right of other content ")]),example:l(()=>[t(r(P),{attached:"left",content:"Left"}),t(r(P),{attached:"right",content:"Right"})]),_:1}))}},mw=`<template>
  <SuiButtonGroup vertical>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,fw={__name:"VerticalButtonsDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Vertical Buttons",code:mw},{description:l(()=>[n(" Groups can be formatted to appear vertically ")]),example:l(()=>[t(r(ft),{vertical:""},{default:l(()=>[t(r(P),null,{default:l(()=>[n("Feed")]),_:1}),t(r(P),null,{default:l(()=>[n("Messages")]),_:1}),t(r(P),null,{default:l(()=>[n("Events")]),_:1}),t(r(P),null,{default:l(()=>[n("Photos")]),_:1})]),_:1})]),_:1}))}},gw=`<template>
  <SuiButtonGroup stackable>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,hw={__name:"StackableButtonsDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Stackable Buttons",code:gw},{description:l(()=>[n(" Horizontal groups can automatically be stacked on mobile devices ")]),example:l(()=>[t(r(ft),{stackable:""},{default:l(()=>[t(r(P),null,{default:l(()=>[n("Feed")]),_:1}),t(r(P),null,{default:l(()=>[n("Messages")]),_:1}),t(r(P),null,{default:l(()=>[n("Events")]),_:1}),t(r(P),null,{default:l(()=>[n("Photos")]),_:1})]),_:1})]),_:1}))}},_w=`<template>
  <SuiButtonGroup vertical labeled icon>
    <SuiButton icon="pause" content="Pause" />
    <SuiButton icon="play" content="Play" />
    <SuiButton icon="shuffle" content="Shuffle" />
  </SuiButtonGroup>
</template>`,bw={__name:"LabeledIconButtonsDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Icon Buttons",code:_w},{description:l(()=>[n(" Groups can be formatted as labeled icons ")]),example:l(()=>[t(r(ft),{vertical:"",labeled:"",icon:""},{default:l(()=>[t(r(P),{icon:"pause",content:"Pause"}),t(r(P),{icon:"play",content:"Play"}),t(r(P),{icon:"shuffle",content:"Shuffle"})]),_:1})]),_:1}))}},vw=`<template>
  <SuiButtonGroup>
    <SuiButton labeled icon="left chevron" content="Back" />
    <SuiButton icon="stop" content="Stop" />
    <SuiButton icon labeled="right">
      <SuiIcon name="right chevron" />
      Forward
    </SuiButton>
  </SuiButtonGroup>
</template>`,Sw={__name:"MixedGroupDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Mixed Group",code:vw},{description:l(()=>[n(" Button groups can show groups of icons ")]),example:l(()=>[t(r(ft),null,{default:l(()=>[t(r(P),{labeled:"",icon:"left chevron",content:"Back"}),t(r(P),{icon:"stop",content:"Stop"}),t(r(P),{icon:"",labeled:"right"},{default:l(()=>[t(r(J),{name:"right chevron"}),n(" Forward ")]),_:1})]),_:1})]),_:1}))}},yw=`<template>
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
</template>`,ww={__name:"EqualWidthDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Equal Width",code:yw},{description:l(()=>[n(" Groups can have their widths divided evenly ")]),example:l(()=>[t(r(ft),{widths:5},{default:l(()=>[t(r(P),null,{default:l(()=>[n("Overview")]),_:1}),t(r(P),null,{default:l(()=>[n("Specs")]),_:1}),t(r(P),null,{default:l(()=>[n("Warranty")]),_:1}),t(r(P),null,{default:l(()=>[n("Reviews")]),_:1}),t(r(P),null,{default:l(()=>[n("Support")]),_:1})]),_:1}),t(r(ft),{widths:3},{default:l(()=>[t(r(P),null,{default:l(()=>[n("Overview")]),_:1}),t(r(P),null,{default:l(()=>[n("Specs")]),_:1}),t(r(P),null,{default:l(()=>[n("Support")]),_:1})]),_:1})]),_:1}))}},Cw=`<template>
  <SuiButtonGroup color="blue">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Aw={__name:"ColoredButtonsDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Colored Buttons",code:Cw},{description:l(()=>[n(" Groups can have a shared color ")]),example:l(()=>[t(r(ft),{color:"blue"},{default:l(()=>[t(r(P),null,{default:l(()=>[n("One")]),_:1}),t(r(P),null,{default:l(()=>[n("Two")]),_:1}),t(r(P),null,{default:l(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},xw=`<template>
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
</template>`,kw={__name:"BasicButtonsDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Basic Buttons",code:xw},{description:l(()=>[n(" A button group can be less pronounced ")]),example:l(()=>[t(r(ft),{basic:""},{default:l(()=>[t(r(P),null,{default:l(()=>[n("One")]),_:1}),t(r(P),null,{default:l(()=>[n("Two")]),_:1}),t(r(P),null,{default:l(()=>[n("Three")]),_:1})]),_:1}),t(r(ft),null,{default:l(()=>[t(r(P),{basic:"",color:"red"},{default:l(()=>[n("One")]),_:1}),t(r(P),{basic:"",color:"blue"},{default:l(()=>[n("Two")]),_:1}),t(r(P),{basic:"",color:"green"},{default:l(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},Bw=`<template>
  <SuiButtonGroup size="large">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,$w={__name:"GroupSizesDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Group Sizes",code:Bw},{description:l(()=>[n(" Groups can have a shared color ")]),example:l(()=>[t(r(ft),{size:"large"},{default:l(()=>[t(r(P),null,{default:l(()=>[n("One")]),_:1}),t(r(P),null,{default:l(()=>[n("Two")]),_:1}),t(r(P),null,{default:l(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},Tw={__name:"Button",setup(e){const i=[{id:"button",label:"Button",category:"Types",component:dy},{id:"emphasis",label:"Emphasis",category:"Types",component:my},{id:"animated",label:"Animated",category:"Types",component:gy},{id:"labeled",label:"Labeled",category:"Types",component:_y},{id:"icon",label:"Icon",category:"Types",component:vy},{id:"labeled-icon",label:"Labeled Icon",category:"Types",component:yy},{id:"basic",label:"Basic",category:"Types",component:Cy},{id:"tertiary",label:"Tertiary",category:"Types",component:xy},{id:"inverted",label:"Inverted",category:"Types",component:By},{id:"buttons",label:"Buttons",category:"Groups",component:Ty},{id:"icon-buttons",label:"Icon Buttons",category:"Groups",component:Ly},{id:"content",label:"Content",category:"Content",component:Py},{id:"active",label:"Active",category:"States",component:Fy},{id:"disabled",label:"Disabled",category:"States",component:My},{id:"loading",label:"Loading",category:"States",component:Hy},{id:"social",label:"Social",category:"Variations",component:qy},{id:"size",label:"Size",category:"Variations",component:jy},{id:"floated",label:"Floated",category:"Variations",component:Yy},{id:"colored",label:"Colored",category:"Variations",component:Wy},{id:"compact",label:"Compact",category:"Variations",component:Xy},{id:"toggle",label:"Toggle",category:"Variations",component:Zy},{id:"positive",label:"Positive",category:"Variations",component:tw},{id:"negative",label:"Negative",category:"Variations",component:lw},{id:"fluid",label:"Fluid",category:"Variations",component:nw},{id:"circular",label:"Circular",category:"Variations",component:sw},{id:"vertically-attached",label:"Vertically Attached",category:"Variations",component:cw},{id:"horizontally-attached",label:"Horizontally Attached",category:"Variations",component:pw},{id:"vertical-buttons",label:"Vertical Buttons",category:"Group Variations",component:fw},{id:"stackable-buttons",label:"Stackable Buttons",category:"Group Variations",component:hw},{id:"labeled-icon-buttons",label:"Labeled Icon Buttons",category:"Group Variations",component:bw},{id:"mixed-group",label:"Mixed Group",category:"Group Variations",component:Sw},{id:"equal-width",label:"Equal Width",category:"Group Variations",component:ww},{id:"colored-buttons",label:"Colored Buttons",category:"Group Variations",component:Aw},{id:"basic-buttons",label:"Basic Buttons",category:"Group Variations",component:kw},{id:"group-sizes",label:"Group Sizes",category:"Group Variations",component:$w}];return(a,o)=>(y(),x(ot,{title:"Button",description:"A button indicates a possible user action","component-docs":i}))}},Dw=k("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Lw=`<template>
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
</template>`,Iw={__name:"ContainerDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Container",code:Lw},{description:l(()=>[n(" A standard container ")]),example:l(()=>[t(r(Ni),null,{default:l(()=>[Dw]),_:1})]),_:1}))}},Ew=k("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Rw=`<template>
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
</template>`,Pw={__name:"TextContainerDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Text Container",code:Rw},{description:l(()=>[n(" A container can reduce its maximum width to more naturally accommodate a single column of text ")]),example:l(()=>[t(r(Ni),{text:""},{default:l(()=>[t(r(fe),{as:"h2"},{default:l(()=>[n("Header")]),_:1}),Ew]),_:1})]),_:1}))}},zw=`<template>
  <SuiContainer textAlign="left">Left Aligned</SuiContainer>
  <SuiContainer textAlign="center">Center Aligned</SuiContainer>
  <SuiContainer textAlign="right">Right Aligned</SuiContainer>
</template>`,Fw={__name:"TextAlignmentDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Text Alignment",code:zw},{description:l(()=>[n(" A container can specify its text alignment ")]),example:l(()=>[t(r(Ni),{textAlign:"left"},{default:l(()=>[n("Left Aligned")]),_:1}),t(r(Ni),{textAlign:"center"},{default:l(()=>[n("Center Aligned")]),_:1}),t(r(Ni),{textAlign:"right"},{default:l(()=>[n("Right Aligned")]),_:1})]),_:1}))}},Vw=k("p",null," Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today. ",-1),Mw=`<template>
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
</template>`,Nw={__name:"FluidDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Fluid",code:Mw},{description:l(()=>[n(" A fluid container has no maximum width ")]),example:l(()=>[t(r(Ni),{fluid:""},{default:l(()=>[t(r(fe),{as:"h2"},{default:l(()=>[n("Dogs Roles with Humans")]),_:1}),Vw]),_:1})]),_:1}))}},Hw={__name:"Container",setup(e){const i=[{id:"container",label:"Container",category:"Types",component:Iw},{id:"text-container",label:"Text Container",category:"Types",component:Pw},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:Fw},{id:"fluid",label:"Fluid",category:"Variations",component:Nw}];return(a,o)=>(y(),x(ot,{title:"Container",description:"A container limits content to a maximum width","component-docs":i}))}},Ow=`<template>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider />
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,qw={__name:"DividerDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Divider",code:Ow},{description:l(()=>[n(" A standard divider ")]),example:l(()=>[t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(Fe)),t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},Gw=k("label",null,"Username",-1),jw=k("input",{type:"text",placeholder:"Username"},null,-1),Uw=k("label",null,"Password",-1),Yw=k("input",{type:"password",placeholder:"Password"},null,-1),Jw=`<template>
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
</template>`,Ww={__name:"VerticalDividerDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Vertical Divider",code:Jw},{description:l(()=>[n(" A divider can segment content vertically. ")]),example:l(()=>[t(r(H),{placeholder:""},{default:l(()=>[t(r(ba),{columns:"equal"},{default:l(()=>[t(r(Bt),null,{default:l(()=>[t(r(Nt),null,{default:l(()=>[t(r(it),null,{default:l(()=>[Gw,jw]),_:1}),t(r(it),null,{default:l(()=>[Uw,Yw]),_:1}),t(r(P),{primary:""},{default:l(()=>[n("Login")]),_:1})]),_:1})]),_:1}),t(r(Bt),{textAlign:"middle"},{default:l(()=>[t(r(P),{secondary:"",icon:"signup",content:"Sign Up"})]),_:1})]),_:1}),t(r(Fe),{vertical:""},{default:l(()=>[n("Or")]),_:1})]),_:1})]),_:1}))}},Kw=`<template>
  <SuiSegment basic textAlign="center">
    <SuiInput icon="search" iconPosition="left" action="Search" placeholder="Order #" />
    <SuiDivider horizontal>Or</SuiDivider>
    <SuiButton labeled icon="add" color="green" content="Create New Order" />
  </SuiSegment>
</template>`,Xw={__name:"HorizontalDividerDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Horizontal Divider",code:Kw},{description:l(()=>[n(" A divider can segment content horizontally ")]),example:l(()=>[t(r(H),{basic:"",textAlign:"center"},{default:l(()=>[t(r(Ze),{icon:"search",iconPosition:"left",action:"Search",placeholder:"Order #"}),t(r(Fe),{horizontal:""},{default:l(()=>[n("Or")]),_:1}),t(r(P),{labeled:"",icon:"add",color:"green",content:"Create New Order"})]),_:1})]),_:1}))}},Qw=`<template>
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
</template>`,Zw={__name:"HorizontalAlignmentDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Horizontal Alignment",code:Qw},{description:l(()=>[n(" A horizontal divider can be aligned ")]),example:l(()=>[t(r(Fe),{horizontal:"",textAlign:"left"},{default:l(()=>[t(r(J),{name:"left align"}),n(" Left Aligned ")]),_:1}),t(r(Fe),{horizontal:"",textAlign:"center"},{default:l(()=>[t(r(J),{name:"center align"}),n(" Center Aligned ")]),_:1}),t(r(Fe),{horizontal:"",textAlign:"right"},{default:l(()=>[t(r(J),{name:"right align"}),n(" Right Aligned ")]),_:1})]),_:1}))}},eC=`<template>
  <SuiSegment inverted>
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider inverted />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider horizontal inverted>Horizontal</SuiDivider>
  </SuiSegment>
</template>`,tC={__name:"InvertedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Inverted",code:eC},{description:l(()=>[n(" A divider can have its colors inverted ")]),example:l(()=>[t(r(H),{inverted:""},{default:l(()=>[t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(Fe),{inverted:""}),t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(Fe),{horizontal:"",inverted:""},{default:l(()=>[n("Horizontal")]),_:1})]),_:1})]),_:1}))}},iC=`<template>
  <SuiSegment>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
    <SuiDivider fitted />
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
  </SuiSegment>
</template>`,lC={__name:"FittedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Inverted",code:iC},{description:l(()=>[n(" A divider can be fitted, without any space above or below it. ")]),example:l(()=>[t(r(H),null,{default:l(()=>[n(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),t(r(Fe),{fitted:""}),n(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. ")]),_:1})]),_:1}))}},aC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider hidden />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,nC={__name:"HiddenDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Hidden",code:aC},{description:l(()=>[n(" A hidden divider divides content without creating a dividing line ")]),example:l(()=>[t(r(fe),null,{default:l(()=>[n("Section One")]),_:1}),t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(Fe),{hidden:""}),t(r(fe),null,{default:l(()=>[n("Section Two")]),_:1}),t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},oC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider section />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,sC={__name:"SectionDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Section",code:oC},{description:l(()=>[n(" A divider can provide greater margins to divide sections of content ")]),example:l(()=>[t(r(fe),null,{default:l(()=>[n("Section One")]),_:1}),t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(Fe),{section:""}),t(r(fe),null,{default:l(()=>[n("Section Two")]),_:1}),t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},rC=`<template>
  <SuiSegment>
    <SuiHeader floated="right">Section One</SuiHeader>
    <SuiDivider clearing />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,uC={__name:"ClearingDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Clearing",code:rC},{description:l(()=>[n(" A divider can clear the contents above it ")]),example:l(()=>[t(r(H),null,{default:l(()=>[t(r(fe),{floated:"right"},{default:l(()=>[n("Section One")]),_:1}),t(r(Fe),{clearing:""}),t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},cC=`<template>
  <SuiDivider size="mini">MINI</SuiDivider>
  <SuiDivider size="tiny">TINY</SuiDivider>
  <SuiDivider size="small">SMALL</SuiDivider>
  <SuiDivider size="large">LARGE</SuiDivider>
  <SuiDivider size="big">BIG</SuiDivider>
  <SuiDivider size="huge">HUGE</SuiDivider>
  <SuiDivider size="massive">MASSIVE</SuiDivider>
</template>`,dC={__name:"SizeDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Size",code:cC},{description:l(()=>[n(" A divider text can vary in size ")]),example:l(()=>[t(r(Fe),{horizontal:"",size:"mini"},{default:l(()=>[n("MINI")]),_:1}),t(r(Fe),{horizontal:"",size:"tiny"},{default:l(()=>[n("TINY")]),_:1}),t(r(Fe),{horizontal:"",size:"small"},{default:l(()=>[n("SMALL")]),_:1}),t(r(Fe),{horizontal:"",size:"large"},{default:l(()=>[n("LARGE")]),_:1}),t(r(Fe),{horizontal:"",size:"big"},{default:l(()=>[n("BIG")]),_:1}),t(r(Fe),{horizontal:"",size:"huge"},{default:l(()=>[n("HUGE")]),_:1}),t(r(Fe),{horizontal:"",size:"massive"},{default:l(()=>[n("MASSIVE")]),_:1})]),_:1}))}},pC={__name:"Divider",setup(e){const i=[{id:"divider",label:"Divider",category:"Types",component:qw},{id:"vertical-divider",label:"Vertical Divider",category:"Types",component:Ww},{id:"horizontal-divider",label:"Horizontal Divider",category:"Types",component:Xw},{id:"horizontal-alignment",label:"Horizontal Alignment",category:"Types",component:Zw},{id:"inverted",label:"Inverted",category:"Variations",component:tC},{id:"fitted",label:"Fitted",category:"Variations",component:lC},{id:"hidden",label:"Hidden",category:"Variations",component:nC},{id:"section",label:"Section",category:"Variations",component:sC},{id:"clearing",label:"Clearing",category:"Variations",component:uC},{id:"size",label:"Size",category:"Variations",component:dC}];return(a,o)=>(y(),x(ot,{title:"Divider",description:"A divider visually segments content into groups","component-docs":i}))}},mC=`<template>
  <SuiEmoji name="anguished" disabled />
</template>`,fC={__name:"DisabledDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Disabled",code:mC},{description:l(()=>[n(" An emoji can show that it is disabled ")]),example:l(()=>[t(r(Dt),{name:"anguished",disabled:""})]),_:1}))}},gC=`<template>
  <SuiEmoji name="angel" loading />
  <SuiEmoji name="blush" loading />
  <SuiEmoji name="grin" loading />
</template>`,hC={__name:"LoadingDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Loading",code:gC},{description:l(()=>[n(" An emoji can be used as a simple loader ")]),example:l(()=>[t(r(Dt),{name:"angel",loading:""}),t(r(Dt),{name:"blush",loading:""}),t(r(Dt),{name:"grin",loading:""})]),_:1}))}},_C=`<template>
  <SuiEmoji name="relaxed" size="small" />
  <SuiEmoji name="relaxed" size="medium" />
  <SuiEmoji name="relaxed" size="large" />
  <SuiEmoji name="relaxed" size="big" />
</template>`,bC={__name:"SizeDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Size",code:_C},{description:l(()=>[n(" An emoji can vary in size ")]),example:l(()=>[t(r(Dt),{name:"relaxed",size:"small"}),t(r(Dt),{name:"relaxed",size:"medium"}),t(r(Dt),{name:"relaxed",size:"large"}),t(r(Dt),{name:"relaxed",size:"big"})]),_:1}))}},vC=`<template>
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
</template>`,SC={__name:"AutosizingDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Autosizing",code:vC},{description:l(()=>[n(" If no specific size class is given, all emojis are automatically sized according to the current element font-size ")]),example:l(()=>[t(r(fe),{size:"small"},{default:l(()=>[n(" Within a Header "),t(r(Dt),{name:"relaxed"})]),_:1}),t(r(P),{as:"div",size:"large"},{default:l(()=>[n(" Within a Button "),t(r(Dt),{name:"relaxed"})]),_:1}),t(r(O),{size:"massive"},{default:l(()=>[n(" Within a Label "),t(r(Dt),{name:"relaxed"})]),_:1})]),_:1}))}},yC=`<template>
  <SuiEmoji link name="slight_smile" size="medium" />
</template>`,wC={__name:"LinkDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Link",code:yC},{description:l(()=>[n(" An emoji can be formatted as a link ")]),example:l(()=>[t(r(Dt),{link:"",name:"slight_smile",size:"medium"})]),_:1}))}},CC={__name:"Emoji",setup(e){const i=[{id:"disabled",label:"Disabled",category:"States",component:fC},{id:"loading",label:"Loading",category:"States",component:hC},{id:"size",label:"Size",category:"Variations",component:bC},{id:"autosizing",label:"Autosizing",category:"Variations",component:SC},{id:"link",label:"Link",category:"Variations",component:wC}];return(a,o)=>(y(),x(ot,{title:"Emoji",description:"An emoji is a glyph used to represent an emotional state","component-docs":i}))}},AC=`<template>
  <SuiFlag name="de" size="small" />
  <SuiFlag name="fr" size="medium" />
  <SuiFlag name="li" size="large" />
  <SuiFlag name="jp" size="big" />
  <SuiFlag name="gb" size="huge" />
  <SuiFlag name="un" size="massive" />
</template>`,xC={__name:"SizeDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Size",code:AC},{description:l(()=>[n(" A flag can vary in size ")]),example:l(()=>[t(r(Yt),{name:"de",size:"small"}),t(r(Yt),{name:"fr",size:"medium"}),t(r(Yt),{name:"li",size:"large"}),t(r(Yt),{name:"jp",size:"big"}),t(r(Yt),{name:"gb",size:"huge"}),t(r(Yt),{name:"un",size:"massive"})]),_:1}))}},kC=`<template>
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
</template>`,BC={__name:"AutosizingDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Autosizing",code:kC},{description:l(()=>[n(" If no specific size class is given, all flags are automatically sized according to the current element font-size ")]),example:l(()=>[t(r(fe),{size:"small"},{default:l(()=>[n(" Within a Header "),t(r(Yt),{name:"us"})]),_:1}),t(r(P),{as:"div",size:"large"},{default:l(()=>[n(" Within a Button "),t(r(Yt),{name:"eu"})]),_:1}),t(r(O),{size:"massive"},{default:l(()=>[n(" Within a Label "),t(r(Yt),{name:"pirate"})]),_:1})]),_:1}))}},$C={__name:"Flag",setup(e){const i=[{id:"size",label:"Size",category:"Types",component:xC},{id:"autosizing",label:"Autosizing",category:"Types",component:BC}];return(a,o)=>(y(),x(ot,{title:"Flag",description:"A flag is used to represent a political state","component-docs":i}))}},TC=`<template>
  <SuiHeader as="h1">First Header</SuiHeader>
  <SuiHeader as="h2">Second Header</SuiHeader>
  <SuiHeader as="h3">Third Header</SuiHeader>
  <SuiHeader as="h4">Fourth Header</SuiHeader>
  <SuiHeader as="h5">Fifth Header</SuiHeader>
</template>`,DC={__name:"PageHeadersDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Page Headers",code:TC},{description:l(()=>[n(" Headers may be oriented to give the hierarchy of a section in the context of the page ")]),example:l(()=>[t(r(fe),{as:"h1"},{default:l(()=>[n("First Header")]),_:1}),t(r(fe),{as:"h2"},{default:l(()=>[n("Second Header")]),_:1}),t(r(fe),{as:"h3"},{default:l(()=>[n("Third Header")]),_:1}),t(r(fe),{as:"h4"},{default:l(()=>[n("Fourth Header")]),_:1}),t(r(fe),{as:"h5"},{default:l(()=>[n("Fifth Header")]),_:1})]),_:1}))}},LC=`<template>
  <SuiHeader size="huge">Huge Header</SuiHeader>
  <SuiHeader size="large">Large Header</SuiHeader>
  <SuiHeader size="medium">Medium Header</SuiHeader>
  <SuiHeader size="small">Small Header</SuiHeader>
  <SuiHeader size="tiny">Tiny Header</SuiHeader>
</template>`,IC={__name:"ContentHeadersDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Content Headers",code:LC},{description:l(()=>[n(" Headers may be oriented to give the importance of a section in the context of the content that surrounds it ")]),example:l(()=>[t(r(fe),{size:"huge"},{default:l(()=>[n("Huge Header")]),_:1}),t(r(fe),{size:"large"},{default:l(()=>[n("Large Header")]),_:1}),t(r(fe),{size:"medium"},{default:l(()=>[n("Medium Header")]),_:1}),t(r(fe),{size:"small"},{default:l(()=>[n("Small Header")]),_:1}),t(r(fe),{size:"tiny"},{default:l(()=>[n("Tiny Header")]),_:1})]),_:1}))}},EC=`<template>
  <SuiHeader icon>
    <SuiIcon name="settings" />
    <SuiHeaderContent>
      Account Settings
    </SuiHeaderContent>
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,RC={__name:"IconHeadersDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Icon Headers",code:EC},{description:l(()=>[n(" A header can be formatted to emphasize an icon ")]),example:l(()=>[t(r(fe),{icon:""},{default:l(()=>[t(r(J),{name:"settings"}),t(r(hs),null,{default:l(()=>[n(" Account Settings ")]),_:1}),t(r(Yi),null,{default:l(()=>[n(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},PC=k("span",null,"$10.99",-1),zC=`<template>
  <SuiHeader sub>Price</SuiHeader>
  <span>$10.99</span>
</template>`,FC={__name:"SubHeadersDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Sub Headers",code:zC},{description:l(()=>[n(" Headers may be formatted to label smaller or de-emphasized content. ")]),example:l(()=>[t(r(fe),{sub:""},{default:l(()=>[n("Price")]),_:1}),PC]),_:1}))}},VC=`<template>
  <SuiHeader as="h2">
    <SuiImage src="/images/avatar/large/steve.jpg" avatar />
    Steve
  </SuiHeader>
</template>`,MC={__name:"ImageDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Image",code:VC},{description:l(()=>[n(" A header may contain an image ")]),example:l(()=>[t(r(fe),{as:"h2"},{default:l(()=>[t(r(oe),{src:"/vue-fomantic-ui/images/avatar/large/steve.jpg",avatar:""}),n(" Steve ")]),_:1})]),_:1}))}},NC=`<template>
  <SuiHeader as="h2">
    <SuiIcon name="plug" />
    <SuiHeaderContent>
      Uptime Guarantee
    </SuiHeaderContent>
  </SuiHeader>
</template>`,HC={__name:"IconDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Icon",code:NC},{description:l(()=>[n(" A header may contain an Icon ")]),example:l(()=>[t(r(fe),{as:"h2"},{default:l(()=>[t(r(J),{name:"plug"}),t(r(hs),null,{default:l(()=>[n(" Uptime Guarantee ")]),_:1})]),_:1})]),_:1}))}},OC=`<template>
  <SuiHeader as="h2">
    Account Settings
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,qC={__name:"SubheaderDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Subheader",code:OC},{description:l(()=>[n(" Headers may contain subheaders ")]),example:l(()=>[t(r(fe),{as:"h2"},{default:l(()=>[n(" Account Settings "),t(r(Yi),null,{default:l(()=>[n(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},GC=`<template>
  <SuiHeader disabled>
    Disabled Header
  </SuiHeader>
</template>`,jC={__name:"DisabledDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Disabled",code:GC},{description:l(()=>[n(" A header can show that it is inactive ")]),example:l(()=>[t(r(fe),{disabled:""},{default:l(()=>[n(" Disabled Header ")]),_:1})]),_:1}))}},UC=`<template>
  <SuiHeader as="h3" dividing>
    Dividing Header
  </SuiHeader>
</template>`,YC={__name:"DividingDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Dividing",code:UC},{description:l(()=>[n(" A header can be formatted to divide itself from the content below it ")]),example:l(()=>[t(r(fe),{as:"h3",dividing:""},{default:l(()=>[n(" Dividing Header ")]),_:1})]),_:1}))}},JC=`<template>
  <SuiHeader as="h3" block>
    Block Header
  </SuiHeader>
</template>`,WC={__name:"BlockDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Block",code:JC},{description:l(()=>[n(" A header can be formatted to appear inside a content block ")]),example:l(()=>[t(r(fe),{as:"h3",block:""},{default:l(()=>[n(" Block Header ")]),_:1})]),_:1}))}},KC=`<template>
  <SuiHeader as="h2" attached="top">
    Attached Header
  </SuiHeader>
  <SuiSegment attached>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </SuiSegment>
</template>`,XC={__name:"AttachedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Attached",code:KC},{description:l(()=>[n(" A header can be attached to other content, like a segment ")]),example:l(()=>[t(r(fe),{as:"h2",attached:"top"},{default:l(()=>[n(" Attached Header ")]),_:1}),t(r(H),{attached:""},{default:l(()=>[n(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),_:1})]),_:1}))}},QC=`<template>
  <SuiSegment clearing>
    <SuiHeader as="h3" floated="right">
      Go Forward
    </SuiHeader>
    <SuiHeader as="h3" floated="left">
      Go Back
    </SuiHeader>
  </SuiSegment>
</template>`,ZC={__name:"FloatingDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Floating",code:QC},{description:l(()=>[n(" A header can sit to the left or right of other content ")]),example:l(()=>[t(r(H),{clearing:""},{default:l(()=>[t(r(fe),{as:"h3",floated:"right"},{default:l(()=>[n(" Go Forward ")]),_:1}),t(r(fe),{as:"h3",floated:"left"},{default:l(()=>[n(" Go Back ")]),_:1})]),_:1})]),_:1}))}},e0=`<template>
  <SuiSegment>
    <SuiHeader as="h3" textAlign="right">Float Right</SuiHeader>
    <SuiHeader as="h3" textAlign="left">Float Left</SuiHeader>
    <SuiHeader as="h3" textAlign="justified">
      This text takes up the full width of the container
    </SuiHeader>
    <SuiHeader as="h3" textAlign="center">Centered</SuiHeader>
  </SuiSegment>
</template>`,t0={__name:"TextAlignmentDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Text Alignment",code:e0},{description:l(()=>[n(" A header can have its text aligned to a side ")]),example:l(()=>[t(r(H),null,{default:l(()=>[t(r(fe),{as:"h3",textAlign:"right"},{default:l(()=>[n("Float Right")]),_:1}),t(r(fe),{as:"h3",textAlign:"left"},{default:l(()=>[n("Float Left")]),_:1}),t(r(fe),{as:"h3",textAlign:"justified"},{default:l(()=>[n(" This text takes up the full width of the container ")]),_:1}),t(r(fe),{as:"h3",textAlign:"center"},{default:l(()=>[n("Centered")]),_:1})]),_:1})]),_:1}))}},i0=`<template>
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
</template>`,l0={__name:"ColoredDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Colored",code:i0},{description:l(()=>[n(" A header can be formatted with different colors ")]),example:l(()=>[t(r(fe),{as:"h4",primary:""},{default:l(()=>[n("Primary")]),_:1}),t(r(fe),{as:"h4",secondary:""},{default:l(()=>[n("Secondary")]),_:1}),t(r(fe),{as:"h4",color:"red"},{default:l(()=>[n("Red")]),_:1}),t(r(fe),{as:"h4",color:"orange"},{default:l(()=>[n("Orange")]),_:1}),t(r(fe),{as:"h4",color:"yellow"},{default:l(()=>[n("Yellow")]),_:1}),t(r(fe),{as:"h4",color:"olive"},{default:l(()=>[n("Olive")]),_:1}),t(r(fe),{as:"h4",color:"green"},{default:l(()=>[n("Green")]),_:1}),t(r(fe),{as:"h4",color:"teal"},{default:l(()=>[n("Teal")]),_:1}),t(r(fe),{as:"h4",color:"blue"},{default:l(()=>[n("Blue")]),_:1}),t(r(fe),{as:"h4",color:"purple"},{default:l(()=>[n("Purple")]),_:1}),t(r(fe),{as:"h4",color:"violet"},{default:l(()=>[n("Violet")]),_:1}),t(r(fe),{as:"h4",color:"pink"},{default:l(()=>[n("Pink")]),_:1}),t(r(fe),{as:"h4",color:"brown"},{default:l(()=>[n("Brown")]),_:1}),t(r(fe),{as:"h4",color:"grey"},{default:l(()=>[n("Grey")]),_:1})]),_:1}))}},a0=`<template>
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
</template>`,n0={__name:"InvertedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Colored",code:a0},{description:l(()=>[n(" A header can have its colors inverted for contrast ")]),example:l(()=>[t(r(H),{inverted:""},{default:l(()=>[t(r(fe),{as:"h4",inverted:"",color:"red"},{default:l(()=>[n("Red")]),_:1}),t(r(fe),{as:"h4",inverted:"",color:"orange"},{default:l(()=>[n("Orange")]),_:1}),t(r(fe),{as:"h4",inverted:"",color:"yellow"},{default:l(()=>[n("Yellow")]),_:1}),t(r(fe),{as:"h4",inverted:"",color:"olive"},{default:l(()=>[n("Olive")]),_:1}),t(r(fe),{as:"h4",inverted:"",color:"green"},{default:l(()=>[n("Green")]),_:1}),t(r(fe),{as:"h4",inverted:"",color:"teal"},{default:l(()=>[n("Teal")]),_:1}),t(r(fe),{as:"h4",inverted:"",color:"blue"},{default:l(()=>[n("Blue")]),_:1}),t(r(fe),{as:"h4",inverted:"",color:"purple"},{default:l(()=>[n("Purple")]),_:1}),t(r(fe),{as:"h4",inverted:"",color:"violet"},{default:l(()=>[n("Violet")]),_:1}),t(r(fe),{as:"h4",inverted:"",color:"pink"},{default:l(()=>[n("Pink")]),_:1}),t(r(fe),{as:"h4",inverted:"",color:"brown"},{default:l(()=>[n("Brown")]),_:1}),t(r(fe),{as:"h4",inverted:"",color:"grey"},{default:l(()=>[n("Grey")]),_:1})]),_:1})]),_:1}))}},o0={__name:"Header",setup(e){const i=[{id:"page-headers",label:"Page Headers",category:"Types",component:DC},{id:"content-headers",label:"Content Headers",category:"Types",component:IC},{id:"icon-headers",label:"Icon Headers",category:"Types",component:RC},{id:"sub-headers",label:"Sub Headers",category:"Types",component:FC},{id:"image",label:"Image",category:"Content",component:MC},{id:"icon",label:"Icon",category:"Content",component:HC},{id:"subheader",label:"Subheader",category:"Content",component:qC},{id:"disabled",label:"Disabled",category:"States",component:jC},{id:"dividing",label:"Dividing",category:"Variations",component:YC},{id:"block",label:"Block",category:"Variations",component:WC},{id:"attached",label:"Attached",category:"Variations",component:XC},{id:"floating",label:"Floating",category:"Variations",component:ZC},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:t0},{id:"colored",label:"Colored",category:"Variations",component:l0},{id:"inverted",label:"Inverted",category:"Variations",component:n0}];return(a,o)=>(y(),x(ot,{title:"Header",description:"A header provides a short summary of content","component-docs":i}))}},s0=`<template>
  <SuiIcon name="users" disabled />
</template>`,r0={__name:"DisabledDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Disabled",code:s0},{description:l(()=>[n(" An icon can show that it is disabled ")]),example:l(()=>[t(r(J),{name:"users",disabled:""})]),_:1}))}},u0=`<template>
  <SuiIcon name="spinner" loading />
  <SuiIcon name="notched circle" loading />
  <SuiIcon name="asterisk" loading />
</template>`,c0={__name:"LoadingDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Loading",code:u0},{description:l(()=>[n(" An icon can be used as a simple loader ")]),example:l(()=>[t(r(J),{name:"spinner",loading:""}),t(r(J),{name:"notched circle",loading:""}),t(r(J),{name:"asterisk",loading:""})]),_:1}))}},d0=k("br",null,null,-1),p0=`<template>
  <div>
    This icon
    <SuiIcon name="help" fitted />
    is fitted.
    <br />
    This icon
    <SuiIcon name="help" />
    is not fitted.
  </div>
</template>`,m0={__name:"FittedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Fitted",code:p0},{description:l(()=>[n(" An icon can be fitted, without any space to the left or right of it. ")]),example:l(()=>[k("div",null,[n(" This icon "),t(r(J),{name:"help",fitted:""}),n(" is fitted. "),d0,n(" This icon "),t(r(J),{name:"help"}),n(" is not fitted. ")])]),_:1}))}},f0=`<template>
  <SuiIcon name="home" size="mini" />
  <SuiIcon name="home" size="tiny" />
  <SuiIcon name="home" size="small" />
  <SuiIcon name="home" />
  <SuiIcon name="home" size="large" />
  <SuiIcon name="home" size="big" />
  <SuiIcon name="home" size="huge" />
  <SuiIcon name="home" size="massive" />
</template>`,g0={__name:"SizeDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Size",code:f0},{description:l(()=>[n(" An icon can vary in size ")]),example:l(()=>[t(r(J),{name:"home",size:"mini"}),t(r(J),{name:"home",size:"tiny"}),t(r(J),{name:"home",size:"small"}),t(r(J),{name:"home"}),t(r(J),{name:"home",size:"large"}),t(r(J),{name:"home",size:"big"}),t(r(J),{name:"home",size:"huge"}),t(r(J),{name:"home",size:"massive"})]),_:1}))}},h0=`<template>
  <SuiIcon name="close" link />
  <SuiIcon name="help" link />
</template>`,_0={__name:"LinkDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Link",code:h0},{description:l(()=>[n(" An icon can be formatted as a link ")]),example:l(()=>[t(r(J),{name:"close",link:""}),t(r(J),{name:"help",link:""})]),_:1}))}},b0=`<template>
  <SuiIcon name="cloud" flipped="horizontally" />
  <SuiIcon name="cloud" flipped="vertically" />
</template>`,v0={__name:"FlippedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Flipped",code:b0},{description:l(()=>[n(" An icon can be flipped ")]),example:l(()=>[t(r(J),{name:"cloud",flipped:"horizontally"}),t(r(J),{name:"cloud",flipped:"vertically"})]),_:1}))}},S0=`<template>
  <SuiIcon name="cloud" rotated="clockwise" />
  <SuiIcon name="cloud" rotated="counterclockwise" />
</template>`,y0={__name:"RotatedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Rotated",code:S0},{description:l(()=>[n(" An icon can be rotated ")]),example:l(()=>[t(r(J),{name:"cloud",rotated:"clockwise"}),t(r(J),{name:"cloud",rotated:"counterclockwise"})]),_:1}))}},w0=`<template>
  <SuiIcon name="users" circular />
  <SuiIcon name="users" circular color="teal" />
  <SuiIcon name="users" circular inverted />
  <SuiIcon name="users" circular inverted color="teal" />
</template>`,C0={__name:"CircularDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Circular",code:w0},{description:l(()=>[n(" An icon can be formatted to appear circular ")]),example:l(()=>[t(r(J),{name:"users",circular:""}),t(r(J),{name:"users",circular:"",color:"teal"}),t(r(J),{name:"users",circular:"",inverted:""}),t(r(J),{name:"users",circular:"",inverted:"",color:"teal"})]),_:1}))}},A0=`<template>
  <SuiIcon name="users" circular colored color="red" />
  <SuiIcon name="users" circular colored color="green" />
  <SuiIcon name="users" circular colored color="blue" />
</template>`,x0={__name:"CircularColoredDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Circular Colored",code:A0},{description:l(()=>[n(" The circular color can appear in the same color as the icon itself ")]),example:l(()=>[t(r(J),{name:"users",circular:"",colored:"",color:"red"}),t(r(J),{name:"users",circular:"",colored:"",color:"green"}),t(r(J),{name:"users",circular:"",colored:"",color:"blue"})]),_:1}))}},k0=`<template>
  <SuiIcon name="users" bordered />
  <SuiIcon name="users" bordered color="teal" />
  <SuiIcon name="users" bordered inverted color="black" />
  <SuiIcon name="users" bordered inverted color="teal" />
</template>`,B0={__name:"BorderedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Bordered",code:k0},{description:l(()=>[n(" An icon can be formatted to appear bordered ")]),example:l(()=>[t(r(J),{name:"users",bordered:""}),t(r(J),{name:"users",bordered:"",color:"teal"}),t(r(J),{name:"users",bordered:"",inverted:"",color:"black"}),t(r(J),{name:"users",bordered:"",inverted:"",color:"teal"})]),_:1}))}},$0=`<template>
  <SuiIcon name="users" bordered colored color="red" />
  <SuiIcon name="users" bordered colored color="green" />
  <SuiIcon name="users" bordered colored color="blue" />
</template>`,T0={__name:"BorderedColoredDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Bordered Colored",code:$0},{description:l(()=>[n(" The bordered color can appear in the same color as the icon itself ")]),example:l(()=>[t(r(J),{name:"users",bordered:"",colored:"",color:"red"}),t(r(J),{name:"users",bordered:"",colored:"",color:"green"}),t(r(J),{name:"users",bordered:"",colored:"",color:"blue"})]),_:1}))}},D0=`<template>
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
</template>`,L0={__name:"ColoredDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Colored",code:D0},{description:l(()=>[n(" An icon can be formatted with different colors ")]),example:l(()=>[t(r(J),{name:"users",primary:""}),t(r(J),{name:"users",secondary:""}),t(r(J),{name:"users",color:"red"}),t(r(J),{name:"users",color:"orange"}),t(r(J),{name:"users",color:"yellow"}),t(r(J),{name:"users",color:"olive"}),t(r(J),{name:"users",color:"green"}),t(r(J),{name:"users",color:"teal"}),t(r(J),{name:"users",color:"blue"}),t(r(J),{name:"users",color:"violet"}),t(r(J),{name:"users",color:"purple"}),t(r(J),{name:"users",color:"pink"}),t(r(J),{name:"users",color:"brown"}),t(r(J),{name:"users",color:"grey"}),t(r(J),{name:"users",color:"black"})]),_:1}))}},I0=`<template>
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
</template>`,E0={__name:"InvertedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Inverted",code:I0},{description:l(()=>[n(" An icon can have its colors inverted for contrast ")]),example:l(()=>[t(r(J),{name:"users",inverted:""}),t(r(J),{name:"users",inverted:"",primary:""}),t(r(J),{name:"users",inverted:"",secondary:""}),t(r(J),{name:"users",inverted:"",color:"red"}),t(r(J),{name:"users",inverted:"",color:"orange"}),t(r(J),{name:"users",inverted:"",color:"yellow"}),t(r(J),{name:"users",inverted:"",color:"olive"}),t(r(J),{name:"users",inverted:"",color:"green"}),t(r(J),{name:"users",inverted:"",color:"teal"}),t(r(J),{name:"users",inverted:"",color:"blue"}),t(r(J),{name:"users",inverted:"",color:"violet"}),t(r(J),{name:"users",inverted:"",color:"purple"}),t(r(J),{name:"users",inverted:"",color:"pink"}),t(r(J),{name:"users",inverted:"",color:"brown"}),t(r(J),{name:"users",inverted:"",color:"grey"})]),_:1}))}},R0=`<template>
  <SuiIconGroup size="huge">
    <SuiIcon name="circle outline" size="big" />
    <SuiIcon name="user" />
  </SuiIconGroup>
  <SuiIconGroup size="huge">
    <SuiIcon name="dont" size="big" color="red" />
    <SuiIcon name="user" color="black" />
  </SuiIconGroup>
</template>`,P0={__name:"IconsDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Icons",code:R0},{description:l(()=>[n(" Several icons can be used together as a group ")]),example:l(()=>[t(r(Ri),{size:"huge"},{default:l(()=>[t(r(J),{name:"circle outline",size:"big"}),t(r(J),{name:"user"})]),_:1}),t(r(Ri),{size:"huge"},{default:l(()=>[t(r(J),{name:"dont",size:"big",color:"red"}),t(r(J),{name:"user",color:"black"})]),_:1})]),_:1}))}},z0=`<template>
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
</template>`,F0={__name:"CornerIconDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Corner Icon",code:z0},{description:l(()=>[n(" A group of icons can display a smaller corner icon ")]),example:l(()=>[t(r(Ri),{size:"huge"},{default:l(()=>[t(r(J),{name:"puzzle"}),t(r(J),{name:"add",corner:"top left"})]),_:1}),t(r(Ri),{size:"huge"},{default:l(()=>[t(r(J),{name:"puzzle"}),t(r(J),{name:"add",corner:"top right"})]),_:1}),t(r(Ri),{size:"huge"},{default:l(()=>[t(r(J),{name:"puzzle"}),t(r(J),{name:"add",corner:"bottom left"})]),_:1}),t(r(Ri),{size:"huge"},{default:l(()=>[t(r(J),{name:"puzzle"}),t(r(J),{name:"add",corner:"bottom right"})]),_:1})]),_:1}))}},V0={__name:"Icon",setup(e){const i=[{id:"disabled",label:"Disabled",category:"States",component:r0},{id:"loading",label:"Loading",category:"States",component:c0},{id:"fitted",label:"Fitted",category:"Variations",component:m0},{id:"size",label:"Size",category:"Variations",component:g0},{id:"link",label:"Link",category:"Variations",component:_0},{id:"flipped",label:"Flipped",category:"Variations",component:v0},{id:"rotated",label:"Rotated",category:"Variations",component:y0},{id:"circular",label:"Circular",category:"Variations",component:C0},{id:"circular-colored",label:"Circular Colored",category:"Variations",component:x0},{id:"bordered",label:"Bordered",category:"Variations",component:B0},{id:"bordered-colored",label:"Bordered Colored",category:"Variations",component:T0},{id:"colored",label:"Colored",category:"Variations",component:L0},{id:"inverted",label:"Inverted",category:"Variations",component:E0},{id:"icons",label:"Icons",category:"Groups",component:P0},{id:"corner-icon",label:"Corner Icon",category:"Groups",component:F0}];return(a,o)=>(y(),x(ot,{title:"Icon",description:"An icon is a glyph used to represent something else","component-docs":i}))}},M0=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" />
</template>`,N0={__name:"ImageDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Image",code:M0},{description:l(()=>[n(" An image ")]),example:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}))}},H0=`<template>
  <SuiImage
    as="a"
    size="medium"
    href="https://google.com"
    src="/images/wireframe/image-text.png"
    target="_blank"
  />
</template>`,O0={__name:"ImageLinkDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Image Link",code:H0},{description:l(()=>[n(" An image can be formatted to link to other content ")]),example:l(()=>[t(r(oe),{as:"a",size:"medium",href:"https://google.com",src:"/vue-fomantic-ui/images/wireframe/image-text.png",target:"_blank"})]),_:1}))}},q0=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" hidden />
</template>`,G0={__name:"HiddenDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Hidden",code:q0},{description:l(()=>[n(" An image can be hidden ")]),example:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png",hidden:""})]),_:1}))}},j0=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" disabled />
</template>`,U0={__name:"DisabledDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Disabled",code:j0},{description:l(()=>[n(" An image can show that it is disabled and cannot be selected ")]),example:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png",disabled:""})]),_:1}))}},Y0=k("span",null,"Username",-1),J0=`<template>
  <SuiImage src="/images/wireframe/square-image.png" avatar />
  <span>Username</span>
</template>`,W0={__name:"AvatarDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Avatar",code:J0},{description:l(()=>[n(" An image may be formatted to appear inline with text as an avatar ")]),example:l(()=>[t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/square-image.png",avatar:""}),Y0]),_:1}))}},K0=`<template>
  <SuiImage size="medium" src="/images/wireframe/white-image.png" bordered />
</template>`,X0={__name:"BorderedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Bordered",code:K0},{description:l(()=>[n(" An image may include a border to emphasize the edges of white or transparent content ")]),example:l(()=>[t(r(oe),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/white-image.png",bordered:""})]),_:1}))}},Q0=`<template>
  <SuiImage src="/images/wireframe/image.png" fluid />
</template>`,Z0={__name:"FluidDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Fluid",code:Q0},{description:l(()=>[n(" An image can take up the width of its container ")]),example:l(()=>[t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png",fluid:""})]),_:1}))}},eA=`<template>
  <SuiImage src="/images/wireframe/image.png" rounded />
</template>`,tA={__name:"RoundedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Rounded",code:eA},{description:l(()=>[n(" An image may appear rounded ")]),example:l(()=>[t(r(oe),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png",rounded:""})]),_:1}))}},iA=`<template>
  <SuiImage src="/images/wireframe/square-image.png" circular />
</template>`,lA={__name:"CircularDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Circular",code:iA},{description:l(()=>[n(" An image may appear circular ")]),example:l(()=>[t(r(oe),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/square-image.png",circular:""})]),_:1}))}},aA=k("span",null,"Top Aligned",-1),nA=k("span",null,"Middle Aligned",-1),oA=k("span",null,"Bottom Aligned",-1),sA=`<template>
  <SuiImage verticalAlign="top" size="tiny" src="/images/wireframe/image.png" />
  <span>Top Aligned</span>
  <SuiDivider />
  <SuiImage verticalAlign="middle" size="tiny" src="/images/wireframe/image.png" />
  <span>Middle Aligned</span>
  <SuiDivider />
  <SuiImage verticalAlign="bottom" size="tiny" src="/images/wireframe/image.png" />
  <span>Bottom Aligned</span>
</template>`,rA={__name:"VerticallyAlignedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Vertically Aligned",code:sA},{description:l(()=>[n(" An image can specify its vertical alignment ")]),example:l(()=>[t(r(oe),{verticalAlign:"top",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),aA,t(r(Fe)),t(r(oe),{verticalAlign:"middle",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),nA,t(r(Fe)),t(r(oe),{verticalAlign:"bottom",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),oA]),_:1}))}},uA=k("p",null," Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ",-1),cA=k("p",null," Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. ",-1),dA=k("p",null," Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id. ",-1),pA=`<template>
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
</template>`,mA={__name:"CenteredDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Centered",code:pA},{description:l(()=>[n(" An image can appear centered in a content block ")]),example:l(()=>[t(r(H),null,{default:l(()=>[t(r(oe),{centered:"",size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png"}),uA,cA,t(r(oe),{centered:"",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),dA]),_:1})]),_:1}))}},fA=`<template>
  <SuiSegment>
    <p>
      Te eum doming eirmod, nominati pertinacia <SuiImage spaced size="mini" src="/images/wireframe/image.png" /> argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
    </p>
  </SuiSegment>
</template>`,gA={__name:"SpacedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Spaced",code:fA},{description:l(()=>[n(" An image can appear centered in a content block ")]),example:l(()=>[t(r(H),null,{default:l(()=>[k("p",null,[n(" Te eum doming eirmod, nominati pertinacia "),t(r(oe),{spaced:"",size:"mini",src:"/vue-fomantic-ui/images/wireframe/image.png"}),n(" argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ")])]),_:1})]),_:1}))}},hA=k("p",null," Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ",-1),_A=k("p",null," Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. ",-1),bA=k("p",null," Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id. ",-1),vA=`<template>
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
</template>`,SA={__name:"FloatedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Floated",code:vA},{description:l(()=>[n(" An image can sit to the left or right of other content ")]),example:l(()=>[t(r(H),null,{default:l(()=>[t(r(oe),{floated:"left",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),hA,t(r(oe),{floated:"right",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),_A,bA]),_:1})]),_:1}))}},yA=`<template>
  <SuiImage size="mini" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="tiny" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="small" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="medium" src="/images/wireframe/image.png" />
</template>`,wA={__name:"SizeDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Size",code:yA},{description:l(()=>[n(" An image may appear at different sizes ")]),example:l(()=>[t(r(oe),{size:"mini",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(Fe),{hidden:""}),t(r(oe),{size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(Fe),{hidden:""}),t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(Fe),{hidden:""}),t(r(oe),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}))}},CA=`<template>
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
</template>`,AA={__name:"GroupSizeDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Size",code:CA},{description:l(()=>[n(" A group of images can be formatted to have the same size. ")]),example:l(()=>[t(r(yo),{size:"tiny"},{default:l(()=>[t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(r(Fe),{hidden:""}),t(r(yo),{size:"small"},{default:l(()=>[t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1}))}},xA={__name:"Image",setup(e){const i=[{id:"image",label:"Image",category:"Types",component:N0},{id:"image-link",label:"Image Link",category:"Types",component:O0},{id:"hidden",label:"Hidden",category:"States",component:G0},{id:"disabled",label:"Disabled",category:"States",component:U0},{id:"avatar",label:"Avatar",category:"Variations",component:W0},{id:"bordered",label:"Bordered",category:"Variations",component:X0},{id:"fluid",label:"Fluid",category:"Variations",component:Z0},{id:"rounded",label:"Rounded",category:"Variations",component:tA},{id:"circular",label:"Circular",category:"Variations",component:lA},{id:"vertically-aligned",label:"Vertically Aligned",category:"Variations",component:rA},{id:"centered",label:"Centered",category:"Variations",component:mA},{id:"spaced",label:"Spaced",category:"Variations",component:gA},{id:"floated",label:"Floated",category:"Variations",component:SA},{id:"size",label:"Size",category:"Variations",component:wA},{id:"group-size",label:"Size",category:"Groups",component:AA}];return(a,o)=>(y(),x(ot,{title:"Image",description:"An image is a graphic representation of something","component-docs":i}))}},kA=`<template>
  <SuiInput placeholder="Search..." />
</template>`,BA={__name:"InputDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Input",code:kA},{description:l(()=>[n(" A standard input ")]),example:l(()=>[t(r(Ze),{placeholder:"Search..."})]),_:1}))}},$A=`<template>
  <SuiInput focus placeholder="Search..." />
</template>`,TA={__name:"FocusDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Focus",code:$A},{description:l(()=>[n(" An input field can show a user is currently interacting with it ")]),example:l(()=>[t(r(Ze),{focus:"",placeholder:"Search..."})]),_:1}))}},DA=`<template>
  <SuiInput loading icon="user" placeholder="Search..." />
  <SuiInput loading icon="user" iconPosition="left" placeholder="Search..." />
</template>`,LA={__name:"LoadingDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Loading",code:DA},{description:l(()=>[n(" An icon input field can show that it is currently loading data ")]),example:l(()=>[t(r(Ze),{loading:"",icon:"user",placeholder:"Search..."}),t(r(Ze),{loading:"",icon:"user",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},IA=`<template>
  <SuiInput disabled placeholder="Search..." />
</template>`,EA={__name:"DisabledDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Disabled",code:IA},{description:l(()=>[n(" An input field can show that it is disabled ")]),example:l(()=>[t(r(Ze),{disabled:"",placeholder:"Search..."})]),_:1}))}},RA=`<template>
  <SuiInput error placeholder="Search..." />
</template>`,PA={__name:"ErrorDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Error",code:RA},{description:l(()=>[n(" An input field can show the data contains errors ")]),example:l(()=>[t(r(Ze),{error:"",placeholder:"Search..."})]),_:1}))}},zA=`<template>
  <SuiInput icon="search" placeholder="Search..." />
  <SuiInput icon="users" iconPosition="left" placeholder="Search..." />
</template>`,FA={__name:"IconDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Icon",code:zA},{description:l(()=>[n(" An input can be formatted with an icon ")]),example:l(()=>[t(r(Ze),{icon:"search",placeholder:"Search..."}),t(r(Ze),{icon:"users",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},VA=`<template>
  <SuiInput label="http://" placeholder="mysite.com" />
</template>`,MA={__name:"LabeledDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Labeled",code:VA},{description:l(()=>[n(" An input can be formatted with a label ")]),example:l(()=>[t(r(Ze),{label:"http://",placeholder:"mysite.com"})]),_:1}))}},NA=`<template>
  <SuiInput action="Search" />
</template>`,HA={__name:"ActionDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Action",code:NA},{description:l(()=>[n(" An input can be formatted to alert the user to an action they may perform ")]),example:l(()=>[t(r(Ze),{action:"Search"})]),_:1}))}},OA=`<template>
  <SuiInput transparent icon="search" placeholder="Search..." />
</template>`,qA={__name:"TransparentDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Transparent",code:OA},{description:l(()=>[n(" A transparent input has no background ")]),example:l(()=>[t(r(Ze),{transparent:"",icon:"search",placeholder:"Search..."})]),_:1}))}},GA=`<template>
  <SuiSegment inverted>
    <SuiInput inverted placeholder="Search..." />
  </SuiSegment>
</template>`,jA={__name:"InvertedDoc",setup(e){return(i,a)=>{const o=B("SuiSegment");return y(),x(I,{label:"Inverted",code:GA},{description:l(()=>[n(" An input can be formatted to appear on dark backgrounds ")]),example:l(()=>[t(o,{inverted:""},{default:l(()=>[t(r(Ze),{inverted:"",placeholder:"Search..."})]),_:1})]),_:1})}}},UA=`<template>
  <SuiInput fluid icon="search" placeholder="Search..." />
</template>`,YA={__name:"FluidDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Fluid",code:UA},{description:l(()=>[n(" An input can take the size of its container ")]),example:l(()=>[t(r(Ze),{fluid:"",icon:"search",placeholder:"Search..."})]),_:1}))}},JA=`<template>
  <SuiInput icon="search" placeholder="Search mini..." size="mini" />
  <SuiInput icon="search" placeholder="Search small..." size="small" />
  <SuiInput icon="search" placeholder="Search large..." size="large" />
  <SuiInput icon="search" placeholder="Search big..." size="big" />
  <SuiInput icon="search" placeholder="Search huge..." size="huge" />
  <SuiInput icon="search" placeholder="Search massive..." size="massive" />
</template>`,WA={__name:"SizeDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Size",code:JA},{description:l(()=>[n(" An input can vary in size ")]),example:l(()=>[t(r(Ze),{icon:"search",placeholder:"Search mini...",size:"mini"}),t(r(Ze),{icon:"search",placeholder:"Search small...",size:"small"}),t(r(Ze),{icon:"search",placeholder:"Search large...",size:"large"}),t(r(Ze),{icon:"search",placeholder:"Search big...",size:"big"}),t(r(Ze),{icon:"search",placeholder:"Search huge...",size:"huge"}),t(r(Ze),{icon:"search",placeholder:"Search massive...",size:"massive"})]),_:1}))}},KA={__name:"Input",setup(e){const i=[{id:"input",label:"Input",category:"Types",component:BA},{id:"focus",label:"Focus",category:"States",component:TA},{id:"loading",label:"Loading",category:"States",component:LA},{id:"disabled",label:"Disabled",category:"States",component:EA},{id:"error",label:"Error",category:"States",component:PA},{id:"icon",label:"Icon",category:"Variations",component:FA},{id:"labeled",label:"Labeled",category:"Variations",component:MA},{id:"action",label:"Action",category:"Variations",component:HA},{id:"transparent",label:"Transparent",category:"Variations",component:qA},{id:"inverted",label:"Inverted",category:"Variations",component:jA},{id:"fluid",label:"Fluid",category:"Variations",component:YA},{id:"size",label:"Size",category:"Variations",component:WA}];return(a,o)=>(y(),x(ot,{title:"Input",description:"An input is a field used to elicit a response from a user","component-docs":i}))}},XA=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
</template>`,QA={__name:"LabelDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Label",code:XA},{description:l(()=>[n(" A label ")]),example:l(()=>[t(r(O),null,{default:l(()=>[t(r(J),{name:"mail"}),n(" 23 ")]),_:1})]),_:1}))}},ZA="/vue-fomantic-ui/images/avatar/small/joe.jpg",Fd="/vue-fomantic-ui/images/avatar/small/veronika.jpg",da="/vue-fomantic-ui/images/avatar/small/elliot.jpg",ex=k("img",{src:ZA},null,-1),tx=k("img",{src:Fd},null,-1),ix=k("img",{src:da},null,-1),lx=`<template>
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
</template>`,ax={__name:"ImageDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Image",code:lx},{description:l(()=>[n(" A label can be formatted to emphasize an image ")]),example:l(()=>[t(r(O),{as:"a",image:""},{default:l(()=>[ex,n(" Joe ")]),_:1}),t(r(O),{as:"a",image:"",color:"blue"},{default:l(()=>[tx,n(" Veronika "),t(r(Il),null,{default:l(()=>[n("Friend")]),_:1})]),_:1}),t(r(O),{as:"a",image:""},{default:l(()=>[ix,n(" Elliot "),t(r(J),{name:"delete"})]),_:1})]),_:1}))}},nx=k("input",{type:"text",placeholder:"First Name"},null,-1),ox=k("input",{type:"text"},null,-1),sx=k("input",{type:"text",placeholder:"Username"},null,-1),rx=k("input",{type:"password"},null,-1),ux=`<template>
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
</template>`,cx={__name:"PointingDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Pointing",code:ux},{description:l(()=>[n(" A label can point to content next to it ")]),example:l(()=>[t(r(Nt),{fluid:""},{default:l(()=>[t(r(it),null,{default:l(()=>[nx,t(r(O),{pointing:""},{default:l(()=>[n("Please enter a value")]),_:1})]),_:1}),t(r(Fe)),t(r(it),null,{default:l(()=>[t(r(O),{pointing:"below"},{default:l(()=>[n("Please enter a value")]),_:1}),ox]),_:1}),t(r(Fe)),t(r(it),{inline:""},{default:l(()=>[sx,t(r(O),{pointing:"left",color:"red",basic:""},{default:l(()=>[n("That name is taken!")]),_:1})]),_:1}),t(r(Fe)),t(r(it),{inline:""},{default:l(()=>[t(r(O),{pointing:"right",color:"red",basic:""},{default:l(()=>[n("Your password must be 6 characters or more")]),_:1}),rx]),_:1})]),_:1})]),_:1}))}},dx=`<template>
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
</template>`,px={__name:"CornerDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Corner",code:dx},{description:l(()=>[n(" A label can position itself in the corner of an element ")]),example:l(()=>[t(r(ba),{columns:2},{default:l(()=>[t(r(Bt),null,{default:l(()=>[t(r(oe),{label:{as:"a",corner:"left",icon:"heart"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(r(Bt),null,{default:l(()=>[t(r(oe),{label:{as:"a",color:"red",corner:"right",icon:"save"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1})]),_:1}))}},mx=`<template>
  <SuiLabel as="a" tag>New</SuiLabel>
  <SuiLabel as="a" tag color="red">Upcoming</SuiLabel>
  <SuiLabel as="a" tag color="teal">Featured</SuiLabel>
</template>`,fx={__name:"TagDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Tag",code:mx},{description:l(()=>[n(" A label can appear as a tag ")]),example:l(()=>[t(r(O),{as:"a",tag:""},{default:l(()=>[n("New")]),_:1}),t(r(O),{as:"a",tag:"",color:"red"},{default:l(()=>[n("Upcoming")]),_:1}),t(r(O),{as:"a",tag:"",color:"teal"},{default:l(()=>[n("Featured")]),_:1})]),_:1}))}},gx=k("span",null,"Account Details",-1),hx=k("span",null,"User Reviews",-1),_x=k("span",null,"Technical Specifications",-1),bx=k("span",null,"User Reviews",-1),vx=`<template>
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
</template>`,Sx={__name:"RibbonDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Ribbon",code:vx},{description:l(()=>[n(" A label can appear as a ribbon attaching itself to an element. ")]),example:l(()=>[t(r(ba),{columns:2},{default:l(()=>[t(r(Bt),null,{default:l(()=>[t(r(H),{raised:""},{default:l(()=>[t(r(O),{as:"a",ribbon:"",color:"red"},{default:l(()=>[n("Overview")]),_:1}),gx,t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),t(r(O),{as:"a",ribbon:"",color:"blue"},{default:l(()=>[n("Community")]),_:1}),hx,t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(r(Bt),null,{default:l(()=>[t(r(H),{raised:""},{default:l(()=>[t(r(O),{as:"a",ribbon:"right",color:"orange"},{default:l(()=>[n("Specs")]),_:1}),_x,t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),t(r(O),{as:"a",ribbon:"right",color:"teal"},{default:l(()=>[n("Reviews")]),_:1}),bx,t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1}))}},yx=`<template>
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
</template>`,wx={__name:"AttachedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Attached",code:yx},{description:l(()=>[n(" A label can attach to a content segment ")]),example:l(()=>[t(r(ba),{columns:3},{default:l(()=>[t(r(Co),null,{default:l(()=>[t(r(Bt),null,{default:l(()=>[t(r(H),{padded:""},{default:l(()=>[t(r(O),{attached:"top"},{default:l(()=>[n("HTML")]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(r(Bt),null,{default:l(()=>[t(r(H),{padded:""},{default:l(()=>[t(r(O),{attached:"bottom"},{default:l(()=>[n("CSS")]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(r(Bt),null,{default:l(()=>[t(r(H),{padded:""},{default:l(()=>[t(r(O),{attached:"top right"},{default:l(()=>[n("Code")]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1}),t(r(Co),null,{default:l(()=>[t(r(Bt),null,{default:l(()=>[t(r(H),{padded:""},{default:l(()=>[t(r(O),{attached:"top left"},{default:l(()=>[n("View")]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(r(Bt),null,{default:l(()=>[t(r(H),{padded:""},{default:l(()=>[t(r(O),{attached:"bottom left"},{default:l(()=>[n("User View")]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(r(Bt),null,{default:l(()=>[t(r(H),{padded:""},{default:l(()=>[t(r(O),{attached:"bottom right"},{default:l(()=>[n("Admin View")]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},Cx=`<template>
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
</template>`,Ax={__name:"HorizontalDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Horizontal",code:Cx},{description:l(()=>[n(" A horizontal label is formatted to label content along-side it horizontally ")]),example:l(()=>[t(r(rd),{divided:"",selection:""},{default:l(()=>[t(r(Ol),null,{default:l(()=>[t(r(O),{color:"red",horizontal:""},{default:l(()=>[n("Fruit")]),_:1}),n(" Kumquats ")]),_:1}),t(r(Ol),null,{default:l(()=>[t(r(O),{color:"purple",horizontal:""},{default:l(()=>[n("Candy")]),_:1}),n(" Ice Cream ")]),_:1}),t(r(Ol),null,{default:l(()=>[t(r(O),{color:"red",horizontal:""},{default:l(()=>[n("Fruit")]),_:1}),n(" Orange ")]),_:1}),t(r(Ol),null,{default:l(()=>[t(r(O),{horizontal:""},{default:l(()=>[n("Dog")]),_:1}),n(" Poodle ")]),_:1})]),_:1})]),_:1}))}},xx=`<template>
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
</template>`,kx={__name:"FloatingDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Floating",code:xx},{description:l(()=>[n(" A label can float above or below another element ")]),example:l(()=>[t(r(ud),{compact:""},{default:l(()=>[t(r(Qa),null,{default:l(()=>[t(r(J),{name:"mail"}),n(" Messages "),t(r(O),{floating:"",color:"red"},{default:l(()=>[n("22")]),_:1})]),_:1}),t(r(Qa),null,{default:l(()=>[t(r(J),{name:"users"}),n(" Friends "),t(r(O),{floating:"",color:"teal"},{default:l(()=>[n("22")]),_:1})]),_:1})]),_:1})]),_:1}))}},Bx=`<template>
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
</template>`,$x={__name:"InvertedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Inverted",code:Bx},{description:l(()=>[n(" All Variants of Label can be inverted ")]),example:l(()=>[t(r(H),{inverted:""},{default:l(()=>[t(r(O),{as:"a",inverted:"",primary:""},{default:l(()=>[n("Primary")]),_:1}),t(r(O),{as:"a",inverted:"",secondary:""},{default:l(()=>[n("Secondary")]),_:1}),t(r(O),{as:"a",inverted:"",color:"red"},{default:l(()=>[n("Red")]),_:1}),t(r(O),{as:"a",inverted:"",color:"orange"},{default:l(()=>[n("Orange")]),_:1}),t(r(O),{as:"a",inverted:"",color:"yellow"},{default:l(()=>[n("Yellow")]),_:1}),t(r(O),{as:"a",basic:"",inverted:"",color:"olive"},{default:l(()=>[n("Olive")]),_:1}),t(r(O),{as:"a",basic:"",inverted:"",color:"green"},{default:l(()=>[n("Green")]),_:1}),t(r(O),{as:"a",basic:"",inverted:"",color:"teal"},{default:l(()=>[n("Teal")]),_:1}),t(r(O),{as:"a",basic:"",inverted:"",color:"blue"},{default:l(()=>[n("Blue")]),_:1}),t(r(O),{as:"a",basic:"",inverted:"",color:"violet"},{default:l(()=>[n("Violet")]),_:1}),t(r(O),{as:"a",tag:"",inverted:"",color:"purple"},{default:l(()=>[n("Purple")]),_:1}),t(r(O),{as:"a",tag:"",inverted:"",color:"pink"},{default:l(()=>[n("Pink")]),_:1}),t(r(O),{as:"a",tag:"",inverted:"",color:"brown"},{default:l(()=>[n("Brown")]),_:1}),t(r(O),{as:"a",tag:"",inverted:"",color:"grey"},{default:l(()=>[n("Grey")]),_:1}),t(r(O),{as:"a",tag:"",inverted:"",color:"black"},{default:l(()=>[n("Black")]),_:1})]),_:1})]),_:1}))}},Tx=`<template>
  <SuiLabel>
    Dogs
    <SuiLabelDetail>214</SuiLabelDetail>
  </SuiLabel>
</template>`,Dx={__name:"DetailDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Detail",code:Tx},{description:l(()=>[n(" A label can contain a detail ")]),example:l(()=>[t(r(O),null,{default:l(()=>[n(" Dogs "),t(r(Il),null,{default:l(()=>[n("214")]),_:1})]),_:1})]),_:1}))}},Lx=`<template>
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
</template>`,Ix={__name:"IconDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Icon",code:Lx},{description:l(()=>[n(" A label can include an icon ")]),example:l(()=>[t(r(O),null,{default:l(()=>[t(r(J),{name:"mail"}),n(" Mail ")]),_:1}),t(r(O),null,{default:l(()=>[t(r(J),{name:"checkmark"}),n(" Test Passed ")]),_:1}),t(r(O),{icon:"dog"}),t(r(O),{icon:"cat"})]),_:1}))}},Ex=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
    <SuiLabelContent>View Mail</SuiLabelContent>
  </SuiLabel>
</template>`,Rx={__name:"LinkDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Link",code:Ex},{description:l(()=>[n(" A label can be a link or contain an item that links ")]),example:l(()=>[t(r(O),{as:"a"},{default:l(()=>[t(r(J),{name:"mail"}),n(" 23 ")]),_:1}),t(r(O),null,{default:l(()=>[t(r(J),{name:"mail"}),n(" 23 "),t(r(Il),null,{default:l(()=>[n("View Mail")]),_:1})]),_:1})]),_:1}))}},Px=`<template>
  <SuiLabel disabled>Disabled Label</SuiLabel>
</template>`,zx={__name:"DisabledDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Disabled",code:Px},{description:l(()=>[n(" A label can show it is currently unable to be interacted with ")]),example:l(()=>[t(r(O),{disabled:""},{default:l(()=>[n("Disabled Label")]),_:1})]),_:1}))}},Fx=`<template>
  <SuiLabel fluid>Fits container</SuiLabel>
</template>`,Vx={__name:"FluidDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Fluid",code:Fx},{description:l(()=>[n(" A label can take the width of its container ")]),example:l(()=>[t(r(O),{fluid:""},{default:l(()=>[n("Fits container")]),_:1})]),_:1}))}},Mx=`<template>
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
</template>`,Nx={__name:"CircularDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Circular",code:Mx},{description:l(()=>[n(" A label can be circular ")]),example:l(()=>[t(r(O),{circular:"",color:"red"},{default:l(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"orange"},{default:l(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"yellow"},{default:l(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"olive"},{default:l(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"green"},{default:l(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"teal"},{default:l(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"blue"},{default:l(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"violet"},{default:l(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"purple"},{default:l(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"pink"},{default:l(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"brown"},{default:l(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"grey"},{default:l(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"black"},{default:l(()=>[n("2")]),_:1})]),_:1}))}},Hx=k("img",{src:da},null,-1),Ox=`<template>
  <SuiLabel as="a" basic>Basic</SuiLabel>
  <SuiLabel as="a" basic pointing>Pointing</SuiLabel>
  <SuiLabel as="a" basic image>
    <img src="/images/avatar/small/elliot.jpg" />
    Elliot
  </SuiLabel>
  <SuiLabel as="a" basic pointing color="red">Red Pointing</SuiLabel>
  <SuiLabel as="a" basic color="blue">Blue</SuiLabel>
</template>`,qx={__name:"BasicDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Basic",code:Ox},{description:l(()=>[n(" A label can reduce its complexity ")]),example:l(()=>[t(r(O),{as:"a",basic:""},{default:l(()=>[n("Basic")]),_:1}),t(r(O),{as:"a",basic:"",pointing:""},{default:l(()=>[n("Pointing")]),_:1}),t(r(O),{as:"a",basic:"",image:""},{default:l(()=>[Hx,n(" Elliot ")]),_:1}),t(r(O),{as:"a",basic:"",pointing:"",color:"red"},{default:l(()=>[n("Red Pointing")]),_:1}),t(r(O),{as:"a",basic:"",color:"blue"},{default:l(()=>[n("Blue")]),_:1})]),_:1}))}},Gx=`<template>
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
</template>`,jx={__name:"ColoredDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Colored",code:Gx},{description:l(()=>[n(" A label can have different colors ")]),example:l(()=>[t(r(O),{as:"a",primary:""},{default:l(()=>[n("Primary")]),_:1}),t(r(O),{as:"a",secondary:""},{default:l(()=>[n("Secondary")]),_:1}),t(r(O),{as:"a",color:"red"},{default:l(()=>[n("Red")]),_:1}),t(r(O),{as:"a",color:"orange"},{default:l(()=>[n("Orange")]),_:1}),t(r(O),{as:"a",color:"yellow"},{default:l(()=>[n("Yellow")]),_:1}),t(r(O),{as:"a",color:"olive"},{default:l(()=>[n("Olive")]),_:1}),t(r(O),{as:"a",color:"green"},{default:l(()=>[n("Green")]),_:1}),t(r(O),{as:"a",color:"teal"},{default:l(()=>[n("Teal")]),_:1}),t(r(O),{as:"a",color:"blue"},{default:l(()=>[n("Blue")]),_:1}),t(r(O),{as:"a",color:"violet"},{default:l(()=>[n("Violet")]),_:1}),t(r(O),{as:"a",color:"purple"},{default:l(()=>[n("Purple")]),_:1}),t(r(O),{as:"a",color:"pink"},{default:l(()=>[n("Pink")]),_:1}),t(r(O),{as:"a",color:"brown"},{default:l(()=>[n("Brown")]),_:1}),t(r(O),{as:"a",color:"grey"},{default:l(()=>[n("Grey")]),_:1}),t(r(O),{as:"a",color:"black"},{default:l(()=>[n("Black")]),_:1})]),_:1}))}},Ux=`<template>
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
</template>`,Yx={__name:"BasicTagDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Basic Tag",code:Ux},{description:l(()=>[]),example:l(()=>[t(r(O),{as:"a",basic:"",tag:"",primary:""},{default:l(()=>[n("Primary")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",secondary:""},{default:l(()=>[n("Secondary")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"red"},{default:l(()=>[n("Red")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"orange"},{default:l(()=>[n("Orange")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"yellow"},{default:l(()=>[n("Yellow")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"olive"},{default:l(()=>[n("Olive")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"green"},{default:l(()=>[n("Green")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"teal"},{default:l(()=>[n("Teal")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"blue"},{default:l(()=>[n("Blue")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"violet"},{default:l(()=>[n("Violet")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"purple"},{default:l(()=>[n("Purple")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"pink"},{default:l(()=>[n("Pink")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"brown"},{default:l(()=>[n("Brown")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"grey"},{default:l(()=>[n("Grey")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"black"},{default:l(()=>[n("Black")]),_:1})]),_:1}))}},Jx=`<template>
  <SuiLabel size="mini">Mini</SuiLabel>
  <SuiLabel size="tiny">Tiny</SuiLabel>
  <SuiLabel size="small">Small</SuiLabel>
  <SuiLabel>Medium</SuiLabel>
  <SuiLabel size="large">Large</SuiLabel>
  <SuiLabel size="big">Big</SuiLabel>
  <SuiLabel size="huge">Huge</SuiLabel>
  <SuiLabel size="massive">Massive</SuiLabel>
</template>`,Wx={__name:"SizeDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Size",code:Jx},{description:l(()=>[n(" A label can be small or large ")]),example:l(()=>[t(r(O),{size:"mini"},{default:l(()=>[n("Mini")]),_:1}),t(r(O),{size:"tiny"},{default:l(()=>[n("Tiny")]),_:1}),t(r(O),{size:"small"},{default:l(()=>[n("Small")]),_:1}),t(r(O),null,{default:l(()=>[n("Medium")]),_:1}),t(r(O),{size:"large"},{default:l(()=>[n("Large")]),_:1}),t(r(O),{size:"big"},{default:l(()=>[n("Big")]),_:1}),t(r(O),{size:"huge"},{default:l(()=>[n("Huge")]),_:1}),t(r(O),{size:"massive"},{default:l(()=>[n("Massive")]),_:1})]),_:1}))}},Kx=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,Xx={__name:"GroupSizeDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Group Size",code:Kx},{description:l(()=>[n(" Labels can share sizes together ")]),example:l(()=>[t(r(El),{size:"huge"},{default:l(()=>[t(r(O),null,{default:l(()=>[n("Fun")]),_:1}),t(r(O),null,{default:l(()=>[n("Happy")]),_:1}),t(r(O),null,{default:l(()=>[n("Smart")]),_:1}),t(r(O),null,{default:l(()=>[n("Witty")]),_:1})]),_:1})]),_:1}))}},Qx=`<template>
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
</template>`,Zx={__name:"ColoredGroupDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Clored Group",code:Qx},{description:l(()=>[n(" Labels can share colors together ")]),example:l(()=>[t(r(El),{color:"blue"},{default:l(()=>[t(r(O),null,{default:l(()=>[n(" Fun "),t(r(J),{name:"close"})]),_:1}),t(r(O),null,{default:l(()=>[n(" Happy "),t(r(Il),null,{default:l(()=>[n("Smart")]),_:1})]),_:1}),t(r(O),null,{default:l(()=>[n("Insane")]),_:1}),t(r(O),null,{default:l(()=>[n("Exciting")]),_:1})]),_:1})]),_:1}))}},ek=`<template>
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
</template>`,tk={__name:"BasicGroupDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Basic Group",code:ek},{description:l(()=>[n(" Labels can share their style together ")]),example:l(()=>[t(r(El),{basic:""},{default:l(()=>[t(r(O),null,{default:l(()=>[n(" Fun "),t(r(J),{name:"close"})]),_:1}),t(r(O),null,{default:l(()=>[n(" Happy "),t(r(Il),null,{default:l(()=>[n("Smart")]),_:1})]),_:1}),t(r(O),null,{default:l(()=>[n("Insane")]),_:1}),t(r(O),null,{default:l(()=>[n("Exciting")]),_:1})]),_:1})]),_:1}))}},ik=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,lk={__name:"TagGroupDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Tag Group",code:ik},{description:l(()=>[n(" Labels can share tag formatting ")]),example:l(()=>[t(r(El),{tag:""},{default:l(()=>[t(r(O),{as:"a"},{default:l(()=>[n("$10.00")]),_:1}),t(r(O),{as:"a"},{default:l(()=>[n("$19.99")]),_:1}),t(r(O),{as:"a"},{default:l(()=>[n("$24.99")]),_:1}),t(r(O),{as:"a"},{default:l(()=>[n("$10.25")]),_:1})]),_:1})]),_:1}))}},ak=`<template>
  <SuiLabelGroup tag>
    <SuiLabel as="a">1</SuiLabel>
    <SuiLabel as="a">3</SuiLabel>
    <SuiLabel as="a">4</SuiLabel>
    <SuiLabel as="a">14</SuiLabel>
    <SuiLabel as="a">16</SuiLabel>
    <SuiLabel as="a">34</SuiLabel>
  </SuiLabelGroup>
</template>`,nk={__name:"CircularGroupDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Circular Group",code:ak},{description:l(()=>[n(" Labels can share shapes ")]),example:l(()=>[t(r(El),{circular:""},{default:l(()=>[t(r(O),{as:"a"},{default:l(()=>[n("1")]),_:1}),t(r(O),{as:"a"},{default:l(()=>[n("3")]),_:1}),t(r(O),{as:"a"},{default:l(()=>[n("4")]),_:1}),t(r(O),{as:"a"},{default:l(()=>[n("14")]),_:1}),t(r(O),{as:"a"},{default:l(()=>[n("16")]),_:1}),t(r(O),{as:"a"},{default:l(()=>[n("34")]),_:1})]),_:1})]),_:1}))}},ok={__name:"Label",setup(e){const i=[{id:"label",label:"Label",category:"Types",component:QA},{id:"image",label:"Image",category:"Types",component:ax},{id:"pointing",label:"Pointing",category:"Types",component:cx},{id:"corner",label:"Corner",category:"Types",component:px},{id:"tag",label:"Tag",category:"Types",component:fx},{id:"ribbon",label:"Ribbon",category:"Types",component:Sx},{id:"attached",label:"Attached",category:"Types",component:wx},{id:"horizontal",label:"Horizontal",category:"Types",component:Ax},{id:"floating",label:"Floating",category:"Types",component:kx},{id:"inverted",label:"Inverted",category:"Types",component:$x},{id:"detail",label:"Detail",category:"Content",component:Dx},{id:"icon",label:"Icon",category:"Content",component:Ix},{id:"link",label:"Link",category:"Content",component:Rx},{id:"disabled",label:"Disabled",category:"States",component:zx},{id:"fluid",label:"Fluid",category:"Variations",component:Vx},{id:"circular",label:"Circular",category:"Variations",component:Nx},{id:"basic",label:"Basic",category:"Variations",component:qx},{id:"colored",label:"Colored",category:"Variations",component:jx},{id:"basic-tag",label:"Basic Tag",category:"Variations",component:Yx},{id:"size",label:"Size",category:"Variations",component:Wx},{id:"group-size",label:"Group Size",category:"Groups",component:Xx},{id:"colored-group",label:"Colored Group",category:"Groups",component:Zx},{id:"basic-group",label:"Basic Group",category:"Groups",component:tk},{id:"tag-group",label:"Tag Group",category:"Groups",component:lk},{id:"circular-group",label:"Circular Group",category:"Groups",component:nk}];return(a,o)=>(y(),x(ot,{title:"Label",description:"A label displays content classification","component-docs":i}))}},sk=Hh(Qf);function rk(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Ia=sk,Yn=rk(Qc),uk=Ia.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function(i,a){var o=a.slots,s=a.attrs,c=o&&o.default&&o.default()||[],d=i.code||c&&c.length?c[0].children:"",f=i.inline,u=i.language,p=Yn.languages[u],g="language-".concat(u);return function(){return f?Ia.h("code",{class:[g],innerHTML:Yn.highlight(d,p)}):Ia.h("pre",Object.assign({},s,{class:[s.class,g]}),[Ia.h("code",Object.assign({},s,{class:[s.class,g],innerHTML:Yn.highlight(d,p)}))])}}}),ck=uk;const dk=Kc(ck),pk=F({name:"DocExample",components:{Prism:dk},props:{title:String,description:String,code:String},setup(){const e=j(!1);return{active:e,toggle:()=>e.value=!e.value}}}),mk={class:"example"};function fk(e,i,a,o,s,c){const d=B("sui-header-subheader"),f=B("sui-header"),u=B("sui-grid-column"),p=B("sui-icon"),g=B("sui-grid-row"),m=B("prism"),_=B("sui-grid");return y(),ye("div",mk,[t(_,{columns:2},{default:l(()=>[t(g,null,{default:l(()=>[t(u,null,{default:l(()=>[t(f,{as:"h3"},{default:l(()=>[n($e(e.title)+" ",1),t(d,null,{default:l(()=>[n($e(e.description),1)]),_:1})]),_:1})]),_:1}),t(u,{textAlign:"right"},{default:l(()=>[t(p,{name:"code",color:"grey",onClick:e.toggle,link:""},null,8,["onClick"])]),_:1})]),_:1}),t(g,null,{default:l(()=>[t(u,{width:16},{default:l(()=>[qi(e.$slots,"default",{},void 0,!0)]),_:3}),e.active?(y(),x(u,{key:0,width:16},{default:l(()=>[t(m,{language:"markup"},{default:l(()=>[n($e(e.code),1)]),_:1})]),_:1})):os("",!0)]),_:3})]),_:3})])}const gt=He(pk,[["render",fk],["__scopeId","data-v-fcfb6a67"]]),gk="/vue-fomantic-ui/images/avatar/small/rachel.png",hk="/vue-fomantic-ui/images/avatar/small/lindsay.png",_k="/vue-fomantic-ui/images/avatar/small/matthew.png",bk="/vue-fomantic-ui/images/avatar/small/jenny.jpg",vk="/vue-fomantic-ui/images/avatar/small/tom.jpg",Ea="/vue-fomantic-ui/images/avatar/small/christian.jpg",Vd="/vue-fomantic-ui/images/avatar/small/matt.jpg",Ra="/vue-fomantic-ui/images/avatar/small/helen.jpg",Di="/vue-fomantic-ui/images/avatar/small/daniel.jpg",Lo="/vue-fomantic-ui/images/avatar/small/stevie.jpg",Jn="/vue-fomantic-ui/images/wireframe/square-image.png",Sk=F({name:"ListDoc",components:{DocExample:gt},setup(){return{listCode:`<sui-list>
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
</div>`}}}),yk={class:"intro"},wk=k("div",null,"Benefits",-1),Ck={class:"list"},Ak=k("a",null,"Languages",-1),xk=k("a",null,[k("b",null,"Arrested Development")],-1),kk=k("a",null,[k("b",null,"Bob's Burgers")],-1),Bk=k("a",null,[k("b",null,"The Godfather Part 2")],-1),$k=k("a",null,[k("b",null,"Twin Peaks")],-1),Tk=k("a",null,[k("b",null,"Arrested Development")],-1),Dk=k("a",null,[k("b",null,"Bob's Burgers")],-1),Lk=k("a",null,[k("b",null,"The Godfather Part 2")],-1);function Ik(e,i,a,o,s,c){const d=B("sui-header-subheader"),f=B("sui-header"),u=B("sui-divider"),p=B("sui-icon"),g=B("sui-menu-item"),m=B("sui-menu"),_=B("sui-container"),w=B("sui-segment"),S=B("sui-list-item"),A=B("sui-list"),T=B("doc-example"),L=B("sui-list-list"),h=B("sui-list-header"),b=B("sui-list-description"),C=B("sui-list-content"),$=B("sui-image");return y(),ye("div",null,[t(w,{vertical:""},{default:l(()=>[t(_,{class:"main"},{default:l(()=>[k("div",yk,[t(f,{as:"h1"},{default:l(()=>[n("List "),t(d,null,{default:l(()=>[n(" A list is used to group related content ")]),_:1})]),_:1}),t(u,{hidden:""}),t(m,{floated:"right"},{default:l(()=>[t(g,{as:"a",icon:""},{default:l(()=>[t(p,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:l(()=>[t(p,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(_,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(T,{title:"List",description:"A list groups related content",code:e.listCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,null,{default:l(()=>[n("Apples")]),_:1}),t(S,null,{default:l(()=>[n("Pears")]),_:1}),t(S,null,{default:l(()=>[n("Oranges")]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Bulleted",description:"A list can mark items with a bullet",code:e.bulletedCode},{default:l(()=>[t(A,{bulleted:""},{default:l(()=>[t(S,null,{default:l(()=>[n("Gaining Access")]),_:1}),t(S,null,{default:l(()=>[n("Inviting Friends")]),_:1}),t(S,null,{default:l(()=>[wk,k("div",Ck,[t(S,{as:"a"},{default:l(()=>[n("Link to somewhere")]),_:1}),t(S,null,{default:l(()=>[n("Rebates")]),_:1}),t(S,null,{default:l(()=>[n("Discounts")]),_:1})])]),_:1}),t(S,null,{default:l(()=>[n("Warranty")]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Ordered",description:"A list can be ordered numerically",code:e.orderedCode},{default:l(()=>[t(A,{ordered:""},{default:l(()=>[t(S,{as:"a"},{default:l(()=>[n("Getting Started")]),_:1}),t(S,{as:"a"},{default:l(()=>[n("Introduction")]),_:1}),t(S,null,{default:l(()=>[Ak,t(L,null,{default:l(()=>[t(S,{as:"a"},{default:l(()=>[n("HTML")]),_:1}),t(S,{as:"a"},{default:l(()=>[n("Javascript")]),_:1}),t(S,{as:"a"},{default:l(()=>[n("CSS")]),_:1})]),_:1})]),_:1}),t(S,{as:"a"},{default:l(()=>[n("Review")]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Link",description:"A list can be specially formatted for navigation links",code:e.linkCode},{default:l(()=>[t(A,{link:""},{default:l(()=>[t(S,{active:""},{default:l(()=>[n("Home")]),_:1}),t(S,{as:"a"},{default:l(()=>[n("About")]),_:1}),t(S,{as:"a"},{default:l(()=>[n("Jobs")]),_:1}),t(S,{as:"a"},{default:l(()=>[n("Team")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Content")]),_:1}),t(T,{title:"Item",description:"A list item can contain a set of items",code:e.itemCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,null,{default:l(()=>[n("1")]),_:1}),t(S,null,{default:l(()=>[n("2")]),_:1}),t(S,null,{default:l(()=>[n("3")]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Icon",description:"A list item can contain an icon",code:e.iconCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,{as:"a"},{default:l(()=>[t(p,{name:"help"}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Floated Icon")]),_:1}),t(b,null,{default:l(()=>[n(" This text will always have a left margin to make sure it sits alongside your icon ")]),_:1})]),_:1})]),_:1}),t(S,{as:"a"},{default:l(()=>[t(p,{name:"right triangle"}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Icon Alignment")]),_:1}),t(b,null,{default:l(()=>[n(" Floated icons are by default top aligned. To have an icon top aligned try this example ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t(p,{name:"help"}),n(" Inline Text ")]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Image",description:"A list can contain an image",code:e.imageContentCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,null,{default:l(()=>[t($,{avatar:"",src:gk}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Rachel")]),_:1}),t(b,null,{default:l(()=>[n(" Last seen watching "),xk,n(" just now. ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:hk}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Lindsay")]),_:1}),t(b,null,{default:l(()=>[n(" Last seen watching "),kk,n(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:_k}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Matthew")]),_:1}),t(b,null,{default:l(()=>[n(" Last seen watching "),Bk,n(" yesterday. ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:bk}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Jenny Hess")]),_:1}),t(b,null,{default:l(()=>[n(" Last seen watching "),$k,n(" 3 days ago. ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Fd}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Veronika Ossi")]),_:1}),t(b,null,{default:l(()=>[n(" Has not watched anything recently ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Link",description:"A list can contain links",code:e.linkContentCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,{as:"a"},{default:l(()=>[n("What is a FAQ?")]),_:1}),t(S,{as:"a"},{default:l(()=>[n("Who is our user?")]),_:1}),t(S,{as:"a"},{default:l(()=>[n("Where is our office located?")]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"header",description:"A list item can contain a header",code:e.headerContentCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,null,{default:l(()=>[t(h,null,{default:l(()=>[n("New York City")]),_:1}),n(" A lovely city ")]),_:1}),t(S,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Chicago")]),_:1}),n(" Also quite a lovely city ")]),_:1}),t(S,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Los Angeles")]),_:1}),n(" Sometimes can be a lovely city ")]),_:1}),t(S,null,{default:l(()=>[t(h,null,{default:l(()=>[n("San Francisco")]),_:1}),n(" What a lovely city ")]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Description",description:"A list item can contain a description",code:e.descriptionContentCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,null,{default:l(()=>[t(p,{name:"map marker"}),t(C,null,{default:l(()=>[t(h,{as:"a"},{default:l(()=>[n("Krolewskie Jadlo")]),_:1}),t(b,null,{default:l(()=>[n(" An excellent polish restaurant, quick delivery and hearty, filling meals. ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t(p,{name:"map marker"}),t(C,null,{default:l(()=>[t(h,{as:"a"},{default:l(()=>[n("Xian Famous Foods")]),_:1}),t(b,null,{default:l(()=>[n(" A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers. ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t(p,{name:"map marker"}),t(C,null,{default:l(()=>[t(h,{as:"a"},{default:l(()=>[n("Sapporo Haru")]),_:1}),t(b,null,{default:l(()=>[n(" Greenpoint's best choice for quick and delicious sushi. ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t(p,{name:"map marker"}),t(C,null,{default:l(()=>[t(h,{as:"a"},{default:l(()=>[n("Enid's")]),_:1}),t(b,null,{default:l(()=>[n(" At night a bar, during the day a delicious brunch spot. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Variations")]),_:1}),t(T,{title:"Horizontal",description:"A list can be formatted to have items appear horizontally",code:e.horizontalVarCode},{default:l(()=>[t(A,{horizontal:""},{default:l(()=>[t(S,null,{default:l(()=>[t($,{avatar:"",src:vk}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Tom")]),_:1}),n(" Top Contributor ")]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Ea}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Christian Rocha")]),_:1}),n(" Admin ")]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Vd}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Matt")]),_:1}),n(" Top Rated User ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Inverted",description:"A list can be inverted to appear on a dark background",code:e.invertedVarCode},{default:l(()=>[t(w,{inverted:""},{default:l(()=>[t(A,{inverted:"",relaxed:"",divided:""},{default:l(()=>[t(S,null,{default:l(()=>[t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Snickerdoodle")]),_:1}),n(" An excellent companion ")]),_:1})]),_:1}),t(S,null,{default:l(()=>[t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Poodle")]),_:1}),n(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(S,null,{default:l(()=>[t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Paulo")]),_:1}),n(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Selection",description:"A selection list formats list items as possible choices",code:e.selectionVarCode},{default:l(()=>[t(A,{selection:"",verticalAlign:"middle"},{default:l(()=>[t(S,null,{default:l(()=>[t($,{avatar:"",src:Ra}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Ea}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Di}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Animated",description:"A list can animate to set the current item apart from the list",code:e.animatedVarCode},{default:l(()=>[t(A,{animated:"",verticalAlign:"middle"},{default:l(()=>[t(S,null,{default:l(()=>[t($,{avatar:"",src:Ra}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Ea}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Di}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Relaxed",description:"A list can relax its padding to provide more negative space",code:e.relaxedVarCode},{default:l(()=>[t(A,{relaxed:""},{default:l(()=>[t(S,null,{default:l(()=>[t($,{avatar:"",src:Di}),t(C,null,{default:l(()=>[t(h,{as:"a"},{default:l(()=>[n("Daniel Louise")]),_:1}),t(b,null,{default:l(()=>[n(" Last seen watching "),Tk,n(" just now. ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Lo}),t(C,null,{default:l(()=>[t(h,{as:"a"},{default:l(()=>[n("Stevie Feliciano")]),_:1}),t(b,null,{default:l(()=>[n(" Last seen watching "),Dk,n(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:da}),t(C,null,{default:l(()=>[t(h,{as:"a"},{default:l(()=>[n("Elliot Fu")]),_:1}),t(b,null,{default:l(()=>[n(" Last seen watching "),Lk,n(" yesterday. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Divided",description:"A list can show divisions between content",code:e.dividedVarCode},{default:l(()=>[t(A,{divided:"",verticalAlign:"middle"},{default:l(()=>[t(S,null,{default:l(()=>[t($,{avatar:"",src:Di}),t(C,null,{default:l(()=>[t(h,{as:"a"},{default:l(()=>[n("Daniel Louise")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Lo}),t(C,null,{default:l(()=>[t(h,{as:"a"},{default:l(()=>[n("Stevie Feliciano")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:da}),t(C,null,{default:l(()=>[t(h,{as:"a"},{default:l(()=>[n("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Celled",description:"A list can divide its items into cells",code:e.celledVarCode},{default:l(()=>[t(A,{celled:""},{default:l(()=>[t(S,null,{default:l(()=>[t($,{avatar:"",src:Ra}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Snickerdoodle")]),_:1}),n(" An excellent companion ")]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Di}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Poodle")]),_:1}),n(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Di}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Paulo")]),_:1}),n(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Size",description:"A list can vary in size",code:e.sizeCode},{default:l(()=>[t(A,{horizontal:"",divided:"",size:"mini"},{default:l(()=>[t(S,null,{default:l(()=>[t($,{avatar:"",src:Ra}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Ea}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Di}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Content Variations")]),_:1}),t(T,{title:"Vertical Aligned",description:"An element inside a list can be vertically aligned",code:e.verticalAlignedCode},{default:l(()=>[t(A,{horizontal:""},{default:l(()=>[t(S,null,{default:l(()=>[t($,{avatar:"",src:Jn}),t(C,{verticalAlign:"top"},{default:l(()=>[n(" Top Aligned ")]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Jn}),t(C,{verticalAlign:"middle"},{default:l(()=>[n(" Middle ")]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Jn}),t(C,{verticalAlign:"bottom"},{default:l(()=>[n(" Bottom ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Floated",description:"An list, or an element inside a list can be floated left or right",code:e.floatedCode},{default:l(()=>[k("div",null,[t(A,{floated:"right",horizontal:""},{default:l(()=>[t(S,{disabled:""},{default:l(()=>[n("© GitHub, Inc.")]),_:1}),t(S,{as:"a"},{default:l(()=>[n("Terms")]),_:1}),t(S,{as:"a"},{default:l(()=>[n("Privacy")]),_:1}),t(S,{as:"a"},{default:l(()=>[n("Contact")]),_:1})]),_:1}),t(A,{horizontal:""},{default:l(()=>[t(S,{as:"a"},{default:l(()=>[n("About Us")]),_:1}),t(S,{as:"a"},{default:l(()=>[n("Jobs")]),_:1})]),_:1})])]),_:1},8,["code"])]),_:1})])}const Ek=He(Sk,[["render",Ik]]),Rk=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader />
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Pk={__name:"LoaderDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Loader",code:Rk},{description:l(()=>[n(" A loader ")]),example:l(()=>[t(r(H),null,{default:l(()=>[t(r(Ut),{active:""},{default:l(()=>[t(r(ze))]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},zk=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text>Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Fk={__name:"TextLoaderDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Text Loader",code:zk},{description:l(()=>[n(" A loader can contain text ")]),example:l(()=>[t(r(H),null,{default:l(()=>[t(r(Ut),{active:""},{default:l(()=>[t(r(ze),{text:""},{default:l(()=>[n("Loading")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Vk=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader Indeterminate text>Preparing Files</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Mk={__name:"IndeterminateDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Indeterminate",code:Vk},{description:l(()=>[n(" A loader can show it's unsure of how long a task will take ")]),example:l(()=>[t(r(H),null,{default:l(()=>[t(r(Ut),{active:""},{default:l(()=>[t(r(ze),{Indeterminate:"",text:""},{default:l(()=>[n("Preparing Files")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Nk=`<template>
  <SuiSegment>
    <SuiLoader active />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Hk={__name:"ActiveDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Active",code:Nk},{description:l(()=>[n(" A loader can be active or visible ")]),example:l(()=>[t(r(H),null,{default:l(()=>[t(r(ze),{active:""}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Ok=`<template>
  <SuiSegment>
    <SuiLoader disabled />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,qk={__name:"DisabledDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Disabled",code:Ok},{description:l(()=>[n(" A loader can be disabled or hidden ")]),example:l(()=>[t(r(H),null,{default:l(()=>[t(r(ze),{disabled:""}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Gk=`<template>
  <SuiLoader active inline />
</template>`,jk={__name:"InlineDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Inline",code:Gk},{description:l(()=>[n(" Loaders can appear inline with content ")]),example:l(()=>[t(r(ze),{active:"",inline:""})]),_:1}))}},Uk=`<template>
  <SuiLoader active inline />
</template>`,Yk={__name:"InlineCenterDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Inline Center",code:Uk},{description:l(()=>[n(" Loaders can appear inline centered with content ")]),example:l(()=>[t(r(ze),{active:"",inline:"centered"})]),_:1}))}},Jk=`<template>
  <SuiLoader slow active inline />
  <SuiLoader active inline />
  <SuiLoader fast active inline />
</template>`,Wk={__name:"SpeedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Speed",code:Jk},{description:l(()=>[n(" Loaders can appear slow, normal or fast ")]),example:l(()=>[t(r(ze),{slow:"",active:"",inline:""}),t(r(ze),{active:"",inline:""}),t(r(ze),{fast:"",active:"",inline:""})]),_:1}))}},Kk=`<template>
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
</template>`,Xk={__name:"ColorsDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Colors",code:Kk},{description:l(()=>[n(" Loaders can be different colors ")]),example:l(()=>[t(r(ze),{active:"",inline:"",primary:""}),t(r(ze),{active:"",inline:"",secondary:""}),t(r(ze),{active:"",inline:"",color:"red"}),t(r(ze),{active:"",inline:"",color:"orange"}),t(r(ze),{active:"",inline:"",color:"yellow"}),t(r(ze),{active:"",inline:"",color:"olive"}),t(r(ze),{active:"",inline:"",color:"green"}),t(r(ze),{active:"",inline:"",color:"teal"}),t(r(ze),{active:"",inline:"",color:"blue"}),t(r(ze),{active:"",inline:"",color:"violet"}),t(r(ze),{active:"",inline:"",color:"purple"}),t(r(ze),{active:"",inline:"",color:"pink"}),t(r(ze),{active:"",inline:"",color:"brown"}),t(r(ze),{active:"",inline:"",color:"grey"}),t(r(ze),{active:"",inline:"",color:"black"})]),_:1}))}},Qk=`<template>
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
</template>`,Zk={__name:"SizeDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Size",code:Qk},{description:l(()=>[n(" Loaders can have different sizes ")]),example:l(()=>[t(r(H),null,{default:l(()=>[t(r(Ut),{active:""},{default:l(()=>[t(r(ze),{text:"",size:"mini"},{default:l(()=>[n("Loading")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(r(H),null,{default:l(()=>[t(r(Ut),{active:""},{default:l(()=>[t(r(ze),{text:"",size:"tiny"},{default:l(()=>[n("Loading")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(r(H),null,{default:l(()=>[t(r(Ut),{active:""},{default:l(()=>[t(r(ze),{text:"",size:"small"},{default:l(()=>[n("Loading")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(r(H),null,{default:l(()=>[t(r(Ut),{active:""},{default:l(()=>[t(r(ze),{text:"",size:"large"},{default:l(()=>[n("Loading")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(r(H),null,{default:l(()=>[t(r(Ut),{active:""},{default:l(()=>[t(r(ze),{text:"",size:"big"},{default:l(()=>[n("Loading")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(r(H),null,{default:l(()=>[t(r(Ut),{active:""},{default:l(()=>[t(r(ze),{text:"",size:"huge"},{default:l(()=>[n("Loading")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},eB=`<template>
  <SuiSegment inverted>
    <SuiLoader active inverted />

    <SuiImage src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,tB={__name:"InvertedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Inverted",code:eB},{description:l(()=>[n(" Loaders can have their colors inverted. ")]),example:l(()=>[t(r(H),{inverted:""},{default:l(()=>[t(r(ze),{active:"",inverted:""}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},iB={__name:"Loader",setup(e){const i=[{id:"loader",label:"Loader",category:"Types",component:Pk},{id:"text-loader",label:"Text Loader",category:"Types",component:Fk},{id:"indeterminate",label:"Indeterminate",category:"States",component:Mk},{id:"active",label:"Active",category:"States",component:Hk},{id:"disabled",label:"Disabled",category:"States",component:qk},{id:"inline",label:"Inline",category:"Variations",component:jk},{id:"inline-center",label:"Inline Center",category:"Variations",component:Yk},{id:"speed",label:"Speed",category:"Variations",component:Wk},{id:"colors",label:"Colors",category:"Variations",component:Xk},{id:"size",label:"Size",category:"Variations",component:Zk},{id:"inverted",label:"Inverted",category:"Variations",component:tB}];return(a,o)=>(y(),x(ot,{title:"Loader",description:"A loader alerts a user to wait for an activity to complete","component-docs":i}))}},ll="/vue-fomantic-ui/images/wireframe/short-paragraph.png",lB=F({name:"RailDoc",components:{DocExample:gt},setup(){return{railCode:`<sui-grid centered :columns="3">
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
</sui-grid>`}}}),aB={class:"intro"};function nB(e,i,a,o,s,c){const d=B("sui-header-subheader"),f=B("sui-header"),u=B("sui-divider"),p=B("sui-icon"),g=B("sui-menu-item"),m=B("sui-menu"),_=B("sui-container"),w=B("sui-segment"),S=B("sui-image"),A=B("sui-rail"),T=B("sui-grid-column"),L=B("sui-grid"),h=B("doc-example");return y(),ye("div",null,[t(w,{vertical:""},{default:l(()=>[t(_,{class:"main"},{default:l(()=>[k("div",aB,[t(f,{as:"h1"},{default:l(()=>[n("Rail "),t(d,null,{default:l(()=>[n(" A rail is used to show accompanying content outside the boundaries of the main view of a site ")]),_:1})]),_:1}),t(u,{hidden:""}),t(m,{floated:"right"},{default:l(()=>[t(g,{as:"a",icon:""},{default:l(()=>[t(p,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:l(()=>[t(p,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(_,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(h,{title:"Rail",description:"A rail can be presented on the left or right side of a container",code:e.railCode},{default:l(()=>[t(L,{centered:"",columns:3},{default:l(()=>[t(T,null,{default:l(()=>[t(w,null,{default:l(()=>[t(S,{src:ll}),t(A,{position:"left"},{default:l(()=>[t(w,null,{default:l(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(A,{position:"right"},{default:l(()=>[t(w,null,{default:l(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Internal",description:"A rail can attach itself to the inside of a container",code:e.internalCode},{default:l(()=>[t(w,{textAlign:"center"},{default:l(()=>[t(S,{src:ll}),t(A,{internal:"",position:"left"},{default:l(()=>[t(w,null,{default:l(()=>[n("Left Rail Content")]),_:1})]),_:1}),t(A,{internal:"",position:"right"},{default:l(()=>[t(w,null,{default:l(()=>[n("Right Rail Content")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Dividing",description:"A rail can create a division between itself and a container",code:e.dividingCode},{default:l(()=>[t(L,{centered:"",columns:3},{default:l(()=>[t(T,null,{default:l(()=>[t(w,null,{default:l(()=>[t(S,{src:ll}),t(A,{dividing:"",position:"left"},{default:l(()=>[t(w,null,{default:l(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(A,{dividing:"",position:"right"},{default:l(()=>[t(w,null,{default:l(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Variations")]),_:1}),t(h,{title:"Attached",description:"A rail can appear attached to the main viewport",code:e.attachedCode},{default:l(()=>[t(L,{centered:"",columns:3},{default:l(()=>[t(T,null,{default:l(()=>[t(w,null,{default:l(()=>[t(S,{src:ll}),t(A,{attached:"",position:"left"},{default:l(()=>[t(w,null,{default:l(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(A,{attached:"",position:"right"},{default:l(()=>[t(w,null,{default:l(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Close",description:"A rail can appear closer to the main viewport",code:e.closeCode},{default:l(()=>[t(L,{centered:"",columns:3},{default:l(()=>[t(T,null,{default:l(()=>[t(w,null,{default:l(()=>[t(S,{src:ll}),t(A,{close:"",position:"left"},{default:l(()=>[t(w,null,{default:l(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(A,{close:"",position:"right"},{default:l(()=>[t(w,null,{default:l(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Size",description:"A rail can have different sizes",code:e.sizeCode},{default:l(()=>[t(L,{centered:"",columns:3},{default:l(()=>[t(T,null,{default:l(()=>[t(w,null,{default:l(()=>[t(S,{src:ll}),t(A,{size:"small",position:"left"},{default:l(()=>[n(" Left Small Rail ")]),_:1}),t(A,{size:"large",position:"right"},{default:l(()=>[n(" Right Large Rail ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const oB=He(lB,[["render",nB]]),sB=`<template>
  <SuiReveal animated="fade">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/ade.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,rB={__name:"FadeDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Fade",code:sB},{description:l(()=>[n(" An element can disappear to reveal content below ")]),example:l(()=>[t(r(el),{animated:"fade"},{default:l(()=>[t(r(Et),{visible:""},{default:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(r(Et),{hidden:""},{default:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/ade.jpg"})]),_:1})]),_:1})]),_:1}))}},uB=`<template>
  <SuiReveal animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/chris.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,cB={__name:"MoveDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Move",code:uB},{description:l(()=>[n(" An element can move in a direction to reveal content ")]),example:l(()=>[t(r(el),{animated:"move"},{default:l(()=>[t(r(Et),{visible:""},{default:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(r(Et),{hidden:""},{default:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/chris.jpg"})]),_:1})]),_:1})]),_:1}))}},dB=`<template>
  <SuiReveal animated="rotate">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/stevie.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,pB={__name:"RotateDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Rotate",code:dB},{description:l(()=>[n(" An element can rotate to reveal content below ")]),example:l(()=>[t(r(el),{animated:"rotate"},{default:l(()=>[t(r(Et),{visible:""},{default:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(r(Et),{hidden:""},{default:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/stevie.jpg"})]),_:1})]),_:1})]),_:1}))}},mB=`<template>
  <SuiReveal active animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/nan.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,fB={__name:"ActiveDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Active",code:mB},{description:l(()=>[n(" An active reveal displays its hidden content ")]),example:l(()=>[t(r(el),{active:"",animated:"move"},{default:l(()=>[t(r(Et),{visible:""},{default:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(r(Et),{hidden:""},{default:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/nan.jpg"})]),_:1})]),_:1})]),_:1}))}},gB=`<template>
  <SuiReveal disabled animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/nan.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,hB={__name:"DisabledDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Disabled",code:gB},{description:l(()=>[n(" A disabled reveal will not animate when hovered ")]),example:l(()=>[t(r(el),{disabled:"",animated:"move"},{default:l(()=>[t(r(Et),{visible:""},{default:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(r(Et),{hidden:""},{default:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/nan.jpg"})]),_:1})]),_:1})]),_:1}))}},_B=`<template>
  <SuiReveal instant animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/chris.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,bB={__name:"InstantDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Instant",code:_B},{description:l(()=>[n(" An element can show its content without delay ")]),example:l(()=>[t(r(el),{instant:"",animated:"move"},{default:l(()=>[t(r(Et),{visible:""},{default:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(r(Et),{hidden:""},{default:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/chris.jpg"})]),_:1})]),_:1})]),_:1}))}},vB={__name:"Reveal",setup(e){const i=[{id:"fade",label:"Fade",category:"Types",component:rB},{id:"move",label:"Move",category:"Types",component:cB},{id:"rotate",label:"Rotate",category:"Types",component:pB},{id:"active",label:"Active",category:"States",component:fB},{id:"disabled",label:"Disabled",category:"States",component:hB},{id:"instant",label:"Instant",category:"Variations",component:bB}];return(a,o)=>(y(),x(ot,{title:"Reveal",description:"A reveal displays additional content in place of previous content when activated","component-docs":i}))}},SB=k("p",null,"Pellentesque habitant morbi tristique senectus.",-1),yB=`<template>
  <SuiSegment>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
</template>`,wB={__name:"SegmentDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Segment",code:yB},{description:l(()=>[n(" A segment of content ")]),example:l(()=>[t(r(H),null,{default:l(()=>[SB]),_:1})]),_:1}))}},CB=`<template>
  <SuiSegment placeholder>
    <SuiHeader icon>
      <SuiIcon name="pdf file outline" />
      No documents are listed for this customer.
    </SuiHeader>
    <SuiButton primary>Add Document</SuiButton>
  </SuiSegment>
</template>`,AB={__name:"PlaceholderSegmentDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Placeholder Segment",code:CB},{description:l(()=>[n(" A segment can be used to reserve space for conditionally displayed content. ")]),example:l(()=>[t(r(H),{placeholder:""},{default:l(()=>[t(r(fe),{icon:""},{default:l(()=>[t(r(J),{name:"pdf file outline"}),n(" No documents are listed for this customer. ")]),_:1}),t(r(P),{primary:""},{default:l(()=>[n("Add Document")]),_:1})]),_:1})]),_:1}))}},xB=k("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),kB=`<template>
  <SuiSegment raised>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,BB={__name:"RaisedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Raised",code:kB},{description:l(()=>[n(" A segment may be formatted to raise above the page. ")]),example:l(()=>[t(r(H),{raised:""},{default:l(()=>[xB]),_:1})]),_:1}))}},$B=k("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),TB=k("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),DB=`<template>
  <SuiSegment stacked>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
  <SuiSegment stacked="tall">
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,LB={__name:"StackedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Stacked",code:DB},{description:l(()=>[n(" A segment can be formatted to show it contains multiple pages ")]),example:l(()=>[t(r(H),{stacked:""},{default:l(()=>[$B]),_:1}),t(r(H),{stacked:"tall"},{default:l(()=>[TB]),_:1})]),_:1}))}},IB=k("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),EB=k("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),RB=k("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),PB=`<template>
  <SuiHeader as="h4">Header</SuiHeader>
  <SuiSegment pailed>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
  </SuiSegment>
</template>`,zB={__name:"PiledDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Piled",code:PB},{description:l(()=>[n(" A segment can be formatted to look like a pile of pages ")]),example:l(()=>[t(r(fe),{as:"h4"},{default:l(()=>[n("Header")]),_:1}),t(r(H),{piled:""},{default:l(()=>[IB,EB,RB]),_:1})]),_:1}))}},FB=k("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his.",-1),VB=k("p",null,"Pellentesque habitant morbi tristique senectus.",-1),MB=k("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.",-1),NB=`<template>
  <SuiSegment vertical>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his.</p>
  </SuiSegment>
  <SuiSegment vertical>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
  <SuiSegment vertical>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.</p>
  </SuiSegment>
</template>`,HB={__name:"VerticalSegmentDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Vertical Segment",code:NB},{description:l(()=>[n(" A vertical segment formats content to be aligned as part of a vertical group ")]),example:l(()=>[t(r(H),{vertical:""},{default:l(()=>[FB]),_:1}),t(r(H),{vertical:""},{default:l(()=>[VB]),_:1}),t(r(H),{vertical:""},{default:l(()=>[MB]),_:1})]),_:1}))}},OB=k("p",null,"Top",-1),qB=k("p",null,"Middle",-1),GB=k("p",null,"Bottom",-1),jB=k("p",null,"Top",-1),UB=k("p",null,"Middle",-1),YB=k("p",null,"Bottom",-1),JB=k("p",null,"Top",-1),WB=k("p",null,"Middle",-1),KB=k("p",null,"Bottom",-1),XB=`<template>
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
</template>`,QB={__name:"SegmentsDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Segments",code:XB},{description:l(()=>[n(" A group of segments can be formatted to appear together ")]),example:l(()=>[t(r(yt),null,{default:l(()=>[t(r(H),null,{default:l(()=>[OB]),_:1}),t(r(H),null,{default:l(()=>[qB]),_:1}),t(r(H),null,{default:l(()=>[GB]),_:1})]),_:1}),t(r(yt),{basic:""},{default:l(()=>[t(r(H),null,{default:l(()=>[jB]),_:1}),t(r(H),null,{default:l(()=>[UB]),_:1}),t(r(H),null,{default:l(()=>[YB]),_:1})]),_:1}),t(r(yt),null,{default:l(()=>[t(r(H),null,{default:l(()=>[JB]),_:1}),t(r(H),{color:"red"},{default:l(()=>[WB]),_:1}),t(r(H),{secondary:""},{default:l(()=>[KB]),_:1})]),_:1})]),_:1}))}},ZB=k("p",null,"Top",-1),e$=k("p",null,"Nested Top",-1),t$=k("p",null,"Nested Middle",-1),i$=k("p",null,"Nested Bottom",-1),l$=k("p",null,"Middle",-1),a$=k("p",null,"Top",-1),n$=k("p",null,"Middle",-1),o$=k("p",null,"Bottom",-1),s$=k("p",null,"Bottom",-1),r$=`<template>
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
</template>`,u$={__name:"NestedSegmentsDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Nested Segments",code:r$},{description:l(()=>[n(" A group of segments can be nested in another group of segments ")]),example:l(()=>[t(r(yt),null,{default:l(()=>[t(r(H),null,{default:l(()=>[ZB]),_:1}),t(r(yt),null,{default:l(()=>[t(r(H),null,{default:l(()=>[e$]),_:1}),t(r(H),null,{default:l(()=>[t$]),_:1}),t(r(H),null,{default:l(()=>[i$]),_:1})]),_:1}),t(r(H),null,{default:l(()=>[l$]),_:1}),t(r(yt),{horizontal:""},{default:l(()=>[t(r(H),null,{default:l(()=>[a$]),_:1}),t(r(H),null,{default:l(()=>[n$]),_:1}),t(r(H),null,{default:l(()=>[o$]),_:1})]),_:1}),t(r(H),null,{default:l(()=>[s$]),_:1})]),_:1})]),_:1}))}},c$=k("p",null,"Left",-1),d$=k("p",null,"Middle",-1),p$=k("p",null,"Right",-1),m$=`<template>
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
</template>`,f$={__name:"HorizontalSegmentsDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Horizontal Segments",code:m$},{description:l(()=>[n(" A segment group can appear horizontally ")]),example:l(()=>[t(r(yt),{horizontal:""},{default:l(()=>[t(r(H),null,{default:l(()=>[c$]),_:1}),t(r(H),null,{default:l(()=>[d$]),_:1}),t(r(H),null,{default:l(()=>[p$]),_:1})]),_:1})]),_:1}))}},g$=`<template>
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
</template>`,h$={__name:"HorizontalEqualWidthSegmentsDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Horizontal equal width Segments",code:g$},{description:l(()=>[n(" A horizontal segment group can automatically divide segments to be equal width ")]),example:l(()=>[t(r(yt),{horizontal:"equal width"},{default:l(()=>[t(r(H),null,{default:l(()=>[n(" Segment One ")]),_:1}),t(r(H),null,{default:l(()=>[n(" Segment Two with a lot of additional content ")]),_:1}),t(r(H),null,{default:l(()=>[n(" Segment Three ")]),_:1})]),_:1})]),_:1}))}},_$=`<template>
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
</template>`,b$={__name:"HorizontalWrappingSegmentsDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Horizontal wrapping Segments",code:_$},{description:l(()=>[n(" A horizontal segment group can automatically wrap their segments on smaller screens ")]),example:l(()=>[t(r(yt),{horizontal:"wrapping"},{default:l(()=>[t(r(H),null,{default:l(()=>[n(" Segment One ")]),_:1}),t(r(H),null,{default:l(()=>[n(" Segment Two ")]),_:1}),t(r(H),null,{default:l(()=>[n(" Segment Three ")]),_:1}),t(r(H),null,{default:l(()=>[n(" Segment Four ")]),_:1}),t(r(H),null,{default:l(()=>[n(" Segment Five ")]),_:1}),t(r(H),null,{default:l(()=>[n(" Segment Six ")]),_:1}),t(r(H),null,{default:l(()=>[n(" Segment Seven ")]),_:1}),t(r(H),null,{default:l(()=>[n(" Segment Eight ")]),_:1})]),_:1})]),_:1}))}},v$=k("p",null,"Top",-1),S$=k("p",null,"Middle",-1),y$=k("p",null,"Bottom",-1),w$=`<template>
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
</template>`,C$={__name:"RaisedSegmentsDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Raised Segments",code:w$},{description:l(()=>[n(" A group of segments can be raised ")]),example:l(()=>[t(r(yt),{raised:""},{default:l(()=>[t(r(H),null,{default:l(()=>[v$]),_:1}),t(r(H),null,{default:l(()=>[S$]),_:1}),t(r(H),null,{default:l(()=>[y$]),_:1})]),_:1})]),_:1}))}},A$=k("p",null,"Top",-1),x$=k("p",null,"Middle",-1),k$=k("p",null,"Bottom",-1),B$=`<template>
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
</template>`,$$={__name:"StackedSegmentsDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Stacked Segments",code:B$},{description:l(()=>[n(" A group of segments can be stacked ")]),example:l(()=>[t(r(yt),{stacked:""},{default:l(()=>[t(r(H),null,{default:l(()=>[A$]),_:1}),t(r(H),null,{default:l(()=>[x$]),_:1}),t(r(H),null,{default:l(()=>[k$]),_:1})]),_:1})]),_:1}))}},T$=k("p",null,"Top",-1),D$=k("p",null,"Middle",-1),L$=k("p",null,"Bottom",-1),I$=`<template>
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
</template>`,E$={__name:"PiledSegmentsDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Piled Segments",code:I$},{description:l(()=>[n(" A group of segments can be piled ")]),example:l(()=>[t(r(yt),{piled:""},{default:l(()=>[t(r(H),null,{default:l(()=>[T$]),_:1}),t(r(H),null,{default:l(()=>[D$]),_:1}),t(r(H),null,{default:l(()=>[L$]),_:1})]),_:1})]),_:1}))}},R$=k("p",null,"Pellentesque habitant morbi tristique senectus.",-1),P$=`<template>
  <SuiSegment disabled>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
</template>`,z$={__name:"DisabledDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Disabled",code:P$},{description:l(()=>[n(" A segment may show its content is disabled ")]),example:l(()=>[t(r(H),{disabled:""},{default:l(()=>[R$]),_:1})]),_:1}))}},F$=`<template>
  <SuiSegment loading>
    <SuiImage src="/images/wireframe/paragraph.png" />
  </SuiSegment>
</template>`,V$={__name:"LoadingDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Loading",code:F$},{description:l(()=>[n(" A segment may show its content is being loaded ")]),example:l(()=>[t(r(H),{loading:""},{default:l(()=>[t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}))}},M$=k("p",null,"I'm here to tell you something, and you will probably read me first.",-1),N$=`<template>
  <SuiSegment inverted>
    <p>I'm here to tell you something, and you will probably read me first.</p>
  </SuiSegment>
</template>`,H$={__name:"InvertedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Inverted",code:N$},{description:l(()=>[n(" A segment can have its colors inverted for contrast ")]),example:l(()=>[t(r(H),{inverted:""},{default:l(()=>[M$]),_:1})]),_:1}))}},O$=k("p",null,"This segment is on top",-1),q$=k("p",null,"This segment is attached on both sides",-1),G$=k("p",null,"This segment is on bottom",-1),j$=`<template>
  <SuiSegment attached="top">
    <p>This segment is on top</p>
  </SuiSegment>
  <SuiSegment attached>
    <p>This segment is attached on both sides</p>
  </SuiSegment>
  <SuiSegment attached="bottom">
    <p>This segment is on bottom</p>
  </SuiSegment>
</template>`,U$={__name:"AttachedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Attached",code:j$},{description:l(()=>[n(" A segment can be attached to other content on a page ")]),example:l(()=>[t(r(H),{attached:"top"},{default:l(()=>[O$]),_:1}),t(r(H),{attached:""},{default:l(()=>[q$]),_:1}),t(r(H),{attached:"bottom"},{default:l(()=>[G$]),_:1})]),_:1}))}},Y$=k("p",null,"Padded content.",-1),J$=k("p",null,"Padded content.",-1),W$=`<template>
  <SuiSegment padded>
    <p>Padded content.</p>
  </SuiSegment>
  <SuiSegment padded="very">
    <p>Padded content.</p>
  </SuiSegment>
</template>`,K$={__name:"PaddedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Padded",code:W$},{description:l(()=>[n(" A segment can increase its padding ")]),example:l(()=>[t(r(H),{padded:""},{default:l(()=>[Y$]),_:1}),t(r(H),{padded:"very"},{default:l(()=>[J$]),_:1})]),_:1}))}},X$=k("p",null,"Fitted Segment",-1),Q$=k("p",null,"Horizontally fitted segment",-1),Z$=k("p",null,"Vertically fitted segment",-1),eT=`<template>
  <SuiSegment fitted>
    <p>Fitted Segment</p>
  </SuiSegment>
  <SuiSegment fitted="horizontally">
    <p>Horizontally fitted segment</p>
  </SuiSegment>
  <SuiSegment fitted="vertically">
    <p>Vertically fitted segment</p>
  </SuiSegment>
</template>`,tT={__name:"FittedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Fitted",code:eT},{description:l(()=>[n(" A segment can remove its padding, vertically or horizontally ")]),example:l(()=>[t(r(H),{fitted:""},{default:l(()=>[X$]),_:1}),t(r(H),{fitted:"horizontally"},{default:l(()=>[Q$]),_:1}),t(r(H),{fitted:"vertically"},{default:l(()=>[Z$]),_:1})]),_:1}))}},iT=k("p",null,"Pellentesque habitant morbi",-1),lT=k("p",null,"Pellentesque habitant morbi",-1),aT=k("p",null,"Pellentesque habitant morbi",-1),nT=`<template>
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
</template>`,oT={__name:"CompactDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Compact",code:nT},{description:l(()=>[n(" A segment may take up only as much space as is necessary ")]),example:l(()=>[t(r(H),{compact:""},{default:l(()=>[iT]),_:1}),t(r(yt),{compact:""},{default:l(()=>[t(r(H),null,{default:l(()=>[lT]),_:1}),t(r(H),null,{default:l(()=>[aT]),_:1})]),_:1})]),_:1}))}},sT=`<template>
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
</template>`,rT={__name:"ColoredDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Colored",code:sT},{description:l(()=>[n(" A segment can be colored ")]),example:l(()=>[t(r(H),{color:"red"},{default:l(()=>[n("Red")]),_:1}),t(r(H),{color:"orange"},{default:l(()=>[n("Orange")]),_:1}),t(r(H),{color:"yellow"},{default:l(()=>[n("Yellow")]),_:1}),t(r(H),{color:"olive"},{default:l(()=>[n("Olive")]),_:1}),t(r(H),{color:"green"},{default:l(()=>[n("Green")]),_:1}),t(r(H),{color:"teal"},{default:l(()=>[n("Teal")]),_:1}),t(r(H),{color:"blue"},{default:l(()=>[n("Blue")]),_:1}),t(r(H),{color:"violet"},{default:l(()=>[n("Violet")]),_:1}),t(r(H),{color:"purple"},{default:l(()=>[n("Purple")]),_:1}),t(r(H),{color:"pink"},{default:l(()=>[n("Pink")]),_:1}),t(r(H),{color:"brown"},{default:l(()=>[n("Brown")]),_:1}),t(r(H),{color:"grey"},{default:l(()=>[n("Grey")]),_:1}),t(r(H),{color:"black"},{default:l(()=>[n("Black")]),_:1})]),_:1}))}},uT=k("p",null,"I'm here to tell you something, and you will probably read me first.",-1),cT=k("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),dT=k("p",null,"If you notice me you must be looking very hard.",-1),pT=k("p",null,"I'm here to tell you something, and you will probably read me first.",-1),mT=k("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),fT=k("p",null,"If you notice me you must be looking very hard.",-1),gT=k("p",null,"I'm here to tell you something, and you will probably read me first.",-1),hT=k("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),_T=k("p",null,"If you notice me you must be looking very hard.",-1),bT=`<template>
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
</template>`,vT={__name:"EmphasisDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Emphasis",code:bT},{description:l(()=>[n(" A segment can be formatted to appear more or less noticeable ")]),example:l(()=>[t(r(H),null,{default:l(()=>[uT]),_:1}),t(r(H),{secondary:""},{default:l(()=>[cT]),_:1}),t(r(H),{tertiary:""},{default:l(()=>[dT]),_:1}),t(r(Fe)),t(r(H),{inverted:""},{default:l(()=>[pT]),_:1}),t(r(H),{secondary:"",inverted:""},{default:l(()=>[mT]),_:1}),t(r(H),{tertiary:"",inverted:""},{default:l(()=>[fT]),_:1}),t(r(Fe)),t(r(H),{inverted:"",color:"red"},{default:l(()=>[gT]),_:1}),t(r(H),{secondary:"",inverted:"",color:"red"},{default:l(()=>[hT]),_:1}),t(r(H),{tertiary:"",inverted:"",color:"red"},{default:l(()=>[_T]),_:1})]),_:1}))}},ST=`<template>
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
</template>`,yT={__name:"CircularDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Circular",code:ST},{description:l(()=>[n(" A segment can be circular ")]),example:l(()=>[t(r(H),{circular:"",style:{width:"175px",height:"175px"}},{default:l(()=>[t(r(fe),{as:"h2"},{default:l(()=>[n(" Buy Now "),t(r(Yi),null,{default:l(()=>[n("$10.99")]),_:1})]),_:1})]),_:1}),t(r(H),{circular:"",inverted:"",style:{width:"175px",height:"175px"}},{default:l(()=>[t(r(fe),{as:"h2"},{default:l(()=>[n(" Buy Now "),t(r(Yi),null,{default:l(()=>[n("$10.99")]),_:1})]),_:1})]),_:1})]),_:1}))}},wT=`<template>
  <SuiSegment clearing>
    <SuiButton floated="right" content="Floated" />
  </SuiSegment>
</template>`,CT={__name:"ClearingDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Clearing",code:wT},{description:l(()=>[n(" A segment can clear floated content ")]),example:l(()=>[t(r(H),{clearing:""},{default:l(()=>[t(r(P),{floated:"right",content:"Floated"})]),_:1})]),_:1}))}},AT=k("p",null,"This segment will appear to the right",-1),xT=k("p",null,"This segment will appear to the left",-1),kT=`<template>
  <SuiSegment floated="right">
    <p>This segment will appear to the right</p>
  </SuiSegment>
  <SuiSegment floated="left">
    <p>This segment will appear to the left</p>
  </SuiSegment>
</template>`,BT={__name:"FloatedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Floated",code:kT},{description:l(()=>[n(" A segment can appear to the left or right of other content ")]),example:l(()=>[t(r(H),{floated:"right"},{default:l(()=>[AT]),_:1}),t(r(H),{floated:"left"},{default:l(()=>[xT]),_:1})]),_:1}))}},$T=`<template>
  <SuiSegment textAlign="right">Right</SuiSegment>
  <SuiSegment textAlign="left">Left</SuiSegment>
  <SuiSegment textAlign="center">Center</SuiSegment>
</template>`,TT={__name:"TextAlignmentDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Text Alignment",code:$T},{description:l(()=>[n(" A segment can have its text aligned to a side ")]),example:l(()=>[t(r(H),{textAlign:"right"},{default:l(()=>[n("Right")]),_:1}),t(r(H),{textAlign:"left"},{default:l(()=>[n("Left")]),_:1}),t(r(H),{textAlign:"center"},{default:l(()=>[n("Center")]),_:1})]),_:1}))}},DT=k("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),LT=`<template>
  <SuiSegment basic>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,IT={__name:"BasicDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Basic",code:LT},{description:l(()=>[n(" A basic segment has no special formatting ")]),example:l(()=>[t(r(H),{basic:""},{default:l(()=>[DT]),_:1})]),_:1}))}},ET=k("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),RT=k("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),PT=k("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),zT=k("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),FT=k("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),VT=k("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),MT=k("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),NT=k("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),HT=`<template>
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
</template>`,OT={__name:"ScrollingDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Scrolling",code:HT},{description:l(()=>[n(" A scrolling segment has a predefined height to allow its content to be scrollable ")]),example:l(()=>[t(r(H),{scrolling:""},{default:l(()=>[ET,RT,PT,zT,FT,VT,MT,NT]),_:1})]),_:1}))}},qT=`<template>
  <SuiSegment size="mini">Mini</SuiSegment>
  <SuiSegment size="tiny">Tiny</SuiSegment>
  <SuiSegment size="small">Small</SuiSegment>
  <SuiSegment>Default</SuiSegment>
  <SuiSegment size="large">Large</SuiSegment>
  <SuiSegment size="big">Big</SuiSegment>
  <SuiSegment size="huge">Huge</SuiSegment>
  <SuiSegment size="massive">Massive</SuiSegment>
</template>`,GT={__name:"SizeDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Size",code:qT},{description:l(()=>[n(" A segment can vary in size ")]),example:l(()=>[t(r(H),{size:"mini"},{default:l(()=>[n("Mini")]),_:1}),t(r(H),{size:"tiny"},{default:l(()=>[n("Tiny")]),_:1}),t(r(H),{size:"small"},{default:l(()=>[n("Small")]),_:1}),t(r(H),null,{default:l(()=>[n("Default")]),_:1}),t(r(H),{size:"large"},{default:l(()=>[n("Large")]),_:1}),t(r(H),{size:"big"},{default:l(()=>[n("Big")]),_:1}),t(r(H),{size:"huge"},{default:l(()=>[n("Huge")]),_:1}),t(r(H),{size:"massive"},{default:l(()=>[n("Massive")]),_:1})]),_:1}))}},jT={__name:"Segment",setup(e){const i=[{id:"segment",label:"Segment",category:"Types",component:wB},{id:"placeholder-segment",label:"Placeholder Segment",category:"Types",component:AB},{id:"raised",label:"Raised",category:"Types",component:BB},{id:"stacked",label:"Stacked",category:"Types",component:LB},{id:"piled",label:"Piled",category:"Types",component:zB},{id:"vertical-segment",label:"Vertical Segment",category:"Types",component:HB},{id:"segments",label:"Segments",category:"Groups",component:QB},{id:"nested-segments",label:"Nested Segments",category:"Groups",component:u$},{id:"horizontal-segments",label:"Horizontal Segments",category:"Groups",component:f$},{id:"horizontal-equal-width-segments",label:"Horizontal equal width Segments",category:"Groups",component:h$},{id:"horizontal-wrapping-segments",label:"Horizontal wrapping Segments",category:"Groups",component:b$},{id:"raised-segments",label:"Raised Segments",category:"Groups",component:C$},{id:"stacked-segments",label:"Stacked Segments",category:"Groups",component:$$},{id:"piled-segments",label:"Piled Segments",category:"Groups",component:E$},{id:"disabled",label:"Disabled",category:"States",component:z$},{id:"loading",label:"Loading",category:"States",component:V$},{id:"inverted",label:"Inverted",category:"Variations",component:H$},{id:"attached",label:"Attached",category:"Variations",component:U$},{id:"padded",label:"Padded",category:"Variations",component:K$},{id:"fitted",label:"Fitted",category:"Variations",component:tT},{id:"compact",label:"Compact",category:"Variations",component:oT},{id:"colored",label:"Colored",category:"Variations",component:rT},{id:"emphasis",label:"Emphasis",category:"Variations",component:vT},{id:"circular",label:"Circular",category:"Variations",component:yT},{id:"clearing",label:"Clearing",category:"Variations",component:CT},{id:"floated",label:"Floated",category:"Variations",component:BT},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:TT},{id:"basic",label:"Basic",category:"Variations",component:IT},{id:"scrolling",label:"Scrolling",category:"Variations",component:OT},{id:"size",label:"Size",category:"Variations",component:GT}];return(a,o)=>(y(),x(ot,{title:"Segment",description:"A segment is used to create a grouping of related content","component-docs":i}))}},UT=F({name:"StepDoc",components:{DocExample:gt},setup(){return{stepCode:`<sui-step-group>
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
</sui-segment>`}}}),YT={class:"intro"},JT=k("p",null,"The steps take up the entire column width",-1),WT=k("p",null,"Main content",-1);function KT(e,i,a,o,s,c){const d=B("sui-header-subheader"),f=B("sui-header"),u=B("sui-divider"),p=B("sui-icon"),g=B("sui-menu-item"),m=B("sui-menu"),_=B("sui-container"),w=B("sui-segment"),S=B("sui-step"),A=B("sui-step-group"),T=B("doc-example"),L=B("sui-step-title"),h=B("sui-step-description"),b=B("sui-step-content"),C=B("sui-grid-column"),$=B("sui-grid");return y(),ye("div",null,[t(w,{vertical:""},{default:l(()=>[t(_,{class:"main"},{default:l(()=>[k("div",YT,[t(f,{as:"h1"},{default:l(()=>[n("Step "),t(d,null,{default:l(()=>[n(" A step shows the completion status of an activity in a series of activities ")]),_:1})]),_:1}),t(u,{hidden:""}),t(m,{floated:"right"},{default:l(()=>[t(g,{as:"a",icon:""},{default:l(()=>[t(p,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:l(()=>[t(p,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(_,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(T,{title:"Step",description:"A single step",code:e.stepCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,null,{default:l(()=>[n("Shipping")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Groups")]),_:1}),t(T,{title:"Steps",description:"A set of steps",code:e.stepsCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,null,{default:l(()=>[t(p,{name:"truck"}),t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Shipping")]),_:1}),t(h,null,{default:l(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,{active:""},{default:l(()=>[t(p,{name:"payment"}),t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Billing")]),_:1}),t(h,null,{default:l(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(S,{disabled:""},{default:l(()=>[t(p,{name:"info"}),t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Ordered",description:"A step can show a ordered sequence of steps",code:e.orderedCode},{default:l(()=>[t(A,{ordered:""},{default:l(()=>[t(S,{completed:""},{default:l(()=>[t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Shipping")]),_:1}),t(h,null,{default:l(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,{completed:""},{default:l(()=>[t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Billing")]),_:1}),t(h,null,{default:l(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(S,{active:""},{default:l(()=>[t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Confirm Order")]),_:1}),t(h,null,{default:l(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Vertical",description:"A step can be displayed stacked vertically",code:e.verticalCode},{default:l(()=>[t(A,{vertical:""},{default:l(()=>[t(S,{completed:""},{default:l(()=>[t(p,{name:"truck"}),t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Shipping")]),_:1}),t(h,null,{default:l(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,{completed:""},{default:l(()=>[t(p,{name:"credit card"}),t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Billing")]),_:1}),t(h,null,{default:l(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(S,{active:""},{default:l(()=>[t(p,{name:"info"}),t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Confirm Order")]),_:1}),t(h,null,{default:l(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Content")]),_:1}),t(T,{title:"Description",description:"A step can contain a description",code:e.descriptionCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Shipping")]),_:1}),t(h,null,{default:l(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Icon",description:"A step can contain an icon",code:e.iconCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,null,{default:l(()=>[t(p,{name:"truck"}),t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Shipping")]),_:1}),t(h,null,{default:l(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Link",description:"A step can link",code:e.linkCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,{link:""},{default:l(()=>[t(p,{name:"truck"}),t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Shipping")]),_:1}),t(h,null,{default:l(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Billing")]),_:1}),t(h,null,{default:l(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("States")]),_:1}),t(T,{title:"Active",description:"A step can be highlighted as active",code:e.activeCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,{active:""},{default:l(()=>[t(p,{name:"payment"}),t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Billing")]),_:1}),t(h,null,{default:l(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Completed",description:"A step can show that a user has completed it",code:e.completedCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,{completed:""},{default:l(()=>[t(p,{name:"payment"}),t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Billing")]),_:1}),t(h,null,{default:l(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Disabled",description:"A step can show that it cannot be selected",code:e.disabledCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,{disabled:""},{default:l(()=>[n("Billing")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Variations")]),_:1}),t(T,{title:"Stackable",description:"A step can stack vertically only on smaller screens",code:e.stackableCode},{default:l(()=>[t(A,{stackable:"tablet"},{default:l(()=>[t(S,null,{default:l(()=>[t(p,{name:"plane"}),t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Shipping")]),_:1}),t(h,null,{default:l(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,{active:""},{default:l(()=>[t(p,{name:"dollar"}),t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Billing")]),_:1}),t(h,null,{default:l(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(S,{disabled:""},{default:l(()=>[t(p,{name:"info circle"}),t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Confirm Order")]),_:1}),t(h,null,{default:l(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Unstackable",description:"A step can prevent itself from stacking on mobile",code:e.unstackableCode},{default:l(()=>[t(A,{unstackable:""},{default:l(()=>[t(S,null,{default:l(()=>[t(p,{name:"plane"}),t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Shipping")]),_:1}),t(h,null,{default:l(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,{active:""},{default:l(()=>[t(p,{name:"dollar"}),t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Billing")]),_:1}),t(h,null,{default:l(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(S,{disabled:""},{default:l(()=>[t(p,{name:"info circle"}),t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Confirm Order")]),_:1}),t(h,null,{default:l(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Fluid",description:"A fluid step takes up the width of its container",code:e.fluidCode},{default:l(()=>[t($,{columns:2},{default:l(()=>[t(C,null,{default:l(()=>[t(A,{fluid:"",vertical:""},{default:l(()=>[t(S,{completed:""},{default:l(()=>[t(p,{name:"truck"}),t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Shipping")]),_:1}),t(h,null,{default:l(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,{active:""},{default:l(()=>[t(p,{name:"dollar"}),t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Billing")]),_:1}),t(h,null,{default:l(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(C,null,{default:l(()=>[JT]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Attached",description:"Steps can be attached to other elements",code:e.attachedCode},{default:l(()=>[k("div",null,[t(A,{attached:"top"},{default:l(()=>[t(S,null,{default:l(()=>[t(p,{name:"truck"}),t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Shipping")]),_:1}),t(h,null,{default:l(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,{active:""},{default:l(()=>[t(p,{name:"payment"}),t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Billing")]),_:1}),t(h,null,{default:l(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1}),t(w,{attached:""},{default:l(()=>[WT]),_:1}),t(A,{attached:"bottom"},{default:l(()=>[t(S,null,{default:l(()=>[t(p,{name:"truck"}),t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Shipping")]),_:1}),t(h,null,{default:l(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,{active:""},{default:l(()=>[t(p,{name:"payment"}),t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Billing")]),_:1}),t(h,null,{default:l(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(T,{title:"Evenly Divided",description:"Steps can be divided evenly inside their parent",code:e.evenlyDividedCode},{default:l(()=>[t(A,{widths:2},{default:l(()=>[t(S,{active:""},{default:l(()=>[t(p,{name:"payment"}),t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Billing")]),_:1})]),_:1})]),_:1}),t(S,{disabled:""},{default:l(()=>[t(p,{name:"info"}),t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Size",description:"Steps can have different sizes",code:e.sizeCode},{default:l(()=>[t(A,{size:"mini"},{default:l(()=>[t(S,{active:""},{default:l(()=>[t(p,{name:"payment"}),t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Billing")]),_:1})]),_:1})]),_:1}),t(S,{disabled:""},{default:l(()=>[t(p,{name:"info"}),t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Inverted",description:"A step's color can be inverted",code:e.invertedCode},{default:l(()=>[t(w,{inverted:""},{default:l(()=>[t(A,{inverted:"",vertical:""},{default:l(()=>[t(S,{completed:""},{default:l(()=>[t(p,{name:"truck"}),t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Shipping")]),_:1}),t(h,null,{default:l(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,{completed:""},{default:l(()=>[t(p,{name:"credit card"}),t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Billing")]),_:1}),t(h,null,{default:l(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(S,{active:""},{default:l(()=>[t(p,{name:"info"}),t(b,null,{default:l(()=>[t(L,null,{default:l(()=>[n("Confirm Order")]),_:1}),t(h,null,{default:l(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const XT=He(UT,[["render",KT]]),QT=`<template>
  <SuiBreadcrumb
    :sections="[
      { content: 'Home', link: true },
      { content: 'Store', link: true },
      { content: 'T-Shirt', active: true }
    ]"
    icon="right angle"
  />
</template>`,ZT={__name:"BreadcrumbDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Breadcrumb",code:QT},{description:l(()=>[n(" A standard breadcrumb ")]),example:l(()=>[t(r(ni),{sections:[{content:"Home",link:!0},{content:"Store",link:!0},{content:"T-Shirt",active:!0}],icon:"right angle"})]),_:1}))}},eD=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection link>Registration</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Personal Information</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,tD={__name:"DividerDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Divider",code:eD},{description:l(()=>[n(" A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text. ")]),example:l(()=>[t(r(ni),null,{default:l(()=>[t(r(et),{link:""},{default:l(()=>[n("Home")]),_:1}),t(r(Tt),null,{default:l(()=>[n(" / ")]),_:1}),t(r(et),{link:""},{default:l(()=>[n("Registration")]),_:1}),t(r(Tt),null,{default:l(()=>[n(" / ")]),_:1}),t(r(et),{active:""},{default:l(()=>[n("Personal Information")]),_:1})]),_:1})]),_:1}))}},iD=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Search</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,lD={__name:"SectionDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Section",code:iD},{description:l(()=>[n(" A breadcrumb can contain sections that can either be formatted as a link or text ")]),example:l(()=>[t(r(ni),null,{default:l(()=>[t(r(et),{link:""},{default:l(()=>[n("Home")]),_:1}),t(r(Tt),null,{default:l(()=>[n(" / ")]),_:1}),t(r(et),{active:""},{default:l(()=>[n("Search")]),_:1})]),_:1})]),_:1}))}},aD=k("a",{href:"#"},"paper towels",-1),nD=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Search for: <a href="#">paper towels</a></SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,oD={__name:"LinkDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Link",code:nD},{description:l(()=>[n(" A section may be linkable or contain a link ")]),example:l(()=>[t(r(ni),null,{default:l(()=>[t(r(et),{link:""},{default:l(()=>[n("Home")]),_:1}),t(r(Tt),null,{default:l(()=>[n(" / ")]),_:1}),t(r(et),{active:""},{default:l(()=>[n("Search for: "),aD]),_:1})]),_:1})]),_:1}))}},sD=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Products</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Paper Towels</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,rD={__name:"ActiveDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Active",code:sD},{description:l(()=>[n(" A section can be active ")]),example:l(()=>[t(r(ni),null,{default:l(()=>[t(r(et),{link:""},{default:l(()=>[n("Products")]),_:1}),t(r(Tt),null,{default:l(()=>[n(" / ")]),_:1}),t(r(et),{active:""},{default:l(()=>[n("Paper Towels")]),_:1})]),_:1})]),_:1}))}},uD=k("br",null,null,-1),cD=`<template>
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
</template>`,dD={__name:"InvertedDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Inverted",code:cD},{description:l(()=>[n(" A breadcrumb can be inverted ")]),example:l(()=>[t(r(H),{inverted:""},{default:l(()=>[t(r(ni),{inverted:""},{default:l(()=>[t(r(et),{link:""},{default:l(()=>[n("Home")]),_:1}),t(r(Tt),null,{default:l(()=>[n(" / ")]),_:1}),t(r(et),{link:""},{default:l(()=>[n("Registration")]),_:1}),t(r(Tt),null,{default:l(()=>[n(" / ")]),_:1}),t(r(et),{active:""},{default:l(()=>[n("Personal Information")]),_:1})]),_:1}),uD,t(r(ni),{inverted:""},{default:l(()=>[t(r(et),null,{default:l(()=>[n("Home")]),_:1}),t(r(Tt),null,{default:l(()=>[n(" / ")]),_:1}),t(r(et),null,{default:l(()=>[n("Registration")]),_:1}),t(r(Tt),null,{default:l(()=>[n(" / ")]),_:1}),t(r(et),{active:""},{default:l(()=>[n("Personal Information")]),_:1})]),_:1})]),_:1})]),_:1}))}},pD=`<template>
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
</template>`,mD={__name:"SizeDoc",setup(e){const i=["mini","tiny","small","large","big","huge","massive"];return(a,o)=>(y(),x(I,{label:"Size",code:pD},{description:l(()=>[n(" A breadcrumb can vary in size ")]),example:l(()=>[(y(),ye(Ce,null,Qe(i,s=>(y(),ye(Ce,{key:s},[t(r(ni),{size:s},{default:l(()=>[t(r(et),{link:""},{default:l(()=>[n("Home")]),_:1}),t(r(Tt),null,{default:l(()=>[n(" / ")]),_:1}),t(r(et),{link:""},{default:l(()=>[n("Registration")]),_:1}),t(r(Tt),null,{default:l(()=>[n(" / ")]),_:1}),t(r(et),{active:""},{default:l(()=>[n("Personal Information")]),_:1})]),_:2},1032,["size"]),t(r(Fe),{hidden:""})],64))),64))]),_:1}))}},fD={__name:"Breadcrumb",setup(e){const i=[{id:"breadcrumb",label:"Breadcrumb",category:"Types",component:ZT},{id:"divider",label:"Divider",category:"Content",component:tD},{id:"section",label:"Section",category:"Content",component:lD},{id:"link",label:"Link",category:"Content",component:oD},{id:"active",label:"Active",category:"States",component:rD},{id:"inverted",label:"Inverted",category:"Variations",component:dD},{id:"size",label:"Size",category:"Variations",component:mD}];return(a,o)=>(y(),x(ot,{title:"Breadcrumb",description:"A standard breadcrumb","component-docs":i}))}},gD=`<template>
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
</template>`,hD={__name:"FormDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Form",code:gD},{description:l(()=>[n(" A Form ")]),example:l(()=>[t(r(Nt),null,{default:l(()=>[t(r(it),{label:"First Name",placeholder:"First Name"}),t(r(it),{label:"Last Name",placeholder:"Last Name"}),t(r(it),null,{default:l(()=>[t(r(ld),{label:"I agree to the Terms and Conditions"})]),_:1}),t(r(P),{type:"submit"},{default:l(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},_D=`<template>
  <SuiForm>
    <SuiFormField
      label="User Input"
    />
  </SuiForm>
</template>`,bD={__name:"FieldDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Field",code:_D},{description:l(()=>[n(" A field is a form element containing a label and an input ")]),example:l(()=>[t(r(Nt),null,{default:l(()=>[t(r(it),{label:"User Input"})]),_:1})]),_:1}))}},vD=`<template>
  <SuiForm>
    <SuiFormGroup>
      <SuiFormField label="First Name" />
      <SuiFormField label="Middle Name" />
      <SuiFormField label="Last Name" />
    </SuiFormGroup>
  </SuiForm>
</template>`,SD={__name:"FieldsDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Fields",code:vD},{description:l(()=>[n(" A set of fields can appear grouped together ")]),example:l(()=>[t(r(Nt),null,{default:l(()=>[t(r(gs),null,{default:l(()=>[t(r(it),{label:"First Name"}),t(r(it),{label:"Middle Name"}),t(r(it),{label:"Last Name"})]),_:1})]),_:1})]),_:1}))}},yD=`<template>
  <SuiForm>
    <SuiFormTextarea label="Text" />
    <SuiFormTextarea label="Short Text" :rows="2" />
  </SuiForm>
</template>`,wD={__name:"TextAreaDoc",setup(e){return(i,a)=>(y(),x(I,{label:"TextArea",code:yD},{description:l(()=>[n(" A textarea can be used to allow for extended user input. ")]),example:l(()=>[t(r(Nt),null,{default:l(()=>[t(r(wo),{label:"Text"}),t(r(wo),{label:"Short Text",rows:2})]),_:1})]),_:1}))}},CD=`<template>
  <SuiForm loading>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,AD={__name:"LoadingDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Loading",code:CD},{description:l(()=>[n(" If a form is in loading state, it will automatically show a loading indicator. ")]),example:l(()=>[t(r(Nt),{loading:""},{default:l(()=>[t(r(it),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(r(P),{type:"submit"},{default:l(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},xD=`<template>
  <SuiForm success>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      success
      header='Form Completed'
      content="You're all signed up for the newsletter"
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,kD={__name:"SuccessDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Success",code:xD},{description:l(()=>[n(" If a form is in an success state, it will automatically show any success message blocks. ")]),example:l(()=>[t(r(Nt),{success:""},{default:l(()=>[t(r(it),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(r(An),{success:"",header:"Form Completed",content:"You're all signed up for the newsletter"}),t(r(P),{type:"submit"},{default:l(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},BD=`<template>
  <SuiForm error>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      error
      header='Action Forbidden'
      content='You can only sign up for an account once with a given e-mail address.'
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,$D={__name:"ErrorDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Error",code:BD},{description:l(()=>[n(" If a form is in an error state, it will automatically show any error message blocks. ")]),example:l(()=>[t(r(Nt),{error:""},{default:l(()=>[t(r(it),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(r(An),{error:"",header:"Action Forbidden",content:"You can only sign up for an account once with a given e-mail address."}),t(r(P),{type:"submit"},{default:l(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},TD=`<template>
  <SuiForm warning>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      warning
      header='Could you check something!'
      content='That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.'
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,DD={__name:"WarningDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Warning",code:TD},{description:l(()=>[n(" If a form is in warning state, it will automatically show any warning message block. ")]),example:l(()=>[t(r(Nt),{warning:""},{default:l(()=>[t(r(it),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(r(An),{warning:"",header:"Could you check something!",content:"That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail."}),t(r(P),{type:"submit"},{default:l(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},LD=`<template>
  <SuiForm>
    <SuiFormGroup>
      <SuiFormField disabled label="First name" placeholder="Read only" />
      <SuiFormField disabled label="Last name" placeholder="Disabled" />
    </SuiFormGroup>
  </SuiForm>
</template>`,ID={__name:"DisabledDoc",setup(e){return(i,a)=>(y(),x(I,{label:"Disabled",code:LD},{description:l(()=>[n(" Individual fields may be disabled ")]),example:l(()=>[t(r(Nt),null,{default:l(()=>[t(r(gs),null,{default:l(()=>[t(r(it),{disabled:"",label:"First name",placeholder:"Read only"}),t(r(it),{disabled:"",label:"Last name",placeholder:"Disabled"})]),_:1})]),_:1})]),_:1}))}},ED={__name:"Form",setup(e){const i=[{id:"form",label:"Form",category:"Types",component:hD},{id:"field",label:"Field",category:"Content",component:bD},{id:"fields",label:"Fields",category:"Content",component:SD},{id:"textarea",label:"TextArea",category:"Content",component:wD},{id:"loading",label:"Loading",category:"Form States",component:AD},{id:"success",label:"Success",category:"Form States",component:kD},{id:"error",label:"Error",category:"Form States",component:$D},{id:"warning",label:"Warning",category:"Form States",component:DD},{id:"disabled",label:"Disabled",category:"Field States",component:ID}];return(a,o)=>(y(),x(ot,{title:"Form",description:"A form displays a set of related user input fields in a structured way","component-docs":i}))}},RD=F({name:"DocPageHeader",props:{title:String,sub:String}}),PD={class:"intro",style:{padding:"2rem"}};function zD(e,i,a,o,s,c){const d=B("sui-header-subheader"),f=B("sui-header"),u=B("sui-divider"),p=B("sui-icon"),g=B("sui-menu-item"),m=B("sui-menu"),_=B("sui-container"),w=B("sui-segment");return y(),x(w,{vertical:""},{default:l(()=>[t(_,{class:"main"},{default:l(()=>[k("div",PD,[t(f,{as:"h1"},{default:l(()=>[n($e(e.title)+" ",1),t(d,null,{default:l(()=>[n($e(e.sub),1)]),_:1})]),_:1}),t(u,{hidden:""}),t(m,{floated:"right"},{default:l(()=>[t(g,{as:"a",icon:""},{default:l(()=>[t(p,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:l(()=>[t(p,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1})}const Rt=He(RD,[["render",zD]]),Te="/vue-fomantic-ui/images/wireframe/image.png",ei="/vue-fomantic-ui/images/wireframe/media-paragraph.png",Oe="/vue-fomantic-ui/images/wireframe/paragraph.png",qr="/vue-fomantic-ui/images/wireframe/centered-paragraph.png",FD=F({name:"GridDoc",components:{DocPageHeader:Rt,DocExample:gt},setup(){return{numbers:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],gridCode:`<sui-grid>
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
</sui-grid>`}}}),VD=k("br",null,null,-1);function MD(e,i,a,o,s,c){const d=B("doc-page-header"),f=B("sui-header"),u=B("sui-image"),p=B("sui-grid-column"),g=B("sui-grid"),m=B("doc-example"),_=B("sui-grid-row"),w=B("sui-segment"),S=B("sui-divider"),A=B("sui-menu-item"),T=B("sui-menu"),L=B("sui-container");return y(),ye("div",null,[t(d,{title:"Grid",sub:"A grid is used to harmonize negative space in a layout"}),t(L,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(m,{title:"Grid",description:"A basic grid",code:e.gridCode},{default:l(()=>[t(g,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.numbers,h=>(y(),x(p,{key:h},{default:l(()=>[t(u,{src:Te})]),_:2},1024))),128))]),_:1})]),_:1},8,["code"]),t(m,{title:"Divided",description:"A grid can have dividers between its columns",code:e.dividedCode},{default:l(()=>[t(g,{columns:3,divided:""},{default:l(()=>[t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,{src:ei})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:ei})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:ei})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,{src:ei})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:ei})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:ei})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Vertical Divided",description:"A grid can have dividers between rows",code:e.verticalDividedCode},{default:l(()=>[t(g,{divided:"vertically"},{default:l(()=>[t(_,{columns:2},{default:l(()=>[t(p,null,{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Oe})]),_:1})]),_:1}),t(_,{columns:3},{default:l(()=>[t(p,null,{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Oe})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Celled",description:"A grid can have rows divided into cells",code:e.celledCode},{default:l(()=>[t(g,{celled:""},{default:l(()=>[t(_,null,{default:l(()=>[t(p,{width:3},{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,{width:13},{default:l(()=>[t(u,{src:qr})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,{width:3},{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,{width:10},{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,{width:3},{default:l(()=>[t(u,{src:Te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Internally Celled",description:"A grid can have rows divisions only between internal rows",code:e.internallyCelledCode},{default:l(()=>[t(g,{celled:"internally"},{default:l(()=>[t(_,null,{default:l(()=>[t(p,{width:3},{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,{width:13},{default:l(()=>[t(u,{src:qr})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,{width:3},{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,{width:10},{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,{width:3},{default:l(()=>[t(u,{src:Te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Content")]),_:1}),t(m,{title:"Rows",description:"A row is a horizontal grouping of columns",code:e.rowsCode},{default:l(()=>[t(g,{columns:3},{default:l(()=>[t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Oe})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Oe})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Columns",description:"Columns each contain gutters giving them equal spacing from other columns",code:e.columnsCode},{default:l(()=>[t(g,null,{default:l(()=>[t(p,{width:8},{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,{width:8},{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,{width:8},{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,{width:8},{default:l(()=>[t(u,{src:Oe})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Variations")]),_:1}),t(m,{title:"Floated",description:"A column can sit flush against the left or right edge of a row",code:e.floatedCode},{default:l(()=>[t(g,null,{default:l(()=>[t(p,{floated:"left",width:5},{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,{floated:"right",width:5},{default:l(()=>[t(u,{src:Oe})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Column Width",description:"A column can vary in width taking up more than a single grid column",code:e.columnWidthCode},{default:l(()=>[t(g,null,{default:l(()=>[t(p,{width:4},{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,{width:9},{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,{width:3},{default:l(()=>[t(u,{src:ei})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Column Count",description:"A grid can have a different number of columns per row",code:e.columnCountCode},{default:l(()=>[t(g,null,{default:l(()=>[t(_,{columns:3},{default:l(()=>[t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1})]),_:1}),t(_,{columns:4},{default:l(()=>[t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Equal Width",description:"Equal Width",code:e.equalWidthCode},{default:l(()=>[t(g,{columns:"equal"},{default:l(()=>[t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("1")]),_:1})]),_:1}),t(p,{width:8},{default:l(()=>[t(w,null,{default:l(()=>[n("2")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("3")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Stretched",description:"A row can stretch its contents to take up the entire column height",code:e.stretchedCode},{default:l(()=>[t(g,{columns:3,divided:""},{default:l(()=>[t(_,{stretched:""},{default:l(()=>[t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("1")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("1")]),_:1}),t(w,null,{default:l(()=>[n("2")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("1")]),_:1}),t(w,null,{default:l(()=>[n("2")]),_:1}),t(w,null,{default:l(()=>[n("3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Padded",description:"A grid can preserve its vertical and horizontal gutters on first and last columns",code:e.paddedCode},{default:l(()=>[k("div",null,[t(S),t(g,{padded:"",columns:2},{default:l(()=>[t(p,null,{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Oe})]),_:1})]),_:1})])]),_:1},8,["code"]),t(m,{title:"Relaxed",description:"A grid can increase its gutters to allow for more negative space",code:e.relaxedCode},{default:l(()=>[t(g,{relaxed:"",columns:4},{default:l(()=>[t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Colored",description:"A row or column can be colored",code:e.coloredCode},{default:l(()=>[t(g,{padded:"",columns:5},{default:l(()=>[t(p,{color:"red"},{default:l(()=>[n("Red")]),_:1}),t(p,{color:"orange"},{default:l(()=>[n("Orange")]),_:1}),t(p,{color:"yellow"},{default:l(()=>[n("Yellow")]),_:1}),t(p,{color:"olive"},{default:l(()=>[n("Olive")]),_:1}),t(p,{color:"green"},{default:l(()=>[n("Green")]),_:1}),t(p,{color:"teal"},{default:l(()=>[n("Teal")]),_:1}),t(p,{color:"blue"},{default:l(()=>[n("Blue")]),_:1}),t(p,{color:"violet"},{default:l(()=>[n("Violet")]),_:1}),t(p,{color:"purple"},{default:l(()=>[n("Purple")]),_:1}),t(p,{color:"pink"},{default:l(()=>[n("Pink")]),_:1}),t(p,{color:"brown"},{default:l(()=>[n("Brown")]),_:1}),t(p,{color:"grey"},{default:l(()=>[n("Grey")]),_:1}),t(p,{color:"black"},{default:l(()=>[n("Black")]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Centered",description:"A grid can have its columns centered",code:e.centeredCode},{default:l(()=>[t(g,{centered:"",columns:2},{default:l(()=>[t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(_,{centered:"",columns:4},{default:l(()=>[t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Text Alignment",description:"A grid, row, or column can specify its text alignment",code:e.textAlignCode},{default:l(()=>[t(g,{textAlign:"center",columns:3},{default:l(()=>[t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(T,{vertical:"",fluid:""},{default:l(()=>[t(A,{header:""},{default:l(()=>[n("Cats")]),_:1})]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(T,{vertical:"",fluid:""},{default:l(()=>[t(A,{header:""},{default:l(()=>[n("Dogs")]),_:1}),t(A,null,{default:l(()=>[n("Poodle")]),_:1}),t(A,null,{default:l(()=>[n("Cockerspaniel")]),_:1})]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(T,{vertical:"",fluid:""},{default:l(()=>[t(A,{header:""},{default:l(()=>[n("Monkeys")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Vertical Alignment",description:"A grid, row, or column can specify its vertical alignment to have all its columns vertically centered",code:e.verticalAlignCode},{default:l(()=>[t(g,{verticalAlign:"middle",columns:4,centered:""},{default:l(()=>[t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te}),VD,t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Responsive Variations")]),_:1}),t(m,{title:"Doubling",description:"A grid can double its column width on tablet and mobile sizes",code:e.doublingCode},{default:l(()=>[t(g,{doubling:"",columns:5},{default:l(()=>[t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"stackable",description:"A grid can have its columns stack on-top of each other after reaching mobile breakpoints",code:e.stackableCode},{default:l(()=>[t(g,{stackable:"",columns:2},{default:l(()=>[t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[t(u,{src:Oe})]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[t(u,{src:Oe})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Reversed",description:"A grid or row can specify that its columns should reverse order at different device sizes",code:e.reversedCode},{default:l(()=>[t(g,{reversed:"computer vertically"},{default:l(()=>[t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[n("Computer Row 3")]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[n("Computer Row 2")]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[n("Computer Row 1")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Device Visibility",description:"A columns or row can appear only for a specific device, or screen sizes",code:e.deviceVisibilityCode},{default:l(()=>[t(g,null,{default:l(()=>[t(_,{only:"large screen",columns:2},{default:l(()=>[t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("Large Screen")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("Large Screen")]),_:1})]),_:1})]),_:1}),t(_,{only:"widescreen",columns:2},{default:l(()=>[t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("Widescreen")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("Widescreen")]),_:1})]),_:1})]),_:1}),t(_,{only:"mobile",columns:2},{default:l(()=>[t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("Mobile")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("Mobile")]),_:1})]),_:1})]),_:1}),t(_,{columns:3},{default:l(()=>[t(p,{only:"computer"},{default:l(()=>[t(w,null,{default:l(()=>[n("Computer")]),_:1})]),_:1}),t(p,{only:"mobile"},{default:l(()=>[t(w,null,{default:l(()=>[n("Tablet and Mobile")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("All Sizes")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("All Sizes")]),_:1})]),_:1})]),_:1}),t(_,{only:"computer",columns:4},{default:l(()=>[t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("Computer")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("Computer")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("Computer")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("Computer")]),_:1})]),_:1})]),_:1}),t(_,{only:"tablet",columns:3},{default:l(()=>[t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("Tablet")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("Tablet")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("Tablet")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Responsive Width",description:"A column can specify a width for a specific device",code:e.responsiveWidthCode},{default:l(()=>[t(g,null,{default:l(()=>[t(p,{mobile:16,tablet:8,computer:4},{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,{mobile:16,tablet:8,computer:4},{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,{mobile:16,tablet:8,computer:4},{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,{mobile:16,tablet:8,computer:4},{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,{mobile:16,tablet:8,computer:4},{default:l(()=>[t(u,{src:Oe})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const ND=He(FD,[["render",MD]]),HD=F({name:"TableDoc",components:{DocPageHeader:Rt,DocExample:gt},setup(){return{tableCode:`<sui-table celled>
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
</sui-table>`}}}),OD=k("a",{href:"#"},"Edit",-1),qD=k("a",{href:"#"},"Edit",-1),GD=k("a",{href:"#"},"Edit",-1),jD=k("br",null,null,-1),UD=k("br",null,null,-1),YD=k("br",null,null,-1),JD=k("br",null,null,-1),WD=k("br",null,null,-1),KD=k("br",null,null,-1),XD=k("br",null,null,-1);function QD(e,i,a,o,s,c){const d=B("doc-page-header"),f=B("sui-header"),u=B("sui-table-header-cell"),p=B("sui-table-row"),g=B("sui-table-header"),m=B("sui-table-cell"),_=B("sui-table-body"),w=B("sui-table"),S=B("doc-example"),A=B("sui-icon"),T=B("sui-table-footer"),L=B("sui-container");return y(),ye("div",null,[t(d,{title:"Table",sub:"A table displays a collections of data grouped into rows"}),t(L,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(S,{title:"Table",description:"A standard table",code:e.tableCode},{default:l(()=>[t(w,{celled:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Age")]),_:1}),t(u,null,{default:l(()=>[n("Job")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("James")]),_:1}),t(m,null,{default:l(()=>[n("24")]),_:1}),t(m,null,{default:l(()=>[n("Engineer")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jill")]),_:1}),t(m,null,{default:l(()=>[n("26")]),_:1}),t(m,null,{default:l(()=>[n("Engineer")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Elyse")]),_:1}),t(m,null,{default:l(()=>[n("24")]),_:1}),t(m,null,{default:l(()=>[n("Designer")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Definition",description:"A table may be formatted to emphasize a first column that defines a rows content",code:e.definitionCode},{default:l(()=>[t(w,{definition:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u),t(u,null,{default:l(()=>[n("Arguments")]),_:1}),t(u,null,{default:l(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("reset rating")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1}),t(m,null,{default:l(()=>[n("Resets rating to default value")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("set rating")]),_:1}),t(m,null,{default:l(()=>[n("rating (integer)")]),_:1}),t(m,null,{default:l(()=>[n("Sets the current star rating to specified value")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Structured",description:"A table can be formatted to display complex structured data",code:e.structuredCode},{default:l(()=>[t(w,{structured:"",celled:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,{rowspan:"2"},{default:l(()=>[n("Name")]),_:1}),t(u,{rowspan:"2"},{default:l(()=>[n("Type")]),_:1}),t(u,{rowspan:"2"},{default:l(()=>[n("Files")]),_:1}),t(u,{colspan:"3"},{default:l(()=>[n("Languages")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Ruby")]),_:1}),t(u,null,{default:l(()=>[n("Javascript")]),_:1}),t(u,null,{default:l(()=>[n("Python")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Alpha Team")]),_:1}),t(m,null,{default:l(()=>[n("Project 1")]),_:1}),t(m,{textAlign:"right"},{default:l(()=>[n("2")]),_:1}),t(m,{textAlign:"center"},{default:l(()=>[t(A,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(m),t(m)]),_:1}),t(p,null,{default:l(()=>[t(m,{rowspan:"3"},{default:l(()=>[n("Beta Team")]),_:1}),t(m,null,{default:l(()=>[n("Project 1")]),_:1}),t(m,{textAlign:"right"},{default:l(()=>[n("52")]),_:1}),t(m,{textAlign:"center"},{default:l(()=>[t(A,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(m),t(m)]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Project 2")]),_:1}),t(m,{textAlign:"right"},{default:l(()=>[n("12")]),_:1}),t(m),t(m,{textAlign:"center"},{default:l(()=>[t(A,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(m)]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Project 3")]),_:1}),t(m,{textAlign:"right"},{default:l(()=>[n("21")]),_:1}),t(m,{textAlign:"center"},{default:l(()=>[t(A,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(m),t(m)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("States")]),_:1}),t(S,{title:"Positive / Negative",description:"A cell or row may let a user know whether a value is good or bad",code:e.positiveNegativeCode},{default:l(()=>[t(w,{celled:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:l(()=>[n("Unknown")]),_:1}),t(m,{negative:""},{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,{positive:""},{default:l(()=>[t(m,null,{default:l(()=>[n("Jimmy")]),_:1}),t(m,null,{default:l(()=>[t(A,{name:"checkmark"}),n(" Approved ")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Unknown")]),_:1}),t(m,{positive:""},{default:l(()=>[t(A,{name:"close"}),n(" Requires call ")]),_:1})]),_:1}),t(p,{negative:""},{default:l(()=>[t(m,null,{default:l(()=>[n("Jill")]),_:1}),t(m,null,{default:l(()=>[n("Unknown")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Error",description:"A cell or row may call attention to an error or a negative value",code:e.errorCode},{default:l(()=>[t(w,{celled:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,{error:""},{default:l(()=>[t(m,null,{default:l(()=>[n("Jimmy")]),_:1}),t(m,null,{default:l(()=>[n("Cannot pull data")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,{error:""},{default:l(()=>[t(A,{name:"attention"}),n(" Requires call ")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jill")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Warning",description:"A cell or row may warn a user",code:e.warningCode},{default:l(()=>[t(w,{celled:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:l(()=>[n("Unknown")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,{warning:""},{default:l(()=>[t(m,null,{default:l(()=>[n("Jimmy")]),_:1}),t(m,null,{default:l(()=>[t(A,{name:"attention"}),n(" Requires Action ")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Unknown")]),_:1}),t(m,{warning:""},{default:l(()=>[t(A,{name:"attention"}),n(" Hostile ")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jill")]),_:1}),t(m,null,{default:l(()=>[n("Unknown")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Active",description:"A cell or row can be active or selected by a user",code:e.activeCode},{default:l(()=>[t(w,{celled:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,{active:""},{default:l(()=>[t(m,null,{default:l(()=>[n("Jimmy")]),_:1}),t(m,null,{default:l(()=>[n("Selected")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("Requires call")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,{active:""},{default:l(()=>[n("Jill")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Disabled",description:"A cell can be disabled",code:e.disabledCode},{default:l(()=>[t(w,{celled:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,{disabled:""},{default:l(()=>[t(m,null,{default:l(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jimmy")]),_:1}),t(m,null,{default:l(()=>[n("Selected")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("Requires call")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,{disabled:""},{default:l(()=>[n("Jill")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Colored Cells",description:"A cell can be styled by the central color palette colors",code:e.coloredCellsCode},{default:l(()=>[t(w,{celled:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,{color:"orange"},{default:l(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:l(()=>[n("Unknown")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,{color:"blue"},{default:l(()=>[t(m,null,{default:l(()=>[n("Jimmy")]),_:1}),t(m,null,{default:l(()=>[t(A,{name:"microphone"}),n(" Recording session ")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Unknown")]),_:1}),t(m,{color:"pink"},{default:l(()=>[t(A,{name:"child"}),n(" Baby Party ")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jill")]),_:1}),t(m,null,{default:l(()=>[n("Unknown")]),_:1}),t(m,{color:"green"},{default:l(()=>[n("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Marked",description:"A cell or row can be marked by a colored left or right border",code:e.markedCode},{default:l(()=>[t(w,{celled:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,{marked:"right",color:"blue"},{default:l(()=>[n("No Name Specified")]),_:1}),t(m,{marked:"left",color:"red"},{default:l(()=>[n("Unknown")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,{marked:"left",color:"green"},{default:l(()=>[n("Jimmy")]),_:1}),t(m,null,{default:l(()=>[t(A,{name:"microphone"}),n(" Recording session ")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Unknown")]),_:1}),t(m,{marked:"left",color:"orange"},{default:l(()=>[t(A,{name:"child"}),n(" Baby Party ")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jill")]),_:1}),t(m,null,{default:l(()=>[n("Unknown")]),_:1}),t(m,{marked:"right",color:"purple"},{default:l(()=>[n("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Variations")]),_:1}),t(S,{title:"Single Line",description:"A table can specify that its cell contents should remain on a single line, and not wrap",code:e.singleLineCode},{default:l(()=>[t(w,{"single-line":""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Registration Date")]),_:1}),t(u,null,{default:l(()=>[n("E-mail address")]),_:1}),t(u,null,{default:l(()=>[n("Premium Plan")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John Lilki")]),_:1}),t(m,null,{default:l(()=>[n("September 14, 2013")]),_:1}),t(m,null,{default:l(()=>[n("jhlilk22@yahoo.com")]),_:1}),t(m,null,{default:l(()=>[n("No")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie Harington")]),_:1}),t(m,null,{default:l(()=>[n("January 11, 2014")]),_:1}),t(m,null,{default:l(()=>[n("jamieharingonton@yahoo.com")]),_:1}),t(m,null,{default:l(()=>[n("Yes")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jill Lewis")]),_:1}),t(m,null,{default:l(()=>[n("May 11, 2014")]),_:1}),t(m,null,{default:l(()=>[n("jilsewris22@yahoo.com")]),_:1}),t(m,null,{default:l(()=>[n("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Fixed",description:"A table can use `table-layout: fixed` a special faster form of table rendering that does not resize table cells based on content",code:e.fixedCode},{default:l(()=>[t(w,{fixed:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jimmy")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Denied")]),_:1}),t(m,null,{default:l(()=>[n("Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Stacking",descirption:"A table can specify how it stacks table content responsively",code:e.stackingCode},{default:l(()=>[t(w,{stackable:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,{textAlign:"right"},{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jimmy")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,{textAlign:"right"},{default:l(()=>[n("Requires call")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Denied")]),_:1}),t(m,{textAlign:"right"},{default:l(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Selectable Row",description:"A table can have its rows appear selectable",code:e.selectableRowCode},{default:l(()=>[t(w,{selectable:"",celled:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,{positive:""},{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,{warning:""},{default:l(()=>[t(m,null,{default:l(()=>[n("Jimmy")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("Requires call")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,{negative:""},{default:l(()=>[n("Denied")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Selectable Cell",description:"A table cell can be selectable",code:e.selectableCellCode},{default:l(()=>[t(w,{celled:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,{positive:""},{default:l(()=>[n("Approved")]),_:1}),t(m,{selectable:""},{default:l(()=>[OD]),_:1})]),_:1}),t(p,{warning:""},{default:l(()=>[t(m,null,{default:l(()=>[n("Jimmy")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,{selectable:""},{default:l(()=>[qD]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,{negative:""},{default:l(()=>[n("Denied")]),_:1}),t(m,{selectable:""},{default:l(()=>[GD]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Verical Alignment",description:"A table header, row, or cell can adjust its vertical alignment",code:e.verticalAlignmentCode},{default:l(()=>[t(w,{striped:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,{verticalAlign:"top"},{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,{verticalAlign:"top"},{default:l(()=>[n(" Notes "),jD,n(" 1"),UD,n(" 2"),YD]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,{verticalAlign:"bottom"},{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n(" Notes "),JD,n(" 1"),WD,n(" 2"),KD]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Text Alignment",description:"A table header, row, or cell can adjust its text alignment",code:e.textAlignCode},{default:l(()=>[t(w,{striped:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,{textAlign:"right"},{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,{textAlign:"center"},{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,{textAlign:"right"},{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("Requires call")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,{textAlign:"right"},{default:l(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Striped",description:"A table can stripe alternate rows of content with a darker color to increase contrast",code:e.stripedCode},{default:l(()=>[t(w,{striped:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Date Joined")]),_:1}),t(u,null,{default:l(()=>[n("E-mail")]),_:1}),t(u,null,{default:l(()=>[n("Called")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John Lilki")]),_:1}),t(m,null,{default:l(()=>[n("September 14, 2013")]),_:1}),t(m,null,{default:l(()=>[n("jhlilk22@yahoo.com")]),_:1}),t(m,null,{default:l(()=>[n("No")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie Harington")]),_:1}),t(m,null,{default:l(()=>[n("January 11, 2014")]),_:1}),t(m,null,{default:l(()=>[n("jamieharingonton@yahoo.com")]),_:1}),t(m,null,{default:l(()=>[n("Yes")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jill Lewis")]),_:1}),t(m,null,{default:l(()=>[n("May 11, 2014")]),_:1}),t(m,null,{default:l(()=>[n("jilsewris22@yahoo.com")]),_:1}),t(m,null,{default:l(()=>[n("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Celled",description:"A table may be divided each row into separate cells",code:e.celledCode},{default:l(()=>[t(w,{celled:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("Requires call")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jill")]),_:1}),t(m,null,{default:l(()=>[n("Denied")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1})]),_:1}),t(T,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("3 People")]),_:1}),t(m,null,{default:l(()=>[n("2 Approved")]),_:1}),t(m)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Basic",description:"A table can reduce its complexity to increase readability",code:e.basicCode},{default:l(()=>[k("div",null,[t(w,{basic:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("Requires call")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jill")]),_:1}),t(m,null,{default:l(()=>[n("Denied")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1}),XD,t(w,{basic:"very"},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("Requires call")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jill")]),_:1}),t(m,null,{default:l(()=>[n("Denied")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(S,{title:"Collapsing",description:"A table can be collapsing, taking up only as much space as its rows",code:e.collapsingCode},{default:l(()=>[t(w,{collapsing:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Age")]),_:1}),t(u,null,{default:l(()=>[n("Gender")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("27")]),_:1}),t(m,null,{default:l(()=>[n("Male")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("32")]),_:1}),t(m,null,{default:l(()=>[n("Other")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jill")]),_:1}),t(m,null,{default:l(()=>[n("Denied")]),_:1}),t(m,null,{default:l(()=>[n("22")]),_:1}),t(m,null,{default:l(()=>[n("Other")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1})]),_:1}),t(T,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("3 People")]),_:1}),t(u,null,{default:l(()=>[n("2 Approved")]),_:1}),t(u),t(u),t(u)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Collapsing Cell",description:"A cell can be collapsing so that it only uses as much space as required",code:e.collapsingCellCode},{default:l(()=>[t(w,null,{default:l(()=>[t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,{collapsing:""},{default:l(()=>[t(A,{name:"folder"}),n(" node_modules ")]),_:1}),t(m,null,{default:l(()=>[n("Initial commit")]),_:1}),t(m,null,{default:l(()=>[n("10 hours ago")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,{collapsing:""},{default:l(()=>[t(A,{name:"folder"}),n(" node_modules ")]),_:1}),t(m,null,{default:l(()=>[n("Initial commit")]),_:1}),t(m,null,{default:l(()=>[n("10 hours ago")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,{collapsing:""},{default:l(()=>[t(A,{name:"folder"}),n(" node_modules ")]),_:1}),t(m,null,{default:l(()=>[n("Initial commit")]),_:1}),t(m,null,{default:l(()=>[n("10 hours ago")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Column Count",description:"A table can specify its column count to divide its content evenly",code:e.columnCountCode},{default:l(()=>[t(w,{columns:5},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Age")]),_:1}),t(u,null,{default:l(()=>[n("Gender")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("27")]),_:1}),t(m,null,{default:l(()=>[n("Male")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("32")]),_:1}),t(m,null,{default:l(()=>[n("Other")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jill")]),_:1}),t(m,null,{default:l(()=>[n("Denied")]),_:1}),t(m,null,{default:l(()=>[n("22")]),_:1}),t(m,null,{default:l(()=>[n("Other")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1})]),_:1}),t(T,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("3 People")]),_:1}),t(u,null,{default:l(()=>[n("2 Approved")]),_:1}),t(u),t(u),t(u)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Column Width",description:"Column Width",code:e.columnWidthCode},{default:l(()=>[t(w,null,{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,{width:10},{default:l(()=>[n("Name")]),_:1}),t(u,{width:6},{default:l(()=>[n("Status")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Colored",description:"A table can be given a color to distinguish it from other tables",code:e.coloredCode},{default:l(()=>[t(w,{color:"red"},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Food")]),_:1}),t(u,null,{default:l(()=>[n("Calories")]),_:1}),t(u,null,{default:l(()=>[n("Protein")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Apples")]),_:1}),t(m,null,{default:l(()=>[n("200")]),_:1}),t(m,null,{default:l(()=>[n("0g")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Orange")]),_:1}),t(m,null,{default:l(()=>[n("310")]),_:1}),t(m,null,{default:l(()=>[n("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Inverted",description:"A table's colors can be inverted",code:e.invertedCode},{default:l(()=>[t(w,{inverted:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Food")]),_:1}),t(u,null,{default:l(()=>[n("Calories")]),_:1}),t(u,null,{default:l(()=>[n("Protein")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Apples")]),_:1}),t(m,null,{default:l(()=>[n("200")]),_:1}),t(m,null,{default:l(()=>[n("0g")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Orange")]),_:1}),t(m,null,{default:l(()=>[n("310")]),_:1}),t(m,null,{default:l(()=>[n("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Padded",description:"A table may sometimes need to be more padded for legibility",code:e.paddedCode},{default:l(()=>[k("div",null,[t(w,{padded:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1}),t(w,{padded:"very"},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(S,{title:"Compact",description:"A table may sometimes need to be more compact to make more rows visible at a time",code:e.compactCode},{default:l(()=>[k("div",null,[t(w,{compact:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("Requires call")]),_:1})]),_:1})]),_:1})]),_:1}),t(w,{compact:"very"},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("Requires call")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(S,{title:"Size",description:"A table can also be small or large",code:e.sizeCode},{default:l(()=>[t(w,{size:"small"},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("Requires call")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jill")]),_:1}),t(m,null,{default:l(()=>[n("Denied")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const ZD=He(HD,[["render",QD]]),eL=F({name:"AccordionDoc",components:{DocPageHeader:Rt,DocExample:gt},setup(){return{accordionCode:`<sui-accordion>
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
</sui-segment>`}}}),tL=k("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),iL=k("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),lL=k("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),aL=k("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),nL=k("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),oL=k("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),sL=k("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),rL=k("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),uL=k("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),cL=k("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),dL=k("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),pL=k("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),mL=k("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),fL=k("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),gL=k("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),hL=k("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),_L=k("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),bL=k("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),vL=k("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),SL=k("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1);function yL(e,i,a,o,s,c){const d=B("doc-page-header"),f=B("sui-header"),u=B("sui-accordion-tab"),p=B("sui-accordion"),g=B("doc-example"),m=B("sui-segment"),_=B("sui-container");return y(),ye("div",null,[t(d,{title:"Accordion",sub:"An accordion allows users to toggle the display of sections of content"}),t(_,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(g,{title:"Accordion",description:"A standard accordion",code:e.accordionCode},{default:l(()=>[t(p,null,{default:l(()=>[t(u,{title:"What is a dog?"},{default:l(()=>[tL]),_:1}),t(u,{title:"What kinds of dogs are there?"},{default:l(()=>[iL]),_:1}),t(u,{title:"How do you acquire a dog?"},{default:l(()=>[lL,aL]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Styled",description:"A styled accordion adds basic formatting",code:e.styledCode},{default:l(()=>[t(p,{styled:""},{default:l(()=>[t(u,{title:"What is a dog?"},{default:l(()=>[nL]),_:1}),t(u,{title:"What kinds of dogs are there?"},{default:l(()=>[oL]),_:1}),t(u,{title:"How do you acquire a dog?"},{default:l(()=>[sL,rL]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Variations")]),_:1}),t(g,{title:"Fluid",description:"An accordion can take up the width of its container",code:e.fluidCode},{default:l(()=>[t(p,{fluid:"",styled:""},{default:l(()=>[t(u,{title:"What is a dog?"},{default:l(()=>[uL]),_:1}),t(u,{title:"What kinds of dogs are there?"},{default:l(()=>[cL]),_:1}),t(u,{title:"How do you acquire a dog?"},{default:l(()=>[dL,pL]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Inverted",description:"An accordion can be formatted to appear on dark backgrounds",code:e.invertedCode},{default:l(()=>[t(m,{inverted:""},{default:l(()=>[t(p,{inverted:""},{default:l(()=>[t(u,{title:"What is a dog?"},{default:l(()=>[mL]),_:1}),t(u,{title:"What kinds of dogs are there?"},{default:l(()=>[fL]),_:1}),t(u,{title:"How do you acquire a dog?"},{default:l(()=>[gL,hL]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Usage")]),_:1}),t(g,{title:"Multiple",description:"An accordion can have multiple panels open at the same time",code:e.multipleCode},{default:l(()=>[t(p,{multiple:""},{default:l(()=>[t(u,{title:"What is a dog?"},{default:l(()=>[_L]),_:1}),t(u,{title:"What kinds of dogs are there?"},{default:l(()=>[bL]),_:1}),t(u,{title:"How do you acquire a dog?"},{default:l(()=>[vL,SL]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const wL=He(eL,[["render",yL]]),CL=F({name:"CalendarDoc",components:{DocPageHeader:Rt,DocExample:gt},setup(){return{calendar1:j(null),calendarCode:'<sui-calendar v-model="calendar1" placeholder="Date/Time" />'}}});function AL(e,i,a,o,s,c){const d=B("doc-page-header"),f=B("sui-header"),u=B("sui-calendar"),p=B("doc-example"),g=B("sui-container");return y(),ye("div",null,[t(d,{title:"Calendar",sub:"A calendar allows users to select any date or time"}),t(g,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(p,{title:"Calendar",description:"A standard calendar",code:e.calendarCode},{default:l(()=>[t(u,{modelValue:e.calendar1,"onUpdate:modelValue":i[0]||(i[0]=m=>e.calendar1=m),placeholder:"Date/Time"},null,8,["modelValue"])]),_:1},8,["code"])]),_:1})])}const xL=He(CL,[["render",AL]]),kL=F({name:"PropertyListTable",props:{properties:Array}});function BL(e,i,a,o,s,c){const d=B("sui-table-header-cell"),f=B("sui-table-row"),u=B("sui-table-header"),p=B("sui-table-cell"),g=B("sui-table-body"),m=B("sui-table");return y(),x(m,{celled:""},{default:l(()=>[t(u,null,{default:l(()=>[t(f,null,{default:l(()=>[t(d,null,{default:l(()=>[n("Name")]),_:1}),t(d,null,{default:l(()=>[n("Type")]),_:1}),t(d,null,{default:l(()=>[n("Default")]),_:1}),t(d,null,{default:l(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(g,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.properties,_=>(y(),x(f,{key:_.name},{default:l(()=>[t(p,null,{default:l(()=>[n($e(_.name),1)]),_:2},1024),t(p,null,{default:l(()=>[n($e(_.type),1)]),_:2},1024),t(p,null,{default:l(()=>[n($e(_.default),1)]),_:2},1024),t(p,null,{default:l(()=>[n($e(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const xn=He(kL,[["render",BL]]),$L=F({name:"CheckboxDoc",components:{DocPageHeader:Rt,DocExample:gt,PropertyListTable:xn},setup(){const e=j(!1),i='<sui-checkbox label="Make my profile visible" v-model="checked" />',a=j([]),o=`<sui-checkbox label="Apple" value="Apple" v-model="selected"  />
<sui-checkbox label="Banana" value="Banana" v-model="selected"  />
<sui-checkbox label="Chocolate" value="Chocolate" v-model="selected"  />`,s=j(!1),c='<sui-checkbox toggle v-model="toggle" />',d=j(!1);return{checked:e,checkboxCode:i,selected:a,multipleCode:o,toggle:s,toggleCode:c,slider:d,sliderCode:'<sui-checkbox slider v-model="slider" />',properties:[{name:"label",type:"string",default:"null",description:"Label of the checkbox."},{name:"modelValue",type:"any",default:"null",description:"Value binding of the checkbox."},{name:"value",type:"any",default:"null",description:"Value of the checkbox."}],events:[{name:"change",description:"Callback to invoke when checkbox value is changed."},{name:"click",description:"Callback to invoke when checkbox is clicked."}]}}}),TL={class:"ui form"},DL={class:"grouped fields"},LL={class:"field"},IL={class:"field"},EL={class:"field"};function RL(e,i,a,o,s,c){const d=B("doc-page-header"),f=B("sui-header"),u=B("sui-checkbox"),p=B("doc-example"),g=B("property-list-table"),m=B("sui-table-header-cell"),_=B("sui-table-row"),w=B("sui-table-header"),S=B("sui-table-cell"),A=B("sui-table-body"),T=B("sui-table"),L=B("sui-container");return y(),ye("div",null,[t(d,{title:"Checkbox",sub:"A checkbox allows a user to select a value from a small set of options, often binary"}),t(L,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(p,{title:"Checkbox",description:"A standard checkbox",code:e.checkboxCode},{default:l(()=>[t(u,{label:"Make my profile visible",modelValue:e.checked,"onUpdate:modelValue":i[0]||(i[0]=h=>e.checked=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(p,{title:"Multiple",description:"Multiple mode is enabled by default, v-model property refers to an array to bind the selected values",code:e.multipleCode},{default:l(()=>[k("div",TL,[k("div",DL,[k("div",LL,[t(u,{label:"Apple",value:"Apple",modelValue:e.selected,"onUpdate:modelValue":i[1]||(i[1]=h=>e.selected=h)},null,8,["modelValue"])]),k("div",IL,[t(u,{label:"Banana",value:"Banana",modelValue:e.selected,"onUpdate:modelValue":i[2]||(i[2]=h=>e.selected=h)},null,8,["modelValue"])]),k("div",EL,[t(u,{label:"Chocolate",value:"Chocolate",modelValue:e.selected,"onUpdate:modelValue":i[3]||(i[3]=h=>e.selected=h)},null,8,["modelValue"])])])]),n(" selected : "+$e(e.selected),1)]),_:1},8,["code"]),t(p,{title:"Toggle",description:"A checkbox can toggle",code:e.toggleCode},{default:l(()=>[t(u,{toggle:"",modelValue:e.toggle,"onUpdate:modelValue":i[4]||(i[4]=h=>e.toggle=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(p,{title:"Slider",description:"A checkbox can look like a slider",code:e.sliderCode},{default:l(()=>[t(u,{slider:"",modelValue:e.slider,"onUpdate:modelValue":i[5]||(i[5]=h=>e.slider=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Properties")]),_:1}),t(g,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Events")]),_:1}),t(T,{celled:""},{default:l(()=>[t(w,null,{default:l(()=>[t(_,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Name")]),_:1}),t(m,null,{default:l(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(A,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.events,h=>(y(),x(_,{key:h.name},{default:l(()=>[t(S,null,{default:l(()=>[n($e(h.name),1)]),_:2},1024),t(S,null,{default:l(()=>[n($e(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const PL=He($L,[["render",RL]]),zL=F({name:"DimmerDoc",components:{DocPageHeader:Rt,DocExample:gt},setup(){const e=`<sui-dimmer-dimmable>
  <sui-header as="h3">Overlayable Section</sui-header>
  <sui-image-group size="small">
    <sui-image src="/images/wireframe/image.png" />
    <sui-image src="/images/wireframe/image.png" />
    <sui-image src="/images/wireframe/image.png" />
  </sui-image-group>
  <sui-image size="medium" src="/images/wireframe/media-paragraph.png" />
  
  <sui-dimmer active />
</sui-dimmer-dimmable>`,i=`<sui-dimmer-dimmable>
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
</sui-dimmer-dimmable>`,a=j(!1);return{dimmerCode:e,contentDimmerCode:i,active:a,pageDimmerCode:`<div>
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
</div>`}}});function FL(e,i,a,o,s,c){const d=B("doc-page-header"),f=B("sui-header"),u=B("sui-image"),p=B("sui-image-group"),g=B("sui-dimmer"),m=B("sui-dimmer-dimmable"),_=B("doc-example"),w=B("sui-icon"),S=B("sui-button"),A=B("sui-header-subheader"),T=B("sui-container");return y(),ye("div",null,[t(d,{title:"Dimmer",sub:"A dimmer hides distractions to focus attention on particular content"}),t(T,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(_,{title:"Dimmer",description:"A simple dimmer displays no content",code:e.dimmerCode},{default:l(()=>[t(m,null,{default:l(()=>[t(f,{as:"h3"},{default:l(()=>[n("Overlayable Section")]),_:1}),t(p,{size:"small"},{default:l(()=>[t(u,{src:Te}),t(u,{src:Te}),t(u,{src:Te})]),_:1}),t(u,{size:"medium",src:ei}),t(g,{active:""})]),_:1})]),_:1},8,["code"]),t(_,{title:"Content Dimmer",description:"A dimmer can display content",code:e.contentDimmerCode},{default:l(()=>[t(m,null,{default:l(()=>[t(f,{as:"h3"},{default:l(()=>[n("Overlayable Section")]),_:1}),t(p,{size:"small"},{default:l(()=>[t(u,{src:Te}),t(u,{src:Te}),t(u,{src:Te})]),_:1}),t(u,{size:"medium",src:ei}),t(g,{active:""},{default:l(()=>[t(f,{as:"h2",icon:"",inverted:""},{default:l(()=>[t(w,{name:"heart"}),n(" Dimmed Message! ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Page Dimmer",description:"A dimmer can be formatted to be fixed to the page",code:e.pageDimmerCode},{default:l(()=>[k("div",null,[t(S,{labeled:"",icon:"",onClick:i[0]||(i[0]=L=>e.active=!0)},{default:l(()=>[t(w,{name:"plus"}),n(" Show ")]),_:1}),t(g,{active:e.active,page:"",onClick:i[1]||(i[1]=L=>e.active=!1)},{default:l(()=>[t(f,{as:"h2",icon:"",inverted:""},{default:l(()=>[t(w,{name:"heart"}),n(" Dimmed Message! "),t(A,null,{default:l(()=>[n("Dimmer sub-header")]),_:1})]),_:1})]),_:1},8,["active"])])]),_:1},8,["code"])]),_:1})])}const VL=He(zL,[["render",FL]]),ML=F({name:"DropdownDoc",components:{DocPageHeader:Rt,DocExample:gt},setup(){const e=`<sui-dropdown text="File">
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
</sui-dropdown>`,i=j(null),a=`<sui-dropdown
  selection
  placeholder="Pet"
  v-model="selected1"
  :options="['Cat', 'Dog', 'Bird', 'Rabbit', 'Squirrel', 'Horse']"
/>`,o=j(null),s=[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"},{value:"ad",flag:"ad",text:"Andorra"},{value:"ao",flag:"ao",text:"Angola"},{value:"ai",flag:"ai",text:"Anguilla"},{value:"ag",flag:"ag",text:"Antigua"},{value:"ar",flag:"ar",text:"Argentina"},{value:"am",flag:"am",text:"Armenia"},{value:"aw",flag:"aw",text:"Aruba"},{value:"au",flag:"au",text:"Australia"},{value:"at",flag:"at",text:"Austria"},{value:"az",flag:"az",text:"Azerbaijan"},{value:"bs",flag:"bs",text:"Bahamas"},{value:"bh",flag:"bh",text:"Bahrain"},{value:"bd",flag:"bd",text:"Bangladesh"},{value:"bb",flag:"bb",text:"Barbados"},{value:"by",flag:"by",text:"Belarus"},{value:"be",flag:"be",text:"Belgium"},{value:"bz",flag:"bz",text:"Belize"},{value:"bj",flag:"bj",text:"Benin"}],c=`<sui-dropdown
  search
  selection
  fluid
  v-model="selected2"
  :options="searchSelectionOptions"
  placeholder="Select Country"
/>`,d=j(null),f=["Arabic","Chinese","Danish","Dutch","English","French","German","Greek","Hungarian","Italian","Japanese","Korean","Lithuanian","Persian","Polish","Portuguese","Russian","Spanish","Swedish","Turkish","Vietnamese"],u=`<sui-dropdown
  clearable
  selection
  v-model="selected3"
  :options="clearableSelectionOptions"
  placeholder="Select Language"
/>`,p=j(null),g=`<sui-dropdown
  selection
  multiple
  fluid
  v-model="selected4"
  placeholder="Skills"
  :options="['Angular', 'CSS', 'Ember', 'HTML', 'Javascript', 'NodeJS']"
/>`,m=j(null),_=`<sui-dropdown
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
/>`,w=j(null),S=`<sui-dropdown
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
/>`,A=j(null),T=`<sui-dropdown
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
/>`,L=j({text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}});return{dropdownCode:e,selected1:i,selectionCode:a,selected2:o,searchSelectionOptions:s,searchSelectionCode:c,selected3:d,clearableSelectionOptions:f,clearableSelectionCode:u,selected4:p,multipleCode:g,selected5:m,multipleCode2:_,selected6:w,searchDropdownCode:S,selected7:A,searchInMenuCode:T,selected8:L,inlineCode:`<span>
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
</sui-button-group>`}}});function NL(e,i,a,o,s,c){const d=B("doc-page-header"),f=B("sui-header"),u=B("sui-dropdown-item"),p=B("sui-divider"),g=B("sui-dropdown-menu"),m=B("sui-dropdown"),_=B("doc-example"),w=B("sui-button"),S=B("sui-button-group"),A=B("sui-container");return y(),ye("div",null,[t(d,{title:"Dropdown",sub:"A dropdown allows a user to select a value from a series of options"}),t(A,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(_,{title:"Dropdown",description:"A dropdown",code:e.dropdownCode},{default:l(()=>[t(m,{text:"File"},{default:l(()=>[t(g,null,{default:l(()=>[t(u,{text:"New"}),t(u,{text:"Open...",description:"ctrl + o"}),t(u,{text:"Save as...",description:"ctrl + s"}),t(u,{text:"Rename",description:"ctrl + r"}),t(u,{text:"Make a copy"}),t(u,{icon:"folder",text:"Move to folder"}),t(u,{icon:"trash",text:"Move to trash"}),t(p),t(u,{text:"Download As..."}),t(u,{text:"Publish To Web"}),t(u,{text:"E-mail Collaborators"})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Selection",description:"A dropdown can be used to select between choices in a form",code:e.selectionCode},{default:l(()=>[t(m,{selection:"",placeholder:"Pet",modelValue:e.selected1,"onUpdate:modelValue":i[0]||(i[0]=T=>e.selected1=T),options:["Cat","Dog","Bird","Rabbit","Squirrel","Horse"]},null,8,["modelValue"])]),_:1},8,["code"]),t(_,{title:"Search Selection",description:"A selection dropdown can allow a user to search through a large list of choices",code:e.searchSelectionCode},{default:l(()=>[t(m,{search:"",selection:"",fluid:"",modelValue:e.selected2,"onUpdate:modelValue":i[1]||(i[1]=T=>e.selected2=T),options:e.searchSelectionOptions,placeholder:"Select Country"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(_,{title:"Clearable Selection",description:"A clearable selection dropdown can allow a user to cancel to cancel a previous selection",code:e.clearableSelectionCode},{default:l(()=>[t(m,{clearable:"",selection:"",modelValue:e.selected3,"onUpdate:modelValue":i[2]||(i[2]=T=>e.selected3=T),options:e.clearableSelectionOptions,placeholder:"Select Language"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(_,{title:"Multiple Selection",description:"A selection dropdown can allow multiple selections",code:e.multipleCode},{default:l(()=>[t(m,{selection:"",multiple:"",fluid:"",modelValue:e.selected4,"onUpdate:modelValue":i[3]||(i[3]=T=>e.selected4=T),placeholder:"Skills",options:["Angular","CSS","Ember","HTML","Javascript","NodeJS"]},null,8,["modelValue"])]),_:1},8,["code"]),t(_,{code:e.multipleCode2},{default:l(()=>[t(m,{selection:"",multiple:"",fluid:"",search:"",modelValue:e.selected5,"onUpdate:modelValue":i[4]||(i[4]=T=>e.selected5=T),placeholder:"Skills",options:[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"}]},null,8,["modelValue"])]),_:1},8,["code"]),t(_,{title:"Search Dropdown",description:"A dropdown can be searchable",code:e.searchDropdownCode},{default:l(()=>[t(m,{button:"",floating:"",labeled:"",search:"",icon:"world",modelValue:e.selected6,"onUpdate:modelValue":i[5]||(i[5]=T=>e.selected6=T),options:[{text:"Arabic",value:"Arabic"},{text:"Chinese",value:"Chinese"},{text:"Danish",value:"Danish"},{text:"Dutch",value:"Dutch"},{text:"English",value:"English"},{text:"French",value:"French"},{text:"German",value:"German"},{text:"Greek",value:"Greek"},{text:"Hungarian",value:"Hungarian"},{text:"Italian",value:"Italian"},{text:"Japanese",value:"Japanese"},{text:"Korean",value:"Korean"},{text:"Lithuanian",value:"Lithuanian"},{text:"Persian",value:"Persian"},{text:"Polish",value:"Polish"},{text:"Portuguese",value:"Portuguese"},{text:"Russian",value:"Russian"},{text:"Spanish",value:"Spanish"},{text:"Swedish",value:"Swedish"},{text:"Turkish",value:"Turkish"},{text:"Vietnamese",value:"Vietnamese"}],text:"Select Language"},null,8,["modelValue"])]),_:1},8,["code"]),t(_,{title:"Search In-Menu",description:"A dropdown can include a search prompt inside its menu",code:e.searchInMenuCode},{default:l(()=>[t(m,{text:"Filter Posts",icon:"filter",floating:"",labeled:"",button:"",searchInMenu:"",modelValue:e.selected7,"onUpdate:modelValue":i[6]||(i[6]=T=>e.selected7=T),options:[{text:"Important",value:"Important",label:{color:"red",empty:!0,circular:!0}},{text:"Announcement",value:"Announcement",label:{color:"blue",empty:!0,circular:!0}},{text:"Cannot Fix",value:"Cannot Fix",label:{color:"black",empty:!0,circular:!0}},{text:"News",value:"News",label:{color:"purple",empty:!0,circular:!0}},{text:"Enhancement",value:"Enhancement",label:{color:"orange",empty:!0,circular:!0}},{text:"Change Declined",value:"Change Declined",label:{empty:!0,circular:!0}},{text:"Off Topic",value:"Off Topic",label:{color:"yellow",empty:!0,circular:!0}},{text:"Interesting",value:"Interesting",label:{color:"pink",empty:!0,circular:!0}},{text:"Discussion",value:"Discussion",label:{color:"green",empty:!0,circular:!0}}]},null,8,["modelValue"])]),_:1},8,["code"]),t(_,{title:"Inline",description:"A dropdown can be formatted to appear inline in other content",code:e.inlineCode},{default:l(()=>[k("span",null,[n(" Show me posts by "),t(m,{inline:"",modelValue:e.selected8,"onUpdate:modelValue":i[7]||(i[7]=T=>e.selected8=T),options:[{text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}},{text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/images/avatar/small/elliot.jpg"}},{text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/images/avatar/small/stevie.jpg"}},{text:"Christian",value:"Christian",image:{avatar:!0,src:"/images/avatar/small/christian.jpg"}}]},null,8,["modelValue","options"])])]),_:1},8,["code"]),t(_,{title:"Pointing",description:"A dropdown can be formatted so that its menu is pointing",code:e.pointingCode},{default:l(()=>[t(m,{icon:"wrench",button:"",pointing:"top left"},{default:l(()=>[t(g,null,{default:l(()=>[t(u,{text:"New"}),t(u,{text:"Save As"}),t(u,{text:"Edit"})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Floating",description:"A dropdown menu can appear to be floating below an element",code:e.floatingCode},{default:l(()=>[t(S,{color:"teal"},{default:l(()=>[t(w,null,{default:l(()=>[n("Save")]),_:1}),t(m,{floating:"",button:"",icon:"dropdown"},{default:l(()=>[t(g,null,{default:l(()=>[t(u,{text:"Edit Post",icon:"edit"}),t(u,{text:"Remove Post",icon:"delete"}),t(u,{text:"Hide Post",icon:"hide"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const HL=He(ML,[["render",NL]]),OL=F({name:"EmbedDoc",components:{DocPageHeader:Rt,DocExample:gt},setup(){return{youtubeCode:`<sui-embed
  id="O6Xo21L0ybE"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`,aspectRatioCode:`<sui-embed
  aspectRatio="4:3"
  id="HTZudKi36bo"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`}}});function qL(e,i,a,o,s,c){const d=B("doc-page-header"),f=B("sui-header"),u=B("sui-embed"),p=B("doc-example"),g=B("sui-container");return y(),ye("div",null,[t(d,{title:"Embed",sub:"An embed displays content from other websites like YouTube videos or Google Maps"}),t(g,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(p,{title:"YouTube",description:"An embed can be used to display YouTube Content",code:e.youtubeCode},{default:l(()=>[t(u,{id:"O6Xo21L0ybE",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Variations")]),_:1}),t(p,{title:"Aspect Ratio",description:"An embed can specify an alternative aspect ratio",code:e.aspectRatioCode},{default:l(()=>[t(u,{aspectRatio:"4:3",id:"HTZudKi36bo",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"])]),_:1})])}const GL=He(OL,[["render",qL]]),jL=k("p",null," We've found the following gravatar image associated with your e-mail address. ",-1),UL=k("p",null,"Is it okay to use this photo?",-1),YL=`<template>
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
<\/script>`,JL={__name:"ModalDoc",setup(e){const i=j(!1);return(a,o)=>(y(),x(I,{label:"Modal",code:YL},{description:l(()=>[n(" A standard modal ")]),example:l(()=>[t(r(P),{onClick:o[0]||(o[0]=s=>i.value=!0)},{default:l(()=>[n("Show Modal")]),_:1}),t(r(_s),{modelValue:i.value,"onUpdate:modelValue":o[2]||(o[2]=s=>i.value=s)},{default:l(()=>[t(r(Ss),null,{default:l(()=>[n("Select a Photo")]),_:1}),t(r(vs),{image:""},{default:l(()=>[t(r(oe),{wrapped:"",size:"medium",src:"/vue-fomantic-ui/images/avatar/large/rachel.png"}),t(r(fd),null,{default:l(()=>[t(r(fe),null,{default:l(()=>[n("Default Profile Image")]),_:1}),jL,UL]),_:1})]),_:1}),t(r(bs),null,{default:l(()=>[t(r(P),{positive:"",onClick:o[1]||(o[1]=s=>i.value=!1)},{default:l(()=>[n("OK")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},WL=k("p",null," Your inbox is getting full, would you like us to enable automatic archiving of old messages? ",-1),KL=`<template>
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
<\/script>`,XL={__name:"BasicDoc",setup(e){const i=j(!1);return(a,o)=>(y(),x(I,{label:"Basic",code:KL},{description:l(()=>[n(" A modal can reduce its complexity ")]),example:l(()=>[t(r(P),{onClick:o[0]||(o[0]=s=>i.value=!0)},{default:l(()=>[n("Basic Modal")]),_:1}),t(r(_s),{basic:"",modelValue:i.value,"onUpdate:modelValue":o[2]||(o[2]=s=>i.value=s)},{default:l(()=>[t(r(Ss),{icon:""},{default:l(()=>[t(r(J),{name:"archive"}),n(" Archive Old Messages")]),_:1}),t(r(vs),null,{default:l(()=>[WL]),_:1}),t(r(bs),null,{default:l(()=>[t(r(P),{basic:"",color:"red",inverted:"",icon:"remove",content:"No",onClick:o[1]||(o[1]=s=>i.value=!1)}),t(r(P),{basic:"",color:"green",icon:"checkmark",content:"Yes"})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},QL={__name:"Modal",setup(e){const i=[{id:"modal",label:"Modal",category:"Types",component:JL},{id:"basic",label:"Basic",category:"Types",component:XL}];return(a,o)=>(y(),x(ot,{title:"Modal",description:"A modal displays content that temporarily blocks interactions with the main view of a site","component-docs":i}))}},ZL="/vue-fomantic-ui/images/movies/totoro-horizontal.jpg",eI=F({name:"PopupDoc",components:{DocPageHeader:Rt,DocExample:gt},setup(){const e=j(null),i=`<sui-button icon ref="trigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup :trigger="trigger">
  Add users to your feed
</sui-popup>`,a=j(null),o=j(null),s=j(null),c=`<sui-image avatar src="/images/avatar/small/elliot.jpg" ref="titledTrigger1" />
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
/>`,d=j(null),f=`<sui-card ref="triggerTriger">
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
</sui-popup>`,u=j(null),p=`<sui-button icon ref="basicTrigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup
  :trigger="basicTrigger"
  basic
  content="The default theme's basic popup removes the pointing arrow."
/>`,g=j(null),m=j(null),_=j(null),w=`<sui-icon name="heart" circular ref="wideTrigger1" />
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
</sui-popup>`,S=j(null),A=j(null),T=j(null),L=j(null),h=j(null),b=j(null),C=j(null),$=j(null),E=`<sui-button ref="positionTrigger1">Top Left</sui-button>
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
<sui-popup :trigger="positionTrigger8" position="left center" content="I am positioned to the left center" />`,V=j(null),N=`<sui-button ref="flowingTrigger">Show Flowing Popup</sui-button>
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
</sui-popup>`,z=j(null),G=j(null),X=j(null),Y=j(null),pe=j(null),xe=`<sui-icon name="heart" circular link ref="sizeTrigger1" />
<sui-icon name="heart" circular link ref="sizeTrigger2" />
<sui-icon name="heart" circular link ref="sizeTrigger3" />
<sui-icon name="heart" circular link ref="sizeTrigger4" />
<sui-icon name="heart" circular link ref="sizeTrigger5" />

<sui-popup size="mini" content="Hello. This is a mini popup" :trigger="sizeTrigger1" />
<sui-popup size="tiny" content="Hello. This is a tiny popup" :trigger="sizeTrigger2" />
<sui-popup size="small" content="Hello. This is a small popup" :trigger="sizeTrigger3" />
<sui-popup size="large" content="Hello. This is a large popup" :trigger="sizeTrigger4" />
<sui-popup size="huge" content="Hello. This is a huge popup" :trigger="sizeTrigger5" />`,U=j(null),W=j(null);return{popupTrigger:e,popupCode:i,titledTrigger1:a,titledTrigger2:o,titledTrigger3:s,titledCode:c,triggerTriger:d,triggerCode:f,basicTrigger:u,basicCode:p,wideTrigger1:g,wideTrigger2:m,wideTrigger3:_,wideCode:w,positionTrigger1:S,positionTrigger2:A,positionTrigger3:T,positionTrigger4:L,positionTrigger5:h,positionTrigger6:b,positionTrigger7:C,positionTrigger8:$,positionCode:E,flowingTrigger:V,flowingCode:N,sizeTrigger1:z,sizeTrigger2:G,sizeTrigger3:X,sizeTrigger4:Y,sizeTrigger5:pe,sizeCode:xe,invertedTrigger1:U,invertedTrigger2:W,invertedCode:`<sui-icon name="heart" circular ref="invertedTrigger1" />
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
/>`}}}),tI=k("p",null,[k("b",null,"2"),n(" projects, $10 a month ")],-1),iI=k("p",null,[k("b",null,"5"),n(" projects, $20 a month ")],-1),lI=k("p",null,[k("b",null,"8"),n(" projects, $25 a month ")],-1);function aI(e,i,a,o,s,c){const d=B("doc-page-header"),f=B("sui-header"),u=B("sui-icon"),p=B("sui-button"),g=B("sui-popup"),m=B("doc-example"),_=B("sui-image"),w=B("sui-card-header"),S=B("sui-card-description"),A=B("sui-card-content"),T=B("sui-card"),L=B("sui-rating"),h=B("sui-divider"),b=B("sui-grid-column"),C=B("sui-grid"),$=B("sui-container");return y(),ye("div",null,[t(d,{title:"Popup",sub:"A popup displays additional information on top of a page"}),t($,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(m,{title:"Popup",description:"An element can specify popup content to appear",code:e.popupCode},{default:l(()=>[t(p,{icon:"",ref:"popupTrigger"},{default:l(()=>[t(u,{name:"add"})]),_:1},512),t(g,{trigger:e.popupTrigger},{default:l(()=>[n(" Add users to your feed ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Titled",description:"An element can specify popup content with a title",code:e.titledCode},{default:l(()=>[t(_,{avatar:"",src:da,ref:"titledTrigger1"},null,512),t(_,{avatar:"",src:Lo,ref:"titledTrigger2"},null,512),t(_,{avatar:"",src:Vd,ref:"titledTrigger3"},null,512),t(g,{trigger:e.titledTrigger1,header:"Elliot Fu",content:"Elliot has been a member since July 2012"},null,8,["trigger"]),t(g,{trigger:e.titledTrigger2,header:"Stevie Feliciano",content:"Stevie has been a member since August 2013"},null,8,["trigger"]),t(g,{trigger:e.titledTrigger3,header:"Matt",content:"Matt has been a member since July 2014"},null,8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Trigger",description:"A trigger can be complex element",code:e.triggerCode},{default:l(()=>[t(T,{ref:"triggerTriger"},{default:l(()=>[t(_,{src:ZL}),t(A,null,{default:l(()=>[t(w,null,{default:l(()=>[n("My Neighbor Totoro")]),_:1}),t(S,null,{default:l(()=>[n(" Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits. ")]),_:1})]),_:1})]),_:1},512),t(g,{trigger:e.triggerTriger,header:"User Rating"},{default:l(()=>[t(L,{icon:"star",defaultRating:3,maxRating:4})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Variations")]),_:1}),t(m,{title:"Basic",description:"A popup can provide more basic formatting",code:e.basicCode},{default:l(()=>[t(p,{icon:"",ref:"basicTrigger"},{default:l(()=>[t(u,{name:"add"})]),_:1},512),t(g,{trigger:e.basicTrigger,basic:"",content:"The default theme's basic popup removes the pointing arrow."},null,8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Position",description:"A popup can be position around its trigger",code:e.positionCode},{default:l(()=>[t(p,{ref:"positionTrigger1"},{default:l(()=>[n("Top Left")]),_:1},512),t(p,{ref:"positionTrigger2"},{default:l(()=>[n("Top Center")]),_:1},512),t(p,{ref:"positionTrigger3"},{default:l(()=>[n("Top Right")]),_:1},512),t(h),t(p,{ref:"positionTrigger4"},{default:l(()=>[n("Bottom Left")]),_:1},512),t(p,{ref:"positionTrigger5"},{default:l(()=>[n("Bottom Center")]),_:1},512),t(p,{ref:"positionTrigger6"},{default:l(()=>[n("Bottom Right")]),_:1},512),t(h),t(p,{ref:"positionTrigger7"},{default:l(()=>[n("Right Center")]),_:1},512),t(p,{ref:"positionTrigger8"},{default:l(()=>[n("Left Center")]),_:1},512),t(g,{trigger:e.positionTrigger1,position:"top left",content:"I am positioned to the top left"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger2,position:"top center",content:"I am positioned to the top center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger3,position:"top right",content:"I am positioned to the top right"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger4,position:"bottom left",content:"I am positioned to the bottom left"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger5,position:"bottom center",content:"I am positioned to the bottom center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger6,position:"bottom right",content:"I am positioned to the bottom right"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger7,position:"right center",content:"I am positioned to the right center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger8,position:"left center",content:"I am positioned to the left center"},null,8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Flowing",description:"A popup can have no maximum width and continue to flow to fit its content",code:e.flowingCode},{default:l(()=>[t(p,{ref:"flowingTrigger"},{default:l(()=>[n("Show Flowing Popup")]),_:1},512),t(g,{trigger:e.flowingTrigger,flowing:""},{default:l(()=>[t(C,{centered:"",divided:"",columns:3},{default:l(()=>[t(b,{textAlign:"center"},{default:l(()=>[t(f,{as:"h4"},{default:l(()=>[n("Basic Plan")]),_:1}),tI,t(p,null,{default:l(()=>[n("Choose")]),_:1})]),_:1}),t(b,{textAlign:"center"},{default:l(()=>[t(f,{as:"h4"},{default:l(()=>[n("Business Plan")]),_:1}),iI,t(p,null,{default:l(()=>[n("Choose")]),_:1})]),_:1}),t(b,{textAlign:"center"},{default:l(()=>[t(f,{as:"h4"},{default:l(()=>[n("Premium Plan")]),_:1}),lI,t(p,null,{default:l(()=>[n("Choose")]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Size",description:"A popup can vary in size",code:e.sizeCode},{default:l(()=>[t(u,{name:"heart",circular:"",link:"",ref:"sizeTrigger1"},null,512),t(u,{name:"heart",circular:"",link:"",ref:"sizeTrigger2"},null,512),t(u,{name:"heart",circular:"",link:"",ref:"sizeTrigger3"},null,512),t(u,{name:"heart",circular:"",link:"",ref:"sizeTrigger4"},null,512),t(u,{name:"heart",circular:"",link:"",ref:"sizeTrigger5"},null,512),t(g,{size:"mini",content:"Hello. This is a mini popup",trigger:e.sizeTrigger1},null,8,["trigger"]),t(g,{size:"tiny",content:"Hello. This is a tiny popup",trigger:e.sizeTrigger2},null,8,["trigger"]),t(g,{size:"small",content:"Hello. This is a small popup",trigger:e.sizeTrigger3},null,8,["trigger"]),t(g,{size:"large",content:"Hello. This is a large popup",trigger:e.sizeTrigger4},null,8,["trigger"]),t(g,{size:"huge",content:"Hello. This is a huge popup",trigger:e.sizeTrigger5},null,8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Wide",description:"A popup can be extra wide to allow for longer content",code:e.wideCode},{default:l(()=>[t(u,{name:"heart",circular:"",ref:"wideTrigger1"},null,512),t(u,{name:"heart",circular:"",ref:"wideTrigger2"},null,512),t(u,{name:"heart",circular:"",ref:"wideTrigger3"},null,512),t(g,{trigger:e.wideTrigger1},{default:l(()=>[n(" Hello. This is a regular pop-up which does not allow for lots of content. You cannot fit a lot of words here as the paragraphs will be pretty narrow. ")]),_:1},8,["trigger"]),t(g,{trigger:e.wideTrigger2,wide:""},{default:l(()=>[n(" Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"]),t(g,{trigger:e.wideTrigger3,wide:"very"},{default:l(()=>[n(" Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Inverted",description:"A popup can have its colors inverted",code:e.invertedCode},{default:l(()=>[t(u,{name:"heart",circular:"",ref:"invertedTrigger1"},null,512),t(p,{icon:"",ref:"invertedTrigger2"},{default:l(()=>[t(u,{name:"add"})]),_:1},512),t(g,{trigger:e.invertedTrigger1,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"]),t(g,{trigger:e.invertedTrigger2,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"])]),_:1},8,["code"])]),_:1})])}const nI=He(eI,[["render",aI]]),oI=F({name:"RatingDoc",components:{DocPageHeader:Rt,DocExample:gt,PropertyListTable:xn},setup(){return{ratingCode:'<sui-rating v-model="value" />',iconCode:`<sui-rating :defaultRating="2" :maxRating="4" color="yellow" />
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
<sui-rating size="massive" :defaultRating="3" :maxRating="4" color="yellow" />`,properties:[{name:"color",type:"string",default:"",description:"A rating can have different colors"},{name:"defaultRating",type:"number",default:0,description:"The initial value of rating."},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"icon",type:"string",default:"star",description:"A rating can use a set of specified icons."},{name:"maxRating",type:"number",default:1,description:"The total number of icons."},{name:"modelValue",type:"number",default:"null",description:"A value of rating."},{name:"size",type:"string",default:"",description:"A rating can have different sizes."}],events:[{name:"change",description:"Callback to invoke on value change."}]}}}),sI=k("br",null,null,-1),rI=k("br",null,null,-1),uI=k("br",null,null,-1),cI=k("br",null,null,-1),dI=k("br",null,null,-1),pI=k("br",null,null,-1),mI=k("br",null,null,-1),fI=k("br",null,null,-1),gI=k("br",null,null,-1),hI=k("br",null,null,-1),_I=k("br",null,null,-1),bI=k("br",null,null,-1),vI=k("br",null,null,-1),SI=k("br",null,null,-1),yI=k("br",null,null,-1),wI=k("br",null,null,-1),CI=k("br",null,null,-1),AI=k("br",null,null,-1),xI=k("br",null,null,-1),kI=k("br",null,null,-1),BI=k("br",null,null,-1),$I=k("br",null,null,-1),TI=k("br",null,null,-1),DI=k("br",null,null,-1),LI=k("br",null,null,-1),II=k("br",null,null,-1),EI=k("br",null,null,-1),RI=k("br",null,null,-1),PI=k("br",null,null,-1),zI=k("br",null,null,-1),FI=k("br",null,null,-1),VI=k("br",null,null,-1),MI=k("br",null,null,-1),NI=k("br",null,null,-1),HI=k("br",null,null,-1),OI=k("br",null,null,-1),qI=k("br",null,null,-1),GI=k("br",null,null,-1),jI=k("br",null,null,-1),UI=k("br",null,null,-1),YI=k("br",null,null,-1),JI=k("br",null,null,-1),WI=k("br",null,null,-1),KI=k("br",null,null,-1),XI=k("br",null,null,-1),QI=k("br",null,null,-1),ZI=k("br",null,null,-1),eE=k("br",null,null,-1);function tE(e,i,a,o,s,c){const d=B("doc-page-header"),f=B("sui-header"),u=B("sui-rating"),p=B("doc-example"),g=B("property-list-table"),m=B("sui-table-header-cell"),_=B("sui-table-row"),w=B("sui-table-header"),S=B("sui-table-cell"),A=B("sui-table-body"),T=B("sui-table"),L=B("sui-container");return y(),ye("div",null,[t(d,{title:"Rating",sub:"A rating indicates user interest in content"}),t(L,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(p,{title:"Rating",description:"A Basic rating",code:e.ratingCode},{default:l(()=>[t(u)]),_:1},8,["code"]),t(p,{title:"Icon",description:"You can use any available icon as rating indicator",code:e.iconCode},{default:l(()=>[t(u,{defaultRating:2,maxRating:4,color:"yellow"}),sI,rI,t(u,{defaultRating:2,maxRating:4,icon:"heart",color:"red"}),uI,cI,t(u,{defaultRating:2,maxRating:4,icon:"female",color:"purple"}),dI,pI,t(u,{defaultRating:2,maxRating:4,icon:"male",color:"blue"}),mI,fI,t(u,{defaultRating:2,maxRating:4,icon:"cloud",color:"grey"}),gI,hI,t(u,{defaultRating:2,maxRating:4,icon:"cat",color:"pink"}),_I,bI,t(u,{defaultRating:2,maxRating:4,icon:"circle",color:"orange"})]),_:1},8,["code"]),t(p,{title:"Color",description:"You can specify any color of the FUI color palette",code:e.colorCode},{default:l(()=>[t(u,{defaultRating:1,maxRating:7,color:"red"}),vI,SI,t(u,{defaultRating:2,maxRating:7,color:"orange"}),yI,wI,t(u,{defaultRating:3,maxRating:7,color:"yellow"}),CI,AI,t(u,{defaultRating:4,maxRating:7,color:"olive"}),xI,kI,t(u,{defaultRating:5,maxRating:7,color:"green"}),BI,$I,t(u,{defaultRating:6,maxRating:7,color:"teal"}),TI,DI,t(u,{defaultRating:6,maxRating:7,color:"blue"}),LI,II,t(u,{defaultRating:5,maxRating:7,color:"violet"}),EI,RI,t(u,{defaultRating:4,maxRating:7,color:"purple"}),PI,zI,t(u,{defaultRating:3,maxRating:7,color:"pink"}),FI,VI,t(u,{defaultRating:2,maxRating:7,color:"brown"}),MI,NI,t(u,{defaultRating:1,maxRating:7,color:"grey"}),HI,OI,t(u,{defaultRating:1,maxRating:7,color:"black"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("States")]),_:1}),t(p,{title:"Disabled",description:"A rating can be started in non-interactive mode by adding a disabled class",code:e.disabledCode},{default:l(()=>[t(u,{disabled:"",defaultRating:3,maxRating:5,color:"yellow"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Variations")]),_:1}),t(p,{title:"Size",description:"A rating can vary in size",code:e.sizeCode},{default:l(()=>[t(u,{size:"mini",defaultRating:3,maxRating:4,color:"yellow"}),qI,GI,t(u,{size:"tiny",defaultRating:3,maxRating:4,color:"yellow"}),jI,UI,t(u,{size:"small",defaultRating:3,maxRating:4,color:"yellow"}),YI,JI,t(u,{defaultRating:3,maxRating:4,color:"yellow"}),WI,KI,t(u,{size:"large",defaultRating:3,maxRating:4,color:"yellow"}),XI,QI,t(u,{size:"huge",defaultRating:3,maxRating:4,color:"yellow"}),ZI,eE,t(u,{size:"massive",defaultRating:3,maxRating:4,color:"yellow"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Properties")]),_:1}),t(g,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Events")]),_:1}),t(T,{celled:""},{default:l(()=>[t(w,null,{default:l(()=>[t(_,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Name")]),_:1}),t(m,null,{default:l(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(A,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.events,h=>(y(),x(_,{key:h.name},{default:l(()=>[t(S,null,{default:l(()=>[n($e(h.name),1)]),_:2},1024),t(S,null,{default:l(()=>[n($e(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const iE=He(oI,[["render",tE]]),lE=F({name:"SidebarDoc",components:{DocPageHeader:Rt,DocExample:gt,PropertyListTable:xn},setup(){return{visible1:j(!1),sidebarCode:`<sui-grid :columns="1">
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
</sui-grid>`,properties:[{name:"animation",type:"string",default:"overlay",description:"Specifies the animation of the sidebar."},{name:"dimmed",type:"boolean",default:"false",description:"When specified, display the dim inside pusher content."},{name:"direction",type:"string",default:"left",description:"Specifies the direction the sidebar should appear on."},{name:"visible",type:"boolean",default:"false",description:"Specifies the visibility of the sidebar."}],events:[{name:"hide",description:"Callback to invoke when sidebar hide."},{name:"show",description:"Callback to invoke when sidebar show."}]}}}),aE={class:"pusher"};function nE(e,i,a,o,s,c){const d=B("doc-page-header"),f=B("sui-header"),u=B("sui-icon"),p=B("sui-button"),g=B("sui-grid-column"),m=B("sui-menu-item"),_=B("sui-sidebar"),w=B("sui-image"),S=B("sui-segment"),A=B("sui-grid"),T=B("doc-example"),L=B("property-list-table"),h=B("sui-table-header-cell"),b=B("sui-table-row"),C=B("sui-table-header"),$=B("sui-table-cell"),E=B("sui-table-body"),V=B("sui-table"),N=B("sui-container");return y(),ye("div",null,[t(d,{title:"Sidebar",sub:"A sidebar hides additional content beside a page"}),t(N,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(T,{title:"Sidebar",description:"A sidebar",code:e.sidebarCode},{default:l(()=>[t(A,{columns:1},{default:l(()=>[t(g,null,{default:l(()=>[t(p,{onClick:i[0]||(i[0]=z=>e.visible1=!e.visible1),icon:""},{default:l(()=>[t(u,{name:"arrow right"})]),_:1})]),_:1}),t(g,null,{default:l(()=>[t(S,{class:"pushable"},{default:l(()=>[t(_,{visible:e.visible1,"onUpdate:visible":i[1]||(i[1]=z=>e.visible1=z),dimmed:"",icon:"labeled",inverted:""},{default:l(()=>[t(m,null,{default:l(()=>[t(u,{name:"home"}),n(" Home ")]),_:1}),t(m,null,{default:l(()=>[t(u,{name:"gamepad"}),n(" Games ")]),_:1}),t(m,null,{default:l(()=>[t(u,{name:"camera"}),n(" Channels ")]),_:1})]),_:1},8,["visible"]),k("div",aE,[t(S,null,{default:l(()=>[t(f,{as:"h2"},{default:l(()=>[n("Main Header")]),_:1}),t(w,{src:Oe})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Properties")]),_:1}),t(L,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Events")]),_:1}),t(V,{celled:""},{default:l(()=>[t(C,null,{default:l(()=>[t(b,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Name")]),_:1}),t(h,null,{default:l(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(E,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.events,z=>(y(),x(b,{key:z.name},{default:l(()=>[t($,null,{default:l(()=>[n($e(z.name),1)]),_:2},1024),t($,null,{default:l(()=>[n($e(z.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const oE=He(lE,[["render",nE]]),sE=F({name:"SliderDoc",components:{DocPageHeader:Rt,DocExample:gt},setup(){const e=j(5),i='<sui-slider v-model="slider1" />',a=j(4),o='<sui-slider labeled v-model="slider2" />',s=j(6),c='<sui-slider labeled="ticked" v-model="slider3" />',d=j(0),f=`<sui-slider
  v-model="slider4"
  labeled="ticked"
  :labels='["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ/ς", "τ", "υ", "φ"]'
  :max="20"
/>`,u=j(40),p='<sui-slider v-model="slider5" labeled :step="5" :max="120" :min="20" />',g=j([]);g.value.push(20,60);const m='<sui-slider v-model="slider6" range labeled="ticked" :min="5" :max="100" :step="5" />',_=j(7),w='<sui-slider disabled v-model="slider7" />',S=j(8),A=`<sui-segment inverted>
  <sui-slider inverted v-model="slider8" />
</sui-segment>`,T=j(3),L='<sui-slider reversed v-model="slider9" />',h=j(18),b='<sui-slider vertical v-model="slider10" :max="20" />',C=j(5),$=j(5),E=j(5),V=j(5),N=j(5),z=j(5),G=j(5),X=j(5),Y=j(5),pe=j(5),xe=j(5),U=j(5),W=j(5),ue=`<sui-slider color="red" v-model="redSlider" />
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
<sui-slider color="black" v-model="blackSlider" />`,le=`<sui-segment inverted>
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
</sui-segment>`,De=j(5),Je=j(5),at=j(5);return{slider1:e,sliderCode:i,slider2:a,labeledSliderCode:o,slider3:s,labeledTickedCode:c,slider4:d,customLabelsCode:f,slider5:u,stepCode:p,slider6:g,rangeCode:m,slider7:_,disabledCode:w,slider8:S,invertedCode:A,slider9:T,reversedCode:L,slider10:h,verticalCode:b,redSlider:C,orangeSlider:$,yellowSlider:E,oliveSlider:V,greenSlider:N,tealSlider:z,blueSlider:G,violetSlider:X,purpleSlider:Y,pinkSlider:pe,brownSlider:xe,greySlider:U,blackSlider:W,coloredCode:ue,invertedColoredCode:le,smallSlider:De,largeSlider:Je,bigSlider:at,sizeCode:`<sui-slider size="small" color="red" v-model="smallSlider" />
<sui-slider size="large" color="yellow" v-model="largeSlider" />
<sui-slider size="big" color="olive" v-model="bigSlider" />`,properties:[{name:"color",type:"string",default:"",description:"A slider can have different colors"},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"inverted",type:"boolean",default:!1,description:"A slider can be formatted to appear on dark backgrounds."},{name:"labeled",type:"boolean|string",default:!1,description:"A slider can show its labels."},{name:"labels",type:"string[]",default:"",description:"A slider can have a custom label according to the label value."},{name:"max",type:"number",default:10,description:"Maximum boundary value."},{name:"min",type:"number",default:0,description:"Mininum boundary value."},{name:"modelValue",type:"number|number[]",default:0,description:"A value of component."},{name:"range",type:"boolean",default:!1,description:"When specified, allows two boundary values to be picked."},{name:"reversed",type:"boolean",default:!1,description:"A slider can be reversed."},{name:"size",type:"string",default:"",description:"A slider can have different sizes."},{name:"step",type:"number",default:1,description:"Step factor to increment/decrement the value."},{name:"vertical",type:"boolean",default:!1,description:"When specified, orientation of the slider becomes vertical."},{name:"verticalHeight",type:"number|string",default:200,description:"Height of the vertical slider."}],events:[{name:"change",description:"Callback to invoke on value change."},{name:"slideend",description:"Callback to invoke when slide end."}]}}});function rE(e,i,a,o,s,c){const d=B("doc-page-header"),f=B("sui-header"),u=B("sui-slider"),p=B("doc-example"),g=B("sui-segment"),m=B("sui-table-header-cell"),_=B("sui-table-row"),w=B("sui-table-header"),S=B("sui-table-cell"),A=B("sui-table-body"),T=B("sui-table"),L=B("sui-container");return y(),ye("div",null,[t(d,{title:"Slider",sub:"A slider allows users to select values within a range"}),t(L,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(p,{title:"Slider",description:"A standard slider",code:e.sliderCode},{default:l(()=>[t(u,{modelValue:e.slider1,"onUpdate:modelValue":i[0]||(i[0]=h=>e.slider1=h)},null,8,["modelValue"]),n(" "+$e(e.slider1),1)]),_:1},8,["code"]),t(p,{title:"Labeled Slider",description:"A slider that show its labels",code:e.labeledSliderCode},{default:l(()=>[t(u,{labeled:"",modelValue:e.slider2,"onUpdate:modelValue":i[1]||(i[1]=h=>e.slider2=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(p,{title:"Labeled Ticked Slider",description:"A slider that show its labels and ticks",code:e.labeledTickedCode},{default:l(()=>[t(u,{labeled:"ticked",modelValue:e.slider3,"onUpdate:modelValue":i[2]||(i[2]=h=>e.slider3=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(p,{title:"Custom Interpreted Labels",description:"You can provide a function which returns a custom label according to the label value",code:e.customLabelsCode},{default:l(()=>[t(u,{modelValue:e.slider4,"onUpdate:modelValue":i[3]||(i[3]=h=>e.slider4=h),labeled:"ticked",labels:["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ/ς","τ","υ","φ"],max:20},null,8,["modelValue"])]),_:1},8,["code"]),t(p,{title:"Step",description:"A slider can change the default step increment",code:e.stepCode},{default:l(()=>[t(u,{modelValue:e.slider5,"onUpdate:modelValue":i[4]||(i[4]=h=>e.slider5=h),labeled:"",step:5,max:120,min:20},null,8,["modelValue"]),n(" "+$e(e.slider5),1)]),_:1},8,["code"]),t(p,{title:"Range",description:"A range slider which allow you to select a range between two values",code:e.rangeCode},{default:l(()=>[t(u,{modelValue:e.slider6,"onUpdate:modelValue":i[5]||(i[5]=h=>e.slider6=h),range:"",labeled:"ticked",min:5,max:100,step:5},null,8,["modelValue"]),n(" "+$e(e.slider6),1)]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Variations")]),_:1}),t(p,{title:"Disabled",description:"A slider can appear disabled",code:e.disabledCode},{default:l(()=>[t(u,{disabled:"",modelValue:e.slider7,"onUpdate:modelValue":i[6]||(i[6]=h=>e.slider7=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(p,{title:"Inverted",description:"A slider can be inverted",code:e.invertedCode},{default:l(()=>[t(g,{inverted:""},{default:l(()=>[t(u,{inverted:"",modelValue:e.slider8,"onUpdate:modelValue":i[7]||(i[7]=h=>e.slider8=h)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(p,{title:"Reversed",description:"A slider can be reversed",code:e.reversedCode},{default:l(()=>[t(u,{reversed:"",modelValue:e.slider9,"onUpdate:modelValue":i[8]||(i[8]=h=>e.slider9=h)},null,8,["modelValue"]),n(" "+$e(e.slider9),1)]),_:1},8,["code"]),t(p,{title:"Vertical",description:"A slider can be vertical",code:e.verticalCode},{default:l(()=>[t(u,{vertical:"",modelValue:e.slider10,"onUpdate:modelValue":i[9]||(i[9]=h=>e.slider10=h),max:20},null,8,["modelValue"]),n(" "+$e(e.slider10),1)]),_:1},8,["code"]),t(p,{title:"Colored",description:"A slider can be different colors",code:e.coloredCode},{default:l(()=>[t(u,{color:"red",modelValue:e.redSlider,"onUpdate:modelValue":i[10]||(i[10]=h=>e.redSlider=h)},null,8,["modelValue"]),t(u,{color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":i[11]||(i[11]=h=>e.orangeSlider=h)},null,8,["modelValue"]),t(u,{color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":i[12]||(i[12]=h=>e.yellowSlider=h)},null,8,["modelValue"]),t(u,{color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":i[13]||(i[13]=h=>e.oliveSlider=h)},null,8,["modelValue"]),t(u,{color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":i[14]||(i[14]=h=>e.greenSlider=h)},null,8,["modelValue"]),t(u,{color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":i[15]||(i[15]=h=>e.tealSlider=h)},null,8,["modelValue"]),t(u,{color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":i[16]||(i[16]=h=>e.blueSlider=h)},null,8,["modelValue"]),t(u,{color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":i[17]||(i[17]=h=>e.violetSlider=h)},null,8,["modelValue"]),t(u,{color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":i[18]||(i[18]=h=>e.purpleSlider=h)},null,8,["modelValue"]),t(u,{color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":i[19]||(i[19]=h=>e.pinkSlider=h)},null,8,["modelValue"]),t(u,{color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":i[20]||(i[20]=h=>e.brownSlider=h)},null,8,["modelValue"]),t(u,{color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":i[21]||(i[21]=h=>e.greySlider=h)},null,8,["modelValue"]),t(u,{color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":i[22]||(i[22]=h=>e.blackSlider=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(p,{title:"Inverted Colored",description:"A slider can be different colors while inverted",code:e.invertedColoredCode},{default:l(()=>[t(g,{inverted:""},{default:l(()=>[t(u,{inverted:"",color:"red",modelValue:e.redSlider,"onUpdate:modelValue":i[23]||(i[23]=h=>e.redSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":i[24]||(i[24]=h=>e.orangeSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":i[25]||(i[25]=h=>e.yellowSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":i[26]||(i[26]=h=>e.oliveSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":i[27]||(i[27]=h=>e.greenSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":i[28]||(i[28]=h=>e.tealSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":i[29]||(i[29]=h=>e.blueSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":i[30]||(i[30]=h=>e.violetSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":i[31]||(i[31]=h=>e.purpleSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":i[32]||(i[32]=h=>e.pinkSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":i[33]||(i[33]=h=>e.brownSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":i[34]||(i[34]=h=>e.greySlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":i[35]||(i[35]=h=>e.blackSlider=h)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(p,{title:"Size",description:"A slider can have different sizes",code:e.sizeCode},{default:l(()=>[t(u,{size:"small",color:"red",modelValue:e.smallSlider,"onUpdate:modelValue":i[36]||(i[36]=h=>e.smallSlider=h)},null,8,["modelValue"]),t(u,{size:"large",color:"yellow",modelValue:e.largeSlider,"onUpdate:modelValue":i[37]||(i[37]=h=>e.largeSlider=h)},null,8,["modelValue"]),t(u,{size:"big",color:"olive",modelValue:e.bigSlider,"onUpdate:modelValue":i[38]||(i[38]=h=>e.bigSlider=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Properties")]),_:1}),t(T,{celled:""},{default:l(()=>[t(w,null,{default:l(()=>[t(_,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Name")]),_:1}),t(m,null,{default:l(()=>[n("Type")]),_:1}),t(m,null,{default:l(()=>[n("Default")]),_:1}),t(m,null,{default:l(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(A,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.properties,h=>(y(),x(_,{key:h.name},{default:l(()=>[t(S,null,{default:l(()=>[n($e(h.name),1)]),_:2},1024),t(S,null,{default:l(()=>[n($e(h.type),1)]),_:2},1024),t(S,null,{default:l(()=>[n($e(h.default),1)]),_:2},1024),t(S,null,{default:l(()=>[n($e(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Events")]),_:1}),t(T,{celled:""},{default:l(()=>[t(w,null,{default:l(()=>[t(_,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Name")]),_:1}),t(m,null,{default:l(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(A,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.events,h=>(y(),x(_,{key:h.name},{default:l(()=>[t(S,null,{default:l(()=>[n($e(h.name),1)]),_:2},1024),t(S,null,{default:l(()=>[n($e(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const uE=He(sE,[["render",rE]]),cE=F({name:"TabDoc",components:{DocPageHeader:Rt,DocExample:gt,PropertyListTable:xn},setup(){return{basicCode:`<sui-tab>
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
</sui-tab>`,tabProperties:[{name:"activeIndex",type:"string",default:0,description:"Index of the active tab."},{name:"pointing",type:"boolean",default:!1,description:""}],tabPanelProperties:[{name:"header",type:"boolean",default:"null",description:"Orientation of tab headers."}],events:[{name:"tab-change",description:"Callback to invoke when an active tab is changed."},{name:"tab-click",description:"Callback to invoke when an tab is clicked."}]}}});function dE(e,i,a,o,s,c){const d=B("doc-page-header"),f=B("sui-header"),u=B("sui-tab-panel"),p=B("sui-tab"),g=B("doc-example"),m=B("property-list-table"),_=B("sui-table-header-cell"),w=B("sui-table-row"),S=B("sui-table-header"),A=B("sui-table-cell"),T=B("sui-table-body"),L=B("sui-table"),h=B("sui-container");return y(),ye("div",null,[t(d,{title:"Tab",sub:"A tab is a hidden section of content activated by a menu"}),t(h,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Examples")]),_:1}),t(g,{title:"Basic",code:e.basicCode},{default:l(()=>[t(p,null,{default:l(()=>[t(u,{header:"First"},{default:l(()=>[n("Content A")]),_:1}),t(u,{header:"Second"},{default:l(()=>[n("Content B")]),_:1}),t(u,{header:"Third"},{default:l(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Pointing",code:e.pointingCode},{default:l(()=>[t(p,{pointing:""},{default:l(()=>[t(u,{header:"First"},{default:l(()=>[n("Content A")]),_:1}),t(u,{header:"Second"},{default:l(()=>[n("Content B")]),_:1}),t(u,{header:"Third"},{default:l(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Secondary",code:e.secondaryCode},{default:l(()=>[t(p,{secondary:""},{default:l(()=>[t(u,{header:"First"},{default:l(()=>[n("Content A")]),_:1}),t(u,{header:"Second"},{default:l(()=>[n("Content B")]),_:1}),t(u,{header:"Third"},{default:l(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Text",code:e.textCode},{default:l(()=>[t(p,{text:""},{default:l(()=>[t(u,{header:"First"},{default:l(()=>[n("Content A")]),_:1}),t(u,{header:"Second"},{default:l(()=>[n("Content B")]),_:1}),t(u,{header:"Third"},{default:l(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Properties")]),_:1}),t(f,{as:"h3"},{default:l(()=>[n("Tab")]),_:1}),t(m,{properties:e.tabProperties},null,8,["properties"]),t(f,{as:"h3"},{default:l(()=>[n("TabPanel")]),_:1}),t(m,{properties:e.tabPanelProperties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Events")]),_:1}),t(L,{celled:""},{default:l(()=>[t(S,null,{default:l(()=>[t(w,null,{default:l(()=>[t(_,null,{default:l(()=>[n("Name")]),_:1}),t(_,null,{default:l(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(T,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.events,b=>(y(),x(w,{key:b.name},{default:l(()=>[t(A,null,{default:l(()=>[n($e(b.name),1)]),_:2},1024),t(A,null,{default:l(()=>[n($e(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const pE=He(cE,[["render",dE]]),mE=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({ message: 'I am a toast, nice to meet you !' })
}
<\/script>`,fE={__name:"MinimalDoc",setup(e){const{toast:i}=st(),a=()=>{i({message:"I am a toast, nice to meet you !"})};return(o,s)=>{const c=B("SuiButton");return y(),x(I,{label:"Minimal",code:mE},{description:l(()=>[n(" A minimal toast will just display a message. ")]),example:l(()=>[t(c,{onClick:a},{default:l(()=>[n("Show")]),_:1})]),_:1})}}},gE=`<template>
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
<\/script>`,hE={__name:"TitledDoc",setup(e){const{toast:i}=st(),a=()=>{i({title:"Better ?",message:"Hey look, I have a title !"})};return(o,s)=>{const c=B("SuiButton");return y(),x(I,{label:"Titled",code:gE},{description:l(()=>[n(" You can add a title to your toast. ")]),example:l(()=>[t(c,{onClick:a},{default:l(()=>[n("Show")]),_:1})]),_:1})}}},_E=`<template>
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
<\/script>`,bE={__name:"ProgressBarDoc",setup(e){const{toast:i}=st(),a=o=>{i({title:"LOOK",message:"See, how long i will last",showProgress:"bottom",showProgressColor:o})};return(o,s)=>{const c=B("SuiButton");return y(),x(I,{label:"Progress Bar",code:_E},{description:l(()=>[n(" You can attach a progress bar to your toast. ")]),example:l(()=>[t(c,{onClick:a},{default:l(()=>[n("Show")]),_:1}),t(c,{color:"red",onClick:s[0]||(s[0]=d=>a("red"))},{default:l(()=>[n("Show")]),_:1})]),_:1})}}},vE=`<template>
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
<\/script>`,SE={__name:"ToastTypeDoc",setup(e){const{toast:i}=st(),a=o=>{i({message:"You're using the good framework !",type:o})};return(o,s)=>{const c=B("SuiButton");return y(),x(I,{label:"Toast Type",code:vE},{description:l(()=>[n(" A toast can be used to display different types of informations. ")]),example:l(()=>[t(c,{onClick:s[0]||(s[0]=d=>a("success")),positive:""},{default:l(()=>[n("Success")]),_:1}),t(c,{onClick:s[1]||(s[1]=d=>a("error")),negative:""},{default:l(()=>[n("Error")]),_:1}),t(c,{onClick:s[2]||(s[2]=d=>a("warning")),color:"yellow"},{default:l(()=>[n("Warning")]),_:1})]),_:1})}}},yE=`<template>
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
<\/script>`,wE={__name:"PositionDoc",setup(e){const{toast:i}=st(),a=o=>{i({position:o,message:"Look, I'm here !"})};return(o,s)=>{const c=B("SuiButton");return y(),x(I,{label:"Position",code:yE},{description:l(()=>[n(" A toast can appear at different positions on the screen. ")]),example:l(()=>[t(c,{onClick:s[0]||(s[0]=d=>a("top left"))},{default:l(()=>[n("Top Left")]),_:1}),t(c,{onClick:s[1]||(s[1]=d=>a("bottom right"))},{default:l(()=>[n("Bottom Right")]),_:1})]),_:1})}}},CE=k("br",null,null,-1),AE=`<template>
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
<\/script>`,xE={__name:"AttachedPosition",setup(e){const{toast:i}=st(),a=o=>{i({attached:o,title:"Watch out!",message:`I am a ${o} attached toast`})};return(o,s)=>{const c=B("SuiButton");return y(),x(I,{label:"Attached Position",code:AE},{description:l(()=>[n(" A toast can have an attached position which will show the toast over the whole width of the screen."),CE,n(" Just like notifications on mobile devices. ")]),example:l(()=>[t(c,{onClick:s[0]||(s[0]=d=>a("top"))},{default:l(()=>[n("Top")]),_:1}),t(c,{onClick:s[1]||(s[1]=d=>a("bottom"))},{default:l(()=>[n("Bottom")]),_:1})]),_:1})}}},kE=`<template>
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
<\/script>`,BE={__name:"DirectionDoc",setup(e){const{toast:i}=st(),a=()=>{i({horizontal:!0,position:"top left",title:"Watch out!",message:"Next one will open to the right"})};return(o,s)=>{const c=B("SuiButton");return y(),x(I,{label:"Direction",code:kE},{description:l(()=>[n(" Toasts can stack horizontal ")]),example:l(()=>[t(c,{onClick:a},{default:l(()=>[n("Show")]),_:1})]),_:1})}}},$E=`<template>
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
<\/script>`,TE={__name:"CenterAligned",setup(e){const{toast:i}=st(),a=()=>{i({centered:!0,title:"Veronika has joined",message:"Welcome to the Fomantic-UI community!"})};return(o,s)=>{const c=B("SuiButton");return y(),x(I,{label:"Center Aligned",code:$E},{description:l(()=>[n(" The toasts content can be shown center aligned. ")]),example:l(()=>[t(c,{onClick:a},{default:l(()=>[n("Show")]),_:1})]),_:1})}}},DE=`<template>
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
<\/script>`,LE={__name:"DurationDoc",setup(e){const{toast:i}=st(),a=o=>{i({displayTime:o,message:o===0?"I'll stay here until you click on me !":"You will see me for 5 seconds."})};return(o,s)=>{const c=B("SuiButton");return y(),x(I,{label:"Duration",code:DE},{description:l(()=>[n(" You can choose how long a toast should be displayed. ")]),example:l(()=>[t(c,{onClick:s[0]||(s[0]=d=>a(5e3))},{default:l(()=>[n("5 seconds")]),_:1}),t(c,{onClick:s[1]||(s[1]=d=>a(0))},{default:l(()=>[n("Stay")]),_:1})]),_:1})}}},IE=`<template>
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
<\/script>`,EE={__name:"MessageStyleDoc",setup(e){const{toast:i}=st(),a=()=>{i({messageStyle:!0,message:"I got my style from the message class",color:"purple"})};return(o,s)=>{const c=B("SuiButton");return y(),x(I,{label:"Use Message Style",code:IE},{description:l(()=>[n(" You can use all of the styles and colors from the message component. ")]),example:l(()=>[t(c,{onClick:a},{default:l(()=>[n("Show")]),_:1})]),_:1})}}},RE=`<template>
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
<\/script>`,PE={__name:"IncreasingProgressBarDoc",setup(e){const{toast:i}=st(),a=()=>{i({title:"LOOK",message:"See, how long i will last",showProgress:"top",showProgressUp:!0})};return(o,s)=>{const c=B("SuiButton");return y(),x(I,{label:"Increasing Progress Bar",code:RE},{description:l(()=>[n(" You can use the progress bar to show the progress of a task. ")]),example:l(()=>[t(c,{onClick:a},{default:l(()=>[n("Show")]),_:1})]),_:1})}}},zE=`<template>
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
<\/script>`,FE={__name:"ColorVariantsDoc",setup(e){const{toast:i}=st(),a=j(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],s=()=>{i({color:o[a.value],message:"I am a colorful toast",showProgress:"bottom"}),a.value=(a.value+1)%o.length};return(c,d)=>{const f=B("SuiButton");return y(),x(I,{label:"Color Variants",code:zE},{description:l(()=>[n(" You can use all of the usual color names. ")]),example:l(()=>[t(f,{onClick:s},{default:l(()=>[n("Show")]),_:1})]),_:1})}}},VE={__name:"InvertedColorsDoc",setup(e){const{toast:i}=st(),a=j(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],s=()=>{i({color:o[a.value],inverted:!0,message:"I am an inverted colorful toast",showProgress:"bottom"}),a.value=(a.value+1)%o.length};return(c,d)=>{const f=B("SuiButton");return y(),x(I,{label:"Inverted Colors",code:c.code},{description:l(()=>[n(" Same as above, just add inverted to the class definition. ")]),example:l(()=>[t(f,{onClick:s},{default:l(()=>[n("Show")]),_:1})]),_:1},8,["code"])}}},ME=`<template>
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
<\/script>`,NE={__name:"ActionGeneralDoc",setup(e){const{toast:i}=st(),a=()=>{i({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[ee(P,{color:"green",onclick:()=>{i({message:'You clicked "yes", toast closes by default'}),o()}},()=>[ee(J,{name:"check"}),"Yes"]),ee(P,{color:"red",icon:!0},()=>[ee(J,{name:"ban"})]),ee(P,{color:"blue",onclick:()=>i({message:"Returning false from the click handler avoids closing the toast"})},()=>"?")]})};return(o,s)=>(y(),x(I,{label:"General",code:ME},{description:l(()=>[n(" Define click actions to your toast by providing a text and/or icon, optional class and click handler. ")]),example:l(()=>[t(r(P),{onClick:a},{default:l(()=>[n("Show")]),_:1})]),_:1}))}},HE=`<template>
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
<\/script>`,OE={__name:"ActionBasicDoc",setup(e){const{toast:i}=st(),a=()=>{i({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[ee(P,{color:"yellow",onclick:()=>{i({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really")],actionsProps:{basic:!0,aligned:"left"}})};return(o,s)=>(y(),x(I,{label:"Basic",code:HE},{description:l(()=>[n(" The classActions setting provides you a way to adjust the overall appearance of the action buttons. Using basic class does not lighten the actions background. left aligns the buttons to the left. ")]),example:l(()=>[t(r(P),{onClick:a},{default:l(()=>[n("Show")]),_:1})]),_:1}))}},qE=`<template>
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
<\/script>`,GE={__name:"ActionAttachedDoc",setup(e){const{toast:i}=st(),a=()=>{i({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[ee(P,{color:"green",onclick:()=>{i({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),ee(P,{color:"red",onclick:()=>{i({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"top"}})};return(o,s)=>(y(),x(I,{label:"Attached",code:qE},{description:l(()=>[n(" Using attached converts your actions into a Button group. Also add top to display the actions attached to the top of the toast. ")]),example:l(()=>[t(r(P),{onClick:a},{default:l(()=>[n("Show")]),_:1})]),_:1}))}},jE=`<template>
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
<\/script>`,UE={__name:"ActionVerticalDoc",setup(e){const{toast:i}=st(),a=()=>{i({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[ee(P,{color:"green",onclick:()=>{i({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),ee(P,{color:"red",onclick:()=>{i({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{vertical:!0}})};return(o,s)=>(y(),x(I,{label:"Vertical",code:jE},{description:l(()=>[n(" You can use vertical to display your actions to the right of the toast. ")]),example:l(()=>[t(r(P),{onClick:a},{default:l(()=>[n("Show")]),_:1})]),_:1}))}},YE=k("br",null,null,-1),JE=`<template>
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
<\/script>`,WE={__name:"ActionVerticalAttachedDoc",setup(e){const{toast:i}=st(),a=()=>{i({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[ee(P,{color:"green",onclick:()=>{i({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),ee(P,{color:"red",onclick:()=>{i({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"left",vertical:!0}})};return(o,s)=>(y(),x(I,{label:"Vertical Attached",code:JE},{description:l(()=>[n(" Vertical actions can also be displayed as button groups using vertical attached."),YE,n(" Vertical attached actions also support left. ")]),example:l(()=>[t(r(P),{onClick:a},{default:l(()=>[n("Show")]),_:1})]),_:1}))}},KE={__name:"Toast",setup(e){const i=[{id:"minimal",label:"Minimal",category:"Types",component:fE},{id:"titled",label:"Titled",category:"Types",component:hE},{id:"progress-bar",label:"Progress Bar",category:"Types",component:bE},{id:"toast-type",label:"Toast Type",category:"Variations",component:SE},{id:"position",label:"Position",category:"Variations",component:wE},{id:"attached-position",label:"Attached Position",category:"Variations",component:xE},{id:"direction",label:"Direction",category:"Variations",component:BE},{id:"center-aligned",label:"Center Aligned",category:"Variations",component:TE},{id:"duration",label:"Duration",category:"Variations",component:LE},{id:"message-style",label:"Use Message Style",category:"Variations",component:EE},{id:"increasing-progress-bar",label:"Increasing Progress Bar",category:"Variations",component:PE},{id:"color-variants",label:"Color Variants",category:"Variations",component:FE},{id:"inverted-colors",label:"Inverted Colors",category:"Variations",component:VE},{id:"general",label:"General",category:"Actions",component:NE},{id:"action-basic",label:"Basic",category:"Actions",component:OE},{id:"action-attached",label:"Attached",category:"Actions",component:GE},{id:"action-vertical",label:"Vertical",category:"Actions",component:UE},{id:"action-vertical-attached",label:"Vertical Attached",category:"Actions",component:WE}];return(a,o)=>(y(),x(ot,{title:"Toast",description:"A toast allows users to be notified of an event","component-docs":i}))}},XE=[{path:"/",component:Bh,children:[{path:"/",component:t_},{path:"elements/button",component:Tw},{path:"elements/container",component:Hw},{path:"elements/divider",component:pC},{path:"elements/emoji",component:CC},{path:"elements/flag",component:$C},{path:"elements/header",component:o0},{path:"elements/icon",component:V0},{path:"elements/image",component:xA},{path:"elements/input",component:KA},{path:"elements/label",component:ok},{path:"elements/list",component:Ek},{path:"elements/loader",component:iB},{path:"elements/rail",component:oB},{path:"elements/reveal",component:vB},{path:"elements/segment",component:jT},{path:"elements/step",component:XT},{path:"collections/breadcrumb",component:fD},{path:"collections/form",component:ED},{path:"collections/grid",component:ND},{path:"collections/menu",component:()=>Qt(()=>import("./Menu-TUpYhxdX.js"),__vite__mapDeps([]))},{path:"collections/message",component:()=>Qt(()=>import("./Message-SLGeeVdt.js"),__vite__mapDeps([]))},{path:"collections/table",component:ZD},{path:"views/advertisement",component:()=>Qt(()=>import("./Advertisement-CDrC4vJg.js"),__vite__mapDeps([]))},{path:"views/card",component:()=>Qt(()=>import("./Card-2XIZh9jh.js"),__vite__mapDeps([]))},{path:"views/comment",component:()=>Qt(()=>import("./Comment-gM8QVPXD.js"),__vite__mapDeps([]))},{path:"views/feed",component:()=>Qt(()=>import("./Feed-Y8Y0xiHn.js"),__vite__mapDeps([]))},{path:"views/item",component:()=>Qt(()=>import("./Item-NT67Ylm4.js"),__vite__mapDeps([]))},{path:"views/statistic",component:()=>Qt(()=>import("./Statistic-JpdCeZST.js"),__vite__mapDeps([]))},{path:"modules/accordion",component:wL},{path:"modules/calendar",component:xL},{path:"modules/checkbox",component:PL},{path:"modules/dimmer",component:VL},{path:"modules/dropdown",component:HL},{path:"modules/embed",component:GL},{path:"modules/modal",component:QL},{path:"modules/popup",component:nI},{path:"modules/progress",component:()=>Qt(()=>import("./Progress-OJcQyKvL.js"),__vite__mapDeps([]))},{path:"modules/rating",component:iE},{path:"modules/sidebar",component:oE},{path:"modules/slider",component:uE},{path:"modules/tab",component:pE},{path:"modules/toast",component:KE}]}],QE=oh({history:yg("/vue-fomantic-ui/"),routes:XE,scrollBehavior(e,i,a){var o;e.hash||(o=document.querySelector(".article"))==null||o.scrollTo(0,0)}});(function(e){var i="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",a={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},o={bash:a,environment:{pattern:RegExp("\\$"+i),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+i),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+i),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:o},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:a}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:o},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:o.entity}}],environment:{pattern:RegExp("\\$?"+i),alias:"constant"},variable:o.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},a.inside=e.languages.bash;for(var s=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],c=o.variable[1].inside,d=0;d<s.length;d++)c[s[d]]=e.languages.bash[s[d]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);const ks=Rc(tg);ks.use(QE);ks.use(ay);ks.mount("#app");export{ZA as $,Qe as A,$e as B,H as C,ot as D,An as E,od as F,M_ as G,fe as H,vb as I,z_ as J,wb as K,sd as L,ft as M,ba as N,fb as O,Qb as P,Bt as Q,W_ as R,G_ as S,Gi as T,Vd as U,ud as V,da as W,bk as X,Qa as Y,P_ as Z,I as _,n as a,Lo as a0,Ea as a1,Ra as a2,Nb as a3,zb as a4,ll as a5,Fb as a6,Ev as a7,xo as a8,ko as a9,Rv as aa,Ao as ab,t as b,x as c,F as d,k as e,Oe as f,ei as g,ee as h,O as i,P as j,J as k,gs as l,it as m,Nt as n,y as o,ld as p,Te as q,j as r,oe as s,V_ as t,r as u,Ze as v,l as w,ye as x,s_ as y,Ce as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

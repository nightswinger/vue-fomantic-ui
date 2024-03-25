(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function a(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=a(s);fetch(s.href,c)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ln(e,i){const a=new Set(e.split(","));return i?o=>a.has(o.toLowerCase()):o=>a.has(o)}const qe={},sl=[],vt=()=>{},Pd=()=>!1,pa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Do=e=>e.startsWith("onUpdate:"),Ke=Object.assign,Io=(e,i)=>{const a=e.indexOf(i);a>-1&&e.splice(a,1)},zd=Object.prototype.hasOwnProperty,Re=(e,i)=>zd.call(e,i),ge=Array.isArray,rl=e=>xl(e)==="[object Map]",Ji=e=>xl(e)==="[object Set]",Ts=e=>xl(e)==="[object Date]",Vd=e=>xl(e)==="[object RegExp]",we=e=>typeof e=="function",Xe=e=>typeof e=="string",wi=e=>typeof e=="symbol",je=e=>e!==null&&typeof e=="object",Eo=e=>(je(e)||we(e))&&we(e.then)&&we(e.catch),qr=Object.prototype.toString,xl=e=>qr.call(e),Fd=e=>xl(e).slice(8,-1),Gr=e=>xl(e)==="[object Object]",Ro=e=>Xe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,jl=ln(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),an=e=>{const i=Object.create(null);return a=>i[a]||(i[a]=e(a))},Md=/-(\w)/g,_t=an(e=>e.replace(Md,(i,a)=>a?a.toUpperCase():"")),Nd=/\B([A-Z])/g,$t=an(e=>e.replace(Nd,"-$1").toLowerCase()),ma=an(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ul=an(e=>e?`on${ma(e)}`:""),qt=(e,i)=>!Object.is(e,i),ul=(e,i)=>{for(let a=0;a<e.length;a++)e[a](i)},Ma=(e,i,a)=>{Object.defineProperty(e,i,{configurable:!0,enumerable:!1,value:a})},ea=e=>{const i=parseFloat(e);return isNaN(i)?e:i},Na=e=>{const i=Xe(e)?Number(e):NaN;return isNaN(i)?e:i};let Ls;const jr=()=>Ls||(Ls=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Hd="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",Od=ln(Hd);function kl(e){if(ge(e)){const i={};for(let a=0;a<e.length;a++){const o=e[a],s=Xe(o)?Ud(o):kl(o);if(s)for(const c in s)i[c]=s[c]}return i}else if(Xe(e)||je(e))return e}const qd=/;(?![^(]*\))/g,Gd=/:([^]+)/,jd=/\/\*[^]*?\*\//g;function Ud(e){const i={};return e.replace(jd,"").split(qd).forEach(a=>{if(a){const o=a.split(Gd);o.length>1&&(i[o[0].trim()]=o[1].trim())}}),i}function fa(e){let i="";if(Xe(e))i=e;else if(ge(e))for(let a=0;a<e.length;a++){const o=fa(e[a]);o&&(i+=o+" ")}else if(je(e))for(const a in e)e[a]&&(i+=a+" ");return i.trim()}function Yd(e){if(!e)return null;let{class:i,style:a}=e;return i&&!Xe(i)&&(e.class=fa(i)),a&&(e.style=kl(a)),e}const Jd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wd=ln(Jd);function Ur(e){return!!e||e===""}function Kd(e,i){if(e.length!==i.length)return!1;let a=!0;for(let o=0;a&&o<e.length;o++)a=ai(e[o],i[o]);return a}function ai(e,i){if(e===i)return!0;let a=Ts(e),o=Ts(i);if(a||o)return a&&o?e.getTime()===i.getTime():!1;if(a=wi(e),o=wi(i),a||o)return e===i;if(a=ge(e),o=ge(i),a||o)return a&&o?Kd(e,i):!1;if(a=je(e),o=je(i),a||o){if(!a||!o)return!1;const s=Object.keys(e).length,c=Object.keys(i).length;if(s!==c)return!1;for(const d in e){const f=e.hasOwnProperty(d),u=i.hasOwnProperty(d);if(f&&!u||!f&&u||!ai(e[d],i[d]))return!1}}return String(e)===String(i)}function nn(e,i){return e.findIndex(a=>ai(a,i))}const $e=e=>Xe(e)?e:e==null?"":ge(e)||je(e)&&(e.toString===qr||!we(e.toString))?JSON.stringify(e,Yr,2):String(e),Yr=(e,i)=>i&&i.__v_isRef?Yr(e,i.value):rl(i)?{[`Map(${i.size})`]:[...i.entries()].reduce((a,[o,s],c)=>(a[kn(o,c)+" =>"]=s,a),{})}:Ji(i)?{[`Set(${i.size})`]:[...i.values()].map(a=>kn(a))}:wi(i)?kn(i):je(i)&&!ge(i)&&!Gr(i)?String(i):i,kn=(e,i="")=>{var a;return wi(e)?`Symbol(${(a=e.description)!=null?a:i})`:e};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xt;class Po{constructor(i=!1){this.detached=i,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xt,!i&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}run(i){if(this._active){const a=xt;try{return xt=this,i()}finally{xt=a}}}on(){xt=this}off(){xt=this.parent}stop(i){if(this._active){let a,o;for(a=0,o=this.effects.length;a<o;a++)this.effects[a].stop();for(a=0,o=this.cleanups.length;a<o;a++)this.cleanups[a]();if(this.scopes)for(a=0,o=this.scopes.length;a<o;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!i){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Xd(e){return new Po(e)}function Jr(e,i=xt){i&&i.active&&i.effects.push(e)}function zo(){return xt}function Wr(e){xt&&xt.cleanups.push(e)}let Pi;class bl{constructor(i,a,o,s){this.fn=i,this.trigger=a,this.scheduler=o,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Jr(this,s)}get dirty(){if(this._dirtyLevel===1){Wi();for(let i=0;i<this._depsLength;i++){const a=this.deps[i];if(a.computed&&(Qd(a.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),Ki()}return this._dirtyLevel>=2}set dirty(i){this._dirtyLevel=i?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let i=vi,a=Pi;try{return vi=!0,Pi=this,this._runnings++,Ds(this),this.fn()}finally{Is(this),this._runnings--,Pi=a,vi=i}}stop(){var i;this.active&&(Ds(this),Is(this),(i=this.onStop)==null||i.call(this),this.active=!1)}}function Qd(e){return e.value}function Ds(e){e._trackId++,e._depsLength=0}function Is(e){if(e.deps&&e.deps.length>e._depsLength){for(let i=e._depsLength;i<e.deps.length;i++)Kr(e.deps[i],e);e.deps.length=e._depsLength}}function Kr(e,i){const a=e.get(i);a!==void 0&&i._trackId!==a&&(e.delete(i),e.size===0&&e.cleanup())}function Zd(e,i){e.effect instanceof bl&&(e=e.effect.fn);const a=new bl(e,vt,()=>{a.dirty&&a.run()});i&&(Ke(a,i),i.scope&&Jr(a,i.scope)),(!i||!i.lazy)&&a.run();const o=a.run.bind(a);return o.effect=a,o}function ep(e){e.effect.stop()}let vi=!0,Wn=0;const Xr=[];function Wi(){Xr.push(vi),vi=!1}function Ki(){const e=Xr.pop();vi=e===void 0?!0:e}function Vo(){Wn++}function Fo(){for(Wn--;!Wn&&Kn.length;)Kn.shift()()}function Qr(e,i,a){if(i.get(e)!==e._trackId){i.set(e,e._trackId);const o=e.deps[e._depsLength];o!==i?(o&&Kr(o,e),e.deps[e._depsLength++]=i):e._depsLength++}}const Kn=[];function Zr(e,i,a){Vo();for(const o of e.keys())if(o._dirtyLevel<i&&e.get(o)===o._trackId){const s=o._dirtyLevel;o._dirtyLevel=i,s===0&&(o._shouldSchedule=!0,o.trigger())}eu(e),Fo()}function eu(e){for(const i of e.keys())i.scheduler&&i._shouldSchedule&&(!i._runnings||i.allowRecurse)&&e.get(i)===i._trackId&&(i._shouldSchedule=!1,Kn.push(i.scheduler))}const tu=(e,i)=>{const a=new Map;return a.cleanup=e,a.computed=i,a},Ha=new WeakMap,zi=Symbol(""),Xn=Symbol("");function wt(e,i,a){if(vi&&Pi){let o=Ha.get(e);o||Ha.set(e,o=new Map);let s=o.get(a);s||o.set(a,s=tu(()=>o.delete(a))),Qr(Pi,s)}}function ii(e,i,a,o,s,c){const d=Ha.get(e);if(!d)return;let f=[];if(i==="clear")f=[...d.values()];else if(a==="length"&&ge(e)){const u=Number(o);d.forEach((p,g)=>{(g==="length"||!wi(g)&&g>=u)&&f.push(p)})}else switch(a!==void 0&&f.push(d.get(a)),i){case"add":ge(e)?Ro(a)&&f.push(d.get("length")):(f.push(d.get(zi)),rl(e)&&f.push(d.get(Xn)));break;case"delete":ge(e)||(f.push(d.get(zi)),rl(e)&&f.push(d.get(Xn)));break;case"set":rl(e)&&f.push(d.get(zi));break}Vo();for(const u of f)u&&Zr(u,2);Fo()}function tp(e,i){var a;return(a=Ha.get(e))==null?void 0:a.get(i)}const ip=ln("__proto__,__v_isRef,__isVue"),iu=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(wi)),Es=lp();function lp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(i=>{e[i]=function(...a){const o=Ee(this);for(let c=0,d=this.length;c<d;c++)wt(o,"get",c+"");const s=o[i](...a);return s===-1||s===!1?o[i](...a.map(Ee)):s}}),["push","pop","shift","unshift","splice"].forEach(i=>{e[i]=function(...a){Wi(),Vo();const o=Ee(this)[i].apply(this,a);return Fo(),Ki(),o}}),e}function ap(e){const i=Ee(this);return wt(i,"has",e),i.hasOwnProperty(e)}class lu{constructor(i=!1,a=!1){this._isReadonly=i,this._shallow=a}get(i,a,o){const s=this._isReadonly,c=this._shallow;if(a==="__v_isReactive")return!s;if(a==="__v_isReadonly")return s;if(a==="__v_isShallow")return c;if(a==="__v_raw")return o===(s?c?uu:ru:c?su:ou).get(i)||Object.getPrototypeOf(i)===Object.getPrototypeOf(o)?i:void 0;const d=ge(i);if(!s){if(d&&Re(Es,a))return Reflect.get(Es,a,o);if(a==="hasOwnProperty")return ap}const f=Reflect.get(i,a,o);return(wi(a)?iu.has(a):ip(a))||(s||wt(i,"get",a),c)?f:ct(f)?d&&Ro(a)?f:f.value:je(f)?s?No(f):oi(f):f}}class au extends lu{constructor(i=!1){super(!1,i)}set(i,a,o,s){let c=i[a];if(!this._shallow){const u=Hi(c);if(!ta(o)&&!Hi(o)&&(c=Ee(c),o=Ee(o)),!ge(i)&&ct(c)&&!ct(o))return u?!1:(c.value=o,!0)}const d=ge(i)&&Ro(a)?Number(a)<i.length:Re(i,a),f=Reflect.set(i,a,o,s);return i===Ee(s)&&(d?qt(o,c)&&ii(i,"set",a,o):ii(i,"add",a,o)),f}deleteProperty(i,a){const o=Re(i,a);i[a];const s=Reflect.deleteProperty(i,a);return s&&o&&ii(i,"delete",a,void 0),s}has(i,a){const o=Reflect.has(i,a);return(!wi(a)||!iu.has(a))&&wt(i,"has",a),o}ownKeys(i){return wt(i,"iterate",ge(i)?"length":zi),Reflect.ownKeys(i)}}class nu extends lu{constructor(i=!1){super(!0,i)}set(i,a){return!0}deleteProperty(i,a){return!0}}const np=new au,op=new nu,sp=new au(!0),rp=new nu(!0),Mo=e=>e,on=e=>Reflect.getPrototypeOf(e);function va(e,i,a=!1,o=!1){e=e.__v_raw;const s=Ee(e),c=Ee(i);a||(qt(i,c)&&wt(s,"get",i),wt(s,"get",c));const{has:d}=on(s),f=o?Mo:a?qo:ia;if(d.call(s,i))return f(e.get(i));if(d.call(s,c))return f(e.get(c));e!==s&&e.get(i)}function Sa(e,i=!1){const a=this.__v_raw,o=Ee(a),s=Ee(e);return i||(qt(e,s)&&wt(o,"has",e),wt(o,"has",s)),e===s?a.has(e):a.has(e)||a.has(s)}function ya(e,i=!1){return e=e.__v_raw,!i&&wt(Ee(e),"iterate",zi),Reflect.get(e,"size",e)}function Rs(e){e=Ee(e);const i=Ee(this);return on(i).has.call(i,e)||(i.add(e),ii(i,"add",e,e)),this}function Ps(e,i){i=Ee(i);const a=Ee(this),{has:o,get:s}=on(a);let c=o.call(a,e);c||(e=Ee(e),c=o.call(a,e));const d=s.call(a,e);return a.set(e,i),c?qt(i,d)&&ii(a,"set",e,i):ii(a,"add",e,i),this}function zs(e){const i=Ee(this),{has:a,get:o}=on(i);let s=a.call(i,e);s||(e=Ee(e),s=a.call(i,e)),o&&o.call(i,e);const c=i.delete(e);return s&&ii(i,"delete",e,void 0),c}function Vs(){const e=Ee(this),i=e.size!==0,a=e.clear();return i&&ii(e,"clear",void 0,void 0),a}function wa(e,i){return function(o,s){const c=this,d=c.__v_raw,f=Ee(d),u=i?Mo:e?qo:ia;return!e&&wt(f,"iterate",zi),d.forEach((p,g)=>o.call(s,u(p),u(g),c))}}function Ca(e,i,a){return function(...o){const s=this.__v_raw,c=Ee(s),d=rl(c),f=e==="entries"||e===Symbol.iterator&&d,u=e==="keys"&&d,p=s[e](...o),g=a?Mo:i?qo:ia;return!i&&wt(c,"iterate",u?Xn:zi),{next(){const{value:m,done:_}=p.next();return _?{value:m,done:_}:{value:f?[g(m[0]),g(m[1])]:g(m),done:_}},[Symbol.iterator](){return this}}}}function ui(e){return function(...i){return e==="delete"?!1:e==="clear"?void 0:this}}function up(){const e={get(c){return va(this,c)},get size(){return ya(this)},has:Sa,add:Rs,set:Ps,delete:zs,clear:Vs,forEach:wa(!1,!1)},i={get(c){return va(this,c,!1,!0)},get size(){return ya(this)},has:Sa,add:Rs,set:Ps,delete:zs,clear:Vs,forEach:wa(!1,!0)},a={get(c){return va(this,c,!0)},get size(){return ya(this,!0)},has(c){return Sa.call(this,c,!0)},add:ui("add"),set:ui("set"),delete:ui("delete"),clear:ui("clear"),forEach:wa(!0,!1)},o={get(c){return va(this,c,!0,!0)},get size(){return ya(this,!0)},has(c){return Sa.call(this,c,!0)},add:ui("add"),set:ui("set"),delete:ui("delete"),clear:ui("clear"),forEach:wa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(c=>{e[c]=Ca(c,!1,!1),a[c]=Ca(c,!0,!1),i[c]=Ca(c,!1,!0),o[c]=Ca(c,!0,!0)}),[e,a,i,o]}const[cp,dp,pp,mp]=up();function sn(e,i){const a=i?e?mp:pp:e?dp:cp;return(o,s,c)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(Re(a,s)&&s in o?a:o,s,c)}const fp={get:sn(!1,!1)},gp={get:sn(!1,!0)},hp={get:sn(!0,!1)},_p={get:sn(!0,!0)},ou=new WeakMap,su=new WeakMap,ru=new WeakMap,uu=new WeakMap;function bp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vp(e){return e.__v_skip||!Object.isExtensible(e)?0:bp(Fd(e))}function oi(e){return Hi(e)?e:rn(e,!1,np,fp,ou)}function cu(e){return rn(e,!1,sp,gp,su)}function No(e){return rn(e,!0,op,hp,ru)}function Sp(e){return rn(e,!0,rp,_p,uu)}function rn(e,i,a,o,s){if(!je(e)||e.__v_raw&&!(i&&e.__v_isReactive))return e;const c=s.get(e);if(c)return c;const d=vp(e);if(d===0)return e;const f=new Proxy(e,d===2?o:a);return s.set(e,f),f}function Vi(e){return Hi(e)?Vi(e.__v_raw):!!(e&&e.__v_isReactive)}function Hi(e){return!!(e&&e.__v_isReadonly)}function ta(e){return!!(e&&e.__v_isShallow)}function Ho(e){return Vi(e)||Hi(e)}function Ee(e){const i=e&&e.__v_raw;return i?Ee(i):e}function Oo(e){return Ma(e,"__v_skip",!0),e}const ia=e=>je(e)?oi(e):e,qo=e=>je(e)?No(e):e;class du{constructor(i,a,o,s){this._setter=a,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new bl(()=>i(this._value),()=>cl(this,1),()=>this.dep&&eu(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=o}get value(){const i=Ee(this);return(!i._cacheable||i.effect.dirty)&&qt(i._value,i._value=i.effect.run())&&cl(i,2),Go(i),i.effect._dirtyLevel>=1&&cl(i,1),i._value}set value(i){this._setter(i)}get _dirty(){return this.effect.dirty}set _dirty(i){this.effect.dirty=i}}function yp(e,i,a=!1){let o,s;const c=we(e);return c?(o=e,s=vt):(o=e.get,s=e.set),new du(o,s,c||!s,a)}function Go(e){vi&&Pi&&(e=Ee(e),Qr(Pi,e.dep||(e.dep=tu(()=>e.dep=void 0,e instanceof du?e:void 0))))}function cl(e,i=2,a){e=Ee(e);const o=e.dep;o&&Zr(o,i)}function ct(e){return!!(e&&e.__v_isRef===!0)}function G(e){return mu(e,!1)}function pu(e){return mu(e,!0)}function mu(e,i){return ct(e)?e:new wp(e,i)}class wp{constructor(i,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?i:Ee(i),this._value=a?i:ia(i)}get value(){return Go(this),this._value}set value(i){const a=this.__v_isShallow||ta(i)||Hi(i);i=a?i:Ee(i),qt(i,this._rawValue)&&(this._rawValue=i,this._value=a?i:ia(i),cl(this,2))}}function Cp(e){cl(e,2)}function r(e){return ct(e)?e.value:e}function Ap(e){return we(e)?e():r(e)}const xp={get:(e,i,a)=>r(Reflect.get(e,i,a)),set:(e,i,a,o)=>{const s=e[i];return ct(s)&&!ct(a)?(s.value=a,!0):Reflect.set(e,i,a,o)}};function jo(e){return Vi(e)?e:new Proxy(e,xp)}class kp{constructor(i){this.dep=void 0,this.__v_isRef=!0;const{get:a,set:o}=i(()=>Go(this),()=>cl(this));this._get=a,this._set=o}get value(){return this._get()}set value(i){this._set(i)}}function fu(e){return new kp(e)}function Bp(e){const i=ge(e)?new Array(e.length):{};for(const a in e)i[a]=gu(e,a);return i}class $p{constructor(i,a,o){this._object=i,this._key=a,this._defaultValue=o,this.__v_isRef=!0}get value(){const i=this._object[this._key];return i===void 0?this._defaultValue:i}set value(i){this._object[this._key]=i}get dep(){return tp(Ee(this._object),this._key)}}class Tp{constructor(i){this._getter=i,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Qn(e,i,a){return ct(e)?e:we(e)?new Tp(e):je(e)&&arguments.length>1?gu(e,i,a):G(e)}function gu(e,i,a){const o=e[i];return ct(o)?o:new $p(e,i,a)}const Lp={GET:"get",HAS:"has",ITERATE:"iterate"},Dp={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ip(e,i){}const Ep={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},Rp={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function li(e,i,a,o){let s;try{s=o?e(...o):e()}catch(c){Xi(c,i,a)}return s}function Dt(e,i,a,o){if(we(e)){const c=li(e,i,a,o);return c&&Eo(c)&&c.catch(d=>{Xi(d,i,a)}),c}const s=[];for(let c=0;c<e.length;c++)s.push(Dt(e[c],i,a,o));return s}function Xi(e,i,a,o=!0){const s=i?i.vnode:null;if(i){let c=i.parent;const d=i.proxy,f=`https://vuejs.org/error-reference/#runtime-${a}`;for(;c;){const p=c.ec;if(p){for(let g=0;g<p.length;g++)if(p[g](e,d,f)===!1)return}c=c.parent}const u=i.appContext.config.errorHandler;if(u){li(u,null,10,[e,d,f]);return}}Pp(e,a,s,o)}function Pp(e,i,a,o=!0){console.error(e)}let la=!1,Zn=!1;const dt=[];let Jt=0;const dl=[];let fi=null,Ii=0;const hu=Promise.resolve();let Uo=null;function Bl(e){const i=Uo||hu;return e?i.then(this?e.bind(this):e):i}function zp(e){let i=Jt+1,a=dt.length;for(;i<a;){const o=i+a>>>1,s=dt[o],c=aa(s);c<e||c===e&&s.pre?i=o+1:a=o}return i}function un(e){(!dt.length||!dt.includes(e,la&&e.allowRecurse?Jt+1:Jt))&&(e.id==null?dt.push(e):dt.splice(zp(e.id),0,e),_u())}function _u(){!la&&!Zn&&(Zn=!0,Uo=hu.then(bu))}function Vp(e){const i=dt.indexOf(e);i>Jt&&dt.splice(i,1)}function Oa(e){ge(e)?dl.push(...e):(!fi||!fi.includes(e,e.allowRecurse?Ii+1:Ii))&&dl.push(e),_u()}function Fs(e,i,a=la?Jt+1:0){for(;a<dt.length;a++){const o=dt[a];if(o&&o.pre){if(e&&o.id!==e.uid)continue;dt.splice(a,1),a--,o()}}}function qa(e){if(dl.length){const i=[...new Set(dl)].sort((a,o)=>aa(a)-aa(o));if(dl.length=0,fi){fi.push(...i);return}for(fi=i,Ii=0;Ii<fi.length;Ii++)fi[Ii]();fi=null,Ii=0}}const aa=e=>e.id==null?1/0:e.id,Fp=(e,i)=>{const a=aa(e)-aa(i);if(a===0){if(e.pre&&!i.pre)return-1;if(i.pre&&!e.pre)return 1}return a};function bu(e){Zn=!1,la=!0,dt.sort(Fp);try{for(Jt=0;Jt<dt.length;Jt++){const i=dt[Jt];i&&i.active!==!1&&li(i,null,14)}}finally{Jt=0,dt.length=0,qa(),la=!1,Uo=null,(dt.length||dl.length)&&bu()}}let al,Aa=[];function vu(e,i){var a,o;al=e,al?(al.enabled=!0,Aa.forEach(({event:s,args:c})=>al.emit(s,...c)),Aa=[]):typeof window<"u"&&window.HTMLElement&&!((o=(a=window.navigator)==null?void 0:a.userAgent)!=null&&o.includes("jsdom"))?((i.__VUE_DEVTOOLS_HOOK_REPLAY__=i.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(c=>{vu(c,i)}),setTimeout(()=>{al||(i.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Aa=[])},3e3)):Aa=[]}function Mp(e,i,...a){if(e.isUnmounted)return;const o=e.vnode.props||qe;let s=a;const c=i.startsWith("update:"),d=c&&i.slice(7);if(d&&d in o){const g=`${d==="modelValue"?"model":d}Modifiers`,{number:m,trim:_}=o[g]||qe;_&&(s=a.map(w=>Xe(w)?w.trim():w)),m&&(s=a.map(ea))}let f,u=o[f=Ul(i)]||o[f=Ul(_t(i))];!u&&c&&(u=o[f=Ul($t(i))]),u&&Dt(u,e,6,s);const p=o[f+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[f])return;e.emitted[f]=!0,Dt(p,e,6,s)}}function Su(e,i,a=!1){const o=i.emitsCache,s=o.get(e);if(s!==void 0)return s;const c=e.emits;let d={},f=!1;if(!we(e)){const u=p=>{const g=Su(p,i,!0);g&&(f=!0,Ke(d,g))};!a&&i.mixins.length&&i.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!c&&!f?(je(e)&&o.set(e,null),null):(ge(c)?c.forEach(u=>d[u]=null):Ke(d,c),je(e)&&o.set(e,d),d)}function cn(e,i){return!e||!pa(i)?!1:(i=i.slice(2).replace(/Once$/,""),Re(e,i[0].toLowerCase()+i.slice(1))||Re(e,$t(i))||Re(e,i))}let tt=null,dn=null;function na(e){const i=tt;return tt=e,dn=e&&e.type.__scopeId||null,i}function yu(e){dn=e}function wu(){dn=null}const Np=e=>l;function l(e,i=tt,a){if(!i||e._n)return e;const o=(...s)=>{o._d&&so(-1);const c=na(i);let d;try{d=e(...s)}finally{na(c),o._d&&so(1)}return d};return o._n=!0,o._c=!0,o._d=!0,o}function Pa(e){const{type:i,vnode:a,proxy:o,withProxy:s,props:c,propsOptions:[d],slots:f,attrs:u,emit:p,render:g,renderCache:m,data:_,setupState:w,ctx:S,inheritAttrs:A}=e;let T,I;const h=na(e);try{if(a.shapeFlag&4){const C=s||o,$=C;T=kt(g.call($,C,m,c,w,_,S)),I=u}else{const C=i;T=kt(C.length>1?C(c,{attrs:u,slots:f,emit:p}):C(c,null)),I=i.props?u:Op(u)}}catch(C){Wl.length=0,Xi(C,e,1),T=t(mt)}let b=T;if(I&&A!==!1){const C=Object.keys(I),{shapeFlag:$}=b;C.length&&$&7&&(d&&C.some(Do)&&(I=qp(I,d)),b=Wt(b,I))}return a.dirs&&(b=Wt(b),b.dirs=b.dirs?b.dirs.concat(a.dirs):a.dirs),a.transition&&(b.transition=a.transition),T=b,na(h),T}function Hp(e,i=!0){let a;for(let o=0;o<e.length;o++){const s=e[o];if(Ct(s)){if(s.type!==mt||s.children==="v-if"){if(a)return;a=s}}else return}return a}const Op=e=>{let i;for(const a in e)(a==="class"||a==="style"||pa(a))&&((i||(i={}))[a]=e[a]);return i},qp=(e,i)=>{const a={};for(const o in e)(!Do(o)||!(o.slice(9)in i))&&(a[o]=e[o]);return a};function Gp(e,i,a){const{props:o,children:s,component:c}=e,{props:d,children:f,patchFlag:u}=i,p=c.emitsOptions;if(i.dirs||i.transition)return!0;if(a&&u>=0){if(u&1024)return!0;if(u&16)return o?Ms(o,d,p):!!d;if(u&8){const g=i.dynamicProps;for(let m=0;m<g.length;m++){const _=g[m];if(d[_]!==o[_]&&!cn(p,_))return!0}}}else return(s||f)&&(!f||!f.$stable)?!0:o===d?!1:o?d?Ms(o,d,p):!0:!!d;return!1}function Ms(e,i,a){const o=Object.keys(i);if(o.length!==Object.keys(e).length)return!0;for(let s=0;s<o.length;s++){const c=o[s];if(i[c]!==e[c]&&!cn(a,c))return!0}return!1}function Yo({vnode:e,parent:i},a){for(;i;){const o=i.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=i.vnode).el=a,i=i.parent;else break}}const Jo="components",jp="directives";function B(e,i){return Wo(Jo,e,!0,i)||e}const Cu=Symbol.for("v-ndc");function Au(e){return Xe(e)?Wo(Jo,e,!1)||e:e||Cu}function pn(e){return Wo(jp,e)}function Wo(e,i,a=!0,o=!1){const s=tt||lt;if(s){const c=s.type;if(e===Jo){const f=mo(c,!1);if(f&&(f===i||f===_t(i)||f===ma(_t(i))))return c}const d=Ns(s[e]||c[e],i)||Ns(s.appContext[e],i);return!d&&o?c:d}}function Ns(e,i){return e&&(e[i]||e[_t(i)]||e[ma(_t(i))])}const xu=e=>e.__isSuspense;let eo=0;const Up={name:"Suspense",__isSuspense:!0,process(e,i,a,o,s,c,d,f,u,p){if(e==null)Jp(i,a,o,s,c,d,f,u,p);else{if(c&&c.deps>0){i.suspense=e.suspense;return}Wp(e,i,a,o,s,d,f,u,p)}},hydrate:Kp,create:Ko,normalize:Xp},Yp=Up;function oa(e,i){const a=e.props&&e.props[i];we(a)&&a()}function Jp(e,i,a,o,s,c,d,f,u){const{p,o:{createElement:g}}=u,m=g("div"),_=e.suspense=Ko(e,s,o,i,m,a,c,d,f,u);p(null,_.pendingBranch=e.ssContent,m,null,o,_,c,d),_.deps>0?(oa(e,"onPending"),oa(e,"onFallback"),p(null,e.ssFallback,i,a,o,null,c,d),pl(_,e.ssFallback)):_.resolve(!1,!0)}function Wp(e,i,a,o,s,c,d,f,{p:u,um:p,o:{createElement:g}}){const m=i.suspense=e.suspense;m.vnode=i,i.el=e.el;const _=i.ssContent,w=i.ssFallback,{activeBranch:S,pendingBranch:A,isInFallback:T,isHydrating:I}=m;if(A)m.pendingBranch=_,Ot(_,A)?(u(A,_,m.hiddenContainer,null,s,m,c,d,f),m.deps<=0?m.resolve():T&&(I||(u(S,w,a,o,s,null,c,d,f),pl(m,w)))):(m.pendingId=eo++,I?(m.isHydrating=!1,m.activeBranch=A):p(A,s,m),m.deps=0,m.effects.length=0,m.hiddenContainer=g("div"),T?(u(null,_,m.hiddenContainer,null,s,m,c,d,f),m.deps<=0?m.resolve():(u(S,w,a,o,s,null,c,d,f),pl(m,w))):S&&Ot(_,S)?(u(S,_,a,o,s,m,c,d,f),m.resolve(!0)):(u(null,_,m.hiddenContainer,null,s,m,c,d,f),m.deps<=0&&m.resolve()));else if(S&&Ot(_,S))u(S,_,a,o,s,m,c,d,f),pl(m,_);else if(oa(i,"onPending"),m.pendingBranch=_,_.shapeFlag&512?m.pendingId=_.component.suspenseId:m.pendingId=eo++,u(null,_,m.hiddenContainer,null,s,m,c,d,f),m.deps<=0)m.resolve();else{const{timeout:h,pendingId:b}=m;h>0?setTimeout(()=>{m.pendingId===b&&m.fallback(w)},h):h===0&&m.fallback(w)}}function Ko(e,i,a,o,s,c,d,f,u,p,g=!1){const{p:m,m:_,um:w,n:S,o:{parentNode:A,remove:T}}=p;let I;const h=Qp(e);h&&i!=null&&i.pendingBranch&&(I=i.pendingId,i.deps++);const b=e.props?Na(e.props.timeout):void 0,C=c,$={vnode:e,parent:i,parentComponent:a,namespace:d,container:o,hiddenContainer:s,deps:0,pendingId:eo++,timeout:typeof b=="number"?b:-1,activeBranch:null,pendingBranch:null,isInFallback:!g,isHydrating:g,isUnmounted:!1,effects:[],resolve(E=!1,F=!1){const{vnode:N,activeBranch:z,pendingBranch:j,pendingId:Z,effects:W,parentComponent:fe,container:Be}=$;let U=!1;$.isHydrating?$.isHydrating=!1:E||(U=z&&j.transition&&j.transition.mode==="out-in",U&&(z.transition.afterLeave=()=>{Z===$.pendingId&&(_(j,Be,c===C?S(z):c,0),Oa(W))}),z&&(A(z.el)!==$.hiddenContainer&&(c=S(z)),w(z,fe,$,!0)),U||_(j,Be,c,0)),pl($,j),$.pendingBranch=null,$.isInFallback=!1;let K=$.parent,de=!1;for(;K;){if(K.pendingBranch){K.effects.push(...W),de=!0;break}K=K.parent}!de&&!U&&Oa(W),$.effects=[],h&&i&&i.pendingBranch&&I===i.pendingId&&(i.deps--,i.deps===0&&!F&&i.resolve()),oa(N,"onResolve")},fallback(E){if(!$.pendingBranch)return;const{vnode:F,activeBranch:N,parentComponent:z,container:j,namespace:Z}=$;oa(F,"onFallback");const W=S(N),fe=()=>{$.isInFallback&&(m(null,E,j,W,z,null,Z,f,u),pl($,E))},Be=E.transition&&E.transition.mode==="out-in";Be&&(N.transition.afterLeave=fe),$.isInFallback=!0,w(N,z,null,!0),Be||fe()},move(E,F,N){$.activeBranch&&_($.activeBranch,E,F,N),$.container=E},next(){return $.activeBranch&&S($.activeBranch)},registerDep(E,F){const N=!!$.pendingBranch;N&&$.deps++;const z=E.vnode.el;E.asyncDep.catch(j=>{Xi(j,E,0)}).then(j=>{if(E.isUnmounted||$.isUnmounted||$.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:Z}=E;co(E,j,!1),z&&(Z.el=z);const W=!z&&E.subTree.el;F(E,Z,A(z||E.subTree.el),z?null:S(E.subTree),$,d,u),W&&T(W),Yo(E,Z.el),N&&--$.deps===0&&$.resolve()})},unmount(E,F){$.isUnmounted=!0,$.activeBranch&&w($.activeBranch,a,E,F),$.pendingBranch&&w($.pendingBranch,a,E,F)}};return $}function Kp(e,i,a,o,s,c,d,f,u){const p=i.suspense=Ko(i,o,a,e.parentNode,document.createElement("div"),null,s,c,d,f,!0),g=u(e,p.pendingBranch=i.ssContent,a,p,c,d);return p.deps===0&&p.resolve(!1,!0),g}function Xp(e){const{shapeFlag:i,children:a}=e,o=i&32;e.ssContent=Hs(o?a.default:a),e.ssFallback=o?Hs(a.fallback):t(mt)}function Hs(e){let i;if(we(e)){const a=ji&&e._c;a&&(e._d=!1,y()),e=e(),a&&(e._d=!0,i=St,lc())}return ge(e)&&(e=Hp(e)),e=kt(e),i&&!e.dynamicChildren&&(e.dynamicChildren=i.filter(a=>a!==e)),e}function ku(e,i){i&&i.pendingBranch?ge(e)?i.effects.push(...e):i.effects.push(e):Oa(e)}function pl(e,i){e.activeBranch=i;const{vnode:a,parentComponent:o}=e;let s=i.el;for(;!s&&i.component;)i=i.component.subTree,s=i.el;a.el=s,o&&o.subTree===a&&(o.vnode.el=s,Yo(o,s))}function Qp(e){var i;return((i=e.props)==null?void 0:i.suspensible)!=null&&e.props.suspensible!==!1}const Bu=Symbol.for("v-scx"),$u=()=>Fe(Bu);function Xo(e,i){return ga(e,null,i)}function Tu(e,i){return ga(e,null,{flush:"post"})}function Lu(e,i){return ga(e,null,{flush:"sync"})}const xa={};function pt(e,i,a){return ga(e,i,a)}function ga(e,i,{immediate:a,deep:o,flush:s,once:c,onTrack:d,onTrigger:f}=qe){if(i&&c){const E=i;i=(...F)=>{E(...F),$()}}const u=lt,p=E=>o===!0?E:Ei(E,o===!1?1:void 0);let g,m=!1,_=!1;if(ct(e)?(g=()=>e.value,m=ta(e)):Vi(e)?(g=()=>p(e),m=!0):ge(e)?(_=!0,m=e.some(E=>Vi(E)||ta(E)),g=()=>e.map(E=>{if(ct(E))return E.value;if(Vi(E))return p(E);if(we(E))return li(E,u,2)})):we(e)?i?g=()=>li(e,u,2):g=()=>(w&&w(),Dt(e,u,3,[S])):g=vt,i&&o){const E=g;g=()=>Ei(E())}let w,S=E=>{w=b.onStop=()=>{li(E,u,4),w=b.onStop=void 0}},A;if(_a)if(S=vt,i?a&&Dt(i,u,3,[g(),_?[]:void 0,S]):g(),s==="sync"){const E=$u();A=E.__watcherHandles||(E.__watcherHandles=[])}else return vt;let T=_?new Array(e.length).fill(xa):xa;const I=()=>{if(!(!b.active||!b.dirty))if(i){const E=b.run();(o||m||(_?E.some((F,N)=>qt(F,T[N])):qt(E,T)))&&(w&&w(),Dt(i,u,3,[E,T===xa?void 0:_&&T[0]===xa?[]:T,S]),T=E)}else b.run()};I.allowRecurse=!!i;let h;s==="sync"?h=I:s==="post"?h=()=>rt(I,u&&u.suspense):(I.pre=!0,u&&(I.id=u.uid),h=()=>un(I));const b=new bl(g,vt,h),C=zo(),$=()=>{b.stop(),C&&Io(C.effects,b)};return i?a?I():T=b.run():s==="post"?rt(b.run.bind(b),u&&u.suspense):b.run(),A&&A.push($),$}function Zp(e,i,a){const o=this.proxy,s=Xe(e)?e.includes(".")?Du(o,e):()=>o[e]:e.bind(o,o);let c;we(i)?c=i:(c=i.handler,a=i);const d=Ui(this),f=ga(s,c.bind(o),a);return d(),f}function Du(e,i){const a=i.split(".");return()=>{let o=e;for(let s=0;s<a.length&&o;s++)o=o[a[s]];return o}}function Ei(e,i,a=0,o){if(!je(e)||e.__v_skip)return e;if(i&&i>0){if(a>=i)return e;a++}if(o=o||new Set,o.has(e))return e;if(o.add(e),ct(e))Ei(e.value,i,a,o);else if(ge(e))for(let s=0;s<e.length;s++)Ei(e[s],i,a,o);else if(Ji(e)||rl(e))e.forEach(s=>{Ei(s,i,a,o)});else if(Gr(e))for(const s in e)Ei(e[s],i,a,o);return e}function Si(e,i){if(tt===null)return e;const a=vn(tt)||tt.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<i.length;s++){let[c,d,f,u=qe]=i[s];c&&(we(c)&&(c={mounted:c,updated:c}),c.deep&&Ei(d),o.push({dir:c,instance:a,value:d,oldValue:void 0,arg:f,modifiers:u}))}return e}function jt(e,i,a,o){const s=e.dirs,c=i&&i.dirs;for(let d=0;d<s.length;d++){const f=s[d];c&&(f.oldValue=c[d].value);let u=f.dir[o];u&&(Wi(),Dt(u,a,8,[e.el,f,e,i]),Ki())}}const gi=Symbol("_leaveCb"),ka=Symbol("_enterCb");function Qo(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ai(()=>{e.isMounted=!0}),hn(()=>{e.isUnmounting=!0}),e}const zt=[Function,Array],Zo={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:zt,onEnter:zt,onAfterEnter:zt,onEnterCancelled:zt,onBeforeLeave:zt,onLeave:zt,onAfterLeave:zt,onLeaveCancelled:zt,onBeforeAppear:zt,onAppear:zt,onAfterAppear:zt,onAppearCancelled:zt},em={name:"BaseTransition",props:Zo,setup(e,{slots:i}){const a=Kt(),o=Qo();let s;return()=>{const c=i.default&&mn(i.default(),!0);if(!c||!c.length)return;let d=c[0];if(c.length>1){for(const A of c)if(A.type!==mt){d=A;break}}const f=Ee(e),{mode:u}=f;if(o.isLeaving)return Bn(d);const p=Os(d);if(!p)return Bn(d);const g=vl(p,f,o,a);Oi(p,g);const m=a.subTree,_=m&&Os(m);let w=!1;const{getTransitionKey:S}=p.type;if(S){const A=S();s===void 0?s=A:A!==s&&(s=A,w=!0)}if(_&&_.type!==mt&&(!Ot(p,_)||w)){const A=vl(_,f,o,a);if(Oi(_,A),u==="out-in")return o.isLeaving=!0,A.afterLeave=()=>{o.isLeaving=!1,a.update.active!==!1&&(a.effect.dirty=!0,a.update())},Bn(d);u==="in-out"&&p.type!==mt&&(A.delayLeave=(T,I,h)=>{const b=Eu(o,_);b[String(_.key)]=_,T[gi]=()=>{I(),T[gi]=void 0,delete g.delayedLeave},g.delayedLeave=h})}return d}}},Iu=em;function Eu(e,i){const{leavingVNodes:a}=e;let o=a.get(i.type);return o||(o=Object.create(null),a.set(i.type,o)),o}function vl(e,i,a,o){const{appear:s,mode:c,persisted:d=!1,onBeforeEnter:f,onEnter:u,onAfterEnter:p,onEnterCancelled:g,onBeforeLeave:m,onLeave:_,onAfterLeave:w,onLeaveCancelled:S,onBeforeAppear:A,onAppear:T,onAfterAppear:I,onAppearCancelled:h}=i,b=String(e.key),C=Eu(a,e),$=(N,z)=>{N&&Dt(N,o,9,z)},E=(N,z)=>{const j=z[1];$(N,z),ge(N)?N.every(Z=>Z.length<=1)&&j():N.length<=1&&j()},F={mode:c,persisted:d,beforeEnter(N){let z=f;if(!a.isMounted)if(s)z=A||f;else return;N[gi]&&N[gi](!0);const j=C[b];j&&Ot(e,j)&&j.el[gi]&&j.el[gi](),$(z,[N])},enter(N){let z=u,j=p,Z=g;if(!a.isMounted)if(s)z=T||u,j=I||p,Z=h||g;else return;let W=!1;const fe=N[ka]=Be=>{W||(W=!0,Be?$(Z,[N]):$(j,[N]),F.delayedLeave&&F.delayedLeave(),N[ka]=void 0)};z?E(z,[N,fe]):fe()},leave(N,z){const j=String(e.key);if(N[ka]&&N[ka](!0),a.isUnmounting)return z();$(m,[N]);let Z=!1;const W=N[gi]=fe=>{Z||(Z=!0,z(),fe?$(S,[N]):$(w,[N]),N[gi]=void 0,C[j]===e&&delete C[j])};C[j]=e,_?E(_,[N,W]):W()},clone(N){return vl(N,i,a,o)}};return F}function Bn(e){if(ha(e))return e=Wt(e),e.children=null,e}function Os(e){return ha(e)?e.children?e.children[0]:void 0:e}function Oi(e,i){e.shapeFlag&6&&e.component?Oi(e.component.subTree,i):e.shapeFlag&128?(e.ssContent.transition=i.clone(e.ssContent),e.ssFallback.transition=i.clone(e.ssFallback)):e.transition=i}function mn(e,i=!1,a){let o=[],s=0;for(let c=0;c<e.length;c++){let d=e[c];const f=a==null?d.key:String(a)+String(d.key!=null?d.key:c);d.type===Ce?(d.patchFlag&128&&s++,o=o.concat(mn(d.children,i,f))):(i||d.type!==mt)&&o.push(f!=null?Wt(d,{key:f}):d)}if(s>1)for(let c=0;c<o.length;c++)o[c].patchFlag=-2;return o}/*! #__NO_SIDE_EFFECTS__ */function V(e,i){return we(e)?Ke({name:e.name},i,{setup:e}):e}const Fi=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function tm(e){we(e)&&(e={loader:e});const{loader:i,loadingComponent:a,errorComponent:o,delay:s=200,timeout:c,suspensible:d=!0,onError:f}=e;let u=null,p,g=0;const m=()=>(g++,u=null,_()),_=()=>{let w;return u||(w=u=i().catch(S=>{if(S=S instanceof Error?S:new Error(String(S)),f)return new Promise((A,T)=>{f(S,()=>A(m()),()=>T(S),g+1)});throw S}).then(S=>w!==u&&u?u:(S&&(S.__esModule||S[Symbol.toStringTag]==="Module")&&(S=S.default),p=S,S)))};return V({name:"AsyncComponentWrapper",__asyncLoader:_,get __asyncResolved(){return p},setup(){const w=lt;if(p)return()=>$n(p,w);const S=h=>{u=null,Xi(h,w,13,!o)};if(d&&w.suspense||_a)return _().then(h=>()=>$n(h,w)).catch(h=>(S(h),()=>o?t(o,{error:h}):null));const A=G(!1),T=G(),I=G(!!s);return s&&setTimeout(()=>{I.value=!1},s),c!=null&&setTimeout(()=>{if(!A.value&&!T.value){const h=new Error(`Async component timed out after ${c}ms.`);S(h),T.value=h}},c),_().then(()=>{A.value=!0,w.parent&&ha(w.parent.vnode)&&(w.parent.effect.dirty=!0,un(w.parent.update))}).catch(h=>{S(h),T.value=h}),()=>{if(A.value&&p)return $n(p,w);if(T.value&&o)return t(o,{error:T.value});if(a&&!I.value)return t(a)}}})}function $n(e,i){const{ref:a,props:o,children:s,ce:c}=i.vnode,d=t(e,o,s);return d.ref=a,d.ce=c,delete i.vnode.ce,d}const ha=e=>e.type.__isKeepAlive,im={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:i}){const a=Kt(),o=a.ctx;if(!o.renderer)return()=>{const h=i.default&&i.default();return h&&h.length===1?h[0]:h};const s=new Map,c=new Set;let d=null;const f=a.suspense,{renderer:{p:u,m:p,um:g,o:{createElement:m}}}=o,_=m("div");o.activate=(h,b,C,$,E)=>{const F=h.component;p(h,b,C,0,f),u(F.vnode,h,b,C,F,f,$,h.slotScopeIds,E),rt(()=>{F.isDeactivated=!1,F.a&&ul(F.a);const N=h.props&&h.props.onVnodeMounted;N&&bt(N,F.parent,h)},f)},o.deactivate=h=>{const b=h.component;p(h,_,null,1,f),rt(()=>{b.da&&ul(b.da);const C=h.props&&h.props.onVnodeUnmounted;C&&bt(C,b.parent,h),b.isDeactivated=!0},f)};function w(h){Tn(h),g(h,a,f,!0)}function S(h){s.forEach((b,C)=>{const $=mo(b.type);$&&(!h||!h($))&&A(C)})}function A(h){const b=s.get(h);!d||!Ot(b,d)?w(b):d&&Tn(d),s.delete(h),c.delete(h)}pt(()=>[e.include,e.exclude],([h,b])=>{h&&S(C=>Nl(h,C)),b&&S(C=>!Nl(b,C))},{flush:"post",deep:!0});let T=null;const I=()=>{T!=null&&s.set(T,Ln(a.subTree))};return Ai(I),gn(I),hn(()=>{s.forEach(h=>{const{subTree:b,suspense:C}=a,$=Ln(b);if(h.type===$.type&&h.key===$.key){Tn($);const E=$.component.da;E&&rt(E,C);return}w(h)})}),()=>{if(T=null,!i.default)return null;const h=i.default(),b=h[0];if(h.length>1)return d=null,h;if(!Ct(b)||!(b.shapeFlag&4)&&!(b.shapeFlag&128))return d=null,b;let C=Ln(b);const $=C.type,E=mo(Fi(C)?C.type.__asyncResolved||{}:$),{include:F,exclude:N,max:z}=e;if(F&&(!E||!Nl(F,E))||N&&E&&Nl(N,E))return d=C,b;const j=C.key==null?$:C.key,Z=s.get(j);return C.el&&(C=Wt(C),b.shapeFlag&128&&(b.ssContent=C)),T=j,Z?(C.el=Z.el,C.component=Z.component,C.transition&&Oi(C,C.transition),C.shapeFlag|=512,c.delete(j),c.add(j)):(c.add(j),z&&c.size>parseInt(z,10)&&A(c.values().next().value)),C.shapeFlag|=256,d=C,xu(b.type)?b:C}}},lm=im;function Nl(e,i){return ge(e)?e.some(a=>Nl(a,i)):Xe(e)?e.split(",").includes(i):Vd(e)?e.test(i):!1}function es(e,i){Ru(e,"a",i)}function ts(e,i){Ru(e,"da",i)}function Ru(e,i,a=lt){const o=e.__wdc||(e.__wdc=()=>{let s=a;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(fn(i,o,a),a){let s=a.parent;for(;s&&s.parent;)ha(s.parent.vnode)&&am(o,i,a,s),s=s.parent}}function am(e,i,a,o){const s=fn(i,e,o,!0);Qi(()=>{Io(o[i],s)},a)}function Tn(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Ln(e){return e.shapeFlag&128?e.ssContent:e}function fn(e,i,a=lt,o=!1){if(a){const s=a[e]||(a[e]=[]),c=i.__weh||(i.__weh=(...d)=>{if(a.isUnmounted)return;Wi();const f=Ui(a),u=Dt(i,a,e,d);return f(),Ki(),u});return o?s.unshift(c):s.push(c),c}}const si=e=>(i,a=lt)=>(!_a||e==="sp")&&fn(e,(...o)=>i(...o),a),Pu=si("bm"),Ai=si("m"),zu=si("bu"),gn=si("u"),hn=si("bum"),Qi=si("um"),Vu=si("sp"),Fu=si("rtg"),Mu=si("rtc");function Nu(e,i=lt){fn("ec",e,i)}function Qe(e,i,a,o){let s;const c=a&&a[o];if(ge(e)||Xe(e)){s=new Array(e.length);for(let d=0,f=e.length;d<f;d++)s[d]=i(e[d],d,void 0,c&&c[d])}else if(typeof e=="number"){s=new Array(e);for(let d=0;d<e;d++)s[d]=i(d+1,d,void 0,c&&c[d])}else if(je(e))if(e[Symbol.iterator])s=Array.from(e,(d,f)=>i(d,f,void 0,c&&c[f]));else{const d=Object.keys(e);s=new Array(d.length);for(let f=0,u=d.length;f<u;f++){const p=d[f];s[f]=i(e[p],p,f,c&&c[f])}}else s=[];return a&&(a[o]=s),s}function nm(e,i){for(let a=0;a<i.length;a++){const o=i[a];if(ge(o))for(let s=0;s<o.length;s++)e[o[s].name]=o[s].fn;else o&&(e[o.name]=o.key?(...s)=>{const c=o.fn(...s);return c&&(c.key=o.key),c}:o.fn)}return e}function qi(e,i,a={},o,s){if(tt.isCE||tt.parent&&Fi(tt.parent)&&tt.parent.isCE)return i!=="default"&&(a.name=i),t("slot",a,o&&o());let c=e[i];c&&c._c&&(c._d=!1),y();const d=c&&Hu(c(a)),f=x(Ce,{key:a.key||d&&d.key||`_${i}`},d||(o?o():[]),d&&e._===1?64:-2);return!s&&f.scopeId&&(f.slotScopeIds=[f.scopeId+"-s"]),c&&c._c&&(c._d=!0),f}function Hu(e){return e.some(i=>Ct(i)?!(i.type===mt||i.type===Ce&&!Hu(i.children)):!0)?e:null}function om(e,i){const a={};for(const o in e)a[i&&/[A-Z]/.test(o)?`on:${o}`:Ul(o)]=e[o];return a}const to=e=>e?rc(e)?vn(e)||e.proxy:to(e.parent):null,Yl=Ke(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>to(e.parent),$root:e=>to(e.root),$emit:e=>e.emit,$options:e=>is(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,un(e.update)}),$nextTick:e=>e.n||(e.n=Bl.bind(e.proxy)),$watch:e=>Zp.bind(e)}),Dn=(e,i)=>e!==qe&&!e.__isScriptSetup&&Re(e,i),io={get({_:e},i){const{ctx:a,setupState:o,data:s,props:c,accessCache:d,type:f,appContext:u}=e;let p;if(i[0]!=="$"){const w=d[i];if(w!==void 0)switch(w){case 1:return o[i];case 2:return s[i];case 4:return a[i];case 3:return c[i]}else{if(Dn(o,i))return d[i]=1,o[i];if(s!==qe&&Re(s,i))return d[i]=2,s[i];if((p=e.propsOptions[0])&&Re(p,i))return d[i]=3,c[i];if(a!==qe&&Re(a,i))return d[i]=4,a[i];lo&&(d[i]=0)}}const g=Yl[i];let m,_;if(g)return i==="$attrs"&&wt(e,"get",i),g(e);if((m=f.__cssModules)&&(m=m[i]))return m;if(a!==qe&&Re(a,i))return d[i]=4,a[i];if(_=u.config.globalProperties,Re(_,i))return _[i]},set({_:e},i,a){const{data:o,setupState:s,ctx:c}=e;return Dn(s,i)?(s[i]=a,!0):o!==qe&&Re(o,i)?(o[i]=a,!0):Re(e.props,i)||i[0]==="$"&&i.slice(1)in e?!1:(c[i]=a,!0)},has({_:{data:e,setupState:i,accessCache:a,ctx:o,appContext:s,propsOptions:c}},d){let f;return!!a[d]||e!==qe&&Re(e,d)||Dn(i,d)||(f=c[0])&&Re(f,d)||Re(o,d)||Re(Yl,d)||Re(s.config.globalProperties,d)},defineProperty(e,i,a){return a.get!=null?e._.accessCache[i]=0:Re(a,"value")&&this.set(e,i,a.value,null),Reflect.defineProperty(e,i,a)}},sm=Ke({},io,{get(e,i){if(i!==Symbol.unscopables)return io.get(e,i,e)},has(e,i){return i[0]!=="_"&&!Od(i)}});function rm(){return null}function um(){return null}function cm(e){}function dm(e){}function pm(){return null}function mm(){}function fm(e,i){return null}function gm(){return qu().slots}function Ou(){return qu().attrs}function qu(){const e=Kt();return e.setupContext||(e.setupContext=dc(e))}function sa(e){return ge(e)?e.reduce((i,a)=>(i[a]=null,i),{}):e}function hm(e,i){const a=sa(e);for(const o in i){if(o.startsWith("__skip"))continue;let s=a[o];s?ge(s)||we(s)?s=a[o]={type:s,default:i[o]}:s.default=i[o]:s===null&&(s=a[o]={default:i[o]}),s&&i[`__skip_${o}`]&&(s.skipFactory=!0)}return a}function _m(e,i){return!e||!i?e||i:ge(e)&&ge(i)?e.concat(i):Ke({},sa(e),sa(i))}function bm(e,i){const a={};for(const o in e)i.includes(o)||Object.defineProperty(a,o,{enumerable:!0,get:()=>e[o]});return a}function vm(e){const i=Kt();let a=e();return uo(),Eo(a)&&(a=a.catch(o=>{throw Ui(i),o})),[a,()=>Ui(i)]}let lo=!0;function Sm(e){const i=is(e),a=e.proxy,o=e.ctx;lo=!1,i.beforeCreate&&qs(i.beforeCreate,e,"bc");const{data:s,computed:c,methods:d,watch:f,provide:u,inject:p,created:g,beforeMount:m,mounted:_,beforeUpdate:w,updated:S,activated:A,deactivated:T,beforeDestroy:I,beforeUnmount:h,destroyed:b,unmounted:C,render:$,renderTracked:E,renderTriggered:F,errorCaptured:N,serverPrefetch:z,expose:j,inheritAttrs:Z,components:W,directives:fe,filters:Be}=i;if(p&&ym(p,o,null),d)for(const de in d){const le=d[de];we(le)&&(o[de]=le.bind(a))}if(s){const de=s.call(a,a);je(de)&&(e.data=oi(de))}if(lo=!0,c)for(const de in c){const le=c[de],Le=we(le)?le.bind(a,a):we(le.get)?le.get.bind(a,a):vt,Je=!we(le)&&we(le.set)?le.set.bind(a):vt,at=M({get:Le,set:Je});Object.defineProperty(o,de,{enumerable:!0,configurable:!0,get:()=>at.value,set:Ue=>at.value=Ue})}if(f)for(const de in f)Gu(f[de],o,a,de);if(u){const de=we(u)?u.call(a):u;Reflect.ownKeys(de).forEach(le=>{ut(le,de[le])})}g&&qs(g,e,"c");function K(de,le){ge(le)?le.forEach(Le=>de(Le.bind(a))):le&&de(le.bind(a))}if(K(Pu,m),K(Ai,_),K(zu,w),K(gn,S),K(es,A),K(ts,T),K(Nu,N),K(Mu,E),K(Fu,F),K(hn,h),K(Qi,C),K(Vu,z),ge(j))if(j.length){const de=e.exposed||(e.exposed={});j.forEach(le=>{Object.defineProperty(de,le,{get:()=>a[le],set:Le=>a[le]=Le})})}else e.exposed||(e.exposed={});$&&e.render===vt&&(e.render=$),Z!=null&&(e.inheritAttrs=Z),W&&(e.components=W),fe&&(e.directives=fe)}function ym(e,i,a=vt){ge(e)&&(e=ao(e));for(const o in e){const s=e[o];let c;je(s)?"default"in s?c=Fe(s.from||o,s.default,!0):c=Fe(s.from||o):c=Fe(s),ct(c)?Object.defineProperty(i,o,{enumerable:!0,configurable:!0,get:()=>c.value,set:d=>c.value=d}):i[o]=c}}function qs(e,i,a){Dt(ge(e)?e.map(o=>o.bind(i.proxy)):e.bind(i.proxy),i,a)}function Gu(e,i,a,o){const s=o.includes(".")?Du(a,o):()=>a[o];if(Xe(e)){const c=i[e];we(c)&&pt(s,c)}else if(we(e))pt(s,e.bind(a));else if(je(e))if(ge(e))e.forEach(c=>Gu(c,i,a,o));else{const c=we(e.handler)?e.handler.bind(a):i[e.handler];we(c)&&pt(s,c,e)}}function is(e){const i=e.type,{mixins:a,extends:o}=i,{mixins:s,optionsCache:c,config:{optionMergeStrategies:d}}=e.appContext,f=c.get(i);let u;return f?u=f:!s.length&&!a&&!o?u=i:(u={},s.length&&s.forEach(p=>Ga(u,p,d,!0)),Ga(u,i,d)),je(i)&&c.set(i,u),u}function Ga(e,i,a,o=!1){const{mixins:s,extends:c}=i;c&&Ga(e,c,a,!0),s&&s.forEach(d=>Ga(e,d,a,!0));for(const d in i)if(!(o&&d==="expose")){const f=wm[d]||a&&a[d];e[d]=f?f(e[d],i[d]):i[d]}return e}const wm={data:Gs,props:js,emits:js,methods:Hl,computed:Hl,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:Hl,directives:Hl,watch:Am,provide:Gs,inject:Cm};function Gs(e,i){return i?e?function(){return Ke(we(e)?e.call(this,this):e,we(i)?i.call(this,this):i)}:i:e}function Cm(e,i){return Hl(ao(e),ao(i))}function ao(e){if(ge(e)){const i={};for(let a=0;a<e.length;a++)i[e[a]]=e[a];return i}return e}function ht(e,i){return e?[...new Set([].concat(e,i))]:i}function Hl(e,i){return e?Ke(Object.create(null),e,i):i}function js(e,i){return e?ge(e)&&ge(i)?[...new Set([...e,...i])]:Ke(Object.create(null),sa(e),sa(i??{})):i}function Am(e,i){if(!e)return i;if(!i)return e;const a=Ke(Object.create(null),e);for(const o in i)a[o]=ht(e[o],i[o]);return a}function ju(){return{app:null,config:{isNativeTag:Pd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xm=0;function km(e,i){return function(o,s=null){we(o)||(o=Ke({},o)),s!=null&&!je(s)&&(s=null);const c=ju(),d=new WeakSet;let f=!1;const u=c.app={_uid:xm++,_component:o,_props:s,_container:null,_context:c,_instance:null,version:mc,get config(){return c.config},set config(p){},use(p,...g){return d.has(p)||(p&&we(p.install)?(d.add(p),p.install(u,...g)):we(p)&&(d.add(p),p(u,...g))),u},mixin(p){return c.mixins.includes(p)||c.mixins.push(p),u},component(p,g){return g?(c.components[p]=g,u):c.components[p]},directive(p,g){return g?(c.directives[p]=g,u):c.directives[p]},mount(p,g,m){if(!f){const _=t(o,s);return _.appContext=c,m===!0?m="svg":m===!1&&(m=void 0),g&&i?i(_,p):e(_,p,m),f=!0,u._container=p,p.__vue_app__=u,vn(_.component)||_.component.proxy}},unmount(){f&&(e(null,u._container),delete u._container.__vue_app__)},provide(p,g){return c.provides[p]=g,u},runWithContext(p){ra=u;try{return p()}finally{ra=null}}};return u}}let ra=null;function ut(e,i){if(lt){let a=lt.provides;const o=lt.parent&&lt.parent.provides;o===a&&(a=lt.provides=Object.create(o)),a[e]=i}}function Fe(e,i,a=!1){const o=lt||tt;if(o||ra){const s=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:ra._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return a&&we(i)?i.call(o&&o.proxy):i}}function Bm(){return!!(lt||tt||ra)}function $m(e,i,a,o=!1){const s={},c={};Ma(c,bn,1),e.propsDefaults=Object.create(null),Uu(e,i,s,c);for(const d in e.propsOptions[0])d in s||(s[d]=void 0);a?e.props=o?s:cu(s):e.type.props?e.props=s:e.props=c,e.attrs=c}function Tm(e,i,a,o){const{props:s,attrs:c,vnode:{patchFlag:d}}=e,f=Ee(s),[u]=e.propsOptions;let p=!1;if((o||d>0)&&!(d&16)){if(d&8){const g=e.vnode.dynamicProps;for(let m=0;m<g.length;m++){let _=g[m];if(cn(e.emitsOptions,_))continue;const w=i[_];if(u)if(Re(c,_))w!==c[_]&&(c[_]=w,p=!0);else{const S=_t(_);s[S]=no(u,f,S,w,e,!1)}else w!==c[_]&&(c[_]=w,p=!0)}}}else{Uu(e,i,s,c)&&(p=!0);let g;for(const m in f)(!i||!Re(i,m)&&((g=$t(m))===m||!Re(i,g)))&&(u?a&&(a[m]!==void 0||a[g]!==void 0)&&(s[m]=no(u,f,m,void 0,e,!0)):delete s[m]);if(c!==f)for(const m in c)(!i||!Re(i,m))&&(delete c[m],p=!0)}p&&ii(e,"set","$attrs")}function Uu(e,i,a,o){const[s,c]=e.propsOptions;let d=!1,f;if(i)for(let u in i){if(jl(u))continue;const p=i[u];let g;s&&Re(s,g=_t(u))?!c||!c.includes(g)?a[g]=p:(f||(f={}))[g]=p:cn(e.emitsOptions,u)||(!(u in o)||p!==o[u])&&(o[u]=p,d=!0)}if(c){const u=Ee(a),p=f||qe;for(let g=0;g<c.length;g++){const m=c[g];a[m]=no(s,u,m,p[m],e,!Re(p,m))}}return d}function no(e,i,a,o,s,c){const d=e[a];if(d!=null){const f=Re(d,"default");if(f&&o===void 0){const u=d.default;if(d.type!==Function&&!d.skipFactory&&we(u)){const{propsDefaults:p}=s;if(a in p)o=p[a];else{const g=Ui(s);o=p[a]=u.call(null,i),g()}}else o=u}d[0]&&(c&&!f?o=!1:d[1]&&(o===""||o===$t(a))&&(o=!0))}return o}function Yu(e,i,a=!1){const o=i.propsCache,s=o.get(e);if(s)return s;const c=e.props,d={},f=[];let u=!1;if(!we(e)){const g=m=>{u=!0;const[_,w]=Yu(m,i,!0);Ke(d,_),w&&f.push(...w)};!a&&i.mixins.length&&i.mixins.forEach(g),e.extends&&g(e.extends),e.mixins&&e.mixins.forEach(g)}if(!c&&!u)return je(e)&&o.set(e,sl),sl;if(ge(c))for(let g=0;g<c.length;g++){const m=_t(c[g]);Us(m)&&(d[m]=qe)}else if(c)for(const g in c){const m=_t(g);if(Us(m)){const _=c[g],w=d[m]=ge(_)||we(_)?{type:_}:Ke({},_);if(w){const S=Ws(Boolean,w.type),A=Ws(String,w.type);w[0]=S>-1,w[1]=A<0||S<A,(S>-1||Re(w,"default"))&&f.push(m)}}}const p=[d,f];return je(e)&&o.set(e,p),p}function Us(e){return e[0]!=="$"}function Ys(e){const i=e&&e.toString().match(/^\s*(function|class) (\w+)/);return i?i[2]:e===null?"null":""}function Js(e,i){return Ys(e)===Ys(i)}function Ws(e,i){return ge(i)?i.findIndex(a=>Js(a,e)):we(i)&&Js(i,e)?0:-1}const Ju=e=>e[0]==="_"||e==="$stable",ls=e=>ge(e)?e.map(kt):[kt(e)],Lm=(e,i,a)=>{if(i._n)return i;const o=l((...s)=>ls(i(...s)),a);return o._c=!1,o},Wu=(e,i,a)=>{const o=e._ctx;for(const s in e){if(Ju(s))continue;const c=e[s];if(we(c))i[s]=Lm(s,c,o);else if(c!=null){const d=ls(c);i[s]=()=>d}}},Ku=(e,i)=>{const a=ls(i);e.slots.default=()=>a},Dm=(e,i)=>{if(e.vnode.shapeFlag&32){const a=i._;a?(e.slots=Ee(i),Ma(i,"_",a)):Wu(i,e.slots={})}else e.slots={},i&&Ku(e,i);Ma(e.slots,bn,1)},Im=(e,i,a)=>{const{vnode:o,slots:s}=e;let c=!0,d=qe;if(o.shapeFlag&32){const f=i._;f?a&&f===1?c=!1:(Ke(s,i),!a&&f===1&&delete s._):(c=!i.$stable,Wu(i,s)),d=i}else i&&(Ku(e,i),d={default:1});if(c)for(const f in s)!Ju(f)&&d[f]==null&&delete s[f]};function ja(e,i,a,o,s=!1){if(ge(e)){e.forEach((_,w)=>ja(_,i&&(ge(i)?i[w]:i),a,o,s));return}if(Fi(o)&&!s)return;const c=o.shapeFlag&4?vn(o.component)||o.component.proxy:o.el,d=s?null:c,{i:f,r:u}=e,p=i&&i.r,g=f.refs===qe?f.refs={}:f.refs,m=f.setupState;if(p!=null&&p!==u&&(Xe(p)?(g[p]=null,Re(m,p)&&(m[p]=null)):ct(p)&&(p.value=null)),we(u))li(u,f,12,[d,g]);else{const _=Xe(u),w=ct(u),S=e.f;if(_||w){const A=()=>{if(S){const T=_?Re(m,u)?m[u]:g[u]:u.value;s?ge(T)&&Io(T,c):ge(T)?T.includes(c)||T.push(c):_?(g[u]=[c],Re(m,u)&&(m[u]=g[u])):(u.value=[c],e.k&&(g[e.k]=u.value))}else _?(g[u]=d,Re(m,u)&&(m[u]=d)):w&&(u.value=d,e.k&&(g[e.k]=d))};s||S?A():(A.id=-1,rt(A,a))}}}let ci=!1;const Em=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",Rm=e=>e.namespaceURI.includes("MathML"),Ba=e=>{if(Em(e))return"svg";if(Rm(e))return"mathml"},$a=e=>e.nodeType===8;function Pm(e){const{mt:i,p:a,o:{patchProp:o,createText:s,nextSibling:c,parentNode:d,remove:f,insert:u,createComment:p}}=e,g=(b,C)=>{if(!C.hasChildNodes()){a(null,b,C),qa(),C._vnode=b;return}ci=!1,m(C.firstChild,b,null,null,null),qa(),C._vnode=b,ci&&console.error("Hydration completed but contains mismatches.")},m=(b,C,$,E,F,N=!1)=>{const z=$a(b)&&b.data==="[",j=()=>A(b,C,$,E,F,z),{type:Z,ref:W,shapeFlag:fe,patchFlag:Be}=C;let U=b.nodeType;C.el=b,Be===-2&&(N=!1,C.dynamicChildren=null);let K=null;switch(Z){case Gi:U!==3?C.children===""?(u(C.el=s(""),d(b),b),K=b):K=j():(b.data!==C.children&&(ci=!0,b.data=C.children),K=c(b));break;case mt:h(b)?(K=c(b),I(C.el=b.content.firstChild,b,$)):U!==8||z?K=j():K=c(b);break;case Mi:if(z&&(b=c(b),U=b.nodeType),U===1||U===3){K=b;const de=!C.children.length;for(let le=0;le<C.staticCount;le++)de&&(C.children+=K.nodeType===1?K.outerHTML:K.data),le===C.staticCount-1&&(C.anchor=K),K=c(K);return z?c(K):K}else j();break;case Ce:z?K=S(b,C,$,E,F,N):K=j();break;default:if(fe&1)(U!==1||C.type.toLowerCase()!==b.tagName.toLowerCase())&&!h(b)?K=j():K=_(b,C,$,E,F,N);else if(fe&6){C.slotScopeIds=F;const de=d(b);if(z?K=T(b):$a(b)&&b.data==="teleport start"?K=T(b,b.data,"teleport end"):K=c(b),i(C,de,null,$,E,Ba(de),N),Fi(C)){let le;z?(le=t(Ce),le.anchor=K?K.previousSibling:de.lastChild):le=b.nodeType===3?n(""):t("div"),le.el=b,C.component.subTree=le}}else fe&64?U!==8?K=j():K=C.type.hydrate(b,C,$,E,F,N,e,w):fe&128&&(K=C.type.hydrate(b,C,$,E,Ba(d(b)),F,N,e,m))}return W!=null&&ja(W,null,E,C),K},_=(b,C,$,E,F,N)=>{N=N||!!C.dynamicChildren;const{type:z,props:j,patchFlag:Z,shapeFlag:W,dirs:fe,transition:Be}=C,U=z==="input"||z==="option";if(U||Z!==-1){fe&&jt(C,null,$,"created");let K=!1;if(h(b)){K=ec(E,Be)&&$&&$.vnode.props&&$.vnode.props.appear;const le=b.content.firstChild;K&&Be.beforeEnter(le),I(le,b,$),C.el=b=le}if(W&16&&!(j&&(j.innerHTML||j.textContent))){let le=w(b.firstChild,C,b,$,E,F,N);for(;le;){ci=!0;const Le=le;le=le.nextSibling,f(Le)}}else W&8&&b.textContent!==C.children&&(ci=!0,b.textContent=C.children);if(j)if(U||!N||Z&48)for(const le in j)(U&&(le.endsWith("value")||le==="indeterminate")||pa(le)&&!jl(le)||le[0]===".")&&o(b,le,null,j[le],void 0,void 0,$);else j.onClick&&o(b,"onClick",null,j.onClick,void 0,void 0,$);let de;(de=j&&j.onVnodeBeforeMount)&&bt(de,$,C),fe&&jt(C,null,$,"beforeMount"),((de=j&&j.onVnodeMounted)||fe||K)&&ku(()=>{de&&bt(de,$,C),K&&Be.enter(b),fe&&jt(C,null,$,"mounted")},E)}return b.nextSibling},w=(b,C,$,E,F,N,z)=>{z=z||!!C.dynamicChildren;const j=C.children,Z=j.length;for(let W=0;W<Z;W++){const fe=z?j[W]:j[W]=kt(j[W]);if(b)b=m(b,fe,E,F,N,z);else{if(fe.type===Gi&&!fe.children)continue;ci=!0,a(null,fe,$,null,E,F,Ba($),N)}}return b},S=(b,C,$,E,F,N)=>{const{slotScopeIds:z}=C;z&&(F=F?F.concat(z):z);const j=d(b),Z=w(c(b),C,j,$,E,F,N);return Z&&$a(Z)&&Z.data==="]"?c(C.anchor=Z):(ci=!0,u(C.anchor=p("]"),j,Z),Z)},A=(b,C,$,E,F,N)=>{if(ci=!0,C.el=null,N){const Z=T(b);for(;;){const W=c(b);if(W&&W!==Z)f(W);else break}}const z=c(b),j=d(b);return f(b),a(null,C,j,z,$,E,Ba(j),F),z},T=(b,C="[",$="]")=>{let E=0;for(;b;)if(b=c(b),b&&$a(b)&&(b.data===C&&E++,b.data===$)){if(E===0)return c(b);E--}return b},I=(b,C,$)=>{const E=C.parentNode;E&&E.replaceChild(b,C);let F=$;for(;F;)F.vnode.el===C&&(F.vnode.el=F.subTree.el=b),F=F.parent},h=b=>b.nodeType===1&&b.tagName.toLowerCase()==="template";return[g,m]}const rt=ku;function Xu(e){return Zu(e)}function Qu(e){return Zu(e,Pm)}function Zu(e,i){const a=jr();a.__VUE__=!0;const{insert:o,remove:s,patchProp:c,createElement:d,createText:f,createComment:u,setText:p,setElementText:g,parentNode:m,nextSibling:_,setScopeId:w=vt,insertStaticContent:S}=e,A=(L,R,q,Q=null,ee=null,ne=null,ce=void 0,ae=null,se=!!R.dynamicChildren)=>{if(L===R)return;L&&!Ot(L,R)&&(Q=re(L),Ue(L,ee,ne,!0),L=null),R.patchFlag===-2&&(se=!1,R.dynamicChildren=null);const{type:ie,ref:pe,shapeFlag:ve}=R;switch(ie){case Gi:T(L,R,q,Q);break;case mt:I(L,R,q,Q);break;case Mi:L==null&&h(R,q,Q,ce);break;case Ce:W(L,R,q,Q,ee,ne,ce,ae,se);break;default:ve&1?$(L,R,q,Q,ee,ne,ce,ae,se):ve&6?fe(L,R,q,Q,ee,ne,ce,ae,se):(ve&64||ve&128)&&ie.process(L,R,q,Q,ee,ne,ce,ae,se,Ne)}pe!=null&&ee&&ja(pe,L&&L.ref,ne,R||L,!R)},T=(L,R,q,Q)=>{if(L==null)o(R.el=f(R.children),q,Q);else{const ee=R.el=L.el;R.children!==L.children&&p(ee,R.children)}},I=(L,R,q,Q)=>{L==null?o(R.el=u(R.children||""),q,Q):R.el=L.el},h=(L,R,q,Q)=>{[L.el,L.anchor]=S(L.children,R,q,Q,L.el,L.anchor)},b=({el:L,anchor:R},q,Q)=>{let ee;for(;L&&L!==R;)ee=_(L),o(L,q,Q),L=ee;o(R,q,Q)},C=({el:L,anchor:R})=>{let q;for(;L&&L!==R;)q=_(L),s(L),L=q;s(R)},$=(L,R,q,Q,ee,ne,ce,ae,se)=>{R.type==="svg"?ce="svg":R.type==="math"&&(ce="mathml"),L==null?E(R,q,Q,ee,ne,ce,ae,se):z(L,R,ee,ne,ce,ae,se)},E=(L,R,q,Q,ee,ne,ce,ae)=>{let se,ie;const{props:pe,shapeFlag:ve,transition:be,dirs:Ae}=L;if(se=L.el=d(L.type,ne,pe&&pe.is,pe),ve&8?g(se,L.children):ve&16&&N(L.children,se,null,Q,ee,In(L,ne),ce,ae),Ae&&jt(L,null,Q,"created"),F(se,L,L.scopeId,ce,Q),pe){for(const Ge in pe)Ge!=="value"&&!jl(Ge)&&c(se,Ge,null,pe[Ge],ne,L.children,Q,ee,ue);"value"in pe&&c(se,"value",null,pe.value,ne),(ie=pe.onVnodeBeforeMount)&&bt(ie,Q,L)}Ae&&jt(L,null,Q,"beforeMount");const De=ec(ee,be);De&&be.beforeEnter(se),o(se,R,q),((ie=pe&&pe.onVnodeMounted)||De||Ae)&&rt(()=>{ie&&bt(ie,Q,L),De&&be.enter(se),Ae&&jt(L,null,Q,"mounted")},ee)},F=(L,R,q,Q,ee)=>{if(q&&w(L,q),Q)for(let ne=0;ne<Q.length;ne++)w(L,Q[ne]);if(ee){let ne=ee.subTree;if(R===ne){const ce=ee.vnode;F(L,ce,ce.scopeId,ce.slotScopeIds,ee.parent)}}},N=(L,R,q,Q,ee,ne,ce,ae,se=0)=>{for(let ie=se;ie<L.length;ie++){const pe=L[ie]=ae?hi(L[ie]):kt(L[ie]);A(null,pe,R,q,Q,ee,ne,ce,ae)}},z=(L,R,q,Q,ee,ne,ce)=>{const ae=R.el=L.el;let{patchFlag:se,dynamicChildren:ie,dirs:pe}=R;se|=L.patchFlag&16;const ve=L.props||qe,be=R.props||qe;let Ae;if(q&&Bi(q,!1),(Ae=be.onVnodeBeforeUpdate)&&bt(Ae,q,R,L),pe&&jt(R,L,q,"beforeUpdate"),q&&Bi(q,!0),ie?j(L.dynamicChildren,ie,ae,q,Q,In(R,ee),ne):ce||le(L,R,ae,null,q,Q,In(R,ee),ne,!1),se>0){if(se&16)Z(ae,R,ve,be,q,Q,ee);else if(se&2&&ve.class!==be.class&&c(ae,"class",null,be.class,ee),se&4&&c(ae,"style",ve.style,be.style,ee),se&8){const De=R.dynamicProps;for(let Ge=0;Ge<De.length;Ge++){const We=De[Ge],nt=ve[We],Ht=be[We];(Ht!==nt||We==="value")&&c(ae,We,nt,Ht,ee,L.children,q,Q,ue)}}se&1&&L.children!==R.children&&g(ae,R.children)}else!ce&&ie==null&&Z(ae,R,ve,be,q,Q,ee);((Ae=be.onVnodeUpdated)||pe)&&rt(()=>{Ae&&bt(Ae,q,R,L),pe&&jt(R,L,q,"updated")},Q)},j=(L,R,q,Q,ee,ne,ce)=>{for(let ae=0;ae<R.length;ae++){const se=L[ae],ie=R[ae],pe=se.el&&(se.type===Ce||!Ot(se,ie)||se.shapeFlag&70)?m(se.el):q;A(se,ie,pe,null,Q,ee,ne,ce,!0)}},Z=(L,R,q,Q,ee,ne,ce)=>{if(q!==Q){if(q!==qe)for(const ae in q)!jl(ae)&&!(ae in Q)&&c(L,ae,q[ae],null,ce,R.children,ee,ne,ue);for(const ae in Q){if(jl(ae))continue;const se=Q[ae],ie=q[ae];se!==ie&&ae!=="value"&&c(L,ae,ie,se,ce,R.children,ee,ne,ue)}"value"in Q&&c(L,"value",q.value,Q.value,ce)}},W=(L,R,q,Q,ee,ne,ce,ae,se)=>{const ie=R.el=L?L.el:f(""),pe=R.anchor=L?L.anchor:f("");let{patchFlag:ve,dynamicChildren:be,slotScopeIds:Ae}=R;Ae&&(ae=ae?ae.concat(Ae):Ae),L==null?(o(ie,q,Q),o(pe,q,Q),N(R.children||[],q,pe,ee,ne,ce,ae,se)):ve>0&&ve&64&&be&&L.dynamicChildren?(j(L.dynamicChildren,be,q,ee,ne,ce,ae),(R.key!=null||ee&&R===ee.subTree)&&as(L,R,!0)):le(L,R,q,pe,ee,ne,ce,ae,se)},fe=(L,R,q,Q,ee,ne,ce,ae,se)=>{R.slotScopeIds=ae,L==null?R.shapeFlag&512?ee.ctx.activate(R,q,Q,ce,se):Be(R,q,Q,ee,ne,ce,se):U(L,R,se)},Be=(L,R,q,Q,ee,ne,ce)=>{const ae=L.component=sc(L,Q,ee);if(ha(L)&&(ae.ctx.renderer=Ne),uc(ae),ae.asyncDep){if(ee&&ee.registerDep(ae,K),!L.el){const se=ae.subTree=t(mt);I(null,se,R,q)}}else K(ae,L,R,q,ee,ne,ce)},U=(L,R,q)=>{const Q=R.component=L.component;if(Gp(L,R,q))if(Q.asyncDep&&!Q.asyncResolved){de(Q,R,q);return}else Q.next=R,Vp(Q.update),Q.effect.dirty=!0,Q.update();else R.el=L.el,Q.vnode=R},K=(L,R,q,Q,ee,ne,ce)=>{const ae=()=>{if(L.isMounted){let{next:pe,bu:ve,u:be,parent:Ae,vnode:De}=L;{const tl=tc(L);if(tl){pe&&(pe.el=De.el,de(L,pe,ce)),tl.asyncDep.then(()=>{L.isUnmounted||ae()});return}}let Ge=pe,We;Bi(L,!1),pe?(pe.el=De.el,de(L,pe,ce)):pe=De,ve&&ul(ve),(We=pe.props&&pe.props.onVnodeBeforeUpdate)&&bt(We,Ae,pe,De),Bi(L,!0);const nt=Pa(L),Ht=L.subTree;L.subTree=nt,A(Ht,nt,m(Ht.el),re(Ht),L,ee,ne),pe.el=nt.el,Ge===null&&Yo(L,nt.el),be&&rt(be,ee),(We=pe.props&&pe.props.onVnodeUpdated)&&rt(()=>bt(We,Ae,pe,De),ee)}else{let pe;const{el:ve,props:be}=R,{bm:Ae,m:De,parent:Ge}=L,We=Fi(R);if(Bi(L,!1),Ae&&ul(Ae),!We&&(pe=be&&be.onVnodeBeforeMount)&&bt(pe,Ge,R),Bi(L,!0),ve&&ke){const nt=()=>{L.subTree=Pa(L),ke(ve,L.subTree,L,ee,null)};We?R.type.__asyncLoader().then(()=>!L.isUnmounted&&nt()):nt()}else{const nt=L.subTree=Pa(L);A(null,nt,q,Q,L,ee,ne),R.el=nt.el}if(De&&rt(De,ee),!We&&(pe=be&&be.onVnodeMounted)){const nt=R;rt(()=>bt(pe,Ge,nt),ee)}(R.shapeFlag&256||Ge&&Fi(Ge.vnode)&&Ge.vnode.shapeFlag&256)&&L.a&&rt(L.a,ee),L.isMounted=!0,R=q=Q=null}},se=L.effect=new bl(ae,vt,()=>un(ie),L.scope),ie=L.update=()=>{se.dirty&&se.run()};ie.id=L.uid,Bi(L,!0),ie()},de=(L,R,q)=>{R.component=L;const Q=L.vnode.props;L.vnode=R,L.next=null,Tm(L,R.props,Q,q),Im(L,R.children,q),Wi(),Fs(L),Ki()},le=(L,R,q,Q,ee,ne,ce,ae,se=!1)=>{const ie=L&&L.children,pe=L?L.shapeFlag:0,ve=R.children,{patchFlag:be,shapeFlag:Ae}=R;if(be>0){if(be&128){Je(ie,ve,q,Q,ee,ne,ce,ae,se);return}else if(be&256){Le(ie,ve,q,Q,ee,ne,ce,ae,se);return}}Ae&8?(pe&16&&ue(ie,ee,ne),ve!==ie&&g(q,ve)):pe&16?Ae&16?Je(ie,ve,q,Q,ee,ne,ce,ae,se):ue(ie,ee,ne,!0):(pe&8&&g(q,""),Ae&16&&N(ve,q,Q,ee,ne,ce,ae,se))},Le=(L,R,q,Q,ee,ne,ce,ae,se)=>{L=L||sl,R=R||sl;const ie=L.length,pe=R.length,ve=Math.min(ie,pe);let be;for(be=0;be<ve;be++){const Ae=R[be]=se?hi(R[be]):kt(R[be]);A(L[be],Ae,q,null,ee,ne,ce,ae,se)}ie>pe?ue(L,ee,ne,!0,!1,ve):N(R,q,Q,ee,ne,ce,ae,se,ve)},Je=(L,R,q,Q,ee,ne,ce,ae,se)=>{let ie=0;const pe=R.length;let ve=L.length-1,be=pe-1;for(;ie<=ve&&ie<=be;){const Ae=L[ie],De=R[ie]=se?hi(R[ie]):kt(R[ie]);if(Ot(Ae,De))A(Ae,De,q,null,ee,ne,ce,ae,se);else break;ie++}for(;ie<=ve&&ie<=be;){const Ae=L[ve],De=R[be]=se?hi(R[be]):kt(R[be]);if(Ot(Ae,De))A(Ae,De,q,null,ee,ne,ce,ae,se);else break;ve--,be--}if(ie>ve){if(ie<=be){const Ae=be+1,De=Ae<pe?R[Ae].el:Q;for(;ie<=be;)A(null,R[ie]=se?hi(R[ie]):kt(R[ie]),q,De,ee,ne,ce,ae,se),ie++}}else if(ie>be)for(;ie<=ve;)Ue(L[ie],ee,ne,!0),ie++;else{const Ae=ie,De=ie,Ge=new Map;for(ie=De;ie<=be;ie++){const At=R[ie]=se?hi(R[ie]):kt(R[ie]);At.key!=null&&Ge.set(At.key,ie)}let We,nt=0;const Ht=be-De+1;let tl=!1,ks=0;const Rl=new Array(Ht);for(ie=0;ie<Ht;ie++)Rl[ie]=0;for(ie=Ae;ie<=ve;ie++){const At=L[ie];if(nt>=Ht){Ue(At,ee,ne,!0);continue}let Gt;if(At.key!=null)Gt=Ge.get(At.key);else for(We=De;We<=be;We++)if(Rl[We-De]===0&&Ot(At,R[We])){Gt=We;break}Gt===void 0?Ue(At,ee,ne,!0):(Rl[Gt-De]=ie+1,Gt>=ks?ks=Gt:tl=!0,A(At,R[Gt],q,null,ee,ne,ce,ae,se),nt++)}const Bs=tl?zm(Rl):sl;for(We=Bs.length-1,ie=Ht-1;ie>=0;ie--){const At=De+ie,Gt=R[At],$s=At+1<pe?R[At+1].el:Q;Rl[ie]===0?A(null,Gt,q,$s,ee,ne,ce,ae,se):tl&&(We<0||ie!==Bs[We]?at(Gt,q,$s,2):We--)}}},at=(L,R,q,Q,ee=null)=>{const{el:ne,type:ce,transition:ae,children:se,shapeFlag:ie}=L;if(ie&6){at(L.component.subTree,R,q,Q);return}if(ie&128){L.suspense.move(R,q,Q);return}if(ie&64){ce.move(L,R,q,Ne);return}if(ce===Ce){o(ne,R,q);for(let ve=0;ve<se.length;ve++)at(se[ve],R,q,Q);o(L.anchor,R,q);return}if(ce===Mi){b(L,R,q);return}if(Q!==2&&ie&1&&ae)if(Q===0)ae.beforeEnter(ne),o(ne,R,q),rt(()=>ae.enter(ne),ee);else{const{leave:ve,delayLeave:be,afterLeave:Ae}=ae,De=()=>o(ne,R,q),Ge=()=>{ve(ne,()=>{De(),Ae&&Ae()})};be?be(ne,De,Ge):Ge()}else o(ne,R,q)},Ue=(L,R,q,Q=!1,ee=!1)=>{const{type:ne,props:ce,ref:ae,children:se,dynamicChildren:ie,shapeFlag:pe,patchFlag:ve,dirs:be}=L;if(ae!=null&&ja(ae,null,q,L,!0),pe&256){R.ctx.deactivate(L);return}const Ae=pe&1&&be,De=!Fi(L);let Ge;if(De&&(Ge=ce&&ce.onVnodeBeforeUnmount)&&bt(Ge,R,L),pe&6)J(L.component,q,Q);else{if(pe&128){L.suspense.unmount(q,Q);return}Ae&&jt(L,null,R,"beforeUnmount"),pe&64?L.type.remove(L,R,q,ee,Ne,Q):ie&&(ne!==Ce||ve>0&&ve&64)?ue(ie,R,q,!1,!0):(ne===Ce&&ve&384||!ee&&pe&16)&&ue(se,R,q),Q&&Xt(L)}(De&&(Ge=ce&&ce.onVnodeUnmounted)||Ae)&&rt(()=>{Ge&&bt(Ge,R,L),Ae&&jt(L,null,R,"unmounted")},q)},Xt=L=>{const{type:R,el:q,anchor:Q,transition:ee}=L;if(R===Ce){Pt(q,Q);return}if(R===Mi){C(L);return}const ne=()=>{s(q),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(L.shapeFlag&1&&ee&&!ee.persisted){const{leave:ce,delayLeave:ae}=ee,se=()=>ce(q,ne);ae?ae(L.el,ne,se):se()}else ne()},Pt=(L,R)=>{let q;for(;L!==R;)q=_(L),s(L),L=q;s(R)},J=(L,R,q)=>{const{bum:Q,scope:ee,update:ne,subTree:ce,um:ae}=L;Q&&ul(Q),ee.stop(),ne&&(ne.active=!1,Ue(ce,L,R,q)),ae&&rt(ae,R),rt(()=>{L.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&L.asyncDep&&!L.asyncResolved&&L.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},ue=(L,R,q,Q=!1,ee=!1,ne=0)=>{for(let ce=ne;ce<L.length;ce++)Ue(L[ce],R,q,Q,ee)},re=L=>L.shapeFlag&6?re(L.component.subTree):L.shapeFlag&128?L.suspense.next():_(L.anchor||L.el);let he=!1;const Me=(L,R,q)=>{L==null?R._vnode&&Ue(R._vnode,null,null,!0):A(R._vnode||null,L,R,null,null,null,q),he||(he=!0,Fs(),qa(),he=!1),R._vnode=L},Ne={p:A,um:Ue,m:at,r:Xt,mt:Be,mc:N,pc:le,pbc:j,n:re,o:e};let xe,ke;return i&&([xe,ke]=i(Ne)),{render:Me,hydrate:xe,createApp:km(Me,xe)}}function In({type:e,props:i},a){return a==="svg"&&e==="foreignObject"||a==="mathml"&&e==="annotation-xml"&&i&&i.encoding&&i.encoding.includes("html")?void 0:a}function Bi({effect:e,update:i},a){e.allowRecurse=i.allowRecurse=a}function ec(e,i){return(!e||e&&!e.pendingBranch)&&i&&!i.persisted}function as(e,i,a=!1){const o=e.children,s=i.children;if(ge(o)&&ge(s))for(let c=0;c<o.length;c++){const d=o[c];let f=s[c];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=s[c]=hi(s[c]),f.el=d.el),a||as(d,f)),f.type===Gi&&(f.el=d.el)}}function zm(e){const i=e.slice(),a=[0];let o,s,c,d,f;const u=e.length;for(o=0;o<u;o++){const p=e[o];if(p!==0){if(s=a[a.length-1],e[s]<p){i[o]=s,a.push(o);continue}for(c=0,d=a.length-1;c<d;)f=c+d>>1,e[a[f]]<p?c=f+1:d=f;p<e[a[c]]&&(c>0&&(i[o]=a[c-1]),a[c]=o)}}for(c=a.length,d=a[c-1];c-- >0;)a[c]=d,d=i[d];return a}function tc(e){const i=e.subTree.component;if(i)return i.asyncDep&&!i.asyncResolved?i:tc(i)}const Vm=e=>e.__isTeleport,Jl=e=>e&&(e.disabled||e.disabled===""),Ks=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Xs=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,oo=(e,i)=>{const a=e&&e.to;return Xe(a)?i?i(a):null:a},Fm={name:"Teleport",__isTeleport:!0,process(e,i,a,o,s,c,d,f,u,p){const{mc:g,pc:m,pbc:_,o:{insert:w,querySelector:S,createText:A,createComment:T}}=p,I=Jl(i.props);let{shapeFlag:h,children:b,dynamicChildren:C}=i;if(e==null){const $=i.el=A(""),E=i.anchor=A("");w($,a,o),w(E,a,o);const F=i.target=oo(i.props,S),N=i.targetAnchor=A("");F&&(w(N,F),d==="svg"||Ks(F)?d="svg":(d==="mathml"||Xs(F))&&(d="mathml"));const z=(j,Z)=>{h&16&&g(b,j,Z,s,c,d,f,u)};I?z(a,E):F&&z(F,N)}else{i.el=e.el;const $=i.anchor=e.anchor,E=i.target=e.target,F=i.targetAnchor=e.targetAnchor,N=Jl(e.props),z=N?a:E,j=N?$:F;if(d==="svg"||Ks(E)?d="svg":(d==="mathml"||Xs(E))&&(d="mathml"),C?(_(e.dynamicChildren,C,z,s,c,d,f),as(e,i,!0)):u||m(e,i,z,j,s,c,d,f,!1),I)N?i.props&&e.props&&i.props.to!==e.props.to&&(i.props.to=e.props.to):Ta(i,a,$,p,1);else if((i.props&&i.props.to)!==(e.props&&e.props.to)){const Z=i.target=oo(i.props,S);Z&&Ta(i,Z,null,p,0)}else N&&Ta(i,E,F,p,1)}ic(i)},remove(e,i,a,o,{um:s,o:{remove:c}},d){const{shapeFlag:f,children:u,anchor:p,targetAnchor:g,target:m,props:_}=e;if(m&&c(g),d&&c(p),f&16){const w=d||!Jl(_);for(let S=0;S<u.length;S++){const A=u[S];s(A,i,a,w,!!A.dynamicChildren)}}},move:Ta,hydrate:Mm};function Ta(e,i,a,{o:{insert:o},m:s},c=2){c===0&&o(e.targetAnchor,i,a);const{el:d,anchor:f,shapeFlag:u,children:p,props:g}=e,m=c===2;if(m&&o(d,i,a),(!m||Jl(g))&&u&16)for(let _=0;_<p.length;_++)s(p[_],i,a,2);m&&o(f,i,a)}function Mm(e,i,a,o,s,c,{o:{nextSibling:d,parentNode:f,querySelector:u}},p){const g=i.target=oo(i.props,u);if(g){const m=g._lpa||g.firstChild;if(i.shapeFlag&16)if(Jl(i.props))i.anchor=p(d(e),i,f(e),a,o,s,c),i.targetAnchor=m;else{i.anchor=d(e);let _=m;for(;_;)if(_=d(_),_&&_.nodeType===8&&_.data==="teleport anchor"){i.targetAnchor=_,g._lpa=i.targetAnchor&&d(i.targetAnchor);break}p(m,i,g,a,o,s,c)}ic(i)}return i.anchor&&d(i.anchor)}const _n=Fm;function ic(e){const i=e.ctx;if(i&&i.ut){let a=e.children[0].el;for(;a&&a!==e.targetAnchor;)a.nodeType===1&&a.setAttribute("data-v-owner",i.uid),a=a.nextSibling;i.ut()}}const Ce=Symbol.for("v-fgt"),Gi=Symbol.for("v-txt"),mt=Symbol.for("v-cmt"),Mi=Symbol.for("v-stc"),Wl=[];let St=null;function y(e=!1){Wl.push(St=e?null:[])}function lc(){Wl.pop(),St=Wl[Wl.length-1]||null}let ji=1;function so(e){ji+=e}function ac(e){return e.dynamicChildren=ji>0?St||sl:null,lc(),ji>0&&St&&St.push(e),e}function ye(e,i,a,o,s,c){return ac(k(e,i,a,o,s,c,!0))}function x(e,i,a,o,s){return ac(t(e,i,a,o,s,!0))}function Ct(e){return e?e.__v_isVNode===!0:!1}function Ot(e,i){return e.type===i.type&&e.key===i.key}function Nm(e){}const bn="__vInternal",nc=({key:e})=>e??null,za=({ref:e,ref_key:i,ref_for:a})=>(typeof e=="number"&&(e=""+e),e!=null?Xe(e)||ct(e)||we(e)?{i:tt,r:e,k:i,f:!!a}:e:null);function k(e,i=null,a=null,o=0,s=null,c=e===Ce?0:1,d=!1,f=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:i,key:i&&nc(i),ref:i&&za(i),scopeId:dn,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:c,patchFlag:o,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:tt};return f?(os(u,a),c&128&&e.normalize(u)):a&&(u.shapeFlag|=Xe(a)?8:16),ji>0&&!d&&St&&(u.patchFlag>0||c&6)&&u.patchFlag!==32&&St.push(u),u}const t=Hm;function Hm(e,i=null,a=null,o=0,s=null,c=!1){if((!e||e===Cu)&&(e=mt),Ct(e)){const f=Wt(e,i,!0);return a&&os(f,a),ji>0&&!c&&St&&(f.shapeFlag&6?St[St.indexOf(e)]=f:St.push(f)),f.patchFlag|=-2,f}if(Wm(e)&&(e=e.__vccOpts),i){i=oc(i);let{class:f,style:u}=i;f&&!Xe(f)&&(i.class=fa(f)),je(u)&&(Ho(u)&&!ge(u)&&(u=Ke({},u)),i.style=kl(u))}const d=Xe(e)?1:xu(e)?128:Vm(e)?64:je(e)?4:we(e)?2:0;return k(e,i,a,o,s,d,c,!0)}function oc(e){return e?Ho(e)||bn in e?Ke({},e):e:null}function Wt(e,i,a=!1){const{props:o,ref:s,patchFlag:c,children:d}=e,f=i?Zi(o||{},i):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&nc(f),ref:i&&i.ref?a&&s?ge(s)?s.concat(za(i)):[s,za(i)]:za(i):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:d,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:i&&e.type!==Ce?c===-1?16:c|16:c,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Wt(e.ssContent),ssFallback:e.ssFallback&&Wt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function n(e=" ",i=0){return t(Gi,null,e,i)}function Om(e,i){const a=t(Mi,null,e);return a.staticCount=i,a}function ns(e="",i=!1){return i?(y(),x(mt,null,e)):t(mt,null,e)}function kt(e){return e==null||typeof e=="boolean"?t(mt):ge(e)?t(Ce,null,e.slice()):typeof e=="object"?hi(e):t(Gi,null,String(e))}function hi(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Wt(e)}function os(e,i){let a=0;const{shapeFlag:o}=e;if(i==null)i=null;else if(ge(i))a=16;else if(typeof i=="object")if(o&65){const s=i.default;s&&(s._c&&(s._d=!1),os(e,s()),s._c&&(s._d=!0));return}else{a=32;const s=i._;!s&&!(bn in i)?i._ctx=tt:s===3&&tt&&(tt.slots._===1?i._=1:(i._=2,e.patchFlag|=1024))}else we(i)?(i={default:i,_ctx:tt},a=32):(i=String(i),o&64?(a=16,i=[n(i)]):a=8);e.children=i,e.shapeFlag|=a}function Zi(...e){const i={};for(let a=0;a<e.length;a++){const o=e[a];for(const s in o)if(s==="class")i.class!==o.class&&(i.class=fa([i.class,o.class]));else if(s==="style")i.style=kl([i.style,o.style]);else if(pa(s)){const c=i[s],d=o[s];d&&c!==d&&!(ge(c)&&c.includes(d))&&(i[s]=c?[].concat(c,d):d)}else s!==""&&(i[s]=o[s])}return i}function bt(e,i,a,o=null){Dt(e,i,7,[a,o])}const qm=ju();let Gm=0;function sc(e,i,a){const o=e.type,s=(i?i.appContext:e.appContext)||qm,c={uid:Gm++,vnode:e,type:o,parent:i,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Po(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:i?i.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yu(o,s),emitsOptions:Su(o,s),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:o.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return c.ctx={_:c},c.root=i?i.root:c,c.emit=Mp.bind(null,c),e.ce&&e.ce(c),c}let lt=null;const Kt=()=>lt||tt;let Ua,ro;{const e=jr(),i=(a,o)=>{let s;return(s=e[a])||(s=e[a]=[]),s.push(o),c=>{s.length>1?s.forEach(d=>d(c)):s[0](c)}};Ua=i("__VUE_INSTANCE_SETTERS__",a=>lt=a),ro=i("__VUE_SSR_SETTERS__",a=>_a=a)}const Ui=e=>{const i=lt;return Ua(e),e.scope.on(),()=>{e.scope.off(),Ua(i)}},uo=()=>{lt&&lt.scope.off(),Ua(null)};function rc(e){return e.vnode.shapeFlag&4}let _a=!1;function uc(e,i=!1){i&&ro(i);const{props:a,children:o}=e.vnode,s=rc(e);$m(e,a,s,i),Dm(e,o);const c=s?jm(e,i):void 0;return i&&ro(!1),c}function jm(e,i){const a=e.type;e.accessCache=Object.create(null),e.proxy=Oo(new Proxy(e.ctx,io));const{setup:o}=a;if(o){const s=e.setupContext=o.length>1?dc(e):null,c=Ui(e);Wi();const d=li(o,e,0,[e.props,s]);if(Ki(),c(),Eo(d)){if(d.then(uo,uo),i)return d.then(f=>{co(e,f,i)}).catch(f=>{Xi(f,e,0)});e.asyncDep=d}else co(e,d,i)}else cc(e,i)}function co(e,i,a){we(i)?e.type.__ssrInlineRender?e.ssrRender=i:e.render=i:je(i)&&(e.setupState=jo(i)),cc(e,a)}let Ya,po;function Um(e){Ya=e,po=i=>{i.render._rc&&(i.withProxy=new Proxy(i.ctx,sm))}}const Ym=()=>!Ya;function cc(e,i,a){const o=e.type;if(!e.render){if(!i&&Ya&&!o.render){const s=o.template||is(e).template;if(s){const{isCustomElement:c,compilerOptions:d}=e.appContext.config,{delimiters:f,compilerOptions:u}=o,p=Ke(Ke({isCustomElement:c,delimiters:f},d),u);o.render=Ya(s,p)}}e.render=o.render||vt,po&&po(e)}{const s=Ui(e);Wi();try{Sm(e)}finally{Ki(),s()}}}function Jm(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(i,a){return wt(e,"get","$attrs"),i[a]}}))}function dc(e){const i=a=>{e.exposed=a||{}};return{get attrs(){return Jm(e)},slots:e.slots,emit:e.emit,expose:i}}function vn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(jo(Oo(e.exposed)),{get(i,a){if(a in i)return i[a];if(a in Yl)return Yl[a](e)},has(i,a){return a in i||a in Yl}}))}function mo(e,i=!0){return we(e)?e.displayName||e.name:e.name||i&&e.__name}function Wm(e){return we(e)&&"__vccOpts"in e}const M=(e,i)=>yp(e,i,_a);function Km(e,i,a=qe){const o=Kt(),s=_t(i),c=$t(i),d=fu((u,p)=>{let g;return Lu(()=>{const m=e[i];qt(g,m)&&(g=m,p())}),{get(){return u(),a.get?a.get(g):g},set(m){const _=o.vnode.props;!(_&&(i in _||s in _||c in _)&&(`onUpdate:${i}`in _||`onUpdate:${s}`in _||`onUpdate:${c}`in _))&&qt(m,g)&&(g=m,p()),o.emit(`update:${i}`,a.set?a.set(m):m)}}}),f=i==="modelValue"?"modelModifiers":`${i}Modifiers`;return d[Symbol.iterator]=()=>{let u=0;return{next(){return u<2?{value:u++?e[f]||{}:d,done:!1}:{done:!0}}}},d}function X(e,i,a){const o=arguments.length;return o===2?je(i)&&!ge(i)?Ct(i)?t(e,null,[i]):t(e,i):t(e,null,i):(o>3?a=Array.prototype.slice.call(arguments,2):o===3&&Ct(a)&&(a=[a]),t(e,i,a))}function Xm(){}function Qm(e,i,a,o){const s=a[o];if(s&&pc(s,e))return s;const c=i();return c.memo=e.slice(),a[o]=c}function pc(e,i){const a=e.memo;if(a.length!=i.length)return!1;for(let o=0;o<a.length;o++)if(qt(a[o],i[o]))return!1;return ji>0&&St&&St.push(e),!0}const mc="3.4.15",Zm=vt,ef=Rp,tf=al,lf=vu,af={createComponentInstance:sc,setupComponent:uc,renderComponentRoot:Pa,setCurrentRenderingInstance:na,isVNode:Ct,normalizeVNode:kt},nf=af,of=null,sf=null,rf=null;/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const uf="http://www.w3.org/2000/svg",cf="http://www.w3.org/1998/Math/MathML",_i=typeof document<"u"?document:null,Qs=_i&&_i.createElement("template"),df={insert:(e,i,a)=>{i.insertBefore(e,a||null)},remove:e=>{const i=e.parentNode;i&&i.removeChild(e)},createElement:(e,i,a,o)=>{const s=i==="svg"?_i.createElementNS(uf,e):i==="mathml"?_i.createElementNS(cf,e):_i.createElement(e,a?{is:a}:void 0);return e==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:e=>_i.createTextNode(e),createComment:e=>_i.createComment(e),setText:(e,i)=>{e.nodeValue=i},setElementText:(e,i)=>{e.textContent=i},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>_i.querySelector(e),setScopeId(e,i){e.setAttribute(i,"")},insertStaticContent(e,i,a,o,s,c){const d=a?a.previousSibling:i.lastChild;if(s&&(s===c||s.nextSibling))for(;i.insertBefore(s.cloneNode(!0),a),!(s===c||!(s=s.nextSibling)););else{Qs.innerHTML=o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e;const f=Qs.content;if(o==="svg"||o==="mathml"){const u=f.firstChild;for(;u.firstChild;)f.appendChild(u.firstChild);f.removeChild(u)}i.insertBefore(f,a)}return[d?d.nextSibling:i.firstChild,a?a.previousSibling:i.lastChild]}},di="transition",Pl="animation",Sl=Symbol("_vtc"),Sn=(e,{slots:i})=>X(Iu,gc(e),i);Sn.displayName="Transition";const fc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},pf=Sn.props=Ke({},Zo,fc),$i=(e,i=[])=>{ge(e)?e.forEach(a=>a(...i)):e&&e(...i)},Zs=e=>e?ge(e)?e.some(i=>i.length>1):e.length>1:!1;function gc(e){const i={};for(const W in e)W in fc||(i[W]=e[W]);if(e.css===!1)return i;const{name:a="v",type:o,duration:s,enterFromClass:c=`${a}-enter-from`,enterActiveClass:d=`${a}-enter-active`,enterToClass:f=`${a}-enter-to`,appearFromClass:u=c,appearActiveClass:p=d,appearToClass:g=f,leaveFromClass:m=`${a}-leave-from`,leaveActiveClass:_=`${a}-leave-active`,leaveToClass:w=`${a}-leave-to`}=e,S=mf(s),A=S&&S[0],T=S&&S[1],{onBeforeEnter:I,onEnter:h,onEnterCancelled:b,onLeave:C,onLeaveCancelled:$,onBeforeAppear:E=I,onAppear:F=h,onAppearCancelled:N=b}=i,z=(W,fe,Be)=>{mi(W,fe?g:f),mi(W,fe?p:d),Be&&Be()},j=(W,fe)=>{W._isLeaving=!1,mi(W,m),mi(W,w),mi(W,_),fe&&fe()},Z=W=>(fe,Be)=>{const U=W?F:h,K=()=>z(fe,W,Be);$i(U,[fe,K]),er(()=>{mi(fe,W?u:c),Zt(fe,W?g:f),Zs(U)||tr(fe,o,A,K)})};return Ke(i,{onBeforeEnter(W){$i(I,[W]),Zt(W,c),Zt(W,d)},onBeforeAppear(W){$i(E,[W]),Zt(W,u),Zt(W,p)},onEnter:Z(!1),onAppear:Z(!0),onLeave(W,fe){W._isLeaving=!0;const Be=()=>j(W,fe);Zt(W,m),_c(),Zt(W,_),er(()=>{W._isLeaving&&(mi(W,m),Zt(W,w),Zs(C)||tr(W,o,T,Be))}),$i(C,[W,Be])},onEnterCancelled(W){z(W,!1),$i(b,[W])},onAppearCancelled(W){z(W,!0),$i(N,[W])},onLeaveCancelled(W){j(W),$i($,[W])}})}function mf(e){if(e==null)return null;if(je(e))return[En(e.enter),En(e.leave)];{const i=En(e);return[i,i]}}function En(e){return Na(e)}function Zt(e,i){i.split(/\s+/).forEach(a=>a&&e.classList.add(a)),(e[Sl]||(e[Sl]=new Set)).add(i)}function mi(e,i){i.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const a=e[Sl];a&&(a.delete(i),a.size||(e[Sl]=void 0))}function er(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ff=0;function tr(e,i,a,o){const s=e._endId=++ff,c=()=>{s===e._endId&&o()};if(a)return setTimeout(c,a);const{type:d,timeout:f,propCount:u}=hc(e,i);if(!d)return o();const p=d+"end";let g=0;const m=()=>{e.removeEventListener(p,_),c()},_=w=>{w.target===e&&++g>=u&&m()};setTimeout(()=>{g<u&&m()},f+1),e.addEventListener(p,_)}function hc(e,i){const a=window.getComputedStyle(e),o=S=>(a[S]||"").split(", "),s=o(`${di}Delay`),c=o(`${di}Duration`),d=ir(s,c),f=o(`${Pl}Delay`),u=o(`${Pl}Duration`),p=ir(f,u);let g=null,m=0,_=0;i===di?d>0&&(g=di,m=d,_=c.length):i===Pl?p>0&&(g=Pl,m=p,_=u.length):(m=Math.max(d,p),g=m>0?d>p?di:Pl:null,_=g?g===di?c.length:u.length:0);const w=g===di&&/\b(transform|all)(,|$)/.test(o(`${di}Property`).toString());return{type:g,timeout:m,propCount:_,hasTransform:w}}function ir(e,i){for(;e.length<i.length;)e=e.concat(e);return Math.max(...i.map((a,o)=>lr(a)+lr(e[o])))}function lr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function _c(){return document.body.offsetHeight}function gf(e,i,a){const o=e[Sl];o&&(i=(i?[i,...o]:[...o]).join(" ")),i==null?e.removeAttribute("class"):a?e.setAttribute("class",i):e.className=i}const ss=Symbol("_vod"),bc={beforeMount(e,{value:i},{transition:a}){e[ss]=e.style.display==="none"?"":e.style.display,a&&i?a.beforeEnter(e):zl(e,i)},mounted(e,{value:i},{transition:a}){a&&i&&a.enter(e)},updated(e,{value:i,oldValue:a},{transition:o}){!i!=!a&&(o?i?(o.beforeEnter(e),zl(e,!0),o.enter(e)):o.leave(e,()=>{zl(e,!1)}):zl(e,i))},beforeUnmount(e,{value:i}){zl(e,i)}};function zl(e,i){e.style.display=i?e[ss]:"none"}function hf(){bc.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const vc=Symbol("");function _f(e){const i=Kt();if(!i)return;const a=i.ut=(s=e(i.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${i.uid}"]`)).forEach(c=>go(c,s))},o=()=>{const s=e(i.proxy);fo(i.subTree,s),a(s)};Tu(o),Ai(()=>{const s=new MutationObserver(o);s.observe(i.subTree.el.parentNode,{childList:!0}),Qi(()=>s.disconnect())})}function fo(e,i){if(e.shapeFlag&128){const a=e.suspense;e=a.activeBranch,a.pendingBranch&&!a.isHydrating&&a.effects.push(()=>{fo(a.activeBranch,i)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)go(e.el,i);else if(e.type===Ce)e.children.forEach(a=>fo(a,i));else if(e.type===Mi){let{el:a,anchor:o}=e;for(;a&&(go(a,i),a!==o);)a=a.nextSibling}}function go(e,i){if(e.nodeType===1){const a=e.style;let o="";for(const s in i)a.setProperty(`--${s}`,i[s]),o+=`--${s}: ${i[s]};`;a[vc]=o}}function bf(e,i,a){const o=e.style,s=o.display,c=Xe(a);if(a&&!c){if(i&&!Xe(i))for(const d in i)a[d]==null&&ho(o,d,"");for(const d in a)ho(o,d,a[d])}else if(c){if(i!==a){const d=o[vc];d&&(a+=";"+d),o.cssText=a}}else i&&e.removeAttribute("style");ss in e&&(o.display=s)}const ar=/\s*!important$/;function ho(e,i,a){if(ge(a))a.forEach(o=>ho(e,i,o));else if(a==null&&(a=""),i.startsWith("--"))e.setProperty(i,a);else{const o=vf(e,i);ar.test(a)?e.setProperty($t(o),a.replace(ar,""),"important"):e[o]=a}}const nr=["Webkit","Moz","ms"],Rn={};function vf(e,i){const a=Rn[i];if(a)return a;let o=_t(i);if(o!=="filter"&&o in e)return Rn[i]=o;o=ma(o);for(let s=0;s<nr.length;s++){const c=nr[s]+o;if(c in e)return Rn[i]=c}return i}const or="http://www.w3.org/1999/xlink";function Sf(e,i,a,o,s){if(o&&i.startsWith("xlink:"))a==null?e.removeAttributeNS(or,i.slice(6,i.length)):e.setAttributeNS(or,i,a);else{const c=Wd(i);a==null||c&&!Ur(a)?e.removeAttribute(i):e.setAttribute(i,c?"":a)}}function yf(e,i,a,o,s,c,d){if(i==="innerHTML"||i==="textContent"){o&&d(o,s,c),e[i]=a??"";return}const f=e.tagName;if(i==="value"&&f!=="PROGRESS"&&!f.includes("-")){e._value=a;const p=f==="OPTION"?e.getAttribute("value"):e.value,g=a??"";p!==g&&(e.value=g),a==null&&e.removeAttribute(i);return}let u=!1;if(a===""||a==null){const p=typeof e[i];p==="boolean"?a=Ur(a):a==null&&p==="string"?(a="",u=!0):p==="number"&&(a=0,u=!0)}try{e[i]=a}catch{}u&&e.removeAttribute(i)}function ti(e,i,a,o){e.addEventListener(i,a,o)}function wf(e,i,a,o){e.removeEventListener(i,a,o)}const sr=Symbol("_vei");function Cf(e,i,a,o,s=null){const c=e[sr]||(e[sr]={}),d=c[i];if(o&&d)d.value=o;else{const[f,u]=Af(i);if(o){const p=c[i]=Bf(o,s);ti(e,f,p,u)}else d&&(wf(e,f,d,u),c[i]=void 0)}}const rr=/(?:Once|Passive|Capture)$/;function Af(e){let i;if(rr.test(e)){i={};let o;for(;o=e.match(rr);)e=e.slice(0,e.length-o[0].length),i[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$t(e.slice(2)),i]}let Pn=0;const xf=Promise.resolve(),kf=()=>Pn||(xf.then(()=>Pn=0),Pn=Date.now());function Bf(e,i){const a=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=a.attached)return;Dt($f(o,a.value),i,5,[o])};return a.value=e,a.attached=kf(),a}function $f(e,i){if(ge(i)){const a=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{a.call(e),e._stopped=!0},i.map(o=>s=>!s._stopped&&o&&o(s))}else return i}const ur=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Tf=(e,i,a,o,s,c,d,f,u)=>{const p=s==="svg";i==="class"?gf(e,o,p):i==="style"?bf(e,a,o):pa(i)?Do(i)||Cf(e,i,a,o,d):(i[0]==="."?(i=i.slice(1),!0):i[0]==="^"?(i=i.slice(1),!1):Lf(e,i,o,p))?yf(e,i,o,c,d,f,u):(i==="true-value"?e._trueValue=o:i==="false-value"&&(e._falseValue=o),Sf(e,i,o,p))};function Lf(e,i,a,o){if(o)return!!(i==="innerHTML"||i==="textContent"||i in e&&ur(i)&&we(a));if(i==="spellcheck"||i==="draggable"||i==="translate"||i==="form"||i==="list"&&e.tagName==="INPUT"||i==="type"&&e.tagName==="TEXTAREA")return!1;if(i==="width"||i==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ur(i)&&Xe(a)?!1:i in e}/*! #__NO_SIDE_EFFECTS__ */function Sc(e,i){const a=V(e);class o extends yn{constructor(c){super(a,c,i)}}return o.def=a,o}/*! #__NO_SIDE_EFFECTS__ */const Df=e=>Sc(e,Ic),If=typeof HTMLElement<"u"?HTMLElement:class{};class yn extends If{constructor(i,a={},o){super(),this._def=i,this._props=a,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&o?o(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),Bl(()=>{this._connected||(Ka(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let o=0;o<this.attributes.length;o++)this._setAttr(this.attributes[o].name);this._ob=new MutationObserver(o=>{for(const s of o)this._setAttr(s.attributeName)}),this._ob.observe(this,{attributes:!0});const i=(o,s=!1)=>{const{props:c,styles:d}=o;let f;if(c&&!ge(c))for(const u in c){const p=c[u];(p===Number||p&&p.type===Number)&&(u in this._props&&(this._props[u]=Na(this._props[u])),(f||(f=Object.create(null)))[_t(u)]=!0)}this._numberProps=f,s&&this._resolveProps(o),this._applyStyles(d),this._update()},a=this._def.__asyncLoader;a?a().then(o=>i(o,!0)):i(this._def)}_resolveProps(i){const{props:a}=i,o=ge(a)?a:Object.keys(a||{});for(const s of Object.keys(this))s[0]!=="_"&&o.includes(s)&&this._setProp(s,this[s],!0,!1);for(const s of o.map(_t))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(c){this._setProp(s,c)}})}_setAttr(i){let a=this.getAttribute(i);const o=_t(i);this._numberProps&&this._numberProps[o]&&(a=Na(a)),this._setProp(o,a,!1)}_getProp(i){return this._props[i]}_setProp(i,a,o=!0,s=!0){a!==this._props[i]&&(this._props[i]=a,s&&this._instance&&this._update(),o&&(a===!0?this.setAttribute($t(i),""):typeof a=="string"||typeof a=="number"?this.setAttribute($t(i),a+""):a||this.removeAttribute($t(i))))}_update(){Ka(this._createVNode(),this.shadowRoot)}_createVNode(){const i=t(this._def,Ke({},this._props));return this._instance||(i.ce=a=>{this._instance=a,a.isCE=!0;const o=(c,d)=>{this.dispatchEvent(new CustomEvent(c,{detail:d}))};a.emit=(c,...d)=>{o(c,d),$t(c)!==c&&o($t(c),d)};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof yn){a.parent=s._instance,a.provides=s._instance.provides;break}}),i}_applyStyles(i){i&&i.forEach(a=>{const o=document.createElement("style");o.textContent=a,this.shadowRoot.appendChild(o)})}}function Ef(e="$style"){{const i=Kt();if(!i)return qe;const a=i.type.__cssModules;if(!a)return qe;const o=a[e];return o||qe}}const yc=new WeakMap,wc=new WeakMap,Ja=Symbol("_moveCb"),cr=Symbol("_enterCb"),Cc={name:"TransitionGroup",props:Ke({},pf,{tag:String,moveClass:String}),setup(e,{slots:i}){const a=Kt(),o=Qo();let s,c;return gn(()=>{if(!s.length)return;const d=e.moveClass||`${e.name||"v"}-move`;if(!Ff(s[0].el,a.vnode.el,d))return;s.forEach(Pf),s.forEach(zf);const f=s.filter(Vf);_c(),f.forEach(u=>{const p=u.el,g=p.style;Zt(p,d),g.transform=g.webkitTransform=g.transitionDuration="";const m=p[Ja]=_=>{_&&_.target!==p||(!_||/transform$/.test(_.propertyName))&&(p.removeEventListener("transitionend",m),p[Ja]=null,mi(p,d))};p.addEventListener("transitionend",m)})}),()=>{const d=Ee(e),f=gc(d);let u=d.tag||Ce;s=c,c=i.default?mn(i.default()):[];for(let p=0;p<c.length;p++){const g=c[p];g.key!=null&&Oi(g,vl(g,f,o,a))}if(s)for(let p=0;p<s.length;p++){const g=s[p];Oi(g,vl(g,f,o,a)),yc.set(g,g.el.getBoundingClientRect())}return t(u,null,c)}}},Rf=e=>delete e.mode;Cc.props;const Ac=Cc;function Pf(e){const i=e.el;i[Ja]&&i[Ja](),i[cr]&&i[cr]()}function zf(e){wc.set(e,e.el.getBoundingClientRect())}function Vf(e){const i=yc.get(e),a=wc.get(e),o=i.left-a.left,s=i.top-a.top;if(o||s){const c=e.el.style;return c.transform=c.webkitTransform=`translate(${o}px,${s}px)`,c.transitionDuration="0s",e}}function Ff(e,i,a){const o=e.cloneNode(),s=e[Sl];s&&s.forEach(f=>{f.split(/\s+/).forEach(u=>u&&o.classList.remove(u))}),a.split(/\s+/).forEach(f=>f&&o.classList.add(f)),o.style.display="none";const c=i.nodeType===1?i:i.parentNode;c.appendChild(o);const{hasTransform:d}=hc(o);return c.removeChild(o),d}const Ci=e=>{const i=e.props["onUpdate:modelValue"]||!1;return ge(i)?a=>ul(i,a):i};function Mf(e){e.target.composing=!0}function dr(e){const i=e.target;i.composing&&(i.composing=!1,i.dispatchEvent(new Event("input")))}const Mt=Symbol("_assign"),Wa={created(e,{modifiers:{lazy:i,trim:a,number:o}},s){e[Mt]=Ci(s);const c=o||s.props&&s.props.type==="number";ti(e,i?"change":"input",d=>{if(d.target.composing)return;let f=e.value;a&&(f=f.trim()),c&&(f=ea(f)),e[Mt](f)}),a&&ti(e,"change",()=>{e.value=e.value.trim()}),i||(ti(e,"compositionstart",Mf),ti(e,"compositionend",dr),ti(e,"change",dr))},mounted(e,{value:i}){e.value=i??""},beforeUpdate(e,{value:i,modifiers:{lazy:a,trim:o,number:s}},c){if(e[Mt]=Ci(c),e.composing)return;const d=s||e.type==="number"?ea(e.value):e.value,f=i??"";d!==f&&(document.activeElement===e&&e.type!=="range"&&(a||o&&e.value.trim()===f)||(e.value=f))}},rs={deep:!0,created(e,i,a){e[Mt]=Ci(a),ti(e,"change",()=>{const o=e._modelValue,s=yl(e),c=e.checked,d=e[Mt];if(ge(o)){const f=nn(o,s),u=f!==-1;if(c&&!u)d(o.concat(s));else if(!c&&u){const p=[...o];p.splice(f,1),d(p)}}else if(Ji(o)){const f=new Set(o);c?f.add(s):f.delete(s),d(f)}else d(kc(e,c))})},mounted:pr,beforeUpdate(e,i,a){e[Mt]=Ci(a),pr(e,i,a)}};function pr(e,{value:i,oldValue:a},o){e._modelValue=i,ge(i)?e.checked=nn(i,o.props.value)>-1:Ji(i)?e.checked=i.has(o.props.value):i!==a&&(e.checked=ai(i,kc(e,!0)))}const us={created(e,{value:i},a){e.checked=ai(i,a.props.value),e[Mt]=Ci(a),ti(e,"change",()=>{e[Mt](yl(e))})},beforeUpdate(e,{value:i,oldValue:a},o){e[Mt]=Ci(o),i!==a&&(e.checked=ai(i,o.props.value))}},xc={deep:!0,created(e,{value:i,modifiers:{number:a}},o){const s=Ji(i);ti(e,"change",()=>{const c=Array.prototype.filter.call(e.options,d=>d.selected).map(d=>a?ea(yl(d)):yl(d));e[Mt](e.multiple?s?new Set(c):c:c[0]),e._assigning=!0,Bl(()=>{e._assigning=!1})}),e[Mt]=Ci(o)},mounted(e,{value:i,oldValue:a,modifiers:{number:o}}){mr(e,i,a,o)},beforeUpdate(e,i,a){e[Mt]=Ci(a)},updated(e,{value:i,oldValue:a,modifiers:{number:o}}){e._assigning||mr(e,i,a,o)}};function mr(e,i,a,o){const s=e.multiple,c=ge(i);if(!(s&&!c&&!Ji(i))&&!(c&&ai(i,a))){for(let d=0,f=e.options.length;d<f;d++){const u=e.options[d],p=yl(u);if(s)if(c){const g=typeof p;g==="string"||g==="number"?u.selected=i.includes(o?ea(p):p):u.selected=nn(i,p)>-1}else u.selected=i.has(p);else if(ai(yl(u),i)){e.selectedIndex!==d&&(e.selectedIndex=d);return}}!s&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function yl(e){return"_value"in e?e._value:e.value}function kc(e,i){const a=i?"_trueValue":"_falseValue";return a in e?e[a]:i}const Bc={created(e,i,a){La(e,i,a,null,"created")},mounted(e,i,a){La(e,i,a,null,"mounted")},beforeUpdate(e,i,a,o){La(e,i,a,o,"beforeUpdate")},updated(e,i,a,o){La(e,i,a,o,"updated")}};function $c(e,i){switch(e){case"SELECT":return xc;case"TEXTAREA":return Wa;default:switch(i){case"checkbox":return rs;case"radio":return us;default:return Wa}}}function La(e,i,a,o,s){const d=$c(e.tagName,a.props&&a.props.type)[s];d&&d(e,i,a,o)}function Nf(){Wa.getSSRProps=({value:e})=>({value:e}),us.getSSRProps=({value:e},i)=>{if(i.props&&ai(i.props.value,e))return{checked:!0}},rs.getSSRProps=({value:e},i)=>{if(ge(e)){if(i.props&&nn(e,i.props.value)>-1)return{checked:!0}}else if(Ji(e)){if(i.props&&e.has(i.props.value))return{checked:!0}}else if(e)return{checked:!0}},Bc.getSSRProps=(e,i)=>{if(typeof i.type!="string")return;const a=$c(i.type.toUpperCase(),i.props&&i.props.type);if(a.getSSRProps)return a.getSSRProps(e,i)}}const Hf=["ctrl","shift","alt","meta"],Of={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,i)=>Hf.some(a=>e[`${a}Key`]&&!i.includes(a))},It=(e,i)=>{const a=e._withMods||(e._withMods={}),o=i.join(".");return a[o]||(a[o]=(s,...c)=>{for(let d=0;d<i.length;d++){const f=Of[i[d]];if(f&&f(s,i))return}return e(s,...c)})},qf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Gf=(e,i)=>{const a=e._withKeys||(e._withKeys={}),o=i.join(".");return a[o]||(a[o]=s=>{if(!("key"in s))return;const c=$t(s.key);if(i.some(d=>d===c||qf[d]===c))return e(s)})},Tc=Ke({patchProp:Tf},df);let Kl,fr=!1;function Lc(){return Kl||(Kl=Xu(Tc))}function Dc(){return Kl=fr?Kl:Qu(Tc),fr=!0,Kl}const Ka=(...e)=>{Lc().render(...e)},Ic=(...e)=>{Dc().hydrate(...e)},Ec=(...e)=>{const i=Lc().createApp(...e),{mount:a}=i;return i.mount=o=>{const s=Pc(o);if(!s)return;const c=i._component;!we(c)&&!c.render&&!c.template&&(c.template=s.innerHTML),s.innerHTML="";const d=a(s,!1,Rc(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),d},i},jf=(...e)=>{const i=Dc().createApp(...e),{mount:a}=i;return i.mount=o=>{const s=Pc(o);if(s)return a(s,!0,Rc(s))},i};function Rc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Pc(e){return Xe(e)?document.querySelector(e):e}let gr=!1;const Uf=()=>{gr||(gr=!0,Nf(),hf())};/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Yf=()=>{},Jf=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:Iu,BaseTransitionPropsValidators:Zo,Comment:mt,DeprecationTypes:rf,EffectScope:Po,ErrorCodes:Ep,ErrorTypeStrings:ef,Fragment:Ce,KeepAlive:lm,ReactiveEffect:bl,Static:Mi,Suspense:Yp,Teleport:_n,Text:Gi,TrackOpTypes:Lp,Transition:Sn,TransitionGroup:Ac,TriggerOpTypes:Dp,VueElement:yn,assertNumber:Ip,callWithAsyncErrorHandling:Dt,callWithErrorHandling:li,camelize:_t,capitalize:ma,cloneVNode:Wt,compatUtils:sf,compile:Yf,computed:M,createApp:Ec,createBlock:x,createCommentVNode:ns,createElementBlock:ye,createElementVNode:k,createHydrationRenderer:Qu,createPropsRestProxy:bm,createRenderer:Xu,createSSRApp:jf,createSlots:nm,createStaticVNode:Om,createTextVNode:n,createVNode:t,customRef:fu,defineAsyncComponent:tm,defineComponent:V,defineCustomElement:Sc,defineEmits:um,defineExpose:cm,defineModel:mm,defineOptions:dm,defineProps:rm,defineSSRCustomElement:Df,defineSlots:pm,devtools:tf,effect:Zd,effectScope:Xd,getCurrentInstance:Kt,getCurrentScope:zo,getTransitionRawChildren:mn,guardReactiveProps:oc,h:X,handleError:Xi,hasInjectionContext:Bm,hydrate:Ic,initCustomFormatter:Xm,initDirectivesForSSR:Uf,inject:Fe,isMemoSame:pc,isProxy:Ho,isReactive:Vi,isReadonly:Hi,isRef:ct,isRuntimeOnly:Ym,isShallow:ta,isVNode:Ct,markRaw:Oo,mergeDefaults:hm,mergeModels:_m,mergeProps:Zi,nextTick:Bl,normalizeClass:fa,normalizeProps:Yd,normalizeStyle:kl,onActivated:es,onBeforeMount:Pu,onBeforeUnmount:hn,onBeforeUpdate:zu,onDeactivated:ts,onErrorCaptured:Nu,onMounted:Ai,onRenderTracked:Mu,onRenderTriggered:Fu,onScopeDispose:Wr,onServerPrefetch:Vu,onUnmounted:Qi,onUpdated:gn,openBlock:y,popScopeId:wu,provide:ut,proxyRefs:jo,pushScopeId:yu,queuePostFlushCb:Oa,reactive:oi,readonly:No,ref:G,registerRuntimeCompiler:Um,render:Ka,renderList:Qe,renderSlot:qi,resolveComponent:B,resolveDirective:pn,resolveDynamicComponent:Au,resolveFilter:of,resolveTransitionHooks:vl,setBlockTracking:so,setDevtoolsHook:lf,setTransitionHooks:Oi,shallowReactive:cu,shallowReadonly:Sp,shallowRef:pu,ssrContextKey:Bu,ssrUtils:nf,stop:ep,toDisplayString:$e,toHandlerKey:Ul,toHandlers:om,toRaw:Ee,toRef:Qn,toRefs:Bp,toValue:Ap,transformVNodeArgs:Nm,triggerRef:Cp,unref:r,useAttrs:Ou,useCssModule:Ef,useCssVars:_f,useModel:Km,useSSRContext:$u,useSlots:gm,useTransitionState:Qo,vModelCheckbox:rs,vModelDynamic:Bc,vModelRadio:us,vModelSelect:xc,vModelText:Wa,vShow:bc,version:mc,warn:Zm,watch:pt,watchEffect:Xo,watchPostEffect:Tu,watchSyncEffect:Lu,withAsyncContext:vm,withCtx:l,withDefaults:fm,withDirectives:Si,withKeys:Gf,withMemo:Qm,withModifiers:It,withScopeId:Np},Symbol.toStringTag,{value:"Module"})),Wf=V({name:"App"}),He=(e,i)=>{const a=e.__vccOpts||e;for(const[o,s]of i)a[o]=s;return a};function Kf(e,i,a,o,s,c){const d=B("router-view");return y(),x(d)}const Xf=He(Wf,[["render",Kf]]),Qf="modulepreload",Zf=function(e){return"/vue-fomantic-ui/"+e},hr={},Qt=function(i,a,o){let s=Promise.resolve();if(a&&a.length>0){const c=document.getElementsByTagName("link");s=Promise.all(a.map(d=>{if(d=Zf(d),d in hr)return;hr[d]=!0;const f=d.endsWith(".css"),u=f?'[rel="stylesheet"]':"";if(!!o)for(let m=c.length-1;m>=0;m--){const _=c[m];if(_.href===d&&(!f||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${u}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":Qf,f||(g.as="script",g.crossOrigin=""),g.href=d,document.head.appendChild(g),f)return new Promise((m,_)=>{g.addEventListener("load",m),g.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${d}`)))})}))}return s.then(()=>i()).catch(c=>{const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c})};/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const zc=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",$l=e=>zc?Symbol(e):"_vr_"+e,Vc=$l("rvlm"),_r=$l("rvd"),wn=$l("r"),cs=$l("rl"),_o=$l("rvl"),nl=typeof window<"u";function eg(e){return e.__esModule||zc&&e[Symbol.toStringTag]==="Module"}const Ye=Object.assign;function zn(e,i){const a={};for(const o in i){const s=i[o];a[o]=Array.isArray(s)?s.map(e):e(s)}return a}const Xl=()=>{},tg=/\/$/,ig=e=>e.replace(tg,"");function Vn(e,i,a="/"){let o,s={},c="",d="";const f=i.indexOf("?"),u=i.indexOf("#",f>-1?f:0);return f>-1&&(o=i.slice(0,f),c=i.slice(f+1,u>-1?u:i.length),s=e(c)),u>-1&&(o=o||i.slice(0,u),d=i.slice(u,i.length)),o=og(o??i,a),{fullPath:o+(c&&"?")+c+d,path:o,query:s,hash:d}}function lg(e,i){const a=i.query?e(i.query):"";return i.path+(a&&"?")+a+(i.hash||"")}function br(e,i){return!i||!e.toLowerCase().startsWith(i.toLowerCase())?e:e.slice(i.length)||"/"}function ag(e,i,a){const o=i.matched.length-1,s=a.matched.length-1;return o>-1&&o===s&&wl(i.matched[o],a.matched[s])&&Fc(i.params,a.params)&&e(i.query)===e(a.query)&&i.hash===a.hash}function wl(e,i){return(e.aliasOf||e)===(i.aliasOf||i)}function Fc(e,i){if(Object.keys(e).length!==Object.keys(i).length)return!1;for(const a in e)if(!ng(e[a],i[a]))return!1;return!0}function ng(e,i){return Array.isArray(e)?vr(e,i):Array.isArray(i)?vr(i,e):e===i}function vr(e,i){return Array.isArray(i)?e.length===i.length&&e.every((a,o)=>a===i[o]):e.length===1&&e[0]===i}function og(e,i){if(e.startsWith("/"))return e;if(!e)return i;const a=i.split("/"),o=e.split("/");let s=a.length-1,c,d;for(c=0;c<o.length;c++)if(d=o[c],!(s===1||d==="."))if(d==="..")s--;else break;return a.slice(0,s).join("/")+"/"+o.slice(c-(c===o.length?1:0)).join("/")}var ua;(function(e){e.pop="pop",e.push="push"})(ua||(ua={}));var Ql;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ql||(Ql={}));function sg(e){if(!e)if(nl){const i=document.querySelector("base");e=i&&i.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ig(e)}const rg=/^[^#]+#/;function ug(e,i){return e.replace(rg,"#")+i}function cg(e,i){const a=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:i.behavior,left:o.left-a.left-(i.left||0),top:o.top-a.top-(i.top||0)}}const Cn=()=>({left:window.pageXOffset,top:window.pageYOffset});function dg(e){let i;if("el"in e){const a=e.el,o=typeof a=="string"&&a.startsWith("#"),s=typeof a=="string"?o?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!s)return;i=cg(s,e)}else i=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(i):window.scrollTo(i.left!=null?i.left:window.pageXOffset,i.top!=null?i.top:window.pageYOffset)}function Sr(e,i){return(history.state?history.state.position-i:-1)+e}const bo=new Map;function pg(e,i){bo.set(e,i)}function mg(e){const i=bo.get(e);return bo.delete(e),i}let fg=()=>location.protocol+"//"+location.host;function Mc(e,i){const{pathname:a,search:o,hash:s}=i,c=e.indexOf("#");if(c>-1){let f=s.includes(e.slice(c))?e.slice(c).length:1,u=s.slice(f);return u[0]!=="/"&&(u="/"+u),br(u,"")}return br(a,e)+o+s}function gg(e,i,a,o){let s=[],c=[],d=null;const f=({state:_})=>{const w=Mc(e,location),S=a.value,A=i.value;let T=0;if(_){if(a.value=w,i.value=_,d&&d===S){d=null;return}T=A?_.position-A.position:0}else o(w);s.forEach(I=>{I(a.value,S,{delta:T,type:ua.pop,direction:T?T>0?Ql.forward:Ql.back:Ql.unknown})})};function u(){d=a.value}function p(_){s.push(_);const w=()=>{const S=s.indexOf(_);S>-1&&s.splice(S,1)};return c.push(w),w}function g(){const{history:_}=window;_.state&&_.replaceState(Ye({},_.state,{scroll:Cn()}),"")}function m(){for(const _ of c)_();c=[],window.removeEventListener("popstate",f),window.removeEventListener("beforeunload",g)}return window.addEventListener("popstate",f),window.addEventListener("beforeunload",g),{pauseListeners:u,listen:p,destroy:m}}function yr(e,i,a,o=!1,s=!1){return{back:e,current:i,forward:a,replaced:o,position:window.history.length,scroll:s?Cn():null}}function hg(e){const{history:i,location:a}=window,o={value:Mc(e,a)},s={value:i.state};s.value||c(o.value,{back:null,current:o.value,forward:null,position:i.length-1,replaced:!0,scroll:null},!0);function c(u,p,g){const m=e.indexOf("#"),_=m>-1?(a.host&&document.querySelector("base")?e:e.slice(m))+u:fg()+e+u;try{i[g?"replaceState":"pushState"](p,"",_),s.value=p}catch(w){console.error(w),a[g?"replace":"assign"](_)}}function d(u,p){const g=Ye({},i.state,yr(s.value.back,u,s.value.forward,!0),p,{position:s.value.position});c(u,g,!0),o.value=u}function f(u,p){const g=Ye({},s.value,i.state,{forward:u,scroll:Cn()});c(g.current,g,!0);const m=Ye({},yr(o.value,u,null),{position:g.position+1},p);c(u,m,!1),o.value=u}return{location:o,state:s,push:f,replace:d}}function _g(e){e=sg(e);const i=hg(e),a=gg(e,i.state,i.location,i.replace);function o(c,d=!0){d||a.pauseListeners(),history.go(c)}const s=Ye({location:"",base:e,go:o,createHref:ug.bind(null,e)},i,a);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>i.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>i.state.value}),s}function bg(e){return typeof e=="string"||e&&typeof e=="object"}function Nc(e){return typeof e=="string"||typeof e=="symbol"}const pi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Hc=$l("nf");var wr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(wr||(wr={}));function Cl(e,i){return Ye(new Error,{type:e,[Hc]:!0},i)}function Ti(e,i){return e instanceof Error&&Hc in e&&(i==null||!!(e.type&i))}const Cr="[^/]+?",vg={sensitive:!1,strict:!1,start:!0,end:!0},Sg=/[.+*?^${}()[\]/\\]/g;function yg(e,i){const a=Ye({},vg,i),o=[];let s=a.start?"^":"";const c=[];for(const p of e){const g=p.length?[]:[90];a.strict&&!p.length&&(s+="/");for(let m=0;m<p.length;m++){const _=p[m];let w=40+(a.sensitive?.25:0);if(_.type===0)m||(s+="/"),s+=_.value.replace(Sg,"\\$&"),w+=40;else if(_.type===1){const{value:S,repeatable:A,optional:T,regexp:I}=_;c.push({name:S,repeatable:A,optional:T});const h=I||Cr;if(h!==Cr){w+=10;try{new RegExp(`(${h})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${S}" (${h}): `+C.message)}}let b=A?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;m||(b=T&&p.length<2?`(?:/${b})`:"/"+b),T&&(b+="?"),s+=b,w+=20,T&&(w+=-8),A&&(w+=-20),h===".*"&&(w+=-50)}g.push(w)}o.push(g)}if(a.strict&&a.end){const p=o.length-1;o[p][o[p].length-1]+=.7000000000000001}a.strict||(s+="/?"),a.end?s+="$":a.strict&&(s+="(?:/|$)");const d=new RegExp(s,a.sensitive?"":"i");function f(p){const g=p.match(d),m={};if(!g)return null;for(let _=1;_<g.length;_++){const w=g[_]||"",S=c[_-1];m[S.name]=w&&S.repeatable?w.split("/"):w}return m}function u(p){let g="",m=!1;for(const _ of e){(!m||!g.endsWith("/"))&&(g+="/"),m=!1;for(const w of _)if(w.type===0)g+=w.value;else if(w.type===1){const{value:S,repeatable:A,optional:T}=w,I=S in p?p[S]:"";if(Array.isArray(I)&&!A)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const h=Array.isArray(I)?I.join("/"):I;if(!h)if(T)_.length<2&&(g.endsWith("/")?g=g.slice(0,-1):m=!0);else throw new Error(`Missing required param "${S}"`);g+=h}}return g}return{re:d,score:o,keys:c,parse:f,stringify:u}}function wg(e,i){let a=0;for(;a<e.length&&a<i.length;){const o=i[a]-e[a];if(o)return o;a++}return e.length<i.length?e.length===1&&e[0]===80?-1:1:e.length>i.length?i.length===1&&i[0]===80?1:-1:0}function Cg(e,i){let a=0;const o=e.score,s=i.score;for(;a<o.length&&a<s.length;){const c=wg(o[a],s[a]);if(c)return c;a++}return s.length-o.length}const Ag={type:0,value:""},xg=/[a-zA-Z0-9_]/;function kg(e){if(!e)return[[]];if(e==="/")return[[Ag]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function i(w){throw new Error(`ERR (${a})/"${p}": ${w}`)}let a=0,o=a;const s=[];let c;function d(){c&&s.push(c),c=[]}let f=0,u,p="",g="";function m(){p&&(a===0?c.push({type:0,value:p}):a===1||a===2||a===3?(c.length>1&&(u==="*"||u==="+")&&i(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),c.push({type:1,value:p,regexp:g,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):i("Invalid state to consume buffer"),p="")}function _(){p+=u}for(;f<e.length;){if(u=e[f++],u==="\\"&&a!==2){o=a,a=4;continue}switch(a){case 0:u==="/"?(p&&m(),d()):u===":"?(m(),a=1):_();break;case 4:_(),a=o;break;case 1:u==="("?a=2:xg.test(u)?_():(m(),a=0,u!=="*"&&u!=="?"&&u!=="+"&&f--);break;case 2:u===")"?g[g.length-1]=="\\"?g=g.slice(0,-1)+u:a=3:g+=u;break;case 3:m(),a=0,u!=="*"&&u!=="?"&&u!=="+"&&f--,g="";break;default:i("Unknown state");break}}return a===2&&i(`Unfinished custom RegExp for param "${p}"`),m(),d(),s}function Bg(e,i,a){const o=yg(kg(e.path),a),s=Ye(o,{record:e,parent:i,children:[],alias:[]});return i&&!s.record.aliasOf==!i.record.aliasOf&&i.children.push(s),s}function $g(e,i){const a=[],o=new Map;i=xr({strict:!1,end:!0,sensitive:!1},i);function s(g){return o.get(g)}function c(g,m,_){const w=!_,S=Lg(g);S.aliasOf=_&&_.record;const A=xr(i,g),T=[S];if("alias"in g){const b=typeof g.alias=="string"?[g.alias]:g.alias;for(const C of b)T.push(Ye({},S,{components:_?_.record.components:S.components,path:C,aliasOf:_?_.record:S}))}let I,h;for(const b of T){const{path:C}=b;if(m&&C[0]!=="/"){const $=m.record.path,E=$[$.length-1]==="/"?"":"/";b.path=m.record.path+(C&&E+C)}if(I=Bg(b,m,A),_?_.alias.push(I):(h=h||I,h!==I&&h.alias.push(I),w&&g.name&&!Ar(I)&&d(g.name)),"children"in S){const $=S.children;for(let E=0;E<$.length;E++)c($[E],I,_&&_.children[E])}_=_||I,u(I)}return h?()=>{d(h)}:Xl}function d(g){if(Nc(g)){const m=o.get(g);m&&(o.delete(g),a.splice(a.indexOf(m),1),m.children.forEach(d),m.alias.forEach(d))}else{const m=a.indexOf(g);m>-1&&(a.splice(m,1),g.record.name&&o.delete(g.record.name),g.children.forEach(d),g.alias.forEach(d))}}function f(){return a}function u(g){let m=0;for(;m<a.length&&Cg(g,a[m])>=0;)m++;a.splice(m,0,g),g.record.name&&!Ar(g)&&o.set(g.record.name,g)}function p(g,m){let _,w={},S,A;if("name"in g&&g.name){if(_=o.get(g.name),!_)throw Cl(1,{location:g});A=_.record.name,w=Ye(Tg(m.params,_.keys.filter(h=>!h.optional).map(h=>h.name)),g.params),S=_.stringify(w)}else if("path"in g)S=g.path,_=a.find(h=>h.re.test(S)),_&&(w=_.parse(S),A=_.record.name);else{if(_=m.name?o.get(m.name):a.find(h=>h.re.test(m.path)),!_)throw Cl(1,{location:g,currentLocation:m});A=_.record.name,w=Ye({},m.params,g.params),S=_.stringify(w)}const T=[];let I=_;for(;I;)T.unshift(I.record),I=I.parent;return{name:A,path:S,params:w,matched:T,meta:Ig(T)}}return e.forEach(g=>c(g)),{addRoute:c,resolve:p,removeRoute:d,getRoutes:f,getRecordMatcher:s}}function Tg(e,i){const a={};for(const o of i)o in e&&(a[o]=e[o]);return a}function Lg(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Dg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function Dg(e){const i={},a=e.props||!1;if("component"in e)i.default=a;else for(const o in e.components)i[o]=typeof a=="boolean"?a:a[o];return i}function Ar(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ig(e){return e.reduce((i,a)=>Ye(i,a.meta),{})}function xr(e,i){const a={};for(const o in e)a[o]=o in i?i[o]:e[o];return a}const Oc=/#/g,Eg=/&/g,Rg=/\//g,Pg=/=/g,zg=/\?/g,qc=/\+/g,Vg=/%5B/g,Fg=/%5D/g,Gc=/%5E/g,Mg=/%60/g,jc=/%7B/g,Ng=/%7C/g,Uc=/%7D/g,Hg=/%20/g;function ds(e){return encodeURI(""+e).replace(Ng,"|").replace(Vg,"[").replace(Fg,"]")}function Og(e){return ds(e).replace(jc,"{").replace(Uc,"}").replace(Gc,"^")}function vo(e){return ds(e).replace(qc,"%2B").replace(Hg,"+").replace(Oc,"%23").replace(Eg,"%26").replace(Mg,"`").replace(jc,"{").replace(Uc,"}").replace(Gc,"^")}function qg(e){return vo(e).replace(Pg,"%3D")}function Gg(e){return ds(e).replace(Oc,"%23").replace(zg,"%3F")}function jg(e){return e==null?"":Gg(e).replace(Rg,"%2F")}function Xa(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Ug(e){const i={};if(e===""||e==="?")return i;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<o.length;++s){const c=o[s].replace(qc," "),d=c.indexOf("="),f=Xa(d<0?c:c.slice(0,d)),u=d<0?null:Xa(c.slice(d+1));if(f in i){let p=i[f];Array.isArray(p)||(p=i[f]=[p]),p.push(u)}else i[f]=u}return i}function kr(e){let i="";for(let a in e){const o=e[a];if(a=qg(a),o==null){o!==void 0&&(i+=(i.length?"&":"")+a);continue}(Array.isArray(o)?o.map(c=>c&&vo(c)):[o&&vo(o)]).forEach(c=>{c!==void 0&&(i+=(i.length?"&":"")+a,c!=null&&(i+="="+c))})}return i}function Yg(e){const i={};for(const a in e){const o=e[a];o!==void 0&&(i[a]=Array.isArray(o)?o.map(s=>s==null?null:""+s):o==null?o:""+o)}return i}function Vl(){let e=[];function i(o){return e.push(o),()=>{const s=e.indexOf(o);s>-1&&e.splice(s,1)}}function a(){e=[]}return{add:i,list:()=>e,reset:a}}function Jg(e,i,a){const o=()=>{e[i].delete(a)};Qi(o),ts(o),es(()=>{e[i].add(a)}),e[i].add(a)}function Wg(e){const i=Fe(Vc,{}).value;i&&Jg(i,"updateGuards",e)}function bi(e,i,a,o,s){const c=o&&(o.enterCallbacks[s]=o.enterCallbacks[s]||[]);return()=>new Promise((d,f)=>{const u=m=>{m===!1?f(Cl(4,{from:a,to:i})):m instanceof Error?f(m):bg(m)?f(Cl(2,{from:i,to:m})):(c&&o.enterCallbacks[s]===c&&typeof m=="function"&&c.push(m),d())},p=e.call(o&&o.instances[s],i,a,u);let g=Promise.resolve(p);e.length<3&&(g=g.then(u)),g.catch(m=>f(m))})}function Fn(e,i,a,o){const s=[];for(const c of e)for(const d in c.components){let f=c.components[d];if(!(i!=="beforeRouteEnter"&&!c.instances[d]))if(Kg(f)){const p=(f.__vccOpts||f)[i];p&&s.push(bi(p,a,o,c,d))}else{let u=f();s.push(()=>u.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${c.path}"`));const g=eg(p)?p.default:p;c.components[d]=g;const _=(g.__vccOpts||g)[i];return _&&bi(_,a,o,c,d)()}))}}return s}function Kg(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Br(e){const i=Fe(wn),a=Fe(cs),o=M(()=>i.resolve(r(e.to))),s=M(()=>{const{matched:u}=o.value,{length:p}=u,g=u[p-1],m=a.matched;if(!g||!m.length)return-1;const _=m.findIndex(wl.bind(null,g));if(_>-1)return _;const w=$r(u[p-2]);return p>1&&$r(g)===w&&m[m.length-1].path!==w?m.findIndex(wl.bind(null,u[p-2])):_}),c=M(()=>s.value>-1&&Zg(a.params,o.value.params)),d=M(()=>s.value>-1&&s.value===a.matched.length-1&&Fc(a.params,o.value.params));function f(u={}){return Qg(u)?i[r(e.replace)?"replace":"push"](r(e.to)).catch(Xl):Promise.resolve()}return{route:o,href:M(()=>o.value.href),isActive:c,isExactActive:d,navigate:f}}const Xg=V({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Br,setup(e,{slots:i}){const a=oi(Br(e)),{options:o}=Fe(wn),s=M(()=>({[Tr(e.activeClass,o.linkActiveClass,"router-link-active")]:a.isActive,[Tr(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const c=i.default&&i.default(a);return e.custom?c:X("a",{"aria-current":a.isExactActive?e.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:s.value},c)}}}),ps=Xg;function Qg(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const i=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(i))return}return e.preventDefault&&e.preventDefault(),!0}}function Zg(e,i){for(const a in i){const o=i[a],s=e[a];if(typeof o=="string"){if(o!==s)return!1}else if(!Array.isArray(s)||s.length!==o.length||o.some((c,d)=>c!==s[d]))return!1}return!0}function $r(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Tr=(e,i,a)=>e??i??a,eh=V({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:i,slots:a}){const o=Fe(_o),s=M(()=>e.route||o.value),c=Fe(_r,0),d=M(()=>s.value.matched[c]);ut(_r,c+1),ut(Vc,d),ut(_o,s);const f=G();return pt(()=>[f.value,d.value,e.name],([u,p,g],[m,_,w])=>{p&&(p.instances[g]=u,_&&_!==p&&u&&u===m&&(p.leaveGuards.size||(p.leaveGuards=_.leaveGuards),p.updateGuards.size||(p.updateGuards=_.updateGuards))),u&&p&&(!_||!wl(p,_)||!m)&&(p.enterCallbacks[g]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=s.value,p=d.value,g=p&&p.components[e.name],m=e.name;if(!g)return Lr(a.default,{Component:g,route:u});const _=p.props[e.name],w=_?_===!0?u.params:typeof _=="function"?_(u):_:null,A=X(g,Ye({},w,i,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(p.instances[m]=null)},ref:f}));return Lr(a.default,{Component:A,route:u})||A}}});function Lr(e,i){if(!e)return null;const a=e(i);return a.length===1?a[0]:a}const th=eh;function ih(e){const i=$g(e.routes,e),a=e.parseQuery||Ug,o=e.stringifyQuery||kr,s=e.history,c=Vl(),d=Vl(),f=Vl(),u=pu(pi);let p=pi;nl&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const g=zn.bind(null,J=>""+J),m=zn.bind(null,jg),_=zn.bind(null,Xa);function w(J,ue){let re,he;return Nc(J)?(re=i.getRecordMatcher(J),he=ue):he=J,i.addRoute(he,re)}function S(J){const ue=i.getRecordMatcher(J);ue&&i.removeRoute(ue)}function A(){return i.getRoutes().map(J=>J.record)}function T(J){return!!i.getRecordMatcher(J)}function I(J,ue){if(ue=Ye({},ue||u.value),typeof J=="string"){const ke=Vn(a,J,ue.path),L=i.resolve({path:ke.path},ue),R=s.createHref(ke.fullPath);return Ye(ke,L,{params:_(L.params),hash:Xa(ke.hash),redirectedFrom:void 0,href:R})}let re;if("path"in J)re=Ye({},J,{path:Vn(a,J.path,ue.path).path});else{const ke=Ye({},J.params);for(const L in ke)ke[L]==null&&delete ke[L];re=Ye({},J,{params:m(J.params)}),ue.params=m(ue.params)}const he=i.resolve(re,ue),Me=J.hash||"";he.params=g(_(he.params));const Ne=lg(o,Ye({},J,{hash:Og(Me),path:he.path})),xe=s.createHref(Ne);return Ye({fullPath:Ne,hash:Me,query:o===kr?Yg(J.query):J.query||{}},he,{redirectedFrom:void 0,href:xe})}function h(J){return typeof J=="string"?Vn(a,J,u.value.path):Ye({},J)}function b(J,ue){if(p!==J)return Cl(8,{from:ue,to:J})}function C(J){return F(J)}function $(J){return C(Ye(h(J),{replace:!0}))}function E(J){const ue=J.matched[J.matched.length-1];if(ue&&ue.redirect){const{redirect:re}=ue;let he=typeof re=="function"?re(J):re;return typeof he=="string"&&(he=he.includes("?")||he.includes("#")?he=h(he):{path:he},he.params={}),Ye({query:J.query,hash:J.hash,params:J.params},he)}}function F(J,ue){const re=p=I(J),he=u.value,Me=J.state,Ne=J.force,xe=J.replace===!0,ke=E(re);if(ke)return F(Ye(h(ke),{state:Me,force:Ne,replace:xe}),ue||re);const L=re;L.redirectedFrom=ue;let R;return!Ne&&ag(o,he,re)&&(R=Cl(16,{to:L,from:he}),Je(he,he,!0,!1)),(R?Promise.resolve(R):z(L,he)).catch(q=>Ti(q)?q:de(q,L,he)).then(q=>{if(q){if(Ti(q,2))return F(Ye(h(q.to),{state:Me,force:Ne,replace:xe}),ue||L)}else q=Z(L,he,!0,xe,Me);return j(L,he,q),q})}function N(J,ue){const re=b(J,ue);return re?Promise.reject(re):Promise.resolve()}function z(J,ue){let re;const[he,Me,Ne]=lh(J,ue);re=Fn(he.reverse(),"beforeRouteLeave",J,ue);for(const ke of he)ke.leaveGuards.forEach(L=>{re.push(bi(L,J,ue))});const xe=N.bind(null,J,ue);return re.push(xe),il(re).then(()=>{re=[];for(const ke of c.list())re.push(bi(ke,J,ue));return re.push(xe),il(re)}).then(()=>{re=Fn(Me,"beforeRouteUpdate",J,ue);for(const ke of Me)ke.updateGuards.forEach(L=>{re.push(bi(L,J,ue))});return re.push(xe),il(re)}).then(()=>{re=[];for(const ke of J.matched)if(ke.beforeEnter&&!ue.matched.includes(ke))if(Array.isArray(ke.beforeEnter))for(const L of ke.beforeEnter)re.push(bi(L,J,ue));else re.push(bi(ke.beforeEnter,J,ue));return re.push(xe),il(re)}).then(()=>(J.matched.forEach(ke=>ke.enterCallbacks={}),re=Fn(Ne,"beforeRouteEnter",J,ue),re.push(xe),il(re))).then(()=>{re=[];for(const ke of d.list())re.push(bi(ke,J,ue));return re.push(xe),il(re)}).catch(ke=>Ti(ke,8)?ke:Promise.reject(ke))}function j(J,ue,re){for(const he of f.list())he(J,ue,re)}function Z(J,ue,re,he,Me){const Ne=b(J,ue);if(Ne)return Ne;const xe=ue===pi,ke=nl?history.state:{};re&&(he||xe?s.replace(J.fullPath,Ye({scroll:xe&&ke&&ke.scroll},Me)):s.push(J.fullPath,Me)),u.value=J,Je(J,ue,re,xe),Le()}let W;function fe(){W=s.listen((J,ue,re)=>{const he=I(J),Me=E(he);if(Me){F(Ye(Me,{replace:!0}),he).catch(Xl);return}p=he;const Ne=u.value;nl&&pg(Sr(Ne.fullPath,re.delta),Cn()),z(he,Ne).catch(xe=>Ti(xe,12)?xe:Ti(xe,2)?(F(xe.to,he).then(ke=>{Ti(ke,20)&&!re.delta&&re.type===ua.pop&&s.go(-1,!1)}).catch(Xl),Promise.reject()):(re.delta&&s.go(-re.delta,!1),de(xe,he,Ne))).then(xe=>{xe=xe||Z(he,Ne,!1),xe&&(re.delta?s.go(-re.delta,!1):re.type===ua.pop&&Ti(xe,20)&&s.go(-1,!1)),j(he,Ne,xe)}).catch(Xl)})}let Be=Vl(),U=Vl(),K;function de(J,ue,re){Le(J);const he=U.list();return he.length?he.forEach(Me=>Me(J,ue,re)):console.error(J),Promise.reject(J)}function le(){return K&&u.value!==pi?Promise.resolve():new Promise((J,ue)=>{Be.add([J,ue])})}function Le(J){K||(K=!0,fe(),Be.list().forEach(([ue,re])=>J?re(J):ue()),Be.reset())}function Je(J,ue,re,he){const{scrollBehavior:Me}=e;if(!nl||!Me)return Promise.resolve();const Ne=!re&&mg(Sr(J.fullPath,0))||(he||!re)&&history.state&&history.state.scroll||null;return Bl().then(()=>Me(J,ue,Ne)).then(xe=>xe&&dg(xe)).catch(xe=>de(xe,J,ue))}const at=J=>s.go(J);let Ue;const Xt=new Set;return{currentRoute:u,addRoute:w,removeRoute:S,hasRoute:T,getRoutes:A,resolve:I,options:e,push:C,replace:$,go:at,back:()=>at(-1),forward:()=>at(1),beforeEach:c.add,beforeResolve:d.add,afterEach:f.add,onError:U.add,isReady:le,install(J){const ue=this;J.component("RouterLink",ps),J.component("RouterView",th),J.config.globalProperties.$router=ue,Object.defineProperty(J.config.globalProperties,"$route",{enumerable:!0,get:()=>r(u)}),nl&&!Ue&&u.value===pi&&(Ue=!0,C(s.location).catch(Me=>{}));const re={};for(const Me in pi)re[Me]=M(()=>u.value[Me]);J.provide(wn,ue),J.provide(cs,oi(re)),J.provide(_o,u);const he=J.unmount;Xt.add(J),J.unmount=function(){Xt.delete(J),Xt.size<1&&(p=pi,W&&W(),u.value=pi,Ue=!1,K=!1),he()}}}}function il(e){return e.reduce((i,a)=>i.then(()=>a()),Promise.resolve())}function lh(e,i){const a=[],o=[],s=[],c=Math.max(i.matched.length,e.matched.length);for(let d=0;d<c;d++){const f=i.matched[d];f&&(e.matched.find(p=>wl(p,f))?o.push(f):a.push(f));const u=e.matched[d];u&&(i.matched.find(p=>wl(p,u))||s.push(u))}return[a,o,s]}function Yc(){return Fe(wn)}function Jc(){return Fe(cs)}const ah={__name:"Navbar",props:["onClick"],setup(e){const i=G(),a=Yc();function o(s){return s.charAt(0).toUpperCase()+s.slice(1)}return Xo(()=>{const d=a.currentRoute.value.path.match(/\/([^/]+)$/);d&&(i.value=o(d[1]))}),(s,c)=>{const d=B("SuiIcon"),f=B("SuiMenuItem"),u=B("SuiMenu");return y(),x(u,{id:"navbar",fixed:"",icon:"",inverted:"",size:"big"},{default:l(()=>[t(f,{onClick:e.onClick},{default:l(()=>[t(d,{name:"hamburger"})]),_:1},8,["onClick"]),t(f,null,{default:l(()=>[n($e(i.value),1)]),_:1})]),_:1})}}},nh=He(ah,[["__scopeId","data-v-338afb35"]]),oh=V({name:"Sidebar",setup(){const e=Jc();return{isActive:d=>e.path===d,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),sh=k("strong",null," Fomantic UI Vue ",-1),rh=k("b",null,"Getting Started",-1);function uh(e,i,a,o,s,c){const d=B("sui-menu-item"),f=B("sui-menu-header"),u=B("sui-menu-menu"),p=B("sui-menu");return y(),x(p,{fluid:"",inverted:"",vertical:""},{default:l(()=>[t(d,{as:"div"},{default:l(()=>[sh]),_:1}),t(d,{as:"router-link",to:"/"},{default:l(()=>[rh]),_:1}),t(d,{as:"div"},{default:l(()=>[t(f,{content:"Elements"}),t(u,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.elements,g=>(y(),x(d,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(d,{as:"div"},{default:l(()=>[t(f,{content:"Collections"}),t(u,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.collections,g=>(y(),x(d,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(d,{as:"div"},{default:l(()=>[t(f,{content:"Views"}),t(u,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.views,g=>(y(),x(d,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(d,{as:"div"},{default:l(()=>[t(f,{content:"Modules"}),t(u,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.modules,g=>(y(),x(d,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const ch=He(oh,[["render",uh]]),dh={class:"sidemenu"},ph={style:{flex:"1","overflow-y":"scroll"}},mh={__name:"Sidebar",setup(e){return(i,a)=>(y(),ye("div",dh,[k("div",ph,[t(ch)])]))}},fh=He(mh,[["__scopeId","data-v-379ef704"]]),gh=V({name:"Sidebar",setup(){const e=Jc();return{isActive:d=>e.path===d,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),hh=k("strong",null," Fomantic UI Vue ",-1),_h=k("b",null,"Getting Started",-1);function bh(e,i,a,o,s,c){const d=B("sui-menu-item"),f=B("sui-menu-header"),u=B("sui-menu-menu"),p=B("sui-sidebar");return y(),x(p,{dimmed:"",inverted:"",style:{width:"250px"}},{default:l(()=>[t(d,{as:"div"},{default:l(()=>[hh]),_:1}),t(d,{as:"router-link",to:"/"},{default:l(()=>[_h]),_:1}),t(d,{as:"div"},{default:l(()=>[t(f,{content:"Elements"}),t(u,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.elements,g=>(y(),x(d,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(d,{as:"div"},{default:l(()=>[t(f,{content:"Collections"}),t(u,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.collections,g=>(y(),x(d,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(d,{as:"div"},{default:l(()=>[t(f,{content:"Views"}),t(u,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.views,g=>(y(),x(d,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(d,{as:"div"},{default:l(()=>[t(f,{content:"Modules"}),t(u,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.modules,g=>(y(),x(d,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const vh=He(gh,[["render",bh]]),Sh={class:"pusher",style:{height:"100vh"}},yh={class:"article"},wh={__name:"Home",setup(e){const i=G(!1),a=()=>i.value=!i.value;return Wg(()=>{i.value=!1}),(o,s)=>{const c=B("router-view"),d=B("SuiSegment");return y(),x(d,{class:"pushable",style:{border:"none"}},{default:l(()=>[t(vh,{visible:i.value},null,8,["visible"]),k("div",Sh,[t(fh),t(nh,{"on-click":a}),k("div",yh,[t(c)])])]),_:1})}}},Ch=He(wh,[["__scopeId","data-v-0bfd4ee9"]]),Ah={__name:"DocSections",props:["docs"],setup(e){const i=e,a=M(()=>[...new Set(i.docs.map(o=>o.category))]);return(o,s)=>{const c=B("SuiHeader");return y(!0),ye(Ce,null,Qe(a.value,(d,f)=>(y(),ye(Ce,{key:d},[t(c,{as:"h2",dividing:"",style:kl({marginTop:f!==0?"5rem":"0",paddingTop:"2rem"})},{default:l(()=>[n($e(d),1)]),_:2},1032,["style"]),(y(!0),ye(Ce,null,Qe(e.docs.filter(u=>u.category===d),(u,p)=>(y(),x(Au(u.component),{key:u.label+"_"+p,id:u.id,style:{paddingTop:"3rem"}},null,8,["id"]))),128))],64))),128)}}},xh=e=>(yu("data-v-e2ae2e49"),e=e(),wu(),e),kh={class:"item"},Bh=xh(()=>k("i",{class:"dropdown icon"},null,-1)),$h={class:"content menu active"},Th={__name:"DocTableLink",props:["header","items"],setup(e){const{id:i}=Ou(),a=d=>{d.preventDefault();const f=document.getElementById(i);f.open?s(f):(f.open=!0,o(f))},o=d=>{d.querySelector(".title").classList.add("active");const u=d.querySelector(".content"),p=u.offsetHeight;u.style.maxHeight=0,requestAnimationFrame(()=>{u.style.maxHeight=`${p}px`});const g=new AbortController;u.addEventListener("transitionend",()=>{u.removeAttribute("style"),g.abort()},{signal:g.signal})},s=d=>{const f=d.querySelector(".title"),u=d.querySelector(".content"),p=u.offsetHeight;u.style.maxHeight=`${p}px`,requestAnimationFrame(()=>{u.style.maxHeight=0,f.classList.remove("active")});const g=new AbortController;u.addEventListener("transitionend",()=>{u.removeAttribute("style"),d.open=!1,g.abort()},{signal:g.signal})},c=(d,f)=>{d.preventDefault(),document.getElementById(f.replace("_link","")).scrollIntoView({behavior:"smooth",block:"start"})};return(d,f)=>(y(),ye("details",kh,[k("summary",{class:"title",onClick:a},[Bh,k("b",null,$e(e.header),1)]),k("div",$h,[(y(!0),ye(Ce,null,Qe(e.items,u=>(y(),x(r(ps),{to:`#${u.id}`,class:"item",onClick:p=>c(p,u.id)},{default:l(()=>[n($e(u.label),1)]),_:2},1032,["to","onClick"]))),256))])]))}},Lh=He(Th,[["__scopeId","data-v-e2ae2e49"]]),Dh={class:"sticky"},Ih={class:"ui vertical following fluid accordion text large menu"},Eh={__name:"DocTableContents",props:["title","links"],setup(e){const i=e,a=[...new Set(i.links.map(o=>o.category))];return(o,s)=>{const c=B("SuiHeader"),d=B("SuiRail");return y(),x(d,{id:"table-contents",position:"right",dividing:""},{default:l(()=>[k("div",Dh,[t(c,{as:"h3"},{default:l(()=>[n($e(e.title),1)]),_:1}),k("div",Ih,[(y(),ye(Ce,null,Qe(a,f=>t(Lh,{id:`${f}_link`,header:f,items:e.links.filter(u=>u.category===f)},null,8,["id","header","items"])),64))])])]),_:1})}}},Rh=He(Eh,[["__scopeId","data-v-bd90305d"]]),Ph={class:"intro"},zh={__name:"DocComponent",props:["title","description","componentDocs"],setup(e){const i=G();return(a,o)=>{const s=B("SuiHeaderSubheader"),c=B("SuiHeader"),d=B("SuiDivider"),f=B("SuiIcon"),u=B("SuiMenuItem"),p=B("SuiPopup"),g=B("SuiMenu"),m=B("SuiContainer"),_=B("SuiSegment");return y(),ye("div",null,[t(_,{id:"masthead",vertical:"",style:{"border-bottom":"1px solid #DDDDDD"}},{default:l(()=>[t(m,{class:"main"},{default:l(()=>[k("div",Ph,[t(c,{as:"h1"},{default:l(()=>[n($e(e.title)+" ",1),t(s,null,{default:l(()=>[n($e(e.description),1)]),_:1})]),_:1}),t(d,{hidden:""}),t(g,{icon:"",floated:"right"},{default:l(()=>[t(u,{as:"a",icon:"",ref_key:"el",ref:i,href:"https://github.com/nightswinger/vue-fomantic-ui"},{default:l(()=>[t(f,{name:"alternate github"})]),_:1},512),t(p,{trigger:i.value,position:"top right"},{default:l(()=>[n(" View Project on GitHub ")]),_:1},8,["trigger"])]),_:1})])]),_:1})]),_:1}),t(m,{class:"main"},{default:l(()=>[t(_,{basic:"",fitted:""},{default:l(()=>[e.componentDocs?(y(),ye(Ce,{key:0},[t(Ah,{docs:e.componentDocs},null,8,["docs"]),t(Rh,{title:e.title,links:e.componentDocs},null,8,["title","links"])],64)):ns("",!0),qi(a.$slots,"default",{},void 0,!0)]),_:3})]),_:3})])}}},ot=He(zh,[["__scopeId","data-v-d22eb33f"]]);var Dr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Wc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Vh(e){if(e.__esModule)return e;var i=e.default;if(typeof i=="function"){var a=function o(){return this instanceof o?Reflect.construct(i,arguments,this.constructor):i.apply(this,arguments)};a.prototype=i.prototype}else a={};return Object.defineProperty(a,"__esModule",{value:!0}),Object.keys(e).forEach(function(o){var s=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(a,o,s.get?s:{enumerable:!0,get:function(){return e[o]}})}),a}var Kc={exports:{}};(function(e){var i=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var a=function(o){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,c=0,d={},f={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function h(b){return b instanceof u?new u(b.type,h(b.content),b.alias):Array.isArray(b)?b.map(h):b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(h){return Object.prototype.toString.call(h).slice(8,-1)},objId:function(h){return h.__id||Object.defineProperty(h,"__id",{value:++c}),h.__id},clone:function h(b,C){C=C||{};var $,E;switch(f.util.type(b)){case"Object":if(E=f.util.objId(b),C[E])return C[E];$={},C[E]=$;for(var F in b)b.hasOwnProperty(F)&&($[F]=h(b[F],C));return $;case"Array":return E=f.util.objId(b),C[E]?C[E]:($=[],C[E]=$,b.forEach(function(N,z){$[z]=h(N,C)}),$);default:return b}},getLanguage:function(h){for(;h;){var b=s.exec(h.className);if(b)return b[1].toLowerCase();h=h.parentElement}return"none"},setLanguage:function(h,b){h.className=h.className.replace(RegExp(s,"gi"),""),h.classList.add("language-"+b)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch($){var h=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec($.stack)||[])[1];if(h){var b=document.getElementsByTagName("script");for(var C in b)if(b[C].src==h)return b[C]}return null}},isActive:function(h,b,C){for(var $="no-"+b;h;){var E=h.classList;if(E.contains(b))return!0;if(E.contains($))return!1;h=h.parentElement}return!!C}},languages:{plain:d,plaintext:d,text:d,txt:d,extend:function(h,b){var C=f.util.clone(f.languages[h]);for(var $ in b)C[$]=b[$];return C},insertBefore:function(h,b,C,$){$=$||f.languages;var E=$[h],F={};for(var N in E)if(E.hasOwnProperty(N)){if(N==b)for(var z in C)C.hasOwnProperty(z)&&(F[z]=C[z]);C.hasOwnProperty(N)||(F[N]=E[N])}var j=$[h];return $[h]=F,f.languages.DFS(f.languages,function(Z,W){W===j&&Z!=h&&(this[Z]=F)}),F},DFS:function h(b,C,$,E){E=E||{};var F=f.util.objId;for(var N in b)if(b.hasOwnProperty(N)){C.call(b,N,b[N],$||N);var z=b[N],j=f.util.type(z);j==="Object"&&!E[F(z)]?(E[F(z)]=!0,h(z,C,null,E)):j==="Array"&&!E[F(z)]&&(E[F(z)]=!0,h(z,C,N,E))}}},plugins:{},highlightAll:function(h,b){f.highlightAllUnder(document,h,b)},highlightAllUnder:function(h,b,C){var $={callback:C,container:h,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};f.hooks.run("before-highlightall",$),$.elements=Array.prototype.slice.apply($.container.querySelectorAll($.selector)),f.hooks.run("before-all-elements-highlight",$);for(var E=0,F;F=$.elements[E++];)f.highlightElement(F,b===!0,$.callback)},highlightElement:function(h,b,C){var $=f.util.getLanguage(h),E=f.languages[$];f.util.setLanguage(h,$);var F=h.parentElement;F&&F.nodeName.toLowerCase()==="pre"&&f.util.setLanguage(F,$);var N=h.textContent,z={element:h,language:$,grammar:E,code:N};function j(W){z.highlightedCode=W,f.hooks.run("before-insert",z),z.element.innerHTML=z.highlightedCode,f.hooks.run("after-highlight",z),f.hooks.run("complete",z),C&&C.call(z.element)}if(f.hooks.run("before-sanity-check",z),F=z.element.parentElement,F&&F.nodeName.toLowerCase()==="pre"&&!F.hasAttribute("tabindex")&&F.setAttribute("tabindex","0"),!z.code){f.hooks.run("complete",z),C&&C.call(z.element);return}if(f.hooks.run("before-highlight",z),!z.grammar){j(f.util.encode(z.code));return}if(b&&o.Worker){var Z=new Worker(f.filename);Z.onmessage=function(W){j(W.data)},Z.postMessage(JSON.stringify({language:z.language,code:z.code,immediateClose:!0}))}else j(f.highlight(z.code,z.grammar,z.language))},highlight:function(h,b,C){var $={code:h,grammar:b,language:C};if(f.hooks.run("before-tokenize",$),!$.grammar)throw new Error('The language "'+$.language+'" has no grammar.');return $.tokens=f.tokenize($.code,$.grammar),f.hooks.run("after-tokenize",$),u.stringify(f.util.encode($.tokens),$.language)},tokenize:function(h,b){var C=b.rest;if(C){for(var $ in C)b[$]=C[$];delete b.rest}var E=new m;return _(E,E.head,h),g(h,E,b,E.head,0),S(E)},hooks:{all:{},add:function(h,b){var C=f.hooks.all;C[h]=C[h]||[],C[h].push(b)},run:function(h,b){var C=f.hooks.all[h];if(!(!C||!C.length))for(var $=0,E;E=C[$++];)E(b)}},Token:u};o.Prism=f;function u(h,b,C,$){this.type=h,this.content=b,this.alias=C,this.length=($||"").length|0}u.stringify=function h(b,C){if(typeof b=="string")return b;if(Array.isArray(b)){var $="";return b.forEach(function(j){$+=h(j,C)}),$}var E={type:b.type,content:h(b.content,C),tag:"span",classes:["token",b.type],attributes:{},language:C},F=b.alias;F&&(Array.isArray(F)?Array.prototype.push.apply(E.classes,F):E.classes.push(F)),f.hooks.run("wrap",E);var N="";for(var z in E.attributes)N+=" "+z+'="'+(E.attributes[z]||"").replace(/"/g,"&quot;")+'"';return"<"+E.tag+' class="'+E.classes.join(" ")+'"'+N+">"+E.content+"</"+E.tag+">"};function p(h,b,C,$){h.lastIndex=b;var E=h.exec(C);if(E&&$&&E[1]){var F=E[1].length;E.index+=F,E[0]=E[0].slice(F)}return E}function g(h,b,C,$,E,F){for(var N in C)if(!(!C.hasOwnProperty(N)||!C[N])){var z=C[N];z=Array.isArray(z)?z:[z];for(var j=0;j<z.length;++j){if(F&&F.cause==N+","+j)return;var Z=z[j],W=Z.inside,fe=!!Z.lookbehind,Be=!!Z.greedy,U=Z.alias;if(Be&&!Z.pattern.global){var K=Z.pattern.toString().match(/[imsuy]*$/)[0];Z.pattern=RegExp(Z.pattern.source,K+"g")}for(var de=Z.pattern||Z,le=$.next,Le=E;le!==b.tail&&!(F&&Le>=F.reach);Le+=le.value.length,le=le.next){var Je=le.value;if(b.length>h.length)return;if(!(Je instanceof u)){var at=1,Ue;if(Be){if(Ue=p(de,Le,h,fe),!Ue||Ue.index>=h.length)break;var ue=Ue.index,Xt=Ue.index+Ue[0].length,Pt=Le;for(Pt+=le.value.length;ue>=Pt;)le=le.next,Pt+=le.value.length;if(Pt-=le.value.length,Le=Pt,le.value instanceof u)continue;for(var J=le;J!==b.tail&&(Pt<Xt||typeof J.value=="string");J=J.next)at++,Pt+=J.value.length;at--,Je=h.slice(Le,Pt),Ue.index-=Le}else if(Ue=p(de,0,Je,fe),!Ue)continue;var ue=Ue.index,re=Ue[0],he=Je.slice(0,ue),Me=Je.slice(ue+re.length),Ne=Le+Je.length;F&&Ne>F.reach&&(F.reach=Ne);var xe=le.prev;he&&(xe=_(b,xe,he),Le+=he.length),w(b,xe,at);var ke=new u(N,W?f.tokenize(re,W):re,U,re);if(le=_(b,xe,ke),Me&&_(b,le,Me),at>1){var L={cause:N+","+j,reach:Ne};g(h,b,C,le.prev,Le,L),F&&L.reach>F.reach&&(F.reach=L.reach)}}}}}}function m(){var h={value:null,prev:null,next:null},b={value:null,prev:h,next:null};h.next=b,this.head=h,this.tail=b,this.length=0}function _(h,b,C){var $=b.next,E={value:C,prev:b,next:$};return b.next=E,$.prev=E,h.length++,E}function w(h,b,C){for(var $=b.next,E=0;E<C&&$!==h.tail;E++)$=$.next;b.next=$,$.prev=b,h.length-=E}function S(h){for(var b=[],C=h.head.next;C!==h.tail;)b.push(C.value),C=C.next;return b}if(!o.document)return o.addEventListener&&(f.disableWorkerMessageHandler||o.addEventListener("message",function(h){var b=JSON.parse(h.data),C=b.language,$=b.code,E=b.immediateClose;o.postMessage(f.highlight($,f.languages[C],C)),E&&o.close()},!1)),f;var A=f.util.currentScript();A&&(f.filename=A.src,A.hasAttribute("data-manual")&&(f.manual=!0));function T(){f.manual||f.highlightAll()}if(!f.manual){var I=document.readyState;I==="loading"||I==="interactive"&&A&&A.defer?document.addEventListener("DOMContentLoaded",T):window.requestAnimationFrame?window.requestAnimationFrame(T):window.setTimeout(T,16)}return f}(i);e.exports&&(e.exports=a),typeof Dr<"u"&&(Dr.Prism=a),a.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(s,c){var d={};d["language-"+c]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[c]},d.cdata=/^<!\[CDATA\[|\]\]>$/i;var f={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:d}};f["language-"+c]={pattern:/[\s\S]+/,inside:a.languages[c]};var u={};u[s]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return s}),"i"),lookbehind:!0,greedy:!0,inside:f},a.languages.insertBefore("markup","cdata",u)}}),Object.defineProperty(a.languages.markup.tag,"addAttribute",{value:function(o,s){a.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:a.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,function(o){var s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+s.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var c=o.languages.markup;c&&(c.tag.addInlined("style","css"),c.tag.addAttribute("style","css"))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),a.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),a.languages.markup&&(a.languages.markup.tag.addInlined("script","javascript"),a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),a.languages.js=a.languages.javascript,function(){if(typeof a>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading…",s=function(A,T){return"✖ Error "+A+" while fetching file: "+T},c="✖ Error: File does not exist or is empty",d={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},f="data-src-status",u="loading",p="loaded",g="failed",m="pre[data-src]:not(["+f+'="'+p+'"]):not(['+f+'="'+u+'"])';function _(A,T,I){var h=new XMLHttpRequest;h.open("GET",A,!0),h.onreadystatechange=function(){h.readyState==4&&(h.status<400&&h.responseText?T(h.responseText):h.status>=400?I(s(h.status,h.statusText)):I(c))},h.send(null)}function w(A){var T=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(A||"");if(T){var I=Number(T[1]),h=T[2],b=T[3];return h?b?[I,Number(b)]:[I,void 0]:[I,I]}}a.hooks.add("before-highlightall",function(A){A.selector+=", "+m}),a.hooks.add("before-sanity-check",function(A){var T=A.element;if(T.matches(m)){A.code="",T.setAttribute(f,u);var I=T.appendChild(document.createElement("CODE"));I.textContent=o;var h=T.getAttribute("data-src"),b=A.language;if(b==="none"){var C=(/\.(\w+)$/.exec(h)||[,"none"])[1];b=d[C]||C}a.util.setLanguage(I,b),a.util.setLanguage(T,b);var $=a.plugins.autoloader;$&&$.loadLanguages(b),_(h,function(E){T.setAttribute(f,p);var F=w(T.getAttribute("data-range"));if(F){var N=E.split(/\r\n?|\n/g),z=F[0],j=F[1]==null?N.length:F[1];z<0&&(z+=N.length),z=Math.max(0,Math.min(z-1,N.length)),j<0&&(j+=N.length),j=Math.max(0,Math.min(j,N.length)),E=N.slice(z,j).join(`
`),T.hasAttribute("data-start")||T.setAttribute("data-start",String(z+1))}I.textContent=E,a.highlightElement(I)},function(E){T.setAttribute(f,g),I.textContent=E})}}),a.plugins.fileHighlight={highlight:function(T){for(var I=(T||document).querySelectorAll(m),h=0,b;b=I[h++];)a.highlightElement(b)}};var S=!1;a.fileHighlight=function(){S||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),S=!0),a.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Kc);var Xc=Kc.exports;const Fh=Wc(Xc),Va={mounted(e,i){var s;const a=i.modifiers,o=i.value;a.script||o==="script"?e.className="language-javascript":e.className="language-markup",Fh.highlightElement(e.children[0]),(s=e.children[0].parentElement)==null||s.setAttribute("tabindex","-1")}},Mh={style:{paddingTop:"3rem"}},Nh=k("p",null," Fomantic-UI Vue provides UI components based on Fomantic-UI. ",-1),Hh=k("code",null,`$ npm install vue-fomantic-ui
$ npm install fomantic-ui-css
# or
$ yarn add vue-fomantic-ui
$ yarn add fomantic-ui-css`,-1),Oh=[Hh],qh={style:{paddingTop:"3rem",marginBottom:"3rem"}},Gh=k("p",null," You can import all components as Vue plugin. ",-1),jh=k("code",null,`import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

const app = createApp(App)

app.use(FomanticUI)`,-1),Uh=[jh],Yh=k("br",null,null,-1),Jh=k("p",null," Or pick a component indivisually, add it to your components option. ",-1),Wh=k("code",null,`import { SuiButton } from 'vue-fomantic-ui'

export default {
  components: { SuiButton },
  // ...
}`,-1),Kh=[Wh],Xh={__name:"GettingStarted",setup(e){return(i,a)=>{const o=B("SuiHeader");return y(),x(ot,{title:"Getting Started",description:"Getting up and running with Fomantic-UI Vue"},{default:l(()=>[k("section",Mh,[t(o,{as:"h2"},{default:l(()=>[n("Install")]),_:1}),Nh,t(o,{as:"h3"},{default:l(()=>[n("via Package Manager")]),_:1}),Si((y(),ye("pre",null,Oh)),[[r(Va)]])]),k("section",qh,[t(o,{as:"h2"},{default:l(()=>[n("Usage")]),_:1}),Gh,Si((y(),ye("pre",null,Uh)),[[r(Va),void 0,void 0,{script:!0}]]),Yh,Jh,Si((y(),ye("pre",null,Kh)),[[r(Va),void 0,void 0,{script:!0}]])])]),_:1})}}};function Qc(e){var i,a,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(i=0;i<e.length;i++)e[i]&&(a=Qc(e[i]))&&(o&&(o+=" "),o+=a);else for(i in e)e[i]&&(o&&(o+=" "),o+=i);return o}function te(){for(var e,i,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(i=Qc(e))&&(o&&(o+=" "),o+=i);return o}const v=(e,i)=>e?i:"",Pe=(e,i)=>typeof e=="string"?`${e} ${i}`:"",Ie=(e,i)=>e===!0?i:e==="below"?`${i} ${e}`:typeof e=="string"?`${e} ${i}`:"",Tl=e=>e==="justified"?"justified":Pe(e,"aligned"),ri=(e,i)=>typeof e=="number"&&i?`${So(e)} ${i}`:typeof e=="number"&&!i?So(e):typeof e=="string"&&e==="equal"?`${e} width`:"",Fl=(e,i)=>e?`${So(e)} wide ${i}`:"",So=e=>["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"][e-1],Qh=V({props:{fluid:Boolean,inverted:Boolean,multiple:Boolean,styled:Boolean},setup(e){const i=e.multiple?G([]):G(-1),a=s=>e.multiple?i.value.includes(s):i.value===s,o=s=>{const c=a(s);e.multiple?c?i.value=i.value.filter(d=>d!==s):i.value.push(s):i.value=c?-1:s};return ut("isTabActive",a),ut("updateActiveIndex",o),{computedClass:M(()=>te("ui",v(e.fluid,"fluid"),v(e.inverted,"inverted"),v(e.styled,"styled"),"accordion"))}},render(){var e,i;const a=o=>(o.forEach((s,c)=>{s.props.index=c}),o);return t("div",{class:this.computedClass},[a((i=(e=this.$slots).default)==null?void 0:i.call(e))])}}),Zh=V({render(){var e,i;return X("div",{class:"accordion"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Zc=V({props:{active:Boolean},setup(e){return{computedClass:M(()=>te(v(e.active,"active"),"content"))}},render(){var e,i;return X("div",{class:this.computedClass},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Y=V({props:{as:String,bordered:Boolean,circular:Boolean,color:String,colored:Boolean,corner:[Boolean,String],disabled:Boolean,fitted:Boolean,flipped:String,inverted:Boolean,link:Boolean,loading:Boolean,name:String,primary:Boolean,rotated:String,secondary:Boolean,size:String},setup(e){return{classes:M(()=>te(e.color,e.name,e.size,v(e.primary,"primary"),v(e.secondary,"secondary"),v(e.bordered,"bordered"),v(e.circular,"circular"),v(e.colored,"colored"),v(e.disabled,"disabled"),v(e.fitted,"fitted"),v(e.inverted,"inverted"),v(e.link,"link"),v(e.loading,"loading"),Pe(e.flipped,"flipped"),Pe(e.rotated,"rotated"),Ie(e.corner,"corner"),"icon"))}},render(){let e=this.$props.as||"i";return X(e,{"aria-hidden":!0,class:this.classes})}}),e_=V({props:{index:Number,title:String},setup(e){const i=Fe("isTabActive"),a=Fe("updateActiveIndex"),o=M(()=>te(v(i(e.index),"active"),"title"));return{isTabActive:i,updateActiveIndex:a,titleClass:o}},render(){return t(Ce,null,[t("div",{class:this.titleClass,onClick:()=>this.updateActiveIndex(this.index)},[t(Y,{name:"dropdown"},null),this.title]),t(Zc,{active:this.isTabActive(this.index)},{default:()=>{var e,i;return[(i=(e=this.$slots).default)==null?void 0:i.call(e)]}})])}}),t_=V({props:{active:Boolean},setup(e){return{computedClass:M(()=>te(v(e.active,"active"),"title"))}},render(){var e,i;return X("div",{class:this.computedClass},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),i_={install(e){e.component("SuiAccordion",Qh),e.component("SuiAccordionAccordion",Zh),e.component("SuiAccordionContent",Zc),e.component("SuiAccordionTab",e_),e.component("SuiAccordionTitle",t_)}},l_=V({props:{centered:Boolean,test:String,unit:String},setup(e){return{computedClass:M(()=>te("ui",e.unit,v(e.centered,"centered"),v(!!e.test,"test"),"ad"))}},render(){var e,i,a,o;return this.$props.test?X("div",{class:this.computedClass,"data-text":this.$props.test},(i=(e=this.$slots).default)==null?void 0:i.call(e)):X("div",{class:this.computedClass},(o=(a=this.$slots).default)==null?void 0:o.call(a))}}),a_={install(e){e.component("SuiAdvertisement",l_)}},Tt=V({props:{icon:String},setup(e){return{computedClass:M(()=>te(e.icon,"icon","divider"))}},render(){var e,i;return this.icon?t("i",{"aria-hidden":"true",class:this.computedClass},null):t("div",{class:"divider"},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),et=V({props:{active:Boolean,href:String,link:Boolean,to:String},setup(e){const i=M(()=>te(v(e.active,"active"),"section")),a=e.link||!!e.href;return{computedClass:i,isLink:a}},render(){let e="div";this.isLink?e="a":this.to&&(e=B("router-link"));const i={href:this.href,to:this.to};return t(e,Zi({class:this.computedClass},i),{default:()=>{var a,o;return[(o=(a=this.$slots).default)==null?void 0:o.call(a)]}})}}),ni=V({props:{icon:String,inverted:Boolean,sections:{type:Array,default:()=>[]},size:String},setup(e){return{computedClass:M(()=>te("ui",e.size,v(e.inverted,"inverted"),"breadcrumb"))}},render(){var e,i;const a=()=>{var o;return(o=this.sections)==null?void 0:o.map((s,c)=>{const d={active:s.active,href:s.href,link:s.link,to:s.to};return t(Ce,null,[t(et,d,{default:()=>[s.content]}),this.sections.length!==c+1&&t(Tt,{icon:this.icon},{default:()=>[n(" / ")]})])})};return t("div",{class:this.computedClass},[((i=(e=this.$slots).default)==null?void 0:i.call(e))||a()])}}),n_={install(e){e.component("SuiBreadcrumb",ni),e.component("SuiBreadcrumbDivider",Tt),e.component("SuiBreadcrumbSection",et)}},Ri=V({props:{as:String,size:String},setup(e){return{computedClass:M(()=>te(e.size,"icons"))}},render(){var e,i;let a=this.$props.as||"i";return X(a,{class:this.computedClass},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),o_={install(e){e.component("SuiIcon",Y),e.component("SuiIconGroup",Ri)}},s_=()=>({icon:[Boolean,String]}),r_=e=>({iconClasses:M(()=>typeof e.icon=="boolean"&&e.icon||e.labeled&&e.icon?"icon":te({icon:e.icon&&!e.content}))}),u_=["right","left"],c_=()=>({labeled:[Boolean,String]}),d_=e=>({labeledClasses:M(()=>typeof e.labeled=="boolean"&&e.labeled?"labeled":u_.includes(e.labeled)?`${e.labeled} labeled`:"")}),p_=["double","usual double","elastic"],ed=()=>({loading:{type:[Boolean,String],validator:e=>p_.includes(e)||typeof e=="boolean"}}),td=e=>({loadingClasses:M(()=>te(e.loading,{loading:e.loading}))}),P=V({props:{active:Boolean,animated:[Boolean,String],as:{type:String,default:"button"},attached:String,basic:Boolean,circular:Boolean,color:String,compact:Boolean,content:[String,Array],disabled:Boolean,facebook:Boolean,floated:String,fluid:Boolean,google:Boolean,linkedin:Boolean,instagram:Boolean,inverted:Boolean,negative:Boolean,positive:Boolean,primary:Boolean,secondary:Boolean,size:String,telegram:Boolean,tertiary:Boolean,toggle:Boolean,twitter:Boolean,vk:Boolean,whatsapp:Boolean,youtube:Boolean,...s_(),...c_(),...ed()},setup(e){const{iconClasses:i}=r_(e),{labeledClasses:a}=d_(e),{loadingClasses:o}=td(e);return{classes:M(()=>te("ui",e.color,e.size,v(e.active,"active"),v(e.basic,"basic"),v(e.circular,"circular"),v(e.compact,"compact"),v(e.disabled,"disabled"),v(e.facebook,"facebook"),v(e.fluid,"fluid"),v(e.google,"google"),v(e.linkedin,"linkedin"),v(e.instagram,"instagram"),v(e.inverted,"inverted"),v(e.negative,"negative"),v(e.positive,"positive"),v(e.primary,"primary"),v(e.secondary,"secondary"),v(e.telegram,"telegram"),v(e.tertiary,"tertiary"),v(e.toggle,"toggle"),v(e.twitter,"twitter"),v(e.vk,"vk"),v(e.whatsapp,"whatsapp"),v(e.youtube,"youtube"),Pe(e.attached,"attached"),Pe(e.floated,"floated"),Ie(e.animated,"animated"),i.value,a.value,o.value,"button"))}},render(){var e,i;const a=this.attached?"div":this.as;return X(a,{class:this.classes,role:"button"},[typeof this.icon=="string"&&X(Y,{name:this.icon}),this.content||((i=(e=this.$slots).default)==null?void 0:i.call(e))])}}),Di=V({props:{hidden:Boolean,visible:Boolean},setup(e){return{computedClass:M(()=>te(v(e.hidden,"hidden"),v(e.visible,"visible"),"content"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),ft=V({props:{attached:String,basic:Boolean,color:String,icon:Boolean,labeled:Boolean,size:String,vertical:Boolean,widths:Number},setup(e){return{computedClass:M(()=>te("ui",e.color,e.size,v(e.basic,"basic"),v(e.icon,"icon"),v(e.labeled,"labeled"),v(e.vertical,"vertical"),Pe(e.attached,"attached"),ri(e.widths,""),"buttons"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),m_={install(e){e.component("SuiButton",P),e.component("SuiButtonContent",Di),e.component("SuiButtonGroup",ft)}},f_=(e,i,a)=>{e.clickOutside=o=>{e===o.target||e.contains(o.target)||i.value(o,e)},document.body.addEventListener("click",e.clickOutside)},g_=(e,i,a)=>{document.body.removeEventListener("click",e.clickOutside)},ms={mounted:f_,unmounted:g_};function h_(e,i={}){const a=G(e.value?"open":"closed"),o=()=>a.value=e.value?"open":"closed";pt(e,f=>{a.value=f?"opening":"closing"});const s=f=>{f.addEventListener("animationend",o,!0)},c=f=>{f&&f.removeEventListener("animationend",o)},d=M((f="scale")=>{switch(a.value){case"opening":return`animating ${f} in`;case"open":return"visible active";case"closing":return`visible active animating ${f} out`;case"closed":return"hidden"}});return{setupAnimation:s,removeAnimation:c,computeAnimationClass:d}}const __=V({name:"SuiCalendarDay",emits:["select-day"],props:{active:Boolean,date:null,disabled:Boolean,onSelectDay:Function},setup(e,{emit:i}){const a=G(!1),o=()=>{e.disabled||(a.value=!0)},s=()=>a.value=!1,c=()=>{e.disabled||i("select-day",e.date)},d=()=>{let u=new Date;return u.getFullYear()===e.date.year&&u.getMonth()===e.date.month&&u.getDate()===e.date.day},f=M(()=>te("link",v(a.value,"focus"),v(e.active&&!e.disabled,"active"),v(e.disabled,"adjacent disabled"),v(d(),"today")));return{onMouseEnter:o,onMouseLeave:s,onClick:c,computedClass:f}},render(){var e,i;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:It(this.onClick,["stop"])},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),b_=V({name:"SuiCalendarDateTable",setup(){const{calendarDays:e,updateSelectMode:i,set:a,add:o,subtract:s,selectedDate:c,setSelectedDate:d,selectType:f,updateVisible:u,formatDate:p}=Fe(xi);return{calendarDays:e,isEqualDay:g=>{if(!c.value)return!1;const m=c.value;return m.getFullYear()===g.year&&m.getMonth()===g.month&&m.getDate()===g.day},onSelectDay:g=>{if(a(g.year,"years"),a(g.month,"months"),a(g.day,"days"),f.value==="date"){let m=new Date(g.year,g.month,g.day);d(m),u(!1);return}i("hour")},updateSelectMode:i,formatDate:p,add:o,subtract:s}},render(){const e=()=>this.calendarDays.map((i,a)=>t("tr",null,[i.map(o=>t(__,{active:this.isEqualDay(o),date:o,disabled:!o.currentMonth,onSelectDay:this.onSelectDay},{default:()=>[o.day]}))]));return t("table",{class:"ui celled center aligned unstackable table day seven column"},[t("thead",null,[t("tr",null,[t("th",{colspan:7},[t("span",{class:"link",onClick:It(()=>this.updateSelectMode("month"),["stop"])},[this.formatDate("date")]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"months")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"months")},[t("i",{class:"chevron right icon"},null)])])]),t("tr",null,[t("th",null,[n("S")]),t("th",null,[n("M")]),t("th",null,[n("T")]),t("th",null,[n("W")]),t("th",null,[n("T")]),t("th",null,[n("F")]),t("th",null,[n("S")])])]),t("tbody",null,[e()])])}}),Se=V({name:"SuiCalendarTableCell",emits:["click-cell"],props:{active:Boolean,today:Boolean,value:null,onClickCell:Function},setup(e){const i=G(!1),a=()=>i.value=!0,o=()=>i.value=!1,s=M(()=>te("link",v(e.active,"active"),v(e.today,"today"),v(i.value,"focus")));return{onMouseEnter:a,onMouseLeave:o,computedClass:s}},render(){var e,i;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:It(()=>this.$emit("click-cell",this.value),["stop"])},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),v_=V({name:"SuiCalendarMonthTable",setup(){const{state:e,set:i,add:a,subtract:o,selectedDate:s,updateSelectMode:c}=Fe(xi);return{state:e,add:a,subtract:o,updateSelectMode:c,isActive:d=>s.value?e.year===s.value.getFullYear()&&e.month===d:!1,isThisMonth:d=>{let f=new Date;return d===f.getMonth()&&e.year===f.getFullYear()},onClickCell:d=>{i(d,"months"),c("day")}}},render(){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i=()=>Array(4).fill(0).map((a,o)=>t("tr",null,[t(Se,{value:o*3,active:this.isActive(o*3),today:this.isThisMonth(o*3),onClickCell:this.onClickCell},{default:()=>[e[o*3]]}),t(Se,{value:o*3+1,active:this.isActive(o*3+1),today:this.isThisMonth(o*3+1),onClickCell:this.onClickCell},{default:()=>[e[o*3+1]]}),t(Se,{value:o*3+2,active:this.isActive(o*3+2),today:this.isThisMonth(o*3+2),onClickCell:this.onClickCell},{default:()=>[e[o*3+2]]})]));return t("table",{class:"ui celled center aligned unstackable table month three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:It(()=>this.updateSelectMode("year"),["stop"])},[this.state.year]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"years")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"years")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[i()])])}}),S_=V({name:"SuiCalendarYearTable",setup(e){const{state:i,set:a,add:o,subtract:s,selectedDate:c,updateSelectMode:d}=Fe(xi),f=()=>o(10,"years"),u=()=>s(10,"years"),p=M(()=>Math.round(i.year/10)*10+1);return{updateSelectMode:d,moveNextTwelveYears:f,movePrevTwelveYears:u,headerStartYear:p,isActive:g=>c.value?g===c.value.getFullYear():!1,isThisYear:g=>g===new Date().getFullYear(),onClickCell:g=>{a(g,"years"),d("day")}}},render(){return t("table",{class:"ui celled center aligned unstackable table year three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:It(()=>this.updateSelectMode("day"),["stop"])},[this.headerStartYear,n(" - "),this.headerStartYear+11]),t("span",{class:"prev link",onClick:this.movePrevTwelveYears},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.moveNextTwelveYears},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(Se,{value:this.headerStartYear,active:this.isActive(this.headerStartYear),today:this.isThisYear(this.headerStartYear),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear]}),t(Se,{value:this.headerStartYear+1,active:this.isActive(this.headerStartYear+1),today:this.isThisYear(this.headerStartYear+1),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+1]}),t(Se,{value:this.headerStartYear+2,active:this.isActive(this.headerStartYear+2),today:this.isThisYear(this.headerStartYear+2),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+2]})]),t("tr",null,[t(Se,{value:this.headerStartYear+3,active:this.isActive(this.headerStartYear+3),today:this.isThisYear(this.headerStartYear+3),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+3]}),t(Se,{value:this.headerStartYear+4,active:this.isActive(this.headerStartYear+4),today:this.isThisYear(this.headerStartYear+4),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+4]}),t(Se,{value:this.headerStartYear+5,active:this.isActive(this.headerStartYear+5),today:this.isThisYear(this.headerStartYear+5),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+5]})]),t("tr",null,[t(Se,{value:this.headerStartYear+6,active:this.isActive(this.headerStartYear+6),today:this.isThisYear(this.headerStartYear+6),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+6]}),t(Se,{value:this.headerStartYear+7,active:this.isActive(this.headerStartYear+7),today:this.isThisYear(this.headerStartYear+7),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+7]}),t(Se,{value:this.headerStartYear+8,active:this.isActive(this.headerStartYear+8),today:this.isThisYear(this.headerStartYear+8),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+8]})]),t("tr",null,[t(Se,{value:this.headerStartYear+9,active:this.isActive(this.headerStartYear+9),today:this.isThisYear(this.headerStartYear+9),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+9]}),t(Se,{value:this.headerStartYear+10,active:this.isActive(this.headerStartYear+10),today:this.isThisYear(this.headerStartYear+10),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+10]}),t(Se,{value:this.headerStartYear+11,active:this.isActive(this.headerStartYear+11),today:this.isThisYear(this.headerStartYear+11),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+11]})])])])}}),y_=V({name:"SuiCalendarHourTable",setup(){const{updateSelectMode:e,state:i,set:a,add:o,subtract:s,formatDate:c,selectedDate:d}=Fe(xi);return{updateSelectMode:e,formatDate:c,onPrevClick:()=>s(1,"days"),onNextClick:()=>o(1,"days"),onClickCell:f=>{a(f,"hours"),e("minute")},isActive:f=>{if(!d.value)return!1;let u=d.value.getFullYear(),p=d.value.getMonth(),g=d.value.getDate(),m=d.value.getHours();return i.year===u&&i.month===p&&i.day===g&&f===m}}},render(){return t("table",{class:"ui celled center aligned unstackable table hour four column"},[t("thead",null,[t("tr",null,[t("th",{colspan:4},[t("span",{class:"link",onClick:It(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:this.onPrevClick},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.onNextClick},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(Se,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},{default:()=>[n("12:00 AM")]}),t(Se,{active:this.isActive(1),value:1,onClickCell:this.onClickCell},{default:()=>[n("1:00 AM")]}),t(Se,{active:this.isActive(2),value:2,onClickCell:this.onClickCell},{default:()=>[n("2:00 AM")]}),t(Se,{active:this.isActive(3),value:3,onClickCell:this.onClickCell},{default:()=>[n("3:00 AM")]})]),t("tr",null,[t(Se,{active:this.isActive(4),value:4,onClickCell:this.onClickCell},{default:()=>[n("4:00 AM")]}),t(Se,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},{default:()=>[n("5:00 AM")]}),t(Se,{active:this.isActive(6),value:6,onClickCell:this.onClickCell},{default:()=>[n("6:00 AM")]}),t(Se,{active:this.isActive(7),value:7,onClickCell:this.onClickCell},{default:()=>[n("7:00 AM")]})]),t("tr",null,[t(Se,{active:this.isActive(8),value:8,onClickCell:this.onClickCell},{default:()=>[n("8:00 AM")]}),t(Se,{active:this.isActive(9),value:9,onClickCell:this.onClickCell},{default:()=>[n("9:00 AM")]}),t(Se,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},{default:()=>[n("10:00 AM")]}),t(Se,{active:this.isActive(11),value:11,onClickCell:this.onClickCell},{default:()=>[n("11:00 AM")]})]),t("tr",null,[t(Se,{active:this.isActive(12),value:12,onClickCell:this.onClickCell},{default:()=>[n("12:00 PM")]}),t(Se,{active:this.isActive(13),value:13,onClickCell:this.onClickCell},{default:()=>[n("1:00 PM")]}),t(Se,{active:this.isActive(14),value:14,onClickCell:this.onClickCell},{default:()=>[n("2:00 PM")]}),t(Se,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},{default:()=>[n("3:00 PM")]})]),t("tr",null,[t(Se,{active:this.isActive(16),value:16,onClickCell:this.onClickCell},{default:()=>[n("4:00 PM")]}),t(Se,{active:this.isActive(17),value:17,onClickCell:this.onClickCell},{default:()=>[n("5:00 PM")]}),t(Se,{active:this.isActive(18),value:18,onClickCell:this.onClickCell},{default:()=>[n("6:00 PM")]}),t(Se,{active:this.isActive(19),value:19,onClickCell:this.onClickCell},{default:()=>[n("7:00 PM")]})]),t("tr",null,[t(Se,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},{default:()=>[n("8:00 PM")]}),t(Se,{active:this.isActive(21),value:21,onClickCell:this.onClickCell},{default:()=>[n("9:00 PM")]}),t(Se,{active:this.isActive(22),value:22,onClickCell:this.onClickCell},{default:()=>[n("10:00 PM")]}),t(Se,{active:this.isActive(23),value:23,onClickCell:this.onClickCell},{default:()=>[n("11:00 PM")]})])])])}});function Vt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ct(e)}const w_=V({name:"SuiCalendarMinuteTable",setup(){const{state:e,set:i,add:a,subtract:o,formatDate:s,updateSelectMode:c,updateVisible:d,selectedDate:f}=Fe(xi);return{add:a,subtract:o,formatDate:s,updateSelectMode:c,getTimeLabel:u=>{let p=e.hour%12,g=e.hour>12?"PM":"AM",m=u.toString().padStart(2,"0");return e.hour===0?`12:${m} AM`:e.hour===12?`12:${m} PM`:`${p}:${m} ${g}`},onClickCell:u=>{i(u,"minutes"),f.value=new Date(e.year,e.month,e.day,e.hour,e.minute),d(!1)},isActive:u=>{if(!f.value)return!1;let p=f.value.getFullYear(),g=f.value.getMonth(),m=f.value.getDate(),_=f.value.getHours(),w=f.value.getMinutes();return e.year===p&&e.month===g&&e.day===m&&e.hour===_&&u===w}}},render(){let e,i,a,o,s,c,d,f,u,p,g,m;return t("table",{class:"ui celled center aligned unstackable table minute three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:It(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"days")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"days")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(Se,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},Vt(e=this.getTimeLabel(0))?e:{default:()=>[e]}),t(Se,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},Vt(i=this.getTimeLabel(5))?i:{default:()=>[i]}),t(Se,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},Vt(a=this.getTimeLabel(10))?a:{default:()=>[a]})]),t("tr",null,[t(Se,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},Vt(o=this.getTimeLabel(15))?o:{default:()=>[o]}),t(Se,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},Vt(s=this.getTimeLabel(20))?s:{default:()=>[s]}),t(Se,{active:this.isActive(25),value:25,onClickCell:this.onClickCell},Vt(c=this.getTimeLabel(25))?c:{default:()=>[c]})]),t("tr",null,[t(Se,{active:this.isActive(30),value:30,onClickCell:this.onClickCell},Vt(d=this.getTimeLabel(30))?d:{default:()=>[d]}),t(Se,{active:this.isActive(35),value:35,onClickCell:this.onClickCell},Vt(f=this.getTimeLabel(35))?f:{default:()=>[f]}),t(Se,{active:this.isActive(40),value:40,onClickCell:this.onClickCell},Vt(u=this.getTimeLabel(40))?u:{default:()=>[u]})]),t("tr",null,[t(Se,{active:this.isActive(45),value:45,onClickCell:this.onClickCell},Vt(p=this.getTimeLabel(45))?p:{default:()=>[p]}),t(Se,{active:this.isActive(50),value:50,onClickCell:this.onClickCell},Vt(g=this.getTimeLabel(50))?g:{default:()=>[g]}),t(Se,{active:this.isActive(55),value:55,onClickCell:this.onClickCell},Vt(m=this.getTimeLabel(55))?m:{default:()=>[m]})])])])}}),C_=V({name:"SuiCalendarBody",setup(){const e=G(null),{visible:i,selectMode:a}=Fe(xi),{setupAnimation:o,removeAnimation:s,computeAnimationClass:c}=h_(i);Ai(()=>o(e.value)),Qi(()=>s(e.value));const d=M(()=>te("ui popup calendar","bottom left","transition",c.value));return{rootRef:e,computedClass:d,selectMode:a}},render(){const e=()=>{switch(this.selectMode){case"day":return t(b_,null,null);case"month":return t(v_,null,null);case"year":return t(S_,null,null);case"hour":return t(y_,null,null);case"minute":return t(w_,null,null)}};return t("div",{ref:i=>this.rootRef=i,class:this.computedClass,style:"inset: 38px auto auto 0px;"},[e()])}}),A_=V({name:"SuiCalendarInput",props:{placeholder:String,value:null},setup(e){const{visible:i,updateVisible:a,updateSelectMode:o,set:s,state:c,formatCalendarDate:d}=Fe(xi);return{visible:i,formatCalendarDate:d,onClick:()=>{i.value||(o("day"),e.value&&(s(e.value.getFullYear(),"years"),s(e.value.getMonth(),"months"))),a(!i.value)}}},render(){return t("input",{type:"text",placeholder:this.placeholder,value:this.formatCalendarDate(this.value),onClick:()=>this.onClick()},null)}}),x_=(e,i)=>{let a=new Date;a.setDate(1),a.setMonth(i),a.setFullYear(e);let o=a.getDay();return o>=7?o-7:o},k_=(e,i)=>{let a,o;return i===0?(a=11,o=e-1):(a=i-1,o=e),32-new Date(o,a,32).getDate()},Mn=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e];function B_(){const e=G(!1),i=(A=!1)=>e.value=A,a=new Date;function o(A){if(!A)return;let T=A.getFullYear(),I=Mn(A.getMonth()),h=A.getDate(),b=A.getHours(),C=A.getMinutes(),$=b>11?"PM":"AM";b=b%12,b===0&&(b=12);let E=C.toString().padStart(2,"0");return`${I} ${h}, ${T} ${b}:${E} ${$}`}const s=G("default"),c=G("day");function d(A){c.value=A}const f=G(null),u=A=>{f.value=A},p=oi({year:a.getFullYear(),month:a.getMonth(),day:a.getDate(),hour:a.getHours(),minute:a.getMinutes()}),g=(A,T)=>{switch(T){case"years":p.year=A;break;case"months":p.month=A;break;case"days":p.day=A;break;case"hours":p.hour=A;break;case"minutes":p.minute=A}},m=(A,T)=>{let I=new Date(p.year,p.month,p.day,p.hour);switch(T){case"years":I.setFullYear(I.getFullYear()+A);break;case"months":I.setMonth(I.getMonth()+A);break;case"days":I.setDate(I.getDate()+A);break;case"hours":I.setHours(I.getHours()+A);break}p.year=I.getFullYear(),p.month=I.getMonth(),p.day=I.getDate(),p.hour=I.getHours()},_=(A,T)=>{let I=new Date(p.year,p.month,p.day,p.hour);switch(T){case"years":I.setFullYear(I.getFullYear()-A);break;case"months":I.setMonth(I.getMonth()-A);break;case"days":I.setDate(I.getDate()-A);break;case"hours":I.setHours(I.getHours()-A);break}p.year=I.getFullYear(),p.month=I.getMonth(),p.day=I.getDate(),p.hour=I.getHours()},w=(A="default")=>A==="date"?`${Mn(p.month)} ${p.year}`:`${Mn(p.month)} ${p.day}, ${p.year}`,S=M(()=>{let A=p.month,T=p.year;A>11&&(A=A%11-1,T+=1);let I=[],h=x_(T,A),b=32-new Date(T,A,32).getDate(),C=k_(T,A),$=1;for(let E=0;E<6;E++){let F=[];if(E===0){for(let z=C-h+1;z<=C;z++){let j=A===0?11:A-1,Z=A===0?T-1:T;F.push({day:z,month:j,year:Z,currentMonth:!1})}let N=7-F.length;for(let z=0;z<N;z++)F.push({day:$,month:A,year:T,currentMonth:!0}),$++}else for(let N=0;N<7;N++){if($>b){let z=A===11?0:A+1,j=A===11?T+1:T;F.push({day:$-b,month:z,year:j,currentMonth:!1})}else F.push({day:$,month:A,year:T,currentMonth:!0});$++}I.push(F)}return I});return{visible:e,updateVisible:i,calendarDays:S,formatCalendarDate:o,selectMode:c,updateSelectMode:d,selectType:s,selectedDate:f,setSelectedDate:u,state:p,set:g,add:m,subtract:_,formatDate:w}}const xi=Symbol("useCalendar"),$_=V({directives:{clickoutside:ms},emits:["update:modelValue"],props:{modelValue:null,placeholder:String},setup(e,{emit:i}){const a=B_();ut(xi,a);const{updateVisible:o,selectedDate:s}=a;return pt(s,c=>{i("update:modelValue",c)}),{updateVisible:o}},render(){return Si(t("div",{class:"ui calendar"},[t("div",{class:"ui input left icon"},[t(C_,null,null),t("i",{class:"calendar icon"},null),t(A_,{placeholder:this.placeholder,value:this.modelValue},null)])]),[[pn("clickoutside"),()=>this.updateVisible(!1)]])}}),T_={install:e=>{e.component("SuiCalendar",$_)}},L_=["mini","tiny","small","medium","large","big","huge","massive"],Ll=()=>({size:{type:String,validator:e=>L_.includes(e)}}),Dl=e=>({sizeClass:M(()=>e.size)}),D_=V((e,{slots:i})=>{const{loadingClasses:a}=td(e),{sizeClass:o}=Dl(e),s=M(()=>te("ui",e.color,v(e.centered,"centered"),v(e.disabled,"disabled"),v(e.fluid,"fluid"),v(e.horizontal,"horizontal"),v(e.link,"link"),v(e.primary,"primary"),v(e.raised,"raised"),v(e.secondary,"secondary"),a.value,o.value,"card"));return()=>{var c,d;return e.href||e.link?t("a",{class:s.value,href:e.href},[(c=i.default)==null?void 0:c.call(i)]):t("div",{class:s.value},[(d=i.default)==null?void 0:d.call(i)])}},{props:{centered:Boolean,color:String,disabled:Boolean,fluid:Boolean,horizontal:Boolean,href:String,link:Boolean,primary:Boolean,raised:Boolean,secondary:Boolean,...ed(),...Ll()}}),I_=V((e,{slots:i})=>{const a=M(()=>te(v(e.extra,"extra"),"content"));return()=>{var o,s,c,d;return t("div",{class:a.value},[e.header&&t("div",{class:"header"},[e.header]),i.header&&t("div",{class:"header"},[(o=i.header)==null?void 0:o.call(i)]),i.meta&&t("div",{class:"meta"},[(s=i.meta)==null?void 0:s.call(i)]),i.description&&t("div",{class:"description"},[(c=i.description)==null?void 0:c.call(i)]),(d=i.default)==null?void 0:d.call(i)])}},{props:{extra:Boolean,header:String}}),E_=V({props:{textAlign:String},setup(e){return{computedClass:M(()=>te(Pe(e.textAlign,"aligned"),"description"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),R_=V({props:{basic:Boolean,centered:Boolean,doubling:Boolean,horizontal:Boolean,inverted:Boolean,itemsPerRow:Number,stackable:Boolean},setup(e){return{classes:M(()=>te("ui",v(e.basic,"basic"),v(e.centered,"centered"),v(e.doubling,"doubling"),v(e.horizontal,"horizontal"),v(e.inverted,"inverted"),v(e.stackable,"stackable"),ri(e.itemsPerRow,""),"cards"))}},render(){var e,i;return t("div",{class:this.classes},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),P_=V({props:{textAlign:String},setup(e){return{computedClass:M(()=>te(Pe(e.textAlign,"aligned"),"header"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),z_=V({render(){var e,i;return X("div",{class:"meta"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),V_={install(e){e.component("SuiCard",D_),e.component("SuiCardContent",I_),e.component("SuiCardDescription",E_),e.component("SuiCardGroup",R_),e.component("SuiCardHeader",P_),e.component("SuiCardMeta",z_)}},id=V({emits:["update:modelValue","change","click"],props:{disabled:Boolean,indeterminate:Boolean,label:String,modelValue:null,radio:Boolean,readOnly:Boolean,slider:Boolean,toggle:Boolean,value:null},setup(e,{emit:i}){const a=M(()=>te("ui",!e.label&&"fitted",v(e.disabled,"disabled"),v(e.indeterminate,"indeterminate"),v(e.radio,"radio"),v(e.readOnly,"read-only"),v(e.slider,"slider"),v(e.toggle,"toggle"),"checkbox")),o=M(()=>Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue);return{computedClass:a,checked:o,onClick:s=>{if(e.disabled||e.readOnly)return;let c;e.value?o.value?c=e.modelValue.filter(d=>e.value!==d):c=e.modelValue?[...e.modelValue,e.value]:[e.value]:c=!e.modelValue,i("change",s),i("click",s),i("update:modelValue",c)}}},render(){return t("div",{class:this.computedClass,onClick:this.onClick},[t("input",{type:this.radio?"radio":"checkbox",class:"hidden",checked:this.checked,readonly:!0},null),t("label",null,[this.label])])}}),F_={install(e){e.component("SuiCheckbox",id)}},ld=V({name:"SuiCommentAvatar",props:{as:String,src:String},render(){let e=this.$props.as||"div";return this.src?X(e,{class:"avatar"},X("img",{src:this.$props.src})):t("div",{class:"avatar"},[this.$slots.default&&this.$slots.default()])}});function M_(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ct(e)}const N_=V({name:"SuiComment",render(){let e;return t("div",{class:"comment"},[this.$slots.avatar&&t(ld,{as:"a"},M_(e=this.$slots.avatar())?e:{default:()=>[e]}),t("div",{class:"content"},[this.$slots.author&&t("a",{class:"author"},[this.$slots.author()]),this.$slots.metadata&&t("div",{class:"metadata"},[this.$slots.metadata()]),this.$slots.text&&t("div",{class:"text"},[this.$slots.text()]),this.$slots.actions&&t("div",{class:"actions"},[this.$slots.actions()])]),this.$slots.default&&this.$slots.default()])}}),H_=V({props:{active:Boolean},setup(e){const{active:i}=e;return{computedClass:M(()=>te(v(i,"active")))}},render(){var e,i,a,o;return this.computedClass?X("a",{class:this.computedClass},(i=(e=this.$slots).default)==null?void 0:i.call(e)):X("a",{},(o=(a=this.$slots).default)==null?void 0:o.call(a))}}),O_=V({render(){var e,i;return X("div",{class:"actions"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),q_=V({props:{as:String},render(){var e,i;let a=this.$props.as||"div";return X(a,{class:"author"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),G_=V({render(){var e,i;return X("div",{class:"content"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),j_=V({props:{collapsed:Boolean,inverted:Boolean,minimal:Boolean,size:String,threaded:Boolean},setup(e){return{computedClass:M(()=>te("ui",e.size,v(e.collapsed,"collapsed"),v(e.inverted,"inverted"),v(e.minimal,"minimal"),v(e.threaded,"threaded"),"comments"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),U_=V({render(){var e,i;return X("div",{class:"metadata"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Y_=V({render(){var e,i;return X("div",{class:"text"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),J_={install(e){e.component("SuiComment",N_),e.component("SuiCommentAction",H_),e.component("SuiCommentActions",O_),e.component("SuiCommentAuthor",q_),e.component("SuiCommentAvatar",ld),e.component("SuiCommentContent",G_),e.component("SuiCommentGroup",j_),e.component("SuiCommentMetadata",U_),e.component("SuiCommentText",Y_)}},Ni=V({props:{fluid:Boolean,text:Boolean,textAlign:String},setup(e){return{computedClass:M(()=>te("ui",v(e.fluid,"fluid"),v(e.text,"text"),Tl(e.textAlign),"container"))}},render(){var e,i;return X("div",{class:this.computedClass},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),W_={install(e){e.component("SuiContainer",Ni)}},Ut=V({props:{active:Boolean,inverted:Boolean,page:Boolean,simple:Boolean,verticalAlign:String},setup(e){return{computedClass:M(()=>te("ui",v(e.active,"active"),v(e.inverted,"inverted"),v(e.page,"page"),v(e.simple,"simple"),Pe(e.verticalAlign,"aligned"),"dimmer"))}},render(){var e,i;return X("div",{class:this.computedClass},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),K_=V((e,{slots:i})=>{const a=M(()=>te("ui",v(e.blurring,"blurring"),"dimmable","segment"));return()=>{var o;return t("div",{class:a.value},[(o=i.default)==null?void 0:o.call(i)])}},{props:{blurring:Boolean}}),X_={install(e){e.component("SuiDimmer",Ut),e.component("SuiDimmerDimmable",K_)}},Ve=V({props:{clearing:Boolean,fitted:Boolean,hidden:Boolean,horizontal:Boolean,inverted:Boolean,section:Boolean,textAlign:String,vertical:Boolean,...Ll()},setup(e){const{sizeClass:i}=Dl(e);return{classes:M(()=>te("ui",i.value,v(e.clearing,"clearing"),v(e.fitted,"fitted"),v(e.hidden,"hidden"),v(e.horizontal,"horizontal"),v(e.inverted,"inverted"),v(e.section,"section"),v(e.vertical,"vertical"),Pe(e.textAlign,"aligned"),"divider"))}},render(){var e,i;return X("div",{class:this.classes},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Q_={install(e){e.component("SuiDivider",Ve)}},Z_=(e,i)=>e.map(a=>a[i]),ad=["top","middle","bottom"],eb={verticalAlign:{type:String,validator:e=>ad.includes(e)}};function tb(e){return{verticalAlignClass:M(()=>e.verticalAlign&&ad.includes(e.verticalAlign)?`${e.verticalAlign} aligned`:null)}}const ib=["left","right"],lb={floated:{type:String,validator:e=>ib.includes(e)}};function ab(e){return{floatedClass:M(()=>e.floated&&(e.floated==="left"||e.floated==="right")?`${e.floated} floated`:null)}}const O=V({props:{as:String,attached:String,basic:Boolean,circular:Boolean,color:String,corner:String,empty:Boolean,floating:Boolean,horizontal:Boolean,icon:String,image:Boolean,inverted:Boolean,pointing:[Boolean,String],prompt:Boolean,ribbon:[Boolean,String],size:String,tag:Boolean},setup(e,{slots:i}){const a=M(()=>te("ui",e.size,e.color,v(e.basic,"basic"),v(e.circular,"circular"),v(e.empty,"empty"),v(e.floating,"floating"),v(e.horizontal,"horizontal"),v(!!e.icon&&i.default===void 0,"icon"),v(e.image,"image"),v(e.inverted,"inverted"),v(e.prompt,"prompt"),v(e.tag,"tag"),Pe(e.attached,"attached"),Pe(e.corner,"corner"),Ie(e.pointing,"pointing"),Ie(e.ribbon,"ribbon"),"label"));let o=e.as||"div";return e.icon?()=>{var s;return X(o,{class:a.value},[X(Y,{name:e.icon}),(s=i.default)==null?void 0:s.call(i)])}:()=>{var s;return X(o,{class:a.value},(s=i.default)==null?void 0:s.call(i))}}}),Il=V({render(){var e,i;return t("div",{class:"detail"},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),El=V({props:{basic:Boolean,circular:Boolean,color:String,size:String,tag:Boolean},setup(e,{slots:i}){const a=M(()=>te("ui",e.color,e.size,v(e.basic,"basic"),v(e.circular,"circular"),v(e.tag,"tag"),"labels"));return()=>{var o;return X("div",{class:a.value},(o=i.default)==null?void 0:o.call(i))}}}),nb={install(e){e.component("SuiLabel",O),e.component("SuiLabelDetail",Il),e.component("SuiLabelGroup",El)}},oe=V({props:{as:String,avatar:Boolean,bordered:Boolean,centered:Boolean,circular:Boolean,disabled:Boolean,fluid:Boolean,hidden:Boolean,href:String,inline:Boolean,label:Object,target:String,wrapped:Boolean,rounded:Boolean,size:String,spaced:[Boolean,String],src:String,...eb,...lb},setup(e,{slots:i}){const{verticalAlignClass:a}=tb(e),{floatedClass:o}=ab(e),s=M(()=>te("ui",e.size,a.value,o.value,v(e.avatar,"avatar"),v(e.bordered,"bordered"),v(e.centered,"centered"),v(e.circular,"circular"),v(e.disabled,"disabled"),v(e.fluid,"fluid"),v(e.hidden,"hidden"),v(e.inline,"inline"),v(e.rounded,"rounded"),Ie(e.spaced,"spaced"),"image"));if(e.as==="a"||e.as==="router-link"){let c=e.as;return e.as==="router-link"&&(c=B(e.as)),()=>{var d;return X(c,{class:s.value,href:e.href,target:e.target&&e.target},X("img",{src:e.src},(d=i.default)==null?void 0:d.call(i)))}}return e.wrapped?()=>{var c;return X("div",{class:s.value},X("img",{src:e.src},(c=i.default)==null?void 0:c.call(i)))}:e.label?()=>X("div",{class:s.value},[X("img",{src:e.src}),X(O,{...e.label})]):()=>t("img",{class:s.value,src:e.src},null)}}),yo=V({props:{size:String},setup(e,{slots:i}){const a=M(()=>te("ui",e.size,"images"));return()=>{var o;return X("div",{class:a.value},(o=i.default)==null?void 0:o.call(i))}}}),ob={install(e){e.component("SuiImage",oe),e.component("SuiImageGroup",yo)}},sb=V({name:"SuiDropdownText",emits:["remove"],props:{clearable:Boolean,filtered:Boolean,icon:{type:String,default:"dropdown"},item:[Object,String],placeholder:String,text:String,onRemove:Function},setup(e){return{computedClass:M(()=>te(v(e.filtered,"filtered"),v(!e.text&&!e.item||Array.isArray(e.item)&&e.item.length===0,"default"),"text"))}},render(){var e,i;let a;if(this.item&&!Array.isArray(this.item))if(typeof this.item=="object"){const{flag:c,text:d}=this.item;a=t(Ce,null,[c&&t("i",{class:`${c} flag`},null),d])}else a=this.item;else a=this.text||this.placeholder;const o=typeof this.item=="object"?(e=this.item)==null?void 0:e.image:null,s=typeof this.item=="object"?(i=this.item)==null?void 0:i.label:null;return t(Ce,null,[t("div",{class:this.computedClass},[o&&t(oe,o,null),s&&t(O,s,null),a]),t("i",{class:`${this.icon} icon`},null),this.$props.clearable&&t("i",{class:"remove icon",onClick:It(()=>this.$emit("remove"),["stop"])},null)])}}),rb=e=>{const i=oi({visible:!1,animating:!1,direction:"down",multiple:e.multiple});return pt(()=>i.visible,()=>{i.animating=!0,setTimeout(()=>i.animating=!1,200)}),{state:i,show:()=>!i.animating&&(i.visible=!0),hide:()=>{i.animating||(i.visible=!1)}}};function ub(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ct(e)}const cb=V({directives:{clickoutside:ms},emits:["update:modelValue"],props:{button:Boolean,clearable:Boolean,compact:Boolean,floating:Boolean,fluid:Boolean,icon:String,inline:Boolean,item:Boolean,labeled:Boolean,modelValue:[Object,String],multiple:Boolean,options:Array,placeholder:String,pointing:[Boolean,String],scrolling:Boolean,selection:Boolean,search:Boolean,searchInMenu:Boolean,simple:Boolean,text:String},setup(e,{emit:i}){const a=rb(e);ut("useDropdown",a);const{state:o,show:s,hide:c}=a,d=M(()=>te("ui",v(e.button,"button"),v(e.clearable,"clearable"),v(e.compact,"compact"),v(e.floating,"floating"),v(e.fluid,"fluid"),v(!!e.icon,"icon"),v(e.inline,"inline"),v(e.item,"item"),v(e.labeled,"labeled"),v(e.multiple,"multiple"),v(e.search,"search"),v(e.scrolling,"scrolling"),v(e.selection,"selection"),v(e.simple,"simple"),Ie(e.pointing,"pointing"),"dropdown",v(o.visible,"active visible"),v(o.direction==="up","upward"))),f=()=>{var T;if(o.visible)return c();(T=_.value)==null||T.focus(),s()},u=()=>{e.search&&_.value&&_.value.focus(),s()},p=()=>c(),g=G(""),m=M(()=>{const T=g.value.toLowerCase();return e.options.filter(I=>{const h=typeof I=="object"?I.text:I,b=h.toLowerCase().includes(T);if(!e.multiple)return b;if(Array.isArray(e.modelValue)){const C=typeof I=="object"?Z_(e.modelValue,"text").includes(h):e.modelValue.includes(h);return b&&!C}return b})}),_=G(null),w=T=>g.value=T.target.value,S=T=>{var I;if(g.value="",e.search&&((I=_.value)==null||I.focus()),e.multiple){let h=Array.isArray(e.modelValue)?[...e.modelValue,T]:[T];return i("update:modelValue",h)}return i("update:modelValue",T)},A=T=>{if(Array.isArray(e.modelValue)){const I=e.modelValue.findIndex(h=>h===T);if(I>-1){let h=Object.assign(e.modelValue);h.splice(I,1),i("update:modelValue",h)}}};return ut("selection",e.selection),{computedClass:d,onClick:f,openMenu:u,closeMenu:p,filteredText:g,filteredOptions:m,inputRef:_,onInput:w,onSelect:S,removeItem:A}},render(){var e,i;const a=()=>{if(Array.isArray(this.$props.modelValue))return this.$props.modelValue.map(d=>typeof d=="object"?t("a",{class:"ui label"},[d.flag&&t("i",{class:`${d.flag} flag`},null),d.text,t("i",{class:"delete icon",onClick:It(()=>this.removeItem(d),["stop"])},null)]):t("a",{class:"ui label"},[d,t("i",{class:"delete icon",onClick:It(()=>this.removeItem(d),["stop"])},null)]))},o=()=>this.filteredOptions.filter(d=>this.$props.multiple&&Array.isArray(this.$props.modelValue)?!this.$props.modelValue.includes(d):!0).map(d=>t(nd,{item:d,active:this.$props.modelValue&&typeof d=="object"?d.text===this.$props.modelValue.text:d===this.$props.modelValue,text:typeof d=="object"?d.text:d,flag:typeof d=="object"&&Object.keys(d).includes("flag")?d.flag:"",image:d.image,label:d.label,disabled:d.disabled,onSelect:this.onSelect},null)),s=()=>{let d={clearable:this.clearable,filtered:this.filteredText.length>0,icon:this.icon,item:this.modelValue,placeholder:this.placeholder,text:this.text};return t(sb,Zi(d,{onRemove:()=>this.$emit("update:modelValue",null)}),null)},c=()=>{let d;return t(od,{search:this.$props.searchInMenu,onSearch:this.onInput},ub(d=o())?d:{default:()=>[d]})};return Si(t("div",{class:this.computedClass,onClick:this.onClick},[this.$props.multiple&&a(),this.search&&t("input",{ref:d=>this.inputRef=d,type:"text",class:"search",autocomplete:"off",tabindex:0,value:this.filteredText,onInput:d=>this.onInput(d)},null),this.search&&this.multiple&&t("span",{class:"sizer"},null),s(),((i=(e=this.$slots).default)==null?void 0:i.call(e))||c()]),[[pn("clickoutside"),this.closeMenu]])}}),nd=V({emits:["select"],props:{active:Boolean,flag:String,description:String,icon:String,image:Object,item:[Object,String],label:Object,text:String,disabled:Boolean,onSelect:Function},setup(e,{emit:i}){const{state:a,hide:o}=Fe("useDropdown");return{computedClass:M(()=>te(v(e.active,"active"),v(e.disabled,"disabled"),"item")),onClick:()=>{a.multiple||o(),i("select",e.item?e.item:e.text)}}},render(){return t("div",{class:this.computedClass,onClick:It(this.onClick,["stop"])},[this.flag&&t("i",{class:`${this.flag} flag`},null),this.icon&&t("i",{class:`${this.icon} icon`},null),this.image&&t(oe,this.image,null),this.label&&t(O,this.label,null),this.description&&t("span",{class:"description"},[this.description]),this.text])}}),od=V({emits:["search"],props:{search:Boolean,onSearch:Function},setup(e,{emit:i,slots:a}){const{state:o}=Fe("useDropdown"),s=G(null),c=M(()=>{let f=()=>o.visible?`animating slide ${o.direction} in visible`:`animating slide ${o.direction} out visible`;return te("menu","transition",v(o.visible,"visible"),v(!o.visible&&!o.animating,"hidden"),v(o.animating,f()))});pt(()=>o.visible,f=>{if(!f||!s.value)return;let u=s.value.parentElement;const{top:p,height:g}=u==null?void 0:u.getBoundingClientRect(),m=p-d.value.length*37,_=document.documentElement.clientHeight-p-g-d.value.length*37;o.direction=m>_?"up":"down"});const d=M(()=>{var f;let u=[],p=(f=a.default)==null?void 0:f.call(a);return p&&p.forEach(g=>{g.type.name==="SuiSelectItem"&&u.push(g)}),u});return{container:s,computedClass:c,onSearchInput:f=>i("search",f)}},render(){var e,i,a,o;const s=()=>t(Ce,null,[t("div",{class:"ui left icon input",onClick:It(()=>{},["stop"])},[t("input",{type:"text",onInput:c=>this.onSearchInput(c)},null),t("i",{class:"search icon"},null)]),t("div",{class:"ui divider"},null)]);return t("div",{ref:c=>this.container=c,class:this.computedClass},[this.$slots.header&&t("div",{class:"header"},[(i=(e=this.$slots).header)==null?void 0:i.call(e)]),this.$props.search&&s(),(o=(a=this.$slots).default)==null?void 0:o.call(a)])}}),db={install(e){e.component("SuiDropdown",cb),e.component("SuiDropdownItem",nd),e.component("SuiDropdownMenu",od)}},pb=V({props:{active:Boolean,aspectRatio:Boolean,autoplay:Boolean,id:String,placeholder:String,source:String,url:String},setup(e){const i=G(e.active),a=()=>{i.value=!i.value},o=()=>e.source==="youtube"?[`//www.youtube.com/embed/${e.id}`,"?autohide=true",`&amp;autoplay=${e.autoplay}`,"&amp;jsapi=false"].join(""):e.url,s=M(()=>te("ui",e.aspectRatio,v(i.value,"active"),"embed"));return{active:i,getSrc:o,clickHandler:a,computedClass:s}},render(){let e=[X("i",{class:"video play icon"}),X("img",{class:"placeholder",src:this.placeholder})];return this.active&&e.push(X("div",{class:"embed"},X("iframe",{src:this.getSrc()}))),X("div",{class:this.computedClass,onClick:this.clickHandler},e)}}),mb={install(e){e.component("SuiEmbed",pb)}},Lt=V({props:{disabled:Boolean,link:Boolean,loading:Boolean,name:String,size:String},setup(e){return{computedClass:M(()=>te(e.size,v(e.disabled,"disabled"),v(e.link,"link"),v(e.loading,"loading")))}},render(){return this.computedClass?X("em",{class:this.computedClass,"data-emoji":this.$props.name}):X("em",{"data-emoji":this.$props.name})}}),fb={install(e){e.component("SuiEmoji",Lt)}},gb=V({props:{disabled:Boolean,inverted:Boolean,size:String},setup(e,{slots:i}){const a=M(()=>te("ui",e.size,v(e.disabled,"disabled"),v(e.inverted,"inverted"),"feed"));return()=>{var o;return X("div",{class:a.value},(o=i.default)==null?void 0:o.call(i))}}}),hb=V({render(){var e,i;return X("div",{class:"content"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),_b=V({render(){var e,i;return X("div",{class:"date"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),bb=V({props:{disabled:Boolean},setup(e,{slots:i}){const a=M(()=>te(v(e.disabled,"disabled"),"event"));return()=>{var o;return t("div",{class:a.value},[i.label&&t("div",{class:"label"},[i.label()]),(i.summary||i.meta)&&t("div",{class:"content"},[i.summary&&t("div",{class:"summary"},[i.summary()]),i.extraText&&t("div",{class:"extra text"},[i.extraText()]),i.extraImages&&t("div",{class:"extra images"},[i.extraImages()]),i.meta&&t("div",{class:"meta"},[i.meta()])]),(o=i.default)==null?void 0:o.call(i)])}}}),vb=V({props:{images:Boolean,text:Boolean},setup(e){const{images:i,text:a}=e;return{computedClass:M(()=>te(v(i,"images"),v(a,"text"),"extra"))}},render(){var e,i;return X("div",{class:this.computedClass},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Sb=V({render(){var e,i;return X("div",{class:"label"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),yb=V({render(){var e,i;return X("a",{class:"like"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),wb=V({render(){var e,i;return X("div",{class:"meta"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Cb=V({render(){var e,i;return X("div",{class:"summary"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Ab=V({render(){var e,i;return X("a",{class:"user"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),xb={install(e){e.component("SuiFeed",gb),e.component("SuiFeedContent",hb),e.component("SuiFeedDate",_b),e.component("SuiFeedEvent",bb),e.component("SuiFeedExtra",vb),e.component("SuiFeedLabel",Sb),e.component("SuiFeedLike",yb),e.component("SuiFeedMeta",wb),e.component("SuiFeedSummary",Cb),e.component("SuiFeedUser",Ab)}},Yt=V(e=>{const{sizeClass:i}=Dl(e),a=M(()=>te(i.value,e.name,"flag"));return()=>t("i",{class:a.value},null)},{props:{name:String,...Ll()}}),kb={install(e){e.component("SuiFlag",Yt)}},Nt=V({props:{error:Boolean,info:Boolean,inverted:Boolean,loading:Boolean,reply:Boolean,success:Boolean,unstackable:Boolean,warning:Boolean,size:String},setup(e){return{classes:M(()=>te("ui",e.size,v(e.error,"error"),v(e.info,"info"),v(e.inverted,"inverted"),v(e.loading,"loading"),v(e.reply,"reply"),v(e.success,"success"),v(e.unstackable,"unstackable"),v(e.warning,"warning"),"form"))}},render(){var e,i;return t("form",{class:this.classes},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),Ir=["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"];function Bb(e){return{widthClass:M(()=>Number(e.width)>0?`${Ir[Number(e.width)-1]} wide`:typeof e.width=="string"||Ir.includes(e.width)?`${e.width} wide`:null)}}const it=V({emits:["update:modelValue"],props:{disabled:Boolean,error:Boolean,inline:Boolean,label:String,modelValue:String,placeholder:String,required:Boolean,type:String,width:String||Number},setup(e,{emit:i}){const{widthClass:a}=Bb(e),o=M(()=>te(v(e.disabled,"disabled"),v(e.error,"error"),v(e.inline,"inline"),v(e.required,"required"),a.value,"field")),s=e.type||"text";return{computedClass:o,inputType:s,onInput:c=>i("update:modelValue",c.target.value)}},render(){var e,i;return this.label?t("div",{class:this.computedClass},[t("label",null,[this.label]),t("input",{type:this.inputType,placeholder:this.placeholder,value:this.modelValue,onInput:this.onInput},null)]):t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),fs=V({props:{widths:String},setup(e){return{computedClass:M(()=>te(Pe(e.widths,"width"),"fields"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),wo=V({props:{label:String,placeholder:String,rows:[Number,String]},render(){return this.label?t("div",{class:"field"},[t("label",null,[this.label]),t("textarea",{placeholder:this.placeholder,rows:this.rows},null)]):t("div",{class:"field"},[t("textarea",{placeholder:this.placeholder,rows:this.rows},null)])}}),$b={install(e){e.component("SuiForm",Nt),e.component("SuiFormField",it),e.component("SuiFormGroup",fs),e.component("SuiFormTextarea",wo)}},ba=V({props:{celled:[Boolean,String],centered:Boolean,columns:[Number,String],compact:Boolean,container:Boolean,divided:[Boolean,String],doubling:Boolean,inverted:Boolean,padded:[Boolean,String],relaxed:[Boolean,String],reversed:String,stackable:Boolean,textAlign:String,verticalAlign:String},setup(e){return{computedClass:M(()=>te("ui",e.container&&"container",v(e.centered,"centered"),v(e.compact,"compact"),v(e.doubling,"doubling"),v(e.inverted,"inverted"),v(e.stackable,"stackable"),Pe(e.reversed,"reversed"),Pe(e.verticalAlign,"aligned"),Ie(e.celled,"celled"),Ie(e.divided,"divided"),Ie(e.padded,"padded"),Ie(e.relaxed,"relaxed"),Tl(e.textAlign),ri(e.columns,"column"),"grid"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),Bt=V({props:{color:String,computer:Number,floated:String,largeScreen:Number,mobile:Number,only:String,tablet:Number,textAlign:String,width:Number,widescreen:Number},setup(e){return{computedClass:M(()=>te(e.color,Pe(e.floated,"floated"),Pe(e.only,"only"),Tl(e.textAlign),ri(e.width,"wide"),Fl(e.mobile,"mobile"),Fl(e.tablet,"tablet"),Fl(e.computer,"computer"),Fl(e.largeScreen,"large screen"),Fl(e.widescreen,"widescreen"),"column"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),Co=V({props:{centered:Boolean,color:String,columns:Number,only:String,stretched:Boolean,textAlign:String},setup(e){return{computedClass:M(()=>te(e.color,v(e.centered,"centered"),v(e.stretched,"stretched"),Pe(e.only,"only"),ri(e.columns,"column"),Tl(e.textAlign),"row"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),Tb={install(e){e.component("SuiGrid",ba),e.component("SuiGridColumn",Bt),e.component("SuiGridRow",Co)}},Yi=V({props:{as:String},setup(e){return{elementType:e.as||"div"}},render(){var e,i;return X(this.elementType,{class:"sub header"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),me=V({components:{HeaderSubheader:Yi},props:{as:String,attached:[Boolean,String],block:Boolean,color:String,content:String,disabled:Boolean,dividing:Boolean,floated:String,icon:Boolean,image:Boolean,inverted:Boolean,primary:Boolean,secondary:Boolean,size:String,sub:Boolean,subheader:String,textAlign:String},setup(e){const i=e.as||"div",a=M(()=>te("ui",e.color,e.size,v(e.primary,"primary"),v(e.secondary,"secondary"),v(e.block,"block"),v(e.disabled,"disabled"),v(e.dividing,"dividing"),v(e.icon,"icon"),v(e.image,"image"),v(e.inverted,"inverted"),v(e.sub,"sub"),Pe(e.floated,"floated"),Ie(e.attached,"attached"),Tl(e.textAlign),"header"));return{elementType:i,computedClass:a}},render(){var e,i;let a=[];return this.content&&a.push(this.content),this.subheader&&a.push(X(Yi,{},this.subheader)),a.length>0?X(this.elementType,{class:this.computedClass},a):X(this.elementType,{class:this.computedClass},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),gs=V({render(){var e,i;return X("div",{class:"content"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Lb={install(e){e.component("SuiHeader",me),e.component("SuiHeaderContent",gs),e.component("SuiHeaderSubheader",Yi)}},Ze=V({emits:["update:modelValue"],props:{action:String,disabled:Boolean,error:Boolean,fluid:Boolean,focus:Boolean,icon:String,iconPosition:String,inverted:Boolean,label:String,labeled:Boolean,loading:Boolean,modelValue:String,placeholder:String,size:String,transparent:Boolean,type:String},setup(e,{emit:i}){const a=M(()=>typeof e.icon=="string"||e.loading),o=M(()=>!!e.label||e.labeled),s=M(()=>te("ui",e.size,e.action&&"action",v(e.disabled,"disabled"),v(e.error,"error"),v(e.fluid,"fluid"),v(e.focus,"focus"),e.iconPosition,v(a.value,"icon"),v(e.inverted,"inverted"),v(e.loading,"loading"),v(e.transparent,"transparent"),v(o.value,"labeled"),"input")),c=d=>i("update:modelValue",d.target.value);return()=>t("div",{class:s.value},[e.label&&t(O,null,{default:()=>[e.label]}),t("input",{type:e.type||"text",placeholder:e.placeholder,value:e.modelValue,onInput:d=>c(d)},null),a.value&&t(Y,{name:e.icon||"spinner"},null),e.action&&t(P,null,{default:()=>[e.action]})])}}),Db={install(e){e.component("SuiInput",Ze)}},Ib=V({setup(e,{slots:i}){return()=>{var a;return t("div",{class:"item"},[i.image&&t("div",{class:"image"},[i.image()]),(i.header||i.metadata||i.description||i.extra)&&t("div",{class:"content"},[i.header&&t("div",{class:"header"},[i.header()]),i.metadata&&t("div",{class:"meta"},[i.metadata()]),i.description&&t("div",{class:"description"},[i.description()]),i.extra&&t("div",{class:"extra"},[i.extra()])]),(a=i.default)==null?void 0:a.call(i)])}}}),Eb=V({props:{verticalAlign:String},setup(e,{slots:i}){const{verticalAlign:a}=e,o=M(()=>te(Pe(a,"aligned"),"content"));return()=>{var s;return t("div",{class:o.value},[(s=i.default)==null?void 0:s.call(i),i.header&&t("div",{class:"header"},[i.header()]),i.metadata&&t("div",{class:"meta"},[i.metadata()]),i.description&&t("div",{class:"description"},[i.description()])])}}}),Rb=V({render(){var e,i;return X("div",{class:"description"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Pb=V({render(){var e,i;return X("div",{class:"extra"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),zb=V({props:{divided:Boolean,inverted:Boolean,link:Boolean,relaxed:[Boolean,String],unstackable:Boolean},setup(e){return{computedClass:M(()=>te("ui",v(e.divided,"divided"),v(e.inverted,"inverted"),v(e.link,"link"),v(e.unstackable,"unstackable"),Ie(e.relaxed,"relaxed"),"items"))}},render(){var e,i;return X("div",{class:this.computedClass},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Vb=V({props:{as:String},render(){var e,i;let a=this.$props.as||"div";return X(a,{class:"header"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Fb=V({props:{size:String},setup(e){return{computedClass:M(()=>te(e.size,"image"))}},render(){var e,i;return X("div",{class:this.computedClass},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Mb=V({render(){var e,i;return X("div",{class:"meta"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Nb={install(e){e.component("SuiItem",Ib),e.component("SuiItemContent",Eb),e.component("SuiItemDescription",Rb),e.component("SuiItemExtra",Pb),e.component("SuiItemGroup",zb),e.component("SuiItemHeader",Vb),e.component("SuiItemImage",Fb),e.component("SuiItemMeta",Mb)}},sd=V((e,{slots:i})=>{const{sizeClass:a}=Dl(e),o=M(()=>te("ui",v(e.animated,"animated"),v(e.bulleted,"bulleted"),v(e.celled,"celled"),v(e.divided,"divided"),v(e.horizontal,"horizontal"),v(e.inverted,"inverted"),v(e.link,"link"),v(e.ordered,"ordered"),v(e.relaxed,"relaxed"),v(e.selection,"selection"),Pe(e.verticalAlign,"aligned"),Pe(e.floated,"floated"),a.value,"list"));let s=e.as||"div";return()=>{var c;return X(s,{class:o.value},(c=i.default)==null?void 0:c.call(i))}},{props:{animated:Boolean,as:String,bulleted:Boolean,celled:Boolean,divided:Boolean,floated:String,horizontal:Boolean,inverted:Boolean,ordered:Boolean,relaxed:Boolean,link:Boolean,selection:Boolean,verticalAlign:String,...Ll()}}),Ol=V((e,{slots:i})=>{const a=M(()=>te(v(e.active,"active"),v(e.disabled,"disabled"),"item"));let o=e.as||"div";return()=>{var s;return X(o,{class:a.value},(s=i.default)==null?void 0:s.call(i))}},{props:{active:Boolean,as:String,disabled:Boolean}}),Hb=V({setup(e,{slots:i}){return()=>{var a;return X(Y,{...e},(a=i.default)==null?void 0:a.call(i))}}}),Ob=V({props:{verticalAlign:String},setup(e){return{computedClass:M(()=>te(Pe(e.verticalAlign,"aligned"),"content"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),qb=V({props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:i}){return()=>{var a;return X(e.as,{class:"header"},(a=i.default)==null?void 0:a.call(i))}}}),Gb=V({props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:i}){return()=>{var a;return X(e.as,{class:"description"},(a=i.default)==null?void 0:a.call(i))}}}),jb=V({render(){var e,i;return t("div",{class:"list"},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),Ub={install(e){e.component("SuiList",sd),e.component("SuiListItem",Ol),e.component("SuiListIcon",Hb),e.component("SuiListContent",Ob),e.component("SuiListHeader",qb),e.component("SuiListDescription",Gb),e.component("SuiListList",jb)}},Qa=V({props:{action:Boolean,active:Boolean,as:String,browse:Boolean,color:String,disabled:Boolean,fitted:[Boolean,String],header:Boolean,icon:Boolean,index:Number,link:Boolean,name:String,position:String,stackable:Boolean},emits:["selected"],setup(e,{slots:i,emit:a}){let o=e.as||"a";e.header&&(o="div"),e.as==="router-link"&&(o=B(e.as));const s=M(()=>te(e.color,e.position,v(e.action,"action"),v(e.active,"active"),v(e.browse,"browse"),v(e.disabled,"disabled"),v(e.header,"header"),v(e.icon,"icon"),v(e.link,"link"),Ie(e.fitted,"fitted"),"item")),c=M(()=>!e.header&&!e.disabled&&e.as!=="div");return()=>t(o,{class:s.value,onClick:()=>c.value&&a("selected",e.index)},{default:()=>{var d;return[e.name||((d=i.default)==null?void 0:d.call(i))]}})}}),rd=V({props:{attached:[Boolean,String],borderless:Boolean,color:Boolean,compact:Boolean,fixed:Boolean,floated:[Boolean,String],fluid:Boolean,icon:[Boolean,String],inverted:Boolean,items:Array,pagination:Boolean,pointing:Boolean,secondary:Boolean,size:String,stackable:Boolean,tabular:[Boolean,String],text:Boolean,vertical:Boolean,widths:Number},emits:["selected"],setup(e,{slots:i,emit:a}){const o=G(-1),s=M(()=>te("ui",e.color,e.size,v(e.borderless,"borderless"),v(e.compact,"compact"),v(e.fixed,"fixed"),v(e.fluid,"fluid"),v(e.inverted,"inverted"),v(e.pagination,"pagination"),v(e.pointing,"pointing"),v(e.secondary,"secondary"),v(e.stackable,"stackable"),v(e.text,"text"),v(e.vertical,"vertical"),Ie(e.attached,"attached"),Ie(e.floated,"floated"),Ie(e.icon,"icon"),Ie(e.tabular,"tabular"),ri(e.widths,"item"),"menu")),c=u=>typeof u=="string"?u:u.text,d=(u,p)=>{if(typeof u!="string")return u[p]},f=(u,p)=>{o.value=u,a("selected",p)};return()=>t("div",{class:s.value},[i.default&&i.default(),e.items&&e.items.map((u,p)=>t(Qa,{index:p,active:p===o.value,as:typeof u!="string"?d(u,"as"):void 0,color:d(u,"color"),header:typeof u!="string"&&u.header,onSelected:g=>f(g,u)},{default:()=>[typeof u!="string"&&u.icon&&t(Y,{name:u.icon},null),c(u)]})),i.right&&t("div",{class:"right menu"},[i.right()])])}}),Yb=V({props:{as:String,content:String},setup(e,{slots:i}){let a=e.as||"div";return()=>t(a,{class:"header"},{default:()=>{var o;return[e.content||((o=i.default)==null?void 0:o.call(i))]}})}}),Jb=V({props:{position:String},setup(e){const{position:i}=e;return{computedClass:M(()=>te(i,"menu"))}},render(){var e,i;return X("div",{class:this.computedClass},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Wb={install(e){e.component("SuiMenu",rd),e.component("SuiMenuHeader",Yb),e.component("SuiMenuItem",Qa),e.component("SuiMenuMenu",Jb)}},An=V({props:{attached:[Boolean,String],aligned:String,color:String,closable:Boolean,compact:Boolean,content:String,header:String,error:Boolean,floating:Boolean,hidden:Boolean,icon:[Boolean,String],info:Boolean,list:Array,negative:Boolean,positive:Boolean,size:String,success:Boolean,visible:Boolean,warning:Boolean},emits:["close"],setup(e,{emit:i,slots:a}){const o=M(()=>te("ui",e.color,e.size,v(e.compact,"compact"),v(e.error,"error"),v(e.floating,"floating"),v(e.hidden,"hidden"),v(!!e.icon,"icon"),v(e.info,"info"),v(e.negative,"negative"),v(e.positive,"positive"),v(e.success,"success"),v(e.visible,"visible"),v(e.warning,"warning"),Pe(e.aligned,"aligned"),Ie(e.attached,"attached"),"message")),s=G(),c=()=>{var d;const f=(d=s.value)==null?void 0:d.animate([{opacity:1},{opacity:0}],200);f&&(f.onfinish=()=>{var u;return(u=s.value)==null?void 0:u.classList.add("hidden")},i("close"))};return()=>{var d,f;return t("div",{ref:s,class:o.value},[e.closable&&t("i",{class:"close icon",onClick:c},null),typeof e.icon=="string"&&t(Y,{name:e.icon},null),(d=a.default)==null?void 0:d.call(a),(e.content||a.content||e.header||e.list)&&t("div",{class:"content"},[e.header&&t("div",{class:"header"},[e.header]),e.content&&t("p",null,[e.content]),(f=a.content)==null?void 0:f.call(a),Array.isArray(e.list)&&t("ul",{class:"list"},[e.list.map((u,p)=>t("li",{key:p},[u]))])])])}}}),Kb=V({render(){var e,i;return X("div",{class:"content"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Xb=V({render(){var e,i;return X("div",{class:"header"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Qb=V({render(){var e,i;return X("li",{class:"content"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Zb=V({render(){var e,i;return X("ul",{class:"list"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),ev={install(e){e.component("SuiMessage",An),e.component("SuiMessageContent",Kb),e.component("SuiMessageHeader",Xb),e.component("SuiMessageItem",Qb),e.component("SuiMessageList",Zb)}};function tv(e){return zo()?(Wr(e),!0):!1}function ud(e){return typeof e=="function"?e():r(e)}const cd=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const iv=Object.prototype.toString,lv=e=>iv.call(e)==="[object Object]",Fa=()=>{},av=nv();function nv(){var e,i;return cd&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((i=window==null?void 0:window.navigator)==null?void 0:i.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function ql(e){var i;const a=ud(e);return(i=a==null?void 0:a.$el)!=null?i:a}const dd=cd?window:void 0;function Nn(...e){let i,a,o,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([a,o,s]=e,i=dd):[i,a,o,s]=e,!i)return Fa;Array.isArray(a)||(a=[a]),Array.isArray(o)||(o=[o]);const c=[],d=()=>{c.forEach(g=>g()),c.length=0},f=(g,m,_,w)=>(g.addEventListener(m,_,w),()=>g.removeEventListener(m,_,w)),u=pt(()=>[ql(i),ud(s)],([g,m])=>{if(d(),!g)return;const _=lv(m)?{...m}:m;c.push(...a.flatMap(w=>o.map(S=>f(g,w,S,_))))},{immediate:!0,flush:"post"}),p=()=>{u(),d()};return tv(p),p}let Er=!1;function ov(e,i,a={}){const{window:o=dd,ignore:s=[],capture:c=!0,detectIframe:d=!1}=a;if(!o)return Fa;av&&!Er&&(Er=!0,Array.from(o.document.body.children).forEach(g=>g.addEventListener("click",Fa)),o.document.documentElement.addEventListener("click",Fa));let f=!0;const u=g=>s.some(m=>{if(typeof m=="string")return Array.from(o.document.querySelectorAll(m)).some(_=>_===g.target||g.composedPath().includes(_));{const _=ql(m);return _&&(g.target===_||g.composedPath().includes(_))}}),p=[Nn(o,"click",g=>{const m=ql(e);if(!(!m||m===g.target||g.composedPath().includes(m))){if(g.detail===0&&(f=!u(g)),!f){f=!0;return}i(g)}},{passive:!0,capture:c}),Nn(o,"pointerdown",g=>{const m=ql(e);f=!u(g)&&!!(m&&!g.composedPath().includes(m))},{passive:!0}),d&&Nn(o,"blur",g=>{setTimeout(()=>{var m;const _=ql(e);((m=o.document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(_!=null&&_.contains(o.document.activeElement))&&i(g)},0)})].filter(Boolean);return()=>p.forEach(g=>g())}function pd(e,i="scale"){const a=G(e.modelValue?"open":"closed");return pt(()=>e.modelValue,o=>{a.value=o?"opening":"closing"}),{animationClasses:M(()=>{switch(a.value){case"opening":return`animating ${i} in`;case"open":return"visible active";case"closing":return`visible active animating ${i} out`;case"closed":return"hidden"}}),isClosed:M(()=>a.value==="closed"),onAnimationEnd:()=>a.value=e.modelValue?"open":"closed"}}const sv=V({props:{blurring:Boolean,inverted:Boolean,modelValue:Boolean},setup(e){const{animationClasses:i,isClosed:a,onAnimationEnd:o}=pd(e,"fade"),s=M(()=>te("ui","page modals dimmer transition",v(e.inverted,"inverted"),i.value)),c=M(()=>({display:a.value?"none !important":"flex !important",animationDuration:"500ms"})),d=M(()=>te("dimmable","dimmed",v(e.blurring,"blurring")));return pt(()=>e.modelValue,f=>{if(f){document.body.classList.add(...d.value.split(" "));return}document.body.classList.remove(...d.value.split(" "))}),{className:s,style:c,onAnimationEnd:o}},render(){var e,i;return t("div",{class:this.className,style:this.style,onAnimationend:this.onAnimationEnd},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),hs=V({props:{basic:Boolean,closeIcon:Boolean,dimmer:String,modelValue:Boolean,size:String,closable:{type:Boolean,default:!0},overlay:Boolean,fullscreen:Boolean},setup(e,{emit:i}){const a=G(),{animationClasses:o,isClosed:s}=pd(e),c=M(()=>te("ui",e.size,v(e.basic,"basic"),v(e.overlay,"overlay"),v(e.fullscreen,"fullscreen"),"modal","transition",o.value)),d=M(()=>({display:s.value?"none !important":"block !important",animationDuration:"500ms"})),f=()=>i("update:modelValue",!1);return ov(a,()=>e.closable&&i("update:modelValue",!1)),{computedClass:c,style:d,close:f,modalRef:a}},render(){return t(_n,{to:"body"},{default:()=>[t(sv,{blurring:this.dimmer==="blurring",inverted:this.dimmer==="inverted",modelValue:this.modelValue},{default:()=>{var e,i;return[t("div",{class:this.computedClass,style:this.style,onClick:a=>a.stopPropagation(),ref:a=>this.modalRef=a},[this.closeIcon&&t("i",{"aria-hidden":"true",class:"close icon",onClick:this.close},null),(i=(e=this.$slots).default)==null?void 0:i.call(e)])]}})]})}}),_s=V({render(){var e,i;return t("div",{class:"actions"},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),bs=V({props:{image:Boolean,scrolling:Boolean},setup(e){return{computedClass:M(()=>te(v(e.image,"image"),v(e.scrolling,"scrolling"),"content"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),md=V({render(){var e,i;return X("div",{class:"description"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),vs=V({render(){var e,i;return X("div",{class:"header"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),rv={install(e){e.component("SuiModal",hs),e.component("SuiModalActions",_s),e.component("SuiModalContent",bs),e.component("SuiModalDescription",md),e.component("SuiModalHeader",vs)}},uv=e=>{const i=G(!1),a=Qn(e,"position"),o=G(null),s=Qn(e,"trigger"),c=()=>{i.value=!0,Bl(()=>f())},d=()=>{i.value=!1},f=()=>{if(!o.value||!s.value)return;let u=0,p=0;const g=o.value,m=s.value.$el;g.style.transform=`translate(${u}px, ${p}px)`;const{top:_,left:w,width:S,height:A}=m.getBoundingClientRect(),T=g.getBoundingClientRect(),{pageXOffset:I,pageYOffset:h}=window;if(a.value.includes("top")?(u=I+w,p=h+_-g.offsetTop-g.offsetHeight):(u=w,p=_+A-T.top),a.value.includes("right")){const b=S-T.width;u=w+b}if(a.value.includes("center")){const b=S/2-T.width/2;u=w+b}a.value==="right center"&&(u=w+S,p=_+A/2-T.top-T.height/2),a.value==="left center"&&(u=w-T.width,p=_+A/2-T.top-T.height/2),g.style.display="flex",g.style.position="absolute",g.style.transform=`translate(${u}px, ${p}px)`};return{show:i,showPopup:c,hidePopup:d,placement:a,popupRef:o,triggerRef:s}},cv=V({props:{basic:Boolean,content:String,flowing:Boolean,header:String,inverted:Boolean,position:{type:String,default:"top left"},size:String,trigger:Object,wide:[Boolean,String]},setup(e,{slots:i}){const{show:a,showPopup:o,hidePopup:s,popupRef:c,triggerRef:d}=uv(e);Xo(()=>{var _,w,S;(_=d.value)!=null&&_.$el&&((w=d.value)==null||w.$el.addEventListener("mouseenter",o),(S=d.value)==null||S.$el.addEventListener("mouseleave",s))});const f=G(a.value?"open":"close");M(()=>f.value!=="closed"),pt(()=>a.value,_=>{f.value=_?"opening":"closing"});const u=(_,w="scale")=>{switch(_){case"opening":return`animating ${w} in`;case"open":return"visible active";case"closing":return`visible active animating ${w} out`;case"closed":return"hidden"}},p=()=>f.value=a.value?"open":"closed";Ai(()=>{var _;(_=c.value)==null||_.addEventListener("animationend",p,!0)}),Qi(()=>{var _;(_=c.value)==null||_.removeEventListener("animationend",p)});const g={position:"initial",animationDuration:"200ms"},m=M(()=>te("ignored ui",e.position,e.size,v(e.basic,"basic"),v(e.flowing,"flowing"),v(e.inverted,"inverted"),Ie(e.wide,"wide"),"popup transition",u(f.value,"scale")));return()=>t(_n,{to:"body"},{default:()=>{var _;return[t("div",{ref:c,style:"display: flex; position: absolute; transform: translate(0px, 0px);"},[t("div",{class:m.value,style:g},[e.header&&t("div",{class:"header"},[e.header]),t("div",{class:"content"},[e.content?e.content:(_=i.default)==null?void 0:_.call(i)])])])]}})}}),dv={install(e){e.component("SuiPopup",cv)}},pv=["top","bottom","left"],Ss=()=>({attached:{type:String,validator:e=>pv.includes(e)}}),fd=e=>({attachedClasses:M(()=>te(e.attached,{attached:e.attached}))}),mv=["red","orange","yellow","olive","green","teal","blue","purple","violet","pink","brown","grey","black"],ys=()=>({color:{type:String,validator:e=>mv.includes(e)}}),ws=e=>({colorClasses:M(()=>te(e.inverted&&"inverted",e.color))}),Ao=V({props:{active:Boolean,disabled:Boolean,error:Boolean,indeterminate:[Boolean,String],indicating:Boolean,inverted:Boolean,label:String,percent:Number,progress:[Boolean,String],size:String,success:Boolean,warning:Boolean,...Ss(),...ys()},setup(e,{slots:i}){const{attachedClasses:a}=fd(e),{colorClasses:o}=ws(e),s=M(()=>te("ui",o.value,e.size,v(e.active||e.indicating,"active"),v(e.disabled,"disabled"),v(e.error,"error"),v(e.indicating,"indicating"),v(e.success,"success"),v(e.warning,"warning"),Ie(e.indeterminate,"indeterminate"),a.value,"progress")),c=M(()=>te(Ie(e.progress,"progress"))),d=M(()=>e.progress!=="centered"?{}:{right:0});return()=>{var f;return t("div",{class:s.value,"data-percent":e.percent},[t("div",{class:"bar",style:`width: ${e.percent}%; transition-duration: 300ms;`},[e.progress&&t("div",{class:c.value,style:d.value},[((f=i.default)==null?void 0:f.call(i))||`${e.percent}%`])]),e.label&&t("div",{class:"label"},[e.label])])}}}),fv={install(e){e.component("SuiProgress",Ao)}},gv=V({props:{attached:Boolean,close:[Boolean,String],dividing:Boolean,internal:Boolean,position:String,size:String},setup(e){return{computedClass:M(()=>te("ui",e.position,e.size,v(e.attached,"attached"),v(e.dividing,"dividing"),v(e.internal,"internal"),Ie(e.close,"close"),"rail"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),hv={install(e){e.component("SuiRail",gv)}},_v=V({props:{icon:String,index:{type:Number,default:0}},setup(e){const i=Fe("rating",G(0)),a=Fe("updateRating"),o=Fe("selectedIndex",G(0)),s=Fe("updateSelectedIndex"),c=Fe("clearable",!1),d=Fe("disabled",!1),f=()=>{if(!d){if(c&&e.index===i.value){a(0),s(0);return}a(e.index)}},u=()=>{d||s(e.index)},p=M(()=>e.index<=i.value),g=M(()=>e.index<=o.value),m=M(()=>te(e.icon,v(p.value,"active"),v(g.value,"selected"),"icon"));return()=>t("i",{class:m.value,onClick:()=>f(),onMouseenter:()=>u()},null)}}),bv=V({props:{clearable:Boolean,color:String,defaultRating:{type:Number,default:0},disabled:Boolean,icon:{type:String,default:"star"},maxRating:{type:Number,default:1},modelValue:Number,size:String},setup(e,{emit:i}){const a=G(e.modelValue||e.defaultRating),o=G(!1),s=G(0),c=g=>{a.value=g,i("update:modelValue",g),i("change",g)},d=g=>s.value=g,f=()=>{e.disabled||(o.value=!0)},u=()=>{e.disabled||(o.value=!1,d(0))},p=M(()=>te("ui",e.color,e.icon,e.size,v(e.disabled,"disabled"),"rating",v(o.value,"selected")));return ut("rating",a),ut("updateRating",c),ut("selectedIndex",s),ut("updateSelectedIndex",d),ut("clearable",e.clearable),ut("disabled",e.disabled),()=>t("div",{class:p.value,onMouseenter:()=>f(),onMouseleave:()=>u()},[[...Array(e.maxRating)].map((g,m)=>t(_v,{icon:e.icon,index:m+1},null))])}}),vv={install(e){e.component("SuiRating",bv)}},el=V({props:{active:Boolean,animated:String,disabled:Boolean,instant:Boolean},setup(e){return{computedClass:M(()=>te("ui",e.animated,v(e.active,"active"),v(e.disabled,"disabled"),v(e.instant,"instant"),"reveal"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),Et=V({props:{visible:Boolean,hidden:Boolean},setup(e){return{computedClass:M(()=>te("ui",v(e.visible,"visible"),v(e.hidden,"hidden"),"content"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),Sv={install(e){e.component("SuiReveal",el),e.component("SuiRevealContent",Et)}},yv=V({props:{icon:String,placeholder:String},setup(e){return()=>t("div",{class:"ui search"},[t("div",{class:"ui icon input"},[t("input",{type:"text",class:"prompt",placeholder:e.placeholder},null),t("i",{class:"search icon"},null)]),t("div",{class:"results"},null)])}}),wv={install(e){e.component("SuiSearch",yv)}},H=V((e,{slots:i})=>{const{colorClasses:a}=ws(e),{sizeClass:o}=Dl(e),s=M(()=>te("ui",a.value,o.value,v(e.basic,"basic"),v(e.circular,"circular"),v(e.clearing,"clearing"),v(e.compact,"compact"),v(e.disabled,"disabled"),v(e.inverted,"inverted"),v(e.loading,"loading"),v(e.piled,"piled"),v(e.placeholder,"placeholder"),v(e.raised,"raised"),v(e.secondary,"secondary"),v(e.stacked,"stacked"),v(e.tertiary,"tertiary"),v(e.vertical,"vertical"),Pe(e.floated,"floated"),Pe(e.textAlign,"aligned"),Ie(e.attached,"attached"),Ie(e.fitted,"fitted"),Ie(e.padded,"padded"),Ie(e.scrolling,"scrolling"),"segment"));return()=>{var c;return t("div",{class:s.value},[(c=i.default)==null?void 0:c.call(i)])}},{props:{attached:[Boolean,String],basic:Boolean,circular:Boolean,clearing:Boolean,compact:Boolean,disabled:Boolean,fitted:[Boolean,String],floated:String,inverted:Boolean,loading:Boolean,padded:[Boolean,String],piled:Boolean,placeholder:Boolean,raised:Boolean,scrolling:[Boolean,String],secondary:Boolean,stacked:Boolean,tertiary:Boolean,textAlign:String,vertical:Boolean,...ys(),...Ll()}}),yt=V((e,{slots:i})=>{const{sizeClass:a}=Dl(e),o=M(()=>te("ui",a.value,v(e.basic,"basic"),v(e.compact,"compact"),v(e.horizontal,"horizontal"),v(e.piled,"piled"),v(e.raised,"raised"),v(e.stacked,"stacked"),"segments"));return()=>{var s;return t("div",{class:o.value},[(s=i.default)==null?void 0:s.call(i)])}},{props:{basic:Boolean,compact:Boolean,horizontal:Boolean,piled:Boolean,raised:Boolean,stacked:Boolean,...Ll()}}),Cv=V({render(){var e,i;return t("div",{class:"inline"},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),Av={install(e){e.component("SuiSegment",H),e.component("SuiSegmentGroup",yt),e.component("SuiSegmentInline",Cv)}},xv=V({directives:{clickoutside:ms},emits:["update:visible","show","hide"],props:{animation:{type:String,default:"overlay"},dimmed:Boolean,direction:{type:String,default:"left"},icon:[Boolean,String],inverted:Boolean,visible:Boolean},setup(e,{emit:i}){const a=oi({animating:!1}),o=M(()=>{const s=e.direction==="right"||e.direction==="left";return te("ui","sidebar",e.direction,e.animation,v(e.inverted,"inverted"),v(e.visible,"visible"),v(a.animating,"animating"),v(s,"vertical"),Ie(e.icon,"icon"),"menu")});return pt(()=>e.visible,()=>{if(a.animating=!0,setTimeout(()=>a.animating=!1,500),e.dimmed){const s=document.querySelector(".pusher");s&&s.classList.toggle("dimmed")}}),{computedClass:o,onClickPusher:s=>{const c=s.path||s.composedPath&&s.composedPath();c&&c.find(d=>d.classList&&d.classList.contains("pusher"))&&e.visible&&i("update:visible",!1)}}},render(){var e,i;return Si(t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)]),[[pn("clickoutside"),this.onClickPusher]])}}),kv={install:e=>{e.component("SuiSidebar",xv)}};class Hn{static getWindowScrollTop(){let{documentElement:i}=document;return(window.pageYOffset||i.scrollTop)-(i.clientTop||0)}static getWindowScrollLeft(){let{documentElement:i}=document;return(window.pageXOffset||i.scrollLeft)-(i.clientLeft||0)}static hasClass(i,a){return i.classList.contains(a)}}const Bv=V({emits:["change","slideend","update:modelValue"],props:{color:String,disabled:Boolean,inverted:Boolean,labeled:[Boolean,String],labels:Array,max:{type:Number,default:10},min:{type:Number,default:0},modelValue:{type:[Number,Array],default:0},range:Boolean,reversed:Boolean,size:String,step:{type:Number,default:1},vertical:Boolean,verticalHeight:{type:[Number,String],default:200}},setup(e,{emit:i}){const a=M(()=>te("ui",e.color,e.size,v(e.disabled,"disabled"),v(e.inverted,"inverted"),v(e.reversed,"reversed"),v(e.vertical,"vertical"),Ie(e.labeled,"labeled"),"slider")),o=()=>100*(e.modelValue[0]-e.min)/(e.max-e.min),s=()=>100*(e.modelValue[1]-e.min)/(e.max-e.min),c=M(()=>{if(e.range)return e.reversed&&!e.vertical?{right:o()+"%",width:s()-o()+"%"}:e.vertical?e.reversed?{bottom:o()+"%",height:s()-o()+"%"}:{top:o()+"%",height:s()-o()+"%"}:{left:o()+"%",width:s()-o()+"%"};let U=e.modelValue>e.max?e.max:e.modelValue;return e.reversed?e.vertical?{bottom:"0%",top:`${100-(U-e.min)/(e.max-e.min)*100}%`}:{right:"0%",left:`${100-(U-e.min)/(e.max-e.min)*100}%`}:e.vertical?{top:"0%",bottom:`${100-(U-e.min)/(e.max-e.min)*100}%`}:{left:"0%",right:`${100-(U-e.min)/(e.max-e.min)*100}%`}}),d=M(()=>{let U=e.range?e.modelValue[0]:e.modelValue>e.max?e.max:e.modelValue;return!e.reversed&&e.vertical?{top:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:e.reversed&&e.vertical?{top:"auto",bottom:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.reversed&&!e.vertical?{left:"auto",right:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{left:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),f=M(()=>{let U=e.modelValue[1]>e.max?e.max:e.modelValue[1];return e.reversed&&!e.vertical?{left:"auto",right:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.vertical?e.reversed?{top:"auto",bottom:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{top:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:{left:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),u=M(()=>e.labels?e.labels:[...Array(e.max-e.min+1)].map((U,K)=>K*e.step+e.min)),p=()=>{var U,K;let de=1,le=g(),Le=(e.vertical?(U=_.value)==null?void 0:U.clientHeight:(K=_.value)==null?void 0:K.clientWidth)||0,Je=1;if(Le>0)for(;Le/le*Je<100;)le%Je||(de=Je),Je+=1;return de},g=()=>Math.round((e.max-e.min)/e.step),m=G(null),_=G(null),w=G(0),S=G(0),A=G(0),T=G(0),I=()=>{if(!m.value)return;let U=m.value.getBoundingClientRect();w.value=U.left+Hn.getWindowScrollLeft(),S.value=U.top+Hn.getWindowScrollTop(),A.value=m.value.offsetWidth,T.value=m.value.offsetHeight},h=G(0),b=U=>{let{pageX:K,pageY:de}=U.touches?U.touches[0]:U,le,Le;e.vertical?le=(S.value+T.value-de)*100/T.value:le=(K-w.value)*100/A.value,Le=(e.max-e.min)*(le/100)+e.min;const Je=e.range?e.modelValue[h.value]:e.modelValue||0;Le=Je+Math.round(Le/e.step-Je/e.step)*e.step,e.reversed&&(Le=e.max-Le+e.min),e.vertical&&(Le=e.max-Le+e.min),C(Le)},C=U=>{let K=U,de;if(e.range)if(de=e.modelValue?[...e.modelValue]:[],h.value===0){let le=e.modelValue?e.modelValue[1]:e.max;K<e.min?K=e.min:K>le&&(K=le),de[0]=K,de[1]=de[1]||e.max}else{let le=e.modelValue?e.modelValue[0]:e.min;K>e.max?K=e.max:K<le&&(K=le),de[0]=de[0]||e.min,de[1]=K}else K<e.min&&(K=e.min),K>e.max&&(K=e.max),de=K;i("update:modelValue",de),i("change",de)},$=G(!1),E=U=>$.value=U,F=(U,K=0)=>{E(!0),I(),h.value=K,U.preventDefault()},N=U=>{$.value&&(E(!1),document.removeEventListener("mousemove",z),i("slideend",{event:U,value:e.modelValue}))},z=U=>{$.value&&(b(U),U==null||U.preventDefault())},j=(U,K=0)=>{e.disabled||(F(U,K),document.addEventListener("mousemove",z),document.addEventListener("mouseup",N),U.preventDefault())},Z=(U,K=0)=>{switch(h.value=K,U.code){case"ArrowUp":e.vertical&&(e.reversed?W():fe()),U.preventDefault();break;case"ArrowDown":e.vertical&&(e.reversed?fe():W()),U.preventDefault();break;case"ArrowRight":e.reversed?fe():W(),U.preventDefault();break;case"ArrowLeft":e.reversed?W():fe(),U.preventDefault();break}},W=()=>{let U=0;e.range?U=e.modelValue[h.value]+e.step:U=e.modelValue+e.step,C(U)},fe=()=>{let U=0;e.range?U=e.modelValue[h.value]-e.step:U=e.modelValue-e.step,C(U)},Be=U=>{if(!e.disabled&&!Hn.hasClass(U.target,"thumb")){if(e.range){let K=(e.vertical?U.offsetY/U.target.clientHeight:U.offsetX/U.target.clientWidth)*100,de=(o()+s())/2;K<de?h.value=e.reversed?1:0:h.value=e.reversed?0:1}I(),b(U)}};return()=>t("div",{ref:U=>m.value=U,class:a.value,style:e.vertical?`height: ${e.verticalHeight}px;`:""},[t("div",{class:"inner",onClick:Be},[t("div",{class:"track",ref:U=>_.value=U},null),t("div",{class:"track-fill",style:c.value},null),t("div",{class:"thumb",style:d.value,onMousedown:U=>j(U),onTouchstart:U=>F(U),onTouchmove:U=>z(U),onTouchend:U=>N(U),onKeydown:U=>Z(U),tabindex:0},null),e.range&&t("div",{class:"thumb second",style:f.value,onMousedown:U=>j(U,1),onTouchstart:U=>F(U,1),onTouchmove:U=>z(U),onTouchend:U=>N(U),onKeydown:U=>Z(U,1),tabindex:0},null)]),e.labeled&&t("ul",{class:"auto labels"},[[...Array(g()+1)].map((U,K)=>{let de=K/g();return K%p()?t("li",{class:"halftick label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${de} + 7px);`},null):t("li",{class:"label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${de} + 7px);`},[e.reversed&&!e.vertical?e.labels?e.labels[g()-K]:u.value[g()-K]:e.labels?e.labels[K]:u.value[K]])})])])}}),$v={install(e){e.component("SuiSlider",Bv)}},xo=V({props:{content:String},render(){var e,i;return this.$props.content?X("div",{class:"label"},this.$props.content):X("div",{class:"label"},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),ko=V({props:{content:String,text:Boolean},setup(e){return{computedClass:M(()=>te(v(e.text,"text"),"value"))}},render(){var e,i;return this.$props.content?X("div",{class:this.computedClass},this.$props.content):X("div",{class:this.computedClass},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Tv=V({components:{StatisticLabel:xo,StatisticValue:ko},props:{color:String,floated:[Boolean,String],fluid:Boolean,horizontal:Boolean,inverted:Boolean,label:String,size:String,text:Boolean,value:String},setup(e){const i=Fe("ui",!0);return{computedClass:M(()=>te(i&&"ui",e.color,e.size,v(e.fluid,"fluid"),v(e.horizontal,"horizontal"),v(e.inverted,"inverted"),v(e.text,"text"),Ie(e.floated,"floated"),"statistic"))}},render(){var e,i,a,o,s,c;let d=[];return this.$props.value&&d.push(X(ko,{content:this.$props.value},(i=(e=this.$slots).default)==null?void 0:i.call(e))),this.$props.label&&d.push(X(xo,{content:this.$props.label},(o=(a=this.$slots).default)==null?void 0:o.call(a))),X("div",{class:this.computedClass},d.length>0?d:(c=(s=this.$slots).default)==null?void 0:c.call(s))}}),Lv=V({props:{color:String,horizontal:Boolean,inverted:Boolean,size:String,stackable:Boolean,widths:Number},setup(e){return ut("ui",!1),{classes:M(()=>te("ui",e.color,e.size,v(e.horizontal,"horizontal"),v(e.inverted,"inverted"),v(e.stackable,"stackable"),ri(e.widths,""),"statistics"))}},render(){var e,i;return X("div",{class:this.classes},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),Dv={install(e){e.component("SuiStatistic",Tv),e.component("SuiStatisticGroup",Lv),e.component("SuiStatisticLabel",xo),e.component("SuiStatisticValue",ko)}},Iv=V((e,{slots:i})=>{const a=M(()=>te(v(e.active,"active"),v(e.completed,"completed"),v(e.disabled,"disabled"),v(e.fluid,"fluid"),v(e.link,"link"),v(e.vertical,"vertical"),"step"));return()=>{var o,s;return e.href?t("a",{class:a.value,href:e.href},[(o=i.default)==null?void 0:o.call(i)]):t("div",{class:a.value},[e.icon&&t(Y,{name:e.icon},null),(e.title||e.description)&&t("div",{class:"content"},[e.title&&t("div",{class:"title"},[e.title]),e.description&&t("div",{class:"description"},[e.description])]),(s=i.default)==null?void 0:s.call(i)])}},{props:{active:Boolean,completed:Boolean,description:String,disabled:Boolean,fluid:Boolean,href:String,icon:String,link:Boolean,title:String,vertical:Boolean}}),Ev=["one","two","three","four","five","six","seven","eight"],Rv=V({props:{attached:String,fluid:Boolean,inverted:Boolean,ordered:Boolean,size:String,stackable:String,unstackable:Boolean,vertical:Boolean,widths:Number},setup(e){const{widths:i}=e;return{computedClass:M(()=>te("ui",i&&Ev[i-1],e.size,v(e.fluid,"fluid"),v(e.inverted,"inverted"),v(e.ordered,"ordered"),v(e.unstackable,"unstackable"),v(e.vertical,"vertical"),Pe(e.attached,"attached"),Pe(e.stackable,"stackable"),"steps"))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),Pv=V({render(){var e,i;return t("div",{class:"content"},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),zv=V({render(){var e,i;return t("div",{class:"title"},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),Vv=V({render(){var e,i;return t("div",{class:"description"},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),Fv={install(e){e.component("SuiStep",Iv),e.component("SuiStepGroup",Rv),e.component("SuiStepContent",Pv),e.component("SuiStepTitle",zv),e.component("SuiStepDescription",Vv)}},gd=V({props:{active:Boolean,attached:[Boolean,String],header:String},setup(e){return{computedClass:M(()=>te("ui tab segment",v(e.active,"active"),Ie(e.attached,"attached")))}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),Mv=V({emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},pointing:Boolean,secondary:Boolean,text:Boolean},setup(e,{emit:i,slots:a}){const o=G(e.activeIndex);pt(()=>e.activeIndex,p=>{o.value=p});const s=(p,g)=>{o.value!==g&&(o.value=g,i("update:activeIndex",g),i("tab-change",{event:p,index:g})),i("tab-click",{event:p,index:g})},c=(p,g)=>{p.key==="Enter"&&s(p,g)},d=M(()=>{var p,g;let m=[];return(p=a.default)!=null&&p.call(a)&&((g=a.default)==null||g.call(a).forEach(_=>{Ct(_)&&m.push(_)})),m}),f=M(()=>!e.secondary&&!e.pointing&&!e.text),u=M(()=>te("ui menu",v(f.value,"tabular attached"),v(e.pointing,"pointing"),v(e.secondary,"secondary"),v(e.text,"text")));return{onClick:s,onKeyDown:c,tabIndex:o,tabs:d,tabMenuClass:u,isDefaultMenu:f}},render(){const e=()=>this.tabs.map((a,o)=>t("a",{class:`item ${this.tabIndex===o&&"active"}`,onClick:s=>this.onClick(s,o),onKeydown:s=>this.onKeyDown(s,o),tabindex:0},[a.props.header])),i=()=>this.tabs.map((a,o)=>t(gd,Zi(a.props,{active:this.tabIndex===o,attached:this.isDefaultMenu?"bottom":!1}),{default:()=>{var s,c;return[(c=(s=a.children).default)==null?void 0:c.call(s)]}}));return t(Ce,null,[t("div",{class:this.tabMenuClass},[e()]),i()])}}),Nv={install(e){e.component("SuiTab",Mv),e.component("SuiTabPanel",gd)}},Hv=V({props:{attached:[Boolean,String],basic:[Boolean,String],celled:Boolean,collapsing:Boolean,color:String,columns:Number,compact:[Boolean,String],definition:Boolean,fixed:Boolean,inverted:Boolean,padded:[Boolean,String],selectable:Boolean,singleLine:Boolean,size:String,stackable:Boolean,striped:Boolean,structured:Boolean,unstackable:Boolean},setup(e){return{computedClass:M(()=>te("ui",e.color,e.size,v(e.celled,"celled"),v(e.collapsing,"collapsing"),v(e.definition,"definition"),v(e.fixed,"fixed"),v(e.inverted,"inverted"),v(e.selectable,"selectable"),v(e.singleLine,"single line"),v(e.stackable,"stackable"),v(e.striped,"striped"),v(e.structured,"structured"),v(e.unstackable,"unstackable"),Ie(e.attached,"attached"),Ie(e.basic,"basic"),Ie(e.compact,"compact"),Ie(e.padded,"padded"),ri(e.columns,"column"),"table"))}},render(){var e,i;return t("table",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),Ov=V({render(){var e,i;return X("tbody",{},(i=(e=this.$slots).default)==null?void 0:i.call(e))}}),qv=V({props:{active:Boolean,collapsing:Boolean,color:String,disabled:Boolean,error:Boolean,marked:String,negative:Boolean,positive:Boolean,selectable:Boolean,singleLine:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:M(()=>te(e.color,v(e.active,"active"),v(e.collapsing,"collapsing"),v(e.disabled,"disabled"),v(e.error,"error"),v(e.negative,"negative"),v(e.positive,"positive"),v(e.selectable,"selectable"),v(e.singleLine,"single line"),v(e.warning,"warning"),Pe(e.verticalAlign,"aligned"),Pe(e.marked,"marked"),Tl(e.textAlign)))}},render(){var e,i,a,o;return this.computedClass?t("td",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)]):t("td",null,[(o=(a=this.$slots).default)==null?void 0:o.call(a)])}}),Gv=V({props:{fullWidth:Boolean},setup(e){const{fullWidth:i}=e;return{computedClass:M(()=>te(v(i,"full-width")))}},render(){var e,i,a,o;return this.computedClass?X("tfoot",{class:this.computedClass},(i=(e=this.$slots).default)==null?void 0:i.call(e)):X("tfoot",{},(o=(a=this.$slots).default)==null?void 0:o.call(a))}}),jv=V({props:{fullWidth:Boolean},setup(e){return{computedClass:M(()=>te(v(e.fullWidth,"full-width")))}},render(){var e,i,a,o;return this.computedClass?X("thead",{class:this.computedClass},(i=(e=this.$slots).default)==null?void 0:i.call(e)):X("thead",{},(o=(a=this.$slots).default)==null?void 0:o.call(a))}}),Uv=V({props:{singleLine:Boolean,textAlign:String,width:Number},setup(e){return{computedClass:M(()=>te(v(e.singleLine,"single line"),Pe(e.textAlign,"aligned"),ri(e.width,"wide")))}},render(){var e,i,a,o;return this.computedClass?t("th",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)]):t("th",null,[(o=(a=this.$slots).default)==null?void 0:o.call(a)])}}),Yv=V({props:{active:Boolean,color:String,disabled:Boolean,error:Boolean,negative:Boolean,positive:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:M(()=>te(e.color,v(e.active,"active"),v(e.disabled,"disabled"),v(e.error,"error"),v(e.negative,"negative"),v(e.positive,"positive"),v(e.warning,"warning"),Pe(e.textAlign,"aligned"),Pe(e.verticalAlign,"aligned")))}},render(){var e,i,a,o;return this.computedClass?t("tr",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)]):t("tr",null,[(o=(a=this.$slots).default)==null?void 0:o.call(a)])}}),Jv={install(e){e.component("SuiTable",Hv),e.component("SuiTableBody",Ov),e.component("SuiTableCell",qv),e.component("SuiTableFooter",Gv),e.component("SuiTableHeader",jv),e.component("SuiTableHeaderCell",Uv),e.component("SuiTableRow",Yv)}};function Wv(e,i){e.indexOf(i)===-1&&e.push(i)}const hd=(e,i,a)=>Math.min(Math.max(a,e),i),Ft={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},Za=e=>typeof e=="number",ml=e=>Array.isArray(e)&&!Za(e[0]),Kv=(e,i,a)=>{const o=i-e;return((a-e)%o+o)%o+e};function Xv(e,i){return ml(e)?e[Kv(0,e.length,i)]:e}const _d=(e,i,a)=>-a*e+a*i+e,bd=()=>{},yi=e=>e,Cs=(e,i,a)=>i-e===0?1:(a-e)/(i-e);function vd(e,i){const a=e[e.length-1];for(let o=1;o<=i;o++){const s=Cs(0,i,o);e.push(_d(a,1,s))}}function Qv(e){const i=[0];return vd(i,e-1),i}function Zv(e,i=Qv(e.length),a=yi){const o=e.length,s=o-i.length;return s>0&&vd(i,s),c=>{let d=0;for(;d<o-2&&!(c<i[d+1]);d++);let f=hd(0,1,Cs(i[d],i[d+1],c));return f=Xv(a,d)(f),_d(e[d],e[d+1],f)}}const Sd=e=>Array.isArray(e)&&Za(e[0]),Bo=e=>typeof e=="object"&&!!e.createAnimation,Al=e=>typeof e=="function",e1=e=>typeof e=="string",Zl={ms:e=>e*1e3,s:e=>e/1e3},yd=(e,i,a)=>(((1-3*a+3*i)*e+(3*a-6*i))*e+3*i)*e,t1=1e-7,i1=12;function l1(e,i,a,o,s){let c,d,f=0;do d=i+(a-i)/2,c=yd(d,o,s)-e,c>0?a=d:i=d;while(Math.abs(c)>t1&&++f<i1);return d}function Gl(e,i,a,o){if(e===i&&a===o)return yi;const s=c=>l1(c,0,1,e,a);return c=>c===0||c===1?c:yd(s(c),i,o)}const a1=(e,i="end")=>a=>{a=i==="end"?Math.min(a,.999):Math.max(a,.001);const o=a*e,s=i==="end"?Math.floor(o):Math.ceil(o);return hd(0,1,s/e)},Rr={ease:Gl(.25,.1,.25,1),"ease-in":Gl(.42,0,1,1),"ease-in-out":Gl(.42,0,.58,1),"ease-out":Gl(0,0,.58,1)},n1=/\((.*?)\)/;function Pr(e){if(Al(e))return e;if(Sd(e))return Gl(...e);if(Rr[e])return Rr[e];if(e.startsWith("steps")){const i=n1.exec(e);if(i){const a=i[1].split(",");return a1(parseFloat(a[0]),a[1].trim())}}return yi}class wd{constructor(i,a=[0,1],{easing:o,duration:s=Ft.duration,delay:c=Ft.delay,endDelay:d=Ft.endDelay,repeat:f=Ft.repeat,offset:u,direction:p="normal",autoplay:g=!0}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=yi,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((_,w)=>{this.resolve=_,this.reject=w}),o=o||Ft.easing,Bo(o)){const _=o.createAnimation(a);o=_.easing,a=_.keyframes||a,s=_.duration||s}this.repeat=f,this.easing=ml(o)?yi:Pr(o),this.updateDuration(s);const m=Zv(a,u,ml(o)?o.map(Pr):yi);this.tick=_=>{var w;c=c;let S=0;this.pauseTime!==void 0?S=this.pauseTime:S=(_-this.startTime)*this.rate,this.t=S,S/=1e3,S=Math.max(S-c,0),this.playState==="finished"&&this.pauseTime===void 0&&(S=this.totalDuration);const A=S/this.duration;let T=Math.floor(A),I=A%1;!I&&A>=1&&(I=1),I===1&&T--;const h=T%2;(p==="reverse"||p==="alternate"&&h||p==="alternate-reverse"&&!h)&&(I=1-I);const b=S>=this.totalDuration?1:Math.min(I,1),C=m(this.easing(b));i(C),this.pauseTime===void 0&&(this.playState==="finished"||S>=this.totalDuration+d)?(this.playState="finished",(w=this.resolve)===null||w===void 0||w.call(this,C)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},g&&this.play()}play(){const i=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=i-this.pauseTime:this.startTime||(this.startTime=i),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var i;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(i=this.reject)===null||i===void 0||i.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(i){this.duration=i,this.totalDuration=i*(this.repeat+1)}get currentTime(){return this.t}set currentTime(i){this.pauseTime!==void 0||this.rate===0?this.pauseTime=i:this.startTime=performance.now()-i/this.rate}get playbackRate(){return this.rate}set playbackRate(i){this.rate=i}}class o1{setAnimation(i){this.animation=i,i==null||i.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const On=new WeakMap;function Cd(e){return On.has(e)||On.set(e,{transforms:[],values:new Map}),On.get(e)}function s1(e,i){return e.has(i)||e.set(i,new o1),e.get(i)}const r1=["","X","Y","Z"],u1=["translate","scale","rotate","skew"],en={x:"translateX",y:"translateY",z:"translateZ"},zr={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:e=>e+"deg"},c1={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:e=>e+"px"},rotate:zr,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:yi},skew:zr},ca=new Map,As=e=>`--motion-${e}`,tn=["x","y","z"];u1.forEach(e=>{r1.forEach(i=>{tn.push(e+i),ca.set(As(e+i),c1[e])})});const d1=(e,i)=>tn.indexOf(e)-tn.indexOf(i),p1=new Set(tn),Ad=e=>p1.has(e),m1=(e,i)=>{en[i]&&(i=en[i]);const{transforms:a}=Cd(e);Wv(a,i),e.style.transform=f1(a)},f1=e=>e.sort(d1).reduce(g1,"").trim(),g1=(e,i)=>`${e} ${i}(var(${As(i)}))`,$o=e=>e.startsWith("--"),Vr=new Set;function h1(e){if(!Vr.has(e)){Vr.add(e);try{const{syntax:i,initialValue:a}=ca.has(e)?ca.get(e):{};CSS.registerProperty({name:e,inherits:!1,syntax:i,initialValue:a})}catch{}}}const qn=(e,i)=>document.createElement("div").animate(e,i),Fr={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{qn({opacity:[1]})}catch{return!1}return!0},finished:()=>!!qn({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{qn({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},Gn={},ol={};for(const e in Fr)ol[e]=()=>(Gn[e]===void 0&&(Gn[e]=Fr[e]()),Gn[e]);const _1=.015,b1=(e,i)=>{let a="";const o=Math.round(i/_1);for(let s=0;s<o;s++)a+=e(Cs(0,o-1,s))+", ";return a.substring(0,a.length-2)},Mr=(e,i)=>Al(e)?ol.linearEasing()?`linear(${b1(e,i)})`:Ft.easing:Sd(e)?v1(e):e,v1=([e,i,a,o])=>`cubic-bezier(${e}, ${i}, ${a}, ${o})`;function S1(e,i){for(let a=0;a<e.length;a++)e[a]===null&&(e[a]=a?e[a-1]:i());return e}const y1=e=>Array.isArray(e)?e:[e];function To(e){return en[e]&&(e=en[e]),Ad(e)?As(e):e}const Da={get:(e,i)=>{i=To(i);let a=$o(i)?e.style.getPropertyValue(i):getComputedStyle(e)[i];if(!a&&a!==0){const o=ca.get(i);o&&(a=o.initialValue)}return a},set:(e,i,a)=>{i=To(i),$o(i)?e.style.setProperty(i,a):e.style[i]=a}};function xd(e,i=!0){if(!(!e||e.playState==="finished"))try{e.stop?e.stop():(i&&e.commitStyles(),e.cancel())}catch{}}function w1(e,i){var a;let o=(i==null?void 0:i.toDefaultUnit)||yi;const s=e[e.length-1];if(e1(s)){const c=((a=s.match(/(-?[\d.]+)([a-z%]*)/))===null||a===void 0?void 0:a[2])||"";c&&(o=d=>d+c)}return o}function C1(){return window.__MOTION_DEV_TOOLS_RECORD}function A1(e,i,a,o={},s){const c=C1(),d=o.record!==!1&&c;let f,{duration:u=Ft.duration,delay:p=Ft.delay,endDelay:g=Ft.endDelay,repeat:m=Ft.repeat,easing:_=Ft.easing,persist:w=!1,direction:S,offset:A,allowWebkitAcceleration:T=!1,autoplay:I=!0}=o;const h=Cd(e),b=Ad(i);let C=ol.waapi();b&&m1(e,i);const $=To(i),E=s1(h.values,$),F=ca.get($);return xd(E.animation,!(Bo(_)&&E.generator)&&o.record!==!1),()=>{const N=()=>{var Z,W;return(W=(Z=Da.get(e,$))!==null&&Z!==void 0?Z:F==null?void 0:F.initialValue)!==null&&W!==void 0?W:0};let z=S1(y1(a),N);const j=w1(z,F);if(Bo(_)){const Z=_.createAnimation(z,i!=="opacity",N,$,E);_=Z.easing,z=Z.keyframes||z,u=Z.duration||u}if($o($)&&(ol.cssRegisterProperty()?h1($):C=!1),b&&!ol.linearEasing()&&(Al(_)||ml(_)&&_.some(Al))&&(C=!1),C){F&&(z=z.map(fe=>Za(fe)?F.toDefaultUnit(fe):fe)),z.length===1&&(!ol.partialKeyframes()||d)&&z.unshift(N());const Z={delay:Zl.ms(p),duration:Zl.ms(u),endDelay:Zl.ms(g),easing:ml(_)?void 0:Mr(_,u),direction:S,iterations:m+1,fill:"both"};f=e.animate({[$]:z,offset:A,easing:ml(_)?_.map(fe=>Mr(fe,u)):void 0},Z),f.finished||(f.finished=new Promise((fe,Be)=>{f.onfinish=fe,f.oncancel=Be}));const W=z[z.length-1];f.finished.then(()=>{w||(Da.set(e,$,W),f.cancel())}).catch(bd),T||(f.playbackRate=1.000001)}else if(s&&b)z=z.map(Z=>typeof Z=="string"?parseFloat(Z):Z),z.length===1&&z.unshift(parseFloat(N())),f=new s(Z=>{Da.set(e,$,j?j(Z):Z)},z,Object.assign(Object.assign({},o),{duration:u,easing:_}));else{const Z=z[z.length-1];Da.set(e,$,F&&Za(Z)?F.toDefaultUnit(Z):Z)}return d&&c(e,i,z,{duration:u,delay:p,easing:_,repeat:m,offset:A},"motion-one"),E.setAnimation(f),f&&!I&&f.pause(),f}}const x1=(e,i)=>e[i]?Object.assign(Object.assign({},e),e[i]):Object.assign({},e);function k1(e,i){var a;return typeof e=="string"?i?((a=i[e])!==null&&a!==void 0||(i[e]=document.querySelectorAll(e)),e=i[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const B1=e=>e(),kd=(e,i,a=Ft.duration)=>new Proxy({animations:e.map(B1).filter(Boolean),duration:a,options:i},T1),$1=e=>e.animations[0],T1={get:(e,i)=>{const a=$1(e);switch(i){case"duration":return e.duration;case"currentTime":return Zl.s((a==null?void 0:a[i])||0);case"playbackRate":case"playState":return a==null?void 0:a[i];case"finished":return e.finished||(e.finished=Promise.all(e.animations.map(L1)).catch(bd)),e.finished;case"stop":return()=>{e.animations.forEach(o=>xd(o))};case"forEachNative":return o=>{e.animations.forEach(s=>o(s,e))};default:return typeof(a==null?void 0:a[i])>"u"?void 0:()=>e.animations.forEach(o=>o[i]())}},set:(e,i,a)=>{switch(i){case"currentTime":a=Zl.ms(a);case"playbackRate":for(let o=0;o<e.animations.length;o++)e.animations[o][i]=a;return!0}return!1}},L1=e=>e.finished;function D1(e,i,a){return Al(e)?e(i,a):e}function I1(e){return function(i,a,o={}){i=k1(i);const s=i.length,c=[];for(let d=0;d<s;d++){const f=i[d];for(const u in a){const p=x1(o,u);p.delay=D1(p.delay,d,s);const g=A1(f,u,a[u],p,e);c.push(g)}}return kd(c,o,o.duration)}}const E1=I1(wd);function R1(e,i={}){return kd([()=>{const a=new wd(e,[0,1],i);return a.finished.catch(()=>{}),a}],i,i.duration)}function P1(e,i,a){return(Al(e)?R1:E1)(e,i,a)}const _e=(e,i)=>(a,{duration:o,keyframesOverride:s={}})=>P1(a,{...e,...s},{autoplay:!1,...i,duration:o}),Nr=_e({transform:["scale(0.8) translateZ(0px)","scale(0.8) translateZ(0px)","scale(1.05) translateZ(0px)","scale(1) translateZ(0px)"],opacity:[null,.7,1,null],zIndex:[-1,-1,999,999]},{duration:.5,offset:[0,.1,.8,1]}),z1=_e({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,-1,null,-1]},{duration:.5,offset:[0,.5,.8,1]}),V1=_e({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,1,null,1]},{duration:.5,offset:[0,.5,.8,1]}),F1=_e({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(0)","scale(1)"],opacity:[0,1]},{duration:.4,offset:[0,1]}),M1=_e({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(1)","scale(0)"],opacity:[1,0]},{duration:.4,offset:[0,1]}),N1=_e({opacity:[0,1]},{duration:.5,offset:[0,1]}),H1=_e({opacity:[0,1],transform:["translateY(10%)","export translateY(0%)"]},{duration:.5,offset:[0,1]}),O1=_e({opacity:[0,1],transform:["translateY(-10%)","translateY(0%)"]},{duration:.5,offset:[0,1]}),q1=_e({opacity:[0,1],transform:["translateX(10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),G1=_e({opacity:[0,1],transform:["translateX(-10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),j1=_e({opacity:[1,0]},{duration:.5,offset:[0,1]}),U1=_e({opacity:[1,0],transform:["translateY(0%)","texport ranslateY(5%)"]},{duration:.5,offset:[0,1]}),Y1=_e({opacity:[1,0],transform:["translateY(0%)","translateY(-5%)"]},{duration:.5,offset:[0,1]}),J1=_e({opacity:[1,0],transform:["translateX(0%)","translateX(5%)"]},{duration:.5,offset:[0,1]}),W1=_e({opacity:[1,0],transform:["translateX(0%)","translateX(-5%)"]},{duration:.5,offset:[0,1]}),K1=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["scale3d(.3, .3, .3)","scale3d(1.1, 1.1, 1.1)","scale3d(.9, .9, .9)","scale3d(1.03, 1.03, 1.03)","scale3d(.97, .97, .97)","scale3d(1, 1, 1)"],opacity:[0,null,null,1,null,1]},{duration:.6,offset:[0,.2,.4,.6,.8,1]}),X1=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, 1500px, 0","translate3d(0, -20px, 0)","translate3d(0, 10px, 0)","translate3d(0, -5px, 0)","translate3d(0, 0, 0)"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),Q1=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, -1500px, 0","translate3d(0, 25px, 0)","translate3d(0, -10px, 0)","translate3d(0, 5px, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),Z1=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(1500px, 0, 0","translate3d(-25px, 0, 0)","translate3d(10px, 0, 0)","translate3d(-5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),eS=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(-1500px, 0, 0","translate3d(25px, 0, 0)","translate3d(-10px, 0, 0)","translate3d(5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),tS=_e({transform:["scale3d(.9, .9, .9)","scale3d(1.1, 1.1, 1.1)","scale3d(1.1, 1.1, 1.1)","scale3d(.3, .3, .3)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.5,.55,1]}),iS=_e({transform:["translate3d(0, 10px, 0)","translate3d(0, -20px, 0)","translate3d(0, -20px, 0)","translate3d(0, 2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),lS=_e({transform:["translate3d(0, -10px, 0)","translate3d(0, 20px, 0)","translate3d(0, 20px, 0)","translate3d(0, -2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),aS=_e({transform:["translate3d(-20px, 0, 0)","translate3d(2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),nS=_e({transform:["translate3d(20px, 0, 0)","translate3d(-2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),oS=_e({transform:["perspective(2000px) rotateY(-90deg)","perspective(2000px) rotateY(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),sS=_e({transform:["perspective(2000px) rotateY(0deg)","perspective(2000px) rotateY(90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),rS=_e({transform:["perspective(2000px) rotateX(-90deg)","perspective(2000px) rotateX(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),uS=_e({transform:["perspective(2000px) rotateX(0deg)","perspective(2000px) rotateX(-90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),cS=_e({transform:["scale(0.8)","scale(1)"],opacity:[0,1]},{duration:.5,offset:[0,1]}),dS=_e({transform:["scale(1)","scale(0.9)"],opacity:[1,0]},{duration:.5,offset:[0,1]}),Bd={transform:["scaleY(0)","scaleY(1)"],opacity:[0,1]},$d={transform:["scaleX(0)","scaleX(1)"],opacity:[0,1]},Td={transform:["scaleY(1)","scaleY(0)"],opacity:[1,0]},pS={transform:["scaleX(1)","scaleX(0)"],opacity:[1,0]},mS=_e({transformOrigin:"top center",...Bd},{offset:[0,1]}),fS=_e({transformOrigin:"bottom center",...Bd},{offset:[0,1]}),gS=_e({transformOrigin:"center right",...$d},{offset:[0,1]}),hS=_e({transformOrigin:"center left",...$d},{offset:[0,1]}),_S=_e({transformOrigin:"top center",...Td},{offset:[0,1]}),bS=_e({transformOrigin:"bottom center",...Td},{offset:[0,1]}),Hr=_e({transformOrigin:"center left",...pS},{offset:[0,1]}),ki=.8,fl={transform:["perspective(1000px) rotateX(90deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(15deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},gl={transform:["perspective(1000px) rotateY(-90deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-17.5deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},hl={transform:["perspective(1000px) rotateX(0deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(17.5deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},_l={transform:["perspective(1000px) rotateY(0deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(-10deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},vS=_e({transformOrigin:"top center",transform:fl.transform,opacity:fl.opacity},{duration:ki,offset:fl.offset}),SS=_e({transformOrigin:"bottom center",transform:fl.transform,opacity:fl.opacity},{duration:ki,offset:fl.offset}),yS=_e({transformOrigin:"center right",transform:gl.transform,opacity:gl.opacity},{duration:ki,offset:gl.offset}),wS=_e({transformOrigin:"center left",transform:gl.transform,opacity:gl.opacity},{duration:ki,offset:gl.offset}),CS=_e({transformOrigin:"top center",transform:hl.transform,opacity:hl.opacity},{duration:ki,offset:hl.offset}),AS=_e({transformOrigin:"bottom center",transform:hl.transform,opacity:hl.opacity},{duration:ki,offset:hl.offset}),xS=_e({transformOrigin:"center right",transform:_l.transform,opacity:_l.opacity},{duration:ki,offset:_l.offset}),kS=_e({transformOrigin:"center left",transform:_l.transform,opacity:_l.opacity},{duration:ki,offset:_l.offset}),BS=_e({transform:["scale(0)","scale(1)"],opacity:[1,1]},{offset:[0,1]}),$S=_e({transform:["scale(1)","scale(0)"],opacity:[1,1]},{offset:[0,1]}),TS=_e({transform:["translateY(0)","translateY(0)","translateY(-30px)","translateY(0)","translateY(-15px)","translateY(0)","translateY(0)"]},{offset:[0,.2,.4,.5,.6,.8,1]}),LS=_e({opacity:[1,0,1,0,1]},{offset:[0,.25,.5,.75,1]}),DS=_e({animationTimingFunction:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",backgroundColor:["#FCFCFD","#FFF6CD","FCFCFD"]},{duration:2,offset:[0,.3,1]}),IS=_e({transform:["scale3d(1, 1, 1)","scale3d(1.25, 0.75, 1)","scale3d(0.75, 1.25, 1)","scale3d(1.15, 0.85, 1)","scale3d(0.95, 1.05, 1)","scale3d(1.05, 0.95, 1)","scale3d(1, 1, 1)"]},{duration:.75,offset:[0,.3,.4,.5,.6,.75,1]}),ES=_e({transform:["scale(1)","scale(0.9)","scale(1)"],opacity:[1,.7,1]},{offset:[0,.5,1]}),RS=_e({transform:["translateX(0)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(0)"]}),PS=_e({transform:["scale(1)","scale(0.9) rotate(-3deg)","scale(0.9) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1) rotate(0)"]},{offset:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]}),zS={browse:[Nr,z1],"browse right":[Nr,V1],drop:[F1,M1],fade:[N1,j1],"fade up":[H1,U1],"fade down":[O1,Y1],"fade left":[q1,J1],"fade right":[G1,W1],fly:[K1,tS],"fly up":[X1,iS],"fly down":[Q1,lS],"fly left":[Z1,aS],"fly right":[eS,nS],"horizontal flip":[oS,sS],"vertical flip":[rS,uS],scale:[cS,dS],"slide up":[fS,bS],"slide down":[mS,_S],"slide left":[gS,Hr],"slide right":[hS,Hr],"swing up":[SS,AS],"swing down":[vS,CS],"swing left":[yS,xS],"swing right":[wS,kS],zoom:[BS,$S]},VS={bounce:[TS,void 0],flash:[LS,void 0],glow:[DS,void 0],jiggle:[IS,void 0],pulse:[ES,void 0],shake:[RS,void 0],tada:[PS,void 0]},Ld=e=>({...zS,...VS})[e],FS=e=>{const[i,a]=Ld(e.animation),o=M(()=>e.duration?e.duration/1e3:.5),s=M(()=>(d,f)=>{if(!i)return f();const u=i(d,{duration:o.value});u.play(),u.finished.then(f)}),c=M(()=>(d,f)=>{if(!a)return f();const u=a(d,{duration:o.value});u.play(),u.finished.then(f)});return{onEnter:s,onLeave:c}},MS=V({props:{animation:{type:String,default:"fade"},duration:{type:Number,default:500}},setup(e){const{onEnter:i,onLeave:a}=FS(e);return{onEnter:i,onLeave:a}},render(){return t(Sn,{onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,i;return[(i=(e=this.$slots).default)==null?void 0:i.call(e)]}})}}),Dd=V({props:{tag:String,animation:{type:String,default:"fade"},enterKeyframes:{type:Function,default:()=>({})},leaveKeyframes:{type:Function,default:()=>({})}},setup(e){const[i,a]=Ld(e.animation),o=M(()=>(c,d)=>{if(!i)return d();const f=i(c,{duration:.5,keyframesOverride:e.enterKeyframes(c)});f.play(),f.finished.then(d)}),s=M(()=>(c,d)=>{if(!a)return d();const f=a(c,{duration:.5,keyframesOverride:e.leaveKeyframes(c)});f.play(),f.finished.then(d)});return{onEnter:o,onLeave:s}},render(){return t(Ac,{tag:this.tag,onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,i;return[(i=(e=this.$slots).default)==null?void 0:i.call(e)]}})}}),NS={install(e){e.component("SuiTransition",MS),e.component("SuiTransitionGroup",Dd)}},HS=Object.freeze(Object.defineProperty({__proto__:null,Accordion:i_,Advertisement:a_,Breadcrumb:n_,Button:m_,Calendar:T_,Card:V_,Checkbox:F_,Comment:J_,Container:W_,Dimmer:X_,Divider:Q_,Dropdown:db,Embed:mb,Emoji:fb,Feed:xb,Flag:kb,Form:$b,Grid:Tb,Header:Lb,Icon:o_,Image:ob,Input:Db,Item:Nb,Label:nb,List:Ub,Menu:Wb,Message:ev,Modal:rv,Popup:dv,Progress:fv,Rail:hv,Rating:vv,Reveal:Sv,Search:wv,Segment:Av,Sidebar:kv,Slider:$v,Statistic:Dv,Step:Fv,Tab:Nv,Table:Jv,Transition:NS},Symbol.toStringTag,{value:"Module"})),ze=V({props:{active:Boolean,color:String,disabled:Boolean,fast:Boolean,indeterminate:Boolean,inline:[Boolean,String],inverted:Boolean,size:String,slow:Boolean,text:Boolean},setup(e,{slots:i}){return{computedClass:M(()=>{var a;return te("ui",e.color,e.size,v(e.active,"active"),v(e.disabled,"disabled"),v(e.fast,"fast"),v(e.indeterminate,"indeterminate"),v(e.inverted,"inverted"),v(e.slow,"slow"),v(e.text||!!((a=i.default)!=null&&a.call(i)),"text"),Ie(e.inline,"inline"),"loader")})}},render(){var e,i;return t("div",{class:this.computedClass},[(i=(e=this.$slots).default)==null?void 0:i.call(e)])}}),jn=V({name:"SuiToastActions",props:{aligned:String,basic:Boolean,vertical:Boolean,...Ss()},setup(e,{slots:i}){const a=M(()=>te("actions",e.basic&&"basic",e.aligned,e.vertical&&"vertical"));return()=>{var o;return e.attached?t(ft,{attached:e.attached,vertical:e.vertical},{default:()=>{var s;return[(s=i.default)==null?void 0:s.call(i)]}}):t("div",{class:a.value},[(o=i.default)==null?void 0:o.call(i)])}}}),OS=V({name:"SuiToastBox",props:{unclickable:Boolean,verticalAttached:Boolean},setup(e,{slots:i}){const a=M(()=>te("floating toast-box compact",e.unclickable&&"unclickable"));return()=>{var o,s;return e.verticalAttached?t("div",{class:a.value,style:"display: block !important;"},[t("div",{class:"vertical attached compact right"},[(o=i.default)==null?void 0:o.call(i)])]):t("div",{class:a.value,style:"display: block !important;"},[(s=i.default)==null?void 0:s.call(i)])}}});function Un(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ct(e)}const qS=V({name:"SuiToast",emits:["click","close"],props:{id:Number,displayTime:{type:Number,default:3e3},type:String,title:String,message:{type:String,required:!0},centered:Boolean,messageStyle:Boolean,actions:Function,actionsProps:Object,showProgress:{type:String},showProgressColor:String,showProgressUp:Boolean,inverted:Boolean,...ys()},setup(e,{emit:i}){const{colorClasses:a}=ws(e),o=M(()=>{var d,f,u,p,g;return te(e.centered&&"center aligned",e.type||"neutral",a.value,"ui",e.messageStyle?"message":"toast",e.actions&&!((d=e.actionsProps)!=null&&d.vertical)&&"actions",((f=e.actionsProps)==null?void 0:f.attached)==="top"&&"bottom attached",((u=e.actionsProps)==null?void 0:u.attached)==="bottom"&&"top attached",((p=e.actionsProps)==null?void 0:p.attached)==="left"&&"left attached",((g=e.actionsProps)==null?void 0:g.vertical)&&"vertical","compact")}),s=G(e.showProgressUp?0:100),c=()=>{const d=e.displayTime/100;setTimeout(()=>{const f=setInterval(()=>{if(e.showProgressUp){s.value>=100&&clearInterval(f),s.value+=1;return}s.value<=0&&clearInterval(f),s.value-=1},d)},500)};return Ai(()=>e.showProgress&&c()),setTimeout(()=>e.displayTime>0&&i("close"),e.displayTime+750),{classes:o,progress:s}},render(){var e;let i,a,o;return t(OS,{unclickable:!!this.actions,verticalAttached:((e=this.actionsProps)==null?void 0:e.attached)==="left"},{default:()=>{var s,c,d,f;return[this.showProgress==="top"&&t(Ao,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null),this.actions&&(((s=this.actionsProps)==null?void 0:s.attached)==="top"||((c=this.actionsProps)==null?void 0:c.attached)==="left")&&t(jn,this.actionsProps,Un(i=this.actions({close:()=>this.$emit("close")}))?i:{default:()=>[i]}),t("div",{role:"alert",class:this.classes,onClick:()=>!this.actions&&this.$emit("click")},[t("div",{class:"content"},[this.title&&t("div",{class:"ui header"},[this.title]),t("div",{class:"message"},[this.message])]),this.actions&&!((d=this.actionsProps)!=null&&d.attached)&&t(jn,this.actionsProps,Un(a=this.actions({close:()=>this.$emit("close")}))?a:{default:()=>[a]})]),this.actions&&((f=this.actionsProps)==null?void 0:f.attached)==="bottom"&&t(jn,this.actionsProps,Un(o=this.actions({close:()=>this.$emit("close")}))?o:{default:()=>[o]}),this.showProgress==="bottom"&&t(Ao,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null)]}})}}),GS=["top right","top center","top left","bottom right","bottom center","bottom left","centered"],jS=({defaultValue:e}={})=>({position:{type:String,validator:i=>GS.includes(i),default:e}}),US=e=>({positionClasses:M(()=>e.position||"")});function YS(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ct(e)}const JS=V({name:"SuiToastContainer",props:{horizontal:Boolean,...Ss(),...jS({defaultValue:"top right"})},setup(e){const{items:i,remove:a}=Id(),{attachedClasses:o}=fd(e),{positionClasses:s}=US(e);return{classes:M(()=>te(o.value||s.value,"ui toast-container",e.horizontal&&"horizontal")),items:i,remove:a,enterKeyframes:c=>{if(!(c instanceof HTMLElement))return{};const d=[0,`${c.offsetHeight}px`],f=[0,`${parseInt(getComputedStyle(c).marginBottom,10)}px`];return{height:d,marginBottom:f}},leaveKeyframes:c=>{if(!(c instanceof HTMLElement))return{};const d=[`${c.offsetWidth}px`,0],f=[`${c.offsetHeight}px`,0],u=e.horizontal?{width:d}:{height:f},p=[`${parseInt(getComputedStyle(c).marginBottom,10)}px`,0];return{...u,marginBottom:p}}}},render(){let e;return t(_n,{to:"body"},{default:()=>[t("div",{class:this.classes},[t(Dd,{animation:"scale",enterKeyframes:this.enterKeyframes,leaveKeyframes:this.leaveKeyframes},YS(e=this.items.filter(({position:i,attached:a})=>this.attached?a===this.attached:i===this.position).filter(({horizontal:i})=>this.horizontal===!!i).map(({id:i,...a})=>t(qS,Zi({key:i},a,{onClick:()=>this.remove(i),onClose:()=>this.remove(i)}),null)))?e:{default:()=>[e]})])]})}}),WS=G(1),Ml=G([]),Id=()=>({items:Ml,add:e=>{e.position=e.position||"top right",Ml.value=[...Ml.value,{id:WS.value++,...e}]},remove:e=>{Ml.value=Ml.value.filter(i=>i.id!==e)}}),st=()=>{var e;const i=(e=Kt())==null?void 0:e.appContext,{add:a}=Id();return{toast:o=>{const{position:s,attached:c,horizontal:d}=o;QS({position:s,attached:c,horizontal:d})||XS(i,{position:s,attached:c,horizontal:d}),a(o)}}},KS=(e,{appContext:i,element:a}={})=>{const o=a||document.createElement("div");return i&&(e.appContext=i),Ka(e,o),{vNode:e,el:o}},XS=(e,{position:i="top right",attached:a,horizontal:o=!1}={})=>{const s=X(JS,{position:i,attached:a,horizontal:o}),{el:c}=KS(s,{appContext:e});return{vNode:s,el:c}},QS=({position:e="top right",attached:i,horizontal:a})=>{const o=i?`.ui.toast-container.${i}.attached`:`.ui.toast-container.${e.split(" ").join(".")}${a?".horizontal":":not(.horizontal)"}`;return document.querySelector(o)};function ZS(e){Object.values({...HS}).map(i=>e.use(i))}const ey={install:ZS},ty=Object.assign({inheritAttrs:!1},{__name:"DocSectionText",props:["label","onClick"],setup(e){const i=Yc(),a=M(()=>{const s=i.currentRoute.value.path;return s.lastIndexOf("/")===s.length-1?s.slice(0,-1):s}),o=s=>{s.preventDefault();const d=s.target.parentElement.getAttribute("href"),f=d.slice(d.indexOf("#")+1),u=document.getElementById(f);u&&u.scrollIntoView({behavior:"smooth"})};return(s,c)=>{const d=B("SuiHeader"),f=B("SuiGridColumn"),u=B("SuiGridRow");return y(),ye(Ce,null,[t(u,null,{default:l(()=>[t(f,null,{default:l(()=>[t(d,{as:"h3",class:"doc-section-text"},{default:l(()=>[n($e(e.label)+" ",1),t(r(ps),{to:`${a.value}#${s.$attrs.id}`,target:"_self",onClick:o},{default:l(()=>[t(r(Y),{name:"linkify",color:"grey",size:"small",link:"",fitted:""})]),_:1},8,["to"])]),_:1})]),_:1}),t(f,{textAlign:"right"},{default:l(()=>[t(r(Y),{name:"code",color:"grey",link:"",onClick:e.onClick},null,8,["onClick"])]),_:1})]),_:1}),k("p",null,[qi(s.$slots,"default",{},void 0,!0)])],64)}}}),iy=He(ty,[["__scopeId","data-v-a2b78897"]]),ly={class:"inner"},ay={__name:"DocSectionCode",props:["code","hideCode"],setup(e){return(i,a)=>{const o=B("SuiGridColumn"),s=B("SuiGridRow");return y(),x(s,null,{default:l(()=>[t(o,{width:16},{default:l(()=>[qi(i.$slots,"default",{},void 0,!0)]),_:3}),t(o,{width:16,id:"accordion","aria-hidden":e.hideCode},{default:l(()=>[k("div",ly,[Si((y(),ye("pre",null,[k("code",null,$e(e.code)+`
`,1)])),[[r(Va)]])])]),_:1},8,["aria-hidden"])]),_:3})}}},ny=He(ay,[["__scopeId","data-v-965e7ddc"]]),D={__name:"DocSection",props:["label","code"],setup(e){const i=G(!0),a=()=>i.value=!i.value;return(o,s)=>{const c=B("SuiGrid");return y(),ye("section",null,[t(c,{columns:2},{default:l(()=>[t(iy,Zi({label:e.label,"on-click":a},o.$attrs),{default:l(()=>[qi(o.$slots,"description")]),_:3},16,["label"]),t(ny,{code:e.code,"hide-code":i.value},{default:l(()=>[qi(o.$slots,"example")]),_:3},8,["code","hide-code"])]),_:3})])}}},oy=`<template>
  <SuiButton @click="onClick">{{ label }}</SuiButton>
</template>

<script setup>
import { ref } from 'vue'
import { SuiButton } from 'vue-fomantic-ui'

const label = ref('Follow')
const onClick = () => label.value = label.value === 'Follow' ? 'Following' : 'Follow'
<\/script>`,sy={__name:"ButtonDoc",setup(e){const i=G("Follow"),a=()=>i.value=i.value==="Follow"?"Following":"Follow";return(o,s)=>(y(),x(D,{label:"Button",code:oy},{description:l(()=>[n(" A standard button ")]),example:l(()=>[t(r(P),{onClick:a},{default:l(()=>[n($e(i.value),1)]),_:1})]),_:1}))}},ry=`<template>
  <SuiButton primary>Save</SuiButton>
  <SuiButton secondary>Okay</SuiButton>
  <SuiButton>Cancel</SuiButton>
</template>`,uy={__name:"EmphasisDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Emphasis",code:ry},{description:l(()=>[n(" A button can be formatted to show different levels of emphasis ")]),example:l(()=>[t(r(P),{primary:""},{default:l(()=>[n("Save")]),_:1}),t(r(P),{secondary:""},{default:l(()=>[n("Okay")]),_:1}),t(r(P),null,{default:l(()=>[n("Cancel")]),_:1})]),_:1}))}},cy=`<template>
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
</template>`,dy={__name:"AnimatedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Animated",code:cy},{description:l(()=>[n(" A button can animate to show hidden content ")]),example:l(()=>[t(r(P),{animated:""},{default:l(()=>[t(r(Di),{visible:""},{default:l(()=>[n("Next")]),_:1}),t(r(Di),{hidden:""},{default:l(()=>[t(r(Y),{name:"arrow right"})]),_:1})]),_:1}),t(r(P),{animated:"vertical"},{default:l(()=>[t(r(Di),{visible:""},{default:l(()=>[t(r(Y),{name:"shop"})]),_:1}),t(r(Di),{hidden:""},{default:l(()=>[n("Shop")]),_:1})]),_:1}),t(r(P),{animated:"fade"},{default:l(()=>[t(r(Di),{visible:""},{default:l(()=>[n(" Sign-up for a Pro account ")]),_:1}),t(r(Di),{hidden:""},{default:l(()=>[n("$12.99 a month")]),_:1})]),_:1})]),_:1}))}},py=`<template>
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
</template>`,my={__name:"LabeledDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Labeled",code:py},{description:l(()=>[n(" A button can appear alongside a label ")]),example:l(()=>[t(r(P),{labeled:"right",as:"div"},{default:l(()=>[t(r(P),{icon:"heart",content:" Like"}),t(r(O),{basic:""},{default:l(()=>[n("2,048")]),_:1})]),_:1}),t(r(P),{labeled:"left",as:"div"},{default:l(()=>[t(r(O),{basic:"",pointing:"right"},{default:l(()=>[n("2,048")]),_:1}),t(r(P),{icon:"heart",content:" Like"})]),_:1}),t(r(P),{labeled:"left",as:"div"},{default:l(()=>[t(r(O),{basic:""},{default:l(()=>[n("1,048")]),_:1}),t(r(P),{icon:"fork"})]),_:1})]),_:1}))}},fy=`<template>
  <SuiButton icon="cloud" />
</template>`,gy={__name:"IconDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Icon",code:fy},{description:l(()=>[n(" A button can have only an icon ")]),example:l(()=>[t(r(P),{icon:"cloud"})]),_:1}))}},hy=`<template>
  <SuiButton labeled icon="pause" content="Pause" />
  <SuiButton labeled="right" icon="right arrow" content="Next" />
  <SuiButton labeled icon>
    <SuiIcon loading name="spinner" />
    Loading
  </SuiButton>
</template>`,_y={__name:"LabeledIconDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Labeled Icon",code:hy},{description:l(()=>[n(" A button can use an icon as a label ")]),example:l(()=>[t(r(P),{labeled:"",icon:"pause",content:"Pause"}),t(r(P),{labeled:"right",icon:"right arrow",content:"Next"}),t(r(P),{labeled:"",icon:""},{default:l(()=>[t(r(Y),{loading:"",name:"spinner"}),n(" Loading ")]),_:1})]),_:1}))}},by=`<template>
  <SuiButton basic primary>Primary</SuiButton>
  <SuiButton basic secondary>Secondary</SuiButton>
  <SuiButton basic positive>Positive</SuiButton>
  <SuiButton basic negative>Negative</SuiButton>
</template>`,vy={__name:"BasicDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Basic",code:by},{description:l(()=>[n(" A basic button is less pronounced ")]),example:l(()=>[t(r(P),{basic:"",primary:""},{default:l(()=>[n("Primary")]),_:1}),t(r(P),{basic:"",secondary:""},{default:l(()=>[n("Secondary")]),_:1}),t(r(P),{basic:"",positive:""},{default:l(()=>[n("Positive")]),_:1}),t(r(P),{basic:"",negative:""},{default:l(()=>[n("Negative")]),_:1})]),_:1}))}},Sy=`<template>
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
</template>`,yy={__name:"TertiaryDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Tertiary",code:Sy},{description:l(()=>[n(" An none bordered less important button ")]),example:l(()=>[t(r(P),{tertiary:"",primary:""},{default:l(()=>[n("Primary")]),_:1}),t(r(P),{tertiary:"",secondary:""},{default:l(()=>[n("Secondary")]),_:1}),t(r(P),{tertiary:"",color:"red"},{default:l(()=>[n("Red")]),_:1}),t(r(P),{tertiary:"",color:"orange"},{default:l(()=>[n("Orange")]),_:1}),t(r(P),{tertiary:"",color:"yellow"},{default:l(()=>[n("Yellow")]),_:1}),t(r(P),{tertiary:"",color:"olive"},{default:l(()=>[n("Olive")]),_:1}),t(r(P),{tertiary:"",color:"green"},{default:l(()=>[n("Green")]),_:1}),t(r(P),{tertiary:"",color:"teal"},{default:l(()=>[n("Teal")]),_:1}),t(r(P),{tertiary:"",color:"blue"},{default:l(()=>[n("Blue")]),_:1}),t(r(P),{tertiary:"",color:"violet"},{default:l(()=>[n("Violet")]),_:1}),t(r(P),{tertiary:"",color:"purple"},{default:l(()=>[n("Purple")]),_:1}),t(r(P),{tertiary:"",color:"pink"},{default:l(()=>[n("Pink")]),_:1}),t(r(P),{tertiary:"",color:"brown"},{default:l(()=>[n("Brown")]),_:1}),t(r(P),{tertiary:"",color:"grey"},{default:l(()=>[n("Grey")]),_:1}),t(r(P),{tertiary:"",color:"black"},{default:l(()=>[n("Black")]),_:1})]),_:1}))}},wy=`<template>
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
</template>`,Cy={__name:"InvertedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Inverted",code:wy},{description:l(()=>[n(" A button can be formatted to appear on dark backgrounds ")]),example:l(()=>[t(r(H),{inverted:""},{default:l(()=>[t(r(P),{inverted:"",primary:""},{default:l(()=>[n("Primary")]),_:1}),t(r(P),{inverted:"",secondary:""},{default:l(()=>[n("Secondary")]),_:1}),t(r(P),{inverted:"",color:"red"},{default:l(()=>[n("Red")]),_:1}),t(r(P),{inverted:"",color:"orange"},{default:l(()=>[n("Orange")]),_:1}),t(r(P),{inverted:"",color:"yellow"},{default:l(()=>[n("Yellow")]),_:1}),t(r(P),{inverted:"",color:"olive"},{default:l(()=>[n("Olive")]),_:1}),t(r(P),{inverted:"",color:"green"},{default:l(()=>[n("Green")]),_:1}),t(r(P),{inverted:"",color:"teal"},{default:l(()=>[n("Teal")]),_:1}),t(r(P),{inverted:"",color:"blue"},{default:l(()=>[n("Blue")]),_:1}),t(r(P),{inverted:"",color:"violet"},{default:l(()=>[n("Violet")]),_:1}),t(r(P),{inverted:"",color:"purple"},{default:l(()=>[n("Purple")]),_:1}),t(r(P),{inverted:"",color:"pink"},{default:l(()=>[n("Pink")]),_:1}),t(r(P),{inverted:"",color:"brown"},{default:l(()=>[n("Brown")]),_:1}),t(r(P),{inverted:"",color:"grey"},{default:l(()=>[n("Grey")]),_:1}),t(r(P),{inverted:"",color:"black"},{default:l(()=>[n("Black")]),_:1})]),_:1})]),_:1}))}},Ay=`<template>
  <SuiButtonGroup>
    <SuiButton content="One" />
    <SuiButton content="Two" />
    <SuiButton content="Three" />
  </SuiButtonGroup>
</template>`,xy={__name:"ButtonsDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Buttons",code:Ay},{description:l(()=>[n(" Buttons can exist together as a group ")]),example:l(()=>[t(r(ft),null,{default:l(()=>[t(r(P),{content:"One"}),t(r(P),{content:"Two"}),t(r(P),{content:"Three"})]),_:1})]),_:1}))}},ky=`<template>
  <SuiButtonGroup icon>
    <SuiButton icon="align left" />
    <SuiButton icon="align center" />
    <SuiButton icon="align right" />
    <SuiButton icon="align justify" />
  </SuiButtonGroup>
</template>`,By={__name:"IconButtonsDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Icon Buttons",code:ky},{description:l(()=>[n(" Button groups can show groups of icons ")]),example:l(()=>[t(r(ft),{icon:""},{default:l(()=>[t(r(P),{icon:"align left"}),t(r(P),{icon:"align center"}),t(r(P),{icon:"align right"}),t(r(P),{icon:"align justify"})]),_:1})]),_:1}))}},$y=k("div",{class:"or"},null,-1),Ty=k("div",{class:"or","data-text":"ou"},null,-1),Ly=`<template>
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
</template>`,Dy={__name:"ConditionalsDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Conditionals",code:Ly},{description:l(()=>[n(" Button groups can contain conditionals ")]),example:l(()=>[t(r(ft),null,{default:l(()=>[t(r(P),{content:"Cancel"}),$y,t(r(P),{content:"Save",positive:""})]),_:1}),t(r(ft),null,{default:l(()=>[t(r(P),{content:"un"}),Ty,t(r(P),{content:"deux",positive:""})]),_:1})]),_:1}))}},Iy=`<template>
  <SuiButton active icon="user" content=" Follow" />
</template>`,Ey={__name:"ActiveDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Active",code:Iy},{description:l(()=>[n(" A button can show it is currently the active user selection ")]),example:l(()=>[t(r(P),{active:"",icon:"user",content:" Follow"})]),_:1}))}},Ry=`<template>
  <SuiButton disabled icon="user" content=" Followed" />
</template>`,Py={__name:"DisabledDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Disabled",code:Ry},{description:l(()=>[n(" A button can show it is currently unable to be interacted with ")]),example:l(()=>[t(r(P),{disabled:"",icon:"user",content:" Followed"})]),_:1}))}},zy=`<template>
  <SuiButton loading content="Loading" />
  <SuiButton loading="double" primary content="Loading" />
  <SuiButton loading="elastic" secondary content="Loading" />
</template>`,Vy={__name:"LoadingDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Loading",code:zy},{description:l(()=>[n(" A button can show a loading indicator ")]),example:l(()=>[t(r(P),{loading:"",content:"Loading"}),t(r(P),{loading:"double",primary:"",content:"Loading"}),t(r(P),{loading:"elastic",secondary:"",content:"Loading"})]),_:1}))}},Fy=`<template>
  <SuiButton facebook icon="facebook" content=" Facebook" />
  <SuiButton twitter icon="twitter" content=" Twitter" />
  <SuiButton vk icon="vk" content="VK" />
  <SuiButton linkedin icon="linkedin" content=" LinkedIn" />
  <SuiButton instagram icon="instagram" content=" Instagram" />
  <SuiButton youtube icon="youtube" content=" YouTube" />
  <SuiButton whatsapp icon="whatsapp" content=" WhatsApp" />
  <SuiButton telegram icon="telegram" content=" Telegram" />
</template>`,My={__name:"SocialDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Social",code:Fy},{description:l(()=>[n(" A button can be formatted to link to a social website ")]),example:l(()=>[t(r(P),{facebook:"",icon:"facebook",content:" Facebook"}),t(r(P),{twitter:"",icon:"twitter",content:" Twitter"}),t(r(P),{vk:"",icon:"vk",content:"VK"}),t(r(P),{linkedin:"",icon:"linkedin",content:" LinkedIn"}),t(r(P),{instagram:"",icon:"instagram",content:" Instagram"}),t(r(P),{youtube:"",icon:"youtube",content:" YouTube"}),t(r(P),{whatsapp:"",icon:"whatsapp",content:" WhatsApp"}),t(r(P),{telegram:"",icon:"telegram",content:" Telegram"})]),_:1}))}},Ny=`<template>
  <SuiButton size="mini" content="Mini" />
  <SuiButton size="tiny" content="Tiny" />
  <SuiButton size="small" content="Small" />
  <SuiButton size="medium" content="Medium" />
  <SuiButton size="large" content="Large" />
  <SuiButton size="big" content="Big" />
  <SuiButton size="huge" content="Huge" />
  <SuiButton size="massive" content="Massive" />
</template>`,Hy={__name:"SizeDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Size",code:Ny},{description:l(()=>[n(" A button can have different sizes ")]),example:l(()=>[t(r(P),{size:"mini",content:"Mini"}),t(r(P),{size:"tiny",content:"Tiny"}),t(r(P),{size:"small",content:"Small"}),t(r(P),{size:"medium",content:"Medium"}),t(r(P),{size:"large",content:"Large"}),t(r(P),{size:"big",content:"Big"}),t(r(P),{size:"huge",content:"Huge"}),t(r(P),{size:"massive",content:"Massive"})]),_:1}))}},Oy=`<template>
  <SuiButton floated="left" content="Left Floated" />
  <SuiButton floated="right" content="Right Floated" />
</template>`,qy={__name:"FloatedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Floated",code:Oy},{description:l(()=>[n(" A button can be aligned to the left or right of its container ")]),example:l(()=>[t(r(P),{floated:"left",content:"Left Floated"}),t(r(P),{floated:"right",content:"Right Floated"})]),_:1}))}},Gy=`<template>
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
</template>`,jy={__name:"ColoredDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Colored",code:Gy},{description:l(()=>[n(" A button can have different colors ")]),example:l(()=>[t(r(P),{color:"red"},{default:l(()=>[n("Red")]),_:1}),t(r(P),{color:"orange"},{default:l(()=>[n("Orange")]),_:1}),t(r(P),{color:"yellow"},{default:l(()=>[n("Yellow")]),_:1}),t(r(P),{color:"olive"},{default:l(()=>[n("Olive")]),_:1}),t(r(P),{color:"green"},{default:l(()=>[n("Green")]),_:1}),t(r(P),{color:"teal"},{default:l(()=>[n("Teal")]),_:1}),t(r(P),{color:"blue"},{default:l(()=>[n("Blue")]),_:1}),t(r(P),{color:"violet"},{default:l(()=>[n("Violet")]),_:1}),t(r(P),{color:"purple"},{default:l(()=>[n("Purple")]),_:1}),t(r(P),{color:"pink"},{default:l(()=>[n("Pink")]),_:1}),t(r(P),{color:"brown"},{default:l(()=>[n("Brown")]),_:1}),t(r(P),{color:"grey"},{default:l(()=>[n("Grey")]),_:1}),t(r(P),{color:"black"},{default:l(()=>[n("Black")]),_:1})]),_:1}))}},Uy=`<template>
  <SuiButton compact content="Hold" />
  <SuiButton compact icon="pause" />
  <SuiButton compact labeled icon="pause" content="Pause" />
</template>`,Yy={__name:"CompactDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Compact",code:Uy},{description:l(()=>[n(" A button can reduce its padding to fit into tighter spaces ")]),example:l(()=>[t(r(P),{compact:"",content:"Hold"}),t(r(P),{compact:"",icon:"pause"}),t(r(P),{compact:"",labeled:"",icon:"pause",content:"Pause"})]),_:1}))}},Jy=`<template>
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
<\/script>`,Wy={__name:"ToggleDoc",setup(e){const i=G(!1);return(a,o)=>(y(),x(D,{label:"Toggle",code:Jy},{description:l(()=>[n(" A button can be formatted to toggle on and off ")]),example:l(()=>[t(r(P),{toggle:"",active:i.value,onClick:()=>i.value=!i.value,content:i.value?"Voted":"Vote",style:{"min-width":"200px"}},null,8,["active","onClick","content"])]),_:1}))}},Ky=`<template>
  <SuiButton positive content="Positive Button" />
</template>`,Xy={__name:"PositiveDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Positive",code:Ky},{description:l(()=>[n(" A button can hint towards a positive consequence ")]),example:l(()=>[t(r(P),{positive:"",content:"Positive Button"})]),_:1}))}},Qy=`<template>
  <SuiButton negative content="Negative Button" />
</template>`,Zy={__name:"NegativeDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Negative",code:Qy},{description:l(()=>[n(" A button can hint towards a negative consequence ")]),example:l(()=>[t(r(P),{negative:"",content:"Negative Button"})]),_:1}))}},ew=`<template>
  <SuiButton fluid content="Fits container" />
</template>`,tw={__name:"FluidDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Fluid",code:ew},{description:l(()=>[n(" A button can take the width of its container ")]),example:l(()=>[t(r(P),{fluid:"",content:"Fits container"})]),_:1}))}},iw=`<template>
  <SuiButton circular icon="settings" />
</template>`,lw={__name:"CircularDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Circular",code:iw},{description:l(()=>[n(" A button can be circular ")]),example:l(()=>[t(r(P),{circular:"",icon:"settings"})]),_:1}))}},aw=k("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?",-1),nw=`<template>
  <SuiButton attached="top" content="Top" />
  <SuiSegment>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?</p>
  </SuiSegment>
  <SuiButton attached="bottom" content="Bottom" />
</template>`,ow={__name:"VerticallyAttachedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Vertically Attached",code:nw},{description:l(()=>[n(" A button can be attached to the top or bottom of other content ")]),example:l(()=>[t(r(P),{attached:"top",content:"Top"}),t(r(H),{attached:""},{default:l(()=>[aw]),_:1}),t(r(P),{attached:"bottom",content:"Bottom"})]),_:1}))}},sw=`<template>
  <SuiButton attached="left" content="Left" />
  <SuiButton attached="right" content="Right" />
</template>`,rw={__name:"HorizontallyAttachedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Horizontally Attached",code:sw},{description:l(()=>[n(" A button can be attached to the left or right of other content ")]),example:l(()=>[t(r(P),{attached:"left",content:"Left"}),t(r(P),{attached:"right",content:"Right"})]),_:1}))}},uw=`<template>
  <SuiButtonGroup vertical>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,cw={__name:"VerticalButtonsDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Vertical Buttons",code:uw},{description:l(()=>[n(" Groups can be formatted to appear vertically ")]),example:l(()=>[t(r(ft),{vertical:""},{default:l(()=>[t(r(P),null,{default:l(()=>[n("Feed")]),_:1}),t(r(P),null,{default:l(()=>[n("Messages")]),_:1}),t(r(P),null,{default:l(()=>[n("Events")]),_:1}),t(r(P),null,{default:l(()=>[n("Photos")]),_:1})]),_:1})]),_:1}))}},dw=`<template>
  <SuiButtonGroup stackable>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,pw={__name:"StackableButtonsDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Stackable Buttons",code:dw},{description:l(()=>[n(" Horizontal groups can automatically be stacked on mobile devices ")]),example:l(()=>[t(r(ft),{stackable:""},{default:l(()=>[t(r(P),null,{default:l(()=>[n("Feed")]),_:1}),t(r(P),null,{default:l(()=>[n("Messages")]),_:1}),t(r(P),null,{default:l(()=>[n("Events")]),_:1}),t(r(P),null,{default:l(()=>[n("Photos")]),_:1})]),_:1})]),_:1}))}},mw=`<template>
  <SuiButtonGroup vertical labeled icon>
    <SuiButton icon="pause" content="Pause" />
    <SuiButton icon="play" content="Play" />
    <SuiButton icon="shuffle" content="Shuffle" />
  </SuiButtonGroup>
</template>`,fw={__name:"LabeledIconButtonsDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Icon Buttons",code:mw},{description:l(()=>[n(" Groups can be formatted as labeled icons ")]),example:l(()=>[t(r(ft),{vertical:"",labeled:"",icon:""},{default:l(()=>[t(r(P),{icon:"pause",content:"Pause"}),t(r(P),{icon:"play",content:"Play"}),t(r(P),{icon:"shuffle",content:"Shuffle"})]),_:1})]),_:1}))}},gw=`<template>
  <SuiButtonGroup>
    <SuiButton labeled icon="left chevron" content="Back" />
    <SuiButton icon="stop" content="Stop" />
    <SuiButton icon labeled="right">
      <SuiIcon name="right chevron" />
      Forward
    </SuiButton>
  </SuiButtonGroup>
</template>`,hw={__name:"MixedGroupDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Mixed Group",code:gw},{description:l(()=>[n(" Button groups can show groups of icons ")]),example:l(()=>[t(r(ft),null,{default:l(()=>[t(r(P),{labeled:"",icon:"left chevron",content:"Back"}),t(r(P),{icon:"stop",content:"Stop"}),t(r(P),{icon:"",labeled:"right"},{default:l(()=>[t(r(Y),{name:"right chevron"}),n(" Forward ")]),_:1})]),_:1})]),_:1}))}},_w=`<template>
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
</template>`,bw={__name:"EqualWidthDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Equal Width",code:_w},{description:l(()=>[n(" Groups can have their widths divided evenly ")]),example:l(()=>[t(r(ft),{widths:5},{default:l(()=>[t(r(P),null,{default:l(()=>[n("Overview")]),_:1}),t(r(P),null,{default:l(()=>[n("Specs")]),_:1}),t(r(P),null,{default:l(()=>[n("Warranty")]),_:1}),t(r(P),null,{default:l(()=>[n("Reviews")]),_:1}),t(r(P),null,{default:l(()=>[n("Support")]),_:1})]),_:1}),t(r(ft),{widths:3},{default:l(()=>[t(r(P),null,{default:l(()=>[n("Overview")]),_:1}),t(r(P),null,{default:l(()=>[n("Specs")]),_:1}),t(r(P),null,{default:l(()=>[n("Support")]),_:1})]),_:1})]),_:1}))}},vw=`<template>
  <SuiButtonGroup color="blue">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Sw={__name:"ColoredButtonsDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Colored Buttons",code:vw},{description:l(()=>[n(" Groups can have a shared color ")]),example:l(()=>[t(r(ft),{color:"blue"},{default:l(()=>[t(r(P),null,{default:l(()=>[n("One")]),_:1}),t(r(P),null,{default:l(()=>[n("Two")]),_:1}),t(r(P),null,{default:l(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},yw=`<template>
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
</template>`,ww={__name:"BasicButtonsDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Basic Buttons",code:yw},{description:l(()=>[n(" A button group can be less pronounced ")]),example:l(()=>[t(r(ft),{basic:""},{default:l(()=>[t(r(P),null,{default:l(()=>[n("One")]),_:1}),t(r(P),null,{default:l(()=>[n("Two")]),_:1}),t(r(P),null,{default:l(()=>[n("Three")]),_:1})]),_:1}),t(r(ft),null,{default:l(()=>[t(r(P),{basic:"",color:"red"},{default:l(()=>[n("One")]),_:1}),t(r(P),{basic:"",color:"blue"},{default:l(()=>[n("Two")]),_:1}),t(r(P),{basic:"",color:"green"},{default:l(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},Cw=`<template>
  <SuiButtonGroup size="large">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Aw={__name:"GroupSizesDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Group Sizes",code:Cw},{description:l(()=>[n(" Groups can have a shared color ")]),example:l(()=>[t(r(ft),{size:"large"},{default:l(()=>[t(r(P),null,{default:l(()=>[n("One")]),_:1}),t(r(P),null,{default:l(()=>[n("Two")]),_:1}),t(r(P),null,{default:l(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},xw={__name:"Button",setup(e){const i=[{id:"button",label:"Button",category:"Types",component:sy},{id:"emphasis",label:"Emphasis",category:"Types",component:uy},{id:"animated",label:"Animated",category:"Types",component:dy},{id:"labeled",label:"Labeled",category:"Types",component:my},{id:"icon",label:"Icon",category:"Types",component:gy},{id:"labeled-icon",label:"Labeled Icon",category:"Types",component:_y},{id:"basic",label:"Basic",category:"Types",component:vy},{id:"tertiary",label:"Tertiary",category:"Types",component:yy},{id:"inverted",label:"Inverted",category:"Types",component:Cy},{id:"buttons",label:"Buttons",category:"Groups",component:xy},{id:"icon-buttons",label:"Icon Buttons",category:"Groups",component:By},{id:"content",label:"Content",category:"Content",component:Dy},{id:"active",label:"Active",category:"States",component:Ey},{id:"disabled",label:"Disabled",category:"States",component:Py},{id:"loading",label:"Loading",category:"States",component:Vy},{id:"social",label:"Social",category:"Variations",component:My},{id:"size",label:"Size",category:"Variations",component:Hy},{id:"floated",label:"Floated",category:"Variations",component:qy},{id:"colored",label:"Colored",category:"Variations",component:jy},{id:"compact",label:"Compact",category:"Variations",component:Yy},{id:"toggle",label:"Toggle",category:"Variations",component:Wy},{id:"positive",label:"Positive",category:"Variations",component:Xy},{id:"negative",label:"Negative",category:"Variations",component:Zy},{id:"fluid",label:"Fluid",category:"Variations",component:tw},{id:"circular",label:"Circular",category:"Variations",component:lw},{id:"vertically-attached",label:"Vertically Attached",category:"Variations",component:ow},{id:"horizontally-attached",label:"Horizontally Attached",category:"Variations",component:rw},{id:"vertical-buttons",label:"Vertical Buttons",category:"Group Variations",component:cw},{id:"stackable-buttons",label:"Stackable Buttons",category:"Group Variations",component:pw},{id:"labeled-icon-buttons",label:"Labeled Icon Buttons",category:"Group Variations",component:fw},{id:"mixed-group",label:"Mixed Group",category:"Group Variations",component:hw},{id:"equal-width",label:"Equal Width",category:"Group Variations",component:bw},{id:"colored-buttons",label:"Colored Buttons",category:"Group Variations",component:Sw},{id:"basic-buttons",label:"Basic Buttons",category:"Group Variations",component:ww},{id:"group-sizes",label:"Group Sizes",category:"Group Variations",component:Aw}];return(a,o)=>(y(),x(ot,{title:"Button",description:"A button indicates a possible user action","component-docs":i}))}},kw=k("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Bw=`<template>
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
</template>`,$w={__name:"ContainerDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Container",code:Bw},{description:l(()=>[n(" A standard container ")]),example:l(()=>[t(r(Ni),null,{default:l(()=>[kw]),_:1})]),_:1}))}},Tw=k("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Lw=`<template>
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
</template>`,Dw={__name:"TextContainerDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Text Container",code:Lw},{description:l(()=>[n(" A container can reduce its maximum width to more naturally accommodate a single column of text ")]),example:l(()=>[t(r(Ni),{text:""},{default:l(()=>[t(r(me),{as:"h2"},{default:l(()=>[n("Header")]),_:1}),Tw]),_:1})]),_:1}))}},Iw=`<template>
  <SuiContainer textAlign="left">Left Aligned</SuiContainer>
  <SuiContainer textAlign="center">Center Aligned</SuiContainer>
  <SuiContainer textAlign="right">Right Aligned</SuiContainer>
</template>`,Ew={__name:"TextAlignmentDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Text Alignment",code:Iw},{description:l(()=>[n(" A container can specify its text alignment ")]),example:l(()=>[t(r(Ni),{textAlign:"left"},{default:l(()=>[n("Left Aligned")]),_:1}),t(r(Ni),{textAlign:"center"},{default:l(()=>[n("Center Aligned")]),_:1}),t(r(Ni),{textAlign:"right"},{default:l(()=>[n("Right Aligned")]),_:1})]),_:1}))}},Rw=k("p",null," Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today. ",-1),Pw=`<template>
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
</template>`,zw={__name:"FluidDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Fluid",code:Pw},{description:l(()=>[n(" A fluid container has no maximum width ")]),example:l(()=>[t(r(Ni),{fluid:""},{default:l(()=>[t(r(me),{as:"h2"},{default:l(()=>[n("Dogs Roles with Humans")]),_:1}),Rw]),_:1})]),_:1}))}},Vw={__name:"Container",setup(e){const i=[{id:"container",label:"Container",category:"Types",component:$w},{id:"text-container",label:"Text Container",category:"Types",component:Dw},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:Ew},{id:"fluid",label:"Fluid",category:"Variations",component:zw}];return(a,o)=>(y(),x(ot,{title:"Container",description:"A container limits content to a maximum width","component-docs":i}))}},Fw=`<template>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider />
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,Mw={__name:"DividerDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Divider",code:Fw},{description:l(()=>[n(" A standard divider ")]),example:l(()=>[t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(Ve)),t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},Nw=k("label",null,"Username",-1),Hw=k("input",{type:"text",placeholder:"Username"},null,-1),Ow=k("label",null,"Password",-1),qw=k("input",{type:"password",placeholder:"Password"},null,-1),Gw=`<template>
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
</template>`,jw={__name:"VerticalDividerDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Vertical Divider",code:Gw},{description:l(()=>[n(" A divider can segment content vertically. ")]),example:l(()=>[t(r(H),{placeholder:""},{default:l(()=>[t(r(ba),{columns:"equal"},{default:l(()=>[t(r(Bt),null,{default:l(()=>[t(r(Nt),null,{default:l(()=>[t(r(it),null,{default:l(()=>[Nw,Hw]),_:1}),t(r(it),null,{default:l(()=>[Ow,qw]),_:1}),t(r(P),{primary:""},{default:l(()=>[n("Login")]),_:1})]),_:1})]),_:1}),t(r(Bt),{textAlign:"middle"},{default:l(()=>[t(r(P),{secondary:"",icon:"signup",content:"Sign Up"})]),_:1})]),_:1}),t(r(Ve),{vertical:""},{default:l(()=>[n("Or")]),_:1})]),_:1})]),_:1}))}},Uw=`<template>
  <SuiSegment basic textAlign="center">
    <SuiInput icon="search" iconPosition="left" action="Search" placeholder="Order #" />
    <SuiDivider horizontal>Or</SuiDivider>
    <SuiButton labeled icon="add" color="green" content="Create New Order" />
  </SuiSegment>
</template>`,Yw={__name:"HorizontalDividerDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Horizontal Divider",code:Uw},{description:l(()=>[n(" A divider can segment content horizontally ")]),example:l(()=>[t(r(H),{basic:"",textAlign:"center"},{default:l(()=>[t(r(Ze),{icon:"search",iconPosition:"left",action:"Search",placeholder:"Order #"}),t(r(Ve),{horizontal:""},{default:l(()=>[n("Or")]),_:1}),t(r(P),{labeled:"",icon:"add",color:"green",content:"Create New Order"})]),_:1})]),_:1}))}},Jw=`<template>
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
</template>`,Ww={__name:"HorizontalAlignmentDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Horizontal Alignment",code:Jw},{description:l(()=>[n(" A horizontal divider can be aligned ")]),example:l(()=>[t(r(Ve),{horizontal:"",textAlign:"left"},{default:l(()=>[t(r(Y),{name:"left align"}),n(" Left Aligned ")]),_:1}),t(r(Ve),{horizontal:"",textAlign:"center"},{default:l(()=>[t(r(Y),{name:"center align"}),n(" Center Aligned ")]),_:1}),t(r(Ve),{horizontal:"",textAlign:"right"},{default:l(()=>[t(r(Y),{name:"right align"}),n(" Right Aligned ")]),_:1})]),_:1}))}},Kw=`<template>
  <SuiSegment inverted>
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider inverted />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider horizontal inverted>Horizontal</SuiDivider>
  </SuiSegment>
</template>`,Xw={__name:"InvertedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Inverted",code:Kw},{description:l(()=>[n(" A divider can have its colors inverted ")]),example:l(()=>[t(r(H),{inverted:""},{default:l(()=>[t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(Ve),{inverted:""}),t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(Ve),{horizontal:"",inverted:""},{default:l(()=>[n("Horizontal")]),_:1})]),_:1})]),_:1}))}},Qw=`<template>
  <SuiSegment>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
    <SuiDivider fitted />
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
  </SuiSegment>
</template>`,Zw={__name:"FittedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Inverted",code:Qw},{description:l(()=>[n(" A divider can be fitted, without any space above or below it. ")]),example:l(()=>[t(r(H),null,{default:l(()=>[n(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),t(r(Ve),{fitted:""}),n(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. ")]),_:1})]),_:1}))}},eC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider hidden />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,tC={__name:"HiddenDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Hidden",code:eC},{description:l(()=>[n(" A hidden divider divides content without creating a dividing line ")]),example:l(()=>[t(r(me),null,{default:l(()=>[n("Section One")]),_:1}),t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(Ve),{hidden:""}),t(r(me),null,{default:l(()=>[n("Section Two")]),_:1}),t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},iC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider section />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,lC={__name:"SectionDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Section",code:iC},{description:l(()=>[n(" A divider can provide greater margins to divide sections of content ")]),example:l(()=>[t(r(me),null,{default:l(()=>[n("Section One")]),_:1}),t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(Ve),{section:""}),t(r(me),null,{default:l(()=>[n("Section Two")]),_:1}),t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},aC=`<template>
  <SuiSegment>
    <SuiHeader floated="right">Section One</SuiHeader>
    <SuiDivider clearing />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,nC={__name:"ClearingDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Clearing",code:aC},{description:l(()=>[n(" A divider can clear the contents above it ")]),example:l(()=>[t(r(H),null,{default:l(()=>[t(r(me),{floated:"right"},{default:l(()=>[n("Section One")]),_:1}),t(r(Ve),{clearing:""}),t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},oC=`<template>
  <SuiDivider size="mini">MINI</SuiDivider>
  <SuiDivider size="tiny">TINY</SuiDivider>
  <SuiDivider size="small">SMALL</SuiDivider>
  <SuiDivider size="large">LARGE</SuiDivider>
  <SuiDivider size="big">BIG</SuiDivider>
  <SuiDivider size="huge">HUGE</SuiDivider>
  <SuiDivider size="massive">MASSIVE</SuiDivider>
</template>`,sC={__name:"SizeDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Size",code:oC},{description:l(()=>[n(" A divider text can vary in size ")]),example:l(()=>[t(r(Ve),{horizontal:"",size:"mini"},{default:l(()=>[n("MINI")]),_:1}),t(r(Ve),{horizontal:"",size:"tiny"},{default:l(()=>[n("TINY")]),_:1}),t(r(Ve),{horizontal:"",size:"small"},{default:l(()=>[n("SMALL")]),_:1}),t(r(Ve),{horizontal:"",size:"large"},{default:l(()=>[n("LARGE")]),_:1}),t(r(Ve),{horizontal:"",size:"big"},{default:l(()=>[n("BIG")]),_:1}),t(r(Ve),{horizontal:"",size:"huge"},{default:l(()=>[n("HUGE")]),_:1}),t(r(Ve),{horizontal:"",size:"massive"},{default:l(()=>[n("MASSIVE")]),_:1})]),_:1}))}},rC={__name:"Divider",setup(e){const i=[{id:"divider",label:"Divider",category:"Types",component:Mw},{id:"vertical-divider",label:"Vertical Divider",category:"Types",component:jw},{id:"horizontal-divider",label:"Horizontal Divider",category:"Types",component:Yw},{id:"horizontal-alignment",label:"Horizontal Alignment",category:"Types",component:Ww},{id:"inverted",label:"Inverted",category:"Variations",component:Xw},{id:"fitted",label:"Fitted",category:"Variations",component:Zw},{id:"hidden",label:"Hidden",category:"Variations",component:tC},{id:"section",label:"Section",category:"Variations",component:lC},{id:"clearing",label:"Clearing",category:"Variations",component:nC},{id:"size",label:"Size",category:"Variations",component:sC}];return(a,o)=>(y(),x(ot,{title:"Divider",description:"A divider visually segments content into groups","component-docs":i}))}},uC=`<template>
  <SuiEmoji name="anguished" disabled />
</template>`,cC={__name:"DisabledDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Disabled",code:uC},{description:l(()=>[n(" An emoji can show that it is disabled ")]),example:l(()=>[t(r(Lt),{name:"anguished",disabled:""})]),_:1}))}},dC=`<template>
  <SuiEmoji name="angel" loading />
  <SuiEmoji name="blush" loading />
  <SuiEmoji name="grin" loading />
</template>`,pC={__name:"LoadingDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Loading",code:dC},{description:l(()=>[n(" An emoji can be used as a simple loader ")]),example:l(()=>[t(r(Lt),{name:"angel",loading:""}),t(r(Lt),{name:"blush",loading:""}),t(r(Lt),{name:"grin",loading:""})]),_:1}))}},mC=`<template>
  <SuiEmoji name="relaxed" size="small" />
  <SuiEmoji name="relaxed" size="medium" />
  <SuiEmoji name="relaxed" size="large" />
  <SuiEmoji name="relaxed" size="big" />
</template>`,fC={__name:"SizeDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Size",code:mC},{description:l(()=>[n(" An emoji can vary in size ")]),example:l(()=>[t(r(Lt),{name:"relaxed",size:"small"}),t(r(Lt),{name:"relaxed",size:"medium"}),t(r(Lt),{name:"relaxed",size:"large"}),t(r(Lt),{name:"relaxed",size:"big"})]),_:1}))}},gC=`<template>
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
</template>`,hC={__name:"AutosizingDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Autosizing",code:gC},{description:l(()=>[n(" If no specific size class is given, all emojis are automatically sized according to the current element font-size ")]),example:l(()=>[t(r(me),{size:"small"},{default:l(()=>[n(" Within a Header "),t(r(Lt),{name:"relaxed"})]),_:1}),t(r(P),{as:"div",size:"large"},{default:l(()=>[n(" Within a Button "),t(r(Lt),{name:"relaxed"})]),_:1}),t(r(O),{size:"massive"},{default:l(()=>[n(" Within a Label "),t(r(Lt),{name:"relaxed"})]),_:1})]),_:1}))}},_C=`<template>
  <SuiEmoji link name="slight_smile" size="medium" />
</template>`,bC={__name:"LinkDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Link",code:_C},{description:l(()=>[n(" An emoji can be formatted as a link ")]),example:l(()=>[t(r(Lt),{link:"",name:"slight_smile",size:"medium"})]),_:1}))}},vC={__name:"Emoji",setup(e){const i=[{id:"disabled",label:"Disabled",category:"States",component:cC},{id:"loading",label:"Loading",category:"States",component:pC},{id:"size",label:"Size",category:"Variations",component:fC},{id:"autosizing",label:"Autosizing",category:"Variations",component:hC},{id:"link",label:"Link",category:"Variations",component:bC}];return(a,o)=>(y(),x(ot,{title:"Emoji",description:"An emoji is a glyph used to represent an emotional state","component-docs":i}))}},SC=`<template>
  <SuiFlag name="de" size="small" />
  <SuiFlag name="fr" size="medium" />
  <SuiFlag name="li" size="large" />
  <SuiFlag name="jp" size="big" />
  <SuiFlag name="gb" size="huge" />
  <SuiFlag name="un" size="massive" />
</template>`,yC={__name:"SizeDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Size",code:SC},{description:l(()=>[n(" A flag can vary in size ")]),example:l(()=>[t(r(Yt),{name:"de",size:"small"}),t(r(Yt),{name:"fr",size:"medium"}),t(r(Yt),{name:"li",size:"large"}),t(r(Yt),{name:"jp",size:"big"}),t(r(Yt),{name:"gb",size:"huge"}),t(r(Yt),{name:"un",size:"massive"})]),_:1}))}},wC=`<template>
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
</template>`,CC={__name:"AutosizingDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Autosizing",code:wC},{description:l(()=>[n(" If no specific size class is given, all flags are automatically sized according to the current element font-size ")]),example:l(()=>[t(r(me),{size:"small"},{default:l(()=>[n(" Within a Header "),t(r(Yt),{name:"us"})]),_:1}),t(r(P),{as:"div",size:"large"},{default:l(()=>[n(" Within a Button "),t(r(Yt),{name:"eu"})]),_:1}),t(r(O),{size:"massive"},{default:l(()=>[n(" Within a Label "),t(r(Yt),{name:"pirate"})]),_:1})]),_:1}))}},AC={__name:"Flag",setup(e){const i=[{id:"size",label:"Size",category:"Types",component:yC},{id:"autosizing",label:"Autosizing",category:"Types",component:CC}];return(a,o)=>(y(),x(ot,{title:"Flag",description:"A flag is used to represent a political state","component-docs":i}))}},xC=`<template>
  <SuiHeader as="h1">First Header</SuiHeader>
  <SuiHeader as="h2">Second Header</SuiHeader>
  <SuiHeader as="h3">Third Header</SuiHeader>
  <SuiHeader as="h4">Fourth Header</SuiHeader>
  <SuiHeader as="h5">Fifth Header</SuiHeader>
</template>`,kC={__name:"PageHeadersDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Page Headers",code:xC},{description:l(()=>[n(" Headers may be oriented to give the hierarchy of a section in the context of the page ")]),example:l(()=>[t(r(me),{as:"h1"},{default:l(()=>[n("First Header")]),_:1}),t(r(me),{as:"h2"},{default:l(()=>[n("Second Header")]),_:1}),t(r(me),{as:"h3"},{default:l(()=>[n("Third Header")]),_:1}),t(r(me),{as:"h4"},{default:l(()=>[n("Fourth Header")]),_:1}),t(r(me),{as:"h5"},{default:l(()=>[n("Fifth Header")]),_:1})]),_:1}))}},BC=`<template>
  <SuiHeader size="huge">Huge Header</SuiHeader>
  <SuiHeader size="large">Large Header</SuiHeader>
  <SuiHeader size="medium">Medium Header</SuiHeader>
  <SuiHeader size="small">Small Header</SuiHeader>
  <SuiHeader size="tiny">Tiny Header</SuiHeader>
</template>`,$C={__name:"ContentHeadersDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Content Headers",code:BC},{description:l(()=>[n(" Headers may be oriented to give the importance of a section in the context of the content that surrounds it ")]),example:l(()=>[t(r(me),{size:"huge"},{default:l(()=>[n("Huge Header")]),_:1}),t(r(me),{size:"large"},{default:l(()=>[n("Large Header")]),_:1}),t(r(me),{size:"medium"},{default:l(()=>[n("Medium Header")]),_:1}),t(r(me),{size:"small"},{default:l(()=>[n("Small Header")]),_:1}),t(r(me),{size:"tiny"},{default:l(()=>[n("Tiny Header")]),_:1})]),_:1}))}},TC=`<template>
  <SuiHeader icon>
    <SuiIcon name="settings" />
    <SuiHeaderContent>
      Account Settings
    </SuiHeaderContent>
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,LC={__name:"IconHeadersDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Icon Headers",code:TC},{description:l(()=>[n(" A header can be formatted to emphasize an icon ")]),example:l(()=>[t(r(me),{icon:""},{default:l(()=>[t(r(Y),{name:"settings"}),t(r(gs),null,{default:l(()=>[n(" Account Settings ")]),_:1}),t(r(Yi),null,{default:l(()=>[n(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},DC=k("span",null,"$10.99",-1),IC=`<template>
  <SuiHeader sub>Price</SuiHeader>
  <span>$10.99</span>
</template>`,EC={__name:"SubHeadersDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Sub Headers",code:IC},{description:l(()=>[n(" Headers may be formatted to label smaller or de-emphasized content. ")]),example:l(()=>[t(r(me),{sub:""},{default:l(()=>[n("Price")]),_:1}),DC]),_:1}))}},RC=`<template>
  <SuiHeader as="h2">
    <SuiImage src="/images/avatar/large/steve.jpg" avatar />
    Steve
  </SuiHeader>
</template>`,PC={__name:"ImageDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Image",code:RC},{description:l(()=>[n(" A header may contain an image ")]),example:l(()=>[t(r(me),{as:"h2"},{default:l(()=>[t(r(oe),{src:"/vue-fomantic-ui/images/avatar/large/steve.jpg",avatar:""}),n(" Steve ")]),_:1})]),_:1}))}},zC=`<template>
  <SuiHeader as="h2">
    <SuiIcon name="plug" />
    <SuiHeaderContent>
      Uptime Guarantee
    </SuiHeaderContent>
  </SuiHeader>
</template>`,VC={__name:"IconDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Icon",code:zC},{description:l(()=>[n(" A header may contain an Icon ")]),example:l(()=>[t(r(me),{as:"h2"},{default:l(()=>[t(r(Y),{name:"plug"}),t(r(gs),null,{default:l(()=>[n(" Uptime Guarantee ")]),_:1})]),_:1})]),_:1}))}},FC=`<template>
  <SuiHeader as="h2">
    Account Settings
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,MC={__name:"SubheaderDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Subheader",code:FC},{description:l(()=>[n(" Headers may contain subheaders ")]),example:l(()=>[t(r(me),{as:"h2"},{default:l(()=>[n(" Account Settings "),t(r(Yi),null,{default:l(()=>[n(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},NC=`<template>
  <SuiHeader disabled>
    Disabled Header
  </SuiHeader>
</template>`,HC={__name:"DisabledDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Disabled",code:NC},{description:l(()=>[n(" A header can show that it is inactive ")]),example:l(()=>[t(r(me),{disabled:""},{default:l(()=>[n(" Disabled Header ")]),_:1})]),_:1}))}},OC=`<template>
  <SuiHeader as="h3" dividing>
    Dividing Header
  </SuiHeader>
</template>`,qC={__name:"DividingDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Dividing",code:OC},{description:l(()=>[n(" A header can be formatted to divide itself from the content below it ")]),example:l(()=>[t(r(me),{as:"h3",dividing:""},{default:l(()=>[n(" Dividing Header ")]),_:1})]),_:1}))}},GC=`<template>
  <SuiHeader as="h3" block>
    Block Header
  </SuiHeader>
</template>`,jC={__name:"BlockDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Block",code:GC},{description:l(()=>[n(" A header can be formatted to appear inside a content block ")]),example:l(()=>[t(r(me),{as:"h3",block:""},{default:l(()=>[n(" Block Header ")]),_:1})]),_:1}))}},UC=`<template>
  <SuiHeader as="h2" attached="top">
    Attached Header
  </SuiHeader>
  <SuiSegment attached>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </SuiSegment>
</template>`,YC={__name:"AttachedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Attached",code:UC},{description:l(()=>[n(" A header can be attached to other content, like a segment ")]),example:l(()=>[t(r(me),{as:"h2",attached:"top"},{default:l(()=>[n(" Attached Header ")]),_:1}),t(r(H),{attached:""},{default:l(()=>[n(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),_:1})]),_:1}))}},JC=`<template>
  <SuiSegment clearing>
    <SuiHeader as="h3" floated="right">
      Go Forward
    </SuiHeader>
    <SuiHeader as="h3" floated="left">
      Go Back
    </SuiHeader>
  </SuiSegment>
</template>`,WC={__name:"FloatingDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Floating",code:JC},{description:l(()=>[n(" A header can sit to the left or right of other content ")]),example:l(()=>[t(r(H),{clearing:""},{default:l(()=>[t(r(me),{as:"h3",floated:"right"},{default:l(()=>[n(" Go Forward ")]),_:1}),t(r(me),{as:"h3",floated:"left"},{default:l(()=>[n(" Go Back ")]),_:1})]),_:1})]),_:1}))}},KC=`<template>
  <SuiSegment>
    <SuiHeader as="h3" textAlign="right">Float Right</SuiHeader>
    <SuiHeader as="h3" textAlign="left">Float Left</SuiHeader>
    <SuiHeader as="h3" textAlign="justified">
      This text takes up the full width of the container
    </SuiHeader>
    <SuiHeader as="h3" textAlign="center">Centered</SuiHeader>
  </SuiSegment>
</template>`,XC={__name:"TextAlignmentDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Text Alignment",code:KC},{description:l(()=>[n(" A header can have its text aligned to a side ")]),example:l(()=>[t(r(H),null,{default:l(()=>[t(r(me),{as:"h3",textAlign:"right"},{default:l(()=>[n("Float Right")]),_:1}),t(r(me),{as:"h3",textAlign:"left"},{default:l(()=>[n("Float Left")]),_:1}),t(r(me),{as:"h3",textAlign:"justified"},{default:l(()=>[n(" This text takes up the full width of the container ")]),_:1}),t(r(me),{as:"h3",textAlign:"center"},{default:l(()=>[n("Centered")]),_:1})]),_:1})]),_:1}))}},QC=`<template>
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
</template>`,ZC={__name:"ColoredDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Colored",code:QC},{description:l(()=>[n(" A header can be formatted with different colors ")]),example:l(()=>[t(r(me),{as:"h4",primary:""},{default:l(()=>[n("Primary")]),_:1}),t(r(me),{as:"h4",secondary:""},{default:l(()=>[n("Secondary")]),_:1}),t(r(me),{as:"h4",color:"red"},{default:l(()=>[n("Red")]),_:1}),t(r(me),{as:"h4",color:"orange"},{default:l(()=>[n("Orange")]),_:1}),t(r(me),{as:"h4",color:"yellow"},{default:l(()=>[n("Yellow")]),_:1}),t(r(me),{as:"h4",color:"olive"},{default:l(()=>[n("Olive")]),_:1}),t(r(me),{as:"h4",color:"green"},{default:l(()=>[n("Green")]),_:1}),t(r(me),{as:"h4",color:"teal"},{default:l(()=>[n("Teal")]),_:1}),t(r(me),{as:"h4",color:"blue"},{default:l(()=>[n("Blue")]),_:1}),t(r(me),{as:"h4",color:"purple"},{default:l(()=>[n("Purple")]),_:1}),t(r(me),{as:"h4",color:"violet"},{default:l(()=>[n("Violet")]),_:1}),t(r(me),{as:"h4",color:"pink"},{default:l(()=>[n("Pink")]),_:1}),t(r(me),{as:"h4",color:"brown"},{default:l(()=>[n("Brown")]),_:1}),t(r(me),{as:"h4",color:"grey"},{default:l(()=>[n("Grey")]),_:1})]),_:1}))}},e0=`<template>
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
</template>`,t0={__name:"InvertedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Colored",code:e0},{description:l(()=>[n(" A header can have its colors inverted for contrast ")]),example:l(()=>[t(r(H),{inverted:""},{default:l(()=>[t(r(me),{as:"h4",inverted:"",color:"red"},{default:l(()=>[n("Red")]),_:1}),t(r(me),{as:"h4",inverted:"",color:"orange"},{default:l(()=>[n("Orange")]),_:1}),t(r(me),{as:"h4",inverted:"",color:"yellow"},{default:l(()=>[n("Yellow")]),_:1}),t(r(me),{as:"h4",inverted:"",color:"olive"},{default:l(()=>[n("Olive")]),_:1}),t(r(me),{as:"h4",inverted:"",color:"green"},{default:l(()=>[n("Green")]),_:1}),t(r(me),{as:"h4",inverted:"",color:"teal"},{default:l(()=>[n("Teal")]),_:1}),t(r(me),{as:"h4",inverted:"",color:"blue"},{default:l(()=>[n("Blue")]),_:1}),t(r(me),{as:"h4",inverted:"",color:"purple"},{default:l(()=>[n("Purple")]),_:1}),t(r(me),{as:"h4",inverted:"",color:"violet"},{default:l(()=>[n("Violet")]),_:1}),t(r(me),{as:"h4",inverted:"",color:"pink"},{default:l(()=>[n("Pink")]),_:1}),t(r(me),{as:"h4",inverted:"",color:"brown"},{default:l(()=>[n("Brown")]),_:1}),t(r(me),{as:"h4",inverted:"",color:"grey"},{default:l(()=>[n("Grey")]),_:1})]),_:1})]),_:1}))}},i0={__name:"Header",setup(e){const i=[{id:"page-headers",label:"Page Headers",category:"Types",component:kC},{id:"content-headers",label:"Content Headers",category:"Types",component:$C},{id:"icon-headers",label:"Icon Headers",category:"Types",component:LC},{id:"sub-headers",label:"Sub Headers",category:"Types",component:EC},{id:"image",label:"Image",category:"Content",component:PC},{id:"icon",label:"Icon",category:"Content",component:VC},{id:"subheader",label:"Subheader",category:"Content",component:MC},{id:"disabled",label:"Disabled",category:"States",component:HC},{id:"dividing",label:"Dividing",category:"Variations",component:qC},{id:"block",label:"Block",category:"Variations",component:jC},{id:"attached",label:"Attached",category:"Variations",component:YC},{id:"floating",label:"Floating",category:"Variations",component:WC},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:XC},{id:"colored",label:"Colored",category:"Variations",component:ZC},{id:"inverted",label:"Inverted",category:"Variations",component:t0}];return(a,o)=>(y(),x(ot,{title:"Header",description:"A header provides a short summary of content","component-docs":i}))}},l0=`<template>
  <SuiIcon name="users" disabled />
</template>`,a0={__name:"DisabledDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Disabled",code:l0},{description:l(()=>[n(" An icon can show that it is disabled ")]),example:l(()=>[t(r(Y),{name:"users",disabled:""})]),_:1}))}},n0=`<template>
  <SuiIcon name="spinner" loading />
  <SuiIcon name="notched circle" loading />
  <SuiIcon name="asterisk" loading />
</template>`,o0={__name:"LoadingDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Loading",code:n0},{description:l(()=>[n(" An icon can be used as a simple loader ")]),example:l(()=>[t(r(Y),{name:"spinner",loading:""}),t(r(Y),{name:"notched circle",loading:""}),t(r(Y),{name:"asterisk",loading:""})]),_:1}))}},s0=k("br",null,null,-1),r0=`<template>
  <div>
    This icon
    <SuiIcon name="help" fitted />
    is fitted.
    <br />
    This icon
    <SuiIcon name="help" />
    is not fitted.
  </div>
</template>`,u0={__name:"FittedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Fitted",code:r0},{description:l(()=>[n(" An icon can be fitted, without any space to the left or right of it. ")]),example:l(()=>[k("div",null,[n(" This icon "),t(r(Y),{name:"help",fitted:""}),n(" is fitted. "),s0,n(" This icon "),t(r(Y),{name:"help"}),n(" is not fitted. ")])]),_:1}))}},c0=`<template>
  <SuiIcon name="home" size="mini" />
  <SuiIcon name="home" size="tiny" />
  <SuiIcon name="home" size="small" />
  <SuiIcon name="home" />
  <SuiIcon name="home" size="large" />
  <SuiIcon name="home" size="big" />
  <SuiIcon name="home" size="huge" />
  <SuiIcon name="home" size="massive" />
</template>`,d0={__name:"SizeDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Size",code:c0},{description:l(()=>[n(" An icon can vary in size ")]),example:l(()=>[t(r(Y),{name:"home",size:"mini"}),t(r(Y),{name:"home",size:"tiny"}),t(r(Y),{name:"home",size:"small"}),t(r(Y),{name:"home"}),t(r(Y),{name:"home",size:"large"}),t(r(Y),{name:"home",size:"big"}),t(r(Y),{name:"home",size:"huge"}),t(r(Y),{name:"home",size:"massive"})]),_:1}))}},p0=`<template>
  <SuiIcon name="close" link />
  <SuiIcon name="help" link />
</template>`,m0={__name:"LinkDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Link",code:p0},{description:l(()=>[n(" An icon can be formatted as a link ")]),example:l(()=>[t(r(Y),{name:"close",link:""}),t(r(Y),{name:"help",link:""})]),_:1}))}},f0=`<template>
  <SuiIcon name="cloud" flipped="horizontally" />
  <SuiIcon name="cloud" flipped="vertically" />
</template>`,g0={__name:"FlippedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Flipped",code:f0},{description:l(()=>[n(" An icon can be flipped ")]),example:l(()=>[t(r(Y),{name:"cloud",flipped:"horizontally"}),t(r(Y),{name:"cloud",flipped:"vertically"})]),_:1}))}},h0=`<template>
  <SuiIcon name="cloud" rotated="clockwise" />
  <SuiIcon name="cloud" rotated="counterclockwise" />
</template>`,_0={__name:"RotatedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Rotated",code:h0},{description:l(()=>[n(" An icon can be rotated ")]),example:l(()=>[t(r(Y),{name:"cloud",rotated:"clockwise"}),t(r(Y),{name:"cloud",rotated:"counterclockwise"})]),_:1}))}},b0=`<template>
  <SuiIcon name="users" circular />
  <SuiIcon name="users" circular color="teal" />
  <SuiIcon name="users" circular inverted />
  <SuiIcon name="users" circular inverted color="teal" />
</template>`,v0={__name:"CircularDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Circular",code:b0},{description:l(()=>[n(" An icon can be formatted to appear circular ")]),example:l(()=>[t(r(Y),{name:"users",circular:""}),t(r(Y),{name:"users",circular:"",color:"teal"}),t(r(Y),{name:"users",circular:"",inverted:""}),t(r(Y),{name:"users",circular:"",inverted:"",color:"teal"})]),_:1}))}},S0=`<template>
  <SuiIcon name="users" circular colored color="red" />
  <SuiIcon name="users" circular colored color="green" />
  <SuiIcon name="users" circular colored color="blue" />
</template>`,y0={__name:"CircularColoredDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Circular Colored",code:S0},{description:l(()=>[n(" The circular color can appear in the same color as the icon itself ")]),example:l(()=>[t(r(Y),{name:"users",circular:"",colored:"",color:"red"}),t(r(Y),{name:"users",circular:"",colored:"",color:"green"}),t(r(Y),{name:"users",circular:"",colored:"",color:"blue"})]),_:1}))}},w0=`<template>
  <SuiIcon name="users" bordered />
  <SuiIcon name="users" bordered color="teal" />
  <SuiIcon name="users" bordered inverted color="black" />
  <SuiIcon name="users" bordered inverted color="teal" />
</template>`,C0={__name:"BorderedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Bordered",code:w0},{description:l(()=>[n(" An icon can be formatted to appear bordered ")]),example:l(()=>[t(r(Y),{name:"users",bordered:""}),t(r(Y),{name:"users",bordered:"",color:"teal"}),t(r(Y),{name:"users",bordered:"",inverted:"",color:"black"}),t(r(Y),{name:"users",bordered:"",inverted:"",color:"teal"})]),_:1}))}},A0=`<template>
  <SuiIcon name="users" bordered colored color="red" />
  <SuiIcon name="users" bordered colored color="green" />
  <SuiIcon name="users" bordered colored color="blue" />
</template>`,x0={__name:"BorderedColoredDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Bordered Colored",code:A0},{description:l(()=>[n(" The bordered color can appear in the same color as the icon itself ")]),example:l(()=>[t(r(Y),{name:"users",bordered:"",colored:"",color:"red"}),t(r(Y),{name:"users",bordered:"",colored:"",color:"green"}),t(r(Y),{name:"users",bordered:"",colored:"",color:"blue"})]),_:1}))}},k0=`<template>
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
</template>`,B0={__name:"ColoredDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Colored",code:k0},{description:l(()=>[n(" An icon can be formatted with different colors ")]),example:l(()=>[t(r(Y),{name:"users",primary:""}),t(r(Y),{name:"users",secondary:""}),t(r(Y),{name:"users",color:"red"}),t(r(Y),{name:"users",color:"orange"}),t(r(Y),{name:"users",color:"yellow"}),t(r(Y),{name:"users",color:"olive"}),t(r(Y),{name:"users",color:"green"}),t(r(Y),{name:"users",color:"teal"}),t(r(Y),{name:"users",color:"blue"}),t(r(Y),{name:"users",color:"violet"}),t(r(Y),{name:"users",color:"purple"}),t(r(Y),{name:"users",color:"pink"}),t(r(Y),{name:"users",color:"brown"}),t(r(Y),{name:"users",color:"grey"}),t(r(Y),{name:"users",color:"black"})]),_:1}))}},$0=`<template>
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
</template>`,T0={__name:"InvertedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Inverted",code:$0},{description:l(()=>[n(" An icon can have its colors inverted for contrast ")]),example:l(()=>[t(r(Y),{name:"users",inverted:""}),t(r(Y),{name:"users",inverted:"",primary:""}),t(r(Y),{name:"users",inverted:"",secondary:""}),t(r(Y),{name:"users",inverted:"",color:"red"}),t(r(Y),{name:"users",inverted:"",color:"orange"}),t(r(Y),{name:"users",inverted:"",color:"yellow"}),t(r(Y),{name:"users",inverted:"",color:"olive"}),t(r(Y),{name:"users",inverted:"",color:"green"}),t(r(Y),{name:"users",inverted:"",color:"teal"}),t(r(Y),{name:"users",inverted:"",color:"blue"}),t(r(Y),{name:"users",inverted:"",color:"violet"}),t(r(Y),{name:"users",inverted:"",color:"purple"}),t(r(Y),{name:"users",inverted:"",color:"pink"}),t(r(Y),{name:"users",inverted:"",color:"brown"}),t(r(Y),{name:"users",inverted:"",color:"grey"})]),_:1}))}},L0=`<template>
  <SuiIconGroup size="huge">
    <SuiIcon name="circle outline" size="big" />
    <SuiIcon name="user" />
  </SuiIconGroup>
  <SuiIconGroup size="huge">
    <SuiIcon name="dont" size="big" color="red" />
    <SuiIcon name="user" color="black" />
  </SuiIconGroup>
</template>`,D0={__name:"IconsDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Icons",code:L0},{description:l(()=>[n(" Several icons can be used together as a group ")]),example:l(()=>[t(r(Ri),{size:"huge"},{default:l(()=>[t(r(Y),{name:"circle outline",size:"big"}),t(r(Y),{name:"user"})]),_:1}),t(r(Ri),{size:"huge"},{default:l(()=>[t(r(Y),{name:"dont",size:"big",color:"red"}),t(r(Y),{name:"user",color:"black"})]),_:1})]),_:1}))}},I0=`<template>
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
</template>`,E0={__name:"CornerIconDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Corner Icon",code:I0},{description:l(()=>[n(" A group of icons can display a smaller corner icon ")]),example:l(()=>[t(r(Ri),{size:"huge"},{default:l(()=>[t(r(Y),{name:"puzzle"}),t(r(Y),{name:"add",corner:"top left"})]),_:1}),t(r(Ri),{size:"huge"},{default:l(()=>[t(r(Y),{name:"puzzle"}),t(r(Y),{name:"add",corner:"top right"})]),_:1}),t(r(Ri),{size:"huge"},{default:l(()=>[t(r(Y),{name:"puzzle"}),t(r(Y),{name:"add",corner:"bottom left"})]),_:1}),t(r(Ri),{size:"huge"},{default:l(()=>[t(r(Y),{name:"puzzle"}),t(r(Y),{name:"add",corner:"bottom right"})]),_:1})]),_:1}))}},R0={__name:"Icon",setup(e){const i=[{id:"disabled",label:"Disabled",category:"States",component:a0},{id:"loading",label:"Loading",category:"States",component:o0},{id:"fitted",label:"Fitted",category:"Variations",component:u0},{id:"size",label:"Size",category:"Variations",component:d0},{id:"link",label:"Link",category:"Variations",component:m0},{id:"flipped",label:"Flipped",category:"Variations",component:g0},{id:"rotated",label:"Rotated",category:"Variations",component:_0},{id:"circular",label:"Circular",category:"Variations",component:v0},{id:"circular-colored",label:"Circular Colored",category:"Variations",component:y0},{id:"bordered",label:"Bordered",category:"Variations",component:C0},{id:"bordered-colored",label:"Bordered Colored",category:"Variations",component:x0},{id:"colored",label:"Colored",category:"Variations",component:B0},{id:"inverted",label:"Inverted",category:"Variations",component:T0},{id:"icons",label:"Icons",category:"Groups",component:D0},{id:"corner-icon",label:"Corner Icon",category:"Groups",component:E0}];return(a,o)=>(y(),x(ot,{title:"Icon",description:"An icon is a glyph used to represent something else","component-docs":i}))}},P0=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" />
</template>`,z0={__name:"ImageDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Image",code:P0},{description:l(()=>[n(" An image ")]),example:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}))}},V0=`<template>
  <SuiImage
    as="a"
    size="medium"
    href="https://google.com"
    src="/images/wireframe/image-text.png"
    target="_blank"
  />
</template>`,F0={__name:"ImageLinkDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Image Link",code:V0},{description:l(()=>[n(" An image can be formatted to link to other content ")]),example:l(()=>[t(r(oe),{as:"a",size:"medium",href:"https://google.com",src:"/vue-fomantic-ui/images/wireframe/image-text.png",target:"_blank"})]),_:1}))}},M0=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" hidden />
</template>`,N0={__name:"HiddenDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Hidden",code:M0},{description:l(()=>[n(" An image can be hidden ")]),example:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png",hidden:""})]),_:1}))}},H0=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" disabled />
</template>`,O0={__name:"DisabledDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Disabled",code:H0},{description:l(()=>[n(" An image can show that it is disabled and cannot be selected ")]),example:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png",disabled:""})]),_:1}))}},q0=k("span",null,"Username",-1),G0=`<template>
  <SuiImage src="/images/wireframe/square-image.png" avatar />
  <span>Username</span>
</template>`,j0={__name:"AvatarDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Avatar",code:G0},{description:l(()=>[n(" An image may be formatted to appear inline with text as an avatar ")]),example:l(()=>[t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/square-image.png",avatar:""}),q0]),_:1}))}},U0=`<template>
  <SuiImage size="medium" src="/images/wireframe/white-image.png" bordered />
</template>`,Y0={__name:"BorderedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Bordered",code:U0},{description:l(()=>[n(" An image may include a border to emphasize the edges of white or transparent content ")]),example:l(()=>[t(r(oe),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/white-image.png",bordered:""})]),_:1}))}},J0=`<template>
  <SuiImage src="/images/wireframe/image.png" fluid />
</template>`,W0={__name:"FluidDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Fluid",code:J0},{description:l(()=>[n(" An image can take up the width of its container ")]),example:l(()=>[t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png",fluid:""})]),_:1}))}},K0=`<template>
  <SuiImage src="/images/wireframe/image.png" rounded />
</template>`,X0={__name:"RoundedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Rounded",code:K0},{description:l(()=>[n(" An image may appear rounded ")]),example:l(()=>[t(r(oe),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png",rounded:""})]),_:1}))}},Q0=`<template>
  <SuiImage src="/images/wireframe/square-image.png" circular />
</template>`,Z0={__name:"CircularDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Circular",code:Q0},{description:l(()=>[n(" An image may appear circular ")]),example:l(()=>[t(r(oe),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/square-image.png",circular:""})]),_:1}))}},eA=k("span",null,"Top Aligned",-1),tA=k("span",null,"Middle Aligned",-1),iA=k("span",null,"Bottom Aligned",-1),lA=`<template>
  <SuiImage verticalAlign="top" size="tiny" src="/images/wireframe/image.png" />
  <span>Top Aligned</span>
  <SuiDivider />
  <SuiImage verticalAlign="middle" size="tiny" src="/images/wireframe/image.png" />
  <span>Middle Aligned</span>
  <SuiDivider />
  <SuiImage verticalAlign="bottom" size="tiny" src="/images/wireframe/image.png" />
  <span>Bottom Aligned</span>
</template>`,aA={__name:"VerticallyAlignedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Vertically Aligned",code:lA},{description:l(()=>[n(" An image can specify its vertical alignment ")]),example:l(()=>[t(r(oe),{verticalAlign:"top",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),eA,t(r(Ve)),t(r(oe),{verticalAlign:"middle",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),tA,t(r(Ve)),t(r(oe),{verticalAlign:"bottom",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),iA]),_:1}))}},nA=k("p",null," Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ",-1),oA=k("p",null," Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. ",-1),sA=k("p",null," Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id. ",-1),rA=`<template>
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
</template>`,uA={__name:"CenteredDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Centered",code:rA},{description:l(()=>[n(" An image can appear centered in a content block ")]),example:l(()=>[t(r(H),null,{default:l(()=>[t(r(oe),{centered:"",size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png"}),nA,oA,t(r(oe),{centered:"",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),sA]),_:1})]),_:1}))}},cA=`<template>
  <SuiSegment>
    <p>
      Te eum doming eirmod, nominati pertinacia <SuiImage spaced size="mini" src="/images/wireframe/image.png" /> argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
    </p>
  </SuiSegment>
</template>`,dA={__name:"SpacedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Spaced",code:cA},{description:l(()=>[n(" An image can appear centered in a content block ")]),example:l(()=>[t(r(H),null,{default:l(()=>[k("p",null,[n(" Te eum doming eirmod, nominati pertinacia "),t(r(oe),{spaced:"",size:"mini",src:"/vue-fomantic-ui/images/wireframe/image.png"}),n(" argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ")])]),_:1})]),_:1}))}},pA=k("p",null," Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ",-1),mA=k("p",null," Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. ",-1),fA=k("p",null," Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id. ",-1),gA=`<template>
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
</template>`,hA={__name:"FloatedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Floated",code:gA},{description:l(()=>[n(" An image can sit to the left or right of other content ")]),example:l(()=>[t(r(H),null,{default:l(()=>[t(r(oe),{floated:"left",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),pA,t(r(oe),{floated:"right",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),mA,fA]),_:1})]),_:1}))}},_A=`<template>
  <SuiImage size="mini" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="tiny" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="small" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="medium" src="/images/wireframe/image.png" />
</template>`,bA={__name:"SizeDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Size",code:_A},{description:l(()=>[n(" An image may appear at different sizes ")]),example:l(()=>[t(r(oe),{size:"mini",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(Ve),{hidden:""}),t(r(oe),{size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(Ve),{hidden:""}),t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(Ve),{hidden:""}),t(r(oe),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}))}},vA=`<template>
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
</template>`,SA={__name:"GroupSizeDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Size",code:vA},{description:l(()=>[n(" A group of images can be formatted to have the same size. ")]),example:l(()=>[t(r(yo),{size:"tiny"},{default:l(()=>[t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(r(Ve),{hidden:""}),t(r(yo),{size:"small"},{default:l(()=>[t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1}))}},yA={__name:"Image",setup(e){const i=[{id:"image",label:"Image",category:"Types",component:z0},{id:"image-link",label:"Image Link",category:"Types",component:F0},{id:"hidden",label:"Hidden",category:"States",component:N0},{id:"disabled",label:"Disabled",category:"States",component:O0},{id:"avatar",label:"Avatar",category:"Variations",component:j0},{id:"bordered",label:"Bordered",category:"Variations",component:Y0},{id:"fluid",label:"Fluid",category:"Variations",component:W0},{id:"rounded",label:"Rounded",category:"Variations",component:X0},{id:"circular",label:"Circular",category:"Variations",component:Z0},{id:"vertically-aligned",label:"Vertically Aligned",category:"Variations",component:aA},{id:"centered",label:"Centered",category:"Variations",component:uA},{id:"spaced",label:"Spaced",category:"Variations",component:dA},{id:"floated",label:"Floated",category:"Variations",component:hA},{id:"size",label:"Size",category:"Variations",component:bA},{id:"group-size",label:"Size",category:"Groups",component:SA}];return(a,o)=>(y(),x(ot,{title:"Image",description:"An image is a graphic representation of something","component-docs":i}))}},wA=`<template>
  <SuiInput placeholder="Search..." />
</template>`,CA={__name:"InputDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Input",code:wA},{description:l(()=>[n(" A standard input ")]),example:l(()=>[t(r(Ze),{placeholder:"Search..."})]),_:1}))}},AA=`<template>
  <SuiInput focus placeholder="Search..." />
</template>`,xA={__name:"FocusDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Focus",code:AA},{description:l(()=>[n(" An input field can show a user is currently interacting with it ")]),example:l(()=>[t(r(Ze),{focus:"",placeholder:"Search..."})]),_:1}))}},kA=`<template>
  <SuiInput loading icon="user" placeholder="Search..." />
  <SuiInput loading icon="user" iconPosition="left" placeholder="Search..." />
</template>`,BA={__name:"LoadingDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Loading",code:kA},{description:l(()=>[n(" An icon input field can show that it is currently loading data ")]),example:l(()=>[t(r(Ze),{loading:"",icon:"user",placeholder:"Search..."}),t(r(Ze),{loading:"",icon:"user",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},$A=`<template>
  <SuiInput disabled placeholder="Search..." />
</template>`,TA={__name:"DisabledDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Disabled",code:$A},{description:l(()=>[n(" An input field can show that it is disabled ")]),example:l(()=>[t(r(Ze),{disabled:"",placeholder:"Search..."})]),_:1}))}},LA=`<template>
  <SuiInput error placeholder="Search..." />
</template>`,DA={__name:"ErrorDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Error",code:LA},{description:l(()=>[n(" An input field can show the data contains errors ")]),example:l(()=>[t(r(Ze),{error:"",placeholder:"Search..."})]),_:1}))}},IA=`<template>
  <SuiInput icon="search" placeholder="Search..." />
  <SuiInput icon="users" iconPosition="left" placeholder="Search..." />
</template>`,EA={__name:"IconDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Icon",code:IA},{description:l(()=>[n(" An input can be formatted with an icon ")]),example:l(()=>[t(r(Ze),{icon:"search",placeholder:"Search..."}),t(r(Ze),{icon:"users",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},RA=`<template>
  <SuiInput label="http://" placeholder="mysite.com" />
</template>`,PA={__name:"LabeledDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Labeled",code:RA},{description:l(()=>[n(" An input can be formatted with a label ")]),example:l(()=>[t(r(Ze),{label:"http://",placeholder:"mysite.com"})]),_:1}))}},zA=`<template>
  <SuiInput action="Search" />
</template>`,VA={__name:"ActionDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Action",code:zA},{description:l(()=>[n(" An input can be formatted to alert the user to an action they may perform ")]),example:l(()=>[t(r(Ze),{action:"Search"})]),_:1}))}},FA=`<template>
  <SuiInput transparent icon="search" placeholder="Search..." />
</template>`,MA={__name:"TransparentDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Transparent",code:FA},{description:l(()=>[n(" A transparent input has no background ")]),example:l(()=>[t(r(Ze),{transparent:"",icon:"search",placeholder:"Search..."})]),_:1}))}},NA=`<template>
  <SuiSegment inverted>
    <SuiInput inverted placeholder="Search..." />
  </SuiSegment>
</template>`,HA={__name:"InvertedDoc",setup(e){return(i,a)=>{const o=B("SuiSegment");return y(),x(D,{label:"Inverted",code:NA},{description:l(()=>[n(" An input can be formatted to appear on dark backgrounds ")]),example:l(()=>[t(o,{inverted:""},{default:l(()=>[t(r(Ze),{inverted:"",placeholder:"Search..."})]),_:1})]),_:1})}}},OA=`<template>
  <SuiInput fluid icon="search" placeholder="Search..." />
</template>`,qA={__name:"FluidDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Fluid",code:OA},{description:l(()=>[n(" An input can take the size of its container ")]),example:l(()=>[t(r(Ze),{fluid:"",icon:"search",placeholder:"Search..."})]),_:1}))}},GA=`<template>
  <SuiInput icon="search" placeholder="Search mini..." size="mini" />
  <SuiInput icon="search" placeholder="Search small..." size="small" />
  <SuiInput icon="search" placeholder="Search large..." size="large" />
  <SuiInput icon="search" placeholder="Search big..." size="big" />
  <SuiInput icon="search" placeholder="Search huge..." size="huge" />
  <SuiInput icon="search" placeholder="Search massive..." size="massive" />
</template>`,jA={__name:"SizeDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Size",code:GA},{description:l(()=>[n(" An input can vary in size ")]),example:l(()=>[t(r(Ze),{icon:"search",placeholder:"Search mini...",size:"mini"}),t(r(Ze),{icon:"search",placeholder:"Search small...",size:"small"}),t(r(Ze),{icon:"search",placeholder:"Search large...",size:"large"}),t(r(Ze),{icon:"search",placeholder:"Search big...",size:"big"}),t(r(Ze),{icon:"search",placeholder:"Search huge...",size:"huge"}),t(r(Ze),{icon:"search",placeholder:"Search massive...",size:"massive"})]),_:1}))}},UA={__name:"Input",setup(e){const i=[{id:"input",label:"Input",category:"Types",component:CA},{id:"focus",label:"Focus",category:"States",component:xA},{id:"loading",label:"Loading",category:"States",component:BA},{id:"disabled",label:"Disabled",category:"States",component:TA},{id:"error",label:"Error",category:"States",component:DA},{id:"icon",label:"Icon",category:"Variations",component:EA},{id:"labeled",label:"Labeled",category:"Variations",component:PA},{id:"action",label:"Action",category:"Variations",component:VA},{id:"transparent",label:"Transparent",category:"Variations",component:MA},{id:"inverted",label:"Inverted",category:"Variations",component:HA},{id:"fluid",label:"Fluid",category:"Variations",component:qA},{id:"size",label:"Size",category:"Variations",component:jA}];return(a,o)=>(y(),x(ot,{title:"Input",description:"An input is a field used to elicit a response from a user","component-docs":i}))}},YA=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
</template>`,JA={__name:"LabelDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Label",code:YA},{description:l(()=>[n(" A label ")]),example:l(()=>[t(r(O),null,{default:l(()=>[t(r(Y),{name:"mail"}),n(" 23 ")]),_:1})]),_:1}))}},WA="/vue-fomantic-ui/images/avatar/small/joe.jpg",Ed="/vue-fomantic-ui/images/avatar/small/veronika.jpg",da="/vue-fomantic-ui/images/avatar/small/elliot.jpg",KA=k("img",{src:WA},null,-1),XA=k("img",{src:Ed},null,-1),QA=k("img",{src:da},null,-1),ZA=`<template>
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
</template>`,ex={__name:"ImageDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Image",code:ZA},{description:l(()=>[n(" A label can be formatted to emphasize an image ")]),example:l(()=>[t(r(O),{as:"a",image:""},{default:l(()=>[KA,n(" Joe ")]),_:1}),t(r(O),{as:"a",image:"",color:"blue"},{default:l(()=>[XA,n(" Veronika "),t(r(Il),null,{default:l(()=>[n("Friend")]),_:1})]),_:1}),t(r(O),{as:"a",image:""},{default:l(()=>[QA,n(" Elliot "),t(r(Y),{name:"delete"})]),_:1})]),_:1}))}},tx=k("input",{type:"text",placeholder:"First Name"},null,-1),ix=k("input",{type:"text"},null,-1),lx=k("input",{type:"text",placeholder:"Username"},null,-1),ax=k("input",{type:"password"},null,-1),nx=`<template>
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
</template>`,ox={__name:"PointingDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Pointing",code:nx},{description:l(()=>[n(" A label can point to content next to it ")]),example:l(()=>[t(r(Nt),{fluid:""},{default:l(()=>[t(r(it),null,{default:l(()=>[tx,t(r(O),{pointing:""},{default:l(()=>[n("Please enter a value")]),_:1})]),_:1}),t(r(Ve)),t(r(it),null,{default:l(()=>[t(r(O),{pointing:"below"},{default:l(()=>[n("Please enter a value")]),_:1}),ix]),_:1}),t(r(Ve)),t(r(it),{inline:""},{default:l(()=>[lx,t(r(O),{pointing:"left",color:"red",basic:""},{default:l(()=>[n("That name is taken!")]),_:1})]),_:1}),t(r(Ve)),t(r(it),{inline:""},{default:l(()=>[t(r(O),{pointing:"right",color:"red",basic:""},{default:l(()=>[n("Your password must be 6 characters or more")]),_:1}),ax]),_:1})]),_:1})]),_:1}))}},sx=`<template>
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
</template>`,rx={__name:"CornerDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Corner",code:sx},{description:l(()=>[n(" A label can position itself in the corner of an element ")]),example:l(()=>[t(r(ba),{columns:2},{default:l(()=>[t(r(Bt),null,{default:l(()=>[t(r(oe),{label:{as:"a",corner:"left",icon:"heart"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(r(Bt),null,{default:l(()=>[t(r(oe),{label:{as:"a",color:"red",corner:"right",icon:"save"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1})]),_:1}))}},ux=`<template>
  <SuiLabel as="a" tag>New</SuiLabel>
  <SuiLabel as="a" tag color="red">Upcoming</SuiLabel>
  <SuiLabel as="a" tag color="teal">Featured</SuiLabel>
</template>`,cx={__name:"TagDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Tag",code:ux},{description:l(()=>[n(" A label can appear as a tag ")]),example:l(()=>[t(r(O),{as:"a",tag:""},{default:l(()=>[n("New")]),_:1}),t(r(O),{as:"a",tag:"",color:"red"},{default:l(()=>[n("Upcoming")]),_:1}),t(r(O),{as:"a",tag:"",color:"teal"},{default:l(()=>[n("Featured")]),_:1})]),_:1}))}},dx=k("span",null,"Account Details",-1),px=k("span",null,"User Reviews",-1),mx=k("span",null,"Technical Specifications",-1),fx=k("span",null,"User Reviews",-1),gx=`<template>
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
</template>`,hx={__name:"RibbonDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Ribbon",code:gx},{description:l(()=>[n(" A label can appear as a ribbon attaching itself to an element. ")]),example:l(()=>[t(r(ba),{columns:2},{default:l(()=>[t(r(Bt),null,{default:l(()=>[t(r(H),{raised:""},{default:l(()=>[t(r(O),{as:"a",ribbon:"",color:"red"},{default:l(()=>[n("Overview")]),_:1}),dx,t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),t(r(O),{as:"a",ribbon:"",color:"blue"},{default:l(()=>[n("Community")]),_:1}),px,t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(r(Bt),null,{default:l(()=>[t(r(H),{raised:""},{default:l(()=>[t(r(O),{as:"a",ribbon:"right",color:"orange"},{default:l(()=>[n("Specs")]),_:1}),mx,t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),t(r(O),{as:"a",ribbon:"right",color:"teal"},{default:l(()=>[n("Reviews")]),_:1}),fx,t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1}))}},_x=`<template>
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
</template>`,bx={__name:"AttachedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Attached",code:_x},{description:l(()=>[n(" A label can attach to a content segment ")]),example:l(()=>[t(r(ba),{columns:3},{default:l(()=>[t(r(Co),null,{default:l(()=>[t(r(Bt),null,{default:l(()=>[t(r(H),{padded:""},{default:l(()=>[t(r(O),{attached:"top"},{default:l(()=>[n("HTML")]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(r(Bt),null,{default:l(()=>[t(r(H),{padded:""},{default:l(()=>[t(r(O),{attached:"bottom"},{default:l(()=>[n("CSS")]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(r(Bt),null,{default:l(()=>[t(r(H),{padded:""},{default:l(()=>[t(r(O),{attached:"top right"},{default:l(()=>[n("Code")]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1}),t(r(Co),null,{default:l(()=>[t(r(Bt),null,{default:l(()=>[t(r(H),{padded:""},{default:l(()=>[t(r(O),{attached:"top left"},{default:l(()=>[n("View")]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(r(Bt),null,{default:l(()=>[t(r(H),{padded:""},{default:l(()=>[t(r(O),{attached:"bottom left"},{default:l(()=>[n("User View")]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(r(Bt),null,{default:l(()=>[t(r(H),{padded:""},{default:l(()=>[t(r(O),{attached:"bottom right"},{default:l(()=>[n("Admin View")]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},vx=`<template>
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
</template>`,Sx={__name:"HorizontalDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Horizontal",code:vx},{description:l(()=>[n(" A horizontal label is formatted to label content along-side it horizontally ")]),example:l(()=>[t(r(sd),{divided:"",selection:""},{default:l(()=>[t(r(Ol),null,{default:l(()=>[t(r(O),{color:"red",horizontal:""},{default:l(()=>[n("Fruit")]),_:1}),n(" Kumquats ")]),_:1}),t(r(Ol),null,{default:l(()=>[t(r(O),{color:"purple",horizontal:""},{default:l(()=>[n("Candy")]),_:1}),n(" Ice Cream ")]),_:1}),t(r(Ol),null,{default:l(()=>[t(r(O),{color:"red",horizontal:""},{default:l(()=>[n("Fruit")]),_:1}),n(" Orange ")]),_:1}),t(r(Ol),null,{default:l(()=>[t(r(O),{horizontal:""},{default:l(()=>[n("Dog")]),_:1}),n(" Poodle ")]),_:1})]),_:1})]),_:1}))}},yx=`<template>
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
</template>`,wx={__name:"FloatingDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Floating",code:yx},{description:l(()=>[n(" A label can float above or below another element ")]),example:l(()=>[t(r(rd),{compact:""},{default:l(()=>[t(r(Qa),null,{default:l(()=>[t(r(Y),{name:"mail"}),n(" Messages "),t(r(O),{floating:"",color:"red"},{default:l(()=>[n("22")]),_:1})]),_:1}),t(r(Qa),null,{default:l(()=>[t(r(Y),{name:"users"}),n(" Friends "),t(r(O),{floating:"",color:"teal"},{default:l(()=>[n("22")]),_:1})]),_:1})]),_:1})]),_:1}))}},Cx=`<template>
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
</template>`,Ax={__name:"InvertedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Inverted",code:Cx},{description:l(()=>[n(" All Variants of Label can be inverted ")]),example:l(()=>[t(r(H),{inverted:""},{default:l(()=>[t(r(O),{as:"a",inverted:"",primary:""},{default:l(()=>[n("Primary")]),_:1}),t(r(O),{as:"a",inverted:"",secondary:""},{default:l(()=>[n("Secondary")]),_:1}),t(r(O),{as:"a",inverted:"",color:"red"},{default:l(()=>[n("Red")]),_:1}),t(r(O),{as:"a",inverted:"",color:"orange"},{default:l(()=>[n("Orange")]),_:1}),t(r(O),{as:"a",inverted:"",color:"yellow"},{default:l(()=>[n("Yellow")]),_:1}),t(r(O),{as:"a",basic:"",inverted:"",color:"olive"},{default:l(()=>[n("Olive")]),_:1}),t(r(O),{as:"a",basic:"",inverted:"",color:"green"},{default:l(()=>[n("Green")]),_:1}),t(r(O),{as:"a",basic:"",inverted:"",color:"teal"},{default:l(()=>[n("Teal")]),_:1}),t(r(O),{as:"a",basic:"",inverted:"",color:"blue"},{default:l(()=>[n("Blue")]),_:1}),t(r(O),{as:"a",basic:"",inverted:"",color:"violet"},{default:l(()=>[n("Violet")]),_:1}),t(r(O),{as:"a",tag:"",inverted:"",color:"purple"},{default:l(()=>[n("Purple")]),_:1}),t(r(O),{as:"a",tag:"",inverted:"",color:"pink"},{default:l(()=>[n("Pink")]),_:1}),t(r(O),{as:"a",tag:"",inverted:"",color:"brown"},{default:l(()=>[n("Brown")]),_:1}),t(r(O),{as:"a",tag:"",inverted:"",color:"grey"},{default:l(()=>[n("Grey")]),_:1}),t(r(O),{as:"a",tag:"",inverted:"",color:"black"},{default:l(()=>[n("Black")]),_:1})]),_:1})]),_:1}))}},xx=`<template>
  <SuiLabel>
    Dogs
    <SuiLabelDetail>214</SuiLabelDetail>
  </SuiLabel>
</template>`,kx={__name:"DetailDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Detail",code:xx},{description:l(()=>[n(" A label can contain a detail ")]),example:l(()=>[t(r(O),null,{default:l(()=>[n(" Dogs "),t(r(Il),null,{default:l(()=>[n("214")]),_:1})]),_:1})]),_:1}))}},Bx=`<template>
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
</template>`,$x={__name:"IconDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Icon",code:Bx},{description:l(()=>[n(" A label can include an icon ")]),example:l(()=>[t(r(O),null,{default:l(()=>[t(r(Y),{name:"mail"}),n(" Mail ")]),_:1}),t(r(O),null,{default:l(()=>[t(r(Y),{name:"checkmark"}),n(" Test Passed ")]),_:1}),t(r(O),{icon:"dog"}),t(r(O),{icon:"cat"})]),_:1}))}},Tx=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
    <SuiLabelContent>View Mail</SuiLabelContent>
  </SuiLabel>
</template>`,Lx={__name:"LinkDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Link",code:Tx},{description:l(()=>[n(" A label can be a link or contain an item that links ")]),example:l(()=>[t(r(O),{as:"a"},{default:l(()=>[t(r(Y),{name:"mail"}),n(" 23 ")]),_:1}),t(r(O),null,{default:l(()=>[t(r(Y),{name:"mail"}),n(" 23 "),t(r(Il),null,{default:l(()=>[n("View Mail")]),_:1})]),_:1})]),_:1}))}},Dx=`<template>
  <SuiLabel disabled>Disabled Label</SuiLabel>
</template>`,Ix={__name:"DisabledDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Disabled",code:Dx},{description:l(()=>[n(" A label can show it is currently unable to be interacted with ")]),example:l(()=>[t(r(O),{disabled:""},{default:l(()=>[n("Disabled Label")]),_:1})]),_:1}))}},Ex=`<template>
  <SuiLabel fluid>Fits container</SuiLabel>
</template>`,Rx={__name:"FluidDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Fluid",code:Ex},{description:l(()=>[n(" A label can take the width of its container ")]),example:l(()=>[t(r(O),{fluid:""},{default:l(()=>[n("Fits container")]),_:1})]),_:1}))}},Px=`<template>
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
</template>`,zx={__name:"CircularDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Circular",code:Px},{description:l(()=>[n(" A label can be circular ")]),example:l(()=>[t(r(O),{circular:"",color:"red"},{default:l(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"orange"},{default:l(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"yellow"},{default:l(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"olive"},{default:l(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"green"},{default:l(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"teal"},{default:l(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"blue"},{default:l(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"violet"},{default:l(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"purple"},{default:l(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"pink"},{default:l(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"brown"},{default:l(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"grey"},{default:l(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"black"},{default:l(()=>[n("2")]),_:1})]),_:1}))}},Vx=k("img",{src:da},null,-1),Fx=`<template>
  <SuiLabel as="a" basic>Basic</SuiLabel>
  <SuiLabel as="a" basic pointing>Pointing</SuiLabel>
  <SuiLabel as="a" basic image>
    <img src="/images/avatar/small/elliot.jpg" />
    Elliot
  </SuiLabel>
  <SuiLabel as="a" basic pointing color="red">Red Pointing</SuiLabel>
  <SuiLabel as="a" basic color="blue">Blue</SuiLabel>
</template>`,Mx={__name:"BasicDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Basic",code:Fx},{description:l(()=>[n(" A label can reduce its complexity ")]),example:l(()=>[t(r(O),{as:"a",basic:""},{default:l(()=>[n("Basic")]),_:1}),t(r(O),{as:"a",basic:"",pointing:""},{default:l(()=>[n("Pointing")]),_:1}),t(r(O),{as:"a",basic:"",image:""},{default:l(()=>[Vx,n(" Elliot ")]),_:1}),t(r(O),{as:"a",basic:"",pointing:"",color:"red"},{default:l(()=>[n("Red Pointing")]),_:1}),t(r(O),{as:"a",basic:"",color:"blue"},{default:l(()=>[n("Blue")]),_:1})]),_:1}))}},Nx=`<template>
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
</template>`,Hx={__name:"ColoredDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Colored",code:Nx},{description:l(()=>[n(" A label can have different colors ")]),example:l(()=>[t(r(O),{as:"a",primary:""},{default:l(()=>[n("Primary")]),_:1}),t(r(O),{as:"a",secondary:""},{default:l(()=>[n("Secondary")]),_:1}),t(r(O),{as:"a",color:"red"},{default:l(()=>[n("Red")]),_:1}),t(r(O),{as:"a",color:"orange"},{default:l(()=>[n("Orange")]),_:1}),t(r(O),{as:"a",color:"yellow"},{default:l(()=>[n("Yellow")]),_:1}),t(r(O),{as:"a",color:"olive"},{default:l(()=>[n("Olive")]),_:1}),t(r(O),{as:"a",color:"green"},{default:l(()=>[n("Green")]),_:1}),t(r(O),{as:"a",color:"teal"},{default:l(()=>[n("Teal")]),_:1}),t(r(O),{as:"a",color:"blue"},{default:l(()=>[n("Blue")]),_:1}),t(r(O),{as:"a",color:"violet"},{default:l(()=>[n("Violet")]),_:1}),t(r(O),{as:"a",color:"purple"},{default:l(()=>[n("Purple")]),_:1}),t(r(O),{as:"a",color:"pink"},{default:l(()=>[n("Pink")]),_:1}),t(r(O),{as:"a",color:"brown"},{default:l(()=>[n("Brown")]),_:1}),t(r(O),{as:"a",color:"grey"},{default:l(()=>[n("Grey")]),_:1}),t(r(O),{as:"a",color:"black"},{default:l(()=>[n("Black")]),_:1})]),_:1}))}},Ox=`<template>
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
</template>`,qx={__name:"BasicTagDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Basic Tag",code:Ox},{description:l(()=>[]),example:l(()=>[t(r(O),{as:"a",basic:"",tag:"",primary:""},{default:l(()=>[n("Primary")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",secondary:""},{default:l(()=>[n("Secondary")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"red"},{default:l(()=>[n("Red")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"orange"},{default:l(()=>[n("Orange")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"yellow"},{default:l(()=>[n("Yellow")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"olive"},{default:l(()=>[n("Olive")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"green"},{default:l(()=>[n("Green")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"teal"},{default:l(()=>[n("Teal")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"blue"},{default:l(()=>[n("Blue")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"violet"},{default:l(()=>[n("Violet")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"purple"},{default:l(()=>[n("Purple")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"pink"},{default:l(()=>[n("Pink")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"brown"},{default:l(()=>[n("Brown")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"grey"},{default:l(()=>[n("Grey")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"black"},{default:l(()=>[n("Black")]),_:1})]),_:1}))}},Gx=`<template>
  <SuiLabel size="mini">Mini</SuiLabel>
  <SuiLabel size="tiny">Tiny</SuiLabel>
  <SuiLabel size="small">Small</SuiLabel>
  <SuiLabel>Medium</SuiLabel>
  <SuiLabel size="large">Large</SuiLabel>
  <SuiLabel size="big">Big</SuiLabel>
  <SuiLabel size="huge">Huge</SuiLabel>
  <SuiLabel size="massive">Massive</SuiLabel>
</template>`,jx={__name:"SizeDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Size",code:Gx},{description:l(()=>[n(" A label can be small or large ")]),example:l(()=>[t(r(O),{size:"mini"},{default:l(()=>[n("Mini")]),_:1}),t(r(O),{size:"tiny"},{default:l(()=>[n("Tiny")]),_:1}),t(r(O),{size:"small"},{default:l(()=>[n("Small")]),_:1}),t(r(O),null,{default:l(()=>[n("Medium")]),_:1}),t(r(O),{size:"large"},{default:l(()=>[n("Large")]),_:1}),t(r(O),{size:"big"},{default:l(()=>[n("Big")]),_:1}),t(r(O),{size:"huge"},{default:l(()=>[n("Huge")]),_:1}),t(r(O),{size:"massive"},{default:l(()=>[n("Massive")]),_:1})]),_:1}))}},Ux=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,Yx={__name:"GroupSizeDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Group Size",code:Ux},{description:l(()=>[n(" Labels can share sizes together ")]),example:l(()=>[t(r(El),{size:"huge"},{default:l(()=>[t(r(O),null,{default:l(()=>[n("Fun")]),_:1}),t(r(O),null,{default:l(()=>[n("Happy")]),_:1}),t(r(O),null,{default:l(()=>[n("Smart")]),_:1}),t(r(O),null,{default:l(()=>[n("Witty")]),_:1})]),_:1})]),_:1}))}},Jx=`<template>
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
</template>`,Wx={__name:"ColoredGroupDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Clored Group",code:Jx},{description:l(()=>[n(" Labels can share colors together ")]),example:l(()=>[t(r(El),{color:"blue"},{default:l(()=>[t(r(O),null,{default:l(()=>[n(" Fun "),t(r(Y),{name:"close"})]),_:1}),t(r(O),null,{default:l(()=>[n(" Happy "),t(r(Il),null,{default:l(()=>[n("Smart")]),_:1})]),_:1}),t(r(O),null,{default:l(()=>[n("Insane")]),_:1}),t(r(O),null,{default:l(()=>[n("Exciting")]),_:1})]),_:1})]),_:1}))}},Kx=`<template>
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
</template>`,Xx={__name:"BasicGroupDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Basic Group",code:Kx},{description:l(()=>[n(" Labels can share their style together ")]),example:l(()=>[t(r(El),{basic:""},{default:l(()=>[t(r(O),null,{default:l(()=>[n(" Fun "),t(r(Y),{name:"close"})]),_:1}),t(r(O),null,{default:l(()=>[n(" Happy "),t(r(Il),null,{default:l(()=>[n("Smart")]),_:1})]),_:1}),t(r(O),null,{default:l(()=>[n("Insane")]),_:1}),t(r(O),null,{default:l(()=>[n("Exciting")]),_:1})]),_:1})]),_:1}))}},Qx=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,Zx={__name:"TagGroupDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Tag Group",code:Qx},{description:l(()=>[n(" Labels can share tag formatting ")]),example:l(()=>[t(r(El),{tag:""},{default:l(()=>[t(r(O),{as:"a"},{default:l(()=>[n("$10.00")]),_:1}),t(r(O),{as:"a"},{default:l(()=>[n("$19.99")]),_:1}),t(r(O),{as:"a"},{default:l(()=>[n("$24.99")]),_:1}),t(r(O),{as:"a"},{default:l(()=>[n("$10.25")]),_:1})]),_:1})]),_:1}))}},ek=`<template>
  <SuiLabelGroup tag>
    <SuiLabel as="a">1</SuiLabel>
    <SuiLabel as="a">3</SuiLabel>
    <SuiLabel as="a">4</SuiLabel>
    <SuiLabel as="a">14</SuiLabel>
    <SuiLabel as="a">16</SuiLabel>
    <SuiLabel as="a">34</SuiLabel>
  </SuiLabelGroup>
</template>`,tk={__name:"CircularGroupDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Circular Group",code:ek},{description:l(()=>[n(" Labels can share shapes ")]),example:l(()=>[t(r(El),{circular:""},{default:l(()=>[t(r(O),{as:"a"},{default:l(()=>[n("1")]),_:1}),t(r(O),{as:"a"},{default:l(()=>[n("3")]),_:1}),t(r(O),{as:"a"},{default:l(()=>[n("4")]),_:1}),t(r(O),{as:"a"},{default:l(()=>[n("14")]),_:1}),t(r(O),{as:"a"},{default:l(()=>[n("16")]),_:1}),t(r(O),{as:"a"},{default:l(()=>[n("34")]),_:1})]),_:1})]),_:1}))}},ik={__name:"Label",setup(e){const i=[{id:"label",label:"Label",category:"Types",component:JA},{id:"image",label:"Image",category:"Types",component:ex},{id:"pointing",label:"Pointing",category:"Types",component:ox},{id:"corner",label:"Corner",category:"Types",component:rx},{id:"tag",label:"Tag",category:"Types",component:cx},{id:"ribbon",label:"Ribbon",category:"Types",component:hx},{id:"attached",label:"Attached",category:"Types",component:bx},{id:"horizontal",label:"Horizontal",category:"Types",component:Sx},{id:"floating",label:"Floating",category:"Types",component:wx},{id:"inverted",label:"Inverted",category:"Types",component:Ax},{id:"detail",label:"Detail",category:"Content",component:kx},{id:"icon",label:"Icon",category:"Content",component:$x},{id:"link",label:"Link",category:"Content",component:Lx},{id:"disabled",label:"Disabled",category:"States",component:Ix},{id:"fluid",label:"Fluid",category:"Variations",component:Rx},{id:"circular",label:"Circular",category:"Variations",component:zx},{id:"basic",label:"Basic",category:"Variations",component:Mx},{id:"colored",label:"Colored",category:"Variations",component:Hx},{id:"basic-tag",label:"Basic Tag",category:"Variations",component:qx},{id:"size",label:"Size",category:"Variations",component:jx},{id:"group-size",label:"Group Size",category:"Groups",component:Yx},{id:"colored-group",label:"Colored Group",category:"Groups",component:Wx},{id:"basic-group",label:"Basic Group",category:"Groups",component:Xx},{id:"tag-group",label:"Tag Group",category:"Groups",component:Zx},{id:"circular-group",label:"Circular Group",category:"Groups",component:tk}];return(a,o)=>(y(),x(ot,{title:"Label",description:"A label displays content classification","component-docs":i}))}},lk=Vh(Jf);function ak(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Ia=lk,Yn=ak(Xc),nk=Ia.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function(i,a){var o=a.slots,s=a.attrs,c=o&&o.default&&o.default()||[],d=i.code||c&&c.length?c[0].children:"",f=i.inline,u=i.language,p=Yn.languages[u],g="language-".concat(u);return function(){return f?Ia.h("code",{class:[g],innerHTML:Yn.highlight(d,p)}):Ia.h("pre",Object.assign({},s,{class:[s.class,g]}),[Ia.h("code",Object.assign({},s,{class:[s.class,g],innerHTML:Yn.highlight(d,p)}))])}}}),ok=nk;const sk=Wc(ok),rk=V({name:"DocExample",components:{Prism:sk},props:{title:String,description:String,code:String},setup(){const e=G(!1);return{active:e,toggle:()=>e.value=!e.value}}}),uk={class:"example"};function ck(e,i,a,o,s,c){const d=B("sui-header-subheader"),f=B("sui-header"),u=B("sui-grid-column"),p=B("sui-icon"),g=B("sui-grid-row"),m=B("prism"),_=B("sui-grid");return y(),ye("div",uk,[t(_,{columns:2},{default:l(()=>[t(g,null,{default:l(()=>[t(u,null,{default:l(()=>[t(f,{as:"h3"},{default:l(()=>[n($e(e.title)+" ",1),t(d,null,{default:l(()=>[n($e(e.description),1)]),_:1})]),_:1})]),_:1}),t(u,{textAlign:"right"},{default:l(()=>[t(p,{name:"code",color:"grey",onClick:e.toggle,link:""},null,8,["onClick"])]),_:1})]),_:1}),t(g,null,{default:l(()=>[t(u,{width:16},{default:l(()=>[qi(e.$slots,"default",{},void 0,!0)]),_:3}),e.active?(y(),x(u,{key:0,width:16},{default:l(()=>[t(m,{language:"markup"},{default:l(()=>[n($e(e.code),1)]),_:1})]),_:1})):ns("",!0)]),_:3})]),_:3})])}const gt=He(rk,[["render",ck],["__scopeId","data-v-fcfb6a67"]]),dk="/vue-fomantic-ui/images/avatar/small/rachel.png",pk="/vue-fomantic-ui/images/avatar/small/lindsay.png",mk="/vue-fomantic-ui/images/avatar/small/matthew.png",fk="/vue-fomantic-ui/images/avatar/small/jenny.jpg",gk="/vue-fomantic-ui/images/avatar/small/tom.jpg",Ea="/vue-fomantic-ui/images/avatar/small/christian.jpg",Rd="/vue-fomantic-ui/images/avatar/small/matt.jpg",Ra="/vue-fomantic-ui/images/avatar/small/helen.jpg",Li="/vue-fomantic-ui/images/avatar/small/daniel.jpg",Lo="/vue-fomantic-ui/images/avatar/small/stevie.jpg",Jn="/vue-fomantic-ui/images/wireframe/square-image.png",hk=V({name:"ListDoc",components:{DocExample:gt},setup(){return{listCode:`<sui-list>
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
</div>`}}}),_k={class:"intro"},bk=k("div",null,"Benefits",-1),vk={class:"list"},Sk=k("a",null,"Languages",-1),yk=k("a",null,[k("b",null,"Arrested Development")],-1),wk=k("a",null,[k("b",null,"Bob's Burgers")],-1),Ck=k("a",null,[k("b",null,"The Godfather Part 2")],-1),Ak=k("a",null,[k("b",null,"Twin Peaks")],-1),xk=k("a",null,[k("b",null,"Arrested Development")],-1),kk=k("a",null,[k("b",null,"Bob's Burgers")],-1),Bk=k("a",null,[k("b",null,"The Godfather Part 2")],-1);function $k(e,i,a,o,s,c){const d=B("sui-header-subheader"),f=B("sui-header"),u=B("sui-divider"),p=B("sui-icon"),g=B("sui-menu-item"),m=B("sui-menu"),_=B("sui-container"),w=B("sui-segment"),S=B("sui-list-item"),A=B("sui-list"),T=B("doc-example"),I=B("sui-list-list"),h=B("sui-list-header"),b=B("sui-list-description"),C=B("sui-list-content"),$=B("sui-image");return y(),ye("div",null,[t(w,{vertical:""},{default:l(()=>[t(_,{class:"main"},{default:l(()=>[k("div",_k,[t(f,{as:"h1"},{default:l(()=>[n("List "),t(d,null,{default:l(()=>[n(" A list is used to group related content ")]),_:1})]),_:1}),t(u,{hidden:""}),t(m,{floated:"right"},{default:l(()=>[t(g,{as:"a",icon:""},{default:l(()=>[t(p,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:l(()=>[t(p,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(_,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(T,{title:"List",description:"A list groups related content",code:e.listCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,null,{default:l(()=>[n("Apples")]),_:1}),t(S,null,{default:l(()=>[n("Pears")]),_:1}),t(S,null,{default:l(()=>[n("Oranges")]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Bulleted",description:"A list can mark items with a bullet",code:e.bulletedCode},{default:l(()=>[t(A,{bulleted:""},{default:l(()=>[t(S,null,{default:l(()=>[n("Gaining Access")]),_:1}),t(S,null,{default:l(()=>[n("Inviting Friends")]),_:1}),t(S,null,{default:l(()=>[bk,k("div",vk,[t(S,{as:"a"},{default:l(()=>[n("Link to somewhere")]),_:1}),t(S,null,{default:l(()=>[n("Rebates")]),_:1}),t(S,null,{default:l(()=>[n("Discounts")]),_:1})])]),_:1}),t(S,null,{default:l(()=>[n("Warranty")]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Ordered",description:"A list can be ordered numerically",code:e.orderedCode},{default:l(()=>[t(A,{ordered:""},{default:l(()=>[t(S,{as:"a"},{default:l(()=>[n("Getting Started")]),_:1}),t(S,{as:"a"},{default:l(()=>[n("Introduction")]),_:1}),t(S,null,{default:l(()=>[Sk,t(I,null,{default:l(()=>[t(S,{as:"a"},{default:l(()=>[n("HTML")]),_:1}),t(S,{as:"a"},{default:l(()=>[n("Javascript")]),_:1}),t(S,{as:"a"},{default:l(()=>[n("CSS")]),_:1})]),_:1})]),_:1}),t(S,{as:"a"},{default:l(()=>[n("Review")]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Link",description:"A list can be specially formatted for navigation links",code:e.linkCode},{default:l(()=>[t(A,{link:""},{default:l(()=>[t(S,{active:""},{default:l(()=>[n("Home")]),_:1}),t(S,{as:"a"},{default:l(()=>[n("About")]),_:1}),t(S,{as:"a"},{default:l(()=>[n("Jobs")]),_:1}),t(S,{as:"a"},{default:l(()=>[n("Team")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Content")]),_:1}),t(T,{title:"Item",description:"A list item can contain a set of items",code:e.itemCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,null,{default:l(()=>[n("1")]),_:1}),t(S,null,{default:l(()=>[n("2")]),_:1}),t(S,null,{default:l(()=>[n("3")]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Icon",description:"A list item can contain an icon",code:e.iconCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,{as:"a"},{default:l(()=>[t(p,{name:"help"}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Floated Icon")]),_:1}),t(b,null,{default:l(()=>[n(" This text will always have a left margin to make sure it sits alongside your icon ")]),_:1})]),_:1})]),_:1}),t(S,{as:"a"},{default:l(()=>[t(p,{name:"right triangle"}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Icon Alignment")]),_:1}),t(b,null,{default:l(()=>[n(" Floated icons are by default top aligned. To have an icon top aligned try this example ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t(p,{name:"help"}),n(" Inline Text ")]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Image",description:"A list can contain an image",code:e.imageContentCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,null,{default:l(()=>[t($,{avatar:"",src:dk}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Rachel")]),_:1}),t(b,null,{default:l(()=>[n(" Last seen watching "),yk,n(" just now. ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:pk}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Lindsay")]),_:1}),t(b,null,{default:l(()=>[n(" Last seen watching "),wk,n(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:mk}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Matthew")]),_:1}),t(b,null,{default:l(()=>[n(" Last seen watching "),Ck,n(" yesterday. ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:fk}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Jenny Hess")]),_:1}),t(b,null,{default:l(()=>[n(" Last seen watching "),Ak,n(" 3 days ago. ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Ed}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Veronika Ossi")]),_:1}),t(b,null,{default:l(()=>[n(" Has not watched anything recently ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Link",description:"A list can contain links",code:e.linkContentCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,{as:"a"},{default:l(()=>[n("What is a FAQ?")]),_:1}),t(S,{as:"a"},{default:l(()=>[n("Who is our user?")]),_:1}),t(S,{as:"a"},{default:l(()=>[n("Where is our office located?")]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"header",description:"A list item can contain a header",code:e.headerContentCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,null,{default:l(()=>[t(h,null,{default:l(()=>[n("New York City")]),_:1}),n(" A lovely city ")]),_:1}),t(S,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Chicago")]),_:1}),n(" Also quite a lovely city ")]),_:1}),t(S,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Los Angeles")]),_:1}),n(" Sometimes can be a lovely city ")]),_:1}),t(S,null,{default:l(()=>[t(h,null,{default:l(()=>[n("San Francisco")]),_:1}),n(" What a lovely city ")]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Description",description:"A list item can contain a description",code:e.descriptionContentCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,null,{default:l(()=>[t(p,{name:"map marker"}),t(C,null,{default:l(()=>[t(h,{as:"a"},{default:l(()=>[n("Krolewskie Jadlo")]),_:1}),t(b,null,{default:l(()=>[n(" An excellent polish restaurant, quick delivery and hearty, filling meals. ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t(p,{name:"map marker"}),t(C,null,{default:l(()=>[t(h,{as:"a"},{default:l(()=>[n("Xian Famous Foods")]),_:1}),t(b,null,{default:l(()=>[n(" A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers. ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t(p,{name:"map marker"}),t(C,null,{default:l(()=>[t(h,{as:"a"},{default:l(()=>[n("Sapporo Haru")]),_:1}),t(b,null,{default:l(()=>[n(" Greenpoint's best choice for quick and delicious sushi. ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t(p,{name:"map marker"}),t(C,null,{default:l(()=>[t(h,{as:"a"},{default:l(()=>[n("Enid's")]),_:1}),t(b,null,{default:l(()=>[n(" At night a bar, during the day a delicious brunch spot. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Variations")]),_:1}),t(T,{title:"Horizontal",description:"A list can be formatted to have items appear horizontally",code:e.horizontalVarCode},{default:l(()=>[t(A,{horizontal:""},{default:l(()=>[t(S,null,{default:l(()=>[t($,{avatar:"",src:gk}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Tom")]),_:1}),n(" Top Contributor ")]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Ea}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Christian Rocha")]),_:1}),n(" Admin ")]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Rd}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Matt")]),_:1}),n(" Top Rated User ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Inverted",description:"A list can be inverted to appear on a dark background",code:e.invertedVarCode},{default:l(()=>[t(w,{inverted:""},{default:l(()=>[t(A,{inverted:"",relaxed:"",divided:""},{default:l(()=>[t(S,null,{default:l(()=>[t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Snickerdoodle")]),_:1}),n(" An excellent companion ")]),_:1})]),_:1}),t(S,null,{default:l(()=>[t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Poodle")]),_:1}),n(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(S,null,{default:l(()=>[t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Paulo")]),_:1}),n(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Selection",description:"A selection list formats list items as possible choices",code:e.selectionVarCode},{default:l(()=>[t(A,{selection:"",verticalAlign:"middle"},{default:l(()=>[t(S,null,{default:l(()=>[t($,{avatar:"",src:Ra}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Ea}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Li}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Animated",description:"A list can animate to set the current item apart from the list",code:e.animatedVarCode},{default:l(()=>[t(A,{animated:"",verticalAlign:"middle"},{default:l(()=>[t(S,null,{default:l(()=>[t($,{avatar:"",src:Ra}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Ea}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Li}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Relaxed",description:"A list can relax its padding to provide more negative space",code:e.relaxedVarCode},{default:l(()=>[t(A,{relaxed:""},{default:l(()=>[t(S,null,{default:l(()=>[t($,{avatar:"",src:Li}),t(C,null,{default:l(()=>[t(h,{as:"a"},{default:l(()=>[n("Daniel Louise")]),_:1}),t(b,null,{default:l(()=>[n(" Last seen watching "),xk,n(" just now. ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Lo}),t(C,null,{default:l(()=>[t(h,{as:"a"},{default:l(()=>[n("Stevie Feliciano")]),_:1}),t(b,null,{default:l(()=>[n(" Last seen watching "),kk,n(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:da}),t(C,null,{default:l(()=>[t(h,{as:"a"},{default:l(()=>[n("Elliot Fu")]),_:1}),t(b,null,{default:l(()=>[n(" Last seen watching "),Bk,n(" yesterday. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Divided",description:"A list can show divisions between content",code:e.dividedVarCode},{default:l(()=>[t(A,{divided:"",verticalAlign:"middle"},{default:l(()=>[t(S,null,{default:l(()=>[t($,{avatar:"",src:Li}),t(C,null,{default:l(()=>[t(h,{as:"a"},{default:l(()=>[n("Daniel Louise")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Lo}),t(C,null,{default:l(()=>[t(h,{as:"a"},{default:l(()=>[n("Stevie Feliciano")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:da}),t(C,null,{default:l(()=>[t(h,{as:"a"},{default:l(()=>[n("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Celled",description:"A list can divide its items into cells",code:e.celledVarCode},{default:l(()=>[t(A,{celled:""},{default:l(()=>[t(S,null,{default:l(()=>[t($,{avatar:"",src:Ra}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Snickerdoodle")]),_:1}),n(" An excellent companion ")]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Li}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Poodle")]),_:1}),n(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Li}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Paulo")]),_:1}),n(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Size",description:"A list can vary in size",code:e.sizeCode},{default:l(()=>[t(A,{horizontal:"",divided:"",size:"mini"},{default:l(()=>[t(S,null,{default:l(()=>[t($,{avatar:"",src:Ra}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Ea}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Li}),t(C,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Content Variations")]),_:1}),t(T,{title:"Vertical Aligned",description:"An element inside a list can be vertically aligned",code:e.verticalAlignedCode},{default:l(()=>[t(A,{horizontal:""},{default:l(()=>[t(S,null,{default:l(()=>[t($,{avatar:"",src:Jn}),t(C,{verticalAlign:"top"},{default:l(()=>[n(" Top Aligned ")]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Jn}),t(C,{verticalAlign:"middle"},{default:l(()=>[n(" Middle ")]),_:1})]),_:1}),t(S,null,{default:l(()=>[t($,{avatar:"",src:Jn}),t(C,{verticalAlign:"bottom"},{default:l(()=>[n(" Bottom ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Floated",description:"An list, or an element inside a list can be floated left or right",code:e.floatedCode},{default:l(()=>[k("div",null,[t(A,{floated:"right",horizontal:""},{default:l(()=>[t(S,{disabled:""},{default:l(()=>[n("© GitHub, Inc.")]),_:1}),t(S,{as:"a"},{default:l(()=>[n("Terms")]),_:1}),t(S,{as:"a"},{default:l(()=>[n("Privacy")]),_:1}),t(S,{as:"a"},{default:l(()=>[n("Contact")]),_:1})]),_:1}),t(A,{horizontal:""},{default:l(()=>[t(S,{as:"a"},{default:l(()=>[n("About Us")]),_:1}),t(S,{as:"a"},{default:l(()=>[n("Jobs")]),_:1})]),_:1})])]),_:1},8,["code"])]),_:1})])}const Tk=He(hk,[["render",$k]]),Lk=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader />
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Dk={__name:"LoaderDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Loader",code:Lk},{description:l(()=>[n(" A loader ")]),example:l(()=>[t(r(H),null,{default:l(()=>[t(r(Ut),{active:""},{default:l(()=>[t(r(ze))]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Ik=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text>Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Ek={__name:"TextLoaderDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Text Loader",code:Ik},{description:l(()=>[n(" A loader can contain text ")]),example:l(()=>[t(r(H),null,{default:l(()=>[t(r(Ut),{active:""},{default:l(()=>[t(r(ze),{text:""},{default:l(()=>[n("Loading")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Rk=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader Indeterminate text>Preparing Files</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Pk={__name:"IndeterminateDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Indeterminate",code:Rk},{description:l(()=>[n(" A loader can show it's unsure of how long a task will take ")]),example:l(()=>[t(r(H),null,{default:l(()=>[t(r(Ut),{active:""},{default:l(()=>[t(r(ze),{Indeterminate:"",text:""},{default:l(()=>[n("Preparing Files")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},zk=`<template>
  <SuiSegment>
    <SuiLoader active />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Vk={__name:"ActiveDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Active",code:zk},{description:l(()=>[n(" A loader can be active or visible ")]),example:l(()=>[t(r(H),null,{default:l(()=>[t(r(ze),{active:""}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Fk=`<template>
  <SuiSegment>
    <SuiLoader disabled />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Mk={__name:"DisabledDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Disabled",code:Fk},{description:l(()=>[n(" A loader can be disabled or hidden ")]),example:l(()=>[t(r(H),null,{default:l(()=>[t(r(ze),{disabled:""}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Nk=`<template>
  <SuiLoader active inline />
</template>`,Hk={__name:"InlineDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Inline",code:Nk},{description:l(()=>[n(" Loaders can appear inline with content ")]),example:l(()=>[t(r(ze),{active:"",inline:""})]),_:1}))}},Ok=`<template>
  <SuiLoader active inline />
</template>`,qk={__name:"InlineCenterDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Inline Center",code:Ok},{description:l(()=>[n(" Loaders can appear inline centered with content ")]),example:l(()=>[t(r(ze),{active:"",inline:"centered"})]),_:1}))}},Gk=`<template>
  <SuiLoader slow active inline />
  <SuiLoader active inline />
  <SuiLoader fast active inline />
</template>`,jk={__name:"SpeedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Speed",code:Gk},{description:l(()=>[n(" Loaders can appear slow, normal or fast ")]),example:l(()=>[t(r(ze),{slow:"",active:"",inline:""}),t(r(ze),{active:"",inline:""}),t(r(ze),{fast:"",active:"",inline:""})]),_:1}))}},Uk=`<template>
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
</template>`,Yk={__name:"ColorsDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Colors",code:Uk},{description:l(()=>[n(" Loaders can be different colors ")]),example:l(()=>[t(r(ze),{active:"",inline:"",primary:""}),t(r(ze),{active:"",inline:"",secondary:""}),t(r(ze),{active:"",inline:"",color:"red"}),t(r(ze),{active:"",inline:"",color:"orange"}),t(r(ze),{active:"",inline:"",color:"yellow"}),t(r(ze),{active:"",inline:"",color:"olive"}),t(r(ze),{active:"",inline:"",color:"green"}),t(r(ze),{active:"",inline:"",color:"teal"}),t(r(ze),{active:"",inline:"",color:"blue"}),t(r(ze),{active:"",inline:"",color:"violet"}),t(r(ze),{active:"",inline:"",color:"purple"}),t(r(ze),{active:"",inline:"",color:"pink"}),t(r(ze),{active:"",inline:"",color:"brown"}),t(r(ze),{active:"",inline:"",color:"grey"}),t(r(ze),{active:"",inline:"",color:"black"})]),_:1}))}},Jk=`<template>
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
</template>`,Wk={__name:"SizeDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Size",code:Jk},{description:l(()=>[n(" Loaders can have different sizes ")]),example:l(()=>[t(r(H),null,{default:l(()=>[t(r(Ut),{active:""},{default:l(()=>[t(r(ze),{text:"",size:"mini"},{default:l(()=>[n("Loading")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(r(H),null,{default:l(()=>[t(r(Ut),{active:""},{default:l(()=>[t(r(ze),{text:"",size:"tiny"},{default:l(()=>[n("Loading")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(r(H),null,{default:l(()=>[t(r(Ut),{active:""},{default:l(()=>[t(r(ze),{text:"",size:"small"},{default:l(()=>[n("Loading")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(r(H),null,{default:l(()=>[t(r(Ut),{active:""},{default:l(()=>[t(r(ze),{text:"",size:"large"},{default:l(()=>[n("Loading")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(r(H),null,{default:l(()=>[t(r(Ut),{active:""},{default:l(()=>[t(r(ze),{text:"",size:"big"},{default:l(()=>[n("Loading")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(r(H),null,{default:l(()=>[t(r(Ut),{active:""},{default:l(()=>[t(r(ze),{text:"",size:"huge"},{default:l(()=>[n("Loading")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Kk=`<template>
  <SuiSegment inverted>
    <SuiLoader active inverted />

    <SuiImage src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Xk={__name:"InvertedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Inverted",code:Kk},{description:l(()=>[n(" Loaders can have their colors inverted. ")]),example:l(()=>[t(r(H),{inverted:""},{default:l(()=>[t(r(ze),{active:"",inverted:""}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Qk={__name:"Loader",setup(e){const i=[{id:"loader",label:"Loader",category:"Types",component:Dk},{id:"text-loader",label:"Text Loader",category:"Types",component:Ek},{id:"indeterminate",label:"Indeterminate",category:"States",component:Pk},{id:"active",label:"Active",category:"States",component:Vk},{id:"disabled",label:"Disabled",category:"States",component:Mk},{id:"inline",label:"Inline",category:"Variations",component:Hk},{id:"inline-center",label:"Inline Center",category:"Variations",component:qk},{id:"speed",label:"Speed",category:"Variations",component:jk},{id:"colors",label:"Colors",category:"Variations",component:Yk},{id:"size",label:"Size",category:"Variations",component:Wk},{id:"inverted",label:"Inverted",category:"Variations",component:Xk}];return(a,o)=>(y(),x(ot,{title:"Loader",description:"A loader alerts a user to wait for an activity to complete","component-docs":i}))}},ll="/vue-fomantic-ui/images/wireframe/short-paragraph.png",Zk=V({name:"RailDoc",components:{DocExample:gt},setup(){return{railCode:`<sui-grid centered :columns="3">
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
</sui-grid>`}}}),eB={class:"intro"};function tB(e,i,a,o,s,c){const d=B("sui-header-subheader"),f=B("sui-header"),u=B("sui-divider"),p=B("sui-icon"),g=B("sui-menu-item"),m=B("sui-menu"),_=B("sui-container"),w=B("sui-segment"),S=B("sui-image"),A=B("sui-rail"),T=B("sui-grid-column"),I=B("sui-grid"),h=B("doc-example");return y(),ye("div",null,[t(w,{vertical:""},{default:l(()=>[t(_,{class:"main"},{default:l(()=>[k("div",eB,[t(f,{as:"h1"},{default:l(()=>[n("Rail "),t(d,null,{default:l(()=>[n(" A rail is used to show accompanying content outside the boundaries of the main view of a site ")]),_:1})]),_:1}),t(u,{hidden:""}),t(m,{floated:"right"},{default:l(()=>[t(g,{as:"a",icon:""},{default:l(()=>[t(p,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:l(()=>[t(p,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(_,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(h,{title:"Rail",description:"A rail can be presented on the left or right side of a container",code:e.railCode},{default:l(()=>[t(I,{centered:"",columns:3},{default:l(()=>[t(T,null,{default:l(()=>[t(w,null,{default:l(()=>[t(S,{src:ll}),t(A,{position:"left"},{default:l(()=>[t(w,null,{default:l(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(A,{position:"right"},{default:l(()=>[t(w,null,{default:l(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Internal",description:"A rail can attach itself to the inside of a container",code:e.internalCode},{default:l(()=>[t(w,{textAlign:"center"},{default:l(()=>[t(S,{src:ll}),t(A,{internal:"",position:"left"},{default:l(()=>[t(w,null,{default:l(()=>[n("Left Rail Content")]),_:1})]),_:1}),t(A,{internal:"",position:"right"},{default:l(()=>[t(w,null,{default:l(()=>[n("Right Rail Content")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Dividing",description:"A rail can create a division between itself and a container",code:e.dividingCode},{default:l(()=>[t(I,{centered:"",columns:3},{default:l(()=>[t(T,null,{default:l(()=>[t(w,null,{default:l(()=>[t(S,{src:ll}),t(A,{dividing:"",position:"left"},{default:l(()=>[t(w,null,{default:l(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(A,{dividing:"",position:"right"},{default:l(()=>[t(w,null,{default:l(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Variations")]),_:1}),t(h,{title:"Attached",description:"A rail can appear attached to the main viewport",code:e.attachedCode},{default:l(()=>[t(I,{centered:"",columns:3},{default:l(()=>[t(T,null,{default:l(()=>[t(w,null,{default:l(()=>[t(S,{src:ll}),t(A,{attached:"",position:"left"},{default:l(()=>[t(w,null,{default:l(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(A,{attached:"",position:"right"},{default:l(()=>[t(w,null,{default:l(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Close",description:"A rail can appear closer to the main viewport",code:e.closeCode},{default:l(()=>[t(I,{centered:"",columns:3},{default:l(()=>[t(T,null,{default:l(()=>[t(w,null,{default:l(()=>[t(S,{src:ll}),t(A,{close:"",position:"left"},{default:l(()=>[t(w,null,{default:l(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(A,{close:"",position:"right"},{default:l(()=>[t(w,null,{default:l(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Size",description:"A rail can have different sizes",code:e.sizeCode},{default:l(()=>[t(I,{centered:"",columns:3},{default:l(()=>[t(T,null,{default:l(()=>[t(w,null,{default:l(()=>[t(S,{src:ll}),t(A,{size:"small",position:"left"},{default:l(()=>[n(" Left Small Rail ")]),_:1}),t(A,{size:"large",position:"right"},{default:l(()=>[n(" Right Large Rail ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const iB=He(Zk,[["render",tB]]),lB=`<template>
  <SuiReveal animated="fade">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/ade.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,aB={__name:"FadeDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Fade",code:lB},{description:l(()=>[n(" An element can disappear to reveal content below ")]),example:l(()=>[t(r(el),{animated:"fade"},{default:l(()=>[t(r(Et),{visible:""},{default:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(r(Et),{hidden:""},{default:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/ade.jpg"})]),_:1})]),_:1})]),_:1}))}},nB=`<template>
  <SuiReveal animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/chris.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,oB={__name:"MoveDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Move",code:nB},{description:l(()=>[n(" An element can move in a direction to reveal content ")]),example:l(()=>[t(r(el),{animated:"move"},{default:l(()=>[t(r(Et),{visible:""},{default:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(r(Et),{hidden:""},{default:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/chris.jpg"})]),_:1})]),_:1})]),_:1}))}},sB=`<template>
  <SuiReveal animated="rotate">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/stevie.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,rB={__name:"RotateDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Rotate",code:sB},{description:l(()=>[n(" An element can rotate to reveal content below ")]),example:l(()=>[t(r(el),{animated:"rotate"},{default:l(()=>[t(r(Et),{visible:""},{default:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(r(Et),{hidden:""},{default:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/stevie.jpg"})]),_:1})]),_:1})]),_:1}))}},uB=`<template>
  <SuiReveal active animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/nan.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,cB={__name:"ActiveDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Active",code:uB},{description:l(()=>[n(" An active reveal displays its hidden content ")]),example:l(()=>[t(r(el),{active:"",animated:"move"},{default:l(()=>[t(r(Et),{visible:""},{default:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(r(Et),{hidden:""},{default:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/nan.jpg"})]),_:1})]),_:1})]),_:1}))}},dB=`<template>
  <SuiReveal disabled animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/nan.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,pB={__name:"DisabledDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Disabled",code:dB},{description:l(()=>[n(" A disabled reveal will not animate when hovered ")]),example:l(()=>[t(r(el),{disabled:"",animated:"move"},{default:l(()=>[t(r(Et),{visible:""},{default:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(r(Et),{hidden:""},{default:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/nan.jpg"})]),_:1})]),_:1})]),_:1}))}},mB=`<template>
  <SuiReveal instant animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/chris.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,fB={__name:"InstantDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Instant",code:mB},{description:l(()=>[n(" An element can show its content without delay ")]),example:l(()=>[t(r(el),{instant:"",animated:"move"},{default:l(()=>[t(r(Et),{visible:""},{default:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(r(Et),{hidden:""},{default:l(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/chris.jpg"})]),_:1})]),_:1})]),_:1}))}},gB={__name:"Reveal",setup(e){const i=[{id:"fade",label:"Fade",category:"Types",component:aB},{id:"move",label:"Move",category:"Types",component:oB},{id:"rotate",label:"Rotate",category:"Types",component:rB},{id:"active",label:"Active",category:"States",component:cB},{id:"disabled",label:"Disabled",category:"States",component:pB},{id:"instant",label:"Instant",category:"Variations",component:fB}];return(a,o)=>(y(),x(ot,{title:"Reveal",description:"A reveal displays additional content in place of previous content when activated","component-docs":i}))}},hB=k("p",null,"Pellentesque habitant morbi tristique senectus.",-1),_B=`<template>
  <SuiSegment>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
</template>`,bB={__name:"SegmentDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Segment",code:_B},{description:l(()=>[n(" A segment of content ")]),example:l(()=>[t(r(H),null,{default:l(()=>[hB]),_:1})]),_:1}))}},vB=`<template>
  <SuiSegment placeholder>
    <SuiHeader icon>
      <SuiIcon name="pdf file outline" />
      No documents are listed for this customer.
    </SuiHeader>
    <SuiButton primary>Add Document</SuiButton>
  </SuiSegment>
</template>`,SB={__name:"PlaceholderSegmentDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Placeholder Segment",code:vB},{description:l(()=>[n(" A segment can be used to reserve space for conditionally displayed content. ")]),example:l(()=>[t(r(H),{placeholder:""},{default:l(()=>[t(r(me),{icon:""},{default:l(()=>[t(r(Y),{name:"pdf file outline"}),n(" No documents are listed for this customer. ")]),_:1}),t(r(P),{primary:""},{default:l(()=>[n("Add Document")]),_:1})]),_:1})]),_:1}))}},yB=k("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),wB=`<template>
  <SuiSegment raised>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,CB={__name:"RaisedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Raised",code:wB},{description:l(()=>[n(" A segment may be formatted to raise above the page. ")]),example:l(()=>[t(r(H),{raised:""},{default:l(()=>[yB]),_:1})]),_:1}))}},AB=k("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),xB=k("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),kB=`<template>
  <SuiSegment stacked>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
  <SuiSegment stacked="tall">
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,BB={__name:"StackedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Stacked",code:kB},{description:l(()=>[n(" A segment can be formatted to show it contains multiple pages ")]),example:l(()=>[t(r(H),{stacked:""},{default:l(()=>[AB]),_:1}),t(r(H),{stacked:"tall"},{default:l(()=>[xB]),_:1})]),_:1}))}},$B=k("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),TB=k("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),LB=k("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),DB=`<template>
  <SuiHeader as="h4">Header</SuiHeader>
  <SuiSegment pailed>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
  </SuiSegment>
</template>`,IB={__name:"PiledDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Piled",code:DB},{description:l(()=>[n(" A segment can be formatted to look like a pile of pages ")]),example:l(()=>[t(r(me),{as:"h4"},{default:l(()=>[n("Header")]),_:1}),t(r(H),{piled:""},{default:l(()=>[$B,TB,LB]),_:1})]),_:1}))}},EB=k("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his.",-1),RB=k("p",null,"Pellentesque habitant morbi tristique senectus.",-1),PB=k("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.",-1),zB=`<template>
  <SuiSegment vertical>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his.</p>
  </SuiSegment>
  <SuiSegment vertical>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
  <SuiSegment vertical>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.</p>
  </SuiSegment>
</template>`,VB={__name:"VerticalSegmentDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Vertical Segment",code:zB},{description:l(()=>[n(" A vertical segment formats content to be aligned as part of a vertical group ")]),example:l(()=>[t(r(H),{vertical:""},{default:l(()=>[EB]),_:1}),t(r(H),{vertical:""},{default:l(()=>[RB]),_:1}),t(r(H),{vertical:""},{default:l(()=>[PB]),_:1})]),_:1}))}},FB=k("p",null,"Top",-1),MB=k("p",null,"Middle",-1),NB=k("p",null,"Bottom",-1),HB=k("p",null,"Top",-1),OB=k("p",null,"Middle",-1),qB=k("p",null,"Bottom",-1),GB=k("p",null,"Top",-1),jB=k("p",null,"Middle",-1),UB=k("p",null,"Bottom",-1),YB=`<template>
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
</template>`,JB={__name:"SegmentsDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Segments",code:YB},{description:l(()=>[n(" A group of segments can be formatted to appear together ")]),example:l(()=>[t(r(yt),null,{default:l(()=>[t(r(H),null,{default:l(()=>[FB]),_:1}),t(r(H),null,{default:l(()=>[MB]),_:1}),t(r(H),null,{default:l(()=>[NB]),_:1})]),_:1}),t(r(yt),{basic:""},{default:l(()=>[t(r(H),null,{default:l(()=>[HB]),_:1}),t(r(H),null,{default:l(()=>[OB]),_:1}),t(r(H),null,{default:l(()=>[qB]),_:1})]),_:1}),t(r(yt),null,{default:l(()=>[t(r(H),null,{default:l(()=>[GB]),_:1}),t(r(H),{color:"red"},{default:l(()=>[jB]),_:1}),t(r(H),{secondary:""},{default:l(()=>[UB]),_:1})]),_:1})]),_:1}))}},WB=k("p",null,"Top",-1),KB=k("p",null,"Nested Top",-1),XB=k("p",null,"Nested Middle",-1),QB=k("p",null,"Nested Bottom",-1),ZB=k("p",null,"Middle",-1),e$=k("p",null,"Top",-1),t$=k("p",null,"Middle",-1),i$=k("p",null,"Bottom",-1),l$=k("p",null,"Bottom",-1),a$=`<template>
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
</template>`,n$={__name:"NestedSegmentsDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Nested Segments",code:a$},{description:l(()=>[n(" A group of segments can be nested in another group of segments ")]),example:l(()=>[t(r(yt),null,{default:l(()=>[t(r(H),null,{default:l(()=>[WB]),_:1}),t(r(yt),null,{default:l(()=>[t(r(H),null,{default:l(()=>[KB]),_:1}),t(r(H),null,{default:l(()=>[XB]),_:1}),t(r(H),null,{default:l(()=>[QB]),_:1})]),_:1}),t(r(H),null,{default:l(()=>[ZB]),_:1}),t(r(yt),{horizontal:""},{default:l(()=>[t(r(H),null,{default:l(()=>[e$]),_:1}),t(r(H),null,{default:l(()=>[t$]),_:1}),t(r(H),null,{default:l(()=>[i$]),_:1})]),_:1}),t(r(H),null,{default:l(()=>[l$]),_:1})]),_:1})]),_:1}))}},o$=k("p",null,"Left",-1),s$=k("p",null,"Middle",-1),r$=k("p",null,"Right",-1),u$=`<template>
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
</template>`,c$={__name:"HorizontalSegmentsDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Horizontal Segments",code:u$},{description:l(()=>[n(" A segment group can appear horizontally ")]),example:l(()=>[t(r(yt),{horizontal:""},{default:l(()=>[t(r(H),null,{default:l(()=>[o$]),_:1}),t(r(H),null,{default:l(()=>[s$]),_:1}),t(r(H),null,{default:l(()=>[r$]),_:1})]),_:1})]),_:1}))}},d$=`<template>
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
</template>`,p$={__name:"HorizontalEqualWidthSegmentsDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Horizontal equal width Segments",code:d$},{description:l(()=>[n(" A horizontal segment group can automatically divide segments to be equal width ")]),example:l(()=>[t(r(yt),{horizontal:"equal width"},{default:l(()=>[t(r(H),null,{default:l(()=>[n(" Segment One ")]),_:1}),t(r(H),null,{default:l(()=>[n(" Segment Two with a lot of additional content ")]),_:1}),t(r(H),null,{default:l(()=>[n(" Segment Three ")]),_:1})]),_:1})]),_:1}))}},m$=`<template>
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
</template>`,f$={__name:"HorizontalWrappingSegmentsDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Horizontal wrapping Segments",code:m$},{description:l(()=>[n(" A horizontal segment group can automatically wrap their segments on smaller screens ")]),example:l(()=>[t(r(yt),{horizontal:"wrapping"},{default:l(()=>[t(r(H),null,{default:l(()=>[n(" Segment One ")]),_:1}),t(r(H),null,{default:l(()=>[n(" Segment Two ")]),_:1}),t(r(H),null,{default:l(()=>[n(" Segment Three ")]),_:1}),t(r(H),null,{default:l(()=>[n(" Segment Four ")]),_:1}),t(r(H),null,{default:l(()=>[n(" Segment Five ")]),_:1}),t(r(H),null,{default:l(()=>[n(" Segment Six ")]),_:1}),t(r(H),null,{default:l(()=>[n(" Segment Seven ")]),_:1}),t(r(H),null,{default:l(()=>[n(" Segment Eight ")]),_:1})]),_:1})]),_:1}))}},g$=k("p",null,"Top",-1),h$=k("p",null,"Middle",-1),_$=k("p",null,"Bottom",-1),b$=`<template>
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
</template>`,v$={__name:"RaisedSegmentsDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Raised Segments",code:b$},{description:l(()=>[n(" A group of segments can be raised ")]),example:l(()=>[t(r(yt),{raised:""},{default:l(()=>[t(r(H),null,{default:l(()=>[g$]),_:1}),t(r(H),null,{default:l(()=>[h$]),_:1}),t(r(H),null,{default:l(()=>[_$]),_:1})]),_:1})]),_:1}))}},S$=k("p",null,"Top",-1),y$=k("p",null,"Middle",-1),w$=k("p",null,"Bottom",-1),C$=`<template>
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
</template>`,A$={__name:"StackedSegmentsDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Stacked Segments",code:C$},{description:l(()=>[n(" A group of segments can be stacked ")]),example:l(()=>[t(r(yt),{stacked:""},{default:l(()=>[t(r(H),null,{default:l(()=>[S$]),_:1}),t(r(H),null,{default:l(()=>[y$]),_:1}),t(r(H),null,{default:l(()=>[w$]),_:1})]),_:1})]),_:1}))}},x$=k("p",null,"Top",-1),k$=k("p",null,"Middle",-1),B$=k("p",null,"Bottom",-1),$$=`<template>
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
</template>`,T$={__name:"PiledSegmentsDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Piled Segments",code:$$},{description:l(()=>[n(" A group of segments can be piled ")]),example:l(()=>[t(r(yt),{piled:""},{default:l(()=>[t(r(H),null,{default:l(()=>[x$]),_:1}),t(r(H),null,{default:l(()=>[k$]),_:1}),t(r(H),null,{default:l(()=>[B$]),_:1})]),_:1})]),_:1}))}},L$=k("p",null,"Pellentesque habitant morbi tristique senectus.",-1),D$=`<template>
  <SuiSegment disabled>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
</template>`,I$={__name:"DisabledDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Disabled",code:D$},{description:l(()=>[n(" A segment may show its content is disabled ")]),example:l(()=>[t(r(H),{disabled:""},{default:l(()=>[L$]),_:1})]),_:1}))}},E$=`<template>
  <SuiSegment loading>
    <SuiImage src="/images/wireframe/paragraph.png" />
  </SuiSegment>
</template>`,R$={__name:"LoadingDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Loading",code:E$},{description:l(()=>[n(" A segment may show its content is being loaded ")]),example:l(()=>[t(r(H),{loading:""},{default:l(()=>[t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}))}},P$=k("p",null,"I'm here to tell you something, and you will probably read me first.",-1),z$=`<template>
  <SuiSegment inverted>
    <p>I'm here to tell you something, and you will probably read me first.</p>
  </SuiSegment>
</template>`,V$={__name:"InvertedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Inverted",code:z$},{description:l(()=>[n(" A segment can have its colors inverted for contrast ")]),example:l(()=>[t(r(H),{inverted:""},{default:l(()=>[P$]),_:1})]),_:1}))}},F$=k("p",null,"This segment is on top",-1),M$=k("p",null,"This segment is attached on both sides",-1),N$=k("p",null,"This segment is on bottom",-1),H$=`<template>
  <SuiSegment attached="top">
    <p>This segment is on top</p>
  </SuiSegment>
  <SuiSegment attached>
    <p>This segment is attached on both sides</p>
  </SuiSegment>
  <SuiSegment attached="bottom">
    <p>This segment is on bottom</p>
  </SuiSegment>
</template>`,O$={__name:"AttachedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Attached",code:H$},{description:l(()=>[n(" A segment can be attached to other content on a page ")]),example:l(()=>[t(r(H),{attached:"top"},{default:l(()=>[F$]),_:1}),t(r(H),{attached:""},{default:l(()=>[M$]),_:1}),t(r(H),{attached:"bottom"},{default:l(()=>[N$]),_:1})]),_:1}))}},q$=k("p",null,"Padded content.",-1),G$=k("p",null,"Padded content.",-1),j$=`<template>
  <SuiSegment padded>
    <p>Padded content.</p>
  </SuiSegment>
  <SuiSegment padded="very">
    <p>Padded content.</p>
  </SuiSegment>
</template>`,U$={__name:"PaddedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Padded",code:j$},{description:l(()=>[n(" A segment can increase its padding ")]),example:l(()=>[t(r(H),{padded:""},{default:l(()=>[q$]),_:1}),t(r(H),{padded:"very"},{default:l(()=>[G$]),_:1})]),_:1}))}},Y$=k("p",null,"Fitted Segment",-1),J$=k("p",null,"Horizontally fitted segment",-1),W$=k("p",null,"Vertically fitted segment",-1),K$=`<template>
  <SuiSegment fitted>
    <p>Fitted Segment</p>
  </SuiSegment>
  <SuiSegment fitted="horizontally">
    <p>Horizontally fitted segment</p>
  </SuiSegment>
  <SuiSegment fitted="vertically">
    <p>Vertically fitted segment</p>
  </SuiSegment>
</template>`,X$={__name:"FittedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Fitted",code:K$},{description:l(()=>[n(" A segment can remove its padding, vertically or horizontally ")]),example:l(()=>[t(r(H),{fitted:""},{default:l(()=>[Y$]),_:1}),t(r(H),{fitted:"horizontally"},{default:l(()=>[J$]),_:1}),t(r(H),{fitted:"vertically"},{default:l(()=>[W$]),_:1})]),_:1}))}},Q$=k("p",null,"Pellentesque habitant morbi",-1),Z$=k("p",null,"Pellentesque habitant morbi",-1),eT=k("p",null,"Pellentesque habitant morbi",-1),tT=`<template>
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
</template>`,iT={__name:"CompactDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Compact",code:tT},{description:l(()=>[n(" A segment may take up only as much space as is necessary ")]),example:l(()=>[t(r(H),{compact:""},{default:l(()=>[Q$]),_:1}),t(r(yt),{compact:""},{default:l(()=>[t(r(H),null,{default:l(()=>[Z$]),_:1}),t(r(H),null,{default:l(()=>[eT]),_:1})]),_:1})]),_:1}))}},lT=`<template>
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
</template>`,aT={__name:"ColoredDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Colored",code:lT},{description:l(()=>[n(" A segment can be colored ")]),example:l(()=>[t(r(H),{color:"red"},{default:l(()=>[n("Red")]),_:1}),t(r(H),{color:"orange"},{default:l(()=>[n("Orange")]),_:1}),t(r(H),{color:"yellow"},{default:l(()=>[n("Yellow")]),_:1}),t(r(H),{color:"olive"},{default:l(()=>[n("Olive")]),_:1}),t(r(H),{color:"green"},{default:l(()=>[n("Green")]),_:1}),t(r(H),{color:"teal"},{default:l(()=>[n("Teal")]),_:1}),t(r(H),{color:"blue"},{default:l(()=>[n("Blue")]),_:1}),t(r(H),{color:"violet"},{default:l(()=>[n("Violet")]),_:1}),t(r(H),{color:"purple"},{default:l(()=>[n("Purple")]),_:1}),t(r(H),{color:"pink"},{default:l(()=>[n("Pink")]),_:1}),t(r(H),{color:"brown"},{default:l(()=>[n("Brown")]),_:1}),t(r(H),{color:"grey"},{default:l(()=>[n("Grey")]),_:1}),t(r(H),{color:"black"},{default:l(()=>[n("Black")]),_:1})]),_:1}))}},nT=k("p",null,"I'm here to tell you something, and you will probably read me first.",-1),oT=k("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),sT=k("p",null,"If you notice me you must be looking very hard.",-1),rT=k("p",null,"I'm here to tell you something, and you will probably read me first.",-1),uT=k("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),cT=k("p",null,"If you notice me you must be looking very hard.",-1),dT=k("p",null,"I'm here to tell you something, and you will probably read me first.",-1),pT=k("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),mT=k("p",null,"If you notice me you must be looking very hard.",-1),fT=`<template>
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
</template>`,gT={__name:"EmphasisDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Emphasis",code:fT},{description:l(()=>[n(" A segment can be formatted to appear more or less noticeable ")]),example:l(()=>[t(r(H),null,{default:l(()=>[nT]),_:1}),t(r(H),{secondary:""},{default:l(()=>[oT]),_:1}),t(r(H),{tertiary:""},{default:l(()=>[sT]),_:1}),t(r(Ve)),t(r(H),{inverted:""},{default:l(()=>[rT]),_:1}),t(r(H),{secondary:"",inverted:""},{default:l(()=>[uT]),_:1}),t(r(H),{tertiary:"",inverted:""},{default:l(()=>[cT]),_:1}),t(r(Ve)),t(r(H),{inverted:"",color:"red"},{default:l(()=>[dT]),_:1}),t(r(H),{secondary:"",inverted:"",color:"red"},{default:l(()=>[pT]),_:1}),t(r(H),{tertiary:"",inverted:"",color:"red"},{default:l(()=>[mT]),_:1})]),_:1}))}},hT=`<template>
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
</template>`,_T={__name:"CircularDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Circular",code:hT},{description:l(()=>[n(" A segment can be circular ")]),example:l(()=>[t(r(H),{circular:"",style:{width:"175px",height:"175px"}},{default:l(()=>[t(r(me),{as:"h2"},{default:l(()=>[n(" Buy Now "),t(r(Yi),null,{default:l(()=>[n("$10.99")]),_:1})]),_:1})]),_:1}),t(r(H),{circular:"",inverted:"",style:{width:"175px",height:"175px"}},{default:l(()=>[t(r(me),{as:"h2"},{default:l(()=>[n(" Buy Now "),t(r(Yi),null,{default:l(()=>[n("$10.99")]),_:1})]),_:1})]),_:1})]),_:1}))}},bT=`<template>
  <SuiSegment clearing>
    <SuiButton floated="right" content="Floated" />
  </SuiSegment>
</template>`,vT={__name:"ClearingDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Clearing",code:bT},{description:l(()=>[n(" A segment can clear floated content ")]),example:l(()=>[t(r(H),{clearing:""},{default:l(()=>[t(r(P),{floated:"right",content:"Floated"})]),_:1})]),_:1}))}},ST=k("p",null,"This segment will appear to the right",-1),yT=k("p",null,"This segment will appear to the left",-1),wT=`<template>
  <SuiSegment floated="right">
    <p>This segment will appear to the right</p>
  </SuiSegment>
  <SuiSegment floated="left">
    <p>This segment will appear to the left</p>
  </SuiSegment>
</template>`,CT={__name:"FloatedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Floated",code:wT},{description:l(()=>[n(" A segment can appear to the left or right of other content ")]),example:l(()=>[t(r(H),{floated:"right"},{default:l(()=>[ST]),_:1}),t(r(H),{floated:"left"},{default:l(()=>[yT]),_:1})]),_:1}))}},AT=`<template>
  <SuiSegment textAlign="right">Right</SuiSegment>
  <SuiSegment textAlign="left">Left</SuiSegment>
  <SuiSegment textAlign="center">Center</SuiSegment>
</template>`,xT={__name:"TextAlignmentDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Text Alignment",code:AT},{description:l(()=>[n(" A segment can have its text aligned to a side ")]),example:l(()=>[t(r(H),{textAlign:"right"},{default:l(()=>[n("Right")]),_:1}),t(r(H),{textAlign:"left"},{default:l(()=>[n("Left")]),_:1}),t(r(H),{textAlign:"center"},{default:l(()=>[n("Center")]),_:1})]),_:1}))}},kT=k("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),BT=`<template>
  <SuiSegment basic>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,$T={__name:"BasicDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Basic",code:BT},{description:l(()=>[n(" A basic segment has no special formatting ")]),example:l(()=>[t(r(H),{basic:""},{default:l(()=>[kT]),_:1})]),_:1}))}},TT=k("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),LT=k("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),DT=k("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),IT=k("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),ET=k("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),RT=k("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),PT=k("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),zT=k("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),VT=`<template>
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
</template>`,FT={__name:"ScrollingDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Scrolling",code:VT},{description:l(()=>[n(" A scrolling segment has a predefined height to allow its content to be scrollable ")]),example:l(()=>[t(r(H),{scrolling:""},{default:l(()=>[TT,LT,DT,IT,ET,RT,PT,zT]),_:1})]),_:1}))}},MT=`<template>
  <SuiSegment size="mini">Mini</SuiSegment>
  <SuiSegment size="tiny">Tiny</SuiSegment>
  <SuiSegment size="small">Small</SuiSegment>
  <SuiSegment>Default</SuiSegment>
  <SuiSegment size="large">Large</SuiSegment>
  <SuiSegment size="big">Big</SuiSegment>
  <SuiSegment size="huge">Huge</SuiSegment>
  <SuiSegment size="massive">Massive</SuiSegment>
</template>`,NT={__name:"SizeDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Size",code:MT},{description:l(()=>[n(" A segment can vary in size ")]),example:l(()=>[t(r(H),{size:"mini"},{default:l(()=>[n("Mini")]),_:1}),t(r(H),{size:"tiny"},{default:l(()=>[n("Tiny")]),_:1}),t(r(H),{size:"small"},{default:l(()=>[n("Small")]),_:1}),t(r(H),null,{default:l(()=>[n("Default")]),_:1}),t(r(H),{size:"large"},{default:l(()=>[n("Large")]),_:1}),t(r(H),{size:"big"},{default:l(()=>[n("Big")]),_:1}),t(r(H),{size:"huge"},{default:l(()=>[n("Huge")]),_:1}),t(r(H),{size:"massive"},{default:l(()=>[n("Massive")]),_:1})]),_:1}))}},HT={__name:"Segment",setup(e){const i=[{id:"segment",label:"Segment",category:"Types",component:bB},{id:"placeholder-segment",label:"Placeholder Segment",category:"Types",component:SB},{id:"raised",label:"Raised",category:"Types",component:CB},{id:"stacked",label:"Stacked",category:"Types",component:BB},{id:"piled",label:"Piled",category:"Types",component:IB},{id:"vertical-segment",label:"Vertical Segment",category:"Types",component:VB},{id:"segments",label:"Segments",category:"Groups",component:JB},{id:"nested-segments",label:"Nested Segments",category:"Groups",component:n$},{id:"horizontal-segments",label:"Horizontal Segments",category:"Groups",component:c$},{id:"horizontal-equal-width-segments",label:"Horizontal equal width Segments",category:"Groups",component:p$},{id:"horizontal-wrapping-segments",label:"Horizontal wrapping Segments",category:"Groups",component:f$},{id:"raised-segments",label:"Raised Segments",category:"Groups",component:v$},{id:"stacked-segments",label:"Stacked Segments",category:"Groups",component:A$},{id:"piled-segments",label:"Piled Segments",category:"Groups",component:T$},{id:"disabled",label:"Disabled",category:"States",component:I$},{id:"loading",label:"Loading",category:"States",component:R$},{id:"inverted",label:"Inverted",category:"Variations",component:V$},{id:"attached",label:"Attached",category:"Variations",component:O$},{id:"padded",label:"Padded",category:"Variations",component:U$},{id:"fitted",label:"Fitted",category:"Variations",component:X$},{id:"compact",label:"Compact",category:"Variations",component:iT},{id:"colored",label:"Colored",category:"Variations",component:aT},{id:"emphasis",label:"Emphasis",category:"Variations",component:gT},{id:"circular",label:"Circular",category:"Variations",component:_T},{id:"clearing",label:"Clearing",category:"Variations",component:vT},{id:"floated",label:"Floated",category:"Variations",component:CT},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:xT},{id:"basic",label:"Basic",category:"Variations",component:$T},{id:"scrolling",label:"Scrolling",category:"Variations",component:FT},{id:"size",label:"Size",category:"Variations",component:NT}];return(a,o)=>(y(),x(ot,{title:"Segment",description:"A segment is used to create a grouping of related content","component-docs":i}))}},OT=V({name:"StepDoc",components:{DocExample:gt},setup(){return{stepCode:`<sui-step-group>
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
</sui-segment>`}}}),qT={class:"intro"},GT=k("p",null,"The steps take up the entire column width",-1),jT=k("p",null,"Main content",-1);function UT(e,i,a,o,s,c){const d=B("sui-header-subheader"),f=B("sui-header"),u=B("sui-divider"),p=B("sui-icon"),g=B("sui-menu-item"),m=B("sui-menu"),_=B("sui-container"),w=B("sui-segment"),S=B("sui-step"),A=B("sui-step-group"),T=B("doc-example"),I=B("sui-step-title"),h=B("sui-step-description"),b=B("sui-step-content"),C=B("sui-grid-column"),$=B("sui-grid");return y(),ye("div",null,[t(w,{vertical:""},{default:l(()=>[t(_,{class:"main"},{default:l(()=>[k("div",qT,[t(f,{as:"h1"},{default:l(()=>[n("Step "),t(d,null,{default:l(()=>[n(" A step shows the completion status of an activity in a series of activities ")]),_:1})]),_:1}),t(u,{hidden:""}),t(m,{floated:"right"},{default:l(()=>[t(g,{as:"a",icon:""},{default:l(()=>[t(p,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:l(()=>[t(p,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(_,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(T,{title:"Step",description:"A single step",code:e.stepCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,null,{default:l(()=>[n("Shipping")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Groups")]),_:1}),t(T,{title:"Steps",description:"A set of steps",code:e.stepsCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,null,{default:l(()=>[t(p,{name:"truck"}),t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Shipping")]),_:1}),t(h,null,{default:l(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,{active:""},{default:l(()=>[t(p,{name:"payment"}),t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Billing")]),_:1}),t(h,null,{default:l(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(S,{disabled:""},{default:l(()=>[t(p,{name:"info"}),t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Ordered",description:"A step can show a ordered sequence of steps",code:e.orderedCode},{default:l(()=>[t(A,{ordered:""},{default:l(()=>[t(S,{completed:""},{default:l(()=>[t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Shipping")]),_:1}),t(h,null,{default:l(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,{completed:""},{default:l(()=>[t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Billing")]),_:1}),t(h,null,{default:l(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(S,{active:""},{default:l(()=>[t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Confirm Order")]),_:1}),t(h,null,{default:l(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Vertical",description:"A step can be displayed stacked vertically",code:e.verticalCode},{default:l(()=>[t(A,{vertical:""},{default:l(()=>[t(S,{completed:""},{default:l(()=>[t(p,{name:"truck"}),t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Shipping")]),_:1}),t(h,null,{default:l(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,{completed:""},{default:l(()=>[t(p,{name:"credit card"}),t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Billing")]),_:1}),t(h,null,{default:l(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(S,{active:""},{default:l(()=>[t(p,{name:"info"}),t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Confirm Order")]),_:1}),t(h,null,{default:l(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Content")]),_:1}),t(T,{title:"Description",description:"A step can contain a description",code:e.descriptionCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Shipping")]),_:1}),t(h,null,{default:l(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Icon",description:"A step can contain an icon",code:e.iconCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,null,{default:l(()=>[t(p,{name:"truck"}),t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Shipping")]),_:1}),t(h,null,{default:l(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Link",description:"A step can link",code:e.linkCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,{link:""},{default:l(()=>[t(p,{name:"truck"}),t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Shipping")]),_:1}),t(h,null,{default:l(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Billing")]),_:1}),t(h,null,{default:l(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("States")]),_:1}),t(T,{title:"Active",description:"A step can be highlighted as active",code:e.activeCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,{active:""},{default:l(()=>[t(p,{name:"payment"}),t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Billing")]),_:1}),t(h,null,{default:l(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Completed",description:"A step can show that a user has completed it",code:e.completedCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,{completed:""},{default:l(()=>[t(p,{name:"payment"}),t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Billing")]),_:1}),t(h,null,{default:l(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Disabled",description:"A step can show that it cannot be selected",code:e.disabledCode},{default:l(()=>[t(A,null,{default:l(()=>[t(S,{disabled:""},{default:l(()=>[n("Billing")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Variations")]),_:1}),t(T,{title:"Stackable",description:"A step can stack vertically only on smaller screens",code:e.stackableCode},{default:l(()=>[t(A,{stackable:"tablet"},{default:l(()=>[t(S,null,{default:l(()=>[t(p,{name:"plane"}),t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Shipping")]),_:1}),t(h,null,{default:l(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,{active:""},{default:l(()=>[t(p,{name:"dollar"}),t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Billing")]),_:1}),t(h,null,{default:l(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(S,{disabled:""},{default:l(()=>[t(p,{name:"info circle"}),t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Confirm Order")]),_:1}),t(h,null,{default:l(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Unstackable",description:"A step can prevent itself from stacking on mobile",code:e.unstackableCode},{default:l(()=>[t(A,{unstackable:""},{default:l(()=>[t(S,null,{default:l(()=>[t(p,{name:"plane"}),t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Shipping")]),_:1}),t(h,null,{default:l(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,{active:""},{default:l(()=>[t(p,{name:"dollar"}),t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Billing")]),_:1}),t(h,null,{default:l(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(S,{disabled:""},{default:l(()=>[t(p,{name:"info circle"}),t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Confirm Order")]),_:1}),t(h,null,{default:l(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Fluid",description:"A fluid step takes up the width of its container",code:e.fluidCode},{default:l(()=>[t($,{columns:2},{default:l(()=>[t(C,null,{default:l(()=>[t(A,{fluid:"",vertical:""},{default:l(()=>[t(S,{completed:""},{default:l(()=>[t(p,{name:"truck"}),t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Shipping")]),_:1}),t(h,null,{default:l(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,{active:""},{default:l(()=>[t(p,{name:"dollar"}),t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Billing")]),_:1}),t(h,null,{default:l(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(C,null,{default:l(()=>[GT]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Attached",description:"Steps can be attached to other elements",code:e.attachedCode},{default:l(()=>[k("div",null,[t(A,{attached:"top"},{default:l(()=>[t(S,null,{default:l(()=>[t(p,{name:"truck"}),t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Shipping")]),_:1}),t(h,null,{default:l(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,{active:""},{default:l(()=>[t(p,{name:"payment"}),t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Billing")]),_:1}),t(h,null,{default:l(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1}),t(w,{attached:""},{default:l(()=>[jT]),_:1}),t(A,{attached:"bottom"},{default:l(()=>[t(S,null,{default:l(()=>[t(p,{name:"truck"}),t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Shipping")]),_:1}),t(h,null,{default:l(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,{active:""},{default:l(()=>[t(p,{name:"payment"}),t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Billing")]),_:1}),t(h,null,{default:l(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(T,{title:"Evenly Divided",description:"Steps can be divided evenly inside their parent",code:e.evenlyDividedCode},{default:l(()=>[t(A,{widths:2},{default:l(()=>[t(S,{active:""},{default:l(()=>[t(p,{name:"payment"}),t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Billing")]),_:1})]),_:1})]),_:1}),t(S,{disabled:""},{default:l(()=>[t(p,{name:"info"}),t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Size",description:"Steps can have different sizes",code:e.sizeCode},{default:l(()=>[t(A,{size:"mini"},{default:l(()=>[t(S,{active:""},{default:l(()=>[t(p,{name:"payment"}),t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Billing")]),_:1})]),_:1})]),_:1}),t(S,{disabled:""},{default:l(()=>[t(p,{name:"info"}),t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Inverted",description:"A step's color can be inverted",code:e.invertedCode},{default:l(()=>[t(w,{inverted:""},{default:l(()=>[t(A,{inverted:"",vertical:""},{default:l(()=>[t(S,{completed:""},{default:l(()=>[t(p,{name:"truck"}),t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Shipping")]),_:1}),t(h,null,{default:l(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,{completed:""},{default:l(()=>[t(p,{name:"credit card"}),t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Billing")]),_:1}),t(h,null,{default:l(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(S,{active:""},{default:l(()=>[t(p,{name:"info"}),t(b,null,{default:l(()=>[t(I,null,{default:l(()=>[n("Confirm Order")]),_:1}),t(h,null,{default:l(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const YT=He(OT,[["render",UT]]),JT=`<template>
  <SuiBreadcrumb
    :sections="[
      { content: 'Home', link: true },
      { content: 'Store', link: true },
      { content: 'T-Shirt', active: true }
    ]"
    icon="right angle"
  />
</template>`,WT={__name:"BreadcrumbDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Breadcrumb",code:JT},{description:l(()=>[n(" A standard breadcrumb ")]),example:l(()=>[t(r(ni),{sections:[{content:"Home",link:!0},{content:"Store",link:!0},{content:"T-Shirt",active:!0}],icon:"right angle"})]),_:1}))}},KT=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection link>Registration</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Personal Information</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,XT={__name:"DividerDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Divider",code:KT},{description:l(()=>[n(" A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text. ")]),example:l(()=>[t(r(ni),null,{default:l(()=>[t(r(et),{link:""},{default:l(()=>[n("Home")]),_:1}),t(r(Tt),null,{default:l(()=>[n(" / ")]),_:1}),t(r(et),{link:""},{default:l(()=>[n("Registration")]),_:1}),t(r(Tt),null,{default:l(()=>[n(" / ")]),_:1}),t(r(et),{active:""},{default:l(()=>[n("Personal Information")]),_:1})]),_:1})]),_:1}))}},QT=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Search</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,ZT={__name:"SectionDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Section",code:QT},{description:l(()=>[n(" A breadcrumb can contain sections that can either be formatted as a link or text ")]),example:l(()=>[t(r(ni),null,{default:l(()=>[t(r(et),{link:""},{default:l(()=>[n("Home")]),_:1}),t(r(Tt),null,{default:l(()=>[n(" / ")]),_:1}),t(r(et),{active:""},{default:l(()=>[n("Search")]),_:1})]),_:1})]),_:1}))}},eL=k("a",{href:"#"},"paper towels",-1),tL=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Search for: <a href="#">paper towels</a></SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,iL={__name:"LinkDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Link",code:tL},{description:l(()=>[n(" A section may be linkable or contain a link ")]),example:l(()=>[t(r(ni),null,{default:l(()=>[t(r(et),{link:""},{default:l(()=>[n("Home")]),_:1}),t(r(Tt),null,{default:l(()=>[n(" / ")]),_:1}),t(r(et),{active:""},{default:l(()=>[n("Search for: "),eL]),_:1})]),_:1})]),_:1}))}},lL=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Products</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Paper Towels</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,aL={__name:"ActiveDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Active",code:lL},{description:l(()=>[n(" A section can be active ")]),example:l(()=>[t(r(ni),null,{default:l(()=>[t(r(et),{link:""},{default:l(()=>[n("Products")]),_:1}),t(r(Tt),null,{default:l(()=>[n(" / ")]),_:1}),t(r(et),{active:""},{default:l(()=>[n("Paper Towels")]),_:1})]),_:1})]),_:1}))}},nL=k("br",null,null,-1),oL=`<template>
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
</template>`,sL={__name:"InvertedDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Inverted",code:oL},{description:l(()=>[n(" A breadcrumb can be inverted ")]),example:l(()=>[t(r(H),{inverted:""},{default:l(()=>[t(r(ni),{inverted:""},{default:l(()=>[t(r(et),{link:""},{default:l(()=>[n("Home")]),_:1}),t(r(Tt),null,{default:l(()=>[n(" / ")]),_:1}),t(r(et),{link:""},{default:l(()=>[n("Registration")]),_:1}),t(r(Tt),null,{default:l(()=>[n(" / ")]),_:1}),t(r(et),{active:""},{default:l(()=>[n("Personal Information")]),_:1})]),_:1}),nL,t(r(ni),{inverted:""},{default:l(()=>[t(r(et),null,{default:l(()=>[n("Home")]),_:1}),t(r(Tt),null,{default:l(()=>[n(" / ")]),_:1}),t(r(et),null,{default:l(()=>[n("Registration")]),_:1}),t(r(Tt),null,{default:l(()=>[n(" / ")]),_:1}),t(r(et),{active:""},{default:l(()=>[n("Personal Information")]),_:1})]),_:1})]),_:1})]),_:1}))}},rL=`<template>
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
</template>`,uL={__name:"SizeDoc",setup(e){const i=["mini","tiny","small","large","big","huge","massive"];return(a,o)=>(y(),x(D,{label:"Size",code:rL},{description:l(()=>[n(" A breadcrumb can vary in size ")]),example:l(()=>[(y(),ye(Ce,null,Qe(i,s=>(y(),ye(Ce,{key:s},[t(r(ni),{size:s},{default:l(()=>[t(r(et),{link:""},{default:l(()=>[n("Home")]),_:1}),t(r(Tt),null,{default:l(()=>[n(" / ")]),_:1}),t(r(et),{link:""},{default:l(()=>[n("Registration")]),_:1}),t(r(Tt),null,{default:l(()=>[n(" / ")]),_:1}),t(r(et),{active:""},{default:l(()=>[n("Personal Information")]),_:1})]),_:2},1032,["size"]),t(r(Ve),{hidden:""})],64))),64))]),_:1}))}},cL={__name:"Breadcrumb",setup(e){const i=[{id:"breadcrumb",label:"Breadcrumb",category:"Types",component:WT},{id:"divider",label:"Divider",category:"Content",component:XT},{id:"section",label:"Section",category:"Content",component:ZT},{id:"link",label:"Link",category:"Content",component:iL},{id:"active",label:"Active",category:"States",component:aL},{id:"inverted",label:"Inverted",category:"Variations",component:sL},{id:"size",label:"Size",category:"Variations",component:uL}];return(a,o)=>(y(),x(ot,{title:"Breadcrumb",description:"A standard breadcrumb","component-docs":i}))}},dL=`<template>
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
</template>`,pL={__name:"FormDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Form",code:dL},{description:l(()=>[n(" A Form ")]),example:l(()=>[t(r(Nt),null,{default:l(()=>[t(r(it),{label:"First Name",placeholder:"First Name"}),t(r(it),{label:"Last Name",placeholder:"Last Name"}),t(r(it),null,{default:l(()=>[t(r(id),{label:"I agree to the Terms and Conditions"})]),_:1}),t(r(P),{type:"submit"},{default:l(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},mL=`<template>
  <SuiForm>
    <SuiFormField
      label="User Input"
    />
  </SuiForm>
</template>`,fL={__name:"FieldDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Field",code:mL},{description:l(()=>[n(" A field is a form element containing a label and an input ")]),example:l(()=>[t(r(Nt),null,{default:l(()=>[t(r(it),{label:"User Input"})]),_:1})]),_:1}))}},gL=`<template>
  <SuiForm>
    <SuiFormGroup>
      <SuiFormField label="First Name" />
      <SuiFormField label="Middle Name" />
      <SuiFormField label="Last Name" />
    </SuiFormGroup>
  </SuiForm>
</template>`,hL={__name:"FieldsDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Fields",code:gL},{description:l(()=>[n(" A set of fields can appear grouped together ")]),example:l(()=>[t(r(Nt),null,{default:l(()=>[t(r(fs),null,{default:l(()=>[t(r(it),{label:"First Name"}),t(r(it),{label:"Middle Name"}),t(r(it),{label:"Last Name"})]),_:1})]),_:1})]),_:1}))}},_L=`<template>
  <SuiForm>
    <SuiFormTextarea label="Text" />
    <SuiFormTextarea label="Short Text" :rows="2" />
  </SuiForm>
</template>`,bL={__name:"TextAreaDoc",setup(e){return(i,a)=>(y(),x(D,{label:"TextArea",code:_L},{description:l(()=>[n(" A textarea can be used to allow for extended user input. ")]),example:l(()=>[t(r(Nt),null,{default:l(()=>[t(r(wo),{label:"Text"}),t(r(wo),{label:"Short Text",rows:2})]),_:1})]),_:1}))}},vL=`<template>
  <SuiForm loading>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,SL={__name:"LoadingDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Loading",code:vL},{description:l(()=>[n(" If a form is in loading state, it will automatically show a loading indicator. ")]),example:l(()=>[t(r(Nt),{loading:""},{default:l(()=>[t(r(it),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(r(P),{type:"submit"},{default:l(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},yL=`<template>
  <SuiForm success>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      success
      header='Form Completed'
      content="You're all signed up for the newsletter"
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,wL={__name:"SuccessDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Success",code:yL},{description:l(()=>[n(" If a form is in an success state, it will automatically show any success message blocks. ")]),example:l(()=>[t(r(Nt),{success:""},{default:l(()=>[t(r(it),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(r(An),{success:"",header:"Form Completed",content:"You're all signed up for the newsletter"}),t(r(P),{type:"submit"},{default:l(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},CL=`<template>
  <SuiForm error>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      error
      header='Action Forbidden'
      content='You can only sign up for an account once with a given e-mail address.'
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,AL={__name:"ErrorDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Error",code:CL},{description:l(()=>[n(" If a form is in an error state, it will automatically show any error message blocks. ")]),example:l(()=>[t(r(Nt),{error:""},{default:l(()=>[t(r(it),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(r(An),{error:"",header:"Action Forbidden",content:"You can only sign up for an account once with a given e-mail address."}),t(r(P),{type:"submit"},{default:l(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},xL=`<template>
  <SuiForm warning>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      warning
      header='Could you check something!'
      content='That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.'
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,kL={__name:"WarningDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Warning",code:xL},{description:l(()=>[n(" If a form is in warning state, it will automatically show any warning message block. ")]),example:l(()=>[t(r(Nt),{warning:""},{default:l(()=>[t(r(it),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(r(An),{warning:"",header:"Could you check something!",content:"That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail."}),t(r(P),{type:"submit"},{default:l(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},BL=`<template>
  <SuiForm>
    <SuiFormGroup>
      <SuiFormField disabled label="First name" placeholder="Read only" />
      <SuiFormField disabled label="Last name" placeholder="Disabled" />
    </SuiFormGroup>
  </SuiForm>
</template>`,$L={__name:"DisabledDoc",setup(e){return(i,a)=>(y(),x(D,{label:"Disabled",code:BL},{description:l(()=>[n(" Individual fields may be disabled ")]),example:l(()=>[t(r(Nt),null,{default:l(()=>[t(r(fs),null,{default:l(()=>[t(r(it),{disabled:"",label:"First name",placeholder:"Read only"}),t(r(it),{disabled:"",label:"Last name",placeholder:"Disabled"})]),_:1})]),_:1})]),_:1}))}},TL={__name:"Form",setup(e){const i=[{id:"form",label:"Form",category:"Types",component:pL},{id:"field",label:"Field",category:"Content",component:fL},{id:"fields",label:"Fields",category:"Content",component:hL},{id:"textarea",label:"TextArea",category:"Content",component:bL},{id:"loading",label:"Loading",category:"Form States",component:SL},{id:"success",label:"Success",category:"Form States",component:wL},{id:"error",label:"Error",category:"Form States",component:AL},{id:"warning",label:"Warning",category:"Form States",component:kL},{id:"disabled",label:"Disabled",category:"Field States",component:$L}];return(a,o)=>(y(),x(ot,{title:"Form",description:"A form displays a set of related user input fields in a structured way","component-docs":i}))}},LL=V({name:"DocPageHeader",props:{title:String,sub:String}}),DL={class:"intro",style:{padding:"2rem"}};function IL(e,i,a,o,s,c){const d=B("sui-header-subheader"),f=B("sui-header"),u=B("sui-divider"),p=B("sui-icon"),g=B("sui-menu-item"),m=B("sui-menu"),_=B("sui-container"),w=B("sui-segment");return y(),x(w,{vertical:""},{default:l(()=>[t(_,{class:"main"},{default:l(()=>[k("div",DL,[t(f,{as:"h1"},{default:l(()=>[n($e(e.title)+" ",1),t(d,null,{default:l(()=>[n($e(e.sub),1)]),_:1})]),_:1}),t(u,{hidden:""}),t(m,{floated:"right"},{default:l(()=>[t(g,{as:"a",icon:""},{default:l(()=>[t(p,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:l(()=>[t(p,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1})}const Rt=He(LL,[["render",IL]]),Te="/vue-fomantic-ui/images/wireframe/image.png",ei="/vue-fomantic-ui/images/wireframe/media-paragraph.png",Oe="/vue-fomantic-ui/images/wireframe/paragraph.png",Or="/vue-fomantic-ui/images/wireframe/centered-paragraph.png",EL=V({name:"GridDoc",components:{DocPageHeader:Rt,DocExample:gt},setup(){return{numbers:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],gridCode:`<sui-grid>
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
</sui-grid>`}}}),RL=k("br",null,null,-1);function PL(e,i,a,o,s,c){const d=B("doc-page-header"),f=B("sui-header"),u=B("sui-image"),p=B("sui-grid-column"),g=B("sui-grid"),m=B("doc-example"),_=B("sui-grid-row"),w=B("sui-segment"),S=B("sui-divider"),A=B("sui-menu-item"),T=B("sui-menu"),I=B("sui-container");return y(),ye("div",null,[t(d,{title:"Grid",sub:"A grid is used to harmonize negative space in a layout"}),t(I,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(m,{title:"Grid",description:"A basic grid",code:e.gridCode},{default:l(()=>[t(g,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.numbers,h=>(y(),x(p,{key:h},{default:l(()=>[t(u,{src:Te})]),_:2},1024))),128))]),_:1})]),_:1},8,["code"]),t(m,{title:"Divided",description:"A grid can have dividers between its columns",code:e.dividedCode},{default:l(()=>[t(g,{columns:3,divided:""},{default:l(()=>[t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,{src:ei})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:ei})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:ei})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,{src:ei})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:ei})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:ei})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Vertical Divided",description:"A grid can have dividers between rows",code:e.verticalDividedCode},{default:l(()=>[t(g,{divided:"vertically"},{default:l(()=>[t(_,{columns:2},{default:l(()=>[t(p,null,{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Oe})]),_:1})]),_:1}),t(_,{columns:3},{default:l(()=>[t(p,null,{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Oe})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Celled",description:"A grid can have rows divided into cells",code:e.celledCode},{default:l(()=>[t(g,{celled:""},{default:l(()=>[t(_,null,{default:l(()=>[t(p,{width:3},{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,{width:13},{default:l(()=>[t(u,{src:Or})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,{width:3},{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,{width:10},{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,{width:3},{default:l(()=>[t(u,{src:Te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Internally Celled",description:"A grid can have rows divisions only between internal rows",code:e.internallyCelledCode},{default:l(()=>[t(g,{celled:"internally"},{default:l(()=>[t(_,null,{default:l(()=>[t(p,{width:3},{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,{width:13},{default:l(()=>[t(u,{src:Or})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,{width:3},{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,{width:10},{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,{width:3},{default:l(()=>[t(u,{src:Te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Content")]),_:1}),t(m,{title:"Rows",description:"A row is a horizontal grouping of columns",code:e.rowsCode},{default:l(()=>[t(g,{columns:3},{default:l(()=>[t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Oe})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Oe})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Columns",description:"Columns each contain gutters giving them equal spacing from other columns",code:e.columnsCode},{default:l(()=>[t(g,null,{default:l(()=>[t(p,{width:8},{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,{width:8},{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,{width:8},{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,{width:8},{default:l(()=>[t(u,{src:Oe})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Variations")]),_:1}),t(m,{title:"Floated",description:"A column can sit flush against the left or right edge of a row",code:e.floatedCode},{default:l(()=>[t(g,null,{default:l(()=>[t(p,{floated:"left",width:5},{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,{floated:"right",width:5},{default:l(()=>[t(u,{src:Oe})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Column Width",description:"A column can vary in width taking up more than a single grid column",code:e.columnWidthCode},{default:l(()=>[t(g,null,{default:l(()=>[t(p,{width:4},{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,{width:9},{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,{width:3},{default:l(()=>[t(u,{src:ei})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Column Count",description:"A grid can have a different number of columns per row",code:e.columnCountCode},{default:l(()=>[t(g,null,{default:l(()=>[t(_,{columns:3},{default:l(()=>[t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1})]),_:1}),t(_,{columns:4},{default:l(()=>[t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Equal Width",description:"Equal Width",code:e.equalWidthCode},{default:l(()=>[t(g,{columns:"equal"},{default:l(()=>[t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("1")]),_:1})]),_:1}),t(p,{width:8},{default:l(()=>[t(w,null,{default:l(()=>[n("2")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("3")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Stretched",description:"A row can stretch its contents to take up the entire column height",code:e.stretchedCode},{default:l(()=>[t(g,{columns:3,divided:""},{default:l(()=>[t(_,{stretched:""},{default:l(()=>[t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("1")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("1")]),_:1}),t(w,null,{default:l(()=>[n("2")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("1")]),_:1}),t(w,null,{default:l(()=>[n("2")]),_:1}),t(w,null,{default:l(()=>[n("3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Padded",description:"A grid can preserve its vertical and horizontal gutters on first and last columns",code:e.paddedCode},{default:l(()=>[k("div",null,[t(S),t(g,{padded:"",columns:2},{default:l(()=>[t(p,null,{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Oe})]),_:1})]),_:1})])]),_:1},8,["code"]),t(m,{title:"Relaxed",description:"A grid can increase its gutters to allow for more negative space",code:e.relaxedCode},{default:l(()=>[t(g,{relaxed:"",columns:4},{default:l(()=>[t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Colored",description:"A row or column can be colored",code:e.coloredCode},{default:l(()=>[t(g,{padded:"",columns:5},{default:l(()=>[t(p,{color:"red"},{default:l(()=>[n("Red")]),_:1}),t(p,{color:"orange"},{default:l(()=>[n("Orange")]),_:1}),t(p,{color:"yellow"},{default:l(()=>[n("Yellow")]),_:1}),t(p,{color:"olive"},{default:l(()=>[n("Olive")]),_:1}),t(p,{color:"green"},{default:l(()=>[n("Green")]),_:1}),t(p,{color:"teal"},{default:l(()=>[n("Teal")]),_:1}),t(p,{color:"blue"},{default:l(()=>[n("Blue")]),_:1}),t(p,{color:"violet"},{default:l(()=>[n("Violet")]),_:1}),t(p,{color:"purple"},{default:l(()=>[n("Purple")]),_:1}),t(p,{color:"pink"},{default:l(()=>[n("Pink")]),_:1}),t(p,{color:"brown"},{default:l(()=>[n("Brown")]),_:1}),t(p,{color:"grey"},{default:l(()=>[n("Grey")]),_:1}),t(p,{color:"black"},{default:l(()=>[n("Black")]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Centered",description:"A grid can have its columns centered",code:e.centeredCode},{default:l(()=>[t(g,{centered:"",columns:2},{default:l(()=>[t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(_,{centered:"",columns:4},{default:l(()=>[t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Text Alignment",description:"A grid, row, or column can specify its text alignment",code:e.textAlignCode},{default:l(()=>[t(g,{textAlign:"center",columns:3},{default:l(()=>[t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(T,{vertical:"",fluid:""},{default:l(()=>[t(A,{header:""},{default:l(()=>[n("Cats")]),_:1})]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(T,{vertical:"",fluid:""},{default:l(()=>[t(A,{header:""},{default:l(()=>[n("Dogs")]),_:1}),t(A,null,{default:l(()=>[n("Poodle")]),_:1}),t(A,null,{default:l(()=>[n("Cockerspaniel")]),_:1})]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(T,{vertical:"",fluid:""},{default:l(()=>[t(A,{header:""},{default:l(()=>[n("Monkeys")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Vertical Alignment",description:"A grid, row, or column can specify its vertical alignment to have all its columns vertically centered",code:e.verticalAlignCode},{default:l(()=>[t(g,{verticalAlign:"middle",columns:4,centered:""},{default:l(()=>[t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te}),RL,t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Responsive Variations")]),_:1}),t(m,{title:"Doubling",description:"A grid can double its column width on tablet and mobile sizes",code:e.doublingCode},{default:l(()=>[t(g,{doubling:"",columns:5},{default:l(()=>[t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1}),t(p,null,{default:l(()=>[t(u,{src:Te})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"stackable",description:"A grid can have its columns stack on-top of each other after reaching mobile breakpoints",code:e.stackableCode},{default:l(()=>[t(g,{stackable:"",columns:2},{default:l(()=>[t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[t(u,{src:Oe})]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[t(u,{src:Oe})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Reversed",description:"A grid or row can specify that its columns should reverse order at different device sizes",code:e.reversedCode},{default:l(()=>[t(g,{reversed:"computer vertically"},{default:l(()=>[t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[n("Computer Row 3")]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[n("Computer Row 2")]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[n("Computer Row 1")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Device Visibility",description:"A columns or row can appear only for a specific device, or screen sizes",code:e.deviceVisibilityCode},{default:l(()=>[t(g,null,{default:l(()=>[t(_,{only:"large screen",columns:2},{default:l(()=>[t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("Large Screen")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("Large Screen")]),_:1})]),_:1})]),_:1}),t(_,{only:"widescreen",columns:2},{default:l(()=>[t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("Widescreen")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("Widescreen")]),_:1})]),_:1})]),_:1}),t(_,{only:"mobile",columns:2},{default:l(()=>[t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("Mobile")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("Mobile")]),_:1})]),_:1})]),_:1}),t(_,{columns:3},{default:l(()=>[t(p,{only:"computer"},{default:l(()=>[t(w,null,{default:l(()=>[n("Computer")]),_:1})]),_:1}),t(p,{only:"mobile"},{default:l(()=>[t(w,null,{default:l(()=>[n("Tablet and Mobile")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("All Sizes")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("All Sizes")]),_:1})]),_:1})]),_:1}),t(_,{only:"computer",columns:4},{default:l(()=>[t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("Computer")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("Computer")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("Computer")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("Computer")]),_:1})]),_:1})]),_:1}),t(_,{only:"tablet",columns:3},{default:l(()=>[t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("Tablet")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("Tablet")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(w,null,{default:l(()=>[n("Tablet")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Responsive Width",description:"A column can specify a width for a specific device",code:e.responsiveWidthCode},{default:l(()=>[t(g,null,{default:l(()=>[t(p,{mobile:16,tablet:8,computer:4},{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,{mobile:16,tablet:8,computer:4},{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,{mobile:16,tablet:8,computer:4},{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,{mobile:16,tablet:8,computer:4},{default:l(()=>[t(u,{src:Oe})]),_:1}),t(p,{mobile:16,tablet:8,computer:4},{default:l(()=>[t(u,{src:Oe})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const zL=He(EL,[["render",PL]]),VL=V({name:"TableDoc",components:{DocPageHeader:Rt,DocExample:gt},setup(){return{tableCode:`<sui-table celled>
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
</sui-table>`}}}),FL=k("a",{href:"#"},"Edit",-1),ML=k("a",{href:"#"},"Edit",-1),NL=k("a",{href:"#"},"Edit",-1),HL=k("br",null,null,-1),OL=k("br",null,null,-1),qL=k("br",null,null,-1),GL=k("br",null,null,-1),jL=k("br",null,null,-1),UL=k("br",null,null,-1),YL=k("br",null,null,-1);function JL(e,i,a,o,s,c){const d=B("doc-page-header"),f=B("sui-header"),u=B("sui-table-header-cell"),p=B("sui-table-row"),g=B("sui-table-header"),m=B("sui-table-cell"),_=B("sui-table-body"),w=B("sui-table"),S=B("doc-example"),A=B("sui-icon"),T=B("sui-table-footer"),I=B("sui-container");return y(),ye("div",null,[t(d,{title:"Table",sub:"A table displays a collections of data grouped into rows"}),t(I,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(S,{title:"Table",description:"A standard table",code:e.tableCode},{default:l(()=>[t(w,{celled:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Age")]),_:1}),t(u,null,{default:l(()=>[n("Job")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("James")]),_:1}),t(m,null,{default:l(()=>[n("24")]),_:1}),t(m,null,{default:l(()=>[n("Engineer")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jill")]),_:1}),t(m,null,{default:l(()=>[n("26")]),_:1}),t(m,null,{default:l(()=>[n("Engineer")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Elyse")]),_:1}),t(m,null,{default:l(()=>[n("24")]),_:1}),t(m,null,{default:l(()=>[n("Designer")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Definition",description:"A table may be formatted to emphasize a first column that defines a rows content",code:e.definitionCode},{default:l(()=>[t(w,{definition:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u),t(u,null,{default:l(()=>[n("Arguments")]),_:1}),t(u,null,{default:l(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("reset rating")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1}),t(m,null,{default:l(()=>[n("Resets rating to default value")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("set rating")]),_:1}),t(m,null,{default:l(()=>[n("rating (integer)")]),_:1}),t(m,null,{default:l(()=>[n("Sets the current star rating to specified value")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Structured",description:"A table can be formatted to display complex structured data",code:e.structuredCode},{default:l(()=>[t(w,{structured:"",celled:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,{rowspan:"2"},{default:l(()=>[n("Name")]),_:1}),t(u,{rowspan:"2"},{default:l(()=>[n("Type")]),_:1}),t(u,{rowspan:"2"},{default:l(()=>[n("Files")]),_:1}),t(u,{colspan:"3"},{default:l(()=>[n("Languages")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Ruby")]),_:1}),t(u,null,{default:l(()=>[n("Javascript")]),_:1}),t(u,null,{default:l(()=>[n("Python")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Alpha Team")]),_:1}),t(m,null,{default:l(()=>[n("Project 1")]),_:1}),t(m,{textAlign:"right"},{default:l(()=>[n("2")]),_:1}),t(m,{textAlign:"center"},{default:l(()=>[t(A,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(m),t(m)]),_:1}),t(p,null,{default:l(()=>[t(m,{rowspan:"3"},{default:l(()=>[n("Beta Team")]),_:1}),t(m,null,{default:l(()=>[n("Project 1")]),_:1}),t(m,{textAlign:"right"},{default:l(()=>[n("52")]),_:1}),t(m,{textAlign:"center"},{default:l(()=>[t(A,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(m),t(m)]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Project 2")]),_:1}),t(m,{textAlign:"right"},{default:l(()=>[n("12")]),_:1}),t(m),t(m,{textAlign:"center"},{default:l(()=>[t(A,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(m)]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Project 3")]),_:1}),t(m,{textAlign:"right"},{default:l(()=>[n("21")]),_:1}),t(m,{textAlign:"center"},{default:l(()=>[t(A,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(m),t(m)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("States")]),_:1}),t(S,{title:"Positive / Negative",description:"A cell or row may let a user know whether a value is good or bad",code:e.positiveNegativeCode},{default:l(()=>[t(w,{celled:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:l(()=>[n("Unknown")]),_:1}),t(m,{negative:""},{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,{positive:""},{default:l(()=>[t(m,null,{default:l(()=>[n("Jimmy")]),_:1}),t(m,null,{default:l(()=>[t(A,{name:"checkmark"}),n(" Approved ")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Unknown")]),_:1}),t(m,{positive:""},{default:l(()=>[t(A,{name:"close"}),n(" Requires call ")]),_:1})]),_:1}),t(p,{negative:""},{default:l(()=>[t(m,null,{default:l(()=>[n("Jill")]),_:1}),t(m,null,{default:l(()=>[n("Unknown")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Error",description:"A cell or row may call attention to an error or a negative value",code:e.errorCode},{default:l(()=>[t(w,{celled:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,{error:""},{default:l(()=>[t(m,null,{default:l(()=>[n("Jimmy")]),_:1}),t(m,null,{default:l(()=>[n("Cannot pull data")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,{error:""},{default:l(()=>[t(A,{name:"attention"}),n(" Requires call ")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jill")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Warning",description:"A cell or row may warn a user",code:e.warningCode},{default:l(()=>[t(w,{celled:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:l(()=>[n("Unknown")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,{warning:""},{default:l(()=>[t(m,null,{default:l(()=>[n("Jimmy")]),_:1}),t(m,null,{default:l(()=>[t(A,{name:"attention"}),n(" Requires Action ")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Unknown")]),_:1}),t(m,{warning:""},{default:l(()=>[t(A,{name:"attention"}),n(" Hostile ")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jill")]),_:1}),t(m,null,{default:l(()=>[n("Unknown")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Active",description:"A cell or row can be active or selected by a user",code:e.activeCode},{default:l(()=>[t(w,{celled:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,{active:""},{default:l(()=>[t(m,null,{default:l(()=>[n("Jimmy")]),_:1}),t(m,null,{default:l(()=>[n("Selected")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("Requires call")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,{active:""},{default:l(()=>[n("Jill")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Disabled",description:"A cell can be disabled",code:e.disabledCode},{default:l(()=>[t(w,{celled:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,{disabled:""},{default:l(()=>[t(m,null,{default:l(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jimmy")]),_:1}),t(m,null,{default:l(()=>[n("Selected")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("Requires call")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,{disabled:""},{default:l(()=>[n("Jill")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Colored Cells",description:"A cell can be styled by the central color palette colors",code:e.coloredCellsCode},{default:l(()=>[t(w,{celled:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,{color:"orange"},{default:l(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:l(()=>[n("Unknown")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,{color:"blue"},{default:l(()=>[t(m,null,{default:l(()=>[n("Jimmy")]),_:1}),t(m,null,{default:l(()=>[t(A,{name:"microphone"}),n(" Recording session ")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Unknown")]),_:1}),t(m,{color:"pink"},{default:l(()=>[t(A,{name:"child"}),n(" Baby Party ")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jill")]),_:1}),t(m,null,{default:l(()=>[n("Unknown")]),_:1}),t(m,{color:"green"},{default:l(()=>[n("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Marked",description:"A cell or row can be marked by a colored left or right border",code:e.markedCode},{default:l(()=>[t(w,{celled:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,{marked:"right",color:"blue"},{default:l(()=>[n("No Name Specified")]),_:1}),t(m,{marked:"left",color:"red"},{default:l(()=>[n("Unknown")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,{marked:"left",color:"green"},{default:l(()=>[n("Jimmy")]),_:1}),t(m,null,{default:l(()=>[t(A,{name:"microphone"}),n(" Recording session ")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Unknown")]),_:1}),t(m,{marked:"left",color:"orange"},{default:l(()=>[t(A,{name:"child"}),n(" Baby Party ")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jill")]),_:1}),t(m,null,{default:l(()=>[n("Unknown")]),_:1}),t(m,{marked:"right",color:"purple"},{default:l(()=>[n("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Variations")]),_:1}),t(S,{title:"Single Line",description:"A table can specify that its cell contents should remain on a single line, and not wrap",code:e.singleLineCode},{default:l(()=>[t(w,{"single-line":""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Registration Date")]),_:1}),t(u,null,{default:l(()=>[n("E-mail address")]),_:1}),t(u,null,{default:l(()=>[n("Premium Plan")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John Lilki")]),_:1}),t(m,null,{default:l(()=>[n("September 14, 2013")]),_:1}),t(m,null,{default:l(()=>[n("jhlilk22@yahoo.com")]),_:1}),t(m,null,{default:l(()=>[n("No")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie Harington")]),_:1}),t(m,null,{default:l(()=>[n("January 11, 2014")]),_:1}),t(m,null,{default:l(()=>[n("jamieharingonton@yahoo.com")]),_:1}),t(m,null,{default:l(()=>[n("Yes")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jill Lewis")]),_:1}),t(m,null,{default:l(()=>[n("May 11, 2014")]),_:1}),t(m,null,{default:l(()=>[n("jilsewris22@yahoo.com")]),_:1}),t(m,null,{default:l(()=>[n("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Fixed",description:"A table can use `table-layout: fixed` a special faster form of table rendering that does not resize table cells based on content",code:e.fixedCode},{default:l(()=>[t(w,{fixed:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jimmy")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Denied")]),_:1}),t(m,null,{default:l(()=>[n("Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Stacking",descirption:"A table can specify how it stacks table content responsively",code:e.stackingCode},{default:l(()=>[t(w,{stackable:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,{textAlign:"right"},{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jimmy")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,{textAlign:"right"},{default:l(()=>[n("Requires call")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Denied")]),_:1}),t(m,{textAlign:"right"},{default:l(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Selectable Row",description:"A table can have its rows appear selectable",code:e.selectableRowCode},{default:l(()=>[t(w,{selectable:"",celled:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,{positive:""},{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,{warning:""},{default:l(()=>[t(m,null,{default:l(()=>[n("Jimmy")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("Requires call")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,{negative:""},{default:l(()=>[n("Denied")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Selectable Cell",description:"A table cell can be selectable",code:e.selectableCellCode},{default:l(()=>[t(w,{celled:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,{positive:""},{default:l(()=>[n("Approved")]),_:1}),t(m,{selectable:""},{default:l(()=>[FL]),_:1})]),_:1}),t(p,{warning:""},{default:l(()=>[t(m,null,{default:l(()=>[n("Jimmy")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,{selectable:""},{default:l(()=>[ML]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,{negative:""},{default:l(()=>[n("Denied")]),_:1}),t(m,{selectable:""},{default:l(()=>[NL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Verical Alignment",description:"A table header, row, or cell can adjust its vertical alignment",code:e.verticalAlignmentCode},{default:l(()=>[t(w,{striped:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,{verticalAlign:"top"},{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,{verticalAlign:"top"},{default:l(()=>[n(" Notes "),HL,n(" 1"),OL,n(" 2"),qL]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,{verticalAlign:"bottom"},{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n(" Notes "),GL,n(" 1"),jL,n(" 2"),UL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Text Alignment",description:"A table header, row, or cell can adjust its text alignment",code:e.textAlignCode},{default:l(()=>[t(w,{striped:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,{textAlign:"right"},{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,{textAlign:"center"},{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,{textAlign:"right"},{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("Requires call")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,{textAlign:"right"},{default:l(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Striped",description:"A table can stripe alternate rows of content with a darker color to increase contrast",code:e.stripedCode},{default:l(()=>[t(w,{striped:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Date Joined")]),_:1}),t(u,null,{default:l(()=>[n("E-mail")]),_:1}),t(u,null,{default:l(()=>[n("Called")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John Lilki")]),_:1}),t(m,null,{default:l(()=>[n("September 14, 2013")]),_:1}),t(m,null,{default:l(()=>[n("jhlilk22@yahoo.com")]),_:1}),t(m,null,{default:l(()=>[n("No")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie Harington")]),_:1}),t(m,null,{default:l(()=>[n("January 11, 2014")]),_:1}),t(m,null,{default:l(()=>[n("jamieharingonton@yahoo.com")]),_:1}),t(m,null,{default:l(()=>[n("Yes")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jill Lewis")]),_:1}),t(m,null,{default:l(()=>[n("May 11, 2014")]),_:1}),t(m,null,{default:l(()=>[n("jilsewris22@yahoo.com")]),_:1}),t(m,null,{default:l(()=>[n("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Celled",description:"A table may be divided each row into separate cells",code:e.celledCode},{default:l(()=>[t(w,{celled:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("Requires call")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jill")]),_:1}),t(m,null,{default:l(()=>[n("Denied")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1})]),_:1}),t(T,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("3 People")]),_:1}),t(m,null,{default:l(()=>[n("2 Approved")]),_:1}),t(m)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Basic",description:"A table can reduce its complexity to increase readability",code:e.basicCode},{default:l(()=>[k("div",null,[t(w,{basic:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("Requires call")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jill")]),_:1}),t(m,null,{default:l(()=>[n("Denied")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1}),YL,t(w,{basic:"very"},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("Requires call")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jill")]),_:1}),t(m,null,{default:l(()=>[n("Denied")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(S,{title:"Collapsing",description:"A table can be collapsing, taking up only as much space as its rows",code:e.collapsingCode},{default:l(()=>[t(w,{collapsing:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Age")]),_:1}),t(u,null,{default:l(()=>[n("Gender")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("27")]),_:1}),t(m,null,{default:l(()=>[n("Male")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("32")]),_:1}),t(m,null,{default:l(()=>[n("Other")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jill")]),_:1}),t(m,null,{default:l(()=>[n("Denied")]),_:1}),t(m,null,{default:l(()=>[n("22")]),_:1}),t(m,null,{default:l(()=>[n("Other")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1})]),_:1}),t(T,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("3 People")]),_:1}),t(u,null,{default:l(()=>[n("2 Approved")]),_:1}),t(u),t(u),t(u)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Collapsing Cell",description:"A cell can be collapsing so that it only uses as much space as required",code:e.collapsingCellCode},{default:l(()=>[t(w,null,{default:l(()=>[t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,{collapsing:""},{default:l(()=>[t(A,{name:"folder"}),n(" node_modules ")]),_:1}),t(m,null,{default:l(()=>[n("Initial commit")]),_:1}),t(m,null,{default:l(()=>[n("10 hours ago")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,{collapsing:""},{default:l(()=>[t(A,{name:"folder"}),n(" node_modules ")]),_:1}),t(m,null,{default:l(()=>[n("Initial commit")]),_:1}),t(m,null,{default:l(()=>[n("10 hours ago")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,{collapsing:""},{default:l(()=>[t(A,{name:"folder"}),n(" node_modules ")]),_:1}),t(m,null,{default:l(()=>[n("Initial commit")]),_:1}),t(m,null,{default:l(()=>[n("10 hours ago")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Column Count",description:"A table can specify its column count to divide its content evenly",code:e.columnCountCode},{default:l(()=>[t(w,{columns:5},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Age")]),_:1}),t(u,null,{default:l(()=>[n("Gender")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("27")]),_:1}),t(m,null,{default:l(()=>[n("Male")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("32")]),_:1}),t(m,null,{default:l(()=>[n("Other")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jill")]),_:1}),t(m,null,{default:l(()=>[n("Denied")]),_:1}),t(m,null,{default:l(()=>[n("22")]),_:1}),t(m,null,{default:l(()=>[n("Other")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1})]),_:1}),t(T,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("3 People")]),_:1}),t(u,null,{default:l(()=>[n("2 Approved")]),_:1}),t(u),t(u),t(u)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Column Width",description:"Column Width",code:e.columnWidthCode},{default:l(()=>[t(w,null,{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,{width:10},{default:l(()=>[n("Name")]),_:1}),t(u,{width:6},{default:l(()=>[n("Status")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Colored",description:"A table can be given a color to distinguish it from other tables",code:e.coloredCode},{default:l(()=>[t(w,{color:"red"},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Food")]),_:1}),t(u,null,{default:l(()=>[n("Calories")]),_:1}),t(u,null,{default:l(()=>[n("Protein")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Apples")]),_:1}),t(m,null,{default:l(()=>[n("200")]),_:1}),t(m,null,{default:l(()=>[n("0g")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Orange")]),_:1}),t(m,null,{default:l(()=>[n("310")]),_:1}),t(m,null,{default:l(()=>[n("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Inverted",description:"A table's colors can be inverted",code:e.invertedCode},{default:l(()=>[t(w,{inverted:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Food")]),_:1}),t(u,null,{default:l(()=>[n("Calories")]),_:1}),t(u,null,{default:l(()=>[n("Protein")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Apples")]),_:1}),t(m,null,{default:l(()=>[n("200")]),_:1}),t(m,null,{default:l(()=>[n("0g")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Orange")]),_:1}),t(m,null,{default:l(()=>[n("310")]),_:1}),t(m,null,{default:l(()=>[n("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Padded",description:"A table may sometimes need to be more padded for legibility",code:e.paddedCode},{default:l(()=>[k("div",null,[t(w,{padded:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1}),t(w,{padded:"very"},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(S,{title:"Compact",description:"A table may sometimes need to be more compact to make more rows visible at a time",code:e.compactCode},{default:l(()=>[k("div",null,[t(w,{compact:""},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("Requires call")]),_:1})]),_:1})]),_:1})]),_:1}),t(w,{compact:"very"},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("Requires call")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(S,{title:"Size",description:"A table can also be small or large",code:e.sizeCode},{default:l(()=>[t(w,{size:"small"},{default:l(()=>[t(g,null,{default:l(()=>[t(p,null,{default:l(()=>[t(u,null,{default:l(()=>[n("Name")]),_:1}),t(u,null,{default:l(()=>[n("Status")]),_:1}),t(u,null,{default:l(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("John")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jamie")]),_:1}),t(m,null,{default:l(()=>[n("Approved")]),_:1}),t(m,null,{default:l(()=>[n("Requires call")]),_:1})]),_:1}),t(p,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Jill")]),_:1}),t(m,null,{default:l(()=>[n("Denied")]),_:1}),t(m,null,{default:l(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const WL=He(VL,[["render",JL]]),KL=V({name:"AccordionDoc",components:{DocPageHeader:Rt,DocExample:gt},setup(){return{accordionCode:`<sui-accordion>
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
</sui-segment>`}}}),XL=k("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),QL=k("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),ZL=k("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),eD=k("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),tD=k("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),iD=k("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),lD=k("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),aD=k("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),nD=k("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),oD=k("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),sD=k("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),rD=k("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),uD=k("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),cD=k("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),dD=k("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),pD=k("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),mD=k("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),fD=k("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),gD=k("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),hD=k("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1);function _D(e,i,a,o,s,c){const d=B("doc-page-header"),f=B("sui-header"),u=B("sui-accordion-tab"),p=B("sui-accordion"),g=B("doc-example"),m=B("sui-segment"),_=B("sui-container");return y(),ye("div",null,[t(d,{title:"Accordion",sub:"An accordion allows users to toggle the display of sections of content"}),t(_,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(g,{title:"Accordion",description:"A standard accordion",code:e.accordionCode},{default:l(()=>[t(p,null,{default:l(()=>[t(u,{title:"What is a dog?"},{default:l(()=>[XL]),_:1}),t(u,{title:"What kinds of dogs are there?"},{default:l(()=>[QL]),_:1}),t(u,{title:"How do you acquire a dog?"},{default:l(()=>[ZL,eD]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Styled",description:"A styled accordion adds basic formatting",code:e.styledCode},{default:l(()=>[t(p,{styled:""},{default:l(()=>[t(u,{title:"What is a dog?"},{default:l(()=>[tD]),_:1}),t(u,{title:"What kinds of dogs are there?"},{default:l(()=>[iD]),_:1}),t(u,{title:"How do you acquire a dog?"},{default:l(()=>[lD,aD]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Variations")]),_:1}),t(g,{title:"Fluid",description:"An accordion can take up the width of its container",code:e.fluidCode},{default:l(()=>[t(p,{fluid:"",styled:""},{default:l(()=>[t(u,{title:"What is a dog?"},{default:l(()=>[nD]),_:1}),t(u,{title:"What kinds of dogs are there?"},{default:l(()=>[oD]),_:1}),t(u,{title:"How do you acquire a dog?"},{default:l(()=>[sD,rD]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Inverted",description:"An accordion can be formatted to appear on dark backgrounds",code:e.invertedCode},{default:l(()=>[t(m,{inverted:""},{default:l(()=>[t(p,{inverted:""},{default:l(()=>[t(u,{title:"What is a dog?"},{default:l(()=>[uD]),_:1}),t(u,{title:"What kinds of dogs are there?"},{default:l(()=>[cD]),_:1}),t(u,{title:"How do you acquire a dog?"},{default:l(()=>[dD,pD]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Usage")]),_:1}),t(g,{title:"Multiple",description:"An accordion can have multiple panels open at the same time",code:e.multipleCode},{default:l(()=>[t(p,{multiple:""},{default:l(()=>[t(u,{title:"What is a dog?"},{default:l(()=>[mD]),_:1}),t(u,{title:"What kinds of dogs are there?"},{default:l(()=>[fD]),_:1}),t(u,{title:"How do you acquire a dog?"},{default:l(()=>[gD,hD]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const bD=He(KL,[["render",_D]]),vD=V({name:"CalendarDoc",components:{DocPageHeader:Rt,DocExample:gt},setup(){return{calendar1:G(null),calendarCode:'<sui-calendar v-model="calendar1" placeholder="Date/Time" />'}}});function SD(e,i,a,o,s,c){const d=B("doc-page-header"),f=B("sui-header"),u=B("sui-calendar"),p=B("doc-example"),g=B("sui-container");return y(),ye("div",null,[t(d,{title:"Calendar",sub:"A calendar allows users to select any date or time"}),t(g,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(p,{title:"Calendar",description:"A standard calendar",code:e.calendarCode},{default:l(()=>[t(u,{modelValue:e.calendar1,"onUpdate:modelValue":i[0]||(i[0]=m=>e.calendar1=m),placeholder:"Date/Time"},null,8,["modelValue"])]),_:1},8,["code"])]),_:1})])}const yD=He(vD,[["render",SD]]),wD=V({name:"PropertyListTable",props:{properties:Array}});function CD(e,i,a,o,s,c){const d=B("sui-table-header-cell"),f=B("sui-table-row"),u=B("sui-table-header"),p=B("sui-table-cell"),g=B("sui-table-body"),m=B("sui-table");return y(),x(m,{celled:""},{default:l(()=>[t(u,null,{default:l(()=>[t(f,null,{default:l(()=>[t(d,null,{default:l(()=>[n("Name")]),_:1}),t(d,null,{default:l(()=>[n("Type")]),_:1}),t(d,null,{default:l(()=>[n("Default")]),_:1}),t(d,null,{default:l(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(g,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.properties,_=>(y(),x(f,{key:_.name},{default:l(()=>[t(p,null,{default:l(()=>[n($e(_.name),1)]),_:2},1024),t(p,null,{default:l(()=>[n($e(_.type),1)]),_:2},1024),t(p,null,{default:l(()=>[n($e(_.default),1)]),_:2},1024),t(p,null,{default:l(()=>[n($e(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const xn=He(wD,[["render",CD]]),AD=V({name:"CheckboxDoc",components:{DocPageHeader:Rt,DocExample:gt,PropertyListTable:xn},setup(){const e=G(!1),i='<sui-checkbox label="Make my profile visible" v-model="checked" />',a=G([]),o=`<sui-checkbox label="Apple" value="Apple" v-model="selected"  />
<sui-checkbox label="Banana" value="Banana" v-model="selected"  />
<sui-checkbox label="Chocolate" value="Chocolate" v-model="selected"  />`,s=G(!1),c='<sui-checkbox toggle v-model="toggle" />',d=G(!1);return{checked:e,checkboxCode:i,selected:a,multipleCode:o,toggle:s,toggleCode:c,slider:d,sliderCode:'<sui-checkbox slider v-model="slider" />',properties:[{name:"label",type:"string",default:"null",description:"Label of the checkbox."},{name:"modelValue",type:"any",default:"null",description:"Value binding of the checkbox."},{name:"value",type:"any",default:"null",description:"Value of the checkbox."}],events:[{name:"change",description:"Callback to invoke when checkbox value is changed."},{name:"click",description:"Callback to invoke when checkbox is clicked."}]}}}),xD={class:"ui form"},kD={class:"grouped fields"},BD={class:"field"},$D={class:"field"},TD={class:"field"};function LD(e,i,a,o,s,c){const d=B("doc-page-header"),f=B("sui-header"),u=B("sui-checkbox"),p=B("doc-example"),g=B("property-list-table"),m=B("sui-table-header-cell"),_=B("sui-table-row"),w=B("sui-table-header"),S=B("sui-table-cell"),A=B("sui-table-body"),T=B("sui-table"),I=B("sui-container");return y(),ye("div",null,[t(d,{title:"Checkbox",sub:"A checkbox allows a user to select a value from a small set of options, often binary"}),t(I,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(p,{title:"Checkbox",description:"A standard checkbox",code:e.checkboxCode},{default:l(()=>[t(u,{label:"Make my profile visible",modelValue:e.checked,"onUpdate:modelValue":i[0]||(i[0]=h=>e.checked=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(p,{title:"Multiple",description:"Multiple mode is enabled by default, v-model property refers to an array to bind the selected values",code:e.multipleCode},{default:l(()=>[k("div",xD,[k("div",kD,[k("div",BD,[t(u,{label:"Apple",value:"Apple",modelValue:e.selected,"onUpdate:modelValue":i[1]||(i[1]=h=>e.selected=h)},null,8,["modelValue"])]),k("div",$D,[t(u,{label:"Banana",value:"Banana",modelValue:e.selected,"onUpdate:modelValue":i[2]||(i[2]=h=>e.selected=h)},null,8,["modelValue"])]),k("div",TD,[t(u,{label:"Chocolate",value:"Chocolate",modelValue:e.selected,"onUpdate:modelValue":i[3]||(i[3]=h=>e.selected=h)},null,8,["modelValue"])])])]),n(" selected : "+$e(e.selected),1)]),_:1},8,["code"]),t(p,{title:"Toggle",description:"A checkbox can toggle",code:e.toggleCode},{default:l(()=>[t(u,{toggle:"",modelValue:e.toggle,"onUpdate:modelValue":i[4]||(i[4]=h=>e.toggle=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(p,{title:"Slider",description:"A checkbox can look like a slider",code:e.sliderCode},{default:l(()=>[t(u,{slider:"",modelValue:e.slider,"onUpdate:modelValue":i[5]||(i[5]=h=>e.slider=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Properties")]),_:1}),t(g,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Events")]),_:1}),t(T,{celled:""},{default:l(()=>[t(w,null,{default:l(()=>[t(_,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Name")]),_:1}),t(m,null,{default:l(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(A,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.events,h=>(y(),x(_,{key:h.name},{default:l(()=>[t(S,null,{default:l(()=>[n($e(h.name),1)]),_:2},1024),t(S,null,{default:l(()=>[n($e(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const DD=He(AD,[["render",LD]]),ID=V({name:"DimmerDoc",components:{DocPageHeader:Rt,DocExample:gt},setup(){const e=`<sui-dimmer-dimmable>
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
</sui-dimmer-dimmable>`,a=G(!1);return{dimmerCode:e,contentDimmerCode:i,active:a,pageDimmerCode:`<div>
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
</div>`}}});function ED(e,i,a,o,s,c){const d=B("doc-page-header"),f=B("sui-header"),u=B("sui-image"),p=B("sui-image-group"),g=B("sui-dimmer"),m=B("sui-dimmer-dimmable"),_=B("doc-example"),w=B("sui-icon"),S=B("sui-button"),A=B("sui-header-subheader"),T=B("sui-container");return y(),ye("div",null,[t(d,{title:"Dimmer",sub:"A dimmer hides distractions to focus attention on particular content"}),t(T,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(_,{title:"Dimmer",description:"A simple dimmer displays no content",code:e.dimmerCode},{default:l(()=>[t(m,null,{default:l(()=>[t(f,{as:"h3"},{default:l(()=>[n("Overlayable Section")]),_:1}),t(p,{size:"small"},{default:l(()=>[t(u,{src:Te}),t(u,{src:Te}),t(u,{src:Te})]),_:1}),t(u,{size:"medium",src:ei}),t(g,{active:""})]),_:1})]),_:1},8,["code"]),t(_,{title:"Content Dimmer",description:"A dimmer can display content",code:e.contentDimmerCode},{default:l(()=>[t(m,null,{default:l(()=>[t(f,{as:"h3"},{default:l(()=>[n("Overlayable Section")]),_:1}),t(p,{size:"small"},{default:l(()=>[t(u,{src:Te}),t(u,{src:Te}),t(u,{src:Te})]),_:1}),t(u,{size:"medium",src:ei}),t(g,{active:""},{default:l(()=>[t(f,{as:"h2",icon:"",inverted:""},{default:l(()=>[t(w,{name:"heart"}),n(" Dimmed Message! ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Page Dimmer",description:"A dimmer can be formatted to be fixed to the page",code:e.pageDimmerCode},{default:l(()=>[k("div",null,[t(S,{labeled:"",icon:"",onClick:i[0]||(i[0]=I=>e.active=!0)},{default:l(()=>[t(w,{name:"plus"}),n(" Show ")]),_:1}),t(g,{active:e.active,page:"",onClick:i[1]||(i[1]=I=>e.active=!1)},{default:l(()=>[t(f,{as:"h2",icon:"",inverted:""},{default:l(()=>[t(w,{name:"heart"}),n(" Dimmed Message! "),t(A,null,{default:l(()=>[n("Dimmer sub-header")]),_:1})]),_:1})]),_:1},8,["active"])])]),_:1},8,["code"])]),_:1})])}const RD=He(ID,[["render",ED]]),PD=V({name:"DropdownDoc",components:{DocPageHeader:Rt,DocExample:gt},setup(){const e=`<sui-dropdown text="File">
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
</sui-dropdown>`,i=G(null),a=`<sui-dropdown
  selection
  placeholder="Pet"
  v-model="selected1"
  :options="['Cat', 'Dog', 'Bird', 'Rabbit', 'Squirrel', 'Horse']"
/>`,o=G(null),s=[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"},{value:"ad",flag:"ad",text:"Andorra"},{value:"ao",flag:"ao",text:"Angola"},{value:"ai",flag:"ai",text:"Anguilla"},{value:"ag",flag:"ag",text:"Antigua"},{value:"ar",flag:"ar",text:"Argentina"},{value:"am",flag:"am",text:"Armenia"},{value:"aw",flag:"aw",text:"Aruba"},{value:"au",flag:"au",text:"Australia"},{value:"at",flag:"at",text:"Austria"},{value:"az",flag:"az",text:"Azerbaijan"},{value:"bs",flag:"bs",text:"Bahamas"},{value:"bh",flag:"bh",text:"Bahrain"},{value:"bd",flag:"bd",text:"Bangladesh"},{value:"bb",flag:"bb",text:"Barbados"},{value:"by",flag:"by",text:"Belarus"},{value:"be",flag:"be",text:"Belgium"},{value:"bz",flag:"bz",text:"Belize"},{value:"bj",flag:"bj",text:"Benin"}],c=`<sui-dropdown
  search
  selection
  fluid
  v-model="selected2"
  :options="searchSelectionOptions"
  placeholder="Select Country"
/>`,d=G(null),f=["Arabic","Chinese","Danish","Dutch","English","French","German","Greek","Hungarian","Italian","Japanese","Korean","Lithuanian","Persian","Polish","Portuguese","Russian","Spanish","Swedish","Turkish","Vietnamese"],u=`<sui-dropdown
  clearable
  selection
  v-model="selected3"
  :options="clearableSelectionOptions"
  placeholder="Select Language"
/>`,p=G(null),g=`<sui-dropdown
  selection
  multiple
  fluid
  v-model="selected4"
  placeholder="Skills"
  :options="['Angular', 'CSS', 'Ember', 'HTML', 'Javascript', 'NodeJS']"
/>`,m=G(null),_=`<sui-dropdown
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
/>`,w=G(null),S=`<sui-dropdown
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
/>`,A=G(null),T=`<sui-dropdown
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
/>`,I=G({text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}});return{dropdownCode:e,selected1:i,selectionCode:a,selected2:o,searchSelectionOptions:s,searchSelectionCode:c,selected3:d,clearableSelectionOptions:f,clearableSelectionCode:u,selected4:p,multipleCode:g,selected5:m,multipleCode2:_,selected6:w,searchDropdownCode:S,selected7:A,searchInMenuCode:T,selected8:I,inlineCode:`<span>
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
</sui-button-group>`}}});function zD(e,i,a,o,s,c){const d=B("doc-page-header"),f=B("sui-header"),u=B("sui-dropdown-item"),p=B("sui-divider"),g=B("sui-dropdown-menu"),m=B("sui-dropdown"),_=B("doc-example"),w=B("sui-button"),S=B("sui-button-group"),A=B("sui-container");return y(),ye("div",null,[t(d,{title:"Dropdown",sub:"A dropdown allows a user to select a value from a series of options"}),t(A,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(_,{title:"Dropdown",description:"A dropdown",code:e.dropdownCode},{default:l(()=>[t(m,{text:"File"},{default:l(()=>[t(g,null,{default:l(()=>[t(u,{text:"New"}),t(u,{text:"Open...",description:"ctrl + o"}),t(u,{text:"Save as...",description:"ctrl + s"}),t(u,{text:"Rename",description:"ctrl + r"}),t(u,{text:"Make a copy"}),t(u,{icon:"folder",text:"Move to folder"}),t(u,{icon:"trash",text:"Move to trash"}),t(p),t(u,{text:"Download As..."}),t(u,{text:"Publish To Web"}),t(u,{text:"E-mail Collaborators"})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Selection",description:"A dropdown can be used to select between choices in a form",code:e.selectionCode},{default:l(()=>[t(m,{selection:"",placeholder:"Pet",modelValue:e.selected1,"onUpdate:modelValue":i[0]||(i[0]=T=>e.selected1=T),options:["Cat","Dog","Bird","Rabbit","Squirrel","Horse"]},null,8,["modelValue"])]),_:1},8,["code"]),t(_,{title:"Search Selection",description:"A selection dropdown can allow a user to search through a large list of choices",code:e.searchSelectionCode},{default:l(()=>[t(m,{search:"",selection:"",fluid:"",modelValue:e.selected2,"onUpdate:modelValue":i[1]||(i[1]=T=>e.selected2=T),options:e.searchSelectionOptions,placeholder:"Select Country"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(_,{title:"Clearable Selection",description:"A clearable selection dropdown can allow a user to cancel to cancel a previous selection",code:e.clearableSelectionCode},{default:l(()=>[t(m,{clearable:"",selection:"",modelValue:e.selected3,"onUpdate:modelValue":i[2]||(i[2]=T=>e.selected3=T),options:e.clearableSelectionOptions,placeholder:"Select Language"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(_,{title:"Multiple Selection",description:"A selection dropdown can allow multiple selections",code:e.multipleCode},{default:l(()=>[t(m,{selection:"",multiple:"",fluid:"",modelValue:e.selected4,"onUpdate:modelValue":i[3]||(i[3]=T=>e.selected4=T),placeholder:"Skills",options:["Angular","CSS","Ember","HTML","Javascript","NodeJS"]},null,8,["modelValue"])]),_:1},8,["code"]),t(_,{code:e.multipleCode2},{default:l(()=>[t(m,{selection:"",multiple:"",fluid:"",search:"",modelValue:e.selected5,"onUpdate:modelValue":i[4]||(i[4]=T=>e.selected5=T),placeholder:"Skills",options:[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"}]},null,8,["modelValue"])]),_:1},8,["code"]),t(_,{title:"Search Dropdown",description:"A dropdown can be searchable",code:e.searchDropdownCode},{default:l(()=>[t(m,{button:"",floating:"",labeled:"",search:"",icon:"world",modelValue:e.selected6,"onUpdate:modelValue":i[5]||(i[5]=T=>e.selected6=T),options:[{text:"Arabic",value:"Arabic"},{text:"Chinese",value:"Chinese"},{text:"Danish",value:"Danish"},{text:"Dutch",value:"Dutch"},{text:"English",value:"English"},{text:"French",value:"French"},{text:"German",value:"German"},{text:"Greek",value:"Greek"},{text:"Hungarian",value:"Hungarian"},{text:"Italian",value:"Italian"},{text:"Japanese",value:"Japanese"},{text:"Korean",value:"Korean"},{text:"Lithuanian",value:"Lithuanian"},{text:"Persian",value:"Persian"},{text:"Polish",value:"Polish"},{text:"Portuguese",value:"Portuguese"},{text:"Russian",value:"Russian"},{text:"Spanish",value:"Spanish"},{text:"Swedish",value:"Swedish"},{text:"Turkish",value:"Turkish"},{text:"Vietnamese",value:"Vietnamese"}],text:"Select Language"},null,8,["modelValue"])]),_:1},8,["code"]),t(_,{title:"Search In-Menu",description:"A dropdown can include a search prompt inside its menu",code:e.searchInMenuCode},{default:l(()=>[t(m,{text:"Filter Posts",icon:"filter",floating:"",labeled:"",button:"",searchInMenu:"",modelValue:e.selected7,"onUpdate:modelValue":i[6]||(i[6]=T=>e.selected7=T),options:[{text:"Important",value:"Important",label:{color:"red",empty:!0,circular:!0}},{text:"Announcement",value:"Announcement",label:{color:"blue",empty:!0,circular:!0}},{text:"Cannot Fix",value:"Cannot Fix",label:{color:"black",empty:!0,circular:!0}},{text:"News",value:"News",label:{color:"purple",empty:!0,circular:!0}},{text:"Enhancement",value:"Enhancement",label:{color:"orange",empty:!0,circular:!0}},{text:"Change Declined",value:"Change Declined",label:{empty:!0,circular:!0}},{text:"Off Topic",value:"Off Topic",label:{color:"yellow",empty:!0,circular:!0}},{text:"Interesting",value:"Interesting",label:{color:"pink",empty:!0,circular:!0}},{text:"Discussion",value:"Discussion",label:{color:"green",empty:!0,circular:!0}}]},null,8,["modelValue"])]),_:1},8,["code"]),t(_,{title:"Inline",description:"A dropdown can be formatted to appear inline in other content",code:e.inlineCode},{default:l(()=>[k("span",null,[n(" Show me posts by "),t(m,{inline:"",modelValue:e.selected8,"onUpdate:modelValue":i[7]||(i[7]=T=>e.selected8=T),options:[{text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}},{text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/images/avatar/small/elliot.jpg"}},{text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/images/avatar/small/stevie.jpg"}},{text:"Christian",value:"Christian",image:{avatar:!0,src:"/images/avatar/small/christian.jpg"}}]},null,8,["modelValue","options"])])]),_:1},8,["code"]),t(_,{title:"Pointing",description:"A dropdown can be formatted so that its menu is pointing",code:e.pointingCode},{default:l(()=>[t(m,{icon:"wrench",button:"",pointing:"top left"},{default:l(()=>[t(g,null,{default:l(()=>[t(u,{text:"New"}),t(u,{text:"Save As"}),t(u,{text:"Edit"})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Floating",description:"A dropdown menu can appear to be floating below an element",code:e.floatingCode},{default:l(()=>[t(S,{color:"teal"},{default:l(()=>[t(w,null,{default:l(()=>[n("Save")]),_:1}),t(m,{floating:"",button:"",icon:"dropdown"},{default:l(()=>[t(g,null,{default:l(()=>[t(u,{text:"Edit Post",icon:"edit"}),t(u,{text:"Remove Post",icon:"delete"}),t(u,{text:"Hide Post",icon:"hide"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const VD=He(PD,[["render",zD]]),FD=V({name:"EmbedDoc",components:{DocPageHeader:Rt,DocExample:gt},setup(){return{youtubeCode:`<sui-embed
  id="O6Xo21L0ybE"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`,aspectRatioCode:`<sui-embed
  aspectRatio="4:3"
  id="HTZudKi36bo"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`}}});function MD(e,i,a,o,s,c){const d=B("doc-page-header"),f=B("sui-header"),u=B("sui-embed"),p=B("doc-example"),g=B("sui-container");return y(),ye("div",null,[t(d,{title:"Embed",sub:"An embed displays content from other websites like YouTube videos or Google Maps"}),t(g,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(p,{title:"YouTube",description:"An embed can be used to display YouTube Content",code:e.youtubeCode},{default:l(()=>[t(u,{id:"O6Xo21L0ybE",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Variations")]),_:1}),t(p,{title:"Aspect Ratio",description:"An embed can specify an alternative aspect ratio",code:e.aspectRatioCode},{default:l(()=>[t(u,{aspectRatio:"4:3",id:"HTZudKi36bo",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"])]),_:1})])}const ND=He(FD,[["render",MD]]),HD=k("p",null," We've found the following gravatar image associated with your e-mail address. ",-1),OD=k("p",null,"Is it okay to use this photo?",-1),qD=`<template>
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
<\/script>`,GD={__name:"ModalDoc",setup(e){const i=G(!1);return(a,o)=>(y(),x(D,{label:"Modal",code:qD},{description:l(()=>[n(" A standard modal ")]),example:l(()=>[t(r(P),{onClick:o[0]||(o[0]=s=>i.value=!0)},{default:l(()=>[n("Show Modal")]),_:1}),t(r(hs),{modelValue:i.value,"onUpdate:modelValue":o[2]||(o[2]=s=>i.value=s)},{default:l(()=>[t(r(vs),null,{default:l(()=>[n("Select a Photo")]),_:1}),t(r(bs),{image:""},{default:l(()=>[t(r(oe),{wrapped:"",size:"medium",src:"/vue-fomantic-ui/images/avatar/large/rachel.png"}),t(r(md),null,{default:l(()=>[t(r(me),null,{default:l(()=>[n("Default Profile Image")]),_:1}),HD,OD]),_:1})]),_:1}),t(r(_s),null,{default:l(()=>[t(r(P),{positive:"",onClick:o[1]||(o[1]=s=>i.value=!1)},{default:l(()=>[n("OK")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},jD=k("p",null," Your inbox is getting full, would you like us to enable automatic archiving of old messages? ",-1),UD=`<template>
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
<\/script>`,YD={__name:"BasicDoc",setup(e){const i=G(!1);return(a,o)=>(y(),x(D,{label:"Basic",code:UD},{description:l(()=>[n(" A modal can reduce its complexity ")]),example:l(()=>[t(r(P),{onClick:o[0]||(o[0]=s=>i.value=!0)},{default:l(()=>[n("Basic Modal")]),_:1}),t(r(hs),{basic:"",modelValue:i.value,"onUpdate:modelValue":o[2]||(o[2]=s=>i.value=s)},{default:l(()=>[t(r(vs),{icon:""},{default:l(()=>[t(r(Y),{name:"archive"}),n(" Archive Old Messages")]),_:1}),t(r(bs),null,{default:l(()=>[jD]),_:1}),t(r(_s),null,{default:l(()=>[t(r(P),{basic:"",color:"red",inverted:"",icon:"remove",content:"No",onClick:o[1]||(o[1]=s=>i.value=!1)}),t(r(P),{basic:"",color:"green",icon:"checkmark",content:"Yes"})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},JD={__name:"Modal",setup(e){const i=[{id:"modal",label:"Modal",category:"Types",component:GD},{id:"basic",label:"Basic",category:"Types",component:YD}];return(a,o)=>(y(),x(ot,{title:"Modal",description:"A modal displays content that temporarily blocks interactions with the main view of a site","component-docs":i}))}},WD="/vue-fomantic-ui/images/movies/totoro-horizontal.jpg",KD=V({name:"PopupDoc",components:{DocPageHeader:Rt,DocExample:gt},setup(){const e=G(null),i=`<sui-button icon ref="trigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup :trigger="trigger">
  Add users to your feed
</sui-popup>`,a=G(null),o=G(null),s=G(null),c=`<sui-image avatar src="/images/avatar/small/elliot.jpg" ref="titledTrigger1" />
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
/>`,d=G(null),f=`<sui-card ref="triggerTriger">
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
</sui-popup>`,u=G(null),p=`<sui-button icon ref="basicTrigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup
  :trigger="basicTrigger"
  basic
  content="The default theme's basic popup removes the pointing arrow."
/>`,g=G(null),m=G(null),_=G(null),w=`<sui-icon name="heart" circular ref="wideTrigger1" />
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
</sui-popup>`,S=G(null),A=G(null),T=G(null),I=G(null),h=G(null),b=G(null),C=G(null),$=G(null),E=`<sui-button ref="positionTrigger1">Top Left</sui-button>
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
<sui-popup :trigger="positionTrigger8" position="left center" content="I am positioned to the left center" />`,F=G(null),N=`<sui-button ref="flowingTrigger">Show Flowing Popup</sui-button>
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
</sui-popup>`,z=G(null),j=G(null),Z=G(null),W=G(null),fe=G(null),Be=`<sui-icon name="heart" circular link ref="sizeTrigger1" />
<sui-icon name="heart" circular link ref="sizeTrigger2" />
<sui-icon name="heart" circular link ref="sizeTrigger3" />
<sui-icon name="heart" circular link ref="sizeTrigger4" />
<sui-icon name="heart" circular link ref="sizeTrigger5" />

<sui-popup size="mini" content="Hello. This is a mini popup" :trigger="sizeTrigger1" />
<sui-popup size="tiny" content="Hello. This is a tiny popup" :trigger="sizeTrigger2" />
<sui-popup size="small" content="Hello. This is a small popup" :trigger="sizeTrigger3" />
<sui-popup size="large" content="Hello. This is a large popup" :trigger="sizeTrigger4" />
<sui-popup size="huge" content="Hello. This is a huge popup" :trigger="sizeTrigger5" />`,U=G(null),K=G(null);return{popupTrigger:e,popupCode:i,titledTrigger1:a,titledTrigger2:o,titledTrigger3:s,titledCode:c,triggerTriger:d,triggerCode:f,basicTrigger:u,basicCode:p,wideTrigger1:g,wideTrigger2:m,wideTrigger3:_,wideCode:w,positionTrigger1:S,positionTrigger2:A,positionTrigger3:T,positionTrigger4:I,positionTrigger5:h,positionTrigger6:b,positionTrigger7:C,positionTrigger8:$,positionCode:E,flowingTrigger:F,flowingCode:N,sizeTrigger1:z,sizeTrigger2:j,sizeTrigger3:Z,sizeTrigger4:W,sizeTrigger5:fe,sizeCode:Be,invertedTrigger1:U,invertedTrigger2:K,invertedCode:`<sui-icon name="heart" circular ref="invertedTrigger1" />
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
/>`}}}),XD=k("p",null,[k("b",null,"2"),n(" projects, $10 a month ")],-1),QD=k("p",null,[k("b",null,"5"),n(" projects, $20 a month ")],-1),ZD=k("p",null,[k("b",null,"8"),n(" projects, $25 a month ")],-1);function eI(e,i,a,o,s,c){const d=B("doc-page-header"),f=B("sui-header"),u=B("sui-icon"),p=B("sui-button"),g=B("sui-popup"),m=B("doc-example"),_=B("sui-image"),w=B("sui-card-header"),S=B("sui-card-description"),A=B("sui-card-content"),T=B("sui-card"),I=B("sui-rating"),h=B("sui-divider"),b=B("sui-grid-column"),C=B("sui-grid"),$=B("sui-container");return y(),ye("div",null,[t(d,{title:"Popup",sub:"A popup displays additional information on top of a page"}),t($,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(m,{title:"Popup",description:"An element can specify popup content to appear",code:e.popupCode},{default:l(()=>[t(p,{icon:"",ref:"popupTrigger"},{default:l(()=>[t(u,{name:"add"})]),_:1},512),t(g,{trigger:e.popupTrigger},{default:l(()=>[n(" Add users to your feed ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Titled",description:"An element can specify popup content with a title",code:e.titledCode},{default:l(()=>[t(_,{avatar:"",src:da,ref:"titledTrigger1"},null,512),t(_,{avatar:"",src:Lo,ref:"titledTrigger2"},null,512),t(_,{avatar:"",src:Rd,ref:"titledTrigger3"},null,512),t(g,{trigger:e.titledTrigger1,header:"Elliot Fu",content:"Elliot has been a member since July 2012"},null,8,["trigger"]),t(g,{trigger:e.titledTrigger2,header:"Stevie Feliciano",content:"Stevie has been a member since August 2013"},null,8,["trigger"]),t(g,{trigger:e.titledTrigger3,header:"Matt",content:"Matt has been a member since July 2014"},null,8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Trigger",description:"A trigger can be complex element",code:e.triggerCode},{default:l(()=>[t(T,{ref:"triggerTriger"},{default:l(()=>[t(_,{src:WD}),t(A,null,{default:l(()=>[t(w,null,{default:l(()=>[n("My Neighbor Totoro")]),_:1}),t(S,null,{default:l(()=>[n(" Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits. ")]),_:1})]),_:1})]),_:1},512),t(g,{trigger:e.triggerTriger,header:"User Rating"},{default:l(()=>[t(I,{icon:"star",defaultRating:3,maxRating:4})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Variations")]),_:1}),t(m,{title:"Basic",description:"A popup can provide more basic formatting",code:e.basicCode},{default:l(()=>[t(p,{icon:"",ref:"basicTrigger"},{default:l(()=>[t(u,{name:"add"})]),_:1},512),t(g,{trigger:e.basicTrigger,basic:"",content:"The default theme's basic popup removes the pointing arrow."},null,8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Position",description:"A popup can be position around its trigger",code:e.positionCode},{default:l(()=>[t(p,{ref:"positionTrigger1"},{default:l(()=>[n("Top Left")]),_:1},512),t(p,{ref:"positionTrigger2"},{default:l(()=>[n("Top Center")]),_:1},512),t(p,{ref:"positionTrigger3"},{default:l(()=>[n("Top Right")]),_:1},512),t(h),t(p,{ref:"positionTrigger4"},{default:l(()=>[n("Bottom Left")]),_:1},512),t(p,{ref:"positionTrigger5"},{default:l(()=>[n("Bottom Center")]),_:1},512),t(p,{ref:"positionTrigger6"},{default:l(()=>[n("Bottom Right")]),_:1},512),t(h),t(p,{ref:"positionTrigger7"},{default:l(()=>[n("Right Center")]),_:1},512),t(p,{ref:"positionTrigger8"},{default:l(()=>[n("Left Center")]),_:1},512),t(g,{trigger:e.positionTrigger1,position:"top left",content:"I am positioned to the top left"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger2,position:"top center",content:"I am positioned to the top center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger3,position:"top right",content:"I am positioned to the top right"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger4,position:"bottom left",content:"I am positioned to the bottom left"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger5,position:"bottom center",content:"I am positioned to the bottom center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger6,position:"bottom right",content:"I am positioned to the bottom right"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger7,position:"right center",content:"I am positioned to the right center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger8,position:"left center",content:"I am positioned to the left center"},null,8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Flowing",description:"A popup can have no maximum width and continue to flow to fit its content",code:e.flowingCode},{default:l(()=>[t(p,{ref:"flowingTrigger"},{default:l(()=>[n("Show Flowing Popup")]),_:1},512),t(g,{trigger:e.flowingTrigger,flowing:""},{default:l(()=>[t(C,{centered:"",divided:"",columns:3},{default:l(()=>[t(b,{textAlign:"center"},{default:l(()=>[t(f,{as:"h4"},{default:l(()=>[n("Basic Plan")]),_:1}),XD,t(p,null,{default:l(()=>[n("Choose")]),_:1})]),_:1}),t(b,{textAlign:"center"},{default:l(()=>[t(f,{as:"h4"},{default:l(()=>[n("Business Plan")]),_:1}),QD,t(p,null,{default:l(()=>[n("Choose")]),_:1})]),_:1}),t(b,{textAlign:"center"},{default:l(()=>[t(f,{as:"h4"},{default:l(()=>[n("Premium Plan")]),_:1}),ZD,t(p,null,{default:l(()=>[n("Choose")]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Size",description:"A popup can vary in size",code:e.sizeCode},{default:l(()=>[t(u,{name:"heart",circular:"",link:"",ref:"sizeTrigger1"},null,512),t(u,{name:"heart",circular:"",link:"",ref:"sizeTrigger2"},null,512),t(u,{name:"heart",circular:"",link:"",ref:"sizeTrigger3"},null,512),t(u,{name:"heart",circular:"",link:"",ref:"sizeTrigger4"},null,512),t(u,{name:"heart",circular:"",link:"",ref:"sizeTrigger5"},null,512),t(g,{size:"mini",content:"Hello. This is a mini popup",trigger:e.sizeTrigger1},null,8,["trigger"]),t(g,{size:"tiny",content:"Hello. This is a tiny popup",trigger:e.sizeTrigger2},null,8,["trigger"]),t(g,{size:"small",content:"Hello. This is a small popup",trigger:e.sizeTrigger3},null,8,["trigger"]),t(g,{size:"large",content:"Hello. This is a large popup",trigger:e.sizeTrigger4},null,8,["trigger"]),t(g,{size:"huge",content:"Hello. This is a huge popup",trigger:e.sizeTrigger5},null,8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Wide",description:"A popup can be extra wide to allow for longer content",code:e.wideCode},{default:l(()=>[t(u,{name:"heart",circular:"",ref:"wideTrigger1"},null,512),t(u,{name:"heart",circular:"",ref:"wideTrigger2"},null,512),t(u,{name:"heart",circular:"",ref:"wideTrigger3"},null,512),t(g,{trigger:e.wideTrigger1},{default:l(()=>[n(" Hello. This is a regular pop-up which does not allow for lots of content. You cannot fit a lot of words here as the paragraphs will be pretty narrow. ")]),_:1},8,["trigger"]),t(g,{trigger:e.wideTrigger2,wide:""},{default:l(()=>[n(" Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"]),t(g,{trigger:e.wideTrigger3,wide:"very"},{default:l(()=>[n(" Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Inverted",description:"A popup can have its colors inverted",code:e.invertedCode},{default:l(()=>[t(u,{name:"heart",circular:"",ref:"invertedTrigger1"},null,512),t(p,{icon:"",ref:"invertedTrigger2"},{default:l(()=>[t(u,{name:"add"})]),_:1},512),t(g,{trigger:e.invertedTrigger1,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"]),t(g,{trigger:e.invertedTrigger2,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"])]),_:1},8,["code"])]),_:1})])}const tI=He(KD,[["render",eI]]),iI=V({name:"RatingDoc",components:{DocPageHeader:Rt,DocExample:gt,PropertyListTable:xn},setup(){return{ratingCode:'<sui-rating v-model="value" />',iconCode:`<sui-rating :defaultRating="2" :maxRating="4" color="yellow" />
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
<sui-rating size="massive" :defaultRating="3" :maxRating="4" color="yellow" />`,properties:[{name:"color",type:"string",default:"",description:"A rating can have different colors"},{name:"defaultRating",type:"number",default:0,description:"The initial value of rating."},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"icon",type:"string",default:"star",description:"A rating can use a set of specified icons."},{name:"maxRating",type:"number",default:1,description:"The total number of icons."},{name:"modelValue",type:"number",default:"null",description:"A value of rating."},{name:"size",type:"string",default:"",description:"A rating can have different sizes."}],events:[{name:"change",description:"Callback to invoke on value change."}]}}}),lI=k("br",null,null,-1),aI=k("br",null,null,-1),nI=k("br",null,null,-1),oI=k("br",null,null,-1),sI=k("br",null,null,-1),rI=k("br",null,null,-1),uI=k("br",null,null,-1),cI=k("br",null,null,-1),dI=k("br",null,null,-1),pI=k("br",null,null,-1),mI=k("br",null,null,-1),fI=k("br",null,null,-1),gI=k("br",null,null,-1),hI=k("br",null,null,-1),_I=k("br",null,null,-1),bI=k("br",null,null,-1),vI=k("br",null,null,-1),SI=k("br",null,null,-1),yI=k("br",null,null,-1),wI=k("br",null,null,-1),CI=k("br",null,null,-1),AI=k("br",null,null,-1),xI=k("br",null,null,-1),kI=k("br",null,null,-1),BI=k("br",null,null,-1),$I=k("br",null,null,-1),TI=k("br",null,null,-1),LI=k("br",null,null,-1),DI=k("br",null,null,-1),II=k("br",null,null,-1),EI=k("br",null,null,-1),RI=k("br",null,null,-1),PI=k("br",null,null,-1),zI=k("br",null,null,-1),VI=k("br",null,null,-1),FI=k("br",null,null,-1),MI=k("br",null,null,-1),NI=k("br",null,null,-1),HI=k("br",null,null,-1),OI=k("br",null,null,-1),qI=k("br",null,null,-1),GI=k("br",null,null,-1),jI=k("br",null,null,-1),UI=k("br",null,null,-1),YI=k("br",null,null,-1),JI=k("br",null,null,-1),WI=k("br",null,null,-1),KI=k("br",null,null,-1);function XI(e,i,a,o,s,c){const d=B("doc-page-header"),f=B("sui-header"),u=B("sui-rating"),p=B("doc-example"),g=B("property-list-table"),m=B("sui-table-header-cell"),_=B("sui-table-row"),w=B("sui-table-header"),S=B("sui-table-cell"),A=B("sui-table-body"),T=B("sui-table"),I=B("sui-container");return y(),ye("div",null,[t(d,{title:"Rating",sub:"A rating indicates user interest in content"}),t(I,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(p,{title:"Rating",description:"A Basic rating",code:e.ratingCode},{default:l(()=>[t(u)]),_:1},8,["code"]),t(p,{title:"Icon",description:"You can use any available icon as rating indicator",code:e.iconCode},{default:l(()=>[t(u,{defaultRating:2,maxRating:4,color:"yellow"}),lI,aI,t(u,{defaultRating:2,maxRating:4,icon:"heart",color:"red"}),nI,oI,t(u,{defaultRating:2,maxRating:4,icon:"female",color:"purple"}),sI,rI,t(u,{defaultRating:2,maxRating:4,icon:"male",color:"blue"}),uI,cI,t(u,{defaultRating:2,maxRating:4,icon:"cloud",color:"grey"}),dI,pI,t(u,{defaultRating:2,maxRating:4,icon:"cat",color:"pink"}),mI,fI,t(u,{defaultRating:2,maxRating:4,icon:"circle",color:"orange"})]),_:1},8,["code"]),t(p,{title:"Color",description:"You can specify any color of the FUI color palette",code:e.colorCode},{default:l(()=>[t(u,{defaultRating:1,maxRating:7,color:"red"}),gI,hI,t(u,{defaultRating:2,maxRating:7,color:"orange"}),_I,bI,t(u,{defaultRating:3,maxRating:7,color:"yellow"}),vI,SI,t(u,{defaultRating:4,maxRating:7,color:"olive"}),yI,wI,t(u,{defaultRating:5,maxRating:7,color:"green"}),CI,AI,t(u,{defaultRating:6,maxRating:7,color:"teal"}),xI,kI,t(u,{defaultRating:6,maxRating:7,color:"blue"}),BI,$I,t(u,{defaultRating:5,maxRating:7,color:"violet"}),TI,LI,t(u,{defaultRating:4,maxRating:7,color:"purple"}),DI,II,t(u,{defaultRating:3,maxRating:7,color:"pink"}),EI,RI,t(u,{defaultRating:2,maxRating:7,color:"brown"}),PI,zI,t(u,{defaultRating:1,maxRating:7,color:"grey"}),VI,FI,t(u,{defaultRating:1,maxRating:7,color:"black"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("States")]),_:1}),t(p,{title:"Disabled",description:"A rating can be started in non-interactive mode by adding a disabled class",code:e.disabledCode},{default:l(()=>[t(u,{disabled:"",defaultRating:3,maxRating:5,color:"yellow"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Variations")]),_:1}),t(p,{title:"Size",description:"A rating can vary in size",code:e.sizeCode},{default:l(()=>[t(u,{size:"mini",defaultRating:3,maxRating:4,color:"yellow"}),MI,NI,t(u,{size:"tiny",defaultRating:3,maxRating:4,color:"yellow"}),HI,OI,t(u,{size:"small",defaultRating:3,maxRating:4,color:"yellow"}),qI,GI,t(u,{defaultRating:3,maxRating:4,color:"yellow"}),jI,UI,t(u,{size:"large",defaultRating:3,maxRating:4,color:"yellow"}),YI,JI,t(u,{size:"huge",defaultRating:3,maxRating:4,color:"yellow"}),WI,KI,t(u,{size:"massive",defaultRating:3,maxRating:4,color:"yellow"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Properties")]),_:1}),t(g,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Events")]),_:1}),t(T,{celled:""},{default:l(()=>[t(w,null,{default:l(()=>[t(_,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Name")]),_:1}),t(m,null,{default:l(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(A,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.events,h=>(y(),x(_,{key:h.name},{default:l(()=>[t(S,null,{default:l(()=>[n($e(h.name),1)]),_:2},1024),t(S,null,{default:l(()=>[n($e(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const QI=He(iI,[["render",XI]]),ZI=V({name:"SidebarDoc",components:{DocPageHeader:Rt,DocExample:gt,PropertyListTable:xn},setup(){return{visible1:G(!1),sidebarCode:`<sui-grid :columns="1">
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
</sui-grid>`,properties:[{name:"animation",type:"string",default:"overlay",description:"Specifies the animation of the sidebar."},{name:"dimmed",type:"boolean",default:"false",description:"When specified, display the dim inside pusher content."},{name:"direction",type:"string",default:"left",description:"Specifies the direction the sidebar should appear on."},{name:"visible",type:"boolean",default:"false",description:"Specifies the visibility of the sidebar."}],events:[{name:"hide",description:"Callback to invoke when sidebar hide."},{name:"show",description:"Callback to invoke when sidebar show."}]}}}),eE={class:"pusher"};function tE(e,i,a,o,s,c){const d=B("doc-page-header"),f=B("sui-header"),u=B("sui-icon"),p=B("sui-button"),g=B("sui-grid-column"),m=B("sui-menu-item"),_=B("sui-sidebar"),w=B("sui-image"),S=B("sui-segment"),A=B("sui-grid"),T=B("doc-example"),I=B("property-list-table"),h=B("sui-table-header-cell"),b=B("sui-table-row"),C=B("sui-table-header"),$=B("sui-table-cell"),E=B("sui-table-body"),F=B("sui-table"),N=B("sui-container");return y(),ye("div",null,[t(d,{title:"Sidebar",sub:"A sidebar hides additional content beside a page"}),t(N,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(T,{title:"Sidebar",description:"A sidebar",code:e.sidebarCode},{default:l(()=>[t(A,{columns:1},{default:l(()=>[t(g,null,{default:l(()=>[t(p,{onClick:i[0]||(i[0]=z=>e.visible1=!e.visible1),icon:""},{default:l(()=>[t(u,{name:"arrow right"})]),_:1})]),_:1}),t(g,null,{default:l(()=>[t(S,{class:"pushable"},{default:l(()=>[t(_,{visible:e.visible1,"onUpdate:visible":i[1]||(i[1]=z=>e.visible1=z),dimmed:"",icon:"labeled",inverted:""},{default:l(()=>[t(m,null,{default:l(()=>[t(u,{name:"home"}),n(" Home ")]),_:1}),t(m,null,{default:l(()=>[t(u,{name:"gamepad"}),n(" Games ")]),_:1}),t(m,null,{default:l(()=>[t(u,{name:"camera"}),n(" Channels ")]),_:1})]),_:1},8,["visible"]),k("div",eE,[t(S,null,{default:l(()=>[t(f,{as:"h2"},{default:l(()=>[n("Main Header")]),_:1}),t(w,{src:Oe})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Properties")]),_:1}),t(I,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Events")]),_:1}),t(F,{celled:""},{default:l(()=>[t(C,null,{default:l(()=>[t(b,null,{default:l(()=>[t(h,null,{default:l(()=>[n("Name")]),_:1}),t(h,null,{default:l(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(E,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.events,z=>(y(),x(b,{key:z.name},{default:l(()=>[t($,null,{default:l(()=>[n($e(z.name),1)]),_:2},1024),t($,null,{default:l(()=>[n($e(z.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const iE=He(ZI,[["render",tE]]),lE=V({name:"SliderDoc",components:{DocPageHeader:Rt,DocExample:gt},setup(){const e=G(5),i='<sui-slider v-model="slider1" />',a=G(4),o='<sui-slider labeled v-model="slider2" />',s=G(6),c='<sui-slider labeled="ticked" v-model="slider3" />',d=G(0),f=`<sui-slider
  v-model="slider4"
  labeled="ticked"
  :labels='["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ/ς", "τ", "υ", "φ"]'
  :max="20"
/>`,u=G(40),p='<sui-slider v-model="slider5" labeled :step="5" :max="120" :min="20" />',g=G([]);g.value.push(20,60);const m='<sui-slider v-model="slider6" range labeled="ticked" :min="5" :max="100" :step="5" />',_=G(7),w='<sui-slider disabled v-model="slider7" />',S=G(8),A=`<sui-segment inverted>
  <sui-slider inverted v-model="slider8" />
</sui-segment>`,T=G(3),I='<sui-slider reversed v-model="slider9" />',h=G(18),b='<sui-slider vertical v-model="slider10" :max="20" />',C=G(5),$=G(5),E=G(5),F=G(5),N=G(5),z=G(5),j=G(5),Z=G(5),W=G(5),fe=G(5),Be=G(5),U=G(5),K=G(5),de=`<sui-slider color="red" v-model="redSlider" />
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
</sui-segment>`,Le=G(5),Je=G(5),at=G(5);return{slider1:e,sliderCode:i,slider2:a,labeledSliderCode:o,slider3:s,labeledTickedCode:c,slider4:d,customLabelsCode:f,slider5:u,stepCode:p,slider6:g,rangeCode:m,slider7:_,disabledCode:w,slider8:S,invertedCode:A,slider9:T,reversedCode:I,slider10:h,verticalCode:b,redSlider:C,orangeSlider:$,yellowSlider:E,oliveSlider:F,greenSlider:N,tealSlider:z,blueSlider:j,violetSlider:Z,purpleSlider:W,pinkSlider:fe,brownSlider:Be,greySlider:U,blackSlider:K,coloredCode:de,invertedColoredCode:le,smallSlider:Le,largeSlider:Je,bigSlider:at,sizeCode:`<sui-slider size="small" color="red" v-model="smallSlider" />
<sui-slider size="large" color="yellow" v-model="largeSlider" />
<sui-slider size="big" color="olive" v-model="bigSlider" />`,properties:[{name:"color",type:"string",default:"",description:"A slider can have different colors"},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"inverted",type:"boolean",default:!1,description:"A slider can be formatted to appear on dark backgrounds."},{name:"labeled",type:"boolean|string",default:!1,description:"A slider can show its labels."},{name:"labels",type:"string[]",default:"",description:"A slider can have a custom label according to the label value."},{name:"max",type:"number",default:10,description:"Maximum boundary value."},{name:"min",type:"number",default:0,description:"Mininum boundary value."},{name:"modelValue",type:"number|number[]",default:0,description:"A value of component."},{name:"range",type:"boolean",default:!1,description:"When specified, allows two boundary values to be picked."},{name:"reversed",type:"boolean",default:!1,description:"A slider can be reversed."},{name:"size",type:"string",default:"",description:"A slider can have different sizes."},{name:"step",type:"number",default:1,description:"Step factor to increment/decrement the value."},{name:"vertical",type:"boolean",default:!1,description:"When specified, orientation of the slider becomes vertical."},{name:"verticalHeight",type:"number|string",default:200,description:"Height of the vertical slider."}],events:[{name:"change",description:"Callback to invoke on value change."},{name:"slideend",description:"Callback to invoke when slide end."}]}}});function aE(e,i,a,o,s,c){const d=B("doc-page-header"),f=B("sui-header"),u=B("sui-slider"),p=B("doc-example"),g=B("sui-segment"),m=B("sui-table-header-cell"),_=B("sui-table-row"),w=B("sui-table-header"),S=B("sui-table-cell"),A=B("sui-table-body"),T=B("sui-table"),I=B("sui-container");return y(),ye("div",null,[t(d,{title:"Slider",sub:"A slider allows users to select values within a range"}),t(I,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Types")]),_:1}),t(p,{title:"Slider",description:"A standard slider",code:e.sliderCode},{default:l(()=>[t(u,{modelValue:e.slider1,"onUpdate:modelValue":i[0]||(i[0]=h=>e.slider1=h)},null,8,["modelValue"]),n(" "+$e(e.slider1),1)]),_:1},8,["code"]),t(p,{title:"Labeled Slider",description:"A slider that show its labels",code:e.labeledSliderCode},{default:l(()=>[t(u,{labeled:"",modelValue:e.slider2,"onUpdate:modelValue":i[1]||(i[1]=h=>e.slider2=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(p,{title:"Labeled Ticked Slider",description:"A slider that show its labels and ticks",code:e.labeledTickedCode},{default:l(()=>[t(u,{labeled:"ticked",modelValue:e.slider3,"onUpdate:modelValue":i[2]||(i[2]=h=>e.slider3=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(p,{title:"Custom Interpreted Labels",description:"You can provide a function which returns a custom label according to the label value",code:e.customLabelsCode},{default:l(()=>[t(u,{modelValue:e.slider4,"onUpdate:modelValue":i[3]||(i[3]=h=>e.slider4=h),labeled:"ticked",labels:["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ/ς","τ","υ","φ"],max:20},null,8,["modelValue"])]),_:1},8,["code"]),t(p,{title:"Step",description:"A slider can change the default step increment",code:e.stepCode},{default:l(()=>[t(u,{modelValue:e.slider5,"onUpdate:modelValue":i[4]||(i[4]=h=>e.slider5=h),labeled:"",step:5,max:120,min:20},null,8,["modelValue"]),n(" "+$e(e.slider5),1)]),_:1},8,["code"]),t(p,{title:"Range",description:"A range slider which allow you to select a range between two values",code:e.rangeCode},{default:l(()=>[t(u,{modelValue:e.slider6,"onUpdate:modelValue":i[5]||(i[5]=h=>e.slider6=h),range:"",labeled:"ticked",min:5,max:100,step:5},null,8,["modelValue"]),n(" "+$e(e.slider6),1)]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Variations")]),_:1}),t(p,{title:"Disabled",description:"A slider can appear disabled",code:e.disabledCode},{default:l(()=>[t(u,{disabled:"",modelValue:e.slider7,"onUpdate:modelValue":i[6]||(i[6]=h=>e.slider7=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(p,{title:"Inverted",description:"A slider can be inverted",code:e.invertedCode},{default:l(()=>[t(g,{inverted:""},{default:l(()=>[t(u,{inverted:"",modelValue:e.slider8,"onUpdate:modelValue":i[7]||(i[7]=h=>e.slider8=h)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(p,{title:"Reversed",description:"A slider can be reversed",code:e.reversedCode},{default:l(()=>[t(u,{reversed:"",modelValue:e.slider9,"onUpdate:modelValue":i[8]||(i[8]=h=>e.slider9=h)},null,8,["modelValue"]),n(" "+$e(e.slider9),1)]),_:1},8,["code"]),t(p,{title:"Vertical",description:"A slider can be vertical",code:e.verticalCode},{default:l(()=>[t(u,{vertical:"",modelValue:e.slider10,"onUpdate:modelValue":i[9]||(i[9]=h=>e.slider10=h),max:20},null,8,["modelValue"]),n(" "+$e(e.slider10),1)]),_:1},8,["code"]),t(p,{title:"Colored",description:"A slider can be different colors",code:e.coloredCode},{default:l(()=>[t(u,{color:"red",modelValue:e.redSlider,"onUpdate:modelValue":i[10]||(i[10]=h=>e.redSlider=h)},null,8,["modelValue"]),t(u,{color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":i[11]||(i[11]=h=>e.orangeSlider=h)},null,8,["modelValue"]),t(u,{color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":i[12]||(i[12]=h=>e.yellowSlider=h)},null,8,["modelValue"]),t(u,{color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":i[13]||(i[13]=h=>e.oliveSlider=h)},null,8,["modelValue"]),t(u,{color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":i[14]||(i[14]=h=>e.greenSlider=h)},null,8,["modelValue"]),t(u,{color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":i[15]||(i[15]=h=>e.tealSlider=h)},null,8,["modelValue"]),t(u,{color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":i[16]||(i[16]=h=>e.blueSlider=h)},null,8,["modelValue"]),t(u,{color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":i[17]||(i[17]=h=>e.violetSlider=h)},null,8,["modelValue"]),t(u,{color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":i[18]||(i[18]=h=>e.purpleSlider=h)},null,8,["modelValue"]),t(u,{color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":i[19]||(i[19]=h=>e.pinkSlider=h)},null,8,["modelValue"]),t(u,{color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":i[20]||(i[20]=h=>e.brownSlider=h)},null,8,["modelValue"]),t(u,{color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":i[21]||(i[21]=h=>e.greySlider=h)},null,8,["modelValue"]),t(u,{color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":i[22]||(i[22]=h=>e.blackSlider=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(p,{title:"Inverted Colored",description:"A slider can be different colors while inverted",code:e.invertedColoredCode},{default:l(()=>[t(g,{inverted:""},{default:l(()=>[t(u,{inverted:"",color:"red",modelValue:e.redSlider,"onUpdate:modelValue":i[23]||(i[23]=h=>e.redSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":i[24]||(i[24]=h=>e.orangeSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":i[25]||(i[25]=h=>e.yellowSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":i[26]||(i[26]=h=>e.oliveSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":i[27]||(i[27]=h=>e.greenSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":i[28]||(i[28]=h=>e.tealSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":i[29]||(i[29]=h=>e.blueSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":i[30]||(i[30]=h=>e.violetSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":i[31]||(i[31]=h=>e.purpleSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":i[32]||(i[32]=h=>e.pinkSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":i[33]||(i[33]=h=>e.brownSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":i[34]||(i[34]=h=>e.greySlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":i[35]||(i[35]=h=>e.blackSlider=h)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(p,{title:"Size",description:"A slider can have different sizes",code:e.sizeCode},{default:l(()=>[t(u,{size:"small",color:"red",modelValue:e.smallSlider,"onUpdate:modelValue":i[36]||(i[36]=h=>e.smallSlider=h)},null,8,["modelValue"]),t(u,{size:"large",color:"yellow",modelValue:e.largeSlider,"onUpdate:modelValue":i[37]||(i[37]=h=>e.largeSlider=h)},null,8,["modelValue"]),t(u,{size:"big",color:"olive",modelValue:e.bigSlider,"onUpdate:modelValue":i[38]||(i[38]=h=>e.bigSlider=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Properties")]),_:1}),t(T,{celled:""},{default:l(()=>[t(w,null,{default:l(()=>[t(_,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Name")]),_:1}),t(m,null,{default:l(()=>[n("Type")]),_:1}),t(m,null,{default:l(()=>[n("Default")]),_:1}),t(m,null,{default:l(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(A,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.properties,h=>(y(),x(_,{key:h.name},{default:l(()=>[t(S,null,{default:l(()=>[n($e(h.name),1)]),_:2},1024),t(S,null,{default:l(()=>[n($e(h.type),1)]),_:2},1024),t(S,null,{default:l(()=>[n($e(h.default),1)]),_:2},1024),t(S,null,{default:l(()=>[n($e(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Events")]),_:1}),t(T,{celled:""},{default:l(()=>[t(w,null,{default:l(()=>[t(_,null,{default:l(()=>[t(m,null,{default:l(()=>[n("Name")]),_:1}),t(m,null,{default:l(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(A,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.events,h=>(y(),x(_,{key:h.name},{default:l(()=>[t(S,null,{default:l(()=>[n($e(h.name),1)]),_:2},1024),t(S,null,{default:l(()=>[n($e(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const nE=He(lE,[["render",aE]]),oE=V({name:"TabDoc",components:{DocPageHeader:Rt,DocExample:gt,PropertyListTable:xn},setup(){return{basicCode:`<sui-tab>
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
</sui-tab>`,tabProperties:[{name:"activeIndex",type:"string",default:0,description:"Index of the active tab."},{name:"pointing",type:"boolean",default:!1,description:""}],tabPanelProperties:[{name:"header",type:"boolean",default:"null",description:"Orientation of tab headers."}],events:[{name:"tab-change",description:"Callback to invoke when an active tab is changed."},{name:"tab-click",description:"Callback to invoke when an tab is clicked."}]}}});function sE(e,i,a,o,s,c){const d=B("doc-page-header"),f=B("sui-header"),u=B("sui-tab-panel"),p=B("sui-tab"),g=B("doc-example"),m=B("property-list-table"),_=B("sui-table-header-cell"),w=B("sui-table-row"),S=B("sui-table-header"),A=B("sui-table-cell"),T=B("sui-table-body"),I=B("sui-table"),h=B("sui-container");return y(),ye("div",null,[t(d,{title:"Tab",sub:"A tab is a hidden section of content activated by a menu"}),t(h,{class:"main"},{default:l(()=>[t(f,{as:"h2",dividing:""},{default:l(()=>[n("Examples")]),_:1}),t(g,{title:"Basic",code:e.basicCode},{default:l(()=>[t(p,null,{default:l(()=>[t(u,{header:"First"},{default:l(()=>[n("Content A")]),_:1}),t(u,{header:"Second"},{default:l(()=>[n("Content B")]),_:1}),t(u,{header:"Third"},{default:l(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Pointing",code:e.pointingCode},{default:l(()=>[t(p,{pointing:""},{default:l(()=>[t(u,{header:"First"},{default:l(()=>[n("Content A")]),_:1}),t(u,{header:"Second"},{default:l(()=>[n("Content B")]),_:1}),t(u,{header:"Third"},{default:l(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Secondary",code:e.secondaryCode},{default:l(()=>[t(p,{secondary:""},{default:l(()=>[t(u,{header:"First"},{default:l(()=>[n("Content A")]),_:1}),t(u,{header:"Second"},{default:l(()=>[n("Content B")]),_:1}),t(u,{header:"Third"},{default:l(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Text",code:e.textCode},{default:l(()=>[t(p,{text:""},{default:l(()=>[t(u,{header:"First"},{default:l(()=>[n("Content A")]),_:1}),t(u,{header:"Second"},{default:l(()=>[n("Content B")]),_:1}),t(u,{header:"Third"},{default:l(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Properties")]),_:1}),t(f,{as:"h3"},{default:l(()=>[n("Tab")]),_:1}),t(m,{properties:e.tabProperties},null,8,["properties"]),t(f,{as:"h3"},{default:l(()=>[n("TabPanel")]),_:1}),t(m,{properties:e.tabPanelProperties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:l(()=>[n("Events")]),_:1}),t(I,{celled:""},{default:l(()=>[t(S,null,{default:l(()=>[t(w,null,{default:l(()=>[t(_,null,{default:l(()=>[n("Name")]),_:1}),t(_,null,{default:l(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(T,null,{default:l(()=>[(y(!0),ye(Ce,null,Qe(e.events,b=>(y(),x(w,{key:b.name},{default:l(()=>[t(A,null,{default:l(()=>[n($e(b.name),1)]),_:2},1024),t(A,null,{default:l(()=>[n($e(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const rE=He(oE,[["render",sE]]),uE=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({ message: 'I am a toast, nice to meet you !' })
}
<\/script>`,cE={__name:"MinimalDoc",setup(e){const{toast:i}=st(),a=()=>{i({message:"I am a toast, nice to meet you !"})};return(o,s)=>{const c=B("SuiButton");return y(),x(D,{label:"Minimal",code:uE},{description:l(()=>[n(" A minimal toast will just display a message. ")]),example:l(()=>[t(c,{onClick:a},{default:l(()=>[n("Show")]),_:1})]),_:1})}}},dE=`<template>
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
<\/script>`,pE={__name:"TitledDoc",setup(e){const{toast:i}=st(),a=()=>{i({title:"Better ?",message:"Hey look, I have a title !"})};return(o,s)=>{const c=B("SuiButton");return y(),x(D,{label:"Titled",code:dE},{description:l(()=>[n(" You can add a title to your toast. ")]),example:l(()=>[t(c,{onClick:a},{default:l(()=>[n("Show")]),_:1})]),_:1})}}},mE=`<template>
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
<\/script>`,fE={__name:"ProgressBarDoc",setup(e){const{toast:i}=st(),a=o=>{i({title:"LOOK",message:"See, how long i will last",showProgress:"bottom",showProgressColor:o})};return(o,s)=>{const c=B("SuiButton");return y(),x(D,{label:"Progress Bar",code:mE},{description:l(()=>[n(" You can attach a progress bar to your toast. ")]),example:l(()=>[t(c,{onClick:a},{default:l(()=>[n("Show")]),_:1}),t(c,{color:"red",onClick:s[0]||(s[0]=d=>a("red"))},{default:l(()=>[n("Show")]),_:1})]),_:1})}}},gE=`<template>
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
<\/script>`,hE={__name:"ToastTypeDoc",setup(e){const{toast:i}=st(),a=o=>{i({message:"You're using the good framework !",type:o})};return(o,s)=>{const c=B("SuiButton");return y(),x(D,{label:"Toast Type",code:gE},{description:l(()=>[n(" A toast can be used to display different types of informations. ")]),example:l(()=>[t(c,{onClick:s[0]||(s[0]=d=>a("success")),positive:""},{default:l(()=>[n("Success")]),_:1}),t(c,{onClick:s[1]||(s[1]=d=>a("error")),negative:""},{default:l(()=>[n("Error")]),_:1}),t(c,{onClick:s[2]||(s[2]=d=>a("warning")),color:"yellow"},{default:l(()=>[n("Warning")]),_:1})]),_:1})}}},_E=`<template>
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
<\/script>`,bE={__name:"PositionDoc",setup(e){const{toast:i}=st(),a=o=>{i({position:o,message:"Look, I'm here !"})};return(o,s)=>{const c=B("SuiButton");return y(),x(D,{label:"Position",code:_E},{description:l(()=>[n(" A toast can appear at different positions on the screen. ")]),example:l(()=>[t(c,{onClick:s[0]||(s[0]=d=>a("top left"))},{default:l(()=>[n("Top Left")]),_:1}),t(c,{onClick:s[1]||(s[1]=d=>a("bottom right"))},{default:l(()=>[n("Bottom Right")]),_:1})]),_:1})}}},vE=k("br",null,null,-1),SE=`<template>
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
<\/script>`,yE={__name:"AttachedPosition",setup(e){const{toast:i}=st(),a=o=>{i({attached:o,title:"Watch out!",message:`I am a ${o} attached toast`})};return(o,s)=>{const c=B("SuiButton");return y(),x(D,{label:"Attached Position",code:SE},{description:l(()=>[n(" A toast can have an attached position which will show the toast over the whole width of the screen."),vE,n(" Just like notifications on mobile devices. ")]),example:l(()=>[t(c,{onClick:s[0]||(s[0]=d=>a("top"))},{default:l(()=>[n("Top")]),_:1}),t(c,{onClick:s[1]||(s[1]=d=>a("bottom"))},{default:l(()=>[n("Bottom")]),_:1})]),_:1})}}},wE=`<template>
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
<\/script>`,CE={__name:"DirectionDoc",setup(e){const{toast:i}=st(),a=()=>{i({horizontal:!0,position:"top left",title:"Watch out!",message:"Next one will open to the right"})};return(o,s)=>{const c=B("SuiButton");return y(),x(D,{label:"Direction",code:wE},{description:l(()=>[n(" Toasts can stack horizontal ")]),example:l(()=>[t(c,{onClick:a},{default:l(()=>[n("Show")]),_:1})]),_:1})}}},AE=`<template>
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
<\/script>`,xE={__name:"CenterAligned",setup(e){const{toast:i}=st(),a=()=>{i({centered:!0,title:"Veronika has joined",message:"Welcome to the Fomantic-UI community!"})};return(o,s)=>{const c=B("SuiButton");return y(),x(D,{label:"Center Aligned",code:AE},{description:l(()=>[n(" The toasts content can be shown center aligned. ")]),example:l(()=>[t(c,{onClick:a},{default:l(()=>[n("Show")]),_:1})]),_:1})}}},kE=`<template>
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
<\/script>`,BE={__name:"DurationDoc",setup(e){const{toast:i}=st(),a=o=>{i({displayTime:o,message:o===0?"I'll stay here until you click on me !":"You will see me for 5 seconds."})};return(o,s)=>{const c=B("SuiButton");return y(),x(D,{label:"Duration",code:kE},{description:l(()=>[n(" You can choose how long a toast should be displayed. ")]),example:l(()=>[t(c,{onClick:s[0]||(s[0]=d=>a(5e3))},{default:l(()=>[n("5 seconds")]),_:1}),t(c,{onClick:s[1]||(s[1]=d=>a(0))},{default:l(()=>[n("Stay")]),_:1})]),_:1})}}},$E=`<template>
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
<\/script>`,TE={__name:"MessageStyleDoc",setup(e){const{toast:i}=st(),a=()=>{i({messageStyle:!0,message:"I got my style from the message class",color:"purple"})};return(o,s)=>{const c=B("SuiButton");return y(),x(D,{label:"Use Message Style",code:$E},{description:l(()=>[n(" You can use all of the styles and colors from the message component. ")]),example:l(()=>[t(c,{onClick:a},{default:l(()=>[n("Show")]),_:1})]),_:1})}}},LE=`<template>
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
<\/script>`,DE={__name:"IncreasingProgressBarDoc",setup(e){const{toast:i}=st(),a=()=>{i({title:"LOOK",message:"See, how long i will last",showProgress:"top",showProgressUp:!0})};return(o,s)=>{const c=B("SuiButton");return y(),x(D,{label:"Increasing Progress Bar",code:LE},{description:l(()=>[n(" You can use the progress bar to show the progress of a task. ")]),example:l(()=>[t(c,{onClick:a},{default:l(()=>[n("Show")]),_:1})]),_:1})}}},IE=`<template>
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
<\/script>`,EE={__name:"ColorVariantsDoc",setup(e){const{toast:i}=st(),a=G(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],s=()=>{i({color:o[a.value],message:"I am a colorful toast",showProgress:"bottom"}),a.value=(a.value+1)%o.length};return(c,d)=>{const f=B("SuiButton");return y(),x(D,{label:"Color Variants",code:IE},{description:l(()=>[n(" You can use all of the usual color names. ")]),example:l(()=>[t(f,{onClick:s},{default:l(()=>[n("Show")]),_:1})]),_:1})}}},RE={__name:"InvertedColorsDoc",setup(e){const{toast:i}=st(),a=G(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],s=()=>{i({color:o[a.value],inverted:!0,message:"I am an inverted colorful toast",showProgress:"bottom"}),a.value=(a.value+1)%o.length};return(c,d)=>{const f=B("SuiButton");return y(),x(D,{label:"Inverted Colors",code:c.code},{description:l(()=>[n(" Same as above, just add inverted to the class definition. ")]),example:l(()=>[t(f,{onClick:s},{default:l(()=>[n("Show")]),_:1})]),_:1},8,["code"])}}},PE=`<template>
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
<\/script>`,zE={__name:"ActionGeneralDoc",setup(e){const{toast:i}=st(),a=()=>{i({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[X(P,{color:"green",onclick:()=>{i({message:'You clicked "yes", toast closes by default'}),o()}},()=>[X(Y,{name:"check"}),"Yes"]),X(P,{color:"red",icon:!0},()=>[X(Y,{name:"ban"})]),X(P,{color:"blue",onclick:()=>i({message:"Returning false from the click handler avoids closing the toast"})},()=>"?")]})};return(o,s)=>(y(),x(D,{label:"General",code:PE},{description:l(()=>[n(" Define click actions to your toast by providing a text and/or icon, optional class and click handler. ")]),example:l(()=>[t(r(P),{onClick:a},{default:l(()=>[n("Show")]),_:1})]),_:1}))}},VE=`<template>
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
<\/script>`,FE={__name:"ActionBasicDoc",setup(e){const{toast:i}=st(),a=()=>{i({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[X(P,{color:"yellow",onclick:()=>{i({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really")],actionsProps:{basic:!0,aligned:"left"}})};return(o,s)=>(y(),x(D,{label:"Basic",code:VE},{description:l(()=>[n(" The classActions setting provides you a way to adjust the overall appearance of the action buttons. Using basic class does not lighten the actions background. left aligns the buttons to the left. ")]),example:l(()=>[t(r(P),{onClick:a},{default:l(()=>[n("Show")]),_:1})]),_:1}))}},ME=`<template>
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
<\/script>`,NE={__name:"ActionAttachedDoc",setup(e){const{toast:i}=st(),a=()=>{i({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[X(P,{color:"green",onclick:()=>{i({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),X(P,{color:"red",onclick:()=>{i({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"top"}})};return(o,s)=>(y(),x(D,{label:"Attached",code:ME},{description:l(()=>[n(" Using attached converts your actions into a Button group. Also add top to display the actions attached to the top of the toast. ")]),example:l(()=>[t(r(P),{onClick:a},{default:l(()=>[n("Show")]),_:1})]),_:1}))}},HE=`<template>
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
<\/script>`,OE={__name:"ActionVerticalDoc",setup(e){const{toast:i}=st(),a=()=>{i({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[X(P,{color:"green",onclick:()=>{i({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),X(P,{color:"red",onclick:()=>{i({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{vertical:!0}})};return(o,s)=>(y(),x(D,{label:"Vertical",code:HE},{description:l(()=>[n(" You can use vertical to display your actions to the right of the toast. ")]),example:l(()=>[t(r(P),{onClick:a},{default:l(()=>[n("Show")]),_:1})]),_:1}))}},qE=k("br",null,null,-1),GE=`<template>
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
<\/script>`,jE={__name:"ActionVerticalAttachedDoc",setup(e){const{toast:i}=st(),a=()=>{i({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[X(P,{color:"green",onclick:()=>{i({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),X(P,{color:"red",onclick:()=>{i({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"left",vertical:!0}})};return(o,s)=>(y(),x(D,{label:"Vertical Attached",code:GE},{description:l(()=>[n(" Vertical actions can also be displayed as button groups using vertical attached."),qE,n(" Vertical attached actions also support left. ")]),example:l(()=>[t(r(P),{onClick:a},{default:l(()=>[n("Show")]),_:1})]),_:1}))}},UE={__name:"Toast",setup(e){const i=[{id:"minimal",label:"Minimal",category:"Types",component:cE},{id:"titled",label:"Titled",category:"Types",component:pE},{id:"progress-bar",label:"Progress Bar",category:"Types",component:fE},{id:"toast-type",label:"Toast Type",category:"Variations",component:hE},{id:"position",label:"Position",category:"Variations",component:bE},{id:"attached-position",label:"Attached Position",category:"Variations",component:yE},{id:"direction",label:"Direction",category:"Variations",component:CE},{id:"center-aligned",label:"Center Aligned",category:"Variations",component:xE},{id:"duration",label:"Duration",category:"Variations",component:BE},{id:"message-style",label:"Use Message Style",category:"Variations",component:TE},{id:"increasing-progress-bar",label:"Increasing Progress Bar",category:"Variations",component:DE},{id:"color-variants",label:"Color Variants",category:"Variations",component:EE},{id:"inverted-colors",label:"Inverted Colors",category:"Variations",component:RE},{id:"general",label:"General",category:"Actions",component:zE},{id:"action-basic",label:"Basic",category:"Actions",component:FE},{id:"action-attached",label:"Attached",category:"Actions",component:NE},{id:"action-vertical",label:"Vertical",category:"Actions",component:OE},{id:"action-vertical-attached",label:"Vertical Attached",category:"Actions",component:jE}];return(a,o)=>(y(),x(ot,{title:"Toast",description:"A toast allows users to be notified of an event","component-docs":i}))}},YE=[{path:"/",component:Ch,children:[{path:"/",component:Xh},{path:"elements/button",component:xw},{path:"elements/container",component:Vw},{path:"elements/divider",component:rC},{path:"elements/emoji",component:vC},{path:"elements/flag",component:AC},{path:"elements/header",component:i0},{path:"elements/icon",component:R0},{path:"elements/image",component:yA},{path:"elements/input",component:UA},{path:"elements/label",component:ik},{path:"elements/list",component:Tk},{path:"elements/loader",component:Qk},{path:"elements/rail",component:iB},{path:"elements/reveal",component:gB},{path:"elements/segment",component:HT},{path:"elements/step",component:YT},{path:"collections/breadcrumb",component:cL},{path:"collections/form",component:TL},{path:"collections/grid",component:zL},{path:"collections/menu",component:()=>Qt(()=>import("./Menu-GOguQdKi.js"),__vite__mapDeps([]))},{path:"collections/message",component:()=>Qt(()=>import("./Message-51HSKhc8.js"),__vite__mapDeps([]))},{path:"collections/table",component:WL},{path:"views/advertisement",component:()=>Qt(()=>import("./Advertisement-XXfEkoR5.js"),__vite__mapDeps([]))},{path:"views/card",component:()=>Qt(()=>import("./Card-B6f5af9B.js"),__vite__mapDeps([]))},{path:"views/comment",component:()=>Qt(()=>import("./Comment-uQMKG_Sj.js"),__vite__mapDeps([]))},{path:"views/feed",component:()=>Qt(()=>import("./Feed-5Jft08VQ.js"),__vite__mapDeps([]))},{path:"views/item",component:()=>Qt(()=>import("./Item-VS2rZswB.js"),__vite__mapDeps([]))},{path:"views/statistic",component:()=>Qt(()=>import("./Statistic-cPkh94vQ.js"),__vite__mapDeps([]))},{path:"modules/accordion",component:bD},{path:"modules/calendar",component:yD},{path:"modules/checkbox",component:DD},{path:"modules/dimmer",component:RD},{path:"modules/dropdown",component:VD},{path:"modules/embed",component:ND},{path:"modules/modal",component:JD},{path:"modules/popup",component:tI},{path:"modules/progress",component:()=>Qt(()=>import("./Progress-668rwoOi.js"),__vite__mapDeps([]))},{path:"modules/rating",component:QI},{path:"modules/sidebar",component:iE},{path:"modules/slider",component:nE},{path:"modules/tab",component:rE},{path:"modules/toast",component:UE}]}],JE=ih({history:_g("/vue-fomantic-ui/"),routes:YE,scrollBehavior(e,i,a){var o;e.hash||(o=document.querySelector(".article"))==null||o.scrollTo(0,0)}});(function(e){var i="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",a={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},o={bash:a,environment:{pattern:RegExp("\\$"+i),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+i),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+i),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:o},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:a}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:o},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:o.entity}}],environment:{pattern:RegExp("\\$?"+i),alias:"constant"},variable:o.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},a.inside=e.languages.bash;for(var s=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],c=o.variable[1].inside,d=0;d<s.length;d++)c[s[d]]=e.languages.bash[s[d]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);const xs=Ec(Xf);xs.use(JE);xs.use(ey);xs.mount("#app");export{WA as $,P as A,ye as B,Qe as C,ot as D,$e as E,Ce as F,ft as G,me as H,rd as I,Nt as J,D_ as K,Qa as L,gb as M,bb as N,ba as O,Bt as P,j_ as Q,N_ as R,Rd as S,Gi as T,da as U,An as V,I_ as W,fk as X,cb as Y,P_ as Z,D as _,n as a,Lo as a0,Ea as a1,Ra as a2,zb as a3,Ib as a4,ll as a5,Eb as a6,Tv as a7,xo as a8,ko as a9,Lv as aa,Ao as ab,t as b,x as c,V as d,Ze as e,k as f,Oe as g,ei as h,X as i,nd as j,O as k,Jb as l,Y as m,it as n,y as o,od as p,id as q,G as r,l_ as s,fs as t,r as u,H as v,l as w,Te as x,oe as y,R_ as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

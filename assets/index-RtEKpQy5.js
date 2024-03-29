(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(s){if(s.ep)return;s.ep=!0;const u=a(s);fetch(s.href,u)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function no(e,t){const a=new Set(e.split(","));return t?o=>a.has(o.toLowerCase()):o=>a.has(o)}const qe={},rn=[],bt=()=>{},Md=()=>!1,ma=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),El=e=>e.startsWith("onUpdate:"),Xe=Object.assign,Rl=(e,t)=>{const a=e.indexOf(t);a>-1&&e.splice(a,1)},Hd=Object.prototype.hasOwnProperty,Re=(e,t)=>Hd.call(e,t),ge=Array.isArray,un=e=>kn(e)==="[object Map]",Wi=e=>kn(e)==="[object Set]",Ds=e=>kn(e)==="[object Date]",Od=e=>kn(e)==="[object RegExp]",Ce=e=>typeof e=="function",Je=e=>typeof e=="string",wi=e=>typeof e=="symbol",je=e=>e!==null&&typeof e=="object",zl=e=>(je(e)||Ce(e))&&Ce(e.then)&&Ce(e.catch),jr=Object.prototype.toString,kn=e=>jr.call(e),qd=e=>kn(e).slice(8,-1),Ur=e=>kn(e)==="[object Object]",Pl=e=>Je(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Un=no(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ao=e=>{const t=Object.create(null);return a=>t[a]||(t[a]=e(a))},Nd=/-(\w)/g,ht=ao(e=>e.replace(Nd,(t,a)=>a?a.toUpperCase():"")),Gd=/\B([A-Z])/g,$t=ao(e=>e.replace(Gd,"-$1").toLowerCase()),fa=ao(e=>e.charAt(0).toUpperCase()+e.slice(1)),Yn=ao(e=>e?`on${fa(e)}`:""),Nt=(e,t)=>!Object.is(e,t),cn=(e,t)=>{for(let a=0;a<e.length;a++)e[a](t)},Ha=(e,t,a)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:a})},ta=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Oa=e=>{const t=Je(e)?Number(e):NaN;return isNaN(t)?e:t};let Is;const Yr=()=>Is||(Is=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),jd="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",Ud=no(jd);function Bn(e){if(ge(e)){const t={};for(let a=0;a<e.length;a++){const o=e[a],s=Je(o)?Xd(o):Bn(o);if(s)for(const u in s)t[u]=s[u]}return t}else if(Je(e)||je(e))return e}const Yd=/;(?![^(]*\))/g,Wd=/:([^]+)/,Kd=/\/\*[^]*?\*\//g;function Xd(e){const t={};return e.replace(Kd,"").split(Yd).forEach(a=>{if(a){const o=a.split(Wd);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function ga(e){let t="";if(Je(e))t=e;else if(ge(e))for(let a=0;a<e.length;a++){const o=ga(e[a]);o&&(t+=o+" ")}else if(je(e))for(const a in e)e[a]&&(t+=a+" ");return t.trim()}function Jd(e){if(!e)return null;let{class:t,style:a}=e;return t&&!Je(t)&&(e.class=ga(t)),a&&(e.style=Bn(a)),e}const Qd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zd=no(Qd);function Wr(e){return!!e||e===""}function ep(e,t){if(e.length!==t.length)return!1;let a=!0;for(let o=0;a&&o<e.length;o++)a=ai(e[o],t[o]);return a}function ai(e,t){if(e===t)return!0;let a=Ds(e),o=Ds(t);if(a||o)return a&&o?e.getTime()===t.getTime():!1;if(a=wi(e),o=wi(t),a||o)return e===t;if(a=ge(e),o=ge(t),a||o)return a&&o?ep(e,t):!1;if(a=je(e),o=je(t),a||o){if(!a||!o)return!1;const s=Object.keys(e).length,u=Object.keys(t).length;if(s!==u)return!1;for(const c in e){const p=e.hasOwnProperty(c),d=t.hasOwnProperty(c);if(p&&!d||!p&&d||!ai(e[c],t[c]))return!1}}return String(e)===String(t)}function oo(e,t){return e.findIndex(a=>ai(a,t))}const $e=e=>Je(e)?e:e==null?"":ge(e)||je(e)&&(e.toString===jr||!Ce(e.toString))?JSON.stringify(e,Kr,2):String(e),Kr=(e,t)=>t&&t.__v_isRef?Kr(e,t.value):un(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((a,[o,s],u)=>(a[Bo(o,u)+" =>"]=s,a),{})}:Wi(t)?{[`Set(${t.size})`]:[...t.values()].map(a=>Bo(a))}:wi(t)?Bo(t):je(t)&&!ge(t)&&!Ur(t)?String(t):t,Bo=(e,t="")=>{var a;return wi(e)?`Symbol(${(a=e.description)!=null?a:t})`:e};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let At;class Fl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=At,!t&&At&&(this.index=(At.scopes||(At.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const a=At;try{return At=this,t()}finally{At=a}}}on(){At=this}off(){At=this.parent}stop(t){if(this._active){let a,o;for(a=0,o=this.effects.length;a<o;a++)this.effects[a].stop();for(a=0,o=this.cleanups.length;a<o;a++)this.cleanups[a]();if(this.scopes)for(a=0,o=this.scopes.length;a<o;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function tp(e){return new Fl(e)}function Xr(e,t=At){t&&t.active&&t.effects.push(e)}function Vl(){return At}function Jr(e){At&&At.cleanups.push(e)}let zi;class bn{constructor(t,a,o,s){this.fn=t,this.trigger=a,this.scheduler=o,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Xr(this,s)}get dirty(){if(this._dirtyLevel===1){Ki();for(let t=0;t<this._depsLength;t++){const a=this.deps[t];if(a.computed&&(ip(a.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),Xi()}return this._dirtyLevel>=2}set dirty(t){this._dirtyLevel=t?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=bi,a=zi;try{return bi=!0,zi=this,this._runnings++,Es(this),this.fn()}finally{Rs(this),this._runnings--,zi=a,bi=t}}stop(){var t;this.active&&(Es(this),Rs(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function ip(e){return e.value}function Es(e){e._trackId++,e._depsLength=0}function Rs(e){if(e.deps&&e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Qr(e.deps[t],e);e.deps.length=e._depsLength}}function Qr(e,t){const a=e.get(t);a!==void 0&&t._trackId!==a&&(e.delete(t),e.size===0&&e.cleanup())}function np(e,t){e.effect instanceof bn&&(e=e.effect.fn);const a=new bn(e,bt,()=>{a.dirty&&a.run()});t&&(Xe(a,t),t.scope&&Xr(a,t.scope)),(!t||!t.lazy)&&a.run();const o=a.run.bind(a);return o.effect=a,o}function ap(e){e.effect.stop()}let bi=!0,Xo=0;const Zr=[];function Ki(){Zr.push(bi),bi=!1}function Xi(){const e=Zr.pop();bi=e===void 0?!0:e}function Ml(){Xo++}function Hl(){for(Xo--;!Xo&&Jo.length;)Jo.shift()()}function eu(e,t,a){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const o=e.deps[e._depsLength];o!==t?(o&&Qr(o,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Jo=[];function tu(e,t,a){Ml();for(const o of e.keys())if(o._dirtyLevel<t&&e.get(o)===o._trackId){const s=o._dirtyLevel;o._dirtyLevel=t,s===0&&(o._shouldSchedule=!0,o.trigger())}iu(e),Hl()}function iu(e){for(const t of e.keys())t.scheduler&&t._shouldSchedule&&(!t._runnings||t.allowRecurse)&&e.get(t)===t._trackId&&(t._shouldSchedule=!1,Jo.push(t.scheduler))}const nu=(e,t)=>{const a=new Map;return a.cleanup=e,a.computed=t,a},qa=new WeakMap,Pi=Symbol(""),Qo=Symbol("");function wt(e,t,a){if(bi&&zi){let o=qa.get(e);o||qa.set(e,o=new Map);let s=o.get(a);s||o.set(a,s=nu(()=>o.delete(a))),eu(zi,s)}}function ii(e,t,a,o,s,u){const c=qa.get(e);if(!c)return;let p=[];if(t==="clear")p=[...c.values()];else if(a==="length"&&ge(e)){const d=Number(o);c.forEach((m,f)=>{(f==="length"||!wi(f)&&f>=d)&&p.push(m)})}else switch(a!==void 0&&p.push(c.get(a)),t){case"add":ge(e)?Pl(a)&&p.push(c.get("length")):(p.push(c.get(Pi)),un(e)&&p.push(c.get(Qo)));break;case"delete":ge(e)||(p.push(c.get(Pi)),un(e)&&p.push(c.get(Qo)));break;case"set":un(e)&&p.push(c.get(Pi));break}Ml();for(const d of p)d&&tu(d,2);Hl()}function op(e,t){var a;return(a=qa.get(e))==null?void 0:a.get(t)}const lp=no("__proto__,__v_isRef,__isVue"),au=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(wi)),zs=sp();function sp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...a){const o=Ee(this);for(let u=0,c=this.length;u<c;u++)wt(o,"get",u+"");const s=o[t](...a);return s===-1||s===!1?o[t](...a.map(Ee)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...a){Ki(),Ml();const o=Ee(this)[t].apply(this,a);return Hl(),Xi(),o}}),e}function rp(e){const t=Ee(this);return wt(t,"has",e),t.hasOwnProperty(e)}class ou{constructor(t=!1,a=!1){this._isReadonly=t,this._shallow=a}get(t,a,o){const s=this._isReadonly,u=this._shallow;if(a==="__v_isReactive")return!s;if(a==="__v_isReadonly")return s;if(a==="__v_isShallow")return u;if(a==="__v_raw")return o===(s?u?du:cu:u?uu:ru).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const c=ge(t);if(!s){if(c&&Re(zs,a))return Reflect.get(zs,a,o);if(a==="hasOwnProperty")return rp}const p=Reflect.get(t,a,o);return(wi(a)?au.has(a):lp(a))||(s||wt(t,"get",a),u)?p:ct(p)?c&&Pl(a)?p:p.value:je(p)?s?ql(p):li(p):p}}class lu extends ou{constructor(t=!1){super(!1,t)}set(t,a,o,s){let u=t[a];if(!this._shallow){const d=Oi(u);if(!ia(o)&&!Oi(o)&&(u=Ee(u),o=Ee(o)),!ge(t)&&ct(u)&&!ct(o))return d?!1:(u.value=o,!0)}const c=ge(t)&&Pl(a)?Number(a)<t.length:Re(t,a),p=Reflect.set(t,a,o,s);return t===Ee(s)&&(c?Nt(o,u)&&ii(t,"set",a,o):ii(t,"add",a,o)),p}deleteProperty(t,a){const o=Re(t,a);t[a];const s=Reflect.deleteProperty(t,a);return s&&o&&ii(t,"delete",a,void 0),s}has(t,a){const o=Reflect.has(t,a);return(!wi(a)||!au.has(a))&&wt(t,"has",a),o}ownKeys(t){return wt(t,"iterate",ge(t)?"length":Pi),Reflect.ownKeys(t)}}class su extends ou{constructor(t=!1){super(!0,t)}set(t,a){return!0}deleteProperty(t,a){return!0}}const up=new lu,cp=new su,dp=new lu(!0),pp=new su(!0),Ol=e=>e,lo=e=>Reflect.getPrototypeOf(e);function Sa(e,t,a=!1,o=!1){e=e.__v_raw;const s=Ee(e),u=Ee(t);a||(Nt(t,u)&&wt(s,"get",t),wt(s,"get",u));const{has:c}=lo(s),p=o?Ol:a?jl:na;if(c.call(s,t))return p(e.get(t));if(c.call(s,u))return p(e.get(u));e!==s&&e.get(t)}function ya(e,t=!1){const a=this.__v_raw,o=Ee(a),s=Ee(e);return t||(Nt(e,s)&&wt(o,"has",e),wt(o,"has",s)),e===s?a.has(e):a.has(e)||a.has(s)}function wa(e,t=!1){return e=e.__v_raw,!t&&wt(Ee(e),"iterate",Pi),Reflect.get(e,"size",e)}function Ps(e){e=Ee(e);const t=Ee(this);return lo(t).has.call(t,e)||(t.add(e),ii(t,"add",e,e)),this}function Fs(e,t){t=Ee(t);const a=Ee(this),{has:o,get:s}=lo(a);let u=o.call(a,e);u||(e=Ee(e),u=o.call(a,e));const c=s.call(a,e);return a.set(e,t),u?Nt(t,c)&&ii(a,"set",e,t):ii(a,"add",e,t),this}function Vs(e){const t=Ee(this),{has:a,get:o}=lo(t);let s=a.call(t,e);s||(e=Ee(e),s=a.call(t,e)),o&&o.call(t,e);const u=t.delete(e);return s&&ii(t,"delete",e,void 0),u}function Ms(){const e=Ee(this),t=e.size!==0,a=e.clear();return t&&ii(e,"clear",void 0,void 0),a}function Ca(e,t){return function(o,s){const u=this,c=u.__v_raw,p=Ee(c),d=t?Ol:e?jl:na;return!e&&wt(p,"iterate",Pi),c.forEach((m,f)=>o.call(s,d(m),d(f),u))}}function xa(e,t,a){return function(...o){const s=this.__v_raw,u=Ee(s),c=un(u),p=e==="entries"||e===Symbol.iterator&&c,d=e==="keys"&&c,m=s[e](...o),f=a?Ol:t?jl:na;return!t&&wt(u,"iterate",d?Qo:Pi),{next(){const{value:h,done:_}=m.next();return _?{value:h,done:_}:{value:p?[f(h[0]),f(h[1])]:f(h),done:_}},[Symbol.iterator](){return this}}}}function ui(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function mp(){const e={get(u){return Sa(this,u)},get size(){return wa(this)},has:ya,add:Ps,set:Fs,delete:Vs,clear:Ms,forEach:Ca(!1,!1)},t={get(u){return Sa(this,u,!1,!0)},get size(){return wa(this)},has:ya,add:Ps,set:Fs,delete:Vs,clear:Ms,forEach:Ca(!1,!0)},a={get(u){return Sa(this,u,!0)},get size(){return wa(this,!0)},has(u){return ya.call(this,u,!0)},add:ui("add"),set:ui("set"),delete:ui("delete"),clear:ui("clear"),forEach:Ca(!0,!1)},o={get(u){return Sa(this,u,!0,!0)},get size(){return wa(this,!0)},has(u){return ya.call(this,u,!0)},add:ui("add"),set:ui("set"),delete:ui("delete"),clear:ui("clear"),forEach:Ca(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(u=>{e[u]=xa(u,!1,!1),a[u]=xa(u,!0,!1),t[u]=xa(u,!1,!0),o[u]=xa(u,!0,!0)}),[e,a,t,o]}const[fp,gp,hp,_p]=mp();function so(e,t){const a=t?e?_p:hp:e?gp:fp;return(o,s,u)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(Re(a,s)&&s in o?a:o,s,u)}const vp={get:so(!1,!1)},bp={get:so(!1,!0)},Sp={get:so(!0,!1)},yp={get:so(!0,!0)},ru=new WeakMap,uu=new WeakMap,cu=new WeakMap,du=new WeakMap;function wp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cp(e){return e.__v_skip||!Object.isExtensible(e)?0:wp(qd(e))}function li(e){return Oi(e)?e:ro(e,!1,up,vp,ru)}function pu(e){return ro(e,!1,dp,bp,uu)}function ql(e){return ro(e,!0,cp,Sp,cu)}function xp(e){return ro(e,!0,pp,yp,du)}function ro(e,t,a,o,s){if(!je(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const u=s.get(e);if(u)return u;const c=Cp(e);if(c===0)return e;const p=new Proxy(e,c===2?o:a);return s.set(e,p),p}function Fi(e){return Oi(e)?Fi(e.__v_raw):!!(e&&e.__v_isReactive)}function Oi(e){return!!(e&&e.__v_isReadonly)}function ia(e){return!!(e&&e.__v_isShallow)}function Nl(e){return Fi(e)||Oi(e)}function Ee(e){const t=e&&e.__v_raw;return t?Ee(t):e}function Gl(e){return Ha(e,"__v_skip",!0),e}const na=e=>je(e)?li(e):e,jl=e=>je(e)?ql(e):e;class mu{constructor(t,a,o,s){this._setter=a,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new bn(()=>t(this._value),()=>dn(this,1),()=>this.dep&&iu(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=o}get value(){const t=Ee(this);return(!t._cacheable||t.effect.dirty)&&Nt(t._value,t._value=t.effect.run())&&dn(t,2),Ul(t),t.effect._dirtyLevel>=1&&dn(t,1),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Ap(e,t,a=!1){let o,s;const u=Ce(e);return u?(o=e,s=bt):(o=e.get,s=e.set),new mu(o,s,u||!s,a)}function Ul(e){bi&&zi&&(e=Ee(e),eu(zi,e.dep||(e.dep=nu(()=>e.dep=void 0,e instanceof mu?e:void 0))))}function dn(e,t=2,a){e=Ee(e);const o=e.dep;o&&tu(o,t)}function ct(e){return!!(e&&e.__v_isRef===!0)}function j(e){return gu(e,!1)}function fu(e){return gu(e,!0)}function gu(e,t){return ct(e)?e:new kp(e,t)}class kp{constructor(t,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?t:Ee(t),this._value=a?t:na(t)}get value(){return Ul(this),this._value}set value(t){const a=this.__v_isShallow||ia(t)||Oi(t);t=a?t:Ee(t),Nt(t,this._rawValue)&&(this._rawValue=t,this._value=a?t:na(t),dn(this,2))}}function Bp(e){dn(e,2)}function r(e){return ct(e)?e.value:e}function $p(e){return Ce(e)?e():r(e)}const Tp={get:(e,t,a)=>r(Reflect.get(e,t,a)),set:(e,t,a,o)=>{const s=e[t];return ct(s)&&!ct(a)?(s.value=a,!0):Reflect.set(e,t,a,o)}};function Yl(e){return Fi(e)?e:new Proxy(e,Tp)}class Lp{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:a,set:o}=t(()=>Ul(this),()=>dn(this));this._get=a,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function hu(e){return new Lp(e)}function Dp(e){const t=ge(e)?new Array(e.length):{};for(const a in e)t[a]=_u(e,a);return t}class Ip{constructor(t,a,o){this._object=t,this._key=a,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return op(Ee(this._object),this._key)}}class Ep{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Zo(e,t,a){return ct(e)?e:Ce(e)?new Ep(e):je(e)&&arguments.length>1?_u(e,t,a):j(e)}function _u(e,t,a){const o=e[t];return ct(o)?o:new Ip(e,t,a)}const Rp={GET:"get",HAS:"has",ITERATE:"iterate"},zp={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Pp(e,t){}const Fp={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},Vp={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function ni(e,t,a,o){let s;try{s=o?e(...o):e()}catch(u){Ji(u,t,a)}return s}function Dt(e,t,a,o){if(Ce(e)){const u=ni(e,t,a,o);return u&&zl(u)&&u.catch(c=>{Ji(c,t,a)}),u}const s=[];for(let u=0;u<e.length;u++)s.push(Dt(e[u],t,a,o));return s}function Ji(e,t,a,o=!0){const s=t?t.vnode:null;if(t){let u=t.parent;const c=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${a}`;for(;u;){const m=u.ec;if(m){for(let f=0;f<m.length;f++)if(m[f](e,c,p)===!1)return}u=u.parent}const d=t.appContext.config.errorHandler;if(d){ni(d,null,10,[e,c,p]);return}}Mp(e,a,s,o)}function Mp(e,t,a,o=!0){console.error(e)}let aa=!1,el=!1;const dt=[];let Kt=0;const pn=[];let fi=null,Ii=0;const vu=Promise.resolve();let Wl=null;function $n(e){const t=Wl||vu;return e?t.then(this?e.bind(this):e):t}function Hp(e){let t=Kt+1,a=dt.length;for(;t<a;){const o=t+a>>>1,s=dt[o],u=oa(s);u<e||u===e&&s.pre?t=o+1:a=o}return t}function uo(e){(!dt.length||!dt.includes(e,aa&&e.allowRecurse?Kt+1:Kt))&&(e.id==null?dt.push(e):dt.splice(Hp(e.id),0,e),bu())}function bu(){!aa&&!el&&(el=!0,Wl=vu.then(Su))}function Op(e){const t=dt.indexOf(e);t>Kt&&dt.splice(t,1)}function Na(e){ge(e)?pn.push(...e):(!fi||!fi.includes(e,e.allowRecurse?Ii+1:Ii))&&pn.push(e),bu()}function Hs(e,t,a=aa?Kt+1:0){for(;a<dt.length;a++){const o=dt[a];if(o&&o.pre){if(e&&o.id!==e.uid)continue;dt.splice(a,1),a--,o()}}}function Ga(e){if(pn.length){const t=[...new Set(pn)].sort((a,o)=>oa(a)-oa(o));if(pn.length=0,fi){fi.push(...t);return}for(fi=t,Ii=0;Ii<fi.length;Ii++)fi[Ii]();fi=null,Ii=0}}const oa=e=>e.id==null?1/0:e.id,qp=(e,t)=>{const a=oa(e)-oa(t);if(a===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return a};function Su(e){el=!1,aa=!0,dt.sort(qp);try{for(Kt=0;Kt<dt.length;Kt++){const t=dt[Kt];t&&t.active!==!1&&ni(t,null,14)}}finally{Kt=0,dt.length=0,Ga(),aa=!1,Wl=null,(dt.length||pn.length)&&Su()}}let on,Aa=[];function yu(e,t){var a,o;on=e,on?(on.enabled=!0,Aa.forEach(({event:s,args:u})=>on.emit(s,...u)),Aa=[]):typeof window<"u"&&window.HTMLElement&&!((o=(a=window.navigator)==null?void 0:a.userAgent)!=null&&o.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(u=>{yu(u,t)}),setTimeout(()=>{on||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Aa=[])},3e3)):Aa=[]}function Np(e,t,...a){if(e.isUnmounted)return;const o=e.vnode.props||qe;let s=a;const u=t.startsWith("update:"),c=u&&t.slice(7);if(c&&c in o){const f=`${c==="modelValue"?"model":c}Modifiers`,{number:h,trim:_}=o[f]||qe;_&&(s=a.map(x=>Je(x)?x.trim():x)),h&&(s=a.map(ta))}let p,d=o[p=Yn(t)]||o[p=Yn(ht(t))];!d&&u&&(d=o[p=Yn($t(t))]),d&&Dt(d,e,6,s);const m=o[p+"Once"];if(m){if(!e.emitted)e.emitted={};else if(e.emitted[p])return;e.emitted[p]=!0,Dt(m,e,6,s)}}function wu(e,t,a=!1){const o=t.emitsCache,s=o.get(e);if(s!==void 0)return s;const u=e.emits;let c={},p=!1;if(!Ce(e)){const d=m=>{const f=wu(m,t,!0);f&&(p=!0,Xe(c,f))};!a&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}return!u&&!p?(je(e)&&o.set(e,null),null):(ge(u)?u.forEach(d=>c[d]=null):Xe(c,u),je(e)&&o.set(e,c),c)}function co(e,t){return!e||!ma(t)?!1:(t=t.slice(2).replace(/Once$/,""),Re(e,t[0].toLowerCase()+t.slice(1))||Re(e,$t(t))||Re(e,t))}let tt=null,po=null;function la(e){const t=tt;return tt=e,po=e&&e.type.__scopeId||null,t}function Cu(e){po=e}function xu(){po=null}const Gp=e=>n;function n(e,t=tt,a){if(!t||e._n)return e;const o=(...s)=>{o._d&&ul(-1);const u=la(t);let c;try{c=e(...s)}finally{la(u),o._d&&ul(1)}return c};return o._n=!0,o._c=!0,o._d=!0,o}function Pa(e){const{type:t,vnode:a,proxy:o,withProxy:s,props:u,propsOptions:[c],slots:p,attrs:d,emit:m,render:f,renderCache:h,data:_,setupState:x,ctx:y,inheritAttrs:A}=e;let T,I;const g=la(e);try{if(a.shapeFlag&4){const w=s||o,k=w;T=kt(f.call(k,w,h,u,x,_,y)),I=d}else{const w=t;T=kt(w.length>1?w(u,{attrs:d,slots:p,emit:m}):w(u,null)),I=t.props?d:Up(d)}}catch(w){Xn.length=0,Ji(w,e,1),T=i(mt)}let v=T;if(I&&A!==!1){const w=Object.keys(I),{shapeFlag:k}=v;w.length&&k&7&&(c&&w.some(El)&&(I=Yp(I,c)),v=Xt(v,I))}return a.dirs&&(v=Xt(v),v.dirs=v.dirs?v.dirs.concat(a.dirs):a.dirs),a.transition&&(v.transition=a.transition),T=v,la(g),T}function jp(e,t=!0){let a;for(let o=0;o<e.length;o++){const s=e[o];if(Ct(s)){if(s.type!==mt||s.children==="v-if"){if(a)return;a=s}}else return}return a}const Up=e=>{let t;for(const a in e)(a==="class"||a==="style"||ma(a))&&((t||(t={}))[a]=e[a]);return t},Yp=(e,t)=>{const a={};for(const o in e)(!El(o)||!(o.slice(9)in t))&&(a[o]=e[o]);return a};function Wp(e,t,a){const{props:o,children:s,component:u}=e,{props:c,children:p,patchFlag:d}=t,m=u.emitsOptions;if(t.dirs||t.transition)return!0;if(a&&d>=0){if(d&1024)return!0;if(d&16)return o?Os(o,c,m):!!c;if(d&8){const f=t.dynamicProps;for(let h=0;h<f.length;h++){const _=f[h];if(c[_]!==o[_]&&!co(m,_))return!0}}}else return(s||p)&&(!p||!p.$stable)?!0:o===c?!1:o?c?Os(o,c,m):!0:!!c;return!1}function Os(e,t,a){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let s=0;s<o.length;s++){const u=o[s];if(t[u]!==e[u]&&!co(a,u))return!0}return!1}function Kl({vnode:e,parent:t},a){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=t.vnode).el=a,t=t.parent;else break}}const Xl="components",Kp="directives";function $(e,t){return Jl(Xl,e,!0,t)||e}const Au=Symbol.for("v-ndc");function tl(e){return Je(e)?Jl(Xl,e,!1)||e:e||Au}function mo(e){return Jl(Kp,e)}function Jl(e,t,a=!0,o=!1){const s=tt||nt;if(s){const u=s.type;if(e===Xl){const p=fl(u,!1);if(p&&(p===t||p===ht(t)||p===fa(ht(t))))return u}const c=qs(s[e]||u[e],t)||qs(s.appContext[e],t);return!c&&o?u:c}}function qs(e,t){return e&&(e[t]||e[ht(t)]||e[fa(ht(t))])}const ku=e=>e.__isSuspense;let il=0;const Xp={name:"Suspense",__isSuspense:!0,process(e,t,a,o,s,u,c,p,d,m){if(e==null)Qp(t,a,o,s,u,c,p,d,m);else{if(u&&u.deps>0){t.suspense=e.suspense;return}Zp(e,t,a,o,s,c,p,d,m)}},hydrate:em,create:Ql,normalize:tm},Jp=Xp;function sa(e,t){const a=e.props&&e.props[t];Ce(a)&&a()}function Qp(e,t,a,o,s,u,c,p,d){const{p:m,o:{createElement:f}}=d,h=f("div"),_=e.suspense=Ql(e,s,o,t,h,a,u,c,p,d);m(null,_.pendingBranch=e.ssContent,h,null,o,_,u,c),_.deps>0?(sa(e,"onPending"),sa(e,"onFallback"),m(null,e.ssFallback,t,a,o,null,u,c),mn(_,e.ssFallback)):_.resolve(!1,!0)}function Zp(e,t,a,o,s,u,c,p,{p:d,um:m,o:{createElement:f}}){const h=t.suspense=e.suspense;h.vnode=t,t.el=e.el;const _=t.ssContent,x=t.ssFallback,{activeBranch:y,pendingBranch:A,isInFallback:T,isHydrating:I}=h;if(A)h.pendingBranch=_,qt(_,A)?(d(A,_,h.hiddenContainer,null,s,h,u,c,p),h.deps<=0?h.resolve():T&&(I||(d(y,x,a,o,s,null,u,c,p),mn(h,x)))):(h.pendingId=il++,I?(h.isHydrating=!1,h.activeBranch=A):m(A,s,h),h.deps=0,h.effects.length=0,h.hiddenContainer=f("div"),T?(d(null,_,h.hiddenContainer,null,s,h,u,c,p),h.deps<=0?h.resolve():(d(y,x,a,o,s,null,u,c,p),mn(h,x))):y&&qt(_,y)?(d(y,_,a,o,s,h,u,c,p),h.resolve(!0)):(d(null,_,h.hiddenContainer,null,s,h,u,c,p),h.deps<=0&&h.resolve()));else if(y&&qt(_,y))d(y,_,a,o,s,h,u,c,p),mn(h,_);else if(sa(t,"onPending"),h.pendingBranch=_,_.shapeFlag&512?h.pendingId=_.component.suspenseId:h.pendingId=il++,d(null,_,h.hiddenContainer,null,s,h,u,c,p),h.deps<=0)h.resolve();else{const{timeout:g,pendingId:v}=h;g>0?setTimeout(()=>{h.pendingId===v&&h.fallback(x)},g):g===0&&h.fallback(x)}}function Ql(e,t,a,o,s,u,c,p,d,m,f=!1){const{p:h,m:_,um:x,n:y,o:{parentNode:A,remove:T}}=m;let I;const g=im(e);g&&t!=null&&t.pendingBranch&&(I=t.pendingId,t.deps++);const v=e.props?Oa(e.props.timeout):void 0,w=u,k={vnode:e,parent:t,parentComponent:a,namespace:c,container:o,hiddenContainer:s,deps:0,pendingId:il++,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!f,isHydrating:f,isUnmounted:!1,effects:[],resolve(E=!1,V=!1){const{vnode:H,activeBranch:P,pendingBranch:G,pendingId:J,effects:Y,parentComponent:pe,container:Ae}=k;let U=!1;k.isHydrating?k.isHydrating=!1:E||(U=P&&G.transition&&G.transition.mode==="out-in",U&&(P.transition.afterLeave=()=>{J===k.pendingId&&(_(G,Ae,u===w?y(P):u,0),Na(Y))}),P&&(A(P.el)!==k.hiddenContainer&&(u=y(P)),x(P,pe,k,!0)),U||_(G,Ae,u,0)),mn(k,G),k.pendingBranch=null,k.isInFallback=!1;let K=k.parent,ue=!1;for(;K;){if(K.pendingBranch){K.effects.push(...Y),ue=!0;break}K=K.parent}!ue&&!U&&Na(Y),k.effects=[],g&&t&&t.pendingBranch&&I===t.pendingId&&(t.deps--,t.deps===0&&!V&&t.resolve()),sa(H,"onResolve")},fallback(E){if(!k.pendingBranch)return;const{vnode:V,activeBranch:H,parentComponent:P,container:G,namespace:J}=k;sa(V,"onFallback");const Y=y(H),pe=()=>{k.isInFallback&&(h(null,E,G,Y,P,null,J,p,d),mn(k,E))},Ae=E.transition&&E.transition.mode==="out-in";Ae&&(H.transition.afterLeave=pe),k.isInFallback=!0,x(H,P,null,!0),Ae||pe()},move(E,V,H){k.activeBranch&&_(k.activeBranch,E,V,H),k.container=E},next(){return k.activeBranch&&y(k.activeBranch)},registerDep(E,V){const H=!!k.pendingBranch;H&&k.deps++;const P=E.vnode.el;E.asyncDep.catch(G=>{Ji(G,E,0)}).then(G=>{if(E.isUnmounted||k.isUnmounted||k.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:J}=E;pl(E,G,!1),P&&(J.el=P);const Y=!P&&E.subTree.el;V(E,J,A(P||E.subTree.el),P?null:y(E.subTree),k,c,d),Y&&T(Y),Kl(E,J.el),H&&--k.deps===0&&k.resolve()})},unmount(E,V){k.isUnmounted=!0,k.activeBranch&&x(k.activeBranch,a,E,V),k.pendingBranch&&x(k.pendingBranch,a,E,V)}};return k}function em(e,t,a,o,s,u,c,p,d){const m=t.suspense=Ql(t,o,a,e.parentNode,document.createElement("div"),null,s,u,c,p,!0),f=d(e,m.pendingBranch=t.ssContent,a,m,u,c);return m.deps===0&&m.resolve(!1,!0),f}function tm(e){const{shapeFlag:t,children:a}=e,o=t&32;e.ssContent=Ns(o?a.default:a),e.ssFallback=o?Ns(a.fallback):i(mt)}function Ns(e){let t;if(Ce(e)){const a=ji&&e._c;a&&(e._d=!1,S()),e=e(),a&&(e._d=!0,t=St,ac())}return ge(e)&&(e=jp(e)),e=kt(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(a=>a!==e)),e}function Bu(e,t){t&&t.pendingBranch?ge(e)?t.effects.push(...e):t.effects.push(e):Na(e)}function mn(e,t){e.activeBranch=t;const{vnode:a,parentComponent:o}=e;let s=t.el;for(;!s&&t.component;)t=t.component.subTree,s=t.el;a.el=s,o&&o.subTree===a&&(o.vnode.el=s,Kl(o,s))}function im(e){var t;return((t=e.props)==null?void 0:t.suspensible)!=null&&e.props.suspensible!==!1}const $u=Symbol.for("v-scx"),Tu=()=>Ve($u);function Zl(e,t){return ha(e,null,t)}function Lu(e,t){return ha(e,null,{flush:"post"})}function Du(e,t){return ha(e,null,{flush:"sync"})}const ka={};function pt(e,t,a){return ha(e,t,a)}function ha(e,t,{immediate:a,deep:o,flush:s,once:u,onTrack:c,onTrigger:p}=qe){if(t&&u){const E=t;t=(...V)=>{E(...V),k()}}const d=nt,m=E=>o===!0?E:Ei(E,o===!1?1:void 0);let f,h=!1,_=!1;if(ct(e)?(f=()=>e.value,h=ia(e)):Fi(e)?(f=()=>m(e),h=!0):ge(e)?(_=!0,h=e.some(E=>Fi(E)||ia(E)),f=()=>e.map(E=>{if(ct(E))return E.value;if(Fi(E))return m(E);if(Ce(E))return ni(E,d,2)})):Ce(e)?t?f=()=>ni(e,d,2):f=()=>(x&&x(),Dt(e,d,3,[y])):f=bt,t&&o){const E=f;f=()=>Ei(E())}let x,y=E=>{x=v.onStop=()=>{ni(E,d,4),x=v.onStop=void 0}},A;if(va)if(y=bt,t?a&&Dt(t,d,3,[f(),_?[]:void 0,y]):f(),s==="sync"){const E=Tu();A=E.__watcherHandles||(E.__watcherHandles=[])}else return bt;let T=_?new Array(e.length).fill(ka):ka;const I=()=>{if(!(!v.active||!v.dirty))if(t){const E=v.run();(o||h||(_?E.some((V,H)=>Nt(V,T[H])):Nt(E,T)))&&(x&&x(),Dt(t,d,3,[E,T===ka?void 0:_&&T[0]===ka?[]:T,y]),T=E)}else v.run()};I.allowRecurse=!!t;let g;s==="sync"?g=I:s==="post"?g=()=>rt(I,d&&d.suspense):(I.pre=!0,d&&(I.id=d.uid),g=()=>uo(I));const v=new bn(f,bt,g),w=Vl(),k=()=>{v.stop(),w&&Rl(w.effects,v)};return t?a?I():T=v.run():s==="post"?rt(v.run.bind(v),d&&d.suspense):v.run(),A&&A.push(k),k}function nm(e,t,a){const o=this.proxy,s=Je(e)?e.includes(".")?Iu(o,e):()=>o[e]:e.bind(o,o);let u;Ce(t)?u=t:(u=t.handler,a=t);const c=Ui(this),p=ha(s,u.bind(o),a);return c(),p}function Iu(e,t){const a=t.split(".");return()=>{let o=e;for(let s=0;s<a.length&&o;s++)o=o[a[s]];return o}}function Ei(e,t,a=0,o){if(!je(e)||e.__v_skip)return e;if(t&&t>0){if(a>=t)return e;a++}if(o=o||new Set,o.has(e))return e;if(o.add(e),ct(e))Ei(e.value,t,a,o);else if(ge(e))for(let s=0;s<e.length;s++)Ei(e[s],t,a,o);else if(Wi(e)||un(e))e.forEach(s=>{Ei(s,t,a,o)});else if(Ur(e))for(const s in e)Ei(e[s],t,a,o);return e}function Si(e,t){if(tt===null)return e;const a=So(tt)||tt.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[u,c,p,d=qe]=t[s];u&&(Ce(u)&&(u={mounted:u,updated:u}),u.deep&&Ei(c),o.push({dir:u,instance:a,value:c,oldValue:void 0,arg:p,modifiers:d}))}return e}function Ut(e,t,a,o){const s=e.dirs,u=t&&t.dirs;for(let c=0;c<s.length;c++){const p=s[c];u&&(p.oldValue=u[c].value);let d=p.dir[o];d&&(Ki(),Dt(d,a,8,[e.el,p,e,t]),Xi())}}const gi=Symbol("_leaveCb"),Ba=Symbol("_enterCb");function es(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xi(()=>{e.isMounted=!0}),_o(()=>{e.isUnmounting=!0}),e}const zt=[Function,Array],ts={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:zt,onEnter:zt,onAfterEnter:zt,onEnterCancelled:zt,onBeforeLeave:zt,onLeave:zt,onAfterLeave:zt,onLeaveCancelled:zt,onBeforeAppear:zt,onAppear:zt,onAfterAppear:zt,onAppearCancelled:zt},am={name:"BaseTransition",props:ts,setup(e,{slots:t}){const a=Jt(),o=es();let s;return()=>{const u=t.default&&fo(t.default(),!0);if(!u||!u.length)return;let c=u[0];if(u.length>1){for(const A of u)if(A.type!==mt){c=A;break}}const p=Ee(e),{mode:d}=p;if(o.isLeaving)return $o(c);const m=Gs(c);if(!m)return $o(c);const f=Sn(m,p,o,a);qi(m,f);const h=a.subTree,_=h&&Gs(h);let x=!1;const{getTransitionKey:y}=m.type;if(y){const A=y();s===void 0?s=A:A!==s&&(s=A,x=!0)}if(_&&_.type!==mt&&(!qt(m,_)||x)){const A=Sn(_,p,o,a);if(qi(_,A),d==="out-in")return o.isLeaving=!0,A.afterLeave=()=>{o.isLeaving=!1,a.update.active!==!1&&(a.effect.dirty=!0,a.update())},$o(c);d==="in-out"&&m.type!==mt&&(A.delayLeave=(T,I,g)=>{const v=Ru(o,_);v[String(_.key)]=_,T[gi]=()=>{I(),T[gi]=void 0,delete f.delayedLeave},f.delayedLeave=g})}return c}}},Eu=am;function Ru(e,t){const{leavingVNodes:a}=e;let o=a.get(t.type);return o||(o=Object.create(null),a.set(t.type,o)),o}function Sn(e,t,a,o){const{appear:s,mode:u,persisted:c=!1,onBeforeEnter:p,onEnter:d,onAfterEnter:m,onEnterCancelled:f,onBeforeLeave:h,onLeave:_,onAfterLeave:x,onLeaveCancelled:y,onBeforeAppear:A,onAppear:T,onAfterAppear:I,onAppearCancelled:g}=t,v=String(e.key),w=Ru(a,e),k=(H,P)=>{H&&Dt(H,o,9,P)},E=(H,P)=>{const G=P[1];k(H,P),ge(H)?H.every(J=>J.length<=1)&&G():H.length<=1&&G()},V={mode:u,persisted:c,beforeEnter(H){let P=p;if(!a.isMounted)if(s)P=A||p;else return;H[gi]&&H[gi](!0);const G=w[v];G&&qt(e,G)&&G.el[gi]&&G.el[gi](),k(P,[H])},enter(H){let P=d,G=m,J=f;if(!a.isMounted)if(s)P=T||d,G=I||m,J=g||f;else return;let Y=!1;const pe=H[Ba]=Ae=>{Y||(Y=!0,Ae?k(J,[H]):k(G,[H]),V.delayedLeave&&V.delayedLeave(),H[Ba]=void 0)};P?E(P,[H,pe]):pe()},leave(H,P){const G=String(e.key);if(H[Ba]&&H[Ba](!0),a.isUnmounting)return P();k(h,[H]);let J=!1;const Y=H[gi]=pe=>{J||(J=!0,P(),pe?k(y,[H]):k(x,[H]),H[gi]=void 0,w[G]===e&&delete w[G])};w[G]=e,_?E(_,[H,Y]):Y()},clone(H){return Sn(H,t,a,o)}};return V}function $o(e){if(_a(e))return e=Xt(e),e.children=null,e}function Gs(e){return _a(e)?e.children?e.children[0]:void 0:e}function qi(e,t){e.shapeFlag&6&&e.component?qi(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function fo(e,t=!1,a){let o=[],s=0;for(let u=0;u<e.length;u++){let c=e[u];const p=a==null?c.key:String(a)+String(c.key!=null?c.key:u);c.type===we?(c.patchFlag&128&&s++,o=o.concat(fo(c.children,t,p))):(t||c.type!==mt)&&o.push(p!=null?Xt(c,{key:p}):c)}if(s>1)for(let u=0;u<o.length;u++)o[u].patchFlag=-2;return o}/*! #__NO_SIDE_EFFECTS__ */function F(e,t){return Ce(e)?Xe({name:e.name},t,{setup:e}):e}const Vi=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function om(e){Ce(e)&&(e={loader:e});const{loader:t,loadingComponent:a,errorComponent:o,delay:s=200,timeout:u,suspensible:c=!0,onError:p}=e;let d=null,m,f=0;const h=()=>(f++,d=null,_()),_=()=>{let x;return d||(x=d=t().catch(y=>{if(y=y instanceof Error?y:new Error(String(y)),p)return new Promise((A,T)=>{p(y,()=>A(h()),()=>T(y),f+1)});throw y}).then(y=>x!==d&&d?d:(y&&(y.__esModule||y[Symbol.toStringTag]==="Module")&&(y=y.default),m=y,y)))};return F({name:"AsyncComponentWrapper",__asyncLoader:_,get __asyncResolved(){return m},setup(){const x=nt;if(m)return()=>To(m,x);const y=g=>{d=null,Ji(g,x,13,!o)};if(c&&x.suspense||va)return _().then(g=>()=>To(g,x)).catch(g=>(y(g),()=>o?i(o,{error:g}):null));const A=j(!1),T=j(),I=j(!!s);return s&&setTimeout(()=>{I.value=!1},s),u!=null&&setTimeout(()=>{if(!A.value&&!T.value){const g=new Error(`Async component timed out after ${u}ms.`);y(g),T.value=g}},u),_().then(()=>{A.value=!0,x.parent&&_a(x.parent.vnode)&&(x.parent.effect.dirty=!0,uo(x.parent.update))}).catch(g=>{y(g),T.value=g}),()=>{if(A.value&&m)return To(m,x);if(T.value&&o)return i(o,{error:T.value});if(a&&!I.value)return i(a)}}})}function To(e,t){const{ref:a,props:o,children:s,ce:u}=t.vnode,c=i(e,o,s);return c.ref=a,c.ce=u,delete t.vnode.ce,c}const _a=e=>e.type.__isKeepAlive,lm={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const a=Jt(),o=a.ctx;if(!o.renderer)return()=>{const g=t.default&&t.default();return g&&g.length===1?g[0]:g};const s=new Map,u=new Set;let c=null;const p=a.suspense,{renderer:{p:d,m,um:f,o:{createElement:h}}}=o,_=h("div");o.activate=(g,v,w,k,E)=>{const V=g.component;m(g,v,w,0,p),d(V.vnode,g,v,w,V,p,k,g.slotScopeIds,E),rt(()=>{V.isDeactivated=!1,V.a&&cn(V.a);const H=g.props&&g.props.onVnodeMounted;H&&vt(H,V.parent,g)},p)},o.deactivate=g=>{const v=g.component;m(g,_,null,1,p),rt(()=>{v.da&&cn(v.da);const w=g.props&&g.props.onVnodeUnmounted;w&&vt(w,v.parent,g),v.isDeactivated=!0},p)};function x(g){Lo(g),f(g,a,p,!0)}function y(g){s.forEach((v,w)=>{const k=fl(v.type);k&&(!g||!g(k))&&A(w)})}function A(g){const v=s.get(g);!c||!qt(v,c)?x(v):c&&Lo(c),s.delete(g),u.delete(g)}pt(()=>[e.include,e.exclude],([g,v])=>{g&&y(w=>On(g,w)),v&&y(w=>!On(v,w))},{flush:"post",deep:!0});let T=null;const I=()=>{T!=null&&s.set(T,Do(a.subTree))};return xi(I),ho(I),_o(()=>{s.forEach(g=>{const{subTree:v,suspense:w}=a,k=Do(v);if(g.type===k.type&&g.key===k.key){Lo(k);const E=k.component.da;E&&rt(E,w);return}x(g)})}),()=>{if(T=null,!t.default)return null;const g=t.default(),v=g[0];if(g.length>1)return c=null,g;if(!Ct(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return c=null,v;let w=Do(v);const k=w.type,E=fl(Vi(w)?w.type.__asyncResolved||{}:k),{include:V,exclude:H,max:P}=e;if(V&&(!E||!On(V,E))||H&&E&&On(H,E))return c=w,v;const G=w.key==null?k:w.key,J=s.get(G);return w.el&&(w=Xt(w),v.shapeFlag&128&&(v.ssContent=w)),T=G,J?(w.el=J.el,w.component=J.component,w.transition&&qi(w,w.transition),w.shapeFlag|=512,u.delete(G),u.add(G)):(u.add(G),P&&u.size>parseInt(P,10)&&A(u.values().next().value)),w.shapeFlag|=256,c=w,ku(v.type)?v:w}}},sm=lm;function On(e,t){return ge(e)?e.some(a=>On(a,t)):Je(e)?e.split(",").includes(t):Od(e)?e.test(t):!1}function is(e,t){zu(e,"a",t)}function ns(e,t){zu(e,"da",t)}function zu(e,t,a=nt){const o=e.__wdc||(e.__wdc=()=>{let s=a;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(go(t,o,a),a){let s=a.parent;for(;s&&s.parent;)_a(s.parent.vnode)&&rm(o,t,a,s),s=s.parent}}function rm(e,t,a,o){const s=go(t,e,o,!0);Qi(()=>{Rl(o[t],s)},a)}function Lo(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Do(e){return e.shapeFlag&128?e.ssContent:e}function go(e,t,a=nt,o=!1){if(a){const s=a[e]||(a[e]=[]),u=t.__weh||(t.__weh=(...c)=>{if(a.isUnmounted)return;Ki();const p=Ui(a),d=Dt(t,a,e,c);return p(),Xi(),d});return o?s.unshift(u):s.push(u),u}}const si=e=>(t,a=nt)=>(!va||e==="sp")&&go(e,(...o)=>t(...o),a),Pu=si("bm"),xi=si("m"),Fu=si("bu"),ho=si("u"),_o=si("bum"),Qi=si("um"),Vu=si("sp"),Mu=si("rtg"),Hu=si("rtc");function Ou(e,t=nt){go("ec",e,t)}function Qe(e,t,a,o){let s;const u=a&&a[o];if(ge(e)||Je(e)){s=new Array(e.length);for(let c=0,p=e.length;c<p;c++)s[c]=t(e[c],c,void 0,u&&u[c])}else if(typeof e=="number"){s=new Array(e);for(let c=0;c<e;c++)s[c]=t(c+1,c,void 0,u&&u[c])}else if(je(e))if(e[Symbol.iterator])s=Array.from(e,(c,p)=>t(c,p,void 0,u&&u[p]));else{const c=Object.keys(e);s=new Array(c.length);for(let p=0,d=c.length;p<d;p++){const m=c[p];s[p]=t(e[m],m,p,u&&u[p])}}else s=[];return a&&(a[o]=s),s}function um(e,t){for(let a=0;a<t.length;a++){const o=t[a];if(ge(o))for(let s=0;s<o.length;s++)e[o[s].name]=o[s].fn;else o&&(e[o.name]=o.key?(...s)=>{const u=o.fn(...s);return u&&(u.key=o.key),u}:o.fn)}return e}function Ni(e,t,a={},o,s){if(tt.isCE||tt.parent&&Vi(tt.parent)&&tt.parent.isCE)return t!=="default"&&(a.name=t),i("slot",a,o&&o());let u=e[t];u&&u._c&&(u._d=!1),S();const c=u&&qu(u(a)),p=C(we,{key:a.key||c&&c.key||`_${t}`},c||(o?o():[]),c&&e._===1?64:-2);return!s&&p.scopeId&&(p.slotScopeIds=[p.scopeId+"-s"]),u&&u._c&&(u._d=!0),p}function qu(e){return e.some(t=>Ct(t)?!(t.type===mt||t.type===we&&!qu(t.children)):!0)?e:null}function cm(e,t){const a={};for(const o in e)a[t&&/[A-Z]/.test(o)?`on:${o}`:Yn(o)]=e[o];return a}const nl=e=>e?uc(e)?So(e)||e.proxy:nl(e.parent):null,Wn=Xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>nl(e.parent),$root:e=>nl(e.root),$emit:e=>e.emit,$options:e=>as(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,uo(e.update)}),$nextTick:e=>e.n||(e.n=$n.bind(e.proxy)),$watch:e=>nm.bind(e)}),Io=(e,t)=>e!==qe&&!e.__isScriptSetup&&Re(e,t),al={get({_:e},t){const{ctx:a,setupState:o,data:s,props:u,accessCache:c,type:p,appContext:d}=e;let m;if(t[0]!=="$"){const x=c[t];if(x!==void 0)switch(x){case 1:return o[t];case 2:return s[t];case 4:return a[t];case 3:return u[t]}else{if(Io(o,t))return c[t]=1,o[t];if(s!==qe&&Re(s,t))return c[t]=2,s[t];if((m=e.propsOptions[0])&&Re(m,t))return c[t]=3,u[t];if(a!==qe&&Re(a,t))return c[t]=4,a[t];ol&&(c[t]=0)}}const f=Wn[t];let h,_;if(f)return t==="$attrs"&&wt(e,"get",t),f(e);if((h=p.__cssModules)&&(h=h[t]))return h;if(a!==qe&&Re(a,t))return c[t]=4,a[t];if(_=d.config.globalProperties,Re(_,t))return _[t]},set({_:e},t,a){const{data:o,setupState:s,ctx:u}=e;return Io(s,t)?(s[t]=a,!0):o!==qe&&Re(o,t)?(o[t]=a,!0):Re(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(u[t]=a,!0)},has({_:{data:e,setupState:t,accessCache:a,ctx:o,appContext:s,propsOptions:u}},c){let p;return!!a[c]||e!==qe&&Re(e,c)||Io(t,c)||(p=u[0])&&Re(p,c)||Re(o,c)||Re(Wn,c)||Re(s.config.globalProperties,c)},defineProperty(e,t,a){return a.get!=null?e._.accessCache[t]=0:Re(a,"value")&&this.set(e,t,a.value,null),Reflect.defineProperty(e,t,a)}},dm=Xe({},al,{get(e,t){if(t!==Symbol.unscopables)return al.get(e,t,e)},has(e,t){return t[0]!=="_"&&!Ud(t)}});function pm(){return null}function mm(){return null}function fm(e){}function gm(e){}function hm(){return null}function _m(){}function vm(e,t){return null}function bm(){return Gu().slots}function Nu(){return Gu().attrs}function Gu(){const e=Jt();return e.setupContext||(e.setupContext=pc(e))}function ra(e){return ge(e)?e.reduce((t,a)=>(t[a]=null,t),{}):e}function Sm(e,t){const a=ra(e);for(const o in t){if(o.startsWith("__skip"))continue;let s=a[o];s?ge(s)||Ce(s)?s=a[o]={type:s,default:t[o]}:s.default=t[o]:s===null&&(s=a[o]={default:t[o]}),s&&t[`__skip_${o}`]&&(s.skipFactory=!0)}return a}function ym(e,t){return!e||!t?e||t:ge(e)&&ge(t)?e.concat(t):Xe({},ra(e),ra(t))}function wm(e,t){const a={};for(const o in e)t.includes(o)||Object.defineProperty(a,o,{enumerable:!0,get:()=>e[o]});return a}function Cm(e){const t=Jt();let a=e();return dl(),zl(a)&&(a=a.catch(o=>{throw Ui(t),o})),[a,()=>Ui(t)]}let ol=!0;function xm(e){const t=as(e),a=e.proxy,o=e.ctx;ol=!1,t.beforeCreate&&js(t.beforeCreate,e,"bc");const{data:s,computed:u,methods:c,watch:p,provide:d,inject:m,created:f,beforeMount:h,mounted:_,beforeUpdate:x,updated:y,activated:A,deactivated:T,beforeDestroy:I,beforeUnmount:g,destroyed:v,unmounted:w,render:k,renderTracked:E,renderTriggered:V,errorCaptured:H,serverPrefetch:P,expose:G,inheritAttrs:J,components:Y,directives:pe,filters:Ae}=t;if(m&&Am(m,o,null),c)for(const ue in c){const ne=c[ue];Ce(ne)&&(o[ue]=ne.bind(a))}if(s){const ue=s.call(a,a);je(ue)&&(e.data=li(ue))}if(ol=!0,u)for(const ue in u){const ne=u[ue],Le=Ce(ne)?ne.bind(a,a):Ce(ne.get)?ne.get.bind(a,a):bt,We=!Ce(ne)&&Ce(ne.set)?ne.set.bind(a):bt,at=M({get:Le,set:We});Object.defineProperty(o,ue,{enumerable:!0,configurable:!0,get:()=>at.value,set:Ue=>at.value=Ue})}if(p)for(const ue in p)ju(p[ue],o,a,ue);if(d){const ue=Ce(d)?d.call(a):d;Reflect.ownKeys(ue).forEach(ne=>{ut(ne,ue[ne])})}f&&js(f,e,"c");function K(ue,ne){ge(ne)?ne.forEach(Le=>ue(Le.bind(a))):ne&&ue(ne.bind(a))}if(K(Pu,h),K(xi,_),K(Fu,x),K(ho,y),K(is,A),K(ns,T),K(Ou,H),K(Hu,E),K(Mu,V),K(_o,g),K(Qi,w),K(Vu,P),ge(G))if(G.length){const ue=e.exposed||(e.exposed={});G.forEach(ne=>{Object.defineProperty(ue,ne,{get:()=>a[ne],set:Le=>a[ne]=Le})})}else e.exposed||(e.exposed={});k&&e.render===bt&&(e.render=k),J!=null&&(e.inheritAttrs=J),Y&&(e.components=Y),pe&&(e.directives=pe)}function Am(e,t,a=bt){ge(e)&&(e=ll(e));for(const o in e){const s=e[o];let u;je(s)?"default"in s?u=Ve(s.from||o,s.default,!0):u=Ve(s.from||o):u=Ve(s),ct(u)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>u.value,set:c=>u.value=c}):t[o]=u}}function js(e,t,a){Dt(ge(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,a)}function ju(e,t,a,o){const s=o.includes(".")?Iu(a,o):()=>a[o];if(Je(e)){const u=t[e];Ce(u)&&pt(s,u)}else if(Ce(e))pt(s,e.bind(a));else if(je(e))if(ge(e))e.forEach(u=>ju(u,t,a,o));else{const u=Ce(e.handler)?e.handler.bind(a):t[e.handler];Ce(u)&&pt(s,u,e)}}function as(e){const t=e.type,{mixins:a,extends:o}=t,{mixins:s,optionsCache:u,config:{optionMergeStrategies:c}}=e.appContext,p=u.get(t);let d;return p?d=p:!s.length&&!a&&!o?d=t:(d={},s.length&&s.forEach(m=>ja(d,m,c,!0)),ja(d,t,c)),je(t)&&u.set(t,d),d}function ja(e,t,a,o=!1){const{mixins:s,extends:u}=t;u&&ja(e,u,a,!0),s&&s.forEach(c=>ja(e,c,a,!0));for(const c in t)if(!(o&&c==="expose")){const p=km[c]||a&&a[c];e[c]=p?p(e[c],t[c]):t[c]}return e}const km={data:Us,props:Ys,emits:Ys,methods:qn,computed:qn,beforeCreate:gt,created:gt,beforeMount:gt,mounted:gt,beforeUpdate:gt,updated:gt,beforeDestroy:gt,beforeUnmount:gt,destroyed:gt,unmounted:gt,activated:gt,deactivated:gt,errorCaptured:gt,serverPrefetch:gt,components:qn,directives:qn,watch:$m,provide:Us,inject:Bm};function Us(e,t){return t?e?function(){return Xe(Ce(e)?e.call(this,this):e,Ce(t)?t.call(this,this):t)}:t:e}function Bm(e,t){return qn(ll(e),ll(t))}function ll(e){if(ge(e)){const t={};for(let a=0;a<e.length;a++)t[e[a]]=e[a];return t}return e}function gt(e,t){return e?[...new Set([].concat(e,t))]:t}function qn(e,t){return e?Xe(Object.create(null),e,t):t}function Ys(e,t){return e?ge(e)&&ge(t)?[...new Set([...e,...t])]:Xe(Object.create(null),ra(e),ra(t??{})):t}function $m(e,t){if(!e)return t;if(!t)return e;const a=Xe(Object.create(null),e);for(const o in t)a[o]=gt(e[o],t[o]);return a}function Uu(){return{app:null,config:{isNativeTag:Md,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tm=0;function Lm(e,t){return function(o,s=null){Ce(o)||(o=Xe({},o)),s!=null&&!je(s)&&(s=null);const u=Uu(),c=new WeakSet;let p=!1;const d=u.app={_uid:Tm++,_component:o,_props:s,_container:null,_context:u,_instance:null,version:fc,get config(){return u.config},set config(m){},use(m,...f){return c.has(m)||(m&&Ce(m.install)?(c.add(m),m.install(d,...f)):Ce(m)&&(c.add(m),m(d,...f))),d},mixin(m){return u.mixins.includes(m)||u.mixins.push(m),d},component(m,f){return f?(u.components[m]=f,d):u.components[m]},directive(m,f){return f?(u.directives[m]=f,d):u.directives[m]},mount(m,f,h){if(!p){const _=i(o,s);return _.appContext=u,h===!0?h="svg":h===!1&&(h=void 0),f&&t?t(_,m):e(_,m,h),p=!0,d._container=m,m.__vue_app__=d,So(_.component)||_.component.proxy}},unmount(){p&&(e(null,d._container),delete d._container.__vue_app__)},provide(m,f){return u.provides[m]=f,d},runWithContext(m){ua=d;try{return m()}finally{ua=null}}};return d}}let ua=null;function ut(e,t){if(nt){let a=nt.provides;const o=nt.parent&&nt.parent.provides;o===a&&(a=nt.provides=Object.create(o)),a[e]=t}}function Ve(e,t,a=!1){const o=nt||tt;if(o||ua){const s=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:ua._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return a&&Ce(t)?t.call(o&&o.proxy):t}}function Dm(){return!!(nt||tt||ua)}function Im(e,t,a,o=!1){const s={},u={};Ha(u,bo,1),e.propsDefaults=Object.create(null),Yu(e,t,s,u);for(const c in e.propsOptions[0])c in s||(s[c]=void 0);a?e.props=o?s:pu(s):e.type.props?e.props=s:e.props=u,e.attrs=u}function Em(e,t,a,o){const{props:s,attrs:u,vnode:{patchFlag:c}}=e,p=Ee(s),[d]=e.propsOptions;let m=!1;if((o||c>0)&&!(c&16)){if(c&8){const f=e.vnode.dynamicProps;for(let h=0;h<f.length;h++){let _=f[h];if(co(e.emitsOptions,_))continue;const x=t[_];if(d)if(Re(u,_))x!==u[_]&&(u[_]=x,m=!0);else{const y=ht(_);s[y]=sl(d,p,y,x,e,!1)}else x!==u[_]&&(u[_]=x,m=!0)}}}else{Yu(e,t,s,u)&&(m=!0);let f;for(const h in p)(!t||!Re(t,h)&&((f=$t(h))===h||!Re(t,f)))&&(d?a&&(a[h]!==void 0||a[f]!==void 0)&&(s[h]=sl(d,p,h,void 0,e,!0)):delete s[h]);if(u!==p)for(const h in u)(!t||!Re(t,h))&&(delete u[h],m=!0)}m&&ii(e,"set","$attrs")}function Yu(e,t,a,o){const[s,u]=e.propsOptions;let c=!1,p;if(t)for(let d in t){if(Un(d))continue;const m=t[d];let f;s&&Re(s,f=ht(d))?!u||!u.includes(f)?a[f]=m:(p||(p={}))[f]=m:co(e.emitsOptions,d)||(!(d in o)||m!==o[d])&&(o[d]=m,c=!0)}if(u){const d=Ee(a),m=p||qe;for(let f=0;f<u.length;f++){const h=u[f];a[h]=sl(s,d,h,m[h],e,!Re(m,h))}}return c}function sl(e,t,a,o,s,u){const c=e[a];if(c!=null){const p=Re(c,"default");if(p&&o===void 0){const d=c.default;if(c.type!==Function&&!c.skipFactory&&Ce(d)){const{propsDefaults:m}=s;if(a in m)o=m[a];else{const f=Ui(s);o=m[a]=d.call(null,t),f()}}else o=d}c[0]&&(u&&!p?o=!1:c[1]&&(o===""||o===$t(a))&&(o=!0))}return o}function Wu(e,t,a=!1){const o=t.propsCache,s=o.get(e);if(s)return s;const u=e.props,c={},p=[];let d=!1;if(!Ce(e)){const f=h=>{d=!0;const[_,x]=Wu(h,t,!0);Xe(c,_),x&&p.push(...x)};!a&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!u&&!d)return je(e)&&o.set(e,rn),rn;if(ge(u))for(let f=0;f<u.length;f++){const h=ht(u[f]);Ws(h)&&(c[h]=qe)}else if(u)for(const f in u){const h=ht(f);if(Ws(h)){const _=u[f],x=c[h]=ge(_)||Ce(_)?{type:_}:Xe({},_);if(x){const y=Js(Boolean,x.type),A=Js(String,x.type);x[0]=y>-1,x[1]=A<0||y<A,(y>-1||Re(x,"default"))&&p.push(h)}}}const m=[c,p];return je(e)&&o.set(e,m),m}function Ws(e){return e[0]!=="$"}function Ks(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Xs(e,t){return Ks(e)===Ks(t)}function Js(e,t){return ge(t)?t.findIndex(a=>Xs(a,e)):Ce(t)&&Xs(t,e)?0:-1}const Ku=e=>e[0]==="_"||e==="$stable",os=e=>ge(e)?e.map(kt):[kt(e)],Rm=(e,t,a)=>{if(t._n)return t;const o=n((...s)=>os(t(...s)),a);return o._c=!1,o},Xu=(e,t,a)=>{const o=e._ctx;for(const s in e){if(Ku(s))continue;const u=e[s];if(Ce(u))t[s]=Rm(s,u,o);else if(u!=null){const c=os(u);t[s]=()=>c}}},Ju=(e,t)=>{const a=os(t);e.slots.default=()=>a},zm=(e,t)=>{if(e.vnode.shapeFlag&32){const a=t._;a?(e.slots=Ee(t),Ha(t,"_",a)):Xu(t,e.slots={})}else e.slots={},t&&Ju(e,t);Ha(e.slots,bo,1)},Pm=(e,t,a)=>{const{vnode:o,slots:s}=e;let u=!0,c=qe;if(o.shapeFlag&32){const p=t._;p?a&&p===1?u=!1:(Xe(s,t),!a&&p===1&&delete s._):(u=!t.$stable,Xu(t,s)),c=t}else t&&(Ju(e,t),c={default:1});if(u)for(const p in s)!Ku(p)&&c[p]==null&&delete s[p]};function Ua(e,t,a,o,s=!1){if(ge(e)){e.forEach((_,x)=>Ua(_,t&&(ge(t)?t[x]:t),a,o,s));return}if(Vi(o)&&!s)return;const u=o.shapeFlag&4?So(o.component)||o.component.proxy:o.el,c=s?null:u,{i:p,r:d}=e,m=t&&t.r,f=p.refs===qe?p.refs={}:p.refs,h=p.setupState;if(m!=null&&m!==d&&(Je(m)?(f[m]=null,Re(h,m)&&(h[m]=null)):ct(m)&&(m.value=null)),Ce(d))ni(d,p,12,[c,f]);else{const _=Je(d),x=ct(d),y=e.f;if(_||x){const A=()=>{if(y){const T=_?Re(h,d)?h[d]:f[d]:d.value;s?ge(T)&&Rl(T,u):ge(T)?T.includes(u)||T.push(u):_?(f[d]=[u],Re(h,d)&&(h[d]=f[d])):(d.value=[u],e.k&&(f[e.k]=d.value))}else _?(f[d]=c,Re(h,d)&&(h[d]=c)):x&&(d.value=c,e.k&&(f[e.k]=c))};s||y?A():(A.id=-1,rt(A,a))}}}let ci=!1;const Fm=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",Vm=e=>e.namespaceURI.includes("MathML"),$a=e=>{if(Fm(e))return"svg";if(Vm(e))return"mathml"},Ta=e=>e.nodeType===8;function Mm(e){const{mt:t,p:a,o:{patchProp:o,createText:s,nextSibling:u,parentNode:c,remove:p,insert:d,createComment:m}}=e,f=(v,w)=>{if(!w.hasChildNodes()){a(null,v,w),Ga(),w._vnode=v;return}ci=!1,h(w.firstChild,v,null,null,null),Ga(),w._vnode=v,ci&&console.error("Hydration completed but contains mismatches.")},h=(v,w,k,E,V,H=!1)=>{const P=Ta(v)&&v.data==="[",G=()=>A(v,w,k,E,V,P),{type:J,ref:Y,shapeFlag:pe,patchFlag:Ae}=w;let U=v.nodeType;w.el=v,Ae===-2&&(H=!1,w.dynamicChildren=null);let K=null;switch(J){case Gi:U!==3?w.children===""?(d(w.el=s(""),c(v),v),K=v):K=G():(v.data!==w.children&&(ci=!0,v.data=w.children),K=u(v));break;case mt:g(v)?(K=u(v),I(w.el=v.content.firstChild,v,k)):U!==8||P?K=G():K=u(v);break;case Mi:if(P&&(v=u(v),U=v.nodeType),U===1||U===3){K=v;const ue=!w.children.length;for(let ne=0;ne<w.staticCount;ne++)ue&&(w.children+=K.nodeType===1?K.outerHTML:K.data),ne===w.staticCount-1&&(w.anchor=K),K=u(K);return P?u(K):K}else G();break;case we:P?K=y(v,w,k,E,V,H):K=G();break;default:if(pe&1)(U!==1||w.type.toLowerCase()!==v.tagName.toLowerCase())&&!g(v)?K=G():K=_(v,w,k,E,V,H);else if(pe&6){w.slotScopeIds=V;const ue=c(v);if(P?K=T(v):Ta(v)&&v.data==="teleport start"?K=T(v,v.data,"teleport end"):K=u(v),t(w,ue,null,k,E,$a(ue),H),Vi(w)){let ne;P?(ne=i(we),ne.anchor=K?K.previousSibling:ue.lastChild):ne=v.nodeType===3?l(""):i("div"),ne.el=v,w.component.subTree=ne}}else pe&64?U!==8?K=G():K=w.type.hydrate(v,w,k,E,V,H,e,x):pe&128&&(K=w.type.hydrate(v,w,k,E,$a(c(v)),V,H,e,h))}return Y!=null&&Ua(Y,null,E,w),K},_=(v,w,k,E,V,H)=>{H=H||!!w.dynamicChildren;const{type:P,props:G,patchFlag:J,shapeFlag:Y,dirs:pe,transition:Ae}=w,U=P==="input"||P==="option";if(U||J!==-1){pe&&Ut(w,null,k,"created");let K=!1;if(g(v)){K=tc(E,Ae)&&k&&k.vnode.props&&k.vnode.props.appear;const ne=v.content.firstChild;K&&Ae.beforeEnter(ne),I(ne,v,k),w.el=v=ne}if(Y&16&&!(G&&(G.innerHTML||G.textContent))){let ne=x(v.firstChild,w,v,k,E,V,H);for(;ne;){ci=!0;const Le=ne;ne=ne.nextSibling,p(Le)}}else Y&8&&v.textContent!==w.children&&(ci=!0,v.textContent=w.children);if(G)if(U||!H||J&48)for(const ne in G)(U&&(ne.endsWith("value")||ne==="indeterminate")||ma(ne)&&!Un(ne)||ne[0]===".")&&o(v,ne,null,G[ne],void 0,void 0,k);else G.onClick&&o(v,"onClick",null,G.onClick,void 0,void 0,k);let ue;(ue=G&&G.onVnodeBeforeMount)&&vt(ue,k,w),pe&&Ut(w,null,k,"beforeMount"),((ue=G&&G.onVnodeMounted)||pe||K)&&Bu(()=>{ue&&vt(ue,k,w),K&&Ae.enter(v),pe&&Ut(w,null,k,"mounted")},E)}return v.nextSibling},x=(v,w,k,E,V,H,P)=>{P=P||!!w.dynamicChildren;const G=w.children,J=G.length;for(let Y=0;Y<J;Y++){const pe=P?G[Y]:G[Y]=kt(G[Y]);if(v)v=h(v,pe,E,V,H,P);else{if(pe.type===Gi&&!pe.children)continue;ci=!0,a(null,pe,k,null,E,V,$a(k),H)}}return v},y=(v,w,k,E,V,H)=>{const{slotScopeIds:P}=w;P&&(V=V?V.concat(P):P);const G=c(v),J=x(u(v),w,G,k,E,V,H);return J&&Ta(J)&&J.data==="]"?u(w.anchor=J):(ci=!0,d(w.anchor=m("]"),G,J),J)},A=(v,w,k,E,V,H)=>{if(ci=!0,w.el=null,H){const J=T(v);for(;;){const Y=u(v);if(Y&&Y!==J)p(Y);else break}}const P=u(v),G=c(v);return p(v),a(null,w,G,P,k,E,$a(G),V),P},T=(v,w="[",k="]")=>{let E=0;for(;v;)if(v=u(v),v&&Ta(v)&&(v.data===w&&E++,v.data===k)){if(E===0)return u(v);E--}return v},I=(v,w,k)=>{const E=w.parentNode;E&&E.replaceChild(v,w);let V=k;for(;V;)V.vnode.el===w&&(V.vnode.el=V.subTree.el=v),V=V.parent},g=v=>v.nodeType===1&&v.tagName.toLowerCase()==="template";return[f,h]}const rt=Bu;function Qu(e){return ec(e)}function Zu(e){return ec(e,Mm)}function ec(e,t){const a=Yr();a.__VUE__=!0;const{insert:o,remove:s,patchProp:u,createElement:c,createText:p,createComment:d,setText:m,setElementText:f,parentNode:h,nextSibling:_,setScopeId:x=bt,insertStaticContent:y}=e,A=(L,R,N,Q=null,Z=null,oe=null,de=void 0,ae=null,se=!!R.dynamicChildren)=>{if(L===R)return;L&&!qt(L,R)&&(Q=re(L),Ue(L,Z,oe,!0),L=null),R.patchFlag===-2&&(se=!1,R.dynamicChildren=null);const{type:ie,ref:me,shapeFlag:Se}=R;switch(ie){case Gi:T(L,R,N,Q);break;case mt:I(L,R,N,Q);break;case Mi:L==null&&g(R,N,Q,de);break;case we:Y(L,R,N,Q,Z,oe,de,ae,se);break;default:Se&1?k(L,R,N,Q,Z,oe,de,ae,se):Se&6?pe(L,R,N,Q,Z,oe,de,ae,se):(Se&64||Se&128)&&ie.process(L,R,N,Q,Z,oe,de,ae,se,He)}me!=null&&Z&&Ua(me,L&&L.ref,oe,R||L,!R)},T=(L,R,N,Q)=>{if(L==null)o(R.el=p(R.children),N,Q);else{const Z=R.el=L.el;R.children!==L.children&&m(Z,R.children)}},I=(L,R,N,Q)=>{L==null?o(R.el=d(R.children||""),N,Q):R.el=L.el},g=(L,R,N,Q)=>{[L.el,L.anchor]=y(L.children,R,N,Q,L.el,L.anchor)},v=({el:L,anchor:R},N,Q)=>{let Z;for(;L&&L!==R;)Z=_(L),o(L,N,Q),L=Z;o(R,N,Q)},w=({el:L,anchor:R})=>{let N;for(;L&&L!==R;)N=_(L),s(L),L=N;s(R)},k=(L,R,N,Q,Z,oe,de,ae,se)=>{R.type==="svg"?de="svg":R.type==="math"&&(de="mathml"),L==null?E(R,N,Q,Z,oe,de,ae,se):P(L,R,Z,oe,de,ae,se)},E=(L,R,N,Q,Z,oe,de,ae)=>{let se,ie;const{props:me,shapeFlag:Se,transition:ve,dirs:xe}=L;if(se=L.el=c(L.type,oe,me&&me.is,me),Se&8?f(se,L.children):Se&16&&H(L.children,se,null,Q,Z,Eo(L,oe),de,ae),xe&&Ut(L,null,Q,"created"),V(se,L,L.scopeId,de,Q),me){for(const Ge in me)Ge!=="value"&&!Un(Ge)&&u(se,Ge,null,me[Ge],oe,L.children,Q,Z,ce);"value"in me&&u(se,"value",null,me.value,oe),(ie=me.onVnodeBeforeMount)&&vt(ie,Q,L)}xe&&Ut(L,null,Q,"beforeMount");const De=tc(Z,ve);De&&ve.beforeEnter(se),o(se,R,N),((ie=me&&me.onVnodeMounted)||De||xe)&&rt(()=>{ie&&vt(ie,Q,L),De&&ve.enter(se),xe&&Ut(L,null,Q,"mounted")},Z)},V=(L,R,N,Q,Z)=>{if(N&&x(L,N),Q)for(let oe=0;oe<Q.length;oe++)x(L,Q[oe]);if(Z){let oe=Z.subTree;if(R===oe){const de=Z.vnode;V(L,de,de.scopeId,de.slotScopeIds,Z.parent)}}},H=(L,R,N,Q,Z,oe,de,ae,se=0)=>{for(let ie=se;ie<L.length;ie++){const me=L[ie]=ae?hi(L[ie]):kt(L[ie]);A(null,me,R,N,Q,Z,oe,de,ae)}},P=(L,R,N,Q,Z,oe,de)=>{const ae=R.el=L.el;let{patchFlag:se,dynamicChildren:ie,dirs:me}=R;se|=L.patchFlag&16;const Se=L.props||qe,ve=R.props||qe;let xe;if(N&&Bi(N,!1),(xe=ve.onVnodeBeforeUpdate)&&vt(xe,N,R,L),me&&Ut(R,L,N,"beforeUpdate"),N&&Bi(N,!0),ie?G(L.dynamicChildren,ie,ae,N,Q,Eo(R,Z),oe):de||ne(L,R,ae,null,N,Q,Eo(R,Z),oe,!1),se>0){if(se&16)J(ae,R,Se,ve,N,Q,Z);else if(se&2&&Se.class!==ve.class&&u(ae,"class",null,ve.class,Z),se&4&&u(ae,"style",Se.style,ve.style,Z),se&8){const De=R.dynamicProps;for(let Ge=0;Ge<De.length;Ge++){const Ke=De[Ge],ot=Se[Ke],Ot=ve[Ke];(Ot!==ot||Ke==="value")&&u(ae,Ke,ot,Ot,Z,L.children,N,Q,ce)}}se&1&&L.children!==R.children&&f(ae,R.children)}else!de&&ie==null&&J(ae,R,Se,ve,N,Q,Z);((xe=ve.onVnodeUpdated)||me)&&rt(()=>{xe&&vt(xe,N,R,L),me&&Ut(R,L,N,"updated")},Q)},G=(L,R,N,Q,Z,oe,de)=>{for(let ae=0;ae<R.length;ae++){const se=L[ae],ie=R[ae],me=se.el&&(se.type===we||!qt(se,ie)||se.shapeFlag&70)?h(se.el):N;A(se,ie,me,null,Q,Z,oe,de,!0)}},J=(L,R,N,Q,Z,oe,de)=>{if(N!==Q){if(N!==qe)for(const ae in N)!Un(ae)&&!(ae in Q)&&u(L,ae,N[ae],null,de,R.children,Z,oe,ce);for(const ae in Q){if(Un(ae))continue;const se=Q[ae],ie=N[ae];se!==ie&&ae!=="value"&&u(L,ae,ie,se,de,R.children,Z,oe,ce)}"value"in Q&&u(L,"value",N.value,Q.value,de)}},Y=(L,R,N,Q,Z,oe,de,ae,se)=>{const ie=R.el=L?L.el:p(""),me=R.anchor=L?L.anchor:p("");let{patchFlag:Se,dynamicChildren:ve,slotScopeIds:xe}=R;xe&&(ae=ae?ae.concat(xe):xe),L==null?(o(ie,N,Q),o(me,N,Q),H(R.children||[],N,me,Z,oe,de,ae,se)):Se>0&&Se&64&&ve&&L.dynamicChildren?(G(L.dynamicChildren,ve,N,Z,oe,de,ae),(R.key!=null||Z&&R===Z.subTree)&&ls(L,R,!0)):ne(L,R,N,me,Z,oe,de,ae,se)},pe=(L,R,N,Q,Z,oe,de,ae,se)=>{R.slotScopeIds=ae,L==null?R.shapeFlag&512?Z.ctx.activate(R,N,Q,de,se):Ae(R,N,Q,Z,oe,de,se):U(L,R,se)},Ae=(L,R,N,Q,Z,oe,de)=>{const ae=L.component=rc(L,Q,Z);if(_a(L)&&(ae.ctx.renderer=He),cc(ae),ae.asyncDep){if(Z&&Z.registerDep(ae,K),!L.el){const se=ae.subTree=i(mt);I(null,se,R,N)}}else K(ae,L,R,N,Z,oe,de)},U=(L,R,N)=>{const Q=R.component=L.component;if(Wp(L,R,N))if(Q.asyncDep&&!Q.asyncResolved){ue(Q,R,N);return}else Q.next=R,Op(Q.update),Q.effect.dirty=!0,Q.update();else R.el=L.el,Q.vnode=R},K=(L,R,N,Q,Z,oe,de)=>{const ae=()=>{if(L.isMounted){let{next:me,bu:Se,u:ve,parent:xe,vnode:De}=L;{const tn=ic(L);if(tn){me&&(me.el=De.el,ue(L,me,de)),tn.asyncDep.then(()=>{L.isUnmounted||ae()});return}}let Ge=me,Ke;Bi(L,!1),me?(me.el=De.el,ue(L,me,de)):me=De,Se&&cn(Se),(Ke=me.props&&me.props.onVnodeBeforeUpdate)&&vt(Ke,xe,me,De),Bi(L,!0);const ot=Pa(L),Ot=L.subTree;L.subTree=ot,A(Ot,ot,h(Ot.el),re(Ot),L,Z,oe),me.el=ot.el,Ge===null&&Kl(L,ot.el),ve&&rt(ve,Z),(Ke=me.props&&me.props.onVnodeUpdated)&&rt(()=>vt(Ke,xe,me,De),Z)}else{let me;const{el:Se,props:ve}=R,{bm:xe,m:De,parent:Ge}=L,Ke=Vi(R);if(Bi(L,!1),xe&&cn(xe),!Ke&&(me=ve&&ve.onVnodeBeforeMount)&&vt(me,Ge,R),Bi(L,!0),Se&&Be){const ot=()=>{L.subTree=Pa(L),Be(Se,L.subTree,L,Z,null)};Ke?R.type.__asyncLoader().then(()=>!L.isUnmounted&&ot()):ot()}else{const ot=L.subTree=Pa(L);A(null,ot,N,Q,L,Z,oe),R.el=ot.el}if(De&&rt(De,Z),!Ke&&(me=ve&&ve.onVnodeMounted)){const ot=R;rt(()=>vt(me,Ge,ot),Z)}(R.shapeFlag&256||Ge&&Vi(Ge.vnode)&&Ge.vnode.shapeFlag&256)&&L.a&&rt(L.a,Z),L.isMounted=!0,R=N=Q=null}},se=L.effect=new bn(ae,bt,()=>uo(ie),L.scope),ie=L.update=()=>{se.dirty&&se.run()};ie.id=L.uid,Bi(L,!0),ie()},ue=(L,R,N)=>{R.component=L;const Q=L.vnode.props;L.vnode=R,L.next=null,Em(L,R.props,Q,N),Pm(L,R.children,N),Ki(),Hs(L),Xi()},ne=(L,R,N,Q,Z,oe,de,ae,se=!1)=>{const ie=L&&L.children,me=L?L.shapeFlag:0,Se=R.children,{patchFlag:ve,shapeFlag:xe}=R;if(ve>0){if(ve&128){We(ie,Se,N,Q,Z,oe,de,ae,se);return}else if(ve&256){Le(ie,Se,N,Q,Z,oe,de,ae,se);return}}xe&8?(me&16&&ce(ie,Z,oe),Se!==ie&&f(N,Se)):me&16?xe&16?We(ie,Se,N,Q,Z,oe,de,ae,se):ce(ie,Z,oe,!0):(me&8&&f(N,""),xe&16&&H(Se,N,Q,Z,oe,de,ae,se))},Le=(L,R,N,Q,Z,oe,de,ae,se)=>{L=L||rn,R=R||rn;const ie=L.length,me=R.length,Se=Math.min(ie,me);let ve;for(ve=0;ve<Se;ve++){const xe=R[ve]=se?hi(R[ve]):kt(R[ve]);A(L[ve],xe,N,null,Z,oe,de,ae,se)}ie>me?ce(L,Z,oe,!0,!1,Se):H(R,N,Q,Z,oe,de,ae,se,Se)},We=(L,R,N,Q,Z,oe,de,ae,se)=>{let ie=0;const me=R.length;let Se=L.length-1,ve=me-1;for(;ie<=Se&&ie<=ve;){const xe=L[ie],De=R[ie]=se?hi(R[ie]):kt(R[ie]);if(qt(xe,De))A(xe,De,N,null,Z,oe,de,ae,se);else break;ie++}for(;ie<=Se&&ie<=ve;){const xe=L[Se],De=R[ve]=se?hi(R[ve]):kt(R[ve]);if(qt(xe,De))A(xe,De,N,null,Z,oe,de,ae,se);else break;Se--,ve--}if(ie>Se){if(ie<=ve){const xe=ve+1,De=xe<me?R[xe].el:Q;for(;ie<=ve;)A(null,R[ie]=se?hi(R[ie]):kt(R[ie]),N,De,Z,oe,de,ae,se),ie++}}else if(ie>ve)for(;ie<=Se;)Ue(L[ie],Z,oe,!0),ie++;else{const xe=ie,De=ie,Ge=new Map;for(ie=De;ie<=ve;ie++){const xt=R[ie]=se?hi(R[ie]):kt(R[ie]);xt.key!=null&&Ge.set(xt.key,ie)}let Ke,ot=0;const Ot=ve-De+1;let tn=!1,$s=0;const zn=new Array(Ot);for(ie=0;ie<Ot;ie++)zn[ie]=0;for(ie=xe;ie<=Se;ie++){const xt=L[ie];if(ot>=Ot){Ue(xt,Z,oe,!0);continue}let Gt;if(xt.key!=null)Gt=Ge.get(xt.key);else for(Ke=De;Ke<=ve;Ke++)if(zn[Ke-De]===0&&qt(xt,R[Ke])){Gt=Ke;break}Gt===void 0?Ue(xt,Z,oe,!0):(zn[Gt-De]=ie+1,Gt>=$s?$s=Gt:tn=!0,A(xt,R[Gt],N,null,Z,oe,de,ae,se),ot++)}const Ts=tn?Hm(zn):rn;for(Ke=Ts.length-1,ie=Ot-1;ie>=0;ie--){const xt=De+ie,Gt=R[xt],Ls=xt+1<me?R[xt+1].el:Q;zn[ie]===0?A(null,Gt,N,Ls,Z,oe,de,ae,se):tn&&(Ke<0||ie!==Ts[Ke]?at(Gt,N,Ls,2):Ke--)}}},at=(L,R,N,Q,Z=null)=>{const{el:oe,type:de,transition:ae,children:se,shapeFlag:ie}=L;if(ie&6){at(L.component.subTree,R,N,Q);return}if(ie&128){L.suspense.move(R,N,Q);return}if(ie&64){de.move(L,R,N,He);return}if(de===we){o(oe,R,N);for(let Se=0;Se<se.length;Se++)at(se[Se],R,N,Q);o(L.anchor,R,N);return}if(de===Mi){v(L,R,N);return}if(Q!==2&&ie&1&&ae)if(Q===0)ae.beforeEnter(oe),o(oe,R,N),rt(()=>ae.enter(oe),Z);else{const{leave:Se,delayLeave:ve,afterLeave:xe}=ae,De=()=>o(oe,R,N),Ge=()=>{Se(oe,()=>{De(),xe&&xe()})};ve?ve(oe,De,Ge):Ge()}else o(oe,R,N)},Ue=(L,R,N,Q=!1,Z=!1)=>{const{type:oe,props:de,ref:ae,children:se,dynamicChildren:ie,shapeFlag:me,patchFlag:Se,dirs:ve}=L;if(ae!=null&&Ua(ae,null,N,L,!0),me&256){R.ctx.deactivate(L);return}const xe=me&1&&ve,De=!Vi(L);let Ge;if(De&&(Ge=de&&de.onVnodeBeforeUnmount)&&vt(Ge,R,L),me&6)X(L.component,N,Q);else{if(me&128){L.suspense.unmount(N,Q);return}xe&&Ut(L,null,R,"beforeUnmount"),me&64?L.type.remove(L,R,N,Z,He,Q):ie&&(oe!==we||Se>0&&Se&64)?ce(ie,R,N,!1,!0):(oe===we&&Se&384||!Z&&me&16)&&ce(se,R,N),Q&&Qt(L)}(De&&(Ge=de&&de.onVnodeUnmounted)||xe)&&rt(()=>{Ge&&vt(Ge,R,L),xe&&Ut(L,null,R,"unmounted")},N)},Qt=L=>{const{type:R,el:N,anchor:Q,transition:Z}=L;if(R===we){Rt(N,Q);return}if(R===Mi){w(L);return}const oe=()=>{s(N),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(L.shapeFlag&1&&Z&&!Z.persisted){const{leave:de,delayLeave:ae}=Z,se=()=>de(N,oe);ae?ae(L.el,oe,se):se()}else oe()},Rt=(L,R)=>{let N;for(;L!==R;)N=_(L),s(L),L=N;s(R)},X=(L,R,N)=>{const{bum:Q,scope:Z,update:oe,subTree:de,um:ae}=L;Q&&cn(Q),Z.stop(),oe&&(oe.active=!1,Ue(de,L,R,N)),ae&&rt(ae,R),rt(()=>{L.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&L.asyncDep&&!L.asyncResolved&&L.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},ce=(L,R,N,Q=!1,Z=!1,oe=0)=>{for(let de=oe;de<L.length;de++)Ue(L[de],R,N,Q,Z)},re=L=>L.shapeFlag&6?re(L.component.subTree):L.shapeFlag&128?L.suspense.next():_(L.anchor||L.el);let he=!1;const Me=(L,R,N)=>{L==null?R._vnode&&Ue(R._vnode,null,null,!0):A(R._vnode||null,L,R,null,null,null,N),he||(he=!0,Hs(),Ga(),he=!1),R._vnode=L},He={p:A,um:Ue,m:at,r:Qt,mt:Ae,mc:H,pc:ne,pbc:G,n:re,o:e};let ke,Be;return t&&([ke,Be]=t(He)),{render:Me,hydrate:ke,createApp:Lm(Me,ke)}}function Eo({type:e,props:t},a){return a==="svg"&&e==="foreignObject"||a==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:a}function Bi({effect:e,update:t},a){e.allowRecurse=t.allowRecurse=a}function tc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ls(e,t,a=!1){const o=e.children,s=t.children;if(ge(o)&&ge(s))for(let u=0;u<o.length;u++){const c=o[u];let p=s[u];p.shapeFlag&1&&!p.dynamicChildren&&((p.patchFlag<=0||p.patchFlag===32)&&(p=s[u]=hi(s[u]),p.el=c.el),a||ls(c,p)),p.type===Gi&&(p.el=c.el)}}function Hm(e){const t=e.slice(),a=[0];let o,s,u,c,p;const d=e.length;for(o=0;o<d;o++){const m=e[o];if(m!==0){if(s=a[a.length-1],e[s]<m){t[o]=s,a.push(o);continue}for(u=0,c=a.length-1;u<c;)p=u+c>>1,e[a[p]]<m?u=p+1:c=p;m<e[a[u]]&&(u>0&&(t[o]=a[u-1]),a[u]=o)}}for(u=a.length,c=a[u-1];u-- >0;)a[u]=c,c=t[c];return a}function ic(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ic(t)}const Om=e=>e.__isTeleport,Kn=e=>e&&(e.disabled||e.disabled===""),Qs=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Zs=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,rl=(e,t)=>{const a=e&&e.to;return Je(a)?t?t(a):null:a},qm={name:"Teleport",__isTeleport:!0,process(e,t,a,o,s,u,c,p,d,m){const{mc:f,pc:h,pbc:_,o:{insert:x,querySelector:y,createText:A,createComment:T}}=m,I=Kn(t.props);let{shapeFlag:g,children:v,dynamicChildren:w}=t;if(e==null){const k=t.el=A(""),E=t.anchor=A("");x(k,a,o),x(E,a,o);const V=t.target=rl(t.props,y),H=t.targetAnchor=A("");V&&(x(H,V),c==="svg"||Qs(V)?c="svg":(c==="mathml"||Zs(V))&&(c="mathml"));const P=(G,J)=>{g&16&&f(v,G,J,s,u,c,p,d)};I?P(a,E):V&&P(V,H)}else{t.el=e.el;const k=t.anchor=e.anchor,E=t.target=e.target,V=t.targetAnchor=e.targetAnchor,H=Kn(e.props),P=H?a:E,G=H?k:V;if(c==="svg"||Qs(E)?c="svg":(c==="mathml"||Zs(E))&&(c="mathml"),w?(_(e.dynamicChildren,w,P,s,u,c,p),ls(e,t,!0)):d||h(e,t,P,G,s,u,c,p,!1),I)H?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):La(t,a,k,m,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const J=t.target=rl(t.props,y);J&&La(t,J,null,m,0)}else H&&La(t,E,V,m,1)}nc(t)},remove(e,t,a,o,{um:s,o:{remove:u}},c){const{shapeFlag:p,children:d,anchor:m,targetAnchor:f,target:h,props:_}=e;if(h&&u(f),c&&u(m),p&16){const x=c||!Kn(_);for(let y=0;y<d.length;y++){const A=d[y];s(A,t,a,x,!!A.dynamicChildren)}}},move:La,hydrate:Nm};function La(e,t,a,{o:{insert:o},m:s},u=2){u===0&&o(e.targetAnchor,t,a);const{el:c,anchor:p,shapeFlag:d,children:m,props:f}=e,h=u===2;if(h&&o(c,t,a),(!h||Kn(f))&&d&16)for(let _=0;_<m.length;_++)s(m[_],t,a,2);h&&o(p,t,a)}function Nm(e,t,a,o,s,u,{o:{nextSibling:c,parentNode:p,querySelector:d}},m){const f=t.target=rl(t.props,d);if(f){const h=f._lpa||f.firstChild;if(t.shapeFlag&16)if(Kn(t.props))t.anchor=m(c(e),t,p(e),a,o,s,u),t.targetAnchor=h;else{t.anchor=c(e);let _=h;for(;_;)if(_=c(_),_&&_.nodeType===8&&_.data==="teleport anchor"){t.targetAnchor=_,f._lpa=t.targetAnchor&&c(t.targetAnchor);break}m(h,t,f,a,o,s,u)}nc(t)}return t.anchor&&c(t.anchor)}const vo=qm;function nc(e){const t=e.ctx;if(t&&t.ut){let a=e.children[0].el;for(;a&&a!==e.targetAnchor;)a.nodeType===1&&a.setAttribute("data-v-owner",t.uid),a=a.nextSibling;t.ut()}}const we=Symbol.for("v-fgt"),Gi=Symbol.for("v-txt"),mt=Symbol.for("v-cmt"),Mi=Symbol.for("v-stc"),Xn=[];let St=null;function S(e=!1){Xn.push(St=e?null:[])}function ac(){Xn.pop(),St=Xn[Xn.length-1]||null}let ji=1;function ul(e){ji+=e}function oc(e){return e.dynamicChildren=ji>0?St||rn:null,ac(),ji>0&&St&&St.push(e),e}function be(e,t,a,o,s,u){return oc(B(e,t,a,o,s,u,!0))}function C(e,t,a,o,s){return oc(i(e,t,a,o,s,!0))}function Ct(e){return e?e.__v_isVNode===!0:!1}function qt(e,t){return e.type===t.type&&e.key===t.key}function Gm(e){}const bo="__vInternal",lc=({key:e})=>e??null,Fa=({ref:e,ref_key:t,ref_for:a})=>(typeof e=="number"&&(e=""+e),e!=null?Je(e)||ct(e)||Ce(e)?{i:tt,r:e,k:t,f:!!a}:e:null);function B(e,t=null,a=null,o=0,s=null,u=e===we?0:1,c=!1,p=!1){const d={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&lc(t),ref:t&&Fa(t),scopeId:po,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:u,patchFlag:o,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:tt};return p?(rs(d,a),u&128&&e.normalize(d)):a&&(d.shapeFlag|=Je(a)?8:16),ji>0&&!c&&St&&(d.patchFlag>0||u&6)&&d.patchFlag!==32&&St.push(d),d}const i=jm;function jm(e,t=null,a=null,o=0,s=null,u=!1){if((!e||e===Au)&&(e=mt),Ct(e)){const p=Xt(e,t,!0);return a&&rs(p,a),ji>0&&!u&&St&&(p.shapeFlag&6?St[St.indexOf(e)]=p:St.push(p)),p.patchFlag|=-2,p}if(Zm(e)&&(e=e.__vccOpts),t){t=sc(t);let{class:p,style:d}=t;p&&!Je(p)&&(t.class=ga(p)),je(d)&&(Nl(d)&&!ge(d)&&(d=Xe({},d)),t.style=Bn(d))}const c=Je(e)?1:ku(e)?128:Om(e)?64:je(e)?4:Ce(e)?2:0;return B(e,t,a,o,s,c,u,!0)}function sc(e){return e?Nl(e)||bo in e?Xe({},e):e:null}function Xt(e,t,a=!1){const{props:o,ref:s,patchFlag:u,children:c}=e,p=t?Zi(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&lc(p),ref:t&&t.ref?a&&s?ge(s)?s.concat(Fa(t)):[s,Fa(t)]:Fa(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==we?u===-1?16:u|16:u,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xt(e.ssContent),ssFallback:e.ssFallback&&Xt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function l(e=" ",t=0){return i(Gi,null,e,t)}function Um(e,t){const a=i(Mi,null,e);return a.staticCount=t,a}function ss(e="",t=!1){return t?(S(),C(mt,null,e)):i(mt,null,e)}function kt(e){return e==null||typeof e=="boolean"?i(mt):ge(e)?i(we,null,e.slice()):typeof e=="object"?hi(e):i(Gi,null,String(e))}function hi(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Xt(e)}function rs(e,t){let a=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(ge(t))a=16;else if(typeof t=="object")if(o&65){const s=t.default;s&&(s._c&&(s._d=!1),rs(e,s()),s._c&&(s._d=!0));return}else{a=32;const s=t._;!s&&!(bo in t)?t._ctx=tt:s===3&&tt&&(tt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Ce(t)?(t={default:t,_ctx:tt},a=32):(t=String(t),o&64?(a=16,t=[l(t)]):a=8);e.children=t,e.shapeFlag|=a}function Zi(...e){const t={};for(let a=0;a<e.length;a++){const o=e[a];for(const s in o)if(s==="class")t.class!==o.class&&(t.class=ga([t.class,o.class]));else if(s==="style")t.style=Bn([t.style,o.style]);else if(ma(s)){const u=t[s],c=o[s];c&&u!==c&&!(ge(u)&&u.includes(c))&&(t[s]=u?[].concat(u,c):c)}else s!==""&&(t[s]=o[s])}return t}function vt(e,t,a,o=null){Dt(e,t,7,[a,o])}const Ym=Uu();let Wm=0;function rc(e,t,a){const o=e.type,s=(t?t.appContext:e.appContext)||Ym,u={uid:Wm++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wu(o,s),emitsOptions:wu(o,s),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:o.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return u.ctx={_:u},u.root=t?t.root:u,u.emit=Np.bind(null,u),e.ce&&e.ce(u),u}let nt=null;const Jt=()=>nt||tt;let Ya,cl;{const e=Yr(),t=(a,o)=>{let s;return(s=e[a])||(s=e[a]=[]),s.push(o),u=>{s.length>1?s.forEach(c=>c(u)):s[0](u)}};Ya=t("__VUE_INSTANCE_SETTERS__",a=>nt=a),cl=t("__VUE_SSR_SETTERS__",a=>va=a)}const Ui=e=>{const t=nt;return Ya(e),e.scope.on(),()=>{e.scope.off(),Ya(t)}},dl=()=>{nt&&nt.scope.off(),Ya(null)};function uc(e){return e.vnode.shapeFlag&4}let va=!1;function cc(e,t=!1){t&&cl(t);const{props:a,children:o}=e.vnode,s=uc(e);Im(e,a,s,t),zm(e,o);const u=s?Km(e,t):void 0;return t&&cl(!1),u}function Km(e,t){const a=e.type;e.accessCache=Object.create(null),e.proxy=Gl(new Proxy(e.ctx,al));const{setup:o}=a;if(o){const s=e.setupContext=o.length>1?pc(e):null,u=Ui(e);Ki();const c=ni(o,e,0,[e.props,s]);if(Xi(),u(),zl(c)){if(c.then(dl,dl),t)return c.then(p=>{pl(e,p,t)}).catch(p=>{Ji(p,e,0)});e.asyncDep=c}else pl(e,c,t)}else dc(e,t)}function pl(e,t,a){Ce(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:je(t)&&(e.setupState=Yl(t)),dc(e,a)}let Wa,ml;function Xm(e){Wa=e,ml=t=>{t.render._rc&&(t.withProxy=new Proxy(t.ctx,dm))}}const Jm=()=>!Wa;function dc(e,t,a){const o=e.type;if(!e.render){if(!t&&Wa&&!o.render){const s=o.template||as(e).template;if(s){const{isCustomElement:u,compilerOptions:c}=e.appContext.config,{delimiters:p,compilerOptions:d}=o,m=Xe(Xe({isCustomElement:u,delimiters:p},c),d);o.render=Wa(s,m)}}e.render=o.render||bt,ml&&ml(e)}{const s=Ui(e);Ki();try{xm(e)}finally{Xi(),s()}}}function Qm(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,a){return wt(e,"get","$attrs"),t[a]}}))}function pc(e){const t=a=>{e.exposed=a||{}};return{get attrs(){return Qm(e)},slots:e.slots,emit:e.emit,expose:t}}function So(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Yl(Gl(e.exposed)),{get(t,a){if(a in t)return t[a];if(a in Wn)return Wn[a](e)},has(t,a){return a in t||a in Wn}}))}function fl(e,t=!0){return Ce(e)?e.displayName||e.name:e.name||t&&e.__name}function Zm(e){return Ce(e)&&"__vccOpts"in e}const M=(e,t)=>Ap(e,t,va);function ef(e,t,a=qe){const o=Jt(),s=ht(t),u=$t(t),c=hu((d,m)=>{let f;return Du(()=>{const h=e[t];Nt(f,h)&&(f=h,m())}),{get(){return d(),a.get?a.get(f):f},set(h){const _=o.vnode.props;!(_&&(t in _||s in _||u in _)&&(`onUpdate:${t}`in _||`onUpdate:${s}`in _||`onUpdate:${u}`in _))&&Nt(h,f)&&(f=h,m()),o.emit(`update:${t}`,a.set?a.set(h):h)}}}),p=t==="modelValue"?"modelModifiers":`${t}Modifiers`;return c[Symbol.iterator]=()=>{let d=0;return{next(){return d<2?{value:d++?e[p]||{}:c,done:!1}:{done:!0}}}},c}function ee(e,t,a){const o=arguments.length;return o===2?je(t)&&!ge(t)?Ct(t)?i(e,null,[t]):i(e,t):i(e,null,t):(o>3?a=Array.prototype.slice.call(arguments,2):o===3&&Ct(a)&&(a=[a]),i(e,t,a))}function tf(){}function nf(e,t,a,o){const s=a[o];if(s&&mc(s,e))return s;const u=t();return u.memo=e.slice(),a[o]=u}function mc(e,t){const a=e.memo;if(a.length!=t.length)return!1;for(let o=0;o<a.length;o++)if(Nt(a[o],t[o]))return!1;return ji>0&&St&&St.push(e),!0}const fc="3.4.15",af=bt,of=Vp,lf=on,sf=yu,rf={createComponentInstance:rc,setupComponent:cc,renderComponentRoot:Pa,setCurrentRenderingInstance:la,isVNode:Ct,normalizeVNode:kt},uf=rf,cf=null,df=null,pf=null;/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const mf="http://www.w3.org/2000/svg",ff="http://www.w3.org/1998/Math/MathML",_i=typeof document<"u"?document:null,er=_i&&_i.createElement("template"),gf={insert:(e,t,a)=>{t.insertBefore(e,a||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,a,o)=>{const s=t==="svg"?_i.createElementNS(mf,e):t==="mathml"?_i.createElementNS(ff,e):_i.createElement(e,a?{is:a}:void 0);return e==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:e=>_i.createTextNode(e),createComment:e=>_i.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>_i.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,a,o,s,u){const c=a?a.previousSibling:t.lastChild;if(s&&(s===u||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),a),!(s===u||!(s=s.nextSibling)););else{er.innerHTML=o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e;const p=er.content;if(o==="svg"||o==="mathml"){const d=p.firstChild;for(;d.firstChild;)p.appendChild(d.firstChild);p.removeChild(d)}t.insertBefore(p,a)}return[c?c.nextSibling:t.firstChild,a?a.previousSibling:t.lastChild]}},di="transition",Pn="animation",yn=Symbol("_vtc"),yo=(e,{slots:t})=>ee(Eu,hc(e),t);yo.displayName="Transition";const gc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},hf=yo.props=Xe({},ts,gc),$i=(e,t=[])=>{ge(e)?e.forEach(a=>a(...t)):e&&e(...t)},tr=e=>e?ge(e)?e.some(t=>t.length>1):e.length>1:!1;function hc(e){const t={};for(const Y in e)Y in gc||(t[Y]=e[Y]);if(e.css===!1)return t;const{name:a="v",type:o,duration:s,enterFromClass:u=`${a}-enter-from`,enterActiveClass:c=`${a}-enter-active`,enterToClass:p=`${a}-enter-to`,appearFromClass:d=u,appearActiveClass:m=c,appearToClass:f=p,leaveFromClass:h=`${a}-leave-from`,leaveActiveClass:_=`${a}-leave-active`,leaveToClass:x=`${a}-leave-to`}=e,y=_f(s),A=y&&y[0],T=y&&y[1],{onBeforeEnter:I,onEnter:g,onEnterCancelled:v,onLeave:w,onLeaveCancelled:k,onBeforeAppear:E=I,onAppear:V=g,onAppearCancelled:H=v}=t,P=(Y,pe,Ae)=>{mi(Y,pe?f:p),mi(Y,pe?m:c),Ae&&Ae()},G=(Y,pe)=>{Y._isLeaving=!1,mi(Y,h),mi(Y,x),mi(Y,_),pe&&pe()},J=Y=>(pe,Ae)=>{const U=Y?V:g,K=()=>P(pe,Y,Ae);$i(U,[pe,K]),ir(()=>{mi(pe,Y?d:u),Zt(pe,Y?f:p),tr(U)||nr(pe,o,A,K)})};return Xe(t,{onBeforeEnter(Y){$i(I,[Y]),Zt(Y,u),Zt(Y,c)},onBeforeAppear(Y){$i(E,[Y]),Zt(Y,d),Zt(Y,m)},onEnter:J(!1),onAppear:J(!0),onLeave(Y,pe){Y._isLeaving=!0;const Ae=()=>G(Y,pe);Zt(Y,h),vc(),Zt(Y,_),ir(()=>{Y._isLeaving&&(mi(Y,h),Zt(Y,x),tr(w)||nr(Y,o,T,Ae))}),$i(w,[Y,Ae])},onEnterCancelled(Y){P(Y,!1),$i(v,[Y])},onAppearCancelled(Y){P(Y,!0),$i(H,[Y])},onLeaveCancelled(Y){G(Y),$i(k,[Y])}})}function _f(e){if(e==null)return null;if(je(e))return[Ro(e.enter),Ro(e.leave)];{const t=Ro(e);return[t,t]}}function Ro(e){return Oa(e)}function Zt(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.add(a)),(e[yn]||(e[yn]=new Set)).add(t)}function mi(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const a=e[yn];a&&(a.delete(t),a.size||(e[yn]=void 0))}function ir(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let vf=0;function nr(e,t,a,o){const s=e._endId=++vf,u=()=>{s===e._endId&&o()};if(a)return setTimeout(u,a);const{type:c,timeout:p,propCount:d}=_c(e,t);if(!c)return o();const m=c+"end";let f=0;const h=()=>{e.removeEventListener(m,_),u()},_=x=>{x.target===e&&++f>=d&&h()};setTimeout(()=>{f<d&&h()},p+1),e.addEventListener(m,_)}function _c(e,t){const a=window.getComputedStyle(e),o=y=>(a[y]||"").split(", "),s=o(`${di}Delay`),u=o(`${di}Duration`),c=ar(s,u),p=o(`${Pn}Delay`),d=o(`${Pn}Duration`),m=ar(p,d);let f=null,h=0,_=0;t===di?c>0&&(f=di,h=c,_=u.length):t===Pn?m>0&&(f=Pn,h=m,_=d.length):(h=Math.max(c,m),f=h>0?c>m?di:Pn:null,_=f?f===di?u.length:d.length:0);const x=f===di&&/\b(transform|all)(,|$)/.test(o(`${di}Property`).toString());return{type:f,timeout:h,propCount:_,hasTransform:x}}function ar(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((a,o)=>or(a)+or(e[o])))}function or(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function vc(){return document.body.offsetHeight}function bf(e,t,a){const o=e[yn];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):a?e.setAttribute("class",t):e.className=t}const us=Symbol("_vod"),bc={beforeMount(e,{value:t},{transition:a}){e[us]=e.style.display==="none"?"":e.style.display,a&&t?a.beforeEnter(e):Fn(e,t)},mounted(e,{value:t},{transition:a}){a&&t&&a.enter(e)},updated(e,{value:t,oldValue:a},{transition:o}){!t!=!a&&(o?t?(o.beforeEnter(e),Fn(e,!0),o.enter(e)):o.leave(e,()=>{Fn(e,!1)}):Fn(e,t))},beforeUnmount(e,{value:t}){Fn(e,t)}};function Fn(e,t){e.style.display=t?e[us]:"none"}function Sf(){bc.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const Sc=Symbol("");function yf(e){const t=Jt();if(!t)return;const a=t.ut=(s=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(u=>hl(u,s))},o=()=>{const s=e(t.proxy);gl(t.subTree,s),a(s)};Lu(o),xi(()=>{const s=new MutationObserver(o);s.observe(t.subTree.el.parentNode,{childList:!0}),Qi(()=>s.disconnect())})}function gl(e,t){if(e.shapeFlag&128){const a=e.suspense;e=a.activeBranch,a.pendingBranch&&!a.isHydrating&&a.effects.push(()=>{gl(a.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)hl(e.el,t);else if(e.type===we)e.children.forEach(a=>gl(a,t));else if(e.type===Mi){let{el:a,anchor:o}=e;for(;a&&(hl(a,t),a!==o);)a=a.nextSibling}}function hl(e,t){if(e.nodeType===1){const a=e.style;let o="";for(const s in t)a.setProperty(`--${s}`,t[s]),o+=`--${s}: ${t[s]};`;a[Sc]=o}}function wf(e,t,a){const o=e.style,s=o.display,u=Je(a);if(a&&!u){if(t&&!Je(t))for(const c in t)a[c]==null&&_l(o,c,"");for(const c in a)_l(o,c,a[c])}else if(u){if(t!==a){const c=o[Sc];c&&(a+=";"+c),o.cssText=a}}else t&&e.removeAttribute("style");us in e&&(o.display=s)}const lr=/\s*!important$/;function _l(e,t,a){if(ge(a))a.forEach(o=>_l(e,t,o));else if(a==null&&(a=""),t.startsWith("--"))e.setProperty(t,a);else{const o=Cf(e,t);lr.test(a)?e.setProperty($t(o),a.replace(lr,""),"important"):e[o]=a}}const sr=["Webkit","Moz","ms"],zo={};function Cf(e,t){const a=zo[t];if(a)return a;let o=ht(t);if(o!=="filter"&&o in e)return zo[t]=o;o=fa(o);for(let s=0;s<sr.length;s++){const u=sr[s]+o;if(u in e)return zo[t]=u}return t}const rr="http://www.w3.org/1999/xlink";function xf(e,t,a,o,s){if(o&&t.startsWith("xlink:"))a==null?e.removeAttributeNS(rr,t.slice(6,t.length)):e.setAttributeNS(rr,t,a);else{const u=Zd(t);a==null||u&&!Wr(a)?e.removeAttribute(t):e.setAttribute(t,u?"":a)}}function Af(e,t,a,o,s,u,c){if(t==="innerHTML"||t==="textContent"){o&&c(o,s,u),e[t]=a??"";return}const p=e.tagName;if(t==="value"&&p!=="PROGRESS"&&!p.includes("-")){e._value=a;const m=p==="OPTION"?e.getAttribute("value"):e.value,f=a??"";m!==f&&(e.value=f),a==null&&e.removeAttribute(t);return}let d=!1;if(a===""||a==null){const m=typeof e[t];m==="boolean"?a=Wr(a):a==null&&m==="string"?(a="",d=!0):m==="number"&&(a=0,d=!0)}try{e[t]=a}catch{}d&&e.removeAttribute(t)}function ti(e,t,a,o){e.addEventListener(t,a,o)}function kf(e,t,a,o){e.removeEventListener(t,a,o)}const ur=Symbol("_vei");function Bf(e,t,a,o,s=null){const u=e[ur]||(e[ur]={}),c=u[t];if(o&&c)c.value=o;else{const[p,d]=$f(t);if(o){const m=u[t]=Df(o,s);ti(e,p,m,d)}else c&&(kf(e,p,c,d),u[t]=void 0)}}const cr=/(?:Once|Passive|Capture)$/;function $f(e){let t;if(cr.test(e)){t={};let o;for(;o=e.match(cr);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$t(e.slice(2)),t]}let Po=0;const Tf=Promise.resolve(),Lf=()=>Po||(Tf.then(()=>Po=0),Po=Date.now());function Df(e,t){const a=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=a.attached)return;Dt(If(o,a.value),t,5,[o])};return a.value=e,a.attached=Lf(),a}function If(e,t){if(ge(t)){const a=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{a.call(e),e._stopped=!0},t.map(o=>s=>!s._stopped&&o&&o(s))}else return t}const dr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ef=(e,t,a,o,s,u,c,p,d)=>{const m=s==="svg";t==="class"?bf(e,o,m):t==="style"?wf(e,a,o):ma(t)?El(t)||Bf(e,t,a,o,c):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Rf(e,t,o,m))?Af(e,t,o,u,c,p,d):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),xf(e,t,o,m))};function Rf(e,t,a,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in e&&dr(t)&&Ce(a));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return dr(t)&&Je(a)?!1:t in e}/*! #__NO_SIDE_EFFECTS__ */function yc(e,t){const a=F(e);class o extends wo{constructor(u){super(a,u,t)}}return o.def=a,o}/*! #__NO_SIDE_EFFECTS__ */const zf=e=>yc(e,Ec),Pf=typeof HTMLElement<"u"?HTMLElement:class{};class wo extends Pf{constructor(t,a={},o){super(),this._def=t,this._props=a,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&o?o(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),$n(()=>{this._connected||(Ja(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let o=0;o<this.attributes.length;o++)this._setAttr(this.attributes[o].name);this._ob=new MutationObserver(o=>{for(const s of o)this._setAttr(s.attributeName)}),this._ob.observe(this,{attributes:!0});const t=(o,s=!1)=>{const{props:u,styles:c}=o;let p;if(u&&!ge(u))for(const d in u){const m=u[d];(m===Number||m&&m.type===Number)&&(d in this._props&&(this._props[d]=Oa(this._props[d])),(p||(p=Object.create(null)))[ht(d)]=!0)}this._numberProps=p,s&&this._resolveProps(o),this._applyStyles(c),this._update()},a=this._def.__asyncLoader;a?a().then(o=>t(o,!0)):t(this._def)}_resolveProps(t){const{props:a}=t,o=ge(a)?a:Object.keys(a||{});for(const s of Object.keys(this))s[0]!=="_"&&o.includes(s)&&this._setProp(s,this[s],!0,!1);for(const s of o.map(ht))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(u){this._setProp(s,u)}})}_setAttr(t){let a=this.getAttribute(t);const o=ht(t);this._numberProps&&this._numberProps[o]&&(a=Oa(a)),this._setProp(o,a,!1)}_getProp(t){return this._props[t]}_setProp(t,a,o=!0,s=!0){a!==this._props[t]&&(this._props[t]=a,s&&this._instance&&this._update(),o&&(a===!0?this.setAttribute($t(t),""):typeof a=="string"||typeof a=="number"?this.setAttribute($t(t),a+""):a||this.removeAttribute($t(t))))}_update(){Ja(this._createVNode(),this.shadowRoot)}_createVNode(){const t=i(this._def,Xe({},this._props));return this._instance||(t.ce=a=>{this._instance=a,a.isCE=!0;const o=(u,c)=>{this.dispatchEvent(new CustomEvent(u,{detail:c}))};a.emit=(u,...c)=>{o(u,c),$t(u)!==u&&o($t(u),c)};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof wo){a.parent=s._instance,a.provides=s._instance.provides;break}}),t}_applyStyles(t){t&&t.forEach(a=>{const o=document.createElement("style");o.textContent=a,this.shadowRoot.appendChild(o)})}}function Ff(e="$style"){{const t=Jt();if(!t)return qe;const a=t.type.__cssModules;if(!a)return qe;const o=a[e];return o||qe}}const wc=new WeakMap,Cc=new WeakMap,Ka=Symbol("_moveCb"),pr=Symbol("_enterCb"),xc={name:"TransitionGroup",props:Xe({},hf,{tag:String,moveClass:String}),setup(e,{slots:t}){const a=Jt(),o=es();let s,u;return ho(()=>{if(!s.length)return;const c=e.moveClass||`${e.name||"v"}-move`;if(!qf(s[0].el,a.vnode.el,c))return;s.forEach(Mf),s.forEach(Hf);const p=s.filter(Of);vc(),p.forEach(d=>{const m=d.el,f=m.style;Zt(m,c),f.transform=f.webkitTransform=f.transitionDuration="";const h=m[Ka]=_=>{_&&_.target!==m||(!_||/transform$/.test(_.propertyName))&&(m.removeEventListener("transitionend",h),m[Ka]=null,mi(m,c))};m.addEventListener("transitionend",h)})}),()=>{const c=Ee(e),p=hc(c);let d=c.tag||we;s=u,u=t.default?fo(t.default()):[];for(let m=0;m<u.length;m++){const f=u[m];f.key!=null&&qi(f,Sn(f,p,o,a))}if(s)for(let m=0;m<s.length;m++){const f=s[m];qi(f,Sn(f,p,o,a)),wc.set(f,f.el.getBoundingClientRect())}return i(d,null,u)}}},Vf=e=>delete e.mode;xc.props;const Ac=xc;function Mf(e){const t=e.el;t[Ka]&&t[Ka](),t[pr]&&t[pr]()}function Hf(e){Cc.set(e,e.el.getBoundingClientRect())}function Of(e){const t=wc.get(e),a=Cc.get(e),o=t.left-a.left,s=t.top-a.top;if(o||s){const u=e.el.style;return u.transform=u.webkitTransform=`translate(${o}px,${s}px)`,u.transitionDuration="0s",e}}function qf(e,t,a){const o=e.cloneNode(),s=e[yn];s&&s.forEach(p=>{p.split(/\s+/).forEach(d=>d&&o.classList.remove(d))}),a.split(/\s+/).forEach(p=>p&&o.classList.add(p)),o.style.display="none";const u=t.nodeType===1?t:t.parentNode;u.appendChild(o);const{hasTransform:c}=_c(o);return u.removeChild(o),c}const Ci=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ge(t)?a=>cn(t,a):t};function Nf(e){e.target.composing=!0}function mr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Vt=Symbol("_assign"),Xa={created(e,{modifiers:{lazy:t,trim:a,number:o}},s){e[Vt]=Ci(s);const u=o||s.props&&s.props.type==="number";ti(e,t?"change":"input",c=>{if(c.target.composing)return;let p=e.value;a&&(p=p.trim()),u&&(p=ta(p)),e[Vt](p)}),a&&ti(e,"change",()=>{e.value=e.value.trim()}),t||(ti(e,"compositionstart",Nf),ti(e,"compositionend",mr),ti(e,"change",mr))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:a,trim:o,number:s}},u){if(e[Vt]=Ci(u),e.composing)return;const c=s||e.type==="number"?ta(e.value):e.value,p=t??"";c!==p&&(document.activeElement===e&&e.type!=="range"&&(a||o&&e.value.trim()===p)||(e.value=p))}},cs={deep:!0,created(e,t,a){e[Vt]=Ci(a),ti(e,"change",()=>{const o=e._modelValue,s=wn(e),u=e.checked,c=e[Vt];if(ge(o)){const p=oo(o,s),d=p!==-1;if(u&&!d)c(o.concat(s));else if(!u&&d){const m=[...o];m.splice(p,1),c(m)}}else if(Wi(o)){const p=new Set(o);u?p.add(s):p.delete(s),c(p)}else c(Bc(e,u))})},mounted:fr,beforeUpdate(e,t,a){e[Vt]=Ci(a),fr(e,t,a)}};function fr(e,{value:t,oldValue:a},o){e._modelValue=t,ge(t)?e.checked=oo(t,o.props.value)>-1:Wi(t)?e.checked=t.has(o.props.value):t!==a&&(e.checked=ai(t,Bc(e,!0)))}const ds={created(e,{value:t},a){e.checked=ai(t,a.props.value),e[Vt]=Ci(a),ti(e,"change",()=>{e[Vt](wn(e))})},beforeUpdate(e,{value:t,oldValue:a},o){e[Vt]=Ci(o),t!==a&&(e.checked=ai(t,o.props.value))}},kc={deep:!0,created(e,{value:t,modifiers:{number:a}},o){const s=Wi(t);ti(e,"change",()=>{const u=Array.prototype.filter.call(e.options,c=>c.selected).map(c=>a?ta(wn(c)):wn(c));e[Vt](e.multiple?s?new Set(u):u:u[0]),e._assigning=!0,$n(()=>{e._assigning=!1})}),e[Vt]=Ci(o)},mounted(e,{value:t,oldValue:a,modifiers:{number:o}}){gr(e,t,a,o)},beforeUpdate(e,t,a){e[Vt]=Ci(a)},updated(e,{value:t,oldValue:a,modifiers:{number:o}}){e._assigning||gr(e,t,a,o)}};function gr(e,t,a,o){const s=e.multiple,u=ge(t);if(!(s&&!u&&!Wi(t))&&!(u&&ai(t,a))){for(let c=0,p=e.options.length;c<p;c++){const d=e.options[c],m=wn(d);if(s)if(u){const f=typeof m;f==="string"||f==="number"?d.selected=t.includes(o?ta(m):m):d.selected=oo(t,m)>-1}else d.selected=t.has(m);else if(ai(wn(d),t)){e.selectedIndex!==c&&(e.selectedIndex=c);return}}!s&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function wn(e){return"_value"in e?e._value:e.value}function Bc(e,t){const a=t?"_trueValue":"_falseValue";return a in e?e[a]:t}const $c={created(e,t,a){Da(e,t,a,null,"created")},mounted(e,t,a){Da(e,t,a,null,"mounted")},beforeUpdate(e,t,a,o){Da(e,t,a,o,"beforeUpdate")},updated(e,t,a,o){Da(e,t,a,o,"updated")}};function Tc(e,t){switch(e){case"SELECT":return kc;case"TEXTAREA":return Xa;default:switch(t){case"checkbox":return cs;case"radio":return ds;default:return Xa}}}function Da(e,t,a,o,s){const c=Tc(e.tagName,a.props&&a.props.type)[s];c&&c(e,t,a,o)}function Gf(){Xa.getSSRProps=({value:e})=>({value:e}),ds.getSSRProps=({value:e},t)=>{if(t.props&&ai(t.props.value,e))return{checked:!0}},cs.getSSRProps=({value:e},t)=>{if(ge(e)){if(t.props&&oo(e,t.props.value)>-1)return{checked:!0}}else if(Wi(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},$c.getSSRProps=(e,t)=>{if(typeof t.type!="string")return;const a=Tc(t.type.toUpperCase(),t.props&&t.props.type);if(a.getSSRProps)return a.getSSRProps(e,t)}}const jf=["ctrl","shift","alt","meta"],Uf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>jf.some(a=>e[`${a}Key`]&&!t.includes(a))},It=(e,t)=>{const a=e._withMods||(e._withMods={}),o=t.join(".");return a[o]||(a[o]=(s,...u)=>{for(let c=0;c<t.length;c++){const p=Uf[t[c]];if(p&&p(s,t))return}return e(s,...u)})},Yf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Wf=(e,t)=>{const a=e._withKeys||(e._withKeys={}),o=t.join(".");return a[o]||(a[o]=s=>{if(!("key"in s))return;const u=$t(s.key);if(t.some(c=>c===u||Yf[c]===u))return e(s)})},Lc=Xe({patchProp:Ef},gf);let Jn,hr=!1;function Dc(){return Jn||(Jn=Qu(Lc))}function Ic(){return Jn=hr?Jn:Zu(Lc),hr=!0,Jn}const Ja=(...e)=>{Dc().render(...e)},Ec=(...e)=>{Ic().hydrate(...e)},Rc=(...e)=>{const t=Dc().createApp(...e),{mount:a}=t;return t.mount=o=>{const s=Pc(o);if(!s)return;const u=t._component;!Ce(u)&&!u.render&&!u.template&&(u.template=s.innerHTML),s.innerHTML="";const c=a(s,!1,zc(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),c},t},Kf=(...e)=>{const t=Ic().createApp(...e),{mount:a}=t;return t.mount=o=>{const s=Pc(o);if(s)return a(s,!0,zc(s))},t};function zc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Pc(e){return Je(e)?document.querySelector(e):e}let _r=!1;const Xf=()=>{_r||(_r=!0,Gf(),Sf())};/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Jf=()=>{},Qf=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:Eu,BaseTransitionPropsValidators:ts,Comment:mt,DeprecationTypes:pf,EffectScope:Fl,ErrorCodes:Fp,ErrorTypeStrings:of,Fragment:we,KeepAlive:sm,ReactiveEffect:bn,Static:Mi,Suspense:Jp,Teleport:vo,Text:Gi,TrackOpTypes:Rp,Transition:yo,TransitionGroup:Ac,TriggerOpTypes:zp,VueElement:wo,assertNumber:Pp,callWithAsyncErrorHandling:Dt,callWithErrorHandling:ni,camelize:ht,capitalize:fa,cloneVNode:Xt,compatUtils:df,compile:Jf,computed:M,createApp:Rc,createBlock:C,createCommentVNode:ss,createElementBlock:be,createElementVNode:B,createHydrationRenderer:Zu,createPropsRestProxy:wm,createRenderer:Qu,createSSRApp:Kf,createSlots:um,createStaticVNode:Um,createTextVNode:l,createVNode:i,customRef:hu,defineAsyncComponent:om,defineComponent:F,defineCustomElement:yc,defineEmits:mm,defineExpose:fm,defineModel:_m,defineOptions:gm,defineProps:pm,defineSSRCustomElement:zf,defineSlots:hm,devtools:lf,effect:np,effectScope:tp,getCurrentInstance:Jt,getCurrentScope:Vl,getTransitionRawChildren:fo,guardReactiveProps:sc,h:ee,handleError:Ji,hasInjectionContext:Dm,hydrate:Ec,initCustomFormatter:tf,initDirectivesForSSR:Xf,inject:Ve,isMemoSame:mc,isProxy:Nl,isReactive:Fi,isReadonly:Oi,isRef:ct,isRuntimeOnly:Jm,isShallow:ia,isVNode:Ct,markRaw:Gl,mergeDefaults:Sm,mergeModels:ym,mergeProps:Zi,nextTick:$n,normalizeClass:ga,normalizeProps:Jd,normalizeStyle:Bn,onActivated:is,onBeforeMount:Pu,onBeforeUnmount:_o,onBeforeUpdate:Fu,onDeactivated:ns,onErrorCaptured:Ou,onMounted:xi,onRenderTracked:Hu,onRenderTriggered:Mu,onScopeDispose:Jr,onServerPrefetch:Vu,onUnmounted:Qi,onUpdated:ho,openBlock:S,popScopeId:xu,provide:ut,proxyRefs:Yl,pushScopeId:Cu,queuePostFlushCb:Na,reactive:li,readonly:ql,ref:j,registerRuntimeCompiler:Xm,render:Ja,renderList:Qe,renderSlot:Ni,resolveComponent:$,resolveDirective:mo,resolveDynamicComponent:tl,resolveFilter:cf,resolveTransitionHooks:Sn,setBlockTracking:ul,setDevtoolsHook:sf,setTransitionHooks:qi,shallowReactive:pu,shallowReadonly:xp,shallowRef:fu,ssrContextKey:$u,ssrUtils:uf,stop:ap,toDisplayString:$e,toHandlerKey:Yn,toHandlers:cm,toRaw:Ee,toRef:Zo,toRefs:Dp,toValue:$p,transformVNodeArgs:Gm,triggerRef:Bp,unref:r,useAttrs:Nu,useCssModule:Ff,useCssVars:yf,useModel:ef,useSSRContext:Tu,useSlots:bm,useTransitionState:es,vModelCheckbox:cs,vModelDynamic:$c,vModelRadio:ds,vModelSelect:kc,vModelText:Xa,vShow:bc,version:fc,warn:af,watch:pt,watchEffect:Zl,watchPostEffect:Lu,watchSyncEffect:Du,withAsyncContext:Cm,withCtx:n,withDefaults:vm,withDirectives:Si,withKeys:Wf,withMemo:nf,withModifiers:It,withScopeId:Gp},Symbol.toStringTag,{value:"Module"})),Zf=F({name:"App"}),Ne=(e,t)=>{const a=e.__vccOpts||e;for(const[o,s]of t)a[o]=s;return a};function eg(e,t,a,o,s,u){const c=$("router-view");return S(),C(c)}const tg=Ne(Zf,[["render",eg]]),ig="modulepreload",ng=function(e){return"/vue-fomantic-ui/"+e},vr={},jt=function(t,a,o){let s=Promise.resolve();if(a&&a.length>0){const u=document.getElementsByTagName("link");s=Promise.all(a.map(c=>{if(c=ng(c),c in vr)return;vr[c]=!0;const p=c.endsWith(".css"),d=p?'[rel="stylesheet"]':"";if(!!o)for(let h=u.length-1;h>=0;h--){const _=u[h];if(_.href===c&&(!p||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=p?"stylesheet":ig,p||(f.as="script",f.crossOrigin=""),f.href=c,document.head.appendChild(f),p)return new Promise((h,_)=>{f.addEventListener("load",h),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}return s.then(()=>t()).catch(u=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=u,window.dispatchEvent(c),!c.defaultPrevented)throw u})};/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Fc=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Tn=e=>Fc?Symbol(e):"_vr_"+e,Vc=Tn("rvlm"),br=Tn("rvd"),Co=Tn("r"),ps=Tn("rl"),vl=Tn("rvl"),ln=typeof window<"u";function ag(e){return e.__esModule||Fc&&e[Symbol.toStringTag]==="Module"}const Ye=Object.assign;function Fo(e,t){const a={};for(const o in t){const s=t[o];a[o]=Array.isArray(s)?s.map(e):e(s)}return a}const Qn=()=>{},og=/\/$/,lg=e=>e.replace(og,"");function Vo(e,t,a="/"){let o,s={},u="",c="";const p=t.indexOf("?"),d=t.indexOf("#",p>-1?p:0);return p>-1&&(o=t.slice(0,p),u=t.slice(p+1,d>-1?d:t.length),s=e(u)),d>-1&&(o=o||t.slice(0,d),c=t.slice(d,t.length)),o=cg(o??t,a),{fullPath:o+(u&&"?")+u+c,path:o,query:s,hash:c}}function sg(e,t){const a=t.query?e(t.query):"";return t.path+(a&&"?")+a+(t.hash||"")}function Sr(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function rg(e,t,a){const o=t.matched.length-1,s=a.matched.length-1;return o>-1&&o===s&&Cn(t.matched[o],a.matched[s])&&Mc(t.params,a.params)&&e(t.query)===e(a.query)&&t.hash===a.hash}function Cn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Mc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(!ug(e[a],t[a]))return!1;return!0}function ug(e,t){return Array.isArray(e)?yr(e,t):Array.isArray(t)?yr(t,e):e===t}function yr(e,t){return Array.isArray(t)?e.length===t.length&&e.every((a,o)=>a===t[o]):e.length===1&&e[0]===t}function cg(e,t){if(e.startsWith("/"))return e;if(!e)return t;const a=t.split("/"),o=e.split("/");let s=a.length-1,u,c;for(u=0;u<o.length;u++)if(c=o[u],!(s===1||c==="."))if(c==="..")s--;else break;return a.slice(0,s).join("/")+"/"+o.slice(u-(u===o.length?1:0)).join("/")}var ca;(function(e){e.pop="pop",e.push="push"})(ca||(ca={}));var Zn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Zn||(Zn={}));function dg(e){if(!e)if(ln){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),lg(e)}const pg=/^[^#]+#/;function mg(e,t){return e.replace(pg,"#")+t}function fg(e,t){const a=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-a.left-(t.left||0),top:o.top-a.top-(t.top||0)}}const xo=()=>({left:window.pageXOffset,top:window.pageYOffset});function gg(e){let t;if("el"in e){const a=e.el,o=typeof a=="string"&&a.startsWith("#"),s=typeof a=="string"?o?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!s)return;t=fg(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function wr(e,t){return(history.state?history.state.position-t:-1)+e}const bl=new Map;function hg(e,t){bl.set(e,t)}function _g(e){const t=bl.get(e);return bl.delete(e),t}let vg=()=>location.protocol+"//"+location.host;function Hc(e,t){const{pathname:a,search:o,hash:s}=t,u=e.indexOf("#");if(u>-1){let p=s.includes(e.slice(u))?e.slice(u).length:1,d=s.slice(p);return d[0]!=="/"&&(d="/"+d),Sr(d,"")}return Sr(a,e)+o+s}function bg(e,t,a,o){let s=[],u=[],c=null;const p=({state:_})=>{const x=Hc(e,location),y=a.value,A=t.value;let T=0;if(_){if(a.value=x,t.value=_,c&&c===y){c=null;return}T=A?_.position-A.position:0}else o(x);s.forEach(I=>{I(a.value,y,{delta:T,type:ca.pop,direction:T?T>0?Zn.forward:Zn.back:Zn.unknown})})};function d(){c=a.value}function m(_){s.push(_);const x=()=>{const y=s.indexOf(_);y>-1&&s.splice(y,1)};return u.push(x),x}function f(){const{history:_}=window;_.state&&_.replaceState(Ye({},_.state,{scroll:xo()}),"")}function h(){for(const _ of u)_();u=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",f),{pauseListeners:d,listen:m,destroy:h}}function Cr(e,t,a,o=!1,s=!1){return{back:e,current:t,forward:a,replaced:o,position:window.history.length,scroll:s?xo():null}}function Sg(e){const{history:t,location:a}=window,o={value:Hc(e,a)},s={value:t.state};s.value||u(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function u(d,m,f){const h=e.indexOf("#"),_=h>-1?(a.host&&document.querySelector("base")?e:e.slice(h))+d:vg()+e+d;try{t[f?"replaceState":"pushState"](m,"",_),s.value=m}catch(x){console.error(x),a[f?"replace":"assign"](_)}}function c(d,m){const f=Ye({},t.state,Cr(s.value.back,d,s.value.forward,!0),m,{position:s.value.position});u(d,f,!0),o.value=d}function p(d,m){const f=Ye({},s.value,t.state,{forward:d,scroll:xo()});u(f.current,f,!0);const h=Ye({},Cr(o.value,d,null),{position:f.position+1},m);u(d,h,!1),o.value=d}return{location:o,state:s,push:p,replace:c}}function yg(e){e=dg(e);const t=Sg(e),a=bg(e,t.state,t.location,t.replace);function o(u,c=!0){c||a.pauseListeners(),history.go(u)}const s=Ye({location:"",base:e,go:o,createHref:mg.bind(null,e)},t,a);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function wg(e){return typeof e=="string"||e&&typeof e=="object"}function Oc(e){return typeof e=="string"||typeof e=="symbol"}const pi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},qc=Tn("nf");var xr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(xr||(xr={}));function xn(e,t){return Ye(new Error,{type:e,[qc]:!0},t)}function Ti(e,t){return e instanceof Error&&qc in e&&(t==null||!!(e.type&t))}const Ar="[^/]+?",Cg={sensitive:!1,strict:!1,start:!0,end:!0},xg=/[.+*?^${}()[\]/\\]/g;function Ag(e,t){const a=Ye({},Cg,t),o=[];let s=a.start?"^":"";const u=[];for(const m of e){const f=m.length?[]:[90];a.strict&&!m.length&&(s+="/");for(let h=0;h<m.length;h++){const _=m[h];let x=40+(a.sensitive?.25:0);if(_.type===0)h||(s+="/"),s+=_.value.replace(xg,"\\$&"),x+=40;else if(_.type===1){const{value:y,repeatable:A,optional:T,regexp:I}=_;u.push({name:y,repeatable:A,optional:T});const g=I||Ar;if(g!==Ar){x+=10;try{new RegExp(`(${g})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${y}" (${g}): `+w.message)}}let v=A?`((?:${g})(?:/(?:${g}))*)`:`(${g})`;h||(v=T&&m.length<2?`(?:/${v})`:"/"+v),T&&(v+="?"),s+=v,x+=20,T&&(x+=-8),A&&(x+=-20),g===".*"&&(x+=-50)}f.push(x)}o.push(f)}if(a.strict&&a.end){const m=o.length-1;o[m][o[m].length-1]+=.7000000000000001}a.strict||(s+="/?"),a.end?s+="$":a.strict&&(s+="(?:/|$)");const c=new RegExp(s,a.sensitive?"":"i");function p(m){const f=m.match(c),h={};if(!f)return null;for(let _=1;_<f.length;_++){const x=f[_]||"",y=u[_-1];h[y.name]=x&&y.repeatable?x.split("/"):x}return h}function d(m){let f="",h=!1;for(const _ of e){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const x of _)if(x.type===0)f+=x.value;else if(x.type===1){const{value:y,repeatable:A,optional:T}=x,I=y in m?m[y]:"";if(Array.isArray(I)&&!A)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const g=Array.isArray(I)?I.join("/"):I;if(!g)if(T)_.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);f+=g}}return f}return{re:c,score:o,keys:u,parse:p,stringify:d}}function kg(e,t){let a=0;for(;a<e.length&&a<t.length;){const o=t[a]-e[a];if(o)return o;a++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Bg(e,t){let a=0;const o=e.score,s=t.score;for(;a<o.length&&a<s.length;){const u=kg(o[a],s[a]);if(u)return u;a++}return s.length-o.length}const $g={type:0,value:""},Tg=/[a-zA-Z0-9_]/;function Lg(e){if(!e)return[[]];if(e==="/")return[[$g]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(x){throw new Error(`ERR (${a})/"${m}": ${x}`)}let a=0,o=a;const s=[];let u;function c(){u&&s.push(u),u=[]}let p=0,d,m="",f="";function h(){m&&(a===0?u.push({type:0,value:m}):a===1||a===2||a===3?(u.length>1&&(d==="*"||d==="+")&&t(`A repeatable param (${m}) must be alone in its segment. eg: '/:ids+.`),u.push({type:1,value:m,regexp:f,repeatable:d==="*"||d==="+",optional:d==="*"||d==="?"})):t("Invalid state to consume buffer"),m="")}function _(){m+=d}for(;p<e.length;){if(d=e[p++],d==="\\"&&a!==2){o=a,a=4;continue}switch(a){case 0:d==="/"?(m&&h(),c()):d===":"?(h(),a=1):_();break;case 4:_(),a=o;break;case 1:d==="("?a=2:Tg.test(d)?_():(h(),a=0,d!=="*"&&d!=="?"&&d!=="+"&&p--);break;case 2:d===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+d:a=3:f+=d;break;case 3:h(),a=0,d!=="*"&&d!=="?"&&d!=="+"&&p--,f="";break;default:t("Unknown state");break}}return a===2&&t(`Unfinished custom RegExp for param "${m}"`),h(),c(),s}function Dg(e,t,a){const o=Ag(Lg(e.path),a),s=Ye(o,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Ig(e,t){const a=[],o=new Map;t=Br({strict:!1,end:!0,sensitive:!1},t);function s(f){return o.get(f)}function u(f,h,_){const x=!_,y=Rg(f);y.aliasOf=_&&_.record;const A=Br(t,f),T=[y];if("alias"in f){const v=typeof f.alias=="string"?[f.alias]:f.alias;for(const w of v)T.push(Ye({},y,{components:_?_.record.components:y.components,path:w,aliasOf:_?_.record:y}))}let I,g;for(const v of T){const{path:w}=v;if(h&&w[0]!=="/"){const k=h.record.path,E=k[k.length-1]==="/"?"":"/";v.path=h.record.path+(w&&E+w)}if(I=Dg(v,h,A),_?_.alias.push(I):(g=g||I,g!==I&&g.alias.push(I),x&&f.name&&!kr(I)&&c(f.name)),"children"in y){const k=y.children;for(let E=0;E<k.length;E++)u(k[E],I,_&&_.children[E])}_=_||I,d(I)}return g?()=>{c(g)}:Qn}function c(f){if(Oc(f)){const h=o.get(f);h&&(o.delete(f),a.splice(a.indexOf(h),1),h.children.forEach(c),h.alias.forEach(c))}else{const h=a.indexOf(f);h>-1&&(a.splice(h,1),f.record.name&&o.delete(f.record.name),f.children.forEach(c),f.alias.forEach(c))}}function p(){return a}function d(f){let h=0;for(;h<a.length&&Bg(f,a[h])>=0;)h++;a.splice(h,0,f),f.record.name&&!kr(f)&&o.set(f.record.name,f)}function m(f,h){let _,x={},y,A;if("name"in f&&f.name){if(_=o.get(f.name),!_)throw xn(1,{location:f});A=_.record.name,x=Ye(Eg(h.params,_.keys.filter(g=>!g.optional).map(g=>g.name)),f.params),y=_.stringify(x)}else if("path"in f)y=f.path,_=a.find(g=>g.re.test(y)),_&&(x=_.parse(y),A=_.record.name);else{if(_=h.name?o.get(h.name):a.find(g=>g.re.test(h.path)),!_)throw xn(1,{location:f,currentLocation:h});A=_.record.name,x=Ye({},h.params,f.params),y=_.stringify(x)}const T=[];let I=_;for(;I;)T.unshift(I.record),I=I.parent;return{name:A,path:y,params:x,matched:T,meta:Pg(T)}}return e.forEach(f=>u(f)),{addRoute:u,resolve:m,removeRoute:c,getRoutes:p,getRecordMatcher:s}}function Eg(e,t){const a={};for(const o of t)o in e&&(a[o]=e[o]);return a}function Rg(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:zg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function zg(e){const t={},a=e.props||!1;if("component"in e)t.default=a;else for(const o in e.components)t[o]=typeof a=="boolean"?a:a[o];return t}function kr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Pg(e){return e.reduce((t,a)=>Ye(t,a.meta),{})}function Br(e,t){const a={};for(const o in e)a[o]=o in t?t[o]:e[o];return a}const Nc=/#/g,Fg=/&/g,Vg=/\//g,Mg=/=/g,Hg=/\?/g,Gc=/\+/g,Og=/%5B/g,qg=/%5D/g,jc=/%5E/g,Ng=/%60/g,Uc=/%7B/g,Gg=/%7C/g,Yc=/%7D/g,jg=/%20/g;function ms(e){return encodeURI(""+e).replace(Gg,"|").replace(Og,"[").replace(qg,"]")}function Ug(e){return ms(e).replace(Uc,"{").replace(Yc,"}").replace(jc,"^")}function Sl(e){return ms(e).replace(Gc,"%2B").replace(jg,"+").replace(Nc,"%23").replace(Fg,"%26").replace(Ng,"`").replace(Uc,"{").replace(Yc,"}").replace(jc,"^")}function Yg(e){return Sl(e).replace(Mg,"%3D")}function Wg(e){return ms(e).replace(Nc,"%23").replace(Hg,"%3F")}function Kg(e){return e==null?"":Wg(e).replace(Vg,"%2F")}function Qa(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Xg(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<o.length;++s){const u=o[s].replace(Gc," "),c=u.indexOf("="),p=Qa(c<0?u:u.slice(0,c)),d=c<0?null:Qa(u.slice(c+1));if(p in t){let m=t[p];Array.isArray(m)||(m=t[p]=[m]),m.push(d)}else t[p]=d}return t}function $r(e){let t="";for(let a in e){const o=e[a];if(a=Yg(a),o==null){o!==void 0&&(t+=(t.length?"&":"")+a);continue}(Array.isArray(o)?o.map(u=>u&&Sl(u)):[o&&Sl(o)]).forEach(u=>{u!==void 0&&(t+=(t.length?"&":"")+a,u!=null&&(t+="="+u))})}return t}function Jg(e){const t={};for(const a in e){const o=e[a];o!==void 0&&(t[a]=Array.isArray(o)?o.map(s=>s==null?null:""+s):o==null?o:""+o)}return t}function Vn(){let e=[];function t(o){return e.push(o),()=>{const s=e.indexOf(o);s>-1&&e.splice(s,1)}}function a(){e=[]}return{add:t,list:()=>e,reset:a}}function Qg(e,t,a){const o=()=>{e[t].delete(a)};Qi(o),ns(o),is(()=>{e[t].add(a)}),e[t].add(a)}function Zg(e){const t=Ve(Vc,{}).value;t&&Qg(t,"updateGuards",e)}function vi(e,t,a,o,s){const u=o&&(o.enterCallbacks[s]=o.enterCallbacks[s]||[]);return()=>new Promise((c,p)=>{const d=h=>{h===!1?p(xn(4,{from:a,to:t})):h instanceof Error?p(h):wg(h)?p(xn(2,{from:t,to:h})):(u&&o.enterCallbacks[s]===u&&typeof h=="function"&&u.push(h),c())},m=e.call(o&&o.instances[s],t,a,d);let f=Promise.resolve(m);e.length<3&&(f=f.then(d)),f.catch(h=>p(h))})}function Mo(e,t,a,o){const s=[];for(const u of e)for(const c in u.components){let p=u.components[c];if(!(t!=="beforeRouteEnter"&&!u.instances[c]))if(eh(p)){const m=(p.__vccOpts||p)[t];m&&s.push(vi(m,a,o,u,c))}else{let d=p();s.push(()=>d.then(m=>{if(!m)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${u.path}"`));const f=ag(m)?m.default:m;u.components[c]=f;const _=(f.__vccOpts||f)[t];return _&&vi(_,a,o,u,c)()}))}}return s}function eh(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Tr(e){const t=Ve(Co),a=Ve(ps),o=M(()=>t.resolve(r(e.to))),s=M(()=>{const{matched:d}=o.value,{length:m}=d,f=d[m-1],h=a.matched;if(!f||!h.length)return-1;const _=h.findIndex(Cn.bind(null,f));if(_>-1)return _;const x=Lr(d[m-2]);return m>1&&Lr(f)===x&&h[h.length-1].path!==x?h.findIndex(Cn.bind(null,d[m-2])):_}),u=M(()=>s.value>-1&&nh(a.params,o.value.params)),c=M(()=>s.value>-1&&s.value===a.matched.length-1&&Mc(a.params,o.value.params));function p(d={}){return ih(d)?t[r(e.replace)?"replace":"push"](r(e.to)).catch(Qn):Promise.resolve()}return{route:o,href:M(()=>o.value.href),isActive:u,isExactActive:c,navigate:p}}const th=F({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Tr,setup(e,{slots:t}){const a=li(Tr(e)),{options:o}=Ve(Co),s=M(()=>({[Dr(e.activeClass,o.linkActiveClass,"router-link-active")]:a.isActive,[Dr(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const u=t.default&&t.default(a);return e.custom?u:ee("a",{"aria-current":a.isExactActive?e.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:s.value},u)}}}),fs=th;function ih(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function nh(e,t){for(const a in t){const o=t[a],s=e[a];if(typeof o=="string"){if(o!==s)return!1}else if(!Array.isArray(s)||s.length!==o.length||o.some((u,c)=>u!==s[c]))return!1}return!0}function Lr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Dr=(e,t,a)=>e??t??a,ah=F({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:a}){const o=Ve(vl),s=M(()=>e.route||o.value),u=Ve(br,0),c=M(()=>s.value.matched[u]);ut(br,u+1),ut(Vc,c),ut(vl,s);const p=j();return pt(()=>[p.value,c.value,e.name],([d,m,f],[h,_,x])=>{m&&(m.instances[f]=d,_&&_!==m&&d&&d===h&&(m.leaveGuards.size||(m.leaveGuards=_.leaveGuards),m.updateGuards.size||(m.updateGuards=_.updateGuards))),d&&m&&(!_||!Cn(m,_)||!h)&&(m.enterCallbacks[f]||[]).forEach(y=>y(d))},{flush:"post"}),()=>{const d=s.value,m=c.value,f=m&&m.components[e.name],h=e.name;if(!f)return Ir(a.default,{Component:f,route:d});const _=m.props[e.name],x=_?_===!0?d.params:typeof _=="function"?_(d):_:null,A=ee(f,Ye({},x,t,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(m.instances[h]=null)},ref:p}));return Ir(a.default,{Component:A,route:d})||A}}});function Ir(e,t){if(!e)return null;const a=e(t);return a.length===1?a[0]:a}const oh=ah;function lh(e){const t=Ig(e.routes,e),a=e.parseQuery||Xg,o=e.stringifyQuery||$r,s=e.history,u=Vn(),c=Vn(),p=Vn(),d=fu(pi);let m=pi;ln&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Fo.bind(null,X=>""+X),h=Fo.bind(null,Kg),_=Fo.bind(null,Qa);function x(X,ce){let re,he;return Oc(X)?(re=t.getRecordMatcher(X),he=ce):he=X,t.addRoute(he,re)}function y(X){const ce=t.getRecordMatcher(X);ce&&t.removeRoute(ce)}function A(){return t.getRoutes().map(X=>X.record)}function T(X){return!!t.getRecordMatcher(X)}function I(X,ce){if(ce=Ye({},ce||d.value),typeof X=="string"){const Be=Vo(a,X,ce.path),L=t.resolve({path:Be.path},ce),R=s.createHref(Be.fullPath);return Ye(Be,L,{params:_(L.params),hash:Qa(Be.hash),redirectedFrom:void 0,href:R})}let re;if("path"in X)re=Ye({},X,{path:Vo(a,X.path,ce.path).path});else{const Be=Ye({},X.params);for(const L in Be)Be[L]==null&&delete Be[L];re=Ye({},X,{params:h(X.params)}),ce.params=h(ce.params)}const he=t.resolve(re,ce),Me=X.hash||"";he.params=f(_(he.params));const He=sg(o,Ye({},X,{hash:Ug(Me),path:he.path})),ke=s.createHref(He);return Ye({fullPath:He,hash:Me,query:o===$r?Jg(X.query):X.query||{}},he,{redirectedFrom:void 0,href:ke})}function g(X){return typeof X=="string"?Vo(a,X,d.value.path):Ye({},X)}function v(X,ce){if(m!==X)return xn(8,{from:ce,to:X})}function w(X){return V(X)}function k(X){return w(Ye(g(X),{replace:!0}))}function E(X){const ce=X.matched[X.matched.length-1];if(ce&&ce.redirect){const{redirect:re}=ce;let he=typeof re=="function"?re(X):re;return typeof he=="string"&&(he=he.includes("?")||he.includes("#")?he=g(he):{path:he},he.params={}),Ye({query:X.query,hash:X.hash,params:X.params},he)}}function V(X,ce){const re=m=I(X),he=d.value,Me=X.state,He=X.force,ke=X.replace===!0,Be=E(re);if(Be)return V(Ye(g(Be),{state:Me,force:He,replace:ke}),ce||re);const L=re;L.redirectedFrom=ce;let R;return!He&&rg(o,he,re)&&(R=xn(16,{to:L,from:he}),We(he,he,!0,!1)),(R?Promise.resolve(R):P(L,he)).catch(N=>Ti(N)?N:ue(N,L,he)).then(N=>{if(N){if(Ti(N,2))return V(Ye(g(N.to),{state:Me,force:He,replace:ke}),ce||L)}else N=J(L,he,!0,ke,Me);return G(L,he,N),N})}function H(X,ce){const re=v(X,ce);return re?Promise.reject(re):Promise.resolve()}function P(X,ce){let re;const[he,Me,He]=sh(X,ce);re=Mo(he.reverse(),"beforeRouteLeave",X,ce);for(const Be of he)Be.leaveGuards.forEach(L=>{re.push(vi(L,X,ce))});const ke=H.bind(null,X,ce);return re.push(ke),nn(re).then(()=>{re=[];for(const Be of u.list())re.push(vi(Be,X,ce));return re.push(ke),nn(re)}).then(()=>{re=Mo(Me,"beforeRouteUpdate",X,ce);for(const Be of Me)Be.updateGuards.forEach(L=>{re.push(vi(L,X,ce))});return re.push(ke),nn(re)}).then(()=>{re=[];for(const Be of X.matched)if(Be.beforeEnter&&!ce.matched.includes(Be))if(Array.isArray(Be.beforeEnter))for(const L of Be.beforeEnter)re.push(vi(L,X,ce));else re.push(vi(Be.beforeEnter,X,ce));return re.push(ke),nn(re)}).then(()=>(X.matched.forEach(Be=>Be.enterCallbacks={}),re=Mo(He,"beforeRouteEnter",X,ce),re.push(ke),nn(re))).then(()=>{re=[];for(const Be of c.list())re.push(vi(Be,X,ce));return re.push(ke),nn(re)}).catch(Be=>Ti(Be,8)?Be:Promise.reject(Be))}function G(X,ce,re){for(const he of p.list())he(X,ce,re)}function J(X,ce,re,he,Me){const He=v(X,ce);if(He)return He;const ke=ce===pi,Be=ln?history.state:{};re&&(he||ke?s.replace(X.fullPath,Ye({scroll:ke&&Be&&Be.scroll},Me)):s.push(X.fullPath,Me)),d.value=X,We(X,ce,re,ke),Le()}let Y;function pe(){Y=s.listen((X,ce,re)=>{const he=I(X),Me=E(he);if(Me){V(Ye(Me,{replace:!0}),he).catch(Qn);return}m=he;const He=d.value;ln&&hg(wr(He.fullPath,re.delta),xo()),P(he,He).catch(ke=>Ti(ke,12)?ke:Ti(ke,2)?(V(ke.to,he).then(Be=>{Ti(Be,20)&&!re.delta&&re.type===ca.pop&&s.go(-1,!1)}).catch(Qn),Promise.reject()):(re.delta&&s.go(-re.delta,!1),ue(ke,he,He))).then(ke=>{ke=ke||J(he,He,!1),ke&&(re.delta?s.go(-re.delta,!1):re.type===ca.pop&&Ti(ke,20)&&s.go(-1,!1)),G(he,He,ke)}).catch(Qn)})}let Ae=Vn(),U=Vn(),K;function ue(X,ce,re){Le(X);const he=U.list();return he.length?he.forEach(Me=>Me(X,ce,re)):console.error(X),Promise.reject(X)}function ne(){return K&&d.value!==pi?Promise.resolve():new Promise((X,ce)=>{Ae.add([X,ce])})}function Le(X){K||(K=!0,pe(),Ae.list().forEach(([ce,re])=>X?re(X):ce()),Ae.reset())}function We(X,ce,re,he){const{scrollBehavior:Me}=e;if(!ln||!Me)return Promise.resolve();const He=!re&&_g(wr(X.fullPath,0))||(he||!re)&&history.state&&history.state.scroll||null;return $n().then(()=>Me(X,ce,He)).then(ke=>ke&&gg(ke)).catch(ke=>ue(ke,X,ce))}const at=X=>s.go(X);let Ue;const Qt=new Set;return{currentRoute:d,addRoute:x,removeRoute:y,hasRoute:T,getRoutes:A,resolve:I,options:e,push:w,replace:k,go:at,back:()=>at(-1),forward:()=>at(1),beforeEach:u.add,beforeResolve:c.add,afterEach:p.add,onError:U.add,isReady:ne,install(X){const ce=this;X.component("RouterLink",fs),X.component("RouterView",oh),X.config.globalProperties.$router=ce,Object.defineProperty(X.config.globalProperties,"$route",{enumerable:!0,get:()=>r(d)}),ln&&!Ue&&d.value===pi&&(Ue=!0,w(s.location).catch(Me=>{}));const re={};for(const Me in pi)re[Me]=M(()=>d.value[Me]);X.provide(Co,ce),X.provide(ps,li(re)),X.provide(vl,d);const he=X.unmount;Qt.add(X),X.unmount=function(){Qt.delete(X),Qt.size<1&&(m=pi,Y&&Y(),d.value=pi,Ue=!1,K=!1),he()}}}}function nn(e){return e.reduce((t,a)=>t.then(()=>a()),Promise.resolve())}function sh(e,t){const a=[],o=[],s=[],u=Math.max(t.matched.length,e.matched.length);for(let c=0;c<u;c++){const p=t.matched[c];p&&(e.matched.find(m=>Cn(m,p))?o.push(p):a.push(p));const d=e.matched[c];d&&(t.matched.find(m=>Cn(m,d))||s.push(d))}return[a,o,s]}function Wc(){return Ve(Co)}function Kc(){return Ve(ps)}const rh={__name:"Navbar",props:["onClick"],setup(e){const t=j(),a=Wc();function o(s){return s.charAt(0).toUpperCase()+s.slice(1)}return Zl(()=>{const c=a.currentRoute.value.path.match(/\/([^/]+)$/);c&&(t.value=o(c[1]))}),(s,u)=>{const c=$("SuiIcon"),p=$("SuiMenuItem"),d=$("SuiMenu");return S(),C(d,{id:"navbar",fixed:"",icon:"",inverted:"",size:"big"},{default:n(()=>[i(p,{onClick:e.onClick},{default:n(()=>[i(c,{name:"hamburger"})]),_:1},8,["onClick"]),i(p,null,{default:n(()=>[l($e(t.value),1)]),_:1})]),_:1})}}},uh=Ne(rh,[["__scopeId","data-v-338afb35"]]),ch=F({name:"Sidebar",setup(){const e=Kc();return{isActive:c=>e.path===c,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),dh=B("strong",null," Fomantic UI Vue ",-1),ph=B("b",null,"Getting Started",-1);function mh(e,t,a,o,s,u){const c=$("sui-menu-item"),p=$("sui-menu-header"),d=$("sui-menu-menu"),m=$("sui-menu");return S(),C(m,{fluid:"",inverted:"",vertical:""},{default:n(()=>[i(c,{as:"div"},{default:n(()=>[dh]),_:1}),i(c,{as:"router-link",to:"/"},{default:n(()=>[ph]),_:1}),i(c,{as:"div"},{default:n(()=>[i(p,{content:"Elements"}),i(d,null,{default:n(()=>[(S(!0),be(we,null,Qe(e.elements,f=>(S(),C(c,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),i(c,{as:"div"},{default:n(()=>[i(p,{content:"Collections"}),i(d,null,{default:n(()=>[(S(!0),be(we,null,Qe(e.collections,f=>(S(),C(c,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),i(c,{as:"div"},{default:n(()=>[i(p,{content:"Views"}),i(d,null,{default:n(()=>[(S(!0),be(we,null,Qe(e.views,f=>(S(),C(c,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),i(c,{as:"div"},{default:n(()=>[i(p,{content:"Modules"}),i(d,null,{default:n(()=>[(S(!0),be(we,null,Qe(e.modules,f=>(S(),C(c,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const fh=Ne(ch,[["render",mh]]),gh={class:"sidemenu"},hh={style:{flex:"1","overflow-y":"scroll"}},_h={__name:"Sidebar",setup(e){return(t,a)=>(S(),be("div",gh,[B("div",hh,[i(fh)])]))}},vh=Ne(_h,[["__scopeId","data-v-379ef704"]]),bh=F({name:"Sidebar",setup(){const e=Kc();return{isActive:c=>e.path===c,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),Sh=B("strong",null," Fomantic UI Vue ",-1),yh=B("b",null,"Getting Started",-1);function wh(e,t,a,o,s,u){const c=$("sui-menu-item"),p=$("sui-menu-header"),d=$("sui-menu-menu"),m=$("sui-sidebar");return S(),C(m,{dimmed:"",inverted:"",style:{width:"250px"}},{default:n(()=>[i(c,{as:"div"},{default:n(()=>[Sh]),_:1}),i(c,{as:"router-link",to:"/"},{default:n(()=>[yh]),_:1}),i(c,{as:"div"},{default:n(()=>[i(p,{content:"Elements"}),i(d,null,{default:n(()=>[(S(!0),be(we,null,Qe(e.elements,f=>(S(),C(c,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),i(c,{as:"div"},{default:n(()=>[i(p,{content:"Collections"}),i(d,null,{default:n(()=>[(S(!0),be(we,null,Qe(e.collections,f=>(S(),C(c,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),i(c,{as:"div"},{default:n(()=>[i(p,{content:"Views"}),i(d,null,{default:n(()=>[(S(!0),be(we,null,Qe(e.views,f=>(S(),C(c,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),i(c,{as:"div"},{default:n(()=>[i(p,{content:"Modules"}),i(d,null,{default:n(()=>[(S(!0),be(we,null,Qe(e.modules,f=>(S(),C(c,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const Ch=Ne(bh,[["render",wh]]),xh={class:"pusher",style:{height:"100vh"}},Ah={class:"article"},kh={__name:"Home",setup(e){const t=j(!1),a=()=>t.value=!t.value;return Zg(()=>{t.value=!1}),(o,s)=>{const u=$("router-view"),c=$("SuiSegment");return S(),C(c,{class:"pushable",style:{border:"none"}},{default:n(()=>[i(Ch,{visible:t.value},null,8,["visible"]),B("div",xh,[i(vh),i(uh,{"on-click":a}),B("div",Ah,[i(u)])])]),_:1})}}},Bh=Ne(kh,[["__scopeId","data-v-0bfd4ee9"]]),$h={__name:"DocSections",props:["docs"],setup(e){const t=e,a=M(()=>[...new Set(t.docs.map(o=>o.category))]);return(o,s)=>{const u=$("SuiHeader");return S(!0),be(we,null,Qe(a.value,(c,p)=>(S(),be(we,{key:c},[i(u,{as:"h2",dividing:"",style:Bn({marginTop:p!==0?"5rem":"0",paddingTop:"2rem"})},{default:n(()=>[l($e(c),1)]),_:2},1032,["style"]),(S(!0),be(we,null,Qe(e.docs.filter(d=>d.category===c),(d,m)=>(S(),be(we,{key:d.label+"_"+m},[Array.isArray(d.component)?(S(!0),be(we,{key:0},Qe(d.component,(f,h)=>(S(),C(tl(f),{key:h,id:h===0?d.id:void 0,style:{paddingTop:"3rem"}},null,8,["id"]))),128)):(S(),C(tl(d.component),{key:1,id:d.id,style:{paddingTop:"3rem"}},null,8,["id"]))],64))),128))],64))),128)}}},Th=e=>(Cu("data-v-e2ae2e49"),e=e(),xu(),e),Lh={class:"item"},Dh=Th(()=>B("i",{class:"dropdown icon"},null,-1)),Ih={class:"content menu active"},Eh={__name:"DocTableLink",props:["header","items"],setup(e){const{id:t}=Nu(),a=c=>{c.preventDefault();const p=document.getElementById(t);p.open?s(p):(p.open=!0,o(p))},o=c=>{c.querySelector(".title").classList.add("active");const d=c.querySelector(".content"),m=d.offsetHeight;d.style.maxHeight=0,requestAnimationFrame(()=>{d.style.maxHeight=`${m}px`});const f=new AbortController;d.addEventListener("transitionend",()=>{d.removeAttribute("style"),f.abort()},{signal:f.signal})},s=c=>{const p=c.querySelector(".title"),d=c.querySelector(".content"),m=d.offsetHeight;d.style.maxHeight=`${m}px`,requestAnimationFrame(()=>{d.style.maxHeight=0,p.classList.remove("active")});const f=new AbortController;d.addEventListener("transitionend",()=>{d.removeAttribute("style"),c.open=!1,f.abort()},{signal:f.signal})},u=(c,p)=>{c.preventDefault(),document.getElementById(p.replace("_link","")).scrollIntoView({behavior:"smooth",block:"start"})};return(c,p)=>(S(),be("details",Lh,[B("summary",{class:"title",onClick:a},[Dh,B("b",null,$e(e.header),1)]),B("div",Ih,[(S(!0),be(we,null,Qe(e.items,d=>(S(),C(r(fs),{to:`#${d.id}`,class:"item",onClick:m=>u(m,d.id)},{default:n(()=>[l($e(d.label),1)]),_:2},1032,["to","onClick"]))),256))])]))}},Rh=Ne(Eh,[["__scopeId","data-v-e2ae2e49"]]),zh={class:"sticky"},Ph={class:"ui vertical following fluid accordion text large menu"},Fh={__name:"DocTableContents",props:["title","links"],setup(e){const t=e,a=[...new Set(t.links.map(o=>o.category))];return(o,s)=>{const u=$("SuiHeader"),c=$("SuiRail");return S(),C(c,{id:"table-contents",position:"right",dividing:""},{default:n(()=>[B("div",zh,[i(u,{as:"h3"},{default:n(()=>[l($e(e.title),1)]),_:1}),B("div",Ph,[(S(),be(we,null,Qe(a,p=>i(Rh,{id:`${p}_link`,header:p,items:e.links.filter(d=>d.category===p)},null,8,["id","header","items"])),64))])])]),_:1})}}},Vh=Ne(Fh,[["__scopeId","data-v-bd90305d"]]),Mh={class:"intro"},Hh={__name:"DocComponent",props:["title","description","componentDocs"],setup(e){const t=j();return(a,o)=>{const s=$("SuiHeaderSubheader"),u=$("SuiHeader"),c=$("SuiDivider"),p=$("SuiIcon"),d=$("SuiMenuItem"),m=$("SuiPopup"),f=$("SuiMenu"),h=$("SuiContainer"),_=$("SuiSegment");return S(),be("div",null,[i(_,{id:"masthead",vertical:"",style:{"border-bottom":"1px solid #DDDDDD"}},{default:n(()=>[i(h,{class:"main"},{default:n(()=>[B("div",Mh,[i(u,{as:"h1"},{default:n(()=>[l($e(e.title)+" ",1),i(s,null,{default:n(()=>[l($e(e.description),1)]),_:1})]),_:1}),i(c,{hidden:""}),i(f,{icon:"",floated:"right"},{default:n(()=>[i(d,{as:"a",icon:"",ref_key:"el",ref:t,href:"https://github.com/nightswinger/vue-fomantic-ui"},{default:n(()=>[i(p,{name:"alternate github"})]),_:1},512),i(m,{trigger:t.value,position:"top right"},{default:n(()=>[l(" View Project on GitHub ")]),_:1},8,["trigger"])]),_:1})])]),_:1})]),_:1}),i(h,{class:"main"},{default:n(()=>[i(_,{basic:"",fitted:""},{default:n(()=>[e.componentDocs?(S(),be(we,{key:0},[i($h,{docs:e.componentDocs},null,8,["docs"]),i(Vh,{title:e.title,links:e.componentDocs},null,8,["title","links"])],64)):ss("",!0),Ni(a.$slots,"default",{},void 0,!0)]),_:3})]),_:3})])}}},lt=Ne(Hh,[["__scopeId","data-v-d22eb33f"]]);var Er=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Oh(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var a=function o(){return this instanceof o?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};a.prototype=t.prototype}else a={};return Object.defineProperty(a,"__esModule",{value:!0}),Object.keys(e).forEach(function(o){var s=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(a,o,s.get?s:{enumerable:!0,get:function(){return e[o]}})}),a}var Jc={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var a=function(o){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,u=0,c={},p={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function g(v){return v instanceof d?new d(v.type,g(v.content),v.alias):Array.isArray(v)?v.map(g):v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(g){return Object.prototype.toString.call(g).slice(8,-1)},objId:function(g){return g.__id||Object.defineProperty(g,"__id",{value:++u}),g.__id},clone:function g(v,w){w=w||{};var k,E;switch(p.util.type(v)){case"Object":if(E=p.util.objId(v),w[E])return w[E];k={},w[E]=k;for(var V in v)v.hasOwnProperty(V)&&(k[V]=g(v[V],w));return k;case"Array":return E=p.util.objId(v),w[E]?w[E]:(k=[],w[E]=k,v.forEach(function(H,P){k[P]=g(H,w)}),k);default:return v}},getLanguage:function(g){for(;g;){var v=s.exec(g.className);if(v)return v[1].toLowerCase();g=g.parentElement}return"none"},setLanguage:function(g,v){g.className=g.className.replace(RegExp(s,"gi"),""),g.classList.add("language-"+v)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(k){var g=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(k.stack)||[])[1];if(g){var v=document.getElementsByTagName("script");for(var w in v)if(v[w].src==g)return v[w]}return null}},isActive:function(g,v,w){for(var k="no-"+v;g;){var E=g.classList;if(E.contains(v))return!0;if(E.contains(k))return!1;g=g.parentElement}return!!w}},languages:{plain:c,plaintext:c,text:c,txt:c,extend:function(g,v){var w=p.util.clone(p.languages[g]);for(var k in v)w[k]=v[k];return w},insertBefore:function(g,v,w,k){k=k||p.languages;var E=k[g],V={};for(var H in E)if(E.hasOwnProperty(H)){if(H==v)for(var P in w)w.hasOwnProperty(P)&&(V[P]=w[P]);w.hasOwnProperty(H)||(V[H]=E[H])}var G=k[g];return k[g]=V,p.languages.DFS(p.languages,function(J,Y){Y===G&&J!=g&&(this[J]=V)}),V},DFS:function g(v,w,k,E){E=E||{};var V=p.util.objId;for(var H in v)if(v.hasOwnProperty(H)){w.call(v,H,v[H],k||H);var P=v[H],G=p.util.type(P);G==="Object"&&!E[V(P)]?(E[V(P)]=!0,g(P,w,null,E)):G==="Array"&&!E[V(P)]&&(E[V(P)]=!0,g(P,w,H,E))}}},plugins:{},highlightAll:function(g,v){p.highlightAllUnder(document,g,v)},highlightAllUnder:function(g,v,w){var k={callback:w,container:g,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};p.hooks.run("before-highlightall",k),k.elements=Array.prototype.slice.apply(k.container.querySelectorAll(k.selector)),p.hooks.run("before-all-elements-highlight",k);for(var E=0,V;V=k.elements[E++];)p.highlightElement(V,v===!0,k.callback)},highlightElement:function(g,v,w){var k=p.util.getLanguage(g),E=p.languages[k];p.util.setLanguage(g,k);var V=g.parentElement;V&&V.nodeName.toLowerCase()==="pre"&&p.util.setLanguage(V,k);var H=g.textContent,P={element:g,language:k,grammar:E,code:H};function G(Y){P.highlightedCode=Y,p.hooks.run("before-insert",P),P.element.innerHTML=P.highlightedCode,p.hooks.run("after-highlight",P),p.hooks.run("complete",P),w&&w.call(P.element)}if(p.hooks.run("before-sanity-check",P),V=P.element.parentElement,V&&V.nodeName.toLowerCase()==="pre"&&!V.hasAttribute("tabindex")&&V.setAttribute("tabindex","0"),!P.code){p.hooks.run("complete",P),w&&w.call(P.element);return}if(p.hooks.run("before-highlight",P),!P.grammar){G(p.util.encode(P.code));return}if(v&&o.Worker){var J=new Worker(p.filename);J.onmessage=function(Y){G(Y.data)},J.postMessage(JSON.stringify({language:P.language,code:P.code,immediateClose:!0}))}else G(p.highlight(P.code,P.grammar,P.language))},highlight:function(g,v,w){var k={code:g,grammar:v,language:w};if(p.hooks.run("before-tokenize",k),!k.grammar)throw new Error('The language "'+k.language+'" has no grammar.');return k.tokens=p.tokenize(k.code,k.grammar),p.hooks.run("after-tokenize",k),d.stringify(p.util.encode(k.tokens),k.language)},tokenize:function(g,v){var w=v.rest;if(w){for(var k in w)v[k]=w[k];delete v.rest}var E=new h;return _(E,E.head,g),f(g,E,v,E.head,0),y(E)},hooks:{all:{},add:function(g,v){var w=p.hooks.all;w[g]=w[g]||[],w[g].push(v)},run:function(g,v){var w=p.hooks.all[g];if(!(!w||!w.length))for(var k=0,E;E=w[k++];)E(v)}},Token:d};o.Prism=p;function d(g,v,w,k){this.type=g,this.content=v,this.alias=w,this.length=(k||"").length|0}d.stringify=function g(v,w){if(typeof v=="string")return v;if(Array.isArray(v)){var k="";return v.forEach(function(G){k+=g(G,w)}),k}var E={type:v.type,content:g(v.content,w),tag:"span",classes:["token",v.type],attributes:{},language:w},V=v.alias;V&&(Array.isArray(V)?Array.prototype.push.apply(E.classes,V):E.classes.push(V)),p.hooks.run("wrap",E);var H="";for(var P in E.attributes)H+=" "+P+'="'+(E.attributes[P]||"").replace(/"/g,"&quot;")+'"';return"<"+E.tag+' class="'+E.classes.join(" ")+'"'+H+">"+E.content+"</"+E.tag+">"};function m(g,v,w,k){g.lastIndex=v;var E=g.exec(w);if(E&&k&&E[1]){var V=E[1].length;E.index+=V,E[0]=E[0].slice(V)}return E}function f(g,v,w,k,E,V){for(var H in w)if(!(!w.hasOwnProperty(H)||!w[H])){var P=w[H];P=Array.isArray(P)?P:[P];for(var G=0;G<P.length;++G){if(V&&V.cause==H+","+G)return;var J=P[G],Y=J.inside,pe=!!J.lookbehind,Ae=!!J.greedy,U=J.alias;if(Ae&&!J.pattern.global){var K=J.pattern.toString().match(/[imsuy]*$/)[0];J.pattern=RegExp(J.pattern.source,K+"g")}for(var ue=J.pattern||J,ne=k.next,Le=E;ne!==v.tail&&!(V&&Le>=V.reach);Le+=ne.value.length,ne=ne.next){var We=ne.value;if(v.length>g.length)return;if(!(We instanceof d)){var at=1,Ue;if(Ae){if(Ue=m(ue,Le,g,pe),!Ue||Ue.index>=g.length)break;var ce=Ue.index,Qt=Ue.index+Ue[0].length,Rt=Le;for(Rt+=ne.value.length;ce>=Rt;)ne=ne.next,Rt+=ne.value.length;if(Rt-=ne.value.length,Le=Rt,ne.value instanceof d)continue;for(var X=ne;X!==v.tail&&(Rt<Qt||typeof X.value=="string");X=X.next)at++,Rt+=X.value.length;at--,We=g.slice(Le,Rt),Ue.index-=Le}else if(Ue=m(ue,0,We,pe),!Ue)continue;var ce=Ue.index,re=Ue[0],he=We.slice(0,ce),Me=We.slice(ce+re.length),He=Le+We.length;V&&He>V.reach&&(V.reach=He);var ke=ne.prev;he&&(ke=_(v,ke,he),Le+=he.length),x(v,ke,at);var Be=new d(H,Y?p.tokenize(re,Y):re,U,re);if(ne=_(v,ke,Be),Me&&_(v,ne,Me),at>1){var L={cause:H+","+G,reach:He};f(g,v,w,ne.prev,Le,L),V&&L.reach>V.reach&&(V.reach=L.reach)}}}}}}function h(){var g={value:null,prev:null,next:null},v={value:null,prev:g,next:null};g.next=v,this.head=g,this.tail=v,this.length=0}function _(g,v,w){var k=v.next,E={value:w,prev:v,next:k};return v.next=E,k.prev=E,g.length++,E}function x(g,v,w){for(var k=v.next,E=0;E<w&&k!==g.tail;E++)k=k.next;v.next=k,k.prev=v,g.length-=E}function y(g){for(var v=[],w=g.head.next;w!==g.tail;)v.push(w.value),w=w.next;return v}if(!o.document)return o.addEventListener&&(p.disableWorkerMessageHandler||o.addEventListener("message",function(g){var v=JSON.parse(g.data),w=v.language,k=v.code,E=v.immediateClose;o.postMessage(p.highlight(k,p.languages[w],w)),E&&o.close()},!1)),p;var A=p.util.currentScript();A&&(p.filename=A.src,A.hasAttribute("data-manual")&&(p.manual=!0));function T(){p.manual||p.highlightAll()}if(!p.manual){var I=document.readyState;I==="loading"||I==="interactive"&&A&&A.defer?document.addEventListener("DOMContentLoaded",T):window.requestAnimationFrame?window.requestAnimationFrame(T):window.setTimeout(T,16)}return p}(t);e.exports&&(e.exports=a),typeof Er<"u"&&(Er.Prism=a),a.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(s,u){var c={};c["language-"+u]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[u]},c.cdata=/^<!\[CDATA\[|\]\]>$/i;var p={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:c}};p["language-"+u]={pattern:/[\s\S]+/,inside:a.languages[u]};var d={};d[s]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return s}),"i"),lookbehind:!0,greedy:!0,inside:p},a.languages.insertBefore("markup","cdata",d)}}),Object.defineProperty(a.languages.markup.tag,"addAttribute",{value:function(o,s){a.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:a.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,function(o){var s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+s.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var u=o.languages.markup;u&&(u.tag.addInlined("style","css"),u.tag.addAttribute("style","css"))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),a.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),a.languages.markup&&(a.languages.markup.tag.addInlined("script","javascript"),a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),a.languages.js=a.languages.javascript,function(){if(typeof a>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading…",s=function(A,T){return"✖ Error "+A+" while fetching file: "+T},u="✖ Error: File does not exist or is empty",c={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},p="data-src-status",d="loading",m="loaded",f="failed",h="pre[data-src]:not(["+p+'="'+m+'"]):not(['+p+'="'+d+'"])';function _(A,T,I){var g=new XMLHttpRequest;g.open("GET",A,!0),g.onreadystatechange=function(){g.readyState==4&&(g.status<400&&g.responseText?T(g.responseText):g.status>=400?I(s(g.status,g.statusText)):I(u))},g.send(null)}function x(A){var T=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(A||"");if(T){var I=Number(T[1]),g=T[2],v=T[3];return g?v?[I,Number(v)]:[I,void 0]:[I,I]}}a.hooks.add("before-highlightall",function(A){A.selector+=", "+h}),a.hooks.add("before-sanity-check",function(A){var T=A.element;if(T.matches(h)){A.code="",T.setAttribute(p,d);var I=T.appendChild(document.createElement("CODE"));I.textContent=o;var g=T.getAttribute("data-src"),v=A.language;if(v==="none"){var w=(/\.(\w+)$/.exec(g)||[,"none"])[1];v=c[w]||w}a.util.setLanguage(I,v),a.util.setLanguage(T,v);var k=a.plugins.autoloader;k&&k.loadLanguages(v),_(g,function(E){T.setAttribute(p,m);var V=x(T.getAttribute("data-range"));if(V){var H=E.split(/\r\n?|\n/g),P=V[0],G=V[1]==null?H.length:V[1];P<0&&(P+=H.length),P=Math.max(0,Math.min(P-1,H.length)),G<0&&(G+=H.length),G=Math.max(0,Math.min(G,H.length)),E=H.slice(P,G).join(`
`),T.hasAttribute("data-start")||T.setAttribute("data-start",String(P+1))}I.textContent=E,a.highlightElement(I)},function(E){T.setAttribute(p,f),I.textContent=E})}}),a.plugins.fileHighlight={highlight:function(T){for(var I=(T||document).querySelectorAll(h),g=0,v;v=I[g++];)a.highlightElement(v)}};var y=!1;a.fileHighlight=function(){y||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),y=!0),a.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Jc);var Qc=Jc.exports;const qh=Xc(Qc),Va={mounted(e,t){var s;const a=t.modifiers,o=t.value;a.script||o==="script"?e.className="language-javascript":e.className="language-markup",qh.highlightElement(e.children[0]),(s=e.children[0].parentElement)==null||s.setAttribute("tabindex","-1")}},Nh={style:{paddingTop:"3rem"}},Gh=B("p",null," Fomantic-UI Vue provides UI components based on Fomantic-UI. ",-1),jh=B("code",null,`$ npm install vue-fomantic-ui
$ npm install fomantic-ui-css
# or
$ yarn add vue-fomantic-ui
$ yarn add fomantic-ui-css`,-1),Uh=[jh],Yh={style:{paddingTop:"3rem",marginBottom:"3rem"}},Wh=B("p",null," You can import all components as Vue plugin. ",-1),Kh=B("code",null,`import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

const app = createApp(App)

app.use(FomanticUI)`,-1),Xh=[Kh],Jh=B("br",null,null,-1),Qh=B("p",null," Or pick a component indivisually, add it to your components option. ",-1),Zh=B("code",null,`import { SuiButton } from 'vue-fomantic-ui'

export default {
  components: { SuiButton },
  // ...
}`,-1),e_=[Zh],t_={__name:"GettingStarted",setup(e){return(t,a)=>{const o=$("SuiHeader");return S(),C(lt,{title:"Getting Started",description:"Getting up and running with Fomantic-UI Vue"},{default:n(()=>[B("section",Nh,[i(o,{as:"h2"},{default:n(()=>[l("Install")]),_:1}),Gh,i(o,{as:"h3"},{default:n(()=>[l("via Package Manager")]),_:1}),Si((S(),be("pre",null,Uh)),[[r(Va)]])]),B("section",Yh,[i(o,{as:"h2"},{default:n(()=>[l("Usage")]),_:1}),Wh,Si((S(),be("pre",null,Xh)),[[r(Va),void 0,void 0,{script:!0}]]),Jh,Qh,Si((S(),be("pre",null,e_)),[[r(Va),void 0,void 0,{script:!0}]])])]),_:1})}}};function Zc(e){var t,a,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=Zc(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function te(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=Zc(e))&&(o&&(o+=" "),o+=t);return o}const b=(e,t)=>e?t:"",ze=(e,t)=>typeof e=="string"?`${e} ${t}`:"",Ie=(e,t)=>e===!0?t:e==="below"?`${t} ${e}`:typeof e=="string"?`${e} ${t}`:"",Ln=e=>e==="justified"?"justified":ze(e,"aligned"),ri=(e,t)=>typeof e=="number"&&t?`${yl(e)} ${t}`:typeof e=="number"&&!t?yl(e):typeof e=="string"&&e==="equal"?`${e} width`:"",Mn=(e,t)=>e?`${yl(e)} wide ${t}`:"",yl=e=>["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"][e-1],i_=F({props:{fluid:Boolean,inverted:Boolean,multiple:Boolean,styled:Boolean},setup(e){const t=e.multiple?j([]):j(-1),a=s=>e.multiple?t.value.includes(s):t.value===s,o=s=>{const u=a(s);e.multiple?u?t.value=t.value.filter(c=>c!==s):t.value.push(s):t.value=u?-1:s};return ut("isTabActive",a),ut("updateActiveIndex",o),{computedClass:M(()=>te("ui",b(e.fluid,"fluid"),b(e.inverted,"inverted"),b(e.styled,"styled"),"accordion"))}},render(){var e,t;const a=o=>(o.forEach((s,u)=>{s.props.index=u}),o);return i("div",{class:this.computedClass},[a((t=(e=this.$slots).default)==null?void 0:t.call(e))])}}),n_=F({render(){var e,t;return ee("div",{class:"accordion"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),ed=F({props:{active:Boolean},setup(e){return{computedClass:M(()=>te(b(e.active,"active"),"content"))}},render(){var e,t;return ee("div",{class:this.computedClass},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),W=F({props:{as:String,bordered:Boolean,circular:Boolean,color:String,colored:Boolean,corner:[Boolean,String],disabled:Boolean,fitted:Boolean,flipped:String,inverted:Boolean,link:Boolean,loading:Boolean,name:String,primary:Boolean,rotated:String,secondary:Boolean,size:String},setup(e){return{classes:M(()=>te(e.color,e.name,e.size,b(e.primary,"primary"),b(e.secondary,"secondary"),b(e.bordered,"bordered"),b(e.circular,"circular"),b(e.colored,"colored"),b(e.disabled,"disabled"),b(e.fitted,"fitted"),b(e.inverted,"inverted"),b(e.link,"link"),b(e.loading,"loading"),ze(e.flipped,"flipped"),ze(e.rotated,"rotated"),Ie(e.corner,"corner"),"icon"))}},render(){let e=this.$props.as||"i";return ee(e,{"aria-hidden":!0,class:this.classes})}}),a_=F({props:{index:Number,title:String},setup(e){const t=Ve("isTabActive"),a=Ve("updateActiveIndex"),o=M(()=>te(b(t(e.index),"active"),"title"));return{isTabActive:t,updateActiveIndex:a,titleClass:o}},render(){return i(we,null,[i("div",{class:this.titleClass,onClick:()=>this.updateActiveIndex(this.index)},[i(W,{name:"dropdown"},null),this.title]),i(ed,{active:this.isTabActive(this.index)},{default:()=>{var e,t;return[(t=(e=this.$slots).default)==null?void 0:t.call(e)]}})])}}),o_=F({props:{active:Boolean},setup(e){return{computedClass:M(()=>te(b(e.active,"active"),"title"))}},render(){var e,t;return ee("div",{class:this.computedClass},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),l_={install(e){e.component("SuiAccordion",i_),e.component("SuiAccordionAccordion",n_),e.component("SuiAccordionContent",ed),e.component("SuiAccordionTab",a_),e.component("SuiAccordionTitle",o_)}},s_=F({props:{centered:Boolean,test:String,unit:String},setup(e){return{computedClass:M(()=>te("ui",e.unit,b(e.centered,"centered"),b(!!e.test,"test"),"ad"))}},render(){var e,t,a,o;return this.$props.test?ee("div",{class:this.computedClass,"data-text":this.$props.test},(t=(e=this.$slots).default)==null?void 0:t.call(e)):ee("div",{class:this.computedClass},(o=(a=this.$slots).default)==null?void 0:o.call(a))}}),r_={install(e){e.component("SuiAdvertisement",s_)}},Tt=F({props:{icon:String},setup(e){return{computedClass:M(()=>te(e.icon,"icon","divider"))}},render(){var e,t;return this.icon?i("i",{"aria-hidden":"true",class:this.computedClass},null):i("div",{class:"divider"},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),et=F({props:{active:Boolean,href:String,link:Boolean,to:String},setup(e){const t=M(()=>te(b(e.active,"active"),"section")),a=e.link||!!e.href;return{computedClass:t,isLink:a}},render(){let e="div";this.isLink?e="a":this.to&&(e=$("router-link"));const t={href:this.href,to:this.to};return i(e,Zi({class:this.computedClass},t),{default:()=>{var a,o;return[(o=(a=this.$slots).default)==null?void 0:o.call(a)]}})}}),oi=F({props:{icon:String,inverted:Boolean,sections:{type:Array,default:()=>[]},size:String},setup(e){return{computedClass:M(()=>te("ui",e.size,b(e.inverted,"inverted"),"breadcrumb"))}},render(){var e,t;const a=()=>{var o;return(o=this.sections)==null?void 0:o.map((s,u)=>{const c={active:s.active,href:s.href,link:s.link,to:s.to};return i(we,null,[i(et,c,{default:()=>[s.content]}),this.sections.length!==u+1&&i(Tt,{icon:this.icon},{default:()=>[l(" / ")]})])})};return i("div",{class:this.computedClass},[((t=(e=this.$slots).default)==null?void 0:t.call(e))||a()])}}),u_={install(e){e.component("SuiBreadcrumb",oi),e.component("SuiBreadcrumbDivider",Tt),e.component("SuiBreadcrumbSection",et)}},Ri=F({props:{as:String,size:String},setup(e){return{computedClass:M(()=>te(e.size,"icons"))}},render(){var e,t;let a=this.$props.as||"i";return ee(a,{class:this.computedClass},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),c_={install(e){e.component("SuiIcon",W),e.component("SuiIconGroup",Ri)}},d_=()=>({icon:[Boolean,String]}),p_=e=>({iconClasses:M(()=>typeof e.icon=="boolean"&&e.icon||e.labeled&&e.icon?"icon":te({icon:e.icon&&!e.content}))}),m_=["right","left"],f_=()=>({labeled:[Boolean,String]}),g_=e=>({labeledClasses:M(()=>typeof e.labeled=="boolean"&&e.labeled?"labeled":m_.includes(e.labeled)?`${e.labeled} labeled`:"")}),h_=["double","usual double","elastic"],td=()=>({loading:{type:[Boolean,String],validator:e=>h_.includes(e)||typeof e=="boolean"}}),id=e=>({loadingClasses:M(()=>te(e.loading,{loading:e.loading}))}),z=F({props:{active:Boolean,animated:[Boolean,String],as:{type:String,default:"button"},attached:String,basic:Boolean,circular:Boolean,color:String,compact:Boolean,content:[String,Array],disabled:Boolean,facebook:Boolean,floated:String,fluid:Boolean,google:Boolean,linkedin:Boolean,instagram:Boolean,inverted:Boolean,negative:Boolean,positive:Boolean,primary:Boolean,secondary:Boolean,size:String,telegram:Boolean,tertiary:Boolean,toggle:Boolean,twitter:Boolean,vk:Boolean,whatsapp:Boolean,youtube:Boolean,...d_(),...f_(),...td()},setup(e){const{iconClasses:t}=p_(e),{labeledClasses:a}=g_(e),{loadingClasses:o}=id(e);return{classes:M(()=>te("ui",e.color,e.size,b(e.active,"active"),b(e.basic,"basic"),b(e.circular,"circular"),b(e.compact,"compact"),b(e.disabled,"disabled"),b(e.facebook,"facebook"),b(e.fluid,"fluid"),b(e.google,"google"),b(e.linkedin,"linkedin"),b(e.instagram,"instagram"),b(e.inverted,"inverted"),b(e.negative,"negative"),b(e.positive,"positive"),b(e.primary,"primary"),b(e.secondary,"secondary"),b(e.telegram,"telegram"),b(e.tertiary,"tertiary"),b(e.toggle,"toggle"),b(e.twitter,"twitter"),b(e.vk,"vk"),b(e.whatsapp,"whatsapp"),b(e.youtube,"youtube"),ze(e.attached,"attached"),ze(e.floated,"floated"),Ie(e.animated,"animated"),t.value,a.value,o.value,"button"))}},render(){var e,t;const a=this.attached?"div":this.as;return ee(a,{class:this.classes,role:"button"},[typeof this.icon=="string"&&ee(W,{name:this.icon}),this.content||((t=(e=this.$slots).default)==null?void 0:t.call(e))])}}),Di=F({props:{hidden:Boolean,visible:Boolean},setup(e){return{computedClass:M(()=>te(b(e.hidden,"hidden"),b(e.visible,"visible"),"content"))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),ft=F({props:{attached:String,basic:Boolean,color:String,icon:Boolean,labeled:Boolean,size:String,vertical:Boolean,widths:Number},setup(e){return{computedClass:M(()=>te("ui",e.color,e.size,b(e.basic,"basic"),b(e.icon,"icon"),b(e.labeled,"labeled"),b(e.vertical,"vertical"),ze(e.attached,"attached"),ri(e.widths,""),"buttons"))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),__={install(e){e.component("SuiButton",z),e.component("SuiButtonContent",Di),e.component("SuiButtonGroup",ft)}},v_=(e,t,a)=>{e.clickOutside=o=>{e===o.target||e.contains(o.target)||t.value(o,e)},document.body.addEventListener("click",e.clickOutside)},b_=(e,t,a)=>{document.body.removeEventListener("click",e.clickOutside)},gs={mounted:v_,unmounted:b_};function S_(e,t={}){const a=j(e.value?"open":"closed"),o=()=>a.value=e.value?"open":"closed";pt(e,p=>{a.value=p?"opening":"closing"});const s=p=>{p.addEventListener("animationend",o,!0)},u=p=>{p&&p.removeEventListener("animationend",o)},c=M((p="scale")=>{switch(a.value){case"opening":return`animating ${p} in`;case"open":return"visible active";case"closing":return`visible active animating ${p} out`;case"closed":return"hidden"}});return{setupAnimation:s,removeAnimation:u,computeAnimationClass:c}}const y_=F({name:"SuiCalendarDay",emits:["select-day"],props:{active:Boolean,date:null,disabled:Boolean,onSelectDay:Function},setup(e,{emit:t}){const a=j(!1),o=()=>{e.disabled||(a.value=!0)},s=()=>a.value=!1,u=()=>{e.disabled||t("select-day",e.date)},c=()=>{let d=new Date;return d.getFullYear()===e.date.year&&d.getMonth()===e.date.month&&d.getDate()===e.date.day},p=M(()=>te("link",b(a.value,"focus"),b(e.active&&!e.disabled,"active"),b(e.disabled,"adjacent disabled"),b(c(),"today")));return{onMouseEnter:o,onMouseLeave:s,onClick:u,computedClass:p}},render(){var e,t;return i("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:It(this.onClick,["stop"])},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),w_=F({name:"SuiCalendarDateTable",setup(){const{calendarDays:e,updateSelectMode:t,set:a,add:o,subtract:s,selectedDate:u,setSelectedDate:c,selectType:p,updateVisible:d,formatDate:m}=Ve(Ai);return{calendarDays:e,isEqualDay:f=>{if(!u.value)return!1;const h=u.value;return h.getFullYear()===f.year&&h.getMonth()===f.month&&h.getDate()===f.day},onSelectDay:f=>{if(a(f.year,"years"),a(f.month,"months"),a(f.day,"days"),p.value==="date"){let h=new Date(f.year,f.month,f.day);c(h),d(!1);return}t("hour")},updateSelectMode:t,formatDate:m,add:o,subtract:s}},render(){const e=()=>this.calendarDays.map((t,a)=>i("tr",null,[t.map(o=>i(y_,{active:this.isEqualDay(o),date:o,disabled:!o.currentMonth,onSelectDay:this.onSelectDay},{default:()=>[o.day]}))]));return i("table",{class:"ui celled center aligned unstackable table day seven column"},[i("thead",null,[i("tr",null,[i("th",{colspan:7},[i("span",{class:"link",onClick:It(()=>this.updateSelectMode("month"),["stop"])},[this.formatDate("date")]),i("span",{class:"prev link",onClick:()=>this.subtract(1,"months")},[i("i",{class:"chevron left icon"},null)]),i("span",{class:"next link",onClick:()=>this.add(1,"months")},[i("i",{class:"chevron right icon"},null)])])]),i("tr",null,[i("th",null,[l("S")]),i("th",null,[l("M")]),i("th",null,[l("T")]),i("th",null,[l("W")]),i("th",null,[l("T")]),i("th",null,[l("F")]),i("th",null,[l("S")])])]),i("tbody",null,[e()])])}}),ye=F({name:"SuiCalendarTableCell",emits:["click-cell"],props:{active:Boolean,today:Boolean,value:null,onClickCell:Function},setup(e){const t=j(!1),a=()=>t.value=!0,o=()=>t.value=!1,s=M(()=>te("link",b(e.active,"active"),b(e.today,"today"),b(t.value,"focus")));return{onMouseEnter:a,onMouseLeave:o,computedClass:s}},render(){var e,t;return i("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:It(()=>this.$emit("click-cell",this.value),["stop"])},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),C_=F({name:"SuiCalendarMonthTable",setup(){const{state:e,set:t,add:a,subtract:o,selectedDate:s,updateSelectMode:u}=Ve(Ai);return{state:e,add:a,subtract:o,updateSelectMode:u,isActive:c=>s.value?e.year===s.value.getFullYear()&&e.month===c:!1,isThisMonth:c=>{let p=new Date;return c===p.getMonth()&&e.year===p.getFullYear()},onClickCell:c=>{t(c,"months"),u("day")}}},render(){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=()=>Array(4).fill(0).map((a,o)=>i("tr",null,[i(ye,{value:o*3,active:this.isActive(o*3),today:this.isThisMonth(o*3),onClickCell:this.onClickCell},{default:()=>[e[o*3]]}),i(ye,{value:o*3+1,active:this.isActive(o*3+1),today:this.isThisMonth(o*3+1),onClickCell:this.onClickCell},{default:()=>[e[o*3+1]]}),i(ye,{value:o*3+2,active:this.isActive(o*3+2),today:this.isThisMonth(o*3+2),onClickCell:this.onClickCell},{default:()=>[e[o*3+2]]})]));return i("table",{class:"ui celled center aligned unstackable table month three column"},[i("thead",null,[i("tr",null,[i("th",{colspan:3},[i("span",{class:"link",onClick:It(()=>this.updateSelectMode("year"),["stop"])},[this.state.year]),i("span",{class:"prev link",onClick:()=>this.subtract(1,"years")},[i("i",{class:"chevron left icon"},null)]),i("span",{class:"next link",onClick:()=>this.add(1,"years")},[i("i",{class:"chevron right icon"},null)])])])]),i("tbody",null,[t()])])}}),x_=F({name:"SuiCalendarYearTable",setup(e){const{state:t,set:a,add:o,subtract:s,selectedDate:u,updateSelectMode:c}=Ve(Ai),p=()=>o(10,"years"),d=()=>s(10,"years"),m=M(()=>Math.round(t.year/10)*10+1);return{updateSelectMode:c,moveNextTwelveYears:p,movePrevTwelveYears:d,headerStartYear:m,isActive:f=>u.value?f===u.value.getFullYear():!1,isThisYear:f=>f===new Date().getFullYear(),onClickCell:f=>{a(f,"years"),c("day")}}},render(){return i("table",{class:"ui celled center aligned unstackable table year three column"},[i("thead",null,[i("tr",null,[i("th",{colspan:3},[i("span",{class:"link",onClick:It(()=>this.updateSelectMode("day"),["stop"])},[this.headerStartYear,l(" - "),this.headerStartYear+11]),i("span",{class:"prev link",onClick:this.movePrevTwelveYears},[i("i",{class:"chevron left icon"},null)]),i("span",{class:"next link",onClick:this.moveNextTwelveYears},[i("i",{class:"chevron right icon"},null)])])])]),i("tbody",null,[i("tr",null,[i(ye,{value:this.headerStartYear,active:this.isActive(this.headerStartYear),today:this.isThisYear(this.headerStartYear),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear]}),i(ye,{value:this.headerStartYear+1,active:this.isActive(this.headerStartYear+1),today:this.isThisYear(this.headerStartYear+1),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+1]}),i(ye,{value:this.headerStartYear+2,active:this.isActive(this.headerStartYear+2),today:this.isThisYear(this.headerStartYear+2),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+2]})]),i("tr",null,[i(ye,{value:this.headerStartYear+3,active:this.isActive(this.headerStartYear+3),today:this.isThisYear(this.headerStartYear+3),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+3]}),i(ye,{value:this.headerStartYear+4,active:this.isActive(this.headerStartYear+4),today:this.isThisYear(this.headerStartYear+4),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+4]}),i(ye,{value:this.headerStartYear+5,active:this.isActive(this.headerStartYear+5),today:this.isThisYear(this.headerStartYear+5),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+5]})]),i("tr",null,[i(ye,{value:this.headerStartYear+6,active:this.isActive(this.headerStartYear+6),today:this.isThisYear(this.headerStartYear+6),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+6]}),i(ye,{value:this.headerStartYear+7,active:this.isActive(this.headerStartYear+7),today:this.isThisYear(this.headerStartYear+7),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+7]}),i(ye,{value:this.headerStartYear+8,active:this.isActive(this.headerStartYear+8),today:this.isThisYear(this.headerStartYear+8),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+8]})]),i("tr",null,[i(ye,{value:this.headerStartYear+9,active:this.isActive(this.headerStartYear+9),today:this.isThisYear(this.headerStartYear+9),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+9]}),i(ye,{value:this.headerStartYear+10,active:this.isActive(this.headerStartYear+10),today:this.isThisYear(this.headerStartYear+10),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+10]}),i(ye,{value:this.headerStartYear+11,active:this.isActive(this.headerStartYear+11),today:this.isThisYear(this.headerStartYear+11),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+11]})])])])}}),A_=F({name:"SuiCalendarHourTable",setup(){const{updateSelectMode:e,state:t,set:a,add:o,subtract:s,formatDate:u,selectedDate:c}=Ve(Ai);return{updateSelectMode:e,formatDate:u,onPrevClick:()=>s(1,"days"),onNextClick:()=>o(1,"days"),onClickCell:p=>{a(p,"hours"),e("minute")},isActive:p=>{if(!c.value)return!1;let d=c.value.getFullYear(),m=c.value.getMonth(),f=c.value.getDate(),h=c.value.getHours();return t.year===d&&t.month===m&&t.day===f&&p===h}}},render(){return i("table",{class:"ui celled center aligned unstackable table hour four column"},[i("thead",null,[i("tr",null,[i("th",{colspan:4},[i("span",{class:"link",onClick:It(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),i("span",{class:"prev link",onClick:this.onPrevClick},[i("i",{class:"chevron left icon"},null)]),i("span",{class:"next link",onClick:this.onNextClick},[i("i",{class:"chevron right icon"},null)])])])]),i("tbody",null,[i("tr",null,[i(ye,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},{default:()=>[l("12:00 AM")]}),i(ye,{active:this.isActive(1),value:1,onClickCell:this.onClickCell},{default:()=>[l("1:00 AM")]}),i(ye,{active:this.isActive(2),value:2,onClickCell:this.onClickCell},{default:()=>[l("2:00 AM")]}),i(ye,{active:this.isActive(3),value:3,onClickCell:this.onClickCell},{default:()=>[l("3:00 AM")]})]),i("tr",null,[i(ye,{active:this.isActive(4),value:4,onClickCell:this.onClickCell},{default:()=>[l("4:00 AM")]}),i(ye,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},{default:()=>[l("5:00 AM")]}),i(ye,{active:this.isActive(6),value:6,onClickCell:this.onClickCell},{default:()=>[l("6:00 AM")]}),i(ye,{active:this.isActive(7),value:7,onClickCell:this.onClickCell},{default:()=>[l("7:00 AM")]})]),i("tr",null,[i(ye,{active:this.isActive(8),value:8,onClickCell:this.onClickCell},{default:()=>[l("8:00 AM")]}),i(ye,{active:this.isActive(9),value:9,onClickCell:this.onClickCell},{default:()=>[l("9:00 AM")]}),i(ye,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},{default:()=>[l("10:00 AM")]}),i(ye,{active:this.isActive(11),value:11,onClickCell:this.onClickCell},{default:()=>[l("11:00 AM")]})]),i("tr",null,[i(ye,{active:this.isActive(12),value:12,onClickCell:this.onClickCell},{default:()=>[l("12:00 PM")]}),i(ye,{active:this.isActive(13),value:13,onClickCell:this.onClickCell},{default:()=>[l("1:00 PM")]}),i(ye,{active:this.isActive(14),value:14,onClickCell:this.onClickCell},{default:()=>[l("2:00 PM")]}),i(ye,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},{default:()=>[l("3:00 PM")]})]),i("tr",null,[i(ye,{active:this.isActive(16),value:16,onClickCell:this.onClickCell},{default:()=>[l("4:00 PM")]}),i(ye,{active:this.isActive(17),value:17,onClickCell:this.onClickCell},{default:()=>[l("5:00 PM")]}),i(ye,{active:this.isActive(18),value:18,onClickCell:this.onClickCell},{default:()=>[l("6:00 PM")]}),i(ye,{active:this.isActive(19),value:19,onClickCell:this.onClickCell},{default:()=>[l("7:00 PM")]})]),i("tr",null,[i(ye,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},{default:()=>[l("8:00 PM")]}),i(ye,{active:this.isActive(21),value:21,onClickCell:this.onClickCell},{default:()=>[l("9:00 PM")]}),i(ye,{active:this.isActive(22),value:22,onClickCell:this.onClickCell},{default:()=>[l("10:00 PM")]}),i(ye,{active:this.isActive(23),value:23,onClickCell:this.onClickCell},{default:()=>[l("11:00 PM")]})])])])}});function Pt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ct(e)}const k_=F({name:"SuiCalendarMinuteTable",setup(){const{state:e,set:t,add:a,subtract:o,formatDate:s,updateSelectMode:u,updateVisible:c,selectedDate:p}=Ve(Ai);return{add:a,subtract:o,formatDate:s,updateSelectMode:u,getTimeLabel:d=>{let m=e.hour%12,f=e.hour>12?"PM":"AM",h=d.toString().padStart(2,"0");return e.hour===0?`12:${h} AM`:e.hour===12?`12:${h} PM`:`${m}:${h} ${f}`},onClickCell:d=>{t(d,"minutes"),p.value=new Date(e.year,e.month,e.day,e.hour,e.minute),c(!1)},isActive:d=>{if(!p.value)return!1;let m=p.value.getFullYear(),f=p.value.getMonth(),h=p.value.getDate(),_=p.value.getHours(),x=p.value.getMinutes();return e.year===m&&e.month===f&&e.day===h&&e.hour===_&&d===x}}},render(){let e,t,a,o,s,u,c,p,d,m,f,h;return i("table",{class:"ui celled center aligned unstackable table minute three column"},[i("thead",null,[i("tr",null,[i("th",{colspan:3},[i("span",{class:"link",onClick:It(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),i("span",{class:"prev link",onClick:()=>this.subtract(1,"days")},[i("i",{class:"chevron left icon"},null)]),i("span",{class:"next link",onClick:()=>this.add(1,"days")},[i("i",{class:"chevron right icon"},null)])])])]),i("tbody",null,[i("tr",null,[i(ye,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},Pt(e=this.getTimeLabel(0))?e:{default:()=>[e]}),i(ye,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},Pt(t=this.getTimeLabel(5))?t:{default:()=>[t]}),i(ye,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},Pt(a=this.getTimeLabel(10))?a:{default:()=>[a]})]),i("tr",null,[i(ye,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},Pt(o=this.getTimeLabel(15))?o:{default:()=>[o]}),i(ye,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},Pt(s=this.getTimeLabel(20))?s:{default:()=>[s]}),i(ye,{active:this.isActive(25),value:25,onClickCell:this.onClickCell},Pt(u=this.getTimeLabel(25))?u:{default:()=>[u]})]),i("tr",null,[i(ye,{active:this.isActive(30),value:30,onClickCell:this.onClickCell},Pt(c=this.getTimeLabel(30))?c:{default:()=>[c]}),i(ye,{active:this.isActive(35),value:35,onClickCell:this.onClickCell},Pt(p=this.getTimeLabel(35))?p:{default:()=>[p]}),i(ye,{active:this.isActive(40),value:40,onClickCell:this.onClickCell},Pt(d=this.getTimeLabel(40))?d:{default:()=>[d]})]),i("tr",null,[i(ye,{active:this.isActive(45),value:45,onClickCell:this.onClickCell},Pt(m=this.getTimeLabel(45))?m:{default:()=>[m]}),i(ye,{active:this.isActive(50),value:50,onClickCell:this.onClickCell},Pt(f=this.getTimeLabel(50))?f:{default:()=>[f]}),i(ye,{active:this.isActive(55),value:55,onClickCell:this.onClickCell},Pt(h=this.getTimeLabel(55))?h:{default:()=>[h]})])])])}}),B_=F({name:"SuiCalendarBody",setup(){const e=j(null),{visible:t,selectMode:a}=Ve(Ai),{setupAnimation:o,removeAnimation:s,computeAnimationClass:u}=S_(t);xi(()=>o(e.value)),Qi(()=>s(e.value));const c=M(()=>te("ui popup calendar","bottom left","transition",u.value));return{rootRef:e,computedClass:c,selectMode:a}},render(){const e=()=>{switch(this.selectMode){case"day":return i(w_,null,null);case"month":return i(C_,null,null);case"year":return i(x_,null,null);case"hour":return i(A_,null,null);case"minute":return i(k_,null,null)}};return i("div",{ref:t=>this.rootRef=t,class:this.computedClass,style:"inset: 38px auto auto 0px;"},[e()])}}),$_=F({name:"SuiCalendarInput",props:{placeholder:String,value:null},setup(e){const{visible:t,updateVisible:a,updateSelectMode:o,set:s,state:u,formatCalendarDate:c}=Ve(Ai);return{visible:t,formatCalendarDate:c,onClick:()=>{t.value||(o("day"),e.value&&(s(e.value.getFullYear(),"years"),s(e.value.getMonth(),"months"))),a(!t.value)}}},render(){return i("input",{type:"text",placeholder:this.placeholder,value:this.formatCalendarDate(this.value),onClick:()=>this.onClick()},null)}}),T_=(e,t)=>{let a=new Date;a.setDate(1),a.setMonth(t),a.setFullYear(e);let o=a.getDay();return o>=7?o-7:o},L_=(e,t)=>{let a,o;return t===0?(a=11,o=e-1):(a=t-1,o=e),32-new Date(o,a,32).getDate()},Ho=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e];function D_(){const e=j(!1),t=(A=!1)=>e.value=A,a=new Date;function o(A){if(!A)return;let T=A.getFullYear(),I=Ho(A.getMonth()),g=A.getDate(),v=A.getHours(),w=A.getMinutes(),k=v>11?"PM":"AM";v=v%12,v===0&&(v=12);let E=w.toString().padStart(2,"0");return`${I} ${g}, ${T} ${v}:${E} ${k}`}const s=j("default"),u=j("day");function c(A){u.value=A}const p=j(null),d=A=>{p.value=A},m=li({year:a.getFullYear(),month:a.getMonth(),day:a.getDate(),hour:a.getHours(),minute:a.getMinutes()}),f=(A,T)=>{switch(T){case"years":m.year=A;break;case"months":m.month=A;break;case"days":m.day=A;break;case"hours":m.hour=A;break;case"minutes":m.minute=A}},h=(A,T)=>{let I=new Date(m.year,m.month,m.day,m.hour);switch(T){case"years":I.setFullYear(I.getFullYear()+A);break;case"months":I.setMonth(I.getMonth()+A);break;case"days":I.setDate(I.getDate()+A);break;case"hours":I.setHours(I.getHours()+A);break}m.year=I.getFullYear(),m.month=I.getMonth(),m.day=I.getDate(),m.hour=I.getHours()},_=(A,T)=>{let I=new Date(m.year,m.month,m.day,m.hour);switch(T){case"years":I.setFullYear(I.getFullYear()-A);break;case"months":I.setMonth(I.getMonth()-A);break;case"days":I.setDate(I.getDate()-A);break;case"hours":I.setHours(I.getHours()-A);break}m.year=I.getFullYear(),m.month=I.getMonth(),m.day=I.getDate(),m.hour=I.getHours()},x=(A="default")=>A==="date"?`${Ho(m.month)} ${m.year}`:`${Ho(m.month)} ${m.day}, ${m.year}`,y=M(()=>{let A=m.month,T=m.year;A>11&&(A=A%11-1,T+=1);let I=[],g=T_(T,A),v=32-new Date(T,A,32).getDate(),w=L_(T,A),k=1;for(let E=0;E<6;E++){let V=[];if(E===0){for(let P=w-g+1;P<=w;P++){let G=A===0?11:A-1,J=A===0?T-1:T;V.push({day:P,month:G,year:J,currentMonth:!1})}let H=7-V.length;for(let P=0;P<H;P++)V.push({day:k,month:A,year:T,currentMonth:!0}),k++}else for(let H=0;H<7;H++){if(k>v){let P=A===11?0:A+1,G=A===11?T+1:T;V.push({day:k-v,month:P,year:G,currentMonth:!1})}else V.push({day:k,month:A,year:T,currentMonth:!0});k++}I.push(V)}return I});return{visible:e,updateVisible:t,calendarDays:y,formatCalendarDate:o,selectMode:u,updateSelectMode:c,selectType:s,selectedDate:p,setSelectedDate:d,state:m,set:f,add:h,subtract:_,formatDate:x}}const Ai=Symbol("useCalendar"),I_=F({directives:{clickoutside:gs},emits:["update:modelValue"],props:{modelValue:null,placeholder:String},setup(e,{emit:t}){const a=D_();ut(Ai,a);const{updateVisible:o,selectedDate:s}=a;return pt(s,u=>{t("update:modelValue",u)}),{updateVisible:o}},render(){return Si(i("div",{class:"ui calendar"},[i("div",{class:"ui input left icon"},[i(B_,null,null),i("i",{class:"calendar icon"},null),i($_,{placeholder:this.placeholder,value:this.modelValue},null)])]),[[mo("clickoutside"),()=>this.updateVisible(!1)]])}}),E_={install:e=>{e.component("SuiCalendar",I_)}},R_=["mini","tiny","small","medium","large","big","huge","massive"],Dn=()=>({size:{type:String,validator:e=>R_.includes(e)}}),In=e=>({sizeClass:M(()=>e.size)}),z_=F((e,{slots:t})=>{const{loadingClasses:a}=id(e),{sizeClass:o}=In(e),s=M(()=>te("ui",e.color,b(e.centered,"centered"),b(e.disabled,"disabled"),b(e.fluid,"fluid"),b(e.horizontal,"horizontal"),b(e.link,"link"),b(e.primary,"primary"),b(e.raised,"raised"),b(e.secondary,"secondary"),a.value,o.value,"card"));return()=>{var u,c;return e.href||e.link?i("a",{class:s.value,href:e.href},[(u=t.default)==null?void 0:u.call(t)]):i("div",{class:s.value},[(c=t.default)==null?void 0:c.call(t)])}},{props:{centered:Boolean,color:String,disabled:Boolean,fluid:Boolean,horizontal:Boolean,href:String,link:Boolean,primary:Boolean,raised:Boolean,secondary:Boolean,...td(),...Dn()}}),P_=F((e,{slots:t})=>{const a=M(()=>te(b(e.extra,"extra"),"content"));return()=>{var o,s,u,c;return i("div",{class:a.value},[e.header&&i("div",{class:"header"},[e.header]),t.header&&i("div",{class:"header"},[(o=t.header)==null?void 0:o.call(t)]),t.meta&&i("div",{class:"meta"},[(s=t.meta)==null?void 0:s.call(t)]),t.description&&i("div",{class:"description"},[(u=t.description)==null?void 0:u.call(t)]),(c=t.default)==null?void 0:c.call(t)])}},{props:{extra:Boolean,header:String}}),F_=F({props:{textAlign:String},setup(e){return{computedClass:M(()=>te(ze(e.textAlign,"aligned"),"description"))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),V_=F({props:{basic:Boolean,centered:Boolean,doubling:Boolean,horizontal:Boolean,inverted:Boolean,itemsPerRow:Number,stackable:Boolean},setup(e){return{classes:M(()=>te("ui",b(e.basic,"basic"),b(e.centered,"centered"),b(e.doubling,"doubling"),b(e.horizontal,"horizontal"),b(e.inverted,"inverted"),b(e.stackable,"stackable"),ri(e.itemsPerRow,""),"cards"))}},render(){var e,t;return i("div",{class:this.classes},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),M_=F({props:{textAlign:String},setup(e){return{computedClass:M(()=>te(ze(e.textAlign,"aligned"),"header"))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),H_=F({render(){var e,t;return ee("div",{class:"meta"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),O_={install(e){e.component("SuiCard",z_),e.component("SuiCardContent",P_),e.component("SuiCardDescription",F_),e.component("SuiCardGroup",V_),e.component("SuiCardHeader",M_),e.component("SuiCardMeta",H_)}},nd=F({emits:["update:modelValue","change","click"],props:{disabled:Boolean,indeterminate:Boolean,label:String,modelValue:null,radio:Boolean,readOnly:Boolean,slider:Boolean,toggle:Boolean,value:null},setup(e,{emit:t}){const a=M(()=>te("ui",!e.label&&"fitted",b(e.disabled,"disabled"),b(e.indeterminate,"indeterminate"),b(e.radio,"radio"),b(e.readOnly,"read-only"),b(e.slider,"slider"),b(e.toggle,"toggle"),"checkbox")),o=M(()=>Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue);return{computedClass:a,checked:o,onClick:s=>{if(e.disabled||e.readOnly)return;let u;e.value?o.value?u=e.modelValue.filter(c=>e.value!==c):u=e.modelValue?[...e.modelValue,e.value]:[e.value]:u=!e.modelValue,t("change",s),t("click",s),t("update:modelValue",u)}}},render(){return i("div",{class:this.computedClass,onClick:this.onClick},[i("input",{type:this.radio?"radio":"checkbox",class:"hidden",checked:this.checked,readonly:!0},null),i("label",null,[this.label])])}}),q_={install(e){e.component("SuiCheckbox",nd)}},ad=F({name:"SuiCommentAvatar",props:{as:String,src:String},render(){let e=this.$props.as||"div";return this.src?ee(e,{class:"avatar"},ee("img",{src:this.$props.src})):i("div",{class:"avatar"},[this.$slots.default&&this.$slots.default()])}});function N_(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ct(e)}const G_=F({name:"SuiComment",render(){let e;return i("div",{class:"comment"},[this.$slots.avatar&&i(ad,{as:"a"},N_(e=this.$slots.avatar())?e:{default:()=>[e]}),i("div",{class:"content"},[this.$slots.author&&i("a",{class:"author"},[this.$slots.author()]),this.$slots.metadata&&i("div",{class:"metadata"},[this.$slots.metadata()]),this.$slots.text&&i("div",{class:"text"},[this.$slots.text()]),this.$slots.actions&&i("div",{class:"actions"},[this.$slots.actions()])]),this.$slots.default&&this.$slots.default()])}}),j_=F({props:{active:Boolean},setup(e){const{active:t}=e;return{computedClass:M(()=>te(b(t,"active")))}},render(){var e,t,a,o;return this.computedClass?ee("a",{class:this.computedClass},(t=(e=this.$slots).default)==null?void 0:t.call(e)):ee("a",{},(o=(a=this.$slots).default)==null?void 0:o.call(a))}}),U_=F({render(){var e,t;return ee("div",{class:"actions"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),Y_=F({props:{as:String},render(){var e,t;let a=this.$props.as||"div";return ee(a,{class:"author"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),W_=F({render(){var e,t;return ee("div",{class:"content"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),K_=F({props:{collapsed:Boolean,inverted:Boolean,minimal:Boolean,size:String,threaded:Boolean},setup(e){return{computedClass:M(()=>te("ui",e.size,b(e.collapsed,"collapsed"),b(e.inverted,"inverted"),b(e.minimal,"minimal"),b(e.threaded,"threaded"),"comments"))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),X_=F({render(){var e,t;return ee("div",{class:"metadata"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),J_=F({render(){var e,t;return ee("div",{class:"text"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),Q_={install(e){e.component("SuiComment",G_),e.component("SuiCommentAction",j_),e.component("SuiCommentActions",U_),e.component("SuiCommentAuthor",Y_),e.component("SuiCommentAvatar",ad),e.component("SuiCommentContent",W_),e.component("SuiCommentGroup",K_),e.component("SuiCommentMetadata",X_),e.component("SuiCommentText",J_)}},Hi=F({props:{fluid:Boolean,text:Boolean,textAlign:String},setup(e){return{computedClass:M(()=>te("ui",b(e.fluid,"fluid"),b(e.text,"text"),Ln(e.textAlign),"container"))}},render(){var e,t;return ee("div",{class:this.computedClass},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),Z_={install(e){e.component("SuiContainer",Hi)}},Yt=F({props:{active:Boolean,inverted:Boolean,page:Boolean,simple:Boolean,verticalAlign:String},setup(e){return{computedClass:M(()=>te("ui",b(e.active,"active"),b(e.inverted,"inverted"),b(e.page,"page"),b(e.simple,"simple"),ze(e.verticalAlign,"aligned"),"dimmer"))}},render(){var e,t;return ee("div",{class:this.computedClass},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),ev=F((e,{slots:t})=>{const a=M(()=>te("ui",b(e.blurring,"blurring"),"dimmable","segment"));return()=>{var o;return i("div",{class:a.value},[(o=t.default)==null?void 0:o.call(t)])}},{props:{blurring:Boolean}}),tv={install(e){e.component("SuiDimmer",Yt),e.component("SuiDimmerDimmable",ev)}},Fe=F({props:{clearing:Boolean,fitted:Boolean,hidden:Boolean,horizontal:Boolean,inverted:Boolean,section:Boolean,textAlign:String,vertical:Boolean,...Dn()},setup(e){const{sizeClass:t}=In(e);return{classes:M(()=>te("ui",t.value,b(e.clearing,"clearing"),b(e.fitted,"fitted"),b(e.hidden,"hidden"),b(e.horizontal,"horizontal"),b(e.inverted,"inverted"),b(e.section,"section"),b(e.vertical,"vertical"),ze(e.textAlign,"aligned"),"divider"))}},render(){var e,t;return ee("div",{class:this.classes},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),iv={install(e){e.component("SuiDivider",Fe)}},nv=(e,t)=>e.map(a=>a[t]),od=["top","middle","bottom"],av={verticalAlign:{type:String,validator:e=>od.includes(e)}};function ov(e){return{verticalAlignClass:M(()=>e.verticalAlign&&od.includes(e.verticalAlign)?`${e.verticalAlign} aligned`:null)}}const lv=["left","right"],sv={floated:{type:String,validator:e=>lv.includes(e)}};function rv(e){return{floatedClass:M(()=>e.floated&&(e.floated==="left"||e.floated==="right")?`${e.floated} floated`:null)}}const q=F({props:{as:String,attached:String,basic:Boolean,circular:Boolean,color:String,corner:String,empty:Boolean,floating:Boolean,horizontal:Boolean,icon:String,image:Boolean,inverted:Boolean,pointing:[Boolean,String],prompt:Boolean,ribbon:[Boolean,String],size:String,tag:Boolean},setup(e,{slots:t}){const a=M(()=>te("ui",e.size,e.color,b(e.basic,"basic"),b(e.circular,"circular"),b(e.empty,"empty"),b(e.floating,"floating"),b(e.horizontal,"horizontal"),b(!!e.icon&&t.default===void 0,"icon"),b(e.image,"image"),b(e.inverted,"inverted"),b(e.prompt,"prompt"),b(e.tag,"tag"),ze(e.attached,"attached"),ze(e.corner,"corner"),Ie(e.pointing,"pointing"),Ie(e.ribbon,"ribbon"),"label"));let o=e.as||"div";return e.icon?()=>{var s;return ee(o,{class:a.value},[ee(W,{name:e.icon}),(s=t.default)==null?void 0:s.call(t)])}:()=>{var s;return ee(o,{class:a.value},(s=t.default)==null?void 0:s.call(t))}}}),En=F({render(){var e,t;return i("div",{class:"detail"},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),Rn=F({props:{basic:Boolean,circular:Boolean,color:String,size:String,tag:Boolean},setup(e,{slots:t}){const a=M(()=>te("ui",e.color,e.size,b(e.basic,"basic"),b(e.circular,"circular"),b(e.tag,"tag"),"labels"));return()=>{var o;return ee("div",{class:a.value},(o=t.default)==null?void 0:o.call(t))}}}),uv={install(e){e.component("SuiLabel",q),e.component("SuiLabelDetail",En),e.component("SuiLabelGroup",Rn)}},le=F({props:{as:String,avatar:Boolean,bordered:Boolean,centered:Boolean,circular:Boolean,disabled:Boolean,fluid:Boolean,hidden:Boolean,href:String,inline:Boolean,label:Object,target:String,wrapped:Boolean,rounded:Boolean,size:String,spaced:[Boolean,String],src:String,...av,...sv},setup(e,{slots:t}){const{verticalAlignClass:a}=ov(e),{floatedClass:o}=rv(e),s=M(()=>te("ui",e.size,a.value,o.value,b(e.avatar,"avatar"),b(e.bordered,"bordered"),b(e.centered,"centered"),b(e.circular,"circular"),b(e.disabled,"disabled"),b(e.fluid,"fluid"),b(e.hidden,"hidden"),b(e.inline,"inline"),b(e.rounded,"rounded"),Ie(e.spaced,"spaced"),"image"));if(e.as==="a"||e.as==="router-link"){let u=e.as;return e.as==="router-link"&&(u=$(e.as)),()=>{var c;return ee(u,{class:s.value,href:e.href,target:e.target&&e.target},ee("img",{src:e.src},(c=t.default)==null?void 0:c.call(t)))}}return e.wrapped?()=>{var u;return ee("div",{class:s.value},ee("img",{src:e.src},(u=t.default)==null?void 0:u.call(t)))}:e.label?()=>ee("div",{class:s.value},[ee("img",{src:e.src}),ee(q,{...e.label})]):()=>i("img",{class:s.value,src:e.src},null)}}),wl=F({props:{size:String},setup(e,{slots:t}){const a=M(()=>te("ui",e.size,"images"));return()=>{var o;return ee("div",{class:a.value},(o=t.default)==null?void 0:o.call(t))}}}),cv={install(e){e.component("SuiImage",le),e.component("SuiImageGroup",wl)}},dv=F({name:"SuiDropdownText",emits:["remove"],props:{clearable:Boolean,filtered:Boolean,icon:{type:String,default:"dropdown"},item:[Object,String],placeholder:String,text:String,onRemove:Function},setup(e){return{computedClass:M(()=>te(b(e.filtered,"filtered"),b(!e.text&&!e.item||Array.isArray(e.item)&&e.item.length===0,"default"),"text"))}},render(){var e,t;let a;if(this.item&&!Array.isArray(this.item))if(typeof this.item=="object"){const{flag:u,text:c}=this.item;a=i(we,null,[u&&i("i",{class:`${u} flag`},null),c])}else a=this.item;else a=this.text||this.placeholder;const o=typeof this.item=="object"?(e=this.item)==null?void 0:e.image:null,s=typeof this.item=="object"?(t=this.item)==null?void 0:t.label:null;return i(we,null,[i("div",{class:this.computedClass},[o&&i(le,o,null),s&&i(q,s,null),a]),i("i",{class:`${this.icon} icon`},null),this.$props.clearable&&i("i",{class:"remove icon",onClick:It(()=>this.$emit("remove"),["stop"])},null)])}}),pv=e=>{const t=li({visible:!1,animating:!1,direction:"down",multiple:e.multiple});return pt(()=>t.visible,()=>{t.animating=!0,setTimeout(()=>t.animating=!1,200)}),{state:t,show:()=>!t.animating&&(t.visible=!0),hide:()=>{t.animating||(t.visible=!1)}}};function mv(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ct(e)}const fv=F({directives:{clickoutside:gs},emits:["update:modelValue"],props:{button:Boolean,clearable:Boolean,compact:Boolean,floating:Boolean,fluid:Boolean,icon:String,inline:Boolean,item:Boolean,labeled:Boolean,modelValue:[Object,String],multiple:Boolean,options:Array,placeholder:String,pointing:[Boolean,String],scrolling:Boolean,selection:Boolean,search:Boolean,searchInMenu:Boolean,simple:Boolean,text:String},setup(e,{emit:t}){const a=pv(e);ut("useDropdown",a);const{state:o,show:s,hide:u}=a,c=M(()=>te("ui",b(e.button,"button"),b(e.clearable,"clearable"),b(e.compact,"compact"),b(e.floating,"floating"),b(e.fluid,"fluid"),b(!!e.icon,"icon"),b(e.inline,"inline"),b(e.item,"item"),b(e.labeled,"labeled"),b(e.multiple,"multiple"),b(e.search,"search"),b(e.scrolling,"scrolling"),b(e.selection,"selection"),b(e.simple,"simple"),Ie(e.pointing,"pointing"),"dropdown",b(o.visible,"active visible"),b(o.direction==="up","upward"))),p=()=>{var T;if(o.visible)return u();(T=_.value)==null||T.focus(),s()},d=()=>{e.search&&_.value&&_.value.focus(),s()},m=()=>u(),f=j(""),h=M(()=>{const T=f.value.toLowerCase();return e.options.filter(I=>{const g=typeof I=="object"?I.text:I,v=g.toLowerCase().includes(T);if(!e.multiple)return v;if(Array.isArray(e.modelValue)){const w=typeof I=="object"?nv(e.modelValue,"text").includes(g):e.modelValue.includes(g);return v&&!w}return v})}),_=j(null),x=T=>f.value=T.target.value,y=T=>{var I;if(f.value="",e.search&&((I=_.value)==null||I.focus()),e.multiple){let g=Array.isArray(e.modelValue)?[...e.modelValue,T]:[T];return t("update:modelValue",g)}return t("update:modelValue",T)},A=T=>{if(Array.isArray(e.modelValue)){const I=e.modelValue.findIndex(g=>g===T);if(I>-1){let g=Object.assign(e.modelValue);g.splice(I,1),t("update:modelValue",g)}}};return ut("selection",e.selection),{computedClass:c,onClick:p,openMenu:d,closeMenu:m,filteredText:f,filteredOptions:h,inputRef:_,onInput:x,onSelect:y,removeItem:A}},render(){var e,t;const a=()=>{if(Array.isArray(this.$props.modelValue))return this.$props.modelValue.map(c=>typeof c=="object"?i("a",{class:"ui label"},[c.flag&&i("i",{class:`${c.flag} flag`},null),c.text,i("i",{class:"delete icon",onClick:It(()=>this.removeItem(c),["stop"])},null)]):i("a",{class:"ui label"},[c,i("i",{class:"delete icon",onClick:It(()=>this.removeItem(c),["stop"])},null)]))},o=()=>this.filteredOptions.filter(c=>this.$props.multiple&&Array.isArray(this.$props.modelValue)?!this.$props.modelValue.includes(c):!0).map(c=>i(ld,{item:c,active:this.$props.modelValue&&typeof c=="object"?c.text===this.$props.modelValue.text:c===this.$props.modelValue,text:typeof c=="object"?c.text:c,flag:typeof c=="object"&&Object.keys(c).includes("flag")?c.flag:"",image:c.image,label:c.label,disabled:c.disabled,onSelect:this.onSelect},null)),s=()=>{let c={clearable:this.clearable,filtered:this.filteredText.length>0,icon:this.icon,item:this.modelValue,placeholder:this.placeholder,text:this.text};return i(dv,Zi(c,{onRemove:()=>this.$emit("update:modelValue",null)}),null)},u=()=>{let c;return i(sd,{search:this.$props.searchInMenu,onSearch:this.onInput},mv(c=o())?c:{default:()=>[c]})};return Si(i("div",{class:this.computedClass,onClick:this.onClick},[this.$props.multiple&&a(),this.search&&i("input",{ref:c=>this.inputRef=c,type:"text",class:"search",autocomplete:"off",tabindex:0,value:this.filteredText,onInput:c=>this.onInput(c)},null),this.search&&this.multiple&&i("span",{class:"sizer"},null),s(),((t=(e=this.$slots).default)==null?void 0:t.call(e))||u()]),[[mo("clickoutside"),this.closeMenu]])}}),ld=F({emits:["select"],props:{active:Boolean,flag:String,description:String,icon:String,image:Object,item:[Object,String],label:Object,text:String,disabled:Boolean,onSelect:Function},setup(e,{emit:t}){const{state:a,hide:o}=Ve("useDropdown");return{computedClass:M(()=>te(b(e.active,"active"),b(e.disabled,"disabled"),"item")),onClick:()=>{a.multiple||o(),t("select",e.item?e.item:e.text)}}},render(){return i("div",{class:this.computedClass,onClick:It(this.onClick,["stop"])},[this.flag&&i("i",{class:`${this.flag} flag`},null),this.icon&&i("i",{class:`${this.icon} icon`},null),this.image&&i(le,this.image,null),this.label&&i(q,this.label,null),this.description&&i("span",{class:"description"},[this.description]),this.text])}}),sd=F({emits:["search"],props:{search:Boolean,onSearch:Function},setup(e,{emit:t,slots:a}){const{state:o}=Ve("useDropdown"),s=j(null),u=M(()=>{let p=()=>o.visible?`animating slide ${o.direction} in visible`:`animating slide ${o.direction} out visible`;return te("menu","transition",b(o.visible,"visible"),b(!o.visible&&!o.animating,"hidden"),b(o.animating,p()))});pt(()=>o.visible,p=>{if(!p||!s.value)return;let d=s.value.parentElement;const{top:m,height:f}=d==null?void 0:d.getBoundingClientRect(),h=m-c.value.length*37,_=document.documentElement.clientHeight-m-f-c.value.length*37;o.direction=h>_?"up":"down"});const c=M(()=>{var p;let d=[],m=(p=a.default)==null?void 0:p.call(a);return m&&m.forEach(f=>{f.type.name==="SuiSelectItem"&&d.push(f)}),d});return{container:s,computedClass:u,onSearchInput:p=>t("search",p)}},render(){var e,t,a,o;const s=()=>i(we,null,[i("div",{class:"ui left icon input",onClick:It(()=>{},["stop"])},[i("input",{type:"text",onInput:u=>this.onSearchInput(u)},null),i("i",{class:"search icon"},null)]),i("div",{class:"ui divider"},null)]);return i("div",{ref:u=>this.container=u,class:this.computedClass},[this.$slots.header&&i("div",{class:"header"},[(t=(e=this.$slots).header)==null?void 0:t.call(e)]),this.$props.search&&s(),(o=(a=this.$slots).default)==null?void 0:o.call(a)])}}),gv={install(e){e.component("SuiDropdown",fv),e.component("SuiDropdownItem",ld),e.component("SuiDropdownMenu",sd)}},hv=F({props:{active:Boolean,aspectRatio:Boolean,autoplay:Boolean,id:String,placeholder:String,source:String,url:String},setup(e){const t=j(e.active),a=()=>{t.value=!t.value},o=()=>e.source==="youtube"?[`//www.youtube.com/embed/${e.id}`,"?autohide=true",`&amp;autoplay=${e.autoplay}`,"&amp;jsapi=false"].join(""):e.url,s=M(()=>te("ui",e.aspectRatio,b(t.value,"active"),"embed"));return{active:t,getSrc:o,clickHandler:a,computedClass:s}},render(){let e=[ee("i",{class:"video play icon"}),ee("img",{class:"placeholder",src:this.placeholder})];return this.active&&e.push(ee("div",{class:"embed"},ee("iframe",{src:this.getSrc()}))),ee("div",{class:this.computedClass,onClick:this.clickHandler},e)}}),_v={install(e){e.component("SuiEmbed",hv)}},Lt=F({props:{disabled:Boolean,link:Boolean,loading:Boolean,name:String,size:String},setup(e){return{computedClass:M(()=>te(e.size,b(e.disabled,"disabled"),b(e.link,"link"),b(e.loading,"loading")))}},render(){return this.computedClass?ee("em",{class:this.computedClass,"data-emoji":this.$props.name}):ee("em",{"data-emoji":this.$props.name})}}),vv={install(e){e.component("SuiEmoji",Lt)}},bv=F({props:{disabled:Boolean,inverted:Boolean,size:String},setup(e,{slots:t}){const a=M(()=>te("ui",e.size,b(e.disabled,"disabled"),b(e.inverted,"inverted"),"feed"));return()=>{var o;return ee("div",{class:a.value},(o=t.default)==null?void 0:o.call(t))}}}),Sv=F({render(){var e,t;return ee("div",{class:"content"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),yv=F({render(){var e,t;return ee("div",{class:"date"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),wv=F({props:{disabled:Boolean},setup(e,{slots:t}){const a=M(()=>te(b(e.disabled,"disabled"),"event"));return()=>{var o;return i("div",{class:a.value},[t.label&&i("div",{class:"label"},[t.label()]),(t.summary||t.meta)&&i("div",{class:"content"},[t.summary&&i("div",{class:"summary"},[t.summary()]),t.extraText&&i("div",{class:"extra text"},[t.extraText()]),t.extraImages&&i("div",{class:"extra images"},[t.extraImages()]),t.meta&&i("div",{class:"meta"},[t.meta()])]),(o=t.default)==null?void 0:o.call(t)])}}}),Cv=F({props:{images:Boolean,text:Boolean},setup(e){const{images:t,text:a}=e;return{computedClass:M(()=>te(b(t,"images"),b(a,"text"),"extra"))}},render(){var e,t;return ee("div",{class:this.computedClass},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),xv=F({render(){var e,t;return ee("div",{class:"label"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),Av=F({render(){var e,t;return ee("a",{class:"like"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),kv=F({render(){var e,t;return ee("div",{class:"meta"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),Bv=F({render(){var e,t;return ee("div",{class:"summary"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),$v=F({render(){var e,t;return ee("a",{class:"user"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),Tv={install(e){e.component("SuiFeed",bv),e.component("SuiFeedContent",Sv),e.component("SuiFeedDate",yv),e.component("SuiFeedEvent",wv),e.component("SuiFeedExtra",Cv),e.component("SuiFeedLabel",xv),e.component("SuiFeedLike",Av),e.component("SuiFeedMeta",kv),e.component("SuiFeedSummary",Bv),e.component("SuiFeedUser",$v)}},Wt=F(e=>{const{sizeClass:t}=In(e),a=M(()=>te(t.value,e.name,"flag"));return()=>i("i",{class:a.value},null)},{props:{name:String,...Dn()}}),Lv={install(e){e.component("SuiFlag",Wt)}},Mt=F({props:{error:Boolean,info:Boolean,inverted:Boolean,loading:Boolean,reply:Boolean,success:Boolean,unstackable:Boolean,warning:Boolean,size:String},setup(e){return{classes:M(()=>te("ui",e.size,b(e.error,"error"),b(e.info,"info"),b(e.inverted,"inverted"),b(e.loading,"loading"),b(e.reply,"reply"),b(e.success,"success"),b(e.unstackable,"unstackable"),b(e.warning,"warning"),"form"))}},render(){var e,t;return i("form",{class:this.classes},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),Rr=["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"];function Dv(e){return{widthClass:M(()=>Number(e.width)>0?`${Rr[Number(e.width)-1]} wide`:typeof e.width=="string"||Rr.includes(e.width)?`${e.width} wide`:null)}}const it=F({emits:["update:modelValue"],props:{disabled:Boolean,error:Boolean,inline:Boolean,label:String,modelValue:String,placeholder:String,required:Boolean,type:String,width:String||Number},setup(e,{emit:t}){const{widthClass:a}=Dv(e),o=M(()=>te(b(e.disabled,"disabled"),b(e.error,"error"),b(e.inline,"inline"),b(e.required,"required"),a.value,"field")),s=e.type||"text";return{computedClass:o,inputType:s,onInput:u=>t("update:modelValue",u.target.value)}},render(){var e,t;return this.label?i("div",{class:this.computedClass},[i("label",null,[this.label]),i("input",{type:this.inputType,placeholder:this.placeholder,value:this.modelValue,onInput:this.onInput},null)]):i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),hs=F({props:{widths:String},setup(e){return{computedClass:M(()=>te(ze(e.widths,"width"),"fields"))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),Cl=F({props:{label:String,placeholder:String,rows:[Number,String]},render(){return this.label?i("div",{class:"field"},[i("label",null,[this.label]),i("textarea",{placeholder:this.placeholder,rows:this.rows},null)]):i("div",{class:"field"},[i("textarea",{placeholder:this.placeholder,rows:this.rows},null)])}}),Iv={install(e){e.component("SuiForm",Mt),e.component("SuiFormField",it),e.component("SuiFormGroup",hs),e.component("SuiFormTextarea",Cl)}},ba=F({props:{celled:[Boolean,String],centered:Boolean,columns:[Number,String],compact:Boolean,container:Boolean,divided:[Boolean,String],doubling:Boolean,inverted:Boolean,padded:[Boolean,String],relaxed:[Boolean,String],reversed:String,stackable:Boolean,textAlign:String,verticalAlign:String},setup(e){return{computedClass:M(()=>te("ui",e.container&&"container",b(e.centered,"centered"),b(e.compact,"compact"),b(e.doubling,"doubling"),b(e.inverted,"inverted"),b(e.stackable,"stackable"),ze(e.reversed,"reversed"),ze(e.verticalAlign,"aligned"),Ie(e.celled,"celled"),Ie(e.divided,"divided"),Ie(e.padded,"padded"),Ie(e.relaxed,"relaxed"),Ln(e.textAlign),ri(e.columns,"column"),"grid"))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),Bt=F({props:{color:String,computer:Number,floated:String,largeScreen:Number,mobile:Number,only:String,tablet:Number,textAlign:String,width:Number,widescreen:Number},setup(e){return{computedClass:M(()=>te(e.color,ze(e.floated,"floated"),ze(e.only,"only"),Ln(e.textAlign),ri(e.width,"wide"),Mn(e.mobile,"mobile"),Mn(e.tablet,"tablet"),Mn(e.computer,"computer"),Mn(e.largeScreen,"large screen"),Mn(e.widescreen,"widescreen"),"column"))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),xl=F({props:{centered:Boolean,color:String,columns:Number,only:String,stretched:Boolean,textAlign:String},setup(e){return{computedClass:M(()=>te(e.color,b(e.centered,"centered"),b(e.stretched,"stretched"),ze(e.only,"only"),ri(e.columns,"column"),Ln(e.textAlign),"row"))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),Ev={install(e){e.component("SuiGrid",ba),e.component("SuiGridColumn",Bt),e.component("SuiGridRow",xl)}},Yi=F({props:{as:String},setup(e){return{elementType:e.as||"div"}},render(){var e,t;return ee(this.elementType,{class:"sub header"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),fe=F({components:{HeaderSubheader:Yi},props:{as:String,attached:[Boolean,String],block:Boolean,color:String,content:String,disabled:Boolean,dividing:Boolean,floated:String,icon:Boolean,image:Boolean,inverted:Boolean,primary:Boolean,secondary:Boolean,size:String,sub:Boolean,subheader:String,textAlign:String},setup(e){const t=e.as||"div",a=M(()=>te("ui",e.color,e.size,b(e.primary,"primary"),b(e.secondary,"secondary"),b(e.block,"block"),b(e.disabled,"disabled"),b(e.dividing,"dividing"),b(e.icon,"icon"),b(e.image,"image"),b(e.inverted,"inverted"),b(e.sub,"sub"),ze(e.floated,"floated"),Ie(e.attached,"attached"),Ln(e.textAlign),"header"));return{elementType:t,computedClass:a}},render(){var e,t;let a=[];return this.content&&a.push(this.content),this.subheader&&a.push(ee(Yi,{},this.subheader)),a.length>0?ee(this.elementType,{class:this.computedClass},a):ee(this.elementType,{class:this.computedClass},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),_s=F({render(){var e,t;return ee("div",{class:"content"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),Rv={install(e){e.component("SuiHeader",fe),e.component("SuiHeaderContent",_s),e.component("SuiHeaderSubheader",Yi)}},Ze=F({emits:["update:modelValue"],props:{action:String,disabled:Boolean,error:Boolean,fluid:Boolean,focus:Boolean,icon:String,iconPosition:String,inverted:Boolean,label:String,labeled:Boolean,loading:Boolean,modelValue:String,placeholder:String,size:String,transparent:Boolean,type:String},setup(e,{emit:t}){const a=M(()=>typeof e.icon=="string"||e.loading),o=M(()=>!!e.label||e.labeled),s=M(()=>te("ui",e.size,e.action&&"action",b(e.disabled,"disabled"),b(e.error,"error"),b(e.fluid,"fluid"),b(e.focus,"focus"),e.iconPosition,b(a.value,"icon"),b(e.inverted,"inverted"),b(e.loading,"loading"),b(e.transparent,"transparent"),b(o.value,"labeled"),"input")),u=c=>t("update:modelValue",c.target.value);return()=>i("div",{class:s.value},[e.label&&i(q,null,{default:()=>[e.label]}),i("input",{type:e.type||"text",placeholder:e.placeholder,value:e.modelValue,onInput:c=>u(c)},null),a.value&&i(W,{name:e.icon||"spinner"},null),e.action&&i(z,null,{default:()=>[e.action]})])}}),zv={install(e){e.component("SuiInput",Ze)}},Pv=F({setup(e,{slots:t}){return()=>{var a;return i("div",{class:"item"},[t.image&&i("div",{class:"image"},[t.image()]),(t.header||t.metadata||t.description||t.extra)&&i("div",{class:"content"},[t.header&&i("div",{class:"header"},[t.header()]),t.metadata&&i("div",{class:"meta"},[t.metadata()]),t.description&&i("div",{class:"description"},[t.description()]),t.extra&&i("div",{class:"extra"},[t.extra()])]),(a=t.default)==null?void 0:a.call(t)])}}}),Fv=F({props:{verticalAlign:String},setup(e,{slots:t}){const{verticalAlign:a}=e,o=M(()=>te(ze(a,"aligned"),"content"));return()=>{var s;return i("div",{class:o.value},[(s=t.default)==null?void 0:s.call(t),t.header&&i("div",{class:"header"},[t.header()]),t.metadata&&i("div",{class:"meta"},[t.metadata()]),t.description&&i("div",{class:"description"},[t.description()])])}}}),Vv=F({render(){var e,t;return ee("div",{class:"description"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),Mv=F({render(){var e,t;return ee("div",{class:"extra"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),Hv=F({props:{divided:Boolean,inverted:Boolean,link:Boolean,relaxed:[Boolean,String],unstackable:Boolean},setup(e){return{computedClass:M(()=>te("ui",b(e.divided,"divided"),b(e.inverted,"inverted"),b(e.link,"link"),b(e.unstackable,"unstackable"),Ie(e.relaxed,"relaxed"),"items"))}},render(){var e,t;return ee("div",{class:this.computedClass},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),Ov=F({props:{as:String},render(){var e,t;let a=this.$props.as||"div";return ee(a,{class:"header"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),qv=F({props:{size:String},setup(e){return{computedClass:M(()=>te(e.size,"image"))}},render(){var e,t;return ee("div",{class:this.computedClass},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),Nv=F({render(){var e,t;return ee("div",{class:"meta"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),Gv={install(e){e.component("SuiItem",Pv),e.component("SuiItemContent",Fv),e.component("SuiItemDescription",Vv),e.component("SuiItemExtra",Mv),e.component("SuiItemGroup",Hv),e.component("SuiItemHeader",Ov),e.component("SuiItemImage",qv),e.component("SuiItemMeta",Nv)}},rd=F((e,{slots:t})=>{const{sizeClass:a}=In(e),o=M(()=>te("ui",b(e.animated,"animated"),b(e.bulleted,"bulleted"),b(e.celled,"celled"),b(e.divided,"divided"),b(e.horizontal,"horizontal"),b(e.inverted,"inverted"),b(e.link,"link"),b(e.ordered,"ordered"),b(e.relaxed,"relaxed"),b(e.selection,"selection"),ze(e.verticalAlign,"aligned"),ze(e.floated,"floated"),a.value,"list"));let s=e.as||"div";return()=>{var u;return ee(s,{class:o.value},(u=t.default)==null?void 0:u.call(t))}},{props:{animated:Boolean,as:String,bulleted:Boolean,celled:Boolean,divided:Boolean,floated:String,horizontal:Boolean,inverted:Boolean,ordered:Boolean,relaxed:Boolean,link:Boolean,selection:Boolean,verticalAlign:String,...Dn()}}),Nn=F((e,{slots:t})=>{const a=M(()=>te(b(e.active,"active"),b(e.disabled,"disabled"),"item"));let o=e.as||"div";return()=>{var s;return ee(o,{class:a.value},(s=t.default)==null?void 0:s.call(t))}},{props:{active:Boolean,as:String,disabled:Boolean}}),jv=F({setup(e,{slots:t}){return()=>{var a;return ee(W,{...e},(a=t.default)==null?void 0:a.call(t))}}}),Uv=F({props:{verticalAlign:String},setup(e){return{computedClass:M(()=>te(ze(e.verticalAlign,"aligned"),"content"))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),Yv=F({props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:t}){return()=>{var a;return ee(e.as,{class:"header"},(a=t.default)==null?void 0:a.call(t))}}}),Wv=F({props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:t}){return()=>{var a;return ee(e.as,{class:"description"},(a=t.default)==null?void 0:a.call(t))}}}),Kv=F({render(){var e,t;return i("div",{class:"list"},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),Xv={install(e){e.component("SuiList",rd),e.component("SuiListItem",Nn),e.component("SuiListIcon",jv),e.component("SuiListContent",Uv),e.component("SuiListHeader",Yv),e.component("SuiListDescription",Wv),e.component("SuiListList",Kv)}},Za=F({props:{action:Boolean,active:Boolean,as:String,browse:Boolean,color:String,disabled:Boolean,fitted:[Boolean,String],header:Boolean,icon:Boolean,index:Number,link:Boolean,name:String,position:String,stackable:Boolean},emits:["selected"],setup(e,{slots:t,emit:a}){let o=e.as||"a";e.header&&(o="div"),e.as==="router-link"&&(o=$(e.as));const s=M(()=>te(e.color,e.position,b(e.action,"action"),b(e.active,"active"),b(e.browse,"browse"),b(e.disabled,"disabled"),b(e.header,"header"),b(e.icon,"icon"),b(e.link,"link"),Ie(e.fitted,"fitted"),"item")),u=M(()=>!e.header&&!e.disabled&&e.as!=="div");return()=>i(o,{class:s.value,onClick:()=>u.value&&a("selected",e.index)},{default:()=>{var c;return[e.name||((c=t.default)==null?void 0:c.call(t))]}})}}),ud=F({props:{attached:[Boolean,String],borderless:Boolean,color:Boolean,compact:Boolean,fixed:Boolean,floated:[Boolean,String],fluid:Boolean,icon:[Boolean,String],inverted:Boolean,items:Array,pagination:Boolean,pointing:Boolean,secondary:Boolean,size:String,stackable:Boolean,tabular:[Boolean,String],text:Boolean,vertical:Boolean,widths:Number},emits:["selected"],setup(e,{slots:t,emit:a}){const o=j(-1),s=M(()=>te("ui",e.color,e.size,b(e.borderless,"borderless"),b(e.compact,"compact"),b(e.fixed,"fixed"),b(e.fluid,"fluid"),b(e.inverted,"inverted"),b(e.pagination,"pagination"),b(e.pointing,"pointing"),b(e.secondary,"secondary"),b(e.stackable,"stackable"),b(e.text,"text"),b(e.vertical,"vertical"),Ie(e.attached,"attached"),Ie(e.floated,"floated"),Ie(e.icon,"icon"),Ie(e.tabular,"tabular"),ri(e.widths,"item"),"menu")),u=d=>typeof d=="string"?d:d.text,c=(d,m)=>{if(typeof d!="string")return d[m]},p=(d,m)=>{o.value=d,a("selected",m)};return()=>i("div",{class:s.value},[t.default&&t.default(),e.items&&e.items.map((d,m)=>i(Za,{index:m,active:m===o.value,as:typeof d!="string"?c(d,"as"):void 0,color:c(d,"color"),header:typeof d!="string"&&d.header,onSelected:f=>p(f,d)},{default:()=>[typeof d!="string"&&d.icon&&i(W,{name:d.icon},null),u(d)]})),t.right&&i("div",{class:"right menu"},[t.right()])])}}),Jv=F({props:{as:String,content:String},setup(e,{slots:t}){let a=e.as||"div";return()=>i(a,{class:"header"},{default:()=>{var o;return[e.content||((o=t.default)==null?void 0:o.call(t))]}})}}),Qv=F({props:{position:String},setup(e){const{position:t}=e;return{computedClass:M(()=>te(t,"menu"))}},render(){var e,t;return ee("div",{class:this.computedClass},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),Zv={install(e){e.component("SuiMenu",ud),e.component("SuiMenuHeader",Jv),e.component("SuiMenuItem",Za),e.component("SuiMenuMenu",Qv)}},Ao=F({props:{attached:[Boolean,String],aligned:String,color:String,closable:Boolean,compact:Boolean,content:String,header:String,error:Boolean,floating:Boolean,hidden:Boolean,icon:[Boolean,String],info:Boolean,list:Array,negative:Boolean,positive:Boolean,size:String,success:Boolean,visible:Boolean,warning:Boolean},emits:["close"],setup(e,{emit:t,slots:a}){const o=M(()=>te("ui",e.color,e.size,b(e.compact,"compact"),b(e.error,"error"),b(e.floating,"floating"),b(e.hidden,"hidden"),b(!!e.icon,"icon"),b(e.info,"info"),b(e.negative,"negative"),b(e.positive,"positive"),b(e.success,"success"),b(e.visible,"visible"),b(e.warning,"warning"),ze(e.aligned,"aligned"),Ie(e.attached,"attached"),"message")),s=j(),u=()=>{var c;const p=(c=s.value)==null?void 0:c.animate([{opacity:1},{opacity:0}],200);p&&(p.onfinish=()=>{var d;return(d=s.value)==null?void 0:d.classList.add("hidden")},t("close"))};return()=>{var c,p;return i("div",{ref:s,class:o.value},[e.closable&&i("i",{class:"close icon",onClick:u},null),typeof e.icon=="string"&&i(W,{name:e.icon},null),(c=a.default)==null?void 0:c.call(a),(e.content||a.content||e.header||e.list)&&i("div",{class:"content"},[e.header&&i("div",{class:"header"},[e.header]),e.content&&i("p",null,[e.content]),(p=a.content)==null?void 0:p.call(a),Array.isArray(e.list)&&i("ul",{class:"list"},[e.list.map((d,m)=>i("li",{key:m},[d]))])])])}}}),eb=F({render(){var e,t;return ee("div",{class:"content"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),tb=F({render(){var e,t;return ee("div",{class:"header"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),ib=F({render(){var e,t;return ee("li",{class:"content"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),nb=F({render(){var e,t;return ee("ul",{class:"list"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),ab={install(e){e.component("SuiMessage",Ao),e.component("SuiMessageContent",eb),e.component("SuiMessageHeader",tb),e.component("SuiMessageItem",ib),e.component("SuiMessageList",nb)}};function ob(e){return Vl()?(Jr(e),!0):!1}function cd(e){return typeof e=="function"?e():r(e)}const dd=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const lb=Object.prototype.toString,sb=e=>lb.call(e)==="[object Object]",Ma=()=>{},rb=ub();function ub(){var e,t;return dd&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function Gn(e){var t;const a=cd(e);return(t=a==null?void 0:a.$el)!=null?t:a}const pd=dd?window:void 0;function Oo(...e){let t,a,o,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([a,o,s]=e,t=pd):[t,a,o,s]=e,!t)return Ma;Array.isArray(a)||(a=[a]),Array.isArray(o)||(o=[o]);const u=[],c=()=>{u.forEach(f=>f()),u.length=0},p=(f,h,_,x)=>(f.addEventListener(h,_,x),()=>f.removeEventListener(h,_,x)),d=pt(()=>[Gn(t),cd(s)],([f,h])=>{if(c(),!f)return;const _=sb(h)?{...h}:h;u.push(...a.flatMap(x=>o.map(y=>p(f,x,y,_))))},{immediate:!0,flush:"post"}),m=()=>{d(),c()};return ob(m),m}let zr=!1;function cb(e,t,a={}){const{window:o=pd,ignore:s=[],capture:u=!0,detectIframe:c=!1}=a;if(!o)return Ma;rb&&!zr&&(zr=!0,Array.from(o.document.body.children).forEach(f=>f.addEventListener("click",Ma)),o.document.documentElement.addEventListener("click",Ma));let p=!0;const d=f=>s.some(h=>{if(typeof h=="string")return Array.from(o.document.querySelectorAll(h)).some(_=>_===f.target||f.composedPath().includes(_));{const _=Gn(h);return _&&(f.target===_||f.composedPath().includes(_))}}),m=[Oo(o,"click",f=>{const h=Gn(e);if(!(!h||h===f.target||f.composedPath().includes(h))){if(f.detail===0&&(p=!d(f)),!p){p=!0;return}t(f)}},{passive:!0,capture:u}),Oo(o,"pointerdown",f=>{const h=Gn(e);p=!d(f)&&!!(h&&!f.composedPath().includes(h))},{passive:!0}),c&&Oo(o,"blur",f=>{setTimeout(()=>{var h;const _=Gn(e);((h=o.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(_!=null&&_.contains(o.document.activeElement))&&t(f)},0)})].filter(Boolean);return()=>m.forEach(f=>f())}function md(e,t="scale"){const a=j(e.modelValue?"open":"closed");return pt(()=>e.modelValue,o=>{a.value=o?"opening":"closing"}),{animationClasses:M(()=>{switch(a.value){case"opening":return`animating ${t} in`;case"open":return"visible active";case"closing":return`visible active animating ${t} out`;case"closed":return"hidden"}}),isClosed:M(()=>a.value==="closed"),onAnimationEnd:()=>a.value=e.modelValue?"open":"closed"}}const db=F({props:{blurring:Boolean,inverted:Boolean,modelValue:Boolean},setup(e){const{animationClasses:t,isClosed:a,onAnimationEnd:o}=md(e,"fade"),s=M(()=>te("ui","page modals dimmer transition",b(e.inverted,"inverted"),t.value)),u=M(()=>({display:a.value?"none !important":"flex !important",animationDuration:"500ms"})),c=M(()=>te("dimmable","dimmed",b(e.blurring,"blurring")));return pt(()=>e.modelValue,p=>{if(p){document.body.classList.add(...c.value.split(" "));return}document.body.classList.remove(...c.value.split(" "))}),{className:s,style:u,onAnimationEnd:o}},render(){var e,t;return i("div",{class:this.className,style:this.style,onAnimationend:this.onAnimationEnd},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),vs=F({props:{basic:Boolean,closeIcon:Boolean,dimmer:String,modelValue:Boolean,size:String,closable:{type:Boolean,default:!0},overlay:Boolean,fullscreen:Boolean},setup(e,{emit:t}){const a=j(),{animationClasses:o,isClosed:s}=md(e),u=M(()=>te("ui",e.size,b(e.basic,"basic"),b(e.overlay,"overlay"),b(e.fullscreen,"fullscreen"),"modal","transition",o.value)),c=M(()=>({display:s.value?"none !important":"block !important",animationDuration:"500ms"})),p=()=>t("update:modelValue",!1);return cb(a,()=>e.closable&&t("update:modelValue",!1)),{computedClass:u,style:c,close:p,modalRef:a}},render(){return i(vo,{to:"body"},{default:()=>[i(db,{blurring:this.dimmer==="blurring",inverted:this.dimmer==="inverted",modelValue:this.modelValue},{default:()=>{var e,t;return[i("div",{class:this.computedClass,style:this.style,onClick:a=>a.stopPropagation(),ref:a=>this.modalRef=a},[this.closeIcon&&i("i",{"aria-hidden":"true",class:"close icon",onClick:this.close},null),(t=(e=this.$slots).default)==null?void 0:t.call(e)])]}})]})}}),bs=F({render(){var e,t;return i("div",{class:"actions"},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),Ss=F({props:{image:Boolean,scrolling:Boolean},setup(e){return{computedClass:M(()=>te(b(e.image,"image"),b(e.scrolling,"scrolling"),"content"))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),fd=F({render(){var e,t;return ee("div",{class:"description"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),ys=F({render(){var e,t;return ee("div",{class:"header"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),pb={install(e){e.component("SuiModal",vs),e.component("SuiModalActions",bs),e.component("SuiModalContent",Ss),e.component("SuiModalDescription",fd),e.component("SuiModalHeader",ys)}},mb=e=>{const t=j(!1),a=Zo(e,"position"),o=j(null),s=Zo(e,"trigger"),u=()=>{t.value=!0,$n(()=>p())},c=()=>{t.value=!1},p=()=>{if(!o.value||!s.value)return;let d=0,m=0;const f=o.value,h=s.value.$el;f.style.transform=`translate(${d}px, ${m}px)`;const{top:_,left:x,width:y,height:A}=h.getBoundingClientRect(),T=f.getBoundingClientRect(),{pageXOffset:I,pageYOffset:g}=window;if(a.value.includes("top")?(d=I+x,m=g+_-f.offsetTop-f.offsetHeight):(d=x,m=_+A-T.top),a.value.includes("right")){const v=y-T.width;d=x+v}if(a.value.includes("center")){const v=y/2-T.width/2;d=x+v}a.value==="right center"&&(d=x+y,m=_+A/2-T.top-T.height/2),a.value==="left center"&&(d=x-T.width,m=_+A/2-T.top-T.height/2),f.style.display="flex",f.style.position="absolute",f.style.transform=`translate(${d}px, ${m}px)`};return{show:t,showPopup:u,hidePopup:c,placement:a,popupRef:o,triggerRef:s}},fb=F({props:{basic:Boolean,content:String,flowing:Boolean,header:String,inverted:Boolean,position:{type:String,default:"top left"},size:String,trigger:Object,wide:[Boolean,String]},setup(e,{slots:t}){const{show:a,showPopup:o,hidePopup:s,popupRef:u,triggerRef:c}=mb(e);Zl(()=>{var _,x,y;(_=c.value)!=null&&_.$el&&((x=c.value)==null||x.$el.addEventListener("mouseenter",o),(y=c.value)==null||y.$el.addEventListener("mouseleave",s))});const p=j(a.value?"open":"close");M(()=>p.value!=="closed"),pt(()=>a.value,_=>{p.value=_?"opening":"closing"});const d=(_,x="scale")=>{switch(_){case"opening":return`animating ${x} in`;case"open":return"visible active";case"closing":return`visible active animating ${x} out`;case"closed":return"hidden"}},m=()=>p.value=a.value?"open":"closed";xi(()=>{var _;(_=u.value)==null||_.addEventListener("animationend",m,!0)}),Qi(()=>{var _;(_=u.value)==null||_.removeEventListener("animationend",m)});const f={position:"initial",animationDuration:"200ms"},h=M(()=>te("ignored ui",e.position,e.size,b(e.basic,"basic"),b(e.flowing,"flowing"),b(e.inverted,"inverted"),Ie(e.wide,"wide"),"popup transition",d(p.value,"scale")));return()=>i(vo,{to:"body"},{default:()=>{var _;return[i("div",{ref:u,style:"display: flex; position: absolute; transform: translate(0px, 0px);"},[i("div",{class:h.value,style:f},[e.header&&i("div",{class:"header"},[e.header]),i("div",{class:"content"},[e.content?e.content:(_=t.default)==null?void 0:_.call(t)])])])]}})}}),gb={install(e){e.component("SuiPopup",fb)}},hb=["top","bottom","left"],ws=()=>({attached:{type:String,validator:e=>hb.includes(e)}}),gd=e=>({attachedClasses:M(()=>te(e.attached,{attached:e.attached}))}),_b=["red","orange","yellow","olive","green","teal","blue","purple","violet","pink","brown","grey","black"],Cs=()=>({color:{type:String,validator:e=>_b.includes(e)}}),xs=e=>({colorClasses:M(()=>te(e.inverted&&"inverted",e.color))}),Al=F({props:{active:Boolean,disabled:Boolean,error:Boolean,indeterminate:[Boolean,String],indicating:Boolean,inverted:Boolean,label:String,percent:Number,progress:[Boolean,String],size:String,success:Boolean,warning:Boolean,...ws(),...Cs()},setup(e,{slots:t}){const{attachedClasses:a}=gd(e),{colorClasses:o}=xs(e),s=M(()=>te("ui",o.value,e.size,b(e.active||e.indicating,"active"),b(e.disabled,"disabled"),b(e.error,"error"),b(e.indicating,"indicating"),b(e.success,"success"),b(e.warning,"warning"),Ie(e.indeterminate,"indeterminate"),a.value,"progress")),u=M(()=>te(Ie(e.progress,"progress"))),c=M(()=>e.progress!=="centered"?{}:{right:0});return()=>{var p;return i("div",{class:s.value,"data-percent":e.percent},[i("div",{class:"bar",style:`width: ${e.percent}%; transition-duration: 300ms;`},[e.progress&&i("div",{class:u.value,style:c.value},[((p=t.default)==null?void 0:p.call(t))||`${e.percent}%`])]),e.label&&i("div",{class:"label"},[e.label])])}}}),vb={install(e){e.component("SuiProgress",Al)}},bb=F({props:{attached:Boolean,close:[Boolean,String],dividing:Boolean,internal:Boolean,position:String,size:String},setup(e){return{computedClass:M(()=>te("ui",e.position,e.size,b(e.attached,"attached"),b(e.dividing,"dividing"),b(e.internal,"internal"),Ie(e.close,"close"),"rail"))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),Sb={install(e){e.component("SuiRail",bb)}},yb=F({props:{icon:String,index:{type:Number,default:0}},setup(e){const t=Ve("rating",j(0)),a=Ve("updateRating"),o=Ve("selectedIndex",j(0)),s=Ve("updateSelectedIndex"),u=Ve("clearable",!1),c=Ve("disabled",!1),p=()=>{if(!c){if(u&&e.index===t.value){a(0),s(0);return}a(e.index)}},d=()=>{c||s(e.index)},m=M(()=>e.index<=t.value),f=M(()=>e.index<=o.value),h=M(()=>te(e.icon,b(m.value,"active"),b(f.value,"selected"),"icon"));return()=>i("i",{class:h.value,onClick:()=>p(),onMouseenter:()=>d()},null)}}),wb=F({props:{clearable:Boolean,color:String,defaultRating:{type:Number,default:0},disabled:Boolean,icon:{type:String,default:"star"},maxRating:{type:Number,default:1},modelValue:Number,size:String},setup(e,{emit:t}){const a=j(e.modelValue||e.defaultRating),o=j(!1),s=j(0),u=f=>{a.value=f,t("update:modelValue",f),t("change",f)},c=f=>s.value=f,p=()=>{e.disabled||(o.value=!0)},d=()=>{e.disabled||(o.value=!1,c(0))},m=M(()=>te("ui",e.color,e.icon,e.size,b(e.disabled,"disabled"),"rating",b(o.value,"selected")));return ut("rating",a),ut("updateRating",u),ut("selectedIndex",s),ut("updateSelectedIndex",c),ut("clearable",e.clearable),ut("disabled",e.disabled),()=>i("div",{class:m.value,onMouseenter:()=>p(),onMouseleave:()=>d()},[[...Array(e.maxRating)].map((f,h)=>i(yb,{icon:e.icon,index:h+1},null))])}}),Cb={install(e){e.component("SuiRating",wb)}},en=F({props:{active:Boolean,animated:String,disabled:Boolean,instant:Boolean},setup(e){return{computedClass:M(()=>te("ui",e.animated,b(e.active,"active"),b(e.disabled,"disabled"),b(e.instant,"instant"),"reveal"))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),Et=F({props:{visible:Boolean,hidden:Boolean},setup(e){return{computedClass:M(()=>te("ui",b(e.visible,"visible"),b(e.hidden,"hidden"),"content"))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),xb={install(e){e.component("SuiReveal",en),e.component("SuiRevealContent",Et)}},Ab=F({props:{icon:String,placeholder:String},setup(e){return()=>i("div",{class:"ui search"},[i("div",{class:"ui icon input"},[i("input",{type:"text",class:"prompt",placeholder:e.placeholder},null),i("i",{class:"search icon"},null)]),i("div",{class:"results"},null)])}}),kb={install(e){e.component("SuiSearch",Ab)}},O=F((e,{slots:t})=>{const{colorClasses:a}=xs(e),{sizeClass:o}=In(e),s=M(()=>te("ui",a.value,o.value,b(e.basic,"basic"),b(e.circular,"circular"),b(e.clearing,"clearing"),b(e.compact,"compact"),b(e.disabled,"disabled"),b(e.inverted,"inverted"),b(e.loading,"loading"),b(e.piled,"piled"),b(e.placeholder,"placeholder"),b(e.raised,"raised"),b(e.secondary,"secondary"),b(e.stacked,"stacked"),b(e.tertiary,"tertiary"),b(e.vertical,"vertical"),ze(e.floated,"floated"),ze(e.textAlign,"aligned"),Ie(e.attached,"attached"),Ie(e.fitted,"fitted"),Ie(e.padded,"padded"),Ie(e.scrolling,"scrolling"),"segment"));return()=>{var u;return i("div",{class:s.value},[(u=t.default)==null?void 0:u.call(t)])}},{props:{attached:[Boolean,String],basic:Boolean,circular:Boolean,clearing:Boolean,compact:Boolean,disabled:Boolean,fitted:[Boolean,String],floated:String,inverted:Boolean,loading:Boolean,padded:[Boolean,String],piled:Boolean,placeholder:Boolean,raised:Boolean,scrolling:[Boolean,String],secondary:Boolean,stacked:Boolean,tertiary:Boolean,textAlign:String,vertical:Boolean,...Cs(),...Dn()}}),yt=F((e,{slots:t})=>{const{sizeClass:a}=In(e),o=M(()=>te("ui",a.value,b(e.basic,"basic"),b(e.compact,"compact"),b(e.horizontal,"horizontal"),b(e.piled,"piled"),b(e.raised,"raised"),b(e.stacked,"stacked"),"segments"));return()=>{var s;return i("div",{class:o.value},[(s=t.default)==null?void 0:s.call(t)])}},{props:{basic:Boolean,compact:Boolean,horizontal:Boolean,piled:Boolean,raised:Boolean,stacked:Boolean,...Dn()}}),Bb=F({render(){var e,t;return i("div",{class:"inline"},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),$b={install(e){e.component("SuiSegment",O),e.component("SuiSegmentGroup",yt),e.component("SuiSegmentInline",Bb)}},Tb=F({directives:{clickoutside:gs},emits:["update:visible","show","hide"],props:{animation:{type:String,default:"overlay"},dimmed:Boolean,direction:{type:String,default:"left"},icon:[Boolean,String],inverted:Boolean,visible:Boolean},setup(e,{emit:t}){const a=li({animating:!1}),o=M(()=>{const s=e.direction==="right"||e.direction==="left";return te("ui","sidebar",e.direction,e.animation,b(e.inverted,"inverted"),b(e.visible,"visible"),b(a.animating,"animating"),b(s,"vertical"),Ie(e.icon,"icon"),"menu")});return pt(()=>e.visible,()=>{if(a.animating=!0,setTimeout(()=>a.animating=!1,500),e.dimmed){const s=document.querySelector(".pusher");s&&s.classList.toggle("dimmed")}}),{computedClass:o,onClickPusher:s=>{const u=s.path||s.composedPath&&s.composedPath();u&&u.find(c=>c.classList&&c.classList.contains("pusher"))&&e.visible&&t("update:visible",!1)}}},render(){var e,t;return Si(i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)]),[[mo("clickoutside"),this.onClickPusher]])}}),Lb={install:e=>{e.component("SuiSidebar",Tb)}};class qo{static getWindowScrollTop(){let{documentElement:t}=document;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let{documentElement:t}=document;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static hasClass(t,a){return t.classList.contains(a)}}const Db=F({emits:["change","slideend","update:modelValue"],props:{color:String,disabled:Boolean,inverted:Boolean,labeled:[Boolean,String],labels:Array,max:{type:Number,default:10},min:{type:Number,default:0},modelValue:{type:[Number,Array],default:0},range:Boolean,reversed:Boolean,size:String,step:{type:Number,default:1},vertical:Boolean,verticalHeight:{type:[Number,String],default:200}},setup(e,{emit:t}){const a=M(()=>te("ui",e.color,e.size,b(e.disabled,"disabled"),b(e.inverted,"inverted"),b(e.reversed,"reversed"),b(e.vertical,"vertical"),Ie(e.labeled,"labeled"),"slider")),o=()=>100*(e.modelValue[0]-e.min)/(e.max-e.min),s=()=>100*(e.modelValue[1]-e.min)/(e.max-e.min),u=M(()=>{if(e.range)return e.reversed&&!e.vertical?{right:o()+"%",width:s()-o()+"%"}:e.vertical?e.reversed?{bottom:o()+"%",height:s()-o()+"%"}:{top:o()+"%",height:s()-o()+"%"}:{left:o()+"%",width:s()-o()+"%"};let U=e.modelValue>e.max?e.max:e.modelValue;return e.reversed?e.vertical?{bottom:"0%",top:`${100-(U-e.min)/(e.max-e.min)*100}%`}:{right:"0%",left:`${100-(U-e.min)/(e.max-e.min)*100}%`}:e.vertical?{top:"0%",bottom:`${100-(U-e.min)/(e.max-e.min)*100}%`}:{left:"0%",right:`${100-(U-e.min)/(e.max-e.min)*100}%`}}),c=M(()=>{let U=e.range?e.modelValue[0]:e.modelValue>e.max?e.max:e.modelValue;return!e.reversed&&e.vertical?{top:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:e.reversed&&e.vertical?{top:"auto",bottom:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.reversed&&!e.vertical?{left:"auto",right:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{left:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),p=M(()=>{let U=e.modelValue[1]>e.max?e.max:e.modelValue[1];return e.reversed&&!e.vertical?{left:"auto",right:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.vertical?e.reversed?{top:"auto",bottom:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{top:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:{left:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),d=M(()=>e.labels?e.labels:[...Array(e.max-e.min+1)].map((U,K)=>K*e.step+e.min)),m=()=>{var U,K;let ue=1,ne=f(),Le=(e.vertical?(U=_.value)==null?void 0:U.clientHeight:(K=_.value)==null?void 0:K.clientWidth)||0,We=1;if(Le>0)for(;Le/ne*We<100;)ne%We||(ue=We),We+=1;return ue},f=()=>Math.round((e.max-e.min)/e.step),h=j(null),_=j(null),x=j(0),y=j(0),A=j(0),T=j(0),I=()=>{if(!h.value)return;let U=h.value.getBoundingClientRect();x.value=U.left+qo.getWindowScrollLeft(),y.value=U.top+qo.getWindowScrollTop(),A.value=h.value.offsetWidth,T.value=h.value.offsetHeight},g=j(0),v=U=>{let{pageX:K,pageY:ue}=U.touches?U.touches[0]:U,ne,Le;e.vertical?ne=(y.value+T.value-ue)*100/T.value:ne=(K-x.value)*100/A.value,Le=(e.max-e.min)*(ne/100)+e.min;const We=e.range?e.modelValue[g.value]:e.modelValue||0;Le=We+Math.round(Le/e.step-We/e.step)*e.step,e.reversed&&(Le=e.max-Le+e.min),e.vertical&&(Le=e.max-Le+e.min),w(Le)},w=U=>{let K=U,ue;if(e.range)if(ue=e.modelValue?[...e.modelValue]:[],g.value===0){let ne=e.modelValue?e.modelValue[1]:e.max;K<e.min?K=e.min:K>ne&&(K=ne),ue[0]=K,ue[1]=ue[1]||e.max}else{let ne=e.modelValue?e.modelValue[0]:e.min;K>e.max?K=e.max:K<ne&&(K=ne),ue[0]=ue[0]||e.min,ue[1]=K}else K<e.min&&(K=e.min),K>e.max&&(K=e.max),ue=K;t("update:modelValue",ue),t("change",ue)},k=j(!1),E=U=>k.value=U,V=(U,K=0)=>{E(!0),I(),g.value=K,U.preventDefault()},H=U=>{k.value&&(E(!1),document.removeEventListener("mousemove",P),t("slideend",{event:U,value:e.modelValue}))},P=U=>{k.value&&(v(U),U==null||U.preventDefault())},G=(U,K=0)=>{e.disabled||(V(U,K),document.addEventListener("mousemove",P),document.addEventListener("mouseup",H),U.preventDefault())},J=(U,K=0)=>{switch(g.value=K,U.code){case"ArrowUp":e.vertical&&(e.reversed?Y():pe()),U.preventDefault();break;case"ArrowDown":e.vertical&&(e.reversed?pe():Y()),U.preventDefault();break;case"ArrowRight":e.reversed?pe():Y(),U.preventDefault();break;case"ArrowLeft":e.reversed?Y():pe(),U.preventDefault();break}},Y=()=>{let U=0;e.range?U=e.modelValue[g.value]+e.step:U=e.modelValue+e.step,w(U)},pe=()=>{let U=0;e.range?U=e.modelValue[g.value]-e.step:U=e.modelValue-e.step,w(U)},Ae=U=>{if(!e.disabled&&!qo.hasClass(U.target,"thumb")){if(e.range){let K=(e.vertical?U.offsetY/U.target.clientHeight:U.offsetX/U.target.clientWidth)*100,ue=(o()+s())/2;K<ue?g.value=e.reversed?1:0:g.value=e.reversed?0:1}I(),v(U)}};return()=>i("div",{ref:U=>h.value=U,class:a.value,style:e.vertical?`height: ${e.verticalHeight}px;`:""},[i("div",{class:"inner",onClick:Ae},[i("div",{class:"track",ref:U=>_.value=U},null),i("div",{class:"track-fill",style:u.value},null),i("div",{class:"thumb",style:c.value,onMousedown:U=>G(U),onTouchstart:U=>V(U),onTouchmove:U=>P(U),onTouchend:U=>H(U),onKeydown:U=>J(U),tabindex:0},null),e.range&&i("div",{class:"thumb second",style:p.value,onMousedown:U=>G(U,1),onTouchstart:U=>V(U,1),onTouchmove:U=>P(U),onTouchend:U=>H(U),onKeydown:U=>J(U,1),tabindex:0},null)]),e.labeled&&i("ul",{class:"auto labels"},[[...Array(f()+1)].map((U,K)=>{let ue=K/f();return K%m()?i("li",{class:"halftick label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${ue} + 7px);`},null):i("li",{class:"label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${ue} + 7px);`},[e.reversed&&!e.vertical?e.labels?e.labels[f()-K]:d.value[f()-K]:e.labels?e.labels[K]:d.value[K]])})])])}}),Ib={install(e){e.component("SuiSlider",Db)}},kl=F({props:{content:String},render(){var e,t;return this.$props.content?ee("div",{class:"label"},this.$props.content):ee("div",{class:"label"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),Bl=F({props:{content:String,text:Boolean},setup(e){return{computedClass:M(()=>te(b(e.text,"text"),"value"))}},render(){var e,t;return this.$props.content?ee("div",{class:this.computedClass},this.$props.content):ee("div",{class:this.computedClass},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),Eb=F({components:{StatisticLabel:kl,StatisticValue:Bl},props:{color:String,floated:[Boolean,String],fluid:Boolean,horizontal:Boolean,inverted:Boolean,label:String,size:String,text:Boolean,value:String},setup(e){const t=Ve("ui",!0);return{computedClass:M(()=>te(t&&"ui",e.color,e.size,b(e.fluid,"fluid"),b(e.horizontal,"horizontal"),b(e.inverted,"inverted"),b(e.text,"text"),Ie(e.floated,"floated"),"statistic"))}},render(){var e,t,a,o,s,u;let c=[];return this.$props.value&&c.push(ee(Bl,{content:this.$props.value},(t=(e=this.$slots).default)==null?void 0:t.call(e))),this.$props.label&&c.push(ee(kl,{content:this.$props.label},(o=(a=this.$slots).default)==null?void 0:o.call(a))),ee("div",{class:this.computedClass},c.length>0?c:(u=(s=this.$slots).default)==null?void 0:u.call(s))}}),Rb=F({props:{color:String,horizontal:Boolean,inverted:Boolean,size:String,stackable:Boolean,widths:Number},setup(e){return ut("ui",!1),{classes:M(()=>te("ui",e.color,e.size,b(e.horizontal,"horizontal"),b(e.inverted,"inverted"),b(e.stackable,"stackable"),ri(e.widths,""),"statistics"))}},render(){var e,t;return ee("div",{class:this.classes},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),zb={install(e){e.component("SuiStatistic",Eb),e.component("SuiStatisticGroup",Rb),e.component("SuiStatisticLabel",kl),e.component("SuiStatisticValue",Bl)}},Pb=F((e,{slots:t})=>{const a=M(()=>te(b(e.active,"active"),b(e.completed,"completed"),b(e.disabled,"disabled"),b(e.fluid,"fluid"),b(e.link,"link"),b(e.vertical,"vertical"),"step"));return()=>{var o,s;return e.href?i("a",{class:a.value,href:e.href},[(o=t.default)==null?void 0:o.call(t)]):i("div",{class:a.value},[e.icon&&i(W,{name:e.icon},null),(e.title||e.description)&&i("div",{class:"content"},[e.title&&i("div",{class:"title"},[e.title]),e.description&&i("div",{class:"description"},[e.description])]),(s=t.default)==null?void 0:s.call(t)])}},{props:{active:Boolean,completed:Boolean,description:String,disabled:Boolean,fluid:Boolean,href:String,icon:String,link:Boolean,title:String,vertical:Boolean}}),Fb=["one","two","three","four","five","six","seven","eight"],Vb=F({props:{attached:String,fluid:Boolean,inverted:Boolean,ordered:Boolean,size:String,stackable:String,unstackable:Boolean,vertical:Boolean,widths:Number},setup(e){const{widths:t}=e;return{computedClass:M(()=>te("ui",t&&Fb[t-1],e.size,b(e.fluid,"fluid"),b(e.inverted,"inverted"),b(e.ordered,"ordered"),b(e.unstackable,"unstackable"),b(e.vertical,"vertical"),ze(e.attached,"attached"),ze(e.stackable,"stackable"),"steps"))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),Mb=F({render(){var e,t;return i("div",{class:"content"},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),Hb=F({render(){var e,t;return i("div",{class:"title"},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),Ob=F({render(){var e,t;return i("div",{class:"description"},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),qb={install(e){e.component("SuiStep",Pb),e.component("SuiStepGroup",Vb),e.component("SuiStepContent",Mb),e.component("SuiStepTitle",Hb),e.component("SuiStepDescription",Ob)}},hd=F({props:{active:Boolean,attached:[Boolean,String],header:String},setup(e){return{computedClass:M(()=>te("ui tab segment",b(e.active,"active"),Ie(e.attached,"attached")))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),Nb=F({emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},pointing:Boolean,secondary:Boolean,text:Boolean},setup(e,{emit:t,slots:a}){const o=j(e.activeIndex);pt(()=>e.activeIndex,m=>{o.value=m});const s=(m,f)=>{o.value!==f&&(o.value=f,t("update:activeIndex",f),t("tab-change",{event:m,index:f})),t("tab-click",{event:m,index:f})},u=(m,f)=>{m.key==="Enter"&&s(m,f)},c=M(()=>{var m,f;let h=[];return(m=a.default)!=null&&m.call(a)&&((f=a.default)==null||f.call(a).forEach(_=>{Ct(_)&&h.push(_)})),h}),p=M(()=>!e.secondary&&!e.pointing&&!e.text),d=M(()=>te("ui menu",b(p.value,"tabular attached"),b(e.pointing,"pointing"),b(e.secondary,"secondary"),b(e.text,"text")));return{onClick:s,onKeyDown:u,tabIndex:o,tabs:c,tabMenuClass:d,isDefaultMenu:p}},render(){const e=()=>this.tabs.map((a,o)=>i("a",{class:`item ${this.tabIndex===o&&"active"}`,onClick:s=>this.onClick(s,o),onKeydown:s=>this.onKeyDown(s,o),tabindex:0},[a.props.header])),t=()=>this.tabs.map((a,o)=>i(hd,Zi(a.props,{active:this.tabIndex===o,attached:this.isDefaultMenu?"bottom":!1}),{default:()=>{var s,u;return[(u=(s=a.children).default)==null?void 0:u.call(s)]}}));return i(we,null,[i("div",{class:this.tabMenuClass},[e()]),t()])}}),Gb={install(e){e.component("SuiTab",Nb),e.component("SuiTabPanel",hd)}},jb=["long","very long","short","very short"],Ub=({defaultValue:e}={})=>({scrolling:{type:String,validator:t=>jb.includes(t),default:e}}),Yb=e=>({scrollingClasses:M(()=>te(e.scrolling,!!e.scrolling&&"scrolling"))}),_d=F({props:{columns:Array,definition:Boolean,fullWidth:Boolean},setup(e,{slots:t}){const a=M(()=>te(b(e.fullWidth,"full-width")));return()=>{var o;return e.columns?i("thead",{class:a.value},[t.default?t.default():i("tr",null,[e.definition&&i("th",null,null),e.columns.map(s=>{const{header:u,field:c}=s.props;return i("th",{key:c},[u])})])]):i("thead",{class:a.value},[(o=t.default)==null?void 0:o.call(t)])}}}),$l=F({props:{active:Boolean,className:String,collapsing:Boolean,color:String,disabled:Boolean,error:Boolean,marked:String,negative:Boolean,positive:Boolean,rowspan:Number,selectable:Boolean,singleLine:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e,{emit:t,slots:a}){const o=M(()=>te(e.color,e.className,b(e.active,"active"),b(e.collapsing,"collapsing"),b(e.disabled,"disabled"),b(e.error,"error"),b(e.negative,"negative"),b(e.positive,"positive"),b(e.selectable,"selectable"),b(e.singleLine,"single line"),b(e.warning,"warning"),ze(e.verticalAlign,"aligned"),ze(e.marked,"marked"),Ln(e.textAlign))),s=()=>{e.selectable&&t("click-cell")};return()=>{var u,c;return i("td",{class:o.value,rowspan:e.rowspan,onClick:s},[e.selectable?i("a",null,[(u=a.default)==null?void 0:u.call(a)]):(c=a.default)==null?void 0:c.call(a)])}}}),vd=F({props:{columns:Array,definitionClass:String,rows:Array,rowsGroupBy:String,rowActive:Function,rowClass:[Boolean,Function],rowColor:Function,rowDisabled:Function,rowError:Function,rowNegative:Function,rowPositive:Function,rowWarning:Function},emits:["row-click","cell-click"],setup(e,{emit:t,slots:a}){const o=(u,c)=>{var p;if(!e.rows||!e.rowsGroupBy||e.rowsGroupBy!==u||c===0)return!0;const d=e.rows[c][u],m=(p=e.rows[c-1])==null?void 0:p[u];return d!==m},s=(u,c)=>{var p;if(!e.rows||!e.rowsGroupBy||e.rowsGroupBy!==u)return;const d=e.rows[c][u];let m=d,f=0;for(;d===m&&(f++,m=(p=e.rows[c+f])==null?void 0:p[u],!!m););return f>1?f:void 0};return()=>{var u,c;return!e.columns||e.columns.length===0?i("tbody",null,[(u=a.default)==null?void 0:u.call(a)]):i("tbody",null,[(c=e.rows)==null?void 0:c.map((p,d)=>{var m;return i("tr",{key:p.id,class:typeof e.rowClass=="function"?e.rowClass({data:p,index:d}):e.rowClass,onClick:()=>t("row-click",{data:p})},[a.definition&&i($l,{className:e.definitionClass},{default:()=>{var f;return[(f=a.definition)==null?void 0:f.call(a,{data:p})]}}),(m=e.columns)==null?void 0:m.map(f=>{var h,_,x,y,A,T,I;const{field:g,header:v,active:w,cellClass:k,collapsing:E,color:V,disabled:H,error:P,negative:G,positive:J,marked:Y,selectable:pe,warning:Ae}=f.props,U=o(g,d),K=s(g,d);return U&&i($l,{"data-label":v,key:g,className:typeof k=="function"?k({data:p,value:p[g],index:d}):k,rowspan:K,active:((h=e.rowActive)==null?void 0:h.call(e,{data:p,index:d}))||(w==null?void 0:w({value:p[g],index:d})),collapsing:E,color:((_=e.rowColor)==null?void 0:_.call(e,{data:p,index:d}))||(V==null?void 0:V({value:p[g],index:d})),disabled:((x=e.rowDisabled)==null?void 0:x.call(e,{data:p,index:d}))||(H==null?void 0:H({value:p[g],index:d})),error:((y=e.rowError)==null?void 0:y.call(e,{data:p,index:d}))||(P==null?void 0:P({value:p[g],index:d})),negative:((A=e.rowNegative)==null?void 0:A.call(e,{data:p,index:d}))||(G==null?void 0:G({value:p[g],index:d})),positive:((T=e.rowPositive)==null?void 0:T.call(e,{data:p,index:d}))||(J==null?void 0:J({value:p[g],index:d})),marked:Y==null?void 0:Y({data:p,value:p[g],index:d}),selectable:typeof pe=="function"?pe==null?void 0:pe({data:p,value:p[g],index:d}):pe,warning:((I=e.rowWarning)==null?void 0:I.call(e,{data:p,index:d}))||(Ae==null?void 0:Ae({value:p[g],index:d})),"onClick-cell":()=>{t("cell-click",{data:p,value:p[g],index:d})}},{default:()=>{var ue,ne;return[f.children?(ne=(ue=f.children).body)==null?void 0:ne.call(ue,{data:p}):p[g]]}})})])})])}}}),bd=F({props:{fullWidth:Boolean},setup(e){const{fullWidth:t}=e;return{computedClass:M(()=>te(b(t,"full-width")))}},render(){var e,t,a,o;return this.computedClass?ee("tfoot",{class:this.computedClass},(t=(e=this.$slots).default)==null?void 0:t.call(e)):ee("tfoot",{},(o=(a=this.$slots).default)==null?void 0:o.call(a))}}),Wb=F({props:{attached:[Boolean,String],basic:[Boolean,String],celled:Boolean,collapsing:Boolean,color:String,columns:Number,compact:[Boolean,String],definition:Boolean,definitionClass:String,fixed:Boolean,hideHeader:Boolean,inverted:Boolean,items:Array,rowActive:Function,rowClass:[Boolean,Function],rowColor:Function,rowDisabled:Function,rowError:Function,rowNegative:Function,rowPositive:Function,rowWarning:Function,rowsGroupBy:String,padded:[Boolean,String],selectable:Boolean,singleLine:Boolean,size:String,stackable:Boolean,striped:Boolean,structured:Boolean,unstackable:Boolean,...Ub()},setup(e,{emit:t,slots:a}){const{scrollingClasses:o}=Yb(e),s=M(()=>te("ui",e.color,e.size,b(e.celled,"celled"),b(e.collapsing,"collapsing"),b(e.definition,"definition"),b(e.fixed,"fixed"),b(e.inverted,"inverted"),b(e.selectable,"selectable"),b(e.singleLine,"single line"),b(e.stackable,"stackable"),b(e.striped,"striped"),b(e.structured,"structured"),b(e.unstackable,"unstackable"),Ie(e.attached,"attached"),Ie(e.basic,"basic"),Ie(e.compact,"compact"),Ie(e.padded,"padded"),ri(e.columns,"column"),o.value,"table")),u=M(()=>{var c;const p=(c=a.default)==null?void 0:c.call(a);return p==null?void 0:p.filter(d=>{var m;return((m=d.type)==null?void 0:m.name)==="Column"})});return()=>{var c;return!u.value||u.value.length===0?i("table",{class:s.value},[(c=a.default)==null?void 0:c.call(a)]):i("table",{class:s.value},[!e.hideHeader&&i(_d,{columns:u.value,definition:!!a.definition},{default:a.header}),i(vd,{columns:u.value,definitionClass:e.definitionClass,rows:e.items,rowsGroupBy:e.rowsGroupBy,rowActive:e.rowActive,rowClass:e.rowClass,rowColor:e.rowColor,rowDisabled:e.rowDisabled,rowError:e.rowError,rowNegative:e.rowNegative,rowPositive:e.rowPositive,rowWarning:e.rowWarning,"onRow-click":p=>e.selectable&&t("row:select",{data:p.data}),"onCell-click":p=>t("cell:select",{data:p.data,value:p.value})},{definition:a.definition}),i(bd,null,a.footer)])}}}),Kb=F({props:{singleLine:Boolean,textAlign:String,width:Number},setup(e){return{computedClass:M(()=>te(b(e.singleLine,"single line"),ze(e.textAlign,"aligned"),ri(e.width,"wide")))}},render(){var e,t,a,o;return this.computedClass?i("th",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)]):i("th",null,[(o=(a=this.$slots).default)==null?void 0:o.call(a)])}}),Xb=F({props:{active:Boolean,color:String,disabled:Boolean,error:Boolean,negative:Boolean,positive:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:M(()=>te(e.color,b(e.active,"active"),b(e.disabled,"disabled"),b(e.error,"error"),b(e.negative,"negative"),b(e.positive,"positive"),b(e.warning,"warning"),ze(e.textAlign,"aligned"),ze(e.verticalAlign,"aligned")))}},render(){var e,t,a,o;return this.computedClass?i("tr",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)]):i("tr",null,[(o=(a=this.$slots).default)==null?void 0:o.call(a)])}}),Jb=F({name:"Column",props:{active:Function,cellClass:[Boolean,Function],collapsing:Boolean,field:String,header:String,error:Function,color:Function,negative:Function,positive:Function,marked:Function,selectable:[Boolean,Function],warning:Function}}),Qb={install(e){e.component("SuiTable",Wb),e.component("SuiTableBody",vd),e.component("SuiTableCell",$l),e.component("SuiTableFooter",bd),e.component("SuiTableHeader",_d),e.component("SuiTableHeaderCell",Kb),e.component("SuiTableRow",Xb),e.component("SuiColumn",Jb)}};function Zb(e,t){e.indexOf(t)===-1&&e.push(t)}const Sd=(e,t,a)=>Math.min(Math.max(a,e),t),Ft={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},eo=e=>typeof e=="number",fn=e=>Array.isArray(e)&&!eo(e[0]),eS=(e,t,a)=>{const o=t-e;return((a-e)%o+o)%o+e};function tS(e,t){return fn(e)?e[eS(0,e.length,t)]:e}const yd=(e,t,a)=>-a*e+a*t+e,wd=()=>{},yi=e=>e,As=(e,t,a)=>t-e===0?1:(a-e)/(t-e);function Cd(e,t){const a=e[e.length-1];for(let o=1;o<=t;o++){const s=As(0,t,o);e.push(yd(a,1,s))}}function iS(e){const t=[0];return Cd(t,e-1),t}function nS(e,t=iS(e.length),a=yi){const o=e.length,s=o-t.length;return s>0&&Cd(t,s),u=>{let c=0;for(;c<o-2&&!(u<t[c+1]);c++);let p=Sd(0,1,As(t[c],t[c+1],u));return p=tS(a,c)(p),yd(e[c],e[c+1],p)}}const xd=e=>Array.isArray(e)&&eo(e[0]),Tl=e=>typeof e=="object"&&!!e.createAnimation,An=e=>typeof e=="function",aS=e=>typeof e=="string",ea={ms:e=>e*1e3,s:e=>e/1e3},Ad=(e,t,a)=>(((1-3*a+3*t)*e+(3*a-6*t))*e+3*t)*e,oS=1e-7,lS=12;function sS(e,t,a,o,s){let u,c,p=0;do c=t+(a-t)/2,u=Ad(c,o,s)-e,u>0?a=c:t=c;while(Math.abs(u)>oS&&++p<lS);return c}function jn(e,t,a,o){if(e===t&&a===o)return yi;const s=u=>sS(u,0,1,e,a);return u=>u===0||u===1?u:Ad(s(u),t,o)}const rS=(e,t="end")=>a=>{a=t==="end"?Math.min(a,.999):Math.max(a,.001);const o=a*e,s=t==="end"?Math.floor(o):Math.ceil(o);return Sd(0,1,s/e)},Pr={ease:jn(.25,.1,.25,1),"ease-in":jn(.42,0,1,1),"ease-in-out":jn(.42,0,.58,1),"ease-out":jn(0,0,.58,1)},uS=/\((.*?)\)/;function Fr(e){if(An(e))return e;if(xd(e))return jn(...e);if(Pr[e])return Pr[e];if(e.startsWith("steps")){const t=uS.exec(e);if(t){const a=t[1].split(",");return rS(parseFloat(a[0]),a[1].trim())}}return yi}class kd{constructor(t,a=[0,1],{easing:o,duration:s=Ft.duration,delay:u=Ft.delay,endDelay:c=Ft.endDelay,repeat:p=Ft.repeat,offset:d,direction:m="normal",autoplay:f=!0}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=yi,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((_,x)=>{this.resolve=_,this.reject=x}),o=o||Ft.easing,Tl(o)){const _=o.createAnimation(a);o=_.easing,a=_.keyframes||a,s=_.duration||s}this.repeat=p,this.easing=fn(o)?yi:Fr(o),this.updateDuration(s);const h=nS(a,d,fn(o)?o.map(Fr):yi);this.tick=_=>{var x;u=u;let y=0;this.pauseTime!==void 0?y=this.pauseTime:y=(_-this.startTime)*this.rate,this.t=y,y/=1e3,y=Math.max(y-u,0),this.playState==="finished"&&this.pauseTime===void 0&&(y=this.totalDuration);const A=y/this.duration;let T=Math.floor(A),I=A%1;!I&&A>=1&&(I=1),I===1&&T--;const g=T%2;(m==="reverse"||m==="alternate"&&g||m==="alternate-reverse"&&!g)&&(I=1-I);const v=y>=this.totalDuration?1:Math.min(I,1),w=h(this.easing(v));t(w),this.pauseTime===void 0&&(this.playState==="finished"||y>=this.totalDuration+c)?(this.playState="finished",(x=this.resolve)===null||x===void 0||x.call(this,w)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},f&&this.play()}play(){const t=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=t-this.pauseTime:this.startTime||(this.startTime=t),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var t;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(t=this.reject)===null||t===void 0||t.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(t){this.duration=t,this.totalDuration=t*(this.repeat+1)}get currentTime(){return this.t}set currentTime(t){this.pauseTime!==void 0||this.rate===0?this.pauseTime=t:this.startTime=performance.now()-t/this.rate}get playbackRate(){return this.rate}set playbackRate(t){this.rate=t}}class cS{setAnimation(t){this.animation=t,t==null||t.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const No=new WeakMap;function Bd(e){return No.has(e)||No.set(e,{transforms:[],values:new Map}),No.get(e)}function dS(e,t){return e.has(t)||e.set(t,new cS),e.get(t)}const pS=["","X","Y","Z"],mS=["translate","scale","rotate","skew"],to={x:"translateX",y:"translateY",z:"translateZ"},Vr={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:e=>e+"deg"},fS={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:e=>e+"px"},rotate:Vr,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:yi},skew:Vr},da=new Map,ks=e=>`--motion-${e}`,io=["x","y","z"];mS.forEach(e=>{pS.forEach(t=>{io.push(e+t),da.set(ks(e+t),fS[e])})});const gS=(e,t)=>io.indexOf(e)-io.indexOf(t),hS=new Set(io),$d=e=>hS.has(e),_S=(e,t)=>{to[t]&&(t=to[t]);const{transforms:a}=Bd(e);Zb(a,t),e.style.transform=vS(a)},vS=e=>e.sort(gS).reduce(bS,"").trim(),bS=(e,t)=>`${e} ${t}(var(${ks(t)}))`,Ll=e=>e.startsWith("--"),Mr=new Set;function SS(e){if(!Mr.has(e)){Mr.add(e);try{const{syntax:t,initialValue:a}=da.has(e)?da.get(e):{};CSS.registerProperty({name:e,inherits:!1,syntax:t,initialValue:a})}catch{}}}const Go=(e,t)=>document.createElement("div").animate(e,t),Hr={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{Go({opacity:[1]})}catch{return!1}return!0},finished:()=>!!Go({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{Go({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},jo={},sn={};for(const e in Hr)sn[e]=()=>(jo[e]===void 0&&(jo[e]=Hr[e]()),jo[e]);const yS=.015,wS=(e,t)=>{let a="";const o=Math.round(t/yS);for(let s=0;s<o;s++)a+=e(As(0,o-1,s))+", ";return a.substring(0,a.length-2)},Or=(e,t)=>An(e)?sn.linearEasing()?`linear(${wS(e,t)})`:Ft.easing:xd(e)?CS(e):e,CS=([e,t,a,o])=>`cubic-bezier(${e}, ${t}, ${a}, ${o})`;function xS(e,t){for(let a=0;a<e.length;a++)e[a]===null&&(e[a]=a?e[a-1]:t());return e}const AS=e=>Array.isArray(e)?e:[e];function Dl(e){return to[e]&&(e=to[e]),$d(e)?ks(e):e}const Ia={get:(e,t)=>{t=Dl(t);let a=Ll(t)?e.style.getPropertyValue(t):getComputedStyle(e)[t];if(!a&&a!==0){const o=da.get(t);o&&(a=o.initialValue)}return a},set:(e,t,a)=>{t=Dl(t),Ll(t)?e.style.setProperty(t,a):e.style[t]=a}};function Td(e,t=!0){if(!(!e||e.playState==="finished"))try{e.stop?e.stop():(t&&e.commitStyles(),e.cancel())}catch{}}function kS(e,t){var a;let o=(t==null?void 0:t.toDefaultUnit)||yi;const s=e[e.length-1];if(aS(s)){const u=((a=s.match(/(-?[\d.]+)([a-z%]*)/))===null||a===void 0?void 0:a[2])||"";u&&(o=c=>c+u)}return o}function BS(){return window.__MOTION_DEV_TOOLS_RECORD}function $S(e,t,a,o={},s){const u=BS(),c=o.record!==!1&&u;let p,{duration:d=Ft.duration,delay:m=Ft.delay,endDelay:f=Ft.endDelay,repeat:h=Ft.repeat,easing:_=Ft.easing,persist:x=!1,direction:y,offset:A,allowWebkitAcceleration:T=!1,autoplay:I=!0}=o;const g=Bd(e),v=$d(t);let w=sn.waapi();v&&_S(e,t);const k=Dl(t),E=dS(g.values,k),V=da.get(k);return Td(E.animation,!(Tl(_)&&E.generator)&&o.record!==!1),()=>{const H=()=>{var J,Y;return(Y=(J=Ia.get(e,k))!==null&&J!==void 0?J:V==null?void 0:V.initialValue)!==null&&Y!==void 0?Y:0};let P=xS(AS(a),H);const G=kS(P,V);if(Tl(_)){const J=_.createAnimation(P,t!=="opacity",H,k,E);_=J.easing,P=J.keyframes||P,d=J.duration||d}if(Ll(k)&&(sn.cssRegisterProperty()?SS(k):w=!1),v&&!sn.linearEasing()&&(An(_)||fn(_)&&_.some(An))&&(w=!1),w){V&&(P=P.map(pe=>eo(pe)?V.toDefaultUnit(pe):pe)),P.length===1&&(!sn.partialKeyframes()||c)&&P.unshift(H());const J={delay:ea.ms(m),duration:ea.ms(d),endDelay:ea.ms(f),easing:fn(_)?void 0:Or(_,d),direction:y,iterations:h+1,fill:"both"};p=e.animate({[k]:P,offset:A,easing:fn(_)?_.map(pe=>Or(pe,d)):void 0},J),p.finished||(p.finished=new Promise((pe,Ae)=>{p.onfinish=pe,p.oncancel=Ae}));const Y=P[P.length-1];p.finished.then(()=>{x||(Ia.set(e,k,Y),p.cancel())}).catch(wd),T||(p.playbackRate=1.000001)}else if(s&&v)P=P.map(J=>typeof J=="string"?parseFloat(J):J),P.length===1&&P.unshift(parseFloat(H())),p=new s(J=>{Ia.set(e,k,G?G(J):J)},P,Object.assign(Object.assign({},o),{duration:d,easing:_}));else{const J=P[P.length-1];Ia.set(e,k,V&&eo(J)?V.toDefaultUnit(J):J)}return c&&u(e,t,P,{duration:d,delay:m,easing:_,repeat:h,offset:A},"motion-one"),E.setAnimation(p),p&&!I&&p.pause(),p}}const TS=(e,t)=>e[t]?Object.assign(Object.assign({},e),e[t]):Object.assign({},e);function LS(e,t){var a;return typeof e=="string"?t?((a=t[e])!==null&&a!==void 0||(t[e]=document.querySelectorAll(e)),e=t[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const DS=e=>e(),Ld=(e,t,a=Ft.duration)=>new Proxy({animations:e.map(DS).filter(Boolean),duration:a,options:t},ES),IS=e=>e.animations[0],ES={get:(e,t)=>{const a=IS(e);switch(t){case"duration":return e.duration;case"currentTime":return ea.s((a==null?void 0:a[t])||0);case"playbackRate":case"playState":return a==null?void 0:a[t];case"finished":return e.finished||(e.finished=Promise.all(e.animations.map(RS)).catch(wd)),e.finished;case"stop":return()=>{e.animations.forEach(o=>Td(o))};case"forEachNative":return o=>{e.animations.forEach(s=>o(s,e))};default:return typeof(a==null?void 0:a[t])>"u"?void 0:()=>e.animations.forEach(o=>o[t]())}},set:(e,t,a)=>{switch(t){case"currentTime":a=ea.ms(a);case"playbackRate":for(let o=0;o<e.animations.length;o++)e.animations[o][t]=a;return!0}return!1}},RS=e=>e.finished;function zS(e,t,a){return An(e)?e(t,a):e}function PS(e){return function(t,a,o={}){t=LS(t);const s=t.length,u=[];for(let c=0;c<s;c++){const p=t[c];for(const d in a){const m=TS(o,d);m.delay=zS(m.delay,c,s);const f=$S(p,d,a[d],m,e);u.push(f)}}return Ld(u,o,o.duration)}}const FS=PS(kd);function VS(e,t={}){return Ld([()=>{const a=new kd(e,[0,1],t);return a.finished.catch(()=>{}),a}],t,t.duration)}function MS(e,t,a){return(An(e)?VS:FS)(e,t,a)}const _e=(e,t)=>(a,{duration:o,keyframesOverride:s={}})=>MS(a,{...e,...s},{autoplay:!1,...t,duration:o}),qr=_e({transform:["scale(0.8) translateZ(0px)","scale(0.8) translateZ(0px)","scale(1.05) translateZ(0px)","scale(1) translateZ(0px)"],opacity:[null,.7,1,null],zIndex:[-1,-1,999,999]},{duration:.5,offset:[0,.1,.8,1]}),HS=_e({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,-1,null,-1]},{duration:.5,offset:[0,.5,.8,1]}),OS=_e({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,1,null,1]},{duration:.5,offset:[0,.5,.8,1]}),qS=_e({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(0)","scale(1)"],opacity:[0,1]},{duration:.4,offset:[0,1]}),NS=_e({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(1)","scale(0)"],opacity:[1,0]},{duration:.4,offset:[0,1]}),GS=_e({opacity:[0,1]},{duration:.5,offset:[0,1]}),jS=_e({opacity:[0,1],transform:["translateY(10%)","export translateY(0%)"]},{duration:.5,offset:[0,1]}),US=_e({opacity:[0,1],transform:["translateY(-10%)","translateY(0%)"]},{duration:.5,offset:[0,1]}),YS=_e({opacity:[0,1],transform:["translateX(10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),WS=_e({opacity:[0,1],transform:["translateX(-10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),KS=_e({opacity:[1,0]},{duration:.5,offset:[0,1]}),XS=_e({opacity:[1,0],transform:["translateY(0%)","texport ranslateY(5%)"]},{duration:.5,offset:[0,1]}),JS=_e({opacity:[1,0],transform:["translateY(0%)","translateY(-5%)"]},{duration:.5,offset:[0,1]}),QS=_e({opacity:[1,0],transform:["translateX(0%)","translateX(5%)"]},{duration:.5,offset:[0,1]}),ZS=_e({opacity:[1,0],transform:["translateX(0%)","translateX(-5%)"]},{duration:.5,offset:[0,1]}),e1=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["scale3d(.3, .3, .3)","scale3d(1.1, 1.1, 1.1)","scale3d(.9, .9, .9)","scale3d(1.03, 1.03, 1.03)","scale3d(.97, .97, .97)","scale3d(1, 1, 1)"],opacity:[0,null,null,1,null,1]},{duration:.6,offset:[0,.2,.4,.6,.8,1]}),t1=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, 1500px, 0","translate3d(0, -20px, 0)","translate3d(0, 10px, 0)","translate3d(0, -5px, 0)","translate3d(0, 0, 0)"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),i1=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, -1500px, 0","translate3d(0, 25px, 0)","translate3d(0, -10px, 0)","translate3d(0, 5px, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),n1=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(1500px, 0, 0","translate3d(-25px, 0, 0)","translate3d(10px, 0, 0)","translate3d(-5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),a1=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(-1500px, 0, 0","translate3d(25px, 0, 0)","translate3d(-10px, 0, 0)","translate3d(5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),o1=_e({transform:["scale3d(.9, .9, .9)","scale3d(1.1, 1.1, 1.1)","scale3d(1.1, 1.1, 1.1)","scale3d(.3, .3, .3)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.5,.55,1]}),l1=_e({transform:["translate3d(0, 10px, 0)","translate3d(0, -20px, 0)","translate3d(0, -20px, 0)","translate3d(0, 2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),s1=_e({transform:["translate3d(0, -10px, 0)","translate3d(0, 20px, 0)","translate3d(0, 20px, 0)","translate3d(0, -2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),r1=_e({transform:["translate3d(-20px, 0, 0)","translate3d(2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),u1=_e({transform:["translate3d(20px, 0, 0)","translate3d(-2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),c1=_e({transform:["perspective(2000px) rotateY(-90deg)","perspective(2000px) rotateY(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),d1=_e({transform:["perspective(2000px) rotateY(0deg)","perspective(2000px) rotateY(90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),p1=_e({transform:["perspective(2000px) rotateX(-90deg)","perspective(2000px) rotateX(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),m1=_e({transform:["perspective(2000px) rotateX(0deg)","perspective(2000px) rotateX(-90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),f1=_e({transform:["scale(0.8)","scale(1)"],opacity:[0,1]},{duration:.5,offset:[0,1]}),g1=_e({transform:["scale(1)","scale(0.9)"],opacity:[1,0]},{duration:.5,offset:[0,1]}),Dd={transform:["scaleY(0)","scaleY(1)"],opacity:[0,1]},Id={transform:["scaleX(0)","scaleX(1)"],opacity:[0,1]},Ed={transform:["scaleY(1)","scaleY(0)"],opacity:[1,0]},h1={transform:["scaleX(1)","scaleX(0)"],opacity:[1,0]},_1=_e({transformOrigin:"top center",...Dd},{offset:[0,1]}),v1=_e({transformOrigin:"bottom center",...Dd},{offset:[0,1]}),b1=_e({transformOrigin:"center right",...Id},{offset:[0,1]}),S1=_e({transformOrigin:"center left",...Id},{offset:[0,1]}),y1=_e({transformOrigin:"top center",...Ed},{offset:[0,1]}),w1=_e({transformOrigin:"bottom center",...Ed},{offset:[0,1]}),Nr=_e({transformOrigin:"center left",...h1},{offset:[0,1]}),ki=.8,gn={transform:["perspective(1000px) rotateX(90deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(15deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},hn={transform:["perspective(1000px) rotateY(-90deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-17.5deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},_n={transform:["perspective(1000px) rotateX(0deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(17.5deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},vn={transform:["perspective(1000px) rotateY(0deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(-10deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},C1=_e({transformOrigin:"top center",transform:gn.transform,opacity:gn.opacity},{duration:ki,offset:gn.offset}),x1=_e({transformOrigin:"bottom center",transform:gn.transform,opacity:gn.opacity},{duration:ki,offset:gn.offset}),A1=_e({transformOrigin:"center right",transform:hn.transform,opacity:hn.opacity},{duration:ki,offset:hn.offset}),k1=_e({transformOrigin:"center left",transform:hn.transform,opacity:hn.opacity},{duration:ki,offset:hn.offset}),B1=_e({transformOrigin:"top center",transform:_n.transform,opacity:_n.opacity},{duration:ki,offset:_n.offset}),$1=_e({transformOrigin:"bottom center",transform:_n.transform,opacity:_n.opacity},{duration:ki,offset:_n.offset}),T1=_e({transformOrigin:"center right",transform:vn.transform,opacity:vn.opacity},{duration:ki,offset:vn.offset}),L1=_e({transformOrigin:"center left",transform:vn.transform,opacity:vn.opacity},{duration:ki,offset:vn.offset}),D1=_e({transform:["scale(0)","scale(1)"],opacity:[1,1]},{offset:[0,1]}),I1=_e({transform:["scale(1)","scale(0)"],opacity:[1,1]},{offset:[0,1]}),E1=_e({transform:["translateY(0)","translateY(0)","translateY(-30px)","translateY(0)","translateY(-15px)","translateY(0)","translateY(0)"]},{offset:[0,.2,.4,.5,.6,.8,1]}),R1=_e({opacity:[1,0,1,0,1]},{offset:[0,.25,.5,.75,1]}),z1=_e({animationTimingFunction:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",backgroundColor:["#FCFCFD","#FFF6CD","FCFCFD"]},{duration:2,offset:[0,.3,1]}),P1=_e({transform:["scale3d(1, 1, 1)","scale3d(1.25, 0.75, 1)","scale3d(0.75, 1.25, 1)","scale3d(1.15, 0.85, 1)","scale3d(0.95, 1.05, 1)","scale3d(1.05, 0.95, 1)","scale3d(1, 1, 1)"]},{duration:.75,offset:[0,.3,.4,.5,.6,.75,1]}),F1=_e({transform:["scale(1)","scale(0.9)","scale(1)"],opacity:[1,.7,1]},{offset:[0,.5,1]}),V1=_e({transform:["translateX(0)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(0)"]}),M1=_e({transform:["scale(1)","scale(0.9) rotate(-3deg)","scale(0.9) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1) rotate(0)"]},{offset:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]}),H1={browse:[qr,HS],"browse right":[qr,OS],drop:[qS,NS],fade:[GS,KS],"fade up":[jS,XS],"fade down":[US,JS],"fade left":[YS,QS],"fade right":[WS,ZS],fly:[e1,o1],"fly up":[t1,l1],"fly down":[i1,s1],"fly left":[n1,r1],"fly right":[a1,u1],"horizontal flip":[c1,d1],"vertical flip":[p1,m1],scale:[f1,g1],"slide up":[v1,w1],"slide down":[_1,y1],"slide left":[b1,Nr],"slide right":[S1,Nr],"swing up":[x1,$1],"swing down":[C1,B1],"swing left":[A1,T1],"swing right":[k1,L1],zoom:[D1,I1]},O1={bounce:[E1,void 0],flash:[R1,void 0],glow:[z1,void 0],jiggle:[P1,void 0],pulse:[F1,void 0],shake:[V1,void 0],tada:[M1,void 0]},Rd=e=>({...H1,...O1})[e],q1=e=>{const[t,a]=Rd(e.animation),o=M(()=>e.duration?e.duration/1e3:.5),s=M(()=>(c,p)=>{if(!t)return p();const d=t(c,{duration:o.value});d.play(),d.finished.then(p)}),u=M(()=>(c,p)=>{if(!a)return p();const d=a(c,{duration:o.value});d.play(),d.finished.then(p)});return{onEnter:s,onLeave:u}},N1=F({props:{animation:{type:String,default:"fade"},duration:{type:Number,default:500}},setup(e){const{onEnter:t,onLeave:a}=q1(e);return{onEnter:t,onLeave:a}},render(){return i(yo,{onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,t;return[(t=(e=this.$slots).default)==null?void 0:t.call(e)]}})}}),zd=F({props:{tag:String,animation:{type:String,default:"fade"},enterKeyframes:{type:Function,default:()=>({})},leaveKeyframes:{type:Function,default:()=>({})}},setup(e){const[t,a]=Rd(e.animation),o=M(()=>(u,c)=>{if(!t)return c();const p=t(u,{duration:.5,keyframesOverride:e.enterKeyframes(u)});p.play(),p.finished.then(c)}),s=M(()=>(u,c)=>{if(!a)return c();const p=a(u,{duration:.5,keyframesOverride:e.leaveKeyframes(u)});p.play(),p.finished.then(c)});return{onEnter:o,onLeave:s}},render(){return i(Ac,{tag:this.tag,onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,t;return[(t=(e=this.$slots).default)==null?void 0:t.call(e)]}})}}),G1={install(e){e.component("SuiTransition",N1),e.component("SuiTransitionGroup",zd)}},j1=Object.freeze(Object.defineProperty({__proto__:null,Accordion:l_,Advertisement:r_,Breadcrumb:u_,Button:__,Calendar:E_,Card:O_,Checkbox:q_,Comment:Q_,Container:Z_,Dimmer:tv,Divider:iv,Dropdown:gv,Embed:_v,Emoji:vv,Feed:Tv,Flag:Lv,Form:Iv,Grid:Ev,Header:Rv,Icon:c_,Image:cv,Input:zv,Item:Gv,Label:uv,List:Xv,Menu:Zv,Message:ab,Modal:pb,Popup:gb,Progress:vb,Rail:Sb,Rating:Cb,Reveal:xb,Search:kb,Segment:$b,Sidebar:Lb,Slider:Ib,Statistic:zb,Step:qb,Tab:Gb,Table:Qb,Transition:G1},Symbol.toStringTag,{value:"Module"})),Pe=F({props:{active:Boolean,color:String,disabled:Boolean,fast:Boolean,indeterminate:Boolean,inline:[Boolean,String],inverted:Boolean,size:String,slow:Boolean,text:Boolean},setup(e,{slots:t}){return{computedClass:M(()=>{var a;return te("ui",e.color,e.size,b(e.active,"active"),b(e.disabled,"disabled"),b(e.fast,"fast"),b(e.indeterminate,"indeterminate"),b(e.inverted,"inverted"),b(e.slow,"slow"),b(e.text||!!((a=t.default)!=null&&a.call(t)),"text"),Ie(e.inline,"inline"),"loader")})}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),Uo=F({name:"SuiToastActions",props:{aligned:String,basic:Boolean,vertical:Boolean,...ws()},setup(e,{slots:t}){const a=M(()=>te("actions",e.basic&&"basic",e.aligned,e.vertical&&"vertical"));return()=>{var o;return e.attached?i(ft,{attached:e.attached,vertical:e.vertical},{default:()=>{var s;return[(s=t.default)==null?void 0:s.call(t)]}}):i("div",{class:a.value},[(o=t.default)==null?void 0:o.call(t)])}}}),U1=F({name:"SuiToastBox",props:{unclickable:Boolean,verticalAttached:Boolean},setup(e,{slots:t}){const a=M(()=>te("floating toast-box compact",e.unclickable&&"unclickable"));return()=>{var o,s;return e.verticalAttached?i("div",{class:a.value,style:"display: block !important;"},[i("div",{class:"vertical attached compact right"},[(o=t.default)==null?void 0:o.call(t)])]):i("div",{class:a.value,style:"display: block !important;"},[(s=t.default)==null?void 0:s.call(t)])}}});function Yo(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ct(e)}const Y1=F({name:"SuiToast",emits:["click","close"],props:{id:Number,displayTime:{type:Number,default:3e3},type:String,title:String,message:{type:String,required:!0},centered:Boolean,messageStyle:Boolean,actions:Function,actionsProps:Object,showProgress:{type:String},showProgressColor:String,showProgressUp:Boolean,inverted:Boolean,...Cs()},setup(e,{emit:t}){const{colorClasses:a}=xs(e),o=M(()=>{var c,p,d,m,f;return te(e.centered&&"center aligned",e.type||"neutral",a.value,"ui",e.messageStyle?"message":"toast",e.actions&&!((c=e.actionsProps)!=null&&c.vertical)&&"actions",((p=e.actionsProps)==null?void 0:p.attached)==="top"&&"bottom attached",((d=e.actionsProps)==null?void 0:d.attached)==="bottom"&&"top attached",((m=e.actionsProps)==null?void 0:m.attached)==="left"&&"left attached",((f=e.actionsProps)==null?void 0:f.vertical)&&"vertical","compact")}),s=j(e.showProgressUp?0:100),u=()=>{const c=e.displayTime/100;setTimeout(()=>{const p=setInterval(()=>{if(e.showProgressUp){s.value>=100&&clearInterval(p),s.value+=1;return}s.value<=0&&clearInterval(p),s.value-=1},c)},500)};return xi(()=>e.showProgress&&u()),setTimeout(()=>e.displayTime>0&&t("close"),e.displayTime+750),{classes:o,progress:s}},render(){var e;let t,a,o;return i(U1,{unclickable:!!this.actions,verticalAttached:((e=this.actionsProps)==null?void 0:e.attached)==="left"},{default:()=>{var s,u,c,p;return[this.showProgress==="top"&&i(Al,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null),this.actions&&(((s=this.actionsProps)==null?void 0:s.attached)==="top"||((u=this.actionsProps)==null?void 0:u.attached)==="left")&&i(Uo,this.actionsProps,Yo(t=this.actions({close:()=>this.$emit("close")}))?t:{default:()=>[t]}),i("div",{role:"alert",class:this.classes,onClick:()=>!this.actions&&this.$emit("click")},[i("div",{class:"content"},[this.title&&i("div",{class:"ui header"},[this.title]),i("div",{class:"message"},[this.message])]),this.actions&&!((c=this.actionsProps)!=null&&c.attached)&&i(Uo,this.actionsProps,Yo(a=this.actions({close:()=>this.$emit("close")}))?a:{default:()=>[a]})]),this.actions&&((p=this.actionsProps)==null?void 0:p.attached)==="bottom"&&i(Uo,this.actionsProps,Yo(o=this.actions({close:()=>this.$emit("close")}))?o:{default:()=>[o]}),this.showProgress==="bottom"&&i(Al,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null)]}})}}),W1=["top right","top center","top left","bottom right","bottom center","bottom left","centered"],K1=({defaultValue:e}={})=>({position:{type:String,validator:t=>W1.includes(t),default:e}}),X1=e=>({positionClasses:M(()=>e.position||"")});function J1(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ct(e)}const Q1=F({name:"SuiToastContainer",props:{horizontal:Boolean,...ws(),...K1({defaultValue:"top right"})},setup(e){const{items:t,remove:a}=Pd(),{attachedClasses:o}=gd(e),{positionClasses:s}=X1(e);return{classes:M(()=>te(o.value||s.value,"ui toast-container",e.horizontal&&"horizontal")),items:t,remove:a,enterKeyframes:u=>{if(!(u instanceof HTMLElement))return{};const c=[0,`${u.offsetHeight}px`],p=[0,`${parseInt(getComputedStyle(u).marginBottom,10)}px`];return{height:c,marginBottom:p}},leaveKeyframes:u=>{if(!(u instanceof HTMLElement))return{};const c=[`${u.offsetWidth}px`,0],p=[`${u.offsetHeight}px`,0],d=e.horizontal?{width:c}:{height:p},m=[`${parseInt(getComputedStyle(u).marginBottom,10)}px`,0];return{...d,marginBottom:m}}}},render(){let e;return i(vo,{to:"body"},{default:()=>[i("div",{class:this.classes},[i(zd,{animation:"scale",enterKeyframes:this.enterKeyframes,leaveKeyframes:this.leaveKeyframes},J1(e=this.items.filter(({position:t,attached:a})=>this.attached?a===this.attached:t===this.position).filter(({horizontal:t})=>this.horizontal===!!t).map(({id:t,...a})=>i(Y1,Zi({key:t},a,{onClick:()=>this.remove(t),onClose:()=>this.remove(t)}),null)))?e:{default:()=>[e]})])]})}}),Z1=j(1),Hn=j([]),Pd=()=>({items:Hn,add:e=>{e.position=e.position||"top right",Hn.value=[...Hn.value,{id:Z1.value++,...e}]},remove:e=>{Hn.value=Hn.value.filter(t=>t.id!==e)}}),st=()=>{var e;const t=(e=Jt())==null?void 0:e.appContext,{add:a}=Pd();return{toast:o=>{const{position:s,attached:u,horizontal:c}=o;iy({position:s,attached:u,horizontal:c})||ty(t,{position:s,attached:u,horizontal:c}),a(o)}}},ey=(e,{appContext:t,element:a}={})=>{const o=a||document.createElement("div");return t&&(e.appContext=t),Ja(e,o),{vNode:e,el:o}},ty=(e,{position:t="top right",attached:a,horizontal:o=!1}={})=>{const s=ee(Q1,{position:t,attached:a,horizontal:o}),{el:u}=ey(s,{appContext:e});return{vNode:s,el:u}},iy=({position:e="top right",attached:t,horizontal:a})=>{const o=t?`.ui.toast-container.${t}.attached`:`.ui.toast-container.${e.split(" ").join(".")}${a?".horizontal":":not(.horizontal)"}`;return document.querySelector(o)};function ny(e){Object.values({...j1}).map(t=>e.use(t))}const ay={install:ny},oy=Object.assign({inheritAttrs:!1},{__name:"DocSectionText",props:["label","onClick"],setup(e){const t=Wc(),a=M(()=>{const s=t.currentRoute.value.path;return s.lastIndexOf("/")===s.length-1?s.slice(0,-1):s}),o=s=>{s.preventDefault();const c=s.target.parentElement.getAttribute("href"),p=c.slice(c.indexOf("#")+1),d=document.getElementById(p);d&&d.scrollIntoView({behavior:"smooth"})};return(s,u)=>{const c=$("SuiHeader"),p=$("SuiGridColumn"),d=$("SuiGridRow");return S(),be(we,null,[i(d,null,{default:n(()=>[i(p,null,{default:n(()=>[i(c,{as:"h3",class:"doc-section-text"},{default:n(()=>[l($e(e.label)+" ",1),i(r(fs),{to:`${a.value}#${s.$attrs.id}`,target:"_self",onClick:o},{default:n(()=>[i(r(W),{name:"linkify",color:"grey",size:"small",link:"",fitted:""})]),_:1},8,["to"])]),_:1})]),_:1}),i(p,{textAlign:"right"},{default:n(()=>[i(r(W),{name:"code",color:"grey",link:"",onClick:e.onClick},null,8,["onClick"])]),_:1})]),_:1}),B("p",null,[Ni(s.$slots,"default",{},void 0,!0)])],64)}}}),ly=Ne(oy,[["__scopeId","data-v-a2b78897"]]),sy={class:"inner"},ry={__name:"DocSectionCode",props:["code","hideCode"],setup(e){return(t,a)=>{const o=$("SuiGridColumn"),s=$("SuiGridRow");return S(),C(s,null,{default:n(()=>[i(o,{width:16},{default:n(()=>[Ni(t.$slots,"default",{},void 0,!0)]),_:3}),i(o,{width:16,id:"accordion","aria-hidden":e.hideCode},{default:n(()=>[B("div",sy,[Si((S(),be("pre",null,[B("code",null,$e(e.code)+`
`,1)])),[[r(Va)]])])]),_:1},8,["aria-hidden"])]),_:3})}}},uy=Ne(ry,[["__scopeId","data-v-965e7ddc"]]),D={__name:"DocSection",props:["label","code"],setup(e){const t=j(!0),a=()=>t.value=!t.value;return(o,s)=>{const u=$("SuiGrid");return S(),be("section",null,[i(u,{columns:2},{default:n(()=>[i(ly,Zi({label:e.label,"on-click":a},o.$attrs),{default:n(()=>[Ni(o.$slots,"description")]),_:3},16,["label"]),i(uy,{code:e.code,"hide-code":t.value},{default:n(()=>[Ni(o.$slots,"example")]),_:3},8,["code","hide-code"])]),_:3})])}}},cy=`<template>
  <SuiButton @click="onClick">{{ label }}</SuiButton>
</template>

<script setup>
import { ref } from 'vue'
import { SuiButton } from 'vue-fomantic-ui'

const label = ref('Follow')
const onClick = () => label.value = label.value === 'Follow' ? 'Following' : 'Follow'
<\/script>`,dy={__name:"ButtonDoc",setup(e){const t=j("Follow"),a=()=>t.value=t.value==="Follow"?"Following":"Follow";return(o,s)=>(S(),C(D,{label:"Button",code:cy},{description:n(()=>[l(" A standard button ")]),example:n(()=>[i(r(z),{onClick:a},{default:n(()=>[l($e(t.value),1)]),_:1})]),_:1}))}},py=`<template>
  <SuiButton primary>Save</SuiButton>
  <SuiButton secondary>Okay</SuiButton>
  <SuiButton>Cancel</SuiButton>
</template>`,my={__name:"EmphasisDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Emphasis",code:py},{description:n(()=>[l(" A button can be formatted to show different levels of emphasis ")]),example:n(()=>[i(r(z),{primary:""},{default:n(()=>[l("Save")]),_:1}),i(r(z),{secondary:""},{default:n(()=>[l("Okay")]),_:1}),i(r(z),null,{default:n(()=>[l("Cancel")]),_:1})]),_:1}))}},fy=`<template>
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
</template>`,gy={__name:"AnimatedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Animated",code:fy},{description:n(()=>[l(" A button can animate to show hidden content ")]),example:n(()=>[i(r(z),{animated:""},{default:n(()=>[i(r(Di),{visible:""},{default:n(()=>[l("Next")]),_:1}),i(r(Di),{hidden:""},{default:n(()=>[i(r(W),{name:"arrow right"})]),_:1})]),_:1}),i(r(z),{animated:"vertical"},{default:n(()=>[i(r(Di),{visible:""},{default:n(()=>[i(r(W),{name:"shop"})]),_:1}),i(r(Di),{hidden:""},{default:n(()=>[l("Shop")]),_:1})]),_:1}),i(r(z),{animated:"fade"},{default:n(()=>[i(r(Di),{visible:""},{default:n(()=>[l(" Sign-up for a Pro account ")]),_:1}),i(r(Di),{hidden:""},{default:n(()=>[l("$12.99 a month")]),_:1})]),_:1})]),_:1}))}},hy=`<template>
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
</template>`,_y={__name:"LabeledDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Labeled",code:hy},{description:n(()=>[l(" A button can appear alongside a label ")]),example:n(()=>[i(r(z),{labeled:"right",as:"div"},{default:n(()=>[i(r(z),{icon:"heart",content:" Like"}),i(r(q),{basic:""},{default:n(()=>[l("2,048")]),_:1})]),_:1}),i(r(z),{labeled:"left",as:"div"},{default:n(()=>[i(r(q),{basic:"",pointing:"right"},{default:n(()=>[l("2,048")]),_:1}),i(r(z),{icon:"heart",content:" Like"})]),_:1}),i(r(z),{labeled:"left",as:"div"},{default:n(()=>[i(r(q),{basic:""},{default:n(()=>[l("1,048")]),_:1}),i(r(z),{icon:"fork"})]),_:1})]),_:1}))}},vy=`<template>
  <SuiButton icon="cloud" />
</template>`,by={__name:"IconDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Icon",code:vy},{description:n(()=>[l(" A button can have only an icon ")]),example:n(()=>[i(r(z),{icon:"cloud"})]),_:1}))}},Sy=`<template>
  <SuiButton labeled icon="pause" content="Pause" />
  <SuiButton labeled="right" icon="right arrow" content="Next" />
  <SuiButton labeled icon>
    <SuiIcon loading name="spinner" />
    Loading
  </SuiButton>
</template>`,yy={__name:"LabeledIconDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Labeled Icon",code:Sy},{description:n(()=>[l(" A button can use an icon as a label ")]),example:n(()=>[i(r(z),{labeled:"",icon:"pause",content:"Pause"}),i(r(z),{labeled:"right",icon:"right arrow",content:"Next"}),i(r(z),{labeled:"",icon:""},{default:n(()=>[i(r(W),{loading:"",name:"spinner"}),l(" Loading ")]),_:1})]),_:1}))}},wy=`<template>
  <SuiButton basic primary>Primary</SuiButton>
  <SuiButton basic secondary>Secondary</SuiButton>
  <SuiButton basic positive>Positive</SuiButton>
  <SuiButton basic negative>Negative</SuiButton>
</template>`,Cy={__name:"BasicDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Basic",code:wy},{description:n(()=>[l(" A basic button is less pronounced ")]),example:n(()=>[i(r(z),{basic:"",primary:""},{default:n(()=>[l("Primary")]),_:1}),i(r(z),{basic:"",secondary:""},{default:n(()=>[l("Secondary")]),_:1}),i(r(z),{basic:"",positive:""},{default:n(()=>[l("Positive")]),_:1}),i(r(z),{basic:"",negative:""},{default:n(()=>[l("Negative")]),_:1})]),_:1}))}},xy=`<template>
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
</template>`,Ay={__name:"TertiaryDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Tertiary",code:xy},{description:n(()=>[l(" An none bordered less important button ")]),example:n(()=>[i(r(z),{tertiary:"",primary:""},{default:n(()=>[l("Primary")]),_:1}),i(r(z),{tertiary:"",secondary:""},{default:n(()=>[l("Secondary")]),_:1}),i(r(z),{tertiary:"",color:"red"},{default:n(()=>[l("Red")]),_:1}),i(r(z),{tertiary:"",color:"orange"},{default:n(()=>[l("Orange")]),_:1}),i(r(z),{tertiary:"",color:"yellow"},{default:n(()=>[l("Yellow")]),_:1}),i(r(z),{tertiary:"",color:"olive"},{default:n(()=>[l("Olive")]),_:1}),i(r(z),{tertiary:"",color:"green"},{default:n(()=>[l("Green")]),_:1}),i(r(z),{tertiary:"",color:"teal"},{default:n(()=>[l("Teal")]),_:1}),i(r(z),{tertiary:"",color:"blue"},{default:n(()=>[l("Blue")]),_:1}),i(r(z),{tertiary:"",color:"violet"},{default:n(()=>[l("Violet")]),_:1}),i(r(z),{tertiary:"",color:"purple"},{default:n(()=>[l("Purple")]),_:1}),i(r(z),{tertiary:"",color:"pink"},{default:n(()=>[l("Pink")]),_:1}),i(r(z),{tertiary:"",color:"brown"},{default:n(()=>[l("Brown")]),_:1}),i(r(z),{tertiary:"",color:"grey"},{default:n(()=>[l("Grey")]),_:1}),i(r(z),{tertiary:"",color:"black"},{default:n(()=>[l("Black")]),_:1})]),_:1}))}},ky=`<template>
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
</template>`,By={__name:"InvertedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Inverted",code:ky},{description:n(()=>[l(" A button can be formatted to appear on dark backgrounds ")]),example:n(()=>[i(r(O),{inverted:""},{default:n(()=>[i(r(z),{inverted:"",primary:""},{default:n(()=>[l("Primary")]),_:1}),i(r(z),{inverted:"",secondary:""},{default:n(()=>[l("Secondary")]),_:1}),i(r(z),{inverted:"",color:"red"},{default:n(()=>[l("Red")]),_:1}),i(r(z),{inverted:"",color:"orange"},{default:n(()=>[l("Orange")]),_:1}),i(r(z),{inverted:"",color:"yellow"},{default:n(()=>[l("Yellow")]),_:1}),i(r(z),{inverted:"",color:"olive"},{default:n(()=>[l("Olive")]),_:1}),i(r(z),{inverted:"",color:"green"},{default:n(()=>[l("Green")]),_:1}),i(r(z),{inverted:"",color:"teal"},{default:n(()=>[l("Teal")]),_:1}),i(r(z),{inverted:"",color:"blue"},{default:n(()=>[l("Blue")]),_:1}),i(r(z),{inverted:"",color:"violet"},{default:n(()=>[l("Violet")]),_:1}),i(r(z),{inverted:"",color:"purple"},{default:n(()=>[l("Purple")]),_:1}),i(r(z),{inverted:"",color:"pink"},{default:n(()=>[l("Pink")]),_:1}),i(r(z),{inverted:"",color:"brown"},{default:n(()=>[l("Brown")]),_:1}),i(r(z),{inverted:"",color:"grey"},{default:n(()=>[l("Grey")]),_:1}),i(r(z),{inverted:"",color:"black"},{default:n(()=>[l("Black")]),_:1})]),_:1})]),_:1}))}},$y=`<template>
  <SuiButtonGroup>
    <SuiButton content="One" />
    <SuiButton content="Two" />
    <SuiButton content="Three" />
  </SuiButtonGroup>
</template>`,Ty={__name:"ButtonsDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Buttons",code:$y},{description:n(()=>[l(" Buttons can exist together as a group ")]),example:n(()=>[i(r(ft),null,{default:n(()=>[i(r(z),{content:"One"}),i(r(z),{content:"Two"}),i(r(z),{content:"Three"})]),_:1})]),_:1}))}},Ly=`<template>
  <SuiButtonGroup icon>
    <SuiButton icon="align left" />
    <SuiButton icon="align center" />
    <SuiButton icon="align right" />
    <SuiButton icon="align justify" />
  </SuiButtonGroup>
</template>`,Dy={__name:"IconButtonsDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Icon Buttons",code:Ly},{description:n(()=>[l(" Button groups can show groups of icons ")]),example:n(()=>[i(r(ft),{icon:""},{default:n(()=>[i(r(z),{icon:"align left"}),i(r(z),{icon:"align center"}),i(r(z),{icon:"align right"}),i(r(z),{icon:"align justify"})]),_:1})]),_:1}))}},Iy=B("div",{class:"or"},null,-1),Ey=B("div",{class:"or","data-text":"ou"},null,-1),Ry=`<template>
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
</template>`,zy={__name:"ConditionalsDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Conditionals",code:Ry},{description:n(()=>[l(" Button groups can contain conditionals ")]),example:n(()=>[i(r(ft),null,{default:n(()=>[i(r(z),{content:"Cancel"}),Iy,i(r(z),{content:"Save",positive:""})]),_:1}),i(r(ft),null,{default:n(()=>[i(r(z),{content:"un"}),Ey,i(r(z),{content:"deux",positive:""})]),_:1})]),_:1}))}},Py=`<template>
  <SuiButton active icon="user" content=" Follow" />
</template>`,Fy={__name:"ActiveDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Active",code:Py},{description:n(()=>[l(" A button can show it is currently the active user selection ")]),example:n(()=>[i(r(z),{active:"",icon:"user",content:" Follow"})]),_:1}))}},Vy=`<template>
  <SuiButton disabled icon="user" content=" Followed" />
</template>`,My={__name:"DisabledDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Disabled",code:Vy},{description:n(()=>[l(" A button can show it is currently unable to be interacted with ")]),example:n(()=>[i(r(z),{disabled:"",icon:"user",content:" Followed"})]),_:1}))}},Hy=`<template>
  <SuiButton loading content="Loading" />
  <SuiButton loading="double" primary content="Loading" />
  <SuiButton loading="elastic" secondary content="Loading" />
</template>`,Oy={__name:"LoadingDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Loading",code:Hy},{description:n(()=>[l(" A button can show a loading indicator ")]),example:n(()=>[i(r(z),{loading:"",content:"Loading"}),i(r(z),{loading:"double",primary:"",content:"Loading"}),i(r(z),{loading:"elastic",secondary:"",content:"Loading"})]),_:1}))}},qy=`<template>
  <SuiButton facebook icon="facebook" content=" Facebook" />
  <SuiButton twitter icon="twitter" content=" Twitter" />
  <SuiButton vk icon="vk" content="VK" />
  <SuiButton linkedin icon="linkedin" content=" LinkedIn" />
  <SuiButton instagram icon="instagram" content=" Instagram" />
  <SuiButton youtube icon="youtube" content=" YouTube" />
  <SuiButton whatsapp icon="whatsapp" content=" WhatsApp" />
  <SuiButton telegram icon="telegram" content=" Telegram" />
</template>`,Ny={__name:"SocialDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Social",code:qy},{description:n(()=>[l(" A button can be formatted to link to a social website ")]),example:n(()=>[i(r(z),{facebook:"",icon:"facebook",content:" Facebook"}),i(r(z),{twitter:"",icon:"twitter",content:" Twitter"}),i(r(z),{vk:"",icon:"vk",content:"VK"}),i(r(z),{linkedin:"",icon:"linkedin",content:" LinkedIn"}),i(r(z),{instagram:"",icon:"instagram",content:" Instagram"}),i(r(z),{youtube:"",icon:"youtube",content:" YouTube"}),i(r(z),{whatsapp:"",icon:"whatsapp",content:" WhatsApp"}),i(r(z),{telegram:"",icon:"telegram",content:" Telegram"})]),_:1}))}},Gy=`<template>
  <SuiButton size="mini" content="Mini" />
  <SuiButton size="tiny" content="Tiny" />
  <SuiButton size="small" content="Small" />
  <SuiButton size="medium" content="Medium" />
  <SuiButton size="large" content="Large" />
  <SuiButton size="big" content="Big" />
  <SuiButton size="huge" content="Huge" />
  <SuiButton size="massive" content="Massive" />
</template>`,jy={__name:"SizeDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Size",code:Gy},{description:n(()=>[l(" A button can have different sizes ")]),example:n(()=>[i(r(z),{size:"mini",content:"Mini"}),i(r(z),{size:"tiny",content:"Tiny"}),i(r(z),{size:"small",content:"Small"}),i(r(z),{size:"medium",content:"Medium"}),i(r(z),{size:"large",content:"Large"}),i(r(z),{size:"big",content:"Big"}),i(r(z),{size:"huge",content:"Huge"}),i(r(z),{size:"massive",content:"Massive"})]),_:1}))}},Uy=`<template>
  <SuiButton floated="left" content="Left Floated" />
  <SuiButton floated="right" content="Right Floated" />
</template>`,Yy={__name:"FloatedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Floated",code:Uy},{description:n(()=>[l(" A button can be aligned to the left or right of its container ")]),example:n(()=>[i(r(z),{floated:"left",content:"Left Floated"}),i(r(z),{floated:"right",content:"Right Floated"})]),_:1}))}},Wy=`<template>
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
</template>`,Ky={__name:"ColoredDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Colored",code:Wy},{description:n(()=>[l(" A button can have different colors ")]),example:n(()=>[i(r(z),{color:"red"},{default:n(()=>[l("Red")]),_:1}),i(r(z),{color:"orange"},{default:n(()=>[l("Orange")]),_:1}),i(r(z),{color:"yellow"},{default:n(()=>[l("Yellow")]),_:1}),i(r(z),{color:"olive"},{default:n(()=>[l("Olive")]),_:1}),i(r(z),{color:"green"},{default:n(()=>[l("Green")]),_:1}),i(r(z),{color:"teal"},{default:n(()=>[l("Teal")]),_:1}),i(r(z),{color:"blue"},{default:n(()=>[l("Blue")]),_:1}),i(r(z),{color:"violet"},{default:n(()=>[l("Violet")]),_:1}),i(r(z),{color:"purple"},{default:n(()=>[l("Purple")]),_:1}),i(r(z),{color:"pink"},{default:n(()=>[l("Pink")]),_:1}),i(r(z),{color:"brown"},{default:n(()=>[l("Brown")]),_:1}),i(r(z),{color:"grey"},{default:n(()=>[l("Grey")]),_:1}),i(r(z),{color:"black"},{default:n(()=>[l("Black")]),_:1})]),_:1}))}},Xy=`<template>
  <SuiButton compact content="Hold" />
  <SuiButton compact icon="pause" />
  <SuiButton compact labeled icon="pause" content="Pause" />
</template>`,Jy={__name:"CompactDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Compact",code:Xy},{description:n(()=>[l(" A button can reduce its padding to fit into tighter spaces ")]),example:n(()=>[i(r(z),{compact:"",content:"Hold"}),i(r(z),{compact:"",icon:"pause"}),i(r(z),{compact:"",labeled:"",icon:"pause",content:"Pause"})]),_:1}))}},Qy=`<template>
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
<\/script>`,Zy={__name:"ToggleDoc",setup(e){const t=j(!1);return(a,o)=>(S(),C(D,{label:"Toggle",code:Qy},{description:n(()=>[l(" A button can be formatted to toggle on and off ")]),example:n(()=>[i(r(z),{toggle:"",active:t.value,onClick:()=>t.value=!t.value,content:t.value?"Voted":"Vote",style:{"min-width":"200px"}},null,8,["active","onClick","content"])]),_:1}))}},ew=`<template>
  <SuiButton positive content="Positive Button" />
</template>`,tw={__name:"PositiveDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Positive",code:ew},{description:n(()=>[l(" A button can hint towards a positive consequence ")]),example:n(()=>[i(r(z),{positive:"",content:"Positive Button"})]),_:1}))}},iw=`<template>
  <SuiButton negative content="Negative Button" />
</template>`,nw={__name:"NegativeDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Negative",code:iw},{description:n(()=>[l(" A button can hint towards a negative consequence ")]),example:n(()=>[i(r(z),{negative:"",content:"Negative Button"})]),_:1}))}},aw=`<template>
  <SuiButton fluid content="Fits container" />
</template>`,ow={__name:"FluidDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Fluid",code:aw},{description:n(()=>[l(" A button can take the width of its container ")]),example:n(()=>[i(r(z),{fluid:"",content:"Fits container"})]),_:1}))}},lw=`<template>
  <SuiButton circular icon="settings" />
</template>`,sw={__name:"CircularDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Circular",code:lw},{description:n(()=>[l(" A button can be circular ")]),example:n(()=>[i(r(z),{circular:"",icon:"settings"})]),_:1}))}},rw=B("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?",-1),uw=`<template>
  <SuiButton attached="top" content="Top" />
  <SuiSegment>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?</p>
  </SuiSegment>
  <SuiButton attached="bottom" content="Bottom" />
</template>`,cw={__name:"VerticallyAttachedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Vertically Attached",code:uw},{description:n(()=>[l(" A button can be attached to the top or bottom of other content ")]),example:n(()=>[i(r(z),{attached:"top",content:"Top"}),i(r(O),{attached:""},{default:n(()=>[rw]),_:1}),i(r(z),{attached:"bottom",content:"Bottom"})]),_:1}))}},dw=`<template>
  <SuiButton attached="left" content="Left" />
  <SuiButton attached="right" content="Right" />
</template>`,pw={__name:"HorizontallyAttachedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Horizontally Attached",code:dw},{description:n(()=>[l(" A button can be attached to the left or right of other content ")]),example:n(()=>[i(r(z),{attached:"left",content:"Left"}),i(r(z),{attached:"right",content:"Right"})]),_:1}))}},mw=`<template>
  <SuiButtonGroup vertical>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,fw={__name:"VerticalButtonsDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Vertical Buttons",code:mw},{description:n(()=>[l(" Groups can be formatted to appear vertically ")]),example:n(()=>[i(r(ft),{vertical:""},{default:n(()=>[i(r(z),null,{default:n(()=>[l("Feed")]),_:1}),i(r(z),null,{default:n(()=>[l("Messages")]),_:1}),i(r(z),null,{default:n(()=>[l("Events")]),_:1}),i(r(z),null,{default:n(()=>[l("Photos")]),_:1})]),_:1})]),_:1}))}},gw=`<template>
  <SuiButtonGroup stackable>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,hw={__name:"StackableButtonsDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Stackable Buttons",code:gw},{description:n(()=>[l(" Horizontal groups can automatically be stacked on mobile devices ")]),example:n(()=>[i(r(ft),{stackable:""},{default:n(()=>[i(r(z),null,{default:n(()=>[l("Feed")]),_:1}),i(r(z),null,{default:n(()=>[l("Messages")]),_:1}),i(r(z),null,{default:n(()=>[l("Events")]),_:1}),i(r(z),null,{default:n(()=>[l("Photos")]),_:1})]),_:1})]),_:1}))}},_w=`<template>
  <SuiButtonGroup vertical labeled icon>
    <SuiButton icon="pause" content="Pause" />
    <SuiButton icon="play" content="Play" />
    <SuiButton icon="shuffle" content="Shuffle" />
  </SuiButtonGroup>
</template>`,vw={__name:"LabeledIconButtonsDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Icon Buttons",code:_w},{description:n(()=>[l(" Groups can be formatted as labeled icons ")]),example:n(()=>[i(r(ft),{vertical:"",labeled:"",icon:""},{default:n(()=>[i(r(z),{icon:"pause",content:"Pause"}),i(r(z),{icon:"play",content:"Play"}),i(r(z),{icon:"shuffle",content:"Shuffle"})]),_:1})]),_:1}))}},bw=`<template>
  <SuiButtonGroup>
    <SuiButton labeled icon="left chevron" content="Back" />
    <SuiButton icon="stop" content="Stop" />
    <SuiButton icon labeled="right">
      <SuiIcon name="right chevron" />
      Forward
    </SuiButton>
  </SuiButtonGroup>
</template>`,Sw={__name:"MixedGroupDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Mixed Group",code:bw},{description:n(()=>[l(" Button groups can show groups of icons ")]),example:n(()=>[i(r(ft),null,{default:n(()=>[i(r(z),{labeled:"",icon:"left chevron",content:"Back"}),i(r(z),{icon:"stop",content:"Stop"}),i(r(z),{icon:"",labeled:"right"},{default:n(()=>[i(r(W),{name:"right chevron"}),l(" Forward ")]),_:1})]),_:1})]),_:1}))}},yw=`<template>
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
</template>`,ww={__name:"EqualWidthDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Equal Width",code:yw},{description:n(()=>[l(" Groups can have their widths divided evenly ")]),example:n(()=>[i(r(ft),{widths:5},{default:n(()=>[i(r(z),null,{default:n(()=>[l("Overview")]),_:1}),i(r(z),null,{default:n(()=>[l("Specs")]),_:1}),i(r(z),null,{default:n(()=>[l("Warranty")]),_:1}),i(r(z),null,{default:n(()=>[l("Reviews")]),_:1}),i(r(z),null,{default:n(()=>[l("Support")]),_:1})]),_:1}),i(r(ft),{widths:3},{default:n(()=>[i(r(z),null,{default:n(()=>[l("Overview")]),_:1}),i(r(z),null,{default:n(()=>[l("Specs")]),_:1}),i(r(z),null,{default:n(()=>[l("Support")]),_:1})]),_:1})]),_:1}))}},Cw=`<template>
  <SuiButtonGroup color="blue">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,xw={__name:"ColoredButtonsDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Colored Buttons",code:Cw},{description:n(()=>[l(" Groups can have a shared color ")]),example:n(()=>[i(r(ft),{color:"blue"},{default:n(()=>[i(r(z),null,{default:n(()=>[l("One")]),_:1}),i(r(z),null,{default:n(()=>[l("Two")]),_:1}),i(r(z),null,{default:n(()=>[l("Three")]),_:1})]),_:1})]),_:1}))}},Aw=`<template>
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
</template>`,kw={__name:"BasicButtonsDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Basic Buttons",code:Aw},{description:n(()=>[l(" A button group can be less pronounced ")]),example:n(()=>[i(r(ft),{basic:""},{default:n(()=>[i(r(z),null,{default:n(()=>[l("One")]),_:1}),i(r(z),null,{default:n(()=>[l("Two")]),_:1}),i(r(z),null,{default:n(()=>[l("Three")]),_:1})]),_:1}),i(r(ft),null,{default:n(()=>[i(r(z),{basic:"",color:"red"},{default:n(()=>[l("One")]),_:1}),i(r(z),{basic:"",color:"blue"},{default:n(()=>[l("Two")]),_:1}),i(r(z),{basic:"",color:"green"},{default:n(()=>[l("Three")]),_:1})]),_:1})]),_:1}))}},Bw=`<template>
  <SuiButtonGroup size="large">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,$w={__name:"GroupSizesDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Group Sizes",code:Bw},{description:n(()=>[l(" Groups can have a shared color ")]),example:n(()=>[i(r(ft),{size:"large"},{default:n(()=>[i(r(z),null,{default:n(()=>[l("One")]),_:1}),i(r(z),null,{default:n(()=>[l("Two")]),_:1}),i(r(z),null,{default:n(()=>[l("Three")]),_:1})]),_:1})]),_:1}))}},Tw={__name:"Button",setup(e){const t=[{id:"button",label:"Button",category:"Types",component:dy},{id:"emphasis",label:"Emphasis",category:"Types",component:my},{id:"animated",label:"Animated",category:"Types",component:gy},{id:"labeled",label:"Labeled",category:"Types",component:_y},{id:"icon",label:"Icon",category:"Types",component:by},{id:"labeled-icon",label:"Labeled Icon",category:"Types",component:yy},{id:"basic",label:"Basic",category:"Types",component:Cy},{id:"tertiary",label:"Tertiary",category:"Types",component:Ay},{id:"inverted",label:"Inverted",category:"Types",component:By},{id:"buttons",label:"Buttons",category:"Groups",component:Ty},{id:"icon-buttons",label:"Icon Buttons",category:"Groups",component:Dy},{id:"content",label:"Content",category:"Content",component:zy},{id:"active",label:"Active",category:"States",component:Fy},{id:"disabled",label:"Disabled",category:"States",component:My},{id:"loading",label:"Loading",category:"States",component:Oy},{id:"social",label:"Social",category:"Variations",component:Ny},{id:"size",label:"Size",category:"Variations",component:jy},{id:"floated",label:"Floated",category:"Variations",component:Yy},{id:"colored",label:"Colored",category:"Variations",component:Ky},{id:"compact",label:"Compact",category:"Variations",component:Jy},{id:"toggle",label:"Toggle",category:"Variations",component:Zy},{id:"positive",label:"Positive",category:"Variations",component:tw},{id:"negative",label:"Negative",category:"Variations",component:nw},{id:"fluid",label:"Fluid",category:"Variations",component:ow},{id:"circular",label:"Circular",category:"Variations",component:sw},{id:"vertically-attached",label:"Vertically Attached",category:"Variations",component:cw},{id:"horizontally-attached",label:"Horizontally Attached",category:"Variations",component:pw},{id:"vertical-buttons",label:"Vertical Buttons",category:"Group Variations",component:fw},{id:"stackable-buttons",label:"Stackable Buttons",category:"Group Variations",component:hw},{id:"labeled-icon-buttons",label:"Labeled Icon Buttons",category:"Group Variations",component:vw},{id:"mixed-group",label:"Mixed Group",category:"Group Variations",component:Sw},{id:"equal-width",label:"Equal Width",category:"Group Variations",component:ww},{id:"colored-buttons",label:"Colored Buttons",category:"Group Variations",component:xw},{id:"basic-buttons",label:"Basic Buttons",category:"Group Variations",component:kw},{id:"group-sizes",label:"Group Sizes",category:"Group Variations",component:$w}];return(a,o)=>(S(),C(lt,{title:"Button",description:"A button indicates a possible user action","component-docs":t}))}},Lw=B("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Dw=`<template>
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
</template>`,Iw={__name:"ContainerDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Container",code:Dw},{description:n(()=>[l(" A standard container ")]),example:n(()=>[i(r(Hi),null,{default:n(()=>[Lw]),_:1})]),_:1}))}},Ew=B("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Rw=`<template>
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
</template>`,zw={__name:"TextContainerDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Text Container",code:Rw},{description:n(()=>[l(" A container can reduce its maximum width to more naturally accommodate a single column of text ")]),example:n(()=>[i(r(Hi),{text:""},{default:n(()=>[i(r(fe),{as:"h2"},{default:n(()=>[l("Header")]),_:1}),Ew]),_:1})]),_:1}))}},Pw=`<template>
  <SuiContainer textAlign="left">Left Aligned</SuiContainer>
  <SuiContainer textAlign="center">Center Aligned</SuiContainer>
  <SuiContainer textAlign="right">Right Aligned</SuiContainer>
</template>`,Fw={__name:"TextAlignmentDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Text Alignment",code:Pw},{description:n(()=>[l(" A container can specify its text alignment ")]),example:n(()=>[i(r(Hi),{textAlign:"left"},{default:n(()=>[l("Left Aligned")]),_:1}),i(r(Hi),{textAlign:"center"},{default:n(()=>[l("Center Aligned")]),_:1}),i(r(Hi),{textAlign:"right"},{default:n(()=>[l("Right Aligned")]),_:1})]),_:1}))}},Vw=B("p",null," Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today. ",-1),Mw=`<template>
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
</template>`,Hw={__name:"FluidDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Fluid",code:Mw},{description:n(()=>[l(" A fluid container has no maximum width ")]),example:n(()=>[i(r(Hi),{fluid:""},{default:n(()=>[i(r(fe),{as:"h2"},{default:n(()=>[l("Dogs Roles with Humans")]),_:1}),Vw]),_:1})]),_:1}))}},Ow={__name:"Container",setup(e){const t=[{id:"container",label:"Container",category:"Types",component:Iw},{id:"text-container",label:"Text Container",category:"Types",component:zw},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:Fw},{id:"fluid",label:"Fluid",category:"Variations",component:Hw}];return(a,o)=>(S(),C(lt,{title:"Container",description:"A container limits content to a maximum width","component-docs":t}))}},qw=`<template>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider />
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,Nw={__name:"DividerDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Divider",code:qw},{description:n(()=>[l(" A standard divider ")]),example:n(()=>[i(r(le),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),i(r(Fe)),i(r(le),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},Gw=B("label",null,"Username",-1),jw=B("input",{type:"text",placeholder:"Username"},null,-1),Uw=B("label",null,"Password",-1),Yw=B("input",{type:"password",placeholder:"Password"},null,-1),Ww=`<template>
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
</template>`,Kw={__name:"VerticalDividerDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Vertical Divider",code:Ww},{description:n(()=>[l(" A divider can segment content vertically. ")]),example:n(()=>[i(r(O),{placeholder:""},{default:n(()=>[i(r(ba),{columns:"equal"},{default:n(()=>[i(r(Bt),null,{default:n(()=>[i(r(Mt),null,{default:n(()=>[i(r(it),null,{default:n(()=>[Gw,jw]),_:1}),i(r(it),null,{default:n(()=>[Uw,Yw]),_:1}),i(r(z),{primary:""},{default:n(()=>[l("Login")]),_:1})]),_:1})]),_:1}),i(r(Bt),{textAlign:"middle"},{default:n(()=>[i(r(z),{secondary:"",icon:"signup",content:"Sign Up"})]),_:1})]),_:1}),i(r(Fe),{vertical:""},{default:n(()=>[l("Or")]),_:1})]),_:1})]),_:1}))}},Xw=`<template>
  <SuiSegment basic textAlign="center">
    <SuiInput icon="search" iconPosition="left" action="Search" placeholder="Order #" />
    <SuiDivider horizontal>Or</SuiDivider>
    <SuiButton labeled icon="add" color="green" content="Create New Order" />
  </SuiSegment>
</template>`,Jw={__name:"HorizontalDividerDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Horizontal Divider",code:Xw},{description:n(()=>[l(" A divider can segment content horizontally ")]),example:n(()=>[i(r(O),{basic:"",textAlign:"center"},{default:n(()=>[i(r(Ze),{icon:"search",iconPosition:"left",action:"Search",placeholder:"Order #"}),i(r(Fe),{horizontal:""},{default:n(()=>[l("Or")]),_:1}),i(r(z),{labeled:"",icon:"add",color:"green",content:"Create New Order"})]),_:1})]),_:1}))}},Qw=`<template>
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
</template>`,Zw={__name:"HorizontalAlignmentDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Horizontal Alignment",code:Qw},{description:n(()=>[l(" A horizontal divider can be aligned ")]),example:n(()=>[i(r(Fe),{horizontal:"",textAlign:"left"},{default:n(()=>[i(r(W),{name:"left align"}),l(" Left Aligned ")]),_:1}),i(r(Fe),{horizontal:"",textAlign:"center"},{default:n(()=>[i(r(W),{name:"center align"}),l(" Center Aligned ")]),_:1}),i(r(Fe),{horizontal:"",textAlign:"right"},{default:n(()=>[i(r(W),{name:"right align"}),l(" Right Aligned ")]),_:1})]),_:1}))}},eC=`<template>
  <SuiSegment inverted>
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider inverted />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider horizontal inverted>Horizontal</SuiDivider>
  </SuiSegment>
</template>`,tC={__name:"InvertedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Inverted",code:eC},{description:n(()=>[l(" A divider can have its colors inverted ")]),example:n(()=>[i(r(O),{inverted:""},{default:n(()=>[i(r(le),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),i(r(Fe),{inverted:""}),i(r(le),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),i(r(Fe),{horizontal:"",inverted:""},{default:n(()=>[l("Horizontal")]),_:1})]),_:1})]),_:1}))}},iC=`<template>
  <SuiSegment>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
    <SuiDivider fitted />
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
  </SuiSegment>
</template>`,nC={__name:"FittedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Inverted",code:iC},{description:n(()=>[l(" A divider can be fitted, without any space above or below it. ")]),example:n(()=>[i(r(O),null,{default:n(()=>[l(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),i(r(Fe),{fitted:""}),l(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. ")]),_:1})]),_:1}))}},aC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider hidden />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,oC={__name:"HiddenDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Hidden",code:aC},{description:n(()=>[l(" A hidden divider divides content without creating a dividing line ")]),example:n(()=>[i(r(fe),null,{default:n(()=>[l("Section One")]),_:1}),i(r(le),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),i(r(Fe),{hidden:""}),i(r(fe),null,{default:n(()=>[l("Section Two")]),_:1}),i(r(le),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},lC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider section />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,sC={__name:"SectionDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Section",code:lC},{description:n(()=>[l(" A divider can provide greater margins to divide sections of content ")]),example:n(()=>[i(r(fe),null,{default:n(()=>[l("Section One")]),_:1}),i(r(le),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),i(r(Fe),{section:""}),i(r(fe),null,{default:n(()=>[l("Section Two")]),_:1}),i(r(le),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},rC=`<template>
  <SuiSegment>
    <SuiHeader floated="right">Section One</SuiHeader>
    <SuiDivider clearing />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,uC={__name:"ClearingDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Clearing",code:rC},{description:n(()=>[l(" A divider can clear the contents above it ")]),example:n(()=>[i(r(O),null,{default:n(()=>[i(r(fe),{floated:"right"},{default:n(()=>[l("Section One")]),_:1}),i(r(Fe),{clearing:""}),i(r(le),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},cC=`<template>
  <SuiDivider size="mini">MINI</SuiDivider>
  <SuiDivider size="tiny">TINY</SuiDivider>
  <SuiDivider size="small">SMALL</SuiDivider>
  <SuiDivider size="large">LARGE</SuiDivider>
  <SuiDivider size="big">BIG</SuiDivider>
  <SuiDivider size="huge">HUGE</SuiDivider>
  <SuiDivider size="massive">MASSIVE</SuiDivider>
</template>`,dC={__name:"SizeDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Size",code:cC},{description:n(()=>[l(" A divider text can vary in size ")]),example:n(()=>[i(r(Fe),{horizontal:"",size:"mini"},{default:n(()=>[l("MINI")]),_:1}),i(r(Fe),{horizontal:"",size:"tiny"},{default:n(()=>[l("TINY")]),_:1}),i(r(Fe),{horizontal:"",size:"small"},{default:n(()=>[l("SMALL")]),_:1}),i(r(Fe),{horizontal:"",size:"large"},{default:n(()=>[l("LARGE")]),_:1}),i(r(Fe),{horizontal:"",size:"big"},{default:n(()=>[l("BIG")]),_:1}),i(r(Fe),{horizontal:"",size:"huge"},{default:n(()=>[l("HUGE")]),_:1}),i(r(Fe),{horizontal:"",size:"massive"},{default:n(()=>[l("MASSIVE")]),_:1})]),_:1}))}},pC={__name:"Divider",setup(e){const t=[{id:"divider",label:"Divider",category:"Types",component:Nw},{id:"vertical-divider",label:"Vertical Divider",category:"Types",component:Kw},{id:"horizontal-divider",label:"Horizontal Divider",category:"Types",component:Jw},{id:"horizontal-alignment",label:"Horizontal Alignment",category:"Types",component:Zw},{id:"inverted",label:"Inverted",category:"Variations",component:tC},{id:"fitted",label:"Fitted",category:"Variations",component:nC},{id:"hidden",label:"Hidden",category:"Variations",component:oC},{id:"section",label:"Section",category:"Variations",component:sC},{id:"clearing",label:"Clearing",category:"Variations",component:uC},{id:"size",label:"Size",category:"Variations",component:dC}];return(a,o)=>(S(),C(lt,{title:"Divider",description:"A divider visually segments content into groups","component-docs":t}))}},mC=`<template>
  <SuiEmoji name="anguished" disabled />
</template>`,fC={__name:"DisabledDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Disabled",code:mC},{description:n(()=>[l(" An emoji can show that it is disabled ")]),example:n(()=>[i(r(Lt),{name:"anguished",disabled:""})]),_:1}))}},gC=`<template>
  <SuiEmoji name="angel" loading />
  <SuiEmoji name="blush" loading />
  <SuiEmoji name="grin" loading />
</template>`,hC={__name:"LoadingDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Loading",code:gC},{description:n(()=>[l(" An emoji can be used as a simple loader ")]),example:n(()=>[i(r(Lt),{name:"angel",loading:""}),i(r(Lt),{name:"blush",loading:""}),i(r(Lt),{name:"grin",loading:""})]),_:1}))}},_C=`<template>
  <SuiEmoji name="relaxed" size="small" />
  <SuiEmoji name="relaxed" size="medium" />
  <SuiEmoji name="relaxed" size="large" />
  <SuiEmoji name="relaxed" size="big" />
</template>`,vC={__name:"SizeDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Size",code:_C},{description:n(()=>[l(" An emoji can vary in size ")]),example:n(()=>[i(r(Lt),{name:"relaxed",size:"small"}),i(r(Lt),{name:"relaxed",size:"medium"}),i(r(Lt),{name:"relaxed",size:"large"}),i(r(Lt),{name:"relaxed",size:"big"})]),_:1}))}},bC=`<template>
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
</template>`,SC={__name:"AutosizingDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Autosizing",code:bC},{description:n(()=>[l(" If no specific size class is given, all emojis are automatically sized according to the current element font-size ")]),example:n(()=>[i(r(fe),{size:"small"},{default:n(()=>[l(" Within a Header "),i(r(Lt),{name:"relaxed"})]),_:1}),i(r(z),{as:"div",size:"large"},{default:n(()=>[l(" Within a Button "),i(r(Lt),{name:"relaxed"})]),_:1}),i(r(q),{size:"massive"},{default:n(()=>[l(" Within a Label "),i(r(Lt),{name:"relaxed"})]),_:1})]),_:1}))}},yC=`<template>
  <SuiEmoji link name="slight_smile" size="medium" />
</template>`,wC={__name:"LinkDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Link",code:yC},{description:n(()=>[l(" An emoji can be formatted as a link ")]),example:n(()=>[i(r(Lt),{link:"",name:"slight_smile",size:"medium"})]),_:1}))}},CC={__name:"Emoji",setup(e){const t=[{id:"disabled",label:"Disabled",category:"States",component:fC},{id:"loading",label:"Loading",category:"States",component:hC},{id:"size",label:"Size",category:"Variations",component:vC},{id:"autosizing",label:"Autosizing",category:"Variations",component:SC},{id:"link",label:"Link",category:"Variations",component:wC}];return(a,o)=>(S(),C(lt,{title:"Emoji",description:"An emoji is a glyph used to represent an emotional state","component-docs":t}))}},xC=`<template>
  <SuiFlag name="de" size="small" />
  <SuiFlag name="fr" size="medium" />
  <SuiFlag name="li" size="large" />
  <SuiFlag name="jp" size="big" />
  <SuiFlag name="gb" size="huge" />
  <SuiFlag name="un" size="massive" />
</template>`,AC={__name:"SizeDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Size",code:xC},{description:n(()=>[l(" A flag can vary in size ")]),example:n(()=>[i(r(Wt),{name:"de",size:"small"}),i(r(Wt),{name:"fr",size:"medium"}),i(r(Wt),{name:"li",size:"large"}),i(r(Wt),{name:"jp",size:"big"}),i(r(Wt),{name:"gb",size:"huge"}),i(r(Wt),{name:"un",size:"massive"})]),_:1}))}},kC=`<template>
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
</template>`,BC={__name:"AutosizingDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Autosizing",code:kC},{description:n(()=>[l(" If no specific size class is given, all flags are automatically sized according to the current element font-size ")]),example:n(()=>[i(r(fe),{size:"small"},{default:n(()=>[l(" Within a Header "),i(r(Wt),{name:"us"})]),_:1}),i(r(z),{as:"div",size:"large"},{default:n(()=>[l(" Within a Button "),i(r(Wt),{name:"eu"})]),_:1}),i(r(q),{size:"massive"},{default:n(()=>[l(" Within a Label "),i(r(Wt),{name:"pirate"})]),_:1})]),_:1}))}},$C={__name:"Flag",setup(e){const t=[{id:"size",label:"Size",category:"Types",component:AC},{id:"autosizing",label:"Autosizing",category:"Types",component:BC}];return(a,o)=>(S(),C(lt,{title:"Flag",description:"A flag is used to represent a political state","component-docs":t}))}},TC=`<template>
  <SuiHeader as="h1">First Header</SuiHeader>
  <SuiHeader as="h2">Second Header</SuiHeader>
  <SuiHeader as="h3">Third Header</SuiHeader>
  <SuiHeader as="h4">Fourth Header</SuiHeader>
  <SuiHeader as="h5">Fifth Header</SuiHeader>
</template>`,LC={__name:"PageHeadersDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Page Headers",code:TC},{description:n(()=>[l(" Headers may be oriented to give the hierarchy of a section in the context of the page ")]),example:n(()=>[i(r(fe),{as:"h1"},{default:n(()=>[l("First Header")]),_:1}),i(r(fe),{as:"h2"},{default:n(()=>[l("Second Header")]),_:1}),i(r(fe),{as:"h3"},{default:n(()=>[l("Third Header")]),_:1}),i(r(fe),{as:"h4"},{default:n(()=>[l("Fourth Header")]),_:1}),i(r(fe),{as:"h5"},{default:n(()=>[l("Fifth Header")]),_:1})]),_:1}))}},DC=`<template>
  <SuiHeader size="huge">Huge Header</SuiHeader>
  <SuiHeader size="large">Large Header</SuiHeader>
  <SuiHeader size="medium">Medium Header</SuiHeader>
  <SuiHeader size="small">Small Header</SuiHeader>
  <SuiHeader size="tiny">Tiny Header</SuiHeader>
</template>`,IC={__name:"ContentHeadersDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Content Headers",code:DC},{description:n(()=>[l(" Headers may be oriented to give the importance of a section in the context of the content that surrounds it ")]),example:n(()=>[i(r(fe),{size:"huge"},{default:n(()=>[l("Huge Header")]),_:1}),i(r(fe),{size:"large"},{default:n(()=>[l("Large Header")]),_:1}),i(r(fe),{size:"medium"},{default:n(()=>[l("Medium Header")]),_:1}),i(r(fe),{size:"small"},{default:n(()=>[l("Small Header")]),_:1}),i(r(fe),{size:"tiny"},{default:n(()=>[l("Tiny Header")]),_:1})]),_:1}))}},EC=`<template>
  <SuiHeader icon>
    <SuiIcon name="settings" />
    <SuiHeaderContent>
      Account Settings
    </SuiHeaderContent>
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,RC={__name:"IconHeadersDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Icon Headers",code:EC},{description:n(()=>[l(" A header can be formatted to emphasize an icon ")]),example:n(()=>[i(r(fe),{icon:""},{default:n(()=>[i(r(W),{name:"settings"}),i(r(_s),null,{default:n(()=>[l(" Account Settings ")]),_:1}),i(r(Yi),null,{default:n(()=>[l(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},zC=B("span",null,"$10.99",-1),PC=`<template>
  <SuiHeader sub>Price</SuiHeader>
  <span>$10.99</span>
</template>`,FC={__name:"SubHeadersDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Sub Headers",code:PC},{description:n(()=>[l(" Headers may be formatted to label smaller or de-emphasized content. ")]),example:n(()=>[i(r(fe),{sub:""},{default:n(()=>[l("Price")]),_:1}),zC]),_:1}))}},VC=`<template>
  <SuiHeader as="h2">
    <SuiImage src="/images/avatar/large/steve.jpg" avatar />
    Steve
  </SuiHeader>
</template>`,MC={__name:"ImageDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Image",code:VC},{description:n(()=>[l(" A header may contain an image ")]),example:n(()=>[i(r(fe),{as:"h2"},{default:n(()=>[i(r(le),{src:"/vue-fomantic-ui/images/avatar/large/steve.jpg",avatar:""}),l(" Steve ")]),_:1})]),_:1}))}},HC=`<template>
  <SuiHeader as="h2">
    <SuiIcon name="plug" />
    <SuiHeaderContent>
      Uptime Guarantee
    </SuiHeaderContent>
  </SuiHeader>
</template>`,OC={__name:"IconDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Icon",code:HC},{description:n(()=>[l(" A header may contain an Icon ")]),example:n(()=>[i(r(fe),{as:"h2"},{default:n(()=>[i(r(W),{name:"plug"}),i(r(_s),null,{default:n(()=>[l(" Uptime Guarantee ")]),_:1})]),_:1})]),_:1}))}},qC=`<template>
  <SuiHeader as="h2">
    Account Settings
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,NC={__name:"SubheaderDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Subheader",code:qC},{description:n(()=>[l(" Headers may contain subheaders ")]),example:n(()=>[i(r(fe),{as:"h2"},{default:n(()=>[l(" Account Settings "),i(r(Yi),null,{default:n(()=>[l(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},GC=`<template>
  <SuiHeader disabled>
    Disabled Header
  </SuiHeader>
</template>`,jC={__name:"DisabledDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Disabled",code:GC},{description:n(()=>[l(" A header can show that it is inactive ")]),example:n(()=>[i(r(fe),{disabled:""},{default:n(()=>[l(" Disabled Header ")]),_:1})]),_:1}))}},UC=`<template>
  <SuiHeader as="h3" dividing>
    Dividing Header
  </SuiHeader>
</template>`,YC={__name:"DividingDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Dividing",code:UC},{description:n(()=>[l(" A header can be formatted to divide itself from the content below it ")]),example:n(()=>[i(r(fe),{as:"h3",dividing:""},{default:n(()=>[l(" Dividing Header ")]),_:1})]),_:1}))}},WC=`<template>
  <SuiHeader as="h3" block>
    Block Header
  </SuiHeader>
</template>`,KC={__name:"BlockDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Block",code:WC},{description:n(()=>[l(" A header can be formatted to appear inside a content block ")]),example:n(()=>[i(r(fe),{as:"h3",block:""},{default:n(()=>[l(" Block Header ")]),_:1})]),_:1}))}},XC=`<template>
  <SuiHeader as="h2" attached="top">
    Attached Header
  </SuiHeader>
  <SuiSegment attached>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </SuiSegment>
</template>`,JC={__name:"AttachedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Attached",code:XC},{description:n(()=>[l(" A header can be attached to other content, like a segment ")]),example:n(()=>[i(r(fe),{as:"h2",attached:"top"},{default:n(()=>[l(" Attached Header ")]),_:1}),i(r(O),{attached:""},{default:n(()=>[l(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),_:1})]),_:1}))}},QC=`<template>
  <SuiSegment clearing>
    <SuiHeader as="h3" floated="right">
      Go Forward
    </SuiHeader>
    <SuiHeader as="h3" floated="left">
      Go Back
    </SuiHeader>
  </SuiSegment>
</template>`,ZC={__name:"FloatingDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Floating",code:QC},{description:n(()=>[l(" A header can sit to the left or right of other content ")]),example:n(()=>[i(r(O),{clearing:""},{default:n(()=>[i(r(fe),{as:"h3",floated:"right"},{default:n(()=>[l(" Go Forward ")]),_:1}),i(r(fe),{as:"h3",floated:"left"},{default:n(()=>[l(" Go Back ")]),_:1})]),_:1})]),_:1}))}},e0=`<template>
  <SuiSegment>
    <SuiHeader as="h3" textAlign="right">Float Right</SuiHeader>
    <SuiHeader as="h3" textAlign="left">Float Left</SuiHeader>
    <SuiHeader as="h3" textAlign="justified">
      This text takes up the full width of the container
    </SuiHeader>
    <SuiHeader as="h3" textAlign="center">Centered</SuiHeader>
  </SuiSegment>
</template>`,t0={__name:"TextAlignmentDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Text Alignment",code:e0},{description:n(()=>[l(" A header can have its text aligned to a side ")]),example:n(()=>[i(r(O),null,{default:n(()=>[i(r(fe),{as:"h3",textAlign:"right"},{default:n(()=>[l("Float Right")]),_:1}),i(r(fe),{as:"h3",textAlign:"left"},{default:n(()=>[l("Float Left")]),_:1}),i(r(fe),{as:"h3",textAlign:"justified"},{default:n(()=>[l(" This text takes up the full width of the container ")]),_:1}),i(r(fe),{as:"h3",textAlign:"center"},{default:n(()=>[l("Centered")]),_:1})]),_:1})]),_:1}))}},i0=`<template>
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
</template>`,n0={__name:"ColoredDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Colored",code:i0},{description:n(()=>[l(" A header can be formatted with different colors ")]),example:n(()=>[i(r(fe),{as:"h4",primary:""},{default:n(()=>[l("Primary")]),_:1}),i(r(fe),{as:"h4",secondary:""},{default:n(()=>[l("Secondary")]),_:1}),i(r(fe),{as:"h4",color:"red"},{default:n(()=>[l("Red")]),_:1}),i(r(fe),{as:"h4",color:"orange"},{default:n(()=>[l("Orange")]),_:1}),i(r(fe),{as:"h4",color:"yellow"},{default:n(()=>[l("Yellow")]),_:1}),i(r(fe),{as:"h4",color:"olive"},{default:n(()=>[l("Olive")]),_:1}),i(r(fe),{as:"h4",color:"green"},{default:n(()=>[l("Green")]),_:1}),i(r(fe),{as:"h4",color:"teal"},{default:n(()=>[l("Teal")]),_:1}),i(r(fe),{as:"h4",color:"blue"},{default:n(()=>[l("Blue")]),_:1}),i(r(fe),{as:"h4",color:"purple"},{default:n(()=>[l("Purple")]),_:1}),i(r(fe),{as:"h4",color:"violet"},{default:n(()=>[l("Violet")]),_:1}),i(r(fe),{as:"h4",color:"pink"},{default:n(()=>[l("Pink")]),_:1}),i(r(fe),{as:"h4",color:"brown"},{default:n(()=>[l("Brown")]),_:1}),i(r(fe),{as:"h4",color:"grey"},{default:n(()=>[l("Grey")]),_:1})]),_:1}))}},a0=`<template>
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
</template>`,o0={__name:"InvertedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Colored",code:a0},{description:n(()=>[l(" A header can have its colors inverted for contrast ")]),example:n(()=>[i(r(O),{inverted:""},{default:n(()=>[i(r(fe),{as:"h4",inverted:"",color:"red"},{default:n(()=>[l("Red")]),_:1}),i(r(fe),{as:"h4",inverted:"",color:"orange"},{default:n(()=>[l("Orange")]),_:1}),i(r(fe),{as:"h4",inverted:"",color:"yellow"},{default:n(()=>[l("Yellow")]),_:1}),i(r(fe),{as:"h4",inverted:"",color:"olive"},{default:n(()=>[l("Olive")]),_:1}),i(r(fe),{as:"h4",inverted:"",color:"green"},{default:n(()=>[l("Green")]),_:1}),i(r(fe),{as:"h4",inverted:"",color:"teal"},{default:n(()=>[l("Teal")]),_:1}),i(r(fe),{as:"h4",inverted:"",color:"blue"},{default:n(()=>[l("Blue")]),_:1}),i(r(fe),{as:"h4",inverted:"",color:"purple"},{default:n(()=>[l("Purple")]),_:1}),i(r(fe),{as:"h4",inverted:"",color:"violet"},{default:n(()=>[l("Violet")]),_:1}),i(r(fe),{as:"h4",inverted:"",color:"pink"},{default:n(()=>[l("Pink")]),_:1}),i(r(fe),{as:"h4",inverted:"",color:"brown"},{default:n(()=>[l("Brown")]),_:1}),i(r(fe),{as:"h4",inverted:"",color:"grey"},{default:n(()=>[l("Grey")]),_:1})]),_:1})]),_:1}))}},l0={__name:"Header",setup(e){const t=[{id:"page-headers",label:"Page Headers",category:"Types",component:LC},{id:"content-headers",label:"Content Headers",category:"Types",component:IC},{id:"icon-headers",label:"Icon Headers",category:"Types",component:RC},{id:"sub-headers",label:"Sub Headers",category:"Types",component:FC},{id:"image",label:"Image",category:"Content",component:MC},{id:"icon",label:"Icon",category:"Content",component:OC},{id:"subheader",label:"Subheader",category:"Content",component:NC},{id:"disabled",label:"Disabled",category:"States",component:jC},{id:"dividing",label:"Dividing",category:"Variations",component:YC},{id:"block",label:"Block",category:"Variations",component:KC},{id:"attached",label:"Attached",category:"Variations",component:JC},{id:"floating",label:"Floating",category:"Variations",component:ZC},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:t0},{id:"colored",label:"Colored",category:"Variations",component:n0},{id:"inverted",label:"Inverted",category:"Variations",component:o0}];return(a,o)=>(S(),C(lt,{title:"Header",description:"A header provides a short summary of content","component-docs":t}))}},s0=`<template>
  <SuiIcon name="users" disabled />
</template>`,r0={__name:"DisabledDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Disabled",code:s0},{description:n(()=>[l(" An icon can show that it is disabled ")]),example:n(()=>[i(r(W),{name:"users",disabled:""})]),_:1}))}},u0=`<template>
  <SuiIcon name="spinner" loading />
  <SuiIcon name="notched circle" loading />
  <SuiIcon name="asterisk" loading />
</template>`,c0={__name:"LoadingDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Loading",code:u0},{description:n(()=>[l(" An icon can be used as a simple loader ")]),example:n(()=>[i(r(W),{name:"spinner",loading:""}),i(r(W),{name:"notched circle",loading:""}),i(r(W),{name:"asterisk",loading:""})]),_:1}))}},d0=B("br",null,null,-1),p0=`<template>
  <div>
    This icon
    <SuiIcon name="help" fitted />
    is fitted.
    <br />
    This icon
    <SuiIcon name="help" />
    is not fitted.
  </div>
</template>`,m0={__name:"FittedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Fitted",code:p0},{description:n(()=>[l(" An icon can be fitted, without any space to the left or right of it. ")]),example:n(()=>[B("div",null,[l(" This icon "),i(r(W),{name:"help",fitted:""}),l(" is fitted. "),d0,l(" This icon "),i(r(W),{name:"help"}),l(" is not fitted. ")])]),_:1}))}},f0=`<template>
  <SuiIcon name="home" size="mini" />
  <SuiIcon name="home" size="tiny" />
  <SuiIcon name="home" size="small" />
  <SuiIcon name="home" />
  <SuiIcon name="home" size="large" />
  <SuiIcon name="home" size="big" />
  <SuiIcon name="home" size="huge" />
  <SuiIcon name="home" size="massive" />
</template>`,g0={__name:"SizeDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Size",code:f0},{description:n(()=>[l(" An icon can vary in size ")]),example:n(()=>[i(r(W),{name:"home",size:"mini"}),i(r(W),{name:"home",size:"tiny"}),i(r(W),{name:"home",size:"small"}),i(r(W),{name:"home"}),i(r(W),{name:"home",size:"large"}),i(r(W),{name:"home",size:"big"}),i(r(W),{name:"home",size:"huge"}),i(r(W),{name:"home",size:"massive"})]),_:1}))}},h0=`<template>
  <SuiIcon name="close" link />
  <SuiIcon name="help" link />
</template>`,_0={__name:"LinkDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Link",code:h0},{description:n(()=>[l(" An icon can be formatted as a link ")]),example:n(()=>[i(r(W),{name:"close",link:""}),i(r(W),{name:"help",link:""})]),_:1}))}},v0=`<template>
  <SuiIcon name="cloud" flipped="horizontally" />
  <SuiIcon name="cloud" flipped="vertically" />
</template>`,b0={__name:"FlippedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Flipped",code:v0},{description:n(()=>[l(" An icon can be flipped ")]),example:n(()=>[i(r(W),{name:"cloud",flipped:"horizontally"}),i(r(W),{name:"cloud",flipped:"vertically"})]),_:1}))}},S0=`<template>
  <SuiIcon name="cloud" rotated="clockwise" />
  <SuiIcon name="cloud" rotated="counterclockwise" />
</template>`,y0={__name:"RotatedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Rotated",code:S0},{description:n(()=>[l(" An icon can be rotated ")]),example:n(()=>[i(r(W),{name:"cloud",rotated:"clockwise"}),i(r(W),{name:"cloud",rotated:"counterclockwise"})]),_:1}))}},w0=`<template>
  <SuiIcon name="users" circular />
  <SuiIcon name="users" circular color="teal" />
  <SuiIcon name="users" circular inverted />
  <SuiIcon name="users" circular inverted color="teal" />
</template>`,C0={__name:"CircularDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Circular",code:w0},{description:n(()=>[l(" An icon can be formatted to appear circular ")]),example:n(()=>[i(r(W),{name:"users",circular:""}),i(r(W),{name:"users",circular:"",color:"teal"}),i(r(W),{name:"users",circular:"",inverted:""}),i(r(W),{name:"users",circular:"",inverted:"",color:"teal"})]),_:1}))}},x0=`<template>
  <SuiIcon name="users" circular colored color="red" />
  <SuiIcon name="users" circular colored color="green" />
  <SuiIcon name="users" circular colored color="blue" />
</template>`,A0={__name:"CircularColoredDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Circular Colored",code:x0},{description:n(()=>[l(" The circular color can appear in the same color as the icon itself ")]),example:n(()=>[i(r(W),{name:"users",circular:"",colored:"",color:"red"}),i(r(W),{name:"users",circular:"",colored:"",color:"green"}),i(r(W),{name:"users",circular:"",colored:"",color:"blue"})]),_:1}))}},k0=`<template>
  <SuiIcon name="users" bordered />
  <SuiIcon name="users" bordered color="teal" />
  <SuiIcon name="users" bordered inverted color="black" />
  <SuiIcon name="users" bordered inverted color="teal" />
</template>`,B0={__name:"BorderedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Bordered",code:k0},{description:n(()=>[l(" An icon can be formatted to appear bordered ")]),example:n(()=>[i(r(W),{name:"users",bordered:""}),i(r(W),{name:"users",bordered:"",color:"teal"}),i(r(W),{name:"users",bordered:"",inverted:"",color:"black"}),i(r(W),{name:"users",bordered:"",inverted:"",color:"teal"})]),_:1}))}},$0=`<template>
  <SuiIcon name="users" bordered colored color="red" />
  <SuiIcon name="users" bordered colored color="green" />
  <SuiIcon name="users" bordered colored color="blue" />
</template>`,T0={__name:"BorderedColoredDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Bordered Colored",code:$0},{description:n(()=>[l(" The bordered color can appear in the same color as the icon itself ")]),example:n(()=>[i(r(W),{name:"users",bordered:"",colored:"",color:"red"}),i(r(W),{name:"users",bordered:"",colored:"",color:"green"}),i(r(W),{name:"users",bordered:"",colored:"",color:"blue"})]),_:1}))}},L0=`<template>
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
</template>`,D0={__name:"ColoredDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Colored",code:L0},{description:n(()=>[l(" An icon can be formatted with different colors ")]),example:n(()=>[i(r(W),{name:"users",primary:""}),i(r(W),{name:"users",secondary:""}),i(r(W),{name:"users",color:"red"}),i(r(W),{name:"users",color:"orange"}),i(r(W),{name:"users",color:"yellow"}),i(r(W),{name:"users",color:"olive"}),i(r(W),{name:"users",color:"green"}),i(r(W),{name:"users",color:"teal"}),i(r(W),{name:"users",color:"blue"}),i(r(W),{name:"users",color:"violet"}),i(r(W),{name:"users",color:"purple"}),i(r(W),{name:"users",color:"pink"}),i(r(W),{name:"users",color:"brown"}),i(r(W),{name:"users",color:"grey"}),i(r(W),{name:"users",color:"black"})]),_:1}))}},I0=`<template>
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
</template>`,E0={__name:"InvertedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Inverted",code:I0},{description:n(()=>[l(" An icon can have its colors inverted for contrast ")]),example:n(()=>[i(r(W),{name:"users",inverted:""}),i(r(W),{name:"users",inverted:"",primary:""}),i(r(W),{name:"users",inverted:"",secondary:""}),i(r(W),{name:"users",inverted:"",color:"red"}),i(r(W),{name:"users",inverted:"",color:"orange"}),i(r(W),{name:"users",inverted:"",color:"yellow"}),i(r(W),{name:"users",inverted:"",color:"olive"}),i(r(W),{name:"users",inverted:"",color:"green"}),i(r(W),{name:"users",inverted:"",color:"teal"}),i(r(W),{name:"users",inverted:"",color:"blue"}),i(r(W),{name:"users",inverted:"",color:"violet"}),i(r(W),{name:"users",inverted:"",color:"purple"}),i(r(W),{name:"users",inverted:"",color:"pink"}),i(r(W),{name:"users",inverted:"",color:"brown"}),i(r(W),{name:"users",inverted:"",color:"grey"})]),_:1}))}},R0=`<template>
  <SuiIconGroup size="huge">
    <SuiIcon name="circle outline" size="big" />
    <SuiIcon name="user" />
  </SuiIconGroup>
  <SuiIconGroup size="huge">
    <SuiIcon name="dont" size="big" color="red" />
    <SuiIcon name="user" color="black" />
  </SuiIconGroup>
</template>`,z0={__name:"IconsDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Icons",code:R0},{description:n(()=>[l(" Several icons can be used together as a group ")]),example:n(()=>[i(r(Ri),{size:"huge"},{default:n(()=>[i(r(W),{name:"circle outline",size:"big"}),i(r(W),{name:"user"})]),_:1}),i(r(Ri),{size:"huge"},{default:n(()=>[i(r(W),{name:"dont",size:"big",color:"red"}),i(r(W),{name:"user",color:"black"})]),_:1})]),_:1}))}},P0=`<template>
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
</template>`,F0={__name:"CornerIconDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Corner Icon",code:P0},{description:n(()=>[l(" A group of icons can display a smaller corner icon ")]),example:n(()=>[i(r(Ri),{size:"huge"},{default:n(()=>[i(r(W),{name:"puzzle"}),i(r(W),{name:"add",corner:"top left"})]),_:1}),i(r(Ri),{size:"huge"},{default:n(()=>[i(r(W),{name:"puzzle"}),i(r(W),{name:"add",corner:"top right"})]),_:1}),i(r(Ri),{size:"huge"},{default:n(()=>[i(r(W),{name:"puzzle"}),i(r(W),{name:"add",corner:"bottom left"})]),_:1}),i(r(Ri),{size:"huge"},{default:n(()=>[i(r(W),{name:"puzzle"}),i(r(W),{name:"add",corner:"bottom right"})]),_:1})]),_:1}))}},V0={__name:"Icon",setup(e){const t=[{id:"disabled",label:"Disabled",category:"States",component:r0},{id:"loading",label:"Loading",category:"States",component:c0},{id:"fitted",label:"Fitted",category:"Variations",component:m0},{id:"size",label:"Size",category:"Variations",component:g0},{id:"link",label:"Link",category:"Variations",component:_0},{id:"flipped",label:"Flipped",category:"Variations",component:b0},{id:"rotated",label:"Rotated",category:"Variations",component:y0},{id:"circular",label:"Circular",category:"Variations",component:C0},{id:"circular-colored",label:"Circular Colored",category:"Variations",component:A0},{id:"bordered",label:"Bordered",category:"Variations",component:B0},{id:"bordered-colored",label:"Bordered Colored",category:"Variations",component:T0},{id:"colored",label:"Colored",category:"Variations",component:D0},{id:"inverted",label:"Inverted",category:"Variations",component:E0},{id:"icons",label:"Icons",category:"Groups",component:z0},{id:"corner-icon",label:"Corner Icon",category:"Groups",component:F0}];return(a,o)=>(S(),C(lt,{title:"Icon",description:"An icon is a glyph used to represent something else","component-docs":t}))}},M0=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" />
</template>`,H0={__name:"ImageDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Image",code:M0},{description:n(()=>[l(" An image ")]),example:n(()=>[i(r(le),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}))}},O0=`<template>
  <SuiImage
    as="a"
    size="medium"
    href="https://google.com"
    src="/images/wireframe/image-text.png"
    target="_blank"
  />
</template>`,q0={__name:"ImageLinkDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Image Link",code:O0},{description:n(()=>[l(" An image can be formatted to link to other content ")]),example:n(()=>[i(r(le),{as:"a",size:"medium",href:"https://google.com",src:"/vue-fomantic-ui/images/wireframe/image-text.png",target:"_blank"})]),_:1}))}},N0=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" hidden />
</template>`,G0={__name:"HiddenDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Hidden",code:N0},{description:n(()=>[l(" An image can be hidden ")]),example:n(()=>[i(r(le),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png",hidden:""})]),_:1}))}},j0=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" disabled />
</template>`,U0={__name:"DisabledDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Disabled",code:j0},{description:n(()=>[l(" An image can show that it is disabled and cannot be selected ")]),example:n(()=>[i(r(le),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png",disabled:""})]),_:1}))}},Y0=B("span",null,"Username",-1),W0=`<template>
  <SuiImage src="/images/wireframe/square-image.png" avatar />
  <span>Username</span>
</template>`,K0={__name:"AvatarDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Avatar",code:W0},{description:n(()=>[l(" An image may be formatted to appear inline with text as an avatar ")]),example:n(()=>[i(r(le),{src:"/vue-fomantic-ui/images/wireframe/square-image.png",avatar:""}),Y0]),_:1}))}},X0=`<template>
  <SuiImage size="medium" src="/images/wireframe/white-image.png" bordered />
</template>`,J0={__name:"BorderedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Bordered",code:X0},{description:n(()=>[l(" An image may include a border to emphasize the edges of white or transparent content ")]),example:n(()=>[i(r(le),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/white-image.png",bordered:""})]),_:1}))}},Q0=`<template>
  <SuiImage src="/images/wireframe/image.png" fluid />
</template>`,Z0={__name:"FluidDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Fluid",code:Q0},{description:n(()=>[l(" An image can take up the width of its container ")]),example:n(()=>[i(r(le),{src:"/vue-fomantic-ui/images/wireframe/image.png",fluid:""})]),_:1}))}},ex=`<template>
  <SuiImage src="/images/wireframe/image.png" rounded />
</template>`,tx={__name:"RoundedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Rounded",code:ex},{description:n(()=>[l(" An image may appear rounded ")]),example:n(()=>[i(r(le),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png",rounded:""})]),_:1}))}},ix=`<template>
  <SuiImage src="/images/wireframe/square-image.png" circular />
</template>`,nx={__name:"CircularDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Circular",code:ix},{description:n(()=>[l(" An image may appear circular ")]),example:n(()=>[i(r(le),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/square-image.png",circular:""})]),_:1}))}},ax=B("span",null,"Top Aligned",-1),ox=B("span",null,"Middle Aligned",-1),lx=B("span",null,"Bottom Aligned",-1),sx=`<template>
  <SuiImage verticalAlign="top" size="tiny" src="/images/wireframe/image.png" />
  <span>Top Aligned</span>
  <SuiDivider />
  <SuiImage verticalAlign="middle" size="tiny" src="/images/wireframe/image.png" />
  <span>Middle Aligned</span>
  <SuiDivider />
  <SuiImage verticalAlign="bottom" size="tiny" src="/images/wireframe/image.png" />
  <span>Bottom Aligned</span>
</template>`,rx={__name:"VerticallyAlignedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Vertically Aligned",code:sx},{description:n(()=>[l(" An image can specify its vertical alignment ")]),example:n(()=>[i(r(le),{verticalAlign:"top",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),ax,i(r(Fe)),i(r(le),{verticalAlign:"middle",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),ox,i(r(Fe)),i(r(le),{verticalAlign:"bottom",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),lx]),_:1}))}},ux=B("p",null," Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ",-1),cx=B("p",null," Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. ",-1),dx=B("p",null," Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id. ",-1),px=`<template>
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
</template>`,mx={__name:"CenteredDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Centered",code:px},{description:n(()=>[l(" An image can appear centered in a content block ")]),example:n(()=>[i(r(O),null,{default:n(()=>[i(r(le),{centered:"",size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png"}),ux,cx,i(r(le),{centered:"",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),dx]),_:1})]),_:1}))}},fx=`<template>
  <SuiSegment>
    <p>
      Te eum doming eirmod, nominati pertinacia <SuiImage spaced size="mini" src="/images/wireframe/image.png" /> argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
    </p>
  </SuiSegment>
</template>`,gx={__name:"SpacedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Spaced",code:fx},{description:n(()=>[l(" An image can appear centered in a content block ")]),example:n(()=>[i(r(O),null,{default:n(()=>[B("p",null,[l(" Te eum doming eirmod, nominati pertinacia "),i(r(le),{spaced:"",size:"mini",src:"/vue-fomantic-ui/images/wireframe/image.png"}),l(" argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ")])]),_:1})]),_:1}))}},hx=B("p",null," Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ",-1),_x=B("p",null," Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. ",-1),vx=B("p",null," Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id. ",-1),bx=`<template>
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
</template>`,Sx={__name:"FloatedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Floated",code:bx},{description:n(()=>[l(" An image can sit to the left or right of other content ")]),example:n(()=>[i(r(O),null,{default:n(()=>[i(r(le),{floated:"left",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),hx,i(r(le),{floated:"right",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),_x,vx]),_:1})]),_:1}))}},yx=`<template>
  <SuiImage size="mini" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="tiny" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="small" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="medium" src="/images/wireframe/image.png" />
</template>`,wx={__name:"SizeDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Size",code:yx},{description:n(()=>[l(" An image may appear at different sizes ")]),example:n(()=>[i(r(le),{size:"mini",src:"/vue-fomantic-ui/images/wireframe/image.png"}),i(r(Fe),{hidden:""}),i(r(le),{size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),i(r(Fe),{hidden:""}),i(r(le),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"}),i(r(Fe),{hidden:""}),i(r(le),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}))}},Cx=`<template>
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
</template>`,xx={__name:"GroupSizeDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Size",code:Cx},{description:n(()=>[l(" A group of images can be formatted to have the same size. ")]),example:n(()=>[i(r(wl),{size:"tiny"},{default:n(()=>[i(r(le),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),i(r(le),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),i(r(le),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),i(r(le),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),i(r(Fe),{hidden:""}),i(r(wl),{size:"small"},{default:n(()=>[i(r(le),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),i(r(le),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),i(r(le),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),i(r(le),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1}))}},Ax={__name:"Image",setup(e){const t=[{id:"image",label:"Image",category:"Types",component:H0},{id:"image-link",label:"Image Link",category:"Types",component:q0},{id:"hidden",label:"Hidden",category:"States",component:G0},{id:"disabled",label:"Disabled",category:"States",component:U0},{id:"avatar",label:"Avatar",category:"Variations",component:K0},{id:"bordered",label:"Bordered",category:"Variations",component:J0},{id:"fluid",label:"Fluid",category:"Variations",component:Z0},{id:"rounded",label:"Rounded",category:"Variations",component:tx},{id:"circular",label:"Circular",category:"Variations",component:nx},{id:"vertically-aligned",label:"Vertically Aligned",category:"Variations",component:rx},{id:"centered",label:"Centered",category:"Variations",component:mx},{id:"spaced",label:"Spaced",category:"Variations",component:gx},{id:"floated",label:"Floated",category:"Variations",component:Sx},{id:"size",label:"Size",category:"Variations",component:wx},{id:"group-size",label:"Size",category:"Groups",component:xx}];return(a,o)=>(S(),C(lt,{title:"Image",description:"An image is a graphic representation of something","component-docs":t}))}},kx=`<template>
  <SuiInput placeholder="Search..." />
</template>`,Bx={__name:"InputDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Input",code:kx},{description:n(()=>[l(" A standard input ")]),example:n(()=>[i(r(Ze),{placeholder:"Search..."})]),_:1}))}},$x=`<template>
  <SuiInput focus placeholder="Search..." />
</template>`,Tx={__name:"FocusDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Focus",code:$x},{description:n(()=>[l(" An input field can show a user is currently interacting with it ")]),example:n(()=>[i(r(Ze),{focus:"",placeholder:"Search..."})]),_:1}))}},Lx=`<template>
  <SuiInput loading icon="user" placeholder="Search..." />
  <SuiInput loading icon="user" iconPosition="left" placeholder="Search..." />
</template>`,Dx={__name:"LoadingDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Loading",code:Lx},{description:n(()=>[l(" An icon input field can show that it is currently loading data ")]),example:n(()=>[i(r(Ze),{loading:"",icon:"user",placeholder:"Search..."}),i(r(Ze),{loading:"",icon:"user",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},Ix=`<template>
  <SuiInput disabled placeholder="Search..." />
</template>`,Ex={__name:"DisabledDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Disabled",code:Ix},{description:n(()=>[l(" An input field can show that it is disabled ")]),example:n(()=>[i(r(Ze),{disabled:"",placeholder:"Search..."})]),_:1}))}},Rx=`<template>
  <SuiInput error placeholder="Search..." />
</template>`,zx={__name:"ErrorDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Error",code:Rx},{description:n(()=>[l(" An input field can show the data contains errors ")]),example:n(()=>[i(r(Ze),{error:"",placeholder:"Search..."})]),_:1}))}},Px=`<template>
  <SuiInput icon="search" placeholder="Search..." />
  <SuiInput icon="users" iconPosition="left" placeholder="Search..." />
</template>`,Fx={__name:"IconDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Icon",code:Px},{description:n(()=>[l(" An input can be formatted with an icon ")]),example:n(()=>[i(r(Ze),{icon:"search",placeholder:"Search..."}),i(r(Ze),{icon:"users",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},Vx=`<template>
  <SuiInput label="http://" placeholder="mysite.com" />
</template>`,Mx={__name:"LabeledDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Labeled",code:Vx},{description:n(()=>[l(" An input can be formatted with a label ")]),example:n(()=>[i(r(Ze),{label:"http://",placeholder:"mysite.com"})]),_:1}))}},Hx=`<template>
  <SuiInput action="Search" />
</template>`,Ox={__name:"ActionDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Action",code:Hx},{description:n(()=>[l(" An input can be formatted to alert the user to an action they may perform ")]),example:n(()=>[i(r(Ze),{action:"Search"})]),_:1}))}},qx=`<template>
  <SuiInput transparent icon="search" placeholder="Search..." />
</template>`,Nx={__name:"TransparentDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Transparent",code:qx},{description:n(()=>[l(" A transparent input has no background ")]),example:n(()=>[i(r(Ze),{transparent:"",icon:"search",placeholder:"Search..."})]),_:1}))}},Gx=`<template>
  <SuiSegment inverted>
    <SuiInput inverted placeholder="Search..." />
  </SuiSegment>
</template>`,jx={__name:"InvertedDoc",setup(e){return(t,a)=>{const o=$("SuiSegment");return S(),C(D,{label:"Inverted",code:Gx},{description:n(()=>[l(" An input can be formatted to appear on dark backgrounds ")]),example:n(()=>[i(o,{inverted:""},{default:n(()=>[i(r(Ze),{inverted:"",placeholder:"Search..."})]),_:1})]),_:1})}}},Ux=`<template>
  <SuiInput fluid icon="search" placeholder="Search..." />
</template>`,Yx={__name:"FluidDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Fluid",code:Ux},{description:n(()=>[l(" An input can take the size of its container ")]),example:n(()=>[i(r(Ze),{fluid:"",icon:"search",placeholder:"Search..."})]),_:1}))}},Wx=`<template>
  <SuiInput icon="search" placeholder="Search mini..." size="mini" />
  <SuiInput icon="search" placeholder="Search small..." size="small" />
  <SuiInput icon="search" placeholder="Search large..." size="large" />
  <SuiInput icon="search" placeholder="Search big..." size="big" />
  <SuiInput icon="search" placeholder="Search huge..." size="huge" />
  <SuiInput icon="search" placeholder="Search massive..." size="massive" />
</template>`,Kx={__name:"SizeDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Size",code:Wx},{description:n(()=>[l(" An input can vary in size ")]),example:n(()=>[i(r(Ze),{icon:"search",placeholder:"Search mini...",size:"mini"}),i(r(Ze),{icon:"search",placeholder:"Search small...",size:"small"}),i(r(Ze),{icon:"search",placeholder:"Search large...",size:"large"}),i(r(Ze),{icon:"search",placeholder:"Search big...",size:"big"}),i(r(Ze),{icon:"search",placeholder:"Search huge...",size:"huge"}),i(r(Ze),{icon:"search",placeholder:"Search massive...",size:"massive"})]),_:1}))}},Xx={__name:"Input",setup(e){const t=[{id:"input",label:"Input",category:"Types",component:Bx},{id:"focus",label:"Focus",category:"States",component:Tx},{id:"loading",label:"Loading",category:"States",component:Dx},{id:"disabled",label:"Disabled",category:"States",component:Ex},{id:"error",label:"Error",category:"States",component:zx},{id:"icon",label:"Icon",category:"Variations",component:Fx},{id:"labeled",label:"Labeled",category:"Variations",component:Mx},{id:"action",label:"Action",category:"Variations",component:Ox},{id:"transparent",label:"Transparent",category:"Variations",component:Nx},{id:"inverted",label:"Inverted",category:"Variations",component:jx},{id:"fluid",label:"Fluid",category:"Variations",component:Yx},{id:"size",label:"Size",category:"Variations",component:Kx}];return(a,o)=>(S(),C(lt,{title:"Input",description:"An input is a field used to elicit a response from a user","component-docs":t}))}},Jx=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
</template>`,Qx={__name:"LabelDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Label",code:Jx},{description:n(()=>[l(" A label ")]),example:n(()=>[i(r(q),null,{default:n(()=>[i(r(W),{name:"mail"}),l(" 23 ")]),_:1})]),_:1}))}},Zx="/vue-fomantic-ui/images/avatar/small/joe.jpg",Fd="/vue-fomantic-ui/images/avatar/small/veronika.jpg",pa="/vue-fomantic-ui/images/avatar/small/elliot.jpg",eA=B("img",{src:Zx},null,-1),tA=B("img",{src:Fd},null,-1),iA=B("img",{src:pa},null,-1),nA=`<template>
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
</template>`,aA={__name:"ImageDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Image",code:nA},{description:n(()=>[l(" A label can be formatted to emphasize an image ")]),example:n(()=>[i(r(q),{as:"a",image:""},{default:n(()=>[eA,l(" Joe ")]),_:1}),i(r(q),{as:"a",image:"",color:"blue"},{default:n(()=>[tA,l(" Veronika "),i(r(En),null,{default:n(()=>[l("Friend")]),_:1})]),_:1}),i(r(q),{as:"a",image:""},{default:n(()=>[iA,l(" Elliot "),i(r(W),{name:"delete"})]),_:1})]),_:1}))}},oA=B("input",{type:"text",placeholder:"First Name"},null,-1),lA=B("input",{type:"text"},null,-1),sA=B("input",{type:"text",placeholder:"Username"},null,-1),rA=B("input",{type:"password"},null,-1),uA=`<template>
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
</template>`,cA={__name:"PointingDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Pointing",code:uA},{description:n(()=>[l(" A label can point to content next to it ")]),example:n(()=>[i(r(Mt),{fluid:""},{default:n(()=>[i(r(it),null,{default:n(()=>[oA,i(r(q),{pointing:""},{default:n(()=>[l("Please enter a value")]),_:1})]),_:1}),i(r(Fe)),i(r(it),null,{default:n(()=>[i(r(q),{pointing:"below"},{default:n(()=>[l("Please enter a value")]),_:1}),lA]),_:1}),i(r(Fe)),i(r(it),{inline:""},{default:n(()=>[sA,i(r(q),{pointing:"left",color:"red",basic:""},{default:n(()=>[l("That name is taken!")]),_:1})]),_:1}),i(r(Fe)),i(r(it),{inline:""},{default:n(()=>[i(r(q),{pointing:"right",color:"red",basic:""},{default:n(()=>[l("Your password must be 6 characters or more")]),_:1}),rA]),_:1})]),_:1})]),_:1}))}},dA=`<template>
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
</template>`,pA={__name:"CornerDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Corner",code:dA},{description:n(()=>[l(" A label can position itself in the corner of an element ")]),example:n(()=>[i(r(ba),{columns:2},{default:n(()=>[i(r(Bt),null,{default:n(()=>[i(r(le),{label:{as:"a",corner:"left",icon:"heart"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),i(r(Bt),null,{default:n(()=>[i(r(le),{label:{as:"a",color:"red",corner:"right",icon:"save"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1})]),_:1}))}},mA=`<template>
  <SuiLabel as="a" tag>New</SuiLabel>
  <SuiLabel as="a" tag color="red">Upcoming</SuiLabel>
  <SuiLabel as="a" tag color="teal">Featured</SuiLabel>
</template>`,fA={__name:"TagDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Tag",code:mA},{description:n(()=>[l(" A label can appear as a tag ")]),example:n(()=>[i(r(q),{as:"a",tag:""},{default:n(()=>[l("New")]),_:1}),i(r(q),{as:"a",tag:"",color:"red"},{default:n(()=>[l("Upcoming")]),_:1}),i(r(q),{as:"a",tag:"",color:"teal"},{default:n(()=>[l("Featured")]),_:1})]),_:1}))}},gA=B("span",null,"Account Details",-1),hA=B("span",null,"User Reviews",-1),_A=B("span",null,"Technical Specifications",-1),vA=B("span",null,"User Reviews",-1),bA=`<template>
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
</template>`,SA={__name:"RibbonDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Ribbon",code:bA},{description:n(()=>[l(" A label can appear as a ribbon attaching itself to an element. ")]),example:n(()=>[i(r(ba),{columns:2},{default:n(()=>[i(r(Bt),null,{default:n(()=>[i(r(O),{raised:""},{default:n(()=>[i(r(q),{as:"a",ribbon:"",color:"red"},{default:n(()=>[l("Overview")]),_:1}),gA,i(r(le),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),i(r(q),{as:"a",ribbon:"",color:"blue"},{default:n(()=>[l("Community")]),_:1}),hA,i(r(le),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),i(r(Bt),null,{default:n(()=>[i(r(O),{raised:""},{default:n(()=>[i(r(q),{as:"a",ribbon:"right",color:"orange"},{default:n(()=>[l("Specs")]),_:1}),_A,i(r(le),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),i(r(q),{as:"a",ribbon:"right",color:"teal"},{default:n(()=>[l("Reviews")]),_:1}),vA,i(r(le),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1}))}},yA=`<template>
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
</template>`,wA={__name:"AttachedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Attached",code:yA},{description:n(()=>[l(" A label can attach to a content segment ")]),example:n(()=>[i(r(ba),{columns:3},{default:n(()=>[i(r(xl),null,{default:n(()=>[i(r(Bt),null,{default:n(()=>[i(r(O),{padded:""},{default:n(()=>[i(r(q),{attached:"top"},{default:n(()=>[l("HTML")]),_:1}),i(r(le),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),i(r(Bt),null,{default:n(()=>[i(r(O),{padded:""},{default:n(()=>[i(r(q),{attached:"bottom"},{default:n(()=>[l("CSS")]),_:1}),i(r(le),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),i(r(Bt),null,{default:n(()=>[i(r(O),{padded:""},{default:n(()=>[i(r(q),{attached:"top right"},{default:n(()=>[l("Code")]),_:1}),i(r(le),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1}),i(r(xl),null,{default:n(()=>[i(r(Bt),null,{default:n(()=>[i(r(O),{padded:""},{default:n(()=>[i(r(q),{attached:"top left"},{default:n(()=>[l("View")]),_:1}),i(r(le),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),i(r(Bt),null,{default:n(()=>[i(r(O),{padded:""},{default:n(()=>[i(r(q),{attached:"bottom left"},{default:n(()=>[l("User View")]),_:1}),i(r(le),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),i(r(Bt),null,{default:n(()=>[i(r(O),{padded:""},{default:n(()=>[i(r(q),{attached:"bottom right"},{default:n(()=>[l("Admin View")]),_:1}),i(r(le),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},CA=`<template>
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
</template>`,xA={__name:"HorizontalDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Horizontal",code:CA},{description:n(()=>[l(" A horizontal label is formatted to label content along-side it horizontally ")]),example:n(()=>[i(r(rd),{divided:"",selection:""},{default:n(()=>[i(r(Nn),null,{default:n(()=>[i(r(q),{color:"red",horizontal:""},{default:n(()=>[l("Fruit")]),_:1}),l(" Kumquats ")]),_:1}),i(r(Nn),null,{default:n(()=>[i(r(q),{color:"purple",horizontal:""},{default:n(()=>[l("Candy")]),_:1}),l(" Ice Cream ")]),_:1}),i(r(Nn),null,{default:n(()=>[i(r(q),{color:"red",horizontal:""},{default:n(()=>[l("Fruit")]),_:1}),l(" Orange ")]),_:1}),i(r(Nn),null,{default:n(()=>[i(r(q),{horizontal:""},{default:n(()=>[l("Dog")]),_:1}),l(" Poodle ")]),_:1})]),_:1})]),_:1}))}},AA=`<template>
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
</template>`,kA={__name:"FloatingDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Floating",code:AA},{description:n(()=>[l(" A label can float above or below another element ")]),example:n(()=>[i(r(ud),{compact:""},{default:n(()=>[i(r(Za),null,{default:n(()=>[i(r(W),{name:"mail"}),l(" Messages "),i(r(q),{floating:"",color:"red"},{default:n(()=>[l("22")]),_:1})]),_:1}),i(r(Za),null,{default:n(()=>[i(r(W),{name:"users"}),l(" Friends "),i(r(q),{floating:"",color:"teal"},{default:n(()=>[l("22")]),_:1})]),_:1})]),_:1})]),_:1}))}},BA=`<template>
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
</template>`,$A={__name:"InvertedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Inverted",code:BA},{description:n(()=>[l(" All Variants of Label can be inverted ")]),example:n(()=>[i(r(O),{inverted:""},{default:n(()=>[i(r(q),{as:"a",inverted:"",primary:""},{default:n(()=>[l("Primary")]),_:1}),i(r(q),{as:"a",inverted:"",secondary:""},{default:n(()=>[l("Secondary")]),_:1}),i(r(q),{as:"a",inverted:"",color:"red"},{default:n(()=>[l("Red")]),_:1}),i(r(q),{as:"a",inverted:"",color:"orange"},{default:n(()=>[l("Orange")]),_:1}),i(r(q),{as:"a",inverted:"",color:"yellow"},{default:n(()=>[l("Yellow")]),_:1}),i(r(q),{as:"a",basic:"",inverted:"",color:"olive"},{default:n(()=>[l("Olive")]),_:1}),i(r(q),{as:"a",basic:"",inverted:"",color:"green"},{default:n(()=>[l("Green")]),_:1}),i(r(q),{as:"a",basic:"",inverted:"",color:"teal"},{default:n(()=>[l("Teal")]),_:1}),i(r(q),{as:"a",basic:"",inverted:"",color:"blue"},{default:n(()=>[l("Blue")]),_:1}),i(r(q),{as:"a",basic:"",inverted:"",color:"violet"},{default:n(()=>[l("Violet")]),_:1}),i(r(q),{as:"a",tag:"",inverted:"",color:"purple"},{default:n(()=>[l("Purple")]),_:1}),i(r(q),{as:"a",tag:"",inverted:"",color:"pink"},{default:n(()=>[l("Pink")]),_:1}),i(r(q),{as:"a",tag:"",inverted:"",color:"brown"},{default:n(()=>[l("Brown")]),_:1}),i(r(q),{as:"a",tag:"",inverted:"",color:"grey"},{default:n(()=>[l("Grey")]),_:1}),i(r(q),{as:"a",tag:"",inverted:"",color:"black"},{default:n(()=>[l("Black")]),_:1})]),_:1})]),_:1}))}},TA=`<template>
  <SuiLabel>
    Dogs
    <SuiLabelDetail>214</SuiLabelDetail>
  </SuiLabel>
</template>`,LA={__name:"DetailDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Detail",code:TA},{description:n(()=>[l(" A label can contain a detail ")]),example:n(()=>[i(r(q),null,{default:n(()=>[l(" Dogs "),i(r(En),null,{default:n(()=>[l("214")]),_:1})]),_:1})]),_:1}))}},DA=`<template>
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
</template>`,IA={__name:"IconDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Icon",code:DA},{description:n(()=>[l(" A label can include an icon ")]),example:n(()=>[i(r(q),null,{default:n(()=>[i(r(W),{name:"mail"}),l(" Mail ")]),_:1}),i(r(q),null,{default:n(()=>[i(r(W),{name:"checkmark"}),l(" Test Passed ")]),_:1}),i(r(q),{icon:"dog"}),i(r(q),{icon:"cat"})]),_:1}))}},EA=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
    <SuiLabelContent>View Mail</SuiLabelContent>
  </SuiLabel>
</template>`,RA={__name:"LinkDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Link",code:EA},{description:n(()=>[l(" A label can be a link or contain an item that links ")]),example:n(()=>[i(r(q),{as:"a"},{default:n(()=>[i(r(W),{name:"mail"}),l(" 23 ")]),_:1}),i(r(q),null,{default:n(()=>[i(r(W),{name:"mail"}),l(" 23 "),i(r(En),null,{default:n(()=>[l("View Mail")]),_:1})]),_:1})]),_:1}))}},zA=`<template>
  <SuiLabel disabled>Disabled Label</SuiLabel>
</template>`,PA={__name:"DisabledDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Disabled",code:zA},{description:n(()=>[l(" A label can show it is currently unable to be interacted with ")]),example:n(()=>[i(r(q),{disabled:""},{default:n(()=>[l("Disabled Label")]),_:1})]),_:1}))}},FA=`<template>
  <SuiLabel fluid>Fits container</SuiLabel>
</template>`,VA={__name:"FluidDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Fluid",code:FA},{description:n(()=>[l(" A label can take the width of its container ")]),example:n(()=>[i(r(q),{fluid:""},{default:n(()=>[l("Fits container")]),_:1})]),_:1}))}},MA=`<template>
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
</template>`,HA={__name:"CircularDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Circular",code:MA},{description:n(()=>[l(" A label can be circular ")]),example:n(()=>[i(r(q),{circular:"",color:"red"},{default:n(()=>[l("2")]),_:1}),i(r(q),{circular:"",color:"orange"},{default:n(()=>[l("2")]),_:1}),i(r(q),{circular:"",color:"yellow"},{default:n(()=>[l("2")]),_:1}),i(r(q),{circular:"",color:"olive"},{default:n(()=>[l("2")]),_:1}),i(r(q),{circular:"",color:"green"},{default:n(()=>[l("2")]),_:1}),i(r(q),{circular:"",color:"teal"},{default:n(()=>[l("2")]),_:1}),i(r(q),{circular:"",color:"blue"},{default:n(()=>[l("2")]),_:1}),i(r(q),{circular:"",color:"violet"},{default:n(()=>[l("2")]),_:1}),i(r(q),{circular:"",color:"purple"},{default:n(()=>[l("2")]),_:1}),i(r(q),{circular:"",color:"pink"},{default:n(()=>[l("2")]),_:1}),i(r(q),{circular:"",color:"brown"},{default:n(()=>[l("2")]),_:1}),i(r(q),{circular:"",color:"grey"},{default:n(()=>[l("2")]),_:1}),i(r(q),{circular:"",color:"black"},{default:n(()=>[l("2")]),_:1})]),_:1}))}},OA=B("img",{src:pa},null,-1),qA=`<template>
  <SuiLabel as="a" basic>Basic</SuiLabel>
  <SuiLabel as="a" basic pointing>Pointing</SuiLabel>
  <SuiLabel as="a" basic image>
    <img src="/images/avatar/small/elliot.jpg" />
    Elliot
  </SuiLabel>
  <SuiLabel as="a" basic pointing color="red">Red Pointing</SuiLabel>
  <SuiLabel as="a" basic color="blue">Blue</SuiLabel>
</template>`,NA={__name:"BasicDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Basic",code:qA},{description:n(()=>[l(" A label can reduce its complexity ")]),example:n(()=>[i(r(q),{as:"a",basic:""},{default:n(()=>[l("Basic")]),_:1}),i(r(q),{as:"a",basic:"",pointing:""},{default:n(()=>[l("Pointing")]),_:1}),i(r(q),{as:"a",basic:"",image:""},{default:n(()=>[OA,l(" Elliot ")]),_:1}),i(r(q),{as:"a",basic:"",pointing:"",color:"red"},{default:n(()=>[l("Red Pointing")]),_:1}),i(r(q),{as:"a",basic:"",color:"blue"},{default:n(()=>[l("Blue")]),_:1})]),_:1}))}},GA=`<template>
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
</template>`,jA={__name:"ColoredDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Colored",code:GA},{description:n(()=>[l(" A label can have different colors ")]),example:n(()=>[i(r(q),{as:"a",primary:""},{default:n(()=>[l("Primary")]),_:1}),i(r(q),{as:"a",secondary:""},{default:n(()=>[l("Secondary")]),_:1}),i(r(q),{as:"a",color:"red"},{default:n(()=>[l("Red")]),_:1}),i(r(q),{as:"a",color:"orange"},{default:n(()=>[l("Orange")]),_:1}),i(r(q),{as:"a",color:"yellow"},{default:n(()=>[l("Yellow")]),_:1}),i(r(q),{as:"a",color:"olive"},{default:n(()=>[l("Olive")]),_:1}),i(r(q),{as:"a",color:"green"},{default:n(()=>[l("Green")]),_:1}),i(r(q),{as:"a",color:"teal"},{default:n(()=>[l("Teal")]),_:1}),i(r(q),{as:"a",color:"blue"},{default:n(()=>[l("Blue")]),_:1}),i(r(q),{as:"a",color:"violet"},{default:n(()=>[l("Violet")]),_:1}),i(r(q),{as:"a",color:"purple"},{default:n(()=>[l("Purple")]),_:1}),i(r(q),{as:"a",color:"pink"},{default:n(()=>[l("Pink")]),_:1}),i(r(q),{as:"a",color:"brown"},{default:n(()=>[l("Brown")]),_:1}),i(r(q),{as:"a",color:"grey"},{default:n(()=>[l("Grey")]),_:1}),i(r(q),{as:"a",color:"black"},{default:n(()=>[l("Black")]),_:1})]),_:1}))}},UA=`<template>
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
</template>`,YA={__name:"BasicTagDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Basic Tag",code:UA},{description:n(()=>[]),example:n(()=>[i(r(q),{as:"a",basic:"",tag:"",primary:""},{default:n(()=>[l("Primary")]),_:1}),i(r(q),{as:"a",basic:"",tag:"",secondary:""},{default:n(()=>[l("Secondary")]),_:1}),i(r(q),{as:"a",basic:"",tag:"",color:"red"},{default:n(()=>[l("Red")]),_:1}),i(r(q),{as:"a",basic:"",tag:"",color:"orange"},{default:n(()=>[l("Orange")]),_:1}),i(r(q),{as:"a",basic:"",tag:"",color:"yellow"},{default:n(()=>[l("Yellow")]),_:1}),i(r(q),{as:"a",basic:"",tag:"",color:"olive"},{default:n(()=>[l("Olive")]),_:1}),i(r(q),{as:"a",basic:"",tag:"",color:"green"},{default:n(()=>[l("Green")]),_:1}),i(r(q),{as:"a",basic:"",tag:"",color:"teal"},{default:n(()=>[l("Teal")]),_:1}),i(r(q),{as:"a",basic:"",tag:"",color:"blue"},{default:n(()=>[l("Blue")]),_:1}),i(r(q),{as:"a",basic:"",tag:"",color:"violet"},{default:n(()=>[l("Violet")]),_:1}),i(r(q),{as:"a",basic:"",tag:"",color:"purple"},{default:n(()=>[l("Purple")]),_:1}),i(r(q),{as:"a",basic:"",tag:"",color:"pink"},{default:n(()=>[l("Pink")]),_:1}),i(r(q),{as:"a",basic:"",tag:"",color:"brown"},{default:n(()=>[l("Brown")]),_:1}),i(r(q),{as:"a",basic:"",tag:"",color:"grey"},{default:n(()=>[l("Grey")]),_:1}),i(r(q),{as:"a",basic:"",tag:"",color:"black"},{default:n(()=>[l("Black")]),_:1})]),_:1}))}},WA=`<template>
  <SuiLabel size="mini">Mini</SuiLabel>
  <SuiLabel size="tiny">Tiny</SuiLabel>
  <SuiLabel size="small">Small</SuiLabel>
  <SuiLabel>Medium</SuiLabel>
  <SuiLabel size="large">Large</SuiLabel>
  <SuiLabel size="big">Big</SuiLabel>
  <SuiLabel size="huge">Huge</SuiLabel>
  <SuiLabel size="massive">Massive</SuiLabel>
</template>`,KA={__name:"SizeDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Size",code:WA},{description:n(()=>[l(" A label can be small or large ")]),example:n(()=>[i(r(q),{size:"mini"},{default:n(()=>[l("Mini")]),_:1}),i(r(q),{size:"tiny"},{default:n(()=>[l("Tiny")]),_:1}),i(r(q),{size:"small"},{default:n(()=>[l("Small")]),_:1}),i(r(q),null,{default:n(()=>[l("Medium")]),_:1}),i(r(q),{size:"large"},{default:n(()=>[l("Large")]),_:1}),i(r(q),{size:"big"},{default:n(()=>[l("Big")]),_:1}),i(r(q),{size:"huge"},{default:n(()=>[l("Huge")]),_:1}),i(r(q),{size:"massive"},{default:n(()=>[l("Massive")]),_:1})]),_:1}))}},XA=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,JA={__name:"GroupSizeDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Group Size",code:XA},{description:n(()=>[l(" Labels can share sizes together ")]),example:n(()=>[i(r(Rn),{size:"huge"},{default:n(()=>[i(r(q),null,{default:n(()=>[l("Fun")]),_:1}),i(r(q),null,{default:n(()=>[l("Happy")]),_:1}),i(r(q),null,{default:n(()=>[l("Smart")]),_:1}),i(r(q),null,{default:n(()=>[l("Witty")]),_:1})]),_:1})]),_:1}))}},QA=`<template>
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
</template>`,ZA={__name:"ColoredGroupDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Clored Group",code:QA},{description:n(()=>[l(" Labels can share colors together ")]),example:n(()=>[i(r(Rn),{color:"blue"},{default:n(()=>[i(r(q),null,{default:n(()=>[l(" Fun "),i(r(W),{name:"close"})]),_:1}),i(r(q),null,{default:n(()=>[l(" Happy "),i(r(En),null,{default:n(()=>[l("Smart")]),_:1})]),_:1}),i(r(q),null,{default:n(()=>[l("Insane")]),_:1}),i(r(q),null,{default:n(()=>[l("Exciting")]),_:1})]),_:1})]),_:1}))}},ek=`<template>
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
</template>`,tk={__name:"BasicGroupDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Basic Group",code:ek},{description:n(()=>[l(" Labels can share their style together ")]),example:n(()=>[i(r(Rn),{basic:""},{default:n(()=>[i(r(q),null,{default:n(()=>[l(" Fun "),i(r(W),{name:"close"})]),_:1}),i(r(q),null,{default:n(()=>[l(" Happy "),i(r(En),null,{default:n(()=>[l("Smart")]),_:1})]),_:1}),i(r(q),null,{default:n(()=>[l("Insane")]),_:1}),i(r(q),null,{default:n(()=>[l("Exciting")]),_:1})]),_:1})]),_:1}))}},ik=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,nk={__name:"TagGroupDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Tag Group",code:ik},{description:n(()=>[l(" Labels can share tag formatting ")]),example:n(()=>[i(r(Rn),{tag:""},{default:n(()=>[i(r(q),{as:"a"},{default:n(()=>[l("$10.00")]),_:1}),i(r(q),{as:"a"},{default:n(()=>[l("$19.99")]),_:1}),i(r(q),{as:"a"},{default:n(()=>[l("$24.99")]),_:1}),i(r(q),{as:"a"},{default:n(()=>[l("$10.25")]),_:1})]),_:1})]),_:1}))}},ak=`<template>
  <SuiLabelGroup tag>
    <SuiLabel as="a">1</SuiLabel>
    <SuiLabel as="a">3</SuiLabel>
    <SuiLabel as="a">4</SuiLabel>
    <SuiLabel as="a">14</SuiLabel>
    <SuiLabel as="a">16</SuiLabel>
    <SuiLabel as="a">34</SuiLabel>
  </SuiLabelGroup>
</template>`,ok={__name:"CircularGroupDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Circular Group",code:ak},{description:n(()=>[l(" Labels can share shapes ")]),example:n(()=>[i(r(Rn),{circular:""},{default:n(()=>[i(r(q),{as:"a"},{default:n(()=>[l("1")]),_:1}),i(r(q),{as:"a"},{default:n(()=>[l("3")]),_:1}),i(r(q),{as:"a"},{default:n(()=>[l("4")]),_:1}),i(r(q),{as:"a"},{default:n(()=>[l("14")]),_:1}),i(r(q),{as:"a"},{default:n(()=>[l("16")]),_:1}),i(r(q),{as:"a"},{default:n(()=>[l("34")]),_:1})]),_:1})]),_:1}))}},lk={__name:"Label",setup(e){const t=[{id:"label",label:"Label",category:"Types",component:Qx},{id:"image",label:"Image",category:"Types",component:aA},{id:"pointing",label:"Pointing",category:"Types",component:cA},{id:"corner",label:"Corner",category:"Types",component:pA},{id:"tag",label:"Tag",category:"Types",component:fA},{id:"ribbon",label:"Ribbon",category:"Types",component:SA},{id:"attached",label:"Attached",category:"Types",component:wA},{id:"horizontal",label:"Horizontal",category:"Types",component:xA},{id:"floating",label:"Floating",category:"Types",component:kA},{id:"inverted",label:"Inverted",category:"Types",component:$A},{id:"detail",label:"Detail",category:"Content",component:LA},{id:"icon",label:"Icon",category:"Content",component:IA},{id:"link",label:"Link",category:"Content",component:RA},{id:"disabled",label:"Disabled",category:"States",component:PA},{id:"fluid",label:"Fluid",category:"Variations",component:VA},{id:"circular",label:"Circular",category:"Variations",component:HA},{id:"basic",label:"Basic",category:"Variations",component:NA},{id:"colored",label:"Colored",category:"Variations",component:jA},{id:"basic-tag",label:"Basic Tag",category:"Variations",component:YA},{id:"size",label:"Size",category:"Variations",component:KA},{id:"group-size",label:"Group Size",category:"Groups",component:JA},{id:"colored-group",label:"Colored Group",category:"Groups",component:ZA},{id:"basic-group",label:"Basic Group",category:"Groups",component:tk},{id:"tag-group",label:"Tag Group",category:"Groups",component:nk},{id:"circular-group",label:"Circular Group",category:"Groups",component:ok}];return(a,o)=>(S(),C(lt,{title:"Label",description:"A label displays content classification","component-docs":t}))}},sk=Oh(Qf);function rk(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Ea=sk,Wo=rk(Qc),uk=Ea.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function(t,a){var o=a.slots,s=a.attrs,u=o&&o.default&&o.default()||[],c=t.code||u&&u.length?u[0].children:"",p=t.inline,d=t.language,m=Wo.languages[d],f="language-".concat(d);return function(){return p?Ea.h("code",{class:[f],innerHTML:Wo.highlight(c,m)}):Ea.h("pre",Object.assign({},s,{class:[s.class,f]}),[Ea.h("code",Object.assign({},s,{class:[s.class,f],innerHTML:Wo.highlight(c,m)}))])}}}),ck=uk;const dk=Xc(ck),pk=F({name:"DocExample",components:{Prism:dk},props:{title:String,description:String,code:String},setup(){const e=j(!1);return{active:e,toggle:()=>e.value=!e.value}}}),mk={class:"example"};function fk(e,t,a,o,s,u){const c=$("sui-header-subheader"),p=$("sui-header"),d=$("sui-grid-column"),m=$("sui-icon"),f=$("sui-grid-row"),h=$("prism"),_=$("sui-grid");return S(),be("div",mk,[i(_,{columns:2},{default:n(()=>[i(f,null,{default:n(()=>[i(d,null,{default:n(()=>[i(p,{as:"h3"},{default:n(()=>[l($e(e.title)+" ",1),i(c,null,{default:n(()=>[l($e(e.description),1)]),_:1})]),_:1})]),_:1}),i(d,{textAlign:"right"},{default:n(()=>[i(m,{name:"code",color:"grey",onClick:e.toggle,link:""},null,8,["onClick"])]),_:1})]),_:1}),i(f,null,{default:n(()=>[i(d,{width:16},{default:n(()=>[Ni(e.$slots,"default",{},void 0,!0)]),_:3}),e.active?(S(),C(d,{key:0,width:16},{default:n(()=>[i(h,{language:"markup"},{default:n(()=>[l($e(e.code),1)]),_:1})]),_:1})):ss("",!0)]),_:3})]),_:3})])}const _t=Ne(pk,[["render",fk],["__scopeId","data-v-fcfb6a67"]]),gk="/vue-fomantic-ui/images/avatar/small/rachel.png",hk="/vue-fomantic-ui/images/avatar/small/lindsay.png",_k="/vue-fomantic-ui/images/avatar/small/matthew.png",vk="/vue-fomantic-ui/images/avatar/small/jenny.jpg",bk="/vue-fomantic-ui/images/avatar/small/tom.jpg",Ra="/vue-fomantic-ui/images/avatar/small/christian.jpg",Vd="/vue-fomantic-ui/images/avatar/small/matt.jpg",za="/vue-fomantic-ui/images/avatar/small/helen.jpg",Li="/vue-fomantic-ui/images/avatar/small/daniel.jpg",Il="/vue-fomantic-ui/images/avatar/small/stevie.jpg",Ko="/vue-fomantic-ui/images/wireframe/square-image.png",Sk=F({name:"ListDoc",components:{DocExample:_t},setup(){return{listCode:`<sui-list>
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
</div>`}}}),yk={class:"intro"},wk=B("div",null,"Benefits",-1),Ck={class:"list"},xk=B("a",null,"Languages",-1),Ak=B("a",null,[B("b",null,"Arrested Development")],-1),kk=B("a",null,[B("b",null,"Bob's Burgers")],-1),Bk=B("a",null,[B("b",null,"The Godfather Part 2")],-1),$k=B("a",null,[B("b",null,"Twin Peaks")],-1),Tk=B("a",null,[B("b",null,"Arrested Development")],-1),Lk=B("a",null,[B("b",null,"Bob's Burgers")],-1),Dk=B("a",null,[B("b",null,"The Godfather Part 2")],-1);function Ik(e,t,a,o,s,u){const c=$("sui-header-subheader"),p=$("sui-header"),d=$("sui-divider"),m=$("sui-icon"),f=$("sui-menu-item"),h=$("sui-menu"),_=$("sui-container"),x=$("sui-segment"),y=$("sui-list-item"),A=$("sui-list"),T=$("doc-example"),I=$("sui-list-list"),g=$("sui-list-header"),v=$("sui-list-description"),w=$("sui-list-content"),k=$("sui-image");return S(),be("div",null,[i(x,{vertical:""},{default:n(()=>[i(_,{class:"main"},{default:n(()=>[B("div",yk,[i(p,{as:"h1"},{default:n(()=>[l("List "),i(c,null,{default:n(()=>[l(" A list is used to group related content ")]),_:1})]),_:1}),i(d,{hidden:""}),i(h,{floated:"right"},{default:n(()=>[i(f,{as:"a",icon:""},{default:n(()=>[i(m,{name:"edit"})]),_:1}),i(f,{as:"a",icon:""},{default:n(()=>[i(m,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),i(_,{class:"main"},{default:n(()=>[i(p,{as:"h2",dividing:""},{default:n(()=>[l("Types")]),_:1}),i(T,{title:"List",description:"A list groups related content",code:e.listCode},{default:n(()=>[i(A,null,{default:n(()=>[i(y,null,{default:n(()=>[l("Apples")]),_:1}),i(y,null,{default:n(()=>[l("Pears")]),_:1}),i(y,null,{default:n(()=>[l("Oranges")]),_:1})]),_:1})]),_:1},8,["code"]),i(T,{title:"Bulleted",description:"A list can mark items with a bullet",code:e.bulletedCode},{default:n(()=>[i(A,{bulleted:""},{default:n(()=>[i(y,null,{default:n(()=>[l("Gaining Access")]),_:1}),i(y,null,{default:n(()=>[l("Inviting Friends")]),_:1}),i(y,null,{default:n(()=>[wk,B("div",Ck,[i(y,{as:"a"},{default:n(()=>[l("Link to somewhere")]),_:1}),i(y,null,{default:n(()=>[l("Rebates")]),_:1}),i(y,null,{default:n(()=>[l("Discounts")]),_:1})])]),_:1}),i(y,null,{default:n(()=>[l("Warranty")]),_:1})]),_:1})]),_:1},8,["code"]),i(T,{title:"Ordered",description:"A list can be ordered numerically",code:e.orderedCode},{default:n(()=>[i(A,{ordered:""},{default:n(()=>[i(y,{as:"a"},{default:n(()=>[l("Getting Started")]),_:1}),i(y,{as:"a"},{default:n(()=>[l("Introduction")]),_:1}),i(y,null,{default:n(()=>[xk,i(I,null,{default:n(()=>[i(y,{as:"a"},{default:n(()=>[l("HTML")]),_:1}),i(y,{as:"a"},{default:n(()=>[l("Javascript")]),_:1}),i(y,{as:"a"},{default:n(()=>[l("CSS")]),_:1})]),_:1})]),_:1}),i(y,{as:"a"},{default:n(()=>[l("Review")]),_:1})]),_:1})]),_:1},8,["code"]),i(T,{title:"Link",description:"A list can be specially formatted for navigation links",code:e.linkCode},{default:n(()=>[i(A,{link:""},{default:n(()=>[i(y,{active:""},{default:n(()=>[l("Home")]),_:1}),i(y,{as:"a"},{default:n(()=>[l("About")]),_:1}),i(y,{as:"a"},{default:n(()=>[l("Jobs")]),_:1}),i(y,{as:"a"},{default:n(()=>[l("Team")]),_:1})]),_:1})]),_:1},8,["code"]),i(p,{as:"h2",dividing:""},{default:n(()=>[l("Content")]),_:1}),i(T,{title:"Item",description:"A list item can contain a set of items",code:e.itemCode},{default:n(()=>[i(A,null,{default:n(()=>[i(y,null,{default:n(()=>[l("1")]),_:1}),i(y,null,{default:n(()=>[l("2")]),_:1}),i(y,null,{default:n(()=>[l("3")]),_:1})]),_:1})]),_:1},8,["code"]),i(T,{title:"Icon",description:"A list item can contain an icon",code:e.iconCode},{default:n(()=>[i(A,null,{default:n(()=>[i(y,{as:"a"},{default:n(()=>[i(m,{name:"help"}),i(w,null,{default:n(()=>[i(g,null,{default:n(()=>[l("Floated Icon")]),_:1}),i(v,null,{default:n(()=>[l(" This text will always have a left margin to make sure it sits alongside your icon ")]),_:1})]),_:1})]),_:1}),i(y,{as:"a"},{default:n(()=>[i(m,{name:"right triangle"}),i(w,null,{default:n(()=>[i(g,null,{default:n(()=>[l("Icon Alignment")]),_:1}),i(v,null,{default:n(()=>[l(" Floated icons are by default top aligned. To have an icon top aligned try this example ")]),_:1})]),_:1})]),_:1}),i(y,null,{default:n(()=>[i(m,{name:"help"}),l(" Inline Text ")]),_:1})]),_:1})]),_:1},8,["code"]),i(T,{title:"Image",description:"A list can contain an image",code:e.imageContentCode},{default:n(()=>[i(A,null,{default:n(()=>[i(y,null,{default:n(()=>[i(k,{avatar:"",src:gk}),i(w,null,{default:n(()=>[i(g,null,{default:n(()=>[l("Rachel")]),_:1}),i(v,null,{default:n(()=>[l(" Last seen watching "),Ak,l(" just now. ")]),_:1})]),_:1})]),_:1}),i(y,null,{default:n(()=>[i(k,{avatar:"",src:hk}),i(w,null,{default:n(()=>[i(g,null,{default:n(()=>[l("Lindsay")]),_:1}),i(v,null,{default:n(()=>[l(" Last seen watching "),kk,l(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),i(y,null,{default:n(()=>[i(k,{avatar:"",src:_k}),i(w,null,{default:n(()=>[i(g,null,{default:n(()=>[l("Matthew")]),_:1}),i(v,null,{default:n(()=>[l(" Last seen watching "),Bk,l(" yesterday. ")]),_:1})]),_:1})]),_:1}),i(y,null,{default:n(()=>[i(k,{avatar:"",src:vk}),i(w,null,{default:n(()=>[i(g,null,{default:n(()=>[l("Jenny Hess")]),_:1}),i(v,null,{default:n(()=>[l(" Last seen watching "),$k,l(" 3 days ago. ")]),_:1})]),_:1})]),_:1}),i(y,null,{default:n(()=>[i(k,{avatar:"",src:Fd}),i(w,null,{default:n(()=>[i(g,null,{default:n(()=>[l("Veronika Ossi")]),_:1}),i(v,null,{default:n(()=>[l(" Has not watched anything recently ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(T,{title:"Link",description:"A list can contain links",code:e.linkContentCode},{default:n(()=>[i(A,null,{default:n(()=>[i(y,{as:"a"},{default:n(()=>[l("What is a FAQ?")]),_:1}),i(y,{as:"a"},{default:n(()=>[l("Who is our user?")]),_:1}),i(y,{as:"a"},{default:n(()=>[l("Where is our office located?")]),_:1})]),_:1})]),_:1},8,["code"]),i(T,{title:"header",description:"A list item can contain a header",code:e.headerContentCode},{default:n(()=>[i(A,null,{default:n(()=>[i(y,null,{default:n(()=>[i(g,null,{default:n(()=>[l("New York City")]),_:1}),l(" A lovely city ")]),_:1}),i(y,null,{default:n(()=>[i(g,null,{default:n(()=>[l("Chicago")]),_:1}),l(" Also quite a lovely city ")]),_:1}),i(y,null,{default:n(()=>[i(g,null,{default:n(()=>[l("Los Angeles")]),_:1}),l(" Sometimes can be a lovely city ")]),_:1}),i(y,null,{default:n(()=>[i(g,null,{default:n(()=>[l("San Francisco")]),_:1}),l(" What a lovely city ")]),_:1})]),_:1})]),_:1},8,["code"]),i(T,{title:"Description",description:"A list item can contain a description",code:e.descriptionContentCode},{default:n(()=>[i(A,null,{default:n(()=>[i(y,null,{default:n(()=>[i(m,{name:"map marker"}),i(w,null,{default:n(()=>[i(g,{as:"a"},{default:n(()=>[l("Krolewskie Jadlo")]),_:1}),i(v,null,{default:n(()=>[l(" An excellent polish restaurant, quick delivery and hearty, filling meals. ")]),_:1})]),_:1})]),_:1}),i(y,null,{default:n(()=>[i(m,{name:"map marker"}),i(w,null,{default:n(()=>[i(g,{as:"a"},{default:n(()=>[l("Xian Famous Foods")]),_:1}),i(v,null,{default:n(()=>[l(" A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers. ")]),_:1})]),_:1})]),_:1}),i(y,null,{default:n(()=>[i(m,{name:"map marker"}),i(w,null,{default:n(()=>[i(g,{as:"a"},{default:n(()=>[l("Sapporo Haru")]),_:1}),i(v,null,{default:n(()=>[l(" Greenpoint's best choice for quick and delicious sushi. ")]),_:1})]),_:1})]),_:1}),i(y,null,{default:n(()=>[i(m,{name:"map marker"}),i(w,null,{default:n(()=>[i(g,{as:"a"},{default:n(()=>[l("Enid's")]),_:1}),i(v,null,{default:n(()=>[l(" At night a bar, during the day a delicious brunch spot. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(p,{as:"h2",dividing:""},{default:n(()=>[l("Variations")]),_:1}),i(T,{title:"Horizontal",description:"A list can be formatted to have items appear horizontally",code:e.horizontalVarCode},{default:n(()=>[i(A,{horizontal:""},{default:n(()=>[i(y,null,{default:n(()=>[i(k,{avatar:"",src:bk}),i(w,null,{default:n(()=>[i(g,null,{default:n(()=>[l("Tom")]),_:1}),l(" Top Contributor ")]),_:1})]),_:1}),i(y,null,{default:n(()=>[i(k,{avatar:"",src:Ra}),i(w,null,{default:n(()=>[i(g,null,{default:n(()=>[l("Christian Rocha")]),_:1}),l(" Admin ")]),_:1})]),_:1}),i(y,null,{default:n(()=>[i(k,{avatar:"",src:Vd}),i(w,null,{default:n(()=>[i(g,null,{default:n(()=>[l("Matt")]),_:1}),l(" Top Rated User ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(T,{title:"Inverted",description:"A list can be inverted to appear on a dark background",code:e.invertedVarCode},{default:n(()=>[i(x,{inverted:""},{default:n(()=>[i(A,{inverted:"",relaxed:"",divided:""},{default:n(()=>[i(y,null,{default:n(()=>[i(w,null,{default:n(()=>[i(g,null,{default:n(()=>[l("Snickerdoodle")]),_:1}),l(" An excellent companion ")]),_:1})]),_:1}),i(y,null,{default:n(()=>[i(w,null,{default:n(()=>[i(g,null,{default:n(()=>[l("Poodle")]),_:1}),l(" A poodle, its pretty basic ")]),_:1})]),_:1}),i(y,null,{default:n(()=>[i(w,null,{default:n(()=>[i(g,null,{default:n(()=>[l("Paulo")]),_:1}),l(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(T,{title:"Selection",description:"A selection list formats list items as possible choices",code:e.selectionVarCode},{default:n(()=>[i(A,{selection:"",verticalAlign:"middle"},{default:n(()=>[i(y,null,{default:n(()=>[i(k,{avatar:"",src:za}),i(w,null,{default:n(()=>[i(g,null,{default:n(()=>[l("Helen")]),_:1})]),_:1})]),_:1}),i(y,null,{default:n(()=>[i(k,{avatar:"",src:Ra}),i(w,null,{default:n(()=>[i(g,null,{default:n(()=>[l("Christian")]),_:1})]),_:1})]),_:1}),i(y,null,{default:n(()=>[i(k,{avatar:"",src:Li}),i(w,null,{default:n(()=>[i(g,null,{default:n(()=>[l("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(T,{title:"Animated",description:"A list can animate to set the current item apart from the list",code:e.animatedVarCode},{default:n(()=>[i(A,{animated:"",verticalAlign:"middle"},{default:n(()=>[i(y,null,{default:n(()=>[i(k,{avatar:"",src:za}),i(w,null,{default:n(()=>[i(g,null,{default:n(()=>[l("Helen")]),_:1})]),_:1})]),_:1}),i(y,null,{default:n(()=>[i(k,{avatar:"",src:Ra}),i(w,null,{default:n(()=>[i(g,null,{default:n(()=>[l("Christian")]),_:1})]),_:1})]),_:1}),i(y,null,{default:n(()=>[i(k,{avatar:"",src:Li}),i(w,null,{default:n(()=>[i(g,null,{default:n(()=>[l("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(T,{title:"Relaxed",description:"A list can relax its padding to provide more negative space",code:e.relaxedVarCode},{default:n(()=>[i(A,{relaxed:""},{default:n(()=>[i(y,null,{default:n(()=>[i(k,{avatar:"",src:Li}),i(w,null,{default:n(()=>[i(g,{as:"a"},{default:n(()=>[l("Daniel Louise")]),_:1}),i(v,null,{default:n(()=>[l(" Last seen watching "),Tk,l(" just now. ")]),_:1})]),_:1})]),_:1}),i(y,null,{default:n(()=>[i(k,{avatar:"",src:Il}),i(w,null,{default:n(()=>[i(g,{as:"a"},{default:n(()=>[l("Stevie Feliciano")]),_:1}),i(v,null,{default:n(()=>[l(" Last seen watching "),Lk,l(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),i(y,null,{default:n(()=>[i(k,{avatar:"",src:pa}),i(w,null,{default:n(()=>[i(g,{as:"a"},{default:n(()=>[l("Elliot Fu")]),_:1}),i(v,null,{default:n(()=>[l(" Last seen watching "),Dk,l(" yesterday. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(T,{title:"Divided",description:"A list can show divisions between content",code:e.dividedVarCode},{default:n(()=>[i(A,{divided:"",verticalAlign:"middle"},{default:n(()=>[i(y,null,{default:n(()=>[i(k,{avatar:"",src:Li}),i(w,null,{default:n(()=>[i(g,{as:"a"},{default:n(()=>[l("Daniel Louise")]),_:1})]),_:1})]),_:1}),i(y,null,{default:n(()=>[i(k,{avatar:"",src:Il}),i(w,null,{default:n(()=>[i(g,{as:"a"},{default:n(()=>[l("Stevie Feliciano")]),_:1})]),_:1})]),_:1}),i(y,null,{default:n(()=>[i(k,{avatar:"",src:pa}),i(w,null,{default:n(()=>[i(g,{as:"a"},{default:n(()=>[l("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(T,{title:"Celled",description:"A list can divide its items into cells",code:e.celledVarCode},{default:n(()=>[i(A,{celled:""},{default:n(()=>[i(y,null,{default:n(()=>[i(k,{avatar:"",src:za}),i(w,null,{default:n(()=>[i(g,null,{default:n(()=>[l("Snickerdoodle")]),_:1}),l(" An excellent companion ")]),_:1})]),_:1}),i(y,null,{default:n(()=>[i(k,{avatar:"",src:Li}),i(w,null,{default:n(()=>[i(g,null,{default:n(()=>[l("Poodle")]),_:1}),l(" A poodle, its pretty basic ")]),_:1})]),_:1}),i(y,null,{default:n(()=>[i(k,{avatar:"",src:Li}),i(w,null,{default:n(()=>[i(g,null,{default:n(()=>[l("Paulo")]),_:1}),l(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(T,{title:"Size",description:"A list can vary in size",code:e.sizeCode},{default:n(()=>[i(A,{horizontal:"",divided:"",size:"mini"},{default:n(()=>[i(y,null,{default:n(()=>[i(k,{avatar:"",src:za}),i(w,null,{default:n(()=>[i(g,null,{default:n(()=>[l("Helen")]),_:1})]),_:1})]),_:1}),i(y,null,{default:n(()=>[i(k,{avatar:"",src:Ra}),i(w,null,{default:n(()=>[i(g,null,{default:n(()=>[l("Christian")]),_:1})]),_:1})]),_:1}),i(y,null,{default:n(()=>[i(k,{avatar:"",src:Li}),i(w,null,{default:n(()=>[i(g,null,{default:n(()=>[l("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(p,{as:"h2",dividing:""},{default:n(()=>[l("Content Variations")]),_:1}),i(T,{title:"Vertical Aligned",description:"An element inside a list can be vertically aligned",code:e.verticalAlignedCode},{default:n(()=>[i(A,{horizontal:""},{default:n(()=>[i(y,null,{default:n(()=>[i(k,{avatar:"",src:Ko}),i(w,{verticalAlign:"top"},{default:n(()=>[l(" Top Aligned ")]),_:1})]),_:1}),i(y,null,{default:n(()=>[i(k,{avatar:"",src:Ko}),i(w,{verticalAlign:"middle"},{default:n(()=>[l(" Middle ")]),_:1})]),_:1}),i(y,null,{default:n(()=>[i(k,{avatar:"",src:Ko}),i(w,{verticalAlign:"bottom"},{default:n(()=>[l(" Bottom ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(T,{title:"Floated",description:"An list, or an element inside a list can be floated left or right",code:e.floatedCode},{default:n(()=>[B("div",null,[i(A,{floated:"right",horizontal:""},{default:n(()=>[i(y,{disabled:""},{default:n(()=>[l("© GitHub, Inc.")]),_:1}),i(y,{as:"a"},{default:n(()=>[l("Terms")]),_:1}),i(y,{as:"a"},{default:n(()=>[l("Privacy")]),_:1}),i(y,{as:"a"},{default:n(()=>[l("Contact")]),_:1})]),_:1}),i(A,{horizontal:""},{default:n(()=>[i(y,{as:"a"},{default:n(()=>[l("About Us")]),_:1}),i(y,{as:"a"},{default:n(()=>[l("Jobs")]),_:1})]),_:1})])]),_:1},8,["code"])]),_:1})])}const Ek=Ne(Sk,[["render",Ik]]),Rk=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader />
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,zk={__name:"LoaderDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Loader",code:Rk},{description:n(()=>[l(" A loader ")]),example:n(()=>[i(r(O),null,{default:n(()=>[i(r(Yt),{active:""},{default:n(()=>[i(r(Pe))]),_:1}),i(r(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Pk=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text>Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Fk={__name:"TextLoaderDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Text Loader",code:Pk},{description:n(()=>[l(" A loader can contain text ")]),example:n(()=>[i(r(O),null,{default:n(()=>[i(r(Yt),{active:""},{default:n(()=>[i(r(Pe),{text:""},{default:n(()=>[l("Loading")]),_:1})]),_:1}),i(r(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Vk=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader Indeterminate text>Preparing Files</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Mk={__name:"IndeterminateDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Indeterminate",code:Vk},{description:n(()=>[l(" A loader can show it's unsure of how long a task will take ")]),example:n(()=>[i(r(O),null,{default:n(()=>[i(r(Yt),{active:""},{default:n(()=>[i(r(Pe),{Indeterminate:"",text:""},{default:n(()=>[l("Preparing Files")]),_:1})]),_:1}),i(r(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Hk=`<template>
  <SuiSegment>
    <SuiLoader active />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Ok={__name:"ActiveDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Active",code:Hk},{description:n(()=>[l(" A loader can be active or visible ")]),example:n(()=>[i(r(O),null,{default:n(()=>[i(r(Pe),{active:""}),i(r(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},qk=`<template>
  <SuiSegment>
    <SuiLoader disabled />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Nk={__name:"DisabledDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Disabled",code:qk},{description:n(()=>[l(" A loader can be disabled or hidden ")]),example:n(()=>[i(r(O),null,{default:n(()=>[i(r(Pe),{disabled:""}),i(r(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Gk=`<template>
  <SuiLoader active inline />
</template>`,jk={__name:"InlineDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Inline",code:Gk},{description:n(()=>[l(" Loaders can appear inline with content ")]),example:n(()=>[i(r(Pe),{active:"",inline:""})]),_:1}))}},Uk=`<template>
  <SuiLoader active inline />
</template>`,Yk={__name:"InlineCenterDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Inline Center",code:Uk},{description:n(()=>[l(" Loaders can appear inline centered with content ")]),example:n(()=>[i(r(Pe),{active:"",inline:"centered"})]),_:1}))}},Wk=`<template>
  <SuiLoader slow active inline />
  <SuiLoader active inline />
  <SuiLoader fast active inline />
</template>`,Kk={__name:"SpeedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Speed",code:Wk},{description:n(()=>[l(" Loaders can appear slow, normal or fast ")]),example:n(()=>[i(r(Pe),{slow:"",active:"",inline:""}),i(r(Pe),{active:"",inline:""}),i(r(Pe),{fast:"",active:"",inline:""})]),_:1}))}},Xk=`<template>
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
</template>`,Jk={__name:"ColorsDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Colors",code:Xk},{description:n(()=>[l(" Loaders can be different colors ")]),example:n(()=>[i(r(Pe),{active:"",inline:"",primary:""}),i(r(Pe),{active:"",inline:"",secondary:""}),i(r(Pe),{active:"",inline:"",color:"red"}),i(r(Pe),{active:"",inline:"",color:"orange"}),i(r(Pe),{active:"",inline:"",color:"yellow"}),i(r(Pe),{active:"",inline:"",color:"olive"}),i(r(Pe),{active:"",inline:"",color:"green"}),i(r(Pe),{active:"",inline:"",color:"teal"}),i(r(Pe),{active:"",inline:"",color:"blue"}),i(r(Pe),{active:"",inline:"",color:"violet"}),i(r(Pe),{active:"",inline:"",color:"purple"}),i(r(Pe),{active:"",inline:"",color:"pink"}),i(r(Pe),{active:"",inline:"",color:"brown"}),i(r(Pe),{active:"",inline:"",color:"grey"}),i(r(Pe),{active:"",inline:"",color:"black"})]),_:1}))}},Qk=`<template>
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
</template>`,Zk={__name:"SizeDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Size",code:Qk},{description:n(()=>[l(" Loaders can have different sizes ")]),example:n(()=>[i(r(O),null,{default:n(()=>[i(r(Yt),{active:""},{default:n(()=>[i(r(Pe),{text:"",size:"mini"},{default:n(()=>[l("Loading")]),_:1})]),_:1}),i(r(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),i(r(O),null,{default:n(()=>[i(r(Yt),{active:""},{default:n(()=>[i(r(Pe),{text:"",size:"tiny"},{default:n(()=>[l("Loading")]),_:1})]),_:1}),i(r(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),i(r(O),null,{default:n(()=>[i(r(Yt),{active:""},{default:n(()=>[i(r(Pe),{text:"",size:"small"},{default:n(()=>[l("Loading")]),_:1})]),_:1}),i(r(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),i(r(O),null,{default:n(()=>[i(r(Yt),{active:""},{default:n(()=>[i(r(Pe),{text:"",size:"large"},{default:n(()=>[l("Loading")]),_:1})]),_:1}),i(r(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),i(r(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),i(r(O),null,{default:n(()=>[i(r(Yt),{active:""},{default:n(()=>[i(r(Pe),{text:"",size:"big"},{default:n(()=>[l("Loading")]),_:1})]),_:1}),i(r(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),i(r(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),i(r(O),null,{default:n(()=>[i(r(Yt),{active:""},{default:n(()=>[i(r(Pe),{text:"",size:"huge"},{default:n(()=>[l("Loading")]),_:1})]),_:1}),i(r(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),i(r(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},eB=`<template>
  <SuiSegment inverted>
    <SuiLoader active inverted />

    <SuiImage src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,tB={__name:"InvertedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Inverted",code:eB},{description:n(()=>[l(" Loaders can have their colors inverted. ")]),example:n(()=>[i(r(O),{inverted:""},{default:n(()=>[i(r(Pe),{active:"",inverted:""}),i(r(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},iB={__name:"Loader",setup(e){const t=[{id:"loader",label:"Loader",category:"Types",component:zk},{id:"text-loader",label:"Text Loader",category:"Types",component:Fk},{id:"indeterminate",label:"Indeterminate",category:"States",component:Mk},{id:"active",label:"Active",category:"States",component:Ok},{id:"disabled",label:"Disabled",category:"States",component:Nk},{id:"inline",label:"Inline",category:"Variations",component:jk},{id:"inline-center",label:"Inline Center",category:"Variations",component:Yk},{id:"speed",label:"Speed",category:"Variations",component:Kk},{id:"colors",label:"Colors",category:"Variations",component:Jk},{id:"size",label:"Size",category:"Variations",component:Zk},{id:"inverted",label:"Inverted",category:"Variations",component:tB}];return(a,o)=>(S(),C(lt,{title:"Loader",description:"A loader alerts a user to wait for an activity to complete","component-docs":t}))}},an="/vue-fomantic-ui/images/wireframe/short-paragraph.png",nB=F({name:"RailDoc",components:{DocExample:_t},setup(){return{railCode:`<sui-grid centered :columns="3">
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
</sui-grid>`}}}),aB={class:"intro"};function oB(e,t,a,o,s,u){const c=$("sui-header-subheader"),p=$("sui-header"),d=$("sui-divider"),m=$("sui-icon"),f=$("sui-menu-item"),h=$("sui-menu"),_=$("sui-container"),x=$("sui-segment"),y=$("sui-image"),A=$("sui-rail"),T=$("sui-grid-column"),I=$("sui-grid"),g=$("doc-example");return S(),be("div",null,[i(x,{vertical:""},{default:n(()=>[i(_,{class:"main"},{default:n(()=>[B("div",aB,[i(p,{as:"h1"},{default:n(()=>[l("Rail "),i(c,null,{default:n(()=>[l(" A rail is used to show accompanying content outside the boundaries of the main view of a site ")]),_:1})]),_:1}),i(d,{hidden:""}),i(h,{floated:"right"},{default:n(()=>[i(f,{as:"a",icon:""},{default:n(()=>[i(m,{name:"edit"})]),_:1}),i(f,{as:"a",icon:""},{default:n(()=>[i(m,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),i(_,{class:"main"},{default:n(()=>[i(p,{as:"h2",dividing:""},{default:n(()=>[l("Types")]),_:1}),i(g,{title:"Rail",description:"A rail can be presented on the left or right side of a container",code:e.railCode},{default:n(()=>[i(I,{centered:"",columns:3},{default:n(()=>[i(T,null,{default:n(()=>[i(x,null,{default:n(()=>[i(y,{src:an}),i(A,{position:"left"},{default:n(()=>[i(x,null,{default:n(()=>[l(" Left Rail Content ")]),_:1})]),_:1}),i(A,{position:"right"},{default:n(()=>[i(x,null,{default:n(()=>[l(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(g,{title:"Internal",description:"A rail can attach itself to the inside of a container",code:e.internalCode},{default:n(()=>[i(x,{textAlign:"center"},{default:n(()=>[i(y,{src:an}),i(A,{internal:"",position:"left"},{default:n(()=>[i(x,null,{default:n(()=>[l("Left Rail Content")]),_:1})]),_:1}),i(A,{internal:"",position:"right"},{default:n(()=>[i(x,null,{default:n(()=>[l("Right Rail Content")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(g,{title:"Dividing",description:"A rail can create a division between itself and a container",code:e.dividingCode},{default:n(()=>[i(I,{centered:"",columns:3},{default:n(()=>[i(T,null,{default:n(()=>[i(x,null,{default:n(()=>[i(y,{src:an}),i(A,{dividing:"",position:"left"},{default:n(()=>[i(x,null,{default:n(()=>[l(" Left Rail Content ")]),_:1})]),_:1}),i(A,{dividing:"",position:"right"},{default:n(()=>[i(x,null,{default:n(()=>[l(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(p,{as:"h2",dividing:""},{default:n(()=>[l("Variations")]),_:1}),i(g,{title:"Attached",description:"A rail can appear attached to the main viewport",code:e.attachedCode},{default:n(()=>[i(I,{centered:"",columns:3},{default:n(()=>[i(T,null,{default:n(()=>[i(x,null,{default:n(()=>[i(y,{src:an}),i(A,{attached:"",position:"left"},{default:n(()=>[i(x,null,{default:n(()=>[l(" Left Rail Content ")]),_:1})]),_:1}),i(A,{attached:"",position:"right"},{default:n(()=>[i(x,null,{default:n(()=>[l(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(g,{title:"Close",description:"A rail can appear closer to the main viewport",code:e.closeCode},{default:n(()=>[i(I,{centered:"",columns:3},{default:n(()=>[i(T,null,{default:n(()=>[i(x,null,{default:n(()=>[i(y,{src:an}),i(A,{close:"",position:"left"},{default:n(()=>[i(x,null,{default:n(()=>[l(" Left Rail Content ")]),_:1})]),_:1}),i(A,{close:"",position:"right"},{default:n(()=>[i(x,null,{default:n(()=>[l(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(g,{title:"Size",description:"A rail can have different sizes",code:e.sizeCode},{default:n(()=>[i(I,{centered:"",columns:3},{default:n(()=>[i(T,null,{default:n(()=>[i(x,null,{default:n(()=>[i(y,{src:an}),i(A,{size:"small",position:"left"},{default:n(()=>[l(" Left Small Rail ")]),_:1}),i(A,{size:"large",position:"right"},{default:n(()=>[l(" Right Large Rail ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const lB=Ne(nB,[["render",oB]]),sB=`<template>
  <SuiReveal animated="fade">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/ade.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,rB={__name:"FadeDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Fade",code:sB},{description:n(()=>[l(" An element can disappear to reveal content below ")]),example:n(()=>[i(r(en),{animated:"fade"},{default:n(()=>[i(r(Et),{visible:""},{default:n(()=>[i(r(le),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),i(r(Et),{hidden:""},{default:n(()=>[i(r(le),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/ade.jpg"})]),_:1})]),_:1})]),_:1}))}},uB=`<template>
  <SuiReveal animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/chris.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,cB={__name:"MoveDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Move",code:uB},{description:n(()=>[l(" An element can move in a direction to reveal content ")]),example:n(()=>[i(r(en),{animated:"move"},{default:n(()=>[i(r(Et),{visible:""},{default:n(()=>[i(r(le),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),i(r(Et),{hidden:""},{default:n(()=>[i(r(le),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/chris.jpg"})]),_:1})]),_:1})]),_:1}))}},dB=`<template>
  <SuiReveal animated="rotate">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/stevie.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,pB={__name:"RotateDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Rotate",code:dB},{description:n(()=>[l(" An element can rotate to reveal content below ")]),example:n(()=>[i(r(en),{animated:"rotate"},{default:n(()=>[i(r(Et),{visible:""},{default:n(()=>[i(r(le),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),i(r(Et),{hidden:""},{default:n(()=>[i(r(le),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/stevie.jpg"})]),_:1})]),_:1})]),_:1}))}},mB=`<template>
  <SuiReveal active animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/nan.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,fB={__name:"ActiveDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Active",code:mB},{description:n(()=>[l(" An active reveal displays its hidden content ")]),example:n(()=>[i(r(en),{active:"",animated:"move"},{default:n(()=>[i(r(Et),{visible:""},{default:n(()=>[i(r(le),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),i(r(Et),{hidden:""},{default:n(()=>[i(r(le),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/nan.jpg"})]),_:1})]),_:1})]),_:1}))}},gB=`<template>
  <SuiReveal disabled animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/nan.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,hB={__name:"DisabledDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Disabled",code:gB},{description:n(()=>[l(" A disabled reveal will not animate when hovered ")]),example:n(()=>[i(r(en),{disabled:"",animated:"move"},{default:n(()=>[i(r(Et),{visible:""},{default:n(()=>[i(r(le),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),i(r(Et),{hidden:""},{default:n(()=>[i(r(le),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/nan.jpg"})]),_:1})]),_:1})]),_:1}))}},_B=`<template>
  <SuiReveal instant animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/chris.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,vB={__name:"InstantDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Instant",code:_B},{description:n(()=>[l(" An element can show its content without delay ")]),example:n(()=>[i(r(en),{instant:"",animated:"move"},{default:n(()=>[i(r(Et),{visible:""},{default:n(()=>[i(r(le),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),i(r(Et),{hidden:""},{default:n(()=>[i(r(le),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/chris.jpg"})]),_:1})]),_:1})]),_:1}))}},bB={__name:"Reveal",setup(e){const t=[{id:"fade",label:"Fade",category:"Types",component:rB},{id:"move",label:"Move",category:"Types",component:cB},{id:"rotate",label:"Rotate",category:"Types",component:pB},{id:"active",label:"Active",category:"States",component:fB},{id:"disabled",label:"Disabled",category:"States",component:hB},{id:"instant",label:"Instant",category:"Variations",component:vB}];return(a,o)=>(S(),C(lt,{title:"Reveal",description:"A reveal displays additional content in place of previous content when activated","component-docs":t}))}},SB=B("p",null,"Pellentesque habitant morbi tristique senectus.",-1),yB=`<template>
  <SuiSegment>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
</template>`,wB={__name:"SegmentDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Segment",code:yB},{description:n(()=>[l(" A segment of content ")]),example:n(()=>[i(r(O),null,{default:n(()=>[SB]),_:1})]),_:1}))}},CB=`<template>
  <SuiSegment placeholder>
    <SuiHeader icon>
      <SuiIcon name="pdf file outline" />
      No documents are listed for this customer.
    </SuiHeader>
    <SuiButton primary>Add Document</SuiButton>
  </SuiSegment>
</template>`,xB={__name:"PlaceholderSegmentDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Placeholder Segment",code:CB},{description:n(()=>[l(" A segment can be used to reserve space for conditionally displayed content. ")]),example:n(()=>[i(r(O),{placeholder:""},{default:n(()=>[i(r(fe),{icon:""},{default:n(()=>[i(r(W),{name:"pdf file outline"}),l(" No documents are listed for this customer. ")]),_:1}),i(r(z),{primary:""},{default:n(()=>[l("Add Document")]),_:1})]),_:1})]),_:1}))}},AB=B("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),kB=`<template>
  <SuiSegment raised>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,BB={__name:"RaisedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Raised",code:kB},{description:n(()=>[l(" A segment may be formatted to raise above the page. ")]),example:n(()=>[i(r(O),{raised:""},{default:n(()=>[AB]),_:1})]),_:1}))}},$B=B("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),TB=B("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),LB=`<template>
  <SuiSegment stacked>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
  <SuiSegment stacked="tall">
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,DB={__name:"StackedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Stacked",code:LB},{description:n(()=>[l(" A segment can be formatted to show it contains multiple pages ")]),example:n(()=>[i(r(O),{stacked:""},{default:n(()=>[$B]),_:1}),i(r(O),{stacked:"tall"},{default:n(()=>[TB]),_:1})]),_:1}))}},IB=B("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),EB=B("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),RB=B("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),zB=`<template>
  <SuiHeader as="h4">Header</SuiHeader>
  <SuiSegment pailed>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
  </SuiSegment>
</template>`,PB={__name:"PiledDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Piled",code:zB},{description:n(()=>[l(" A segment can be formatted to look like a pile of pages ")]),example:n(()=>[i(r(fe),{as:"h4"},{default:n(()=>[l("Header")]),_:1}),i(r(O),{piled:""},{default:n(()=>[IB,EB,RB]),_:1})]),_:1}))}},FB=B("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his.",-1),VB=B("p",null,"Pellentesque habitant morbi tristique senectus.",-1),MB=B("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.",-1),HB=`<template>
  <SuiSegment vertical>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his.</p>
  </SuiSegment>
  <SuiSegment vertical>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
  <SuiSegment vertical>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.</p>
  </SuiSegment>
</template>`,OB={__name:"VerticalSegmentDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Vertical Segment",code:HB},{description:n(()=>[l(" A vertical segment formats content to be aligned as part of a vertical group ")]),example:n(()=>[i(r(O),{vertical:""},{default:n(()=>[FB]),_:1}),i(r(O),{vertical:""},{default:n(()=>[VB]),_:1}),i(r(O),{vertical:""},{default:n(()=>[MB]),_:1})]),_:1}))}},qB=B("p",null,"Top",-1),NB=B("p",null,"Middle",-1),GB=B("p",null,"Bottom",-1),jB=B("p",null,"Top",-1),UB=B("p",null,"Middle",-1),YB=B("p",null,"Bottom",-1),WB=B("p",null,"Top",-1),KB=B("p",null,"Middle",-1),XB=B("p",null,"Bottom",-1),JB=`<template>
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
</template>`,QB={__name:"SegmentsDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Segments",code:JB},{description:n(()=>[l(" A group of segments can be formatted to appear together ")]),example:n(()=>[i(r(yt),null,{default:n(()=>[i(r(O),null,{default:n(()=>[qB]),_:1}),i(r(O),null,{default:n(()=>[NB]),_:1}),i(r(O),null,{default:n(()=>[GB]),_:1})]),_:1}),i(r(yt),{basic:""},{default:n(()=>[i(r(O),null,{default:n(()=>[jB]),_:1}),i(r(O),null,{default:n(()=>[UB]),_:1}),i(r(O),null,{default:n(()=>[YB]),_:1})]),_:1}),i(r(yt),null,{default:n(()=>[i(r(O),null,{default:n(()=>[WB]),_:1}),i(r(O),{color:"red"},{default:n(()=>[KB]),_:1}),i(r(O),{secondary:""},{default:n(()=>[XB]),_:1})]),_:1})]),_:1}))}},ZB=B("p",null,"Top",-1),e$=B("p",null,"Nested Top",-1),t$=B("p",null,"Nested Middle",-1),i$=B("p",null,"Nested Bottom",-1),n$=B("p",null,"Middle",-1),a$=B("p",null,"Top",-1),o$=B("p",null,"Middle",-1),l$=B("p",null,"Bottom",-1),s$=B("p",null,"Bottom",-1),r$=`<template>
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
</template>`,u$={__name:"NestedSegmentsDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Nested Segments",code:r$},{description:n(()=>[l(" A group of segments can be nested in another group of segments ")]),example:n(()=>[i(r(yt),null,{default:n(()=>[i(r(O),null,{default:n(()=>[ZB]),_:1}),i(r(yt),null,{default:n(()=>[i(r(O),null,{default:n(()=>[e$]),_:1}),i(r(O),null,{default:n(()=>[t$]),_:1}),i(r(O),null,{default:n(()=>[i$]),_:1})]),_:1}),i(r(O),null,{default:n(()=>[n$]),_:1}),i(r(yt),{horizontal:""},{default:n(()=>[i(r(O),null,{default:n(()=>[a$]),_:1}),i(r(O),null,{default:n(()=>[o$]),_:1}),i(r(O),null,{default:n(()=>[l$]),_:1})]),_:1}),i(r(O),null,{default:n(()=>[s$]),_:1})]),_:1})]),_:1}))}},c$=B("p",null,"Left",-1),d$=B("p",null,"Middle",-1),p$=B("p",null,"Right",-1),m$=`<template>
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
</template>`,f$={__name:"HorizontalSegmentsDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Horizontal Segments",code:m$},{description:n(()=>[l(" A segment group can appear horizontally ")]),example:n(()=>[i(r(yt),{horizontal:""},{default:n(()=>[i(r(O),null,{default:n(()=>[c$]),_:1}),i(r(O),null,{default:n(()=>[d$]),_:1}),i(r(O),null,{default:n(()=>[p$]),_:1})]),_:1})]),_:1}))}},g$=`<template>
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
</template>`,h$={__name:"HorizontalEqualWidthSegmentsDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Horizontal equal width Segments",code:g$},{description:n(()=>[l(" A horizontal segment group can automatically divide segments to be equal width ")]),example:n(()=>[i(r(yt),{horizontal:"equal width"},{default:n(()=>[i(r(O),null,{default:n(()=>[l(" Segment One ")]),_:1}),i(r(O),null,{default:n(()=>[l(" Segment Two with a lot of additional content ")]),_:1}),i(r(O),null,{default:n(()=>[l(" Segment Three ")]),_:1})]),_:1})]),_:1}))}},_$=`<template>
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
</template>`,v$={__name:"HorizontalWrappingSegmentsDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Horizontal wrapping Segments",code:_$},{description:n(()=>[l(" A horizontal segment group can automatically wrap their segments on smaller screens ")]),example:n(()=>[i(r(yt),{horizontal:"wrapping"},{default:n(()=>[i(r(O),null,{default:n(()=>[l(" Segment One ")]),_:1}),i(r(O),null,{default:n(()=>[l(" Segment Two ")]),_:1}),i(r(O),null,{default:n(()=>[l(" Segment Three ")]),_:1}),i(r(O),null,{default:n(()=>[l(" Segment Four ")]),_:1}),i(r(O),null,{default:n(()=>[l(" Segment Five ")]),_:1}),i(r(O),null,{default:n(()=>[l(" Segment Six ")]),_:1}),i(r(O),null,{default:n(()=>[l(" Segment Seven ")]),_:1}),i(r(O),null,{default:n(()=>[l(" Segment Eight ")]),_:1})]),_:1})]),_:1}))}},b$=B("p",null,"Top",-1),S$=B("p",null,"Middle",-1),y$=B("p",null,"Bottom",-1),w$=`<template>
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
</template>`,C$={__name:"RaisedSegmentsDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Raised Segments",code:w$},{description:n(()=>[l(" A group of segments can be raised ")]),example:n(()=>[i(r(yt),{raised:""},{default:n(()=>[i(r(O),null,{default:n(()=>[b$]),_:1}),i(r(O),null,{default:n(()=>[S$]),_:1}),i(r(O),null,{default:n(()=>[y$]),_:1})]),_:1})]),_:1}))}},x$=B("p",null,"Top",-1),A$=B("p",null,"Middle",-1),k$=B("p",null,"Bottom",-1),B$=`<template>
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
</template>`,$$={__name:"StackedSegmentsDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Stacked Segments",code:B$},{description:n(()=>[l(" A group of segments can be stacked ")]),example:n(()=>[i(r(yt),{stacked:""},{default:n(()=>[i(r(O),null,{default:n(()=>[x$]),_:1}),i(r(O),null,{default:n(()=>[A$]),_:1}),i(r(O),null,{default:n(()=>[k$]),_:1})]),_:1})]),_:1}))}},T$=B("p",null,"Top",-1),L$=B("p",null,"Middle",-1),D$=B("p",null,"Bottom",-1),I$=`<template>
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
</template>`,E$={__name:"PiledSegmentsDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Piled Segments",code:I$},{description:n(()=>[l(" A group of segments can be piled ")]),example:n(()=>[i(r(yt),{piled:""},{default:n(()=>[i(r(O),null,{default:n(()=>[T$]),_:1}),i(r(O),null,{default:n(()=>[L$]),_:1}),i(r(O),null,{default:n(()=>[D$]),_:1})]),_:1})]),_:1}))}},R$=B("p",null,"Pellentesque habitant morbi tristique senectus.",-1),z$=`<template>
  <SuiSegment disabled>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
</template>`,P$={__name:"DisabledDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Disabled",code:z$},{description:n(()=>[l(" A segment may show its content is disabled ")]),example:n(()=>[i(r(O),{disabled:""},{default:n(()=>[R$]),_:1})]),_:1}))}},F$=`<template>
  <SuiSegment loading>
    <SuiImage src="/images/wireframe/paragraph.png" />
  </SuiSegment>
</template>`,V$={__name:"LoadingDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Loading",code:F$},{description:n(()=>[l(" A segment may show its content is being loaded ")]),example:n(()=>[i(r(O),{loading:""},{default:n(()=>[i(r(le),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}))}},M$=B("p",null,"I'm here to tell you something, and you will probably read me first.",-1),H$=`<template>
  <SuiSegment inverted>
    <p>I'm here to tell you something, and you will probably read me first.</p>
  </SuiSegment>
</template>`,O$={__name:"InvertedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Inverted",code:H$},{description:n(()=>[l(" A segment can have its colors inverted for contrast ")]),example:n(()=>[i(r(O),{inverted:""},{default:n(()=>[M$]),_:1})]),_:1}))}},q$=B("p",null,"This segment is on top",-1),N$=B("p",null,"This segment is attached on both sides",-1),G$=B("p",null,"This segment is on bottom",-1),j$=`<template>
  <SuiSegment attached="top">
    <p>This segment is on top</p>
  </SuiSegment>
  <SuiSegment attached>
    <p>This segment is attached on both sides</p>
  </SuiSegment>
  <SuiSegment attached="bottom">
    <p>This segment is on bottom</p>
  </SuiSegment>
</template>`,U$={__name:"AttachedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Attached",code:j$},{description:n(()=>[l(" A segment can be attached to other content on a page ")]),example:n(()=>[i(r(O),{attached:"top"},{default:n(()=>[q$]),_:1}),i(r(O),{attached:""},{default:n(()=>[N$]),_:1}),i(r(O),{attached:"bottom"},{default:n(()=>[G$]),_:1})]),_:1}))}},Y$=B("p",null,"Padded content.",-1),W$=B("p",null,"Padded content.",-1),K$=`<template>
  <SuiSegment padded>
    <p>Padded content.</p>
  </SuiSegment>
  <SuiSegment padded="very">
    <p>Padded content.</p>
  </SuiSegment>
</template>`,X$={__name:"PaddedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Padded",code:K$},{description:n(()=>[l(" A segment can increase its padding ")]),example:n(()=>[i(r(O),{padded:""},{default:n(()=>[Y$]),_:1}),i(r(O),{padded:"very"},{default:n(()=>[W$]),_:1})]),_:1}))}},J$=B("p",null,"Fitted Segment",-1),Q$=B("p",null,"Horizontally fitted segment",-1),Z$=B("p",null,"Vertically fitted segment",-1),eT=`<template>
  <SuiSegment fitted>
    <p>Fitted Segment</p>
  </SuiSegment>
  <SuiSegment fitted="horizontally">
    <p>Horizontally fitted segment</p>
  </SuiSegment>
  <SuiSegment fitted="vertically">
    <p>Vertically fitted segment</p>
  </SuiSegment>
</template>`,tT={__name:"FittedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Fitted",code:eT},{description:n(()=>[l(" A segment can remove its padding, vertically or horizontally ")]),example:n(()=>[i(r(O),{fitted:""},{default:n(()=>[J$]),_:1}),i(r(O),{fitted:"horizontally"},{default:n(()=>[Q$]),_:1}),i(r(O),{fitted:"vertically"},{default:n(()=>[Z$]),_:1})]),_:1}))}},iT=B("p",null,"Pellentesque habitant morbi",-1),nT=B("p",null,"Pellentesque habitant morbi",-1),aT=B("p",null,"Pellentesque habitant morbi",-1),oT=`<template>
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
</template>`,lT={__name:"CompactDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Compact",code:oT},{description:n(()=>[l(" A segment may take up only as much space as is necessary ")]),example:n(()=>[i(r(O),{compact:""},{default:n(()=>[iT]),_:1}),i(r(yt),{compact:""},{default:n(()=>[i(r(O),null,{default:n(()=>[nT]),_:1}),i(r(O),null,{default:n(()=>[aT]),_:1})]),_:1})]),_:1}))}},sT=`<template>
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
</template>`,rT={__name:"ColoredDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Colored",code:sT},{description:n(()=>[l(" A segment can be colored ")]),example:n(()=>[i(r(O),{color:"red"},{default:n(()=>[l("Red")]),_:1}),i(r(O),{color:"orange"},{default:n(()=>[l("Orange")]),_:1}),i(r(O),{color:"yellow"},{default:n(()=>[l("Yellow")]),_:1}),i(r(O),{color:"olive"},{default:n(()=>[l("Olive")]),_:1}),i(r(O),{color:"green"},{default:n(()=>[l("Green")]),_:1}),i(r(O),{color:"teal"},{default:n(()=>[l("Teal")]),_:1}),i(r(O),{color:"blue"},{default:n(()=>[l("Blue")]),_:1}),i(r(O),{color:"violet"},{default:n(()=>[l("Violet")]),_:1}),i(r(O),{color:"purple"},{default:n(()=>[l("Purple")]),_:1}),i(r(O),{color:"pink"},{default:n(()=>[l("Pink")]),_:1}),i(r(O),{color:"brown"},{default:n(()=>[l("Brown")]),_:1}),i(r(O),{color:"grey"},{default:n(()=>[l("Grey")]),_:1}),i(r(O),{color:"black"},{default:n(()=>[l("Black")]),_:1})]),_:1}))}},uT=B("p",null,"I'm here to tell you something, and you will probably read me first.",-1),cT=B("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),dT=B("p",null,"If you notice me you must be looking very hard.",-1),pT=B("p",null,"I'm here to tell you something, and you will probably read me first.",-1),mT=B("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),fT=B("p",null,"If you notice me you must be looking very hard.",-1),gT=B("p",null,"I'm here to tell you something, and you will probably read me first.",-1),hT=B("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),_T=B("p",null,"If you notice me you must be looking very hard.",-1),vT=`<template>
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
</template>`,bT={__name:"EmphasisDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Emphasis",code:vT},{description:n(()=>[l(" A segment can be formatted to appear more or less noticeable ")]),example:n(()=>[i(r(O),null,{default:n(()=>[uT]),_:1}),i(r(O),{secondary:""},{default:n(()=>[cT]),_:1}),i(r(O),{tertiary:""},{default:n(()=>[dT]),_:1}),i(r(Fe)),i(r(O),{inverted:""},{default:n(()=>[pT]),_:1}),i(r(O),{secondary:"",inverted:""},{default:n(()=>[mT]),_:1}),i(r(O),{tertiary:"",inverted:""},{default:n(()=>[fT]),_:1}),i(r(Fe)),i(r(O),{inverted:"",color:"red"},{default:n(()=>[gT]),_:1}),i(r(O),{secondary:"",inverted:"",color:"red"},{default:n(()=>[hT]),_:1}),i(r(O),{tertiary:"",inverted:"",color:"red"},{default:n(()=>[_T]),_:1})]),_:1}))}},ST=`<template>
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
</template>`,yT={__name:"CircularDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Circular",code:ST},{description:n(()=>[l(" A segment can be circular ")]),example:n(()=>[i(r(O),{circular:"",style:{width:"175px",height:"175px"}},{default:n(()=>[i(r(fe),{as:"h2"},{default:n(()=>[l(" Buy Now "),i(r(Yi),null,{default:n(()=>[l("$10.99")]),_:1})]),_:1})]),_:1}),i(r(O),{circular:"",inverted:"",style:{width:"175px",height:"175px"}},{default:n(()=>[i(r(fe),{as:"h2"},{default:n(()=>[l(" Buy Now "),i(r(Yi),null,{default:n(()=>[l("$10.99")]),_:1})]),_:1})]),_:1})]),_:1}))}},wT=`<template>
  <SuiSegment clearing>
    <SuiButton floated="right" content="Floated" />
  </SuiSegment>
</template>`,CT={__name:"ClearingDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Clearing",code:wT},{description:n(()=>[l(" A segment can clear floated content ")]),example:n(()=>[i(r(O),{clearing:""},{default:n(()=>[i(r(z),{floated:"right",content:"Floated"})]),_:1})]),_:1}))}},xT=B("p",null,"This segment will appear to the right",-1),AT=B("p",null,"This segment will appear to the left",-1),kT=`<template>
  <SuiSegment floated="right">
    <p>This segment will appear to the right</p>
  </SuiSegment>
  <SuiSegment floated="left">
    <p>This segment will appear to the left</p>
  </SuiSegment>
</template>`,BT={__name:"FloatedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Floated",code:kT},{description:n(()=>[l(" A segment can appear to the left or right of other content ")]),example:n(()=>[i(r(O),{floated:"right"},{default:n(()=>[xT]),_:1}),i(r(O),{floated:"left"},{default:n(()=>[AT]),_:1})]),_:1}))}},$T=`<template>
  <SuiSegment textAlign="right">Right</SuiSegment>
  <SuiSegment textAlign="left">Left</SuiSegment>
  <SuiSegment textAlign="center">Center</SuiSegment>
</template>`,TT={__name:"TextAlignmentDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Text Alignment",code:$T},{description:n(()=>[l(" A segment can have its text aligned to a side ")]),example:n(()=>[i(r(O),{textAlign:"right"},{default:n(()=>[l("Right")]),_:1}),i(r(O),{textAlign:"left"},{default:n(()=>[l("Left")]),_:1}),i(r(O),{textAlign:"center"},{default:n(()=>[l("Center")]),_:1})]),_:1}))}},LT=B("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),DT=`<template>
  <SuiSegment basic>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,IT={__name:"BasicDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Basic",code:DT},{description:n(()=>[l(" A basic segment has no special formatting ")]),example:n(()=>[i(r(O),{basic:""},{default:n(()=>[LT]),_:1})]),_:1}))}},ET=B("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),RT=B("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),zT=B("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),PT=B("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),FT=B("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),VT=B("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),MT=B("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),HT=B("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),OT=`<template>
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
</template>`,qT={__name:"ScrollingDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Scrolling",code:OT},{description:n(()=>[l(" A scrolling segment has a predefined height to allow its content to be scrollable ")]),example:n(()=>[i(r(O),{scrolling:""},{default:n(()=>[ET,RT,zT,PT,FT,VT,MT,HT]),_:1})]),_:1}))}},NT=`<template>
  <SuiSegment size="mini">Mini</SuiSegment>
  <SuiSegment size="tiny">Tiny</SuiSegment>
  <SuiSegment size="small">Small</SuiSegment>
  <SuiSegment>Default</SuiSegment>
  <SuiSegment size="large">Large</SuiSegment>
  <SuiSegment size="big">Big</SuiSegment>
  <SuiSegment size="huge">Huge</SuiSegment>
  <SuiSegment size="massive">Massive</SuiSegment>
</template>`,GT={__name:"SizeDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Size",code:NT},{description:n(()=>[l(" A segment can vary in size ")]),example:n(()=>[i(r(O),{size:"mini"},{default:n(()=>[l("Mini")]),_:1}),i(r(O),{size:"tiny"},{default:n(()=>[l("Tiny")]),_:1}),i(r(O),{size:"small"},{default:n(()=>[l("Small")]),_:1}),i(r(O),null,{default:n(()=>[l("Default")]),_:1}),i(r(O),{size:"large"},{default:n(()=>[l("Large")]),_:1}),i(r(O),{size:"big"},{default:n(()=>[l("Big")]),_:1}),i(r(O),{size:"huge"},{default:n(()=>[l("Huge")]),_:1}),i(r(O),{size:"massive"},{default:n(()=>[l("Massive")]),_:1})]),_:1}))}},jT={__name:"Segment",setup(e){const t=[{id:"segment",label:"Segment",category:"Types",component:wB},{id:"placeholder-segment",label:"Placeholder Segment",category:"Types",component:xB},{id:"raised",label:"Raised",category:"Types",component:BB},{id:"stacked",label:"Stacked",category:"Types",component:DB},{id:"piled",label:"Piled",category:"Types",component:PB},{id:"vertical-segment",label:"Vertical Segment",category:"Types",component:OB},{id:"segments",label:"Segments",category:"Groups",component:QB},{id:"nested-segments",label:"Nested Segments",category:"Groups",component:u$},{id:"horizontal-segments",label:"Horizontal Segments",category:"Groups",component:f$},{id:"horizontal-equal-width-segments",label:"Horizontal equal width Segments",category:"Groups",component:h$},{id:"horizontal-wrapping-segments",label:"Horizontal wrapping Segments",category:"Groups",component:v$},{id:"raised-segments",label:"Raised Segments",category:"Groups",component:C$},{id:"stacked-segments",label:"Stacked Segments",category:"Groups",component:$$},{id:"piled-segments",label:"Piled Segments",category:"Groups",component:E$},{id:"disabled",label:"Disabled",category:"States",component:P$},{id:"loading",label:"Loading",category:"States",component:V$},{id:"inverted",label:"Inverted",category:"Variations",component:O$},{id:"attached",label:"Attached",category:"Variations",component:U$},{id:"padded",label:"Padded",category:"Variations",component:X$},{id:"fitted",label:"Fitted",category:"Variations",component:tT},{id:"compact",label:"Compact",category:"Variations",component:lT},{id:"colored",label:"Colored",category:"Variations",component:rT},{id:"emphasis",label:"Emphasis",category:"Variations",component:bT},{id:"circular",label:"Circular",category:"Variations",component:yT},{id:"clearing",label:"Clearing",category:"Variations",component:CT},{id:"floated",label:"Floated",category:"Variations",component:BT},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:TT},{id:"basic",label:"Basic",category:"Variations",component:IT},{id:"scrolling",label:"Scrolling",category:"Variations",component:qT},{id:"size",label:"Size",category:"Variations",component:GT}];return(a,o)=>(S(),C(lt,{title:"Segment",description:"A segment is used to create a grouping of related content","component-docs":t}))}},UT=F({name:"StepDoc",components:{DocExample:_t},setup(){return{stepCode:`<sui-step-group>
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
</sui-segment>`}}}),YT={class:"intro"},WT=B("p",null,"The steps take up the entire column width",-1),KT=B("p",null,"Main content",-1);function XT(e,t,a,o,s,u){const c=$("sui-header-subheader"),p=$("sui-header"),d=$("sui-divider"),m=$("sui-icon"),f=$("sui-menu-item"),h=$("sui-menu"),_=$("sui-container"),x=$("sui-segment"),y=$("sui-step"),A=$("sui-step-group"),T=$("doc-example"),I=$("sui-step-title"),g=$("sui-step-description"),v=$("sui-step-content"),w=$("sui-grid-column"),k=$("sui-grid");return S(),be("div",null,[i(x,{vertical:""},{default:n(()=>[i(_,{class:"main"},{default:n(()=>[B("div",YT,[i(p,{as:"h1"},{default:n(()=>[l("Step "),i(c,null,{default:n(()=>[l(" A step shows the completion status of an activity in a series of activities ")]),_:1})]),_:1}),i(d,{hidden:""}),i(h,{floated:"right"},{default:n(()=>[i(f,{as:"a",icon:""},{default:n(()=>[i(m,{name:"edit"})]),_:1}),i(f,{as:"a",icon:""},{default:n(()=>[i(m,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),i(_,{class:"main"},{default:n(()=>[i(p,{as:"h2",dividing:""},{default:n(()=>[l("Types")]),_:1}),i(T,{title:"Step",description:"A single step",code:e.stepCode},{default:n(()=>[i(A,null,{default:n(()=>[i(y,null,{default:n(()=>[l("Shipping")]),_:1})]),_:1})]),_:1},8,["code"]),i(p,{as:"h2",dividing:""},{default:n(()=>[l("Groups")]),_:1}),i(T,{title:"Steps",description:"A set of steps",code:e.stepsCode},{default:n(()=>[i(A,null,{default:n(()=>[i(y,null,{default:n(()=>[i(m,{name:"truck"}),i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Shipping")]),_:1}),i(g,null,{default:n(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),i(y,{active:""},{default:n(()=>[i(m,{name:"payment"}),i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Billing")]),_:1}),i(g,null,{default:n(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),i(y,{disabled:""},{default:n(()=>[i(m,{name:"info"}),i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(T,{title:"Ordered",description:"A step can show a ordered sequence of steps",code:e.orderedCode},{default:n(()=>[i(A,{ordered:""},{default:n(()=>[i(y,{completed:""},{default:n(()=>[i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Shipping")]),_:1}),i(g,null,{default:n(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),i(y,{completed:""},{default:n(()=>[i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Billing")]),_:1}),i(g,null,{default:n(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),i(y,{active:""},{default:n(()=>[i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Confirm Order")]),_:1}),i(g,null,{default:n(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(T,{title:"Vertical",description:"A step can be displayed stacked vertically",code:e.verticalCode},{default:n(()=>[i(A,{vertical:""},{default:n(()=>[i(y,{completed:""},{default:n(()=>[i(m,{name:"truck"}),i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Shipping")]),_:1}),i(g,null,{default:n(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),i(y,{completed:""},{default:n(()=>[i(m,{name:"credit card"}),i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Billing")]),_:1}),i(g,null,{default:n(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),i(y,{active:""},{default:n(()=>[i(m,{name:"info"}),i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Confirm Order")]),_:1}),i(g,null,{default:n(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(p,{as:"h2",dividing:""},{default:n(()=>[l("Content")]),_:1}),i(T,{title:"Description",description:"A step can contain a description",code:e.descriptionCode},{default:n(()=>[i(A,null,{default:n(()=>[i(y,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Shipping")]),_:1}),i(g,null,{default:n(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(T,{title:"Icon",description:"A step can contain an icon",code:e.iconCode},{default:n(()=>[i(A,null,{default:n(()=>[i(y,null,{default:n(()=>[i(m,{name:"truck"}),i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Shipping")]),_:1}),i(g,null,{default:n(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(T,{title:"Link",description:"A step can link",code:e.linkCode},{default:n(()=>[i(A,null,{default:n(()=>[i(y,{link:""},{default:n(()=>[i(m,{name:"truck"}),i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Shipping")]),_:1}),i(g,null,{default:n(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),i(y,null,{default:n(()=>[i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Billing")]),_:1}),i(g,null,{default:n(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(p,{as:"h2",dividing:""},{default:n(()=>[l("States")]),_:1}),i(T,{title:"Active",description:"A step can be highlighted as active",code:e.activeCode},{default:n(()=>[i(A,null,{default:n(()=>[i(y,{active:""},{default:n(()=>[i(m,{name:"payment"}),i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Billing")]),_:1}),i(g,null,{default:n(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(T,{title:"Completed",description:"A step can show that a user has completed it",code:e.completedCode},{default:n(()=>[i(A,null,{default:n(()=>[i(y,{completed:""},{default:n(()=>[i(m,{name:"payment"}),i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Billing")]),_:1}),i(g,null,{default:n(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(T,{title:"Disabled",description:"A step can show that it cannot be selected",code:e.disabledCode},{default:n(()=>[i(A,null,{default:n(()=>[i(y,{disabled:""},{default:n(()=>[l("Billing")]),_:1})]),_:1})]),_:1},8,["code"]),i(p,{as:"h2",dividing:""},{default:n(()=>[l("Variations")]),_:1}),i(T,{title:"Stackable",description:"A step can stack vertically only on smaller screens",code:e.stackableCode},{default:n(()=>[i(A,{stackable:"tablet"},{default:n(()=>[i(y,null,{default:n(()=>[i(m,{name:"plane"}),i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Shipping")]),_:1}),i(g,null,{default:n(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),i(y,{active:""},{default:n(()=>[i(m,{name:"dollar"}),i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Billing")]),_:1}),i(g,null,{default:n(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),i(y,{disabled:""},{default:n(()=>[i(m,{name:"info circle"}),i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Confirm Order")]),_:1}),i(g,null,{default:n(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(T,{title:"Unstackable",description:"A step can prevent itself from stacking on mobile",code:e.unstackableCode},{default:n(()=>[i(A,{unstackable:""},{default:n(()=>[i(y,null,{default:n(()=>[i(m,{name:"plane"}),i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Shipping")]),_:1}),i(g,null,{default:n(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),i(y,{active:""},{default:n(()=>[i(m,{name:"dollar"}),i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Billing")]),_:1}),i(g,null,{default:n(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),i(y,{disabled:""},{default:n(()=>[i(m,{name:"info circle"}),i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Confirm Order")]),_:1}),i(g,null,{default:n(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(T,{title:"Fluid",description:"A fluid step takes up the width of its container",code:e.fluidCode},{default:n(()=>[i(k,{columns:2},{default:n(()=>[i(w,null,{default:n(()=>[i(A,{fluid:"",vertical:""},{default:n(()=>[i(y,{completed:""},{default:n(()=>[i(m,{name:"truck"}),i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Shipping")]),_:1}),i(g,null,{default:n(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),i(y,{active:""},{default:n(()=>[i(m,{name:"dollar"}),i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Billing")]),_:1}),i(g,null,{default:n(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),i(w,null,{default:n(()=>[WT]),_:1})]),_:1})]),_:1},8,["code"]),i(T,{title:"Attached",description:"Steps can be attached to other elements",code:e.attachedCode},{default:n(()=>[B("div",null,[i(A,{attached:"top"},{default:n(()=>[i(y,null,{default:n(()=>[i(m,{name:"truck"}),i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Shipping")]),_:1}),i(g,null,{default:n(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),i(y,{active:""},{default:n(()=>[i(m,{name:"payment"}),i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Billing")]),_:1}),i(g,null,{default:n(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1}),i(x,{attached:""},{default:n(()=>[KT]),_:1}),i(A,{attached:"bottom"},{default:n(()=>[i(y,null,{default:n(()=>[i(m,{name:"truck"}),i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Shipping")]),_:1}),i(g,null,{default:n(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),i(y,{active:""},{default:n(()=>[i(m,{name:"payment"}),i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Billing")]),_:1}),i(g,null,{default:n(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),i(T,{title:"Evenly Divided",description:"Steps can be divided evenly inside their parent",code:e.evenlyDividedCode},{default:n(()=>[i(A,{widths:2},{default:n(()=>[i(y,{active:""},{default:n(()=>[i(m,{name:"payment"}),i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Billing")]),_:1})]),_:1})]),_:1}),i(y,{disabled:""},{default:n(()=>[i(m,{name:"info"}),i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(T,{title:"Size",description:"Steps can have different sizes",code:e.sizeCode},{default:n(()=>[i(A,{size:"mini"},{default:n(()=>[i(y,{active:""},{default:n(()=>[i(m,{name:"payment"}),i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Billing")]),_:1})]),_:1})]),_:1}),i(y,{disabled:""},{default:n(()=>[i(m,{name:"info"}),i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(T,{title:"Inverted",description:"A step's color can be inverted",code:e.invertedCode},{default:n(()=>[i(x,{inverted:""},{default:n(()=>[i(A,{inverted:"",vertical:""},{default:n(()=>[i(y,{completed:""},{default:n(()=>[i(m,{name:"truck"}),i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Shipping")]),_:1}),i(g,null,{default:n(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),i(y,{completed:""},{default:n(()=>[i(m,{name:"credit card"}),i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Billing")]),_:1}),i(g,null,{default:n(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),i(y,{active:""},{default:n(()=>[i(m,{name:"info"}),i(v,null,{default:n(()=>[i(I,null,{default:n(()=>[l("Confirm Order")]),_:1}),i(g,null,{default:n(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const JT=Ne(UT,[["render",XT]]),QT=`<template>
  <SuiBreadcrumb
    :sections="[
      { content: 'Home', link: true },
      { content: 'Store', link: true },
      { content: 'T-Shirt', active: true }
    ]"
    icon="right angle"
  />
</template>`,ZT={__name:"BreadcrumbDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Breadcrumb",code:QT},{description:n(()=>[l(" A standard breadcrumb ")]),example:n(()=>[i(r(oi),{sections:[{content:"Home",link:!0},{content:"Store",link:!0},{content:"T-Shirt",active:!0}],icon:"right angle"})]),_:1}))}},eL=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection link>Registration</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Personal Information</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,tL={__name:"DividerDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Divider",code:eL},{description:n(()=>[l(" A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text. ")]),example:n(()=>[i(r(oi),null,{default:n(()=>[i(r(et),{link:""},{default:n(()=>[l("Home")]),_:1}),i(r(Tt),null,{default:n(()=>[l(" / ")]),_:1}),i(r(et),{link:""},{default:n(()=>[l("Registration")]),_:1}),i(r(Tt),null,{default:n(()=>[l(" / ")]),_:1}),i(r(et),{active:""},{default:n(()=>[l("Personal Information")]),_:1})]),_:1})]),_:1}))}},iL=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Search</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,nL={__name:"SectionDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Section",code:iL},{description:n(()=>[l(" A breadcrumb can contain sections that can either be formatted as a link or text ")]),example:n(()=>[i(r(oi),null,{default:n(()=>[i(r(et),{link:""},{default:n(()=>[l("Home")]),_:1}),i(r(Tt),null,{default:n(()=>[l(" / ")]),_:1}),i(r(et),{active:""},{default:n(()=>[l("Search")]),_:1})]),_:1})]),_:1}))}},aL=B("a",{href:"#"},"paper towels",-1),oL=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Search for: <a href="#">paper towels</a></SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,lL={__name:"LinkDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Link",code:oL},{description:n(()=>[l(" A section may be linkable or contain a link ")]),example:n(()=>[i(r(oi),null,{default:n(()=>[i(r(et),{link:""},{default:n(()=>[l("Home")]),_:1}),i(r(Tt),null,{default:n(()=>[l(" / ")]),_:1}),i(r(et),{active:""},{default:n(()=>[l("Search for: "),aL]),_:1})]),_:1})]),_:1}))}},sL=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Products</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Paper Towels</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,rL={__name:"ActiveDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Active",code:sL},{description:n(()=>[l(" A section can be active ")]),example:n(()=>[i(r(oi),null,{default:n(()=>[i(r(et),{link:""},{default:n(()=>[l("Products")]),_:1}),i(r(Tt),null,{default:n(()=>[l(" / ")]),_:1}),i(r(et),{active:""},{default:n(()=>[l("Paper Towels")]),_:1})]),_:1})]),_:1}))}},uL=B("br",null,null,-1),cL=`<template>
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
</template>`,dL={__name:"InvertedDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Inverted",code:cL},{description:n(()=>[l(" A breadcrumb can be inverted ")]),example:n(()=>[i(r(O),{inverted:""},{default:n(()=>[i(r(oi),{inverted:""},{default:n(()=>[i(r(et),{link:""},{default:n(()=>[l("Home")]),_:1}),i(r(Tt),null,{default:n(()=>[l(" / ")]),_:1}),i(r(et),{link:""},{default:n(()=>[l("Registration")]),_:1}),i(r(Tt),null,{default:n(()=>[l(" / ")]),_:1}),i(r(et),{active:""},{default:n(()=>[l("Personal Information")]),_:1})]),_:1}),uL,i(r(oi),{inverted:""},{default:n(()=>[i(r(et),null,{default:n(()=>[l("Home")]),_:1}),i(r(Tt),null,{default:n(()=>[l(" / ")]),_:1}),i(r(et),null,{default:n(()=>[l("Registration")]),_:1}),i(r(Tt),null,{default:n(()=>[l(" / ")]),_:1}),i(r(et),{active:""},{default:n(()=>[l("Personal Information")]),_:1})]),_:1})]),_:1})]),_:1}))}},pL=`<template>
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
</template>`,mL={__name:"SizeDoc",setup(e){const t=["mini","tiny","small","large","big","huge","massive"];return(a,o)=>(S(),C(D,{label:"Size",code:pL},{description:n(()=>[l(" A breadcrumb can vary in size ")]),example:n(()=>[(S(),be(we,null,Qe(t,s=>(S(),be(we,{key:s},[i(r(oi),{size:s},{default:n(()=>[i(r(et),{link:""},{default:n(()=>[l("Home")]),_:1}),i(r(Tt),null,{default:n(()=>[l(" / ")]),_:1}),i(r(et),{link:""},{default:n(()=>[l("Registration")]),_:1}),i(r(Tt),null,{default:n(()=>[l(" / ")]),_:1}),i(r(et),{active:""},{default:n(()=>[l("Personal Information")]),_:1})]),_:2},1032,["size"]),i(r(Fe),{hidden:""})],64))),64))]),_:1}))}},fL={__name:"Breadcrumb",setup(e){const t=[{id:"breadcrumb",label:"Breadcrumb",category:"Types",component:ZT},{id:"divider",label:"Divider",category:"Content",component:tL},{id:"section",label:"Section",category:"Content",component:nL},{id:"link",label:"Link",category:"Content",component:lL},{id:"active",label:"Active",category:"States",component:rL},{id:"inverted",label:"Inverted",category:"Variations",component:dL},{id:"size",label:"Size",category:"Variations",component:mL}];return(a,o)=>(S(),C(lt,{title:"Breadcrumb",description:"A standard breadcrumb","component-docs":t}))}},gL=`<template>
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
</template>`,hL={__name:"FormDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Form",code:gL},{description:n(()=>[l(" A Form ")]),example:n(()=>[i(r(Mt),null,{default:n(()=>[i(r(it),{label:"First Name",placeholder:"First Name"}),i(r(it),{label:"Last Name",placeholder:"Last Name"}),i(r(it),null,{default:n(()=>[i(r(nd),{label:"I agree to the Terms and Conditions"})]),_:1}),i(r(z),{type:"submit"},{default:n(()=>[l("Submit")]),_:1})]),_:1})]),_:1}))}},_L=`<template>
  <SuiForm>
    <SuiFormField
      label="User Input"
    />
  </SuiForm>
</template>`,vL={__name:"FieldDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Field",code:_L},{description:n(()=>[l(" A field is a form element containing a label and an input ")]),example:n(()=>[i(r(Mt),null,{default:n(()=>[i(r(it),{label:"User Input"})]),_:1})]),_:1}))}},bL=`<template>
  <SuiForm>
    <SuiFormGroup>
      <SuiFormField label="First Name" />
      <SuiFormField label="Middle Name" />
      <SuiFormField label="Last Name" />
    </SuiFormGroup>
  </SuiForm>
</template>`,SL={__name:"FieldsDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Fields",code:bL},{description:n(()=>[l(" A set of fields can appear grouped together ")]),example:n(()=>[i(r(Mt),null,{default:n(()=>[i(r(hs),null,{default:n(()=>[i(r(it),{label:"First Name"}),i(r(it),{label:"Middle Name"}),i(r(it),{label:"Last Name"})]),_:1})]),_:1})]),_:1}))}},yL=`<template>
  <SuiForm>
    <SuiFormTextarea label="Text" />
    <SuiFormTextarea label="Short Text" :rows="2" />
  </SuiForm>
</template>`,wL={__name:"TextAreaDoc",setup(e){return(t,a)=>(S(),C(D,{label:"TextArea",code:yL},{description:n(()=>[l(" A textarea can be used to allow for extended user input. ")]),example:n(()=>[i(r(Mt),null,{default:n(()=>[i(r(Cl),{label:"Text"}),i(r(Cl),{label:"Short Text",rows:2})]),_:1})]),_:1}))}},CL=`<template>
  <SuiForm loading>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,xL={__name:"LoadingDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Loading",code:CL},{description:n(()=>[l(" If a form is in loading state, it will automatically show a loading indicator. ")]),example:n(()=>[i(r(Mt),{loading:""},{default:n(()=>[i(r(it),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),i(r(z),{type:"submit"},{default:n(()=>[l("Submit")]),_:1})]),_:1})]),_:1}))}},AL=`<template>
  <SuiForm success>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      success
      header='Form Completed'
      content="You're all signed up for the newsletter"
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,kL={__name:"SuccessDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Success",code:AL},{description:n(()=>[l(" If a form is in an success state, it will automatically show any success message blocks. ")]),example:n(()=>[i(r(Mt),{success:""},{default:n(()=>[i(r(it),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),i(r(Ao),{success:"",header:"Form Completed",content:"You're all signed up for the newsletter"}),i(r(z),{type:"submit"},{default:n(()=>[l("Submit")]),_:1})]),_:1})]),_:1}))}},BL=`<template>
  <SuiForm error>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      error
      header='Action Forbidden'
      content='You can only sign up for an account once with a given e-mail address.'
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,$L={__name:"ErrorDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Error",code:BL},{description:n(()=>[l(" If a form is in an error state, it will automatically show any error message blocks. ")]),example:n(()=>[i(r(Mt),{error:""},{default:n(()=>[i(r(it),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),i(r(Ao),{error:"",header:"Action Forbidden",content:"You can only sign up for an account once with a given e-mail address."}),i(r(z),{type:"submit"},{default:n(()=>[l("Submit")]),_:1})]),_:1})]),_:1}))}},TL=`<template>
  <SuiForm warning>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      warning
      header='Could you check something!'
      content='That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.'
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,LL={__name:"WarningDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Warning",code:TL},{description:n(()=>[l(" If a form is in warning state, it will automatically show any warning message block. ")]),example:n(()=>[i(r(Mt),{warning:""},{default:n(()=>[i(r(it),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),i(r(Ao),{warning:"",header:"Could you check something!",content:"That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail."}),i(r(z),{type:"submit"},{default:n(()=>[l("Submit")]),_:1})]),_:1})]),_:1}))}},DL=`<template>
  <SuiForm>
    <SuiFormGroup>
      <SuiFormField disabled label="First name" placeholder="Read only" />
      <SuiFormField disabled label="Last name" placeholder="Disabled" />
    </SuiFormGroup>
  </SuiForm>
</template>`,IL={__name:"DisabledDoc",setup(e){return(t,a)=>(S(),C(D,{label:"Disabled",code:DL},{description:n(()=>[l(" Individual fields may be disabled ")]),example:n(()=>[i(r(Mt),null,{default:n(()=>[i(r(hs),null,{default:n(()=>[i(r(it),{disabled:"",label:"First name",placeholder:"Read only"}),i(r(it),{disabled:"",label:"Last name",placeholder:"Disabled"})]),_:1})]),_:1})]),_:1}))}},EL={__name:"Form",setup(e){const t=[{id:"form",label:"Form",category:"Types",component:hL},{id:"field",label:"Field",category:"Content",component:vL},{id:"fields",label:"Fields",category:"Content",component:SL},{id:"textarea",label:"TextArea",category:"Content",component:wL},{id:"loading",label:"Loading",category:"Form States",component:xL},{id:"success",label:"Success",category:"Form States",component:kL},{id:"error",label:"Error",category:"Form States",component:$L},{id:"warning",label:"Warning",category:"Form States",component:LL},{id:"disabled",label:"Disabled",category:"Field States",component:IL}];return(a,o)=>(S(),C(lt,{title:"Form",description:"A form displays a set of related user input fields in a structured way","component-docs":t}))}},RL=F({name:"DocPageHeader",props:{title:String,sub:String}}),zL={class:"intro",style:{padding:"2rem"}};function PL(e,t,a,o,s,u){const c=$("sui-header-subheader"),p=$("sui-header"),d=$("sui-divider"),m=$("sui-icon"),f=$("sui-menu-item"),h=$("sui-menu"),_=$("sui-container"),x=$("sui-segment");return S(),C(x,{vertical:""},{default:n(()=>[i(_,{class:"main"},{default:n(()=>[B("div",zL,[i(p,{as:"h1"},{default:n(()=>[l($e(e.title)+" ",1),i(c,null,{default:n(()=>[l($e(e.sub),1)]),_:1})]),_:1}),i(d,{hidden:""}),i(h,{floated:"right"},{default:n(()=>[i(f,{as:"a",icon:""},{default:n(()=>[i(m,{name:"edit"})]),_:1}),i(f,{as:"a",icon:""},{default:n(()=>[i(m,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1})}const Ht=Ne(RL,[["render",PL]]),Te="/vue-fomantic-ui/images/wireframe/image.png",ei="/vue-fomantic-ui/images/wireframe/media-paragraph.png",Oe="/vue-fomantic-ui/images/wireframe/paragraph.png",Gr="/vue-fomantic-ui/images/wireframe/centered-paragraph.png",FL=F({name:"GridDoc",components:{DocPageHeader:Ht,DocExample:_t},setup(){return{numbers:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],gridCode:`<sui-grid>
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
</sui-grid>`}}}),VL=B("br",null,null,-1);function ML(e,t,a,o,s,u){const c=$("doc-page-header"),p=$("sui-header"),d=$("sui-image"),m=$("sui-grid-column"),f=$("sui-grid"),h=$("doc-example"),_=$("sui-grid-row"),x=$("sui-segment"),y=$("sui-divider"),A=$("sui-menu-item"),T=$("sui-menu"),I=$("sui-container");return S(),be("div",null,[i(c,{title:"Grid",sub:"A grid is used to harmonize negative space in a layout"}),i(I,{class:"main"},{default:n(()=>[i(p,{as:"h2",dividing:""},{default:n(()=>[l("Types")]),_:1}),i(h,{title:"Grid",description:"A basic grid",code:e.gridCode},{default:n(()=>[i(f,null,{default:n(()=>[(S(!0),be(we,null,Qe(e.numbers,g=>(S(),C(m,{key:g},{default:n(()=>[i(d,{src:Te})]),_:2},1024))),128))]),_:1})]),_:1},8,["code"]),i(h,{title:"Divided",description:"A grid can have dividers between its columns",code:e.dividedCode},{default:n(()=>[i(f,{columns:3,divided:""},{default:n(()=>[i(_,null,{default:n(()=>[i(m,null,{default:n(()=>[i(d,{src:ei})]),_:1}),i(m,null,{default:n(()=>[i(d,{src:ei})]),_:1}),i(m,null,{default:n(()=>[i(d,{src:ei})]),_:1})]),_:1}),i(_,null,{default:n(()=>[i(m,null,{default:n(()=>[i(d,{src:ei})]),_:1}),i(m,null,{default:n(()=>[i(d,{src:ei})]),_:1}),i(m,null,{default:n(()=>[i(d,{src:ei})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Vertical Divided",description:"A grid can have dividers between rows",code:e.verticalDividedCode},{default:n(()=>[i(f,{divided:"vertically"},{default:n(()=>[i(_,{columns:2},{default:n(()=>[i(m,null,{default:n(()=>[i(d,{src:Oe})]),_:1}),i(m,null,{default:n(()=>[i(d,{src:Oe})]),_:1})]),_:1}),i(_,{columns:3},{default:n(()=>[i(m,null,{default:n(()=>[i(d,{src:Oe})]),_:1}),i(m,null,{default:n(()=>[i(d,{src:Oe})]),_:1}),i(m,null,{default:n(()=>[i(d,{src:Oe})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Celled",description:"A grid can have rows divided into cells",code:e.celledCode},{default:n(()=>[i(f,{celled:""},{default:n(()=>[i(_,null,{default:n(()=>[i(m,{width:3},{default:n(()=>[i(d,{src:Te})]),_:1}),i(m,{width:13},{default:n(()=>[i(d,{src:Gr})]),_:1})]),_:1}),i(_,null,{default:n(()=>[i(m,{width:3},{default:n(()=>[i(d,{src:Te})]),_:1}),i(m,{width:10},{default:n(()=>[i(d,{src:Oe})]),_:1}),i(m,{width:3},{default:n(()=>[i(d,{src:Te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Internally Celled",description:"A grid can have rows divisions only between internal rows",code:e.internallyCelledCode},{default:n(()=>[i(f,{celled:"internally"},{default:n(()=>[i(_,null,{default:n(()=>[i(m,{width:3},{default:n(()=>[i(d,{src:Te})]),_:1}),i(m,{width:13},{default:n(()=>[i(d,{src:Gr})]),_:1})]),_:1}),i(_,null,{default:n(()=>[i(m,{width:3},{default:n(()=>[i(d,{src:Te})]),_:1}),i(m,{width:10},{default:n(()=>[i(d,{src:Oe})]),_:1}),i(m,{width:3},{default:n(()=>[i(d,{src:Te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(p,{as:"h2",dividing:""},{default:n(()=>[l("Content")]),_:1}),i(h,{title:"Rows",description:"A row is a horizontal grouping of columns",code:e.rowsCode},{default:n(()=>[i(f,{columns:3},{default:n(()=>[i(_,null,{default:n(()=>[i(m,null,{default:n(()=>[i(d,{src:Oe})]),_:1}),i(m,null,{default:n(()=>[i(d,{src:Oe})]),_:1})]),_:1}),i(_,null,{default:n(()=>[i(m,null,{default:n(()=>[i(d,{src:Oe})]),_:1}),i(m,null,{default:n(()=>[i(d,{src:Oe})]),_:1}),i(m,null,{default:n(()=>[i(d,{src:Oe})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Columns",description:"Columns each contain gutters giving them equal spacing from other columns",code:e.columnsCode},{default:n(()=>[i(f,null,{default:n(()=>[i(m,{width:8},{default:n(()=>[i(d,{src:Oe})]),_:1}),i(m,{width:8},{default:n(()=>[i(d,{src:Oe})]),_:1}),i(m,{width:8},{default:n(()=>[i(d,{src:Oe})]),_:1}),i(m,{width:8},{default:n(()=>[i(d,{src:Oe})]),_:1})]),_:1})]),_:1},8,["code"]),i(p,{as:"h2",dividing:""},{default:n(()=>[l("Variations")]),_:1}),i(h,{title:"Floated",description:"A column can sit flush against the left or right edge of a row",code:e.floatedCode},{default:n(()=>[i(f,null,{default:n(()=>[i(m,{floated:"left",width:5},{default:n(()=>[i(d,{src:Oe})]),_:1}),i(m,{floated:"right",width:5},{default:n(()=>[i(d,{src:Oe})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Column Width",description:"A column can vary in width taking up more than a single grid column",code:e.columnWidthCode},{default:n(()=>[i(f,null,{default:n(()=>[i(m,{width:4},{default:n(()=>[i(d,{src:Te})]),_:1}),i(m,{width:9},{default:n(()=>[i(d,{src:Oe})]),_:1}),i(m,{width:3},{default:n(()=>[i(d,{src:ei})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Column Count",description:"A grid can have a different number of columns per row",code:e.columnCountCode},{default:n(()=>[i(f,null,{default:n(()=>[i(_,{columns:3},{default:n(()=>[i(m,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(m,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(m,null,{default:n(()=>[i(d,{src:Te})]),_:1})]),_:1}),i(_,{columns:4},{default:n(()=>[i(m,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(m,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(m,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(m,null,{default:n(()=>[i(d,{src:Te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Equal Width",description:"Equal Width",code:e.equalWidthCode},{default:n(()=>[i(f,{columns:"equal"},{default:n(()=>[i(m,null,{default:n(()=>[i(x,null,{default:n(()=>[l("1")]),_:1})]),_:1}),i(m,{width:8},{default:n(()=>[i(x,null,{default:n(()=>[l("2")]),_:1})]),_:1}),i(m,null,{default:n(()=>[i(x,null,{default:n(()=>[l("3")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Stretched",description:"A row can stretch its contents to take up the entire column height",code:e.stretchedCode},{default:n(()=>[i(f,{columns:3,divided:""},{default:n(()=>[i(_,{stretched:""},{default:n(()=>[i(m,null,{default:n(()=>[i(x,null,{default:n(()=>[l("1")]),_:1})]),_:1}),i(m,null,{default:n(()=>[i(x,null,{default:n(()=>[l("1")]),_:1}),i(x,null,{default:n(()=>[l("2")]),_:1})]),_:1}),i(m,null,{default:n(()=>[i(x,null,{default:n(()=>[l("1")]),_:1}),i(x,null,{default:n(()=>[l("2")]),_:1}),i(x,null,{default:n(()=>[l("3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Padded",description:"A grid can preserve its vertical and horizontal gutters on first and last columns",code:e.paddedCode},{default:n(()=>[B("div",null,[i(y),i(f,{padded:"",columns:2},{default:n(()=>[i(m,null,{default:n(()=>[i(d,{src:Oe})]),_:1}),i(m,null,{default:n(()=>[i(d,{src:Oe})]),_:1})]),_:1})])]),_:1},8,["code"]),i(h,{title:"Relaxed",description:"A grid can increase its gutters to allow for more negative space",code:e.relaxedCode},{default:n(()=>[i(f,{relaxed:"",columns:4},{default:n(()=>[i(m,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(m,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(m,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(m,null,{default:n(()=>[i(d,{src:Te})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Colored",description:"A row or column can be colored",code:e.coloredCode},{default:n(()=>[i(f,{padded:"",columns:5},{default:n(()=>[i(m,{color:"red"},{default:n(()=>[l("Red")]),_:1}),i(m,{color:"orange"},{default:n(()=>[l("Orange")]),_:1}),i(m,{color:"yellow"},{default:n(()=>[l("Yellow")]),_:1}),i(m,{color:"olive"},{default:n(()=>[l("Olive")]),_:1}),i(m,{color:"green"},{default:n(()=>[l("Green")]),_:1}),i(m,{color:"teal"},{default:n(()=>[l("Teal")]),_:1}),i(m,{color:"blue"},{default:n(()=>[l("Blue")]),_:1}),i(m,{color:"violet"},{default:n(()=>[l("Violet")]),_:1}),i(m,{color:"purple"},{default:n(()=>[l("Purple")]),_:1}),i(m,{color:"pink"},{default:n(()=>[l("Pink")]),_:1}),i(m,{color:"brown"},{default:n(()=>[l("Brown")]),_:1}),i(m,{color:"grey"},{default:n(()=>[l("Grey")]),_:1}),i(m,{color:"black"},{default:n(()=>[l("Black")]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Centered",description:"A grid can have its columns centered",code:e.centeredCode},{default:n(()=>[i(f,{centered:"",columns:2},{default:n(()=>[i(m,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(_,{centered:"",columns:4},{default:n(()=>[i(m,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(m,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(m,null,{default:n(()=>[i(d,{src:Te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Text Alignment",description:"A grid, row, or column can specify its text alignment",code:e.textAlignCode},{default:n(()=>[i(f,{textAlign:"center",columns:3},{default:n(()=>[i(_,null,{default:n(()=>[i(m,null,{default:n(()=>[i(T,{vertical:"",fluid:""},{default:n(()=>[i(A,{header:""},{default:n(()=>[l("Cats")]),_:1})]),_:1})]),_:1}),i(m,null,{default:n(()=>[i(T,{vertical:"",fluid:""},{default:n(()=>[i(A,{header:""},{default:n(()=>[l("Dogs")]),_:1}),i(A,null,{default:n(()=>[l("Poodle")]),_:1}),i(A,null,{default:n(()=>[l("Cockerspaniel")]),_:1})]),_:1})]),_:1}),i(m,null,{default:n(()=>[i(T,{vertical:"",fluid:""},{default:n(()=>[i(A,{header:""},{default:n(()=>[l("Monkeys")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Vertical Alignment",description:"A grid, row, or column can specify its vertical alignment to have all its columns vertically centered",code:e.verticalAlignCode},{default:n(()=>[i(f,{verticalAlign:"middle",columns:4,centered:""},{default:n(()=>[i(_,null,{default:n(()=>[i(m,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(m,null,{default:n(()=>[i(d,{src:Te}),VL,i(d,{src:Te})]),_:1}),i(m,null,{default:n(()=>[i(d,{src:Te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(p,{as:"h2",dividing:""},{default:n(()=>[l("Responsive Variations")]),_:1}),i(h,{title:"Doubling",description:"A grid can double its column width on tablet and mobile sizes",code:e.doublingCode},{default:n(()=>[i(f,{doubling:"",columns:5},{default:n(()=>[i(m,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(m,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(m,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(m,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(m,null,{default:n(()=>[i(d,{src:Te})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"stackable",description:"A grid can have its columns stack on-top of each other after reaching mobile breakpoints",code:e.stackableCode},{default:n(()=>[i(f,{stackable:"",columns:2},{default:n(()=>[i(m,null,{default:n(()=>[i(x,null,{default:n(()=>[i(d,{src:Oe})]),_:1})]),_:1}),i(m,null,{default:n(()=>[i(x,null,{default:n(()=>[i(d,{src:Oe})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Reversed",description:"A grid or row can specify that its columns should reverse order at different device sizes",code:e.reversedCode},{default:n(()=>[i(f,{reversed:"computer vertically"},{default:n(()=>[i(_,null,{default:n(()=>[i(m,null,{default:n(()=>[l("Computer Row 3")]),_:1})]),_:1}),i(_,null,{default:n(()=>[i(m,null,{default:n(()=>[l("Computer Row 2")]),_:1})]),_:1}),i(_,null,{default:n(()=>[i(m,null,{default:n(()=>[l("Computer Row 1")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Device Visibility",description:"A columns or row can appear only for a specific device, or screen sizes",code:e.deviceVisibilityCode},{default:n(()=>[i(f,null,{default:n(()=>[i(_,{only:"large screen",columns:2},{default:n(()=>[i(m,null,{default:n(()=>[i(x,null,{default:n(()=>[l("Large Screen")]),_:1})]),_:1}),i(m,null,{default:n(()=>[i(x,null,{default:n(()=>[l("Large Screen")]),_:1})]),_:1})]),_:1}),i(_,{only:"widescreen",columns:2},{default:n(()=>[i(m,null,{default:n(()=>[i(x,null,{default:n(()=>[l("Widescreen")]),_:1})]),_:1}),i(m,null,{default:n(()=>[i(x,null,{default:n(()=>[l("Widescreen")]),_:1})]),_:1})]),_:1}),i(_,{only:"mobile",columns:2},{default:n(()=>[i(m,null,{default:n(()=>[i(x,null,{default:n(()=>[l("Mobile")]),_:1})]),_:1}),i(m,null,{default:n(()=>[i(x,null,{default:n(()=>[l("Mobile")]),_:1})]),_:1})]),_:1}),i(_,{columns:3},{default:n(()=>[i(m,{only:"computer"},{default:n(()=>[i(x,null,{default:n(()=>[l("Computer")]),_:1})]),_:1}),i(m,{only:"mobile"},{default:n(()=>[i(x,null,{default:n(()=>[l("Tablet and Mobile")]),_:1})]),_:1}),i(m,null,{default:n(()=>[i(x,null,{default:n(()=>[l("All Sizes")]),_:1})]),_:1}),i(m,null,{default:n(()=>[i(x,null,{default:n(()=>[l("All Sizes")]),_:1})]),_:1})]),_:1}),i(_,{only:"computer",columns:4},{default:n(()=>[i(m,null,{default:n(()=>[i(x,null,{default:n(()=>[l("Computer")]),_:1})]),_:1}),i(m,null,{default:n(()=>[i(x,null,{default:n(()=>[l("Computer")]),_:1})]),_:1}),i(m,null,{default:n(()=>[i(x,null,{default:n(()=>[l("Computer")]),_:1})]),_:1}),i(m,null,{default:n(()=>[i(x,null,{default:n(()=>[l("Computer")]),_:1})]),_:1})]),_:1}),i(_,{only:"tablet",columns:3},{default:n(()=>[i(m,null,{default:n(()=>[i(x,null,{default:n(()=>[l("Tablet")]),_:1})]),_:1}),i(m,null,{default:n(()=>[i(x,null,{default:n(()=>[l("Tablet")]),_:1})]),_:1}),i(m,null,{default:n(()=>[i(x,null,{default:n(()=>[l("Tablet")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Responsive Width",description:"A column can specify a width for a specific device",code:e.responsiveWidthCode},{default:n(()=>[i(f,null,{default:n(()=>[i(m,{mobile:16,tablet:8,computer:4},{default:n(()=>[i(d,{src:Oe})]),_:1}),i(m,{mobile:16,tablet:8,computer:4},{default:n(()=>[i(d,{src:Oe})]),_:1}),i(m,{mobile:16,tablet:8,computer:4},{default:n(()=>[i(d,{src:Oe})]),_:1}),i(m,{mobile:16,tablet:8,computer:4},{default:n(()=>[i(d,{src:Oe})]),_:1}),i(m,{mobile:16,tablet:8,computer:4},{default:n(()=>[i(d,{src:Oe})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const HL=Ne(FL,[["render",ML]]),OL=F({name:"AccordionDoc",components:{DocPageHeader:Ht,DocExample:_t},setup(){return{accordionCode:`<sui-accordion>
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
</sui-segment>`}}}),qL=B("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),NL=B("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),GL=B("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),jL=B("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),UL=B("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),YL=B("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),WL=B("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),KL=B("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),XL=B("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),JL=B("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),QL=B("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),ZL=B("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),eD=B("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),tD=B("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),iD=B("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),nD=B("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),aD=B("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),oD=B("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),lD=B("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),sD=B("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1);function rD(e,t,a,o,s,u){const c=$("doc-page-header"),p=$("sui-header"),d=$("sui-accordion-tab"),m=$("sui-accordion"),f=$("doc-example"),h=$("sui-segment"),_=$("sui-container");return S(),be("div",null,[i(c,{title:"Accordion",sub:"An accordion allows users to toggle the display of sections of content"}),i(_,{class:"main"},{default:n(()=>[i(p,{as:"h2",dividing:""},{default:n(()=>[l("Types")]),_:1}),i(f,{title:"Accordion",description:"A standard accordion",code:e.accordionCode},{default:n(()=>[i(m,null,{default:n(()=>[i(d,{title:"What is a dog?"},{default:n(()=>[qL]),_:1}),i(d,{title:"What kinds of dogs are there?"},{default:n(()=>[NL]),_:1}),i(d,{title:"How do you acquire a dog?"},{default:n(()=>[GL,jL]),_:1})]),_:1})]),_:1},8,["code"]),i(f,{title:"Styled",description:"A styled accordion adds basic formatting",code:e.styledCode},{default:n(()=>[i(m,{styled:""},{default:n(()=>[i(d,{title:"What is a dog?"},{default:n(()=>[UL]),_:1}),i(d,{title:"What kinds of dogs are there?"},{default:n(()=>[YL]),_:1}),i(d,{title:"How do you acquire a dog?"},{default:n(()=>[WL,KL]),_:1})]),_:1})]),_:1},8,["code"]),i(p,{as:"h2",dividing:""},{default:n(()=>[l("Variations")]),_:1}),i(f,{title:"Fluid",description:"An accordion can take up the width of its container",code:e.fluidCode},{default:n(()=>[i(m,{fluid:"",styled:""},{default:n(()=>[i(d,{title:"What is a dog?"},{default:n(()=>[XL]),_:1}),i(d,{title:"What kinds of dogs are there?"},{default:n(()=>[JL]),_:1}),i(d,{title:"How do you acquire a dog?"},{default:n(()=>[QL,ZL]),_:1})]),_:1})]),_:1},8,["code"]),i(f,{title:"Inverted",description:"An accordion can be formatted to appear on dark backgrounds",code:e.invertedCode},{default:n(()=>[i(h,{inverted:""},{default:n(()=>[i(m,{inverted:""},{default:n(()=>[i(d,{title:"What is a dog?"},{default:n(()=>[eD]),_:1}),i(d,{title:"What kinds of dogs are there?"},{default:n(()=>[tD]),_:1}),i(d,{title:"How do you acquire a dog?"},{default:n(()=>[iD,nD]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(p,{as:"h2",dividing:""},{default:n(()=>[l("Usage")]),_:1}),i(f,{title:"Multiple",description:"An accordion can have multiple panels open at the same time",code:e.multipleCode},{default:n(()=>[i(m,{multiple:""},{default:n(()=>[i(d,{title:"What is a dog?"},{default:n(()=>[aD]),_:1}),i(d,{title:"What kinds of dogs are there?"},{default:n(()=>[oD]),_:1}),i(d,{title:"How do you acquire a dog?"},{default:n(()=>[lD,sD]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const uD=Ne(OL,[["render",rD]]),cD=F({name:"CalendarDoc",components:{DocPageHeader:Ht,DocExample:_t},setup(){return{calendar1:j(null),calendarCode:'<sui-calendar v-model="calendar1" placeholder="Date/Time" />'}}});function dD(e,t,a,o,s,u){const c=$("doc-page-header"),p=$("sui-header"),d=$("sui-calendar"),m=$("doc-example"),f=$("sui-container");return S(),be("div",null,[i(c,{title:"Calendar",sub:"A calendar allows users to select any date or time"}),i(f,{class:"main"},{default:n(()=>[i(p,{as:"h2",dividing:""},{default:n(()=>[l("Types")]),_:1}),i(m,{title:"Calendar",description:"A standard calendar",code:e.calendarCode},{default:n(()=>[i(d,{modelValue:e.calendar1,"onUpdate:modelValue":t[0]||(t[0]=h=>e.calendar1=h),placeholder:"Date/Time"},null,8,["modelValue"])]),_:1},8,["code"])]),_:1})])}const pD=Ne(cD,[["render",dD]]),mD=F({name:"PropertyListTable",props:{properties:Array}});function fD(e,t,a,o,s,u){const c=$("sui-table-header-cell"),p=$("sui-table-row"),d=$("sui-table-header"),m=$("sui-table-cell"),f=$("sui-table-body"),h=$("sui-table");return S(),C(h,{celled:""},{default:n(()=>[i(d,null,{default:n(()=>[i(p,null,{default:n(()=>[i(c,null,{default:n(()=>[l("Name")]),_:1}),i(c,null,{default:n(()=>[l("Type")]),_:1}),i(c,null,{default:n(()=>[l("Default")]),_:1}),i(c,null,{default:n(()=>[l("Description")]),_:1})]),_:1})]),_:1}),i(f,null,{default:n(()=>[(S(!0),be(we,null,Qe(e.properties,_=>(S(),C(p,{key:_.name},{default:n(()=>[i(m,null,{default:n(()=>[l($e(_.name),1)]),_:2},1024),i(m,null,{default:n(()=>[l($e(_.type),1)]),_:2},1024),i(m,null,{default:n(()=>[l($e(_.default),1)]),_:2},1024),i(m,null,{default:n(()=>[l($e(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const ko=Ne(mD,[["render",fD]]),gD=F({name:"CheckboxDoc",components:{DocPageHeader:Ht,DocExample:_t,PropertyListTable:ko},setup(){const e=j(!1),t='<sui-checkbox label="Make my profile visible" v-model="checked" />',a=j([]),o=`<sui-checkbox label="Apple" value="Apple" v-model="selected"  />
<sui-checkbox label="Banana" value="Banana" v-model="selected"  />
<sui-checkbox label="Chocolate" value="Chocolate" v-model="selected"  />`,s=j(!1),u='<sui-checkbox toggle v-model="toggle" />',c=j(!1);return{checked:e,checkboxCode:t,selected:a,multipleCode:o,toggle:s,toggleCode:u,slider:c,sliderCode:'<sui-checkbox slider v-model="slider" />',properties:[{name:"label",type:"string",default:"null",description:"Label of the checkbox."},{name:"modelValue",type:"any",default:"null",description:"Value binding of the checkbox."},{name:"value",type:"any",default:"null",description:"Value of the checkbox."}],events:[{name:"change",description:"Callback to invoke when checkbox value is changed."},{name:"click",description:"Callback to invoke when checkbox is clicked."}]}}}),hD={class:"ui form"},_D={class:"grouped fields"},vD={class:"field"},bD={class:"field"},SD={class:"field"};function yD(e,t,a,o,s,u){const c=$("doc-page-header"),p=$("sui-header"),d=$("sui-checkbox"),m=$("doc-example"),f=$("property-list-table"),h=$("sui-table-header-cell"),_=$("sui-table-row"),x=$("sui-table-header"),y=$("sui-table-cell"),A=$("sui-table-body"),T=$("sui-table"),I=$("sui-container");return S(),be("div",null,[i(c,{title:"Checkbox",sub:"A checkbox allows a user to select a value from a small set of options, often binary"}),i(I,{class:"main"},{default:n(()=>[i(p,{as:"h2",dividing:""},{default:n(()=>[l("Types")]),_:1}),i(m,{title:"Checkbox",description:"A standard checkbox",code:e.checkboxCode},{default:n(()=>[i(d,{label:"Make my profile visible",modelValue:e.checked,"onUpdate:modelValue":t[0]||(t[0]=g=>e.checked=g)},null,8,["modelValue"])]),_:1},8,["code"]),i(m,{title:"Multiple",description:"Multiple mode is enabled by default, v-model property refers to an array to bind the selected values",code:e.multipleCode},{default:n(()=>[B("div",hD,[B("div",_D,[B("div",vD,[i(d,{label:"Apple",value:"Apple",modelValue:e.selected,"onUpdate:modelValue":t[1]||(t[1]=g=>e.selected=g)},null,8,["modelValue"])]),B("div",bD,[i(d,{label:"Banana",value:"Banana",modelValue:e.selected,"onUpdate:modelValue":t[2]||(t[2]=g=>e.selected=g)},null,8,["modelValue"])]),B("div",SD,[i(d,{label:"Chocolate",value:"Chocolate",modelValue:e.selected,"onUpdate:modelValue":t[3]||(t[3]=g=>e.selected=g)},null,8,["modelValue"])])])]),l(" selected : "+$e(e.selected),1)]),_:1},8,["code"]),i(m,{title:"Toggle",description:"A checkbox can toggle",code:e.toggleCode},{default:n(()=>[i(d,{toggle:"",modelValue:e.toggle,"onUpdate:modelValue":t[4]||(t[4]=g=>e.toggle=g)},null,8,["modelValue"])]),_:1},8,["code"]),i(m,{title:"Slider",description:"A checkbox can look like a slider",code:e.sliderCode},{default:n(()=>[i(d,{slider:"",modelValue:e.slider,"onUpdate:modelValue":t[5]||(t[5]=g=>e.slider=g)},null,8,["modelValue"])]),_:1},8,["code"]),i(p,{as:"h2",dividing:""},{default:n(()=>[l("Properties")]),_:1}),i(f,{properties:e.properties},null,8,["properties"]),i(p,{as:"h2",dividing:""},{default:n(()=>[l("Events")]),_:1}),i(T,{celled:""},{default:n(()=>[i(x,null,{default:n(()=>[i(_,null,{default:n(()=>[i(h,null,{default:n(()=>[l("Name")]),_:1}),i(h,null,{default:n(()=>[l("Description")]),_:1})]),_:1})]),_:1}),i(A,null,{default:n(()=>[(S(!0),be(we,null,Qe(e.events,g=>(S(),C(_,{key:g.name},{default:n(()=>[i(y,null,{default:n(()=>[l($e(g.name),1)]),_:2},1024),i(y,null,{default:n(()=>[l($e(g.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const wD=Ne(gD,[["render",yD]]),CD=F({name:"DimmerDoc",components:{DocPageHeader:Ht,DocExample:_t},setup(){const e=`<sui-dimmer-dimmable>
  <sui-header as="h3">Overlayable Section</sui-header>
  <sui-image-group size="small">
    <sui-image src="/images/wireframe/image.png" />
    <sui-image src="/images/wireframe/image.png" />
    <sui-image src="/images/wireframe/image.png" />
  </sui-image-group>
  <sui-image size="medium" src="/images/wireframe/media-paragraph.png" />
  
  <sui-dimmer active />
</sui-dimmer-dimmable>`,t=`<sui-dimmer-dimmable>
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
</sui-dimmer-dimmable>`,a=j(!1);return{dimmerCode:e,contentDimmerCode:t,active:a,pageDimmerCode:`<div>
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
</div>`}}});function xD(e,t,a,o,s,u){const c=$("doc-page-header"),p=$("sui-header"),d=$("sui-image"),m=$("sui-image-group"),f=$("sui-dimmer"),h=$("sui-dimmer-dimmable"),_=$("doc-example"),x=$("sui-icon"),y=$("sui-button"),A=$("sui-header-subheader"),T=$("sui-container");return S(),be("div",null,[i(c,{title:"Dimmer",sub:"A dimmer hides distractions to focus attention on particular content"}),i(T,{class:"main"},{default:n(()=>[i(p,{as:"h2",dividing:""},{default:n(()=>[l("Types")]),_:1}),i(_,{title:"Dimmer",description:"A simple dimmer displays no content",code:e.dimmerCode},{default:n(()=>[i(h,null,{default:n(()=>[i(p,{as:"h3"},{default:n(()=>[l("Overlayable Section")]),_:1}),i(m,{size:"small"},{default:n(()=>[i(d,{src:Te}),i(d,{src:Te}),i(d,{src:Te})]),_:1}),i(d,{size:"medium",src:ei}),i(f,{active:""})]),_:1})]),_:1},8,["code"]),i(_,{title:"Content Dimmer",description:"A dimmer can display content",code:e.contentDimmerCode},{default:n(()=>[i(h,null,{default:n(()=>[i(p,{as:"h3"},{default:n(()=>[l("Overlayable Section")]),_:1}),i(m,{size:"small"},{default:n(()=>[i(d,{src:Te}),i(d,{src:Te}),i(d,{src:Te})]),_:1}),i(d,{size:"medium",src:ei}),i(f,{active:""},{default:n(()=>[i(p,{as:"h2",icon:"",inverted:""},{default:n(()=>[i(x,{name:"heart"}),l(" Dimmed Message! ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(_,{title:"Page Dimmer",description:"A dimmer can be formatted to be fixed to the page",code:e.pageDimmerCode},{default:n(()=>[B("div",null,[i(y,{labeled:"",icon:"",onClick:t[0]||(t[0]=I=>e.active=!0)},{default:n(()=>[i(x,{name:"plus"}),l(" Show ")]),_:1}),i(f,{active:e.active,page:"",onClick:t[1]||(t[1]=I=>e.active=!1)},{default:n(()=>[i(p,{as:"h2",icon:"",inverted:""},{default:n(()=>[i(x,{name:"heart"}),l(" Dimmed Message! "),i(A,null,{default:n(()=>[l("Dimmer sub-header")]),_:1})]),_:1})]),_:1},8,["active"])])]),_:1},8,["code"])]),_:1})])}const AD=Ne(CD,[["render",xD]]),kD=F({name:"DropdownDoc",components:{DocPageHeader:Ht,DocExample:_t},setup(){const e=`<sui-dropdown text="File">
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
</sui-dropdown>`,t=j(null),a=`<sui-dropdown
  selection
  placeholder="Pet"
  v-model="selected1"
  :options="['Cat', 'Dog', 'Bird', 'Rabbit', 'Squirrel', 'Horse']"
/>`,o=j(null),s=[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"},{value:"ad",flag:"ad",text:"Andorra"},{value:"ao",flag:"ao",text:"Angola"},{value:"ai",flag:"ai",text:"Anguilla"},{value:"ag",flag:"ag",text:"Antigua"},{value:"ar",flag:"ar",text:"Argentina"},{value:"am",flag:"am",text:"Armenia"},{value:"aw",flag:"aw",text:"Aruba"},{value:"au",flag:"au",text:"Australia"},{value:"at",flag:"at",text:"Austria"},{value:"az",flag:"az",text:"Azerbaijan"},{value:"bs",flag:"bs",text:"Bahamas"},{value:"bh",flag:"bh",text:"Bahrain"},{value:"bd",flag:"bd",text:"Bangladesh"},{value:"bb",flag:"bb",text:"Barbados"},{value:"by",flag:"by",text:"Belarus"},{value:"be",flag:"be",text:"Belgium"},{value:"bz",flag:"bz",text:"Belize"},{value:"bj",flag:"bj",text:"Benin"}],u=`<sui-dropdown
  search
  selection
  fluid
  v-model="selected2"
  :options="searchSelectionOptions"
  placeholder="Select Country"
/>`,c=j(null),p=["Arabic","Chinese","Danish","Dutch","English","French","German","Greek","Hungarian","Italian","Japanese","Korean","Lithuanian","Persian","Polish","Portuguese","Russian","Spanish","Swedish","Turkish","Vietnamese"],d=`<sui-dropdown
  clearable
  selection
  v-model="selected3"
  :options="clearableSelectionOptions"
  placeholder="Select Language"
/>`,m=j(null),f=`<sui-dropdown
  selection
  multiple
  fluid
  v-model="selected4"
  placeholder="Skills"
  :options="['Angular', 'CSS', 'Ember', 'HTML', 'Javascript', 'NodeJS']"
/>`,h=j(null),_=`<sui-dropdown
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
/>`,x=j(null),y=`<sui-dropdown
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
/>`,I=j({text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}});return{dropdownCode:e,selected1:t,selectionCode:a,selected2:o,searchSelectionOptions:s,searchSelectionCode:u,selected3:c,clearableSelectionOptions:p,clearableSelectionCode:d,selected4:m,multipleCode:f,selected5:h,multipleCode2:_,selected6:x,searchDropdownCode:y,selected7:A,searchInMenuCode:T,selected8:I,inlineCode:`<span>
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
</sui-button-group>`}}});function BD(e,t,a,o,s,u){const c=$("doc-page-header"),p=$("sui-header"),d=$("sui-dropdown-item"),m=$("sui-divider"),f=$("sui-dropdown-menu"),h=$("sui-dropdown"),_=$("doc-example"),x=$("sui-button"),y=$("sui-button-group"),A=$("sui-container");return S(),be("div",null,[i(c,{title:"Dropdown",sub:"A dropdown allows a user to select a value from a series of options"}),i(A,{class:"main"},{default:n(()=>[i(p,{as:"h2",dividing:""},{default:n(()=>[l("Types")]),_:1}),i(_,{title:"Dropdown",description:"A dropdown",code:e.dropdownCode},{default:n(()=>[i(h,{text:"File"},{default:n(()=>[i(f,null,{default:n(()=>[i(d,{text:"New"}),i(d,{text:"Open...",description:"ctrl + o"}),i(d,{text:"Save as...",description:"ctrl + s"}),i(d,{text:"Rename",description:"ctrl + r"}),i(d,{text:"Make a copy"}),i(d,{icon:"folder",text:"Move to folder"}),i(d,{icon:"trash",text:"Move to trash"}),i(m),i(d,{text:"Download As..."}),i(d,{text:"Publish To Web"}),i(d,{text:"E-mail Collaborators"})]),_:1})]),_:1})]),_:1},8,["code"]),i(_,{title:"Selection",description:"A dropdown can be used to select between choices in a form",code:e.selectionCode},{default:n(()=>[i(h,{selection:"",placeholder:"Pet",modelValue:e.selected1,"onUpdate:modelValue":t[0]||(t[0]=T=>e.selected1=T),options:["Cat","Dog","Bird","Rabbit","Squirrel","Horse"]},null,8,["modelValue"])]),_:1},8,["code"]),i(_,{title:"Search Selection",description:"A selection dropdown can allow a user to search through a large list of choices",code:e.searchSelectionCode},{default:n(()=>[i(h,{search:"",selection:"",fluid:"",modelValue:e.selected2,"onUpdate:modelValue":t[1]||(t[1]=T=>e.selected2=T),options:e.searchSelectionOptions,placeholder:"Select Country"},null,8,["modelValue","options"])]),_:1},8,["code"]),i(_,{title:"Clearable Selection",description:"A clearable selection dropdown can allow a user to cancel to cancel a previous selection",code:e.clearableSelectionCode},{default:n(()=>[i(h,{clearable:"",selection:"",modelValue:e.selected3,"onUpdate:modelValue":t[2]||(t[2]=T=>e.selected3=T),options:e.clearableSelectionOptions,placeholder:"Select Language"},null,8,["modelValue","options"])]),_:1},8,["code"]),i(_,{title:"Multiple Selection",description:"A selection dropdown can allow multiple selections",code:e.multipleCode},{default:n(()=>[i(h,{selection:"",multiple:"",fluid:"",modelValue:e.selected4,"onUpdate:modelValue":t[3]||(t[3]=T=>e.selected4=T),placeholder:"Skills",options:["Angular","CSS","Ember","HTML","Javascript","NodeJS"]},null,8,["modelValue"])]),_:1},8,["code"]),i(_,{code:e.multipleCode2},{default:n(()=>[i(h,{selection:"",multiple:"",fluid:"",search:"",modelValue:e.selected5,"onUpdate:modelValue":t[4]||(t[4]=T=>e.selected5=T),placeholder:"Skills",options:[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"}]},null,8,["modelValue"])]),_:1},8,["code"]),i(_,{title:"Search Dropdown",description:"A dropdown can be searchable",code:e.searchDropdownCode},{default:n(()=>[i(h,{button:"",floating:"",labeled:"",search:"",icon:"world",modelValue:e.selected6,"onUpdate:modelValue":t[5]||(t[5]=T=>e.selected6=T),options:[{text:"Arabic",value:"Arabic"},{text:"Chinese",value:"Chinese"},{text:"Danish",value:"Danish"},{text:"Dutch",value:"Dutch"},{text:"English",value:"English"},{text:"French",value:"French"},{text:"German",value:"German"},{text:"Greek",value:"Greek"},{text:"Hungarian",value:"Hungarian"},{text:"Italian",value:"Italian"},{text:"Japanese",value:"Japanese"},{text:"Korean",value:"Korean"},{text:"Lithuanian",value:"Lithuanian"},{text:"Persian",value:"Persian"},{text:"Polish",value:"Polish"},{text:"Portuguese",value:"Portuguese"},{text:"Russian",value:"Russian"},{text:"Spanish",value:"Spanish"},{text:"Swedish",value:"Swedish"},{text:"Turkish",value:"Turkish"},{text:"Vietnamese",value:"Vietnamese"}],text:"Select Language"},null,8,["modelValue"])]),_:1},8,["code"]),i(_,{title:"Search In-Menu",description:"A dropdown can include a search prompt inside its menu",code:e.searchInMenuCode},{default:n(()=>[i(h,{text:"Filter Posts",icon:"filter",floating:"",labeled:"",button:"",searchInMenu:"",modelValue:e.selected7,"onUpdate:modelValue":t[6]||(t[6]=T=>e.selected7=T),options:[{text:"Important",value:"Important",label:{color:"red",empty:!0,circular:!0}},{text:"Announcement",value:"Announcement",label:{color:"blue",empty:!0,circular:!0}},{text:"Cannot Fix",value:"Cannot Fix",label:{color:"black",empty:!0,circular:!0}},{text:"News",value:"News",label:{color:"purple",empty:!0,circular:!0}},{text:"Enhancement",value:"Enhancement",label:{color:"orange",empty:!0,circular:!0}},{text:"Change Declined",value:"Change Declined",label:{empty:!0,circular:!0}},{text:"Off Topic",value:"Off Topic",label:{color:"yellow",empty:!0,circular:!0}},{text:"Interesting",value:"Interesting",label:{color:"pink",empty:!0,circular:!0}},{text:"Discussion",value:"Discussion",label:{color:"green",empty:!0,circular:!0}}]},null,8,["modelValue"])]),_:1},8,["code"]),i(_,{title:"Inline",description:"A dropdown can be formatted to appear inline in other content",code:e.inlineCode},{default:n(()=>[B("span",null,[l(" Show me posts by "),i(h,{inline:"",modelValue:e.selected8,"onUpdate:modelValue":t[7]||(t[7]=T=>e.selected8=T),options:[{text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}},{text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/images/avatar/small/elliot.jpg"}},{text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/images/avatar/small/stevie.jpg"}},{text:"Christian",value:"Christian",image:{avatar:!0,src:"/images/avatar/small/christian.jpg"}}]},null,8,["modelValue","options"])])]),_:1},8,["code"]),i(_,{title:"Pointing",description:"A dropdown can be formatted so that its menu is pointing",code:e.pointingCode},{default:n(()=>[i(h,{icon:"wrench",button:"",pointing:"top left"},{default:n(()=>[i(f,null,{default:n(()=>[i(d,{text:"New"}),i(d,{text:"Save As"}),i(d,{text:"Edit"})]),_:1})]),_:1})]),_:1},8,["code"]),i(_,{title:"Floating",description:"A dropdown menu can appear to be floating below an element",code:e.floatingCode},{default:n(()=>[i(y,{color:"teal"},{default:n(()=>[i(x,null,{default:n(()=>[l("Save")]),_:1}),i(h,{floating:"",button:"",icon:"dropdown"},{default:n(()=>[i(f,null,{default:n(()=>[i(d,{text:"Edit Post",icon:"edit"}),i(d,{text:"Remove Post",icon:"delete"}),i(d,{text:"Hide Post",icon:"hide"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const $D=Ne(kD,[["render",BD]]),TD=F({name:"EmbedDoc",components:{DocPageHeader:Ht,DocExample:_t},setup(){return{youtubeCode:`<sui-embed
  id="O6Xo21L0ybE"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`,aspectRatioCode:`<sui-embed
  aspectRatio="4:3"
  id="HTZudKi36bo"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`}}});function LD(e,t,a,o,s,u){const c=$("doc-page-header"),p=$("sui-header"),d=$("sui-embed"),m=$("doc-example"),f=$("sui-container");return S(),be("div",null,[i(c,{title:"Embed",sub:"An embed displays content from other websites like YouTube videos or Google Maps"}),i(f,{class:"main"},{default:n(()=>[i(p,{as:"h2",dividing:""},{default:n(()=>[l("Types")]),_:1}),i(m,{title:"YouTube",description:"An embed can be used to display YouTube Content",code:e.youtubeCode},{default:n(()=>[i(d,{id:"O6Xo21L0ybE",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"]),i(p,{as:"h2",dividing:""},{default:n(()=>[l("Variations")]),_:1}),i(m,{title:"Aspect Ratio",description:"An embed can specify an alternative aspect ratio",code:e.aspectRatioCode},{default:n(()=>[i(d,{aspectRatio:"4:3",id:"HTZudKi36bo",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"])]),_:1})])}const DD=Ne(TD,[["render",LD]]),ID=B("p",null," We've found the following gravatar image associated with your e-mail address. ",-1),ED=B("p",null,"Is it okay to use this photo?",-1),RD=`<template>
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
<\/script>`,zD={__name:"ModalDoc",setup(e){const t=j(!1);return(a,o)=>(S(),C(D,{label:"Modal",code:RD},{description:n(()=>[l(" A standard modal ")]),example:n(()=>[i(r(z),{onClick:o[0]||(o[0]=s=>t.value=!0)},{default:n(()=>[l("Show Modal")]),_:1}),i(r(vs),{modelValue:t.value,"onUpdate:modelValue":o[2]||(o[2]=s=>t.value=s)},{default:n(()=>[i(r(ys),null,{default:n(()=>[l("Select a Photo")]),_:1}),i(r(Ss),{image:""},{default:n(()=>[i(r(le),{wrapped:"",size:"medium",src:"/vue-fomantic-ui/images/avatar/large/rachel.png"}),i(r(fd),null,{default:n(()=>[i(r(fe),null,{default:n(()=>[l("Default Profile Image")]),_:1}),ID,ED]),_:1})]),_:1}),i(r(bs),null,{default:n(()=>[i(r(z),{positive:"",onClick:o[1]||(o[1]=s=>t.value=!1)},{default:n(()=>[l("OK")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},PD=B("p",null," Your inbox is getting full, would you like us to enable automatic archiving of old messages? ",-1),FD=`<template>
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
<\/script>`,VD={__name:"BasicDoc",setup(e){const t=j(!1);return(a,o)=>(S(),C(D,{label:"Basic",code:FD},{description:n(()=>[l(" A modal can reduce its complexity ")]),example:n(()=>[i(r(z),{onClick:o[0]||(o[0]=s=>t.value=!0)},{default:n(()=>[l("Basic Modal")]),_:1}),i(r(vs),{basic:"",modelValue:t.value,"onUpdate:modelValue":o[2]||(o[2]=s=>t.value=s)},{default:n(()=>[i(r(ys),{icon:""},{default:n(()=>[i(r(W),{name:"archive"}),l(" Archive Old Messages")]),_:1}),i(r(Ss),null,{default:n(()=>[PD]),_:1}),i(r(bs),null,{default:n(()=>[i(r(z),{basic:"",color:"red",inverted:"",icon:"remove",content:"No",onClick:o[1]||(o[1]=s=>t.value=!1)}),i(r(z),{basic:"",color:"green",icon:"checkmark",content:"Yes"})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},MD={__name:"Modal",setup(e){const t=[{id:"modal",label:"Modal",category:"Types",component:zD},{id:"basic",label:"Basic",category:"Types",component:VD}];return(a,o)=>(S(),C(lt,{title:"Modal",description:"A modal displays content that temporarily blocks interactions with the main view of a site","component-docs":t}))}},HD="/vue-fomantic-ui/images/movies/totoro-horizontal.jpg",OD=F({name:"PopupDoc",components:{DocPageHeader:Ht,DocExample:_t},setup(){const e=j(null),t=`<sui-button icon ref="trigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup :trigger="trigger">
  Add users to your feed
</sui-popup>`,a=j(null),o=j(null),s=j(null),u=`<sui-image avatar src="/images/avatar/small/elliot.jpg" ref="titledTrigger1" />
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
/>`,c=j(null),p=`<sui-card ref="triggerTriger">
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
</sui-popup>`,d=j(null),m=`<sui-button icon ref="basicTrigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup
  :trigger="basicTrigger"
  basic
  content="The default theme's basic popup removes the pointing arrow."
/>`,f=j(null),h=j(null),_=j(null),x=`<sui-icon name="heart" circular ref="wideTrigger1" />
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
</sui-popup>`,y=j(null),A=j(null),T=j(null),I=j(null),g=j(null),v=j(null),w=j(null),k=j(null),E=`<sui-button ref="positionTrigger1">Top Left</sui-button>
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
<sui-popup :trigger="positionTrigger8" position="left center" content="I am positioned to the left center" />`,V=j(null),H=`<sui-button ref="flowingTrigger">Show Flowing Popup</sui-button>
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
</sui-popup>`,P=j(null),G=j(null),J=j(null),Y=j(null),pe=j(null),Ae=`<sui-icon name="heart" circular link ref="sizeTrigger1" />
<sui-icon name="heart" circular link ref="sizeTrigger2" />
<sui-icon name="heart" circular link ref="sizeTrigger3" />
<sui-icon name="heart" circular link ref="sizeTrigger4" />
<sui-icon name="heart" circular link ref="sizeTrigger5" />

<sui-popup size="mini" content="Hello. This is a mini popup" :trigger="sizeTrigger1" />
<sui-popup size="tiny" content="Hello. This is a tiny popup" :trigger="sizeTrigger2" />
<sui-popup size="small" content="Hello. This is a small popup" :trigger="sizeTrigger3" />
<sui-popup size="large" content="Hello. This is a large popup" :trigger="sizeTrigger4" />
<sui-popup size="huge" content="Hello. This is a huge popup" :trigger="sizeTrigger5" />`,U=j(null),K=j(null);return{popupTrigger:e,popupCode:t,titledTrigger1:a,titledTrigger2:o,titledTrigger3:s,titledCode:u,triggerTriger:c,triggerCode:p,basicTrigger:d,basicCode:m,wideTrigger1:f,wideTrigger2:h,wideTrigger3:_,wideCode:x,positionTrigger1:y,positionTrigger2:A,positionTrigger3:T,positionTrigger4:I,positionTrigger5:g,positionTrigger6:v,positionTrigger7:w,positionTrigger8:k,positionCode:E,flowingTrigger:V,flowingCode:H,sizeTrigger1:P,sizeTrigger2:G,sizeTrigger3:J,sizeTrigger4:Y,sizeTrigger5:pe,sizeCode:Ae,invertedTrigger1:U,invertedTrigger2:K,invertedCode:`<sui-icon name="heart" circular ref="invertedTrigger1" />
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
/>`}}}),qD=B("p",null,[B("b",null,"2"),l(" projects, $10 a month ")],-1),ND=B("p",null,[B("b",null,"5"),l(" projects, $20 a month ")],-1),GD=B("p",null,[B("b",null,"8"),l(" projects, $25 a month ")],-1);function jD(e,t,a,o,s,u){const c=$("doc-page-header"),p=$("sui-header"),d=$("sui-icon"),m=$("sui-button"),f=$("sui-popup"),h=$("doc-example"),_=$("sui-image"),x=$("sui-card-header"),y=$("sui-card-description"),A=$("sui-card-content"),T=$("sui-card"),I=$("sui-rating"),g=$("sui-divider"),v=$("sui-grid-column"),w=$("sui-grid"),k=$("sui-container");return S(),be("div",null,[i(c,{title:"Popup",sub:"A popup displays additional information on top of a page"}),i(k,{class:"main"},{default:n(()=>[i(p,{as:"h2",dividing:""},{default:n(()=>[l("Types")]),_:1}),i(h,{title:"Popup",description:"An element can specify popup content to appear",code:e.popupCode},{default:n(()=>[i(m,{icon:"",ref:"popupTrigger"},{default:n(()=>[i(d,{name:"add"})]),_:1},512),i(f,{trigger:e.popupTrigger},{default:n(()=>[l(" Add users to your feed ")]),_:1},8,["trigger"])]),_:1},8,["code"]),i(h,{title:"Titled",description:"An element can specify popup content with a title",code:e.titledCode},{default:n(()=>[i(_,{avatar:"",src:pa,ref:"titledTrigger1"},null,512),i(_,{avatar:"",src:Il,ref:"titledTrigger2"},null,512),i(_,{avatar:"",src:Vd,ref:"titledTrigger3"},null,512),i(f,{trigger:e.titledTrigger1,header:"Elliot Fu",content:"Elliot has been a member since July 2012"},null,8,["trigger"]),i(f,{trigger:e.titledTrigger2,header:"Stevie Feliciano",content:"Stevie has been a member since August 2013"},null,8,["trigger"]),i(f,{trigger:e.titledTrigger3,header:"Matt",content:"Matt has been a member since July 2014"},null,8,["trigger"])]),_:1},8,["code"]),i(h,{title:"Trigger",description:"A trigger can be complex element",code:e.triggerCode},{default:n(()=>[i(T,{ref:"triggerTriger"},{default:n(()=>[i(_,{src:HD}),i(A,null,{default:n(()=>[i(x,null,{default:n(()=>[l("My Neighbor Totoro")]),_:1}),i(y,null,{default:n(()=>[l(" Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits. ")]),_:1})]),_:1})]),_:1},512),i(f,{trigger:e.triggerTriger,header:"User Rating"},{default:n(()=>[i(I,{icon:"star",defaultRating:3,maxRating:4})]),_:1},8,["trigger"])]),_:1},8,["code"]),i(p,{as:"h2",dividing:""},{default:n(()=>[l("Variations")]),_:1}),i(h,{title:"Basic",description:"A popup can provide more basic formatting",code:e.basicCode},{default:n(()=>[i(m,{icon:"",ref:"basicTrigger"},{default:n(()=>[i(d,{name:"add"})]),_:1},512),i(f,{trigger:e.basicTrigger,basic:"",content:"The default theme's basic popup removes the pointing arrow."},null,8,["trigger"])]),_:1},8,["code"]),i(h,{title:"Position",description:"A popup can be position around its trigger",code:e.positionCode},{default:n(()=>[i(m,{ref:"positionTrigger1"},{default:n(()=>[l("Top Left")]),_:1},512),i(m,{ref:"positionTrigger2"},{default:n(()=>[l("Top Center")]),_:1},512),i(m,{ref:"positionTrigger3"},{default:n(()=>[l("Top Right")]),_:1},512),i(g),i(m,{ref:"positionTrigger4"},{default:n(()=>[l("Bottom Left")]),_:1},512),i(m,{ref:"positionTrigger5"},{default:n(()=>[l("Bottom Center")]),_:1},512),i(m,{ref:"positionTrigger6"},{default:n(()=>[l("Bottom Right")]),_:1},512),i(g),i(m,{ref:"positionTrigger7"},{default:n(()=>[l("Right Center")]),_:1},512),i(m,{ref:"positionTrigger8"},{default:n(()=>[l("Left Center")]),_:1},512),i(f,{trigger:e.positionTrigger1,position:"top left",content:"I am positioned to the top left"},null,8,["trigger"]),i(f,{trigger:e.positionTrigger2,position:"top center",content:"I am positioned to the top center"},null,8,["trigger"]),i(f,{trigger:e.positionTrigger3,position:"top right",content:"I am positioned to the top right"},null,8,["trigger"]),i(f,{trigger:e.positionTrigger4,position:"bottom left",content:"I am positioned to the bottom left"},null,8,["trigger"]),i(f,{trigger:e.positionTrigger5,position:"bottom center",content:"I am positioned to the bottom center"},null,8,["trigger"]),i(f,{trigger:e.positionTrigger6,position:"bottom right",content:"I am positioned to the bottom right"},null,8,["trigger"]),i(f,{trigger:e.positionTrigger7,position:"right center",content:"I am positioned to the right center"},null,8,["trigger"]),i(f,{trigger:e.positionTrigger8,position:"left center",content:"I am positioned to the left center"},null,8,["trigger"])]),_:1},8,["code"]),i(h,{title:"Flowing",description:"A popup can have no maximum width and continue to flow to fit its content",code:e.flowingCode},{default:n(()=>[i(m,{ref:"flowingTrigger"},{default:n(()=>[l("Show Flowing Popup")]),_:1},512),i(f,{trigger:e.flowingTrigger,flowing:""},{default:n(()=>[i(w,{centered:"",divided:"",columns:3},{default:n(()=>[i(v,{textAlign:"center"},{default:n(()=>[i(p,{as:"h4"},{default:n(()=>[l("Basic Plan")]),_:1}),qD,i(m,null,{default:n(()=>[l("Choose")]),_:1})]),_:1}),i(v,{textAlign:"center"},{default:n(()=>[i(p,{as:"h4"},{default:n(()=>[l("Business Plan")]),_:1}),ND,i(m,null,{default:n(()=>[l("Choose")]),_:1})]),_:1}),i(v,{textAlign:"center"},{default:n(()=>[i(p,{as:"h4"},{default:n(()=>[l("Premium Plan")]),_:1}),GD,i(m,null,{default:n(()=>[l("Choose")]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])]),_:1},8,["code"]),i(h,{title:"Size",description:"A popup can vary in size",code:e.sizeCode},{default:n(()=>[i(d,{name:"heart",circular:"",link:"",ref:"sizeTrigger1"},null,512),i(d,{name:"heart",circular:"",link:"",ref:"sizeTrigger2"},null,512),i(d,{name:"heart",circular:"",link:"",ref:"sizeTrigger3"},null,512),i(d,{name:"heart",circular:"",link:"",ref:"sizeTrigger4"},null,512),i(d,{name:"heart",circular:"",link:"",ref:"sizeTrigger5"},null,512),i(f,{size:"mini",content:"Hello. This is a mini popup",trigger:e.sizeTrigger1},null,8,["trigger"]),i(f,{size:"tiny",content:"Hello. This is a tiny popup",trigger:e.sizeTrigger2},null,8,["trigger"]),i(f,{size:"small",content:"Hello. This is a small popup",trigger:e.sizeTrigger3},null,8,["trigger"]),i(f,{size:"large",content:"Hello. This is a large popup",trigger:e.sizeTrigger4},null,8,["trigger"]),i(f,{size:"huge",content:"Hello. This is a huge popup",trigger:e.sizeTrigger5},null,8,["trigger"])]),_:1},8,["code"]),i(h,{title:"Wide",description:"A popup can be extra wide to allow for longer content",code:e.wideCode},{default:n(()=>[i(d,{name:"heart",circular:"",ref:"wideTrigger1"},null,512),i(d,{name:"heart",circular:"",ref:"wideTrigger2"},null,512),i(d,{name:"heart",circular:"",ref:"wideTrigger3"},null,512),i(f,{trigger:e.wideTrigger1},{default:n(()=>[l(" Hello. This is a regular pop-up which does not allow for lots of content. You cannot fit a lot of words here as the paragraphs will be pretty narrow. ")]),_:1},8,["trigger"]),i(f,{trigger:e.wideTrigger2,wide:""},{default:n(()=>[l(" Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"]),i(f,{trigger:e.wideTrigger3,wide:"very"},{default:n(()=>[l(" Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"])]),_:1},8,["code"]),i(h,{title:"Inverted",description:"A popup can have its colors inverted",code:e.invertedCode},{default:n(()=>[i(d,{name:"heart",circular:"",ref:"invertedTrigger1"},null,512),i(m,{icon:"",ref:"invertedTrigger2"},{default:n(()=>[i(d,{name:"add"})]),_:1},512),i(f,{trigger:e.invertedTrigger1,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"]),i(f,{trigger:e.invertedTrigger2,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"])]),_:1},8,["code"])]),_:1})])}const UD=Ne(OD,[["render",jD]]),YD=F({name:"RatingDoc",components:{DocPageHeader:Ht,DocExample:_t,PropertyListTable:ko},setup(){return{ratingCode:'<sui-rating v-model="value" />',iconCode:`<sui-rating :defaultRating="2" :maxRating="4" color="yellow" />
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
<sui-rating size="massive" :defaultRating="3" :maxRating="4" color="yellow" />`,properties:[{name:"color",type:"string",default:"",description:"A rating can have different colors"},{name:"defaultRating",type:"number",default:0,description:"The initial value of rating."},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"icon",type:"string",default:"star",description:"A rating can use a set of specified icons."},{name:"maxRating",type:"number",default:1,description:"The total number of icons."},{name:"modelValue",type:"number",default:"null",description:"A value of rating."},{name:"size",type:"string",default:"",description:"A rating can have different sizes."}],events:[{name:"change",description:"Callback to invoke on value change."}]}}}),WD=B("br",null,null,-1),KD=B("br",null,null,-1),XD=B("br",null,null,-1),JD=B("br",null,null,-1),QD=B("br",null,null,-1),ZD=B("br",null,null,-1),eI=B("br",null,null,-1),tI=B("br",null,null,-1),iI=B("br",null,null,-1),nI=B("br",null,null,-1),aI=B("br",null,null,-1),oI=B("br",null,null,-1),lI=B("br",null,null,-1),sI=B("br",null,null,-1),rI=B("br",null,null,-1),uI=B("br",null,null,-1),cI=B("br",null,null,-1),dI=B("br",null,null,-1),pI=B("br",null,null,-1),mI=B("br",null,null,-1),fI=B("br",null,null,-1),gI=B("br",null,null,-1),hI=B("br",null,null,-1),_I=B("br",null,null,-1),vI=B("br",null,null,-1),bI=B("br",null,null,-1),SI=B("br",null,null,-1),yI=B("br",null,null,-1),wI=B("br",null,null,-1),CI=B("br",null,null,-1),xI=B("br",null,null,-1),AI=B("br",null,null,-1),kI=B("br",null,null,-1),BI=B("br",null,null,-1),$I=B("br",null,null,-1),TI=B("br",null,null,-1),LI=B("br",null,null,-1),DI=B("br",null,null,-1),II=B("br",null,null,-1),EI=B("br",null,null,-1),RI=B("br",null,null,-1),zI=B("br",null,null,-1),PI=B("br",null,null,-1),FI=B("br",null,null,-1),VI=B("br",null,null,-1),MI=B("br",null,null,-1),HI=B("br",null,null,-1),OI=B("br",null,null,-1);function qI(e,t,a,o,s,u){const c=$("doc-page-header"),p=$("sui-header"),d=$("sui-rating"),m=$("doc-example"),f=$("property-list-table"),h=$("sui-table-header-cell"),_=$("sui-table-row"),x=$("sui-table-header"),y=$("sui-table-cell"),A=$("sui-table-body"),T=$("sui-table"),I=$("sui-container");return S(),be("div",null,[i(c,{title:"Rating",sub:"A rating indicates user interest in content"}),i(I,{class:"main"},{default:n(()=>[i(p,{as:"h2",dividing:""},{default:n(()=>[l("Types")]),_:1}),i(m,{title:"Rating",description:"A Basic rating",code:e.ratingCode},{default:n(()=>[i(d)]),_:1},8,["code"]),i(m,{title:"Icon",description:"You can use any available icon as rating indicator",code:e.iconCode},{default:n(()=>[i(d,{defaultRating:2,maxRating:4,color:"yellow"}),WD,KD,i(d,{defaultRating:2,maxRating:4,icon:"heart",color:"red"}),XD,JD,i(d,{defaultRating:2,maxRating:4,icon:"female",color:"purple"}),QD,ZD,i(d,{defaultRating:2,maxRating:4,icon:"male",color:"blue"}),eI,tI,i(d,{defaultRating:2,maxRating:4,icon:"cloud",color:"grey"}),iI,nI,i(d,{defaultRating:2,maxRating:4,icon:"cat",color:"pink"}),aI,oI,i(d,{defaultRating:2,maxRating:4,icon:"circle",color:"orange"})]),_:1},8,["code"]),i(m,{title:"Color",description:"You can specify any color of the FUI color palette",code:e.colorCode},{default:n(()=>[i(d,{defaultRating:1,maxRating:7,color:"red"}),lI,sI,i(d,{defaultRating:2,maxRating:7,color:"orange"}),rI,uI,i(d,{defaultRating:3,maxRating:7,color:"yellow"}),cI,dI,i(d,{defaultRating:4,maxRating:7,color:"olive"}),pI,mI,i(d,{defaultRating:5,maxRating:7,color:"green"}),fI,gI,i(d,{defaultRating:6,maxRating:7,color:"teal"}),hI,_I,i(d,{defaultRating:6,maxRating:7,color:"blue"}),vI,bI,i(d,{defaultRating:5,maxRating:7,color:"violet"}),SI,yI,i(d,{defaultRating:4,maxRating:7,color:"purple"}),wI,CI,i(d,{defaultRating:3,maxRating:7,color:"pink"}),xI,AI,i(d,{defaultRating:2,maxRating:7,color:"brown"}),kI,BI,i(d,{defaultRating:1,maxRating:7,color:"grey"}),$I,TI,i(d,{defaultRating:1,maxRating:7,color:"black"})]),_:1},8,["code"]),i(p,{as:"h2",dividing:""},{default:n(()=>[l("States")]),_:1}),i(m,{title:"Disabled",description:"A rating can be started in non-interactive mode by adding a disabled class",code:e.disabledCode},{default:n(()=>[i(d,{disabled:"",defaultRating:3,maxRating:5,color:"yellow"})]),_:1},8,["code"]),i(p,{as:"h2",dividing:""},{default:n(()=>[l("Variations")]),_:1}),i(m,{title:"Size",description:"A rating can vary in size",code:e.sizeCode},{default:n(()=>[i(d,{size:"mini",defaultRating:3,maxRating:4,color:"yellow"}),LI,DI,i(d,{size:"tiny",defaultRating:3,maxRating:4,color:"yellow"}),II,EI,i(d,{size:"small",defaultRating:3,maxRating:4,color:"yellow"}),RI,zI,i(d,{defaultRating:3,maxRating:4,color:"yellow"}),PI,FI,i(d,{size:"large",defaultRating:3,maxRating:4,color:"yellow"}),VI,MI,i(d,{size:"huge",defaultRating:3,maxRating:4,color:"yellow"}),HI,OI,i(d,{size:"massive",defaultRating:3,maxRating:4,color:"yellow"})]),_:1},8,["code"]),i(p,{as:"h2",dividing:""},{default:n(()=>[l("Properties")]),_:1}),i(f,{properties:e.properties},null,8,["properties"]),i(p,{as:"h2",dividing:""},{default:n(()=>[l("Events")]),_:1}),i(T,{celled:""},{default:n(()=>[i(x,null,{default:n(()=>[i(_,null,{default:n(()=>[i(h,null,{default:n(()=>[l("Name")]),_:1}),i(h,null,{default:n(()=>[l("Description")]),_:1})]),_:1})]),_:1}),i(A,null,{default:n(()=>[(S(!0),be(we,null,Qe(e.events,g=>(S(),C(_,{key:g.name},{default:n(()=>[i(y,null,{default:n(()=>[l($e(g.name),1)]),_:2},1024),i(y,null,{default:n(()=>[l($e(g.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const NI=Ne(YD,[["render",qI]]),GI=F({name:"SidebarDoc",components:{DocPageHeader:Ht,DocExample:_t,PropertyListTable:ko},setup(){return{visible1:j(!1),sidebarCode:`<sui-grid :columns="1">
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
</sui-grid>`,properties:[{name:"animation",type:"string",default:"overlay",description:"Specifies the animation of the sidebar."},{name:"dimmed",type:"boolean",default:"false",description:"When specified, display the dim inside pusher content."},{name:"direction",type:"string",default:"left",description:"Specifies the direction the sidebar should appear on."},{name:"visible",type:"boolean",default:"false",description:"Specifies the visibility of the sidebar."}],events:[{name:"hide",description:"Callback to invoke when sidebar hide."},{name:"show",description:"Callback to invoke when sidebar show."}]}}}),jI={class:"pusher"};function UI(e,t,a,o,s,u){const c=$("doc-page-header"),p=$("sui-header"),d=$("sui-icon"),m=$("sui-button"),f=$("sui-grid-column"),h=$("sui-menu-item"),_=$("sui-sidebar"),x=$("sui-image"),y=$("sui-segment"),A=$("sui-grid"),T=$("doc-example"),I=$("property-list-table"),g=$("sui-table-header-cell"),v=$("sui-table-row"),w=$("sui-table-header"),k=$("sui-table-cell"),E=$("sui-table-body"),V=$("sui-table"),H=$("sui-container");return S(),be("div",null,[i(c,{title:"Sidebar",sub:"A sidebar hides additional content beside a page"}),i(H,{class:"main"},{default:n(()=>[i(p,{as:"h2",dividing:""},{default:n(()=>[l("Types")]),_:1}),i(T,{title:"Sidebar",description:"A sidebar",code:e.sidebarCode},{default:n(()=>[i(A,{columns:1},{default:n(()=>[i(f,null,{default:n(()=>[i(m,{onClick:t[0]||(t[0]=P=>e.visible1=!e.visible1),icon:""},{default:n(()=>[i(d,{name:"arrow right"})]),_:1})]),_:1}),i(f,null,{default:n(()=>[i(y,{class:"pushable"},{default:n(()=>[i(_,{visible:e.visible1,"onUpdate:visible":t[1]||(t[1]=P=>e.visible1=P),dimmed:"",icon:"labeled",inverted:""},{default:n(()=>[i(h,null,{default:n(()=>[i(d,{name:"home"}),l(" Home ")]),_:1}),i(h,null,{default:n(()=>[i(d,{name:"gamepad"}),l(" Games ")]),_:1}),i(h,null,{default:n(()=>[i(d,{name:"camera"}),l(" Channels ")]),_:1})]),_:1},8,["visible"]),B("div",jI,[i(y,null,{default:n(()=>[i(p,{as:"h2"},{default:n(()=>[l("Main Header")]),_:1}),i(x,{src:Oe})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(p,{as:"h2",dividing:""},{default:n(()=>[l("Properties")]),_:1}),i(I,{properties:e.properties},null,8,["properties"]),i(p,{as:"h2",dividing:""},{default:n(()=>[l("Events")]),_:1}),i(V,{celled:""},{default:n(()=>[i(w,null,{default:n(()=>[i(v,null,{default:n(()=>[i(g,null,{default:n(()=>[l("Name")]),_:1}),i(g,null,{default:n(()=>[l("Description")]),_:1})]),_:1})]),_:1}),i(E,null,{default:n(()=>[(S(!0),be(we,null,Qe(e.events,P=>(S(),C(v,{key:P.name},{default:n(()=>[i(k,null,{default:n(()=>[l($e(P.name),1)]),_:2},1024),i(k,null,{default:n(()=>[l($e(P.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const YI=Ne(GI,[["render",UI]]),WI=F({name:"SliderDoc",components:{DocPageHeader:Ht,DocExample:_t},setup(){const e=j(5),t='<sui-slider v-model="slider1" />',a=j(4),o='<sui-slider labeled v-model="slider2" />',s=j(6),u='<sui-slider labeled="ticked" v-model="slider3" />',c=j(0),p=`<sui-slider
  v-model="slider4"
  labeled="ticked"
  :labels='["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ/ς", "τ", "υ", "φ"]'
  :max="20"
/>`,d=j(40),m='<sui-slider v-model="slider5" labeled :step="5" :max="120" :min="20" />',f=j([]);f.value.push(20,60);const h='<sui-slider v-model="slider6" range labeled="ticked" :min="5" :max="100" :step="5" />',_=j(7),x='<sui-slider disabled v-model="slider7" />',y=j(8),A=`<sui-segment inverted>
  <sui-slider inverted v-model="slider8" />
</sui-segment>`,T=j(3),I='<sui-slider reversed v-model="slider9" />',g=j(18),v='<sui-slider vertical v-model="slider10" :max="20" />',w=j(5),k=j(5),E=j(5),V=j(5),H=j(5),P=j(5),G=j(5),J=j(5),Y=j(5),pe=j(5),Ae=j(5),U=j(5),K=j(5),ue=`<sui-slider color="red" v-model="redSlider" />
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
<sui-slider color="black" v-model="blackSlider" />`,ne=`<sui-segment inverted>
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
</sui-segment>`,Le=j(5),We=j(5),at=j(5);return{slider1:e,sliderCode:t,slider2:a,labeledSliderCode:o,slider3:s,labeledTickedCode:u,slider4:c,customLabelsCode:p,slider5:d,stepCode:m,slider6:f,rangeCode:h,slider7:_,disabledCode:x,slider8:y,invertedCode:A,slider9:T,reversedCode:I,slider10:g,verticalCode:v,redSlider:w,orangeSlider:k,yellowSlider:E,oliveSlider:V,greenSlider:H,tealSlider:P,blueSlider:G,violetSlider:J,purpleSlider:Y,pinkSlider:pe,brownSlider:Ae,greySlider:U,blackSlider:K,coloredCode:ue,invertedColoredCode:ne,smallSlider:Le,largeSlider:We,bigSlider:at,sizeCode:`<sui-slider size="small" color="red" v-model="smallSlider" />
<sui-slider size="large" color="yellow" v-model="largeSlider" />
<sui-slider size="big" color="olive" v-model="bigSlider" />`,properties:[{name:"color",type:"string",default:"",description:"A slider can have different colors"},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"inverted",type:"boolean",default:!1,description:"A slider can be formatted to appear on dark backgrounds."},{name:"labeled",type:"boolean|string",default:!1,description:"A slider can show its labels."},{name:"labels",type:"string[]",default:"",description:"A slider can have a custom label according to the label value."},{name:"max",type:"number",default:10,description:"Maximum boundary value."},{name:"min",type:"number",default:0,description:"Mininum boundary value."},{name:"modelValue",type:"number|number[]",default:0,description:"A value of component."},{name:"range",type:"boolean",default:!1,description:"When specified, allows two boundary values to be picked."},{name:"reversed",type:"boolean",default:!1,description:"A slider can be reversed."},{name:"size",type:"string",default:"",description:"A slider can have different sizes."},{name:"step",type:"number",default:1,description:"Step factor to increment/decrement the value."},{name:"vertical",type:"boolean",default:!1,description:"When specified, orientation of the slider becomes vertical."},{name:"verticalHeight",type:"number|string",default:200,description:"Height of the vertical slider."}],events:[{name:"change",description:"Callback to invoke on value change."},{name:"slideend",description:"Callback to invoke when slide end."}]}}});function KI(e,t,a,o,s,u){const c=$("doc-page-header"),p=$("sui-header"),d=$("sui-slider"),m=$("doc-example"),f=$("sui-segment"),h=$("sui-table-header-cell"),_=$("sui-table-row"),x=$("sui-table-header"),y=$("sui-table-cell"),A=$("sui-table-body"),T=$("sui-table"),I=$("sui-container");return S(),be("div",null,[i(c,{title:"Slider",sub:"A slider allows users to select values within a range"}),i(I,{class:"main"},{default:n(()=>[i(p,{as:"h2",dividing:""},{default:n(()=>[l("Types")]),_:1}),i(m,{title:"Slider",description:"A standard slider",code:e.sliderCode},{default:n(()=>[i(d,{modelValue:e.slider1,"onUpdate:modelValue":t[0]||(t[0]=g=>e.slider1=g)},null,8,["modelValue"]),l(" "+$e(e.slider1),1)]),_:1},8,["code"]),i(m,{title:"Labeled Slider",description:"A slider that show its labels",code:e.labeledSliderCode},{default:n(()=>[i(d,{labeled:"",modelValue:e.slider2,"onUpdate:modelValue":t[1]||(t[1]=g=>e.slider2=g)},null,8,["modelValue"])]),_:1},8,["code"]),i(m,{title:"Labeled Ticked Slider",description:"A slider that show its labels and ticks",code:e.labeledTickedCode},{default:n(()=>[i(d,{labeled:"ticked",modelValue:e.slider3,"onUpdate:modelValue":t[2]||(t[2]=g=>e.slider3=g)},null,8,["modelValue"])]),_:1},8,["code"]),i(m,{title:"Custom Interpreted Labels",description:"You can provide a function which returns a custom label according to the label value",code:e.customLabelsCode},{default:n(()=>[i(d,{modelValue:e.slider4,"onUpdate:modelValue":t[3]||(t[3]=g=>e.slider4=g),labeled:"ticked",labels:["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ/ς","τ","υ","φ"],max:20},null,8,["modelValue"])]),_:1},8,["code"]),i(m,{title:"Step",description:"A slider can change the default step increment",code:e.stepCode},{default:n(()=>[i(d,{modelValue:e.slider5,"onUpdate:modelValue":t[4]||(t[4]=g=>e.slider5=g),labeled:"",step:5,max:120,min:20},null,8,["modelValue"]),l(" "+$e(e.slider5),1)]),_:1},8,["code"]),i(m,{title:"Range",description:"A range slider which allow you to select a range between two values",code:e.rangeCode},{default:n(()=>[i(d,{modelValue:e.slider6,"onUpdate:modelValue":t[5]||(t[5]=g=>e.slider6=g),range:"",labeled:"ticked",min:5,max:100,step:5},null,8,["modelValue"]),l(" "+$e(e.slider6),1)]),_:1},8,["code"]),i(p,{as:"h2",dividing:""},{default:n(()=>[l("Variations")]),_:1}),i(m,{title:"Disabled",description:"A slider can appear disabled",code:e.disabledCode},{default:n(()=>[i(d,{disabled:"",modelValue:e.slider7,"onUpdate:modelValue":t[6]||(t[6]=g=>e.slider7=g)},null,8,["modelValue"])]),_:1},8,["code"]),i(m,{title:"Inverted",description:"A slider can be inverted",code:e.invertedCode},{default:n(()=>[i(f,{inverted:""},{default:n(()=>[i(d,{inverted:"",modelValue:e.slider8,"onUpdate:modelValue":t[7]||(t[7]=g=>e.slider8=g)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),i(m,{title:"Reversed",description:"A slider can be reversed",code:e.reversedCode},{default:n(()=>[i(d,{reversed:"",modelValue:e.slider9,"onUpdate:modelValue":t[8]||(t[8]=g=>e.slider9=g)},null,8,["modelValue"]),l(" "+$e(e.slider9),1)]),_:1},8,["code"]),i(m,{title:"Vertical",description:"A slider can be vertical",code:e.verticalCode},{default:n(()=>[i(d,{vertical:"",modelValue:e.slider10,"onUpdate:modelValue":t[9]||(t[9]=g=>e.slider10=g),max:20},null,8,["modelValue"]),l(" "+$e(e.slider10),1)]),_:1},8,["code"]),i(m,{title:"Colored",description:"A slider can be different colors",code:e.coloredCode},{default:n(()=>[i(d,{color:"red",modelValue:e.redSlider,"onUpdate:modelValue":t[10]||(t[10]=g=>e.redSlider=g)},null,8,["modelValue"]),i(d,{color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":t[11]||(t[11]=g=>e.orangeSlider=g)},null,8,["modelValue"]),i(d,{color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":t[12]||(t[12]=g=>e.yellowSlider=g)},null,8,["modelValue"]),i(d,{color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":t[13]||(t[13]=g=>e.oliveSlider=g)},null,8,["modelValue"]),i(d,{color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":t[14]||(t[14]=g=>e.greenSlider=g)},null,8,["modelValue"]),i(d,{color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":t[15]||(t[15]=g=>e.tealSlider=g)},null,8,["modelValue"]),i(d,{color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":t[16]||(t[16]=g=>e.blueSlider=g)},null,8,["modelValue"]),i(d,{color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":t[17]||(t[17]=g=>e.violetSlider=g)},null,8,["modelValue"]),i(d,{color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":t[18]||(t[18]=g=>e.purpleSlider=g)},null,8,["modelValue"]),i(d,{color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":t[19]||(t[19]=g=>e.pinkSlider=g)},null,8,["modelValue"]),i(d,{color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":t[20]||(t[20]=g=>e.brownSlider=g)},null,8,["modelValue"]),i(d,{color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":t[21]||(t[21]=g=>e.greySlider=g)},null,8,["modelValue"]),i(d,{color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":t[22]||(t[22]=g=>e.blackSlider=g)},null,8,["modelValue"])]),_:1},8,["code"]),i(m,{title:"Inverted Colored",description:"A slider can be different colors while inverted",code:e.invertedColoredCode},{default:n(()=>[i(f,{inverted:""},{default:n(()=>[i(d,{inverted:"",color:"red",modelValue:e.redSlider,"onUpdate:modelValue":t[23]||(t[23]=g=>e.redSlider=g)},null,8,["modelValue"]),i(d,{inverted:"",color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":t[24]||(t[24]=g=>e.orangeSlider=g)},null,8,["modelValue"]),i(d,{inverted:"",color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":t[25]||(t[25]=g=>e.yellowSlider=g)},null,8,["modelValue"]),i(d,{inverted:"",color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":t[26]||(t[26]=g=>e.oliveSlider=g)},null,8,["modelValue"]),i(d,{inverted:"",color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":t[27]||(t[27]=g=>e.greenSlider=g)},null,8,["modelValue"]),i(d,{inverted:"",color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":t[28]||(t[28]=g=>e.tealSlider=g)},null,8,["modelValue"]),i(d,{inverted:"",color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":t[29]||(t[29]=g=>e.blueSlider=g)},null,8,["modelValue"]),i(d,{inverted:"",color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":t[30]||(t[30]=g=>e.violetSlider=g)},null,8,["modelValue"]),i(d,{inverted:"",color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":t[31]||(t[31]=g=>e.purpleSlider=g)},null,8,["modelValue"]),i(d,{inverted:"",color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":t[32]||(t[32]=g=>e.pinkSlider=g)},null,8,["modelValue"]),i(d,{inverted:"",color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":t[33]||(t[33]=g=>e.brownSlider=g)},null,8,["modelValue"]),i(d,{inverted:"",color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":t[34]||(t[34]=g=>e.greySlider=g)},null,8,["modelValue"]),i(d,{inverted:"",color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":t[35]||(t[35]=g=>e.blackSlider=g)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),i(m,{title:"Size",description:"A slider can have different sizes",code:e.sizeCode},{default:n(()=>[i(d,{size:"small",color:"red",modelValue:e.smallSlider,"onUpdate:modelValue":t[36]||(t[36]=g=>e.smallSlider=g)},null,8,["modelValue"]),i(d,{size:"large",color:"yellow",modelValue:e.largeSlider,"onUpdate:modelValue":t[37]||(t[37]=g=>e.largeSlider=g)},null,8,["modelValue"]),i(d,{size:"big",color:"olive",modelValue:e.bigSlider,"onUpdate:modelValue":t[38]||(t[38]=g=>e.bigSlider=g)},null,8,["modelValue"])]),_:1},8,["code"]),i(p,{as:"h2",dividing:""},{default:n(()=>[l("Properties")]),_:1}),i(T,{celled:""},{default:n(()=>[i(x,null,{default:n(()=>[i(_,null,{default:n(()=>[i(h,null,{default:n(()=>[l("Name")]),_:1}),i(h,null,{default:n(()=>[l("Type")]),_:1}),i(h,null,{default:n(()=>[l("Default")]),_:1}),i(h,null,{default:n(()=>[l("Description")]),_:1})]),_:1})]),_:1}),i(A,null,{default:n(()=>[(S(!0),be(we,null,Qe(e.properties,g=>(S(),C(_,{key:g.name},{default:n(()=>[i(y,null,{default:n(()=>[l($e(g.name),1)]),_:2},1024),i(y,null,{default:n(()=>[l($e(g.type),1)]),_:2},1024),i(y,null,{default:n(()=>[l($e(g.default),1)]),_:2},1024),i(y,null,{default:n(()=>[l($e(g.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),i(p,{as:"h2",dividing:""},{default:n(()=>[l("Events")]),_:1}),i(T,{celled:""},{default:n(()=>[i(x,null,{default:n(()=>[i(_,null,{default:n(()=>[i(h,null,{default:n(()=>[l("Name")]),_:1}),i(h,null,{default:n(()=>[l("Description")]),_:1})]),_:1})]),_:1}),i(A,null,{default:n(()=>[(S(!0),be(we,null,Qe(e.events,g=>(S(),C(_,{key:g.name},{default:n(()=>[i(y,null,{default:n(()=>[l($e(g.name),1)]),_:2},1024),i(y,null,{default:n(()=>[l($e(g.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const XI=Ne(WI,[["render",KI]]),JI=F({name:"TabDoc",components:{DocPageHeader:Ht,DocExample:_t,PropertyListTable:ko},setup(){return{basicCode:`<sui-tab>
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
</sui-tab>`,tabProperties:[{name:"activeIndex",type:"string",default:0,description:"Index of the active tab."},{name:"pointing",type:"boolean",default:!1,description:""}],tabPanelProperties:[{name:"header",type:"boolean",default:"null",description:"Orientation of tab headers."}],events:[{name:"tab-change",description:"Callback to invoke when an active tab is changed."},{name:"tab-click",description:"Callback to invoke when an tab is clicked."}]}}});function QI(e,t,a,o,s,u){const c=$("doc-page-header"),p=$("sui-header"),d=$("sui-tab-panel"),m=$("sui-tab"),f=$("doc-example"),h=$("property-list-table"),_=$("sui-table-header-cell"),x=$("sui-table-row"),y=$("sui-table-header"),A=$("sui-table-cell"),T=$("sui-table-body"),I=$("sui-table"),g=$("sui-container");return S(),be("div",null,[i(c,{title:"Tab",sub:"A tab is a hidden section of content activated by a menu"}),i(g,{class:"main"},{default:n(()=>[i(p,{as:"h2",dividing:""},{default:n(()=>[l("Examples")]),_:1}),i(f,{title:"Basic",code:e.basicCode},{default:n(()=>[i(m,null,{default:n(()=>[i(d,{header:"First"},{default:n(()=>[l("Content A")]),_:1}),i(d,{header:"Second"},{default:n(()=>[l("Content B")]),_:1}),i(d,{header:"Third"},{default:n(()=>[l("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),i(f,{title:"Pointing",code:e.pointingCode},{default:n(()=>[i(m,{pointing:""},{default:n(()=>[i(d,{header:"First"},{default:n(()=>[l("Content A")]),_:1}),i(d,{header:"Second"},{default:n(()=>[l("Content B")]),_:1}),i(d,{header:"Third"},{default:n(()=>[l("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),i(f,{title:"Secondary",code:e.secondaryCode},{default:n(()=>[i(m,{secondary:""},{default:n(()=>[i(d,{header:"First"},{default:n(()=>[l("Content A")]),_:1}),i(d,{header:"Second"},{default:n(()=>[l("Content B")]),_:1}),i(d,{header:"Third"},{default:n(()=>[l("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),i(f,{title:"Text",code:e.textCode},{default:n(()=>[i(m,{text:""},{default:n(()=>[i(d,{header:"First"},{default:n(()=>[l("Content A")]),_:1}),i(d,{header:"Second"},{default:n(()=>[l("Content B")]),_:1}),i(d,{header:"Third"},{default:n(()=>[l("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),i(p,{as:"h2",dividing:""},{default:n(()=>[l("Properties")]),_:1}),i(p,{as:"h3"},{default:n(()=>[l("Tab")]),_:1}),i(h,{properties:e.tabProperties},null,8,["properties"]),i(p,{as:"h3"},{default:n(()=>[l("TabPanel")]),_:1}),i(h,{properties:e.tabPanelProperties},null,8,["properties"]),i(p,{as:"h2",dividing:""},{default:n(()=>[l("Events")]),_:1}),i(I,{celled:""},{default:n(()=>[i(y,null,{default:n(()=>[i(x,null,{default:n(()=>[i(_,null,{default:n(()=>[l("Name")]),_:1}),i(_,null,{default:n(()=>[l("Description")]),_:1})]),_:1})]),_:1}),i(T,null,{default:n(()=>[(S(!0),be(we,null,Qe(e.events,v=>(S(),C(x,{key:v.name},{default:n(()=>[i(A,null,{default:n(()=>[l($e(v.name),1)]),_:2},1024),i(A,null,{default:n(()=>[l($e(v.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const ZI=Ne(JI,[["render",QI]]),eE=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({ message: 'I am a toast, nice to meet you !' })
}
<\/script>`,tE={__name:"MinimalDoc",setup(e){const{toast:t}=st(),a=()=>{t({message:"I am a toast, nice to meet you !"})};return(o,s)=>{const u=$("SuiButton");return S(),C(D,{label:"Minimal",code:eE},{description:n(()=>[l(" A minimal toast will just display a message. ")]),example:n(()=>[i(u,{onClick:a},{default:n(()=>[l("Show")]),_:1})]),_:1})}}},iE=`<template>
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
<\/script>`,nE={__name:"TitledDoc",setup(e){const{toast:t}=st(),a=()=>{t({title:"Better ?",message:"Hey look, I have a title !"})};return(o,s)=>{const u=$("SuiButton");return S(),C(D,{label:"Titled",code:iE},{description:n(()=>[l(" You can add a title to your toast. ")]),example:n(()=>[i(u,{onClick:a},{default:n(()=>[l("Show")]),_:1})]),_:1})}}},aE=`<template>
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
<\/script>`,oE={__name:"ProgressBarDoc",setup(e){const{toast:t}=st(),a=o=>{t({title:"LOOK",message:"See, how long i will last",showProgress:"bottom",showProgressColor:o})};return(o,s)=>{const u=$("SuiButton");return S(),C(D,{label:"Progress Bar",code:aE},{description:n(()=>[l(" You can attach a progress bar to your toast. ")]),example:n(()=>[i(u,{onClick:a},{default:n(()=>[l("Show")]),_:1}),i(u,{color:"red",onClick:s[0]||(s[0]=c=>a("red"))},{default:n(()=>[l("Show")]),_:1})]),_:1})}}},lE=`<template>
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
<\/script>`,sE={__name:"ToastTypeDoc",setup(e){const{toast:t}=st(),a=o=>{t({message:"You're using the good framework !",type:o})};return(o,s)=>{const u=$("SuiButton");return S(),C(D,{label:"Toast Type",code:lE},{description:n(()=>[l(" A toast can be used to display different types of informations. ")]),example:n(()=>[i(u,{onClick:s[0]||(s[0]=c=>a("success")),positive:""},{default:n(()=>[l("Success")]),_:1}),i(u,{onClick:s[1]||(s[1]=c=>a("error")),negative:""},{default:n(()=>[l("Error")]),_:1}),i(u,{onClick:s[2]||(s[2]=c=>a("warning")),color:"yellow"},{default:n(()=>[l("Warning")]),_:1})]),_:1})}}},rE=`<template>
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
<\/script>`,uE={__name:"PositionDoc",setup(e){const{toast:t}=st(),a=o=>{t({position:o,message:"Look, I'm here !"})};return(o,s)=>{const u=$("SuiButton");return S(),C(D,{label:"Position",code:rE},{description:n(()=>[l(" A toast can appear at different positions on the screen. ")]),example:n(()=>[i(u,{onClick:s[0]||(s[0]=c=>a("top left"))},{default:n(()=>[l("Top Left")]),_:1}),i(u,{onClick:s[1]||(s[1]=c=>a("bottom right"))},{default:n(()=>[l("Bottom Right")]),_:1})]),_:1})}}},cE=B("br",null,null,-1),dE=`<template>
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
<\/script>`,pE={__name:"AttachedPosition",setup(e){const{toast:t}=st(),a=o=>{t({attached:o,title:"Watch out!",message:`I am a ${o} attached toast`})};return(o,s)=>{const u=$("SuiButton");return S(),C(D,{label:"Attached Position",code:dE},{description:n(()=>[l(" A toast can have an attached position which will show the toast over the whole width of the screen."),cE,l(" Just like notifications on mobile devices. ")]),example:n(()=>[i(u,{onClick:s[0]||(s[0]=c=>a("top"))},{default:n(()=>[l("Top")]),_:1}),i(u,{onClick:s[1]||(s[1]=c=>a("bottom"))},{default:n(()=>[l("Bottom")]),_:1})]),_:1})}}},mE=`<template>
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
<\/script>`,fE={__name:"DirectionDoc",setup(e){const{toast:t}=st(),a=()=>{t({horizontal:!0,position:"top left",title:"Watch out!",message:"Next one will open to the right"})};return(o,s)=>{const u=$("SuiButton");return S(),C(D,{label:"Direction",code:mE},{description:n(()=>[l(" Toasts can stack horizontal ")]),example:n(()=>[i(u,{onClick:a},{default:n(()=>[l("Show")]),_:1})]),_:1})}}},gE=`<template>
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
<\/script>`,hE={__name:"CenterAligned",setup(e){const{toast:t}=st(),a=()=>{t({centered:!0,title:"Veronika has joined",message:"Welcome to the Fomantic-UI community!"})};return(o,s)=>{const u=$("SuiButton");return S(),C(D,{label:"Center Aligned",code:gE},{description:n(()=>[l(" The toasts content can be shown center aligned. ")]),example:n(()=>[i(u,{onClick:a},{default:n(()=>[l("Show")]),_:1})]),_:1})}}},_E=`<template>
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
<\/script>`,vE={__name:"DurationDoc",setup(e){const{toast:t}=st(),a=o=>{t({displayTime:o,message:o===0?"I'll stay here until you click on me !":"You will see me for 5 seconds."})};return(o,s)=>{const u=$("SuiButton");return S(),C(D,{label:"Duration",code:_E},{description:n(()=>[l(" You can choose how long a toast should be displayed. ")]),example:n(()=>[i(u,{onClick:s[0]||(s[0]=c=>a(5e3))},{default:n(()=>[l("5 seconds")]),_:1}),i(u,{onClick:s[1]||(s[1]=c=>a(0))},{default:n(()=>[l("Stay")]),_:1})]),_:1})}}},bE=`<template>
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
<\/script>`,SE={__name:"MessageStyleDoc",setup(e){const{toast:t}=st(),a=()=>{t({messageStyle:!0,message:"I got my style from the message class",color:"purple"})};return(o,s)=>{const u=$("SuiButton");return S(),C(D,{label:"Use Message Style",code:bE},{description:n(()=>[l(" You can use all of the styles and colors from the message component. ")]),example:n(()=>[i(u,{onClick:a},{default:n(()=>[l("Show")]),_:1})]),_:1})}}},yE=`<template>
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
<\/script>`,wE={__name:"IncreasingProgressBarDoc",setup(e){const{toast:t}=st(),a=()=>{t({title:"LOOK",message:"See, how long i will last",showProgress:"top",showProgressUp:!0})};return(o,s)=>{const u=$("SuiButton");return S(),C(D,{label:"Increasing Progress Bar",code:yE},{description:n(()=>[l(" You can use the progress bar to show the progress of a task. ")]),example:n(()=>[i(u,{onClick:a},{default:n(()=>[l("Show")]),_:1})]),_:1})}}},CE=`<template>
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
<\/script>`,xE={__name:"ColorVariantsDoc",setup(e){const{toast:t}=st(),a=j(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],s=()=>{t({color:o[a.value],message:"I am a colorful toast",showProgress:"bottom"}),a.value=(a.value+1)%o.length};return(u,c)=>{const p=$("SuiButton");return S(),C(D,{label:"Color Variants",code:CE},{description:n(()=>[l(" You can use all of the usual color names. ")]),example:n(()=>[i(p,{onClick:s},{default:n(()=>[l("Show")]),_:1})]),_:1})}}},AE={__name:"InvertedColorsDoc",setup(e){const{toast:t}=st(),a=j(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],s=()=>{t({color:o[a.value],inverted:!0,message:"I am an inverted colorful toast",showProgress:"bottom"}),a.value=(a.value+1)%o.length};return(u,c)=>{const p=$("SuiButton");return S(),C(D,{label:"Inverted Colors",code:u.code},{description:n(()=>[l(" Same as above, just add inverted to the class definition. ")]),example:n(()=>[i(p,{onClick:s},{default:n(()=>[l("Show")]),_:1})]),_:1},8,["code"])}}},kE=`<template>
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
<\/script>`,BE={__name:"ActionGeneralDoc",setup(e){const{toast:t}=st(),a=()=>{t({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[ee(z,{color:"green",onclick:()=>{t({message:'You clicked "yes", toast closes by default'}),o()}},()=>[ee(W,{name:"check"}),"Yes"]),ee(z,{color:"red",icon:!0},()=>[ee(W,{name:"ban"})]),ee(z,{color:"blue",onclick:()=>t({message:"Returning false from the click handler avoids closing the toast"})},()=>"?")]})};return(o,s)=>(S(),C(D,{label:"General",code:kE},{description:n(()=>[l(" Define click actions to your toast by providing a text and/or icon, optional class and click handler. ")]),example:n(()=>[i(r(z),{onClick:a},{default:n(()=>[l("Show")]),_:1})]),_:1}))}},$E=`<template>
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
<\/script>`,TE={__name:"ActionBasicDoc",setup(e){const{toast:t}=st(),a=()=>{t({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[ee(z,{color:"yellow",onclick:()=>{t({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really")],actionsProps:{basic:!0,aligned:"left"}})};return(o,s)=>(S(),C(D,{label:"Basic",code:$E},{description:n(()=>[l(" The classActions setting provides you a way to adjust the overall appearance of the action buttons. Using basic class does not lighten the actions background. left aligns the buttons to the left. ")]),example:n(()=>[i(r(z),{onClick:a},{default:n(()=>[l("Show")]),_:1})]),_:1}))}},LE=`<template>
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
<\/script>`,DE={__name:"ActionAttachedDoc",setup(e){const{toast:t}=st(),a=()=>{t({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[ee(z,{color:"green",onclick:()=>{t({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),ee(z,{color:"red",onclick:()=>{t({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"top"}})};return(o,s)=>(S(),C(D,{label:"Attached",code:LE},{description:n(()=>[l(" Using attached converts your actions into a Button group. Also add top to display the actions attached to the top of the toast. ")]),example:n(()=>[i(r(z),{onClick:a},{default:n(()=>[l("Show")]),_:1})]),_:1}))}},IE=`<template>
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
<\/script>`,EE={__name:"ActionVerticalDoc",setup(e){const{toast:t}=st(),a=()=>{t({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[ee(z,{color:"green",onclick:()=>{t({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),ee(z,{color:"red",onclick:()=>{t({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{vertical:!0}})};return(o,s)=>(S(),C(D,{label:"Vertical",code:IE},{description:n(()=>[l(" You can use vertical to display your actions to the right of the toast. ")]),example:n(()=>[i(r(z),{onClick:a},{default:n(()=>[l("Show")]),_:1})]),_:1}))}},RE=B("br",null,null,-1),zE=`<template>
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
<\/script>`,PE={__name:"ActionVerticalAttachedDoc",setup(e){const{toast:t}=st(),a=()=>{t({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[ee(z,{color:"green",onclick:()=>{t({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),ee(z,{color:"red",onclick:()=>{t({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"left",vertical:!0}})};return(o,s)=>(S(),C(D,{label:"Vertical Attached",code:zE},{description:n(()=>[l(" Vertical actions can also be displayed as button groups using vertical attached."),RE,l(" Vertical attached actions also support left. ")]),example:n(()=>[i(r(z),{onClick:a},{default:n(()=>[l("Show")]),_:1})]),_:1}))}},FE={__name:"Toast",setup(e){const t=[{id:"minimal",label:"Minimal",category:"Types",component:tE},{id:"titled",label:"Titled",category:"Types",component:nE},{id:"progress-bar",label:"Progress Bar",category:"Types",component:oE},{id:"toast-type",label:"Toast Type",category:"Variations",component:sE},{id:"position",label:"Position",category:"Variations",component:uE},{id:"attached-position",label:"Attached Position",category:"Variations",component:pE},{id:"direction",label:"Direction",category:"Variations",component:fE},{id:"center-aligned",label:"Center Aligned",category:"Variations",component:hE},{id:"duration",label:"Duration",category:"Variations",component:vE},{id:"message-style",label:"Use Message Style",category:"Variations",component:SE},{id:"increasing-progress-bar",label:"Increasing Progress Bar",category:"Variations",component:wE},{id:"color-variants",label:"Color Variants",category:"Variations",component:xE},{id:"inverted-colors",label:"Inverted Colors",category:"Variations",component:AE},{id:"general",label:"General",category:"Actions",component:BE},{id:"action-basic",label:"Basic",category:"Actions",component:TE},{id:"action-attached",label:"Attached",category:"Actions",component:DE},{id:"action-vertical",label:"Vertical",category:"Actions",component:EE},{id:"action-vertical-attached",label:"Vertical Attached",category:"Actions",component:PE}];return(a,o)=>(S(),C(lt,{title:"Toast",description:"A toast allows users to be notified of an event","component-docs":t}))}},VE=[{path:"/",component:Bh,children:[{path:"/",component:t_},{path:"elements/button",component:Tw},{path:"elements/container",component:Ow},{path:"elements/divider",component:pC},{path:"elements/emoji",component:CC},{path:"elements/flag",component:$C},{path:"elements/header",component:l0},{path:"elements/icon",component:V0},{path:"elements/image",component:Ax},{path:"elements/input",component:Xx},{path:"elements/label",component:lk},{path:"elements/list",component:Ek},{path:"elements/loader",component:iB},{path:"elements/rail",component:lB},{path:"elements/reveal",component:bB},{path:"elements/segment",component:jT},{path:"elements/step",component:JT},{path:"collections/breadcrumb",component:fL},{path:"collections/form",component:EL},{path:"collections/grid",component:HL},{path:"collections/menu",component:()=>jt(()=>import("./Menu-QC0h0-VP.js"),__vite__mapDeps([]))},{path:"collections/message",component:()=>jt(()=>import("./Message-2wyb7UYV.js"),__vite__mapDeps([]))},{path:"collections/table",component:()=>jt(()=>import("./Table-cxo-K8lm.js"),__vite__mapDeps([]))},{path:"views/advertisement",component:()=>jt(()=>import("./Advertisement-6aevvAX8.js"),__vite__mapDeps([]))},{path:"views/card",component:()=>jt(()=>import("./Card-OYLFpgVq.js"),__vite__mapDeps([]))},{path:"views/comment",component:()=>jt(()=>import("./Comment-1Wo8FXSj.js"),__vite__mapDeps([]))},{path:"views/feed",component:()=>jt(()=>import("./Feed-JbfglK87.js"),__vite__mapDeps([]))},{path:"views/item",component:()=>jt(()=>import("./Item-niPl7lDz.js"),__vite__mapDeps([]))},{path:"views/statistic",component:()=>jt(()=>import("./Statistic-IMQesAZs.js"),__vite__mapDeps([]))},{path:"modules/accordion",component:uD},{path:"modules/calendar",component:pD},{path:"modules/checkbox",component:wD},{path:"modules/dimmer",component:AD},{path:"modules/dropdown",component:$D},{path:"modules/embed",component:DD},{path:"modules/modal",component:MD},{path:"modules/popup",component:UD},{path:"modules/progress",component:()=>jt(()=>import("./Progress-8KPjivsO.js"),__vite__mapDeps([]))},{path:"modules/rating",component:NI},{path:"modules/sidebar",component:YI},{path:"modules/slider",component:XI},{path:"modules/tab",component:ZI},{path:"modules/toast",component:FE}]}],ME=lh({history:yg("/vue-fomantic-ui/"),routes:VE,scrollBehavior(e,t,a){var o;e.hash||(o=document.querySelector(".article"))==null||o.scrollTo(0,0)}});(function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",a={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},o={bash:a,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:o},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:a}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:o},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:o.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:o.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},a.inside=e.languages.bash;for(var s=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],u=o.variable[1].inside,c=0;c<s.length;c++)u[s[c]]=e.languages.bash[s[c]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);const Bs=Rc(tg);Bs.use(ME);Bs.use(ay);Bs.mount("#app");export{G_ as $,we as A,Fe as B,O as C,lt as D,Ao as E,ld as F,Qe as G,Wb as H,s_ as I,Te as J,P_ as K,sd as L,V_ as M,ft as N,fv as O,Qv as P,M_ as Q,bv as R,wv as S,Gi as T,ba as U,ud as V,Bt as W,K_ as X,Za as Y,z_ as Z,D as _,l as a,Vd as a0,pa as a1,vk as a2,Zx as a3,Il as a4,Ra as a5,za as a6,Hv as a7,Pv as a8,an as a9,Fv as aa,Eb as ab,kl as ac,Bl as ad,Rb as ae,Al as af,i as b,C as c,F as d,B as e,Oe as f,ei as g,ee as h,q as i,z as j,W as k,hs as l,it as m,Mt as n,S as o,nd as p,Jb as q,j as r,fe as s,le as t,r as u,Ze as v,n as w,$e as x,ss as y,be as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

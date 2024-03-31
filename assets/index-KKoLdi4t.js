(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(l){if(l.ep)return;l.ep=!0;const u=a(l);fetch(l.href,u)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function no(e,t){const a=new Set(e.split(","));return t?o=>a.has(o.toLowerCase()):o=>a.has(o)}const Ne={},un=[],vt=()=>{},Od=()=>!1,pa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),El=e=>e.startsWith("onUpdate:"),Xe=Object.assign,Rl=(e,t)=>{const a=e.indexOf(t);a>-1&&e.splice(a,1)},Nd=Object.prototype.hasOwnProperty,Re=(e,t)=>Nd.call(e,t),ge=Array.isArray,cn=e=>Bn(e)==="[object Map]",Xi=e=>Bn(e)==="[object Set]",Ir=e=>Bn(e)==="[object Date]",qd=e=>Bn(e)==="[object RegExp]",Ce=e=>typeof e=="function",Je=e=>typeof e=="string",xi=e=>typeof e=="symbol",Ge=e=>e!==null&&typeof e=="object",Pl=e=>(Ge(e)||Ce(e))&&Ce(e.then)&&Ce(e.catch),js=Object.prototype.toString,Bn=e=>js.call(e),Gd=e=>Bn(e).slice(8,-1),Us=e=>Bn(e)==="[object Object]",zl=e=>Je(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Un=no(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ao=e=>{const t=Object.create(null);return a=>t[a]||(t[a]=e(a))},jd=/-(\w)/g,ht=ao(e=>e.replace(jd,(t,a)=>a?a.toUpperCase():"")),Ud=/\B([A-Z])/g,Bt=ao(e=>e.replace(Ud,"-$1").toLowerCase()),fa=ao(e=>e.charAt(0).toUpperCase()+e.slice(1)),Yn=ao(e=>e?`on${fa(e)}`:""),qt=(e,t)=>!Object.is(e,t),dn=(e,t)=>{for(let a=0;a<e.length;a++)e[a](t)},Ha=(e,t,a)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:a})},ta=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Oa=e=>{const t=Je(e)?Number(e):NaN;return isNaN(t)?e:t};let Dr;const Ys=()=>Dr||(Dr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Yd="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",Wd=no(Yd);function $n(e){if(ge(e)){const t={};for(let a=0;a<e.length;a++){const o=e[a],l=Je(o)?Qd(o):$n(o);if(l)for(const u in l)t[u]=l[u]}return t}else if(Je(e)||Ge(e))return e}const Kd=/;(?![^(]*\))/g,Xd=/:([^]+)/,Jd=/\/\*[^]*?\*\//g;function Qd(e){const t={};return e.replace(Jd,"").split(Kd).forEach(a=>{if(a){const o=a.split(Xd);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function ga(e){let t="";if(Je(e))t=e;else if(ge(e))for(let a=0;a<e.length;a++){const o=ga(e[a]);o&&(t+=o+" ")}else if(Ge(e))for(const a in e)e[a]&&(t+=a+" ");return t.trim()}function Zd(e){if(!e)return null;let{class:t,style:a}=e;return t&&!Je(t)&&(e.class=ga(t)),a&&(e.style=$n(a)),e}const em="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tm=no(em);function Ws(e){return!!e||e===""}function im(e,t){if(e.length!==t.length)return!1;let a=!0;for(let o=0;a&&o<e.length;o++)a=ai(e[o],t[o]);return a}function ai(e,t){if(e===t)return!0;let a=Ir(e),o=Ir(t);if(a||o)return a&&o?e.getTime()===t.getTime():!1;if(a=xi(e),o=xi(t),a||o)return e===t;if(a=ge(e),o=ge(t),a||o)return a&&o?im(e,t):!1;if(a=Ge(e),o=Ge(t),a||o){if(!a||!o)return!1;const l=Object.keys(e).length,u=Object.keys(t).length;if(l!==u)return!1;for(const c in e){const m=e.hasOwnProperty(c),d=t.hasOwnProperty(c);if(m&&!d||!m&&d||!ai(e[c],t[c]))return!1}}return String(e)===String(t)}function oo(e,t){return e.findIndex(a=>ai(a,t))}const $e=e=>Je(e)?e:e==null?"":ge(e)||Ge(e)&&(e.toString===js||!Ce(e.toString))?JSON.stringify(e,Ks,2):String(e),Ks=(e,t)=>t&&t.__v_isRef?Ks(e,t.value):cn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((a,[o,l],u)=>(a[Bo(o,u)+" =>"]=l,a),{})}:Xi(t)?{[`Set(${t.size})`]:[...t.values()].map(a=>Bo(a))}:xi(t)?Bo(t):Ge(t)&&!ge(t)&&!Us(t)?String(t):t,Bo=(e,t="")=>{var a;return xi(e)?`Symbol(${(a=e.description)!=null?a:t})`:e};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xt;class Fl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xt,!t&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const a=xt;try{return xt=this,t()}finally{xt=a}}}on(){xt=this}off(){xt=this.parent}stop(t){if(this._active){let a,o;for(a=0,o=this.effects.length;a<o;a++)this.effects[a].stop();for(a=0,o=this.cleanups.length;a<o;a++)this.cleanups[a]();if(this.scopes)for(a=0,o=this.scopes.length;a<o;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!t){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this._active=!1}}}function nm(e){return new Fl(e)}function Xs(e,t=xt){t&&t.active&&t.effects.push(e)}function Vl(){return xt}function Js(e){xt&&xt.cleanups.push(e)}let Fi;class Sn{constructor(t,a,o,l){this.fn=t,this.trigger=a,this.scheduler=o,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Xs(this,l)}get dirty(){if(this._dirtyLevel===1){Ji();for(let t=0;t<this._depsLength;t++){const a=this.deps[t];if(a.computed&&(am(a.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),Qi()}return this._dirtyLevel>=2}set dirty(t){this._dirtyLevel=t?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=yi,a=Fi;try{return yi=!0,Fi=this,this._runnings++,Er(this),this.fn()}finally{Rr(this),this._runnings--,Fi=a,yi=t}}stop(){var t;this.active&&(Er(this),Rr(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function am(e){return e.value}function Er(e){e._trackId++,e._depsLength=0}function Rr(e){if(e.deps&&e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Qs(e.deps[t],e);e.deps.length=e._depsLength}}function Qs(e,t){const a=e.get(t);a!==void 0&&t._trackId!==a&&(e.delete(t),e.size===0&&e.cleanup())}function om(e,t){e.effect instanceof Sn&&(e=e.effect.fn);const a=new Sn(e,vt,()=>{a.dirty&&a.run()});t&&(Xe(a,t),t.scope&&Xs(a,t.scope)),(!t||!t.lazy)&&a.run();const o=a.run.bind(a);return o.effect=a,o}function lm(e){e.effect.stop()}let yi=!0,Xo=0;const Zs=[];function Ji(){Zs.push(yi),yi=!1}function Qi(){const e=Zs.pop();yi=e===void 0?!0:e}function Ml(){Xo++}function Hl(){for(Xo--;!Xo&&Jo.length;)Jo.shift()()}function eu(e,t,a){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const o=e.deps[e._depsLength];o!==t?(o&&Qs(o,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Jo=[];function tu(e,t,a){Ml();for(const o of e.keys())if(o._dirtyLevel<t&&e.get(o)===o._trackId){const l=o._dirtyLevel;o._dirtyLevel=t,l===0&&(o._shouldSchedule=!0,o.trigger())}iu(e),Hl()}function iu(e){for(const t of e.keys())t.scheduler&&t._shouldSchedule&&(!t._runnings||t.allowRecurse)&&e.get(t)===t._trackId&&(t._shouldSchedule=!1,Jo.push(t.scheduler))}const nu=(e,t)=>{const a=new Map;return a.cleanup=e,a.computed=t,a},Na=new WeakMap,Vi=Symbol(""),Qo=Symbol("");function yt(e,t,a){if(yi&&Fi){let o=Na.get(e);o||Na.set(e,o=new Map);let l=o.get(a);l||o.set(a,l=nu(()=>o.delete(a))),eu(Fi,l)}}function ii(e,t,a,o,l,u){const c=Na.get(e);if(!c)return;let m=[];if(t==="clear")m=[...c.values()];else if(a==="length"&&ge(e)){const d=Number(o);c.forEach((p,f)=>{(f==="length"||!xi(f)&&f>=d)&&m.push(p)})}else switch(a!==void 0&&m.push(c.get(a)),t){case"add":ge(e)?zl(a)&&m.push(c.get("length")):(m.push(c.get(Vi)),cn(e)&&m.push(c.get(Qo)));break;case"delete":ge(e)||(m.push(c.get(Vi)),cn(e)&&m.push(c.get(Qo)));break;case"set":cn(e)&&m.push(c.get(Vi));break}Ml();for(const d of m)d&&tu(d,2);Hl()}function rm(e,t){var a;return(a=Na.get(e))==null?void 0:a.get(t)}const sm=no("__proto__,__v_isRef,__isVue"),au=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(xi)),Pr=um();function um(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...a){const o=Ee(this);for(let u=0,c=this.length;u<c;u++)yt(o,"get",u+"");const l=o[t](...a);return l===-1||l===!1?o[t](...a.map(Ee)):l}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...a){Ji(),Ml();const o=Ee(this)[t].apply(this,a);return Hl(),Qi(),o}}),e}function cm(e){const t=Ee(this);return yt(t,"has",e),t.hasOwnProperty(e)}class ou{constructor(t=!1,a=!1){this._isReadonly=t,this._shallow=a}get(t,a,o){const l=this._isReadonly,u=this._shallow;if(a==="__v_isReactive")return!l;if(a==="__v_isReadonly")return l;if(a==="__v_isShallow")return u;if(a==="__v_raw")return o===(l?u?du:cu:u?uu:su).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const c=ge(t);if(!l){if(c&&Re(Pr,a))return Reflect.get(Pr,a,o);if(a==="hasOwnProperty")return cm}const m=Reflect.get(t,a,o);return(xi(a)?au.has(a):sm(a))||(l||yt(t,"get",a),u)?m:dt(m)?c&&zl(a)?m:m.value:Ge(m)?l?Nl(m):li(m):m}}class lu extends ou{constructor(t=!1){super(!1,t)}set(t,a,o,l){let u=t[a];if(!this._shallow){const d=qi(u);if(!ia(o)&&!qi(o)&&(u=Ee(u),o=Ee(o)),!ge(t)&&dt(u)&&!dt(o))return d?!1:(u.value=o,!0)}const c=ge(t)&&zl(a)?Number(a)<t.length:Re(t,a),m=Reflect.set(t,a,o,l);return t===Ee(l)&&(c?qt(o,u)&&ii(t,"set",a,o):ii(t,"add",a,o)),m}deleteProperty(t,a){const o=Re(t,a);t[a];const l=Reflect.deleteProperty(t,a);return l&&o&&ii(t,"delete",a,void 0),l}has(t,a){const o=Reflect.has(t,a);return(!xi(a)||!au.has(a))&&yt(t,"has",a),o}ownKeys(t){return yt(t,"iterate",ge(t)?"length":Vi),Reflect.ownKeys(t)}}class ru extends ou{constructor(t=!1){super(!0,t)}set(t,a){return!0}deleteProperty(t,a){return!0}}const dm=new lu,mm=new ru,pm=new lu(!0),fm=new ru(!0),Ol=e=>e,lo=e=>Reflect.getPrototypeOf(e);function Sa(e,t,a=!1,o=!1){e=e.__v_raw;const l=Ee(e),u=Ee(t);a||(qt(t,u)&&yt(l,"get",t),yt(l,"get",u));const{has:c}=lo(l),m=o?Ol:a?jl:na;if(c.call(l,t))return m(e.get(t));if(c.call(l,u))return m(e.get(u));e!==l&&e.get(t)}function ya(e,t=!1){const a=this.__v_raw,o=Ee(a),l=Ee(e);return t||(qt(e,l)&&yt(o,"has",e),yt(o,"has",l)),e===l?a.has(e):a.has(e)||a.has(l)}function wa(e,t=!1){return e=e.__v_raw,!t&&yt(Ee(e),"iterate",Vi),Reflect.get(e,"size",e)}function zr(e){e=Ee(e);const t=Ee(this);return lo(t).has.call(t,e)||(t.add(e),ii(t,"add",e,e)),this}function Fr(e,t){t=Ee(t);const a=Ee(this),{has:o,get:l}=lo(a);let u=o.call(a,e);u||(e=Ee(e),u=o.call(a,e));const c=l.call(a,e);return a.set(e,t),u?qt(t,c)&&ii(a,"set",e,t):ii(a,"add",e,t),this}function Vr(e){const t=Ee(this),{has:a,get:o}=lo(t);let l=a.call(t,e);l||(e=Ee(e),l=a.call(t,e)),o&&o.call(t,e);const u=t.delete(e);return l&&ii(t,"delete",e,void 0),u}function Mr(){const e=Ee(this),t=e.size!==0,a=e.clear();return t&&ii(e,"clear",void 0,void 0),a}function Ca(e,t){return function(o,l){const u=this,c=u.__v_raw,m=Ee(c),d=t?Ol:e?jl:na;return!e&&yt(m,"iterate",Vi),c.forEach((p,f)=>o.call(l,d(p),d(f),u))}}function xa(e,t,a){return function(...o){const l=this.__v_raw,u=Ee(l),c=cn(u),m=e==="entries"||e===Symbol.iterator&&c,d=e==="keys"&&c,p=l[e](...o),f=a?Ol:t?jl:na;return!t&&yt(u,"iterate",d?Qo:Vi),{next(){const{value:h,done:_}=p.next();return _?{value:h,done:_}:{value:m?[f(h[0]),f(h[1])]:f(h),done:_}},[Symbol.iterator](){return this}}}}function di(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function gm(){const e={get(u){return Sa(this,u)},get size(){return wa(this)},has:ya,add:zr,set:Fr,delete:Vr,clear:Mr,forEach:Ca(!1,!1)},t={get(u){return Sa(this,u,!1,!0)},get size(){return wa(this)},has:ya,add:zr,set:Fr,delete:Vr,clear:Mr,forEach:Ca(!1,!0)},a={get(u){return Sa(this,u,!0)},get size(){return wa(this,!0)},has(u){return ya.call(this,u,!0)},add:di("add"),set:di("set"),delete:di("delete"),clear:di("clear"),forEach:Ca(!0,!1)},o={get(u){return Sa(this,u,!0,!0)},get size(){return wa(this,!0)},has(u){return ya.call(this,u,!0)},add:di("add"),set:di("set"),delete:di("delete"),clear:di("clear"),forEach:Ca(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(u=>{e[u]=xa(u,!1,!1),a[u]=xa(u,!0,!1),t[u]=xa(u,!1,!0),o[u]=xa(u,!0,!0)}),[e,a,t,o]}const[hm,_m,vm,bm]=gm();function ro(e,t){const a=t?e?bm:vm:e?_m:hm;return(o,l,u)=>l==="__v_isReactive"?!e:l==="__v_isReadonly"?e:l==="__v_raw"?o:Reflect.get(Re(a,l)&&l in o?a:o,l,u)}const Sm={get:ro(!1,!1)},ym={get:ro(!1,!0)},wm={get:ro(!0,!1)},Cm={get:ro(!0,!0)},su=new WeakMap,uu=new WeakMap,cu=new WeakMap,du=new WeakMap;function xm(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Am(e){return e.__v_skip||!Object.isExtensible(e)?0:xm(Gd(e))}function li(e){return qi(e)?e:so(e,!1,dm,Sm,su)}function mu(e){return so(e,!1,pm,ym,uu)}function Nl(e){return so(e,!0,mm,wm,cu)}function km(e){return so(e,!0,fm,Cm,du)}function so(e,t,a,o,l){if(!Ge(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const u=l.get(e);if(u)return u;const c=Am(e);if(c===0)return e;const m=new Proxy(e,c===2?o:a);return l.set(e,m),m}function Mi(e){return qi(e)?Mi(e.__v_raw):!!(e&&e.__v_isReactive)}function qi(e){return!!(e&&e.__v_isReadonly)}function ia(e){return!!(e&&e.__v_isShallow)}function ql(e){return Mi(e)||qi(e)}function Ee(e){const t=e&&e.__v_raw;return t?Ee(t):e}function Gl(e){return Ha(e,"__v_skip",!0),e}const na=e=>Ge(e)?li(e):e,jl=e=>Ge(e)?Nl(e):e;class pu{constructor(t,a,o,l){this._setter=a,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Sn(()=>t(this._value),()=>mn(this,1),()=>this.dep&&iu(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=o}get value(){const t=Ee(this);return(!t._cacheable||t.effect.dirty)&&qt(t._value,t._value=t.effect.run())&&mn(t,2),Ul(t),t.effect._dirtyLevel>=1&&mn(t,1),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Bm(e,t,a=!1){let o,l;const u=Ce(e);return u?(o=e,l=vt):(o=e.get,l=e.set),new pu(o,l,u||!l,a)}function Ul(e){yi&&Fi&&(e=Ee(e),eu(Fi,e.dep||(e.dep=nu(()=>e.dep=void 0,e instanceof pu?e:void 0))))}function mn(e,t=2,a){e=Ee(e);const o=e.dep;o&&tu(o,t)}function dt(e){return!!(e&&e.__v_isRef===!0)}function G(e){return gu(e,!1)}function fu(e){return gu(e,!0)}function gu(e,t){return dt(e)?e:new $m(e,t)}class $m{constructor(t,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?t:Ee(t),this._value=a?t:na(t)}get value(){return Ul(this),this._value}set value(t){const a=this.__v_isShallow||ia(t)||qi(t);t=a?t:Ee(t),qt(t,this._rawValue)&&(this._rawValue=t,this._value=a?t:na(t),mn(this,2))}}function Tm(e){mn(e,2)}function s(e){return dt(e)?e.value:e}function Lm(e){return Ce(e)?e():s(e)}const Im={get:(e,t,a)=>s(Reflect.get(e,t,a)),set:(e,t,a,o)=>{const l=e[t];return dt(l)&&!dt(a)?(l.value=a,!0):Reflect.set(e,t,a,o)}};function Yl(e){return Mi(e)?e:new Proxy(e,Im)}class Dm{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:a,set:o}=t(()=>Ul(this),()=>mn(this));this._get=a,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function hu(e){return new Dm(e)}function Em(e){const t=ge(e)?new Array(e.length):{};for(const a in e)t[a]=_u(e,a);return t}class Rm{constructor(t,a,o){this._object=t,this._key=a,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return rm(Ee(this._object),this._key)}}class Pm{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Zo(e,t,a){return dt(e)?e:Ce(e)?new Pm(e):Ge(e)&&arguments.length>1?_u(e,t,a):G(e)}function _u(e,t,a){const o=e[t];return dt(o)?o:new Rm(e,t,a)}const zm={GET:"get",HAS:"has",ITERATE:"iterate"},Fm={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vm(e,t){}const Mm={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},Hm={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function ni(e,t,a,o){let l;try{l=o?e(...o):e()}catch(u){Zi(u,t,a)}return l}function Lt(e,t,a,o){if(Ce(e)){const u=ni(e,t,a,o);return u&&Pl(u)&&u.catch(c=>{Zi(c,t,a)}),u}const l=[];for(let u=0;u<e.length;u++)l.push(Lt(e[u],t,a,o));return l}function Zi(e,t,a,o=!0){const l=t?t.vnode:null;if(t){let u=t.parent;const c=t.proxy,m=`https://vuejs.org/error-reference/#runtime-${a}`;for(;u;){const p=u.ec;if(p){for(let f=0;f<p.length;f++)if(p[f](e,c,m)===!1)return}u=u.parent}const d=t.appContext.config.errorHandler;if(d){ni(d,null,10,[e,c,m]);return}}Om(e,a,l,o)}function Om(e,t,a,o=!0){console.error(e)}let aa=!1,el=!1;const mt=[];let Kt=0;const pn=[];let hi=null,Ri=0;const vu=Promise.resolve();let Wl=null;function en(e){const t=Wl||vu;return e?t.then(this?e.bind(this):e):t}function Nm(e){let t=Kt+1,a=mt.length;for(;t<a;){const o=t+a>>>1,l=mt[o],u=oa(l);u<e||u===e&&l.pre?t=o+1:a=o}return t}function uo(e){(!mt.length||!mt.includes(e,aa&&e.allowRecurse?Kt+1:Kt))&&(e.id==null?mt.push(e):mt.splice(Nm(e.id),0,e),bu())}function bu(){!aa&&!el&&(el=!0,Wl=vu.then(Su))}function qm(e){const t=mt.indexOf(e);t>Kt&&mt.splice(t,1)}function qa(e){ge(e)?pn.push(...e):(!hi||!hi.includes(e,e.allowRecurse?Ri+1:Ri))&&pn.push(e),bu()}function Hr(e,t,a=aa?Kt+1:0){for(;a<mt.length;a++){const o=mt[a];if(o&&o.pre){if(e&&o.id!==e.uid)continue;mt.splice(a,1),a--,o()}}}function Ga(e){if(pn.length){const t=[...new Set(pn)].sort((a,o)=>oa(a)-oa(o));if(pn.length=0,hi){hi.push(...t);return}for(hi=t,Ri=0;Ri<hi.length;Ri++)hi[Ri]();hi=null,Ri=0}}const oa=e=>e.id==null?1/0:e.id,Gm=(e,t)=>{const a=oa(e)-oa(t);if(a===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return a};function Su(e){el=!1,aa=!0,mt.sort(Gm);try{for(Kt=0;Kt<mt.length;Kt++){const t=mt[Kt];t&&t.active!==!1&&ni(t,null,14)}}finally{Kt=0,mt.length=0,Ga(),aa=!1,Wl=null,(mt.length||pn.length)&&Su()}}let ln,Aa=[];function yu(e,t){var a,o;ln=e,ln?(ln.enabled=!0,Aa.forEach(({event:l,args:u})=>ln.emit(l,...u)),Aa=[]):typeof window<"u"&&window.HTMLElement&&!((o=(a=window.navigator)==null?void 0:a.userAgent)!=null&&o.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(u=>{yu(u,t)}),setTimeout(()=>{ln||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Aa=[])},3e3)):Aa=[]}function jm(e,t,...a){if(e.isUnmounted)return;const o=e.vnode.props||Ne;let l=a;const u=t.startsWith("update:"),c=u&&t.slice(7);if(c&&c in o){const f=`${c==="modelValue"?"model":c}Modifiers`,{number:h,trim:_}=o[f]||Ne;_&&(l=a.map(A=>Je(A)?A.trim():A)),h&&(l=a.map(ta))}let m,d=o[m=Yn(t)]||o[m=Yn(ht(t))];!d&&u&&(d=o[m=Yn(Bt(t))]),d&&Lt(d,e,6,l);const p=o[m+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[m])return;e.emitted[m]=!0,Lt(p,e,6,l)}}function wu(e,t,a=!1){const o=t.emitsCache,l=o.get(e);if(l!==void 0)return l;const u=e.emits;let c={},m=!1;if(!Ce(e)){const d=p=>{const f=wu(p,t,!0);f&&(m=!0,Xe(c,f))};!a&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}return!u&&!m?(Ge(e)&&o.set(e,null),null):(ge(u)?u.forEach(d=>c[d]=null):Xe(c,u),Ge(e)&&o.set(e,c),c)}function co(e,t){return!e||!pa(t)?!1:(t=t.slice(2).replace(/Once$/,""),Re(e,t[0].toLowerCase()+t.slice(1))||Re(e,Bt(t))||Re(e,t))}let tt=null,mo=null;function la(e){const t=tt;return tt=e,mo=e&&e.type.__scopeId||null,t}function Cu(e){mo=e}function xu(){mo=null}const Um=e=>n;function n(e,t=tt,a){if(!t||e._n)return e;const o=(...l)=>{o._d&&ul(-1);const u=la(t);let c;try{c=e(...l)}finally{la(u),o._d&&ul(1)}return c};return o._n=!0,o._c=!0,o._d=!0,o}function za(e){const{type:t,vnode:a,proxy:o,withProxy:l,props:u,propsOptions:[c],slots:m,attrs:d,emit:p,render:f,renderCache:h,data:_,setupState:A,ctx:w,inheritAttrs:B}=e;let L,R;const g=la(e);try{if(a.shapeFlag&4){const y=l||o,x=y;L=At(f.call(x,y,h,u,A,_,w)),R=d}else{const y=t;L=At(y.length>1?y(u,{attrs:d,slots:m,emit:p}):y(u,null)),R=t.props?d:Wm(d)}}catch(y){Xn.length=0,Zi(y,e,1),L=i(pt)}let b=L;if(R&&B!==!1){const y=Object.keys(R),{shapeFlag:x}=b;y.length&&x&7&&(c&&y.some(El)&&(R=Km(R,c)),b=Xt(b,R))}return a.dirs&&(b=Xt(b),b.dirs=b.dirs?b.dirs.concat(a.dirs):a.dirs),a.transition&&(b.transition=a.transition),L=b,la(g),L}function Ym(e,t=!0){let a;for(let o=0;o<e.length;o++){const l=e[o];if(wt(l)){if(l.type!==pt||l.children==="v-if"){if(a)return;a=l}}else return}return a}const Wm=e=>{let t;for(const a in e)(a==="class"||a==="style"||pa(a))&&((t||(t={}))[a]=e[a]);return t},Km=(e,t)=>{const a={};for(const o in e)(!El(o)||!(o.slice(9)in t))&&(a[o]=e[o]);return a};function Xm(e,t,a){const{props:o,children:l,component:u}=e,{props:c,children:m,patchFlag:d}=t,p=u.emitsOptions;if(t.dirs||t.transition)return!0;if(a&&d>=0){if(d&1024)return!0;if(d&16)return o?Or(o,c,p):!!c;if(d&8){const f=t.dynamicProps;for(let h=0;h<f.length;h++){const _=f[h];if(c[_]!==o[_]&&!co(p,_))return!0}}}else return(l||m)&&(!m||!m.$stable)?!0:o===c?!1:o?c?Or(o,c,p):!0:!!c;return!1}function Or(e,t,a){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let l=0;l<o.length;l++){const u=o[l];if(t[u]!==e[u]&&!co(a,u))return!0}return!1}function Kl({vnode:e,parent:t},a){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=t.vnode).el=a,t=t.parent;else break}}const Xl="components",Jm="directives";function T(e,t){return Jl(Xl,e,!0,t)||e}const Au=Symbol.for("v-ndc");function tl(e){return Je(e)?Jl(Xl,e,!1)||e:e||Au}function po(e){return Jl(Jm,e)}function Jl(e,t,a=!0,o=!1){const l=tt||nt;if(l){const u=l.type;if(e===Xl){const m=fl(u,!1);if(m&&(m===t||m===ht(t)||m===fa(ht(t))))return u}const c=Nr(l[e]||u[e],t)||Nr(l.appContext[e],t);return!c&&o?u:c}}function Nr(e,t){return e&&(e[t]||e[ht(t)]||e[fa(ht(t))])}const ku=e=>e.__isSuspense;let il=0;const Qm={name:"Suspense",__isSuspense:!0,process(e,t,a,o,l,u,c,m,d,p){if(e==null)ep(t,a,o,l,u,c,m,d,p);else{if(u&&u.deps>0){t.suspense=e.suspense;return}tp(e,t,a,o,l,c,m,d,p)}},hydrate:ip,create:Ql,normalize:np},Zm=Qm;function ra(e,t){const a=e.props&&e.props[t];Ce(a)&&a()}function ep(e,t,a,o,l,u,c,m,d){const{p,o:{createElement:f}}=d,h=f("div"),_=e.suspense=Ql(e,l,o,t,h,a,u,c,m,d);p(null,_.pendingBranch=e.ssContent,h,null,o,_,u,c),_.deps>0?(ra(e,"onPending"),ra(e,"onFallback"),p(null,e.ssFallback,t,a,o,null,u,c),fn(_,e.ssFallback)):_.resolve(!1,!0)}function tp(e,t,a,o,l,u,c,m,{p:d,um:p,o:{createElement:f}}){const h=t.suspense=e.suspense;h.vnode=t,t.el=e.el;const _=t.ssContent,A=t.ssFallback,{activeBranch:w,pendingBranch:B,isInFallback:L,isHydrating:R}=h;if(B)h.pendingBranch=_,Nt(_,B)?(d(B,_,h.hiddenContainer,null,l,h,u,c,m),h.deps<=0?h.resolve():L&&(R||(d(w,A,a,o,l,null,u,c,m),fn(h,A)))):(h.pendingId=il++,R?(h.isHydrating=!1,h.activeBranch=B):p(B,l,h),h.deps=0,h.effects.length=0,h.hiddenContainer=f("div"),L?(d(null,_,h.hiddenContainer,null,l,h,u,c,m),h.deps<=0?h.resolve():(d(w,A,a,o,l,null,u,c,m),fn(h,A))):w&&Nt(_,w)?(d(w,_,a,o,l,h,u,c,m),h.resolve(!0)):(d(null,_,h.hiddenContainer,null,l,h,u,c,m),h.deps<=0&&h.resolve()));else if(w&&Nt(_,w))d(w,_,a,o,l,h,u,c,m),fn(h,_);else if(ra(t,"onPending"),h.pendingBranch=_,_.shapeFlag&512?h.pendingId=_.component.suspenseId:h.pendingId=il++,d(null,_,h.hiddenContainer,null,l,h,u,c,m),h.deps<=0)h.resolve();else{const{timeout:g,pendingId:b}=h;g>0?setTimeout(()=>{h.pendingId===b&&h.fallback(A)},g):g===0&&h.fallback(A)}}function Ql(e,t,a,o,l,u,c,m,d,p,f=!1){const{p:h,m:_,um:A,n:w,o:{parentNode:B,remove:L}}=p;let R;const g=ap(e);g&&t!=null&&t.pendingBranch&&(R=t.pendingId,t.deps++);const b=e.props?Oa(e.props.timeout):void 0,y=u,x={vnode:e,parent:t,parentComponent:a,namespace:c,container:o,hiddenContainer:l,deps:0,pendingId:il++,timeout:typeof b=="number"?b:-1,activeBranch:null,pendingBranch:null,isInFallback:!f,isHydrating:f,isUnmounted:!1,effects:[],resolve(D=!1,V=!1){const{vnode:H,activeBranch:z,pendingBranch:j,pendingId:J,effects:Y,parentComponent:me,container:Ae}=x;let U=!1;x.isHydrating?x.isHydrating=!1:D||(U=z&&j.transition&&j.transition.mode==="out-in",U&&(z.transition.afterLeave=()=>{J===x.pendingId&&(_(j,Ae,u===y?w(z):u,0),qa(Y))}),z&&(B(z.el)!==x.hiddenContainer&&(u=w(z)),A(z,me,x,!0)),U||_(j,Ae,u,0)),fn(x,j),x.pendingBranch=null,x.isInFallback=!1;let K=x.parent,ue=!1;for(;K;){if(K.pendingBranch){K.effects.push(...Y),ue=!0;break}K=K.parent}!ue&&!U&&qa(Y),x.effects=[],g&&t&&t.pendingBranch&&R===t.pendingId&&(t.deps--,t.deps===0&&!V&&t.resolve()),ra(H,"onResolve")},fallback(D){if(!x.pendingBranch)return;const{vnode:V,activeBranch:H,parentComponent:z,container:j,namespace:J}=x;ra(V,"onFallback");const Y=w(H),me=()=>{x.isInFallback&&(h(null,D,j,Y,z,null,J,m,d),fn(x,D))},Ae=D.transition&&D.transition.mode==="out-in";Ae&&(H.transition.afterLeave=me),x.isInFallback=!0,A(H,z,null,!0),Ae||me()},move(D,V,H){x.activeBranch&&_(x.activeBranch,D,V,H),x.container=D},next(){return x.activeBranch&&w(x.activeBranch)},registerDep(D,V){const H=!!x.pendingBranch;H&&x.deps++;const z=D.vnode.el;D.asyncDep.catch(j=>{Zi(j,D,0)}).then(j=>{if(D.isUnmounted||x.isUnmounted||x.pendingId!==D.suspenseId)return;D.asyncResolved=!0;const{vnode:J}=D;ml(D,j,!1),z&&(J.el=z);const Y=!z&&D.subTree.el;V(D,J,B(z||D.subTree.el),z?null:w(D.subTree),x,c,d),Y&&L(Y),Kl(D,J.el),H&&--x.deps===0&&x.resolve()})},unmount(D,V){x.isUnmounted=!0,x.activeBranch&&A(x.activeBranch,a,D,V),x.pendingBranch&&A(x.pendingBranch,a,D,V)}};return x}function ip(e,t,a,o,l,u,c,m,d){const p=t.suspense=Ql(t,o,a,e.parentNode,document.createElement("div"),null,l,u,c,m,!0),f=d(e,p.pendingBranch=t.ssContent,a,p,u,c);return p.deps===0&&p.resolve(!1,!0),f}function np(e){const{shapeFlag:t,children:a}=e,o=t&32;e.ssContent=qr(o?a.default:a),e.ssFallback=o?qr(a.fallback):i(pt)}function qr(e){let t;if(Ce(e)){const a=Yi&&e._c;a&&(e._d=!1,S()),e=e(),a&&(e._d=!0,t=bt,ac())}return ge(e)&&(e=Ym(e)),e=At(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(a=>a!==e)),e}function Bu(e,t){t&&t.pendingBranch?ge(e)?t.effects.push(...e):t.effects.push(e):qa(e)}function fn(e,t){e.activeBranch=t;const{vnode:a,parentComponent:o}=e;let l=t.el;for(;!l&&t.component;)t=t.component.subTree,l=t.el;a.el=l,o&&o.subTree===a&&(o.vnode.el=l,Kl(o,l))}function ap(e){var t;return((t=e.props)==null?void 0:t.suspensible)!=null&&e.props.suspensible!==!1}const $u=Symbol.for("v-scx"),Tu=()=>Ve($u);function Zl(e,t){return ha(e,null,t)}function Lu(e,t){return ha(e,null,{flush:"post"})}function Iu(e,t){return ha(e,null,{flush:"sync"})}const ka={};function ct(e,t,a){return ha(e,t,a)}function ha(e,t,{immediate:a,deep:o,flush:l,once:u,onTrack:c,onTrigger:m}=Ne){if(t&&u){const D=t;t=(...V)=>{D(...V),x()}}const d=nt,p=D=>o===!0?D:Pi(D,o===!1?1:void 0);let f,h=!1,_=!1;if(dt(e)?(f=()=>e.value,h=ia(e)):Mi(e)?(f=()=>p(e),h=!0):ge(e)?(_=!0,h=e.some(D=>Mi(D)||ia(D)),f=()=>e.map(D=>{if(dt(D))return D.value;if(Mi(D))return p(D);if(Ce(D))return ni(D,d,2)})):Ce(e)?t?f=()=>ni(e,d,2):f=()=>(A&&A(),Lt(e,d,3,[w])):f=vt,t&&o){const D=f;f=()=>Pi(D())}let A,w=D=>{A=b.onStop=()=>{ni(D,d,4),A=b.onStop=void 0}},B;if(va)if(w=vt,t?a&&Lt(t,d,3,[f(),_?[]:void 0,w]):f(),l==="sync"){const D=Tu();B=D.__watcherHandles||(D.__watcherHandles=[])}else return vt;let L=_?new Array(e.length).fill(ka):ka;const R=()=>{if(!(!b.active||!b.dirty))if(t){const D=b.run();(o||h||(_?D.some((V,H)=>qt(V,L[H])):qt(D,L)))&&(A&&A(),Lt(t,d,3,[D,L===ka?void 0:_&&L[0]===ka?[]:L,w]),L=D)}else b.run()};R.allowRecurse=!!t;let g;l==="sync"?g=R:l==="post"?g=()=>st(R,d&&d.suspense):(R.pre=!0,d&&(R.id=d.uid),g=()=>uo(R));const b=new Sn(f,vt,g),y=Vl(),x=()=>{b.stop(),y&&Rl(y.effects,b)};return t?a?R():L=b.run():l==="post"?st(b.run.bind(b),d&&d.suspense):b.run(),B&&B.push(x),x}function op(e,t,a){const o=this.proxy,l=Je(e)?e.includes(".")?Du(o,e):()=>o[e]:e.bind(o,o);let u;Ce(t)?u=t:(u=t.handler,a=t);const c=Wi(this),m=ha(l,u.bind(o),a);return c(),m}function Du(e,t){const a=t.split(".");return()=>{let o=e;for(let l=0;l<a.length&&o;l++)o=o[a[l]];return o}}function Pi(e,t,a=0,o){if(!Ge(e)||e.__v_skip)return e;if(t&&t>0){if(a>=t)return e;a++}if(o=o||new Set,o.has(e))return e;if(o.add(e),dt(e))Pi(e.value,t,a,o);else if(ge(e))for(let l=0;l<e.length;l++)Pi(e[l],t,a,o);else if(Xi(e)||cn(e))e.forEach(l=>{Pi(l,t,a,o)});else if(Us(e))for(const l in e)Pi(e[l],t,a,o);return e}function wi(e,t){if(tt===null)return e;const a=So(tt)||tt.proxy,o=e.dirs||(e.dirs=[]);for(let l=0;l<t.length;l++){let[u,c,m,d=Ne]=t[l];u&&(Ce(u)&&(u={mounted:u,updated:u}),u.deep&&Pi(c),o.push({dir:u,instance:a,value:c,oldValue:void 0,arg:m,modifiers:d}))}return e}function Ut(e,t,a,o){const l=e.dirs,u=t&&t.dirs;for(let c=0;c<l.length;c++){const m=l[c];u&&(m.oldValue=u[c].value);let d=m.dir[o];d&&(Ji(),Lt(d,a,8,[e.el,m,e,t]),Qi())}}const _i=Symbol("_leaveCb"),Ba=Symbol("_enterCb");function er(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return si(()=>{e.isMounted=!0}),_o(()=>{e.isUnmounting=!0}),e}const Pt=[Function,Array],tr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pt,onEnter:Pt,onAfterEnter:Pt,onEnterCancelled:Pt,onBeforeLeave:Pt,onLeave:Pt,onAfterLeave:Pt,onLeaveCancelled:Pt,onBeforeAppear:Pt,onAppear:Pt,onAfterAppear:Pt,onAppearCancelled:Pt},lp={name:"BaseTransition",props:tr,setup(e,{slots:t}){const a=Jt(),o=er();let l;return()=>{const u=t.default&&fo(t.default(),!0);if(!u||!u.length)return;let c=u[0];if(u.length>1){for(const B of u)if(B.type!==pt){c=B;break}}const m=Ee(e),{mode:d}=m;if(o.isLeaving)return $o(c);const p=Gr(c);if(!p)return $o(c);const f=yn(p,m,o,a);Gi(p,f);const h=a.subTree,_=h&&Gr(h);let A=!1;const{getTransitionKey:w}=p.type;if(w){const B=w();l===void 0?l=B:B!==l&&(l=B,A=!0)}if(_&&_.type!==pt&&(!Nt(p,_)||A)){const B=yn(_,m,o,a);if(Gi(_,B),d==="out-in")return o.isLeaving=!0,B.afterLeave=()=>{o.isLeaving=!1,a.update.active!==!1&&(a.effect.dirty=!0,a.update())},$o(c);d==="in-out"&&p.type!==pt&&(B.delayLeave=(L,R,g)=>{const b=Ru(o,_);b[String(_.key)]=_,L[_i]=()=>{R(),L[_i]=void 0,delete f.delayedLeave},f.delayedLeave=g})}return c}}},Eu=lp;function Ru(e,t){const{leavingVNodes:a}=e;let o=a.get(t.type);return o||(o=Object.create(null),a.set(t.type,o)),o}function yn(e,t,a,o){const{appear:l,mode:u,persisted:c=!1,onBeforeEnter:m,onEnter:d,onAfterEnter:p,onEnterCancelled:f,onBeforeLeave:h,onLeave:_,onAfterLeave:A,onLeaveCancelled:w,onBeforeAppear:B,onAppear:L,onAfterAppear:R,onAppearCancelled:g}=t,b=String(e.key),y=Ru(a,e),x=(H,z)=>{H&&Lt(H,o,9,z)},D=(H,z)=>{const j=z[1];x(H,z),ge(H)?H.every(J=>J.length<=1)&&j():H.length<=1&&j()},V={mode:u,persisted:c,beforeEnter(H){let z=m;if(!a.isMounted)if(l)z=B||m;else return;H[_i]&&H[_i](!0);const j=y[b];j&&Nt(e,j)&&j.el[_i]&&j.el[_i](),x(z,[H])},enter(H){let z=d,j=p,J=f;if(!a.isMounted)if(l)z=L||d,j=R||p,J=g||f;else return;let Y=!1;const me=H[Ba]=Ae=>{Y||(Y=!0,Ae?x(J,[H]):x(j,[H]),V.delayedLeave&&V.delayedLeave(),H[Ba]=void 0)};z?D(z,[H,me]):me()},leave(H,z){const j=String(e.key);if(H[Ba]&&H[Ba](!0),a.isUnmounting)return z();x(h,[H]);let J=!1;const Y=H[_i]=me=>{J||(J=!0,z(),me?x(w,[H]):x(A,[H]),H[_i]=void 0,y[j]===e&&delete y[j])};y[j]=e,_?D(_,[H,Y]):Y()},clone(H){return yn(H,t,a,o)}};return V}function $o(e){if(_a(e))return e=Xt(e),e.children=null,e}function Gr(e){return _a(e)?e.children?e.children[0]:void 0:e}function Gi(e,t){e.shapeFlag&6&&e.component?Gi(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function fo(e,t=!1,a){let o=[],l=0;for(let u=0;u<e.length;u++){let c=e[u];const m=a==null?c.key:String(a)+String(c.key!=null?c.key:u);c.type===ye?(c.patchFlag&128&&l++,o=o.concat(fo(c.children,t,m))):(t||c.type!==pt)&&o.push(m!=null?Xt(c,{key:m}):c)}if(l>1)for(let u=0;u<o.length;u++)o[u].patchFlag=-2;return o}/*! #__NO_SIDE_EFFECTS__ */function F(e,t){return Ce(e)?Xe({name:e.name},t,{setup:e}):e}const Hi=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function rp(e){Ce(e)&&(e={loader:e});const{loader:t,loadingComponent:a,errorComponent:o,delay:l=200,timeout:u,suspensible:c=!0,onError:m}=e;let d=null,p,f=0;const h=()=>(f++,d=null,_()),_=()=>{let A;return d||(A=d=t().catch(w=>{if(w=w instanceof Error?w:new Error(String(w)),m)return new Promise((B,L)=>{m(w,()=>B(h()),()=>L(w),f+1)});throw w}).then(w=>A!==d&&d?d:(w&&(w.__esModule||w[Symbol.toStringTag]==="Module")&&(w=w.default),p=w,w)))};return F({name:"AsyncComponentWrapper",__asyncLoader:_,get __asyncResolved(){return p},setup(){const A=nt;if(p)return()=>To(p,A);const w=g=>{d=null,Zi(g,A,13,!o)};if(c&&A.suspense||va)return _().then(g=>()=>To(g,A)).catch(g=>(w(g),()=>o?i(o,{error:g}):null));const B=G(!1),L=G(),R=G(!!l);return l&&setTimeout(()=>{R.value=!1},l),u!=null&&setTimeout(()=>{if(!B.value&&!L.value){const g=new Error(`Async component timed out after ${u}ms.`);w(g),L.value=g}},u),_().then(()=>{B.value=!0,A.parent&&_a(A.parent.vnode)&&(A.parent.effect.dirty=!0,uo(A.parent.update))}).catch(g=>{w(g),L.value=g}),()=>{if(B.value&&p)return To(p,A);if(L.value&&o)return i(o,{error:L.value});if(a&&!R.value)return i(a)}}})}function To(e,t){const{ref:a,props:o,children:l,ce:u}=t.vnode,c=i(e,o,l);return c.ref=a,c.ce=u,delete t.vnode.ce,c}const _a=e=>e.type.__isKeepAlive,sp={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const a=Jt(),o=a.ctx;if(!o.renderer)return()=>{const g=t.default&&t.default();return g&&g.length===1?g[0]:g};const l=new Map,u=new Set;let c=null;const m=a.suspense,{renderer:{p:d,m:p,um:f,o:{createElement:h}}}=o,_=h("div");o.activate=(g,b,y,x,D)=>{const V=g.component;p(g,b,y,0,m),d(V.vnode,g,b,y,V,m,x,g.slotScopeIds,D),st(()=>{V.isDeactivated=!1,V.a&&dn(V.a);const H=g.props&&g.props.onVnodeMounted;H&&_t(H,V.parent,g)},m)},o.deactivate=g=>{const b=g.component;p(g,_,null,1,m),st(()=>{b.da&&dn(b.da);const y=g.props&&g.props.onVnodeUnmounted;y&&_t(y,b.parent,g),b.isDeactivated=!0},m)};function A(g){Lo(g),f(g,a,m,!0)}function w(g){l.forEach((b,y)=>{const x=fl(b.type);x&&(!g||!g(x))&&B(y)})}function B(g){const b=l.get(g);!c||!Nt(b,c)?A(b):c&&Lo(c),l.delete(g),u.delete(g)}ct(()=>[e.include,e.exclude],([g,b])=>{g&&w(y=>On(g,y)),b&&w(y=>!On(b,y))},{flush:"post",deep:!0});let L=null;const R=()=>{L!=null&&l.set(L,Io(a.subTree))};return si(R),ho(R),_o(()=>{l.forEach(g=>{const{subTree:b,suspense:y}=a,x=Io(b);if(g.type===x.type&&g.key===x.key){Lo(x);const D=x.component.da;D&&st(D,y);return}A(g)})}),()=>{if(L=null,!t.default)return null;const g=t.default(),b=g[0];if(g.length>1)return c=null,g;if(!wt(b)||!(b.shapeFlag&4)&&!(b.shapeFlag&128))return c=null,b;let y=Io(b);const x=y.type,D=fl(Hi(y)?y.type.__asyncResolved||{}:x),{include:V,exclude:H,max:z}=e;if(V&&(!D||!On(V,D))||H&&D&&On(H,D))return c=y,b;const j=y.key==null?x:y.key,J=l.get(j);return y.el&&(y=Xt(y),b.shapeFlag&128&&(b.ssContent=y)),L=j,J?(y.el=J.el,y.component=J.component,y.transition&&Gi(y,y.transition),y.shapeFlag|=512,u.delete(j),u.add(j)):(u.add(j),z&&u.size>parseInt(z,10)&&B(u.values().next().value)),y.shapeFlag|=256,c=y,ku(b.type)?b:y}}},up=sp;function On(e,t){return ge(e)?e.some(a=>On(a,t)):Je(e)?e.split(",").includes(t):qd(e)?e.test(t):!1}function ir(e,t){Pu(e,"a",t)}function nr(e,t){Pu(e,"da",t)}function Pu(e,t,a=nt){const o=e.__wdc||(e.__wdc=()=>{let l=a;for(;l;){if(l.isDeactivated)return;l=l.parent}return e()});if(go(t,o,a),a){let l=a.parent;for(;l&&l.parent;)_a(l.parent.vnode)&&cp(o,t,a,l),l=l.parent}}function cp(e,t,a,o){const l=go(t,e,o,!0);ki(()=>{Rl(o[t],l)},a)}function Lo(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Io(e){return e.shapeFlag&128?e.ssContent:e}function go(e,t,a=nt,o=!1){if(a){const l=a[e]||(a[e]=[]),u=t.__weh||(t.__weh=(...c)=>{if(a.isUnmounted)return;Ji();const m=Wi(a),d=Lt(t,a,e,c);return m(),Qi(),d});return o?l.unshift(u):l.push(u),u}}const ri=e=>(t,a=nt)=>(!va||e==="sp")&&go(e,(...o)=>t(...o),a),zu=ri("bm"),si=ri("m"),Fu=ri("bu"),ho=ri("u"),_o=ri("bum"),ki=ri("um"),Vu=ri("sp"),Mu=ri("rtg"),Hu=ri("rtc");function Ou(e,t=nt){go("ec",e,t)}function Qe(e,t,a,o){let l;const u=a&&a[o];if(ge(e)||Je(e)){l=new Array(e.length);for(let c=0,m=e.length;c<m;c++)l[c]=t(e[c],c,void 0,u&&u[c])}else if(typeof e=="number"){l=new Array(e);for(let c=0;c<e;c++)l[c]=t(c+1,c,void 0,u&&u[c])}else if(Ge(e))if(e[Symbol.iterator])l=Array.from(e,(c,m)=>t(c,m,void 0,u&&u[m]));else{const c=Object.keys(e);l=new Array(c.length);for(let m=0,d=c.length;m<d;m++){const p=c[m];l[m]=t(e[p],p,m,u&&u[m])}}else l=[];return a&&(a[o]=l),l}function dp(e,t){for(let a=0;a<t.length;a++){const o=t[a];if(ge(o))for(let l=0;l<o.length;l++)e[o[l].name]=o[l].fn;else o&&(e[o.name]=o.key?(...l)=>{const u=o.fn(...l);return u&&(u.key=o.key),u}:o.fn)}return e}function ji(e,t,a={},o,l){if(tt.isCE||tt.parent&&Hi(tt.parent)&&tt.parent.isCE)return t!=="default"&&(a.name=t),i("slot",a,o&&o());let u=e[t];u&&u._c&&(u._d=!1),S();const c=u&&Nu(u(a)),m=C(ye,{key:a.key||c&&c.key||`_${t}`},c||(o?o():[]),c&&e._===1?64:-2);return!l&&m.scopeId&&(m.slotScopeIds=[m.scopeId+"-s"]),u&&u._c&&(u._d=!0),m}function Nu(e){return e.some(t=>wt(t)?!(t.type===pt||t.type===ye&&!Nu(t.children)):!0)?e:null}function mp(e,t){const a={};for(const o in e)a[t&&/[A-Z]/.test(o)?`on:${o}`:Yn(o)]=e[o];return a}const nl=e=>e?uc(e)?So(e)||e.proxy:nl(e.parent):null,Wn=Xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>nl(e.parent),$root:e=>nl(e.root),$emit:e=>e.emit,$options:e=>ar(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,uo(e.update)}),$nextTick:e=>e.n||(e.n=en.bind(e.proxy)),$watch:e=>op.bind(e)}),Do=(e,t)=>e!==Ne&&!e.__isScriptSetup&&Re(e,t),al={get({_:e},t){const{ctx:a,setupState:o,data:l,props:u,accessCache:c,type:m,appContext:d}=e;let p;if(t[0]!=="$"){const A=c[t];if(A!==void 0)switch(A){case 1:return o[t];case 2:return l[t];case 4:return a[t];case 3:return u[t]}else{if(Do(o,t))return c[t]=1,o[t];if(l!==Ne&&Re(l,t))return c[t]=2,l[t];if((p=e.propsOptions[0])&&Re(p,t))return c[t]=3,u[t];if(a!==Ne&&Re(a,t))return c[t]=4,a[t];ol&&(c[t]=0)}}const f=Wn[t];let h,_;if(f)return t==="$attrs"&&yt(e,"get",t),f(e);if((h=m.__cssModules)&&(h=h[t]))return h;if(a!==Ne&&Re(a,t))return c[t]=4,a[t];if(_=d.config.globalProperties,Re(_,t))return _[t]},set({_:e},t,a){const{data:o,setupState:l,ctx:u}=e;return Do(l,t)?(l[t]=a,!0):o!==Ne&&Re(o,t)?(o[t]=a,!0):Re(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(u[t]=a,!0)},has({_:{data:e,setupState:t,accessCache:a,ctx:o,appContext:l,propsOptions:u}},c){let m;return!!a[c]||e!==Ne&&Re(e,c)||Do(t,c)||(m=u[0])&&Re(m,c)||Re(o,c)||Re(Wn,c)||Re(l.config.globalProperties,c)},defineProperty(e,t,a){return a.get!=null?e._.accessCache[t]=0:Re(a,"value")&&this.set(e,t,a.value,null),Reflect.defineProperty(e,t,a)}},pp=Xe({},al,{get(e,t){if(t!==Symbol.unscopables)return al.get(e,t,e)},has(e,t){return t[0]!=="_"&&!Wd(t)}});function fp(){return null}function gp(){return null}function hp(e){}function _p(e){}function vp(){return null}function bp(){}function Sp(e,t){return null}function yp(){return Gu().slots}function qu(){return Gu().attrs}function Gu(){const e=Jt();return e.setupContext||(e.setupContext=mc(e))}function sa(e){return ge(e)?e.reduce((t,a)=>(t[a]=null,t),{}):e}function wp(e,t){const a=sa(e);for(const o in t){if(o.startsWith("__skip"))continue;let l=a[o];l?ge(l)||Ce(l)?l=a[o]={type:l,default:t[o]}:l.default=t[o]:l===null&&(l=a[o]={default:t[o]}),l&&t[`__skip_${o}`]&&(l.skipFactory=!0)}return a}function Cp(e,t){return!e||!t?e||t:ge(e)&&ge(t)?e.concat(t):Xe({},sa(e),sa(t))}function xp(e,t){const a={};for(const o in e)t.includes(o)||Object.defineProperty(a,o,{enumerable:!0,get:()=>e[o]});return a}function Ap(e){const t=Jt();let a=e();return dl(),Pl(a)&&(a=a.catch(o=>{throw Wi(t),o})),[a,()=>Wi(t)]}let ol=!0;function kp(e){const t=ar(e),a=e.proxy,o=e.ctx;ol=!1,t.beforeCreate&&jr(t.beforeCreate,e,"bc");const{data:l,computed:u,methods:c,watch:m,provide:d,inject:p,created:f,beforeMount:h,mounted:_,beforeUpdate:A,updated:w,activated:B,deactivated:L,beforeDestroy:R,beforeUnmount:g,destroyed:b,unmounted:y,render:x,renderTracked:D,renderTriggered:V,errorCaptured:H,serverPrefetch:z,expose:j,inheritAttrs:J,components:Y,directives:me,filters:Ae}=t;if(p&&Bp(p,o,null),c)for(const ue in c){const ne=c[ue];Ce(ne)&&(o[ue]=ne.bind(a))}if(l){const ue=l.call(a,a);Ge(ue)&&(e.data=li(ue))}if(ol=!0,u)for(const ue in u){const ne=u[ue],Le=Ce(ne)?ne.bind(a,a):Ce(ne.get)?ne.get.bind(a,a):vt,We=!Ce(ne)&&Ce(ne.set)?ne.set.bind(a):vt,at=M({get:Le,set:We});Object.defineProperty(o,ue,{enumerable:!0,configurable:!0,get:()=>at.value,set:je=>at.value=je})}if(m)for(const ue in m)ju(m[ue],o,a,ue);if(d){const ue=Ce(d)?d.call(a):d;Reflect.ownKeys(ue).forEach(ne=>{ut(ne,ue[ne])})}f&&jr(f,e,"c");function K(ue,ne){ge(ne)?ne.forEach(Le=>ue(Le.bind(a))):ne&&ue(ne.bind(a))}if(K(zu,h),K(si,_),K(Fu,A),K(ho,w),K(ir,B),K(nr,L),K(Ou,H),K(Hu,D),K(Mu,V),K(_o,g),K(ki,y),K(Vu,z),ge(j))if(j.length){const ue=e.exposed||(e.exposed={});j.forEach(ne=>{Object.defineProperty(ue,ne,{get:()=>a[ne],set:Le=>a[ne]=Le})})}else e.exposed||(e.exposed={});x&&e.render===vt&&(e.render=x),J!=null&&(e.inheritAttrs=J),Y&&(e.components=Y),me&&(e.directives=me)}function Bp(e,t,a=vt){ge(e)&&(e=ll(e));for(const o in e){const l=e[o];let u;Ge(l)?"default"in l?u=Ve(l.from||o,l.default,!0):u=Ve(l.from||o):u=Ve(l),dt(u)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>u.value,set:c=>u.value=c}):t[o]=u}}function jr(e,t,a){Lt(ge(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,a)}function ju(e,t,a,o){const l=o.includes(".")?Du(a,o):()=>a[o];if(Je(e)){const u=t[e];Ce(u)&&ct(l,u)}else if(Ce(e))ct(l,e.bind(a));else if(Ge(e))if(ge(e))e.forEach(u=>ju(u,t,a,o));else{const u=Ce(e.handler)?e.handler.bind(a):t[e.handler];Ce(u)&&ct(l,u,e)}}function ar(e){const t=e.type,{mixins:a,extends:o}=t,{mixins:l,optionsCache:u,config:{optionMergeStrategies:c}}=e.appContext,m=u.get(t);let d;return m?d=m:!l.length&&!a&&!o?d=t:(d={},l.length&&l.forEach(p=>ja(d,p,c,!0)),ja(d,t,c)),Ge(t)&&u.set(t,d),d}function ja(e,t,a,o=!1){const{mixins:l,extends:u}=t;u&&ja(e,u,a,!0),l&&l.forEach(c=>ja(e,c,a,!0));for(const c in t)if(!(o&&c==="expose")){const m=$p[c]||a&&a[c];e[c]=m?m(e[c],t[c]):t[c]}return e}const $p={data:Ur,props:Yr,emits:Yr,methods:Nn,computed:Nn,beforeCreate:gt,created:gt,beforeMount:gt,mounted:gt,beforeUpdate:gt,updated:gt,beforeDestroy:gt,beforeUnmount:gt,destroyed:gt,unmounted:gt,activated:gt,deactivated:gt,errorCaptured:gt,serverPrefetch:gt,components:Nn,directives:Nn,watch:Lp,provide:Ur,inject:Tp};function Ur(e,t){return t?e?function(){return Xe(Ce(e)?e.call(this,this):e,Ce(t)?t.call(this,this):t)}:t:e}function Tp(e,t){return Nn(ll(e),ll(t))}function ll(e){if(ge(e)){const t={};for(let a=0;a<e.length;a++)t[e[a]]=e[a];return t}return e}function gt(e,t){return e?[...new Set([].concat(e,t))]:t}function Nn(e,t){return e?Xe(Object.create(null),e,t):t}function Yr(e,t){return e?ge(e)&&ge(t)?[...new Set([...e,...t])]:Xe(Object.create(null),sa(e),sa(t??{})):t}function Lp(e,t){if(!e)return t;if(!t)return e;const a=Xe(Object.create(null),e);for(const o in t)a[o]=gt(e[o],t[o]);return a}function Uu(){return{app:null,config:{isNativeTag:Od,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ip=0;function Dp(e,t){return function(o,l=null){Ce(o)||(o=Xe({},o)),l!=null&&!Ge(l)&&(l=null);const u=Uu(),c=new WeakSet;let m=!1;const d=u.app={_uid:Ip++,_component:o,_props:l,_container:null,_context:u,_instance:null,version:fc,get config(){return u.config},set config(p){},use(p,...f){return c.has(p)||(p&&Ce(p.install)?(c.add(p),p.install(d,...f)):Ce(p)&&(c.add(p),p(d,...f))),d},mixin(p){return u.mixins.includes(p)||u.mixins.push(p),d},component(p,f){return f?(u.components[p]=f,d):u.components[p]},directive(p,f){return f?(u.directives[p]=f,d):u.directives[p]},mount(p,f,h){if(!m){const _=i(o,l);return _.appContext=u,h===!0?h="svg":h===!1&&(h=void 0),f&&t?t(_,p):e(_,p,h),m=!0,d._container=p,p.__vue_app__=d,So(_.component)||_.component.proxy}},unmount(){m&&(e(null,d._container),delete d._container.__vue_app__)},provide(p,f){return u.provides[p]=f,d},runWithContext(p){ua=d;try{return p()}finally{ua=null}}};return d}}let ua=null;function ut(e,t){if(nt){let a=nt.provides;const o=nt.parent&&nt.parent.provides;o===a&&(a=nt.provides=Object.create(o)),a[e]=t}}function Ve(e,t,a=!1){const o=nt||tt;if(o||ua){const l=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:ua._context.provides;if(l&&e in l)return l[e];if(arguments.length>1)return a&&Ce(t)?t.call(o&&o.proxy):t}}function Ep(){return!!(nt||tt||ua)}function Rp(e,t,a,o=!1){const l={},u={};Ha(u,bo,1),e.propsDefaults=Object.create(null),Yu(e,t,l,u);for(const c in e.propsOptions[0])c in l||(l[c]=void 0);a?e.props=o?l:mu(l):e.type.props?e.props=l:e.props=u,e.attrs=u}function Pp(e,t,a,o){const{props:l,attrs:u,vnode:{patchFlag:c}}=e,m=Ee(l),[d]=e.propsOptions;let p=!1;if((o||c>0)&&!(c&16)){if(c&8){const f=e.vnode.dynamicProps;for(let h=0;h<f.length;h++){let _=f[h];if(co(e.emitsOptions,_))continue;const A=t[_];if(d)if(Re(u,_))A!==u[_]&&(u[_]=A,p=!0);else{const w=ht(_);l[w]=rl(d,m,w,A,e,!1)}else A!==u[_]&&(u[_]=A,p=!0)}}}else{Yu(e,t,l,u)&&(p=!0);let f;for(const h in m)(!t||!Re(t,h)&&((f=Bt(h))===h||!Re(t,f)))&&(d?a&&(a[h]!==void 0||a[f]!==void 0)&&(l[h]=rl(d,m,h,void 0,e,!0)):delete l[h]);if(u!==m)for(const h in u)(!t||!Re(t,h))&&(delete u[h],p=!0)}p&&ii(e,"set","$attrs")}function Yu(e,t,a,o){const[l,u]=e.propsOptions;let c=!1,m;if(t)for(let d in t){if(Un(d))continue;const p=t[d];let f;l&&Re(l,f=ht(d))?!u||!u.includes(f)?a[f]=p:(m||(m={}))[f]=p:co(e.emitsOptions,d)||(!(d in o)||p!==o[d])&&(o[d]=p,c=!0)}if(u){const d=Ee(a),p=m||Ne;for(let f=0;f<u.length;f++){const h=u[f];a[h]=rl(l,d,h,p[h],e,!Re(p,h))}}return c}function rl(e,t,a,o,l,u){const c=e[a];if(c!=null){const m=Re(c,"default");if(m&&o===void 0){const d=c.default;if(c.type!==Function&&!c.skipFactory&&Ce(d)){const{propsDefaults:p}=l;if(a in p)o=p[a];else{const f=Wi(l);o=p[a]=d.call(null,t),f()}}else o=d}c[0]&&(u&&!m?o=!1:c[1]&&(o===""||o===Bt(a))&&(o=!0))}return o}function Wu(e,t,a=!1){const o=t.propsCache,l=o.get(e);if(l)return l;const u=e.props,c={},m=[];let d=!1;if(!Ce(e)){const f=h=>{d=!0;const[_,A]=Wu(h,t,!0);Xe(c,_),A&&m.push(...A)};!a&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!u&&!d)return Ge(e)&&o.set(e,un),un;if(ge(u))for(let f=0;f<u.length;f++){const h=ht(u[f]);Wr(h)&&(c[h]=Ne)}else if(u)for(const f in u){const h=ht(f);if(Wr(h)){const _=u[f],A=c[h]=ge(_)||Ce(_)?{type:_}:Xe({},_);if(A){const w=Jr(Boolean,A.type),B=Jr(String,A.type);A[0]=w>-1,A[1]=B<0||w<B,(w>-1||Re(A,"default"))&&m.push(h)}}}const p=[c,m];return Ge(e)&&o.set(e,p),p}function Wr(e){return e[0]!=="$"}function Kr(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Xr(e,t){return Kr(e)===Kr(t)}function Jr(e,t){return ge(t)?t.findIndex(a=>Xr(a,e)):Ce(t)&&Xr(t,e)?0:-1}const Ku=e=>e[0]==="_"||e==="$stable",or=e=>ge(e)?e.map(At):[At(e)],zp=(e,t,a)=>{if(t._n)return t;const o=n((...l)=>or(t(...l)),a);return o._c=!1,o},Xu=(e,t,a)=>{const o=e._ctx;for(const l in e){if(Ku(l))continue;const u=e[l];if(Ce(u))t[l]=zp(l,u,o);else if(u!=null){const c=or(u);t[l]=()=>c}}},Ju=(e,t)=>{const a=or(t);e.slots.default=()=>a},Fp=(e,t)=>{if(e.vnode.shapeFlag&32){const a=t._;a?(e.slots=Ee(t),Ha(t,"_",a)):Xu(t,e.slots={})}else e.slots={},t&&Ju(e,t);Ha(e.slots,bo,1)},Vp=(e,t,a)=>{const{vnode:o,slots:l}=e;let u=!0,c=Ne;if(o.shapeFlag&32){const m=t._;m?a&&m===1?u=!1:(Xe(l,t),!a&&m===1&&delete l._):(u=!t.$stable,Xu(t,l)),c=t}else t&&(Ju(e,t),c={default:1});if(u)for(const m in l)!Ku(m)&&c[m]==null&&delete l[m]};function Ua(e,t,a,o,l=!1){if(ge(e)){e.forEach((_,A)=>Ua(_,t&&(ge(t)?t[A]:t),a,o,l));return}if(Hi(o)&&!l)return;const u=o.shapeFlag&4?So(o.component)||o.component.proxy:o.el,c=l?null:u,{i:m,r:d}=e,p=t&&t.r,f=m.refs===Ne?m.refs={}:m.refs,h=m.setupState;if(p!=null&&p!==d&&(Je(p)?(f[p]=null,Re(h,p)&&(h[p]=null)):dt(p)&&(p.value=null)),Ce(d))ni(d,m,12,[c,f]);else{const _=Je(d),A=dt(d),w=e.f;if(_||A){const B=()=>{if(w){const L=_?Re(h,d)?h[d]:f[d]:d.value;l?ge(L)&&Rl(L,u):ge(L)?L.includes(u)||L.push(u):_?(f[d]=[u],Re(h,d)&&(h[d]=f[d])):(d.value=[u],e.k&&(f[e.k]=d.value))}else _?(f[d]=c,Re(h,d)&&(h[d]=c)):A&&(d.value=c,e.k&&(f[e.k]=c))};l||w?B():(B.id=-1,st(B,a))}}}let mi=!1;const Mp=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",Hp=e=>e.namespaceURI.includes("MathML"),$a=e=>{if(Mp(e))return"svg";if(Hp(e))return"mathml"},Ta=e=>e.nodeType===8;function Op(e){const{mt:t,p:a,o:{patchProp:o,createText:l,nextSibling:u,parentNode:c,remove:m,insert:d,createComment:p}}=e,f=(b,y)=>{if(!y.hasChildNodes()){a(null,b,y),Ga(),y._vnode=b;return}mi=!1,h(y.firstChild,b,null,null,null),Ga(),y._vnode=b,mi&&console.error("Hydration completed but contains mismatches.")},h=(b,y,x,D,V,H=!1)=>{const z=Ta(b)&&b.data==="[",j=()=>B(b,y,x,D,V,z),{type:J,ref:Y,shapeFlag:me,patchFlag:Ae}=y;let U=b.nodeType;y.el=b,Ae===-2&&(H=!1,y.dynamicChildren=null);let K=null;switch(J){case Ui:U!==3?y.children===""?(d(y.el=l(""),c(b),b),K=b):K=j():(b.data!==y.children&&(mi=!0,b.data=y.children),K=u(b));break;case pt:g(b)?(K=u(b),R(y.el=b.content.firstChild,b,x)):U!==8||z?K=j():K=u(b);break;case Oi:if(z&&(b=u(b),U=b.nodeType),U===1||U===3){K=b;const ue=!y.children.length;for(let ne=0;ne<y.staticCount;ne++)ue&&(y.children+=K.nodeType===1?K.outerHTML:K.data),ne===y.staticCount-1&&(y.anchor=K),K=u(K);return z?u(K):K}else j();break;case ye:z?K=w(b,y,x,D,V,H):K=j();break;default:if(me&1)(U!==1||y.type.toLowerCase()!==b.tagName.toLowerCase())&&!g(b)?K=j():K=_(b,y,x,D,V,H);else if(me&6){y.slotScopeIds=V;const ue=c(b);if(z?K=L(b):Ta(b)&&b.data==="teleport start"?K=L(b,b.data,"teleport end"):K=u(b),t(y,ue,null,x,D,$a(ue),H),Hi(y)){let ne;z?(ne=i(ye),ne.anchor=K?K.previousSibling:ue.lastChild):ne=b.nodeType===3?r(""):i("div"),ne.el=b,y.component.subTree=ne}}else me&64?U!==8?K=j():K=y.type.hydrate(b,y,x,D,V,H,e,A):me&128&&(K=y.type.hydrate(b,y,x,D,$a(c(b)),V,H,e,h))}return Y!=null&&Ua(Y,null,D,y),K},_=(b,y,x,D,V,H)=>{H=H||!!y.dynamicChildren;const{type:z,props:j,patchFlag:J,shapeFlag:Y,dirs:me,transition:Ae}=y,U=z==="input"||z==="option";if(U||J!==-1){me&&Ut(y,null,x,"created");let K=!1;if(g(b)){K=tc(D,Ae)&&x&&x.vnode.props&&x.vnode.props.appear;const ne=b.content.firstChild;K&&Ae.beforeEnter(ne),R(ne,b,x),y.el=b=ne}if(Y&16&&!(j&&(j.innerHTML||j.textContent))){let ne=A(b.firstChild,y,b,x,D,V,H);for(;ne;){mi=!0;const Le=ne;ne=ne.nextSibling,m(Le)}}else Y&8&&b.textContent!==y.children&&(mi=!0,b.textContent=y.children);if(j)if(U||!H||J&48)for(const ne in j)(U&&(ne.endsWith("value")||ne==="indeterminate")||pa(ne)&&!Un(ne)||ne[0]===".")&&o(b,ne,null,j[ne],void 0,void 0,x);else j.onClick&&o(b,"onClick",null,j.onClick,void 0,void 0,x);let ue;(ue=j&&j.onVnodeBeforeMount)&&_t(ue,x,y),me&&Ut(y,null,x,"beforeMount"),((ue=j&&j.onVnodeMounted)||me||K)&&Bu(()=>{ue&&_t(ue,x,y),K&&Ae.enter(b),me&&Ut(y,null,x,"mounted")},D)}return b.nextSibling},A=(b,y,x,D,V,H,z)=>{z=z||!!y.dynamicChildren;const j=y.children,J=j.length;for(let Y=0;Y<J;Y++){const me=z?j[Y]:j[Y]=At(j[Y]);if(b)b=h(b,me,D,V,H,z);else{if(me.type===Ui&&!me.children)continue;mi=!0,a(null,me,x,null,D,V,$a(x),H)}}return b},w=(b,y,x,D,V,H)=>{const{slotScopeIds:z}=y;z&&(V=V?V.concat(z):z);const j=c(b),J=A(u(b),y,j,x,D,V,H);return J&&Ta(J)&&J.data==="]"?u(y.anchor=J):(mi=!0,d(y.anchor=p("]"),j,J),J)},B=(b,y,x,D,V,H)=>{if(mi=!0,y.el=null,H){const J=L(b);for(;;){const Y=u(b);if(Y&&Y!==J)m(Y);else break}}const z=u(b),j=c(b);return m(b),a(null,y,j,z,x,D,$a(j),V),z},L=(b,y="[",x="]")=>{let D=0;for(;b;)if(b=u(b),b&&Ta(b)&&(b.data===y&&D++,b.data===x)){if(D===0)return u(b);D--}return b},R=(b,y,x)=>{const D=y.parentNode;D&&D.replaceChild(b,y);let V=x;for(;V;)V.vnode.el===y&&(V.vnode.el=V.subTree.el=b),V=V.parent},g=b=>b.nodeType===1&&b.tagName.toLowerCase()==="template";return[f,h]}const st=Bu;function Qu(e){return ec(e)}function Zu(e){return ec(e,Op)}function ec(e,t){const a=Ys();a.__VUE__=!0;const{insert:o,remove:l,patchProp:u,createElement:c,createText:m,createComment:d,setText:p,setElementText:f,parentNode:h,nextSibling:_,setScopeId:A=vt,insertStaticContent:w}=e,B=(k,E,q,Q=null,Z=null,oe=null,de=void 0,ae=null,re=!!E.dynamicChildren)=>{if(k===E)return;k&&!Nt(k,E)&&(Q=se(k),je(k,Z,oe,!0),k=null),E.patchFlag===-2&&(re=!1,E.dynamicChildren=null);const{type:ie,ref:pe,shapeFlag:be}=E;switch(ie){case Ui:L(k,E,q,Q);break;case pt:R(k,E,q,Q);break;case Oi:k==null&&g(E,q,Q,de);break;case ye:Y(k,E,q,Q,Z,oe,de,ae,re);break;default:be&1?x(k,E,q,Q,Z,oe,de,ae,re):be&6?me(k,E,q,Q,Z,oe,de,ae,re):(be&64||be&128)&&ie.process(k,E,q,Q,Z,oe,de,ae,re,He)}pe!=null&&Z&&Ua(pe,k&&k.ref,oe,E||k,!E)},L=(k,E,q,Q)=>{if(k==null)o(E.el=m(E.children),q,Q);else{const Z=E.el=k.el;E.children!==k.children&&p(Z,E.children)}},R=(k,E,q,Q)=>{k==null?o(E.el=d(E.children||""),q,Q):E.el=k.el},g=(k,E,q,Q)=>{[k.el,k.anchor]=w(k.children,E,q,Q,k.el,k.anchor)},b=({el:k,anchor:E},q,Q)=>{let Z;for(;k&&k!==E;)Z=_(k),o(k,q,Q),k=Z;o(E,q,Q)},y=({el:k,anchor:E})=>{let q;for(;k&&k!==E;)q=_(k),l(k),k=q;l(E)},x=(k,E,q,Q,Z,oe,de,ae,re)=>{E.type==="svg"?de="svg":E.type==="math"&&(de="mathml"),k==null?D(E,q,Q,Z,oe,de,ae,re):z(k,E,Z,oe,de,ae,re)},D=(k,E,q,Q,Z,oe,de,ae)=>{let re,ie;const{props:pe,shapeFlag:be,transition:ve,dirs:xe}=k;if(re=k.el=c(k.type,oe,pe&&pe.is,pe),be&8?f(re,k.children):be&16&&H(k.children,re,null,Q,Z,Eo(k,oe),de,ae),xe&&Ut(k,null,Q,"created"),V(re,k,k.scopeId,de,Q),pe){for(const qe in pe)qe!=="value"&&!Un(qe)&&u(re,qe,null,pe[qe],oe,k.children,Q,Z,ce);"value"in pe&&u(re,"value",null,pe.value,oe),(ie=pe.onVnodeBeforeMount)&&_t(ie,Q,k)}xe&&Ut(k,null,Q,"beforeMount");const Ie=tc(Z,ve);Ie&&ve.beforeEnter(re),o(re,E,q),((ie=pe&&pe.onVnodeMounted)||Ie||xe)&&st(()=>{ie&&_t(ie,Q,k),Ie&&ve.enter(re),xe&&Ut(k,null,Q,"mounted")},Z)},V=(k,E,q,Q,Z)=>{if(q&&A(k,q),Q)for(let oe=0;oe<Q.length;oe++)A(k,Q[oe]);if(Z){let oe=Z.subTree;if(E===oe){const de=Z.vnode;V(k,de,de.scopeId,de.slotScopeIds,Z.parent)}}},H=(k,E,q,Q,Z,oe,de,ae,re=0)=>{for(let ie=re;ie<k.length;ie++){const pe=k[ie]=ae?vi(k[ie]):At(k[ie]);B(null,pe,E,q,Q,Z,oe,de,ae)}},z=(k,E,q,Q,Z,oe,de)=>{const ae=E.el=k.el;let{patchFlag:re,dynamicChildren:ie,dirs:pe}=E;re|=k.patchFlag&16;const be=k.props||Ne,ve=E.props||Ne;let xe;if(q&&Ti(q,!1),(xe=ve.onVnodeBeforeUpdate)&&_t(xe,q,E,k),pe&&Ut(E,k,q,"beforeUpdate"),q&&Ti(q,!0),ie?j(k.dynamicChildren,ie,ae,q,Q,Eo(E,Z),oe):de||ne(k,E,ae,null,q,Q,Eo(E,Z),oe,!1),re>0){if(re&16)J(ae,E,be,ve,q,Q,Z);else if(re&2&&be.class!==ve.class&&u(ae,"class",null,ve.class,Z),re&4&&u(ae,"style",be.style,ve.style,Z),re&8){const Ie=E.dynamicProps;for(let qe=0;qe<Ie.length;qe++){const Ke=Ie[qe],ot=be[Ke],Ot=ve[Ke];(Ot!==ot||Ke==="value")&&u(ae,Ke,ot,Ot,Z,k.children,q,Q,ce)}}re&1&&k.children!==E.children&&f(ae,E.children)}else!de&&ie==null&&J(ae,E,be,ve,q,Q,Z);((xe=ve.onVnodeUpdated)||pe)&&st(()=>{xe&&_t(xe,q,E,k),pe&&Ut(E,k,q,"updated")},Q)},j=(k,E,q,Q,Z,oe,de)=>{for(let ae=0;ae<E.length;ae++){const re=k[ae],ie=E[ae],pe=re.el&&(re.type===ye||!Nt(re,ie)||re.shapeFlag&70)?h(re.el):q;B(re,ie,pe,null,Q,Z,oe,de,!0)}},J=(k,E,q,Q,Z,oe,de)=>{if(q!==Q){if(q!==Ne)for(const ae in q)!Un(ae)&&!(ae in Q)&&u(k,ae,q[ae],null,de,E.children,Z,oe,ce);for(const ae in Q){if(Un(ae))continue;const re=Q[ae],ie=q[ae];re!==ie&&ae!=="value"&&u(k,ae,ie,re,de,E.children,Z,oe,ce)}"value"in Q&&u(k,"value",q.value,Q.value,de)}},Y=(k,E,q,Q,Z,oe,de,ae,re)=>{const ie=E.el=k?k.el:m(""),pe=E.anchor=k?k.anchor:m("");let{patchFlag:be,dynamicChildren:ve,slotScopeIds:xe}=E;xe&&(ae=ae?ae.concat(xe):xe),k==null?(o(ie,q,Q),o(pe,q,Q),H(E.children||[],q,pe,Z,oe,de,ae,re)):be>0&&be&64&&ve&&k.dynamicChildren?(j(k.dynamicChildren,ve,q,Z,oe,de,ae),(E.key!=null||Z&&E===Z.subTree)&&lr(k,E,!0)):ne(k,E,q,pe,Z,oe,de,ae,re)},me=(k,E,q,Q,Z,oe,de,ae,re)=>{E.slotScopeIds=ae,k==null?E.shapeFlag&512?Z.ctx.activate(E,q,Q,de,re):Ae(E,q,Q,Z,oe,de,re):U(k,E,re)},Ae=(k,E,q,Q,Z,oe,de)=>{const ae=k.component=sc(k,Q,Z);if(_a(k)&&(ae.ctx.renderer=He),cc(ae),ae.asyncDep){if(Z&&Z.registerDep(ae,K),!k.el){const re=ae.subTree=i(pt);R(null,re,E,q)}}else K(ae,k,E,q,Z,oe,de)},U=(k,E,q)=>{const Q=E.component=k.component;if(Xm(k,E,q))if(Q.asyncDep&&!Q.asyncResolved){ue(Q,E,q);return}else Q.next=E,qm(Q.update),Q.effect.dirty=!0,Q.update();else E.el=k.el,Q.vnode=E},K=(k,E,q,Q,Z,oe,de)=>{const ae=()=>{if(k.isMounted){let{next:pe,bu:be,u:ve,parent:xe,vnode:Ie}=k;{const nn=ic(k);if(nn){pe&&(pe.el=Ie.el,ue(k,pe,de)),nn.asyncDep.then(()=>{k.isUnmounted||ae()});return}}let qe=pe,Ke;Ti(k,!1),pe?(pe.el=Ie.el,ue(k,pe,de)):pe=Ie,be&&dn(be),(Ke=pe.props&&pe.props.onVnodeBeforeUpdate)&&_t(Ke,xe,pe,Ie),Ti(k,!0);const ot=za(k),Ot=k.subTree;k.subTree=ot,B(Ot,ot,h(Ot.el),se(Ot),k,Z,oe),pe.el=ot.el,qe===null&&Kl(k,ot.el),ve&&st(ve,Z),(Ke=pe.props&&pe.props.onVnodeUpdated)&&st(()=>_t(Ke,xe,pe,Ie),Z)}else{let pe;const{el:be,props:ve}=E,{bm:xe,m:Ie,parent:qe}=k,Ke=Hi(E);if(Ti(k,!1),xe&&dn(xe),!Ke&&(pe=ve&&ve.onVnodeBeforeMount)&&_t(pe,qe,E),Ti(k,!0),be&&Be){const ot=()=>{k.subTree=za(k),Be(be,k.subTree,k,Z,null)};Ke?E.type.__asyncLoader().then(()=>!k.isUnmounted&&ot()):ot()}else{const ot=k.subTree=za(k);B(null,ot,q,Q,k,Z,oe),E.el=ot.el}if(Ie&&st(Ie,Z),!Ke&&(pe=ve&&ve.onVnodeMounted)){const ot=E;st(()=>_t(pe,qe,ot),Z)}(E.shapeFlag&256||qe&&Hi(qe.vnode)&&qe.vnode.shapeFlag&256)&&k.a&&st(k.a,Z),k.isMounted=!0,E=q=Q=null}},re=k.effect=new Sn(ae,vt,()=>uo(ie),k.scope),ie=k.update=()=>{re.dirty&&re.run()};ie.id=k.uid,Ti(k,!0),ie()},ue=(k,E,q)=>{E.component=k;const Q=k.vnode.props;k.vnode=E,k.next=null,Pp(k,E.props,Q,q),Vp(k,E.children,q),Ji(),Hr(k),Qi()},ne=(k,E,q,Q,Z,oe,de,ae,re=!1)=>{const ie=k&&k.children,pe=k?k.shapeFlag:0,be=E.children,{patchFlag:ve,shapeFlag:xe}=E;if(ve>0){if(ve&128){We(ie,be,q,Q,Z,oe,de,ae,re);return}else if(ve&256){Le(ie,be,q,Q,Z,oe,de,ae,re);return}}xe&8?(pe&16&&ce(ie,Z,oe),be!==ie&&f(q,be)):pe&16?xe&16?We(ie,be,q,Q,Z,oe,de,ae,re):ce(ie,Z,oe,!0):(pe&8&&f(q,""),xe&16&&H(be,q,Q,Z,oe,de,ae,re))},Le=(k,E,q,Q,Z,oe,de,ae,re)=>{k=k||un,E=E||un;const ie=k.length,pe=E.length,be=Math.min(ie,pe);let ve;for(ve=0;ve<be;ve++){const xe=E[ve]=re?vi(E[ve]):At(E[ve]);B(k[ve],xe,q,null,Z,oe,de,ae,re)}ie>pe?ce(k,Z,oe,!0,!1,be):H(E,q,Q,Z,oe,de,ae,re,be)},We=(k,E,q,Q,Z,oe,de,ae,re)=>{let ie=0;const pe=E.length;let be=k.length-1,ve=pe-1;for(;ie<=be&&ie<=ve;){const xe=k[ie],Ie=E[ie]=re?vi(E[ie]):At(E[ie]);if(Nt(xe,Ie))B(xe,Ie,q,null,Z,oe,de,ae,re);else break;ie++}for(;ie<=be&&ie<=ve;){const xe=k[be],Ie=E[ve]=re?vi(E[ve]):At(E[ve]);if(Nt(xe,Ie))B(xe,Ie,q,null,Z,oe,de,ae,re);else break;be--,ve--}if(ie>be){if(ie<=ve){const xe=ve+1,Ie=xe<pe?E[xe].el:Q;for(;ie<=ve;)B(null,E[ie]=re?vi(E[ie]):At(E[ie]),q,Ie,Z,oe,de,ae,re),ie++}}else if(ie>ve)for(;ie<=be;)je(k[ie],Z,oe,!0),ie++;else{const xe=ie,Ie=ie,qe=new Map;for(ie=Ie;ie<=ve;ie++){const Ct=E[ie]=re?vi(E[ie]):At(E[ie]);Ct.key!=null&&qe.set(Ct.key,ie)}let Ke,ot=0;const Ot=ve-Ie+1;let nn=!1,$r=0;const Pn=new Array(Ot);for(ie=0;ie<Ot;ie++)Pn[ie]=0;for(ie=xe;ie<=be;ie++){const Ct=k[ie];if(ot>=Ot){je(Ct,Z,oe,!0);continue}let jt;if(Ct.key!=null)jt=qe.get(Ct.key);else for(Ke=Ie;Ke<=ve;Ke++)if(Pn[Ke-Ie]===0&&Nt(Ct,E[Ke])){jt=Ke;break}jt===void 0?je(Ct,Z,oe,!0):(Pn[jt-Ie]=ie+1,jt>=$r?$r=jt:nn=!0,B(Ct,E[jt],q,null,Z,oe,de,ae,re),ot++)}const Tr=nn?Np(Pn):un;for(Ke=Tr.length-1,ie=Ot-1;ie>=0;ie--){const Ct=Ie+ie,jt=E[Ct],Lr=Ct+1<pe?E[Ct+1].el:Q;Pn[ie]===0?B(null,jt,q,Lr,Z,oe,de,ae,re):nn&&(Ke<0||ie!==Tr[Ke]?at(jt,q,Lr,2):Ke--)}}},at=(k,E,q,Q,Z=null)=>{const{el:oe,type:de,transition:ae,children:re,shapeFlag:ie}=k;if(ie&6){at(k.component.subTree,E,q,Q);return}if(ie&128){k.suspense.move(E,q,Q);return}if(ie&64){de.move(k,E,q,He);return}if(de===ye){o(oe,E,q);for(let be=0;be<re.length;be++)at(re[be],E,q,Q);o(k.anchor,E,q);return}if(de===Oi){b(k,E,q);return}if(Q!==2&&ie&1&&ae)if(Q===0)ae.beforeEnter(oe),o(oe,E,q),st(()=>ae.enter(oe),Z);else{const{leave:be,delayLeave:ve,afterLeave:xe}=ae,Ie=()=>o(oe,E,q),qe=()=>{be(oe,()=>{Ie(),xe&&xe()})};ve?ve(oe,Ie,qe):qe()}else o(oe,E,q)},je=(k,E,q,Q=!1,Z=!1)=>{const{type:oe,props:de,ref:ae,children:re,dynamicChildren:ie,shapeFlag:pe,patchFlag:be,dirs:ve}=k;if(ae!=null&&Ua(ae,null,q,k,!0),pe&256){E.ctx.deactivate(k);return}const xe=pe&1&&ve,Ie=!Hi(k);let qe;if(Ie&&(qe=de&&de.onVnodeBeforeUnmount)&&_t(qe,E,k),pe&6)X(k.component,q,Q);else{if(pe&128){k.suspense.unmount(q,Q);return}xe&&Ut(k,null,E,"beforeUnmount"),pe&64?k.type.remove(k,E,q,Z,He,Q):ie&&(oe!==ye||be>0&&be&64)?ce(ie,E,q,!1,!0):(oe===ye&&be&384||!Z&&pe&16)&&ce(re,E,q),Q&&Qt(k)}(Ie&&(qe=de&&de.onVnodeUnmounted)||xe)&&st(()=>{qe&&_t(qe,E,k),xe&&Ut(k,null,E,"unmounted")},q)},Qt=k=>{const{type:E,el:q,anchor:Q,transition:Z}=k;if(E===ye){Rt(q,Q);return}if(E===Oi){y(k);return}const oe=()=>{l(q),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(k.shapeFlag&1&&Z&&!Z.persisted){const{leave:de,delayLeave:ae}=Z,re=()=>de(q,oe);ae?ae(k.el,oe,re):re()}else oe()},Rt=(k,E)=>{let q;for(;k!==E;)q=_(k),l(k),k=q;l(E)},X=(k,E,q)=>{const{bum:Q,scope:Z,update:oe,subTree:de,um:ae}=k;Q&&dn(Q),Z.stop(),oe&&(oe.active=!1,je(de,k,E,q)),ae&&st(ae,E),st(()=>{k.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&k.asyncDep&&!k.asyncResolved&&k.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},ce=(k,E,q,Q=!1,Z=!1,oe=0)=>{for(let de=oe;de<k.length;de++)je(k[de],E,q,Q,Z)},se=k=>k.shapeFlag&6?se(k.component.subTree):k.shapeFlag&128?k.suspense.next():_(k.anchor||k.el);let he=!1;const Me=(k,E,q)=>{k==null?E._vnode&&je(E._vnode,null,null,!0):B(E._vnode||null,k,E,null,null,null,q),he||(he=!0,Hr(),Ga(),he=!1),E._vnode=k},He={p:B,um:je,m:at,r:Qt,mt:Ae,mc:H,pc:ne,pbc:j,n:se,o:e};let ke,Be;return t&&([ke,Be]=t(He)),{render:Me,hydrate:ke,createApp:Dp(Me,ke)}}function Eo({type:e,props:t},a){return a==="svg"&&e==="foreignObject"||a==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:a}function Ti({effect:e,update:t},a){e.allowRecurse=t.allowRecurse=a}function tc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function lr(e,t,a=!1){const o=e.children,l=t.children;if(ge(o)&&ge(l))for(let u=0;u<o.length;u++){const c=o[u];let m=l[u];m.shapeFlag&1&&!m.dynamicChildren&&((m.patchFlag<=0||m.patchFlag===32)&&(m=l[u]=vi(l[u]),m.el=c.el),a||lr(c,m)),m.type===Ui&&(m.el=c.el)}}function Np(e){const t=e.slice(),a=[0];let o,l,u,c,m;const d=e.length;for(o=0;o<d;o++){const p=e[o];if(p!==0){if(l=a[a.length-1],e[l]<p){t[o]=l,a.push(o);continue}for(u=0,c=a.length-1;u<c;)m=u+c>>1,e[a[m]]<p?u=m+1:c=m;p<e[a[u]]&&(u>0&&(t[o]=a[u-1]),a[u]=o)}}for(u=a.length,c=a[u-1];u-- >0;)a[u]=c,c=t[c];return a}function ic(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ic(t)}const qp=e=>e.__isTeleport,Kn=e=>e&&(e.disabled||e.disabled===""),Qr=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Zr=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,sl=(e,t)=>{const a=e&&e.to;return Je(a)?t?t(a):null:a},Gp={name:"Teleport",__isTeleport:!0,process(e,t,a,o,l,u,c,m,d,p){const{mc:f,pc:h,pbc:_,o:{insert:A,querySelector:w,createText:B,createComment:L}}=p,R=Kn(t.props);let{shapeFlag:g,children:b,dynamicChildren:y}=t;if(e==null){const x=t.el=B(""),D=t.anchor=B("");A(x,a,o),A(D,a,o);const V=t.target=sl(t.props,w),H=t.targetAnchor=B("");V&&(A(H,V),c==="svg"||Qr(V)?c="svg":(c==="mathml"||Zr(V))&&(c="mathml"));const z=(j,J)=>{g&16&&f(b,j,J,l,u,c,m,d)};R?z(a,D):V&&z(V,H)}else{t.el=e.el;const x=t.anchor=e.anchor,D=t.target=e.target,V=t.targetAnchor=e.targetAnchor,H=Kn(e.props),z=H?a:D,j=H?x:V;if(c==="svg"||Qr(D)?c="svg":(c==="mathml"||Zr(D))&&(c="mathml"),y?(_(e.dynamicChildren,y,z,l,u,c,m),lr(e,t,!0)):d||h(e,t,z,j,l,u,c,m,!1),R)H?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):La(t,a,x,p,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const J=t.target=sl(t.props,w);J&&La(t,J,null,p,0)}else H&&La(t,D,V,p,1)}nc(t)},remove(e,t,a,o,{um:l,o:{remove:u}},c){const{shapeFlag:m,children:d,anchor:p,targetAnchor:f,target:h,props:_}=e;if(h&&u(f),c&&u(p),m&16){const A=c||!Kn(_);for(let w=0;w<d.length;w++){const B=d[w];l(B,t,a,A,!!B.dynamicChildren)}}},move:La,hydrate:jp};function La(e,t,a,{o:{insert:o},m:l},u=2){u===0&&o(e.targetAnchor,t,a);const{el:c,anchor:m,shapeFlag:d,children:p,props:f}=e,h=u===2;if(h&&o(c,t,a),(!h||Kn(f))&&d&16)for(let _=0;_<p.length;_++)l(p[_],t,a,2);h&&o(m,t,a)}function jp(e,t,a,o,l,u,{o:{nextSibling:c,parentNode:m,querySelector:d}},p){const f=t.target=sl(t.props,d);if(f){const h=f._lpa||f.firstChild;if(t.shapeFlag&16)if(Kn(t.props))t.anchor=p(c(e),t,m(e),a,o,l,u),t.targetAnchor=h;else{t.anchor=c(e);let _=h;for(;_;)if(_=c(_),_&&_.nodeType===8&&_.data==="teleport anchor"){t.targetAnchor=_,f._lpa=t.targetAnchor&&c(t.targetAnchor);break}p(h,t,f,a,o,l,u)}nc(t)}return t.anchor&&c(t.anchor)}const vo=Gp;function nc(e){const t=e.ctx;if(t&&t.ut){let a=e.children[0].el;for(;a&&a!==e.targetAnchor;)a.nodeType===1&&a.setAttribute("data-v-owner",t.uid),a=a.nextSibling;t.ut()}}const ye=Symbol.for("v-fgt"),Ui=Symbol.for("v-txt"),pt=Symbol.for("v-cmt"),Oi=Symbol.for("v-stc"),Xn=[];let bt=null;function S(e=!1){Xn.push(bt=e?null:[])}function ac(){Xn.pop(),bt=Xn[Xn.length-1]||null}let Yi=1;function ul(e){Yi+=e}function oc(e){return e.dynamicChildren=Yi>0?bt||un:null,ac(),Yi>0&&bt&&bt.push(e),e}function we(e,t,a,o,l,u){return oc($(e,t,a,o,l,u,!0))}function C(e,t,a,o,l){return oc(i(e,t,a,o,l,!0))}function wt(e){return e?e.__v_isVNode===!0:!1}function Nt(e,t){return e.type===t.type&&e.key===t.key}function Up(e){}const bo="__vInternal",lc=({key:e})=>e??null,Fa=({ref:e,ref_key:t,ref_for:a})=>(typeof e=="number"&&(e=""+e),e!=null?Je(e)||dt(e)||Ce(e)?{i:tt,r:e,k:t,f:!!a}:e:null);function $(e,t=null,a=null,o=0,l=null,u=e===ye?0:1,c=!1,m=!1){const d={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&lc(t),ref:t&&Fa(t),scopeId:mo,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:u,patchFlag:o,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:tt};return m?(sr(d,a),u&128&&e.normalize(d)):a&&(d.shapeFlag|=Je(a)?8:16),Yi>0&&!c&&bt&&(d.patchFlag>0||u&6)&&d.patchFlag!==32&&bt.push(d),d}const i=Yp;function Yp(e,t=null,a=null,o=0,l=null,u=!1){if((!e||e===Au)&&(e=pt),wt(e)){const m=Xt(e,t,!0);return a&&sr(m,a),Yi>0&&!u&&bt&&(m.shapeFlag&6?bt[bt.indexOf(e)]=m:bt.push(m)),m.patchFlag|=-2,m}if(tf(e)&&(e=e.__vccOpts),t){t=rc(t);let{class:m,style:d}=t;m&&!Je(m)&&(t.class=ga(m)),Ge(d)&&(ql(d)&&!ge(d)&&(d=Xe({},d)),t.style=$n(d))}const c=Je(e)?1:ku(e)?128:qp(e)?64:Ge(e)?4:Ce(e)?2:0;return $(e,t,a,o,l,c,u,!0)}function rc(e){return e?ql(e)||bo in e?Xe({},e):e:null}function Xt(e,t,a=!1){const{props:o,ref:l,patchFlag:u,children:c}=e,m=t?ui(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:m,key:m&&lc(m),ref:t&&t.ref?a&&l?ge(l)?l.concat(Fa(t)):[l,Fa(t)]:Fa(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ye?u===-1?16:u|16:u,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xt(e.ssContent),ssFallback:e.ssFallback&&Xt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function r(e=" ",t=0){return i(Ui,null,e,t)}function Wp(e,t){const a=i(Oi,null,e);return a.staticCount=t,a}function rr(e="",t=!1){return t?(S(),C(pt,null,e)):i(pt,null,e)}function At(e){return e==null||typeof e=="boolean"?i(pt):ge(e)?i(ye,null,e.slice()):typeof e=="object"?vi(e):i(Ui,null,String(e))}function vi(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Xt(e)}function sr(e,t){let a=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(ge(t))a=16;else if(typeof t=="object")if(o&65){const l=t.default;l&&(l._c&&(l._d=!1),sr(e,l()),l._c&&(l._d=!0));return}else{a=32;const l=t._;!l&&!(bo in t)?t._ctx=tt:l===3&&tt&&(tt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Ce(t)?(t={default:t,_ctx:tt},a=32):(t=String(t),o&64?(a=16,t=[r(t)]):a=8);e.children=t,e.shapeFlag|=a}function ui(...e){const t={};for(let a=0;a<e.length;a++){const o=e[a];for(const l in o)if(l==="class")t.class!==o.class&&(t.class=ga([t.class,o.class]));else if(l==="style")t.style=$n([t.style,o.style]);else if(pa(l)){const u=t[l],c=o[l];c&&u!==c&&!(ge(u)&&u.includes(c))&&(t[l]=u?[].concat(u,c):c)}else l!==""&&(t[l]=o[l])}return t}function _t(e,t,a,o=null){Lt(e,t,7,[a,o])}const Kp=Uu();let Xp=0;function sc(e,t,a){const o=e.type,l=(t?t.appContext:e.appContext)||Kp,u={uid:Xp++,vnode:e,type:o,parent:t,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wu(o,l),emitsOptions:wu(o,l),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:o.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return u.ctx={_:u},u.root=t?t.root:u,u.emit=jm.bind(null,u),e.ce&&e.ce(u),u}let nt=null;const Jt=()=>nt||tt;let Ya,cl;{const e=Ys(),t=(a,o)=>{let l;return(l=e[a])||(l=e[a]=[]),l.push(o),u=>{l.length>1?l.forEach(c=>c(u)):l[0](u)}};Ya=t("__VUE_INSTANCE_SETTERS__",a=>nt=a),cl=t("__VUE_SSR_SETTERS__",a=>va=a)}const Wi=e=>{const t=nt;return Ya(e),e.scope.on(),()=>{e.scope.off(),Ya(t)}},dl=()=>{nt&&nt.scope.off(),Ya(null)};function uc(e){return e.vnode.shapeFlag&4}let va=!1;function cc(e,t=!1){t&&cl(t);const{props:a,children:o}=e.vnode,l=uc(e);Rp(e,a,l,t),Fp(e,o);const u=l?Jp(e,t):void 0;return t&&cl(!1),u}function Jp(e,t){const a=e.type;e.accessCache=Object.create(null),e.proxy=Gl(new Proxy(e.ctx,al));const{setup:o}=a;if(o){const l=e.setupContext=o.length>1?mc(e):null,u=Wi(e);Ji();const c=ni(o,e,0,[e.props,l]);if(Qi(),u(),Pl(c)){if(c.then(dl,dl),t)return c.then(m=>{ml(e,m,t)}).catch(m=>{Zi(m,e,0)});e.asyncDep=c}else ml(e,c,t)}else dc(e,t)}function ml(e,t,a){Ce(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ge(t)&&(e.setupState=Yl(t)),dc(e,a)}let Wa,pl;function Qp(e){Wa=e,pl=t=>{t.render._rc&&(t.withProxy=new Proxy(t.ctx,pp))}}const Zp=()=>!Wa;function dc(e,t,a){const o=e.type;if(!e.render){if(!t&&Wa&&!o.render){const l=o.template||ar(e).template;if(l){const{isCustomElement:u,compilerOptions:c}=e.appContext.config,{delimiters:m,compilerOptions:d}=o,p=Xe(Xe({isCustomElement:u,delimiters:m},c),d);o.render=Wa(l,p)}}e.render=o.render||vt,pl&&pl(e)}{const l=Wi(e);Ji();try{kp(e)}finally{Qi(),l()}}}function ef(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,a){return yt(e,"get","$attrs"),t[a]}}))}function mc(e){const t=a=>{e.exposed=a||{}};return{get attrs(){return ef(e)},slots:e.slots,emit:e.emit,expose:t}}function So(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Yl(Gl(e.exposed)),{get(t,a){if(a in t)return t[a];if(a in Wn)return Wn[a](e)},has(t,a){return a in t||a in Wn}}))}function fl(e,t=!0){return Ce(e)?e.displayName||e.name:e.name||t&&e.__name}function tf(e){return Ce(e)&&"__vccOpts"in e}const M=(e,t)=>Bm(e,t,va);function nf(e,t,a=Ne){const o=Jt(),l=ht(t),u=Bt(t),c=hu((d,p)=>{let f;return Iu(()=>{const h=e[t];qt(f,h)&&(f=h,p())}),{get(){return d(),a.get?a.get(f):f},set(h){const _=o.vnode.props;!(_&&(t in _||l in _||u in _)&&(`onUpdate:${t}`in _||`onUpdate:${l}`in _||`onUpdate:${u}`in _))&&qt(h,f)&&(f=h,p()),o.emit(`update:${t}`,a.set?a.set(h):h)}}}),m=t==="modelValue"?"modelModifiers":`${t}Modifiers`;return c[Symbol.iterator]=()=>{let d=0;return{next(){return d<2?{value:d++?e[m]||{}:c,done:!1}:{done:!0}}}},c}function ee(e,t,a){const o=arguments.length;return o===2?Ge(t)&&!ge(t)?wt(t)?i(e,null,[t]):i(e,t):i(e,null,t):(o>3?a=Array.prototype.slice.call(arguments,2):o===3&&wt(a)&&(a=[a]),i(e,t,a))}function af(){}function of(e,t,a,o){const l=a[o];if(l&&pc(l,e))return l;const u=t();return u.memo=e.slice(),a[o]=u}function pc(e,t){const a=e.memo;if(a.length!=t.length)return!1;for(let o=0;o<a.length;o++)if(qt(a[o],t[o]))return!1;return Yi>0&&bt&&bt.push(e),!0}const fc="3.4.15",lf=vt,rf=Hm,sf=ln,uf=yu,cf={createComponentInstance:sc,setupComponent:cc,renderComponentRoot:za,setCurrentRenderingInstance:la,isVNode:wt,normalizeVNode:At},df=cf,mf=null,pf=null,ff=null;/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const gf="http://www.w3.org/2000/svg",hf="http://www.w3.org/1998/Math/MathML",bi=typeof document<"u"?document:null,es=bi&&bi.createElement("template"),_f={insert:(e,t,a)=>{t.insertBefore(e,a||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,a,o)=>{const l=t==="svg"?bi.createElementNS(gf,e):t==="mathml"?bi.createElementNS(hf,e):bi.createElement(e,a?{is:a}:void 0);return e==="select"&&o&&o.multiple!=null&&l.setAttribute("multiple",o.multiple),l},createText:e=>bi.createTextNode(e),createComment:e=>bi.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>bi.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,a,o,l,u){const c=a?a.previousSibling:t.lastChild;if(l&&(l===u||l.nextSibling))for(;t.insertBefore(l.cloneNode(!0),a),!(l===u||!(l=l.nextSibling)););else{es.innerHTML=o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e;const m=es.content;if(o==="svg"||o==="mathml"){const d=m.firstChild;for(;d.firstChild;)m.appendChild(d.firstChild);m.removeChild(d)}t.insertBefore(m,a)}return[c?c.nextSibling:t.firstChild,a?a.previousSibling:t.lastChild]}},pi="transition",zn="animation",wn=Symbol("_vtc"),yo=(e,{slots:t})=>ee(Eu,hc(e),t);yo.displayName="Transition";const gc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},vf=yo.props=Xe({},tr,gc),Li=(e,t=[])=>{ge(e)?e.forEach(a=>a(...t)):e&&e(...t)},ts=e=>e?ge(e)?e.some(t=>t.length>1):e.length>1:!1;function hc(e){const t={};for(const Y in e)Y in gc||(t[Y]=e[Y]);if(e.css===!1)return t;const{name:a="v",type:o,duration:l,enterFromClass:u=`${a}-enter-from`,enterActiveClass:c=`${a}-enter-active`,enterToClass:m=`${a}-enter-to`,appearFromClass:d=u,appearActiveClass:p=c,appearToClass:f=m,leaveFromClass:h=`${a}-leave-from`,leaveActiveClass:_=`${a}-leave-active`,leaveToClass:A=`${a}-leave-to`}=e,w=bf(l),B=w&&w[0],L=w&&w[1],{onBeforeEnter:R,onEnter:g,onEnterCancelled:b,onLeave:y,onLeaveCancelled:x,onBeforeAppear:D=R,onAppear:V=g,onAppearCancelled:H=b}=t,z=(Y,me,Ae)=>{gi(Y,me?f:m),gi(Y,me?p:c),Ae&&Ae()},j=(Y,me)=>{Y._isLeaving=!1,gi(Y,h),gi(Y,A),gi(Y,_),me&&me()},J=Y=>(me,Ae)=>{const U=Y?V:g,K=()=>z(me,Y,Ae);Li(U,[me,K]),is(()=>{gi(me,Y?d:u),Zt(me,Y?f:m),ts(U)||ns(me,o,B,K)})};return Xe(t,{onBeforeEnter(Y){Li(R,[Y]),Zt(Y,u),Zt(Y,c)},onBeforeAppear(Y){Li(D,[Y]),Zt(Y,d),Zt(Y,p)},onEnter:J(!1),onAppear:J(!0),onLeave(Y,me){Y._isLeaving=!0;const Ae=()=>j(Y,me);Zt(Y,h),vc(),Zt(Y,_),is(()=>{Y._isLeaving&&(gi(Y,h),Zt(Y,A),ts(y)||ns(Y,o,L,Ae))}),Li(y,[Y,Ae])},onEnterCancelled(Y){z(Y,!1),Li(b,[Y])},onAppearCancelled(Y){z(Y,!0),Li(H,[Y])},onLeaveCancelled(Y){j(Y),Li(x,[Y])}})}function bf(e){if(e==null)return null;if(Ge(e))return[Ro(e.enter),Ro(e.leave)];{const t=Ro(e);return[t,t]}}function Ro(e){return Oa(e)}function Zt(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.add(a)),(e[wn]||(e[wn]=new Set)).add(t)}function gi(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const a=e[wn];a&&(a.delete(t),a.size||(e[wn]=void 0))}function is(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Sf=0;function ns(e,t,a,o){const l=e._endId=++Sf,u=()=>{l===e._endId&&o()};if(a)return setTimeout(u,a);const{type:c,timeout:m,propCount:d}=_c(e,t);if(!c)return o();const p=c+"end";let f=0;const h=()=>{e.removeEventListener(p,_),u()},_=A=>{A.target===e&&++f>=d&&h()};setTimeout(()=>{f<d&&h()},m+1),e.addEventListener(p,_)}function _c(e,t){const a=window.getComputedStyle(e),o=w=>(a[w]||"").split(", "),l=o(`${pi}Delay`),u=o(`${pi}Duration`),c=as(l,u),m=o(`${zn}Delay`),d=o(`${zn}Duration`),p=as(m,d);let f=null,h=0,_=0;t===pi?c>0&&(f=pi,h=c,_=u.length):t===zn?p>0&&(f=zn,h=p,_=d.length):(h=Math.max(c,p),f=h>0?c>p?pi:zn:null,_=f?f===pi?u.length:d.length:0);const A=f===pi&&/\b(transform|all)(,|$)/.test(o(`${pi}Property`).toString());return{type:f,timeout:h,propCount:_,hasTransform:A}}function as(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((a,o)=>os(a)+os(e[o])))}function os(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function vc(){return document.body.offsetHeight}function yf(e,t,a){const o=e[wn];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):a?e.setAttribute("class",t):e.className=t}const ur=Symbol("_vod"),bc={beforeMount(e,{value:t},{transition:a}){e[ur]=e.style.display==="none"?"":e.style.display,a&&t?a.beforeEnter(e):Fn(e,t)},mounted(e,{value:t},{transition:a}){a&&t&&a.enter(e)},updated(e,{value:t,oldValue:a},{transition:o}){!t!=!a&&(o?t?(o.beforeEnter(e),Fn(e,!0),o.enter(e)):o.leave(e,()=>{Fn(e,!1)}):Fn(e,t))},beforeUnmount(e,{value:t}){Fn(e,t)}};function Fn(e,t){e.style.display=t?e[ur]:"none"}function wf(){bc.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const Sc=Symbol("");function Cf(e){const t=Jt();if(!t)return;const a=t.ut=(l=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(u=>hl(u,l))},o=()=>{const l=e(t.proxy);gl(t.subTree,l),a(l)};Lu(o),si(()=>{const l=new MutationObserver(o);l.observe(t.subTree.el.parentNode,{childList:!0}),ki(()=>l.disconnect())})}function gl(e,t){if(e.shapeFlag&128){const a=e.suspense;e=a.activeBranch,a.pendingBranch&&!a.isHydrating&&a.effects.push(()=>{gl(a.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)hl(e.el,t);else if(e.type===ye)e.children.forEach(a=>gl(a,t));else if(e.type===Oi){let{el:a,anchor:o}=e;for(;a&&(hl(a,t),a!==o);)a=a.nextSibling}}function hl(e,t){if(e.nodeType===1){const a=e.style;let o="";for(const l in t)a.setProperty(`--${l}`,t[l]),o+=`--${l}: ${t[l]};`;a[Sc]=o}}function xf(e,t,a){const o=e.style,l=o.display,u=Je(a);if(a&&!u){if(t&&!Je(t))for(const c in t)a[c]==null&&_l(o,c,"");for(const c in a)_l(o,c,a[c])}else if(u){if(t!==a){const c=o[Sc];c&&(a+=";"+c),o.cssText=a}}else t&&e.removeAttribute("style");ur in e&&(o.display=l)}const ls=/\s*!important$/;function _l(e,t,a){if(ge(a))a.forEach(o=>_l(e,t,o));else if(a==null&&(a=""),t.startsWith("--"))e.setProperty(t,a);else{const o=Af(e,t);ls.test(a)?e.setProperty(Bt(o),a.replace(ls,""),"important"):e[o]=a}}const rs=["Webkit","Moz","ms"],Po={};function Af(e,t){const a=Po[t];if(a)return a;let o=ht(t);if(o!=="filter"&&o in e)return Po[t]=o;o=fa(o);for(let l=0;l<rs.length;l++){const u=rs[l]+o;if(u in e)return Po[t]=u}return t}const ss="http://www.w3.org/1999/xlink";function kf(e,t,a,o,l){if(o&&t.startsWith("xlink:"))a==null?e.removeAttributeNS(ss,t.slice(6,t.length)):e.setAttributeNS(ss,t,a);else{const u=tm(t);a==null||u&&!Ws(a)?e.removeAttribute(t):e.setAttribute(t,u?"":a)}}function Bf(e,t,a,o,l,u,c){if(t==="innerHTML"||t==="textContent"){o&&c(o,l,u),e[t]=a??"";return}const m=e.tagName;if(t==="value"&&m!=="PROGRESS"&&!m.includes("-")){e._value=a;const p=m==="OPTION"?e.getAttribute("value"):e.value,f=a??"";p!==f&&(e.value=f),a==null&&e.removeAttribute(t);return}let d=!1;if(a===""||a==null){const p=typeof e[t];p==="boolean"?a=Ws(a):a==null&&p==="string"?(a="",d=!0):p==="number"&&(a=0,d=!0)}try{e[t]=a}catch{}d&&e.removeAttribute(t)}function ti(e,t,a,o){e.addEventListener(t,a,o)}function $f(e,t,a,o){e.removeEventListener(t,a,o)}const us=Symbol("_vei");function Tf(e,t,a,o,l=null){const u=e[us]||(e[us]={}),c=u[t];if(o&&c)c.value=o;else{const[m,d]=Lf(t);if(o){const p=u[t]=Ef(o,l);ti(e,m,p,d)}else c&&($f(e,m,c,d),u[t]=void 0)}}const cs=/(?:Once|Passive|Capture)$/;function Lf(e){let t;if(cs.test(e)){t={};let o;for(;o=e.match(cs);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Bt(e.slice(2)),t]}let zo=0;const If=Promise.resolve(),Df=()=>zo||(If.then(()=>zo=0),zo=Date.now());function Ef(e,t){const a=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=a.attached)return;Lt(Rf(o,a.value),t,5,[o])};return a.value=e,a.attached=Df(),a}function Rf(e,t){if(ge(t)){const a=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{a.call(e),e._stopped=!0},t.map(o=>l=>!l._stopped&&o&&o(l))}else return t}const ds=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Pf=(e,t,a,o,l,u,c,m,d)=>{const p=l==="svg";t==="class"?yf(e,o,p):t==="style"?xf(e,a,o):pa(t)?El(t)||Tf(e,t,a,o,c):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):zf(e,t,o,p))?Bf(e,t,o,u,c,m,d):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),kf(e,t,o,p))};function zf(e,t,a,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in e&&ds(t)&&Ce(a));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const l=e.tagName;if(l==="IMG"||l==="VIDEO"||l==="CANVAS"||l==="SOURCE")return!1}return ds(t)&&Je(a)?!1:t in e}/*! #__NO_SIDE_EFFECTS__ */function yc(e,t){const a=F(e);class o extends wo{constructor(u){super(a,u,t)}}return o.def=a,o}/*! #__NO_SIDE_EFFECTS__ */const Ff=e=>yc(e,Ec),Vf=typeof HTMLElement<"u"?HTMLElement:class{};class wo extends Vf{constructor(t,a={},o){super(),this._def=t,this._props=a,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&o?o(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),en(()=>{this._connected||(Ja(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let o=0;o<this.attributes.length;o++)this._setAttr(this.attributes[o].name);this._ob=new MutationObserver(o=>{for(const l of o)this._setAttr(l.attributeName)}),this._ob.observe(this,{attributes:!0});const t=(o,l=!1)=>{const{props:u,styles:c}=o;let m;if(u&&!ge(u))for(const d in u){const p=u[d];(p===Number||p&&p.type===Number)&&(d in this._props&&(this._props[d]=Oa(this._props[d])),(m||(m=Object.create(null)))[ht(d)]=!0)}this._numberProps=m,l&&this._resolveProps(o),this._applyStyles(c),this._update()},a=this._def.__asyncLoader;a?a().then(o=>t(o,!0)):t(this._def)}_resolveProps(t){const{props:a}=t,o=ge(a)?a:Object.keys(a||{});for(const l of Object.keys(this))l[0]!=="_"&&o.includes(l)&&this._setProp(l,this[l],!0,!1);for(const l of o.map(ht))Object.defineProperty(this,l,{get(){return this._getProp(l)},set(u){this._setProp(l,u)}})}_setAttr(t){let a=this.getAttribute(t);const o=ht(t);this._numberProps&&this._numberProps[o]&&(a=Oa(a)),this._setProp(o,a,!1)}_getProp(t){return this._props[t]}_setProp(t,a,o=!0,l=!0){a!==this._props[t]&&(this._props[t]=a,l&&this._instance&&this._update(),o&&(a===!0?this.setAttribute(Bt(t),""):typeof a=="string"||typeof a=="number"?this.setAttribute(Bt(t),a+""):a||this.removeAttribute(Bt(t))))}_update(){Ja(this._createVNode(),this.shadowRoot)}_createVNode(){const t=i(this._def,Xe({},this._props));return this._instance||(t.ce=a=>{this._instance=a,a.isCE=!0;const o=(u,c)=>{this.dispatchEvent(new CustomEvent(u,{detail:c}))};a.emit=(u,...c)=>{o(u,c),Bt(u)!==u&&o(Bt(u),c)};let l=this;for(;l=l&&(l.parentNode||l.host);)if(l instanceof wo){a.parent=l._instance,a.provides=l._instance.provides;break}}),t}_applyStyles(t){t&&t.forEach(a=>{const o=document.createElement("style");o.textContent=a,this.shadowRoot.appendChild(o)})}}function Mf(e="$style"){{const t=Jt();if(!t)return Ne;const a=t.type.__cssModules;if(!a)return Ne;const o=a[e];return o||Ne}}const wc=new WeakMap,Cc=new WeakMap,Ka=Symbol("_moveCb"),ms=Symbol("_enterCb"),xc={name:"TransitionGroup",props:Xe({},vf,{tag:String,moveClass:String}),setup(e,{slots:t}){const a=Jt(),o=er();let l,u;return ho(()=>{if(!l.length)return;const c=e.moveClass||`${e.name||"v"}-move`;if(!Gf(l[0].el,a.vnode.el,c))return;l.forEach(Of),l.forEach(Nf);const m=l.filter(qf);vc(),m.forEach(d=>{const p=d.el,f=p.style;Zt(p,c),f.transform=f.webkitTransform=f.transitionDuration="";const h=p[Ka]=_=>{_&&_.target!==p||(!_||/transform$/.test(_.propertyName))&&(p.removeEventListener("transitionend",h),p[Ka]=null,gi(p,c))};p.addEventListener("transitionend",h)})}),()=>{const c=Ee(e),m=hc(c);let d=c.tag||ye;l=u,u=t.default?fo(t.default()):[];for(let p=0;p<u.length;p++){const f=u[p];f.key!=null&&Gi(f,yn(f,m,o,a))}if(l)for(let p=0;p<l.length;p++){const f=l[p];Gi(f,yn(f,m,o,a)),wc.set(f,f.el.getBoundingClientRect())}return i(d,null,u)}}},Hf=e=>delete e.mode;xc.props;const Ac=xc;function Of(e){const t=e.el;t[Ka]&&t[Ka](),t[ms]&&t[ms]()}function Nf(e){Cc.set(e,e.el.getBoundingClientRect())}function qf(e){const t=wc.get(e),a=Cc.get(e),o=t.left-a.left,l=t.top-a.top;if(o||l){const u=e.el.style;return u.transform=u.webkitTransform=`translate(${o}px,${l}px)`,u.transitionDuration="0s",e}}function Gf(e,t,a){const o=e.cloneNode(),l=e[wn];l&&l.forEach(m=>{m.split(/\s+/).forEach(d=>d&&o.classList.remove(d))}),a.split(/\s+/).forEach(m=>m&&o.classList.add(m)),o.style.display="none";const u=t.nodeType===1?t:t.parentNode;u.appendChild(o);const{hasTransform:c}=_c(o);return u.removeChild(o),c}const Ai=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ge(t)?a=>dn(t,a):t};function jf(e){e.target.composing=!0}function ps(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Mt=Symbol("_assign"),Xa={created(e,{modifiers:{lazy:t,trim:a,number:o}},l){e[Mt]=Ai(l);const u=o||l.props&&l.props.type==="number";ti(e,t?"change":"input",c=>{if(c.target.composing)return;let m=e.value;a&&(m=m.trim()),u&&(m=ta(m)),e[Mt](m)}),a&&ti(e,"change",()=>{e.value=e.value.trim()}),t||(ti(e,"compositionstart",jf),ti(e,"compositionend",ps),ti(e,"change",ps))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:a,trim:o,number:l}},u){if(e[Mt]=Ai(u),e.composing)return;const c=l||e.type==="number"?ta(e.value):e.value,m=t??"";c!==m&&(document.activeElement===e&&e.type!=="range"&&(a||o&&e.value.trim()===m)||(e.value=m))}},cr={deep:!0,created(e,t,a){e[Mt]=Ai(a),ti(e,"change",()=>{const o=e._modelValue,l=Cn(e),u=e.checked,c=e[Mt];if(ge(o)){const m=oo(o,l),d=m!==-1;if(u&&!d)c(o.concat(l));else if(!u&&d){const p=[...o];p.splice(m,1),c(p)}}else if(Xi(o)){const m=new Set(o);u?m.add(l):m.delete(l),c(m)}else c(Bc(e,u))})},mounted:fs,beforeUpdate(e,t,a){e[Mt]=Ai(a),fs(e,t,a)}};function fs(e,{value:t,oldValue:a},o){e._modelValue=t,ge(t)?e.checked=oo(t,o.props.value)>-1:Xi(t)?e.checked=t.has(o.props.value):t!==a&&(e.checked=ai(t,Bc(e,!0)))}const dr={created(e,{value:t},a){e.checked=ai(t,a.props.value),e[Mt]=Ai(a),ti(e,"change",()=>{e[Mt](Cn(e))})},beforeUpdate(e,{value:t,oldValue:a},o){e[Mt]=Ai(o),t!==a&&(e.checked=ai(t,o.props.value))}},kc={deep:!0,created(e,{value:t,modifiers:{number:a}},o){const l=Xi(t);ti(e,"change",()=>{const u=Array.prototype.filter.call(e.options,c=>c.selected).map(c=>a?ta(Cn(c)):Cn(c));e[Mt](e.multiple?l?new Set(u):u:u[0]),e._assigning=!0,en(()=>{e._assigning=!1})}),e[Mt]=Ai(o)},mounted(e,{value:t,oldValue:a,modifiers:{number:o}}){gs(e,t,a,o)},beforeUpdate(e,t,a){e[Mt]=Ai(a)},updated(e,{value:t,oldValue:a,modifiers:{number:o}}){e._assigning||gs(e,t,a,o)}};function gs(e,t,a,o){const l=e.multiple,u=ge(t);if(!(l&&!u&&!Xi(t))&&!(u&&ai(t,a))){for(let c=0,m=e.options.length;c<m;c++){const d=e.options[c],p=Cn(d);if(l)if(u){const f=typeof p;f==="string"||f==="number"?d.selected=t.includes(o?ta(p):p):d.selected=oo(t,p)>-1}else d.selected=t.has(p);else if(ai(Cn(d),t)){e.selectedIndex!==c&&(e.selectedIndex=c);return}}!l&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Cn(e){return"_value"in e?e._value:e.value}function Bc(e,t){const a=t?"_trueValue":"_falseValue";return a in e?e[a]:t}const $c={created(e,t,a){Ia(e,t,a,null,"created")},mounted(e,t,a){Ia(e,t,a,null,"mounted")},beforeUpdate(e,t,a,o){Ia(e,t,a,o,"beforeUpdate")},updated(e,t,a,o){Ia(e,t,a,o,"updated")}};function Tc(e,t){switch(e){case"SELECT":return kc;case"TEXTAREA":return Xa;default:switch(t){case"checkbox":return cr;case"radio":return dr;default:return Xa}}}function Ia(e,t,a,o,l){const c=Tc(e.tagName,a.props&&a.props.type)[l];c&&c(e,t,a,o)}function Uf(){Xa.getSSRProps=({value:e})=>({value:e}),dr.getSSRProps=({value:e},t)=>{if(t.props&&ai(t.props.value,e))return{checked:!0}},cr.getSSRProps=({value:e},t)=>{if(ge(e)){if(t.props&&oo(e,t.props.value)>-1)return{checked:!0}}else if(Xi(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},$c.getSSRProps=(e,t)=>{if(typeof t.type!="string")return;const a=Tc(t.type.toUpperCase(),t.props&&t.props.type);if(a.getSSRProps)return a.getSSRProps(e,t)}}const Yf=["ctrl","shift","alt","meta"],Wf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Yf.some(a=>e[`${a}Key`]&&!t.includes(a))},It=(e,t)=>{const a=e._withMods||(e._withMods={}),o=t.join(".");return a[o]||(a[o]=(l,...u)=>{for(let c=0;c<t.length;c++){const m=Wf[t[c]];if(m&&m(l,t))return}return e(l,...u)})},Kf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Xf=(e,t)=>{const a=e._withKeys||(e._withKeys={}),o=t.join(".");return a[o]||(a[o]=l=>{if(!("key"in l))return;const u=Bt(l.key);if(t.some(c=>c===u||Kf[c]===u))return e(l)})},Lc=Xe({patchProp:Pf},_f);let Jn,hs=!1;function Ic(){return Jn||(Jn=Qu(Lc))}function Dc(){return Jn=hs?Jn:Zu(Lc),hs=!0,Jn}const Ja=(...e)=>{Ic().render(...e)},Ec=(...e)=>{Dc().hydrate(...e)},Rc=(...e)=>{const t=Ic().createApp(...e),{mount:a}=t;return t.mount=o=>{const l=zc(o);if(!l)return;const u=t._component;!Ce(u)&&!u.render&&!u.template&&(u.template=l.innerHTML),l.innerHTML="";const c=a(l,!1,Pc(l));return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),c},t},Jf=(...e)=>{const t=Dc().createApp(...e),{mount:a}=t;return t.mount=o=>{const l=zc(o);if(l)return a(l,!0,Pc(l))},t};function Pc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function zc(e){return Je(e)?document.querySelector(e):e}let _s=!1;const Qf=()=>{_s||(_s=!0,Uf(),wf())};/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Zf=()=>{},eg=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:Eu,BaseTransitionPropsValidators:tr,Comment:pt,DeprecationTypes:ff,EffectScope:Fl,ErrorCodes:Mm,ErrorTypeStrings:rf,Fragment:ye,KeepAlive:up,ReactiveEffect:Sn,Static:Oi,Suspense:Zm,Teleport:vo,Text:Ui,TrackOpTypes:zm,Transition:yo,TransitionGroup:Ac,TriggerOpTypes:Fm,VueElement:wo,assertNumber:Vm,callWithAsyncErrorHandling:Lt,callWithErrorHandling:ni,camelize:ht,capitalize:fa,cloneVNode:Xt,compatUtils:pf,compile:Zf,computed:M,createApp:Rc,createBlock:C,createCommentVNode:rr,createElementBlock:we,createElementVNode:$,createHydrationRenderer:Zu,createPropsRestProxy:xp,createRenderer:Qu,createSSRApp:Jf,createSlots:dp,createStaticVNode:Wp,createTextVNode:r,createVNode:i,customRef:hu,defineAsyncComponent:rp,defineComponent:F,defineCustomElement:yc,defineEmits:gp,defineExpose:hp,defineModel:bp,defineOptions:_p,defineProps:fp,defineSSRCustomElement:Ff,defineSlots:vp,devtools:sf,effect:om,effectScope:nm,getCurrentInstance:Jt,getCurrentScope:Vl,getTransitionRawChildren:fo,guardReactiveProps:rc,h:ee,handleError:Zi,hasInjectionContext:Ep,hydrate:Ec,initCustomFormatter:af,initDirectivesForSSR:Qf,inject:Ve,isMemoSame:pc,isProxy:ql,isReactive:Mi,isReadonly:qi,isRef:dt,isRuntimeOnly:Zp,isShallow:ia,isVNode:wt,markRaw:Gl,mergeDefaults:wp,mergeModels:Cp,mergeProps:ui,nextTick:en,normalizeClass:ga,normalizeProps:Zd,normalizeStyle:$n,onActivated:ir,onBeforeMount:zu,onBeforeUnmount:_o,onBeforeUpdate:Fu,onDeactivated:nr,onErrorCaptured:Ou,onMounted:si,onRenderTracked:Hu,onRenderTriggered:Mu,onScopeDispose:Js,onServerPrefetch:Vu,onUnmounted:ki,onUpdated:ho,openBlock:S,popScopeId:xu,provide:ut,proxyRefs:Yl,pushScopeId:Cu,queuePostFlushCb:qa,reactive:li,readonly:Nl,ref:G,registerRuntimeCompiler:Qp,render:Ja,renderList:Qe,renderSlot:ji,resolveComponent:T,resolveDirective:po,resolveDynamicComponent:tl,resolveFilter:mf,resolveTransitionHooks:yn,setBlockTracking:ul,setDevtoolsHook:uf,setTransitionHooks:Gi,shallowReactive:mu,shallowReadonly:km,shallowRef:fu,ssrContextKey:$u,ssrUtils:df,stop:lm,toDisplayString:$e,toHandlerKey:Yn,toHandlers:mp,toRaw:Ee,toRef:Zo,toRefs:Em,toValue:Lm,transformVNodeArgs:Up,triggerRef:Tm,unref:s,useAttrs:qu,useCssModule:Mf,useCssVars:Cf,useModel:nf,useSSRContext:Tu,useSlots:yp,useTransitionState:er,vModelCheckbox:cr,vModelDynamic:$c,vModelRadio:dr,vModelSelect:kc,vModelText:Xa,vShow:bc,version:fc,warn:lf,watch:ct,watchEffect:Zl,watchPostEffect:Lu,watchSyncEffect:Iu,withAsyncContext:Ap,withCtx:n,withDefaults:Sp,withDirectives:wi,withKeys:Xf,withMemo:of,withModifiers:It,withScopeId:Um},Symbol.toStringTag,{value:"Module"})),tg=F({name:"App"}),Ye=(e,t)=>{const a=e.__vccOpts||e;for(const[o,l]of t)a[o]=l;return a};function ig(e,t,a,o,l,u){const c=T("router-view");return S(),C(c)}const ng=Ye(tg,[["render",ig]]),ag="modulepreload",og=function(e){return"/vue-fomantic-ui/"+e},vs={},zt=function(t,a,o){let l=Promise.resolve();if(a&&a.length>0){const u=document.getElementsByTagName("link");l=Promise.all(a.map(c=>{if(c=og(c),c in vs)return;vs[c]=!0;const m=c.endsWith(".css"),d=m?'[rel="stylesheet"]':"";if(!!o)for(let h=u.length-1;h>=0;h--){const _=u[h];if(_.href===c&&(!m||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=m?"stylesheet":ag,m||(f.as="script",f.crossOrigin=""),f.href=c,document.head.appendChild(f),m)return new Promise((h,_)=>{f.addEventListener("load",h),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}return l.then(()=>t()).catch(u=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=u,window.dispatchEvent(c),!c.defaultPrevented)throw u})};/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Fc=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Tn=e=>Fc?Symbol(e):"_vr_"+e,Vc=Tn("rvlm"),bs=Tn("rvd"),Co=Tn("r"),mr=Tn("rl"),vl=Tn("rvl"),rn=typeof window<"u";function lg(e){return e.__esModule||Fc&&e[Symbol.toStringTag]==="Module"}const Ue=Object.assign;function Fo(e,t){const a={};for(const o in t){const l=t[o];a[o]=Array.isArray(l)?l.map(e):e(l)}return a}const Qn=()=>{},rg=/\/$/,sg=e=>e.replace(rg,"");function Vo(e,t,a="/"){let o,l={},u="",c="";const m=t.indexOf("?"),d=t.indexOf("#",m>-1?m:0);return m>-1&&(o=t.slice(0,m),u=t.slice(m+1,d>-1?d:t.length),l=e(u)),d>-1&&(o=o||t.slice(0,d),c=t.slice(d,t.length)),o=mg(o??t,a),{fullPath:o+(u&&"?")+u+c,path:o,query:l,hash:c}}function ug(e,t){const a=t.query?e(t.query):"";return t.path+(a&&"?")+a+(t.hash||"")}function Ss(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function cg(e,t,a){const o=t.matched.length-1,l=a.matched.length-1;return o>-1&&o===l&&xn(t.matched[o],a.matched[l])&&Mc(t.params,a.params)&&e(t.query)===e(a.query)&&t.hash===a.hash}function xn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Mc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(!dg(e[a],t[a]))return!1;return!0}function dg(e,t){return Array.isArray(e)?ys(e,t):Array.isArray(t)?ys(t,e):e===t}function ys(e,t){return Array.isArray(t)?e.length===t.length&&e.every((a,o)=>a===t[o]):e.length===1&&e[0]===t}function mg(e,t){if(e.startsWith("/"))return e;if(!e)return t;const a=t.split("/"),o=e.split("/");let l=a.length-1,u,c;for(u=0;u<o.length;u++)if(c=o[u],!(l===1||c==="."))if(c==="..")l--;else break;return a.slice(0,l).join("/")+"/"+o.slice(u-(u===o.length?1:0)).join("/")}var ca;(function(e){e.pop="pop",e.push="push"})(ca||(ca={}));var Zn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Zn||(Zn={}));function pg(e){if(!e)if(rn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),sg(e)}const fg=/^[^#]+#/;function gg(e,t){return e.replace(fg,"#")+t}function hg(e,t){const a=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-a.left-(t.left||0),top:o.top-a.top-(t.top||0)}}const xo=()=>({left:window.pageXOffset,top:window.pageYOffset});function _g(e){let t;if("el"in e){const a=e.el,o=typeof a=="string"&&a.startsWith("#"),l=typeof a=="string"?o?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!l)return;t=hg(l,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ws(e,t){return(history.state?history.state.position-t:-1)+e}const bl=new Map;function vg(e,t){bl.set(e,t)}function bg(e){const t=bl.get(e);return bl.delete(e),t}let Sg=()=>location.protocol+"//"+location.host;function Hc(e,t){const{pathname:a,search:o,hash:l}=t,u=e.indexOf("#");if(u>-1){let m=l.includes(e.slice(u))?e.slice(u).length:1,d=l.slice(m);return d[0]!=="/"&&(d="/"+d),Ss(d,"")}return Ss(a,e)+o+l}function yg(e,t,a,o){let l=[],u=[],c=null;const m=({state:_})=>{const A=Hc(e,location),w=a.value,B=t.value;let L=0;if(_){if(a.value=A,t.value=_,c&&c===w){c=null;return}L=B?_.position-B.position:0}else o(A);l.forEach(R=>{R(a.value,w,{delta:L,type:ca.pop,direction:L?L>0?Zn.forward:Zn.back:Zn.unknown})})};function d(){c=a.value}function p(_){l.push(_);const A=()=>{const w=l.indexOf(_);w>-1&&l.splice(w,1)};return u.push(A),A}function f(){const{history:_}=window;_.state&&_.replaceState(Ue({},_.state,{scroll:xo()}),"")}function h(){for(const _ of u)_();u=[],window.removeEventListener("popstate",m),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",m),window.addEventListener("beforeunload",f),{pauseListeners:d,listen:p,destroy:h}}function Cs(e,t,a,o=!1,l=!1){return{back:e,current:t,forward:a,replaced:o,position:window.history.length,scroll:l?xo():null}}function wg(e){const{history:t,location:a}=window,o={value:Hc(e,a)},l={value:t.state};l.value||u(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function u(d,p,f){const h=e.indexOf("#"),_=h>-1?(a.host&&document.querySelector("base")?e:e.slice(h))+d:Sg()+e+d;try{t[f?"replaceState":"pushState"](p,"",_),l.value=p}catch(A){console.error(A),a[f?"replace":"assign"](_)}}function c(d,p){const f=Ue({},t.state,Cs(l.value.back,d,l.value.forward,!0),p,{position:l.value.position});u(d,f,!0),o.value=d}function m(d,p){const f=Ue({},l.value,t.state,{forward:d,scroll:xo()});u(f.current,f,!0);const h=Ue({},Cs(o.value,d,null),{position:f.position+1},p);u(d,h,!1),o.value=d}return{location:o,state:l,push:m,replace:c}}function Cg(e){e=pg(e);const t=wg(e),a=yg(e,t.state,t.location,t.replace);function o(u,c=!0){c||a.pauseListeners(),history.go(u)}const l=Ue({location:"",base:e,go:o,createHref:gg.bind(null,e)},t,a);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>t.state.value}),l}function xg(e){return typeof e=="string"||e&&typeof e=="object"}function Oc(e){return typeof e=="string"||typeof e=="symbol"}const fi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Nc=Tn("nf");var xs;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(xs||(xs={}));function An(e,t){return Ue(new Error,{type:e,[Nc]:!0},t)}function Ii(e,t){return e instanceof Error&&Nc in e&&(t==null||!!(e.type&t))}const As="[^/]+?",Ag={sensitive:!1,strict:!1,start:!0,end:!0},kg=/[.+*?^${}()[\]/\\]/g;function Bg(e,t){const a=Ue({},Ag,t),o=[];let l=a.start?"^":"";const u=[];for(const p of e){const f=p.length?[]:[90];a.strict&&!p.length&&(l+="/");for(let h=0;h<p.length;h++){const _=p[h];let A=40+(a.sensitive?.25:0);if(_.type===0)h||(l+="/"),l+=_.value.replace(kg,"\\$&"),A+=40;else if(_.type===1){const{value:w,repeatable:B,optional:L,regexp:R}=_;u.push({name:w,repeatable:B,optional:L});const g=R||As;if(g!==As){A+=10;try{new RegExp(`(${g})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${w}" (${g}): `+y.message)}}let b=B?`((?:${g})(?:/(?:${g}))*)`:`(${g})`;h||(b=L&&p.length<2?`(?:/${b})`:"/"+b),L&&(b+="?"),l+=b,A+=20,L&&(A+=-8),B&&(A+=-20),g===".*"&&(A+=-50)}f.push(A)}o.push(f)}if(a.strict&&a.end){const p=o.length-1;o[p][o[p].length-1]+=.7000000000000001}a.strict||(l+="/?"),a.end?l+="$":a.strict&&(l+="(?:/|$)");const c=new RegExp(l,a.sensitive?"":"i");function m(p){const f=p.match(c),h={};if(!f)return null;for(let _=1;_<f.length;_++){const A=f[_]||"",w=u[_-1];h[w.name]=A&&w.repeatable?A.split("/"):A}return h}function d(p){let f="",h=!1;for(const _ of e){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const A of _)if(A.type===0)f+=A.value;else if(A.type===1){const{value:w,repeatable:B,optional:L}=A,R=w in p?p[w]:"";if(Array.isArray(R)&&!B)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const g=Array.isArray(R)?R.join("/"):R;if(!g)if(L)_.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${w}"`);f+=g}}return f}return{re:c,score:o,keys:u,parse:m,stringify:d}}function $g(e,t){let a=0;for(;a<e.length&&a<t.length;){const o=t[a]-e[a];if(o)return o;a++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Tg(e,t){let a=0;const o=e.score,l=t.score;for(;a<o.length&&a<l.length;){const u=$g(o[a],l[a]);if(u)return u;a++}return l.length-o.length}const Lg={type:0,value:""},Ig=/[a-zA-Z0-9_]/;function Dg(e){if(!e)return[[]];if(e==="/")return[[Lg]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(A){throw new Error(`ERR (${a})/"${p}": ${A}`)}let a=0,o=a;const l=[];let u;function c(){u&&l.push(u),u=[]}let m=0,d,p="",f="";function h(){p&&(a===0?u.push({type:0,value:p}):a===1||a===2||a===3?(u.length>1&&(d==="*"||d==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),u.push({type:1,value:p,regexp:f,repeatable:d==="*"||d==="+",optional:d==="*"||d==="?"})):t("Invalid state to consume buffer"),p="")}function _(){p+=d}for(;m<e.length;){if(d=e[m++],d==="\\"&&a!==2){o=a,a=4;continue}switch(a){case 0:d==="/"?(p&&h(),c()):d===":"?(h(),a=1):_();break;case 4:_(),a=o;break;case 1:d==="("?a=2:Ig.test(d)?_():(h(),a=0,d!=="*"&&d!=="?"&&d!=="+"&&m--);break;case 2:d===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+d:a=3:f+=d;break;case 3:h(),a=0,d!=="*"&&d!=="?"&&d!=="+"&&m--,f="";break;default:t("Unknown state");break}}return a===2&&t(`Unfinished custom RegExp for param "${p}"`),h(),c(),l}function Eg(e,t,a){const o=Bg(Dg(e.path),a),l=Ue(o,{record:e,parent:t,children:[],alias:[]});return t&&!l.record.aliasOf==!t.record.aliasOf&&t.children.push(l),l}function Rg(e,t){const a=[],o=new Map;t=Bs({strict:!1,end:!0,sensitive:!1},t);function l(f){return o.get(f)}function u(f,h,_){const A=!_,w=zg(f);w.aliasOf=_&&_.record;const B=Bs(t,f),L=[w];if("alias"in f){const b=typeof f.alias=="string"?[f.alias]:f.alias;for(const y of b)L.push(Ue({},w,{components:_?_.record.components:w.components,path:y,aliasOf:_?_.record:w}))}let R,g;for(const b of L){const{path:y}=b;if(h&&y[0]!=="/"){const x=h.record.path,D=x[x.length-1]==="/"?"":"/";b.path=h.record.path+(y&&D+y)}if(R=Eg(b,h,B),_?_.alias.push(R):(g=g||R,g!==R&&g.alias.push(R),A&&f.name&&!ks(R)&&c(f.name)),"children"in w){const x=w.children;for(let D=0;D<x.length;D++)u(x[D],R,_&&_.children[D])}_=_||R,d(R)}return g?()=>{c(g)}:Qn}function c(f){if(Oc(f)){const h=o.get(f);h&&(o.delete(f),a.splice(a.indexOf(h),1),h.children.forEach(c),h.alias.forEach(c))}else{const h=a.indexOf(f);h>-1&&(a.splice(h,1),f.record.name&&o.delete(f.record.name),f.children.forEach(c),f.alias.forEach(c))}}function m(){return a}function d(f){let h=0;for(;h<a.length&&Tg(f,a[h])>=0;)h++;a.splice(h,0,f),f.record.name&&!ks(f)&&o.set(f.record.name,f)}function p(f,h){let _,A={},w,B;if("name"in f&&f.name){if(_=o.get(f.name),!_)throw An(1,{location:f});B=_.record.name,A=Ue(Pg(h.params,_.keys.filter(g=>!g.optional).map(g=>g.name)),f.params),w=_.stringify(A)}else if("path"in f)w=f.path,_=a.find(g=>g.re.test(w)),_&&(A=_.parse(w),B=_.record.name);else{if(_=h.name?o.get(h.name):a.find(g=>g.re.test(h.path)),!_)throw An(1,{location:f,currentLocation:h});B=_.record.name,A=Ue({},h.params,f.params),w=_.stringify(A)}const L=[];let R=_;for(;R;)L.unshift(R.record),R=R.parent;return{name:B,path:w,params:A,matched:L,meta:Vg(L)}}return e.forEach(f=>u(f)),{addRoute:u,resolve:p,removeRoute:c,getRoutes:m,getRecordMatcher:l}}function Pg(e,t){const a={};for(const o of t)o in e&&(a[o]=e[o]);return a}function zg(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Fg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function Fg(e){const t={},a=e.props||!1;if("component"in e)t.default=a;else for(const o in e.components)t[o]=typeof a=="boolean"?a:a[o];return t}function ks(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Vg(e){return e.reduce((t,a)=>Ue(t,a.meta),{})}function Bs(e,t){const a={};for(const o in e)a[o]=o in t?t[o]:e[o];return a}const qc=/#/g,Mg=/&/g,Hg=/\//g,Og=/=/g,Ng=/\?/g,Gc=/\+/g,qg=/%5B/g,Gg=/%5D/g,jc=/%5E/g,jg=/%60/g,Uc=/%7B/g,Ug=/%7C/g,Yc=/%7D/g,Yg=/%20/g;function pr(e){return encodeURI(""+e).replace(Ug,"|").replace(qg,"[").replace(Gg,"]")}function Wg(e){return pr(e).replace(Uc,"{").replace(Yc,"}").replace(jc,"^")}function Sl(e){return pr(e).replace(Gc,"%2B").replace(Yg,"+").replace(qc,"%23").replace(Mg,"%26").replace(jg,"`").replace(Uc,"{").replace(Yc,"}").replace(jc,"^")}function Kg(e){return Sl(e).replace(Og,"%3D")}function Xg(e){return pr(e).replace(qc,"%23").replace(Ng,"%3F")}function Jg(e){return e==null?"":Xg(e).replace(Hg,"%2F")}function Qa(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Qg(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let l=0;l<o.length;++l){const u=o[l].replace(Gc," "),c=u.indexOf("="),m=Qa(c<0?u:u.slice(0,c)),d=c<0?null:Qa(u.slice(c+1));if(m in t){let p=t[m];Array.isArray(p)||(p=t[m]=[p]),p.push(d)}else t[m]=d}return t}function $s(e){let t="";for(let a in e){const o=e[a];if(a=Kg(a),o==null){o!==void 0&&(t+=(t.length?"&":"")+a);continue}(Array.isArray(o)?o.map(u=>u&&Sl(u)):[o&&Sl(o)]).forEach(u=>{u!==void 0&&(t+=(t.length?"&":"")+a,u!=null&&(t+="="+u))})}return t}function Zg(e){const t={};for(const a in e){const o=e[a];o!==void 0&&(t[a]=Array.isArray(o)?o.map(l=>l==null?null:""+l):o==null?o:""+o)}return t}function Vn(){let e=[];function t(o){return e.push(o),()=>{const l=e.indexOf(o);l>-1&&e.splice(l,1)}}function a(){e=[]}return{add:t,list:()=>e,reset:a}}function eh(e,t,a){const o=()=>{e[t].delete(a)};ki(o),nr(o),ir(()=>{e[t].add(a)}),e[t].add(a)}function th(e){const t=Ve(Vc,{}).value;t&&eh(t,"updateGuards",e)}function Si(e,t,a,o,l){const u=o&&(o.enterCallbacks[l]=o.enterCallbacks[l]||[]);return()=>new Promise((c,m)=>{const d=h=>{h===!1?m(An(4,{from:a,to:t})):h instanceof Error?m(h):xg(h)?m(An(2,{from:t,to:h})):(u&&o.enterCallbacks[l]===u&&typeof h=="function"&&u.push(h),c())},p=e.call(o&&o.instances[l],t,a,d);let f=Promise.resolve(p);e.length<3&&(f=f.then(d)),f.catch(h=>m(h))})}function Mo(e,t,a,o){const l=[];for(const u of e)for(const c in u.components){let m=u.components[c];if(!(t!=="beforeRouteEnter"&&!u.instances[c]))if(ih(m)){const p=(m.__vccOpts||m)[t];p&&l.push(Si(p,a,o,u,c))}else{let d=m();l.push(()=>d.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${u.path}"`));const f=lg(p)?p.default:p;u.components[c]=f;const _=(f.__vccOpts||f)[t];return _&&Si(_,a,o,u,c)()}))}}return l}function ih(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ts(e){const t=Ve(Co),a=Ve(mr),o=M(()=>t.resolve(s(e.to))),l=M(()=>{const{matched:d}=o.value,{length:p}=d,f=d[p-1],h=a.matched;if(!f||!h.length)return-1;const _=h.findIndex(xn.bind(null,f));if(_>-1)return _;const A=Ls(d[p-2]);return p>1&&Ls(f)===A&&h[h.length-1].path!==A?h.findIndex(xn.bind(null,d[p-2])):_}),u=M(()=>l.value>-1&&oh(a.params,o.value.params)),c=M(()=>l.value>-1&&l.value===a.matched.length-1&&Mc(a.params,o.value.params));function m(d={}){return ah(d)?t[s(e.replace)?"replace":"push"](s(e.to)).catch(Qn):Promise.resolve()}return{route:o,href:M(()=>o.value.href),isActive:u,isExactActive:c,navigate:m}}const nh=F({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ts,setup(e,{slots:t}){const a=li(Ts(e)),{options:o}=Ve(Co),l=M(()=>({[Is(e.activeClass,o.linkActiveClass,"router-link-active")]:a.isActive,[Is(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const u=t.default&&t.default(a);return e.custom?u:ee("a",{"aria-current":a.isExactActive?e.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:l.value},u)}}}),fr=nh;function ah(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function oh(e,t){for(const a in t){const o=t[a],l=e[a];if(typeof o=="string"){if(o!==l)return!1}else if(!Array.isArray(l)||l.length!==o.length||o.some((u,c)=>u!==l[c]))return!1}return!0}function Ls(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Is=(e,t,a)=>e??t??a,lh=F({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:a}){const o=Ve(vl),l=M(()=>e.route||o.value),u=Ve(bs,0),c=M(()=>l.value.matched[u]);ut(bs,u+1),ut(Vc,c),ut(vl,l);const m=G();return ct(()=>[m.value,c.value,e.name],([d,p,f],[h,_,A])=>{p&&(p.instances[f]=d,_&&_!==p&&d&&d===h&&(p.leaveGuards.size||(p.leaveGuards=_.leaveGuards),p.updateGuards.size||(p.updateGuards=_.updateGuards))),d&&p&&(!_||!xn(p,_)||!h)&&(p.enterCallbacks[f]||[]).forEach(w=>w(d))},{flush:"post"}),()=>{const d=l.value,p=c.value,f=p&&p.components[e.name],h=e.name;if(!f)return Ds(a.default,{Component:f,route:d});const _=p.props[e.name],A=_?_===!0?d.params:typeof _=="function"?_(d):_:null,B=ee(f,Ue({},A,t,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(p.instances[h]=null)},ref:m}));return Ds(a.default,{Component:B,route:d})||B}}});function Ds(e,t){if(!e)return null;const a=e(t);return a.length===1?a[0]:a}const rh=lh;function sh(e){const t=Rg(e.routes,e),a=e.parseQuery||Qg,o=e.stringifyQuery||$s,l=e.history,u=Vn(),c=Vn(),m=Vn(),d=fu(fi);let p=fi;rn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Fo.bind(null,X=>""+X),h=Fo.bind(null,Jg),_=Fo.bind(null,Qa);function A(X,ce){let se,he;return Oc(X)?(se=t.getRecordMatcher(X),he=ce):he=X,t.addRoute(he,se)}function w(X){const ce=t.getRecordMatcher(X);ce&&t.removeRoute(ce)}function B(){return t.getRoutes().map(X=>X.record)}function L(X){return!!t.getRecordMatcher(X)}function R(X,ce){if(ce=Ue({},ce||d.value),typeof X=="string"){const Be=Vo(a,X,ce.path),k=t.resolve({path:Be.path},ce),E=l.createHref(Be.fullPath);return Ue(Be,k,{params:_(k.params),hash:Qa(Be.hash),redirectedFrom:void 0,href:E})}let se;if("path"in X)se=Ue({},X,{path:Vo(a,X.path,ce.path).path});else{const Be=Ue({},X.params);for(const k in Be)Be[k]==null&&delete Be[k];se=Ue({},X,{params:h(X.params)}),ce.params=h(ce.params)}const he=t.resolve(se,ce),Me=X.hash||"";he.params=f(_(he.params));const He=ug(o,Ue({},X,{hash:Wg(Me),path:he.path})),ke=l.createHref(He);return Ue({fullPath:He,hash:Me,query:o===$s?Zg(X.query):X.query||{}},he,{redirectedFrom:void 0,href:ke})}function g(X){return typeof X=="string"?Vo(a,X,d.value.path):Ue({},X)}function b(X,ce){if(p!==X)return An(8,{from:ce,to:X})}function y(X){return V(X)}function x(X){return y(Ue(g(X),{replace:!0}))}function D(X){const ce=X.matched[X.matched.length-1];if(ce&&ce.redirect){const{redirect:se}=ce;let he=typeof se=="function"?se(X):se;return typeof he=="string"&&(he=he.includes("?")||he.includes("#")?he=g(he):{path:he},he.params={}),Ue({query:X.query,hash:X.hash,params:X.params},he)}}function V(X,ce){const se=p=R(X),he=d.value,Me=X.state,He=X.force,ke=X.replace===!0,Be=D(se);if(Be)return V(Ue(g(Be),{state:Me,force:He,replace:ke}),ce||se);const k=se;k.redirectedFrom=ce;let E;return!He&&cg(o,he,se)&&(E=An(16,{to:k,from:he}),We(he,he,!0,!1)),(E?Promise.resolve(E):z(k,he)).catch(q=>Ii(q)?q:ue(q,k,he)).then(q=>{if(q){if(Ii(q,2))return V(Ue(g(q.to),{state:Me,force:He,replace:ke}),ce||k)}else q=J(k,he,!0,ke,Me);return j(k,he,q),q})}function H(X,ce){const se=b(X,ce);return se?Promise.reject(se):Promise.resolve()}function z(X,ce){let se;const[he,Me,He]=uh(X,ce);se=Mo(he.reverse(),"beforeRouteLeave",X,ce);for(const Be of he)Be.leaveGuards.forEach(k=>{se.push(Si(k,X,ce))});const ke=H.bind(null,X,ce);return se.push(ke),an(se).then(()=>{se=[];for(const Be of u.list())se.push(Si(Be,X,ce));return se.push(ke),an(se)}).then(()=>{se=Mo(Me,"beforeRouteUpdate",X,ce);for(const Be of Me)Be.updateGuards.forEach(k=>{se.push(Si(k,X,ce))});return se.push(ke),an(se)}).then(()=>{se=[];for(const Be of X.matched)if(Be.beforeEnter&&!ce.matched.includes(Be))if(Array.isArray(Be.beforeEnter))for(const k of Be.beforeEnter)se.push(Si(k,X,ce));else se.push(Si(Be.beforeEnter,X,ce));return se.push(ke),an(se)}).then(()=>(X.matched.forEach(Be=>Be.enterCallbacks={}),se=Mo(He,"beforeRouteEnter",X,ce),se.push(ke),an(se))).then(()=>{se=[];for(const Be of c.list())se.push(Si(Be,X,ce));return se.push(ke),an(se)}).catch(Be=>Ii(Be,8)?Be:Promise.reject(Be))}function j(X,ce,se){for(const he of m.list())he(X,ce,se)}function J(X,ce,se,he,Me){const He=b(X,ce);if(He)return He;const ke=ce===fi,Be=rn?history.state:{};se&&(he||ke?l.replace(X.fullPath,Ue({scroll:ke&&Be&&Be.scroll},Me)):l.push(X.fullPath,Me)),d.value=X,We(X,ce,se,ke),Le()}let Y;function me(){Y=l.listen((X,ce,se)=>{const he=R(X),Me=D(he);if(Me){V(Ue(Me,{replace:!0}),he).catch(Qn);return}p=he;const He=d.value;rn&&vg(ws(He.fullPath,se.delta),xo()),z(he,He).catch(ke=>Ii(ke,12)?ke:Ii(ke,2)?(V(ke.to,he).then(Be=>{Ii(Be,20)&&!se.delta&&se.type===ca.pop&&l.go(-1,!1)}).catch(Qn),Promise.reject()):(se.delta&&l.go(-se.delta,!1),ue(ke,he,He))).then(ke=>{ke=ke||J(he,He,!1),ke&&(se.delta?l.go(-se.delta,!1):se.type===ca.pop&&Ii(ke,20)&&l.go(-1,!1)),j(he,He,ke)}).catch(Qn)})}let Ae=Vn(),U=Vn(),K;function ue(X,ce,se){Le(X);const he=U.list();return he.length?he.forEach(Me=>Me(X,ce,se)):console.error(X),Promise.reject(X)}function ne(){return K&&d.value!==fi?Promise.resolve():new Promise((X,ce)=>{Ae.add([X,ce])})}function Le(X){K||(K=!0,me(),Ae.list().forEach(([ce,se])=>X?se(X):ce()),Ae.reset())}function We(X,ce,se,he){const{scrollBehavior:Me}=e;if(!rn||!Me)return Promise.resolve();const He=!se&&bg(ws(X.fullPath,0))||(he||!se)&&history.state&&history.state.scroll||null;return en().then(()=>Me(X,ce,He)).then(ke=>ke&&_g(ke)).catch(ke=>ue(ke,X,ce))}const at=X=>l.go(X);let je;const Qt=new Set;return{currentRoute:d,addRoute:A,removeRoute:w,hasRoute:L,getRoutes:B,resolve:R,options:e,push:y,replace:x,go:at,back:()=>at(-1),forward:()=>at(1),beforeEach:u.add,beforeResolve:c.add,afterEach:m.add,onError:U.add,isReady:ne,install(X){const ce=this;X.component("RouterLink",fr),X.component("RouterView",rh),X.config.globalProperties.$router=ce,Object.defineProperty(X.config.globalProperties,"$route",{enumerable:!0,get:()=>s(d)}),rn&&!je&&d.value===fi&&(je=!0,y(l.location).catch(Me=>{}));const se={};for(const Me in fi)se[Me]=M(()=>d.value[Me]);X.provide(Co,ce),X.provide(mr,li(se)),X.provide(vl,d);const he=X.unmount;Qt.add(X),X.unmount=function(){Qt.delete(X),Qt.size<1&&(p=fi,Y&&Y(),d.value=fi,je=!1,K=!1),he()}}}}function an(e){return e.reduce((t,a)=>t.then(()=>a()),Promise.resolve())}function uh(e,t){const a=[],o=[],l=[],u=Math.max(t.matched.length,e.matched.length);for(let c=0;c<u;c++){const m=t.matched[c];m&&(e.matched.find(p=>xn(p,m))?o.push(m):a.push(m));const d=e.matched[c];d&&(t.matched.find(p=>xn(p,d))||l.push(d))}return[a,o,l]}function Wc(){return Ve(Co)}function Kc(){return Ve(mr)}const ch={__name:"Navbar",props:["onClick"],setup(e){const t=G(),a=Wc();function o(l){return l.charAt(0).toUpperCase()+l.slice(1)}return Zl(()=>{const c=a.currentRoute.value.path.match(/\/([^/]+)$/);c&&(t.value=o(c[1]))}),(l,u)=>{const c=T("SuiIcon"),m=T("SuiMenuItem"),d=T("SuiMenu");return S(),C(d,{id:"navbar",fixed:"",icon:"",inverted:"",size:"big"},{default:n(()=>[i(m,{onClick:e.onClick},{default:n(()=>[i(c,{name:"hamburger"})]),_:1},8,["onClick"]),i(m,null,{default:n(()=>[r($e(t.value),1)]),_:1})]),_:1})}}},dh=Ye(ch,[["__scopeId","data-v-338afb35"]]),mh=F({name:"Sidebar",setup(){const e=Kc();return{isActive:c=>e.path===c,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),ph=$("strong",null," Fomantic UI Vue ",-1),fh=$("b",null,"Getting Started",-1);function gh(e,t,a,o,l,u){const c=T("sui-menu-item"),m=T("sui-menu-header"),d=T("sui-menu-menu"),p=T("sui-menu");return S(),C(p,{fluid:"",inverted:"",vertical:""},{default:n(()=>[i(c,{as:"div"},{default:n(()=>[ph]),_:1}),i(c,{as:"router-link",to:"/"},{default:n(()=>[fh]),_:1}),i(c,{as:"div"},{default:n(()=>[i(m,{content:"Elements"}),i(d,null,{default:n(()=>[(S(!0),we(ye,null,Qe(e.elements,f=>(S(),C(c,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),i(c,{as:"div"},{default:n(()=>[i(m,{content:"Collections"}),i(d,null,{default:n(()=>[(S(!0),we(ye,null,Qe(e.collections,f=>(S(),C(c,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),i(c,{as:"div"},{default:n(()=>[i(m,{content:"Views"}),i(d,null,{default:n(()=>[(S(!0),we(ye,null,Qe(e.views,f=>(S(),C(c,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),i(c,{as:"div"},{default:n(()=>[i(m,{content:"Modules"}),i(d,null,{default:n(()=>[(S(!0),we(ye,null,Qe(e.modules,f=>(S(),C(c,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const hh=Ye(mh,[["render",gh]]),_h={class:"sidemenu"},vh={style:{flex:"1","overflow-y":"scroll"}},bh={__name:"Sidebar",setup(e){return(t,a)=>(S(),we("div",_h,[$("div",vh,[i(hh)])]))}},Sh=Ye(bh,[["__scopeId","data-v-379ef704"]]),yh=(e,t)=>{const a=o=>{const l=o.target;(()=>{const c=s(e);return c?c.contains(l):!1})()||t(l)};si(()=>window.addEventListener("mousedown",a)),ki(()=>window.removeEventListener("mousedown",a))},wh=F({name:"Sidebar",props:["onClickOutside"],setup(e){const t=Kc(),a=d=>t.path===d,o=[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],l=[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],u=[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],c=[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}],m=G();return yh(m,e.onClickOutside),{isActive:a,elements:o,collections:l,views:u,modules:c}}}),Ch=$("strong",null," Fomantic UI Vue ",-1),xh=$("b",null,"Getting Started",-1);function Ah(e,t,a,o,l,u){const c=T("sui-menu-item"),m=T("sui-menu-header"),d=T("sui-menu-menu"),p=T("sui-sidebar");return S(),C(p,{dimmed:"",inverted:"",ref:"elementRef",style:{width:"250px"}},{default:n(()=>[i(c,{as:"div"},{default:n(()=>[Ch]),_:1}),i(c,{as:"router-link",to:"/"},{default:n(()=>[xh]),_:1}),i(c,{as:"div"},{default:n(()=>[i(m,{content:"Elements"}),i(d,null,{default:n(()=>[(S(!0),we(ye,null,Qe(e.elements,f=>(S(),C(c,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),i(c,{as:"div"},{default:n(()=>[i(m,{content:"Collections"}),i(d,null,{default:n(()=>[(S(!0),we(ye,null,Qe(e.collections,f=>(S(),C(c,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),i(c,{as:"div"},{default:n(()=>[i(m,{content:"Views"}),i(d,null,{default:n(()=>[(S(!0),we(ye,null,Qe(e.views,f=>(S(),C(c,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),i(c,{as:"div"},{default:n(()=>[i(m,{content:"Modules"}),i(d,null,{default:n(()=>[(S(!0),we(ye,null,Qe(e.modules,f=>(S(),C(c,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1},512)}const kh=Ye(wh,[["render",Ah]]),Bh={class:"pusher",style:{height:"100vh"}},$h={class:"article"},Th={__name:"Home",setup(e){const t=G(!1),a=()=>t.value=!t.value;return th(()=>{t.value=!1}),(o,l)=>{const u=T("router-view"),c=T("SuiSegment");return S(),C(c,{class:"pushable",style:{border:"none"}},{default:n(()=>[i(kh,{visible:t.value,onClickOutside:()=>t.value=!1},null,8,["visible","onClickOutside"]),$("div",Bh,[i(Sh),i(dh,{"on-click":a}),$("div",$h,[i(u)])])]),_:1})}}},Lh=Ye(Th,[["__scopeId","data-v-4a9837ec"]]),Ih={__name:"DocSections",props:["docs"],setup(e){const t=e,a=M(()=>[...new Set(t.docs.map(o=>o.category))]);return(o,l)=>{const u=T("SuiHeader");return S(!0),we(ye,null,Qe(a.value,(c,m)=>(S(),we(ye,{key:c},[i(u,{as:"h2",dividing:"",style:$n({marginTop:m!==0?"5rem":"0",paddingTop:"2rem"})},{default:n(()=>[r($e(c),1)]),_:2},1032,["style"]),(S(!0),we(ye,null,Qe(e.docs.filter(d=>d.category===c),(d,p)=>(S(),we(ye,{key:d.label+"_"+p},[Array.isArray(d.component)?(S(!0),we(ye,{key:0},Qe(d.component,(f,h)=>(S(),C(tl(f),{key:h,id:h===0?d.id:void 0,style:{paddingTop:"3rem"}},null,8,["id"]))),128)):(S(),C(tl(d.component),{key:1,id:d.id,style:{paddingTop:"3rem"}},null,8,["id"]))],64))),128))],64))),128)}}},Dh=e=>(Cu("data-v-e2ae2e49"),e=e(),xu(),e),Eh={class:"item"},Rh=Dh(()=>$("i",{class:"dropdown icon"},null,-1)),Ph={class:"content menu active"},zh={__name:"DocTableLink",props:["header","items"],setup(e){const{id:t}=qu(),a=c=>{c.preventDefault();const m=document.getElementById(t);m.open?l(m):(m.open=!0,o(m))},o=c=>{c.querySelector(".title").classList.add("active");const d=c.querySelector(".content"),p=d.offsetHeight;d.style.maxHeight=0,requestAnimationFrame(()=>{d.style.maxHeight=`${p}px`});const f=new AbortController;d.addEventListener("transitionend",()=>{d.removeAttribute("style"),f.abort()},{signal:f.signal})},l=c=>{const m=c.querySelector(".title"),d=c.querySelector(".content"),p=d.offsetHeight;d.style.maxHeight=`${p}px`,requestAnimationFrame(()=>{d.style.maxHeight=0,m.classList.remove("active")});const f=new AbortController;d.addEventListener("transitionend",()=>{d.removeAttribute("style"),c.open=!1,f.abort()},{signal:f.signal})},u=(c,m)=>{c.preventDefault(),document.getElementById(m.replace("_link","")).scrollIntoView({behavior:"smooth",block:"start"})};return(c,m)=>(S(),we("details",Eh,[$("summary",{class:"title",onClick:a},[Rh,$("b",null,$e(e.header),1)]),$("div",Ph,[(S(!0),we(ye,null,Qe(e.items,d=>(S(),C(s(fr),{to:`#${d.id}`,class:"item",onClick:p=>u(p,d.id)},{default:n(()=>[r($e(d.label),1)]),_:2},1032,["to","onClick"]))),256))])]))}},Fh=Ye(zh,[["__scopeId","data-v-e2ae2e49"]]),Vh={class:"sticky"},Mh={class:"ui vertical following fluid accordion text large menu"},Hh={__name:"DocTableContents",props:["title","links"],setup(e){const t=e,a=[...new Set(t.links.map(o=>o.category))];return(o,l)=>{const u=T("SuiHeader"),c=T("SuiRail");return S(),C(c,{id:"table-contents",position:"right",dividing:""},{default:n(()=>[$("div",Vh,[i(u,{as:"h3"},{default:n(()=>[r($e(e.title),1)]),_:1}),$("div",Mh,[(S(),we(ye,null,Qe(a,m=>i(Fh,{id:`${m}_link`,header:m,items:e.links.filter(d=>d.category===m)},null,8,["id","header","items"])),64))])])]),_:1})}}},Oh=Ye(Hh,[["__scopeId","data-v-bd90305d"]]),Nh={class:"intro"},qh={__name:"DocComponent",props:["title","description","componentDocs"],setup(e){const t=G();return(a,o)=>{const l=T("SuiHeaderSubheader"),u=T("SuiHeader"),c=T("SuiDivider"),m=T("SuiIcon"),d=T("SuiMenuItem"),p=T("SuiPopup"),f=T("SuiMenu"),h=T("SuiContainer"),_=T("SuiSegment");return S(),we("div",null,[i(_,{id:"masthead",vertical:"",style:{"border-bottom":"1px solid #DDDDDD"}},{default:n(()=>[i(h,{class:"main"},{default:n(()=>[$("div",Nh,[i(u,{as:"h1"},{default:n(()=>[r($e(e.title)+" ",1),i(l,null,{default:n(()=>[r($e(e.description),1)]),_:1})]),_:1}),i(c,{hidden:""}),i(f,{icon:"",floated:"right"},{default:n(()=>[i(d,{as:"a",icon:"",ref_key:"el",ref:t,href:"https://github.com/nightswinger/vue-fomantic-ui"},{default:n(()=>[i(m,{name:"alternate github"})]),_:1},512),i(p,{trigger:t.value,position:"top right"},{default:n(()=>[r(" View Project on GitHub ")]),_:1},8,["trigger"])]),_:1})])]),_:1})]),_:1}),i(h,{class:"main"},{default:n(()=>[i(_,{basic:"",fitted:""},{default:n(()=>[e.componentDocs?(S(),we(ye,{key:0},[i(Ih,{docs:e.componentDocs},null,8,["docs"]),i(Oh,{title:e.title,links:e.componentDocs},null,8,["title","links"])],64)):rr("",!0),ji(a.$slots,"default",{},void 0,!0)]),_:3})]),_:3})])}}},lt=Ye(qh,[["__scopeId","data-v-d22eb33f"]]);var Es=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Gh(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var a=function o(){return this instanceof o?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};a.prototype=t.prototype}else a={};return Object.defineProperty(a,"__esModule",{value:!0}),Object.keys(e).forEach(function(o){var l=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(a,o,l.get?l:{enumerable:!0,get:function(){return e[o]}})}),a}var Jc={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var a=function(o){var l=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,u=0,c={},m={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function g(b){return b instanceof d?new d(b.type,g(b.content),b.alias):Array.isArray(b)?b.map(g):b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(g){return Object.prototype.toString.call(g).slice(8,-1)},objId:function(g){return g.__id||Object.defineProperty(g,"__id",{value:++u}),g.__id},clone:function g(b,y){y=y||{};var x,D;switch(m.util.type(b)){case"Object":if(D=m.util.objId(b),y[D])return y[D];x={},y[D]=x;for(var V in b)b.hasOwnProperty(V)&&(x[V]=g(b[V],y));return x;case"Array":return D=m.util.objId(b),y[D]?y[D]:(x=[],y[D]=x,b.forEach(function(H,z){x[z]=g(H,y)}),x);default:return b}},getLanguage:function(g){for(;g;){var b=l.exec(g.className);if(b)return b[1].toLowerCase();g=g.parentElement}return"none"},setLanguage:function(g,b){g.className=g.className.replace(RegExp(l,"gi"),""),g.classList.add("language-"+b)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(x){var g=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(x.stack)||[])[1];if(g){var b=document.getElementsByTagName("script");for(var y in b)if(b[y].src==g)return b[y]}return null}},isActive:function(g,b,y){for(var x="no-"+b;g;){var D=g.classList;if(D.contains(b))return!0;if(D.contains(x))return!1;g=g.parentElement}return!!y}},languages:{plain:c,plaintext:c,text:c,txt:c,extend:function(g,b){var y=m.util.clone(m.languages[g]);for(var x in b)y[x]=b[x];return y},insertBefore:function(g,b,y,x){x=x||m.languages;var D=x[g],V={};for(var H in D)if(D.hasOwnProperty(H)){if(H==b)for(var z in y)y.hasOwnProperty(z)&&(V[z]=y[z]);y.hasOwnProperty(H)||(V[H]=D[H])}var j=x[g];return x[g]=V,m.languages.DFS(m.languages,function(J,Y){Y===j&&J!=g&&(this[J]=V)}),V},DFS:function g(b,y,x,D){D=D||{};var V=m.util.objId;for(var H in b)if(b.hasOwnProperty(H)){y.call(b,H,b[H],x||H);var z=b[H],j=m.util.type(z);j==="Object"&&!D[V(z)]?(D[V(z)]=!0,g(z,y,null,D)):j==="Array"&&!D[V(z)]&&(D[V(z)]=!0,g(z,y,H,D))}}},plugins:{},highlightAll:function(g,b){m.highlightAllUnder(document,g,b)},highlightAllUnder:function(g,b,y){var x={callback:y,container:g,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};m.hooks.run("before-highlightall",x),x.elements=Array.prototype.slice.apply(x.container.querySelectorAll(x.selector)),m.hooks.run("before-all-elements-highlight",x);for(var D=0,V;V=x.elements[D++];)m.highlightElement(V,b===!0,x.callback)},highlightElement:function(g,b,y){var x=m.util.getLanguage(g),D=m.languages[x];m.util.setLanguage(g,x);var V=g.parentElement;V&&V.nodeName.toLowerCase()==="pre"&&m.util.setLanguage(V,x);var H=g.textContent,z={element:g,language:x,grammar:D,code:H};function j(Y){z.highlightedCode=Y,m.hooks.run("before-insert",z),z.element.innerHTML=z.highlightedCode,m.hooks.run("after-highlight",z),m.hooks.run("complete",z),y&&y.call(z.element)}if(m.hooks.run("before-sanity-check",z),V=z.element.parentElement,V&&V.nodeName.toLowerCase()==="pre"&&!V.hasAttribute("tabindex")&&V.setAttribute("tabindex","0"),!z.code){m.hooks.run("complete",z),y&&y.call(z.element);return}if(m.hooks.run("before-highlight",z),!z.grammar){j(m.util.encode(z.code));return}if(b&&o.Worker){var J=new Worker(m.filename);J.onmessage=function(Y){j(Y.data)},J.postMessage(JSON.stringify({language:z.language,code:z.code,immediateClose:!0}))}else j(m.highlight(z.code,z.grammar,z.language))},highlight:function(g,b,y){var x={code:g,grammar:b,language:y};if(m.hooks.run("before-tokenize",x),!x.grammar)throw new Error('The language "'+x.language+'" has no grammar.');return x.tokens=m.tokenize(x.code,x.grammar),m.hooks.run("after-tokenize",x),d.stringify(m.util.encode(x.tokens),x.language)},tokenize:function(g,b){var y=b.rest;if(y){for(var x in y)b[x]=y[x];delete b.rest}var D=new h;return _(D,D.head,g),f(g,D,b,D.head,0),w(D)},hooks:{all:{},add:function(g,b){var y=m.hooks.all;y[g]=y[g]||[],y[g].push(b)},run:function(g,b){var y=m.hooks.all[g];if(!(!y||!y.length))for(var x=0,D;D=y[x++];)D(b)}},Token:d};o.Prism=m;function d(g,b,y,x){this.type=g,this.content=b,this.alias=y,this.length=(x||"").length|0}d.stringify=function g(b,y){if(typeof b=="string")return b;if(Array.isArray(b)){var x="";return b.forEach(function(j){x+=g(j,y)}),x}var D={type:b.type,content:g(b.content,y),tag:"span",classes:["token",b.type],attributes:{},language:y},V=b.alias;V&&(Array.isArray(V)?Array.prototype.push.apply(D.classes,V):D.classes.push(V)),m.hooks.run("wrap",D);var H="";for(var z in D.attributes)H+=" "+z+'="'+(D.attributes[z]||"").replace(/"/g,"&quot;")+'"';return"<"+D.tag+' class="'+D.classes.join(" ")+'"'+H+">"+D.content+"</"+D.tag+">"};function p(g,b,y,x){g.lastIndex=b;var D=g.exec(y);if(D&&x&&D[1]){var V=D[1].length;D.index+=V,D[0]=D[0].slice(V)}return D}function f(g,b,y,x,D,V){for(var H in y)if(!(!y.hasOwnProperty(H)||!y[H])){var z=y[H];z=Array.isArray(z)?z:[z];for(var j=0;j<z.length;++j){if(V&&V.cause==H+","+j)return;var J=z[j],Y=J.inside,me=!!J.lookbehind,Ae=!!J.greedy,U=J.alias;if(Ae&&!J.pattern.global){var K=J.pattern.toString().match(/[imsuy]*$/)[0];J.pattern=RegExp(J.pattern.source,K+"g")}for(var ue=J.pattern||J,ne=x.next,Le=D;ne!==b.tail&&!(V&&Le>=V.reach);Le+=ne.value.length,ne=ne.next){var We=ne.value;if(b.length>g.length)return;if(!(We instanceof d)){var at=1,je;if(Ae){if(je=p(ue,Le,g,me),!je||je.index>=g.length)break;var ce=je.index,Qt=je.index+je[0].length,Rt=Le;for(Rt+=ne.value.length;ce>=Rt;)ne=ne.next,Rt+=ne.value.length;if(Rt-=ne.value.length,Le=Rt,ne.value instanceof d)continue;for(var X=ne;X!==b.tail&&(Rt<Qt||typeof X.value=="string");X=X.next)at++,Rt+=X.value.length;at--,We=g.slice(Le,Rt),je.index-=Le}else if(je=p(ue,0,We,me),!je)continue;var ce=je.index,se=je[0],he=We.slice(0,ce),Me=We.slice(ce+se.length),He=Le+We.length;V&&He>V.reach&&(V.reach=He);var ke=ne.prev;he&&(ke=_(b,ke,he),Le+=he.length),A(b,ke,at);var Be=new d(H,Y?m.tokenize(se,Y):se,U,se);if(ne=_(b,ke,Be),Me&&_(b,ne,Me),at>1){var k={cause:H+","+j,reach:He};f(g,b,y,ne.prev,Le,k),V&&k.reach>V.reach&&(V.reach=k.reach)}}}}}}function h(){var g={value:null,prev:null,next:null},b={value:null,prev:g,next:null};g.next=b,this.head=g,this.tail=b,this.length=0}function _(g,b,y){var x=b.next,D={value:y,prev:b,next:x};return b.next=D,x.prev=D,g.length++,D}function A(g,b,y){for(var x=b.next,D=0;D<y&&x!==g.tail;D++)x=x.next;b.next=x,x.prev=b,g.length-=D}function w(g){for(var b=[],y=g.head.next;y!==g.tail;)b.push(y.value),y=y.next;return b}if(!o.document)return o.addEventListener&&(m.disableWorkerMessageHandler||o.addEventListener("message",function(g){var b=JSON.parse(g.data),y=b.language,x=b.code,D=b.immediateClose;o.postMessage(m.highlight(x,m.languages[y],y)),D&&o.close()},!1)),m;var B=m.util.currentScript();B&&(m.filename=B.src,B.hasAttribute("data-manual")&&(m.manual=!0));function L(){m.manual||m.highlightAll()}if(!m.manual){var R=document.readyState;R==="loading"||R==="interactive"&&B&&B.defer?document.addEventListener("DOMContentLoaded",L):window.requestAnimationFrame?window.requestAnimationFrame(L):window.setTimeout(L,16)}return m}(t);e.exports&&(e.exports=a),typeof Es<"u"&&(Es.Prism=a),a.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(l,u){var c={};c["language-"+u]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[u]},c.cdata=/^<!\[CDATA\[|\]\]>$/i;var m={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:c}};m["language-"+u]={pattern:/[\s\S]+/,inside:a.languages[u]};var d={};d[l]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return l}),"i"),lookbehind:!0,greedy:!0,inside:m},a.languages.insertBefore("markup","cdata",d)}}),Object.defineProperty(a.languages.markup.tag,"addAttribute",{value:function(o,l){a.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[l,"language-"+l],inside:a.languages[l]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,function(o){var l=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+l.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+l.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+l.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+l.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:l,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var u=o.languages.markup;u&&(u.tag.addInlined("style","css"),u.tag.addAttribute("style","css"))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),a.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),a.languages.markup&&(a.languages.markup.tag.addInlined("script","javascript"),a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),a.languages.js=a.languages.javascript,function(){if(typeof a>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading…",l=function(B,L){return"✖ Error "+B+" while fetching file: "+L},u="✖ Error: File does not exist or is empty",c={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},m="data-src-status",d="loading",p="loaded",f="failed",h="pre[data-src]:not(["+m+'="'+p+'"]):not(['+m+'="'+d+'"])';function _(B,L,R){var g=new XMLHttpRequest;g.open("GET",B,!0),g.onreadystatechange=function(){g.readyState==4&&(g.status<400&&g.responseText?L(g.responseText):g.status>=400?R(l(g.status,g.statusText)):R(u))},g.send(null)}function A(B){var L=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(B||"");if(L){var R=Number(L[1]),g=L[2],b=L[3];return g?b?[R,Number(b)]:[R,void 0]:[R,R]}}a.hooks.add("before-highlightall",function(B){B.selector+=", "+h}),a.hooks.add("before-sanity-check",function(B){var L=B.element;if(L.matches(h)){B.code="",L.setAttribute(m,d);var R=L.appendChild(document.createElement("CODE"));R.textContent=o;var g=L.getAttribute("data-src"),b=B.language;if(b==="none"){var y=(/\.(\w+)$/.exec(g)||[,"none"])[1];b=c[y]||y}a.util.setLanguage(R,b),a.util.setLanguage(L,b);var x=a.plugins.autoloader;x&&x.loadLanguages(b),_(g,function(D){L.setAttribute(m,p);var V=A(L.getAttribute("data-range"));if(V){var H=D.split(/\r\n?|\n/g),z=V[0],j=V[1]==null?H.length:V[1];z<0&&(z+=H.length),z=Math.max(0,Math.min(z-1,H.length)),j<0&&(j+=H.length),j=Math.max(0,Math.min(j,H.length)),D=H.slice(z,j).join(`
`),L.hasAttribute("data-start")||L.setAttribute("data-start",String(z+1))}R.textContent=D,a.highlightElement(R)},function(D){L.setAttribute(m,f),R.textContent=D})}}),a.plugins.fileHighlight={highlight:function(L){for(var R=(L||document).querySelectorAll(h),g=0,b;b=R[g++];)a.highlightElement(b)}};var w=!1;a.fileHighlight=function(){w||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),w=!0),a.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Jc);var Qc=Jc.exports;const jh=Xc(Qc),Va={mounted(e,t){var l;const a=t.modifiers,o=t.value;a.script||o==="script"?e.className="language-javascript":e.className="language-markup",jh.highlightElement(e.children[0]),(l=e.children[0].parentElement)==null||l.setAttribute("tabindex","-1")}},Uh={style:{paddingTop:"3rem"}},Yh=$("p",null," Fomantic-UI Vue provides UI components based on Fomantic-UI. ",-1),Wh=$("code",null,`$ npm install vue-fomantic-ui
$ npm install fomantic-ui-css
# or
$ yarn add vue-fomantic-ui
$ yarn add fomantic-ui-css`,-1),Kh=[Wh],Xh={style:{paddingTop:"3rem",marginBottom:"3rem"}},Jh=$("p",null," You can import all components as Vue plugin. ",-1),Qh=$("code",null,`import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

const app = createApp(App)

app.use(FomanticUI)`,-1),Zh=[Qh],e_=$("br",null,null,-1),t_=$("p",null," Or pick a component indivisually, add it to your components option. ",-1),i_=$("code",null,`import { SuiButton } from 'vue-fomantic-ui'

export default {
  components: { SuiButton },
  // ...
}`,-1),n_=[i_],a_={__name:"GettingStarted",setup(e){return(t,a)=>{const o=T("SuiHeader");return S(),C(lt,{title:"Getting Started",description:"Getting up and running with Fomantic-UI Vue"},{default:n(()=>[$("section",Uh,[i(o,{as:"h2"},{default:n(()=>[r("Install")]),_:1}),Yh,i(o,{as:"h3"},{default:n(()=>[r("via Package Manager")]),_:1}),wi((S(),we("pre",null,Kh)),[[s(Va)]])]),$("section",Xh,[i(o,{as:"h2"},{default:n(()=>[r("Usage")]),_:1}),Jh,wi((S(),we("pre",null,Zh)),[[s(Va),void 0,void 0,{script:!0}]]),e_,t_,wi((S(),we("pre",null,n_)),[[s(Va),void 0,void 0,{script:!0}]])])]),_:1})}}};function Zc(e){var t,a,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=Zc(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function te(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=Zc(e))&&(o&&(o+=" "),o+=t);return o}const v=(e,t)=>e?t:"",Pe=(e,t)=>typeof e=="string"?`${e} ${t}`:"",De=(e,t)=>e===!0?t:e==="below"?`${t} ${e}`:typeof e=="string"?`${e} ${t}`:"",Ln=e=>e==="justified"?"justified":Pe(e,"aligned"),ci=(e,t)=>typeof e=="number"&&t?`${yl(e)} ${t}`:typeof e=="number"&&!t?yl(e):typeof e=="string"&&e==="equal"?`${e} width`:"",Mn=(e,t)=>e?`${yl(e)} wide ${t}`:"",yl=e=>["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"][e-1],ed=F({props:{active:Boolean,compact:Boolean,styled:Boolean},setup(e,{slots:t}){const a=G(e.active),o={active:e.styled?"0.5em 1em 1.5em":e.compact?"0.25em 0px 0.5em":"0.5em 0px 1em",inactive:e.styled?"0px 1em":"0px 0px"},l=G(),u=G(0),c=G(0),m=G(o.inactive),d=M(()=>te(v(a.value,"active"),"content")),p=M(()=>({maxHeight:`${u.value}px`,opacity:c.value,padding:m.value,overflow:"hidden",transition:"all 0.5s ease"})),f=()=>{if(!l.value)return 0;const h=window.getComputedStyle(l.value).fontSize;return l.value.scrollHeight+parseInt(h)*(e.styled?2:1.5)};return ct(()=>e.active,async h=>{h?(m.value=o.inactive,a.value=h,await en(()=>{l.value&&(m.value=o.active,u.value=f(),c.value=1)})):(m.value=o.inactive,u.value=0,c.value=0)}),()=>{var h;return i("div",{ref:l,class:d.value,style:p.value,onTransitionend:()=>{e.active||(a.value=!1)}},[(h=t.default)==null?void 0:h.call(t)])}}}),W=F({props:{as:String,bordered:Boolean,circular:Boolean,color:String,colored:Boolean,corner:[Boolean,String],disabled:Boolean,fitted:Boolean,flipped:String,inverted:Boolean,link:Boolean,loading:Boolean,name:String,primary:Boolean,rotated:String,secondary:Boolean,size:String},setup(e){return{classes:M(()=>te(e.color,e.name,e.size,v(e.primary,"primary"),v(e.secondary,"secondary"),v(e.bordered,"bordered"),v(e.circular,"circular"),v(e.colored,"colored"),v(e.disabled,"disabled"),v(e.fitted,"fitted"),v(e.inverted,"inverted"),v(e.link,"link"),v(e.loading,"loading"),Pe(e.flipped,"flipped"),Pe(e.rotated,"rotated"),De(e.corner,"corner"),"icon"))}},render(){let e=this.$props.as||"i";return ee(e,{"aria-hidden":!0,class:this.classes})}}),td=F({props:{compact:Boolean,index:Number,title:String,styled:Boolean},setup(e){const t=Ve("isTabActive"),a=Ve("updateActiveIndex"),o=M(()=>te(v(t(e.index),"active"),"title"));return{isTabActive:t,updateActiveIndex:a,titleClass:o}},render(){return i(ye,null,[i("div",{class:this.titleClass,onClick:()=>this.updateActiveIndex(this.index)},[i(W,{name:"dropdown"},null),this.title]),i(ed,{active:this.isTabActive(this.index),compact:this.compact,styled:this.styled},{default:()=>{var e,t;return[(t=(e=this.$slots).default)==null?void 0:t.call(e)]}})])}}),o_=F({props:{basic:Boolean,compact:[Boolean,String],fluid:Boolean,inverted:Boolean,multiple:Boolean,styled:Boolean},setup(e,{slots:t}){const a=e.multiple?G([]):G(-1),o=m=>e.multiple?a.value.includes(m):a.value===m,l=m=>{const d=o(m);e.multiple?d?a.value=a.value.filter(p=>p!==m):a.value.push(m):a.value=d?-1:m};ut("isTabActive",o),ut("updateActiveIndex",l);const u=M(()=>te("ui",v(e.basic,"basic"),v(e.fluid,"fluid"),v(e.inverted,"inverted"),v(e.styled,"styled"),De(e.compact,"compact"),"accordion")),c=M(()=>{var m;return(((m=t.default)==null?void 0:m.call(t))||[]).map((d,p)=>({...d,props:{...d.props,index:p},slots:d.children}))});return()=>i("div",{class:u.value},[c.value.map(m=>i(td,ui({compact:!!e.compact,styled:e.styled},m.props),m.slots))])}}),l_=F({render(){var e,t;return ee("div",{class:"accordion"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),r_=F({props:{active:Boolean},setup(e){return{computedClass:M(()=>te(v(e.active,"active"),"title"))}},render(){var e,t;return ee("div",{class:this.computedClass},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),s_={install(e){e.component("SuiAccordion",o_),e.component("SuiAccordionAccordion",l_),e.component("SuiAccordionContent",ed),e.component("SuiAccordionTab",td),e.component("SuiAccordionTitle",r_)}},u_=F({props:{centered:Boolean,test:String,unit:String},setup(e){return{computedClass:M(()=>te("ui",e.unit,v(e.centered,"centered"),v(!!e.test,"test"),"ad"))}},render(){var e,t,a,o;return this.$props.test?ee("div",{class:this.computedClass,"data-text":this.$props.test},(t=(e=this.$slots).default)==null?void 0:t.call(e)):ee("div",{class:this.computedClass},(o=(a=this.$slots).default)==null?void 0:o.call(a))}}),c_={install(e){e.component("SuiAdvertisement",u_)}},$t=F({props:{icon:String},setup(e){return{computedClass:M(()=>te(e.icon,"icon","divider"))}},render(){var e,t;return this.icon?i("i",{"aria-hidden":"true",class:this.computedClass},null):i("div",{class:"divider"},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),et=F({props:{active:Boolean,href:String,link:Boolean,to:String},setup(e){const t=M(()=>te(v(e.active,"active"),"section")),a=e.link||!!e.href;return{computedClass:t,isLink:a}},render(){let e="div";this.isLink?e="a":this.to&&(e=T("router-link"));const t={href:this.href,to:this.to};return i(e,ui({class:this.computedClass},t),{default:()=>{var a,o;return[(o=(a=this.$slots).default)==null?void 0:o.call(a)]}})}}),oi=F({props:{icon:String,inverted:Boolean,sections:{type:Array,default:()=>[]},size:String},setup(e){return{computedClass:M(()=>te("ui",e.size,v(e.inverted,"inverted"),"breadcrumb"))}},render(){var e,t;const a=()=>{var o;return(o=this.sections)==null?void 0:o.map((l,u)=>{const c={active:l.active,href:l.href,link:l.link,to:l.to};return i(ye,null,[i(et,c,{default:()=>[l.content]}),this.sections.length!==u+1&&i($t,{icon:this.icon},{default:()=>[r(" / ")]})])})};return i("div",{class:this.computedClass},[((t=(e=this.$slots).default)==null?void 0:t.call(e))||a()])}}),d_={install(e){e.component("SuiBreadcrumb",oi),e.component("SuiBreadcrumbDivider",$t),e.component("SuiBreadcrumbSection",et)}},zi=F({props:{as:String,size:String},setup(e){return{computedClass:M(()=>te(e.size,"icons"))}},render(){var e,t;let a=this.$props.as||"i";return ee(a,{class:this.computedClass},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),m_={install(e){e.component("SuiIcon",W),e.component("SuiIconGroup",zi)}},p_=()=>({icon:[Boolean,String]}),f_=e=>({iconClasses:M(()=>typeof e.icon=="boolean"&&e.icon||e.labeled&&e.icon?"icon":te({icon:e.icon&&!e.content}))}),g_=["right","left"],h_=()=>({labeled:[Boolean,String]}),__=e=>({labeledClasses:M(()=>typeof e.labeled=="boolean"&&e.labeled?"labeled":g_.includes(e.labeled)?`${e.labeled} labeled`:"")}),v_=["double","usual double","elastic"],id=()=>({loading:{type:[Boolean,String],validator:e=>v_.includes(e)||typeof e=="boolean"}}),nd=e=>({loadingClasses:M(()=>te(e.loading,{loading:e.loading}))}),P=F({props:{active:Boolean,animated:[Boolean,String],as:{type:String,default:"button"},attached:String,basic:Boolean,circular:Boolean,color:String,compact:Boolean,content:[String,Array],disabled:Boolean,facebook:Boolean,floated:String,fluid:Boolean,google:Boolean,linkedin:Boolean,instagram:Boolean,inverted:Boolean,negative:Boolean,positive:Boolean,primary:Boolean,secondary:Boolean,size:String,telegram:Boolean,tertiary:Boolean,toggle:Boolean,twitter:Boolean,vk:Boolean,whatsapp:Boolean,youtube:Boolean,...p_(),...h_(),...id()},setup(e){const{iconClasses:t}=f_(e),{labeledClasses:a}=__(e),{loadingClasses:o}=nd(e);return{classes:M(()=>te("ui",e.color,e.size,v(e.active,"active"),v(e.basic,"basic"),v(e.circular,"circular"),v(e.compact,"compact"),v(e.disabled,"disabled"),v(e.facebook,"facebook"),v(e.fluid,"fluid"),v(e.google,"google"),v(e.linkedin,"linkedin"),v(e.instagram,"instagram"),v(e.inverted,"inverted"),v(e.negative,"negative"),v(e.positive,"positive"),v(e.primary,"primary"),v(e.secondary,"secondary"),v(e.telegram,"telegram"),v(e.tertiary,"tertiary"),v(e.toggle,"toggle"),v(e.twitter,"twitter"),v(e.vk,"vk"),v(e.whatsapp,"whatsapp"),v(e.youtube,"youtube"),Pe(e.attached,"attached"),Pe(e.floated,"floated"),De(e.animated,"animated"),t.value,a.value,o.value,"button"))}},render(){var e,t;const a=this.attached?"div":this.as;return ee(a,{class:this.classes,role:"button"},[typeof this.icon=="string"&&ee(W,{name:this.icon}),this.content||((t=(e=this.$slots).default)==null?void 0:t.call(e))])}}),Ei=F({props:{hidden:Boolean,visible:Boolean},setup(e){return{computedClass:M(()=>te(v(e.hidden,"hidden"),v(e.visible,"visible"),"content"))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),ft=F({props:{attached:String,basic:Boolean,color:String,icon:Boolean,labeled:Boolean,size:String,vertical:Boolean,widths:Number},setup(e){return{computedClass:M(()=>te("ui",e.color,e.size,v(e.basic,"basic"),v(e.icon,"icon"),v(e.labeled,"labeled"),v(e.vertical,"vertical"),Pe(e.attached,"attached"),ci(e.widths,""),"buttons"))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),b_={install(e){e.component("SuiButton",P),e.component("SuiButtonContent",Ei),e.component("SuiButtonGroup",ft)}},S_=(e,t,a)=>{e.clickOutside=o=>{e===o.target||e.contains(o.target)||t.value(o,e)},document.body.addEventListener("click",e.clickOutside)},y_=(e,t,a)=>{document.body.removeEventListener("click",e.clickOutside)},gr={mounted:S_,unmounted:y_};function w_(e,t={}){const a=G(e.value?"open":"closed"),o=()=>a.value=e.value?"open":"closed";ct(e,m=>{a.value=m?"opening":"closing"});const l=m=>{m.addEventListener("animationend",o,!0)},u=m=>{m&&m.removeEventListener("animationend",o)},c=M((m="scale")=>{switch(a.value){case"opening":return`animating ${m} in`;case"open":return"visible active";case"closing":return`visible active animating ${m} out`;case"closed":return"hidden"}});return{setupAnimation:l,removeAnimation:u,computeAnimationClass:c}}const C_=F({name:"SuiCalendarDay",emits:["select-day"],props:{active:Boolean,date:null,disabled:Boolean,onSelectDay:Function},setup(e,{emit:t}){const a=G(!1),o=()=>{e.disabled||(a.value=!0)},l=()=>a.value=!1,u=()=>{e.disabled||t("select-day",e.date)},c=()=>{let d=new Date;return d.getFullYear()===e.date.year&&d.getMonth()===e.date.month&&d.getDate()===e.date.day},m=M(()=>te("link",v(a.value,"focus"),v(e.active&&!e.disabled,"active"),v(e.disabled,"adjacent disabled"),v(c(),"today")));return{onMouseEnter:o,onMouseLeave:l,onClick:u,computedClass:m}},render(){var e,t;return i("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:It(this.onClick,["stop"])},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),x_=F({name:"SuiCalendarDateTable",setup(){const{calendarDays:e,updateSelectMode:t,set:a,add:o,subtract:l,selectedDate:u,setSelectedDate:c,selectType:m,updateVisible:d,formatDate:p}=Ve(Bi);return{calendarDays:e,isEqualDay:f=>{if(!u.value)return!1;const h=u.value;return h.getFullYear()===f.year&&h.getMonth()===f.month&&h.getDate()===f.day},onSelectDay:f=>{if(a(f.year,"years"),a(f.month,"months"),a(f.day,"days"),m.value==="date"){let h=new Date(f.year,f.month,f.day);c(h),d(!1);return}t("hour")},updateSelectMode:t,formatDate:p,add:o,subtract:l}},render(){const e=()=>this.calendarDays.map((t,a)=>i("tr",null,[t.map(o=>i(C_,{active:this.isEqualDay(o),date:o,disabled:!o.currentMonth,onSelectDay:this.onSelectDay},{default:()=>[o.day]}))]));return i("table",{class:"ui celled center aligned unstackable table day seven column"},[i("thead",null,[i("tr",null,[i("th",{colspan:7},[i("span",{class:"link",onClick:It(()=>this.updateSelectMode("month"),["stop"])},[this.formatDate("date")]),i("span",{class:"prev link",onClick:()=>this.subtract(1,"months")},[i("i",{class:"chevron left icon"},null)]),i("span",{class:"next link",onClick:()=>this.add(1,"months")},[i("i",{class:"chevron right icon"},null)])])]),i("tr",null,[i("th",null,[r("S")]),i("th",null,[r("M")]),i("th",null,[r("T")]),i("th",null,[r("W")]),i("th",null,[r("T")]),i("th",null,[r("F")]),i("th",null,[r("S")])])]),i("tbody",null,[e()])])}}),Se=F({name:"SuiCalendarTableCell",emits:["click-cell"],props:{active:Boolean,today:Boolean,value:null,onClickCell:Function},setup(e){const t=G(!1),a=()=>t.value=!0,o=()=>t.value=!1,l=M(()=>te("link",v(e.active,"active"),v(e.today,"today"),v(t.value,"focus")));return{onMouseEnter:a,onMouseLeave:o,computedClass:l}},render(){var e,t;return i("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:It(()=>this.$emit("click-cell",this.value),["stop"])},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),A_=F({name:"SuiCalendarMonthTable",setup(){const{state:e,set:t,add:a,subtract:o,selectedDate:l,updateSelectMode:u}=Ve(Bi);return{state:e,add:a,subtract:o,updateSelectMode:u,isActive:c=>l.value?e.year===l.value.getFullYear()&&e.month===c:!1,isThisMonth:c=>{let m=new Date;return c===m.getMonth()&&e.year===m.getFullYear()},onClickCell:c=>{t(c,"months"),u("day")}}},render(){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=()=>Array(4).fill(0).map((a,o)=>i("tr",null,[i(Se,{value:o*3,active:this.isActive(o*3),today:this.isThisMonth(o*3),onClickCell:this.onClickCell},{default:()=>[e[o*3]]}),i(Se,{value:o*3+1,active:this.isActive(o*3+1),today:this.isThisMonth(o*3+1),onClickCell:this.onClickCell},{default:()=>[e[o*3+1]]}),i(Se,{value:o*3+2,active:this.isActive(o*3+2),today:this.isThisMonth(o*3+2),onClickCell:this.onClickCell},{default:()=>[e[o*3+2]]})]));return i("table",{class:"ui celled center aligned unstackable table month three column"},[i("thead",null,[i("tr",null,[i("th",{colspan:3},[i("span",{class:"link",onClick:It(()=>this.updateSelectMode("year"),["stop"])},[this.state.year]),i("span",{class:"prev link",onClick:()=>this.subtract(1,"years")},[i("i",{class:"chevron left icon"},null)]),i("span",{class:"next link",onClick:()=>this.add(1,"years")},[i("i",{class:"chevron right icon"},null)])])])]),i("tbody",null,[t()])])}}),k_=F({name:"SuiCalendarYearTable",setup(e){const{state:t,set:a,add:o,subtract:l,selectedDate:u,updateSelectMode:c}=Ve(Bi),m=()=>o(10,"years"),d=()=>l(10,"years"),p=M(()=>Math.round(t.year/10)*10+1);return{updateSelectMode:c,moveNextTwelveYears:m,movePrevTwelveYears:d,headerStartYear:p,isActive:f=>u.value?f===u.value.getFullYear():!1,isThisYear:f=>f===new Date().getFullYear(),onClickCell:f=>{a(f,"years"),c("day")}}},render(){return i("table",{class:"ui celled center aligned unstackable table year three column"},[i("thead",null,[i("tr",null,[i("th",{colspan:3},[i("span",{class:"link",onClick:It(()=>this.updateSelectMode("day"),["stop"])},[this.headerStartYear,r(" - "),this.headerStartYear+11]),i("span",{class:"prev link",onClick:this.movePrevTwelveYears},[i("i",{class:"chevron left icon"},null)]),i("span",{class:"next link",onClick:this.moveNextTwelveYears},[i("i",{class:"chevron right icon"},null)])])])]),i("tbody",null,[i("tr",null,[i(Se,{value:this.headerStartYear,active:this.isActive(this.headerStartYear),today:this.isThisYear(this.headerStartYear),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear]}),i(Se,{value:this.headerStartYear+1,active:this.isActive(this.headerStartYear+1),today:this.isThisYear(this.headerStartYear+1),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+1]}),i(Se,{value:this.headerStartYear+2,active:this.isActive(this.headerStartYear+2),today:this.isThisYear(this.headerStartYear+2),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+2]})]),i("tr",null,[i(Se,{value:this.headerStartYear+3,active:this.isActive(this.headerStartYear+3),today:this.isThisYear(this.headerStartYear+3),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+3]}),i(Se,{value:this.headerStartYear+4,active:this.isActive(this.headerStartYear+4),today:this.isThisYear(this.headerStartYear+4),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+4]}),i(Se,{value:this.headerStartYear+5,active:this.isActive(this.headerStartYear+5),today:this.isThisYear(this.headerStartYear+5),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+5]})]),i("tr",null,[i(Se,{value:this.headerStartYear+6,active:this.isActive(this.headerStartYear+6),today:this.isThisYear(this.headerStartYear+6),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+6]}),i(Se,{value:this.headerStartYear+7,active:this.isActive(this.headerStartYear+7),today:this.isThisYear(this.headerStartYear+7),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+7]}),i(Se,{value:this.headerStartYear+8,active:this.isActive(this.headerStartYear+8),today:this.isThisYear(this.headerStartYear+8),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+8]})]),i("tr",null,[i(Se,{value:this.headerStartYear+9,active:this.isActive(this.headerStartYear+9),today:this.isThisYear(this.headerStartYear+9),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+9]}),i(Se,{value:this.headerStartYear+10,active:this.isActive(this.headerStartYear+10),today:this.isThisYear(this.headerStartYear+10),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+10]}),i(Se,{value:this.headerStartYear+11,active:this.isActive(this.headerStartYear+11),today:this.isThisYear(this.headerStartYear+11),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+11]})])])])}}),B_=F({name:"SuiCalendarHourTable",setup(){const{updateSelectMode:e,state:t,set:a,add:o,subtract:l,formatDate:u,selectedDate:c}=Ve(Bi);return{updateSelectMode:e,formatDate:u,onPrevClick:()=>l(1,"days"),onNextClick:()=>o(1,"days"),onClickCell:m=>{a(m,"hours"),e("minute")},isActive:m=>{if(!c.value)return!1;let d=c.value.getFullYear(),p=c.value.getMonth(),f=c.value.getDate(),h=c.value.getHours();return t.year===d&&t.month===p&&t.day===f&&m===h}}},render(){return i("table",{class:"ui celled center aligned unstackable table hour four column"},[i("thead",null,[i("tr",null,[i("th",{colspan:4},[i("span",{class:"link",onClick:It(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),i("span",{class:"prev link",onClick:this.onPrevClick},[i("i",{class:"chevron left icon"},null)]),i("span",{class:"next link",onClick:this.onNextClick},[i("i",{class:"chevron right icon"},null)])])])]),i("tbody",null,[i("tr",null,[i(Se,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},{default:()=>[r("12:00 AM")]}),i(Se,{active:this.isActive(1),value:1,onClickCell:this.onClickCell},{default:()=>[r("1:00 AM")]}),i(Se,{active:this.isActive(2),value:2,onClickCell:this.onClickCell},{default:()=>[r("2:00 AM")]}),i(Se,{active:this.isActive(3),value:3,onClickCell:this.onClickCell},{default:()=>[r("3:00 AM")]})]),i("tr",null,[i(Se,{active:this.isActive(4),value:4,onClickCell:this.onClickCell},{default:()=>[r("4:00 AM")]}),i(Se,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},{default:()=>[r("5:00 AM")]}),i(Se,{active:this.isActive(6),value:6,onClickCell:this.onClickCell},{default:()=>[r("6:00 AM")]}),i(Se,{active:this.isActive(7),value:7,onClickCell:this.onClickCell},{default:()=>[r("7:00 AM")]})]),i("tr",null,[i(Se,{active:this.isActive(8),value:8,onClickCell:this.onClickCell},{default:()=>[r("8:00 AM")]}),i(Se,{active:this.isActive(9),value:9,onClickCell:this.onClickCell},{default:()=>[r("9:00 AM")]}),i(Se,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},{default:()=>[r("10:00 AM")]}),i(Se,{active:this.isActive(11),value:11,onClickCell:this.onClickCell},{default:()=>[r("11:00 AM")]})]),i("tr",null,[i(Se,{active:this.isActive(12),value:12,onClickCell:this.onClickCell},{default:()=>[r("12:00 PM")]}),i(Se,{active:this.isActive(13),value:13,onClickCell:this.onClickCell},{default:()=>[r("1:00 PM")]}),i(Se,{active:this.isActive(14),value:14,onClickCell:this.onClickCell},{default:()=>[r("2:00 PM")]}),i(Se,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},{default:()=>[r("3:00 PM")]})]),i("tr",null,[i(Se,{active:this.isActive(16),value:16,onClickCell:this.onClickCell},{default:()=>[r("4:00 PM")]}),i(Se,{active:this.isActive(17),value:17,onClickCell:this.onClickCell},{default:()=>[r("5:00 PM")]}),i(Se,{active:this.isActive(18),value:18,onClickCell:this.onClickCell},{default:()=>[r("6:00 PM")]}),i(Se,{active:this.isActive(19),value:19,onClickCell:this.onClickCell},{default:()=>[r("7:00 PM")]})]),i("tr",null,[i(Se,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},{default:()=>[r("8:00 PM")]}),i(Se,{active:this.isActive(21),value:21,onClickCell:this.onClickCell},{default:()=>[r("9:00 PM")]}),i(Se,{active:this.isActive(22),value:22,onClickCell:this.onClickCell},{default:()=>[r("10:00 PM")]}),i(Se,{active:this.isActive(23),value:23,onClickCell:this.onClickCell},{default:()=>[r("11:00 PM")]})])])])}});function Ft(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!wt(e)}const $_=F({name:"SuiCalendarMinuteTable",setup(){const{state:e,set:t,add:a,subtract:o,formatDate:l,updateSelectMode:u,updateVisible:c,selectedDate:m}=Ve(Bi);return{add:a,subtract:o,formatDate:l,updateSelectMode:u,getTimeLabel:d=>{let p=e.hour%12,f=e.hour>12?"PM":"AM",h=d.toString().padStart(2,"0");return e.hour===0?`12:${h} AM`:e.hour===12?`12:${h} PM`:`${p}:${h} ${f}`},onClickCell:d=>{t(d,"minutes"),m.value=new Date(e.year,e.month,e.day,e.hour,e.minute),c(!1)},isActive:d=>{if(!m.value)return!1;let p=m.value.getFullYear(),f=m.value.getMonth(),h=m.value.getDate(),_=m.value.getHours(),A=m.value.getMinutes();return e.year===p&&e.month===f&&e.day===h&&e.hour===_&&d===A}}},render(){let e,t,a,o,l,u,c,m,d,p,f,h;return i("table",{class:"ui celled center aligned unstackable table minute three column"},[i("thead",null,[i("tr",null,[i("th",{colspan:3},[i("span",{class:"link",onClick:It(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),i("span",{class:"prev link",onClick:()=>this.subtract(1,"days")},[i("i",{class:"chevron left icon"},null)]),i("span",{class:"next link",onClick:()=>this.add(1,"days")},[i("i",{class:"chevron right icon"},null)])])])]),i("tbody",null,[i("tr",null,[i(Se,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},Ft(e=this.getTimeLabel(0))?e:{default:()=>[e]}),i(Se,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},Ft(t=this.getTimeLabel(5))?t:{default:()=>[t]}),i(Se,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},Ft(a=this.getTimeLabel(10))?a:{default:()=>[a]})]),i("tr",null,[i(Se,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},Ft(o=this.getTimeLabel(15))?o:{default:()=>[o]}),i(Se,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},Ft(l=this.getTimeLabel(20))?l:{default:()=>[l]}),i(Se,{active:this.isActive(25),value:25,onClickCell:this.onClickCell},Ft(u=this.getTimeLabel(25))?u:{default:()=>[u]})]),i("tr",null,[i(Se,{active:this.isActive(30),value:30,onClickCell:this.onClickCell},Ft(c=this.getTimeLabel(30))?c:{default:()=>[c]}),i(Se,{active:this.isActive(35),value:35,onClickCell:this.onClickCell},Ft(m=this.getTimeLabel(35))?m:{default:()=>[m]}),i(Se,{active:this.isActive(40),value:40,onClickCell:this.onClickCell},Ft(d=this.getTimeLabel(40))?d:{default:()=>[d]})]),i("tr",null,[i(Se,{active:this.isActive(45),value:45,onClickCell:this.onClickCell},Ft(p=this.getTimeLabel(45))?p:{default:()=>[p]}),i(Se,{active:this.isActive(50),value:50,onClickCell:this.onClickCell},Ft(f=this.getTimeLabel(50))?f:{default:()=>[f]}),i(Se,{active:this.isActive(55),value:55,onClickCell:this.onClickCell},Ft(h=this.getTimeLabel(55))?h:{default:()=>[h]})])])])}}),T_=F({name:"SuiCalendarBody",setup(){const e=G(null),{visible:t,selectMode:a}=Ve(Bi),{setupAnimation:o,removeAnimation:l,computeAnimationClass:u}=w_(t);si(()=>o(e.value)),ki(()=>l(e.value));const c=M(()=>te("ui popup calendar","bottom left","transition",u.value));return{rootRef:e,computedClass:c,selectMode:a}},render(){const e=()=>{switch(this.selectMode){case"day":return i(x_,null,null);case"month":return i(A_,null,null);case"year":return i(k_,null,null);case"hour":return i(B_,null,null);case"minute":return i($_,null,null)}};return i("div",{ref:t=>this.rootRef=t,class:this.computedClass,style:"inset: 38px auto auto 0px;"},[e()])}}),L_=F({name:"SuiCalendarInput",props:{placeholder:String,value:null},setup(e){const{visible:t,updateVisible:a,updateSelectMode:o,set:l,state:u,formatCalendarDate:c}=Ve(Bi);return{visible:t,formatCalendarDate:c,onClick:()=>{t.value||(o("day"),e.value&&(l(e.value.getFullYear(),"years"),l(e.value.getMonth(),"months"))),a(!t.value)}}},render(){return i("input",{type:"text",placeholder:this.placeholder,value:this.formatCalendarDate(this.value),onClick:()=>this.onClick()},null)}}),I_=(e,t)=>{let a=new Date;a.setDate(1),a.setMonth(t),a.setFullYear(e);let o=a.getDay();return o>=7?o-7:o},D_=(e,t)=>{let a,o;return t===0?(a=11,o=e-1):(a=t-1,o=e),32-new Date(o,a,32).getDate()},Ho=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e];function E_(){const e=G(!1),t=(B=!1)=>e.value=B,a=new Date;function o(B){if(!B)return;let L=B.getFullYear(),R=Ho(B.getMonth()),g=B.getDate(),b=B.getHours(),y=B.getMinutes(),x=b>11?"PM":"AM";b=b%12,b===0&&(b=12);let D=y.toString().padStart(2,"0");return`${R} ${g}, ${L} ${b}:${D} ${x}`}const l=G("default"),u=G("day");function c(B){u.value=B}const m=G(null),d=B=>{m.value=B},p=li({year:a.getFullYear(),month:a.getMonth(),day:a.getDate(),hour:a.getHours(),minute:a.getMinutes()}),f=(B,L)=>{switch(L){case"years":p.year=B;break;case"months":p.month=B;break;case"days":p.day=B;break;case"hours":p.hour=B;break;case"minutes":p.minute=B}},h=(B,L)=>{let R=new Date(p.year,p.month,p.day,p.hour);switch(L){case"years":R.setFullYear(R.getFullYear()+B);break;case"months":R.setMonth(R.getMonth()+B);break;case"days":R.setDate(R.getDate()+B);break;case"hours":R.setHours(R.getHours()+B);break}p.year=R.getFullYear(),p.month=R.getMonth(),p.day=R.getDate(),p.hour=R.getHours()},_=(B,L)=>{let R=new Date(p.year,p.month,p.day,p.hour);switch(L){case"years":R.setFullYear(R.getFullYear()-B);break;case"months":R.setMonth(R.getMonth()-B);break;case"days":R.setDate(R.getDate()-B);break;case"hours":R.setHours(R.getHours()-B);break}p.year=R.getFullYear(),p.month=R.getMonth(),p.day=R.getDate(),p.hour=R.getHours()},A=(B="default")=>B==="date"?`${Ho(p.month)} ${p.year}`:`${Ho(p.month)} ${p.day}, ${p.year}`,w=M(()=>{let B=p.month,L=p.year;B>11&&(B=B%11-1,L+=1);let R=[],g=I_(L,B),b=32-new Date(L,B,32).getDate(),y=D_(L,B),x=1;for(let D=0;D<6;D++){let V=[];if(D===0){for(let z=y-g+1;z<=y;z++){let j=B===0?11:B-1,J=B===0?L-1:L;V.push({day:z,month:j,year:J,currentMonth:!1})}let H=7-V.length;for(let z=0;z<H;z++)V.push({day:x,month:B,year:L,currentMonth:!0}),x++}else for(let H=0;H<7;H++){if(x>b){let z=B===11?0:B+1,j=B===11?L+1:L;V.push({day:x-b,month:z,year:j,currentMonth:!1})}else V.push({day:x,month:B,year:L,currentMonth:!0});x++}R.push(V)}return R});return{visible:e,updateVisible:t,calendarDays:w,formatCalendarDate:o,selectMode:u,updateSelectMode:c,selectType:l,selectedDate:m,setSelectedDate:d,state:p,set:f,add:h,subtract:_,formatDate:A}}const Bi=Symbol("useCalendar"),R_=F({directives:{clickoutside:gr},emits:["update:modelValue"],props:{modelValue:null,placeholder:String},setup(e,{emit:t}){const a=E_();ut(Bi,a);const{updateVisible:o,selectedDate:l}=a;return ct(l,u=>{t("update:modelValue",u)}),{updateVisible:o}},render(){return wi(i("div",{class:"ui calendar"},[i("div",{class:"ui input left icon"},[i(T_,null,null),i("i",{class:"calendar icon"},null),i(L_,{placeholder:this.placeholder,value:this.modelValue},null)])]),[[po("clickoutside"),()=>this.updateVisible(!1)]])}}),P_={install:e=>{e.component("SuiCalendar",R_)}},z_=["mini","tiny","small","medium","large","big","huge","massive"],In=()=>({size:{type:String,validator:e=>z_.includes(e)}}),Dn=e=>({sizeClass:M(()=>e.size)}),F_=F((e,{slots:t})=>{const{loadingClasses:a}=nd(e),{sizeClass:o}=Dn(e),l=M(()=>te("ui",e.color,v(e.centered,"centered"),v(e.disabled,"disabled"),v(e.fluid,"fluid"),v(e.horizontal,"horizontal"),v(e.link,"link"),v(e.primary,"primary"),v(e.raised,"raised"),v(e.secondary,"secondary"),a.value,o.value,"card"));return()=>{var u,c;return e.href||e.link?i("a",{class:l.value,href:e.href},[(u=t.default)==null?void 0:u.call(t)]):i("div",{class:l.value},[(c=t.default)==null?void 0:c.call(t)])}},{props:{centered:Boolean,color:String,disabled:Boolean,fluid:Boolean,horizontal:Boolean,href:String,link:Boolean,primary:Boolean,raised:Boolean,secondary:Boolean,...id(),...In()}}),V_=F((e,{slots:t})=>{const a=M(()=>te(v(e.extra,"extra"),"content"));return()=>{var o,l,u,c;return i("div",{class:a.value},[e.header&&i("div",{class:"header"},[e.header]),t.header&&i("div",{class:"header"},[(o=t.header)==null?void 0:o.call(t)]),t.meta&&i("div",{class:"meta"},[(l=t.meta)==null?void 0:l.call(t)]),t.description&&i("div",{class:"description"},[(u=t.description)==null?void 0:u.call(t)]),(c=t.default)==null?void 0:c.call(t)])}},{props:{extra:Boolean,header:String}}),M_=F({props:{textAlign:String},setup(e){return{computedClass:M(()=>te(Pe(e.textAlign,"aligned"),"description"))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),H_=F({props:{basic:Boolean,centered:Boolean,doubling:Boolean,horizontal:Boolean,inverted:Boolean,itemsPerRow:Number,stackable:Boolean},setup(e){return{classes:M(()=>te("ui",v(e.basic,"basic"),v(e.centered,"centered"),v(e.doubling,"doubling"),v(e.horizontal,"horizontal"),v(e.inverted,"inverted"),v(e.stackable,"stackable"),ci(e.itemsPerRow,""),"cards"))}},render(){var e,t;return i("div",{class:this.classes},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),O_=F({props:{textAlign:String},setup(e){return{computedClass:M(()=>te(Pe(e.textAlign,"aligned"),"header"))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),N_=F({render(){var e,t;return ee("div",{class:"meta"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),q_={install(e){e.component("SuiCard",F_),e.component("SuiCardContent",V_),e.component("SuiCardDescription",M_),e.component("SuiCardGroup",H_),e.component("SuiCardHeader",O_),e.component("SuiCardMeta",N_)}},ad=F({emits:["update:modelValue","change","click"],props:{disabled:Boolean,indeterminate:Boolean,label:String,modelValue:null,radio:Boolean,readOnly:Boolean,slider:Boolean,toggle:Boolean,value:null},setup(e,{emit:t}){const a=M(()=>te("ui",!e.label&&"fitted",v(e.disabled,"disabled"),v(e.indeterminate,"indeterminate"),v(e.radio,"radio"),v(e.readOnly,"read-only"),v(e.slider,"slider"),v(e.toggle,"toggle"),"checkbox")),o=M(()=>Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue);return{computedClass:a,checked:o,onClick:l=>{if(e.disabled||e.readOnly)return;let u;e.value?o.value?u=e.modelValue.filter(c=>e.value!==c):u=e.modelValue?[...e.modelValue,e.value]:[e.value]:u=!e.modelValue,t("change",l),t("click",l),t("update:modelValue",u)}}},render(){return i("div",{class:this.computedClass,onClick:this.onClick},[i("input",{type:this.radio?"radio":"checkbox",class:"hidden",checked:this.checked,readonly:!0},null),i("label",null,[this.label])])}}),G_={install(e){e.component("SuiCheckbox",ad)}},od=F({name:"SuiCommentAvatar",props:{as:String,src:String},render(){let e=this.$props.as||"div";return this.src?ee(e,{class:"avatar"},ee("img",{src:this.$props.src})):i("div",{class:"avatar"},[this.$slots.default&&this.$slots.default()])}});function j_(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!wt(e)}const U_=F({name:"SuiComment",render(){let e;return i("div",{class:"comment"},[this.$slots.avatar&&i(od,{as:"a"},j_(e=this.$slots.avatar())?e:{default:()=>[e]}),i("div",{class:"content"},[this.$slots.author&&i("a",{class:"author"},[this.$slots.author()]),this.$slots.metadata&&i("div",{class:"metadata"},[this.$slots.metadata()]),this.$slots.text&&i("div",{class:"text"},[this.$slots.text()]),this.$slots.actions&&i("div",{class:"actions"},[this.$slots.actions()])]),this.$slots.default&&this.$slots.default()])}}),Y_=F({props:{active:Boolean},setup(e){const{active:t}=e;return{computedClass:M(()=>te(v(t,"active")))}},render(){var e,t,a,o;return this.computedClass?ee("a",{class:this.computedClass},(t=(e=this.$slots).default)==null?void 0:t.call(e)):ee("a",{},(o=(a=this.$slots).default)==null?void 0:o.call(a))}}),W_=F({render(){var e,t;return ee("div",{class:"actions"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),K_=F({props:{as:String},render(){var e,t;let a=this.$props.as||"div";return ee(a,{class:"author"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),X_=F({render(){var e,t;return ee("div",{class:"content"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),J_=F({props:{collapsed:Boolean,inverted:Boolean,minimal:Boolean,size:String,threaded:Boolean},setup(e){return{computedClass:M(()=>te("ui",e.size,v(e.collapsed,"collapsed"),v(e.inverted,"inverted"),v(e.minimal,"minimal"),v(e.threaded,"threaded"),"comments"))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),Q_=F({render(){var e,t;return ee("div",{class:"metadata"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),Z_=F({render(){var e,t;return ee("div",{class:"text"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),ev={install(e){e.component("SuiComment",U_),e.component("SuiCommentAction",Y_),e.component("SuiCommentActions",W_),e.component("SuiCommentAuthor",K_),e.component("SuiCommentAvatar",od),e.component("SuiCommentContent",X_),e.component("SuiCommentGroup",J_),e.component("SuiCommentMetadata",Q_),e.component("SuiCommentText",Z_)}},Ni=F({props:{fluid:Boolean,text:Boolean,textAlign:String},setup(e){return{computedClass:M(()=>te("ui",v(e.fluid,"fluid"),v(e.text,"text"),Ln(e.textAlign),"container"))}},render(){var e,t;return ee("div",{class:this.computedClass},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),tv={install(e){e.component("SuiContainer",Ni)}},Yt=F({props:{active:Boolean,inverted:Boolean,page:Boolean,simple:Boolean,verticalAlign:String},setup(e){return{computedClass:M(()=>te("ui",v(e.active,"active"),v(e.inverted,"inverted"),v(e.page,"page"),v(e.simple,"simple"),Pe(e.verticalAlign,"aligned"),"dimmer"))}},render(){var e,t;return ee("div",{class:this.computedClass},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),iv=F((e,{slots:t})=>{const a=M(()=>te("ui",v(e.blurring,"blurring"),"dimmable","segment"));return()=>{var o;return i("div",{class:a.value},[(o=t.default)==null?void 0:o.call(t)])}},{props:{blurring:Boolean}}),nv={install(e){e.component("SuiDimmer",Yt),e.component("SuiDimmerDimmable",iv)}},Fe=F({props:{clearing:Boolean,fitted:Boolean,hidden:Boolean,horizontal:Boolean,inverted:Boolean,section:Boolean,textAlign:String,vertical:Boolean,...In()},setup(e){const{sizeClass:t}=Dn(e);return{classes:M(()=>te("ui",t.value,v(e.clearing,"clearing"),v(e.fitted,"fitted"),v(e.hidden,"hidden"),v(e.horizontal,"horizontal"),v(e.inverted,"inverted"),v(e.section,"section"),v(e.vertical,"vertical"),Pe(e.textAlign,"aligned"),"divider"))}},render(){var e,t;return ee("div",{class:this.classes},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),av={install(e){e.component("SuiDivider",Fe)}},ov=(e,t)=>e.map(a=>a[t]),ld=["top","middle","bottom"],lv={verticalAlign:{type:String,validator:e=>ld.includes(e)}};function rv(e){return{verticalAlignClass:M(()=>e.verticalAlign&&ld.includes(e.verticalAlign)?`${e.verticalAlign} aligned`:null)}}const sv=["left","right"],uv={floated:{type:String,validator:e=>sv.includes(e)}};function cv(e){return{floatedClass:M(()=>e.floated&&(e.floated==="left"||e.floated==="right")?`${e.floated} floated`:null)}}const N=F({props:{as:String,attached:String,basic:Boolean,circular:Boolean,color:String,corner:String,empty:Boolean,floating:Boolean,horizontal:Boolean,icon:String,image:Boolean,inverted:Boolean,pointing:[Boolean,String],prompt:Boolean,ribbon:[Boolean,String],size:String,tag:Boolean},setup(e,{slots:t}){const a=M(()=>te("ui",e.size,e.color,v(e.basic,"basic"),v(e.circular,"circular"),v(e.empty,"empty"),v(e.floating,"floating"),v(e.horizontal,"horizontal"),v(!!e.icon&&t.default===void 0,"icon"),v(e.image,"image"),v(e.inverted,"inverted"),v(e.prompt,"prompt"),v(e.tag,"tag"),Pe(e.attached,"attached"),Pe(e.corner,"corner"),De(e.pointing,"pointing"),De(e.ribbon,"ribbon"),"label"));let o=e.as||"div";return e.icon?()=>{var l;return ee(o,{class:a.value},[ee(W,{name:e.icon}),(l=t.default)==null?void 0:l.call(t)])}:()=>{var l;return ee(o,{class:a.value},(l=t.default)==null?void 0:l.call(t))}}}),En=F({render(){var e,t;return i("div",{class:"detail"},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),Rn=F({props:{basic:Boolean,circular:Boolean,color:String,size:String,tag:Boolean},setup(e,{slots:t}){const a=M(()=>te("ui",e.color,e.size,v(e.basic,"basic"),v(e.circular,"circular"),v(e.tag,"tag"),"labels"));return()=>{var o;return ee("div",{class:a.value},(o=t.default)==null?void 0:o.call(t))}}}),dv={install(e){e.component("SuiLabel",N),e.component("SuiLabelDetail",En),e.component("SuiLabelGroup",Rn)}},le=F({props:{as:String,avatar:Boolean,bordered:Boolean,centered:Boolean,circular:Boolean,disabled:Boolean,fluid:Boolean,hidden:Boolean,href:String,inline:Boolean,label:Object,target:String,wrapped:Boolean,rounded:Boolean,size:String,spaced:[Boolean,String],src:String,...lv,...uv},setup(e,{slots:t}){const{verticalAlignClass:a}=rv(e),{floatedClass:o}=cv(e),l=M(()=>te("ui",e.size,a.value,o.value,v(e.avatar,"avatar"),v(e.bordered,"bordered"),v(e.centered,"centered"),v(e.circular,"circular"),v(e.disabled,"disabled"),v(e.fluid,"fluid"),v(e.hidden,"hidden"),v(e.inline,"inline"),v(e.rounded,"rounded"),De(e.spaced,"spaced"),"image"));if(e.as==="a"||e.as==="router-link"){let u=e.as;return e.as==="router-link"&&(u=T(e.as)),()=>{var c;return ee(u,{class:l.value,href:e.href,target:e.target&&e.target},ee("img",{src:e.src},(c=t.default)==null?void 0:c.call(t)))}}return e.wrapped?()=>{var u;return ee("div",{class:l.value},ee("img",{src:e.src},(u=t.default)==null?void 0:u.call(t)))}:e.label?()=>ee("div",{class:l.value},[ee("img",{src:e.src}),ee(N,{...e.label})]):()=>i("img",{class:l.value,src:e.src},null)}}),wl=F({props:{size:String},setup(e,{slots:t}){const a=M(()=>te("ui",e.size,"images"));return()=>{var o;return ee("div",{class:a.value},(o=t.default)==null?void 0:o.call(t))}}}),mv={install(e){e.component("SuiImage",le),e.component("SuiImageGroup",wl)}},pv=F({name:"SuiDropdownText",emits:["remove"],props:{clearable:Boolean,filtered:Boolean,icon:{type:String,default:"dropdown"},item:[Object,String],placeholder:String,text:String,onRemove:Function},setup(e){return{computedClass:M(()=>te(v(e.filtered,"filtered"),v(!e.text&&!e.item||Array.isArray(e.item)&&e.item.length===0,"default"),"text"))}},render(){var e,t;let a;if(this.item&&!Array.isArray(this.item))if(typeof this.item=="object"){const{flag:u,text:c}=this.item;a=i(ye,null,[u&&i("i",{class:`${u} flag`},null),c])}else a=this.item;else a=this.text||this.placeholder;const o=typeof this.item=="object"?(e=this.item)==null?void 0:e.image:null,l=typeof this.item=="object"?(t=this.item)==null?void 0:t.label:null;return i(ye,null,[i("div",{class:this.computedClass},[o&&i(le,o,null),l&&i(N,l,null),a]),i("i",{class:`${this.icon} icon`},null),this.$props.clearable&&i("i",{class:"remove icon",onClick:It(()=>this.$emit("remove"),["stop"])},null)])}}),fv=e=>{const t=li({visible:!1,animating:!1,direction:"down",multiple:e.multiple});return ct(()=>t.visible,()=>{t.animating=!0,setTimeout(()=>t.animating=!1,200)}),{state:t,show:()=>!t.animating&&(t.visible=!0),hide:()=>{t.animating||(t.visible=!1)}}};function gv(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!wt(e)}const hv=F({directives:{clickoutside:gr},emits:["update:modelValue"],props:{button:Boolean,clearable:Boolean,compact:Boolean,floating:Boolean,fluid:Boolean,icon:String,inline:Boolean,item:Boolean,labeled:Boolean,modelValue:[Object,String],multiple:Boolean,options:Array,placeholder:String,pointing:[Boolean,String],scrolling:Boolean,selection:Boolean,search:Boolean,searchInMenu:Boolean,simple:Boolean,text:String},setup(e,{emit:t}){const a=fv(e);ut("useDropdown",a);const{state:o,show:l,hide:u}=a,c=M(()=>te("ui",v(e.button,"button"),v(e.clearable,"clearable"),v(e.compact,"compact"),v(e.floating,"floating"),v(e.fluid,"fluid"),v(!!e.icon,"icon"),v(e.inline,"inline"),v(e.item,"item"),v(e.labeled,"labeled"),v(e.multiple,"multiple"),v(e.search,"search"),v(e.scrolling,"scrolling"),v(e.selection,"selection"),v(e.simple,"simple"),De(e.pointing,"pointing"),"dropdown",v(o.visible,"active visible"),v(o.direction==="up","upward"))),m=()=>{var L;if(o.visible)return u();(L=_.value)==null||L.focus(),l()},d=()=>{e.search&&_.value&&_.value.focus(),l()},p=()=>u(),f=G(""),h=M(()=>{const L=f.value.toLowerCase();return e.options.filter(R=>{const g=typeof R=="object"?R.text:R,b=g.toLowerCase().includes(L);if(!e.multiple)return b;if(Array.isArray(e.modelValue)){const y=typeof R=="object"?ov(e.modelValue,"text").includes(g):e.modelValue.includes(g);return b&&!y}return b})}),_=G(null),A=L=>f.value=L.target.value,w=L=>{var R;if(f.value="",e.search&&((R=_.value)==null||R.focus()),e.multiple){let g=Array.isArray(e.modelValue)?[...e.modelValue,L]:[L];return t("update:modelValue",g)}return t("update:modelValue",L)},B=L=>{if(Array.isArray(e.modelValue)){const R=e.modelValue.findIndex(g=>g===L);if(R>-1){let g=Object.assign(e.modelValue);g.splice(R,1),t("update:modelValue",g)}}};return ut("selection",e.selection),{computedClass:c,onClick:m,openMenu:d,closeMenu:p,filteredText:f,filteredOptions:h,inputRef:_,onInput:A,onSelect:w,removeItem:B}},render(){var e,t;const a=()=>{if(Array.isArray(this.$props.modelValue))return this.$props.modelValue.map(c=>typeof c=="object"?i("a",{class:"ui label"},[c.flag&&i("i",{class:`${c.flag} flag`},null),c.text,i("i",{class:"delete icon",onClick:It(()=>this.removeItem(c),["stop"])},null)]):i("a",{class:"ui label"},[c,i("i",{class:"delete icon",onClick:It(()=>this.removeItem(c),["stop"])},null)]))},o=()=>this.filteredOptions.filter(c=>this.$props.multiple&&Array.isArray(this.$props.modelValue)?!this.$props.modelValue.includes(c):!0).map(c=>i(rd,{item:c,active:this.$props.modelValue&&typeof c=="object"?c.text===this.$props.modelValue.text:c===this.$props.modelValue,text:typeof c=="object"?c.text:c,flag:typeof c=="object"&&Object.keys(c).includes("flag")?c.flag:"",image:c.image,label:c.label,disabled:c.disabled,onSelect:this.onSelect},null)),l=()=>{let c={clearable:this.clearable,filtered:this.filteredText.length>0,icon:this.icon,item:this.modelValue,placeholder:this.placeholder,text:this.text};return i(pv,ui(c,{onRemove:()=>this.$emit("update:modelValue",null)}),null)},u=()=>{let c;return i(sd,{search:this.$props.searchInMenu,onSearch:this.onInput},gv(c=o())?c:{default:()=>[c]})};return wi(i("div",{class:this.computedClass,onClick:this.onClick},[this.$props.multiple&&a(),this.search&&i("input",{ref:c=>this.inputRef=c,type:"text",class:"search",autocomplete:"off",tabindex:0,value:this.filteredText,onInput:c=>this.onInput(c)},null),this.search&&this.multiple&&i("span",{class:"sizer"},null),l(),((t=(e=this.$slots).default)==null?void 0:t.call(e))||u()]),[[po("clickoutside"),this.closeMenu]])}}),rd=F({emits:["select"],props:{active:Boolean,flag:String,description:String,icon:String,image:Object,item:[Object,String],label:Object,text:String,disabled:Boolean,onSelect:Function},setup(e,{emit:t}){const{state:a,hide:o}=Ve("useDropdown");return{computedClass:M(()=>te(v(e.active,"active"),v(e.disabled,"disabled"),"item")),onClick:()=>{a.multiple||o(),t("select",e.item?e.item:e.text)}}},render(){return i("div",{class:this.computedClass,onClick:It(this.onClick,["stop"])},[this.flag&&i("i",{class:`${this.flag} flag`},null),this.icon&&i("i",{class:`${this.icon} icon`},null),this.image&&i(le,this.image,null),this.label&&i(N,this.label,null),this.description&&i("span",{class:"description"},[this.description]),this.text])}}),sd=F({emits:["search"],props:{search:Boolean,onSearch:Function},setup(e,{emit:t,slots:a}){const{state:o}=Ve("useDropdown"),l=G(null),u=M(()=>{let m=()=>o.visible?`animating slide ${o.direction} in visible`:`animating slide ${o.direction} out visible`;return te("menu","transition",v(o.visible,"visible"),v(!o.visible&&!o.animating,"hidden"),v(o.animating,m()))});ct(()=>o.visible,m=>{if(!m||!l.value)return;let d=l.value.parentElement;const{top:p,height:f}=d==null?void 0:d.getBoundingClientRect(),h=p-c.value.length*37,_=document.documentElement.clientHeight-p-f-c.value.length*37;o.direction=h>_?"up":"down"});const c=M(()=>{var m;let d=[],p=(m=a.default)==null?void 0:m.call(a);return p&&p.forEach(f=>{f.type.name==="SuiSelectItem"&&d.push(f)}),d});return{container:l,computedClass:u,onSearchInput:m=>t("search",m)}},render(){var e,t,a,o;const l=()=>i(ye,null,[i("div",{class:"ui left icon input",onClick:It(()=>{},["stop"])},[i("input",{type:"text",onInput:u=>this.onSearchInput(u)},null),i("i",{class:"search icon"},null)]),i("div",{class:"ui divider"},null)]);return i("div",{ref:u=>this.container=u,class:this.computedClass},[this.$slots.header&&i("div",{class:"header"},[(t=(e=this.$slots).header)==null?void 0:t.call(e)]),this.$props.search&&l(),(o=(a=this.$slots).default)==null?void 0:o.call(a)])}}),_v={install(e){e.component("SuiDropdown",hv),e.component("SuiDropdownItem",rd),e.component("SuiDropdownMenu",sd)}},vv=F({props:{active:Boolean,aspectRatio:Boolean,autoplay:Boolean,id:String,placeholder:String,source:String,url:String},setup(e){const t=G(e.active),a=()=>{t.value=!t.value},o=()=>e.source==="youtube"?[`//www.youtube.com/embed/${e.id}`,"?autohide=true",`&amp;autoplay=${e.autoplay}`,"&amp;jsapi=false"].join(""):e.url,l=M(()=>te("ui",e.aspectRatio,v(t.value,"active"),"embed"));return{active:t,getSrc:o,clickHandler:a,computedClass:l}},render(){let e=[ee("i",{class:"video play icon"}),ee("img",{class:"placeholder",src:this.placeholder})];return this.active&&e.push(ee("div",{class:"embed"},ee("iframe",{src:this.getSrc()}))),ee("div",{class:this.computedClass,onClick:this.clickHandler},e)}}),bv={install(e){e.component("SuiEmbed",vv)}},Tt=F({props:{disabled:Boolean,link:Boolean,loading:Boolean,name:String,size:String},setup(e){return{computedClass:M(()=>te(e.size,v(e.disabled,"disabled"),v(e.link,"link"),v(e.loading,"loading")))}},render(){return this.computedClass?ee("em",{class:this.computedClass,"data-emoji":this.$props.name}):ee("em",{"data-emoji":this.$props.name})}}),Sv={install(e){e.component("SuiEmoji",Tt)}},yv=F({props:{disabled:Boolean,inverted:Boolean,size:String},setup(e,{slots:t}){const a=M(()=>te("ui",e.size,v(e.disabled,"disabled"),v(e.inverted,"inverted"),"feed"));return()=>{var o;return ee("div",{class:a.value},(o=t.default)==null?void 0:o.call(t))}}}),wv=F({render(){var e,t;return ee("div",{class:"content"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),Cv=F({render(){var e,t;return ee("div",{class:"date"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),xv=F({props:{disabled:Boolean},setup(e,{slots:t}){const a=M(()=>te(v(e.disabled,"disabled"),"event"));return()=>{var o;return i("div",{class:a.value},[t.label&&i("div",{class:"label"},[t.label()]),(t.summary||t.meta)&&i("div",{class:"content"},[t.summary&&i("div",{class:"summary"},[t.summary()]),t.extraText&&i("div",{class:"extra text"},[t.extraText()]),t.extraImages&&i("div",{class:"extra images"},[t.extraImages()]),t.meta&&i("div",{class:"meta"},[t.meta()])]),(o=t.default)==null?void 0:o.call(t)])}}}),Av=F({props:{images:Boolean,text:Boolean},setup(e){const{images:t,text:a}=e;return{computedClass:M(()=>te(v(t,"images"),v(a,"text"),"extra"))}},render(){var e,t;return ee("div",{class:this.computedClass},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),kv=F({render(){var e,t;return ee("div",{class:"label"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),Bv=F({render(){var e,t;return ee("a",{class:"like"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),$v=F({render(){var e,t;return ee("div",{class:"meta"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),Tv=F({render(){var e,t;return ee("div",{class:"summary"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),Lv=F({render(){var e,t;return ee("a",{class:"user"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),Iv={install(e){e.component("SuiFeed",yv),e.component("SuiFeedContent",wv),e.component("SuiFeedDate",Cv),e.component("SuiFeedEvent",xv),e.component("SuiFeedExtra",Av),e.component("SuiFeedLabel",kv),e.component("SuiFeedLike",Bv),e.component("SuiFeedMeta",$v),e.component("SuiFeedSummary",Tv),e.component("SuiFeedUser",Lv)}},Wt=F(e=>{const{sizeClass:t}=Dn(e),a=M(()=>te(t.value,e.name,"flag"));return()=>i("i",{class:a.value},null)},{props:{name:String,...In()}}),Dv={install(e){e.component("SuiFlag",Wt)}},Ht=F({props:{error:Boolean,info:Boolean,inverted:Boolean,loading:Boolean,reply:Boolean,success:Boolean,unstackable:Boolean,warning:Boolean,size:String},setup(e){return{classes:M(()=>te("ui",e.size,v(e.error,"error"),v(e.info,"info"),v(e.inverted,"inverted"),v(e.loading,"loading"),v(e.reply,"reply"),v(e.success,"success"),v(e.unstackable,"unstackable"),v(e.warning,"warning"),"form"))}},render(){var e,t;return i("form",{class:this.classes},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),Rs=["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"];function Ev(e){return{widthClass:M(()=>Number(e.width)>0?`${Rs[Number(e.width)-1]} wide`:typeof e.width=="string"||Rs.includes(e.width)?`${e.width} wide`:null)}}const it=F({emits:["update:modelValue"],props:{disabled:Boolean,error:Boolean,inline:Boolean,label:String,modelValue:String,placeholder:String,required:Boolean,type:String,width:String||Number},setup(e,{emit:t}){const{widthClass:a}=Ev(e),o=M(()=>te(v(e.disabled,"disabled"),v(e.error,"error"),v(e.inline,"inline"),v(e.required,"required"),a.value,"field")),l=e.type||"text";return{computedClass:o,inputType:l,onInput:u=>t("update:modelValue",u.target.value)}},render(){var e,t;return this.label?i("div",{class:this.computedClass},[i("label",null,[this.label]),i("input",{type:this.inputType,placeholder:this.placeholder,value:this.modelValue,onInput:this.onInput},null)]):i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),hr=F({props:{widths:String},setup(e){return{computedClass:M(()=>te(Pe(e.widths,"width"),"fields"))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),Cl=F({props:{label:String,placeholder:String,rows:[Number,String]},render(){return this.label?i("div",{class:"field"},[i("label",null,[this.label]),i("textarea",{placeholder:this.placeholder,rows:this.rows},null)]):i("div",{class:"field"},[i("textarea",{placeholder:this.placeholder,rows:this.rows},null)])}}),Rv={install(e){e.component("SuiForm",Ht),e.component("SuiFormField",it),e.component("SuiFormGroup",hr),e.component("SuiFormTextarea",Cl)}},ba=F({props:{celled:[Boolean,String],centered:Boolean,columns:[Number,String],compact:Boolean,container:Boolean,divided:[Boolean,String],doubling:Boolean,inverted:Boolean,padded:[Boolean,String],relaxed:[Boolean,String],reversed:String,stackable:Boolean,textAlign:String,verticalAlign:String},setup(e){return{computedClass:M(()=>te("ui",e.container&&"container",v(e.centered,"centered"),v(e.compact,"compact"),v(e.doubling,"doubling"),v(e.inverted,"inverted"),v(e.stackable,"stackable"),Pe(e.reversed,"reversed"),Pe(e.verticalAlign,"aligned"),De(e.celled,"celled"),De(e.divided,"divided"),De(e.padded,"padded"),De(e.relaxed,"relaxed"),Ln(e.textAlign),ci(e.columns,"column"),"grid"))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),kt=F({props:{color:String,computer:Number,floated:String,largeScreen:Number,mobile:Number,only:String,tablet:Number,textAlign:String,width:Number,widescreen:Number},setup(e){return{computedClass:M(()=>te(e.color,Pe(e.floated,"floated"),Pe(e.only,"only"),Ln(e.textAlign),ci(e.width,"wide"),Mn(e.mobile,"mobile"),Mn(e.tablet,"tablet"),Mn(e.computer,"computer"),Mn(e.largeScreen,"large screen"),Mn(e.widescreen,"widescreen"),"column"))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),xl=F({props:{centered:Boolean,color:String,columns:Number,only:String,stretched:Boolean,textAlign:String},setup(e){return{computedClass:M(()=>te(e.color,v(e.centered,"centered"),v(e.stretched,"stretched"),Pe(e.only,"only"),ci(e.columns,"column"),Ln(e.textAlign),"row"))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),Pv={install(e){e.component("SuiGrid",ba),e.component("SuiGridColumn",kt),e.component("SuiGridRow",xl)}},Ki=F({props:{as:String},setup(e){return{elementType:e.as||"div"}},render(){var e,t;return ee(this.elementType,{class:"sub header"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),fe=F({components:{HeaderSubheader:Ki},props:{as:String,attached:[Boolean,String],block:Boolean,color:String,content:String,disabled:Boolean,dividing:Boolean,floated:String,icon:Boolean,image:Boolean,inverted:Boolean,primary:Boolean,secondary:Boolean,size:String,sub:Boolean,subheader:String,textAlign:String},setup(e){const t=e.as||"div",a=M(()=>te("ui",e.color,e.size,v(e.primary,"primary"),v(e.secondary,"secondary"),v(e.block,"block"),v(e.disabled,"disabled"),v(e.dividing,"dividing"),v(e.icon,"icon"),v(e.image,"image"),v(e.inverted,"inverted"),v(e.sub,"sub"),Pe(e.floated,"floated"),De(e.attached,"attached"),Ln(e.textAlign),"header"));return{elementType:t,computedClass:a}},render(){var e,t;let a=[];return this.content&&a.push(this.content),this.subheader&&a.push(ee(Ki,{},this.subheader)),a.length>0?ee(this.elementType,{class:this.computedClass},a):ee(this.elementType,{class:this.computedClass},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),_r=F({render(){var e,t;return ee("div",{class:"content"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),zv={install(e){e.component("SuiHeader",fe),e.component("SuiHeaderContent",_r),e.component("SuiHeaderSubheader",Ki)}},Ze=F({emits:["update:modelValue"],props:{action:String,disabled:Boolean,error:Boolean,fluid:Boolean,focus:Boolean,icon:String,iconPosition:String,inverted:Boolean,label:String,labeled:Boolean,loading:Boolean,modelValue:String,placeholder:String,size:String,transparent:Boolean,type:String},setup(e,{emit:t}){const a=M(()=>typeof e.icon=="string"||e.loading),o=M(()=>!!e.label||e.labeled),l=M(()=>te("ui",e.size,e.action&&"action",v(e.disabled,"disabled"),v(e.error,"error"),v(e.fluid,"fluid"),v(e.focus,"focus"),e.iconPosition,v(a.value,"icon"),v(e.inverted,"inverted"),v(e.loading,"loading"),v(e.transparent,"transparent"),v(o.value,"labeled"),"input")),u=c=>t("update:modelValue",c.target.value);return()=>i("div",{class:l.value},[e.label&&i(N,null,{default:()=>[e.label]}),i("input",{type:e.type||"text",placeholder:e.placeholder,value:e.modelValue,onInput:c=>u(c)},null),a.value&&i(W,{name:e.icon||"spinner"},null),e.action&&i(P,null,{default:()=>[e.action]})])}}),Fv={install(e){e.component("SuiInput",Ze)}},Vv=F({setup(e,{slots:t}){return()=>{var a;return i("div",{class:"item"},[t.image&&i("div",{class:"image"},[t.image()]),(t.header||t.metadata||t.description||t.extra)&&i("div",{class:"content"},[t.header&&i("div",{class:"header"},[t.header()]),t.metadata&&i("div",{class:"meta"},[t.metadata()]),t.description&&i("div",{class:"description"},[t.description()]),t.extra&&i("div",{class:"extra"},[t.extra()])]),(a=t.default)==null?void 0:a.call(t)])}}}),Mv=F({props:{verticalAlign:String},setup(e,{slots:t}){const{verticalAlign:a}=e,o=M(()=>te(Pe(a,"aligned"),"content"));return()=>{var l;return i("div",{class:o.value},[(l=t.default)==null?void 0:l.call(t),t.header&&i("div",{class:"header"},[t.header()]),t.metadata&&i("div",{class:"meta"},[t.metadata()]),t.description&&i("div",{class:"description"},[t.description()])])}}}),Hv=F({render(){var e,t;return ee("div",{class:"description"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),Ov=F({render(){var e,t;return ee("div",{class:"extra"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),Nv=F({props:{divided:Boolean,inverted:Boolean,link:Boolean,relaxed:[Boolean,String],unstackable:Boolean},setup(e){return{computedClass:M(()=>te("ui",v(e.divided,"divided"),v(e.inverted,"inverted"),v(e.link,"link"),v(e.unstackable,"unstackable"),De(e.relaxed,"relaxed"),"items"))}},render(){var e,t;return ee("div",{class:this.computedClass},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),qv=F({props:{as:String},render(){var e,t;let a=this.$props.as||"div";return ee(a,{class:"header"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),Gv=F({props:{size:String},setup(e){return{computedClass:M(()=>te(e.size,"image"))}},render(){var e,t;return ee("div",{class:this.computedClass},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),jv=F({render(){var e,t;return ee("div",{class:"meta"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),Uv={install(e){e.component("SuiItem",Vv),e.component("SuiItemContent",Mv),e.component("SuiItemDescription",Hv),e.component("SuiItemExtra",Ov),e.component("SuiItemGroup",Nv),e.component("SuiItemHeader",qv),e.component("SuiItemImage",Gv),e.component("SuiItemMeta",jv)}},ud=F((e,{slots:t})=>{const{sizeClass:a}=Dn(e),o=M(()=>te("ui",v(e.animated,"animated"),v(e.bulleted,"bulleted"),v(e.celled,"celled"),v(e.divided,"divided"),v(e.horizontal,"horizontal"),v(e.inverted,"inverted"),v(e.link,"link"),v(e.ordered,"ordered"),v(e.relaxed,"relaxed"),v(e.selection,"selection"),Pe(e.verticalAlign,"aligned"),Pe(e.floated,"floated"),a.value,"list"));let l=e.as||"div";return()=>{var u;return ee(l,{class:o.value},(u=t.default)==null?void 0:u.call(t))}},{props:{animated:Boolean,as:String,bulleted:Boolean,celled:Boolean,divided:Boolean,floated:String,horizontal:Boolean,inverted:Boolean,ordered:Boolean,relaxed:Boolean,link:Boolean,selection:Boolean,verticalAlign:String,...In()}}),qn=F((e,{slots:t})=>{const a=M(()=>te(v(e.active,"active"),v(e.disabled,"disabled"),"item"));let o=e.as||"div";return()=>{var l;return ee(o,{class:a.value},(l=t.default)==null?void 0:l.call(t))}},{props:{active:Boolean,as:String,disabled:Boolean}}),Yv=F({setup(e,{slots:t}){return()=>{var a;return ee(W,{...e},(a=t.default)==null?void 0:a.call(t))}}}),Wv=F({props:{verticalAlign:String},setup(e){return{computedClass:M(()=>te(Pe(e.verticalAlign,"aligned"),"content"))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),Kv=F({props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:t}){return()=>{var a;return ee(e.as,{class:"header"},(a=t.default)==null?void 0:a.call(t))}}}),Xv=F({props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:t}){return()=>{var a;return ee(e.as,{class:"description"},(a=t.default)==null?void 0:a.call(t))}}}),Jv=F({render(){var e,t;return i("div",{class:"list"},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),Qv={install(e){e.component("SuiList",ud),e.component("SuiListItem",qn),e.component("SuiListIcon",Yv),e.component("SuiListContent",Wv),e.component("SuiListHeader",Kv),e.component("SuiListDescription",Xv),e.component("SuiListList",Jv)}},Za=F({props:{action:Boolean,active:Boolean,as:String,browse:Boolean,color:String,disabled:Boolean,fitted:[Boolean,String],header:Boolean,icon:Boolean,index:Number,link:Boolean,name:String,position:String,stackable:Boolean},emits:["selected"],setup(e,{slots:t,emit:a}){let o=e.as||"a";e.header&&(o="div"),e.as==="router-link"&&(o=T(e.as));const l=M(()=>te(e.color,e.position,v(e.action,"action"),v(e.active,"active"),v(e.browse,"browse"),v(e.disabled,"disabled"),v(e.header,"header"),v(e.icon,"icon"),v(e.link,"link"),De(e.fitted,"fitted"),"item")),u=M(()=>!e.header&&!e.disabled&&e.as!=="div");return()=>i(o,{class:l.value,onClick:()=>u.value&&a("selected",e.index)},{default:()=>{var c;return[e.name||((c=t.default)==null?void 0:c.call(t))]}})}}),cd=F({props:{activeIndex:Number,attached:[Boolean,String],borderless:Boolean,color:Boolean,compact:Boolean,fixed:Boolean,floated:[Boolean,String],fluid:Boolean,icon:[Boolean,String],inverted:Boolean,items:Array,pagination:Boolean,pointing:Boolean,secondary:Boolean,size:String,stackable:Boolean,tabular:[Boolean,String],text:Boolean,vertical:Boolean,widths:Number},emits:["selected","update:activeIndex"],setup(e,{slots:t,emit:a}){const o=G(typeof e.activeIndex=="number"?e.activeIndex:-1),l=M(()=>te("ui",e.color,e.size,v(e.borderless,"borderless"),v(e.compact,"compact"),v(e.fixed,"fixed"),v(e.fluid,"fluid"),v(e.inverted,"inverted"),v(e.pagination,"pagination"),v(e.pointing,"pointing"),v(e.secondary,"secondary"),v(e.stackable,"stackable"),v(e.text,"text"),v(e.vertical,"vertical"),De(e.attached,"attached"),De(e.floated,"floated"),De(e.icon,"icon"),De(e.tabular,"tabular"),ci(e.widths,"item"),"menu")),u=d=>typeof d=="string"?d:d.text,c=(d,p)=>{if(typeof d!="string")return d[p]},m=(d,p)=>{o.value=d,a("update:activeIndex",d),a("selected",p)};return()=>i("div",{class:l.value},[t.default&&t.default(),e.items&&e.items.map((d,p)=>i(Za,{index:p,active:p===o.value,as:typeof d!="string"?c(d,"as"):void 0,color:c(d,"color"),header:typeof d!="string"&&d.header,onSelected:f=>m(f,d)},{default:()=>[typeof d!="string"&&d.icon&&i(W,{name:d.icon},null),u(d)]})),t.right&&i("div",{class:"right menu"},[t.right()])])}}),Zv=F({props:{as:String,content:String},setup(e,{slots:t}){let a=e.as||"div";return()=>i(a,{class:"header"},{default:()=>{var o;return[e.content||((o=t.default)==null?void 0:o.call(t))]}})}}),eb=F({props:{position:String},setup(e){const{position:t}=e;return{computedClass:M(()=>te(t,"menu"))}},render(){var e,t;return ee("div",{class:this.computedClass},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),tb={install(e){e.component("SuiMenu",cd),e.component("SuiMenuHeader",Zv),e.component("SuiMenuItem",Za),e.component("SuiMenuMenu",eb)}},Ao=F({props:{attached:[Boolean,String],aligned:String,color:String,closable:Boolean,compact:Boolean,content:String,header:String,error:Boolean,floating:Boolean,hidden:Boolean,icon:[Boolean,String],info:Boolean,list:Array,negative:Boolean,positive:Boolean,size:String,success:Boolean,visible:Boolean,warning:Boolean},emits:["close"],setup(e,{emit:t,slots:a}){const o=M(()=>te("ui",e.color,e.size,v(e.compact,"compact"),v(e.error,"error"),v(e.floating,"floating"),v(e.hidden,"hidden"),v(!!e.icon,"icon"),v(e.info,"info"),v(e.negative,"negative"),v(e.positive,"positive"),v(e.success,"success"),v(e.visible,"visible"),v(e.warning,"warning"),Pe(e.aligned,"aligned"),De(e.attached,"attached"),"message")),l=G(),u=()=>{var c;const m=(c=l.value)==null?void 0:c.animate([{opacity:1},{opacity:0}],200);m&&(m.onfinish=()=>{var d;return(d=l.value)==null?void 0:d.classList.add("hidden")},t("close"))};return()=>{var c,m;return i("div",{ref:l,class:o.value},[e.closable&&i("i",{class:"close icon",onClick:u},null),typeof e.icon=="string"&&i(W,{name:e.icon},null),(c=a.default)==null?void 0:c.call(a),(e.content||a.content||e.header||e.list)&&i("div",{class:"content"},[e.header&&i("div",{class:"header"},[e.header]),e.content&&i("p",null,[e.content]),(m=a.content)==null?void 0:m.call(a),Array.isArray(e.list)&&i("ul",{class:"list"},[e.list.map((d,p)=>i("li",{key:p},[d]))])])])}}}),ib=F({render(){var e,t;return ee("div",{class:"content"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),nb=F({render(){var e,t;return ee("div",{class:"header"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),ab=F({render(){var e,t;return ee("li",{class:"content"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),ob=F({render(){var e,t;return ee("ul",{class:"list"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),lb={install(e){e.component("SuiMessage",Ao),e.component("SuiMessageContent",ib),e.component("SuiMessageHeader",nb),e.component("SuiMessageItem",ab),e.component("SuiMessageList",ob)}};function rb(e){return Vl()?(Js(e),!0):!1}function dd(e){return typeof e=="function"?e():s(e)}const md=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const sb=Object.prototype.toString,ub=e=>sb.call(e)==="[object Object]",Ma=()=>{},cb=db();function db(){var e,t;return md&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function Gn(e){var t;const a=dd(e);return(t=a==null?void 0:a.$el)!=null?t:a}const pd=md?window:void 0;function Oo(...e){let t,a,o,l;if(typeof e[0]=="string"||Array.isArray(e[0])?([a,o,l]=e,t=pd):[t,a,o,l]=e,!t)return Ma;Array.isArray(a)||(a=[a]),Array.isArray(o)||(o=[o]);const u=[],c=()=>{u.forEach(f=>f()),u.length=0},m=(f,h,_,A)=>(f.addEventListener(h,_,A),()=>f.removeEventListener(h,_,A)),d=ct(()=>[Gn(t),dd(l)],([f,h])=>{if(c(),!f)return;const _=ub(h)?{...h}:h;u.push(...a.flatMap(A=>o.map(w=>m(f,A,w,_))))},{immediate:!0,flush:"post"}),p=()=>{d(),c()};return rb(p),p}let Ps=!1;function mb(e,t,a={}){const{window:o=pd,ignore:l=[],capture:u=!0,detectIframe:c=!1}=a;if(!o)return Ma;cb&&!Ps&&(Ps=!0,Array.from(o.document.body.children).forEach(f=>f.addEventListener("click",Ma)),o.document.documentElement.addEventListener("click",Ma));let m=!0;const d=f=>l.some(h=>{if(typeof h=="string")return Array.from(o.document.querySelectorAll(h)).some(_=>_===f.target||f.composedPath().includes(_));{const _=Gn(h);return _&&(f.target===_||f.composedPath().includes(_))}}),p=[Oo(o,"click",f=>{const h=Gn(e);if(!(!h||h===f.target||f.composedPath().includes(h))){if(f.detail===0&&(m=!d(f)),!m){m=!0;return}t(f)}},{passive:!0,capture:u}),Oo(o,"pointerdown",f=>{const h=Gn(e);m=!d(f)&&!!(h&&!f.composedPath().includes(h))},{passive:!0}),c&&Oo(o,"blur",f=>{setTimeout(()=>{var h;const _=Gn(e);((h=o.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(_!=null&&_.contains(o.document.activeElement))&&t(f)},0)})].filter(Boolean);return()=>p.forEach(f=>f())}function fd(e,t="scale"){const a=G(e.modelValue?"open":"closed");return ct(()=>e.modelValue,o=>{a.value=o?"opening":"closing"}),{animationClasses:M(()=>{switch(a.value){case"opening":return`animating ${t} in`;case"open":return"visible active";case"closing":return`visible active animating ${t} out`;case"closed":return"hidden"}}),isClosed:M(()=>a.value==="closed"),onAnimationEnd:()=>a.value=e.modelValue?"open":"closed"}}const pb=F({props:{blurring:Boolean,inverted:Boolean,modelValue:Boolean},setup(e){const{animationClasses:t,isClosed:a,onAnimationEnd:o}=fd(e,"fade"),l=M(()=>te("ui","page modals dimmer transition",v(e.inverted,"inverted"),t.value)),u=M(()=>({display:a.value?"none !important":"flex !important",animationDuration:"500ms"})),c=M(()=>te("dimmable","dimmed",v(e.blurring,"blurring")));return ct(()=>e.modelValue,m=>{if(m){document.body.classList.add(...c.value.split(" "));return}document.body.classList.remove(...c.value.split(" "))}),{className:l,style:u,onAnimationEnd:o}},render(){var e,t;return i("div",{class:this.className,style:this.style,onAnimationend:this.onAnimationEnd},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),vr=F({props:{basic:Boolean,closeIcon:Boolean,dimmer:String,modelValue:Boolean,size:String,closable:{type:Boolean,default:!0},overlay:Boolean,fullscreen:Boolean},setup(e,{emit:t}){const a=G(),{animationClasses:o,isClosed:l}=fd(e),u=M(()=>te("ui",e.size,v(e.basic,"basic"),v(e.overlay,"overlay"),v(e.fullscreen,"fullscreen"),"modal","transition",o.value)),c=M(()=>({display:l.value?"none !important":"block !important",animationDuration:"500ms"})),m=()=>t("update:modelValue",!1);return mb(a,()=>e.closable&&t("update:modelValue",!1)),{computedClass:u,style:c,close:m,modalRef:a}},render(){return i(vo,{to:"body"},{default:()=>[i(pb,{blurring:this.dimmer==="blurring",inverted:this.dimmer==="inverted",modelValue:this.modelValue},{default:()=>{var e,t;return[i("div",{class:this.computedClass,style:this.style,onClick:a=>a.stopPropagation(),ref:a=>this.modalRef=a},[this.closeIcon&&i("i",{"aria-hidden":"true",class:"close icon",onClick:this.close},null),(t=(e=this.$slots).default)==null?void 0:t.call(e)])]}})]})}}),br=F({render(){var e,t;return i("div",{class:"actions"},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),Sr=F({props:{image:Boolean,scrolling:Boolean},setup(e){return{computedClass:M(()=>te(v(e.image,"image"),v(e.scrolling,"scrolling"),"content"))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),gd=F({render(){var e,t;return ee("div",{class:"description"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),yr=F({render(){var e,t;return ee("div",{class:"header"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),fb={install(e){e.component("SuiModal",vr),e.component("SuiModalActions",br),e.component("SuiModalContent",Sr),e.component("SuiModalDescription",gd),e.component("SuiModalHeader",yr)}},gb=e=>{const t=G(!1),a=Zo(e,"position"),o=G(null),l=Zo(e,"trigger"),u=()=>{t.value=!0,en(()=>m())},c=()=>{t.value=!1},m=()=>{if(!o.value||!l.value)return;let d=0,p=0;const f=o.value,h=l.value.$el;f.style.transform=`translate(${d}px, ${p}px)`;const{top:_,left:A,width:w,height:B}=h.getBoundingClientRect(),L=f.getBoundingClientRect(),{pageXOffset:R,pageYOffset:g}=window;if(a.value.includes("top")?(d=R+A,p=g+_-f.offsetTop-f.offsetHeight):(d=A,p=_+B-L.top),a.value.includes("right")){const b=w-L.width;d=A+b}if(a.value.includes("center")){const b=w/2-L.width/2;d=A+b}a.value==="right center"&&(d=A+w,p=_+B/2-L.top-L.height/2),a.value==="left center"&&(d=A-L.width,p=_+B/2-L.top-L.height/2),f.style.display="flex",f.style.position="absolute",f.style.transform=`translate(${d}px, ${p}px)`};return{show:t,showPopup:u,hidePopup:c,placement:a,popupRef:o,triggerRef:l}},hb=F({props:{basic:Boolean,content:String,flowing:Boolean,header:String,inverted:Boolean,position:{type:String,default:"top left"},size:String,trigger:Object,wide:[Boolean,String]},setup(e,{slots:t}){const{show:a,showPopup:o,hidePopup:l,popupRef:u,triggerRef:c}=gb(e);Zl(()=>{var _,A,w;(_=c.value)!=null&&_.$el&&((A=c.value)==null||A.$el.addEventListener("mouseenter",o),(w=c.value)==null||w.$el.addEventListener("mouseleave",l))});const m=G(a.value?"open":"close");M(()=>m.value!=="closed"),ct(()=>a.value,_=>{m.value=_?"opening":"closing"});const d=(_,A="scale")=>{switch(_){case"opening":return`animating ${A} in`;case"open":return"visible active";case"closing":return`visible active animating ${A} out`;case"closed":return"hidden"}},p=()=>m.value=a.value?"open":"closed";si(()=>{var _;(_=u.value)==null||_.addEventListener("animationend",p,!0)}),ki(()=>{var _;(_=u.value)==null||_.removeEventListener("animationend",p)});const f={position:"initial",animationDuration:"200ms"},h=M(()=>te("ignored ui",e.position,e.size,v(e.basic,"basic"),v(e.flowing,"flowing"),v(e.inverted,"inverted"),De(e.wide,"wide"),"popup transition",d(m.value,"scale")));return()=>i(vo,{to:"body"},{default:()=>{var _;return[i("div",{ref:u,style:"display: flex; position: absolute; transform: translate(0px, 0px);"},[i("div",{class:h.value,style:f},[e.header&&i("div",{class:"header"},[e.header]),i("div",{class:"content"},[e.content?e.content:(_=t.default)==null?void 0:_.call(t)])])])]}})}}),_b={install(e){e.component("SuiPopup",hb)}},vb=["top","bottom","left"],wr=()=>({attached:{type:String,validator:e=>vb.includes(e)}}),hd=e=>({attachedClasses:M(()=>te(e.attached,{attached:e.attached}))}),bb=["red","orange","yellow","olive","green","teal","blue","purple","violet","pink","brown","grey","black"],Cr=()=>({color:{type:String,validator:e=>bb.includes(e)}}),xr=e=>({colorClasses:M(()=>te(e.inverted&&"inverted",e.color))}),Al=F({props:{active:Boolean,disabled:Boolean,error:Boolean,indeterminate:[Boolean,String],indicating:Boolean,inverted:Boolean,label:String,percent:Number,progress:[Boolean,String],size:String,success:Boolean,warning:Boolean,...wr(),...Cr()},setup(e,{slots:t}){const{attachedClasses:a}=hd(e),{colorClasses:o}=xr(e),l=M(()=>te("ui",o.value,e.size,v(e.active||e.indicating,"active"),v(e.disabled,"disabled"),v(e.error,"error"),v(e.indicating,"indicating"),v(e.success,"success"),v(e.warning,"warning"),De(e.indeterminate,"indeterminate"),a.value,"progress")),u=M(()=>te(De(e.progress,"progress"))),c=M(()=>e.progress!=="centered"?{}:{right:0});return()=>{var m;return i("div",{class:l.value,"data-percent":e.percent},[i("div",{class:"bar",style:`width: ${e.percent}%; transition-duration: 300ms;`},[e.progress&&i("div",{class:u.value,style:c.value},[((m=t.default)==null?void 0:m.call(t))||`${e.percent}%`])]),e.label&&i("div",{class:"label"},[e.label])])}}}),Sb={install(e){e.component("SuiProgress",Al)}},yb=F({props:{attached:Boolean,close:[Boolean,String],dividing:Boolean,internal:Boolean,position:String,size:String},setup(e){return{computedClass:M(()=>te("ui",e.position,e.size,v(e.attached,"attached"),v(e.dividing,"dividing"),v(e.internal,"internal"),De(e.close,"close"),"rail"))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),wb={install(e){e.component("SuiRail",yb)}},Cb=F({props:{icon:String,index:{type:Number,default:0}},setup(e){const t=Ve("rating",G(0)),a=Ve("updateRating"),o=Ve("selectedIndex",G(0)),l=Ve("updateSelectedIndex"),u=Ve("clearable",!1),c=Ve("disabled",!1),m=()=>{if(!c){if(u&&e.index===t.value){a(0),l(0);return}a(e.index)}},d=()=>{c||l(e.index)},p=M(()=>e.index<=t.value),f=M(()=>e.index<=o.value),h=M(()=>te(e.icon,v(p.value,"active"),v(f.value,"selected"),"icon"));return()=>i("i",{class:h.value,onClick:()=>m(),onMouseenter:()=>d()},null)}}),xb=F({props:{clearable:Boolean,color:String,defaultRating:{type:Number,default:0},disabled:Boolean,icon:{type:String,default:"star"},maxRating:{type:Number,default:1},modelValue:Number,size:String},setup(e,{emit:t}){const a=G(e.modelValue||e.defaultRating),o=G(!1),l=G(0),u=f=>{a.value=f,t("update:modelValue",f),t("change",f)},c=f=>l.value=f,m=()=>{e.disabled||(o.value=!0)},d=()=>{e.disabled||(o.value=!1,c(0))},p=M(()=>te("ui",e.color,e.icon,e.size,v(e.disabled,"disabled"),"rating",v(o.value,"selected")));return ut("rating",a),ut("updateRating",u),ut("selectedIndex",l),ut("updateSelectedIndex",c),ut("clearable",e.clearable),ut("disabled",e.disabled),()=>i("div",{class:p.value,onMouseenter:()=>m(),onMouseleave:()=>d()},[[...Array(e.maxRating)].map((f,h)=>i(Cb,{icon:e.icon,index:h+1},null))])}}),Ab={install(e){e.component("SuiRating",xb)}},tn=F({props:{active:Boolean,animated:String,disabled:Boolean,instant:Boolean},setup(e){return{computedClass:M(()=>te("ui",e.animated,v(e.active,"active"),v(e.disabled,"disabled"),v(e.instant,"instant"),"reveal"))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),Dt=F({props:{visible:Boolean,hidden:Boolean},setup(e){return{computedClass:M(()=>te("ui",v(e.visible,"visible"),v(e.hidden,"hidden"),"content"))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),kb={install(e){e.component("SuiReveal",tn),e.component("SuiRevealContent",Dt)}},Bb=F({props:{icon:String,placeholder:String},setup(e){return()=>i("div",{class:"ui search"},[i("div",{class:"ui icon input"},[i("input",{type:"text",class:"prompt",placeholder:e.placeholder},null),i("i",{class:"search icon"},null)]),i("div",{class:"results"},null)])}}),$b={install(e){e.component("SuiSearch",Bb)}},O=F((e,{slots:t})=>{const{colorClasses:a}=xr(e),{sizeClass:o}=Dn(e),l=M(()=>te("ui",a.value,o.value,v(e.basic,"basic"),v(e.circular,"circular"),v(e.clearing,"clearing"),v(e.compact,"compact"),v(e.disabled,"disabled"),v(e.inverted,"inverted"),v(e.loading,"loading"),v(e.piled,"piled"),v(e.placeholder,"placeholder"),v(e.raised,"raised"),v(e.secondary,"secondary"),v(e.stacked,"stacked"),v(e.tertiary,"tertiary"),v(e.vertical,"vertical"),Pe(e.floated,"floated"),Pe(e.textAlign,"aligned"),De(e.attached,"attached"),De(e.fitted,"fitted"),De(e.padded,"padded"),De(e.scrolling,"scrolling"),"segment"));return()=>{var u;return i("div",{class:l.value},[(u=t.default)==null?void 0:u.call(t)])}},{props:{attached:[Boolean,String],basic:Boolean,circular:Boolean,clearing:Boolean,compact:Boolean,disabled:Boolean,fitted:[Boolean,String],floated:String,inverted:Boolean,loading:Boolean,padded:[Boolean,String],piled:Boolean,placeholder:Boolean,raised:Boolean,scrolling:[Boolean,String],secondary:Boolean,stacked:Boolean,tertiary:Boolean,textAlign:String,vertical:Boolean,...Cr(),...In()}}),St=F((e,{slots:t})=>{const{sizeClass:a}=Dn(e),o=M(()=>te("ui",a.value,v(e.basic,"basic"),v(e.compact,"compact"),v(e.horizontal,"horizontal"),v(e.piled,"piled"),v(e.raised,"raised"),v(e.stacked,"stacked"),"segments"));return()=>{var l;return i("div",{class:o.value},[(l=t.default)==null?void 0:l.call(t)])}},{props:{basic:Boolean,compact:Boolean,horizontal:Boolean,piled:Boolean,raised:Boolean,stacked:Boolean,...In()}}),Tb=F({render(){var e,t;return i("div",{class:"inline"},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),Lb={install(e){e.component("SuiSegment",O),e.component("SuiSegmentGroup",St),e.component("SuiSegmentInline",Tb)}},Ib=F({directives:{clickoutside:gr},emits:["update:visible","show","hide"],props:{animation:{type:String,default:"overlay"},dimmed:Boolean,direction:{type:String,default:"left"},icon:[Boolean,String],inverted:Boolean,visible:Boolean},setup(e,{emit:t}){const a=li({animating:!1}),o=M(()=>{const l=e.direction==="right"||e.direction==="left";return te("ui","sidebar",e.direction,e.animation,v(e.inverted,"inverted"),v(e.visible,"visible"),v(a.animating,"animating"),v(l,"vertical"),De(e.icon,"icon"),"menu")});return ct(()=>e.visible,()=>{if(a.animating=!0,setTimeout(()=>a.animating=!1,500),e.dimmed){const l=document.querySelector(".pusher");l&&l.classList.toggle("dimmed")}}),{computedClass:o,onClickPusher:l=>{const u=l.path||l.composedPath&&l.composedPath();u&&u.find(c=>c.classList&&c.classList.contains("pusher"))&&e.visible&&t("update:visible",!1)}}},render(){var e,t;return wi(i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)]),[[po("clickoutside"),this.onClickPusher]])}}),Db={install:e=>{e.component("SuiSidebar",Ib)}};class No{static getWindowScrollTop(){let{documentElement:t}=document;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let{documentElement:t}=document;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static hasClass(t,a){return t.classList.contains(a)}}const Eb=F({emits:["change","slideend","update:modelValue"],props:{color:String,disabled:Boolean,inverted:Boolean,labeled:[Boolean,String],labels:Array,max:{type:Number,default:10},min:{type:Number,default:0},modelValue:{type:[Number,Array],default:0},range:Boolean,reversed:Boolean,size:String,step:{type:Number,default:1},vertical:Boolean,verticalHeight:{type:[Number,String],default:200}},setup(e,{emit:t}){const a=M(()=>te("ui",e.color,e.size,v(e.disabled,"disabled"),v(e.inverted,"inverted"),v(e.reversed,"reversed"),v(e.vertical,"vertical"),De(e.labeled,"labeled"),"slider")),o=()=>100*(e.modelValue[0]-e.min)/(e.max-e.min),l=()=>100*(e.modelValue[1]-e.min)/(e.max-e.min),u=M(()=>{if(e.range)return e.reversed&&!e.vertical?{right:o()+"%",width:l()-o()+"%"}:e.vertical?e.reversed?{bottom:o()+"%",height:l()-o()+"%"}:{top:o()+"%",height:l()-o()+"%"}:{left:o()+"%",width:l()-o()+"%"};let U=e.modelValue>e.max?e.max:e.modelValue;return e.reversed?e.vertical?{bottom:"0%",top:`${100-(U-e.min)/(e.max-e.min)*100}%`}:{right:"0%",left:`${100-(U-e.min)/(e.max-e.min)*100}%`}:e.vertical?{top:"0%",bottom:`${100-(U-e.min)/(e.max-e.min)*100}%`}:{left:"0%",right:`${100-(U-e.min)/(e.max-e.min)*100}%`}}),c=M(()=>{let U=e.range?e.modelValue[0]:e.modelValue>e.max?e.max:e.modelValue;return!e.reversed&&e.vertical?{top:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:e.reversed&&e.vertical?{top:"auto",bottom:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.reversed&&!e.vertical?{left:"auto",right:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{left:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),m=M(()=>{let U=e.modelValue[1]>e.max?e.max:e.modelValue[1];return e.reversed&&!e.vertical?{left:"auto",right:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.vertical?e.reversed?{top:"auto",bottom:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{top:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:{left:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),d=M(()=>e.labels?e.labels:[...Array(e.max-e.min+1)].map((U,K)=>K*e.step+e.min)),p=()=>{var U,K;let ue=1,ne=f(),Le=(e.vertical?(U=_.value)==null?void 0:U.clientHeight:(K=_.value)==null?void 0:K.clientWidth)||0,We=1;if(Le>0)for(;Le/ne*We<100;)ne%We||(ue=We),We+=1;return ue},f=()=>Math.round((e.max-e.min)/e.step),h=G(null),_=G(null),A=G(0),w=G(0),B=G(0),L=G(0),R=()=>{if(!h.value)return;let U=h.value.getBoundingClientRect();A.value=U.left+No.getWindowScrollLeft(),w.value=U.top+No.getWindowScrollTop(),B.value=h.value.offsetWidth,L.value=h.value.offsetHeight},g=G(0),b=U=>{let{pageX:K,pageY:ue}=U.touches?U.touches[0]:U,ne,Le;e.vertical?ne=(w.value+L.value-ue)*100/L.value:ne=(K-A.value)*100/B.value,Le=(e.max-e.min)*(ne/100)+e.min;const We=e.range?e.modelValue[g.value]:e.modelValue||0;Le=We+Math.round(Le/e.step-We/e.step)*e.step,e.reversed&&(Le=e.max-Le+e.min),e.vertical&&(Le=e.max-Le+e.min),y(Le)},y=U=>{let K=U,ue;if(e.range)if(ue=e.modelValue?[...e.modelValue]:[],g.value===0){let ne=e.modelValue?e.modelValue[1]:e.max;K<e.min?K=e.min:K>ne&&(K=ne),ue[0]=K,ue[1]=ue[1]||e.max}else{let ne=e.modelValue?e.modelValue[0]:e.min;K>e.max?K=e.max:K<ne&&(K=ne),ue[0]=ue[0]||e.min,ue[1]=K}else K<e.min&&(K=e.min),K>e.max&&(K=e.max),ue=K;t("update:modelValue",ue),t("change",ue)},x=G(!1),D=U=>x.value=U,V=(U,K=0)=>{D(!0),R(),g.value=K,U.preventDefault()},H=U=>{x.value&&(D(!1),document.removeEventListener("mousemove",z),t("slideend",{event:U,value:e.modelValue}))},z=U=>{x.value&&(b(U),U==null||U.preventDefault())},j=(U,K=0)=>{e.disabled||(V(U,K),document.addEventListener("mousemove",z),document.addEventListener("mouseup",H),U.preventDefault())},J=(U,K=0)=>{switch(g.value=K,U.code){case"ArrowUp":e.vertical&&(e.reversed?Y():me()),U.preventDefault();break;case"ArrowDown":e.vertical&&(e.reversed?me():Y()),U.preventDefault();break;case"ArrowRight":e.reversed?me():Y(),U.preventDefault();break;case"ArrowLeft":e.reversed?Y():me(),U.preventDefault();break}},Y=()=>{let U=0;e.range?U=e.modelValue[g.value]+e.step:U=e.modelValue+e.step,y(U)},me=()=>{let U=0;e.range?U=e.modelValue[g.value]-e.step:U=e.modelValue-e.step,y(U)},Ae=U=>{if(!e.disabled&&!No.hasClass(U.target,"thumb")){if(e.range){let K=(e.vertical?U.offsetY/U.target.clientHeight:U.offsetX/U.target.clientWidth)*100,ue=(o()+l())/2;K<ue?g.value=e.reversed?1:0:g.value=e.reversed?0:1}R(),b(U)}};return()=>i("div",{ref:U=>h.value=U,class:a.value,style:e.vertical?`height: ${e.verticalHeight}px;`:""},[i("div",{class:"inner",onClick:Ae},[i("div",{class:"track",ref:U=>_.value=U},null),i("div",{class:"track-fill",style:u.value},null),i("div",{class:"thumb",style:c.value,onMousedown:U=>j(U),onTouchstart:U=>V(U),onTouchmove:U=>z(U),onTouchend:U=>H(U),onKeydown:U=>J(U),tabindex:0},null),e.range&&i("div",{class:"thumb second",style:m.value,onMousedown:U=>j(U,1),onTouchstart:U=>V(U,1),onTouchmove:U=>z(U),onTouchend:U=>H(U),onKeydown:U=>J(U,1),tabindex:0},null)]),e.labeled&&i("ul",{class:"auto labels"},[[...Array(f()+1)].map((U,K)=>{let ue=K/f();return K%p()?i("li",{class:"halftick label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${ue} + 7px);`},null):i("li",{class:"label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${ue} + 7px);`},[e.reversed&&!e.vertical?e.labels?e.labels[f()-K]:d.value[f()-K]:e.labels?e.labels[K]:d.value[K]])})])])}}),Rb={install(e){e.component("SuiSlider",Eb)}},kl=F({props:{content:String},render(){var e,t;return this.$props.content?ee("div",{class:"label"},this.$props.content):ee("div",{class:"label"},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),Bl=F({props:{content:String,text:Boolean},setup(e){return{computedClass:M(()=>te(v(e.text,"text"),"value"))}},render(){var e,t;return this.$props.content?ee("div",{class:this.computedClass},this.$props.content):ee("div",{class:this.computedClass},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),Pb=F({components:{StatisticLabel:kl,StatisticValue:Bl},props:{color:String,floated:[Boolean,String],fluid:Boolean,horizontal:Boolean,inverted:Boolean,label:String,size:String,text:Boolean,value:String},setup(e){const t=Ve("ui",!0);return{computedClass:M(()=>te(t&&"ui",e.color,e.size,v(e.fluid,"fluid"),v(e.horizontal,"horizontal"),v(e.inverted,"inverted"),v(e.text,"text"),De(e.floated,"floated"),"statistic"))}},render(){var e,t,a,o,l,u;let c=[];return this.$props.value&&c.push(ee(Bl,{content:this.$props.value},(t=(e=this.$slots).default)==null?void 0:t.call(e))),this.$props.label&&c.push(ee(kl,{content:this.$props.label},(o=(a=this.$slots).default)==null?void 0:o.call(a))),ee("div",{class:this.computedClass},c.length>0?c:(u=(l=this.$slots).default)==null?void 0:u.call(l))}}),zb=F({props:{color:String,horizontal:Boolean,inverted:Boolean,size:String,stackable:Boolean,widths:Number},setup(e){return ut("ui",!1),{classes:M(()=>te("ui",e.color,e.size,v(e.horizontal,"horizontal"),v(e.inverted,"inverted"),v(e.stackable,"stackable"),ci(e.widths,""),"statistics"))}},render(){var e,t;return ee("div",{class:this.classes},(t=(e=this.$slots).default)==null?void 0:t.call(e))}}),Fb={install(e){e.component("SuiStatistic",Pb),e.component("SuiStatisticGroup",zb),e.component("SuiStatisticLabel",kl),e.component("SuiStatisticValue",Bl)}},_d=F({props:{active:Boolean,completed:Boolean,description:String,disabled:Boolean,fluid:Boolean,href:String,icon:String,link:Boolean,title:String,vertical:Boolean},setup(e,{slots:t}){const a=M(()=>te(v(e.active,"active"),v(e.completed,"completed"),v(e.disabled,"disabled"),v(e.fluid,"fluid"),v(e.link,"link"),v(e.vertical,"vertical"),"step"));return()=>{var o,l;return e.href?i("a",{class:a.value,href:e.href},[(o=t.default)==null?void 0:o.call(t)]):i("div",{class:a.value},[e.icon&&i(W,{name:e.icon},null),(e.title||e.description)&&i("div",{class:"content"},[e.title&&i("div",{class:"title"},[e.title]),e.description&&i("div",{class:"description"},[e.description])]),(l=t.default)==null?void 0:l.call(t)])}}}),Vb=["one","two","three","four","five","six","seven","eight"],Mb=F({props:{activeStep:{type:Number,default:0},attached:String,fluid:Boolean,inverted:Boolean,noCompleted:Boolean,ordered:Boolean,size:String,stackable:String,steps:Array,unstackable:Boolean,vertical:Boolean,widths:Number},setup(e,{slots:t}){const{widths:a}=e,o=M(()=>te("ui",a&&Vb[a-1],e.size,v(e.fluid,"fluid"),v(e.inverted,"inverted"),v(e.ordered,"ordered"),v(e.unstackable,"unstackable"),v(e.vertical,"vertical"),Pe(e.attached,"attached"),Pe(e.stackable,"stackable"),"steps"));return()=>{var l;return e.steps?i("div",{class:o.value},[e.steps.map((u,c)=>i(_d,ui({key:c,active:c===e.activeStep,completed:e.noCompleted?!1:c<e.activeStep,disabled:c>e.activeStep},u),null))]):i("div",{class:o.value},[(l=t.default)==null?void 0:l.call(t)])}}}),Hb=F({render(){var e,t;return i("div",{class:"content"},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),Ob=F({render(){var e,t;return i("div",{class:"title"},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),Nb=F({render(){var e,t;return i("div",{class:"description"},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),qb={install(e){e.component("SuiStep",_d),e.component("SuiStepGroup",Mb),e.component("SuiStepContent",Hb),e.component("SuiStepTitle",Ob),e.component("SuiStepDescription",Nb)}},vd=F({props:{active:Boolean,attached:[Boolean,String],header:String},setup(e){return{computedClass:M(()=>te("ui tab segment",v(e.active,"active"),De(e.attached,"attached")))}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),Gb=F({emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},pointing:Boolean,secondary:Boolean,text:Boolean},setup(e,{emit:t,slots:a}){const o=G(e.activeIndex);ct(()=>e.activeIndex,p=>{o.value=p});const l=(p,f)=>{o.value!==f&&(o.value=f,t("update:activeIndex",f),t("tab-change",{event:p,index:f})),t("tab-click",{event:p,index:f})},u=(p,f)=>{p.key==="Enter"&&l(p,f)},c=M(()=>{var p,f;let h=[];return(p=a.default)!=null&&p.call(a)&&((f=a.default)==null||f.call(a).forEach(_=>{wt(_)&&h.push(_)})),h}),m=M(()=>!e.secondary&&!e.pointing&&!e.text),d=M(()=>te("ui menu",v(m.value,"tabular attached"),v(e.pointing,"pointing"),v(e.secondary,"secondary"),v(e.text,"text")));return{onClick:l,onKeyDown:u,tabIndex:o,tabs:c,tabMenuClass:d,isDefaultMenu:m}},render(){const e=()=>this.tabs.map((a,o)=>i("a",{class:`item ${this.tabIndex===o&&"active"}`,onClick:l=>this.onClick(l,o),onKeydown:l=>this.onKeyDown(l,o),tabindex:0},[a.props.header])),t=()=>this.tabs.map((a,o)=>i(vd,ui(a.props,{active:this.tabIndex===o,attached:this.isDefaultMenu?"bottom":!1}),{default:()=>{var l,u;return[(u=(l=a.children).default)==null?void 0:u.call(l)]}}));return i(ye,null,[i("div",{class:this.tabMenuClass},[e()]),t()])}}),jb={install(e){e.component("SuiTab",Gb),e.component("SuiTabPanel",vd)}},Ub=["long","very long","short","very short"],Yb=({defaultValue:e}={})=>({scrolling:{type:String,validator:t=>Ub.includes(t),default:e}}),Wb=e=>({scrollingClasses:M(()=>te(e.scrolling,!!e.scrolling&&"scrolling"))}),bd=F({props:{columns:Array,definition:Boolean,fullWidth:Boolean},setup(e,{slots:t}){const a=M(()=>te(v(e.fullWidth,"full-width")));return()=>{var o;return e.columns?i("thead",{class:a.value},[t.default?t.default():i("tr",null,[e.definition&&i("th",null,null),e.columns.map(l=>{const{header:u,field:c}=l.props;return i("th",{key:c},[u])})])]):i("thead",{class:a.value},[(o=t.default)==null?void 0:o.call(t)])}}}),$l=F({props:{active:Boolean,className:String,collapsing:Boolean,color:String,disabled:Boolean,error:Boolean,marked:String,negative:Boolean,positive:Boolean,rowspan:Number,selectable:Boolean,singleLine:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e,{emit:t,slots:a}){const o=M(()=>te(e.color,e.className,v(e.active,"active"),v(e.collapsing,"collapsing"),v(e.disabled,"disabled"),v(e.error,"error"),v(e.negative,"negative"),v(e.positive,"positive"),v(e.selectable,"selectable"),v(e.singleLine,"single line"),v(e.warning,"warning"),Pe(e.verticalAlign,"aligned"),Pe(e.marked,"marked"),Ln(e.textAlign))),l=()=>{e.selectable&&t("click-cell")};return()=>{var u,c;return i("td",{class:o.value,rowspan:e.rowspan,onClick:l},[e.selectable?i("a",null,[(u=a.default)==null?void 0:u.call(a)]):(c=a.default)==null?void 0:c.call(a)])}}}),Sd=F({props:{columns:Array,definitionClass:String,rows:Array,rowsGroupBy:String,rowActive:Function,rowClass:[Boolean,Function],rowColor:Function,rowDisabled:Function,rowError:Function,rowNegative:Function,rowPositive:Function,rowWarning:Function},emits:["row-click","cell-click"],setup(e,{emit:t,slots:a}){const o=(u,c)=>{var m;if(!e.rows||!e.rowsGroupBy||e.rowsGroupBy!==u||c===0)return!0;const d=e.rows[c][u],p=(m=e.rows[c-1])==null?void 0:m[u];return d!==p},l=(u,c)=>{var m;if(!e.rows||!e.rowsGroupBy||e.rowsGroupBy!==u)return;const d=e.rows[c][u];let p=d,f=0;for(;d===p&&(f++,p=(m=e.rows[c+f])==null?void 0:m[u],!!p););return f>1?f:void 0};return()=>{var u,c;return!e.columns||e.columns.length===0?i("tbody",null,[(u=a.default)==null?void 0:u.call(a)]):i("tbody",null,[(c=e.rows)==null?void 0:c.map((m,d)=>{var p;return i("tr",{key:m.id,class:typeof e.rowClass=="function"?e.rowClass({data:m,index:d}):e.rowClass,onClick:()=>t("row-click",{data:m})},[a.definition&&i($l,{className:e.definitionClass},{default:()=>{var f;return[(f=a.definition)==null?void 0:f.call(a,{data:m})]}}),(p=e.columns)==null?void 0:p.map(f=>{var h,_,A,w,B,L,R;const{field:g,header:b,active:y,cellClass:x,collapsing:D,color:V,disabled:H,error:z,negative:j,positive:J,marked:Y,selectable:me,warning:Ae}=f.props,U=o(g,d),K=l(g,d);return U&&i($l,{"data-label":b,key:g,className:typeof x=="function"?x({data:m,value:m[g],index:d}):x,rowspan:K,active:((h=e.rowActive)==null?void 0:h.call(e,{data:m,index:d}))||(y==null?void 0:y({value:m[g],index:d})),collapsing:D,color:((_=e.rowColor)==null?void 0:_.call(e,{data:m,index:d}))||(V==null?void 0:V({value:m[g],index:d})),disabled:((A=e.rowDisabled)==null?void 0:A.call(e,{data:m,index:d}))||(H==null?void 0:H({value:m[g],index:d})),error:((w=e.rowError)==null?void 0:w.call(e,{data:m,index:d}))||(z==null?void 0:z({value:m[g],index:d})),negative:((B=e.rowNegative)==null?void 0:B.call(e,{data:m,index:d}))||(j==null?void 0:j({value:m[g],index:d})),positive:((L=e.rowPositive)==null?void 0:L.call(e,{data:m,index:d}))||(J==null?void 0:J({value:m[g],index:d})),marked:Y==null?void 0:Y({data:m,value:m[g],index:d}),selectable:typeof me=="function"?me==null?void 0:me({data:m,value:m[g],index:d}):me,warning:((R=e.rowWarning)==null?void 0:R.call(e,{data:m,index:d}))||(Ae==null?void 0:Ae({value:m[g],index:d})),"onClick-cell":()=>{t("cell-click",{data:m,value:m[g],index:d})}},{default:()=>{var ue,ne;return[f.children?(ne=(ue=f.children).body)==null?void 0:ne.call(ue,{data:m}):m[g]]}})})])})])}}}),yd=F({props:{fullWidth:Boolean},setup(e){const{fullWidth:t}=e;return{computedClass:M(()=>te(v(t,"full-width")))}},render(){var e,t,a,o;return this.computedClass?ee("tfoot",{class:this.computedClass},(t=(e=this.$slots).default)==null?void 0:t.call(e)):ee("tfoot",{},(o=(a=this.$slots).default)==null?void 0:o.call(a))}}),Kb=F({props:{attached:[Boolean,String],basic:[Boolean,String],celled:Boolean,collapsing:Boolean,color:String,columns:Number,compact:[Boolean,String],definition:Boolean,definitionClass:String,fixed:Boolean,hideHeader:Boolean,inverted:Boolean,items:Array,rowActive:Function,rowClass:[Boolean,Function],rowColor:Function,rowDisabled:Function,rowError:Function,rowNegative:Function,rowPositive:Function,rowWarning:Function,rowsGroupBy:String,padded:[Boolean,String],selectable:Boolean,singleLine:Boolean,size:String,stackable:Boolean,striped:Boolean,structured:Boolean,unstackable:Boolean,...Yb()},setup(e,{emit:t,slots:a}){const{scrollingClasses:o}=Wb(e),l=M(()=>te("ui",e.color,e.size,v(e.celled,"celled"),v(e.collapsing,"collapsing"),v(e.definition,"definition"),v(e.fixed,"fixed"),v(e.inverted,"inverted"),v(e.selectable,"selectable"),v(e.singleLine,"single line"),v(e.stackable,"stackable"),v(e.striped,"striped"),v(e.structured,"structured"),v(e.unstackable,"unstackable"),De(e.attached,"attached"),De(e.basic,"basic"),De(e.compact,"compact"),De(e.padded,"padded"),ci(e.columns,"column"),o.value,"table")),u=M(()=>{var c;const m=(c=a.default)==null?void 0:c.call(a);return m==null?void 0:m.filter(d=>{var p;return((p=d.type)==null?void 0:p.name)==="Column"})});return()=>{var c;return!u.value||u.value.length===0?i("table",{class:l.value},[(c=a.default)==null?void 0:c.call(a)]):i("table",{class:l.value},[!e.hideHeader&&i(bd,{columns:u.value,definition:!!a.definition},{default:a.header}),i(Sd,{columns:u.value,definitionClass:e.definitionClass,rows:e.items,rowsGroupBy:e.rowsGroupBy,rowActive:e.rowActive,rowClass:e.rowClass,rowColor:e.rowColor,rowDisabled:e.rowDisabled,rowError:e.rowError,rowNegative:e.rowNegative,rowPositive:e.rowPositive,rowWarning:e.rowWarning,"onRow-click":m=>e.selectable&&t("row:select",{data:m.data}),"onCell-click":m=>t("cell:select",{data:m.data,value:m.value})},{definition:a.definition}),i(yd,null,a.footer)])}}}),Xb=F({props:{singleLine:Boolean,textAlign:String,width:Number},setup(e){return{computedClass:M(()=>te(v(e.singleLine,"single line"),Pe(e.textAlign,"aligned"),ci(e.width,"wide")))}},render(){var e,t,a,o;return this.computedClass?i("th",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)]):i("th",null,[(o=(a=this.$slots).default)==null?void 0:o.call(a)])}}),Jb=F({props:{active:Boolean,color:String,disabled:Boolean,error:Boolean,negative:Boolean,positive:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:M(()=>te(e.color,v(e.active,"active"),v(e.disabled,"disabled"),v(e.error,"error"),v(e.negative,"negative"),v(e.positive,"positive"),v(e.warning,"warning"),Pe(e.textAlign,"aligned"),Pe(e.verticalAlign,"aligned")))}},render(){var e,t,a,o;return this.computedClass?i("tr",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)]):i("tr",null,[(o=(a=this.$slots).default)==null?void 0:o.call(a)])}}),Qb=F({name:"Column",props:{active:Function,cellClass:[Boolean,Function],collapsing:Boolean,field:String,header:String,error:Function,color:Function,negative:Function,positive:Function,marked:Function,selectable:[Boolean,Function],warning:Function}}),Zb={install(e){e.component("SuiTable",Kb),e.component("SuiTableBody",Sd),e.component("SuiTableCell",$l),e.component("SuiTableFooter",yd),e.component("SuiTableHeader",bd),e.component("SuiTableHeaderCell",Xb),e.component("SuiTableRow",Jb),e.component("SuiColumn",Qb)}};function eS(e,t){e.indexOf(t)===-1&&e.push(t)}const wd=(e,t,a)=>Math.min(Math.max(a,e),t),Vt={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},eo=e=>typeof e=="number",gn=e=>Array.isArray(e)&&!eo(e[0]),tS=(e,t,a)=>{const o=t-e;return((a-e)%o+o)%o+e};function iS(e,t){return gn(e)?e[tS(0,e.length,t)]:e}const Cd=(e,t,a)=>-a*e+a*t+e,xd=()=>{},Ci=e=>e,Ar=(e,t,a)=>t-e===0?1:(a-e)/(t-e);function Ad(e,t){const a=e[e.length-1];for(let o=1;o<=t;o++){const l=Ar(0,t,o);e.push(Cd(a,1,l))}}function nS(e){const t=[0];return Ad(t,e-1),t}function aS(e,t=nS(e.length),a=Ci){const o=e.length,l=o-t.length;return l>0&&Ad(t,l),u=>{let c=0;for(;c<o-2&&!(u<t[c+1]);c++);let m=wd(0,1,Ar(t[c],t[c+1],u));return m=iS(a,c)(m),Cd(e[c],e[c+1],m)}}const kd=e=>Array.isArray(e)&&eo(e[0]),Tl=e=>typeof e=="object"&&!!e.createAnimation,kn=e=>typeof e=="function",oS=e=>typeof e=="string",ea={ms:e=>e*1e3,s:e=>e/1e3},Bd=(e,t,a)=>(((1-3*a+3*t)*e+(3*a-6*t))*e+3*t)*e,lS=1e-7,rS=12;function sS(e,t,a,o,l){let u,c,m=0;do c=t+(a-t)/2,u=Bd(c,o,l)-e,u>0?a=c:t=c;while(Math.abs(u)>lS&&++m<rS);return c}function jn(e,t,a,o){if(e===t&&a===o)return Ci;const l=u=>sS(u,0,1,e,a);return u=>u===0||u===1?u:Bd(l(u),t,o)}const uS=(e,t="end")=>a=>{a=t==="end"?Math.min(a,.999):Math.max(a,.001);const o=a*e,l=t==="end"?Math.floor(o):Math.ceil(o);return wd(0,1,l/e)},zs={ease:jn(.25,.1,.25,1),"ease-in":jn(.42,0,1,1),"ease-in-out":jn(.42,0,.58,1),"ease-out":jn(0,0,.58,1)},cS=/\((.*?)\)/;function Fs(e){if(kn(e))return e;if(kd(e))return jn(...e);if(zs[e])return zs[e];if(e.startsWith("steps")){const t=cS.exec(e);if(t){const a=t[1].split(",");return uS(parseFloat(a[0]),a[1].trim())}}return Ci}class $d{constructor(t,a=[0,1],{easing:o,duration:l=Vt.duration,delay:u=Vt.delay,endDelay:c=Vt.endDelay,repeat:m=Vt.repeat,offset:d,direction:p="normal",autoplay:f=!0}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=Ci,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((_,A)=>{this.resolve=_,this.reject=A}),o=o||Vt.easing,Tl(o)){const _=o.createAnimation(a);o=_.easing,a=_.keyframes||a,l=_.duration||l}this.repeat=m,this.easing=gn(o)?Ci:Fs(o),this.updateDuration(l);const h=aS(a,d,gn(o)?o.map(Fs):Ci);this.tick=_=>{var A;u=u;let w=0;this.pauseTime!==void 0?w=this.pauseTime:w=(_-this.startTime)*this.rate,this.t=w,w/=1e3,w=Math.max(w-u,0),this.playState==="finished"&&this.pauseTime===void 0&&(w=this.totalDuration);const B=w/this.duration;let L=Math.floor(B),R=B%1;!R&&B>=1&&(R=1),R===1&&L--;const g=L%2;(p==="reverse"||p==="alternate"&&g||p==="alternate-reverse"&&!g)&&(R=1-R);const b=w>=this.totalDuration?1:Math.min(R,1),y=h(this.easing(b));t(y),this.pauseTime===void 0&&(this.playState==="finished"||w>=this.totalDuration+c)?(this.playState="finished",(A=this.resolve)===null||A===void 0||A.call(this,y)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},f&&this.play()}play(){const t=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=t-this.pauseTime:this.startTime||(this.startTime=t),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var t;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(t=this.reject)===null||t===void 0||t.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(t){this.duration=t,this.totalDuration=t*(this.repeat+1)}get currentTime(){return this.t}set currentTime(t){this.pauseTime!==void 0||this.rate===0?this.pauseTime=t:this.startTime=performance.now()-t/this.rate}get playbackRate(){return this.rate}set playbackRate(t){this.rate=t}}class dS{setAnimation(t){this.animation=t,t==null||t.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const qo=new WeakMap;function Td(e){return qo.has(e)||qo.set(e,{transforms:[],values:new Map}),qo.get(e)}function mS(e,t){return e.has(t)||e.set(t,new dS),e.get(t)}const pS=["","X","Y","Z"],fS=["translate","scale","rotate","skew"],to={x:"translateX",y:"translateY",z:"translateZ"},Vs={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:e=>e+"deg"},gS={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:e=>e+"px"},rotate:Vs,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:Ci},skew:Vs},da=new Map,kr=e=>`--motion-${e}`,io=["x","y","z"];fS.forEach(e=>{pS.forEach(t=>{io.push(e+t),da.set(kr(e+t),gS[e])})});const hS=(e,t)=>io.indexOf(e)-io.indexOf(t),_S=new Set(io),Ld=e=>_S.has(e),vS=(e,t)=>{to[t]&&(t=to[t]);const{transforms:a}=Td(e);eS(a,t),e.style.transform=bS(a)},bS=e=>e.sort(hS).reduce(SS,"").trim(),SS=(e,t)=>`${e} ${t}(var(${kr(t)}))`,Ll=e=>e.startsWith("--"),Ms=new Set;function yS(e){if(!Ms.has(e)){Ms.add(e);try{const{syntax:t,initialValue:a}=da.has(e)?da.get(e):{};CSS.registerProperty({name:e,inherits:!1,syntax:t,initialValue:a})}catch{}}}const Go=(e,t)=>document.createElement("div").animate(e,t),Hs={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{Go({opacity:[1]})}catch{return!1}return!0},finished:()=>!!Go({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{Go({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},jo={},sn={};for(const e in Hs)sn[e]=()=>(jo[e]===void 0&&(jo[e]=Hs[e]()),jo[e]);const wS=.015,CS=(e,t)=>{let a="";const o=Math.round(t/wS);for(let l=0;l<o;l++)a+=e(Ar(0,o-1,l))+", ";return a.substring(0,a.length-2)},Os=(e,t)=>kn(e)?sn.linearEasing()?`linear(${CS(e,t)})`:Vt.easing:kd(e)?xS(e):e,xS=([e,t,a,o])=>`cubic-bezier(${e}, ${t}, ${a}, ${o})`;function AS(e,t){for(let a=0;a<e.length;a++)e[a]===null&&(e[a]=a?e[a-1]:t());return e}const kS=e=>Array.isArray(e)?e:[e];function Il(e){return to[e]&&(e=to[e]),Ld(e)?kr(e):e}const Da={get:(e,t)=>{t=Il(t);let a=Ll(t)?e.style.getPropertyValue(t):getComputedStyle(e)[t];if(!a&&a!==0){const o=da.get(t);o&&(a=o.initialValue)}return a},set:(e,t,a)=>{t=Il(t),Ll(t)?e.style.setProperty(t,a):e.style[t]=a}};function Id(e,t=!0){if(!(!e||e.playState==="finished"))try{e.stop?e.stop():(t&&e.commitStyles(),e.cancel())}catch{}}function BS(e,t){var a;let o=(t==null?void 0:t.toDefaultUnit)||Ci;const l=e[e.length-1];if(oS(l)){const u=((a=l.match(/(-?[\d.]+)([a-z%]*)/))===null||a===void 0?void 0:a[2])||"";u&&(o=c=>c+u)}return o}function $S(){return window.__MOTION_DEV_TOOLS_RECORD}function TS(e,t,a,o={},l){const u=$S(),c=o.record!==!1&&u;let m,{duration:d=Vt.duration,delay:p=Vt.delay,endDelay:f=Vt.endDelay,repeat:h=Vt.repeat,easing:_=Vt.easing,persist:A=!1,direction:w,offset:B,allowWebkitAcceleration:L=!1,autoplay:R=!0}=o;const g=Td(e),b=Ld(t);let y=sn.waapi();b&&vS(e,t);const x=Il(t),D=mS(g.values,x),V=da.get(x);return Id(D.animation,!(Tl(_)&&D.generator)&&o.record!==!1),()=>{const H=()=>{var J,Y;return(Y=(J=Da.get(e,x))!==null&&J!==void 0?J:V==null?void 0:V.initialValue)!==null&&Y!==void 0?Y:0};let z=AS(kS(a),H);const j=BS(z,V);if(Tl(_)){const J=_.createAnimation(z,t!=="opacity",H,x,D);_=J.easing,z=J.keyframes||z,d=J.duration||d}if(Ll(x)&&(sn.cssRegisterProperty()?yS(x):y=!1),b&&!sn.linearEasing()&&(kn(_)||gn(_)&&_.some(kn))&&(y=!1),y){V&&(z=z.map(me=>eo(me)?V.toDefaultUnit(me):me)),z.length===1&&(!sn.partialKeyframes()||c)&&z.unshift(H());const J={delay:ea.ms(p),duration:ea.ms(d),endDelay:ea.ms(f),easing:gn(_)?void 0:Os(_,d),direction:w,iterations:h+1,fill:"both"};m=e.animate({[x]:z,offset:B,easing:gn(_)?_.map(me=>Os(me,d)):void 0},J),m.finished||(m.finished=new Promise((me,Ae)=>{m.onfinish=me,m.oncancel=Ae}));const Y=z[z.length-1];m.finished.then(()=>{A||(Da.set(e,x,Y),m.cancel())}).catch(xd),L||(m.playbackRate=1.000001)}else if(l&&b)z=z.map(J=>typeof J=="string"?parseFloat(J):J),z.length===1&&z.unshift(parseFloat(H())),m=new l(J=>{Da.set(e,x,j?j(J):J)},z,Object.assign(Object.assign({},o),{duration:d,easing:_}));else{const J=z[z.length-1];Da.set(e,x,V&&eo(J)?V.toDefaultUnit(J):J)}return c&&u(e,t,z,{duration:d,delay:p,easing:_,repeat:h,offset:B},"motion-one"),D.setAnimation(m),m&&!R&&m.pause(),m}}const LS=(e,t)=>e[t]?Object.assign(Object.assign({},e),e[t]):Object.assign({},e);function IS(e,t){var a;return typeof e=="string"?t?((a=t[e])!==null&&a!==void 0||(t[e]=document.querySelectorAll(e)),e=t[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const DS=e=>e(),Dd=(e,t,a=Vt.duration)=>new Proxy({animations:e.map(DS).filter(Boolean),duration:a,options:t},RS),ES=e=>e.animations[0],RS={get:(e,t)=>{const a=ES(e);switch(t){case"duration":return e.duration;case"currentTime":return ea.s((a==null?void 0:a[t])||0);case"playbackRate":case"playState":return a==null?void 0:a[t];case"finished":return e.finished||(e.finished=Promise.all(e.animations.map(PS)).catch(xd)),e.finished;case"stop":return()=>{e.animations.forEach(o=>Id(o))};case"forEachNative":return o=>{e.animations.forEach(l=>o(l,e))};default:return typeof(a==null?void 0:a[t])>"u"?void 0:()=>e.animations.forEach(o=>o[t]())}},set:(e,t,a)=>{switch(t){case"currentTime":a=ea.ms(a);case"playbackRate":for(let o=0;o<e.animations.length;o++)e.animations[o][t]=a;return!0}return!1}},PS=e=>e.finished;function zS(e,t,a){return kn(e)?e(t,a):e}function FS(e){return function(t,a,o={}){t=IS(t);const l=t.length,u=[];for(let c=0;c<l;c++){const m=t[c];for(const d in a){const p=LS(o,d);p.delay=zS(p.delay,c,l);const f=TS(m,d,a[d],p,e);u.push(f)}}return Dd(u,o,o.duration)}}const VS=FS($d);function MS(e,t={}){return Dd([()=>{const a=new $d(e,[0,1],t);return a.finished.catch(()=>{}),a}],t,t.duration)}function HS(e,t,a){return(kn(e)?MS:VS)(e,t,a)}const _e=(e,t)=>(a,{duration:o,keyframesOverride:l={}})=>HS(a,{...e,...l},{autoplay:!1,...t,duration:o}),Ns=_e({transform:["scale(0.8) translateZ(0px)","scale(0.8) translateZ(0px)","scale(1.05) translateZ(0px)","scale(1) translateZ(0px)"],opacity:[null,.7,1,null],zIndex:[-1,-1,999,999]},{duration:.5,offset:[0,.1,.8,1]}),OS=_e({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,-1,null,-1]},{duration:.5,offset:[0,.5,.8,1]}),NS=_e({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,1,null,1]},{duration:.5,offset:[0,.5,.8,1]}),qS=_e({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(0)","scale(1)"],opacity:[0,1]},{duration:.4,offset:[0,1]}),GS=_e({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(1)","scale(0)"],opacity:[1,0]},{duration:.4,offset:[0,1]}),jS=_e({opacity:[0,1]},{duration:.5,offset:[0,1]}),US=_e({opacity:[0,1],transform:["translateY(10%)","export translateY(0%)"]},{duration:.5,offset:[0,1]}),YS=_e({opacity:[0,1],transform:["translateY(-10%)","translateY(0%)"]},{duration:.5,offset:[0,1]}),WS=_e({opacity:[0,1],transform:["translateX(10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),KS=_e({opacity:[0,1],transform:["translateX(-10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),XS=_e({opacity:[1,0]},{duration:.5,offset:[0,1]}),JS=_e({opacity:[1,0],transform:["translateY(0%)","texport ranslateY(5%)"]},{duration:.5,offset:[0,1]}),QS=_e({opacity:[1,0],transform:["translateY(0%)","translateY(-5%)"]},{duration:.5,offset:[0,1]}),ZS=_e({opacity:[1,0],transform:["translateX(0%)","translateX(5%)"]},{duration:.5,offset:[0,1]}),e1=_e({opacity:[1,0],transform:["translateX(0%)","translateX(-5%)"]},{duration:.5,offset:[0,1]}),t1=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["scale3d(.3, .3, .3)","scale3d(1.1, 1.1, 1.1)","scale3d(.9, .9, .9)","scale3d(1.03, 1.03, 1.03)","scale3d(.97, .97, .97)","scale3d(1, 1, 1)"],opacity:[0,null,null,1,null,1]},{duration:.6,offset:[0,.2,.4,.6,.8,1]}),i1=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, 1500px, 0","translate3d(0, -20px, 0)","translate3d(0, 10px, 0)","translate3d(0, -5px, 0)","translate3d(0, 0, 0)"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),n1=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, -1500px, 0","translate3d(0, 25px, 0)","translate3d(0, -10px, 0)","translate3d(0, 5px, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),a1=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(1500px, 0, 0","translate3d(-25px, 0, 0)","translate3d(10px, 0, 0)","translate3d(-5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),o1=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(-1500px, 0, 0","translate3d(25px, 0, 0)","translate3d(-10px, 0, 0)","translate3d(5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),l1=_e({transform:["scale3d(.9, .9, .9)","scale3d(1.1, 1.1, 1.1)","scale3d(1.1, 1.1, 1.1)","scale3d(.3, .3, .3)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.5,.55,1]}),r1=_e({transform:["translate3d(0, 10px, 0)","translate3d(0, -20px, 0)","translate3d(0, -20px, 0)","translate3d(0, 2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),s1=_e({transform:["translate3d(0, -10px, 0)","translate3d(0, 20px, 0)","translate3d(0, 20px, 0)","translate3d(0, -2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),u1=_e({transform:["translate3d(-20px, 0, 0)","translate3d(2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),c1=_e({transform:["translate3d(20px, 0, 0)","translate3d(-2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),d1=_e({transform:["perspective(2000px) rotateY(-90deg)","perspective(2000px) rotateY(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),m1=_e({transform:["perspective(2000px) rotateY(0deg)","perspective(2000px) rotateY(90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),p1=_e({transform:["perspective(2000px) rotateX(-90deg)","perspective(2000px) rotateX(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),f1=_e({transform:["perspective(2000px) rotateX(0deg)","perspective(2000px) rotateX(-90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),g1=_e({transform:["scale(0.8)","scale(1)"],opacity:[0,1]},{duration:.5,offset:[0,1]}),h1=_e({transform:["scale(1)","scale(0.9)"],opacity:[1,0]},{duration:.5,offset:[0,1]}),Ed={transform:["scaleY(0)","scaleY(1)"],opacity:[0,1]},Rd={transform:["scaleX(0)","scaleX(1)"],opacity:[0,1]},Pd={transform:["scaleY(1)","scaleY(0)"],opacity:[1,0]},_1={transform:["scaleX(1)","scaleX(0)"],opacity:[1,0]},v1=_e({transformOrigin:"top center",...Ed},{offset:[0,1]}),b1=_e({transformOrigin:"bottom center",...Ed},{offset:[0,1]}),S1=_e({transformOrigin:"center right",...Rd},{offset:[0,1]}),y1=_e({transformOrigin:"center left",...Rd},{offset:[0,1]}),w1=_e({transformOrigin:"top center",...Pd},{offset:[0,1]}),C1=_e({transformOrigin:"bottom center",...Pd},{offset:[0,1]}),qs=_e({transformOrigin:"center left",..._1},{offset:[0,1]}),$i=.8,hn={transform:["perspective(1000px) rotateX(90deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(15deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},_n={transform:["perspective(1000px) rotateY(-90deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-17.5deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},vn={transform:["perspective(1000px) rotateX(0deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(17.5deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},bn={transform:["perspective(1000px) rotateY(0deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(-10deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},x1=_e({transformOrigin:"top center",transform:hn.transform,opacity:hn.opacity},{duration:$i,offset:hn.offset}),A1=_e({transformOrigin:"bottom center",transform:hn.transform,opacity:hn.opacity},{duration:$i,offset:hn.offset}),k1=_e({transformOrigin:"center right",transform:_n.transform,opacity:_n.opacity},{duration:$i,offset:_n.offset}),B1=_e({transformOrigin:"center left",transform:_n.transform,opacity:_n.opacity},{duration:$i,offset:_n.offset}),$1=_e({transformOrigin:"top center",transform:vn.transform,opacity:vn.opacity},{duration:$i,offset:vn.offset}),T1=_e({transformOrigin:"bottom center",transform:vn.transform,opacity:vn.opacity},{duration:$i,offset:vn.offset}),L1=_e({transformOrigin:"center right",transform:bn.transform,opacity:bn.opacity},{duration:$i,offset:bn.offset}),I1=_e({transformOrigin:"center left",transform:bn.transform,opacity:bn.opacity},{duration:$i,offset:bn.offset}),D1=_e({transform:["scale(0)","scale(1)"],opacity:[1,1]},{offset:[0,1]}),E1=_e({transform:["scale(1)","scale(0)"],opacity:[1,1]},{offset:[0,1]}),R1=_e({transform:["translateY(0)","translateY(0)","translateY(-30px)","translateY(0)","translateY(-15px)","translateY(0)","translateY(0)"]},{offset:[0,.2,.4,.5,.6,.8,1]}),P1=_e({opacity:[1,0,1,0,1]},{offset:[0,.25,.5,.75,1]}),z1=_e({animationTimingFunction:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",backgroundColor:["#FCFCFD","#FFF6CD","FCFCFD"]},{duration:2,offset:[0,.3,1]}),F1=_e({transform:["scale3d(1, 1, 1)","scale3d(1.25, 0.75, 1)","scale3d(0.75, 1.25, 1)","scale3d(1.15, 0.85, 1)","scale3d(0.95, 1.05, 1)","scale3d(1.05, 0.95, 1)","scale3d(1, 1, 1)"]},{duration:.75,offset:[0,.3,.4,.5,.6,.75,1]}),V1=_e({transform:["scale(1)","scale(0.9)","scale(1)"],opacity:[1,.7,1]},{offset:[0,.5,1]}),M1=_e({transform:["translateX(0)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(0)"]}),H1=_e({transform:["scale(1)","scale(0.9) rotate(-3deg)","scale(0.9) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1) rotate(0)"]},{offset:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]}),O1={browse:[Ns,OS],"browse right":[Ns,NS],drop:[qS,GS],fade:[jS,XS],"fade up":[US,JS],"fade down":[YS,QS],"fade left":[WS,ZS],"fade right":[KS,e1],fly:[t1,l1],"fly up":[i1,r1],"fly down":[n1,s1],"fly left":[a1,u1],"fly right":[o1,c1],"horizontal flip":[d1,m1],"vertical flip":[p1,f1],scale:[g1,h1],"slide up":[b1,C1],"slide down":[v1,w1],"slide left":[S1,qs],"slide right":[y1,qs],"swing up":[A1,T1],"swing down":[x1,$1],"swing left":[k1,L1],"swing right":[B1,I1],zoom:[D1,E1]},N1={bounce:[R1,void 0],flash:[P1,void 0],glow:[z1,void 0],jiggle:[F1,void 0],pulse:[V1,void 0],shake:[M1,void 0],tada:[H1,void 0]},zd=e=>({...O1,...N1})[e],q1=e=>{const[t,a]=zd(e.animation),o=M(()=>e.duration?e.duration/1e3:.5),l=M(()=>(c,m)=>{if(!t)return m();const d=t(c,{duration:o.value});d.play(),d.finished.then(m)}),u=M(()=>(c,m)=>{if(!a)return m();const d=a(c,{duration:o.value});d.play(),d.finished.then(m)});return{onEnter:l,onLeave:u}},G1=F({props:{animation:{type:String,default:"fade"},duration:{type:Number,default:500}},setup(e){const{onEnter:t,onLeave:a}=q1(e);return{onEnter:t,onLeave:a}},render(){return i(yo,{onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,t;return[(t=(e=this.$slots).default)==null?void 0:t.call(e)]}})}}),Fd=F({props:{tag:String,animation:{type:String,default:"fade"},enterKeyframes:{type:Function,default:()=>({})},leaveKeyframes:{type:Function,default:()=>({})}},setup(e){const[t,a]=zd(e.animation),o=M(()=>(u,c)=>{if(!t)return c();const m=t(u,{duration:.5,keyframesOverride:e.enterKeyframes(u)});m.play(),m.finished.then(c)}),l=M(()=>(u,c)=>{if(!a)return c();const m=a(u,{duration:.5,keyframesOverride:e.leaveKeyframes(u)});m.play(),m.finished.then(c)});return{onEnter:o,onLeave:l}},render(){return i(Ac,{tag:this.tag,onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,t;return[(t=(e=this.$slots).default)==null?void 0:t.call(e)]}})}}),j1={install(e){e.component("SuiTransition",G1),e.component("SuiTransitionGroup",Fd)}},U1=Object.freeze(Object.defineProperty({__proto__:null,Accordion:s_,Advertisement:c_,Breadcrumb:d_,Button:b_,Calendar:P_,Card:q_,Checkbox:G_,Comment:ev,Container:tv,Dimmer:nv,Divider:av,Dropdown:_v,Embed:bv,Emoji:Sv,Feed:Iv,Flag:Dv,Form:Rv,Grid:Pv,Header:zv,Icon:m_,Image:mv,Input:Fv,Item:Uv,Label:dv,List:Qv,Menu:tb,Message:lb,Modal:fb,Popup:_b,Progress:Sb,Rail:wb,Rating:Ab,Reveal:kb,Search:$b,Segment:Lb,Sidebar:Db,Slider:Rb,Statistic:Fb,Step:qb,Tab:jb,Table:Zb,Transition:j1},Symbol.toStringTag,{value:"Module"})),ze=F({props:{active:Boolean,color:String,disabled:Boolean,fast:Boolean,indeterminate:Boolean,inline:[Boolean,String],inverted:Boolean,size:String,slow:Boolean,text:Boolean},setup(e,{slots:t}){return{computedClass:M(()=>{var a;return te("ui",e.color,e.size,v(e.active,"active"),v(e.disabled,"disabled"),v(e.fast,"fast"),v(e.indeterminate,"indeterminate"),v(e.inverted,"inverted"),v(e.slow,"slow"),v(e.text||!!((a=t.default)!=null&&a.call(t)),"text"),De(e.inline,"inline"),"loader")})}},render(){var e,t;return i("div",{class:this.computedClass},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])}}),Uo=F({name:"SuiToastActions",props:{aligned:String,basic:Boolean,vertical:Boolean,...wr()},setup(e,{slots:t}){const a=M(()=>te("actions",e.basic&&"basic",e.aligned,e.vertical&&"vertical"));return()=>{var o;return e.attached?i(ft,{attached:e.attached,vertical:e.vertical},{default:()=>{var l;return[(l=t.default)==null?void 0:l.call(t)]}}):i("div",{class:a.value},[(o=t.default)==null?void 0:o.call(t)])}}}),Y1=F({name:"SuiToastBox",props:{unclickable:Boolean,verticalAttached:Boolean},setup(e,{slots:t}){const a=M(()=>te("floating toast-box compact",e.unclickable&&"unclickable"));return()=>{var o,l;return e.verticalAttached?i("div",{class:a.value,style:"display: block !important;"},[i("div",{class:"vertical attached compact right"},[(o=t.default)==null?void 0:o.call(t)])]):i("div",{class:a.value,style:"display: block !important;"},[(l=t.default)==null?void 0:l.call(t)])}}});function Yo(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!wt(e)}const W1=F({name:"SuiToast",emits:["click","close"],props:{id:Number,displayTime:{type:Number,default:3e3},type:String,title:String,message:{type:String,required:!0},centered:Boolean,messageStyle:Boolean,actions:Function,actionsProps:Object,showProgress:{type:String},showProgressColor:String,showProgressUp:Boolean,inverted:Boolean,...Cr()},setup(e,{emit:t}){const{colorClasses:a}=xr(e),o=M(()=>{var c,m,d,p,f;return te(e.centered&&"center aligned",e.type||"neutral",a.value,"ui",e.messageStyle?"message":"toast",e.actions&&!((c=e.actionsProps)!=null&&c.vertical)&&"actions",((m=e.actionsProps)==null?void 0:m.attached)==="top"&&"bottom attached",((d=e.actionsProps)==null?void 0:d.attached)==="bottom"&&"top attached",((p=e.actionsProps)==null?void 0:p.attached)==="left"&&"left attached",((f=e.actionsProps)==null?void 0:f.vertical)&&"vertical","compact")}),l=G(e.showProgressUp?0:100),u=()=>{const c=e.displayTime/100;setTimeout(()=>{const m=setInterval(()=>{if(e.showProgressUp){l.value>=100&&clearInterval(m),l.value+=1;return}l.value<=0&&clearInterval(m),l.value-=1},c)},500)};return si(()=>e.showProgress&&u()),setTimeout(()=>e.displayTime>0&&t("close"),e.displayTime+750),{classes:o,progress:l}},render(){var e;let t,a,o;return i(Y1,{unclickable:!!this.actions,verticalAttached:((e=this.actionsProps)==null?void 0:e.attached)==="left"},{default:()=>{var l,u,c,m;return[this.showProgress==="top"&&i(Al,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null),this.actions&&(((l=this.actionsProps)==null?void 0:l.attached)==="top"||((u=this.actionsProps)==null?void 0:u.attached)==="left")&&i(Uo,this.actionsProps,Yo(t=this.actions({close:()=>this.$emit("close")}))?t:{default:()=>[t]}),i("div",{role:"alert",class:this.classes,onClick:()=>!this.actions&&this.$emit("click")},[i("div",{class:"content"},[this.title&&i("div",{class:"ui header"},[this.title]),i("div",{class:"message"},[this.message])]),this.actions&&!((c=this.actionsProps)!=null&&c.attached)&&i(Uo,this.actionsProps,Yo(a=this.actions({close:()=>this.$emit("close")}))?a:{default:()=>[a]})]),this.actions&&((m=this.actionsProps)==null?void 0:m.attached)==="bottom"&&i(Uo,this.actionsProps,Yo(o=this.actions({close:()=>this.$emit("close")}))?o:{default:()=>[o]}),this.showProgress==="bottom"&&i(Al,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null)]}})}}),K1=["top right","top center","top left","bottom right","bottom center","bottom left","centered"],X1=({defaultValue:e}={})=>({position:{type:String,validator:t=>K1.includes(t),default:e}}),J1=e=>({positionClasses:M(()=>e.position||"")});function Q1(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!wt(e)}const Z1=F({name:"SuiToastContainer",props:{horizontal:Boolean,...wr(),...X1({defaultValue:"top right"})},setup(e){const{items:t,remove:a}=Vd(),{attachedClasses:o}=hd(e),{positionClasses:l}=J1(e);return{classes:M(()=>te(o.value||l.value,"ui toast-container",e.horizontal&&"horizontal")),items:t,remove:a,enterKeyframes:u=>{if(!(u instanceof HTMLElement))return{};const c=[0,`${u.offsetHeight}px`],m=[0,`${parseInt(getComputedStyle(u).marginBottom,10)}px`];return{height:c,marginBottom:m}},leaveKeyframes:u=>{if(!(u instanceof HTMLElement))return{};const c=[`${u.offsetWidth}px`,0],m=[`${u.offsetHeight}px`,0],d=e.horizontal?{width:c}:{height:m},p=[`${parseInt(getComputedStyle(u).marginBottom,10)}px`,0];return{...d,marginBottom:p}}}},render(){let e;return i(vo,{to:"body"},{default:()=>[i("div",{class:this.classes},[i(Fd,{animation:"scale",enterKeyframes:this.enterKeyframes,leaveKeyframes:this.leaveKeyframes},Q1(e=this.items.filter(({position:t,attached:a})=>this.attached?a===this.attached:t===this.position).filter(({horizontal:t})=>this.horizontal===!!t).map(({id:t,...a})=>i(W1,ui({key:t},a,{onClick:()=>this.remove(t),onClose:()=>this.remove(t)}),null)))?e:{default:()=>[e]})])]})}}),ey=G(1),Hn=G([]),Vd=()=>({items:Hn,add:e=>{e.position=e.position||"top right",Hn.value=[...Hn.value,{id:ey.value++,...e}]},remove:e=>{Hn.value=Hn.value.filter(t=>t.id!==e)}}),rt=()=>{var e;const t=(e=Jt())==null?void 0:e.appContext,{add:a}=Vd();return{toast:o=>{const{position:l,attached:u,horizontal:c}=o;ny({position:l,attached:u,horizontal:c})||iy(t,{position:l,attached:u,horizontal:c}),a(o)}}},ty=(e,{appContext:t,element:a}={})=>{const o=a||document.createElement("div");return t&&(e.appContext=t),Ja(e,o),{vNode:e,el:o}},iy=(e,{position:t="top right",attached:a,horizontal:o=!1}={})=>{const l=ee(Z1,{position:t,attached:a,horizontal:o}),{el:u}=ty(l,{appContext:e});return{vNode:l,el:u}},ny=({position:e="top right",attached:t,horizontal:a})=>{const o=t?`.ui.toast-container.${t}.attached`:`.ui.toast-container.${e.split(" ").join(".")}${a?".horizontal":":not(.horizontal)"}`;return document.querySelector(o)};function ay(e){Object.values({...U1}).map(t=>e.use(t))}const oy={install:ay},ly=Object.assign({inheritAttrs:!1},{__name:"DocSectionText",props:["label","onClick"],setup(e){const t=Wc(),a=M(()=>{const l=t.currentRoute.value.path;return l.lastIndexOf("/")===l.length-1?l.slice(0,-1):l}),o=l=>{l.preventDefault();const c=l.target.parentElement.getAttribute("href"),m=c.slice(c.indexOf("#")+1),d=document.getElementById(m);d&&d.scrollIntoView({behavior:"smooth"})};return(l,u)=>{const c=T("SuiHeader"),m=T("SuiGridColumn"),d=T("SuiGridRow");return S(),we(ye,null,[i(d,null,{default:n(()=>[i(m,null,{default:n(()=>[i(c,{as:"h3",class:"doc-section-text"},{default:n(()=>[r($e(e.label)+" ",1),i(s(fr),{to:`${a.value}#${l.$attrs.id}`,target:"_self",onClick:o},{default:n(()=>[i(s(W),{name:"linkify",color:"grey",size:"small",link:"",fitted:""})]),_:1},8,["to"])]),_:1})]),_:1}),i(m,{textAlign:"right"},{default:n(()=>[i(s(W),{name:"code",color:"grey",link:"",onClick:e.onClick},null,8,["onClick"])]),_:1})]),_:1}),$("p",null,[ji(l.$slots,"default",{},void 0,!0)])],64)}}}),ry=Ye(ly,[["__scopeId","data-v-a2b78897"]]),sy={class:"inner"},uy={__name:"DocSectionCode",props:["code","hideCode"],setup(e){return(t,a)=>{const o=T("SuiGridColumn"),l=T("SuiGridRow");return S(),C(l,null,{default:n(()=>[i(o,{width:16},{default:n(()=>[ji(t.$slots,"default",{},void 0,!0)]),_:3}),i(o,{width:16,id:"accordion","aria-hidden":e.hideCode},{default:n(()=>[$("div",sy,[wi((S(),we("pre",null,[$("code",null,$e(e.code)+`
`,1)])),[[s(Va)]])])]),_:1},8,["aria-hidden"])]),_:3})}}},cy=Ye(uy,[["__scopeId","data-v-965e7ddc"]]),I={__name:"DocSection",props:["label","code"],setup(e){const t=G(!0),a=()=>t.value=!t.value;return(o,l)=>{const u=T("SuiGrid");return S(),we("section",null,[i(u,{columns:2},{default:n(()=>[i(ry,ui({label:e.label,"on-click":a},o.$attrs),{default:n(()=>[ji(o.$slots,"description")]),_:3},16,["label"]),i(cy,{code:e.code,"hide-code":t.value},{default:n(()=>[ji(o.$slots,"example")]),_:3},8,["code","hide-code"])]),_:3})])}}},dy=`<template>
  <SuiButton @click="onClick">{{ label }}</SuiButton>
</template>

<script setup>
import { ref } from 'vue'
import { SuiButton } from 'vue-fomantic-ui'

const label = ref('Follow')
const onClick = () => label.value = label.value === 'Follow' ? 'Following' : 'Follow'
<\/script>`,my={__name:"ButtonDoc",setup(e){const t=G("Follow"),a=()=>t.value=t.value==="Follow"?"Following":"Follow";return(o,l)=>(S(),C(I,{label:"Button",code:dy},{description:n(()=>[r(" A standard button ")]),example:n(()=>[i(s(P),{onClick:a},{default:n(()=>[r($e(t.value),1)]),_:1})]),_:1}))}},py=`<template>
  <SuiButton primary>Save</SuiButton>
  <SuiButton secondary>Okay</SuiButton>
  <SuiButton>Cancel</SuiButton>
</template>`,fy={__name:"EmphasisDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Emphasis",code:py},{description:n(()=>[r(" A button can be formatted to show different levels of emphasis ")]),example:n(()=>[i(s(P),{primary:""},{default:n(()=>[r("Save")]),_:1}),i(s(P),{secondary:""},{default:n(()=>[r("Okay")]),_:1}),i(s(P),null,{default:n(()=>[r("Cancel")]),_:1})]),_:1}))}},gy=`<template>
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
</template>`,hy={__name:"AnimatedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Animated",code:gy},{description:n(()=>[r(" A button can animate to show hidden content ")]),example:n(()=>[i(s(P),{animated:""},{default:n(()=>[i(s(Ei),{visible:""},{default:n(()=>[r("Next")]),_:1}),i(s(Ei),{hidden:""},{default:n(()=>[i(s(W),{name:"arrow right"})]),_:1})]),_:1}),i(s(P),{animated:"vertical"},{default:n(()=>[i(s(Ei),{visible:""},{default:n(()=>[i(s(W),{name:"shop"})]),_:1}),i(s(Ei),{hidden:""},{default:n(()=>[r("Shop")]),_:1})]),_:1}),i(s(P),{animated:"fade"},{default:n(()=>[i(s(Ei),{visible:""},{default:n(()=>[r(" Sign-up for a Pro account ")]),_:1}),i(s(Ei),{hidden:""},{default:n(()=>[r("$12.99 a month")]),_:1})]),_:1})]),_:1}))}},_y=`<template>
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
</template>`,vy={__name:"LabeledDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Labeled",code:_y},{description:n(()=>[r(" A button can appear alongside a label ")]),example:n(()=>[i(s(P),{labeled:"right",as:"div"},{default:n(()=>[i(s(P),{icon:"heart",content:" Like"}),i(s(N),{basic:""},{default:n(()=>[r("2,048")]),_:1})]),_:1}),i(s(P),{labeled:"left",as:"div"},{default:n(()=>[i(s(N),{basic:"",pointing:"right"},{default:n(()=>[r("2,048")]),_:1}),i(s(P),{icon:"heart",content:" Like"})]),_:1}),i(s(P),{labeled:"left",as:"div"},{default:n(()=>[i(s(N),{basic:""},{default:n(()=>[r("1,048")]),_:1}),i(s(P),{icon:"fork"})]),_:1})]),_:1}))}},by=`<template>
  <SuiButton icon="cloud" />
</template>`,Sy={__name:"IconDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Icon",code:by},{description:n(()=>[r(" A button can have only an icon ")]),example:n(()=>[i(s(P),{icon:"cloud"})]),_:1}))}},yy=`<template>
  <SuiButton labeled icon="pause" content="Pause" />
  <SuiButton labeled="right" icon="right arrow" content="Next" />
  <SuiButton labeled icon>
    <SuiIcon loading name="spinner" />
    Loading
  </SuiButton>
</template>`,wy={__name:"LabeledIconDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Labeled Icon",code:yy},{description:n(()=>[r(" A button can use an icon as a label ")]),example:n(()=>[i(s(P),{labeled:"",icon:"pause",content:"Pause"}),i(s(P),{labeled:"right",icon:"right arrow",content:"Next"}),i(s(P),{labeled:"",icon:""},{default:n(()=>[i(s(W),{loading:"",name:"spinner"}),r(" Loading ")]),_:1})]),_:1}))}},Cy=`<template>
  <SuiButton basic primary>Primary</SuiButton>
  <SuiButton basic secondary>Secondary</SuiButton>
  <SuiButton basic positive>Positive</SuiButton>
  <SuiButton basic negative>Negative</SuiButton>
</template>`,xy={__name:"BasicDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Basic",code:Cy},{description:n(()=>[r(" A basic button is less pronounced ")]),example:n(()=>[i(s(P),{basic:"",primary:""},{default:n(()=>[r("Primary")]),_:1}),i(s(P),{basic:"",secondary:""},{default:n(()=>[r("Secondary")]),_:1}),i(s(P),{basic:"",positive:""},{default:n(()=>[r("Positive")]),_:1}),i(s(P),{basic:"",negative:""},{default:n(()=>[r("Negative")]),_:1})]),_:1}))}},Ay=`<template>
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
</template>`,ky={__name:"TertiaryDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Tertiary",code:Ay},{description:n(()=>[r(" An none bordered less important button ")]),example:n(()=>[i(s(P),{tertiary:"",primary:""},{default:n(()=>[r("Primary")]),_:1}),i(s(P),{tertiary:"",secondary:""},{default:n(()=>[r("Secondary")]),_:1}),i(s(P),{tertiary:"",color:"red"},{default:n(()=>[r("Red")]),_:1}),i(s(P),{tertiary:"",color:"orange"},{default:n(()=>[r("Orange")]),_:1}),i(s(P),{tertiary:"",color:"yellow"},{default:n(()=>[r("Yellow")]),_:1}),i(s(P),{tertiary:"",color:"olive"},{default:n(()=>[r("Olive")]),_:1}),i(s(P),{tertiary:"",color:"green"},{default:n(()=>[r("Green")]),_:1}),i(s(P),{tertiary:"",color:"teal"},{default:n(()=>[r("Teal")]),_:1}),i(s(P),{tertiary:"",color:"blue"},{default:n(()=>[r("Blue")]),_:1}),i(s(P),{tertiary:"",color:"violet"},{default:n(()=>[r("Violet")]),_:1}),i(s(P),{tertiary:"",color:"purple"},{default:n(()=>[r("Purple")]),_:1}),i(s(P),{tertiary:"",color:"pink"},{default:n(()=>[r("Pink")]),_:1}),i(s(P),{tertiary:"",color:"brown"},{default:n(()=>[r("Brown")]),_:1}),i(s(P),{tertiary:"",color:"grey"},{default:n(()=>[r("Grey")]),_:1}),i(s(P),{tertiary:"",color:"black"},{default:n(()=>[r("Black")]),_:1})]),_:1}))}},By=`<template>
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
</template>`,$y={__name:"InvertedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Inverted",code:By},{description:n(()=>[r(" A button can be formatted to appear on dark backgrounds ")]),example:n(()=>[i(s(O),{inverted:""},{default:n(()=>[i(s(P),{inverted:"",primary:""},{default:n(()=>[r("Primary")]),_:1}),i(s(P),{inverted:"",secondary:""},{default:n(()=>[r("Secondary")]),_:1}),i(s(P),{inverted:"",color:"red"},{default:n(()=>[r("Red")]),_:1}),i(s(P),{inverted:"",color:"orange"},{default:n(()=>[r("Orange")]),_:1}),i(s(P),{inverted:"",color:"yellow"},{default:n(()=>[r("Yellow")]),_:1}),i(s(P),{inverted:"",color:"olive"},{default:n(()=>[r("Olive")]),_:1}),i(s(P),{inverted:"",color:"green"},{default:n(()=>[r("Green")]),_:1}),i(s(P),{inverted:"",color:"teal"},{default:n(()=>[r("Teal")]),_:1}),i(s(P),{inverted:"",color:"blue"},{default:n(()=>[r("Blue")]),_:1}),i(s(P),{inverted:"",color:"violet"},{default:n(()=>[r("Violet")]),_:1}),i(s(P),{inverted:"",color:"purple"},{default:n(()=>[r("Purple")]),_:1}),i(s(P),{inverted:"",color:"pink"},{default:n(()=>[r("Pink")]),_:1}),i(s(P),{inverted:"",color:"brown"},{default:n(()=>[r("Brown")]),_:1}),i(s(P),{inverted:"",color:"grey"},{default:n(()=>[r("Grey")]),_:1}),i(s(P),{inverted:"",color:"black"},{default:n(()=>[r("Black")]),_:1})]),_:1})]),_:1}))}},Ty=`<template>
  <SuiButtonGroup>
    <SuiButton content="One" />
    <SuiButton content="Two" />
    <SuiButton content="Three" />
  </SuiButtonGroup>
</template>`,Ly={__name:"ButtonsDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Buttons",code:Ty},{description:n(()=>[r(" Buttons can exist together as a group ")]),example:n(()=>[i(s(ft),null,{default:n(()=>[i(s(P),{content:"One"}),i(s(P),{content:"Two"}),i(s(P),{content:"Three"})]),_:1})]),_:1}))}},Iy=`<template>
  <SuiButtonGroup icon>
    <SuiButton icon="align left" />
    <SuiButton icon="align center" />
    <SuiButton icon="align right" />
    <SuiButton icon="align justify" />
  </SuiButtonGroup>
</template>`,Dy={__name:"IconButtonsDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Icon Buttons",code:Iy},{description:n(()=>[r(" Button groups can show groups of icons ")]),example:n(()=>[i(s(ft),{icon:""},{default:n(()=>[i(s(P),{icon:"align left"}),i(s(P),{icon:"align center"}),i(s(P),{icon:"align right"}),i(s(P),{icon:"align justify"})]),_:1})]),_:1}))}},Ey=$("div",{class:"or"},null,-1),Ry=$("div",{class:"or","data-text":"ou"},null,-1),Py=`<template>
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
</template>`,zy={__name:"ConditionalsDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Conditionals",code:Py},{description:n(()=>[r(" Button groups can contain conditionals ")]),example:n(()=>[i(s(ft),null,{default:n(()=>[i(s(P),{content:"Cancel"}),Ey,i(s(P),{content:"Save",positive:""})]),_:1}),i(s(ft),null,{default:n(()=>[i(s(P),{content:"un"}),Ry,i(s(P),{content:"deux",positive:""})]),_:1})]),_:1}))}},Fy=`<template>
  <SuiButton active icon="user" content=" Follow" />
</template>`,Vy={__name:"ActiveDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Active",code:Fy},{description:n(()=>[r(" A button can show it is currently the active user selection ")]),example:n(()=>[i(s(P),{active:"",icon:"user",content:" Follow"})]),_:1}))}},My=`<template>
  <SuiButton disabled icon="user" content=" Followed" />
</template>`,Hy={__name:"DisabledDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Disabled",code:My},{description:n(()=>[r(" A button can show it is currently unable to be interacted with ")]),example:n(()=>[i(s(P),{disabled:"",icon:"user",content:" Followed"})]),_:1}))}},Oy=`<template>
  <SuiButton loading content="Loading" />
  <SuiButton loading="double" primary content="Loading" />
  <SuiButton loading="elastic" secondary content="Loading" />
</template>`,Ny={__name:"LoadingDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Loading",code:Oy},{description:n(()=>[r(" A button can show a loading indicator ")]),example:n(()=>[i(s(P),{loading:"",content:"Loading"}),i(s(P),{loading:"double",primary:"",content:"Loading"}),i(s(P),{loading:"elastic",secondary:"",content:"Loading"})]),_:1}))}},qy=`<template>
  <SuiButton facebook icon="facebook" content=" Facebook" />
  <SuiButton twitter icon="twitter" content=" Twitter" />
  <SuiButton vk icon="vk" content="VK" />
  <SuiButton linkedin icon="linkedin" content=" LinkedIn" />
  <SuiButton instagram icon="instagram" content=" Instagram" />
  <SuiButton youtube icon="youtube" content=" YouTube" />
  <SuiButton whatsapp icon="whatsapp" content=" WhatsApp" />
  <SuiButton telegram icon="telegram" content=" Telegram" />
</template>`,Gy={__name:"SocialDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Social",code:qy},{description:n(()=>[r(" A button can be formatted to link to a social website ")]),example:n(()=>[i(s(P),{facebook:"",icon:"facebook",content:" Facebook"}),i(s(P),{twitter:"",icon:"twitter",content:" Twitter"}),i(s(P),{vk:"",icon:"vk",content:"VK"}),i(s(P),{linkedin:"",icon:"linkedin",content:" LinkedIn"}),i(s(P),{instagram:"",icon:"instagram",content:" Instagram"}),i(s(P),{youtube:"",icon:"youtube",content:" YouTube"}),i(s(P),{whatsapp:"",icon:"whatsapp",content:" WhatsApp"}),i(s(P),{telegram:"",icon:"telegram",content:" Telegram"})]),_:1}))}},jy=`<template>
  <SuiButton size="mini" content="Mini" />
  <SuiButton size="tiny" content="Tiny" />
  <SuiButton size="small" content="Small" />
  <SuiButton size="medium" content="Medium" />
  <SuiButton size="large" content="Large" />
  <SuiButton size="big" content="Big" />
  <SuiButton size="huge" content="Huge" />
  <SuiButton size="massive" content="Massive" />
</template>`,Uy={__name:"SizeDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Size",code:jy},{description:n(()=>[r(" A button can have different sizes ")]),example:n(()=>[i(s(P),{size:"mini",content:"Mini"}),i(s(P),{size:"tiny",content:"Tiny"}),i(s(P),{size:"small",content:"Small"}),i(s(P),{size:"medium",content:"Medium"}),i(s(P),{size:"large",content:"Large"}),i(s(P),{size:"big",content:"Big"}),i(s(P),{size:"huge",content:"Huge"}),i(s(P),{size:"massive",content:"Massive"})]),_:1}))}},Yy=`<template>
  <SuiButton floated="left" content="Left Floated" />
  <SuiButton floated="right" content="Right Floated" />
</template>`,Wy={__name:"FloatedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Floated",code:Yy},{description:n(()=>[r(" A button can be aligned to the left or right of its container ")]),example:n(()=>[i(s(P),{floated:"left",content:"Left Floated"}),i(s(P),{floated:"right",content:"Right Floated"})]),_:1}))}},Ky=`<template>
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
</template>`,Xy={__name:"ColoredDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Colored",code:Ky},{description:n(()=>[r(" A button can have different colors ")]),example:n(()=>[i(s(P),{color:"red"},{default:n(()=>[r("Red")]),_:1}),i(s(P),{color:"orange"},{default:n(()=>[r("Orange")]),_:1}),i(s(P),{color:"yellow"},{default:n(()=>[r("Yellow")]),_:1}),i(s(P),{color:"olive"},{default:n(()=>[r("Olive")]),_:1}),i(s(P),{color:"green"},{default:n(()=>[r("Green")]),_:1}),i(s(P),{color:"teal"},{default:n(()=>[r("Teal")]),_:1}),i(s(P),{color:"blue"},{default:n(()=>[r("Blue")]),_:1}),i(s(P),{color:"violet"},{default:n(()=>[r("Violet")]),_:1}),i(s(P),{color:"purple"},{default:n(()=>[r("Purple")]),_:1}),i(s(P),{color:"pink"},{default:n(()=>[r("Pink")]),_:1}),i(s(P),{color:"brown"},{default:n(()=>[r("Brown")]),_:1}),i(s(P),{color:"grey"},{default:n(()=>[r("Grey")]),_:1}),i(s(P),{color:"black"},{default:n(()=>[r("Black")]),_:1})]),_:1}))}},Jy=`<template>
  <SuiButton compact content="Hold" />
  <SuiButton compact icon="pause" />
  <SuiButton compact labeled icon="pause" content="Pause" />
</template>`,Qy={__name:"CompactDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Compact",code:Jy},{description:n(()=>[r(" A button can reduce its padding to fit into tighter spaces ")]),example:n(()=>[i(s(P),{compact:"",content:"Hold"}),i(s(P),{compact:"",icon:"pause"}),i(s(P),{compact:"",labeled:"",icon:"pause",content:"Pause"})]),_:1}))}},Zy=`<template>
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
<\/script>`,ew={__name:"ToggleDoc",setup(e){const t=G(!1);return(a,o)=>(S(),C(I,{label:"Toggle",code:Zy},{description:n(()=>[r(" A button can be formatted to toggle on and off ")]),example:n(()=>[i(s(P),{toggle:"",active:t.value,onClick:()=>t.value=!t.value,content:t.value?"Voted":"Vote",style:{"min-width":"200px"}},null,8,["active","onClick","content"])]),_:1}))}},tw=`<template>
  <SuiButton positive content="Positive Button" />
</template>`,iw={__name:"PositiveDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Positive",code:tw},{description:n(()=>[r(" A button can hint towards a positive consequence ")]),example:n(()=>[i(s(P),{positive:"",content:"Positive Button"})]),_:1}))}},nw=`<template>
  <SuiButton negative content="Negative Button" />
</template>`,aw={__name:"NegativeDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Negative",code:nw},{description:n(()=>[r(" A button can hint towards a negative consequence ")]),example:n(()=>[i(s(P),{negative:"",content:"Negative Button"})]),_:1}))}},ow=`<template>
  <SuiButton fluid content="Fits container" />
</template>`,lw={__name:"FluidDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Fluid",code:ow},{description:n(()=>[r(" A button can take the width of its container ")]),example:n(()=>[i(s(P),{fluid:"",content:"Fits container"})]),_:1}))}},rw=`<template>
  <SuiButton circular icon="settings" />
</template>`,sw={__name:"CircularDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Circular",code:rw},{description:n(()=>[r(" A button can be circular ")]),example:n(()=>[i(s(P),{circular:"",icon:"settings"})]),_:1}))}},uw=$("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?",-1),cw=`<template>
  <SuiButton attached="top" content="Top" />
  <SuiSegment>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?</p>
  </SuiSegment>
  <SuiButton attached="bottom" content="Bottom" />
</template>`,dw={__name:"VerticallyAttachedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Vertically Attached",code:cw},{description:n(()=>[r(" A button can be attached to the top or bottom of other content ")]),example:n(()=>[i(s(P),{attached:"top",content:"Top"}),i(s(O),{attached:""},{default:n(()=>[uw]),_:1}),i(s(P),{attached:"bottom",content:"Bottom"})]),_:1}))}},mw=`<template>
  <SuiButton attached="left" content="Left" />
  <SuiButton attached="right" content="Right" />
</template>`,pw={__name:"HorizontallyAttachedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Horizontally Attached",code:mw},{description:n(()=>[r(" A button can be attached to the left or right of other content ")]),example:n(()=>[i(s(P),{attached:"left",content:"Left"}),i(s(P),{attached:"right",content:"Right"})]),_:1}))}},fw=`<template>
  <SuiButtonGroup vertical>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,gw={__name:"VerticalButtonsDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Vertical Buttons",code:fw},{description:n(()=>[r(" Groups can be formatted to appear vertically ")]),example:n(()=>[i(s(ft),{vertical:""},{default:n(()=>[i(s(P),null,{default:n(()=>[r("Feed")]),_:1}),i(s(P),null,{default:n(()=>[r("Messages")]),_:1}),i(s(P),null,{default:n(()=>[r("Events")]),_:1}),i(s(P),null,{default:n(()=>[r("Photos")]),_:1})]),_:1})]),_:1}))}},hw=`<template>
  <SuiButtonGroup stackable>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,_w={__name:"StackableButtonsDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Stackable Buttons",code:hw},{description:n(()=>[r(" Horizontal groups can automatically be stacked on mobile devices ")]),example:n(()=>[i(s(ft),{stackable:""},{default:n(()=>[i(s(P),null,{default:n(()=>[r("Feed")]),_:1}),i(s(P),null,{default:n(()=>[r("Messages")]),_:1}),i(s(P),null,{default:n(()=>[r("Events")]),_:1}),i(s(P),null,{default:n(()=>[r("Photos")]),_:1})]),_:1})]),_:1}))}},vw=`<template>
  <SuiButtonGroup vertical labeled icon>
    <SuiButton icon="pause" content="Pause" />
    <SuiButton icon="play" content="Play" />
    <SuiButton icon="shuffle" content="Shuffle" />
  </SuiButtonGroup>
</template>`,bw={__name:"LabeledIconButtonsDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Icon Buttons",code:vw},{description:n(()=>[r(" Groups can be formatted as labeled icons ")]),example:n(()=>[i(s(ft),{vertical:"",labeled:"",icon:""},{default:n(()=>[i(s(P),{icon:"pause",content:"Pause"}),i(s(P),{icon:"play",content:"Play"}),i(s(P),{icon:"shuffle",content:"Shuffle"})]),_:1})]),_:1}))}},Sw=`<template>
  <SuiButtonGroup>
    <SuiButton labeled icon="left chevron" content="Back" />
    <SuiButton icon="stop" content="Stop" />
    <SuiButton icon labeled="right">
      <SuiIcon name="right chevron" />
      Forward
    </SuiButton>
  </SuiButtonGroup>
</template>`,yw={__name:"MixedGroupDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Mixed Group",code:Sw},{description:n(()=>[r(" Button groups can show groups of icons ")]),example:n(()=>[i(s(ft),null,{default:n(()=>[i(s(P),{labeled:"",icon:"left chevron",content:"Back"}),i(s(P),{icon:"stop",content:"Stop"}),i(s(P),{icon:"",labeled:"right"},{default:n(()=>[i(s(W),{name:"right chevron"}),r(" Forward ")]),_:1})]),_:1})]),_:1}))}},ww=`<template>
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
</template>`,Cw={__name:"EqualWidthDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Equal Width",code:ww},{description:n(()=>[r(" Groups can have their widths divided evenly ")]),example:n(()=>[i(s(ft),{widths:5},{default:n(()=>[i(s(P),null,{default:n(()=>[r("Overview")]),_:1}),i(s(P),null,{default:n(()=>[r("Specs")]),_:1}),i(s(P),null,{default:n(()=>[r("Warranty")]),_:1}),i(s(P),null,{default:n(()=>[r("Reviews")]),_:1}),i(s(P),null,{default:n(()=>[r("Support")]),_:1})]),_:1}),i(s(ft),{widths:3},{default:n(()=>[i(s(P),null,{default:n(()=>[r("Overview")]),_:1}),i(s(P),null,{default:n(()=>[r("Specs")]),_:1}),i(s(P),null,{default:n(()=>[r("Support")]),_:1})]),_:1})]),_:1}))}},xw=`<template>
  <SuiButtonGroup color="blue">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Aw={__name:"ColoredButtonsDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Colored Buttons",code:xw},{description:n(()=>[r(" Groups can have a shared color ")]),example:n(()=>[i(s(ft),{color:"blue"},{default:n(()=>[i(s(P),null,{default:n(()=>[r("One")]),_:1}),i(s(P),null,{default:n(()=>[r("Two")]),_:1}),i(s(P),null,{default:n(()=>[r("Three")]),_:1})]),_:1})]),_:1}))}},kw=`<template>
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
</template>`,Bw={__name:"BasicButtonsDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Basic Buttons",code:kw},{description:n(()=>[r(" A button group can be less pronounced ")]),example:n(()=>[i(s(ft),{basic:""},{default:n(()=>[i(s(P),null,{default:n(()=>[r("One")]),_:1}),i(s(P),null,{default:n(()=>[r("Two")]),_:1}),i(s(P),null,{default:n(()=>[r("Three")]),_:1})]),_:1}),i(s(ft),null,{default:n(()=>[i(s(P),{basic:"",color:"red"},{default:n(()=>[r("One")]),_:1}),i(s(P),{basic:"",color:"blue"},{default:n(()=>[r("Two")]),_:1}),i(s(P),{basic:"",color:"green"},{default:n(()=>[r("Three")]),_:1})]),_:1})]),_:1}))}},$w=`<template>
  <SuiButtonGroup size="large">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Tw={__name:"GroupSizesDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Group Sizes",code:$w},{description:n(()=>[r(" Groups can have a shared color ")]),example:n(()=>[i(s(ft),{size:"large"},{default:n(()=>[i(s(P),null,{default:n(()=>[r("One")]),_:1}),i(s(P),null,{default:n(()=>[r("Two")]),_:1}),i(s(P),null,{default:n(()=>[r("Three")]),_:1})]),_:1})]),_:1}))}},Lw={__name:"Button",setup(e){const t=[{id:"button",label:"Button",category:"Types",component:my},{id:"emphasis",label:"Emphasis",category:"Types",component:fy},{id:"animated",label:"Animated",category:"Types",component:hy},{id:"labeled",label:"Labeled",category:"Types",component:vy},{id:"icon",label:"Icon",category:"Types",component:Sy},{id:"labeled-icon",label:"Labeled Icon",category:"Types",component:wy},{id:"basic",label:"Basic",category:"Types",component:xy},{id:"tertiary",label:"Tertiary",category:"Types",component:ky},{id:"inverted",label:"Inverted",category:"Types",component:$y},{id:"buttons",label:"Buttons",category:"Groups",component:Ly},{id:"icon-buttons",label:"Icon Buttons",category:"Groups",component:Dy},{id:"content",label:"Content",category:"Content",component:zy},{id:"active",label:"Active",category:"States",component:Vy},{id:"disabled",label:"Disabled",category:"States",component:Hy},{id:"loading",label:"Loading",category:"States",component:Ny},{id:"social",label:"Social",category:"Variations",component:Gy},{id:"size",label:"Size",category:"Variations",component:Uy},{id:"floated",label:"Floated",category:"Variations",component:Wy},{id:"colored",label:"Colored",category:"Variations",component:Xy},{id:"compact",label:"Compact",category:"Variations",component:Qy},{id:"toggle",label:"Toggle",category:"Variations",component:ew},{id:"positive",label:"Positive",category:"Variations",component:iw},{id:"negative",label:"Negative",category:"Variations",component:aw},{id:"fluid",label:"Fluid",category:"Variations",component:lw},{id:"circular",label:"Circular",category:"Variations",component:sw},{id:"vertically-attached",label:"Vertically Attached",category:"Variations",component:dw},{id:"horizontally-attached",label:"Horizontally Attached",category:"Variations",component:pw},{id:"vertical-buttons",label:"Vertical Buttons",category:"Group Variations",component:gw},{id:"stackable-buttons",label:"Stackable Buttons",category:"Group Variations",component:_w},{id:"labeled-icon-buttons",label:"Labeled Icon Buttons",category:"Group Variations",component:bw},{id:"mixed-group",label:"Mixed Group",category:"Group Variations",component:yw},{id:"equal-width",label:"Equal Width",category:"Group Variations",component:Cw},{id:"colored-buttons",label:"Colored Buttons",category:"Group Variations",component:Aw},{id:"basic-buttons",label:"Basic Buttons",category:"Group Variations",component:Bw},{id:"group-sizes",label:"Group Sizes",category:"Group Variations",component:Tw}];return(a,o)=>(S(),C(lt,{title:"Button",description:"A button indicates a possible user action","component-docs":t}))}},Iw=$("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Dw=`<template>
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
</template>`,Ew={__name:"ContainerDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Container",code:Dw},{description:n(()=>[r(" A standard container ")]),example:n(()=>[i(s(Ni),null,{default:n(()=>[Iw]),_:1})]),_:1}))}},Rw=$("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Pw=`<template>
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
</template>`,zw={__name:"TextContainerDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Text Container",code:Pw},{description:n(()=>[r(" A container can reduce its maximum width to more naturally accommodate a single column of text ")]),example:n(()=>[i(s(Ni),{text:""},{default:n(()=>[i(s(fe),{as:"h2"},{default:n(()=>[r("Header")]),_:1}),Rw]),_:1})]),_:1}))}},Fw=`<template>
  <SuiContainer textAlign="left">Left Aligned</SuiContainer>
  <SuiContainer textAlign="center">Center Aligned</SuiContainer>
  <SuiContainer textAlign="right">Right Aligned</SuiContainer>
</template>`,Vw={__name:"TextAlignmentDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Text Alignment",code:Fw},{description:n(()=>[r(" A container can specify its text alignment ")]),example:n(()=>[i(s(Ni),{textAlign:"left"},{default:n(()=>[r("Left Aligned")]),_:1}),i(s(Ni),{textAlign:"center"},{default:n(()=>[r("Center Aligned")]),_:1}),i(s(Ni),{textAlign:"right"},{default:n(()=>[r("Right Aligned")]),_:1})]),_:1}))}},Mw=$("p",null," Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today. ",-1),Hw=`<template>
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
</template>`,Ow={__name:"FluidDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Fluid",code:Hw},{description:n(()=>[r(" A fluid container has no maximum width ")]),example:n(()=>[i(s(Ni),{fluid:""},{default:n(()=>[i(s(fe),{as:"h2"},{default:n(()=>[r("Dogs Roles with Humans")]),_:1}),Mw]),_:1})]),_:1}))}},Nw={__name:"Container",setup(e){const t=[{id:"container",label:"Container",category:"Types",component:Ew},{id:"text-container",label:"Text Container",category:"Types",component:zw},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:Vw},{id:"fluid",label:"Fluid",category:"Variations",component:Ow}];return(a,o)=>(S(),C(lt,{title:"Container",description:"A container limits content to a maximum width","component-docs":t}))}},qw=`<template>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider />
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,Gw={__name:"DividerDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Divider",code:qw},{description:n(()=>[r(" A standard divider ")]),example:n(()=>[i(s(le),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),i(s(Fe)),i(s(le),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},jw=$("label",null,"Username",-1),Uw=$("input",{type:"text",placeholder:"Username"},null,-1),Yw=$("label",null,"Password",-1),Ww=$("input",{type:"password",placeholder:"Password"},null,-1),Kw=`<template>
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
</template>`,Xw={__name:"VerticalDividerDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Vertical Divider",code:Kw},{description:n(()=>[r(" A divider can segment content vertically. ")]),example:n(()=>[i(s(O),{placeholder:""},{default:n(()=>[i(s(ba),{columns:"equal"},{default:n(()=>[i(s(kt),null,{default:n(()=>[i(s(Ht),null,{default:n(()=>[i(s(it),null,{default:n(()=>[jw,Uw]),_:1}),i(s(it),null,{default:n(()=>[Yw,Ww]),_:1}),i(s(P),{primary:""},{default:n(()=>[r("Login")]),_:1})]),_:1})]),_:1}),i(s(kt),{textAlign:"middle"},{default:n(()=>[i(s(P),{secondary:"",icon:"signup",content:"Sign Up"})]),_:1})]),_:1}),i(s(Fe),{vertical:""},{default:n(()=>[r("Or")]),_:1})]),_:1})]),_:1}))}},Jw=`<template>
  <SuiSegment basic textAlign="center">
    <SuiInput icon="search" iconPosition="left" action="Search" placeholder="Order #" />
    <SuiDivider horizontal>Or</SuiDivider>
    <SuiButton labeled icon="add" color="green" content="Create New Order" />
  </SuiSegment>
</template>`,Qw={__name:"HorizontalDividerDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Horizontal Divider",code:Jw},{description:n(()=>[r(" A divider can segment content horizontally ")]),example:n(()=>[i(s(O),{basic:"",textAlign:"center"},{default:n(()=>[i(s(Ze),{icon:"search",iconPosition:"left",action:"Search",placeholder:"Order #"}),i(s(Fe),{horizontal:""},{default:n(()=>[r("Or")]),_:1}),i(s(P),{labeled:"",icon:"add",color:"green",content:"Create New Order"})]),_:1})]),_:1}))}},Zw=`<template>
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
</template>`,eC={__name:"HorizontalAlignmentDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Horizontal Alignment",code:Zw},{description:n(()=>[r(" A horizontal divider can be aligned ")]),example:n(()=>[i(s(Fe),{horizontal:"",textAlign:"left"},{default:n(()=>[i(s(W),{name:"left align"}),r(" Left Aligned ")]),_:1}),i(s(Fe),{horizontal:"",textAlign:"center"},{default:n(()=>[i(s(W),{name:"center align"}),r(" Center Aligned ")]),_:1}),i(s(Fe),{horizontal:"",textAlign:"right"},{default:n(()=>[i(s(W),{name:"right align"}),r(" Right Aligned ")]),_:1})]),_:1}))}},tC=`<template>
  <SuiSegment inverted>
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider inverted />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider horizontal inverted>Horizontal</SuiDivider>
  </SuiSegment>
</template>`,iC={__name:"InvertedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Inverted",code:tC},{description:n(()=>[r(" A divider can have its colors inverted ")]),example:n(()=>[i(s(O),{inverted:""},{default:n(()=>[i(s(le),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),i(s(Fe),{inverted:""}),i(s(le),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),i(s(Fe),{horizontal:"",inverted:""},{default:n(()=>[r("Horizontal")]),_:1})]),_:1})]),_:1}))}},nC=`<template>
  <SuiSegment>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
    <SuiDivider fitted />
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
  </SuiSegment>
</template>`,aC={__name:"FittedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Inverted",code:nC},{description:n(()=>[r(" A divider can be fitted, without any space above or below it. ")]),example:n(()=>[i(s(O),null,{default:n(()=>[r(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),i(s(Fe),{fitted:""}),r(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. ")]),_:1})]),_:1}))}},oC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider hidden />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,lC={__name:"HiddenDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Hidden",code:oC},{description:n(()=>[r(" A hidden divider divides content without creating a dividing line ")]),example:n(()=>[i(s(fe),null,{default:n(()=>[r("Section One")]),_:1}),i(s(le),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),i(s(Fe),{hidden:""}),i(s(fe),null,{default:n(()=>[r("Section Two")]),_:1}),i(s(le),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},rC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider section />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,sC={__name:"SectionDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Section",code:rC},{description:n(()=>[r(" A divider can provide greater margins to divide sections of content ")]),example:n(()=>[i(s(fe),null,{default:n(()=>[r("Section One")]),_:1}),i(s(le),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),i(s(Fe),{section:""}),i(s(fe),null,{default:n(()=>[r("Section Two")]),_:1}),i(s(le),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},uC=`<template>
  <SuiSegment>
    <SuiHeader floated="right">Section One</SuiHeader>
    <SuiDivider clearing />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,cC={__name:"ClearingDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Clearing",code:uC},{description:n(()=>[r(" A divider can clear the contents above it ")]),example:n(()=>[i(s(O),null,{default:n(()=>[i(s(fe),{floated:"right"},{default:n(()=>[r("Section One")]),_:1}),i(s(Fe),{clearing:""}),i(s(le),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},dC=`<template>
  <SuiDivider size="mini">MINI</SuiDivider>
  <SuiDivider size="tiny">TINY</SuiDivider>
  <SuiDivider size="small">SMALL</SuiDivider>
  <SuiDivider size="large">LARGE</SuiDivider>
  <SuiDivider size="big">BIG</SuiDivider>
  <SuiDivider size="huge">HUGE</SuiDivider>
  <SuiDivider size="massive">MASSIVE</SuiDivider>
</template>`,mC={__name:"SizeDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Size",code:dC},{description:n(()=>[r(" A divider text can vary in size ")]),example:n(()=>[i(s(Fe),{horizontal:"",size:"mini"},{default:n(()=>[r("MINI")]),_:1}),i(s(Fe),{horizontal:"",size:"tiny"},{default:n(()=>[r("TINY")]),_:1}),i(s(Fe),{horizontal:"",size:"small"},{default:n(()=>[r("SMALL")]),_:1}),i(s(Fe),{horizontal:"",size:"large"},{default:n(()=>[r("LARGE")]),_:1}),i(s(Fe),{horizontal:"",size:"big"},{default:n(()=>[r("BIG")]),_:1}),i(s(Fe),{horizontal:"",size:"huge"},{default:n(()=>[r("HUGE")]),_:1}),i(s(Fe),{horizontal:"",size:"massive"},{default:n(()=>[r("MASSIVE")]),_:1})]),_:1}))}},pC={__name:"Divider",setup(e){const t=[{id:"divider",label:"Divider",category:"Types",component:Gw},{id:"vertical-divider",label:"Vertical Divider",category:"Types",component:Xw},{id:"horizontal-divider",label:"Horizontal Divider",category:"Types",component:Qw},{id:"horizontal-alignment",label:"Horizontal Alignment",category:"Types",component:eC},{id:"inverted",label:"Inverted",category:"Variations",component:iC},{id:"fitted",label:"Fitted",category:"Variations",component:aC},{id:"hidden",label:"Hidden",category:"Variations",component:lC},{id:"section",label:"Section",category:"Variations",component:sC},{id:"clearing",label:"Clearing",category:"Variations",component:cC},{id:"size",label:"Size",category:"Variations",component:mC}];return(a,o)=>(S(),C(lt,{title:"Divider",description:"A divider visually segments content into groups","component-docs":t}))}},fC=`<template>
  <SuiEmoji name="anguished" disabled />
</template>`,gC={__name:"DisabledDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Disabled",code:fC},{description:n(()=>[r(" An emoji can show that it is disabled ")]),example:n(()=>[i(s(Tt),{name:"anguished",disabled:""})]),_:1}))}},hC=`<template>
  <SuiEmoji name="angel" loading />
  <SuiEmoji name="blush" loading />
  <SuiEmoji name="grin" loading />
</template>`,_C={__name:"LoadingDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Loading",code:hC},{description:n(()=>[r(" An emoji can be used as a simple loader ")]),example:n(()=>[i(s(Tt),{name:"angel",loading:""}),i(s(Tt),{name:"blush",loading:""}),i(s(Tt),{name:"grin",loading:""})]),_:1}))}},vC=`<template>
  <SuiEmoji name="relaxed" size="small" />
  <SuiEmoji name="relaxed" size="medium" />
  <SuiEmoji name="relaxed" size="large" />
  <SuiEmoji name="relaxed" size="big" />
</template>`,bC={__name:"SizeDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Size",code:vC},{description:n(()=>[r(" An emoji can vary in size ")]),example:n(()=>[i(s(Tt),{name:"relaxed",size:"small"}),i(s(Tt),{name:"relaxed",size:"medium"}),i(s(Tt),{name:"relaxed",size:"large"}),i(s(Tt),{name:"relaxed",size:"big"})]),_:1}))}},SC=`<template>
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
</template>`,yC={__name:"AutosizingDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Autosizing",code:SC},{description:n(()=>[r(" If no specific size class is given, all emojis are automatically sized according to the current element font-size ")]),example:n(()=>[i(s(fe),{size:"small"},{default:n(()=>[r(" Within a Header "),i(s(Tt),{name:"relaxed"})]),_:1}),i(s(P),{as:"div",size:"large"},{default:n(()=>[r(" Within a Button "),i(s(Tt),{name:"relaxed"})]),_:1}),i(s(N),{size:"massive"},{default:n(()=>[r(" Within a Label "),i(s(Tt),{name:"relaxed"})]),_:1})]),_:1}))}},wC=`<template>
  <SuiEmoji link name="slight_smile" size="medium" />
</template>`,CC={__name:"LinkDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Link",code:wC},{description:n(()=>[r(" An emoji can be formatted as a link ")]),example:n(()=>[i(s(Tt),{link:"",name:"slight_smile",size:"medium"})]),_:1}))}},xC={__name:"Emoji",setup(e){const t=[{id:"disabled",label:"Disabled",category:"States",component:gC},{id:"loading",label:"Loading",category:"States",component:_C},{id:"size",label:"Size",category:"Variations",component:bC},{id:"autosizing",label:"Autosizing",category:"Variations",component:yC},{id:"link",label:"Link",category:"Variations",component:CC}];return(a,o)=>(S(),C(lt,{title:"Emoji",description:"An emoji is a glyph used to represent an emotional state","component-docs":t}))}},AC=`<template>
  <SuiFlag name="de" size="small" />
  <SuiFlag name="fr" size="medium" />
  <SuiFlag name="li" size="large" />
  <SuiFlag name="jp" size="big" />
  <SuiFlag name="gb" size="huge" />
  <SuiFlag name="un" size="massive" />
</template>`,kC={__name:"SizeDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Size",code:AC},{description:n(()=>[r(" A flag can vary in size ")]),example:n(()=>[i(s(Wt),{name:"de",size:"small"}),i(s(Wt),{name:"fr",size:"medium"}),i(s(Wt),{name:"li",size:"large"}),i(s(Wt),{name:"jp",size:"big"}),i(s(Wt),{name:"gb",size:"huge"}),i(s(Wt),{name:"un",size:"massive"})]),_:1}))}},BC=`<template>
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
</template>`,$C={__name:"AutosizingDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Autosizing",code:BC},{description:n(()=>[r(" If no specific size class is given, all flags are automatically sized according to the current element font-size ")]),example:n(()=>[i(s(fe),{size:"small"},{default:n(()=>[r(" Within a Header "),i(s(Wt),{name:"us"})]),_:1}),i(s(P),{as:"div",size:"large"},{default:n(()=>[r(" Within a Button "),i(s(Wt),{name:"eu"})]),_:1}),i(s(N),{size:"massive"},{default:n(()=>[r(" Within a Label "),i(s(Wt),{name:"pirate"})]),_:1})]),_:1}))}},TC={__name:"Flag",setup(e){const t=[{id:"size",label:"Size",category:"Types",component:kC},{id:"autosizing",label:"Autosizing",category:"Types",component:$C}];return(a,o)=>(S(),C(lt,{title:"Flag",description:"A flag is used to represent a political state","component-docs":t}))}},LC=`<template>
  <SuiHeader as="h1">First Header</SuiHeader>
  <SuiHeader as="h2">Second Header</SuiHeader>
  <SuiHeader as="h3">Third Header</SuiHeader>
  <SuiHeader as="h4">Fourth Header</SuiHeader>
  <SuiHeader as="h5">Fifth Header</SuiHeader>
</template>`,IC={__name:"PageHeadersDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Page Headers",code:LC},{description:n(()=>[r(" Headers may be oriented to give the hierarchy of a section in the context of the page ")]),example:n(()=>[i(s(fe),{as:"h1"},{default:n(()=>[r("First Header")]),_:1}),i(s(fe),{as:"h2"},{default:n(()=>[r("Second Header")]),_:1}),i(s(fe),{as:"h3"},{default:n(()=>[r("Third Header")]),_:1}),i(s(fe),{as:"h4"},{default:n(()=>[r("Fourth Header")]),_:1}),i(s(fe),{as:"h5"},{default:n(()=>[r("Fifth Header")]),_:1})]),_:1}))}},DC=`<template>
  <SuiHeader size="huge">Huge Header</SuiHeader>
  <SuiHeader size="large">Large Header</SuiHeader>
  <SuiHeader size="medium">Medium Header</SuiHeader>
  <SuiHeader size="small">Small Header</SuiHeader>
  <SuiHeader size="tiny">Tiny Header</SuiHeader>
</template>`,EC={__name:"ContentHeadersDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Content Headers",code:DC},{description:n(()=>[r(" Headers may be oriented to give the importance of a section in the context of the content that surrounds it ")]),example:n(()=>[i(s(fe),{size:"huge"},{default:n(()=>[r("Huge Header")]),_:1}),i(s(fe),{size:"large"},{default:n(()=>[r("Large Header")]),_:1}),i(s(fe),{size:"medium"},{default:n(()=>[r("Medium Header")]),_:1}),i(s(fe),{size:"small"},{default:n(()=>[r("Small Header")]),_:1}),i(s(fe),{size:"tiny"},{default:n(()=>[r("Tiny Header")]),_:1})]),_:1}))}},RC=`<template>
  <SuiHeader icon>
    <SuiIcon name="settings" />
    <SuiHeaderContent>
      Account Settings
    </SuiHeaderContent>
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,PC={__name:"IconHeadersDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Icon Headers",code:RC},{description:n(()=>[r(" A header can be formatted to emphasize an icon ")]),example:n(()=>[i(s(fe),{icon:""},{default:n(()=>[i(s(W),{name:"settings"}),i(s(_r),null,{default:n(()=>[r(" Account Settings ")]),_:1}),i(s(Ki),null,{default:n(()=>[r(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},zC=$("span",null,"$10.99",-1),FC=`<template>
  <SuiHeader sub>Price</SuiHeader>
  <span>$10.99</span>
</template>`,VC={__name:"SubHeadersDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Sub Headers",code:FC},{description:n(()=>[r(" Headers may be formatted to label smaller or de-emphasized content. ")]),example:n(()=>[i(s(fe),{sub:""},{default:n(()=>[r("Price")]),_:1}),zC]),_:1}))}},MC=`<template>
  <SuiHeader as="h2">
    <SuiImage src="/images/avatar/large/steve.jpg" avatar />
    Steve
  </SuiHeader>
</template>`,HC={__name:"ImageDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Image",code:MC},{description:n(()=>[r(" A header may contain an image ")]),example:n(()=>[i(s(fe),{as:"h2"},{default:n(()=>[i(s(le),{src:"/vue-fomantic-ui/images/avatar/large/steve.jpg",avatar:""}),r(" Steve ")]),_:1})]),_:1}))}},OC=`<template>
  <SuiHeader as="h2">
    <SuiIcon name="plug" />
    <SuiHeaderContent>
      Uptime Guarantee
    </SuiHeaderContent>
  </SuiHeader>
</template>`,NC={__name:"IconDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Icon",code:OC},{description:n(()=>[r(" A header may contain an Icon ")]),example:n(()=>[i(s(fe),{as:"h2"},{default:n(()=>[i(s(W),{name:"plug"}),i(s(_r),null,{default:n(()=>[r(" Uptime Guarantee ")]),_:1})]),_:1})]),_:1}))}},qC=`<template>
  <SuiHeader as="h2">
    Account Settings
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,GC={__name:"SubheaderDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Subheader",code:qC},{description:n(()=>[r(" Headers may contain subheaders ")]),example:n(()=>[i(s(fe),{as:"h2"},{default:n(()=>[r(" Account Settings "),i(s(Ki),null,{default:n(()=>[r(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},jC=`<template>
  <SuiHeader disabled>
    Disabled Header
  </SuiHeader>
</template>`,UC={__name:"DisabledDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Disabled",code:jC},{description:n(()=>[r(" A header can show that it is inactive ")]),example:n(()=>[i(s(fe),{disabled:""},{default:n(()=>[r(" Disabled Header ")]),_:1})]),_:1}))}},YC=`<template>
  <SuiHeader as="h3" dividing>
    Dividing Header
  </SuiHeader>
</template>`,WC={__name:"DividingDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Dividing",code:YC},{description:n(()=>[r(" A header can be formatted to divide itself from the content below it ")]),example:n(()=>[i(s(fe),{as:"h3",dividing:""},{default:n(()=>[r(" Dividing Header ")]),_:1})]),_:1}))}},KC=`<template>
  <SuiHeader as="h3" block>
    Block Header
  </SuiHeader>
</template>`,XC={__name:"BlockDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Block",code:KC},{description:n(()=>[r(" A header can be formatted to appear inside a content block ")]),example:n(()=>[i(s(fe),{as:"h3",block:""},{default:n(()=>[r(" Block Header ")]),_:1})]),_:1}))}},JC=`<template>
  <SuiHeader as="h2" attached="top">
    Attached Header
  </SuiHeader>
  <SuiSegment attached>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </SuiSegment>
</template>`,QC={__name:"AttachedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Attached",code:JC},{description:n(()=>[r(" A header can be attached to other content, like a segment ")]),example:n(()=>[i(s(fe),{as:"h2",attached:"top"},{default:n(()=>[r(" Attached Header ")]),_:1}),i(s(O),{attached:""},{default:n(()=>[r(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),_:1})]),_:1}))}},ZC=`<template>
  <SuiSegment clearing>
    <SuiHeader as="h3" floated="right">
      Go Forward
    </SuiHeader>
    <SuiHeader as="h3" floated="left">
      Go Back
    </SuiHeader>
  </SuiSegment>
</template>`,e0={__name:"FloatingDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Floating",code:ZC},{description:n(()=>[r(" A header can sit to the left or right of other content ")]),example:n(()=>[i(s(O),{clearing:""},{default:n(()=>[i(s(fe),{as:"h3",floated:"right"},{default:n(()=>[r(" Go Forward ")]),_:1}),i(s(fe),{as:"h3",floated:"left"},{default:n(()=>[r(" Go Back ")]),_:1})]),_:1})]),_:1}))}},t0=`<template>
  <SuiSegment>
    <SuiHeader as="h3" textAlign="right">Float Right</SuiHeader>
    <SuiHeader as="h3" textAlign="left">Float Left</SuiHeader>
    <SuiHeader as="h3" textAlign="justified">
      This text takes up the full width of the container
    </SuiHeader>
    <SuiHeader as="h3" textAlign="center">Centered</SuiHeader>
  </SuiSegment>
</template>`,i0={__name:"TextAlignmentDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Text Alignment",code:t0},{description:n(()=>[r(" A header can have its text aligned to a side ")]),example:n(()=>[i(s(O),null,{default:n(()=>[i(s(fe),{as:"h3",textAlign:"right"},{default:n(()=>[r("Float Right")]),_:1}),i(s(fe),{as:"h3",textAlign:"left"},{default:n(()=>[r("Float Left")]),_:1}),i(s(fe),{as:"h3",textAlign:"justified"},{default:n(()=>[r(" This text takes up the full width of the container ")]),_:1}),i(s(fe),{as:"h3",textAlign:"center"},{default:n(()=>[r("Centered")]),_:1})]),_:1})]),_:1}))}},n0=`<template>
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
</template>`,a0={__name:"ColoredDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Colored",code:n0},{description:n(()=>[r(" A header can be formatted with different colors ")]),example:n(()=>[i(s(fe),{as:"h4",primary:""},{default:n(()=>[r("Primary")]),_:1}),i(s(fe),{as:"h4",secondary:""},{default:n(()=>[r("Secondary")]),_:1}),i(s(fe),{as:"h4",color:"red"},{default:n(()=>[r("Red")]),_:1}),i(s(fe),{as:"h4",color:"orange"},{default:n(()=>[r("Orange")]),_:1}),i(s(fe),{as:"h4",color:"yellow"},{default:n(()=>[r("Yellow")]),_:1}),i(s(fe),{as:"h4",color:"olive"},{default:n(()=>[r("Olive")]),_:1}),i(s(fe),{as:"h4",color:"green"},{default:n(()=>[r("Green")]),_:1}),i(s(fe),{as:"h4",color:"teal"},{default:n(()=>[r("Teal")]),_:1}),i(s(fe),{as:"h4",color:"blue"},{default:n(()=>[r("Blue")]),_:1}),i(s(fe),{as:"h4",color:"purple"},{default:n(()=>[r("Purple")]),_:1}),i(s(fe),{as:"h4",color:"violet"},{default:n(()=>[r("Violet")]),_:1}),i(s(fe),{as:"h4",color:"pink"},{default:n(()=>[r("Pink")]),_:1}),i(s(fe),{as:"h4",color:"brown"},{default:n(()=>[r("Brown")]),_:1}),i(s(fe),{as:"h4",color:"grey"},{default:n(()=>[r("Grey")]),_:1})]),_:1}))}},o0=`<template>
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
</template>`,l0={__name:"InvertedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Colored",code:o0},{description:n(()=>[r(" A header can have its colors inverted for contrast ")]),example:n(()=>[i(s(O),{inverted:""},{default:n(()=>[i(s(fe),{as:"h4",inverted:"",color:"red"},{default:n(()=>[r("Red")]),_:1}),i(s(fe),{as:"h4",inverted:"",color:"orange"},{default:n(()=>[r("Orange")]),_:1}),i(s(fe),{as:"h4",inverted:"",color:"yellow"},{default:n(()=>[r("Yellow")]),_:1}),i(s(fe),{as:"h4",inverted:"",color:"olive"},{default:n(()=>[r("Olive")]),_:1}),i(s(fe),{as:"h4",inverted:"",color:"green"},{default:n(()=>[r("Green")]),_:1}),i(s(fe),{as:"h4",inverted:"",color:"teal"},{default:n(()=>[r("Teal")]),_:1}),i(s(fe),{as:"h4",inverted:"",color:"blue"},{default:n(()=>[r("Blue")]),_:1}),i(s(fe),{as:"h4",inverted:"",color:"purple"},{default:n(()=>[r("Purple")]),_:1}),i(s(fe),{as:"h4",inverted:"",color:"violet"},{default:n(()=>[r("Violet")]),_:1}),i(s(fe),{as:"h4",inverted:"",color:"pink"},{default:n(()=>[r("Pink")]),_:1}),i(s(fe),{as:"h4",inverted:"",color:"brown"},{default:n(()=>[r("Brown")]),_:1}),i(s(fe),{as:"h4",inverted:"",color:"grey"},{default:n(()=>[r("Grey")]),_:1})]),_:1})]),_:1}))}},r0={__name:"Header",setup(e){const t=[{id:"page-headers",label:"Page Headers",category:"Types",component:IC},{id:"content-headers",label:"Content Headers",category:"Types",component:EC},{id:"icon-headers",label:"Icon Headers",category:"Types",component:PC},{id:"sub-headers",label:"Sub Headers",category:"Types",component:VC},{id:"image",label:"Image",category:"Content",component:HC},{id:"icon",label:"Icon",category:"Content",component:NC},{id:"subheader",label:"Subheader",category:"Content",component:GC},{id:"disabled",label:"Disabled",category:"States",component:UC},{id:"dividing",label:"Dividing",category:"Variations",component:WC},{id:"block",label:"Block",category:"Variations",component:XC},{id:"attached",label:"Attached",category:"Variations",component:QC},{id:"floating",label:"Floating",category:"Variations",component:e0},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:i0},{id:"colored",label:"Colored",category:"Variations",component:a0},{id:"inverted",label:"Inverted",category:"Variations",component:l0}];return(a,o)=>(S(),C(lt,{title:"Header",description:"A header provides a short summary of content","component-docs":t}))}},s0=`<template>
  <SuiIcon name="users" disabled />
</template>`,u0={__name:"DisabledDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Disabled",code:s0},{description:n(()=>[r(" An icon can show that it is disabled ")]),example:n(()=>[i(s(W),{name:"users",disabled:""})]),_:1}))}},c0=`<template>
  <SuiIcon name="spinner" loading />
  <SuiIcon name="notched circle" loading />
  <SuiIcon name="asterisk" loading />
</template>`,d0={__name:"LoadingDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Loading",code:c0},{description:n(()=>[r(" An icon can be used as a simple loader ")]),example:n(()=>[i(s(W),{name:"spinner",loading:""}),i(s(W),{name:"notched circle",loading:""}),i(s(W),{name:"asterisk",loading:""})]),_:1}))}},m0=$("br",null,null,-1),p0=`<template>
  <div>
    This icon
    <SuiIcon name="help" fitted />
    is fitted.
    <br />
    This icon
    <SuiIcon name="help" />
    is not fitted.
  </div>
</template>`,f0={__name:"FittedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Fitted",code:p0},{description:n(()=>[r(" An icon can be fitted, without any space to the left or right of it. ")]),example:n(()=>[$("div",null,[r(" This icon "),i(s(W),{name:"help",fitted:""}),r(" is fitted. "),m0,r(" This icon "),i(s(W),{name:"help"}),r(" is not fitted. ")])]),_:1}))}},g0=`<template>
  <SuiIcon name="home" size="mini" />
  <SuiIcon name="home" size="tiny" />
  <SuiIcon name="home" size="small" />
  <SuiIcon name="home" />
  <SuiIcon name="home" size="large" />
  <SuiIcon name="home" size="big" />
  <SuiIcon name="home" size="huge" />
  <SuiIcon name="home" size="massive" />
</template>`,h0={__name:"SizeDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Size",code:g0},{description:n(()=>[r(" An icon can vary in size ")]),example:n(()=>[i(s(W),{name:"home",size:"mini"}),i(s(W),{name:"home",size:"tiny"}),i(s(W),{name:"home",size:"small"}),i(s(W),{name:"home"}),i(s(W),{name:"home",size:"large"}),i(s(W),{name:"home",size:"big"}),i(s(W),{name:"home",size:"huge"}),i(s(W),{name:"home",size:"massive"})]),_:1}))}},_0=`<template>
  <SuiIcon name="close" link />
  <SuiIcon name="help" link />
</template>`,v0={__name:"LinkDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Link",code:_0},{description:n(()=>[r(" An icon can be formatted as a link ")]),example:n(()=>[i(s(W),{name:"close",link:""}),i(s(W),{name:"help",link:""})]),_:1}))}},b0=`<template>
  <SuiIcon name="cloud" flipped="horizontally" />
  <SuiIcon name="cloud" flipped="vertically" />
</template>`,S0={__name:"FlippedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Flipped",code:b0},{description:n(()=>[r(" An icon can be flipped ")]),example:n(()=>[i(s(W),{name:"cloud",flipped:"horizontally"}),i(s(W),{name:"cloud",flipped:"vertically"})]),_:1}))}},y0=`<template>
  <SuiIcon name="cloud" rotated="clockwise" />
  <SuiIcon name="cloud" rotated="counterclockwise" />
</template>`,w0={__name:"RotatedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Rotated",code:y0},{description:n(()=>[r(" An icon can be rotated ")]),example:n(()=>[i(s(W),{name:"cloud",rotated:"clockwise"}),i(s(W),{name:"cloud",rotated:"counterclockwise"})]),_:1}))}},C0=`<template>
  <SuiIcon name="users" circular />
  <SuiIcon name="users" circular color="teal" />
  <SuiIcon name="users" circular inverted />
  <SuiIcon name="users" circular inverted color="teal" />
</template>`,x0={__name:"CircularDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Circular",code:C0},{description:n(()=>[r(" An icon can be formatted to appear circular ")]),example:n(()=>[i(s(W),{name:"users",circular:""}),i(s(W),{name:"users",circular:"",color:"teal"}),i(s(W),{name:"users",circular:"",inverted:""}),i(s(W),{name:"users",circular:"",inverted:"",color:"teal"})]),_:1}))}},A0=`<template>
  <SuiIcon name="users" circular colored color="red" />
  <SuiIcon name="users" circular colored color="green" />
  <SuiIcon name="users" circular colored color="blue" />
</template>`,k0={__name:"CircularColoredDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Circular Colored",code:A0},{description:n(()=>[r(" The circular color can appear in the same color as the icon itself ")]),example:n(()=>[i(s(W),{name:"users",circular:"",colored:"",color:"red"}),i(s(W),{name:"users",circular:"",colored:"",color:"green"}),i(s(W),{name:"users",circular:"",colored:"",color:"blue"})]),_:1}))}},B0=`<template>
  <SuiIcon name="users" bordered />
  <SuiIcon name="users" bordered color="teal" />
  <SuiIcon name="users" bordered inverted color="black" />
  <SuiIcon name="users" bordered inverted color="teal" />
</template>`,$0={__name:"BorderedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Bordered",code:B0},{description:n(()=>[r(" An icon can be formatted to appear bordered ")]),example:n(()=>[i(s(W),{name:"users",bordered:""}),i(s(W),{name:"users",bordered:"",color:"teal"}),i(s(W),{name:"users",bordered:"",inverted:"",color:"black"}),i(s(W),{name:"users",bordered:"",inverted:"",color:"teal"})]),_:1}))}},T0=`<template>
  <SuiIcon name="users" bordered colored color="red" />
  <SuiIcon name="users" bordered colored color="green" />
  <SuiIcon name="users" bordered colored color="blue" />
</template>`,L0={__name:"BorderedColoredDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Bordered Colored",code:T0},{description:n(()=>[r(" The bordered color can appear in the same color as the icon itself ")]),example:n(()=>[i(s(W),{name:"users",bordered:"",colored:"",color:"red"}),i(s(W),{name:"users",bordered:"",colored:"",color:"green"}),i(s(W),{name:"users",bordered:"",colored:"",color:"blue"})]),_:1}))}},I0=`<template>
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
</template>`,D0={__name:"ColoredDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Colored",code:I0},{description:n(()=>[r(" An icon can be formatted with different colors ")]),example:n(()=>[i(s(W),{name:"users",primary:""}),i(s(W),{name:"users",secondary:""}),i(s(W),{name:"users",color:"red"}),i(s(W),{name:"users",color:"orange"}),i(s(W),{name:"users",color:"yellow"}),i(s(W),{name:"users",color:"olive"}),i(s(W),{name:"users",color:"green"}),i(s(W),{name:"users",color:"teal"}),i(s(W),{name:"users",color:"blue"}),i(s(W),{name:"users",color:"violet"}),i(s(W),{name:"users",color:"purple"}),i(s(W),{name:"users",color:"pink"}),i(s(W),{name:"users",color:"brown"}),i(s(W),{name:"users",color:"grey"}),i(s(W),{name:"users",color:"black"})]),_:1}))}},E0=`<template>
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
</template>`,R0={__name:"InvertedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Inverted",code:E0},{description:n(()=>[r(" An icon can have its colors inverted for contrast ")]),example:n(()=>[i(s(W),{name:"users",inverted:""}),i(s(W),{name:"users",inverted:"",primary:""}),i(s(W),{name:"users",inverted:"",secondary:""}),i(s(W),{name:"users",inverted:"",color:"red"}),i(s(W),{name:"users",inverted:"",color:"orange"}),i(s(W),{name:"users",inverted:"",color:"yellow"}),i(s(W),{name:"users",inverted:"",color:"olive"}),i(s(W),{name:"users",inverted:"",color:"green"}),i(s(W),{name:"users",inverted:"",color:"teal"}),i(s(W),{name:"users",inverted:"",color:"blue"}),i(s(W),{name:"users",inverted:"",color:"violet"}),i(s(W),{name:"users",inverted:"",color:"purple"}),i(s(W),{name:"users",inverted:"",color:"pink"}),i(s(W),{name:"users",inverted:"",color:"brown"}),i(s(W),{name:"users",inverted:"",color:"grey"})]),_:1}))}},P0=`<template>
  <SuiIconGroup size="huge">
    <SuiIcon name="circle outline" size="big" />
    <SuiIcon name="user" />
  </SuiIconGroup>
  <SuiIconGroup size="huge">
    <SuiIcon name="dont" size="big" color="red" />
    <SuiIcon name="user" color="black" />
  </SuiIconGroup>
</template>`,z0={__name:"IconsDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Icons",code:P0},{description:n(()=>[r(" Several icons can be used together as a group ")]),example:n(()=>[i(s(zi),{size:"huge"},{default:n(()=>[i(s(W),{name:"circle outline",size:"big"}),i(s(W),{name:"user"})]),_:1}),i(s(zi),{size:"huge"},{default:n(()=>[i(s(W),{name:"dont",size:"big",color:"red"}),i(s(W),{name:"user",color:"black"})]),_:1})]),_:1}))}},F0=`<template>
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
</template>`,V0={__name:"CornerIconDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Corner Icon",code:F0},{description:n(()=>[r(" A group of icons can display a smaller corner icon ")]),example:n(()=>[i(s(zi),{size:"huge"},{default:n(()=>[i(s(W),{name:"puzzle"}),i(s(W),{name:"add",corner:"top left"})]),_:1}),i(s(zi),{size:"huge"},{default:n(()=>[i(s(W),{name:"puzzle"}),i(s(W),{name:"add",corner:"top right"})]),_:1}),i(s(zi),{size:"huge"},{default:n(()=>[i(s(W),{name:"puzzle"}),i(s(W),{name:"add",corner:"bottom left"})]),_:1}),i(s(zi),{size:"huge"},{default:n(()=>[i(s(W),{name:"puzzle"}),i(s(W),{name:"add",corner:"bottom right"})]),_:1})]),_:1}))}},M0={__name:"Icon",setup(e){const t=[{id:"disabled",label:"Disabled",category:"States",component:u0},{id:"loading",label:"Loading",category:"States",component:d0},{id:"fitted",label:"Fitted",category:"Variations",component:f0},{id:"size",label:"Size",category:"Variations",component:h0},{id:"link",label:"Link",category:"Variations",component:v0},{id:"flipped",label:"Flipped",category:"Variations",component:S0},{id:"rotated",label:"Rotated",category:"Variations",component:w0},{id:"circular",label:"Circular",category:"Variations",component:x0},{id:"circular-colored",label:"Circular Colored",category:"Variations",component:k0},{id:"bordered",label:"Bordered",category:"Variations",component:$0},{id:"bordered-colored",label:"Bordered Colored",category:"Variations",component:L0},{id:"colored",label:"Colored",category:"Variations",component:D0},{id:"inverted",label:"Inverted",category:"Variations",component:R0},{id:"icons",label:"Icons",category:"Groups",component:z0},{id:"corner-icon",label:"Corner Icon",category:"Groups",component:V0}];return(a,o)=>(S(),C(lt,{title:"Icon",description:"An icon is a glyph used to represent something else","component-docs":t}))}},H0=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" />
</template>`,O0={__name:"ImageDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Image",code:H0},{description:n(()=>[r(" An image ")]),example:n(()=>[i(s(le),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}))}},N0=`<template>
  <SuiImage
    as="a"
    size="medium"
    href="https://google.com"
    src="/images/wireframe/image-text.png"
    target="_blank"
  />
</template>`,q0={__name:"ImageLinkDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Image Link",code:N0},{description:n(()=>[r(" An image can be formatted to link to other content ")]),example:n(()=>[i(s(le),{as:"a",size:"medium",href:"https://google.com",src:"/vue-fomantic-ui/images/wireframe/image-text.png",target:"_blank"})]),_:1}))}},G0=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" hidden />
</template>`,j0={__name:"HiddenDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Hidden",code:G0},{description:n(()=>[r(" An image can be hidden ")]),example:n(()=>[i(s(le),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png",hidden:""})]),_:1}))}},U0=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" disabled />
</template>`,Y0={__name:"DisabledDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Disabled",code:U0},{description:n(()=>[r(" An image can show that it is disabled and cannot be selected ")]),example:n(()=>[i(s(le),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png",disabled:""})]),_:1}))}},W0=$("span",null,"Username",-1),K0=`<template>
  <SuiImage src="/images/wireframe/square-image.png" avatar />
  <span>Username</span>
</template>`,X0={__name:"AvatarDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Avatar",code:K0},{description:n(()=>[r(" An image may be formatted to appear inline with text as an avatar ")]),example:n(()=>[i(s(le),{src:"/vue-fomantic-ui/images/wireframe/square-image.png",avatar:""}),W0]),_:1}))}},J0=`<template>
  <SuiImage size="medium" src="/images/wireframe/white-image.png" bordered />
</template>`,Q0={__name:"BorderedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Bordered",code:J0},{description:n(()=>[r(" An image may include a border to emphasize the edges of white or transparent content ")]),example:n(()=>[i(s(le),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/white-image.png",bordered:""})]),_:1}))}},Z0=`<template>
  <SuiImage src="/images/wireframe/image.png" fluid />
</template>`,ex={__name:"FluidDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Fluid",code:Z0},{description:n(()=>[r(" An image can take up the width of its container ")]),example:n(()=>[i(s(le),{src:"/vue-fomantic-ui/images/wireframe/image.png",fluid:""})]),_:1}))}},tx=`<template>
  <SuiImage src="/images/wireframe/image.png" rounded />
</template>`,ix={__name:"RoundedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Rounded",code:tx},{description:n(()=>[r(" An image may appear rounded ")]),example:n(()=>[i(s(le),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png",rounded:""})]),_:1}))}},nx=`<template>
  <SuiImage src="/images/wireframe/square-image.png" circular />
</template>`,ax={__name:"CircularDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Circular",code:nx},{description:n(()=>[r(" An image may appear circular ")]),example:n(()=>[i(s(le),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/square-image.png",circular:""})]),_:1}))}},ox=$("span",null,"Top Aligned",-1),lx=$("span",null,"Middle Aligned",-1),rx=$("span",null,"Bottom Aligned",-1),sx=`<template>
  <SuiImage verticalAlign="top" size="tiny" src="/images/wireframe/image.png" />
  <span>Top Aligned</span>
  <SuiDivider />
  <SuiImage verticalAlign="middle" size="tiny" src="/images/wireframe/image.png" />
  <span>Middle Aligned</span>
  <SuiDivider />
  <SuiImage verticalAlign="bottom" size="tiny" src="/images/wireframe/image.png" />
  <span>Bottom Aligned</span>
</template>`,ux={__name:"VerticallyAlignedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Vertically Aligned",code:sx},{description:n(()=>[r(" An image can specify its vertical alignment ")]),example:n(()=>[i(s(le),{verticalAlign:"top",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),ox,i(s(Fe)),i(s(le),{verticalAlign:"middle",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),lx,i(s(Fe)),i(s(le),{verticalAlign:"bottom",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),rx]),_:1}))}},cx=$("p",null," Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ",-1),dx=$("p",null," Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. ",-1),mx=$("p",null," Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id. ",-1),px=`<template>
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
</template>`,fx={__name:"CenteredDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Centered",code:px},{description:n(()=>[r(" An image can appear centered in a content block ")]),example:n(()=>[i(s(O),null,{default:n(()=>[i(s(le),{centered:"",size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png"}),cx,dx,i(s(le),{centered:"",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),mx]),_:1})]),_:1}))}},gx=`<template>
  <SuiSegment>
    <p>
      Te eum doming eirmod, nominati pertinacia <SuiImage spaced size="mini" src="/images/wireframe/image.png" /> argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
    </p>
  </SuiSegment>
</template>`,hx={__name:"SpacedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Spaced",code:gx},{description:n(()=>[r(" An image can appear centered in a content block ")]),example:n(()=>[i(s(O),null,{default:n(()=>[$("p",null,[r(" Te eum doming eirmod, nominati pertinacia "),i(s(le),{spaced:"",size:"mini",src:"/vue-fomantic-ui/images/wireframe/image.png"}),r(" argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ")])]),_:1})]),_:1}))}},_x=$("p",null," Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ",-1),vx=$("p",null," Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. ",-1),bx=$("p",null," Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id. ",-1),Sx=`<template>
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
</template>`,yx={__name:"FloatedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Floated",code:Sx},{description:n(()=>[r(" An image can sit to the left or right of other content ")]),example:n(()=>[i(s(O),null,{default:n(()=>[i(s(le),{floated:"left",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),_x,i(s(le),{floated:"right",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),vx,bx]),_:1})]),_:1}))}},wx=`<template>
  <SuiImage size="mini" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="tiny" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="small" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="medium" src="/images/wireframe/image.png" />
</template>`,Cx={__name:"SizeDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Size",code:wx},{description:n(()=>[r(" An image may appear at different sizes ")]),example:n(()=>[i(s(le),{size:"mini",src:"/vue-fomantic-ui/images/wireframe/image.png"}),i(s(Fe),{hidden:""}),i(s(le),{size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),i(s(Fe),{hidden:""}),i(s(le),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"}),i(s(Fe),{hidden:""}),i(s(le),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}))}},xx=`<template>
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
</template>`,Ax={__name:"GroupSizeDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Size",code:xx},{description:n(()=>[r(" A group of images can be formatted to have the same size. ")]),example:n(()=>[i(s(wl),{size:"tiny"},{default:n(()=>[i(s(le),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),i(s(le),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),i(s(le),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),i(s(le),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),i(s(Fe),{hidden:""}),i(s(wl),{size:"small"},{default:n(()=>[i(s(le),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),i(s(le),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),i(s(le),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),i(s(le),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1}))}},kx={__name:"Image",setup(e){const t=[{id:"image",label:"Image",category:"Types",component:O0},{id:"image-link",label:"Image Link",category:"Types",component:q0},{id:"hidden",label:"Hidden",category:"States",component:j0},{id:"disabled",label:"Disabled",category:"States",component:Y0},{id:"avatar",label:"Avatar",category:"Variations",component:X0},{id:"bordered",label:"Bordered",category:"Variations",component:Q0},{id:"fluid",label:"Fluid",category:"Variations",component:ex},{id:"rounded",label:"Rounded",category:"Variations",component:ix},{id:"circular",label:"Circular",category:"Variations",component:ax},{id:"vertically-aligned",label:"Vertically Aligned",category:"Variations",component:ux},{id:"centered",label:"Centered",category:"Variations",component:fx},{id:"spaced",label:"Spaced",category:"Variations",component:hx},{id:"floated",label:"Floated",category:"Variations",component:yx},{id:"size",label:"Size",category:"Variations",component:Cx},{id:"group-size",label:"Size",category:"Groups",component:Ax}];return(a,o)=>(S(),C(lt,{title:"Image",description:"An image is a graphic representation of something","component-docs":t}))}},Bx=`<template>
  <SuiInput placeholder="Search..." />
</template>`,$x={__name:"InputDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Input",code:Bx},{description:n(()=>[r(" A standard input ")]),example:n(()=>[i(s(Ze),{placeholder:"Search..."})]),_:1}))}},Tx=`<template>
  <SuiInput focus placeholder="Search..." />
</template>`,Lx={__name:"FocusDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Focus",code:Tx},{description:n(()=>[r(" An input field can show a user is currently interacting with it ")]),example:n(()=>[i(s(Ze),{focus:"",placeholder:"Search..."})]),_:1}))}},Ix=`<template>
  <SuiInput loading icon="user" placeholder="Search..." />
  <SuiInput loading icon="user" iconPosition="left" placeholder="Search..." />
</template>`,Dx={__name:"LoadingDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Loading",code:Ix},{description:n(()=>[r(" An icon input field can show that it is currently loading data ")]),example:n(()=>[i(s(Ze),{loading:"",icon:"user",placeholder:"Search..."}),i(s(Ze),{loading:"",icon:"user",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},Ex=`<template>
  <SuiInput disabled placeholder="Search..." />
</template>`,Rx={__name:"DisabledDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Disabled",code:Ex},{description:n(()=>[r(" An input field can show that it is disabled ")]),example:n(()=>[i(s(Ze),{disabled:"",placeholder:"Search..."})]),_:1}))}},Px=`<template>
  <SuiInput error placeholder="Search..." />
</template>`,zx={__name:"ErrorDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Error",code:Px},{description:n(()=>[r(" An input field can show the data contains errors ")]),example:n(()=>[i(s(Ze),{error:"",placeholder:"Search..."})]),_:1}))}},Fx=`<template>
  <SuiInput icon="search" placeholder="Search..." />
  <SuiInput icon="users" iconPosition="left" placeholder="Search..." />
</template>`,Vx={__name:"IconDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Icon",code:Fx},{description:n(()=>[r(" An input can be formatted with an icon ")]),example:n(()=>[i(s(Ze),{icon:"search",placeholder:"Search..."}),i(s(Ze),{icon:"users",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},Mx=`<template>
  <SuiInput label="http://" placeholder="mysite.com" />
</template>`,Hx={__name:"LabeledDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Labeled",code:Mx},{description:n(()=>[r(" An input can be formatted with a label ")]),example:n(()=>[i(s(Ze),{label:"http://",placeholder:"mysite.com"})]),_:1}))}},Ox=`<template>
  <SuiInput action="Search" />
</template>`,Nx={__name:"ActionDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Action",code:Ox},{description:n(()=>[r(" An input can be formatted to alert the user to an action they may perform ")]),example:n(()=>[i(s(Ze),{action:"Search"})]),_:1}))}},qx=`<template>
  <SuiInput transparent icon="search" placeholder="Search..." />
</template>`,Gx={__name:"TransparentDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Transparent",code:qx},{description:n(()=>[r(" A transparent input has no background ")]),example:n(()=>[i(s(Ze),{transparent:"",icon:"search",placeholder:"Search..."})]),_:1}))}},jx=`<template>
  <SuiSegment inverted>
    <SuiInput inverted placeholder="Search..." />
  </SuiSegment>
</template>`,Ux={__name:"InvertedDoc",setup(e){return(t,a)=>{const o=T("SuiSegment");return S(),C(I,{label:"Inverted",code:jx},{description:n(()=>[r(" An input can be formatted to appear on dark backgrounds ")]),example:n(()=>[i(o,{inverted:""},{default:n(()=>[i(s(Ze),{inverted:"",placeholder:"Search..."})]),_:1})]),_:1})}}},Yx=`<template>
  <SuiInput fluid icon="search" placeholder="Search..." />
</template>`,Wx={__name:"FluidDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Fluid",code:Yx},{description:n(()=>[r(" An input can take the size of its container ")]),example:n(()=>[i(s(Ze),{fluid:"",icon:"search",placeholder:"Search..."})]),_:1}))}},Kx=`<template>
  <SuiInput icon="search" placeholder="Search mini..." size="mini" />
  <SuiInput icon="search" placeholder="Search small..." size="small" />
  <SuiInput icon="search" placeholder="Search large..." size="large" />
  <SuiInput icon="search" placeholder="Search big..." size="big" />
  <SuiInput icon="search" placeholder="Search huge..." size="huge" />
  <SuiInput icon="search" placeholder="Search massive..." size="massive" />
</template>`,Xx={__name:"SizeDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Size",code:Kx},{description:n(()=>[r(" An input can vary in size ")]),example:n(()=>[i(s(Ze),{icon:"search",placeholder:"Search mini...",size:"mini"}),i(s(Ze),{icon:"search",placeholder:"Search small...",size:"small"}),i(s(Ze),{icon:"search",placeholder:"Search large...",size:"large"}),i(s(Ze),{icon:"search",placeholder:"Search big...",size:"big"}),i(s(Ze),{icon:"search",placeholder:"Search huge...",size:"huge"}),i(s(Ze),{icon:"search",placeholder:"Search massive...",size:"massive"})]),_:1}))}},Jx={__name:"Input",setup(e){const t=[{id:"input",label:"Input",category:"Types",component:$x},{id:"focus",label:"Focus",category:"States",component:Lx},{id:"loading",label:"Loading",category:"States",component:Dx},{id:"disabled",label:"Disabled",category:"States",component:Rx},{id:"error",label:"Error",category:"States",component:zx},{id:"icon",label:"Icon",category:"Variations",component:Vx},{id:"labeled",label:"Labeled",category:"Variations",component:Hx},{id:"action",label:"Action",category:"Variations",component:Nx},{id:"transparent",label:"Transparent",category:"Variations",component:Gx},{id:"inverted",label:"Inverted",category:"Variations",component:Ux},{id:"fluid",label:"Fluid",category:"Variations",component:Wx},{id:"size",label:"Size",category:"Variations",component:Xx}];return(a,o)=>(S(),C(lt,{title:"Input",description:"An input is a field used to elicit a response from a user","component-docs":t}))}},Qx=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
</template>`,Zx={__name:"LabelDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Label",code:Qx},{description:n(()=>[r(" A label ")]),example:n(()=>[i(s(N),null,{default:n(()=>[i(s(W),{name:"mail"}),r(" 23 ")]),_:1})]),_:1}))}},eA="/vue-fomantic-ui/images/avatar/small/joe.jpg",Md="/vue-fomantic-ui/images/avatar/small/veronika.jpg",ma="/vue-fomantic-ui/images/avatar/small/elliot.jpg",tA=$("img",{src:eA},null,-1),iA=$("img",{src:Md},null,-1),nA=$("img",{src:ma},null,-1),aA=`<template>
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
</template>`,oA={__name:"ImageDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Image",code:aA},{description:n(()=>[r(" A label can be formatted to emphasize an image ")]),example:n(()=>[i(s(N),{as:"a",image:""},{default:n(()=>[tA,r(" Joe ")]),_:1}),i(s(N),{as:"a",image:"",color:"blue"},{default:n(()=>[iA,r(" Veronika "),i(s(En),null,{default:n(()=>[r("Friend")]),_:1})]),_:1}),i(s(N),{as:"a",image:""},{default:n(()=>[nA,r(" Elliot "),i(s(W),{name:"delete"})]),_:1})]),_:1}))}},lA=$("input",{type:"text",placeholder:"First Name"},null,-1),rA=$("input",{type:"text"},null,-1),sA=$("input",{type:"text",placeholder:"Username"},null,-1),uA=$("input",{type:"password"},null,-1),cA=`<template>
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
</template>`,dA={__name:"PointingDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Pointing",code:cA},{description:n(()=>[r(" A label can point to content next to it ")]),example:n(()=>[i(s(Ht),{fluid:""},{default:n(()=>[i(s(it),null,{default:n(()=>[lA,i(s(N),{pointing:""},{default:n(()=>[r("Please enter a value")]),_:1})]),_:1}),i(s(Fe)),i(s(it),null,{default:n(()=>[i(s(N),{pointing:"below"},{default:n(()=>[r("Please enter a value")]),_:1}),rA]),_:1}),i(s(Fe)),i(s(it),{inline:""},{default:n(()=>[sA,i(s(N),{pointing:"left",color:"red",basic:""},{default:n(()=>[r("That name is taken!")]),_:1})]),_:1}),i(s(Fe)),i(s(it),{inline:""},{default:n(()=>[i(s(N),{pointing:"right",color:"red",basic:""},{default:n(()=>[r("Your password must be 6 characters or more")]),_:1}),uA]),_:1})]),_:1})]),_:1}))}},mA=`<template>
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
</template>`,pA={__name:"CornerDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Corner",code:mA},{description:n(()=>[r(" A label can position itself in the corner of an element ")]),example:n(()=>[i(s(ba),{columns:2},{default:n(()=>[i(s(kt),null,{default:n(()=>[i(s(le),{label:{as:"a",corner:"left",icon:"heart"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),i(s(kt),null,{default:n(()=>[i(s(le),{label:{as:"a",color:"red",corner:"right",icon:"save"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1})]),_:1}))}},fA=`<template>
  <SuiLabel as="a" tag>New</SuiLabel>
  <SuiLabel as="a" tag color="red">Upcoming</SuiLabel>
  <SuiLabel as="a" tag color="teal">Featured</SuiLabel>
</template>`,gA={__name:"TagDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Tag",code:fA},{description:n(()=>[r(" A label can appear as a tag ")]),example:n(()=>[i(s(N),{as:"a",tag:""},{default:n(()=>[r("New")]),_:1}),i(s(N),{as:"a",tag:"",color:"red"},{default:n(()=>[r("Upcoming")]),_:1}),i(s(N),{as:"a",tag:"",color:"teal"},{default:n(()=>[r("Featured")]),_:1})]),_:1}))}},hA=$("span",null,"Account Details",-1),_A=$("span",null,"User Reviews",-1),vA=$("span",null,"Technical Specifications",-1),bA=$("span",null,"User Reviews",-1),SA=`<template>
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
</template>`,yA={__name:"RibbonDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Ribbon",code:SA},{description:n(()=>[r(" A label can appear as a ribbon attaching itself to an element. ")]),example:n(()=>[i(s(ba),{columns:2},{default:n(()=>[i(s(kt),null,{default:n(()=>[i(s(O),{raised:""},{default:n(()=>[i(s(N),{as:"a",ribbon:"",color:"red"},{default:n(()=>[r("Overview")]),_:1}),hA,i(s(le),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),i(s(N),{as:"a",ribbon:"",color:"blue"},{default:n(()=>[r("Community")]),_:1}),_A,i(s(le),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),i(s(kt),null,{default:n(()=>[i(s(O),{raised:""},{default:n(()=>[i(s(N),{as:"a",ribbon:"right",color:"orange"},{default:n(()=>[r("Specs")]),_:1}),vA,i(s(le),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),i(s(N),{as:"a",ribbon:"right",color:"teal"},{default:n(()=>[r("Reviews")]),_:1}),bA,i(s(le),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1}))}},wA=`<template>
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
</template>`,CA={__name:"AttachedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Attached",code:wA},{description:n(()=>[r(" A label can attach to a content segment ")]),example:n(()=>[i(s(ba),{columns:3},{default:n(()=>[i(s(xl),null,{default:n(()=>[i(s(kt),null,{default:n(()=>[i(s(O),{padded:""},{default:n(()=>[i(s(N),{attached:"top"},{default:n(()=>[r("HTML")]),_:1}),i(s(le),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),i(s(kt),null,{default:n(()=>[i(s(O),{padded:""},{default:n(()=>[i(s(N),{attached:"bottom"},{default:n(()=>[r("CSS")]),_:1}),i(s(le),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),i(s(kt),null,{default:n(()=>[i(s(O),{padded:""},{default:n(()=>[i(s(N),{attached:"top right"},{default:n(()=>[r("Code")]),_:1}),i(s(le),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1}),i(s(xl),null,{default:n(()=>[i(s(kt),null,{default:n(()=>[i(s(O),{padded:""},{default:n(()=>[i(s(N),{attached:"top left"},{default:n(()=>[r("View")]),_:1}),i(s(le),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),i(s(kt),null,{default:n(()=>[i(s(O),{padded:""},{default:n(()=>[i(s(N),{attached:"bottom left"},{default:n(()=>[r("User View")]),_:1}),i(s(le),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),i(s(kt),null,{default:n(()=>[i(s(O),{padded:""},{default:n(()=>[i(s(N),{attached:"bottom right"},{default:n(()=>[r("Admin View")]),_:1}),i(s(le),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},xA=`<template>
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
</template>`,AA={__name:"HorizontalDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Horizontal",code:xA},{description:n(()=>[r(" A horizontal label is formatted to label content along-side it horizontally ")]),example:n(()=>[i(s(ud),{divided:"",selection:""},{default:n(()=>[i(s(qn),null,{default:n(()=>[i(s(N),{color:"red",horizontal:""},{default:n(()=>[r("Fruit")]),_:1}),r(" Kumquats ")]),_:1}),i(s(qn),null,{default:n(()=>[i(s(N),{color:"purple",horizontal:""},{default:n(()=>[r("Candy")]),_:1}),r(" Ice Cream ")]),_:1}),i(s(qn),null,{default:n(()=>[i(s(N),{color:"red",horizontal:""},{default:n(()=>[r("Fruit")]),_:1}),r(" Orange ")]),_:1}),i(s(qn),null,{default:n(()=>[i(s(N),{horizontal:""},{default:n(()=>[r("Dog")]),_:1}),r(" Poodle ")]),_:1})]),_:1})]),_:1}))}},kA=`<template>
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
</template>`,BA={__name:"FloatingDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Floating",code:kA},{description:n(()=>[r(" A label can float above or below another element ")]),example:n(()=>[i(s(cd),{compact:""},{default:n(()=>[i(s(Za),null,{default:n(()=>[i(s(W),{name:"mail"}),r(" Messages "),i(s(N),{floating:"",color:"red"},{default:n(()=>[r("22")]),_:1})]),_:1}),i(s(Za),null,{default:n(()=>[i(s(W),{name:"users"}),r(" Friends "),i(s(N),{floating:"",color:"teal"},{default:n(()=>[r("22")]),_:1})]),_:1})]),_:1})]),_:1}))}},$A=`<template>
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
</template>`,TA={__name:"InvertedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Inverted",code:$A},{description:n(()=>[r(" All Variants of Label can be inverted ")]),example:n(()=>[i(s(O),{inverted:""},{default:n(()=>[i(s(N),{as:"a",inverted:"",primary:""},{default:n(()=>[r("Primary")]),_:1}),i(s(N),{as:"a",inverted:"",secondary:""},{default:n(()=>[r("Secondary")]),_:1}),i(s(N),{as:"a",inverted:"",color:"red"},{default:n(()=>[r("Red")]),_:1}),i(s(N),{as:"a",inverted:"",color:"orange"},{default:n(()=>[r("Orange")]),_:1}),i(s(N),{as:"a",inverted:"",color:"yellow"},{default:n(()=>[r("Yellow")]),_:1}),i(s(N),{as:"a",basic:"",inverted:"",color:"olive"},{default:n(()=>[r("Olive")]),_:1}),i(s(N),{as:"a",basic:"",inverted:"",color:"green"},{default:n(()=>[r("Green")]),_:1}),i(s(N),{as:"a",basic:"",inverted:"",color:"teal"},{default:n(()=>[r("Teal")]),_:1}),i(s(N),{as:"a",basic:"",inverted:"",color:"blue"},{default:n(()=>[r("Blue")]),_:1}),i(s(N),{as:"a",basic:"",inverted:"",color:"violet"},{default:n(()=>[r("Violet")]),_:1}),i(s(N),{as:"a",tag:"",inverted:"",color:"purple"},{default:n(()=>[r("Purple")]),_:1}),i(s(N),{as:"a",tag:"",inverted:"",color:"pink"},{default:n(()=>[r("Pink")]),_:1}),i(s(N),{as:"a",tag:"",inverted:"",color:"brown"},{default:n(()=>[r("Brown")]),_:1}),i(s(N),{as:"a",tag:"",inverted:"",color:"grey"},{default:n(()=>[r("Grey")]),_:1}),i(s(N),{as:"a",tag:"",inverted:"",color:"black"},{default:n(()=>[r("Black")]),_:1})]),_:1})]),_:1}))}},LA=`<template>
  <SuiLabel>
    Dogs
    <SuiLabelDetail>214</SuiLabelDetail>
  </SuiLabel>
</template>`,IA={__name:"DetailDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Detail",code:LA},{description:n(()=>[r(" A label can contain a detail ")]),example:n(()=>[i(s(N),null,{default:n(()=>[r(" Dogs "),i(s(En),null,{default:n(()=>[r("214")]),_:1})]),_:1})]),_:1}))}},DA=`<template>
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
</template>`,EA={__name:"IconDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Icon",code:DA},{description:n(()=>[r(" A label can include an icon ")]),example:n(()=>[i(s(N),null,{default:n(()=>[i(s(W),{name:"mail"}),r(" Mail ")]),_:1}),i(s(N),null,{default:n(()=>[i(s(W),{name:"checkmark"}),r(" Test Passed ")]),_:1}),i(s(N),{icon:"dog"}),i(s(N),{icon:"cat"})]),_:1}))}},RA=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
    <SuiLabelContent>View Mail</SuiLabelContent>
  </SuiLabel>
</template>`,PA={__name:"LinkDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Link",code:RA},{description:n(()=>[r(" A label can be a link or contain an item that links ")]),example:n(()=>[i(s(N),{as:"a"},{default:n(()=>[i(s(W),{name:"mail"}),r(" 23 ")]),_:1}),i(s(N),null,{default:n(()=>[i(s(W),{name:"mail"}),r(" 23 "),i(s(En),null,{default:n(()=>[r("View Mail")]),_:1})]),_:1})]),_:1}))}},zA=`<template>
  <SuiLabel disabled>Disabled Label</SuiLabel>
</template>`,FA={__name:"DisabledDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Disabled",code:zA},{description:n(()=>[r(" A label can show it is currently unable to be interacted with ")]),example:n(()=>[i(s(N),{disabled:""},{default:n(()=>[r("Disabled Label")]),_:1})]),_:1}))}},VA=`<template>
  <SuiLabel fluid>Fits container</SuiLabel>
</template>`,MA={__name:"FluidDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Fluid",code:VA},{description:n(()=>[r(" A label can take the width of its container ")]),example:n(()=>[i(s(N),{fluid:""},{default:n(()=>[r("Fits container")]),_:1})]),_:1}))}},HA=`<template>
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
</template>`,OA={__name:"CircularDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Circular",code:HA},{description:n(()=>[r(" A label can be circular ")]),example:n(()=>[i(s(N),{circular:"",color:"red"},{default:n(()=>[r("2")]),_:1}),i(s(N),{circular:"",color:"orange"},{default:n(()=>[r("2")]),_:1}),i(s(N),{circular:"",color:"yellow"},{default:n(()=>[r("2")]),_:1}),i(s(N),{circular:"",color:"olive"},{default:n(()=>[r("2")]),_:1}),i(s(N),{circular:"",color:"green"},{default:n(()=>[r("2")]),_:1}),i(s(N),{circular:"",color:"teal"},{default:n(()=>[r("2")]),_:1}),i(s(N),{circular:"",color:"blue"},{default:n(()=>[r("2")]),_:1}),i(s(N),{circular:"",color:"violet"},{default:n(()=>[r("2")]),_:1}),i(s(N),{circular:"",color:"purple"},{default:n(()=>[r("2")]),_:1}),i(s(N),{circular:"",color:"pink"},{default:n(()=>[r("2")]),_:1}),i(s(N),{circular:"",color:"brown"},{default:n(()=>[r("2")]),_:1}),i(s(N),{circular:"",color:"grey"},{default:n(()=>[r("2")]),_:1}),i(s(N),{circular:"",color:"black"},{default:n(()=>[r("2")]),_:1})]),_:1}))}},NA=$("img",{src:ma},null,-1),qA=`<template>
  <SuiLabel as="a" basic>Basic</SuiLabel>
  <SuiLabel as="a" basic pointing>Pointing</SuiLabel>
  <SuiLabel as="a" basic image>
    <img src="/images/avatar/small/elliot.jpg" />
    Elliot
  </SuiLabel>
  <SuiLabel as="a" basic pointing color="red">Red Pointing</SuiLabel>
  <SuiLabel as="a" basic color="blue">Blue</SuiLabel>
</template>`,GA={__name:"BasicDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Basic",code:qA},{description:n(()=>[r(" A label can reduce its complexity ")]),example:n(()=>[i(s(N),{as:"a",basic:""},{default:n(()=>[r("Basic")]),_:1}),i(s(N),{as:"a",basic:"",pointing:""},{default:n(()=>[r("Pointing")]),_:1}),i(s(N),{as:"a",basic:"",image:""},{default:n(()=>[NA,r(" Elliot ")]),_:1}),i(s(N),{as:"a",basic:"",pointing:"",color:"red"},{default:n(()=>[r("Red Pointing")]),_:1}),i(s(N),{as:"a",basic:"",color:"blue"},{default:n(()=>[r("Blue")]),_:1})]),_:1}))}},jA=`<template>
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
</template>`,UA={__name:"ColoredDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Colored",code:jA},{description:n(()=>[r(" A label can have different colors ")]),example:n(()=>[i(s(N),{as:"a",primary:""},{default:n(()=>[r("Primary")]),_:1}),i(s(N),{as:"a",secondary:""},{default:n(()=>[r("Secondary")]),_:1}),i(s(N),{as:"a",color:"red"},{default:n(()=>[r("Red")]),_:1}),i(s(N),{as:"a",color:"orange"},{default:n(()=>[r("Orange")]),_:1}),i(s(N),{as:"a",color:"yellow"},{default:n(()=>[r("Yellow")]),_:1}),i(s(N),{as:"a",color:"olive"},{default:n(()=>[r("Olive")]),_:1}),i(s(N),{as:"a",color:"green"},{default:n(()=>[r("Green")]),_:1}),i(s(N),{as:"a",color:"teal"},{default:n(()=>[r("Teal")]),_:1}),i(s(N),{as:"a",color:"blue"},{default:n(()=>[r("Blue")]),_:1}),i(s(N),{as:"a",color:"violet"},{default:n(()=>[r("Violet")]),_:1}),i(s(N),{as:"a",color:"purple"},{default:n(()=>[r("Purple")]),_:1}),i(s(N),{as:"a",color:"pink"},{default:n(()=>[r("Pink")]),_:1}),i(s(N),{as:"a",color:"brown"},{default:n(()=>[r("Brown")]),_:1}),i(s(N),{as:"a",color:"grey"},{default:n(()=>[r("Grey")]),_:1}),i(s(N),{as:"a",color:"black"},{default:n(()=>[r("Black")]),_:1})]),_:1}))}},YA=`<template>
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
</template>`,WA={__name:"BasicTagDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Basic Tag",code:YA},{description:n(()=>[]),example:n(()=>[i(s(N),{as:"a",basic:"",tag:"",primary:""},{default:n(()=>[r("Primary")]),_:1}),i(s(N),{as:"a",basic:"",tag:"",secondary:""},{default:n(()=>[r("Secondary")]),_:1}),i(s(N),{as:"a",basic:"",tag:"",color:"red"},{default:n(()=>[r("Red")]),_:1}),i(s(N),{as:"a",basic:"",tag:"",color:"orange"},{default:n(()=>[r("Orange")]),_:1}),i(s(N),{as:"a",basic:"",tag:"",color:"yellow"},{default:n(()=>[r("Yellow")]),_:1}),i(s(N),{as:"a",basic:"",tag:"",color:"olive"},{default:n(()=>[r("Olive")]),_:1}),i(s(N),{as:"a",basic:"",tag:"",color:"green"},{default:n(()=>[r("Green")]),_:1}),i(s(N),{as:"a",basic:"",tag:"",color:"teal"},{default:n(()=>[r("Teal")]),_:1}),i(s(N),{as:"a",basic:"",tag:"",color:"blue"},{default:n(()=>[r("Blue")]),_:1}),i(s(N),{as:"a",basic:"",tag:"",color:"violet"},{default:n(()=>[r("Violet")]),_:1}),i(s(N),{as:"a",basic:"",tag:"",color:"purple"},{default:n(()=>[r("Purple")]),_:1}),i(s(N),{as:"a",basic:"",tag:"",color:"pink"},{default:n(()=>[r("Pink")]),_:1}),i(s(N),{as:"a",basic:"",tag:"",color:"brown"},{default:n(()=>[r("Brown")]),_:1}),i(s(N),{as:"a",basic:"",tag:"",color:"grey"},{default:n(()=>[r("Grey")]),_:1}),i(s(N),{as:"a",basic:"",tag:"",color:"black"},{default:n(()=>[r("Black")]),_:1})]),_:1}))}},KA=`<template>
  <SuiLabel size="mini">Mini</SuiLabel>
  <SuiLabel size="tiny">Tiny</SuiLabel>
  <SuiLabel size="small">Small</SuiLabel>
  <SuiLabel>Medium</SuiLabel>
  <SuiLabel size="large">Large</SuiLabel>
  <SuiLabel size="big">Big</SuiLabel>
  <SuiLabel size="huge">Huge</SuiLabel>
  <SuiLabel size="massive">Massive</SuiLabel>
</template>`,XA={__name:"SizeDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Size",code:KA},{description:n(()=>[r(" A label can be small or large ")]),example:n(()=>[i(s(N),{size:"mini"},{default:n(()=>[r("Mini")]),_:1}),i(s(N),{size:"tiny"},{default:n(()=>[r("Tiny")]),_:1}),i(s(N),{size:"small"},{default:n(()=>[r("Small")]),_:1}),i(s(N),null,{default:n(()=>[r("Medium")]),_:1}),i(s(N),{size:"large"},{default:n(()=>[r("Large")]),_:1}),i(s(N),{size:"big"},{default:n(()=>[r("Big")]),_:1}),i(s(N),{size:"huge"},{default:n(()=>[r("Huge")]),_:1}),i(s(N),{size:"massive"},{default:n(()=>[r("Massive")]),_:1})]),_:1}))}},JA=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,QA={__name:"GroupSizeDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Group Size",code:JA},{description:n(()=>[r(" Labels can share sizes together ")]),example:n(()=>[i(s(Rn),{size:"huge"},{default:n(()=>[i(s(N),null,{default:n(()=>[r("Fun")]),_:1}),i(s(N),null,{default:n(()=>[r("Happy")]),_:1}),i(s(N),null,{default:n(()=>[r("Smart")]),_:1}),i(s(N),null,{default:n(()=>[r("Witty")]),_:1})]),_:1})]),_:1}))}},ZA=`<template>
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
</template>`,ek={__name:"ColoredGroupDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Clored Group",code:ZA},{description:n(()=>[r(" Labels can share colors together ")]),example:n(()=>[i(s(Rn),{color:"blue"},{default:n(()=>[i(s(N),null,{default:n(()=>[r(" Fun "),i(s(W),{name:"close"})]),_:1}),i(s(N),null,{default:n(()=>[r(" Happy "),i(s(En),null,{default:n(()=>[r("Smart")]),_:1})]),_:1}),i(s(N),null,{default:n(()=>[r("Insane")]),_:1}),i(s(N),null,{default:n(()=>[r("Exciting")]),_:1})]),_:1})]),_:1}))}},tk=`<template>
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
</template>`,ik={__name:"BasicGroupDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Basic Group",code:tk},{description:n(()=>[r(" Labels can share their style together ")]),example:n(()=>[i(s(Rn),{basic:""},{default:n(()=>[i(s(N),null,{default:n(()=>[r(" Fun "),i(s(W),{name:"close"})]),_:1}),i(s(N),null,{default:n(()=>[r(" Happy "),i(s(En),null,{default:n(()=>[r("Smart")]),_:1})]),_:1}),i(s(N),null,{default:n(()=>[r("Insane")]),_:1}),i(s(N),null,{default:n(()=>[r("Exciting")]),_:1})]),_:1})]),_:1}))}},nk=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,ak={__name:"TagGroupDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Tag Group",code:nk},{description:n(()=>[r(" Labels can share tag formatting ")]),example:n(()=>[i(s(Rn),{tag:""},{default:n(()=>[i(s(N),{as:"a"},{default:n(()=>[r("$10.00")]),_:1}),i(s(N),{as:"a"},{default:n(()=>[r("$19.99")]),_:1}),i(s(N),{as:"a"},{default:n(()=>[r("$24.99")]),_:1}),i(s(N),{as:"a"},{default:n(()=>[r("$10.25")]),_:1})]),_:1})]),_:1}))}},ok=`<template>
  <SuiLabelGroup tag>
    <SuiLabel as="a">1</SuiLabel>
    <SuiLabel as="a">3</SuiLabel>
    <SuiLabel as="a">4</SuiLabel>
    <SuiLabel as="a">14</SuiLabel>
    <SuiLabel as="a">16</SuiLabel>
    <SuiLabel as="a">34</SuiLabel>
  </SuiLabelGroup>
</template>`,lk={__name:"CircularGroupDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Circular Group",code:ok},{description:n(()=>[r(" Labels can share shapes ")]),example:n(()=>[i(s(Rn),{circular:""},{default:n(()=>[i(s(N),{as:"a"},{default:n(()=>[r("1")]),_:1}),i(s(N),{as:"a"},{default:n(()=>[r("3")]),_:1}),i(s(N),{as:"a"},{default:n(()=>[r("4")]),_:1}),i(s(N),{as:"a"},{default:n(()=>[r("14")]),_:1}),i(s(N),{as:"a"},{default:n(()=>[r("16")]),_:1}),i(s(N),{as:"a"},{default:n(()=>[r("34")]),_:1})]),_:1})]),_:1}))}},rk={__name:"Label",setup(e){const t=[{id:"label",label:"Label",category:"Types",component:Zx},{id:"image",label:"Image",category:"Types",component:oA},{id:"pointing",label:"Pointing",category:"Types",component:dA},{id:"corner",label:"Corner",category:"Types",component:pA},{id:"tag",label:"Tag",category:"Types",component:gA},{id:"ribbon",label:"Ribbon",category:"Types",component:yA},{id:"attached",label:"Attached",category:"Types",component:CA},{id:"horizontal",label:"Horizontal",category:"Types",component:AA},{id:"floating",label:"Floating",category:"Types",component:BA},{id:"inverted",label:"Inverted",category:"Types",component:TA},{id:"detail",label:"Detail",category:"Content",component:IA},{id:"icon",label:"Icon",category:"Content",component:EA},{id:"link",label:"Link",category:"Content",component:PA},{id:"disabled",label:"Disabled",category:"States",component:FA},{id:"fluid",label:"Fluid",category:"Variations",component:MA},{id:"circular",label:"Circular",category:"Variations",component:OA},{id:"basic",label:"Basic",category:"Variations",component:GA},{id:"colored",label:"Colored",category:"Variations",component:UA},{id:"basic-tag",label:"Basic Tag",category:"Variations",component:WA},{id:"size",label:"Size",category:"Variations",component:XA},{id:"group-size",label:"Group Size",category:"Groups",component:QA},{id:"colored-group",label:"Colored Group",category:"Groups",component:ek},{id:"basic-group",label:"Basic Group",category:"Groups",component:ik},{id:"tag-group",label:"Tag Group",category:"Groups",component:ak},{id:"circular-group",label:"Circular Group",category:"Groups",component:lk}];return(a,o)=>(S(),C(lt,{title:"Label",description:"A label displays content classification","component-docs":t}))}},sk=Gh(eg);function uk(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Ea=sk,Wo=uk(Qc),ck=Ea.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function(t,a){var o=a.slots,l=a.attrs,u=o&&o.default&&o.default()||[],c=t.code||u&&u.length?u[0].children:"",m=t.inline,d=t.language,p=Wo.languages[d],f="language-".concat(d);return function(){return m?Ea.h("code",{class:[f],innerHTML:Wo.highlight(c,p)}):Ea.h("pre",Object.assign({},l,{class:[l.class,f]}),[Ea.h("code",Object.assign({},l,{class:[l.class,f],innerHTML:Wo.highlight(c,p)}))])}}}),dk=ck;const mk=Xc(dk),pk=F({name:"DocExample",components:{Prism:mk},props:{title:String,description:String,code:String},setup(){const e=G(!1);return{active:e,toggle:()=>e.value=!e.value}}}),fk={class:"example"};function gk(e,t,a,o,l,u){const c=T("sui-header-subheader"),m=T("sui-header"),d=T("sui-grid-column"),p=T("sui-icon"),f=T("sui-grid-row"),h=T("prism"),_=T("sui-grid");return S(),we("div",fk,[i(_,{columns:2},{default:n(()=>[i(f,null,{default:n(()=>[i(d,null,{default:n(()=>[i(m,{as:"h3"},{default:n(()=>[r($e(e.title)+" ",1),i(c,null,{default:n(()=>[r($e(e.description),1)]),_:1})]),_:1})]),_:1}),i(d,{textAlign:"right"},{default:n(()=>[i(p,{name:"code",color:"grey",onClick:e.toggle,link:""},null,8,["onClick"])]),_:1})]),_:1}),i(f,null,{default:n(()=>[i(d,{width:16},{default:n(()=>[ji(e.$slots,"default",{},void 0,!0)]),_:3}),e.active?(S(),C(d,{key:0,width:16},{default:n(()=>[i(h,{language:"markup"},{default:n(()=>[r($e(e.code),1)]),_:1})]),_:1})):rr("",!0)]),_:3})]),_:3})])}const Et=Ye(pk,[["render",gk],["__scopeId","data-v-fcfb6a67"]]),hk="/vue-fomantic-ui/images/avatar/small/rachel.png",_k="/vue-fomantic-ui/images/avatar/small/lindsay.png",vk="/vue-fomantic-ui/images/avatar/small/matthew.png",bk="/vue-fomantic-ui/images/avatar/small/jenny.jpg",Sk="/vue-fomantic-ui/images/avatar/small/tom.jpg",Ra="/vue-fomantic-ui/images/avatar/small/christian.jpg",Hd="/vue-fomantic-ui/images/avatar/small/matt.jpg",Pa="/vue-fomantic-ui/images/avatar/small/helen.jpg",Di="/vue-fomantic-ui/images/avatar/small/daniel.jpg",Dl="/vue-fomantic-ui/images/avatar/small/stevie.jpg",Ko="/vue-fomantic-ui/images/wireframe/square-image.png",yk=F({name:"ListDoc",components:{DocExample:Et},setup(){return{listCode:`<sui-list>
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
</div>`}}}),wk={class:"intro"},Ck=$("div",null,"Benefits",-1),xk={class:"list"},Ak=$("a",null,"Languages",-1),kk=$("a",null,[$("b",null,"Arrested Development")],-1),Bk=$("a",null,[$("b",null,"Bob's Burgers")],-1),$k=$("a",null,[$("b",null,"The Godfather Part 2")],-1),Tk=$("a",null,[$("b",null,"Twin Peaks")],-1),Lk=$("a",null,[$("b",null,"Arrested Development")],-1),Ik=$("a",null,[$("b",null,"Bob's Burgers")],-1),Dk=$("a",null,[$("b",null,"The Godfather Part 2")],-1);function Ek(e,t,a,o,l,u){const c=T("sui-header-subheader"),m=T("sui-header"),d=T("sui-divider"),p=T("sui-icon"),f=T("sui-menu-item"),h=T("sui-menu"),_=T("sui-container"),A=T("sui-segment"),w=T("sui-list-item"),B=T("sui-list"),L=T("doc-example"),R=T("sui-list-list"),g=T("sui-list-header"),b=T("sui-list-description"),y=T("sui-list-content"),x=T("sui-image");return S(),we("div",null,[i(A,{vertical:""},{default:n(()=>[i(_,{class:"main"},{default:n(()=>[$("div",wk,[i(m,{as:"h1"},{default:n(()=>[r("List "),i(c,null,{default:n(()=>[r(" A list is used to group related content ")]),_:1})]),_:1}),i(d,{hidden:""}),i(h,{floated:"right"},{default:n(()=>[i(f,{as:"a",icon:""},{default:n(()=>[i(p,{name:"edit"})]),_:1}),i(f,{as:"a",icon:""},{default:n(()=>[i(p,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),i(_,{class:"main"},{default:n(()=>[i(m,{as:"h2",dividing:""},{default:n(()=>[r("Types")]),_:1}),i(L,{title:"List",description:"A list groups related content",code:e.listCode},{default:n(()=>[i(B,null,{default:n(()=>[i(w,null,{default:n(()=>[r("Apples")]),_:1}),i(w,null,{default:n(()=>[r("Pears")]),_:1}),i(w,null,{default:n(()=>[r("Oranges")]),_:1})]),_:1})]),_:1},8,["code"]),i(L,{title:"Bulleted",description:"A list can mark items with a bullet",code:e.bulletedCode},{default:n(()=>[i(B,{bulleted:""},{default:n(()=>[i(w,null,{default:n(()=>[r("Gaining Access")]),_:1}),i(w,null,{default:n(()=>[r("Inviting Friends")]),_:1}),i(w,null,{default:n(()=>[Ck,$("div",xk,[i(w,{as:"a"},{default:n(()=>[r("Link to somewhere")]),_:1}),i(w,null,{default:n(()=>[r("Rebates")]),_:1}),i(w,null,{default:n(()=>[r("Discounts")]),_:1})])]),_:1}),i(w,null,{default:n(()=>[r("Warranty")]),_:1})]),_:1})]),_:1},8,["code"]),i(L,{title:"Ordered",description:"A list can be ordered numerically",code:e.orderedCode},{default:n(()=>[i(B,{ordered:""},{default:n(()=>[i(w,{as:"a"},{default:n(()=>[r("Getting Started")]),_:1}),i(w,{as:"a"},{default:n(()=>[r("Introduction")]),_:1}),i(w,null,{default:n(()=>[Ak,i(R,null,{default:n(()=>[i(w,{as:"a"},{default:n(()=>[r("HTML")]),_:1}),i(w,{as:"a"},{default:n(()=>[r("Javascript")]),_:1}),i(w,{as:"a"},{default:n(()=>[r("CSS")]),_:1})]),_:1})]),_:1}),i(w,{as:"a"},{default:n(()=>[r("Review")]),_:1})]),_:1})]),_:1},8,["code"]),i(L,{title:"Link",description:"A list can be specially formatted for navigation links",code:e.linkCode},{default:n(()=>[i(B,{link:""},{default:n(()=>[i(w,{active:""},{default:n(()=>[r("Home")]),_:1}),i(w,{as:"a"},{default:n(()=>[r("About")]),_:1}),i(w,{as:"a"},{default:n(()=>[r("Jobs")]),_:1}),i(w,{as:"a"},{default:n(()=>[r("Team")]),_:1})]),_:1})]),_:1},8,["code"]),i(m,{as:"h2",dividing:""},{default:n(()=>[r("Content")]),_:1}),i(L,{title:"Item",description:"A list item can contain a set of items",code:e.itemCode},{default:n(()=>[i(B,null,{default:n(()=>[i(w,null,{default:n(()=>[r("1")]),_:1}),i(w,null,{default:n(()=>[r("2")]),_:1}),i(w,null,{default:n(()=>[r("3")]),_:1})]),_:1})]),_:1},8,["code"]),i(L,{title:"Icon",description:"A list item can contain an icon",code:e.iconCode},{default:n(()=>[i(B,null,{default:n(()=>[i(w,{as:"a"},{default:n(()=>[i(p,{name:"help"}),i(y,null,{default:n(()=>[i(g,null,{default:n(()=>[r("Floated Icon")]),_:1}),i(b,null,{default:n(()=>[r(" This text will always have a left margin to make sure it sits alongside your icon ")]),_:1})]),_:1})]),_:1}),i(w,{as:"a"},{default:n(()=>[i(p,{name:"right triangle"}),i(y,null,{default:n(()=>[i(g,null,{default:n(()=>[r("Icon Alignment")]),_:1}),i(b,null,{default:n(()=>[r(" Floated icons are by default top aligned. To have an icon top aligned try this example ")]),_:1})]),_:1})]),_:1}),i(w,null,{default:n(()=>[i(p,{name:"help"}),r(" Inline Text ")]),_:1})]),_:1})]),_:1},8,["code"]),i(L,{title:"Image",description:"A list can contain an image",code:e.imageContentCode},{default:n(()=>[i(B,null,{default:n(()=>[i(w,null,{default:n(()=>[i(x,{avatar:"",src:hk}),i(y,null,{default:n(()=>[i(g,null,{default:n(()=>[r("Rachel")]),_:1}),i(b,null,{default:n(()=>[r(" Last seen watching "),kk,r(" just now. ")]),_:1})]),_:1})]),_:1}),i(w,null,{default:n(()=>[i(x,{avatar:"",src:_k}),i(y,null,{default:n(()=>[i(g,null,{default:n(()=>[r("Lindsay")]),_:1}),i(b,null,{default:n(()=>[r(" Last seen watching "),Bk,r(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),i(w,null,{default:n(()=>[i(x,{avatar:"",src:vk}),i(y,null,{default:n(()=>[i(g,null,{default:n(()=>[r("Matthew")]),_:1}),i(b,null,{default:n(()=>[r(" Last seen watching "),$k,r(" yesterday. ")]),_:1})]),_:1})]),_:1}),i(w,null,{default:n(()=>[i(x,{avatar:"",src:bk}),i(y,null,{default:n(()=>[i(g,null,{default:n(()=>[r("Jenny Hess")]),_:1}),i(b,null,{default:n(()=>[r(" Last seen watching "),Tk,r(" 3 days ago. ")]),_:1})]),_:1})]),_:1}),i(w,null,{default:n(()=>[i(x,{avatar:"",src:Md}),i(y,null,{default:n(()=>[i(g,null,{default:n(()=>[r("Veronika Ossi")]),_:1}),i(b,null,{default:n(()=>[r(" Has not watched anything recently ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(L,{title:"Link",description:"A list can contain links",code:e.linkContentCode},{default:n(()=>[i(B,null,{default:n(()=>[i(w,{as:"a"},{default:n(()=>[r("What is a FAQ?")]),_:1}),i(w,{as:"a"},{default:n(()=>[r("Who is our user?")]),_:1}),i(w,{as:"a"},{default:n(()=>[r("Where is our office located?")]),_:1})]),_:1})]),_:1},8,["code"]),i(L,{title:"header",description:"A list item can contain a header",code:e.headerContentCode},{default:n(()=>[i(B,null,{default:n(()=>[i(w,null,{default:n(()=>[i(g,null,{default:n(()=>[r("New York City")]),_:1}),r(" A lovely city ")]),_:1}),i(w,null,{default:n(()=>[i(g,null,{default:n(()=>[r("Chicago")]),_:1}),r(" Also quite a lovely city ")]),_:1}),i(w,null,{default:n(()=>[i(g,null,{default:n(()=>[r("Los Angeles")]),_:1}),r(" Sometimes can be a lovely city ")]),_:1}),i(w,null,{default:n(()=>[i(g,null,{default:n(()=>[r("San Francisco")]),_:1}),r(" What a lovely city ")]),_:1})]),_:1})]),_:1},8,["code"]),i(L,{title:"Description",description:"A list item can contain a description",code:e.descriptionContentCode},{default:n(()=>[i(B,null,{default:n(()=>[i(w,null,{default:n(()=>[i(p,{name:"map marker"}),i(y,null,{default:n(()=>[i(g,{as:"a"},{default:n(()=>[r("Krolewskie Jadlo")]),_:1}),i(b,null,{default:n(()=>[r(" An excellent polish restaurant, quick delivery and hearty, filling meals. ")]),_:1})]),_:1})]),_:1}),i(w,null,{default:n(()=>[i(p,{name:"map marker"}),i(y,null,{default:n(()=>[i(g,{as:"a"},{default:n(()=>[r("Xian Famous Foods")]),_:1}),i(b,null,{default:n(()=>[r(" A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers. ")]),_:1})]),_:1})]),_:1}),i(w,null,{default:n(()=>[i(p,{name:"map marker"}),i(y,null,{default:n(()=>[i(g,{as:"a"},{default:n(()=>[r("Sapporo Haru")]),_:1}),i(b,null,{default:n(()=>[r(" Greenpoint's best choice for quick and delicious sushi. ")]),_:1})]),_:1})]),_:1}),i(w,null,{default:n(()=>[i(p,{name:"map marker"}),i(y,null,{default:n(()=>[i(g,{as:"a"},{default:n(()=>[r("Enid's")]),_:1}),i(b,null,{default:n(()=>[r(" At night a bar, during the day a delicious brunch spot. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(m,{as:"h2",dividing:""},{default:n(()=>[r("Variations")]),_:1}),i(L,{title:"Horizontal",description:"A list can be formatted to have items appear horizontally",code:e.horizontalVarCode},{default:n(()=>[i(B,{horizontal:""},{default:n(()=>[i(w,null,{default:n(()=>[i(x,{avatar:"",src:Sk}),i(y,null,{default:n(()=>[i(g,null,{default:n(()=>[r("Tom")]),_:1}),r(" Top Contributor ")]),_:1})]),_:1}),i(w,null,{default:n(()=>[i(x,{avatar:"",src:Ra}),i(y,null,{default:n(()=>[i(g,null,{default:n(()=>[r("Christian Rocha")]),_:1}),r(" Admin ")]),_:1})]),_:1}),i(w,null,{default:n(()=>[i(x,{avatar:"",src:Hd}),i(y,null,{default:n(()=>[i(g,null,{default:n(()=>[r("Matt")]),_:1}),r(" Top Rated User ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(L,{title:"Inverted",description:"A list can be inverted to appear on a dark background",code:e.invertedVarCode},{default:n(()=>[i(A,{inverted:""},{default:n(()=>[i(B,{inverted:"",relaxed:"",divided:""},{default:n(()=>[i(w,null,{default:n(()=>[i(y,null,{default:n(()=>[i(g,null,{default:n(()=>[r("Snickerdoodle")]),_:1}),r(" An excellent companion ")]),_:1})]),_:1}),i(w,null,{default:n(()=>[i(y,null,{default:n(()=>[i(g,null,{default:n(()=>[r("Poodle")]),_:1}),r(" A poodle, its pretty basic ")]),_:1})]),_:1}),i(w,null,{default:n(()=>[i(y,null,{default:n(()=>[i(g,null,{default:n(()=>[r("Paulo")]),_:1}),r(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(L,{title:"Selection",description:"A selection list formats list items as possible choices",code:e.selectionVarCode},{default:n(()=>[i(B,{selection:"",verticalAlign:"middle"},{default:n(()=>[i(w,null,{default:n(()=>[i(x,{avatar:"",src:Pa}),i(y,null,{default:n(()=>[i(g,null,{default:n(()=>[r("Helen")]),_:1})]),_:1})]),_:1}),i(w,null,{default:n(()=>[i(x,{avatar:"",src:Ra}),i(y,null,{default:n(()=>[i(g,null,{default:n(()=>[r("Christian")]),_:1})]),_:1})]),_:1}),i(w,null,{default:n(()=>[i(x,{avatar:"",src:Di}),i(y,null,{default:n(()=>[i(g,null,{default:n(()=>[r("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(L,{title:"Animated",description:"A list can animate to set the current item apart from the list",code:e.animatedVarCode},{default:n(()=>[i(B,{animated:"",verticalAlign:"middle"},{default:n(()=>[i(w,null,{default:n(()=>[i(x,{avatar:"",src:Pa}),i(y,null,{default:n(()=>[i(g,null,{default:n(()=>[r("Helen")]),_:1})]),_:1})]),_:1}),i(w,null,{default:n(()=>[i(x,{avatar:"",src:Ra}),i(y,null,{default:n(()=>[i(g,null,{default:n(()=>[r("Christian")]),_:1})]),_:1})]),_:1}),i(w,null,{default:n(()=>[i(x,{avatar:"",src:Di}),i(y,null,{default:n(()=>[i(g,null,{default:n(()=>[r("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(L,{title:"Relaxed",description:"A list can relax its padding to provide more negative space",code:e.relaxedVarCode},{default:n(()=>[i(B,{relaxed:""},{default:n(()=>[i(w,null,{default:n(()=>[i(x,{avatar:"",src:Di}),i(y,null,{default:n(()=>[i(g,{as:"a"},{default:n(()=>[r("Daniel Louise")]),_:1}),i(b,null,{default:n(()=>[r(" Last seen watching "),Lk,r(" just now. ")]),_:1})]),_:1})]),_:1}),i(w,null,{default:n(()=>[i(x,{avatar:"",src:Dl}),i(y,null,{default:n(()=>[i(g,{as:"a"},{default:n(()=>[r("Stevie Feliciano")]),_:1}),i(b,null,{default:n(()=>[r(" Last seen watching "),Ik,r(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),i(w,null,{default:n(()=>[i(x,{avatar:"",src:ma}),i(y,null,{default:n(()=>[i(g,{as:"a"},{default:n(()=>[r("Elliot Fu")]),_:1}),i(b,null,{default:n(()=>[r(" Last seen watching "),Dk,r(" yesterday. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(L,{title:"Divided",description:"A list can show divisions between content",code:e.dividedVarCode},{default:n(()=>[i(B,{divided:"",verticalAlign:"middle"},{default:n(()=>[i(w,null,{default:n(()=>[i(x,{avatar:"",src:Di}),i(y,null,{default:n(()=>[i(g,{as:"a"},{default:n(()=>[r("Daniel Louise")]),_:1})]),_:1})]),_:1}),i(w,null,{default:n(()=>[i(x,{avatar:"",src:Dl}),i(y,null,{default:n(()=>[i(g,{as:"a"},{default:n(()=>[r("Stevie Feliciano")]),_:1})]),_:1})]),_:1}),i(w,null,{default:n(()=>[i(x,{avatar:"",src:ma}),i(y,null,{default:n(()=>[i(g,{as:"a"},{default:n(()=>[r("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(L,{title:"Celled",description:"A list can divide its items into cells",code:e.celledVarCode},{default:n(()=>[i(B,{celled:""},{default:n(()=>[i(w,null,{default:n(()=>[i(x,{avatar:"",src:Pa}),i(y,null,{default:n(()=>[i(g,null,{default:n(()=>[r("Snickerdoodle")]),_:1}),r(" An excellent companion ")]),_:1})]),_:1}),i(w,null,{default:n(()=>[i(x,{avatar:"",src:Di}),i(y,null,{default:n(()=>[i(g,null,{default:n(()=>[r("Poodle")]),_:1}),r(" A poodle, its pretty basic ")]),_:1})]),_:1}),i(w,null,{default:n(()=>[i(x,{avatar:"",src:Di}),i(y,null,{default:n(()=>[i(g,null,{default:n(()=>[r("Paulo")]),_:1}),r(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(L,{title:"Size",description:"A list can vary in size",code:e.sizeCode},{default:n(()=>[i(B,{horizontal:"",divided:"",size:"mini"},{default:n(()=>[i(w,null,{default:n(()=>[i(x,{avatar:"",src:Pa}),i(y,null,{default:n(()=>[i(g,null,{default:n(()=>[r("Helen")]),_:1})]),_:1})]),_:1}),i(w,null,{default:n(()=>[i(x,{avatar:"",src:Ra}),i(y,null,{default:n(()=>[i(g,null,{default:n(()=>[r("Christian")]),_:1})]),_:1})]),_:1}),i(w,null,{default:n(()=>[i(x,{avatar:"",src:Di}),i(y,null,{default:n(()=>[i(g,null,{default:n(()=>[r("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(m,{as:"h2",dividing:""},{default:n(()=>[r("Content Variations")]),_:1}),i(L,{title:"Vertical Aligned",description:"An element inside a list can be vertically aligned",code:e.verticalAlignedCode},{default:n(()=>[i(B,{horizontal:""},{default:n(()=>[i(w,null,{default:n(()=>[i(x,{avatar:"",src:Ko}),i(y,{verticalAlign:"top"},{default:n(()=>[r(" Top Aligned ")]),_:1})]),_:1}),i(w,null,{default:n(()=>[i(x,{avatar:"",src:Ko}),i(y,{verticalAlign:"middle"},{default:n(()=>[r(" Middle ")]),_:1})]),_:1}),i(w,null,{default:n(()=>[i(x,{avatar:"",src:Ko}),i(y,{verticalAlign:"bottom"},{default:n(()=>[r(" Bottom ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(L,{title:"Floated",description:"An list, or an element inside a list can be floated left or right",code:e.floatedCode},{default:n(()=>[$("div",null,[i(B,{floated:"right",horizontal:""},{default:n(()=>[i(w,{disabled:""},{default:n(()=>[r("© GitHub, Inc.")]),_:1}),i(w,{as:"a"},{default:n(()=>[r("Terms")]),_:1}),i(w,{as:"a"},{default:n(()=>[r("Privacy")]),_:1}),i(w,{as:"a"},{default:n(()=>[r("Contact")]),_:1})]),_:1}),i(B,{horizontal:""},{default:n(()=>[i(w,{as:"a"},{default:n(()=>[r("About Us")]),_:1}),i(w,{as:"a"},{default:n(()=>[r("Jobs")]),_:1})]),_:1})])]),_:1},8,["code"])]),_:1})])}const Rk=Ye(yk,[["render",Ek]]),Pk=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader />
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,zk={__name:"LoaderDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Loader",code:Pk},{description:n(()=>[r(" A loader ")]),example:n(()=>[i(s(O),null,{default:n(()=>[i(s(Yt),{active:""},{default:n(()=>[i(s(ze))]),_:1}),i(s(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Fk=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text>Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Vk={__name:"TextLoaderDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Text Loader",code:Fk},{description:n(()=>[r(" A loader can contain text ")]),example:n(()=>[i(s(O),null,{default:n(()=>[i(s(Yt),{active:""},{default:n(()=>[i(s(ze),{text:""},{default:n(()=>[r("Loading")]),_:1})]),_:1}),i(s(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Mk=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader Indeterminate text>Preparing Files</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Hk={__name:"IndeterminateDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Indeterminate",code:Mk},{description:n(()=>[r(" A loader can show it's unsure of how long a task will take ")]),example:n(()=>[i(s(O),null,{default:n(()=>[i(s(Yt),{active:""},{default:n(()=>[i(s(ze),{Indeterminate:"",text:""},{default:n(()=>[r("Preparing Files")]),_:1})]),_:1}),i(s(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Ok=`<template>
  <SuiSegment>
    <SuiLoader active />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Nk={__name:"ActiveDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Active",code:Ok},{description:n(()=>[r(" A loader can be active or visible ")]),example:n(()=>[i(s(O),null,{default:n(()=>[i(s(ze),{active:""}),i(s(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},qk=`<template>
  <SuiSegment>
    <SuiLoader disabled />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Gk={__name:"DisabledDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Disabled",code:qk},{description:n(()=>[r(" A loader can be disabled or hidden ")]),example:n(()=>[i(s(O),null,{default:n(()=>[i(s(ze),{disabled:""}),i(s(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},jk=`<template>
  <SuiLoader active inline />
</template>`,Uk={__name:"InlineDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Inline",code:jk},{description:n(()=>[r(" Loaders can appear inline with content ")]),example:n(()=>[i(s(ze),{active:"",inline:""})]),_:1}))}},Yk=`<template>
  <SuiLoader active inline />
</template>`,Wk={__name:"InlineCenterDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Inline Center",code:Yk},{description:n(()=>[r(" Loaders can appear inline centered with content ")]),example:n(()=>[i(s(ze),{active:"",inline:"centered"})]),_:1}))}},Kk=`<template>
  <SuiLoader slow active inline />
  <SuiLoader active inline />
  <SuiLoader fast active inline />
</template>`,Xk={__name:"SpeedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Speed",code:Kk},{description:n(()=>[r(" Loaders can appear slow, normal or fast ")]),example:n(()=>[i(s(ze),{slow:"",active:"",inline:""}),i(s(ze),{active:"",inline:""}),i(s(ze),{fast:"",active:"",inline:""})]),_:1}))}},Jk=`<template>
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
</template>`,Qk={__name:"ColorsDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Colors",code:Jk},{description:n(()=>[r(" Loaders can be different colors ")]),example:n(()=>[i(s(ze),{active:"",inline:"",primary:""}),i(s(ze),{active:"",inline:"",secondary:""}),i(s(ze),{active:"",inline:"",color:"red"}),i(s(ze),{active:"",inline:"",color:"orange"}),i(s(ze),{active:"",inline:"",color:"yellow"}),i(s(ze),{active:"",inline:"",color:"olive"}),i(s(ze),{active:"",inline:"",color:"green"}),i(s(ze),{active:"",inline:"",color:"teal"}),i(s(ze),{active:"",inline:"",color:"blue"}),i(s(ze),{active:"",inline:"",color:"violet"}),i(s(ze),{active:"",inline:"",color:"purple"}),i(s(ze),{active:"",inline:"",color:"pink"}),i(s(ze),{active:"",inline:"",color:"brown"}),i(s(ze),{active:"",inline:"",color:"grey"}),i(s(ze),{active:"",inline:"",color:"black"})]),_:1}))}},Zk=`<template>
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
</template>`,eB={__name:"SizeDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Size",code:Zk},{description:n(()=>[r(" Loaders can have different sizes ")]),example:n(()=>[i(s(O),null,{default:n(()=>[i(s(Yt),{active:""},{default:n(()=>[i(s(ze),{text:"",size:"mini"},{default:n(()=>[r("Loading")]),_:1})]),_:1}),i(s(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),i(s(O),null,{default:n(()=>[i(s(Yt),{active:""},{default:n(()=>[i(s(ze),{text:"",size:"tiny"},{default:n(()=>[r("Loading")]),_:1})]),_:1}),i(s(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),i(s(O),null,{default:n(()=>[i(s(Yt),{active:""},{default:n(()=>[i(s(ze),{text:"",size:"small"},{default:n(()=>[r("Loading")]),_:1})]),_:1}),i(s(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),i(s(O),null,{default:n(()=>[i(s(Yt),{active:""},{default:n(()=>[i(s(ze),{text:"",size:"large"},{default:n(()=>[r("Loading")]),_:1})]),_:1}),i(s(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),i(s(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),i(s(O),null,{default:n(()=>[i(s(Yt),{active:""},{default:n(()=>[i(s(ze),{text:"",size:"big"},{default:n(()=>[r("Loading")]),_:1})]),_:1}),i(s(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),i(s(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),i(s(O),null,{default:n(()=>[i(s(Yt),{active:""},{default:n(()=>[i(s(ze),{text:"",size:"huge"},{default:n(()=>[r("Loading")]),_:1})]),_:1}),i(s(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),i(s(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},tB=`<template>
  <SuiSegment inverted>
    <SuiLoader active inverted />

    <SuiImage src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,iB={__name:"InvertedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Inverted",code:tB},{description:n(()=>[r(" Loaders can have their colors inverted. ")]),example:n(()=>[i(s(O),{inverted:""},{default:n(()=>[i(s(ze),{active:"",inverted:""}),i(s(le),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},nB={__name:"Loader",setup(e){const t=[{id:"loader",label:"Loader",category:"Types",component:zk},{id:"text-loader",label:"Text Loader",category:"Types",component:Vk},{id:"indeterminate",label:"Indeterminate",category:"States",component:Hk},{id:"active",label:"Active",category:"States",component:Nk},{id:"disabled",label:"Disabled",category:"States",component:Gk},{id:"inline",label:"Inline",category:"Variations",component:Uk},{id:"inline-center",label:"Inline Center",category:"Variations",component:Wk},{id:"speed",label:"Speed",category:"Variations",component:Xk},{id:"colors",label:"Colors",category:"Variations",component:Qk},{id:"size",label:"Size",category:"Variations",component:eB},{id:"inverted",label:"Inverted",category:"Variations",component:iB}];return(a,o)=>(S(),C(lt,{title:"Loader",description:"A loader alerts a user to wait for an activity to complete","component-docs":t}))}},on="/vue-fomantic-ui/images/wireframe/short-paragraph.png",aB=F({name:"RailDoc",components:{DocExample:Et},setup(){return{railCode:`<sui-grid centered :columns="3">
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
</sui-grid>`}}}),oB={class:"intro"};function lB(e,t,a,o,l,u){const c=T("sui-header-subheader"),m=T("sui-header"),d=T("sui-divider"),p=T("sui-icon"),f=T("sui-menu-item"),h=T("sui-menu"),_=T("sui-container"),A=T("sui-segment"),w=T("sui-image"),B=T("sui-rail"),L=T("sui-grid-column"),R=T("sui-grid"),g=T("doc-example");return S(),we("div",null,[i(A,{vertical:""},{default:n(()=>[i(_,{class:"main"},{default:n(()=>[$("div",oB,[i(m,{as:"h1"},{default:n(()=>[r("Rail "),i(c,null,{default:n(()=>[r(" A rail is used to show accompanying content outside the boundaries of the main view of a site ")]),_:1})]),_:1}),i(d,{hidden:""}),i(h,{floated:"right"},{default:n(()=>[i(f,{as:"a",icon:""},{default:n(()=>[i(p,{name:"edit"})]),_:1}),i(f,{as:"a",icon:""},{default:n(()=>[i(p,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),i(_,{class:"main"},{default:n(()=>[i(m,{as:"h2",dividing:""},{default:n(()=>[r("Types")]),_:1}),i(g,{title:"Rail",description:"A rail can be presented on the left or right side of a container",code:e.railCode},{default:n(()=>[i(R,{centered:"",columns:3},{default:n(()=>[i(L,null,{default:n(()=>[i(A,null,{default:n(()=>[i(w,{src:on}),i(B,{position:"left"},{default:n(()=>[i(A,null,{default:n(()=>[r(" Left Rail Content ")]),_:1})]),_:1}),i(B,{position:"right"},{default:n(()=>[i(A,null,{default:n(()=>[r(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(g,{title:"Internal",description:"A rail can attach itself to the inside of a container",code:e.internalCode},{default:n(()=>[i(A,{textAlign:"center"},{default:n(()=>[i(w,{src:on}),i(B,{internal:"",position:"left"},{default:n(()=>[i(A,null,{default:n(()=>[r("Left Rail Content")]),_:1})]),_:1}),i(B,{internal:"",position:"right"},{default:n(()=>[i(A,null,{default:n(()=>[r("Right Rail Content")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(g,{title:"Dividing",description:"A rail can create a division between itself and a container",code:e.dividingCode},{default:n(()=>[i(R,{centered:"",columns:3},{default:n(()=>[i(L,null,{default:n(()=>[i(A,null,{default:n(()=>[i(w,{src:on}),i(B,{dividing:"",position:"left"},{default:n(()=>[i(A,null,{default:n(()=>[r(" Left Rail Content ")]),_:1})]),_:1}),i(B,{dividing:"",position:"right"},{default:n(()=>[i(A,null,{default:n(()=>[r(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(m,{as:"h2",dividing:""},{default:n(()=>[r("Variations")]),_:1}),i(g,{title:"Attached",description:"A rail can appear attached to the main viewport",code:e.attachedCode},{default:n(()=>[i(R,{centered:"",columns:3},{default:n(()=>[i(L,null,{default:n(()=>[i(A,null,{default:n(()=>[i(w,{src:on}),i(B,{attached:"",position:"left"},{default:n(()=>[i(A,null,{default:n(()=>[r(" Left Rail Content ")]),_:1})]),_:1}),i(B,{attached:"",position:"right"},{default:n(()=>[i(A,null,{default:n(()=>[r(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(g,{title:"Close",description:"A rail can appear closer to the main viewport",code:e.closeCode},{default:n(()=>[i(R,{centered:"",columns:3},{default:n(()=>[i(L,null,{default:n(()=>[i(A,null,{default:n(()=>[i(w,{src:on}),i(B,{close:"",position:"left"},{default:n(()=>[i(A,null,{default:n(()=>[r(" Left Rail Content ")]),_:1})]),_:1}),i(B,{close:"",position:"right"},{default:n(()=>[i(A,null,{default:n(()=>[r(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(g,{title:"Size",description:"A rail can have different sizes",code:e.sizeCode},{default:n(()=>[i(R,{centered:"",columns:3},{default:n(()=>[i(L,null,{default:n(()=>[i(A,null,{default:n(()=>[i(w,{src:on}),i(B,{size:"small",position:"left"},{default:n(()=>[r(" Left Small Rail ")]),_:1}),i(B,{size:"large",position:"right"},{default:n(()=>[r(" Right Large Rail ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const rB=Ye(aB,[["render",lB]]),sB=`<template>
  <SuiReveal animated="fade">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/ade.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,uB={__name:"FadeDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Fade",code:sB},{description:n(()=>[r(" An element can disappear to reveal content below ")]),example:n(()=>[i(s(tn),{animated:"fade"},{default:n(()=>[i(s(Dt),{visible:""},{default:n(()=>[i(s(le),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),i(s(Dt),{hidden:""},{default:n(()=>[i(s(le),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/ade.jpg"})]),_:1})]),_:1})]),_:1}))}},cB=`<template>
  <SuiReveal animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/chris.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,dB={__name:"MoveDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Move",code:cB},{description:n(()=>[r(" An element can move in a direction to reveal content ")]),example:n(()=>[i(s(tn),{animated:"move"},{default:n(()=>[i(s(Dt),{visible:""},{default:n(()=>[i(s(le),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),i(s(Dt),{hidden:""},{default:n(()=>[i(s(le),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/chris.jpg"})]),_:1})]),_:1})]),_:1}))}},mB=`<template>
  <SuiReveal animated="rotate">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/stevie.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,pB={__name:"RotateDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Rotate",code:mB},{description:n(()=>[r(" An element can rotate to reveal content below ")]),example:n(()=>[i(s(tn),{animated:"rotate"},{default:n(()=>[i(s(Dt),{visible:""},{default:n(()=>[i(s(le),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),i(s(Dt),{hidden:""},{default:n(()=>[i(s(le),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/stevie.jpg"})]),_:1})]),_:1})]),_:1}))}},fB=`<template>
  <SuiReveal active animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/nan.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,gB={__name:"ActiveDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Active",code:fB},{description:n(()=>[r(" An active reveal displays its hidden content ")]),example:n(()=>[i(s(tn),{active:"",animated:"move"},{default:n(()=>[i(s(Dt),{visible:""},{default:n(()=>[i(s(le),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),i(s(Dt),{hidden:""},{default:n(()=>[i(s(le),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/nan.jpg"})]),_:1})]),_:1})]),_:1}))}},hB=`<template>
  <SuiReveal disabled animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/nan.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,_B={__name:"DisabledDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Disabled",code:hB},{description:n(()=>[r(" A disabled reveal will not animate when hovered ")]),example:n(()=>[i(s(tn),{disabled:"",animated:"move"},{default:n(()=>[i(s(Dt),{visible:""},{default:n(()=>[i(s(le),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),i(s(Dt),{hidden:""},{default:n(()=>[i(s(le),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/nan.jpg"})]),_:1})]),_:1})]),_:1}))}},vB=`<template>
  <SuiReveal instant animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/chris.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,bB={__name:"InstantDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Instant",code:vB},{description:n(()=>[r(" An element can show its content without delay ")]),example:n(()=>[i(s(tn),{instant:"",animated:"move"},{default:n(()=>[i(s(Dt),{visible:""},{default:n(()=>[i(s(le),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),i(s(Dt),{hidden:""},{default:n(()=>[i(s(le),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/chris.jpg"})]),_:1})]),_:1})]),_:1}))}},SB={__name:"Reveal",setup(e){const t=[{id:"fade",label:"Fade",category:"Types",component:uB},{id:"move",label:"Move",category:"Types",component:dB},{id:"rotate",label:"Rotate",category:"Types",component:pB},{id:"active",label:"Active",category:"States",component:gB},{id:"disabled",label:"Disabled",category:"States",component:_B},{id:"instant",label:"Instant",category:"Variations",component:bB}];return(a,o)=>(S(),C(lt,{title:"Reveal",description:"A reveal displays additional content in place of previous content when activated","component-docs":t}))}},yB=$("p",null,"Pellentesque habitant morbi tristique senectus.",-1),wB=`<template>
  <SuiSegment>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
</template>`,CB={__name:"SegmentDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Segment",code:wB},{description:n(()=>[r(" A segment of content ")]),example:n(()=>[i(s(O),null,{default:n(()=>[yB]),_:1})]),_:1}))}},xB=`<template>
  <SuiSegment placeholder>
    <SuiHeader icon>
      <SuiIcon name="pdf file outline" />
      No documents are listed for this customer.
    </SuiHeader>
    <SuiButton primary>Add Document</SuiButton>
  </SuiSegment>
</template>`,AB={__name:"PlaceholderSegmentDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Placeholder Segment",code:xB},{description:n(()=>[r(" A segment can be used to reserve space for conditionally displayed content. ")]),example:n(()=>[i(s(O),{placeholder:""},{default:n(()=>[i(s(fe),{icon:""},{default:n(()=>[i(s(W),{name:"pdf file outline"}),r(" No documents are listed for this customer. ")]),_:1}),i(s(P),{primary:""},{default:n(()=>[r("Add Document")]),_:1})]),_:1})]),_:1}))}},kB=$("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),BB=`<template>
  <SuiSegment raised>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,$B={__name:"RaisedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Raised",code:BB},{description:n(()=>[r(" A segment may be formatted to raise above the page. ")]),example:n(()=>[i(s(O),{raised:""},{default:n(()=>[kB]),_:1})]),_:1}))}},TB=$("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),LB=$("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),IB=`<template>
  <SuiSegment stacked>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
  <SuiSegment stacked="tall">
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,DB={__name:"StackedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Stacked",code:IB},{description:n(()=>[r(" A segment can be formatted to show it contains multiple pages ")]),example:n(()=>[i(s(O),{stacked:""},{default:n(()=>[TB]),_:1}),i(s(O),{stacked:"tall"},{default:n(()=>[LB]),_:1})]),_:1}))}},EB=$("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),RB=$("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),PB=$("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),zB=`<template>
  <SuiHeader as="h4">Header</SuiHeader>
  <SuiSegment pailed>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
  </SuiSegment>
</template>`,FB={__name:"PiledDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Piled",code:zB},{description:n(()=>[r(" A segment can be formatted to look like a pile of pages ")]),example:n(()=>[i(s(fe),{as:"h4"},{default:n(()=>[r("Header")]),_:1}),i(s(O),{piled:""},{default:n(()=>[EB,RB,PB]),_:1})]),_:1}))}},VB=$("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his.",-1),MB=$("p",null,"Pellentesque habitant morbi tristique senectus.",-1),HB=$("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.",-1),OB=`<template>
  <SuiSegment vertical>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his.</p>
  </SuiSegment>
  <SuiSegment vertical>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
  <SuiSegment vertical>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.</p>
  </SuiSegment>
</template>`,NB={__name:"VerticalSegmentDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Vertical Segment",code:OB},{description:n(()=>[r(" A vertical segment formats content to be aligned as part of a vertical group ")]),example:n(()=>[i(s(O),{vertical:""},{default:n(()=>[VB]),_:1}),i(s(O),{vertical:""},{default:n(()=>[MB]),_:1}),i(s(O),{vertical:""},{default:n(()=>[HB]),_:1})]),_:1}))}},qB=$("p",null,"Top",-1),GB=$("p",null,"Middle",-1),jB=$("p",null,"Bottom",-1),UB=$("p",null,"Top",-1),YB=$("p",null,"Middle",-1),WB=$("p",null,"Bottom",-1),KB=$("p",null,"Top",-1),XB=$("p",null,"Middle",-1),JB=$("p",null,"Bottom",-1),QB=`<template>
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
</template>`,ZB={__name:"SegmentsDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Segments",code:QB},{description:n(()=>[r(" A group of segments can be formatted to appear together ")]),example:n(()=>[i(s(St),null,{default:n(()=>[i(s(O),null,{default:n(()=>[qB]),_:1}),i(s(O),null,{default:n(()=>[GB]),_:1}),i(s(O),null,{default:n(()=>[jB]),_:1})]),_:1}),i(s(St),{basic:""},{default:n(()=>[i(s(O),null,{default:n(()=>[UB]),_:1}),i(s(O),null,{default:n(()=>[YB]),_:1}),i(s(O),null,{default:n(()=>[WB]),_:1})]),_:1}),i(s(St),null,{default:n(()=>[i(s(O),null,{default:n(()=>[KB]),_:1}),i(s(O),{color:"red"},{default:n(()=>[XB]),_:1}),i(s(O),{secondary:""},{default:n(()=>[JB]),_:1})]),_:1})]),_:1}))}},e$=$("p",null,"Top",-1),t$=$("p",null,"Nested Top",-1),i$=$("p",null,"Nested Middle",-1),n$=$("p",null,"Nested Bottom",-1),a$=$("p",null,"Middle",-1),o$=$("p",null,"Top",-1),l$=$("p",null,"Middle",-1),r$=$("p",null,"Bottom",-1),s$=$("p",null,"Bottom",-1),u$=`<template>
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
</template>`,c$={__name:"NestedSegmentsDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Nested Segments",code:u$},{description:n(()=>[r(" A group of segments can be nested in another group of segments ")]),example:n(()=>[i(s(St),null,{default:n(()=>[i(s(O),null,{default:n(()=>[e$]),_:1}),i(s(St),null,{default:n(()=>[i(s(O),null,{default:n(()=>[t$]),_:1}),i(s(O),null,{default:n(()=>[i$]),_:1}),i(s(O),null,{default:n(()=>[n$]),_:1})]),_:1}),i(s(O),null,{default:n(()=>[a$]),_:1}),i(s(St),{horizontal:""},{default:n(()=>[i(s(O),null,{default:n(()=>[o$]),_:1}),i(s(O),null,{default:n(()=>[l$]),_:1}),i(s(O),null,{default:n(()=>[r$]),_:1})]),_:1}),i(s(O),null,{default:n(()=>[s$]),_:1})]),_:1})]),_:1}))}},d$=$("p",null,"Left",-1),m$=$("p",null,"Middle",-1),p$=$("p",null,"Right",-1),f$=`<template>
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
</template>`,g$={__name:"HorizontalSegmentsDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Horizontal Segments",code:f$},{description:n(()=>[r(" A segment group can appear horizontally ")]),example:n(()=>[i(s(St),{horizontal:""},{default:n(()=>[i(s(O),null,{default:n(()=>[d$]),_:1}),i(s(O),null,{default:n(()=>[m$]),_:1}),i(s(O),null,{default:n(()=>[p$]),_:1})]),_:1})]),_:1}))}},h$=`<template>
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
</template>`,_$={__name:"HorizontalEqualWidthSegmentsDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Horizontal equal width Segments",code:h$},{description:n(()=>[r(" A horizontal segment group can automatically divide segments to be equal width ")]),example:n(()=>[i(s(St),{horizontal:"equal width"},{default:n(()=>[i(s(O),null,{default:n(()=>[r(" Segment One ")]),_:1}),i(s(O),null,{default:n(()=>[r(" Segment Two with a lot of additional content ")]),_:1}),i(s(O),null,{default:n(()=>[r(" Segment Three ")]),_:1})]),_:1})]),_:1}))}},v$=`<template>
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
</template>`,b$={__name:"HorizontalWrappingSegmentsDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Horizontal wrapping Segments",code:v$},{description:n(()=>[r(" A horizontal segment group can automatically wrap their segments on smaller screens ")]),example:n(()=>[i(s(St),{horizontal:"wrapping"},{default:n(()=>[i(s(O),null,{default:n(()=>[r(" Segment One ")]),_:1}),i(s(O),null,{default:n(()=>[r(" Segment Two ")]),_:1}),i(s(O),null,{default:n(()=>[r(" Segment Three ")]),_:1}),i(s(O),null,{default:n(()=>[r(" Segment Four ")]),_:1}),i(s(O),null,{default:n(()=>[r(" Segment Five ")]),_:1}),i(s(O),null,{default:n(()=>[r(" Segment Six ")]),_:1}),i(s(O),null,{default:n(()=>[r(" Segment Seven ")]),_:1}),i(s(O),null,{default:n(()=>[r(" Segment Eight ")]),_:1})]),_:1})]),_:1}))}},S$=$("p",null,"Top",-1),y$=$("p",null,"Middle",-1),w$=$("p",null,"Bottom",-1),C$=`<template>
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
</template>`,x$={__name:"RaisedSegmentsDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Raised Segments",code:C$},{description:n(()=>[r(" A group of segments can be raised ")]),example:n(()=>[i(s(St),{raised:""},{default:n(()=>[i(s(O),null,{default:n(()=>[S$]),_:1}),i(s(O),null,{default:n(()=>[y$]),_:1}),i(s(O),null,{default:n(()=>[w$]),_:1})]),_:1})]),_:1}))}},A$=$("p",null,"Top",-1),k$=$("p",null,"Middle",-1),B$=$("p",null,"Bottom",-1),$$=`<template>
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
</template>`,T$={__name:"StackedSegmentsDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Stacked Segments",code:$$},{description:n(()=>[r(" A group of segments can be stacked ")]),example:n(()=>[i(s(St),{stacked:""},{default:n(()=>[i(s(O),null,{default:n(()=>[A$]),_:1}),i(s(O),null,{default:n(()=>[k$]),_:1}),i(s(O),null,{default:n(()=>[B$]),_:1})]),_:1})]),_:1}))}},L$=$("p",null,"Top",-1),I$=$("p",null,"Middle",-1),D$=$("p",null,"Bottom",-1),E$=`<template>
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
</template>`,R$={__name:"PiledSegmentsDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Piled Segments",code:E$},{description:n(()=>[r(" A group of segments can be piled ")]),example:n(()=>[i(s(St),{piled:""},{default:n(()=>[i(s(O),null,{default:n(()=>[L$]),_:1}),i(s(O),null,{default:n(()=>[I$]),_:1}),i(s(O),null,{default:n(()=>[D$]),_:1})]),_:1})]),_:1}))}},P$=$("p",null,"Pellentesque habitant morbi tristique senectus.",-1),z$=`<template>
  <SuiSegment disabled>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
</template>`,F$={__name:"DisabledDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Disabled",code:z$},{description:n(()=>[r(" A segment may show its content is disabled ")]),example:n(()=>[i(s(O),{disabled:""},{default:n(()=>[P$]),_:1})]),_:1}))}},V$=`<template>
  <SuiSegment loading>
    <SuiImage src="/images/wireframe/paragraph.png" />
  </SuiSegment>
</template>`,M$={__name:"LoadingDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Loading",code:V$},{description:n(()=>[r(" A segment may show its content is being loaded ")]),example:n(()=>[i(s(O),{loading:""},{default:n(()=>[i(s(le),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}))}},H$=$("p",null,"I'm here to tell you something, and you will probably read me first.",-1),O$=`<template>
  <SuiSegment inverted>
    <p>I'm here to tell you something, and you will probably read me first.</p>
  </SuiSegment>
</template>`,N$={__name:"InvertedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Inverted",code:O$},{description:n(()=>[r(" A segment can have its colors inverted for contrast ")]),example:n(()=>[i(s(O),{inverted:""},{default:n(()=>[H$]),_:1})]),_:1}))}},q$=$("p",null,"This segment is on top",-1),G$=$("p",null,"This segment is attached on both sides",-1),j$=$("p",null,"This segment is on bottom",-1),U$=`<template>
  <SuiSegment attached="top">
    <p>This segment is on top</p>
  </SuiSegment>
  <SuiSegment attached>
    <p>This segment is attached on both sides</p>
  </SuiSegment>
  <SuiSegment attached="bottom">
    <p>This segment is on bottom</p>
  </SuiSegment>
</template>`,Y$={__name:"AttachedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Attached",code:U$},{description:n(()=>[r(" A segment can be attached to other content on a page ")]),example:n(()=>[i(s(O),{attached:"top"},{default:n(()=>[q$]),_:1}),i(s(O),{attached:""},{default:n(()=>[G$]),_:1}),i(s(O),{attached:"bottom"},{default:n(()=>[j$]),_:1})]),_:1}))}},W$=$("p",null,"Padded content.",-1),K$=$("p",null,"Padded content.",-1),X$=`<template>
  <SuiSegment padded>
    <p>Padded content.</p>
  </SuiSegment>
  <SuiSegment padded="very">
    <p>Padded content.</p>
  </SuiSegment>
</template>`,J$={__name:"PaddedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Padded",code:X$},{description:n(()=>[r(" A segment can increase its padding ")]),example:n(()=>[i(s(O),{padded:""},{default:n(()=>[W$]),_:1}),i(s(O),{padded:"very"},{default:n(()=>[K$]),_:1})]),_:1}))}},Q$=$("p",null,"Fitted Segment",-1),Z$=$("p",null,"Horizontally fitted segment",-1),eT=$("p",null,"Vertically fitted segment",-1),tT=`<template>
  <SuiSegment fitted>
    <p>Fitted Segment</p>
  </SuiSegment>
  <SuiSegment fitted="horizontally">
    <p>Horizontally fitted segment</p>
  </SuiSegment>
  <SuiSegment fitted="vertically">
    <p>Vertically fitted segment</p>
  </SuiSegment>
</template>`,iT={__name:"FittedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Fitted",code:tT},{description:n(()=>[r(" A segment can remove its padding, vertically or horizontally ")]),example:n(()=>[i(s(O),{fitted:""},{default:n(()=>[Q$]),_:1}),i(s(O),{fitted:"horizontally"},{default:n(()=>[Z$]),_:1}),i(s(O),{fitted:"vertically"},{default:n(()=>[eT]),_:1})]),_:1}))}},nT=$("p",null,"Pellentesque habitant morbi",-1),aT=$("p",null,"Pellentesque habitant morbi",-1),oT=$("p",null,"Pellentesque habitant morbi",-1),lT=`<template>
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
</template>`,rT={__name:"CompactDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Compact",code:lT},{description:n(()=>[r(" A segment may take up only as much space as is necessary ")]),example:n(()=>[i(s(O),{compact:""},{default:n(()=>[nT]),_:1}),i(s(St),{compact:""},{default:n(()=>[i(s(O),null,{default:n(()=>[aT]),_:1}),i(s(O),null,{default:n(()=>[oT]),_:1})]),_:1})]),_:1}))}},sT=`<template>
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
</template>`,uT={__name:"ColoredDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Colored",code:sT},{description:n(()=>[r(" A segment can be colored ")]),example:n(()=>[i(s(O),{color:"red"},{default:n(()=>[r("Red")]),_:1}),i(s(O),{color:"orange"},{default:n(()=>[r("Orange")]),_:1}),i(s(O),{color:"yellow"},{default:n(()=>[r("Yellow")]),_:1}),i(s(O),{color:"olive"},{default:n(()=>[r("Olive")]),_:1}),i(s(O),{color:"green"},{default:n(()=>[r("Green")]),_:1}),i(s(O),{color:"teal"},{default:n(()=>[r("Teal")]),_:1}),i(s(O),{color:"blue"},{default:n(()=>[r("Blue")]),_:1}),i(s(O),{color:"violet"},{default:n(()=>[r("Violet")]),_:1}),i(s(O),{color:"purple"},{default:n(()=>[r("Purple")]),_:1}),i(s(O),{color:"pink"},{default:n(()=>[r("Pink")]),_:1}),i(s(O),{color:"brown"},{default:n(()=>[r("Brown")]),_:1}),i(s(O),{color:"grey"},{default:n(()=>[r("Grey")]),_:1}),i(s(O),{color:"black"},{default:n(()=>[r("Black")]),_:1})]),_:1}))}},cT=$("p",null,"I'm here to tell you something, and you will probably read me first.",-1),dT=$("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),mT=$("p",null,"If you notice me you must be looking very hard.",-1),pT=$("p",null,"I'm here to tell you something, and you will probably read me first.",-1),fT=$("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),gT=$("p",null,"If you notice me you must be looking very hard.",-1),hT=$("p",null,"I'm here to tell you something, and you will probably read me first.",-1),_T=$("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),vT=$("p",null,"If you notice me you must be looking very hard.",-1),bT=`<template>
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
</template>`,ST={__name:"EmphasisDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Emphasis",code:bT},{description:n(()=>[r(" A segment can be formatted to appear more or less noticeable ")]),example:n(()=>[i(s(O),null,{default:n(()=>[cT]),_:1}),i(s(O),{secondary:""},{default:n(()=>[dT]),_:1}),i(s(O),{tertiary:""},{default:n(()=>[mT]),_:1}),i(s(Fe)),i(s(O),{inverted:""},{default:n(()=>[pT]),_:1}),i(s(O),{secondary:"",inverted:""},{default:n(()=>[fT]),_:1}),i(s(O),{tertiary:"",inverted:""},{default:n(()=>[gT]),_:1}),i(s(Fe)),i(s(O),{inverted:"",color:"red"},{default:n(()=>[hT]),_:1}),i(s(O),{secondary:"",inverted:"",color:"red"},{default:n(()=>[_T]),_:1}),i(s(O),{tertiary:"",inverted:"",color:"red"},{default:n(()=>[vT]),_:1})]),_:1}))}},yT=`<template>
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
</template>`,wT={__name:"CircularDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Circular",code:yT},{description:n(()=>[r(" A segment can be circular ")]),example:n(()=>[i(s(O),{circular:"",style:{width:"175px",height:"175px"}},{default:n(()=>[i(s(fe),{as:"h2"},{default:n(()=>[r(" Buy Now "),i(s(Ki),null,{default:n(()=>[r("$10.99")]),_:1})]),_:1})]),_:1}),i(s(O),{circular:"",inverted:"",style:{width:"175px",height:"175px"}},{default:n(()=>[i(s(fe),{as:"h2"},{default:n(()=>[r(" Buy Now "),i(s(Ki),null,{default:n(()=>[r("$10.99")]),_:1})]),_:1})]),_:1})]),_:1}))}},CT=`<template>
  <SuiSegment clearing>
    <SuiButton floated="right" content="Floated" />
  </SuiSegment>
</template>`,xT={__name:"ClearingDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Clearing",code:CT},{description:n(()=>[r(" A segment can clear floated content ")]),example:n(()=>[i(s(O),{clearing:""},{default:n(()=>[i(s(P),{floated:"right",content:"Floated"})]),_:1})]),_:1}))}},AT=$("p",null,"This segment will appear to the right",-1),kT=$("p",null,"This segment will appear to the left",-1),BT=`<template>
  <SuiSegment floated="right">
    <p>This segment will appear to the right</p>
  </SuiSegment>
  <SuiSegment floated="left">
    <p>This segment will appear to the left</p>
  </SuiSegment>
</template>`,$T={__name:"FloatedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Floated",code:BT},{description:n(()=>[r(" A segment can appear to the left or right of other content ")]),example:n(()=>[i(s(O),{floated:"right"},{default:n(()=>[AT]),_:1}),i(s(O),{floated:"left"},{default:n(()=>[kT]),_:1})]),_:1}))}},TT=`<template>
  <SuiSegment textAlign="right">Right</SuiSegment>
  <SuiSegment textAlign="left">Left</SuiSegment>
  <SuiSegment textAlign="center">Center</SuiSegment>
</template>`,LT={__name:"TextAlignmentDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Text Alignment",code:TT},{description:n(()=>[r(" A segment can have its text aligned to a side ")]),example:n(()=>[i(s(O),{textAlign:"right"},{default:n(()=>[r("Right")]),_:1}),i(s(O),{textAlign:"left"},{default:n(()=>[r("Left")]),_:1}),i(s(O),{textAlign:"center"},{default:n(()=>[r("Center")]),_:1})]),_:1}))}},IT=$("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),DT=`<template>
  <SuiSegment basic>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,ET={__name:"BasicDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Basic",code:DT},{description:n(()=>[r(" A basic segment has no special formatting ")]),example:n(()=>[i(s(O),{basic:""},{default:n(()=>[IT]),_:1})]),_:1}))}},RT=$("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),PT=$("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),zT=$("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),FT=$("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),VT=$("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),MT=$("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),HT=$("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),OT=$("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),NT=`<template>
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
</template>`,qT={__name:"ScrollingDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Scrolling",code:NT},{description:n(()=>[r(" A scrolling segment has a predefined height to allow its content to be scrollable ")]),example:n(()=>[i(s(O),{scrolling:""},{default:n(()=>[RT,PT,zT,FT,VT,MT,HT,OT]),_:1})]),_:1}))}},GT=`<template>
  <SuiSegment size="mini">Mini</SuiSegment>
  <SuiSegment size="tiny">Tiny</SuiSegment>
  <SuiSegment size="small">Small</SuiSegment>
  <SuiSegment>Default</SuiSegment>
  <SuiSegment size="large">Large</SuiSegment>
  <SuiSegment size="big">Big</SuiSegment>
  <SuiSegment size="huge">Huge</SuiSegment>
  <SuiSegment size="massive">Massive</SuiSegment>
</template>`,jT={__name:"SizeDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Size",code:GT},{description:n(()=>[r(" A segment can vary in size ")]),example:n(()=>[i(s(O),{size:"mini"},{default:n(()=>[r("Mini")]),_:1}),i(s(O),{size:"tiny"},{default:n(()=>[r("Tiny")]),_:1}),i(s(O),{size:"small"},{default:n(()=>[r("Small")]),_:1}),i(s(O),null,{default:n(()=>[r("Default")]),_:1}),i(s(O),{size:"large"},{default:n(()=>[r("Large")]),_:1}),i(s(O),{size:"big"},{default:n(()=>[r("Big")]),_:1}),i(s(O),{size:"huge"},{default:n(()=>[r("Huge")]),_:1}),i(s(O),{size:"massive"},{default:n(()=>[r("Massive")]),_:1})]),_:1}))}},UT={__name:"Segment",setup(e){const t=[{id:"segment",label:"Segment",category:"Types",component:CB},{id:"placeholder-segment",label:"Placeholder Segment",category:"Types",component:AB},{id:"raised",label:"Raised",category:"Types",component:$B},{id:"stacked",label:"Stacked",category:"Types",component:DB},{id:"piled",label:"Piled",category:"Types",component:FB},{id:"vertical-segment",label:"Vertical Segment",category:"Types",component:NB},{id:"segments",label:"Segments",category:"Groups",component:ZB},{id:"nested-segments",label:"Nested Segments",category:"Groups",component:c$},{id:"horizontal-segments",label:"Horizontal Segments",category:"Groups",component:g$},{id:"horizontal-equal-width-segments",label:"Horizontal equal width Segments",category:"Groups",component:_$},{id:"horizontal-wrapping-segments",label:"Horizontal wrapping Segments",category:"Groups",component:b$},{id:"raised-segments",label:"Raised Segments",category:"Groups",component:x$},{id:"stacked-segments",label:"Stacked Segments",category:"Groups",component:T$},{id:"piled-segments",label:"Piled Segments",category:"Groups",component:R$},{id:"disabled",label:"Disabled",category:"States",component:F$},{id:"loading",label:"Loading",category:"States",component:M$},{id:"inverted",label:"Inverted",category:"Variations",component:N$},{id:"attached",label:"Attached",category:"Variations",component:Y$},{id:"padded",label:"Padded",category:"Variations",component:J$},{id:"fitted",label:"Fitted",category:"Variations",component:iT},{id:"compact",label:"Compact",category:"Variations",component:rT},{id:"colored",label:"Colored",category:"Variations",component:uT},{id:"emphasis",label:"Emphasis",category:"Variations",component:ST},{id:"circular",label:"Circular",category:"Variations",component:wT},{id:"clearing",label:"Clearing",category:"Variations",component:xT},{id:"floated",label:"Floated",category:"Variations",component:$T},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:LT},{id:"basic",label:"Basic",category:"Variations",component:ET},{id:"scrolling",label:"Scrolling",category:"Variations",component:qT},{id:"size",label:"Size",category:"Variations",component:jT}];return(a,o)=>(S(),C(lt,{title:"Segment",description:"A segment is used to create a grouping of related content","component-docs":t}))}},YT=`<template>
  <SuiBreadcrumb
    :sections="[
      { content: 'Home', link: true },
      { content: 'Store', link: true },
      { content: 'T-Shirt', active: true }
    ]"
    icon="right angle"
  />
</template>`,WT={__name:"BreadcrumbDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Breadcrumb",code:YT},{description:n(()=>[r(" A standard breadcrumb ")]),example:n(()=>[i(s(oi),{sections:[{content:"Home",link:!0},{content:"Store",link:!0},{content:"T-Shirt",active:!0}],icon:"right angle"})]),_:1}))}},KT=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection link>Registration</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Personal Information</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,XT={__name:"DividerDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Divider",code:KT},{description:n(()=>[r(" A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text. ")]),example:n(()=>[i(s(oi),null,{default:n(()=>[i(s(et),{link:""},{default:n(()=>[r("Home")]),_:1}),i(s($t),null,{default:n(()=>[r(" / ")]),_:1}),i(s(et),{link:""},{default:n(()=>[r("Registration")]),_:1}),i(s($t),null,{default:n(()=>[r(" / ")]),_:1}),i(s(et),{active:""},{default:n(()=>[r("Personal Information")]),_:1})]),_:1})]),_:1}))}},JT=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Search</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,QT={__name:"SectionDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Section",code:JT},{description:n(()=>[r(" A breadcrumb can contain sections that can either be formatted as a link or text ")]),example:n(()=>[i(s(oi),null,{default:n(()=>[i(s(et),{link:""},{default:n(()=>[r("Home")]),_:1}),i(s($t),null,{default:n(()=>[r(" / ")]),_:1}),i(s(et),{active:""},{default:n(()=>[r("Search")]),_:1})]),_:1})]),_:1}))}},ZT=$("a",{href:"#"},"paper towels",-1),eL=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Search for: <a href="#">paper towels</a></SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,tL={__name:"LinkDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Link",code:eL},{description:n(()=>[r(" A section may be linkable or contain a link ")]),example:n(()=>[i(s(oi),null,{default:n(()=>[i(s(et),{link:""},{default:n(()=>[r("Home")]),_:1}),i(s($t),null,{default:n(()=>[r(" / ")]),_:1}),i(s(et),{active:""},{default:n(()=>[r("Search for: "),ZT]),_:1})]),_:1})]),_:1}))}},iL=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Products</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Paper Towels</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,nL={__name:"ActiveDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Active",code:iL},{description:n(()=>[r(" A section can be active ")]),example:n(()=>[i(s(oi),null,{default:n(()=>[i(s(et),{link:""},{default:n(()=>[r("Products")]),_:1}),i(s($t),null,{default:n(()=>[r(" / ")]),_:1}),i(s(et),{active:""},{default:n(()=>[r("Paper Towels")]),_:1})]),_:1})]),_:1}))}},aL=$("br",null,null,-1),oL=`<template>
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
</template>`,lL={__name:"InvertedDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Inverted",code:oL},{description:n(()=>[r(" A breadcrumb can be inverted ")]),example:n(()=>[i(s(O),{inverted:""},{default:n(()=>[i(s(oi),{inverted:""},{default:n(()=>[i(s(et),{link:""},{default:n(()=>[r("Home")]),_:1}),i(s($t),null,{default:n(()=>[r(" / ")]),_:1}),i(s(et),{link:""},{default:n(()=>[r("Registration")]),_:1}),i(s($t),null,{default:n(()=>[r(" / ")]),_:1}),i(s(et),{active:""},{default:n(()=>[r("Personal Information")]),_:1})]),_:1}),aL,i(s(oi),{inverted:""},{default:n(()=>[i(s(et),null,{default:n(()=>[r("Home")]),_:1}),i(s($t),null,{default:n(()=>[r(" / ")]),_:1}),i(s(et),null,{default:n(()=>[r("Registration")]),_:1}),i(s($t),null,{default:n(()=>[r(" / ")]),_:1}),i(s(et),{active:""},{default:n(()=>[r("Personal Information")]),_:1})]),_:1})]),_:1})]),_:1}))}},rL=`<template>
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
</template>`,sL={__name:"SizeDoc",setup(e){const t=["mini","tiny","small","large","big","huge","massive"];return(a,o)=>(S(),C(I,{label:"Size",code:rL},{description:n(()=>[r(" A breadcrumb can vary in size ")]),example:n(()=>[(S(),we(ye,null,Qe(t,l=>(S(),we(ye,{key:l},[i(s(oi),{size:l},{default:n(()=>[i(s(et),{link:""},{default:n(()=>[r("Home")]),_:1}),i(s($t),null,{default:n(()=>[r(" / ")]),_:1}),i(s(et),{link:""},{default:n(()=>[r("Registration")]),_:1}),i(s($t),null,{default:n(()=>[r(" / ")]),_:1}),i(s(et),{active:""},{default:n(()=>[r("Personal Information")]),_:1})]),_:2},1032,["size"]),i(s(Fe),{hidden:""})],64))),64))]),_:1}))}},uL={__name:"Breadcrumb",setup(e){const t=[{id:"breadcrumb",label:"Breadcrumb",category:"Types",component:WT},{id:"divider",label:"Divider",category:"Content",component:XT},{id:"section",label:"Section",category:"Content",component:QT},{id:"link",label:"Link",category:"Content",component:tL},{id:"active",label:"Active",category:"States",component:nL},{id:"inverted",label:"Inverted",category:"Variations",component:lL},{id:"size",label:"Size",category:"Variations",component:sL}];return(a,o)=>(S(),C(lt,{title:"Breadcrumb",description:"A standard breadcrumb","component-docs":t}))}},cL=`<template>
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
</template>`,dL={__name:"FormDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Form",code:cL},{description:n(()=>[r(" A Form ")]),example:n(()=>[i(s(Ht),null,{default:n(()=>[i(s(it),{label:"First Name",placeholder:"First Name"}),i(s(it),{label:"Last Name",placeholder:"Last Name"}),i(s(it),null,{default:n(()=>[i(s(ad),{label:"I agree to the Terms and Conditions"})]),_:1}),i(s(P),{type:"submit"},{default:n(()=>[r("Submit")]),_:1})]),_:1})]),_:1}))}},mL=`<template>
  <SuiForm>
    <SuiFormField
      label="User Input"
    />
  </SuiForm>
</template>`,pL={__name:"FieldDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Field",code:mL},{description:n(()=>[r(" A field is a form element containing a label and an input ")]),example:n(()=>[i(s(Ht),null,{default:n(()=>[i(s(it),{label:"User Input"})]),_:1})]),_:1}))}},fL=`<template>
  <SuiForm>
    <SuiFormGroup>
      <SuiFormField label="First Name" />
      <SuiFormField label="Middle Name" />
      <SuiFormField label="Last Name" />
    </SuiFormGroup>
  </SuiForm>
</template>`,gL={__name:"FieldsDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Fields",code:fL},{description:n(()=>[r(" A set of fields can appear grouped together ")]),example:n(()=>[i(s(Ht),null,{default:n(()=>[i(s(hr),null,{default:n(()=>[i(s(it),{label:"First Name"}),i(s(it),{label:"Middle Name"}),i(s(it),{label:"Last Name"})]),_:1})]),_:1})]),_:1}))}},hL=`<template>
  <SuiForm>
    <SuiFormTextarea label="Text" />
    <SuiFormTextarea label="Short Text" :rows="2" />
  </SuiForm>
</template>`,_L={__name:"TextAreaDoc",setup(e){return(t,a)=>(S(),C(I,{label:"TextArea",code:hL},{description:n(()=>[r(" A textarea can be used to allow for extended user input. ")]),example:n(()=>[i(s(Ht),null,{default:n(()=>[i(s(Cl),{label:"Text"}),i(s(Cl),{label:"Short Text",rows:2})]),_:1})]),_:1}))}},vL=`<template>
  <SuiForm loading>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,bL={__name:"LoadingDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Loading",code:vL},{description:n(()=>[r(" If a form is in loading state, it will automatically show a loading indicator. ")]),example:n(()=>[i(s(Ht),{loading:""},{default:n(()=>[i(s(it),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),i(s(P),{type:"submit"},{default:n(()=>[r("Submit")]),_:1})]),_:1})]),_:1}))}},SL=`<template>
  <SuiForm success>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      success
      header='Form Completed'
      content="You're all signed up for the newsletter"
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,yL={__name:"SuccessDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Success",code:SL},{description:n(()=>[r(" If a form is in an success state, it will automatically show any success message blocks. ")]),example:n(()=>[i(s(Ht),{success:""},{default:n(()=>[i(s(it),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),i(s(Ao),{success:"",header:"Form Completed",content:"You're all signed up for the newsletter"}),i(s(P),{type:"submit"},{default:n(()=>[r("Submit")]),_:1})]),_:1})]),_:1}))}},wL=`<template>
  <SuiForm error>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      error
      header='Action Forbidden'
      content='You can only sign up for an account once with a given e-mail address.'
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,CL={__name:"ErrorDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Error",code:wL},{description:n(()=>[r(" If a form is in an error state, it will automatically show any error message blocks. ")]),example:n(()=>[i(s(Ht),{error:""},{default:n(()=>[i(s(it),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),i(s(Ao),{error:"",header:"Action Forbidden",content:"You can only sign up for an account once with a given e-mail address."}),i(s(P),{type:"submit"},{default:n(()=>[r("Submit")]),_:1})]),_:1})]),_:1}))}},xL=`<template>
  <SuiForm warning>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      warning
      header='Could you check something!'
      content='That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.'
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,AL={__name:"WarningDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Warning",code:xL},{description:n(()=>[r(" If a form is in warning state, it will automatically show any warning message block. ")]),example:n(()=>[i(s(Ht),{warning:""},{default:n(()=>[i(s(it),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),i(s(Ao),{warning:"",header:"Could you check something!",content:"That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail."}),i(s(P),{type:"submit"},{default:n(()=>[r("Submit")]),_:1})]),_:1})]),_:1}))}},kL=`<template>
  <SuiForm>
    <SuiFormGroup>
      <SuiFormField disabled label="First name" placeholder="Read only" />
      <SuiFormField disabled label="Last name" placeholder="Disabled" />
    </SuiFormGroup>
  </SuiForm>
</template>`,BL={__name:"DisabledDoc",setup(e){return(t,a)=>(S(),C(I,{label:"Disabled",code:kL},{description:n(()=>[r(" Individual fields may be disabled ")]),example:n(()=>[i(s(Ht),null,{default:n(()=>[i(s(hr),null,{default:n(()=>[i(s(it),{disabled:"",label:"First name",placeholder:"Read only"}),i(s(it),{disabled:"",label:"Last name",placeholder:"Disabled"})]),_:1})]),_:1})]),_:1}))}},$L={__name:"Form",setup(e){const t=[{id:"form",label:"Form",category:"Types",component:dL},{id:"field",label:"Field",category:"Content",component:pL},{id:"fields",label:"Fields",category:"Content",component:gL},{id:"textarea",label:"TextArea",category:"Content",component:_L},{id:"loading",label:"Loading",category:"Form States",component:bL},{id:"success",label:"Success",category:"Form States",component:yL},{id:"error",label:"Error",category:"Form States",component:CL},{id:"warning",label:"Warning",category:"Form States",component:AL},{id:"disabled",label:"Disabled",category:"Field States",component:BL}];return(a,o)=>(S(),C(lt,{title:"Form",description:"A form displays a set of related user input fields in a structured way","component-docs":t}))}},TL=F({name:"DocPageHeader",props:{title:String,sub:String}}),LL={class:"intro",style:{padding:"2rem"}};function IL(e,t,a,o,l,u){const c=T("sui-header-subheader"),m=T("sui-header"),d=T("sui-divider"),p=T("sui-icon"),f=T("sui-menu-item"),h=T("sui-menu"),_=T("sui-container"),A=T("sui-segment");return S(),C(A,{vertical:""},{default:n(()=>[i(_,{class:"main"},{default:n(()=>[$("div",LL,[i(m,{as:"h1"},{default:n(()=>[r($e(e.title)+" ",1),i(c,null,{default:n(()=>[r($e(e.sub),1)]),_:1})]),_:1}),i(d,{hidden:""}),i(h,{floated:"right"},{default:n(()=>[i(f,{as:"a",icon:""},{default:n(()=>[i(p,{name:"edit"})]),_:1}),i(f,{as:"a",icon:""},{default:n(()=>[i(p,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1})}const Gt=Ye(TL,[["render",IL]]),Te="/vue-fomantic-ui/images/wireframe/image.png",ei="/vue-fomantic-ui/images/wireframe/media-paragraph.png",Oe="/vue-fomantic-ui/images/wireframe/paragraph.png",Gs="/vue-fomantic-ui/images/wireframe/centered-paragraph.png",DL=F({name:"GridDoc",components:{DocPageHeader:Gt,DocExample:Et},setup(){return{numbers:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],gridCode:`<sui-grid>
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
</sui-grid>`}}}),EL=$("br",null,null,-1);function RL(e,t,a,o,l,u){const c=T("doc-page-header"),m=T("sui-header"),d=T("sui-image"),p=T("sui-grid-column"),f=T("sui-grid"),h=T("doc-example"),_=T("sui-grid-row"),A=T("sui-segment"),w=T("sui-divider"),B=T("sui-menu-item"),L=T("sui-menu"),R=T("sui-container");return S(),we("div",null,[i(c,{title:"Grid",sub:"A grid is used to harmonize negative space in a layout"}),i(R,{class:"main"},{default:n(()=>[i(m,{as:"h2",dividing:""},{default:n(()=>[r("Types")]),_:1}),i(h,{title:"Grid",description:"A basic grid",code:e.gridCode},{default:n(()=>[i(f,null,{default:n(()=>[(S(!0),we(ye,null,Qe(e.numbers,g=>(S(),C(p,{key:g},{default:n(()=>[i(d,{src:Te})]),_:2},1024))),128))]),_:1})]),_:1},8,["code"]),i(h,{title:"Divided",description:"A grid can have dividers between its columns",code:e.dividedCode},{default:n(()=>[i(f,{columns:3,divided:""},{default:n(()=>[i(_,null,{default:n(()=>[i(p,null,{default:n(()=>[i(d,{src:ei})]),_:1}),i(p,null,{default:n(()=>[i(d,{src:ei})]),_:1}),i(p,null,{default:n(()=>[i(d,{src:ei})]),_:1})]),_:1}),i(_,null,{default:n(()=>[i(p,null,{default:n(()=>[i(d,{src:ei})]),_:1}),i(p,null,{default:n(()=>[i(d,{src:ei})]),_:1}),i(p,null,{default:n(()=>[i(d,{src:ei})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Vertical Divided",description:"A grid can have dividers between rows",code:e.verticalDividedCode},{default:n(()=>[i(f,{divided:"vertically"},{default:n(()=>[i(_,{columns:2},{default:n(()=>[i(p,null,{default:n(()=>[i(d,{src:Oe})]),_:1}),i(p,null,{default:n(()=>[i(d,{src:Oe})]),_:1})]),_:1}),i(_,{columns:3},{default:n(()=>[i(p,null,{default:n(()=>[i(d,{src:Oe})]),_:1}),i(p,null,{default:n(()=>[i(d,{src:Oe})]),_:1}),i(p,null,{default:n(()=>[i(d,{src:Oe})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Celled",description:"A grid can have rows divided into cells",code:e.celledCode},{default:n(()=>[i(f,{celled:""},{default:n(()=>[i(_,null,{default:n(()=>[i(p,{width:3},{default:n(()=>[i(d,{src:Te})]),_:1}),i(p,{width:13},{default:n(()=>[i(d,{src:Gs})]),_:1})]),_:1}),i(_,null,{default:n(()=>[i(p,{width:3},{default:n(()=>[i(d,{src:Te})]),_:1}),i(p,{width:10},{default:n(()=>[i(d,{src:Oe})]),_:1}),i(p,{width:3},{default:n(()=>[i(d,{src:Te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Internally Celled",description:"A grid can have rows divisions only between internal rows",code:e.internallyCelledCode},{default:n(()=>[i(f,{celled:"internally"},{default:n(()=>[i(_,null,{default:n(()=>[i(p,{width:3},{default:n(()=>[i(d,{src:Te})]),_:1}),i(p,{width:13},{default:n(()=>[i(d,{src:Gs})]),_:1})]),_:1}),i(_,null,{default:n(()=>[i(p,{width:3},{default:n(()=>[i(d,{src:Te})]),_:1}),i(p,{width:10},{default:n(()=>[i(d,{src:Oe})]),_:1}),i(p,{width:3},{default:n(()=>[i(d,{src:Te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(m,{as:"h2",dividing:""},{default:n(()=>[r("Content")]),_:1}),i(h,{title:"Rows",description:"A row is a horizontal grouping of columns",code:e.rowsCode},{default:n(()=>[i(f,{columns:3},{default:n(()=>[i(_,null,{default:n(()=>[i(p,null,{default:n(()=>[i(d,{src:Oe})]),_:1}),i(p,null,{default:n(()=>[i(d,{src:Oe})]),_:1})]),_:1}),i(_,null,{default:n(()=>[i(p,null,{default:n(()=>[i(d,{src:Oe})]),_:1}),i(p,null,{default:n(()=>[i(d,{src:Oe})]),_:1}),i(p,null,{default:n(()=>[i(d,{src:Oe})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Columns",description:"Columns each contain gutters giving them equal spacing from other columns",code:e.columnsCode},{default:n(()=>[i(f,null,{default:n(()=>[i(p,{width:8},{default:n(()=>[i(d,{src:Oe})]),_:1}),i(p,{width:8},{default:n(()=>[i(d,{src:Oe})]),_:1}),i(p,{width:8},{default:n(()=>[i(d,{src:Oe})]),_:1}),i(p,{width:8},{default:n(()=>[i(d,{src:Oe})]),_:1})]),_:1})]),_:1},8,["code"]),i(m,{as:"h2",dividing:""},{default:n(()=>[r("Variations")]),_:1}),i(h,{title:"Floated",description:"A column can sit flush against the left or right edge of a row",code:e.floatedCode},{default:n(()=>[i(f,null,{default:n(()=>[i(p,{floated:"left",width:5},{default:n(()=>[i(d,{src:Oe})]),_:1}),i(p,{floated:"right",width:5},{default:n(()=>[i(d,{src:Oe})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Column Width",description:"A column can vary in width taking up more than a single grid column",code:e.columnWidthCode},{default:n(()=>[i(f,null,{default:n(()=>[i(p,{width:4},{default:n(()=>[i(d,{src:Te})]),_:1}),i(p,{width:9},{default:n(()=>[i(d,{src:Oe})]),_:1}),i(p,{width:3},{default:n(()=>[i(d,{src:ei})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Column Count",description:"A grid can have a different number of columns per row",code:e.columnCountCode},{default:n(()=>[i(f,null,{default:n(()=>[i(_,{columns:3},{default:n(()=>[i(p,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(p,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(p,null,{default:n(()=>[i(d,{src:Te})]),_:1})]),_:1}),i(_,{columns:4},{default:n(()=>[i(p,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(p,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(p,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(p,null,{default:n(()=>[i(d,{src:Te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Equal Width",description:"Equal Width",code:e.equalWidthCode},{default:n(()=>[i(f,{columns:"equal"},{default:n(()=>[i(p,null,{default:n(()=>[i(A,null,{default:n(()=>[r("1")]),_:1})]),_:1}),i(p,{width:8},{default:n(()=>[i(A,null,{default:n(()=>[r("2")]),_:1})]),_:1}),i(p,null,{default:n(()=>[i(A,null,{default:n(()=>[r("3")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Stretched",description:"A row can stretch its contents to take up the entire column height",code:e.stretchedCode},{default:n(()=>[i(f,{columns:3,divided:""},{default:n(()=>[i(_,{stretched:""},{default:n(()=>[i(p,null,{default:n(()=>[i(A,null,{default:n(()=>[r("1")]),_:1})]),_:1}),i(p,null,{default:n(()=>[i(A,null,{default:n(()=>[r("1")]),_:1}),i(A,null,{default:n(()=>[r("2")]),_:1})]),_:1}),i(p,null,{default:n(()=>[i(A,null,{default:n(()=>[r("1")]),_:1}),i(A,null,{default:n(()=>[r("2")]),_:1}),i(A,null,{default:n(()=>[r("3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Padded",description:"A grid can preserve its vertical and horizontal gutters on first and last columns",code:e.paddedCode},{default:n(()=>[$("div",null,[i(w),i(f,{padded:"",columns:2},{default:n(()=>[i(p,null,{default:n(()=>[i(d,{src:Oe})]),_:1}),i(p,null,{default:n(()=>[i(d,{src:Oe})]),_:1})]),_:1})])]),_:1},8,["code"]),i(h,{title:"Relaxed",description:"A grid can increase its gutters to allow for more negative space",code:e.relaxedCode},{default:n(()=>[i(f,{relaxed:"",columns:4},{default:n(()=>[i(p,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(p,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(p,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(p,null,{default:n(()=>[i(d,{src:Te})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Colored",description:"A row or column can be colored",code:e.coloredCode},{default:n(()=>[i(f,{padded:"",columns:5},{default:n(()=>[i(p,{color:"red"},{default:n(()=>[r("Red")]),_:1}),i(p,{color:"orange"},{default:n(()=>[r("Orange")]),_:1}),i(p,{color:"yellow"},{default:n(()=>[r("Yellow")]),_:1}),i(p,{color:"olive"},{default:n(()=>[r("Olive")]),_:1}),i(p,{color:"green"},{default:n(()=>[r("Green")]),_:1}),i(p,{color:"teal"},{default:n(()=>[r("Teal")]),_:1}),i(p,{color:"blue"},{default:n(()=>[r("Blue")]),_:1}),i(p,{color:"violet"},{default:n(()=>[r("Violet")]),_:1}),i(p,{color:"purple"},{default:n(()=>[r("Purple")]),_:1}),i(p,{color:"pink"},{default:n(()=>[r("Pink")]),_:1}),i(p,{color:"brown"},{default:n(()=>[r("Brown")]),_:1}),i(p,{color:"grey"},{default:n(()=>[r("Grey")]),_:1}),i(p,{color:"black"},{default:n(()=>[r("Black")]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Centered",description:"A grid can have its columns centered",code:e.centeredCode},{default:n(()=>[i(f,{centered:"",columns:2},{default:n(()=>[i(p,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(_,{centered:"",columns:4},{default:n(()=>[i(p,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(p,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(p,null,{default:n(()=>[i(d,{src:Te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Text Alignment",description:"A grid, row, or column can specify its text alignment",code:e.textAlignCode},{default:n(()=>[i(f,{textAlign:"center",columns:3},{default:n(()=>[i(_,null,{default:n(()=>[i(p,null,{default:n(()=>[i(L,{vertical:"",fluid:""},{default:n(()=>[i(B,{header:""},{default:n(()=>[r("Cats")]),_:1})]),_:1})]),_:1}),i(p,null,{default:n(()=>[i(L,{vertical:"",fluid:""},{default:n(()=>[i(B,{header:""},{default:n(()=>[r("Dogs")]),_:1}),i(B,null,{default:n(()=>[r("Poodle")]),_:1}),i(B,null,{default:n(()=>[r("Cockerspaniel")]),_:1})]),_:1})]),_:1}),i(p,null,{default:n(()=>[i(L,{vertical:"",fluid:""},{default:n(()=>[i(B,{header:""},{default:n(()=>[r("Monkeys")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Vertical Alignment",description:"A grid, row, or column can specify its vertical alignment to have all its columns vertically centered",code:e.verticalAlignCode},{default:n(()=>[i(f,{verticalAlign:"middle",columns:4,centered:""},{default:n(()=>[i(_,null,{default:n(()=>[i(p,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(p,null,{default:n(()=>[i(d,{src:Te}),EL,i(d,{src:Te})]),_:1}),i(p,null,{default:n(()=>[i(d,{src:Te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(m,{as:"h2",dividing:""},{default:n(()=>[r("Responsive Variations")]),_:1}),i(h,{title:"Doubling",description:"A grid can double its column width on tablet and mobile sizes",code:e.doublingCode},{default:n(()=>[i(f,{doubling:"",columns:5},{default:n(()=>[i(p,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(p,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(p,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(p,null,{default:n(()=>[i(d,{src:Te})]),_:1}),i(p,null,{default:n(()=>[i(d,{src:Te})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"stackable",description:"A grid can have its columns stack on-top of each other after reaching mobile breakpoints",code:e.stackableCode},{default:n(()=>[i(f,{stackable:"",columns:2},{default:n(()=>[i(p,null,{default:n(()=>[i(A,null,{default:n(()=>[i(d,{src:Oe})]),_:1})]),_:1}),i(p,null,{default:n(()=>[i(A,null,{default:n(()=>[i(d,{src:Oe})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Reversed",description:"A grid or row can specify that its columns should reverse order at different device sizes",code:e.reversedCode},{default:n(()=>[i(f,{reversed:"computer vertically"},{default:n(()=>[i(_,null,{default:n(()=>[i(p,null,{default:n(()=>[r("Computer Row 3")]),_:1})]),_:1}),i(_,null,{default:n(()=>[i(p,null,{default:n(()=>[r("Computer Row 2")]),_:1})]),_:1}),i(_,null,{default:n(()=>[i(p,null,{default:n(()=>[r("Computer Row 1")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Device Visibility",description:"A columns or row can appear only for a specific device, or screen sizes",code:e.deviceVisibilityCode},{default:n(()=>[i(f,null,{default:n(()=>[i(_,{only:"large screen",columns:2},{default:n(()=>[i(p,null,{default:n(()=>[i(A,null,{default:n(()=>[r("Large Screen")]),_:1})]),_:1}),i(p,null,{default:n(()=>[i(A,null,{default:n(()=>[r("Large Screen")]),_:1})]),_:1})]),_:1}),i(_,{only:"widescreen",columns:2},{default:n(()=>[i(p,null,{default:n(()=>[i(A,null,{default:n(()=>[r("Widescreen")]),_:1})]),_:1}),i(p,null,{default:n(()=>[i(A,null,{default:n(()=>[r("Widescreen")]),_:1})]),_:1})]),_:1}),i(_,{only:"mobile",columns:2},{default:n(()=>[i(p,null,{default:n(()=>[i(A,null,{default:n(()=>[r("Mobile")]),_:1})]),_:1}),i(p,null,{default:n(()=>[i(A,null,{default:n(()=>[r("Mobile")]),_:1})]),_:1})]),_:1}),i(_,{columns:3},{default:n(()=>[i(p,{only:"computer"},{default:n(()=>[i(A,null,{default:n(()=>[r("Computer")]),_:1})]),_:1}),i(p,{only:"mobile"},{default:n(()=>[i(A,null,{default:n(()=>[r("Tablet and Mobile")]),_:1})]),_:1}),i(p,null,{default:n(()=>[i(A,null,{default:n(()=>[r("All Sizes")]),_:1})]),_:1}),i(p,null,{default:n(()=>[i(A,null,{default:n(()=>[r("All Sizes")]),_:1})]),_:1})]),_:1}),i(_,{only:"computer",columns:4},{default:n(()=>[i(p,null,{default:n(()=>[i(A,null,{default:n(()=>[r("Computer")]),_:1})]),_:1}),i(p,null,{default:n(()=>[i(A,null,{default:n(()=>[r("Computer")]),_:1})]),_:1}),i(p,null,{default:n(()=>[i(A,null,{default:n(()=>[r("Computer")]),_:1})]),_:1}),i(p,null,{default:n(()=>[i(A,null,{default:n(()=>[r("Computer")]),_:1})]),_:1})]),_:1}),i(_,{only:"tablet",columns:3},{default:n(()=>[i(p,null,{default:n(()=>[i(A,null,{default:n(()=>[r("Tablet")]),_:1})]),_:1}),i(p,null,{default:n(()=>[i(A,null,{default:n(()=>[r("Tablet")]),_:1})]),_:1}),i(p,null,{default:n(()=>[i(A,null,{default:n(()=>[r("Tablet")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(h,{title:"Responsive Width",description:"A column can specify a width for a specific device",code:e.responsiveWidthCode},{default:n(()=>[i(f,null,{default:n(()=>[i(p,{mobile:16,tablet:8,computer:4},{default:n(()=>[i(d,{src:Oe})]),_:1}),i(p,{mobile:16,tablet:8,computer:4},{default:n(()=>[i(d,{src:Oe})]),_:1}),i(p,{mobile:16,tablet:8,computer:4},{default:n(()=>[i(d,{src:Oe})]),_:1}),i(p,{mobile:16,tablet:8,computer:4},{default:n(()=>[i(d,{src:Oe})]),_:1}),i(p,{mobile:16,tablet:8,computer:4},{default:n(()=>[i(d,{src:Oe})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const PL=Ye(DL,[["render",RL]]),zL=F({name:"CalendarDoc",components:{DocPageHeader:Gt,DocExample:Et},setup(){return{calendar1:G(null),calendarCode:'<sui-calendar v-model="calendar1" placeholder="Date/Time" />'}}});function FL(e,t,a,o,l,u){const c=T("doc-page-header"),m=T("sui-header"),d=T("sui-calendar"),p=T("doc-example"),f=T("sui-container");return S(),we("div",null,[i(c,{title:"Calendar",sub:"A calendar allows users to select any date or time"}),i(f,{class:"main"},{default:n(()=>[i(m,{as:"h2",dividing:""},{default:n(()=>[r("Types")]),_:1}),i(p,{title:"Calendar",description:"A standard calendar",code:e.calendarCode},{default:n(()=>[i(d,{modelValue:e.calendar1,"onUpdate:modelValue":t[0]||(t[0]=h=>e.calendar1=h),placeholder:"Date/Time"},null,8,["modelValue"])]),_:1},8,["code"])]),_:1})])}const VL=Ye(zL,[["render",FL]]),ML=F({name:"PropertyListTable",props:{properties:Array}});function HL(e,t,a,o,l,u){const c=T("sui-table-header-cell"),m=T("sui-table-row"),d=T("sui-table-header"),p=T("sui-table-cell"),f=T("sui-table-body"),h=T("sui-table");return S(),C(h,{celled:""},{default:n(()=>[i(d,null,{default:n(()=>[i(m,null,{default:n(()=>[i(c,null,{default:n(()=>[r("Name")]),_:1}),i(c,null,{default:n(()=>[r("Type")]),_:1}),i(c,null,{default:n(()=>[r("Default")]),_:1}),i(c,null,{default:n(()=>[r("Description")]),_:1})]),_:1})]),_:1}),i(f,null,{default:n(()=>[(S(!0),we(ye,null,Qe(e.properties,_=>(S(),C(m,{key:_.name},{default:n(()=>[i(p,null,{default:n(()=>[r($e(_.name),1)]),_:2},1024),i(p,null,{default:n(()=>[r($e(_.type),1)]),_:2},1024),i(p,null,{default:n(()=>[r($e(_.default),1)]),_:2},1024),i(p,null,{default:n(()=>[r($e(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const ko=Ye(ML,[["render",HL]]),OL=F({name:"CheckboxDoc",components:{DocPageHeader:Gt,DocExample:Et,PropertyListTable:ko},setup(){const e=G(!1),t='<sui-checkbox label="Make my profile visible" v-model="checked" />',a=G([]),o=`<sui-checkbox label="Apple" value="Apple" v-model="selected"  />
<sui-checkbox label="Banana" value="Banana" v-model="selected"  />
<sui-checkbox label="Chocolate" value="Chocolate" v-model="selected"  />`,l=G(!1),u='<sui-checkbox toggle v-model="toggle" />',c=G(!1);return{checked:e,checkboxCode:t,selected:a,multipleCode:o,toggle:l,toggleCode:u,slider:c,sliderCode:'<sui-checkbox slider v-model="slider" />',properties:[{name:"label",type:"string",default:"null",description:"Label of the checkbox."},{name:"modelValue",type:"any",default:"null",description:"Value binding of the checkbox."},{name:"value",type:"any",default:"null",description:"Value of the checkbox."}],events:[{name:"change",description:"Callback to invoke when checkbox value is changed."},{name:"click",description:"Callback to invoke when checkbox is clicked."}]}}}),NL={class:"ui form"},qL={class:"grouped fields"},GL={class:"field"},jL={class:"field"},UL={class:"field"};function YL(e,t,a,o,l,u){const c=T("doc-page-header"),m=T("sui-header"),d=T("sui-checkbox"),p=T("doc-example"),f=T("property-list-table"),h=T("sui-table-header-cell"),_=T("sui-table-row"),A=T("sui-table-header"),w=T("sui-table-cell"),B=T("sui-table-body"),L=T("sui-table"),R=T("sui-container");return S(),we("div",null,[i(c,{title:"Checkbox",sub:"A checkbox allows a user to select a value from a small set of options, often binary"}),i(R,{class:"main"},{default:n(()=>[i(m,{as:"h2",dividing:""},{default:n(()=>[r("Types")]),_:1}),i(p,{title:"Checkbox",description:"A standard checkbox",code:e.checkboxCode},{default:n(()=>[i(d,{label:"Make my profile visible",modelValue:e.checked,"onUpdate:modelValue":t[0]||(t[0]=g=>e.checked=g)},null,8,["modelValue"])]),_:1},8,["code"]),i(p,{title:"Multiple",description:"Multiple mode is enabled by default, v-model property refers to an array to bind the selected values",code:e.multipleCode},{default:n(()=>[$("div",NL,[$("div",qL,[$("div",GL,[i(d,{label:"Apple",value:"Apple",modelValue:e.selected,"onUpdate:modelValue":t[1]||(t[1]=g=>e.selected=g)},null,8,["modelValue"])]),$("div",jL,[i(d,{label:"Banana",value:"Banana",modelValue:e.selected,"onUpdate:modelValue":t[2]||(t[2]=g=>e.selected=g)},null,8,["modelValue"])]),$("div",UL,[i(d,{label:"Chocolate",value:"Chocolate",modelValue:e.selected,"onUpdate:modelValue":t[3]||(t[3]=g=>e.selected=g)},null,8,["modelValue"])])])]),r(" selected : "+$e(e.selected),1)]),_:1},8,["code"]),i(p,{title:"Toggle",description:"A checkbox can toggle",code:e.toggleCode},{default:n(()=>[i(d,{toggle:"",modelValue:e.toggle,"onUpdate:modelValue":t[4]||(t[4]=g=>e.toggle=g)},null,8,["modelValue"])]),_:1},8,["code"]),i(p,{title:"Slider",description:"A checkbox can look like a slider",code:e.sliderCode},{default:n(()=>[i(d,{slider:"",modelValue:e.slider,"onUpdate:modelValue":t[5]||(t[5]=g=>e.slider=g)},null,8,["modelValue"])]),_:1},8,["code"]),i(m,{as:"h2",dividing:""},{default:n(()=>[r("Properties")]),_:1}),i(f,{properties:e.properties},null,8,["properties"]),i(m,{as:"h2",dividing:""},{default:n(()=>[r("Events")]),_:1}),i(L,{celled:""},{default:n(()=>[i(A,null,{default:n(()=>[i(_,null,{default:n(()=>[i(h,null,{default:n(()=>[r("Name")]),_:1}),i(h,null,{default:n(()=>[r("Description")]),_:1})]),_:1})]),_:1}),i(B,null,{default:n(()=>[(S(!0),we(ye,null,Qe(e.events,g=>(S(),C(_,{key:g.name},{default:n(()=>[i(w,null,{default:n(()=>[r($e(g.name),1)]),_:2},1024),i(w,null,{default:n(()=>[r($e(g.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const WL=Ye(OL,[["render",YL]]),KL=F({name:"DimmerDoc",components:{DocPageHeader:Gt,DocExample:Et},setup(){const e=`<sui-dimmer-dimmable>
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
</sui-dimmer-dimmable>`,a=G(!1);return{dimmerCode:e,contentDimmerCode:t,active:a,pageDimmerCode:`<div>
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
</div>`}}});function XL(e,t,a,o,l,u){const c=T("doc-page-header"),m=T("sui-header"),d=T("sui-image"),p=T("sui-image-group"),f=T("sui-dimmer"),h=T("sui-dimmer-dimmable"),_=T("doc-example"),A=T("sui-icon"),w=T("sui-button"),B=T("sui-header-subheader"),L=T("sui-container");return S(),we("div",null,[i(c,{title:"Dimmer",sub:"A dimmer hides distractions to focus attention on particular content"}),i(L,{class:"main"},{default:n(()=>[i(m,{as:"h2",dividing:""},{default:n(()=>[r("Types")]),_:1}),i(_,{title:"Dimmer",description:"A simple dimmer displays no content",code:e.dimmerCode},{default:n(()=>[i(h,null,{default:n(()=>[i(m,{as:"h3"},{default:n(()=>[r("Overlayable Section")]),_:1}),i(p,{size:"small"},{default:n(()=>[i(d,{src:Te}),i(d,{src:Te}),i(d,{src:Te})]),_:1}),i(d,{size:"medium",src:ei}),i(f,{active:""})]),_:1})]),_:1},8,["code"]),i(_,{title:"Content Dimmer",description:"A dimmer can display content",code:e.contentDimmerCode},{default:n(()=>[i(h,null,{default:n(()=>[i(m,{as:"h3"},{default:n(()=>[r("Overlayable Section")]),_:1}),i(p,{size:"small"},{default:n(()=>[i(d,{src:Te}),i(d,{src:Te}),i(d,{src:Te})]),_:1}),i(d,{size:"medium",src:ei}),i(f,{active:""},{default:n(()=>[i(m,{as:"h2",icon:"",inverted:""},{default:n(()=>[i(A,{name:"heart"}),r(" Dimmed Message! ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(_,{title:"Page Dimmer",description:"A dimmer can be formatted to be fixed to the page",code:e.pageDimmerCode},{default:n(()=>[$("div",null,[i(w,{labeled:"",icon:"",onClick:t[0]||(t[0]=R=>e.active=!0)},{default:n(()=>[i(A,{name:"plus"}),r(" Show ")]),_:1}),i(f,{active:e.active,page:"",onClick:t[1]||(t[1]=R=>e.active=!1)},{default:n(()=>[i(m,{as:"h2",icon:"",inverted:""},{default:n(()=>[i(A,{name:"heart"}),r(" Dimmed Message! "),i(B,null,{default:n(()=>[r("Dimmer sub-header")]),_:1})]),_:1})]),_:1},8,["active"])])]),_:1},8,["code"])]),_:1})])}const JL=Ye(KL,[["render",XL]]),QL=F({name:"DropdownDoc",components:{DocPageHeader:Gt,DocExample:Et},setup(){const e=`<sui-dropdown text="File">
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
</sui-dropdown>`,t=G(null),a=`<sui-dropdown
  selection
  placeholder="Pet"
  v-model="selected1"
  :options="['Cat', 'Dog', 'Bird', 'Rabbit', 'Squirrel', 'Horse']"
/>`,o=G(null),l=[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"},{value:"ad",flag:"ad",text:"Andorra"},{value:"ao",flag:"ao",text:"Angola"},{value:"ai",flag:"ai",text:"Anguilla"},{value:"ag",flag:"ag",text:"Antigua"},{value:"ar",flag:"ar",text:"Argentina"},{value:"am",flag:"am",text:"Armenia"},{value:"aw",flag:"aw",text:"Aruba"},{value:"au",flag:"au",text:"Australia"},{value:"at",flag:"at",text:"Austria"},{value:"az",flag:"az",text:"Azerbaijan"},{value:"bs",flag:"bs",text:"Bahamas"},{value:"bh",flag:"bh",text:"Bahrain"},{value:"bd",flag:"bd",text:"Bangladesh"},{value:"bb",flag:"bb",text:"Barbados"},{value:"by",flag:"by",text:"Belarus"},{value:"be",flag:"be",text:"Belgium"},{value:"bz",flag:"bz",text:"Belize"},{value:"bj",flag:"bj",text:"Benin"}],u=`<sui-dropdown
  search
  selection
  fluid
  v-model="selected2"
  :options="searchSelectionOptions"
  placeholder="Select Country"
/>`,c=G(null),m=["Arabic","Chinese","Danish","Dutch","English","French","German","Greek","Hungarian","Italian","Japanese","Korean","Lithuanian","Persian","Polish","Portuguese","Russian","Spanish","Swedish","Turkish","Vietnamese"],d=`<sui-dropdown
  clearable
  selection
  v-model="selected3"
  :options="clearableSelectionOptions"
  placeholder="Select Language"
/>`,p=G(null),f=`<sui-dropdown
  selection
  multiple
  fluid
  v-model="selected4"
  placeholder="Skills"
  :options="['Angular', 'CSS', 'Ember', 'HTML', 'Javascript', 'NodeJS']"
/>`,h=G(null),_=`<sui-dropdown
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
/>`,A=G(null),w=`<sui-dropdown
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
/>`,B=G(null),L=`<sui-dropdown
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
/>`,R=G({text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}});return{dropdownCode:e,selected1:t,selectionCode:a,selected2:o,searchSelectionOptions:l,searchSelectionCode:u,selected3:c,clearableSelectionOptions:m,clearableSelectionCode:d,selected4:p,multipleCode:f,selected5:h,multipleCode2:_,selected6:A,searchDropdownCode:w,selected7:B,searchInMenuCode:L,selected8:R,inlineCode:`<span>
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
</sui-button-group>`}}});function ZL(e,t,a,o,l,u){const c=T("doc-page-header"),m=T("sui-header"),d=T("sui-dropdown-item"),p=T("sui-divider"),f=T("sui-dropdown-menu"),h=T("sui-dropdown"),_=T("doc-example"),A=T("sui-button"),w=T("sui-button-group"),B=T("sui-container");return S(),we("div",null,[i(c,{title:"Dropdown",sub:"A dropdown allows a user to select a value from a series of options"}),i(B,{class:"main"},{default:n(()=>[i(m,{as:"h2",dividing:""},{default:n(()=>[r("Types")]),_:1}),i(_,{title:"Dropdown",description:"A dropdown",code:e.dropdownCode},{default:n(()=>[i(h,{text:"File"},{default:n(()=>[i(f,null,{default:n(()=>[i(d,{text:"New"}),i(d,{text:"Open...",description:"ctrl + o"}),i(d,{text:"Save as...",description:"ctrl + s"}),i(d,{text:"Rename",description:"ctrl + r"}),i(d,{text:"Make a copy"}),i(d,{icon:"folder",text:"Move to folder"}),i(d,{icon:"trash",text:"Move to trash"}),i(p),i(d,{text:"Download As..."}),i(d,{text:"Publish To Web"}),i(d,{text:"E-mail Collaborators"})]),_:1})]),_:1})]),_:1},8,["code"]),i(_,{title:"Selection",description:"A dropdown can be used to select between choices in a form",code:e.selectionCode},{default:n(()=>[i(h,{selection:"",placeholder:"Pet",modelValue:e.selected1,"onUpdate:modelValue":t[0]||(t[0]=L=>e.selected1=L),options:["Cat","Dog","Bird","Rabbit","Squirrel","Horse"]},null,8,["modelValue"])]),_:1},8,["code"]),i(_,{title:"Search Selection",description:"A selection dropdown can allow a user to search through a large list of choices",code:e.searchSelectionCode},{default:n(()=>[i(h,{search:"",selection:"",fluid:"",modelValue:e.selected2,"onUpdate:modelValue":t[1]||(t[1]=L=>e.selected2=L),options:e.searchSelectionOptions,placeholder:"Select Country"},null,8,["modelValue","options"])]),_:1},8,["code"]),i(_,{title:"Clearable Selection",description:"A clearable selection dropdown can allow a user to cancel to cancel a previous selection",code:e.clearableSelectionCode},{default:n(()=>[i(h,{clearable:"",selection:"",modelValue:e.selected3,"onUpdate:modelValue":t[2]||(t[2]=L=>e.selected3=L),options:e.clearableSelectionOptions,placeholder:"Select Language"},null,8,["modelValue","options"])]),_:1},8,["code"]),i(_,{title:"Multiple Selection",description:"A selection dropdown can allow multiple selections",code:e.multipleCode},{default:n(()=>[i(h,{selection:"",multiple:"",fluid:"",modelValue:e.selected4,"onUpdate:modelValue":t[3]||(t[3]=L=>e.selected4=L),placeholder:"Skills",options:["Angular","CSS","Ember","HTML","Javascript","NodeJS"]},null,8,["modelValue"])]),_:1},8,["code"]),i(_,{code:e.multipleCode2},{default:n(()=>[i(h,{selection:"",multiple:"",fluid:"",search:"",modelValue:e.selected5,"onUpdate:modelValue":t[4]||(t[4]=L=>e.selected5=L),placeholder:"Skills",options:[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"}]},null,8,["modelValue"])]),_:1},8,["code"]),i(_,{title:"Search Dropdown",description:"A dropdown can be searchable",code:e.searchDropdownCode},{default:n(()=>[i(h,{button:"",floating:"",labeled:"",search:"",icon:"world",modelValue:e.selected6,"onUpdate:modelValue":t[5]||(t[5]=L=>e.selected6=L),options:[{text:"Arabic",value:"Arabic"},{text:"Chinese",value:"Chinese"},{text:"Danish",value:"Danish"},{text:"Dutch",value:"Dutch"},{text:"English",value:"English"},{text:"French",value:"French"},{text:"German",value:"German"},{text:"Greek",value:"Greek"},{text:"Hungarian",value:"Hungarian"},{text:"Italian",value:"Italian"},{text:"Japanese",value:"Japanese"},{text:"Korean",value:"Korean"},{text:"Lithuanian",value:"Lithuanian"},{text:"Persian",value:"Persian"},{text:"Polish",value:"Polish"},{text:"Portuguese",value:"Portuguese"},{text:"Russian",value:"Russian"},{text:"Spanish",value:"Spanish"},{text:"Swedish",value:"Swedish"},{text:"Turkish",value:"Turkish"},{text:"Vietnamese",value:"Vietnamese"}],text:"Select Language"},null,8,["modelValue"])]),_:1},8,["code"]),i(_,{title:"Search In-Menu",description:"A dropdown can include a search prompt inside its menu",code:e.searchInMenuCode},{default:n(()=>[i(h,{text:"Filter Posts",icon:"filter",floating:"",labeled:"",button:"",searchInMenu:"",modelValue:e.selected7,"onUpdate:modelValue":t[6]||(t[6]=L=>e.selected7=L),options:[{text:"Important",value:"Important",label:{color:"red",empty:!0,circular:!0}},{text:"Announcement",value:"Announcement",label:{color:"blue",empty:!0,circular:!0}},{text:"Cannot Fix",value:"Cannot Fix",label:{color:"black",empty:!0,circular:!0}},{text:"News",value:"News",label:{color:"purple",empty:!0,circular:!0}},{text:"Enhancement",value:"Enhancement",label:{color:"orange",empty:!0,circular:!0}},{text:"Change Declined",value:"Change Declined",label:{empty:!0,circular:!0}},{text:"Off Topic",value:"Off Topic",label:{color:"yellow",empty:!0,circular:!0}},{text:"Interesting",value:"Interesting",label:{color:"pink",empty:!0,circular:!0}},{text:"Discussion",value:"Discussion",label:{color:"green",empty:!0,circular:!0}}]},null,8,["modelValue"])]),_:1},8,["code"]),i(_,{title:"Inline",description:"A dropdown can be formatted to appear inline in other content",code:e.inlineCode},{default:n(()=>[$("span",null,[r(" Show me posts by "),i(h,{inline:"",modelValue:e.selected8,"onUpdate:modelValue":t[7]||(t[7]=L=>e.selected8=L),options:[{text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}},{text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/images/avatar/small/elliot.jpg"}},{text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/images/avatar/small/stevie.jpg"}},{text:"Christian",value:"Christian",image:{avatar:!0,src:"/images/avatar/small/christian.jpg"}}]},null,8,["modelValue","options"])])]),_:1},8,["code"]),i(_,{title:"Pointing",description:"A dropdown can be formatted so that its menu is pointing",code:e.pointingCode},{default:n(()=>[i(h,{icon:"wrench",button:"",pointing:"top left"},{default:n(()=>[i(f,null,{default:n(()=>[i(d,{text:"New"}),i(d,{text:"Save As"}),i(d,{text:"Edit"})]),_:1})]),_:1})]),_:1},8,["code"]),i(_,{title:"Floating",description:"A dropdown menu can appear to be floating below an element",code:e.floatingCode},{default:n(()=>[i(w,{color:"teal"},{default:n(()=>[i(A,null,{default:n(()=>[r("Save")]),_:1}),i(h,{floating:"",button:"",icon:"dropdown"},{default:n(()=>[i(f,null,{default:n(()=>[i(d,{text:"Edit Post",icon:"edit"}),i(d,{text:"Remove Post",icon:"delete"}),i(d,{text:"Hide Post",icon:"hide"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const eI=Ye(QL,[["render",ZL]]),tI=F({name:"EmbedDoc",components:{DocPageHeader:Gt,DocExample:Et},setup(){return{youtubeCode:`<sui-embed
  id="O6Xo21L0ybE"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`,aspectRatioCode:`<sui-embed
  aspectRatio="4:3"
  id="HTZudKi36bo"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`}}});function iI(e,t,a,o,l,u){const c=T("doc-page-header"),m=T("sui-header"),d=T("sui-embed"),p=T("doc-example"),f=T("sui-container");return S(),we("div",null,[i(c,{title:"Embed",sub:"An embed displays content from other websites like YouTube videos or Google Maps"}),i(f,{class:"main"},{default:n(()=>[i(m,{as:"h2",dividing:""},{default:n(()=>[r("Types")]),_:1}),i(p,{title:"YouTube",description:"An embed can be used to display YouTube Content",code:e.youtubeCode},{default:n(()=>[i(d,{id:"O6Xo21L0ybE",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"]),i(m,{as:"h2",dividing:""},{default:n(()=>[r("Variations")]),_:1}),i(p,{title:"Aspect Ratio",description:"An embed can specify an alternative aspect ratio",code:e.aspectRatioCode},{default:n(()=>[i(d,{aspectRatio:"4:3",id:"HTZudKi36bo",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"])]),_:1})])}const nI=Ye(tI,[["render",iI]]),aI=$("p",null," We've found the following gravatar image associated with your e-mail address. ",-1),oI=$("p",null,"Is it okay to use this photo?",-1),lI=`<template>
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
<\/script>`,rI={__name:"ModalDoc",setup(e){const t=G(!1);return(a,o)=>(S(),C(I,{label:"Modal",code:lI},{description:n(()=>[r(" A standard modal ")]),example:n(()=>[i(s(P),{onClick:o[0]||(o[0]=l=>t.value=!0)},{default:n(()=>[r("Show Modal")]),_:1}),i(s(vr),{modelValue:t.value,"onUpdate:modelValue":o[2]||(o[2]=l=>t.value=l)},{default:n(()=>[i(s(yr),null,{default:n(()=>[r("Select a Photo")]),_:1}),i(s(Sr),{image:""},{default:n(()=>[i(s(le),{wrapped:"",size:"medium",src:"/vue-fomantic-ui/images/avatar/large/rachel.png"}),i(s(gd),null,{default:n(()=>[i(s(fe),null,{default:n(()=>[r("Default Profile Image")]),_:1}),aI,oI]),_:1})]),_:1}),i(s(br),null,{default:n(()=>[i(s(P),{positive:"",onClick:o[1]||(o[1]=l=>t.value=!1)},{default:n(()=>[r("OK")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},sI=$("p",null," Your inbox is getting full, would you like us to enable automatic archiving of old messages? ",-1),uI=`<template>
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
<\/script>`,cI={__name:"BasicDoc",setup(e){const t=G(!1);return(a,o)=>(S(),C(I,{label:"Basic",code:uI},{description:n(()=>[r(" A modal can reduce its complexity ")]),example:n(()=>[i(s(P),{onClick:o[0]||(o[0]=l=>t.value=!0)},{default:n(()=>[r("Basic Modal")]),_:1}),i(s(vr),{basic:"",modelValue:t.value,"onUpdate:modelValue":o[2]||(o[2]=l=>t.value=l)},{default:n(()=>[i(s(yr),{icon:""},{default:n(()=>[i(s(W),{name:"archive"}),r(" Archive Old Messages")]),_:1}),i(s(Sr),null,{default:n(()=>[sI]),_:1}),i(s(br),null,{default:n(()=>[i(s(P),{basic:"",color:"red",inverted:"",icon:"remove",content:"No",onClick:o[1]||(o[1]=l=>t.value=!1)}),i(s(P),{basic:"",color:"green",icon:"checkmark",content:"Yes"})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},dI={__name:"Modal",setup(e){const t=[{id:"modal",label:"Modal",category:"Types",component:rI},{id:"basic",label:"Basic",category:"Types",component:cI}];return(a,o)=>(S(),C(lt,{title:"Modal",description:"A modal displays content that temporarily blocks interactions with the main view of a site","component-docs":t}))}},mI="/vue-fomantic-ui/images/movies/totoro-horizontal.jpg",pI=F({name:"PopupDoc",components:{DocPageHeader:Gt,DocExample:Et},setup(){const e=G(null),t=`<sui-button icon ref="trigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup :trigger="trigger">
  Add users to your feed
</sui-popup>`,a=G(null),o=G(null),l=G(null),u=`<sui-image avatar src="/images/avatar/small/elliot.jpg" ref="titledTrigger1" />
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
/>`,c=G(null),m=`<sui-card ref="triggerTriger">
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
</sui-popup>`,d=G(null),p=`<sui-button icon ref="basicTrigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup
  :trigger="basicTrigger"
  basic
  content="The default theme's basic popup removes the pointing arrow."
/>`,f=G(null),h=G(null),_=G(null),A=`<sui-icon name="heart" circular ref="wideTrigger1" />
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
</sui-popup>`,w=G(null),B=G(null),L=G(null),R=G(null),g=G(null),b=G(null),y=G(null),x=G(null),D=`<sui-button ref="positionTrigger1">Top Left</sui-button>
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
<sui-popup :trigger="positionTrigger8" position="left center" content="I am positioned to the left center" />`,V=G(null),H=`<sui-button ref="flowingTrigger">Show Flowing Popup</sui-button>
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
</sui-popup>`,z=G(null),j=G(null),J=G(null),Y=G(null),me=G(null),Ae=`<sui-icon name="heart" circular link ref="sizeTrigger1" />
<sui-icon name="heart" circular link ref="sizeTrigger2" />
<sui-icon name="heart" circular link ref="sizeTrigger3" />
<sui-icon name="heart" circular link ref="sizeTrigger4" />
<sui-icon name="heart" circular link ref="sizeTrigger5" />

<sui-popup size="mini" content="Hello. This is a mini popup" :trigger="sizeTrigger1" />
<sui-popup size="tiny" content="Hello. This is a tiny popup" :trigger="sizeTrigger2" />
<sui-popup size="small" content="Hello. This is a small popup" :trigger="sizeTrigger3" />
<sui-popup size="large" content="Hello. This is a large popup" :trigger="sizeTrigger4" />
<sui-popup size="huge" content="Hello. This is a huge popup" :trigger="sizeTrigger5" />`,U=G(null),K=G(null);return{popupTrigger:e,popupCode:t,titledTrigger1:a,titledTrigger2:o,titledTrigger3:l,titledCode:u,triggerTriger:c,triggerCode:m,basicTrigger:d,basicCode:p,wideTrigger1:f,wideTrigger2:h,wideTrigger3:_,wideCode:A,positionTrigger1:w,positionTrigger2:B,positionTrigger3:L,positionTrigger4:R,positionTrigger5:g,positionTrigger6:b,positionTrigger7:y,positionTrigger8:x,positionCode:D,flowingTrigger:V,flowingCode:H,sizeTrigger1:z,sizeTrigger2:j,sizeTrigger3:J,sizeTrigger4:Y,sizeTrigger5:me,sizeCode:Ae,invertedTrigger1:U,invertedTrigger2:K,invertedCode:`<sui-icon name="heart" circular ref="invertedTrigger1" />
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
/>`}}}),fI=$("p",null,[$("b",null,"2"),r(" projects, $10 a month ")],-1),gI=$("p",null,[$("b",null,"5"),r(" projects, $20 a month ")],-1),hI=$("p",null,[$("b",null,"8"),r(" projects, $25 a month ")],-1);function _I(e,t,a,o,l,u){const c=T("doc-page-header"),m=T("sui-header"),d=T("sui-icon"),p=T("sui-button"),f=T("sui-popup"),h=T("doc-example"),_=T("sui-image"),A=T("sui-card-header"),w=T("sui-card-description"),B=T("sui-card-content"),L=T("sui-card"),R=T("sui-rating"),g=T("sui-divider"),b=T("sui-grid-column"),y=T("sui-grid"),x=T("sui-container");return S(),we("div",null,[i(c,{title:"Popup",sub:"A popup displays additional information on top of a page"}),i(x,{class:"main"},{default:n(()=>[i(m,{as:"h2",dividing:""},{default:n(()=>[r("Types")]),_:1}),i(h,{title:"Popup",description:"An element can specify popup content to appear",code:e.popupCode},{default:n(()=>[i(p,{icon:"",ref:"popupTrigger"},{default:n(()=>[i(d,{name:"add"})]),_:1},512),i(f,{trigger:e.popupTrigger},{default:n(()=>[r(" Add users to your feed ")]),_:1},8,["trigger"])]),_:1},8,["code"]),i(h,{title:"Titled",description:"An element can specify popup content with a title",code:e.titledCode},{default:n(()=>[i(_,{avatar:"",src:ma,ref:"titledTrigger1"},null,512),i(_,{avatar:"",src:Dl,ref:"titledTrigger2"},null,512),i(_,{avatar:"",src:Hd,ref:"titledTrigger3"},null,512),i(f,{trigger:e.titledTrigger1,header:"Elliot Fu",content:"Elliot has been a member since July 2012"},null,8,["trigger"]),i(f,{trigger:e.titledTrigger2,header:"Stevie Feliciano",content:"Stevie has been a member since August 2013"},null,8,["trigger"]),i(f,{trigger:e.titledTrigger3,header:"Matt",content:"Matt has been a member since July 2014"},null,8,["trigger"])]),_:1},8,["code"]),i(h,{title:"Trigger",description:"A trigger can be complex element",code:e.triggerCode},{default:n(()=>[i(L,{ref:"triggerTriger"},{default:n(()=>[i(_,{src:mI}),i(B,null,{default:n(()=>[i(A,null,{default:n(()=>[r("My Neighbor Totoro")]),_:1}),i(w,null,{default:n(()=>[r(" Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits. ")]),_:1})]),_:1})]),_:1},512),i(f,{trigger:e.triggerTriger,header:"User Rating"},{default:n(()=>[i(R,{icon:"star",defaultRating:3,maxRating:4})]),_:1},8,["trigger"])]),_:1},8,["code"]),i(m,{as:"h2",dividing:""},{default:n(()=>[r("Variations")]),_:1}),i(h,{title:"Basic",description:"A popup can provide more basic formatting",code:e.basicCode},{default:n(()=>[i(p,{icon:"",ref:"basicTrigger"},{default:n(()=>[i(d,{name:"add"})]),_:1},512),i(f,{trigger:e.basicTrigger,basic:"",content:"The default theme's basic popup removes the pointing arrow."},null,8,["trigger"])]),_:1},8,["code"]),i(h,{title:"Position",description:"A popup can be position around its trigger",code:e.positionCode},{default:n(()=>[i(p,{ref:"positionTrigger1"},{default:n(()=>[r("Top Left")]),_:1},512),i(p,{ref:"positionTrigger2"},{default:n(()=>[r("Top Center")]),_:1},512),i(p,{ref:"positionTrigger3"},{default:n(()=>[r("Top Right")]),_:1},512),i(g),i(p,{ref:"positionTrigger4"},{default:n(()=>[r("Bottom Left")]),_:1},512),i(p,{ref:"positionTrigger5"},{default:n(()=>[r("Bottom Center")]),_:1},512),i(p,{ref:"positionTrigger6"},{default:n(()=>[r("Bottom Right")]),_:1},512),i(g),i(p,{ref:"positionTrigger7"},{default:n(()=>[r("Right Center")]),_:1},512),i(p,{ref:"positionTrigger8"},{default:n(()=>[r("Left Center")]),_:1},512),i(f,{trigger:e.positionTrigger1,position:"top left",content:"I am positioned to the top left"},null,8,["trigger"]),i(f,{trigger:e.positionTrigger2,position:"top center",content:"I am positioned to the top center"},null,8,["trigger"]),i(f,{trigger:e.positionTrigger3,position:"top right",content:"I am positioned to the top right"},null,8,["trigger"]),i(f,{trigger:e.positionTrigger4,position:"bottom left",content:"I am positioned to the bottom left"},null,8,["trigger"]),i(f,{trigger:e.positionTrigger5,position:"bottom center",content:"I am positioned to the bottom center"},null,8,["trigger"]),i(f,{trigger:e.positionTrigger6,position:"bottom right",content:"I am positioned to the bottom right"},null,8,["trigger"]),i(f,{trigger:e.positionTrigger7,position:"right center",content:"I am positioned to the right center"},null,8,["trigger"]),i(f,{trigger:e.positionTrigger8,position:"left center",content:"I am positioned to the left center"},null,8,["trigger"])]),_:1},8,["code"]),i(h,{title:"Flowing",description:"A popup can have no maximum width and continue to flow to fit its content",code:e.flowingCode},{default:n(()=>[i(p,{ref:"flowingTrigger"},{default:n(()=>[r("Show Flowing Popup")]),_:1},512),i(f,{trigger:e.flowingTrigger,flowing:""},{default:n(()=>[i(y,{centered:"",divided:"",columns:3},{default:n(()=>[i(b,{textAlign:"center"},{default:n(()=>[i(m,{as:"h4"},{default:n(()=>[r("Basic Plan")]),_:1}),fI,i(p,null,{default:n(()=>[r("Choose")]),_:1})]),_:1}),i(b,{textAlign:"center"},{default:n(()=>[i(m,{as:"h4"},{default:n(()=>[r("Business Plan")]),_:1}),gI,i(p,null,{default:n(()=>[r("Choose")]),_:1})]),_:1}),i(b,{textAlign:"center"},{default:n(()=>[i(m,{as:"h4"},{default:n(()=>[r("Premium Plan")]),_:1}),hI,i(p,null,{default:n(()=>[r("Choose")]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])]),_:1},8,["code"]),i(h,{title:"Size",description:"A popup can vary in size",code:e.sizeCode},{default:n(()=>[i(d,{name:"heart",circular:"",link:"",ref:"sizeTrigger1"},null,512),i(d,{name:"heart",circular:"",link:"",ref:"sizeTrigger2"},null,512),i(d,{name:"heart",circular:"",link:"",ref:"sizeTrigger3"},null,512),i(d,{name:"heart",circular:"",link:"",ref:"sizeTrigger4"},null,512),i(d,{name:"heart",circular:"",link:"",ref:"sizeTrigger5"},null,512),i(f,{size:"mini",content:"Hello. This is a mini popup",trigger:e.sizeTrigger1},null,8,["trigger"]),i(f,{size:"tiny",content:"Hello. This is a tiny popup",trigger:e.sizeTrigger2},null,8,["trigger"]),i(f,{size:"small",content:"Hello. This is a small popup",trigger:e.sizeTrigger3},null,8,["trigger"]),i(f,{size:"large",content:"Hello. This is a large popup",trigger:e.sizeTrigger4},null,8,["trigger"]),i(f,{size:"huge",content:"Hello. This is a huge popup",trigger:e.sizeTrigger5},null,8,["trigger"])]),_:1},8,["code"]),i(h,{title:"Wide",description:"A popup can be extra wide to allow for longer content",code:e.wideCode},{default:n(()=>[i(d,{name:"heart",circular:"",ref:"wideTrigger1"},null,512),i(d,{name:"heart",circular:"",ref:"wideTrigger2"},null,512),i(d,{name:"heart",circular:"",ref:"wideTrigger3"},null,512),i(f,{trigger:e.wideTrigger1},{default:n(()=>[r(" Hello. This is a regular pop-up which does not allow for lots of content. You cannot fit a lot of words here as the paragraphs will be pretty narrow. ")]),_:1},8,["trigger"]),i(f,{trigger:e.wideTrigger2,wide:""},{default:n(()=>[r(" Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"]),i(f,{trigger:e.wideTrigger3,wide:"very"},{default:n(()=>[r(" Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"])]),_:1},8,["code"]),i(h,{title:"Inverted",description:"A popup can have its colors inverted",code:e.invertedCode},{default:n(()=>[i(d,{name:"heart",circular:"",ref:"invertedTrigger1"},null,512),i(p,{icon:"",ref:"invertedTrigger2"},{default:n(()=>[i(d,{name:"add"})]),_:1},512),i(f,{trigger:e.invertedTrigger1,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"]),i(f,{trigger:e.invertedTrigger2,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"])]),_:1},8,["code"])]),_:1})])}const vI=Ye(pI,[["render",_I]]),bI=F({name:"RatingDoc",components:{DocPageHeader:Gt,DocExample:Et,PropertyListTable:ko},setup(){return{ratingCode:'<sui-rating v-model="value" />',iconCode:`<sui-rating :defaultRating="2" :maxRating="4" color="yellow" />
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
<sui-rating size="massive" :defaultRating="3" :maxRating="4" color="yellow" />`,properties:[{name:"color",type:"string",default:"",description:"A rating can have different colors"},{name:"defaultRating",type:"number",default:0,description:"The initial value of rating."},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"icon",type:"string",default:"star",description:"A rating can use a set of specified icons."},{name:"maxRating",type:"number",default:1,description:"The total number of icons."},{name:"modelValue",type:"number",default:"null",description:"A value of rating."},{name:"size",type:"string",default:"",description:"A rating can have different sizes."}],events:[{name:"change",description:"Callback to invoke on value change."}]}}}),SI=$("br",null,null,-1),yI=$("br",null,null,-1),wI=$("br",null,null,-1),CI=$("br",null,null,-1),xI=$("br",null,null,-1),AI=$("br",null,null,-1),kI=$("br",null,null,-1),BI=$("br",null,null,-1),$I=$("br",null,null,-1),TI=$("br",null,null,-1),LI=$("br",null,null,-1),II=$("br",null,null,-1),DI=$("br",null,null,-1),EI=$("br",null,null,-1),RI=$("br",null,null,-1),PI=$("br",null,null,-1),zI=$("br",null,null,-1),FI=$("br",null,null,-1),VI=$("br",null,null,-1),MI=$("br",null,null,-1),HI=$("br",null,null,-1),OI=$("br",null,null,-1),NI=$("br",null,null,-1),qI=$("br",null,null,-1),GI=$("br",null,null,-1),jI=$("br",null,null,-1),UI=$("br",null,null,-1),YI=$("br",null,null,-1),WI=$("br",null,null,-1),KI=$("br",null,null,-1),XI=$("br",null,null,-1),JI=$("br",null,null,-1),QI=$("br",null,null,-1),ZI=$("br",null,null,-1),eD=$("br",null,null,-1),tD=$("br",null,null,-1),iD=$("br",null,null,-1),nD=$("br",null,null,-1),aD=$("br",null,null,-1),oD=$("br",null,null,-1),lD=$("br",null,null,-1),rD=$("br",null,null,-1),sD=$("br",null,null,-1),uD=$("br",null,null,-1),cD=$("br",null,null,-1),dD=$("br",null,null,-1),mD=$("br",null,null,-1),pD=$("br",null,null,-1);function fD(e,t,a,o,l,u){const c=T("doc-page-header"),m=T("sui-header"),d=T("sui-rating"),p=T("doc-example"),f=T("property-list-table"),h=T("sui-table-header-cell"),_=T("sui-table-row"),A=T("sui-table-header"),w=T("sui-table-cell"),B=T("sui-table-body"),L=T("sui-table"),R=T("sui-container");return S(),we("div",null,[i(c,{title:"Rating",sub:"A rating indicates user interest in content"}),i(R,{class:"main"},{default:n(()=>[i(m,{as:"h2",dividing:""},{default:n(()=>[r("Types")]),_:1}),i(p,{title:"Rating",description:"A Basic rating",code:e.ratingCode},{default:n(()=>[i(d)]),_:1},8,["code"]),i(p,{title:"Icon",description:"You can use any available icon as rating indicator",code:e.iconCode},{default:n(()=>[i(d,{defaultRating:2,maxRating:4,color:"yellow"}),SI,yI,i(d,{defaultRating:2,maxRating:4,icon:"heart",color:"red"}),wI,CI,i(d,{defaultRating:2,maxRating:4,icon:"female",color:"purple"}),xI,AI,i(d,{defaultRating:2,maxRating:4,icon:"male",color:"blue"}),kI,BI,i(d,{defaultRating:2,maxRating:4,icon:"cloud",color:"grey"}),$I,TI,i(d,{defaultRating:2,maxRating:4,icon:"cat",color:"pink"}),LI,II,i(d,{defaultRating:2,maxRating:4,icon:"circle",color:"orange"})]),_:1},8,["code"]),i(p,{title:"Color",description:"You can specify any color of the FUI color palette",code:e.colorCode},{default:n(()=>[i(d,{defaultRating:1,maxRating:7,color:"red"}),DI,EI,i(d,{defaultRating:2,maxRating:7,color:"orange"}),RI,PI,i(d,{defaultRating:3,maxRating:7,color:"yellow"}),zI,FI,i(d,{defaultRating:4,maxRating:7,color:"olive"}),VI,MI,i(d,{defaultRating:5,maxRating:7,color:"green"}),HI,OI,i(d,{defaultRating:6,maxRating:7,color:"teal"}),NI,qI,i(d,{defaultRating:6,maxRating:7,color:"blue"}),GI,jI,i(d,{defaultRating:5,maxRating:7,color:"violet"}),UI,YI,i(d,{defaultRating:4,maxRating:7,color:"purple"}),WI,KI,i(d,{defaultRating:3,maxRating:7,color:"pink"}),XI,JI,i(d,{defaultRating:2,maxRating:7,color:"brown"}),QI,ZI,i(d,{defaultRating:1,maxRating:7,color:"grey"}),eD,tD,i(d,{defaultRating:1,maxRating:7,color:"black"})]),_:1},8,["code"]),i(m,{as:"h2",dividing:""},{default:n(()=>[r("States")]),_:1}),i(p,{title:"Disabled",description:"A rating can be started in non-interactive mode by adding a disabled class",code:e.disabledCode},{default:n(()=>[i(d,{disabled:"",defaultRating:3,maxRating:5,color:"yellow"})]),_:1},8,["code"]),i(m,{as:"h2",dividing:""},{default:n(()=>[r("Variations")]),_:1}),i(p,{title:"Size",description:"A rating can vary in size",code:e.sizeCode},{default:n(()=>[i(d,{size:"mini",defaultRating:3,maxRating:4,color:"yellow"}),iD,nD,i(d,{size:"tiny",defaultRating:3,maxRating:4,color:"yellow"}),aD,oD,i(d,{size:"small",defaultRating:3,maxRating:4,color:"yellow"}),lD,rD,i(d,{defaultRating:3,maxRating:4,color:"yellow"}),sD,uD,i(d,{size:"large",defaultRating:3,maxRating:4,color:"yellow"}),cD,dD,i(d,{size:"huge",defaultRating:3,maxRating:4,color:"yellow"}),mD,pD,i(d,{size:"massive",defaultRating:3,maxRating:4,color:"yellow"})]),_:1},8,["code"]),i(m,{as:"h2",dividing:""},{default:n(()=>[r("Properties")]),_:1}),i(f,{properties:e.properties},null,8,["properties"]),i(m,{as:"h2",dividing:""},{default:n(()=>[r("Events")]),_:1}),i(L,{celled:""},{default:n(()=>[i(A,null,{default:n(()=>[i(_,null,{default:n(()=>[i(h,null,{default:n(()=>[r("Name")]),_:1}),i(h,null,{default:n(()=>[r("Description")]),_:1})]),_:1})]),_:1}),i(B,null,{default:n(()=>[(S(!0),we(ye,null,Qe(e.events,g=>(S(),C(_,{key:g.name},{default:n(()=>[i(w,null,{default:n(()=>[r($e(g.name),1)]),_:2},1024),i(w,null,{default:n(()=>[r($e(g.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const gD=Ye(bI,[["render",fD]]),hD=F({name:"SidebarDoc",components:{DocPageHeader:Gt,DocExample:Et,PropertyListTable:ko},setup(){return{visible1:G(!1),sidebarCode:`<sui-grid :columns="1">
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
</sui-grid>`,properties:[{name:"animation",type:"string",default:"overlay",description:"Specifies the animation of the sidebar."},{name:"dimmed",type:"boolean",default:"false",description:"When specified, display the dim inside pusher content."},{name:"direction",type:"string",default:"left",description:"Specifies the direction the sidebar should appear on."},{name:"visible",type:"boolean",default:"false",description:"Specifies the visibility of the sidebar."}],events:[{name:"hide",description:"Callback to invoke when sidebar hide."},{name:"show",description:"Callback to invoke when sidebar show."}]}}}),_D={class:"pusher"};function vD(e,t,a,o,l,u){const c=T("doc-page-header"),m=T("sui-header"),d=T("sui-icon"),p=T("sui-button"),f=T("sui-grid-column"),h=T("sui-menu-item"),_=T("sui-sidebar"),A=T("sui-image"),w=T("sui-segment"),B=T("sui-grid"),L=T("doc-example"),R=T("property-list-table"),g=T("sui-table-header-cell"),b=T("sui-table-row"),y=T("sui-table-header"),x=T("sui-table-cell"),D=T("sui-table-body"),V=T("sui-table"),H=T("sui-container");return S(),we("div",null,[i(c,{title:"Sidebar",sub:"A sidebar hides additional content beside a page"}),i(H,{class:"main"},{default:n(()=>[i(m,{as:"h2",dividing:""},{default:n(()=>[r("Types")]),_:1}),i(L,{title:"Sidebar",description:"A sidebar",code:e.sidebarCode},{default:n(()=>[i(B,{columns:1},{default:n(()=>[i(f,null,{default:n(()=>[i(p,{onClick:t[0]||(t[0]=z=>e.visible1=!e.visible1),icon:""},{default:n(()=>[i(d,{name:"arrow right"})]),_:1})]),_:1}),i(f,null,{default:n(()=>[i(w,{class:"pushable"},{default:n(()=>[i(_,{visible:e.visible1,"onUpdate:visible":t[1]||(t[1]=z=>e.visible1=z),dimmed:"",icon:"labeled",inverted:""},{default:n(()=>[i(h,null,{default:n(()=>[i(d,{name:"home"}),r(" Home ")]),_:1}),i(h,null,{default:n(()=>[i(d,{name:"gamepad"}),r(" Games ")]),_:1}),i(h,null,{default:n(()=>[i(d,{name:"camera"}),r(" Channels ")]),_:1})]),_:1},8,["visible"]),$("div",_D,[i(w,null,{default:n(()=>[i(m,{as:"h2"},{default:n(()=>[r("Main Header")]),_:1}),i(A,{src:Oe})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i(m,{as:"h2",dividing:""},{default:n(()=>[r("Properties")]),_:1}),i(R,{properties:e.properties},null,8,["properties"]),i(m,{as:"h2",dividing:""},{default:n(()=>[r("Events")]),_:1}),i(V,{celled:""},{default:n(()=>[i(y,null,{default:n(()=>[i(b,null,{default:n(()=>[i(g,null,{default:n(()=>[r("Name")]),_:1}),i(g,null,{default:n(()=>[r("Description")]),_:1})]),_:1})]),_:1}),i(D,null,{default:n(()=>[(S(!0),we(ye,null,Qe(e.events,z=>(S(),C(b,{key:z.name},{default:n(()=>[i(x,null,{default:n(()=>[r($e(z.name),1)]),_:2},1024),i(x,null,{default:n(()=>[r($e(z.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const bD=Ye(hD,[["render",vD]]),SD=F({name:"SliderDoc",components:{DocPageHeader:Gt,DocExample:Et},setup(){const e=G(5),t='<sui-slider v-model="slider1" />',a=G(4),o='<sui-slider labeled v-model="slider2" />',l=G(6),u='<sui-slider labeled="ticked" v-model="slider3" />',c=G(0),m=`<sui-slider
  v-model="slider4"
  labeled="ticked"
  :labels='["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ/ς", "τ", "υ", "φ"]'
  :max="20"
/>`,d=G(40),p='<sui-slider v-model="slider5" labeled :step="5" :max="120" :min="20" />',f=G([]);f.value.push(20,60);const h='<sui-slider v-model="slider6" range labeled="ticked" :min="5" :max="100" :step="5" />',_=G(7),A='<sui-slider disabled v-model="slider7" />',w=G(8),B=`<sui-segment inverted>
  <sui-slider inverted v-model="slider8" />
</sui-segment>`,L=G(3),R='<sui-slider reversed v-model="slider9" />',g=G(18),b='<sui-slider vertical v-model="slider10" :max="20" />',y=G(5),x=G(5),D=G(5),V=G(5),H=G(5),z=G(5),j=G(5),J=G(5),Y=G(5),me=G(5),Ae=G(5),U=G(5),K=G(5),ue=`<sui-slider color="red" v-model="redSlider" />
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
</sui-segment>`,Le=G(5),We=G(5),at=G(5);return{slider1:e,sliderCode:t,slider2:a,labeledSliderCode:o,slider3:l,labeledTickedCode:u,slider4:c,customLabelsCode:m,slider5:d,stepCode:p,slider6:f,rangeCode:h,slider7:_,disabledCode:A,slider8:w,invertedCode:B,slider9:L,reversedCode:R,slider10:g,verticalCode:b,redSlider:y,orangeSlider:x,yellowSlider:D,oliveSlider:V,greenSlider:H,tealSlider:z,blueSlider:j,violetSlider:J,purpleSlider:Y,pinkSlider:me,brownSlider:Ae,greySlider:U,blackSlider:K,coloredCode:ue,invertedColoredCode:ne,smallSlider:Le,largeSlider:We,bigSlider:at,sizeCode:`<sui-slider size="small" color="red" v-model="smallSlider" />
<sui-slider size="large" color="yellow" v-model="largeSlider" />
<sui-slider size="big" color="olive" v-model="bigSlider" />`,properties:[{name:"color",type:"string",default:"",description:"A slider can have different colors"},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"inverted",type:"boolean",default:!1,description:"A slider can be formatted to appear on dark backgrounds."},{name:"labeled",type:"boolean|string",default:!1,description:"A slider can show its labels."},{name:"labels",type:"string[]",default:"",description:"A slider can have a custom label according to the label value."},{name:"max",type:"number",default:10,description:"Maximum boundary value."},{name:"min",type:"number",default:0,description:"Mininum boundary value."},{name:"modelValue",type:"number|number[]",default:0,description:"A value of component."},{name:"range",type:"boolean",default:!1,description:"When specified, allows two boundary values to be picked."},{name:"reversed",type:"boolean",default:!1,description:"A slider can be reversed."},{name:"size",type:"string",default:"",description:"A slider can have different sizes."},{name:"step",type:"number",default:1,description:"Step factor to increment/decrement the value."},{name:"vertical",type:"boolean",default:!1,description:"When specified, orientation of the slider becomes vertical."},{name:"verticalHeight",type:"number|string",default:200,description:"Height of the vertical slider."}],events:[{name:"change",description:"Callback to invoke on value change."},{name:"slideend",description:"Callback to invoke when slide end."}]}}});function yD(e,t,a,o,l,u){const c=T("doc-page-header"),m=T("sui-header"),d=T("sui-slider"),p=T("doc-example"),f=T("sui-segment"),h=T("sui-table-header-cell"),_=T("sui-table-row"),A=T("sui-table-header"),w=T("sui-table-cell"),B=T("sui-table-body"),L=T("sui-table"),R=T("sui-container");return S(),we("div",null,[i(c,{title:"Slider",sub:"A slider allows users to select values within a range"}),i(R,{class:"main"},{default:n(()=>[i(m,{as:"h2",dividing:""},{default:n(()=>[r("Types")]),_:1}),i(p,{title:"Slider",description:"A standard slider",code:e.sliderCode},{default:n(()=>[i(d,{modelValue:e.slider1,"onUpdate:modelValue":t[0]||(t[0]=g=>e.slider1=g)},null,8,["modelValue"]),r(" "+$e(e.slider1),1)]),_:1},8,["code"]),i(p,{title:"Labeled Slider",description:"A slider that show its labels",code:e.labeledSliderCode},{default:n(()=>[i(d,{labeled:"",modelValue:e.slider2,"onUpdate:modelValue":t[1]||(t[1]=g=>e.slider2=g)},null,8,["modelValue"])]),_:1},8,["code"]),i(p,{title:"Labeled Ticked Slider",description:"A slider that show its labels and ticks",code:e.labeledTickedCode},{default:n(()=>[i(d,{labeled:"ticked",modelValue:e.slider3,"onUpdate:modelValue":t[2]||(t[2]=g=>e.slider3=g)},null,8,["modelValue"])]),_:1},8,["code"]),i(p,{title:"Custom Interpreted Labels",description:"You can provide a function which returns a custom label according to the label value",code:e.customLabelsCode},{default:n(()=>[i(d,{modelValue:e.slider4,"onUpdate:modelValue":t[3]||(t[3]=g=>e.slider4=g),labeled:"ticked",labels:["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ/ς","τ","υ","φ"],max:20},null,8,["modelValue"])]),_:1},8,["code"]),i(p,{title:"Step",description:"A slider can change the default step increment",code:e.stepCode},{default:n(()=>[i(d,{modelValue:e.slider5,"onUpdate:modelValue":t[4]||(t[4]=g=>e.slider5=g),labeled:"",step:5,max:120,min:20},null,8,["modelValue"]),r(" "+$e(e.slider5),1)]),_:1},8,["code"]),i(p,{title:"Range",description:"A range slider which allow you to select a range between two values",code:e.rangeCode},{default:n(()=>[i(d,{modelValue:e.slider6,"onUpdate:modelValue":t[5]||(t[5]=g=>e.slider6=g),range:"",labeled:"ticked",min:5,max:100,step:5},null,8,["modelValue"]),r(" "+$e(e.slider6),1)]),_:1},8,["code"]),i(m,{as:"h2",dividing:""},{default:n(()=>[r("Variations")]),_:1}),i(p,{title:"Disabled",description:"A slider can appear disabled",code:e.disabledCode},{default:n(()=>[i(d,{disabled:"",modelValue:e.slider7,"onUpdate:modelValue":t[6]||(t[6]=g=>e.slider7=g)},null,8,["modelValue"])]),_:1},8,["code"]),i(p,{title:"Inverted",description:"A slider can be inverted",code:e.invertedCode},{default:n(()=>[i(f,{inverted:""},{default:n(()=>[i(d,{inverted:"",modelValue:e.slider8,"onUpdate:modelValue":t[7]||(t[7]=g=>e.slider8=g)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),i(p,{title:"Reversed",description:"A slider can be reversed",code:e.reversedCode},{default:n(()=>[i(d,{reversed:"",modelValue:e.slider9,"onUpdate:modelValue":t[8]||(t[8]=g=>e.slider9=g)},null,8,["modelValue"]),r(" "+$e(e.slider9),1)]),_:1},8,["code"]),i(p,{title:"Vertical",description:"A slider can be vertical",code:e.verticalCode},{default:n(()=>[i(d,{vertical:"",modelValue:e.slider10,"onUpdate:modelValue":t[9]||(t[9]=g=>e.slider10=g),max:20},null,8,["modelValue"]),r(" "+$e(e.slider10),1)]),_:1},8,["code"]),i(p,{title:"Colored",description:"A slider can be different colors",code:e.coloredCode},{default:n(()=>[i(d,{color:"red",modelValue:e.redSlider,"onUpdate:modelValue":t[10]||(t[10]=g=>e.redSlider=g)},null,8,["modelValue"]),i(d,{color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":t[11]||(t[11]=g=>e.orangeSlider=g)},null,8,["modelValue"]),i(d,{color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":t[12]||(t[12]=g=>e.yellowSlider=g)},null,8,["modelValue"]),i(d,{color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":t[13]||(t[13]=g=>e.oliveSlider=g)},null,8,["modelValue"]),i(d,{color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":t[14]||(t[14]=g=>e.greenSlider=g)},null,8,["modelValue"]),i(d,{color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":t[15]||(t[15]=g=>e.tealSlider=g)},null,8,["modelValue"]),i(d,{color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":t[16]||(t[16]=g=>e.blueSlider=g)},null,8,["modelValue"]),i(d,{color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":t[17]||(t[17]=g=>e.violetSlider=g)},null,8,["modelValue"]),i(d,{color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":t[18]||(t[18]=g=>e.purpleSlider=g)},null,8,["modelValue"]),i(d,{color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":t[19]||(t[19]=g=>e.pinkSlider=g)},null,8,["modelValue"]),i(d,{color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":t[20]||(t[20]=g=>e.brownSlider=g)},null,8,["modelValue"]),i(d,{color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":t[21]||(t[21]=g=>e.greySlider=g)},null,8,["modelValue"]),i(d,{color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":t[22]||(t[22]=g=>e.blackSlider=g)},null,8,["modelValue"])]),_:1},8,["code"]),i(p,{title:"Inverted Colored",description:"A slider can be different colors while inverted",code:e.invertedColoredCode},{default:n(()=>[i(f,{inverted:""},{default:n(()=>[i(d,{inverted:"",color:"red",modelValue:e.redSlider,"onUpdate:modelValue":t[23]||(t[23]=g=>e.redSlider=g)},null,8,["modelValue"]),i(d,{inverted:"",color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":t[24]||(t[24]=g=>e.orangeSlider=g)},null,8,["modelValue"]),i(d,{inverted:"",color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":t[25]||(t[25]=g=>e.yellowSlider=g)},null,8,["modelValue"]),i(d,{inverted:"",color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":t[26]||(t[26]=g=>e.oliveSlider=g)},null,8,["modelValue"]),i(d,{inverted:"",color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":t[27]||(t[27]=g=>e.greenSlider=g)},null,8,["modelValue"]),i(d,{inverted:"",color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":t[28]||(t[28]=g=>e.tealSlider=g)},null,8,["modelValue"]),i(d,{inverted:"",color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":t[29]||(t[29]=g=>e.blueSlider=g)},null,8,["modelValue"]),i(d,{inverted:"",color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":t[30]||(t[30]=g=>e.violetSlider=g)},null,8,["modelValue"]),i(d,{inverted:"",color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":t[31]||(t[31]=g=>e.purpleSlider=g)},null,8,["modelValue"]),i(d,{inverted:"",color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":t[32]||(t[32]=g=>e.pinkSlider=g)},null,8,["modelValue"]),i(d,{inverted:"",color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":t[33]||(t[33]=g=>e.brownSlider=g)},null,8,["modelValue"]),i(d,{inverted:"",color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":t[34]||(t[34]=g=>e.greySlider=g)},null,8,["modelValue"]),i(d,{inverted:"",color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":t[35]||(t[35]=g=>e.blackSlider=g)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),i(p,{title:"Size",description:"A slider can have different sizes",code:e.sizeCode},{default:n(()=>[i(d,{size:"small",color:"red",modelValue:e.smallSlider,"onUpdate:modelValue":t[36]||(t[36]=g=>e.smallSlider=g)},null,8,["modelValue"]),i(d,{size:"large",color:"yellow",modelValue:e.largeSlider,"onUpdate:modelValue":t[37]||(t[37]=g=>e.largeSlider=g)},null,8,["modelValue"]),i(d,{size:"big",color:"olive",modelValue:e.bigSlider,"onUpdate:modelValue":t[38]||(t[38]=g=>e.bigSlider=g)},null,8,["modelValue"])]),_:1},8,["code"]),i(m,{as:"h2",dividing:""},{default:n(()=>[r("Properties")]),_:1}),i(L,{celled:""},{default:n(()=>[i(A,null,{default:n(()=>[i(_,null,{default:n(()=>[i(h,null,{default:n(()=>[r("Name")]),_:1}),i(h,null,{default:n(()=>[r("Type")]),_:1}),i(h,null,{default:n(()=>[r("Default")]),_:1}),i(h,null,{default:n(()=>[r("Description")]),_:1})]),_:1})]),_:1}),i(B,null,{default:n(()=>[(S(!0),we(ye,null,Qe(e.properties,g=>(S(),C(_,{key:g.name},{default:n(()=>[i(w,null,{default:n(()=>[r($e(g.name),1)]),_:2},1024),i(w,null,{default:n(()=>[r($e(g.type),1)]),_:2},1024),i(w,null,{default:n(()=>[r($e(g.default),1)]),_:2},1024),i(w,null,{default:n(()=>[r($e(g.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),i(m,{as:"h2",dividing:""},{default:n(()=>[r("Events")]),_:1}),i(L,{celled:""},{default:n(()=>[i(A,null,{default:n(()=>[i(_,null,{default:n(()=>[i(h,null,{default:n(()=>[r("Name")]),_:1}),i(h,null,{default:n(()=>[r("Description")]),_:1})]),_:1})]),_:1}),i(B,null,{default:n(()=>[(S(!0),we(ye,null,Qe(e.events,g=>(S(),C(_,{key:g.name},{default:n(()=>[i(w,null,{default:n(()=>[r($e(g.name),1)]),_:2},1024),i(w,null,{default:n(()=>[r($e(g.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const wD=Ye(SD,[["render",yD]]),CD=F({name:"TabDoc",components:{DocPageHeader:Gt,DocExample:Et,PropertyListTable:ko},setup(){return{basicCode:`<sui-tab>
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
</sui-tab>`,tabProperties:[{name:"activeIndex",type:"string",default:0,description:"Index of the active tab."},{name:"pointing",type:"boolean",default:!1,description:""}],tabPanelProperties:[{name:"header",type:"boolean",default:"null",description:"Orientation of tab headers."}],events:[{name:"tab-change",description:"Callback to invoke when an active tab is changed."},{name:"tab-click",description:"Callback to invoke when an tab is clicked."}]}}});function xD(e,t,a,o,l,u){const c=T("doc-page-header"),m=T("sui-header"),d=T("sui-tab-panel"),p=T("sui-tab"),f=T("doc-example"),h=T("property-list-table"),_=T("sui-table-header-cell"),A=T("sui-table-row"),w=T("sui-table-header"),B=T("sui-table-cell"),L=T("sui-table-body"),R=T("sui-table"),g=T("sui-container");return S(),we("div",null,[i(c,{title:"Tab",sub:"A tab is a hidden section of content activated by a menu"}),i(g,{class:"main"},{default:n(()=>[i(m,{as:"h2",dividing:""},{default:n(()=>[r("Examples")]),_:1}),i(f,{title:"Basic",code:e.basicCode},{default:n(()=>[i(p,null,{default:n(()=>[i(d,{header:"First"},{default:n(()=>[r("Content A")]),_:1}),i(d,{header:"Second"},{default:n(()=>[r("Content B")]),_:1}),i(d,{header:"Third"},{default:n(()=>[r("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),i(f,{title:"Pointing",code:e.pointingCode},{default:n(()=>[i(p,{pointing:""},{default:n(()=>[i(d,{header:"First"},{default:n(()=>[r("Content A")]),_:1}),i(d,{header:"Second"},{default:n(()=>[r("Content B")]),_:1}),i(d,{header:"Third"},{default:n(()=>[r("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),i(f,{title:"Secondary",code:e.secondaryCode},{default:n(()=>[i(p,{secondary:""},{default:n(()=>[i(d,{header:"First"},{default:n(()=>[r("Content A")]),_:1}),i(d,{header:"Second"},{default:n(()=>[r("Content B")]),_:1}),i(d,{header:"Third"},{default:n(()=>[r("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),i(f,{title:"Text",code:e.textCode},{default:n(()=>[i(p,{text:""},{default:n(()=>[i(d,{header:"First"},{default:n(()=>[r("Content A")]),_:1}),i(d,{header:"Second"},{default:n(()=>[r("Content B")]),_:1}),i(d,{header:"Third"},{default:n(()=>[r("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),i(m,{as:"h2",dividing:""},{default:n(()=>[r("Properties")]),_:1}),i(m,{as:"h3"},{default:n(()=>[r("Tab")]),_:1}),i(h,{properties:e.tabProperties},null,8,["properties"]),i(m,{as:"h3"},{default:n(()=>[r("TabPanel")]),_:1}),i(h,{properties:e.tabPanelProperties},null,8,["properties"]),i(m,{as:"h2",dividing:""},{default:n(()=>[r("Events")]),_:1}),i(R,{celled:""},{default:n(()=>[i(w,null,{default:n(()=>[i(A,null,{default:n(()=>[i(_,null,{default:n(()=>[r("Name")]),_:1}),i(_,null,{default:n(()=>[r("Description")]),_:1})]),_:1})]),_:1}),i(L,null,{default:n(()=>[(S(!0),we(ye,null,Qe(e.events,b=>(S(),C(A,{key:b.name},{default:n(()=>[i(B,null,{default:n(()=>[r($e(b.name),1)]),_:2},1024),i(B,null,{default:n(()=>[r($e(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const AD=Ye(CD,[["render",xD]]),kD=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({ message: 'I am a toast, nice to meet you !' })
}
<\/script>`,BD={__name:"MinimalDoc",setup(e){const{toast:t}=rt(),a=()=>{t({message:"I am a toast, nice to meet you !"})};return(o,l)=>{const u=T("SuiButton");return S(),C(I,{label:"Minimal",code:kD},{description:n(()=>[r(" A minimal toast will just display a message. ")]),example:n(()=>[i(u,{onClick:a},{default:n(()=>[r("Show")]),_:1})]),_:1})}}},$D=`<template>
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
<\/script>`,TD={__name:"TitledDoc",setup(e){const{toast:t}=rt(),a=()=>{t({title:"Better ?",message:"Hey look, I have a title !"})};return(o,l)=>{const u=T("SuiButton");return S(),C(I,{label:"Titled",code:$D},{description:n(()=>[r(" You can add a title to your toast. ")]),example:n(()=>[i(u,{onClick:a},{default:n(()=>[r("Show")]),_:1})]),_:1})}}},LD=`<template>
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
<\/script>`,ID={__name:"ProgressBarDoc",setup(e){const{toast:t}=rt(),a=o=>{t({title:"LOOK",message:"See, how long i will last",showProgress:"bottom",showProgressColor:o})};return(o,l)=>{const u=T("SuiButton");return S(),C(I,{label:"Progress Bar",code:LD},{description:n(()=>[r(" You can attach a progress bar to your toast. ")]),example:n(()=>[i(u,{onClick:a},{default:n(()=>[r("Show")]),_:1}),i(u,{color:"red",onClick:l[0]||(l[0]=c=>a("red"))},{default:n(()=>[r("Show")]),_:1})]),_:1})}}},DD=`<template>
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
<\/script>`,ED={__name:"ToastTypeDoc",setup(e){const{toast:t}=rt(),a=o=>{t({message:"You're using the good framework !",type:o})};return(o,l)=>{const u=T("SuiButton");return S(),C(I,{label:"Toast Type",code:DD},{description:n(()=>[r(" A toast can be used to display different types of informations. ")]),example:n(()=>[i(u,{onClick:l[0]||(l[0]=c=>a("success")),positive:""},{default:n(()=>[r("Success")]),_:1}),i(u,{onClick:l[1]||(l[1]=c=>a("error")),negative:""},{default:n(()=>[r("Error")]),_:1}),i(u,{onClick:l[2]||(l[2]=c=>a("warning")),color:"yellow"},{default:n(()=>[r("Warning")]),_:1})]),_:1})}}},RD=`<template>
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
<\/script>`,PD={__name:"PositionDoc",setup(e){const{toast:t}=rt(),a=o=>{t({position:o,message:"Look, I'm here !"})};return(o,l)=>{const u=T("SuiButton");return S(),C(I,{label:"Position",code:RD},{description:n(()=>[r(" A toast can appear at different positions on the screen. ")]),example:n(()=>[i(u,{onClick:l[0]||(l[0]=c=>a("top left"))},{default:n(()=>[r("Top Left")]),_:1}),i(u,{onClick:l[1]||(l[1]=c=>a("bottom right"))},{default:n(()=>[r("Bottom Right")]),_:1})]),_:1})}}},zD=$("br",null,null,-1),FD=`<template>
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
<\/script>`,VD={__name:"AttachedPosition",setup(e){const{toast:t}=rt(),a=o=>{t({attached:o,title:"Watch out!",message:`I am a ${o} attached toast`})};return(o,l)=>{const u=T("SuiButton");return S(),C(I,{label:"Attached Position",code:FD},{description:n(()=>[r(" A toast can have an attached position which will show the toast over the whole width of the screen."),zD,r(" Just like notifications on mobile devices. ")]),example:n(()=>[i(u,{onClick:l[0]||(l[0]=c=>a("top"))},{default:n(()=>[r("Top")]),_:1}),i(u,{onClick:l[1]||(l[1]=c=>a("bottom"))},{default:n(()=>[r("Bottom")]),_:1})]),_:1})}}},MD=`<template>
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
<\/script>`,HD={__name:"DirectionDoc",setup(e){const{toast:t}=rt(),a=()=>{t({horizontal:!0,position:"top left",title:"Watch out!",message:"Next one will open to the right"})};return(o,l)=>{const u=T("SuiButton");return S(),C(I,{label:"Direction",code:MD},{description:n(()=>[r(" Toasts can stack horizontal ")]),example:n(()=>[i(u,{onClick:a},{default:n(()=>[r("Show")]),_:1})]),_:1})}}},OD=`<template>
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
<\/script>`,ND={__name:"CenterAligned",setup(e){const{toast:t}=rt(),a=()=>{t({centered:!0,title:"Veronika has joined",message:"Welcome to the Fomantic-UI community!"})};return(o,l)=>{const u=T("SuiButton");return S(),C(I,{label:"Center Aligned",code:OD},{description:n(()=>[r(" The toasts content can be shown center aligned. ")]),example:n(()=>[i(u,{onClick:a},{default:n(()=>[r("Show")]),_:1})]),_:1})}}},qD=`<template>
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
<\/script>`,GD={__name:"DurationDoc",setup(e){const{toast:t}=rt(),a=o=>{t({displayTime:o,message:o===0?"I'll stay here until you click on me !":"You will see me for 5 seconds."})};return(o,l)=>{const u=T("SuiButton");return S(),C(I,{label:"Duration",code:qD},{description:n(()=>[r(" You can choose how long a toast should be displayed. ")]),example:n(()=>[i(u,{onClick:l[0]||(l[0]=c=>a(5e3))},{default:n(()=>[r("5 seconds")]),_:1}),i(u,{onClick:l[1]||(l[1]=c=>a(0))},{default:n(()=>[r("Stay")]),_:1})]),_:1})}}},jD=`<template>
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
<\/script>`,UD={__name:"MessageStyleDoc",setup(e){const{toast:t}=rt(),a=()=>{t({messageStyle:!0,message:"I got my style from the message class",color:"purple"})};return(o,l)=>{const u=T("SuiButton");return S(),C(I,{label:"Use Message Style",code:jD},{description:n(()=>[r(" You can use all of the styles and colors from the message component. ")]),example:n(()=>[i(u,{onClick:a},{default:n(()=>[r("Show")]),_:1})]),_:1})}}},YD=`<template>
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
<\/script>`,WD={__name:"IncreasingProgressBarDoc",setup(e){const{toast:t}=rt(),a=()=>{t({title:"LOOK",message:"See, how long i will last",showProgress:"top",showProgressUp:!0})};return(o,l)=>{const u=T("SuiButton");return S(),C(I,{label:"Increasing Progress Bar",code:YD},{description:n(()=>[r(" You can use the progress bar to show the progress of a task. ")]),example:n(()=>[i(u,{onClick:a},{default:n(()=>[r("Show")]),_:1})]),_:1})}}},KD=`<template>
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
<\/script>`,XD={__name:"ColorVariantsDoc",setup(e){const{toast:t}=rt(),a=G(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],l=()=>{t({color:o[a.value],message:"I am a colorful toast",showProgress:"bottom"}),a.value=(a.value+1)%o.length};return(u,c)=>{const m=T("SuiButton");return S(),C(I,{label:"Color Variants",code:KD},{description:n(()=>[r(" You can use all of the usual color names. ")]),example:n(()=>[i(m,{onClick:l},{default:n(()=>[r("Show")]),_:1})]),_:1})}}},JD={__name:"InvertedColorsDoc",setup(e){const{toast:t}=rt(),a=G(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],l=()=>{t({color:o[a.value],inverted:!0,message:"I am an inverted colorful toast",showProgress:"bottom"}),a.value=(a.value+1)%o.length};return(u,c)=>{const m=T("SuiButton");return S(),C(I,{label:"Inverted Colors",code:u.code},{description:n(()=>[r(" Same as above, just add inverted to the class definition. ")]),example:n(()=>[i(m,{onClick:l},{default:n(()=>[r("Show")]),_:1})]),_:1},8,["code"])}}},QD=`<template>
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
<\/script>`,ZD={__name:"ActionGeneralDoc",setup(e){const{toast:t}=rt(),a=()=>{t({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[ee(P,{color:"green",onclick:()=>{t({message:'You clicked "yes", toast closes by default'}),o()}},()=>[ee(W,{name:"check"}),"Yes"]),ee(P,{color:"red",icon:!0},()=>[ee(W,{name:"ban"})]),ee(P,{color:"blue",onclick:()=>t({message:"Returning false from the click handler avoids closing the toast"})},()=>"?")]})};return(o,l)=>(S(),C(I,{label:"General",code:QD},{description:n(()=>[r(" Define click actions to your toast by providing a text and/or icon, optional class and click handler. ")]),example:n(()=>[i(s(P),{onClick:a},{default:n(()=>[r("Show")]),_:1})]),_:1}))}},eE=`<template>
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
<\/script>`,tE={__name:"ActionBasicDoc",setup(e){const{toast:t}=rt(),a=()=>{t({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[ee(P,{color:"yellow",onclick:()=>{t({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really")],actionsProps:{basic:!0,aligned:"left"}})};return(o,l)=>(S(),C(I,{label:"Basic",code:eE},{description:n(()=>[r(" The classActions setting provides you a way to adjust the overall appearance of the action buttons. Using basic class does not lighten the actions background. left aligns the buttons to the left. ")]),example:n(()=>[i(s(P),{onClick:a},{default:n(()=>[r("Show")]),_:1})]),_:1}))}},iE=`<template>
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
<\/script>`,nE={__name:"ActionAttachedDoc",setup(e){const{toast:t}=rt(),a=()=>{t({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[ee(P,{color:"green",onclick:()=>{t({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),ee(P,{color:"red",onclick:()=>{t({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"top"}})};return(o,l)=>(S(),C(I,{label:"Attached",code:iE},{description:n(()=>[r(" Using attached converts your actions into a Button group. Also add top to display the actions attached to the top of the toast. ")]),example:n(()=>[i(s(P),{onClick:a},{default:n(()=>[r("Show")]),_:1})]),_:1}))}},aE=`<template>
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
<\/script>`,oE={__name:"ActionVerticalDoc",setup(e){const{toast:t}=rt(),a=()=>{t({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[ee(P,{color:"green",onclick:()=>{t({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),ee(P,{color:"red",onclick:()=>{t({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{vertical:!0}})};return(o,l)=>(S(),C(I,{label:"Vertical",code:aE},{description:n(()=>[r(" You can use vertical to display your actions to the right of the toast. ")]),example:n(()=>[i(s(P),{onClick:a},{default:n(()=>[r("Show")]),_:1})]),_:1}))}},lE=$("br",null,null,-1),rE=`<template>
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
<\/script>`,sE={__name:"ActionVerticalAttachedDoc",setup(e){const{toast:t}=rt(),a=()=>{t({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[ee(P,{color:"green",onclick:()=>{t({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),ee(P,{color:"red",onclick:()=>{t({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"left",vertical:!0}})};return(o,l)=>(S(),C(I,{label:"Vertical Attached",code:rE},{description:n(()=>[r(" Vertical actions can also be displayed as button groups using vertical attached."),lE,r(" Vertical attached actions also support left. ")]),example:n(()=>[i(s(P),{onClick:a},{default:n(()=>[r("Show")]),_:1})]),_:1}))}},uE={__name:"Toast",setup(e){const t=[{id:"minimal",label:"Minimal",category:"Types",component:BD},{id:"titled",label:"Titled",category:"Types",component:TD},{id:"progress-bar",label:"Progress Bar",category:"Types",component:ID},{id:"toast-type",label:"Toast Type",category:"Variations",component:ED},{id:"position",label:"Position",category:"Variations",component:PD},{id:"attached-position",label:"Attached Position",category:"Variations",component:VD},{id:"direction",label:"Direction",category:"Variations",component:HD},{id:"center-aligned",label:"Center Aligned",category:"Variations",component:ND},{id:"duration",label:"Duration",category:"Variations",component:GD},{id:"message-style",label:"Use Message Style",category:"Variations",component:UD},{id:"increasing-progress-bar",label:"Increasing Progress Bar",category:"Variations",component:WD},{id:"color-variants",label:"Color Variants",category:"Variations",component:XD},{id:"inverted-colors",label:"Inverted Colors",category:"Variations",component:JD},{id:"general",label:"General",category:"Actions",component:ZD},{id:"action-basic",label:"Basic",category:"Actions",component:tE},{id:"action-attached",label:"Attached",category:"Actions",component:nE},{id:"action-vertical",label:"Vertical",category:"Actions",component:oE},{id:"action-vertical-attached",label:"Vertical Attached",category:"Actions",component:sE}];return(a,o)=>(S(),C(lt,{title:"Toast",description:"A toast allows users to be notified of an event","component-docs":t}))}},cE=[{path:"/",component:Lh,children:[{path:"/",component:a_},{path:"elements/button",component:Lw},{path:"elements/container",component:Nw},{path:"elements/divider",component:pC},{path:"elements/emoji",component:xC},{path:"elements/flag",component:TC},{path:"elements/header",component:r0},{path:"elements/icon",component:M0},{path:"elements/image",component:kx},{path:"elements/input",component:Jx},{path:"elements/label",component:rk},{path:"elements/list",component:Rk},{path:"elements/loader",component:nB},{path:"elements/rail",component:rB},{path:"elements/reveal",component:SB},{path:"elements/segment",component:UT},{path:"elements/step",component:()=>zt(()=>import("./Step-Mpdi3W44.js"),__vite__mapDeps([]))},{path:"collections/breadcrumb",component:uL},{path:"collections/form",component:$L},{path:"collections/grid",component:PL},{path:"collections/menu",component:()=>zt(()=>import("./Menu-loN4gu0S.js"),__vite__mapDeps([]))},{path:"collections/message",component:()=>zt(()=>import("./Message-9j2nrK1O.js"),__vite__mapDeps([]))},{path:"collections/table",component:()=>zt(()=>import("./Table-Dm3k5dbc.js"),__vite__mapDeps([]))},{path:"views/advertisement",component:()=>zt(()=>import("./Advertisement-_IS4NEey.js"),__vite__mapDeps([]))},{path:"views/card",component:()=>zt(()=>import("./Card-oc4Stnon.js"),__vite__mapDeps([]))},{path:"views/comment",component:()=>zt(()=>import("./Comment-OhhAL7Vq.js"),__vite__mapDeps([]))},{path:"views/feed",component:()=>zt(()=>import("./Feed-dVWcLvWm.js"),__vite__mapDeps([]))},{path:"views/item",component:()=>zt(()=>import("./Item-eEtpdKqk.js"),__vite__mapDeps([]))},{path:"views/statistic",component:()=>zt(()=>import("./Statistic-Tqr8inLW.js"),__vite__mapDeps([]))},{path:"modules/accordion",component:()=>zt(()=>import("./Accordion-F42_kX09.js"),__vite__mapDeps([]))},{path:"modules/calendar",component:VL},{path:"modules/checkbox",component:WL},{path:"modules/dimmer",component:JL},{path:"modules/dropdown",component:eI},{path:"modules/embed",component:nI},{path:"modules/modal",component:dI},{path:"modules/popup",component:vI},{path:"modules/progress",component:()=>zt(()=>import("./Progress-AKwS4IPQ.js"),__vite__mapDeps([]))},{path:"modules/rating",component:gD},{path:"modules/sidebar",component:bD},{path:"modules/slider",component:wD},{path:"modules/tab",component:AD},{path:"modules/toast",component:uE}]}],dE=sh({history:Cg("/vue-fomantic-ui/"),routes:cE,scrollBehavior(e,t,a){var o;e.hash||(o=document.querySelector(".article"))==null||o.scrollTo(0,0)}});(function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",a={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},o={bash:a,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:o},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:a}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:o},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:o.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:o.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},a.inside=e.languages.bash;for(var l=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],u=o.variable[1].inside,c=0;c<l.length;c++)u[l[c]]=e.languages.bash[l[c]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);const Br=Rc(ng);Br.use(dE);Br.use(oy);Br.mount("#app");export{xv as $,N as A,fe as B,le as C,lt as D,hv as E,$e as F,rr as G,Kb as H,we as I,ye as J,Qe as K,Mb as L,u_ as M,_d as N,eb as O,Te as P,F_ as Q,Ao as R,V_ as S,Ui as T,H_ as U,cd as V,ft as W,O_ as X,rd as Y,yv as Z,I as _,r as a,J_ as a0,U_ as a1,Hd as a2,ma as a3,bk as a4,eA as a5,Dl as a6,Ra as a7,Pa as a8,Nv as a9,Vv as aa,on as ab,Mv as ac,Pb as ad,kl as ae,Bl as af,zb as ag,o_ as ah,td as ai,Al as aj,i as b,C as c,F as d,ba as e,kt as f,$ as g,Oe as h,Za as i,Ze as j,ei as k,ee as l,P as m,W as n,S as o,Ht as p,hr as q,G as r,it as s,ad as t,s as u,Qb as v,n as w,Fe as x,O as y,sd as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

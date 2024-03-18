(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function a(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=a(s);fetch(s.href,c)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function tn(e,l){const a=new Set(e.split(","));return l?o=>a.has(o.toLowerCase()):o=>a.has(o)}const qe={},sl=[],yt=()=>{},Pd=()=>!1,da=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Do=e=>e.startsWith("onUpdate:"),Ke=Object.assign,Io=(e,l)=>{const a=e.indexOf(l);a>-1&&e.splice(a,1)},Fd=Object.prototype.hasOwnProperty,ze=(e,l)=>Fd.call(e,l),he=Array.isArray,rl=e=>xl(e)==="[object Map]",Wi=e=>xl(e)==="[object Set]",Ts=e=>xl(e)==="[object Date]",Vd=e=>xl(e)==="[object RegExp]",Ce=e=>typeof e=="function",Xe=e=>typeof e=="string",wi=e=>typeof e=="symbol",je=e=>e!==null&&typeof e=="object",Eo=e=>(je(e)||Ce(e))&&Ce(e.then)&&Ce(e.catch),qr=Object.prototype.toString,xl=e=>qr.call(e),Md=e=>xl(e).slice(8,-1),Gr=e=>xl(e)==="[object Object]",Ro=e=>Xe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,jl=tn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ln=e=>{const l=Object.create(null);return a=>l[a]||(l[a]=e(a))},Hd=/-(\w)/g,vt=ln(e=>e.replace(Hd,(l,a)=>a?a.toUpperCase():"")),Nd=/\B([A-Z])/g,Lt=ln(e=>e.replace(Nd,"-$1").toLowerCase()),ma=ln(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ul=ln(e=>e?`on${ma(e)}`:""),Gt=(e,l)=>!Object.is(e,l),ul=(e,l)=>{for(let a=0;a<e.length;a++)e[a](l)},Ma=(e,l,a)=>{Object.defineProperty(e,l,{configurable:!0,enumerable:!1,value:a})},ea=e=>{const l=parseFloat(e);return isNaN(l)?e:l},Ha=e=>{const l=Xe(e)?Number(e):NaN;return isNaN(l)?e:l};let Ls;const jr=()=>Ls||(Ls=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Od="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",qd=tn(Od);function kl(e){if(he(e)){const l={};for(let a=0;a<e.length;a++){const o=e[a],s=Xe(o)?Yd(o):kl(o);if(s)for(const c in s)l[c]=s[c]}return l}else if(Xe(e)||je(e))return e}const Gd=/;(?![^(]*\))/g,jd=/:([^]+)/,Ud=/\/\*[^]*?\*\//g;function Yd(e){const l={};return e.replace(Ud,"").split(Gd).forEach(a=>{if(a){const o=a.split(jd);o.length>1&&(l[o[0].trim()]=o[1].trim())}}),l}function pa(e){let l="";if(Xe(e))l=e;else if(he(e))for(let a=0;a<e.length;a++){const o=pa(e[a]);o&&(l+=o+" ")}else if(je(e))for(const a in e)e[a]&&(l+=a+" ");return l.trim()}function Jd(e){if(!e)return null;let{class:l,style:a}=e;return l&&!Xe(l)&&(e.class=pa(l)),a&&(e.style=kl(a)),e}const Wd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Kd=tn(Wd);function Ur(e){return!!e||e===""}function Xd(e,l){if(e.length!==l.length)return!1;let a=!0;for(let o=0;a&&o<e.length;o++)a=ai(e[o],l[o]);return a}function ai(e,l){if(e===l)return!0;let a=Ts(e),o=Ts(l);if(a||o)return a&&o?e.getTime()===l.getTime():!1;if(a=wi(e),o=wi(l),a||o)return e===l;if(a=he(e),o=he(l),a||o)return a&&o?Xd(e,l):!1;if(a=je(e),o=je(l),a||o){if(!a||!o)return!1;const s=Object.keys(e).length,c=Object.keys(l).length;if(s!==c)return!1;for(const m in e){const f=e.hasOwnProperty(m),u=l.hasOwnProperty(m);if(f&&!u||!f&&u||!ai(e[m],l[m]))return!1}}return String(e)===String(l)}function an(e,l){return e.findIndex(a=>ai(a,l))}const Te=e=>Xe(e)?e:e==null?"":he(e)||je(e)&&(e.toString===qr||!Ce(e.toString))?JSON.stringify(e,Yr,2):String(e),Yr=(e,l)=>l&&l.__v_isRef?Yr(e,l.value):rl(l)?{[`Map(${l.size})`]:[...l.entries()].reduce((a,[o,s],c)=>(a[xn(o,c)+" =>"]=s,a),{})}:Wi(l)?{[`Set(${l.size})`]:[...l.values()].map(a=>xn(a))}:wi(l)?xn(l):je(l)&&!he(l)&&!Gr(l)?String(l):l,xn=(e,l="")=>{var a;return wi(e)?`Symbol(${(a=e.description)!=null?a:l})`:e};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $t;class zo{constructor(l=!1){this.detached=l,this._active=!0,this.effects=[],this.cleanups=[],this.parent=$t,!l&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}run(l){if(this._active){const a=$t;try{return $t=this,l()}finally{$t=a}}}on(){$t=this}off(){$t=this.parent}stop(l){if(this._active){let a,o;for(a=0,o=this.effects.length;a<o;a++)this.effects[a].stop();for(a=0,o=this.cleanups.length;a<o;a++)this.cleanups[a]();if(this.scopes)for(a=0,o=this.scopes.length;a<o;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!l){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Qd(e){return new zo(e)}function Jr(e,l=$t){l&&l.active&&l.effects.push(e)}function Po(){return $t}function Wr(e){$t&&$t.cleanups.push(e)}let Pi;class bl{constructor(l,a,o,s){this.fn=l,this.trigger=a,this.scheduler=o,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Jr(this,s)}get dirty(){if(this._dirtyLevel===1){Ki();for(let l=0;l<this._depsLength;l++){const a=this.deps[l];if(a.computed&&(Zd(a.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),Xi()}return this._dirtyLevel>=2}set dirty(l){this._dirtyLevel=l?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let l=vi,a=Pi;try{return vi=!0,Pi=this,this._runnings++,Ds(this),this.fn()}finally{Is(this),this._runnings--,Pi=a,vi=l}}stop(){var l;this.active&&(Ds(this),Is(this),(l=this.onStop)==null||l.call(this),this.active=!1)}}function Zd(e){return e.value}function Ds(e){e._trackId++,e._depsLength=0}function Is(e){if(e.deps&&e.deps.length>e._depsLength){for(let l=e._depsLength;l<e.deps.length;l++)Kr(e.deps[l],e);e.deps.length=e._depsLength}}function Kr(e,l){const a=e.get(l);a!==void 0&&l._trackId!==a&&(e.delete(l),e.size===0&&e.cleanup())}function em(e,l){e.effect instanceof bl&&(e=e.effect.fn);const a=new bl(e,yt,()=>{a.dirty&&a.run()});l&&(Ke(a,l),l.scope&&Jr(a,l.scope)),(!l||!l.lazy)&&a.run();const o=a.run.bind(a);return o.effect=a,o}function tm(e){e.effect.stop()}let vi=!0,Jn=0;const Xr=[];function Ki(){Xr.push(vi),vi=!1}function Xi(){const e=Xr.pop();vi=e===void 0?!0:e}function Fo(){Jn++}function Vo(){for(Jn--;!Jn&&Wn.length;)Wn.shift()()}function Qr(e,l,a){if(l.get(e)!==e._trackId){l.set(e,e._trackId);const o=e.deps[e._depsLength];o!==l?(o&&Kr(o,e),e.deps[e._depsLength++]=l):e._depsLength++}}const Wn=[];function Zr(e,l,a){Fo();for(const o of e.keys())if(o._dirtyLevel<l&&e.get(o)===o._trackId){const s=o._dirtyLevel;o._dirtyLevel=l,s===0&&(o._shouldSchedule=!0,o.trigger())}eu(e),Vo()}function eu(e){for(const l of e.keys())l.scheduler&&l._shouldSchedule&&(!l._runnings||l.allowRecurse)&&e.get(l)===l._trackId&&(l._shouldSchedule=!1,Wn.push(l.scheduler))}const tu=(e,l)=>{const a=new Map;return a.cleanup=e,a.computed=l,a},Na=new WeakMap,Fi=Symbol(""),Kn=Symbol("");function At(e,l,a){if(vi&&Pi){let o=Na.get(e);o||Na.set(e,o=new Map);let s=o.get(a);s||o.set(a,s=tu(()=>o.delete(a))),Qr(Pi,s)}}function ii(e,l,a,o,s,c){const m=Na.get(e);if(!m)return;let f=[];if(l==="clear")f=[...m.values()];else if(a==="length"&&he(e)){const u=Number(o);m.forEach((d,g)=>{(g==="length"||!wi(g)&&g>=u)&&f.push(d)})}else switch(a!==void 0&&f.push(m.get(a)),l){case"add":he(e)?Ro(a)&&f.push(m.get("length")):(f.push(m.get(Fi)),rl(e)&&f.push(m.get(Kn)));break;case"delete":he(e)||(f.push(m.get(Fi)),rl(e)&&f.push(m.get(Kn)));break;case"set":rl(e)&&f.push(m.get(Fi));break}Fo();for(const u of f)u&&Zr(u,2);Vo()}function im(e,l){var a;return(a=Na.get(e))==null?void 0:a.get(l)}const lm=tn("__proto__,__v_isRef,__isVue"),iu=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(wi)),Es=am();function am(){const e={};return["includes","indexOf","lastIndexOf"].forEach(l=>{e[l]=function(...a){const o=Ee(this);for(let c=0,m=this.length;c<m;c++)At(o,"get",c+"");const s=o[l](...a);return s===-1||s===!1?o[l](...a.map(Ee)):s}}),["push","pop","shift","unshift","splice"].forEach(l=>{e[l]=function(...a){Ki(),Fo();const o=Ee(this)[l].apply(this,a);return Vo(),Xi(),o}}),e}function nm(e){const l=Ee(this);return At(l,"has",e),l.hasOwnProperty(e)}class lu{constructor(l=!1,a=!1){this._isReadonly=l,this._shallow=a}get(l,a,o){const s=this._isReadonly,c=this._shallow;if(a==="__v_isReactive")return!s;if(a==="__v_isReadonly")return s;if(a==="__v_isShallow")return c;if(a==="__v_raw")return o===(s?c?uu:ru:c?su:ou).get(l)||Object.getPrototypeOf(l)===Object.getPrototypeOf(o)?l:void 0;const m=he(l);if(!s){if(m&&ze(Es,a))return Reflect.get(Es,a,o);if(a==="hasOwnProperty")return nm}const f=Reflect.get(l,a,o);return(wi(a)?iu.has(a):lm(a))||(s||At(l,"get",a),c)?f:mt(f)?m&&Ro(a)?f:f.value:je(f)?s?Ho(f):oi(f):f}}class au extends lu{constructor(l=!1){super(!1,l)}set(l,a,o,s){let c=l[a];if(!this._shallow){const u=Oi(c);if(!ta(o)&&!Oi(o)&&(c=Ee(c),o=Ee(o)),!he(l)&&mt(c)&&!mt(o))return u?!1:(c.value=o,!0)}const m=he(l)&&Ro(a)?Number(a)<l.length:ze(l,a),f=Reflect.set(l,a,o,s);return l===Ee(s)&&(m?Gt(o,c)&&ii(l,"set",a,o):ii(l,"add",a,o)),f}deleteProperty(l,a){const o=ze(l,a);l[a];const s=Reflect.deleteProperty(l,a);return s&&o&&ii(l,"delete",a,void 0),s}has(l,a){const o=Reflect.has(l,a);return(!wi(a)||!iu.has(a))&&At(l,"has",a),o}ownKeys(l){return At(l,"iterate",he(l)?"length":Fi),Reflect.ownKeys(l)}}class nu extends lu{constructor(l=!1){super(!0,l)}set(l,a){return!0}deleteProperty(l,a){return!0}}const om=new au,sm=new nu,rm=new au(!0),um=new nu(!0),Mo=e=>e,nn=e=>Reflect.getPrototypeOf(e);function Sa(e,l,a=!1,o=!1){e=e.__v_raw;const s=Ee(e),c=Ee(l);a||(Gt(l,c)&&At(s,"get",l),At(s,"get",c));const{has:m}=nn(s),f=o?Mo:a?qo:ia;if(m.call(s,l))return f(e.get(l));if(m.call(s,c))return f(e.get(c));e!==s&&e.get(l)}function ya(e,l=!1){const a=this.__v_raw,o=Ee(a),s=Ee(e);return l||(Gt(e,s)&&At(o,"has",e),At(o,"has",s)),e===s?a.has(e):a.has(e)||a.has(s)}function wa(e,l=!1){return e=e.__v_raw,!l&&At(Ee(e),"iterate",Fi),Reflect.get(e,"size",e)}function Rs(e){e=Ee(e);const l=Ee(this);return nn(l).has.call(l,e)||(l.add(e),ii(l,"add",e,e)),this}function zs(e,l){l=Ee(l);const a=Ee(this),{has:o,get:s}=nn(a);let c=o.call(a,e);c||(e=Ee(e),c=o.call(a,e));const m=s.call(a,e);return a.set(e,l),c?Gt(l,m)&&ii(a,"set",e,l):ii(a,"add",e,l),this}function Ps(e){const l=Ee(this),{has:a,get:o}=nn(l);let s=a.call(l,e);s||(e=Ee(e),s=a.call(l,e)),o&&o.call(l,e);const c=l.delete(e);return s&&ii(l,"delete",e,void 0),c}function Fs(){const e=Ee(this),l=e.size!==0,a=e.clear();return l&&ii(e,"clear",void 0,void 0),a}function Ca(e,l){return function(o,s){const c=this,m=c.__v_raw,f=Ee(m),u=l?Mo:e?qo:ia;return!e&&At(f,"iterate",Fi),m.forEach((d,g)=>o.call(s,u(d),u(g),c))}}function Aa(e,l,a){return function(...o){const s=this.__v_raw,c=Ee(s),m=rl(c),f=e==="entries"||e===Symbol.iterator&&m,u=e==="keys"&&m,d=s[e](...o),g=a?Mo:l?qo:ia;return!l&&At(c,"iterate",u?Kn:Fi),{next(){const{value:p,done:_}=d.next();return _?{value:p,done:_}:{value:f?[g(p[0]),g(p[1])]:g(p),done:_}},[Symbol.iterator](){return this}}}}function ui(e){return function(...l){return e==="delete"?!1:e==="clear"?void 0:this}}function cm(){const e={get(c){return Sa(this,c)},get size(){return wa(this)},has:ya,add:Rs,set:zs,delete:Ps,clear:Fs,forEach:Ca(!1,!1)},l={get(c){return Sa(this,c,!1,!0)},get size(){return wa(this)},has:ya,add:Rs,set:zs,delete:Ps,clear:Fs,forEach:Ca(!1,!0)},a={get(c){return Sa(this,c,!0)},get size(){return wa(this,!0)},has(c){return ya.call(this,c,!0)},add:ui("add"),set:ui("set"),delete:ui("delete"),clear:ui("clear"),forEach:Ca(!0,!1)},o={get(c){return Sa(this,c,!0,!0)},get size(){return wa(this,!0)},has(c){return ya.call(this,c,!0)},add:ui("add"),set:ui("set"),delete:ui("delete"),clear:ui("clear"),forEach:Ca(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(c=>{e[c]=Aa(c,!1,!1),a[c]=Aa(c,!0,!1),l[c]=Aa(c,!1,!0),o[c]=Aa(c,!0,!0)}),[e,a,l,o]}const[dm,mm,pm,fm]=cm();function on(e,l){const a=l?e?fm:pm:e?mm:dm;return(o,s,c)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(ze(a,s)&&s in o?a:o,s,c)}const gm={get:on(!1,!1)},hm={get:on(!1,!0)},_m={get:on(!0,!1)},bm={get:on(!0,!0)},ou=new WeakMap,su=new WeakMap,ru=new WeakMap,uu=new WeakMap;function vm(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Sm(e){return e.__v_skip||!Object.isExtensible(e)?0:vm(Md(e))}function oi(e){return Oi(e)?e:sn(e,!1,om,gm,ou)}function cu(e){return sn(e,!1,rm,hm,su)}function Ho(e){return sn(e,!0,sm,_m,ru)}function ym(e){return sn(e,!0,um,bm,uu)}function sn(e,l,a,o,s){if(!je(e)||e.__v_raw&&!(l&&e.__v_isReactive))return e;const c=s.get(e);if(c)return c;const m=Sm(e);if(m===0)return e;const f=new Proxy(e,m===2?o:a);return s.set(e,f),f}function Vi(e){return Oi(e)?Vi(e.__v_raw):!!(e&&e.__v_isReactive)}function Oi(e){return!!(e&&e.__v_isReadonly)}function ta(e){return!!(e&&e.__v_isShallow)}function No(e){return Vi(e)||Oi(e)}function Ee(e){const l=e&&e.__v_raw;return l?Ee(l):e}function Oo(e){return Ma(e,"__v_skip",!0),e}const ia=e=>je(e)?oi(e):e,qo=e=>je(e)?Ho(e):e;class du{constructor(l,a,o,s){this._setter=a,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new bl(()=>l(this._value),()=>cl(this,1),()=>this.dep&&eu(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=o}get value(){const l=Ee(this);return(!l._cacheable||l.effect.dirty)&&Gt(l._value,l._value=l.effect.run())&&cl(l,2),Go(l),l.effect._dirtyLevel>=1&&cl(l,1),l._value}set value(l){this._setter(l)}get _dirty(){return this.effect.dirty}set _dirty(l){this.effect.dirty=l}}function wm(e,l,a=!1){let o,s;const c=Ce(e);return c?(o=e,s=yt):(o=e.get,s=e.set),new du(o,s,c||!s,a)}function Go(e){vi&&Pi&&(e=Ee(e),Qr(Pi,e.dep||(e.dep=tu(()=>e.dep=void 0,e instanceof du?e:void 0))))}function cl(e,l=2,a){e=Ee(e);const o=e.dep;o&&Zr(o,l)}function mt(e){return!!(e&&e.__v_isRef===!0)}function j(e){return pu(e,!1)}function mu(e){return pu(e,!0)}function pu(e,l){return mt(e)?e:new Cm(e,l)}class Cm{constructor(l,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?l:Ee(l),this._value=a?l:ia(l)}get value(){return Go(this),this._value}set value(l){const a=this.__v_isShallow||ta(l)||Oi(l);l=a?l:Ee(l),Gt(l,this._rawValue)&&(this._rawValue=l,this._value=a?l:ia(l),cl(this,2))}}function Am(e){cl(e,2)}function r(e){return mt(e)?e.value:e}function xm(e){return Ce(e)?e():r(e)}const km={get:(e,l,a)=>r(Reflect.get(e,l,a)),set:(e,l,a,o)=>{const s=e[l];return mt(s)&&!mt(a)?(s.value=a,!0):Reflect.set(e,l,a,o)}};function jo(e){return Vi(e)?e:new Proxy(e,km)}class $m{constructor(l){this.dep=void 0,this.__v_isRef=!0;const{get:a,set:o}=l(()=>Go(this),()=>cl(this));this._get=a,this._set=o}get value(){return this._get()}set value(l){this._set(l)}}function fu(e){return new $m(e)}function Bm(e){const l=he(e)?new Array(e.length):{};for(const a in e)l[a]=gu(e,a);return l}class Tm{constructor(l,a,o){this._object=l,this._key=a,this._defaultValue=o,this.__v_isRef=!0}get value(){const l=this._object[this._key];return l===void 0?this._defaultValue:l}set value(l){this._object[this._key]=l}get dep(){return im(Ee(this._object),this._key)}}class Lm{constructor(l){this._getter=l,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Xn(e,l,a){return mt(e)?e:Ce(e)?new Lm(e):je(e)&&arguments.length>1?gu(e,l,a):j(e)}function gu(e,l,a){const o=e[l];return mt(o)?o:new Tm(e,l,a)}const Dm={GET:"get",HAS:"has",ITERATE:"iterate"},Im={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Em(e,l){}const Rm={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},zm={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function li(e,l,a,o){let s;try{s=o?e(...o):e()}catch(c){Qi(c,l,a)}return s}function Et(e,l,a,o){if(Ce(e)){const c=li(e,l,a,o);return c&&Eo(c)&&c.catch(m=>{Qi(m,l,a)}),c}const s=[];for(let c=0;c<e.length;c++)s.push(Et(e[c],l,a,o));return s}function Qi(e,l,a,o=!0){const s=l?l.vnode:null;if(l){let c=l.parent;const m=l.proxy,f=`https://vuejs.org/error-reference/#runtime-${a}`;for(;c;){const d=c.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](e,m,f)===!1)return}c=c.parent}const u=l.appContext.config.errorHandler;if(u){li(u,null,10,[e,m,f]);return}}Pm(e,a,s,o)}function Pm(e,l,a,o=!0){console.error(e)}let la=!1,Qn=!1;const ft=[];let Wt=0;const dl=[];let fi=null,Ei=0;const hu=Promise.resolve();let Uo=null;function $l(e){const l=Uo||hu;return e?l.then(this?e.bind(this):e):l}function Fm(e){let l=Wt+1,a=ft.length;for(;l<a;){const o=l+a>>>1,s=ft[o],c=aa(s);c<e||c===e&&s.pre?l=o+1:a=o}return l}function rn(e){(!ft.length||!ft.includes(e,la&&e.allowRecurse?Wt+1:Wt))&&(e.id==null?ft.push(e):ft.splice(Fm(e.id),0,e),_u())}function _u(){!la&&!Qn&&(Qn=!0,Uo=hu.then(bu))}function Vm(e){const l=ft.indexOf(e);l>Wt&&ft.splice(l,1)}function Oa(e){he(e)?dl.push(...e):(!fi||!fi.includes(e,e.allowRecurse?Ei+1:Ei))&&dl.push(e),_u()}function Vs(e,l,a=la?Wt+1:0){for(;a<ft.length;a++){const o=ft[a];if(o&&o.pre){if(e&&o.id!==e.uid)continue;ft.splice(a,1),a--,o()}}}function qa(e){if(dl.length){const l=[...new Set(dl)].sort((a,o)=>aa(a)-aa(o));if(dl.length=0,fi){fi.push(...l);return}for(fi=l,Ei=0;Ei<fi.length;Ei++)fi[Ei]();fi=null,Ei=0}}const aa=e=>e.id==null?1/0:e.id,Mm=(e,l)=>{const a=aa(e)-aa(l);if(a===0){if(e.pre&&!l.pre)return-1;if(l.pre&&!e.pre)return 1}return a};function bu(e){Qn=!1,la=!0,ft.sort(Mm);try{for(Wt=0;Wt<ft.length;Wt++){const l=ft[Wt];l&&l.active!==!1&&li(l,null,14)}}finally{Wt=0,ft.length=0,qa(),la=!1,Uo=null,(ft.length||dl.length)&&bu()}}let al,xa=[];function vu(e,l){var a,o;al=e,al?(al.enabled=!0,xa.forEach(({event:s,args:c})=>al.emit(s,...c)),xa=[]):typeof window<"u"&&window.HTMLElement&&!((o=(a=window.navigator)==null?void 0:a.userAgent)!=null&&o.includes("jsdom"))?((l.__VUE_DEVTOOLS_HOOK_REPLAY__=l.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(c=>{vu(c,l)}),setTimeout(()=>{al||(l.__VUE_DEVTOOLS_HOOK_REPLAY__=null,xa=[])},3e3)):xa=[]}function Hm(e,l,...a){if(e.isUnmounted)return;const o=e.vnode.props||qe;let s=a;const c=l.startsWith("update:"),m=c&&l.slice(7);if(m&&m in o){const g=`${m==="modelValue"?"model":m}Modifiers`,{number:p,trim:_}=o[g]||qe;_&&(s=a.map(w=>Xe(w)?w.trim():w)),p&&(s=a.map(ea))}let f,u=o[f=Ul(l)]||o[f=Ul(vt(l))];!u&&c&&(u=o[f=Ul(Lt(l))]),u&&Et(u,e,6,s);const d=o[f+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[f])return;e.emitted[f]=!0,Et(d,e,6,s)}}function Su(e,l,a=!1){const o=l.emitsCache,s=o.get(e);if(s!==void 0)return s;const c=e.emits;let m={},f=!1;if(!Ce(e)){const u=d=>{const g=Su(d,l,!0);g&&(f=!0,Ke(m,g))};!a&&l.mixins.length&&l.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!c&&!f?(je(e)&&o.set(e,null),null):(he(c)?c.forEach(u=>m[u]=null):Ke(m,c),je(e)&&o.set(e,m),m)}function un(e,l){return!e||!da(l)?!1:(l=l.slice(2).replace(/Once$/,""),ze(e,l[0].toLowerCase()+l.slice(1))||ze(e,Lt(l))||ze(e,l))}let tt=null,cn=null;function na(e){const l=tt;return tt=e,cn=e&&e.type.__scopeId||null,l}function yu(e){cn=e}function wu(){cn=null}const Nm=e=>i;function i(e,l=tt,a){if(!l||e._n)return e;const o=(...s)=>{o._d&&oo(-1);const c=na(l);let m;try{m=e(...s)}finally{na(c),o._d&&oo(1)}return m};return o._n=!0,o._c=!0,o._d=!0,o}function za(e){const{type:l,vnode:a,proxy:o,withProxy:s,props:c,propsOptions:[m],slots:f,attrs:u,emit:d,render:g,renderCache:p,data:_,setupState:w,ctx:v,inheritAttrs:x}=e;let $,L;const h=na(e);try{if(a.shapeFlag&4){const k=s||o,T=k;$=Bt(g.call(T,k,p,c,w,_,v)),L=u}else{const k=l;$=Bt(k.length>1?k(c,{attrs:u,slots:f,emit:d}):k(c,null)),L=l.props?u:qm(u)}}catch(k){Wl.length=0,Qi(k,e,1),$=t(ht)}let b=$;if(L&&x!==!1){const k=Object.keys(L),{shapeFlag:T}=b;k.length&&T&7&&(m&&k.some(Do)&&(L=Gm(L,m)),b=Kt(b,L))}return a.dirs&&(b=Kt(b),b.dirs=b.dirs?b.dirs.concat(a.dirs):a.dirs),a.transition&&(b.transition=a.transition),$=b,na(h),$}function Om(e,l=!0){let a;for(let o=0;o<e.length;o++){const s=e[o];if(xt(s)){if(s.type!==ht||s.children==="v-if"){if(a)return;a=s}}else return}return a}const qm=e=>{let l;for(const a in e)(a==="class"||a==="style"||da(a))&&((l||(l={}))[a]=e[a]);return l},Gm=(e,l)=>{const a={};for(const o in e)(!Do(o)||!(o.slice(9)in l))&&(a[o]=e[o]);return a};function jm(e,l,a){const{props:o,children:s,component:c}=e,{props:m,children:f,patchFlag:u}=l,d=c.emitsOptions;if(l.dirs||l.transition)return!0;if(a&&u>=0){if(u&1024)return!0;if(u&16)return o?Ms(o,m,d):!!m;if(u&8){const g=l.dynamicProps;for(let p=0;p<g.length;p++){const _=g[p];if(m[_]!==o[_]&&!un(d,_))return!0}}}else return(s||f)&&(!f||!f.$stable)?!0:o===m?!1:o?m?Ms(o,m,d):!0:!!m;return!1}function Ms(e,l,a){const o=Object.keys(l);if(o.length!==Object.keys(e).length)return!0;for(let s=0;s<o.length;s++){const c=o[s];if(l[c]!==e[c]&&!un(a,c))return!0}return!1}function Yo({vnode:e,parent:l},a){for(;l;){const o=l.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=l.vnode).el=a,l=l.parent;else break}}const Jo="components",Um="directives";function C(e,l){return Wo(Jo,e,!0,l)||e}const Cu=Symbol.for("v-ndc");function Au(e){return Xe(e)?Wo(Jo,e,!1)||e:e||Cu}function dn(e){return Wo(Um,e)}function Wo(e,l,a=!0,o=!1){const s=tt||nt;if(s){const c=s.type;if(e===Jo){const f=mo(c,!1);if(f&&(f===l||f===vt(l)||f===ma(vt(l))))return c}const m=Hs(s[e]||c[e],l)||Hs(s.appContext[e],l);return!m&&o?c:m}}function Hs(e,l){return e&&(e[l]||e[vt(l)]||e[ma(vt(l))])}const xu=e=>e.__isSuspense;let Zn=0;const Ym={name:"Suspense",__isSuspense:!0,process(e,l,a,o,s,c,m,f,u,d){if(e==null)Wm(l,a,o,s,c,m,f,u,d);else{if(c&&c.deps>0){l.suspense=e.suspense;return}Km(e,l,a,o,s,m,f,u,d)}},hydrate:Xm,create:Ko,normalize:Qm},Jm=Ym;function oa(e,l){const a=e.props&&e.props[l];Ce(a)&&a()}function Wm(e,l,a,o,s,c,m,f,u){const{p:d,o:{createElement:g}}=u,p=g("div"),_=e.suspense=Ko(e,s,o,l,p,a,c,m,f,u);d(null,_.pendingBranch=e.ssContent,p,null,o,_,c,m),_.deps>0?(oa(e,"onPending"),oa(e,"onFallback"),d(null,e.ssFallback,l,a,o,null,c,m),ml(_,e.ssFallback)):_.resolve(!1,!0)}function Km(e,l,a,o,s,c,m,f,{p:u,um:d,o:{createElement:g}}){const p=l.suspense=e.suspense;p.vnode=l,l.el=e.el;const _=l.ssContent,w=l.ssFallback,{activeBranch:v,pendingBranch:x,isInFallback:$,isHydrating:L}=p;if(x)p.pendingBranch=_,qt(_,x)?(u(x,_,p.hiddenContainer,null,s,p,c,m,f),p.deps<=0?p.resolve():$&&(L||(u(v,w,a,o,s,null,c,m,f),ml(p,w)))):(p.pendingId=Zn++,L?(p.isHydrating=!1,p.activeBranch=x):d(x,s,p),p.deps=0,p.effects.length=0,p.hiddenContainer=g("div"),$?(u(null,_,p.hiddenContainer,null,s,p,c,m,f),p.deps<=0?p.resolve():(u(v,w,a,o,s,null,c,m,f),ml(p,w))):v&&qt(_,v)?(u(v,_,a,o,s,p,c,m,f),p.resolve(!0)):(u(null,_,p.hiddenContainer,null,s,p,c,m,f),p.deps<=0&&p.resolve()));else if(v&&qt(_,v))u(v,_,a,o,s,p,c,m,f),ml(p,_);else if(oa(l,"onPending"),p.pendingBranch=_,_.shapeFlag&512?p.pendingId=_.component.suspenseId:p.pendingId=Zn++,u(null,_,p.hiddenContainer,null,s,p,c,m,f),p.deps<=0)p.resolve();else{const{timeout:h,pendingId:b}=p;h>0?setTimeout(()=>{p.pendingId===b&&p.fallback(w)},h):h===0&&p.fallback(w)}}function Ko(e,l,a,o,s,c,m,f,u,d,g=!1){const{p,m:_,um:w,n:v,o:{parentNode:x,remove:$}}=d;let L;const h=Zm(e);h&&l!=null&&l.pendingBranch&&(L=l.pendingId,l.deps++);const b=e.props?Ha(e.props.timeout):void 0,k=c,T={vnode:e,parent:l,parentComponent:a,namespace:m,container:o,hiddenContainer:s,deps:0,pendingId:Zn++,timeout:typeof b=="number"?b:-1,activeBranch:null,pendingBranch:null,isInFallback:!g,isHydrating:g,isUnmounted:!1,effects:[],resolve(E=!1,V=!1){const{vnode:M,activeBranch:F,pendingBranch:G,pendingId:Q,effects:Y,parentComponent:ge,container:Be}=T;let U=!1;T.isHydrating?T.isHydrating=!1:E||(U=F&&G.transition&&G.transition.mode==="out-in",U&&(F.transition.afterLeave=()=>{Q===T.pendingId&&(_(G,Be,c===k?v(F):c,0),Oa(Y))}),F&&(x(F.el)!==T.hiddenContainer&&(c=v(F)),w(F,ge,T,!0)),U||_(G,Be,c,0)),ml(T,G),T.pendingBranch=null,T.isInFallback=!1;let K=T.parent,de=!1;for(;K;){if(K.pendingBranch){K.effects.push(...Y),de=!0;break}K=K.parent}!de&&!U&&Oa(Y),T.effects=[],h&&l&&l.pendingBranch&&L===l.pendingId&&(l.deps--,l.deps===0&&!V&&l.resolve()),oa(M,"onResolve")},fallback(E){if(!T.pendingBranch)return;const{vnode:V,activeBranch:M,parentComponent:F,container:G,namespace:Q}=T;oa(V,"onFallback");const Y=v(M),ge=()=>{T.isInFallback&&(p(null,E,G,Y,F,null,Q,f,u),ml(T,E))},Be=E.transition&&E.transition.mode==="out-in";Be&&(M.transition.afterLeave=ge),T.isInFallback=!0,w(M,F,null,!0),Be||ge()},move(E,V,M){T.activeBranch&&_(T.activeBranch,E,V,M),T.container=E},next(){return T.activeBranch&&v(T.activeBranch)},registerDep(E,V){const M=!!T.pendingBranch;M&&T.deps++;const F=E.vnode.el;E.asyncDep.catch(G=>{Qi(G,E,0)}).then(G=>{if(E.isUnmounted||T.isUnmounted||T.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:Q}=E;uo(E,G,!1),F&&(Q.el=F);const Y=!F&&E.subTree.el;V(E,Q,x(F||E.subTree.el),F?null:v(E.subTree),T,m,u),Y&&$(Y),Yo(E,Q.el),M&&--T.deps===0&&T.resolve()})},unmount(E,V){T.isUnmounted=!0,T.activeBranch&&w(T.activeBranch,a,E,V),T.pendingBranch&&w(T.pendingBranch,a,E,V)}};return T}function Xm(e,l,a,o,s,c,m,f,u){const d=l.suspense=Ko(l,o,a,e.parentNode,document.createElement("div"),null,s,c,m,f,!0),g=u(e,d.pendingBranch=l.ssContent,a,d,c,m);return d.deps===0&&d.resolve(!1,!0),g}function Qm(e){const{shapeFlag:l,children:a}=e,o=l&32;e.ssContent=Ns(o?a.default:a),e.ssFallback=o?Ns(a.fallback):t(ht)}function Ns(e){let l;if(Ce(e)){const a=Ui&&e._c;a&&(e._d=!1,A()),e=e(),a&&(e._d=!0,l=wt,lc())}return he(e)&&(e=Om(e)),e=Bt(e),l&&!e.dynamicChildren&&(e.dynamicChildren=l.filter(a=>a!==e)),e}function ku(e,l){l&&l.pendingBranch?he(e)?l.effects.push(...e):l.effects.push(e):Oa(e)}function ml(e,l){e.activeBranch=l;const{vnode:a,parentComponent:o}=e;let s=l.el;for(;!s&&l.component;)l=l.component.subTree,s=l.el;a.el=s,o&&o.subTree===a&&(o.vnode.el=s,Yo(o,s))}function Zm(e){var l;return((l=e.props)==null?void 0:l.suspensible)!=null&&e.props.suspensible!==!1}const $u=Symbol.for("v-scx"),Bu=()=>Me($u);function Xo(e,l){return fa(e,null,l)}function Tu(e,l){return fa(e,null,{flush:"post"})}function Lu(e,l){return fa(e,null,{flush:"sync"})}const ka={};function gt(e,l,a){return fa(e,l,a)}function fa(e,l,{immediate:a,deep:o,flush:s,once:c,onTrack:m,onTrigger:f}=qe){if(l&&c){const E=l;l=(...V)=>{E(...V),T()}}const u=nt,d=E=>o===!0?E:Ri(E,o===!1?1:void 0);let g,p=!1,_=!1;if(mt(e)?(g=()=>e.value,p=ta(e)):Vi(e)?(g=()=>d(e),p=!0):he(e)?(_=!0,p=e.some(E=>Vi(E)||ta(E)),g=()=>e.map(E=>{if(mt(E))return E.value;if(Vi(E))return d(E);if(Ce(E))return li(E,u,2)})):Ce(e)?l?g=()=>li(e,u,2):g=()=>(w&&w(),Et(e,u,3,[v])):g=yt,l&&o){const E=g;g=()=>Ri(E())}let w,v=E=>{w=b.onStop=()=>{li(E,u,4),w=b.onStop=void 0}},x;if(ha)if(v=yt,l?a&&Et(l,u,3,[g(),_?[]:void 0,v]):g(),s==="sync"){const E=Bu();x=E.__watcherHandles||(E.__watcherHandles=[])}else return yt;let $=_?new Array(e.length).fill(ka):ka;const L=()=>{if(!(!b.active||!b.dirty))if(l){const E=b.run();(o||p||(_?E.some((V,M)=>Gt(V,$[M])):Gt(E,$)))&&(w&&w(),Et(l,u,3,[E,$===ka?void 0:_&&$[0]===ka?[]:$,v]),$=E)}else b.run()};L.allowRecurse=!!l;let h;s==="sync"?h=L:s==="post"?h=()=>ct(L,u&&u.suspense):(L.pre=!0,u&&(L.id=u.uid),h=()=>rn(L));const b=new bl(g,yt,h),k=Po(),T=()=>{b.stop(),k&&Io(k.effects,b)};return l?a?L():$=b.run():s==="post"?ct(b.run.bind(b),u&&u.suspense):b.run(),x&&x.push(T),T}function ep(e,l,a){const o=this.proxy,s=Xe(e)?e.includes(".")?Du(o,e):()=>o[e]:e.bind(o,o);let c;Ce(l)?c=l:(c=l.handler,a=l);const m=Yi(this),f=fa(s,c.bind(o),a);return m(),f}function Du(e,l){const a=l.split(".");return()=>{let o=e;for(let s=0;s<a.length&&o;s++)o=o[a[s]];return o}}function Ri(e,l,a=0,o){if(!je(e)||e.__v_skip)return e;if(l&&l>0){if(a>=l)return e;a++}if(o=o||new Set,o.has(e))return e;if(o.add(e),mt(e))Ri(e.value,l,a,o);else if(he(e))for(let s=0;s<e.length;s++)Ri(e[s],l,a,o);else if(Wi(e)||rl(e))e.forEach(s=>{Ri(s,l,a,o)});else if(Gr(e))for(const s in e)Ri(e[s],l,a,o);return e}function Si(e,l){if(tt===null)return e;const a=bn(tt)||tt.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<l.length;s++){let[c,m,f,u=qe]=l[s];c&&(Ce(c)&&(c={mounted:c,updated:c}),c.deep&&Ri(m),o.push({dir:c,instance:a,value:m,oldValue:void 0,arg:f,modifiers:u}))}return e}function Ut(e,l,a,o){const s=e.dirs,c=l&&l.dirs;for(let m=0;m<s.length;m++){const f=s[m];c&&(f.oldValue=c[m].value);let u=f.dir[o];u&&(Ki(),Et(u,a,8,[e.el,f,e,l]),Xi())}}const gi=Symbol("_leaveCb"),$a=Symbol("_enterCb");function Qo(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xi(()=>{e.isMounted=!0}),gn(()=>{e.isUnmounting=!0}),e}const Ft=[Function,Array],Zo={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ft,onEnter:Ft,onAfterEnter:Ft,onEnterCancelled:Ft,onBeforeLeave:Ft,onLeave:Ft,onAfterLeave:Ft,onLeaveCancelled:Ft,onBeforeAppear:Ft,onAppear:Ft,onAfterAppear:Ft,onAppearCancelled:Ft},tp={name:"BaseTransition",props:Zo,setup(e,{slots:l}){const a=Xt(),o=Qo();let s;return()=>{const c=l.default&&mn(l.default(),!0);if(!c||!c.length)return;let m=c[0];if(c.length>1){for(const x of c)if(x.type!==ht){m=x;break}}const f=Ee(e),{mode:u}=f;if(o.isLeaving)return kn(m);const d=Os(m);if(!d)return kn(m);const g=vl(d,f,o,a);qi(d,g);const p=a.subTree,_=p&&Os(p);let w=!1;const{getTransitionKey:v}=d.type;if(v){const x=v();s===void 0?s=x:x!==s&&(s=x,w=!0)}if(_&&_.type!==ht&&(!qt(d,_)||w)){const x=vl(_,f,o,a);if(qi(_,x),u==="out-in")return o.isLeaving=!0,x.afterLeave=()=>{o.isLeaving=!1,a.update.active!==!1&&(a.effect.dirty=!0,a.update())},kn(m);u==="in-out"&&d.type!==ht&&(x.delayLeave=($,L,h)=>{const b=Eu(o,_);b[String(_.key)]=_,$[gi]=()=>{L(),$[gi]=void 0,delete g.delayedLeave},g.delayedLeave=h})}return m}}},Iu=tp;function Eu(e,l){const{leavingVNodes:a}=e;let o=a.get(l.type);return o||(o=Object.create(null),a.set(l.type,o)),o}function vl(e,l,a,o){const{appear:s,mode:c,persisted:m=!1,onBeforeEnter:f,onEnter:u,onAfterEnter:d,onEnterCancelled:g,onBeforeLeave:p,onLeave:_,onAfterLeave:w,onLeaveCancelled:v,onBeforeAppear:x,onAppear:$,onAfterAppear:L,onAppearCancelled:h}=l,b=String(e.key),k=Eu(a,e),T=(M,F)=>{M&&Et(M,o,9,F)},E=(M,F)=>{const G=F[1];T(M,F),he(M)?M.every(Q=>Q.length<=1)&&G():M.length<=1&&G()},V={mode:c,persisted:m,beforeEnter(M){let F=f;if(!a.isMounted)if(s)F=x||f;else return;M[gi]&&M[gi](!0);const G=k[b];G&&qt(e,G)&&G.el[gi]&&G.el[gi](),T(F,[M])},enter(M){let F=u,G=d,Q=g;if(!a.isMounted)if(s)F=$||u,G=L||d,Q=h||g;else return;let Y=!1;const ge=M[$a]=Be=>{Y||(Y=!0,Be?T(Q,[M]):T(G,[M]),V.delayedLeave&&V.delayedLeave(),M[$a]=void 0)};F?E(F,[M,ge]):ge()},leave(M,F){const G=String(e.key);if(M[$a]&&M[$a](!0),a.isUnmounting)return F();T(p,[M]);let Q=!1;const Y=M[gi]=ge=>{Q||(Q=!0,F(),ge?T(v,[M]):T(w,[M]),M[gi]=void 0,k[G]===e&&delete k[G])};k[G]=e,_?E(_,[M,Y]):Y()},clone(M){return vl(M,l,a,o)}};return V}function kn(e){if(ga(e))return e=Kt(e),e.children=null,e}function Os(e){return ga(e)?e.children?e.children[0]:void 0:e}function qi(e,l){e.shapeFlag&6&&e.component?qi(e.component.subTree,l):e.shapeFlag&128?(e.ssContent.transition=l.clone(e.ssContent),e.ssFallback.transition=l.clone(e.ssFallback)):e.transition=l}function mn(e,l=!1,a){let o=[],s=0;for(let c=0;c<e.length;c++){let m=e[c];const f=a==null?m.key:String(a)+String(m.key!=null?m.key:c);m.type===Ae?(m.patchFlag&128&&s++,o=o.concat(mn(m.children,l,f))):(l||m.type!==ht)&&o.push(f!=null?Kt(m,{key:f}):m)}if(s>1)for(let c=0;c<o.length;c++)o[c].patchFlag=-2;return o}/*! #__NO_SIDE_EFFECTS__ */function P(e,l){return Ce(e)?Ke({name:e.name},l,{setup:e}):e}const Mi=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function ip(e){Ce(e)&&(e={loader:e});const{loader:l,loadingComponent:a,errorComponent:o,delay:s=200,timeout:c,suspensible:m=!0,onError:f}=e;let u=null,d,g=0;const p=()=>(g++,u=null,_()),_=()=>{let w;return u||(w=u=l().catch(v=>{if(v=v instanceof Error?v:new Error(String(v)),f)return new Promise((x,$)=>{f(v,()=>x(p()),()=>$(v),g+1)});throw v}).then(v=>w!==u&&u?u:(v&&(v.__esModule||v[Symbol.toStringTag]==="Module")&&(v=v.default),d=v,v)))};return P({name:"AsyncComponentWrapper",__asyncLoader:_,get __asyncResolved(){return d},setup(){const w=nt;if(d)return()=>$n(d,w);const v=h=>{u=null,Qi(h,w,13,!o)};if(m&&w.suspense||ha)return _().then(h=>()=>$n(h,w)).catch(h=>(v(h),()=>o?t(o,{error:h}):null));const x=j(!1),$=j(),L=j(!!s);return s&&setTimeout(()=>{L.value=!1},s),c!=null&&setTimeout(()=>{if(!x.value&&!$.value){const h=new Error(`Async component timed out after ${c}ms.`);v(h),$.value=h}},c),_().then(()=>{x.value=!0,w.parent&&ga(w.parent.vnode)&&(w.parent.effect.dirty=!0,rn(w.parent.update))}).catch(h=>{v(h),$.value=h}),()=>{if(x.value&&d)return $n(d,w);if($.value&&o)return t(o,{error:$.value});if(a&&!L.value)return t(a)}}})}function $n(e,l){const{ref:a,props:o,children:s,ce:c}=l.vnode,m=t(e,o,s);return m.ref=a,m.ce=c,delete l.vnode.ce,m}const ga=e=>e.type.__isKeepAlive,lp={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:l}){const a=Xt(),o=a.ctx;if(!o.renderer)return()=>{const h=l.default&&l.default();return h&&h.length===1?h[0]:h};const s=new Map,c=new Set;let m=null;const f=a.suspense,{renderer:{p:u,m:d,um:g,o:{createElement:p}}}=o,_=p("div");o.activate=(h,b,k,T,E)=>{const V=h.component;d(h,b,k,0,f),u(V.vnode,h,b,k,V,f,T,h.slotScopeIds,E),ct(()=>{V.isDeactivated=!1,V.a&&ul(V.a);const M=h.props&&h.props.onVnodeMounted;M&&St(M,V.parent,h)},f)},o.deactivate=h=>{const b=h.component;d(h,_,null,1,f),ct(()=>{b.da&&ul(b.da);const k=h.props&&h.props.onVnodeUnmounted;k&&St(k,b.parent,h),b.isDeactivated=!0},f)};function w(h){Bn(h),g(h,a,f,!0)}function v(h){s.forEach((b,k)=>{const T=mo(b.type);T&&(!h||!h(T))&&x(k)})}function x(h){const b=s.get(h);!m||!qt(b,m)?w(b):m&&Bn(m),s.delete(h),c.delete(h)}gt(()=>[e.include,e.exclude],([h,b])=>{h&&v(k=>Ml(h,k)),b&&v(k=>!Ml(b,k))},{flush:"post",deep:!0});let $=null;const L=()=>{$!=null&&s.set($,Tn(a.subTree))};return xi(L),fn(L),gn(()=>{s.forEach(h=>{const{subTree:b,suspense:k}=a,T=Tn(b);if(h.type===T.type&&h.key===T.key){Bn(T);const E=T.component.da;E&&ct(E,k);return}w(h)})}),()=>{if($=null,!l.default)return null;const h=l.default(),b=h[0];if(h.length>1)return m=null,h;if(!xt(b)||!(b.shapeFlag&4)&&!(b.shapeFlag&128))return m=null,b;let k=Tn(b);const T=k.type,E=mo(Mi(k)?k.type.__asyncResolved||{}:T),{include:V,exclude:M,max:F}=e;if(V&&(!E||!Ml(V,E))||M&&E&&Ml(M,E))return m=k,b;const G=k.key==null?T:k.key,Q=s.get(G);return k.el&&(k=Kt(k),b.shapeFlag&128&&(b.ssContent=k)),$=G,Q?(k.el=Q.el,k.component=Q.component,k.transition&&qi(k,k.transition),k.shapeFlag|=512,c.delete(G),c.add(G)):(c.add(G),F&&c.size>parseInt(F,10)&&x(c.values().next().value)),k.shapeFlag|=256,m=k,xu(b.type)?b:k}}},ap=lp;function Ml(e,l){return he(e)?e.some(a=>Ml(a,l)):Xe(e)?e.split(",").includes(l):Vd(e)?e.test(l):!1}function es(e,l){Ru(e,"a",l)}function ts(e,l){Ru(e,"da",l)}function Ru(e,l,a=nt){const o=e.__wdc||(e.__wdc=()=>{let s=a;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(pn(l,o,a),a){let s=a.parent;for(;s&&s.parent;)ga(s.parent.vnode)&&np(o,l,a,s),s=s.parent}}function np(e,l,a,o){const s=pn(l,e,o,!0);Zi(()=>{Io(o[l],s)},a)}function Bn(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Tn(e){return e.shapeFlag&128?e.ssContent:e}function pn(e,l,a=nt,o=!1){if(a){const s=a[e]||(a[e]=[]),c=l.__weh||(l.__weh=(...m)=>{if(a.isUnmounted)return;Ki();const f=Yi(a),u=Et(l,a,e,m);return f(),Xi(),u});return o?s.unshift(c):s.push(c),c}}const si=e=>(l,a=nt)=>(!ha||e==="sp")&&pn(e,(...o)=>l(...o),a),zu=si("bm"),xi=si("m"),Pu=si("bu"),fn=si("u"),gn=si("bum"),Zi=si("um"),Fu=si("sp"),Vu=si("rtg"),Mu=si("rtc");function Hu(e,l=nt){pn("ec",e,l)}function Qe(e,l,a,o){let s;const c=a&&a[o];if(he(e)||Xe(e)){s=new Array(e.length);for(let m=0,f=e.length;m<f;m++)s[m]=l(e[m],m,void 0,c&&c[m])}else if(typeof e=="number"){s=new Array(e);for(let m=0;m<e;m++)s[m]=l(m+1,m,void 0,c&&c[m])}else if(je(e))if(e[Symbol.iterator])s=Array.from(e,(m,f)=>l(m,f,void 0,c&&c[f]));else{const m=Object.keys(e);s=new Array(m.length);for(let f=0,u=m.length;f<u;f++){const d=m[f];s[f]=l(e[d],d,f,c&&c[f])}}else s=[];return a&&(a[o]=s),s}function op(e,l){for(let a=0;a<l.length;a++){const o=l[a];if(he(o))for(let s=0;s<o.length;s++)e[o[s].name]=o[s].fn;else o&&(e[o.name]=o.key?(...s)=>{const c=o.fn(...s);return c&&(c.key=o.key),c}:o.fn)}return e}function Gi(e,l,a={},o,s){if(tt.isCE||tt.parent&&Mi(tt.parent)&&tt.parent.isCE)return l!=="default"&&(a.name=l),t("slot",a,o&&o());let c=e[l];c&&c._c&&(c._d=!1),A();const m=c&&Nu(c(a)),f=B(Ae,{key:a.key||m&&m.key||`_${l}`},m||(o?o():[]),m&&e._===1?64:-2);return!s&&f.scopeId&&(f.slotScopeIds=[f.scopeId+"-s"]),c&&c._c&&(c._d=!0),f}function Nu(e){return e.some(l=>xt(l)?!(l.type===ht||l.type===Ae&&!Nu(l.children)):!0)?e:null}function sp(e,l){const a={};for(const o in e)a[l&&/[A-Z]/.test(o)?`on:${o}`:Ul(o)]=e[o];return a}const eo=e=>e?rc(e)?bn(e)||e.proxy:eo(e.parent):null,Yl=Ke(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>eo(e.parent),$root:e=>eo(e.root),$emit:e=>e.emit,$options:e=>is(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,rn(e.update)}),$nextTick:e=>e.n||(e.n=$l.bind(e.proxy)),$watch:e=>ep.bind(e)}),Ln=(e,l)=>e!==qe&&!e.__isScriptSetup&&ze(e,l),to={get({_:e},l){const{ctx:a,setupState:o,data:s,props:c,accessCache:m,type:f,appContext:u}=e;let d;if(l[0]!=="$"){const w=m[l];if(w!==void 0)switch(w){case 1:return o[l];case 2:return s[l];case 4:return a[l];case 3:return c[l]}else{if(Ln(o,l))return m[l]=1,o[l];if(s!==qe&&ze(s,l))return m[l]=2,s[l];if((d=e.propsOptions[0])&&ze(d,l))return m[l]=3,c[l];if(a!==qe&&ze(a,l))return m[l]=4,a[l];io&&(m[l]=0)}}const g=Yl[l];let p,_;if(g)return l==="$attrs"&&At(e,"get",l),g(e);if((p=f.__cssModules)&&(p=p[l]))return p;if(a!==qe&&ze(a,l))return m[l]=4,a[l];if(_=u.config.globalProperties,ze(_,l))return _[l]},set({_:e},l,a){const{data:o,setupState:s,ctx:c}=e;return Ln(s,l)?(s[l]=a,!0):o!==qe&&ze(o,l)?(o[l]=a,!0):ze(e.props,l)||l[0]==="$"&&l.slice(1)in e?!1:(c[l]=a,!0)},has({_:{data:e,setupState:l,accessCache:a,ctx:o,appContext:s,propsOptions:c}},m){let f;return!!a[m]||e!==qe&&ze(e,m)||Ln(l,m)||(f=c[0])&&ze(f,m)||ze(o,m)||ze(Yl,m)||ze(s.config.globalProperties,m)},defineProperty(e,l,a){return a.get!=null?e._.accessCache[l]=0:ze(a,"value")&&this.set(e,l,a.value,null),Reflect.defineProperty(e,l,a)}},rp=Ke({},to,{get(e,l){if(l!==Symbol.unscopables)return to.get(e,l,e)},has(e,l){return l[0]!=="_"&&!qd(l)}});function up(){return null}function cp(){return null}function dp(e){}function mp(e){}function pp(){return null}function fp(){}function gp(e,l){return null}function hp(){return qu().slots}function Ou(){return qu().attrs}function qu(){const e=Xt();return e.setupContext||(e.setupContext=dc(e))}function sa(e){return he(e)?e.reduce((l,a)=>(l[a]=null,l),{}):e}function _p(e,l){const a=sa(e);for(const o in l){if(o.startsWith("__skip"))continue;let s=a[o];s?he(s)||Ce(s)?s=a[o]={type:s,default:l[o]}:s.default=l[o]:s===null&&(s=a[o]={default:l[o]}),s&&l[`__skip_${o}`]&&(s.skipFactory=!0)}return a}function bp(e,l){return!e||!l?e||l:he(e)&&he(l)?e.concat(l):Ke({},sa(e),sa(l))}function vp(e,l){const a={};for(const o in e)l.includes(o)||Object.defineProperty(a,o,{enumerable:!0,get:()=>e[o]});return a}function Sp(e){const l=Xt();let a=e();return ro(),Eo(a)&&(a=a.catch(o=>{throw Yi(l),o})),[a,()=>Yi(l)]}let io=!0;function yp(e){const l=is(e),a=e.proxy,o=e.ctx;io=!1,l.beforeCreate&&qs(l.beforeCreate,e,"bc");const{data:s,computed:c,methods:m,watch:f,provide:u,inject:d,created:g,beforeMount:p,mounted:_,beforeUpdate:w,updated:v,activated:x,deactivated:$,beforeDestroy:L,beforeUnmount:h,destroyed:b,unmounted:k,render:T,renderTracked:E,renderTriggered:V,errorCaptured:M,serverPrefetch:F,expose:G,inheritAttrs:Q,components:Y,directives:ge,filters:Be}=l;if(d&&wp(d,o,null),m)for(const de in m){const le=m[de];Ce(le)&&(o[de]=le.bind(a))}if(s){const de=s.call(a,a);je(de)&&(e.data=oi(de))}if(io=!0,c)for(const de in c){const le=c[de],Le=Ce(le)?le.bind(a,a):Ce(le.get)?le.get.bind(a,a):yt,Je=!Ce(le)&&Ce(le.set)?le.set.bind(a):yt,ot=H({get:Le,set:Je});Object.defineProperty(o,de,{enumerable:!0,configurable:!0,get:()=>ot.value,set:Ue=>ot.value=Ue})}if(f)for(const de in f)Gu(f[de],o,a,de);if(u){const de=Ce(u)?u.call(a):u;Reflect.ownKeys(de).forEach(le=>{dt(le,de[le])})}g&&qs(g,e,"c");function K(de,le){he(le)?le.forEach(Le=>de(Le.bind(a))):le&&de(le.bind(a))}if(K(zu,p),K(xi,_),K(Pu,w),K(fn,v),K(es,x),K(ts,$),K(Hu,M),K(Mu,E),K(Vu,V),K(gn,h),K(Zi,k),K(Fu,F),he(G))if(G.length){const de=e.exposed||(e.exposed={});G.forEach(le=>{Object.defineProperty(de,le,{get:()=>a[le],set:Le=>a[le]=Le})})}else e.exposed||(e.exposed={});T&&e.render===yt&&(e.render=T),Q!=null&&(e.inheritAttrs=Q),Y&&(e.components=Y),ge&&(e.directives=ge)}function wp(e,l,a=yt){he(e)&&(e=lo(e));for(const o in e){const s=e[o];let c;je(s)?"default"in s?c=Me(s.from||o,s.default,!0):c=Me(s.from||o):c=Me(s),mt(c)?Object.defineProperty(l,o,{enumerable:!0,configurable:!0,get:()=>c.value,set:m=>c.value=m}):l[o]=c}}function qs(e,l,a){Et(he(e)?e.map(o=>o.bind(l.proxy)):e.bind(l.proxy),l,a)}function Gu(e,l,a,o){const s=o.includes(".")?Du(a,o):()=>a[o];if(Xe(e)){const c=l[e];Ce(c)&&gt(s,c)}else if(Ce(e))gt(s,e.bind(a));else if(je(e))if(he(e))e.forEach(c=>Gu(c,l,a,o));else{const c=Ce(e.handler)?e.handler.bind(a):l[e.handler];Ce(c)&&gt(s,c,e)}}function is(e){const l=e.type,{mixins:a,extends:o}=l,{mixins:s,optionsCache:c,config:{optionMergeStrategies:m}}=e.appContext,f=c.get(l);let u;return f?u=f:!s.length&&!a&&!o?u=l:(u={},s.length&&s.forEach(d=>Ga(u,d,m,!0)),Ga(u,l,m)),je(l)&&c.set(l,u),u}function Ga(e,l,a,o=!1){const{mixins:s,extends:c}=l;c&&Ga(e,c,a,!0),s&&s.forEach(m=>Ga(e,m,a,!0));for(const m in l)if(!(o&&m==="expose")){const f=Cp[m]||a&&a[m];e[m]=f?f(e[m],l[m]):l[m]}return e}const Cp={data:Gs,props:js,emits:js,methods:Hl,computed:Hl,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:Hl,directives:Hl,watch:xp,provide:Gs,inject:Ap};function Gs(e,l){return l?e?function(){return Ke(Ce(e)?e.call(this,this):e,Ce(l)?l.call(this,this):l)}:l:e}function Ap(e,l){return Hl(lo(e),lo(l))}function lo(e){if(he(e)){const l={};for(let a=0;a<e.length;a++)l[e[a]]=e[a];return l}return e}function bt(e,l){return e?[...new Set([].concat(e,l))]:l}function Hl(e,l){return e?Ke(Object.create(null),e,l):l}function js(e,l){return e?he(e)&&he(l)?[...new Set([...e,...l])]:Ke(Object.create(null),sa(e),sa(l??{})):l}function xp(e,l){if(!e)return l;if(!l)return e;const a=Ke(Object.create(null),e);for(const o in l)a[o]=bt(e[o],l[o]);return a}function ju(){return{app:null,config:{isNativeTag:Pd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kp=0;function $p(e,l){return function(o,s=null){Ce(o)||(o=Ke({},o)),s!=null&&!je(s)&&(s=null);const c=ju(),m=new WeakSet;let f=!1;const u=c.app={_uid:kp++,_component:o,_props:s,_container:null,_context:c,_instance:null,version:pc,get config(){return c.config},set config(d){},use(d,...g){return m.has(d)||(d&&Ce(d.install)?(m.add(d),d.install(u,...g)):Ce(d)&&(m.add(d),d(u,...g))),u},mixin(d){return c.mixins.includes(d)||c.mixins.push(d),u},component(d,g){return g?(c.components[d]=g,u):c.components[d]},directive(d,g){return g?(c.directives[d]=g,u):c.directives[d]},mount(d,g,p){if(!f){const _=t(o,s);return _.appContext=c,p===!0?p="svg":p===!1&&(p=void 0),g&&l?l(_,d):e(_,d,p),f=!0,u._container=d,d.__vue_app__=u,bn(_.component)||_.component.proxy}},unmount(){f&&(e(null,u._container),delete u._container.__vue_app__)},provide(d,g){return c.provides[d]=g,u},runWithContext(d){ra=u;try{return d()}finally{ra=null}}};return u}}let ra=null;function dt(e,l){if(nt){let a=nt.provides;const o=nt.parent&&nt.parent.provides;o===a&&(a=nt.provides=Object.create(o)),a[e]=l}}function Me(e,l,a=!1){const o=nt||tt;if(o||ra){const s=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:ra._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return a&&Ce(l)?l.call(o&&o.proxy):l}}function Bp(){return!!(nt||tt||ra)}function Tp(e,l,a,o=!1){const s={},c={};Ma(c,_n,1),e.propsDefaults=Object.create(null),Uu(e,l,s,c);for(const m in e.propsOptions[0])m in s||(s[m]=void 0);a?e.props=o?s:cu(s):e.type.props?e.props=s:e.props=c,e.attrs=c}function Lp(e,l,a,o){const{props:s,attrs:c,vnode:{patchFlag:m}}=e,f=Ee(s),[u]=e.propsOptions;let d=!1;if((o||m>0)&&!(m&16)){if(m&8){const g=e.vnode.dynamicProps;for(let p=0;p<g.length;p++){let _=g[p];if(un(e.emitsOptions,_))continue;const w=l[_];if(u)if(ze(c,_))w!==c[_]&&(c[_]=w,d=!0);else{const v=vt(_);s[v]=ao(u,f,v,w,e,!1)}else w!==c[_]&&(c[_]=w,d=!0)}}}else{Uu(e,l,s,c)&&(d=!0);let g;for(const p in f)(!l||!ze(l,p)&&((g=Lt(p))===p||!ze(l,g)))&&(u?a&&(a[p]!==void 0||a[g]!==void 0)&&(s[p]=ao(u,f,p,void 0,e,!0)):delete s[p]);if(c!==f)for(const p in c)(!l||!ze(l,p))&&(delete c[p],d=!0)}d&&ii(e,"set","$attrs")}function Uu(e,l,a,o){const[s,c]=e.propsOptions;let m=!1,f;if(l)for(let u in l){if(jl(u))continue;const d=l[u];let g;s&&ze(s,g=vt(u))?!c||!c.includes(g)?a[g]=d:(f||(f={}))[g]=d:un(e.emitsOptions,u)||(!(u in o)||d!==o[u])&&(o[u]=d,m=!0)}if(c){const u=Ee(a),d=f||qe;for(let g=0;g<c.length;g++){const p=c[g];a[p]=ao(s,u,p,d[p],e,!ze(d,p))}}return m}function ao(e,l,a,o,s,c){const m=e[a];if(m!=null){const f=ze(m,"default");if(f&&o===void 0){const u=m.default;if(m.type!==Function&&!m.skipFactory&&Ce(u)){const{propsDefaults:d}=s;if(a in d)o=d[a];else{const g=Yi(s);o=d[a]=u.call(null,l),g()}}else o=u}m[0]&&(c&&!f?o=!1:m[1]&&(o===""||o===Lt(a))&&(o=!0))}return o}function Yu(e,l,a=!1){const o=l.propsCache,s=o.get(e);if(s)return s;const c=e.props,m={},f=[];let u=!1;if(!Ce(e)){const g=p=>{u=!0;const[_,w]=Yu(p,l,!0);Ke(m,_),w&&f.push(...w)};!a&&l.mixins.length&&l.mixins.forEach(g),e.extends&&g(e.extends),e.mixins&&e.mixins.forEach(g)}if(!c&&!u)return je(e)&&o.set(e,sl),sl;if(he(c))for(let g=0;g<c.length;g++){const p=vt(c[g]);Us(p)&&(m[p]=qe)}else if(c)for(const g in c){const p=vt(g);if(Us(p)){const _=c[g],w=m[p]=he(_)||Ce(_)?{type:_}:Ke({},_);if(w){const v=Ws(Boolean,w.type),x=Ws(String,w.type);w[0]=v>-1,w[1]=x<0||v<x,(v>-1||ze(w,"default"))&&f.push(p)}}}const d=[m,f];return je(e)&&o.set(e,d),d}function Us(e){return e[0]!=="$"}function Ys(e){const l=e&&e.toString().match(/^\s*(function|class) (\w+)/);return l?l[2]:e===null?"null":""}function Js(e,l){return Ys(e)===Ys(l)}function Ws(e,l){return he(l)?l.findIndex(a=>Js(a,e)):Ce(l)&&Js(l,e)?0:-1}const Ju=e=>e[0]==="_"||e==="$stable",ls=e=>he(e)?e.map(Bt):[Bt(e)],Dp=(e,l,a)=>{if(l._n)return l;const o=i((...s)=>ls(l(...s)),a);return o._c=!1,o},Wu=(e,l,a)=>{const o=e._ctx;for(const s in e){if(Ju(s))continue;const c=e[s];if(Ce(c))l[s]=Dp(s,c,o);else if(c!=null){const m=ls(c);l[s]=()=>m}}},Ku=(e,l)=>{const a=ls(l);e.slots.default=()=>a},Ip=(e,l)=>{if(e.vnode.shapeFlag&32){const a=l._;a?(e.slots=Ee(l),Ma(l,"_",a)):Wu(l,e.slots={})}else e.slots={},l&&Ku(e,l);Ma(e.slots,_n,1)},Ep=(e,l,a)=>{const{vnode:o,slots:s}=e;let c=!0,m=qe;if(o.shapeFlag&32){const f=l._;f?a&&f===1?c=!1:(Ke(s,l),!a&&f===1&&delete s._):(c=!l.$stable,Wu(l,s)),m=l}else l&&(Ku(e,l),m={default:1});if(c)for(const f in s)!Ju(f)&&m[f]==null&&delete s[f]};function ja(e,l,a,o,s=!1){if(he(e)){e.forEach((_,w)=>ja(_,l&&(he(l)?l[w]:l),a,o,s));return}if(Mi(o)&&!s)return;const c=o.shapeFlag&4?bn(o.component)||o.component.proxy:o.el,m=s?null:c,{i:f,r:u}=e,d=l&&l.r,g=f.refs===qe?f.refs={}:f.refs,p=f.setupState;if(d!=null&&d!==u&&(Xe(d)?(g[d]=null,ze(p,d)&&(p[d]=null)):mt(d)&&(d.value=null)),Ce(u))li(u,f,12,[m,g]);else{const _=Xe(u),w=mt(u),v=e.f;if(_||w){const x=()=>{if(v){const $=_?ze(p,u)?p[u]:g[u]:u.value;s?he($)&&Io($,c):he($)?$.includes(c)||$.push(c):_?(g[u]=[c],ze(p,u)&&(p[u]=g[u])):(u.value=[c],e.k&&(g[e.k]=u.value))}else _?(g[u]=m,ze(p,u)&&(p[u]=m)):w&&(u.value=m,e.k&&(g[e.k]=m))};s||v?x():(x.id=-1,ct(x,a))}}}let ci=!1;const Rp=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",zp=e=>e.namespaceURI.includes("MathML"),Ba=e=>{if(Rp(e))return"svg";if(zp(e))return"mathml"},Ta=e=>e.nodeType===8;function Pp(e){const{mt:l,p:a,o:{patchProp:o,createText:s,nextSibling:c,parentNode:m,remove:f,insert:u,createComment:d}}=e,g=(b,k)=>{if(!k.hasChildNodes()){a(null,b,k),qa(),k._vnode=b;return}ci=!1,p(k.firstChild,b,null,null,null),qa(),k._vnode=b,ci&&console.error("Hydration completed but contains mismatches.")},p=(b,k,T,E,V,M=!1)=>{const F=Ta(b)&&b.data==="[",G=()=>x(b,k,T,E,V,F),{type:Q,ref:Y,shapeFlag:ge,patchFlag:Be}=k;let U=b.nodeType;k.el=b,Be===-2&&(M=!1,k.dynamicChildren=null);let K=null;switch(Q){case ji:U!==3?k.children===""?(u(k.el=s(""),m(b),b),K=b):K=G():(b.data!==k.children&&(ci=!0,b.data=k.children),K=c(b));break;case ht:h(b)?(K=c(b),L(k.el=b.content.firstChild,b,T)):U!==8||F?K=G():K=c(b);break;case Hi:if(F&&(b=c(b),U=b.nodeType),U===1||U===3){K=b;const de=!k.children.length;for(let le=0;le<k.staticCount;le++)de&&(k.children+=K.nodeType===1?K.outerHTML:K.data),le===k.staticCount-1&&(k.anchor=K),K=c(K);return F?c(K):K}else G();break;case Ae:F?K=v(b,k,T,E,V,M):K=G();break;default:if(ge&1)(U!==1||k.type.toLowerCase()!==b.tagName.toLowerCase())&&!h(b)?K=G():K=_(b,k,T,E,V,M);else if(ge&6){k.slotScopeIds=V;const de=m(b);if(F?K=$(b):Ta(b)&&b.data==="teleport start"?K=$(b,b.data,"teleport end"):K=c(b),l(k,de,null,T,E,Ba(de),M),Mi(k)){let le;F?(le=t(Ae),le.anchor=K?K.previousSibling:de.lastChild):le=b.nodeType===3?n(""):t("div"),le.el=b,k.component.subTree=le}}else ge&64?U!==8?K=G():K=k.type.hydrate(b,k,T,E,V,M,e,w):ge&128&&(K=k.type.hydrate(b,k,T,E,Ba(m(b)),V,M,e,p))}return Y!=null&&ja(Y,null,E,k),K},_=(b,k,T,E,V,M)=>{M=M||!!k.dynamicChildren;const{type:F,props:G,patchFlag:Q,shapeFlag:Y,dirs:ge,transition:Be}=k,U=F==="input"||F==="option";if(U||Q!==-1){ge&&Ut(k,null,T,"created");let K=!1;if(h(b)){K=ec(E,Be)&&T&&T.vnode.props&&T.vnode.props.appear;const le=b.content.firstChild;K&&Be.beforeEnter(le),L(le,b,T),k.el=b=le}if(Y&16&&!(G&&(G.innerHTML||G.textContent))){let le=w(b.firstChild,k,b,T,E,V,M);for(;le;){ci=!0;const Le=le;le=le.nextSibling,f(Le)}}else Y&8&&b.textContent!==k.children&&(ci=!0,b.textContent=k.children);if(G)if(U||!M||Q&48)for(const le in G)(U&&(le.endsWith("value")||le==="indeterminate")||da(le)&&!jl(le)||le[0]===".")&&o(b,le,null,G[le],void 0,void 0,T);else G.onClick&&o(b,"onClick",null,G.onClick,void 0,void 0,T);let de;(de=G&&G.onVnodeBeforeMount)&&St(de,T,k),ge&&Ut(k,null,T,"beforeMount"),((de=G&&G.onVnodeMounted)||ge||K)&&ku(()=>{de&&St(de,T,k),K&&Be.enter(b),ge&&Ut(k,null,T,"mounted")},E)}return b.nextSibling},w=(b,k,T,E,V,M,F)=>{F=F||!!k.dynamicChildren;const G=k.children,Q=G.length;for(let Y=0;Y<Q;Y++){const ge=F?G[Y]:G[Y]=Bt(G[Y]);if(b)b=p(b,ge,E,V,M,F);else{if(ge.type===ji&&!ge.children)continue;ci=!0,a(null,ge,T,null,E,V,Ba(T),M)}}return b},v=(b,k,T,E,V,M)=>{const{slotScopeIds:F}=k;F&&(V=V?V.concat(F):F);const G=m(b),Q=w(c(b),k,G,T,E,V,M);return Q&&Ta(Q)&&Q.data==="]"?c(k.anchor=Q):(ci=!0,u(k.anchor=d("]"),G,Q),Q)},x=(b,k,T,E,V,M)=>{if(ci=!0,k.el=null,M){const Q=$(b);for(;;){const Y=c(b);if(Y&&Y!==Q)f(Y);else break}}const F=c(b),G=m(b);return f(b),a(null,k,G,F,T,E,Ba(G),V),F},$=(b,k="[",T="]")=>{let E=0;for(;b;)if(b=c(b),b&&Ta(b)&&(b.data===k&&E++,b.data===T)){if(E===0)return c(b);E--}return b},L=(b,k,T)=>{const E=k.parentNode;E&&E.replaceChild(b,k);let V=T;for(;V;)V.vnode.el===k&&(V.vnode.el=V.subTree.el=b),V=V.parent},h=b=>b.nodeType===1&&b.tagName.toLowerCase()==="template";return[g,p]}const ct=ku;function Xu(e){return Zu(e)}function Qu(e){return Zu(e,Pp)}function Zu(e,l){const a=jr();a.__VUE__=!0;const{insert:o,remove:s,patchProp:c,createElement:m,createText:f,createComment:u,setText:d,setElementText:g,parentNode:p,nextSibling:_,setScopeId:w=yt,insertStaticContent:v}=e,x=(D,R,q,Z=null,ee=null,ne=null,ce=void 0,ae=null,se=!!R.dynamicChildren)=>{if(D===R)return;D&&!qt(D,R)&&(Z=re(D),Ue(D,ee,ne,!0),D=null),R.patchFlag===-2&&(se=!1,R.dynamicChildren=null);const{type:ie,ref:me,shapeFlag:ye}=R;switch(ie){case ji:$(D,R,q,Z);break;case ht:L(D,R,q,Z);break;case Hi:D==null&&h(R,q,Z,ce);break;case Ae:Y(D,R,q,Z,ee,ne,ce,ae,se);break;default:ye&1?T(D,R,q,Z,ee,ne,ce,ae,se):ye&6?ge(D,R,q,Z,ee,ne,ce,ae,se):(ye&64||ye&128)&&ie.process(D,R,q,Z,ee,ne,ce,ae,se,Ne)}me!=null&&ee&&ja(me,D&&D.ref,ne,R||D,!R)},$=(D,R,q,Z)=>{if(D==null)o(R.el=f(R.children),q,Z);else{const ee=R.el=D.el;R.children!==D.children&&d(ee,R.children)}},L=(D,R,q,Z)=>{D==null?o(R.el=u(R.children||""),q,Z):R.el=D.el},h=(D,R,q,Z)=>{[D.el,D.anchor]=v(D.children,R,q,Z,D.el,D.anchor)},b=({el:D,anchor:R},q,Z)=>{let ee;for(;D&&D!==R;)ee=_(D),o(D,q,Z),D=ee;o(R,q,Z)},k=({el:D,anchor:R})=>{let q;for(;D&&D!==R;)q=_(D),s(D),D=q;s(R)},T=(D,R,q,Z,ee,ne,ce,ae,se)=>{R.type==="svg"?ce="svg":R.type==="math"&&(ce="mathml"),D==null?E(R,q,Z,ee,ne,ce,ae,se):F(D,R,ee,ne,ce,ae,se)},E=(D,R,q,Z,ee,ne,ce,ae)=>{let se,ie;const{props:me,shapeFlag:ye,transition:Se,dirs:xe}=D;if(se=D.el=m(D.type,ne,me&&me.is,me),ye&8?g(se,D.children):ye&16&&M(D.children,se,null,Z,ee,Dn(D,ne),ce,ae),xe&&Ut(D,null,Z,"created"),V(se,D,D.scopeId,ce,Z),me){for(const Ge in me)Ge!=="value"&&!jl(Ge)&&c(se,Ge,null,me[Ge],ne,D.children,Z,ee,ue);"value"in me&&c(se,"value",null,me.value,ne),(ie=me.onVnodeBeforeMount)&&St(ie,Z,D)}xe&&Ut(D,null,Z,"beforeMount");const De=ec(ee,Se);De&&Se.beforeEnter(se),o(se,R,q),((ie=me&&me.onVnodeMounted)||De||xe)&&ct(()=>{ie&&St(ie,Z,D),De&&Se.enter(se),xe&&Ut(D,null,Z,"mounted")},ee)},V=(D,R,q,Z,ee)=>{if(q&&w(D,q),Z)for(let ne=0;ne<Z.length;ne++)w(D,Z[ne]);if(ee){let ne=ee.subTree;if(R===ne){const ce=ee.vnode;V(D,ce,ce.scopeId,ce.slotScopeIds,ee.parent)}}},M=(D,R,q,Z,ee,ne,ce,ae,se=0)=>{for(let ie=se;ie<D.length;ie++){const me=D[ie]=ae?hi(D[ie]):Bt(D[ie]);x(null,me,R,q,Z,ee,ne,ce,ae)}},F=(D,R,q,Z,ee,ne,ce)=>{const ae=R.el=D.el;let{patchFlag:se,dynamicChildren:ie,dirs:me}=R;se|=D.patchFlag&16;const ye=D.props||qe,Se=R.props||qe;let xe;if(q&&Bi(q,!1),(xe=Se.onVnodeBeforeUpdate)&&St(xe,q,R,D),me&&Ut(R,D,q,"beforeUpdate"),q&&Bi(q,!0),ie?G(D.dynamicChildren,ie,ae,q,Z,Dn(R,ee),ne):ce||le(D,R,ae,null,q,Z,Dn(R,ee),ne,!1),se>0){if(se&16)Q(ae,R,ye,Se,q,Z,ee);else if(se&2&&ye.class!==Se.class&&c(ae,"class",null,Se.class,ee),se&4&&c(ae,"style",ye.style,Se.style,ee),se&8){const De=R.dynamicProps;for(let Ge=0;Ge<De.length;Ge++){const We=De[Ge],st=ye[We],Ot=Se[We];(Ot!==st||We==="value")&&c(ae,We,st,Ot,ee,D.children,q,Z,ue)}}se&1&&D.children!==R.children&&g(ae,R.children)}else!ce&&ie==null&&Q(ae,R,ye,Se,q,Z,ee);((xe=Se.onVnodeUpdated)||me)&&ct(()=>{xe&&St(xe,q,R,D),me&&Ut(R,D,q,"updated")},Z)},G=(D,R,q,Z,ee,ne,ce)=>{for(let ae=0;ae<R.length;ae++){const se=D[ae],ie=R[ae],me=se.el&&(se.type===Ae||!qt(se,ie)||se.shapeFlag&70)?p(se.el):q;x(se,ie,me,null,Z,ee,ne,ce,!0)}},Q=(D,R,q,Z,ee,ne,ce)=>{if(q!==Z){if(q!==qe)for(const ae in q)!jl(ae)&&!(ae in Z)&&c(D,ae,q[ae],null,ce,R.children,ee,ne,ue);for(const ae in Z){if(jl(ae))continue;const se=Z[ae],ie=q[ae];se!==ie&&ae!=="value"&&c(D,ae,ie,se,ce,R.children,ee,ne,ue)}"value"in Z&&c(D,"value",q.value,Z.value,ce)}},Y=(D,R,q,Z,ee,ne,ce,ae,se)=>{const ie=R.el=D?D.el:f(""),me=R.anchor=D?D.anchor:f("");let{patchFlag:ye,dynamicChildren:Se,slotScopeIds:xe}=R;xe&&(ae=ae?ae.concat(xe):xe),D==null?(o(ie,q,Z),o(me,q,Z),M(R.children||[],q,me,ee,ne,ce,ae,se)):ye>0&&ye&64&&Se&&D.dynamicChildren?(G(D.dynamicChildren,Se,q,ee,ne,ce,ae),(R.key!=null||ee&&R===ee.subTree)&&as(D,R,!0)):le(D,R,q,me,ee,ne,ce,ae,se)},ge=(D,R,q,Z,ee,ne,ce,ae,se)=>{R.slotScopeIds=ae,D==null?R.shapeFlag&512?ee.ctx.activate(R,q,Z,ce,se):Be(R,q,Z,ee,ne,ce,se):U(D,R,se)},Be=(D,R,q,Z,ee,ne,ce)=>{const ae=D.component=sc(D,Z,ee);if(ga(D)&&(ae.ctx.renderer=Ne),uc(ae),ae.asyncDep){if(ee&&ee.registerDep(ae,K),!D.el){const se=ae.subTree=t(ht);L(null,se,R,q)}}else K(ae,D,R,q,ee,ne,ce)},U=(D,R,q)=>{const Z=R.component=D.component;if(jm(D,R,q))if(Z.asyncDep&&!Z.asyncResolved){de(Z,R,q);return}else Z.next=R,Vm(Z.update),Z.effect.dirty=!0,Z.update();else R.el=D.el,Z.vnode=R},K=(D,R,q,Z,ee,ne,ce)=>{const ae=()=>{if(D.isMounted){let{next:me,bu:ye,u:Se,parent:xe,vnode:De}=D;{const il=tc(D);if(il){me&&(me.el=De.el,de(D,me,ce)),il.asyncDep.then(()=>{D.isUnmounted||ae()});return}}let Ge=me,We;Bi(D,!1),me?(me.el=De.el,de(D,me,ce)):me=De,ye&&ul(ye),(We=me.props&&me.props.onVnodeBeforeUpdate)&&St(We,xe,me,De),Bi(D,!0);const st=za(D),Ot=D.subTree;D.subTree=st,x(Ot,st,p(Ot.el),re(Ot),D,ee,ne),me.el=st.el,Ge===null&&Yo(D,st.el),Se&&ct(Se,ee),(We=me.props&&me.props.onVnodeUpdated)&&ct(()=>St(We,xe,me,De),ee)}else{let me;const{el:ye,props:Se}=R,{bm:xe,m:De,parent:Ge}=D,We=Mi(R);if(Bi(D,!1),xe&&ul(xe),!We&&(me=Se&&Se.onVnodeBeforeMount)&&St(me,Ge,R),Bi(D,!0),ye&&$e){const st=()=>{D.subTree=za(D),$e(ye,D.subTree,D,ee,null)};We?R.type.__asyncLoader().then(()=>!D.isUnmounted&&st()):st()}else{const st=D.subTree=za(D);x(null,st,q,Z,D,ee,ne),R.el=st.el}if(De&&ct(De,ee),!We&&(me=Se&&Se.onVnodeMounted)){const st=R;ct(()=>St(me,Ge,st),ee)}(R.shapeFlag&256||Ge&&Mi(Ge.vnode)&&Ge.vnode.shapeFlag&256)&&D.a&&ct(D.a,ee),D.isMounted=!0,R=q=Z=null}},se=D.effect=new bl(ae,yt,()=>rn(ie),D.scope),ie=D.update=()=>{se.dirty&&se.run()};ie.id=D.uid,Bi(D,!0),ie()},de=(D,R,q)=>{R.component=D;const Z=D.vnode.props;D.vnode=R,D.next=null,Lp(D,R.props,Z,q),Ep(D,R.children,q),Ki(),Vs(D),Xi()},le=(D,R,q,Z,ee,ne,ce,ae,se=!1)=>{const ie=D&&D.children,me=D?D.shapeFlag:0,ye=R.children,{patchFlag:Se,shapeFlag:xe}=R;if(Se>0){if(Se&128){Je(ie,ye,q,Z,ee,ne,ce,ae,se);return}else if(Se&256){Le(ie,ye,q,Z,ee,ne,ce,ae,se);return}}xe&8?(me&16&&ue(ie,ee,ne),ye!==ie&&g(q,ye)):me&16?xe&16?Je(ie,ye,q,Z,ee,ne,ce,ae,se):ue(ie,ee,ne,!0):(me&8&&g(q,""),xe&16&&M(ye,q,Z,ee,ne,ce,ae,se))},Le=(D,R,q,Z,ee,ne,ce,ae,se)=>{D=D||sl,R=R||sl;const ie=D.length,me=R.length,ye=Math.min(ie,me);let Se;for(Se=0;Se<ye;Se++){const xe=R[Se]=se?hi(R[Se]):Bt(R[Se]);x(D[Se],xe,q,null,ee,ne,ce,ae,se)}ie>me?ue(D,ee,ne,!0,!1,ye):M(R,q,Z,ee,ne,ce,ae,se,ye)},Je=(D,R,q,Z,ee,ne,ce,ae,se)=>{let ie=0;const me=R.length;let ye=D.length-1,Se=me-1;for(;ie<=ye&&ie<=Se;){const xe=D[ie],De=R[ie]=se?hi(R[ie]):Bt(R[ie]);if(qt(xe,De))x(xe,De,q,null,ee,ne,ce,ae,se);else break;ie++}for(;ie<=ye&&ie<=Se;){const xe=D[ye],De=R[Se]=se?hi(R[Se]):Bt(R[Se]);if(qt(xe,De))x(xe,De,q,null,ee,ne,ce,ae,se);else break;ye--,Se--}if(ie>ye){if(ie<=Se){const xe=Se+1,De=xe<me?R[xe].el:Z;for(;ie<=Se;)x(null,R[ie]=se?hi(R[ie]):Bt(R[ie]),q,De,ee,ne,ce,ae,se),ie++}}else if(ie>Se)for(;ie<=ye;)Ue(D[ie],ee,ne,!0),ie++;else{const xe=ie,De=ie,Ge=new Map;for(ie=De;ie<=Se;ie++){const kt=R[ie]=se?hi(R[ie]):Bt(R[ie]);kt.key!=null&&Ge.set(kt.key,ie)}let We,st=0;const Ot=Se-De+1;let il=!1,ks=0;const Il=new Array(Ot);for(ie=0;ie<Ot;ie++)Il[ie]=0;for(ie=xe;ie<=ye;ie++){const kt=D[ie];if(st>=Ot){Ue(kt,ee,ne,!0);continue}let jt;if(kt.key!=null)jt=Ge.get(kt.key);else for(We=De;We<=Se;We++)if(Il[We-De]===0&&qt(kt,R[We])){jt=We;break}jt===void 0?Ue(kt,ee,ne,!0):(Il[jt-De]=ie+1,jt>=ks?ks=jt:il=!0,x(kt,R[jt],q,null,ee,ne,ce,ae,se),st++)}const $s=il?Fp(Il):sl;for(We=$s.length-1,ie=Ot-1;ie>=0;ie--){const kt=De+ie,jt=R[kt],Bs=kt+1<me?R[kt+1].el:Z;Il[ie]===0?x(null,jt,q,Bs,ee,ne,ce,ae,se):il&&(We<0||ie!==$s[We]?ot(jt,q,Bs,2):We--)}}},ot=(D,R,q,Z,ee=null)=>{const{el:ne,type:ce,transition:ae,children:se,shapeFlag:ie}=D;if(ie&6){ot(D.component.subTree,R,q,Z);return}if(ie&128){D.suspense.move(R,q,Z);return}if(ie&64){ce.move(D,R,q,Ne);return}if(ce===Ae){o(ne,R,q);for(let ye=0;ye<se.length;ye++)ot(se[ye],R,q,Z);o(D.anchor,R,q);return}if(ce===Hi){b(D,R,q);return}if(Z!==2&&ie&1&&ae)if(Z===0)ae.beforeEnter(ne),o(ne,R,q),ct(()=>ae.enter(ne),ee);else{const{leave:ye,delayLeave:Se,afterLeave:xe}=ae,De=()=>o(ne,R,q),Ge=()=>{ye(ne,()=>{De(),xe&&xe()})};Se?Se(ne,De,Ge):Ge()}else o(ne,R,q)},Ue=(D,R,q,Z=!1,ee=!1)=>{const{type:ne,props:ce,ref:ae,children:se,dynamicChildren:ie,shapeFlag:me,patchFlag:ye,dirs:Se}=D;if(ae!=null&&ja(ae,null,q,D,!0),me&256){R.ctx.deactivate(D);return}const xe=me&1&&Se,De=!Mi(D);let Ge;if(De&&(Ge=ce&&ce.onVnodeBeforeUnmount)&&St(Ge,R,D),me&6)J(D.component,q,Z);else{if(me&128){D.suspense.unmount(q,Z);return}xe&&Ut(D,null,R,"beforeUnmount"),me&64?D.type.remove(D,R,q,ee,Ne,Z):ie&&(ne!==Ae||ye>0&&ye&64)?ue(ie,R,q,!1,!0):(ne===Ae&&ye&384||!ee&&me&16)&&ue(se,R,q),Z&&Qt(D)}(De&&(Ge=ce&&ce.onVnodeUnmounted)||xe)&&ct(()=>{Ge&&St(Ge,R,D),xe&&Ut(D,null,R,"unmounted")},q)},Qt=D=>{const{type:R,el:q,anchor:Z,transition:ee}=D;if(R===Ae){Pt(q,Z);return}if(R===Hi){k(D);return}const ne=()=>{s(q),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(D.shapeFlag&1&&ee&&!ee.persisted){const{leave:ce,delayLeave:ae}=ee,se=()=>ce(q,ne);ae?ae(D.el,ne,se):se()}else ne()},Pt=(D,R)=>{let q;for(;D!==R;)q=_(D),s(D),D=q;s(R)},J=(D,R,q)=>{const{bum:Z,scope:ee,update:ne,subTree:ce,um:ae}=D;Z&&ul(Z),ee.stop(),ne&&(ne.active=!1,Ue(ce,D,R,q)),ae&&ct(ae,R),ct(()=>{D.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&D.asyncDep&&!D.asyncResolved&&D.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},ue=(D,R,q,Z=!1,ee=!1,ne=0)=>{for(let ce=ne;ce<D.length;ce++)Ue(D[ce],R,q,Z,ee)},re=D=>D.shapeFlag&6?re(D.component.subTree):D.shapeFlag&128?D.suspense.next():_(D.anchor||D.el);let _e=!1;const He=(D,R,q)=>{D==null?R._vnode&&Ue(R._vnode,null,null,!0):x(R._vnode||null,D,R,null,null,null,q),_e||(_e=!0,Vs(),qa(),_e=!1),R._vnode=D},Ne={p:x,um:Ue,m:ot,r:Qt,mt:Be,mc:M,pc:le,pbc:G,n:re,o:e};let ke,$e;return l&&([ke,$e]=l(Ne)),{render:He,hydrate:ke,createApp:$p(He,ke)}}function Dn({type:e,props:l},a){return a==="svg"&&e==="foreignObject"||a==="mathml"&&e==="annotation-xml"&&l&&l.encoding&&l.encoding.includes("html")?void 0:a}function Bi({effect:e,update:l},a){e.allowRecurse=l.allowRecurse=a}function ec(e,l){return(!e||e&&!e.pendingBranch)&&l&&!l.persisted}function as(e,l,a=!1){const o=e.children,s=l.children;if(he(o)&&he(s))for(let c=0;c<o.length;c++){const m=o[c];let f=s[c];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=s[c]=hi(s[c]),f.el=m.el),a||as(m,f)),f.type===ji&&(f.el=m.el)}}function Fp(e){const l=e.slice(),a=[0];let o,s,c,m,f;const u=e.length;for(o=0;o<u;o++){const d=e[o];if(d!==0){if(s=a[a.length-1],e[s]<d){l[o]=s,a.push(o);continue}for(c=0,m=a.length-1;c<m;)f=c+m>>1,e[a[f]]<d?c=f+1:m=f;d<e[a[c]]&&(c>0&&(l[o]=a[c-1]),a[c]=o)}}for(c=a.length,m=a[c-1];c-- >0;)a[c]=m,m=l[m];return a}function tc(e){const l=e.subTree.component;if(l)return l.asyncDep&&!l.asyncResolved?l:tc(l)}const Vp=e=>e.__isTeleport,Jl=e=>e&&(e.disabled||e.disabled===""),Ks=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Xs=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,no=(e,l)=>{const a=e&&e.to;return Xe(a)?l?l(a):null:a},Mp={name:"Teleport",__isTeleport:!0,process(e,l,a,o,s,c,m,f,u,d){const{mc:g,pc:p,pbc:_,o:{insert:w,querySelector:v,createText:x,createComment:$}}=d,L=Jl(l.props);let{shapeFlag:h,children:b,dynamicChildren:k}=l;if(e==null){const T=l.el=x(""),E=l.anchor=x("");w(T,a,o),w(E,a,o);const V=l.target=no(l.props,v),M=l.targetAnchor=x("");V&&(w(M,V),m==="svg"||Ks(V)?m="svg":(m==="mathml"||Xs(V))&&(m="mathml"));const F=(G,Q)=>{h&16&&g(b,G,Q,s,c,m,f,u)};L?F(a,E):V&&F(V,M)}else{l.el=e.el;const T=l.anchor=e.anchor,E=l.target=e.target,V=l.targetAnchor=e.targetAnchor,M=Jl(e.props),F=M?a:E,G=M?T:V;if(m==="svg"||Ks(E)?m="svg":(m==="mathml"||Xs(E))&&(m="mathml"),k?(_(e.dynamicChildren,k,F,s,c,m,f),as(e,l,!0)):u||p(e,l,F,G,s,c,m,f,!1),L)M?l.props&&e.props&&l.props.to!==e.props.to&&(l.props.to=e.props.to):La(l,a,T,d,1);else if((l.props&&l.props.to)!==(e.props&&e.props.to)){const Q=l.target=no(l.props,v);Q&&La(l,Q,null,d,0)}else M&&La(l,E,V,d,1)}ic(l)},remove(e,l,a,o,{um:s,o:{remove:c}},m){const{shapeFlag:f,children:u,anchor:d,targetAnchor:g,target:p,props:_}=e;if(p&&c(g),m&&c(d),f&16){const w=m||!Jl(_);for(let v=0;v<u.length;v++){const x=u[v];s(x,l,a,w,!!x.dynamicChildren)}}},move:La,hydrate:Hp};function La(e,l,a,{o:{insert:o},m:s},c=2){c===0&&o(e.targetAnchor,l,a);const{el:m,anchor:f,shapeFlag:u,children:d,props:g}=e,p=c===2;if(p&&o(m,l,a),(!p||Jl(g))&&u&16)for(let _=0;_<d.length;_++)s(d[_],l,a,2);p&&o(f,l,a)}function Hp(e,l,a,o,s,c,{o:{nextSibling:m,parentNode:f,querySelector:u}},d){const g=l.target=no(l.props,u);if(g){const p=g._lpa||g.firstChild;if(l.shapeFlag&16)if(Jl(l.props))l.anchor=d(m(e),l,f(e),a,o,s,c),l.targetAnchor=p;else{l.anchor=m(e);let _=p;for(;_;)if(_=m(_),_&&_.nodeType===8&&_.data==="teleport anchor"){l.targetAnchor=_,g._lpa=l.targetAnchor&&m(l.targetAnchor);break}d(p,l,g,a,o,s,c)}ic(l)}return l.anchor&&m(l.anchor)}const hn=Mp;function ic(e){const l=e.ctx;if(l&&l.ut){let a=e.children[0].el;for(;a&&a!==e.targetAnchor;)a.nodeType===1&&a.setAttribute("data-v-owner",l.uid),a=a.nextSibling;l.ut()}}const Ae=Symbol.for("v-fgt"),ji=Symbol.for("v-txt"),ht=Symbol.for("v-cmt"),Hi=Symbol.for("v-stc"),Wl=[];let wt=null;function A(e=!1){Wl.push(wt=e?null:[])}function lc(){Wl.pop(),wt=Wl[Wl.length-1]||null}let Ui=1;function oo(e){Ui+=e}function ac(e){return e.dynamicChildren=Ui>0?wt||sl:null,lc(),Ui>0&&wt&&wt.push(e),e}function be(e,l,a,o,s,c){return ac(S(e,l,a,o,s,c,!0))}function B(e,l,a,o,s){return ac(t(e,l,a,o,s,!0))}function xt(e){return e?e.__v_isVNode===!0:!1}function qt(e,l){return e.type===l.type&&e.key===l.key}function Np(e){}const _n="__vInternal",nc=({key:e})=>e??null,Pa=({ref:e,ref_key:l,ref_for:a})=>(typeof e=="number"&&(e=""+e),e!=null?Xe(e)||mt(e)||Ce(e)?{i:tt,r:e,k:l,f:!!a}:e:null);function S(e,l=null,a=null,o=0,s=null,c=e===Ae?0:1,m=!1,f=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:l,key:l&&nc(l),ref:l&&Pa(l),scopeId:cn,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:c,patchFlag:o,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:tt};return f?(os(u,a),c&128&&e.normalize(u)):a&&(u.shapeFlag|=Xe(a)?8:16),Ui>0&&!m&&wt&&(u.patchFlag>0||c&6)&&u.patchFlag!==32&&wt.push(u),u}const t=Op;function Op(e,l=null,a=null,o=0,s=null,c=!1){if((!e||e===Cu)&&(e=ht),xt(e)){const f=Kt(e,l,!0);return a&&os(f,a),Ui>0&&!c&&wt&&(f.shapeFlag&6?wt[wt.indexOf(e)]=f:wt.push(f)),f.patchFlag|=-2,f}if(Kp(e)&&(e=e.__vccOpts),l){l=oc(l);let{class:f,style:u}=l;f&&!Xe(f)&&(l.class=pa(f)),je(u)&&(No(u)&&!he(u)&&(u=Ke({},u)),l.style=kl(u))}const m=Xe(e)?1:xu(e)?128:Vp(e)?64:je(e)?4:Ce(e)?2:0;return S(e,l,a,o,s,m,c,!0)}function oc(e){return e?No(e)||_n in e?Ke({},e):e:null}function Kt(e,l,a=!1){const{props:o,ref:s,patchFlag:c,children:m}=e,f=l?el(o||{},l):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&nc(f),ref:l&&l.ref?a&&s?he(s)?s.concat(Pa(l)):[s,Pa(l)]:Pa(l):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:m,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:l&&e.type!==Ae?c===-1?16:c|16:c,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Kt(e.ssContent),ssFallback:e.ssFallback&&Kt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function n(e=" ",l=0){return t(ji,null,e,l)}function qp(e,l){const a=t(Hi,null,e);return a.staticCount=l,a}function ns(e="",l=!1){return l?(A(),B(ht,null,e)):t(ht,null,e)}function Bt(e){return e==null||typeof e=="boolean"?t(ht):he(e)?t(Ae,null,e.slice()):typeof e=="object"?hi(e):t(ji,null,String(e))}function hi(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Kt(e)}function os(e,l){let a=0;const{shapeFlag:o}=e;if(l==null)l=null;else if(he(l))a=16;else if(typeof l=="object")if(o&65){const s=l.default;s&&(s._c&&(s._d=!1),os(e,s()),s._c&&(s._d=!0));return}else{a=32;const s=l._;!s&&!(_n in l)?l._ctx=tt:s===3&&tt&&(tt.slots._===1?l._=1:(l._=2,e.patchFlag|=1024))}else Ce(l)?(l={default:l,_ctx:tt},a=32):(l=String(l),o&64?(a=16,l=[n(l)]):a=8);e.children=l,e.shapeFlag|=a}function el(...e){const l={};for(let a=0;a<e.length;a++){const o=e[a];for(const s in o)if(s==="class")l.class!==o.class&&(l.class=pa([l.class,o.class]));else if(s==="style")l.style=kl([l.style,o.style]);else if(da(s)){const c=l[s],m=o[s];m&&c!==m&&!(he(c)&&c.includes(m))&&(l[s]=c?[].concat(c,m):m)}else s!==""&&(l[s]=o[s])}return l}function St(e,l,a,o=null){Et(e,l,7,[a,o])}const Gp=ju();let jp=0;function sc(e,l,a){const o=e.type,s=(l?l.appContext:e.appContext)||Gp,c={uid:jp++,vnode:e,type:o,parent:l,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new zo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:l?l.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yu(o,s),emitsOptions:Su(o,s),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:o.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return c.ctx={_:c},c.root=l?l.root:c,c.emit=Hm.bind(null,c),e.ce&&e.ce(c),c}let nt=null;const Xt=()=>nt||tt;let Ua,so;{const e=jr(),l=(a,o)=>{let s;return(s=e[a])||(s=e[a]=[]),s.push(o),c=>{s.length>1?s.forEach(m=>m(c)):s[0](c)}};Ua=l("__VUE_INSTANCE_SETTERS__",a=>nt=a),so=l("__VUE_SSR_SETTERS__",a=>ha=a)}const Yi=e=>{const l=nt;return Ua(e),e.scope.on(),()=>{e.scope.off(),Ua(l)}},ro=()=>{nt&&nt.scope.off(),Ua(null)};function rc(e){return e.vnode.shapeFlag&4}let ha=!1;function uc(e,l=!1){l&&so(l);const{props:a,children:o}=e.vnode,s=rc(e);Tp(e,a,s,l),Ip(e,o);const c=s?Up(e,l):void 0;return l&&so(!1),c}function Up(e,l){const a=e.type;e.accessCache=Object.create(null),e.proxy=Oo(new Proxy(e.ctx,to));const{setup:o}=a;if(o){const s=e.setupContext=o.length>1?dc(e):null,c=Yi(e);Ki();const m=li(o,e,0,[e.props,s]);if(Xi(),c(),Eo(m)){if(m.then(ro,ro),l)return m.then(f=>{uo(e,f,l)}).catch(f=>{Qi(f,e,0)});e.asyncDep=m}else uo(e,m,l)}else cc(e,l)}function uo(e,l,a){Ce(l)?e.type.__ssrInlineRender?e.ssrRender=l:e.render=l:je(l)&&(e.setupState=jo(l)),cc(e,a)}let Ya,co;function Yp(e){Ya=e,co=l=>{l.render._rc&&(l.withProxy=new Proxy(l.ctx,rp))}}const Jp=()=>!Ya;function cc(e,l,a){const o=e.type;if(!e.render){if(!l&&Ya&&!o.render){const s=o.template||is(e).template;if(s){const{isCustomElement:c,compilerOptions:m}=e.appContext.config,{delimiters:f,compilerOptions:u}=o,d=Ke(Ke({isCustomElement:c,delimiters:f},m),u);o.render=Ya(s,d)}}e.render=o.render||yt,co&&co(e)}{const s=Yi(e);Ki();try{yp(e)}finally{Xi(),s()}}}function Wp(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(l,a){return At(e,"get","$attrs"),l[a]}}))}function dc(e){const l=a=>{e.exposed=a||{}};return{get attrs(){return Wp(e)},slots:e.slots,emit:e.emit,expose:l}}function bn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(jo(Oo(e.exposed)),{get(l,a){if(a in l)return l[a];if(a in Yl)return Yl[a](e)},has(l,a){return a in l||a in Yl}}))}function mo(e,l=!0){return Ce(e)?e.displayName||e.name:e.name||l&&e.__name}function Kp(e){return Ce(e)&&"__vccOpts"in e}const H=(e,l)=>wm(e,l,ha);function Xp(e,l,a=qe){const o=Xt(),s=vt(l),c=Lt(l),m=fu((u,d)=>{let g;return Lu(()=>{const p=e[l];Gt(g,p)&&(g=p,d())}),{get(){return u(),a.get?a.get(g):g},set(p){const _=o.vnode.props;!(_&&(l in _||s in _||c in _)&&(`onUpdate:${l}`in _||`onUpdate:${s}`in _||`onUpdate:${c}`in _))&&Gt(p,g)&&(g=p,d()),o.emit(`update:${l}`,a.set?a.set(p):p)}}}),f=l==="modelValue"?"modelModifiers":`${l}Modifiers`;return m[Symbol.iterator]=()=>{let u=0;return{next(){return u<2?{value:u++?e[f]||{}:m,done:!1}:{done:!0}}}},m}function X(e,l,a){const o=arguments.length;return o===2?je(l)&&!he(l)?xt(l)?t(e,null,[l]):t(e,l):t(e,null,l):(o>3?a=Array.prototype.slice.call(arguments,2):o===3&&xt(a)&&(a=[a]),t(e,l,a))}function Qp(){}function Zp(e,l,a,o){const s=a[o];if(s&&mc(s,e))return s;const c=l();return c.memo=e.slice(),a[o]=c}function mc(e,l){const a=e.memo;if(a.length!=l.length)return!1;for(let o=0;o<a.length;o++)if(Gt(a[o],l[o]))return!1;return Ui>0&&wt&&wt.push(e),!0}const pc="3.4.15",ef=yt,tf=zm,lf=al,af=vu,nf={createComponentInstance:sc,setupComponent:uc,renderComponentRoot:za,setCurrentRenderingInstance:na,isVNode:xt,normalizeVNode:Bt},of=nf,sf=null,rf=null,uf=null;/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const cf="http://www.w3.org/2000/svg",df="http://www.w3.org/1998/Math/MathML",_i=typeof document<"u"?document:null,Qs=_i&&_i.createElement("template"),mf={insert:(e,l,a)=>{l.insertBefore(e,a||null)},remove:e=>{const l=e.parentNode;l&&l.removeChild(e)},createElement:(e,l,a,o)=>{const s=l==="svg"?_i.createElementNS(cf,e):l==="mathml"?_i.createElementNS(df,e):_i.createElement(e,a?{is:a}:void 0);return e==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:e=>_i.createTextNode(e),createComment:e=>_i.createComment(e),setText:(e,l)=>{e.nodeValue=l},setElementText:(e,l)=>{e.textContent=l},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>_i.querySelector(e),setScopeId(e,l){e.setAttribute(l,"")},insertStaticContent(e,l,a,o,s,c){const m=a?a.previousSibling:l.lastChild;if(s&&(s===c||s.nextSibling))for(;l.insertBefore(s.cloneNode(!0),a),!(s===c||!(s=s.nextSibling)););else{Qs.innerHTML=o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e;const f=Qs.content;if(o==="svg"||o==="mathml"){const u=f.firstChild;for(;u.firstChild;)f.appendChild(u.firstChild);f.removeChild(u)}l.insertBefore(f,a)}return[m?m.nextSibling:l.firstChild,a?a.previousSibling:l.lastChild]}},di="transition",El="animation",Sl=Symbol("_vtc"),vn=(e,{slots:l})=>X(Iu,gc(e),l);vn.displayName="Transition";const fc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},pf=vn.props=Ke({},Zo,fc),Ti=(e,l=[])=>{he(e)?e.forEach(a=>a(...l)):e&&e(...l)},Zs=e=>e?he(e)?e.some(l=>l.length>1):e.length>1:!1;function gc(e){const l={};for(const Y in e)Y in fc||(l[Y]=e[Y]);if(e.css===!1)return l;const{name:a="v",type:o,duration:s,enterFromClass:c=`${a}-enter-from`,enterActiveClass:m=`${a}-enter-active`,enterToClass:f=`${a}-enter-to`,appearFromClass:u=c,appearActiveClass:d=m,appearToClass:g=f,leaveFromClass:p=`${a}-leave-from`,leaveActiveClass:_=`${a}-leave-active`,leaveToClass:w=`${a}-leave-to`}=e,v=ff(s),x=v&&v[0],$=v&&v[1],{onBeforeEnter:L,onEnter:h,onEnterCancelled:b,onLeave:k,onLeaveCancelled:T,onBeforeAppear:E=L,onAppear:V=h,onAppearCancelled:M=b}=l,F=(Y,ge,Be)=>{pi(Y,ge?g:f),pi(Y,ge?d:m),Be&&Be()},G=(Y,ge)=>{Y._isLeaving=!1,pi(Y,p),pi(Y,w),pi(Y,_),ge&&ge()},Q=Y=>(ge,Be)=>{const U=Y?V:h,K=()=>F(ge,Y,Be);Ti(U,[ge,K]),er(()=>{pi(ge,Y?u:c),Zt(ge,Y?g:f),Zs(U)||tr(ge,o,x,K)})};return Ke(l,{onBeforeEnter(Y){Ti(L,[Y]),Zt(Y,c),Zt(Y,m)},onBeforeAppear(Y){Ti(E,[Y]),Zt(Y,u),Zt(Y,d)},onEnter:Q(!1),onAppear:Q(!0),onLeave(Y,ge){Y._isLeaving=!0;const Be=()=>G(Y,ge);Zt(Y,p),_c(),Zt(Y,_),er(()=>{Y._isLeaving&&(pi(Y,p),Zt(Y,w),Zs(k)||tr(Y,o,$,Be))}),Ti(k,[Y,Be])},onEnterCancelled(Y){F(Y,!1),Ti(b,[Y])},onAppearCancelled(Y){F(Y,!0),Ti(M,[Y])},onLeaveCancelled(Y){G(Y),Ti(T,[Y])}})}function ff(e){if(e==null)return null;if(je(e))return[In(e.enter),In(e.leave)];{const l=In(e);return[l,l]}}function In(e){return Ha(e)}function Zt(e,l){l.split(/\s+/).forEach(a=>a&&e.classList.add(a)),(e[Sl]||(e[Sl]=new Set)).add(l)}function pi(e,l){l.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const a=e[Sl];a&&(a.delete(l),a.size||(e[Sl]=void 0))}function er(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let gf=0;function tr(e,l,a,o){const s=e._endId=++gf,c=()=>{s===e._endId&&o()};if(a)return setTimeout(c,a);const{type:m,timeout:f,propCount:u}=hc(e,l);if(!m)return o();const d=m+"end";let g=0;const p=()=>{e.removeEventListener(d,_),c()},_=w=>{w.target===e&&++g>=u&&p()};setTimeout(()=>{g<u&&p()},f+1),e.addEventListener(d,_)}function hc(e,l){const a=window.getComputedStyle(e),o=v=>(a[v]||"").split(", "),s=o(`${di}Delay`),c=o(`${di}Duration`),m=ir(s,c),f=o(`${El}Delay`),u=o(`${El}Duration`),d=ir(f,u);let g=null,p=0,_=0;l===di?m>0&&(g=di,p=m,_=c.length):l===El?d>0&&(g=El,p=d,_=u.length):(p=Math.max(m,d),g=p>0?m>d?di:El:null,_=g?g===di?c.length:u.length:0);const w=g===di&&/\b(transform|all)(,|$)/.test(o(`${di}Property`).toString());return{type:g,timeout:p,propCount:_,hasTransform:w}}function ir(e,l){for(;e.length<l.length;)e=e.concat(e);return Math.max(...l.map((a,o)=>lr(a)+lr(e[o])))}function lr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function _c(){return document.body.offsetHeight}function hf(e,l,a){const o=e[Sl];o&&(l=(l?[l,...o]:[...o]).join(" ")),l==null?e.removeAttribute("class"):a?e.setAttribute("class",l):e.className=l}const ss=Symbol("_vod"),bc={beforeMount(e,{value:l},{transition:a}){e[ss]=e.style.display==="none"?"":e.style.display,a&&l?a.beforeEnter(e):Rl(e,l)},mounted(e,{value:l},{transition:a}){a&&l&&a.enter(e)},updated(e,{value:l,oldValue:a},{transition:o}){!l!=!a&&(o?l?(o.beforeEnter(e),Rl(e,!0),o.enter(e)):o.leave(e,()=>{Rl(e,!1)}):Rl(e,l))},beforeUnmount(e,{value:l}){Rl(e,l)}};function Rl(e,l){e.style.display=l?e[ss]:"none"}function _f(){bc.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const vc=Symbol("");function bf(e){const l=Xt();if(!l)return;const a=l.ut=(s=e(l.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${l.uid}"]`)).forEach(c=>fo(c,s))},o=()=>{const s=e(l.proxy);po(l.subTree,s),a(s)};Tu(o),xi(()=>{const s=new MutationObserver(o);s.observe(l.subTree.el.parentNode,{childList:!0}),Zi(()=>s.disconnect())})}function po(e,l){if(e.shapeFlag&128){const a=e.suspense;e=a.activeBranch,a.pendingBranch&&!a.isHydrating&&a.effects.push(()=>{po(a.activeBranch,l)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)fo(e.el,l);else if(e.type===Ae)e.children.forEach(a=>po(a,l));else if(e.type===Hi){let{el:a,anchor:o}=e;for(;a&&(fo(a,l),a!==o);)a=a.nextSibling}}function fo(e,l){if(e.nodeType===1){const a=e.style;let o="";for(const s in l)a.setProperty(`--${s}`,l[s]),o+=`--${s}: ${l[s]};`;a[vc]=o}}function vf(e,l,a){const o=e.style,s=o.display,c=Xe(a);if(a&&!c){if(l&&!Xe(l))for(const m in l)a[m]==null&&go(o,m,"");for(const m in a)go(o,m,a[m])}else if(c){if(l!==a){const m=o[vc];m&&(a+=";"+m),o.cssText=a}}else l&&e.removeAttribute("style");ss in e&&(o.display=s)}const ar=/\s*!important$/;function go(e,l,a){if(he(a))a.forEach(o=>go(e,l,o));else if(a==null&&(a=""),l.startsWith("--"))e.setProperty(l,a);else{const o=Sf(e,l);ar.test(a)?e.setProperty(Lt(o),a.replace(ar,""),"important"):e[o]=a}}const nr=["Webkit","Moz","ms"],En={};function Sf(e,l){const a=En[l];if(a)return a;let o=vt(l);if(o!=="filter"&&o in e)return En[l]=o;o=ma(o);for(let s=0;s<nr.length;s++){const c=nr[s]+o;if(c in e)return En[l]=c}return l}const or="http://www.w3.org/1999/xlink";function yf(e,l,a,o,s){if(o&&l.startsWith("xlink:"))a==null?e.removeAttributeNS(or,l.slice(6,l.length)):e.setAttributeNS(or,l,a);else{const c=Kd(l);a==null||c&&!Ur(a)?e.removeAttribute(l):e.setAttribute(l,c?"":a)}}function wf(e,l,a,o,s,c,m){if(l==="innerHTML"||l==="textContent"){o&&m(o,s,c),e[l]=a??"";return}const f=e.tagName;if(l==="value"&&f!=="PROGRESS"&&!f.includes("-")){e._value=a;const d=f==="OPTION"?e.getAttribute("value"):e.value,g=a??"";d!==g&&(e.value=g),a==null&&e.removeAttribute(l);return}let u=!1;if(a===""||a==null){const d=typeof e[l];d==="boolean"?a=Ur(a):a==null&&d==="string"?(a="",u=!0):d==="number"&&(a=0,u=!0)}try{e[l]=a}catch{}u&&e.removeAttribute(l)}function ti(e,l,a,o){e.addEventListener(l,a,o)}function Cf(e,l,a,o){e.removeEventListener(l,a,o)}const sr=Symbol("_vei");function Af(e,l,a,o,s=null){const c=e[sr]||(e[sr]={}),m=c[l];if(o&&m)m.value=o;else{const[f,u]=xf(l);if(o){const d=c[l]=Bf(o,s);ti(e,f,d,u)}else m&&(Cf(e,f,m,u),c[l]=void 0)}}const rr=/(?:Once|Passive|Capture)$/;function xf(e){let l;if(rr.test(e)){l={};let o;for(;o=e.match(rr);)e=e.slice(0,e.length-o[0].length),l[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Lt(e.slice(2)),l]}let Rn=0;const kf=Promise.resolve(),$f=()=>Rn||(kf.then(()=>Rn=0),Rn=Date.now());function Bf(e,l){const a=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=a.attached)return;Et(Tf(o,a.value),l,5,[o])};return a.value=e,a.attached=$f(),a}function Tf(e,l){if(he(l)){const a=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{a.call(e),e._stopped=!0},l.map(o=>s=>!s._stopped&&o&&o(s))}else return l}const ur=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Lf=(e,l,a,o,s,c,m,f,u)=>{const d=s==="svg";l==="class"?hf(e,o,d):l==="style"?vf(e,a,o):da(l)?Do(l)||Af(e,l,a,o,m):(l[0]==="."?(l=l.slice(1),!0):l[0]==="^"?(l=l.slice(1),!1):Df(e,l,o,d))?wf(e,l,o,c,m,f,u):(l==="true-value"?e._trueValue=o:l==="false-value"&&(e._falseValue=o),yf(e,l,o,d))};function Df(e,l,a,o){if(o)return!!(l==="innerHTML"||l==="textContent"||l in e&&ur(l)&&Ce(a));if(l==="spellcheck"||l==="draggable"||l==="translate"||l==="form"||l==="list"&&e.tagName==="INPUT"||l==="type"&&e.tagName==="TEXTAREA")return!1;if(l==="width"||l==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ur(l)&&Xe(a)?!1:l in e}/*! #__NO_SIDE_EFFECTS__ */function Sc(e,l){const a=P(e);class o extends Sn{constructor(c){super(a,c,l)}}return o.def=a,o}/*! #__NO_SIDE_EFFECTS__ */const If=e=>Sc(e,Ic),Ef=typeof HTMLElement<"u"?HTMLElement:class{};class Sn extends Ef{constructor(l,a={},o){super(),this._def=l,this._props=a,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&o?o(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),$l(()=>{this._connected||(Ka(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let o=0;o<this.attributes.length;o++)this._setAttr(this.attributes[o].name);this._ob=new MutationObserver(o=>{for(const s of o)this._setAttr(s.attributeName)}),this._ob.observe(this,{attributes:!0});const l=(o,s=!1)=>{const{props:c,styles:m}=o;let f;if(c&&!he(c))for(const u in c){const d=c[u];(d===Number||d&&d.type===Number)&&(u in this._props&&(this._props[u]=Ha(this._props[u])),(f||(f=Object.create(null)))[vt(u)]=!0)}this._numberProps=f,s&&this._resolveProps(o),this._applyStyles(m),this._update()},a=this._def.__asyncLoader;a?a().then(o=>l(o,!0)):l(this._def)}_resolveProps(l){const{props:a}=l,o=he(a)?a:Object.keys(a||{});for(const s of Object.keys(this))s[0]!=="_"&&o.includes(s)&&this._setProp(s,this[s],!0,!1);for(const s of o.map(vt))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(c){this._setProp(s,c)}})}_setAttr(l){let a=this.getAttribute(l);const o=vt(l);this._numberProps&&this._numberProps[o]&&(a=Ha(a)),this._setProp(o,a,!1)}_getProp(l){return this._props[l]}_setProp(l,a,o=!0,s=!0){a!==this._props[l]&&(this._props[l]=a,s&&this._instance&&this._update(),o&&(a===!0?this.setAttribute(Lt(l),""):typeof a=="string"||typeof a=="number"?this.setAttribute(Lt(l),a+""):a||this.removeAttribute(Lt(l))))}_update(){Ka(this._createVNode(),this.shadowRoot)}_createVNode(){const l=t(this._def,Ke({},this._props));return this._instance||(l.ce=a=>{this._instance=a,a.isCE=!0;const o=(c,m)=>{this.dispatchEvent(new CustomEvent(c,{detail:m}))};a.emit=(c,...m)=>{o(c,m),Lt(c)!==c&&o(Lt(c),m)};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof Sn){a.parent=s._instance,a.provides=s._instance.provides;break}}),l}_applyStyles(l){l&&l.forEach(a=>{const o=document.createElement("style");o.textContent=a,this.shadowRoot.appendChild(o)})}}function Rf(e="$style"){{const l=Xt();if(!l)return qe;const a=l.type.__cssModules;if(!a)return qe;const o=a[e];return o||qe}}const yc=new WeakMap,wc=new WeakMap,Ja=Symbol("_moveCb"),cr=Symbol("_enterCb"),Cc={name:"TransitionGroup",props:Ke({},pf,{tag:String,moveClass:String}),setup(e,{slots:l}){const a=Xt(),o=Qo();let s,c;return fn(()=>{if(!s.length)return;const m=e.moveClass||`${e.name||"v"}-move`;if(!Mf(s[0].el,a.vnode.el,m))return;s.forEach(Pf),s.forEach(Ff);const f=s.filter(Vf);_c(),f.forEach(u=>{const d=u.el,g=d.style;Zt(d,m),g.transform=g.webkitTransform=g.transitionDuration="";const p=d[Ja]=_=>{_&&_.target!==d||(!_||/transform$/.test(_.propertyName))&&(d.removeEventListener("transitionend",p),d[Ja]=null,pi(d,m))};d.addEventListener("transitionend",p)})}),()=>{const m=Ee(e),f=gc(m);let u=m.tag||Ae;s=c,c=l.default?mn(l.default()):[];for(let d=0;d<c.length;d++){const g=c[d];g.key!=null&&qi(g,vl(g,f,o,a))}if(s)for(let d=0;d<s.length;d++){const g=s[d];qi(g,vl(g,f,o,a)),yc.set(g,g.el.getBoundingClientRect())}return t(u,null,c)}}},zf=e=>delete e.mode;Cc.props;const Ac=Cc;function Pf(e){const l=e.el;l[Ja]&&l[Ja](),l[cr]&&l[cr]()}function Ff(e){wc.set(e,e.el.getBoundingClientRect())}function Vf(e){const l=yc.get(e),a=wc.get(e),o=l.left-a.left,s=l.top-a.top;if(o||s){const c=e.el.style;return c.transform=c.webkitTransform=`translate(${o}px,${s}px)`,c.transitionDuration="0s",e}}function Mf(e,l,a){const o=e.cloneNode(),s=e[Sl];s&&s.forEach(f=>{f.split(/\s+/).forEach(u=>u&&o.classList.remove(u))}),a.split(/\s+/).forEach(f=>f&&o.classList.add(f)),o.style.display="none";const c=l.nodeType===1?l:l.parentNode;c.appendChild(o);const{hasTransform:m}=hc(o);return c.removeChild(o),m}const Ci=e=>{const l=e.props["onUpdate:modelValue"]||!1;return he(l)?a=>ul(l,a):l};function Hf(e){e.target.composing=!0}function dr(e){const l=e.target;l.composing&&(l.composing=!1,l.dispatchEvent(new Event("input")))}const Ht=Symbol("_assign"),Wa={created(e,{modifiers:{lazy:l,trim:a,number:o}},s){e[Ht]=Ci(s);const c=o||s.props&&s.props.type==="number";ti(e,l?"change":"input",m=>{if(m.target.composing)return;let f=e.value;a&&(f=f.trim()),c&&(f=ea(f)),e[Ht](f)}),a&&ti(e,"change",()=>{e.value=e.value.trim()}),l||(ti(e,"compositionstart",Hf),ti(e,"compositionend",dr),ti(e,"change",dr))},mounted(e,{value:l}){e.value=l??""},beforeUpdate(e,{value:l,modifiers:{lazy:a,trim:o,number:s}},c){if(e[Ht]=Ci(c),e.composing)return;const m=s||e.type==="number"?ea(e.value):e.value,f=l??"";m!==f&&(document.activeElement===e&&e.type!=="range"&&(a||o&&e.value.trim()===f)||(e.value=f))}},rs={deep:!0,created(e,l,a){e[Ht]=Ci(a),ti(e,"change",()=>{const o=e._modelValue,s=yl(e),c=e.checked,m=e[Ht];if(he(o)){const f=an(o,s),u=f!==-1;if(c&&!u)m(o.concat(s));else if(!c&&u){const d=[...o];d.splice(f,1),m(d)}}else if(Wi(o)){const f=new Set(o);c?f.add(s):f.delete(s),m(f)}else m(kc(e,c))})},mounted:mr,beforeUpdate(e,l,a){e[Ht]=Ci(a),mr(e,l,a)}};function mr(e,{value:l,oldValue:a},o){e._modelValue=l,he(l)?e.checked=an(l,o.props.value)>-1:Wi(l)?e.checked=l.has(o.props.value):l!==a&&(e.checked=ai(l,kc(e,!0)))}const us={created(e,{value:l},a){e.checked=ai(l,a.props.value),e[Ht]=Ci(a),ti(e,"change",()=>{e[Ht](yl(e))})},beforeUpdate(e,{value:l,oldValue:a},o){e[Ht]=Ci(o),l!==a&&(e.checked=ai(l,o.props.value))}},xc={deep:!0,created(e,{value:l,modifiers:{number:a}},o){const s=Wi(l);ti(e,"change",()=>{const c=Array.prototype.filter.call(e.options,m=>m.selected).map(m=>a?ea(yl(m)):yl(m));e[Ht](e.multiple?s?new Set(c):c:c[0]),e._assigning=!0,$l(()=>{e._assigning=!1})}),e[Ht]=Ci(o)},mounted(e,{value:l,oldValue:a,modifiers:{number:o}}){pr(e,l,a,o)},beforeUpdate(e,l,a){e[Ht]=Ci(a)},updated(e,{value:l,oldValue:a,modifiers:{number:o}}){e._assigning||pr(e,l,a,o)}};function pr(e,l,a,o){const s=e.multiple,c=he(l);if(!(s&&!c&&!Wi(l))&&!(c&&ai(l,a))){for(let m=0,f=e.options.length;m<f;m++){const u=e.options[m],d=yl(u);if(s)if(c){const g=typeof d;g==="string"||g==="number"?u.selected=l.includes(o?ea(d):d):u.selected=an(l,d)>-1}else u.selected=l.has(d);else if(ai(yl(u),l)){e.selectedIndex!==m&&(e.selectedIndex=m);return}}!s&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function yl(e){return"_value"in e?e._value:e.value}function kc(e,l){const a=l?"_trueValue":"_falseValue";return a in e?e[a]:l}const $c={created(e,l,a){Da(e,l,a,null,"created")},mounted(e,l,a){Da(e,l,a,null,"mounted")},beforeUpdate(e,l,a,o){Da(e,l,a,o,"beforeUpdate")},updated(e,l,a,o){Da(e,l,a,o,"updated")}};function Bc(e,l){switch(e){case"SELECT":return xc;case"TEXTAREA":return Wa;default:switch(l){case"checkbox":return rs;case"radio":return us;default:return Wa}}}function Da(e,l,a,o,s){const m=Bc(e.tagName,a.props&&a.props.type)[s];m&&m(e,l,a,o)}function Nf(){Wa.getSSRProps=({value:e})=>({value:e}),us.getSSRProps=({value:e},l)=>{if(l.props&&ai(l.props.value,e))return{checked:!0}},rs.getSSRProps=({value:e},l)=>{if(he(e)){if(l.props&&an(e,l.props.value)>-1)return{checked:!0}}else if(Wi(e)){if(l.props&&e.has(l.props.value))return{checked:!0}}else if(e)return{checked:!0}},$c.getSSRProps=(e,l)=>{if(typeof l.type!="string")return;const a=Bc(l.type.toUpperCase(),l.props&&l.props.type);if(a.getSSRProps)return a.getSSRProps(e,l)}}const Of=["ctrl","shift","alt","meta"],qf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,l)=>Of.some(a=>e[`${a}Key`]&&!l.includes(a))},Rt=(e,l)=>{const a=e._withMods||(e._withMods={}),o=l.join(".");return a[o]||(a[o]=(s,...c)=>{for(let m=0;m<l.length;m++){const f=qf[l[m]];if(f&&f(s,l))return}return e(s,...c)})},Gf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},jf=(e,l)=>{const a=e._withKeys||(e._withKeys={}),o=l.join(".");return a[o]||(a[o]=s=>{if(!("key"in s))return;const c=Lt(s.key);if(l.some(m=>m===c||Gf[m]===c))return e(s)})},Tc=Ke({patchProp:Lf},mf);let Kl,fr=!1;function Lc(){return Kl||(Kl=Xu(Tc))}function Dc(){return Kl=fr?Kl:Qu(Tc),fr=!0,Kl}const Ka=(...e)=>{Lc().render(...e)},Ic=(...e)=>{Dc().hydrate(...e)},Ec=(...e)=>{const l=Lc().createApp(...e),{mount:a}=l;return l.mount=o=>{const s=zc(o);if(!s)return;const c=l._component;!Ce(c)&&!c.render&&!c.template&&(c.template=s.innerHTML),s.innerHTML="";const m=a(s,!1,Rc(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),m},l},Uf=(...e)=>{const l=Dc().createApp(...e),{mount:a}=l;return l.mount=o=>{const s=zc(o);if(s)return a(s,!0,Rc(s))},l};function Rc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function zc(e){return Xe(e)?document.querySelector(e):e}let gr=!1;const Yf=()=>{gr||(gr=!0,Nf(),_f())};/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Jf=()=>{},Wf=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:Iu,BaseTransitionPropsValidators:Zo,Comment:ht,DeprecationTypes:uf,EffectScope:zo,ErrorCodes:Rm,ErrorTypeStrings:tf,Fragment:Ae,KeepAlive:ap,ReactiveEffect:bl,Static:Hi,Suspense:Jm,Teleport:hn,Text:ji,TrackOpTypes:Dm,Transition:vn,TransitionGroup:Ac,TriggerOpTypes:Im,VueElement:Sn,assertNumber:Em,callWithAsyncErrorHandling:Et,callWithErrorHandling:li,camelize:vt,capitalize:ma,cloneVNode:Kt,compatUtils:rf,compile:Jf,computed:H,createApp:Ec,createBlock:B,createCommentVNode:ns,createElementBlock:be,createElementVNode:S,createHydrationRenderer:Qu,createPropsRestProxy:vp,createRenderer:Xu,createSSRApp:Uf,createSlots:op,createStaticVNode:qp,createTextVNode:n,createVNode:t,customRef:fu,defineAsyncComponent:ip,defineComponent:P,defineCustomElement:Sc,defineEmits:cp,defineExpose:dp,defineModel:fp,defineOptions:mp,defineProps:up,defineSSRCustomElement:If,defineSlots:pp,devtools:lf,effect:em,effectScope:Qd,getCurrentInstance:Xt,getCurrentScope:Po,getTransitionRawChildren:mn,guardReactiveProps:oc,h:X,handleError:Qi,hasInjectionContext:Bp,hydrate:Ic,initCustomFormatter:Qp,initDirectivesForSSR:Yf,inject:Me,isMemoSame:mc,isProxy:No,isReactive:Vi,isReadonly:Oi,isRef:mt,isRuntimeOnly:Jp,isShallow:ta,isVNode:xt,markRaw:Oo,mergeDefaults:_p,mergeModels:bp,mergeProps:el,nextTick:$l,normalizeClass:pa,normalizeProps:Jd,normalizeStyle:kl,onActivated:es,onBeforeMount:zu,onBeforeUnmount:gn,onBeforeUpdate:Pu,onDeactivated:ts,onErrorCaptured:Hu,onMounted:xi,onRenderTracked:Mu,onRenderTriggered:Vu,onScopeDispose:Wr,onServerPrefetch:Fu,onUnmounted:Zi,onUpdated:fn,openBlock:A,popScopeId:wu,provide:dt,proxyRefs:jo,pushScopeId:yu,queuePostFlushCb:Oa,reactive:oi,readonly:Ho,ref:j,registerRuntimeCompiler:Yp,render:Ka,renderList:Qe,renderSlot:Gi,resolveComponent:C,resolveDirective:dn,resolveDynamicComponent:Au,resolveFilter:sf,resolveTransitionHooks:vl,setBlockTracking:oo,setDevtoolsHook:af,setTransitionHooks:qi,shallowReactive:cu,shallowReadonly:ym,shallowRef:mu,ssrContextKey:$u,ssrUtils:of,stop:tm,toDisplayString:Te,toHandlerKey:Ul,toHandlers:sp,toRaw:Ee,toRef:Xn,toRefs:Bm,toValue:xm,transformVNodeArgs:Np,triggerRef:Am,unref:r,useAttrs:Ou,useCssModule:Rf,useCssVars:bf,useModel:Xp,useSSRContext:Bu,useSlots:hp,useTransitionState:Qo,vModelCheckbox:rs,vModelDynamic:$c,vModelRadio:us,vModelSelect:xc,vModelText:Wa,vShow:bc,version:pc,warn:ef,watch:gt,watchEffect:Xo,watchPostEffect:Tu,watchSyncEffect:Lu,withAsyncContext:Sp,withCtx:i,withDefaults:gp,withDirectives:Si,withKeys:jf,withMemo:Zp,withModifiers:Rt,withScopeId:Nm},Symbol.toStringTag,{value:"Module"})),Kf=P({name:"App"}),Re=(e,l)=>{const a=e.__vccOpts||e;for(const[o,s]of l)a[o]=s;return a};function Xf(e,l,a,o,s,c){const m=C("router-view");return A(),B(m)}const Qf=Re(Kf,[["render",Xf]]),Zf="modulepreload",eg=function(e){return"/vue-fomantic-ui/"+e},hr={},zl=function(l,a,o){let s=Promise.resolve();if(a&&a.length>0){const c=document.getElementsByTagName("link");s=Promise.all(a.map(m=>{if(m=eg(m),m in hr)return;hr[m]=!0;const f=m.endsWith(".css"),u=f?'[rel="stylesheet"]':"";if(!!o)for(let p=c.length-1;p>=0;p--){const _=c[p];if(_.href===m&&(!f||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${u}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":Zf,f||(g.as="script",g.crossOrigin=""),g.href=m,document.head.appendChild(g),f)return new Promise((p,_)=>{g.addEventListener("load",p),g.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${m}`)))})}))}return s.then(()=>l()).catch(c=>{const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=c,window.dispatchEvent(m),!m.defaultPrevented)throw c})};/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Pc=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Bl=e=>Pc?Symbol(e):"_vr_"+e,Fc=Bl("rvlm"),_r=Bl("rvd"),yn=Bl("r"),cs=Bl("rl"),ho=Bl("rvl"),nl=typeof window<"u";function tg(e){return e.__esModule||Pc&&e[Symbol.toStringTag]==="Module"}const Ye=Object.assign;function zn(e,l){const a={};for(const o in l){const s=l[o];a[o]=Array.isArray(s)?s.map(e):e(s)}return a}const Xl=()=>{},ig=/\/$/,lg=e=>e.replace(ig,"");function Pn(e,l,a="/"){let o,s={},c="",m="";const f=l.indexOf("?"),u=l.indexOf("#",f>-1?f:0);return f>-1&&(o=l.slice(0,f),c=l.slice(f+1,u>-1?u:l.length),s=e(c)),u>-1&&(o=o||l.slice(0,u),m=l.slice(u,l.length)),o=sg(o??l,a),{fullPath:o+(c&&"?")+c+m,path:o,query:s,hash:m}}function ag(e,l){const a=l.query?e(l.query):"";return l.path+(a&&"?")+a+(l.hash||"")}function br(e,l){return!l||!e.toLowerCase().startsWith(l.toLowerCase())?e:e.slice(l.length)||"/"}function ng(e,l,a){const o=l.matched.length-1,s=a.matched.length-1;return o>-1&&o===s&&wl(l.matched[o],a.matched[s])&&Vc(l.params,a.params)&&e(l.query)===e(a.query)&&l.hash===a.hash}function wl(e,l){return(e.aliasOf||e)===(l.aliasOf||l)}function Vc(e,l){if(Object.keys(e).length!==Object.keys(l).length)return!1;for(const a in e)if(!og(e[a],l[a]))return!1;return!0}function og(e,l){return Array.isArray(e)?vr(e,l):Array.isArray(l)?vr(l,e):e===l}function vr(e,l){return Array.isArray(l)?e.length===l.length&&e.every((a,o)=>a===l[o]):e.length===1&&e[0]===l}function sg(e,l){if(e.startsWith("/"))return e;if(!e)return l;const a=l.split("/"),o=e.split("/");let s=a.length-1,c,m;for(c=0;c<o.length;c++)if(m=o[c],!(s===1||m==="."))if(m==="..")s--;else break;return a.slice(0,s).join("/")+"/"+o.slice(c-(c===o.length?1:0)).join("/")}var ua;(function(e){e.pop="pop",e.push="push"})(ua||(ua={}));var Ql;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ql||(Ql={}));function rg(e){if(!e)if(nl){const l=document.querySelector("base");e=l&&l.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),lg(e)}const ug=/^[^#]+#/;function cg(e,l){return e.replace(ug,"#")+l}function dg(e,l){const a=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:l.behavior,left:o.left-a.left-(l.left||0),top:o.top-a.top-(l.top||0)}}const wn=()=>({left:window.pageXOffset,top:window.pageYOffset});function mg(e){let l;if("el"in e){const a=e.el,o=typeof a=="string"&&a.startsWith("#"),s=typeof a=="string"?o?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!s)return;l=dg(s,e)}else l=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(l):window.scrollTo(l.left!=null?l.left:window.pageXOffset,l.top!=null?l.top:window.pageYOffset)}function Sr(e,l){return(history.state?history.state.position-l:-1)+e}const _o=new Map;function pg(e,l){_o.set(e,l)}function fg(e){const l=_o.get(e);return _o.delete(e),l}let gg=()=>location.protocol+"//"+location.host;function Mc(e,l){const{pathname:a,search:o,hash:s}=l,c=e.indexOf("#");if(c>-1){let f=s.includes(e.slice(c))?e.slice(c).length:1,u=s.slice(f);return u[0]!=="/"&&(u="/"+u),br(u,"")}return br(a,e)+o+s}function hg(e,l,a,o){let s=[],c=[],m=null;const f=({state:_})=>{const w=Mc(e,location),v=a.value,x=l.value;let $=0;if(_){if(a.value=w,l.value=_,m&&m===v){m=null;return}$=x?_.position-x.position:0}else o(w);s.forEach(L=>{L(a.value,v,{delta:$,type:ua.pop,direction:$?$>0?Ql.forward:Ql.back:Ql.unknown})})};function u(){m=a.value}function d(_){s.push(_);const w=()=>{const v=s.indexOf(_);v>-1&&s.splice(v,1)};return c.push(w),w}function g(){const{history:_}=window;_.state&&_.replaceState(Ye({},_.state,{scroll:wn()}),"")}function p(){for(const _ of c)_();c=[],window.removeEventListener("popstate",f),window.removeEventListener("beforeunload",g)}return window.addEventListener("popstate",f),window.addEventListener("beforeunload",g),{pauseListeners:u,listen:d,destroy:p}}function yr(e,l,a,o=!1,s=!1){return{back:e,current:l,forward:a,replaced:o,position:window.history.length,scroll:s?wn():null}}function _g(e){const{history:l,location:a}=window,o={value:Mc(e,a)},s={value:l.state};s.value||c(o.value,{back:null,current:o.value,forward:null,position:l.length-1,replaced:!0,scroll:null},!0);function c(u,d,g){const p=e.indexOf("#"),_=p>-1?(a.host&&document.querySelector("base")?e:e.slice(p))+u:gg()+e+u;try{l[g?"replaceState":"pushState"](d,"",_),s.value=d}catch(w){console.error(w),a[g?"replace":"assign"](_)}}function m(u,d){const g=Ye({},l.state,yr(s.value.back,u,s.value.forward,!0),d,{position:s.value.position});c(u,g,!0),o.value=u}function f(u,d){const g=Ye({},s.value,l.state,{forward:u,scroll:wn()});c(g.current,g,!0);const p=Ye({},yr(o.value,u,null),{position:g.position+1},d);c(u,p,!1),o.value=u}return{location:o,state:s,push:f,replace:m}}function bg(e){e=rg(e);const l=_g(e),a=hg(e,l.state,l.location,l.replace);function o(c,m=!0){m||a.pauseListeners(),history.go(c)}const s=Ye({location:"",base:e,go:o,createHref:cg.bind(null,e)},l,a);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>l.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>l.state.value}),s}function vg(e){return typeof e=="string"||e&&typeof e=="object"}function Hc(e){return typeof e=="string"||typeof e=="symbol"}const mi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Nc=Bl("nf");var wr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(wr||(wr={}));function Cl(e,l){return Ye(new Error,{type:e,[Nc]:!0},l)}function Li(e,l){return e instanceof Error&&Nc in e&&(l==null||!!(e.type&l))}const Cr="[^/]+?",Sg={sensitive:!1,strict:!1,start:!0,end:!0},yg=/[.+*?^${}()[\]/\\]/g;function wg(e,l){const a=Ye({},Sg,l),o=[];let s=a.start?"^":"";const c=[];for(const d of e){const g=d.length?[]:[90];a.strict&&!d.length&&(s+="/");for(let p=0;p<d.length;p++){const _=d[p];let w=40+(a.sensitive?.25:0);if(_.type===0)p||(s+="/"),s+=_.value.replace(yg,"\\$&"),w+=40;else if(_.type===1){const{value:v,repeatable:x,optional:$,regexp:L}=_;c.push({name:v,repeatable:x,optional:$});const h=L||Cr;if(h!==Cr){w+=10;try{new RegExp(`(${h})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${v}" (${h}): `+k.message)}}let b=x?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;p||(b=$&&d.length<2?`(?:/${b})`:"/"+b),$&&(b+="?"),s+=b,w+=20,$&&(w+=-8),x&&(w+=-20),h===".*"&&(w+=-50)}g.push(w)}o.push(g)}if(a.strict&&a.end){const d=o.length-1;o[d][o[d].length-1]+=.7000000000000001}a.strict||(s+="/?"),a.end?s+="$":a.strict&&(s+="(?:/|$)");const m=new RegExp(s,a.sensitive?"":"i");function f(d){const g=d.match(m),p={};if(!g)return null;for(let _=1;_<g.length;_++){const w=g[_]||"",v=c[_-1];p[v.name]=w&&v.repeatable?w.split("/"):w}return p}function u(d){let g="",p=!1;for(const _ of e){(!p||!g.endsWith("/"))&&(g+="/"),p=!1;for(const w of _)if(w.type===0)g+=w.value;else if(w.type===1){const{value:v,repeatable:x,optional:$}=w,L=v in d?d[v]:"";if(Array.isArray(L)&&!x)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const h=Array.isArray(L)?L.join("/"):L;if(!h)if($)_.length<2&&(g.endsWith("/")?g=g.slice(0,-1):p=!0);else throw new Error(`Missing required param "${v}"`);g+=h}}return g}return{re:m,score:o,keys:c,parse:f,stringify:u}}function Cg(e,l){let a=0;for(;a<e.length&&a<l.length;){const o=l[a]-e[a];if(o)return o;a++}return e.length<l.length?e.length===1&&e[0]===80?-1:1:e.length>l.length?l.length===1&&l[0]===80?1:-1:0}function Ag(e,l){let a=0;const o=e.score,s=l.score;for(;a<o.length&&a<s.length;){const c=Cg(o[a],s[a]);if(c)return c;a++}return s.length-o.length}const xg={type:0,value:""},kg=/[a-zA-Z0-9_]/;function $g(e){if(!e)return[[]];if(e==="/")return[[xg]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function l(w){throw new Error(`ERR (${a})/"${d}": ${w}`)}let a=0,o=a;const s=[];let c;function m(){c&&s.push(c),c=[]}let f=0,u,d="",g="";function p(){d&&(a===0?c.push({type:0,value:d}):a===1||a===2||a===3?(c.length>1&&(u==="*"||u==="+")&&l(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),c.push({type:1,value:d,regexp:g,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):l("Invalid state to consume buffer"),d="")}function _(){d+=u}for(;f<e.length;){if(u=e[f++],u==="\\"&&a!==2){o=a,a=4;continue}switch(a){case 0:u==="/"?(d&&p(),m()):u===":"?(p(),a=1):_();break;case 4:_(),a=o;break;case 1:u==="("?a=2:kg.test(u)?_():(p(),a=0,u!=="*"&&u!=="?"&&u!=="+"&&f--);break;case 2:u===")"?g[g.length-1]=="\\"?g=g.slice(0,-1)+u:a=3:g+=u;break;case 3:p(),a=0,u!=="*"&&u!=="?"&&u!=="+"&&f--,g="";break;default:l("Unknown state");break}}return a===2&&l(`Unfinished custom RegExp for param "${d}"`),p(),m(),s}function Bg(e,l,a){const o=wg($g(e.path),a),s=Ye(o,{record:e,parent:l,children:[],alias:[]});return l&&!s.record.aliasOf==!l.record.aliasOf&&l.children.push(s),s}function Tg(e,l){const a=[],o=new Map;l=xr({strict:!1,end:!0,sensitive:!1},l);function s(g){return o.get(g)}function c(g,p,_){const w=!_,v=Dg(g);v.aliasOf=_&&_.record;const x=xr(l,g),$=[v];if("alias"in g){const b=typeof g.alias=="string"?[g.alias]:g.alias;for(const k of b)$.push(Ye({},v,{components:_?_.record.components:v.components,path:k,aliasOf:_?_.record:v}))}let L,h;for(const b of $){const{path:k}=b;if(p&&k[0]!=="/"){const T=p.record.path,E=T[T.length-1]==="/"?"":"/";b.path=p.record.path+(k&&E+k)}if(L=Bg(b,p,x),_?_.alias.push(L):(h=h||L,h!==L&&h.alias.push(L),w&&g.name&&!Ar(L)&&m(g.name)),"children"in v){const T=v.children;for(let E=0;E<T.length;E++)c(T[E],L,_&&_.children[E])}_=_||L,u(L)}return h?()=>{m(h)}:Xl}function m(g){if(Hc(g)){const p=o.get(g);p&&(o.delete(g),a.splice(a.indexOf(p),1),p.children.forEach(m),p.alias.forEach(m))}else{const p=a.indexOf(g);p>-1&&(a.splice(p,1),g.record.name&&o.delete(g.record.name),g.children.forEach(m),g.alias.forEach(m))}}function f(){return a}function u(g){let p=0;for(;p<a.length&&Ag(g,a[p])>=0;)p++;a.splice(p,0,g),g.record.name&&!Ar(g)&&o.set(g.record.name,g)}function d(g,p){let _,w={},v,x;if("name"in g&&g.name){if(_=o.get(g.name),!_)throw Cl(1,{location:g});x=_.record.name,w=Ye(Lg(p.params,_.keys.filter(h=>!h.optional).map(h=>h.name)),g.params),v=_.stringify(w)}else if("path"in g)v=g.path,_=a.find(h=>h.re.test(v)),_&&(w=_.parse(v),x=_.record.name);else{if(_=p.name?o.get(p.name):a.find(h=>h.re.test(p.path)),!_)throw Cl(1,{location:g,currentLocation:p});x=_.record.name,w=Ye({},p.params,g.params),v=_.stringify(w)}const $=[];let L=_;for(;L;)$.unshift(L.record),L=L.parent;return{name:x,path:v,params:w,matched:$,meta:Eg($)}}return e.forEach(g=>c(g)),{addRoute:c,resolve:d,removeRoute:m,getRoutes:f,getRecordMatcher:s}}function Lg(e,l){const a={};for(const o of l)o in e&&(a[o]=e[o]);return a}function Dg(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Ig(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function Ig(e){const l={},a=e.props||!1;if("component"in e)l.default=a;else for(const o in e.components)l[o]=typeof a=="boolean"?a:a[o];return l}function Ar(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Eg(e){return e.reduce((l,a)=>Ye(l,a.meta),{})}function xr(e,l){const a={};for(const o in e)a[o]=o in l?l[o]:e[o];return a}const Oc=/#/g,Rg=/&/g,zg=/\//g,Pg=/=/g,Fg=/\?/g,qc=/\+/g,Vg=/%5B/g,Mg=/%5D/g,Gc=/%5E/g,Hg=/%60/g,jc=/%7B/g,Ng=/%7C/g,Uc=/%7D/g,Og=/%20/g;function ds(e){return encodeURI(""+e).replace(Ng,"|").replace(Vg,"[").replace(Mg,"]")}function qg(e){return ds(e).replace(jc,"{").replace(Uc,"}").replace(Gc,"^")}function bo(e){return ds(e).replace(qc,"%2B").replace(Og,"+").replace(Oc,"%23").replace(Rg,"%26").replace(Hg,"`").replace(jc,"{").replace(Uc,"}").replace(Gc,"^")}function Gg(e){return bo(e).replace(Pg,"%3D")}function jg(e){return ds(e).replace(Oc,"%23").replace(Fg,"%3F")}function Ug(e){return e==null?"":jg(e).replace(zg,"%2F")}function Xa(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Yg(e){const l={};if(e===""||e==="?")return l;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<o.length;++s){const c=o[s].replace(qc," "),m=c.indexOf("="),f=Xa(m<0?c:c.slice(0,m)),u=m<0?null:Xa(c.slice(m+1));if(f in l){let d=l[f];Array.isArray(d)||(d=l[f]=[d]),d.push(u)}else l[f]=u}return l}function kr(e){let l="";for(let a in e){const o=e[a];if(a=Gg(a),o==null){o!==void 0&&(l+=(l.length?"&":"")+a);continue}(Array.isArray(o)?o.map(c=>c&&bo(c)):[o&&bo(o)]).forEach(c=>{c!==void 0&&(l+=(l.length?"&":"")+a,c!=null&&(l+="="+c))})}return l}function Jg(e){const l={};for(const a in e){const o=e[a];o!==void 0&&(l[a]=Array.isArray(o)?o.map(s=>s==null?null:""+s):o==null?o:""+o)}return l}function Pl(){let e=[];function l(o){return e.push(o),()=>{const s=e.indexOf(o);s>-1&&e.splice(s,1)}}function a(){e=[]}return{add:l,list:()=>e,reset:a}}function Wg(e,l,a){const o=()=>{e[l].delete(a)};Zi(o),ts(o),es(()=>{e[l].add(a)}),e[l].add(a)}function Kg(e){const l=Me(Fc,{}).value;l&&Wg(l,"updateGuards",e)}function bi(e,l,a,o,s){const c=o&&(o.enterCallbacks[s]=o.enterCallbacks[s]||[]);return()=>new Promise((m,f)=>{const u=p=>{p===!1?f(Cl(4,{from:a,to:l})):p instanceof Error?f(p):vg(p)?f(Cl(2,{from:l,to:p})):(c&&o.enterCallbacks[s]===c&&typeof p=="function"&&c.push(p),m())},d=e.call(o&&o.instances[s],l,a,u);let g=Promise.resolve(d);e.length<3&&(g=g.then(u)),g.catch(p=>f(p))})}function Fn(e,l,a,o){const s=[];for(const c of e)for(const m in c.components){let f=c.components[m];if(!(l!=="beforeRouteEnter"&&!c.instances[m]))if(Xg(f)){const d=(f.__vccOpts||f)[l];d&&s.push(bi(d,a,o,c,m))}else{let u=f();s.push(()=>u.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${m}" at "${c.path}"`));const g=tg(d)?d.default:d;c.components[m]=g;const _=(g.__vccOpts||g)[l];return _&&bi(_,a,o,c,m)()}))}}return s}function Xg(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function $r(e){const l=Me(yn),a=Me(cs),o=H(()=>l.resolve(r(e.to))),s=H(()=>{const{matched:u}=o.value,{length:d}=u,g=u[d-1],p=a.matched;if(!g||!p.length)return-1;const _=p.findIndex(wl.bind(null,g));if(_>-1)return _;const w=Br(u[d-2]);return d>1&&Br(g)===w&&p[p.length-1].path!==w?p.findIndex(wl.bind(null,u[d-2])):_}),c=H(()=>s.value>-1&&eh(a.params,o.value.params)),m=H(()=>s.value>-1&&s.value===a.matched.length-1&&Vc(a.params,o.value.params));function f(u={}){return Zg(u)?l[r(e.replace)?"replace":"push"](r(e.to)).catch(Xl):Promise.resolve()}return{route:o,href:H(()=>o.value.href),isActive:c,isExactActive:m,navigate:f}}const Qg=P({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$r,setup(e,{slots:l}){const a=oi($r(e)),{options:o}=Me(yn),s=H(()=>({[Tr(e.activeClass,o.linkActiveClass,"router-link-active")]:a.isActive,[Tr(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const c=l.default&&l.default(a);return e.custom?c:X("a",{"aria-current":a.isExactActive?e.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:s.value},c)}}}),ms=Qg;function Zg(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const l=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(l))return}return e.preventDefault&&e.preventDefault(),!0}}function eh(e,l){for(const a in l){const o=l[a],s=e[a];if(typeof o=="string"){if(o!==s)return!1}else if(!Array.isArray(s)||s.length!==o.length||o.some((c,m)=>c!==s[m]))return!1}return!0}function Br(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Tr=(e,l,a)=>e??l??a,th=P({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:l,slots:a}){const o=Me(ho),s=H(()=>e.route||o.value),c=Me(_r,0),m=H(()=>s.value.matched[c]);dt(_r,c+1),dt(Fc,m),dt(ho,s);const f=j();return gt(()=>[f.value,m.value,e.name],([u,d,g],[p,_,w])=>{d&&(d.instances[g]=u,_&&_!==d&&u&&u===p&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),u&&d&&(!_||!wl(d,_)||!p)&&(d.enterCallbacks[g]||[]).forEach(v=>v(u))},{flush:"post"}),()=>{const u=s.value,d=m.value,g=d&&d.components[e.name],p=e.name;if(!g)return Lr(a.default,{Component:g,route:u});const _=d.props[e.name],w=_?_===!0?u.params:typeof _=="function"?_(u):_:null,x=X(g,Ye({},w,l,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(d.instances[p]=null)},ref:f}));return Lr(a.default,{Component:x,route:u})||x}}});function Lr(e,l){if(!e)return null;const a=e(l);return a.length===1?a[0]:a}const ih=th;function lh(e){const l=Tg(e.routes,e),a=e.parseQuery||Yg,o=e.stringifyQuery||kr,s=e.history,c=Pl(),m=Pl(),f=Pl(),u=mu(mi);let d=mi;nl&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const g=zn.bind(null,J=>""+J),p=zn.bind(null,Ug),_=zn.bind(null,Xa);function w(J,ue){let re,_e;return Hc(J)?(re=l.getRecordMatcher(J),_e=ue):_e=J,l.addRoute(_e,re)}function v(J){const ue=l.getRecordMatcher(J);ue&&l.removeRoute(ue)}function x(){return l.getRoutes().map(J=>J.record)}function $(J){return!!l.getRecordMatcher(J)}function L(J,ue){if(ue=Ye({},ue||u.value),typeof J=="string"){const $e=Pn(a,J,ue.path),D=l.resolve({path:$e.path},ue),R=s.createHref($e.fullPath);return Ye($e,D,{params:_(D.params),hash:Xa($e.hash),redirectedFrom:void 0,href:R})}let re;if("path"in J)re=Ye({},J,{path:Pn(a,J.path,ue.path).path});else{const $e=Ye({},J.params);for(const D in $e)$e[D]==null&&delete $e[D];re=Ye({},J,{params:p(J.params)}),ue.params=p(ue.params)}const _e=l.resolve(re,ue),He=J.hash||"";_e.params=g(_(_e.params));const Ne=ag(o,Ye({},J,{hash:qg(He),path:_e.path})),ke=s.createHref(Ne);return Ye({fullPath:Ne,hash:He,query:o===kr?Jg(J.query):J.query||{}},_e,{redirectedFrom:void 0,href:ke})}function h(J){return typeof J=="string"?Pn(a,J,u.value.path):Ye({},J)}function b(J,ue){if(d!==J)return Cl(8,{from:ue,to:J})}function k(J){return V(J)}function T(J){return k(Ye(h(J),{replace:!0}))}function E(J){const ue=J.matched[J.matched.length-1];if(ue&&ue.redirect){const{redirect:re}=ue;let _e=typeof re=="function"?re(J):re;return typeof _e=="string"&&(_e=_e.includes("?")||_e.includes("#")?_e=h(_e):{path:_e},_e.params={}),Ye({query:J.query,hash:J.hash,params:J.params},_e)}}function V(J,ue){const re=d=L(J),_e=u.value,He=J.state,Ne=J.force,ke=J.replace===!0,$e=E(re);if($e)return V(Ye(h($e),{state:He,force:Ne,replace:ke}),ue||re);const D=re;D.redirectedFrom=ue;let R;return!Ne&&ng(o,_e,re)&&(R=Cl(16,{to:D,from:_e}),Je(_e,_e,!0,!1)),(R?Promise.resolve(R):F(D,_e)).catch(q=>Li(q)?q:de(q,D,_e)).then(q=>{if(q){if(Li(q,2))return V(Ye(h(q.to),{state:He,force:Ne,replace:ke}),ue||D)}else q=Q(D,_e,!0,ke,He);return G(D,_e,q),q})}function M(J,ue){const re=b(J,ue);return re?Promise.reject(re):Promise.resolve()}function F(J,ue){let re;const[_e,He,Ne]=ah(J,ue);re=Fn(_e.reverse(),"beforeRouteLeave",J,ue);for(const $e of _e)$e.leaveGuards.forEach(D=>{re.push(bi(D,J,ue))});const ke=M.bind(null,J,ue);return re.push(ke),ll(re).then(()=>{re=[];for(const $e of c.list())re.push(bi($e,J,ue));return re.push(ke),ll(re)}).then(()=>{re=Fn(He,"beforeRouteUpdate",J,ue);for(const $e of He)$e.updateGuards.forEach(D=>{re.push(bi(D,J,ue))});return re.push(ke),ll(re)}).then(()=>{re=[];for(const $e of J.matched)if($e.beforeEnter&&!ue.matched.includes($e))if(Array.isArray($e.beforeEnter))for(const D of $e.beforeEnter)re.push(bi(D,J,ue));else re.push(bi($e.beforeEnter,J,ue));return re.push(ke),ll(re)}).then(()=>(J.matched.forEach($e=>$e.enterCallbacks={}),re=Fn(Ne,"beforeRouteEnter",J,ue),re.push(ke),ll(re))).then(()=>{re=[];for(const $e of m.list())re.push(bi($e,J,ue));return re.push(ke),ll(re)}).catch($e=>Li($e,8)?$e:Promise.reject($e))}function G(J,ue,re){for(const _e of f.list())_e(J,ue,re)}function Q(J,ue,re,_e,He){const Ne=b(J,ue);if(Ne)return Ne;const ke=ue===mi,$e=nl?history.state:{};re&&(_e||ke?s.replace(J.fullPath,Ye({scroll:ke&&$e&&$e.scroll},He)):s.push(J.fullPath,He)),u.value=J,Je(J,ue,re,ke),Le()}let Y;function ge(){Y=s.listen((J,ue,re)=>{const _e=L(J),He=E(_e);if(He){V(Ye(He,{replace:!0}),_e).catch(Xl);return}d=_e;const Ne=u.value;nl&&pg(Sr(Ne.fullPath,re.delta),wn()),F(_e,Ne).catch(ke=>Li(ke,12)?ke:Li(ke,2)?(V(ke.to,_e).then($e=>{Li($e,20)&&!re.delta&&re.type===ua.pop&&s.go(-1,!1)}).catch(Xl),Promise.reject()):(re.delta&&s.go(-re.delta,!1),de(ke,_e,Ne))).then(ke=>{ke=ke||Q(_e,Ne,!1),ke&&(re.delta?s.go(-re.delta,!1):re.type===ua.pop&&Li(ke,20)&&s.go(-1,!1)),G(_e,Ne,ke)}).catch(Xl)})}let Be=Pl(),U=Pl(),K;function de(J,ue,re){Le(J);const _e=U.list();return _e.length?_e.forEach(He=>He(J,ue,re)):console.error(J),Promise.reject(J)}function le(){return K&&u.value!==mi?Promise.resolve():new Promise((J,ue)=>{Be.add([J,ue])})}function Le(J){K||(K=!0,ge(),Be.list().forEach(([ue,re])=>J?re(J):ue()),Be.reset())}function Je(J,ue,re,_e){const{scrollBehavior:He}=e;if(!nl||!He)return Promise.resolve();const Ne=!re&&fg(Sr(J.fullPath,0))||(_e||!re)&&history.state&&history.state.scroll||null;return $l().then(()=>He(J,ue,Ne)).then(ke=>ke&&mg(ke)).catch(ke=>de(ke,J,ue))}const ot=J=>s.go(J);let Ue;const Qt=new Set;return{currentRoute:u,addRoute:w,removeRoute:v,hasRoute:$,getRoutes:x,resolve:L,options:e,push:k,replace:T,go:ot,back:()=>ot(-1),forward:()=>ot(1),beforeEach:c.add,beforeResolve:m.add,afterEach:f.add,onError:U.add,isReady:le,install(J){const ue=this;J.component("RouterLink",ms),J.component("RouterView",ih),J.config.globalProperties.$router=ue,Object.defineProperty(J.config.globalProperties,"$route",{enumerable:!0,get:()=>r(u)}),nl&&!Ue&&u.value===mi&&(Ue=!0,k(s.location).catch(He=>{}));const re={};for(const He in mi)re[He]=H(()=>u.value[He]);J.provide(yn,ue),J.provide(cs,oi(re)),J.provide(ho,u);const _e=J.unmount;Qt.add(J),J.unmount=function(){Qt.delete(J),Qt.size<1&&(d=mi,Y&&Y(),u.value=mi,Ue=!1,K=!1),_e()}}}}function ll(e){return e.reduce((l,a)=>l.then(()=>a()),Promise.resolve())}function ah(e,l){const a=[],o=[],s=[],c=Math.max(l.matched.length,e.matched.length);for(let m=0;m<c;m++){const f=l.matched[m];f&&(e.matched.find(d=>wl(d,f))?o.push(f):a.push(f));const u=e.matched[m];u&&(l.matched.find(d=>wl(d,u))||s.push(u))}return[a,o,s]}function Yc(){return Me(yn)}function Jc(){return Me(cs)}const nh={__name:"Navbar",props:["onClick"],setup(e){const l=j(),a=Yc();function o(s){return s.charAt(0).toUpperCase()+s.slice(1)}return Xo(()=>{const m=a.currentRoute.value.path.match(/\/([^/]+)$/);m&&(l.value=o(m[1]))}),(s,c)=>{const m=C("SuiIcon"),f=C("SuiMenuItem"),u=C("SuiMenu");return A(),B(u,{id:"navbar",fixed:"",icon:"",inverted:"",size:"big"},{default:i(()=>[t(f,{onClick:e.onClick},{default:i(()=>[t(m,{name:"hamburger"})]),_:1},8,["onClick"]),t(f,null,{default:i(()=>[n(Te(l.value),1)]),_:1})]),_:1})}}},oh=Re(nh,[["__scopeId","data-v-338afb35"]]),sh=P({name:"Sidebar",setup(){const e=Jc();return{isActive:m=>e.path===m,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),rh=S("strong",null," Fomantic UI Vue ",-1),uh=S("b",null,"Getting Started",-1);function ch(e,l,a,o,s,c){const m=C("sui-menu-item"),f=C("sui-menu-header"),u=C("sui-menu-menu"),d=C("sui-menu");return A(),B(d,{fluid:"",inverted:"",vertical:""},{default:i(()=>[t(m,{as:"div"},{default:i(()=>[rh]),_:1}),t(m,{as:"router-link",to:"/"},{default:i(()=>[uh]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Elements"}),t(u,null,{default:i(()=>[(A(!0),be(Ae,null,Qe(e.elements,g=>(A(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Collections"}),t(u,null,{default:i(()=>[(A(!0),be(Ae,null,Qe(e.collections,g=>(A(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Views"}),t(u,null,{default:i(()=>[(A(!0),be(Ae,null,Qe(e.views,g=>(A(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Modules"}),t(u,null,{default:i(()=>[(A(!0),be(Ae,null,Qe(e.modules,g=>(A(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const dh=Re(sh,[["render",ch]]),mh={class:"sidemenu"},ph={style:{flex:"1","overflow-y":"scroll"}},fh={__name:"Sidebar",setup(e){return(l,a)=>(A(),be("div",mh,[S("div",ph,[t(dh)])]))}},gh=Re(fh,[["__scopeId","data-v-379ef704"]]),hh=P({name:"Sidebar",setup(){const e=Jc();return{isActive:m=>e.path===m,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),_h=S("strong",null," Fomantic UI Vue ",-1),bh=S("b",null,"Getting Started",-1);function vh(e,l,a,o,s,c){const m=C("sui-menu-item"),f=C("sui-menu-header"),u=C("sui-menu-menu"),d=C("sui-sidebar");return A(),B(d,{dimmed:"",inverted:"",style:{width:"250px"}},{default:i(()=>[t(m,{as:"div"},{default:i(()=>[_h]),_:1}),t(m,{as:"router-link",to:"/"},{default:i(()=>[bh]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Elements"}),t(u,null,{default:i(()=>[(A(!0),be(Ae,null,Qe(e.elements,g=>(A(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Collections"}),t(u,null,{default:i(()=>[(A(!0),be(Ae,null,Qe(e.collections,g=>(A(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Views"}),t(u,null,{default:i(()=>[(A(!0),be(Ae,null,Qe(e.views,g=>(A(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Modules"}),t(u,null,{default:i(()=>[(A(!0),be(Ae,null,Qe(e.modules,g=>(A(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const Sh=Re(hh,[["render",vh]]),yh={class:"pusher",style:{height:"100vh"}},wh={class:"article"},Ch={__name:"Home",setup(e){const l=j(!1),a=()=>l.value=!l.value;return Kg(()=>{l.value=!1}),(o,s)=>{const c=C("router-view"),m=C("SuiSegment");return A(),B(m,{class:"pushable",style:{border:"none"}},{default:i(()=>[t(Sh,{visible:l.value},null,8,["visible"]),S("div",yh,[t(gh),t(oh,{"on-click":a}),S("div",wh,[t(c)])])]),_:1})}}},Ah=Re(Ch,[["__scopeId","data-v-0bfd4ee9"]]),xh={__name:"DocSections",props:["docs"],setup(e){const l=e,a=H(()=>[...new Set(l.docs.map(o=>o.category))]);return(o,s)=>{const c=C("SuiHeader");return A(!0),be(Ae,null,Qe(a.value,(m,f)=>(A(),be(Ae,{key:m},[t(c,{as:"h2",dividing:"",style:kl({marginTop:f!==0?"5rem":"0",paddingTop:"2rem"})},{default:i(()=>[n(Te(m),1)]),_:2},1032,["style"]),(A(!0),be(Ae,null,Qe(e.docs.filter(u=>u.category===m),(u,d)=>(A(),B(Au(u.component),{key:u.label+"_"+d,id:u.id,style:{paddingTop:"3rem"}},null,8,["id"]))),128))],64))),128)}}},kh=e=>(yu("data-v-e2ae2e49"),e=e(),wu(),e),$h={class:"item"},Bh=kh(()=>S("i",{class:"dropdown icon"},null,-1)),Th={class:"content menu active"},Lh={__name:"DocTableLink",props:["header","items"],setup(e){const{id:l}=Ou(),a=m=>{m.preventDefault();const f=document.getElementById(l);f.open?s(f):(f.open=!0,o(f))},o=m=>{m.querySelector(".title").classList.add("active");const u=m.querySelector(".content"),d=u.offsetHeight;u.style.maxHeight=0,requestAnimationFrame(()=>{u.style.maxHeight=`${d}px`});const g=new AbortController;u.addEventListener("transitionend",()=>{u.removeAttribute("style"),g.abort()},{signal:g.signal})},s=m=>{const f=m.querySelector(".title"),u=m.querySelector(".content"),d=u.offsetHeight;u.style.maxHeight=`${d}px`,requestAnimationFrame(()=>{u.style.maxHeight=0,f.classList.remove("active")});const g=new AbortController;u.addEventListener("transitionend",()=>{u.removeAttribute("style"),m.open=!1,g.abort()},{signal:g.signal})},c=(m,f)=>{m.preventDefault(),document.getElementById(f.replace("_link","")).scrollIntoView({behavior:"smooth",block:"start"})};return(m,f)=>(A(),be("details",$h,[S("summary",{class:"title",onClick:a},[Bh,S("b",null,Te(e.header),1)]),S("div",Th,[(A(!0),be(Ae,null,Qe(e.items,u=>(A(),B(r(ms),{to:`#${u.id}`,class:"item",onClick:d=>c(d,u.id)},{default:i(()=>[n(Te(u.label),1)]),_:2},1032,["to","onClick"]))),256))])]))}},Dh=Re(Lh,[["__scopeId","data-v-e2ae2e49"]]),Ih={class:"sticky"},Eh={class:"ui vertical following fluid accordion text large menu"},Rh={__name:"DocTableContents",props:["title","links"],setup(e){const l=e,a=[...new Set(l.links.map(o=>o.category))];return(o,s)=>{const c=C("SuiHeader"),m=C("SuiRail");return A(),B(m,{id:"table-contents",position:"right",dividing:""},{default:i(()=>[S("div",Ih,[t(c,{as:"h3"},{default:i(()=>[n(Te(e.title),1)]),_:1}),S("div",Eh,[(A(),be(Ae,null,Qe(a,f=>t(Dh,{id:`${f}_link`,header:f,items:e.links.filter(u=>u.category===f)},null,8,["id","header","items"])),64))])])]),_:1})}}},zh=Re(Rh,[["__scopeId","data-v-bd90305d"]]),Ph={class:"intro"},Fh={__name:"DocComponent",props:["title","description","componentDocs"],setup(e){const l=j();return(a,o)=>{const s=C("SuiHeaderSubheader"),c=C("SuiHeader"),m=C("SuiDivider"),f=C("SuiIcon"),u=C("SuiMenuItem"),d=C("SuiPopup"),g=C("SuiMenu"),p=C("SuiContainer"),_=C("SuiSegment");return A(),be("div",null,[t(_,{id:"masthead",vertical:"",style:{"border-bottom":"1px solid #DDDDDD"}},{default:i(()=>[t(p,{class:"main"},{default:i(()=>[S("div",Ph,[t(c,{as:"h1"},{default:i(()=>[n(Te(e.title)+" ",1),t(s,null,{default:i(()=>[n(Te(e.description),1)]),_:1})]),_:1}),t(m,{hidden:""}),t(g,{icon:"",floated:"right"},{default:i(()=>[t(u,{as:"a",icon:"",ref_key:"el",ref:l,href:"https://github.com/nightswinger/vue-fomantic-ui"},{default:i(()=>[t(f,{name:"alternate github"})]),_:1},512),t(d,{trigger:l.value,position:"top right"},{default:i(()=>[n(" View Project on GitHub ")]),_:1},8,["trigger"])]),_:1})])]),_:1})]),_:1}),t(p,{class:"main"},{default:i(()=>[t(_,{basic:"",fitted:""},{default:i(()=>[e.componentDocs?(A(),be(Ae,{key:0},[t(xh,{docs:e.componentDocs},null,8,["docs"]),t(zh,{title:e.title,links:e.componentDocs},null,8,["title","links"])],64)):ns("",!0),Gi(a.$slots,"default",{},void 0,!0)]),_:3})]),_:3})])}}},rt=Re(Fh,[["__scopeId","data-v-d22eb33f"]]);var Dr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Wc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Vh(e){if(e.__esModule)return e;var l=e.default;if(typeof l=="function"){var a=function o(){return this instanceof o?Reflect.construct(l,arguments,this.constructor):l.apply(this,arguments)};a.prototype=l.prototype}else a={};return Object.defineProperty(a,"__esModule",{value:!0}),Object.keys(e).forEach(function(o){var s=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(a,o,s.get?s:{enumerable:!0,get:function(){return e[o]}})}),a}var Kc={exports:{}};(function(e){var l=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var a=function(o){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,c=0,m={},f={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function h(b){return b instanceof u?new u(b.type,h(b.content),b.alias):Array.isArray(b)?b.map(h):b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(h){return Object.prototype.toString.call(h).slice(8,-1)},objId:function(h){return h.__id||Object.defineProperty(h,"__id",{value:++c}),h.__id},clone:function h(b,k){k=k||{};var T,E;switch(f.util.type(b)){case"Object":if(E=f.util.objId(b),k[E])return k[E];T={},k[E]=T;for(var V in b)b.hasOwnProperty(V)&&(T[V]=h(b[V],k));return T;case"Array":return E=f.util.objId(b),k[E]?k[E]:(T=[],k[E]=T,b.forEach(function(M,F){T[F]=h(M,k)}),T);default:return b}},getLanguage:function(h){for(;h;){var b=s.exec(h.className);if(b)return b[1].toLowerCase();h=h.parentElement}return"none"},setLanguage:function(h,b){h.className=h.className.replace(RegExp(s,"gi"),""),h.classList.add("language-"+b)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(T){var h=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(T.stack)||[])[1];if(h){var b=document.getElementsByTagName("script");for(var k in b)if(b[k].src==h)return b[k]}return null}},isActive:function(h,b,k){for(var T="no-"+b;h;){var E=h.classList;if(E.contains(b))return!0;if(E.contains(T))return!1;h=h.parentElement}return!!k}},languages:{plain:m,plaintext:m,text:m,txt:m,extend:function(h,b){var k=f.util.clone(f.languages[h]);for(var T in b)k[T]=b[T];return k},insertBefore:function(h,b,k,T){T=T||f.languages;var E=T[h],V={};for(var M in E)if(E.hasOwnProperty(M)){if(M==b)for(var F in k)k.hasOwnProperty(F)&&(V[F]=k[F]);k.hasOwnProperty(M)||(V[M]=E[M])}var G=T[h];return T[h]=V,f.languages.DFS(f.languages,function(Q,Y){Y===G&&Q!=h&&(this[Q]=V)}),V},DFS:function h(b,k,T,E){E=E||{};var V=f.util.objId;for(var M in b)if(b.hasOwnProperty(M)){k.call(b,M,b[M],T||M);var F=b[M],G=f.util.type(F);G==="Object"&&!E[V(F)]?(E[V(F)]=!0,h(F,k,null,E)):G==="Array"&&!E[V(F)]&&(E[V(F)]=!0,h(F,k,M,E))}}},plugins:{},highlightAll:function(h,b){f.highlightAllUnder(document,h,b)},highlightAllUnder:function(h,b,k){var T={callback:k,container:h,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};f.hooks.run("before-highlightall",T),T.elements=Array.prototype.slice.apply(T.container.querySelectorAll(T.selector)),f.hooks.run("before-all-elements-highlight",T);for(var E=0,V;V=T.elements[E++];)f.highlightElement(V,b===!0,T.callback)},highlightElement:function(h,b,k){var T=f.util.getLanguage(h),E=f.languages[T];f.util.setLanguage(h,T);var V=h.parentElement;V&&V.nodeName.toLowerCase()==="pre"&&f.util.setLanguage(V,T);var M=h.textContent,F={element:h,language:T,grammar:E,code:M};function G(Y){F.highlightedCode=Y,f.hooks.run("before-insert",F),F.element.innerHTML=F.highlightedCode,f.hooks.run("after-highlight",F),f.hooks.run("complete",F),k&&k.call(F.element)}if(f.hooks.run("before-sanity-check",F),V=F.element.parentElement,V&&V.nodeName.toLowerCase()==="pre"&&!V.hasAttribute("tabindex")&&V.setAttribute("tabindex","0"),!F.code){f.hooks.run("complete",F),k&&k.call(F.element);return}if(f.hooks.run("before-highlight",F),!F.grammar){G(f.util.encode(F.code));return}if(b&&o.Worker){var Q=new Worker(f.filename);Q.onmessage=function(Y){G(Y.data)},Q.postMessage(JSON.stringify({language:F.language,code:F.code,immediateClose:!0}))}else G(f.highlight(F.code,F.grammar,F.language))},highlight:function(h,b,k){var T={code:h,grammar:b,language:k};if(f.hooks.run("before-tokenize",T),!T.grammar)throw new Error('The language "'+T.language+'" has no grammar.');return T.tokens=f.tokenize(T.code,T.grammar),f.hooks.run("after-tokenize",T),u.stringify(f.util.encode(T.tokens),T.language)},tokenize:function(h,b){var k=b.rest;if(k){for(var T in k)b[T]=k[T];delete b.rest}var E=new p;return _(E,E.head,h),g(h,E,b,E.head,0),v(E)},hooks:{all:{},add:function(h,b){var k=f.hooks.all;k[h]=k[h]||[],k[h].push(b)},run:function(h,b){var k=f.hooks.all[h];if(!(!k||!k.length))for(var T=0,E;E=k[T++];)E(b)}},Token:u};o.Prism=f;function u(h,b,k,T){this.type=h,this.content=b,this.alias=k,this.length=(T||"").length|0}u.stringify=function h(b,k){if(typeof b=="string")return b;if(Array.isArray(b)){var T="";return b.forEach(function(G){T+=h(G,k)}),T}var E={type:b.type,content:h(b.content,k),tag:"span",classes:["token",b.type],attributes:{},language:k},V=b.alias;V&&(Array.isArray(V)?Array.prototype.push.apply(E.classes,V):E.classes.push(V)),f.hooks.run("wrap",E);var M="";for(var F in E.attributes)M+=" "+F+'="'+(E.attributes[F]||"").replace(/"/g,"&quot;")+'"';return"<"+E.tag+' class="'+E.classes.join(" ")+'"'+M+">"+E.content+"</"+E.tag+">"};function d(h,b,k,T){h.lastIndex=b;var E=h.exec(k);if(E&&T&&E[1]){var V=E[1].length;E.index+=V,E[0]=E[0].slice(V)}return E}function g(h,b,k,T,E,V){for(var M in k)if(!(!k.hasOwnProperty(M)||!k[M])){var F=k[M];F=Array.isArray(F)?F:[F];for(var G=0;G<F.length;++G){if(V&&V.cause==M+","+G)return;var Q=F[G],Y=Q.inside,ge=!!Q.lookbehind,Be=!!Q.greedy,U=Q.alias;if(Be&&!Q.pattern.global){var K=Q.pattern.toString().match(/[imsuy]*$/)[0];Q.pattern=RegExp(Q.pattern.source,K+"g")}for(var de=Q.pattern||Q,le=T.next,Le=E;le!==b.tail&&!(V&&Le>=V.reach);Le+=le.value.length,le=le.next){var Je=le.value;if(b.length>h.length)return;if(!(Je instanceof u)){var ot=1,Ue;if(Be){if(Ue=d(de,Le,h,ge),!Ue||Ue.index>=h.length)break;var ue=Ue.index,Qt=Ue.index+Ue[0].length,Pt=Le;for(Pt+=le.value.length;ue>=Pt;)le=le.next,Pt+=le.value.length;if(Pt-=le.value.length,Le=Pt,le.value instanceof u)continue;for(var J=le;J!==b.tail&&(Pt<Qt||typeof J.value=="string");J=J.next)ot++,Pt+=J.value.length;ot--,Je=h.slice(Le,Pt),Ue.index-=Le}else if(Ue=d(de,0,Je,ge),!Ue)continue;var ue=Ue.index,re=Ue[0],_e=Je.slice(0,ue),He=Je.slice(ue+re.length),Ne=Le+Je.length;V&&Ne>V.reach&&(V.reach=Ne);var ke=le.prev;_e&&(ke=_(b,ke,_e),Le+=_e.length),w(b,ke,ot);var $e=new u(M,Y?f.tokenize(re,Y):re,U,re);if(le=_(b,ke,$e),He&&_(b,le,He),ot>1){var D={cause:M+","+G,reach:Ne};g(h,b,k,le.prev,Le,D),V&&D.reach>V.reach&&(V.reach=D.reach)}}}}}}function p(){var h={value:null,prev:null,next:null},b={value:null,prev:h,next:null};h.next=b,this.head=h,this.tail=b,this.length=0}function _(h,b,k){var T=b.next,E={value:k,prev:b,next:T};return b.next=E,T.prev=E,h.length++,E}function w(h,b,k){for(var T=b.next,E=0;E<k&&T!==h.tail;E++)T=T.next;b.next=T,T.prev=b,h.length-=E}function v(h){for(var b=[],k=h.head.next;k!==h.tail;)b.push(k.value),k=k.next;return b}if(!o.document)return o.addEventListener&&(f.disableWorkerMessageHandler||o.addEventListener("message",function(h){var b=JSON.parse(h.data),k=b.language,T=b.code,E=b.immediateClose;o.postMessage(f.highlight(T,f.languages[k],k)),E&&o.close()},!1)),f;var x=f.util.currentScript();x&&(f.filename=x.src,x.hasAttribute("data-manual")&&(f.manual=!0));function $(){f.manual||f.highlightAll()}if(!f.manual){var L=document.readyState;L==="loading"||L==="interactive"&&x&&x.defer?document.addEventListener("DOMContentLoaded",$):window.requestAnimationFrame?window.requestAnimationFrame($):window.setTimeout($,16)}return f}(l);e.exports&&(e.exports=a),typeof Dr<"u"&&(Dr.Prism=a),a.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(s,c){var m={};m["language-"+c]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[c]},m.cdata=/^<!\[CDATA\[|\]\]>$/i;var f={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:m}};f["language-"+c]={pattern:/[\s\S]+/,inside:a.languages[c]};var u={};u[s]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return s}),"i"),lookbehind:!0,greedy:!0,inside:f},a.languages.insertBefore("markup","cdata",u)}}),Object.defineProperty(a.languages.markup.tag,"addAttribute",{value:function(o,s){a.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:a.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,function(o){var s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+s.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var c=o.languages.markup;c&&(c.tag.addInlined("style","css"),c.tag.addAttribute("style","css"))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),a.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),a.languages.markup&&(a.languages.markup.tag.addInlined("script","javascript"),a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),a.languages.js=a.languages.javascript,function(){if(typeof a>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading…",s=function(x,$){return"✖ Error "+x+" while fetching file: "+$},c="✖ Error: File does not exist or is empty",m={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},f="data-src-status",u="loading",d="loaded",g="failed",p="pre[data-src]:not(["+f+'="'+d+'"]):not(['+f+'="'+u+'"])';function _(x,$,L){var h=new XMLHttpRequest;h.open("GET",x,!0),h.onreadystatechange=function(){h.readyState==4&&(h.status<400&&h.responseText?$(h.responseText):h.status>=400?L(s(h.status,h.statusText)):L(c))},h.send(null)}function w(x){var $=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(x||"");if($){var L=Number($[1]),h=$[2],b=$[3];return h?b?[L,Number(b)]:[L,void 0]:[L,L]}}a.hooks.add("before-highlightall",function(x){x.selector+=", "+p}),a.hooks.add("before-sanity-check",function(x){var $=x.element;if($.matches(p)){x.code="",$.setAttribute(f,u);var L=$.appendChild(document.createElement("CODE"));L.textContent=o;var h=$.getAttribute("data-src"),b=x.language;if(b==="none"){var k=(/\.(\w+)$/.exec(h)||[,"none"])[1];b=m[k]||k}a.util.setLanguage(L,b),a.util.setLanguage($,b);var T=a.plugins.autoloader;T&&T.loadLanguages(b),_(h,function(E){$.setAttribute(f,d);var V=w($.getAttribute("data-range"));if(V){var M=E.split(/\r\n?|\n/g),F=V[0],G=V[1]==null?M.length:V[1];F<0&&(F+=M.length),F=Math.max(0,Math.min(F-1,M.length)),G<0&&(G+=M.length),G=Math.max(0,Math.min(G,M.length)),E=M.slice(F,G).join(`
`),$.hasAttribute("data-start")||$.setAttribute("data-start",String(F+1))}L.textContent=E,a.highlightElement(L)},function(E){$.setAttribute(f,g),L.textContent=E})}}),a.plugins.fileHighlight={highlight:function($){for(var L=($||document).querySelectorAll(p),h=0,b;b=L[h++];)a.highlightElement(b)}};var v=!1;a.fileHighlight=function(){v||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),v=!0),a.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Kc);var Xc=Kc.exports;const Mh=Wc(Xc),Fa={mounted(e,l){var s;const a=l.modifiers,o=l.value;a.script||o==="script"?e.className="language-javascript":e.className="language-markup",Mh.highlightElement(e.children[0]),(s=e.children[0].parentElement)==null||s.setAttribute("tabindex","-1")}},Hh={style:{paddingTop:"3rem"}},Nh=S("p",null," Fomantic-UI Vue provides UI components based on Fomantic-UI. ",-1),Oh=S("code",null,`$ npm install vue-fomantic-ui
$ npm install fomantic-ui-css
# or
$ yarn add vue-fomantic-ui
$ yarn add fomantic-ui-css`,-1),qh=[Oh],Gh={style:{paddingTop:"3rem",marginBottom:"3rem"}},jh=S("p",null," You can import all components as Vue plugin. ",-1),Uh=S("code",null,`import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

const app = createApp(App)

app.use(FomanticUI)`,-1),Yh=[Uh],Jh=S("br",null,null,-1),Wh=S("p",null," Or pick a component indivisually, add it to your components option. ",-1),Kh=S("code",null,`import { SuiButton } from 'vue-fomantic-ui'

export default {
  components: { SuiButton },
  // ...
}`,-1),Xh=[Kh],Qh={__name:"GettingStarted",setup(e){return(l,a)=>{const o=C("SuiHeader");return A(),B(rt,{title:"Getting Started",description:"Getting up and running with Fomantic-UI Vue"},{default:i(()=>[S("section",Hh,[t(o,{as:"h2"},{default:i(()=>[n("Install")]),_:1}),Nh,t(o,{as:"h3"},{default:i(()=>[n("via Package Manager")]),_:1}),Si((A(),be("pre",null,qh)),[[r(Fa)]])]),S("section",Gh,[t(o,{as:"h2"},{default:i(()=>[n("Usage")]),_:1}),jh,Si((A(),be("pre",null,Yh)),[[r(Fa),void 0,void 0,{script:!0}]]),Jh,Wh,Si((A(),be("pre",null,Xh)),[[r(Fa),void 0,void 0,{script:!0}]])])]),_:1})}}};function Qc(e){var l,a,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(l=0;l<e.length;l++)e[l]&&(a=Qc(e[l]))&&(o&&(o+=" "),o+=a);else for(l in e)e[l]&&(o&&(o+=" "),o+=l);return o}function te(){for(var e,l,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(l=Qc(e))&&(o&&(o+=" "),o+=l);return o}const y=(e,l)=>e?l:"",Ve=(e,l)=>typeof e=="string"?`${e} ${l}`:"",Ie=(e,l)=>e===!0?l:e==="below"?`${l} ${e}`:typeof e=="string"?`${e} ${l}`:"",Tl=e=>e==="justified"?"justified":Ve(e,"aligned"),ri=(e,l)=>typeof e=="number"&&l?`${vo(e)} ${l}`:typeof e=="number"&&!l?vo(e):typeof e=="string"&&e==="equal"?`${e} width`:"",Fl=(e,l)=>e?`${vo(e)} wide ${l}`:"",vo=e=>["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"][e-1],Zh=P({props:{fluid:Boolean,inverted:Boolean,multiple:Boolean,styled:Boolean},setup(e){const l=e.multiple?j([]):j(-1),a=s=>e.multiple?l.value.includes(s):l.value===s,o=s=>{const c=a(s);e.multiple?c?l.value=l.value.filter(m=>m!==s):l.value.push(s):l.value=c?-1:s};return dt("isTabActive",a),dt("updateActiveIndex",o),{computedClass:H(()=>te("ui",y(e.fluid,"fluid"),y(e.inverted,"inverted"),y(e.styled,"styled"),"accordion"))}},render(){var e,l;const a=o=>(o.forEach((s,c)=>{s.props.index=c}),o);return t("div",{class:this.computedClass},[a((l=(e=this.$slots).default)==null?void 0:l.call(e))])}}),e_=P({render(){var e,l;return X("div",{class:"accordion"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Zc=P({props:{active:Boolean},setup(e){return{computedClass:H(()=>te(y(e.active,"active"),"content"))}},render(){var e,l;return X("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),W=P({props:{as:String,bordered:Boolean,circular:Boolean,color:String,colored:Boolean,corner:[Boolean,String],disabled:Boolean,fitted:Boolean,flipped:String,inverted:Boolean,link:Boolean,loading:Boolean,name:String,primary:Boolean,rotated:String,secondary:Boolean,size:String},setup(e){return{classes:H(()=>te(e.color,e.name,e.size,y(e.primary,"primary"),y(e.secondary,"secondary"),y(e.bordered,"bordered"),y(e.circular,"circular"),y(e.colored,"colored"),y(e.disabled,"disabled"),y(e.fitted,"fitted"),y(e.inverted,"inverted"),y(e.link,"link"),y(e.loading,"loading"),Ve(e.flipped,"flipped"),Ve(e.rotated,"rotated"),Ie(e.corner,"corner"),"icon"))}},render(){let e=this.$props.as||"i";return X(e,{"aria-hidden":!0,class:this.classes})}}),t_=P({props:{index:Number,title:String},setup(e){const l=Me("isTabActive"),a=Me("updateActiveIndex"),o=H(()=>te(y(l(e.index),"active"),"title"));return{isTabActive:l,updateActiveIndex:a,titleClass:o}},render(){return t(Ae,null,[t("div",{class:this.titleClass,onClick:()=>this.updateActiveIndex(this.index)},[t(W,{name:"dropdown"},null),this.title]),t(Zc,{active:this.isTabActive(this.index)},{default:()=>{var e,l;return[(l=(e=this.$slots).default)==null?void 0:l.call(e)]}})])}}),i_=P({props:{active:Boolean},setup(e){return{computedClass:H(()=>te(y(e.active,"active"),"title"))}},render(){var e,l;return X("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),l_={install(e){e.component("SuiAccordion",Zh),e.component("SuiAccordionAccordion",e_),e.component("SuiAccordionContent",Zc),e.component("SuiAccordionTab",t_),e.component("SuiAccordionTitle",i_)}},a_=P({props:{centered:Boolean,test:String,unit:String},setup(e){return{computedClass:H(()=>te("ui",e.unit,y(e.centered,"centered"),y(!!e.test,"test"),"ad"))}},render(){var e,l,a,o;return this.$props.test?X("div",{class:this.computedClass,"data-text":this.$props.test},(l=(e=this.$slots).default)==null?void 0:l.call(e)):X("div",{class:this.computedClass},(o=(a=this.$slots).default)==null?void 0:o.call(a))}}),n_={install(e){e.component("SuiAdvertisement",a_)}},Dt=P({props:{icon:String},setup(e){return{computedClass:H(()=>te(e.icon,"icon","divider"))}},render(){var e,l;return this.icon?t("i",{"aria-hidden":"true",class:this.computedClass},null):t("div",{class:"divider"},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),et=P({props:{active:Boolean,href:String,link:Boolean,to:String},setup(e){const l=H(()=>te(y(e.active,"active"),"section")),a=e.link||!!e.href;return{computedClass:l,isLink:a}},render(){let e="div";this.isLink?e="a":this.to&&(e=C("router-link"));const l={href:this.href,to:this.to};return t(e,el({class:this.computedClass},l),{default:()=>{var a,o;return[(o=(a=this.$slots).default)==null?void 0:o.call(a)]}})}}),ni=P({props:{icon:String,inverted:Boolean,sections:{type:Array,default:()=>[]},size:String},setup(e){return{computedClass:H(()=>te("ui",e.size,y(e.inverted,"inverted"),"breadcrumb"))}},render(){var e,l;const a=()=>{var o;return(o=this.sections)==null?void 0:o.map((s,c)=>{const m={active:s.active,href:s.href,link:s.link,to:s.to};return t(Ae,null,[t(et,m,{default:()=>[s.content]}),this.sections.length!==c+1&&t(Dt,{icon:this.icon},{default:()=>[n(" / ")]})])})};return t("div",{class:this.computedClass},[((l=(e=this.$slots).default)==null?void 0:l.call(e))||a()])}}),o_={install(e){e.component("SuiBreadcrumb",ni),e.component("SuiBreadcrumbDivider",Dt),e.component("SuiBreadcrumbSection",et)}},zi=P({props:{as:String,size:String},setup(e){return{computedClass:H(()=>te(e.size,"icons"))}},render(){var e,l;let a=this.$props.as||"i";return X(a,{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),s_={install(e){e.component("SuiIcon",W),e.component("SuiIconGroup",zi)}},r_=()=>({icon:[Boolean,String]}),u_=e=>({iconClasses:H(()=>typeof e.icon=="boolean"&&e.icon||e.labeled&&e.icon?"icon":te({icon:e.icon&&!e.content}))}),c_=["right","left"],d_=()=>({labeled:[Boolean,String]}),m_=e=>({labeledClasses:H(()=>typeof e.labeled=="boolean"&&e.labeled?"labeled":c_.includes(e.labeled)?`${e.labeled} labeled`:"")}),p_=["double","elastic"],f_=()=>({loading:{type:[Boolean,String],validator:e=>p_.includes(e)||typeof e=="boolean"}}),g_=e=>({loadingClasses:H(()=>te(e.loading,{loading:e.loading}))}),z=P({props:{active:Boolean,animated:[Boolean,String],as:{type:String,default:"button"},attached:String,basic:Boolean,circular:Boolean,color:String,compact:Boolean,content:[String,Array],disabled:Boolean,facebook:Boolean,floated:String,fluid:Boolean,google:Boolean,linkedin:Boolean,instagram:Boolean,inverted:Boolean,negative:Boolean,positive:Boolean,primary:Boolean,secondary:Boolean,size:String,telegram:Boolean,tertiary:Boolean,toggle:Boolean,twitter:Boolean,vk:Boolean,whatsapp:Boolean,youtube:Boolean,...r_(),...d_(),...f_()},setup(e){const{iconClasses:l}=u_(e),{labeledClasses:a}=m_(e),{loadingClasses:o}=g_(e);return{classes:H(()=>te("ui",e.color,e.size,y(e.active,"active"),y(e.basic,"basic"),y(e.circular,"circular"),y(e.compact,"compact"),y(e.disabled,"disabled"),y(e.facebook,"facebook"),y(e.fluid,"fluid"),y(e.google,"google"),y(e.linkedin,"linkedin"),y(e.instagram,"instagram"),y(e.inverted,"inverted"),y(e.negative,"negative"),y(e.positive,"positive"),y(e.primary,"primary"),y(e.secondary,"secondary"),y(e.telegram,"telegram"),y(e.tertiary,"tertiary"),y(e.toggle,"toggle"),y(e.twitter,"twitter"),y(e.vk,"vk"),y(e.whatsapp,"whatsapp"),y(e.youtube,"youtube"),Ve(e.attached,"attached"),Ve(e.floated,"floated"),Ie(e.animated,"animated"),l.value,a.value,o.value,"button"))}},render(){var e,l;const a=this.attached?"div":this.as;return X(a,{class:this.classes,role:"button"},[typeof this.icon=="string"&&X(W,{name:this.icon}),this.content||((l=(e=this.$slots).default)==null?void 0:l.call(e))])}}),Ii=P({props:{hidden:Boolean,visible:Boolean},setup(e){return{computedClass:H(()=>te(y(e.hidden,"hidden"),y(e.visible,"visible"),"content"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),_t=P({props:{attached:String,basic:Boolean,color:String,icon:Boolean,labeled:Boolean,size:String,vertical:Boolean,widths:Number},setup(e){return{computedClass:H(()=>te("ui",e.color,e.size,y(e.basic,"basic"),y(e.icon,"icon"),y(e.labeled,"labeled"),y(e.vertical,"vertical"),Ve(e.attached,"attached"),ri(e.widths,""),"buttons"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),h_={install(e){e.component("SuiButton",z),e.component("SuiButtonContent",Ii),e.component("SuiButtonGroup",_t)}},__=(e,l,a)=>{e.clickOutside=o=>{e===o.target||e.contains(o.target)||l.value(o,e)},document.body.addEventListener("click",e.clickOutside)},b_=(e,l,a)=>{document.body.removeEventListener("click",e.clickOutside)},ps={mounted:__,unmounted:b_};function v_(e,l={}){const a=j(e.value?"open":"closed"),o=()=>a.value=e.value?"open":"closed";gt(e,f=>{a.value=f?"opening":"closing"});const s=f=>{f.addEventListener("animationend",o,!0)},c=f=>{f&&f.removeEventListener("animationend",o)},m=H((f="scale")=>{switch(a.value){case"opening":return`animating ${f} in`;case"open":return"visible active";case"closing":return`visible active animating ${f} out`;case"closed":return"hidden"}});return{setupAnimation:s,removeAnimation:c,computeAnimationClass:m}}const S_=P({name:"SuiCalendarDay",emits:["select-day"],props:{active:Boolean,date:null,disabled:Boolean,onSelectDay:Function},setup(e,{emit:l}){const a=j(!1),o=()=>{e.disabled||(a.value=!0)},s=()=>a.value=!1,c=()=>{e.disabled||l("select-day",e.date)},m=()=>{let u=new Date;return u.getFullYear()===e.date.year&&u.getMonth()===e.date.month&&u.getDate()===e.date.day},f=H(()=>te("link",y(a.value,"focus"),y(e.active&&!e.disabled,"active"),y(e.disabled,"adjacent disabled"),y(m(),"today")));return{onMouseEnter:o,onMouseLeave:s,onClick:c,computedClass:f}},render(){var e,l;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:Rt(this.onClick,["stop"])},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),y_=P({name:"SuiCalendarDateTable",setup(){const{calendarDays:e,updateSelectMode:l,set:a,add:o,subtract:s,selectedDate:c,setSelectedDate:m,selectType:f,updateVisible:u,formatDate:d}=Me(ki);return{calendarDays:e,isEqualDay:g=>{if(!c.value)return!1;const p=c.value;return p.getFullYear()===g.year&&p.getMonth()===g.month&&p.getDate()===g.day},onSelectDay:g=>{if(a(g.year,"years"),a(g.month,"months"),a(g.day,"days"),f.value==="date"){let p=new Date(g.year,g.month,g.day);m(p),u(!1);return}l("hour")},updateSelectMode:l,formatDate:d,add:o,subtract:s}},render(){const e=()=>this.calendarDays.map((l,a)=>t("tr",null,[l.map(o=>t(S_,{active:this.isEqualDay(o),date:o,disabled:!o.currentMonth,onSelectDay:this.onSelectDay},{default:()=>[o.day]}))]));return t("table",{class:"ui celled center aligned unstackable table day seven column"},[t("thead",null,[t("tr",null,[t("th",{colspan:7},[t("span",{class:"link",onClick:Rt(()=>this.updateSelectMode("month"),["stop"])},[this.formatDate("date")]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"months")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"months")},[t("i",{class:"chevron right icon"},null)])])]),t("tr",null,[t("th",null,[n("S")]),t("th",null,[n("M")]),t("th",null,[n("T")]),t("th",null,[n("W")]),t("th",null,[n("T")]),t("th",null,[n("F")]),t("th",null,[n("S")])])]),t("tbody",null,[e()])])}}),we=P({name:"SuiCalendarTableCell",emits:["click-cell"],props:{active:Boolean,today:Boolean,value:null,onClickCell:Function},setup(e){const l=j(!1),a=()=>l.value=!0,o=()=>l.value=!1,s=H(()=>te("link",y(e.active,"active"),y(e.today,"today"),y(l.value,"focus")));return{onMouseEnter:a,onMouseLeave:o,computedClass:s}},render(){var e,l;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:Rt(()=>this.$emit("click-cell",this.value),["stop"])},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),w_=P({name:"SuiCalendarMonthTable",setup(){const{state:e,set:l,add:a,subtract:o,selectedDate:s,updateSelectMode:c}=Me(ki);return{state:e,add:a,subtract:o,updateSelectMode:c,isActive:m=>s.value?e.year===s.value.getFullYear()&&e.month===m:!1,isThisMonth:m=>{let f=new Date;return m===f.getMonth()&&e.year===f.getFullYear()},onClickCell:m=>{l(m,"months"),c("day")}}},render(){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l=()=>Array(4).fill(0).map((a,o)=>t("tr",null,[t(we,{value:o*3,active:this.isActive(o*3),today:this.isThisMonth(o*3),onClickCell:this.onClickCell},{default:()=>[e[o*3]]}),t(we,{value:o*3+1,active:this.isActive(o*3+1),today:this.isThisMonth(o*3+1),onClickCell:this.onClickCell},{default:()=>[e[o*3+1]]}),t(we,{value:o*3+2,active:this.isActive(o*3+2),today:this.isThisMonth(o*3+2),onClickCell:this.onClickCell},{default:()=>[e[o*3+2]]})]));return t("table",{class:"ui celled center aligned unstackable table month three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:Rt(()=>this.updateSelectMode("year"),["stop"])},[this.state.year]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"years")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"years")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[l()])])}}),C_=P({name:"SuiCalendarYearTable",setup(e){const{state:l,set:a,add:o,subtract:s,selectedDate:c,updateSelectMode:m}=Me(ki),f=()=>o(10,"years"),u=()=>s(10,"years"),d=H(()=>Math.round(l.year/10)*10+1);return{updateSelectMode:m,moveNextTwelveYears:f,movePrevTwelveYears:u,headerStartYear:d,isActive:g=>c.value?g===c.value.getFullYear():!1,isThisYear:g=>g===new Date().getFullYear(),onClickCell:g=>{a(g,"years"),m("day")}}},render(){return t("table",{class:"ui celled center aligned unstackable table year three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:Rt(()=>this.updateSelectMode("day"),["stop"])},[this.headerStartYear,n(" - "),this.headerStartYear+11]),t("span",{class:"prev link",onClick:this.movePrevTwelveYears},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.moveNextTwelveYears},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(we,{value:this.headerStartYear,active:this.isActive(this.headerStartYear),today:this.isThisYear(this.headerStartYear),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear]}),t(we,{value:this.headerStartYear+1,active:this.isActive(this.headerStartYear+1),today:this.isThisYear(this.headerStartYear+1),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+1]}),t(we,{value:this.headerStartYear+2,active:this.isActive(this.headerStartYear+2),today:this.isThisYear(this.headerStartYear+2),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+2]})]),t("tr",null,[t(we,{value:this.headerStartYear+3,active:this.isActive(this.headerStartYear+3),today:this.isThisYear(this.headerStartYear+3),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+3]}),t(we,{value:this.headerStartYear+4,active:this.isActive(this.headerStartYear+4),today:this.isThisYear(this.headerStartYear+4),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+4]}),t(we,{value:this.headerStartYear+5,active:this.isActive(this.headerStartYear+5),today:this.isThisYear(this.headerStartYear+5),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+5]})]),t("tr",null,[t(we,{value:this.headerStartYear+6,active:this.isActive(this.headerStartYear+6),today:this.isThisYear(this.headerStartYear+6),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+6]}),t(we,{value:this.headerStartYear+7,active:this.isActive(this.headerStartYear+7),today:this.isThisYear(this.headerStartYear+7),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+7]}),t(we,{value:this.headerStartYear+8,active:this.isActive(this.headerStartYear+8),today:this.isThisYear(this.headerStartYear+8),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+8]})]),t("tr",null,[t(we,{value:this.headerStartYear+9,active:this.isActive(this.headerStartYear+9),today:this.isThisYear(this.headerStartYear+9),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+9]}),t(we,{value:this.headerStartYear+10,active:this.isActive(this.headerStartYear+10),today:this.isThisYear(this.headerStartYear+10),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+10]}),t(we,{value:this.headerStartYear+11,active:this.isActive(this.headerStartYear+11),today:this.isThisYear(this.headerStartYear+11),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+11]})])])])}}),A_=P({name:"SuiCalendarHourTable",setup(){const{updateSelectMode:e,state:l,set:a,add:o,subtract:s,formatDate:c,selectedDate:m}=Me(ki);return{updateSelectMode:e,formatDate:c,onPrevClick:()=>s(1,"days"),onNextClick:()=>o(1,"days"),onClickCell:f=>{a(f,"hours"),e("minute")},isActive:f=>{if(!m.value)return!1;let u=m.value.getFullYear(),d=m.value.getMonth(),g=m.value.getDate(),p=m.value.getHours();return l.year===u&&l.month===d&&l.day===g&&f===p}}},render(){return t("table",{class:"ui celled center aligned unstackable table hour four column"},[t("thead",null,[t("tr",null,[t("th",{colspan:4},[t("span",{class:"link",onClick:Rt(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:this.onPrevClick},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.onNextClick},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(we,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},{default:()=>[n("12:00 AM")]}),t(we,{active:this.isActive(1),value:1,onClickCell:this.onClickCell},{default:()=>[n("1:00 AM")]}),t(we,{active:this.isActive(2),value:2,onClickCell:this.onClickCell},{default:()=>[n("2:00 AM")]}),t(we,{active:this.isActive(3),value:3,onClickCell:this.onClickCell},{default:()=>[n("3:00 AM")]})]),t("tr",null,[t(we,{active:this.isActive(4),value:4,onClickCell:this.onClickCell},{default:()=>[n("4:00 AM")]}),t(we,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},{default:()=>[n("5:00 AM")]}),t(we,{active:this.isActive(6),value:6,onClickCell:this.onClickCell},{default:()=>[n("6:00 AM")]}),t(we,{active:this.isActive(7),value:7,onClickCell:this.onClickCell},{default:()=>[n("7:00 AM")]})]),t("tr",null,[t(we,{active:this.isActive(8),value:8,onClickCell:this.onClickCell},{default:()=>[n("8:00 AM")]}),t(we,{active:this.isActive(9),value:9,onClickCell:this.onClickCell},{default:()=>[n("9:00 AM")]}),t(we,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},{default:()=>[n("10:00 AM")]}),t(we,{active:this.isActive(11),value:11,onClickCell:this.onClickCell},{default:()=>[n("11:00 AM")]})]),t("tr",null,[t(we,{active:this.isActive(12),value:12,onClickCell:this.onClickCell},{default:()=>[n("12:00 PM")]}),t(we,{active:this.isActive(13),value:13,onClickCell:this.onClickCell},{default:()=>[n("1:00 PM")]}),t(we,{active:this.isActive(14),value:14,onClickCell:this.onClickCell},{default:()=>[n("2:00 PM")]}),t(we,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},{default:()=>[n("3:00 PM")]})]),t("tr",null,[t(we,{active:this.isActive(16),value:16,onClickCell:this.onClickCell},{default:()=>[n("4:00 PM")]}),t(we,{active:this.isActive(17),value:17,onClickCell:this.onClickCell},{default:()=>[n("5:00 PM")]}),t(we,{active:this.isActive(18),value:18,onClickCell:this.onClickCell},{default:()=>[n("6:00 PM")]}),t(we,{active:this.isActive(19),value:19,onClickCell:this.onClickCell},{default:()=>[n("7:00 PM")]})]),t("tr",null,[t(we,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},{default:()=>[n("8:00 PM")]}),t(we,{active:this.isActive(21),value:21,onClickCell:this.onClickCell},{default:()=>[n("9:00 PM")]}),t(we,{active:this.isActive(22),value:22,onClickCell:this.onClickCell},{default:()=>[n("10:00 PM")]}),t(we,{active:this.isActive(23),value:23,onClickCell:this.onClickCell},{default:()=>[n("11:00 PM")]})])])])}});function Vt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!xt(e)}const x_=P({name:"SuiCalendarMinuteTable",setup(){const{state:e,set:l,add:a,subtract:o,formatDate:s,updateSelectMode:c,updateVisible:m,selectedDate:f}=Me(ki);return{add:a,subtract:o,formatDate:s,updateSelectMode:c,getTimeLabel:u=>{let d=e.hour%12,g=e.hour>12?"PM":"AM",p=u.toString().padStart(2,"0");return e.hour===0?`12:${p} AM`:e.hour===12?`12:${p} PM`:`${d}:${p} ${g}`},onClickCell:u=>{l(u,"minutes"),f.value=new Date(e.year,e.month,e.day,e.hour,e.minute),m(!1)},isActive:u=>{if(!f.value)return!1;let d=f.value.getFullYear(),g=f.value.getMonth(),p=f.value.getDate(),_=f.value.getHours(),w=f.value.getMinutes();return e.year===d&&e.month===g&&e.day===p&&e.hour===_&&u===w}}},render(){let e,l,a,o,s,c,m,f,u,d,g,p;return t("table",{class:"ui celled center aligned unstackable table minute three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:Rt(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"days")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"days")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(we,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},Vt(e=this.getTimeLabel(0))?e:{default:()=>[e]}),t(we,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},Vt(l=this.getTimeLabel(5))?l:{default:()=>[l]}),t(we,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},Vt(a=this.getTimeLabel(10))?a:{default:()=>[a]})]),t("tr",null,[t(we,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},Vt(o=this.getTimeLabel(15))?o:{default:()=>[o]}),t(we,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},Vt(s=this.getTimeLabel(20))?s:{default:()=>[s]}),t(we,{active:this.isActive(25),value:25,onClickCell:this.onClickCell},Vt(c=this.getTimeLabel(25))?c:{default:()=>[c]})]),t("tr",null,[t(we,{active:this.isActive(30),value:30,onClickCell:this.onClickCell},Vt(m=this.getTimeLabel(30))?m:{default:()=>[m]}),t(we,{active:this.isActive(35),value:35,onClickCell:this.onClickCell},Vt(f=this.getTimeLabel(35))?f:{default:()=>[f]}),t(we,{active:this.isActive(40),value:40,onClickCell:this.onClickCell},Vt(u=this.getTimeLabel(40))?u:{default:()=>[u]})]),t("tr",null,[t(we,{active:this.isActive(45),value:45,onClickCell:this.onClickCell},Vt(d=this.getTimeLabel(45))?d:{default:()=>[d]}),t(we,{active:this.isActive(50),value:50,onClickCell:this.onClickCell},Vt(g=this.getTimeLabel(50))?g:{default:()=>[g]}),t(we,{active:this.isActive(55),value:55,onClickCell:this.onClickCell},Vt(p=this.getTimeLabel(55))?p:{default:()=>[p]})])])])}}),k_=P({name:"SuiCalendarBody",setup(){const e=j(null),{visible:l,selectMode:a}=Me(ki),{setupAnimation:o,removeAnimation:s,computeAnimationClass:c}=v_(l);xi(()=>o(e.value)),Zi(()=>s(e.value));const m=H(()=>te("ui popup calendar","bottom left","transition",c.value));return{rootRef:e,computedClass:m,selectMode:a}},render(){const e=()=>{switch(this.selectMode){case"day":return t(y_,null,null);case"month":return t(w_,null,null);case"year":return t(C_,null,null);case"hour":return t(A_,null,null);case"minute":return t(x_,null,null)}};return t("div",{ref:l=>this.rootRef=l,class:this.computedClass,style:"inset: 38px auto auto 0px;"},[e()])}}),$_=P({name:"SuiCalendarInput",props:{placeholder:String,value:null},setup(e){const{visible:l,updateVisible:a,updateSelectMode:o,set:s,state:c,formatCalendarDate:m}=Me(ki);return{visible:l,formatCalendarDate:m,onClick:()=>{l.value||(o("day"),e.value&&(s(e.value.getFullYear(),"years"),s(e.value.getMonth(),"months"))),a(!l.value)}}},render(){return t("input",{type:"text",placeholder:this.placeholder,value:this.formatCalendarDate(this.value),onClick:()=>this.onClick()},null)}}),B_=(e,l)=>{let a=new Date;a.setDate(1),a.setMonth(l),a.setFullYear(e);let o=a.getDay();return o>=7?o-7:o},T_=(e,l)=>{let a,o;return l===0?(a=11,o=e-1):(a=l-1,o=e),32-new Date(o,a,32).getDate()},Vn=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e];function L_(){const e=j(!1),l=(x=!1)=>e.value=x,a=new Date;function o(x){if(!x)return;let $=x.getFullYear(),L=Vn(x.getMonth()),h=x.getDate(),b=x.getHours(),k=x.getMinutes(),T=b>11?"PM":"AM";b=b%12,b===0&&(b=12);let E=k.toString().padStart(2,"0");return`${L} ${h}, ${$} ${b}:${E} ${T}`}const s=j("default"),c=j("day");function m(x){c.value=x}const f=j(null),u=x=>{f.value=x},d=oi({year:a.getFullYear(),month:a.getMonth(),day:a.getDate(),hour:a.getHours(),minute:a.getMinutes()}),g=(x,$)=>{switch($){case"years":d.year=x;break;case"months":d.month=x;break;case"days":d.day=x;break;case"hours":d.hour=x;break;case"minutes":d.minute=x}},p=(x,$)=>{let L=new Date(d.year,d.month,d.day,d.hour);switch($){case"years":L.setFullYear(L.getFullYear()+x);break;case"months":L.setMonth(L.getMonth()+x);break;case"days":L.setDate(L.getDate()+x);break;case"hours":L.setHours(L.getHours()+x);break}d.year=L.getFullYear(),d.month=L.getMonth(),d.day=L.getDate(),d.hour=L.getHours()},_=(x,$)=>{let L=new Date(d.year,d.month,d.day,d.hour);switch($){case"years":L.setFullYear(L.getFullYear()-x);break;case"months":L.setMonth(L.getMonth()-x);break;case"days":L.setDate(L.getDate()-x);break;case"hours":L.setHours(L.getHours()-x);break}d.year=L.getFullYear(),d.month=L.getMonth(),d.day=L.getDate(),d.hour=L.getHours()},w=(x="default")=>x==="date"?`${Vn(d.month)} ${d.year}`:`${Vn(d.month)} ${d.day}, ${d.year}`,v=H(()=>{let x=d.month,$=d.year;x>11&&(x=x%11-1,$+=1);let L=[],h=B_($,x),b=32-new Date($,x,32).getDate(),k=T_($,x),T=1;for(let E=0;E<6;E++){let V=[];if(E===0){for(let F=k-h+1;F<=k;F++){let G=x===0?11:x-1,Q=x===0?$-1:$;V.push({day:F,month:G,year:Q,currentMonth:!1})}let M=7-V.length;for(let F=0;F<M;F++)V.push({day:T,month:x,year:$,currentMonth:!0}),T++}else for(let M=0;M<7;M++){if(T>b){let F=x===11?0:x+1,G=x===11?$+1:$;V.push({day:T-b,month:F,year:G,currentMonth:!1})}else V.push({day:T,month:x,year:$,currentMonth:!0});T++}L.push(V)}return L});return{visible:e,updateVisible:l,calendarDays:v,formatCalendarDate:o,selectMode:c,updateSelectMode:m,selectType:s,selectedDate:f,setSelectedDate:u,state:d,set:g,add:p,subtract:_,formatDate:w}}const ki=Symbol("useCalendar"),D_=P({directives:{clickoutside:ps},emits:["update:modelValue"],props:{modelValue:null,placeholder:String},setup(e,{emit:l}){const a=L_();dt(ki,a);const{updateVisible:o,selectedDate:s}=a;return gt(s,c=>{l("update:modelValue",c)}),{updateVisible:o}},render(){return Si(t("div",{class:"ui calendar"},[t("div",{class:"ui input left icon"},[t(k_,null,null),t("i",{class:"calendar icon"},null),t($_,{placeholder:this.placeholder,value:this.modelValue},null)])]),[[dn("clickoutside"),()=>this.updateVisible(!1)]])}}),I_={install:e=>{e.component("SuiCalendar",D_)}},E_=P((e,{slots:l})=>{const a=H(()=>te("ui",e.color,y(e.centered,"centered"),y(e.fluid,"fluid"),y(e.horizontal,"horizontal"),y(e.link,"link"),y(e.raised,"raised"),"card"));return()=>{var o,s;return e.href||e.link?t("a",{class:a.value,href:e.href},[(o=l.href)==null?void 0:o.call(l)]):t("div",{class:a.value},[(s=l.default)==null?void 0:s.call(l)])}},{props:{centered:Boolean,color:String,fluid:Boolean,horizontal:Boolean,href:String,link:Boolean,raised:Boolean}}),R_=P((e,{slots:l})=>{const a=H(()=>te(y(e.extra,"extra"),"content"));return()=>{var o,s,c,m;return t("div",{class:a.value},[e.header&&t("div",{class:"header"},[e.header]),l.header&&t("div",{class:"header"},[(o=l.header)==null?void 0:o.call(l)]),l.meta&&t("div",{class:"meta"},[(s=l.meta)==null?void 0:s.call(l)]),l.description&&t("div",{class:"description"},[(c=l.description)==null?void 0:c.call(l)]),(m=l.default)==null?void 0:m.call(l)])}},{props:{extra:Boolean,header:String}}),z_=P({props:{textAlign:String},setup(e){return{computedClass:H(()=>te(Ve(e.textAlign,"aligned"),"description"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),P_=P({props:{centered:Boolean,doubling:Boolean,inverted:Boolean,itemsPerRow:Number,stackable:Boolean},setup(e){return{computedClass:H(()=>te("ui",y(e.centered,"centered"),y(e.doubling,"doubling"),y(e.inverted,"inverted"),y(e.stackable,"stackable"),ri(e.itemsPerRow,""),"cards"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),F_=P({props:{textAlign:String},setup(e){return{computedClass:H(()=>te(Ve(e.textAlign,"aligned"),"header"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),V_=P({render(){var e,l;return X("div",{class:"meta"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),M_={install(e){e.component("SuiCard",E_),e.component("SuiCardContent",R_),e.component("SuiCardDescription",z_),e.component("SuiCardGroup",P_),e.component("SuiCardHeader",F_),e.component("SuiCardMeta",V_)}},ed=P({emits:["update:modelValue","change","click"],props:{disabled:Boolean,indeterminate:Boolean,label:String,modelValue:null,radio:Boolean,readOnly:Boolean,slider:Boolean,toggle:Boolean,value:null},setup(e,{emit:l}){const a=H(()=>te("ui",!e.label&&"fitted",y(e.disabled,"disabled"),y(e.indeterminate,"indeterminate"),y(e.radio,"radio"),y(e.readOnly,"read-only"),y(e.slider,"slider"),y(e.toggle,"toggle"),"checkbox")),o=H(()=>Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue);return{computedClass:a,checked:o,onClick:s=>{if(e.disabled||e.readOnly)return;let c;e.value?o.value?c=e.modelValue.filter(m=>e.value!==m):c=e.modelValue?[...e.modelValue,e.value]:[e.value]:c=!e.modelValue,l("change",s),l("click",s),l("update:modelValue",c)}}},render(){return t("div",{class:this.computedClass,onClick:this.onClick},[t("input",{type:this.radio?"radio":"checkbox",class:"hidden",checked:this.checked,readonly:!0},null),t("label",null,[this.label])])}}),H_={install(e){e.component("SuiCheckbox",ed)}},td=P({name:"SuiCommentAvatar",props:{as:String,src:String},render(){let e=this.$props.as||"div";return this.src?X(e,{class:"avatar"},X("img",{src:this.$props.src})):t("div",{class:"avatar"},[this.$slots.default&&this.$slots.default()])}});function N_(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!xt(e)}const O_=P({name:"SuiComment",render(){let e;return t("div",{class:"comment"},[this.$slots.avatar&&t(td,{as:"a"},N_(e=this.$slots.avatar())?e:{default:()=>[e]}),t("div",{class:"content"},[this.$slots.author&&t("a",{class:"author"},[this.$slots.author()]),this.$slots.metadata&&t("div",{class:"metadata"},[this.$slots.metadata()]),this.$slots.text&&t("div",{class:"text"},[this.$slots.text()]),this.$slots.actions&&t("div",{class:"actions"},[this.$slots.actions()])]),this.$slots.default&&this.$slots.default()])}}),q_=P({props:{active:Boolean},setup(e){const{active:l}=e;return{computedClass:H(()=>te(y(l,"active")))}},render(){var e,l,a,o;return this.computedClass?X("a",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e)):X("a",{},(o=(a=this.$slots).default)==null?void 0:o.call(a))}}),G_=P({render(){var e,l;return X("div",{class:"actions"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),j_=P({props:{as:String},render(){var e,l;let a=this.$props.as||"div";return X(a,{class:"author"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),U_=P({render(){var e,l;return X("div",{class:"content"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Y_=P({props:{collapsed:Boolean,inverted:Boolean,minimal:Boolean,size:String,threaded:Boolean},setup(e){return{computedClass:H(()=>te("ui",e.size,y(e.collapsed,"collapsed"),y(e.inverted,"inverted"),y(e.minimal,"minimal"),y(e.threaded,"threaded"),"comments"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),J_=P({render(){var e,l;return X("div",{class:"metadata"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),W_=P({render(){var e,l;return X("div",{class:"text"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),K_={install(e){e.component("SuiComment",O_),e.component("SuiCommentAction",q_),e.component("SuiCommentActions",G_),e.component("SuiCommentAuthor",j_),e.component("SuiCommentAvatar",td),e.component("SuiCommentContent",U_),e.component("SuiCommentGroup",Y_),e.component("SuiCommentMetadata",J_),e.component("SuiCommentText",W_)}},Ni=P({props:{fluid:Boolean,text:Boolean,textAlign:String},setup(e){return{computedClass:H(()=>te("ui",y(e.fluid,"fluid"),y(e.text,"text"),Tl(e.textAlign),"container"))}},render(){var e,l;return X("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),X_={install(e){e.component("SuiContainer",Ni)}},Yt=P({props:{active:Boolean,inverted:Boolean,page:Boolean,simple:Boolean,verticalAlign:String},setup(e){return{computedClass:H(()=>te("ui",y(e.active,"active"),y(e.inverted,"inverted"),y(e.page,"page"),y(e.simple,"simple"),Ve(e.verticalAlign,"aligned"),"dimmer"))}},render(){var e,l;return X("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Q_=P((e,{slots:l})=>{const a=H(()=>te("ui",y(e.blurring,"blurring"),"dimmable","segment"));return()=>{var o;return t("div",{class:a.value},[(o=l.default)==null?void 0:o.call(l)])}},{props:{blurring:Boolean}}),Z_={install(e){e.component("SuiDimmer",Yt),e.component("SuiDimmerDimmable",Q_)}},eb=["mini","tiny","small","medium","large","big","huge","massive"],_a=()=>({size:{type:String,validator:e=>eb.includes(e)}}),ba=e=>({sizeClass:H(()=>e.size)}),Fe=P({props:{clearing:Boolean,fitted:Boolean,hidden:Boolean,horizontal:Boolean,inverted:Boolean,section:Boolean,textAlign:String,vertical:Boolean,..._a()},setup(e){const{sizeClass:l}=ba(e);return{classes:H(()=>te("ui",l.value,y(e.clearing,"clearing"),y(e.fitted,"fitted"),y(e.hidden,"hidden"),y(e.horizontal,"horizontal"),y(e.inverted,"inverted"),y(e.section,"section"),y(e.vertical,"vertical"),Ve(e.textAlign,"aligned"),"divider"))}},render(){var e,l;return X("div",{class:this.classes},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),tb={install(e){e.component("SuiDivider",Fe)}},ib=(e,l)=>e.map(a=>a[l]),id=["top","middle","bottom"],lb={verticalAlign:{type:String,validator:e=>id.includes(e)}};function ab(e){return{verticalAlignClass:H(()=>e.verticalAlign&&id.includes(e.verticalAlign)?`${e.verticalAlign} aligned`:null)}}const nb=["left","right"],ob={floated:{type:String,validator:e=>nb.includes(e)}};function sb(e){return{floatedClass:H(()=>e.floated&&(e.floated==="left"||e.floated==="right")?`${e.floated} floated`:null)}}const O=P({props:{as:String,attached:String,basic:Boolean,circular:Boolean,color:String,corner:String,empty:Boolean,floating:Boolean,horizontal:Boolean,icon:String,image:Boolean,inverted:Boolean,pointing:[Boolean,String],prompt:Boolean,ribbon:[Boolean,String],size:String,tag:Boolean},setup(e,{slots:l}){const a=H(()=>te("ui",e.size,e.color,y(e.basic,"basic"),y(e.circular,"circular"),y(e.empty,"empty"),y(e.floating,"floating"),y(e.horizontal,"horizontal"),y(!!e.icon&&l.default===void 0,"icon"),y(e.image,"image"),y(e.inverted,"inverted"),y(e.prompt,"prompt"),y(e.tag,"tag"),Ve(e.attached,"attached"),Ve(e.corner,"corner"),Ie(e.pointing,"pointing"),Ie(e.ribbon,"ribbon"),"label"));let o=e.as||"div";return e.icon?()=>{var s;return X(o,{class:a.value},[X(W,{name:e.icon}),(s=l.default)==null?void 0:s.call(l)])}:()=>{var s;return X(o,{class:a.value},(s=l.default)==null?void 0:s.call(l))}}}),Ll=P({render(){var e,l;return t("div",{class:"detail"},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Dl=P({props:{basic:Boolean,circular:Boolean,color:String,size:String,tag:Boolean},setup(e,{slots:l}){const a=H(()=>te("ui",e.color,e.size,y(e.basic,"basic"),y(e.circular,"circular"),y(e.tag,"tag"),"labels"));return()=>{var o;return X("div",{class:a.value},(o=l.default)==null?void 0:o.call(l))}}}),rb={install(e){e.component("SuiLabel",O),e.component("SuiLabelDetail",Ll),e.component("SuiLabelGroup",Dl)}},oe=P({props:{as:String,avatar:Boolean,bordered:Boolean,centered:Boolean,circular:Boolean,disabled:Boolean,fluid:Boolean,hidden:Boolean,href:String,inline:Boolean,label:Object,target:String,wrapped:Boolean,rounded:Boolean,size:String,spaced:[Boolean,String],src:String,...lb,...ob},setup(e,{slots:l}){const{verticalAlignClass:a}=ab(e),{floatedClass:o}=sb(e),s=H(()=>te("ui",e.size,a.value,o.value,y(e.avatar,"avatar"),y(e.bordered,"bordered"),y(e.centered,"centered"),y(e.circular,"circular"),y(e.disabled,"disabled"),y(e.fluid,"fluid"),y(e.hidden,"hidden"),y(e.inline,"inline"),y(e.rounded,"rounded"),Ie(e.spaced,"spaced"),"image"));if(e.as==="a"||e.as==="router-link"){let c=e.as;return e.as==="router-link"&&(c=C(e.as)),()=>{var m;return X(c,{class:s.value,href:e.href,target:e.target&&e.target},X("img",{src:e.src},(m=l.default)==null?void 0:m.call(l)))}}return e.wrapped?()=>{var c;return X("div",{class:s.value},X("img",{src:e.src},(c=l.default)==null?void 0:c.call(l)))}:e.label?()=>X("div",{class:s.value},[X("img",{src:e.src}),X(O,{...e.label})]):()=>t("img",{class:s.value,src:e.src},null)}}),So=P({props:{size:String},setup(e,{slots:l}){const a=H(()=>te("ui",e.size,"images"));return()=>{var o;return X("div",{class:a.value},(o=l.default)==null?void 0:o.call(l))}}}),ub={install(e){e.component("SuiImage",oe),e.component("SuiImageGroup",So)}},cb=P({name:"SuiDropdownText",emits:["remove"],props:{clearable:Boolean,filtered:Boolean,icon:{type:String,default:"dropdown"},item:[Object,String],placeholder:String,text:String,onRemove:Function},setup(e){return{computedClass:H(()=>te(y(e.filtered,"filtered"),y(!e.text&&!e.item||Array.isArray(e.item)&&e.item.length===0,"default"),"text"))}},render(){var e,l;let a;if(this.item&&!Array.isArray(this.item))if(typeof this.item=="object"){const{flag:c,text:m}=this.item;a=t(Ae,null,[c&&t("i",{class:`${c} flag`},null),m])}else a=this.item;else a=this.text||this.placeholder;const o=typeof this.item=="object"?(e=this.item)==null?void 0:e.image:null,s=typeof this.item=="object"?(l=this.item)==null?void 0:l.label:null;return t(Ae,null,[t("div",{class:this.computedClass},[o&&t(oe,o,null),s&&t(O,s,null),a]),t("i",{class:`${this.icon} icon`},null),this.$props.clearable&&t("i",{class:"remove icon",onClick:Rt(()=>this.$emit("remove"),["stop"])},null)])}}),db=e=>{const l=oi({visible:!1,animating:!1,direction:"down",multiple:e.multiple});return gt(()=>l.visible,()=>{l.animating=!0,setTimeout(()=>l.animating=!1,200)}),{state:l,show:()=>!l.animating&&(l.visible=!0),hide:()=>{l.animating||(l.visible=!1)}}};function mb(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!xt(e)}const pb=P({directives:{clickoutside:ps},emits:["update:modelValue"],props:{button:Boolean,clearable:Boolean,compact:Boolean,floating:Boolean,fluid:Boolean,icon:String,inline:Boolean,item:Boolean,labeled:Boolean,modelValue:[Object,String],multiple:Boolean,options:Array,placeholder:String,pointing:[Boolean,String],scrolling:Boolean,selection:Boolean,search:Boolean,searchInMenu:Boolean,simple:Boolean,text:String},setup(e,{emit:l}){const a=db(e);dt("useDropdown",a);const{state:o,show:s,hide:c}=a,m=H(()=>te("ui",y(e.button,"button"),y(e.clearable,"clearable"),y(e.compact,"compact"),y(e.floating,"floating"),y(e.fluid,"fluid"),y(!!e.icon,"icon"),y(e.inline,"inline"),y(e.item,"item"),y(e.labeled,"labeled"),y(e.multiple,"multiple"),y(e.search,"search"),y(e.scrolling,"scrolling"),y(e.selection,"selection"),y(e.simple,"simple"),Ie(e.pointing,"pointing"),"dropdown",y(o.visible,"active visible"),y(o.direction==="up","upward"))),f=()=>{var $;if(o.visible)return c();($=_.value)==null||$.focus(),s()},u=()=>{e.search&&_.value&&_.value.focus(),s()},d=()=>c(),g=j(""),p=H(()=>{const $=g.value.toLowerCase();return e.options.filter(L=>{const h=typeof L=="object"?L.text:L,b=h.toLowerCase().includes($);if(!e.multiple)return b;if(Array.isArray(e.modelValue)){const k=typeof L=="object"?ib(e.modelValue,"text").includes(h):e.modelValue.includes(h);return b&&!k}return b})}),_=j(null),w=$=>g.value=$.target.value,v=$=>{var L;if(g.value="",e.search&&((L=_.value)==null||L.focus()),e.multiple){let h=Array.isArray(e.modelValue)?[...e.modelValue,$]:[$];return l("update:modelValue",h)}return l("update:modelValue",$)},x=$=>{if(Array.isArray(e.modelValue)){const L=e.modelValue.findIndex(h=>h===$);if(L>-1){let h=Object.assign(e.modelValue);h.splice(L,1),l("update:modelValue",h)}}};return dt("selection",e.selection),{computedClass:m,onClick:f,openMenu:u,closeMenu:d,filteredText:g,filteredOptions:p,inputRef:_,onInput:w,onSelect:v,removeItem:x}},render(){var e,l;const a=()=>{if(Array.isArray(this.$props.modelValue))return this.$props.modelValue.map(m=>typeof m=="object"?t("a",{class:"ui label"},[m.flag&&t("i",{class:`${m.flag} flag`},null),m.text,t("i",{class:"delete icon",onClick:Rt(()=>this.removeItem(m),["stop"])},null)]):t("a",{class:"ui label"},[m,t("i",{class:"delete icon",onClick:Rt(()=>this.removeItem(m),["stop"])},null)]))},o=()=>this.filteredOptions.filter(m=>this.$props.multiple&&Array.isArray(this.$props.modelValue)?!this.$props.modelValue.includes(m):!0).map(m=>t(ld,{item:m,active:this.$props.modelValue&&typeof m=="object"?m.text===this.$props.modelValue.text:m===this.$props.modelValue,text:typeof m=="object"?m.text:m,flag:typeof m=="object"&&Object.keys(m).includes("flag")?m.flag:"",image:m.image,label:m.label,disabled:m.disabled,onSelect:this.onSelect},null)),s=()=>{let m={clearable:this.clearable,filtered:this.filteredText.length>0,icon:this.icon,item:this.modelValue,placeholder:this.placeholder,text:this.text};return t(cb,el(m,{onRemove:()=>this.$emit("update:modelValue",null)}),null)},c=()=>{let m;return t(ad,{search:this.$props.searchInMenu,onSearch:this.onInput},mb(m=o())?m:{default:()=>[m]})};return Si(t("div",{class:this.computedClass,onClick:this.onClick},[this.$props.multiple&&a(),this.search&&t("input",{ref:m=>this.inputRef=m,type:"text",class:"search",autocomplete:"off",tabindex:0,value:this.filteredText,onInput:m=>this.onInput(m)},null),this.search&&this.multiple&&t("span",{class:"sizer"},null),s(),((l=(e=this.$slots).default)==null?void 0:l.call(e))||c()]),[[dn("clickoutside"),this.closeMenu]])}}),ld=P({emits:["select"],props:{active:Boolean,flag:String,description:String,icon:String,image:Object,item:[Object,String],label:Object,text:String,disabled:Boolean,onSelect:Function},setup(e,{emit:l}){const{state:a,hide:o}=Me("useDropdown");return{computedClass:H(()=>te(y(e.active,"active"),y(e.disabled,"disabled"),"item")),onClick:()=>{a.multiple||o(),l("select",e.item?e.item:e.text)}}},render(){return t("div",{class:this.computedClass,onClick:Rt(this.onClick,["stop"])},[this.flag&&t("i",{class:`${this.flag} flag`},null),this.icon&&t("i",{class:`${this.icon} icon`},null),this.image&&t(oe,this.image,null),this.label&&t(O,this.label,null),this.description&&t("span",{class:"description"},[this.description]),this.text])}}),ad=P({emits:["search"],props:{search:Boolean,onSearch:Function},setup(e,{emit:l,slots:a}){const{state:o}=Me("useDropdown"),s=j(null),c=H(()=>{let f=()=>o.visible?`animating slide ${o.direction} in visible`:`animating slide ${o.direction} out visible`;return te("menu","transition",y(o.visible,"visible"),y(!o.visible&&!o.animating,"hidden"),y(o.animating,f()))});gt(()=>o.visible,f=>{if(!f||!s.value)return;let u=s.value.parentElement;const{top:d,height:g}=u==null?void 0:u.getBoundingClientRect(),p=d-m.value.length*37,_=document.documentElement.clientHeight-d-g-m.value.length*37;o.direction=p>_?"up":"down"});const m=H(()=>{var f;let u=[],d=(f=a.default)==null?void 0:f.call(a);return d&&d.forEach(g=>{g.type.name==="SuiSelectItem"&&u.push(g)}),u});return{container:s,computedClass:c,onSearchInput:f=>l("search",f)}},render(){var e,l,a,o;const s=()=>t(Ae,null,[t("div",{class:"ui left icon input",onClick:Rt(()=>{},["stop"])},[t("input",{type:"text",onInput:c=>this.onSearchInput(c)},null),t("i",{class:"search icon"},null)]),t("div",{class:"ui divider"},null)]);return t("div",{ref:c=>this.container=c,class:this.computedClass},[this.$slots.header&&t("div",{class:"header"},[(l=(e=this.$slots).header)==null?void 0:l.call(e)]),this.$props.search&&s(),(o=(a=this.$slots).default)==null?void 0:o.call(a)])}}),fb={install(e){e.component("SuiDropdown",pb),e.component("SuiDropdownItem",ld),e.component("SuiDropdownMenu",ad)}},gb=P({props:{active:Boolean,aspectRatio:Boolean,autoplay:Boolean,id:String,placeholder:String,source:String,url:String},setup(e){const l=j(e.active),a=()=>{l.value=!l.value},o=()=>e.source==="youtube"?[`//www.youtube.com/embed/${e.id}`,"?autohide=true",`&amp;autoplay=${e.autoplay}`,"&amp;jsapi=false"].join(""):e.url,s=H(()=>te("ui",e.aspectRatio,y(l.value,"active"),"embed"));return{active:l,getSrc:o,clickHandler:a,computedClass:s}},render(){let e=[X("i",{class:"video play icon"}),X("img",{class:"placeholder",src:this.placeholder})];return this.active&&e.push(X("div",{class:"embed"},X("iframe",{src:this.getSrc()}))),X("div",{class:this.computedClass,onClick:this.clickHandler},e)}}),hb={install(e){e.component("SuiEmbed",gb)}},It=P({props:{disabled:Boolean,link:Boolean,loading:Boolean,name:String,size:String},setup(e){return{computedClass:H(()=>te(e.size,y(e.disabled,"disabled"),y(e.link,"link"),y(e.loading,"loading")))}},render(){return this.computedClass?X("em",{class:this.computedClass,"data-emoji":this.$props.name}):X("em",{"data-emoji":this.$props.name})}}),_b={install(e){e.component("SuiEmoji",It)}},bb=P({props:{inverted:Boolean,size:String},setup(e){return{computedClass:H(()=>te("ui",e.size,y(e.inverted,"inverted"),"feed"))}},render(){var e,l;return X("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),vb=P({render(){var e,l;return X("div",{class:"content"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Sb=P({render(){var e,l;return X("div",{class:"date"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),yb=P({render(){var e,l;return t("div",{class:"event"},[this.$slots.label&&t("div",{class:"label"},[this.$slots.label()]),(this.$slots.summary||this.$slots.meta)&&t("div",{class:"content"},[this.$slots.summary&&t("div",{class:"summary"},[this.$slots.summary()]),this.$slots.extraText&&t("div",{class:"extra text"},[this.$slots.extraText()]),this.$slots.extraImages&&t("div",{class:"extra images"},[this.$slots.extraImages()]),this.$slots.meta&&t("div",{class:"meta"},[this.$slots.meta()])]),(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),wb=P({props:{images:Boolean,text:Boolean},setup(e){const{images:l,text:a}=e;return{computedClass:H(()=>te(y(l,"images"),y(a,"text"),"extra"))}},render(){var e,l;return X("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Cb=P({render(){var e,l;return X("div",{class:"label"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Ab=P({render(){var e,l;return X("a",{class:"like"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),xb=P({render(){var e,l;return X("div",{class:"meta"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),kb=P({render(){var e,l;return X("div",{class:"summary"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),$b=P({render(){var e,l;return X("a",{class:"user"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Bb={install(e){e.component("SuiFeed",bb),e.component("SuiFeedContent",vb),e.component("SuiFeedDate",Sb),e.component("SuiFeedEvent",yb),e.component("SuiFeedExtra",wb),e.component("SuiFeedLabel",Cb),e.component("SuiFeedLike",Ab),e.component("SuiFeedMeta",xb),e.component("SuiFeedSummary",kb),e.component("SuiFeedUser",$b)}},Jt=P(e=>{const{sizeClass:l}=ba(e),a=H(()=>te(l.value,e.name,"flag"));return()=>t("i",{class:a.value},null)},{props:{name:String,..._a()}}),Tb={install(e){e.component("SuiFlag",Jt)}},Nt=P({props:{error:Boolean,info:Boolean,inverted:Boolean,loading:Boolean,reply:Boolean,success:Boolean,unstackable:Boolean,warning:Boolean,size:String},setup(e){return{classes:H(()=>te("ui",e.size,y(e.error,"error"),y(e.info,"info"),y(e.inverted,"inverted"),y(e.loading,"loading"),y(e.reply,"reply"),y(e.success,"success"),y(e.unstackable,"unstackable"),y(e.warning,"warning"),"form"))}},render(){var e,l;return t("form",{class:this.classes},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Ir=["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"];function Lb(e){return{widthClass:H(()=>Number(e.width)>0?`${Ir[Number(e.width)-1]} wide`:typeof e.width=="string"||Ir.includes(e.width)?`${e.width} wide`:null)}}const it=P({emits:["update:modelValue"],props:{disabled:Boolean,error:Boolean,inline:Boolean,label:String,modelValue:String,placeholder:String,required:Boolean,type:String,width:String||Number},setup(e,{emit:l}){const{widthClass:a}=Lb(e),o=H(()=>te(y(e.disabled,"disabled"),y(e.error,"error"),y(e.inline,"inline"),y(e.required,"required"),a.value,"field")),s=e.type||"text";return{computedClass:o,inputType:s,onInput:c=>l("update:modelValue",c.target.value)}},render(){var e,l;return this.label?t("div",{class:this.computedClass},[t("label",null,[this.label]),t("input",{type:this.inputType,placeholder:this.placeholder,value:this.modelValue,onInput:this.onInput},null)]):t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),fs=P({props:{widths:String},setup(e){return{computedClass:H(()=>te(Ve(e.widths,"width"),"fields"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),yo=P({props:{label:String,placeholder:String,rows:[Number,String]},render(){return this.label?t("div",{class:"field"},[t("label",null,[this.label]),t("textarea",{placeholder:this.placeholder,rows:this.rows},null)]):t("div",{class:"field"},[t("textarea",{placeholder:this.placeholder,rows:this.rows},null)])}}),Db={install(e){e.component("SuiForm",Nt),e.component("SuiFormField",it),e.component("SuiFormGroup",fs),e.component("SuiFormTextarea",yo)}},va=P({props:{celled:[Boolean,String],centered:Boolean,columns:[Number,String],compact:Boolean,container:Boolean,divided:[Boolean,String],doubling:Boolean,inverted:Boolean,padded:[Boolean,String],relaxed:[Boolean,String],reversed:String,stackable:Boolean,textAlign:String,verticalAlign:String},setup(e){return{computedClass:H(()=>te("ui",e.container&&"container",y(e.centered,"centered"),y(e.compact,"compact"),y(e.doubling,"doubling"),y(e.inverted,"inverted"),y(e.stackable,"stackable"),Ve(e.reversed,"reversed"),Ve(e.verticalAlign,"aligned"),Ie(e.celled,"celled"),Ie(e.divided,"divided"),Ie(e.padded,"padded"),Ie(e.relaxed,"relaxed"),Tl(e.textAlign),ri(e.columns,"column"),"grid"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Tt=P({props:{color:String,computer:Number,floated:String,largeScreen:Number,mobile:Number,only:String,tablet:Number,textAlign:String,width:Number,widescreen:Number},setup(e){return{computedClass:H(()=>te(e.color,Ve(e.floated,"floated"),Ve(e.only,"only"),Tl(e.textAlign),ri(e.width,"wide"),Fl(e.mobile,"mobile"),Fl(e.tablet,"tablet"),Fl(e.computer,"computer"),Fl(e.largeScreen,"large screen"),Fl(e.widescreen,"widescreen"),"column"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),wo=P({props:{centered:Boolean,color:String,columns:Number,only:String,stretched:Boolean,textAlign:String},setup(e){return{computedClass:H(()=>te(e.color,y(e.centered,"centered"),y(e.stretched,"stretched"),Ve(e.only,"only"),ri(e.columns,"column"),Tl(e.textAlign),"row"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Ib={install(e){e.component("SuiGrid",va),e.component("SuiGridColumn",Tt),e.component("SuiGridRow",wo)}},Ji=P({props:{as:String},setup(e){return{elementType:e.as||"div"}},render(){var e,l;return X(this.elementType,{class:"sub header"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),fe=P({components:{HeaderSubheader:Ji},props:{as:String,attached:[Boolean,String],block:Boolean,color:String,content:String,disabled:Boolean,dividing:Boolean,floated:String,icon:Boolean,image:Boolean,inverted:Boolean,primary:Boolean,secondary:Boolean,size:String,sub:Boolean,subheader:String,textAlign:String},setup(e){const l=e.as||"div",a=H(()=>te("ui",e.color,e.size,y(e.primary,"primary"),y(e.secondary,"secondary"),y(e.block,"block"),y(e.disabled,"disabled"),y(e.dividing,"dividing"),y(e.icon,"icon"),y(e.image,"image"),y(e.inverted,"inverted"),y(e.sub,"sub"),Ve(e.floated,"floated"),Ie(e.attached,"attached"),Tl(e.textAlign),"header"));return{elementType:l,computedClass:a}},render(){var e,l;let a=[];return this.content&&a.push(this.content),this.subheader&&a.push(X(Ji,{},this.subheader)),a.length>0?X(this.elementType,{class:this.computedClass},a):X(this.elementType,{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),gs=P({render(){var e,l;return X("div",{class:"content"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Eb={install(e){e.component("SuiHeader",fe),e.component("SuiHeaderContent",gs),e.component("SuiHeaderSubheader",Ji)}},Ze=P({emits:["update:modelValue"],props:{action:String,disabled:Boolean,error:Boolean,fluid:Boolean,focus:Boolean,icon:String,iconPosition:String,inverted:Boolean,label:String,labeled:Boolean,loading:Boolean,modelValue:String,placeholder:String,size:String,transparent:Boolean,type:String},setup(e,{emit:l}){const a=H(()=>typeof e.icon=="string"||e.loading),o=H(()=>!!e.label||e.labeled),s=H(()=>te("ui",e.size,e.action&&"action",y(e.disabled,"disabled"),y(e.error,"error"),y(e.fluid,"fluid"),y(e.focus,"focus"),e.iconPosition,y(a.value,"icon"),y(e.inverted,"inverted"),y(e.loading,"loading"),y(e.transparent,"transparent"),y(o.value,"labeled"),"input")),c=m=>l("update:modelValue",m.target.value);return()=>t("div",{class:s.value},[e.label&&t(O,null,{default:()=>[e.label]}),t("input",{type:e.type||"text",placeholder:e.placeholder,value:e.modelValue,onInput:m=>c(m)},null),a.value&&t(W,{name:e.icon||"spinner"},null),e.action&&t(z,null,{default:()=>[e.action]})])}}),Rb={install(e){e.component("SuiInput",Ze)}},zb=P({render(){var e,l;return X("div",{class:"item"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Pb=P({props:{verticalAlign:String},setup(e){const{verticalAlign:l}=e;return{computedClass:H(()=>te(Ve(l,"aligned"),"content"))}},render(){var e,l;return X("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Fb=P({render(){var e,l;return X("div",{class:"description"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Vb=P({render(){var e,l;return X("div",{class:"extra"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Mb=P({props:{divided:Boolean,inverted:Boolean,link:Boolean,relaxed:[Boolean,String],unstackable:Boolean},setup(e){return{computedClass:H(()=>te("ui",y(e.divided,"divided"),y(e.inverted,"inverted"),y(e.link,"link"),y(e.unstackable,"unstackable"),Ie(e.relaxed,"relaxed"),"items"))}},render(){var e,l;return X("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Hb=P({props:{as:String},render(){var e,l;let a=this.$props.as||"div";return X(a,{class:"header"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Nb=P({props:{size:String},setup(e){return{computedClass:H(()=>te(e.size,"image"))}},render(){var e,l;return X("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Ob=P({render(){var e,l;return X("div",{class:"meta"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),qb={install(e){e.component("SuiItem",zb),e.component("SuiItemContent",Pb),e.component("SuiItemDescription",Fb),e.component("SuiItemExtra",Vb),e.component("SuiItemGroup",Mb),e.component("SuiItemHeader",Hb),e.component("SuiItemImage",Nb),e.component("SuiItemMeta",Ob)}},nd=P((e,{slots:l})=>{const{sizeClass:a}=ba(e),o=H(()=>te("ui",y(e.animated,"animated"),y(e.bulleted,"bulleted"),y(e.celled,"celled"),y(e.divided,"divided"),y(e.horizontal,"horizontal"),y(e.inverted,"inverted"),y(e.link,"link"),y(e.ordered,"ordered"),y(e.relaxed,"relaxed"),y(e.selection,"selection"),Ve(e.verticalAlign,"aligned"),Ve(e.floated,"floated"),a.value,"list"));let s=e.as||"div";return()=>{var c;return X(s,{class:o.value},(c=l.default)==null?void 0:c.call(l))}},{props:{animated:Boolean,as:String,bulleted:Boolean,celled:Boolean,divided:Boolean,floated:String,horizontal:Boolean,inverted:Boolean,ordered:Boolean,relaxed:Boolean,link:Boolean,selection:Boolean,verticalAlign:String,..._a()}}),Nl=P((e,{slots:l})=>{const a=H(()=>te(y(e.active,"active"),y(e.disabled,"disabled"),"item"));let o=e.as||"div";return()=>{var s;return X(o,{class:a.value},(s=l.default)==null?void 0:s.call(l))}},{props:{active:Boolean,as:String,disabled:Boolean}}),Gb=P({setup(e,{slots:l}){return()=>{var a;return X(W,{...e},(a=l.default)==null?void 0:a.call(l))}}}),jb=P({props:{verticalAlign:String},setup(e){return{computedClass:H(()=>te(Ve(e.verticalAlign,"aligned"),"content"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Ub=P({props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:l}){return()=>{var a;return X(e.as,{class:"header"},(a=l.default)==null?void 0:a.call(l))}}}),Yb=P({props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:l}){return()=>{var a;return X(e.as,{class:"description"},(a=l.default)==null?void 0:a.call(l))}}}),Jb=P({render(){var e,l;return t("div",{class:"list"},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Wb={install(e){e.component("SuiList",nd),e.component("SuiListItem",Nl),e.component("SuiListIcon",Gb),e.component("SuiListContent",jb),e.component("SuiListHeader",Ub),e.component("SuiListDescription",Yb),e.component("SuiListList",Jb)}},od=P({props:{attached:[Boolean,String],borderless:Boolean,color:Boolean,compact:Boolean,fixed:Boolean,floated:[Boolean,String],fluid:Boolean,icon:[Boolean,String],inverted:Boolean,pagination:Boolean,pointing:Boolean,secondary:Boolean,size:String,stackable:Boolean,tabular:[Boolean,String],text:Boolean,vertical:Boolean,widths:Number},setup(e){return{computedClass:H(()=>te("ui",e.color,e.size,y(e.borderless,"borderless"),y(e.compact,"compact"),y(e.fixed,"fixed"),y(e.fluid,"fluid"),y(e.inverted,"inverted"),y(e.pagination,"pagination"),y(e.pointing,"pointing"),y(e.secondary,"secondary"),y(e.stackable,"stackable"),y(e.text,"text"),y(e.vertical,"vertical"),Ie(e.attached,"attached"),Ie(e.floated,"floated"),Ie(e.icon,"icon"),Ie(e.tabular,"tabular"),ri(e.widths,"item"),"menu"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Kb=P({props:{as:String,content:String},setup(e,{slots:l}){let a=e.as||"div";return()=>t(a,{class:"header"},{default:()=>{var o;return[e.content||((o=l.default)==null?void 0:o.call(l))]}})}}),Co=P({props:{action:Boolean,active:Boolean,as:String,browse:Boolean,color:String,disabled:Boolean,fitted:[Boolean,String],header:Boolean,icon:Boolean,index:Number,link:Boolean,name:String,position:String,stackable:Boolean},setup(e,{slots:l}){let a=e.as||"a";e.header&&(a="div"),e.as==="router-link"&&(a=C(e.as));const o=H(()=>te(e.color,e.position,y(e.action,"action"),y(e.active,"active"),y(e.browse,"browse"),y(e.disabled,"disabled"),y(e.header,"header"),y(e.icon,"icon"),y(e.link,"link"),Ie(e.fitted,"fitted"),"item"));return()=>t(a,{class:o.value},{default:()=>{var s;return[e.name||((s=l.default)==null?void 0:s.call(l))]}})}}),Xb=P({props:{position:String},setup(e){const{position:l}=e;return{computedClass:H(()=>te(l,"menu"))}},render(){var e,l;return X("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Qb={install(e){e.component("SuiMenu",od),e.component("SuiMenuHeader",Kb),e.component("SuiMenuItem",Co),e.component("SuiMenuMenu",Xb)}},Cn=P({props:{attached:[Boolean,String],color:String,compact:Boolean,content:String,header:String,error:Boolean,floating:Boolean,hidden:Boolean,icon:Boolean,info:Boolean,negative:Boolean,positive:Boolean,size:String,success:Boolean,visible:Boolean,warning:Boolean},setup(e){return{computedClass:H(()=>te("ui",e.color,e.size,y(e.compact,"compact"),y(e.error,"error"),y(e.floating,"floating"),y(e.hidden,"hidden"),y(e.icon,"icon"),y(e.info,"info"),y(e.negative,"negative"),y(e.positive,"positive"),y(e.success,"success"),y(e.visible,"visible"),y(e.warning,"warning"),Ie(e.attached,"attached"),"message"))}},render(){var e,l;return t("div",{class:this.computedClass},[(this.header||this.content)&&t(sd,null,{default:()=>[t(rd,null,{default:()=>[this.header]}),t("p",null,[this.content])]}),(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),sd=P({render(){var e,l;return X("div",{class:"content"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),rd=P({render(){var e,l;return X("div",{class:"header"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Zb=P({render(){var e,l;return X("li",{class:"content"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),ev=P({render(){var e,l;return X("ul",{class:"list"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),tv={install(e){e.component("SuiMessage",Cn),e.component("SuiMessageContent",sd),e.component("SuiMessageHeader",rd),e.component("SuiMessageItem",Zb),e.component("SuiMessageList",ev)}};function iv(e){return Po()?(Wr(e),!0):!1}function ud(e){return typeof e=="function"?e():r(e)}const cd=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const lv=Object.prototype.toString,av=e=>lv.call(e)==="[object Object]",Va=()=>{},nv=ov();function ov(){var e,l;return cd&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((l=window==null?void 0:window.navigator)==null?void 0:l.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function Ol(e){var l;const a=ud(e);return(l=a==null?void 0:a.$el)!=null?l:a}const dd=cd?window:void 0;function Mn(...e){let l,a,o,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([a,o,s]=e,l=dd):[l,a,o,s]=e,!l)return Va;Array.isArray(a)||(a=[a]),Array.isArray(o)||(o=[o]);const c=[],m=()=>{c.forEach(g=>g()),c.length=0},f=(g,p,_,w)=>(g.addEventListener(p,_,w),()=>g.removeEventListener(p,_,w)),u=gt(()=>[Ol(l),ud(s)],([g,p])=>{if(m(),!g)return;const _=av(p)?{...p}:p;c.push(...a.flatMap(w=>o.map(v=>f(g,w,v,_))))},{immediate:!0,flush:"post"}),d=()=>{u(),m()};return iv(d),d}let Er=!1;function sv(e,l,a={}){const{window:o=dd,ignore:s=[],capture:c=!0,detectIframe:m=!1}=a;if(!o)return Va;nv&&!Er&&(Er=!0,Array.from(o.document.body.children).forEach(g=>g.addEventListener("click",Va)),o.document.documentElement.addEventListener("click",Va));let f=!0;const u=g=>s.some(p=>{if(typeof p=="string")return Array.from(o.document.querySelectorAll(p)).some(_=>_===g.target||g.composedPath().includes(_));{const _=Ol(p);return _&&(g.target===_||g.composedPath().includes(_))}}),d=[Mn(o,"click",g=>{const p=Ol(e);if(!(!p||p===g.target||g.composedPath().includes(p))){if(g.detail===0&&(f=!u(g)),!f){f=!0;return}l(g)}},{passive:!0,capture:c}),Mn(o,"pointerdown",g=>{const p=Ol(e);f=!u(g)&&!!(p&&!g.composedPath().includes(p))},{passive:!0}),m&&Mn(o,"blur",g=>{setTimeout(()=>{var p;const _=Ol(e);((p=o.document.activeElement)==null?void 0:p.tagName)==="IFRAME"&&!(_!=null&&_.contains(o.document.activeElement))&&l(g)},0)})].filter(Boolean);return()=>d.forEach(g=>g())}function md(e,l="scale"){const a=j(e.modelValue?"open":"closed");return gt(()=>e.modelValue,o=>{a.value=o?"opening":"closing"}),{animationClasses:H(()=>{switch(a.value){case"opening":return`animating ${l} in`;case"open":return"visible active";case"closing":return`visible active animating ${l} out`;case"closed":return"hidden"}}),isClosed:H(()=>a.value==="closed"),onAnimationEnd:()=>a.value=e.modelValue?"open":"closed"}}const rv=P({props:{blurring:Boolean,inverted:Boolean,modelValue:Boolean},setup(e){const{animationClasses:l,isClosed:a,onAnimationEnd:o}=md(e,"fade"),s=H(()=>te("ui","page modals dimmer transition",y(e.inverted,"inverted"),l.value)),c=H(()=>({display:a.value?"none !important":"flex !important",animationDuration:"500ms"})),m=H(()=>te("dimmable","dimmed",y(e.blurring,"blurring")));return gt(()=>e.modelValue,f=>{if(f){document.body.classList.add(...m.value.split(" "));return}document.body.classList.remove(...m.value.split(" "))}),{className:s,style:c,onAnimationEnd:o}},render(){var e,l;return t("div",{class:this.className,style:this.style,onAnimationend:this.onAnimationEnd},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),hs=P({props:{basic:Boolean,closeIcon:Boolean,dimmer:String,modelValue:Boolean,size:String,closable:{type:Boolean,default:!0},overlay:Boolean,fullscreen:Boolean},setup(e,{emit:l}){const a=j(),{animationClasses:o,isClosed:s}=md(e),c=H(()=>te("ui",e.size,y(e.basic,"basic"),y(e.overlay,"overlay"),y(e.fullscreen,"fullscreen"),"modal","transition",o.value)),m=H(()=>({display:s.value?"none !important":"block !important",animationDuration:"500ms"})),f=()=>l("update:modelValue",!1);return sv(a,()=>e.closable&&l("update:modelValue",!1)),{computedClass:c,style:m,close:f,modalRef:a}},render(){return t(hn,{to:"body"},{default:()=>[t(rv,{blurring:this.dimmer==="blurring",inverted:this.dimmer==="inverted",modelValue:this.modelValue},{default:()=>{var e,l;return[t("div",{class:this.computedClass,style:this.style,onClick:a=>a.stopPropagation(),ref:a=>this.modalRef=a},[this.closeIcon&&t("i",{"aria-hidden":"true",class:"close icon",onClick:this.close},null),(l=(e=this.$slots).default)==null?void 0:l.call(e)])]}})]})}}),_s=P({render(){var e,l;return t("div",{class:"actions"},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),bs=P({props:{image:Boolean,scrolling:Boolean},setup(e){return{computedClass:H(()=>te(y(e.image,"image"),y(e.scrolling,"scrolling"),"content"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),pd=P({render(){var e,l;return X("div",{class:"description"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),vs=P({render(){var e,l;return X("div",{class:"header"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),uv={install(e){e.component("SuiModal",hs),e.component("SuiModalActions",_s),e.component("SuiModalContent",bs),e.component("SuiModalDescription",pd),e.component("SuiModalHeader",vs)}},cv=e=>{const l=j(!1),a=Xn(e,"position"),o=j(null),s=Xn(e,"trigger"),c=()=>{l.value=!0,$l(()=>f())},m=()=>{l.value=!1},f=()=>{if(!o.value||!s.value)return;let u=0,d=0;const g=o.value,p=s.value.$el;g.style.transform=`translate(${u}px, ${d}px)`;const{top:_,left:w,width:v,height:x}=p.getBoundingClientRect(),$=g.getBoundingClientRect(),{pageXOffset:L,pageYOffset:h}=window;if(a.value.includes("top")?(u=L+w,d=h+_-g.offsetTop-g.offsetHeight):(u=w,d=_+x-$.top),a.value.includes("right")){const b=v-$.width;u=w+b}if(a.value.includes("center")){const b=v/2-$.width/2;u=w+b}a.value==="right center"&&(u=w+v,d=_+x/2-$.top-$.height/2),a.value==="left center"&&(u=w-$.width,d=_+x/2-$.top-$.height/2),g.style.display="flex",g.style.position="absolute",g.style.transform=`translate(${u}px, ${d}px)`};return{show:l,showPopup:c,hidePopup:m,placement:a,popupRef:o,triggerRef:s}},dv=P({props:{basic:Boolean,content:String,flowing:Boolean,header:String,inverted:Boolean,position:{type:String,default:"top left"},size:String,trigger:Object,wide:[Boolean,String]},setup(e,{slots:l}){const{show:a,showPopup:o,hidePopup:s,popupRef:c,triggerRef:m}=cv(e);Xo(()=>{var _,w,v;(_=m.value)!=null&&_.$el&&((w=m.value)==null||w.$el.addEventListener("mouseenter",o),(v=m.value)==null||v.$el.addEventListener("mouseleave",s))});const f=j(a.value?"open":"close");H(()=>f.value!=="closed"),gt(()=>a.value,_=>{f.value=_?"opening":"closing"});const u=(_,w="scale")=>{switch(_){case"opening":return`animating ${w} in`;case"open":return"visible active";case"closing":return`visible active animating ${w} out`;case"closed":return"hidden"}},d=()=>f.value=a.value?"open":"closed";xi(()=>{var _;(_=c.value)==null||_.addEventListener("animationend",d,!0)}),Zi(()=>{var _;(_=c.value)==null||_.removeEventListener("animationend",d)});const g={position:"initial",animationDuration:"200ms"},p=H(()=>te("ignored ui",e.position,e.size,y(e.basic,"basic"),y(e.flowing,"flowing"),y(e.inverted,"inverted"),Ie(e.wide,"wide"),"popup transition",u(f.value,"scale")));return()=>t(hn,{to:"body"},{default:()=>{var _;return[t("div",{ref:c,style:"display: flex; position: absolute; transform: translate(0px, 0px);"},[t("div",{class:p.value,style:g},[e.header&&t("div",{class:"header"},[e.header]),t("div",{class:"content"},[e.content?e.content:(_=l.default)==null?void 0:_.call(l)])])])]}})}}),mv={install(e){e.component("SuiPopup",dv)}},pv=["top","bottom","left"],Ss=()=>({attached:{type:String,validator:e=>pv.includes(e)}}),fd=e=>({attachedClasses:H(()=>te(e.attached,{attached:e.attached}))}),fv=["red","orange","yellow","olive","green","teal","blue","purple","violet","pink","brown","grey","black"],ys=()=>({color:{type:String,validator:e=>fv.includes(e)}}),ws=e=>({colorClasses:H(()=>te(e.inverted&&"inverted",e.color))}),Ao=P({props:{active:Boolean,disabled:Boolean,error:Boolean,indeterminate:[Boolean,String],indicating:Boolean,inverted:Boolean,label:String,percent:Number,progress:[Boolean,String],size:String,success:Boolean,warning:Boolean,...Ss(),...ys()},setup(e,{slots:l}){const{attachedClasses:a}=fd(e),{colorClasses:o}=ws(e),s=H(()=>te("ui",o.value,e.size,y(e.active||e.indicating,"active"),y(e.disabled,"disabled"),y(e.error,"error"),y(e.indicating,"indicating"),y(e.success,"success"),y(e.warning,"warning"),Ie(e.indeterminate,"indeterminate"),a.value,"progress")),c=H(()=>te(Ie(e.progress,"progress"))),m=H(()=>e.progress!=="centered"?{}:{right:0});return()=>{var f;return t("div",{class:s.value,"data-percent":e.percent},[t("div",{class:"bar",style:`width: ${e.percent}%; transition-duration: 300ms;`},[e.progress&&t("div",{class:c.value,style:m.value},[((f=l.default)==null?void 0:f.call(l))||`${e.percent}%`])]),e.label&&t("div",{class:"label"},[e.label])])}}}),gv={install(e){e.component("SuiProgress",Ao)}},hv=P({props:{attached:Boolean,close:[Boolean,String],dividing:Boolean,internal:Boolean,position:String,size:String},setup(e){return{computedClass:H(()=>te("ui",e.position,e.size,y(e.attached,"attached"),y(e.dividing,"dividing"),y(e.internal,"internal"),Ie(e.close,"close"),"rail"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),_v={install(e){e.component("SuiRail",hv)}},bv=P({props:{icon:String,index:{type:Number,default:0}},setup(e){const l=Me("rating",j(0)),a=Me("updateRating"),o=Me("selectedIndex",j(0)),s=Me("updateSelectedIndex"),c=Me("clearable",!1),m=Me("disabled",!1),f=()=>{if(!m){if(c&&e.index===l.value){a(0),s(0);return}a(e.index)}},u=()=>{m||s(e.index)},d=H(()=>e.index<=l.value),g=H(()=>e.index<=o.value),p=H(()=>te(e.icon,y(d.value,"active"),y(g.value,"selected"),"icon"));return()=>t("i",{class:p.value,onClick:()=>f(),onMouseenter:()=>u()},null)}}),vv=P({props:{clearable:Boolean,color:String,defaultRating:{type:Number,default:0},disabled:Boolean,icon:{type:String,default:"star"},maxRating:{type:Number,default:1},modelValue:Number,size:String},setup(e,{emit:l}){const a=j(e.modelValue||e.defaultRating),o=j(!1),s=j(0),c=g=>{a.value=g,l("update:modelValue",g),l("change",g)},m=g=>s.value=g,f=()=>{e.disabled||(o.value=!0)},u=()=>{e.disabled||(o.value=!1,m(0))},d=H(()=>te("ui",e.color,e.icon,e.size,y(e.disabled,"disabled"),"rating",y(o.value,"selected")));return dt("rating",a),dt("updateRating",c),dt("selectedIndex",s),dt("updateSelectedIndex",m),dt("clearable",e.clearable),dt("disabled",e.disabled),()=>t("div",{class:d.value,onMouseenter:()=>f(),onMouseleave:()=>u()},[[...Array(e.maxRating)].map((g,p)=>t(bv,{icon:e.icon,index:p+1},null))])}}),Sv={install(e){e.component("SuiRating",vv)}},tl=P({props:{active:Boolean,animated:String,disabled:Boolean,instant:Boolean},setup(e){return{computedClass:H(()=>te("ui",e.animated,y(e.active,"active"),y(e.disabled,"disabled"),y(e.instant,"instant"),"reveal"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),zt=P({props:{visible:Boolean,hidden:Boolean},setup(e){return{computedClass:H(()=>te("ui",y(e.visible,"visible"),y(e.hidden,"hidden"),"content"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),yv={install(e){e.component("SuiReveal",tl),e.component("SuiRevealContent",zt)}},wv=P({props:{icon:String,placeholder:String},setup(e){return()=>t("div",{class:"ui search"},[t("div",{class:"ui icon input"},[t("input",{type:"text",class:"prompt",placeholder:e.placeholder},null),t("i",{class:"search icon"},null)]),t("div",{class:"results"},null)])}}),Cv={install(e){e.component("SuiSearch",wv)}},N=P((e,{slots:l})=>{const{colorClasses:a}=ws(e),{sizeClass:o}=ba(e),s=H(()=>te("ui",a.value,o.value,y(e.basic,"basic"),y(e.circular,"circular"),y(e.clearing,"clearing"),y(e.compact,"compact"),y(e.disabled,"disabled"),y(e.inverted,"inverted"),y(e.loading,"loading"),y(e.piled,"piled"),y(e.placeholder,"placeholder"),y(e.raised,"raised"),y(e.secondary,"secondary"),y(e.stacked,"stacked"),y(e.tertiary,"tertiary"),y(e.vertical,"vertical"),Ve(e.floated,"floated"),Ve(e.textAlign,"aligned"),Ie(e.attached,"attached"),Ie(e.fitted,"fitted"),Ie(e.padded,"padded"),Ie(e.scrolling,"scrolling"),"segment"));return()=>{var c;return t("div",{class:s.value},[(c=l.default)==null?void 0:c.call(l)])}},{props:{attached:[Boolean,String],basic:Boolean,circular:Boolean,clearing:Boolean,compact:Boolean,disabled:Boolean,fitted:[Boolean,String],floated:String,inverted:Boolean,loading:Boolean,padded:[Boolean,String],piled:Boolean,placeholder:Boolean,raised:Boolean,scrolling:[Boolean,String],secondary:Boolean,stacked:Boolean,tertiary:Boolean,textAlign:String,vertical:Boolean,...ys(),..._a()}}),Ct=P((e,{slots:l})=>{const{sizeClass:a}=ba(e),o=H(()=>te("ui",a.value,y(e.basic,"basic"),y(e.compact,"compact"),y(e.horizontal,"horizontal"),y(e.piled,"piled"),y(e.raised,"raised"),y(e.stacked,"stacked"),"segments"));return()=>{var s;return t("div",{class:o.value},[(s=l.default)==null?void 0:s.call(l)])}},{props:{basic:Boolean,compact:Boolean,horizontal:Boolean,piled:Boolean,raised:Boolean,stacked:Boolean,..._a()}}),Av=P({render(){var e,l;return t("div",{class:"inline"},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),xv={install(e){e.component("SuiSegment",N),e.component("SuiSegmentGroup",Ct),e.component("SuiSegmentInline",Av)}},kv=P({directives:{clickoutside:ps},emits:["update:visible","show","hide"],props:{animation:{type:String,default:"overlay"},dimmed:Boolean,direction:{type:String,default:"left"},icon:[Boolean,String],inverted:Boolean,visible:Boolean},setup(e,{emit:l}){const a=oi({animating:!1}),o=H(()=>{const s=e.direction==="right"||e.direction==="left";return te("ui","sidebar",e.direction,e.animation,y(e.inverted,"inverted"),y(e.visible,"visible"),y(a.animating,"animating"),y(s,"vertical"),Ie(e.icon,"icon"),"menu")});return gt(()=>e.visible,()=>{if(a.animating=!0,setTimeout(()=>a.animating=!1,500),e.dimmed){const s=document.querySelector(".pusher");s&&s.classList.toggle("dimmed")}}),{computedClass:o,onClickPusher:s=>{const c=s.path||s.composedPath&&s.composedPath();c&&c.find(m=>m.classList&&m.classList.contains("pusher"))&&e.visible&&l("update:visible",!1)}}},render(){var e,l;return Si(t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)]),[[dn("clickoutside"),this.onClickPusher]])}}),$v={install:e=>{e.component("SuiSidebar",kv)}};class Hn{static getWindowScrollTop(){let{documentElement:l}=document;return(window.pageYOffset||l.scrollTop)-(l.clientTop||0)}static getWindowScrollLeft(){let{documentElement:l}=document;return(window.pageXOffset||l.scrollLeft)-(l.clientLeft||0)}static hasClass(l,a){return l.classList.contains(a)}}const Bv=P({emits:["change","slideend","update:modelValue"],props:{color:String,disabled:Boolean,inverted:Boolean,labeled:[Boolean,String],labels:Array,max:{type:Number,default:10},min:{type:Number,default:0},modelValue:{type:[Number,Array],default:0},range:Boolean,reversed:Boolean,size:String,step:{type:Number,default:1},vertical:Boolean,verticalHeight:{type:[Number,String],default:200}},setup(e,{emit:l}){const a=H(()=>te("ui",e.color,e.size,y(e.disabled,"disabled"),y(e.inverted,"inverted"),y(e.reversed,"reversed"),y(e.vertical,"vertical"),Ie(e.labeled,"labeled"),"slider")),o=()=>100*(e.modelValue[0]-e.min)/(e.max-e.min),s=()=>100*(e.modelValue[1]-e.min)/(e.max-e.min),c=H(()=>{if(e.range)return e.reversed&&!e.vertical?{right:o()+"%",width:s()-o()+"%"}:e.vertical?e.reversed?{bottom:o()+"%",height:s()-o()+"%"}:{top:o()+"%",height:s()-o()+"%"}:{left:o()+"%",width:s()-o()+"%"};let U=e.modelValue>e.max?e.max:e.modelValue;return e.reversed?e.vertical?{bottom:"0%",top:`${100-(U-e.min)/(e.max-e.min)*100}%`}:{right:"0%",left:`${100-(U-e.min)/(e.max-e.min)*100}%`}:e.vertical?{top:"0%",bottom:`${100-(U-e.min)/(e.max-e.min)*100}%`}:{left:"0%",right:`${100-(U-e.min)/(e.max-e.min)*100}%`}}),m=H(()=>{let U=e.range?e.modelValue[0]:e.modelValue>e.max?e.max:e.modelValue;return!e.reversed&&e.vertical?{top:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:e.reversed&&e.vertical?{top:"auto",bottom:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.reversed&&!e.vertical?{left:"auto",right:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{left:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),f=H(()=>{let U=e.modelValue[1]>e.max?e.max:e.modelValue[1];return e.reversed&&!e.vertical?{left:"auto",right:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.vertical?e.reversed?{top:"auto",bottom:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{top:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:{left:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),u=H(()=>e.labels?e.labels:[...Array(e.max-e.min+1)].map((U,K)=>K*e.step+e.min)),d=()=>{var U,K;let de=1,le=g(),Le=(e.vertical?(U=_.value)==null?void 0:U.clientHeight:(K=_.value)==null?void 0:K.clientWidth)||0,Je=1;if(Le>0)for(;Le/le*Je<100;)le%Je||(de=Je),Je+=1;return de},g=()=>Math.round((e.max-e.min)/e.step),p=j(null),_=j(null),w=j(0),v=j(0),x=j(0),$=j(0),L=()=>{if(!p.value)return;let U=p.value.getBoundingClientRect();w.value=U.left+Hn.getWindowScrollLeft(),v.value=U.top+Hn.getWindowScrollTop(),x.value=p.value.offsetWidth,$.value=p.value.offsetHeight},h=j(0),b=U=>{let{pageX:K,pageY:de}=U.touches?U.touches[0]:U,le,Le;e.vertical?le=(v.value+$.value-de)*100/$.value:le=(K-w.value)*100/x.value,Le=(e.max-e.min)*(le/100)+e.min;const Je=e.range?e.modelValue[h.value]:e.modelValue||0;Le=Je+Math.round(Le/e.step-Je/e.step)*e.step,e.reversed&&(Le=e.max-Le+e.min),e.vertical&&(Le=e.max-Le+e.min),k(Le)},k=U=>{let K=U,de;if(e.range)if(de=e.modelValue?[...e.modelValue]:[],h.value===0){let le=e.modelValue?e.modelValue[1]:e.max;K<e.min?K=e.min:K>le&&(K=le),de[0]=K,de[1]=de[1]||e.max}else{let le=e.modelValue?e.modelValue[0]:e.min;K>e.max?K=e.max:K<le&&(K=le),de[0]=de[0]||e.min,de[1]=K}else K<e.min&&(K=e.min),K>e.max&&(K=e.max),de=K;l("update:modelValue",de),l("change",de)},T=j(!1),E=U=>T.value=U,V=(U,K=0)=>{E(!0),L(),h.value=K,U.preventDefault()},M=U=>{T.value&&(E(!1),document.removeEventListener("mousemove",F),l("slideend",{event:U,value:e.modelValue}))},F=U=>{T.value&&(b(U),U==null||U.preventDefault())},G=(U,K=0)=>{e.disabled||(V(U,K),document.addEventListener("mousemove",F),document.addEventListener("mouseup",M),U.preventDefault())},Q=(U,K=0)=>{switch(h.value=K,U.code){case"ArrowUp":e.vertical&&(e.reversed?Y():ge()),U.preventDefault();break;case"ArrowDown":e.vertical&&(e.reversed?ge():Y()),U.preventDefault();break;case"ArrowRight":e.reversed?ge():Y(),U.preventDefault();break;case"ArrowLeft":e.reversed?Y():ge(),U.preventDefault();break}},Y=()=>{let U=0;e.range?U=e.modelValue[h.value]+e.step:U=e.modelValue+e.step,k(U)},ge=()=>{let U=0;e.range?U=e.modelValue[h.value]-e.step:U=e.modelValue-e.step,k(U)},Be=U=>{if(!e.disabled&&!Hn.hasClass(U.target,"thumb")){if(e.range){let K=(e.vertical?U.offsetY/U.target.clientHeight:U.offsetX/U.target.clientWidth)*100,de=(o()+s())/2;K<de?h.value=e.reversed?1:0:h.value=e.reversed?0:1}L(),b(U)}};return()=>t("div",{ref:U=>p.value=U,class:a.value,style:e.vertical?`height: ${e.verticalHeight}px;`:""},[t("div",{class:"inner",onClick:Be},[t("div",{class:"track",ref:U=>_.value=U},null),t("div",{class:"track-fill",style:c.value},null),t("div",{class:"thumb",style:m.value,onMousedown:U=>G(U),onTouchstart:U=>V(U),onTouchmove:U=>F(U),onTouchend:U=>M(U),onKeydown:U=>Q(U),tabindex:0},null),e.range&&t("div",{class:"thumb second",style:f.value,onMousedown:U=>G(U,1),onTouchstart:U=>V(U,1),onTouchmove:U=>F(U),onTouchend:U=>M(U),onKeydown:U=>Q(U,1),tabindex:0},null)]),e.labeled&&t("ul",{class:"auto labels"},[[...Array(g()+1)].map((U,K)=>{let de=K/g();return K%d()?t("li",{class:"halftick label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${de} + 7px);`},null):t("li",{class:"label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${de} + 7px);`},[e.reversed&&!e.vertical?e.labels?e.labels[g()-K]:u.value[g()-K]:e.labels?e.labels[K]:u.value[K]])})])])}}),Tv={install(e){e.component("SuiSlider",Bv)}},xo=P({props:{content:String},render(){var e,l;return this.$props.content?X("div",{class:"label"},this.$props.content):X("div",{class:"label"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),ko=P({props:{content:String,text:Boolean},setup(e){return{computedClass:H(()=>te(y(e.text,"text"),"value"))}},render(){var e,l;return this.$props.content?X("div",{class:this.computedClass},this.$props.content):X("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Lv=P({components:{StatisticLabel:xo,StatisticValue:ko},props:{color:String,floated:[Boolean,String],horizontal:Boolean,inverted:Boolean,label:String,size:String,text:Boolean,value:String},setup(e){const l=Me("ui",!0);return{computedClass:H(()=>te(l&&"ui",e.color,e.size,y(e.horizontal,"horizontal"),y(e.inverted,"inverted"),y(e.text,"text"),Ie(e.floated,"floated"),"statistic"))}},render(){var e,l,a,o,s,c;let m=[];return this.$props.value&&m.push(X(ko,{content:this.$props.value},(l=(e=this.$slots).default)==null?void 0:l.call(e))),this.$props.label&&m.push(X(xo,{content:this.$props.label},(o=(a=this.$slots).default)==null?void 0:o.call(a))),X("div",{class:this.computedClass},m.length>0?m:(c=(s=this.$slots).default)==null?void 0:c.call(s))}}),Dv=P({props:{color:String,horizontal:Boolean,inverted:Boolean,size:String,widths:Number},setup(e){return dt("ui",!1),{computedClass:H(()=>te("ui",e.color,e.size,y(e.horizontal,"horizontal"),y(e.inverted,"inverted"),ri(e.widths,""),"statistics"))}},render(){var e,l;return X("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Iv={install(e){e.component("SuiStatistic",Lv),e.component("SuiStatisticGroup",Dv),e.component("SuiStatisticLabel",xo),e.component("SuiStatisticValue",ko)}},Ev=P((e,{slots:l})=>{const a=H(()=>te(y(e.active,"active"),y(e.completed,"completed"),y(e.disabled,"disabled"),y(e.fluid,"fluid"),y(e.link,"link"),y(e.vertical,"vertical"),"step"));return()=>{var o,s;return e.href?t("a",{class:a.value,href:e.href},[(o=l.default)==null?void 0:o.call(l)]):t("div",{class:a.value},[e.icon&&t(W,{name:e.icon},null),(e.title||e.description)&&t("div",{class:"content"},[e.title&&t("div",{class:"title"},[e.title]),e.description&&t("div",{class:"description"},[e.description])]),(s=l.default)==null?void 0:s.call(l)])}},{props:{active:Boolean,completed:Boolean,description:String,disabled:Boolean,fluid:Boolean,href:String,icon:String,link:Boolean,title:String,vertical:Boolean}}),Rv=["one","two","three","four","five","six","seven","eight"],zv=P({props:{attached:String,fluid:Boolean,inverted:Boolean,ordered:Boolean,size:String,stackable:String,unstackable:Boolean,vertical:Boolean,widths:Number},setup(e){const{widths:l}=e;return{computedClass:H(()=>te("ui",l&&Rv[l-1],e.size,y(e.fluid,"fluid"),y(e.inverted,"inverted"),y(e.ordered,"ordered"),y(e.unstackable,"unstackable"),y(e.vertical,"vertical"),Ve(e.attached,"attached"),Ve(e.stackable,"stackable"),"steps"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Pv=P({render(){var e,l;return t("div",{class:"content"},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Fv=P({render(){var e,l;return t("div",{class:"title"},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Vv=P({render(){var e,l;return t("div",{class:"description"},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Mv={install(e){e.component("SuiStep",Ev),e.component("SuiStepGroup",zv),e.component("SuiStepContent",Pv),e.component("SuiStepTitle",Fv),e.component("SuiStepDescription",Vv)}},gd=P({props:{active:Boolean,attached:[Boolean,String],header:String},setup(e){return{computedClass:H(()=>te("ui tab segment",y(e.active,"active"),Ie(e.attached,"attached")))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Hv=P({emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},pointing:Boolean,secondary:Boolean,text:Boolean},setup(e,{emit:l,slots:a}){const o=j(e.activeIndex);gt(()=>e.activeIndex,d=>{o.value=d});const s=(d,g)=>{o.value!==g&&(o.value=g,l("update:activeIndex",g),l("tab-change",{event:d,index:g})),l("tab-click",{event:d,index:g})},c=(d,g)=>{d.key==="Enter"&&s(d,g)},m=H(()=>{var d,g;let p=[];return(d=a.default)!=null&&d.call(a)&&((g=a.default)==null||g.call(a).forEach(_=>{xt(_)&&p.push(_)})),p}),f=H(()=>!e.secondary&&!e.pointing&&!e.text),u=H(()=>te("ui menu",y(f.value,"tabular attached"),y(e.pointing,"pointing"),y(e.secondary,"secondary"),y(e.text,"text")));return{onClick:s,onKeyDown:c,tabIndex:o,tabs:m,tabMenuClass:u,isDefaultMenu:f}},render(){const e=()=>this.tabs.map((a,o)=>t("a",{class:`item ${this.tabIndex===o&&"active"}`,onClick:s=>this.onClick(s,o),onKeydown:s=>this.onKeyDown(s,o),tabindex:0},[a.props.header])),l=()=>this.tabs.map((a,o)=>t(gd,el(a.props,{active:this.tabIndex===o,attached:this.isDefaultMenu?"bottom":!1}),{default:()=>{var s,c;return[(c=(s=a.children).default)==null?void 0:c.call(s)]}}));return t(Ae,null,[t("div",{class:this.tabMenuClass},[e()]),l()])}}),Nv={install(e){e.component("SuiTab",Hv),e.component("SuiTabPanel",gd)}},Ov=P({props:{attached:[Boolean,String],basic:[Boolean,String],celled:Boolean,collapsing:Boolean,color:String,columns:Number,compact:[Boolean,String],definition:Boolean,fixed:Boolean,inverted:Boolean,padded:[Boolean,String],selectable:Boolean,singleLine:Boolean,size:String,stackable:Boolean,striped:Boolean,structured:Boolean,unstackable:Boolean},setup(e){return{computedClass:H(()=>te("ui",e.color,e.size,y(e.celled,"celled"),y(e.collapsing,"collapsing"),y(e.definition,"definition"),y(e.fixed,"fixed"),y(e.inverted,"inverted"),y(e.selectable,"selectable"),y(e.singleLine,"single line"),y(e.stackable,"stackable"),y(e.striped,"striped"),y(e.structured,"structured"),y(e.unstackable,"unstackable"),Ie(e.attached,"attached"),Ie(e.basic,"basic"),Ie(e.compact,"compact"),Ie(e.padded,"padded"),ri(e.columns,"column"),"table"))}},render(){var e,l;return t("table",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),qv=P({render(){var e,l;return X("tbody",{},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Gv=P({props:{active:Boolean,collapsing:Boolean,color:String,disabled:Boolean,error:Boolean,marked:String,negative:Boolean,positive:Boolean,selectable:Boolean,singleLine:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:H(()=>te(e.color,y(e.active,"active"),y(e.collapsing,"collapsing"),y(e.disabled,"disabled"),y(e.error,"error"),y(e.negative,"negative"),y(e.positive,"positive"),y(e.selectable,"selectable"),y(e.singleLine,"single line"),y(e.warning,"warning"),Ve(e.verticalAlign,"aligned"),Ve(e.marked,"marked"),Tl(e.textAlign)))}},render(){var e,l,a,o;return this.computedClass?t("td",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)]):t("td",null,[(o=(a=this.$slots).default)==null?void 0:o.call(a)])}}),jv=P({props:{fullWidth:Boolean},setup(e){const{fullWidth:l}=e;return{computedClass:H(()=>te(y(l,"full-width")))}},render(){var e,l,a,o;return this.computedClass?X("tfoot",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e)):X("tfoot",{},(o=(a=this.$slots).default)==null?void 0:o.call(a))}}),Uv=P({props:{fullWidth:Boolean},setup(e){return{computedClass:H(()=>te(y(e.fullWidth,"full-width")))}},render(){var e,l,a,o;return this.computedClass?X("thead",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e)):X("thead",{},(o=(a=this.$slots).default)==null?void 0:o.call(a))}}),Yv=P({props:{singleLine:Boolean,textAlign:String,width:Number},setup(e){return{computedClass:H(()=>te(y(e.singleLine,"single line"),Ve(e.textAlign,"aligned"),ri(e.width,"wide")))}},render(){var e,l,a,o;return this.computedClass?t("th",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)]):t("th",null,[(o=(a=this.$slots).default)==null?void 0:o.call(a)])}}),Jv=P({props:{active:Boolean,color:String,disabled:Boolean,error:Boolean,negative:Boolean,positive:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:H(()=>te(e.color,y(e.active,"active"),y(e.disabled,"disabled"),y(e.error,"error"),y(e.negative,"negative"),y(e.positive,"positive"),y(e.warning,"warning"),Ve(e.textAlign,"aligned"),Ve(e.verticalAlign,"aligned")))}},render(){var e,l,a,o;return this.computedClass?t("tr",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)]):t("tr",null,[(o=(a=this.$slots).default)==null?void 0:o.call(a)])}}),Wv={install(e){e.component("SuiTable",Ov),e.component("SuiTableBody",qv),e.component("SuiTableCell",Gv),e.component("SuiTableFooter",jv),e.component("SuiTableHeader",Uv),e.component("SuiTableHeaderCell",Yv),e.component("SuiTableRow",Jv)}};function Kv(e,l){e.indexOf(l)===-1&&e.push(l)}const hd=(e,l,a)=>Math.min(Math.max(a,e),l),Mt={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},Qa=e=>typeof e=="number",pl=e=>Array.isArray(e)&&!Qa(e[0]),Xv=(e,l,a)=>{const o=l-e;return((a-e)%o+o)%o+e};function Qv(e,l){return pl(e)?e[Xv(0,e.length,l)]:e}const _d=(e,l,a)=>-a*e+a*l+e,bd=()=>{},yi=e=>e,Cs=(e,l,a)=>l-e===0?1:(a-e)/(l-e);function vd(e,l){const a=e[e.length-1];for(let o=1;o<=l;o++){const s=Cs(0,l,o);e.push(_d(a,1,s))}}function Zv(e){const l=[0];return vd(l,e-1),l}function e1(e,l=Zv(e.length),a=yi){const o=e.length,s=o-l.length;return s>0&&vd(l,s),c=>{let m=0;for(;m<o-2&&!(c<l[m+1]);m++);let f=hd(0,1,Cs(l[m],l[m+1],c));return f=Qv(a,m)(f),_d(e[m],e[m+1],f)}}const Sd=e=>Array.isArray(e)&&Qa(e[0]),$o=e=>typeof e=="object"&&!!e.createAnimation,Al=e=>typeof e=="function",t1=e=>typeof e=="string",Zl={ms:e=>e*1e3,s:e=>e/1e3},yd=(e,l,a)=>(((1-3*a+3*l)*e+(3*a-6*l))*e+3*l)*e,i1=1e-7,l1=12;function a1(e,l,a,o,s){let c,m,f=0;do m=l+(a-l)/2,c=yd(m,o,s)-e,c>0?a=m:l=m;while(Math.abs(c)>i1&&++f<l1);return m}function ql(e,l,a,o){if(e===l&&a===o)return yi;const s=c=>a1(c,0,1,e,a);return c=>c===0||c===1?c:yd(s(c),l,o)}const n1=(e,l="end")=>a=>{a=l==="end"?Math.min(a,.999):Math.max(a,.001);const o=a*e,s=l==="end"?Math.floor(o):Math.ceil(o);return hd(0,1,s/e)},Rr={ease:ql(.25,.1,.25,1),"ease-in":ql(.42,0,1,1),"ease-in-out":ql(.42,0,.58,1),"ease-out":ql(0,0,.58,1)},o1=/\((.*?)\)/;function zr(e){if(Al(e))return e;if(Sd(e))return ql(...e);if(Rr[e])return Rr[e];if(e.startsWith("steps")){const l=o1.exec(e);if(l){const a=l[1].split(",");return n1(parseFloat(a[0]),a[1].trim())}}return yi}class wd{constructor(l,a=[0,1],{easing:o,duration:s=Mt.duration,delay:c=Mt.delay,endDelay:m=Mt.endDelay,repeat:f=Mt.repeat,offset:u,direction:d="normal",autoplay:g=!0}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=yi,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((_,w)=>{this.resolve=_,this.reject=w}),o=o||Mt.easing,$o(o)){const _=o.createAnimation(a);o=_.easing,a=_.keyframes||a,s=_.duration||s}this.repeat=f,this.easing=pl(o)?yi:zr(o),this.updateDuration(s);const p=e1(a,u,pl(o)?o.map(zr):yi);this.tick=_=>{var w;c=c;let v=0;this.pauseTime!==void 0?v=this.pauseTime:v=(_-this.startTime)*this.rate,this.t=v,v/=1e3,v=Math.max(v-c,0),this.playState==="finished"&&this.pauseTime===void 0&&(v=this.totalDuration);const x=v/this.duration;let $=Math.floor(x),L=x%1;!L&&x>=1&&(L=1),L===1&&$--;const h=$%2;(d==="reverse"||d==="alternate"&&h||d==="alternate-reverse"&&!h)&&(L=1-L);const b=v>=this.totalDuration?1:Math.min(L,1),k=p(this.easing(b));l(k),this.pauseTime===void 0&&(this.playState==="finished"||v>=this.totalDuration+m)?(this.playState="finished",(w=this.resolve)===null||w===void 0||w.call(this,k)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},g&&this.play()}play(){const l=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=l-this.pauseTime:this.startTime||(this.startTime=l),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var l;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(l=this.reject)===null||l===void 0||l.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(l){this.duration=l,this.totalDuration=l*(this.repeat+1)}get currentTime(){return this.t}set currentTime(l){this.pauseTime!==void 0||this.rate===0?this.pauseTime=l:this.startTime=performance.now()-l/this.rate}get playbackRate(){return this.rate}set playbackRate(l){this.rate=l}}class s1{setAnimation(l){this.animation=l,l==null||l.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const Nn=new WeakMap;function Cd(e){return Nn.has(e)||Nn.set(e,{transforms:[],values:new Map}),Nn.get(e)}function r1(e,l){return e.has(l)||e.set(l,new s1),e.get(l)}const u1=["","X","Y","Z"],c1=["translate","scale","rotate","skew"],Za={x:"translateX",y:"translateY",z:"translateZ"},Pr={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:e=>e+"deg"},d1={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:e=>e+"px"},rotate:Pr,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:yi},skew:Pr},ca=new Map,As=e=>`--motion-${e}`,en=["x","y","z"];c1.forEach(e=>{u1.forEach(l=>{en.push(e+l),ca.set(As(e+l),d1[e])})});const m1=(e,l)=>en.indexOf(e)-en.indexOf(l),p1=new Set(en),Ad=e=>p1.has(e),f1=(e,l)=>{Za[l]&&(l=Za[l]);const{transforms:a}=Cd(e);Kv(a,l),e.style.transform=g1(a)},g1=e=>e.sort(m1).reduce(h1,"").trim(),h1=(e,l)=>`${e} ${l}(var(${As(l)}))`,Bo=e=>e.startsWith("--"),Fr=new Set;function _1(e){if(!Fr.has(e)){Fr.add(e);try{const{syntax:l,initialValue:a}=ca.has(e)?ca.get(e):{};CSS.registerProperty({name:e,inherits:!1,syntax:l,initialValue:a})}catch{}}}const On=(e,l)=>document.createElement("div").animate(e,l),Vr={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{On({opacity:[1]})}catch{return!1}return!0},finished:()=>!!On({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{On({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},qn={},ol={};for(const e in Vr)ol[e]=()=>(qn[e]===void 0&&(qn[e]=Vr[e]()),qn[e]);const b1=.015,v1=(e,l)=>{let a="";const o=Math.round(l/b1);for(let s=0;s<o;s++)a+=e(Cs(0,o-1,s))+", ";return a.substring(0,a.length-2)},Mr=(e,l)=>Al(e)?ol.linearEasing()?`linear(${v1(e,l)})`:Mt.easing:Sd(e)?S1(e):e,S1=([e,l,a,o])=>`cubic-bezier(${e}, ${l}, ${a}, ${o})`;function y1(e,l){for(let a=0;a<e.length;a++)e[a]===null&&(e[a]=a?e[a-1]:l());return e}const w1=e=>Array.isArray(e)?e:[e];function To(e){return Za[e]&&(e=Za[e]),Ad(e)?As(e):e}const Ia={get:(e,l)=>{l=To(l);let a=Bo(l)?e.style.getPropertyValue(l):getComputedStyle(e)[l];if(!a&&a!==0){const o=ca.get(l);o&&(a=o.initialValue)}return a},set:(e,l,a)=>{l=To(l),Bo(l)?e.style.setProperty(l,a):e.style[l]=a}};function xd(e,l=!0){if(!(!e||e.playState==="finished"))try{e.stop?e.stop():(l&&e.commitStyles(),e.cancel())}catch{}}function C1(e,l){var a;let o=(l==null?void 0:l.toDefaultUnit)||yi;const s=e[e.length-1];if(t1(s)){const c=((a=s.match(/(-?[\d.]+)([a-z%]*)/))===null||a===void 0?void 0:a[2])||"";c&&(o=m=>m+c)}return o}function A1(){return window.__MOTION_DEV_TOOLS_RECORD}function x1(e,l,a,o={},s){const c=A1(),m=o.record!==!1&&c;let f,{duration:u=Mt.duration,delay:d=Mt.delay,endDelay:g=Mt.endDelay,repeat:p=Mt.repeat,easing:_=Mt.easing,persist:w=!1,direction:v,offset:x,allowWebkitAcceleration:$=!1,autoplay:L=!0}=o;const h=Cd(e),b=Ad(l);let k=ol.waapi();b&&f1(e,l);const T=To(l),E=r1(h.values,T),V=ca.get(T);return xd(E.animation,!($o(_)&&E.generator)&&o.record!==!1),()=>{const M=()=>{var Q,Y;return(Y=(Q=Ia.get(e,T))!==null&&Q!==void 0?Q:V==null?void 0:V.initialValue)!==null&&Y!==void 0?Y:0};let F=y1(w1(a),M);const G=C1(F,V);if($o(_)){const Q=_.createAnimation(F,l!=="opacity",M,T,E);_=Q.easing,F=Q.keyframes||F,u=Q.duration||u}if(Bo(T)&&(ol.cssRegisterProperty()?_1(T):k=!1),b&&!ol.linearEasing()&&(Al(_)||pl(_)&&_.some(Al))&&(k=!1),k){V&&(F=F.map(ge=>Qa(ge)?V.toDefaultUnit(ge):ge)),F.length===1&&(!ol.partialKeyframes()||m)&&F.unshift(M());const Q={delay:Zl.ms(d),duration:Zl.ms(u),endDelay:Zl.ms(g),easing:pl(_)?void 0:Mr(_,u),direction:v,iterations:p+1,fill:"both"};f=e.animate({[T]:F,offset:x,easing:pl(_)?_.map(ge=>Mr(ge,u)):void 0},Q),f.finished||(f.finished=new Promise((ge,Be)=>{f.onfinish=ge,f.oncancel=Be}));const Y=F[F.length-1];f.finished.then(()=>{w||(Ia.set(e,T,Y),f.cancel())}).catch(bd),$||(f.playbackRate=1.000001)}else if(s&&b)F=F.map(Q=>typeof Q=="string"?parseFloat(Q):Q),F.length===1&&F.unshift(parseFloat(M())),f=new s(Q=>{Ia.set(e,T,G?G(Q):Q)},F,Object.assign(Object.assign({},o),{duration:u,easing:_}));else{const Q=F[F.length-1];Ia.set(e,T,V&&Qa(Q)?V.toDefaultUnit(Q):Q)}return m&&c(e,l,F,{duration:u,delay:d,easing:_,repeat:p,offset:x},"motion-one"),E.setAnimation(f),f&&!L&&f.pause(),f}}const k1=(e,l)=>e[l]?Object.assign(Object.assign({},e),e[l]):Object.assign({},e);function $1(e,l){var a;return typeof e=="string"?l?((a=l[e])!==null&&a!==void 0||(l[e]=document.querySelectorAll(e)),e=l[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const B1=e=>e(),kd=(e,l,a=Mt.duration)=>new Proxy({animations:e.map(B1).filter(Boolean),duration:a,options:l},L1),T1=e=>e.animations[0],L1={get:(e,l)=>{const a=T1(e);switch(l){case"duration":return e.duration;case"currentTime":return Zl.s((a==null?void 0:a[l])||0);case"playbackRate":case"playState":return a==null?void 0:a[l];case"finished":return e.finished||(e.finished=Promise.all(e.animations.map(D1)).catch(bd)),e.finished;case"stop":return()=>{e.animations.forEach(o=>xd(o))};case"forEachNative":return o=>{e.animations.forEach(s=>o(s,e))};default:return typeof(a==null?void 0:a[l])>"u"?void 0:()=>e.animations.forEach(o=>o[l]())}},set:(e,l,a)=>{switch(l){case"currentTime":a=Zl.ms(a);case"playbackRate":for(let o=0;o<e.animations.length;o++)e.animations[o][l]=a;return!0}return!1}},D1=e=>e.finished;function I1(e,l,a){return Al(e)?e(l,a):e}function E1(e){return function(l,a,o={}){l=$1(l);const s=l.length,c=[];for(let m=0;m<s;m++){const f=l[m];for(const u in a){const d=k1(o,u);d.delay=I1(d.delay,m,s);const g=x1(f,u,a[u],d,e);c.push(g)}}return kd(c,o,o.duration)}}const R1=E1(wd);function z1(e,l={}){return kd([()=>{const a=new wd(e,[0,1],l);return a.finished.catch(()=>{}),a}],l,l.duration)}function P1(e,l,a){return(Al(e)?z1:R1)(e,l,a)}const ve=(e,l)=>(a,{duration:o,keyframesOverride:s={}})=>P1(a,{...e,...s},{autoplay:!1,...l,duration:o}),Hr=ve({transform:["scale(0.8) translateZ(0px)","scale(0.8) translateZ(0px)","scale(1.05) translateZ(0px)","scale(1) translateZ(0px)"],opacity:[null,.7,1,null],zIndex:[-1,-1,999,999]},{duration:.5,offset:[0,.1,.8,1]}),F1=ve({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,-1,null,-1]},{duration:.5,offset:[0,.5,.8,1]}),V1=ve({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,1,null,1]},{duration:.5,offset:[0,.5,.8,1]}),M1=ve({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(0)","scale(1)"],opacity:[0,1]},{duration:.4,offset:[0,1]}),H1=ve({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(1)","scale(0)"],opacity:[1,0]},{duration:.4,offset:[0,1]}),N1=ve({opacity:[0,1]},{duration:.5,offset:[0,1]}),O1=ve({opacity:[0,1],transform:["translateY(10%)","export translateY(0%)"]},{duration:.5,offset:[0,1]}),q1=ve({opacity:[0,1],transform:["translateY(-10%)","translateY(0%)"]},{duration:.5,offset:[0,1]}),G1=ve({opacity:[0,1],transform:["translateX(10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),j1=ve({opacity:[0,1],transform:["translateX(-10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),U1=ve({opacity:[1,0]},{duration:.5,offset:[0,1]}),Y1=ve({opacity:[1,0],transform:["translateY(0%)","texport ranslateY(5%)"]},{duration:.5,offset:[0,1]}),J1=ve({opacity:[1,0],transform:["translateY(0%)","translateY(-5%)"]},{duration:.5,offset:[0,1]}),W1=ve({opacity:[1,0],transform:["translateX(0%)","translateX(5%)"]},{duration:.5,offset:[0,1]}),K1=ve({opacity:[1,0],transform:["translateX(0%)","translateX(-5%)"]},{duration:.5,offset:[0,1]}),X1=ve({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["scale3d(.3, .3, .3)","scale3d(1.1, 1.1, 1.1)","scale3d(.9, .9, .9)","scale3d(1.03, 1.03, 1.03)","scale3d(.97, .97, .97)","scale3d(1, 1, 1)"],opacity:[0,null,null,1,null,1]},{duration:.6,offset:[0,.2,.4,.6,.8,1]}),Q1=ve({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, 1500px, 0","translate3d(0, -20px, 0)","translate3d(0, 10px, 0)","translate3d(0, -5px, 0)","translate3d(0, 0, 0)"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),Z1=ve({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, -1500px, 0","translate3d(0, 25px, 0)","translate3d(0, -10px, 0)","translate3d(0, 5px, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),eS=ve({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(1500px, 0, 0","translate3d(-25px, 0, 0)","translate3d(10px, 0, 0)","translate3d(-5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),tS=ve({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(-1500px, 0, 0","translate3d(25px, 0, 0)","translate3d(-10px, 0, 0)","translate3d(5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),iS=ve({transform:["scale3d(.9, .9, .9)","scale3d(1.1, 1.1, 1.1)","scale3d(1.1, 1.1, 1.1)","scale3d(.3, .3, .3)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.5,.55,1]}),lS=ve({transform:["translate3d(0, 10px, 0)","translate3d(0, -20px, 0)","translate3d(0, -20px, 0)","translate3d(0, 2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),aS=ve({transform:["translate3d(0, -10px, 0)","translate3d(0, 20px, 0)","translate3d(0, 20px, 0)","translate3d(0, -2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),nS=ve({transform:["translate3d(-20px, 0, 0)","translate3d(2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),oS=ve({transform:["translate3d(20px, 0, 0)","translate3d(-2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),sS=ve({transform:["perspective(2000px) rotateY(-90deg)","perspective(2000px) rotateY(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),rS=ve({transform:["perspective(2000px) rotateY(0deg)","perspective(2000px) rotateY(90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),uS=ve({transform:["perspective(2000px) rotateX(-90deg)","perspective(2000px) rotateX(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),cS=ve({transform:["perspective(2000px) rotateX(0deg)","perspective(2000px) rotateX(-90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),dS=ve({transform:["scale(0.8)","scale(1)"],opacity:[0,1]},{duration:.5,offset:[0,1]}),mS=ve({transform:["scale(1)","scale(0.9)"],opacity:[1,0]},{duration:.5,offset:[0,1]}),$d={transform:["scaleY(0)","scaleY(1)"],opacity:[0,1]},Bd={transform:["scaleX(0)","scaleX(1)"],opacity:[0,1]},Td={transform:["scaleY(1)","scaleY(0)"],opacity:[1,0]},pS={transform:["scaleX(1)","scaleX(0)"],opacity:[1,0]},fS=ve({transformOrigin:"top center",...$d},{offset:[0,1]}),gS=ve({transformOrigin:"bottom center",...$d},{offset:[0,1]}),hS=ve({transformOrigin:"center right",...Bd},{offset:[0,1]}),_S=ve({transformOrigin:"center left",...Bd},{offset:[0,1]}),bS=ve({transformOrigin:"top center",...Td},{offset:[0,1]}),vS=ve({transformOrigin:"bottom center",...Td},{offset:[0,1]}),Nr=ve({transformOrigin:"center left",...pS},{offset:[0,1]}),$i=.8,fl={transform:["perspective(1000px) rotateX(90deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(15deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},gl={transform:["perspective(1000px) rotateY(-90deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-17.5deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},hl={transform:["perspective(1000px) rotateX(0deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(17.5deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},_l={transform:["perspective(1000px) rotateY(0deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(-10deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},SS=ve({transformOrigin:"top center",transform:fl.transform,opacity:fl.opacity},{duration:$i,offset:fl.offset}),yS=ve({transformOrigin:"bottom center",transform:fl.transform,opacity:fl.opacity},{duration:$i,offset:fl.offset}),wS=ve({transformOrigin:"center right",transform:gl.transform,opacity:gl.opacity},{duration:$i,offset:gl.offset}),CS=ve({transformOrigin:"center left",transform:gl.transform,opacity:gl.opacity},{duration:$i,offset:gl.offset}),AS=ve({transformOrigin:"top center",transform:hl.transform,opacity:hl.opacity},{duration:$i,offset:hl.offset}),xS=ve({transformOrigin:"bottom center",transform:hl.transform,opacity:hl.opacity},{duration:$i,offset:hl.offset}),kS=ve({transformOrigin:"center right",transform:_l.transform,opacity:_l.opacity},{duration:$i,offset:_l.offset}),$S=ve({transformOrigin:"center left",transform:_l.transform,opacity:_l.opacity},{duration:$i,offset:_l.offset}),BS=ve({transform:["scale(0)","scale(1)"],opacity:[1,1]},{offset:[0,1]}),TS=ve({transform:["scale(1)","scale(0)"],opacity:[1,1]},{offset:[0,1]}),LS=ve({transform:["translateY(0)","translateY(0)","translateY(-30px)","translateY(0)","translateY(-15px)","translateY(0)","translateY(0)"]},{offset:[0,.2,.4,.5,.6,.8,1]}),DS=ve({opacity:[1,0,1,0,1]},{offset:[0,.25,.5,.75,1]}),IS=ve({animationTimingFunction:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",backgroundColor:["#FCFCFD","#FFF6CD","FCFCFD"]},{duration:2,offset:[0,.3,1]}),ES=ve({transform:["scale3d(1, 1, 1)","scale3d(1.25, 0.75, 1)","scale3d(0.75, 1.25, 1)","scale3d(1.15, 0.85, 1)","scale3d(0.95, 1.05, 1)","scale3d(1.05, 0.95, 1)","scale3d(1, 1, 1)"]},{duration:.75,offset:[0,.3,.4,.5,.6,.75,1]}),RS=ve({transform:["scale(1)","scale(0.9)","scale(1)"],opacity:[1,.7,1]},{offset:[0,.5,1]}),zS=ve({transform:["translateX(0)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(0)"]}),PS=ve({transform:["scale(1)","scale(0.9) rotate(-3deg)","scale(0.9) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1) rotate(0)"]},{offset:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]}),FS={browse:[Hr,F1],"browse right":[Hr,V1],drop:[M1,H1],fade:[N1,U1],"fade up":[O1,Y1],"fade down":[q1,J1],"fade left":[G1,W1],"fade right":[j1,K1],fly:[X1,iS],"fly up":[Q1,lS],"fly down":[Z1,aS],"fly left":[eS,nS],"fly right":[tS,oS],"horizontal flip":[sS,rS],"vertical flip":[uS,cS],scale:[dS,mS],"slide up":[gS,vS],"slide down":[fS,bS],"slide left":[hS,Nr],"slide right":[_S,Nr],"swing up":[yS,xS],"swing down":[SS,AS],"swing left":[wS,kS],"swing right":[CS,$S],zoom:[BS,TS]},VS={bounce:[LS,void 0],flash:[DS,void 0],glow:[IS,void 0],jiggle:[ES,void 0],pulse:[RS,void 0],shake:[zS,void 0],tada:[PS,void 0]},Ld=e=>({...FS,...VS})[e],MS=e=>{const[l,a]=Ld(e.animation),o=H(()=>e.duration?e.duration/1e3:.5),s=H(()=>(m,f)=>{if(!l)return f();const u=l(m,{duration:o.value});u.play(),u.finished.then(f)}),c=H(()=>(m,f)=>{if(!a)return f();const u=a(m,{duration:o.value});u.play(),u.finished.then(f)});return{onEnter:s,onLeave:c}},HS=P({props:{animation:{type:String,default:"fade"},duration:{type:Number,default:500}},setup(e){const{onEnter:l,onLeave:a}=MS(e);return{onEnter:l,onLeave:a}},render(){return t(vn,{onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,l;return[(l=(e=this.$slots).default)==null?void 0:l.call(e)]}})}}),Dd=P({props:{tag:String,animation:{type:String,default:"fade"},enterKeyframes:{type:Function,default:()=>({})},leaveKeyframes:{type:Function,default:()=>({})}},setup(e){const[l,a]=Ld(e.animation),o=H(()=>(c,m)=>{if(!l)return m();const f=l(c,{duration:.5,keyframesOverride:e.enterKeyframes(c)});f.play(),f.finished.then(m)}),s=H(()=>(c,m)=>{if(!a)return m();const f=a(c,{duration:.5,keyframesOverride:e.leaveKeyframes(c)});f.play(),f.finished.then(m)});return{onEnter:o,onLeave:s}},render(){return t(Ac,{tag:this.tag,onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,l;return[(l=(e=this.$slots).default)==null?void 0:l.call(e)]}})}}),NS={install(e){e.component("SuiTransition",HS),e.component("SuiTransitionGroup",Dd)}},OS=Object.freeze(Object.defineProperty({__proto__:null,Accordion:l_,Advertisement:n_,Breadcrumb:o_,Button:h_,Calendar:I_,Card:M_,Checkbox:H_,Comment:K_,Container:X_,Dimmer:Z_,Divider:tb,Dropdown:fb,Embed:hb,Emoji:_b,Feed:Bb,Flag:Tb,Form:Db,Grid:Ib,Header:Eb,Icon:s_,Image:ub,Input:Rb,Item:qb,Label:rb,List:Wb,Menu:Qb,Message:tv,Modal:uv,Popup:mv,Progress:gv,Rail:_v,Rating:Sv,Reveal:yv,Search:Cv,Segment:xv,Sidebar:$v,Slider:Tv,Statistic:Iv,Step:Mv,Tab:Nv,Table:Wv,Transition:NS},Symbol.toStringTag,{value:"Module"})),Pe=P({props:{active:Boolean,color:String,disabled:Boolean,fast:Boolean,indeterminate:Boolean,inline:[Boolean,String],inverted:Boolean,size:String,slow:Boolean,text:Boolean},setup(e,{slots:l}){return{computedClass:H(()=>{var a;return te("ui",e.color,e.size,y(e.active,"active"),y(e.disabled,"disabled"),y(e.fast,"fast"),y(e.indeterminate,"indeterminate"),y(e.inverted,"inverted"),y(e.slow,"slow"),y(e.text||!!((a=l.default)!=null&&a.call(l)),"text"),Ie(e.inline,"inline"),"loader")})}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Gn=P({name:"SuiToastActions",props:{aligned:String,basic:Boolean,vertical:Boolean,...Ss()},setup(e,{slots:l}){const a=H(()=>te("actions",e.basic&&"basic",e.aligned,e.vertical&&"vertical"));return()=>{var o;return e.attached?t(_t,{attached:e.attached,vertical:e.vertical},{default:()=>{var s;return[(s=l.default)==null?void 0:s.call(l)]}}):t("div",{class:a.value},[(o=l.default)==null?void 0:o.call(l)])}}}),qS=P({name:"SuiToastBox",props:{unclickable:Boolean,verticalAttached:Boolean},setup(e,{slots:l}){const a=H(()=>te("floating toast-box compact",e.unclickable&&"unclickable"));return()=>{var o,s;return e.verticalAttached?t("div",{class:a.value,style:"display: block !important;"},[t("div",{class:"vertical attached compact right"},[(o=l.default)==null?void 0:o.call(l)])]):t("div",{class:a.value,style:"display: block !important;"},[(s=l.default)==null?void 0:s.call(l)])}}});function jn(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!xt(e)}const GS=P({name:"SuiToast",emits:["click","close"],props:{id:Number,displayTime:{type:Number,default:3e3},type:String,title:String,message:{type:String,required:!0},centered:Boolean,messageStyle:Boolean,actions:Function,actionsProps:Object,showProgress:{type:String},showProgressColor:String,showProgressUp:Boolean,inverted:Boolean,...ys()},setup(e,{emit:l}){const{colorClasses:a}=ws(e),o=H(()=>{var m,f,u,d,g;return te(e.centered&&"center aligned",e.type||"neutral",a.value,"ui",e.messageStyle?"message":"toast",e.actions&&!((m=e.actionsProps)!=null&&m.vertical)&&"actions",((f=e.actionsProps)==null?void 0:f.attached)==="top"&&"bottom attached",((u=e.actionsProps)==null?void 0:u.attached)==="bottom"&&"top attached",((d=e.actionsProps)==null?void 0:d.attached)==="left"&&"left attached",((g=e.actionsProps)==null?void 0:g.vertical)&&"vertical","compact")}),s=j(e.showProgressUp?0:100),c=()=>{const m=e.displayTime/100;setTimeout(()=>{const f=setInterval(()=>{if(e.showProgressUp){s.value>=100&&clearInterval(f),s.value+=1;return}s.value<=0&&clearInterval(f),s.value-=1},m)},500)};return xi(()=>e.showProgress&&c()),setTimeout(()=>e.displayTime>0&&l("close"),e.displayTime+750),{classes:o,progress:s}},render(){var e;let l,a,o;return t(qS,{unclickable:!!this.actions,verticalAttached:((e=this.actionsProps)==null?void 0:e.attached)==="left"},{default:()=>{var s,c,m,f;return[this.showProgress==="top"&&t(Ao,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null),this.actions&&(((s=this.actionsProps)==null?void 0:s.attached)==="top"||((c=this.actionsProps)==null?void 0:c.attached)==="left")&&t(Gn,this.actionsProps,jn(l=this.actions({close:()=>this.$emit("close")}))?l:{default:()=>[l]}),t("div",{role:"alert",class:this.classes,onClick:()=>!this.actions&&this.$emit("click")},[t("div",{class:"content"},[this.title&&t("div",{class:"ui header"},[this.title]),t("div",{class:"message"},[this.message])]),this.actions&&!((m=this.actionsProps)!=null&&m.attached)&&t(Gn,this.actionsProps,jn(a=this.actions({close:()=>this.$emit("close")}))?a:{default:()=>[a]})]),this.actions&&((f=this.actionsProps)==null?void 0:f.attached)==="bottom"&&t(Gn,this.actionsProps,jn(o=this.actions({close:()=>this.$emit("close")}))?o:{default:()=>[o]}),this.showProgress==="bottom"&&t(Ao,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null)]}})}}),jS=["top right","top center","top left","bottom right","bottom center","bottom left","centered"],US=({defaultValue:e}={})=>({position:{type:String,validator:l=>jS.includes(l),default:e}}),YS=e=>({positionClasses:H(()=>e.position||"")});function JS(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!xt(e)}const WS=P({name:"SuiToastContainer",props:{horizontal:Boolean,...Ss(),...US({defaultValue:"top right"})},setup(e){const{items:l,remove:a}=Id(),{attachedClasses:o}=fd(e),{positionClasses:s}=YS(e);return{classes:H(()=>te(o.value||s.value,"ui toast-container",e.horizontal&&"horizontal")),items:l,remove:a,enterKeyframes:c=>{if(!(c instanceof HTMLElement))return{};const m=[0,`${c.offsetHeight}px`],f=[0,`${parseInt(getComputedStyle(c).marginBottom,10)}px`];return{height:m,marginBottom:f}},leaveKeyframes:c=>{if(!(c instanceof HTMLElement))return{};const m=[`${c.offsetWidth}px`,0],f=[`${c.offsetHeight}px`,0],u=e.horizontal?{width:m}:{height:f},d=[`${parseInt(getComputedStyle(c).marginBottom,10)}px`,0];return{...u,marginBottom:d}}}},render(){let e;return t(hn,{to:"body"},{default:()=>[t("div",{class:this.classes},[t(Dd,{animation:"scale",enterKeyframes:this.enterKeyframes,leaveKeyframes:this.leaveKeyframes},JS(e=this.items.filter(({position:l,attached:a})=>this.attached?a===this.attached:l===this.position).filter(({horizontal:l})=>this.horizontal===!!l).map(({id:l,...a})=>t(GS,el({key:l},a,{onClick:()=>this.remove(l),onClose:()=>this.remove(l)}),null)))?e:{default:()=>[e]})])]})}}),KS=j(1),Vl=j([]),Id=()=>({items:Vl,add:e=>{e.position=e.position||"top right",Vl.value=[...Vl.value,{id:KS.value++,...e}]},remove:e=>{Vl.value=Vl.value.filter(l=>l.id!==e)}}),ut=()=>{var e;const l=(e=Xt())==null?void 0:e.appContext,{add:a}=Id();return{toast:o=>{const{position:s,attached:c,horizontal:m}=o;ZS({position:s,attached:c,horizontal:m})||QS(l,{position:s,attached:c,horizontal:m}),a(o)}}},XS=(e,{appContext:l,element:a}={})=>{const o=a||document.createElement("div");return l&&(e.appContext=l),Ka(e,o),{vNode:e,el:o}},QS=(e,{position:l="top right",attached:a,horizontal:o=!1}={})=>{const s=X(WS,{position:l,attached:a,horizontal:o}),{el:c}=XS(s,{appContext:e});return{vNode:s,el:c}},ZS=({position:e="top right",attached:l,horizontal:a})=>{const o=l?`.ui.toast-container.${l}.attached`:`.ui.toast-container.${e.split(" ").join(".")}${a?".horizontal":":not(.horizontal)"}`;return document.querySelector(o)};function ey(e){Object.values({...OS}).map(l=>e.use(l))}const ty={install:ey},iy=Object.assign({inheritAttrs:!1},{__name:"DocSectionText",props:["label","onClick"],setup(e){const l=Yc(),a=H(()=>{const s=l.currentRoute.value.path;return s.lastIndexOf("/")===s.length-1?s.slice(0,-1):s}),o=s=>{s.preventDefault();const m=s.target.parentElement.getAttribute("href"),f=m.slice(m.indexOf("#")+1),u=document.getElementById(f);u&&u.scrollIntoView({behavior:"smooth"})};return(s,c)=>{const m=C("SuiHeader"),f=C("SuiGridColumn"),u=C("SuiGridRow");return A(),be(Ae,null,[t(u,null,{default:i(()=>[t(f,null,{default:i(()=>[t(m,{as:"h3",class:"doc-section-text"},{default:i(()=>[n(Te(e.label)+" ",1),t(r(ms),{to:`${a.value}#${s.$attrs.id}`,target:"_self",onClick:o},{default:i(()=>[t(r(W),{name:"linkify",color:"grey",size:"small",link:"",fitted:""})]),_:1},8,["to"])]),_:1})]),_:1}),t(f,{textAlign:"right"},{default:i(()=>[t(r(W),{name:"code",color:"grey",link:"",onClick:e.onClick},null,8,["onClick"])]),_:1})]),_:1}),S("p",null,[Gi(s.$slots,"default",{},void 0,!0)])],64)}}}),ly=Re(iy,[["__scopeId","data-v-a2b78897"]]),ay={class:"inner"},ny={__name:"DocSectionCode",props:["code","hideCode"],setup(e){return(l,a)=>{const o=C("SuiGridColumn"),s=C("SuiGridRow");return A(),B(s,null,{default:i(()=>[t(o,{width:16},{default:i(()=>[Gi(l.$slots,"default",{},void 0,!0)]),_:3}),t(o,{width:16,id:"accordion","aria-hidden":e.hideCode},{default:i(()=>[S("div",ay,[Si((A(),be("pre",null,[S("code",null,Te(e.code)+`
`,1)])),[[r(Fa)]])])]),_:1},8,["aria-hidden"])]),_:3})}}},oy=Re(ny,[["__scopeId","data-v-965e7ddc"]]),I={__name:"DocSection",props:["label","code"],setup(e){const l=j(!0),a=()=>l.value=!l.value;return(o,s)=>{const c=C("SuiGrid");return A(),be("section",null,[t(c,{columns:2},{default:i(()=>[t(ly,el({label:e.label,"on-click":a},o.$attrs),{default:i(()=>[Gi(o.$slots,"description")]),_:3},16,["label"]),t(oy,{code:e.code,"hide-code":l.value},{default:i(()=>[Gi(o.$slots,"example")]),_:3},8,["code","hide-code"])]),_:3})])}}},sy=`<template>
  <SuiButton @click="onClick">{{ label }}</SuiButton>
</template>

<script setup>
import { ref } from 'vue'
import { SuiButton } from 'vue-fomantic-ui'

const label = ref('Follow')
const onClick = () => label.value = label.value === 'Follow' ? 'Following' : 'Follow'
<\/script>`,ry={__name:"ButtonDoc",setup(e){const l=j("Follow"),a=()=>l.value=l.value==="Follow"?"Following":"Follow";return(o,s)=>(A(),B(I,{label:"Button",code:sy},{description:i(()=>[n(" A standard button ")]),example:i(()=>[t(r(z),{onClick:a},{default:i(()=>[n(Te(l.value),1)]),_:1})]),_:1}))}},uy=`<template>
  <SuiButton primary>Save</SuiButton>
  <SuiButton secondary>Okay</SuiButton>
  <SuiButton>Cancel</SuiButton>
</template>`,cy={__name:"EmphasisDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Emphasis",code:uy},{description:i(()=>[n(" A button can be formatted to show different levels of emphasis ")]),example:i(()=>[t(r(z),{primary:""},{default:i(()=>[n("Save")]),_:1}),t(r(z),{secondary:""},{default:i(()=>[n("Okay")]),_:1}),t(r(z),null,{default:i(()=>[n("Cancel")]),_:1})]),_:1}))}},dy=`<template>
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
</template>`,my={__name:"AnimatedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Animated",code:dy},{description:i(()=>[n(" A button can animate to show hidden content ")]),example:i(()=>[t(r(z),{animated:""},{default:i(()=>[t(r(Ii),{visible:""},{default:i(()=>[n("Next")]),_:1}),t(r(Ii),{hidden:""},{default:i(()=>[t(r(W),{name:"arrow right"})]),_:1})]),_:1}),t(r(z),{animated:"vertical"},{default:i(()=>[t(r(Ii),{visible:""},{default:i(()=>[t(r(W),{name:"shop"})]),_:1}),t(r(Ii),{hidden:""},{default:i(()=>[n("Shop")]),_:1})]),_:1}),t(r(z),{animated:"fade"},{default:i(()=>[t(r(Ii),{visible:""},{default:i(()=>[n(" Sign-up for a Pro account ")]),_:1}),t(r(Ii),{hidden:""},{default:i(()=>[n("$12.99 a month")]),_:1})]),_:1})]),_:1}))}},py=`<template>
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
</template>`,fy={__name:"LabeledDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Labeled",code:py},{description:i(()=>[n(" A button can appear alongside a label ")]),example:i(()=>[t(r(z),{labeled:"right",as:"div"},{default:i(()=>[t(r(z),{icon:"heart",content:" Like"}),t(r(O),{basic:""},{default:i(()=>[n("2,048")]),_:1})]),_:1}),t(r(z),{labeled:"left",as:"div"},{default:i(()=>[t(r(O),{basic:"",pointing:"right"},{default:i(()=>[n("2,048")]),_:1}),t(r(z),{icon:"heart",content:" Like"})]),_:1}),t(r(z),{labeled:"left",as:"div"},{default:i(()=>[t(r(O),{basic:""},{default:i(()=>[n("1,048")]),_:1}),t(r(z),{icon:"fork"})]),_:1})]),_:1}))}},gy=`<template>
  <SuiButton icon="cloud" />
</template>`,hy={__name:"IconDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Icon",code:gy},{description:i(()=>[n(" A button can have only an icon ")]),example:i(()=>[t(r(z),{icon:"cloud"})]),_:1}))}},_y=`<template>
  <SuiButton labeled icon="pause" content="Pause" />
  <SuiButton labeled="right" icon="right arrow" content="Next" />
  <SuiButton labeled icon>
    <SuiIcon loading name="spinner" />
    Loading
  </SuiButton>
</template>`,by={__name:"LabeledIconDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Labeled Icon",code:_y},{description:i(()=>[n(" A button can use an icon as a label ")]),example:i(()=>[t(r(z),{labeled:"",icon:"pause",content:"Pause"}),t(r(z),{labeled:"right",icon:"right arrow",content:"Next"}),t(r(z),{labeled:"",icon:""},{default:i(()=>[t(r(W),{loading:"",name:"spinner"}),n(" Loading ")]),_:1})]),_:1}))}},vy=`<template>
  <SuiButton basic primary>Primary</SuiButton>
  <SuiButton basic secondary>Secondary</SuiButton>
  <SuiButton basic positive>Positive</SuiButton>
  <SuiButton basic negative>Negative</SuiButton>
</template>`,Sy={__name:"BasicDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Basic",code:vy},{description:i(()=>[n(" A basic button is less pronounced ")]),example:i(()=>[t(r(z),{basic:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(r(z),{basic:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(r(z),{basic:"",positive:""},{default:i(()=>[n("Positive")]),_:1}),t(r(z),{basic:"",negative:""},{default:i(()=>[n("Negative")]),_:1})]),_:1}))}},yy=`<template>
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
</template>`,wy={__name:"TertiaryDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Tertiary",code:yy},{description:i(()=>[n(" An none bordered less important button ")]),example:i(()=>[t(r(z),{tertiary:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(r(z),{tertiary:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(r(z),{tertiary:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(r(z),{tertiary:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(r(z),{tertiary:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(r(z),{tertiary:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(r(z),{tertiary:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(r(z),{tertiary:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(r(z),{tertiary:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(r(z),{tertiary:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(r(z),{tertiary:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(r(z),{tertiary:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(r(z),{tertiary:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(r(z),{tertiary:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(r(z),{tertiary:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},Cy=`<template>
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
</template>`,Ay={__name:"InvertedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Inverted",code:Cy},{description:i(()=>[n(" A button can be formatted to appear on dark backgrounds ")]),example:i(()=>[t(r(N),{inverted:""},{default:i(()=>[t(r(z),{inverted:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(r(z),{inverted:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(r(z),{inverted:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(r(z),{inverted:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(r(z),{inverted:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(r(z),{inverted:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(r(z),{inverted:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(r(z),{inverted:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(r(z),{inverted:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(r(z),{inverted:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(r(z),{inverted:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(r(z),{inverted:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(r(z),{inverted:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(r(z),{inverted:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(r(z),{inverted:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1})]),_:1}))}},xy=`<template>
  <SuiButtonGroup>
    <SuiButton content="One" />
    <SuiButton content="Two" />
    <SuiButton content="Three" />
  </SuiButtonGroup>
</template>`,ky={__name:"ButtonsDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Buttons",code:xy},{description:i(()=>[n(" Buttons can exist together as a group ")]),example:i(()=>[t(r(_t),null,{default:i(()=>[t(r(z),{content:"One"}),t(r(z),{content:"Two"}),t(r(z),{content:"Three"})]),_:1})]),_:1}))}},$y=`<template>
  <SuiButtonGroup icon>
    <SuiButton icon="align left" />
    <SuiButton icon="align center" />
    <SuiButton icon="align right" />
    <SuiButton icon="align justify" />
  </SuiButtonGroup>
</template>`,By={__name:"IconButtonsDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Icon Buttons",code:$y},{description:i(()=>[n(" Button groups can show groups of icons ")]),example:i(()=>[t(r(_t),{icon:""},{default:i(()=>[t(r(z),{icon:"align left"}),t(r(z),{icon:"align center"}),t(r(z),{icon:"align right"}),t(r(z),{icon:"align justify"})]),_:1})]),_:1}))}},Ty=S("div",{class:"or"},null,-1),Ly=S("div",{class:"or","data-text":"ou"},null,-1),Dy=`<template>
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
</template>`,Iy={__name:"ConditionalsDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Conditionals",code:Dy},{description:i(()=>[n(" Button groups can contain conditionals ")]),example:i(()=>[t(r(_t),null,{default:i(()=>[t(r(z),{content:"Cancel"}),Ty,t(r(z),{content:"Save",positive:""})]),_:1}),t(r(_t),null,{default:i(()=>[t(r(z),{content:"un"}),Ly,t(r(z),{content:"deux",positive:""})]),_:1})]),_:1}))}},Ey=`<template>
  <SuiButton active icon="user" content=" Follow" />
</template>`,Ry={__name:"ActiveDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Active",code:Ey},{description:i(()=>[n(" A button can show it is currently the active user selection ")]),example:i(()=>[t(r(z),{active:"",icon:"user",content:" Follow"})]),_:1}))}},zy=`<template>
  <SuiButton disabled icon="user" content=" Followed" />
</template>`,Py={__name:"DisabledDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Disabled",code:zy},{description:i(()=>[n(" A button can show it is currently unable to be interacted with ")]),example:i(()=>[t(r(z),{disabled:"",icon:"user",content:" Followed"})]),_:1}))}},Fy=`<template>
  <SuiButton loading content="Loading" />
  <SuiButton loading="double" primary content="Loading" />
  <SuiButton loading="elastic" secondary content="Loading" />
</template>`,Vy={__name:"LoadingDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Loading",code:Fy},{description:i(()=>[n(" A button can show a loading indicator ")]),example:i(()=>[t(r(z),{loading:"",content:"Loading"}),t(r(z),{loading:"double",primary:"",content:"Loading"}),t(r(z),{loading:"elastic",secondary:"",content:"Loading"})]),_:1}))}},My=`<template>
  <SuiButton facebook icon="facebook" content=" Facebook" />
  <SuiButton twitter icon="twitter" content=" Twitter" />
  <SuiButton vk icon="vk" content="VK" />
  <SuiButton linkedin icon="linkedin" content=" LinkedIn" />
  <SuiButton instagram icon="instagram" content=" Instagram" />
  <SuiButton youtube icon="youtube" content=" YouTube" />
  <SuiButton whatsapp icon="whatsapp" content=" WhatsApp" />
  <SuiButton telegram icon="telegram" content=" Telegram" />
</template>`,Hy={__name:"SocialDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Social",code:My},{description:i(()=>[n(" A button can be formatted to link to a social website ")]),example:i(()=>[t(r(z),{facebook:"",icon:"facebook",content:" Facebook"}),t(r(z),{twitter:"",icon:"twitter",content:" Twitter"}),t(r(z),{vk:"",icon:"vk",content:"VK"}),t(r(z),{linkedin:"",icon:"linkedin",content:" LinkedIn"}),t(r(z),{instagram:"",icon:"instagram",content:" Instagram"}),t(r(z),{youtube:"",icon:"youtube",content:" YouTube"}),t(r(z),{whatsapp:"",icon:"whatsapp",content:" WhatsApp"}),t(r(z),{telegram:"",icon:"telegram",content:" Telegram"})]),_:1}))}},Ny=`<template>
  <SuiButton size="mini" content="Mini" />
  <SuiButton size="tiny" content="Tiny" />
  <SuiButton size="small" content="Small" />
  <SuiButton size="medium" content="Medium" />
  <SuiButton size="large" content="Large" />
  <SuiButton size="big" content="Big" />
  <SuiButton size="huge" content="Huge" />
  <SuiButton size="massive" content="Massive" />
</template>`,Oy={__name:"SizeDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Size",code:Ny},{description:i(()=>[n(" A button can have different sizes ")]),example:i(()=>[t(r(z),{size:"mini",content:"Mini"}),t(r(z),{size:"tiny",content:"Tiny"}),t(r(z),{size:"small",content:"Small"}),t(r(z),{size:"medium",content:"Medium"}),t(r(z),{size:"large",content:"Large"}),t(r(z),{size:"big",content:"Big"}),t(r(z),{size:"huge",content:"Huge"}),t(r(z),{size:"massive",content:"Massive"})]),_:1}))}},qy=`<template>
  <SuiButton floated="left" content="Left Floated" />
  <SuiButton floated="right" content="Right Floated" />
</template>`,Gy={__name:"FloatedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Floated",code:qy},{description:i(()=>[n(" A button can be aligned to the left or right of its container ")]),example:i(()=>[t(r(z),{floated:"left",content:"Left Floated"}),t(r(z),{floated:"right",content:"Right Floated"})]),_:1}))}},jy=`<template>
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
</template>`,Uy={__name:"ColoredDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Colored",code:jy},{description:i(()=>[n(" A button can have different colors ")]),example:i(()=>[t(r(z),{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(r(z),{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(r(z),{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(r(z),{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(r(z),{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(r(z),{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(r(z),{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(r(z),{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(r(z),{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(r(z),{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(r(z),{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(r(z),{color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(r(z),{color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},Yy=`<template>
  <SuiButton compact content="Hold" />
  <SuiButton compact icon="pause" />
  <SuiButton compact labeled icon="pause" content="Pause" />
</template>`,Jy={__name:"CompactDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Compact",code:Yy},{description:i(()=>[n(" A button can reduce its padding to fit into tighter spaces ")]),example:i(()=>[t(r(z),{compact:"",content:"Hold"}),t(r(z),{compact:"",icon:"pause"}),t(r(z),{compact:"",labeled:"",icon:"pause",content:"Pause"})]),_:1}))}},Wy=`<template>
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
<\/script>`,Ky={__name:"ToggleDoc",setup(e){const l=j(!1);return(a,o)=>(A(),B(I,{label:"Toggle",code:Wy},{description:i(()=>[n(" A button can be formatted to toggle on and off ")]),example:i(()=>[t(r(z),{toggle:"",active:l.value,onClick:()=>l.value=!l.value,content:l.value?"Voted":"Vote",style:{"min-width":"200px"}},null,8,["active","onClick","content"])]),_:1}))}},Xy=`<template>
  <SuiButton positive content="Positive Button" />
</template>`,Qy={__name:"PositiveDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Positive",code:Xy},{description:i(()=>[n(" A button can hint towards a positive consequence ")]),example:i(()=>[t(r(z),{positive:"",content:"Positive Button"})]),_:1}))}},Zy=`<template>
  <SuiButton negative content="Negative Button" />
</template>`,ew={__name:"NegativeDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Negative",code:Zy},{description:i(()=>[n(" A button can hint towards a negative consequence ")]),example:i(()=>[t(r(z),{negative:"",content:"Negative Button"})]),_:1}))}},tw=`<template>
  <SuiButton fluid content="Fits container" />
</template>`,iw={__name:"FluidDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Fluid",code:tw},{description:i(()=>[n(" A button can take the width of its container ")]),example:i(()=>[t(r(z),{fluid:"",content:"Fits container"})]),_:1}))}},lw=`<template>
  <SuiButton circular icon="settings" />
</template>`,aw={__name:"CircularDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Circular",code:lw},{description:i(()=>[n(" A button can be circular ")]),example:i(()=>[t(r(z),{circular:"",icon:"settings"})]),_:1}))}},nw=S("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?",-1),ow=`<template>
  <SuiButton attached="top" content="Top" />
  <SuiSegment>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?</p>
  </SuiSegment>
  <SuiButton attached="bottom" content="Bottom" />
</template>`,sw={__name:"VerticallyAttachedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Vertically Attached",code:ow},{description:i(()=>[n(" A button can be attached to the top or bottom of other content ")]),example:i(()=>[t(r(z),{attached:"top",content:"Top"}),t(r(N),{attached:""},{default:i(()=>[nw]),_:1}),t(r(z),{attached:"bottom",content:"Bottom"})]),_:1}))}},rw=`<template>
  <SuiButton attached="left" content="Left" />
  <SuiButton attached="right" content="Right" />
</template>`,uw={__name:"HorizontallyAttachedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Horizontally Attached",code:rw},{description:i(()=>[n(" A button can be attached to the left or right of other content ")]),example:i(()=>[t(r(z),{attached:"left",content:"Left"}),t(r(z),{attached:"right",content:"Right"})]),_:1}))}},cw=`<template>
  <SuiButtonGroup vertical>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,dw={__name:"VerticalButtonsDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Vertical Buttons",code:cw},{description:i(()=>[n(" Groups can be formatted to appear vertically ")]),example:i(()=>[t(r(_t),{vertical:""},{default:i(()=>[t(r(z),null,{default:i(()=>[n("Feed")]),_:1}),t(r(z),null,{default:i(()=>[n("Messages")]),_:1}),t(r(z),null,{default:i(()=>[n("Events")]),_:1}),t(r(z),null,{default:i(()=>[n("Photos")]),_:1})]),_:1})]),_:1}))}},mw=`<template>
  <SuiButtonGroup stackable>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,pw={__name:"StackableButtonsDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Stackable Buttons",code:mw},{description:i(()=>[n(" Horizontal groups can automatically be stacked on mobile devices ")]),example:i(()=>[t(r(_t),{stackable:""},{default:i(()=>[t(r(z),null,{default:i(()=>[n("Feed")]),_:1}),t(r(z),null,{default:i(()=>[n("Messages")]),_:1}),t(r(z),null,{default:i(()=>[n("Events")]),_:1}),t(r(z),null,{default:i(()=>[n("Photos")]),_:1})]),_:1})]),_:1}))}},fw=`<template>
  <SuiButtonGroup vertical labeled icon>
    <SuiButton icon="pause" content="Pause" />
    <SuiButton icon="play" content="Play" />
    <SuiButton icon="shuffle" content="Shuffle" />
  </SuiButtonGroup>
</template>`,gw={__name:"LabeledIconButtonsDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Icon Buttons",code:fw},{description:i(()=>[n(" Groups can be formatted as labeled icons ")]),example:i(()=>[t(r(_t),{vertical:"",labeled:"",icon:""},{default:i(()=>[t(r(z),{icon:"pause",content:"Pause"}),t(r(z),{icon:"play",content:"Play"}),t(r(z),{icon:"shuffle",content:"Shuffle"})]),_:1})]),_:1}))}},hw=`<template>
  <SuiButtonGroup>
    <SuiButton labeled icon="left chevron" content="Back" />
    <SuiButton icon="stop" content="Stop" />
    <SuiButton icon labeled="right">
      <SuiIcon name="right chevron" />
      Forward
    </SuiButton>
  </SuiButtonGroup>
</template>`,_w={__name:"MixedGroupDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Mixed Group",code:hw},{description:i(()=>[n(" Button groups can show groups of icons ")]),example:i(()=>[t(r(_t),null,{default:i(()=>[t(r(z),{labeled:"",icon:"left chevron",content:"Back"}),t(r(z),{icon:"stop",content:"Stop"}),t(r(z),{icon:"",labeled:"right"},{default:i(()=>[t(r(W),{name:"right chevron"}),n(" Forward ")]),_:1})]),_:1})]),_:1}))}},bw=`<template>
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
</template>`,vw={__name:"EqualWidthDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Equal Width",code:bw},{description:i(()=>[n(" Groups can have their widths divided evenly ")]),example:i(()=>[t(r(_t),{widths:5},{default:i(()=>[t(r(z),null,{default:i(()=>[n("Overview")]),_:1}),t(r(z),null,{default:i(()=>[n("Specs")]),_:1}),t(r(z),null,{default:i(()=>[n("Warranty")]),_:1}),t(r(z),null,{default:i(()=>[n("Reviews")]),_:1}),t(r(z),null,{default:i(()=>[n("Support")]),_:1})]),_:1}),t(r(_t),{widths:3},{default:i(()=>[t(r(z),null,{default:i(()=>[n("Overview")]),_:1}),t(r(z),null,{default:i(()=>[n("Specs")]),_:1}),t(r(z),null,{default:i(()=>[n("Support")]),_:1})]),_:1})]),_:1}))}},Sw=`<template>
  <SuiButtonGroup color="blue">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,yw={__name:"ColoredButtonsDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Colored Buttons",code:Sw},{description:i(()=>[n(" Groups can have a shared color ")]),example:i(()=>[t(r(_t),{color:"blue"},{default:i(()=>[t(r(z),null,{default:i(()=>[n("One")]),_:1}),t(r(z),null,{default:i(()=>[n("Two")]),_:1}),t(r(z),null,{default:i(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},ww=`<template>
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
</template>`,Cw={__name:"BasicButtonsDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Basic Buttons",code:ww},{description:i(()=>[n(" A button group can be less pronounced ")]),example:i(()=>[t(r(_t),{basic:""},{default:i(()=>[t(r(z),null,{default:i(()=>[n("One")]),_:1}),t(r(z),null,{default:i(()=>[n("Two")]),_:1}),t(r(z),null,{default:i(()=>[n("Three")]),_:1})]),_:1}),t(r(_t),null,{default:i(()=>[t(r(z),{basic:"",color:"red"},{default:i(()=>[n("One")]),_:1}),t(r(z),{basic:"",color:"blue"},{default:i(()=>[n("Two")]),_:1}),t(r(z),{basic:"",color:"green"},{default:i(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},Aw=`<template>
  <SuiButtonGroup size="large">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,xw={__name:"GroupSizesDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Group Sizes",code:Aw},{description:i(()=>[n(" Groups can have a shared color ")]),example:i(()=>[t(r(_t),{size:"large"},{default:i(()=>[t(r(z),null,{default:i(()=>[n("One")]),_:1}),t(r(z),null,{default:i(()=>[n("Two")]),_:1}),t(r(z),null,{default:i(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},kw={__name:"Button",setup(e){const l=[{id:"button",label:"Button",category:"Types",component:ry},{id:"emphasis",label:"Emphasis",category:"Types",component:cy},{id:"animated",label:"Animated",category:"Types",component:my},{id:"labeled",label:"Labeled",category:"Types",component:fy},{id:"icon",label:"Icon",category:"Types",component:hy},{id:"labeled-icon",label:"Labeled Icon",category:"Types",component:by},{id:"basic",label:"Basic",category:"Types",component:Sy},{id:"tertiary",label:"Tertiary",category:"Types",component:wy},{id:"inverted",label:"Inverted",category:"Types",component:Ay},{id:"buttons",label:"Buttons",category:"Groups",component:ky},{id:"icon-buttons",label:"Icon Buttons",category:"Groups",component:By},{id:"content",label:"Content",category:"Content",component:Iy},{id:"active",label:"Active",category:"States",component:Ry},{id:"disabled",label:"Disabled",category:"States",component:Py},{id:"loading",label:"Loading",category:"States",component:Vy},{id:"social",label:"Social",category:"Variations",component:Hy},{id:"size",label:"Size",category:"Variations",component:Oy},{id:"floated",label:"Floated",category:"Variations",component:Gy},{id:"colored",label:"Colored",category:"Variations",component:Uy},{id:"compact",label:"Compact",category:"Variations",component:Jy},{id:"toggle",label:"Toggle",category:"Variations",component:Ky},{id:"positive",label:"Positive",category:"Variations",component:Qy},{id:"negative",label:"Negative",category:"Variations",component:ew},{id:"fluid",label:"Fluid",category:"Variations",component:iw},{id:"circular",label:"Circular",category:"Variations",component:aw},{id:"vertically-attached",label:"Vertically Attached",category:"Variations",component:sw},{id:"horizontally-attached",label:"Horizontally Attached",category:"Variations",component:uw},{id:"vertical-buttons",label:"Vertical Buttons",category:"Group Variations",component:dw},{id:"stackable-buttons",label:"Stackable Buttons",category:"Group Variations",component:pw},{id:"labeled-icon-buttons",label:"Labeled Icon Buttons",category:"Group Variations",component:gw},{id:"mixed-group",label:"Mixed Group",category:"Group Variations",component:_w},{id:"equal-width",label:"Equal Width",category:"Group Variations",component:vw},{id:"colored-buttons",label:"Colored Buttons",category:"Group Variations",component:yw},{id:"basic-buttons",label:"Basic Buttons",category:"Group Variations",component:Cw},{id:"group-sizes",label:"Group Sizes",category:"Group Variations",component:xw}];return(a,o)=>(A(),B(rt,{title:"Button",description:"A button indicates a possible user action","component-docs":l}))}},$w=S("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Bw=`<template>
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
</template>`,Tw={__name:"ContainerDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Container",code:Bw},{description:i(()=>[n(" A standard container ")]),example:i(()=>[t(r(Ni),null,{default:i(()=>[$w]),_:1})]),_:1}))}},Lw=S("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Dw=`<template>
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
</template>`,Iw={__name:"TextContainerDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Text Container",code:Dw},{description:i(()=>[n(" A container can reduce its maximum width to more naturally accommodate a single column of text ")]),example:i(()=>[t(r(Ni),{text:""},{default:i(()=>[t(r(fe),{as:"h2"},{default:i(()=>[n("Header")]),_:1}),Lw]),_:1})]),_:1}))}},Ew=`<template>
  <SuiContainer textAlign="left">Left Aligned</SuiContainer>
  <SuiContainer textAlign="center">Center Aligned</SuiContainer>
  <SuiContainer textAlign="right">Right Aligned</SuiContainer>
</template>`,Rw={__name:"TextAlignmentDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Text Alignment",code:Ew},{description:i(()=>[n(" A container can specify its text alignment ")]),example:i(()=>[t(r(Ni),{textAlign:"left"},{default:i(()=>[n("Left Aligned")]),_:1}),t(r(Ni),{textAlign:"center"},{default:i(()=>[n("Center Aligned")]),_:1}),t(r(Ni),{textAlign:"right"},{default:i(()=>[n("Right Aligned")]),_:1})]),_:1}))}},zw=S("p",null," Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today. ",-1),Pw=`<template>
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
</template>`,Fw={__name:"FluidDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Fluid",code:Pw},{description:i(()=>[n(" A fluid container has no maximum width ")]),example:i(()=>[t(r(Ni),{fluid:""},{default:i(()=>[t(r(fe),{as:"h2"},{default:i(()=>[n("Dogs Roles with Humans")]),_:1}),zw]),_:1})]),_:1}))}},Vw={__name:"Container",setup(e){const l=[{id:"container",label:"Container",category:"Types",component:Tw},{id:"text-container",label:"Text Container",category:"Types",component:Iw},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:Rw},{id:"fluid",label:"Fluid",category:"Variations",component:Fw}];return(a,o)=>(A(),B(rt,{title:"Container",description:"A container limits content to a maximum width","component-docs":l}))}},Mw=`<template>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider />
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,Hw={__name:"DividerDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Divider",code:Mw},{description:i(()=>[n(" A standard divider ")]),example:i(()=>[t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(Fe)),t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},Nw=S("label",null,"Username",-1),Ow=S("input",{type:"text",placeholder:"Username"},null,-1),qw=S("label",null,"Password",-1),Gw=S("input",{type:"password",placeholder:"Password"},null,-1),jw=`<template>
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
</template>`,Uw={__name:"VerticalDividerDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Vertical Divider",code:jw},{description:i(()=>[n(" A divider can segment content vertically. ")]),example:i(()=>[t(r(N),{placeholder:""},{default:i(()=>[t(r(va),{columns:"equal"},{default:i(()=>[t(r(Tt),null,{default:i(()=>[t(r(Nt),null,{default:i(()=>[t(r(it),null,{default:i(()=>[Nw,Ow]),_:1}),t(r(it),null,{default:i(()=>[qw,Gw]),_:1}),t(r(z),{primary:""},{default:i(()=>[n("Login")]),_:1})]),_:1})]),_:1}),t(r(Tt),{textAlign:"middle"},{default:i(()=>[t(r(z),{secondary:"",icon:"signup",content:"Sign Up"})]),_:1})]),_:1}),t(r(Fe),{vertical:""},{default:i(()=>[n("Or")]),_:1})]),_:1})]),_:1}))}},Yw=`<template>
  <SuiSegment basic textAlign="center">
    <SuiInput icon="search" iconPosition="left" action="Search" placeholder="Order #" />
    <SuiDivider horizontal>Or</SuiDivider>
    <SuiButton labeled icon="add" color="green" content="Create New Order" />
  </SuiSegment>
</template>`,Jw={__name:"HorizontalDividerDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Horizontal Divider",code:Yw},{description:i(()=>[n(" A divider can segment content horizontally ")]),example:i(()=>[t(r(N),{basic:"",textAlign:"center"},{default:i(()=>[t(r(Ze),{icon:"search",iconPosition:"left",action:"Search",placeholder:"Order #"}),t(r(Fe),{horizontal:""},{default:i(()=>[n("Or")]),_:1}),t(r(z),{labeled:"",icon:"add",color:"green",content:"Create New Order"})]),_:1})]),_:1}))}},Ww=`<template>
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
</template>`,Kw={__name:"HorizontalAlignmentDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Horizontal Alignment",code:Ww},{description:i(()=>[n(" A horizontal divider can be aligned ")]),example:i(()=>[t(r(Fe),{horizontal:"",textAlign:"left"},{default:i(()=>[t(r(W),{name:"left align"}),n(" Left Aligned ")]),_:1}),t(r(Fe),{horizontal:"",textAlign:"center"},{default:i(()=>[t(r(W),{name:"center align"}),n(" Center Aligned ")]),_:1}),t(r(Fe),{horizontal:"",textAlign:"right"},{default:i(()=>[t(r(W),{name:"right align"}),n(" Right Aligned ")]),_:1})]),_:1}))}},Xw=`<template>
  <SuiSegment inverted>
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider inverted />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider horizontal inverted>Horizontal</SuiDivider>
  </SuiSegment>
</template>`,Qw={__name:"InvertedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Inverted",code:Xw},{description:i(()=>[n(" A divider can have its colors inverted ")]),example:i(()=>[t(r(N),{inverted:""},{default:i(()=>[t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(Fe),{inverted:""}),t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(Fe),{horizontal:"",inverted:""},{default:i(()=>[n("Horizontal")]),_:1})]),_:1})]),_:1}))}},Zw=`<template>
  <SuiSegment>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
    <SuiDivider fitted />
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
  </SuiSegment>
</template>`,eC={__name:"FittedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Inverted",code:Zw},{description:i(()=>[n(" A divider can be fitted, without any space above or below it. ")]),example:i(()=>[t(r(N),null,{default:i(()=>[n(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),t(r(Fe),{fitted:""}),n(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. ")]),_:1})]),_:1}))}},tC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider hidden />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,iC={__name:"HiddenDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Hidden",code:tC},{description:i(()=>[n(" A hidden divider divides content without creating a dividing line ")]),example:i(()=>[t(r(fe),null,{default:i(()=>[n("Section One")]),_:1}),t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(Fe),{hidden:""}),t(r(fe),null,{default:i(()=>[n("Section Two")]),_:1}),t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},lC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider section />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,aC={__name:"SectionDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Section",code:lC},{description:i(()=>[n(" A divider can provide greater margins to divide sections of content ")]),example:i(()=>[t(r(fe),null,{default:i(()=>[n("Section One")]),_:1}),t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(Fe),{section:""}),t(r(fe),null,{default:i(()=>[n("Section Two")]),_:1}),t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},nC=`<template>
  <SuiSegment>
    <SuiHeader floated="right">Section One</SuiHeader>
    <SuiDivider clearing />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,oC={__name:"ClearingDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Clearing",code:nC},{description:i(()=>[n(" A divider can clear the contents above it ")]),example:i(()=>[t(r(N),null,{default:i(()=>[t(r(fe),{floated:"right"},{default:i(()=>[n("Section One")]),_:1}),t(r(Fe),{clearing:""}),t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},sC=`<template>
  <SuiDivider size="mini">MINI</SuiDivider>
  <SuiDivider size="tiny">TINY</SuiDivider>
  <SuiDivider size="small">SMALL</SuiDivider>
  <SuiDivider size="large">LARGE</SuiDivider>
  <SuiDivider size="big">BIG</SuiDivider>
  <SuiDivider size="huge">HUGE</SuiDivider>
  <SuiDivider size="massive">MASSIVE</SuiDivider>
</template>`,rC={__name:"SizeDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Size",code:sC},{description:i(()=>[n(" A divider text can vary in size ")]),example:i(()=>[t(r(Fe),{horizontal:"",size:"mini"},{default:i(()=>[n("MINI")]),_:1}),t(r(Fe),{horizontal:"",size:"tiny"},{default:i(()=>[n("TINY")]),_:1}),t(r(Fe),{horizontal:"",size:"small"},{default:i(()=>[n("SMALL")]),_:1}),t(r(Fe),{horizontal:"",size:"large"},{default:i(()=>[n("LARGE")]),_:1}),t(r(Fe),{horizontal:"",size:"big"},{default:i(()=>[n("BIG")]),_:1}),t(r(Fe),{horizontal:"",size:"huge"},{default:i(()=>[n("HUGE")]),_:1}),t(r(Fe),{horizontal:"",size:"massive"},{default:i(()=>[n("MASSIVE")]),_:1})]),_:1}))}},uC={__name:"Divider",setup(e){const l=[{id:"divider",label:"Divider",category:"Types",component:Hw},{id:"vertical-divider",label:"Vertical Divider",category:"Types",component:Uw},{id:"horizontal-divider",label:"Horizontal Divider",category:"Types",component:Jw},{id:"horizontal-alignment",label:"Horizontal Alignment",category:"Types",component:Kw},{id:"inverted",label:"Inverted",category:"Variations",component:Qw},{id:"fitted",label:"Fitted",category:"Variations",component:eC},{id:"hidden",label:"Hidden",category:"Variations",component:iC},{id:"section",label:"Section",category:"Variations",component:aC},{id:"clearing",label:"Clearing",category:"Variations",component:oC},{id:"size",label:"Size",category:"Variations",component:rC}];return(a,o)=>(A(),B(rt,{title:"Divider",description:"A divider visually segments content into groups","component-docs":l}))}},cC=`<template>
  <SuiEmoji name="anguished" disabled />
</template>`,dC={__name:"DisabledDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Disabled",code:cC},{description:i(()=>[n(" An emoji can show that it is disabled ")]),example:i(()=>[t(r(It),{name:"anguished",disabled:""})]),_:1}))}},mC=`<template>
  <SuiEmoji name="angel" loading />
  <SuiEmoji name="blush" loading />
  <SuiEmoji name="grin" loading />
</template>`,pC={__name:"LoadingDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Loading",code:mC},{description:i(()=>[n(" An emoji can be used as a simple loader ")]),example:i(()=>[t(r(It),{name:"angel",loading:""}),t(r(It),{name:"blush",loading:""}),t(r(It),{name:"grin",loading:""})]),_:1}))}},fC=`<template>
  <SuiEmoji name="relaxed" size="small" />
  <SuiEmoji name="relaxed" size="medium" />
  <SuiEmoji name="relaxed" size="large" />
  <SuiEmoji name="relaxed" size="big" />
</template>`,gC={__name:"SizeDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Size",code:fC},{description:i(()=>[n(" An emoji can vary in size ")]),example:i(()=>[t(r(It),{name:"relaxed",size:"small"}),t(r(It),{name:"relaxed",size:"medium"}),t(r(It),{name:"relaxed",size:"large"}),t(r(It),{name:"relaxed",size:"big"})]),_:1}))}},hC=`<template>
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
</template>`,_C={__name:"AutosizingDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Autosizing",code:hC},{description:i(()=>[n(" If no specific size class is given, all emojis are automatically sized according to the current element font-size ")]),example:i(()=>[t(r(fe),{size:"small"},{default:i(()=>[n(" Within a Header "),t(r(It),{name:"relaxed"})]),_:1}),t(r(z),{as:"div",size:"large"},{default:i(()=>[n(" Within a Button "),t(r(It),{name:"relaxed"})]),_:1}),t(r(O),{size:"massive"},{default:i(()=>[n(" Within a Label "),t(r(It),{name:"relaxed"})]),_:1})]),_:1}))}},bC=`<template>
  <SuiEmoji link name="slight_smile" size="medium" />
</template>`,vC={__name:"LinkDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Link",code:bC},{description:i(()=>[n(" An emoji can be formatted as a link ")]),example:i(()=>[t(r(It),{link:"",name:"slight_smile",size:"medium"})]),_:1}))}},SC={__name:"Emoji",setup(e){const l=[{id:"disabled",label:"Disabled",category:"States",component:dC},{id:"loading",label:"Loading",category:"States",component:pC},{id:"size",label:"Size",category:"Variations",component:gC},{id:"autosizing",label:"Autosizing",category:"Variations",component:_C},{id:"link",label:"Link",category:"Variations",component:vC}];return(a,o)=>(A(),B(rt,{title:"Emoji",description:"An emoji is a glyph used to represent an emotional state","component-docs":l}))}},yC=`<template>
  <SuiFlag name="de" size="small" />
  <SuiFlag name="fr" size="medium" />
  <SuiFlag name="li" size="large" />
  <SuiFlag name="jp" size="big" />
  <SuiFlag name="gb" size="huge" />
  <SuiFlag name="un" size="massive" />
</template>`,wC={__name:"SizeDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Size",code:yC},{description:i(()=>[n(" A flag can vary in size ")]),example:i(()=>[t(r(Jt),{name:"de",size:"small"}),t(r(Jt),{name:"fr",size:"medium"}),t(r(Jt),{name:"li",size:"large"}),t(r(Jt),{name:"jp",size:"big"}),t(r(Jt),{name:"gb",size:"huge"}),t(r(Jt),{name:"un",size:"massive"})]),_:1}))}},CC=`<template>
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
</template>`,AC={__name:"AutosizingDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Autosizing",code:CC},{description:i(()=>[n(" If no specific size class is given, all flags are automatically sized according to the current element font-size ")]),example:i(()=>[t(r(fe),{size:"small"},{default:i(()=>[n(" Within a Header "),t(r(Jt),{name:"us"})]),_:1}),t(r(z),{as:"div",size:"large"},{default:i(()=>[n(" Within a Button "),t(r(Jt),{name:"eu"})]),_:1}),t(r(O),{size:"massive"},{default:i(()=>[n(" Within a Label "),t(r(Jt),{name:"pirate"})]),_:1})]),_:1}))}},xC={__name:"Flag",setup(e){const l=[{id:"size",label:"Size",category:"Types",component:wC},{id:"autosizing",label:"Autosizing",category:"Types",component:AC}];return(a,o)=>(A(),B(rt,{title:"Flag",description:"A flag is used to represent a political state","component-docs":l}))}},kC=`<template>
  <SuiHeader as="h1">First Header</SuiHeader>
  <SuiHeader as="h2">Second Header</SuiHeader>
  <SuiHeader as="h3">Third Header</SuiHeader>
  <SuiHeader as="h4">Fourth Header</SuiHeader>
  <SuiHeader as="h5">Fifth Header</SuiHeader>
</template>`,$C={__name:"PageHeadersDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Page Headers",code:kC},{description:i(()=>[n(" Headers may be oriented to give the hierarchy of a section in the context of the page ")]),example:i(()=>[t(r(fe),{as:"h1"},{default:i(()=>[n("First Header")]),_:1}),t(r(fe),{as:"h2"},{default:i(()=>[n("Second Header")]),_:1}),t(r(fe),{as:"h3"},{default:i(()=>[n("Third Header")]),_:1}),t(r(fe),{as:"h4"},{default:i(()=>[n("Fourth Header")]),_:1}),t(r(fe),{as:"h5"},{default:i(()=>[n("Fifth Header")]),_:1})]),_:1}))}},BC=`<template>
  <SuiHeader size="huge">Huge Header</SuiHeader>
  <SuiHeader size="large">Large Header</SuiHeader>
  <SuiHeader size="medium">Medium Header</SuiHeader>
  <SuiHeader size="small">Small Header</SuiHeader>
  <SuiHeader size="tiny">Tiny Header</SuiHeader>
</template>`,TC={__name:"ContentHeadersDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Content Headers",code:BC},{description:i(()=>[n(" Headers may be oriented to give the importance of a section in the context of the content that surrounds it ")]),example:i(()=>[t(r(fe),{size:"huge"},{default:i(()=>[n("Huge Header")]),_:1}),t(r(fe),{size:"large"},{default:i(()=>[n("Large Header")]),_:1}),t(r(fe),{size:"medium"},{default:i(()=>[n("Medium Header")]),_:1}),t(r(fe),{size:"small"},{default:i(()=>[n("Small Header")]),_:1}),t(r(fe),{size:"tiny"},{default:i(()=>[n("Tiny Header")]),_:1})]),_:1}))}},LC=`<template>
  <SuiHeader icon>
    <SuiIcon name="settings" />
    <SuiHeaderContent>
      Account Settings
    </SuiHeaderContent>
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,DC={__name:"IconHeadersDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Icon Headers",code:LC},{description:i(()=>[n(" A header can be formatted to emphasize an icon ")]),example:i(()=>[t(r(fe),{icon:""},{default:i(()=>[t(r(W),{name:"settings"}),t(r(gs),null,{default:i(()=>[n(" Account Settings ")]),_:1}),t(r(Ji),null,{default:i(()=>[n(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},IC=S("span",null,"$10.99",-1),EC=`<template>
  <SuiHeader sub>Price</SuiHeader>
  <span>$10.99</span>
</template>`,RC={__name:"SubHeadersDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Sub Headers",code:EC},{description:i(()=>[n(" Headers may be formatted to label smaller or de-emphasized content. ")]),example:i(()=>[t(r(fe),{sub:""},{default:i(()=>[n("Price")]),_:1}),IC]),_:1}))}},zC=`<template>
  <SuiHeader as="h2">
    <SuiImage src="/images/avatar/large/steve.jpg" avatar />
    Steve
  </SuiHeader>
</template>`,PC={__name:"ImageDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Image",code:zC},{description:i(()=>[n(" A header may contain an image ")]),example:i(()=>[t(r(fe),{as:"h2"},{default:i(()=>[t(r(oe),{src:"/vue-fomantic-ui/images/avatar/large/steve.jpg",avatar:""}),n(" Steve ")]),_:1})]),_:1}))}},FC=`<template>
  <SuiHeader as="h2">
    <SuiIcon name="plug" />
    <SuiHeaderContent>
      Uptime Guarantee
    </SuiHeaderContent>
  </SuiHeader>
</template>`,VC={__name:"IconDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Icon",code:FC},{description:i(()=>[n(" A header may contain an Icon ")]),example:i(()=>[t(r(fe),{as:"h2"},{default:i(()=>[t(r(W),{name:"plug"}),t(r(gs),null,{default:i(()=>[n(" Uptime Guarantee ")]),_:1})]),_:1})]),_:1}))}},MC=`<template>
  <SuiHeader as="h2">
    Account Settings
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,HC={__name:"SubheaderDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Subheader",code:MC},{description:i(()=>[n(" Headers may contain subheaders ")]),example:i(()=>[t(r(fe),{as:"h2"},{default:i(()=>[n(" Account Settings "),t(r(Ji),null,{default:i(()=>[n(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},NC=`<template>
  <SuiHeader disabled>
    Disabled Header
  </SuiHeader>
</template>`,OC={__name:"DisabledDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Disabled",code:NC},{description:i(()=>[n(" A header can show that it is inactive ")]),example:i(()=>[t(r(fe),{disabled:""},{default:i(()=>[n(" Disabled Header ")]),_:1})]),_:1}))}},qC=`<template>
  <SuiHeader as="h3" dividing>
    Dividing Header
  </SuiHeader>
</template>`,GC={__name:"DividingDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Dividing",code:qC},{description:i(()=>[n(" A header can be formatted to divide itself from the content below it ")]),example:i(()=>[t(r(fe),{as:"h3",dividing:""},{default:i(()=>[n(" Dividing Header ")]),_:1})]),_:1}))}},jC=`<template>
  <SuiHeader as="h3" block>
    Block Header
  </SuiHeader>
</template>`,UC={__name:"BlockDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Block",code:jC},{description:i(()=>[n(" A header can be formatted to appear inside a content block ")]),example:i(()=>[t(r(fe),{as:"h3",block:""},{default:i(()=>[n(" Block Header ")]),_:1})]),_:1}))}},YC=`<template>
  <SuiHeader as="h2" attached="top">
    Attached Header
  </SuiHeader>
  <SuiSegment attached>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </SuiSegment>
</template>`,JC={__name:"AttachedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Attached",code:YC},{description:i(()=>[n(" A header can be attached to other content, like a segment ")]),example:i(()=>[t(r(fe),{as:"h2",attached:"top"},{default:i(()=>[n(" Attached Header ")]),_:1}),t(r(N),{attached:""},{default:i(()=>[n(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),_:1})]),_:1}))}},WC=`<template>
  <SuiSegment clearing>
    <SuiHeader as="h3" floated="right">
      Go Forward
    </SuiHeader>
    <SuiHeader as="h3" floated="left">
      Go Back
    </SuiHeader>
  </SuiSegment>
</template>`,KC={__name:"FloatingDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Floating",code:WC},{description:i(()=>[n(" A header can sit to the left or right of other content ")]),example:i(()=>[t(r(N),{clearing:""},{default:i(()=>[t(r(fe),{as:"h3",floated:"right"},{default:i(()=>[n(" Go Forward ")]),_:1}),t(r(fe),{as:"h3",floated:"left"},{default:i(()=>[n(" Go Back ")]),_:1})]),_:1})]),_:1}))}},XC=`<template>
  <SuiSegment>
    <SuiHeader as="h3" textAlign="right">Float Right</SuiHeader>
    <SuiHeader as="h3" textAlign="left">Float Left</SuiHeader>
    <SuiHeader as="h3" textAlign="justified">
      This text takes up the full width of the container
    </SuiHeader>
    <SuiHeader as="h3" textAlign="center">Centered</SuiHeader>
  </SuiSegment>
</template>`,QC={__name:"TextAlignmentDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Text Alignment",code:XC},{description:i(()=>[n(" A header can have its text aligned to a side ")]),example:i(()=>[t(r(N),null,{default:i(()=>[t(r(fe),{as:"h3",textAlign:"right"},{default:i(()=>[n("Float Right")]),_:1}),t(r(fe),{as:"h3",textAlign:"left"},{default:i(()=>[n("Float Left")]),_:1}),t(r(fe),{as:"h3",textAlign:"justified"},{default:i(()=>[n(" This text takes up the full width of the container ")]),_:1}),t(r(fe),{as:"h3",textAlign:"center"},{default:i(()=>[n("Centered")]),_:1})]),_:1})]),_:1}))}},ZC=`<template>
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
</template>`,eA={__name:"ColoredDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Colored",code:ZC},{description:i(()=>[n(" A header can be formatted with different colors ")]),example:i(()=>[t(r(fe),{as:"h4",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(r(fe),{as:"h4",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(r(fe),{as:"h4",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(r(fe),{as:"h4",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(r(fe),{as:"h4",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(r(fe),{as:"h4",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(r(fe),{as:"h4",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(r(fe),{as:"h4",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(r(fe),{as:"h4",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(r(fe),{as:"h4",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(r(fe),{as:"h4",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(r(fe),{as:"h4",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(r(fe),{as:"h4",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(r(fe),{as:"h4",color:"grey"},{default:i(()=>[n("Grey")]),_:1})]),_:1}))}},tA=`<template>
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
</template>`,iA={__name:"InvertedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Colored",code:tA},{description:i(()=>[n(" A header can have its colors inverted for contrast ")]),example:i(()=>[t(r(N),{inverted:""},{default:i(()=>[t(r(fe),{as:"h4",inverted:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(r(fe),{as:"h4",inverted:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(r(fe),{as:"h4",inverted:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(r(fe),{as:"h4",inverted:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(r(fe),{as:"h4",inverted:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(r(fe),{as:"h4",inverted:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(r(fe),{as:"h4",inverted:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(r(fe),{as:"h4",inverted:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(r(fe),{as:"h4",inverted:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(r(fe),{as:"h4",inverted:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(r(fe),{as:"h4",inverted:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(r(fe),{as:"h4",inverted:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1})]),_:1})]),_:1}))}},lA={__name:"Header",setup(e){const l=[{id:"page-headers",label:"Page Headers",category:"Types",component:$C},{id:"content-headers",label:"Content Headers",category:"Types",component:TC},{id:"icon-headers",label:"Icon Headers",category:"Types",component:DC},{id:"sub-headers",label:"Sub Headers",category:"Types",component:RC},{id:"image",label:"Image",category:"Content",component:PC},{id:"icon",label:"Icon",category:"Content",component:VC},{id:"subheader",label:"Subheader",category:"Content",component:HC},{id:"disabled",label:"Disabled",category:"States",component:OC},{id:"dividing",label:"Dividing",category:"Variations",component:GC},{id:"block",label:"Block",category:"Variations",component:UC},{id:"attached",label:"Attached",category:"Variations",component:JC},{id:"floating",label:"Floating",category:"Variations",component:KC},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:QC},{id:"colored",label:"Colored",category:"Variations",component:eA},{id:"inverted",label:"Inverted",category:"Variations",component:iA}];return(a,o)=>(A(),B(rt,{title:"Header",description:"A header provides a short summary of content","component-docs":l}))}},aA=`<template>
  <SuiIcon name="users" disabled />
</template>`,nA={__name:"DisabledDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Disabled",code:aA},{description:i(()=>[n(" An icon can show that it is disabled ")]),example:i(()=>[t(r(W),{name:"users",disabled:""})]),_:1}))}},oA=`<template>
  <SuiIcon name="spinner" loading />
  <SuiIcon name="notched circle" loading />
  <SuiIcon name="asterisk" loading />
</template>`,sA={__name:"LoadingDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Loading",code:oA},{description:i(()=>[n(" An icon can be used as a simple loader ")]),example:i(()=>[t(r(W),{name:"spinner",loading:""}),t(r(W),{name:"notched circle",loading:""}),t(r(W),{name:"asterisk",loading:""})]),_:1}))}},rA=S("br",null,null,-1),uA=`<template>
  <div>
    This icon
    <SuiIcon name="help" fitted />
    is fitted.
    <br />
    This icon
    <SuiIcon name="help" />
    is not fitted.
  </div>
</template>`,cA={__name:"FittedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Fitted",code:uA},{description:i(()=>[n(" An icon can be fitted, without any space to the left or right of it. ")]),example:i(()=>[S("div",null,[n(" This icon "),t(r(W),{name:"help",fitted:""}),n(" is fitted. "),rA,n(" This icon "),t(r(W),{name:"help"}),n(" is not fitted. ")])]),_:1}))}},dA=`<template>
  <SuiIcon name="home" size="mini" />
  <SuiIcon name="home" size="tiny" />
  <SuiIcon name="home" size="small" />
  <SuiIcon name="home" />
  <SuiIcon name="home" size="large" />
  <SuiIcon name="home" size="big" />
  <SuiIcon name="home" size="huge" />
  <SuiIcon name="home" size="massive" />
</template>`,mA={__name:"SizeDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Size",code:dA},{description:i(()=>[n(" An icon can vary in size ")]),example:i(()=>[t(r(W),{name:"home",size:"mini"}),t(r(W),{name:"home",size:"tiny"}),t(r(W),{name:"home",size:"small"}),t(r(W),{name:"home"}),t(r(W),{name:"home",size:"large"}),t(r(W),{name:"home",size:"big"}),t(r(W),{name:"home",size:"huge"}),t(r(W),{name:"home",size:"massive"})]),_:1}))}},pA=`<template>
  <SuiIcon name="close" link />
  <SuiIcon name="help" link />
</template>`,fA={__name:"LinkDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Link",code:pA},{description:i(()=>[n(" An icon can be formatted as a link ")]),example:i(()=>[t(r(W),{name:"close",link:""}),t(r(W),{name:"help",link:""})]),_:1}))}},gA=`<template>
  <SuiIcon name="cloud" flipped="horizontally" />
  <SuiIcon name="cloud" flipped="vertically" />
</template>`,hA={__name:"FlippedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Flipped",code:gA},{description:i(()=>[n(" An icon can be flipped ")]),example:i(()=>[t(r(W),{name:"cloud",flipped:"horizontally"}),t(r(W),{name:"cloud",flipped:"vertically"})]),_:1}))}},_A=`<template>
  <SuiIcon name="cloud" rotated="clockwise" />
  <SuiIcon name="cloud" rotated="counterclockwise" />
</template>`,bA={__name:"RotatedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Rotated",code:_A},{description:i(()=>[n(" An icon can be rotated ")]),example:i(()=>[t(r(W),{name:"cloud",rotated:"clockwise"}),t(r(W),{name:"cloud",rotated:"counterclockwise"})]),_:1}))}},vA=`<template>
  <SuiIcon name="users" circular />
  <SuiIcon name="users" circular color="teal" />
  <SuiIcon name="users" circular inverted />
  <SuiIcon name="users" circular inverted color="teal" />
</template>`,SA={__name:"CircularDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Circular",code:vA},{description:i(()=>[n(" An icon can be formatted to appear circular ")]),example:i(()=>[t(r(W),{name:"users",circular:""}),t(r(W),{name:"users",circular:"",color:"teal"}),t(r(W),{name:"users",circular:"",inverted:""}),t(r(W),{name:"users",circular:"",inverted:"",color:"teal"})]),_:1}))}},yA=`<template>
  <SuiIcon name="users" circular colored color="red" />
  <SuiIcon name="users" circular colored color="green" />
  <SuiIcon name="users" circular colored color="blue" />
</template>`,wA={__name:"CircularColoredDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Circular Colored",code:yA},{description:i(()=>[n(" The circular color can appear in the same color as the icon itself ")]),example:i(()=>[t(r(W),{name:"users",circular:"",colored:"",color:"red"}),t(r(W),{name:"users",circular:"",colored:"",color:"green"}),t(r(W),{name:"users",circular:"",colored:"",color:"blue"})]),_:1}))}},CA=`<template>
  <SuiIcon name="users" bordered />
  <SuiIcon name="users" bordered color="teal" />
  <SuiIcon name="users" bordered inverted color="black" />
  <SuiIcon name="users" bordered inverted color="teal" />
</template>`,AA={__name:"BorderedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Bordered",code:CA},{description:i(()=>[n(" An icon can be formatted to appear bordered ")]),example:i(()=>[t(r(W),{name:"users",bordered:""}),t(r(W),{name:"users",bordered:"",color:"teal"}),t(r(W),{name:"users",bordered:"",inverted:"",color:"black"}),t(r(W),{name:"users",bordered:"",inverted:"",color:"teal"})]),_:1}))}},xA=`<template>
  <SuiIcon name="users" bordered colored color="red" />
  <SuiIcon name="users" bordered colored color="green" />
  <SuiIcon name="users" bordered colored color="blue" />
</template>`,kA={__name:"BorderedColoredDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Bordered Colored",code:xA},{description:i(()=>[n(" The bordered color can appear in the same color as the icon itself ")]),example:i(()=>[t(r(W),{name:"users",bordered:"",colored:"",color:"red"}),t(r(W),{name:"users",bordered:"",colored:"",color:"green"}),t(r(W),{name:"users",bordered:"",colored:"",color:"blue"})]),_:1}))}},$A=`<template>
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
</template>`,BA={__name:"ColoredDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Colored",code:$A},{description:i(()=>[n(" An icon can be formatted with different colors ")]),example:i(()=>[t(r(W),{name:"users",primary:""}),t(r(W),{name:"users",secondary:""}),t(r(W),{name:"users",color:"red"}),t(r(W),{name:"users",color:"orange"}),t(r(W),{name:"users",color:"yellow"}),t(r(W),{name:"users",color:"olive"}),t(r(W),{name:"users",color:"green"}),t(r(W),{name:"users",color:"teal"}),t(r(W),{name:"users",color:"blue"}),t(r(W),{name:"users",color:"violet"}),t(r(W),{name:"users",color:"purple"}),t(r(W),{name:"users",color:"pink"}),t(r(W),{name:"users",color:"brown"}),t(r(W),{name:"users",color:"grey"}),t(r(W),{name:"users",color:"black"})]),_:1}))}},TA=`<template>
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
</template>`,LA={__name:"InvertedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Inverted",code:TA},{description:i(()=>[n(" An icon can have its colors inverted for contrast ")]),example:i(()=>[t(r(W),{name:"users",inverted:""}),t(r(W),{name:"users",inverted:"",primary:""}),t(r(W),{name:"users",inverted:"",secondary:""}),t(r(W),{name:"users",inverted:"",color:"red"}),t(r(W),{name:"users",inverted:"",color:"orange"}),t(r(W),{name:"users",inverted:"",color:"yellow"}),t(r(W),{name:"users",inverted:"",color:"olive"}),t(r(W),{name:"users",inverted:"",color:"green"}),t(r(W),{name:"users",inverted:"",color:"teal"}),t(r(W),{name:"users",inverted:"",color:"blue"}),t(r(W),{name:"users",inverted:"",color:"violet"}),t(r(W),{name:"users",inverted:"",color:"purple"}),t(r(W),{name:"users",inverted:"",color:"pink"}),t(r(W),{name:"users",inverted:"",color:"brown"}),t(r(W),{name:"users",inverted:"",color:"grey"})]),_:1}))}},DA=`<template>
  <SuiIconGroup size="huge">
    <SuiIcon name="circle outline" size="big" />
    <SuiIcon name="user" />
  </SuiIconGroup>
  <SuiIconGroup size="huge">
    <SuiIcon name="dont" size="big" color="red" />
    <SuiIcon name="user" color="black" />
  </SuiIconGroup>
</template>`,IA={__name:"IconsDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Icons",code:DA},{description:i(()=>[n(" Several icons can be used together as a group ")]),example:i(()=>[t(r(zi),{size:"huge"},{default:i(()=>[t(r(W),{name:"circle outline",size:"big"}),t(r(W),{name:"user"})]),_:1}),t(r(zi),{size:"huge"},{default:i(()=>[t(r(W),{name:"dont",size:"big",color:"red"}),t(r(W),{name:"user",color:"black"})]),_:1})]),_:1}))}},EA=`<template>
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
</template>`,RA={__name:"CornerIconDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Corner Icon",code:EA},{description:i(()=>[n(" A group of icons can display a smaller corner icon ")]),example:i(()=>[t(r(zi),{size:"huge"},{default:i(()=>[t(r(W),{name:"puzzle"}),t(r(W),{name:"add",corner:"top left"})]),_:1}),t(r(zi),{size:"huge"},{default:i(()=>[t(r(W),{name:"puzzle"}),t(r(W),{name:"add",corner:"top right"})]),_:1}),t(r(zi),{size:"huge"},{default:i(()=>[t(r(W),{name:"puzzle"}),t(r(W),{name:"add",corner:"bottom left"})]),_:1}),t(r(zi),{size:"huge"},{default:i(()=>[t(r(W),{name:"puzzle"}),t(r(W),{name:"add",corner:"bottom right"})]),_:1})]),_:1}))}},zA={__name:"Icon",setup(e){const l=[{id:"disabled",label:"Disabled",category:"States",component:nA},{id:"loading",label:"Loading",category:"States",component:sA},{id:"fitted",label:"Fitted",category:"Variations",component:cA},{id:"size",label:"Size",category:"Variations",component:mA},{id:"link",label:"Link",category:"Variations",component:fA},{id:"flipped",label:"Flipped",category:"Variations",component:hA},{id:"rotated",label:"Rotated",category:"Variations",component:bA},{id:"circular",label:"Circular",category:"Variations",component:SA},{id:"circular-colored",label:"Circular Colored",category:"Variations",component:wA},{id:"bordered",label:"Bordered",category:"Variations",component:AA},{id:"bordered-colored",label:"Bordered Colored",category:"Variations",component:kA},{id:"colored",label:"Colored",category:"Variations",component:BA},{id:"inverted",label:"Inverted",category:"Variations",component:LA},{id:"icons",label:"Icons",category:"Groups",component:IA},{id:"corner-icon",label:"Corner Icon",category:"Groups",component:RA}];return(a,o)=>(A(),B(rt,{title:"Icon",description:"An icon is a glyph used to represent something else","component-docs":l}))}},PA=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" />
</template>`,FA={__name:"ImageDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Image",code:PA},{description:i(()=>[n(" An image ")]),example:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}))}},VA=`<template>
  <SuiImage
    as="a"
    size="medium"
    href="https://google.com"
    src="/images/wireframe/image-text.png"
    target="_blank"
  />
</template>`,MA={__name:"ImageLinkDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Image Link",code:VA},{description:i(()=>[n(" An image can be formatted to link to other content ")]),example:i(()=>[t(r(oe),{as:"a",size:"medium",href:"https://google.com",src:"/vue-fomantic-ui/images/wireframe/image-text.png",target:"_blank"})]),_:1}))}},HA=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" hidden />
</template>`,NA={__name:"HiddenDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Hidden",code:HA},{description:i(()=>[n(" An image can be hidden ")]),example:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png",hidden:""})]),_:1}))}},OA=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" disabled />
</template>`,qA={__name:"DisabledDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Disabled",code:OA},{description:i(()=>[n(" An image can show that it is disabled and cannot be selected ")]),example:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png",disabled:""})]),_:1}))}},GA=S("span",null,"Username",-1),jA=`<template>
  <SuiImage src="/images/wireframe/square-image.png" avatar />
  <span>Username</span>
</template>`,UA={__name:"AvatarDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Avatar",code:jA},{description:i(()=>[n(" An image may be formatted to appear inline with text as an avatar ")]),example:i(()=>[t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/square-image.png",avatar:""}),GA]),_:1}))}},YA=`<template>
  <SuiImage size="medium" src="/images/wireframe/white-image.png" bordered />
</template>`,JA={__name:"BorderedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Bordered",code:YA},{description:i(()=>[n(" An image may include a border to emphasize the edges of white or transparent content ")]),example:i(()=>[t(r(oe),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/white-image.png",bordered:""})]),_:1}))}},WA=`<template>
  <SuiImage src="/images/wireframe/image.png" fluid />
</template>`,KA={__name:"FluidDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Fluid",code:WA},{description:i(()=>[n(" An image can take up the width of its container ")]),example:i(()=>[t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png",fluid:""})]),_:1}))}},XA=`<template>
  <SuiImage src="/images/wireframe/image.png" rounded />
</template>`,QA={__name:"RoundedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Rounded",code:XA},{description:i(()=>[n(" An image may appear rounded ")]),example:i(()=>[t(r(oe),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png",rounded:""})]),_:1}))}},ZA=`<template>
  <SuiImage src="/images/wireframe/square-image.png" circular />
</template>`,e0={__name:"CircularDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Circular",code:ZA},{description:i(()=>[n(" An image may appear circular ")]),example:i(()=>[t(r(oe),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/square-image.png",circular:""})]),_:1}))}},t0=S("span",null,"Top Aligned",-1),i0=S("span",null,"Middle Aligned",-1),l0=S("span",null,"Bottom Aligned",-1),a0=`<template>
  <SuiImage verticalAlign="top" size="tiny" src="/images/wireframe/image.png" />
  <span>Top Aligned</span>
  <SuiDivider />
  <SuiImage verticalAlign="middle" size="tiny" src="/images/wireframe/image.png" />
  <span>Middle Aligned</span>
  <SuiDivider />
  <SuiImage verticalAlign="bottom" size="tiny" src="/images/wireframe/image.png" />
  <span>Bottom Aligned</span>
</template>`,n0={__name:"VerticallyAlignedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Vertically Aligned",code:a0},{description:i(()=>[n(" An image can specify its vertical alignment ")]),example:i(()=>[t(r(oe),{verticalAlign:"top",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t0,t(r(Fe)),t(r(oe),{verticalAlign:"middle",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),i0,t(r(Fe)),t(r(oe),{verticalAlign:"bottom",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),l0]),_:1}))}},o0=S("p",null," Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ",-1),s0=S("p",null," Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. ",-1),r0=S("p",null," Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id. ",-1),u0=`<template>
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
</template>`,c0={__name:"CenteredDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Centered",code:u0},{description:i(()=>[n(" An image can appear centered in a content block ")]),example:i(()=>[t(r(N),null,{default:i(()=>[t(r(oe),{centered:"",size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png"}),o0,s0,t(r(oe),{centered:"",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),r0]),_:1})]),_:1}))}},d0=`<template>
  <SuiSegment>
    <p>
      Te eum doming eirmod, nominati pertinacia <SuiImage spaced size="mini" src="/images/wireframe/image.png" /> argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
    </p>
  </SuiSegment>
</template>`,m0={__name:"SpacedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Spaced",code:d0},{description:i(()=>[n(" An image can appear centered in a content block ")]),example:i(()=>[t(r(N),null,{default:i(()=>[S("p",null,[n(" Te eum doming eirmod, nominati pertinacia "),t(r(oe),{spaced:"",size:"mini",src:"/vue-fomantic-ui/images/wireframe/image.png"}),n(" argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ")])]),_:1})]),_:1}))}},p0=S("p",null," Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ",-1),f0=S("p",null," Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. ",-1),g0=S("p",null," Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id. ",-1),h0=`<template>
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
</template>`,_0={__name:"FloatedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Floated",code:h0},{description:i(()=>[n(" An image can sit to the left or right of other content ")]),example:i(()=>[t(r(N),null,{default:i(()=>[t(r(oe),{floated:"left",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),p0,t(r(oe),{floated:"right",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),f0,g0]),_:1})]),_:1}))}},b0=`<template>
  <SuiImage size="mini" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="tiny" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="small" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="medium" src="/images/wireframe/image.png" />
</template>`,v0={__name:"SizeDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Size",code:b0},{description:i(()=>[n(" An image may appear at different sizes ")]),example:i(()=>[t(r(oe),{size:"mini",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(Fe),{hidden:""}),t(r(oe),{size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(Fe),{hidden:""}),t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(Fe),{hidden:""}),t(r(oe),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}))}},S0=`<template>
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
</template>`,y0={__name:"GroupSizeDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Size",code:S0},{description:i(()=>[n(" A group of images can be formatted to have the same size. ")]),example:i(()=>[t(r(So),{size:"tiny"},{default:i(()=>[t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(r(Fe),{hidden:""}),t(r(So),{size:"small"},{default:i(()=>[t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1}))}},w0={__name:"Image",setup(e){const l=[{id:"image",label:"Image",category:"Types",component:FA},{id:"image-link",label:"Image Link",category:"Types",component:MA},{id:"hidden",label:"Hidden",category:"States",component:NA},{id:"disabled",label:"Disabled",category:"States",component:qA},{id:"avatar",label:"Avatar",category:"Variations",component:UA},{id:"bordered",label:"Bordered",category:"Variations",component:JA},{id:"fluid",label:"Fluid",category:"Variations",component:KA},{id:"rounded",label:"Rounded",category:"Variations",component:QA},{id:"circular",label:"Circular",category:"Variations",component:e0},{id:"vertically-aligned",label:"Vertically Aligned",category:"Variations",component:n0},{id:"centered",label:"Centered",category:"Variations",component:c0},{id:"spaced",label:"Spaced",category:"Variations",component:m0},{id:"floated",label:"Floated",category:"Variations",component:_0},{id:"size",label:"Size",category:"Variations",component:v0},{id:"group-size",label:"Size",category:"Groups",component:y0}];return(a,o)=>(A(),B(rt,{title:"Image",description:"An image is a graphic representation of something","component-docs":l}))}},C0=`<template>
  <SuiInput placeholder="Search..." />
</template>`,A0={__name:"InputDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Input",code:C0},{description:i(()=>[n(" A standard input ")]),example:i(()=>[t(r(Ze),{placeholder:"Search..."})]),_:1}))}},x0=`<template>
  <SuiInput focus placeholder="Search..." />
</template>`,k0={__name:"FocusDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Focus",code:x0},{description:i(()=>[n(" An input field can show a user is currently interacting with it ")]),example:i(()=>[t(r(Ze),{focus:"",placeholder:"Search..."})]),_:1}))}},$0=`<template>
  <SuiInput loading icon="user" placeholder="Search..." />
  <SuiInput loading icon="user" iconPosition="left" placeholder="Search..." />
</template>`,B0={__name:"LoadingDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Loading",code:$0},{description:i(()=>[n(" An icon input field can show that it is currently loading data ")]),example:i(()=>[t(r(Ze),{loading:"",icon:"user",placeholder:"Search..."}),t(r(Ze),{loading:"",icon:"user",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},T0=`<template>
  <SuiInput disabled placeholder="Search..." />
</template>`,L0={__name:"DisabledDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Disabled",code:T0},{description:i(()=>[n(" An input field can show that it is disabled ")]),example:i(()=>[t(r(Ze),{disabled:"",placeholder:"Search..."})]),_:1}))}},D0=`<template>
  <SuiInput error placeholder="Search..." />
</template>`,I0={__name:"ErrorDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Error",code:D0},{description:i(()=>[n(" An input field can show the data contains errors ")]),example:i(()=>[t(r(Ze),{error:"",placeholder:"Search..."})]),_:1}))}},E0=`<template>
  <SuiInput icon="search" placeholder="Search..." />
  <SuiInput icon="users" iconPosition="left" placeholder="Search..." />
</template>`,R0={__name:"IconDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Icon",code:E0},{description:i(()=>[n(" An input can be formatted with an icon ")]),example:i(()=>[t(r(Ze),{icon:"search",placeholder:"Search..."}),t(r(Ze),{icon:"users",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},z0=`<template>
  <SuiInput label="http://" placeholder="mysite.com" />
</template>`,P0={__name:"LabeledDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Labeled",code:z0},{description:i(()=>[n(" An input can be formatted with a label ")]),example:i(()=>[t(r(Ze),{label:"http://",placeholder:"mysite.com"})]),_:1}))}},F0=`<template>
  <SuiInput action="Search" />
</template>`,V0={__name:"ActionDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Action",code:F0},{description:i(()=>[n(" An input can be formatted to alert the user to an action they may perform ")]),example:i(()=>[t(r(Ze),{action:"Search"})]),_:1}))}},M0=`<template>
  <SuiInput transparent icon="search" placeholder="Search..." />
</template>`,H0={__name:"TransparentDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Transparent",code:M0},{description:i(()=>[n(" A transparent input has no background ")]),example:i(()=>[t(r(Ze),{transparent:"",icon:"search",placeholder:"Search..."})]),_:1}))}},N0=`<template>
  <SuiSegment inverted>
    <SuiInput inverted placeholder="Search..." />
  </SuiSegment>
</template>`,O0={__name:"InvertedDoc",setup(e){return(l,a)=>{const o=C("SuiSegment");return A(),B(I,{label:"Inverted",code:N0},{description:i(()=>[n(" An input can be formatted to appear on dark backgrounds ")]),example:i(()=>[t(o,{inverted:""},{default:i(()=>[t(r(Ze),{inverted:"",placeholder:"Search..."})]),_:1})]),_:1})}}},q0=`<template>
  <SuiInput fluid icon="search" placeholder="Search..." />
</template>`,G0={__name:"FluidDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Fluid",code:q0},{description:i(()=>[n(" An input can take the size of its container ")]),example:i(()=>[t(r(Ze),{fluid:"",icon:"search",placeholder:"Search..."})]),_:1}))}},j0=`<template>
  <SuiInput icon="search" placeholder="Search mini..." size="mini" />
  <SuiInput icon="search" placeholder="Search small..." size="small" />
  <SuiInput icon="search" placeholder="Search large..." size="large" />
  <SuiInput icon="search" placeholder="Search big..." size="big" />
  <SuiInput icon="search" placeholder="Search huge..." size="huge" />
  <SuiInput icon="search" placeholder="Search massive..." size="massive" />
</template>`,U0={__name:"SizeDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Size",code:j0},{description:i(()=>[n(" An input can vary in size ")]),example:i(()=>[t(r(Ze),{icon:"search",placeholder:"Search mini...",size:"mini"}),t(r(Ze),{icon:"search",placeholder:"Search small...",size:"small"}),t(r(Ze),{icon:"search",placeholder:"Search large...",size:"large"}),t(r(Ze),{icon:"search",placeholder:"Search big...",size:"big"}),t(r(Ze),{icon:"search",placeholder:"Search huge...",size:"huge"}),t(r(Ze),{icon:"search",placeholder:"Search massive...",size:"massive"})]),_:1}))}},Y0={__name:"Input",setup(e){const l=[{id:"input",label:"Input",category:"Types",component:A0},{id:"focus",label:"Focus",category:"States",component:k0},{id:"loading",label:"Loading",category:"States",component:B0},{id:"disabled",label:"Disabled",category:"States",component:L0},{id:"error",label:"Error",category:"States",component:I0},{id:"icon",label:"Icon",category:"Variations",component:R0},{id:"labeled",label:"Labeled",category:"Variations",component:P0},{id:"action",label:"Action",category:"Variations",component:V0},{id:"transparent",label:"Transparent",category:"Variations",component:H0},{id:"inverted",label:"Inverted",category:"Variations",component:O0},{id:"fluid",label:"Fluid",category:"Variations",component:G0},{id:"size",label:"Size",category:"Variations",component:U0}];return(a,o)=>(A(),B(rt,{title:"Input",description:"An input is a field used to elicit a response from a user","component-docs":l}))}},J0=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
</template>`,W0={__name:"LabelDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Label",code:J0},{description:i(()=>[n(" A label ")]),example:i(()=>[t(r(O),null,{default:i(()=>[t(r(W),{name:"mail"}),n(" 23 ")]),_:1})]),_:1}))}},K0="/vue-fomantic-ui/images/avatar/small/joe.jpg",Ed="/vue-fomantic-ui/images/avatar/small/veronika.jpg",Ai="/vue-fomantic-ui/images/avatar/small/elliot.jpg",X0=S("img",{src:K0},null,-1),Q0=S("img",{src:Ed},null,-1),Z0=S("img",{src:Ai},null,-1),ex=`<template>
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
</template>`,tx={__name:"ImageDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Image",code:ex},{description:i(()=>[n(" A label can be formatted to emphasize an image ")]),example:i(()=>[t(r(O),{as:"a",image:""},{default:i(()=>[X0,n(" Joe ")]),_:1}),t(r(O),{as:"a",image:"",color:"blue"},{default:i(()=>[Q0,n(" Veronika "),t(r(Ll),null,{default:i(()=>[n("Friend")]),_:1})]),_:1}),t(r(O),{as:"a",image:""},{default:i(()=>[Z0,n(" Elliot "),t(r(W),{name:"delete"})]),_:1})]),_:1}))}},ix=S("input",{type:"text",placeholder:"First Name"},null,-1),lx=S("input",{type:"text"},null,-1),ax=S("input",{type:"text",placeholder:"Username"},null,-1),nx=S("input",{type:"password"},null,-1),ox=`<template>
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
</template>`,sx={__name:"PointingDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Pointing",code:ox},{description:i(()=>[n(" A label can point to content next to it ")]),example:i(()=>[t(r(Nt),{fluid:""},{default:i(()=>[t(r(it),null,{default:i(()=>[ix,t(r(O),{pointing:""},{default:i(()=>[n("Please enter a value")]),_:1})]),_:1}),t(r(Fe)),t(r(it),null,{default:i(()=>[t(r(O),{pointing:"below"},{default:i(()=>[n("Please enter a value")]),_:1}),lx]),_:1}),t(r(Fe)),t(r(it),{inline:""},{default:i(()=>[ax,t(r(O),{pointing:"left",color:"red",basic:""},{default:i(()=>[n("That name is taken!")]),_:1})]),_:1}),t(r(Fe)),t(r(it),{inline:""},{default:i(()=>[t(r(O),{pointing:"right",color:"red",basic:""},{default:i(()=>[n("Your password must be 6 characters or more")]),_:1}),nx]),_:1})]),_:1})]),_:1}))}},rx=`<template>
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
</template>`,ux={__name:"CornerDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Corner",code:rx},{description:i(()=>[n(" A label can position itself in the corner of an element ")]),example:i(()=>[t(r(va),{columns:2},{default:i(()=>[t(r(Tt),null,{default:i(()=>[t(r(oe),{label:{as:"a",corner:"left",icon:"heart"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(r(Tt),null,{default:i(()=>[t(r(oe),{label:{as:"a",color:"red",corner:"right",icon:"save"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1})]),_:1}))}},cx=`<template>
  <SuiLabel as="a" tag>New</SuiLabel>
  <SuiLabel as="a" tag color="red">Upcoming</SuiLabel>
  <SuiLabel as="a" tag color="teal">Featured</SuiLabel>
</template>`,dx={__name:"TagDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Tag",code:cx},{description:i(()=>[n(" A label can appear as a tag ")]),example:i(()=>[t(r(O),{as:"a",tag:""},{default:i(()=>[n("New")]),_:1}),t(r(O),{as:"a",tag:"",color:"red"},{default:i(()=>[n("Upcoming")]),_:1}),t(r(O),{as:"a",tag:"",color:"teal"},{default:i(()=>[n("Featured")]),_:1})]),_:1}))}},mx=S("span",null,"Account Details",-1),px=S("span",null,"User Reviews",-1),fx=S("span",null,"Technical Specifications",-1),gx=S("span",null,"User Reviews",-1),hx=`<template>
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
</template>`,_x={__name:"RibbonDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Ribbon",code:hx},{description:i(()=>[n(" A label can appear as a ribbon attaching itself to an element. ")]),example:i(()=>[t(r(va),{columns:2},{default:i(()=>[t(r(Tt),null,{default:i(()=>[t(r(N),{raised:""},{default:i(()=>[t(r(O),{as:"a",ribbon:"",color:"red"},{default:i(()=>[n("Overview")]),_:1}),mx,t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),t(r(O),{as:"a",ribbon:"",color:"blue"},{default:i(()=>[n("Community")]),_:1}),px,t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(r(Tt),null,{default:i(()=>[t(r(N),{raised:""},{default:i(()=>[t(r(O),{as:"a",ribbon:"right",color:"orange"},{default:i(()=>[n("Specs")]),_:1}),fx,t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),t(r(O),{as:"a",ribbon:"right",color:"teal"},{default:i(()=>[n("Reviews")]),_:1}),gx,t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1}))}},bx=`<template>
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
</template>`,vx={__name:"AttachedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Attached",code:bx},{description:i(()=>[n(" A label can attach to a content segment ")]),example:i(()=>[t(r(va),{columns:3},{default:i(()=>[t(r(wo),null,{default:i(()=>[t(r(Tt),null,{default:i(()=>[t(r(N),{padded:""},{default:i(()=>[t(r(O),{attached:"top"},{default:i(()=>[n("HTML")]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(r(Tt),null,{default:i(()=>[t(r(N),{padded:""},{default:i(()=>[t(r(O),{attached:"bottom"},{default:i(()=>[n("CSS")]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(r(Tt),null,{default:i(()=>[t(r(N),{padded:""},{default:i(()=>[t(r(O),{attached:"top right"},{default:i(()=>[n("Code")]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1}),t(r(wo),null,{default:i(()=>[t(r(Tt),null,{default:i(()=>[t(r(N),{padded:""},{default:i(()=>[t(r(O),{attached:"top left"},{default:i(()=>[n("View")]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(r(Tt),null,{default:i(()=>[t(r(N),{padded:""},{default:i(()=>[t(r(O),{attached:"bottom left"},{default:i(()=>[n("User View")]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(r(Tt),null,{default:i(()=>[t(r(N),{padded:""},{default:i(()=>[t(r(O),{attached:"bottom right"},{default:i(()=>[n("Admin View")]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},Sx=`<template>
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
</template>`,yx={__name:"HorizontalDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Horizontal",code:Sx},{description:i(()=>[n(" A horizontal label is formatted to label content along-side it horizontally ")]),example:i(()=>[t(r(nd),{divided:"",selection:""},{default:i(()=>[t(r(Nl),null,{default:i(()=>[t(r(O),{color:"red",horizontal:""},{default:i(()=>[n("Fruit")]),_:1}),n(" Kumquats ")]),_:1}),t(r(Nl),null,{default:i(()=>[t(r(O),{color:"purple",horizontal:""},{default:i(()=>[n("Candy")]),_:1}),n(" Ice Cream ")]),_:1}),t(r(Nl),null,{default:i(()=>[t(r(O),{color:"red",horizontal:""},{default:i(()=>[n("Fruit")]),_:1}),n(" Orange ")]),_:1}),t(r(Nl),null,{default:i(()=>[t(r(O),{horizontal:""},{default:i(()=>[n("Dog")]),_:1}),n(" Poodle ")]),_:1})]),_:1})]),_:1}))}},wx=`<template>
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
</template>`,Cx={__name:"FloatingDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Floating",code:wx},{description:i(()=>[n(" A label can float above or below another element ")]),example:i(()=>[t(r(od),{compact:""},{default:i(()=>[t(r(Co),null,{default:i(()=>[t(r(W),{name:"mail"}),n(" Messages "),t(r(O),{floating:"",color:"red"},{default:i(()=>[n("22")]),_:1})]),_:1}),t(r(Co),null,{default:i(()=>[t(r(W),{name:"users"}),n(" Friends "),t(r(O),{floating:"",color:"teal"},{default:i(()=>[n("22")]),_:1})]),_:1})]),_:1})]),_:1}))}},Ax=`<template>
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
</template>`,xx={__name:"InvertedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Inverted",code:Ax},{description:i(()=>[n(" All Variants of Label can be inverted ")]),example:i(()=>[t(r(N),{inverted:""},{default:i(()=>[t(r(O),{as:"a",inverted:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(r(O),{as:"a",inverted:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(r(O),{as:"a",inverted:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(r(O),{as:"a",inverted:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(r(O),{as:"a",inverted:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(r(O),{as:"a",basic:"",inverted:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(r(O),{as:"a",basic:"",inverted:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(r(O),{as:"a",basic:"",inverted:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(r(O),{as:"a",basic:"",inverted:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(r(O),{as:"a",basic:"",inverted:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(r(O),{as:"a",tag:"",inverted:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(r(O),{as:"a",tag:"",inverted:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(r(O),{as:"a",tag:"",inverted:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(r(O),{as:"a",tag:"",inverted:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(r(O),{as:"a",tag:"",inverted:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1})]),_:1}))}},kx=`<template>
  <SuiLabel>
    Dogs
    <SuiLabelDetail>214</SuiLabelDetail>
  </SuiLabel>
</template>`,$x={__name:"DetailDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Detail",code:kx},{description:i(()=>[n(" A label can contain a detail ")]),example:i(()=>[t(r(O),null,{default:i(()=>[n(" Dogs "),t(r(Ll),null,{default:i(()=>[n("214")]),_:1})]),_:1})]),_:1}))}},Bx=`<template>
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
</template>`,Tx={__name:"IconDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Icon",code:Bx},{description:i(()=>[n(" A label can include an icon ")]),example:i(()=>[t(r(O),null,{default:i(()=>[t(r(W),{name:"mail"}),n(" Mail ")]),_:1}),t(r(O),null,{default:i(()=>[t(r(W),{name:"checkmark"}),n(" Test Passed ")]),_:1}),t(r(O),{icon:"dog"}),t(r(O),{icon:"cat"})]),_:1}))}},Lx=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
    <SuiLabelContent>View Mail</SuiLabelContent>
  </SuiLabel>
</template>`,Dx={__name:"LinkDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Link",code:Lx},{description:i(()=>[n(" A label can be a link or contain an item that links ")]),example:i(()=>[t(r(O),{as:"a"},{default:i(()=>[t(r(W),{name:"mail"}),n(" 23 ")]),_:1}),t(r(O),null,{default:i(()=>[t(r(W),{name:"mail"}),n(" 23 "),t(r(Ll),null,{default:i(()=>[n("View Mail")]),_:1})]),_:1})]),_:1}))}},Ix=`<template>
  <SuiLabel disabled>Disabled Label</SuiLabel>
</template>`,Ex={__name:"DisabledDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Disabled",code:Ix},{description:i(()=>[n(" A label can show it is currently unable to be interacted with ")]),example:i(()=>[t(r(O),{disabled:""},{default:i(()=>[n("Disabled Label")]),_:1})]),_:1}))}},Rx=`<template>
  <SuiLabel fluid>Fits container</SuiLabel>
</template>`,zx={__name:"FluidDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Fluid",code:Rx},{description:i(()=>[n(" A label can take the width of its container ")]),example:i(()=>[t(r(O),{fluid:""},{default:i(()=>[n("Fits container")]),_:1})]),_:1}))}},Px=`<template>
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
</template>`,Fx={__name:"CircularDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Circular",code:Px},{description:i(()=>[n(" A label can be circular ")]),example:i(()=>[t(r(O),{circular:"",color:"red"},{default:i(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"orange"},{default:i(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"yellow"},{default:i(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"olive"},{default:i(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"green"},{default:i(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"teal"},{default:i(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"blue"},{default:i(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"violet"},{default:i(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"purple"},{default:i(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"pink"},{default:i(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"brown"},{default:i(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"grey"},{default:i(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"black"},{default:i(()=>[n("2")]),_:1})]),_:1}))}},Vx=S("img",{src:Ai},null,-1),Mx=`<template>
  <SuiLabel as="a" basic>Basic</SuiLabel>
  <SuiLabel as="a" basic pointing>Pointing</SuiLabel>
  <SuiLabel as="a" basic image>
    <img src="/images/avatar/small/elliot.jpg" />
    Elliot
  </SuiLabel>
  <SuiLabel as="a" basic pointing color="red">Red Pointing</SuiLabel>
  <SuiLabel as="a" basic color="blue">Blue</SuiLabel>
</template>`,Hx={__name:"BasicDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Basic",code:Mx},{description:i(()=>[n(" A label can reduce its complexity ")]),example:i(()=>[t(r(O),{as:"a",basic:""},{default:i(()=>[n("Basic")]),_:1}),t(r(O),{as:"a",basic:"",pointing:""},{default:i(()=>[n("Pointing")]),_:1}),t(r(O),{as:"a",basic:"",image:""},{default:i(()=>[Vx,n(" Elliot ")]),_:1}),t(r(O),{as:"a",basic:"",pointing:"",color:"red"},{default:i(()=>[n("Red Pointing")]),_:1}),t(r(O),{as:"a",basic:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1})]),_:1}))}},Nx=`<template>
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
</template>`,Ox={__name:"ColoredDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Colored",code:Nx},{description:i(()=>[n(" A label can have different colors ")]),example:i(()=>[t(r(O),{as:"a",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(r(O),{as:"a",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(r(O),{as:"a",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(r(O),{as:"a",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(r(O),{as:"a",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(r(O),{as:"a",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(r(O),{as:"a",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(r(O),{as:"a",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(r(O),{as:"a",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(r(O),{as:"a",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(r(O),{as:"a",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(r(O),{as:"a",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(r(O),{as:"a",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(r(O),{as:"a",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(r(O),{as:"a",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},qx=`<template>
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
</template>`,Gx={__name:"BasicTagDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Basic Tag",code:qx},{description:i(()=>[]),example:i(()=>[t(r(O),{as:"a",basic:"",tag:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},jx=`<template>
  <SuiLabel size="mini">Mini</SuiLabel>
  <SuiLabel size="tiny">Tiny</SuiLabel>
  <SuiLabel size="small">Small</SuiLabel>
  <SuiLabel>Medium</SuiLabel>
  <SuiLabel size="large">Large</SuiLabel>
  <SuiLabel size="big">Big</SuiLabel>
  <SuiLabel size="huge">Huge</SuiLabel>
  <SuiLabel size="massive">Massive</SuiLabel>
</template>`,Ux={__name:"SizeDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Size",code:jx},{description:i(()=>[n(" A label can be small or large ")]),example:i(()=>[t(r(O),{size:"mini"},{default:i(()=>[n("Mini")]),_:1}),t(r(O),{size:"tiny"},{default:i(()=>[n("Tiny")]),_:1}),t(r(O),{size:"small"},{default:i(()=>[n("Small")]),_:1}),t(r(O),null,{default:i(()=>[n("Medium")]),_:1}),t(r(O),{size:"large"},{default:i(()=>[n("Large")]),_:1}),t(r(O),{size:"big"},{default:i(()=>[n("Big")]),_:1}),t(r(O),{size:"huge"},{default:i(()=>[n("Huge")]),_:1}),t(r(O),{size:"massive"},{default:i(()=>[n("Massive")]),_:1})]),_:1}))}},Yx=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,Jx={__name:"GroupSizeDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Group Size",code:Yx},{description:i(()=>[n(" Labels can share sizes together ")]),example:i(()=>[t(r(Dl),{size:"huge"},{default:i(()=>[t(r(O),null,{default:i(()=>[n("Fun")]),_:1}),t(r(O),null,{default:i(()=>[n("Happy")]),_:1}),t(r(O),null,{default:i(()=>[n("Smart")]),_:1}),t(r(O),null,{default:i(()=>[n("Witty")]),_:1})]),_:1})]),_:1}))}},Wx=`<template>
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
</template>`,Kx={__name:"ColoredGroupDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Clored Group",code:Wx},{description:i(()=>[n(" Labels can share colors together ")]),example:i(()=>[t(r(Dl),{color:"blue"},{default:i(()=>[t(r(O),null,{default:i(()=>[n(" Fun "),t(r(W),{name:"close"})]),_:1}),t(r(O),null,{default:i(()=>[n(" Happy "),t(r(Ll),null,{default:i(()=>[n("Smart")]),_:1})]),_:1}),t(r(O),null,{default:i(()=>[n("Insane")]),_:1}),t(r(O),null,{default:i(()=>[n("Exciting")]),_:1})]),_:1})]),_:1}))}},Xx=`<template>
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
</template>`,Qx={__name:"BasicGroupDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Basic Group",code:Xx},{description:i(()=>[n(" Labels can share their style together ")]),example:i(()=>[t(r(Dl),{basic:""},{default:i(()=>[t(r(O),null,{default:i(()=>[n(" Fun "),t(r(W),{name:"close"})]),_:1}),t(r(O),null,{default:i(()=>[n(" Happy "),t(r(Ll),null,{default:i(()=>[n("Smart")]),_:1})]),_:1}),t(r(O),null,{default:i(()=>[n("Insane")]),_:1}),t(r(O),null,{default:i(()=>[n("Exciting")]),_:1})]),_:1})]),_:1}))}},Zx=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,ek={__name:"TagGroupDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Tag Group",code:Zx},{description:i(()=>[n(" Labels can share tag formatting ")]),example:i(()=>[t(r(Dl),{tag:""},{default:i(()=>[t(r(O),{as:"a"},{default:i(()=>[n("$10.00")]),_:1}),t(r(O),{as:"a"},{default:i(()=>[n("$19.99")]),_:1}),t(r(O),{as:"a"},{default:i(()=>[n("$24.99")]),_:1}),t(r(O),{as:"a"},{default:i(()=>[n("$10.25")]),_:1})]),_:1})]),_:1}))}},tk=`<template>
  <SuiLabelGroup tag>
    <SuiLabel as="a">1</SuiLabel>
    <SuiLabel as="a">3</SuiLabel>
    <SuiLabel as="a">4</SuiLabel>
    <SuiLabel as="a">14</SuiLabel>
    <SuiLabel as="a">16</SuiLabel>
    <SuiLabel as="a">34</SuiLabel>
  </SuiLabelGroup>
</template>`,ik={__name:"CircularGroupDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Circular Group",code:tk},{description:i(()=>[n(" Labels can share shapes ")]),example:i(()=>[t(r(Dl),{circular:""},{default:i(()=>[t(r(O),{as:"a"},{default:i(()=>[n("1")]),_:1}),t(r(O),{as:"a"},{default:i(()=>[n("3")]),_:1}),t(r(O),{as:"a"},{default:i(()=>[n("4")]),_:1}),t(r(O),{as:"a"},{default:i(()=>[n("14")]),_:1}),t(r(O),{as:"a"},{default:i(()=>[n("16")]),_:1}),t(r(O),{as:"a"},{default:i(()=>[n("34")]),_:1})]),_:1})]),_:1}))}},lk={__name:"Label",setup(e){const l=[{id:"label",label:"Label",category:"Types",component:W0},{id:"image",label:"Image",category:"Types",component:tx},{id:"pointing",label:"Pointing",category:"Types",component:sx},{id:"corner",label:"Corner",category:"Types",component:ux},{id:"tag",label:"Tag",category:"Types",component:dx},{id:"ribbon",label:"Ribbon",category:"Types",component:_x},{id:"attached",label:"Attached",category:"Types",component:vx},{id:"horizontal",label:"Horizontal",category:"Types",component:yx},{id:"floating",label:"Floating",category:"Types",component:Cx},{id:"inverted",label:"Inverted",category:"Types",component:xx},{id:"detail",label:"Detail",category:"Content",component:$x},{id:"icon",label:"Icon",category:"Content",component:Tx},{id:"link",label:"Link",category:"Content",component:Dx},{id:"disabled",label:"Disabled",category:"States",component:Ex},{id:"fluid",label:"Fluid",category:"Variations",component:zx},{id:"circular",label:"Circular",category:"Variations",component:Fx},{id:"basic",label:"Basic",category:"Variations",component:Hx},{id:"colored",label:"Colored",category:"Variations",component:Ox},{id:"basic-tag",label:"Basic Tag",category:"Variations",component:Gx},{id:"size",label:"Size",category:"Variations",component:Ux},{id:"group-size",label:"Group Size",category:"Groups",component:Jx},{id:"colored-group",label:"Colored Group",category:"Groups",component:Kx},{id:"basic-group",label:"Basic Group",category:"Groups",component:Qx},{id:"tag-group",label:"Tag Group",category:"Groups",component:ek},{id:"circular-group",label:"Circular Group",category:"Groups",component:ik}];return(a,o)=>(A(),B(rt,{title:"Label",description:"A label displays content classification","component-docs":l}))}},ak=Vh(Wf);function nk(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Ea=ak,Un=nk(Xc),ok=Ea.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function(l,a){var o=a.slots,s=a.attrs,c=o&&o.default&&o.default()||[],m=l.code||c&&c.length?c[0].children:"",f=l.inline,u=l.language,d=Un.languages[u],g="language-".concat(u);return function(){return f?Ea.h("code",{class:[g],innerHTML:Un.highlight(m,d)}):Ea.h("pre",Object.assign({},s,{class:[s.class,g]}),[Ea.h("code",Object.assign({},s,{class:[s.class,g],innerHTML:Un.highlight(m,d)}))])}}}),sk=ok;const rk=Wc(sk),uk=P({name:"DocExample",components:{Prism:rk},props:{title:String,description:String,code:String},setup(){const e=j(!1);return{active:e,toggle:()=>e.value=!e.value}}}),ck={class:"example"};function dk(e,l,a,o,s,c){const m=C("sui-header-subheader"),f=C("sui-header"),u=C("sui-grid-column"),d=C("sui-icon"),g=C("sui-grid-row"),p=C("prism"),_=C("sui-grid");return A(),be("div",ck,[t(_,{columns:2},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(f,{as:"h3"},{default:i(()=>[n(Te(e.title)+" ",1),t(m,null,{default:i(()=>[n(Te(e.description),1)]),_:1})]),_:1})]),_:1}),t(u,{textAlign:"right"},{default:i(()=>[t(d,{name:"code",color:"grey",onClick:e.toggle,link:""},null,8,["onClick"])]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(u,{width:16},{default:i(()=>[Gi(e.$slots,"default",{},void 0,!0)]),_:3}),e.active?(A(),B(u,{key:0,width:16},{default:i(()=>[t(p,{language:"markup"},{default:i(()=>[n(Te(e.code),1)]),_:1})]),_:1})):ns("",!0)]),_:3})]),_:3})])}const lt=Re(uk,[["render",dk],["__scopeId","data-v-fcfb6a67"]]),mk="/vue-fomantic-ui/images/avatar/small/rachel.png",pk="/vue-fomantic-ui/images/avatar/small/lindsay.png",fk="/vue-fomantic-ui/images/avatar/small/matthew.png",Rd="/vue-fomantic-ui/images/avatar/small/jenny.jpg",gk="/vue-fomantic-ui/images/avatar/small/tom.jpg",Ra="/vue-fomantic-ui/images/avatar/small/christian.jpg",zd="/vue-fomantic-ui/images/avatar/small/matt.jpg",Gl="/vue-fomantic-ui/images/avatar/small/helen.jpg",Di="/vue-fomantic-ui/images/avatar/small/daniel.jpg",Lo="/vue-fomantic-ui/images/avatar/small/stevie.jpg",Yn="/vue-fomantic-ui/images/wireframe/square-image.png",hk=P({name:"ListDoc",components:{DocExample:lt},setup(){return{listCode:`<sui-list>
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
</div>`}}}),_k={class:"intro"},bk=S("div",null,"Benefits",-1),vk={class:"list"},Sk=S("a",null,"Languages",-1),yk=S("a",null,[S("b",null,"Arrested Development")],-1),wk=S("a",null,[S("b",null,"Bob's Burgers")],-1),Ck=S("a",null,[S("b",null,"The Godfather Part 2")],-1),Ak=S("a",null,[S("b",null,"Twin Peaks")],-1),xk=S("a",null,[S("b",null,"Arrested Development")],-1),kk=S("a",null,[S("b",null,"Bob's Burgers")],-1),$k=S("a",null,[S("b",null,"The Godfather Part 2")],-1);function Bk(e,l,a,o,s,c){const m=C("sui-header-subheader"),f=C("sui-header"),u=C("sui-divider"),d=C("sui-icon"),g=C("sui-menu-item"),p=C("sui-menu"),_=C("sui-container"),w=C("sui-segment"),v=C("sui-list-item"),x=C("sui-list"),$=C("doc-example"),L=C("sui-list-list"),h=C("sui-list-header"),b=C("sui-list-description"),k=C("sui-list-content"),T=C("sui-image");return A(),be("div",null,[t(w,{vertical:""},{default:i(()=>[t(_,{class:"main"},{default:i(()=>[S("div",_k,[t(f,{as:"h1"},{default:i(()=>[n("List "),t(m,null,{default:i(()=>[n(" A list is used to group related content ")]),_:1})]),_:1}),t(u,{hidden:""}),t(p,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(d,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(d,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(_,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t($,{title:"List",description:"A list groups related content",code:e.listCode},{default:i(()=>[t(x,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Apples")]),_:1}),t(v,null,{default:i(()=>[n("Pears")]),_:1}),t(v,null,{default:i(()=>[n("Oranges")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Bulleted",description:"A list can mark items with a bullet",code:e.bulletedCode},{default:i(()=>[t(x,{bulleted:""},{default:i(()=>[t(v,null,{default:i(()=>[n("Gaining Access")]),_:1}),t(v,null,{default:i(()=>[n("Inviting Friends")]),_:1}),t(v,null,{default:i(()=>[bk,S("div",vk,[t(v,{as:"a"},{default:i(()=>[n("Link to somewhere")]),_:1}),t(v,null,{default:i(()=>[n("Rebates")]),_:1}),t(v,null,{default:i(()=>[n("Discounts")]),_:1})])]),_:1}),t(v,null,{default:i(()=>[n("Warranty")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Ordered",description:"A list can be ordered numerically",code:e.orderedCode},{default:i(()=>[t(x,{ordered:""},{default:i(()=>[t(v,{as:"a"},{default:i(()=>[n("Getting Started")]),_:1}),t(v,{as:"a"},{default:i(()=>[n("Introduction")]),_:1}),t(v,null,{default:i(()=>[Sk,t(L,null,{default:i(()=>[t(v,{as:"a"},{default:i(()=>[n("HTML")]),_:1}),t(v,{as:"a"},{default:i(()=>[n("Javascript")]),_:1}),t(v,{as:"a"},{default:i(()=>[n("CSS")]),_:1})]),_:1})]),_:1}),t(v,{as:"a"},{default:i(()=>[n("Review")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Link",description:"A list can be specially formatted for navigation links",code:e.linkCode},{default:i(()=>[t(x,{link:""},{default:i(()=>[t(v,{active:""},{default:i(()=>[n("Home")]),_:1}),t(v,{as:"a"},{default:i(()=>[n("About")]),_:1}),t(v,{as:"a"},{default:i(()=>[n("Jobs")]),_:1}),t(v,{as:"a"},{default:i(()=>[n("Team")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t($,{title:"Item",description:"A list item can contain a set of items",code:e.itemCode},{default:i(()=>[t(x,null,{default:i(()=>[t(v,null,{default:i(()=>[n("1")]),_:1}),t(v,null,{default:i(()=>[n("2")]),_:1}),t(v,null,{default:i(()=>[n("3")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Icon",description:"A list item can contain an icon",code:e.iconCode},{default:i(()=>[t(x,null,{default:i(()=>[t(v,{as:"a"},{default:i(()=>[t(d,{name:"help"}),t(k,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Floated Icon")]),_:1}),t(b,null,{default:i(()=>[n(" This text will always have a left margin to make sure it sits alongside your icon ")]),_:1})]),_:1})]),_:1}),t(v,{as:"a"},{default:i(()=>[t(d,{name:"right triangle"}),t(k,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Icon Alignment")]),_:1}),t(b,null,{default:i(()=>[n(" Floated icons are by default top aligned. To have an icon top aligned try this example ")]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(d,{name:"help"}),n(" Inline Text ")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Image",description:"A list can contain an image",code:e.imageContentCode},{default:i(()=>[t(x,null,{default:i(()=>[t(v,null,{default:i(()=>[t(T,{avatar:"",src:mk}),t(k,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Rachel")]),_:1}),t(b,null,{default:i(()=>[n(" Last seen watching "),yk,n(" just now. ")]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(T,{avatar:"",src:pk}),t(k,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Lindsay")]),_:1}),t(b,null,{default:i(()=>[n(" Last seen watching "),wk,n(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(T,{avatar:"",src:fk}),t(k,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Matthew")]),_:1}),t(b,null,{default:i(()=>[n(" Last seen watching "),Ck,n(" yesterday. ")]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(T,{avatar:"",src:Rd}),t(k,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Jenny Hess")]),_:1}),t(b,null,{default:i(()=>[n(" Last seen watching "),Ak,n(" 3 days ago. ")]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(T,{avatar:"",src:Ed}),t(k,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Veronika Ossi")]),_:1}),t(b,null,{default:i(()=>[n(" Has not watched anything recently ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Link",description:"A list can contain links",code:e.linkContentCode},{default:i(()=>[t(x,null,{default:i(()=>[t(v,{as:"a"},{default:i(()=>[n("What is a FAQ?")]),_:1}),t(v,{as:"a"},{default:i(()=>[n("Who is our user?")]),_:1}),t(v,{as:"a"},{default:i(()=>[n("Where is our office located?")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"header",description:"A list item can contain a header",code:e.headerContentCode},{default:i(()=>[t(x,null,{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[n("New York City")]),_:1}),n(" A lovely city ")]),_:1}),t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Chicago")]),_:1}),n(" Also quite a lovely city ")]),_:1}),t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Los Angeles")]),_:1}),n(" Sometimes can be a lovely city ")]),_:1}),t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[n("San Francisco")]),_:1}),n(" What a lovely city ")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Description",description:"A list item can contain a description",code:e.descriptionContentCode},{default:i(()=>[t(x,null,{default:i(()=>[t(v,null,{default:i(()=>[t(d,{name:"map marker"}),t(k,null,{default:i(()=>[t(h,{as:"a"},{default:i(()=>[n("Krolewskie Jadlo")]),_:1}),t(b,null,{default:i(()=>[n(" An excellent polish restaurant, quick delivery and hearty, filling meals. ")]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(d,{name:"map marker"}),t(k,null,{default:i(()=>[t(h,{as:"a"},{default:i(()=>[n("Xian Famous Foods")]),_:1}),t(b,null,{default:i(()=>[n(" A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers. ")]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(d,{name:"map marker"}),t(k,null,{default:i(()=>[t(h,{as:"a"},{default:i(()=>[n("Sapporo Haru")]),_:1}),t(b,null,{default:i(()=>[n(" Greenpoint's best choice for quick and delicious sushi. ")]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(d,{name:"map marker"}),t(k,null,{default:i(()=>[t(h,{as:"a"},{default:i(()=>[n("Enid's")]),_:1}),t(b,null,{default:i(()=>[n(" At night a bar, during the day a delicious brunch spot. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t($,{title:"Horizontal",description:"A list can be formatted to have items appear horizontally",code:e.horizontalVarCode},{default:i(()=>[t(x,{horizontal:""},{default:i(()=>[t(v,null,{default:i(()=>[t(T,{avatar:"",src:gk}),t(k,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Tom")]),_:1}),n(" Top Contributor ")]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(T,{avatar:"",src:Ra}),t(k,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Christian Rocha")]),_:1}),n(" Admin ")]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(T,{avatar:"",src:zd}),t(k,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Matt")]),_:1}),n(" Top Rated User ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Inverted",description:"A list can be inverted to appear on a dark background",code:e.invertedVarCode},{default:i(()=>[t(w,{inverted:""},{default:i(()=>[t(x,{inverted:"",relaxed:"",divided:""},{default:i(()=>[t(v,null,{default:i(()=>[t(k,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Snickerdoodle")]),_:1}),n(" An excellent companion ")]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(k,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Poodle")]),_:1}),n(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(k,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Paulo")]),_:1}),n(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Selection",description:"A selection list formats list items as possible choices",code:e.selectionVarCode},{default:i(()=>[t(x,{selection:"",verticalAlign:"middle"},{default:i(()=>[t(v,null,{default:i(()=>[t(T,{avatar:"",src:Gl}),t(k,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(T,{avatar:"",src:Ra}),t(k,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(T,{avatar:"",src:Di}),t(k,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Animated",description:"A list can animate to set the current item apart from the list",code:e.animatedVarCode},{default:i(()=>[t(x,{animated:"",verticalAlign:"middle"},{default:i(()=>[t(v,null,{default:i(()=>[t(T,{avatar:"",src:Gl}),t(k,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(T,{avatar:"",src:Ra}),t(k,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(T,{avatar:"",src:Di}),t(k,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Relaxed",description:"A list can relax its padding to provide more negative space",code:e.relaxedVarCode},{default:i(()=>[t(x,{relaxed:""},{default:i(()=>[t(v,null,{default:i(()=>[t(T,{avatar:"",src:Di}),t(k,null,{default:i(()=>[t(h,{as:"a"},{default:i(()=>[n("Daniel Louise")]),_:1}),t(b,null,{default:i(()=>[n(" Last seen watching "),xk,n(" just now. ")]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(T,{avatar:"",src:Lo}),t(k,null,{default:i(()=>[t(h,{as:"a"},{default:i(()=>[n("Stevie Feliciano")]),_:1}),t(b,null,{default:i(()=>[n(" Last seen watching "),kk,n(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(T,{avatar:"",src:Ai}),t(k,null,{default:i(()=>[t(h,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(b,null,{default:i(()=>[n(" Last seen watching "),$k,n(" yesterday. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Divided",description:"A list can show divisions between content",code:e.dividedVarCode},{default:i(()=>[t(x,{divided:"",verticalAlign:"middle"},{default:i(()=>[t(v,null,{default:i(()=>[t(T,{avatar:"",src:Di}),t(k,null,{default:i(()=>[t(h,{as:"a"},{default:i(()=>[n("Daniel Louise")]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(T,{avatar:"",src:Lo}),t(k,null,{default:i(()=>[t(h,{as:"a"},{default:i(()=>[n("Stevie Feliciano")]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(T,{avatar:"",src:Ai}),t(k,null,{default:i(()=>[t(h,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Celled",description:"A list can divide its items into cells",code:e.celledVarCode},{default:i(()=>[t(x,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(T,{avatar:"",src:Gl}),t(k,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Snickerdoodle")]),_:1}),n(" An excellent companion ")]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(T,{avatar:"",src:Di}),t(k,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Poodle")]),_:1}),n(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(T,{avatar:"",src:Di}),t(k,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Paulo")]),_:1}),n(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Size",description:"A list can vary in size",code:e.sizeCode},{default:i(()=>[t(x,{horizontal:"",divided:"",size:"mini"},{default:i(()=>[t(v,null,{default:i(()=>[t(T,{avatar:"",src:Gl}),t(k,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(T,{avatar:"",src:Ra}),t(k,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(T,{avatar:"",src:Di}),t(k,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content Variations")]),_:1}),t($,{title:"Vertical Aligned",description:"An element inside a list can be vertically aligned",code:e.verticalAlignedCode},{default:i(()=>[t(x,{horizontal:""},{default:i(()=>[t(v,null,{default:i(()=>[t(T,{avatar:"",src:Yn}),t(k,{verticalAlign:"top"},{default:i(()=>[n(" Top Aligned ")]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(T,{avatar:"",src:Yn}),t(k,{verticalAlign:"middle"},{default:i(()=>[n(" Middle ")]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(T,{avatar:"",src:Yn}),t(k,{verticalAlign:"bottom"},{default:i(()=>[n(" Bottom ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Floated",description:"An list, or an element inside a list can be floated left or right",code:e.floatedCode},{default:i(()=>[S("div",null,[t(x,{floated:"right",horizontal:""},{default:i(()=>[t(v,{disabled:""},{default:i(()=>[n("© GitHub, Inc.")]),_:1}),t(v,{as:"a"},{default:i(()=>[n("Terms")]),_:1}),t(v,{as:"a"},{default:i(()=>[n("Privacy")]),_:1}),t(v,{as:"a"},{default:i(()=>[n("Contact")]),_:1})]),_:1}),t(x,{horizontal:""},{default:i(()=>[t(v,{as:"a"},{default:i(()=>[n("About Us")]),_:1}),t(v,{as:"a"},{default:i(()=>[n("Jobs")]),_:1})]),_:1})])]),_:1},8,["code"])]),_:1})])}const Tk=Re(hk,[["render",Bk]]),Lk=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader />
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Dk={__name:"LoaderDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Loader",code:Lk},{description:i(()=>[n(" A loader ")]),example:i(()=>[t(r(N),null,{default:i(()=>[t(r(Yt),{active:""},{default:i(()=>[t(r(Pe))]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Ik=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text>Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Ek={__name:"TextLoaderDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Text Loader",code:Ik},{description:i(()=>[n(" A loader can contain text ")]),example:i(()=>[t(r(N),null,{default:i(()=>[t(r(Yt),{active:""},{default:i(()=>[t(r(Pe),{text:""},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Rk=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader Indeterminate text>Preparing Files</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,zk={__name:"IndeterminateDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Indeterminate",code:Rk},{description:i(()=>[n(" A loader can show it's unsure of how long a task will take ")]),example:i(()=>[t(r(N),null,{default:i(()=>[t(r(Yt),{active:""},{default:i(()=>[t(r(Pe),{Indeterminate:"",text:""},{default:i(()=>[n("Preparing Files")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Pk=`<template>
  <SuiSegment>
    <SuiLoader active />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Fk={__name:"ActiveDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Active",code:Pk},{description:i(()=>[n(" A loader can be active or visible ")]),example:i(()=>[t(r(N),null,{default:i(()=>[t(r(Pe),{active:""}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Vk=`<template>
  <SuiSegment>
    <SuiLoader disabled />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Mk={__name:"DisabledDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Disabled",code:Vk},{description:i(()=>[n(" A loader can be disabled or hidden ")]),example:i(()=>[t(r(N),null,{default:i(()=>[t(r(Pe),{disabled:""}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Hk=`<template>
  <SuiLoader active inline />
</template>`,Nk={__name:"InlineDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Inline",code:Hk},{description:i(()=>[n(" Loaders can appear inline with content ")]),example:i(()=>[t(r(Pe),{active:"",inline:""})]),_:1}))}},Ok=`<template>
  <SuiLoader active inline />
</template>`,qk={__name:"InlineCenterDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Inline Center",code:Ok},{description:i(()=>[n(" Loaders can appear inline centered with content ")]),example:i(()=>[t(r(Pe),{active:"",inline:"centered"})]),_:1}))}},Gk=`<template>
  <SuiLoader slow active inline />
  <SuiLoader active inline />
  <SuiLoader fast active inline />
</template>`,jk={__name:"SpeedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Speed",code:Gk},{description:i(()=>[n(" Loaders can appear slow, normal or fast ")]),example:i(()=>[t(r(Pe),{slow:"",active:"",inline:""}),t(r(Pe),{active:"",inline:""}),t(r(Pe),{fast:"",active:"",inline:""})]),_:1}))}},Uk=`<template>
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
</template>`,Yk={__name:"ColorsDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Colors",code:Uk},{description:i(()=>[n(" Loaders can be different colors ")]),example:i(()=>[t(r(Pe),{active:"",inline:"",primary:""}),t(r(Pe),{active:"",inline:"",secondary:""}),t(r(Pe),{active:"",inline:"",color:"red"}),t(r(Pe),{active:"",inline:"",color:"orange"}),t(r(Pe),{active:"",inline:"",color:"yellow"}),t(r(Pe),{active:"",inline:"",color:"olive"}),t(r(Pe),{active:"",inline:"",color:"green"}),t(r(Pe),{active:"",inline:"",color:"teal"}),t(r(Pe),{active:"",inline:"",color:"blue"}),t(r(Pe),{active:"",inline:"",color:"violet"}),t(r(Pe),{active:"",inline:"",color:"purple"}),t(r(Pe),{active:"",inline:"",color:"pink"}),t(r(Pe),{active:"",inline:"",color:"brown"}),t(r(Pe),{active:"",inline:"",color:"grey"}),t(r(Pe),{active:"",inline:"",color:"black"})]),_:1}))}},Jk=`<template>
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
</template>`,Wk={__name:"SizeDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Size",code:Jk},{description:i(()=>[n(" Loaders can have different sizes ")]),example:i(()=>[t(r(N),null,{default:i(()=>[t(r(Yt),{active:""},{default:i(()=>[t(r(Pe),{text:"",size:"mini"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(r(N),null,{default:i(()=>[t(r(Yt),{active:""},{default:i(()=>[t(r(Pe),{text:"",size:"tiny"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(r(N),null,{default:i(()=>[t(r(Yt),{active:""},{default:i(()=>[t(r(Pe),{text:"",size:"small"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(r(N),null,{default:i(()=>[t(r(Yt),{active:""},{default:i(()=>[t(r(Pe),{text:"",size:"large"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(r(N),null,{default:i(()=>[t(r(Yt),{active:""},{default:i(()=>[t(r(Pe),{text:"",size:"big"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(r(N),null,{default:i(()=>[t(r(Yt),{active:""},{default:i(()=>[t(r(Pe),{text:"",size:"huge"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Kk=`<template>
  <SuiSegment inverted>
    <SuiLoader active inverted />

    <SuiImage src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Xk={__name:"InvertedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Inverted",code:Kk},{description:i(()=>[n(" Loaders can have their colors inverted. ")]),example:i(()=>[t(r(N),{inverted:""},{default:i(()=>[t(r(Pe),{active:"",inverted:""}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Qk={__name:"Loader",setup(e){const l=[{id:"loader",label:"Loader",category:"Types",component:Dk},{id:"text-loader",label:"Text Loader",category:"Types",component:Ek},{id:"indeterminate",label:"Indeterminate",category:"States",component:zk},{id:"active",label:"Active",category:"States",component:Fk},{id:"disabled",label:"Disabled",category:"States",component:Mk},{id:"inline",label:"Inline",category:"Variations",component:Nk},{id:"inline-center",label:"Inline Center",category:"Variations",component:qk},{id:"speed",label:"Speed",category:"Variations",component:jk},{id:"colors",label:"Colors",category:"Variations",component:Yk},{id:"size",label:"Size",category:"Variations",component:Wk},{id:"inverted",label:"Inverted",category:"Variations",component:Xk}];return(a,o)=>(A(),B(rt,{title:"Loader",description:"A loader alerts a user to wait for an activity to complete","component-docs":l}))}},at="/vue-fomantic-ui/images/wireframe/short-paragraph.png",Zk=P({name:"RailDoc",components:{DocExample:lt},setup(){return{railCode:`<sui-grid centered :columns="3">
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
</sui-grid>`}}}),e$={class:"intro"};function t$(e,l,a,o,s,c){const m=C("sui-header-subheader"),f=C("sui-header"),u=C("sui-divider"),d=C("sui-icon"),g=C("sui-menu-item"),p=C("sui-menu"),_=C("sui-container"),w=C("sui-segment"),v=C("sui-image"),x=C("sui-rail"),$=C("sui-grid-column"),L=C("sui-grid"),h=C("doc-example");return A(),be("div",null,[t(w,{vertical:""},{default:i(()=>[t(_,{class:"main"},{default:i(()=>[S("div",e$,[t(f,{as:"h1"},{default:i(()=>[n("Rail "),t(m,null,{default:i(()=>[n(" A rail is used to show accompanying content outside the boundaries of the main view of a site ")]),_:1})]),_:1}),t(u,{hidden:""}),t(p,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(d,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(d,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(_,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(h,{title:"Rail",description:"A rail can be presented on the left or right side of a container",code:e.railCode},{default:i(()=>[t(L,{centered:"",columns:3},{default:i(()=>[t($,null,{default:i(()=>[t(w,null,{default:i(()=>[t(v,{src:at}),t(x,{position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(x,{position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Internal",description:"A rail can attach itself to the inside of a container",code:e.internalCode},{default:i(()=>[t(w,{textAlign:"center"},{default:i(()=>[t(v,{src:at}),t(x,{internal:"",position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n("Left Rail Content")]),_:1})]),_:1}),t(x,{internal:"",position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n("Right Rail Content")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Dividing",description:"A rail can create a division between itself and a container",code:e.dividingCode},{default:i(()=>[t(L,{centered:"",columns:3},{default:i(()=>[t($,null,{default:i(()=>[t(w,null,{default:i(()=>[t(v,{src:at}),t(x,{dividing:"",position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(x,{dividing:"",position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(h,{title:"Attached",description:"A rail can appear attached to the main viewport",code:e.attachedCode},{default:i(()=>[t(L,{centered:"",columns:3},{default:i(()=>[t($,null,{default:i(()=>[t(w,null,{default:i(()=>[t(v,{src:at}),t(x,{attached:"",position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(x,{attached:"",position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Close",description:"A rail can appear closer to the main viewport",code:e.closeCode},{default:i(()=>[t(L,{centered:"",columns:3},{default:i(()=>[t($,null,{default:i(()=>[t(w,null,{default:i(()=>[t(v,{src:at}),t(x,{close:"",position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(x,{close:"",position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Size",description:"A rail can have different sizes",code:e.sizeCode},{default:i(()=>[t(L,{centered:"",columns:3},{default:i(()=>[t($,null,{default:i(()=>[t(w,null,{default:i(()=>[t(v,{src:at}),t(x,{size:"small",position:"left"},{default:i(()=>[n(" Left Small Rail ")]),_:1}),t(x,{size:"large",position:"right"},{default:i(()=>[n(" Right Large Rail ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const i$=Re(Zk,[["render",t$]]),l$=`<template>
  <SuiReveal animated="fade">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/ade.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,a$={__name:"FadeDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Fade",code:l$},{description:i(()=>[n(" An element can disappear to reveal content below ")]),example:i(()=>[t(r(tl),{animated:"fade"},{default:i(()=>[t(r(zt),{visible:""},{default:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(r(zt),{hidden:""},{default:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/ade.jpg"})]),_:1})]),_:1})]),_:1}))}},n$=`<template>
  <SuiReveal animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/chris.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,o$={__name:"MoveDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Move",code:n$},{description:i(()=>[n(" An element can move in a direction to reveal content ")]),example:i(()=>[t(r(tl),{animated:"move"},{default:i(()=>[t(r(zt),{visible:""},{default:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(r(zt),{hidden:""},{default:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/chris.jpg"})]),_:1})]),_:1})]),_:1}))}},s$=`<template>
  <SuiReveal animated="rotate">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/stevie.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,r$={__name:"RotateDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Rotate",code:s$},{description:i(()=>[n(" An element can rotate to reveal content below ")]),example:i(()=>[t(r(tl),{animated:"rotate"},{default:i(()=>[t(r(zt),{visible:""},{default:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(r(zt),{hidden:""},{default:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/stevie.jpg"})]),_:1})]),_:1})]),_:1}))}},u$=`<template>
  <SuiReveal active animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/nan.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,c$={__name:"ActiveDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Active",code:u$},{description:i(()=>[n(" An active reveal displays its hidden content ")]),example:i(()=>[t(r(tl),{active:"",animated:"move"},{default:i(()=>[t(r(zt),{visible:""},{default:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(r(zt),{hidden:""},{default:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/nan.jpg"})]),_:1})]),_:1})]),_:1}))}},d$=`<template>
  <SuiReveal disabled animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/nan.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,m$={__name:"DisabledDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Disabled",code:d$},{description:i(()=>[n(" A disabled reveal will not animate when hovered ")]),example:i(()=>[t(r(tl),{disabled:"",animated:"move"},{default:i(()=>[t(r(zt),{visible:""},{default:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(r(zt),{hidden:""},{default:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/nan.jpg"})]),_:1})]),_:1})]),_:1}))}},p$=`<template>
  <SuiReveal instant animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/chris.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,f$={__name:"InstantDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Instant",code:p$},{description:i(()=>[n(" An element can show its content without delay ")]),example:i(()=>[t(r(tl),{instant:"",animated:"move"},{default:i(()=>[t(r(zt),{visible:""},{default:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(r(zt),{hidden:""},{default:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/chris.jpg"})]),_:1})]),_:1})]),_:1}))}},g$={__name:"Reveal",setup(e){const l=[{id:"fade",label:"Fade",category:"Types",component:a$},{id:"move",label:"Move",category:"Types",component:o$},{id:"rotate",label:"Rotate",category:"Types",component:r$},{id:"active",label:"Active",category:"States",component:c$},{id:"disabled",label:"Disabled",category:"States",component:m$},{id:"instant",label:"Instant",category:"Variations",component:f$}];return(a,o)=>(A(),B(rt,{title:"Reveal",description:"A reveal displays additional content in place of previous content when activated","component-docs":l}))}},h$=S("p",null,"Pellentesque habitant morbi tristique senectus.",-1),_$=`<template>
  <SuiSegment>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
</template>`,b$={__name:"SegmentDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Segment",code:_$},{description:i(()=>[n(" A segment of content ")]),example:i(()=>[t(r(N),null,{default:i(()=>[h$]),_:1})]),_:1}))}},v$=`<template>
  <SuiSegment placeholder>
    <SuiHeader icon>
      <SuiIcon name="pdf file outline" />
      No documents are listed for this customer.
    </SuiHeader>
    <SuiButton primary>Add Document</SuiButton>
  </SuiSegment>
</template>`,S$={__name:"PlaceholderSegmentDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Placeholder Segment",code:v$},{description:i(()=>[n(" A segment can be used to reserve space for conditionally displayed content. ")]),example:i(()=>[t(r(N),{placeholder:""},{default:i(()=>[t(r(fe),{icon:""},{default:i(()=>[t(r(W),{name:"pdf file outline"}),n(" No documents are listed for this customer. ")]),_:1}),t(r(z),{primary:""},{default:i(()=>[n("Add Document")]),_:1})]),_:1})]),_:1}))}},y$=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),w$=`<template>
  <SuiSegment raised>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,C$={__name:"RaisedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Raised",code:w$},{description:i(()=>[n(" A segment may be formatted to raise above the page. ")]),example:i(()=>[t(r(N),{raised:""},{default:i(()=>[y$]),_:1})]),_:1}))}},A$=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),x$=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),k$=`<template>
  <SuiSegment stacked>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
  <SuiSegment stacked="tall">
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,$$={__name:"StackedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Stacked",code:k$},{description:i(()=>[n(" A segment can be formatted to show it contains multiple pages ")]),example:i(()=>[t(r(N),{stacked:""},{default:i(()=>[A$]),_:1}),t(r(N),{stacked:"tall"},{default:i(()=>[x$]),_:1})]),_:1}))}},B$=S("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),T$=S("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),L$=S("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),D$=`<template>
  <SuiHeader as="h4">Header</SuiHeader>
  <SuiSegment pailed>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
  </SuiSegment>
</template>`,I$={__name:"PiledDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Piled",code:D$},{description:i(()=>[n(" A segment can be formatted to look like a pile of pages ")]),example:i(()=>[t(r(fe),{as:"h4"},{default:i(()=>[n("Header")]),_:1}),t(r(N),{piled:""},{default:i(()=>[B$,T$,L$]),_:1})]),_:1}))}},E$=S("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his.",-1),R$=S("p",null,"Pellentesque habitant morbi tristique senectus.",-1),z$=S("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.",-1),P$=`<template>
  <SuiSegment vertical>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his.</p>
  </SuiSegment>
  <SuiSegment vertical>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
  <SuiSegment vertical>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.</p>
  </SuiSegment>
</template>`,F$={__name:"VerticalSegmentDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Vertical Segment",code:P$},{description:i(()=>[n(" A vertical segment formats content to be aligned as part of a vertical group ")]),example:i(()=>[t(r(N),{vertical:""},{default:i(()=>[E$]),_:1}),t(r(N),{vertical:""},{default:i(()=>[R$]),_:1}),t(r(N),{vertical:""},{default:i(()=>[z$]),_:1})]),_:1}))}},V$=S("p",null,"Top",-1),M$=S("p",null,"Middle",-1),H$=S("p",null,"Bottom",-1),N$=S("p",null,"Top",-1),O$=S("p",null,"Middle",-1),q$=S("p",null,"Bottom",-1),G$=S("p",null,"Top",-1),j$=S("p",null,"Middle",-1),U$=S("p",null,"Bottom",-1),Y$=`<template>
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
</template>`,J$={__name:"SegmentsDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Segments",code:Y$},{description:i(()=>[n(" A group of segments can be formatted to appear together ")]),example:i(()=>[t(r(Ct),null,{default:i(()=>[t(r(N),null,{default:i(()=>[V$]),_:1}),t(r(N),null,{default:i(()=>[M$]),_:1}),t(r(N),null,{default:i(()=>[H$]),_:1})]),_:1}),t(r(Ct),{basic:""},{default:i(()=>[t(r(N),null,{default:i(()=>[N$]),_:1}),t(r(N),null,{default:i(()=>[O$]),_:1}),t(r(N),null,{default:i(()=>[q$]),_:1})]),_:1}),t(r(Ct),null,{default:i(()=>[t(r(N),null,{default:i(()=>[G$]),_:1}),t(r(N),{color:"red"},{default:i(()=>[j$]),_:1}),t(r(N),{secondary:""},{default:i(()=>[U$]),_:1})]),_:1})]),_:1}))}},W$=S("p",null,"Top",-1),K$=S("p",null,"Nested Top",-1),X$=S("p",null,"Nested Middle",-1),Q$=S("p",null,"Nested Bottom",-1),Z$=S("p",null,"Middle",-1),eB=S("p",null,"Top",-1),tB=S("p",null,"Middle",-1),iB=S("p",null,"Bottom",-1),lB=S("p",null,"Bottom",-1),aB=`<template>
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
</template>`,nB={__name:"NestedSegmentsDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Nested Segments",code:aB},{description:i(()=>[n(" A group of segments can be nested in another group of segments ")]),example:i(()=>[t(r(Ct),null,{default:i(()=>[t(r(N),null,{default:i(()=>[W$]),_:1}),t(r(Ct),null,{default:i(()=>[t(r(N),null,{default:i(()=>[K$]),_:1}),t(r(N),null,{default:i(()=>[X$]),_:1}),t(r(N),null,{default:i(()=>[Q$]),_:1})]),_:1}),t(r(N),null,{default:i(()=>[Z$]),_:1}),t(r(Ct),{horizontal:""},{default:i(()=>[t(r(N),null,{default:i(()=>[eB]),_:1}),t(r(N),null,{default:i(()=>[tB]),_:1}),t(r(N),null,{default:i(()=>[iB]),_:1})]),_:1}),t(r(N),null,{default:i(()=>[lB]),_:1})]),_:1})]),_:1}))}},oB=S("p",null,"Left",-1),sB=S("p",null,"Middle",-1),rB=S("p",null,"Right",-1),uB=`<template>
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
</template>`,cB={__name:"HorizontalSegmentsDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Horizontal Segments",code:uB},{description:i(()=>[n(" A segment group can appear horizontally ")]),example:i(()=>[t(r(Ct),{horizontal:""},{default:i(()=>[t(r(N),null,{default:i(()=>[oB]),_:1}),t(r(N),null,{default:i(()=>[sB]),_:1}),t(r(N),null,{default:i(()=>[rB]),_:1})]),_:1})]),_:1}))}},dB=`<template>
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
</template>`,mB={__name:"HorizontalEqualWidthSegmentsDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Horizontal equal width Segments",code:dB},{description:i(()=>[n(" A horizontal segment group can automatically divide segments to be equal width ")]),example:i(()=>[t(r(Ct),{horizontal:"equal width"},{default:i(()=>[t(r(N),null,{default:i(()=>[n(" Segment One ")]),_:1}),t(r(N),null,{default:i(()=>[n(" Segment Two with a lot of additional content ")]),_:1}),t(r(N),null,{default:i(()=>[n(" Segment Three ")]),_:1})]),_:1})]),_:1}))}},pB=`<template>
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
</template>`,fB={__name:"HorizontalWrappingSegmentsDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Horizontal wrapping Segments",code:pB},{description:i(()=>[n(" A horizontal segment group can automatically wrap their segments on smaller screens ")]),example:i(()=>[t(r(Ct),{horizontal:"wrapping"},{default:i(()=>[t(r(N),null,{default:i(()=>[n(" Segment One ")]),_:1}),t(r(N),null,{default:i(()=>[n(" Segment Two ")]),_:1}),t(r(N),null,{default:i(()=>[n(" Segment Three ")]),_:1}),t(r(N),null,{default:i(()=>[n(" Segment Four ")]),_:1}),t(r(N),null,{default:i(()=>[n(" Segment Five ")]),_:1}),t(r(N),null,{default:i(()=>[n(" Segment Six ")]),_:1}),t(r(N),null,{default:i(()=>[n(" Segment Seven ")]),_:1}),t(r(N),null,{default:i(()=>[n(" Segment Eight ")]),_:1})]),_:1})]),_:1}))}},gB=S("p",null,"Top",-1),hB=S("p",null,"Middle",-1),_B=S("p",null,"Bottom",-1),bB=`<template>
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
</template>`,vB={__name:"RaisedSegmentsDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Raised Segments",code:bB},{description:i(()=>[n(" A group of segments can be raised ")]),example:i(()=>[t(r(Ct),{raised:""},{default:i(()=>[t(r(N),null,{default:i(()=>[gB]),_:1}),t(r(N),null,{default:i(()=>[hB]),_:1}),t(r(N),null,{default:i(()=>[_B]),_:1})]),_:1})]),_:1}))}},SB=S("p",null,"Top",-1),yB=S("p",null,"Middle",-1),wB=S("p",null,"Bottom",-1),CB=`<template>
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
</template>`,AB={__name:"StackedSegmentsDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Stacked Segments",code:CB},{description:i(()=>[n(" A group of segments can be stacked ")]),example:i(()=>[t(r(Ct),{stacked:""},{default:i(()=>[t(r(N),null,{default:i(()=>[SB]),_:1}),t(r(N),null,{default:i(()=>[yB]),_:1}),t(r(N),null,{default:i(()=>[wB]),_:1})]),_:1})]),_:1}))}},xB=S("p",null,"Top",-1),kB=S("p",null,"Middle",-1),$B=S("p",null,"Bottom",-1),BB=`<template>
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
</template>`,TB={__name:"PiledSegmentsDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Piled Segments",code:BB},{description:i(()=>[n(" A group of segments can be piled ")]),example:i(()=>[t(r(Ct),{piled:""},{default:i(()=>[t(r(N),null,{default:i(()=>[xB]),_:1}),t(r(N),null,{default:i(()=>[kB]),_:1}),t(r(N),null,{default:i(()=>[$B]),_:1})]),_:1})]),_:1}))}},LB=S("p",null,"Pellentesque habitant morbi tristique senectus.",-1),DB=`<template>
  <SuiSegment disabled>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
</template>`,IB={__name:"DisabledDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Disabled",code:DB},{description:i(()=>[n(" A segment may show its content is disabled ")]),example:i(()=>[t(r(N),{disabled:""},{default:i(()=>[LB]),_:1})]),_:1}))}},EB=`<template>
  <SuiSegment loading>
    <SuiImage src="/images/wireframe/paragraph.png" />
  </SuiSegment>
</template>`,RB={__name:"LoadingDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Loading",code:EB},{description:i(()=>[n(" A segment may show its content is being loaded ")]),example:i(()=>[t(r(N),{loading:""},{default:i(()=>[t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}))}},zB=S("p",null,"I'm here to tell you something, and you will probably read me first.",-1),PB=`<template>
  <SuiSegment inverted>
    <p>I'm here to tell you something, and you will probably read me first.</p>
  </SuiSegment>
</template>`,FB={__name:"InvertedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Inverted",code:PB},{description:i(()=>[n(" A segment can have its colors inverted for contrast ")]),example:i(()=>[t(r(N),{inverted:""},{default:i(()=>[zB]),_:1})]),_:1}))}},VB=S("p",null,"This segment is on top",-1),MB=S("p",null,"This segment is attached on both sides",-1),HB=S("p",null,"This segment is on bottom",-1),NB=`<template>
  <SuiSegment attached="top">
    <p>This segment is on top</p>
  </SuiSegment>
  <SuiSegment attached>
    <p>This segment is attached on both sides</p>
  </SuiSegment>
  <SuiSegment attached="bottom">
    <p>This segment is on bottom</p>
  </SuiSegment>
</template>`,OB={__name:"AttachedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Attached",code:NB},{description:i(()=>[n(" A segment can be attached to other content on a page ")]),example:i(()=>[t(r(N),{attached:"top"},{default:i(()=>[VB]),_:1}),t(r(N),{attached:""},{default:i(()=>[MB]),_:1}),t(r(N),{attached:"bottom"},{default:i(()=>[HB]),_:1})]),_:1}))}},qB=S("p",null,"Padded content.",-1),GB=S("p",null,"Padded content.",-1),jB=`<template>
  <SuiSegment padded>
    <p>Padded content.</p>
  </SuiSegment>
  <SuiSegment padded="very">
    <p>Padded content.</p>
  </SuiSegment>
</template>`,UB={__name:"PaddedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Padded",code:jB},{description:i(()=>[n(" A segment can increase its padding ")]),example:i(()=>[t(r(N),{padded:""},{default:i(()=>[qB]),_:1}),t(r(N),{padded:"very"},{default:i(()=>[GB]),_:1})]),_:1}))}},YB=S("p",null,"Fitted Segment",-1),JB=S("p",null,"Horizontally fitted segment",-1),WB=S("p",null,"Vertically fitted segment",-1),KB=`<template>
  <SuiSegment fitted>
    <p>Fitted Segment</p>
  </SuiSegment>
  <SuiSegment fitted="horizontally">
    <p>Horizontally fitted segment</p>
  </SuiSegment>
  <SuiSegment fitted="vertically">
    <p>Vertically fitted segment</p>
  </SuiSegment>
</template>`,XB={__name:"FittedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Fitted",code:KB},{description:i(()=>[n(" A segment can remove its padding, vertically or horizontally ")]),example:i(()=>[t(r(N),{fitted:""},{default:i(()=>[YB]),_:1}),t(r(N),{fitted:"horizontally"},{default:i(()=>[JB]),_:1}),t(r(N),{fitted:"vertically"},{default:i(()=>[WB]),_:1})]),_:1}))}},QB=S("p",null,"Pellentesque habitant morbi",-1),ZB=S("p",null,"Pellentesque habitant morbi",-1),eT=S("p",null,"Pellentesque habitant morbi",-1),tT=`<template>
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
</template>`,iT={__name:"CompactDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Compact",code:tT},{description:i(()=>[n(" A segment may take up only as much space as is necessary ")]),example:i(()=>[t(r(N),{compact:""},{default:i(()=>[QB]),_:1}),t(r(Ct),{compact:""},{default:i(()=>[t(r(N),null,{default:i(()=>[ZB]),_:1}),t(r(N),null,{default:i(()=>[eT]),_:1})]),_:1})]),_:1}))}},lT=`<template>
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
</template>`,aT={__name:"ColoredDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Colored",code:lT},{description:i(()=>[n(" A segment can be colored ")]),example:i(()=>[t(r(N),{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(r(N),{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(r(N),{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(r(N),{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(r(N),{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(r(N),{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(r(N),{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(r(N),{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(r(N),{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(r(N),{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(r(N),{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(r(N),{color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(r(N),{color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},nT=S("p",null,"I'm here to tell you something, and you will probably read me first.",-1),oT=S("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),sT=S("p",null,"If you notice me you must be looking very hard.",-1),rT=S("p",null,"I'm here to tell you something, and you will probably read me first.",-1),uT=S("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),cT=S("p",null,"If you notice me you must be looking very hard.",-1),dT=S("p",null,"I'm here to tell you something, and you will probably read me first.",-1),mT=S("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),pT=S("p",null,"If you notice me you must be looking very hard.",-1),fT=`<template>
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
</template>`,gT={__name:"EmphasisDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Emphasis",code:fT},{description:i(()=>[n(" A segment can be formatted to appear more or less noticeable ")]),example:i(()=>[t(r(N),null,{default:i(()=>[nT]),_:1}),t(r(N),{secondary:""},{default:i(()=>[oT]),_:1}),t(r(N),{tertiary:""},{default:i(()=>[sT]),_:1}),t(r(Fe)),t(r(N),{inverted:""},{default:i(()=>[rT]),_:1}),t(r(N),{secondary:"",inverted:""},{default:i(()=>[uT]),_:1}),t(r(N),{tertiary:"",inverted:""},{default:i(()=>[cT]),_:1}),t(r(Fe)),t(r(N),{inverted:"",color:"red"},{default:i(()=>[dT]),_:1}),t(r(N),{secondary:"",inverted:"",color:"red"},{default:i(()=>[mT]),_:1}),t(r(N),{tertiary:"",inverted:"",color:"red"},{default:i(()=>[pT]),_:1})]),_:1}))}},hT=`<template>
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
</template>`,_T={__name:"CircularDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Circular",code:hT},{description:i(()=>[n(" A segment can be circular ")]),example:i(()=>[t(r(N),{circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[t(r(fe),{as:"h2"},{default:i(()=>[n(" Buy Now "),t(r(Ji),null,{default:i(()=>[n("$10.99")]),_:1})]),_:1})]),_:1}),t(r(N),{circular:"",inverted:"",style:{width:"175px",height:"175px"}},{default:i(()=>[t(r(fe),{as:"h2"},{default:i(()=>[n(" Buy Now "),t(r(Ji),null,{default:i(()=>[n("$10.99")]),_:1})]),_:1})]),_:1})]),_:1}))}},bT=`<template>
  <SuiSegment clearing>
    <SuiButton floated="right" content="Floated" />
  </SuiSegment>
</template>`,vT={__name:"ClearingDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Clearing",code:bT},{description:i(()=>[n(" A segment can clear floated content ")]),example:i(()=>[t(r(N),{clearing:""},{default:i(()=>[t(r(z),{floated:"right",content:"Floated"})]),_:1})]),_:1}))}},ST=S("p",null,"This segment will appear to the right",-1),yT=S("p",null,"This segment will appear to the left",-1),wT=`<template>
  <SuiSegment floated="right">
    <p>This segment will appear to the right</p>
  </SuiSegment>
  <SuiSegment floated="left">
    <p>This segment will appear to the left</p>
  </SuiSegment>
</template>`,CT={__name:"FloatedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Floated",code:wT},{description:i(()=>[n(" A segment can appear to the left or right of other content ")]),example:i(()=>[t(r(N),{floated:"right"},{default:i(()=>[ST]),_:1}),t(r(N),{floated:"left"},{default:i(()=>[yT]),_:1})]),_:1}))}},AT=`<template>
  <SuiSegment textAlign="right">Right</SuiSegment>
  <SuiSegment textAlign="left">Left</SuiSegment>
  <SuiSegment textAlign="center">Center</SuiSegment>
</template>`,xT={__name:"TextAlignmentDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Text Alignment",code:AT},{description:i(()=>[n(" A segment can have its text aligned to a side ")]),example:i(()=>[t(r(N),{textAlign:"right"},{default:i(()=>[n("Right")]),_:1}),t(r(N),{textAlign:"left"},{default:i(()=>[n("Left")]),_:1}),t(r(N),{textAlign:"center"},{default:i(()=>[n("Center")]),_:1})]),_:1}))}},kT=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),$T=`<template>
  <SuiSegment basic>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,BT={__name:"BasicDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Basic",code:$T},{description:i(()=>[n(" A basic segment has no special formatting ")]),example:i(()=>[t(r(N),{basic:""},{default:i(()=>[kT]),_:1})]),_:1}))}},TT=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),LT=S("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),DT=S("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),IT=S("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),ET=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),RT=S("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),zT=S("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),PT=S("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),FT=`<template>
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
</template>`,VT={__name:"ScrollingDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Scrolling",code:FT},{description:i(()=>[n(" A scrolling segment has a predefined height to allow its content to be scrollable ")]),example:i(()=>[t(r(N),{scrolling:""},{default:i(()=>[TT,LT,DT,IT,ET,RT,zT,PT]),_:1})]),_:1}))}},MT=`<template>
  <SuiSegment size="mini">Mini</SuiSegment>
  <SuiSegment size="tiny">Tiny</SuiSegment>
  <SuiSegment size="small">Small</SuiSegment>
  <SuiSegment>Default</SuiSegment>
  <SuiSegment size="large">Large</SuiSegment>
  <SuiSegment size="big">Big</SuiSegment>
  <SuiSegment size="huge">Huge</SuiSegment>
  <SuiSegment size="massive">Massive</SuiSegment>
</template>`,HT={__name:"SizeDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Size",code:MT},{description:i(()=>[n(" A segment can vary in size ")]),example:i(()=>[t(r(N),{size:"mini"},{default:i(()=>[n("Mini")]),_:1}),t(r(N),{size:"tiny"},{default:i(()=>[n("Tiny")]),_:1}),t(r(N),{size:"small"},{default:i(()=>[n("Small")]),_:1}),t(r(N),null,{default:i(()=>[n("Default")]),_:1}),t(r(N),{size:"large"},{default:i(()=>[n("Large")]),_:1}),t(r(N),{size:"big"},{default:i(()=>[n("Big")]),_:1}),t(r(N),{size:"huge"},{default:i(()=>[n("Huge")]),_:1}),t(r(N),{size:"massive"},{default:i(()=>[n("Massive")]),_:1})]),_:1}))}},NT={__name:"Segment",setup(e){const l=[{id:"segment",label:"Segment",category:"Types",component:b$},{id:"placeholder-segment",label:"Placeholder Segment",category:"Types",component:S$},{id:"raised",label:"Raised",category:"Types",component:C$},{id:"stacked",label:"Stacked",category:"Types",component:$$},{id:"piled",label:"Piled",category:"Types",component:I$},{id:"vertical-segment",label:"Vertical Segment",category:"Types",component:F$},{id:"segments",label:"Segments",category:"Groups",component:J$},{id:"nested-segments",label:"Nested Segments",category:"Groups",component:nB},{id:"horizontal-segments",label:"Horizontal Segments",category:"Groups",component:cB},{id:"horizontal-equal-width-segments",label:"Horizontal equal width Segments",category:"Groups",component:mB},{id:"horizontal-wrapping-segments",label:"Horizontal wrapping Segments",category:"Groups",component:fB},{id:"raised-segments",label:"Raised Segments",category:"Groups",component:vB},{id:"stacked-segments",label:"Stacked Segments",category:"Groups",component:AB},{id:"piled-segments",label:"Piled Segments",category:"Groups",component:TB},{id:"disabled",label:"Disabled",category:"States",component:IB},{id:"loading",label:"Loading",category:"States",component:RB},{id:"inverted",label:"Inverted",category:"Variations",component:FB},{id:"attached",label:"Attached",category:"Variations",component:OB},{id:"padded",label:"Padded",category:"Variations",component:UB},{id:"fitted",label:"Fitted",category:"Variations",component:XB},{id:"compact",label:"Compact",category:"Variations",component:iT},{id:"colored",label:"Colored",category:"Variations",component:aT},{id:"emphasis",label:"Emphasis",category:"Variations",component:gT},{id:"circular",label:"Circular",category:"Variations",component:_T},{id:"clearing",label:"Clearing",category:"Variations",component:vT},{id:"floated",label:"Floated",category:"Variations",component:CT},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:xT},{id:"basic",label:"Basic",category:"Variations",component:BT},{id:"scrolling",label:"Scrolling",category:"Variations",component:VT},{id:"size",label:"Size",category:"Variations",component:HT}];return(a,o)=>(A(),B(rt,{title:"Segment",description:"A segment is used to create a grouping of related content","component-docs":l}))}},OT=P({name:"StepDoc",components:{DocExample:lt},setup(){return{stepCode:`<sui-step-group>
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
</sui-segment>`}}}),qT={class:"intro"},GT=S("p",null,"The steps take up the entire column width",-1),jT=S("p",null,"Main content",-1);function UT(e,l,a,o,s,c){const m=C("sui-header-subheader"),f=C("sui-header"),u=C("sui-divider"),d=C("sui-icon"),g=C("sui-menu-item"),p=C("sui-menu"),_=C("sui-container"),w=C("sui-segment"),v=C("sui-step"),x=C("sui-step-group"),$=C("doc-example"),L=C("sui-step-title"),h=C("sui-step-description"),b=C("sui-step-content"),k=C("sui-grid-column"),T=C("sui-grid");return A(),be("div",null,[t(w,{vertical:""},{default:i(()=>[t(_,{class:"main"},{default:i(()=>[S("div",qT,[t(f,{as:"h1"},{default:i(()=>[n("Step "),t(m,null,{default:i(()=>[n(" A step shows the completion status of an activity in a series of activities ")]),_:1})]),_:1}),t(u,{hidden:""}),t(p,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(d,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(d,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(_,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t($,{title:"Step",description:"A single step",code:e.stepCode},{default:i(()=>[t(x,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Shipping")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Groups")]),_:1}),t($,{title:"Steps",description:"A set of steps",code:e.stepsCode},{default:i(()=>[t(x,null,{default:i(()=>[t(v,null,{default:i(()=>[t(d,{name:"truck"}),t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Shipping")]),_:1}),t(h,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(v,{active:""},{default:i(()=>[t(d,{name:"payment"}),t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Billing")]),_:1}),t(h,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(v,{disabled:""},{default:i(()=>[t(d,{name:"info"}),t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Ordered",description:"A step can show a ordered sequence of steps",code:e.orderedCode},{default:i(()=>[t(x,{ordered:""},{default:i(()=>[t(v,{completed:""},{default:i(()=>[t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Shipping")]),_:1}),t(h,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(v,{completed:""},{default:i(()=>[t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Billing")]),_:1}),t(h,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(v,{active:""},{default:i(()=>[t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(h,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Vertical",description:"A step can be displayed stacked vertically",code:e.verticalCode},{default:i(()=>[t(x,{vertical:""},{default:i(()=>[t(v,{completed:""},{default:i(()=>[t(d,{name:"truck"}),t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Shipping")]),_:1}),t(h,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(v,{completed:""},{default:i(()=>[t(d,{name:"credit card"}),t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Billing")]),_:1}),t(h,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(v,{active:""},{default:i(()=>[t(d,{name:"info"}),t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(h,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t($,{title:"Description",description:"A step can contain a description",code:e.descriptionCode},{default:i(()=>[t(x,null,{default:i(()=>[t(v,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Shipping")]),_:1}),t(h,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Icon",description:"A step can contain an icon",code:e.iconCode},{default:i(()=>[t(x,null,{default:i(()=>[t(v,null,{default:i(()=>[t(d,{name:"truck"}),t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Shipping")]),_:1}),t(h,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Link",description:"A step can link",code:e.linkCode},{default:i(()=>[t(x,null,{default:i(()=>[t(v,{link:""},{default:i(()=>[t(d,{name:"truck"}),t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Shipping")]),_:1}),t(h,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Billing")]),_:1}),t(h,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t($,{title:"Active",description:"A step can be highlighted as active",code:e.activeCode},{default:i(()=>[t(x,null,{default:i(()=>[t(v,{active:""},{default:i(()=>[t(d,{name:"payment"}),t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Billing")]),_:1}),t(h,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Completed",description:"A step can show that a user has completed it",code:e.completedCode},{default:i(()=>[t(x,null,{default:i(()=>[t(v,{completed:""},{default:i(()=>[t(d,{name:"payment"}),t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Billing")]),_:1}),t(h,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Disabled",description:"A step can show that it cannot be selected",code:e.disabledCode},{default:i(()=>[t(x,null,{default:i(()=>[t(v,{disabled:""},{default:i(()=>[n("Billing")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t($,{title:"Stackable",description:"A step can stack vertically only on smaller screens",code:e.stackableCode},{default:i(()=>[t(x,{stackable:"tablet"},{default:i(()=>[t(v,null,{default:i(()=>[t(d,{name:"plane"}),t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Shipping")]),_:1}),t(h,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(v,{active:""},{default:i(()=>[t(d,{name:"dollar"}),t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Billing")]),_:1}),t(h,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(v,{disabled:""},{default:i(()=>[t(d,{name:"info circle"}),t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(h,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Unstackable",description:"A step can prevent itself from stacking on mobile",code:e.unstackableCode},{default:i(()=>[t(x,{unstackable:""},{default:i(()=>[t(v,null,{default:i(()=>[t(d,{name:"plane"}),t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Shipping")]),_:1}),t(h,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(v,{active:""},{default:i(()=>[t(d,{name:"dollar"}),t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Billing")]),_:1}),t(h,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(v,{disabled:""},{default:i(()=>[t(d,{name:"info circle"}),t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(h,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Fluid",description:"A fluid step takes up the width of its container",code:e.fluidCode},{default:i(()=>[t(T,{columns:2},{default:i(()=>[t(k,null,{default:i(()=>[t(x,{fluid:"",vertical:""},{default:i(()=>[t(v,{completed:""},{default:i(()=>[t(d,{name:"truck"}),t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Shipping")]),_:1}),t(h,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(v,{active:""},{default:i(()=>[t(d,{name:"dollar"}),t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Billing")]),_:1}),t(h,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(k,null,{default:i(()=>[GT]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Attached",description:"Steps can be attached to other elements",code:e.attachedCode},{default:i(()=>[S("div",null,[t(x,{attached:"top"},{default:i(()=>[t(v,null,{default:i(()=>[t(d,{name:"truck"}),t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Shipping")]),_:1}),t(h,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(v,{active:""},{default:i(()=>[t(d,{name:"payment"}),t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Billing")]),_:1}),t(h,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1}),t(w,{attached:""},{default:i(()=>[jT]),_:1}),t(x,{attached:"bottom"},{default:i(()=>[t(v,null,{default:i(()=>[t(d,{name:"truck"}),t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Shipping")]),_:1}),t(h,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(v,{active:""},{default:i(()=>[t(d,{name:"payment"}),t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Billing")]),_:1}),t(h,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t($,{title:"Evenly Divided",description:"Steps can be divided evenly inside their parent",code:e.evenlyDividedCode},{default:i(()=>[t(x,{widths:2},{default:i(()=>[t(v,{active:""},{default:i(()=>[t(d,{name:"payment"}),t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Billing")]),_:1})]),_:1})]),_:1}),t(v,{disabled:""},{default:i(()=>[t(d,{name:"info"}),t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Size",description:"Steps can have different sizes",code:e.sizeCode},{default:i(()=>[t(x,{size:"mini"},{default:i(()=>[t(v,{active:""},{default:i(()=>[t(d,{name:"payment"}),t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Billing")]),_:1})]),_:1})]),_:1}),t(v,{disabled:""},{default:i(()=>[t(d,{name:"info"}),t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Inverted",description:"A step's color can be inverted",code:e.invertedCode},{default:i(()=>[t(w,{inverted:""},{default:i(()=>[t(x,{inverted:"",vertical:""},{default:i(()=>[t(v,{completed:""},{default:i(()=>[t(d,{name:"truck"}),t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Shipping")]),_:1}),t(h,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(v,{completed:""},{default:i(()=>[t(d,{name:"credit card"}),t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Billing")]),_:1}),t(h,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(v,{active:""},{default:i(()=>[t(d,{name:"info"}),t(b,null,{default:i(()=>[t(L,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(h,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const YT=Re(OT,[["render",UT]]),JT=`<template>
  <SuiBreadcrumb
    :sections="[
      { content: 'Home', link: true },
      { content: 'Store', link: true },
      { content: 'T-Shirt', active: true }
    ]"
    icon="right angle"
  />
</template>`,WT={__name:"BreadcrumbDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Breadcrumb",code:JT},{description:i(()=>[n(" A standard breadcrumb ")]),example:i(()=>[t(r(ni),{sections:[{content:"Home",link:!0},{content:"Store",link:!0},{content:"T-Shirt",active:!0}],icon:"right angle"})]),_:1}))}},KT=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection link>Registration</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Personal Information</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,XT={__name:"DividerDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Divider",code:KT},{description:i(()=>[n(" A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text. ")]),example:i(()=>[t(r(ni),null,{default:i(()=>[t(r(et),{link:""},{default:i(()=>[n("Home")]),_:1}),t(r(Dt),null,{default:i(()=>[n(" / ")]),_:1}),t(r(et),{link:""},{default:i(()=>[n("Registration")]),_:1}),t(r(Dt),null,{default:i(()=>[n(" / ")]),_:1}),t(r(et),{active:""},{default:i(()=>[n("Personal Information")]),_:1})]),_:1})]),_:1}))}},QT=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Search</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,ZT={__name:"SectionDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Section",code:QT},{description:i(()=>[n(" A breadcrumb can contain sections that can either be formatted as a link or text ")]),example:i(()=>[t(r(ni),null,{default:i(()=>[t(r(et),{link:""},{default:i(()=>[n("Home")]),_:1}),t(r(Dt),null,{default:i(()=>[n(" / ")]),_:1}),t(r(et),{active:""},{default:i(()=>[n("Search")]),_:1})]),_:1})]),_:1}))}},eL=S("a",{href:"#"},"paper towels",-1),tL=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Search for: <a href="#">paper towels</a></SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,iL={__name:"LinkDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Link",code:tL},{description:i(()=>[n(" A section may be linkable or contain a link ")]),example:i(()=>[t(r(ni),null,{default:i(()=>[t(r(et),{link:""},{default:i(()=>[n("Home")]),_:1}),t(r(Dt),null,{default:i(()=>[n(" / ")]),_:1}),t(r(et),{active:""},{default:i(()=>[n("Search for: "),eL]),_:1})]),_:1})]),_:1}))}},lL=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Products</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Paper Towels</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,aL={__name:"ActiveDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Active",code:lL},{description:i(()=>[n(" A section can be active ")]),example:i(()=>[t(r(ni),null,{default:i(()=>[t(r(et),{link:""},{default:i(()=>[n("Products")]),_:1}),t(r(Dt),null,{default:i(()=>[n(" / ")]),_:1}),t(r(et),{active:""},{default:i(()=>[n("Paper Towels")]),_:1})]),_:1})]),_:1}))}},nL=S("br",null,null,-1),oL=`<template>
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
</template>`,sL={__name:"InvertedDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Inverted",code:oL},{description:i(()=>[n(" A breadcrumb can be inverted ")]),example:i(()=>[t(r(N),{inverted:""},{default:i(()=>[t(r(ni),{inverted:""},{default:i(()=>[t(r(et),{link:""},{default:i(()=>[n("Home")]),_:1}),t(r(Dt),null,{default:i(()=>[n(" / ")]),_:1}),t(r(et),{link:""},{default:i(()=>[n("Registration")]),_:1}),t(r(Dt),null,{default:i(()=>[n(" / ")]),_:1}),t(r(et),{active:""},{default:i(()=>[n("Personal Information")]),_:1})]),_:1}),nL,t(r(ni),{inverted:""},{default:i(()=>[t(r(et),null,{default:i(()=>[n("Home")]),_:1}),t(r(Dt),null,{default:i(()=>[n(" / ")]),_:1}),t(r(et),null,{default:i(()=>[n("Registration")]),_:1}),t(r(Dt),null,{default:i(()=>[n(" / ")]),_:1}),t(r(et),{active:""},{default:i(()=>[n("Personal Information")]),_:1})]),_:1})]),_:1})]),_:1}))}},rL=`<template>
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
</template>`,uL={__name:"SizeDoc",setup(e){const l=["mini","tiny","small","large","big","huge","massive"];return(a,o)=>(A(),B(I,{label:"Size",code:rL},{description:i(()=>[n(" A breadcrumb can vary in size ")]),example:i(()=>[(A(),be(Ae,null,Qe(l,s=>(A(),be(Ae,{key:s},[t(r(ni),{size:s},{default:i(()=>[t(r(et),{link:""},{default:i(()=>[n("Home")]),_:1}),t(r(Dt),null,{default:i(()=>[n(" / ")]),_:1}),t(r(et),{link:""},{default:i(()=>[n("Registration")]),_:1}),t(r(Dt),null,{default:i(()=>[n(" / ")]),_:1}),t(r(et),{active:""},{default:i(()=>[n("Personal Information")]),_:1})]),_:2},1032,["size"]),t(r(Fe),{hidden:""})],64))),64))]),_:1}))}},cL={__name:"Breadcrumb",setup(e){const l=[{id:"breadcrumb",label:"Breadcrumb",category:"Types",component:WT},{id:"divider",label:"Divider",category:"Content",component:XT},{id:"section",label:"Section",category:"Content",component:ZT},{id:"link",label:"Link",category:"Content",component:iL},{id:"active",label:"Active",category:"States",component:aL},{id:"inverted",label:"Inverted",category:"Variations",component:sL},{id:"size",label:"Size",category:"Variations",component:uL}];return(a,o)=>(A(),B(rt,{title:"Breadcrumb",description:"A standard breadcrumb","component-docs":l}))}},dL=`<template>
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
</template>`,mL={__name:"FormDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Form",code:dL},{description:i(()=>[n(" A Form ")]),example:i(()=>[t(r(Nt),null,{default:i(()=>[t(r(it),{label:"First Name",placeholder:"First Name"}),t(r(it),{label:"Last Name",placeholder:"Last Name"}),t(r(it),null,{default:i(()=>[t(r(ed),{label:"I agree to the Terms and Conditions"})]),_:1}),t(r(z),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},pL=`<template>
  <SuiForm>
    <SuiFormField
      label="User Input"
    />
  </SuiForm>
</template>`,fL={__name:"FieldDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Field",code:pL},{description:i(()=>[n(" A field is a form element containing a label and an input ")]),example:i(()=>[t(r(Nt),null,{default:i(()=>[t(r(it),{label:"User Input"})]),_:1})]),_:1}))}},gL=`<template>
  <SuiForm>
    <SuiFormGroup>
      <SuiFormField label="First Name" />
      <SuiFormField label="Middle Name" />
      <SuiFormField label="Last Name" />
    </SuiFormGroup>
  </SuiForm>
</template>`,hL={__name:"FieldsDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Fields",code:gL},{description:i(()=>[n(" A set of fields can appear grouped together ")]),example:i(()=>[t(r(Nt),null,{default:i(()=>[t(r(fs),null,{default:i(()=>[t(r(it),{label:"First Name"}),t(r(it),{label:"Middle Name"}),t(r(it),{label:"Last Name"})]),_:1})]),_:1})]),_:1}))}},_L=`<template>
  <SuiForm>
    <SuiFormTextarea label="Text" />
    <SuiFormTextarea label="Short Text" :rows="2" />
  </SuiForm>
</template>`,bL={__name:"TextAreaDoc",setup(e){return(l,a)=>(A(),B(I,{label:"TextArea",code:_L},{description:i(()=>[n(" A textarea can be used to allow for extended user input. ")]),example:i(()=>[t(r(Nt),null,{default:i(()=>[t(r(yo),{label:"Text"}),t(r(yo),{label:"Short Text",rows:2})]),_:1})]),_:1}))}},vL=`<template>
  <SuiForm loading>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,SL={__name:"LoadingDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Loading",code:vL},{description:i(()=>[n(" If a form is in loading state, it will automatically show a loading indicator. ")]),example:i(()=>[t(r(Nt),{loading:""},{default:i(()=>[t(r(it),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(r(z),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},yL=`<template>
  <SuiForm success>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      success
      header='Form Completed'
      content="You're all signed up for the newsletter"
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,wL={__name:"SuccessDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Success",code:yL},{description:i(()=>[n(" If a form is in an success state, it will automatically show any success message blocks. ")]),example:i(()=>[t(r(Nt),{success:""},{default:i(()=>[t(r(it),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(r(Cn),{success:"",header:"Form Completed",content:"You're all signed up for the newsletter"}),t(r(z),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},CL=`<template>
  <SuiForm error>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      error
      header='Action Forbidden'
      content='You can only sign up for an account once with a given e-mail address.'
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,AL={__name:"ErrorDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Error",code:CL},{description:i(()=>[n(" If a form is in an error state, it will automatically show any error message blocks. ")]),example:i(()=>[t(r(Nt),{error:""},{default:i(()=>[t(r(it),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(r(Cn),{error:"",header:"Action Forbidden",content:"You can only sign up for an account once with a given e-mail address."}),t(r(z),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},xL=`<template>
  <SuiForm warning>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      warning
      header='Could you check something!'
      content='That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.'
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,kL={__name:"WarningDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Warning",code:xL},{description:i(()=>[n(" If a form is in warning state, it will automatically show any warning message block. ")]),example:i(()=>[t(r(Nt),{warning:""},{default:i(()=>[t(r(it),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(r(Cn),{warning:"",header:"Could you check something!",content:"That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail."}),t(r(z),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},$L=`<template>
  <SuiForm>
    <SuiFormGroup>
      <SuiFormField disabled label="First name" placeholder="Read only" />
      <SuiFormField disabled label="Last name" placeholder="Disabled" />
    </SuiFormGroup>
  </SuiForm>
</template>`,BL={__name:"DisabledDoc",setup(e){return(l,a)=>(A(),B(I,{label:"Disabled",code:$L},{description:i(()=>[n(" Individual fields may be disabled ")]),example:i(()=>[t(r(Nt),null,{default:i(()=>[t(r(fs),null,{default:i(()=>[t(r(it),{disabled:"",label:"First name",placeholder:"Read only"}),t(r(it),{disabled:"",label:"Last name",placeholder:"Disabled"})]),_:1})]),_:1})]),_:1}))}},TL={__name:"Form",setup(e){const l=[{id:"form",label:"Form",category:"Types",component:mL},{id:"field",label:"Field",category:"Content",component:fL},{id:"fields",label:"Fields",category:"Content",component:hL},{id:"textarea",label:"TextArea",category:"Content",component:bL},{id:"loading",label:"Loading",category:"Form States",component:SL},{id:"success",label:"Success",category:"Form States",component:wL},{id:"error",label:"Error",category:"Form States",component:AL},{id:"warning",label:"Warning",category:"Form States",component:kL},{id:"disabled",label:"Disabled",category:"Field States",component:BL}];return(a,o)=>(A(),B(rt,{title:"Form",description:"A form displays a set of related user input fields in a structured way","component-docs":l}))}},LL=P({name:"DocPageHeader",props:{title:String,sub:String}}),DL={class:"intro",style:{padding:"2rem"}};function IL(e,l,a,o,s,c){const m=C("sui-header-subheader"),f=C("sui-header"),u=C("sui-divider"),d=C("sui-icon"),g=C("sui-menu-item"),p=C("sui-menu"),_=C("sui-container"),w=C("sui-segment");return A(),B(w,{vertical:""},{default:i(()=>[t(_,{class:"main"},{default:i(()=>[S("div",DL,[t(f,{as:"h1"},{default:i(()=>[n(Te(e.title)+" ",1),t(m,null,{default:i(()=>[n(Te(e.sub),1)]),_:1})]),_:1}),t(u,{hidden:""}),t(p,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(d,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(d,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1})}const pt=Re(LL,[["render",IL]]),pe="/vue-fomantic-ui/images/wireframe/image.png",ei="/vue-fomantic-ui/images/wireframe/media-paragraph.png",Oe="/vue-fomantic-ui/images/wireframe/paragraph.png",Or="/vue-fomantic-ui/images/wireframe/centered-paragraph.png",EL=P({name:"GridDoc",components:{DocPageHeader:pt,DocExample:lt},setup(){return{numbers:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],gridCode:`<sui-grid>
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
</sui-grid>`}}}),RL=S("br",null,null,-1);function zL(e,l,a,o,s,c){const m=C("doc-page-header"),f=C("sui-header"),u=C("sui-image"),d=C("sui-grid-column"),g=C("sui-grid"),p=C("doc-example"),_=C("sui-grid-row"),w=C("sui-segment"),v=C("sui-divider"),x=C("sui-menu-item"),$=C("sui-menu"),L=C("sui-container");return A(),be("div",null,[t(m,{title:"Grid",sub:"A grid is used to harmonize negative space in a layout"}),t(L,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(p,{title:"Grid",description:"A basic grid",code:e.gridCode},{default:i(()=>[t(g,null,{default:i(()=>[(A(!0),be(Ae,null,Qe(e.numbers,h=>(A(),B(d,{key:h},{default:i(()=>[t(u,{src:pe})]),_:2},1024))),128))]),_:1})]),_:1},8,["code"]),t(p,{title:"Divided",description:"A grid can have dividers between its columns",code:e.dividedCode},{default:i(()=>[t(g,{columns:3,divided:""},{default:i(()=>[t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,{src:ei})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:ei})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:ei})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,{src:ei})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:ei})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:ei})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Vertical Divided",description:"A grid can have dividers between rows",code:e.verticalDividedCode},{default:i(()=>[t(g,{divided:"vertically"},{default:i(()=>[t(_,{columns:2},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Oe})]),_:1})]),_:1}),t(_,{columns:3},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Oe})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Celled",description:"A grid can have rows divided into cells",code:e.celledCode},{default:i(()=>[t(g,{celled:""},{default:i(()=>[t(_,null,{default:i(()=>[t(d,{width:3},{default:i(()=>[t(u,{src:pe})]),_:1}),t(d,{width:13},{default:i(()=>[t(u,{src:Or})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,{width:3},{default:i(()=>[t(u,{src:pe})]),_:1}),t(d,{width:10},{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,{width:3},{default:i(()=>[t(u,{src:pe})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Internally Celled",description:"A grid can have rows divisions only between internal rows",code:e.internallyCelledCode},{default:i(()=>[t(g,{celled:"internally"},{default:i(()=>[t(_,null,{default:i(()=>[t(d,{width:3},{default:i(()=>[t(u,{src:pe})]),_:1}),t(d,{width:13},{default:i(()=>[t(u,{src:Or})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,{width:3},{default:i(()=>[t(u,{src:pe})]),_:1}),t(d,{width:10},{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,{width:3},{default:i(()=>[t(u,{src:pe})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(p,{title:"Rows",description:"A row is a horizontal grouping of columns",code:e.rowsCode},{default:i(()=>[t(g,{columns:3},{default:i(()=>[t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Oe})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Oe})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Columns",description:"Columns each contain gutters giving them equal spacing from other columns",code:e.columnsCode},{default:i(()=>[t(g,null,{default:i(()=>[t(d,{width:8},{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,{width:8},{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,{width:8},{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,{width:8},{default:i(()=>[t(u,{src:Oe})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(p,{title:"Floated",description:"A column can sit flush against the left or right edge of a row",code:e.floatedCode},{default:i(()=>[t(g,null,{default:i(()=>[t(d,{floated:"left",width:5},{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,{floated:"right",width:5},{default:i(()=>[t(u,{src:Oe})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Column Width",description:"A column can vary in width taking up more than a single grid column",code:e.columnWidthCode},{default:i(()=>[t(g,null,{default:i(()=>[t(d,{width:4},{default:i(()=>[t(u,{src:pe})]),_:1}),t(d,{width:9},{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,{width:3},{default:i(()=>[t(u,{src:ei})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Column Count",description:"A grid can have a different number of columns per row",code:e.columnCountCode},{default:i(()=>[t(g,null,{default:i(()=>[t(_,{columns:3},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{src:pe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:pe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:pe})]),_:1})]),_:1}),t(_,{columns:4},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{src:pe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:pe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:pe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:pe})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Equal Width",description:"Equal Width",code:e.equalWidthCode},{default:i(()=>[t(g,{columns:"equal"},{default:i(()=>[t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("1")]),_:1})]),_:1}),t(d,{width:8},{default:i(()=>[t(w,null,{default:i(()=>[n("2")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("3")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Stretched",description:"A row can stretch its contents to take up the entire column height",code:e.stretchedCode},{default:i(()=>[t(g,{columns:3,divided:""},{default:i(()=>[t(_,{stretched:""},{default:i(()=>[t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("1")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("1")]),_:1}),t(w,null,{default:i(()=>[n("2")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("1")]),_:1}),t(w,null,{default:i(()=>[n("2")]),_:1}),t(w,null,{default:i(()=>[n("3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Padded",description:"A grid can preserve its vertical and horizontal gutters on first and last columns",code:e.paddedCode},{default:i(()=>[S("div",null,[t(v),t(g,{padded:"",columns:2},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Oe})]),_:1})]),_:1})])]),_:1},8,["code"]),t(p,{title:"Relaxed",description:"A grid can increase its gutters to allow for more negative space",code:e.relaxedCode},{default:i(()=>[t(g,{relaxed:"",columns:4},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{src:pe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:pe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:pe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:pe})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Colored",description:"A row or column can be colored",code:e.coloredCode},{default:i(()=>[t(g,{padded:"",columns:5},{default:i(()=>[t(d,{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(d,{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(d,{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(d,{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(d,{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(d,{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(d,{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(d,{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(d,{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(d,{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(d,{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(d,{color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(d,{color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Centered",description:"A grid can have its columns centered",code:e.centeredCode},{default:i(()=>[t(g,{centered:"",columns:2},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{src:pe})]),_:1}),t(_,{centered:"",columns:4},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{src:pe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:pe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:pe})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Text Alignment",description:"A grid, row, or column can specify its text alignment",code:e.textAlignCode},{default:i(()=>[t(g,{textAlign:"center",columns:3},{default:i(()=>[t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t($,{vertical:"",fluid:""},{default:i(()=>[t(x,{header:""},{default:i(()=>[n("Cats")]),_:1})]),_:1})]),_:1}),t(d,null,{default:i(()=>[t($,{vertical:"",fluid:""},{default:i(()=>[t(x,{header:""},{default:i(()=>[n("Dogs")]),_:1}),t(x,null,{default:i(()=>[n("Poodle")]),_:1}),t(x,null,{default:i(()=>[n("Cockerspaniel")]),_:1})]),_:1})]),_:1}),t(d,null,{default:i(()=>[t($,{vertical:"",fluid:""},{default:i(()=>[t(x,{header:""},{default:i(()=>[n("Monkeys")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Vertical Alignment",description:"A grid, row, or column can specify its vertical alignment to have all its columns vertically centered",code:e.verticalAlignCode},{default:i(()=>[t(g,{verticalAlign:"middle",columns:4,centered:""},{default:i(()=>[t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,{src:pe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:pe}),RL,t(u,{src:pe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:pe})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Responsive Variations")]),_:1}),t(p,{title:"Doubling",description:"A grid can double its column width on tablet and mobile sizes",code:e.doublingCode},{default:i(()=>[t(g,{doubling:"",columns:5},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{src:pe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:pe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:pe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:pe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:pe})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"stackable",description:"A grid can have its columns stack on-top of each other after reaching mobile breakpoints",code:e.stackableCode},{default:i(()=>[t(g,{stackable:"",columns:2},{default:i(()=>[t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[t(u,{src:Oe})]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[t(u,{src:Oe})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Reversed",description:"A grid or row can specify that its columns should reverse order at different device sizes",code:e.reversedCode},{default:i(()=>[t(g,{reversed:"computer vertically"},{default:i(()=>[t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Computer Row 3")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Computer Row 2")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Computer Row 1")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Device Visibility",description:"A columns or row can appear only for a specific device, or screen sizes",code:e.deviceVisibilityCode},{default:i(()=>[t(g,null,{default:i(()=>[t(_,{only:"large screen",columns:2},{default:i(()=>[t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Large Screen")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Large Screen")]),_:1})]),_:1})]),_:1}),t(_,{only:"widescreen",columns:2},{default:i(()=>[t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Widescreen")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Widescreen")]),_:1})]),_:1})]),_:1}),t(_,{only:"mobile",columns:2},{default:i(()=>[t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Mobile")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Mobile")]),_:1})]),_:1})]),_:1}),t(_,{columns:3},{default:i(()=>[t(d,{only:"computer"},{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(d,{only:"mobile"},{default:i(()=>[t(w,null,{default:i(()=>[n("Tablet and Mobile")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("All Sizes")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("All Sizes")]),_:1})]),_:1})]),_:1}),t(_,{only:"computer",columns:4},{default:i(()=>[t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1})]),_:1}),t(_,{only:"tablet",columns:3},{default:i(()=>[t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Tablet")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Tablet")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Tablet")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Responsive Width",description:"A column can specify a width for a specific device",code:e.responsiveWidthCode},{default:i(()=>[t(g,null,{default:i(()=>[t(d,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(u,{src:Oe})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const PL=Re(EL,[["render",zL]]),FL="/vue-fomantic-ui/images/logo.png",VL=P({name:"MenuDoc",components:{DocPageHeader:pt,DocExample:lt},setup(){return{menuCode:`<sui-menu>
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
</sui-menu>`}}}),ML=S("p",null,"Check out our new promotions",-1),HL=S("p",null,"Check out our collection of coupons",-1),NL=S("p",null,"Visit our rebate forum for information on claiming rebates",-1),OL=S("img",{src:FL},null,-1);function qL(e,l,a,o,s,c){const m=C("doc-page-header"),f=C("sui-header"),u=C("sui-menu-item"),d=C("sui-menu"),g=C("doc-example"),p=C("sui-input"),_=C("sui-menu-menu"),w=C("sui-label"),v=C("sui-button"),x=C("sui-dropdown-item"),$=C("sui-dropdown-menu"),L=C("sui-dropdown"),h=C("sui-icon"),b=C("sui-segment"),k=C("sui-container");return A(),be("div",null,[t(m,{title:"Menu",sub:"A menu displays grouped navigation actions"}),t(k,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(g,{title:"Menu",description:"A menu",code:e.menuCode},{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Editorials")]),_:1}),t(u,null,{default:i(()=>[n("Reviews")]),_:1}),t(u,null,{default:i(()=>[n("Upcoming Events")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Secondary Menu",description:"A menu can adjust its appearance to de-emphasize its contents",code:e.secondaryMenuCode},{default:i(()=>[t(d,{secondary:""},{default:i(()=>[t(u,{active:""},{default:i(()=>[n("Home")]),_:1}),t(u,null,{default:i(()=>[n("Messages")]),_:1}),t(u,null,{default:i(()=>[n("Friends")]),_:1}),t(_,{position:"right"},{default:i(()=>[t(u,null,{default:i(()=>[t(p,{icon:"search",placeholder:"Search..."})]),_:1}),t(u,null,{default:i(()=>[n("logout")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Pointing",description:"A menu can point to show its relationship to nearby content",code:e.pointingCode},{default:i(()=>[t(d,{pointing:""},{default:i(()=>[t(u,{active:""},{default:i(()=>[n("Home")]),_:1}),t(u,null,{default:i(()=>[n("Messages")]),_:1}),t(u,null,{default:i(()=>[n("Friends")]),_:1}),t(_,{position:"right"},{default:i(()=>[t(u,null,{default:i(()=>[t(p,{transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Tabular",description:"A menu can be formatted to show tabs of information",code:e.tabularCode},{default:i(()=>[t(d,{tabular:""},{default:i(()=>[t(u,{active:""},{default:i(()=>[n("Bio")]),_:1}),t(u,null,{default:i(()=>[n("Photos")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Text",description:"A menu can be formatted for text content",code:e.textCode},{default:i(()=>[t(d,{text:""},{default:i(()=>[t(u,{header:""},{default:i(()=>[n("Sort By")]),_:1}),t(u,{active:""},{default:i(()=>[n("Closest")]),_:1}),t(u,null,{default:i(()=>[n("Most Comments")]),_:1}),t(u,null,{default:i(()=>[n("Most Popular")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Vertical Menu",description:"A vertical menu displays elements vertically",code:e.verticalMenuCode},{default:i(()=>[t(d,{vertical:""},{default:i(()=>[t(u,{active:"",color:"teal"},{default:i(()=>[n(" Inbox "),t(w,{color:"teal",pointing:"left"},{default:i(()=>[n("1")]),_:1})]),_:1}),t(u,null,{default:i(()=>[n(" Spam "),t(w,null,{default:i(()=>[n("51")]),_:1})]),_:1}),t(u,null,{default:i(()=>[n(" Updates "),t(w,null,{default:i(()=>[n("1")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(p,{transparent:"",icon:"search",placeholder:"Search mail..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Pagination",description:"A pagination menu is specially formatted to present links to pages of content",code:e.paginationCode},{default:i(()=>[t(d,{pagination:""},{default:i(()=>[t(u,{active:""},{default:i(()=>[n("1")]),_:1}),t(u,{disabled:""},{default:i(()=>[n("...")]),_:1}),t(u,null,{default:i(()=>[n("10")]),_:1}),t(u,null,{default:i(()=>[n("11")]),_:1}),t(u,null,{default:i(()=>[n("12")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(g,{title:"Header",description:"A menu item may include a header or may itself be a header",code:e.headerCode},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{header:""},{default:i(()=>[n("Our Company")]),_:1}),t(u,null,{default:i(()=>[n("About us")]),_:1}),t(u,null,{default:i(()=>[n("Jobs")]),_:1}),t(u,null,{default:i(()=>[n("Locations")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"textContentCode",description:"A vertical menu item can include any type of text content",code:e.textContentCode},{default:i(()=>[t(d,{vertical:""},{default:i(()=>[t(u,null,{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Promotions")]),_:1}),ML]),_:1}),t(u,null,{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Coupons")]),_:1}),HL]),_:1}),t(u,null,{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Rebates")]),_:1}),NL]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Input",description:"A menu item can contain an input inside of it",code:e.inputCode},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{as:"div"},{default:i(()=>[t(p,{icon:"search",placeholder:"Search..."})]),_:1}),t(u,{position:"right",as:"div"},{default:i(()=>[t(p,{placeholder:"Navigate to ..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Button",description:"A menu item can contain a button inside of it",code:e.buttonCode},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{as:"div"},{default:i(()=>[t(v,{color:"primary"},{default:i(()=>[n("Sign up")]),_:1})]),_:1}),t(u,{as:"div"},{default:i(()=>[t(v,null,{default:i(()=>[n("Log in")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Link Item",description:"A menu may contain a link item, or an item formatted as if it is a link",code:e.linkItemCode},{default:i(()=>[t(d,{vertical:""},{default:i(()=>[t(u,{href:"https://google.com"},{default:i(()=>[n("Visit Google")]),_:1}),t(u,{link:"",as:"div"},{default:i(()=>[n("Javascript Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Dropdown Item",description:"An item may contain a nested menu in a dropdown",code:e.dropdownItemCode},{default:i(()=>[t(d,{vertical:""},{default:i(()=>[t(L,{item:"",text:"Categories"},{default:i(()=>[t($,null,{default:i(()=>[t(x,{text:"Electoronics"}),t(x,{text:"Automotive"}),t(x,{text:"Home"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Menu",description:"A menu may contain another menu group in the same level as menu items",code:e.menuContentCode},{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Browse")]),_:1}),t(u,null,{default:i(()=>[n("Submit")]),_:1}),t(_,{position:"right"},{default:i(()=>[t(u,null,{default:i(()=>[n("Sign up")]),_:1}),t(u,null,{default:i(()=>[n("Help")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Sub Menu",description:"A menu item may contain another menu nested inside that acts as a grouped sub-menu",code:e.subMenuCode},{default:i(()=>[t(d,{vertical:""},{default:i(()=>[t(u,{as:"div"},{default:i(()=>[t(p,{placeholder:"Search..."})]),_:1}),t(u,{as:"div"},{default:i(()=>[n(" Home "),t(_,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Search")]),_:1}),t(u,null,{default:i(()=>[n("Add")]),_:1}),t(u,null,{default:i(()=>[n("Remove")]),_:1})]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(h,{name:"grid layout"}),n(" Browse ")]),_:1}),t(u,null,{default:i(()=>[n("Messages")]),_:1}),t(L,{item:"",text:"More"},{default:i(()=>[t($,null,{default:i(()=>[t(x,{icon:"edit",text:"Edit Profile"}),t(x,{icon:"globe",text:"Choose Language"}),t(x,{icon:"settings",text:"Account Settings"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(g,{title:"Hover",description:"A menu item can be hovered",code:e.hoverCode},{default:i(()=>[t(d,{compact:""},{default:i(()=>[t(u,null,{default:i(()=>[n("A link")]),_:1}),t(u,{as:"div",link:""},{default:i(()=>[n("div Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Active",description:"A menu item can be active",code:e.activeCode},{default:i(()=>[t(d,{compact:""},{default:i(()=>[t(u,{active:""},{default:i(()=>[n("Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(g,{title:"Stackable",description:"A menu can stack at mobile resolutions",code:e.stackableCode},{default:i(()=>[t(d,{stackable:""},{default:i(()=>[t(u,{as:"div"},{default:i(()=>[OL]),_:1}),t(u,null,{default:i(()=>[n("Features")]),_:1}),t(u,null,{default:i(()=>[n("Testimonials")]),_:1}),t(u,null,{default:i(()=>[n("Sign in")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Inverted",description:"A menu may have its colors inverted to show greater contrast",code:e.invertedCode},{default:i(()=>[t(d,{inverted:""},{default:i(()=>[t(u,{active:""},{default:i(()=>[n("Home")]),_:1}),t(u,null,{default:i(()=>[n("Messages")]),_:1}),t(u,null,{default:i(()=>[n("Friends")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored",description:"Additional colors can be specified",code:e.coloredCode},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{active:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u,{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u,{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u,{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u,{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u,{color:"teal"},{default:i(()=>[n("Teal")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Icons",description:"A menu may have just icons",code:e.iconsCode},{default:i(()=>[t(d,{icon:""},{default:i(()=>[t(u,null,{default:i(()=>[t(h,{name:"gamepad"})]),_:1}),t(u,null,{default:i(()=>[t(h,{name:"video camera"})]),_:1}),t(u,null,{default:i(()=>[t(h,{name:"video play"})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Labeled Icon",description:"A menu may have labeled icons",code:e.labeledIconCode},{default:i(()=>[t(d,{icon:"labeled"},{default:i(()=>[t(u,null,{default:i(()=>[t(h,{name:"gamepad"}),n(" Games ")]),_:1}),t(u,null,{default:i(()=>[t(h,{name:"video camera"}),n(" Channels ")]),_:1}),t(u,null,{default:i(()=>[t(h,{name:"video play"}),n(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Fluid",description:"A vertical menu may take the size of its container",code:e.fluidCode},{default:i(()=>[t(d,{fluid:"",vertical:""},{default:i(()=>[t(u,null,{default:i(()=>[n("Run")]),_:1}),t(u,null,{default:i(()=>[n("Walk")]),_:1}),t(u,null,{default:i(()=>[n("Bike")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Compact",description:"A menu can take up only the space necessary to fit its content",code:e.compactCode},{default:i(()=>[t(d,{compact:""},{default:i(()=>[t(u,null,{default:i(()=>[t(h,{name:"gamepad"}),n(" Games ")]),_:1}),t(u,null,{default:i(()=>[t(h,{name:"video camera"}),n(" Channels ")]),_:1}),t(u,null,{default:i(()=>[t(h,{name:"video play"}),n(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Evenly Divided",description:"A menu may divide its items evenly",code:e.evenlyDividedCode},{default:i(()=>[t(d,{fluid:"",widths:3},{default:i(()=>[t(u,null,{default:i(()=>[n("Buy")]),_:1}),t(u,null,{default:i(()=>[n("Sell")]),_:1}),t(u,null,{default:i(()=>[n("Rent")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Attached",description:"A menu may be attached to other content segments",code:e.attachedCode},{default:i(()=>[S("div",null,[t(d,{attached:"top",tabular:""},{default:i(()=>[t(u,{active:""},{default:i(()=>[n("tab1")]),_:1}),t(u,null,{default:i(()=>[n("tab2")]),_:1})]),_:1}),t(b,{attached:"bottom"},{default:i(()=>[n(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. ")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Size",description:"A menu can vary in size",code:e.sizeCode},{default:i(()=>[t(d,{size:"mini"},{default:i(()=>[t(u,{active:""},{default:i(()=>[n("Home")]),_:1}),t(u,null,{default:i(()=>[n("Messages")]),_:1}),t(_,{position:"right"},{default:i(()=>[t(L,{item:"",text:"Language"},{default:i(()=>[t($,null,{default:i(()=>[t(x,null,{default:i(()=>[n("English")]),_:1}),t(x,null,{default:i(()=>[n("Russian")]),_:1}),t(x,null,{default:i(()=>[n("Spanish")]),_:1})]),_:1})]),_:1}),t(u,{as:"div"},{default:i(()=>[t(v,{color:"primary"},{default:i(()=>[n("Sign up")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Fitted",description:"A menu item or menu can remove element padding, vertically or horizontally",code:e.fittedCode},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{fitted:""},{default:i(()=>[n("No padding whatsoever")]),_:1}),t(u,{fitted:"horizontally"},{default:i(()=>[n("No horizontal padding")]),_:1}),t(u,{fitted:"vertically"},{default:i(()=>[n("No vertical padding")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Borderless",description:"A menu item or menu can have no borders",code:e.borderlessCode},{default:i(()=>[t(d,{borderless:""},{default:i(()=>[t(u,null,{default:i(()=>[n("1")]),_:1}),t(u,null,{default:i(()=>[n("2")]),_:1}),t(u,null,{default:i(()=>[n("3")]),_:1}),t(u,null,{default:i(()=>[n("4")]),_:1}),t(u,null,{default:i(()=>[n("5")]),_:1}),t(u,null,{default:i(()=>[n("6")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const GL=Re(VL,[["render",qL]]),jL=P({name:"MessageDoc",components:{DocPageHeader:pt,DocExample:lt},setup(){return{messageCode:`<sui-message>
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
</div>`}}}),UL=S("p",null,"We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.",-1),YL=S("p",null,"Get the best news in your e-mail every day.",-1),JL=S("p",null,"You can't see me",-1),WL=S("p",null,"You can always see me",-1),KL=S("p",null,"Way to go!",-1),XL=S("p",null,"Get all the best inventions in your e-mail every day. Sign up now!",-1),QL=S("a",{href:"#"},"Login here",-1),ZL=S("p",null,[n("Go to your "),S("b",null,"special offers"),n(" page to see now.")],-1),eD=S("p",null,"That offer has expired",-1);function tD(e,l,a,o,s,c){const m=C("doc-page-header"),f=C("sui-header"),u=C("sui-message-header"),d=C("sui-message"),g=C("doc-example"),p=C("sui-message-item"),_=C("sui-message-list"),w=C("sui-icon"),v=C("sui-message-content"),x=C("sui-form-field"),$=C("sui-form-group"),L=C("sui-button"),h=C("sui-form"),b=C("sui-container");return A(),be("div",null,[t(m,{title:"Message",sub:"A message displays information that explains nearby content"}),t(b,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(g,{title:"Message",description:"A basic message",code:e.messageCode},{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Changes in Service")]),_:1}),UL]),_:1})]),_:1},8,["code"]),t(g,{title:"List Message",description:"A message with a list",code:e.listMessageCode},{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("New Site Features")]),_:1}),t(_,null,{default:i(()=>[t(p,null,{default:i(()=>[n("You can now have cover images on blog pages")]),_:1}),t(p,null,{default:i(()=>[n("Drafts will now auto-save while writing")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Icon Message",description:"A message can contain an icon",code:e.iconMessageCode},{default:i(()=>[t(d,{icon:""},{default:i(()=>[t(w,{name:"inbox"}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n(" Have you heard about our mailing list? ")]),_:1}),YL]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(g,{title:"Hidden",description:"A message can be hidden",code:e.hiddenCode},{default:i(()=>[t(d,{hidden:""},{default:i(()=>[JL]),_:1})]),_:1},8,["code"]),t(g,{title:"Visible",description:"A message can be set to visible to force itself to be shown",code:e.visibleCode},{default:i(()=>[t(d,{visible:""},{default:i(()=>[WL]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(g,{title:"Floating",description:"A message can float above content that it is related to",code:e.floatingCode},{default:i(()=>[t(d,{floating:""},{default:i(()=>[KL]),_:1})]),_:1},8,["code"]),t(g,{title:"Compact",description:"A message can only take up the width of its content",code:e.compactCode},{default:i(()=>[t(d,{compact:""},{default:i(()=>[XL]),_:1})]),_:1},8,["code"]),t(g,{title:"Attached",description:"A message can be formatted to attach itself to other content",code:e.attachedCode},{default:i(()=>[S("div",null,[t(d,{attached:"",header:"Welcome to our site!",content:"Fill out the form below to sign-up for a new account"}),t(h,{class:"attached fluid segment"},{default:i(()=>[t($,{widths:"equal"},{default:i(()=>[t(x,{label:"First Name",placeholder:"First Name"}),t(x,{label:"Last Name",placeholder:"Last Name"})]),_:1}),t(x,{label:"Username",placeholder:"Username"}),t(x,{label:"Password",placeholder:"Password"}),t(L,{color:"primary"},{default:i(()=>[n("Submit")]),_:1})]),_:1}),t(d,{attached:"bottom",warning:""},{default:i(()=>[t(w,{name:"help"}),n(" Already signed up? "),QL,n(" instead. ")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Warning",description:"A message may be formatted to display warning messages",code:e.warningCode},{default:i(()=>[t(d,{warning:""},{default:i(()=>[t(w,{name:"close"}),t(u,null,{default:i(()=>[n(" You must register before you can do that! ")]),_:1}),n(" Visit our registration page, then try again ")]),_:1})]),_:1},8,["code"]),t(g,{title:"Info",description:"A message may be formatted to display information",code:e.infoCode},{default:i(()=>[t(d,{info:""},{default:i(()=>[t(u,null,{default:i(()=>[n("Was this what you wanted?")]),_:1}),t(_,null,{default:i(()=>[n("It's good to see you again.")]),_:1}),t(_,null,{default:i(()=>[n("Did you know it's been a while?")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Positive / Success",description:"A message may be formatted to display a positive message",code:e.positiveSuccessCode},{default:i(()=>[t(d,{positive:""},{default:i(()=>[t(u,null,{default:i(()=>[n("You are eligible for a reward")]),_:1}),ZL]),_:1})]),_:1},8,["code"]),t(g,{title:"Negative / Error",description:"A message may be formatted to display a negative message",code:e.negativeErrorCode},{default:i(()=>[t(d,{negative:""},{default:i(()=>[t(w,{name:"close"}),t(u,null,{default:i(()=>[n("We're sorry we can't apply that discount")]),_:1}),eD]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored",description:"A message can be formatted to be different colors",code:e.coloredCode},{default:i(()=>[S("div",null,[t(d,{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(d,{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(d,{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(d,{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(d,{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(d,{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(d,{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(d,{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(d,{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(d,{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(d,{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(d,{color:"black"},{default:i(()=>[n("Black")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Size",description:"A message can have different sizes",code:e.sizeCode},{default:i(()=>[S("div",null,[t(d,{size:"mini"},{default:i(()=>[n("This is a mini message.")]),_:1}),t(d,{size:"large"},{default:i(()=>[n("This is a large message.")]),_:1}),t(d,{size:"massive"},{default:i(()=>[n("This is a massive message.")]),_:1})])]),_:1},8,["code"])]),_:1})])}const iD=Re(jL,[["render",tD]]),lD=P({name:"TableDoc",components:{DocPageHeader:pt,DocExample:lt},setup(){return{tableCode:`<sui-table celled>
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
</sui-table>`}}}),aD=S("a",{href:"#"},"Edit",-1),nD=S("a",{href:"#"},"Edit",-1),oD=S("a",{href:"#"},"Edit",-1),sD=S("br",null,null,-1),rD=S("br",null,null,-1),uD=S("br",null,null,-1),cD=S("br",null,null,-1),dD=S("br",null,null,-1),mD=S("br",null,null,-1),pD=S("br",null,null,-1);function fD(e,l,a,o,s,c){const m=C("doc-page-header"),f=C("sui-header"),u=C("sui-table-header-cell"),d=C("sui-table-row"),g=C("sui-table-header"),p=C("sui-table-cell"),_=C("sui-table-body"),w=C("sui-table"),v=C("doc-example"),x=C("sui-icon"),$=C("sui-table-footer"),L=C("sui-container");return A(),be("div",null,[t(m,{title:"Table",sub:"A table displays a collections of data grouped into rows"}),t(L,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(v,{title:"Table",description:"A standard table",code:e.tableCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Age")]),_:1}),t(u,null,{default:i(()=>[n("Job")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("James")]),_:1}),t(p,null,{default:i(()=>[n("24")]),_:1}),t(p,null,{default:i(()=>[n("Engineer")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("26")]),_:1}),t(p,null,{default:i(()=>[n("Engineer")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Elyse")]),_:1}),t(p,null,{default:i(()=>[n("24")]),_:1}),t(p,null,{default:i(()=>[n("Designer")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(v,{title:"Definition",description:"A table may be formatted to emphasize a first column that defines a rows content",code:e.definitionCode},{default:i(()=>[t(w,{definition:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u),t(u,null,{default:i(()=>[n("Arguments")]),_:1}),t(u,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("reset rating")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1}),t(p,null,{default:i(()=>[n("Resets rating to default value")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("set rating")]),_:1}),t(p,null,{default:i(()=>[n("rating (integer)")]),_:1}),t(p,null,{default:i(()=>[n("Sets the current star rating to specified value")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(v,{title:"Structured",description:"A table can be formatted to display complex structured data",code:e.structuredCode},{default:i(()=>[t(w,{structured:"",celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,{rowspan:"2"},{default:i(()=>[n("Name")]),_:1}),t(u,{rowspan:"2"},{default:i(()=>[n("Type")]),_:1}),t(u,{rowspan:"2"},{default:i(()=>[n("Files")]),_:1}),t(u,{colspan:"3"},{default:i(()=>[n("Languages")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Ruby")]),_:1}),t(u,null,{default:i(()=>[n("Javascript")]),_:1}),t(u,null,{default:i(()=>[n("Python")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Alpha Team")]),_:1}),t(p,null,{default:i(()=>[n("Project 1")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("2")]),_:1}),t(p,{textAlign:"center"},{default:i(()=>[t(x,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(p),t(p)]),_:1}),t(d,null,{default:i(()=>[t(p,{rowspan:"3"},{default:i(()=>[n("Beta Team")]),_:1}),t(p,null,{default:i(()=>[n("Project 1")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("52")]),_:1}),t(p,{textAlign:"center"},{default:i(()=>[t(x,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(p),t(p)]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Project 2")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("12")]),_:1}),t(p),t(p,{textAlign:"center"},{default:i(()=>[t(x,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(p)]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Project 3")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("21")]),_:1}),t(p,{textAlign:"center"},{default:i(()=>[t(x,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(p),t(p)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(v,{title:"Positive / Negative",description:"A cell or row may let a user know whether a value is good or bad",code:e.positiveNegativeCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,{negative:""},{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,{positive:""},{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[t(x,{name:"checkmark"}),n(" Approved ")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,{positive:""},{default:i(()=>[t(x,{name:"close"}),n(" Requires call ")]),_:1})]),_:1}),t(d,{negative:""},{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(v,{title:"Error",description:"A cell or row may call attention to an error or a negative value",code:e.errorCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,{error:""},{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[n("Cannot pull data")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,{error:""},{default:i(()=>[t(x,{name:"attention"}),n(" Requires call ")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(v,{title:"Warning",description:"A cell or row may warn a user",code:e.warningCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,{warning:""},{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[t(x,{name:"attention"}),n(" Requires Action ")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,{warning:""},{default:i(()=>[t(x,{name:"attention"}),n(" Hostile ")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(v,{title:"Active",description:"A cell or row can be active or selected by a user",code:e.activeCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,{active:""},{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[n("Selected")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,{active:""},{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(v,{title:"Disabled",description:"A cell can be disabled",code:e.disabledCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,{disabled:""},{default:i(()=>[t(p,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[n("Selected")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,{disabled:""},{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(v,{title:"Colored Cells",description:"A cell can be styled by the central color palette colors",code:e.coloredCellsCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,{color:"orange"},{default:i(()=>[n("No Name Specified")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,{color:"blue"},{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[t(x,{name:"microphone"}),n(" Recording session ")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,{color:"pink"},{default:i(()=>[t(x,{name:"child"}),n(" Baby Party ")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,{color:"green"},{default:i(()=>[n("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(v,{title:"Marked",description:"A cell or row can be marked by a colored left or right border",code:e.markedCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,{marked:"right",color:"blue"},{default:i(()=>[n("No Name Specified")]),_:1}),t(p,{marked:"left",color:"red"},{default:i(()=>[n("Unknown")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,{marked:"left",color:"green"},{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[t(x,{name:"microphone"}),n(" Recording session ")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,{marked:"left",color:"orange"},{default:i(()=>[t(x,{name:"child"}),n(" Baby Party ")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,{marked:"right",color:"purple"},{default:i(()=>[n("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(v,{title:"Single Line",description:"A table can specify that its cell contents should remain on a single line, and not wrap",code:e.singleLineCode},{default:i(()=>[t(w,{"single-line":""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Registration Date")]),_:1}),t(u,null,{default:i(()=>[n("E-mail address")]),_:1}),t(u,null,{default:i(()=>[n("Premium Plan")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John Lilki")]),_:1}),t(p,null,{default:i(()=>[n("September 14, 2013")]),_:1}),t(p,null,{default:i(()=>[n("jhlilk22@yahoo.com")]),_:1}),t(p,null,{default:i(()=>[n("No")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie Harington")]),_:1}),t(p,null,{default:i(()=>[n("January 11, 2014")]),_:1}),t(p,null,{default:i(()=>[n("jamieharingonton@yahoo.com")]),_:1}),t(p,null,{default:i(()=>[n("Yes")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill Lewis")]),_:1}),t(p,null,{default:i(()=>[n("May 11, 2014")]),_:1}),t(p,null,{default:i(()=>[n("jilsewris22@yahoo.com")]),_:1}),t(p,null,{default:i(()=>[n("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(v,{title:"Fixed",description:"A table can use `table-layout: fixed` a special faster form of table rendering that does not resize table cells based on content",code:e.fixedCode},{default:i(()=>[t(w,{fixed:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(v,{title:"Stacking",descirption:"A table can specify how it stacks table content responsively",code:e.stackingCode},{default:i(()=>[t(w,{stackable:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(v,{title:"Selectable Row",description:"A table can have its rows appear selectable",code:e.selectableRowCode},{default:i(()=>[t(w,{selectable:"",celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,{positive:""},{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,{warning:""},{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,{negative:""},{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(v,{title:"Selectable Cell",description:"A table cell can be selectable",code:e.selectableCellCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,{positive:""},{default:i(()=>[n("Approved")]),_:1}),t(p,{selectable:""},{default:i(()=>[aD]),_:1})]),_:1}),t(d,{warning:""},{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,{selectable:""},{default:i(()=>[nD]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,{negative:""},{default:i(()=>[n("Denied")]),_:1}),t(p,{selectable:""},{default:i(()=>[oD]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(v,{title:"Verical Alignment",description:"A table header, row, or cell can adjust its vertical alignment",code:e.verticalAlignmentCode},{default:i(()=>[t(w,{striped:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,{verticalAlign:"top"},{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,{verticalAlign:"top"},{default:i(()=>[n(" Notes "),sD,n(" 1"),rD,n(" 2"),uD]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,{verticalAlign:"bottom"},{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n(" Notes "),cD,n(" 1"),dD,n(" 2"),mD]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(v,{title:"Text Alignment",description:"A table header, row, or cell can adjust its text alignment",code:e.textAlignCode},{default:i(()=>[t(w,{striped:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,{textAlign:"right"},{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,{textAlign:"center"},{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(v,{title:"Striped",description:"A table can stripe alternate rows of content with a darker color to increase contrast",code:e.stripedCode},{default:i(()=>[t(w,{striped:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Date Joined")]),_:1}),t(u,null,{default:i(()=>[n("E-mail")]),_:1}),t(u,null,{default:i(()=>[n("Called")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John Lilki")]),_:1}),t(p,null,{default:i(()=>[n("September 14, 2013")]),_:1}),t(p,null,{default:i(()=>[n("jhlilk22@yahoo.com")]),_:1}),t(p,null,{default:i(()=>[n("No")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie Harington")]),_:1}),t(p,null,{default:i(()=>[n("January 11, 2014")]),_:1}),t(p,null,{default:i(()=>[n("jamieharingonton@yahoo.com")]),_:1}),t(p,null,{default:i(()=>[n("Yes")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill Lewis")]),_:1}),t(p,null,{default:i(()=>[n("May 11, 2014")]),_:1}),t(p,null,{default:i(()=>[n("jilsewris22@yahoo.com")]),_:1}),t(p,null,{default:i(()=>[n("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(v,{title:"Celled",description:"A table may be divided each row into separate cells",code:e.celledCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("3 People")]),_:1}),t(p,null,{default:i(()=>[n("2 Approved")]),_:1}),t(p)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(v,{title:"Basic",description:"A table can reduce its complexity to increase readability",code:e.basicCode},{default:i(()=>[S("div",null,[t(w,{basic:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1}),pD,t(w,{basic:"very"},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(v,{title:"Collapsing",description:"A table can be collapsing, taking up only as much space as its rows",code:e.collapsingCode},{default:i(()=>[t(w,{collapsing:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Age")]),_:1}),t(u,null,{default:i(()=>[n("Gender")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("27")]),_:1}),t(p,null,{default:i(()=>[n("Male")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("32")]),_:1}),t(p,null,{default:i(()=>[n("Other")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("22")]),_:1}),t(p,null,{default:i(()=>[n("Other")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("3 People")]),_:1}),t(u,null,{default:i(()=>[n("2 Approved")]),_:1}),t(u),t(u),t(u)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(v,{title:"Collapsing Cell",description:"A cell can be collapsing so that it only uses as much space as required",code:e.collapsingCellCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,{collapsing:""},{default:i(()=>[t(x,{name:"folder"}),n(" node_modules ")]),_:1}),t(p,null,{default:i(()=>[n("Initial commit")]),_:1}),t(p,null,{default:i(()=>[n("10 hours ago")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,{collapsing:""},{default:i(()=>[t(x,{name:"folder"}),n(" node_modules ")]),_:1}),t(p,null,{default:i(()=>[n("Initial commit")]),_:1}),t(p,null,{default:i(()=>[n("10 hours ago")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,{collapsing:""},{default:i(()=>[t(x,{name:"folder"}),n(" node_modules ")]),_:1}),t(p,null,{default:i(()=>[n("Initial commit")]),_:1}),t(p,null,{default:i(()=>[n("10 hours ago")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(v,{title:"Column Count",description:"A table can specify its column count to divide its content evenly",code:e.columnCountCode},{default:i(()=>[t(w,{columns:5},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Age")]),_:1}),t(u,null,{default:i(()=>[n("Gender")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("27")]),_:1}),t(p,null,{default:i(()=>[n("Male")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("32")]),_:1}),t(p,null,{default:i(()=>[n("Other")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("22")]),_:1}),t(p,null,{default:i(()=>[n("Other")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("3 People")]),_:1}),t(u,null,{default:i(()=>[n("2 Approved")]),_:1}),t(u),t(u),t(u)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(v,{title:"Column Width",description:"Column Width",code:e.columnWidthCode},{default:i(()=>[t(w,null,{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,{width:10},{default:i(()=>[n("Name")]),_:1}),t(u,{width:6},{default:i(()=>[n("Status")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(v,{title:"Colored",description:"A table can be given a color to distinguish it from other tables",code:e.coloredCode},{default:i(()=>[t(w,{color:"red"},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Food")]),_:1}),t(u,null,{default:i(()=>[n("Calories")]),_:1}),t(u,null,{default:i(()=>[n("Protein")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Apples")]),_:1}),t(p,null,{default:i(()=>[n("200")]),_:1}),t(p,null,{default:i(()=>[n("0g")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Orange")]),_:1}),t(p,null,{default:i(()=>[n("310")]),_:1}),t(p,null,{default:i(()=>[n("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(v,{title:"Inverted",description:"A table's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(w,{inverted:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Food")]),_:1}),t(u,null,{default:i(()=>[n("Calories")]),_:1}),t(u,null,{default:i(()=>[n("Protein")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Apples")]),_:1}),t(p,null,{default:i(()=>[n("200")]),_:1}),t(p,null,{default:i(()=>[n("0g")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Orange")]),_:1}),t(p,null,{default:i(()=>[n("310")]),_:1}),t(p,null,{default:i(()=>[n("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(v,{title:"Padded",description:"A table may sometimes need to be more padded for legibility",code:e.paddedCode},{default:i(()=>[S("div",null,[t(w,{padded:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1}),t(w,{padded:"very"},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(v,{title:"Compact",description:"A table may sometimes need to be more compact to make more rows visible at a time",code:e.compactCode},{default:i(()=>[S("div",null,[t(w,{compact:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1})]),_:1})]),_:1}),t(w,{compact:"very"},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(v,{title:"Size",description:"A table can also be small or large",code:e.sizeCode},{default:i(()=>[t(w,{size:"small"},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const gD=Re(lD,[["render",fD]]),hD=P({name:"FeedDoc",components:{DocPageHeader:pt,DocExample:lt},setup(){return{feedCode:`<sui-feed>
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
</sui-feed>`}}}),_D=S("img",{src:Ai},null,-1),bD=S("img",{src:Ai},null,-1),vD=S("a",null,"Coworkers",-1),SD=S("img",{src:Rd},null,-1),yD=S("a",null,"Jenny Hess",-1),wD=S("a",null,"coworker",-1),CD=S("img",{src:Gl},null,-1),AD=S("a",null,"Helen Troy",-1),xD=S("a",null,[S("img",{src:pe})],-1),kD=S("a",null,[S("img",{src:pe})],-1),$D=S("a",null,"Elliot Fu",-1),BD=S("a",null,"Jenny Hess",-1),TD=S("a",null,"Stevie Feliciano",-1),LD=S("a",null,"Elliot Fu",-1),DD=S("a",null,"Helen Troy",-1),ID=S("a",null,"Christian Rocha",-1),ED=S("img",{src:Ai},null,-1),RD=S("div",{class:"date"},"Just now",-1),zD=S("a",{class:"user"},"Elliot Fu",-1);function PD(e,l,a,o,s,c){const m=C("doc-page-header"),f=C("sui-header"),u=C("sui-feed-label"),d=C("sui-feed-user"),g=C("sui-feed-date"),p=C("sui-feed-summary"),_=C("sui-icon"),w=C("sui-feed-like"),v=C("sui-feed-meta"),x=C("sui-feed-content"),$=C("sui-feed-event"),L=C("sui-feed"),h=C("doc-example"),b=C("sui-feed-extra"),k=C("sui-segment"),T=C("sui-container");return A(),be("div",null,[t(m,{title:"Feed",sub:"A feed presents user activity chronologically"}),t(T,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(h,{title:"Feed",description:"A feed",code:e.feedCode},{default:i(()=>[t(L,null,{default:i(()=>[t($,null,{default:i(()=>[t(u,null,{default:i(()=>[_D]),_:1}),t(x,null,{default:i(()=>[t(p,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Elliot Fu")]),_:1}),n(" added you as a friend "),t(g,null,{default:i(()=>[n("1 Hour Ago")]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(w,null,{default:i(()=>[t(_,{name:"like"}),n(" 4 Likes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(h,{title:"Label",description:"An event can contain an image or icon label",code:e.labelCode},{default:i(()=>[t(L,null,{default:i(()=>[t($,null,{default:i(()=>[t(u,null,{default:i(()=>[bD]),_:1}),t(x,null,{default:i(()=>[n(" You added Elliot Fu to the group "),vD]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Date",description:"An event or an event summary can contain a date",code:e.dateCode},{default:i(()=>[t(L,null,{default:i(()=>[t($,null,{default:i(()=>[t(u,null,{default:i(()=>[SD]),_:1}),t(x,null,{default:i(()=>[t(g,null,{default:i(()=>[n(" 3 days ago ")]),_:1}),t(p,null,{default:i(()=>[n(" You added "),yD,n(" to your "),wD,n(" group. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Additional information",description:"An event can contain additional information like a set of images or text",code:e.additionalInfoCode},{default:i(()=>[t(L,null,{default:i(()=>[t($,null,{default:i(()=>[t(u,null,{default:i(()=>[CD]),_:1}),t(x,null,{default:i(()=>[t(g,null,{default:i(()=>[n(" 3 days ago ")]),_:1}),t(p,null,{default:i(()=>[AD,n(" added 2 photos ")]),_:1}),t(b,{images:""},{default:i(()=>[xD,kD]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(h,{title:"Size",description:"A feed can have different sizes",code:e.sizeCode},{default:i(()=>[t(L,{size:"small"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Followers Activity")]),_:1}),t($,null,{default:i(()=>[t(x,null,{default:i(()=>[t(p,null,{default:i(()=>[$D,n(" added "),BD,n(" as a friend ")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[t(x,null,{default:i(()=>[t(p,null,{default:i(()=>[TD,n(" added "),LD,n(" as a friend ")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[t(x,null,{default:i(()=>[t(p,null,{default:i(()=>[DD,n(" added "),ID,n(" as a friend ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Inverted",description:"A feed's color can be inverted",code:e.invertedCode},{default:i(()=>[t(k,{inverted:""},{default:i(()=>[t(L,{inverted:""},{default:i(()=>[t($,null,{default:i(()=>[t(u,null,{default:i(()=>[ED]),_:1}),t(x,null,{default:i(()=>[RD,t(p,null,{default:i(()=>[zD,n(" posted on his page ")]),_:1}),t(b,{text:""},{default:i(()=>[n(" Hey there ! ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const FD=Re(hD,[["render",PD]]),VD=P({name:"ItemDoc",components:{DocPageHeader:pt,DocExample:lt},setup(){return{itemsCode:`<sui-item-group>
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
</sui-item-group>`}}}),MD=S("img",{src:pe},null,-1),HD=S("span",null,"Description",-1),ND=S("img",{src:at},null,-1),OD=S("img",{src:pe},null,-1),qD=S("span",null,"Description",-1),GD=S("img",{src:at},null,-1),jD=S("img",{src:pe},null,-1),UD=S("img",{src:pe},null,-1),YD=S("img",{src:pe},null,-1),JD=S("img",{src:pe},null,-1),WD=S("img",{src:pe},null,-1),KD=S("img",{src:pe},null,-1),XD=S("img",{src:pe},null,-1),QD=S("span",{class:"price"},"$1200",-1),ZD=S("span",{class:"stay"},"1 Month",-1),eI=S("img",{src:at},null,-1),tI=S("span",{class:"price"},"$1000",-1),iI=S("span",{class:"stay"},"2 Weeks",-1),lI=S("img",{src:at},null,-1),aI=S("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),nI=S("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),oI=S("img",{src:at},null,-1),sI=S("img",{src:pe},null,-1),rI=S("span",{class:"cinema"},"Union Square 14",-1),uI=S("img",{src:at},null,-1),cI=S("img",{src:pe},null,-1),dI=S("span",{class:"cinema"},"IFC Cinema",-1),mI=S("img",{src:at},null,-1),pI=S("img",{src:pe},null,-1),fI=S("span",{class:"cinema"},"IFC",-1),gI=S("img",{src:at},null,-1),hI=S("img",{src:at},null,-1),_I=S("img",{src:at},null,-1),bI=S("img",{src:at},null,-1),vI=S("span",{class:"price"},"$1200",-1),SI=S("span",{class:"stay"},"1 Month",-1),yI=S("img",{src:at},null,-1),wI=S("span",{class:"price"},"$1000",-1),CI=S("span",{class:"stay"},"2 Weeks",-1),AI=S("img",{src:at},null,-1);function xI(e,l,a,o,s,c){const m=C("doc-page-header"),f=C("sui-header"),u=C("sui-item-image"),d=C("sui-item-header"),g=C("sui-item-meta"),p=C("sui-item-description"),_=C("sui-item-extra"),w=C("sui-item-content"),v=C("sui-item"),x=C("sui-item-group"),$=C("doc-example"),L=C("sui-image"),h=C("sui-icon"),b=C("sui-label"),k=C("sui-button"),T=C("sui-segment"),E=C("sui-container");return A(),be("div",null,[t(m,{title:"Item",sub:"An item view presents large collections of site content for display"}),t(E,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t($,{title:"Items",description:"A group of items",code:e.itemsCode},{default:i(()=>[t(x,null,{default:i(()=>[t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[MD]),_:1}),t(w,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Header")]),_:1}),t(g,null,{default:i(()=>[HD]),_:1}),t(p,null,{default:i(()=>[ND]),_:1}),t(_,null,{default:i(()=>[n(" Additional Details ")]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[OD]),_:1}),t(w,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Header")]),_:1}),t(g,null,{default:i(()=>[qD]),_:1}),t(p,null,{default:i(()=>[GD]),_:1}),t(_,null,{default:i(()=>[n(" Additional Details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t($,{title:"Image",description:"An item can contain an image",code:e.imageCode},{default:i(()=>[t(x,{divided:""},{default:i(()=>[t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[jD]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[UD]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[YD]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Content",description:"An item can contain content",code:e.contentCode},{default:i(()=>[t(x,{divided:""},{default:i(()=>[t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[JD]),_:1}),t(w,{verticalAlign:"middle"},{default:i(()=>[n(" Content A ")]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[WD]),_:1}),t(w,{verticalAlign:"middle"},{default:i(()=>[n(" Content B ")]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[KD]),_:1}),t(w,{verticalAlign:"middle"},{default:i(()=>[n(" Content C ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Header",description:"An item can contain a header",code:e.headerCode},{default:i(()=>[t(x,null,{default:i(()=>[t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[XD]),_:1}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(d,null,{default:i(()=>[n("12 Years a Slave")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Metadata",description:"An item can contain content metadata",code:e.metadataCode},{default:i(()=>[t(x,null,{default:i(()=>[t(v,null,{default:i(()=>[t(L,{size:"small",src:pe}),t(w,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Arrowhead Valley Camp")]),_:1}),t(g,null,{default:i(()=>[QD,ZD]),_:1}),t(p,null,{default:i(()=>[eI]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(L,{size:"small",src:pe}),t(w,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Buck's Homebrew Stayaway")]),_:1}),t(g,null,{default:i(()=>[tI,iI]),_:1}),t(p,null,{default:i(()=>[lI]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Description",description:"An item can contain a description with a single or multiple paragraphs",code:e.descriptionCode},{default:i(()=>[t(x,null,{default:i(()=>[t(v,null,{default:i(()=>[t(L,{size:"small",src:pe}),t(w,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(p,null,{default:i(()=>[aI,nI]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Extra Content",description:"An item can contain extra content meant to be formatted separately from the main content",code:e.extraContentCode},{default:i(()=>[t(x,null,{default:i(()=>[t(v,null,{default:i(()=>[t(w,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(p,null,{default:i(()=>[oI]),_:1}),t(_,null,{default:i(()=>[t(h,{name:"check",color:"green"}),n(" 121 Votes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t($,{title:"Divided",description:"Items can be divided to better distinguish between grouped content",code:e.dividedCode},{default:i(()=>[t(x,{divided:""},{default:i(()=>[t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[sI]),_:1}),t(w,null,{default:i(()=>[t(d,null,{default:i(()=>[n("12 Years a Slave")]),_:1}),t(g,null,{default:i(()=>[rI]),_:1}),t(p,null,{default:i(()=>[uI]),_:1}),t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[n("IMAX")]),_:1}),t(b,null,{default:i(()=>[t(h,{name:"globe"}),n(" Additional Languages ")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[cI]),_:1}),t(w,null,{default:i(()=>[t(d,null,{default:i(()=>[n("My Neighbor Totoro")]),_:1}),t(g,null,{default:i(()=>[dI]),_:1}),t(p,null,{default:i(()=>[mI]),_:1}),t(_,null,{default:i(()=>[t(k,{floated:"right",color:"primary"},{default:i(()=>[n(" Buy tickets "),t(h,{name:"right chevron"})]),_:1}),t(b,null,{default:i(()=>[n("Limited")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[pI]),_:1}),t(w,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Watchmen")]),_:1}),t(g,null,{default:i(()=>[fI]),_:1}),t(p,null,{default:i(()=>[gI]),_:1}),t(_,null,{default:i(()=>[t(k,{floated:"right",color:"primary"},{default:i(()=>[n(" Buy tickets "),t(h,{name:"right chevron"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Relaxed",description:"A group of items can relax its padding to provide more negative space",code:e.relaxedCode},{default:i(()=>[t(x,null,{default:i(()=>[t(v,null,{default:i(()=>[t(L,{size:"tiny",src:pe}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(d,{as:"a"},{default:i(()=>[n("12 Years a Slave")]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(L,{size:"tiny",src:pe}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(d,{as:"a"},{default:i(()=>[n("My Neighbor Totoro")]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(L,{size:"tiny",src:pe}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(d,{as:"a"},{default:i(()=>[n("Watchmen")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Vertical Alignment",description:"Content can specify its vertical alignment",code:e.verticalAlignCode},{default:i(()=>[t(x,null,{default:i(()=>[t(v,null,{default:i(()=>[t(L,{size:"small",src:pe}),t(w,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Top Aligned")]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(L,{size:"small",src:pe}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(d,null,{default:i(()=>[n("Middle Aligned")]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(L,{size:"small",src:pe}),t(w,{verticalAlign:"bottom"},{default:i(()=>[t(d,null,{default:i(()=>[n("Bottom Aligned")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Floated Content",description:"Any content element can be floated left or right",code:e.floatedContentCode},{default:i(()=>[t(x,null,{default:i(()=>[t(v,null,{default:i(()=>[t(L,{size:"small",src:pe}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(d,null,{default:i(()=>[n("Content A")]),_:1}),t(p,null,{default:i(()=>[hI]),_:1}),t(_,null,{default:i(()=>[t(k,{floated:"right"},{default:i(()=>[n("Action")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(L,{size:"small",src:pe}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(d,null,{default:i(()=>[n("Content B")]),_:1}),t(p,null,{default:i(()=>[_I]),_:1}),t(_,null,{default:i(()=>[t(k,{floated:"right"},{default:i(()=>[n("Action")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(L,{size:"small",src:pe}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(d,null,{default:i(()=>[n("Content C")]),_:1}),t(p,null,{default:i(()=>[bI]),_:1}),t(_,null,{default:i(()=>[t(k,{floated:"right"},{default:i(()=>[n("Action")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Inverted",description:"An item can be inverted to appear on a dark background",code:e.invertedCode},{default:i(()=>[t(T,{inverted:""},{default:i(()=>[t(x,{inverted:""},{default:i(()=>[t(v,null,{default:i(()=>[t(L,{size:"small",src:pe}),t(w,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Arrowhead Valley Camp")]),_:1}),t(g,null,{default:i(()=>[vI,SI]),_:1}),t(p,null,{default:i(()=>[yI]),_:1})]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(L,{size:"small",src:pe}),t(w,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Buck's Homebrew Stayaway")]),_:1}),t(g,null,{default:i(()=>[wI,CI]),_:1}),t(p,null,{default:i(()=>[AI]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const kI=Re(VD,[["render",xI]]),$I=P({name:"AccordionDoc",components:{DocPageHeader:pt,DocExample:lt},setup(){return{accordionCode:`<sui-accordion>
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
</sui-segment>`}}}),BI=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),TI=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),LI=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),DI=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),II=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),EI=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),RI=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),zI=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),PI=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),FI=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),VI=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),MI=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),HI=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),NI=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),OI=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),qI=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),GI=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),jI=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),UI=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),YI=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1);function JI(e,l,a,o,s,c){const m=C("doc-page-header"),f=C("sui-header"),u=C("sui-accordion-tab"),d=C("sui-accordion"),g=C("doc-example"),p=C("sui-segment"),_=C("sui-container");return A(),be("div",null,[t(m,{title:"Accordion",sub:"An accordion allows users to toggle the display of sections of content"}),t(_,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(g,{title:"Accordion",description:"A standard accordion",code:e.accordionCode},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{title:"What is a dog?"},{default:i(()=>[BI]),_:1}),t(u,{title:"What kinds of dogs are there?"},{default:i(()=>[TI]),_:1}),t(u,{title:"How do you acquire a dog?"},{default:i(()=>[LI,DI]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Styled",description:"A styled accordion adds basic formatting",code:e.styledCode},{default:i(()=>[t(d,{styled:""},{default:i(()=>[t(u,{title:"What is a dog?"},{default:i(()=>[II]),_:1}),t(u,{title:"What kinds of dogs are there?"},{default:i(()=>[EI]),_:1}),t(u,{title:"How do you acquire a dog?"},{default:i(()=>[RI,zI]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(g,{title:"Fluid",description:"An accordion can take up the width of its container",code:e.fluidCode},{default:i(()=>[t(d,{fluid:"",styled:""},{default:i(()=>[t(u,{title:"What is a dog?"},{default:i(()=>[PI]),_:1}),t(u,{title:"What kinds of dogs are there?"},{default:i(()=>[FI]),_:1}),t(u,{title:"How do you acquire a dog?"},{default:i(()=>[VI,MI]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Inverted",description:"An accordion can be formatted to appear on dark backgrounds",code:e.invertedCode},{default:i(()=>[t(p,{inverted:""},{default:i(()=>[t(d,{inverted:""},{default:i(()=>[t(u,{title:"What is a dog?"},{default:i(()=>[HI]),_:1}),t(u,{title:"What kinds of dogs are there?"},{default:i(()=>[NI]),_:1}),t(u,{title:"How do you acquire a dog?"},{default:i(()=>[OI,qI]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Usage")]),_:1}),t(g,{title:"Multiple",description:"An accordion can have multiple panels open at the same time",code:e.multipleCode},{default:i(()=>[t(d,{multiple:""},{default:i(()=>[t(u,{title:"What is a dog?"},{default:i(()=>[GI]),_:1}),t(u,{title:"What kinds of dogs are there?"},{default:i(()=>[jI]),_:1}),t(u,{title:"How do you acquire a dog?"},{default:i(()=>[UI,YI]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const WI=Re($I,[["render",JI]]),KI=P({name:"CalendarDoc",components:{DocPageHeader:pt,DocExample:lt},setup(){return{calendar1:j(null),calendarCode:'<sui-calendar v-model="calendar1" placeholder="Date/Time" />'}}});function XI(e,l,a,o,s,c){const m=C("doc-page-header"),f=C("sui-header"),u=C("sui-calendar"),d=C("doc-example"),g=C("sui-container");return A(),be("div",null,[t(m,{title:"Calendar",sub:"A calendar allows users to select any date or time"}),t(g,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(d,{title:"Calendar",description:"A standard calendar",code:e.calendarCode},{default:i(()=>[t(u,{modelValue:e.calendar1,"onUpdate:modelValue":l[0]||(l[0]=p=>e.calendar1=p),placeholder:"Date/Time"},null,8,["modelValue"])]),_:1},8,["code"])]),_:1})])}const QI=Re(KI,[["render",XI]]),ZI=P({name:"PropertyListTable",props:{properties:Array}});function eE(e,l,a,o,s,c){const m=C("sui-table-header-cell"),f=C("sui-table-row"),u=C("sui-table-header"),d=C("sui-table-cell"),g=C("sui-table-body"),p=C("sui-table");return A(),B(p,{celled:""},{default:i(()=>[t(u,null,{default:i(()=>[t(f,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Name")]),_:1}),t(m,null,{default:i(()=>[n("Type")]),_:1}),t(m,null,{default:i(()=>[n("Default")]),_:1}),t(m,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[(A(!0),be(Ae,null,Qe(e.properties,_=>(A(),B(f,{key:_.name},{default:i(()=>[t(d,null,{default:i(()=>[n(Te(_.name),1)]),_:2},1024),t(d,null,{default:i(()=>[n(Te(_.type),1)]),_:2},1024),t(d,null,{default:i(()=>[n(Te(_.default),1)]),_:2},1024),t(d,null,{default:i(()=>[n(Te(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const An=Re(ZI,[["render",eE]]),tE=P({name:"CheckboxDoc",components:{DocPageHeader:pt,DocExample:lt,PropertyListTable:An},setup(){const e=j(!1),l='<sui-checkbox label="Make my profile visible" v-model="checked" />',a=j([]),o=`<sui-checkbox label="Apple" value="Apple" v-model="selected"  />
<sui-checkbox label="Banana" value="Banana" v-model="selected"  />
<sui-checkbox label="Chocolate" value="Chocolate" v-model="selected"  />`,s=j(!1),c='<sui-checkbox toggle v-model="toggle" />',m=j(!1);return{checked:e,checkboxCode:l,selected:a,multipleCode:o,toggle:s,toggleCode:c,slider:m,sliderCode:'<sui-checkbox slider v-model="slider" />',properties:[{name:"label",type:"string",default:"null",description:"Label of the checkbox."},{name:"modelValue",type:"any",default:"null",description:"Value binding of the checkbox."},{name:"value",type:"any",default:"null",description:"Value of the checkbox."}],events:[{name:"change",description:"Callback to invoke when checkbox value is changed."},{name:"click",description:"Callback to invoke when checkbox is clicked."}]}}}),iE={class:"ui form"},lE={class:"grouped fields"},aE={class:"field"},nE={class:"field"},oE={class:"field"};function sE(e,l,a,o,s,c){const m=C("doc-page-header"),f=C("sui-header"),u=C("sui-checkbox"),d=C("doc-example"),g=C("property-list-table"),p=C("sui-table-header-cell"),_=C("sui-table-row"),w=C("sui-table-header"),v=C("sui-table-cell"),x=C("sui-table-body"),$=C("sui-table"),L=C("sui-container");return A(),be("div",null,[t(m,{title:"Checkbox",sub:"A checkbox allows a user to select a value from a small set of options, often binary"}),t(L,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(d,{title:"Checkbox",description:"A standard checkbox",code:e.checkboxCode},{default:i(()=>[t(u,{label:"Make my profile visible",modelValue:e.checked,"onUpdate:modelValue":l[0]||(l[0]=h=>e.checked=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(d,{title:"Multiple",description:"Multiple mode is enabled by default, v-model property refers to an array to bind the selected values",code:e.multipleCode},{default:i(()=>[S("div",iE,[S("div",lE,[S("div",aE,[t(u,{label:"Apple",value:"Apple",modelValue:e.selected,"onUpdate:modelValue":l[1]||(l[1]=h=>e.selected=h)},null,8,["modelValue"])]),S("div",nE,[t(u,{label:"Banana",value:"Banana",modelValue:e.selected,"onUpdate:modelValue":l[2]||(l[2]=h=>e.selected=h)},null,8,["modelValue"])]),S("div",oE,[t(u,{label:"Chocolate",value:"Chocolate",modelValue:e.selected,"onUpdate:modelValue":l[3]||(l[3]=h=>e.selected=h)},null,8,["modelValue"])])])]),n(" selected : "+Te(e.selected),1)]),_:1},8,["code"]),t(d,{title:"Toggle",description:"A checkbox can toggle",code:e.toggleCode},{default:i(()=>[t(u,{toggle:"",modelValue:e.toggle,"onUpdate:modelValue":l[4]||(l[4]=h=>e.toggle=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(d,{title:"Slider",description:"A checkbox can look like a slider",code:e.sliderCode},{default:i(()=>[t(u,{slider:"",modelValue:e.slider,"onUpdate:modelValue":l[5]||(l[5]=h=>e.slider=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(g,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t($,{celled:""},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Name")]),_:1}),t(p,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(x,null,{default:i(()=>[(A(!0),be(Ae,null,Qe(e.events,h=>(A(),B(_,{key:h.name},{default:i(()=>[t(v,null,{default:i(()=>[n(Te(h.name),1)]),_:2},1024),t(v,null,{default:i(()=>[n(Te(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const rE=Re(tE,[["render",sE]]),uE=P({name:"DimmerDoc",components:{DocPageHeader:pt,DocExample:lt},setup(){const e=`<sui-dimmer-dimmable>
  <sui-header as="h3">Overlayable Section</sui-header>
  <sui-image-group size="small">
    <sui-image src="/images/wireframe/image.png" />
    <sui-image src="/images/wireframe/image.png" />
    <sui-image src="/images/wireframe/image.png" />
  </sui-image-group>
  <sui-image size="medium" src="/images/wireframe/media-paragraph.png" />
  
  <sui-dimmer active />
</sui-dimmer-dimmable>`,l=`<sui-dimmer-dimmable>
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
</sui-dimmer-dimmable>`,a=j(!1);return{dimmerCode:e,contentDimmerCode:l,active:a,pageDimmerCode:`<div>
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
</div>`}}});function cE(e,l,a,o,s,c){const m=C("doc-page-header"),f=C("sui-header"),u=C("sui-image"),d=C("sui-image-group"),g=C("sui-dimmer"),p=C("sui-dimmer-dimmable"),_=C("doc-example"),w=C("sui-icon"),v=C("sui-button"),x=C("sui-header-subheader"),$=C("sui-container");return A(),be("div",null,[t(m,{title:"Dimmer",sub:"A dimmer hides distractions to focus attention on particular content"}),t($,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(_,{title:"Dimmer",description:"A simple dimmer displays no content",code:e.dimmerCode},{default:i(()=>[t(p,null,{default:i(()=>[t(f,{as:"h3"},{default:i(()=>[n("Overlayable Section")]),_:1}),t(d,{size:"small"},{default:i(()=>[t(u,{src:pe}),t(u,{src:pe}),t(u,{src:pe})]),_:1}),t(u,{size:"medium",src:ei}),t(g,{active:""})]),_:1})]),_:1},8,["code"]),t(_,{title:"Content Dimmer",description:"A dimmer can display content",code:e.contentDimmerCode},{default:i(()=>[t(p,null,{default:i(()=>[t(f,{as:"h3"},{default:i(()=>[n("Overlayable Section")]),_:1}),t(d,{size:"small"},{default:i(()=>[t(u,{src:pe}),t(u,{src:pe}),t(u,{src:pe})]),_:1}),t(u,{size:"medium",src:ei}),t(g,{active:""},{default:i(()=>[t(f,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(w,{name:"heart"}),n(" Dimmed Message! ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Page Dimmer",description:"A dimmer can be formatted to be fixed to the page",code:e.pageDimmerCode},{default:i(()=>[S("div",null,[t(v,{labeled:"",icon:"",onClick:l[0]||(l[0]=L=>e.active=!0)},{default:i(()=>[t(w,{name:"plus"}),n(" Show ")]),_:1}),t(g,{active:e.active,page:"",onClick:l[1]||(l[1]=L=>e.active=!1)},{default:i(()=>[t(f,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(w,{name:"heart"}),n(" Dimmed Message! "),t(x,null,{default:i(()=>[n("Dimmer sub-header")]),_:1})]),_:1})]),_:1},8,["active"])])]),_:1},8,["code"])]),_:1})])}const dE=Re(uE,[["render",cE]]),mE=P({name:"DropdownDoc",components:{DocPageHeader:pt,DocExample:lt},setup(){const e=`<sui-dropdown text="File">
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
</sui-dropdown>`,l=j(null),a=`<sui-dropdown
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
/>`,m=j(null),f=["Arabic","Chinese","Danish","Dutch","English","French","German","Greek","Hungarian","Italian","Japanese","Korean","Lithuanian","Persian","Polish","Portuguese","Russian","Spanish","Swedish","Turkish","Vietnamese"],u=`<sui-dropdown
  clearable
  selection
  v-model="selected3"
  :options="clearableSelectionOptions"
  placeholder="Select Language"
/>`,d=j(null),g=`<sui-dropdown
  selection
  multiple
  fluid
  v-model="selected4"
  placeholder="Skills"
  :options="['Angular', 'CSS', 'Ember', 'HTML', 'Javascript', 'NodeJS']"
/>`,p=j(null),_=`<sui-dropdown
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
/>`,w=j(null),v=`<sui-dropdown
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
/>`,x=j(null),$=`<sui-dropdown
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
/>`,L=j({text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}});return{dropdownCode:e,selected1:l,selectionCode:a,selected2:o,searchSelectionOptions:s,searchSelectionCode:c,selected3:m,clearableSelectionOptions:f,clearableSelectionCode:u,selected4:d,multipleCode:g,selected5:p,multipleCode2:_,selected6:w,searchDropdownCode:v,selected7:x,searchInMenuCode:$,selected8:L,inlineCode:`<span>
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
</sui-button-group>`}}});function pE(e,l,a,o,s,c){const m=C("doc-page-header"),f=C("sui-header"),u=C("sui-dropdown-item"),d=C("sui-divider"),g=C("sui-dropdown-menu"),p=C("sui-dropdown"),_=C("doc-example"),w=C("sui-button"),v=C("sui-button-group"),x=C("sui-container");return A(),be("div",null,[t(m,{title:"Dropdown",sub:"A dropdown allows a user to select a value from a series of options"}),t(x,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(_,{title:"Dropdown",description:"A dropdown",code:e.dropdownCode},{default:i(()=>[t(p,{text:"File"},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{text:"New"}),t(u,{text:"Open...",description:"ctrl + o"}),t(u,{text:"Save as...",description:"ctrl + s"}),t(u,{text:"Rename",description:"ctrl + r"}),t(u,{text:"Make a copy"}),t(u,{icon:"folder",text:"Move to folder"}),t(u,{icon:"trash",text:"Move to trash"}),t(d),t(u,{text:"Download As..."}),t(u,{text:"Publish To Web"}),t(u,{text:"E-mail Collaborators"})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Selection",description:"A dropdown can be used to select between choices in a form",code:e.selectionCode},{default:i(()=>[t(p,{selection:"",placeholder:"Pet",modelValue:e.selected1,"onUpdate:modelValue":l[0]||(l[0]=$=>e.selected1=$),options:["Cat","Dog","Bird","Rabbit","Squirrel","Horse"]},null,8,["modelValue"])]),_:1},8,["code"]),t(_,{title:"Search Selection",description:"A selection dropdown can allow a user to search through a large list of choices",code:e.searchSelectionCode},{default:i(()=>[t(p,{search:"",selection:"",fluid:"",modelValue:e.selected2,"onUpdate:modelValue":l[1]||(l[1]=$=>e.selected2=$),options:e.searchSelectionOptions,placeholder:"Select Country"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(_,{title:"Clearable Selection",description:"A clearable selection dropdown can allow a user to cancel to cancel a previous selection",code:e.clearableSelectionCode},{default:i(()=>[t(p,{clearable:"",selection:"",modelValue:e.selected3,"onUpdate:modelValue":l[2]||(l[2]=$=>e.selected3=$),options:e.clearableSelectionOptions,placeholder:"Select Language"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(_,{title:"Multiple Selection",description:"A selection dropdown can allow multiple selections",code:e.multipleCode},{default:i(()=>[t(p,{selection:"",multiple:"",fluid:"",modelValue:e.selected4,"onUpdate:modelValue":l[3]||(l[3]=$=>e.selected4=$),placeholder:"Skills",options:["Angular","CSS","Ember","HTML","Javascript","NodeJS"]},null,8,["modelValue"])]),_:1},8,["code"]),t(_,{code:e.multipleCode2},{default:i(()=>[t(p,{selection:"",multiple:"",fluid:"",search:"",modelValue:e.selected5,"onUpdate:modelValue":l[4]||(l[4]=$=>e.selected5=$),placeholder:"Skills",options:[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"}]},null,8,["modelValue"])]),_:1},8,["code"]),t(_,{title:"Search Dropdown",description:"A dropdown can be searchable",code:e.searchDropdownCode},{default:i(()=>[t(p,{button:"",floating:"",labeled:"",search:"",icon:"world",modelValue:e.selected6,"onUpdate:modelValue":l[5]||(l[5]=$=>e.selected6=$),options:[{text:"Arabic",value:"Arabic"},{text:"Chinese",value:"Chinese"},{text:"Danish",value:"Danish"},{text:"Dutch",value:"Dutch"},{text:"English",value:"English"},{text:"French",value:"French"},{text:"German",value:"German"},{text:"Greek",value:"Greek"},{text:"Hungarian",value:"Hungarian"},{text:"Italian",value:"Italian"},{text:"Japanese",value:"Japanese"},{text:"Korean",value:"Korean"},{text:"Lithuanian",value:"Lithuanian"},{text:"Persian",value:"Persian"},{text:"Polish",value:"Polish"},{text:"Portuguese",value:"Portuguese"},{text:"Russian",value:"Russian"},{text:"Spanish",value:"Spanish"},{text:"Swedish",value:"Swedish"},{text:"Turkish",value:"Turkish"},{text:"Vietnamese",value:"Vietnamese"}],text:"Select Language"},null,8,["modelValue"])]),_:1},8,["code"]),t(_,{title:"Search In-Menu",description:"A dropdown can include a search prompt inside its menu",code:e.searchInMenuCode},{default:i(()=>[t(p,{text:"Filter Posts",icon:"filter",floating:"",labeled:"",button:"",searchInMenu:"",modelValue:e.selected7,"onUpdate:modelValue":l[6]||(l[6]=$=>e.selected7=$),options:[{text:"Important",value:"Important",label:{color:"red",empty:!0,circular:!0}},{text:"Announcement",value:"Announcement",label:{color:"blue",empty:!0,circular:!0}},{text:"Cannot Fix",value:"Cannot Fix",label:{color:"black",empty:!0,circular:!0}},{text:"News",value:"News",label:{color:"purple",empty:!0,circular:!0}},{text:"Enhancement",value:"Enhancement",label:{color:"orange",empty:!0,circular:!0}},{text:"Change Declined",value:"Change Declined",label:{empty:!0,circular:!0}},{text:"Off Topic",value:"Off Topic",label:{color:"yellow",empty:!0,circular:!0}},{text:"Interesting",value:"Interesting",label:{color:"pink",empty:!0,circular:!0}},{text:"Discussion",value:"Discussion",label:{color:"green",empty:!0,circular:!0}}]},null,8,["modelValue"])]),_:1},8,["code"]),t(_,{title:"Inline",description:"A dropdown can be formatted to appear inline in other content",code:e.inlineCode},{default:i(()=>[S("span",null,[n(" Show me posts by "),t(p,{inline:"",modelValue:e.selected8,"onUpdate:modelValue":l[7]||(l[7]=$=>e.selected8=$),options:[{text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}},{text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/images/avatar/small/elliot.jpg"}},{text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/images/avatar/small/stevie.jpg"}},{text:"Christian",value:"Christian",image:{avatar:!0,src:"/images/avatar/small/christian.jpg"}}]},null,8,["modelValue","options"])])]),_:1},8,["code"]),t(_,{title:"Pointing",description:"A dropdown can be formatted so that its menu is pointing",code:e.pointingCode},{default:i(()=>[t(p,{icon:"wrench",button:"",pointing:"top left"},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{text:"New"}),t(u,{text:"Save As"}),t(u,{text:"Edit"})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Floating",description:"A dropdown menu can appear to be floating below an element",code:e.floatingCode},{default:i(()=>[t(v,{color:"teal"},{default:i(()=>[t(w,null,{default:i(()=>[n("Save")]),_:1}),t(p,{floating:"",button:"",icon:"dropdown"},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{text:"Edit Post",icon:"edit"}),t(u,{text:"Remove Post",icon:"delete"}),t(u,{text:"Hide Post",icon:"hide"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const fE=Re(mE,[["render",pE]]),gE=P({name:"EmbedDoc",components:{DocPageHeader:pt,DocExample:lt},setup(){return{youtubeCode:`<sui-embed
  id="O6Xo21L0ybE"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`,aspectRatioCode:`<sui-embed
  aspectRatio="4:3"
  id="HTZudKi36bo"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`}}});function hE(e,l,a,o,s,c){const m=C("doc-page-header"),f=C("sui-header"),u=C("sui-embed"),d=C("doc-example"),g=C("sui-container");return A(),be("div",null,[t(m,{title:"Embed",sub:"An embed displays content from other websites like YouTube videos or Google Maps"}),t(g,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(d,{title:"YouTube",description:"An embed can be used to display YouTube Content",code:e.youtubeCode},{default:i(()=>[t(u,{id:"O6Xo21L0ybE",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(d,{title:"Aspect Ratio",description:"An embed can specify an alternative aspect ratio",code:e.aspectRatioCode},{default:i(()=>[t(u,{aspectRatio:"4:3",id:"HTZudKi36bo",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"])]),_:1})])}const _E=Re(gE,[["render",hE]]),bE=S("p",null," We've found the following gravatar image associated with your e-mail address. ",-1),vE=S("p",null,"Is it okay to use this photo?",-1),SE=`<template>
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
<\/script>`,yE={__name:"ModalDoc",setup(e){const l=j(!1);return(a,o)=>(A(),B(I,{label:"Modal",code:SE},{description:i(()=>[n(" A standard modal ")]),example:i(()=>[t(r(z),{onClick:o[0]||(o[0]=s=>l.value=!0)},{default:i(()=>[n("Show Modal")]),_:1}),t(r(hs),{modelValue:l.value,"onUpdate:modelValue":o[2]||(o[2]=s=>l.value=s)},{default:i(()=>[t(r(vs),null,{default:i(()=>[n("Select a Photo")]),_:1}),t(r(bs),{image:""},{default:i(()=>[t(r(oe),{wrapped:"",size:"medium",src:"/vue-fomantic-ui/images/avatar/large/rachel.png"}),t(r(pd),null,{default:i(()=>[t(r(fe),null,{default:i(()=>[n("Default Profile Image")]),_:1}),bE,vE]),_:1})]),_:1}),t(r(_s),null,{default:i(()=>[t(r(z),{positive:"",onClick:o[1]||(o[1]=s=>l.value=!1)},{default:i(()=>[n("OK")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},wE=S("p",null," Your inbox is getting full, would you like us to enable automatic archiving of old messages? ",-1),CE=`<template>
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
<\/script>`,AE={__name:"BasicDoc",setup(e){const l=j(!1);return(a,o)=>(A(),B(I,{label:"Basic",code:CE},{description:i(()=>[n(" A modal can reduce its complexity ")]),example:i(()=>[t(r(z),{onClick:o[0]||(o[0]=s=>l.value=!0)},{default:i(()=>[n("Basic Modal")]),_:1}),t(r(hs),{basic:"",modelValue:l.value,"onUpdate:modelValue":o[2]||(o[2]=s=>l.value=s)},{default:i(()=>[t(r(vs),{icon:""},{default:i(()=>[t(r(W),{name:"archive"}),n(" Archive Old Messages")]),_:1}),t(r(bs),null,{default:i(()=>[wE]),_:1}),t(r(_s),null,{default:i(()=>[t(r(z),{basic:"",color:"red",inverted:"",icon:"remove",content:"No",onClick:o[1]||(o[1]=s=>l.value=!1)}),t(r(z),{basic:"",color:"green",icon:"checkmark",content:"Yes"})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},xE={__name:"Modal",setup(e){const l=[{id:"modal",label:"Modal",category:"Types",component:yE},{id:"basic",label:"Basic",category:"Types",component:AE}];return(a,o)=>(A(),B(rt,{title:"Modal",description:"A modal displays content that temporarily blocks interactions with the main view of a site","component-docs":l}))}},kE="/vue-fomantic-ui/images/movies/totoro-horizontal.jpg",$E=P({name:"PopupDoc",components:{DocPageHeader:pt,DocExample:lt},setup(){const e=j(null),l=`<sui-button icon ref="trigger">
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
/>`,m=j(null),f=`<sui-card ref="triggerTriger">
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
</sui-popup>`,u=j(null),d=`<sui-button icon ref="basicTrigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup
  :trigger="basicTrigger"
  basic
  content="The default theme's basic popup removes the pointing arrow."
/>`,g=j(null),p=j(null),_=j(null),w=`<sui-icon name="heart" circular ref="wideTrigger1" />
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
</sui-popup>`,v=j(null),x=j(null),$=j(null),L=j(null),h=j(null),b=j(null),k=j(null),T=j(null),E=`<sui-button ref="positionTrigger1">Top Left</sui-button>
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
<sui-popup :trigger="positionTrigger8" position="left center" content="I am positioned to the left center" />`,V=j(null),M=`<sui-button ref="flowingTrigger">Show Flowing Popup</sui-button>
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
</sui-popup>`,F=j(null),G=j(null),Q=j(null),Y=j(null),ge=j(null),Be=`<sui-icon name="heart" circular link ref="sizeTrigger1" />
<sui-icon name="heart" circular link ref="sizeTrigger2" />
<sui-icon name="heart" circular link ref="sizeTrigger3" />
<sui-icon name="heart" circular link ref="sizeTrigger4" />
<sui-icon name="heart" circular link ref="sizeTrigger5" />

<sui-popup size="mini" content="Hello. This is a mini popup" :trigger="sizeTrigger1" />
<sui-popup size="tiny" content="Hello. This is a tiny popup" :trigger="sizeTrigger2" />
<sui-popup size="small" content="Hello. This is a small popup" :trigger="sizeTrigger3" />
<sui-popup size="large" content="Hello. This is a large popup" :trigger="sizeTrigger4" />
<sui-popup size="huge" content="Hello. This is a huge popup" :trigger="sizeTrigger5" />`,U=j(null),K=j(null);return{popupTrigger:e,popupCode:l,titledTrigger1:a,titledTrigger2:o,titledTrigger3:s,titledCode:c,triggerTriger:m,triggerCode:f,basicTrigger:u,basicCode:d,wideTrigger1:g,wideTrigger2:p,wideTrigger3:_,wideCode:w,positionTrigger1:v,positionTrigger2:x,positionTrigger3:$,positionTrigger4:L,positionTrigger5:h,positionTrigger6:b,positionTrigger7:k,positionTrigger8:T,positionCode:E,flowingTrigger:V,flowingCode:M,sizeTrigger1:F,sizeTrigger2:G,sizeTrigger3:Q,sizeTrigger4:Y,sizeTrigger5:ge,sizeCode:Be,invertedTrigger1:U,invertedTrigger2:K,invertedCode:`<sui-icon name="heart" circular ref="invertedTrigger1" />
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
/>`}}}),BE=S("p",null,[S("b",null,"2"),n(" projects, $10 a month ")],-1),TE=S("p",null,[S("b",null,"5"),n(" projects, $20 a month ")],-1),LE=S("p",null,[S("b",null,"8"),n(" projects, $25 a month ")],-1);function DE(e,l,a,o,s,c){const m=C("doc-page-header"),f=C("sui-header"),u=C("sui-icon"),d=C("sui-button"),g=C("sui-popup"),p=C("doc-example"),_=C("sui-image"),w=C("sui-card-header"),v=C("sui-card-description"),x=C("sui-card-content"),$=C("sui-card"),L=C("sui-rating"),h=C("sui-divider"),b=C("sui-grid-column"),k=C("sui-grid"),T=C("sui-container");return A(),be("div",null,[t(m,{title:"Popup",sub:"A popup displays additional information on top of a page"}),t(T,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(p,{title:"Popup",description:"An element can specify popup content to appear",code:e.popupCode},{default:i(()=>[t(d,{icon:"",ref:"popupTrigger"},{default:i(()=>[t(u,{name:"add"})]),_:1},512),t(g,{trigger:e.popupTrigger},{default:i(()=>[n(" Add users to your feed ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(p,{title:"Titled",description:"An element can specify popup content with a title",code:e.titledCode},{default:i(()=>[t(_,{avatar:"",src:Ai,ref:"titledTrigger1"},null,512),t(_,{avatar:"",src:Lo,ref:"titledTrigger2"},null,512),t(_,{avatar:"",src:zd,ref:"titledTrigger3"},null,512),t(g,{trigger:e.titledTrigger1,header:"Elliot Fu",content:"Elliot has been a member since July 2012"},null,8,["trigger"]),t(g,{trigger:e.titledTrigger2,header:"Stevie Feliciano",content:"Stevie has been a member since August 2013"},null,8,["trigger"]),t(g,{trigger:e.titledTrigger3,header:"Matt",content:"Matt has been a member since July 2014"},null,8,["trigger"])]),_:1},8,["code"]),t(p,{title:"Trigger",description:"A trigger can be complex element",code:e.triggerCode},{default:i(()=>[t($,{ref:"triggerTriger"},{default:i(()=>[t(_,{src:kE}),t(x,null,{default:i(()=>[t(w,null,{default:i(()=>[n("My Neighbor Totoro")]),_:1}),t(v,null,{default:i(()=>[n(" Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits. ")]),_:1})]),_:1})]),_:1},512),t(g,{trigger:e.triggerTriger,header:"User Rating"},{default:i(()=>[t(L,{icon:"star",defaultRating:3,maxRating:4})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(p,{title:"Basic",description:"A popup can provide more basic formatting",code:e.basicCode},{default:i(()=>[t(d,{icon:"",ref:"basicTrigger"},{default:i(()=>[t(u,{name:"add"})]),_:1},512),t(g,{trigger:e.basicTrigger,basic:"",content:"The default theme's basic popup removes the pointing arrow."},null,8,["trigger"])]),_:1},8,["code"]),t(p,{title:"Position",description:"A popup can be position around its trigger",code:e.positionCode},{default:i(()=>[t(d,{ref:"positionTrigger1"},{default:i(()=>[n("Top Left")]),_:1},512),t(d,{ref:"positionTrigger2"},{default:i(()=>[n("Top Center")]),_:1},512),t(d,{ref:"positionTrigger3"},{default:i(()=>[n("Top Right")]),_:1},512),t(h),t(d,{ref:"positionTrigger4"},{default:i(()=>[n("Bottom Left")]),_:1},512),t(d,{ref:"positionTrigger5"},{default:i(()=>[n("Bottom Center")]),_:1},512),t(d,{ref:"positionTrigger6"},{default:i(()=>[n("Bottom Right")]),_:1},512),t(h),t(d,{ref:"positionTrigger7"},{default:i(()=>[n("Right Center")]),_:1},512),t(d,{ref:"positionTrigger8"},{default:i(()=>[n("Left Center")]),_:1},512),t(g,{trigger:e.positionTrigger1,position:"top left",content:"I am positioned to the top left"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger2,position:"top center",content:"I am positioned to the top center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger3,position:"top right",content:"I am positioned to the top right"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger4,position:"bottom left",content:"I am positioned to the bottom left"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger5,position:"bottom center",content:"I am positioned to the bottom center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger6,position:"bottom right",content:"I am positioned to the bottom right"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger7,position:"right center",content:"I am positioned to the right center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger8,position:"left center",content:"I am positioned to the left center"},null,8,["trigger"])]),_:1},8,["code"]),t(p,{title:"Flowing",description:"A popup can have no maximum width and continue to flow to fit its content",code:e.flowingCode},{default:i(()=>[t(d,{ref:"flowingTrigger"},{default:i(()=>[n("Show Flowing Popup")]),_:1},512),t(g,{trigger:e.flowingTrigger,flowing:""},{default:i(()=>[t(k,{centered:"",divided:"",columns:3},{default:i(()=>[t(b,{textAlign:"center"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Basic Plan")]),_:1}),BE,t(d,null,{default:i(()=>[n("Choose")]),_:1})]),_:1}),t(b,{textAlign:"center"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Business Plan")]),_:1}),TE,t(d,null,{default:i(()=>[n("Choose")]),_:1})]),_:1}),t(b,{textAlign:"center"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Premium Plan")]),_:1}),LE,t(d,null,{default:i(()=>[n("Choose")]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(p,{title:"Size",description:"A popup can vary in size",code:e.sizeCode},{default:i(()=>[t(u,{name:"heart",circular:"",link:"",ref:"sizeTrigger1"},null,512),t(u,{name:"heart",circular:"",link:"",ref:"sizeTrigger2"},null,512),t(u,{name:"heart",circular:"",link:"",ref:"sizeTrigger3"},null,512),t(u,{name:"heart",circular:"",link:"",ref:"sizeTrigger4"},null,512),t(u,{name:"heart",circular:"",link:"",ref:"sizeTrigger5"},null,512),t(g,{size:"mini",content:"Hello. This is a mini popup",trigger:e.sizeTrigger1},null,8,["trigger"]),t(g,{size:"tiny",content:"Hello. This is a tiny popup",trigger:e.sizeTrigger2},null,8,["trigger"]),t(g,{size:"small",content:"Hello. This is a small popup",trigger:e.sizeTrigger3},null,8,["trigger"]),t(g,{size:"large",content:"Hello. This is a large popup",trigger:e.sizeTrigger4},null,8,["trigger"]),t(g,{size:"huge",content:"Hello. This is a huge popup",trigger:e.sizeTrigger5},null,8,["trigger"])]),_:1},8,["code"]),t(p,{title:"Wide",description:"A popup can be extra wide to allow for longer content",code:e.wideCode},{default:i(()=>[t(u,{name:"heart",circular:"",ref:"wideTrigger1"},null,512),t(u,{name:"heart",circular:"",ref:"wideTrigger2"},null,512),t(u,{name:"heart",circular:"",ref:"wideTrigger3"},null,512),t(g,{trigger:e.wideTrigger1},{default:i(()=>[n(" Hello. This is a regular pop-up which does not allow for lots of content. You cannot fit a lot of words here as the paragraphs will be pretty narrow. ")]),_:1},8,["trigger"]),t(g,{trigger:e.wideTrigger2,wide:""},{default:i(()=>[n(" Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"]),t(g,{trigger:e.wideTrigger3,wide:"very"},{default:i(()=>[n(" Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(p,{title:"Inverted",description:"A popup can have its colors inverted",code:e.invertedCode},{default:i(()=>[t(u,{name:"heart",circular:"",ref:"invertedTrigger1"},null,512),t(d,{icon:"",ref:"invertedTrigger2"},{default:i(()=>[t(u,{name:"add"})]),_:1},512),t(g,{trigger:e.invertedTrigger1,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"]),t(g,{trigger:e.invertedTrigger2,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"])]),_:1},8,["code"])]),_:1})])}const IE=Re($E,[["render",DE]]),EE=P({name:"RatingDoc",components:{DocPageHeader:pt,DocExample:lt,PropertyListTable:An},setup(){return{ratingCode:'<sui-rating v-model="value" />',iconCode:`<sui-rating :defaultRating="2" :maxRating="4" color="yellow" />
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
<sui-rating size="massive" :defaultRating="3" :maxRating="4" color="yellow" />`,properties:[{name:"color",type:"string",default:"",description:"A rating can have different colors"},{name:"defaultRating",type:"number",default:0,description:"The initial value of rating."},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"icon",type:"string",default:"star",description:"A rating can use a set of specified icons."},{name:"maxRating",type:"number",default:1,description:"The total number of icons."},{name:"modelValue",type:"number",default:"null",description:"A value of rating."},{name:"size",type:"string",default:"",description:"A rating can have different sizes."}],events:[{name:"change",description:"Callback to invoke on value change."}]}}}),RE=S("br",null,null,-1),zE=S("br",null,null,-1),PE=S("br",null,null,-1),FE=S("br",null,null,-1),VE=S("br",null,null,-1),ME=S("br",null,null,-1),HE=S("br",null,null,-1),NE=S("br",null,null,-1),OE=S("br",null,null,-1),qE=S("br",null,null,-1),GE=S("br",null,null,-1),jE=S("br",null,null,-1),UE=S("br",null,null,-1),YE=S("br",null,null,-1),JE=S("br",null,null,-1),WE=S("br",null,null,-1),KE=S("br",null,null,-1),XE=S("br",null,null,-1),QE=S("br",null,null,-1),ZE=S("br",null,null,-1),eR=S("br",null,null,-1),tR=S("br",null,null,-1),iR=S("br",null,null,-1),lR=S("br",null,null,-1),aR=S("br",null,null,-1),nR=S("br",null,null,-1),oR=S("br",null,null,-1),sR=S("br",null,null,-1),rR=S("br",null,null,-1),uR=S("br",null,null,-1),cR=S("br",null,null,-1),dR=S("br",null,null,-1),mR=S("br",null,null,-1),pR=S("br",null,null,-1),fR=S("br",null,null,-1),gR=S("br",null,null,-1),hR=S("br",null,null,-1),_R=S("br",null,null,-1),bR=S("br",null,null,-1),vR=S("br",null,null,-1),SR=S("br",null,null,-1),yR=S("br",null,null,-1),wR=S("br",null,null,-1),CR=S("br",null,null,-1),AR=S("br",null,null,-1),xR=S("br",null,null,-1),kR=S("br",null,null,-1),$R=S("br",null,null,-1);function BR(e,l,a,o,s,c){const m=C("doc-page-header"),f=C("sui-header"),u=C("sui-rating"),d=C("doc-example"),g=C("property-list-table"),p=C("sui-table-header-cell"),_=C("sui-table-row"),w=C("sui-table-header"),v=C("sui-table-cell"),x=C("sui-table-body"),$=C("sui-table"),L=C("sui-container");return A(),be("div",null,[t(m,{title:"Rating",sub:"A rating indicates user interest in content"}),t(L,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(d,{title:"Rating",description:"A Basic rating",code:e.ratingCode},{default:i(()=>[t(u)]),_:1},8,["code"]),t(d,{title:"Icon",description:"You can use any available icon as rating indicator",code:e.iconCode},{default:i(()=>[t(u,{defaultRating:2,maxRating:4,color:"yellow"}),RE,zE,t(u,{defaultRating:2,maxRating:4,icon:"heart",color:"red"}),PE,FE,t(u,{defaultRating:2,maxRating:4,icon:"female",color:"purple"}),VE,ME,t(u,{defaultRating:2,maxRating:4,icon:"male",color:"blue"}),HE,NE,t(u,{defaultRating:2,maxRating:4,icon:"cloud",color:"grey"}),OE,qE,t(u,{defaultRating:2,maxRating:4,icon:"cat",color:"pink"}),GE,jE,t(u,{defaultRating:2,maxRating:4,icon:"circle",color:"orange"})]),_:1},8,["code"]),t(d,{title:"Color",description:"You can specify any color of the FUI color palette",code:e.colorCode},{default:i(()=>[t(u,{defaultRating:1,maxRating:7,color:"red"}),UE,YE,t(u,{defaultRating:2,maxRating:7,color:"orange"}),JE,WE,t(u,{defaultRating:3,maxRating:7,color:"yellow"}),KE,XE,t(u,{defaultRating:4,maxRating:7,color:"olive"}),QE,ZE,t(u,{defaultRating:5,maxRating:7,color:"green"}),eR,tR,t(u,{defaultRating:6,maxRating:7,color:"teal"}),iR,lR,t(u,{defaultRating:6,maxRating:7,color:"blue"}),aR,nR,t(u,{defaultRating:5,maxRating:7,color:"violet"}),oR,sR,t(u,{defaultRating:4,maxRating:7,color:"purple"}),rR,uR,t(u,{defaultRating:3,maxRating:7,color:"pink"}),cR,dR,t(u,{defaultRating:2,maxRating:7,color:"brown"}),mR,pR,t(u,{defaultRating:1,maxRating:7,color:"grey"}),fR,gR,t(u,{defaultRating:1,maxRating:7,color:"black"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(d,{title:"Disabled",description:"A rating can be started in non-interactive mode by adding a disabled class",code:e.disabledCode},{default:i(()=>[t(u,{disabled:"",defaultRating:3,maxRating:5,color:"yellow"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(d,{title:"Size",description:"A rating can vary in size",code:e.sizeCode},{default:i(()=>[t(u,{size:"mini",defaultRating:3,maxRating:4,color:"yellow"}),hR,_R,t(u,{size:"tiny",defaultRating:3,maxRating:4,color:"yellow"}),bR,vR,t(u,{size:"small",defaultRating:3,maxRating:4,color:"yellow"}),SR,yR,t(u,{defaultRating:3,maxRating:4,color:"yellow"}),wR,CR,t(u,{size:"large",defaultRating:3,maxRating:4,color:"yellow"}),AR,xR,t(u,{size:"huge",defaultRating:3,maxRating:4,color:"yellow"}),kR,$R,t(u,{size:"massive",defaultRating:3,maxRating:4,color:"yellow"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(g,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t($,{celled:""},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Name")]),_:1}),t(p,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(x,null,{default:i(()=>[(A(!0),be(Ae,null,Qe(e.events,h=>(A(),B(_,{key:h.name},{default:i(()=>[t(v,null,{default:i(()=>[n(Te(h.name),1)]),_:2},1024),t(v,null,{default:i(()=>[n(Te(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const TR=Re(EE,[["render",BR]]),LR=P({name:"SidebarDoc",components:{DocPageHeader:pt,DocExample:lt,PropertyListTable:An},setup(){return{visible1:j(!1),sidebarCode:`<sui-grid :columns="1">
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
</sui-grid>`,properties:[{name:"animation",type:"string",default:"overlay",description:"Specifies the animation of the sidebar."},{name:"dimmed",type:"boolean",default:"false",description:"When specified, display the dim inside pusher content."},{name:"direction",type:"string",default:"left",description:"Specifies the direction the sidebar should appear on."},{name:"visible",type:"boolean",default:"false",description:"Specifies the visibility of the sidebar."}],events:[{name:"hide",description:"Callback to invoke when sidebar hide."},{name:"show",description:"Callback to invoke when sidebar show."}]}}}),DR={class:"pusher"};function IR(e,l,a,o,s,c){const m=C("doc-page-header"),f=C("sui-header"),u=C("sui-icon"),d=C("sui-button"),g=C("sui-grid-column"),p=C("sui-menu-item"),_=C("sui-sidebar"),w=C("sui-image"),v=C("sui-segment"),x=C("sui-grid"),$=C("doc-example"),L=C("property-list-table"),h=C("sui-table-header-cell"),b=C("sui-table-row"),k=C("sui-table-header"),T=C("sui-table-cell"),E=C("sui-table-body"),V=C("sui-table"),M=C("sui-container");return A(),be("div",null,[t(m,{title:"Sidebar",sub:"A sidebar hides additional content beside a page"}),t(M,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t($,{title:"Sidebar",description:"A sidebar",code:e.sidebarCode},{default:i(()=>[t(x,{columns:1},{default:i(()=>[t(g,null,{default:i(()=>[t(d,{onClick:l[0]||(l[0]=F=>e.visible1=!e.visible1),icon:""},{default:i(()=>[t(u,{name:"arrow right"})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(v,{class:"pushable"},{default:i(()=>[t(_,{visible:e.visible1,"onUpdate:visible":l[1]||(l[1]=F=>e.visible1=F),dimmed:"",icon:"labeled",inverted:""},{default:i(()=>[t(p,null,{default:i(()=>[t(u,{name:"home"}),n(" Home ")]),_:1}),t(p,null,{default:i(()=>[t(u,{name:"gamepad"}),n(" Games ")]),_:1}),t(p,null,{default:i(()=>[t(u,{name:"camera"}),n(" Channels ")]),_:1})]),_:1},8,["visible"]),S("div",DR,[t(v,null,{default:i(()=>[t(f,{as:"h2"},{default:i(()=>[n("Main Header")]),_:1}),t(w,{src:Oe})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(L,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(V,{celled:""},{default:i(()=>[t(k,null,{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Name")]),_:1}),t(h,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(E,null,{default:i(()=>[(A(!0),be(Ae,null,Qe(e.events,F=>(A(),B(b,{key:F.name},{default:i(()=>[t(T,null,{default:i(()=>[n(Te(F.name),1)]),_:2},1024),t(T,null,{default:i(()=>[n(Te(F.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const ER=Re(LR,[["render",IR]]),RR=P({name:"SliderDoc",components:{DocPageHeader:pt,DocExample:lt},setup(){const e=j(5),l='<sui-slider v-model="slider1" />',a=j(4),o='<sui-slider labeled v-model="slider2" />',s=j(6),c='<sui-slider labeled="ticked" v-model="slider3" />',m=j(0),f=`<sui-slider
  v-model="slider4"
  labeled="ticked"
  :labels='["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ/ς", "τ", "υ", "φ"]'
  :max="20"
/>`,u=j(40),d='<sui-slider v-model="slider5" labeled :step="5" :max="120" :min="20" />',g=j([]);g.value.push(20,60);const p='<sui-slider v-model="slider6" range labeled="ticked" :min="5" :max="100" :step="5" />',_=j(7),w='<sui-slider disabled v-model="slider7" />',v=j(8),x=`<sui-segment inverted>
  <sui-slider inverted v-model="slider8" />
</sui-segment>`,$=j(3),L='<sui-slider reversed v-model="slider9" />',h=j(18),b='<sui-slider vertical v-model="slider10" :max="20" />',k=j(5),T=j(5),E=j(5),V=j(5),M=j(5),F=j(5),G=j(5),Q=j(5),Y=j(5),ge=j(5),Be=j(5),U=j(5),K=j(5),de=`<sui-slider color="red" v-model="redSlider" />
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
</sui-segment>`,Le=j(5),Je=j(5),ot=j(5);return{slider1:e,sliderCode:l,slider2:a,labeledSliderCode:o,slider3:s,labeledTickedCode:c,slider4:m,customLabelsCode:f,slider5:u,stepCode:d,slider6:g,rangeCode:p,slider7:_,disabledCode:w,slider8:v,invertedCode:x,slider9:$,reversedCode:L,slider10:h,verticalCode:b,redSlider:k,orangeSlider:T,yellowSlider:E,oliveSlider:V,greenSlider:M,tealSlider:F,blueSlider:G,violetSlider:Q,purpleSlider:Y,pinkSlider:ge,brownSlider:Be,greySlider:U,blackSlider:K,coloredCode:de,invertedColoredCode:le,smallSlider:Le,largeSlider:Je,bigSlider:ot,sizeCode:`<sui-slider size="small" color="red" v-model="smallSlider" />
<sui-slider size="large" color="yellow" v-model="largeSlider" />
<sui-slider size="big" color="olive" v-model="bigSlider" />`,properties:[{name:"color",type:"string",default:"",description:"A slider can have different colors"},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"inverted",type:"boolean",default:!1,description:"A slider can be formatted to appear on dark backgrounds."},{name:"labeled",type:"boolean|string",default:!1,description:"A slider can show its labels."},{name:"labels",type:"string[]",default:"",description:"A slider can have a custom label according to the label value."},{name:"max",type:"number",default:10,description:"Maximum boundary value."},{name:"min",type:"number",default:0,description:"Mininum boundary value."},{name:"modelValue",type:"number|number[]",default:0,description:"A value of component."},{name:"range",type:"boolean",default:!1,description:"When specified, allows two boundary values to be picked."},{name:"reversed",type:"boolean",default:!1,description:"A slider can be reversed."},{name:"size",type:"string",default:"",description:"A slider can have different sizes."},{name:"step",type:"number",default:1,description:"Step factor to increment/decrement the value."},{name:"vertical",type:"boolean",default:!1,description:"When specified, orientation of the slider becomes vertical."},{name:"verticalHeight",type:"number|string",default:200,description:"Height of the vertical slider."}],events:[{name:"change",description:"Callback to invoke on value change."},{name:"slideend",description:"Callback to invoke when slide end."}]}}});function zR(e,l,a,o,s,c){const m=C("doc-page-header"),f=C("sui-header"),u=C("sui-slider"),d=C("doc-example"),g=C("sui-segment"),p=C("sui-table-header-cell"),_=C("sui-table-row"),w=C("sui-table-header"),v=C("sui-table-cell"),x=C("sui-table-body"),$=C("sui-table"),L=C("sui-container");return A(),be("div",null,[t(m,{title:"Slider",sub:"A slider allows users to select values within a range"}),t(L,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(d,{title:"Slider",description:"A standard slider",code:e.sliderCode},{default:i(()=>[t(u,{modelValue:e.slider1,"onUpdate:modelValue":l[0]||(l[0]=h=>e.slider1=h)},null,8,["modelValue"]),n(" "+Te(e.slider1),1)]),_:1},8,["code"]),t(d,{title:"Labeled Slider",description:"A slider that show its labels",code:e.labeledSliderCode},{default:i(()=>[t(u,{labeled:"",modelValue:e.slider2,"onUpdate:modelValue":l[1]||(l[1]=h=>e.slider2=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(d,{title:"Labeled Ticked Slider",description:"A slider that show its labels and ticks",code:e.labeledTickedCode},{default:i(()=>[t(u,{labeled:"ticked",modelValue:e.slider3,"onUpdate:modelValue":l[2]||(l[2]=h=>e.slider3=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(d,{title:"Custom Interpreted Labels",description:"You can provide a function which returns a custom label according to the label value",code:e.customLabelsCode},{default:i(()=>[t(u,{modelValue:e.slider4,"onUpdate:modelValue":l[3]||(l[3]=h=>e.slider4=h),labeled:"ticked",labels:["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ/ς","τ","υ","φ"],max:20},null,8,["modelValue"])]),_:1},8,["code"]),t(d,{title:"Step",description:"A slider can change the default step increment",code:e.stepCode},{default:i(()=>[t(u,{modelValue:e.slider5,"onUpdate:modelValue":l[4]||(l[4]=h=>e.slider5=h),labeled:"",step:5,max:120,min:20},null,8,["modelValue"]),n(" "+Te(e.slider5),1)]),_:1},8,["code"]),t(d,{title:"Range",description:"A range slider which allow you to select a range between two values",code:e.rangeCode},{default:i(()=>[t(u,{modelValue:e.slider6,"onUpdate:modelValue":l[5]||(l[5]=h=>e.slider6=h),range:"",labeled:"ticked",min:5,max:100,step:5},null,8,["modelValue"]),n(" "+Te(e.slider6),1)]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(d,{title:"Disabled",description:"A slider can appear disabled",code:e.disabledCode},{default:i(()=>[t(u,{disabled:"",modelValue:e.slider7,"onUpdate:modelValue":l[6]||(l[6]=h=>e.slider7=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(d,{title:"Inverted",description:"A slider can be inverted",code:e.invertedCode},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(u,{inverted:"",modelValue:e.slider8,"onUpdate:modelValue":l[7]||(l[7]=h=>e.slider8=h)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(d,{title:"Reversed",description:"A slider can be reversed",code:e.reversedCode},{default:i(()=>[t(u,{reversed:"",modelValue:e.slider9,"onUpdate:modelValue":l[8]||(l[8]=h=>e.slider9=h)},null,8,["modelValue"]),n(" "+Te(e.slider9),1)]),_:1},8,["code"]),t(d,{title:"Vertical",description:"A slider can be vertical",code:e.verticalCode},{default:i(()=>[t(u,{vertical:"",modelValue:e.slider10,"onUpdate:modelValue":l[9]||(l[9]=h=>e.slider10=h),max:20},null,8,["modelValue"]),n(" "+Te(e.slider10),1)]),_:1},8,["code"]),t(d,{title:"Colored",description:"A slider can be different colors",code:e.coloredCode},{default:i(()=>[t(u,{color:"red",modelValue:e.redSlider,"onUpdate:modelValue":l[10]||(l[10]=h=>e.redSlider=h)},null,8,["modelValue"]),t(u,{color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":l[11]||(l[11]=h=>e.orangeSlider=h)},null,8,["modelValue"]),t(u,{color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":l[12]||(l[12]=h=>e.yellowSlider=h)},null,8,["modelValue"]),t(u,{color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":l[13]||(l[13]=h=>e.oliveSlider=h)},null,8,["modelValue"]),t(u,{color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":l[14]||(l[14]=h=>e.greenSlider=h)},null,8,["modelValue"]),t(u,{color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":l[15]||(l[15]=h=>e.tealSlider=h)},null,8,["modelValue"]),t(u,{color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":l[16]||(l[16]=h=>e.blueSlider=h)},null,8,["modelValue"]),t(u,{color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":l[17]||(l[17]=h=>e.violetSlider=h)},null,8,["modelValue"]),t(u,{color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":l[18]||(l[18]=h=>e.purpleSlider=h)},null,8,["modelValue"]),t(u,{color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":l[19]||(l[19]=h=>e.pinkSlider=h)},null,8,["modelValue"]),t(u,{color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":l[20]||(l[20]=h=>e.brownSlider=h)},null,8,["modelValue"]),t(u,{color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":l[21]||(l[21]=h=>e.greySlider=h)},null,8,["modelValue"]),t(u,{color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":l[22]||(l[22]=h=>e.blackSlider=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(d,{title:"Inverted Colored",description:"A slider can be different colors while inverted",code:e.invertedColoredCode},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(u,{inverted:"",color:"red",modelValue:e.redSlider,"onUpdate:modelValue":l[23]||(l[23]=h=>e.redSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":l[24]||(l[24]=h=>e.orangeSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":l[25]||(l[25]=h=>e.yellowSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":l[26]||(l[26]=h=>e.oliveSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":l[27]||(l[27]=h=>e.greenSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":l[28]||(l[28]=h=>e.tealSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":l[29]||(l[29]=h=>e.blueSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":l[30]||(l[30]=h=>e.violetSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":l[31]||(l[31]=h=>e.purpleSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":l[32]||(l[32]=h=>e.pinkSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":l[33]||(l[33]=h=>e.brownSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":l[34]||(l[34]=h=>e.greySlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":l[35]||(l[35]=h=>e.blackSlider=h)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(d,{title:"Size",description:"A slider can have different sizes",code:e.sizeCode},{default:i(()=>[t(u,{size:"small",color:"red",modelValue:e.smallSlider,"onUpdate:modelValue":l[36]||(l[36]=h=>e.smallSlider=h)},null,8,["modelValue"]),t(u,{size:"large",color:"yellow",modelValue:e.largeSlider,"onUpdate:modelValue":l[37]||(l[37]=h=>e.largeSlider=h)},null,8,["modelValue"]),t(u,{size:"big",color:"olive",modelValue:e.bigSlider,"onUpdate:modelValue":l[38]||(l[38]=h=>e.bigSlider=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t($,{celled:""},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Name")]),_:1}),t(p,null,{default:i(()=>[n("Type")]),_:1}),t(p,null,{default:i(()=>[n("Default")]),_:1}),t(p,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(x,null,{default:i(()=>[(A(!0),be(Ae,null,Qe(e.properties,h=>(A(),B(_,{key:h.name},{default:i(()=>[t(v,null,{default:i(()=>[n(Te(h.name),1)]),_:2},1024),t(v,null,{default:i(()=>[n(Te(h.type),1)]),_:2},1024),t(v,null,{default:i(()=>[n(Te(h.default),1)]),_:2},1024),t(v,null,{default:i(()=>[n(Te(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t($,{celled:""},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Name")]),_:1}),t(p,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(x,null,{default:i(()=>[(A(!0),be(Ae,null,Qe(e.events,h=>(A(),B(_,{key:h.name},{default:i(()=>[t(v,null,{default:i(()=>[n(Te(h.name),1)]),_:2},1024),t(v,null,{default:i(()=>[n(Te(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const PR=Re(RR,[["render",zR]]),FR=P({name:"TabDoc",components:{DocPageHeader:pt,DocExample:lt,PropertyListTable:An},setup(){return{basicCode:`<sui-tab>
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
</sui-tab>`,tabProperties:[{name:"activeIndex",type:"string",default:0,description:"Index of the active tab."},{name:"pointing",type:"boolean",default:!1,description:""}],tabPanelProperties:[{name:"header",type:"boolean",default:"null",description:"Orientation of tab headers."}],events:[{name:"tab-change",description:"Callback to invoke when an active tab is changed."},{name:"tab-click",description:"Callback to invoke when an tab is clicked."}]}}});function VR(e,l,a,o,s,c){const m=C("doc-page-header"),f=C("sui-header"),u=C("sui-tab-panel"),d=C("sui-tab"),g=C("doc-example"),p=C("property-list-table"),_=C("sui-table-header-cell"),w=C("sui-table-row"),v=C("sui-table-header"),x=C("sui-table-cell"),$=C("sui-table-body"),L=C("sui-table"),h=C("sui-container");return A(),be("div",null,[t(m,{title:"Tab",sub:"A tab is a hidden section of content activated by a menu"}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Examples")]),_:1}),t(g,{title:"Basic",code:e.basicCode},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(u,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(u,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Pointing",code:e.pointingCode},{default:i(()=>[t(d,{pointing:""},{default:i(()=>[t(u,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(u,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(u,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Secondary",code:e.secondaryCode},{default:i(()=>[t(d,{secondary:""},{default:i(()=>[t(u,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(u,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(u,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Text",code:e.textCode},{default:i(()=>[t(d,{text:""},{default:i(()=>[t(u,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(u,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(u,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(f,{as:"h3"},{default:i(()=>[n("Tab")]),_:1}),t(p,{properties:e.tabProperties},null,8,["properties"]),t(f,{as:"h3"},{default:i(()=>[n("TabPanel")]),_:1}),t(p,{properties:e.tabPanelProperties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(L,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Name")]),_:1}),t(_,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[(A(!0),be(Ae,null,Qe(e.events,b=>(A(),B(w,{key:b.name},{default:i(()=>[t(x,null,{default:i(()=>[n(Te(b.name),1)]),_:2},1024),t(x,null,{default:i(()=>[n(Te(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const MR=Re(FR,[["render",VR]]),HR=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({ message: 'I am a toast, nice to meet you !' })
}
<\/script>`,NR={__name:"MinimalDoc",setup(e){const{toast:l}=ut(),a=()=>{l({message:"I am a toast, nice to meet you !"})};return(o,s)=>{const c=C("SuiButton");return A(),B(I,{label:"Minimal",code:HR},{description:i(()=>[n(" A minimal toast will just display a message. ")]),example:i(()=>[t(c,{onClick:a},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},OR=`<template>
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
<\/script>`,qR={__name:"TitledDoc",setup(e){const{toast:l}=ut(),a=()=>{l({title:"Better ?",message:"Hey look, I have a title !"})};return(o,s)=>{const c=C("SuiButton");return A(),B(I,{label:"Titled",code:OR},{description:i(()=>[n(" You can add a title to your toast. ")]),example:i(()=>[t(c,{onClick:a},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},GR=`<template>
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
<\/script>`,jR={__name:"ProgressBarDoc",setup(e){const{toast:l}=ut(),a=o=>{l({title:"LOOK",message:"See, how long i will last",showProgress:"bottom",showProgressColor:o})};return(o,s)=>{const c=C("SuiButton");return A(),B(I,{label:"Progress Bar",code:GR},{description:i(()=>[n(" You can attach a progress bar to your toast. ")]),example:i(()=>[t(c,{onClick:a},{default:i(()=>[n("Show")]),_:1}),t(c,{color:"red",onClick:s[0]||(s[0]=m=>a("red"))},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},UR=`<template>
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
<\/script>`,YR={__name:"ToastTypeDoc",setup(e){const{toast:l}=ut(),a=o=>{l({message:"You're using the good framework !",type:o})};return(o,s)=>{const c=C("SuiButton");return A(),B(I,{label:"Toast Type",code:UR},{description:i(()=>[n(" A toast can be used to display different types of informations. ")]),example:i(()=>[t(c,{onClick:s[0]||(s[0]=m=>a("success")),positive:""},{default:i(()=>[n("Success")]),_:1}),t(c,{onClick:s[1]||(s[1]=m=>a("error")),negative:""},{default:i(()=>[n("Error")]),_:1}),t(c,{onClick:s[2]||(s[2]=m=>a("warning")),color:"yellow"},{default:i(()=>[n("Warning")]),_:1})]),_:1})}}},JR=`<template>
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
<\/script>`,WR={__name:"PositionDoc",setup(e){const{toast:l}=ut(),a=o=>{l({position:o,message:"Look, I'm here !"})};return(o,s)=>{const c=C("SuiButton");return A(),B(I,{label:"Position",code:JR},{description:i(()=>[n(" A toast can appear at different positions on the screen. ")]),example:i(()=>[t(c,{onClick:s[0]||(s[0]=m=>a("top left"))},{default:i(()=>[n("Top Left")]),_:1}),t(c,{onClick:s[1]||(s[1]=m=>a("bottom right"))},{default:i(()=>[n("Bottom Right")]),_:1})]),_:1})}}},KR=S("br",null,null,-1),XR=`<template>
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
<\/script>`,QR={__name:"AttachedPosition",setup(e){const{toast:l}=ut(),a=o=>{l({attached:o,title:"Watch out!",message:`I am a ${o} attached toast`})};return(o,s)=>{const c=C("SuiButton");return A(),B(I,{label:"Attached Position",code:XR},{description:i(()=>[n(" A toast can have an attached position which will show the toast over the whole width of the screen."),KR,n(" Just like notifications on mobile devices. ")]),example:i(()=>[t(c,{onClick:s[0]||(s[0]=m=>a("top"))},{default:i(()=>[n("Top")]),_:1}),t(c,{onClick:s[1]||(s[1]=m=>a("bottom"))},{default:i(()=>[n("Bottom")]),_:1})]),_:1})}}},ZR=`<template>
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
<\/script>`,e2={__name:"DirectionDoc",setup(e){const{toast:l}=ut(),a=()=>{l({horizontal:!0,position:"top left",title:"Watch out!",message:"Next one will open to the right"})};return(o,s)=>{const c=C("SuiButton");return A(),B(I,{label:"Direction",code:ZR},{description:i(()=>[n(" Toasts can stack horizontal ")]),example:i(()=>[t(c,{onClick:a},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},t2=`<template>
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
<\/script>`,i2={__name:"CenterAligned",setup(e){const{toast:l}=ut(),a=()=>{l({centered:!0,title:"Veronika has joined",message:"Welcome to the Fomantic-UI community!"})};return(o,s)=>{const c=C("SuiButton");return A(),B(I,{label:"Center Aligned",code:t2},{description:i(()=>[n(" The toasts content can be shown center aligned. ")]),example:i(()=>[t(c,{onClick:a},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},l2=`<template>
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
<\/script>`,a2={__name:"DurationDoc",setup(e){const{toast:l}=ut(),a=o=>{l({displayTime:o,message:o===0?"I'll stay here until you click on me !":"You will see me for 5 seconds."})};return(o,s)=>{const c=C("SuiButton");return A(),B(I,{label:"Duration",code:l2},{description:i(()=>[n(" You can choose how long a toast should be displayed. ")]),example:i(()=>[t(c,{onClick:s[0]||(s[0]=m=>a(5e3))},{default:i(()=>[n("5 seconds")]),_:1}),t(c,{onClick:s[1]||(s[1]=m=>a(0))},{default:i(()=>[n("Stay")]),_:1})]),_:1})}}},n2=`<template>
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
<\/script>`,o2={__name:"MessageStyleDoc",setup(e){const{toast:l}=ut(),a=()=>{l({messageStyle:!0,message:"I got my style from the message class",color:"purple"})};return(o,s)=>{const c=C("SuiButton");return A(),B(I,{label:"Use Message Style",code:n2},{description:i(()=>[n(" You can use all of the styles and colors from the message component. ")]),example:i(()=>[t(c,{onClick:a},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},s2=`<template>
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
<\/script>`,r2={__name:"IncreasingProgressBarDoc",setup(e){const{toast:l}=ut(),a=()=>{l({title:"LOOK",message:"See, how long i will last",showProgress:"top",showProgressUp:!0})};return(o,s)=>{const c=C("SuiButton");return A(),B(I,{label:"Increasing Progress Bar",code:s2},{description:i(()=>[n(" You can use the progress bar to show the progress of a task. ")]),example:i(()=>[t(c,{onClick:a},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},u2=`<template>
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
<\/script>`,c2={__name:"ColorVariantsDoc",setup(e){const{toast:l}=ut(),a=j(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],s=()=>{l({color:o[a.value],message:"I am a colorful toast",showProgress:"bottom"}),a.value=(a.value+1)%o.length};return(c,m)=>{const f=C("SuiButton");return A(),B(I,{label:"Color Variants",code:u2},{description:i(()=>[n(" You can use all of the usual color names. ")]),example:i(()=>[t(f,{onClick:s},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},d2={__name:"InvertedColorsDoc",setup(e){const{toast:l}=ut(),a=j(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],s=()=>{l({color:o[a.value],inverted:!0,message:"I am an inverted colorful toast",showProgress:"bottom"}),a.value=(a.value+1)%o.length};return(c,m)=>{const f=C("SuiButton");return A(),B(I,{label:"Inverted Colors",code:c.code},{description:i(()=>[n(" Same as above, just add inverted to the class definition. ")]),example:i(()=>[t(f,{onClick:s},{default:i(()=>[n("Show")]),_:1})]),_:1},8,["code"])}}},m2=`<template>
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
<\/script>`,p2={__name:"ActionGeneralDoc",setup(e){const{toast:l}=ut(),a=()=>{l({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[X(z,{color:"green",onclick:()=>{l({message:'You clicked "yes", toast closes by default'}),o()}},()=>[X(W,{name:"check"}),"Yes"]),X(z,{color:"red",icon:!0},()=>[X(W,{name:"ban"})]),X(z,{color:"blue",onclick:()=>l({message:"Returning false from the click handler avoids closing the toast"})},()=>"?")]})};return(o,s)=>(A(),B(I,{label:"General",code:m2},{description:i(()=>[n(" Define click actions to your toast by providing a text and/or icon, optional class and click handler. ")]),example:i(()=>[t(r(z),{onClick:a},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},f2=`<template>
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
<\/script>`,g2={__name:"ActionBasicDoc",setup(e){const{toast:l}=ut(),a=()=>{l({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[X(z,{color:"yellow",onclick:()=>{l({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really")],actionsProps:{basic:!0,aligned:"left"}})};return(o,s)=>(A(),B(I,{label:"Basic",code:f2},{description:i(()=>[n(" The classActions setting provides you a way to adjust the overall appearance of the action buttons. Using basic class does not lighten the actions background. left aligns the buttons to the left. ")]),example:i(()=>[t(r(z),{onClick:a},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},h2=`<template>
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
<\/script>`,_2={__name:"ActionAttachedDoc",setup(e){const{toast:l}=ut(),a=()=>{l({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[X(z,{color:"green",onclick:()=>{l({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),X(z,{color:"red",onclick:()=>{l({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"top"}})};return(o,s)=>(A(),B(I,{label:"Attached",code:h2},{description:i(()=>[n(" Using attached converts your actions into a Button group. Also add top to display the actions attached to the top of the toast. ")]),example:i(()=>[t(r(z),{onClick:a},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},b2=`<template>
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
<\/script>`,v2={__name:"ActionVerticalDoc",setup(e){const{toast:l}=ut(),a=()=>{l({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[X(z,{color:"green",onclick:()=>{l({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),X(z,{color:"red",onclick:()=>{l({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{vertical:!0}})};return(o,s)=>(A(),B(I,{label:"Vertical",code:b2},{description:i(()=>[n(" You can use vertical to display your actions to the right of the toast. ")]),example:i(()=>[t(r(z),{onClick:a},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},S2=S("br",null,null,-1),y2=`<template>
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
<\/script>`,w2={__name:"ActionVerticalAttachedDoc",setup(e){const{toast:l}=ut(),a=()=>{l({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[X(z,{color:"green",onclick:()=>{l({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),X(z,{color:"red",onclick:()=>{l({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"left",vertical:!0}})};return(o,s)=>(A(),B(I,{label:"Vertical Attached",code:y2},{description:i(()=>[n(" Vertical actions can also be displayed as button groups using vertical attached."),S2,n(" Vertical attached actions also support left. ")]),example:i(()=>[t(r(z),{onClick:a},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},C2={__name:"Toast",setup(e){const l=[{id:"minimal",label:"Minimal",category:"Types",component:NR},{id:"titled",label:"Titled",category:"Types",component:qR},{id:"progress-bar",label:"Progress Bar",category:"Types",component:jR},{id:"toast-type",label:"Toast Type",category:"Variations",component:YR},{id:"position",label:"Position",category:"Variations",component:WR},{id:"attached-position",label:"Attached Position",category:"Variations",component:QR},{id:"direction",label:"Direction",category:"Variations",component:e2},{id:"center-aligned",label:"Center Aligned",category:"Variations",component:i2},{id:"duration",label:"Duration",category:"Variations",component:a2},{id:"message-style",label:"Use Message Style",category:"Variations",component:o2},{id:"increasing-progress-bar",label:"Increasing Progress Bar",category:"Variations",component:r2},{id:"color-variants",label:"Color Variants",category:"Variations",component:c2},{id:"inverted-colors",label:"Inverted Colors",category:"Variations",component:d2},{id:"general",label:"General",category:"Actions",component:p2},{id:"action-basic",label:"Basic",category:"Actions",component:g2},{id:"action-attached",label:"Attached",category:"Actions",component:_2},{id:"action-vertical",label:"Vertical",category:"Actions",component:v2},{id:"action-vertical-attached",label:"Vertical Attached",category:"Actions",component:w2}];return(a,o)=>(A(),B(rt,{title:"Toast",description:"A toast allows users to be notified of an event","component-docs":l}))}},A2=[{path:"/",component:Ah,children:[{path:"/",component:Qh},{path:"elements/button",component:kw},{path:"elements/container",component:Vw},{path:"elements/divider",component:uC},{path:"elements/emoji",component:SC},{path:"elements/flag",component:xC},{path:"elements/header",component:lA},{path:"elements/icon",component:zA},{path:"elements/image",component:w0},{path:"elements/input",component:Y0},{path:"elements/label",component:lk},{path:"elements/list",component:Tk},{path:"elements/loader",component:Qk},{path:"elements/rail",component:i$},{path:"elements/reveal",component:g$},{path:"elements/segment",component:NT},{path:"elements/step",component:YT},{path:"collections/breadcrumb",component:cL},{path:"collections/form",component:TL},{path:"collections/grid",component:PL},{path:"collections/menu",component:GL},{path:"collections/message",component:iD},{path:"collections/table",component:gD},{path:"views/advertisement",component:()=>zl(()=>import("./Advertisement-9RL9fPFs.js"),__vite__mapDeps([]))},{path:"views/card",component:()=>zl(()=>import("./Card-_Yw1KbyR.js"),__vite__mapDeps([]))},{path:"views/comment",component:()=>zl(()=>import("./Comment-eq8RypzW.js"),__vite__mapDeps([]))},{path:"views/feed",component:FD},{path:"views/item",component:kI},{path:"views/statistic",component:()=>zl(()=>import("./Statistic-V2oXch8p.js"),__vite__mapDeps([]))},{path:"modules/accordion",component:WI},{path:"modules/calendar",component:QI},{path:"modules/checkbox",component:rE},{path:"modules/dimmer",component:dE},{path:"modules/dropdown",component:fE},{path:"modules/embed",component:_E},{path:"modules/modal",component:xE},{path:"modules/popup",component:IE},{path:"modules/progress",component:()=>zl(()=>import("./Progress-m1D529ax.js"),__vite__mapDeps([]))},{path:"modules/rating",component:TR},{path:"modules/sidebar",component:ER},{path:"modules/slider",component:PR},{path:"modules/tab",component:MR},{path:"modules/toast",component:C2}]}],x2=lh({history:bg("/vue-fomantic-ui/"),routes:A2,scrollBehavior(e,l,a){var o;e.hash||(o=document.querySelector(".article"))==null||o.scrollTo(0,0)}});(function(e){var l="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",a={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},o={bash:a,environment:{pattern:RegExp("\\$"+l),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+l),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+l),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:o},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:a}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:o},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:o.entity}}],environment:{pattern:RegExp("\\$?"+l),alias:"constant"},variable:o.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},a.inside=e.languages.bash;for(var s=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],c=o.variable[1].inside,m=0;m<s.length;m++)c[s[m]]=e.languages.bash[s[m]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);const xs=Ec(Qf);xs.use(x2);xs.use(ty);xs.mount("#app");export{z as $,Ai as A,Rd as B,K0 as C,rt as D,Lo as E,Ae as F,Ra as G,Lv as H,xo as I,ko as J,E_ as K,Dv as L,Ao as M,bb as R,R_ as W,yb as X,F_ as Z,I as _,n as a,t as b,B as c,S as d,pe as e,P as f,W as g,be as h,Qe as i,Te as j,_t as k,fe as l,Ze as m,va as n,A as o,N as p,P_ as q,j as r,Tt as s,oe as t,r as u,a_ as v,i as w,Y_ as x,O_ as y,zd as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

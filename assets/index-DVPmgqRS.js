(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function a(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=a(s);fetch(s.href,c)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ln(e,l){const a=new Set(e.split(","));return l?o=>a.has(o.toLowerCase()):o=>a.has(o)}const qe={},sl=[],vt=()=>{},zd=()=>!1,ma=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Io=e=>e.startsWith("onUpdate:"),Ke=Object.assign,Do=(e,l)=>{const a=e.indexOf(l);a>-1&&e.splice(a,1)},Pd=Object.prototype.hasOwnProperty,Re=(e,l)=>Pd.call(e,l),ge=Array.isArray,rl=e=>xl(e)==="[object Map]",Ji=e=>xl(e)==="[object Set]",Ts=e=>xl(e)==="[object Date]",Vd=e=>xl(e)==="[object RegExp]",we=e=>typeof e=="function",Xe=e=>typeof e=="string",wi=e=>typeof e=="symbol",je=e=>e!==null&&typeof e=="object",Eo=e=>(je(e)||we(e))&&we(e.then)&&we(e.catch),qr=Object.prototype.toString,xl=e=>qr.call(e),Fd=e=>xl(e).slice(8,-1),Gr=e=>xl(e)==="[object Object]",Ro=e=>Xe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,jl=ln(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),an=e=>{const l=Object.create(null);return a=>l[a]||(l[a]=e(a))},Md=/-(\w)/g,_t=an(e=>e.replace(Md,(l,a)=>a?a.toUpperCase():"")),Hd=/\B([A-Z])/g,Tt=an(e=>e.replace(Hd,"-$1").toLowerCase()),pa=an(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ul=an(e=>e?`on${pa(e)}`:""),qt=(e,l)=>!Object.is(e,l),ul=(e,l)=>{for(let a=0;a<e.length;a++)e[a](l)},Ma=(e,l,a)=>{Object.defineProperty(e,l,{configurable:!0,enumerable:!1,value:a})},ea=e=>{const l=parseFloat(e);return isNaN(l)?e:l},Ha=e=>{const l=Xe(e)?Number(e):NaN;return isNaN(l)?e:l};let Ls;const jr=()=>Ls||(Ls=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Nd="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",Od=ln(Nd);function kl(e){if(ge(e)){const l={};for(let a=0;a<e.length;a++){const o=e[a],s=Xe(o)?Ud(o):kl(o);if(s)for(const c in s)l[c]=s[c]}return l}else if(Xe(e)||je(e))return e}const qd=/;(?![^(]*\))/g,Gd=/:([^]+)/,jd=/\/\*[^]*?\*\//g;function Ud(e){const l={};return e.replace(jd,"").split(qd).forEach(a=>{if(a){const o=a.split(Gd);o.length>1&&(l[o[0].trim()]=o[1].trim())}}),l}function fa(e){let l="";if(Xe(e))l=e;else if(ge(e))for(let a=0;a<e.length;a++){const o=fa(e[a]);o&&(l+=o+" ")}else if(je(e))for(const a in e)e[a]&&(l+=a+" ");return l.trim()}function Yd(e){if(!e)return null;let{class:l,style:a}=e;return l&&!Xe(l)&&(e.class=fa(l)),a&&(e.style=kl(a)),e}const Jd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wd=ln(Jd);function Ur(e){return!!e||e===""}function Kd(e,l){if(e.length!==l.length)return!1;let a=!0;for(let o=0;a&&o<e.length;o++)a=li(e[o],l[o]);return a}function li(e,l){if(e===l)return!0;let a=Ts(e),o=Ts(l);if(a||o)return a&&o?e.getTime()===l.getTime():!1;if(a=wi(e),o=wi(l),a||o)return e===l;if(a=ge(e),o=ge(l),a||o)return a&&o?Kd(e,l):!1;if(a=je(e),o=je(l),a||o){if(!a||!o)return!1;const s=Object.keys(e).length,c=Object.keys(l).length;if(s!==c)return!1;for(const m in e){const f=e.hasOwnProperty(m),u=l.hasOwnProperty(m);if(f&&!u||!f&&u||!li(e[m],l[m]))return!1}}return String(e)===String(l)}function nn(e,l){return e.findIndex(a=>li(a,l))}const $e=e=>Xe(e)?e:e==null?"":ge(e)||je(e)&&(e.toString===qr||!we(e.toString))?JSON.stringify(e,Yr,2):String(e),Yr=(e,l)=>l&&l.__v_isRef?Yr(e,l.value):rl(l)?{[`Map(${l.size})`]:[...l.entries()].reduce((a,[o,s],c)=>(a[kn(o,c)+" =>"]=s,a),{})}:Ji(l)?{[`Set(${l.size})`]:[...l.values()].map(a=>kn(a))}:wi(l)?kn(l):je(l)&&!ge(l)&&!Gr(l)?String(l):l,kn=(e,l="")=>{var a;return wi(e)?`Symbol(${(a=e.description)!=null?a:l})`:e};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kt;class zo{constructor(l=!1){this.detached=l,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kt,!l&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}run(l){if(this._active){const a=kt;try{return kt=this,l()}finally{kt=a}}}on(){kt=this}off(){kt=this.parent}stop(l){if(this._active){let a,o;for(a=0,o=this.effects.length;a<o;a++)this.effects[a].stop();for(a=0,o=this.cleanups.length;a<o;a++)this.cleanups[a]();if(this.scopes)for(a=0,o=this.scopes.length;a<o;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!l){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Xd(e){return new zo(e)}function Jr(e,l=kt){l&&l.active&&l.effects.push(e)}function Po(){return kt}function Wr(e){kt&&kt.cleanups.push(e)}let zi;class bl{constructor(l,a,o,s){this.fn=l,this.trigger=a,this.scheduler=o,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Jr(this,s)}get dirty(){if(this._dirtyLevel===1){Wi();for(let l=0;l<this._depsLength;l++){const a=this.deps[l];if(a.computed&&(Qd(a.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),Ki()}return this._dirtyLevel>=2}set dirty(l){this._dirtyLevel=l?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let l=vi,a=zi;try{return vi=!0,zi=this,this._runnings++,Is(this),this.fn()}finally{Ds(this),this._runnings--,zi=a,vi=l}}stop(){var l;this.active&&(Is(this),Ds(this),(l=this.onStop)==null||l.call(this),this.active=!1)}}function Qd(e){return e.value}function Is(e){e._trackId++,e._depsLength=0}function Ds(e){if(e.deps&&e.deps.length>e._depsLength){for(let l=e._depsLength;l<e.deps.length;l++)Kr(e.deps[l],e);e.deps.length=e._depsLength}}function Kr(e,l){const a=e.get(l);a!==void 0&&l._trackId!==a&&(e.delete(l),e.size===0&&e.cleanup())}function Zd(e,l){e.effect instanceof bl&&(e=e.effect.fn);const a=new bl(e,vt,()=>{a.dirty&&a.run()});l&&(Ke(a,l),l.scope&&Jr(a,l.scope)),(!l||!l.lazy)&&a.run();const o=a.run.bind(a);return o.effect=a,o}function em(e){e.effect.stop()}let vi=!0,Wn=0;const Xr=[];function Wi(){Xr.push(vi),vi=!1}function Ki(){const e=Xr.pop();vi=e===void 0?!0:e}function Vo(){Wn++}function Fo(){for(Wn--;!Wn&&Kn.length;)Kn.shift()()}function Qr(e,l,a){if(l.get(e)!==e._trackId){l.set(e,e._trackId);const o=e.deps[e._depsLength];o!==l?(o&&Kr(o,e),e.deps[e._depsLength++]=l):e._depsLength++}}const Kn=[];function Zr(e,l,a){Vo();for(const o of e.keys())if(o._dirtyLevel<l&&e.get(o)===o._trackId){const s=o._dirtyLevel;o._dirtyLevel=l,s===0&&(o._shouldSchedule=!0,o.trigger())}eu(e),Fo()}function eu(e){for(const l of e.keys())l.scheduler&&l._shouldSchedule&&(!l._runnings||l.allowRecurse)&&e.get(l)===l._trackId&&(l._shouldSchedule=!1,Kn.push(l.scheduler))}const tu=(e,l)=>{const a=new Map;return a.cleanup=e,a.computed=l,a},Na=new WeakMap,Pi=Symbol(""),Xn=Symbol("");function wt(e,l,a){if(vi&&zi){let o=Na.get(e);o||Na.set(e,o=new Map);let s=o.get(a);s||o.set(a,s=tu(()=>o.delete(a))),Qr(zi,s)}}function ti(e,l,a,o,s,c){const m=Na.get(e);if(!m)return;let f=[];if(l==="clear")f=[...m.values()];else if(a==="length"&&ge(e)){const u=Number(o);m.forEach((d,g)=>{(g==="length"||!wi(g)&&g>=u)&&f.push(d)})}else switch(a!==void 0&&f.push(m.get(a)),l){case"add":ge(e)?Ro(a)&&f.push(m.get("length")):(f.push(m.get(Pi)),rl(e)&&f.push(m.get(Xn)));break;case"delete":ge(e)||(f.push(m.get(Pi)),rl(e)&&f.push(m.get(Xn)));break;case"set":rl(e)&&f.push(m.get(Pi));break}Vo();for(const u of f)u&&Zr(u,2);Fo()}function tm(e,l){var a;return(a=Na.get(e))==null?void 0:a.get(l)}const im=ln("__proto__,__v_isRef,__isVue"),iu=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(wi)),Es=lm();function lm(){const e={};return["includes","indexOf","lastIndexOf"].forEach(l=>{e[l]=function(...a){const o=Ee(this);for(let c=0,m=this.length;c<m;c++)wt(o,"get",c+"");const s=o[l](...a);return s===-1||s===!1?o[l](...a.map(Ee)):s}}),["push","pop","shift","unshift","splice"].forEach(l=>{e[l]=function(...a){Wi(),Vo();const o=Ee(this)[l].apply(this,a);return Fo(),Ki(),o}}),e}function am(e){const l=Ee(this);return wt(l,"has",e),l.hasOwnProperty(e)}class lu{constructor(l=!1,a=!1){this._isReadonly=l,this._shallow=a}get(l,a,o){const s=this._isReadonly,c=this._shallow;if(a==="__v_isReactive")return!s;if(a==="__v_isReadonly")return s;if(a==="__v_isShallow")return c;if(a==="__v_raw")return o===(s?c?uu:ru:c?su:ou).get(l)||Object.getPrototypeOf(l)===Object.getPrototypeOf(o)?l:void 0;const m=ge(l);if(!s){if(m&&Re(Es,a))return Reflect.get(Es,a,o);if(a==="hasOwnProperty")return am}const f=Reflect.get(l,a,o);return(wi(a)?iu.has(a):im(a))||(s||wt(l,"get",a),c)?f:ct(f)?m&&Ro(a)?f:f.value:je(f)?s?Ho(f):ni(f):f}}class au extends lu{constructor(l=!1){super(!1,l)}set(l,a,o,s){let c=l[a];if(!this._shallow){const u=Ni(c);if(!ta(o)&&!Ni(o)&&(c=Ee(c),o=Ee(o)),!ge(l)&&ct(c)&&!ct(o))return u?!1:(c.value=o,!0)}const m=ge(l)&&Ro(a)?Number(a)<l.length:Re(l,a),f=Reflect.set(l,a,o,s);return l===Ee(s)&&(m?qt(o,c)&&ti(l,"set",a,o):ti(l,"add",a,o)),f}deleteProperty(l,a){const o=Re(l,a);l[a];const s=Reflect.deleteProperty(l,a);return s&&o&&ti(l,"delete",a,void 0),s}has(l,a){const o=Reflect.has(l,a);return(!wi(a)||!iu.has(a))&&wt(l,"has",a),o}ownKeys(l){return wt(l,"iterate",ge(l)?"length":Pi),Reflect.ownKeys(l)}}class nu extends lu{constructor(l=!1){super(!0,l)}set(l,a){return!0}deleteProperty(l,a){return!0}}const nm=new au,om=new nu,sm=new au(!0),rm=new nu(!0),Mo=e=>e,on=e=>Reflect.getPrototypeOf(e);function va(e,l,a=!1,o=!1){e=e.__v_raw;const s=Ee(e),c=Ee(l);a||(qt(l,c)&&wt(s,"get",l),wt(s,"get",c));const{has:m}=on(s),f=o?Mo:a?qo:ia;if(m.call(s,l))return f(e.get(l));if(m.call(s,c))return f(e.get(c));e!==s&&e.get(l)}function Sa(e,l=!1){const a=this.__v_raw,o=Ee(a),s=Ee(e);return l||(qt(e,s)&&wt(o,"has",e),wt(o,"has",s)),e===s?a.has(e):a.has(e)||a.has(s)}function ya(e,l=!1){return e=e.__v_raw,!l&&wt(Ee(e),"iterate",Pi),Reflect.get(e,"size",e)}function Rs(e){e=Ee(e);const l=Ee(this);return on(l).has.call(l,e)||(l.add(e),ti(l,"add",e,e)),this}function zs(e,l){l=Ee(l);const a=Ee(this),{has:o,get:s}=on(a);let c=o.call(a,e);c||(e=Ee(e),c=o.call(a,e));const m=s.call(a,e);return a.set(e,l),c?qt(l,m)&&ti(a,"set",e,l):ti(a,"add",e,l),this}function Ps(e){const l=Ee(this),{has:a,get:o}=on(l);let s=a.call(l,e);s||(e=Ee(e),s=a.call(l,e)),o&&o.call(l,e);const c=l.delete(e);return s&&ti(l,"delete",e,void 0),c}function Vs(){const e=Ee(this),l=e.size!==0,a=e.clear();return l&&ti(e,"clear",void 0,void 0),a}function wa(e,l){return function(o,s){const c=this,m=c.__v_raw,f=Ee(m),u=l?Mo:e?qo:ia;return!e&&wt(f,"iterate",Pi),m.forEach((d,g)=>o.call(s,u(d),u(g),c))}}function Ca(e,l,a){return function(...o){const s=this.__v_raw,c=Ee(s),m=rl(c),f=e==="entries"||e===Symbol.iterator&&m,u=e==="keys"&&m,d=s[e](...o),g=a?Mo:l?qo:ia;return!l&&wt(c,"iterate",u?Xn:Pi),{next(){const{value:p,done:_}=d.next();return _?{value:p,done:_}:{value:f?[g(p[0]),g(p[1])]:g(p),done:_}},[Symbol.iterator](){return this}}}}function ri(e){return function(...l){return e==="delete"?!1:e==="clear"?void 0:this}}function um(){const e={get(c){return va(this,c)},get size(){return ya(this)},has:Sa,add:Rs,set:zs,delete:Ps,clear:Vs,forEach:wa(!1,!1)},l={get(c){return va(this,c,!1,!0)},get size(){return ya(this)},has:Sa,add:Rs,set:zs,delete:Ps,clear:Vs,forEach:wa(!1,!0)},a={get(c){return va(this,c,!0)},get size(){return ya(this,!0)},has(c){return Sa.call(this,c,!0)},add:ri("add"),set:ri("set"),delete:ri("delete"),clear:ri("clear"),forEach:wa(!0,!1)},o={get(c){return va(this,c,!0,!0)},get size(){return ya(this,!0)},has(c){return Sa.call(this,c,!0)},add:ri("add"),set:ri("set"),delete:ri("delete"),clear:ri("clear"),forEach:wa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(c=>{e[c]=Ca(c,!1,!1),a[c]=Ca(c,!0,!1),l[c]=Ca(c,!1,!0),o[c]=Ca(c,!0,!0)}),[e,a,l,o]}const[cm,dm,mm,pm]=um();function sn(e,l){const a=l?e?pm:mm:e?dm:cm;return(o,s,c)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(Re(a,s)&&s in o?a:o,s,c)}const fm={get:sn(!1,!1)},gm={get:sn(!1,!0)},hm={get:sn(!0,!1)},_m={get:sn(!0,!0)},ou=new WeakMap,su=new WeakMap,ru=new WeakMap,uu=new WeakMap;function bm(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vm(e){return e.__v_skip||!Object.isExtensible(e)?0:bm(Fd(e))}function ni(e){return Ni(e)?e:rn(e,!1,nm,fm,ou)}function cu(e){return rn(e,!1,sm,gm,su)}function Ho(e){return rn(e,!0,om,hm,ru)}function Sm(e){return rn(e,!0,rm,_m,uu)}function rn(e,l,a,o,s){if(!je(e)||e.__v_raw&&!(l&&e.__v_isReactive))return e;const c=s.get(e);if(c)return c;const m=vm(e);if(m===0)return e;const f=new Proxy(e,m===2?o:a);return s.set(e,f),f}function Vi(e){return Ni(e)?Vi(e.__v_raw):!!(e&&e.__v_isReactive)}function Ni(e){return!!(e&&e.__v_isReadonly)}function ta(e){return!!(e&&e.__v_isShallow)}function No(e){return Vi(e)||Ni(e)}function Ee(e){const l=e&&e.__v_raw;return l?Ee(l):e}function Oo(e){return Ma(e,"__v_skip",!0),e}const ia=e=>je(e)?ni(e):e,qo=e=>je(e)?Ho(e):e;class du{constructor(l,a,o,s){this._setter=a,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new bl(()=>l(this._value),()=>cl(this,1),()=>this.dep&&eu(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=o}get value(){const l=Ee(this);return(!l._cacheable||l.effect.dirty)&&qt(l._value,l._value=l.effect.run())&&cl(l,2),Go(l),l.effect._dirtyLevel>=1&&cl(l,1),l._value}set value(l){this._setter(l)}get _dirty(){return this.effect.dirty}set _dirty(l){this.effect.dirty=l}}function ym(e,l,a=!1){let o,s;const c=we(e);return c?(o=e,s=vt):(o=e.get,s=e.set),new du(o,s,c||!s,a)}function Go(e){vi&&zi&&(e=Ee(e),Qr(zi,e.dep||(e.dep=tu(()=>e.dep=void 0,e instanceof du?e:void 0))))}function cl(e,l=2,a){e=Ee(e);const o=e.dep;o&&Zr(o,l)}function ct(e){return!!(e&&e.__v_isRef===!0)}function G(e){return pu(e,!1)}function mu(e){return pu(e,!0)}function pu(e,l){return ct(e)?e:new wm(e,l)}class wm{constructor(l,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?l:Ee(l),this._value=a?l:ia(l)}get value(){return Go(this),this._value}set value(l){const a=this.__v_isShallow||ta(l)||Ni(l);l=a?l:Ee(l),qt(l,this._rawValue)&&(this._rawValue=l,this._value=a?l:ia(l),cl(this,2))}}function Cm(e){cl(e,2)}function r(e){return ct(e)?e.value:e}function Am(e){return we(e)?e():r(e)}const xm={get:(e,l,a)=>r(Reflect.get(e,l,a)),set:(e,l,a,o)=>{const s=e[l];return ct(s)&&!ct(a)?(s.value=a,!0):Reflect.set(e,l,a,o)}};function jo(e){return Vi(e)?e:new Proxy(e,xm)}class km{constructor(l){this.dep=void 0,this.__v_isRef=!0;const{get:a,set:o}=l(()=>Go(this),()=>cl(this));this._get=a,this._set=o}get value(){return this._get()}set value(l){this._set(l)}}function fu(e){return new km(e)}function Bm(e){const l=ge(e)?new Array(e.length):{};for(const a in e)l[a]=gu(e,a);return l}class $m{constructor(l,a,o){this._object=l,this._key=a,this._defaultValue=o,this.__v_isRef=!0}get value(){const l=this._object[this._key];return l===void 0?this._defaultValue:l}set value(l){this._object[this._key]=l}get dep(){return tm(Ee(this._object),this._key)}}class Tm{constructor(l){this._getter=l,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Qn(e,l,a){return ct(e)?e:we(e)?new Tm(e):je(e)&&arguments.length>1?gu(e,l,a):G(e)}function gu(e,l,a){const o=e[l];return ct(o)?o:new $m(e,l,a)}const Lm={GET:"get",HAS:"has",ITERATE:"iterate"},Im={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Dm(e,l){}const Em={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},Rm={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function ii(e,l,a,o){let s;try{s=o?e(...o):e()}catch(c){Xi(c,l,a)}return s}function Dt(e,l,a,o){if(we(e)){const c=ii(e,l,a,o);return c&&Eo(c)&&c.catch(m=>{Xi(m,l,a)}),c}const s=[];for(let c=0;c<e.length;c++)s.push(Dt(e[c],l,a,o));return s}function Xi(e,l,a,o=!0){const s=l?l.vnode:null;if(l){let c=l.parent;const m=l.proxy,f=`https://vuejs.org/error-reference/#runtime-${a}`;for(;c;){const d=c.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](e,m,f)===!1)return}c=c.parent}const u=l.appContext.config.errorHandler;if(u){ii(u,null,10,[e,m,f]);return}}zm(e,a,s,o)}function zm(e,l,a,o=!0){console.error(e)}let la=!1,Zn=!1;const mt=[];let Jt=0;const dl=[];let fi=null,Di=0;const hu=Promise.resolve();let Uo=null;function Bl(e){const l=Uo||hu;return e?l.then(this?e.bind(this):e):l}function Pm(e){let l=Jt+1,a=mt.length;for(;l<a;){const o=l+a>>>1,s=mt[o],c=aa(s);c<e||c===e&&s.pre?l=o+1:a=o}return l}function un(e){(!mt.length||!mt.includes(e,la&&e.allowRecurse?Jt+1:Jt))&&(e.id==null?mt.push(e):mt.splice(Pm(e.id),0,e),_u())}function _u(){!la&&!Zn&&(Zn=!0,Uo=hu.then(bu))}function Vm(e){const l=mt.indexOf(e);l>Jt&&mt.splice(l,1)}function Oa(e){ge(e)?dl.push(...e):(!fi||!fi.includes(e,e.allowRecurse?Di+1:Di))&&dl.push(e),_u()}function Fs(e,l,a=la?Jt+1:0){for(;a<mt.length;a++){const o=mt[a];if(o&&o.pre){if(e&&o.id!==e.uid)continue;mt.splice(a,1),a--,o()}}}function qa(e){if(dl.length){const l=[...new Set(dl)].sort((a,o)=>aa(a)-aa(o));if(dl.length=0,fi){fi.push(...l);return}for(fi=l,Di=0;Di<fi.length;Di++)fi[Di]();fi=null,Di=0}}const aa=e=>e.id==null?1/0:e.id,Fm=(e,l)=>{const a=aa(e)-aa(l);if(a===0){if(e.pre&&!l.pre)return-1;if(l.pre&&!e.pre)return 1}return a};function bu(e){Zn=!1,la=!0,mt.sort(Fm);try{for(Jt=0;Jt<mt.length;Jt++){const l=mt[Jt];l&&l.active!==!1&&ii(l,null,14)}}finally{Jt=0,mt.length=0,qa(),la=!1,Uo=null,(mt.length||dl.length)&&bu()}}let al,Aa=[];function vu(e,l){var a,o;al=e,al?(al.enabled=!0,Aa.forEach(({event:s,args:c})=>al.emit(s,...c)),Aa=[]):typeof window<"u"&&window.HTMLElement&&!((o=(a=window.navigator)==null?void 0:a.userAgent)!=null&&o.includes("jsdom"))?((l.__VUE_DEVTOOLS_HOOK_REPLAY__=l.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(c=>{vu(c,l)}),setTimeout(()=>{al||(l.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Aa=[])},3e3)):Aa=[]}function Mm(e,l,...a){if(e.isUnmounted)return;const o=e.vnode.props||qe;let s=a;const c=l.startsWith("update:"),m=c&&l.slice(7);if(m&&m in o){const g=`${m==="modelValue"?"model":m}Modifiers`,{number:p,trim:_}=o[g]||qe;_&&(s=a.map(w=>Xe(w)?w.trim():w)),p&&(s=a.map(ea))}let f,u=o[f=Ul(l)]||o[f=Ul(_t(l))];!u&&c&&(u=o[f=Ul(Tt(l))]),u&&Dt(u,e,6,s);const d=o[f+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[f])return;e.emitted[f]=!0,Dt(d,e,6,s)}}function Su(e,l,a=!1){const o=l.emitsCache,s=o.get(e);if(s!==void 0)return s;const c=e.emits;let m={},f=!1;if(!we(e)){const u=d=>{const g=Su(d,l,!0);g&&(f=!0,Ke(m,g))};!a&&l.mixins.length&&l.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!c&&!f?(je(e)&&o.set(e,null),null):(ge(c)?c.forEach(u=>m[u]=null):Ke(m,c),je(e)&&o.set(e,m),m)}function cn(e,l){return!e||!ma(l)?!1:(l=l.slice(2).replace(/Once$/,""),Re(e,l[0].toLowerCase()+l.slice(1))||Re(e,Tt(l))||Re(e,l))}let tt=null,dn=null;function na(e){const l=tt;return tt=e,dn=e&&e.type.__scopeId||null,l}function yu(e){dn=e}function wu(){dn=null}const Hm=e=>i;function i(e,l=tt,a){if(!l||e._n)return e;const o=(...s)=>{o._d&&so(-1);const c=na(l);let m;try{m=e(...s)}finally{na(c),o._d&&so(1)}return m};return o._n=!0,o._c=!0,o._d=!0,o}function za(e){const{type:l,vnode:a,proxy:o,withProxy:s,props:c,propsOptions:[m],slots:f,attrs:u,emit:d,render:g,renderCache:p,data:_,setupState:w,ctx:S,inheritAttrs:A}=e;let T,I;const h=na(e);try{if(a.shapeFlag&4){const C=s||o,$=C;T=Bt(g.call($,C,p,c,w,_,S)),I=u}else{const C=l;T=Bt(C.length>1?C(c,{attrs:u,slots:f,emit:d}):C(c,null)),I=l.props?u:Om(u)}}catch(C){Wl.length=0,Xi(C,e,1),T=t(ft)}let b=T;if(I&&A!==!1){const C=Object.keys(I),{shapeFlag:$}=b;C.length&&$&7&&(m&&C.some(Io)&&(I=qm(I,m)),b=Wt(b,I))}return a.dirs&&(b=Wt(b),b.dirs=b.dirs?b.dirs.concat(a.dirs):a.dirs),a.transition&&(b.transition=a.transition),T=b,na(h),T}function Nm(e,l=!0){let a;for(let o=0;o<e.length;o++){const s=e[o];if(Ct(s)){if(s.type!==ft||s.children==="v-if"){if(a)return;a=s}}else return}return a}const Om=e=>{let l;for(const a in e)(a==="class"||a==="style"||ma(a))&&((l||(l={}))[a]=e[a]);return l},qm=(e,l)=>{const a={};for(const o in e)(!Io(o)||!(o.slice(9)in l))&&(a[o]=e[o]);return a};function Gm(e,l,a){const{props:o,children:s,component:c}=e,{props:m,children:f,patchFlag:u}=l,d=c.emitsOptions;if(l.dirs||l.transition)return!0;if(a&&u>=0){if(u&1024)return!0;if(u&16)return o?Ms(o,m,d):!!m;if(u&8){const g=l.dynamicProps;for(let p=0;p<g.length;p++){const _=g[p];if(m[_]!==o[_]&&!cn(d,_))return!0}}}else return(s||f)&&(!f||!f.$stable)?!0:o===m?!1:o?m?Ms(o,m,d):!0:!!m;return!1}function Ms(e,l,a){const o=Object.keys(l);if(o.length!==Object.keys(e).length)return!0;for(let s=0;s<o.length;s++){const c=o[s];if(l[c]!==e[c]&&!cn(a,c))return!0}return!1}function Yo({vnode:e,parent:l},a){for(;l;){const o=l.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=l.vnode).el=a,l=l.parent;else break}}const Jo="components",jm="directives";function x(e,l){return Wo(Jo,e,!0,l)||e}const Cu=Symbol.for("v-ndc");function Au(e){return Xe(e)?Wo(Jo,e,!1)||e:e||Cu}function mn(e){return Wo(jm,e)}function Wo(e,l,a=!0,o=!1){const s=tt||lt;if(s){const c=s.type;if(e===Jo){const f=po(c,!1);if(f&&(f===l||f===_t(l)||f===pa(_t(l))))return c}const m=Hs(s[e]||c[e],l)||Hs(s.appContext[e],l);return!m&&o?c:m}}function Hs(e,l){return e&&(e[l]||e[_t(l)]||e[pa(_t(l))])}const xu=e=>e.__isSuspense;let eo=0;const Um={name:"Suspense",__isSuspense:!0,process(e,l,a,o,s,c,m,f,u,d){if(e==null)Jm(l,a,o,s,c,m,f,u,d);else{if(c&&c.deps>0){l.suspense=e.suspense;return}Wm(e,l,a,o,s,m,f,u,d)}},hydrate:Km,create:Ko,normalize:Xm},Ym=Um;function oa(e,l){const a=e.props&&e.props[l];we(a)&&a()}function Jm(e,l,a,o,s,c,m,f,u){const{p:d,o:{createElement:g}}=u,p=g("div"),_=e.suspense=Ko(e,s,o,l,p,a,c,m,f,u);d(null,_.pendingBranch=e.ssContent,p,null,o,_,c,m),_.deps>0?(oa(e,"onPending"),oa(e,"onFallback"),d(null,e.ssFallback,l,a,o,null,c,m),ml(_,e.ssFallback)):_.resolve(!1,!0)}function Wm(e,l,a,o,s,c,m,f,{p:u,um:d,o:{createElement:g}}){const p=l.suspense=e.suspense;p.vnode=l,l.el=e.el;const _=l.ssContent,w=l.ssFallback,{activeBranch:S,pendingBranch:A,isInFallback:T,isHydrating:I}=p;if(A)p.pendingBranch=_,Ot(_,A)?(u(A,_,p.hiddenContainer,null,s,p,c,m,f),p.deps<=0?p.resolve():T&&(I||(u(S,w,a,o,s,null,c,m,f),ml(p,w)))):(p.pendingId=eo++,I?(p.isHydrating=!1,p.activeBranch=A):d(A,s,p),p.deps=0,p.effects.length=0,p.hiddenContainer=g("div"),T?(u(null,_,p.hiddenContainer,null,s,p,c,m,f),p.deps<=0?p.resolve():(u(S,w,a,o,s,null,c,m,f),ml(p,w))):S&&Ot(_,S)?(u(S,_,a,o,s,p,c,m,f),p.resolve(!0)):(u(null,_,p.hiddenContainer,null,s,p,c,m,f),p.deps<=0&&p.resolve()));else if(S&&Ot(_,S))u(S,_,a,o,s,p,c,m,f),ml(p,_);else if(oa(l,"onPending"),p.pendingBranch=_,_.shapeFlag&512?p.pendingId=_.component.suspenseId:p.pendingId=eo++,u(null,_,p.hiddenContainer,null,s,p,c,m,f),p.deps<=0)p.resolve();else{const{timeout:h,pendingId:b}=p;h>0?setTimeout(()=>{p.pendingId===b&&p.fallback(w)},h):h===0&&p.fallback(w)}}function Ko(e,l,a,o,s,c,m,f,u,d,g=!1){const{p,m:_,um:w,n:S,o:{parentNode:A,remove:T}}=d;let I;const h=Qm(e);h&&l!=null&&l.pendingBranch&&(I=l.pendingId,l.deps++);const b=e.props?Ha(e.props.timeout):void 0,C=c,$={vnode:e,parent:l,parentComponent:a,namespace:m,container:o,hiddenContainer:s,deps:0,pendingId:eo++,timeout:typeof b=="number"?b:-1,activeBranch:null,pendingBranch:null,isInFallback:!g,isHydrating:g,isUnmounted:!1,effects:[],resolve(E=!1,F=!1){const{vnode:H,activeBranch:P,pendingBranch:j,pendingId:Q,effects:J,parentComponent:fe,container:Be}=$;let U=!1;$.isHydrating?$.isHydrating=!1:E||(U=P&&j.transition&&j.transition.mode==="out-in",U&&(P.transition.afterLeave=()=>{Q===$.pendingId&&(_(j,Be,c===C?S(P):c,0),Oa(J))}),P&&(A(P.el)!==$.hiddenContainer&&(c=S(P)),w(P,fe,$,!0)),U||_(j,Be,c,0)),ml($,j),$.pendingBranch=null,$.isInFallback=!1;let K=$.parent,de=!1;for(;K;){if(K.pendingBranch){K.effects.push(...J),de=!0;break}K=K.parent}!de&&!U&&Oa(J),$.effects=[],h&&l&&l.pendingBranch&&I===l.pendingId&&(l.deps--,l.deps===0&&!F&&l.resolve()),oa(H,"onResolve")},fallback(E){if(!$.pendingBranch)return;const{vnode:F,activeBranch:H,parentComponent:P,container:j,namespace:Q}=$;oa(F,"onFallback");const J=S(H),fe=()=>{$.isInFallback&&(p(null,E,j,J,P,null,Q,f,u),ml($,E))},Be=E.transition&&E.transition.mode==="out-in";Be&&(H.transition.afterLeave=fe),$.isInFallback=!0,w(H,P,null,!0),Be||fe()},move(E,F,H){$.activeBranch&&_($.activeBranch,E,F,H),$.container=E},next(){return $.activeBranch&&S($.activeBranch)},registerDep(E,F){const H=!!$.pendingBranch;H&&$.deps++;const P=E.vnode.el;E.asyncDep.catch(j=>{Xi(j,E,0)}).then(j=>{if(E.isUnmounted||$.isUnmounted||$.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:Q}=E;co(E,j,!1),P&&(Q.el=P);const J=!P&&E.subTree.el;F(E,Q,A(P||E.subTree.el),P?null:S(E.subTree),$,m,u),J&&T(J),Yo(E,Q.el),H&&--$.deps===0&&$.resolve()})},unmount(E,F){$.isUnmounted=!0,$.activeBranch&&w($.activeBranch,a,E,F),$.pendingBranch&&w($.pendingBranch,a,E,F)}};return $}function Km(e,l,a,o,s,c,m,f,u){const d=l.suspense=Ko(l,o,a,e.parentNode,document.createElement("div"),null,s,c,m,f,!0),g=u(e,d.pendingBranch=l.ssContent,a,d,c,m);return d.deps===0&&d.resolve(!1,!0),g}function Xm(e){const{shapeFlag:l,children:a}=e,o=l&32;e.ssContent=Ns(o?a.default:a),e.ssFallback=o?Ns(a.fallback):t(ft)}function Ns(e){let l;if(we(e)){const a=ji&&e._c;a&&(e._d=!1,y()),e=e(),a&&(e._d=!0,l=St,lc())}return ge(e)&&(e=Nm(e)),e=Bt(e),l&&!e.dynamicChildren&&(e.dynamicChildren=l.filter(a=>a!==e)),e}function ku(e,l){l&&l.pendingBranch?ge(e)?l.effects.push(...e):l.effects.push(e):Oa(e)}function ml(e,l){e.activeBranch=l;const{vnode:a,parentComponent:o}=e;let s=l.el;for(;!s&&l.component;)l=l.component.subTree,s=l.el;a.el=s,o&&o.subTree===a&&(o.vnode.el=s,Yo(o,s))}function Qm(e){var l;return((l=e.props)==null?void 0:l.suspensible)!=null&&e.props.suspensible!==!1}const Bu=Symbol.for("v-scx"),$u=()=>Fe(Bu);function Xo(e,l){return ga(e,null,l)}function Tu(e,l){return ga(e,null,{flush:"post"})}function Lu(e,l){return ga(e,null,{flush:"sync"})}const xa={};function pt(e,l,a){return ga(e,l,a)}function ga(e,l,{immediate:a,deep:o,flush:s,once:c,onTrack:m,onTrigger:f}=qe){if(l&&c){const E=l;l=(...F)=>{E(...F),$()}}const u=lt,d=E=>o===!0?E:Ei(E,o===!1?1:void 0);let g,p=!1,_=!1;if(ct(e)?(g=()=>e.value,p=ta(e)):Vi(e)?(g=()=>d(e),p=!0):ge(e)?(_=!0,p=e.some(E=>Vi(E)||ta(E)),g=()=>e.map(E=>{if(ct(E))return E.value;if(Vi(E))return d(E);if(we(E))return ii(E,u,2)})):we(e)?l?g=()=>ii(e,u,2):g=()=>(w&&w(),Dt(e,u,3,[S])):g=vt,l&&o){const E=g;g=()=>Ei(E())}let w,S=E=>{w=b.onStop=()=>{ii(E,u,4),w=b.onStop=void 0}},A;if(_a)if(S=vt,l?a&&Dt(l,u,3,[g(),_?[]:void 0,S]):g(),s==="sync"){const E=$u();A=E.__watcherHandles||(E.__watcherHandles=[])}else return vt;let T=_?new Array(e.length).fill(xa):xa;const I=()=>{if(!(!b.active||!b.dirty))if(l){const E=b.run();(o||p||(_?E.some((F,H)=>qt(F,T[H])):qt(E,T)))&&(w&&w(),Dt(l,u,3,[E,T===xa?void 0:_&&T[0]===xa?[]:T,S]),T=E)}else b.run()};I.allowRecurse=!!l;let h;s==="sync"?h=I:s==="post"?h=()=>rt(I,u&&u.suspense):(I.pre=!0,u&&(I.id=u.uid),h=()=>un(I));const b=new bl(g,vt,h),C=Po(),$=()=>{b.stop(),C&&Do(C.effects,b)};return l?a?I():T=b.run():s==="post"?rt(b.run.bind(b),u&&u.suspense):b.run(),A&&A.push($),$}function Zm(e,l,a){const o=this.proxy,s=Xe(e)?e.includes(".")?Iu(o,e):()=>o[e]:e.bind(o,o);let c;we(l)?c=l:(c=l.handler,a=l);const m=Ui(this),f=ga(s,c.bind(o),a);return m(),f}function Iu(e,l){const a=l.split(".");return()=>{let o=e;for(let s=0;s<a.length&&o;s++)o=o[a[s]];return o}}function Ei(e,l,a=0,o){if(!je(e)||e.__v_skip)return e;if(l&&l>0){if(a>=l)return e;a++}if(o=o||new Set,o.has(e))return e;if(o.add(e),ct(e))Ei(e.value,l,a,o);else if(ge(e))for(let s=0;s<e.length;s++)Ei(e[s],l,a,o);else if(Ji(e)||rl(e))e.forEach(s=>{Ei(s,l,a,o)});else if(Gr(e))for(const s in e)Ei(e[s],l,a,o);return e}function Si(e,l){if(tt===null)return e;const a=vn(tt)||tt.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<l.length;s++){let[c,m,f,u=qe]=l[s];c&&(we(c)&&(c={mounted:c,updated:c}),c.deep&&Ei(m),o.push({dir:c,instance:a,value:m,oldValue:void 0,arg:f,modifiers:u}))}return e}function jt(e,l,a,o){const s=e.dirs,c=l&&l.dirs;for(let m=0;m<s.length;m++){const f=s[m];c&&(f.oldValue=c[m].value);let u=f.dir[o];u&&(Wi(),Dt(u,a,8,[e.el,f,e,l]),Ki())}}const gi=Symbol("_leaveCb"),ka=Symbol("_enterCb");function Qo(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ai(()=>{e.isMounted=!0}),hn(()=>{e.isUnmounting=!0}),e}const Pt=[Function,Array],Zo={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pt,onEnter:Pt,onAfterEnter:Pt,onEnterCancelled:Pt,onBeforeLeave:Pt,onLeave:Pt,onAfterLeave:Pt,onLeaveCancelled:Pt,onBeforeAppear:Pt,onAppear:Pt,onAfterAppear:Pt,onAppearCancelled:Pt},ep={name:"BaseTransition",props:Zo,setup(e,{slots:l}){const a=Kt(),o=Qo();let s;return()=>{const c=l.default&&pn(l.default(),!0);if(!c||!c.length)return;let m=c[0];if(c.length>1){for(const A of c)if(A.type!==ft){m=A;break}}const f=Ee(e),{mode:u}=f;if(o.isLeaving)return Bn(m);const d=Os(m);if(!d)return Bn(m);const g=vl(d,f,o,a);Oi(d,g);const p=a.subTree,_=p&&Os(p);let w=!1;const{getTransitionKey:S}=d.type;if(S){const A=S();s===void 0?s=A:A!==s&&(s=A,w=!0)}if(_&&_.type!==ft&&(!Ot(d,_)||w)){const A=vl(_,f,o,a);if(Oi(_,A),u==="out-in")return o.isLeaving=!0,A.afterLeave=()=>{o.isLeaving=!1,a.update.active!==!1&&(a.effect.dirty=!0,a.update())},Bn(m);u==="in-out"&&d.type!==ft&&(A.delayLeave=(T,I,h)=>{const b=Eu(o,_);b[String(_.key)]=_,T[gi]=()=>{I(),T[gi]=void 0,delete g.delayedLeave},g.delayedLeave=h})}return m}}},Du=ep;function Eu(e,l){const{leavingVNodes:a}=e;let o=a.get(l.type);return o||(o=Object.create(null),a.set(l.type,o)),o}function vl(e,l,a,o){const{appear:s,mode:c,persisted:m=!1,onBeforeEnter:f,onEnter:u,onAfterEnter:d,onEnterCancelled:g,onBeforeLeave:p,onLeave:_,onAfterLeave:w,onLeaveCancelled:S,onBeforeAppear:A,onAppear:T,onAfterAppear:I,onAppearCancelled:h}=l,b=String(e.key),C=Eu(a,e),$=(H,P)=>{H&&Dt(H,o,9,P)},E=(H,P)=>{const j=P[1];$(H,P),ge(H)?H.every(Q=>Q.length<=1)&&j():H.length<=1&&j()},F={mode:c,persisted:m,beforeEnter(H){let P=f;if(!a.isMounted)if(s)P=A||f;else return;H[gi]&&H[gi](!0);const j=C[b];j&&Ot(e,j)&&j.el[gi]&&j.el[gi](),$(P,[H])},enter(H){let P=u,j=d,Q=g;if(!a.isMounted)if(s)P=T||u,j=I||d,Q=h||g;else return;let J=!1;const fe=H[ka]=Be=>{J||(J=!0,Be?$(Q,[H]):$(j,[H]),F.delayedLeave&&F.delayedLeave(),H[ka]=void 0)};P?E(P,[H,fe]):fe()},leave(H,P){const j=String(e.key);if(H[ka]&&H[ka](!0),a.isUnmounting)return P();$(p,[H]);let Q=!1;const J=H[gi]=fe=>{Q||(Q=!0,P(),fe?$(S,[H]):$(w,[H]),H[gi]=void 0,C[j]===e&&delete C[j])};C[j]=e,_?E(_,[H,J]):J()},clone(H){return vl(H,l,a,o)}};return F}function Bn(e){if(ha(e))return e=Wt(e),e.children=null,e}function Os(e){return ha(e)?e.children?e.children[0]:void 0:e}function Oi(e,l){e.shapeFlag&6&&e.component?Oi(e.component.subTree,l):e.shapeFlag&128?(e.ssContent.transition=l.clone(e.ssContent),e.ssFallback.transition=l.clone(e.ssFallback)):e.transition=l}function pn(e,l=!1,a){let o=[],s=0;for(let c=0;c<e.length;c++){let m=e[c];const f=a==null?m.key:String(a)+String(m.key!=null?m.key:c);m.type===Ce?(m.patchFlag&128&&s++,o=o.concat(pn(m.children,l,f))):(l||m.type!==ft)&&o.push(f!=null?Wt(m,{key:f}):m)}if(s>1)for(let c=0;c<o.length;c++)o[c].patchFlag=-2;return o}/*! #__NO_SIDE_EFFECTS__ */function V(e,l){return we(e)?Ke({name:e.name},l,{setup:e}):e}const Fi=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function tp(e){we(e)&&(e={loader:e});const{loader:l,loadingComponent:a,errorComponent:o,delay:s=200,timeout:c,suspensible:m=!0,onError:f}=e;let u=null,d,g=0;const p=()=>(g++,u=null,_()),_=()=>{let w;return u||(w=u=l().catch(S=>{if(S=S instanceof Error?S:new Error(String(S)),f)return new Promise((A,T)=>{f(S,()=>A(p()),()=>T(S),g+1)});throw S}).then(S=>w!==u&&u?u:(S&&(S.__esModule||S[Symbol.toStringTag]==="Module")&&(S=S.default),d=S,S)))};return V({name:"AsyncComponentWrapper",__asyncLoader:_,get __asyncResolved(){return d},setup(){const w=lt;if(d)return()=>$n(d,w);const S=h=>{u=null,Xi(h,w,13,!o)};if(m&&w.suspense||_a)return _().then(h=>()=>$n(h,w)).catch(h=>(S(h),()=>o?t(o,{error:h}):null));const A=G(!1),T=G(),I=G(!!s);return s&&setTimeout(()=>{I.value=!1},s),c!=null&&setTimeout(()=>{if(!A.value&&!T.value){const h=new Error(`Async component timed out after ${c}ms.`);S(h),T.value=h}},c),_().then(()=>{A.value=!0,w.parent&&ha(w.parent.vnode)&&(w.parent.effect.dirty=!0,un(w.parent.update))}).catch(h=>{S(h),T.value=h}),()=>{if(A.value&&d)return $n(d,w);if(T.value&&o)return t(o,{error:T.value});if(a&&!I.value)return t(a)}}})}function $n(e,l){const{ref:a,props:o,children:s,ce:c}=l.vnode,m=t(e,o,s);return m.ref=a,m.ce=c,delete l.vnode.ce,m}const ha=e=>e.type.__isKeepAlive,ip={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:l}){const a=Kt(),o=a.ctx;if(!o.renderer)return()=>{const h=l.default&&l.default();return h&&h.length===1?h[0]:h};const s=new Map,c=new Set;let m=null;const f=a.suspense,{renderer:{p:u,m:d,um:g,o:{createElement:p}}}=o,_=p("div");o.activate=(h,b,C,$,E)=>{const F=h.component;d(h,b,C,0,f),u(F.vnode,h,b,C,F,f,$,h.slotScopeIds,E),rt(()=>{F.isDeactivated=!1,F.a&&ul(F.a);const H=h.props&&h.props.onVnodeMounted;H&&bt(H,F.parent,h)},f)},o.deactivate=h=>{const b=h.component;d(h,_,null,1,f),rt(()=>{b.da&&ul(b.da);const C=h.props&&h.props.onVnodeUnmounted;C&&bt(C,b.parent,h),b.isDeactivated=!0},f)};function w(h){Tn(h),g(h,a,f,!0)}function S(h){s.forEach((b,C)=>{const $=po(b.type);$&&(!h||!h($))&&A(C)})}function A(h){const b=s.get(h);!m||!Ot(b,m)?w(b):m&&Tn(m),s.delete(h),c.delete(h)}pt(()=>[e.include,e.exclude],([h,b])=>{h&&S(C=>Hl(h,C)),b&&S(C=>!Hl(b,C))},{flush:"post",deep:!0});let T=null;const I=()=>{T!=null&&s.set(T,Ln(a.subTree))};return Ai(I),gn(I),hn(()=>{s.forEach(h=>{const{subTree:b,suspense:C}=a,$=Ln(b);if(h.type===$.type&&h.key===$.key){Tn($);const E=$.component.da;E&&rt(E,C);return}w(h)})}),()=>{if(T=null,!l.default)return null;const h=l.default(),b=h[0];if(h.length>1)return m=null,h;if(!Ct(b)||!(b.shapeFlag&4)&&!(b.shapeFlag&128))return m=null,b;let C=Ln(b);const $=C.type,E=po(Fi(C)?C.type.__asyncResolved||{}:$),{include:F,exclude:H,max:P}=e;if(F&&(!E||!Hl(F,E))||H&&E&&Hl(H,E))return m=C,b;const j=C.key==null?$:C.key,Q=s.get(j);return C.el&&(C=Wt(C),b.shapeFlag&128&&(b.ssContent=C)),T=j,Q?(C.el=Q.el,C.component=Q.component,C.transition&&Oi(C,C.transition),C.shapeFlag|=512,c.delete(j),c.add(j)):(c.add(j),P&&c.size>parseInt(P,10)&&A(c.values().next().value)),C.shapeFlag|=256,m=C,xu(b.type)?b:C}}},lp=ip;function Hl(e,l){return ge(e)?e.some(a=>Hl(a,l)):Xe(e)?e.split(",").includes(l):Vd(e)?e.test(l):!1}function es(e,l){Ru(e,"a",l)}function ts(e,l){Ru(e,"da",l)}function Ru(e,l,a=lt){const o=e.__wdc||(e.__wdc=()=>{let s=a;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(fn(l,o,a),a){let s=a.parent;for(;s&&s.parent;)ha(s.parent.vnode)&&ap(o,l,a,s),s=s.parent}}function ap(e,l,a,o){const s=fn(l,e,o,!0);Qi(()=>{Do(o[l],s)},a)}function Tn(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Ln(e){return e.shapeFlag&128?e.ssContent:e}function fn(e,l,a=lt,o=!1){if(a){const s=a[e]||(a[e]=[]),c=l.__weh||(l.__weh=(...m)=>{if(a.isUnmounted)return;Wi();const f=Ui(a),u=Dt(l,a,e,m);return f(),Ki(),u});return o?s.unshift(c):s.push(c),c}}const oi=e=>(l,a=lt)=>(!_a||e==="sp")&&fn(e,(...o)=>l(...o),a),zu=oi("bm"),Ai=oi("m"),Pu=oi("bu"),gn=oi("u"),hn=oi("bum"),Qi=oi("um"),Vu=oi("sp"),Fu=oi("rtg"),Mu=oi("rtc");function Hu(e,l=lt){fn("ec",e,l)}function Qe(e,l,a,o){let s;const c=a&&a[o];if(ge(e)||Xe(e)){s=new Array(e.length);for(let m=0,f=e.length;m<f;m++)s[m]=l(e[m],m,void 0,c&&c[m])}else if(typeof e=="number"){s=new Array(e);for(let m=0;m<e;m++)s[m]=l(m+1,m,void 0,c&&c[m])}else if(je(e))if(e[Symbol.iterator])s=Array.from(e,(m,f)=>l(m,f,void 0,c&&c[f]));else{const m=Object.keys(e);s=new Array(m.length);for(let f=0,u=m.length;f<u;f++){const d=m[f];s[f]=l(e[d],d,f,c&&c[f])}}else s=[];return a&&(a[o]=s),s}function np(e,l){for(let a=0;a<l.length;a++){const o=l[a];if(ge(o))for(let s=0;s<o.length;s++)e[o[s].name]=o[s].fn;else o&&(e[o.name]=o.key?(...s)=>{const c=o.fn(...s);return c&&(c.key=o.key),c}:o.fn)}return e}function qi(e,l,a={},o,s){if(tt.isCE||tt.parent&&Fi(tt.parent)&&tt.parent.isCE)return l!=="default"&&(a.name=l),t("slot",a,o&&o());let c=e[l];c&&c._c&&(c._d=!1),y();const m=c&&Nu(c(a)),f=B(Ce,{key:a.key||m&&m.key||`_${l}`},m||(o?o():[]),m&&e._===1?64:-2);return!s&&f.scopeId&&(f.slotScopeIds=[f.scopeId+"-s"]),c&&c._c&&(c._d=!0),f}function Nu(e){return e.some(l=>Ct(l)?!(l.type===ft||l.type===Ce&&!Nu(l.children)):!0)?e:null}function op(e,l){const a={};for(const o in e)a[l&&/[A-Z]/.test(o)?`on:${o}`:Ul(o)]=e[o];return a}const to=e=>e?rc(e)?vn(e)||e.proxy:to(e.parent):null,Yl=Ke(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>to(e.parent),$root:e=>to(e.root),$emit:e=>e.emit,$options:e=>is(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,un(e.update)}),$nextTick:e=>e.n||(e.n=Bl.bind(e.proxy)),$watch:e=>Zm.bind(e)}),In=(e,l)=>e!==qe&&!e.__isScriptSetup&&Re(e,l),io={get({_:e},l){const{ctx:a,setupState:o,data:s,props:c,accessCache:m,type:f,appContext:u}=e;let d;if(l[0]!=="$"){const w=m[l];if(w!==void 0)switch(w){case 1:return o[l];case 2:return s[l];case 4:return a[l];case 3:return c[l]}else{if(In(o,l))return m[l]=1,o[l];if(s!==qe&&Re(s,l))return m[l]=2,s[l];if((d=e.propsOptions[0])&&Re(d,l))return m[l]=3,c[l];if(a!==qe&&Re(a,l))return m[l]=4,a[l];lo&&(m[l]=0)}}const g=Yl[l];let p,_;if(g)return l==="$attrs"&&wt(e,"get",l),g(e);if((p=f.__cssModules)&&(p=p[l]))return p;if(a!==qe&&Re(a,l))return m[l]=4,a[l];if(_=u.config.globalProperties,Re(_,l))return _[l]},set({_:e},l,a){const{data:o,setupState:s,ctx:c}=e;return In(s,l)?(s[l]=a,!0):o!==qe&&Re(o,l)?(o[l]=a,!0):Re(e.props,l)||l[0]==="$"&&l.slice(1)in e?!1:(c[l]=a,!0)},has({_:{data:e,setupState:l,accessCache:a,ctx:o,appContext:s,propsOptions:c}},m){let f;return!!a[m]||e!==qe&&Re(e,m)||In(l,m)||(f=c[0])&&Re(f,m)||Re(o,m)||Re(Yl,m)||Re(s.config.globalProperties,m)},defineProperty(e,l,a){return a.get!=null?e._.accessCache[l]=0:Re(a,"value")&&this.set(e,l,a.value,null),Reflect.defineProperty(e,l,a)}},sp=Ke({},io,{get(e,l){if(l!==Symbol.unscopables)return io.get(e,l,e)},has(e,l){return l[0]!=="_"&&!Od(l)}});function rp(){return null}function up(){return null}function cp(e){}function dp(e){}function mp(){return null}function pp(){}function fp(e,l){return null}function gp(){return qu().slots}function Ou(){return qu().attrs}function qu(){const e=Kt();return e.setupContext||(e.setupContext=dc(e))}function sa(e){return ge(e)?e.reduce((l,a)=>(l[a]=null,l),{}):e}function hp(e,l){const a=sa(e);for(const o in l){if(o.startsWith("__skip"))continue;let s=a[o];s?ge(s)||we(s)?s=a[o]={type:s,default:l[o]}:s.default=l[o]:s===null&&(s=a[o]={default:l[o]}),s&&l[`__skip_${o}`]&&(s.skipFactory=!0)}return a}function _p(e,l){return!e||!l?e||l:ge(e)&&ge(l)?e.concat(l):Ke({},sa(e),sa(l))}function bp(e,l){const a={};for(const o in e)l.includes(o)||Object.defineProperty(a,o,{enumerable:!0,get:()=>e[o]});return a}function vp(e){const l=Kt();let a=e();return uo(),Eo(a)&&(a=a.catch(o=>{throw Ui(l),o})),[a,()=>Ui(l)]}let lo=!0;function Sp(e){const l=is(e),a=e.proxy,o=e.ctx;lo=!1,l.beforeCreate&&qs(l.beforeCreate,e,"bc");const{data:s,computed:c,methods:m,watch:f,provide:u,inject:d,created:g,beforeMount:p,mounted:_,beforeUpdate:w,updated:S,activated:A,deactivated:T,beforeDestroy:I,beforeUnmount:h,destroyed:b,unmounted:C,render:$,renderTracked:E,renderTriggered:F,errorCaptured:H,serverPrefetch:P,expose:j,inheritAttrs:Q,components:J,directives:fe,filters:Be}=l;if(d&&yp(d,o,null),m)for(const de in m){const le=m[de];we(le)&&(o[de]=le.bind(a))}if(s){const de=s.call(a,a);je(de)&&(e.data=ni(de))}if(lo=!0,c)for(const de in c){const le=c[de],Le=we(le)?le.bind(a,a):we(le.get)?le.get.bind(a,a):vt,Je=!we(le)&&we(le.set)?le.set.bind(a):vt,at=M({get:Le,set:Je});Object.defineProperty(o,de,{enumerable:!0,configurable:!0,get:()=>at.value,set:Ue=>at.value=Ue})}if(f)for(const de in f)Gu(f[de],o,a,de);if(u){const de=we(u)?u.call(a):u;Reflect.ownKeys(de).forEach(le=>{ut(le,de[le])})}g&&qs(g,e,"c");function K(de,le){ge(le)?le.forEach(Le=>de(Le.bind(a))):le&&de(le.bind(a))}if(K(zu,p),K(Ai,_),K(Pu,w),K(gn,S),K(es,A),K(ts,T),K(Hu,H),K(Mu,E),K(Fu,F),K(hn,h),K(Qi,C),K(Vu,P),ge(j))if(j.length){const de=e.exposed||(e.exposed={});j.forEach(le=>{Object.defineProperty(de,le,{get:()=>a[le],set:Le=>a[le]=Le})})}else e.exposed||(e.exposed={});$&&e.render===vt&&(e.render=$),Q!=null&&(e.inheritAttrs=Q),J&&(e.components=J),fe&&(e.directives=fe)}function yp(e,l,a=vt){ge(e)&&(e=ao(e));for(const o in e){const s=e[o];let c;je(s)?"default"in s?c=Fe(s.from||o,s.default,!0):c=Fe(s.from||o):c=Fe(s),ct(c)?Object.defineProperty(l,o,{enumerable:!0,configurable:!0,get:()=>c.value,set:m=>c.value=m}):l[o]=c}}function qs(e,l,a){Dt(ge(e)?e.map(o=>o.bind(l.proxy)):e.bind(l.proxy),l,a)}function Gu(e,l,a,o){const s=o.includes(".")?Iu(a,o):()=>a[o];if(Xe(e)){const c=l[e];we(c)&&pt(s,c)}else if(we(e))pt(s,e.bind(a));else if(je(e))if(ge(e))e.forEach(c=>Gu(c,l,a,o));else{const c=we(e.handler)?e.handler.bind(a):l[e.handler];we(c)&&pt(s,c,e)}}function is(e){const l=e.type,{mixins:a,extends:o}=l,{mixins:s,optionsCache:c,config:{optionMergeStrategies:m}}=e.appContext,f=c.get(l);let u;return f?u=f:!s.length&&!a&&!o?u=l:(u={},s.length&&s.forEach(d=>Ga(u,d,m,!0)),Ga(u,l,m)),je(l)&&c.set(l,u),u}function Ga(e,l,a,o=!1){const{mixins:s,extends:c}=l;c&&Ga(e,c,a,!0),s&&s.forEach(m=>Ga(e,m,a,!0));for(const m in l)if(!(o&&m==="expose")){const f=wp[m]||a&&a[m];e[m]=f?f(e[m],l[m]):l[m]}return e}const wp={data:Gs,props:js,emits:js,methods:Nl,computed:Nl,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:Nl,directives:Nl,watch:Ap,provide:Gs,inject:Cp};function Gs(e,l){return l?e?function(){return Ke(we(e)?e.call(this,this):e,we(l)?l.call(this,this):l)}:l:e}function Cp(e,l){return Nl(ao(e),ao(l))}function ao(e){if(ge(e)){const l={};for(let a=0;a<e.length;a++)l[e[a]]=e[a];return l}return e}function ht(e,l){return e?[...new Set([].concat(e,l))]:l}function Nl(e,l){return e?Ke(Object.create(null),e,l):l}function js(e,l){return e?ge(e)&&ge(l)?[...new Set([...e,...l])]:Ke(Object.create(null),sa(e),sa(l??{})):l}function Ap(e,l){if(!e)return l;if(!l)return e;const a=Ke(Object.create(null),e);for(const o in l)a[o]=ht(e[o],l[o]);return a}function ju(){return{app:null,config:{isNativeTag:zd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xp=0;function kp(e,l){return function(o,s=null){we(o)||(o=Ke({},o)),s!=null&&!je(s)&&(s=null);const c=ju(),m=new WeakSet;let f=!1;const u=c.app={_uid:xp++,_component:o,_props:s,_container:null,_context:c,_instance:null,version:pc,get config(){return c.config},set config(d){},use(d,...g){return m.has(d)||(d&&we(d.install)?(m.add(d),d.install(u,...g)):we(d)&&(m.add(d),d(u,...g))),u},mixin(d){return c.mixins.includes(d)||c.mixins.push(d),u},component(d,g){return g?(c.components[d]=g,u):c.components[d]},directive(d,g){return g?(c.directives[d]=g,u):c.directives[d]},mount(d,g,p){if(!f){const _=t(o,s);return _.appContext=c,p===!0?p="svg":p===!1&&(p=void 0),g&&l?l(_,d):e(_,d,p),f=!0,u._container=d,d.__vue_app__=u,vn(_.component)||_.component.proxy}},unmount(){f&&(e(null,u._container),delete u._container.__vue_app__)},provide(d,g){return c.provides[d]=g,u},runWithContext(d){ra=u;try{return d()}finally{ra=null}}};return u}}let ra=null;function ut(e,l){if(lt){let a=lt.provides;const o=lt.parent&&lt.parent.provides;o===a&&(a=lt.provides=Object.create(o)),a[e]=l}}function Fe(e,l,a=!1){const o=lt||tt;if(o||ra){const s=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:ra._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return a&&we(l)?l.call(o&&o.proxy):l}}function Bp(){return!!(lt||tt||ra)}function $p(e,l,a,o=!1){const s={},c={};Ma(c,bn,1),e.propsDefaults=Object.create(null),Uu(e,l,s,c);for(const m in e.propsOptions[0])m in s||(s[m]=void 0);a?e.props=o?s:cu(s):e.type.props?e.props=s:e.props=c,e.attrs=c}function Tp(e,l,a,o){const{props:s,attrs:c,vnode:{patchFlag:m}}=e,f=Ee(s),[u]=e.propsOptions;let d=!1;if((o||m>0)&&!(m&16)){if(m&8){const g=e.vnode.dynamicProps;for(let p=0;p<g.length;p++){let _=g[p];if(cn(e.emitsOptions,_))continue;const w=l[_];if(u)if(Re(c,_))w!==c[_]&&(c[_]=w,d=!0);else{const S=_t(_);s[S]=no(u,f,S,w,e,!1)}else w!==c[_]&&(c[_]=w,d=!0)}}}else{Uu(e,l,s,c)&&(d=!0);let g;for(const p in f)(!l||!Re(l,p)&&((g=Tt(p))===p||!Re(l,g)))&&(u?a&&(a[p]!==void 0||a[g]!==void 0)&&(s[p]=no(u,f,p,void 0,e,!0)):delete s[p]);if(c!==f)for(const p in c)(!l||!Re(l,p))&&(delete c[p],d=!0)}d&&ti(e,"set","$attrs")}function Uu(e,l,a,o){const[s,c]=e.propsOptions;let m=!1,f;if(l)for(let u in l){if(jl(u))continue;const d=l[u];let g;s&&Re(s,g=_t(u))?!c||!c.includes(g)?a[g]=d:(f||(f={}))[g]=d:cn(e.emitsOptions,u)||(!(u in o)||d!==o[u])&&(o[u]=d,m=!0)}if(c){const u=Ee(a),d=f||qe;for(let g=0;g<c.length;g++){const p=c[g];a[p]=no(s,u,p,d[p],e,!Re(d,p))}}return m}function no(e,l,a,o,s,c){const m=e[a];if(m!=null){const f=Re(m,"default");if(f&&o===void 0){const u=m.default;if(m.type!==Function&&!m.skipFactory&&we(u)){const{propsDefaults:d}=s;if(a in d)o=d[a];else{const g=Ui(s);o=d[a]=u.call(null,l),g()}}else o=u}m[0]&&(c&&!f?o=!1:m[1]&&(o===""||o===Tt(a))&&(o=!0))}return o}function Yu(e,l,a=!1){const o=l.propsCache,s=o.get(e);if(s)return s;const c=e.props,m={},f=[];let u=!1;if(!we(e)){const g=p=>{u=!0;const[_,w]=Yu(p,l,!0);Ke(m,_),w&&f.push(...w)};!a&&l.mixins.length&&l.mixins.forEach(g),e.extends&&g(e.extends),e.mixins&&e.mixins.forEach(g)}if(!c&&!u)return je(e)&&o.set(e,sl),sl;if(ge(c))for(let g=0;g<c.length;g++){const p=_t(c[g]);Us(p)&&(m[p]=qe)}else if(c)for(const g in c){const p=_t(g);if(Us(p)){const _=c[g],w=m[p]=ge(_)||we(_)?{type:_}:Ke({},_);if(w){const S=Ws(Boolean,w.type),A=Ws(String,w.type);w[0]=S>-1,w[1]=A<0||S<A,(S>-1||Re(w,"default"))&&f.push(p)}}}const d=[m,f];return je(e)&&o.set(e,d),d}function Us(e){return e[0]!=="$"}function Ys(e){const l=e&&e.toString().match(/^\s*(function|class) (\w+)/);return l?l[2]:e===null?"null":""}function Js(e,l){return Ys(e)===Ys(l)}function Ws(e,l){return ge(l)?l.findIndex(a=>Js(a,e)):we(l)&&Js(l,e)?0:-1}const Ju=e=>e[0]==="_"||e==="$stable",ls=e=>ge(e)?e.map(Bt):[Bt(e)],Lp=(e,l,a)=>{if(l._n)return l;const o=i((...s)=>ls(l(...s)),a);return o._c=!1,o},Wu=(e,l,a)=>{const o=e._ctx;for(const s in e){if(Ju(s))continue;const c=e[s];if(we(c))l[s]=Lp(s,c,o);else if(c!=null){const m=ls(c);l[s]=()=>m}}},Ku=(e,l)=>{const a=ls(l);e.slots.default=()=>a},Ip=(e,l)=>{if(e.vnode.shapeFlag&32){const a=l._;a?(e.slots=Ee(l),Ma(l,"_",a)):Wu(l,e.slots={})}else e.slots={},l&&Ku(e,l);Ma(e.slots,bn,1)},Dp=(e,l,a)=>{const{vnode:o,slots:s}=e;let c=!0,m=qe;if(o.shapeFlag&32){const f=l._;f?a&&f===1?c=!1:(Ke(s,l),!a&&f===1&&delete s._):(c=!l.$stable,Wu(l,s)),m=l}else l&&(Ku(e,l),m={default:1});if(c)for(const f in s)!Ju(f)&&m[f]==null&&delete s[f]};function ja(e,l,a,o,s=!1){if(ge(e)){e.forEach((_,w)=>ja(_,l&&(ge(l)?l[w]:l),a,o,s));return}if(Fi(o)&&!s)return;const c=o.shapeFlag&4?vn(o.component)||o.component.proxy:o.el,m=s?null:c,{i:f,r:u}=e,d=l&&l.r,g=f.refs===qe?f.refs={}:f.refs,p=f.setupState;if(d!=null&&d!==u&&(Xe(d)?(g[d]=null,Re(p,d)&&(p[d]=null)):ct(d)&&(d.value=null)),we(u))ii(u,f,12,[m,g]);else{const _=Xe(u),w=ct(u),S=e.f;if(_||w){const A=()=>{if(S){const T=_?Re(p,u)?p[u]:g[u]:u.value;s?ge(T)&&Do(T,c):ge(T)?T.includes(c)||T.push(c):_?(g[u]=[c],Re(p,u)&&(p[u]=g[u])):(u.value=[c],e.k&&(g[e.k]=u.value))}else _?(g[u]=m,Re(p,u)&&(p[u]=m)):w&&(u.value=m,e.k&&(g[e.k]=m))};s||S?A():(A.id=-1,rt(A,a))}}}let ui=!1;const Ep=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",Rp=e=>e.namespaceURI.includes("MathML"),Ba=e=>{if(Ep(e))return"svg";if(Rp(e))return"mathml"},$a=e=>e.nodeType===8;function zp(e){const{mt:l,p:a,o:{patchProp:o,createText:s,nextSibling:c,parentNode:m,remove:f,insert:u,createComment:d}}=e,g=(b,C)=>{if(!C.hasChildNodes()){a(null,b,C),qa(),C._vnode=b;return}ui=!1,p(C.firstChild,b,null,null,null),qa(),C._vnode=b,ui&&console.error("Hydration completed but contains mismatches.")},p=(b,C,$,E,F,H=!1)=>{const P=$a(b)&&b.data==="[",j=()=>A(b,C,$,E,F,P),{type:Q,ref:J,shapeFlag:fe,patchFlag:Be}=C;let U=b.nodeType;C.el=b,Be===-2&&(H=!1,C.dynamicChildren=null);let K=null;switch(Q){case Gi:U!==3?C.children===""?(u(C.el=s(""),m(b),b),K=b):K=j():(b.data!==C.children&&(ui=!0,b.data=C.children),K=c(b));break;case ft:h(b)?(K=c(b),I(C.el=b.content.firstChild,b,$)):U!==8||P?K=j():K=c(b);break;case Mi:if(P&&(b=c(b),U=b.nodeType),U===1||U===3){K=b;const de=!C.children.length;for(let le=0;le<C.staticCount;le++)de&&(C.children+=K.nodeType===1?K.outerHTML:K.data),le===C.staticCount-1&&(C.anchor=K),K=c(K);return P?c(K):K}else j();break;case Ce:P?K=S(b,C,$,E,F,H):K=j();break;default:if(fe&1)(U!==1||C.type.toLowerCase()!==b.tagName.toLowerCase())&&!h(b)?K=j():K=_(b,C,$,E,F,H);else if(fe&6){C.slotScopeIds=F;const de=m(b);if(P?K=T(b):$a(b)&&b.data==="teleport start"?K=T(b,b.data,"teleport end"):K=c(b),l(C,de,null,$,E,Ba(de),H),Fi(C)){let le;P?(le=t(Ce),le.anchor=K?K.previousSibling:de.lastChild):le=b.nodeType===3?n(""):t("div"),le.el=b,C.component.subTree=le}}else fe&64?U!==8?K=j():K=C.type.hydrate(b,C,$,E,F,H,e,w):fe&128&&(K=C.type.hydrate(b,C,$,E,Ba(m(b)),F,H,e,p))}return J!=null&&ja(J,null,E,C),K},_=(b,C,$,E,F,H)=>{H=H||!!C.dynamicChildren;const{type:P,props:j,patchFlag:Q,shapeFlag:J,dirs:fe,transition:Be}=C,U=P==="input"||P==="option";if(U||Q!==-1){fe&&jt(C,null,$,"created");let K=!1;if(h(b)){K=ec(E,Be)&&$&&$.vnode.props&&$.vnode.props.appear;const le=b.content.firstChild;K&&Be.beforeEnter(le),I(le,b,$),C.el=b=le}if(J&16&&!(j&&(j.innerHTML||j.textContent))){let le=w(b.firstChild,C,b,$,E,F,H);for(;le;){ui=!0;const Le=le;le=le.nextSibling,f(Le)}}else J&8&&b.textContent!==C.children&&(ui=!0,b.textContent=C.children);if(j)if(U||!H||Q&48)for(const le in j)(U&&(le.endsWith("value")||le==="indeterminate")||ma(le)&&!jl(le)||le[0]===".")&&o(b,le,null,j[le],void 0,void 0,$);else j.onClick&&o(b,"onClick",null,j.onClick,void 0,void 0,$);let de;(de=j&&j.onVnodeBeforeMount)&&bt(de,$,C),fe&&jt(C,null,$,"beforeMount"),((de=j&&j.onVnodeMounted)||fe||K)&&ku(()=>{de&&bt(de,$,C),K&&Be.enter(b),fe&&jt(C,null,$,"mounted")},E)}return b.nextSibling},w=(b,C,$,E,F,H,P)=>{P=P||!!C.dynamicChildren;const j=C.children,Q=j.length;for(let J=0;J<Q;J++){const fe=P?j[J]:j[J]=Bt(j[J]);if(b)b=p(b,fe,E,F,H,P);else{if(fe.type===Gi&&!fe.children)continue;ui=!0,a(null,fe,$,null,E,F,Ba($),H)}}return b},S=(b,C,$,E,F,H)=>{const{slotScopeIds:P}=C;P&&(F=F?F.concat(P):P);const j=m(b),Q=w(c(b),C,j,$,E,F,H);return Q&&$a(Q)&&Q.data==="]"?c(C.anchor=Q):(ui=!0,u(C.anchor=d("]"),j,Q),Q)},A=(b,C,$,E,F,H)=>{if(ui=!0,C.el=null,H){const Q=T(b);for(;;){const J=c(b);if(J&&J!==Q)f(J);else break}}const P=c(b),j=m(b);return f(b),a(null,C,j,P,$,E,Ba(j),F),P},T=(b,C="[",$="]")=>{let E=0;for(;b;)if(b=c(b),b&&$a(b)&&(b.data===C&&E++,b.data===$)){if(E===0)return c(b);E--}return b},I=(b,C,$)=>{const E=C.parentNode;E&&E.replaceChild(b,C);let F=$;for(;F;)F.vnode.el===C&&(F.vnode.el=F.subTree.el=b),F=F.parent},h=b=>b.nodeType===1&&b.tagName.toLowerCase()==="template";return[g,p]}const rt=ku;function Xu(e){return Zu(e)}function Qu(e){return Zu(e,zp)}function Zu(e,l){const a=jr();a.__VUE__=!0;const{insert:o,remove:s,patchProp:c,createElement:m,createText:f,createComment:u,setText:d,setElementText:g,parentNode:p,nextSibling:_,setScopeId:w=vt,insertStaticContent:S}=e,A=(L,R,q,Z=null,ee=null,ne=null,ce=void 0,ae=null,se=!!R.dynamicChildren)=>{if(L===R)return;L&&!Ot(L,R)&&(Z=re(L),Ue(L,ee,ne,!0),L=null),R.patchFlag===-2&&(se=!1,R.dynamicChildren=null);const{type:ie,ref:me,shapeFlag:Se}=R;switch(ie){case Gi:T(L,R,q,Z);break;case ft:I(L,R,q,Z);break;case Mi:L==null&&h(R,q,Z,ce);break;case Ce:J(L,R,q,Z,ee,ne,ce,ae,se);break;default:Se&1?$(L,R,q,Z,ee,ne,ce,ae,se):Se&6?fe(L,R,q,Z,ee,ne,ce,ae,se):(Se&64||Se&128)&&ie.process(L,R,q,Z,ee,ne,ce,ae,se,Ne)}me!=null&&ee&&ja(me,L&&L.ref,ne,R||L,!R)},T=(L,R,q,Z)=>{if(L==null)o(R.el=f(R.children),q,Z);else{const ee=R.el=L.el;R.children!==L.children&&d(ee,R.children)}},I=(L,R,q,Z)=>{L==null?o(R.el=u(R.children||""),q,Z):R.el=L.el},h=(L,R,q,Z)=>{[L.el,L.anchor]=S(L.children,R,q,Z,L.el,L.anchor)},b=({el:L,anchor:R},q,Z)=>{let ee;for(;L&&L!==R;)ee=_(L),o(L,q,Z),L=ee;o(R,q,Z)},C=({el:L,anchor:R})=>{let q;for(;L&&L!==R;)q=_(L),s(L),L=q;s(R)},$=(L,R,q,Z,ee,ne,ce,ae,se)=>{R.type==="svg"?ce="svg":R.type==="math"&&(ce="mathml"),L==null?E(R,q,Z,ee,ne,ce,ae,se):P(L,R,ee,ne,ce,ae,se)},E=(L,R,q,Z,ee,ne,ce,ae)=>{let se,ie;const{props:me,shapeFlag:Se,transition:be,dirs:Ae}=L;if(se=L.el=m(L.type,ne,me&&me.is,me),Se&8?g(se,L.children):Se&16&&H(L.children,se,null,Z,ee,Dn(L,ne),ce,ae),Ae&&jt(L,null,Z,"created"),F(se,L,L.scopeId,ce,Z),me){for(const Ge in me)Ge!=="value"&&!jl(Ge)&&c(se,Ge,null,me[Ge],ne,L.children,Z,ee,ue);"value"in me&&c(se,"value",null,me.value,ne),(ie=me.onVnodeBeforeMount)&&bt(ie,Z,L)}Ae&&jt(L,null,Z,"beforeMount");const Ie=ec(ee,be);Ie&&be.beforeEnter(se),o(se,R,q),((ie=me&&me.onVnodeMounted)||Ie||Ae)&&rt(()=>{ie&&bt(ie,Z,L),Ie&&be.enter(se),Ae&&jt(L,null,Z,"mounted")},ee)},F=(L,R,q,Z,ee)=>{if(q&&w(L,q),Z)for(let ne=0;ne<Z.length;ne++)w(L,Z[ne]);if(ee){let ne=ee.subTree;if(R===ne){const ce=ee.vnode;F(L,ce,ce.scopeId,ce.slotScopeIds,ee.parent)}}},H=(L,R,q,Z,ee,ne,ce,ae,se=0)=>{for(let ie=se;ie<L.length;ie++){const me=L[ie]=ae?hi(L[ie]):Bt(L[ie]);A(null,me,R,q,Z,ee,ne,ce,ae)}},P=(L,R,q,Z,ee,ne,ce)=>{const ae=R.el=L.el;let{patchFlag:se,dynamicChildren:ie,dirs:me}=R;se|=L.patchFlag&16;const Se=L.props||qe,be=R.props||qe;let Ae;if(q&&Bi(q,!1),(Ae=be.onVnodeBeforeUpdate)&&bt(Ae,q,R,L),me&&jt(R,L,q,"beforeUpdate"),q&&Bi(q,!0),ie?j(L.dynamicChildren,ie,ae,q,Z,Dn(R,ee),ne):ce||le(L,R,ae,null,q,Z,Dn(R,ee),ne,!1),se>0){if(se&16)Q(ae,R,Se,be,q,Z,ee);else if(se&2&&Se.class!==be.class&&c(ae,"class",null,be.class,ee),se&4&&c(ae,"style",Se.style,be.style,ee),se&8){const Ie=R.dynamicProps;for(let Ge=0;Ge<Ie.length;Ge++){const We=Ie[Ge],nt=Se[We],Nt=be[We];(Nt!==nt||We==="value")&&c(ae,We,nt,Nt,ee,L.children,q,Z,ue)}}se&1&&L.children!==R.children&&g(ae,R.children)}else!ce&&ie==null&&Q(ae,R,Se,be,q,Z,ee);((Ae=be.onVnodeUpdated)||me)&&rt(()=>{Ae&&bt(Ae,q,R,L),me&&jt(R,L,q,"updated")},Z)},j=(L,R,q,Z,ee,ne,ce)=>{for(let ae=0;ae<R.length;ae++){const se=L[ae],ie=R[ae],me=se.el&&(se.type===Ce||!Ot(se,ie)||se.shapeFlag&70)?p(se.el):q;A(se,ie,me,null,Z,ee,ne,ce,!0)}},Q=(L,R,q,Z,ee,ne,ce)=>{if(q!==Z){if(q!==qe)for(const ae in q)!jl(ae)&&!(ae in Z)&&c(L,ae,q[ae],null,ce,R.children,ee,ne,ue);for(const ae in Z){if(jl(ae))continue;const se=Z[ae],ie=q[ae];se!==ie&&ae!=="value"&&c(L,ae,ie,se,ce,R.children,ee,ne,ue)}"value"in Z&&c(L,"value",q.value,Z.value,ce)}},J=(L,R,q,Z,ee,ne,ce,ae,se)=>{const ie=R.el=L?L.el:f(""),me=R.anchor=L?L.anchor:f("");let{patchFlag:Se,dynamicChildren:be,slotScopeIds:Ae}=R;Ae&&(ae=ae?ae.concat(Ae):Ae),L==null?(o(ie,q,Z),o(me,q,Z),H(R.children||[],q,me,ee,ne,ce,ae,se)):Se>0&&Se&64&&be&&L.dynamicChildren?(j(L.dynamicChildren,be,q,ee,ne,ce,ae),(R.key!=null||ee&&R===ee.subTree)&&as(L,R,!0)):le(L,R,q,me,ee,ne,ce,ae,se)},fe=(L,R,q,Z,ee,ne,ce,ae,se)=>{R.slotScopeIds=ae,L==null?R.shapeFlag&512?ee.ctx.activate(R,q,Z,ce,se):Be(R,q,Z,ee,ne,ce,se):U(L,R,se)},Be=(L,R,q,Z,ee,ne,ce)=>{const ae=L.component=sc(L,Z,ee);if(ha(L)&&(ae.ctx.renderer=Ne),uc(ae),ae.asyncDep){if(ee&&ee.registerDep(ae,K),!L.el){const se=ae.subTree=t(ft);I(null,se,R,q)}}else K(ae,L,R,q,ee,ne,ce)},U=(L,R,q)=>{const Z=R.component=L.component;if(Gm(L,R,q))if(Z.asyncDep&&!Z.asyncResolved){de(Z,R,q);return}else Z.next=R,Vm(Z.update),Z.effect.dirty=!0,Z.update();else R.el=L.el,Z.vnode=R},K=(L,R,q,Z,ee,ne,ce)=>{const ae=()=>{if(L.isMounted){let{next:me,bu:Se,u:be,parent:Ae,vnode:Ie}=L;{const tl=tc(L);if(tl){me&&(me.el=Ie.el,de(L,me,ce)),tl.asyncDep.then(()=>{L.isUnmounted||ae()});return}}let Ge=me,We;Bi(L,!1),me?(me.el=Ie.el,de(L,me,ce)):me=Ie,Se&&ul(Se),(We=me.props&&me.props.onVnodeBeforeUpdate)&&bt(We,Ae,me,Ie),Bi(L,!0);const nt=za(L),Nt=L.subTree;L.subTree=nt,A(Nt,nt,p(Nt.el),re(Nt),L,ee,ne),me.el=nt.el,Ge===null&&Yo(L,nt.el),be&&rt(be,ee),(We=me.props&&me.props.onVnodeUpdated)&&rt(()=>bt(We,Ae,me,Ie),ee)}else{let me;const{el:Se,props:be}=R,{bm:Ae,m:Ie,parent:Ge}=L,We=Fi(R);if(Bi(L,!1),Ae&&ul(Ae),!We&&(me=be&&be.onVnodeBeforeMount)&&bt(me,Ge,R),Bi(L,!0),Se&&ke){const nt=()=>{L.subTree=za(L),ke(Se,L.subTree,L,ee,null)};We?R.type.__asyncLoader().then(()=>!L.isUnmounted&&nt()):nt()}else{const nt=L.subTree=za(L);A(null,nt,q,Z,L,ee,ne),R.el=nt.el}if(Ie&&rt(Ie,ee),!We&&(me=be&&be.onVnodeMounted)){const nt=R;rt(()=>bt(me,Ge,nt),ee)}(R.shapeFlag&256||Ge&&Fi(Ge.vnode)&&Ge.vnode.shapeFlag&256)&&L.a&&rt(L.a,ee),L.isMounted=!0,R=q=Z=null}},se=L.effect=new bl(ae,vt,()=>un(ie),L.scope),ie=L.update=()=>{se.dirty&&se.run()};ie.id=L.uid,Bi(L,!0),ie()},de=(L,R,q)=>{R.component=L;const Z=L.vnode.props;L.vnode=R,L.next=null,Tp(L,R.props,Z,q),Dp(L,R.children,q),Wi(),Fs(L),Ki()},le=(L,R,q,Z,ee,ne,ce,ae,se=!1)=>{const ie=L&&L.children,me=L?L.shapeFlag:0,Se=R.children,{patchFlag:be,shapeFlag:Ae}=R;if(be>0){if(be&128){Je(ie,Se,q,Z,ee,ne,ce,ae,se);return}else if(be&256){Le(ie,Se,q,Z,ee,ne,ce,ae,se);return}}Ae&8?(me&16&&ue(ie,ee,ne),Se!==ie&&g(q,Se)):me&16?Ae&16?Je(ie,Se,q,Z,ee,ne,ce,ae,se):ue(ie,ee,ne,!0):(me&8&&g(q,""),Ae&16&&H(Se,q,Z,ee,ne,ce,ae,se))},Le=(L,R,q,Z,ee,ne,ce,ae,se)=>{L=L||sl,R=R||sl;const ie=L.length,me=R.length,Se=Math.min(ie,me);let be;for(be=0;be<Se;be++){const Ae=R[be]=se?hi(R[be]):Bt(R[be]);A(L[be],Ae,q,null,ee,ne,ce,ae,se)}ie>me?ue(L,ee,ne,!0,!1,Se):H(R,q,Z,ee,ne,ce,ae,se,Se)},Je=(L,R,q,Z,ee,ne,ce,ae,se)=>{let ie=0;const me=R.length;let Se=L.length-1,be=me-1;for(;ie<=Se&&ie<=be;){const Ae=L[ie],Ie=R[ie]=se?hi(R[ie]):Bt(R[ie]);if(Ot(Ae,Ie))A(Ae,Ie,q,null,ee,ne,ce,ae,se);else break;ie++}for(;ie<=Se&&ie<=be;){const Ae=L[Se],Ie=R[be]=se?hi(R[be]):Bt(R[be]);if(Ot(Ae,Ie))A(Ae,Ie,q,null,ee,ne,ce,ae,se);else break;Se--,be--}if(ie>Se){if(ie<=be){const Ae=be+1,Ie=Ae<me?R[Ae].el:Z;for(;ie<=be;)A(null,R[ie]=se?hi(R[ie]):Bt(R[ie]),q,Ie,ee,ne,ce,ae,se),ie++}}else if(ie>be)for(;ie<=Se;)Ue(L[ie],ee,ne,!0),ie++;else{const Ae=ie,Ie=ie,Ge=new Map;for(ie=Ie;ie<=be;ie++){const xt=R[ie]=se?hi(R[ie]):Bt(R[ie]);xt.key!=null&&Ge.set(xt.key,ie)}let We,nt=0;const Nt=be-Ie+1;let tl=!1,ks=0;const Rl=new Array(Nt);for(ie=0;ie<Nt;ie++)Rl[ie]=0;for(ie=Ae;ie<=Se;ie++){const xt=L[ie];if(nt>=Nt){Ue(xt,ee,ne,!0);continue}let Gt;if(xt.key!=null)Gt=Ge.get(xt.key);else for(We=Ie;We<=be;We++)if(Rl[We-Ie]===0&&Ot(xt,R[We])){Gt=We;break}Gt===void 0?Ue(xt,ee,ne,!0):(Rl[Gt-Ie]=ie+1,Gt>=ks?ks=Gt:tl=!0,A(xt,R[Gt],q,null,ee,ne,ce,ae,se),nt++)}const Bs=tl?Pp(Rl):sl;for(We=Bs.length-1,ie=Nt-1;ie>=0;ie--){const xt=Ie+ie,Gt=R[xt],$s=xt+1<me?R[xt+1].el:Z;Rl[ie]===0?A(null,Gt,q,$s,ee,ne,ce,ae,se):tl&&(We<0||ie!==Bs[We]?at(Gt,q,$s,2):We--)}}},at=(L,R,q,Z,ee=null)=>{const{el:ne,type:ce,transition:ae,children:se,shapeFlag:ie}=L;if(ie&6){at(L.component.subTree,R,q,Z);return}if(ie&128){L.suspense.move(R,q,Z);return}if(ie&64){ce.move(L,R,q,Ne);return}if(ce===Ce){o(ne,R,q);for(let Se=0;Se<se.length;Se++)at(se[Se],R,q,Z);o(L.anchor,R,q);return}if(ce===Mi){b(L,R,q);return}if(Z!==2&&ie&1&&ae)if(Z===0)ae.beforeEnter(ne),o(ne,R,q),rt(()=>ae.enter(ne),ee);else{const{leave:Se,delayLeave:be,afterLeave:Ae}=ae,Ie=()=>o(ne,R,q),Ge=()=>{Se(ne,()=>{Ie(),Ae&&Ae()})};be?be(ne,Ie,Ge):Ge()}else o(ne,R,q)},Ue=(L,R,q,Z=!1,ee=!1)=>{const{type:ne,props:ce,ref:ae,children:se,dynamicChildren:ie,shapeFlag:me,patchFlag:Se,dirs:be}=L;if(ae!=null&&ja(ae,null,q,L,!0),me&256){R.ctx.deactivate(L);return}const Ae=me&1&&be,Ie=!Fi(L);let Ge;if(Ie&&(Ge=ce&&ce.onVnodeBeforeUnmount)&&bt(Ge,R,L),me&6)W(L.component,q,Z);else{if(me&128){L.suspense.unmount(q,Z);return}Ae&&jt(L,null,R,"beforeUnmount"),me&64?L.type.remove(L,R,q,ee,Ne,Z):ie&&(ne!==Ce||Se>0&&Se&64)?ue(ie,R,q,!1,!0):(ne===Ce&&Se&384||!ee&&me&16)&&ue(se,R,q),Z&&Xt(L)}(Ie&&(Ge=ce&&ce.onVnodeUnmounted)||Ae)&&rt(()=>{Ge&&bt(Ge,R,L),Ae&&jt(L,null,R,"unmounted")},q)},Xt=L=>{const{type:R,el:q,anchor:Z,transition:ee}=L;if(R===Ce){zt(q,Z);return}if(R===Mi){C(L);return}const ne=()=>{s(q),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(L.shapeFlag&1&&ee&&!ee.persisted){const{leave:ce,delayLeave:ae}=ee,se=()=>ce(q,ne);ae?ae(L.el,ne,se):se()}else ne()},zt=(L,R)=>{let q;for(;L!==R;)q=_(L),s(L),L=q;s(R)},W=(L,R,q)=>{const{bum:Z,scope:ee,update:ne,subTree:ce,um:ae}=L;Z&&ul(Z),ee.stop(),ne&&(ne.active=!1,Ue(ce,L,R,q)),ae&&rt(ae,R),rt(()=>{L.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&L.asyncDep&&!L.asyncResolved&&L.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},ue=(L,R,q,Z=!1,ee=!1,ne=0)=>{for(let ce=ne;ce<L.length;ce++)Ue(L[ce],R,q,Z,ee)},re=L=>L.shapeFlag&6?re(L.component.subTree):L.shapeFlag&128?L.suspense.next():_(L.anchor||L.el);let he=!1;const He=(L,R,q)=>{L==null?R._vnode&&Ue(R._vnode,null,null,!0):A(R._vnode||null,L,R,null,null,null,q),he||(he=!0,Fs(),qa(),he=!1),R._vnode=L},Ne={p:A,um:Ue,m:at,r:Xt,mt:Be,mc:H,pc:le,pbc:j,n:re,o:e};let xe,ke;return l&&([xe,ke]=l(Ne)),{render:He,hydrate:xe,createApp:kp(He,xe)}}function Dn({type:e,props:l},a){return a==="svg"&&e==="foreignObject"||a==="mathml"&&e==="annotation-xml"&&l&&l.encoding&&l.encoding.includes("html")?void 0:a}function Bi({effect:e,update:l},a){e.allowRecurse=l.allowRecurse=a}function ec(e,l){return(!e||e&&!e.pendingBranch)&&l&&!l.persisted}function as(e,l,a=!1){const o=e.children,s=l.children;if(ge(o)&&ge(s))for(let c=0;c<o.length;c++){const m=o[c];let f=s[c];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=s[c]=hi(s[c]),f.el=m.el),a||as(m,f)),f.type===Gi&&(f.el=m.el)}}function Pp(e){const l=e.slice(),a=[0];let o,s,c,m,f;const u=e.length;for(o=0;o<u;o++){const d=e[o];if(d!==0){if(s=a[a.length-1],e[s]<d){l[o]=s,a.push(o);continue}for(c=0,m=a.length-1;c<m;)f=c+m>>1,e[a[f]]<d?c=f+1:m=f;d<e[a[c]]&&(c>0&&(l[o]=a[c-1]),a[c]=o)}}for(c=a.length,m=a[c-1];c-- >0;)a[c]=m,m=l[m];return a}function tc(e){const l=e.subTree.component;if(l)return l.asyncDep&&!l.asyncResolved?l:tc(l)}const Vp=e=>e.__isTeleport,Jl=e=>e&&(e.disabled||e.disabled===""),Ks=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Xs=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,oo=(e,l)=>{const a=e&&e.to;return Xe(a)?l?l(a):null:a},Fp={name:"Teleport",__isTeleport:!0,process(e,l,a,o,s,c,m,f,u,d){const{mc:g,pc:p,pbc:_,o:{insert:w,querySelector:S,createText:A,createComment:T}}=d,I=Jl(l.props);let{shapeFlag:h,children:b,dynamicChildren:C}=l;if(e==null){const $=l.el=A(""),E=l.anchor=A("");w($,a,o),w(E,a,o);const F=l.target=oo(l.props,S),H=l.targetAnchor=A("");F&&(w(H,F),m==="svg"||Ks(F)?m="svg":(m==="mathml"||Xs(F))&&(m="mathml"));const P=(j,Q)=>{h&16&&g(b,j,Q,s,c,m,f,u)};I?P(a,E):F&&P(F,H)}else{l.el=e.el;const $=l.anchor=e.anchor,E=l.target=e.target,F=l.targetAnchor=e.targetAnchor,H=Jl(e.props),P=H?a:E,j=H?$:F;if(m==="svg"||Ks(E)?m="svg":(m==="mathml"||Xs(E))&&(m="mathml"),C?(_(e.dynamicChildren,C,P,s,c,m,f),as(e,l,!0)):u||p(e,l,P,j,s,c,m,f,!1),I)H?l.props&&e.props&&l.props.to!==e.props.to&&(l.props.to=e.props.to):Ta(l,a,$,d,1);else if((l.props&&l.props.to)!==(e.props&&e.props.to)){const Q=l.target=oo(l.props,S);Q&&Ta(l,Q,null,d,0)}else H&&Ta(l,E,F,d,1)}ic(l)},remove(e,l,a,o,{um:s,o:{remove:c}},m){const{shapeFlag:f,children:u,anchor:d,targetAnchor:g,target:p,props:_}=e;if(p&&c(g),m&&c(d),f&16){const w=m||!Jl(_);for(let S=0;S<u.length;S++){const A=u[S];s(A,l,a,w,!!A.dynamicChildren)}}},move:Ta,hydrate:Mp};function Ta(e,l,a,{o:{insert:o},m:s},c=2){c===0&&o(e.targetAnchor,l,a);const{el:m,anchor:f,shapeFlag:u,children:d,props:g}=e,p=c===2;if(p&&o(m,l,a),(!p||Jl(g))&&u&16)for(let _=0;_<d.length;_++)s(d[_],l,a,2);p&&o(f,l,a)}function Mp(e,l,a,o,s,c,{o:{nextSibling:m,parentNode:f,querySelector:u}},d){const g=l.target=oo(l.props,u);if(g){const p=g._lpa||g.firstChild;if(l.shapeFlag&16)if(Jl(l.props))l.anchor=d(m(e),l,f(e),a,o,s,c),l.targetAnchor=p;else{l.anchor=m(e);let _=p;for(;_;)if(_=m(_),_&&_.nodeType===8&&_.data==="teleport anchor"){l.targetAnchor=_,g._lpa=l.targetAnchor&&m(l.targetAnchor);break}d(p,l,g,a,o,s,c)}ic(l)}return l.anchor&&m(l.anchor)}const _n=Fp;function ic(e){const l=e.ctx;if(l&&l.ut){let a=e.children[0].el;for(;a&&a!==e.targetAnchor;)a.nodeType===1&&a.setAttribute("data-v-owner",l.uid),a=a.nextSibling;l.ut()}}const Ce=Symbol.for("v-fgt"),Gi=Symbol.for("v-txt"),ft=Symbol.for("v-cmt"),Mi=Symbol.for("v-stc"),Wl=[];let St=null;function y(e=!1){Wl.push(St=e?null:[])}function lc(){Wl.pop(),St=Wl[Wl.length-1]||null}let ji=1;function so(e){ji+=e}function ac(e){return e.dynamicChildren=ji>0?St||sl:null,lc(),ji>0&&St&&St.push(e),e}function ve(e,l,a,o,s,c){return ac(k(e,l,a,o,s,c,!0))}function B(e,l,a,o,s){return ac(t(e,l,a,o,s,!0))}function Ct(e){return e?e.__v_isVNode===!0:!1}function Ot(e,l){return e.type===l.type&&e.key===l.key}function Hp(e){}const bn="__vInternal",nc=({key:e})=>e??null,Pa=({ref:e,ref_key:l,ref_for:a})=>(typeof e=="number"&&(e=""+e),e!=null?Xe(e)||ct(e)||we(e)?{i:tt,r:e,k:l,f:!!a}:e:null);function k(e,l=null,a=null,o=0,s=null,c=e===Ce?0:1,m=!1,f=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:l,key:l&&nc(l),ref:l&&Pa(l),scopeId:dn,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:c,patchFlag:o,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:tt};return f?(os(u,a),c&128&&e.normalize(u)):a&&(u.shapeFlag|=Xe(a)?8:16),ji>0&&!m&&St&&(u.patchFlag>0||c&6)&&u.patchFlag!==32&&St.push(u),u}const t=Np;function Np(e,l=null,a=null,o=0,s=null,c=!1){if((!e||e===Cu)&&(e=ft),Ct(e)){const f=Wt(e,l,!0);return a&&os(f,a),ji>0&&!c&&St&&(f.shapeFlag&6?St[St.indexOf(e)]=f:St.push(f)),f.patchFlag|=-2,f}if(Wp(e)&&(e=e.__vccOpts),l){l=oc(l);let{class:f,style:u}=l;f&&!Xe(f)&&(l.class=fa(f)),je(u)&&(No(u)&&!ge(u)&&(u=Ke({},u)),l.style=kl(u))}const m=Xe(e)?1:xu(e)?128:Vp(e)?64:je(e)?4:we(e)?2:0;return k(e,l,a,o,s,m,c,!0)}function oc(e){return e?No(e)||bn in e?Ke({},e):e:null}function Wt(e,l,a=!1){const{props:o,ref:s,patchFlag:c,children:m}=e,f=l?Zi(o||{},l):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&nc(f),ref:l&&l.ref?a&&s?ge(s)?s.concat(Pa(l)):[s,Pa(l)]:Pa(l):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:m,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:l&&e.type!==Ce?c===-1?16:c|16:c,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Wt(e.ssContent),ssFallback:e.ssFallback&&Wt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function n(e=" ",l=0){return t(Gi,null,e,l)}function Op(e,l){const a=t(Mi,null,e);return a.staticCount=l,a}function ns(e="",l=!1){return l?(y(),B(ft,null,e)):t(ft,null,e)}function Bt(e){return e==null||typeof e=="boolean"?t(ft):ge(e)?t(Ce,null,e.slice()):typeof e=="object"?hi(e):t(Gi,null,String(e))}function hi(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Wt(e)}function os(e,l){let a=0;const{shapeFlag:o}=e;if(l==null)l=null;else if(ge(l))a=16;else if(typeof l=="object")if(o&65){const s=l.default;s&&(s._c&&(s._d=!1),os(e,s()),s._c&&(s._d=!0));return}else{a=32;const s=l._;!s&&!(bn in l)?l._ctx=tt:s===3&&tt&&(tt.slots._===1?l._=1:(l._=2,e.patchFlag|=1024))}else we(l)?(l={default:l,_ctx:tt},a=32):(l=String(l),o&64?(a=16,l=[n(l)]):a=8);e.children=l,e.shapeFlag|=a}function Zi(...e){const l={};for(let a=0;a<e.length;a++){const o=e[a];for(const s in o)if(s==="class")l.class!==o.class&&(l.class=fa([l.class,o.class]));else if(s==="style")l.style=kl([l.style,o.style]);else if(ma(s)){const c=l[s],m=o[s];m&&c!==m&&!(ge(c)&&c.includes(m))&&(l[s]=c?[].concat(c,m):m)}else s!==""&&(l[s]=o[s])}return l}function bt(e,l,a,o=null){Dt(e,l,7,[a,o])}const qp=ju();let Gp=0;function sc(e,l,a){const o=e.type,s=(l?l.appContext:e.appContext)||qp,c={uid:Gp++,vnode:e,type:o,parent:l,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new zo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:l?l.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yu(o,s),emitsOptions:Su(o,s),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:o.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return c.ctx={_:c},c.root=l?l.root:c,c.emit=Mm.bind(null,c),e.ce&&e.ce(c),c}let lt=null;const Kt=()=>lt||tt;let Ua,ro;{const e=jr(),l=(a,o)=>{let s;return(s=e[a])||(s=e[a]=[]),s.push(o),c=>{s.length>1?s.forEach(m=>m(c)):s[0](c)}};Ua=l("__VUE_INSTANCE_SETTERS__",a=>lt=a),ro=l("__VUE_SSR_SETTERS__",a=>_a=a)}const Ui=e=>{const l=lt;return Ua(e),e.scope.on(),()=>{e.scope.off(),Ua(l)}},uo=()=>{lt&&lt.scope.off(),Ua(null)};function rc(e){return e.vnode.shapeFlag&4}let _a=!1;function uc(e,l=!1){l&&ro(l);const{props:a,children:o}=e.vnode,s=rc(e);$p(e,a,s,l),Ip(e,o);const c=s?jp(e,l):void 0;return l&&ro(!1),c}function jp(e,l){const a=e.type;e.accessCache=Object.create(null),e.proxy=Oo(new Proxy(e.ctx,io));const{setup:o}=a;if(o){const s=e.setupContext=o.length>1?dc(e):null,c=Ui(e);Wi();const m=ii(o,e,0,[e.props,s]);if(Ki(),c(),Eo(m)){if(m.then(uo,uo),l)return m.then(f=>{co(e,f,l)}).catch(f=>{Xi(f,e,0)});e.asyncDep=m}else co(e,m,l)}else cc(e,l)}function co(e,l,a){we(l)?e.type.__ssrInlineRender?e.ssrRender=l:e.render=l:je(l)&&(e.setupState=jo(l)),cc(e,a)}let Ya,mo;function Up(e){Ya=e,mo=l=>{l.render._rc&&(l.withProxy=new Proxy(l.ctx,sp))}}const Yp=()=>!Ya;function cc(e,l,a){const o=e.type;if(!e.render){if(!l&&Ya&&!o.render){const s=o.template||is(e).template;if(s){const{isCustomElement:c,compilerOptions:m}=e.appContext.config,{delimiters:f,compilerOptions:u}=o,d=Ke(Ke({isCustomElement:c,delimiters:f},m),u);o.render=Ya(s,d)}}e.render=o.render||vt,mo&&mo(e)}{const s=Ui(e);Wi();try{Sp(e)}finally{Ki(),s()}}}function Jp(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(l,a){return wt(e,"get","$attrs"),l[a]}}))}function dc(e){const l=a=>{e.exposed=a||{}};return{get attrs(){return Jp(e)},slots:e.slots,emit:e.emit,expose:l}}function vn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(jo(Oo(e.exposed)),{get(l,a){if(a in l)return l[a];if(a in Yl)return Yl[a](e)},has(l,a){return a in l||a in Yl}}))}function po(e,l=!0){return we(e)?e.displayName||e.name:e.name||l&&e.__name}function Wp(e){return we(e)&&"__vccOpts"in e}const M=(e,l)=>ym(e,l,_a);function Kp(e,l,a=qe){const o=Kt(),s=_t(l),c=Tt(l),m=fu((u,d)=>{let g;return Lu(()=>{const p=e[l];qt(g,p)&&(g=p,d())}),{get(){return u(),a.get?a.get(g):g},set(p){const _=o.vnode.props;!(_&&(l in _||s in _||c in _)&&(`onUpdate:${l}`in _||`onUpdate:${s}`in _||`onUpdate:${c}`in _))&&qt(p,g)&&(g=p,d()),o.emit(`update:${l}`,a.set?a.set(p):p)}}}),f=l==="modelValue"?"modelModifiers":`${l}Modifiers`;return m[Symbol.iterator]=()=>{let u=0;return{next(){return u<2?{value:u++?e[f]||{}:m,done:!1}:{done:!0}}}},m}function X(e,l,a){const o=arguments.length;return o===2?je(l)&&!ge(l)?Ct(l)?t(e,null,[l]):t(e,l):t(e,null,l):(o>3?a=Array.prototype.slice.call(arguments,2):o===3&&Ct(a)&&(a=[a]),t(e,l,a))}function Xp(){}function Qp(e,l,a,o){const s=a[o];if(s&&mc(s,e))return s;const c=l();return c.memo=e.slice(),a[o]=c}function mc(e,l){const a=e.memo;if(a.length!=l.length)return!1;for(let o=0;o<a.length;o++)if(qt(a[o],l[o]))return!1;return ji>0&&St&&St.push(e),!0}const pc="3.4.15",Zp=vt,ef=Rm,tf=al,lf=vu,af={createComponentInstance:sc,setupComponent:uc,renderComponentRoot:za,setCurrentRenderingInstance:na,isVNode:Ct,normalizeVNode:Bt},nf=af,of=null,sf=null,rf=null;/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const uf="http://www.w3.org/2000/svg",cf="http://www.w3.org/1998/Math/MathML",_i=typeof document<"u"?document:null,Qs=_i&&_i.createElement("template"),df={insert:(e,l,a)=>{l.insertBefore(e,a||null)},remove:e=>{const l=e.parentNode;l&&l.removeChild(e)},createElement:(e,l,a,o)=>{const s=l==="svg"?_i.createElementNS(uf,e):l==="mathml"?_i.createElementNS(cf,e):_i.createElement(e,a?{is:a}:void 0);return e==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:e=>_i.createTextNode(e),createComment:e=>_i.createComment(e),setText:(e,l)=>{e.nodeValue=l},setElementText:(e,l)=>{e.textContent=l},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>_i.querySelector(e),setScopeId(e,l){e.setAttribute(l,"")},insertStaticContent(e,l,a,o,s,c){const m=a?a.previousSibling:l.lastChild;if(s&&(s===c||s.nextSibling))for(;l.insertBefore(s.cloneNode(!0),a),!(s===c||!(s=s.nextSibling)););else{Qs.innerHTML=o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e;const f=Qs.content;if(o==="svg"||o==="mathml"){const u=f.firstChild;for(;u.firstChild;)f.appendChild(u.firstChild);f.removeChild(u)}l.insertBefore(f,a)}return[m?m.nextSibling:l.firstChild,a?a.previousSibling:l.lastChild]}},ci="transition",zl="animation",Sl=Symbol("_vtc"),Sn=(e,{slots:l})=>X(Du,gc(e),l);Sn.displayName="Transition";const fc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},mf=Sn.props=Ke({},Zo,fc),$i=(e,l=[])=>{ge(e)?e.forEach(a=>a(...l)):e&&e(...l)},Zs=e=>e?ge(e)?e.some(l=>l.length>1):e.length>1:!1;function gc(e){const l={};for(const J in e)J in fc||(l[J]=e[J]);if(e.css===!1)return l;const{name:a="v",type:o,duration:s,enterFromClass:c=`${a}-enter-from`,enterActiveClass:m=`${a}-enter-active`,enterToClass:f=`${a}-enter-to`,appearFromClass:u=c,appearActiveClass:d=m,appearToClass:g=f,leaveFromClass:p=`${a}-leave-from`,leaveActiveClass:_=`${a}-leave-active`,leaveToClass:w=`${a}-leave-to`}=e,S=pf(s),A=S&&S[0],T=S&&S[1],{onBeforeEnter:I,onEnter:h,onEnterCancelled:b,onLeave:C,onLeaveCancelled:$,onBeforeAppear:E=I,onAppear:F=h,onAppearCancelled:H=b}=l,P=(J,fe,Be)=>{pi(J,fe?g:f),pi(J,fe?d:m),Be&&Be()},j=(J,fe)=>{J._isLeaving=!1,pi(J,p),pi(J,w),pi(J,_),fe&&fe()},Q=J=>(fe,Be)=>{const U=J?F:h,K=()=>P(fe,J,Be);$i(U,[fe,K]),er(()=>{pi(fe,J?u:c),Qt(fe,J?g:f),Zs(U)||tr(fe,o,A,K)})};return Ke(l,{onBeforeEnter(J){$i(I,[J]),Qt(J,c),Qt(J,m)},onBeforeAppear(J){$i(E,[J]),Qt(J,u),Qt(J,d)},onEnter:Q(!1),onAppear:Q(!0),onLeave(J,fe){J._isLeaving=!0;const Be=()=>j(J,fe);Qt(J,p),_c(),Qt(J,_),er(()=>{J._isLeaving&&(pi(J,p),Qt(J,w),Zs(C)||tr(J,o,T,Be))}),$i(C,[J,Be])},onEnterCancelled(J){P(J,!1),$i(b,[J])},onAppearCancelled(J){P(J,!0),$i(H,[J])},onLeaveCancelled(J){j(J),$i($,[J])}})}function pf(e){if(e==null)return null;if(je(e))return[En(e.enter),En(e.leave)];{const l=En(e);return[l,l]}}function En(e){return Ha(e)}function Qt(e,l){l.split(/\s+/).forEach(a=>a&&e.classList.add(a)),(e[Sl]||(e[Sl]=new Set)).add(l)}function pi(e,l){l.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const a=e[Sl];a&&(a.delete(l),a.size||(e[Sl]=void 0))}function er(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ff=0;function tr(e,l,a,o){const s=e._endId=++ff,c=()=>{s===e._endId&&o()};if(a)return setTimeout(c,a);const{type:m,timeout:f,propCount:u}=hc(e,l);if(!m)return o();const d=m+"end";let g=0;const p=()=>{e.removeEventListener(d,_),c()},_=w=>{w.target===e&&++g>=u&&p()};setTimeout(()=>{g<u&&p()},f+1),e.addEventListener(d,_)}function hc(e,l){const a=window.getComputedStyle(e),o=S=>(a[S]||"").split(", "),s=o(`${ci}Delay`),c=o(`${ci}Duration`),m=ir(s,c),f=o(`${zl}Delay`),u=o(`${zl}Duration`),d=ir(f,u);let g=null,p=0,_=0;l===ci?m>0&&(g=ci,p=m,_=c.length):l===zl?d>0&&(g=zl,p=d,_=u.length):(p=Math.max(m,d),g=p>0?m>d?ci:zl:null,_=g?g===ci?c.length:u.length:0);const w=g===ci&&/\b(transform|all)(,|$)/.test(o(`${ci}Property`).toString());return{type:g,timeout:p,propCount:_,hasTransform:w}}function ir(e,l){for(;e.length<l.length;)e=e.concat(e);return Math.max(...l.map((a,o)=>lr(a)+lr(e[o])))}function lr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function _c(){return document.body.offsetHeight}function gf(e,l,a){const o=e[Sl];o&&(l=(l?[l,...o]:[...o]).join(" ")),l==null?e.removeAttribute("class"):a?e.setAttribute("class",l):e.className=l}const ss=Symbol("_vod"),bc={beforeMount(e,{value:l},{transition:a}){e[ss]=e.style.display==="none"?"":e.style.display,a&&l?a.beforeEnter(e):Pl(e,l)},mounted(e,{value:l},{transition:a}){a&&l&&a.enter(e)},updated(e,{value:l,oldValue:a},{transition:o}){!l!=!a&&(o?l?(o.beforeEnter(e),Pl(e,!0),o.enter(e)):o.leave(e,()=>{Pl(e,!1)}):Pl(e,l))},beforeUnmount(e,{value:l}){Pl(e,l)}};function Pl(e,l){e.style.display=l?e[ss]:"none"}function hf(){bc.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const vc=Symbol("");function _f(e){const l=Kt();if(!l)return;const a=l.ut=(s=e(l.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${l.uid}"]`)).forEach(c=>go(c,s))},o=()=>{const s=e(l.proxy);fo(l.subTree,s),a(s)};Tu(o),Ai(()=>{const s=new MutationObserver(o);s.observe(l.subTree.el.parentNode,{childList:!0}),Qi(()=>s.disconnect())})}function fo(e,l){if(e.shapeFlag&128){const a=e.suspense;e=a.activeBranch,a.pendingBranch&&!a.isHydrating&&a.effects.push(()=>{fo(a.activeBranch,l)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)go(e.el,l);else if(e.type===Ce)e.children.forEach(a=>fo(a,l));else if(e.type===Mi){let{el:a,anchor:o}=e;for(;a&&(go(a,l),a!==o);)a=a.nextSibling}}function go(e,l){if(e.nodeType===1){const a=e.style;let o="";for(const s in l)a.setProperty(`--${s}`,l[s]),o+=`--${s}: ${l[s]};`;a[vc]=o}}function bf(e,l,a){const o=e.style,s=o.display,c=Xe(a);if(a&&!c){if(l&&!Xe(l))for(const m in l)a[m]==null&&ho(o,m,"");for(const m in a)ho(o,m,a[m])}else if(c){if(l!==a){const m=o[vc];m&&(a+=";"+m),o.cssText=a}}else l&&e.removeAttribute("style");ss in e&&(o.display=s)}const ar=/\s*!important$/;function ho(e,l,a){if(ge(a))a.forEach(o=>ho(e,l,o));else if(a==null&&(a=""),l.startsWith("--"))e.setProperty(l,a);else{const o=vf(e,l);ar.test(a)?e.setProperty(Tt(o),a.replace(ar,""),"important"):e[o]=a}}const nr=["Webkit","Moz","ms"],Rn={};function vf(e,l){const a=Rn[l];if(a)return a;let o=_t(l);if(o!=="filter"&&o in e)return Rn[l]=o;o=pa(o);for(let s=0;s<nr.length;s++){const c=nr[s]+o;if(c in e)return Rn[l]=c}return l}const or="http://www.w3.org/1999/xlink";function Sf(e,l,a,o,s){if(o&&l.startsWith("xlink:"))a==null?e.removeAttributeNS(or,l.slice(6,l.length)):e.setAttributeNS(or,l,a);else{const c=Wd(l);a==null||c&&!Ur(a)?e.removeAttribute(l):e.setAttribute(l,c?"":a)}}function yf(e,l,a,o,s,c,m){if(l==="innerHTML"||l==="textContent"){o&&m(o,s,c),e[l]=a??"";return}const f=e.tagName;if(l==="value"&&f!=="PROGRESS"&&!f.includes("-")){e._value=a;const d=f==="OPTION"?e.getAttribute("value"):e.value,g=a??"";d!==g&&(e.value=g),a==null&&e.removeAttribute(l);return}let u=!1;if(a===""||a==null){const d=typeof e[l];d==="boolean"?a=Ur(a):a==null&&d==="string"?(a="",u=!0):d==="number"&&(a=0,u=!0)}try{e[l]=a}catch{}u&&e.removeAttribute(l)}function ei(e,l,a,o){e.addEventListener(l,a,o)}function wf(e,l,a,o){e.removeEventListener(l,a,o)}const sr=Symbol("_vei");function Cf(e,l,a,o,s=null){const c=e[sr]||(e[sr]={}),m=c[l];if(o&&m)m.value=o;else{const[f,u]=Af(l);if(o){const d=c[l]=Bf(o,s);ei(e,f,d,u)}else m&&(wf(e,f,m,u),c[l]=void 0)}}const rr=/(?:Once|Passive|Capture)$/;function Af(e){let l;if(rr.test(e)){l={};let o;for(;o=e.match(rr);)e=e.slice(0,e.length-o[0].length),l[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Tt(e.slice(2)),l]}let zn=0;const xf=Promise.resolve(),kf=()=>zn||(xf.then(()=>zn=0),zn=Date.now());function Bf(e,l){const a=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=a.attached)return;Dt($f(o,a.value),l,5,[o])};return a.value=e,a.attached=kf(),a}function $f(e,l){if(ge(l)){const a=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{a.call(e),e._stopped=!0},l.map(o=>s=>!s._stopped&&o&&o(s))}else return l}const ur=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Tf=(e,l,a,o,s,c,m,f,u)=>{const d=s==="svg";l==="class"?gf(e,o,d):l==="style"?bf(e,a,o):ma(l)?Io(l)||Cf(e,l,a,o,m):(l[0]==="."?(l=l.slice(1),!0):l[0]==="^"?(l=l.slice(1),!1):Lf(e,l,o,d))?yf(e,l,o,c,m,f,u):(l==="true-value"?e._trueValue=o:l==="false-value"&&(e._falseValue=o),Sf(e,l,o,d))};function Lf(e,l,a,o){if(o)return!!(l==="innerHTML"||l==="textContent"||l in e&&ur(l)&&we(a));if(l==="spellcheck"||l==="draggable"||l==="translate"||l==="form"||l==="list"&&e.tagName==="INPUT"||l==="type"&&e.tagName==="TEXTAREA")return!1;if(l==="width"||l==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ur(l)&&Xe(a)?!1:l in e}/*! #__NO_SIDE_EFFECTS__ */function Sc(e,l){const a=V(e);class o extends yn{constructor(c){super(a,c,l)}}return o.def=a,o}/*! #__NO_SIDE_EFFECTS__ */const If=e=>Sc(e,Dc),Df=typeof HTMLElement<"u"?HTMLElement:class{};class yn extends Df{constructor(l,a={},o){super(),this._def=l,this._props=a,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&o?o(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),Bl(()=>{this._connected||(Ka(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let o=0;o<this.attributes.length;o++)this._setAttr(this.attributes[o].name);this._ob=new MutationObserver(o=>{for(const s of o)this._setAttr(s.attributeName)}),this._ob.observe(this,{attributes:!0});const l=(o,s=!1)=>{const{props:c,styles:m}=o;let f;if(c&&!ge(c))for(const u in c){const d=c[u];(d===Number||d&&d.type===Number)&&(u in this._props&&(this._props[u]=Ha(this._props[u])),(f||(f=Object.create(null)))[_t(u)]=!0)}this._numberProps=f,s&&this._resolveProps(o),this._applyStyles(m),this._update()},a=this._def.__asyncLoader;a?a().then(o=>l(o,!0)):l(this._def)}_resolveProps(l){const{props:a}=l,o=ge(a)?a:Object.keys(a||{});for(const s of Object.keys(this))s[0]!=="_"&&o.includes(s)&&this._setProp(s,this[s],!0,!1);for(const s of o.map(_t))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(c){this._setProp(s,c)}})}_setAttr(l){let a=this.getAttribute(l);const o=_t(l);this._numberProps&&this._numberProps[o]&&(a=Ha(a)),this._setProp(o,a,!1)}_getProp(l){return this._props[l]}_setProp(l,a,o=!0,s=!0){a!==this._props[l]&&(this._props[l]=a,s&&this._instance&&this._update(),o&&(a===!0?this.setAttribute(Tt(l),""):typeof a=="string"||typeof a=="number"?this.setAttribute(Tt(l),a+""):a||this.removeAttribute(Tt(l))))}_update(){Ka(this._createVNode(),this.shadowRoot)}_createVNode(){const l=t(this._def,Ke({},this._props));return this._instance||(l.ce=a=>{this._instance=a,a.isCE=!0;const o=(c,m)=>{this.dispatchEvent(new CustomEvent(c,{detail:m}))};a.emit=(c,...m)=>{o(c,m),Tt(c)!==c&&o(Tt(c),m)};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof yn){a.parent=s._instance,a.provides=s._instance.provides;break}}),l}_applyStyles(l){l&&l.forEach(a=>{const o=document.createElement("style");o.textContent=a,this.shadowRoot.appendChild(o)})}}function Ef(e="$style"){{const l=Kt();if(!l)return qe;const a=l.type.__cssModules;if(!a)return qe;const o=a[e];return o||qe}}const yc=new WeakMap,wc=new WeakMap,Ja=Symbol("_moveCb"),cr=Symbol("_enterCb"),Cc={name:"TransitionGroup",props:Ke({},mf,{tag:String,moveClass:String}),setup(e,{slots:l}){const a=Kt(),o=Qo();let s,c;return gn(()=>{if(!s.length)return;const m=e.moveClass||`${e.name||"v"}-move`;if(!Ff(s[0].el,a.vnode.el,m))return;s.forEach(zf),s.forEach(Pf);const f=s.filter(Vf);_c(),f.forEach(u=>{const d=u.el,g=d.style;Qt(d,m),g.transform=g.webkitTransform=g.transitionDuration="";const p=d[Ja]=_=>{_&&_.target!==d||(!_||/transform$/.test(_.propertyName))&&(d.removeEventListener("transitionend",p),d[Ja]=null,pi(d,m))};d.addEventListener("transitionend",p)})}),()=>{const m=Ee(e),f=gc(m);let u=m.tag||Ce;s=c,c=l.default?pn(l.default()):[];for(let d=0;d<c.length;d++){const g=c[d];g.key!=null&&Oi(g,vl(g,f,o,a))}if(s)for(let d=0;d<s.length;d++){const g=s[d];Oi(g,vl(g,f,o,a)),yc.set(g,g.el.getBoundingClientRect())}return t(u,null,c)}}},Rf=e=>delete e.mode;Cc.props;const Ac=Cc;function zf(e){const l=e.el;l[Ja]&&l[Ja](),l[cr]&&l[cr]()}function Pf(e){wc.set(e,e.el.getBoundingClientRect())}function Vf(e){const l=yc.get(e),a=wc.get(e),o=l.left-a.left,s=l.top-a.top;if(o||s){const c=e.el.style;return c.transform=c.webkitTransform=`translate(${o}px,${s}px)`,c.transitionDuration="0s",e}}function Ff(e,l,a){const o=e.cloneNode(),s=e[Sl];s&&s.forEach(f=>{f.split(/\s+/).forEach(u=>u&&o.classList.remove(u))}),a.split(/\s+/).forEach(f=>f&&o.classList.add(f)),o.style.display="none";const c=l.nodeType===1?l:l.parentNode;c.appendChild(o);const{hasTransform:m}=hc(o);return c.removeChild(o),m}const Ci=e=>{const l=e.props["onUpdate:modelValue"]||!1;return ge(l)?a=>ul(l,a):l};function Mf(e){e.target.composing=!0}function dr(e){const l=e.target;l.composing&&(l.composing=!1,l.dispatchEvent(new Event("input")))}const Mt=Symbol("_assign"),Wa={created(e,{modifiers:{lazy:l,trim:a,number:o}},s){e[Mt]=Ci(s);const c=o||s.props&&s.props.type==="number";ei(e,l?"change":"input",m=>{if(m.target.composing)return;let f=e.value;a&&(f=f.trim()),c&&(f=ea(f)),e[Mt](f)}),a&&ei(e,"change",()=>{e.value=e.value.trim()}),l||(ei(e,"compositionstart",Mf),ei(e,"compositionend",dr),ei(e,"change",dr))},mounted(e,{value:l}){e.value=l??""},beforeUpdate(e,{value:l,modifiers:{lazy:a,trim:o,number:s}},c){if(e[Mt]=Ci(c),e.composing)return;const m=s||e.type==="number"?ea(e.value):e.value,f=l??"";m!==f&&(document.activeElement===e&&e.type!=="range"&&(a||o&&e.value.trim()===f)||(e.value=f))}},rs={deep:!0,created(e,l,a){e[Mt]=Ci(a),ei(e,"change",()=>{const o=e._modelValue,s=yl(e),c=e.checked,m=e[Mt];if(ge(o)){const f=nn(o,s),u=f!==-1;if(c&&!u)m(o.concat(s));else if(!c&&u){const d=[...o];d.splice(f,1),m(d)}}else if(Ji(o)){const f=new Set(o);c?f.add(s):f.delete(s),m(f)}else m(kc(e,c))})},mounted:mr,beforeUpdate(e,l,a){e[Mt]=Ci(a),mr(e,l,a)}};function mr(e,{value:l,oldValue:a},o){e._modelValue=l,ge(l)?e.checked=nn(l,o.props.value)>-1:Ji(l)?e.checked=l.has(o.props.value):l!==a&&(e.checked=li(l,kc(e,!0)))}const us={created(e,{value:l},a){e.checked=li(l,a.props.value),e[Mt]=Ci(a),ei(e,"change",()=>{e[Mt](yl(e))})},beforeUpdate(e,{value:l,oldValue:a},o){e[Mt]=Ci(o),l!==a&&(e.checked=li(l,o.props.value))}},xc={deep:!0,created(e,{value:l,modifiers:{number:a}},o){const s=Ji(l);ei(e,"change",()=>{const c=Array.prototype.filter.call(e.options,m=>m.selected).map(m=>a?ea(yl(m)):yl(m));e[Mt](e.multiple?s?new Set(c):c:c[0]),e._assigning=!0,Bl(()=>{e._assigning=!1})}),e[Mt]=Ci(o)},mounted(e,{value:l,oldValue:a,modifiers:{number:o}}){pr(e,l,a,o)},beforeUpdate(e,l,a){e[Mt]=Ci(a)},updated(e,{value:l,oldValue:a,modifiers:{number:o}}){e._assigning||pr(e,l,a,o)}};function pr(e,l,a,o){const s=e.multiple,c=ge(l);if(!(s&&!c&&!Ji(l))&&!(c&&li(l,a))){for(let m=0,f=e.options.length;m<f;m++){const u=e.options[m],d=yl(u);if(s)if(c){const g=typeof d;g==="string"||g==="number"?u.selected=l.includes(o?ea(d):d):u.selected=nn(l,d)>-1}else u.selected=l.has(d);else if(li(yl(u),l)){e.selectedIndex!==m&&(e.selectedIndex=m);return}}!s&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function yl(e){return"_value"in e?e._value:e.value}function kc(e,l){const a=l?"_trueValue":"_falseValue";return a in e?e[a]:l}const Bc={created(e,l,a){La(e,l,a,null,"created")},mounted(e,l,a){La(e,l,a,null,"mounted")},beforeUpdate(e,l,a,o){La(e,l,a,o,"beforeUpdate")},updated(e,l,a,o){La(e,l,a,o,"updated")}};function $c(e,l){switch(e){case"SELECT":return xc;case"TEXTAREA":return Wa;default:switch(l){case"checkbox":return rs;case"radio":return us;default:return Wa}}}function La(e,l,a,o,s){const m=$c(e.tagName,a.props&&a.props.type)[s];m&&m(e,l,a,o)}function Hf(){Wa.getSSRProps=({value:e})=>({value:e}),us.getSSRProps=({value:e},l)=>{if(l.props&&li(l.props.value,e))return{checked:!0}},rs.getSSRProps=({value:e},l)=>{if(ge(e)){if(l.props&&nn(e,l.props.value)>-1)return{checked:!0}}else if(Ji(e)){if(l.props&&e.has(l.props.value))return{checked:!0}}else if(e)return{checked:!0}},Bc.getSSRProps=(e,l)=>{if(typeof l.type!="string")return;const a=$c(l.type.toUpperCase(),l.props&&l.props.type);if(a.getSSRProps)return a.getSSRProps(e,l)}}const Nf=["ctrl","shift","alt","meta"],Of={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,l)=>Nf.some(a=>e[`${a}Key`]&&!l.includes(a))},Et=(e,l)=>{const a=e._withMods||(e._withMods={}),o=l.join(".");return a[o]||(a[o]=(s,...c)=>{for(let m=0;m<l.length;m++){const f=Of[l[m]];if(f&&f(s,l))return}return e(s,...c)})},qf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Gf=(e,l)=>{const a=e._withKeys||(e._withKeys={}),o=l.join(".");return a[o]||(a[o]=s=>{if(!("key"in s))return;const c=Tt(s.key);if(l.some(m=>m===c||qf[m]===c))return e(s)})},Tc=Ke({patchProp:Tf},df);let Kl,fr=!1;function Lc(){return Kl||(Kl=Xu(Tc))}function Ic(){return Kl=fr?Kl:Qu(Tc),fr=!0,Kl}const Ka=(...e)=>{Lc().render(...e)},Dc=(...e)=>{Ic().hydrate(...e)},Ec=(...e)=>{const l=Lc().createApp(...e),{mount:a}=l;return l.mount=o=>{const s=zc(o);if(!s)return;const c=l._component;!we(c)&&!c.render&&!c.template&&(c.template=s.innerHTML),s.innerHTML="";const m=a(s,!1,Rc(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),m},l},jf=(...e)=>{const l=Ic().createApp(...e),{mount:a}=l;return l.mount=o=>{const s=zc(o);if(s)return a(s,!0,Rc(s))},l};function Rc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function zc(e){return Xe(e)?document.querySelector(e):e}let gr=!1;const Uf=()=>{gr||(gr=!0,Hf(),hf())};/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Yf=()=>{},Jf=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:Du,BaseTransitionPropsValidators:Zo,Comment:ft,DeprecationTypes:rf,EffectScope:zo,ErrorCodes:Em,ErrorTypeStrings:ef,Fragment:Ce,KeepAlive:lp,ReactiveEffect:bl,Static:Mi,Suspense:Ym,Teleport:_n,Text:Gi,TrackOpTypes:Lm,Transition:Sn,TransitionGroup:Ac,TriggerOpTypes:Im,VueElement:yn,assertNumber:Dm,callWithAsyncErrorHandling:Dt,callWithErrorHandling:ii,camelize:_t,capitalize:pa,cloneVNode:Wt,compatUtils:sf,compile:Yf,computed:M,createApp:Ec,createBlock:B,createCommentVNode:ns,createElementBlock:ve,createElementVNode:k,createHydrationRenderer:Qu,createPropsRestProxy:bp,createRenderer:Xu,createSSRApp:jf,createSlots:np,createStaticVNode:Op,createTextVNode:n,createVNode:t,customRef:fu,defineAsyncComponent:tp,defineComponent:V,defineCustomElement:Sc,defineEmits:up,defineExpose:cp,defineModel:pp,defineOptions:dp,defineProps:rp,defineSSRCustomElement:If,defineSlots:mp,devtools:tf,effect:Zd,effectScope:Xd,getCurrentInstance:Kt,getCurrentScope:Po,getTransitionRawChildren:pn,guardReactiveProps:oc,h:X,handleError:Xi,hasInjectionContext:Bp,hydrate:Dc,initCustomFormatter:Xp,initDirectivesForSSR:Uf,inject:Fe,isMemoSame:mc,isProxy:No,isReactive:Vi,isReadonly:Ni,isRef:ct,isRuntimeOnly:Yp,isShallow:ta,isVNode:Ct,markRaw:Oo,mergeDefaults:hp,mergeModels:_p,mergeProps:Zi,nextTick:Bl,normalizeClass:fa,normalizeProps:Yd,normalizeStyle:kl,onActivated:es,onBeforeMount:zu,onBeforeUnmount:hn,onBeforeUpdate:Pu,onDeactivated:ts,onErrorCaptured:Hu,onMounted:Ai,onRenderTracked:Mu,onRenderTriggered:Fu,onScopeDispose:Wr,onServerPrefetch:Vu,onUnmounted:Qi,onUpdated:gn,openBlock:y,popScopeId:wu,provide:ut,proxyRefs:jo,pushScopeId:yu,queuePostFlushCb:Oa,reactive:ni,readonly:Ho,ref:G,registerRuntimeCompiler:Up,render:Ka,renderList:Qe,renderSlot:qi,resolveComponent:x,resolveDirective:mn,resolveDynamicComponent:Au,resolveFilter:of,resolveTransitionHooks:vl,setBlockTracking:so,setDevtoolsHook:lf,setTransitionHooks:Oi,shallowReactive:cu,shallowReadonly:Sm,shallowRef:mu,ssrContextKey:Bu,ssrUtils:nf,stop:em,toDisplayString:$e,toHandlerKey:Ul,toHandlers:op,toRaw:Ee,toRef:Qn,toRefs:Bm,toValue:Am,transformVNodeArgs:Hp,triggerRef:Cm,unref:r,useAttrs:Ou,useCssModule:Ef,useCssVars:_f,useModel:Kp,useSSRContext:$u,useSlots:gp,useTransitionState:Qo,vModelCheckbox:rs,vModelDynamic:Bc,vModelRadio:us,vModelSelect:xc,vModelText:Wa,vShow:bc,version:pc,warn:Zp,watch:pt,watchEffect:Xo,watchPostEffect:Tu,watchSyncEffect:Lu,withAsyncContext:vp,withCtx:i,withDefaults:fp,withDirectives:Si,withKeys:Gf,withMemo:Qp,withModifiers:Et,withScopeId:Hm},Symbol.toStringTag,{value:"Module"})),Wf=V({name:"App"}),Me=(e,l)=>{const a=e.__vccOpts||e;for(const[o,s]of l)a[o]=s;return a};function Kf(e,l,a,o,s,c){const m=x("router-view");return y(),B(m)}const Xf=Me(Wf,[["render",Kf]]),Qf="modulepreload",Zf=function(e){return"/vue-fomantic-ui/"+e},hr={},di=function(l,a,o){let s=Promise.resolve();if(a&&a.length>0){const c=document.getElementsByTagName("link");s=Promise.all(a.map(m=>{if(m=Zf(m),m in hr)return;hr[m]=!0;const f=m.endsWith(".css"),u=f?'[rel="stylesheet"]':"";if(!!o)for(let p=c.length-1;p>=0;p--){const _=c[p];if(_.href===m&&(!f||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${u}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":Qf,f||(g.as="script",g.crossOrigin=""),g.href=m,document.head.appendChild(g),f)return new Promise((p,_)=>{g.addEventListener("load",p),g.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${m}`)))})}))}return s.then(()=>l()).catch(c=>{const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=c,window.dispatchEvent(m),!m.defaultPrevented)throw c})};/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Pc=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",$l=e=>Pc?Symbol(e):"_vr_"+e,Vc=$l("rvlm"),_r=$l("rvd"),wn=$l("r"),cs=$l("rl"),_o=$l("rvl"),nl=typeof window<"u";function eg(e){return e.__esModule||Pc&&e[Symbol.toStringTag]==="Module"}const Ye=Object.assign;function Pn(e,l){const a={};for(const o in l){const s=l[o];a[o]=Array.isArray(s)?s.map(e):e(s)}return a}const Xl=()=>{},tg=/\/$/,ig=e=>e.replace(tg,"");function Vn(e,l,a="/"){let o,s={},c="",m="";const f=l.indexOf("?"),u=l.indexOf("#",f>-1?f:0);return f>-1&&(o=l.slice(0,f),c=l.slice(f+1,u>-1?u:l.length),s=e(c)),u>-1&&(o=o||l.slice(0,u),m=l.slice(u,l.length)),o=og(o??l,a),{fullPath:o+(c&&"?")+c+m,path:o,query:s,hash:m}}function lg(e,l){const a=l.query?e(l.query):"";return l.path+(a&&"?")+a+(l.hash||"")}function br(e,l){return!l||!e.toLowerCase().startsWith(l.toLowerCase())?e:e.slice(l.length)||"/"}function ag(e,l,a){const o=l.matched.length-1,s=a.matched.length-1;return o>-1&&o===s&&wl(l.matched[o],a.matched[s])&&Fc(l.params,a.params)&&e(l.query)===e(a.query)&&l.hash===a.hash}function wl(e,l){return(e.aliasOf||e)===(l.aliasOf||l)}function Fc(e,l){if(Object.keys(e).length!==Object.keys(l).length)return!1;for(const a in e)if(!ng(e[a],l[a]))return!1;return!0}function ng(e,l){return Array.isArray(e)?vr(e,l):Array.isArray(l)?vr(l,e):e===l}function vr(e,l){return Array.isArray(l)?e.length===l.length&&e.every((a,o)=>a===l[o]):e.length===1&&e[0]===l}function og(e,l){if(e.startsWith("/"))return e;if(!e)return l;const a=l.split("/"),o=e.split("/");let s=a.length-1,c,m;for(c=0;c<o.length;c++)if(m=o[c],!(s===1||m==="."))if(m==="..")s--;else break;return a.slice(0,s).join("/")+"/"+o.slice(c-(c===o.length?1:0)).join("/")}var ua;(function(e){e.pop="pop",e.push="push"})(ua||(ua={}));var Ql;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ql||(Ql={}));function sg(e){if(!e)if(nl){const l=document.querySelector("base");e=l&&l.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ig(e)}const rg=/^[^#]+#/;function ug(e,l){return e.replace(rg,"#")+l}function cg(e,l){const a=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:l.behavior,left:o.left-a.left-(l.left||0),top:o.top-a.top-(l.top||0)}}const Cn=()=>({left:window.pageXOffset,top:window.pageYOffset});function dg(e){let l;if("el"in e){const a=e.el,o=typeof a=="string"&&a.startsWith("#"),s=typeof a=="string"?o?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!s)return;l=cg(s,e)}else l=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(l):window.scrollTo(l.left!=null?l.left:window.pageXOffset,l.top!=null?l.top:window.pageYOffset)}function Sr(e,l){return(history.state?history.state.position-l:-1)+e}const bo=new Map;function mg(e,l){bo.set(e,l)}function pg(e){const l=bo.get(e);return bo.delete(e),l}let fg=()=>location.protocol+"//"+location.host;function Mc(e,l){const{pathname:a,search:o,hash:s}=l,c=e.indexOf("#");if(c>-1){let f=s.includes(e.slice(c))?e.slice(c).length:1,u=s.slice(f);return u[0]!=="/"&&(u="/"+u),br(u,"")}return br(a,e)+o+s}function gg(e,l,a,o){let s=[],c=[],m=null;const f=({state:_})=>{const w=Mc(e,location),S=a.value,A=l.value;let T=0;if(_){if(a.value=w,l.value=_,m&&m===S){m=null;return}T=A?_.position-A.position:0}else o(w);s.forEach(I=>{I(a.value,S,{delta:T,type:ua.pop,direction:T?T>0?Ql.forward:Ql.back:Ql.unknown})})};function u(){m=a.value}function d(_){s.push(_);const w=()=>{const S=s.indexOf(_);S>-1&&s.splice(S,1)};return c.push(w),w}function g(){const{history:_}=window;_.state&&_.replaceState(Ye({},_.state,{scroll:Cn()}),"")}function p(){for(const _ of c)_();c=[],window.removeEventListener("popstate",f),window.removeEventListener("beforeunload",g)}return window.addEventListener("popstate",f),window.addEventListener("beforeunload",g),{pauseListeners:u,listen:d,destroy:p}}function yr(e,l,a,o=!1,s=!1){return{back:e,current:l,forward:a,replaced:o,position:window.history.length,scroll:s?Cn():null}}function hg(e){const{history:l,location:a}=window,o={value:Mc(e,a)},s={value:l.state};s.value||c(o.value,{back:null,current:o.value,forward:null,position:l.length-1,replaced:!0,scroll:null},!0);function c(u,d,g){const p=e.indexOf("#"),_=p>-1?(a.host&&document.querySelector("base")?e:e.slice(p))+u:fg()+e+u;try{l[g?"replaceState":"pushState"](d,"",_),s.value=d}catch(w){console.error(w),a[g?"replace":"assign"](_)}}function m(u,d){const g=Ye({},l.state,yr(s.value.back,u,s.value.forward,!0),d,{position:s.value.position});c(u,g,!0),o.value=u}function f(u,d){const g=Ye({},s.value,l.state,{forward:u,scroll:Cn()});c(g.current,g,!0);const p=Ye({},yr(o.value,u,null),{position:g.position+1},d);c(u,p,!1),o.value=u}return{location:o,state:s,push:f,replace:m}}function _g(e){e=sg(e);const l=hg(e),a=gg(e,l.state,l.location,l.replace);function o(c,m=!0){m||a.pauseListeners(),history.go(c)}const s=Ye({location:"",base:e,go:o,createHref:ug.bind(null,e)},l,a);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>l.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>l.state.value}),s}function bg(e){return typeof e=="string"||e&&typeof e=="object"}function Hc(e){return typeof e=="string"||typeof e=="symbol"}const mi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Nc=$l("nf");var wr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(wr||(wr={}));function Cl(e,l){return Ye(new Error,{type:e,[Nc]:!0},l)}function Ti(e,l){return e instanceof Error&&Nc in e&&(l==null||!!(e.type&l))}const Cr="[^/]+?",vg={sensitive:!1,strict:!1,start:!0,end:!0},Sg=/[.+*?^${}()[\]/\\]/g;function yg(e,l){const a=Ye({},vg,l),o=[];let s=a.start?"^":"";const c=[];for(const d of e){const g=d.length?[]:[90];a.strict&&!d.length&&(s+="/");for(let p=0;p<d.length;p++){const _=d[p];let w=40+(a.sensitive?.25:0);if(_.type===0)p||(s+="/"),s+=_.value.replace(Sg,"\\$&"),w+=40;else if(_.type===1){const{value:S,repeatable:A,optional:T,regexp:I}=_;c.push({name:S,repeatable:A,optional:T});const h=I||Cr;if(h!==Cr){w+=10;try{new RegExp(`(${h})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${S}" (${h}): `+C.message)}}let b=A?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;p||(b=T&&d.length<2?`(?:/${b})`:"/"+b),T&&(b+="?"),s+=b,w+=20,T&&(w+=-8),A&&(w+=-20),h===".*"&&(w+=-50)}g.push(w)}o.push(g)}if(a.strict&&a.end){const d=o.length-1;o[d][o[d].length-1]+=.7000000000000001}a.strict||(s+="/?"),a.end?s+="$":a.strict&&(s+="(?:/|$)");const m=new RegExp(s,a.sensitive?"":"i");function f(d){const g=d.match(m),p={};if(!g)return null;for(let _=1;_<g.length;_++){const w=g[_]||"",S=c[_-1];p[S.name]=w&&S.repeatable?w.split("/"):w}return p}function u(d){let g="",p=!1;for(const _ of e){(!p||!g.endsWith("/"))&&(g+="/"),p=!1;for(const w of _)if(w.type===0)g+=w.value;else if(w.type===1){const{value:S,repeatable:A,optional:T}=w,I=S in d?d[S]:"";if(Array.isArray(I)&&!A)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const h=Array.isArray(I)?I.join("/"):I;if(!h)if(T)_.length<2&&(g.endsWith("/")?g=g.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);g+=h}}return g}return{re:m,score:o,keys:c,parse:f,stringify:u}}function wg(e,l){let a=0;for(;a<e.length&&a<l.length;){const o=l[a]-e[a];if(o)return o;a++}return e.length<l.length?e.length===1&&e[0]===80?-1:1:e.length>l.length?l.length===1&&l[0]===80?1:-1:0}function Cg(e,l){let a=0;const o=e.score,s=l.score;for(;a<o.length&&a<s.length;){const c=wg(o[a],s[a]);if(c)return c;a++}return s.length-o.length}const Ag={type:0,value:""},xg=/[a-zA-Z0-9_]/;function kg(e){if(!e)return[[]];if(e==="/")return[[Ag]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function l(w){throw new Error(`ERR (${a})/"${d}": ${w}`)}let a=0,o=a;const s=[];let c;function m(){c&&s.push(c),c=[]}let f=0,u,d="",g="";function p(){d&&(a===0?c.push({type:0,value:d}):a===1||a===2||a===3?(c.length>1&&(u==="*"||u==="+")&&l(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),c.push({type:1,value:d,regexp:g,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):l("Invalid state to consume buffer"),d="")}function _(){d+=u}for(;f<e.length;){if(u=e[f++],u==="\\"&&a!==2){o=a,a=4;continue}switch(a){case 0:u==="/"?(d&&p(),m()):u===":"?(p(),a=1):_();break;case 4:_(),a=o;break;case 1:u==="("?a=2:xg.test(u)?_():(p(),a=0,u!=="*"&&u!=="?"&&u!=="+"&&f--);break;case 2:u===")"?g[g.length-1]=="\\"?g=g.slice(0,-1)+u:a=3:g+=u;break;case 3:p(),a=0,u!=="*"&&u!=="?"&&u!=="+"&&f--,g="";break;default:l("Unknown state");break}}return a===2&&l(`Unfinished custom RegExp for param "${d}"`),p(),m(),s}function Bg(e,l,a){const o=yg(kg(e.path),a),s=Ye(o,{record:e,parent:l,children:[],alias:[]});return l&&!s.record.aliasOf==!l.record.aliasOf&&l.children.push(s),s}function $g(e,l){const a=[],o=new Map;l=xr({strict:!1,end:!0,sensitive:!1},l);function s(g){return o.get(g)}function c(g,p,_){const w=!_,S=Lg(g);S.aliasOf=_&&_.record;const A=xr(l,g),T=[S];if("alias"in g){const b=typeof g.alias=="string"?[g.alias]:g.alias;for(const C of b)T.push(Ye({},S,{components:_?_.record.components:S.components,path:C,aliasOf:_?_.record:S}))}let I,h;for(const b of T){const{path:C}=b;if(p&&C[0]!=="/"){const $=p.record.path,E=$[$.length-1]==="/"?"":"/";b.path=p.record.path+(C&&E+C)}if(I=Bg(b,p,A),_?_.alias.push(I):(h=h||I,h!==I&&h.alias.push(I),w&&g.name&&!Ar(I)&&m(g.name)),"children"in S){const $=S.children;for(let E=0;E<$.length;E++)c($[E],I,_&&_.children[E])}_=_||I,u(I)}return h?()=>{m(h)}:Xl}function m(g){if(Hc(g)){const p=o.get(g);p&&(o.delete(g),a.splice(a.indexOf(p),1),p.children.forEach(m),p.alias.forEach(m))}else{const p=a.indexOf(g);p>-1&&(a.splice(p,1),g.record.name&&o.delete(g.record.name),g.children.forEach(m),g.alias.forEach(m))}}function f(){return a}function u(g){let p=0;for(;p<a.length&&Cg(g,a[p])>=0;)p++;a.splice(p,0,g),g.record.name&&!Ar(g)&&o.set(g.record.name,g)}function d(g,p){let _,w={},S,A;if("name"in g&&g.name){if(_=o.get(g.name),!_)throw Cl(1,{location:g});A=_.record.name,w=Ye(Tg(p.params,_.keys.filter(h=>!h.optional).map(h=>h.name)),g.params),S=_.stringify(w)}else if("path"in g)S=g.path,_=a.find(h=>h.re.test(S)),_&&(w=_.parse(S),A=_.record.name);else{if(_=p.name?o.get(p.name):a.find(h=>h.re.test(p.path)),!_)throw Cl(1,{location:g,currentLocation:p});A=_.record.name,w=Ye({},p.params,g.params),S=_.stringify(w)}const T=[];let I=_;for(;I;)T.unshift(I.record),I=I.parent;return{name:A,path:S,params:w,matched:T,meta:Dg(T)}}return e.forEach(g=>c(g)),{addRoute:c,resolve:d,removeRoute:m,getRoutes:f,getRecordMatcher:s}}function Tg(e,l){const a={};for(const o of l)o in e&&(a[o]=e[o]);return a}function Lg(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Ig(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function Ig(e){const l={},a=e.props||!1;if("component"in e)l.default=a;else for(const o in e.components)l[o]=typeof a=="boolean"?a:a[o];return l}function Ar(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Dg(e){return e.reduce((l,a)=>Ye(l,a.meta),{})}function xr(e,l){const a={};for(const o in e)a[o]=o in l?l[o]:e[o];return a}const Oc=/#/g,Eg=/&/g,Rg=/\//g,zg=/=/g,Pg=/\?/g,qc=/\+/g,Vg=/%5B/g,Fg=/%5D/g,Gc=/%5E/g,Mg=/%60/g,jc=/%7B/g,Hg=/%7C/g,Uc=/%7D/g,Ng=/%20/g;function ds(e){return encodeURI(""+e).replace(Hg,"|").replace(Vg,"[").replace(Fg,"]")}function Og(e){return ds(e).replace(jc,"{").replace(Uc,"}").replace(Gc,"^")}function vo(e){return ds(e).replace(qc,"%2B").replace(Ng,"+").replace(Oc,"%23").replace(Eg,"%26").replace(Mg,"`").replace(jc,"{").replace(Uc,"}").replace(Gc,"^")}function qg(e){return vo(e).replace(zg,"%3D")}function Gg(e){return ds(e).replace(Oc,"%23").replace(Pg,"%3F")}function jg(e){return e==null?"":Gg(e).replace(Rg,"%2F")}function Xa(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Ug(e){const l={};if(e===""||e==="?")return l;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<o.length;++s){const c=o[s].replace(qc," "),m=c.indexOf("="),f=Xa(m<0?c:c.slice(0,m)),u=m<0?null:Xa(c.slice(m+1));if(f in l){let d=l[f];Array.isArray(d)||(d=l[f]=[d]),d.push(u)}else l[f]=u}return l}function kr(e){let l="";for(let a in e){const o=e[a];if(a=qg(a),o==null){o!==void 0&&(l+=(l.length?"&":"")+a);continue}(Array.isArray(o)?o.map(c=>c&&vo(c)):[o&&vo(o)]).forEach(c=>{c!==void 0&&(l+=(l.length?"&":"")+a,c!=null&&(l+="="+c))})}return l}function Yg(e){const l={};for(const a in e){const o=e[a];o!==void 0&&(l[a]=Array.isArray(o)?o.map(s=>s==null?null:""+s):o==null?o:""+o)}return l}function Vl(){let e=[];function l(o){return e.push(o),()=>{const s=e.indexOf(o);s>-1&&e.splice(s,1)}}function a(){e=[]}return{add:l,list:()=>e,reset:a}}function Jg(e,l,a){const o=()=>{e[l].delete(a)};Qi(o),ts(o),es(()=>{e[l].add(a)}),e[l].add(a)}function Wg(e){const l=Fe(Vc,{}).value;l&&Jg(l,"updateGuards",e)}function bi(e,l,a,o,s){const c=o&&(o.enterCallbacks[s]=o.enterCallbacks[s]||[]);return()=>new Promise((m,f)=>{const u=p=>{p===!1?f(Cl(4,{from:a,to:l})):p instanceof Error?f(p):bg(p)?f(Cl(2,{from:l,to:p})):(c&&o.enterCallbacks[s]===c&&typeof p=="function"&&c.push(p),m())},d=e.call(o&&o.instances[s],l,a,u);let g=Promise.resolve(d);e.length<3&&(g=g.then(u)),g.catch(p=>f(p))})}function Fn(e,l,a,o){const s=[];for(const c of e)for(const m in c.components){let f=c.components[m];if(!(l!=="beforeRouteEnter"&&!c.instances[m]))if(Kg(f)){const d=(f.__vccOpts||f)[l];d&&s.push(bi(d,a,o,c,m))}else{let u=f();s.push(()=>u.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${m}" at "${c.path}"`));const g=eg(d)?d.default:d;c.components[m]=g;const _=(g.__vccOpts||g)[l];return _&&bi(_,a,o,c,m)()}))}}return s}function Kg(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Br(e){const l=Fe(wn),a=Fe(cs),o=M(()=>l.resolve(r(e.to))),s=M(()=>{const{matched:u}=o.value,{length:d}=u,g=u[d-1],p=a.matched;if(!g||!p.length)return-1;const _=p.findIndex(wl.bind(null,g));if(_>-1)return _;const w=$r(u[d-2]);return d>1&&$r(g)===w&&p[p.length-1].path!==w?p.findIndex(wl.bind(null,u[d-2])):_}),c=M(()=>s.value>-1&&Zg(a.params,o.value.params)),m=M(()=>s.value>-1&&s.value===a.matched.length-1&&Fc(a.params,o.value.params));function f(u={}){return Qg(u)?l[r(e.replace)?"replace":"push"](r(e.to)).catch(Xl):Promise.resolve()}return{route:o,href:M(()=>o.value.href),isActive:c,isExactActive:m,navigate:f}}const Xg=V({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Br,setup(e,{slots:l}){const a=ni(Br(e)),{options:o}=Fe(wn),s=M(()=>({[Tr(e.activeClass,o.linkActiveClass,"router-link-active")]:a.isActive,[Tr(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const c=l.default&&l.default(a);return e.custom?c:X("a",{"aria-current":a.isExactActive?e.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:s.value},c)}}}),ms=Xg;function Qg(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const l=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(l))return}return e.preventDefault&&e.preventDefault(),!0}}function Zg(e,l){for(const a in l){const o=l[a],s=e[a];if(typeof o=="string"){if(o!==s)return!1}else if(!Array.isArray(s)||s.length!==o.length||o.some((c,m)=>c!==s[m]))return!1}return!0}function $r(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Tr=(e,l,a)=>e??l??a,eh=V({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:l,slots:a}){const o=Fe(_o),s=M(()=>e.route||o.value),c=Fe(_r,0),m=M(()=>s.value.matched[c]);ut(_r,c+1),ut(Vc,m),ut(_o,s);const f=G();return pt(()=>[f.value,m.value,e.name],([u,d,g],[p,_,w])=>{d&&(d.instances[g]=u,_&&_!==d&&u&&u===p&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),u&&d&&(!_||!wl(d,_)||!p)&&(d.enterCallbacks[g]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=s.value,d=m.value,g=d&&d.components[e.name],p=e.name;if(!g)return Lr(a.default,{Component:g,route:u});const _=d.props[e.name],w=_?_===!0?u.params:typeof _=="function"?_(u):_:null,A=X(g,Ye({},w,l,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(d.instances[p]=null)},ref:f}));return Lr(a.default,{Component:A,route:u})||A}}});function Lr(e,l){if(!e)return null;const a=e(l);return a.length===1?a[0]:a}const th=eh;function ih(e){const l=$g(e.routes,e),a=e.parseQuery||Ug,o=e.stringifyQuery||kr,s=e.history,c=Vl(),m=Vl(),f=Vl(),u=mu(mi);let d=mi;nl&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const g=Pn.bind(null,W=>""+W),p=Pn.bind(null,jg),_=Pn.bind(null,Xa);function w(W,ue){let re,he;return Hc(W)?(re=l.getRecordMatcher(W),he=ue):he=W,l.addRoute(he,re)}function S(W){const ue=l.getRecordMatcher(W);ue&&l.removeRoute(ue)}function A(){return l.getRoutes().map(W=>W.record)}function T(W){return!!l.getRecordMatcher(W)}function I(W,ue){if(ue=Ye({},ue||u.value),typeof W=="string"){const ke=Vn(a,W,ue.path),L=l.resolve({path:ke.path},ue),R=s.createHref(ke.fullPath);return Ye(ke,L,{params:_(L.params),hash:Xa(ke.hash),redirectedFrom:void 0,href:R})}let re;if("path"in W)re=Ye({},W,{path:Vn(a,W.path,ue.path).path});else{const ke=Ye({},W.params);for(const L in ke)ke[L]==null&&delete ke[L];re=Ye({},W,{params:p(W.params)}),ue.params=p(ue.params)}const he=l.resolve(re,ue),He=W.hash||"";he.params=g(_(he.params));const Ne=lg(o,Ye({},W,{hash:Og(He),path:he.path})),xe=s.createHref(Ne);return Ye({fullPath:Ne,hash:He,query:o===kr?Yg(W.query):W.query||{}},he,{redirectedFrom:void 0,href:xe})}function h(W){return typeof W=="string"?Vn(a,W,u.value.path):Ye({},W)}function b(W,ue){if(d!==W)return Cl(8,{from:ue,to:W})}function C(W){return F(W)}function $(W){return C(Ye(h(W),{replace:!0}))}function E(W){const ue=W.matched[W.matched.length-1];if(ue&&ue.redirect){const{redirect:re}=ue;let he=typeof re=="function"?re(W):re;return typeof he=="string"&&(he=he.includes("?")||he.includes("#")?he=h(he):{path:he},he.params={}),Ye({query:W.query,hash:W.hash,params:W.params},he)}}function F(W,ue){const re=d=I(W),he=u.value,He=W.state,Ne=W.force,xe=W.replace===!0,ke=E(re);if(ke)return F(Ye(h(ke),{state:He,force:Ne,replace:xe}),ue||re);const L=re;L.redirectedFrom=ue;let R;return!Ne&&ag(o,he,re)&&(R=Cl(16,{to:L,from:he}),Je(he,he,!0,!1)),(R?Promise.resolve(R):P(L,he)).catch(q=>Ti(q)?q:de(q,L,he)).then(q=>{if(q){if(Ti(q,2))return F(Ye(h(q.to),{state:He,force:Ne,replace:xe}),ue||L)}else q=Q(L,he,!0,xe,He);return j(L,he,q),q})}function H(W,ue){const re=b(W,ue);return re?Promise.reject(re):Promise.resolve()}function P(W,ue){let re;const[he,He,Ne]=lh(W,ue);re=Fn(he.reverse(),"beforeRouteLeave",W,ue);for(const ke of he)ke.leaveGuards.forEach(L=>{re.push(bi(L,W,ue))});const xe=H.bind(null,W,ue);return re.push(xe),il(re).then(()=>{re=[];for(const ke of c.list())re.push(bi(ke,W,ue));return re.push(xe),il(re)}).then(()=>{re=Fn(He,"beforeRouteUpdate",W,ue);for(const ke of He)ke.updateGuards.forEach(L=>{re.push(bi(L,W,ue))});return re.push(xe),il(re)}).then(()=>{re=[];for(const ke of W.matched)if(ke.beforeEnter&&!ue.matched.includes(ke))if(Array.isArray(ke.beforeEnter))for(const L of ke.beforeEnter)re.push(bi(L,W,ue));else re.push(bi(ke.beforeEnter,W,ue));return re.push(xe),il(re)}).then(()=>(W.matched.forEach(ke=>ke.enterCallbacks={}),re=Fn(Ne,"beforeRouteEnter",W,ue),re.push(xe),il(re))).then(()=>{re=[];for(const ke of m.list())re.push(bi(ke,W,ue));return re.push(xe),il(re)}).catch(ke=>Ti(ke,8)?ke:Promise.reject(ke))}function j(W,ue,re){for(const he of f.list())he(W,ue,re)}function Q(W,ue,re,he,He){const Ne=b(W,ue);if(Ne)return Ne;const xe=ue===mi,ke=nl?history.state:{};re&&(he||xe?s.replace(W.fullPath,Ye({scroll:xe&&ke&&ke.scroll},He)):s.push(W.fullPath,He)),u.value=W,Je(W,ue,re,xe),Le()}let J;function fe(){J=s.listen((W,ue,re)=>{const he=I(W),He=E(he);if(He){F(Ye(He,{replace:!0}),he).catch(Xl);return}d=he;const Ne=u.value;nl&&mg(Sr(Ne.fullPath,re.delta),Cn()),P(he,Ne).catch(xe=>Ti(xe,12)?xe:Ti(xe,2)?(F(xe.to,he).then(ke=>{Ti(ke,20)&&!re.delta&&re.type===ua.pop&&s.go(-1,!1)}).catch(Xl),Promise.reject()):(re.delta&&s.go(-re.delta,!1),de(xe,he,Ne))).then(xe=>{xe=xe||Q(he,Ne,!1),xe&&(re.delta?s.go(-re.delta,!1):re.type===ua.pop&&Ti(xe,20)&&s.go(-1,!1)),j(he,Ne,xe)}).catch(Xl)})}let Be=Vl(),U=Vl(),K;function de(W,ue,re){Le(W);const he=U.list();return he.length?he.forEach(He=>He(W,ue,re)):console.error(W),Promise.reject(W)}function le(){return K&&u.value!==mi?Promise.resolve():new Promise((W,ue)=>{Be.add([W,ue])})}function Le(W){K||(K=!0,fe(),Be.list().forEach(([ue,re])=>W?re(W):ue()),Be.reset())}function Je(W,ue,re,he){const{scrollBehavior:He}=e;if(!nl||!He)return Promise.resolve();const Ne=!re&&pg(Sr(W.fullPath,0))||(he||!re)&&history.state&&history.state.scroll||null;return Bl().then(()=>He(W,ue,Ne)).then(xe=>xe&&dg(xe)).catch(xe=>de(xe,W,ue))}const at=W=>s.go(W);let Ue;const Xt=new Set;return{currentRoute:u,addRoute:w,removeRoute:S,hasRoute:T,getRoutes:A,resolve:I,options:e,push:C,replace:$,go:at,back:()=>at(-1),forward:()=>at(1),beforeEach:c.add,beforeResolve:m.add,afterEach:f.add,onError:U.add,isReady:le,install(W){const ue=this;W.component("RouterLink",ms),W.component("RouterView",th),W.config.globalProperties.$router=ue,Object.defineProperty(W.config.globalProperties,"$route",{enumerable:!0,get:()=>r(u)}),nl&&!Ue&&u.value===mi&&(Ue=!0,C(s.location).catch(He=>{}));const re={};for(const He in mi)re[He]=M(()=>u.value[He]);W.provide(wn,ue),W.provide(cs,ni(re)),W.provide(_o,u);const he=W.unmount;Xt.add(W),W.unmount=function(){Xt.delete(W),Xt.size<1&&(d=mi,J&&J(),u.value=mi,Ue=!1,K=!1),he()}}}}function il(e){return e.reduce((l,a)=>l.then(()=>a()),Promise.resolve())}function lh(e,l){const a=[],o=[],s=[],c=Math.max(l.matched.length,e.matched.length);for(let m=0;m<c;m++){const f=l.matched[m];f&&(e.matched.find(d=>wl(d,f))?o.push(f):a.push(f));const u=e.matched[m];u&&(l.matched.find(d=>wl(d,u))||s.push(u))}return[a,o,s]}function Yc(){return Fe(wn)}function Jc(){return Fe(cs)}const ah={__name:"Navbar",props:["onClick"],setup(e){const l=G(),a=Yc();function o(s){return s.charAt(0).toUpperCase()+s.slice(1)}return Xo(()=>{const m=a.currentRoute.value.path.match(/\/([^/]+)$/);m&&(l.value=o(m[1]))}),(s,c)=>{const m=x("SuiIcon"),f=x("SuiMenuItem"),u=x("SuiMenu");return y(),B(u,{id:"navbar",fixed:"",icon:"",inverted:"",size:"big"},{default:i(()=>[t(f,{onClick:e.onClick},{default:i(()=>[t(m,{name:"hamburger"})]),_:1},8,["onClick"]),t(f,null,{default:i(()=>[n($e(l.value),1)]),_:1})]),_:1})}}},nh=Me(ah,[["__scopeId","data-v-338afb35"]]),oh=V({name:"Sidebar",setup(){const e=Jc();return{isActive:m=>e.path===m,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),sh=k("strong",null," Fomantic UI Vue ",-1),rh=k("b",null,"Getting Started",-1);function uh(e,l,a,o,s,c){const m=x("sui-menu-item"),f=x("sui-menu-header"),u=x("sui-menu-menu"),d=x("sui-menu");return y(),B(d,{fluid:"",inverted:"",vertical:""},{default:i(()=>[t(m,{as:"div"},{default:i(()=>[sh]),_:1}),t(m,{as:"router-link",to:"/"},{default:i(()=>[rh]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Elements"}),t(u,null,{default:i(()=>[(y(!0),ve(Ce,null,Qe(e.elements,g=>(y(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Collections"}),t(u,null,{default:i(()=>[(y(!0),ve(Ce,null,Qe(e.collections,g=>(y(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Views"}),t(u,null,{default:i(()=>[(y(!0),ve(Ce,null,Qe(e.views,g=>(y(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Modules"}),t(u,null,{default:i(()=>[(y(!0),ve(Ce,null,Qe(e.modules,g=>(y(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const ch=Me(oh,[["render",uh]]),dh={class:"sidemenu"},mh={style:{flex:"1","overflow-y":"scroll"}},ph={__name:"Sidebar",setup(e){return(l,a)=>(y(),ve("div",dh,[k("div",mh,[t(ch)])]))}},fh=Me(ph,[["__scopeId","data-v-379ef704"]]),gh=V({name:"Sidebar",setup(){const e=Jc();return{isActive:m=>e.path===m,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),hh=k("strong",null," Fomantic UI Vue ",-1),_h=k("b",null,"Getting Started",-1);function bh(e,l,a,o,s,c){const m=x("sui-menu-item"),f=x("sui-menu-header"),u=x("sui-menu-menu"),d=x("sui-sidebar");return y(),B(d,{dimmed:"",inverted:"",style:{width:"250px"}},{default:i(()=>[t(m,{as:"div"},{default:i(()=>[hh]),_:1}),t(m,{as:"router-link",to:"/"},{default:i(()=>[_h]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Elements"}),t(u,null,{default:i(()=>[(y(!0),ve(Ce,null,Qe(e.elements,g=>(y(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Collections"}),t(u,null,{default:i(()=>[(y(!0),ve(Ce,null,Qe(e.collections,g=>(y(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Views"}),t(u,null,{default:i(()=>[(y(!0),ve(Ce,null,Qe(e.views,g=>(y(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Modules"}),t(u,null,{default:i(()=>[(y(!0),ve(Ce,null,Qe(e.modules,g=>(y(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const vh=Me(gh,[["render",bh]]),Sh={class:"pusher",style:{height:"100vh"}},yh={class:"article"},wh={__name:"Home",setup(e){const l=G(!1),a=()=>l.value=!l.value;return Wg(()=>{l.value=!1}),(o,s)=>{const c=x("router-view"),m=x("SuiSegment");return y(),B(m,{class:"pushable",style:{border:"none"}},{default:i(()=>[t(vh,{visible:l.value},null,8,["visible"]),k("div",Sh,[t(fh),t(nh,{"on-click":a}),k("div",yh,[t(c)])])]),_:1})}}},Ch=Me(wh,[["__scopeId","data-v-0bfd4ee9"]]),Ah={__name:"DocSections",props:["docs"],setup(e){const l=e,a=M(()=>[...new Set(l.docs.map(o=>o.category))]);return(o,s)=>{const c=x("SuiHeader");return y(!0),ve(Ce,null,Qe(a.value,(m,f)=>(y(),ve(Ce,{key:m},[t(c,{as:"h2",dividing:"",style:kl({marginTop:f!==0?"5rem":"0",paddingTop:"2rem"})},{default:i(()=>[n($e(m),1)]),_:2},1032,["style"]),(y(!0),ve(Ce,null,Qe(e.docs.filter(u=>u.category===m),(u,d)=>(y(),B(Au(u.component),{key:u.label+"_"+d,id:u.id,style:{paddingTop:"3rem"}},null,8,["id"]))),128))],64))),128)}}},xh=e=>(yu("data-v-e2ae2e49"),e=e(),wu(),e),kh={class:"item"},Bh=xh(()=>k("i",{class:"dropdown icon"},null,-1)),$h={class:"content menu active"},Th={__name:"DocTableLink",props:["header","items"],setup(e){const{id:l}=Ou(),a=m=>{m.preventDefault();const f=document.getElementById(l);f.open?s(f):(f.open=!0,o(f))},o=m=>{m.querySelector(".title").classList.add("active");const u=m.querySelector(".content"),d=u.offsetHeight;u.style.maxHeight=0,requestAnimationFrame(()=>{u.style.maxHeight=`${d}px`});const g=new AbortController;u.addEventListener("transitionend",()=>{u.removeAttribute("style"),g.abort()},{signal:g.signal})},s=m=>{const f=m.querySelector(".title"),u=m.querySelector(".content"),d=u.offsetHeight;u.style.maxHeight=`${d}px`,requestAnimationFrame(()=>{u.style.maxHeight=0,f.classList.remove("active")});const g=new AbortController;u.addEventListener("transitionend",()=>{u.removeAttribute("style"),m.open=!1,g.abort()},{signal:g.signal})},c=(m,f)=>{m.preventDefault(),document.getElementById(f.replace("_link","")).scrollIntoView({behavior:"smooth",block:"start"})};return(m,f)=>(y(),ve("details",kh,[k("summary",{class:"title",onClick:a},[Bh,k("b",null,$e(e.header),1)]),k("div",$h,[(y(!0),ve(Ce,null,Qe(e.items,u=>(y(),B(r(ms),{to:`#${u.id}`,class:"item",onClick:d=>c(d,u.id)},{default:i(()=>[n($e(u.label),1)]),_:2},1032,["to","onClick"]))),256))])]))}},Lh=Me(Th,[["__scopeId","data-v-e2ae2e49"]]),Ih={class:"sticky"},Dh={class:"ui vertical following fluid accordion text large menu"},Eh={__name:"DocTableContents",props:["title","links"],setup(e){const l=e,a=[...new Set(l.links.map(o=>o.category))];return(o,s)=>{const c=x("SuiHeader"),m=x("SuiRail");return y(),B(m,{id:"table-contents",position:"right",dividing:""},{default:i(()=>[k("div",Ih,[t(c,{as:"h3"},{default:i(()=>[n($e(e.title),1)]),_:1}),k("div",Dh,[(y(),ve(Ce,null,Qe(a,f=>t(Lh,{id:`${f}_link`,header:f,items:e.links.filter(u=>u.category===f)},null,8,["id","header","items"])),64))])])]),_:1})}}},Rh=Me(Eh,[["__scopeId","data-v-bd90305d"]]),zh={class:"intro"},Ph={__name:"DocComponent",props:["title","description","componentDocs"],setup(e){const l=G();return(a,o)=>{const s=x("SuiHeaderSubheader"),c=x("SuiHeader"),m=x("SuiDivider"),f=x("SuiIcon"),u=x("SuiMenuItem"),d=x("SuiPopup"),g=x("SuiMenu"),p=x("SuiContainer"),_=x("SuiSegment");return y(),ve("div",null,[t(_,{id:"masthead",vertical:"",style:{"border-bottom":"1px solid #DDDDDD"}},{default:i(()=>[t(p,{class:"main"},{default:i(()=>[k("div",zh,[t(c,{as:"h1"},{default:i(()=>[n($e(e.title)+" ",1),t(s,null,{default:i(()=>[n($e(e.description),1)]),_:1})]),_:1}),t(m,{hidden:""}),t(g,{icon:"",floated:"right"},{default:i(()=>[t(u,{as:"a",icon:"",ref_key:"el",ref:l,href:"https://github.com/nightswinger/vue-fomantic-ui"},{default:i(()=>[t(f,{name:"alternate github"})]),_:1},512),t(d,{trigger:l.value,position:"top right"},{default:i(()=>[n(" View Project on GitHub ")]),_:1},8,["trigger"])]),_:1})])]),_:1})]),_:1}),t(p,{class:"main"},{default:i(()=>[t(_,{basic:"",fitted:""},{default:i(()=>[e.componentDocs?(y(),ve(Ce,{key:0},[t(Ah,{docs:e.componentDocs},null,8,["docs"]),t(Rh,{title:e.title,links:e.componentDocs},null,8,["title","links"])],64)):ns("",!0),qi(a.$slots,"default",{},void 0,!0)]),_:3})]),_:3})])}}},ot=Me(Ph,[["__scopeId","data-v-d22eb33f"]]);var Ir=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Wc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Vh(e){if(e.__esModule)return e;var l=e.default;if(typeof l=="function"){var a=function o(){return this instanceof o?Reflect.construct(l,arguments,this.constructor):l.apply(this,arguments)};a.prototype=l.prototype}else a={};return Object.defineProperty(a,"__esModule",{value:!0}),Object.keys(e).forEach(function(o){var s=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(a,o,s.get?s:{enumerable:!0,get:function(){return e[o]}})}),a}var Kc={exports:{}};(function(e){var l=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var a=function(o){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,c=0,m={},f={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function h(b){return b instanceof u?new u(b.type,h(b.content),b.alias):Array.isArray(b)?b.map(h):b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(h){return Object.prototype.toString.call(h).slice(8,-1)},objId:function(h){return h.__id||Object.defineProperty(h,"__id",{value:++c}),h.__id},clone:function h(b,C){C=C||{};var $,E;switch(f.util.type(b)){case"Object":if(E=f.util.objId(b),C[E])return C[E];$={},C[E]=$;for(var F in b)b.hasOwnProperty(F)&&($[F]=h(b[F],C));return $;case"Array":return E=f.util.objId(b),C[E]?C[E]:($=[],C[E]=$,b.forEach(function(H,P){$[P]=h(H,C)}),$);default:return b}},getLanguage:function(h){for(;h;){var b=s.exec(h.className);if(b)return b[1].toLowerCase();h=h.parentElement}return"none"},setLanguage:function(h,b){h.className=h.className.replace(RegExp(s,"gi"),""),h.classList.add("language-"+b)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch($){var h=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec($.stack)||[])[1];if(h){var b=document.getElementsByTagName("script");for(var C in b)if(b[C].src==h)return b[C]}return null}},isActive:function(h,b,C){for(var $="no-"+b;h;){var E=h.classList;if(E.contains(b))return!0;if(E.contains($))return!1;h=h.parentElement}return!!C}},languages:{plain:m,plaintext:m,text:m,txt:m,extend:function(h,b){var C=f.util.clone(f.languages[h]);for(var $ in b)C[$]=b[$];return C},insertBefore:function(h,b,C,$){$=$||f.languages;var E=$[h],F={};for(var H in E)if(E.hasOwnProperty(H)){if(H==b)for(var P in C)C.hasOwnProperty(P)&&(F[P]=C[P]);C.hasOwnProperty(H)||(F[H]=E[H])}var j=$[h];return $[h]=F,f.languages.DFS(f.languages,function(Q,J){J===j&&Q!=h&&(this[Q]=F)}),F},DFS:function h(b,C,$,E){E=E||{};var F=f.util.objId;for(var H in b)if(b.hasOwnProperty(H)){C.call(b,H,b[H],$||H);var P=b[H],j=f.util.type(P);j==="Object"&&!E[F(P)]?(E[F(P)]=!0,h(P,C,null,E)):j==="Array"&&!E[F(P)]&&(E[F(P)]=!0,h(P,C,H,E))}}},plugins:{},highlightAll:function(h,b){f.highlightAllUnder(document,h,b)},highlightAllUnder:function(h,b,C){var $={callback:C,container:h,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};f.hooks.run("before-highlightall",$),$.elements=Array.prototype.slice.apply($.container.querySelectorAll($.selector)),f.hooks.run("before-all-elements-highlight",$);for(var E=0,F;F=$.elements[E++];)f.highlightElement(F,b===!0,$.callback)},highlightElement:function(h,b,C){var $=f.util.getLanguage(h),E=f.languages[$];f.util.setLanguage(h,$);var F=h.parentElement;F&&F.nodeName.toLowerCase()==="pre"&&f.util.setLanguage(F,$);var H=h.textContent,P={element:h,language:$,grammar:E,code:H};function j(J){P.highlightedCode=J,f.hooks.run("before-insert",P),P.element.innerHTML=P.highlightedCode,f.hooks.run("after-highlight",P),f.hooks.run("complete",P),C&&C.call(P.element)}if(f.hooks.run("before-sanity-check",P),F=P.element.parentElement,F&&F.nodeName.toLowerCase()==="pre"&&!F.hasAttribute("tabindex")&&F.setAttribute("tabindex","0"),!P.code){f.hooks.run("complete",P),C&&C.call(P.element);return}if(f.hooks.run("before-highlight",P),!P.grammar){j(f.util.encode(P.code));return}if(b&&o.Worker){var Q=new Worker(f.filename);Q.onmessage=function(J){j(J.data)},Q.postMessage(JSON.stringify({language:P.language,code:P.code,immediateClose:!0}))}else j(f.highlight(P.code,P.grammar,P.language))},highlight:function(h,b,C){var $={code:h,grammar:b,language:C};if(f.hooks.run("before-tokenize",$),!$.grammar)throw new Error('The language "'+$.language+'" has no grammar.');return $.tokens=f.tokenize($.code,$.grammar),f.hooks.run("after-tokenize",$),u.stringify(f.util.encode($.tokens),$.language)},tokenize:function(h,b){var C=b.rest;if(C){for(var $ in C)b[$]=C[$];delete b.rest}var E=new p;return _(E,E.head,h),g(h,E,b,E.head,0),S(E)},hooks:{all:{},add:function(h,b){var C=f.hooks.all;C[h]=C[h]||[],C[h].push(b)},run:function(h,b){var C=f.hooks.all[h];if(!(!C||!C.length))for(var $=0,E;E=C[$++];)E(b)}},Token:u};o.Prism=f;function u(h,b,C,$){this.type=h,this.content=b,this.alias=C,this.length=($||"").length|0}u.stringify=function h(b,C){if(typeof b=="string")return b;if(Array.isArray(b)){var $="";return b.forEach(function(j){$+=h(j,C)}),$}var E={type:b.type,content:h(b.content,C),tag:"span",classes:["token",b.type],attributes:{},language:C},F=b.alias;F&&(Array.isArray(F)?Array.prototype.push.apply(E.classes,F):E.classes.push(F)),f.hooks.run("wrap",E);var H="";for(var P in E.attributes)H+=" "+P+'="'+(E.attributes[P]||"").replace(/"/g,"&quot;")+'"';return"<"+E.tag+' class="'+E.classes.join(" ")+'"'+H+">"+E.content+"</"+E.tag+">"};function d(h,b,C,$){h.lastIndex=b;var E=h.exec(C);if(E&&$&&E[1]){var F=E[1].length;E.index+=F,E[0]=E[0].slice(F)}return E}function g(h,b,C,$,E,F){for(var H in C)if(!(!C.hasOwnProperty(H)||!C[H])){var P=C[H];P=Array.isArray(P)?P:[P];for(var j=0;j<P.length;++j){if(F&&F.cause==H+","+j)return;var Q=P[j],J=Q.inside,fe=!!Q.lookbehind,Be=!!Q.greedy,U=Q.alias;if(Be&&!Q.pattern.global){var K=Q.pattern.toString().match(/[imsuy]*$/)[0];Q.pattern=RegExp(Q.pattern.source,K+"g")}for(var de=Q.pattern||Q,le=$.next,Le=E;le!==b.tail&&!(F&&Le>=F.reach);Le+=le.value.length,le=le.next){var Je=le.value;if(b.length>h.length)return;if(!(Je instanceof u)){var at=1,Ue;if(Be){if(Ue=d(de,Le,h,fe),!Ue||Ue.index>=h.length)break;var ue=Ue.index,Xt=Ue.index+Ue[0].length,zt=Le;for(zt+=le.value.length;ue>=zt;)le=le.next,zt+=le.value.length;if(zt-=le.value.length,Le=zt,le.value instanceof u)continue;for(var W=le;W!==b.tail&&(zt<Xt||typeof W.value=="string");W=W.next)at++,zt+=W.value.length;at--,Je=h.slice(Le,zt),Ue.index-=Le}else if(Ue=d(de,0,Je,fe),!Ue)continue;var ue=Ue.index,re=Ue[0],he=Je.slice(0,ue),He=Je.slice(ue+re.length),Ne=Le+Je.length;F&&Ne>F.reach&&(F.reach=Ne);var xe=le.prev;he&&(xe=_(b,xe,he),Le+=he.length),w(b,xe,at);var ke=new u(H,J?f.tokenize(re,J):re,U,re);if(le=_(b,xe,ke),He&&_(b,le,He),at>1){var L={cause:H+","+j,reach:Ne};g(h,b,C,le.prev,Le,L),F&&L.reach>F.reach&&(F.reach=L.reach)}}}}}}function p(){var h={value:null,prev:null,next:null},b={value:null,prev:h,next:null};h.next=b,this.head=h,this.tail=b,this.length=0}function _(h,b,C){var $=b.next,E={value:C,prev:b,next:$};return b.next=E,$.prev=E,h.length++,E}function w(h,b,C){for(var $=b.next,E=0;E<C&&$!==h.tail;E++)$=$.next;b.next=$,$.prev=b,h.length-=E}function S(h){for(var b=[],C=h.head.next;C!==h.tail;)b.push(C.value),C=C.next;return b}if(!o.document)return o.addEventListener&&(f.disableWorkerMessageHandler||o.addEventListener("message",function(h){var b=JSON.parse(h.data),C=b.language,$=b.code,E=b.immediateClose;o.postMessage(f.highlight($,f.languages[C],C)),E&&o.close()},!1)),f;var A=f.util.currentScript();A&&(f.filename=A.src,A.hasAttribute("data-manual")&&(f.manual=!0));function T(){f.manual||f.highlightAll()}if(!f.manual){var I=document.readyState;I==="loading"||I==="interactive"&&A&&A.defer?document.addEventListener("DOMContentLoaded",T):window.requestAnimationFrame?window.requestAnimationFrame(T):window.setTimeout(T,16)}return f}(l);e.exports&&(e.exports=a),typeof Ir<"u"&&(Ir.Prism=a),a.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(s,c){var m={};m["language-"+c]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[c]},m.cdata=/^<!\[CDATA\[|\]\]>$/i;var f={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:m}};f["language-"+c]={pattern:/[\s\S]+/,inside:a.languages[c]};var u={};u[s]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return s}),"i"),lookbehind:!0,greedy:!0,inside:f},a.languages.insertBefore("markup","cdata",u)}}),Object.defineProperty(a.languages.markup.tag,"addAttribute",{value:function(o,s){a.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:a.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,function(o){var s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+s.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var c=o.languages.markup;c&&(c.tag.addInlined("style","css"),c.tag.addAttribute("style","css"))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),a.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),a.languages.markup&&(a.languages.markup.tag.addInlined("script","javascript"),a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),a.languages.js=a.languages.javascript,function(){if(typeof a>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading…",s=function(A,T){return"✖ Error "+A+" while fetching file: "+T},c="✖ Error: File does not exist or is empty",m={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},f="data-src-status",u="loading",d="loaded",g="failed",p="pre[data-src]:not(["+f+'="'+d+'"]):not(['+f+'="'+u+'"])';function _(A,T,I){var h=new XMLHttpRequest;h.open("GET",A,!0),h.onreadystatechange=function(){h.readyState==4&&(h.status<400&&h.responseText?T(h.responseText):h.status>=400?I(s(h.status,h.statusText)):I(c))},h.send(null)}function w(A){var T=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(A||"");if(T){var I=Number(T[1]),h=T[2],b=T[3];return h?b?[I,Number(b)]:[I,void 0]:[I,I]}}a.hooks.add("before-highlightall",function(A){A.selector+=", "+p}),a.hooks.add("before-sanity-check",function(A){var T=A.element;if(T.matches(p)){A.code="",T.setAttribute(f,u);var I=T.appendChild(document.createElement("CODE"));I.textContent=o;var h=T.getAttribute("data-src"),b=A.language;if(b==="none"){var C=(/\.(\w+)$/.exec(h)||[,"none"])[1];b=m[C]||C}a.util.setLanguage(I,b),a.util.setLanguage(T,b);var $=a.plugins.autoloader;$&&$.loadLanguages(b),_(h,function(E){T.setAttribute(f,d);var F=w(T.getAttribute("data-range"));if(F){var H=E.split(/\r\n?|\n/g),P=F[0],j=F[1]==null?H.length:F[1];P<0&&(P+=H.length),P=Math.max(0,Math.min(P-1,H.length)),j<0&&(j+=H.length),j=Math.max(0,Math.min(j,H.length)),E=H.slice(P,j).join(`
`),T.hasAttribute("data-start")||T.setAttribute("data-start",String(P+1))}I.textContent=E,a.highlightElement(I)},function(E){T.setAttribute(f,g),I.textContent=E})}}),a.plugins.fileHighlight={highlight:function(T){for(var I=(T||document).querySelectorAll(p),h=0,b;b=I[h++];)a.highlightElement(b)}};var S=!1;a.fileHighlight=function(){S||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),S=!0),a.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Kc);var Xc=Kc.exports;const Fh=Wc(Xc),Va={mounted(e,l){var s;const a=l.modifiers,o=l.value;a.script||o==="script"?e.className="language-javascript":e.className="language-markup",Fh.highlightElement(e.children[0]),(s=e.children[0].parentElement)==null||s.setAttribute("tabindex","-1")}},Mh={style:{paddingTop:"3rem"}},Hh=k("p",null," Fomantic-UI Vue provides UI components based on Fomantic-UI. ",-1),Nh=k("code",null,`$ npm install vue-fomantic-ui
$ npm install fomantic-ui-css
# or
$ yarn add vue-fomantic-ui
$ yarn add fomantic-ui-css`,-1),Oh=[Nh],qh={style:{paddingTop:"3rem",marginBottom:"3rem"}},Gh=k("p",null," You can import all components as Vue plugin. ",-1),jh=k("code",null,`import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

const app = createApp(App)

app.use(FomanticUI)`,-1),Uh=[jh],Yh=k("br",null,null,-1),Jh=k("p",null," Or pick a component indivisually, add it to your components option. ",-1),Wh=k("code",null,`import { SuiButton } from 'vue-fomantic-ui'

export default {
  components: { SuiButton },
  // ...
}`,-1),Kh=[Wh],Xh={__name:"GettingStarted",setup(e){return(l,a)=>{const o=x("SuiHeader");return y(),B(ot,{title:"Getting Started",description:"Getting up and running with Fomantic-UI Vue"},{default:i(()=>[k("section",Mh,[t(o,{as:"h2"},{default:i(()=>[n("Install")]),_:1}),Hh,t(o,{as:"h3"},{default:i(()=>[n("via Package Manager")]),_:1}),Si((y(),ve("pre",null,Oh)),[[r(Va)]])]),k("section",qh,[t(o,{as:"h2"},{default:i(()=>[n("Usage")]),_:1}),Gh,Si((y(),ve("pre",null,Uh)),[[r(Va),void 0,void 0,{script:!0}]]),Yh,Jh,Si((y(),ve("pre",null,Kh)),[[r(Va),void 0,void 0,{script:!0}]])])]),_:1})}}};function Qc(e){var l,a,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(l=0;l<e.length;l++)e[l]&&(a=Qc(e[l]))&&(o&&(o+=" "),o+=a);else for(l in e)e[l]&&(o&&(o+=" "),o+=l);return o}function te(){for(var e,l,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(l=Qc(e))&&(o&&(o+=" "),o+=l);return o}const v=(e,l)=>e?l:"",ze=(e,l)=>typeof e=="string"?`${e} ${l}`:"",De=(e,l)=>e===!0?l:e==="below"?`${l} ${e}`:typeof e=="string"?`${e} ${l}`:"",Tl=e=>e==="justified"?"justified":ze(e,"aligned"),si=(e,l)=>typeof e=="number"&&l?`${So(e)} ${l}`:typeof e=="number"&&!l?So(e):typeof e=="string"&&e==="equal"?`${e} width`:"",Fl=(e,l)=>e?`${So(e)} wide ${l}`:"",So=e=>["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"][e-1],Qh=V({props:{fluid:Boolean,inverted:Boolean,multiple:Boolean,styled:Boolean},setup(e){const l=e.multiple?G([]):G(-1),a=s=>e.multiple?l.value.includes(s):l.value===s,o=s=>{const c=a(s);e.multiple?c?l.value=l.value.filter(m=>m!==s):l.value.push(s):l.value=c?-1:s};return ut("isTabActive",a),ut("updateActiveIndex",o),{computedClass:M(()=>te("ui",v(e.fluid,"fluid"),v(e.inverted,"inverted"),v(e.styled,"styled"),"accordion"))}},render(){var e,l;const a=o=>(o.forEach((s,c)=>{s.props.index=c}),o);return t("div",{class:this.computedClass},[a((l=(e=this.$slots).default)==null?void 0:l.call(e))])}}),Zh=V({render(){var e,l;return X("div",{class:"accordion"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Zc=V({props:{active:Boolean},setup(e){return{computedClass:M(()=>te(v(e.active,"active"),"content"))}},render(){var e,l;return X("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Y=V({props:{as:String,bordered:Boolean,circular:Boolean,color:String,colored:Boolean,corner:[Boolean,String],disabled:Boolean,fitted:Boolean,flipped:String,inverted:Boolean,link:Boolean,loading:Boolean,name:String,primary:Boolean,rotated:String,secondary:Boolean,size:String},setup(e){return{classes:M(()=>te(e.color,e.name,e.size,v(e.primary,"primary"),v(e.secondary,"secondary"),v(e.bordered,"bordered"),v(e.circular,"circular"),v(e.colored,"colored"),v(e.disabled,"disabled"),v(e.fitted,"fitted"),v(e.inverted,"inverted"),v(e.link,"link"),v(e.loading,"loading"),ze(e.flipped,"flipped"),ze(e.rotated,"rotated"),De(e.corner,"corner"),"icon"))}},render(){let e=this.$props.as||"i";return X(e,{"aria-hidden":!0,class:this.classes})}}),e_=V({props:{index:Number,title:String},setup(e){const l=Fe("isTabActive"),a=Fe("updateActiveIndex"),o=M(()=>te(v(l(e.index),"active"),"title"));return{isTabActive:l,updateActiveIndex:a,titleClass:o}},render(){return t(Ce,null,[t("div",{class:this.titleClass,onClick:()=>this.updateActiveIndex(this.index)},[t(Y,{name:"dropdown"},null),this.title]),t(Zc,{active:this.isTabActive(this.index)},{default:()=>{var e,l;return[(l=(e=this.$slots).default)==null?void 0:l.call(e)]}})])}}),t_=V({props:{active:Boolean},setup(e){return{computedClass:M(()=>te(v(e.active,"active"),"title"))}},render(){var e,l;return X("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),i_={install(e){e.component("SuiAccordion",Qh),e.component("SuiAccordionAccordion",Zh),e.component("SuiAccordionContent",Zc),e.component("SuiAccordionTab",e_),e.component("SuiAccordionTitle",t_)}},l_=V({props:{centered:Boolean,test:String,unit:String},setup(e){return{computedClass:M(()=>te("ui",e.unit,v(e.centered,"centered"),v(!!e.test,"test"),"ad"))}},render(){var e,l,a,o;return this.$props.test?X("div",{class:this.computedClass,"data-text":this.$props.test},(l=(e=this.$slots).default)==null?void 0:l.call(e)):X("div",{class:this.computedClass},(o=(a=this.$slots).default)==null?void 0:o.call(a))}}),a_={install(e){e.component("SuiAdvertisement",l_)}},Lt=V({props:{icon:String},setup(e){return{computedClass:M(()=>te(e.icon,"icon","divider"))}},render(){var e,l;return this.icon?t("i",{"aria-hidden":"true",class:this.computedClass},null):t("div",{class:"divider"},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),et=V({props:{active:Boolean,href:String,link:Boolean,to:String},setup(e){const l=M(()=>te(v(e.active,"active"),"section")),a=e.link||!!e.href;return{computedClass:l,isLink:a}},render(){let e="div";this.isLink?e="a":this.to&&(e=x("router-link"));const l={href:this.href,to:this.to};return t(e,Zi({class:this.computedClass},l),{default:()=>{var a,o;return[(o=(a=this.$slots).default)==null?void 0:o.call(a)]}})}}),ai=V({props:{icon:String,inverted:Boolean,sections:{type:Array,default:()=>[]},size:String},setup(e){return{computedClass:M(()=>te("ui",e.size,v(e.inverted,"inverted"),"breadcrumb"))}},render(){var e,l;const a=()=>{var o;return(o=this.sections)==null?void 0:o.map((s,c)=>{const m={active:s.active,href:s.href,link:s.link,to:s.to};return t(Ce,null,[t(et,m,{default:()=>[s.content]}),this.sections.length!==c+1&&t(Lt,{icon:this.icon},{default:()=>[n(" / ")]})])})};return t("div",{class:this.computedClass},[((l=(e=this.$slots).default)==null?void 0:l.call(e))||a()])}}),n_={install(e){e.component("SuiBreadcrumb",ai),e.component("SuiBreadcrumbDivider",Lt),e.component("SuiBreadcrumbSection",et)}},Ri=V({props:{as:String,size:String},setup(e){return{computedClass:M(()=>te(e.size,"icons"))}},render(){var e,l;let a=this.$props.as||"i";return X(a,{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),o_={install(e){e.component("SuiIcon",Y),e.component("SuiIconGroup",Ri)}},s_=()=>({icon:[Boolean,String]}),r_=e=>({iconClasses:M(()=>typeof e.icon=="boolean"&&e.icon||e.labeled&&e.icon?"icon":te({icon:e.icon&&!e.content}))}),u_=["right","left"],c_=()=>({labeled:[Boolean,String]}),d_=e=>({labeledClasses:M(()=>typeof e.labeled=="boolean"&&e.labeled?"labeled":u_.includes(e.labeled)?`${e.labeled} labeled`:"")}),m_=["double","usual double","elastic"],ed=()=>({loading:{type:[Boolean,String],validator:e=>m_.includes(e)||typeof e=="boolean"}}),td=e=>({loadingClasses:M(()=>te(e.loading,{loading:e.loading}))}),z=V({props:{active:Boolean,animated:[Boolean,String],as:{type:String,default:"button"},attached:String,basic:Boolean,circular:Boolean,color:String,compact:Boolean,content:[String,Array],disabled:Boolean,facebook:Boolean,floated:String,fluid:Boolean,google:Boolean,linkedin:Boolean,instagram:Boolean,inverted:Boolean,negative:Boolean,positive:Boolean,primary:Boolean,secondary:Boolean,size:String,telegram:Boolean,tertiary:Boolean,toggle:Boolean,twitter:Boolean,vk:Boolean,whatsapp:Boolean,youtube:Boolean,...s_(),...c_(),...ed()},setup(e){const{iconClasses:l}=r_(e),{labeledClasses:a}=d_(e),{loadingClasses:o}=td(e);return{classes:M(()=>te("ui",e.color,e.size,v(e.active,"active"),v(e.basic,"basic"),v(e.circular,"circular"),v(e.compact,"compact"),v(e.disabled,"disabled"),v(e.facebook,"facebook"),v(e.fluid,"fluid"),v(e.google,"google"),v(e.linkedin,"linkedin"),v(e.instagram,"instagram"),v(e.inverted,"inverted"),v(e.negative,"negative"),v(e.positive,"positive"),v(e.primary,"primary"),v(e.secondary,"secondary"),v(e.telegram,"telegram"),v(e.tertiary,"tertiary"),v(e.toggle,"toggle"),v(e.twitter,"twitter"),v(e.vk,"vk"),v(e.whatsapp,"whatsapp"),v(e.youtube,"youtube"),ze(e.attached,"attached"),ze(e.floated,"floated"),De(e.animated,"animated"),l.value,a.value,o.value,"button"))}},render(){var e,l;const a=this.attached?"div":this.as;return X(a,{class:this.classes,role:"button"},[typeof this.icon=="string"&&X(Y,{name:this.icon}),this.content||((l=(e=this.$slots).default)==null?void 0:l.call(e))])}}),Ii=V({props:{hidden:Boolean,visible:Boolean},setup(e){return{computedClass:M(()=>te(v(e.hidden,"hidden"),v(e.visible,"visible"),"content"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),gt=V({props:{attached:String,basic:Boolean,color:String,icon:Boolean,labeled:Boolean,size:String,vertical:Boolean,widths:Number},setup(e){return{computedClass:M(()=>te("ui",e.color,e.size,v(e.basic,"basic"),v(e.icon,"icon"),v(e.labeled,"labeled"),v(e.vertical,"vertical"),ze(e.attached,"attached"),si(e.widths,""),"buttons"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),p_={install(e){e.component("SuiButton",z),e.component("SuiButtonContent",Ii),e.component("SuiButtonGroup",gt)}},f_=(e,l,a)=>{e.clickOutside=o=>{e===o.target||e.contains(o.target)||l.value(o,e)},document.body.addEventListener("click",e.clickOutside)},g_=(e,l,a)=>{document.body.removeEventListener("click",e.clickOutside)},ps={mounted:f_,unmounted:g_};function h_(e,l={}){const a=G(e.value?"open":"closed"),o=()=>a.value=e.value?"open":"closed";pt(e,f=>{a.value=f?"opening":"closing"});const s=f=>{f.addEventListener("animationend",o,!0)},c=f=>{f&&f.removeEventListener("animationend",o)},m=M((f="scale")=>{switch(a.value){case"opening":return`animating ${f} in`;case"open":return"visible active";case"closing":return`visible active animating ${f} out`;case"closed":return"hidden"}});return{setupAnimation:s,removeAnimation:c,computeAnimationClass:m}}const __=V({name:"SuiCalendarDay",emits:["select-day"],props:{active:Boolean,date:null,disabled:Boolean,onSelectDay:Function},setup(e,{emit:l}){const a=G(!1),o=()=>{e.disabled||(a.value=!0)},s=()=>a.value=!1,c=()=>{e.disabled||l("select-day",e.date)},m=()=>{let u=new Date;return u.getFullYear()===e.date.year&&u.getMonth()===e.date.month&&u.getDate()===e.date.day},f=M(()=>te("link",v(a.value,"focus"),v(e.active&&!e.disabled,"active"),v(e.disabled,"adjacent disabled"),v(m(),"today")));return{onMouseEnter:o,onMouseLeave:s,onClick:c,computedClass:f}},render(){var e,l;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:Et(this.onClick,["stop"])},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),b_=V({name:"SuiCalendarDateTable",setup(){const{calendarDays:e,updateSelectMode:l,set:a,add:o,subtract:s,selectedDate:c,setSelectedDate:m,selectType:f,updateVisible:u,formatDate:d}=Fe(xi);return{calendarDays:e,isEqualDay:g=>{if(!c.value)return!1;const p=c.value;return p.getFullYear()===g.year&&p.getMonth()===g.month&&p.getDate()===g.day},onSelectDay:g=>{if(a(g.year,"years"),a(g.month,"months"),a(g.day,"days"),f.value==="date"){let p=new Date(g.year,g.month,g.day);m(p),u(!1);return}l("hour")},updateSelectMode:l,formatDate:d,add:o,subtract:s}},render(){const e=()=>this.calendarDays.map((l,a)=>t("tr",null,[l.map(o=>t(__,{active:this.isEqualDay(o),date:o,disabled:!o.currentMonth,onSelectDay:this.onSelectDay},{default:()=>[o.day]}))]));return t("table",{class:"ui celled center aligned unstackable table day seven column"},[t("thead",null,[t("tr",null,[t("th",{colspan:7},[t("span",{class:"link",onClick:Et(()=>this.updateSelectMode("month"),["stop"])},[this.formatDate("date")]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"months")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"months")},[t("i",{class:"chevron right icon"},null)])])]),t("tr",null,[t("th",null,[n("S")]),t("th",null,[n("M")]),t("th",null,[n("T")]),t("th",null,[n("W")]),t("th",null,[n("T")]),t("th",null,[n("F")]),t("th",null,[n("S")])])]),t("tbody",null,[e()])])}}),ye=V({name:"SuiCalendarTableCell",emits:["click-cell"],props:{active:Boolean,today:Boolean,value:null,onClickCell:Function},setup(e){const l=G(!1),a=()=>l.value=!0,o=()=>l.value=!1,s=M(()=>te("link",v(e.active,"active"),v(e.today,"today"),v(l.value,"focus")));return{onMouseEnter:a,onMouseLeave:o,computedClass:s}},render(){var e,l;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:Et(()=>this.$emit("click-cell",this.value),["stop"])},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),v_=V({name:"SuiCalendarMonthTable",setup(){const{state:e,set:l,add:a,subtract:o,selectedDate:s,updateSelectMode:c}=Fe(xi);return{state:e,add:a,subtract:o,updateSelectMode:c,isActive:m=>s.value?e.year===s.value.getFullYear()&&e.month===m:!1,isThisMonth:m=>{let f=new Date;return m===f.getMonth()&&e.year===f.getFullYear()},onClickCell:m=>{l(m,"months"),c("day")}}},render(){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l=()=>Array(4).fill(0).map((a,o)=>t("tr",null,[t(ye,{value:o*3,active:this.isActive(o*3),today:this.isThisMonth(o*3),onClickCell:this.onClickCell},{default:()=>[e[o*3]]}),t(ye,{value:o*3+1,active:this.isActive(o*3+1),today:this.isThisMonth(o*3+1),onClickCell:this.onClickCell},{default:()=>[e[o*3+1]]}),t(ye,{value:o*3+2,active:this.isActive(o*3+2),today:this.isThisMonth(o*3+2),onClickCell:this.onClickCell},{default:()=>[e[o*3+2]]})]));return t("table",{class:"ui celled center aligned unstackable table month three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:Et(()=>this.updateSelectMode("year"),["stop"])},[this.state.year]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"years")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"years")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[l()])])}}),S_=V({name:"SuiCalendarYearTable",setup(e){const{state:l,set:a,add:o,subtract:s,selectedDate:c,updateSelectMode:m}=Fe(xi),f=()=>o(10,"years"),u=()=>s(10,"years"),d=M(()=>Math.round(l.year/10)*10+1);return{updateSelectMode:m,moveNextTwelveYears:f,movePrevTwelveYears:u,headerStartYear:d,isActive:g=>c.value?g===c.value.getFullYear():!1,isThisYear:g=>g===new Date().getFullYear(),onClickCell:g=>{a(g,"years"),m("day")}}},render(){return t("table",{class:"ui celled center aligned unstackable table year three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:Et(()=>this.updateSelectMode("day"),["stop"])},[this.headerStartYear,n(" - "),this.headerStartYear+11]),t("span",{class:"prev link",onClick:this.movePrevTwelveYears},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.moveNextTwelveYears},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(ye,{value:this.headerStartYear,active:this.isActive(this.headerStartYear),today:this.isThisYear(this.headerStartYear),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear]}),t(ye,{value:this.headerStartYear+1,active:this.isActive(this.headerStartYear+1),today:this.isThisYear(this.headerStartYear+1),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+1]}),t(ye,{value:this.headerStartYear+2,active:this.isActive(this.headerStartYear+2),today:this.isThisYear(this.headerStartYear+2),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+2]})]),t("tr",null,[t(ye,{value:this.headerStartYear+3,active:this.isActive(this.headerStartYear+3),today:this.isThisYear(this.headerStartYear+3),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+3]}),t(ye,{value:this.headerStartYear+4,active:this.isActive(this.headerStartYear+4),today:this.isThisYear(this.headerStartYear+4),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+4]}),t(ye,{value:this.headerStartYear+5,active:this.isActive(this.headerStartYear+5),today:this.isThisYear(this.headerStartYear+5),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+5]})]),t("tr",null,[t(ye,{value:this.headerStartYear+6,active:this.isActive(this.headerStartYear+6),today:this.isThisYear(this.headerStartYear+6),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+6]}),t(ye,{value:this.headerStartYear+7,active:this.isActive(this.headerStartYear+7),today:this.isThisYear(this.headerStartYear+7),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+7]}),t(ye,{value:this.headerStartYear+8,active:this.isActive(this.headerStartYear+8),today:this.isThisYear(this.headerStartYear+8),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+8]})]),t("tr",null,[t(ye,{value:this.headerStartYear+9,active:this.isActive(this.headerStartYear+9),today:this.isThisYear(this.headerStartYear+9),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+9]}),t(ye,{value:this.headerStartYear+10,active:this.isActive(this.headerStartYear+10),today:this.isThisYear(this.headerStartYear+10),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+10]}),t(ye,{value:this.headerStartYear+11,active:this.isActive(this.headerStartYear+11),today:this.isThisYear(this.headerStartYear+11),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+11]})])])])}}),y_=V({name:"SuiCalendarHourTable",setup(){const{updateSelectMode:e,state:l,set:a,add:o,subtract:s,formatDate:c,selectedDate:m}=Fe(xi);return{updateSelectMode:e,formatDate:c,onPrevClick:()=>s(1,"days"),onNextClick:()=>o(1,"days"),onClickCell:f=>{a(f,"hours"),e("minute")},isActive:f=>{if(!m.value)return!1;let u=m.value.getFullYear(),d=m.value.getMonth(),g=m.value.getDate(),p=m.value.getHours();return l.year===u&&l.month===d&&l.day===g&&f===p}}},render(){return t("table",{class:"ui celled center aligned unstackable table hour four column"},[t("thead",null,[t("tr",null,[t("th",{colspan:4},[t("span",{class:"link",onClick:Et(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:this.onPrevClick},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.onNextClick},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(ye,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},{default:()=>[n("12:00 AM")]}),t(ye,{active:this.isActive(1),value:1,onClickCell:this.onClickCell},{default:()=>[n("1:00 AM")]}),t(ye,{active:this.isActive(2),value:2,onClickCell:this.onClickCell},{default:()=>[n("2:00 AM")]}),t(ye,{active:this.isActive(3),value:3,onClickCell:this.onClickCell},{default:()=>[n("3:00 AM")]})]),t("tr",null,[t(ye,{active:this.isActive(4),value:4,onClickCell:this.onClickCell},{default:()=>[n("4:00 AM")]}),t(ye,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},{default:()=>[n("5:00 AM")]}),t(ye,{active:this.isActive(6),value:6,onClickCell:this.onClickCell},{default:()=>[n("6:00 AM")]}),t(ye,{active:this.isActive(7),value:7,onClickCell:this.onClickCell},{default:()=>[n("7:00 AM")]})]),t("tr",null,[t(ye,{active:this.isActive(8),value:8,onClickCell:this.onClickCell},{default:()=>[n("8:00 AM")]}),t(ye,{active:this.isActive(9),value:9,onClickCell:this.onClickCell},{default:()=>[n("9:00 AM")]}),t(ye,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},{default:()=>[n("10:00 AM")]}),t(ye,{active:this.isActive(11),value:11,onClickCell:this.onClickCell},{default:()=>[n("11:00 AM")]})]),t("tr",null,[t(ye,{active:this.isActive(12),value:12,onClickCell:this.onClickCell},{default:()=>[n("12:00 PM")]}),t(ye,{active:this.isActive(13),value:13,onClickCell:this.onClickCell},{default:()=>[n("1:00 PM")]}),t(ye,{active:this.isActive(14),value:14,onClickCell:this.onClickCell},{default:()=>[n("2:00 PM")]}),t(ye,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},{default:()=>[n("3:00 PM")]})]),t("tr",null,[t(ye,{active:this.isActive(16),value:16,onClickCell:this.onClickCell},{default:()=>[n("4:00 PM")]}),t(ye,{active:this.isActive(17),value:17,onClickCell:this.onClickCell},{default:()=>[n("5:00 PM")]}),t(ye,{active:this.isActive(18),value:18,onClickCell:this.onClickCell},{default:()=>[n("6:00 PM")]}),t(ye,{active:this.isActive(19),value:19,onClickCell:this.onClickCell},{default:()=>[n("7:00 PM")]})]),t("tr",null,[t(ye,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},{default:()=>[n("8:00 PM")]}),t(ye,{active:this.isActive(21),value:21,onClickCell:this.onClickCell},{default:()=>[n("9:00 PM")]}),t(ye,{active:this.isActive(22),value:22,onClickCell:this.onClickCell},{default:()=>[n("10:00 PM")]}),t(ye,{active:this.isActive(23),value:23,onClickCell:this.onClickCell},{default:()=>[n("11:00 PM")]})])])])}});function Vt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ct(e)}const w_=V({name:"SuiCalendarMinuteTable",setup(){const{state:e,set:l,add:a,subtract:o,formatDate:s,updateSelectMode:c,updateVisible:m,selectedDate:f}=Fe(xi);return{add:a,subtract:o,formatDate:s,updateSelectMode:c,getTimeLabel:u=>{let d=e.hour%12,g=e.hour>12?"PM":"AM",p=u.toString().padStart(2,"0");return e.hour===0?`12:${p} AM`:e.hour===12?`12:${p} PM`:`${d}:${p} ${g}`},onClickCell:u=>{l(u,"minutes"),f.value=new Date(e.year,e.month,e.day,e.hour,e.minute),m(!1)},isActive:u=>{if(!f.value)return!1;let d=f.value.getFullYear(),g=f.value.getMonth(),p=f.value.getDate(),_=f.value.getHours(),w=f.value.getMinutes();return e.year===d&&e.month===g&&e.day===p&&e.hour===_&&u===w}}},render(){let e,l,a,o,s,c,m,f,u,d,g,p;return t("table",{class:"ui celled center aligned unstackable table minute three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:Et(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"days")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"days")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(ye,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},Vt(e=this.getTimeLabel(0))?e:{default:()=>[e]}),t(ye,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},Vt(l=this.getTimeLabel(5))?l:{default:()=>[l]}),t(ye,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},Vt(a=this.getTimeLabel(10))?a:{default:()=>[a]})]),t("tr",null,[t(ye,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},Vt(o=this.getTimeLabel(15))?o:{default:()=>[o]}),t(ye,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},Vt(s=this.getTimeLabel(20))?s:{default:()=>[s]}),t(ye,{active:this.isActive(25),value:25,onClickCell:this.onClickCell},Vt(c=this.getTimeLabel(25))?c:{default:()=>[c]})]),t("tr",null,[t(ye,{active:this.isActive(30),value:30,onClickCell:this.onClickCell},Vt(m=this.getTimeLabel(30))?m:{default:()=>[m]}),t(ye,{active:this.isActive(35),value:35,onClickCell:this.onClickCell},Vt(f=this.getTimeLabel(35))?f:{default:()=>[f]}),t(ye,{active:this.isActive(40),value:40,onClickCell:this.onClickCell},Vt(u=this.getTimeLabel(40))?u:{default:()=>[u]})]),t("tr",null,[t(ye,{active:this.isActive(45),value:45,onClickCell:this.onClickCell},Vt(d=this.getTimeLabel(45))?d:{default:()=>[d]}),t(ye,{active:this.isActive(50),value:50,onClickCell:this.onClickCell},Vt(g=this.getTimeLabel(50))?g:{default:()=>[g]}),t(ye,{active:this.isActive(55),value:55,onClickCell:this.onClickCell},Vt(p=this.getTimeLabel(55))?p:{default:()=>[p]})])])])}}),C_=V({name:"SuiCalendarBody",setup(){const e=G(null),{visible:l,selectMode:a}=Fe(xi),{setupAnimation:o,removeAnimation:s,computeAnimationClass:c}=h_(l);Ai(()=>o(e.value)),Qi(()=>s(e.value));const m=M(()=>te("ui popup calendar","bottom left","transition",c.value));return{rootRef:e,computedClass:m,selectMode:a}},render(){const e=()=>{switch(this.selectMode){case"day":return t(b_,null,null);case"month":return t(v_,null,null);case"year":return t(S_,null,null);case"hour":return t(y_,null,null);case"minute":return t(w_,null,null)}};return t("div",{ref:l=>this.rootRef=l,class:this.computedClass,style:"inset: 38px auto auto 0px;"},[e()])}}),A_=V({name:"SuiCalendarInput",props:{placeholder:String,value:null},setup(e){const{visible:l,updateVisible:a,updateSelectMode:o,set:s,state:c,formatCalendarDate:m}=Fe(xi);return{visible:l,formatCalendarDate:m,onClick:()=>{l.value||(o("day"),e.value&&(s(e.value.getFullYear(),"years"),s(e.value.getMonth(),"months"))),a(!l.value)}}},render(){return t("input",{type:"text",placeholder:this.placeholder,value:this.formatCalendarDate(this.value),onClick:()=>this.onClick()},null)}}),x_=(e,l)=>{let a=new Date;a.setDate(1),a.setMonth(l),a.setFullYear(e);let o=a.getDay();return o>=7?o-7:o},k_=(e,l)=>{let a,o;return l===0?(a=11,o=e-1):(a=l-1,o=e),32-new Date(o,a,32).getDate()},Mn=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e];function B_(){const e=G(!1),l=(A=!1)=>e.value=A,a=new Date;function o(A){if(!A)return;let T=A.getFullYear(),I=Mn(A.getMonth()),h=A.getDate(),b=A.getHours(),C=A.getMinutes(),$=b>11?"PM":"AM";b=b%12,b===0&&(b=12);let E=C.toString().padStart(2,"0");return`${I} ${h}, ${T} ${b}:${E} ${$}`}const s=G("default"),c=G("day");function m(A){c.value=A}const f=G(null),u=A=>{f.value=A},d=ni({year:a.getFullYear(),month:a.getMonth(),day:a.getDate(),hour:a.getHours(),minute:a.getMinutes()}),g=(A,T)=>{switch(T){case"years":d.year=A;break;case"months":d.month=A;break;case"days":d.day=A;break;case"hours":d.hour=A;break;case"minutes":d.minute=A}},p=(A,T)=>{let I=new Date(d.year,d.month,d.day,d.hour);switch(T){case"years":I.setFullYear(I.getFullYear()+A);break;case"months":I.setMonth(I.getMonth()+A);break;case"days":I.setDate(I.getDate()+A);break;case"hours":I.setHours(I.getHours()+A);break}d.year=I.getFullYear(),d.month=I.getMonth(),d.day=I.getDate(),d.hour=I.getHours()},_=(A,T)=>{let I=new Date(d.year,d.month,d.day,d.hour);switch(T){case"years":I.setFullYear(I.getFullYear()-A);break;case"months":I.setMonth(I.getMonth()-A);break;case"days":I.setDate(I.getDate()-A);break;case"hours":I.setHours(I.getHours()-A);break}d.year=I.getFullYear(),d.month=I.getMonth(),d.day=I.getDate(),d.hour=I.getHours()},w=(A="default")=>A==="date"?`${Mn(d.month)} ${d.year}`:`${Mn(d.month)} ${d.day}, ${d.year}`,S=M(()=>{let A=d.month,T=d.year;A>11&&(A=A%11-1,T+=1);let I=[],h=x_(T,A),b=32-new Date(T,A,32).getDate(),C=k_(T,A),$=1;for(let E=0;E<6;E++){let F=[];if(E===0){for(let P=C-h+1;P<=C;P++){let j=A===0?11:A-1,Q=A===0?T-1:T;F.push({day:P,month:j,year:Q,currentMonth:!1})}let H=7-F.length;for(let P=0;P<H;P++)F.push({day:$,month:A,year:T,currentMonth:!0}),$++}else for(let H=0;H<7;H++){if($>b){let P=A===11?0:A+1,j=A===11?T+1:T;F.push({day:$-b,month:P,year:j,currentMonth:!1})}else F.push({day:$,month:A,year:T,currentMonth:!0});$++}I.push(F)}return I});return{visible:e,updateVisible:l,calendarDays:S,formatCalendarDate:o,selectMode:c,updateSelectMode:m,selectType:s,selectedDate:f,setSelectedDate:u,state:d,set:g,add:p,subtract:_,formatDate:w}}const xi=Symbol("useCalendar"),$_=V({directives:{clickoutside:ps},emits:["update:modelValue"],props:{modelValue:null,placeholder:String},setup(e,{emit:l}){const a=B_();ut(xi,a);const{updateVisible:o,selectedDate:s}=a;return pt(s,c=>{l("update:modelValue",c)}),{updateVisible:o}},render(){return Si(t("div",{class:"ui calendar"},[t("div",{class:"ui input left icon"},[t(C_,null,null),t("i",{class:"calendar icon"},null),t(A_,{placeholder:this.placeholder,value:this.modelValue},null)])]),[[mn("clickoutside"),()=>this.updateVisible(!1)]])}}),T_={install:e=>{e.component("SuiCalendar",$_)}},L_=["mini","tiny","small","medium","large","big","huge","massive"],Ll=()=>({size:{type:String,validator:e=>L_.includes(e)}}),Il=e=>({sizeClass:M(()=>e.size)}),I_=V((e,{slots:l})=>{const{loadingClasses:a}=td(e),{sizeClass:o}=Il(e),s=M(()=>te("ui",e.color,v(e.centered,"centered"),v(e.disabled,"disabled"),v(e.fluid,"fluid"),v(e.horizontal,"horizontal"),v(e.link,"link"),v(e.primary,"primary"),v(e.raised,"raised"),v(e.secondary,"secondary"),a.value,o.value,"card"));return()=>{var c,m;return e.href||e.link?t("a",{class:s.value,href:e.href},[(c=l.default)==null?void 0:c.call(l)]):t("div",{class:s.value},[(m=l.default)==null?void 0:m.call(l)])}},{props:{centered:Boolean,color:String,disabled:Boolean,fluid:Boolean,horizontal:Boolean,href:String,link:Boolean,primary:Boolean,raised:Boolean,secondary:Boolean,...ed(),...Ll()}}),D_=V((e,{slots:l})=>{const a=M(()=>te(v(e.extra,"extra"),"content"));return()=>{var o,s,c,m;return t("div",{class:a.value},[e.header&&t("div",{class:"header"},[e.header]),l.header&&t("div",{class:"header"},[(o=l.header)==null?void 0:o.call(l)]),l.meta&&t("div",{class:"meta"},[(s=l.meta)==null?void 0:s.call(l)]),l.description&&t("div",{class:"description"},[(c=l.description)==null?void 0:c.call(l)]),(m=l.default)==null?void 0:m.call(l)])}},{props:{extra:Boolean,header:String}}),E_=V({props:{textAlign:String},setup(e){return{computedClass:M(()=>te(ze(e.textAlign,"aligned"),"description"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),R_=V({props:{basic:Boolean,centered:Boolean,doubling:Boolean,horizontal:Boolean,inverted:Boolean,itemsPerRow:Number,stackable:Boolean},setup(e){return{classes:M(()=>te("ui",v(e.basic,"basic"),v(e.centered,"centered"),v(e.doubling,"doubling"),v(e.horizontal,"horizontal"),v(e.inverted,"inverted"),v(e.stackable,"stackable"),si(e.itemsPerRow,""),"cards"))}},render(){var e,l;return t("div",{class:this.classes},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),z_=V({props:{textAlign:String},setup(e){return{computedClass:M(()=>te(ze(e.textAlign,"aligned"),"header"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),P_=V({render(){var e,l;return X("div",{class:"meta"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),V_={install(e){e.component("SuiCard",I_),e.component("SuiCardContent",D_),e.component("SuiCardDescription",E_),e.component("SuiCardGroup",R_),e.component("SuiCardHeader",z_),e.component("SuiCardMeta",P_)}},id=V({emits:["update:modelValue","change","click"],props:{disabled:Boolean,indeterminate:Boolean,label:String,modelValue:null,radio:Boolean,readOnly:Boolean,slider:Boolean,toggle:Boolean,value:null},setup(e,{emit:l}){const a=M(()=>te("ui",!e.label&&"fitted",v(e.disabled,"disabled"),v(e.indeterminate,"indeterminate"),v(e.radio,"radio"),v(e.readOnly,"read-only"),v(e.slider,"slider"),v(e.toggle,"toggle"),"checkbox")),o=M(()=>Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue);return{computedClass:a,checked:o,onClick:s=>{if(e.disabled||e.readOnly)return;let c;e.value?o.value?c=e.modelValue.filter(m=>e.value!==m):c=e.modelValue?[...e.modelValue,e.value]:[e.value]:c=!e.modelValue,l("change",s),l("click",s),l("update:modelValue",c)}}},render(){return t("div",{class:this.computedClass,onClick:this.onClick},[t("input",{type:this.radio?"radio":"checkbox",class:"hidden",checked:this.checked,readonly:!0},null),t("label",null,[this.label])])}}),F_={install(e){e.component("SuiCheckbox",id)}},ld=V({name:"SuiCommentAvatar",props:{as:String,src:String},render(){let e=this.$props.as||"div";return this.src?X(e,{class:"avatar"},X("img",{src:this.$props.src})):t("div",{class:"avatar"},[this.$slots.default&&this.$slots.default()])}});function M_(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ct(e)}const H_=V({name:"SuiComment",render(){let e;return t("div",{class:"comment"},[this.$slots.avatar&&t(ld,{as:"a"},M_(e=this.$slots.avatar())?e:{default:()=>[e]}),t("div",{class:"content"},[this.$slots.author&&t("a",{class:"author"},[this.$slots.author()]),this.$slots.metadata&&t("div",{class:"metadata"},[this.$slots.metadata()]),this.$slots.text&&t("div",{class:"text"},[this.$slots.text()]),this.$slots.actions&&t("div",{class:"actions"},[this.$slots.actions()])]),this.$slots.default&&this.$slots.default()])}}),N_=V({props:{active:Boolean},setup(e){const{active:l}=e;return{computedClass:M(()=>te(v(l,"active")))}},render(){var e,l,a,o;return this.computedClass?X("a",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e)):X("a",{},(o=(a=this.$slots).default)==null?void 0:o.call(a))}}),O_=V({render(){var e,l;return X("div",{class:"actions"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),q_=V({props:{as:String},render(){var e,l;let a=this.$props.as||"div";return X(a,{class:"author"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),G_=V({render(){var e,l;return X("div",{class:"content"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),j_=V({props:{collapsed:Boolean,inverted:Boolean,minimal:Boolean,size:String,threaded:Boolean},setup(e){return{computedClass:M(()=>te("ui",e.size,v(e.collapsed,"collapsed"),v(e.inverted,"inverted"),v(e.minimal,"minimal"),v(e.threaded,"threaded"),"comments"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),U_=V({render(){var e,l;return X("div",{class:"metadata"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Y_=V({render(){var e,l;return X("div",{class:"text"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),J_={install(e){e.component("SuiComment",H_),e.component("SuiCommentAction",N_),e.component("SuiCommentActions",O_),e.component("SuiCommentAuthor",q_),e.component("SuiCommentAvatar",ld),e.component("SuiCommentContent",G_),e.component("SuiCommentGroup",j_),e.component("SuiCommentMetadata",U_),e.component("SuiCommentText",Y_)}},Hi=V({props:{fluid:Boolean,text:Boolean,textAlign:String},setup(e){return{computedClass:M(()=>te("ui",v(e.fluid,"fluid"),v(e.text,"text"),Tl(e.textAlign),"container"))}},render(){var e,l;return X("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),W_={install(e){e.component("SuiContainer",Hi)}},Ut=V({props:{active:Boolean,inverted:Boolean,page:Boolean,simple:Boolean,verticalAlign:String},setup(e){return{computedClass:M(()=>te("ui",v(e.active,"active"),v(e.inverted,"inverted"),v(e.page,"page"),v(e.simple,"simple"),ze(e.verticalAlign,"aligned"),"dimmer"))}},render(){var e,l;return X("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),K_=V((e,{slots:l})=>{const a=M(()=>te("ui",v(e.blurring,"blurring"),"dimmable","segment"));return()=>{var o;return t("div",{class:a.value},[(o=l.default)==null?void 0:o.call(l)])}},{props:{blurring:Boolean}}),X_={install(e){e.component("SuiDimmer",Ut),e.component("SuiDimmerDimmable",K_)}},Ve=V({props:{clearing:Boolean,fitted:Boolean,hidden:Boolean,horizontal:Boolean,inverted:Boolean,section:Boolean,textAlign:String,vertical:Boolean,...Ll()},setup(e){const{sizeClass:l}=Il(e);return{classes:M(()=>te("ui",l.value,v(e.clearing,"clearing"),v(e.fitted,"fitted"),v(e.hidden,"hidden"),v(e.horizontal,"horizontal"),v(e.inverted,"inverted"),v(e.section,"section"),v(e.vertical,"vertical"),ze(e.textAlign,"aligned"),"divider"))}},render(){var e,l;return X("div",{class:this.classes},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Q_={install(e){e.component("SuiDivider",Ve)}},Z_=(e,l)=>e.map(a=>a[l]),ad=["top","middle","bottom"],eb={verticalAlign:{type:String,validator:e=>ad.includes(e)}};function tb(e){return{verticalAlignClass:M(()=>e.verticalAlign&&ad.includes(e.verticalAlign)?`${e.verticalAlign} aligned`:null)}}const ib=["left","right"],lb={floated:{type:String,validator:e=>ib.includes(e)}};function ab(e){return{floatedClass:M(()=>e.floated&&(e.floated==="left"||e.floated==="right")?`${e.floated} floated`:null)}}const O=V({props:{as:String,attached:String,basic:Boolean,circular:Boolean,color:String,corner:String,empty:Boolean,floating:Boolean,horizontal:Boolean,icon:String,image:Boolean,inverted:Boolean,pointing:[Boolean,String],prompt:Boolean,ribbon:[Boolean,String],size:String,tag:Boolean},setup(e,{slots:l}){const a=M(()=>te("ui",e.size,e.color,v(e.basic,"basic"),v(e.circular,"circular"),v(e.empty,"empty"),v(e.floating,"floating"),v(e.horizontal,"horizontal"),v(!!e.icon&&l.default===void 0,"icon"),v(e.image,"image"),v(e.inverted,"inverted"),v(e.prompt,"prompt"),v(e.tag,"tag"),ze(e.attached,"attached"),ze(e.corner,"corner"),De(e.pointing,"pointing"),De(e.ribbon,"ribbon"),"label"));let o=e.as||"div";return e.icon?()=>{var s;return X(o,{class:a.value},[X(Y,{name:e.icon}),(s=l.default)==null?void 0:s.call(l)])}:()=>{var s;return X(o,{class:a.value},(s=l.default)==null?void 0:s.call(l))}}}),Dl=V({render(){var e,l;return t("div",{class:"detail"},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),El=V({props:{basic:Boolean,circular:Boolean,color:String,size:String,tag:Boolean},setup(e,{slots:l}){const a=M(()=>te("ui",e.color,e.size,v(e.basic,"basic"),v(e.circular,"circular"),v(e.tag,"tag"),"labels"));return()=>{var o;return X("div",{class:a.value},(o=l.default)==null?void 0:o.call(l))}}}),nb={install(e){e.component("SuiLabel",O),e.component("SuiLabelDetail",Dl),e.component("SuiLabelGroup",El)}},oe=V({props:{as:String,avatar:Boolean,bordered:Boolean,centered:Boolean,circular:Boolean,disabled:Boolean,fluid:Boolean,hidden:Boolean,href:String,inline:Boolean,label:Object,target:String,wrapped:Boolean,rounded:Boolean,size:String,spaced:[Boolean,String],src:String,...eb,...lb},setup(e,{slots:l}){const{verticalAlignClass:a}=tb(e),{floatedClass:o}=ab(e),s=M(()=>te("ui",e.size,a.value,o.value,v(e.avatar,"avatar"),v(e.bordered,"bordered"),v(e.centered,"centered"),v(e.circular,"circular"),v(e.disabled,"disabled"),v(e.fluid,"fluid"),v(e.hidden,"hidden"),v(e.inline,"inline"),v(e.rounded,"rounded"),De(e.spaced,"spaced"),"image"));if(e.as==="a"||e.as==="router-link"){let c=e.as;return e.as==="router-link"&&(c=x(e.as)),()=>{var m;return X(c,{class:s.value,href:e.href,target:e.target&&e.target},X("img",{src:e.src},(m=l.default)==null?void 0:m.call(l)))}}return e.wrapped?()=>{var c;return X("div",{class:s.value},X("img",{src:e.src},(c=l.default)==null?void 0:c.call(l)))}:e.label?()=>X("div",{class:s.value},[X("img",{src:e.src}),X(O,{...e.label})]):()=>t("img",{class:s.value,src:e.src},null)}}),yo=V({props:{size:String},setup(e,{slots:l}){const a=M(()=>te("ui",e.size,"images"));return()=>{var o;return X("div",{class:a.value},(o=l.default)==null?void 0:o.call(l))}}}),ob={install(e){e.component("SuiImage",oe),e.component("SuiImageGroup",yo)}},sb=V({name:"SuiDropdownText",emits:["remove"],props:{clearable:Boolean,filtered:Boolean,icon:{type:String,default:"dropdown"},item:[Object,String],placeholder:String,text:String,onRemove:Function},setup(e){return{computedClass:M(()=>te(v(e.filtered,"filtered"),v(!e.text&&!e.item||Array.isArray(e.item)&&e.item.length===0,"default"),"text"))}},render(){var e,l;let a;if(this.item&&!Array.isArray(this.item))if(typeof this.item=="object"){const{flag:c,text:m}=this.item;a=t(Ce,null,[c&&t("i",{class:`${c} flag`},null),m])}else a=this.item;else a=this.text||this.placeholder;const o=typeof this.item=="object"?(e=this.item)==null?void 0:e.image:null,s=typeof this.item=="object"?(l=this.item)==null?void 0:l.label:null;return t(Ce,null,[t("div",{class:this.computedClass},[o&&t(oe,o,null),s&&t(O,s,null),a]),t("i",{class:`${this.icon} icon`},null),this.$props.clearable&&t("i",{class:"remove icon",onClick:Et(()=>this.$emit("remove"),["stop"])},null)])}}),rb=e=>{const l=ni({visible:!1,animating:!1,direction:"down",multiple:e.multiple});return pt(()=>l.visible,()=>{l.animating=!0,setTimeout(()=>l.animating=!1,200)}),{state:l,show:()=>!l.animating&&(l.visible=!0),hide:()=>{l.animating||(l.visible=!1)}}};function ub(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ct(e)}const cb=V({directives:{clickoutside:ps},emits:["update:modelValue"],props:{button:Boolean,clearable:Boolean,compact:Boolean,floating:Boolean,fluid:Boolean,icon:String,inline:Boolean,item:Boolean,labeled:Boolean,modelValue:[Object,String],multiple:Boolean,options:Array,placeholder:String,pointing:[Boolean,String],scrolling:Boolean,selection:Boolean,search:Boolean,searchInMenu:Boolean,simple:Boolean,text:String},setup(e,{emit:l}){const a=rb(e);ut("useDropdown",a);const{state:o,show:s,hide:c}=a,m=M(()=>te("ui",v(e.button,"button"),v(e.clearable,"clearable"),v(e.compact,"compact"),v(e.floating,"floating"),v(e.fluid,"fluid"),v(!!e.icon,"icon"),v(e.inline,"inline"),v(e.item,"item"),v(e.labeled,"labeled"),v(e.multiple,"multiple"),v(e.search,"search"),v(e.scrolling,"scrolling"),v(e.selection,"selection"),v(e.simple,"simple"),De(e.pointing,"pointing"),"dropdown",v(o.visible,"active visible"),v(o.direction==="up","upward"))),f=()=>{var T;if(o.visible)return c();(T=_.value)==null||T.focus(),s()},u=()=>{e.search&&_.value&&_.value.focus(),s()},d=()=>c(),g=G(""),p=M(()=>{const T=g.value.toLowerCase();return e.options.filter(I=>{const h=typeof I=="object"?I.text:I,b=h.toLowerCase().includes(T);if(!e.multiple)return b;if(Array.isArray(e.modelValue)){const C=typeof I=="object"?Z_(e.modelValue,"text").includes(h):e.modelValue.includes(h);return b&&!C}return b})}),_=G(null),w=T=>g.value=T.target.value,S=T=>{var I;if(g.value="",e.search&&((I=_.value)==null||I.focus()),e.multiple){let h=Array.isArray(e.modelValue)?[...e.modelValue,T]:[T];return l("update:modelValue",h)}return l("update:modelValue",T)},A=T=>{if(Array.isArray(e.modelValue)){const I=e.modelValue.findIndex(h=>h===T);if(I>-1){let h=Object.assign(e.modelValue);h.splice(I,1),l("update:modelValue",h)}}};return ut("selection",e.selection),{computedClass:m,onClick:f,openMenu:u,closeMenu:d,filteredText:g,filteredOptions:p,inputRef:_,onInput:w,onSelect:S,removeItem:A}},render(){var e,l;const a=()=>{if(Array.isArray(this.$props.modelValue))return this.$props.modelValue.map(m=>typeof m=="object"?t("a",{class:"ui label"},[m.flag&&t("i",{class:`${m.flag} flag`},null),m.text,t("i",{class:"delete icon",onClick:Et(()=>this.removeItem(m),["stop"])},null)]):t("a",{class:"ui label"},[m,t("i",{class:"delete icon",onClick:Et(()=>this.removeItem(m),["stop"])},null)]))},o=()=>this.filteredOptions.filter(m=>this.$props.multiple&&Array.isArray(this.$props.modelValue)?!this.$props.modelValue.includes(m):!0).map(m=>t(nd,{item:m,active:this.$props.modelValue&&typeof m=="object"?m.text===this.$props.modelValue.text:m===this.$props.modelValue,text:typeof m=="object"?m.text:m,flag:typeof m=="object"&&Object.keys(m).includes("flag")?m.flag:"",image:m.image,label:m.label,disabled:m.disabled,onSelect:this.onSelect},null)),s=()=>{let m={clearable:this.clearable,filtered:this.filteredText.length>0,icon:this.icon,item:this.modelValue,placeholder:this.placeholder,text:this.text};return t(sb,Zi(m,{onRemove:()=>this.$emit("update:modelValue",null)}),null)},c=()=>{let m;return t(od,{search:this.$props.searchInMenu,onSearch:this.onInput},ub(m=o())?m:{default:()=>[m]})};return Si(t("div",{class:this.computedClass,onClick:this.onClick},[this.$props.multiple&&a(),this.search&&t("input",{ref:m=>this.inputRef=m,type:"text",class:"search",autocomplete:"off",tabindex:0,value:this.filteredText,onInput:m=>this.onInput(m)},null),this.search&&this.multiple&&t("span",{class:"sizer"},null),s(),((l=(e=this.$slots).default)==null?void 0:l.call(e))||c()]),[[mn("clickoutside"),this.closeMenu]])}}),nd=V({emits:["select"],props:{active:Boolean,flag:String,description:String,icon:String,image:Object,item:[Object,String],label:Object,text:String,disabled:Boolean,onSelect:Function},setup(e,{emit:l}){const{state:a,hide:o}=Fe("useDropdown");return{computedClass:M(()=>te(v(e.active,"active"),v(e.disabled,"disabled"),"item")),onClick:()=>{a.multiple||o(),l("select",e.item?e.item:e.text)}}},render(){return t("div",{class:this.computedClass,onClick:Et(this.onClick,["stop"])},[this.flag&&t("i",{class:`${this.flag} flag`},null),this.icon&&t("i",{class:`${this.icon} icon`},null),this.image&&t(oe,this.image,null),this.label&&t(O,this.label,null),this.description&&t("span",{class:"description"},[this.description]),this.text])}}),od=V({emits:["search"],props:{search:Boolean,onSearch:Function},setup(e,{emit:l,slots:a}){const{state:o}=Fe("useDropdown"),s=G(null),c=M(()=>{let f=()=>o.visible?`animating slide ${o.direction} in visible`:`animating slide ${o.direction} out visible`;return te("menu","transition",v(o.visible,"visible"),v(!o.visible&&!o.animating,"hidden"),v(o.animating,f()))});pt(()=>o.visible,f=>{if(!f||!s.value)return;let u=s.value.parentElement;const{top:d,height:g}=u==null?void 0:u.getBoundingClientRect(),p=d-m.value.length*37,_=document.documentElement.clientHeight-d-g-m.value.length*37;o.direction=p>_?"up":"down"});const m=M(()=>{var f;let u=[],d=(f=a.default)==null?void 0:f.call(a);return d&&d.forEach(g=>{g.type.name==="SuiSelectItem"&&u.push(g)}),u});return{container:s,computedClass:c,onSearchInput:f=>l("search",f)}},render(){var e,l,a,o;const s=()=>t(Ce,null,[t("div",{class:"ui left icon input",onClick:Et(()=>{},["stop"])},[t("input",{type:"text",onInput:c=>this.onSearchInput(c)},null),t("i",{class:"search icon"},null)]),t("div",{class:"ui divider"},null)]);return t("div",{ref:c=>this.container=c,class:this.computedClass},[this.$slots.header&&t("div",{class:"header"},[(l=(e=this.$slots).header)==null?void 0:l.call(e)]),this.$props.search&&s(),(o=(a=this.$slots).default)==null?void 0:o.call(a)])}}),db={install(e){e.component("SuiDropdown",cb),e.component("SuiDropdownItem",nd),e.component("SuiDropdownMenu",od)}},mb=V({props:{active:Boolean,aspectRatio:Boolean,autoplay:Boolean,id:String,placeholder:String,source:String,url:String},setup(e){const l=G(e.active),a=()=>{l.value=!l.value},o=()=>e.source==="youtube"?[`//www.youtube.com/embed/${e.id}`,"?autohide=true",`&amp;autoplay=${e.autoplay}`,"&amp;jsapi=false"].join(""):e.url,s=M(()=>te("ui",e.aspectRatio,v(l.value,"active"),"embed"));return{active:l,getSrc:o,clickHandler:a,computedClass:s}},render(){let e=[X("i",{class:"video play icon"}),X("img",{class:"placeholder",src:this.placeholder})];return this.active&&e.push(X("div",{class:"embed"},X("iframe",{src:this.getSrc()}))),X("div",{class:this.computedClass,onClick:this.clickHandler},e)}}),pb={install(e){e.component("SuiEmbed",mb)}},It=V({props:{disabled:Boolean,link:Boolean,loading:Boolean,name:String,size:String},setup(e){return{computedClass:M(()=>te(e.size,v(e.disabled,"disabled"),v(e.link,"link"),v(e.loading,"loading")))}},render(){return this.computedClass?X("em",{class:this.computedClass,"data-emoji":this.$props.name}):X("em",{"data-emoji":this.$props.name})}}),fb={install(e){e.component("SuiEmoji",It)}},gb=V({props:{disabled:Boolean,inverted:Boolean,size:String},setup(e,{slots:l}){const a=M(()=>te("ui",e.size,v(e.disabled,"disabled"),v(e.inverted,"inverted"),"feed"));return()=>{var o;return X("div",{class:a.value},(o=l.default)==null?void 0:o.call(l))}}}),hb=V({render(){var e,l;return X("div",{class:"content"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),_b=V({render(){var e,l;return X("div",{class:"date"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),bb=V({props:{disabled:Boolean},setup(e,{slots:l}){const a=M(()=>te(v(e.disabled,"disabled"),"event"));return()=>{var o;return t("div",{class:a.value},[l.label&&t("div",{class:"label"},[l.label()]),(l.summary||l.meta)&&t("div",{class:"content"},[l.summary&&t("div",{class:"summary"},[l.summary()]),l.extraText&&t("div",{class:"extra text"},[l.extraText()]),l.extraImages&&t("div",{class:"extra images"},[l.extraImages()]),l.meta&&t("div",{class:"meta"},[l.meta()])]),(o=l.default)==null?void 0:o.call(l)])}}}),vb=V({props:{images:Boolean,text:Boolean},setup(e){const{images:l,text:a}=e;return{computedClass:M(()=>te(v(l,"images"),v(a,"text"),"extra"))}},render(){var e,l;return X("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Sb=V({render(){var e,l;return X("div",{class:"label"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),yb=V({render(){var e,l;return X("a",{class:"like"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),wb=V({render(){var e,l;return X("div",{class:"meta"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Cb=V({render(){var e,l;return X("div",{class:"summary"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Ab=V({render(){var e,l;return X("a",{class:"user"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),xb={install(e){e.component("SuiFeed",gb),e.component("SuiFeedContent",hb),e.component("SuiFeedDate",_b),e.component("SuiFeedEvent",bb),e.component("SuiFeedExtra",vb),e.component("SuiFeedLabel",Sb),e.component("SuiFeedLike",yb),e.component("SuiFeedMeta",wb),e.component("SuiFeedSummary",Cb),e.component("SuiFeedUser",Ab)}},Yt=V(e=>{const{sizeClass:l}=Il(e),a=M(()=>te(l.value,e.name,"flag"));return()=>t("i",{class:a.value},null)},{props:{name:String,...Ll()}}),kb={install(e){e.component("SuiFlag",Yt)}},Ht=V({props:{error:Boolean,info:Boolean,inverted:Boolean,loading:Boolean,reply:Boolean,success:Boolean,unstackable:Boolean,warning:Boolean,size:String},setup(e){return{classes:M(()=>te("ui",e.size,v(e.error,"error"),v(e.info,"info"),v(e.inverted,"inverted"),v(e.loading,"loading"),v(e.reply,"reply"),v(e.success,"success"),v(e.unstackable,"unstackable"),v(e.warning,"warning"),"form"))}},render(){var e,l;return t("form",{class:this.classes},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Dr=["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"];function Bb(e){return{widthClass:M(()=>Number(e.width)>0?`${Dr[Number(e.width)-1]} wide`:typeof e.width=="string"||Dr.includes(e.width)?`${e.width} wide`:null)}}const it=V({emits:["update:modelValue"],props:{disabled:Boolean,error:Boolean,inline:Boolean,label:String,modelValue:String,placeholder:String,required:Boolean,type:String,width:String||Number},setup(e,{emit:l}){const{widthClass:a}=Bb(e),o=M(()=>te(v(e.disabled,"disabled"),v(e.error,"error"),v(e.inline,"inline"),v(e.required,"required"),a.value,"field")),s=e.type||"text";return{computedClass:o,inputType:s,onInput:c=>l("update:modelValue",c.target.value)}},render(){var e,l;return this.label?t("div",{class:this.computedClass},[t("label",null,[this.label]),t("input",{type:this.inputType,placeholder:this.placeholder,value:this.modelValue,onInput:this.onInput},null)]):t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),fs=V({props:{widths:String},setup(e){return{computedClass:M(()=>te(ze(e.widths,"width"),"fields"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),wo=V({props:{label:String,placeholder:String,rows:[Number,String]},render(){return this.label?t("div",{class:"field"},[t("label",null,[this.label]),t("textarea",{placeholder:this.placeholder,rows:this.rows},null)]):t("div",{class:"field"},[t("textarea",{placeholder:this.placeholder,rows:this.rows},null)])}}),$b={install(e){e.component("SuiForm",Ht),e.component("SuiFormField",it),e.component("SuiFormGroup",fs),e.component("SuiFormTextarea",wo)}},ba=V({props:{celled:[Boolean,String],centered:Boolean,columns:[Number,String],compact:Boolean,container:Boolean,divided:[Boolean,String],doubling:Boolean,inverted:Boolean,padded:[Boolean,String],relaxed:[Boolean,String],reversed:String,stackable:Boolean,textAlign:String,verticalAlign:String},setup(e){return{computedClass:M(()=>te("ui",e.container&&"container",v(e.centered,"centered"),v(e.compact,"compact"),v(e.doubling,"doubling"),v(e.inverted,"inverted"),v(e.stackable,"stackable"),ze(e.reversed,"reversed"),ze(e.verticalAlign,"aligned"),De(e.celled,"celled"),De(e.divided,"divided"),De(e.padded,"padded"),De(e.relaxed,"relaxed"),Tl(e.textAlign),si(e.columns,"column"),"grid"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),$t=V({props:{color:String,computer:Number,floated:String,largeScreen:Number,mobile:Number,only:String,tablet:Number,textAlign:String,width:Number,widescreen:Number},setup(e){return{computedClass:M(()=>te(e.color,ze(e.floated,"floated"),ze(e.only,"only"),Tl(e.textAlign),si(e.width,"wide"),Fl(e.mobile,"mobile"),Fl(e.tablet,"tablet"),Fl(e.computer,"computer"),Fl(e.largeScreen,"large screen"),Fl(e.widescreen,"widescreen"),"column"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Co=V({props:{centered:Boolean,color:String,columns:Number,only:String,stretched:Boolean,textAlign:String},setup(e){return{computedClass:M(()=>te(e.color,v(e.centered,"centered"),v(e.stretched,"stretched"),ze(e.only,"only"),si(e.columns,"column"),Tl(e.textAlign),"row"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Tb={install(e){e.component("SuiGrid",ba),e.component("SuiGridColumn",$t),e.component("SuiGridRow",Co)}},Yi=V({props:{as:String},setup(e){return{elementType:e.as||"div"}},render(){var e,l;return X(this.elementType,{class:"sub header"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),pe=V({components:{HeaderSubheader:Yi},props:{as:String,attached:[Boolean,String],block:Boolean,color:String,content:String,disabled:Boolean,dividing:Boolean,floated:String,icon:Boolean,image:Boolean,inverted:Boolean,primary:Boolean,secondary:Boolean,size:String,sub:Boolean,subheader:String,textAlign:String},setup(e){const l=e.as||"div",a=M(()=>te("ui",e.color,e.size,v(e.primary,"primary"),v(e.secondary,"secondary"),v(e.block,"block"),v(e.disabled,"disabled"),v(e.dividing,"dividing"),v(e.icon,"icon"),v(e.image,"image"),v(e.inverted,"inverted"),v(e.sub,"sub"),ze(e.floated,"floated"),De(e.attached,"attached"),Tl(e.textAlign),"header"));return{elementType:l,computedClass:a}},render(){var e,l;let a=[];return this.content&&a.push(this.content),this.subheader&&a.push(X(Yi,{},this.subheader)),a.length>0?X(this.elementType,{class:this.computedClass},a):X(this.elementType,{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),gs=V({render(){var e,l;return X("div",{class:"content"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Lb={install(e){e.component("SuiHeader",pe),e.component("SuiHeaderContent",gs),e.component("SuiHeaderSubheader",Yi)}},Ze=V({emits:["update:modelValue"],props:{action:String,disabled:Boolean,error:Boolean,fluid:Boolean,focus:Boolean,icon:String,iconPosition:String,inverted:Boolean,label:String,labeled:Boolean,loading:Boolean,modelValue:String,placeholder:String,size:String,transparent:Boolean,type:String},setup(e,{emit:l}){const a=M(()=>typeof e.icon=="string"||e.loading),o=M(()=>!!e.label||e.labeled),s=M(()=>te("ui",e.size,e.action&&"action",v(e.disabled,"disabled"),v(e.error,"error"),v(e.fluid,"fluid"),v(e.focus,"focus"),e.iconPosition,v(a.value,"icon"),v(e.inverted,"inverted"),v(e.loading,"loading"),v(e.transparent,"transparent"),v(o.value,"labeled"),"input")),c=m=>l("update:modelValue",m.target.value);return()=>t("div",{class:s.value},[e.label&&t(O,null,{default:()=>[e.label]}),t("input",{type:e.type||"text",placeholder:e.placeholder,value:e.modelValue,onInput:m=>c(m)},null),a.value&&t(Y,{name:e.icon||"spinner"},null),e.action&&t(z,null,{default:()=>[e.action]})])}}),Ib={install(e){e.component("SuiInput",Ze)}},Db=V({setup(e,{slots:l}){return()=>{var a;return t("div",{class:"item"},[l.image&&t("div",{class:"image"},[l.image()]),(l.header||l.metadata||l.description||l.extra)&&t("div",{class:"content"},[l.header&&t("div",{class:"header"},[l.header()]),l.metadata&&t("div",{class:"meta"},[l.metadata()]),l.description&&t("div",{class:"description"},[l.description()]),l.extra&&t("div",{class:"extra"},[l.extra()])]),(a=l.default)==null?void 0:a.call(l)])}}}),Eb=V({props:{verticalAlign:String},setup(e,{slots:l}){const{verticalAlign:a}=e,o=M(()=>te(ze(a,"aligned"),"content"));return()=>{var s;return t("div",{class:o.value},[(s=l.default)==null?void 0:s.call(l),l.header&&t("div",{class:"header"},[l.header()]),l.metadata&&t("div",{class:"meta"},[l.metadata()]),l.description&&t("div",{class:"description"},[l.description()])])}}}),Rb=V({render(){var e,l;return X("div",{class:"description"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),zb=V({render(){var e,l;return X("div",{class:"extra"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Pb=V({props:{divided:Boolean,inverted:Boolean,link:Boolean,relaxed:[Boolean,String],unstackable:Boolean},setup(e){return{computedClass:M(()=>te("ui",v(e.divided,"divided"),v(e.inverted,"inverted"),v(e.link,"link"),v(e.unstackable,"unstackable"),De(e.relaxed,"relaxed"),"items"))}},render(){var e,l;return X("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Vb=V({props:{as:String},render(){var e,l;let a=this.$props.as||"div";return X(a,{class:"header"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Fb=V({props:{size:String},setup(e){return{computedClass:M(()=>te(e.size,"image"))}},render(){var e,l;return X("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Mb=V({render(){var e,l;return X("div",{class:"meta"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Hb={install(e){e.component("SuiItem",Db),e.component("SuiItemContent",Eb),e.component("SuiItemDescription",Rb),e.component("SuiItemExtra",zb),e.component("SuiItemGroup",Pb),e.component("SuiItemHeader",Vb),e.component("SuiItemImage",Fb),e.component("SuiItemMeta",Mb)}},sd=V((e,{slots:l})=>{const{sizeClass:a}=Il(e),o=M(()=>te("ui",v(e.animated,"animated"),v(e.bulleted,"bulleted"),v(e.celled,"celled"),v(e.divided,"divided"),v(e.horizontal,"horizontal"),v(e.inverted,"inverted"),v(e.link,"link"),v(e.ordered,"ordered"),v(e.relaxed,"relaxed"),v(e.selection,"selection"),ze(e.verticalAlign,"aligned"),ze(e.floated,"floated"),a.value,"list"));let s=e.as||"div";return()=>{var c;return X(s,{class:o.value},(c=l.default)==null?void 0:c.call(l))}},{props:{animated:Boolean,as:String,bulleted:Boolean,celled:Boolean,divided:Boolean,floated:String,horizontal:Boolean,inverted:Boolean,ordered:Boolean,relaxed:Boolean,link:Boolean,selection:Boolean,verticalAlign:String,...Ll()}}),Ol=V((e,{slots:l})=>{const a=M(()=>te(v(e.active,"active"),v(e.disabled,"disabled"),"item"));let o=e.as||"div";return()=>{var s;return X(o,{class:a.value},(s=l.default)==null?void 0:s.call(l))}},{props:{active:Boolean,as:String,disabled:Boolean}}),Nb=V({setup(e,{slots:l}){return()=>{var a;return X(Y,{...e},(a=l.default)==null?void 0:a.call(l))}}}),Ob=V({props:{verticalAlign:String},setup(e){return{computedClass:M(()=>te(ze(e.verticalAlign,"aligned"),"content"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),qb=V({props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:l}){return()=>{var a;return X(e.as,{class:"header"},(a=l.default)==null?void 0:a.call(l))}}}),Gb=V({props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:l}){return()=>{var a;return X(e.as,{class:"description"},(a=l.default)==null?void 0:a.call(l))}}}),jb=V({render(){var e,l;return t("div",{class:"list"},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Ub={install(e){e.component("SuiList",sd),e.component("SuiListItem",Ol),e.component("SuiListIcon",Nb),e.component("SuiListContent",Ob),e.component("SuiListHeader",qb),e.component("SuiListDescription",Gb),e.component("SuiListList",jb)}},Qa=V({props:{action:Boolean,active:Boolean,as:String,browse:Boolean,color:String,disabled:Boolean,fitted:[Boolean,String],header:Boolean,icon:Boolean,index:Number,link:Boolean,name:String,position:String,stackable:Boolean},emits:["selected"],setup(e,{slots:l,emit:a}){let o=e.as||"a";e.header&&(o="div"),e.as==="router-link"&&(o=x(e.as));const s=M(()=>te(e.color,e.position,v(e.action,"action"),v(e.active,"active"),v(e.browse,"browse"),v(e.disabled,"disabled"),v(e.header,"header"),v(e.icon,"icon"),v(e.link,"link"),De(e.fitted,"fitted"),"item")),c=M(()=>!e.header&&!e.disabled&&e.as!=="div");return()=>t(o,{class:s.value,onClick:()=>c.value&&a("selected",e.index)},{default:()=>{var m;return[e.name||((m=l.default)==null?void 0:m.call(l))]}})}}),rd=V({props:{attached:[Boolean,String],borderless:Boolean,color:Boolean,compact:Boolean,fixed:Boolean,floated:[Boolean,String],fluid:Boolean,icon:[Boolean,String],inverted:Boolean,items:Array,pagination:Boolean,pointing:Boolean,secondary:Boolean,size:String,stackable:Boolean,tabular:[Boolean,String],text:Boolean,vertical:Boolean,widths:Number},emits:["selected"],setup(e,{slots:l,emit:a}){const o=G(-1),s=M(()=>te("ui",e.color,e.size,v(e.borderless,"borderless"),v(e.compact,"compact"),v(e.fixed,"fixed"),v(e.fluid,"fluid"),v(e.inverted,"inverted"),v(e.pagination,"pagination"),v(e.pointing,"pointing"),v(e.secondary,"secondary"),v(e.stackable,"stackable"),v(e.text,"text"),v(e.vertical,"vertical"),De(e.attached,"attached"),De(e.floated,"floated"),De(e.icon,"icon"),De(e.tabular,"tabular"),si(e.widths,"item"),"menu")),c=u=>typeof u=="string"?u:u.text,m=(u,d)=>{if(typeof u!="string")return u[d]},f=(u,d)=>{o.value=u,a("selected",d)};return()=>t("div",{class:s.value},[l.default&&l.default(),e.items&&e.items.map((u,d)=>t(Qa,{index:d,active:d===o.value,as:typeof u!="string"?m(u,"as"):void 0,color:m(u,"color"),header:typeof u!="string"&&u.header,onSelected:g=>f(g,u)},{default:()=>[typeof u!="string"&&u.icon&&t(Y,{name:u.icon},null),c(u)]})),l.right&&t("div",{class:"right menu"},[l.right()])])}}),Yb=V({props:{as:String,content:String},setup(e,{slots:l}){let a=e.as||"div";return()=>t(a,{class:"header"},{default:()=>{var o;return[e.content||((o=l.default)==null?void 0:o.call(l))]}})}}),Jb=V({props:{position:String},setup(e){const{position:l}=e;return{computedClass:M(()=>te(l,"menu"))}},render(){var e,l;return X("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Wb={install(e){e.component("SuiMenu",rd),e.component("SuiMenuHeader",Yb),e.component("SuiMenuItem",Qa),e.component("SuiMenuMenu",Jb)}},An=V({props:{attached:[Boolean,String],aligned:String,color:String,closable:Boolean,compact:Boolean,content:String,header:String,error:Boolean,floating:Boolean,hidden:Boolean,icon:[Boolean,String],info:Boolean,list:Array,negative:Boolean,positive:Boolean,size:String,success:Boolean,visible:Boolean,warning:Boolean},emits:["close"],setup(e,{emit:l,slots:a}){const o=M(()=>te("ui",e.color,e.size,v(e.compact,"compact"),v(e.error,"error"),v(e.floating,"floating"),v(e.hidden,"hidden"),v(!!e.icon,"icon"),v(e.info,"info"),v(e.negative,"negative"),v(e.positive,"positive"),v(e.success,"success"),v(e.visible,"visible"),v(e.warning,"warning"),ze(e.aligned,"aligned"),De(e.attached,"attached"),"message")),s=G(),c=()=>{var m;const f=(m=s.value)==null?void 0:m.animate([{opacity:1},{opacity:0}],200);f&&(f.onfinish=()=>{var u;return(u=s.value)==null?void 0:u.classList.add("hidden")},l("close"))};return()=>{var m,f;return t("div",{ref:s,class:o.value},[e.closable&&t("i",{class:"close icon",onClick:c},null),typeof e.icon=="string"&&t(Y,{name:e.icon},null),(m=a.default)==null?void 0:m.call(a),(e.content||a.content||e.header||e.list)&&t("div",{class:"content"},[e.header&&t("div",{class:"header"},[e.header]),e.content&&t("p",null,[e.content]),(f=a.content)==null?void 0:f.call(a),Array.isArray(e.list)&&t("ul",{class:"list"},[e.list.map((u,d)=>t("li",{key:d},[u]))])])])}}}),Kb=V({render(){var e,l;return X("div",{class:"content"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Xb=V({render(){var e,l;return X("div",{class:"header"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Qb=V({render(){var e,l;return X("li",{class:"content"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Zb=V({render(){var e,l;return X("ul",{class:"list"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),ev={install(e){e.component("SuiMessage",An),e.component("SuiMessageContent",Kb),e.component("SuiMessageHeader",Xb),e.component("SuiMessageItem",Qb),e.component("SuiMessageList",Zb)}};function tv(e){return Po()?(Wr(e),!0):!1}function ud(e){return typeof e=="function"?e():r(e)}const cd=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const iv=Object.prototype.toString,lv=e=>iv.call(e)==="[object Object]",Fa=()=>{},av=nv();function nv(){var e,l;return cd&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((l=window==null?void 0:window.navigator)==null?void 0:l.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function ql(e){var l;const a=ud(e);return(l=a==null?void 0:a.$el)!=null?l:a}const dd=cd?window:void 0;function Hn(...e){let l,a,o,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([a,o,s]=e,l=dd):[l,a,o,s]=e,!l)return Fa;Array.isArray(a)||(a=[a]),Array.isArray(o)||(o=[o]);const c=[],m=()=>{c.forEach(g=>g()),c.length=0},f=(g,p,_,w)=>(g.addEventListener(p,_,w),()=>g.removeEventListener(p,_,w)),u=pt(()=>[ql(l),ud(s)],([g,p])=>{if(m(),!g)return;const _=lv(p)?{...p}:p;c.push(...a.flatMap(w=>o.map(S=>f(g,w,S,_))))},{immediate:!0,flush:"post"}),d=()=>{u(),m()};return tv(d),d}let Er=!1;function ov(e,l,a={}){const{window:o=dd,ignore:s=[],capture:c=!0,detectIframe:m=!1}=a;if(!o)return Fa;av&&!Er&&(Er=!0,Array.from(o.document.body.children).forEach(g=>g.addEventListener("click",Fa)),o.document.documentElement.addEventListener("click",Fa));let f=!0;const u=g=>s.some(p=>{if(typeof p=="string")return Array.from(o.document.querySelectorAll(p)).some(_=>_===g.target||g.composedPath().includes(_));{const _=ql(p);return _&&(g.target===_||g.composedPath().includes(_))}}),d=[Hn(o,"click",g=>{const p=ql(e);if(!(!p||p===g.target||g.composedPath().includes(p))){if(g.detail===0&&(f=!u(g)),!f){f=!0;return}l(g)}},{passive:!0,capture:c}),Hn(o,"pointerdown",g=>{const p=ql(e);f=!u(g)&&!!(p&&!g.composedPath().includes(p))},{passive:!0}),m&&Hn(o,"blur",g=>{setTimeout(()=>{var p;const _=ql(e);((p=o.document.activeElement)==null?void 0:p.tagName)==="IFRAME"&&!(_!=null&&_.contains(o.document.activeElement))&&l(g)},0)})].filter(Boolean);return()=>d.forEach(g=>g())}function md(e,l="scale"){const a=G(e.modelValue?"open":"closed");return pt(()=>e.modelValue,o=>{a.value=o?"opening":"closing"}),{animationClasses:M(()=>{switch(a.value){case"opening":return`animating ${l} in`;case"open":return"visible active";case"closing":return`visible active animating ${l} out`;case"closed":return"hidden"}}),isClosed:M(()=>a.value==="closed"),onAnimationEnd:()=>a.value=e.modelValue?"open":"closed"}}const sv=V({props:{blurring:Boolean,inverted:Boolean,modelValue:Boolean},setup(e){const{animationClasses:l,isClosed:a,onAnimationEnd:o}=md(e,"fade"),s=M(()=>te("ui","page modals dimmer transition",v(e.inverted,"inverted"),l.value)),c=M(()=>({display:a.value?"none !important":"flex !important",animationDuration:"500ms"})),m=M(()=>te("dimmable","dimmed",v(e.blurring,"blurring")));return pt(()=>e.modelValue,f=>{if(f){document.body.classList.add(...m.value.split(" "));return}document.body.classList.remove(...m.value.split(" "))}),{className:s,style:c,onAnimationEnd:o}},render(){var e,l;return t("div",{class:this.className,style:this.style,onAnimationend:this.onAnimationEnd},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),hs=V({props:{basic:Boolean,closeIcon:Boolean,dimmer:String,modelValue:Boolean,size:String,closable:{type:Boolean,default:!0},overlay:Boolean,fullscreen:Boolean},setup(e,{emit:l}){const a=G(),{animationClasses:o,isClosed:s}=md(e),c=M(()=>te("ui",e.size,v(e.basic,"basic"),v(e.overlay,"overlay"),v(e.fullscreen,"fullscreen"),"modal","transition",o.value)),m=M(()=>({display:s.value?"none !important":"block !important",animationDuration:"500ms"})),f=()=>l("update:modelValue",!1);return ov(a,()=>e.closable&&l("update:modelValue",!1)),{computedClass:c,style:m,close:f,modalRef:a}},render(){return t(_n,{to:"body"},{default:()=>[t(sv,{blurring:this.dimmer==="blurring",inverted:this.dimmer==="inverted",modelValue:this.modelValue},{default:()=>{var e,l;return[t("div",{class:this.computedClass,style:this.style,onClick:a=>a.stopPropagation(),ref:a=>this.modalRef=a},[this.closeIcon&&t("i",{"aria-hidden":"true",class:"close icon",onClick:this.close},null),(l=(e=this.$slots).default)==null?void 0:l.call(e)])]}})]})}}),_s=V({render(){var e,l;return t("div",{class:"actions"},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),bs=V({props:{image:Boolean,scrolling:Boolean},setup(e){return{computedClass:M(()=>te(v(e.image,"image"),v(e.scrolling,"scrolling"),"content"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),pd=V({render(){var e,l;return X("div",{class:"description"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),vs=V({render(){var e,l;return X("div",{class:"header"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),rv={install(e){e.component("SuiModal",hs),e.component("SuiModalActions",_s),e.component("SuiModalContent",bs),e.component("SuiModalDescription",pd),e.component("SuiModalHeader",vs)}},uv=e=>{const l=G(!1),a=Qn(e,"position"),o=G(null),s=Qn(e,"trigger"),c=()=>{l.value=!0,Bl(()=>f())},m=()=>{l.value=!1},f=()=>{if(!o.value||!s.value)return;let u=0,d=0;const g=o.value,p=s.value.$el;g.style.transform=`translate(${u}px, ${d}px)`;const{top:_,left:w,width:S,height:A}=p.getBoundingClientRect(),T=g.getBoundingClientRect(),{pageXOffset:I,pageYOffset:h}=window;if(a.value.includes("top")?(u=I+w,d=h+_-g.offsetTop-g.offsetHeight):(u=w,d=_+A-T.top),a.value.includes("right")){const b=S-T.width;u=w+b}if(a.value.includes("center")){const b=S/2-T.width/2;u=w+b}a.value==="right center"&&(u=w+S,d=_+A/2-T.top-T.height/2),a.value==="left center"&&(u=w-T.width,d=_+A/2-T.top-T.height/2),g.style.display="flex",g.style.position="absolute",g.style.transform=`translate(${u}px, ${d}px)`};return{show:l,showPopup:c,hidePopup:m,placement:a,popupRef:o,triggerRef:s}},cv=V({props:{basic:Boolean,content:String,flowing:Boolean,header:String,inverted:Boolean,position:{type:String,default:"top left"},size:String,trigger:Object,wide:[Boolean,String]},setup(e,{slots:l}){const{show:a,showPopup:o,hidePopup:s,popupRef:c,triggerRef:m}=uv(e);Xo(()=>{var _,w,S;(_=m.value)!=null&&_.$el&&((w=m.value)==null||w.$el.addEventListener("mouseenter",o),(S=m.value)==null||S.$el.addEventListener("mouseleave",s))});const f=G(a.value?"open":"close");M(()=>f.value!=="closed"),pt(()=>a.value,_=>{f.value=_?"opening":"closing"});const u=(_,w="scale")=>{switch(_){case"opening":return`animating ${w} in`;case"open":return"visible active";case"closing":return`visible active animating ${w} out`;case"closed":return"hidden"}},d=()=>f.value=a.value?"open":"closed";Ai(()=>{var _;(_=c.value)==null||_.addEventListener("animationend",d,!0)}),Qi(()=>{var _;(_=c.value)==null||_.removeEventListener("animationend",d)});const g={position:"initial",animationDuration:"200ms"},p=M(()=>te("ignored ui",e.position,e.size,v(e.basic,"basic"),v(e.flowing,"flowing"),v(e.inverted,"inverted"),De(e.wide,"wide"),"popup transition",u(f.value,"scale")));return()=>t(_n,{to:"body"},{default:()=>{var _;return[t("div",{ref:c,style:"display: flex; position: absolute; transform: translate(0px, 0px);"},[t("div",{class:p.value,style:g},[e.header&&t("div",{class:"header"},[e.header]),t("div",{class:"content"},[e.content?e.content:(_=l.default)==null?void 0:_.call(l)])])])]}})}}),dv={install(e){e.component("SuiPopup",cv)}},mv=["top","bottom","left"],Ss=()=>({attached:{type:String,validator:e=>mv.includes(e)}}),fd=e=>({attachedClasses:M(()=>te(e.attached,{attached:e.attached}))}),pv=["red","orange","yellow","olive","green","teal","blue","purple","violet","pink","brown","grey","black"],ys=()=>({color:{type:String,validator:e=>pv.includes(e)}}),ws=e=>({colorClasses:M(()=>te(e.inverted&&"inverted",e.color))}),Ao=V({props:{active:Boolean,disabled:Boolean,error:Boolean,indeterminate:[Boolean,String],indicating:Boolean,inverted:Boolean,label:String,percent:Number,progress:[Boolean,String],size:String,success:Boolean,warning:Boolean,...Ss(),...ys()},setup(e,{slots:l}){const{attachedClasses:a}=fd(e),{colorClasses:o}=ws(e),s=M(()=>te("ui",o.value,e.size,v(e.active||e.indicating,"active"),v(e.disabled,"disabled"),v(e.error,"error"),v(e.indicating,"indicating"),v(e.success,"success"),v(e.warning,"warning"),De(e.indeterminate,"indeterminate"),a.value,"progress")),c=M(()=>te(De(e.progress,"progress"))),m=M(()=>e.progress!=="centered"?{}:{right:0});return()=>{var f;return t("div",{class:s.value,"data-percent":e.percent},[t("div",{class:"bar",style:`width: ${e.percent}%; transition-duration: 300ms;`},[e.progress&&t("div",{class:c.value,style:m.value},[((f=l.default)==null?void 0:f.call(l))||`${e.percent}%`])]),e.label&&t("div",{class:"label"},[e.label])])}}}),fv={install(e){e.component("SuiProgress",Ao)}},gv=V({props:{attached:Boolean,close:[Boolean,String],dividing:Boolean,internal:Boolean,position:String,size:String},setup(e){return{computedClass:M(()=>te("ui",e.position,e.size,v(e.attached,"attached"),v(e.dividing,"dividing"),v(e.internal,"internal"),De(e.close,"close"),"rail"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),hv={install(e){e.component("SuiRail",gv)}},_v=V({props:{icon:String,index:{type:Number,default:0}},setup(e){const l=Fe("rating",G(0)),a=Fe("updateRating"),o=Fe("selectedIndex",G(0)),s=Fe("updateSelectedIndex"),c=Fe("clearable",!1),m=Fe("disabled",!1),f=()=>{if(!m){if(c&&e.index===l.value){a(0),s(0);return}a(e.index)}},u=()=>{m||s(e.index)},d=M(()=>e.index<=l.value),g=M(()=>e.index<=o.value),p=M(()=>te(e.icon,v(d.value,"active"),v(g.value,"selected"),"icon"));return()=>t("i",{class:p.value,onClick:()=>f(),onMouseenter:()=>u()},null)}}),bv=V({props:{clearable:Boolean,color:String,defaultRating:{type:Number,default:0},disabled:Boolean,icon:{type:String,default:"star"},maxRating:{type:Number,default:1},modelValue:Number,size:String},setup(e,{emit:l}){const a=G(e.modelValue||e.defaultRating),o=G(!1),s=G(0),c=g=>{a.value=g,l("update:modelValue",g),l("change",g)},m=g=>s.value=g,f=()=>{e.disabled||(o.value=!0)},u=()=>{e.disabled||(o.value=!1,m(0))},d=M(()=>te("ui",e.color,e.icon,e.size,v(e.disabled,"disabled"),"rating",v(o.value,"selected")));return ut("rating",a),ut("updateRating",c),ut("selectedIndex",s),ut("updateSelectedIndex",m),ut("clearable",e.clearable),ut("disabled",e.disabled),()=>t("div",{class:d.value,onMouseenter:()=>f(),onMouseleave:()=>u()},[[...Array(e.maxRating)].map((g,p)=>t(_v,{icon:e.icon,index:p+1},null))])}}),vv={install(e){e.component("SuiRating",bv)}},el=V({props:{active:Boolean,animated:String,disabled:Boolean,instant:Boolean},setup(e){return{computedClass:M(()=>te("ui",e.animated,v(e.active,"active"),v(e.disabled,"disabled"),v(e.instant,"instant"),"reveal"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Rt=V({props:{visible:Boolean,hidden:Boolean},setup(e){return{computedClass:M(()=>te("ui",v(e.visible,"visible"),v(e.hidden,"hidden"),"content"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Sv={install(e){e.component("SuiReveal",el),e.component("SuiRevealContent",Rt)}},yv=V({props:{icon:String,placeholder:String},setup(e){return()=>t("div",{class:"ui search"},[t("div",{class:"ui icon input"},[t("input",{type:"text",class:"prompt",placeholder:e.placeholder},null),t("i",{class:"search icon"},null)]),t("div",{class:"results"},null)])}}),wv={install(e){e.component("SuiSearch",yv)}},N=V((e,{slots:l})=>{const{colorClasses:a}=ws(e),{sizeClass:o}=Il(e),s=M(()=>te("ui",a.value,o.value,v(e.basic,"basic"),v(e.circular,"circular"),v(e.clearing,"clearing"),v(e.compact,"compact"),v(e.disabled,"disabled"),v(e.inverted,"inverted"),v(e.loading,"loading"),v(e.piled,"piled"),v(e.placeholder,"placeholder"),v(e.raised,"raised"),v(e.secondary,"secondary"),v(e.stacked,"stacked"),v(e.tertiary,"tertiary"),v(e.vertical,"vertical"),ze(e.floated,"floated"),ze(e.textAlign,"aligned"),De(e.attached,"attached"),De(e.fitted,"fitted"),De(e.padded,"padded"),De(e.scrolling,"scrolling"),"segment"));return()=>{var c;return t("div",{class:s.value},[(c=l.default)==null?void 0:c.call(l)])}},{props:{attached:[Boolean,String],basic:Boolean,circular:Boolean,clearing:Boolean,compact:Boolean,disabled:Boolean,fitted:[Boolean,String],floated:String,inverted:Boolean,loading:Boolean,padded:[Boolean,String],piled:Boolean,placeholder:Boolean,raised:Boolean,scrolling:[Boolean,String],secondary:Boolean,stacked:Boolean,tertiary:Boolean,textAlign:String,vertical:Boolean,...ys(),...Ll()}}),yt=V((e,{slots:l})=>{const{sizeClass:a}=Il(e),o=M(()=>te("ui",a.value,v(e.basic,"basic"),v(e.compact,"compact"),v(e.horizontal,"horizontal"),v(e.piled,"piled"),v(e.raised,"raised"),v(e.stacked,"stacked"),"segments"));return()=>{var s;return t("div",{class:o.value},[(s=l.default)==null?void 0:s.call(l)])}},{props:{basic:Boolean,compact:Boolean,horizontal:Boolean,piled:Boolean,raised:Boolean,stacked:Boolean,...Ll()}}),Cv=V({render(){var e,l;return t("div",{class:"inline"},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Av={install(e){e.component("SuiSegment",N),e.component("SuiSegmentGroup",yt),e.component("SuiSegmentInline",Cv)}},xv=V({directives:{clickoutside:ps},emits:["update:visible","show","hide"],props:{animation:{type:String,default:"overlay"},dimmed:Boolean,direction:{type:String,default:"left"},icon:[Boolean,String],inverted:Boolean,visible:Boolean},setup(e,{emit:l}){const a=ni({animating:!1}),o=M(()=>{const s=e.direction==="right"||e.direction==="left";return te("ui","sidebar",e.direction,e.animation,v(e.inverted,"inverted"),v(e.visible,"visible"),v(a.animating,"animating"),v(s,"vertical"),De(e.icon,"icon"),"menu")});return pt(()=>e.visible,()=>{if(a.animating=!0,setTimeout(()=>a.animating=!1,500),e.dimmed){const s=document.querySelector(".pusher");s&&s.classList.toggle("dimmed")}}),{computedClass:o,onClickPusher:s=>{const c=s.path||s.composedPath&&s.composedPath();c&&c.find(m=>m.classList&&m.classList.contains("pusher"))&&e.visible&&l("update:visible",!1)}}},render(){var e,l;return Si(t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)]),[[mn("clickoutside"),this.onClickPusher]])}}),kv={install:e=>{e.component("SuiSidebar",xv)}};class Nn{static getWindowScrollTop(){let{documentElement:l}=document;return(window.pageYOffset||l.scrollTop)-(l.clientTop||0)}static getWindowScrollLeft(){let{documentElement:l}=document;return(window.pageXOffset||l.scrollLeft)-(l.clientLeft||0)}static hasClass(l,a){return l.classList.contains(a)}}const Bv=V({emits:["change","slideend","update:modelValue"],props:{color:String,disabled:Boolean,inverted:Boolean,labeled:[Boolean,String],labels:Array,max:{type:Number,default:10},min:{type:Number,default:0},modelValue:{type:[Number,Array],default:0},range:Boolean,reversed:Boolean,size:String,step:{type:Number,default:1},vertical:Boolean,verticalHeight:{type:[Number,String],default:200}},setup(e,{emit:l}){const a=M(()=>te("ui",e.color,e.size,v(e.disabled,"disabled"),v(e.inverted,"inverted"),v(e.reversed,"reversed"),v(e.vertical,"vertical"),De(e.labeled,"labeled"),"slider")),o=()=>100*(e.modelValue[0]-e.min)/(e.max-e.min),s=()=>100*(e.modelValue[1]-e.min)/(e.max-e.min),c=M(()=>{if(e.range)return e.reversed&&!e.vertical?{right:o()+"%",width:s()-o()+"%"}:e.vertical?e.reversed?{bottom:o()+"%",height:s()-o()+"%"}:{top:o()+"%",height:s()-o()+"%"}:{left:o()+"%",width:s()-o()+"%"};let U=e.modelValue>e.max?e.max:e.modelValue;return e.reversed?e.vertical?{bottom:"0%",top:`${100-(U-e.min)/(e.max-e.min)*100}%`}:{right:"0%",left:`${100-(U-e.min)/(e.max-e.min)*100}%`}:e.vertical?{top:"0%",bottom:`${100-(U-e.min)/(e.max-e.min)*100}%`}:{left:"0%",right:`${100-(U-e.min)/(e.max-e.min)*100}%`}}),m=M(()=>{let U=e.range?e.modelValue[0]:e.modelValue>e.max?e.max:e.modelValue;return!e.reversed&&e.vertical?{top:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:e.reversed&&e.vertical?{top:"auto",bottom:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.reversed&&!e.vertical?{left:"auto",right:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{left:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),f=M(()=>{let U=e.modelValue[1]>e.max?e.max:e.modelValue[1];return e.reversed&&!e.vertical?{left:"auto",right:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.vertical?e.reversed?{top:"auto",bottom:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{top:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:{left:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),u=M(()=>e.labels?e.labels:[...Array(e.max-e.min+1)].map((U,K)=>K*e.step+e.min)),d=()=>{var U,K;let de=1,le=g(),Le=(e.vertical?(U=_.value)==null?void 0:U.clientHeight:(K=_.value)==null?void 0:K.clientWidth)||0,Je=1;if(Le>0)for(;Le/le*Je<100;)le%Je||(de=Je),Je+=1;return de},g=()=>Math.round((e.max-e.min)/e.step),p=G(null),_=G(null),w=G(0),S=G(0),A=G(0),T=G(0),I=()=>{if(!p.value)return;let U=p.value.getBoundingClientRect();w.value=U.left+Nn.getWindowScrollLeft(),S.value=U.top+Nn.getWindowScrollTop(),A.value=p.value.offsetWidth,T.value=p.value.offsetHeight},h=G(0),b=U=>{let{pageX:K,pageY:de}=U.touches?U.touches[0]:U,le,Le;e.vertical?le=(S.value+T.value-de)*100/T.value:le=(K-w.value)*100/A.value,Le=(e.max-e.min)*(le/100)+e.min;const Je=e.range?e.modelValue[h.value]:e.modelValue||0;Le=Je+Math.round(Le/e.step-Je/e.step)*e.step,e.reversed&&(Le=e.max-Le+e.min),e.vertical&&(Le=e.max-Le+e.min),C(Le)},C=U=>{let K=U,de;if(e.range)if(de=e.modelValue?[...e.modelValue]:[],h.value===0){let le=e.modelValue?e.modelValue[1]:e.max;K<e.min?K=e.min:K>le&&(K=le),de[0]=K,de[1]=de[1]||e.max}else{let le=e.modelValue?e.modelValue[0]:e.min;K>e.max?K=e.max:K<le&&(K=le),de[0]=de[0]||e.min,de[1]=K}else K<e.min&&(K=e.min),K>e.max&&(K=e.max),de=K;l("update:modelValue",de),l("change",de)},$=G(!1),E=U=>$.value=U,F=(U,K=0)=>{E(!0),I(),h.value=K,U.preventDefault()},H=U=>{$.value&&(E(!1),document.removeEventListener("mousemove",P),l("slideend",{event:U,value:e.modelValue}))},P=U=>{$.value&&(b(U),U==null||U.preventDefault())},j=(U,K=0)=>{e.disabled||(F(U,K),document.addEventListener("mousemove",P),document.addEventListener("mouseup",H),U.preventDefault())},Q=(U,K=0)=>{switch(h.value=K,U.code){case"ArrowUp":e.vertical&&(e.reversed?J():fe()),U.preventDefault();break;case"ArrowDown":e.vertical&&(e.reversed?fe():J()),U.preventDefault();break;case"ArrowRight":e.reversed?fe():J(),U.preventDefault();break;case"ArrowLeft":e.reversed?J():fe(),U.preventDefault();break}},J=()=>{let U=0;e.range?U=e.modelValue[h.value]+e.step:U=e.modelValue+e.step,C(U)},fe=()=>{let U=0;e.range?U=e.modelValue[h.value]-e.step:U=e.modelValue-e.step,C(U)},Be=U=>{if(!e.disabled&&!Nn.hasClass(U.target,"thumb")){if(e.range){let K=(e.vertical?U.offsetY/U.target.clientHeight:U.offsetX/U.target.clientWidth)*100,de=(o()+s())/2;K<de?h.value=e.reversed?1:0:h.value=e.reversed?0:1}I(),b(U)}};return()=>t("div",{ref:U=>p.value=U,class:a.value,style:e.vertical?`height: ${e.verticalHeight}px;`:""},[t("div",{class:"inner",onClick:Be},[t("div",{class:"track",ref:U=>_.value=U},null),t("div",{class:"track-fill",style:c.value},null),t("div",{class:"thumb",style:m.value,onMousedown:U=>j(U),onTouchstart:U=>F(U),onTouchmove:U=>P(U),onTouchend:U=>H(U),onKeydown:U=>Q(U),tabindex:0},null),e.range&&t("div",{class:"thumb second",style:f.value,onMousedown:U=>j(U,1),onTouchstart:U=>F(U,1),onTouchmove:U=>P(U),onTouchend:U=>H(U),onKeydown:U=>Q(U,1),tabindex:0},null)]),e.labeled&&t("ul",{class:"auto labels"},[[...Array(g()+1)].map((U,K)=>{let de=K/g();return K%d()?t("li",{class:"halftick label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${de} + 7px);`},null):t("li",{class:"label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${de} + 7px);`},[e.reversed&&!e.vertical?e.labels?e.labels[g()-K]:u.value[g()-K]:e.labels?e.labels[K]:u.value[K]])})])])}}),$v={install(e){e.component("SuiSlider",Bv)}},xo=V({props:{content:String},render(){var e,l;return this.$props.content?X("div",{class:"label"},this.$props.content):X("div",{class:"label"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),ko=V({props:{content:String,text:Boolean},setup(e){return{computedClass:M(()=>te(v(e.text,"text"),"value"))}},render(){var e,l;return this.$props.content?X("div",{class:this.computedClass},this.$props.content):X("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Tv=V({components:{StatisticLabel:xo,StatisticValue:ko},props:{color:String,floated:[Boolean,String],fluid:Boolean,horizontal:Boolean,inverted:Boolean,label:String,size:String,text:Boolean,value:String},setup(e){const l=Fe("ui",!0);return{computedClass:M(()=>te(l&&"ui",e.color,e.size,v(e.fluid,"fluid"),v(e.horizontal,"horizontal"),v(e.inverted,"inverted"),v(e.text,"text"),De(e.floated,"floated"),"statistic"))}},render(){var e,l,a,o,s,c;let m=[];return this.$props.value&&m.push(X(ko,{content:this.$props.value},(l=(e=this.$slots).default)==null?void 0:l.call(e))),this.$props.label&&m.push(X(xo,{content:this.$props.label},(o=(a=this.$slots).default)==null?void 0:o.call(a))),X("div",{class:this.computedClass},m.length>0?m:(c=(s=this.$slots).default)==null?void 0:c.call(s))}}),Lv=V({props:{color:String,horizontal:Boolean,inverted:Boolean,size:String,stackable:Boolean,widths:Number},setup(e){return ut("ui",!1),{classes:M(()=>te("ui",e.color,e.size,v(e.horizontal,"horizontal"),v(e.inverted,"inverted"),v(e.stackable,"stackable"),si(e.widths,""),"statistics"))}},render(){var e,l;return X("div",{class:this.classes},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Iv={install(e){e.component("SuiStatistic",Tv),e.component("SuiStatisticGroup",Lv),e.component("SuiStatisticLabel",xo),e.component("SuiStatisticValue",ko)}},Dv=V((e,{slots:l})=>{const a=M(()=>te(v(e.active,"active"),v(e.completed,"completed"),v(e.disabled,"disabled"),v(e.fluid,"fluid"),v(e.link,"link"),v(e.vertical,"vertical"),"step"));return()=>{var o,s;return e.href?t("a",{class:a.value,href:e.href},[(o=l.default)==null?void 0:o.call(l)]):t("div",{class:a.value},[e.icon&&t(Y,{name:e.icon},null),(e.title||e.description)&&t("div",{class:"content"},[e.title&&t("div",{class:"title"},[e.title]),e.description&&t("div",{class:"description"},[e.description])]),(s=l.default)==null?void 0:s.call(l)])}},{props:{active:Boolean,completed:Boolean,description:String,disabled:Boolean,fluid:Boolean,href:String,icon:String,link:Boolean,title:String,vertical:Boolean}}),Ev=["one","two","three","four","five","six","seven","eight"],Rv=V({props:{attached:String,fluid:Boolean,inverted:Boolean,ordered:Boolean,size:String,stackable:String,unstackable:Boolean,vertical:Boolean,widths:Number},setup(e){const{widths:l}=e;return{computedClass:M(()=>te("ui",l&&Ev[l-1],e.size,v(e.fluid,"fluid"),v(e.inverted,"inverted"),v(e.ordered,"ordered"),v(e.unstackable,"unstackable"),v(e.vertical,"vertical"),ze(e.attached,"attached"),ze(e.stackable,"stackable"),"steps"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),zv=V({render(){var e,l;return t("div",{class:"content"},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Pv=V({render(){var e,l;return t("div",{class:"title"},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Vv=V({render(){var e,l;return t("div",{class:"description"},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Fv={install(e){e.component("SuiStep",Dv),e.component("SuiStepGroup",Rv),e.component("SuiStepContent",zv),e.component("SuiStepTitle",Pv),e.component("SuiStepDescription",Vv)}},gd=V({props:{active:Boolean,attached:[Boolean,String],header:String},setup(e){return{computedClass:M(()=>te("ui tab segment",v(e.active,"active"),De(e.attached,"attached")))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Mv=V({emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},pointing:Boolean,secondary:Boolean,text:Boolean},setup(e,{emit:l,slots:a}){const o=G(e.activeIndex);pt(()=>e.activeIndex,d=>{o.value=d});const s=(d,g)=>{o.value!==g&&(o.value=g,l("update:activeIndex",g),l("tab-change",{event:d,index:g})),l("tab-click",{event:d,index:g})},c=(d,g)=>{d.key==="Enter"&&s(d,g)},m=M(()=>{var d,g;let p=[];return(d=a.default)!=null&&d.call(a)&&((g=a.default)==null||g.call(a).forEach(_=>{Ct(_)&&p.push(_)})),p}),f=M(()=>!e.secondary&&!e.pointing&&!e.text),u=M(()=>te("ui menu",v(f.value,"tabular attached"),v(e.pointing,"pointing"),v(e.secondary,"secondary"),v(e.text,"text")));return{onClick:s,onKeyDown:c,tabIndex:o,tabs:m,tabMenuClass:u,isDefaultMenu:f}},render(){const e=()=>this.tabs.map((a,o)=>t("a",{class:`item ${this.tabIndex===o&&"active"}`,onClick:s=>this.onClick(s,o),onKeydown:s=>this.onKeyDown(s,o),tabindex:0},[a.props.header])),l=()=>this.tabs.map((a,o)=>t(gd,Zi(a.props,{active:this.tabIndex===o,attached:this.isDefaultMenu?"bottom":!1}),{default:()=>{var s,c;return[(c=(s=a.children).default)==null?void 0:c.call(s)]}}));return t(Ce,null,[t("div",{class:this.tabMenuClass},[e()]),l()])}}),Hv={install(e){e.component("SuiTab",Mv),e.component("SuiTabPanel",gd)}},Nv=V({props:{attached:[Boolean,String],basic:[Boolean,String],celled:Boolean,collapsing:Boolean,color:String,columns:Number,compact:[Boolean,String],definition:Boolean,fixed:Boolean,inverted:Boolean,padded:[Boolean,String],selectable:Boolean,singleLine:Boolean,size:String,stackable:Boolean,striped:Boolean,structured:Boolean,unstackable:Boolean},setup(e){return{computedClass:M(()=>te("ui",e.color,e.size,v(e.celled,"celled"),v(e.collapsing,"collapsing"),v(e.definition,"definition"),v(e.fixed,"fixed"),v(e.inverted,"inverted"),v(e.selectable,"selectable"),v(e.singleLine,"single line"),v(e.stackable,"stackable"),v(e.striped,"striped"),v(e.structured,"structured"),v(e.unstackable,"unstackable"),De(e.attached,"attached"),De(e.basic,"basic"),De(e.compact,"compact"),De(e.padded,"padded"),si(e.columns,"column"),"table"))}},render(){var e,l;return t("table",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Ov=V({render(){var e,l;return X("tbody",{},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),qv=V({props:{active:Boolean,collapsing:Boolean,color:String,disabled:Boolean,error:Boolean,marked:String,negative:Boolean,positive:Boolean,selectable:Boolean,singleLine:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:M(()=>te(e.color,v(e.active,"active"),v(e.collapsing,"collapsing"),v(e.disabled,"disabled"),v(e.error,"error"),v(e.negative,"negative"),v(e.positive,"positive"),v(e.selectable,"selectable"),v(e.singleLine,"single line"),v(e.warning,"warning"),ze(e.verticalAlign,"aligned"),ze(e.marked,"marked"),Tl(e.textAlign)))}},render(){var e,l,a,o;return this.computedClass?t("td",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)]):t("td",null,[(o=(a=this.$slots).default)==null?void 0:o.call(a)])}}),Gv=V({props:{fullWidth:Boolean},setup(e){const{fullWidth:l}=e;return{computedClass:M(()=>te(v(l,"full-width")))}},render(){var e,l,a,o;return this.computedClass?X("tfoot",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e)):X("tfoot",{},(o=(a=this.$slots).default)==null?void 0:o.call(a))}}),jv=V({props:{fullWidth:Boolean},setup(e){return{computedClass:M(()=>te(v(e.fullWidth,"full-width")))}},render(){var e,l,a,o;return this.computedClass?X("thead",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e)):X("thead",{},(o=(a=this.$slots).default)==null?void 0:o.call(a))}}),Uv=V({props:{singleLine:Boolean,textAlign:String,width:Number},setup(e){return{computedClass:M(()=>te(v(e.singleLine,"single line"),ze(e.textAlign,"aligned"),si(e.width,"wide")))}},render(){var e,l,a,o;return this.computedClass?t("th",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)]):t("th",null,[(o=(a=this.$slots).default)==null?void 0:o.call(a)])}}),Yv=V({props:{active:Boolean,color:String,disabled:Boolean,error:Boolean,negative:Boolean,positive:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:M(()=>te(e.color,v(e.active,"active"),v(e.disabled,"disabled"),v(e.error,"error"),v(e.negative,"negative"),v(e.positive,"positive"),v(e.warning,"warning"),ze(e.textAlign,"aligned"),ze(e.verticalAlign,"aligned")))}},render(){var e,l,a,o;return this.computedClass?t("tr",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)]):t("tr",null,[(o=(a=this.$slots).default)==null?void 0:o.call(a)])}}),Jv={install(e){e.component("SuiTable",Nv),e.component("SuiTableBody",Ov),e.component("SuiTableCell",qv),e.component("SuiTableFooter",Gv),e.component("SuiTableHeader",jv),e.component("SuiTableHeaderCell",Uv),e.component("SuiTableRow",Yv)}};function Wv(e,l){e.indexOf(l)===-1&&e.push(l)}const hd=(e,l,a)=>Math.min(Math.max(a,e),l),Ft={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},Za=e=>typeof e=="number",pl=e=>Array.isArray(e)&&!Za(e[0]),Kv=(e,l,a)=>{const o=l-e;return((a-e)%o+o)%o+e};function Xv(e,l){return pl(e)?e[Kv(0,e.length,l)]:e}const _d=(e,l,a)=>-a*e+a*l+e,bd=()=>{},yi=e=>e,Cs=(e,l,a)=>l-e===0?1:(a-e)/(l-e);function vd(e,l){const a=e[e.length-1];for(let o=1;o<=l;o++){const s=Cs(0,l,o);e.push(_d(a,1,s))}}function Qv(e){const l=[0];return vd(l,e-1),l}function Zv(e,l=Qv(e.length),a=yi){const o=e.length,s=o-l.length;return s>0&&vd(l,s),c=>{let m=0;for(;m<o-2&&!(c<l[m+1]);m++);let f=hd(0,1,Cs(l[m],l[m+1],c));return f=Xv(a,m)(f),_d(e[m],e[m+1],f)}}const Sd=e=>Array.isArray(e)&&Za(e[0]),Bo=e=>typeof e=="object"&&!!e.createAnimation,Al=e=>typeof e=="function",e1=e=>typeof e=="string",Zl={ms:e=>e*1e3,s:e=>e/1e3},yd=(e,l,a)=>(((1-3*a+3*l)*e+(3*a-6*l))*e+3*l)*e,t1=1e-7,i1=12;function l1(e,l,a,o,s){let c,m,f=0;do m=l+(a-l)/2,c=yd(m,o,s)-e,c>0?a=m:l=m;while(Math.abs(c)>t1&&++f<i1);return m}function Gl(e,l,a,o){if(e===l&&a===o)return yi;const s=c=>l1(c,0,1,e,a);return c=>c===0||c===1?c:yd(s(c),l,o)}const a1=(e,l="end")=>a=>{a=l==="end"?Math.min(a,.999):Math.max(a,.001);const o=a*e,s=l==="end"?Math.floor(o):Math.ceil(o);return hd(0,1,s/e)},Rr={ease:Gl(.25,.1,.25,1),"ease-in":Gl(.42,0,1,1),"ease-in-out":Gl(.42,0,.58,1),"ease-out":Gl(0,0,.58,1)},n1=/\((.*?)\)/;function zr(e){if(Al(e))return e;if(Sd(e))return Gl(...e);if(Rr[e])return Rr[e];if(e.startsWith("steps")){const l=n1.exec(e);if(l){const a=l[1].split(",");return a1(parseFloat(a[0]),a[1].trim())}}return yi}class wd{constructor(l,a=[0,1],{easing:o,duration:s=Ft.duration,delay:c=Ft.delay,endDelay:m=Ft.endDelay,repeat:f=Ft.repeat,offset:u,direction:d="normal",autoplay:g=!0}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=yi,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((_,w)=>{this.resolve=_,this.reject=w}),o=o||Ft.easing,Bo(o)){const _=o.createAnimation(a);o=_.easing,a=_.keyframes||a,s=_.duration||s}this.repeat=f,this.easing=pl(o)?yi:zr(o),this.updateDuration(s);const p=Zv(a,u,pl(o)?o.map(zr):yi);this.tick=_=>{var w;c=c;let S=0;this.pauseTime!==void 0?S=this.pauseTime:S=(_-this.startTime)*this.rate,this.t=S,S/=1e3,S=Math.max(S-c,0),this.playState==="finished"&&this.pauseTime===void 0&&(S=this.totalDuration);const A=S/this.duration;let T=Math.floor(A),I=A%1;!I&&A>=1&&(I=1),I===1&&T--;const h=T%2;(d==="reverse"||d==="alternate"&&h||d==="alternate-reverse"&&!h)&&(I=1-I);const b=S>=this.totalDuration?1:Math.min(I,1),C=p(this.easing(b));l(C),this.pauseTime===void 0&&(this.playState==="finished"||S>=this.totalDuration+m)?(this.playState="finished",(w=this.resolve)===null||w===void 0||w.call(this,C)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},g&&this.play()}play(){const l=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=l-this.pauseTime:this.startTime||(this.startTime=l),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var l;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(l=this.reject)===null||l===void 0||l.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(l){this.duration=l,this.totalDuration=l*(this.repeat+1)}get currentTime(){return this.t}set currentTime(l){this.pauseTime!==void 0||this.rate===0?this.pauseTime=l:this.startTime=performance.now()-l/this.rate}get playbackRate(){return this.rate}set playbackRate(l){this.rate=l}}class o1{setAnimation(l){this.animation=l,l==null||l.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const On=new WeakMap;function Cd(e){return On.has(e)||On.set(e,{transforms:[],values:new Map}),On.get(e)}function s1(e,l){return e.has(l)||e.set(l,new o1),e.get(l)}const r1=["","X","Y","Z"],u1=["translate","scale","rotate","skew"],en={x:"translateX",y:"translateY",z:"translateZ"},Pr={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:e=>e+"deg"},c1={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:e=>e+"px"},rotate:Pr,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:yi},skew:Pr},ca=new Map,As=e=>`--motion-${e}`,tn=["x","y","z"];u1.forEach(e=>{r1.forEach(l=>{tn.push(e+l),ca.set(As(e+l),c1[e])})});const d1=(e,l)=>tn.indexOf(e)-tn.indexOf(l),m1=new Set(tn),Ad=e=>m1.has(e),p1=(e,l)=>{en[l]&&(l=en[l]);const{transforms:a}=Cd(e);Wv(a,l),e.style.transform=f1(a)},f1=e=>e.sort(d1).reduce(g1,"").trim(),g1=(e,l)=>`${e} ${l}(var(${As(l)}))`,$o=e=>e.startsWith("--"),Vr=new Set;function h1(e){if(!Vr.has(e)){Vr.add(e);try{const{syntax:l,initialValue:a}=ca.has(e)?ca.get(e):{};CSS.registerProperty({name:e,inherits:!1,syntax:l,initialValue:a})}catch{}}}const qn=(e,l)=>document.createElement("div").animate(e,l),Fr={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{qn({opacity:[1]})}catch{return!1}return!0},finished:()=>!!qn({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{qn({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},Gn={},ol={};for(const e in Fr)ol[e]=()=>(Gn[e]===void 0&&(Gn[e]=Fr[e]()),Gn[e]);const _1=.015,b1=(e,l)=>{let a="";const o=Math.round(l/_1);for(let s=0;s<o;s++)a+=e(Cs(0,o-1,s))+", ";return a.substring(0,a.length-2)},Mr=(e,l)=>Al(e)?ol.linearEasing()?`linear(${b1(e,l)})`:Ft.easing:Sd(e)?v1(e):e,v1=([e,l,a,o])=>`cubic-bezier(${e}, ${l}, ${a}, ${o})`;function S1(e,l){for(let a=0;a<e.length;a++)e[a]===null&&(e[a]=a?e[a-1]:l());return e}const y1=e=>Array.isArray(e)?e:[e];function To(e){return en[e]&&(e=en[e]),Ad(e)?As(e):e}const Ia={get:(e,l)=>{l=To(l);let a=$o(l)?e.style.getPropertyValue(l):getComputedStyle(e)[l];if(!a&&a!==0){const o=ca.get(l);o&&(a=o.initialValue)}return a},set:(e,l,a)=>{l=To(l),$o(l)?e.style.setProperty(l,a):e.style[l]=a}};function xd(e,l=!0){if(!(!e||e.playState==="finished"))try{e.stop?e.stop():(l&&e.commitStyles(),e.cancel())}catch{}}function w1(e,l){var a;let o=(l==null?void 0:l.toDefaultUnit)||yi;const s=e[e.length-1];if(e1(s)){const c=((a=s.match(/(-?[\d.]+)([a-z%]*)/))===null||a===void 0?void 0:a[2])||"";c&&(o=m=>m+c)}return o}function C1(){return window.__MOTION_DEV_TOOLS_RECORD}function A1(e,l,a,o={},s){const c=C1(),m=o.record!==!1&&c;let f,{duration:u=Ft.duration,delay:d=Ft.delay,endDelay:g=Ft.endDelay,repeat:p=Ft.repeat,easing:_=Ft.easing,persist:w=!1,direction:S,offset:A,allowWebkitAcceleration:T=!1,autoplay:I=!0}=o;const h=Cd(e),b=Ad(l);let C=ol.waapi();b&&p1(e,l);const $=To(l),E=s1(h.values,$),F=ca.get($);return xd(E.animation,!(Bo(_)&&E.generator)&&o.record!==!1),()=>{const H=()=>{var Q,J;return(J=(Q=Ia.get(e,$))!==null&&Q!==void 0?Q:F==null?void 0:F.initialValue)!==null&&J!==void 0?J:0};let P=S1(y1(a),H);const j=w1(P,F);if(Bo(_)){const Q=_.createAnimation(P,l!=="opacity",H,$,E);_=Q.easing,P=Q.keyframes||P,u=Q.duration||u}if($o($)&&(ol.cssRegisterProperty()?h1($):C=!1),b&&!ol.linearEasing()&&(Al(_)||pl(_)&&_.some(Al))&&(C=!1),C){F&&(P=P.map(fe=>Za(fe)?F.toDefaultUnit(fe):fe)),P.length===1&&(!ol.partialKeyframes()||m)&&P.unshift(H());const Q={delay:Zl.ms(d),duration:Zl.ms(u),endDelay:Zl.ms(g),easing:pl(_)?void 0:Mr(_,u),direction:S,iterations:p+1,fill:"both"};f=e.animate({[$]:P,offset:A,easing:pl(_)?_.map(fe=>Mr(fe,u)):void 0},Q),f.finished||(f.finished=new Promise((fe,Be)=>{f.onfinish=fe,f.oncancel=Be}));const J=P[P.length-1];f.finished.then(()=>{w||(Ia.set(e,$,J),f.cancel())}).catch(bd),T||(f.playbackRate=1.000001)}else if(s&&b)P=P.map(Q=>typeof Q=="string"?parseFloat(Q):Q),P.length===1&&P.unshift(parseFloat(H())),f=new s(Q=>{Ia.set(e,$,j?j(Q):Q)},P,Object.assign(Object.assign({},o),{duration:u,easing:_}));else{const Q=P[P.length-1];Ia.set(e,$,F&&Za(Q)?F.toDefaultUnit(Q):Q)}return m&&c(e,l,P,{duration:u,delay:d,easing:_,repeat:p,offset:A},"motion-one"),E.setAnimation(f),f&&!I&&f.pause(),f}}const x1=(e,l)=>e[l]?Object.assign(Object.assign({},e),e[l]):Object.assign({},e);function k1(e,l){var a;return typeof e=="string"?l?((a=l[e])!==null&&a!==void 0||(l[e]=document.querySelectorAll(e)),e=l[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const B1=e=>e(),kd=(e,l,a=Ft.duration)=>new Proxy({animations:e.map(B1).filter(Boolean),duration:a,options:l},T1),$1=e=>e.animations[0],T1={get:(e,l)=>{const a=$1(e);switch(l){case"duration":return e.duration;case"currentTime":return Zl.s((a==null?void 0:a[l])||0);case"playbackRate":case"playState":return a==null?void 0:a[l];case"finished":return e.finished||(e.finished=Promise.all(e.animations.map(L1)).catch(bd)),e.finished;case"stop":return()=>{e.animations.forEach(o=>xd(o))};case"forEachNative":return o=>{e.animations.forEach(s=>o(s,e))};default:return typeof(a==null?void 0:a[l])>"u"?void 0:()=>e.animations.forEach(o=>o[l]())}},set:(e,l,a)=>{switch(l){case"currentTime":a=Zl.ms(a);case"playbackRate":for(let o=0;o<e.animations.length;o++)e.animations[o][l]=a;return!0}return!1}},L1=e=>e.finished;function I1(e,l,a){return Al(e)?e(l,a):e}function D1(e){return function(l,a,o={}){l=k1(l);const s=l.length,c=[];for(let m=0;m<s;m++){const f=l[m];for(const u in a){const d=x1(o,u);d.delay=I1(d.delay,m,s);const g=A1(f,u,a[u],d,e);c.push(g)}}return kd(c,o,o.duration)}}const E1=D1(wd);function R1(e,l={}){return kd([()=>{const a=new wd(e,[0,1],l);return a.finished.catch(()=>{}),a}],l,l.duration)}function z1(e,l,a){return(Al(e)?R1:E1)(e,l,a)}const _e=(e,l)=>(a,{duration:o,keyframesOverride:s={}})=>z1(a,{...e,...s},{autoplay:!1,...l,duration:o}),Hr=_e({transform:["scale(0.8) translateZ(0px)","scale(0.8) translateZ(0px)","scale(1.05) translateZ(0px)","scale(1) translateZ(0px)"],opacity:[null,.7,1,null],zIndex:[-1,-1,999,999]},{duration:.5,offset:[0,.1,.8,1]}),P1=_e({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,-1,null,-1]},{duration:.5,offset:[0,.5,.8,1]}),V1=_e({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,1,null,1]},{duration:.5,offset:[0,.5,.8,1]}),F1=_e({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(0)","scale(1)"],opacity:[0,1]},{duration:.4,offset:[0,1]}),M1=_e({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(1)","scale(0)"],opacity:[1,0]},{duration:.4,offset:[0,1]}),H1=_e({opacity:[0,1]},{duration:.5,offset:[0,1]}),N1=_e({opacity:[0,1],transform:["translateY(10%)","export translateY(0%)"]},{duration:.5,offset:[0,1]}),O1=_e({opacity:[0,1],transform:["translateY(-10%)","translateY(0%)"]},{duration:.5,offset:[0,1]}),q1=_e({opacity:[0,1],transform:["translateX(10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),G1=_e({opacity:[0,1],transform:["translateX(-10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),j1=_e({opacity:[1,0]},{duration:.5,offset:[0,1]}),U1=_e({opacity:[1,0],transform:["translateY(0%)","texport ranslateY(5%)"]},{duration:.5,offset:[0,1]}),Y1=_e({opacity:[1,0],transform:["translateY(0%)","translateY(-5%)"]},{duration:.5,offset:[0,1]}),J1=_e({opacity:[1,0],transform:["translateX(0%)","translateX(5%)"]},{duration:.5,offset:[0,1]}),W1=_e({opacity:[1,0],transform:["translateX(0%)","translateX(-5%)"]},{duration:.5,offset:[0,1]}),K1=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["scale3d(.3, .3, .3)","scale3d(1.1, 1.1, 1.1)","scale3d(.9, .9, .9)","scale3d(1.03, 1.03, 1.03)","scale3d(.97, .97, .97)","scale3d(1, 1, 1)"],opacity:[0,null,null,1,null,1]},{duration:.6,offset:[0,.2,.4,.6,.8,1]}),X1=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, 1500px, 0","translate3d(0, -20px, 0)","translate3d(0, 10px, 0)","translate3d(0, -5px, 0)","translate3d(0, 0, 0)"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),Q1=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, -1500px, 0","translate3d(0, 25px, 0)","translate3d(0, -10px, 0)","translate3d(0, 5px, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),Z1=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(1500px, 0, 0","translate3d(-25px, 0, 0)","translate3d(10px, 0, 0)","translate3d(-5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),eS=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(-1500px, 0, 0","translate3d(25px, 0, 0)","translate3d(-10px, 0, 0)","translate3d(5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),tS=_e({transform:["scale3d(.9, .9, .9)","scale3d(1.1, 1.1, 1.1)","scale3d(1.1, 1.1, 1.1)","scale3d(.3, .3, .3)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.5,.55,1]}),iS=_e({transform:["translate3d(0, 10px, 0)","translate3d(0, -20px, 0)","translate3d(0, -20px, 0)","translate3d(0, 2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),lS=_e({transform:["translate3d(0, -10px, 0)","translate3d(0, 20px, 0)","translate3d(0, 20px, 0)","translate3d(0, -2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),aS=_e({transform:["translate3d(-20px, 0, 0)","translate3d(2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),nS=_e({transform:["translate3d(20px, 0, 0)","translate3d(-2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),oS=_e({transform:["perspective(2000px) rotateY(-90deg)","perspective(2000px) rotateY(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),sS=_e({transform:["perspective(2000px) rotateY(0deg)","perspective(2000px) rotateY(90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),rS=_e({transform:["perspective(2000px) rotateX(-90deg)","perspective(2000px) rotateX(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),uS=_e({transform:["perspective(2000px) rotateX(0deg)","perspective(2000px) rotateX(-90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),cS=_e({transform:["scale(0.8)","scale(1)"],opacity:[0,1]},{duration:.5,offset:[0,1]}),dS=_e({transform:["scale(1)","scale(0.9)"],opacity:[1,0]},{duration:.5,offset:[0,1]}),Bd={transform:["scaleY(0)","scaleY(1)"],opacity:[0,1]},$d={transform:["scaleX(0)","scaleX(1)"],opacity:[0,1]},Td={transform:["scaleY(1)","scaleY(0)"],opacity:[1,0]},mS={transform:["scaleX(1)","scaleX(0)"],opacity:[1,0]},pS=_e({transformOrigin:"top center",...Bd},{offset:[0,1]}),fS=_e({transformOrigin:"bottom center",...Bd},{offset:[0,1]}),gS=_e({transformOrigin:"center right",...$d},{offset:[0,1]}),hS=_e({transformOrigin:"center left",...$d},{offset:[0,1]}),_S=_e({transformOrigin:"top center",...Td},{offset:[0,1]}),bS=_e({transformOrigin:"bottom center",...Td},{offset:[0,1]}),Nr=_e({transformOrigin:"center left",...mS},{offset:[0,1]}),ki=.8,fl={transform:["perspective(1000px) rotateX(90deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(15deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},gl={transform:["perspective(1000px) rotateY(-90deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-17.5deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},hl={transform:["perspective(1000px) rotateX(0deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(17.5deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},_l={transform:["perspective(1000px) rotateY(0deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(-10deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},vS=_e({transformOrigin:"top center",transform:fl.transform,opacity:fl.opacity},{duration:ki,offset:fl.offset}),SS=_e({transformOrigin:"bottom center",transform:fl.transform,opacity:fl.opacity},{duration:ki,offset:fl.offset}),yS=_e({transformOrigin:"center right",transform:gl.transform,opacity:gl.opacity},{duration:ki,offset:gl.offset}),wS=_e({transformOrigin:"center left",transform:gl.transform,opacity:gl.opacity},{duration:ki,offset:gl.offset}),CS=_e({transformOrigin:"top center",transform:hl.transform,opacity:hl.opacity},{duration:ki,offset:hl.offset}),AS=_e({transformOrigin:"bottom center",transform:hl.transform,opacity:hl.opacity},{duration:ki,offset:hl.offset}),xS=_e({transformOrigin:"center right",transform:_l.transform,opacity:_l.opacity},{duration:ki,offset:_l.offset}),kS=_e({transformOrigin:"center left",transform:_l.transform,opacity:_l.opacity},{duration:ki,offset:_l.offset}),BS=_e({transform:["scale(0)","scale(1)"],opacity:[1,1]},{offset:[0,1]}),$S=_e({transform:["scale(1)","scale(0)"],opacity:[1,1]},{offset:[0,1]}),TS=_e({transform:["translateY(0)","translateY(0)","translateY(-30px)","translateY(0)","translateY(-15px)","translateY(0)","translateY(0)"]},{offset:[0,.2,.4,.5,.6,.8,1]}),LS=_e({opacity:[1,0,1,0,1]},{offset:[0,.25,.5,.75,1]}),IS=_e({animationTimingFunction:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",backgroundColor:["#FCFCFD","#FFF6CD","FCFCFD"]},{duration:2,offset:[0,.3,1]}),DS=_e({transform:["scale3d(1, 1, 1)","scale3d(1.25, 0.75, 1)","scale3d(0.75, 1.25, 1)","scale3d(1.15, 0.85, 1)","scale3d(0.95, 1.05, 1)","scale3d(1.05, 0.95, 1)","scale3d(1, 1, 1)"]},{duration:.75,offset:[0,.3,.4,.5,.6,.75,1]}),ES=_e({transform:["scale(1)","scale(0.9)","scale(1)"],opacity:[1,.7,1]},{offset:[0,.5,1]}),RS=_e({transform:["translateX(0)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(0)"]}),zS=_e({transform:["scale(1)","scale(0.9) rotate(-3deg)","scale(0.9) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1) rotate(0)"]},{offset:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]}),PS={browse:[Hr,P1],"browse right":[Hr,V1],drop:[F1,M1],fade:[H1,j1],"fade up":[N1,U1],"fade down":[O1,Y1],"fade left":[q1,J1],"fade right":[G1,W1],fly:[K1,tS],"fly up":[X1,iS],"fly down":[Q1,lS],"fly left":[Z1,aS],"fly right":[eS,nS],"horizontal flip":[oS,sS],"vertical flip":[rS,uS],scale:[cS,dS],"slide up":[fS,bS],"slide down":[pS,_S],"slide left":[gS,Nr],"slide right":[hS,Nr],"swing up":[SS,AS],"swing down":[vS,CS],"swing left":[yS,xS],"swing right":[wS,kS],zoom:[BS,$S]},VS={bounce:[TS,void 0],flash:[LS,void 0],glow:[IS,void 0],jiggle:[DS,void 0],pulse:[ES,void 0],shake:[RS,void 0],tada:[zS,void 0]},Ld=e=>({...PS,...VS})[e],FS=e=>{const[l,a]=Ld(e.animation),o=M(()=>e.duration?e.duration/1e3:.5),s=M(()=>(m,f)=>{if(!l)return f();const u=l(m,{duration:o.value});u.play(),u.finished.then(f)}),c=M(()=>(m,f)=>{if(!a)return f();const u=a(m,{duration:o.value});u.play(),u.finished.then(f)});return{onEnter:s,onLeave:c}},MS=V({props:{animation:{type:String,default:"fade"},duration:{type:Number,default:500}},setup(e){const{onEnter:l,onLeave:a}=FS(e);return{onEnter:l,onLeave:a}},render(){return t(Sn,{onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,l;return[(l=(e=this.$slots).default)==null?void 0:l.call(e)]}})}}),Id=V({props:{tag:String,animation:{type:String,default:"fade"},enterKeyframes:{type:Function,default:()=>({})},leaveKeyframes:{type:Function,default:()=>({})}},setup(e){const[l,a]=Ld(e.animation),o=M(()=>(c,m)=>{if(!l)return m();const f=l(c,{duration:.5,keyframesOverride:e.enterKeyframes(c)});f.play(),f.finished.then(m)}),s=M(()=>(c,m)=>{if(!a)return m();const f=a(c,{duration:.5,keyframesOverride:e.leaveKeyframes(c)});f.play(),f.finished.then(m)});return{onEnter:o,onLeave:s}},render(){return t(Ac,{tag:this.tag,onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,l;return[(l=(e=this.$slots).default)==null?void 0:l.call(e)]}})}}),HS={install(e){e.component("SuiTransition",MS),e.component("SuiTransitionGroup",Id)}},NS=Object.freeze(Object.defineProperty({__proto__:null,Accordion:i_,Advertisement:a_,Breadcrumb:n_,Button:p_,Calendar:T_,Card:V_,Checkbox:F_,Comment:J_,Container:W_,Dimmer:X_,Divider:Q_,Dropdown:db,Embed:pb,Emoji:fb,Feed:xb,Flag:kb,Form:$b,Grid:Tb,Header:Lb,Icon:o_,Image:ob,Input:Ib,Item:Hb,Label:nb,List:Ub,Menu:Wb,Message:ev,Modal:rv,Popup:dv,Progress:fv,Rail:hv,Rating:vv,Reveal:Sv,Search:wv,Segment:Av,Sidebar:kv,Slider:$v,Statistic:Iv,Step:Fv,Tab:Hv,Table:Jv,Transition:HS},Symbol.toStringTag,{value:"Module"})),Pe=V({props:{active:Boolean,color:String,disabled:Boolean,fast:Boolean,indeterminate:Boolean,inline:[Boolean,String],inverted:Boolean,size:String,slow:Boolean,text:Boolean},setup(e,{slots:l}){return{computedClass:M(()=>{var a;return te("ui",e.color,e.size,v(e.active,"active"),v(e.disabled,"disabled"),v(e.fast,"fast"),v(e.indeterminate,"indeterminate"),v(e.inverted,"inverted"),v(e.slow,"slow"),v(e.text||!!((a=l.default)!=null&&a.call(l)),"text"),De(e.inline,"inline"),"loader")})}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),jn=V({name:"SuiToastActions",props:{aligned:String,basic:Boolean,vertical:Boolean,...Ss()},setup(e,{slots:l}){const a=M(()=>te("actions",e.basic&&"basic",e.aligned,e.vertical&&"vertical"));return()=>{var o;return e.attached?t(gt,{attached:e.attached,vertical:e.vertical},{default:()=>{var s;return[(s=l.default)==null?void 0:s.call(l)]}}):t("div",{class:a.value},[(o=l.default)==null?void 0:o.call(l)])}}}),OS=V({name:"SuiToastBox",props:{unclickable:Boolean,verticalAttached:Boolean},setup(e,{slots:l}){const a=M(()=>te("floating toast-box compact",e.unclickable&&"unclickable"));return()=>{var o,s;return e.verticalAttached?t("div",{class:a.value,style:"display: block !important;"},[t("div",{class:"vertical attached compact right"},[(o=l.default)==null?void 0:o.call(l)])]):t("div",{class:a.value,style:"display: block !important;"},[(s=l.default)==null?void 0:s.call(l)])}}});function Un(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ct(e)}const qS=V({name:"SuiToast",emits:["click","close"],props:{id:Number,displayTime:{type:Number,default:3e3},type:String,title:String,message:{type:String,required:!0},centered:Boolean,messageStyle:Boolean,actions:Function,actionsProps:Object,showProgress:{type:String},showProgressColor:String,showProgressUp:Boolean,inverted:Boolean,...ys()},setup(e,{emit:l}){const{colorClasses:a}=ws(e),o=M(()=>{var m,f,u,d,g;return te(e.centered&&"center aligned",e.type||"neutral",a.value,"ui",e.messageStyle?"message":"toast",e.actions&&!((m=e.actionsProps)!=null&&m.vertical)&&"actions",((f=e.actionsProps)==null?void 0:f.attached)==="top"&&"bottom attached",((u=e.actionsProps)==null?void 0:u.attached)==="bottom"&&"top attached",((d=e.actionsProps)==null?void 0:d.attached)==="left"&&"left attached",((g=e.actionsProps)==null?void 0:g.vertical)&&"vertical","compact")}),s=G(e.showProgressUp?0:100),c=()=>{const m=e.displayTime/100;setTimeout(()=>{const f=setInterval(()=>{if(e.showProgressUp){s.value>=100&&clearInterval(f),s.value+=1;return}s.value<=0&&clearInterval(f),s.value-=1},m)},500)};return Ai(()=>e.showProgress&&c()),setTimeout(()=>e.displayTime>0&&l("close"),e.displayTime+750),{classes:o,progress:s}},render(){var e;let l,a,o;return t(OS,{unclickable:!!this.actions,verticalAttached:((e=this.actionsProps)==null?void 0:e.attached)==="left"},{default:()=>{var s,c,m,f;return[this.showProgress==="top"&&t(Ao,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null),this.actions&&(((s=this.actionsProps)==null?void 0:s.attached)==="top"||((c=this.actionsProps)==null?void 0:c.attached)==="left")&&t(jn,this.actionsProps,Un(l=this.actions({close:()=>this.$emit("close")}))?l:{default:()=>[l]}),t("div",{role:"alert",class:this.classes,onClick:()=>!this.actions&&this.$emit("click")},[t("div",{class:"content"},[this.title&&t("div",{class:"ui header"},[this.title]),t("div",{class:"message"},[this.message])]),this.actions&&!((m=this.actionsProps)!=null&&m.attached)&&t(jn,this.actionsProps,Un(a=this.actions({close:()=>this.$emit("close")}))?a:{default:()=>[a]})]),this.actions&&((f=this.actionsProps)==null?void 0:f.attached)==="bottom"&&t(jn,this.actionsProps,Un(o=this.actions({close:()=>this.$emit("close")}))?o:{default:()=>[o]}),this.showProgress==="bottom"&&t(Ao,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null)]}})}}),GS=["top right","top center","top left","bottom right","bottom center","bottom left","centered"],jS=({defaultValue:e}={})=>({position:{type:String,validator:l=>GS.includes(l),default:e}}),US=e=>({positionClasses:M(()=>e.position||"")});function YS(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ct(e)}const JS=V({name:"SuiToastContainer",props:{horizontal:Boolean,...Ss(),...jS({defaultValue:"top right"})},setup(e){const{items:l,remove:a}=Dd(),{attachedClasses:o}=fd(e),{positionClasses:s}=US(e);return{classes:M(()=>te(o.value||s.value,"ui toast-container",e.horizontal&&"horizontal")),items:l,remove:a,enterKeyframes:c=>{if(!(c instanceof HTMLElement))return{};const m=[0,`${c.offsetHeight}px`],f=[0,`${parseInt(getComputedStyle(c).marginBottom,10)}px`];return{height:m,marginBottom:f}},leaveKeyframes:c=>{if(!(c instanceof HTMLElement))return{};const m=[`${c.offsetWidth}px`,0],f=[`${c.offsetHeight}px`,0],u=e.horizontal?{width:m}:{height:f},d=[`${parseInt(getComputedStyle(c).marginBottom,10)}px`,0];return{...u,marginBottom:d}}}},render(){let e;return t(_n,{to:"body"},{default:()=>[t("div",{class:this.classes},[t(Id,{animation:"scale",enterKeyframes:this.enterKeyframes,leaveKeyframes:this.leaveKeyframes},YS(e=this.items.filter(({position:l,attached:a})=>this.attached?a===this.attached:l===this.position).filter(({horizontal:l})=>this.horizontal===!!l).map(({id:l,...a})=>t(qS,Zi({key:l},a,{onClick:()=>this.remove(l),onClose:()=>this.remove(l)}),null)))?e:{default:()=>[e]})])]})}}),WS=G(1),Ml=G([]),Dd=()=>({items:Ml,add:e=>{e.position=e.position||"top right",Ml.value=[...Ml.value,{id:WS.value++,...e}]},remove:e=>{Ml.value=Ml.value.filter(l=>l.id!==e)}}),st=()=>{var e;const l=(e=Kt())==null?void 0:e.appContext,{add:a}=Dd();return{toast:o=>{const{position:s,attached:c,horizontal:m}=o;QS({position:s,attached:c,horizontal:m})||XS(l,{position:s,attached:c,horizontal:m}),a(o)}}},KS=(e,{appContext:l,element:a}={})=>{const o=a||document.createElement("div");return l&&(e.appContext=l),Ka(e,o),{vNode:e,el:o}},XS=(e,{position:l="top right",attached:a,horizontal:o=!1}={})=>{const s=X(JS,{position:l,attached:a,horizontal:o}),{el:c}=KS(s,{appContext:e});return{vNode:s,el:c}},QS=({position:e="top right",attached:l,horizontal:a})=>{const o=l?`.ui.toast-container.${l}.attached`:`.ui.toast-container.${e.split(" ").join(".")}${a?".horizontal":":not(.horizontal)"}`;return document.querySelector(o)};function ZS(e){Object.values({...NS}).map(l=>e.use(l))}const ey={install:ZS},ty=Object.assign({inheritAttrs:!1},{__name:"DocSectionText",props:["label","onClick"],setup(e){const l=Yc(),a=M(()=>{const s=l.currentRoute.value.path;return s.lastIndexOf("/")===s.length-1?s.slice(0,-1):s}),o=s=>{s.preventDefault();const m=s.target.parentElement.getAttribute("href"),f=m.slice(m.indexOf("#")+1),u=document.getElementById(f);u&&u.scrollIntoView({behavior:"smooth"})};return(s,c)=>{const m=x("SuiHeader"),f=x("SuiGridColumn"),u=x("SuiGridRow");return y(),ve(Ce,null,[t(u,null,{default:i(()=>[t(f,null,{default:i(()=>[t(m,{as:"h3",class:"doc-section-text"},{default:i(()=>[n($e(e.label)+" ",1),t(r(ms),{to:`${a.value}#${s.$attrs.id}`,target:"_self",onClick:o},{default:i(()=>[t(r(Y),{name:"linkify",color:"grey",size:"small",link:"",fitted:""})]),_:1},8,["to"])]),_:1})]),_:1}),t(f,{textAlign:"right"},{default:i(()=>[t(r(Y),{name:"code",color:"grey",link:"",onClick:e.onClick},null,8,["onClick"])]),_:1})]),_:1}),k("p",null,[qi(s.$slots,"default",{},void 0,!0)])],64)}}}),iy=Me(ty,[["__scopeId","data-v-a2b78897"]]),ly={class:"inner"},ay={__name:"DocSectionCode",props:["code","hideCode"],setup(e){return(l,a)=>{const o=x("SuiGridColumn"),s=x("SuiGridRow");return y(),B(s,null,{default:i(()=>[t(o,{width:16},{default:i(()=>[qi(l.$slots,"default",{},void 0,!0)]),_:3}),t(o,{width:16,id:"accordion","aria-hidden":e.hideCode},{default:i(()=>[k("div",ly,[Si((y(),ve("pre",null,[k("code",null,$e(e.code)+`
`,1)])),[[r(Va)]])])]),_:1},8,["aria-hidden"])]),_:3})}}},ny=Me(ay,[["__scopeId","data-v-965e7ddc"]]),D={__name:"DocSection",props:["label","code"],setup(e){const l=G(!0),a=()=>l.value=!l.value;return(o,s)=>{const c=x("SuiGrid");return y(),ve("section",null,[t(c,{columns:2},{default:i(()=>[t(iy,Zi({label:e.label,"on-click":a},o.$attrs),{default:i(()=>[qi(o.$slots,"description")]),_:3},16,["label"]),t(ny,{code:e.code,"hide-code":l.value},{default:i(()=>[qi(o.$slots,"example")]),_:3},8,["code","hide-code"])]),_:3})])}}},oy=`<template>
  <SuiButton @click="onClick">{{ label }}</SuiButton>
</template>

<script setup>
import { ref } from 'vue'
import { SuiButton } from 'vue-fomantic-ui'

const label = ref('Follow')
const onClick = () => label.value = label.value === 'Follow' ? 'Following' : 'Follow'
<\/script>`,sy={__name:"ButtonDoc",setup(e){const l=G("Follow"),a=()=>l.value=l.value==="Follow"?"Following":"Follow";return(o,s)=>(y(),B(D,{label:"Button",code:oy},{description:i(()=>[n(" A standard button ")]),example:i(()=>[t(r(z),{onClick:a},{default:i(()=>[n($e(l.value),1)]),_:1})]),_:1}))}},ry=`<template>
  <SuiButton primary>Save</SuiButton>
  <SuiButton secondary>Okay</SuiButton>
  <SuiButton>Cancel</SuiButton>
</template>`,uy={__name:"EmphasisDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Emphasis",code:ry},{description:i(()=>[n(" A button can be formatted to show different levels of emphasis ")]),example:i(()=>[t(r(z),{primary:""},{default:i(()=>[n("Save")]),_:1}),t(r(z),{secondary:""},{default:i(()=>[n("Okay")]),_:1}),t(r(z),null,{default:i(()=>[n("Cancel")]),_:1})]),_:1}))}},cy=`<template>
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
</template>`,dy={__name:"AnimatedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Animated",code:cy},{description:i(()=>[n(" A button can animate to show hidden content ")]),example:i(()=>[t(r(z),{animated:""},{default:i(()=>[t(r(Ii),{visible:""},{default:i(()=>[n("Next")]),_:1}),t(r(Ii),{hidden:""},{default:i(()=>[t(r(Y),{name:"arrow right"})]),_:1})]),_:1}),t(r(z),{animated:"vertical"},{default:i(()=>[t(r(Ii),{visible:""},{default:i(()=>[t(r(Y),{name:"shop"})]),_:1}),t(r(Ii),{hidden:""},{default:i(()=>[n("Shop")]),_:1})]),_:1}),t(r(z),{animated:"fade"},{default:i(()=>[t(r(Ii),{visible:""},{default:i(()=>[n(" Sign-up for a Pro account ")]),_:1}),t(r(Ii),{hidden:""},{default:i(()=>[n("$12.99 a month")]),_:1})]),_:1})]),_:1}))}},my=`<template>
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
</template>`,py={__name:"LabeledDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Labeled",code:my},{description:i(()=>[n(" A button can appear alongside a label ")]),example:i(()=>[t(r(z),{labeled:"right",as:"div"},{default:i(()=>[t(r(z),{icon:"heart",content:" Like"}),t(r(O),{basic:""},{default:i(()=>[n("2,048")]),_:1})]),_:1}),t(r(z),{labeled:"left",as:"div"},{default:i(()=>[t(r(O),{basic:"",pointing:"right"},{default:i(()=>[n("2,048")]),_:1}),t(r(z),{icon:"heart",content:" Like"})]),_:1}),t(r(z),{labeled:"left",as:"div"},{default:i(()=>[t(r(O),{basic:""},{default:i(()=>[n("1,048")]),_:1}),t(r(z),{icon:"fork"})]),_:1})]),_:1}))}},fy=`<template>
  <SuiButton icon="cloud" />
</template>`,gy={__name:"IconDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Icon",code:fy},{description:i(()=>[n(" A button can have only an icon ")]),example:i(()=>[t(r(z),{icon:"cloud"})]),_:1}))}},hy=`<template>
  <SuiButton labeled icon="pause" content="Pause" />
  <SuiButton labeled="right" icon="right arrow" content="Next" />
  <SuiButton labeled icon>
    <SuiIcon loading name="spinner" />
    Loading
  </SuiButton>
</template>`,_y={__name:"LabeledIconDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Labeled Icon",code:hy},{description:i(()=>[n(" A button can use an icon as a label ")]),example:i(()=>[t(r(z),{labeled:"",icon:"pause",content:"Pause"}),t(r(z),{labeled:"right",icon:"right arrow",content:"Next"}),t(r(z),{labeled:"",icon:""},{default:i(()=>[t(r(Y),{loading:"",name:"spinner"}),n(" Loading ")]),_:1})]),_:1}))}},by=`<template>
  <SuiButton basic primary>Primary</SuiButton>
  <SuiButton basic secondary>Secondary</SuiButton>
  <SuiButton basic positive>Positive</SuiButton>
  <SuiButton basic negative>Negative</SuiButton>
</template>`,vy={__name:"BasicDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Basic",code:by},{description:i(()=>[n(" A basic button is less pronounced ")]),example:i(()=>[t(r(z),{basic:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(r(z),{basic:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(r(z),{basic:"",positive:""},{default:i(()=>[n("Positive")]),_:1}),t(r(z),{basic:"",negative:""},{default:i(()=>[n("Negative")]),_:1})]),_:1}))}},Sy=`<template>
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
</template>`,yy={__name:"TertiaryDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Tertiary",code:Sy},{description:i(()=>[n(" An none bordered less important button ")]),example:i(()=>[t(r(z),{tertiary:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(r(z),{tertiary:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(r(z),{tertiary:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(r(z),{tertiary:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(r(z),{tertiary:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(r(z),{tertiary:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(r(z),{tertiary:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(r(z),{tertiary:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(r(z),{tertiary:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(r(z),{tertiary:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(r(z),{tertiary:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(r(z),{tertiary:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(r(z),{tertiary:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(r(z),{tertiary:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(r(z),{tertiary:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},wy=`<template>
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
</template>`,Cy={__name:"InvertedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Inverted",code:wy},{description:i(()=>[n(" A button can be formatted to appear on dark backgrounds ")]),example:i(()=>[t(r(N),{inverted:""},{default:i(()=>[t(r(z),{inverted:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(r(z),{inverted:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(r(z),{inverted:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(r(z),{inverted:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(r(z),{inverted:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(r(z),{inverted:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(r(z),{inverted:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(r(z),{inverted:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(r(z),{inverted:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(r(z),{inverted:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(r(z),{inverted:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(r(z),{inverted:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(r(z),{inverted:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(r(z),{inverted:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(r(z),{inverted:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1})]),_:1}))}},Ay=`<template>
  <SuiButtonGroup>
    <SuiButton content="One" />
    <SuiButton content="Two" />
    <SuiButton content="Three" />
  </SuiButtonGroup>
</template>`,xy={__name:"ButtonsDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Buttons",code:Ay},{description:i(()=>[n(" Buttons can exist together as a group ")]),example:i(()=>[t(r(gt),null,{default:i(()=>[t(r(z),{content:"One"}),t(r(z),{content:"Two"}),t(r(z),{content:"Three"})]),_:1})]),_:1}))}},ky=`<template>
  <SuiButtonGroup icon>
    <SuiButton icon="align left" />
    <SuiButton icon="align center" />
    <SuiButton icon="align right" />
    <SuiButton icon="align justify" />
  </SuiButtonGroup>
</template>`,By={__name:"IconButtonsDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Icon Buttons",code:ky},{description:i(()=>[n(" Button groups can show groups of icons ")]),example:i(()=>[t(r(gt),{icon:""},{default:i(()=>[t(r(z),{icon:"align left"}),t(r(z),{icon:"align center"}),t(r(z),{icon:"align right"}),t(r(z),{icon:"align justify"})]),_:1})]),_:1}))}},$y=k("div",{class:"or"},null,-1),Ty=k("div",{class:"or","data-text":"ou"},null,-1),Ly=`<template>
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
</template>`,Iy={__name:"ConditionalsDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Conditionals",code:Ly},{description:i(()=>[n(" Button groups can contain conditionals ")]),example:i(()=>[t(r(gt),null,{default:i(()=>[t(r(z),{content:"Cancel"}),$y,t(r(z),{content:"Save",positive:""})]),_:1}),t(r(gt),null,{default:i(()=>[t(r(z),{content:"un"}),Ty,t(r(z),{content:"deux",positive:""})]),_:1})]),_:1}))}},Dy=`<template>
  <SuiButton active icon="user" content=" Follow" />
</template>`,Ey={__name:"ActiveDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Active",code:Dy},{description:i(()=>[n(" A button can show it is currently the active user selection ")]),example:i(()=>[t(r(z),{active:"",icon:"user",content:" Follow"})]),_:1}))}},Ry=`<template>
  <SuiButton disabled icon="user" content=" Followed" />
</template>`,zy={__name:"DisabledDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Disabled",code:Ry},{description:i(()=>[n(" A button can show it is currently unable to be interacted with ")]),example:i(()=>[t(r(z),{disabled:"",icon:"user",content:" Followed"})]),_:1}))}},Py=`<template>
  <SuiButton loading content="Loading" />
  <SuiButton loading="double" primary content="Loading" />
  <SuiButton loading="elastic" secondary content="Loading" />
</template>`,Vy={__name:"LoadingDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Loading",code:Py},{description:i(()=>[n(" A button can show a loading indicator ")]),example:i(()=>[t(r(z),{loading:"",content:"Loading"}),t(r(z),{loading:"double",primary:"",content:"Loading"}),t(r(z),{loading:"elastic",secondary:"",content:"Loading"})]),_:1}))}},Fy=`<template>
  <SuiButton facebook icon="facebook" content=" Facebook" />
  <SuiButton twitter icon="twitter" content=" Twitter" />
  <SuiButton vk icon="vk" content="VK" />
  <SuiButton linkedin icon="linkedin" content=" LinkedIn" />
  <SuiButton instagram icon="instagram" content=" Instagram" />
  <SuiButton youtube icon="youtube" content=" YouTube" />
  <SuiButton whatsapp icon="whatsapp" content=" WhatsApp" />
  <SuiButton telegram icon="telegram" content=" Telegram" />
</template>`,My={__name:"SocialDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Social",code:Fy},{description:i(()=>[n(" A button can be formatted to link to a social website ")]),example:i(()=>[t(r(z),{facebook:"",icon:"facebook",content:" Facebook"}),t(r(z),{twitter:"",icon:"twitter",content:" Twitter"}),t(r(z),{vk:"",icon:"vk",content:"VK"}),t(r(z),{linkedin:"",icon:"linkedin",content:" LinkedIn"}),t(r(z),{instagram:"",icon:"instagram",content:" Instagram"}),t(r(z),{youtube:"",icon:"youtube",content:" YouTube"}),t(r(z),{whatsapp:"",icon:"whatsapp",content:" WhatsApp"}),t(r(z),{telegram:"",icon:"telegram",content:" Telegram"})]),_:1}))}},Hy=`<template>
  <SuiButton size="mini" content="Mini" />
  <SuiButton size="tiny" content="Tiny" />
  <SuiButton size="small" content="Small" />
  <SuiButton size="medium" content="Medium" />
  <SuiButton size="large" content="Large" />
  <SuiButton size="big" content="Big" />
  <SuiButton size="huge" content="Huge" />
  <SuiButton size="massive" content="Massive" />
</template>`,Ny={__name:"SizeDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Size",code:Hy},{description:i(()=>[n(" A button can have different sizes ")]),example:i(()=>[t(r(z),{size:"mini",content:"Mini"}),t(r(z),{size:"tiny",content:"Tiny"}),t(r(z),{size:"small",content:"Small"}),t(r(z),{size:"medium",content:"Medium"}),t(r(z),{size:"large",content:"Large"}),t(r(z),{size:"big",content:"Big"}),t(r(z),{size:"huge",content:"Huge"}),t(r(z),{size:"massive",content:"Massive"})]),_:1}))}},Oy=`<template>
  <SuiButton floated="left" content="Left Floated" />
  <SuiButton floated="right" content="Right Floated" />
</template>`,qy={__name:"FloatedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Floated",code:Oy},{description:i(()=>[n(" A button can be aligned to the left or right of its container ")]),example:i(()=>[t(r(z),{floated:"left",content:"Left Floated"}),t(r(z),{floated:"right",content:"Right Floated"})]),_:1}))}},Gy=`<template>
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
</template>`,jy={__name:"ColoredDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Colored",code:Gy},{description:i(()=>[n(" A button can have different colors ")]),example:i(()=>[t(r(z),{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(r(z),{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(r(z),{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(r(z),{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(r(z),{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(r(z),{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(r(z),{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(r(z),{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(r(z),{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(r(z),{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(r(z),{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(r(z),{color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(r(z),{color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},Uy=`<template>
  <SuiButton compact content="Hold" />
  <SuiButton compact icon="pause" />
  <SuiButton compact labeled icon="pause" content="Pause" />
</template>`,Yy={__name:"CompactDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Compact",code:Uy},{description:i(()=>[n(" A button can reduce its padding to fit into tighter spaces ")]),example:i(()=>[t(r(z),{compact:"",content:"Hold"}),t(r(z),{compact:"",icon:"pause"}),t(r(z),{compact:"",labeled:"",icon:"pause",content:"Pause"})]),_:1}))}},Jy=`<template>
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
<\/script>`,Wy={__name:"ToggleDoc",setup(e){const l=G(!1);return(a,o)=>(y(),B(D,{label:"Toggle",code:Jy},{description:i(()=>[n(" A button can be formatted to toggle on and off ")]),example:i(()=>[t(r(z),{toggle:"",active:l.value,onClick:()=>l.value=!l.value,content:l.value?"Voted":"Vote",style:{"min-width":"200px"}},null,8,["active","onClick","content"])]),_:1}))}},Ky=`<template>
  <SuiButton positive content="Positive Button" />
</template>`,Xy={__name:"PositiveDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Positive",code:Ky},{description:i(()=>[n(" A button can hint towards a positive consequence ")]),example:i(()=>[t(r(z),{positive:"",content:"Positive Button"})]),_:1}))}},Qy=`<template>
  <SuiButton negative content="Negative Button" />
</template>`,Zy={__name:"NegativeDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Negative",code:Qy},{description:i(()=>[n(" A button can hint towards a negative consequence ")]),example:i(()=>[t(r(z),{negative:"",content:"Negative Button"})]),_:1}))}},ew=`<template>
  <SuiButton fluid content="Fits container" />
</template>`,tw={__name:"FluidDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Fluid",code:ew},{description:i(()=>[n(" A button can take the width of its container ")]),example:i(()=>[t(r(z),{fluid:"",content:"Fits container"})]),_:1}))}},iw=`<template>
  <SuiButton circular icon="settings" />
</template>`,lw={__name:"CircularDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Circular",code:iw},{description:i(()=>[n(" A button can be circular ")]),example:i(()=>[t(r(z),{circular:"",icon:"settings"})]),_:1}))}},aw=k("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?",-1),nw=`<template>
  <SuiButton attached="top" content="Top" />
  <SuiSegment>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?</p>
  </SuiSegment>
  <SuiButton attached="bottom" content="Bottom" />
</template>`,ow={__name:"VerticallyAttachedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Vertically Attached",code:nw},{description:i(()=>[n(" A button can be attached to the top or bottom of other content ")]),example:i(()=>[t(r(z),{attached:"top",content:"Top"}),t(r(N),{attached:""},{default:i(()=>[aw]),_:1}),t(r(z),{attached:"bottom",content:"Bottom"})]),_:1}))}},sw=`<template>
  <SuiButton attached="left" content="Left" />
  <SuiButton attached="right" content="Right" />
</template>`,rw={__name:"HorizontallyAttachedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Horizontally Attached",code:sw},{description:i(()=>[n(" A button can be attached to the left or right of other content ")]),example:i(()=>[t(r(z),{attached:"left",content:"Left"}),t(r(z),{attached:"right",content:"Right"})]),_:1}))}},uw=`<template>
  <SuiButtonGroup vertical>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,cw={__name:"VerticalButtonsDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Vertical Buttons",code:uw},{description:i(()=>[n(" Groups can be formatted to appear vertically ")]),example:i(()=>[t(r(gt),{vertical:""},{default:i(()=>[t(r(z),null,{default:i(()=>[n("Feed")]),_:1}),t(r(z),null,{default:i(()=>[n("Messages")]),_:1}),t(r(z),null,{default:i(()=>[n("Events")]),_:1}),t(r(z),null,{default:i(()=>[n("Photos")]),_:1})]),_:1})]),_:1}))}},dw=`<template>
  <SuiButtonGroup stackable>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,mw={__name:"StackableButtonsDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Stackable Buttons",code:dw},{description:i(()=>[n(" Horizontal groups can automatically be stacked on mobile devices ")]),example:i(()=>[t(r(gt),{stackable:""},{default:i(()=>[t(r(z),null,{default:i(()=>[n("Feed")]),_:1}),t(r(z),null,{default:i(()=>[n("Messages")]),_:1}),t(r(z),null,{default:i(()=>[n("Events")]),_:1}),t(r(z),null,{default:i(()=>[n("Photos")]),_:1})]),_:1})]),_:1}))}},pw=`<template>
  <SuiButtonGroup vertical labeled icon>
    <SuiButton icon="pause" content="Pause" />
    <SuiButton icon="play" content="Play" />
    <SuiButton icon="shuffle" content="Shuffle" />
  </SuiButtonGroup>
</template>`,fw={__name:"LabeledIconButtonsDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Icon Buttons",code:pw},{description:i(()=>[n(" Groups can be formatted as labeled icons ")]),example:i(()=>[t(r(gt),{vertical:"",labeled:"",icon:""},{default:i(()=>[t(r(z),{icon:"pause",content:"Pause"}),t(r(z),{icon:"play",content:"Play"}),t(r(z),{icon:"shuffle",content:"Shuffle"})]),_:1})]),_:1}))}},gw=`<template>
  <SuiButtonGroup>
    <SuiButton labeled icon="left chevron" content="Back" />
    <SuiButton icon="stop" content="Stop" />
    <SuiButton icon labeled="right">
      <SuiIcon name="right chevron" />
      Forward
    </SuiButton>
  </SuiButtonGroup>
</template>`,hw={__name:"MixedGroupDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Mixed Group",code:gw},{description:i(()=>[n(" Button groups can show groups of icons ")]),example:i(()=>[t(r(gt),null,{default:i(()=>[t(r(z),{labeled:"",icon:"left chevron",content:"Back"}),t(r(z),{icon:"stop",content:"Stop"}),t(r(z),{icon:"",labeled:"right"},{default:i(()=>[t(r(Y),{name:"right chevron"}),n(" Forward ")]),_:1})]),_:1})]),_:1}))}},_w=`<template>
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
</template>`,bw={__name:"EqualWidthDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Equal Width",code:_w},{description:i(()=>[n(" Groups can have their widths divided evenly ")]),example:i(()=>[t(r(gt),{widths:5},{default:i(()=>[t(r(z),null,{default:i(()=>[n("Overview")]),_:1}),t(r(z),null,{default:i(()=>[n("Specs")]),_:1}),t(r(z),null,{default:i(()=>[n("Warranty")]),_:1}),t(r(z),null,{default:i(()=>[n("Reviews")]),_:1}),t(r(z),null,{default:i(()=>[n("Support")]),_:1})]),_:1}),t(r(gt),{widths:3},{default:i(()=>[t(r(z),null,{default:i(()=>[n("Overview")]),_:1}),t(r(z),null,{default:i(()=>[n("Specs")]),_:1}),t(r(z),null,{default:i(()=>[n("Support")]),_:1})]),_:1})]),_:1}))}},vw=`<template>
  <SuiButtonGroup color="blue">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Sw={__name:"ColoredButtonsDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Colored Buttons",code:vw},{description:i(()=>[n(" Groups can have a shared color ")]),example:i(()=>[t(r(gt),{color:"blue"},{default:i(()=>[t(r(z),null,{default:i(()=>[n("One")]),_:1}),t(r(z),null,{default:i(()=>[n("Two")]),_:1}),t(r(z),null,{default:i(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},yw=`<template>
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
</template>`,ww={__name:"BasicButtonsDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Basic Buttons",code:yw},{description:i(()=>[n(" A button group can be less pronounced ")]),example:i(()=>[t(r(gt),{basic:""},{default:i(()=>[t(r(z),null,{default:i(()=>[n("One")]),_:1}),t(r(z),null,{default:i(()=>[n("Two")]),_:1}),t(r(z),null,{default:i(()=>[n("Three")]),_:1})]),_:1}),t(r(gt),null,{default:i(()=>[t(r(z),{basic:"",color:"red"},{default:i(()=>[n("One")]),_:1}),t(r(z),{basic:"",color:"blue"},{default:i(()=>[n("Two")]),_:1}),t(r(z),{basic:"",color:"green"},{default:i(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},Cw=`<template>
  <SuiButtonGroup size="large">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Aw={__name:"GroupSizesDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Group Sizes",code:Cw},{description:i(()=>[n(" Groups can have a shared color ")]),example:i(()=>[t(r(gt),{size:"large"},{default:i(()=>[t(r(z),null,{default:i(()=>[n("One")]),_:1}),t(r(z),null,{default:i(()=>[n("Two")]),_:1}),t(r(z),null,{default:i(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},xw={__name:"Button",setup(e){const l=[{id:"button",label:"Button",category:"Types",component:sy},{id:"emphasis",label:"Emphasis",category:"Types",component:uy},{id:"animated",label:"Animated",category:"Types",component:dy},{id:"labeled",label:"Labeled",category:"Types",component:py},{id:"icon",label:"Icon",category:"Types",component:gy},{id:"labeled-icon",label:"Labeled Icon",category:"Types",component:_y},{id:"basic",label:"Basic",category:"Types",component:vy},{id:"tertiary",label:"Tertiary",category:"Types",component:yy},{id:"inverted",label:"Inverted",category:"Types",component:Cy},{id:"buttons",label:"Buttons",category:"Groups",component:xy},{id:"icon-buttons",label:"Icon Buttons",category:"Groups",component:By},{id:"content",label:"Content",category:"Content",component:Iy},{id:"active",label:"Active",category:"States",component:Ey},{id:"disabled",label:"Disabled",category:"States",component:zy},{id:"loading",label:"Loading",category:"States",component:Vy},{id:"social",label:"Social",category:"Variations",component:My},{id:"size",label:"Size",category:"Variations",component:Ny},{id:"floated",label:"Floated",category:"Variations",component:qy},{id:"colored",label:"Colored",category:"Variations",component:jy},{id:"compact",label:"Compact",category:"Variations",component:Yy},{id:"toggle",label:"Toggle",category:"Variations",component:Wy},{id:"positive",label:"Positive",category:"Variations",component:Xy},{id:"negative",label:"Negative",category:"Variations",component:Zy},{id:"fluid",label:"Fluid",category:"Variations",component:tw},{id:"circular",label:"Circular",category:"Variations",component:lw},{id:"vertically-attached",label:"Vertically Attached",category:"Variations",component:ow},{id:"horizontally-attached",label:"Horizontally Attached",category:"Variations",component:rw},{id:"vertical-buttons",label:"Vertical Buttons",category:"Group Variations",component:cw},{id:"stackable-buttons",label:"Stackable Buttons",category:"Group Variations",component:mw},{id:"labeled-icon-buttons",label:"Labeled Icon Buttons",category:"Group Variations",component:fw},{id:"mixed-group",label:"Mixed Group",category:"Group Variations",component:hw},{id:"equal-width",label:"Equal Width",category:"Group Variations",component:bw},{id:"colored-buttons",label:"Colored Buttons",category:"Group Variations",component:Sw},{id:"basic-buttons",label:"Basic Buttons",category:"Group Variations",component:ww},{id:"group-sizes",label:"Group Sizes",category:"Group Variations",component:Aw}];return(a,o)=>(y(),B(ot,{title:"Button",description:"A button indicates a possible user action","component-docs":l}))}},kw=k("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Bw=`<template>
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
</template>`,$w={__name:"ContainerDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Container",code:Bw},{description:i(()=>[n(" A standard container ")]),example:i(()=>[t(r(Hi),null,{default:i(()=>[kw]),_:1})]),_:1}))}},Tw=k("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Lw=`<template>
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
</template>`,Iw={__name:"TextContainerDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Text Container",code:Lw},{description:i(()=>[n(" A container can reduce its maximum width to more naturally accommodate a single column of text ")]),example:i(()=>[t(r(Hi),{text:""},{default:i(()=>[t(r(pe),{as:"h2"},{default:i(()=>[n("Header")]),_:1}),Tw]),_:1})]),_:1}))}},Dw=`<template>
  <SuiContainer textAlign="left">Left Aligned</SuiContainer>
  <SuiContainer textAlign="center">Center Aligned</SuiContainer>
  <SuiContainer textAlign="right">Right Aligned</SuiContainer>
</template>`,Ew={__name:"TextAlignmentDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Text Alignment",code:Dw},{description:i(()=>[n(" A container can specify its text alignment ")]),example:i(()=>[t(r(Hi),{textAlign:"left"},{default:i(()=>[n("Left Aligned")]),_:1}),t(r(Hi),{textAlign:"center"},{default:i(()=>[n("Center Aligned")]),_:1}),t(r(Hi),{textAlign:"right"},{default:i(()=>[n("Right Aligned")]),_:1})]),_:1}))}},Rw=k("p",null," Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today. ",-1),zw=`<template>
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
</template>`,Pw={__name:"FluidDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Fluid",code:zw},{description:i(()=>[n(" A fluid container has no maximum width ")]),example:i(()=>[t(r(Hi),{fluid:""},{default:i(()=>[t(r(pe),{as:"h2"},{default:i(()=>[n("Dogs Roles with Humans")]),_:1}),Rw]),_:1})]),_:1}))}},Vw={__name:"Container",setup(e){const l=[{id:"container",label:"Container",category:"Types",component:$w},{id:"text-container",label:"Text Container",category:"Types",component:Iw},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:Ew},{id:"fluid",label:"Fluid",category:"Variations",component:Pw}];return(a,o)=>(y(),B(ot,{title:"Container",description:"A container limits content to a maximum width","component-docs":l}))}},Fw=`<template>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider />
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,Mw={__name:"DividerDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Divider",code:Fw},{description:i(()=>[n(" A standard divider ")]),example:i(()=>[t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(Ve)),t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},Hw=k("label",null,"Username",-1),Nw=k("input",{type:"text",placeholder:"Username"},null,-1),Ow=k("label",null,"Password",-1),qw=k("input",{type:"password",placeholder:"Password"},null,-1),Gw=`<template>
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
</template>`,jw={__name:"VerticalDividerDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Vertical Divider",code:Gw},{description:i(()=>[n(" A divider can segment content vertically. ")]),example:i(()=>[t(r(N),{placeholder:""},{default:i(()=>[t(r(ba),{columns:"equal"},{default:i(()=>[t(r($t),null,{default:i(()=>[t(r(Ht),null,{default:i(()=>[t(r(it),null,{default:i(()=>[Hw,Nw]),_:1}),t(r(it),null,{default:i(()=>[Ow,qw]),_:1}),t(r(z),{primary:""},{default:i(()=>[n("Login")]),_:1})]),_:1})]),_:1}),t(r($t),{textAlign:"middle"},{default:i(()=>[t(r(z),{secondary:"",icon:"signup",content:"Sign Up"})]),_:1})]),_:1}),t(r(Ve),{vertical:""},{default:i(()=>[n("Or")]),_:1})]),_:1})]),_:1}))}},Uw=`<template>
  <SuiSegment basic textAlign="center">
    <SuiInput icon="search" iconPosition="left" action="Search" placeholder="Order #" />
    <SuiDivider horizontal>Or</SuiDivider>
    <SuiButton labeled icon="add" color="green" content="Create New Order" />
  </SuiSegment>
</template>`,Yw={__name:"HorizontalDividerDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Horizontal Divider",code:Uw},{description:i(()=>[n(" A divider can segment content horizontally ")]),example:i(()=>[t(r(N),{basic:"",textAlign:"center"},{default:i(()=>[t(r(Ze),{icon:"search",iconPosition:"left",action:"Search",placeholder:"Order #"}),t(r(Ve),{horizontal:""},{default:i(()=>[n("Or")]),_:1}),t(r(z),{labeled:"",icon:"add",color:"green",content:"Create New Order"})]),_:1})]),_:1}))}},Jw=`<template>
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
</template>`,Ww={__name:"HorizontalAlignmentDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Horizontal Alignment",code:Jw},{description:i(()=>[n(" A horizontal divider can be aligned ")]),example:i(()=>[t(r(Ve),{horizontal:"",textAlign:"left"},{default:i(()=>[t(r(Y),{name:"left align"}),n(" Left Aligned ")]),_:1}),t(r(Ve),{horizontal:"",textAlign:"center"},{default:i(()=>[t(r(Y),{name:"center align"}),n(" Center Aligned ")]),_:1}),t(r(Ve),{horizontal:"",textAlign:"right"},{default:i(()=>[t(r(Y),{name:"right align"}),n(" Right Aligned ")]),_:1})]),_:1}))}},Kw=`<template>
  <SuiSegment inverted>
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider inverted />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider horizontal inverted>Horizontal</SuiDivider>
  </SuiSegment>
</template>`,Xw={__name:"InvertedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Inverted",code:Kw},{description:i(()=>[n(" A divider can have its colors inverted ")]),example:i(()=>[t(r(N),{inverted:""},{default:i(()=>[t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(Ve),{inverted:""}),t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(Ve),{horizontal:"",inverted:""},{default:i(()=>[n("Horizontal")]),_:1})]),_:1})]),_:1}))}},Qw=`<template>
  <SuiSegment>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
    <SuiDivider fitted />
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
  </SuiSegment>
</template>`,Zw={__name:"FittedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Inverted",code:Qw},{description:i(()=>[n(" A divider can be fitted, without any space above or below it. ")]),example:i(()=>[t(r(N),null,{default:i(()=>[n(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),t(r(Ve),{fitted:""}),n(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. ")]),_:1})]),_:1}))}},eC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider hidden />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,tC={__name:"HiddenDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Hidden",code:eC},{description:i(()=>[n(" A hidden divider divides content without creating a dividing line ")]),example:i(()=>[t(r(pe),null,{default:i(()=>[n("Section One")]),_:1}),t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(Ve),{hidden:""}),t(r(pe),null,{default:i(()=>[n("Section Two")]),_:1}),t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},iC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider section />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,lC={__name:"SectionDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Section",code:iC},{description:i(()=>[n(" A divider can provide greater margins to divide sections of content ")]),example:i(()=>[t(r(pe),null,{default:i(()=>[n("Section One")]),_:1}),t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(Ve),{section:""}),t(r(pe),null,{default:i(()=>[n("Section Two")]),_:1}),t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},aC=`<template>
  <SuiSegment>
    <SuiHeader floated="right">Section One</SuiHeader>
    <SuiDivider clearing />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,nC={__name:"ClearingDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Clearing",code:aC},{description:i(()=>[n(" A divider can clear the contents above it ")]),example:i(()=>[t(r(N),null,{default:i(()=>[t(r(pe),{floated:"right"},{default:i(()=>[n("Section One")]),_:1}),t(r(Ve),{clearing:""}),t(r(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},oC=`<template>
  <SuiDivider size="mini">MINI</SuiDivider>
  <SuiDivider size="tiny">TINY</SuiDivider>
  <SuiDivider size="small">SMALL</SuiDivider>
  <SuiDivider size="large">LARGE</SuiDivider>
  <SuiDivider size="big">BIG</SuiDivider>
  <SuiDivider size="huge">HUGE</SuiDivider>
  <SuiDivider size="massive">MASSIVE</SuiDivider>
</template>`,sC={__name:"SizeDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Size",code:oC},{description:i(()=>[n(" A divider text can vary in size ")]),example:i(()=>[t(r(Ve),{horizontal:"",size:"mini"},{default:i(()=>[n("MINI")]),_:1}),t(r(Ve),{horizontal:"",size:"tiny"},{default:i(()=>[n("TINY")]),_:1}),t(r(Ve),{horizontal:"",size:"small"},{default:i(()=>[n("SMALL")]),_:1}),t(r(Ve),{horizontal:"",size:"large"},{default:i(()=>[n("LARGE")]),_:1}),t(r(Ve),{horizontal:"",size:"big"},{default:i(()=>[n("BIG")]),_:1}),t(r(Ve),{horizontal:"",size:"huge"},{default:i(()=>[n("HUGE")]),_:1}),t(r(Ve),{horizontal:"",size:"massive"},{default:i(()=>[n("MASSIVE")]),_:1})]),_:1}))}},rC={__name:"Divider",setup(e){const l=[{id:"divider",label:"Divider",category:"Types",component:Mw},{id:"vertical-divider",label:"Vertical Divider",category:"Types",component:jw},{id:"horizontal-divider",label:"Horizontal Divider",category:"Types",component:Yw},{id:"horizontal-alignment",label:"Horizontal Alignment",category:"Types",component:Ww},{id:"inverted",label:"Inverted",category:"Variations",component:Xw},{id:"fitted",label:"Fitted",category:"Variations",component:Zw},{id:"hidden",label:"Hidden",category:"Variations",component:tC},{id:"section",label:"Section",category:"Variations",component:lC},{id:"clearing",label:"Clearing",category:"Variations",component:nC},{id:"size",label:"Size",category:"Variations",component:sC}];return(a,o)=>(y(),B(ot,{title:"Divider",description:"A divider visually segments content into groups","component-docs":l}))}},uC=`<template>
  <SuiEmoji name="anguished" disabled />
</template>`,cC={__name:"DisabledDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Disabled",code:uC},{description:i(()=>[n(" An emoji can show that it is disabled ")]),example:i(()=>[t(r(It),{name:"anguished",disabled:""})]),_:1}))}},dC=`<template>
  <SuiEmoji name="angel" loading />
  <SuiEmoji name="blush" loading />
  <SuiEmoji name="grin" loading />
</template>`,mC={__name:"LoadingDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Loading",code:dC},{description:i(()=>[n(" An emoji can be used as a simple loader ")]),example:i(()=>[t(r(It),{name:"angel",loading:""}),t(r(It),{name:"blush",loading:""}),t(r(It),{name:"grin",loading:""})]),_:1}))}},pC=`<template>
  <SuiEmoji name="relaxed" size="small" />
  <SuiEmoji name="relaxed" size="medium" />
  <SuiEmoji name="relaxed" size="large" />
  <SuiEmoji name="relaxed" size="big" />
</template>`,fC={__name:"SizeDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Size",code:pC},{description:i(()=>[n(" An emoji can vary in size ")]),example:i(()=>[t(r(It),{name:"relaxed",size:"small"}),t(r(It),{name:"relaxed",size:"medium"}),t(r(It),{name:"relaxed",size:"large"}),t(r(It),{name:"relaxed",size:"big"})]),_:1}))}},gC=`<template>
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
</template>`,hC={__name:"AutosizingDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Autosizing",code:gC},{description:i(()=>[n(" If no specific size class is given, all emojis are automatically sized according to the current element font-size ")]),example:i(()=>[t(r(pe),{size:"small"},{default:i(()=>[n(" Within a Header "),t(r(It),{name:"relaxed"})]),_:1}),t(r(z),{as:"div",size:"large"},{default:i(()=>[n(" Within a Button "),t(r(It),{name:"relaxed"})]),_:1}),t(r(O),{size:"massive"},{default:i(()=>[n(" Within a Label "),t(r(It),{name:"relaxed"})]),_:1})]),_:1}))}},_C=`<template>
  <SuiEmoji link name="slight_smile" size="medium" />
</template>`,bC={__name:"LinkDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Link",code:_C},{description:i(()=>[n(" An emoji can be formatted as a link ")]),example:i(()=>[t(r(It),{link:"",name:"slight_smile",size:"medium"})]),_:1}))}},vC={__name:"Emoji",setup(e){const l=[{id:"disabled",label:"Disabled",category:"States",component:cC},{id:"loading",label:"Loading",category:"States",component:mC},{id:"size",label:"Size",category:"Variations",component:fC},{id:"autosizing",label:"Autosizing",category:"Variations",component:hC},{id:"link",label:"Link",category:"Variations",component:bC}];return(a,o)=>(y(),B(ot,{title:"Emoji",description:"An emoji is a glyph used to represent an emotional state","component-docs":l}))}},SC=`<template>
  <SuiFlag name="de" size="small" />
  <SuiFlag name="fr" size="medium" />
  <SuiFlag name="li" size="large" />
  <SuiFlag name="jp" size="big" />
  <SuiFlag name="gb" size="huge" />
  <SuiFlag name="un" size="massive" />
</template>`,yC={__name:"SizeDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Size",code:SC},{description:i(()=>[n(" A flag can vary in size ")]),example:i(()=>[t(r(Yt),{name:"de",size:"small"}),t(r(Yt),{name:"fr",size:"medium"}),t(r(Yt),{name:"li",size:"large"}),t(r(Yt),{name:"jp",size:"big"}),t(r(Yt),{name:"gb",size:"huge"}),t(r(Yt),{name:"un",size:"massive"})]),_:1}))}},wC=`<template>
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
</template>`,CC={__name:"AutosizingDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Autosizing",code:wC},{description:i(()=>[n(" If no specific size class is given, all flags are automatically sized according to the current element font-size ")]),example:i(()=>[t(r(pe),{size:"small"},{default:i(()=>[n(" Within a Header "),t(r(Yt),{name:"us"})]),_:1}),t(r(z),{as:"div",size:"large"},{default:i(()=>[n(" Within a Button "),t(r(Yt),{name:"eu"})]),_:1}),t(r(O),{size:"massive"},{default:i(()=>[n(" Within a Label "),t(r(Yt),{name:"pirate"})]),_:1})]),_:1}))}},AC={__name:"Flag",setup(e){const l=[{id:"size",label:"Size",category:"Types",component:yC},{id:"autosizing",label:"Autosizing",category:"Types",component:CC}];return(a,o)=>(y(),B(ot,{title:"Flag",description:"A flag is used to represent a political state","component-docs":l}))}},xC=`<template>
  <SuiHeader as="h1">First Header</SuiHeader>
  <SuiHeader as="h2">Second Header</SuiHeader>
  <SuiHeader as="h3">Third Header</SuiHeader>
  <SuiHeader as="h4">Fourth Header</SuiHeader>
  <SuiHeader as="h5">Fifth Header</SuiHeader>
</template>`,kC={__name:"PageHeadersDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Page Headers",code:xC},{description:i(()=>[n(" Headers may be oriented to give the hierarchy of a section in the context of the page ")]),example:i(()=>[t(r(pe),{as:"h1"},{default:i(()=>[n("First Header")]),_:1}),t(r(pe),{as:"h2"},{default:i(()=>[n("Second Header")]),_:1}),t(r(pe),{as:"h3"},{default:i(()=>[n("Third Header")]),_:1}),t(r(pe),{as:"h4"},{default:i(()=>[n("Fourth Header")]),_:1}),t(r(pe),{as:"h5"},{default:i(()=>[n("Fifth Header")]),_:1})]),_:1}))}},BC=`<template>
  <SuiHeader size="huge">Huge Header</SuiHeader>
  <SuiHeader size="large">Large Header</SuiHeader>
  <SuiHeader size="medium">Medium Header</SuiHeader>
  <SuiHeader size="small">Small Header</SuiHeader>
  <SuiHeader size="tiny">Tiny Header</SuiHeader>
</template>`,$C={__name:"ContentHeadersDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Content Headers",code:BC},{description:i(()=>[n(" Headers may be oriented to give the importance of a section in the context of the content that surrounds it ")]),example:i(()=>[t(r(pe),{size:"huge"},{default:i(()=>[n("Huge Header")]),_:1}),t(r(pe),{size:"large"},{default:i(()=>[n("Large Header")]),_:1}),t(r(pe),{size:"medium"},{default:i(()=>[n("Medium Header")]),_:1}),t(r(pe),{size:"small"},{default:i(()=>[n("Small Header")]),_:1}),t(r(pe),{size:"tiny"},{default:i(()=>[n("Tiny Header")]),_:1})]),_:1}))}},TC=`<template>
  <SuiHeader icon>
    <SuiIcon name="settings" />
    <SuiHeaderContent>
      Account Settings
    </SuiHeaderContent>
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,LC={__name:"IconHeadersDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Icon Headers",code:TC},{description:i(()=>[n(" A header can be formatted to emphasize an icon ")]),example:i(()=>[t(r(pe),{icon:""},{default:i(()=>[t(r(Y),{name:"settings"}),t(r(gs),null,{default:i(()=>[n(" Account Settings ")]),_:1}),t(r(Yi),null,{default:i(()=>[n(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},IC=k("span",null,"$10.99",-1),DC=`<template>
  <SuiHeader sub>Price</SuiHeader>
  <span>$10.99</span>
</template>`,EC={__name:"SubHeadersDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Sub Headers",code:DC},{description:i(()=>[n(" Headers may be formatted to label smaller or de-emphasized content. ")]),example:i(()=>[t(r(pe),{sub:""},{default:i(()=>[n("Price")]),_:1}),IC]),_:1}))}},RC=`<template>
  <SuiHeader as="h2">
    <SuiImage src="/images/avatar/large/steve.jpg" avatar />
    Steve
  </SuiHeader>
</template>`,zC={__name:"ImageDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Image",code:RC},{description:i(()=>[n(" A header may contain an image ")]),example:i(()=>[t(r(pe),{as:"h2"},{default:i(()=>[t(r(oe),{src:"/vue-fomantic-ui/images/avatar/large/steve.jpg",avatar:""}),n(" Steve ")]),_:1})]),_:1}))}},PC=`<template>
  <SuiHeader as="h2">
    <SuiIcon name="plug" />
    <SuiHeaderContent>
      Uptime Guarantee
    </SuiHeaderContent>
  </SuiHeader>
</template>`,VC={__name:"IconDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Icon",code:PC},{description:i(()=>[n(" A header may contain an Icon ")]),example:i(()=>[t(r(pe),{as:"h2"},{default:i(()=>[t(r(Y),{name:"plug"}),t(r(gs),null,{default:i(()=>[n(" Uptime Guarantee ")]),_:1})]),_:1})]),_:1}))}},FC=`<template>
  <SuiHeader as="h2">
    Account Settings
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,MC={__name:"SubheaderDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Subheader",code:FC},{description:i(()=>[n(" Headers may contain subheaders ")]),example:i(()=>[t(r(pe),{as:"h2"},{default:i(()=>[n(" Account Settings "),t(r(Yi),null,{default:i(()=>[n(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},HC=`<template>
  <SuiHeader disabled>
    Disabled Header
  </SuiHeader>
</template>`,NC={__name:"DisabledDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Disabled",code:HC},{description:i(()=>[n(" A header can show that it is inactive ")]),example:i(()=>[t(r(pe),{disabled:""},{default:i(()=>[n(" Disabled Header ")]),_:1})]),_:1}))}},OC=`<template>
  <SuiHeader as="h3" dividing>
    Dividing Header
  </SuiHeader>
</template>`,qC={__name:"DividingDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Dividing",code:OC},{description:i(()=>[n(" A header can be formatted to divide itself from the content below it ")]),example:i(()=>[t(r(pe),{as:"h3",dividing:""},{default:i(()=>[n(" Dividing Header ")]),_:1})]),_:1}))}},GC=`<template>
  <SuiHeader as="h3" block>
    Block Header
  </SuiHeader>
</template>`,jC={__name:"BlockDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Block",code:GC},{description:i(()=>[n(" A header can be formatted to appear inside a content block ")]),example:i(()=>[t(r(pe),{as:"h3",block:""},{default:i(()=>[n(" Block Header ")]),_:1})]),_:1}))}},UC=`<template>
  <SuiHeader as="h2" attached="top">
    Attached Header
  </SuiHeader>
  <SuiSegment attached>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </SuiSegment>
</template>`,YC={__name:"AttachedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Attached",code:UC},{description:i(()=>[n(" A header can be attached to other content, like a segment ")]),example:i(()=>[t(r(pe),{as:"h2",attached:"top"},{default:i(()=>[n(" Attached Header ")]),_:1}),t(r(N),{attached:""},{default:i(()=>[n(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),_:1})]),_:1}))}},JC=`<template>
  <SuiSegment clearing>
    <SuiHeader as="h3" floated="right">
      Go Forward
    </SuiHeader>
    <SuiHeader as="h3" floated="left">
      Go Back
    </SuiHeader>
  </SuiSegment>
</template>`,WC={__name:"FloatingDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Floating",code:JC},{description:i(()=>[n(" A header can sit to the left or right of other content ")]),example:i(()=>[t(r(N),{clearing:""},{default:i(()=>[t(r(pe),{as:"h3",floated:"right"},{default:i(()=>[n(" Go Forward ")]),_:1}),t(r(pe),{as:"h3",floated:"left"},{default:i(()=>[n(" Go Back ")]),_:1})]),_:1})]),_:1}))}},KC=`<template>
  <SuiSegment>
    <SuiHeader as="h3" textAlign="right">Float Right</SuiHeader>
    <SuiHeader as="h3" textAlign="left">Float Left</SuiHeader>
    <SuiHeader as="h3" textAlign="justified">
      This text takes up the full width of the container
    </SuiHeader>
    <SuiHeader as="h3" textAlign="center">Centered</SuiHeader>
  </SuiSegment>
</template>`,XC={__name:"TextAlignmentDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Text Alignment",code:KC},{description:i(()=>[n(" A header can have its text aligned to a side ")]),example:i(()=>[t(r(N),null,{default:i(()=>[t(r(pe),{as:"h3",textAlign:"right"},{default:i(()=>[n("Float Right")]),_:1}),t(r(pe),{as:"h3",textAlign:"left"},{default:i(()=>[n("Float Left")]),_:1}),t(r(pe),{as:"h3",textAlign:"justified"},{default:i(()=>[n(" This text takes up the full width of the container ")]),_:1}),t(r(pe),{as:"h3",textAlign:"center"},{default:i(()=>[n("Centered")]),_:1})]),_:1})]),_:1}))}},QC=`<template>
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
</template>`,ZC={__name:"ColoredDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Colored",code:QC},{description:i(()=>[n(" A header can be formatted with different colors ")]),example:i(()=>[t(r(pe),{as:"h4",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(r(pe),{as:"h4",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(r(pe),{as:"h4",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(r(pe),{as:"h4",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(r(pe),{as:"h4",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(r(pe),{as:"h4",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(r(pe),{as:"h4",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(r(pe),{as:"h4",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(r(pe),{as:"h4",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(r(pe),{as:"h4",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(r(pe),{as:"h4",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(r(pe),{as:"h4",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(r(pe),{as:"h4",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(r(pe),{as:"h4",color:"grey"},{default:i(()=>[n("Grey")]),_:1})]),_:1}))}},e0=`<template>
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
</template>`,t0={__name:"InvertedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Colored",code:e0},{description:i(()=>[n(" A header can have its colors inverted for contrast ")]),example:i(()=>[t(r(N),{inverted:""},{default:i(()=>[t(r(pe),{as:"h4",inverted:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(r(pe),{as:"h4",inverted:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(r(pe),{as:"h4",inverted:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(r(pe),{as:"h4",inverted:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(r(pe),{as:"h4",inverted:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(r(pe),{as:"h4",inverted:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(r(pe),{as:"h4",inverted:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(r(pe),{as:"h4",inverted:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(r(pe),{as:"h4",inverted:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(r(pe),{as:"h4",inverted:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(r(pe),{as:"h4",inverted:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(r(pe),{as:"h4",inverted:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1})]),_:1})]),_:1}))}},i0={__name:"Header",setup(e){const l=[{id:"page-headers",label:"Page Headers",category:"Types",component:kC},{id:"content-headers",label:"Content Headers",category:"Types",component:$C},{id:"icon-headers",label:"Icon Headers",category:"Types",component:LC},{id:"sub-headers",label:"Sub Headers",category:"Types",component:EC},{id:"image",label:"Image",category:"Content",component:zC},{id:"icon",label:"Icon",category:"Content",component:VC},{id:"subheader",label:"Subheader",category:"Content",component:MC},{id:"disabled",label:"Disabled",category:"States",component:NC},{id:"dividing",label:"Dividing",category:"Variations",component:qC},{id:"block",label:"Block",category:"Variations",component:jC},{id:"attached",label:"Attached",category:"Variations",component:YC},{id:"floating",label:"Floating",category:"Variations",component:WC},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:XC},{id:"colored",label:"Colored",category:"Variations",component:ZC},{id:"inverted",label:"Inverted",category:"Variations",component:t0}];return(a,o)=>(y(),B(ot,{title:"Header",description:"A header provides a short summary of content","component-docs":l}))}},l0=`<template>
  <SuiIcon name="users" disabled />
</template>`,a0={__name:"DisabledDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Disabled",code:l0},{description:i(()=>[n(" An icon can show that it is disabled ")]),example:i(()=>[t(r(Y),{name:"users",disabled:""})]),_:1}))}},n0=`<template>
  <SuiIcon name="spinner" loading />
  <SuiIcon name="notched circle" loading />
  <SuiIcon name="asterisk" loading />
</template>`,o0={__name:"LoadingDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Loading",code:n0},{description:i(()=>[n(" An icon can be used as a simple loader ")]),example:i(()=>[t(r(Y),{name:"spinner",loading:""}),t(r(Y),{name:"notched circle",loading:""}),t(r(Y),{name:"asterisk",loading:""})]),_:1}))}},s0=k("br",null,null,-1),r0=`<template>
  <div>
    This icon
    <SuiIcon name="help" fitted />
    is fitted.
    <br />
    This icon
    <SuiIcon name="help" />
    is not fitted.
  </div>
</template>`,u0={__name:"FittedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Fitted",code:r0},{description:i(()=>[n(" An icon can be fitted, without any space to the left or right of it. ")]),example:i(()=>[k("div",null,[n(" This icon "),t(r(Y),{name:"help",fitted:""}),n(" is fitted. "),s0,n(" This icon "),t(r(Y),{name:"help"}),n(" is not fitted. ")])]),_:1}))}},c0=`<template>
  <SuiIcon name="home" size="mini" />
  <SuiIcon name="home" size="tiny" />
  <SuiIcon name="home" size="small" />
  <SuiIcon name="home" />
  <SuiIcon name="home" size="large" />
  <SuiIcon name="home" size="big" />
  <SuiIcon name="home" size="huge" />
  <SuiIcon name="home" size="massive" />
</template>`,d0={__name:"SizeDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Size",code:c0},{description:i(()=>[n(" An icon can vary in size ")]),example:i(()=>[t(r(Y),{name:"home",size:"mini"}),t(r(Y),{name:"home",size:"tiny"}),t(r(Y),{name:"home",size:"small"}),t(r(Y),{name:"home"}),t(r(Y),{name:"home",size:"large"}),t(r(Y),{name:"home",size:"big"}),t(r(Y),{name:"home",size:"huge"}),t(r(Y),{name:"home",size:"massive"})]),_:1}))}},m0=`<template>
  <SuiIcon name="close" link />
  <SuiIcon name="help" link />
</template>`,p0={__name:"LinkDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Link",code:m0},{description:i(()=>[n(" An icon can be formatted as a link ")]),example:i(()=>[t(r(Y),{name:"close",link:""}),t(r(Y),{name:"help",link:""})]),_:1}))}},f0=`<template>
  <SuiIcon name="cloud" flipped="horizontally" />
  <SuiIcon name="cloud" flipped="vertically" />
</template>`,g0={__name:"FlippedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Flipped",code:f0},{description:i(()=>[n(" An icon can be flipped ")]),example:i(()=>[t(r(Y),{name:"cloud",flipped:"horizontally"}),t(r(Y),{name:"cloud",flipped:"vertically"})]),_:1}))}},h0=`<template>
  <SuiIcon name="cloud" rotated="clockwise" />
  <SuiIcon name="cloud" rotated="counterclockwise" />
</template>`,_0={__name:"RotatedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Rotated",code:h0},{description:i(()=>[n(" An icon can be rotated ")]),example:i(()=>[t(r(Y),{name:"cloud",rotated:"clockwise"}),t(r(Y),{name:"cloud",rotated:"counterclockwise"})]),_:1}))}},b0=`<template>
  <SuiIcon name="users" circular />
  <SuiIcon name="users" circular color="teal" />
  <SuiIcon name="users" circular inverted />
  <SuiIcon name="users" circular inverted color="teal" />
</template>`,v0={__name:"CircularDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Circular",code:b0},{description:i(()=>[n(" An icon can be formatted to appear circular ")]),example:i(()=>[t(r(Y),{name:"users",circular:""}),t(r(Y),{name:"users",circular:"",color:"teal"}),t(r(Y),{name:"users",circular:"",inverted:""}),t(r(Y),{name:"users",circular:"",inverted:"",color:"teal"})]),_:1}))}},S0=`<template>
  <SuiIcon name="users" circular colored color="red" />
  <SuiIcon name="users" circular colored color="green" />
  <SuiIcon name="users" circular colored color="blue" />
</template>`,y0={__name:"CircularColoredDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Circular Colored",code:S0},{description:i(()=>[n(" The circular color can appear in the same color as the icon itself ")]),example:i(()=>[t(r(Y),{name:"users",circular:"",colored:"",color:"red"}),t(r(Y),{name:"users",circular:"",colored:"",color:"green"}),t(r(Y),{name:"users",circular:"",colored:"",color:"blue"})]),_:1}))}},w0=`<template>
  <SuiIcon name="users" bordered />
  <SuiIcon name="users" bordered color="teal" />
  <SuiIcon name="users" bordered inverted color="black" />
  <SuiIcon name="users" bordered inverted color="teal" />
</template>`,C0={__name:"BorderedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Bordered",code:w0},{description:i(()=>[n(" An icon can be formatted to appear bordered ")]),example:i(()=>[t(r(Y),{name:"users",bordered:""}),t(r(Y),{name:"users",bordered:"",color:"teal"}),t(r(Y),{name:"users",bordered:"",inverted:"",color:"black"}),t(r(Y),{name:"users",bordered:"",inverted:"",color:"teal"})]),_:1}))}},A0=`<template>
  <SuiIcon name="users" bordered colored color="red" />
  <SuiIcon name="users" bordered colored color="green" />
  <SuiIcon name="users" bordered colored color="blue" />
</template>`,x0={__name:"BorderedColoredDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Bordered Colored",code:A0},{description:i(()=>[n(" The bordered color can appear in the same color as the icon itself ")]),example:i(()=>[t(r(Y),{name:"users",bordered:"",colored:"",color:"red"}),t(r(Y),{name:"users",bordered:"",colored:"",color:"green"}),t(r(Y),{name:"users",bordered:"",colored:"",color:"blue"})]),_:1}))}},k0=`<template>
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
</template>`,B0={__name:"ColoredDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Colored",code:k0},{description:i(()=>[n(" An icon can be formatted with different colors ")]),example:i(()=>[t(r(Y),{name:"users",primary:""}),t(r(Y),{name:"users",secondary:""}),t(r(Y),{name:"users",color:"red"}),t(r(Y),{name:"users",color:"orange"}),t(r(Y),{name:"users",color:"yellow"}),t(r(Y),{name:"users",color:"olive"}),t(r(Y),{name:"users",color:"green"}),t(r(Y),{name:"users",color:"teal"}),t(r(Y),{name:"users",color:"blue"}),t(r(Y),{name:"users",color:"violet"}),t(r(Y),{name:"users",color:"purple"}),t(r(Y),{name:"users",color:"pink"}),t(r(Y),{name:"users",color:"brown"}),t(r(Y),{name:"users",color:"grey"}),t(r(Y),{name:"users",color:"black"})]),_:1}))}},$0=`<template>
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
</template>`,T0={__name:"InvertedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Inverted",code:$0},{description:i(()=>[n(" An icon can have its colors inverted for contrast ")]),example:i(()=>[t(r(Y),{name:"users",inverted:""}),t(r(Y),{name:"users",inverted:"",primary:""}),t(r(Y),{name:"users",inverted:"",secondary:""}),t(r(Y),{name:"users",inverted:"",color:"red"}),t(r(Y),{name:"users",inverted:"",color:"orange"}),t(r(Y),{name:"users",inverted:"",color:"yellow"}),t(r(Y),{name:"users",inverted:"",color:"olive"}),t(r(Y),{name:"users",inverted:"",color:"green"}),t(r(Y),{name:"users",inverted:"",color:"teal"}),t(r(Y),{name:"users",inverted:"",color:"blue"}),t(r(Y),{name:"users",inverted:"",color:"violet"}),t(r(Y),{name:"users",inverted:"",color:"purple"}),t(r(Y),{name:"users",inverted:"",color:"pink"}),t(r(Y),{name:"users",inverted:"",color:"brown"}),t(r(Y),{name:"users",inverted:"",color:"grey"})]),_:1}))}},L0=`<template>
  <SuiIconGroup size="huge">
    <SuiIcon name="circle outline" size="big" />
    <SuiIcon name="user" />
  </SuiIconGroup>
  <SuiIconGroup size="huge">
    <SuiIcon name="dont" size="big" color="red" />
    <SuiIcon name="user" color="black" />
  </SuiIconGroup>
</template>`,I0={__name:"IconsDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Icons",code:L0},{description:i(()=>[n(" Several icons can be used together as a group ")]),example:i(()=>[t(r(Ri),{size:"huge"},{default:i(()=>[t(r(Y),{name:"circle outline",size:"big"}),t(r(Y),{name:"user"})]),_:1}),t(r(Ri),{size:"huge"},{default:i(()=>[t(r(Y),{name:"dont",size:"big",color:"red"}),t(r(Y),{name:"user",color:"black"})]),_:1})]),_:1}))}},D0=`<template>
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
</template>`,E0={__name:"CornerIconDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Corner Icon",code:D0},{description:i(()=>[n(" A group of icons can display a smaller corner icon ")]),example:i(()=>[t(r(Ri),{size:"huge"},{default:i(()=>[t(r(Y),{name:"puzzle"}),t(r(Y),{name:"add",corner:"top left"})]),_:1}),t(r(Ri),{size:"huge"},{default:i(()=>[t(r(Y),{name:"puzzle"}),t(r(Y),{name:"add",corner:"top right"})]),_:1}),t(r(Ri),{size:"huge"},{default:i(()=>[t(r(Y),{name:"puzzle"}),t(r(Y),{name:"add",corner:"bottom left"})]),_:1}),t(r(Ri),{size:"huge"},{default:i(()=>[t(r(Y),{name:"puzzle"}),t(r(Y),{name:"add",corner:"bottom right"})]),_:1})]),_:1}))}},R0={__name:"Icon",setup(e){const l=[{id:"disabled",label:"Disabled",category:"States",component:a0},{id:"loading",label:"Loading",category:"States",component:o0},{id:"fitted",label:"Fitted",category:"Variations",component:u0},{id:"size",label:"Size",category:"Variations",component:d0},{id:"link",label:"Link",category:"Variations",component:p0},{id:"flipped",label:"Flipped",category:"Variations",component:g0},{id:"rotated",label:"Rotated",category:"Variations",component:_0},{id:"circular",label:"Circular",category:"Variations",component:v0},{id:"circular-colored",label:"Circular Colored",category:"Variations",component:y0},{id:"bordered",label:"Bordered",category:"Variations",component:C0},{id:"bordered-colored",label:"Bordered Colored",category:"Variations",component:x0},{id:"colored",label:"Colored",category:"Variations",component:B0},{id:"inverted",label:"Inverted",category:"Variations",component:T0},{id:"icons",label:"Icons",category:"Groups",component:I0},{id:"corner-icon",label:"Corner Icon",category:"Groups",component:E0}];return(a,o)=>(y(),B(ot,{title:"Icon",description:"An icon is a glyph used to represent something else","component-docs":l}))}},z0=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" />
</template>`,P0={__name:"ImageDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Image",code:z0},{description:i(()=>[n(" An image ")]),example:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}))}},V0=`<template>
  <SuiImage
    as="a"
    size="medium"
    href="https://google.com"
    src="/images/wireframe/image-text.png"
    target="_blank"
  />
</template>`,F0={__name:"ImageLinkDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Image Link",code:V0},{description:i(()=>[n(" An image can be formatted to link to other content ")]),example:i(()=>[t(r(oe),{as:"a",size:"medium",href:"https://google.com",src:"/vue-fomantic-ui/images/wireframe/image-text.png",target:"_blank"})]),_:1}))}},M0=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" hidden />
</template>`,H0={__name:"HiddenDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Hidden",code:M0},{description:i(()=>[n(" An image can be hidden ")]),example:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png",hidden:""})]),_:1}))}},N0=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" disabled />
</template>`,O0={__name:"DisabledDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Disabled",code:N0},{description:i(()=>[n(" An image can show that it is disabled and cannot be selected ")]),example:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png",disabled:""})]),_:1}))}},q0=k("span",null,"Username",-1),G0=`<template>
  <SuiImage src="/images/wireframe/square-image.png" avatar />
  <span>Username</span>
</template>`,j0={__name:"AvatarDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Avatar",code:G0},{description:i(()=>[n(" An image may be formatted to appear inline with text as an avatar ")]),example:i(()=>[t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/square-image.png",avatar:""}),q0]),_:1}))}},U0=`<template>
  <SuiImage size="medium" src="/images/wireframe/white-image.png" bordered />
</template>`,Y0={__name:"BorderedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Bordered",code:U0},{description:i(()=>[n(" An image may include a border to emphasize the edges of white or transparent content ")]),example:i(()=>[t(r(oe),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/white-image.png",bordered:""})]),_:1}))}},J0=`<template>
  <SuiImage src="/images/wireframe/image.png" fluid />
</template>`,W0={__name:"FluidDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Fluid",code:J0},{description:i(()=>[n(" An image can take up the width of its container ")]),example:i(()=>[t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png",fluid:""})]),_:1}))}},K0=`<template>
  <SuiImage src="/images/wireframe/image.png" rounded />
</template>`,X0={__name:"RoundedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Rounded",code:K0},{description:i(()=>[n(" An image may appear rounded ")]),example:i(()=>[t(r(oe),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png",rounded:""})]),_:1}))}},Q0=`<template>
  <SuiImage src="/images/wireframe/square-image.png" circular />
</template>`,Z0={__name:"CircularDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Circular",code:Q0},{description:i(()=>[n(" An image may appear circular ")]),example:i(()=>[t(r(oe),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/square-image.png",circular:""})]),_:1}))}},eA=k("span",null,"Top Aligned",-1),tA=k("span",null,"Middle Aligned",-1),iA=k("span",null,"Bottom Aligned",-1),lA=`<template>
  <SuiImage verticalAlign="top" size="tiny" src="/images/wireframe/image.png" />
  <span>Top Aligned</span>
  <SuiDivider />
  <SuiImage verticalAlign="middle" size="tiny" src="/images/wireframe/image.png" />
  <span>Middle Aligned</span>
  <SuiDivider />
  <SuiImage verticalAlign="bottom" size="tiny" src="/images/wireframe/image.png" />
  <span>Bottom Aligned</span>
</template>`,aA={__name:"VerticallyAlignedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Vertically Aligned",code:lA},{description:i(()=>[n(" An image can specify its vertical alignment ")]),example:i(()=>[t(r(oe),{verticalAlign:"top",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),eA,t(r(Ve)),t(r(oe),{verticalAlign:"middle",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),tA,t(r(Ve)),t(r(oe),{verticalAlign:"bottom",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),iA]),_:1}))}},nA=k("p",null," Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ",-1),oA=k("p",null," Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. ",-1),sA=k("p",null," Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id. ",-1),rA=`<template>
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
</template>`,uA={__name:"CenteredDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Centered",code:rA},{description:i(()=>[n(" An image can appear centered in a content block ")]),example:i(()=>[t(r(N),null,{default:i(()=>[t(r(oe),{centered:"",size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png"}),nA,oA,t(r(oe),{centered:"",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),sA]),_:1})]),_:1}))}},cA=`<template>
  <SuiSegment>
    <p>
      Te eum doming eirmod, nominati pertinacia <SuiImage spaced size="mini" src="/images/wireframe/image.png" /> argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
    </p>
  </SuiSegment>
</template>`,dA={__name:"SpacedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Spaced",code:cA},{description:i(()=>[n(" An image can appear centered in a content block ")]),example:i(()=>[t(r(N),null,{default:i(()=>[k("p",null,[n(" Te eum doming eirmod, nominati pertinacia "),t(r(oe),{spaced:"",size:"mini",src:"/vue-fomantic-ui/images/wireframe/image.png"}),n(" argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ")])]),_:1})]),_:1}))}},mA=k("p",null," Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ",-1),pA=k("p",null," Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. ",-1),fA=k("p",null," Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id. ",-1),gA=`<template>
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
</template>`,hA={__name:"FloatedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Floated",code:gA},{description:i(()=>[n(" An image can sit to the left or right of other content ")]),example:i(()=>[t(r(N),null,{default:i(()=>[t(r(oe),{floated:"left",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),mA,t(r(oe),{floated:"right",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),pA,fA]),_:1})]),_:1}))}},_A=`<template>
  <SuiImage size="mini" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="tiny" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="small" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="medium" src="/images/wireframe/image.png" />
</template>`,bA={__name:"SizeDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Size",code:_A},{description:i(()=>[n(" An image may appear at different sizes ")]),example:i(()=>[t(r(oe),{size:"mini",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(Ve),{hidden:""}),t(r(oe),{size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(Ve),{hidden:""}),t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(Ve),{hidden:""}),t(r(oe),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}))}},vA=`<template>
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
</template>`,SA={__name:"GroupSizeDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Size",code:vA},{description:i(()=>[n(" A group of images can be formatted to have the same size. ")]),example:i(()=>[t(r(yo),{size:"tiny"},{default:i(()=>[t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(r(Ve),{hidden:""}),t(r(yo),{size:"small"},{default:i(()=>[t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1}))}},yA={__name:"Image",setup(e){const l=[{id:"image",label:"Image",category:"Types",component:P0},{id:"image-link",label:"Image Link",category:"Types",component:F0},{id:"hidden",label:"Hidden",category:"States",component:H0},{id:"disabled",label:"Disabled",category:"States",component:O0},{id:"avatar",label:"Avatar",category:"Variations",component:j0},{id:"bordered",label:"Bordered",category:"Variations",component:Y0},{id:"fluid",label:"Fluid",category:"Variations",component:W0},{id:"rounded",label:"Rounded",category:"Variations",component:X0},{id:"circular",label:"Circular",category:"Variations",component:Z0},{id:"vertically-aligned",label:"Vertically Aligned",category:"Variations",component:aA},{id:"centered",label:"Centered",category:"Variations",component:uA},{id:"spaced",label:"Spaced",category:"Variations",component:dA},{id:"floated",label:"Floated",category:"Variations",component:hA},{id:"size",label:"Size",category:"Variations",component:bA},{id:"group-size",label:"Size",category:"Groups",component:SA}];return(a,o)=>(y(),B(ot,{title:"Image",description:"An image is a graphic representation of something","component-docs":l}))}},wA=`<template>
  <SuiInput placeholder="Search..." />
</template>`,CA={__name:"InputDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Input",code:wA},{description:i(()=>[n(" A standard input ")]),example:i(()=>[t(r(Ze),{placeholder:"Search..."})]),_:1}))}},AA=`<template>
  <SuiInput focus placeholder="Search..." />
</template>`,xA={__name:"FocusDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Focus",code:AA},{description:i(()=>[n(" An input field can show a user is currently interacting with it ")]),example:i(()=>[t(r(Ze),{focus:"",placeholder:"Search..."})]),_:1}))}},kA=`<template>
  <SuiInput loading icon="user" placeholder="Search..." />
  <SuiInput loading icon="user" iconPosition="left" placeholder="Search..." />
</template>`,BA={__name:"LoadingDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Loading",code:kA},{description:i(()=>[n(" An icon input field can show that it is currently loading data ")]),example:i(()=>[t(r(Ze),{loading:"",icon:"user",placeholder:"Search..."}),t(r(Ze),{loading:"",icon:"user",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},$A=`<template>
  <SuiInput disabled placeholder="Search..." />
</template>`,TA={__name:"DisabledDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Disabled",code:$A},{description:i(()=>[n(" An input field can show that it is disabled ")]),example:i(()=>[t(r(Ze),{disabled:"",placeholder:"Search..."})]),_:1}))}},LA=`<template>
  <SuiInput error placeholder="Search..." />
</template>`,IA={__name:"ErrorDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Error",code:LA},{description:i(()=>[n(" An input field can show the data contains errors ")]),example:i(()=>[t(r(Ze),{error:"",placeholder:"Search..."})]),_:1}))}},DA=`<template>
  <SuiInput icon="search" placeholder="Search..." />
  <SuiInput icon="users" iconPosition="left" placeholder="Search..." />
</template>`,EA={__name:"IconDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Icon",code:DA},{description:i(()=>[n(" An input can be formatted with an icon ")]),example:i(()=>[t(r(Ze),{icon:"search",placeholder:"Search..."}),t(r(Ze),{icon:"users",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},RA=`<template>
  <SuiInput label="http://" placeholder="mysite.com" />
</template>`,zA={__name:"LabeledDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Labeled",code:RA},{description:i(()=>[n(" An input can be formatted with a label ")]),example:i(()=>[t(r(Ze),{label:"http://",placeholder:"mysite.com"})]),_:1}))}},PA=`<template>
  <SuiInput action="Search" />
</template>`,VA={__name:"ActionDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Action",code:PA},{description:i(()=>[n(" An input can be formatted to alert the user to an action they may perform ")]),example:i(()=>[t(r(Ze),{action:"Search"})]),_:1}))}},FA=`<template>
  <SuiInput transparent icon="search" placeholder="Search..." />
</template>`,MA={__name:"TransparentDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Transparent",code:FA},{description:i(()=>[n(" A transparent input has no background ")]),example:i(()=>[t(r(Ze),{transparent:"",icon:"search",placeholder:"Search..."})]),_:1}))}},HA=`<template>
  <SuiSegment inverted>
    <SuiInput inverted placeholder="Search..." />
  </SuiSegment>
</template>`,NA={__name:"InvertedDoc",setup(e){return(l,a)=>{const o=x("SuiSegment");return y(),B(D,{label:"Inverted",code:HA},{description:i(()=>[n(" An input can be formatted to appear on dark backgrounds ")]),example:i(()=>[t(o,{inverted:""},{default:i(()=>[t(r(Ze),{inverted:"",placeholder:"Search..."})]),_:1})]),_:1})}}},OA=`<template>
  <SuiInput fluid icon="search" placeholder="Search..." />
</template>`,qA={__name:"FluidDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Fluid",code:OA},{description:i(()=>[n(" An input can take the size of its container ")]),example:i(()=>[t(r(Ze),{fluid:"",icon:"search",placeholder:"Search..."})]),_:1}))}},GA=`<template>
  <SuiInput icon="search" placeholder="Search mini..." size="mini" />
  <SuiInput icon="search" placeholder="Search small..." size="small" />
  <SuiInput icon="search" placeholder="Search large..." size="large" />
  <SuiInput icon="search" placeholder="Search big..." size="big" />
  <SuiInput icon="search" placeholder="Search huge..." size="huge" />
  <SuiInput icon="search" placeholder="Search massive..." size="massive" />
</template>`,jA={__name:"SizeDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Size",code:GA},{description:i(()=>[n(" An input can vary in size ")]),example:i(()=>[t(r(Ze),{icon:"search",placeholder:"Search mini...",size:"mini"}),t(r(Ze),{icon:"search",placeholder:"Search small...",size:"small"}),t(r(Ze),{icon:"search",placeholder:"Search large...",size:"large"}),t(r(Ze),{icon:"search",placeholder:"Search big...",size:"big"}),t(r(Ze),{icon:"search",placeholder:"Search huge...",size:"huge"}),t(r(Ze),{icon:"search",placeholder:"Search massive...",size:"massive"})]),_:1}))}},UA={__name:"Input",setup(e){const l=[{id:"input",label:"Input",category:"Types",component:CA},{id:"focus",label:"Focus",category:"States",component:xA},{id:"loading",label:"Loading",category:"States",component:BA},{id:"disabled",label:"Disabled",category:"States",component:TA},{id:"error",label:"Error",category:"States",component:IA},{id:"icon",label:"Icon",category:"Variations",component:EA},{id:"labeled",label:"Labeled",category:"Variations",component:zA},{id:"action",label:"Action",category:"Variations",component:VA},{id:"transparent",label:"Transparent",category:"Variations",component:MA},{id:"inverted",label:"Inverted",category:"Variations",component:NA},{id:"fluid",label:"Fluid",category:"Variations",component:qA},{id:"size",label:"Size",category:"Variations",component:jA}];return(a,o)=>(y(),B(ot,{title:"Input",description:"An input is a field used to elicit a response from a user","component-docs":l}))}},YA=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
</template>`,JA={__name:"LabelDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Label",code:YA},{description:i(()=>[n(" A label ")]),example:i(()=>[t(r(O),null,{default:i(()=>[t(r(Y),{name:"mail"}),n(" 23 ")]),_:1})]),_:1}))}},WA="/vue-fomantic-ui/images/avatar/small/joe.jpg",Ed="/vue-fomantic-ui/images/avatar/small/veronika.jpg",da="/vue-fomantic-ui/images/avatar/small/elliot.jpg",KA=k("img",{src:WA},null,-1),XA=k("img",{src:Ed},null,-1),QA=k("img",{src:da},null,-1),ZA=`<template>
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
</template>`,ex={__name:"ImageDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Image",code:ZA},{description:i(()=>[n(" A label can be formatted to emphasize an image ")]),example:i(()=>[t(r(O),{as:"a",image:""},{default:i(()=>[KA,n(" Joe ")]),_:1}),t(r(O),{as:"a",image:"",color:"blue"},{default:i(()=>[XA,n(" Veronika "),t(r(Dl),null,{default:i(()=>[n("Friend")]),_:1})]),_:1}),t(r(O),{as:"a",image:""},{default:i(()=>[QA,n(" Elliot "),t(r(Y),{name:"delete"})]),_:1})]),_:1}))}},tx=k("input",{type:"text",placeholder:"First Name"},null,-1),ix=k("input",{type:"text"},null,-1),lx=k("input",{type:"text",placeholder:"Username"},null,-1),ax=k("input",{type:"password"},null,-1),nx=`<template>
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
</template>`,ox={__name:"PointingDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Pointing",code:nx},{description:i(()=>[n(" A label can point to content next to it ")]),example:i(()=>[t(r(Ht),{fluid:""},{default:i(()=>[t(r(it),null,{default:i(()=>[tx,t(r(O),{pointing:""},{default:i(()=>[n("Please enter a value")]),_:1})]),_:1}),t(r(Ve)),t(r(it),null,{default:i(()=>[t(r(O),{pointing:"below"},{default:i(()=>[n("Please enter a value")]),_:1}),ix]),_:1}),t(r(Ve)),t(r(it),{inline:""},{default:i(()=>[lx,t(r(O),{pointing:"left",color:"red",basic:""},{default:i(()=>[n("That name is taken!")]),_:1})]),_:1}),t(r(Ve)),t(r(it),{inline:""},{default:i(()=>[t(r(O),{pointing:"right",color:"red",basic:""},{default:i(()=>[n("Your password must be 6 characters or more")]),_:1}),ax]),_:1})]),_:1})]),_:1}))}},sx=`<template>
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
</template>`,rx={__name:"CornerDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Corner",code:sx},{description:i(()=>[n(" A label can position itself in the corner of an element ")]),example:i(()=>[t(r(ba),{columns:2},{default:i(()=>[t(r($t),null,{default:i(()=>[t(r(oe),{label:{as:"a",corner:"left",icon:"heart"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(r($t),null,{default:i(()=>[t(r(oe),{label:{as:"a",color:"red",corner:"right",icon:"save"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1})]),_:1}))}},ux=`<template>
  <SuiLabel as="a" tag>New</SuiLabel>
  <SuiLabel as="a" tag color="red">Upcoming</SuiLabel>
  <SuiLabel as="a" tag color="teal">Featured</SuiLabel>
</template>`,cx={__name:"TagDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Tag",code:ux},{description:i(()=>[n(" A label can appear as a tag ")]),example:i(()=>[t(r(O),{as:"a",tag:""},{default:i(()=>[n("New")]),_:1}),t(r(O),{as:"a",tag:"",color:"red"},{default:i(()=>[n("Upcoming")]),_:1}),t(r(O),{as:"a",tag:"",color:"teal"},{default:i(()=>[n("Featured")]),_:1})]),_:1}))}},dx=k("span",null,"Account Details",-1),mx=k("span",null,"User Reviews",-1),px=k("span",null,"Technical Specifications",-1),fx=k("span",null,"User Reviews",-1),gx=`<template>
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
</template>`,hx={__name:"RibbonDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Ribbon",code:gx},{description:i(()=>[n(" A label can appear as a ribbon attaching itself to an element. ")]),example:i(()=>[t(r(ba),{columns:2},{default:i(()=>[t(r($t),null,{default:i(()=>[t(r(N),{raised:""},{default:i(()=>[t(r(O),{as:"a",ribbon:"",color:"red"},{default:i(()=>[n("Overview")]),_:1}),dx,t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),t(r(O),{as:"a",ribbon:"",color:"blue"},{default:i(()=>[n("Community")]),_:1}),mx,t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(r($t),null,{default:i(()=>[t(r(N),{raised:""},{default:i(()=>[t(r(O),{as:"a",ribbon:"right",color:"orange"},{default:i(()=>[n("Specs")]),_:1}),px,t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),t(r(O),{as:"a",ribbon:"right",color:"teal"},{default:i(()=>[n("Reviews")]),_:1}),fx,t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1}))}},_x=`<template>
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
</template>`,bx={__name:"AttachedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Attached",code:_x},{description:i(()=>[n(" A label can attach to a content segment ")]),example:i(()=>[t(r(ba),{columns:3},{default:i(()=>[t(r(Co),null,{default:i(()=>[t(r($t),null,{default:i(()=>[t(r(N),{padded:""},{default:i(()=>[t(r(O),{attached:"top"},{default:i(()=>[n("HTML")]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(r($t),null,{default:i(()=>[t(r(N),{padded:""},{default:i(()=>[t(r(O),{attached:"bottom"},{default:i(()=>[n("CSS")]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(r($t),null,{default:i(()=>[t(r(N),{padded:""},{default:i(()=>[t(r(O),{attached:"top right"},{default:i(()=>[n("Code")]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1}),t(r(Co),null,{default:i(()=>[t(r($t),null,{default:i(()=>[t(r(N),{padded:""},{default:i(()=>[t(r(O),{attached:"top left"},{default:i(()=>[n("View")]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(r($t),null,{default:i(()=>[t(r(N),{padded:""},{default:i(()=>[t(r(O),{attached:"bottom left"},{default:i(()=>[n("User View")]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(r($t),null,{default:i(()=>[t(r(N),{padded:""},{default:i(()=>[t(r(O),{attached:"bottom right"},{default:i(()=>[n("Admin View")]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},vx=`<template>
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
</template>`,Sx={__name:"HorizontalDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Horizontal",code:vx},{description:i(()=>[n(" A horizontal label is formatted to label content along-side it horizontally ")]),example:i(()=>[t(r(sd),{divided:"",selection:""},{default:i(()=>[t(r(Ol),null,{default:i(()=>[t(r(O),{color:"red",horizontal:""},{default:i(()=>[n("Fruit")]),_:1}),n(" Kumquats ")]),_:1}),t(r(Ol),null,{default:i(()=>[t(r(O),{color:"purple",horizontal:""},{default:i(()=>[n("Candy")]),_:1}),n(" Ice Cream ")]),_:1}),t(r(Ol),null,{default:i(()=>[t(r(O),{color:"red",horizontal:""},{default:i(()=>[n("Fruit")]),_:1}),n(" Orange ")]),_:1}),t(r(Ol),null,{default:i(()=>[t(r(O),{horizontal:""},{default:i(()=>[n("Dog")]),_:1}),n(" Poodle ")]),_:1})]),_:1})]),_:1}))}},yx=`<template>
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
</template>`,wx={__name:"FloatingDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Floating",code:yx},{description:i(()=>[n(" A label can float above or below another element ")]),example:i(()=>[t(r(rd),{compact:""},{default:i(()=>[t(r(Qa),null,{default:i(()=>[t(r(Y),{name:"mail"}),n(" Messages "),t(r(O),{floating:"",color:"red"},{default:i(()=>[n("22")]),_:1})]),_:1}),t(r(Qa),null,{default:i(()=>[t(r(Y),{name:"users"}),n(" Friends "),t(r(O),{floating:"",color:"teal"},{default:i(()=>[n("22")]),_:1})]),_:1})]),_:1})]),_:1}))}},Cx=`<template>
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
</template>`,Ax={__name:"InvertedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Inverted",code:Cx},{description:i(()=>[n(" All Variants of Label can be inverted ")]),example:i(()=>[t(r(N),{inverted:""},{default:i(()=>[t(r(O),{as:"a",inverted:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(r(O),{as:"a",inverted:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(r(O),{as:"a",inverted:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(r(O),{as:"a",inverted:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(r(O),{as:"a",inverted:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(r(O),{as:"a",basic:"",inverted:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(r(O),{as:"a",basic:"",inverted:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(r(O),{as:"a",basic:"",inverted:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(r(O),{as:"a",basic:"",inverted:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(r(O),{as:"a",basic:"",inverted:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(r(O),{as:"a",tag:"",inverted:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(r(O),{as:"a",tag:"",inverted:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(r(O),{as:"a",tag:"",inverted:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(r(O),{as:"a",tag:"",inverted:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(r(O),{as:"a",tag:"",inverted:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1})]),_:1}))}},xx=`<template>
  <SuiLabel>
    Dogs
    <SuiLabelDetail>214</SuiLabelDetail>
  </SuiLabel>
</template>`,kx={__name:"DetailDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Detail",code:xx},{description:i(()=>[n(" A label can contain a detail ")]),example:i(()=>[t(r(O),null,{default:i(()=>[n(" Dogs "),t(r(Dl),null,{default:i(()=>[n("214")]),_:1})]),_:1})]),_:1}))}},Bx=`<template>
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
</template>`,$x={__name:"IconDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Icon",code:Bx},{description:i(()=>[n(" A label can include an icon ")]),example:i(()=>[t(r(O),null,{default:i(()=>[t(r(Y),{name:"mail"}),n(" Mail ")]),_:1}),t(r(O),null,{default:i(()=>[t(r(Y),{name:"checkmark"}),n(" Test Passed ")]),_:1}),t(r(O),{icon:"dog"}),t(r(O),{icon:"cat"})]),_:1}))}},Tx=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
    <SuiLabelContent>View Mail</SuiLabelContent>
  </SuiLabel>
</template>`,Lx={__name:"LinkDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Link",code:Tx},{description:i(()=>[n(" A label can be a link or contain an item that links ")]),example:i(()=>[t(r(O),{as:"a"},{default:i(()=>[t(r(Y),{name:"mail"}),n(" 23 ")]),_:1}),t(r(O),null,{default:i(()=>[t(r(Y),{name:"mail"}),n(" 23 "),t(r(Dl),null,{default:i(()=>[n("View Mail")]),_:1})]),_:1})]),_:1}))}},Ix=`<template>
  <SuiLabel disabled>Disabled Label</SuiLabel>
</template>`,Dx={__name:"DisabledDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Disabled",code:Ix},{description:i(()=>[n(" A label can show it is currently unable to be interacted with ")]),example:i(()=>[t(r(O),{disabled:""},{default:i(()=>[n("Disabled Label")]),_:1})]),_:1}))}},Ex=`<template>
  <SuiLabel fluid>Fits container</SuiLabel>
</template>`,Rx={__name:"FluidDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Fluid",code:Ex},{description:i(()=>[n(" A label can take the width of its container ")]),example:i(()=>[t(r(O),{fluid:""},{default:i(()=>[n("Fits container")]),_:1})]),_:1}))}},zx=`<template>
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
</template>`,Px={__name:"CircularDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Circular",code:zx},{description:i(()=>[n(" A label can be circular ")]),example:i(()=>[t(r(O),{circular:"",color:"red"},{default:i(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"orange"},{default:i(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"yellow"},{default:i(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"olive"},{default:i(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"green"},{default:i(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"teal"},{default:i(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"blue"},{default:i(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"violet"},{default:i(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"purple"},{default:i(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"pink"},{default:i(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"brown"},{default:i(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"grey"},{default:i(()=>[n("2")]),_:1}),t(r(O),{circular:"",color:"black"},{default:i(()=>[n("2")]),_:1})]),_:1}))}},Vx=k("img",{src:da},null,-1),Fx=`<template>
  <SuiLabel as="a" basic>Basic</SuiLabel>
  <SuiLabel as="a" basic pointing>Pointing</SuiLabel>
  <SuiLabel as="a" basic image>
    <img src="/images/avatar/small/elliot.jpg" />
    Elliot
  </SuiLabel>
  <SuiLabel as="a" basic pointing color="red">Red Pointing</SuiLabel>
  <SuiLabel as="a" basic color="blue">Blue</SuiLabel>
</template>`,Mx={__name:"BasicDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Basic",code:Fx},{description:i(()=>[n(" A label can reduce its complexity ")]),example:i(()=>[t(r(O),{as:"a",basic:""},{default:i(()=>[n("Basic")]),_:1}),t(r(O),{as:"a",basic:"",pointing:""},{default:i(()=>[n("Pointing")]),_:1}),t(r(O),{as:"a",basic:"",image:""},{default:i(()=>[Vx,n(" Elliot ")]),_:1}),t(r(O),{as:"a",basic:"",pointing:"",color:"red"},{default:i(()=>[n("Red Pointing")]),_:1}),t(r(O),{as:"a",basic:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1})]),_:1}))}},Hx=`<template>
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
</template>`,Nx={__name:"ColoredDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Colored",code:Hx},{description:i(()=>[n(" A label can have different colors ")]),example:i(()=>[t(r(O),{as:"a",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(r(O),{as:"a",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(r(O),{as:"a",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(r(O),{as:"a",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(r(O),{as:"a",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(r(O),{as:"a",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(r(O),{as:"a",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(r(O),{as:"a",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(r(O),{as:"a",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(r(O),{as:"a",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(r(O),{as:"a",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(r(O),{as:"a",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(r(O),{as:"a",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(r(O),{as:"a",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(r(O),{as:"a",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},Ox=`<template>
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
</template>`,qx={__name:"BasicTagDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Basic Tag",code:Ox},{description:i(()=>[]),example:i(()=>[t(r(O),{as:"a",basic:"",tag:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(r(O),{as:"a",basic:"",tag:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},Gx=`<template>
  <SuiLabel size="mini">Mini</SuiLabel>
  <SuiLabel size="tiny">Tiny</SuiLabel>
  <SuiLabel size="small">Small</SuiLabel>
  <SuiLabel>Medium</SuiLabel>
  <SuiLabel size="large">Large</SuiLabel>
  <SuiLabel size="big">Big</SuiLabel>
  <SuiLabel size="huge">Huge</SuiLabel>
  <SuiLabel size="massive">Massive</SuiLabel>
</template>`,jx={__name:"SizeDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Size",code:Gx},{description:i(()=>[n(" A label can be small or large ")]),example:i(()=>[t(r(O),{size:"mini"},{default:i(()=>[n("Mini")]),_:1}),t(r(O),{size:"tiny"},{default:i(()=>[n("Tiny")]),_:1}),t(r(O),{size:"small"},{default:i(()=>[n("Small")]),_:1}),t(r(O),null,{default:i(()=>[n("Medium")]),_:1}),t(r(O),{size:"large"},{default:i(()=>[n("Large")]),_:1}),t(r(O),{size:"big"},{default:i(()=>[n("Big")]),_:1}),t(r(O),{size:"huge"},{default:i(()=>[n("Huge")]),_:1}),t(r(O),{size:"massive"},{default:i(()=>[n("Massive")]),_:1})]),_:1}))}},Ux=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,Yx={__name:"GroupSizeDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Group Size",code:Ux},{description:i(()=>[n(" Labels can share sizes together ")]),example:i(()=>[t(r(El),{size:"huge"},{default:i(()=>[t(r(O),null,{default:i(()=>[n("Fun")]),_:1}),t(r(O),null,{default:i(()=>[n("Happy")]),_:1}),t(r(O),null,{default:i(()=>[n("Smart")]),_:1}),t(r(O),null,{default:i(()=>[n("Witty")]),_:1})]),_:1})]),_:1}))}},Jx=`<template>
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
</template>`,Wx={__name:"ColoredGroupDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Clored Group",code:Jx},{description:i(()=>[n(" Labels can share colors together ")]),example:i(()=>[t(r(El),{color:"blue"},{default:i(()=>[t(r(O),null,{default:i(()=>[n(" Fun "),t(r(Y),{name:"close"})]),_:1}),t(r(O),null,{default:i(()=>[n(" Happy "),t(r(Dl),null,{default:i(()=>[n("Smart")]),_:1})]),_:1}),t(r(O),null,{default:i(()=>[n("Insane")]),_:1}),t(r(O),null,{default:i(()=>[n("Exciting")]),_:1})]),_:1})]),_:1}))}},Kx=`<template>
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
</template>`,Xx={__name:"BasicGroupDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Basic Group",code:Kx},{description:i(()=>[n(" Labels can share their style together ")]),example:i(()=>[t(r(El),{basic:""},{default:i(()=>[t(r(O),null,{default:i(()=>[n(" Fun "),t(r(Y),{name:"close"})]),_:1}),t(r(O),null,{default:i(()=>[n(" Happy "),t(r(Dl),null,{default:i(()=>[n("Smart")]),_:1})]),_:1}),t(r(O),null,{default:i(()=>[n("Insane")]),_:1}),t(r(O),null,{default:i(()=>[n("Exciting")]),_:1})]),_:1})]),_:1}))}},Qx=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,Zx={__name:"TagGroupDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Tag Group",code:Qx},{description:i(()=>[n(" Labels can share tag formatting ")]),example:i(()=>[t(r(El),{tag:""},{default:i(()=>[t(r(O),{as:"a"},{default:i(()=>[n("$10.00")]),_:1}),t(r(O),{as:"a"},{default:i(()=>[n("$19.99")]),_:1}),t(r(O),{as:"a"},{default:i(()=>[n("$24.99")]),_:1}),t(r(O),{as:"a"},{default:i(()=>[n("$10.25")]),_:1})]),_:1})]),_:1}))}},ek=`<template>
  <SuiLabelGroup tag>
    <SuiLabel as="a">1</SuiLabel>
    <SuiLabel as="a">3</SuiLabel>
    <SuiLabel as="a">4</SuiLabel>
    <SuiLabel as="a">14</SuiLabel>
    <SuiLabel as="a">16</SuiLabel>
    <SuiLabel as="a">34</SuiLabel>
  </SuiLabelGroup>
</template>`,tk={__name:"CircularGroupDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Circular Group",code:ek},{description:i(()=>[n(" Labels can share shapes ")]),example:i(()=>[t(r(El),{circular:""},{default:i(()=>[t(r(O),{as:"a"},{default:i(()=>[n("1")]),_:1}),t(r(O),{as:"a"},{default:i(()=>[n("3")]),_:1}),t(r(O),{as:"a"},{default:i(()=>[n("4")]),_:1}),t(r(O),{as:"a"},{default:i(()=>[n("14")]),_:1}),t(r(O),{as:"a"},{default:i(()=>[n("16")]),_:1}),t(r(O),{as:"a"},{default:i(()=>[n("34")]),_:1})]),_:1})]),_:1}))}},ik={__name:"Label",setup(e){const l=[{id:"label",label:"Label",category:"Types",component:JA},{id:"image",label:"Image",category:"Types",component:ex},{id:"pointing",label:"Pointing",category:"Types",component:ox},{id:"corner",label:"Corner",category:"Types",component:rx},{id:"tag",label:"Tag",category:"Types",component:cx},{id:"ribbon",label:"Ribbon",category:"Types",component:hx},{id:"attached",label:"Attached",category:"Types",component:bx},{id:"horizontal",label:"Horizontal",category:"Types",component:Sx},{id:"floating",label:"Floating",category:"Types",component:wx},{id:"inverted",label:"Inverted",category:"Types",component:Ax},{id:"detail",label:"Detail",category:"Content",component:kx},{id:"icon",label:"Icon",category:"Content",component:$x},{id:"link",label:"Link",category:"Content",component:Lx},{id:"disabled",label:"Disabled",category:"States",component:Dx},{id:"fluid",label:"Fluid",category:"Variations",component:Rx},{id:"circular",label:"Circular",category:"Variations",component:Px},{id:"basic",label:"Basic",category:"Variations",component:Mx},{id:"colored",label:"Colored",category:"Variations",component:Nx},{id:"basic-tag",label:"Basic Tag",category:"Variations",component:qx},{id:"size",label:"Size",category:"Variations",component:jx},{id:"group-size",label:"Group Size",category:"Groups",component:Yx},{id:"colored-group",label:"Colored Group",category:"Groups",component:Wx},{id:"basic-group",label:"Basic Group",category:"Groups",component:Xx},{id:"tag-group",label:"Tag Group",category:"Groups",component:Zx},{id:"circular-group",label:"Circular Group",category:"Groups",component:tk}];return(a,o)=>(y(),B(ot,{title:"Label",description:"A label displays content classification","component-docs":l}))}},lk=Vh(Jf);function ak(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Da=lk,Yn=ak(Xc),nk=Da.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function(l,a){var o=a.slots,s=a.attrs,c=o&&o.default&&o.default()||[],m=l.code||c&&c.length?c[0].children:"",f=l.inline,u=l.language,d=Yn.languages[u],g="language-".concat(u);return function(){return f?Da.h("code",{class:[g],innerHTML:Yn.highlight(m,d)}):Da.h("pre",Object.assign({},s,{class:[s.class,g]}),[Da.h("code",Object.assign({},s,{class:[s.class,g],innerHTML:Yn.highlight(m,d)}))])}}}),ok=nk;const sk=Wc(ok),rk=V({name:"DocExample",components:{Prism:sk},props:{title:String,description:String,code:String},setup(){const e=G(!1);return{active:e,toggle:()=>e.value=!e.value}}}),uk={class:"example"};function ck(e,l,a,o,s,c){const m=x("sui-header-subheader"),f=x("sui-header"),u=x("sui-grid-column"),d=x("sui-icon"),g=x("sui-grid-row"),p=x("prism"),_=x("sui-grid");return y(),ve("div",uk,[t(_,{columns:2},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(f,{as:"h3"},{default:i(()=>[n($e(e.title)+" ",1),t(m,null,{default:i(()=>[n($e(e.description),1)]),_:1})]),_:1})]),_:1}),t(u,{textAlign:"right"},{default:i(()=>[t(d,{name:"code",color:"grey",onClick:e.toggle,link:""},null,8,["onClick"])]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(u,{width:16},{default:i(()=>[qi(e.$slots,"default",{},void 0,!0)]),_:3}),e.active?(y(),B(u,{key:0,width:16},{default:i(()=>[t(p,{language:"markup"},{default:i(()=>[n($e(e.code),1)]),_:1})]),_:1})):ns("",!0)]),_:3})]),_:3})])}const dt=Me(rk,[["render",ck],["__scopeId","data-v-fcfb6a67"]]),dk="/vue-fomantic-ui/images/avatar/small/rachel.png",mk="/vue-fomantic-ui/images/avatar/small/lindsay.png",pk="/vue-fomantic-ui/images/avatar/small/matthew.png",fk="/vue-fomantic-ui/images/avatar/small/jenny.jpg",gk="/vue-fomantic-ui/images/avatar/small/tom.jpg",Ea="/vue-fomantic-ui/images/avatar/small/christian.jpg",Rd="/vue-fomantic-ui/images/avatar/small/matt.jpg",Ra="/vue-fomantic-ui/images/avatar/small/helen.jpg",Li="/vue-fomantic-ui/images/avatar/small/daniel.jpg",Lo="/vue-fomantic-ui/images/avatar/small/stevie.jpg",Jn="/vue-fomantic-ui/images/wireframe/square-image.png",hk=V({name:"ListDoc",components:{DocExample:dt},setup(){return{listCode:`<sui-list>
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
</div>`}}}),_k={class:"intro"},bk=k("div",null,"Benefits",-1),vk={class:"list"},Sk=k("a",null,"Languages",-1),yk=k("a",null,[k("b",null,"Arrested Development")],-1),wk=k("a",null,[k("b",null,"Bob's Burgers")],-1),Ck=k("a",null,[k("b",null,"The Godfather Part 2")],-1),Ak=k("a",null,[k("b",null,"Twin Peaks")],-1),xk=k("a",null,[k("b",null,"Arrested Development")],-1),kk=k("a",null,[k("b",null,"Bob's Burgers")],-1),Bk=k("a",null,[k("b",null,"The Godfather Part 2")],-1);function $k(e,l,a,o,s,c){const m=x("sui-header-subheader"),f=x("sui-header"),u=x("sui-divider"),d=x("sui-icon"),g=x("sui-menu-item"),p=x("sui-menu"),_=x("sui-container"),w=x("sui-segment"),S=x("sui-list-item"),A=x("sui-list"),T=x("doc-example"),I=x("sui-list-list"),h=x("sui-list-header"),b=x("sui-list-description"),C=x("sui-list-content"),$=x("sui-image");return y(),ve("div",null,[t(w,{vertical:""},{default:i(()=>[t(_,{class:"main"},{default:i(()=>[k("div",_k,[t(f,{as:"h1"},{default:i(()=>[n("List "),t(m,null,{default:i(()=>[n(" A list is used to group related content ")]),_:1})]),_:1}),t(u,{hidden:""}),t(p,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(d,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(d,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(_,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(T,{title:"List",description:"A list groups related content",code:e.listCode},{default:i(()=>[t(A,null,{default:i(()=>[t(S,null,{default:i(()=>[n("Apples")]),_:1}),t(S,null,{default:i(()=>[n("Pears")]),_:1}),t(S,null,{default:i(()=>[n("Oranges")]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Bulleted",description:"A list can mark items with a bullet",code:e.bulletedCode},{default:i(()=>[t(A,{bulleted:""},{default:i(()=>[t(S,null,{default:i(()=>[n("Gaining Access")]),_:1}),t(S,null,{default:i(()=>[n("Inviting Friends")]),_:1}),t(S,null,{default:i(()=>[bk,k("div",vk,[t(S,{as:"a"},{default:i(()=>[n("Link to somewhere")]),_:1}),t(S,null,{default:i(()=>[n("Rebates")]),_:1}),t(S,null,{default:i(()=>[n("Discounts")]),_:1})])]),_:1}),t(S,null,{default:i(()=>[n("Warranty")]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Ordered",description:"A list can be ordered numerically",code:e.orderedCode},{default:i(()=>[t(A,{ordered:""},{default:i(()=>[t(S,{as:"a"},{default:i(()=>[n("Getting Started")]),_:1}),t(S,{as:"a"},{default:i(()=>[n("Introduction")]),_:1}),t(S,null,{default:i(()=>[Sk,t(I,null,{default:i(()=>[t(S,{as:"a"},{default:i(()=>[n("HTML")]),_:1}),t(S,{as:"a"},{default:i(()=>[n("Javascript")]),_:1}),t(S,{as:"a"},{default:i(()=>[n("CSS")]),_:1})]),_:1})]),_:1}),t(S,{as:"a"},{default:i(()=>[n("Review")]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Link",description:"A list can be specially formatted for navigation links",code:e.linkCode},{default:i(()=>[t(A,{link:""},{default:i(()=>[t(S,{active:""},{default:i(()=>[n("Home")]),_:1}),t(S,{as:"a"},{default:i(()=>[n("About")]),_:1}),t(S,{as:"a"},{default:i(()=>[n("Jobs")]),_:1}),t(S,{as:"a"},{default:i(()=>[n("Team")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(T,{title:"Item",description:"A list item can contain a set of items",code:e.itemCode},{default:i(()=>[t(A,null,{default:i(()=>[t(S,null,{default:i(()=>[n("1")]),_:1}),t(S,null,{default:i(()=>[n("2")]),_:1}),t(S,null,{default:i(()=>[n("3")]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Icon",description:"A list item can contain an icon",code:e.iconCode},{default:i(()=>[t(A,null,{default:i(()=>[t(S,{as:"a"},{default:i(()=>[t(d,{name:"help"}),t(C,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Floated Icon")]),_:1}),t(b,null,{default:i(()=>[n(" This text will always have a left margin to make sure it sits alongside your icon ")]),_:1})]),_:1})]),_:1}),t(S,{as:"a"},{default:i(()=>[t(d,{name:"right triangle"}),t(C,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Icon Alignment")]),_:1}),t(b,null,{default:i(()=>[n(" Floated icons are by default top aligned. To have an icon top aligned try this example ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t(d,{name:"help"}),n(" Inline Text ")]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Image",description:"A list can contain an image",code:e.imageContentCode},{default:i(()=>[t(A,null,{default:i(()=>[t(S,null,{default:i(()=>[t($,{avatar:"",src:dk}),t(C,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Rachel")]),_:1}),t(b,null,{default:i(()=>[n(" Last seen watching "),yk,n(" just now. ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t($,{avatar:"",src:mk}),t(C,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Lindsay")]),_:1}),t(b,null,{default:i(()=>[n(" Last seen watching "),wk,n(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t($,{avatar:"",src:pk}),t(C,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Matthew")]),_:1}),t(b,null,{default:i(()=>[n(" Last seen watching "),Ck,n(" yesterday. ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t($,{avatar:"",src:fk}),t(C,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Jenny Hess")]),_:1}),t(b,null,{default:i(()=>[n(" Last seen watching "),Ak,n(" 3 days ago. ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t($,{avatar:"",src:Ed}),t(C,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Veronika Ossi")]),_:1}),t(b,null,{default:i(()=>[n(" Has not watched anything recently ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Link",description:"A list can contain links",code:e.linkContentCode},{default:i(()=>[t(A,null,{default:i(()=>[t(S,{as:"a"},{default:i(()=>[n("What is a FAQ?")]),_:1}),t(S,{as:"a"},{default:i(()=>[n("Who is our user?")]),_:1}),t(S,{as:"a"},{default:i(()=>[n("Where is our office located?")]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"header",description:"A list item can contain a header",code:e.headerContentCode},{default:i(()=>[t(A,null,{default:i(()=>[t(S,null,{default:i(()=>[t(h,null,{default:i(()=>[n("New York City")]),_:1}),n(" A lovely city ")]),_:1}),t(S,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Chicago")]),_:1}),n(" Also quite a lovely city ")]),_:1}),t(S,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Los Angeles")]),_:1}),n(" Sometimes can be a lovely city ")]),_:1}),t(S,null,{default:i(()=>[t(h,null,{default:i(()=>[n("San Francisco")]),_:1}),n(" What a lovely city ")]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Description",description:"A list item can contain a description",code:e.descriptionContentCode},{default:i(()=>[t(A,null,{default:i(()=>[t(S,null,{default:i(()=>[t(d,{name:"map marker"}),t(C,null,{default:i(()=>[t(h,{as:"a"},{default:i(()=>[n("Krolewskie Jadlo")]),_:1}),t(b,null,{default:i(()=>[n(" An excellent polish restaurant, quick delivery and hearty, filling meals. ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t(d,{name:"map marker"}),t(C,null,{default:i(()=>[t(h,{as:"a"},{default:i(()=>[n("Xian Famous Foods")]),_:1}),t(b,null,{default:i(()=>[n(" A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers. ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t(d,{name:"map marker"}),t(C,null,{default:i(()=>[t(h,{as:"a"},{default:i(()=>[n("Sapporo Haru")]),_:1}),t(b,null,{default:i(()=>[n(" Greenpoint's best choice for quick and delicious sushi. ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t(d,{name:"map marker"}),t(C,null,{default:i(()=>[t(h,{as:"a"},{default:i(()=>[n("Enid's")]),_:1}),t(b,null,{default:i(()=>[n(" At night a bar, during the day a delicious brunch spot. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(T,{title:"Horizontal",description:"A list can be formatted to have items appear horizontally",code:e.horizontalVarCode},{default:i(()=>[t(A,{horizontal:""},{default:i(()=>[t(S,null,{default:i(()=>[t($,{avatar:"",src:gk}),t(C,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Tom")]),_:1}),n(" Top Contributor ")]),_:1})]),_:1}),t(S,null,{default:i(()=>[t($,{avatar:"",src:Ea}),t(C,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Christian Rocha")]),_:1}),n(" Admin ")]),_:1})]),_:1}),t(S,null,{default:i(()=>[t($,{avatar:"",src:Rd}),t(C,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Matt")]),_:1}),n(" Top Rated User ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Inverted",description:"A list can be inverted to appear on a dark background",code:e.invertedVarCode},{default:i(()=>[t(w,{inverted:""},{default:i(()=>[t(A,{inverted:"",relaxed:"",divided:""},{default:i(()=>[t(S,null,{default:i(()=>[t(C,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Snickerdoodle")]),_:1}),n(" An excellent companion ")]),_:1})]),_:1}),t(S,null,{default:i(()=>[t(C,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Poodle")]),_:1}),n(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(S,null,{default:i(()=>[t(C,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Paulo")]),_:1}),n(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Selection",description:"A selection list formats list items as possible choices",code:e.selectionVarCode},{default:i(()=>[t(A,{selection:"",verticalAlign:"middle"},{default:i(()=>[t(S,null,{default:i(()=>[t($,{avatar:"",src:Ra}),t(C,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t($,{avatar:"",src:Ea}),t(C,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t($,{avatar:"",src:Li}),t(C,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Animated",description:"A list can animate to set the current item apart from the list",code:e.animatedVarCode},{default:i(()=>[t(A,{animated:"",verticalAlign:"middle"},{default:i(()=>[t(S,null,{default:i(()=>[t($,{avatar:"",src:Ra}),t(C,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t($,{avatar:"",src:Ea}),t(C,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t($,{avatar:"",src:Li}),t(C,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Relaxed",description:"A list can relax its padding to provide more negative space",code:e.relaxedVarCode},{default:i(()=>[t(A,{relaxed:""},{default:i(()=>[t(S,null,{default:i(()=>[t($,{avatar:"",src:Li}),t(C,null,{default:i(()=>[t(h,{as:"a"},{default:i(()=>[n("Daniel Louise")]),_:1}),t(b,null,{default:i(()=>[n(" Last seen watching "),xk,n(" just now. ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t($,{avatar:"",src:Lo}),t(C,null,{default:i(()=>[t(h,{as:"a"},{default:i(()=>[n("Stevie Feliciano")]),_:1}),t(b,null,{default:i(()=>[n(" Last seen watching "),kk,n(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t($,{avatar:"",src:da}),t(C,null,{default:i(()=>[t(h,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(b,null,{default:i(()=>[n(" Last seen watching "),Bk,n(" yesterday. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Divided",description:"A list can show divisions between content",code:e.dividedVarCode},{default:i(()=>[t(A,{divided:"",verticalAlign:"middle"},{default:i(()=>[t(S,null,{default:i(()=>[t($,{avatar:"",src:Li}),t(C,null,{default:i(()=>[t(h,{as:"a"},{default:i(()=>[n("Daniel Louise")]),_:1})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t($,{avatar:"",src:Lo}),t(C,null,{default:i(()=>[t(h,{as:"a"},{default:i(()=>[n("Stevie Feliciano")]),_:1})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t($,{avatar:"",src:da}),t(C,null,{default:i(()=>[t(h,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Celled",description:"A list can divide its items into cells",code:e.celledVarCode},{default:i(()=>[t(A,{celled:""},{default:i(()=>[t(S,null,{default:i(()=>[t($,{avatar:"",src:Ra}),t(C,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Snickerdoodle")]),_:1}),n(" An excellent companion ")]),_:1})]),_:1}),t(S,null,{default:i(()=>[t($,{avatar:"",src:Li}),t(C,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Poodle")]),_:1}),n(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(S,null,{default:i(()=>[t($,{avatar:"",src:Li}),t(C,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Paulo")]),_:1}),n(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Size",description:"A list can vary in size",code:e.sizeCode},{default:i(()=>[t(A,{horizontal:"",divided:"",size:"mini"},{default:i(()=>[t(S,null,{default:i(()=>[t($,{avatar:"",src:Ra}),t(C,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t($,{avatar:"",src:Ea}),t(C,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t($,{avatar:"",src:Li}),t(C,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content Variations")]),_:1}),t(T,{title:"Vertical Aligned",description:"An element inside a list can be vertically aligned",code:e.verticalAlignedCode},{default:i(()=>[t(A,{horizontal:""},{default:i(()=>[t(S,null,{default:i(()=>[t($,{avatar:"",src:Jn}),t(C,{verticalAlign:"top"},{default:i(()=>[n(" Top Aligned ")]),_:1})]),_:1}),t(S,null,{default:i(()=>[t($,{avatar:"",src:Jn}),t(C,{verticalAlign:"middle"},{default:i(()=>[n(" Middle ")]),_:1})]),_:1}),t(S,null,{default:i(()=>[t($,{avatar:"",src:Jn}),t(C,{verticalAlign:"bottom"},{default:i(()=>[n(" Bottom ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Floated",description:"An list, or an element inside a list can be floated left or right",code:e.floatedCode},{default:i(()=>[k("div",null,[t(A,{floated:"right",horizontal:""},{default:i(()=>[t(S,{disabled:""},{default:i(()=>[n("© GitHub, Inc.")]),_:1}),t(S,{as:"a"},{default:i(()=>[n("Terms")]),_:1}),t(S,{as:"a"},{default:i(()=>[n("Privacy")]),_:1}),t(S,{as:"a"},{default:i(()=>[n("Contact")]),_:1})]),_:1}),t(A,{horizontal:""},{default:i(()=>[t(S,{as:"a"},{default:i(()=>[n("About Us")]),_:1}),t(S,{as:"a"},{default:i(()=>[n("Jobs")]),_:1})]),_:1})])]),_:1},8,["code"])]),_:1})])}const Tk=Me(hk,[["render",$k]]),Lk=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader />
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Ik={__name:"LoaderDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Loader",code:Lk},{description:i(()=>[n(" A loader ")]),example:i(()=>[t(r(N),null,{default:i(()=>[t(r(Ut),{active:""},{default:i(()=>[t(r(Pe))]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Dk=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text>Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Ek={__name:"TextLoaderDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Text Loader",code:Dk},{description:i(()=>[n(" A loader can contain text ")]),example:i(()=>[t(r(N),null,{default:i(()=>[t(r(Ut),{active:""},{default:i(()=>[t(r(Pe),{text:""},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Rk=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader Indeterminate text>Preparing Files</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,zk={__name:"IndeterminateDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Indeterminate",code:Rk},{description:i(()=>[n(" A loader can show it's unsure of how long a task will take ")]),example:i(()=>[t(r(N),null,{default:i(()=>[t(r(Ut),{active:""},{default:i(()=>[t(r(Pe),{Indeterminate:"",text:""},{default:i(()=>[n("Preparing Files")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Pk=`<template>
  <SuiSegment>
    <SuiLoader active />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Vk={__name:"ActiveDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Active",code:Pk},{description:i(()=>[n(" A loader can be active or visible ")]),example:i(()=>[t(r(N),null,{default:i(()=>[t(r(Pe),{active:""}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Fk=`<template>
  <SuiSegment>
    <SuiLoader disabled />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Mk={__name:"DisabledDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Disabled",code:Fk},{description:i(()=>[n(" A loader can be disabled or hidden ")]),example:i(()=>[t(r(N),null,{default:i(()=>[t(r(Pe),{disabled:""}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Hk=`<template>
  <SuiLoader active inline />
</template>`,Nk={__name:"InlineDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Inline",code:Hk},{description:i(()=>[n(" Loaders can appear inline with content ")]),example:i(()=>[t(r(Pe),{active:"",inline:""})]),_:1}))}},Ok=`<template>
  <SuiLoader active inline />
</template>`,qk={__name:"InlineCenterDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Inline Center",code:Ok},{description:i(()=>[n(" Loaders can appear inline centered with content ")]),example:i(()=>[t(r(Pe),{active:"",inline:"centered"})]),_:1}))}},Gk=`<template>
  <SuiLoader slow active inline />
  <SuiLoader active inline />
  <SuiLoader fast active inline />
</template>`,jk={__name:"SpeedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Speed",code:Gk},{description:i(()=>[n(" Loaders can appear slow, normal or fast ")]),example:i(()=>[t(r(Pe),{slow:"",active:"",inline:""}),t(r(Pe),{active:"",inline:""}),t(r(Pe),{fast:"",active:"",inline:""})]),_:1}))}},Uk=`<template>
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
</template>`,Yk={__name:"ColorsDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Colors",code:Uk},{description:i(()=>[n(" Loaders can be different colors ")]),example:i(()=>[t(r(Pe),{active:"",inline:"",primary:""}),t(r(Pe),{active:"",inline:"",secondary:""}),t(r(Pe),{active:"",inline:"",color:"red"}),t(r(Pe),{active:"",inline:"",color:"orange"}),t(r(Pe),{active:"",inline:"",color:"yellow"}),t(r(Pe),{active:"",inline:"",color:"olive"}),t(r(Pe),{active:"",inline:"",color:"green"}),t(r(Pe),{active:"",inline:"",color:"teal"}),t(r(Pe),{active:"",inline:"",color:"blue"}),t(r(Pe),{active:"",inline:"",color:"violet"}),t(r(Pe),{active:"",inline:"",color:"purple"}),t(r(Pe),{active:"",inline:"",color:"pink"}),t(r(Pe),{active:"",inline:"",color:"brown"}),t(r(Pe),{active:"",inline:"",color:"grey"}),t(r(Pe),{active:"",inline:"",color:"black"})]),_:1}))}},Jk=`<template>
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
</template>`,Wk={__name:"SizeDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Size",code:Jk},{description:i(()=>[n(" Loaders can have different sizes ")]),example:i(()=>[t(r(N),null,{default:i(()=>[t(r(Ut),{active:""},{default:i(()=>[t(r(Pe),{text:"",size:"mini"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(r(N),null,{default:i(()=>[t(r(Ut),{active:""},{default:i(()=>[t(r(Pe),{text:"",size:"tiny"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(r(N),null,{default:i(()=>[t(r(Ut),{active:""},{default:i(()=>[t(r(Pe),{text:"",size:"small"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(r(N),null,{default:i(()=>[t(r(Ut),{active:""},{default:i(()=>[t(r(Pe),{text:"",size:"large"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(r(N),null,{default:i(()=>[t(r(Ut),{active:""},{default:i(()=>[t(r(Pe),{text:"",size:"big"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(r(N),null,{default:i(()=>[t(r(Ut),{active:""},{default:i(()=>[t(r(Pe),{text:"",size:"huge"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Kk=`<template>
  <SuiSegment inverted>
    <SuiLoader active inverted />

    <SuiImage src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Xk={__name:"InvertedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Inverted",code:Kk},{description:i(()=>[n(" Loaders can have their colors inverted. ")]),example:i(()=>[t(r(N),{inverted:""},{default:i(()=>[t(r(Pe),{active:"",inverted:""}),t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Qk={__name:"Loader",setup(e){const l=[{id:"loader",label:"Loader",category:"Types",component:Ik},{id:"text-loader",label:"Text Loader",category:"Types",component:Ek},{id:"indeterminate",label:"Indeterminate",category:"States",component:zk},{id:"active",label:"Active",category:"States",component:Vk},{id:"disabled",label:"Disabled",category:"States",component:Mk},{id:"inline",label:"Inline",category:"Variations",component:Nk},{id:"inline-center",label:"Inline Center",category:"Variations",component:qk},{id:"speed",label:"Speed",category:"Variations",component:jk},{id:"colors",label:"Colors",category:"Variations",component:Yk},{id:"size",label:"Size",category:"Variations",component:Wk},{id:"inverted",label:"Inverted",category:"Variations",component:Xk}];return(a,o)=>(y(),B(ot,{title:"Loader",description:"A loader alerts a user to wait for an activity to complete","component-docs":l}))}},ll="/vue-fomantic-ui/images/wireframe/short-paragraph.png",Zk=V({name:"RailDoc",components:{DocExample:dt},setup(){return{railCode:`<sui-grid centered :columns="3">
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
</sui-grid>`}}}),eB={class:"intro"};function tB(e,l,a,o,s,c){const m=x("sui-header-subheader"),f=x("sui-header"),u=x("sui-divider"),d=x("sui-icon"),g=x("sui-menu-item"),p=x("sui-menu"),_=x("sui-container"),w=x("sui-segment"),S=x("sui-image"),A=x("sui-rail"),T=x("sui-grid-column"),I=x("sui-grid"),h=x("doc-example");return y(),ve("div",null,[t(w,{vertical:""},{default:i(()=>[t(_,{class:"main"},{default:i(()=>[k("div",eB,[t(f,{as:"h1"},{default:i(()=>[n("Rail "),t(m,null,{default:i(()=>[n(" A rail is used to show accompanying content outside the boundaries of the main view of a site ")]),_:1})]),_:1}),t(u,{hidden:""}),t(p,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(d,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(d,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(_,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(h,{title:"Rail",description:"A rail can be presented on the left or right side of a container",code:e.railCode},{default:i(()=>[t(I,{centered:"",columns:3},{default:i(()=>[t(T,null,{default:i(()=>[t(w,null,{default:i(()=>[t(S,{src:ll}),t(A,{position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(A,{position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Internal",description:"A rail can attach itself to the inside of a container",code:e.internalCode},{default:i(()=>[t(w,{textAlign:"center"},{default:i(()=>[t(S,{src:ll}),t(A,{internal:"",position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n("Left Rail Content")]),_:1})]),_:1}),t(A,{internal:"",position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n("Right Rail Content")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Dividing",description:"A rail can create a division between itself and a container",code:e.dividingCode},{default:i(()=>[t(I,{centered:"",columns:3},{default:i(()=>[t(T,null,{default:i(()=>[t(w,null,{default:i(()=>[t(S,{src:ll}),t(A,{dividing:"",position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(A,{dividing:"",position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(h,{title:"Attached",description:"A rail can appear attached to the main viewport",code:e.attachedCode},{default:i(()=>[t(I,{centered:"",columns:3},{default:i(()=>[t(T,null,{default:i(()=>[t(w,null,{default:i(()=>[t(S,{src:ll}),t(A,{attached:"",position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(A,{attached:"",position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Close",description:"A rail can appear closer to the main viewport",code:e.closeCode},{default:i(()=>[t(I,{centered:"",columns:3},{default:i(()=>[t(T,null,{default:i(()=>[t(w,null,{default:i(()=>[t(S,{src:ll}),t(A,{close:"",position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(A,{close:"",position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Size",description:"A rail can have different sizes",code:e.sizeCode},{default:i(()=>[t(I,{centered:"",columns:3},{default:i(()=>[t(T,null,{default:i(()=>[t(w,null,{default:i(()=>[t(S,{src:ll}),t(A,{size:"small",position:"left"},{default:i(()=>[n(" Left Small Rail ")]),_:1}),t(A,{size:"large",position:"right"},{default:i(()=>[n(" Right Large Rail ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const iB=Me(Zk,[["render",tB]]),lB=`<template>
  <SuiReveal animated="fade">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/ade.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,aB={__name:"FadeDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Fade",code:lB},{description:i(()=>[n(" An element can disappear to reveal content below ")]),example:i(()=>[t(r(el),{animated:"fade"},{default:i(()=>[t(r(Rt),{visible:""},{default:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(r(Rt),{hidden:""},{default:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/ade.jpg"})]),_:1})]),_:1})]),_:1}))}},nB=`<template>
  <SuiReveal animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/chris.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,oB={__name:"MoveDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Move",code:nB},{description:i(()=>[n(" An element can move in a direction to reveal content ")]),example:i(()=>[t(r(el),{animated:"move"},{default:i(()=>[t(r(Rt),{visible:""},{default:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(r(Rt),{hidden:""},{default:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/chris.jpg"})]),_:1})]),_:1})]),_:1}))}},sB=`<template>
  <SuiReveal animated="rotate">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/stevie.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,rB={__name:"RotateDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Rotate",code:sB},{description:i(()=>[n(" An element can rotate to reveal content below ")]),example:i(()=>[t(r(el),{animated:"rotate"},{default:i(()=>[t(r(Rt),{visible:""},{default:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(r(Rt),{hidden:""},{default:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/stevie.jpg"})]),_:1})]),_:1})]),_:1}))}},uB=`<template>
  <SuiReveal active animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/nan.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,cB={__name:"ActiveDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Active",code:uB},{description:i(()=>[n(" An active reveal displays its hidden content ")]),example:i(()=>[t(r(el),{active:"",animated:"move"},{default:i(()=>[t(r(Rt),{visible:""},{default:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(r(Rt),{hidden:""},{default:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/nan.jpg"})]),_:1})]),_:1})]),_:1}))}},dB=`<template>
  <SuiReveal disabled animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/nan.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,mB={__name:"DisabledDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Disabled",code:dB},{description:i(()=>[n(" A disabled reveal will not animate when hovered ")]),example:i(()=>[t(r(el),{disabled:"",animated:"move"},{default:i(()=>[t(r(Rt),{visible:""},{default:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(r(Rt),{hidden:""},{default:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/nan.jpg"})]),_:1})]),_:1})]),_:1}))}},pB=`<template>
  <SuiReveal instant animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/chris.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,fB={__name:"InstantDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Instant",code:pB},{description:i(()=>[n(" An element can show its content without delay ")]),example:i(()=>[t(r(el),{instant:"",animated:"move"},{default:i(()=>[t(r(Rt),{visible:""},{default:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(r(Rt),{hidden:""},{default:i(()=>[t(r(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/chris.jpg"})]),_:1})]),_:1})]),_:1}))}},gB={__name:"Reveal",setup(e){const l=[{id:"fade",label:"Fade",category:"Types",component:aB},{id:"move",label:"Move",category:"Types",component:oB},{id:"rotate",label:"Rotate",category:"Types",component:rB},{id:"active",label:"Active",category:"States",component:cB},{id:"disabled",label:"Disabled",category:"States",component:mB},{id:"instant",label:"Instant",category:"Variations",component:fB}];return(a,o)=>(y(),B(ot,{title:"Reveal",description:"A reveal displays additional content in place of previous content when activated","component-docs":l}))}},hB=k("p",null,"Pellentesque habitant morbi tristique senectus.",-1),_B=`<template>
  <SuiSegment>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
</template>`,bB={__name:"SegmentDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Segment",code:_B},{description:i(()=>[n(" A segment of content ")]),example:i(()=>[t(r(N),null,{default:i(()=>[hB]),_:1})]),_:1}))}},vB=`<template>
  <SuiSegment placeholder>
    <SuiHeader icon>
      <SuiIcon name="pdf file outline" />
      No documents are listed for this customer.
    </SuiHeader>
    <SuiButton primary>Add Document</SuiButton>
  </SuiSegment>
</template>`,SB={__name:"PlaceholderSegmentDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Placeholder Segment",code:vB},{description:i(()=>[n(" A segment can be used to reserve space for conditionally displayed content. ")]),example:i(()=>[t(r(N),{placeholder:""},{default:i(()=>[t(r(pe),{icon:""},{default:i(()=>[t(r(Y),{name:"pdf file outline"}),n(" No documents are listed for this customer. ")]),_:1}),t(r(z),{primary:""},{default:i(()=>[n("Add Document")]),_:1})]),_:1})]),_:1}))}},yB=k("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),wB=`<template>
  <SuiSegment raised>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,CB={__name:"RaisedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Raised",code:wB},{description:i(()=>[n(" A segment may be formatted to raise above the page. ")]),example:i(()=>[t(r(N),{raised:""},{default:i(()=>[yB]),_:1})]),_:1}))}},AB=k("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),xB=k("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),kB=`<template>
  <SuiSegment stacked>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
  <SuiSegment stacked="tall">
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,BB={__name:"StackedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Stacked",code:kB},{description:i(()=>[n(" A segment can be formatted to show it contains multiple pages ")]),example:i(()=>[t(r(N),{stacked:""},{default:i(()=>[AB]),_:1}),t(r(N),{stacked:"tall"},{default:i(()=>[xB]),_:1})]),_:1}))}},$B=k("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),TB=k("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),LB=k("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),IB=`<template>
  <SuiHeader as="h4">Header</SuiHeader>
  <SuiSegment pailed>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
  </SuiSegment>
</template>`,DB={__name:"PiledDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Piled",code:IB},{description:i(()=>[n(" A segment can be formatted to look like a pile of pages ")]),example:i(()=>[t(r(pe),{as:"h4"},{default:i(()=>[n("Header")]),_:1}),t(r(N),{piled:""},{default:i(()=>[$B,TB,LB]),_:1})]),_:1}))}},EB=k("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his.",-1),RB=k("p",null,"Pellentesque habitant morbi tristique senectus.",-1),zB=k("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.",-1),PB=`<template>
  <SuiSegment vertical>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his.</p>
  </SuiSegment>
  <SuiSegment vertical>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
  <SuiSegment vertical>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.</p>
  </SuiSegment>
</template>`,VB={__name:"VerticalSegmentDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Vertical Segment",code:PB},{description:i(()=>[n(" A vertical segment formats content to be aligned as part of a vertical group ")]),example:i(()=>[t(r(N),{vertical:""},{default:i(()=>[EB]),_:1}),t(r(N),{vertical:""},{default:i(()=>[RB]),_:1}),t(r(N),{vertical:""},{default:i(()=>[zB]),_:1})]),_:1}))}},FB=k("p",null,"Top",-1),MB=k("p",null,"Middle",-1),HB=k("p",null,"Bottom",-1),NB=k("p",null,"Top",-1),OB=k("p",null,"Middle",-1),qB=k("p",null,"Bottom",-1),GB=k("p",null,"Top",-1),jB=k("p",null,"Middle",-1),UB=k("p",null,"Bottom",-1),YB=`<template>
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
</template>`,JB={__name:"SegmentsDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Segments",code:YB},{description:i(()=>[n(" A group of segments can be formatted to appear together ")]),example:i(()=>[t(r(yt),null,{default:i(()=>[t(r(N),null,{default:i(()=>[FB]),_:1}),t(r(N),null,{default:i(()=>[MB]),_:1}),t(r(N),null,{default:i(()=>[HB]),_:1})]),_:1}),t(r(yt),{basic:""},{default:i(()=>[t(r(N),null,{default:i(()=>[NB]),_:1}),t(r(N),null,{default:i(()=>[OB]),_:1}),t(r(N),null,{default:i(()=>[qB]),_:1})]),_:1}),t(r(yt),null,{default:i(()=>[t(r(N),null,{default:i(()=>[GB]),_:1}),t(r(N),{color:"red"},{default:i(()=>[jB]),_:1}),t(r(N),{secondary:""},{default:i(()=>[UB]),_:1})]),_:1})]),_:1}))}},WB=k("p",null,"Top",-1),KB=k("p",null,"Nested Top",-1),XB=k("p",null,"Nested Middle",-1),QB=k("p",null,"Nested Bottom",-1),ZB=k("p",null,"Middle",-1),e$=k("p",null,"Top",-1),t$=k("p",null,"Middle",-1),i$=k("p",null,"Bottom",-1),l$=k("p",null,"Bottom",-1),a$=`<template>
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
</template>`,n$={__name:"NestedSegmentsDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Nested Segments",code:a$},{description:i(()=>[n(" A group of segments can be nested in another group of segments ")]),example:i(()=>[t(r(yt),null,{default:i(()=>[t(r(N),null,{default:i(()=>[WB]),_:1}),t(r(yt),null,{default:i(()=>[t(r(N),null,{default:i(()=>[KB]),_:1}),t(r(N),null,{default:i(()=>[XB]),_:1}),t(r(N),null,{default:i(()=>[QB]),_:1})]),_:1}),t(r(N),null,{default:i(()=>[ZB]),_:1}),t(r(yt),{horizontal:""},{default:i(()=>[t(r(N),null,{default:i(()=>[e$]),_:1}),t(r(N),null,{default:i(()=>[t$]),_:1}),t(r(N),null,{default:i(()=>[i$]),_:1})]),_:1}),t(r(N),null,{default:i(()=>[l$]),_:1})]),_:1})]),_:1}))}},o$=k("p",null,"Left",-1),s$=k("p",null,"Middle",-1),r$=k("p",null,"Right",-1),u$=`<template>
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
</template>`,c$={__name:"HorizontalSegmentsDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Horizontal Segments",code:u$},{description:i(()=>[n(" A segment group can appear horizontally ")]),example:i(()=>[t(r(yt),{horizontal:""},{default:i(()=>[t(r(N),null,{default:i(()=>[o$]),_:1}),t(r(N),null,{default:i(()=>[s$]),_:1}),t(r(N),null,{default:i(()=>[r$]),_:1})]),_:1})]),_:1}))}},d$=`<template>
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
</template>`,m$={__name:"HorizontalEqualWidthSegmentsDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Horizontal equal width Segments",code:d$},{description:i(()=>[n(" A horizontal segment group can automatically divide segments to be equal width ")]),example:i(()=>[t(r(yt),{horizontal:"equal width"},{default:i(()=>[t(r(N),null,{default:i(()=>[n(" Segment One ")]),_:1}),t(r(N),null,{default:i(()=>[n(" Segment Two with a lot of additional content ")]),_:1}),t(r(N),null,{default:i(()=>[n(" Segment Three ")]),_:1})]),_:1})]),_:1}))}},p$=`<template>
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
</template>`,f$={__name:"HorizontalWrappingSegmentsDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Horizontal wrapping Segments",code:p$},{description:i(()=>[n(" A horizontal segment group can automatically wrap their segments on smaller screens ")]),example:i(()=>[t(r(yt),{horizontal:"wrapping"},{default:i(()=>[t(r(N),null,{default:i(()=>[n(" Segment One ")]),_:1}),t(r(N),null,{default:i(()=>[n(" Segment Two ")]),_:1}),t(r(N),null,{default:i(()=>[n(" Segment Three ")]),_:1}),t(r(N),null,{default:i(()=>[n(" Segment Four ")]),_:1}),t(r(N),null,{default:i(()=>[n(" Segment Five ")]),_:1}),t(r(N),null,{default:i(()=>[n(" Segment Six ")]),_:1}),t(r(N),null,{default:i(()=>[n(" Segment Seven ")]),_:1}),t(r(N),null,{default:i(()=>[n(" Segment Eight ")]),_:1})]),_:1})]),_:1}))}},g$=k("p",null,"Top",-1),h$=k("p",null,"Middle",-1),_$=k("p",null,"Bottom",-1),b$=`<template>
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
</template>`,v$={__name:"RaisedSegmentsDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Raised Segments",code:b$},{description:i(()=>[n(" A group of segments can be raised ")]),example:i(()=>[t(r(yt),{raised:""},{default:i(()=>[t(r(N),null,{default:i(()=>[g$]),_:1}),t(r(N),null,{default:i(()=>[h$]),_:1}),t(r(N),null,{default:i(()=>[_$]),_:1})]),_:1})]),_:1}))}},S$=k("p",null,"Top",-1),y$=k("p",null,"Middle",-1),w$=k("p",null,"Bottom",-1),C$=`<template>
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
</template>`,A$={__name:"StackedSegmentsDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Stacked Segments",code:C$},{description:i(()=>[n(" A group of segments can be stacked ")]),example:i(()=>[t(r(yt),{stacked:""},{default:i(()=>[t(r(N),null,{default:i(()=>[S$]),_:1}),t(r(N),null,{default:i(()=>[y$]),_:1}),t(r(N),null,{default:i(()=>[w$]),_:1})]),_:1})]),_:1}))}},x$=k("p",null,"Top",-1),k$=k("p",null,"Middle",-1),B$=k("p",null,"Bottom",-1),$$=`<template>
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
</template>`,T$={__name:"PiledSegmentsDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Piled Segments",code:$$},{description:i(()=>[n(" A group of segments can be piled ")]),example:i(()=>[t(r(yt),{piled:""},{default:i(()=>[t(r(N),null,{default:i(()=>[x$]),_:1}),t(r(N),null,{default:i(()=>[k$]),_:1}),t(r(N),null,{default:i(()=>[B$]),_:1})]),_:1})]),_:1}))}},L$=k("p",null,"Pellentesque habitant morbi tristique senectus.",-1),I$=`<template>
  <SuiSegment disabled>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
</template>`,D$={__name:"DisabledDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Disabled",code:I$},{description:i(()=>[n(" A segment may show its content is disabled ")]),example:i(()=>[t(r(N),{disabled:""},{default:i(()=>[L$]),_:1})]),_:1}))}},E$=`<template>
  <SuiSegment loading>
    <SuiImage src="/images/wireframe/paragraph.png" />
  </SuiSegment>
</template>`,R$={__name:"LoadingDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Loading",code:E$},{description:i(()=>[n(" A segment may show its content is being loaded ")]),example:i(()=>[t(r(N),{loading:""},{default:i(()=>[t(r(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}))}},z$=k("p",null,"I'm here to tell you something, and you will probably read me first.",-1),P$=`<template>
  <SuiSegment inverted>
    <p>I'm here to tell you something, and you will probably read me first.</p>
  </SuiSegment>
</template>`,V$={__name:"InvertedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Inverted",code:P$},{description:i(()=>[n(" A segment can have its colors inverted for contrast ")]),example:i(()=>[t(r(N),{inverted:""},{default:i(()=>[z$]),_:1})]),_:1}))}},F$=k("p",null,"This segment is on top",-1),M$=k("p",null,"This segment is attached on both sides",-1),H$=k("p",null,"This segment is on bottom",-1),N$=`<template>
  <SuiSegment attached="top">
    <p>This segment is on top</p>
  </SuiSegment>
  <SuiSegment attached>
    <p>This segment is attached on both sides</p>
  </SuiSegment>
  <SuiSegment attached="bottom">
    <p>This segment is on bottom</p>
  </SuiSegment>
</template>`,O$={__name:"AttachedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Attached",code:N$},{description:i(()=>[n(" A segment can be attached to other content on a page ")]),example:i(()=>[t(r(N),{attached:"top"},{default:i(()=>[F$]),_:1}),t(r(N),{attached:""},{default:i(()=>[M$]),_:1}),t(r(N),{attached:"bottom"},{default:i(()=>[H$]),_:1})]),_:1}))}},q$=k("p",null,"Padded content.",-1),G$=k("p",null,"Padded content.",-1),j$=`<template>
  <SuiSegment padded>
    <p>Padded content.</p>
  </SuiSegment>
  <SuiSegment padded="very">
    <p>Padded content.</p>
  </SuiSegment>
</template>`,U$={__name:"PaddedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Padded",code:j$},{description:i(()=>[n(" A segment can increase its padding ")]),example:i(()=>[t(r(N),{padded:""},{default:i(()=>[q$]),_:1}),t(r(N),{padded:"very"},{default:i(()=>[G$]),_:1})]),_:1}))}},Y$=k("p",null,"Fitted Segment",-1),J$=k("p",null,"Horizontally fitted segment",-1),W$=k("p",null,"Vertically fitted segment",-1),K$=`<template>
  <SuiSegment fitted>
    <p>Fitted Segment</p>
  </SuiSegment>
  <SuiSegment fitted="horizontally">
    <p>Horizontally fitted segment</p>
  </SuiSegment>
  <SuiSegment fitted="vertically">
    <p>Vertically fitted segment</p>
  </SuiSegment>
</template>`,X$={__name:"FittedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Fitted",code:K$},{description:i(()=>[n(" A segment can remove its padding, vertically or horizontally ")]),example:i(()=>[t(r(N),{fitted:""},{default:i(()=>[Y$]),_:1}),t(r(N),{fitted:"horizontally"},{default:i(()=>[J$]),_:1}),t(r(N),{fitted:"vertically"},{default:i(()=>[W$]),_:1})]),_:1}))}},Q$=k("p",null,"Pellentesque habitant morbi",-1),Z$=k("p",null,"Pellentesque habitant morbi",-1),eT=k("p",null,"Pellentesque habitant morbi",-1),tT=`<template>
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
</template>`,iT={__name:"CompactDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Compact",code:tT},{description:i(()=>[n(" A segment may take up only as much space as is necessary ")]),example:i(()=>[t(r(N),{compact:""},{default:i(()=>[Q$]),_:1}),t(r(yt),{compact:""},{default:i(()=>[t(r(N),null,{default:i(()=>[Z$]),_:1}),t(r(N),null,{default:i(()=>[eT]),_:1})]),_:1})]),_:1}))}},lT=`<template>
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
</template>`,aT={__name:"ColoredDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Colored",code:lT},{description:i(()=>[n(" A segment can be colored ")]),example:i(()=>[t(r(N),{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(r(N),{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(r(N),{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(r(N),{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(r(N),{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(r(N),{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(r(N),{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(r(N),{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(r(N),{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(r(N),{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(r(N),{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(r(N),{color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(r(N),{color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},nT=k("p",null,"I'm here to tell you something, and you will probably read me first.",-1),oT=k("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),sT=k("p",null,"If you notice me you must be looking very hard.",-1),rT=k("p",null,"I'm here to tell you something, and you will probably read me first.",-1),uT=k("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),cT=k("p",null,"If you notice me you must be looking very hard.",-1),dT=k("p",null,"I'm here to tell you something, and you will probably read me first.",-1),mT=k("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),pT=k("p",null,"If you notice me you must be looking very hard.",-1),fT=`<template>
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
</template>`,gT={__name:"EmphasisDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Emphasis",code:fT},{description:i(()=>[n(" A segment can be formatted to appear more or less noticeable ")]),example:i(()=>[t(r(N),null,{default:i(()=>[nT]),_:1}),t(r(N),{secondary:""},{default:i(()=>[oT]),_:1}),t(r(N),{tertiary:""},{default:i(()=>[sT]),_:1}),t(r(Ve)),t(r(N),{inverted:""},{default:i(()=>[rT]),_:1}),t(r(N),{secondary:"",inverted:""},{default:i(()=>[uT]),_:1}),t(r(N),{tertiary:"",inverted:""},{default:i(()=>[cT]),_:1}),t(r(Ve)),t(r(N),{inverted:"",color:"red"},{default:i(()=>[dT]),_:1}),t(r(N),{secondary:"",inverted:"",color:"red"},{default:i(()=>[mT]),_:1}),t(r(N),{tertiary:"",inverted:"",color:"red"},{default:i(()=>[pT]),_:1})]),_:1}))}},hT=`<template>
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
</template>`,_T={__name:"CircularDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Circular",code:hT},{description:i(()=>[n(" A segment can be circular ")]),example:i(()=>[t(r(N),{circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[t(r(pe),{as:"h2"},{default:i(()=>[n(" Buy Now "),t(r(Yi),null,{default:i(()=>[n("$10.99")]),_:1})]),_:1})]),_:1}),t(r(N),{circular:"",inverted:"",style:{width:"175px",height:"175px"}},{default:i(()=>[t(r(pe),{as:"h2"},{default:i(()=>[n(" Buy Now "),t(r(Yi),null,{default:i(()=>[n("$10.99")]),_:1})]),_:1})]),_:1})]),_:1}))}},bT=`<template>
  <SuiSegment clearing>
    <SuiButton floated="right" content="Floated" />
  </SuiSegment>
</template>`,vT={__name:"ClearingDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Clearing",code:bT},{description:i(()=>[n(" A segment can clear floated content ")]),example:i(()=>[t(r(N),{clearing:""},{default:i(()=>[t(r(z),{floated:"right",content:"Floated"})]),_:1})]),_:1}))}},ST=k("p",null,"This segment will appear to the right",-1),yT=k("p",null,"This segment will appear to the left",-1),wT=`<template>
  <SuiSegment floated="right">
    <p>This segment will appear to the right</p>
  </SuiSegment>
  <SuiSegment floated="left">
    <p>This segment will appear to the left</p>
  </SuiSegment>
</template>`,CT={__name:"FloatedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Floated",code:wT},{description:i(()=>[n(" A segment can appear to the left or right of other content ")]),example:i(()=>[t(r(N),{floated:"right"},{default:i(()=>[ST]),_:1}),t(r(N),{floated:"left"},{default:i(()=>[yT]),_:1})]),_:1}))}},AT=`<template>
  <SuiSegment textAlign="right">Right</SuiSegment>
  <SuiSegment textAlign="left">Left</SuiSegment>
  <SuiSegment textAlign="center">Center</SuiSegment>
</template>`,xT={__name:"TextAlignmentDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Text Alignment",code:AT},{description:i(()=>[n(" A segment can have its text aligned to a side ")]),example:i(()=>[t(r(N),{textAlign:"right"},{default:i(()=>[n("Right")]),_:1}),t(r(N),{textAlign:"left"},{default:i(()=>[n("Left")]),_:1}),t(r(N),{textAlign:"center"},{default:i(()=>[n("Center")]),_:1})]),_:1}))}},kT=k("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),BT=`<template>
  <SuiSegment basic>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,$T={__name:"BasicDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Basic",code:BT},{description:i(()=>[n(" A basic segment has no special formatting ")]),example:i(()=>[t(r(N),{basic:""},{default:i(()=>[kT]),_:1})]),_:1}))}},TT=k("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),LT=k("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),IT=k("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),DT=k("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),ET=k("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),RT=k("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),zT=k("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),PT=k("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),VT=`<template>
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
</template>`,FT={__name:"ScrollingDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Scrolling",code:VT},{description:i(()=>[n(" A scrolling segment has a predefined height to allow its content to be scrollable ")]),example:i(()=>[t(r(N),{scrolling:""},{default:i(()=>[TT,LT,IT,DT,ET,RT,zT,PT]),_:1})]),_:1}))}},MT=`<template>
  <SuiSegment size="mini">Mini</SuiSegment>
  <SuiSegment size="tiny">Tiny</SuiSegment>
  <SuiSegment size="small">Small</SuiSegment>
  <SuiSegment>Default</SuiSegment>
  <SuiSegment size="large">Large</SuiSegment>
  <SuiSegment size="big">Big</SuiSegment>
  <SuiSegment size="huge">Huge</SuiSegment>
  <SuiSegment size="massive">Massive</SuiSegment>
</template>`,HT={__name:"SizeDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Size",code:MT},{description:i(()=>[n(" A segment can vary in size ")]),example:i(()=>[t(r(N),{size:"mini"},{default:i(()=>[n("Mini")]),_:1}),t(r(N),{size:"tiny"},{default:i(()=>[n("Tiny")]),_:1}),t(r(N),{size:"small"},{default:i(()=>[n("Small")]),_:1}),t(r(N),null,{default:i(()=>[n("Default")]),_:1}),t(r(N),{size:"large"},{default:i(()=>[n("Large")]),_:1}),t(r(N),{size:"big"},{default:i(()=>[n("Big")]),_:1}),t(r(N),{size:"huge"},{default:i(()=>[n("Huge")]),_:1}),t(r(N),{size:"massive"},{default:i(()=>[n("Massive")]),_:1})]),_:1}))}},NT={__name:"Segment",setup(e){const l=[{id:"segment",label:"Segment",category:"Types",component:bB},{id:"placeholder-segment",label:"Placeholder Segment",category:"Types",component:SB},{id:"raised",label:"Raised",category:"Types",component:CB},{id:"stacked",label:"Stacked",category:"Types",component:BB},{id:"piled",label:"Piled",category:"Types",component:DB},{id:"vertical-segment",label:"Vertical Segment",category:"Types",component:VB},{id:"segments",label:"Segments",category:"Groups",component:JB},{id:"nested-segments",label:"Nested Segments",category:"Groups",component:n$},{id:"horizontal-segments",label:"Horizontal Segments",category:"Groups",component:c$},{id:"horizontal-equal-width-segments",label:"Horizontal equal width Segments",category:"Groups",component:m$},{id:"horizontal-wrapping-segments",label:"Horizontal wrapping Segments",category:"Groups",component:f$},{id:"raised-segments",label:"Raised Segments",category:"Groups",component:v$},{id:"stacked-segments",label:"Stacked Segments",category:"Groups",component:A$},{id:"piled-segments",label:"Piled Segments",category:"Groups",component:T$},{id:"disabled",label:"Disabled",category:"States",component:D$},{id:"loading",label:"Loading",category:"States",component:R$},{id:"inverted",label:"Inverted",category:"Variations",component:V$},{id:"attached",label:"Attached",category:"Variations",component:O$},{id:"padded",label:"Padded",category:"Variations",component:U$},{id:"fitted",label:"Fitted",category:"Variations",component:X$},{id:"compact",label:"Compact",category:"Variations",component:iT},{id:"colored",label:"Colored",category:"Variations",component:aT},{id:"emphasis",label:"Emphasis",category:"Variations",component:gT},{id:"circular",label:"Circular",category:"Variations",component:_T},{id:"clearing",label:"Clearing",category:"Variations",component:vT},{id:"floated",label:"Floated",category:"Variations",component:CT},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:xT},{id:"basic",label:"Basic",category:"Variations",component:$T},{id:"scrolling",label:"Scrolling",category:"Variations",component:FT},{id:"size",label:"Size",category:"Variations",component:HT}];return(a,o)=>(y(),B(ot,{title:"Segment",description:"A segment is used to create a grouping of related content","component-docs":l}))}},OT=V({name:"StepDoc",components:{DocExample:dt},setup(){return{stepCode:`<sui-step-group>
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
</sui-segment>`}}}),qT={class:"intro"},GT=k("p",null,"The steps take up the entire column width",-1),jT=k("p",null,"Main content",-1);function UT(e,l,a,o,s,c){const m=x("sui-header-subheader"),f=x("sui-header"),u=x("sui-divider"),d=x("sui-icon"),g=x("sui-menu-item"),p=x("sui-menu"),_=x("sui-container"),w=x("sui-segment"),S=x("sui-step"),A=x("sui-step-group"),T=x("doc-example"),I=x("sui-step-title"),h=x("sui-step-description"),b=x("sui-step-content"),C=x("sui-grid-column"),$=x("sui-grid");return y(),ve("div",null,[t(w,{vertical:""},{default:i(()=>[t(_,{class:"main"},{default:i(()=>[k("div",qT,[t(f,{as:"h1"},{default:i(()=>[n("Step "),t(m,null,{default:i(()=>[n(" A step shows the completion status of an activity in a series of activities ")]),_:1})]),_:1}),t(u,{hidden:""}),t(p,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(d,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(d,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(_,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(T,{title:"Step",description:"A single step",code:e.stepCode},{default:i(()=>[t(A,null,{default:i(()=>[t(S,null,{default:i(()=>[n("Shipping")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Groups")]),_:1}),t(T,{title:"Steps",description:"A set of steps",code:e.stepsCode},{default:i(()=>[t(A,null,{default:i(()=>[t(S,null,{default:i(()=>[t(d,{name:"truck"}),t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Shipping")]),_:1}),t(h,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,{active:""},{default:i(()=>[t(d,{name:"payment"}),t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Billing")]),_:1}),t(h,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(S,{disabled:""},{default:i(()=>[t(d,{name:"info"}),t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Ordered",description:"A step can show a ordered sequence of steps",code:e.orderedCode},{default:i(()=>[t(A,{ordered:""},{default:i(()=>[t(S,{completed:""},{default:i(()=>[t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Shipping")]),_:1}),t(h,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,{completed:""},{default:i(()=>[t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Billing")]),_:1}),t(h,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(S,{active:""},{default:i(()=>[t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(h,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Vertical",description:"A step can be displayed stacked vertically",code:e.verticalCode},{default:i(()=>[t(A,{vertical:""},{default:i(()=>[t(S,{completed:""},{default:i(()=>[t(d,{name:"truck"}),t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Shipping")]),_:1}),t(h,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,{completed:""},{default:i(()=>[t(d,{name:"credit card"}),t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Billing")]),_:1}),t(h,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(S,{active:""},{default:i(()=>[t(d,{name:"info"}),t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(h,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(T,{title:"Description",description:"A step can contain a description",code:e.descriptionCode},{default:i(()=>[t(A,null,{default:i(()=>[t(S,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Shipping")]),_:1}),t(h,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Icon",description:"A step can contain an icon",code:e.iconCode},{default:i(()=>[t(A,null,{default:i(()=>[t(S,null,{default:i(()=>[t(d,{name:"truck"}),t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Shipping")]),_:1}),t(h,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Link",description:"A step can link",code:e.linkCode},{default:i(()=>[t(A,null,{default:i(()=>[t(S,{link:""},{default:i(()=>[t(d,{name:"truck"}),t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Shipping")]),_:1}),t(h,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Billing")]),_:1}),t(h,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(T,{title:"Active",description:"A step can be highlighted as active",code:e.activeCode},{default:i(()=>[t(A,null,{default:i(()=>[t(S,{active:""},{default:i(()=>[t(d,{name:"payment"}),t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Billing")]),_:1}),t(h,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Completed",description:"A step can show that a user has completed it",code:e.completedCode},{default:i(()=>[t(A,null,{default:i(()=>[t(S,{completed:""},{default:i(()=>[t(d,{name:"payment"}),t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Billing")]),_:1}),t(h,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Disabled",description:"A step can show that it cannot be selected",code:e.disabledCode},{default:i(()=>[t(A,null,{default:i(()=>[t(S,{disabled:""},{default:i(()=>[n("Billing")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(T,{title:"Stackable",description:"A step can stack vertically only on smaller screens",code:e.stackableCode},{default:i(()=>[t(A,{stackable:"tablet"},{default:i(()=>[t(S,null,{default:i(()=>[t(d,{name:"plane"}),t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Shipping")]),_:1}),t(h,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,{active:""},{default:i(()=>[t(d,{name:"dollar"}),t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Billing")]),_:1}),t(h,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(S,{disabled:""},{default:i(()=>[t(d,{name:"info circle"}),t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(h,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Unstackable",description:"A step can prevent itself from stacking on mobile",code:e.unstackableCode},{default:i(()=>[t(A,{unstackable:""},{default:i(()=>[t(S,null,{default:i(()=>[t(d,{name:"plane"}),t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Shipping")]),_:1}),t(h,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,{active:""},{default:i(()=>[t(d,{name:"dollar"}),t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Billing")]),_:1}),t(h,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(S,{disabled:""},{default:i(()=>[t(d,{name:"info circle"}),t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(h,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Fluid",description:"A fluid step takes up the width of its container",code:e.fluidCode},{default:i(()=>[t($,{columns:2},{default:i(()=>[t(C,null,{default:i(()=>[t(A,{fluid:"",vertical:""},{default:i(()=>[t(S,{completed:""},{default:i(()=>[t(d,{name:"truck"}),t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Shipping")]),_:1}),t(h,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,{active:""},{default:i(()=>[t(d,{name:"dollar"}),t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Billing")]),_:1}),t(h,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[GT]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Attached",description:"Steps can be attached to other elements",code:e.attachedCode},{default:i(()=>[k("div",null,[t(A,{attached:"top"},{default:i(()=>[t(S,null,{default:i(()=>[t(d,{name:"truck"}),t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Shipping")]),_:1}),t(h,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,{active:""},{default:i(()=>[t(d,{name:"payment"}),t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Billing")]),_:1}),t(h,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1}),t(w,{attached:""},{default:i(()=>[jT]),_:1}),t(A,{attached:"bottom"},{default:i(()=>[t(S,null,{default:i(()=>[t(d,{name:"truck"}),t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Shipping")]),_:1}),t(h,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,{active:""},{default:i(()=>[t(d,{name:"payment"}),t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Billing")]),_:1}),t(h,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(T,{title:"Evenly Divided",description:"Steps can be divided evenly inside their parent",code:e.evenlyDividedCode},{default:i(()=>[t(A,{widths:2},{default:i(()=>[t(S,{active:""},{default:i(()=>[t(d,{name:"payment"}),t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Billing")]),_:1})]),_:1})]),_:1}),t(S,{disabled:""},{default:i(()=>[t(d,{name:"info"}),t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Size",description:"Steps can have different sizes",code:e.sizeCode},{default:i(()=>[t(A,{size:"mini"},{default:i(()=>[t(S,{active:""},{default:i(()=>[t(d,{name:"payment"}),t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Billing")]),_:1})]),_:1})]),_:1}),t(S,{disabled:""},{default:i(()=>[t(d,{name:"info"}),t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Inverted",description:"A step's color can be inverted",code:e.invertedCode},{default:i(()=>[t(w,{inverted:""},{default:i(()=>[t(A,{inverted:"",vertical:""},{default:i(()=>[t(S,{completed:""},{default:i(()=>[t(d,{name:"truck"}),t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Shipping")]),_:1}),t(h,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(S,{completed:""},{default:i(()=>[t(d,{name:"credit card"}),t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Billing")]),_:1}),t(h,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(S,{active:""},{default:i(()=>[t(d,{name:"info"}),t(b,null,{default:i(()=>[t(I,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(h,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const YT=Me(OT,[["render",UT]]),JT=`<template>
  <SuiBreadcrumb
    :sections="[
      { content: 'Home', link: true },
      { content: 'Store', link: true },
      { content: 'T-Shirt', active: true }
    ]"
    icon="right angle"
  />
</template>`,WT={__name:"BreadcrumbDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Breadcrumb",code:JT},{description:i(()=>[n(" A standard breadcrumb ")]),example:i(()=>[t(r(ai),{sections:[{content:"Home",link:!0},{content:"Store",link:!0},{content:"T-Shirt",active:!0}],icon:"right angle"})]),_:1}))}},KT=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection link>Registration</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Personal Information</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,XT={__name:"DividerDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Divider",code:KT},{description:i(()=>[n(" A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text. ")]),example:i(()=>[t(r(ai),null,{default:i(()=>[t(r(et),{link:""},{default:i(()=>[n("Home")]),_:1}),t(r(Lt),null,{default:i(()=>[n(" / ")]),_:1}),t(r(et),{link:""},{default:i(()=>[n("Registration")]),_:1}),t(r(Lt),null,{default:i(()=>[n(" / ")]),_:1}),t(r(et),{active:""},{default:i(()=>[n("Personal Information")]),_:1})]),_:1})]),_:1}))}},QT=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Search</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,ZT={__name:"SectionDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Section",code:QT},{description:i(()=>[n(" A breadcrumb can contain sections that can either be formatted as a link or text ")]),example:i(()=>[t(r(ai),null,{default:i(()=>[t(r(et),{link:""},{default:i(()=>[n("Home")]),_:1}),t(r(Lt),null,{default:i(()=>[n(" / ")]),_:1}),t(r(et),{active:""},{default:i(()=>[n("Search")]),_:1})]),_:1})]),_:1}))}},eL=k("a",{href:"#"},"paper towels",-1),tL=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Search for: <a href="#">paper towels</a></SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,iL={__name:"LinkDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Link",code:tL},{description:i(()=>[n(" A section may be linkable or contain a link ")]),example:i(()=>[t(r(ai),null,{default:i(()=>[t(r(et),{link:""},{default:i(()=>[n("Home")]),_:1}),t(r(Lt),null,{default:i(()=>[n(" / ")]),_:1}),t(r(et),{active:""},{default:i(()=>[n("Search for: "),eL]),_:1})]),_:1})]),_:1}))}},lL=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Products</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Paper Towels</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,aL={__name:"ActiveDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Active",code:lL},{description:i(()=>[n(" A section can be active ")]),example:i(()=>[t(r(ai),null,{default:i(()=>[t(r(et),{link:""},{default:i(()=>[n("Products")]),_:1}),t(r(Lt),null,{default:i(()=>[n(" / ")]),_:1}),t(r(et),{active:""},{default:i(()=>[n("Paper Towels")]),_:1})]),_:1})]),_:1}))}},nL=k("br",null,null,-1),oL=`<template>
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
</template>`,sL={__name:"InvertedDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Inverted",code:oL},{description:i(()=>[n(" A breadcrumb can be inverted ")]),example:i(()=>[t(r(N),{inverted:""},{default:i(()=>[t(r(ai),{inverted:""},{default:i(()=>[t(r(et),{link:""},{default:i(()=>[n("Home")]),_:1}),t(r(Lt),null,{default:i(()=>[n(" / ")]),_:1}),t(r(et),{link:""},{default:i(()=>[n("Registration")]),_:1}),t(r(Lt),null,{default:i(()=>[n(" / ")]),_:1}),t(r(et),{active:""},{default:i(()=>[n("Personal Information")]),_:1})]),_:1}),nL,t(r(ai),{inverted:""},{default:i(()=>[t(r(et),null,{default:i(()=>[n("Home")]),_:1}),t(r(Lt),null,{default:i(()=>[n(" / ")]),_:1}),t(r(et),null,{default:i(()=>[n("Registration")]),_:1}),t(r(Lt),null,{default:i(()=>[n(" / ")]),_:1}),t(r(et),{active:""},{default:i(()=>[n("Personal Information")]),_:1})]),_:1})]),_:1})]),_:1}))}},rL=`<template>
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
</template>`,uL={__name:"SizeDoc",setup(e){const l=["mini","tiny","small","large","big","huge","massive"];return(a,o)=>(y(),B(D,{label:"Size",code:rL},{description:i(()=>[n(" A breadcrumb can vary in size ")]),example:i(()=>[(y(),ve(Ce,null,Qe(l,s=>(y(),ve(Ce,{key:s},[t(r(ai),{size:s},{default:i(()=>[t(r(et),{link:""},{default:i(()=>[n("Home")]),_:1}),t(r(Lt),null,{default:i(()=>[n(" / ")]),_:1}),t(r(et),{link:""},{default:i(()=>[n("Registration")]),_:1}),t(r(Lt),null,{default:i(()=>[n(" / ")]),_:1}),t(r(et),{active:""},{default:i(()=>[n("Personal Information")]),_:1})]),_:2},1032,["size"]),t(r(Ve),{hidden:""})],64))),64))]),_:1}))}},cL={__name:"Breadcrumb",setup(e){const l=[{id:"breadcrumb",label:"Breadcrumb",category:"Types",component:WT},{id:"divider",label:"Divider",category:"Content",component:XT},{id:"section",label:"Section",category:"Content",component:ZT},{id:"link",label:"Link",category:"Content",component:iL},{id:"active",label:"Active",category:"States",component:aL},{id:"inverted",label:"Inverted",category:"Variations",component:sL},{id:"size",label:"Size",category:"Variations",component:uL}];return(a,o)=>(y(),B(ot,{title:"Breadcrumb",description:"A standard breadcrumb","component-docs":l}))}},dL=`<template>
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
</template>`,mL={__name:"FormDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Form",code:dL},{description:i(()=>[n(" A Form ")]),example:i(()=>[t(r(Ht),null,{default:i(()=>[t(r(it),{label:"First Name",placeholder:"First Name"}),t(r(it),{label:"Last Name",placeholder:"Last Name"}),t(r(it),null,{default:i(()=>[t(r(id),{label:"I agree to the Terms and Conditions"})]),_:1}),t(r(z),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},pL=`<template>
  <SuiForm>
    <SuiFormField
      label="User Input"
    />
  </SuiForm>
</template>`,fL={__name:"FieldDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Field",code:pL},{description:i(()=>[n(" A field is a form element containing a label and an input ")]),example:i(()=>[t(r(Ht),null,{default:i(()=>[t(r(it),{label:"User Input"})]),_:1})]),_:1}))}},gL=`<template>
  <SuiForm>
    <SuiFormGroup>
      <SuiFormField label="First Name" />
      <SuiFormField label="Middle Name" />
      <SuiFormField label="Last Name" />
    </SuiFormGroup>
  </SuiForm>
</template>`,hL={__name:"FieldsDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Fields",code:gL},{description:i(()=>[n(" A set of fields can appear grouped together ")]),example:i(()=>[t(r(Ht),null,{default:i(()=>[t(r(fs),null,{default:i(()=>[t(r(it),{label:"First Name"}),t(r(it),{label:"Middle Name"}),t(r(it),{label:"Last Name"})]),_:1})]),_:1})]),_:1}))}},_L=`<template>
  <SuiForm>
    <SuiFormTextarea label="Text" />
    <SuiFormTextarea label="Short Text" :rows="2" />
  </SuiForm>
</template>`,bL={__name:"TextAreaDoc",setup(e){return(l,a)=>(y(),B(D,{label:"TextArea",code:_L},{description:i(()=>[n(" A textarea can be used to allow for extended user input. ")]),example:i(()=>[t(r(Ht),null,{default:i(()=>[t(r(wo),{label:"Text"}),t(r(wo),{label:"Short Text",rows:2})]),_:1})]),_:1}))}},vL=`<template>
  <SuiForm loading>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,SL={__name:"LoadingDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Loading",code:vL},{description:i(()=>[n(" If a form is in loading state, it will automatically show a loading indicator. ")]),example:i(()=>[t(r(Ht),{loading:""},{default:i(()=>[t(r(it),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(r(z),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},yL=`<template>
  <SuiForm success>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      success
      header='Form Completed'
      content="You're all signed up for the newsletter"
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,wL={__name:"SuccessDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Success",code:yL},{description:i(()=>[n(" If a form is in an success state, it will automatically show any success message blocks. ")]),example:i(()=>[t(r(Ht),{success:""},{default:i(()=>[t(r(it),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(r(An),{success:"",header:"Form Completed",content:"You're all signed up for the newsletter"}),t(r(z),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},CL=`<template>
  <SuiForm error>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      error
      header='Action Forbidden'
      content='You can only sign up for an account once with a given e-mail address.'
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,AL={__name:"ErrorDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Error",code:CL},{description:i(()=>[n(" If a form is in an error state, it will automatically show any error message blocks. ")]),example:i(()=>[t(r(Ht),{error:""},{default:i(()=>[t(r(it),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(r(An),{error:"",header:"Action Forbidden",content:"You can only sign up for an account once with a given e-mail address."}),t(r(z),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},xL=`<template>
  <SuiForm warning>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      warning
      header='Could you check something!'
      content='That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.'
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,kL={__name:"WarningDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Warning",code:xL},{description:i(()=>[n(" If a form is in warning state, it will automatically show any warning message block. ")]),example:i(()=>[t(r(Ht),{warning:""},{default:i(()=>[t(r(it),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(r(An),{warning:"",header:"Could you check something!",content:"That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail."}),t(r(z),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},BL=`<template>
  <SuiForm>
    <SuiFormGroup>
      <SuiFormField disabled label="First name" placeholder="Read only" />
      <SuiFormField disabled label="Last name" placeholder="Disabled" />
    </SuiFormGroup>
  </SuiForm>
</template>`,$L={__name:"DisabledDoc",setup(e){return(l,a)=>(y(),B(D,{label:"Disabled",code:BL},{description:i(()=>[n(" Individual fields may be disabled ")]),example:i(()=>[t(r(Ht),null,{default:i(()=>[t(r(fs),null,{default:i(()=>[t(r(it),{disabled:"",label:"First name",placeholder:"Read only"}),t(r(it),{disabled:"",label:"Last name",placeholder:"Disabled"})]),_:1})]),_:1})]),_:1}))}},TL={__name:"Form",setup(e){const l=[{id:"form",label:"Form",category:"Types",component:mL},{id:"field",label:"Field",category:"Content",component:fL},{id:"fields",label:"Fields",category:"Content",component:hL},{id:"textarea",label:"TextArea",category:"Content",component:bL},{id:"loading",label:"Loading",category:"Form States",component:SL},{id:"success",label:"Success",category:"Form States",component:wL},{id:"error",label:"Error",category:"Form States",component:AL},{id:"warning",label:"Warning",category:"Form States",component:kL},{id:"disabled",label:"Disabled",category:"Field States",component:$L}];return(a,o)=>(y(),B(ot,{title:"Form",description:"A form displays a set of related user input fields in a structured way","component-docs":l}))}},LL=V({name:"DocPageHeader",props:{title:String,sub:String}}),IL={class:"intro",style:{padding:"2rem"}};function DL(e,l,a,o,s,c){const m=x("sui-header-subheader"),f=x("sui-header"),u=x("sui-divider"),d=x("sui-icon"),g=x("sui-menu-item"),p=x("sui-menu"),_=x("sui-container"),w=x("sui-segment");return y(),B(w,{vertical:""},{default:i(()=>[t(_,{class:"main"},{default:i(()=>[k("div",IL,[t(f,{as:"h1"},{default:i(()=>[n($e(e.title)+" ",1),t(m,null,{default:i(()=>[n($e(e.sub),1)]),_:1})]),_:1}),t(u,{hidden:""}),t(p,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(d,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(d,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1})}const At=Me(LL,[["render",DL]]),Te="/vue-fomantic-ui/images/wireframe/image.png",Zt="/vue-fomantic-ui/images/wireframe/media-paragraph.png",Oe="/vue-fomantic-ui/images/wireframe/paragraph.png",Or="/vue-fomantic-ui/images/wireframe/centered-paragraph.png",EL=V({name:"GridDoc",components:{DocPageHeader:At,DocExample:dt},setup(){return{numbers:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],gridCode:`<sui-grid>
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
</sui-grid>`}}}),RL=k("br",null,null,-1);function zL(e,l,a,o,s,c){const m=x("doc-page-header"),f=x("sui-header"),u=x("sui-image"),d=x("sui-grid-column"),g=x("sui-grid"),p=x("doc-example"),_=x("sui-grid-row"),w=x("sui-segment"),S=x("sui-divider"),A=x("sui-menu-item"),T=x("sui-menu"),I=x("sui-container");return y(),ve("div",null,[t(m,{title:"Grid",sub:"A grid is used to harmonize negative space in a layout"}),t(I,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(p,{title:"Grid",description:"A basic grid",code:e.gridCode},{default:i(()=>[t(g,null,{default:i(()=>[(y(!0),ve(Ce,null,Qe(e.numbers,h=>(y(),B(d,{key:h},{default:i(()=>[t(u,{src:Te})]),_:2},1024))),128))]),_:1})]),_:1},8,["code"]),t(p,{title:"Divided",description:"A grid can have dividers between its columns",code:e.dividedCode},{default:i(()=>[t(g,{columns:3,divided:""},{default:i(()=>[t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,{src:Zt})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Zt})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Zt})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,{src:Zt})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Zt})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Zt})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Vertical Divided",description:"A grid can have dividers between rows",code:e.verticalDividedCode},{default:i(()=>[t(g,{divided:"vertically"},{default:i(()=>[t(_,{columns:2},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Oe})]),_:1})]),_:1}),t(_,{columns:3},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Oe})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Celled",description:"A grid can have rows divided into cells",code:e.celledCode},{default:i(()=>[t(g,{celled:""},{default:i(()=>[t(_,null,{default:i(()=>[t(d,{width:3},{default:i(()=>[t(u,{src:Te})]),_:1}),t(d,{width:13},{default:i(()=>[t(u,{src:Or})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,{width:3},{default:i(()=>[t(u,{src:Te})]),_:1}),t(d,{width:10},{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,{width:3},{default:i(()=>[t(u,{src:Te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Internally Celled",description:"A grid can have rows divisions only between internal rows",code:e.internallyCelledCode},{default:i(()=>[t(g,{celled:"internally"},{default:i(()=>[t(_,null,{default:i(()=>[t(d,{width:3},{default:i(()=>[t(u,{src:Te})]),_:1}),t(d,{width:13},{default:i(()=>[t(u,{src:Or})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,{width:3},{default:i(()=>[t(u,{src:Te})]),_:1}),t(d,{width:10},{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,{width:3},{default:i(()=>[t(u,{src:Te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(p,{title:"Rows",description:"A row is a horizontal grouping of columns",code:e.rowsCode},{default:i(()=>[t(g,{columns:3},{default:i(()=>[t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Oe})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Oe})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Columns",description:"Columns each contain gutters giving them equal spacing from other columns",code:e.columnsCode},{default:i(()=>[t(g,null,{default:i(()=>[t(d,{width:8},{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,{width:8},{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,{width:8},{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,{width:8},{default:i(()=>[t(u,{src:Oe})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(p,{title:"Floated",description:"A column can sit flush against the left or right edge of a row",code:e.floatedCode},{default:i(()=>[t(g,null,{default:i(()=>[t(d,{floated:"left",width:5},{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,{floated:"right",width:5},{default:i(()=>[t(u,{src:Oe})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Column Width",description:"A column can vary in width taking up more than a single grid column",code:e.columnWidthCode},{default:i(()=>[t(g,null,{default:i(()=>[t(d,{width:4},{default:i(()=>[t(u,{src:Te})]),_:1}),t(d,{width:9},{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,{width:3},{default:i(()=>[t(u,{src:Zt})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Column Count",description:"A grid can have a different number of columns per row",code:e.columnCountCode},{default:i(()=>[t(g,null,{default:i(()=>[t(_,{columns:3},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{src:Te})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Te})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Te})]),_:1})]),_:1}),t(_,{columns:4},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{src:Te})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Te})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Te})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Equal Width",description:"Equal Width",code:e.equalWidthCode},{default:i(()=>[t(g,{columns:"equal"},{default:i(()=>[t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("1")]),_:1})]),_:1}),t(d,{width:8},{default:i(()=>[t(w,null,{default:i(()=>[n("2")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("3")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Stretched",description:"A row can stretch its contents to take up the entire column height",code:e.stretchedCode},{default:i(()=>[t(g,{columns:3,divided:""},{default:i(()=>[t(_,{stretched:""},{default:i(()=>[t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("1")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("1")]),_:1}),t(w,null,{default:i(()=>[n("2")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("1")]),_:1}),t(w,null,{default:i(()=>[n("2")]),_:1}),t(w,null,{default:i(()=>[n("3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Padded",description:"A grid can preserve its vertical and horizontal gutters on first and last columns",code:e.paddedCode},{default:i(()=>[k("div",null,[t(S),t(g,{padded:"",columns:2},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Oe})]),_:1})]),_:1})])]),_:1},8,["code"]),t(p,{title:"Relaxed",description:"A grid can increase its gutters to allow for more negative space",code:e.relaxedCode},{default:i(()=>[t(g,{relaxed:"",columns:4},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{src:Te})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Te})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Te})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Te})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Colored",description:"A row or column can be colored",code:e.coloredCode},{default:i(()=>[t(g,{padded:"",columns:5},{default:i(()=>[t(d,{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(d,{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(d,{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(d,{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(d,{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(d,{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(d,{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(d,{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(d,{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(d,{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(d,{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(d,{color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(d,{color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Centered",description:"A grid can have its columns centered",code:e.centeredCode},{default:i(()=>[t(g,{centered:"",columns:2},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{src:Te})]),_:1}),t(_,{centered:"",columns:4},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{src:Te})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Te})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Text Alignment",description:"A grid, row, or column can specify its text alignment",code:e.textAlignCode},{default:i(()=>[t(g,{textAlign:"center",columns:3},{default:i(()=>[t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(T,{vertical:"",fluid:""},{default:i(()=>[t(A,{header:""},{default:i(()=>[n("Cats")]),_:1})]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(T,{vertical:"",fluid:""},{default:i(()=>[t(A,{header:""},{default:i(()=>[n("Dogs")]),_:1}),t(A,null,{default:i(()=>[n("Poodle")]),_:1}),t(A,null,{default:i(()=>[n("Cockerspaniel")]),_:1})]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(T,{vertical:"",fluid:""},{default:i(()=>[t(A,{header:""},{default:i(()=>[n("Monkeys")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Vertical Alignment",description:"A grid, row, or column can specify its vertical alignment to have all its columns vertically centered",code:e.verticalAlignCode},{default:i(()=>[t(g,{verticalAlign:"middle",columns:4,centered:""},{default:i(()=>[t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,{src:Te})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Te}),RL,t(u,{src:Te})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Responsive Variations")]),_:1}),t(p,{title:"Doubling",description:"A grid can double its column width on tablet and mobile sizes",code:e.doublingCode},{default:i(()=>[t(g,{doubling:"",columns:5},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{src:Te})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Te})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Te})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Te})]),_:1}),t(d,null,{default:i(()=>[t(u,{src:Te})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"stackable",description:"A grid can have its columns stack on-top of each other after reaching mobile breakpoints",code:e.stackableCode},{default:i(()=>[t(g,{stackable:"",columns:2},{default:i(()=>[t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[t(u,{src:Oe})]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[t(u,{src:Oe})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Reversed",description:"A grid or row can specify that its columns should reverse order at different device sizes",code:e.reversedCode},{default:i(()=>[t(g,{reversed:"computer vertically"},{default:i(()=>[t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Computer Row 3")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Computer Row 2")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Computer Row 1")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Device Visibility",description:"A columns or row can appear only for a specific device, or screen sizes",code:e.deviceVisibilityCode},{default:i(()=>[t(g,null,{default:i(()=>[t(_,{only:"large screen",columns:2},{default:i(()=>[t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Large Screen")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Large Screen")]),_:1})]),_:1})]),_:1}),t(_,{only:"widescreen",columns:2},{default:i(()=>[t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Widescreen")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Widescreen")]),_:1})]),_:1})]),_:1}),t(_,{only:"mobile",columns:2},{default:i(()=>[t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Mobile")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Mobile")]),_:1})]),_:1})]),_:1}),t(_,{columns:3},{default:i(()=>[t(d,{only:"computer"},{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(d,{only:"mobile"},{default:i(()=>[t(w,null,{default:i(()=>[n("Tablet and Mobile")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("All Sizes")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("All Sizes")]),_:1})]),_:1})]),_:1}),t(_,{only:"computer",columns:4},{default:i(()=>[t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1})]),_:1}),t(_,{only:"tablet",columns:3},{default:i(()=>[t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Tablet")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Tablet")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Tablet")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Responsive Width",description:"A column can specify a width for a specific device",code:e.responsiveWidthCode},{default:i(()=>[t(g,null,{default:i(()=>[t(d,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(u,{src:Oe})]),_:1}),t(d,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(u,{src:Oe})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const PL=Me(EL,[["render",zL]]),VL="/vue-fomantic-ui/images/logo.png",FL=V({name:"MenuDoc",components:{DocPageHeader:At,DocExample:dt},setup(){return{menuCode:`<sui-menu>
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
</sui-menu>`}}}),ML=k("p",null,"Check out our new promotions",-1),HL=k("p",null,"Check out our collection of coupons",-1),NL=k("p",null,"Visit our rebate forum for information on claiming rebates",-1),OL=k("img",{src:VL},null,-1);function qL(e,l,a,o,s,c){const m=x("doc-page-header"),f=x("sui-header"),u=x("sui-menu-item"),d=x("sui-menu"),g=x("doc-example"),p=x("sui-input"),_=x("sui-menu-menu"),w=x("sui-label"),S=x("sui-button"),A=x("sui-dropdown-item"),T=x("sui-dropdown-menu"),I=x("sui-dropdown"),h=x("sui-icon"),b=x("sui-segment"),C=x("sui-container");return y(),ve("div",null,[t(m,{title:"Menu",sub:"A menu displays grouped navigation actions"}),t(C,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(g,{title:"Menu",description:"A menu",code:e.menuCode},{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Editorials")]),_:1}),t(u,null,{default:i(()=>[n("Reviews")]),_:1}),t(u,null,{default:i(()=>[n("Upcoming Events")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Secondary Menu",description:"A menu can adjust its appearance to de-emphasize its contents",code:e.secondaryMenuCode},{default:i(()=>[t(d,{secondary:""},{default:i(()=>[t(u,{active:""},{default:i(()=>[n("Home")]),_:1}),t(u,null,{default:i(()=>[n("Messages")]),_:1}),t(u,null,{default:i(()=>[n("Friends")]),_:1}),t(_,{position:"right"},{default:i(()=>[t(u,null,{default:i(()=>[t(p,{icon:"search",placeholder:"Search..."})]),_:1}),t(u,null,{default:i(()=>[n("logout")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Pointing",description:"A menu can point to show its relationship to nearby content",code:e.pointingCode},{default:i(()=>[t(d,{pointing:""},{default:i(()=>[t(u,{active:""},{default:i(()=>[n("Home")]),_:1}),t(u,null,{default:i(()=>[n("Messages")]),_:1}),t(u,null,{default:i(()=>[n("Friends")]),_:1}),t(_,{position:"right"},{default:i(()=>[t(u,null,{default:i(()=>[t(p,{transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Tabular",description:"A menu can be formatted to show tabs of information",code:e.tabularCode},{default:i(()=>[t(d,{tabular:""},{default:i(()=>[t(u,{active:""},{default:i(()=>[n("Bio")]),_:1}),t(u,null,{default:i(()=>[n("Photos")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Text",description:"A menu can be formatted for text content",code:e.textCode},{default:i(()=>[t(d,{text:""},{default:i(()=>[t(u,{header:""},{default:i(()=>[n("Sort By")]),_:1}),t(u,{active:""},{default:i(()=>[n("Closest")]),_:1}),t(u,null,{default:i(()=>[n("Most Comments")]),_:1}),t(u,null,{default:i(()=>[n("Most Popular")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Vertical Menu",description:"A vertical menu displays elements vertically",code:e.verticalMenuCode},{default:i(()=>[t(d,{vertical:""},{default:i(()=>[t(u,{active:"",color:"teal"},{default:i(()=>[n(" Inbox "),t(w,{color:"teal",pointing:"left"},{default:i(()=>[n("1")]),_:1})]),_:1}),t(u,null,{default:i(()=>[n(" Spam "),t(w,null,{default:i(()=>[n("51")]),_:1})]),_:1}),t(u,null,{default:i(()=>[n(" Updates "),t(w,null,{default:i(()=>[n("1")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(p,{transparent:"",icon:"search",placeholder:"Search mail..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Pagination",description:"A pagination menu is specially formatted to present links to pages of content",code:e.paginationCode},{default:i(()=>[t(d,{pagination:""},{default:i(()=>[t(u,{active:""},{default:i(()=>[n("1")]),_:1}),t(u,{disabled:""},{default:i(()=>[n("...")]),_:1}),t(u,null,{default:i(()=>[n("10")]),_:1}),t(u,null,{default:i(()=>[n("11")]),_:1}),t(u,null,{default:i(()=>[n("12")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(g,{title:"Header",description:"A menu item may include a header or may itself be a header",code:e.headerCode},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{header:""},{default:i(()=>[n("Our Company")]),_:1}),t(u,null,{default:i(()=>[n("About us")]),_:1}),t(u,null,{default:i(()=>[n("Jobs")]),_:1}),t(u,null,{default:i(()=>[n("Locations")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"textContentCode",description:"A vertical menu item can include any type of text content",code:e.textContentCode},{default:i(()=>[t(d,{vertical:""},{default:i(()=>[t(u,null,{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Promotions")]),_:1}),ML]),_:1}),t(u,null,{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Coupons")]),_:1}),HL]),_:1}),t(u,null,{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Rebates")]),_:1}),NL]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Input",description:"A menu item can contain an input inside of it",code:e.inputCode},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{as:"div"},{default:i(()=>[t(p,{icon:"search",placeholder:"Search..."})]),_:1}),t(u,{position:"right",as:"div"},{default:i(()=>[t(p,{placeholder:"Navigate to ..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Button",description:"A menu item can contain a button inside of it",code:e.buttonCode},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{as:"div"},{default:i(()=>[t(S,{color:"primary"},{default:i(()=>[n("Sign up")]),_:1})]),_:1}),t(u,{as:"div"},{default:i(()=>[t(S,null,{default:i(()=>[n("Log in")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Link Item",description:"A menu may contain a link item, or an item formatted as if it is a link",code:e.linkItemCode},{default:i(()=>[t(d,{vertical:""},{default:i(()=>[t(u,{href:"https://google.com"},{default:i(()=>[n("Visit Google")]),_:1}),t(u,{link:"",as:"div"},{default:i(()=>[n("Javascript Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Dropdown Item",description:"An item may contain a nested menu in a dropdown",code:e.dropdownItemCode},{default:i(()=>[t(d,{vertical:""},{default:i(()=>[t(I,{item:"",text:"Categories"},{default:i(()=>[t(T,null,{default:i(()=>[t(A,{text:"Electoronics"}),t(A,{text:"Automotive"}),t(A,{text:"Home"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Menu",description:"A menu may contain another menu group in the same level as menu items",code:e.menuContentCode},{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Browse")]),_:1}),t(u,null,{default:i(()=>[n("Submit")]),_:1}),t(_,{position:"right"},{default:i(()=>[t(u,null,{default:i(()=>[n("Sign up")]),_:1}),t(u,null,{default:i(()=>[n("Help")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Sub Menu",description:"A menu item may contain another menu nested inside that acts as a grouped sub-menu",code:e.subMenuCode},{default:i(()=>[t(d,{vertical:""},{default:i(()=>[t(u,{as:"div"},{default:i(()=>[t(p,{placeholder:"Search..."})]),_:1}),t(u,{as:"div"},{default:i(()=>[n(" Home "),t(_,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Search")]),_:1}),t(u,null,{default:i(()=>[n("Add")]),_:1}),t(u,null,{default:i(()=>[n("Remove")]),_:1})]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(h,{name:"grid layout"}),n(" Browse ")]),_:1}),t(u,null,{default:i(()=>[n("Messages")]),_:1}),t(I,{item:"",text:"More"},{default:i(()=>[t(T,null,{default:i(()=>[t(A,{icon:"edit",text:"Edit Profile"}),t(A,{icon:"globe",text:"Choose Language"}),t(A,{icon:"settings",text:"Account Settings"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(g,{title:"Hover",description:"A menu item can be hovered",code:e.hoverCode},{default:i(()=>[t(d,{compact:""},{default:i(()=>[t(u,null,{default:i(()=>[n("A link")]),_:1}),t(u,{as:"div",link:""},{default:i(()=>[n("div Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Active",description:"A menu item can be active",code:e.activeCode},{default:i(()=>[t(d,{compact:""},{default:i(()=>[t(u,{active:""},{default:i(()=>[n("Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(g,{title:"Stackable",description:"A menu can stack at mobile resolutions",code:e.stackableCode},{default:i(()=>[t(d,{stackable:""},{default:i(()=>[t(u,{as:"div"},{default:i(()=>[OL]),_:1}),t(u,null,{default:i(()=>[n("Features")]),_:1}),t(u,null,{default:i(()=>[n("Testimonials")]),_:1}),t(u,null,{default:i(()=>[n("Sign in")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Inverted",description:"A menu may have its colors inverted to show greater contrast",code:e.invertedCode},{default:i(()=>[t(d,{inverted:""},{default:i(()=>[t(u,{active:""},{default:i(()=>[n("Home")]),_:1}),t(u,null,{default:i(()=>[n("Messages")]),_:1}),t(u,null,{default:i(()=>[n("Friends")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored",description:"Additional colors can be specified",code:e.coloredCode},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{active:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u,{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u,{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u,{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u,{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u,{color:"teal"},{default:i(()=>[n("Teal")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Icons",description:"A menu may have just icons",code:e.iconsCode},{default:i(()=>[t(d,{icon:""},{default:i(()=>[t(u,null,{default:i(()=>[t(h,{name:"gamepad"})]),_:1}),t(u,null,{default:i(()=>[t(h,{name:"video camera"})]),_:1}),t(u,null,{default:i(()=>[t(h,{name:"video play"})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Labeled Icon",description:"A menu may have labeled icons",code:e.labeledIconCode},{default:i(()=>[t(d,{icon:"labeled"},{default:i(()=>[t(u,null,{default:i(()=>[t(h,{name:"gamepad"}),n(" Games ")]),_:1}),t(u,null,{default:i(()=>[t(h,{name:"video camera"}),n(" Channels ")]),_:1}),t(u,null,{default:i(()=>[t(h,{name:"video play"}),n(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Fluid",description:"A vertical menu may take the size of its container",code:e.fluidCode},{default:i(()=>[t(d,{fluid:"",vertical:""},{default:i(()=>[t(u,null,{default:i(()=>[n("Run")]),_:1}),t(u,null,{default:i(()=>[n("Walk")]),_:1}),t(u,null,{default:i(()=>[n("Bike")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Compact",description:"A menu can take up only the space necessary to fit its content",code:e.compactCode},{default:i(()=>[t(d,{compact:""},{default:i(()=>[t(u,null,{default:i(()=>[t(h,{name:"gamepad"}),n(" Games ")]),_:1}),t(u,null,{default:i(()=>[t(h,{name:"video camera"}),n(" Channels ")]),_:1}),t(u,null,{default:i(()=>[t(h,{name:"video play"}),n(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Evenly Divided",description:"A menu may divide its items evenly",code:e.evenlyDividedCode},{default:i(()=>[t(d,{fluid:"",widths:3},{default:i(()=>[t(u,null,{default:i(()=>[n("Buy")]),_:1}),t(u,null,{default:i(()=>[n("Sell")]),_:1}),t(u,null,{default:i(()=>[n("Rent")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Attached",description:"A menu may be attached to other content segments",code:e.attachedCode},{default:i(()=>[k("div",null,[t(d,{attached:"top",tabular:""},{default:i(()=>[t(u,{active:""},{default:i(()=>[n("tab1")]),_:1}),t(u,null,{default:i(()=>[n("tab2")]),_:1})]),_:1}),t(b,{attached:"bottom"},{default:i(()=>[n(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. ")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Size",description:"A menu can vary in size",code:e.sizeCode},{default:i(()=>[t(d,{size:"mini"},{default:i(()=>[t(u,{active:""},{default:i(()=>[n("Home")]),_:1}),t(u,null,{default:i(()=>[n("Messages")]),_:1}),t(_,{position:"right"},{default:i(()=>[t(I,{item:"",text:"Language"},{default:i(()=>[t(T,null,{default:i(()=>[t(A,null,{default:i(()=>[n("English")]),_:1}),t(A,null,{default:i(()=>[n("Russian")]),_:1}),t(A,null,{default:i(()=>[n("Spanish")]),_:1})]),_:1})]),_:1}),t(u,{as:"div"},{default:i(()=>[t(S,{color:"primary"},{default:i(()=>[n("Sign up")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Fitted",description:"A menu item or menu can remove element padding, vertically or horizontally",code:e.fittedCode},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{fitted:""},{default:i(()=>[n("No padding whatsoever")]),_:1}),t(u,{fitted:"horizontally"},{default:i(()=>[n("No horizontal padding")]),_:1}),t(u,{fitted:"vertically"},{default:i(()=>[n("No vertical padding")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Borderless",description:"A menu item or menu can have no borders",code:e.borderlessCode},{default:i(()=>[t(d,{borderless:""},{default:i(()=>[t(u,null,{default:i(()=>[n("1")]),_:1}),t(u,null,{default:i(()=>[n("2")]),_:1}),t(u,null,{default:i(()=>[n("3")]),_:1}),t(u,null,{default:i(()=>[n("4")]),_:1}),t(u,null,{default:i(()=>[n("5")]),_:1}),t(u,null,{default:i(()=>[n("6")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const GL=Me(FL,[["render",qL]]),jL=V({name:"TableDoc",components:{DocPageHeader:At,DocExample:dt},setup(){return{tableCode:`<sui-table celled>
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
</sui-table>`}}}),UL=k("a",{href:"#"},"Edit",-1),YL=k("a",{href:"#"},"Edit",-1),JL=k("a",{href:"#"},"Edit",-1),WL=k("br",null,null,-1),KL=k("br",null,null,-1),XL=k("br",null,null,-1),QL=k("br",null,null,-1),ZL=k("br",null,null,-1),eI=k("br",null,null,-1),tI=k("br",null,null,-1);function iI(e,l,a,o,s,c){const m=x("doc-page-header"),f=x("sui-header"),u=x("sui-table-header-cell"),d=x("sui-table-row"),g=x("sui-table-header"),p=x("sui-table-cell"),_=x("sui-table-body"),w=x("sui-table"),S=x("doc-example"),A=x("sui-icon"),T=x("sui-table-footer"),I=x("sui-container");return y(),ve("div",null,[t(m,{title:"Table",sub:"A table displays a collections of data grouped into rows"}),t(I,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(S,{title:"Table",description:"A standard table",code:e.tableCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Age")]),_:1}),t(u,null,{default:i(()=>[n("Job")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("James")]),_:1}),t(p,null,{default:i(()=>[n("24")]),_:1}),t(p,null,{default:i(()=>[n("Engineer")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("26")]),_:1}),t(p,null,{default:i(()=>[n("Engineer")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Elyse")]),_:1}),t(p,null,{default:i(()=>[n("24")]),_:1}),t(p,null,{default:i(()=>[n("Designer")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Definition",description:"A table may be formatted to emphasize a first column that defines a rows content",code:e.definitionCode},{default:i(()=>[t(w,{definition:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u),t(u,null,{default:i(()=>[n("Arguments")]),_:1}),t(u,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("reset rating")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1}),t(p,null,{default:i(()=>[n("Resets rating to default value")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("set rating")]),_:1}),t(p,null,{default:i(()=>[n("rating (integer)")]),_:1}),t(p,null,{default:i(()=>[n("Sets the current star rating to specified value")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Structured",description:"A table can be formatted to display complex structured data",code:e.structuredCode},{default:i(()=>[t(w,{structured:"",celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,{rowspan:"2"},{default:i(()=>[n("Name")]),_:1}),t(u,{rowspan:"2"},{default:i(()=>[n("Type")]),_:1}),t(u,{rowspan:"2"},{default:i(()=>[n("Files")]),_:1}),t(u,{colspan:"3"},{default:i(()=>[n("Languages")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Ruby")]),_:1}),t(u,null,{default:i(()=>[n("Javascript")]),_:1}),t(u,null,{default:i(()=>[n("Python")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Alpha Team")]),_:1}),t(p,null,{default:i(()=>[n("Project 1")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("2")]),_:1}),t(p,{textAlign:"center"},{default:i(()=>[t(A,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(p),t(p)]),_:1}),t(d,null,{default:i(()=>[t(p,{rowspan:"3"},{default:i(()=>[n("Beta Team")]),_:1}),t(p,null,{default:i(()=>[n("Project 1")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("52")]),_:1}),t(p,{textAlign:"center"},{default:i(()=>[t(A,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(p),t(p)]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Project 2")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("12")]),_:1}),t(p),t(p,{textAlign:"center"},{default:i(()=>[t(A,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(p)]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Project 3")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("21")]),_:1}),t(p,{textAlign:"center"},{default:i(()=>[t(A,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(p),t(p)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(S,{title:"Positive / Negative",description:"A cell or row may let a user know whether a value is good or bad",code:e.positiveNegativeCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,{negative:""},{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,{positive:""},{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[t(A,{name:"checkmark"}),n(" Approved ")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,{positive:""},{default:i(()=>[t(A,{name:"close"}),n(" Requires call ")]),_:1})]),_:1}),t(d,{negative:""},{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Error",description:"A cell or row may call attention to an error or a negative value",code:e.errorCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,{error:""},{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[n("Cannot pull data")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,{error:""},{default:i(()=>[t(A,{name:"attention"}),n(" Requires call ")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Warning",description:"A cell or row may warn a user",code:e.warningCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,{warning:""},{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[t(A,{name:"attention"}),n(" Requires Action ")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,{warning:""},{default:i(()=>[t(A,{name:"attention"}),n(" Hostile ")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Active",description:"A cell or row can be active or selected by a user",code:e.activeCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,{active:""},{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[n("Selected")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,{active:""},{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Disabled",description:"A cell can be disabled",code:e.disabledCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,{disabled:""},{default:i(()=>[t(p,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[n("Selected")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,{disabled:""},{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Colored Cells",description:"A cell can be styled by the central color palette colors",code:e.coloredCellsCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,{color:"orange"},{default:i(()=>[n("No Name Specified")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,{color:"blue"},{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[t(A,{name:"microphone"}),n(" Recording session ")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,{color:"pink"},{default:i(()=>[t(A,{name:"child"}),n(" Baby Party ")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,{color:"green"},{default:i(()=>[n("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Marked",description:"A cell or row can be marked by a colored left or right border",code:e.markedCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,{marked:"right",color:"blue"},{default:i(()=>[n("No Name Specified")]),_:1}),t(p,{marked:"left",color:"red"},{default:i(()=>[n("Unknown")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,{marked:"left",color:"green"},{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[t(A,{name:"microphone"}),n(" Recording session ")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,{marked:"left",color:"orange"},{default:i(()=>[t(A,{name:"child"}),n(" Baby Party ")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,{marked:"right",color:"purple"},{default:i(()=>[n("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(S,{title:"Single Line",description:"A table can specify that its cell contents should remain on a single line, and not wrap",code:e.singleLineCode},{default:i(()=>[t(w,{"single-line":""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Registration Date")]),_:1}),t(u,null,{default:i(()=>[n("E-mail address")]),_:1}),t(u,null,{default:i(()=>[n("Premium Plan")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John Lilki")]),_:1}),t(p,null,{default:i(()=>[n("September 14, 2013")]),_:1}),t(p,null,{default:i(()=>[n("jhlilk22@yahoo.com")]),_:1}),t(p,null,{default:i(()=>[n("No")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie Harington")]),_:1}),t(p,null,{default:i(()=>[n("January 11, 2014")]),_:1}),t(p,null,{default:i(()=>[n("jamieharingonton@yahoo.com")]),_:1}),t(p,null,{default:i(()=>[n("Yes")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill Lewis")]),_:1}),t(p,null,{default:i(()=>[n("May 11, 2014")]),_:1}),t(p,null,{default:i(()=>[n("jilsewris22@yahoo.com")]),_:1}),t(p,null,{default:i(()=>[n("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Fixed",description:"A table can use `table-layout: fixed` a special faster form of table rendering that does not resize table cells based on content",code:e.fixedCode},{default:i(()=>[t(w,{fixed:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Stacking",descirption:"A table can specify how it stacks table content responsively",code:e.stackingCode},{default:i(()=>[t(w,{stackable:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Selectable Row",description:"A table can have its rows appear selectable",code:e.selectableRowCode},{default:i(()=>[t(w,{selectable:"",celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,{positive:""},{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,{warning:""},{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,{negative:""},{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Selectable Cell",description:"A table cell can be selectable",code:e.selectableCellCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,{positive:""},{default:i(()=>[n("Approved")]),_:1}),t(p,{selectable:""},{default:i(()=>[UL]),_:1})]),_:1}),t(d,{warning:""},{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,{selectable:""},{default:i(()=>[YL]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,{negative:""},{default:i(()=>[n("Denied")]),_:1}),t(p,{selectable:""},{default:i(()=>[JL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Verical Alignment",description:"A table header, row, or cell can adjust its vertical alignment",code:e.verticalAlignmentCode},{default:i(()=>[t(w,{striped:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,{verticalAlign:"top"},{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,{verticalAlign:"top"},{default:i(()=>[n(" Notes "),WL,n(" 1"),KL,n(" 2"),XL]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,{verticalAlign:"bottom"},{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n(" Notes "),QL,n(" 1"),ZL,n(" 2"),eI]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Text Alignment",description:"A table header, row, or cell can adjust its text alignment",code:e.textAlignCode},{default:i(()=>[t(w,{striped:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,{textAlign:"right"},{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,{textAlign:"center"},{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Striped",description:"A table can stripe alternate rows of content with a darker color to increase contrast",code:e.stripedCode},{default:i(()=>[t(w,{striped:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Date Joined")]),_:1}),t(u,null,{default:i(()=>[n("E-mail")]),_:1}),t(u,null,{default:i(()=>[n("Called")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John Lilki")]),_:1}),t(p,null,{default:i(()=>[n("September 14, 2013")]),_:1}),t(p,null,{default:i(()=>[n("jhlilk22@yahoo.com")]),_:1}),t(p,null,{default:i(()=>[n("No")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie Harington")]),_:1}),t(p,null,{default:i(()=>[n("January 11, 2014")]),_:1}),t(p,null,{default:i(()=>[n("jamieharingonton@yahoo.com")]),_:1}),t(p,null,{default:i(()=>[n("Yes")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill Lewis")]),_:1}),t(p,null,{default:i(()=>[n("May 11, 2014")]),_:1}),t(p,null,{default:i(()=>[n("jilsewris22@yahoo.com")]),_:1}),t(p,null,{default:i(()=>[n("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Celled",description:"A table may be divided each row into separate cells",code:e.celledCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1}),t(T,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("3 People")]),_:1}),t(p,null,{default:i(()=>[n("2 Approved")]),_:1}),t(p)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Basic",description:"A table can reduce its complexity to increase readability",code:e.basicCode},{default:i(()=>[k("div",null,[t(w,{basic:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1}),tI,t(w,{basic:"very"},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(S,{title:"Collapsing",description:"A table can be collapsing, taking up only as much space as its rows",code:e.collapsingCode},{default:i(()=>[t(w,{collapsing:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Age")]),_:1}),t(u,null,{default:i(()=>[n("Gender")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("27")]),_:1}),t(p,null,{default:i(()=>[n("Male")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("32")]),_:1}),t(p,null,{default:i(()=>[n("Other")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("22")]),_:1}),t(p,null,{default:i(()=>[n("Other")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1}),t(T,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("3 People")]),_:1}),t(u,null,{default:i(()=>[n("2 Approved")]),_:1}),t(u),t(u),t(u)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Collapsing Cell",description:"A cell can be collapsing so that it only uses as much space as required",code:e.collapsingCellCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,{collapsing:""},{default:i(()=>[t(A,{name:"folder"}),n(" node_modules ")]),_:1}),t(p,null,{default:i(()=>[n("Initial commit")]),_:1}),t(p,null,{default:i(()=>[n("10 hours ago")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,{collapsing:""},{default:i(()=>[t(A,{name:"folder"}),n(" node_modules ")]),_:1}),t(p,null,{default:i(()=>[n("Initial commit")]),_:1}),t(p,null,{default:i(()=>[n("10 hours ago")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,{collapsing:""},{default:i(()=>[t(A,{name:"folder"}),n(" node_modules ")]),_:1}),t(p,null,{default:i(()=>[n("Initial commit")]),_:1}),t(p,null,{default:i(()=>[n("10 hours ago")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Column Count",description:"A table can specify its column count to divide its content evenly",code:e.columnCountCode},{default:i(()=>[t(w,{columns:5},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Age")]),_:1}),t(u,null,{default:i(()=>[n("Gender")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("27")]),_:1}),t(p,null,{default:i(()=>[n("Male")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("32")]),_:1}),t(p,null,{default:i(()=>[n("Other")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("22")]),_:1}),t(p,null,{default:i(()=>[n("Other")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1}),t(T,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("3 People")]),_:1}),t(u,null,{default:i(()=>[n("2 Approved")]),_:1}),t(u),t(u),t(u)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Column Width",description:"Column Width",code:e.columnWidthCode},{default:i(()=>[t(w,null,{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,{width:10},{default:i(()=>[n("Name")]),_:1}),t(u,{width:6},{default:i(()=>[n("Status")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Colored",description:"A table can be given a color to distinguish it from other tables",code:e.coloredCode},{default:i(()=>[t(w,{color:"red"},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Food")]),_:1}),t(u,null,{default:i(()=>[n("Calories")]),_:1}),t(u,null,{default:i(()=>[n("Protein")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Apples")]),_:1}),t(p,null,{default:i(()=>[n("200")]),_:1}),t(p,null,{default:i(()=>[n("0g")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Orange")]),_:1}),t(p,null,{default:i(()=>[n("310")]),_:1}),t(p,null,{default:i(()=>[n("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Inverted",description:"A table's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(w,{inverted:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Food")]),_:1}),t(u,null,{default:i(()=>[n("Calories")]),_:1}),t(u,null,{default:i(()=>[n("Protein")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Apples")]),_:1}),t(p,null,{default:i(()=>[n("200")]),_:1}),t(p,null,{default:i(()=>[n("0g")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Orange")]),_:1}),t(p,null,{default:i(()=>[n("310")]),_:1}),t(p,null,{default:i(()=>[n("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Padded",description:"A table may sometimes need to be more padded for legibility",code:e.paddedCode},{default:i(()=>[k("div",null,[t(w,{padded:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1}),t(w,{padded:"very"},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(S,{title:"Compact",description:"A table may sometimes need to be more compact to make more rows visible at a time",code:e.compactCode},{default:i(()=>[k("div",null,[t(w,{compact:""},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1})]),_:1})]),_:1}),t(w,{compact:"very"},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(S,{title:"Size",description:"A table can also be small or large",code:e.sizeCode},{default:i(()=>[t(w,{size:"small"},{default:i(()=>[t(g,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Name")]),_:1}),t(u,null,{default:i(()=>[n("Status")]),_:1}),t(u,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const lI=Me(jL,[["render",iI]]),aI=V({name:"AccordionDoc",components:{DocPageHeader:At,DocExample:dt},setup(){return{accordionCode:`<sui-accordion>
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
</sui-segment>`}}}),nI=k("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),oI=k("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),sI=k("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),rI=k("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),uI=k("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),cI=k("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),dI=k("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),mI=k("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),pI=k("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),fI=k("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),gI=k("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),hI=k("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),_I=k("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),bI=k("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),vI=k("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),SI=k("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),yI=k("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),wI=k("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),CI=k("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),AI=k("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1);function xI(e,l,a,o,s,c){const m=x("doc-page-header"),f=x("sui-header"),u=x("sui-accordion-tab"),d=x("sui-accordion"),g=x("doc-example"),p=x("sui-segment"),_=x("sui-container");return y(),ve("div",null,[t(m,{title:"Accordion",sub:"An accordion allows users to toggle the display of sections of content"}),t(_,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(g,{title:"Accordion",description:"A standard accordion",code:e.accordionCode},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{title:"What is a dog?"},{default:i(()=>[nI]),_:1}),t(u,{title:"What kinds of dogs are there?"},{default:i(()=>[oI]),_:1}),t(u,{title:"How do you acquire a dog?"},{default:i(()=>[sI,rI]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Styled",description:"A styled accordion adds basic formatting",code:e.styledCode},{default:i(()=>[t(d,{styled:""},{default:i(()=>[t(u,{title:"What is a dog?"},{default:i(()=>[uI]),_:1}),t(u,{title:"What kinds of dogs are there?"},{default:i(()=>[cI]),_:1}),t(u,{title:"How do you acquire a dog?"},{default:i(()=>[dI,mI]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(g,{title:"Fluid",description:"An accordion can take up the width of its container",code:e.fluidCode},{default:i(()=>[t(d,{fluid:"",styled:""},{default:i(()=>[t(u,{title:"What is a dog?"},{default:i(()=>[pI]),_:1}),t(u,{title:"What kinds of dogs are there?"},{default:i(()=>[fI]),_:1}),t(u,{title:"How do you acquire a dog?"},{default:i(()=>[gI,hI]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Inverted",description:"An accordion can be formatted to appear on dark backgrounds",code:e.invertedCode},{default:i(()=>[t(p,{inverted:""},{default:i(()=>[t(d,{inverted:""},{default:i(()=>[t(u,{title:"What is a dog?"},{default:i(()=>[_I]),_:1}),t(u,{title:"What kinds of dogs are there?"},{default:i(()=>[bI]),_:1}),t(u,{title:"How do you acquire a dog?"},{default:i(()=>[vI,SI]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Usage")]),_:1}),t(g,{title:"Multiple",description:"An accordion can have multiple panels open at the same time",code:e.multipleCode},{default:i(()=>[t(d,{multiple:""},{default:i(()=>[t(u,{title:"What is a dog?"},{default:i(()=>[yI]),_:1}),t(u,{title:"What kinds of dogs are there?"},{default:i(()=>[wI]),_:1}),t(u,{title:"How do you acquire a dog?"},{default:i(()=>[CI,AI]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const kI=Me(aI,[["render",xI]]),BI=V({name:"CalendarDoc",components:{DocPageHeader:At,DocExample:dt},setup(){return{calendar1:G(null),calendarCode:'<sui-calendar v-model="calendar1" placeholder="Date/Time" />'}}});function $I(e,l,a,o,s,c){const m=x("doc-page-header"),f=x("sui-header"),u=x("sui-calendar"),d=x("doc-example"),g=x("sui-container");return y(),ve("div",null,[t(m,{title:"Calendar",sub:"A calendar allows users to select any date or time"}),t(g,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(d,{title:"Calendar",description:"A standard calendar",code:e.calendarCode},{default:i(()=>[t(u,{modelValue:e.calendar1,"onUpdate:modelValue":l[0]||(l[0]=p=>e.calendar1=p),placeholder:"Date/Time"},null,8,["modelValue"])]),_:1},8,["code"])]),_:1})])}const TI=Me(BI,[["render",$I]]),LI=V({name:"PropertyListTable",props:{properties:Array}});function II(e,l,a,o,s,c){const m=x("sui-table-header-cell"),f=x("sui-table-row"),u=x("sui-table-header"),d=x("sui-table-cell"),g=x("sui-table-body"),p=x("sui-table");return y(),B(p,{celled:""},{default:i(()=>[t(u,null,{default:i(()=>[t(f,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Name")]),_:1}),t(m,null,{default:i(()=>[n("Type")]),_:1}),t(m,null,{default:i(()=>[n("Default")]),_:1}),t(m,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[(y(!0),ve(Ce,null,Qe(e.properties,_=>(y(),B(f,{key:_.name},{default:i(()=>[t(d,null,{default:i(()=>[n($e(_.name),1)]),_:2},1024),t(d,null,{default:i(()=>[n($e(_.type),1)]),_:2},1024),t(d,null,{default:i(()=>[n($e(_.default),1)]),_:2},1024),t(d,null,{default:i(()=>[n($e(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const xn=Me(LI,[["render",II]]),DI=V({name:"CheckboxDoc",components:{DocPageHeader:At,DocExample:dt,PropertyListTable:xn},setup(){const e=G(!1),l='<sui-checkbox label="Make my profile visible" v-model="checked" />',a=G([]),o=`<sui-checkbox label="Apple" value="Apple" v-model="selected"  />
<sui-checkbox label="Banana" value="Banana" v-model="selected"  />
<sui-checkbox label="Chocolate" value="Chocolate" v-model="selected"  />`,s=G(!1),c='<sui-checkbox toggle v-model="toggle" />',m=G(!1);return{checked:e,checkboxCode:l,selected:a,multipleCode:o,toggle:s,toggleCode:c,slider:m,sliderCode:'<sui-checkbox slider v-model="slider" />',properties:[{name:"label",type:"string",default:"null",description:"Label of the checkbox."},{name:"modelValue",type:"any",default:"null",description:"Value binding of the checkbox."},{name:"value",type:"any",default:"null",description:"Value of the checkbox."}],events:[{name:"change",description:"Callback to invoke when checkbox value is changed."},{name:"click",description:"Callback to invoke when checkbox is clicked."}]}}}),EI={class:"ui form"},RI={class:"grouped fields"},zI={class:"field"},PI={class:"field"},VI={class:"field"};function FI(e,l,a,o,s,c){const m=x("doc-page-header"),f=x("sui-header"),u=x("sui-checkbox"),d=x("doc-example"),g=x("property-list-table"),p=x("sui-table-header-cell"),_=x("sui-table-row"),w=x("sui-table-header"),S=x("sui-table-cell"),A=x("sui-table-body"),T=x("sui-table"),I=x("sui-container");return y(),ve("div",null,[t(m,{title:"Checkbox",sub:"A checkbox allows a user to select a value from a small set of options, often binary"}),t(I,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(d,{title:"Checkbox",description:"A standard checkbox",code:e.checkboxCode},{default:i(()=>[t(u,{label:"Make my profile visible",modelValue:e.checked,"onUpdate:modelValue":l[0]||(l[0]=h=>e.checked=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(d,{title:"Multiple",description:"Multiple mode is enabled by default, v-model property refers to an array to bind the selected values",code:e.multipleCode},{default:i(()=>[k("div",EI,[k("div",RI,[k("div",zI,[t(u,{label:"Apple",value:"Apple",modelValue:e.selected,"onUpdate:modelValue":l[1]||(l[1]=h=>e.selected=h)},null,8,["modelValue"])]),k("div",PI,[t(u,{label:"Banana",value:"Banana",modelValue:e.selected,"onUpdate:modelValue":l[2]||(l[2]=h=>e.selected=h)},null,8,["modelValue"])]),k("div",VI,[t(u,{label:"Chocolate",value:"Chocolate",modelValue:e.selected,"onUpdate:modelValue":l[3]||(l[3]=h=>e.selected=h)},null,8,["modelValue"])])])]),n(" selected : "+$e(e.selected),1)]),_:1},8,["code"]),t(d,{title:"Toggle",description:"A checkbox can toggle",code:e.toggleCode},{default:i(()=>[t(u,{toggle:"",modelValue:e.toggle,"onUpdate:modelValue":l[4]||(l[4]=h=>e.toggle=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(d,{title:"Slider",description:"A checkbox can look like a slider",code:e.sliderCode},{default:i(()=>[t(u,{slider:"",modelValue:e.slider,"onUpdate:modelValue":l[5]||(l[5]=h=>e.slider=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(g,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(T,{celled:""},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Name")]),_:1}),t(p,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[(y(!0),ve(Ce,null,Qe(e.events,h=>(y(),B(_,{key:h.name},{default:i(()=>[t(S,null,{default:i(()=>[n($e(h.name),1)]),_:2},1024),t(S,null,{default:i(()=>[n($e(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const MI=Me(DI,[["render",FI]]),HI=V({name:"DimmerDoc",components:{DocPageHeader:At,DocExample:dt},setup(){const e=`<sui-dimmer-dimmable>
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
</sui-dimmer-dimmable>`,a=G(!1);return{dimmerCode:e,contentDimmerCode:l,active:a,pageDimmerCode:`<div>
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
</div>`}}});function NI(e,l,a,o,s,c){const m=x("doc-page-header"),f=x("sui-header"),u=x("sui-image"),d=x("sui-image-group"),g=x("sui-dimmer"),p=x("sui-dimmer-dimmable"),_=x("doc-example"),w=x("sui-icon"),S=x("sui-button"),A=x("sui-header-subheader"),T=x("sui-container");return y(),ve("div",null,[t(m,{title:"Dimmer",sub:"A dimmer hides distractions to focus attention on particular content"}),t(T,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(_,{title:"Dimmer",description:"A simple dimmer displays no content",code:e.dimmerCode},{default:i(()=>[t(p,null,{default:i(()=>[t(f,{as:"h3"},{default:i(()=>[n("Overlayable Section")]),_:1}),t(d,{size:"small"},{default:i(()=>[t(u,{src:Te}),t(u,{src:Te}),t(u,{src:Te})]),_:1}),t(u,{size:"medium",src:Zt}),t(g,{active:""})]),_:1})]),_:1},8,["code"]),t(_,{title:"Content Dimmer",description:"A dimmer can display content",code:e.contentDimmerCode},{default:i(()=>[t(p,null,{default:i(()=>[t(f,{as:"h3"},{default:i(()=>[n("Overlayable Section")]),_:1}),t(d,{size:"small"},{default:i(()=>[t(u,{src:Te}),t(u,{src:Te}),t(u,{src:Te})]),_:1}),t(u,{size:"medium",src:Zt}),t(g,{active:""},{default:i(()=>[t(f,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(w,{name:"heart"}),n(" Dimmed Message! ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Page Dimmer",description:"A dimmer can be formatted to be fixed to the page",code:e.pageDimmerCode},{default:i(()=>[k("div",null,[t(S,{labeled:"",icon:"",onClick:l[0]||(l[0]=I=>e.active=!0)},{default:i(()=>[t(w,{name:"plus"}),n(" Show ")]),_:1}),t(g,{active:e.active,page:"",onClick:l[1]||(l[1]=I=>e.active=!1)},{default:i(()=>[t(f,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(w,{name:"heart"}),n(" Dimmed Message! "),t(A,null,{default:i(()=>[n("Dimmer sub-header")]),_:1})]),_:1})]),_:1},8,["active"])])]),_:1},8,["code"])]),_:1})])}const OI=Me(HI,[["render",NI]]),qI=V({name:"DropdownDoc",components:{DocPageHeader:At,DocExample:dt},setup(){const e=`<sui-dropdown text="File">
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
</sui-dropdown>`,l=G(null),a=`<sui-dropdown
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
/>`,m=G(null),f=["Arabic","Chinese","Danish","Dutch","English","French","German","Greek","Hungarian","Italian","Japanese","Korean","Lithuanian","Persian","Polish","Portuguese","Russian","Spanish","Swedish","Turkish","Vietnamese"],u=`<sui-dropdown
  clearable
  selection
  v-model="selected3"
  :options="clearableSelectionOptions"
  placeholder="Select Language"
/>`,d=G(null),g=`<sui-dropdown
  selection
  multiple
  fluid
  v-model="selected4"
  placeholder="Skills"
  :options="['Angular', 'CSS', 'Ember', 'HTML', 'Javascript', 'NodeJS']"
/>`,p=G(null),_=`<sui-dropdown
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
/>`,I=G({text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}});return{dropdownCode:e,selected1:l,selectionCode:a,selected2:o,searchSelectionOptions:s,searchSelectionCode:c,selected3:m,clearableSelectionOptions:f,clearableSelectionCode:u,selected4:d,multipleCode:g,selected5:p,multipleCode2:_,selected6:w,searchDropdownCode:S,selected7:A,searchInMenuCode:T,selected8:I,inlineCode:`<span>
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
</sui-button-group>`}}});function GI(e,l,a,o,s,c){const m=x("doc-page-header"),f=x("sui-header"),u=x("sui-dropdown-item"),d=x("sui-divider"),g=x("sui-dropdown-menu"),p=x("sui-dropdown"),_=x("doc-example"),w=x("sui-button"),S=x("sui-button-group"),A=x("sui-container");return y(),ve("div",null,[t(m,{title:"Dropdown",sub:"A dropdown allows a user to select a value from a series of options"}),t(A,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(_,{title:"Dropdown",description:"A dropdown",code:e.dropdownCode},{default:i(()=>[t(p,{text:"File"},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{text:"New"}),t(u,{text:"Open...",description:"ctrl + o"}),t(u,{text:"Save as...",description:"ctrl + s"}),t(u,{text:"Rename",description:"ctrl + r"}),t(u,{text:"Make a copy"}),t(u,{icon:"folder",text:"Move to folder"}),t(u,{icon:"trash",text:"Move to trash"}),t(d),t(u,{text:"Download As..."}),t(u,{text:"Publish To Web"}),t(u,{text:"E-mail Collaborators"})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Selection",description:"A dropdown can be used to select between choices in a form",code:e.selectionCode},{default:i(()=>[t(p,{selection:"",placeholder:"Pet",modelValue:e.selected1,"onUpdate:modelValue":l[0]||(l[0]=T=>e.selected1=T),options:["Cat","Dog","Bird","Rabbit","Squirrel","Horse"]},null,8,["modelValue"])]),_:1},8,["code"]),t(_,{title:"Search Selection",description:"A selection dropdown can allow a user to search through a large list of choices",code:e.searchSelectionCode},{default:i(()=>[t(p,{search:"",selection:"",fluid:"",modelValue:e.selected2,"onUpdate:modelValue":l[1]||(l[1]=T=>e.selected2=T),options:e.searchSelectionOptions,placeholder:"Select Country"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(_,{title:"Clearable Selection",description:"A clearable selection dropdown can allow a user to cancel to cancel a previous selection",code:e.clearableSelectionCode},{default:i(()=>[t(p,{clearable:"",selection:"",modelValue:e.selected3,"onUpdate:modelValue":l[2]||(l[2]=T=>e.selected3=T),options:e.clearableSelectionOptions,placeholder:"Select Language"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(_,{title:"Multiple Selection",description:"A selection dropdown can allow multiple selections",code:e.multipleCode},{default:i(()=>[t(p,{selection:"",multiple:"",fluid:"",modelValue:e.selected4,"onUpdate:modelValue":l[3]||(l[3]=T=>e.selected4=T),placeholder:"Skills",options:["Angular","CSS","Ember","HTML","Javascript","NodeJS"]},null,8,["modelValue"])]),_:1},8,["code"]),t(_,{code:e.multipleCode2},{default:i(()=>[t(p,{selection:"",multiple:"",fluid:"",search:"",modelValue:e.selected5,"onUpdate:modelValue":l[4]||(l[4]=T=>e.selected5=T),placeholder:"Skills",options:[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"}]},null,8,["modelValue"])]),_:1},8,["code"]),t(_,{title:"Search Dropdown",description:"A dropdown can be searchable",code:e.searchDropdownCode},{default:i(()=>[t(p,{button:"",floating:"",labeled:"",search:"",icon:"world",modelValue:e.selected6,"onUpdate:modelValue":l[5]||(l[5]=T=>e.selected6=T),options:[{text:"Arabic",value:"Arabic"},{text:"Chinese",value:"Chinese"},{text:"Danish",value:"Danish"},{text:"Dutch",value:"Dutch"},{text:"English",value:"English"},{text:"French",value:"French"},{text:"German",value:"German"},{text:"Greek",value:"Greek"},{text:"Hungarian",value:"Hungarian"},{text:"Italian",value:"Italian"},{text:"Japanese",value:"Japanese"},{text:"Korean",value:"Korean"},{text:"Lithuanian",value:"Lithuanian"},{text:"Persian",value:"Persian"},{text:"Polish",value:"Polish"},{text:"Portuguese",value:"Portuguese"},{text:"Russian",value:"Russian"},{text:"Spanish",value:"Spanish"},{text:"Swedish",value:"Swedish"},{text:"Turkish",value:"Turkish"},{text:"Vietnamese",value:"Vietnamese"}],text:"Select Language"},null,8,["modelValue"])]),_:1},8,["code"]),t(_,{title:"Search In-Menu",description:"A dropdown can include a search prompt inside its menu",code:e.searchInMenuCode},{default:i(()=>[t(p,{text:"Filter Posts",icon:"filter",floating:"",labeled:"",button:"",searchInMenu:"",modelValue:e.selected7,"onUpdate:modelValue":l[6]||(l[6]=T=>e.selected7=T),options:[{text:"Important",value:"Important",label:{color:"red",empty:!0,circular:!0}},{text:"Announcement",value:"Announcement",label:{color:"blue",empty:!0,circular:!0}},{text:"Cannot Fix",value:"Cannot Fix",label:{color:"black",empty:!0,circular:!0}},{text:"News",value:"News",label:{color:"purple",empty:!0,circular:!0}},{text:"Enhancement",value:"Enhancement",label:{color:"orange",empty:!0,circular:!0}},{text:"Change Declined",value:"Change Declined",label:{empty:!0,circular:!0}},{text:"Off Topic",value:"Off Topic",label:{color:"yellow",empty:!0,circular:!0}},{text:"Interesting",value:"Interesting",label:{color:"pink",empty:!0,circular:!0}},{text:"Discussion",value:"Discussion",label:{color:"green",empty:!0,circular:!0}}]},null,8,["modelValue"])]),_:1},8,["code"]),t(_,{title:"Inline",description:"A dropdown can be formatted to appear inline in other content",code:e.inlineCode},{default:i(()=>[k("span",null,[n(" Show me posts by "),t(p,{inline:"",modelValue:e.selected8,"onUpdate:modelValue":l[7]||(l[7]=T=>e.selected8=T),options:[{text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}},{text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/images/avatar/small/elliot.jpg"}},{text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/images/avatar/small/stevie.jpg"}},{text:"Christian",value:"Christian",image:{avatar:!0,src:"/images/avatar/small/christian.jpg"}}]},null,8,["modelValue","options"])])]),_:1},8,["code"]),t(_,{title:"Pointing",description:"A dropdown can be formatted so that its menu is pointing",code:e.pointingCode},{default:i(()=>[t(p,{icon:"wrench",button:"",pointing:"top left"},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{text:"New"}),t(u,{text:"Save As"}),t(u,{text:"Edit"})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Floating",description:"A dropdown menu can appear to be floating below an element",code:e.floatingCode},{default:i(()=>[t(S,{color:"teal"},{default:i(()=>[t(w,null,{default:i(()=>[n("Save")]),_:1}),t(p,{floating:"",button:"",icon:"dropdown"},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{text:"Edit Post",icon:"edit"}),t(u,{text:"Remove Post",icon:"delete"}),t(u,{text:"Hide Post",icon:"hide"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const jI=Me(qI,[["render",GI]]),UI=V({name:"EmbedDoc",components:{DocPageHeader:At,DocExample:dt},setup(){return{youtubeCode:`<sui-embed
  id="O6Xo21L0ybE"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`,aspectRatioCode:`<sui-embed
  aspectRatio="4:3"
  id="HTZudKi36bo"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`}}});function YI(e,l,a,o,s,c){const m=x("doc-page-header"),f=x("sui-header"),u=x("sui-embed"),d=x("doc-example"),g=x("sui-container");return y(),ve("div",null,[t(m,{title:"Embed",sub:"An embed displays content from other websites like YouTube videos or Google Maps"}),t(g,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(d,{title:"YouTube",description:"An embed can be used to display YouTube Content",code:e.youtubeCode},{default:i(()=>[t(u,{id:"O6Xo21L0ybE",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(d,{title:"Aspect Ratio",description:"An embed can specify an alternative aspect ratio",code:e.aspectRatioCode},{default:i(()=>[t(u,{aspectRatio:"4:3",id:"HTZudKi36bo",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"])]),_:1})])}const JI=Me(UI,[["render",YI]]),WI=k("p",null," We've found the following gravatar image associated with your e-mail address. ",-1),KI=k("p",null,"Is it okay to use this photo?",-1),XI=`<template>
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
<\/script>`,QI={__name:"ModalDoc",setup(e){const l=G(!1);return(a,o)=>(y(),B(D,{label:"Modal",code:XI},{description:i(()=>[n(" A standard modal ")]),example:i(()=>[t(r(z),{onClick:o[0]||(o[0]=s=>l.value=!0)},{default:i(()=>[n("Show Modal")]),_:1}),t(r(hs),{modelValue:l.value,"onUpdate:modelValue":o[2]||(o[2]=s=>l.value=s)},{default:i(()=>[t(r(vs),null,{default:i(()=>[n("Select a Photo")]),_:1}),t(r(bs),{image:""},{default:i(()=>[t(r(oe),{wrapped:"",size:"medium",src:"/vue-fomantic-ui/images/avatar/large/rachel.png"}),t(r(pd),null,{default:i(()=>[t(r(pe),null,{default:i(()=>[n("Default Profile Image")]),_:1}),WI,KI]),_:1})]),_:1}),t(r(_s),null,{default:i(()=>[t(r(z),{positive:"",onClick:o[1]||(o[1]=s=>l.value=!1)},{default:i(()=>[n("OK")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},ZI=k("p",null," Your inbox is getting full, would you like us to enable automatic archiving of old messages? ",-1),eD=`<template>
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
<\/script>`,tD={__name:"BasicDoc",setup(e){const l=G(!1);return(a,o)=>(y(),B(D,{label:"Basic",code:eD},{description:i(()=>[n(" A modal can reduce its complexity ")]),example:i(()=>[t(r(z),{onClick:o[0]||(o[0]=s=>l.value=!0)},{default:i(()=>[n("Basic Modal")]),_:1}),t(r(hs),{basic:"",modelValue:l.value,"onUpdate:modelValue":o[2]||(o[2]=s=>l.value=s)},{default:i(()=>[t(r(vs),{icon:""},{default:i(()=>[t(r(Y),{name:"archive"}),n(" Archive Old Messages")]),_:1}),t(r(bs),null,{default:i(()=>[ZI]),_:1}),t(r(_s),null,{default:i(()=>[t(r(z),{basic:"",color:"red",inverted:"",icon:"remove",content:"No",onClick:o[1]||(o[1]=s=>l.value=!1)}),t(r(z),{basic:"",color:"green",icon:"checkmark",content:"Yes"})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},iD={__name:"Modal",setup(e){const l=[{id:"modal",label:"Modal",category:"Types",component:QI},{id:"basic",label:"Basic",category:"Types",component:tD}];return(a,o)=>(y(),B(ot,{title:"Modal",description:"A modal displays content that temporarily blocks interactions with the main view of a site","component-docs":l}))}},lD="/vue-fomantic-ui/images/movies/totoro-horizontal.jpg",aD=V({name:"PopupDoc",components:{DocPageHeader:At,DocExample:dt},setup(){const e=G(null),l=`<sui-button icon ref="trigger">
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
</sui-popup>`,u=G(null),d=`<sui-button icon ref="basicTrigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup
  :trigger="basicTrigger"
  basic
  content="The default theme's basic popup removes the pointing arrow."
/>`,g=G(null),p=G(null),_=G(null),w=`<sui-icon name="heart" circular ref="wideTrigger1" />
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
<sui-popup :trigger="positionTrigger8" position="left center" content="I am positioned to the left center" />`,F=G(null),H=`<sui-button ref="flowingTrigger">Show Flowing Popup</sui-button>
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
</sui-popup>`,P=G(null),j=G(null),Q=G(null),J=G(null),fe=G(null),Be=`<sui-icon name="heart" circular link ref="sizeTrigger1" />
<sui-icon name="heart" circular link ref="sizeTrigger2" />
<sui-icon name="heart" circular link ref="sizeTrigger3" />
<sui-icon name="heart" circular link ref="sizeTrigger4" />
<sui-icon name="heart" circular link ref="sizeTrigger5" />

<sui-popup size="mini" content="Hello. This is a mini popup" :trigger="sizeTrigger1" />
<sui-popup size="tiny" content="Hello. This is a tiny popup" :trigger="sizeTrigger2" />
<sui-popup size="small" content="Hello. This is a small popup" :trigger="sizeTrigger3" />
<sui-popup size="large" content="Hello. This is a large popup" :trigger="sizeTrigger4" />
<sui-popup size="huge" content="Hello. This is a huge popup" :trigger="sizeTrigger5" />`,U=G(null),K=G(null);return{popupTrigger:e,popupCode:l,titledTrigger1:a,titledTrigger2:o,titledTrigger3:s,titledCode:c,triggerTriger:m,triggerCode:f,basicTrigger:u,basicCode:d,wideTrigger1:g,wideTrigger2:p,wideTrigger3:_,wideCode:w,positionTrigger1:S,positionTrigger2:A,positionTrigger3:T,positionTrigger4:I,positionTrigger5:h,positionTrigger6:b,positionTrigger7:C,positionTrigger8:$,positionCode:E,flowingTrigger:F,flowingCode:H,sizeTrigger1:P,sizeTrigger2:j,sizeTrigger3:Q,sizeTrigger4:J,sizeTrigger5:fe,sizeCode:Be,invertedTrigger1:U,invertedTrigger2:K,invertedCode:`<sui-icon name="heart" circular ref="invertedTrigger1" />
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
/>`}}}),nD=k("p",null,[k("b",null,"2"),n(" projects, $10 a month ")],-1),oD=k("p",null,[k("b",null,"5"),n(" projects, $20 a month ")],-1),sD=k("p",null,[k("b",null,"8"),n(" projects, $25 a month ")],-1);function rD(e,l,a,o,s,c){const m=x("doc-page-header"),f=x("sui-header"),u=x("sui-icon"),d=x("sui-button"),g=x("sui-popup"),p=x("doc-example"),_=x("sui-image"),w=x("sui-card-header"),S=x("sui-card-description"),A=x("sui-card-content"),T=x("sui-card"),I=x("sui-rating"),h=x("sui-divider"),b=x("sui-grid-column"),C=x("sui-grid"),$=x("sui-container");return y(),ve("div",null,[t(m,{title:"Popup",sub:"A popup displays additional information on top of a page"}),t($,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(p,{title:"Popup",description:"An element can specify popup content to appear",code:e.popupCode},{default:i(()=>[t(d,{icon:"",ref:"popupTrigger"},{default:i(()=>[t(u,{name:"add"})]),_:1},512),t(g,{trigger:e.popupTrigger},{default:i(()=>[n(" Add users to your feed ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(p,{title:"Titled",description:"An element can specify popup content with a title",code:e.titledCode},{default:i(()=>[t(_,{avatar:"",src:da,ref:"titledTrigger1"},null,512),t(_,{avatar:"",src:Lo,ref:"titledTrigger2"},null,512),t(_,{avatar:"",src:Rd,ref:"titledTrigger3"},null,512),t(g,{trigger:e.titledTrigger1,header:"Elliot Fu",content:"Elliot has been a member since July 2012"},null,8,["trigger"]),t(g,{trigger:e.titledTrigger2,header:"Stevie Feliciano",content:"Stevie has been a member since August 2013"},null,8,["trigger"]),t(g,{trigger:e.titledTrigger3,header:"Matt",content:"Matt has been a member since July 2014"},null,8,["trigger"])]),_:1},8,["code"]),t(p,{title:"Trigger",description:"A trigger can be complex element",code:e.triggerCode},{default:i(()=>[t(T,{ref:"triggerTriger"},{default:i(()=>[t(_,{src:lD}),t(A,null,{default:i(()=>[t(w,null,{default:i(()=>[n("My Neighbor Totoro")]),_:1}),t(S,null,{default:i(()=>[n(" Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits. ")]),_:1})]),_:1})]),_:1},512),t(g,{trigger:e.triggerTriger,header:"User Rating"},{default:i(()=>[t(I,{icon:"star",defaultRating:3,maxRating:4})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(p,{title:"Basic",description:"A popup can provide more basic formatting",code:e.basicCode},{default:i(()=>[t(d,{icon:"",ref:"basicTrigger"},{default:i(()=>[t(u,{name:"add"})]),_:1},512),t(g,{trigger:e.basicTrigger,basic:"",content:"The default theme's basic popup removes the pointing arrow."},null,8,["trigger"])]),_:1},8,["code"]),t(p,{title:"Position",description:"A popup can be position around its trigger",code:e.positionCode},{default:i(()=>[t(d,{ref:"positionTrigger1"},{default:i(()=>[n("Top Left")]),_:1},512),t(d,{ref:"positionTrigger2"},{default:i(()=>[n("Top Center")]),_:1},512),t(d,{ref:"positionTrigger3"},{default:i(()=>[n("Top Right")]),_:1},512),t(h),t(d,{ref:"positionTrigger4"},{default:i(()=>[n("Bottom Left")]),_:1},512),t(d,{ref:"positionTrigger5"},{default:i(()=>[n("Bottom Center")]),_:1},512),t(d,{ref:"positionTrigger6"},{default:i(()=>[n("Bottom Right")]),_:1},512),t(h),t(d,{ref:"positionTrigger7"},{default:i(()=>[n("Right Center")]),_:1},512),t(d,{ref:"positionTrigger8"},{default:i(()=>[n("Left Center")]),_:1},512),t(g,{trigger:e.positionTrigger1,position:"top left",content:"I am positioned to the top left"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger2,position:"top center",content:"I am positioned to the top center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger3,position:"top right",content:"I am positioned to the top right"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger4,position:"bottom left",content:"I am positioned to the bottom left"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger5,position:"bottom center",content:"I am positioned to the bottom center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger6,position:"bottom right",content:"I am positioned to the bottom right"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger7,position:"right center",content:"I am positioned to the right center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger8,position:"left center",content:"I am positioned to the left center"},null,8,["trigger"])]),_:1},8,["code"]),t(p,{title:"Flowing",description:"A popup can have no maximum width and continue to flow to fit its content",code:e.flowingCode},{default:i(()=>[t(d,{ref:"flowingTrigger"},{default:i(()=>[n("Show Flowing Popup")]),_:1},512),t(g,{trigger:e.flowingTrigger,flowing:""},{default:i(()=>[t(C,{centered:"",divided:"",columns:3},{default:i(()=>[t(b,{textAlign:"center"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Basic Plan")]),_:1}),nD,t(d,null,{default:i(()=>[n("Choose")]),_:1})]),_:1}),t(b,{textAlign:"center"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Business Plan")]),_:1}),oD,t(d,null,{default:i(()=>[n("Choose")]),_:1})]),_:1}),t(b,{textAlign:"center"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Premium Plan")]),_:1}),sD,t(d,null,{default:i(()=>[n("Choose")]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(p,{title:"Size",description:"A popup can vary in size",code:e.sizeCode},{default:i(()=>[t(u,{name:"heart",circular:"",link:"",ref:"sizeTrigger1"},null,512),t(u,{name:"heart",circular:"",link:"",ref:"sizeTrigger2"},null,512),t(u,{name:"heart",circular:"",link:"",ref:"sizeTrigger3"},null,512),t(u,{name:"heart",circular:"",link:"",ref:"sizeTrigger4"},null,512),t(u,{name:"heart",circular:"",link:"",ref:"sizeTrigger5"},null,512),t(g,{size:"mini",content:"Hello. This is a mini popup",trigger:e.sizeTrigger1},null,8,["trigger"]),t(g,{size:"tiny",content:"Hello. This is a tiny popup",trigger:e.sizeTrigger2},null,8,["trigger"]),t(g,{size:"small",content:"Hello. This is a small popup",trigger:e.sizeTrigger3},null,8,["trigger"]),t(g,{size:"large",content:"Hello. This is a large popup",trigger:e.sizeTrigger4},null,8,["trigger"]),t(g,{size:"huge",content:"Hello. This is a huge popup",trigger:e.sizeTrigger5},null,8,["trigger"])]),_:1},8,["code"]),t(p,{title:"Wide",description:"A popup can be extra wide to allow for longer content",code:e.wideCode},{default:i(()=>[t(u,{name:"heart",circular:"",ref:"wideTrigger1"},null,512),t(u,{name:"heart",circular:"",ref:"wideTrigger2"},null,512),t(u,{name:"heart",circular:"",ref:"wideTrigger3"},null,512),t(g,{trigger:e.wideTrigger1},{default:i(()=>[n(" Hello. This is a regular pop-up which does not allow for lots of content. You cannot fit a lot of words here as the paragraphs will be pretty narrow. ")]),_:1},8,["trigger"]),t(g,{trigger:e.wideTrigger2,wide:""},{default:i(()=>[n(" Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"]),t(g,{trigger:e.wideTrigger3,wide:"very"},{default:i(()=>[n(" Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(p,{title:"Inverted",description:"A popup can have its colors inverted",code:e.invertedCode},{default:i(()=>[t(u,{name:"heart",circular:"",ref:"invertedTrigger1"},null,512),t(d,{icon:"",ref:"invertedTrigger2"},{default:i(()=>[t(u,{name:"add"})]),_:1},512),t(g,{trigger:e.invertedTrigger1,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"]),t(g,{trigger:e.invertedTrigger2,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"])]),_:1},8,["code"])]),_:1})])}const uD=Me(aD,[["render",rD]]),cD=V({name:"RatingDoc",components:{DocPageHeader:At,DocExample:dt,PropertyListTable:xn},setup(){return{ratingCode:'<sui-rating v-model="value" />',iconCode:`<sui-rating :defaultRating="2" :maxRating="4" color="yellow" />
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
<sui-rating size="massive" :defaultRating="3" :maxRating="4" color="yellow" />`,properties:[{name:"color",type:"string",default:"",description:"A rating can have different colors"},{name:"defaultRating",type:"number",default:0,description:"The initial value of rating."},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"icon",type:"string",default:"star",description:"A rating can use a set of specified icons."},{name:"maxRating",type:"number",default:1,description:"The total number of icons."},{name:"modelValue",type:"number",default:"null",description:"A value of rating."},{name:"size",type:"string",default:"",description:"A rating can have different sizes."}],events:[{name:"change",description:"Callback to invoke on value change."}]}}}),dD=k("br",null,null,-1),mD=k("br",null,null,-1),pD=k("br",null,null,-1),fD=k("br",null,null,-1),gD=k("br",null,null,-1),hD=k("br",null,null,-1),_D=k("br",null,null,-1),bD=k("br",null,null,-1),vD=k("br",null,null,-1),SD=k("br",null,null,-1),yD=k("br",null,null,-1),wD=k("br",null,null,-1),CD=k("br",null,null,-1),AD=k("br",null,null,-1),xD=k("br",null,null,-1),kD=k("br",null,null,-1),BD=k("br",null,null,-1),$D=k("br",null,null,-1),TD=k("br",null,null,-1),LD=k("br",null,null,-1),ID=k("br",null,null,-1),DD=k("br",null,null,-1),ED=k("br",null,null,-1),RD=k("br",null,null,-1),zD=k("br",null,null,-1),PD=k("br",null,null,-1),VD=k("br",null,null,-1),FD=k("br",null,null,-1),MD=k("br",null,null,-1),HD=k("br",null,null,-1),ND=k("br",null,null,-1),OD=k("br",null,null,-1),qD=k("br",null,null,-1),GD=k("br",null,null,-1),jD=k("br",null,null,-1),UD=k("br",null,null,-1),YD=k("br",null,null,-1),JD=k("br",null,null,-1),WD=k("br",null,null,-1),KD=k("br",null,null,-1),XD=k("br",null,null,-1),QD=k("br",null,null,-1),ZD=k("br",null,null,-1),eE=k("br",null,null,-1),tE=k("br",null,null,-1),iE=k("br",null,null,-1),lE=k("br",null,null,-1),aE=k("br",null,null,-1);function nE(e,l,a,o,s,c){const m=x("doc-page-header"),f=x("sui-header"),u=x("sui-rating"),d=x("doc-example"),g=x("property-list-table"),p=x("sui-table-header-cell"),_=x("sui-table-row"),w=x("sui-table-header"),S=x("sui-table-cell"),A=x("sui-table-body"),T=x("sui-table"),I=x("sui-container");return y(),ve("div",null,[t(m,{title:"Rating",sub:"A rating indicates user interest in content"}),t(I,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(d,{title:"Rating",description:"A Basic rating",code:e.ratingCode},{default:i(()=>[t(u)]),_:1},8,["code"]),t(d,{title:"Icon",description:"You can use any available icon as rating indicator",code:e.iconCode},{default:i(()=>[t(u,{defaultRating:2,maxRating:4,color:"yellow"}),dD,mD,t(u,{defaultRating:2,maxRating:4,icon:"heart",color:"red"}),pD,fD,t(u,{defaultRating:2,maxRating:4,icon:"female",color:"purple"}),gD,hD,t(u,{defaultRating:2,maxRating:4,icon:"male",color:"blue"}),_D,bD,t(u,{defaultRating:2,maxRating:4,icon:"cloud",color:"grey"}),vD,SD,t(u,{defaultRating:2,maxRating:4,icon:"cat",color:"pink"}),yD,wD,t(u,{defaultRating:2,maxRating:4,icon:"circle",color:"orange"})]),_:1},8,["code"]),t(d,{title:"Color",description:"You can specify any color of the FUI color palette",code:e.colorCode},{default:i(()=>[t(u,{defaultRating:1,maxRating:7,color:"red"}),CD,AD,t(u,{defaultRating:2,maxRating:7,color:"orange"}),xD,kD,t(u,{defaultRating:3,maxRating:7,color:"yellow"}),BD,$D,t(u,{defaultRating:4,maxRating:7,color:"olive"}),TD,LD,t(u,{defaultRating:5,maxRating:7,color:"green"}),ID,DD,t(u,{defaultRating:6,maxRating:7,color:"teal"}),ED,RD,t(u,{defaultRating:6,maxRating:7,color:"blue"}),zD,PD,t(u,{defaultRating:5,maxRating:7,color:"violet"}),VD,FD,t(u,{defaultRating:4,maxRating:7,color:"purple"}),MD,HD,t(u,{defaultRating:3,maxRating:7,color:"pink"}),ND,OD,t(u,{defaultRating:2,maxRating:7,color:"brown"}),qD,GD,t(u,{defaultRating:1,maxRating:7,color:"grey"}),jD,UD,t(u,{defaultRating:1,maxRating:7,color:"black"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(d,{title:"Disabled",description:"A rating can be started in non-interactive mode by adding a disabled class",code:e.disabledCode},{default:i(()=>[t(u,{disabled:"",defaultRating:3,maxRating:5,color:"yellow"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(d,{title:"Size",description:"A rating can vary in size",code:e.sizeCode},{default:i(()=>[t(u,{size:"mini",defaultRating:3,maxRating:4,color:"yellow"}),YD,JD,t(u,{size:"tiny",defaultRating:3,maxRating:4,color:"yellow"}),WD,KD,t(u,{size:"small",defaultRating:3,maxRating:4,color:"yellow"}),XD,QD,t(u,{defaultRating:3,maxRating:4,color:"yellow"}),ZD,eE,t(u,{size:"large",defaultRating:3,maxRating:4,color:"yellow"}),tE,iE,t(u,{size:"huge",defaultRating:3,maxRating:4,color:"yellow"}),lE,aE,t(u,{size:"massive",defaultRating:3,maxRating:4,color:"yellow"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(g,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(T,{celled:""},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Name")]),_:1}),t(p,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[(y(!0),ve(Ce,null,Qe(e.events,h=>(y(),B(_,{key:h.name},{default:i(()=>[t(S,null,{default:i(()=>[n($e(h.name),1)]),_:2},1024),t(S,null,{default:i(()=>[n($e(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const oE=Me(cD,[["render",nE]]),sE=V({name:"SidebarDoc",components:{DocPageHeader:At,DocExample:dt,PropertyListTable:xn},setup(){return{visible1:G(!1),sidebarCode:`<sui-grid :columns="1">
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
</sui-grid>`,properties:[{name:"animation",type:"string",default:"overlay",description:"Specifies the animation of the sidebar."},{name:"dimmed",type:"boolean",default:"false",description:"When specified, display the dim inside pusher content."},{name:"direction",type:"string",default:"left",description:"Specifies the direction the sidebar should appear on."},{name:"visible",type:"boolean",default:"false",description:"Specifies the visibility of the sidebar."}],events:[{name:"hide",description:"Callback to invoke when sidebar hide."},{name:"show",description:"Callback to invoke when sidebar show."}]}}}),rE={class:"pusher"};function uE(e,l,a,o,s,c){const m=x("doc-page-header"),f=x("sui-header"),u=x("sui-icon"),d=x("sui-button"),g=x("sui-grid-column"),p=x("sui-menu-item"),_=x("sui-sidebar"),w=x("sui-image"),S=x("sui-segment"),A=x("sui-grid"),T=x("doc-example"),I=x("property-list-table"),h=x("sui-table-header-cell"),b=x("sui-table-row"),C=x("sui-table-header"),$=x("sui-table-cell"),E=x("sui-table-body"),F=x("sui-table"),H=x("sui-container");return y(),ve("div",null,[t(m,{title:"Sidebar",sub:"A sidebar hides additional content beside a page"}),t(H,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(T,{title:"Sidebar",description:"A sidebar",code:e.sidebarCode},{default:i(()=>[t(A,{columns:1},{default:i(()=>[t(g,null,{default:i(()=>[t(d,{onClick:l[0]||(l[0]=P=>e.visible1=!e.visible1),icon:""},{default:i(()=>[t(u,{name:"arrow right"})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(S,{class:"pushable"},{default:i(()=>[t(_,{visible:e.visible1,"onUpdate:visible":l[1]||(l[1]=P=>e.visible1=P),dimmed:"",icon:"labeled",inverted:""},{default:i(()=>[t(p,null,{default:i(()=>[t(u,{name:"home"}),n(" Home ")]),_:1}),t(p,null,{default:i(()=>[t(u,{name:"gamepad"}),n(" Games ")]),_:1}),t(p,null,{default:i(()=>[t(u,{name:"camera"}),n(" Channels ")]),_:1})]),_:1},8,["visible"]),k("div",rE,[t(S,null,{default:i(()=>[t(f,{as:"h2"},{default:i(()=>[n("Main Header")]),_:1}),t(w,{src:Oe})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(I,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(F,{celled:""},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Name")]),_:1}),t(h,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(E,null,{default:i(()=>[(y(!0),ve(Ce,null,Qe(e.events,P=>(y(),B(b,{key:P.name},{default:i(()=>[t($,null,{default:i(()=>[n($e(P.name),1)]),_:2},1024),t($,null,{default:i(()=>[n($e(P.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const cE=Me(sE,[["render",uE]]),dE=V({name:"SliderDoc",components:{DocPageHeader:At,DocExample:dt},setup(){const e=G(5),l='<sui-slider v-model="slider1" />',a=G(4),o='<sui-slider labeled v-model="slider2" />',s=G(6),c='<sui-slider labeled="ticked" v-model="slider3" />',m=G(0),f=`<sui-slider
  v-model="slider4"
  labeled="ticked"
  :labels='["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ/ς", "τ", "υ", "φ"]'
  :max="20"
/>`,u=G(40),d='<sui-slider v-model="slider5" labeled :step="5" :max="120" :min="20" />',g=G([]);g.value.push(20,60);const p='<sui-slider v-model="slider6" range labeled="ticked" :min="5" :max="100" :step="5" />',_=G(7),w='<sui-slider disabled v-model="slider7" />',S=G(8),A=`<sui-segment inverted>
  <sui-slider inverted v-model="slider8" />
</sui-segment>`,T=G(3),I='<sui-slider reversed v-model="slider9" />',h=G(18),b='<sui-slider vertical v-model="slider10" :max="20" />',C=G(5),$=G(5),E=G(5),F=G(5),H=G(5),P=G(5),j=G(5),Q=G(5),J=G(5),fe=G(5),Be=G(5),U=G(5),K=G(5),de=`<sui-slider color="red" v-model="redSlider" />
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
</sui-segment>`,Le=G(5),Je=G(5),at=G(5);return{slider1:e,sliderCode:l,slider2:a,labeledSliderCode:o,slider3:s,labeledTickedCode:c,slider4:m,customLabelsCode:f,slider5:u,stepCode:d,slider6:g,rangeCode:p,slider7:_,disabledCode:w,slider8:S,invertedCode:A,slider9:T,reversedCode:I,slider10:h,verticalCode:b,redSlider:C,orangeSlider:$,yellowSlider:E,oliveSlider:F,greenSlider:H,tealSlider:P,blueSlider:j,violetSlider:Q,purpleSlider:J,pinkSlider:fe,brownSlider:Be,greySlider:U,blackSlider:K,coloredCode:de,invertedColoredCode:le,smallSlider:Le,largeSlider:Je,bigSlider:at,sizeCode:`<sui-slider size="small" color="red" v-model="smallSlider" />
<sui-slider size="large" color="yellow" v-model="largeSlider" />
<sui-slider size="big" color="olive" v-model="bigSlider" />`,properties:[{name:"color",type:"string",default:"",description:"A slider can have different colors"},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"inverted",type:"boolean",default:!1,description:"A slider can be formatted to appear on dark backgrounds."},{name:"labeled",type:"boolean|string",default:!1,description:"A slider can show its labels."},{name:"labels",type:"string[]",default:"",description:"A slider can have a custom label according to the label value."},{name:"max",type:"number",default:10,description:"Maximum boundary value."},{name:"min",type:"number",default:0,description:"Mininum boundary value."},{name:"modelValue",type:"number|number[]",default:0,description:"A value of component."},{name:"range",type:"boolean",default:!1,description:"When specified, allows two boundary values to be picked."},{name:"reversed",type:"boolean",default:!1,description:"A slider can be reversed."},{name:"size",type:"string",default:"",description:"A slider can have different sizes."},{name:"step",type:"number",default:1,description:"Step factor to increment/decrement the value."},{name:"vertical",type:"boolean",default:!1,description:"When specified, orientation of the slider becomes vertical."},{name:"verticalHeight",type:"number|string",default:200,description:"Height of the vertical slider."}],events:[{name:"change",description:"Callback to invoke on value change."},{name:"slideend",description:"Callback to invoke when slide end."}]}}});function mE(e,l,a,o,s,c){const m=x("doc-page-header"),f=x("sui-header"),u=x("sui-slider"),d=x("doc-example"),g=x("sui-segment"),p=x("sui-table-header-cell"),_=x("sui-table-row"),w=x("sui-table-header"),S=x("sui-table-cell"),A=x("sui-table-body"),T=x("sui-table"),I=x("sui-container");return y(),ve("div",null,[t(m,{title:"Slider",sub:"A slider allows users to select values within a range"}),t(I,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(d,{title:"Slider",description:"A standard slider",code:e.sliderCode},{default:i(()=>[t(u,{modelValue:e.slider1,"onUpdate:modelValue":l[0]||(l[0]=h=>e.slider1=h)},null,8,["modelValue"]),n(" "+$e(e.slider1),1)]),_:1},8,["code"]),t(d,{title:"Labeled Slider",description:"A slider that show its labels",code:e.labeledSliderCode},{default:i(()=>[t(u,{labeled:"",modelValue:e.slider2,"onUpdate:modelValue":l[1]||(l[1]=h=>e.slider2=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(d,{title:"Labeled Ticked Slider",description:"A slider that show its labels and ticks",code:e.labeledTickedCode},{default:i(()=>[t(u,{labeled:"ticked",modelValue:e.slider3,"onUpdate:modelValue":l[2]||(l[2]=h=>e.slider3=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(d,{title:"Custom Interpreted Labels",description:"You can provide a function which returns a custom label according to the label value",code:e.customLabelsCode},{default:i(()=>[t(u,{modelValue:e.slider4,"onUpdate:modelValue":l[3]||(l[3]=h=>e.slider4=h),labeled:"ticked",labels:["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ/ς","τ","υ","φ"],max:20},null,8,["modelValue"])]),_:1},8,["code"]),t(d,{title:"Step",description:"A slider can change the default step increment",code:e.stepCode},{default:i(()=>[t(u,{modelValue:e.slider5,"onUpdate:modelValue":l[4]||(l[4]=h=>e.slider5=h),labeled:"",step:5,max:120,min:20},null,8,["modelValue"]),n(" "+$e(e.slider5),1)]),_:1},8,["code"]),t(d,{title:"Range",description:"A range slider which allow you to select a range between two values",code:e.rangeCode},{default:i(()=>[t(u,{modelValue:e.slider6,"onUpdate:modelValue":l[5]||(l[5]=h=>e.slider6=h),range:"",labeled:"ticked",min:5,max:100,step:5},null,8,["modelValue"]),n(" "+$e(e.slider6),1)]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(d,{title:"Disabled",description:"A slider can appear disabled",code:e.disabledCode},{default:i(()=>[t(u,{disabled:"",modelValue:e.slider7,"onUpdate:modelValue":l[6]||(l[6]=h=>e.slider7=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(d,{title:"Inverted",description:"A slider can be inverted",code:e.invertedCode},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(u,{inverted:"",modelValue:e.slider8,"onUpdate:modelValue":l[7]||(l[7]=h=>e.slider8=h)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(d,{title:"Reversed",description:"A slider can be reversed",code:e.reversedCode},{default:i(()=>[t(u,{reversed:"",modelValue:e.slider9,"onUpdate:modelValue":l[8]||(l[8]=h=>e.slider9=h)},null,8,["modelValue"]),n(" "+$e(e.slider9),1)]),_:1},8,["code"]),t(d,{title:"Vertical",description:"A slider can be vertical",code:e.verticalCode},{default:i(()=>[t(u,{vertical:"",modelValue:e.slider10,"onUpdate:modelValue":l[9]||(l[9]=h=>e.slider10=h),max:20},null,8,["modelValue"]),n(" "+$e(e.slider10),1)]),_:1},8,["code"]),t(d,{title:"Colored",description:"A slider can be different colors",code:e.coloredCode},{default:i(()=>[t(u,{color:"red",modelValue:e.redSlider,"onUpdate:modelValue":l[10]||(l[10]=h=>e.redSlider=h)},null,8,["modelValue"]),t(u,{color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":l[11]||(l[11]=h=>e.orangeSlider=h)},null,8,["modelValue"]),t(u,{color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":l[12]||(l[12]=h=>e.yellowSlider=h)},null,8,["modelValue"]),t(u,{color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":l[13]||(l[13]=h=>e.oliveSlider=h)},null,8,["modelValue"]),t(u,{color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":l[14]||(l[14]=h=>e.greenSlider=h)},null,8,["modelValue"]),t(u,{color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":l[15]||(l[15]=h=>e.tealSlider=h)},null,8,["modelValue"]),t(u,{color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":l[16]||(l[16]=h=>e.blueSlider=h)},null,8,["modelValue"]),t(u,{color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":l[17]||(l[17]=h=>e.violetSlider=h)},null,8,["modelValue"]),t(u,{color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":l[18]||(l[18]=h=>e.purpleSlider=h)},null,8,["modelValue"]),t(u,{color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":l[19]||(l[19]=h=>e.pinkSlider=h)},null,8,["modelValue"]),t(u,{color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":l[20]||(l[20]=h=>e.brownSlider=h)},null,8,["modelValue"]),t(u,{color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":l[21]||(l[21]=h=>e.greySlider=h)},null,8,["modelValue"]),t(u,{color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":l[22]||(l[22]=h=>e.blackSlider=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(d,{title:"Inverted Colored",description:"A slider can be different colors while inverted",code:e.invertedColoredCode},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(u,{inverted:"",color:"red",modelValue:e.redSlider,"onUpdate:modelValue":l[23]||(l[23]=h=>e.redSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":l[24]||(l[24]=h=>e.orangeSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":l[25]||(l[25]=h=>e.yellowSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":l[26]||(l[26]=h=>e.oliveSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":l[27]||(l[27]=h=>e.greenSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":l[28]||(l[28]=h=>e.tealSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":l[29]||(l[29]=h=>e.blueSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":l[30]||(l[30]=h=>e.violetSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":l[31]||(l[31]=h=>e.purpleSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":l[32]||(l[32]=h=>e.pinkSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":l[33]||(l[33]=h=>e.brownSlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":l[34]||(l[34]=h=>e.greySlider=h)},null,8,["modelValue"]),t(u,{inverted:"",color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":l[35]||(l[35]=h=>e.blackSlider=h)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(d,{title:"Size",description:"A slider can have different sizes",code:e.sizeCode},{default:i(()=>[t(u,{size:"small",color:"red",modelValue:e.smallSlider,"onUpdate:modelValue":l[36]||(l[36]=h=>e.smallSlider=h)},null,8,["modelValue"]),t(u,{size:"large",color:"yellow",modelValue:e.largeSlider,"onUpdate:modelValue":l[37]||(l[37]=h=>e.largeSlider=h)},null,8,["modelValue"]),t(u,{size:"big",color:"olive",modelValue:e.bigSlider,"onUpdate:modelValue":l[38]||(l[38]=h=>e.bigSlider=h)},null,8,["modelValue"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(T,{celled:""},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Name")]),_:1}),t(p,null,{default:i(()=>[n("Type")]),_:1}),t(p,null,{default:i(()=>[n("Default")]),_:1}),t(p,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[(y(!0),ve(Ce,null,Qe(e.properties,h=>(y(),B(_,{key:h.name},{default:i(()=>[t(S,null,{default:i(()=>[n($e(h.name),1)]),_:2},1024),t(S,null,{default:i(()=>[n($e(h.type),1)]),_:2},1024),t(S,null,{default:i(()=>[n($e(h.default),1)]),_:2},1024),t(S,null,{default:i(()=>[n($e(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(T,{celled:""},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Name")]),_:1}),t(p,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[(y(!0),ve(Ce,null,Qe(e.events,h=>(y(),B(_,{key:h.name},{default:i(()=>[t(S,null,{default:i(()=>[n($e(h.name),1)]),_:2},1024),t(S,null,{default:i(()=>[n($e(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const pE=Me(dE,[["render",mE]]),fE=V({name:"TabDoc",components:{DocPageHeader:At,DocExample:dt,PropertyListTable:xn},setup(){return{basicCode:`<sui-tab>
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
</sui-tab>`,tabProperties:[{name:"activeIndex",type:"string",default:0,description:"Index of the active tab."},{name:"pointing",type:"boolean",default:!1,description:""}],tabPanelProperties:[{name:"header",type:"boolean",default:"null",description:"Orientation of tab headers."}],events:[{name:"tab-change",description:"Callback to invoke when an active tab is changed."},{name:"tab-click",description:"Callback to invoke when an tab is clicked."}]}}});function gE(e,l,a,o,s,c){const m=x("doc-page-header"),f=x("sui-header"),u=x("sui-tab-panel"),d=x("sui-tab"),g=x("doc-example"),p=x("property-list-table"),_=x("sui-table-header-cell"),w=x("sui-table-row"),S=x("sui-table-header"),A=x("sui-table-cell"),T=x("sui-table-body"),I=x("sui-table"),h=x("sui-container");return y(),ve("div",null,[t(m,{title:"Tab",sub:"A tab is a hidden section of content activated by a menu"}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Examples")]),_:1}),t(g,{title:"Basic",code:e.basicCode},{default:i(()=>[t(d,null,{default:i(()=>[t(u,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(u,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(u,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Pointing",code:e.pointingCode},{default:i(()=>[t(d,{pointing:""},{default:i(()=>[t(u,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(u,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(u,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Secondary",code:e.secondaryCode},{default:i(()=>[t(d,{secondary:""},{default:i(()=>[t(u,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(u,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(u,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Text",code:e.textCode},{default:i(()=>[t(d,{text:""},{default:i(()=>[t(u,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(u,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(u,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(f,{as:"h3"},{default:i(()=>[n("Tab")]),_:1}),t(p,{properties:e.tabProperties},null,8,["properties"]),t(f,{as:"h3"},{default:i(()=>[n("TabPanel")]),_:1}),t(p,{properties:e.tabPanelProperties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(I,{celled:""},{default:i(()=>[t(S,null,{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Name")]),_:1}),t(_,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(T,null,{default:i(()=>[(y(!0),ve(Ce,null,Qe(e.events,b=>(y(),B(w,{key:b.name},{default:i(()=>[t(A,null,{default:i(()=>[n($e(b.name),1)]),_:2},1024),t(A,null,{default:i(()=>[n($e(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const hE=Me(fE,[["render",gE]]),_E=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({ message: 'I am a toast, nice to meet you !' })
}
<\/script>`,bE={__name:"MinimalDoc",setup(e){const{toast:l}=st(),a=()=>{l({message:"I am a toast, nice to meet you !"})};return(o,s)=>{const c=x("SuiButton");return y(),B(D,{label:"Minimal",code:_E},{description:i(()=>[n(" A minimal toast will just display a message. ")]),example:i(()=>[t(c,{onClick:a},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},vE=`<template>
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
<\/script>`,SE={__name:"TitledDoc",setup(e){const{toast:l}=st(),a=()=>{l({title:"Better ?",message:"Hey look, I have a title !"})};return(o,s)=>{const c=x("SuiButton");return y(),B(D,{label:"Titled",code:vE},{description:i(()=>[n(" You can add a title to your toast. ")]),example:i(()=>[t(c,{onClick:a},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},yE=`<template>
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
<\/script>`,wE={__name:"ProgressBarDoc",setup(e){const{toast:l}=st(),a=o=>{l({title:"LOOK",message:"See, how long i will last",showProgress:"bottom",showProgressColor:o})};return(o,s)=>{const c=x("SuiButton");return y(),B(D,{label:"Progress Bar",code:yE},{description:i(()=>[n(" You can attach a progress bar to your toast. ")]),example:i(()=>[t(c,{onClick:a},{default:i(()=>[n("Show")]),_:1}),t(c,{color:"red",onClick:s[0]||(s[0]=m=>a("red"))},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},CE=`<template>
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
<\/script>`,AE={__name:"ToastTypeDoc",setup(e){const{toast:l}=st(),a=o=>{l({message:"You're using the good framework !",type:o})};return(o,s)=>{const c=x("SuiButton");return y(),B(D,{label:"Toast Type",code:CE},{description:i(()=>[n(" A toast can be used to display different types of informations. ")]),example:i(()=>[t(c,{onClick:s[0]||(s[0]=m=>a("success")),positive:""},{default:i(()=>[n("Success")]),_:1}),t(c,{onClick:s[1]||(s[1]=m=>a("error")),negative:""},{default:i(()=>[n("Error")]),_:1}),t(c,{onClick:s[2]||(s[2]=m=>a("warning")),color:"yellow"},{default:i(()=>[n("Warning")]),_:1})]),_:1})}}},xE=`<template>
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
<\/script>`,kE={__name:"PositionDoc",setup(e){const{toast:l}=st(),a=o=>{l({position:o,message:"Look, I'm here !"})};return(o,s)=>{const c=x("SuiButton");return y(),B(D,{label:"Position",code:xE},{description:i(()=>[n(" A toast can appear at different positions on the screen. ")]),example:i(()=>[t(c,{onClick:s[0]||(s[0]=m=>a("top left"))},{default:i(()=>[n("Top Left")]),_:1}),t(c,{onClick:s[1]||(s[1]=m=>a("bottom right"))},{default:i(()=>[n("Bottom Right")]),_:1})]),_:1})}}},BE=k("br",null,null,-1),$E=`<template>
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
<\/script>`,TE={__name:"AttachedPosition",setup(e){const{toast:l}=st(),a=o=>{l({attached:o,title:"Watch out!",message:`I am a ${o} attached toast`})};return(o,s)=>{const c=x("SuiButton");return y(),B(D,{label:"Attached Position",code:$E},{description:i(()=>[n(" A toast can have an attached position which will show the toast over the whole width of the screen."),BE,n(" Just like notifications on mobile devices. ")]),example:i(()=>[t(c,{onClick:s[0]||(s[0]=m=>a("top"))},{default:i(()=>[n("Top")]),_:1}),t(c,{onClick:s[1]||(s[1]=m=>a("bottom"))},{default:i(()=>[n("Bottom")]),_:1})]),_:1})}}},LE=`<template>
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
<\/script>`,IE={__name:"DirectionDoc",setup(e){const{toast:l}=st(),a=()=>{l({horizontal:!0,position:"top left",title:"Watch out!",message:"Next one will open to the right"})};return(o,s)=>{const c=x("SuiButton");return y(),B(D,{label:"Direction",code:LE},{description:i(()=>[n(" Toasts can stack horizontal ")]),example:i(()=>[t(c,{onClick:a},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},DE=`<template>
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
<\/script>`,EE={__name:"CenterAligned",setup(e){const{toast:l}=st(),a=()=>{l({centered:!0,title:"Veronika has joined",message:"Welcome to the Fomantic-UI community!"})};return(o,s)=>{const c=x("SuiButton");return y(),B(D,{label:"Center Aligned",code:DE},{description:i(()=>[n(" The toasts content can be shown center aligned. ")]),example:i(()=>[t(c,{onClick:a},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},RE=`<template>
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
<\/script>`,zE={__name:"DurationDoc",setup(e){const{toast:l}=st(),a=o=>{l({displayTime:o,message:o===0?"I'll stay here until you click on me !":"You will see me for 5 seconds."})};return(o,s)=>{const c=x("SuiButton");return y(),B(D,{label:"Duration",code:RE},{description:i(()=>[n(" You can choose how long a toast should be displayed. ")]),example:i(()=>[t(c,{onClick:s[0]||(s[0]=m=>a(5e3))},{default:i(()=>[n("5 seconds")]),_:1}),t(c,{onClick:s[1]||(s[1]=m=>a(0))},{default:i(()=>[n("Stay")]),_:1})]),_:1})}}},PE=`<template>
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
<\/script>`,VE={__name:"MessageStyleDoc",setup(e){const{toast:l}=st(),a=()=>{l({messageStyle:!0,message:"I got my style from the message class",color:"purple"})};return(o,s)=>{const c=x("SuiButton");return y(),B(D,{label:"Use Message Style",code:PE},{description:i(()=>[n(" You can use all of the styles and colors from the message component. ")]),example:i(()=>[t(c,{onClick:a},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},FE=`<template>
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
<\/script>`,ME={__name:"IncreasingProgressBarDoc",setup(e){const{toast:l}=st(),a=()=>{l({title:"LOOK",message:"See, how long i will last",showProgress:"top",showProgressUp:!0})};return(o,s)=>{const c=x("SuiButton");return y(),B(D,{label:"Increasing Progress Bar",code:FE},{description:i(()=>[n(" You can use the progress bar to show the progress of a task. ")]),example:i(()=>[t(c,{onClick:a},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},HE=`<template>
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
<\/script>`,NE={__name:"ColorVariantsDoc",setup(e){const{toast:l}=st(),a=G(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],s=()=>{l({color:o[a.value],message:"I am a colorful toast",showProgress:"bottom"}),a.value=(a.value+1)%o.length};return(c,m)=>{const f=x("SuiButton");return y(),B(D,{label:"Color Variants",code:HE},{description:i(()=>[n(" You can use all of the usual color names. ")]),example:i(()=>[t(f,{onClick:s},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},OE={__name:"InvertedColorsDoc",setup(e){const{toast:l}=st(),a=G(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],s=()=>{l({color:o[a.value],inverted:!0,message:"I am an inverted colorful toast",showProgress:"bottom"}),a.value=(a.value+1)%o.length};return(c,m)=>{const f=x("SuiButton");return y(),B(D,{label:"Inverted Colors",code:c.code},{description:i(()=>[n(" Same as above, just add inverted to the class definition. ")]),example:i(()=>[t(f,{onClick:s},{default:i(()=>[n("Show")]),_:1})]),_:1},8,["code"])}}},qE=`<template>
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
<\/script>`,GE={__name:"ActionGeneralDoc",setup(e){const{toast:l}=st(),a=()=>{l({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[X(z,{color:"green",onclick:()=>{l({message:'You clicked "yes", toast closes by default'}),o()}},()=>[X(Y,{name:"check"}),"Yes"]),X(z,{color:"red",icon:!0},()=>[X(Y,{name:"ban"})]),X(z,{color:"blue",onclick:()=>l({message:"Returning false from the click handler avoids closing the toast"})},()=>"?")]})};return(o,s)=>(y(),B(D,{label:"General",code:qE},{description:i(()=>[n(" Define click actions to your toast by providing a text and/or icon, optional class and click handler. ")]),example:i(()=>[t(r(z),{onClick:a},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},jE=`<template>
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
<\/script>`,UE={__name:"ActionBasicDoc",setup(e){const{toast:l}=st(),a=()=>{l({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[X(z,{color:"yellow",onclick:()=>{l({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really")],actionsProps:{basic:!0,aligned:"left"}})};return(o,s)=>(y(),B(D,{label:"Basic",code:jE},{description:i(()=>[n(" The classActions setting provides you a way to adjust the overall appearance of the action buttons. Using basic class does not lighten the actions background. left aligns the buttons to the left. ")]),example:i(()=>[t(r(z),{onClick:a},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},YE=`<template>
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
<\/script>`,JE={__name:"ActionAttachedDoc",setup(e){const{toast:l}=st(),a=()=>{l({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[X(z,{color:"green",onclick:()=>{l({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),X(z,{color:"red",onclick:()=>{l({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"top"}})};return(o,s)=>(y(),B(D,{label:"Attached",code:YE},{description:i(()=>[n(" Using attached converts your actions into a Button group. Also add top to display the actions attached to the top of the toast. ")]),example:i(()=>[t(r(z),{onClick:a},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},WE=`<template>
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
<\/script>`,KE={__name:"ActionVerticalDoc",setup(e){const{toast:l}=st(),a=()=>{l({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[X(z,{color:"green",onclick:()=>{l({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),X(z,{color:"red",onclick:()=>{l({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{vertical:!0}})};return(o,s)=>(y(),B(D,{label:"Vertical",code:WE},{description:i(()=>[n(" You can use vertical to display your actions to the right of the toast. ")]),example:i(()=>[t(r(z),{onClick:a},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},XE=k("br",null,null,-1),QE=`<template>
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
<\/script>`,ZE={__name:"ActionVerticalAttachedDoc",setup(e){const{toast:l}=st(),a=()=>{l({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[X(z,{color:"green",onclick:()=>{l({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),X(z,{color:"red",onclick:()=>{l({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"left",vertical:!0}})};return(o,s)=>(y(),B(D,{label:"Vertical Attached",code:QE},{description:i(()=>[n(" Vertical actions can also be displayed as button groups using vertical attached."),XE,n(" Vertical attached actions also support left. ")]),example:i(()=>[t(r(z),{onClick:a},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},eR={__name:"Toast",setup(e){const l=[{id:"minimal",label:"Minimal",category:"Types",component:bE},{id:"titled",label:"Titled",category:"Types",component:SE},{id:"progress-bar",label:"Progress Bar",category:"Types",component:wE},{id:"toast-type",label:"Toast Type",category:"Variations",component:AE},{id:"position",label:"Position",category:"Variations",component:kE},{id:"attached-position",label:"Attached Position",category:"Variations",component:TE},{id:"direction",label:"Direction",category:"Variations",component:IE},{id:"center-aligned",label:"Center Aligned",category:"Variations",component:EE},{id:"duration",label:"Duration",category:"Variations",component:zE},{id:"message-style",label:"Use Message Style",category:"Variations",component:VE},{id:"increasing-progress-bar",label:"Increasing Progress Bar",category:"Variations",component:ME},{id:"color-variants",label:"Color Variants",category:"Variations",component:NE},{id:"inverted-colors",label:"Inverted Colors",category:"Variations",component:OE},{id:"general",label:"General",category:"Actions",component:GE},{id:"action-basic",label:"Basic",category:"Actions",component:UE},{id:"action-attached",label:"Attached",category:"Actions",component:JE},{id:"action-vertical",label:"Vertical",category:"Actions",component:KE},{id:"action-vertical-attached",label:"Vertical Attached",category:"Actions",component:ZE}];return(a,o)=>(y(),B(ot,{title:"Toast",description:"A toast allows users to be notified of an event","component-docs":l}))}},tR=[{path:"/",component:Ch,children:[{path:"/",component:Xh},{path:"elements/button",component:xw},{path:"elements/container",component:Vw},{path:"elements/divider",component:rC},{path:"elements/emoji",component:vC},{path:"elements/flag",component:AC},{path:"elements/header",component:i0},{path:"elements/icon",component:R0},{path:"elements/image",component:yA},{path:"elements/input",component:UA},{path:"elements/label",component:ik},{path:"elements/list",component:Tk},{path:"elements/loader",component:Qk},{path:"elements/rail",component:iB},{path:"elements/reveal",component:gB},{path:"elements/segment",component:NT},{path:"elements/step",component:YT},{path:"collections/breadcrumb",component:cL},{path:"collections/form",component:TL},{path:"collections/grid",component:PL},{path:"collections/menu",component:GL},{path:"collections/message",component:()=>di(()=>import("./Message-WtIjiFj9.js"),__vite__mapDeps([]))},{path:"collections/table",component:lI},{path:"views/advertisement",component:()=>di(()=>import("./Advertisement-Y2Cv1D2D.js"),__vite__mapDeps([]))},{path:"views/card",component:()=>di(()=>import("./Card-FqGLL6hU.js"),__vite__mapDeps([]))},{path:"views/comment",component:()=>di(()=>import("./Comment-eS8Xpsml.js"),__vite__mapDeps([]))},{path:"views/feed",component:()=>di(()=>import("./Feed-2ap8XzGT.js"),__vite__mapDeps([]))},{path:"views/item",component:()=>di(()=>import("./Item-weIxrunD.js"),__vite__mapDeps([]))},{path:"views/statistic",component:()=>di(()=>import("./Statistic-YdkXIff-.js"),__vite__mapDeps([]))},{path:"modules/accordion",component:kI},{path:"modules/calendar",component:TI},{path:"modules/checkbox",component:MI},{path:"modules/dimmer",component:OI},{path:"modules/dropdown",component:jI},{path:"modules/embed",component:JI},{path:"modules/modal",component:iD},{path:"modules/popup",component:uD},{path:"modules/progress",component:()=>di(()=>import("./Progress-qHFHNMwr.js"),__vite__mapDeps([]))},{path:"modules/rating",component:oE},{path:"modules/sidebar",component:cE},{path:"modules/slider",component:pE},{path:"modules/tab",component:hE},{path:"modules/toast",component:eR}]}],iR=ih({history:_g("/vue-fomantic-ui/"),routes:tR,scrollBehavior(e,l,a){var o;e.hash||(o=document.querySelector(".article"))==null||o.scrollTo(0,0)}});(function(e){var l="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",a={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},o={bash:a,environment:{pattern:RegExp("\\$"+l),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+l),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+l),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:o},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:a}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:o},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:o.entity}}],environment:{pattern:RegExp("\\$?"+l),alias:"constant"},variable:o.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},a.inside=e.languages.bash;for(var s=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],c=o.variable[1].inside,m=0;m<s.length;m++)c[s[m]]=e.languages.bash[s[m]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);const xs=Ec(Xf);xs.use(iR);xs.use(ey);xs.mount("#app");export{ko as $,z as A,H_ as B,Rd as C,ot as D,gb as E,Ce as F,da as G,bb as H,fk as I,Ht as J,I_ as K,WA as L,Lo as M,Ea as N,Ra as O,Pb as P,Db as Q,ll as R,Eb as S,gt as T,O as U,An as V,D_ as W,Tv as X,xo as Y,z_ as Z,D as _,n as a,Lv as a0,Ao as a1,t as b,B as c,V as d,Y as e,it as f,id as g,k as h,l_ as i,Te as j,oe as k,Ze as l,ve as m,Qe as n,y as o,$e as p,R_ as q,G as r,pe as s,fs as t,r as u,N as v,i as w,ba as x,$t as y,j_ as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const p of c.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mn(e,a){const n=new Set(e.split(","));return a?o=>n.has(o.toLowerCase()):o=>n.has(o)}const je={},sa=[],wt=()=>{},dp=()=>!1,cl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ko=e=>e.startsWith("onUpdate:"),Xe=Object.assign,Xo=(e,a)=>{const n=e.indexOf(a);n>-1&&e.splice(n,1)},mp=Object.prototype.hasOwnProperty,Fe=(e,a)=>mp.call(e,a),ge=Array.isArray,ra=e=>$a(e)==="[object Map]",Wi=e=>$a(e)==="[object Set]",Hs=e=>$a(e)==="[object Date]",pp=e=>$a(e)==="[object RegExp]",we=e=>typeof e=="function",Qe=e=>typeof e=="string",ki=e=>typeof e=="symbol",qe=e=>e!==null&&typeof e=="object",Qo=e=>(qe(e)||we(e))&&we(e.then)&&we(e.catch),Bc=Object.prototype.toString,$a=e=>Bc.call(e),fp=e=>$a(e).slice(8,-1),Tc=e=>$a(e)==="[object Object]",Zo=e=>Qe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ja=mn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pn=e=>{const a=Object.create(null);return n=>a[n]||(a[n]=e(n))},gp=/-(\w)/g,vt=pn(e=>e.replace(gp,(a,n)=>n?n.toUpperCase():"")),hp=/\B([A-Z])/g,Lt=pn(e=>e.replace(hp,"-$1").toLowerCase()),dl=pn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ga=pn(e=>e?`on${dl(e)}`:""),Gt=(e,a)=>!Object.is(e,a),ua=(e,a)=>{for(let n=0;n<e.length;n++)e[n](a)},Fl=(e,a,n)=>{Object.defineProperty(e,a,{configurable:!0,enumerable:!1,value:n})},Qa=e=>{const a=parseFloat(e);return isNaN(a)?e:a},Pl=e=>{const a=Qe(e)?Number(e):NaN;return isNaN(a)?e:a};let Ns;const Lc=()=>Ns||(Ns=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),_p="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",bp=mn(_p);function Ba(e){if(ge(e)){const a={};for(let n=0;n<e.length;n++){const o=e[n],r=Qe(o)?wp(o):Ba(o);if(r)for(const c in r)a[c]=r[c]}return a}else if(Qe(e)||qe(e))return e}const vp=/;(?![^(]*\))/g,yp=/:([^]+)/,Sp=/\/\*[^]*?\*\//g;function wp(e){const a={};return e.replace(Sp,"").split(vp).forEach(n=>{if(n){const o=n.split(yp);o.length>1&&(a[o[0].trim()]=o[1].trim())}}),a}function ml(e){let a="";if(Qe(e))a=e;else if(ge(e))for(let n=0;n<e.length;n++){const o=ml(e[n]);o&&(a+=o+" ")}else if(qe(e))for(const n in e)e[n]&&(a+=n+" ");return a.trim()}function Cp(e){if(!e)return null;let{class:a,style:n}=e;return a&&!Qe(a)&&(e.class=ml(a)),n&&(e.style=Ba(n)),e}const Ap="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kp=mn(Ap);function Dc(e){return!!e||e===""}function xp(e,a){if(e.length!==a.length)return!1;let n=!0;for(let o=0;n&&o<e.length;o++)n=li(e[o],a[o]);return n}function li(e,a){if(e===a)return!0;let n=Hs(e),o=Hs(a);if(n||o)return n&&o?e.getTime()===a.getTime():!1;if(n=ki(e),o=ki(a),n||o)return e===a;if(n=ge(e),o=ge(a),n||o)return n&&o?xp(e,a):!1;if(n=qe(e),o=qe(a),n||o){if(!n||!o)return!1;const r=Object.keys(e).length,c=Object.keys(a).length;if(r!==c)return!1;for(const p in e){const f=e.hasOwnProperty(p),s=a.hasOwnProperty(p);if(f&&!s||!f&&s||!li(e[p],a[p]))return!1}}return String(e)===String(a)}function fn(e,a){return e.findIndex(n=>li(n,a))}const Te=e=>Qe(e)?e:e==null?"":ge(e)||qe(e)&&(e.toString===Bc||!we(e.toString))?JSON.stringify(e,Ic,2):String(e),Ic=(e,a)=>a&&a.__v_isRef?Ic(e,a.value):ra(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((n,[o,r],c)=>(n[Fn(o,c)+" =>"]=r,n),{})}:Wi(a)?{[`Set(${a.size})`]:[...a.values()].map(n=>Fn(n))}:ki(a)?Fn(a):qe(a)&&!ge(a)&&!Tc(a)?String(a):a,Fn=(e,a="")=>{var n;return ki(e)?`Symbol(${(n=e.description)!=null?n:a})`:e};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bt;class es{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Bt,!a&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const n=Bt;try{return Bt=this,a()}finally{Bt=n}}}on(){Bt=this}off(){Bt=this.parent}stop(a){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!a){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function $p(e){return new es(e)}function Ec(e,a=Bt){a&&a.active&&a.effects.push(e)}function ts(){return Bt}function Rc(e){Bt&&Bt.cleanups.push(e)}let Fi;class ba{constructor(a,n,o,r){this.fn=a,this.trigger=n,this.scheduler=o,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Ec(this,r)}get dirty(){if(this._dirtyLevel===1){Ki();for(let a=0;a<this._depsLength;a++){const n=this.deps[a];if(n.computed&&(Bp(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),Xi()}return this._dirtyLevel>=2}set dirty(a){this._dirtyLevel=a?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let a=Si,n=Fi;try{return Si=!0,Fi=this,this._runnings++,Os(this),this.fn()}finally{js(this),this._runnings--,Fi=n,Si=a}}stop(){var a;this.active&&(Os(this),js(this),(a=this.onStop)==null||a.call(this),this.active=!1)}}function Bp(e){return e.value}function Os(e){e._trackId++,e._depsLength=0}function js(e){if(e.deps&&e.deps.length>e._depsLength){for(let a=e._depsLength;a<e.deps.length;a++)zc(e.deps[a],e);e.deps.length=e._depsLength}}function zc(e,a){const n=e.get(a);n!==void 0&&a._trackId!==n&&(e.delete(a),e.size===0&&e.cleanup())}function Tp(e,a){e.effect instanceof ba&&(e=e.effect.fn);const n=new ba(e,wt,()=>{n.dirty&&n.run()});a&&(Xe(n,a),a.scope&&Ec(n,a.scope)),(!a||!a.lazy)&&n.run();const o=n.run.bind(n);return o.effect=n,o}function Lp(e){e.effect.stop()}let Si=!0,so=0;const Fc=[];function Ki(){Fc.push(Si),Si=!1}function Xi(){const e=Fc.pop();Si=e===void 0?!0:e}function is(){so++}function as(){for(so--;!so&&ro.length;)ro.shift()()}function Pc(e,a,n){if(a.get(e)!==e._trackId){a.set(e,e._trackId);const o=e.deps[e._depsLength];o!==a?(o&&zc(o,e),e.deps[e._depsLength++]=a):e._depsLength++}}const ro=[];function Mc(e,a,n){is();for(const o of e.keys())if(o._dirtyLevel<a&&e.get(o)===o._trackId){const r=o._dirtyLevel;o._dirtyLevel=a,r===0&&(o._shouldSchedule=!0,o.trigger())}Vc(e),as()}function Vc(e){for(const a of e.keys())a.scheduler&&a._shouldSchedule&&(!a._runnings||a.allowRecurse)&&e.get(a)===a._trackId&&(a._shouldSchedule=!1,ro.push(a.scheduler))}const Hc=(e,a)=>{const n=new Map;return n.cleanup=e,n.computed=a,n},Ml=new WeakMap,Pi=Symbol(""),uo=Symbol("");function xt(e,a,n){if(Si&&Fi){let o=Ml.get(e);o||Ml.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=Hc(()=>o.delete(n))),Pc(Fi,r)}}function ii(e,a,n,o,r,c){const p=Ml.get(e);if(!p)return;let f=[];if(a==="clear")f=[...p.values()];else if(n==="length"&&ge(e)){const s=Number(o);p.forEach((u,g)=>{(g==="length"||!ki(g)&&g>=s)&&f.push(u)})}else switch(n!==void 0&&f.push(p.get(n)),a){case"add":ge(e)?Zo(n)&&f.push(p.get("length")):(f.push(p.get(Pi)),ra(e)&&f.push(p.get(uo)));break;case"delete":ge(e)||(f.push(p.get(Pi)),ra(e)&&f.push(p.get(uo)));break;case"set":ra(e)&&f.push(p.get(Pi));break}is();for(const s of f)s&&Mc(s,2);as()}function Dp(e,a){var n;return(n=Ml.get(e))==null?void 0:n.get(a)}const Ip=mn("__proto__,__v_isRef,__isVue"),Nc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ki)),Gs=Ep();function Ep(){const e={};return["includes","indexOf","lastIndexOf"].forEach(a=>{e[a]=function(...n){const o=Ee(this);for(let c=0,p=this.length;c<p;c++)xt(o,"get",c+"");const r=o[a](...n);return r===-1||r===!1?o[a](...n.map(Ee)):r}}),["push","pop","shift","unshift","splice"].forEach(a=>{e[a]=function(...n){Ki(),is();const o=Ee(this)[a].apply(this,n);return as(),Xi(),o}}),e}function Rp(e){const a=Ee(this);return xt(a,"has",e),a.hasOwnProperty(e)}class Oc{constructor(a=!1,n=!1){this._isReadonly=a,this._shallow=n}get(a,n,o){const r=this._isReadonly,c=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return c;if(n==="__v_raw")return o===(r?c?Jc:Yc:c?Uc:qc).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(o)?a:void 0;const p=ge(a);if(!r){if(p&&Fe(Gs,n))return Reflect.get(Gs,n,o);if(n==="hasOwnProperty")return Rp}const f=Reflect.get(a,n,o);return(ki(n)?Nc.has(n):Ip(n))||(r||xt(a,"get",n),c)?f:mt(f)?p&&Zo(n)?f:f.value:qe(f)?r?ns(f):oi(f):f}}class jc extends Oc{constructor(a=!1){super(!1,a)}set(a,n,o,r){let c=a[n];if(!this._shallow){const s=Ni(c);if(!Za(o)&&!Ni(o)&&(c=Ee(c),o=Ee(o)),!ge(a)&&mt(c)&&!mt(o))return s?!1:(c.value=o,!0)}const p=ge(a)&&Zo(n)?Number(n)<a.length:Fe(a,n),f=Reflect.set(a,n,o,r);return a===Ee(r)&&(p?Gt(o,c)&&ii(a,"set",n,o):ii(a,"add",n,o)),f}deleteProperty(a,n){const o=Fe(a,n);a[n];const r=Reflect.deleteProperty(a,n);return r&&o&&ii(a,"delete",n,void 0),r}has(a,n){const o=Reflect.has(a,n);return(!ki(n)||!Nc.has(n))&&xt(a,"has",n),o}ownKeys(a){return xt(a,"iterate",ge(a)?"length":Pi),Reflect.ownKeys(a)}}class Gc extends Oc{constructor(a=!1){super(!0,a)}set(a,n){return!0}deleteProperty(a,n){return!0}}const zp=new jc,Fp=new Gc,Pp=new jc(!0),Mp=new Gc(!0),ls=e=>e,gn=e=>Reflect.getPrototypeOf(e);function hl(e,a,n=!1,o=!1){e=e.__v_raw;const r=Ee(e),c=Ee(a);n||(Gt(a,c)&&xt(r,"get",a),xt(r,"get",c));const{has:p}=gn(r),f=o?ls:n?rs:el;if(p.call(r,a))return f(e.get(a));if(p.call(r,c))return f(e.get(c));e!==r&&e.get(a)}function _l(e,a=!1){const n=this.__v_raw,o=Ee(n),r=Ee(e);return a||(Gt(e,r)&&xt(o,"has",e),xt(o,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function bl(e,a=!1){return e=e.__v_raw,!a&&xt(Ee(e),"iterate",Pi),Reflect.get(e,"size",e)}function qs(e){e=Ee(e);const a=Ee(this);return gn(a).has.call(a,e)||(a.add(e),ii(a,"add",e,e)),this}function Us(e,a){a=Ee(a);const n=Ee(this),{has:o,get:r}=gn(n);let c=o.call(n,e);c||(e=Ee(e),c=o.call(n,e));const p=r.call(n,e);return n.set(e,a),c?Gt(a,p)&&ii(n,"set",e,a):ii(n,"add",e,a),this}function Ys(e){const a=Ee(this),{has:n,get:o}=gn(a);let r=n.call(a,e);r||(e=Ee(e),r=n.call(a,e)),o&&o.call(a,e);const c=a.delete(e);return r&&ii(a,"delete",e,void 0),c}function Js(){const e=Ee(this),a=e.size!==0,n=e.clear();return a&&ii(e,"clear",void 0,void 0),n}function vl(e,a){return function(o,r){const c=this,p=c.__v_raw,f=Ee(p),s=a?ls:e?rs:el;return!e&&xt(f,"iterate",Pi),p.forEach((u,g)=>o.call(r,s(u),s(g),c))}}function yl(e,a,n){return function(...o){const r=this.__v_raw,c=Ee(r),p=ra(c),f=e==="entries"||e===Symbol.iterator&&p,s=e==="keys"&&p,u=r[e](...o),g=n?ls:a?rs:el;return!a&&xt(c,"iterate",s?uo:Pi),{next(){const{value:m,done:h}=u.next();return h?{value:m,done:h}:{value:f?[g(m[0]),g(m[1])]:g(m),done:h}},[Symbol.iterator](){return this}}}}function ui(e){return function(...a){return e==="delete"?!1:e==="clear"?void 0:this}}function Vp(){const e={get(c){return hl(this,c)},get size(){return bl(this)},has:_l,add:qs,set:Us,delete:Ys,clear:Js,forEach:vl(!1,!1)},a={get(c){return hl(this,c,!1,!0)},get size(){return bl(this)},has:_l,add:qs,set:Us,delete:Ys,clear:Js,forEach:vl(!1,!0)},n={get(c){return hl(this,c,!0)},get size(){return bl(this,!0)},has(c){return _l.call(this,c,!0)},add:ui("add"),set:ui("set"),delete:ui("delete"),clear:ui("clear"),forEach:vl(!0,!1)},o={get(c){return hl(this,c,!0,!0)},get size(){return bl(this,!0)},has(c){return _l.call(this,c,!0)},add:ui("add"),set:ui("set"),delete:ui("delete"),clear:ui("clear"),forEach:vl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(c=>{e[c]=yl(c,!1,!1),n[c]=yl(c,!0,!1),a[c]=yl(c,!1,!0),o[c]=yl(c,!0,!0)}),[e,n,a,o]}const[Hp,Np,Op,jp]=Vp();function hn(e,a){const n=a?e?jp:Op:e?Np:Hp;return(o,r,c)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(Fe(n,r)&&r in o?n:o,r,c)}const Gp={get:hn(!1,!1)},qp={get:hn(!1,!0)},Up={get:hn(!0,!1)},Yp={get:hn(!0,!0)},qc=new WeakMap,Uc=new WeakMap,Yc=new WeakMap,Jc=new WeakMap;function Jp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wp(e){return e.__v_skip||!Object.isExtensible(e)?0:Jp(fp(e))}function oi(e){return Ni(e)?e:_n(e,!1,zp,Gp,qc)}function Wc(e){return _n(e,!1,Pp,qp,Uc)}function ns(e){return _n(e,!0,Fp,Up,Yc)}function Kp(e){return _n(e,!0,Mp,Yp,Jc)}function _n(e,a,n,o,r){if(!qe(e)||e.__v_raw&&!(a&&e.__v_isReactive))return e;const c=r.get(e);if(c)return c;const p=Wp(e);if(p===0)return e;const f=new Proxy(e,p===2?o:n);return r.set(e,f),f}function Mi(e){return Ni(e)?Mi(e.__v_raw):!!(e&&e.__v_isReactive)}function Ni(e){return!!(e&&e.__v_isReadonly)}function Za(e){return!!(e&&e.__v_isShallow)}function os(e){return Mi(e)||Ni(e)}function Ee(e){const a=e&&e.__v_raw;return a?Ee(a):e}function ss(e){return Fl(e,"__v_skip",!0),e}const el=e=>qe(e)?oi(e):e,rs=e=>qe(e)?ns(e):e;class Kc{constructor(a,n,o,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ba(()=>a(this._value),()=>ca(this,1),()=>this.dep&&Vc(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const a=Ee(this);return(!a._cacheable||a.effect.dirty)&&Gt(a._value,a._value=a.effect.run())&&ca(a,2),us(a),a.effect._dirtyLevel>=1&&ca(a,1),a._value}set value(a){this._setter(a)}get _dirty(){return this.effect.dirty}set _dirty(a){this.effect.dirty=a}}function Xp(e,a,n=!1){let o,r;const c=we(e);return c?(o=e,r=wt):(o=e.get,r=e.set),new Kc(o,r,c||!r,n)}function us(e){Si&&Fi&&(e=Ee(e),Pc(Fi,e.dep||(e.dep=Hc(()=>e.dep=void 0,e instanceof Kc?e:void 0))))}function ca(e,a=2,n){e=Ee(e);const o=e.dep;o&&Mc(o,a)}function mt(e){return!!(e&&e.__v_isRef===!0)}function G(e){return Qc(e,!1)}function Xc(e){return Qc(e,!0)}function Qc(e,a){return mt(e)?e:new Qp(e,a)}class Qp{constructor(a,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?a:Ee(a),this._value=n?a:el(a)}get value(){return us(this),this._value}set value(a){const n=this.__v_isShallow||Za(a)||Ni(a);a=n?a:Ee(a),Gt(a,this._rawValue)&&(this._rawValue=a,this._value=n?a:el(a),ca(this,2))}}function Zp(e){ca(e,2)}function d(e){return mt(e)?e.value:e}function ef(e){return we(e)?e():d(e)}const tf={get:(e,a,n)=>d(Reflect.get(e,a,n)),set:(e,a,n,o)=>{const r=e[a];return mt(r)&&!mt(n)?(r.value=n,!0):Reflect.set(e,a,n,o)}};function cs(e){return Mi(e)?e:new Proxy(e,tf)}class af{constructor(a){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:o}=a(()=>us(this),()=>ca(this));this._get=n,this._set=o}get value(){return this._get()}set value(a){this._set(a)}}function Zc(e){return new af(e)}function lf(e){const a=ge(e)?new Array(e.length):{};for(const n in e)a[n]=ed(e,n);return a}class nf{constructor(a,n,o){this._object=a,this._key=n,this._defaultValue=o,this.__v_isRef=!0}get value(){const a=this._object[this._key];return a===void 0?this._defaultValue:a}set value(a){this._object[this._key]=a}get dep(){return Dp(Ee(this._object),this._key)}}class of{constructor(a){this._getter=a,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function co(e,a,n){return mt(e)?e:we(e)?new of(e):qe(e)&&arguments.length>1?ed(e,a,n):G(e)}function ed(e,a,n){const o=e[a];return mt(o)?o:new nf(e,a,n)}const sf={GET:"get",HAS:"has",ITERATE:"iterate"},rf={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function uf(e,a){}const cf={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},df={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function ai(e,a,n,o){let r;try{r=o?e(...o):e()}catch(c){Qi(c,a,n)}return r}function Dt(e,a,n,o){if(we(e)){const c=ai(e,a,n,o);return c&&Qo(c)&&c.catch(p=>{Qi(p,a,n)}),c}const r=[];for(let c=0;c<e.length;c++)r.push(Dt(e[c],a,n,o));return r}function Qi(e,a,n,o=!0){const r=a?a.vnode:null;if(a){let c=a.parent;const p=a.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const u=c.ec;if(u){for(let g=0;g<u.length;g++)if(u[g](e,p,f)===!1)return}c=c.parent}const s=a.appContext.config.errorHandler;if(s){ai(s,null,10,[e,p,f]);return}}mf(e,n,r,o)}function mf(e,a,n,o=!0){console.error(e)}let tl=!1,mo=!1;const ft=[];let Yt=0;const da=[];let fi=null,Ri=0;const td=Promise.resolve();let ds=null;function Ta(e){const a=ds||td;return e?a.then(this?e.bind(this):e):a}function pf(e){let a=Yt+1,n=ft.length;for(;a<n;){const o=a+n>>>1,r=ft[o],c=il(r);c<e||c===e&&r.pre?a=o+1:n=o}return a}function bn(e){(!ft.length||!ft.includes(e,tl&&e.allowRecurse?Yt+1:Yt))&&(e.id==null?ft.push(e):ft.splice(pf(e.id),0,e),id())}function id(){!tl&&!mo&&(mo=!0,ds=td.then(ad))}function ff(e){const a=ft.indexOf(e);a>Yt&&ft.splice(a,1)}function Vl(e){ge(e)?da.push(...e):(!fi||!fi.includes(e,e.allowRecurse?Ri+1:Ri))&&da.push(e),id()}function Ws(e,a,n=tl?Yt+1:0){for(;n<ft.length;n++){const o=ft[n];if(o&&o.pre){if(e&&o.id!==e.uid)continue;ft.splice(n,1),n--,o()}}}function Hl(e){if(da.length){const a=[...new Set(da)].sort((n,o)=>il(n)-il(o));if(da.length=0,fi){fi.push(...a);return}for(fi=a,Ri=0;Ri<fi.length;Ri++)fi[Ri]();fi=null,Ri=0}}const il=e=>e.id==null?1/0:e.id,gf=(e,a)=>{const n=il(e)-il(a);if(n===0){if(e.pre&&!a.pre)return-1;if(a.pre&&!e.pre)return 1}return n};function ad(e){mo=!1,tl=!0,ft.sort(gf);try{for(Yt=0;Yt<ft.length;Yt++){const a=ft[Yt];a&&a.active!==!1&&ai(a,null,14)}}finally{Yt=0,ft.length=0,Hl(),tl=!1,ds=null,(ft.length||da.length)&&ad()}}let aa,Sl=[];function ld(e,a){var n,o;aa=e,aa?(aa.enabled=!0,Sl.forEach(({event:r,args:c})=>aa.emit(r,...c)),Sl=[]):typeof window<"u"&&window.HTMLElement&&!((o=(n=window.navigator)==null?void 0:n.userAgent)!=null&&o.includes("jsdom"))?((a.__VUE_DEVTOOLS_HOOK_REPLAY__=a.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(c=>{ld(c,a)}),setTimeout(()=>{aa||(a.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Sl=[])},3e3)):Sl=[]}function hf(e,a,...n){if(e.isUnmounted)return;const o=e.vnode.props||je;let r=n;const c=a.startsWith("update:"),p=c&&a.slice(7);if(p&&p in o){const g=`${p==="modelValue"?"model":p}Modifiers`,{number:m,trim:h}=o[g]||je;h&&(r=n.map(v=>Qe(v)?v.trim():v)),m&&(r=n.map(Qa))}let f,s=o[f=Ga(a)]||o[f=Ga(vt(a))];!s&&c&&(s=o[f=Ga(Lt(a))]),s&&Dt(s,e,6,r);const u=o[f+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[f])return;e.emitted[f]=!0,Dt(u,e,6,r)}}function nd(e,a,n=!1){const o=a.emitsCache,r=o.get(e);if(r!==void 0)return r;const c=e.emits;let p={},f=!1;if(!we(e)){const s=u=>{const g=nd(u,a,!0);g&&(f=!0,Xe(p,g))};!n&&a.mixins.length&&a.mixins.forEach(s),e.extends&&s(e.extends),e.mixins&&e.mixins.forEach(s)}return!c&&!f?(qe(e)&&o.set(e,null),null):(ge(c)?c.forEach(s=>p[s]=null):Xe(p,c),qe(e)&&o.set(e,p),p)}function vn(e,a){return!e||!cl(a)?!1:(a=a.slice(2).replace(/Once$/,""),Fe(e,a[0].toLowerCase()+a.slice(1))||Fe(e,Lt(a))||Fe(e,a))}let lt=null,yn=null;function al(e){const a=lt;return lt=e,yn=e&&e.type.__scopeId||null,a}function od(e){yn=e}function sd(){yn=null}const _f=e=>i;function i(e,a=lt,n){if(!a||e._n)return e;const o=(...r)=>{o._d&&yo(-1);const c=al(a);let p;try{p=e(...r)}finally{al(c),o._d&&yo(1)}return p};return o._n=!0,o._c=!0,o._d=!0,o}function Il(e){const{type:a,vnode:n,proxy:o,withProxy:r,props:c,propsOptions:[p],slots:f,attrs:s,emit:u,render:g,renderCache:m,data:h,setupState:v,ctx:b,inheritAttrs:C}=e;let k,T;const _=al(e);try{if(n.shapeFlag&4){const x=r||o,B=x;k=Tt(g.call(B,x,m,c,v,h,b)),T=s}else{const x=a;k=Tt(x.length>1?x(c,{attrs:s,slots:f,emit:u}):x(c,null)),T=a.props?s:vf(s)}}catch(x){Ya.length=0,Qi(x,e,1),k=t(ht)}let w=k;if(T&&C!==!1){const x=Object.keys(T),{shapeFlag:B}=w;x.length&&B&7&&(p&&x.some(Ko)&&(T=yf(T,p)),w=Jt(w,T))}return n.dirs&&(w=Jt(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),k=w,al(_),k}function bf(e,a=!0){let n;for(let o=0;o<e.length;o++){const r=e[o];if(Vt(r)){if(r.type!==ht||r.children==="v-if"){if(n)return;n=r}}else return}return n}const vf=e=>{let a;for(const n in e)(n==="class"||n==="style"||cl(n))&&((a||(a={}))[n]=e[n]);return a},yf=(e,a)=>{const n={};for(const o in e)(!Ko(o)||!(o.slice(9)in a))&&(n[o]=e[o]);return n};function Sf(e,a,n){const{props:o,children:r,component:c}=e,{props:p,children:f,patchFlag:s}=a,u=c.emitsOptions;if(a.dirs||a.transition)return!0;if(n&&s>=0){if(s&1024)return!0;if(s&16)return o?Ks(o,p,u):!!p;if(s&8){const g=a.dynamicProps;for(let m=0;m<g.length;m++){const h=g[m];if(p[h]!==o[h]&&!vn(u,h))return!0}}}else return(r||f)&&(!f||!f.$stable)?!0:o===p?!1:o?p?Ks(o,p,u):!0:!!p;return!1}function Ks(e,a,n){const o=Object.keys(a);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const c=o[r];if(a[c]!==e[c]&&!vn(n,c))return!0}return!1}function ms({vnode:e,parent:a},n){for(;a;){const o=a.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=a.vnode).el=n,a=a.parent;else break}}const ps="components",wf="directives";function y(e,a){return fs(ps,e,!0,a)||e}const rd=Symbol.for("v-ndc");function ud(e){return Qe(e)?fs(ps,e,!1)||e:e||rd}function Sn(e){return fs(wf,e)}function fs(e,a,n=!0,o=!1){const r=lt||ot;if(r){const c=r.type;if(e===ps){const f=ko(c,!1);if(f&&(f===a||f===vt(a)||f===dl(vt(a))))return c}const p=Xs(r[e]||c[e],a)||Xs(r.appContext[e],a);return!p&&o?c:p}}function Xs(e,a){return e&&(e[a]||e[vt(a)]||e[dl(vt(a))])}const cd=e=>e.__isSuspense;let po=0;const Cf={name:"Suspense",__isSuspense:!0,process(e,a,n,o,r,c,p,f,s,u){if(e==null)kf(a,n,o,r,c,p,f,s,u);else{if(c&&c.deps>0){a.suspense=e.suspense;return}xf(e,a,n,o,r,p,f,s,u)}},hydrate:$f,create:gs,normalize:Bf},Af=Cf;function ll(e,a){const n=e.props&&e.props[a];we(n)&&n()}function kf(e,a,n,o,r,c,p,f,s){const{p:u,o:{createElement:g}}=s,m=g("div"),h=e.suspense=gs(e,r,o,a,m,n,c,p,f,s);u(null,h.pendingBranch=e.ssContent,m,null,o,h,c,p),h.deps>0?(ll(e,"onPending"),ll(e,"onFallback"),u(null,e.ssFallback,a,n,o,null,c,p),ma(h,e.ssFallback)):h.resolve(!1,!0)}function xf(e,a,n,o,r,c,p,f,{p:s,um:u,o:{createElement:g}}){const m=a.suspense=e.suspense;m.vnode=a,a.el=e.el;const h=a.ssContent,v=a.ssFallback,{activeBranch:b,pendingBranch:C,isInFallback:k,isHydrating:T}=m;if(C)m.pendingBranch=h,jt(h,C)?(s(C,h,m.hiddenContainer,null,r,m,c,p,f),m.deps<=0?m.resolve():k&&(T||(s(b,v,n,o,r,null,c,p,f),ma(m,v)))):(m.pendingId=po++,T?(m.isHydrating=!1,m.activeBranch=C):u(C,r,m),m.deps=0,m.effects.length=0,m.hiddenContainer=g("div"),k?(s(null,h,m.hiddenContainer,null,r,m,c,p,f),m.deps<=0?m.resolve():(s(b,v,n,o,r,null,c,p,f),ma(m,v))):b&&jt(h,b)?(s(b,h,n,o,r,m,c,p,f),m.resolve(!0)):(s(null,h,m.hiddenContainer,null,r,m,c,p,f),m.deps<=0&&m.resolve()));else if(b&&jt(h,b))s(b,h,n,o,r,m,c,p,f),ma(m,h);else if(ll(a,"onPending"),m.pendingBranch=h,h.shapeFlag&512?m.pendingId=h.component.suspenseId:m.pendingId=po++,s(null,h,m.hiddenContainer,null,r,m,c,p,f),m.deps<=0)m.resolve();else{const{timeout:_,pendingId:w}=m;_>0?setTimeout(()=>{m.pendingId===w&&m.fallback(v)},_):_===0&&m.fallback(v)}}function gs(e,a,n,o,r,c,p,f,s,u,g=!1){const{p:m,m:h,um:v,n:b,o:{parentNode:C,remove:k}}=u;let T;const _=Tf(e);_&&a!=null&&a.pendingBranch&&(T=a.pendingId,a.deps++);const w=e.props?Pl(e.props.timeout):void 0,x=c,B={vnode:e,parent:a,parentComponent:n,namespace:p,container:o,hiddenContainer:r,deps:0,pendingId:po++,timeout:typeof w=="number"?w:-1,activeBranch:null,pendingBranch:null,isInFallback:!g,isHydrating:g,isUnmounted:!1,effects:[],resolve(I=!1,M=!1){const{vnode:V,activeBranch:P,pendingBranch:j,pendingId:X,effects:U,parentComponent:pe,container:Be}=B;let q=!1;B.isHydrating?B.isHydrating=!1:I||(q=P&&j.transition&&j.transition.mode==="out-in",q&&(P.transition.afterLeave=()=>{X===B.pendingId&&(h(j,Be,c===x?b(P):c,0),Vl(U))}),P&&(C(P.el)!==B.hiddenContainer&&(c=b(P)),v(P,pe,B,!0)),q||h(j,Be,c,0)),ma(B,j),B.pendingBranch=null,B.isInFallback=!1;let K=B.parent,de=!1;for(;K;){if(K.pendingBranch){K.effects.push(...U),de=!0;break}K=K.parent}!de&&!q&&Vl(U),B.effects=[],_&&a&&a.pendingBranch&&T===a.pendingId&&(a.deps--,a.deps===0&&!M&&a.resolve()),ll(V,"onResolve")},fallback(I){if(!B.pendingBranch)return;const{vnode:M,activeBranch:V,parentComponent:P,container:j,namespace:X}=B;ll(M,"onFallback");const U=b(V),pe=()=>{B.isInFallback&&(m(null,I,j,U,P,null,X,f,s),ma(B,I))},Be=I.transition&&I.transition.mode==="out-in";Be&&(V.transition.afterLeave=pe),B.isInFallback=!0,v(V,P,null,!0),Be||pe()},move(I,M,V){B.activeBranch&&h(B.activeBranch,I,M,V),B.container=I},next(){return B.activeBranch&&b(B.activeBranch)},registerDep(I,M){const V=!!B.pendingBranch;V&&B.deps++;const P=I.vnode.el;I.asyncDep.catch(j=>{Qi(j,I,0)}).then(j=>{if(I.isUnmounted||B.isUnmounted||B.pendingId!==I.suspenseId)return;I.asyncResolved=!0;const{vnode:X}=I;Co(I,j,!1),P&&(X.el=P);const U=!P&&I.subTree.el;M(I,X,C(P||I.subTree.el),P?null:b(I.subTree),B,p,s),U&&k(U),ms(I,X.el),V&&--B.deps===0&&B.resolve()})},unmount(I,M){B.isUnmounted=!0,B.activeBranch&&v(B.activeBranch,n,I,M),B.pendingBranch&&v(B.pendingBranch,n,I,M)}};return B}function $f(e,a,n,o,r,c,p,f,s){const u=a.suspense=gs(a,o,n,e.parentNode,document.createElement("div"),null,r,c,p,f,!0),g=s(e,u.pendingBranch=a.ssContent,n,u,c,p);return u.deps===0&&u.resolve(!1,!0),g}function Bf(e){const{shapeFlag:a,children:n}=e,o=a&32;e.ssContent=Qs(o?n.default:n),e.ssFallback=o?Qs(n.fallback):t(ht)}function Qs(e){let a;if(we(e)){const n=qi&&e._c;n&&(e._d=!1,$()),e=e(),n&&(e._d=!0,a=Ct,Od())}return ge(e)&&(e=bf(e)),e=Tt(e),a&&!e.dynamicChildren&&(e.dynamicChildren=a.filter(n=>n!==e)),e}function dd(e,a){a&&a.pendingBranch?ge(e)?a.effects.push(...e):a.effects.push(e):Vl(e)}function ma(e,a){e.activeBranch=a;const{vnode:n,parentComponent:o}=e;let r=a.el;for(;!r&&a.component;)a=a.component.subTree,r=a.el;n.el=r,o&&o.subTree===n&&(o.vnode.el=r,ms(o,r))}function Tf(e){var a;return((a=e.props)==null?void 0:a.suspensible)!=null&&e.props.suspensible!==!1}const md=Symbol.for("v-scx"),pd=()=>He(md);function hs(e,a){return pl(e,null,a)}function fd(e,a){return pl(e,null,{flush:"post"})}function gd(e,a){return pl(e,null,{flush:"sync"})}const wl={};function gt(e,a,n){return pl(e,a,n)}function pl(e,a,{immediate:n,deep:o,flush:r,once:c,onTrack:p,onTrigger:f}=je){if(a&&c){const I=a;a=(...M)=>{I(...M),B()}}const s=ot,u=I=>o===!0?I:zi(I,o===!1?1:void 0);let g,m=!1,h=!1;if(mt(e)?(g=()=>e.value,m=Za(e)):Mi(e)?(g=()=>u(e),m=!0):ge(e)?(h=!0,m=e.some(I=>Mi(I)||Za(I)),g=()=>e.map(I=>{if(mt(I))return I.value;if(Mi(I))return u(I);if(we(I))return ai(I,s,2)})):we(e)?a?g=()=>ai(e,s,2):g=()=>(v&&v(),Dt(e,s,3,[b])):g=wt,a&&o){const I=g;g=()=>zi(I())}let v,b=I=>{v=w.onStop=()=>{ai(I,s,4),v=w.onStop=void 0}},C;if(gl)if(b=wt,a?n&&Dt(a,s,3,[g(),h?[]:void 0,b]):g(),r==="sync"){const I=pd();C=I.__watcherHandles||(I.__watcherHandles=[])}else return wt;let k=h?new Array(e.length).fill(wl):wl;const T=()=>{if(!(!w.active||!w.dirty))if(a){const I=w.run();(o||m||(h?I.some((M,V)=>Gt(M,k[V])):Gt(I,k)))&&(v&&v(),Dt(a,s,3,[I,k===wl?void 0:h&&k[0]===wl?[]:k,b]),k=I)}else w.run()};T.allowRecurse=!!a;let _;r==="sync"?_=T:r==="post"?_=()=>ct(T,s&&s.suspense):(T.pre=!0,s&&(T.id=s.uid),_=()=>bn(T));const w=new ba(g,wt,_),x=ts(),B=()=>{w.stop(),x&&Xo(x.effects,w)};return a?n?T():k=w.run():r==="post"?ct(w.run.bind(w),s&&s.suspense):w.run(),C&&C.push(B),B}function Lf(e,a,n){const o=this.proxy,r=Qe(e)?e.includes(".")?hd(o,e):()=>o[e]:e.bind(o,o);let c;we(a)?c=a:(c=a.handler,n=a);const p=Ui(this),f=pl(r,c.bind(o),n);return p(),f}function hd(e,a){const n=a.split(".");return()=>{let o=e;for(let r=0;r<n.length&&o;r++)o=o[n[r]];return o}}function zi(e,a,n=0,o){if(!qe(e)||e.__v_skip)return e;if(a&&a>0){if(n>=a)return e;n++}if(o=o||new Set,o.has(e))return e;if(o.add(e),mt(e))zi(e.value,a,n,o);else if(ge(e))for(let r=0;r<e.length;r++)zi(e[r],a,n,o);else if(Wi(e)||ra(e))e.forEach(r=>{zi(r,a,n,o)});else if(Tc(e))for(const r in e)zi(e[r],a,n,o);return e}function wi(e,a){if(lt===null)return e;const n=Bn(lt)||lt.proxy,o=e.dirs||(e.dirs=[]);for(let r=0;r<a.length;r++){let[c,p,f,s=je]=a[r];c&&(we(c)&&(c={mounted:c,updated:c}),c.deep&&zi(p),o.push({dir:c,instance:n,value:p,oldValue:void 0,arg:f,modifiers:s}))}return e}function Ut(e,a,n,o){const r=e.dirs,c=a&&a.dirs;for(let p=0;p<r.length;p++){const f=r[p];c&&(f.oldValue=c[p].value);let s=f.dir[o];s&&(Ki(),Dt(s,n,8,[e.el,f,e,a]),Xi())}}const gi=Symbol("_leaveCb"),Cl=Symbol("_enterCb");function _s(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return $i(()=>{e.isMounted=!0}),kn(()=>{e.isUnmounting=!0}),e}const zt=[Function,Array],bs={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:zt,onEnter:zt,onAfterEnter:zt,onEnterCancelled:zt,onBeforeLeave:zt,onLeave:zt,onAfterLeave:zt,onLeaveCancelled:zt,onBeforeAppear:zt,onAppear:zt,onAfterAppear:zt,onAppearCancelled:zt},Df={name:"BaseTransition",props:bs,setup(e,{slots:a}){const n=Kt(),o=_s();let r;return()=>{const c=a.default&&wn(a.default(),!0);if(!c||!c.length)return;let p=c[0];if(c.length>1){for(const C of c)if(C.type!==ht){p=C;break}}const f=Ee(e),{mode:s}=f;if(o.isLeaving)return Pn(p);const u=Zs(p);if(!u)return Pn(p);const g=va(u,f,o,n);Oi(u,g);const m=n.subTree,h=m&&Zs(m);let v=!1;const{getTransitionKey:b}=u.type;if(b){const C=b();r===void 0?r=C:C!==r&&(r=C,v=!0)}if(h&&h.type!==ht&&(!jt(u,h)||v)){const C=va(h,f,o,n);if(Oi(h,C),s==="out-in")return o.isLeaving=!0,C.afterLeave=()=>{o.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Pn(p);s==="in-out"&&u.type!==ht&&(C.delayLeave=(k,T,_)=>{const w=bd(o,h);w[String(h.key)]=h,k[gi]=()=>{T(),k[gi]=void 0,delete g.delayedLeave},g.delayedLeave=_})}return p}}},_d=Df;function bd(e,a){const{leavingVNodes:n}=e;let o=n.get(a.type);return o||(o=Object.create(null),n.set(a.type,o)),o}function va(e,a,n,o){const{appear:r,mode:c,persisted:p=!1,onBeforeEnter:f,onEnter:s,onAfterEnter:u,onEnterCancelled:g,onBeforeLeave:m,onLeave:h,onAfterLeave:v,onLeaveCancelled:b,onBeforeAppear:C,onAppear:k,onAfterAppear:T,onAppearCancelled:_}=a,w=String(e.key),x=bd(n,e),B=(V,P)=>{V&&Dt(V,o,9,P)},I=(V,P)=>{const j=P[1];B(V,P),ge(V)?V.every(X=>X.length<=1)&&j():V.length<=1&&j()},M={mode:c,persisted:p,beforeEnter(V){let P=f;if(!n.isMounted)if(r)P=C||f;else return;V[gi]&&V[gi](!0);const j=x[w];j&&jt(e,j)&&j.el[gi]&&j.el[gi](),B(P,[V])},enter(V){let P=s,j=u,X=g;if(!n.isMounted)if(r)P=k||s,j=T||u,X=_||g;else return;let U=!1;const pe=V[Cl]=Be=>{U||(U=!0,Be?B(X,[V]):B(j,[V]),M.delayedLeave&&M.delayedLeave(),V[Cl]=void 0)};P?I(P,[V,pe]):pe()},leave(V,P){const j=String(e.key);if(V[Cl]&&V[Cl](!0),n.isUnmounting)return P();B(m,[V]);let X=!1;const U=V[gi]=pe=>{X||(X=!0,P(),pe?B(b,[V]):B(v,[V]),V[gi]=void 0,x[j]===e&&delete x[j])};x[j]=e,h?I(h,[V,U]):U()},clone(V){return va(V,a,n,o)}};return M}function Pn(e){if(fl(e))return e=Jt(e),e.children=null,e}function Zs(e){return fl(e)?e.children?e.children[0]:void 0:e}function Oi(e,a){e.shapeFlag&6&&e.component?Oi(e.component.subTree,a):e.shapeFlag&128?(e.ssContent.transition=a.clone(e.ssContent),e.ssFallback.transition=a.clone(e.ssFallback)):e.transition=a}function wn(e,a=!1,n){let o=[],r=0;for(let c=0;c<e.length;c++){let p=e[c];const f=n==null?p.key:String(n)+String(p.key!=null?p.key:c);p.type===Ce?(p.patchFlag&128&&r++,o=o.concat(wn(p.children,a,f))):(a||p.type!==ht)&&o.push(f!=null?Jt(p,{key:f}):p)}if(r>1)for(let c=0;c<o.length;c++)o[c].patchFlag=-2;return o}/*! #__NO_SIDE_EFFECTS__ */function z(e,a){return we(e)?Xe({name:e.name},a,{setup:e}):e}const Vi=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function If(e){we(e)&&(e={loader:e});const{loader:a,loadingComponent:n,errorComponent:o,delay:r=200,timeout:c,suspensible:p=!0,onError:f}=e;let s=null,u,g=0;const m=()=>(g++,s=null,h()),h=()=>{let v;return s||(v=s=a().catch(b=>{if(b=b instanceof Error?b:new Error(String(b)),f)return new Promise((C,k)=>{f(b,()=>C(m()),()=>k(b),g+1)});throw b}).then(b=>v!==s&&s?s:(b&&(b.__esModule||b[Symbol.toStringTag]==="Module")&&(b=b.default),u=b,b)))};return z({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return u},setup(){const v=ot;if(u)return()=>Mn(u,v);const b=_=>{s=null,Qi(_,v,13,!o)};if(p&&v.suspense||gl)return h().then(_=>()=>Mn(_,v)).catch(_=>(b(_),()=>o?t(o,{error:_}):null));const C=G(!1),k=G(),T=G(!!r);return r&&setTimeout(()=>{T.value=!1},r),c!=null&&setTimeout(()=>{if(!C.value&&!k.value){const _=new Error(`Async component timed out after ${c}ms.`);b(_),k.value=_}},c),h().then(()=>{C.value=!0,v.parent&&fl(v.parent.vnode)&&(v.parent.effect.dirty=!0,bn(v.parent.update))}).catch(_=>{b(_),k.value=_}),()=>{if(C.value&&u)return Mn(u,v);if(k.value&&o)return t(o,{error:k.value});if(n&&!T.value)return t(n)}}})}function Mn(e,a){const{ref:n,props:o,children:r,ce:c}=a.vnode,p=t(e,o,r);return p.ref=n,p.ce=c,delete a.vnode.ce,p}const fl=e=>e.type.__isKeepAlive,Ef={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:a}){const n=Kt(),o=n.ctx;if(!o.renderer)return()=>{const _=a.default&&a.default();return _&&_.length===1?_[0]:_};const r=new Map,c=new Set;let p=null;const f=n.suspense,{renderer:{p:s,m:u,um:g,o:{createElement:m}}}=o,h=m("div");o.activate=(_,w,x,B,I)=>{const M=_.component;u(_,w,x,0,f),s(M.vnode,_,w,x,M,f,B,_.slotScopeIds,I),ct(()=>{M.isDeactivated=!1,M.a&&ua(M.a);const V=_.props&&_.props.onVnodeMounted;V&&yt(V,M.parent,_)},f)},o.deactivate=_=>{const w=_.component;u(_,h,null,1,f),ct(()=>{w.da&&ua(w.da);const x=_.props&&_.props.onVnodeUnmounted;x&&yt(x,w.parent,_),w.isDeactivated=!0},f)};function v(_){Vn(_),g(_,n,f,!0)}function b(_){r.forEach((w,x)=>{const B=ko(w.type);B&&(!_||!_(B))&&C(x)})}function C(_){const w=r.get(_);!p||!jt(w,p)?v(w):p&&Vn(p),r.delete(_),c.delete(_)}gt(()=>[e.include,e.exclude],([_,w])=>{_&&b(x=>Ma(_,x)),w&&b(x=>!Ma(w,x))},{flush:"post",deep:!0});let k=null;const T=()=>{k!=null&&r.set(k,Hn(n.subTree))};return $i(T),An(T),kn(()=>{r.forEach(_=>{const{subTree:w,suspense:x}=n,B=Hn(w);if(_.type===B.type&&_.key===B.key){Vn(B);const I=B.component.da;I&&ct(I,x);return}v(_)})}),()=>{if(k=null,!a.default)return null;const _=a.default(),w=_[0];if(_.length>1)return p=null,_;if(!Vt(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return p=null,w;let x=Hn(w);const B=x.type,I=ko(Vi(x)?x.type.__asyncResolved||{}:B),{include:M,exclude:V,max:P}=e;if(M&&(!I||!Ma(M,I))||V&&I&&Ma(V,I))return p=x,w;const j=x.key==null?B:x.key,X=r.get(j);return x.el&&(x=Jt(x),w.shapeFlag&128&&(w.ssContent=x)),k=j,X?(x.el=X.el,x.component=X.component,x.transition&&Oi(x,x.transition),x.shapeFlag|=512,c.delete(j),c.add(j)):(c.add(j),P&&c.size>parseInt(P,10)&&C(c.values().next().value)),x.shapeFlag|=256,p=x,cd(w.type)?w:x}}},Rf=Ef;function Ma(e,a){return ge(e)?e.some(n=>Ma(n,a)):Qe(e)?e.split(",").includes(a):pp(e)?e.test(a):!1}function vs(e,a){vd(e,"a",a)}function ys(e,a){vd(e,"da",a)}function vd(e,a,n=ot){const o=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Cn(a,o,n),n){let r=n.parent;for(;r&&r.parent;)fl(r.parent.vnode)&&zf(o,a,n,r),r=r.parent}}function zf(e,a,n,o){const r=Cn(a,e,o,!0);Zi(()=>{Xo(o[a],r)},n)}function Vn(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Hn(e){return e.shapeFlag&128?e.ssContent:e}function Cn(e,a,n=ot,o=!1){if(n){const r=n[e]||(n[e]=[]),c=a.__weh||(a.__weh=(...p)=>{if(n.isUnmounted)return;Ki();const f=Ui(n),s=Dt(a,n,e,p);return f(),Xi(),s});return o?r.unshift(c):r.push(c),c}}const si=e=>(a,n=ot)=>(!gl||e==="sp")&&Cn(e,(...o)=>a(...o),n),yd=si("bm"),$i=si("m"),Sd=si("bu"),An=si("u"),kn=si("bum"),Zi=si("um"),wd=si("sp"),Cd=si("rtg"),Ad=si("rtc");function kd(e,a=ot){Cn("ec",e,a)}function et(e,a,n,o){let r;const c=n&&n[o];if(ge(e)||Qe(e)){r=new Array(e.length);for(let p=0,f=e.length;p<f;p++)r[p]=a(e[p],p,void 0,c&&c[p])}else if(typeof e=="number"){r=new Array(e);for(let p=0;p<e;p++)r[p]=a(p+1,p,void 0,c&&c[p])}else if(qe(e))if(e[Symbol.iterator])r=Array.from(e,(p,f)=>a(p,f,void 0,c&&c[f]));else{const p=Object.keys(e);r=new Array(p.length);for(let f=0,s=p.length;f<s;f++){const u=p[f];r[f]=a(e[u],u,f,c&&c[f])}}else r=[];return n&&(n[o]=r),r}function Ff(e,a){for(let n=0;n<a.length;n++){const o=a[n];if(ge(o))for(let r=0;r<o.length;r++)e[o[r].name]=o[r].fn;else o&&(e[o.name]=o.key?(...r)=>{const c=o.fn(...r);return c&&(c.key=o.key),c}:o.fn)}return e}function ji(e,a,n={},o,r){if(lt.isCE||lt.parent&&Vi(lt.parent)&&lt.parent.isCE)return a!=="default"&&(n.name=a),t("slot",n,o&&o());let c=e[a];c&&c._c&&(c._d=!1),$();const p=c&&xd(c(n)),f=D(Ce,{key:n.key||p&&p.key||`_${a}`},p||(o?o():[]),p&&e._===1?64:-2);return!r&&f.scopeId&&(f.slotScopeIds=[f.scopeId+"-s"]),c&&c._c&&(c._d=!0),f}function xd(e){return e.some(a=>Vt(a)?!(a.type===ht||a.type===Ce&&!xd(a.children)):!0)?e:null}function Pf(e,a){const n={};for(const o in e)n[a&&/[A-Z]/.test(o)?`on:${o}`:Ga(o)]=e[o];return n}const fo=e=>e?Yd(e)?Bn(e)||e.proxy:fo(e.parent):null,qa=Xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>fo(e.parent),$root:e=>fo(e.root),$emit:e=>e.emit,$options:e=>Ss(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,bn(e.update)}),$nextTick:e=>e.n||(e.n=Ta.bind(e.proxy)),$watch:e=>Lf.bind(e)}),Nn=(e,a)=>e!==je&&!e.__isScriptSetup&&Fe(e,a),go={get({_:e},a){const{ctx:n,setupState:o,data:r,props:c,accessCache:p,type:f,appContext:s}=e;let u;if(a[0]!=="$"){const v=p[a];if(v!==void 0)switch(v){case 1:return o[a];case 2:return r[a];case 4:return n[a];case 3:return c[a]}else{if(Nn(o,a))return p[a]=1,o[a];if(r!==je&&Fe(r,a))return p[a]=2,r[a];if((u=e.propsOptions[0])&&Fe(u,a))return p[a]=3,c[a];if(n!==je&&Fe(n,a))return p[a]=4,n[a];ho&&(p[a]=0)}}const g=qa[a];let m,h;if(g)return a==="$attrs"&&xt(e,"get",a),g(e);if((m=f.__cssModules)&&(m=m[a]))return m;if(n!==je&&Fe(n,a))return p[a]=4,n[a];if(h=s.config.globalProperties,Fe(h,a))return h[a]},set({_:e},a,n){const{data:o,setupState:r,ctx:c}=e;return Nn(r,a)?(r[a]=n,!0):o!==je&&Fe(o,a)?(o[a]=n,!0):Fe(e.props,a)||a[0]==="$"&&a.slice(1)in e?!1:(c[a]=n,!0)},has({_:{data:e,setupState:a,accessCache:n,ctx:o,appContext:r,propsOptions:c}},p){let f;return!!n[p]||e!==je&&Fe(e,p)||Nn(a,p)||(f=c[0])&&Fe(f,p)||Fe(o,p)||Fe(qa,p)||Fe(r.config.globalProperties,p)},defineProperty(e,a,n){return n.get!=null?e._.accessCache[a]=0:Fe(n,"value")&&this.set(e,a,n.value,null),Reflect.defineProperty(e,a,n)}},Mf=Xe({},go,{get(e,a){if(a!==Symbol.unscopables)return go.get(e,a,e)},has(e,a){return a[0]!=="_"&&!bp(a)}});function Vf(){return null}function Hf(){return null}function Nf(e){}function Of(e){}function jf(){return null}function Gf(){}function qf(e,a){return null}function Uf(){return Bd().slots}function $d(){return Bd().attrs}function Bd(){const e=Kt();return e.setupContext||(e.setupContext=Kd(e))}function nl(e){return ge(e)?e.reduce((a,n)=>(a[n]=null,a),{}):e}function Yf(e,a){const n=nl(e);for(const o in a){if(o.startsWith("__skip"))continue;let r=n[o];r?ge(r)||we(r)?r=n[o]={type:r,default:a[o]}:r.default=a[o]:r===null&&(r=n[o]={default:a[o]}),r&&a[`__skip_${o}`]&&(r.skipFactory=!0)}return n}function Jf(e,a){return!e||!a?e||a:ge(e)&&ge(a)?e.concat(a):Xe({},nl(e),nl(a))}function Wf(e,a){const n={};for(const o in e)a.includes(o)||Object.defineProperty(n,o,{enumerable:!0,get:()=>e[o]});return n}function Kf(e){const a=Kt();let n=e();return wo(),Qo(n)&&(n=n.catch(o=>{throw Ui(a),o})),[n,()=>Ui(a)]}let ho=!0;function Xf(e){const a=Ss(e),n=e.proxy,o=e.ctx;ho=!1,a.beforeCreate&&er(a.beforeCreate,e,"bc");const{data:r,computed:c,methods:p,watch:f,provide:s,inject:u,created:g,beforeMount:m,mounted:h,beforeUpdate:v,updated:b,activated:C,deactivated:k,beforeDestroy:T,beforeUnmount:_,destroyed:w,unmounted:x,render:B,renderTracked:I,renderTriggered:M,errorCaptured:V,serverPrefetch:P,expose:j,inheritAttrs:X,components:U,directives:pe,filters:Be}=a;if(u&&Qf(u,o,null),p)for(const de in p){const ie=p[de];we(ie)&&(o[de]=ie.bind(n))}if(r){const de=r.call(n,n);qe(de)&&(e.data=oi(de))}if(ho=!0,c)for(const de in c){const ie=c[de],De=we(ie)?ie.bind(n,n):we(ie.get)?ie.get.bind(n,n):wt,We=!we(ie)&&we(ie.set)?ie.set.bind(n):wt,st=H({get:De,set:We});Object.defineProperty(o,de,{enumerable:!0,configurable:!0,get:()=>st.value,set:Ue=>st.value=Ue})}if(f)for(const de in f)Td(f[de],o,n,de);if(s){const de=we(s)?s.call(n):s;Reflect.ownKeys(de).forEach(ie=>{dt(ie,de[ie])})}g&&er(g,e,"c");function K(de,ie){ge(ie)?ie.forEach(De=>de(De.bind(n))):ie&&de(ie.bind(n))}if(K(yd,m),K($i,h),K(Sd,v),K(An,b),K(vs,C),K(ys,k),K(kd,V),K(Ad,I),K(Cd,M),K(kn,_),K(Zi,x),K(wd,P),ge(j))if(j.length){const de=e.exposed||(e.exposed={});j.forEach(ie=>{Object.defineProperty(de,ie,{get:()=>n[ie],set:De=>n[ie]=De})})}else e.exposed||(e.exposed={});B&&e.render===wt&&(e.render=B),X!=null&&(e.inheritAttrs=X),U&&(e.components=U),pe&&(e.directives=pe)}function Qf(e,a,n=wt){ge(e)&&(e=_o(e));for(const o in e){const r=e[o];let c;qe(r)?"default"in r?c=He(r.from||o,r.default,!0):c=He(r.from||o):c=He(r),mt(c)?Object.defineProperty(a,o,{enumerable:!0,configurable:!0,get:()=>c.value,set:p=>c.value=p}):a[o]=c}}function er(e,a,n){Dt(ge(e)?e.map(o=>o.bind(a.proxy)):e.bind(a.proxy),a,n)}function Td(e,a,n,o){const r=o.includes(".")?hd(n,o):()=>n[o];if(Qe(e)){const c=a[e];we(c)&&gt(r,c)}else if(we(e))gt(r,e.bind(n));else if(qe(e))if(ge(e))e.forEach(c=>Td(c,a,n,o));else{const c=we(e.handler)?e.handler.bind(n):a[e.handler];we(c)&&gt(r,c,e)}}function Ss(e){const a=e.type,{mixins:n,extends:o}=a,{mixins:r,optionsCache:c,config:{optionMergeStrategies:p}}=e.appContext,f=c.get(a);let s;return f?s=f:!r.length&&!n&&!o?s=a:(s={},r.length&&r.forEach(u=>Nl(s,u,p,!0)),Nl(s,a,p)),qe(a)&&c.set(a,s),s}function Nl(e,a,n,o=!1){const{mixins:r,extends:c}=a;c&&Nl(e,c,n,!0),r&&r.forEach(p=>Nl(e,p,n,!0));for(const p in a)if(!(o&&p==="expose")){const f=Zf[p]||n&&n[p];e[p]=f?f(e[p],a[p]):a[p]}return e}const Zf={data:tr,props:ir,emits:ir,methods:Va,computed:Va,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:Va,directives:Va,watch:tg,provide:tr,inject:eg};function tr(e,a){return a?e?function(){return Xe(we(e)?e.call(this,this):e,we(a)?a.call(this,this):a)}:a:e}function eg(e,a){return Va(_o(e),_o(a))}function _o(e){if(ge(e)){const a={};for(let n=0;n<e.length;n++)a[e[n]]=e[n];return a}return e}function bt(e,a){return e?[...new Set([].concat(e,a))]:a}function Va(e,a){return e?Xe(Object.create(null),e,a):a}function ir(e,a){return e?ge(e)&&ge(a)?[...new Set([...e,...a])]:Xe(Object.create(null),nl(e),nl(a??{})):a}function tg(e,a){if(!e)return a;if(!a)return e;const n=Xe(Object.create(null),e);for(const o in a)n[o]=bt(e[o],a[o]);return n}function Ld(){return{app:null,config:{isNativeTag:dp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ig=0;function ag(e,a){return function(o,r=null){we(o)||(o=Xe({},o)),r!=null&&!qe(r)&&(r=null);const c=Ld(),p=new WeakSet;let f=!1;const s=c.app={_uid:ig++,_component:o,_props:r,_container:null,_context:c,_instance:null,version:Qd,get config(){return c.config},set config(u){},use(u,...g){return p.has(u)||(u&&we(u.install)?(p.add(u),u.install(s,...g)):we(u)&&(p.add(u),u(s,...g))),s},mixin(u){return c.mixins.includes(u)||c.mixins.push(u),s},component(u,g){return g?(c.components[u]=g,s):c.components[u]},directive(u,g){return g?(c.directives[u]=g,s):c.directives[u]},mount(u,g,m){if(!f){const h=t(o,r);return h.appContext=c,m===!0?m="svg":m===!1&&(m=void 0),g&&a?a(h,u):e(h,u,m),f=!0,s._container=u,u.__vue_app__=s,Bn(h.component)||h.component.proxy}},unmount(){f&&(e(null,s._container),delete s._container.__vue_app__)},provide(u,g){return c.provides[u]=g,s},runWithContext(u){ol=s;try{return u()}finally{ol=null}}};return s}}let ol=null;function dt(e,a){if(ot){let n=ot.provides;const o=ot.parent&&ot.parent.provides;o===n&&(n=ot.provides=Object.create(o)),n[e]=a}}function He(e,a,n=!1){const o=ot||lt;if(o||ol){const r=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:ol._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&we(a)?a.call(o&&o.proxy):a}}function lg(){return!!(ot||lt||ol)}function ng(e,a,n,o=!1){const r={},c={};Fl(c,$n,1),e.propsDefaults=Object.create(null),Dd(e,a,r,c);for(const p in e.propsOptions[0])p in r||(r[p]=void 0);n?e.props=o?r:Wc(r):e.type.props?e.props=r:e.props=c,e.attrs=c}function og(e,a,n,o){const{props:r,attrs:c,vnode:{patchFlag:p}}=e,f=Ee(r),[s]=e.propsOptions;let u=!1;if((o||p>0)&&!(p&16)){if(p&8){const g=e.vnode.dynamicProps;for(let m=0;m<g.length;m++){let h=g[m];if(vn(e.emitsOptions,h))continue;const v=a[h];if(s)if(Fe(c,h))v!==c[h]&&(c[h]=v,u=!0);else{const b=vt(h);r[b]=bo(s,f,b,v,e,!1)}else v!==c[h]&&(c[h]=v,u=!0)}}}else{Dd(e,a,r,c)&&(u=!0);let g;for(const m in f)(!a||!Fe(a,m)&&((g=Lt(m))===m||!Fe(a,g)))&&(s?n&&(n[m]!==void 0||n[g]!==void 0)&&(r[m]=bo(s,f,m,void 0,e,!0)):delete r[m]);if(c!==f)for(const m in c)(!a||!Fe(a,m))&&(delete c[m],u=!0)}u&&ii(e,"set","$attrs")}function Dd(e,a,n,o){const[r,c]=e.propsOptions;let p=!1,f;if(a)for(let s in a){if(ja(s))continue;const u=a[s];let g;r&&Fe(r,g=vt(s))?!c||!c.includes(g)?n[g]=u:(f||(f={}))[g]=u:vn(e.emitsOptions,s)||(!(s in o)||u!==o[s])&&(o[s]=u,p=!0)}if(c){const s=Ee(n),u=f||je;for(let g=0;g<c.length;g++){const m=c[g];n[m]=bo(r,s,m,u[m],e,!Fe(u,m))}}return p}function bo(e,a,n,o,r,c){const p=e[n];if(p!=null){const f=Fe(p,"default");if(f&&o===void 0){const s=p.default;if(p.type!==Function&&!p.skipFactory&&we(s)){const{propsDefaults:u}=r;if(n in u)o=u[n];else{const g=Ui(r);o=u[n]=s.call(null,a),g()}}else o=s}p[0]&&(c&&!f?o=!1:p[1]&&(o===""||o===Lt(n))&&(o=!0))}return o}function Id(e,a,n=!1){const o=a.propsCache,r=o.get(e);if(r)return r;const c=e.props,p={},f=[];let s=!1;if(!we(e)){const g=m=>{s=!0;const[h,v]=Id(m,a,!0);Xe(p,h),v&&f.push(...v)};!n&&a.mixins.length&&a.mixins.forEach(g),e.extends&&g(e.extends),e.mixins&&e.mixins.forEach(g)}if(!c&&!s)return qe(e)&&o.set(e,sa),sa;if(ge(c))for(let g=0;g<c.length;g++){const m=vt(c[g]);ar(m)&&(p[m]=je)}else if(c)for(const g in c){const m=vt(g);if(ar(m)){const h=c[g],v=p[m]=ge(h)||we(h)?{type:h}:Xe({},h);if(v){const b=or(Boolean,v.type),C=or(String,v.type);v[0]=b>-1,v[1]=C<0||b<C,(b>-1||Fe(v,"default"))&&f.push(m)}}}const u=[p,f];return qe(e)&&o.set(e,u),u}function ar(e){return e[0]!=="$"}function lr(e){const a=e&&e.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:e===null?"null":""}function nr(e,a){return lr(e)===lr(a)}function or(e,a){return ge(a)?a.findIndex(n=>nr(n,e)):we(a)&&nr(a,e)?0:-1}const Ed=e=>e[0]==="_"||e==="$stable",ws=e=>ge(e)?e.map(Tt):[Tt(e)],sg=(e,a,n)=>{if(a._n)return a;const o=i((...r)=>ws(a(...r)),n);return o._c=!1,o},Rd=(e,a,n)=>{const o=e._ctx;for(const r in e){if(Ed(r))continue;const c=e[r];if(we(c))a[r]=sg(r,c,o);else if(c!=null){const p=ws(c);a[r]=()=>p}}},zd=(e,a)=>{const n=ws(a);e.slots.default=()=>n},rg=(e,a)=>{if(e.vnode.shapeFlag&32){const n=a._;n?(e.slots=Ee(a),Fl(a,"_",n)):Rd(a,e.slots={})}else e.slots={},a&&zd(e,a);Fl(e.slots,$n,1)},ug=(e,a,n)=>{const{vnode:o,slots:r}=e;let c=!0,p=je;if(o.shapeFlag&32){const f=a._;f?n&&f===1?c=!1:(Xe(r,a),!n&&f===1&&delete r._):(c=!a.$stable,Rd(a,r)),p=a}else a&&(zd(e,a),p={default:1});if(c)for(const f in r)!Ed(f)&&p[f]==null&&delete r[f]};function Ol(e,a,n,o,r=!1){if(ge(e)){e.forEach((h,v)=>Ol(h,a&&(ge(a)?a[v]:a),n,o,r));return}if(Vi(o)&&!r)return;const c=o.shapeFlag&4?Bn(o.component)||o.component.proxy:o.el,p=r?null:c,{i:f,r:s}=e,u=a&&a.r,g=f.refs===je?f.refs={}:f.refs,m=f.setupState;if(u!=null&&u!==s&&(Qe(u)?(g[u]=null,Fe(m,u)&&(m[u]=null)):mt(u)&&(u.value=null)),we(s))ai(s,f,12,[p,g]);else{const h=Qe(s),v=mt(s),b=e.f;if(h||v){const C=()=>{if(b){const k=h?Fe(m,s)?m[s]:g[s]:s.value;r?ge(k)&&Xo(k,c):ge(k)?k.includes(c)||k.push(c):h?(g[s]=[c],Fe(m,s)&&(m[s]=g[s])):(s.value=[c],e.k&&(g[e.k]=s.value))}else h?(g[s]=p,Fe(m,s)&&(m[s]=p)):v&&(s.value=p,e.k&&(g[e.k]=p))};r||b?C():(C.id=-1,ct(C,n))}}}let ci=!1;const cg=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",dg=e=>e.namespaceURI.includes("MathML"),Al=e=>{if(cg(e))return"svg";if(dg(e))return"mathml"},kl=e=>e.nodeType===8;function mg(e){const{mt:a,p:n,o:{patchProp:o,createText:r,nextSibling:c,parentNode:p,remove:f,insert:s,createComment:u}}=e,g=(w,x)=>{if(!x.hasChildNodes()){n(null,w,x),Hl(),x._vnode=w;return}ci=!1,m(x.firstChild,w,null,null,null),Hl(),x._vnode=w,ci&&console.error("Hydration completed but contains mismatches.")},m=(w,x,B,I,M,V=!1)=>{const P=kl(w)&&w.data==="[",j=()=>C(w,x,B,I,M,P),{type:X,ref:U,shapeFlag:pe,patchFlag:Be}=x;let q=w.nodeType;x.el=w,Be===-2&&(V=!1,x.dynamicChildren=null);let K=null;switch(X){case Gi:q!==3?x.children===""?(s(x.el=r(""),p(w),w),K=w):K=j():(w.data!==x.children&&(ci=!0,w.data=x.children),K=c(w));break;case ht:_(w)?(K=c(w),T(x.el=w.content.firstChild,w,B)):q!==8||P?K=j():K=c(w);break;case Hi:if(P&&(w=c(w),q=w.nodeType),q===1||q===3){K=w;const de=!x.children.length;for(let ie=0;ie<x.staticCount;ie++)de&&(x.children+=K.nodeType===1?K.outerHTML:K.data),ie===x.staticCount-1&&(x.anchor=K),K=c(K);return P?c(K):K}else j();break;case Ce:P?K=b(w,x,B,I,M,V):K=j();break;default:if(pe&1)(q!==1||x.type.toLowerCase()!==w.tagName.toLowerCase())&&!_(w)?K=j():K=h(w,x,B,I,M,V);else if(pe&6){x.slotScopeIds=M;const de=p(w);if(P?K=k(w):kl(w)&&w.data==="teleport start"?K=k(w,w.data,"teleport end"):K=c(w),a(x,de,null,B,I,Al(de),V),Vi(x)){let ie;P?(ie=t(Ce),ie.anchor=K?K.previousSibling:de.lastChild):ie=w.nodeType===3?l(""):t("div"),ie.el=w,x.component.subTree=ie}}else pe&64?q!==8?K=j():K=x.type.hydrate(w,x,B,I,M,V,e,v):pe&128&&(K=x.type.hydrate(w,x,B,I,Al(p(w)),M,V,e,m))}return U!=null&&Ol(U,null,I,x),K},h=(w,x,B,I,M,V)=>{V=V||!!x.dynamicChildren;const{type:P,props:j,patchFlag:X,shapeFlag:U,dirs:pe,transition:Be}=x,q=P==="input"||P==="option";if(q||X!==-1){pe&&Ut(x,null,B,"created");let K=!1;if(_(w)){K=Vd(I,Be)&&B&&B.vnode.props&&B.vnode.props.appear;const ie=w.content.firstChild;K&&Be.beforeEnter(ie),T(ie,w,B),x.el=w=ie}if(U&16&&!(j&&(j.innerHTML||j.textContent))){let ie=v(w.firstChild,x,w,B,I,M,V);for(;ie;){ci=!0;const De=ie;ie=ie.nextSibling,f(De)}}else U&8&&w.textContent!==x.children&&(ci=!0,w.textContent=x.children);if(j)if(q||!V||X&48)for(const ie in j)(q&&(ie.endsWith("value")||ie==="indeterminate")||cl(ie)&&!ja(ie)||ie[0]===".")&&o(w,ie,null,j[ie],void 0,void 0,B);else j.onClick&&o(w,"onClick",null,j.onClick,void 0,void 0,B);let de;(de=j&&j.onVnodeBeforeMount)&&yt(de,B,x),pe&&Ut(x,null,B,"beforeMount"),((de=j&&j.onVnodeMounted)||pe||K)&&dd(()=>{de&&yt(de,B,x),K&&Be.enter(w),pe&&Ut(x,null,B,"mounted")},I)}return w.nextSibling},v=(w,x,B,I,M,V,P)=>{P=P||!!x.dynamicChildren;const j=x.children,X=j.length;for(let U=0;U<X;U++){const pe=P?j[U]:j[U]=Tt(j[U]);if(w)w=m(w,pe,I,M,V,P);else{if(pe.type===Gi&&!pe.children)continue;ci=!0,n(null,pe,B,null,I,M,Al(B),V)}}return w},b=(w,x,B,I,M,V)=>{const{slotScopeIds:P}=x;P&&(M=M?M.concat(P):P);const j=p(w),X=v(c(w),x,j,B,I,M,V);return X&&kl(X)&&X.data==="]"?c(x.anchor=X):(ci=!0,s(x.anchor=u("]"),j,X),X)},C=(w,x,B,I,M,V)=>{if(ci=!0,x.el=null,V){const X=k(w);for(;;){const U=c(w);if(U&&U!==X)f(U);else break}}const P=c(w),j=p(w);return f(w),n(null,x,j,P,B,I,Al(j),M),P},k=(w,x="[",B="]")=>{let I=0;for(;w;)if(w=c(w),w&&kl(w)&&(w.data===x&&I++,w.data===B)){if(I===0)return c(w);I--}return w},T=(w,x,B)=>{const I=x.parentNode;I&&I.replaceChild(w,x);let M=B;for(;M;)M.vnode.el===x&&(M.vnode.el=M.subTree.el=w),M=M.parent},_=w=>w.nodeType===1&&w.tagName.toLowerCase()==="template";return[g,m]}const ct=dd;function Fd(e){return Md(e)}function Pd(e){return Md(e,mg)}function Md(e,a){const n=Lc();n.__VUE__=!0;const{insert:o,remove:r,patchProp:c,createElement:p,createText:f,createComment:s,setText:u,setElementText:g,parentNode:m,nextSibling:h,setScopeId:v=wt,insertStaticContent:b}=e,C=(L,E,O,Q=null,Z=null,le=null,re=void 0,ae=null,ne=!!E.dynamicChildren)=>{if(L===E)return;L&&!jt(L,E)&&(Q=oe(L),Ue(L,Z,le,!0),L=null),E.patchFlag===-2&&(ne=!1,E.dynamicChildren=null);const{type:te,ref:me,shapeFlag:ye}=E;switch(te){case Gi:k(L,E,O,Q);break;case ht:T(L,E,O,Q);break;case Hi:L==null&&_(E,O,Q,re);break;case Ce:U(L,E,O,Q,Z,le,re,ae,ne);break;default:ye&1?B(L,E,O,Q,Z,le,re,ae,ne):ye&6?pe(L,E,O,Q,Z,le,re,ae,ne):(ye&64||ye&128)&&te.process(L,E,O,Q,Z,le,re,ae,ne,Oe)}me!=null&&Z&&Ol(me,L&&L.ref,le,E||L,!E)},k=(L,E,O,Q)=>{if(L==null)o(E.el=f(E.children),O,Q);else{const Z=E.el=L.el;E.children!==L.children&&u(Z,E.children)}},T=(L,E,O,Q)=>{L==null?o(E.el=s(E.children||""),O,Q):E.el=L.el},_=(L,E,O,Q)=>{[L.el,L.anchor]=b(L.children,E,O,Q,L.el,L.anchor)},w=({el:L,anchor:E},O,Q)=>{let Z;for(;L&&L!==E;)Z=h(L),o(L,O,Q),L=Z;o(E,O,Q)},x=({el:L,anchor:E})=>{let O;for(;L&&L!==E;)O=h(L),r(L),L=O;r(E)},B=(L,E,O,Q,Z,le,re,ae,ne)=>{E.type==="svg"?re="svg":E.type==="math"&&(re="mathml"),L==null?I(E,O,Q,Z,le,re,ae,ne):P(L,E,Z,le,re,ae,ne)},I=(L,E,O,Q,Z,le,re,ae)=>{let ne,te;const{props:me,shapeFlag:ye,transition:ve,dirs:Ae}=L;if(ne=L.el=p(L.type,le,me&&me.is,me),ye&8?g(ne,L.children):ye&16&&V(L.children,ne,null,Q,Z,On(L,le),re,ae),Ae&&Ut(L,null,Q,"created"),M(ne,L,L.scopeId,re,Q),me){for(const Ge in me)Ge!=="value"&&!ja(Ge)&&c(ne,Ge,null,me[Ge],le,L.children,Q,Z,se);"value"in me&&c(ne,"value",null,me.value,le),(te=me.onVnodeBeforeMount)&&yt(te,Q,L)}Ae&&Ut(L,null,Q,"beforeMount");const Ie=Vd(Z,ve);Ie&&ve.beforeEnter(ne),o(ne,E,O),((te=me&&me.onVnodeMounted)||Ie||Ae)&&ct(()=>{te&&yt(te,Q,L),Ie&&ve.enter(ne),Ae&&Ut(L,null,Q,"mounted")},Z)},M=(L,E,O,Q,Z)=>{if(O&&v(L,O),Q)for(let le=0;le<Q.length;le++)v(L,Q[le]);if(Z){let le=Z.subTree;if(E===le){const re=Z.vnode;M(L,re,re.scopeId,re.slotScopeIds,Z.parent)}}},V=(L,E,O,Q,Z,le,re,ae,ne=0)=>{for(let te=ne;te<L.length;te++){const me=L[te]=ae?hi(L[te]):Tt(L[te]);C(null,me,E,O,Q,Z,le,re,ae)}},P=(L,E,O,Q,Z,le,re)=>{const ae=E.el=L.el;let{patchFlag:ne,dynamicChildren:te,dirs:me}=E;ne|=L.patchFlag&16;const ye=L.props||je,ve=E.props||je;let Ae;if(O&&Li(O,!1),(Ae=ve.onVnodeBeforeUpdate)&&yt(Ae,O,E,L),me&&Ut(E,L,O,"beforeUpdate"),O&&Li(O,!0),te?j(L.dynamicChildren,te,ae,O,Q,On(E,Z),le):re||ie(L,E,ae,null,O,Q,On(E,Z),le,!1),ne>0){if(ne&16)X(ae,E,ye,ve,O,Q,Z);else if(ne&2&&ye.class!==ve.class&&c(ae,"class",null,ve.class,Z),ne&4&&c(ae,"style",ye.style,ve.style,Z),ne&8){const Ie=E.dynamicProps;for(let Ge=0;Ge<Ie.length;Ge++){const Ke=Ie[Ge],rt=ye[Ke],Ht=ve[Ke];(Ht!==rt||Ke==="value")&&c(ae,Ke,rt,Ht,Z,L.children,O,Q,se)}}ne&1&&L.children!==E.children&&g(ae,E.children)}else!re&&te==null&&X(ae,E,ye,ve,O,Q,Z);((Ae=ve.onVnodeUpdated)||me)&&ct(()=>{Ae&&yt(Ae,O,E,L),me&&Ut(E,L,O,"updated")},Q)},j=(L,E,O,Q,Z,le,re)=>{for(let ae=0;ae<E.length;ae++){const ne=L[ae],te=E[ae],me=ne.el&&(ne.type===Ce||!jt(ne,te)||ne.shapeFlag&70)?m(ne.el):O;C(ne,te,me,null,Q,Z,le,re,!0)}},X=(L,E,O,Q,Z,le,re)=>{if(O!==Q){if(O!==je)for(const ae in O)!ja(ae)&&!(ae in Q)&&c(L,ae,O[ae],null,re,E.children,Z,le,se);for(const ae in Q){if(ja(ae))continue;const ne=Q[ae],te=O[ae];ne!==te&&ae!=="value"&&c(L,ae,te,ne,re,E.children,Z,le,se)}"value"in Q&&c(L,"value",O.value,Q.value,re)}},U=(L,E,O,Q,Z,le,re,ae,ne)=>{const te=E.el=L?L.el:f(""),me=E.anchor=L?L.anchor:f("");let{patchFlag:ye,dynamicChildren:ve,slotScopeIds:Ae}=E;Ae&&(ae=ae?ae.concat(Ae):Ae),L==null?(o(te,O,Q),o(me,O,Q),V(E.children||[],O,me,Z,le,re,ae,ne)):ye>0&&ye&64&&ve&&L.dynamicChildren?(j(L.dynamicChildren,ve,O,Z,le,re,ae),(E.key!=null||Z&&E===Z.subTree)&&Cs(L,E,!0)):ie(L,E,O,me,Z,le,re,ae,ne)},pe=(L,E,O,Q,Z,le,re,ae,ne)=>{E.slotScopeIds=ae,L==null?E.shapeFlag&512?Z.ctx.activate(E,O,Q,re,ne):Be(E,O,Q,Z,le,re,ne):q(L,E,ne)},Be=(L,E,O,Q,Z,le,re)=>{const ae=L.component=Ud(L,Q,Z);if(fl(L)&&(ae.ctx.renderer=Oe),Jd(ae),ae.asyncDep){if(Z&&Z.registerDep(ae,K),!L.el){const ne=ae.subTree=t(ht);T(null,ne,E,O)}}else K(ae,L,E,O,Z,le,re)},q=(L,E,O)=>{const Q=E.component=L.component;if(Sf(L,E,O))if(Q.asyncDep&&!Q.asyncResolved){de(Q,E,O);return}else Q.next=E,ff(Q.update),Q.effect.dirty=!0,Q.update();else E.el=L.el,Q.vnode=E},K=(L,E,O,Q,Z,le,re)=>{const ae=()=>{if(L.isMounted){let{next:me,bu:ye,u:ve,parent:Ae,vnode:Ie}=L;{const ta=Hd(L);if(ta){me&&(me.el=Ie.el,de(L,me,re)),ta.asyncDep.then(()=>{L.isUnmounted||ae()});return}}let Ge=me,Ke;Li(L,!1),me?(me.el=Ie.el,de(L,me,re)):me=Ie,ye&&ua(ye),(Ke=me.props&&me.props.onVnodeBeforeUpdate)&&yt(Ke,Ae,me,Ie),Li(L,!0);const rt=Il(L),Ht=L.subTree;L.subTree=rt,C(Ht,rt,m(Ht.el),oe(Ht),L,Z,le),me.el=rt.el,Ge===null&&ms(L,rt.el),ve&&ct(ve,Z),(Ke=me.props&&me.props.onVnodeUpdated)&&ct(()=>yt(Ke,Ae,me,Ie),Z)}else{let me;const{el:ye,props:ve}=E,{bm:Ae,m:Ie,parent:Ge}=L,Ke=Vi(E);if(Li(L,!1),Ae&&ua(Ae),!Ke&&(me=ve&&ve.onVnodeBeforeMount)&&yt(me,Ge,E),Li(L,!0),ye&&xe){const rt=()=>{L.subTree=Il(L),xe(ye,L.subTree,L,Z,null)};Ke?E.type.__asyncLoader().then(()=>!L.isUnmounted&&rt()):rt()}else{const rt=L.subTree=Il(L);C(null,rt,O,Q,L,Z,le),E.el=rt.el}if(Ie&&ct(Ie,Z),!Ke&&(me=ve&&ve.onVnodeMounted)){const rt=E;ct(()=>yt(me,Ge,rt),Z)}(E.shapeFlag&256||Ge&&Vi(Ge.vnode)&&Ge.vnode.shapeFlag&256)&&L.a&&ct(L.a,Z),L.isMounted=!0,E=O=Q=null}},ne=L.effect=new ba(ae,wt,()=>bn(te),L.scope),te=L.update=()=>{ne.dirty&&ne.run()};te.id=L.uid,Li(L,!0),te()},de=(L,E,O)=>{E.component=L;const Q=L.vnode.props;L.vnode=E,L.next=null,og(L,E.props,Q,O),ug(L,E.children,O),Ki(),Ws(L),Xi()},ie=(L,E,O,Q,Z,le,re,ae,ne=!1)=>{const te=L&&L.children,me=L?L.shapeFlag:0,ye=E.children,{patchFlag:ve,shapeFlag:Ae}=E;if(ve>0){if(ve&128){We(te,ye,O,Q,Z,le,re,ae,ne);return}else if(ve&256){De(te,ye,O,Q,Z,le,re,ae,ne);return}}Ae&8?(me&16&&se(te,Z,le),ye!==te&&g(O,ye)):me&16?Ae&16?We(te,ye,O,Q,Z,le,re,ae,ne):se(te,Z,le,!0):(me&8&&g(O,""),Ae&16&&V(ye,O,Q,Z,le,re,ae,ne))},De=(L,E,O,Q,Z,le,re,ae,ne)=>{L=L||sa,E=E||sa;const te=L.length,me=E.length,ye=Math.min(te,me);let ve;for(ve=0;ve<ye;ve++){const Ae=E[ve]=ne?hi(E[ve]):Tt(E[ve]);C(L[ve],Ae,O,null,Z,le,re,ae,ne)}te>me?se(L,Z,le,!0,!1,ye):V(E,O,Q,Z,le,re,ae,ne,ye)},We=(L,E,O,Q,Z,le,re,ae,ne)=>{let te=0;const me=E.length;let ye=L.length-1,ve=me-1;for(;te<=ye&&te<=ve;){const Ae=L[te],Ie=E[te]=ne?hi(E[te]):Tt(E[te]);if(jt(Ae,Ie))C(Ae,Ie,O,null,Z,le,re,ae,ne);else break;te++}for(;te<=ye&&te<=ve;){const Ae=L[ye],Ie=E[ve]=ne?hi(E[ve]):Tt(E[ve]);if(jt(Ae,Ie))C(Ae,Ie,O,null,Z,le,re,ae,ne);else break;ye--,ve--}if(te>ye){if(te<=ve){const Ae=ve+1,Ie=Ae<me?E[Ae].el:Q;for(;te<=ve;)C(null,E[te]=ne?hi(E[te]):Tt(E[te]),O,Ie,Z,le,re,ae,ne),te++}}else if(te>ve)for(;te<=ye;)Ue(L[te],Z,le,!0),te++;else{const Ae=te,Ie=te,Ge=new Map;for(te=Ie;te<=ve;te++){const $t=E[te]=ne?hi(E[te]):Tt(E[te]);$t.key!=null&&Ge.set($t.key,te)}let Ke,rt=0;const Ht=ve-Ie+1;let ta=!1,Ps=0;const Ia=new Array(Ht);for(te=0;te<Ht;te++)Ia[te]=0;for(te=Ae;te<=ye;te++){const $t=L[te];if(rt>=Ht){Ue($t,Z,le,!0);continue}let qt;if($t.key!=null)qt=Ge.get($t.key);else for(Ke=Ie;Ke<=ve;Ke++)if(Ia[Ke-Ie]===0&&jt($t,E[Ke])){qt=Ke;break}qt===void 0?Ue($t,Z,le,!0):(Ia[qt-Ie]=te+1,qt>=Ps?Ps=qt:ta=!0,C($t,E[qt],O,null,Z,le,re,ae,ne),rt++)}const Ms=ta?pg(Ia):sa;for(Ke=Ms.length-1,te=Ht-1;te>=0;te--){const $t=Ie+te,qt=E[$t],Vs=$t+1<me?E[$t+1].el:Q;Ia[te]===0?C(null,qt,O,Vs,Z,le,re,ae,ne):ta&&(Ke<0||te!==Ms[Ke]?st(qt,O,Vs,2):Ke--)}}},st=(L,E,O,Q,Z=null)=>{const{el:le,type:re,transition:ae,children:ne,shapeFlag:te}=L;if(te&6){st(L.component.subTree,E,O,Q);return}if(te&128){L.suspense.move(E,O,Q);return}if(te&64){re.move(L,E,O,Oe);return}if(re===Ce){o(le,E,O);for(let ye=0;ye<ne.length;ye++)st(ne[ye],E,O,Q);o(L.anchor,E,O);return}if(re===Hi){w(L,E,O);return}if(Q!==2&&te&1&&ae)if(Q===0)ae.beforeEnter(le),o(le,E,O),ct(()=>ae.enter(le),Z);else{const{leave:ye,delayLeave:ve,afterLeave:Ae}=ae,Ie=()=>o(le,E,O),Ge=()=>{ye(le,()=>{Ie(),Ae&&Ae()})};ve?ve(le,Ie,Ge):Ge()}else o(le,E,O)},Ue=(L,E,O,Q=!1,Z=!1)=>{const{type:le,props:re,ref:ae,children:ne,dynamicChildren:te,shapeFlag:me,patchFlag:ye,dirs:ve}=L;if(ae!=null&&Ol(ae,null,O,L,!0),me&256){E.ctx.deactivate(L);return}const Ae=me&1&&ve,Ie=!Vi(L);let Ge;if(Ie&&(Ge=re&&re.onVnodeBeforeUnmount)&&yt(Ge,E,L),me&6)Y(L.component,O,Q);else{if(me&128){L.suspense.unmount(O,Q);return}Ae&&Ut(L,null,E,"beforeUnmount"),me&64?L.type.remove(L,E,O,Z,Oe,Q):te&&(le!==Ce||ye>0&&ye&64)?se(te,E,O,!1,!0):(le===Ce&&ye&384||!Z&&me&16)&&se(ne,E,O),Q&&Xt(L)}(Ie&&(Ge=re&&re.onVnodeUnmounted)||Ae)&&ct(()=>{Ge&&yt(Ge,E,L),Ae&&Ut(L,null,E,"unmounted")},O)},Xt=L=>{const{type:E,el:O,anchor:Q,transition:Z}=L;if(E===Ce){Rt(O,Q);return}if(E===Hi){x(L);return}const le=()=>{r(O),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(L.shapeFlag&1&&Z&&!Z.persisted){const{leave:re,delayLeave:ae}=Z,ne=()=>re(O,le);ae?ae(L.el,le,ne):ne()}else le()},Rt=(L,E)=>{let O;for(;L!==E;)O=h(L),r(L),L=O;r(E)},Y=(L,E,O)=>{const{bum:Q,scope:Z,update:le,subTree:re,um:ae}=L;Q&&ua(Q),Z.stop(),le&&(le.active=!1,Ue(re,L,E,O)),ae&&ct(ae,E),ct(()=>{L.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&L.asyncDep&&!L.asyncResolved&&L.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},se=(L,E,O,Q=!1,Z=!1,le=0)=>{for(let re=le;re<L.length;re++)Ue(L[re],E,O,Q,Z)},oe=L=>L.shapeFlag&6?oe(L.component.subTree):L.shapeFlag&128?L.suspense.next():h(L.anchor||L.el);let _e=!1;const Ne=(L,E,O)=>{L==null?E._vnode&&Ue(E._vnode,null,null,!0):C(E._vnode||null,L,E,null,null,null,O),_e||(_e=!0,Ws(),Hl(),_e=!1),E._vnode=L},Oe={p:C,um:Ue,m:st,r:Xt,mt:Be,mc:V,pc:ie,pbc:j,n:oe,o:e};let ke,xe;return a&&([ke,xe]=a(Oe)),{render:Ne,hydrate:ke,createApp:ag(Ne,ke)}}function On({type:e,props:a},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&a&&a.encoding&&a.encoding.includes("html")?void 0:n}function Li({effect:e,update:a},n){e.allowRecurse=a.allowRecurse=n}function Vd(e,a){return(!e||e&&!e.pendingBranch)&&a&&!a.persisted}function Cs(e,a,n=!1){const o=e.children,r=a.children;if(ge(o)&&ge(r))for(let c=0;c<o.length;c++){const p=o[c];let f=r[c];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=r[c]=hi(r[c]),f.el=p.el),n||Cs(p,f)),f.type===Gi&&(f.el=p.el)}}function pg(e){const a=e.slice(),n=[0];let o,r,c,p,f;const s=e.length;for(o=0;o<s;o++){const u=e[o];if(u!==0){if(r=n[n.length-1],e[r]<u){a[o]=r,n.push(o);continue}for(c=0,p=n.length-1;c<p;)f=c+p>>1,e[n[f]]<u?c=f+1:p=f;u<e[n[c]]&&(c>0&&(a[o]=n[c-1]),n[c]=o)}}for(c=n.length,p=n[c-1];c-- >0;)n[c]=p,p=a[p];return n}function Hd(e){const a=e.subTree.component;if(a)return a.asyncDep&&!a.asyncResolved?a:Hd(a)}const fg=e=>e.__isTeleport,Ua=e=>e&&(e.disabled||e.disabled===""),sr=e=>typeof SVGElement<"u"&&e instanceof SVGElement,rr=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,vo=(e,a)=>{const n=e&&e.to;return Qe(n)?a?a(n):null:n},gg={name:"Teleport",__isTeleport:!0,process(e,a,n,o,r,c,p,f,s,u){const{mc:g,pc:m,pbc:h,o:{insert:v,querySelector:b,createText:C,createComment:k}}=u,T=Ua(a.props);let{shapeFlag:_,children:w,dynamicChildren:x}=a;if(e==null){const B=a.el=C(""),I=a.anchor=C("");v(B,n,o),v(I,n,o);const M=a.target=vo(a.props,b),V=a.targetAnchor=C("");M&&(v(V,M),p==="svg"||sr(M)?p="svg":(p==="mathml"||rr(M))&&(p="mathml"));const P=(j,X)=>{_&16&&g(w,j,X,r,c,p,f,s)};T?P(n,I):M&&P(M,V)}else{a.el=e.el;const B=a.anchor=e.anchor,I=a.target=e.target,M=a.targetAnchor=e.targetAnchor,V=Ua(e.props),P=V?n:I,j=V?B:M;if(p==="svg"||sr(I)?p="svg":(p==="mathml"||rr(I))&&(p="mathml"),x?(h(e.dynamicChildren,x,P,r,c,p,f),Cs(e,a,!0)):s||m(e,a,P,j,r,c,p,f,!1),T)V?a.props&&e.props&&a.props.to!==e.props.to&&(a.props.to=e.props.to):xl(a,n,B,u,1);else if((a.props&&a.props.to)!==(e.props&&e.props.to)){const X=a.target=vo(a.props,b);X&&xl(a,X,null,u,0)}else V&&xl(a,I,M,u,1)}Nd(a)},remove(e,a,n,o,{um:r,o:{remove:c}},p){const{shapeFlag:f,children:s,anchor:u,targetAnchor:g,target:m,props:h}=e;if(m&&c(g),p&&c(u),f&16){const v=p||!Ua(h);for(let b=0;b<s.length;b++){const C=s[b];r(C,a,n,v,!!C.dynamicChildren)}}},move:xl,hydrate:hg};function xl(e,a,n,{o:{insert:o},m:r},c=2){c===0&&o(e.targetAnchor,a,n);const{el:p,anchor:f,shapeFlag:s,children:u,props:g}=e,m=c===2;if(m&&o(p,a,n),(!m||Ua(g))&&s&16)for(let h=0;h<u.length;h++)r(u[h],a,n,2);m&&o(f,a,n)}function hg(e,a,n,o,r,c,{o:{nextSibling:p,parentNode:f,querySelector:s}},u){const g=a.target=vo(a.props,s);if(g){const m=g._lpa||g.firstChild;if(a.shapeFlag&16)if(Ua(a.props))a.anchor=u(p(e),a,f(e),n,o,r,c),a.targetAnchor=m;else{a.anchor=p(e);let h=m;for(;h;)if(h=p(h),h&&h.nodeType===8&&h.data==="teleport anchor"){a.targetAnchor=h,g._lpa=a.targetAnchor&&p(a.targetAnchor);break}u(m,a,g,n,o,r,c)}Nd(a)}return a.anchor&&p(a.anchor)}const xn=gg;function Nd(e){const a=e.ctx;if(a&&a.ut){let n=e.children[0].el;for(;n&&n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",a.uid),n=n.nextSibling;a.ut()}}const Ce=Symbol.for("v-fgt"),Gi=Symbol.for("v-txt"),ht=Symbol.for("v-cmt"),Hi=Symbol.for("v-stc"),Ya=[];let Ct=null;function $(e=!1){Ya.push(Ct=e?null:[])}function Od(){Ya.pop(),Ct=Ya[Ya.length-1]||null}let qi=1;function yo(e){qi+=e}function jd(e){return e.dynamicChildren=qi>0?Ct||sa:null,Od(),qi>0&&Ct&&Ct.push(e),e}function he(e,a,n,o,r,c){return jd(S(e,a,n,o,r,c,!0))}function D(e,a,n,o,r){return jd(t(e,a,n,o,r,!0))}function Vt(e){return e?e.__v_isVNode===!0:!1}function jt(e,a){return e.type===a.type&&e.key===a.key}function _g(e){}const $n="__vInternal",Gd=({key:e})=>e??null,El=({ref:e,ref_key:a,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Qe(e)||mt(e)||we(e)?{i:lt,r:e,k:a,f:!!n}:e:null);function S(e,a=null,n=null,o=0,r=null,c=e===Ce?0:1,p=!1,f=!1){const s={__v_isVNode:!0,__v_skip:!0,type:e,props:a,key:a&&Gd(a),ref:a&&El(a),scopeId:yn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:c,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:lt};return f?(ks(s,n),c&128&&e.normalize(s)):n&&(s.shapeFlag|=Qe(n)?8:16),qi>0&&!p&&Ct&&(s.patchFlag>0||c&6)&&s.patchFlag!==32&&Ct.push(s),s}const t=bg;function bg(e,a=null,n=null,o=0,r=null,c=!1){if((!e||e===rd)&&(e=ht),Vt(e)){const f=Jt(e,a,!0);return n&&ks(f,n),qi>0&&!c&&Ct&&(f.shapeFlag&6?Ct[Ct.indexOf(e)]=f:Ct.push(f)),f.patchFlag|=-2,f}if(xg(e)&&(e=e.__vccOpts),a){a=qd(a);let{class:f,style:s}=a;f&&!Qe(f)&&(a.class=ml(f)),qe(s)&&(os(s)&&!ge(s)&&(s=Xe({},s)),a.style=Ba(s))}const p=Qe(e)?1:cd(e)?128:fg(e)?64:qe(e)?4:we(e)?2:0;return S(e,a,n,o,r,p,c,!0)}function qd(e){return e?os(e)||$n in e?Xe({},e):e:null}function Jt(e,a,n=!1){const{props:o,ref:r,patchFlag:c,children:p}=e,f=a?ea(o||{},a):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Gd(f),ref:a&&a.ref?n&&r?ge(r)?r.concat(El(a)):[r,El(a)]:El(a):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:p,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:a&&e.type!==Ce?c===-1?16:c|16:c,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Jt(e.ssContent),ssFallback:e.ssFallback&&Jt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function l(e=" ",a=0){return t(Gi,null,e,a)}function vg(e,a){const n=t(Hi,null,e);return n.staticCount=a,n}function As(e="",a=!1){return a?($(),D(ht,null,e)):t(ht,null,e)}function Tt(e){return e==null||typeof e=="boolean"?t(ht):ge(e)?t(Ce,null,e.slice()):typeof e=="object"?hi(e):t(Gi,null,String(e))}function hi(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Jt(e)}function ks(e,a){let n=0;const{shapeFlag:o}=e;if(a==null)a=null;else if(ge(a))n=16;else if(typeof a=="object")if(o&65){const r=a.default;r&&(r._c&&(r._d=!1),ks(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=a._;!r&&!($n in a)?a._ctx=lt:r===3&&lt&&(lt.slots._===1?a._=1:(a._=2,e.patchFlag|=1024))}else we(a)?(a={default:a,_ctx:lt},n=32):(a=String(a),o&64?(n=16,a=[l(a)]):n=8);e.children=a,e.shapeFlag|=n}function ea(...e){const a={};for(let n=0;n<e.length;n++){const o=e[n];for(const r in o)if(r==="class")a.class!==o.class&&(a.class=ml([a.class,o.class]));else if(r==="style")a.style=Ba([a.style,o.style]);else if(cl(r)){const c=a[r],p=o[r];p&&c!==p&&!(ge(c)&&c.includes(p))&&(a[r]=c?[].concat(c,p):p)}else r!==""&&(a[r]=o[r])}return a}function yt(e,a,n,o=null){Dt(e,a,7,[n,o])}const yg=Ld();let Sg=0;function Ud(e,a,n){const o=e.type,r=(a?a.appContext:e.appContext)||yg,c={uid:Sg++,vnode:e,type:o,parent:a,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new es(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Id(o,r),emitsOptions:nd(o,r),emit:null,emitted:null,propsDefaults:je,inheritAttrs:o.inheritAttrs,ctx:je,data:je,props:je,attrs:je,slots:je,refs:je,setupState:je,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return c.ctx={_:c},c.root=a?a.root:c,c.emit=hf.bind(null,c),e.ce&&e.ce(c),c}let ot=null;const Kt=()=>ot||lt;let jl,So;{const e=Lc(),a=(n,o)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(o),c=>{r.length>1?r.forEach(p=>p(c)):r[0](c)}};jl=a("__VUE_INSTANCE_SETTERS__",n=>ot=n),So=a("__VUE_SSR_SETTERS__",n=>gl=n)}const Ui=e=>{const a=ot;return jl(e),e.scope.on(),()=>{e.scope.off(),jl(a)}},wo=()=>{ot&&ot.scope.off(),jl(null)};function Yd(e){return e.vnode.shapeFlag&4}let gl=!1;function Jd(e,a=!1){a&&So(a);const{props:n,children:o}=e.vnode,r=Yd(e);ng(e,n,r,a),rg(e,o);const c=r?wg(e,a):void 0;return a&&So(!1),c}function wg(e,a){const n=e.type;e.accessCache=Object.create(null),e.proxy=ss(new Proxy(e.ctx,go));const{setup:o}=n;if(o){const r=e.setupContext=o.length>1?Kd(e):null,c=Ui(e);Ki();const p=ai(o,e,0,[e.props,r]);if(Xi(),c(),Qo(p)){if(p.then(wo,wo),a)return p.then(f=>{Co(e,f,a)}).catch(f=>{Qi(f,e,0)});e.asyncDep=p}else Co(e,p,a)}else Wd(e,a)}function Co(e,a,n){we(a)?e.type.__ssrInlineRender?e.ssrRender=a:e.render=a:qe(a)&&(e.setupState=cs(a)),Wd(e,n)}let Gl,Ao;function Cg(e){Gl=e,Ao=a=>{a.render._rc&&(a.withProxy=new Proxy(a.ctx,Mf))}}const Ag=()=>!Gl;function Wd(e,a,n){const o=e.type;if(!e.render){if(!a&&Gl&&!o.render){const r=o.template||Ss(e).template;if(r){const{isCustomElement:c,compilerOptions:p}=e.appContext.config,{delimiters:f,compilerOptions:s}=o,u=Xe(Xe({isCustomElement:c,delimiters:f},p),s);o.render=Gl(r,u)}}e.render=o.render||wt,Ao&&Ao(e)}{const r=Ui(e);Ki();try{Xf(e)}finally{Xi(),r()}}}function kg(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(a,n){return xt(e,"get","$attrs"),a[n]}}))}function Kd(e){const a=n=>{e.exposed=n||{}};return{get attrs(){return kg(e)},slots:e.slots,emit:e.emit,expose:a}}function Bn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(cs(ss(e.exposed)),{get(a,n){if(n in a)return a[n];if(n in qa)return qa[n](e)},has(a,n){return n in a||n in qa}}))}function ko(e,a=!0){return we(e)?e.displayName||e.name:e.name||a&&e.__name}function xg(e){return we(e)&&"__vccOpts"in e}const H=(e,a)=>Xp(e,a,gl);function $g(e,a,n=je){const o=Kt(),r=vt(a),c=Lt(a),p=Zc((s,u)=>{let g;return gd(()=>{const m=e[a];Gt(g,m)&&(g=m,u())}),{get(){return s(),n.get?n.get(g):g},set(m){const h=o.vnode.props;!(h&&(a in h||r in h||c in h)&&(`onUpdate:${a}`in h||`onUpdate:${r}`in h||`onUpdate:${c}`in h))&&Gt(m,g)&&(g=m,u()),o.emit(`update:${a}`,n.set?n.set(m):m)}}}),f=a==="modelValue"?"modelModifiers":`${a}Modifiers`;return p[Symbol.iterator]=()=>{let s=0;return{next(){return s<2?{value:s++?e[f]||{}:p,done:!1}:{done:!0}}}},p}function J(e,a,n){const o=arguments.length;return o===2?qe(a)&&!ge(a)?Vt(a)?t(e,null,[a]):t(e,a):t(e,null,a):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&Vt(n)&&(n=[n]),t(e,a,n))}function Bg(){}function Tg(e,a,n,o){const r=n[o];if(r&&Xd(r,e))return r;const c=a();return c.memo=e.slice(),n[o]=c}function Xd(e,a){const n=e.memo;if(n.length!=a.length)return!1;for(let o=0;o<n.length;o++)if(Gt(n[o],a[o]))return!1;return qi>0&&Ct&&Ct.push(e),!0}const Qd="3.4.15",Lg=wt,Dg=df,Ig=aa,Eg=ld,Rg={createComponentInstance:Ud,setupComponent:Jd,renderComponentRoot:Il,setCurrentRenderingInstance:al,isVNode:Vt,normalizeVNode:Tt},zg=Rg,Fg=null,Pg=null,Mg=null;/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Vg="http://www.w3.org/2000/svg",Hg="http://www.w3.org/1998/Math/MathML",_i=typeof document<"u"?document:null,ur=_i&&_i.createElement("template"),Ng={insert:(e,a,n)=>{a.insertBefore(e,n||null)},remove:e=>{const a=e.parentNode;a&&a.removeChild(e)},createElement:(e,a,n,o)=>{const r=a==="svg"?_i.createElementNS(Vg,e):a==="mathml"?_i.createElementNS(Hg,e):_i.createElement(e,n?{is:n}:void 0);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>_i.createTextNode(e),createComment:e=>_i.createComment(e),setText:(e,a)=>{e.nodeValue=a},setElementText:(e,a)=>{e.textContent=a},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>_i.querySelector(e),setScopeId(e,a){e.setAttribute(a,"")},insertStaticContent(e,a,n,o,r,c){const p=n?n.previousSibling:a.lastChild;if(r&&(r===c||r.nextSibling))for(;a.insertBefore(r.cloneNode(!0),n),!(r===c||!(r=r.nextSibling)););else{ur.innerHTML=o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e;const f=ur.content;if(o==="svg"||o==="mathml"){const s=f.firstChild;for(;s.firstChild;)f.appendChild(s.firstChild);f.removeChild(s)}a.insertBefore(f,n)}return[p?p.nextSibling:a.firstChild,n?n.previousSibling:a.lastChild]}},di="transition",Ea="animation",ya=Symbol("_vtc"),Tn=(e,{slots:a})=>J(_d,em(e),a);Tn.displayName="Transition";const Zd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Og=Tn.props=Xe({},bs,Zd),Di=(e,a=[])=>{ge(e)?e.forEach(n=>n(...a)):e&&e(...a)},cr=e=>e?ge(e)?e.some(a=>a.length>1):e.length>1:!1;function em(e){const a={};for(const U in e)U in Zd||(a[U]=e[U]);if(e.css===!1)return a;const{name:n="v",type:o,duration:r,enterFromClass:c=`${n}-enter-from`,enterActiveClass:p=`${n}-enter-active`,enterToClass:f=`${n}-enter-to`,appearFromClass:s=c,appearActiveClass:u=p,appearToClass:g=f,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=e,b=jg(r),C=b&&b[0],k=b&&b[1],{onBeforeEnter:T,onEnter:_,onEnterCancelled:w,onLeave:x,onLeaveCancelled:B,onBeforeAppear:I=T,onAppear:M=_,onAppearCancelled:V=w}=a,P=(U,pe,Be)=>{pi(U,pe?g:f),pi(U,pe?u:p),Be&&Be()},j=(U,pe)=>{U._isLeaving=!1,pi(U,m),pi(U,v),pi(U,h),pe&&pe()},X=U=>(pe,Be)=>{const q=U?M:_,K=()=>P(pe,U,Be);Di(q,[pe,K]),dr(()=>{pi(pe,U?s:c),Qt(pe,U?g:f),cr(q)||mr(pe,o,C,K)})};return Xe(a,{onBeforeEnter(U){Di(T,[U]),Qt(U,c),Qt(U,p)},onBeforeAppear(U){Di(I,[U]),Qt(U,s),Qt(U,u)},onEnter:X(!1),onAppear:X(!0),onLeave(U,pe){U._isLeaving=!0;const Be=()=>j(U,pe);Qt(U,m),im(),Qt(U,h),dr(()=>{U._isLeaving&&(pi(U,m),Qt(U,v),cr(x)||mr(U,o,k,Be))}),Di(x,[U,Be])},onEnterCancelled(U){P(U,!1),Di(w,[U])},onAppearCancelled(U){P(U,!0),Di(V,[U])},onLeaveCancelled(U){j(U),Di(B,[U])}})}function jg(e){if(e==null)return null;if(qe(e))return[jn(e.enter),jn(e.leave)];{const a=jn(e);return[a,a]}}function jn(e){return Pl(e)}function Qt(e,a){a.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[ya]||(e[ya]=new Set)).add(a)}function pi(e,a){a.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const n=e[ya];n&&(n.delete(a),n.size||(e[ya]=void 0))}function dr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Gg=0;function mr(e,a,n,o){const r=e._endId=++Gg,c=()=>{r===e._endId&&o()};if(n)return setTimeout(c,n);const{type:p,timeout:f,propCount:s}=tm(e,a);if(!p)return o();const u=p+"end";let g=0;const m=()=>{e.removeEventListener(u,h),c()},h=v=>{v.target===e&&++g>=s&&m()};setTimeout(()=>{g<s&&m()},f+1),e.addEventListener(u,h)}function tm(e,a){const n=window.getComputedStyle(e),o=b=>(n[b]||"").split(", "),r=o(`${di}Delay`),c=o(`${di}Duration`),p=pr(r,c),f=o(`${Ea}Delay`),s=o(`${Ea}Duration`),u=pr(f,s);let g=null,m=0,h=0;a===di?p>0&&(g=di,m=p,h=c.length):a===Ea?u>0&&(g=Ea,m=u,h=s.length):(m=Math.max(p,u),g=m>0?p>u?di:Ea:null,h=g?g===di?c.length:s.length:0);const v=g===di&&/\b(transform|all)(,|$)/.test(o(`${di}Property`).toString());return{type:g,timeout:m,propCount:h,hasTransform:v}}function pr(e,a){for(;e.length<a.length;)e=e.concat(e);return Math.max(...a.map((n,o)=>fr(n)+fr(e[o])))}function fr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function im(){return document.body.offsetHeight}function qg(e,a,n){const o=e[ya];o&&(a=(a?[a,...o]:[...o]).join(" ")),a==null?e.removeAttribute("class"):n?e.setAttribute("class",a):e.className=a}const xs=Symbol("_vod"),am={beforeMount(e,{value:a},{transition:n}){e[xs]=e.style.display==="none"?"":e.style.display,n&&a?n.beforeEnter(e):Ra(e,a)},mounted(e,{value:a},{transition:n}){n&&a&&n.enter(e)},updated(e,{value:a,oldValue:n},{transition:o}){!a!=!n&&(o?a?(o.beforeEnter(e),Ra(e,!0),o.enter(e)):o.leave(e,()=>{Ra(e,!1)}):Ra(e,a))},beforeUnmount(e,{value:a}){Ra(e,a)}};function Ra(e,a){e.style.display=a?e[xs]:"none"}function Ug(){am.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const lm=Symbol("");function Yg(e){const a=Kt();if(!a)return;const n=a.ut=(r=e(a.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${a.uid}"]`)).forEach(c=>$o(c,r))},o=()=>{const r=e(a.proxy);xo(a.subTree,r),n(r)};fd(o),$i(()=>{const r=new MutationObserver(o);r.observe(a.subTree.el.parentNode,{childList:!0}),Zi(()=>r.disconnect())})}function xo(e,a){if(e.shapeFlag&128){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{xo(n.activeBranch,a)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)$o(e.el,a);else if(e.type===Ce)e.children.forEach(n=>xo(n,a));else if(e.type===Hi){let{el:n,anchor:o}=e;for(;n&&($o(n,a),n!==o);)n=n.nextSibling}}function $o(e,a){if(e.nodeType===1){const n=e.style;let o="";for(const r in a)n.setProperty(`--${r}`,a[r]),o+=`--${r}: ${a[r]};`;n[lm]=o}}function Jg(e,a,n){const o=e.style,r=o.display,c=Qe(n);if(n&&!c){if(a&&!Qe(a))for(const p in a)n[p]==null&&Bo(o,p,"");for(const p in n)Bo(o,p,n[p])}else if(c){if(a!==n){const p=o[lm];p&&(n+=";"+p),o.cssText=n}}else a&&e.removeAttribute("style");xs in e&&(o.display=r)}const gr=/\s*!important$/;function Bo(e,a,n){if(ge(n))n.forEach(o=>Bo(e,a,o));else if(n==null&&(n=""),a.startsWith("--"))e.setProperty(a,n);else{const o=Wg(e,a);gr.test(n)?e.setProperty(Lt(o),n.replace(gr,""),"important"):e[o]=n}}const hr=["Webkit","Moz","ms"],Gn={};function Wg(e,a){const n=Gn[a];if(n)return n;let o=vt(a);if(o!=="filter"&&o in e)return Gn[a]=o;o=dl(o);for(let r=0;r<hr.length;r++){const c=hr[r]+o;if(c in e)return Gn[a]=c}return a}const _r="http://www.w3.org/1999/xlink";function Kg(e,a,n,o,r){if(o&&a.startsWith("xlink:"))n==null?e.removeAttributeNS(_r,a.slice(6,a.length)):e.setAttributeNS(_r,a,n);else{const c=kp(a);n==null||c&&!Dc(n)?e.removeAttribute(a):e.setAttribute(a,c?"":n)}}function Xg(e,a,n,o,r,c,p){if(a==="innerHTML"||a==="textContent"){o&&p(o,r,c),e[a]=n??"";return}const f=e.tagName;if(a==="value"&&f!=="PROGRESS"&&!f.includes("-")){e._value=n;const u=f==="OPTION"?e.getAttribute("value"):e.value,g=n??"";u!==g&&(e.value=g),n==null&&e.removeAttribute(a);return}let s=!1;if(n===""||n==null){const u=typeof e[a];u==="boolean"?n=Dc(n):n==null&&u==="string"?(n="",s=!0):u==="number"&&(n=0,s=!0)}try{e[a]=n}catch{}s&&e.removeAttribute(a)}function ti(e,a,n,o){e.addEventListener(a,n,o)}function Qg(e,a,n,o){e.removeEventListener(a,n,o)}const br=Symbol("_vei");function Zg(e,a,n,o,r=null){const c=e[br]||(e[br]={}),p=c[a];if(o&&p)p.value=o;else{const[f,s]=eh(a);if(o){const u=c[a]=ah(o,r);ti(e,f,u,s)}else p&&(Qg(e,f,p,s),c[a]=void 0)}}const vr=/(?:Once|Passive|Capture)$/;function eh(e){let a;if(vr.test(e)){a={};let o;for(;o=e.match(vr);)e=e.slice(0,e.length-o[0].length),a[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Lt(e.slice(2)),a]}let qn=0;const th=Promise.resolve(),ih=()=>qn||(th.then(()=>qn=0),qn=Date.now());function ah(e,a){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;Dt(lh(o,n.value),a,5,[o])};return n.value=e,n.attached=ih(),n}function lh(e,a){if(ge(a)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},a.map(o=>r=>!r._stopped&&o&&o(r))}else return a}const yr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,nh=(e,a,n,o,r,c,p,f,s)=>{const u=r==="svg";a==="class"?qg(e,o,u):a==="style"?Jg(e,n,o):cl(a)?Ko(a)||Zg(e,a,n,o,p):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):oh(e,a,o,u))?Xg(e,a,o,c,p,f,s):(a==="true-value"?e._trueValue=o:a==="false-value"&&(e._falseValue=o),Kg(e,a,o,u))};function oh(e,a,n,o){if(o)return!!(a==="innerHTML"||a==="textContent"||a in e&&yr(a)&&we(n));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&e.tagName==="INPUT"||a==="type"&&e.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return yr(a)&&Qe(n)?!1:a in e}/*! #__NO_SIDE_EFFECTS__ */function nm(e,a){const n=z(e);class o extends Ln{constructor(c){super(n,c,a)}}return o.def=n,o}/*! #__NO_SIDE_EFFECTS__ */const sh=e=>nm(e,_m),rh=typeof HTMLElement<"u"?HTMLElement:class{};class Ln extends rh{constructor(a,n={},o){super(),this._def=a,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&o?o(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),Ta(()=>{this._connected||(Yl(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let o=0;o<this.attributes.length;o++)this._setAttr(this.attributes[o].name);this._ob=new MutationObserver(o=>{for(const r of o)this._setAttr(r.attributeName)}),this._ob.observe(this,{attributes:!0});const a=(o,r=!1)=>{const{props:c,styles:p}=o;let f;if(c&&!ge(c))for(const s in c){const u=c[s];(u===Number||u&&u.type===Number)&&(s in this._props&&(this._props[s]=Pl(this._props[s])),(f||(f=Object.create(null)))[vt(s)]=!0)}this._numberProps=f,r&&this._resolveProps(o),this._applyStyles(p),this._update()},n=this._def.__asyncLoader;n?n().then(o=>a(o,!0)):a(this._def)}_resolveProps(a){const{props:n}=a,o=ge(n)?n:Object.keys(n||{});for(const r of Object.keys(this))r[0]!=="_"&&o.includes(r)&&this._setProp(r,this[r],!0,!1);for(const r of o.map(vt))Object.defineProperty(this,r,{get(){return this._getProp(r)},set(c){this._setProp(r,c)}})}_setAttr(a){let n=this.getAttribute(a);const o=vt(a);this._numberProps&&this._numberProps[o]&&(n=Pl(n)),this._setProp(o,n,!1)}_getProp(a){return this._props[a]}_setProp(a,n,o=!0,r=!0){n!==this._props[a]&&(this._props[a]=n,r&&this._instance&&this._update(),o&&(n===!0?this.setAttribute(Lt(a),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Lt(a),n+""):n||this.removeAttribute(Lt(a))))}_update(){Yl(this._createVNode(),this.shadowRoot)}_createVNode(){const a=t(this._def,Xe({},this._props));return this._instance||(a.ce=n=>{this._instance=n,n.isCE=!0;const o=(c,p)=>{this.dispatchEvent(new CustomEvent(c,{detail:p}))};n.emit=(c,...p)=>{o(c,p),Lt(c)!==c&&o(Lt(c),p)};let r=this;for(;r=r&&(r.parentNode||r.host);)if(r instanceof Ln){n.parent=r._instance,n.provides=r._instance.provides;break}}),a}_applyStyles(a){a&&a.forEach(n=>{const o=document.createElement("style");o.textContent=n,this.shadowRoot.appendChild(o)})}}function uh(e="$style"){{const a=Kt();if(!a)return je;const n=a.type.__cssModules;if(!n)return je;const o=n[e];return o||je}}const om=new WeakMap,sm=new WeakMap,ql=Symbol("_moveCb"),Sr=Symbol("_enterCb"),rm={name:"TransitionGroup",props:Xe({},Og,{tag:String,moveClass:String}),setup(e,{slots:a}){const n=Kt(),o=_s();let r,c;return An(()=>{if(!r.length)return;const p=e.moveClass||`${e.name||"v"}-move`;if(!fh(r[0].el,n.vnode.el,p))return;r.forEach(dh),r.forEach(mh);const f=r.filter(ph);im(),f.forEach(s=>{const u=s.el,g=u.style;Qt(u,p),g.transform=g.webkitTransform=g.transitionDuration="";const m=u[ql]=h=>{h&&h.target!==u||(!h||/transform$/.test(h.propertyName))&&(u.removeEventListener("transitionend",m),u[ql]=null,pi(u,p))};u.addEventListener("transitionend",m)})}),()=>{const p=Ee(e),f=em(p);let s=p.tag||Ce;r=c,c=a.default?wn(a.default()):[];for(let u=0;u<c.length;u++){const g=c[u];g.key!=null&&Oi(g,va(g,f,o,n))}if(r)for(let u=0;u<r.length;u++){const g=r[u];Oi(g,va(g,f,o,n)),om.set(g,g.el.getBoundingClientRect())}return t(s,null,c)}}},ch=e=>delete e.mode;rm.props;const um=rm;function dh(e){const a=e.el;a[ql]&&a[ql](),a[Sr]&&a[Sr]()}function mh(e){sm.set(e,e.el.getBoundingClientRect())}function ph(e){const a=om.get(e),n=sm.get(e),o=a.left-n.left,r=a.top-n.top;if(o||r){const c=e.el.style;return c.transform=c.webkitTransform=`translate(${o}px,${r}px)`,c.transitionDuration="0s",e}}function fh(e,a,n){const o=e.cloneNode(),r=e[ya];r&&r.forEach(f=>{f.split(/\s+/).forEach(s=>s&&o.classList.remove(s))}),n.split(/\s+/).forEach(f=>f&&o.classList.add(f)),o.style.display="none";const c=a.nodeType===1?a:a.parentNode;c.appendChild(o);const{hasTransform:p}=tm(o);return c.removeChild(o),p}const xi=e=>{const a=e.props["onUpdate:modelValue"]||!1;return ge(a)?n=>ua(a,n):a};function gh(e){e.target.composing=!0}function wr(e){const a=e.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const Mt=Symbol("_assign"),Ul={created(e,{modifiers:{lazy:a,trim:n,number:o}},r){e[Mt]=xi(r);const c=o||r.props&&r.props.type==="number";ti(e,a?"change":"input",p=>{if(p.target.composing)return;let f=e.value;n&&(f=f.trim()),c&&(f=Qa(f)),e[Mt](f)}),n&&ti(e,"change",()=>{e.value=e.value.trim()}),a||(ti(e,"compositionstart",gh),ti(e,"compositionend",wr),ti(e,"change",wr))},mounted(e,{value:a}){e.value=a??""},beforeUpdate(e,{value:a,modifiers:{lazy:n,trim:o,number:r}},c){if(e[Mt]=xi(c),e.composing)return;const p=r||e.type==="number"?Qa(e.value):e.value,f=a??"";p!==f&&(document.activeElement===e&&e.type!=="range"&&(n||o&&e.value.trim()===f)||(e.value=f))}},$s={deep:!0,created(e,a,n){e[Mt]=xi(n),ti(e,"change",()=>{const o=e._modelValue,r=Sa(e),c=e.checked,p=e[Mt];if(ge(o)){const f=fn(o,r),s=f!==-1;if(c&&!s)p(o.concat(r));else if(!c&&s){const u=[...o];u.splice(f,1),p(u)}}else if(Wi(o)){const f=new Set(o);c?f.add(r):f.delete(r),p(f)}else p(dm(e,c))})},mounted:Cr,beforeUpdate(e,a,n){e[Mt]=xi(n),Cr(e,a,n)}};function Cr(e,{value:a,oldValue:n},o){e._modelValue=a,ge(a)?e.checked=fn(a,o.props.value)>-1:Wi(a)?e.checked=a.has(o.props.value):a!==n&&(e.checked=li(a,dm(e,!0)))}const Bs={created(e,{value:a},n){e.checked=li(a,n.props.value),e[Mt]=xi(n),ti(e,"change",()=>{e[Mt](Sa(e))})},beforeUpdate(e,{value:a,oldValue:n},o){e[Mt]=xi(o),a!==n&&(e.checked=li(a,o.props.value))}},cm={deep:!0,created(e,{value:a,modifiers:{number:n}},o){const r=Wi(a);ti(e,"change",()=>{const c=Array.prototype.filter.call(e.options,p=>p.selected).map(p=>n?Qa(Sa(p)):Sa(p));e[Mt](e.multiple?r?new Set(c):c:c[0]),e._assigning=!0,Ta(()=>{e._assigning=!1})}),e[Mt]=xi(o)},mounted(e,{value:a,oldValue:n,modifiers:{number:o}}){Ar(e,a,n,o)},beforeUpdate(e,a,n){e[Mt]=xi(n)},updated(e,{value:a,oldValue:n,modifiers:{number:o}}){e._assigning||Ar(e,a,n,o)}};function Ar(e,a,n,o){const r=e.multiple,c=ge(a);if(!(r&&!c&&!Wi(a))&&!(c&&li(a,n))){for(let p=0,f=e.options.length;p<f;p++){const s=e.options[p],u=Sa(s);if(r)if(c){const g=typeof u;g==="string"||g==="number"?s.selected=a.includes(o?Qa(u):u):s.selected=fn(a,u)>-1}else s.selected=a.has(u);else if(li(Sa(s),a)){e.selectedIndex!==p&&(e.selectedIndex=p);return}}!r&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Sa(e){return"_value"in e?e._value:e.value}function dm(e,a){const n=a?"_trueValue":"_falseValue";return n in e?e[n]:a}const mm={created(e,a,n){$l(e,a,n,null,"created")},mounted(e,a,n){$l(e,a,n,null,"mounted")},beforeUpdate(e,a,n,o){$l(e,a,n,o,"beforeUpdate")},updated(e,a,n,o){$l(e,a,n,o,"updated")}};function pm(e,a){switch(e){case"SELECT":return cm;case"TEXTAREA":return Ul;default:switch(a){case"checkbox":return $s;case"radio":return Bs;default:return Ul}}}function $l(e,a,n,o,r){const p=pm(e.tagName,n.props&&n.props.type)[r];p&&p(e,a,n,o)}function hh(){Ul.getSSRProps=({value:e})=>({value:e}),Bs.getSSRProps=({value:e},a)=>{if(a.props&&li(a.props.value,e))return{checked:!0}},$s.getSSRProps=({value:e},a)=>{if(ge(e)){if(a.props&&fn(e,a.props.value)>-1)return{checked:!0}}else if(Wi(e)){if(a.props&&e.has(a.props.value))return{checked:!0}}else if(e)return{checked:!0}},mm.getSSRProps=(e,a)=>{if(typeof a.type!="string")return;const n=pm(a.type.toUpperCase(),a.props&&a.props.type);if(n.getSSRProps)return n.getSSRProps(e,a)}}const _h=["ctrl","shift","alt","meta"],bh={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,a)=>_h.some(n=>e[`${n}Key`]&&!a.includes(n))},It=(e,a)=>{const n=e._withMods||(e._withMods={}),o=a.join(".");return n[o]||(n[o]=(r,...c)=>{for(let p=0;p<a.length;p++){const f=bh[a[p]];if(f&&f(r,a))return}return e(r,...c)})},vh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},yh=(e,a)=>{const n=e._withKeys||(e._withKeys={}),o=a.join(".");return n[o]||(n[o]=r=>{if(!("key"in r))return;const c=Lt(r.key);if(a.some(p=>p===c||vh[p]===c))return e(r)})},fm=Xe({patchProp:nh},Ng);let Ja,kr=!1;function gm(){return Ja||(Ja=Fd(fm))}function hm(){return Ja=kr?Ja:Pd(fm),kr=!0,Ja}const Yl=(...e)=>{gm().render(...e)},_m=(...e)=>{hm().hydrate(...e)},bm=(...e)=>{const a=gm().createApp(...e),{mount:n}=a;return a.mount=o=>{const r=ym(o);if(!r)return;const c=a._component;!we(c)&&!c.render&&!c.template&&(c.template=r.innerHTML),r.innerHTML="";const p=n(r,!1,vm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),p},a},Sh=(...e)=>{const a=hm().createApp(...e),{mount:n}=a;return a.mount=o=>{const r=ym(o);if(r)return n(r,!0,vm(r))},a};function vm(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ym(e){return Qe(e)?document.querySelector(e):e}let xr=!1;const wh=()=>{xr||(xr=!0,hh(),Ug())};/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Ch=()=>{},Ah=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:_d,BaseTransitionPropsValidators:bs,Comment:ht,DeprecationTypes:Mg,EffectScope:es,ErrorCodes:cf,ErrorTypeStrings:Dg,Fragment:Ce,KeepAlive:Rf,ReactiveEffect:ba,Static:Hi,Suspense:Af,Teleport:xn,Text:Gi,TrackOpTypes:sf,Transition:Tn,TransitionGroup:um,TriggerOpTypes:rf,VueElement:Ln,assertNumber:uf,callWithAsyncErrorHandling:Dt,callWithErrorHandling:ai,camelize:vt,capitalize:dl,cloneVNode:Jt,compatUtils:Pg,compile:Ch,computed:H,createApp:bm,createBlock:D,createCommentVNode:As,createElementBlock:he,createElementVNode:S,createHydrationRenderer:Pd,createPropsRestProxy:Wf,createRenderer:Fd,createSSRApp:Sh,createSlots:Ff,createStaticVNode:vg,createTextVNode:l,createVNode:t,customRef:Zc,defineAsyncComponent:If,defineComponent:z,defineCustomElement:nm,defineEmits:Hf,defineExpose:Nf,defineModel:Gf,defineOptions:Of,defineProps:Vf,defineSSRCustomElement:sh,defineSlots:jf,devtools:Ig,effect:Tp,effectScope:$p,getCurrentInstance:Kt,getCurrentScope:ts,getTransitionRawChildren:wn,guardReactiveProps:qd,h:J,handleError:Qi,hasInjectionContext:lg,hydrate:_m,initCustomFormatter:Bg,initDirectivesForSSR:wh,inject:He,isMemoSame:Xd,isProxy:os,isReactive:Mi,isReadonly:Ni,isRef:mt,isRuntimeOnly:Ag,isShallow:Za,isVNode:Vt,markRaw:ss,mergeDefaults:Yf,mergeModels:Jf,mergeProps:ea,nextTick:Ta,normalizeClass:ml,normalizeProps:Cp,normalizeStyle:Ba,onActivated:vs,onBeforeMount:yd,onBeforeUnmount:kn,onBeforeUpdate:Sd,onDeactivated:ys,onErrorCaptured:kd,onMounted:$i,onRenderTracked:Ad,onRenderTriggered:Cd,onScopeDispose:Rc,onServerPrefetch:wd,onUnmounted:Zi,onUpdated:An,openBlock:$,popScopeId:sd,provide:dt,proxyRefs:cs,pushScopeId:od,queuePostFlushCb:Vl,reactive:oi,readonly:ns,ref:G,registerRuntimeCompiler:Cg,render:Yl,renderList:et,renderSlot:ji,resolveComponent:y,resolveDirective:Sn,resolveDynamicComponent:ud,resolveFilter:Fg,resolveTransitionHooks:va,setBlockTracking:yo,setDevtoolsHook:Eg,setTransitionHooks:Oi,shallowReactive:Wc,shallowReadonly:Kp,shallowRef:Xc,ssrContextKey:md,ssrUtils:zg,stop:Lp,toDisplayString:Te,toHandlerKey:Ga,toHandlers:Pf,toRaw:Ee,toRef:co,toRefs:lf,toValue:ef,transformVNodeArgs:_g,triggerRef:Zp,unref:d,useAttrs:$d,useCssModule:uh,useCssVars:Yg,useModel:$g,useSSRContext:pd,useSlots:Uf,useTransitionState:_s,vModelCheckbox:$s,vModelDynamic:mm,vModelRadio:Bs,vModelSelect:cm,vModelText:Ul,vShow:am,version:Qd,warn:Lg,watch:gt,watchEffect:hs,watchPostEffect:fd,watchSyncEffect:gd,withAsyncContext:Kf,withCtx:i,withDefaults:qf,withDirectives:wi,withKeys:yh,withMemo:Tg,withModifiers:It,withScopeId:_f},Symbol.toStringTag,{value:"Module"})),kh=z({name:"App"}),$e=(e,a)=>{const n=e.__vccOpts||e;for(const[o,r]of a)n[o]=r;return n};function xh(e,a,n,o,r,c){const p=y("router-view");return $(),D(p)}const $h=$e(kh,[["render",xh]]);/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Sm=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",La=e=>Sm?Symbol(e):"_vr_"+e,wm=La("rvlm"),$r=La("rvd"),Dn=La("r"),Ts=La("rl"),To=La("rvl"),la=typeof window<"u";function Bh(e){return e.__esModule||Sm&&e[Symbol.toStringTag]==="Module"}const Ye=Object.assign;function Un(e,a){const n={};for(const o in a){const r=a[o];n[o]=Array.isArray(r)?r.map(e):e(r)}return n}const Wa=()=>{},Th=/\/$/,Lh=e=>e.replace(Th,"");function Yn(e,a,n="/"){let o,r={},c="",p="";const f=a.indexOf("?"),s=a.indexOf("#",f>-1?f:0);return f>-1&&(o=a.slice(0,f),c=a.slice(f+1,s>-1?s:a.length),r=e(c)),s>-1&&(o=o||a.slice(0,s),p=a.slice(s,a.length)),o=Rh(o??a,n),{fullPath:o+(c&&"?")+c+p,path:o,query:r,hash:p}}function Dh(e,a){const n=a.query?e(a.query):"";return a.path+(n&&"?")+n+(a.hash||"")}function Br(e,a){return!a||!e.toLowerCase().startsWith(a.toLowerCase())?e:e.slice(a.length)||"/"}function Ih(e,a,n){const o=a.matched.length-1,r=n.matched.length-1;return o>-1&&o===r&&wa(a.matched[o],n.matched[r])&&Cm(a.params,n.params)&&e(a.query)===e(n.query)&&a.hash===n.hash}function wa(e,a){return(e.aliasOf||e)===(a.aliasOf||a)}function Cm(e,a){if(Object.keys(e).length!==Object.keys(a).length)return!1;for(const n in e)if(!Eh(e[n],a[n]))return!1;return!0}function Eh(e,a){return Array.isArray(e)?Tr(e,a):Array.isArray(a)?Tr(a,e):e===a}function Tr(e,a){return Array.isArray(a)?e.length===a.length&&e.every((n,o)=>n===a[o]):e.length===1&&e[0]===a}function Rh(e,a){if(e.startsWith("/"))return e;if(!e)return a;const n=a.split("/"),o=e.split("/");let r=n.length-1,c,p;for(c=0;c<o.length;c++)if(p=o[c],!(r===1||p==="."))if(p==="..")r--;else break;return n.slice(0,r).join("/")+"/"+o.slice(c-(c===o.length?1:0)).join("/")}var sl;(function(e){e.pop="pop",e.push="push"})(sl||(sl={}));var Ka;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ka||(Ka={}));function zh(e){if(!e)if(la){const a=document.querySelector("base");e=a&&a.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Lh(e)}const Fh=/^[^#]+#/;function Ph(e,a){return e.replace(Fh,"#")+a}function Mh(e,a){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:a.behavior,left:o.left-n.left-(a.left||0),top:o.top-n.top-(a.top||0)}}const In=()=>({left:window.pageXOffset,top:window.pageYOffset});function Vh(e){let a;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;a=Mh(r,e)}else a=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function Lr(e,a){return(history.state?history.state.position-a:-1)+e}const Lo=new Map;function Hh(e,a){Lo.set(e,a)}function Nh(e){const a=Lo.get(e);return Lo.delete(e),a}let Oh=()=>location.protocol+"//"+location.host;function Am(e,a){const{pathname:n,search:o,hash:r}=a,c=e.indexOf("#");if(c>-1){let f=r.includes(e.slice(c))?e.slice(c).length:1,s=r.slice(f);return s[0]!=="/"&&(s="/"+s),Br(s,"")}return Br(n,e)+o+r}function jh(e,a,n,o){let r=[],c=[],p=null;const f=({state:h})=>{const v=Am(e,location),b=n.value,C=a.value;let k=0;if(h){if(n.value=v,a.value=h,p&&p===b){p=null;return}k=C?h.position-C.position:0}else o(v);r.forEach(T=>{T(n.value,b,{delta:k,type:sl.pop,direction:k?k>0?Ka.forward:Ka.back:Ka.unknown})})};function s(){p=n.value}function u(h){r.push(h);const v=()=>{const b=r.indexOf(h);b>-1&&r.splice(b,1)};return c.push(v),v}function g(){const{history:h}=window;h.state&&h.replaceState(Ye({},h.state,{scroll:In()}),"")}function m(){for(const h of c)h();c=[],window.removeEventListener("popstate",f),window.removeEventListener("beforeunload",g)}return window.addEventListener("popstate",f),window.addEventListener("beforeunload",g),{pauseListeners:s,listen:u,destroy:m}}function Dr(e,a,n,o=!1,r=!1){return{back:e,current:a,forward:n,replaced:o,position:window.history.length,scroll:r?In():null}}function Gh(e){const{history:a,location:n}=window,o={value:Am(e,n)},r={value:a.state};r.value||c(o.value,{back:null,current:o.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function c(s,u,g){const m=e.indexOf("#"),h=m>-1?(n.host&&document.querySelector("base")?e:e.slice(m))+s:Oh()+e+s;try{a[g?"replaceState":"pushState"](u,"",h),r.value=u}catch(v){console.error(v),n[g?"replace":"assign"](h)}}function p(s,u){const g=Ye({},a.state,Dr(r.value.back,s,r.value.forward,!0),u,{position:r.value.position});c(s,g,!0),o.value=s}function f(s,u){const g=Ye({},r.value,a.state,{forward:s,scroll:In()});c(g.current,g,!0);const m=Ye({},Dr(o.value,s,null),{position:g.position+1},u);c(s,m,!1),o.value=s}return{location:o,state:r,push:f,replace:p}}function qh(e){e=zh(e);const a=Gh(e),n=jh(e,a.state,a.location,a.replace);function o(c,p=!0){p||n.pauseListeners(),history.go(c)}const r=Ye({location:"",base:e,go:o,createHref:Ph.bind(null,e)},a,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>a.state.value}),r}function Uh(e){return typeof e=="string"||e&&typeof e=="object"}function km(e){return typeof e=="string"||typeof e=="symbol"}const mi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xm=La("nf");var Ir;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ir||(Ir={}));function Ca(e,a){return Ye(new Error,{type:e,[xm]:!0},a)}function Ii(e,a){return e instanceof Error&&xm in e&&(a==null||!!(e.type&a))}const Er="[^/]+?",Yh={sensitive:!1,strict:!1,start:!0,end:!0},Jh=/[.+*?^${}()[\]/\\]/g;function Wh(e,a){const n=Ye({},Yh,a),o=[];let r=n.start?"^":"";const c=[];for(const u of e){const g=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let m=0;m<u.length;m++){const h=u[m];let v=40+(n.sensitive?.25:0);if(h.type===0)m||(r+="/"),r+=h.value.replace(Jh,"\\$&"),v+=40;else if(h.type===1){const{value:b,repeatable:C,optional:k,regexp:T}=h;c.push({name:b,repeatable:C,optional:k});const _=T||Er;if(_!==Er){v+=10;try{new RegExp(`(${_})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${b}" (${_}): `+x.message)}}let w=C?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;m||(w=k&&u.length<2?`(?:/${w})`:"/"+w),k&&(w+="?"),r+=w,v+=20,k&&(v+=-8),C&&(v+=-20),_===".*"&&(v+=-50)}g.push(v)}o.push(g)}if(n.strict&&n.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const p=new RegExp(r,n.sensitive?"":"i");function f(u){const g=u.match(p),m={};if(!g)return null;for(let h=1;h<g.length;h++){const v=g[h]||"",b=c[h-1];m[b.name]=v&&b.repeatable?v.split("/"):v}return m}function s(u){let g="",m=!1;for(const h of e){(!m||!g.endsWith("/"))&&(g+="/"),m=!1;for(const v of h)if(v.type===0)g+=v.value;else if(v.type===1){const{value:b,repeatable:C,optional:k}=v,T=b in u?u[b]:"";if(Array.isArray(T)&&!C)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const _=Array.isArray(T)?T.join("/"):T;if(!_)if(k)h.length<2&&(g.endsWith("/")?g=g.slice(0,-1):m=!0);else throw new Error(`Missing required param "${b}"`);g+=_}}return g}return{re:p,score:o,keys:c,parse:f,stringify:s}}function Kh(e,a){let n=0;for(;n<e.length&&n<a.length;){const o=a[n]-e[n];if(o)return o;n++}return e.length<a.length?e.length===1&&e[0]===80?-1:1:e.length>a.length?a.length===1&&a[0]===80?1:-1:0}function Xh(e,a){let n=0;const o=e.score,r=a.score;for(;n<o.length&&n<r.length;){const c=Kh(o[n],r[n]);if(c)return c;n++}return r.length-o.length}const Qh={type:0,value:""},Zh=/[a-zA-Z0-9_]/;function e_(e){if(!e)return[[]];if(e==="/")return[[Qh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function a(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,o=n;const r=[];let c;function p(){c&&r.push(c),c=[]}let f=0,s,u="",g="";function m(){u&&(n===0?c.push({type:0,value:u}):n===1||n===2||n===3?(c.length>1&&(s==="*"||s==="+")&&a(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),c.push({type:1,value:u,regexp:g,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):a("Invalid state to consume buffer"),u="")}function h(){u+=s}for(;f<e.length;){if(s=e[f++],s==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:s==="/"?(u&&m(),p()):s===":"?(m(),n=1):h();break;case 4:h(),n=o;break;case 1:s==="("?n=2:Zh.test(s)?h():(m(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&f--);break;case 2:s===")"?g[g.length-1]=="\\"?g=g.slice(0,-1)+s:n=3:g+=s;break;case 3:m(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&f--,g="";break;default:a("Unknown state");break}}return n===2&&a(`Unfinished custom RegExp for param "${u}"`),m(),p(),r}function t_(e,a,n){const o=Wh(e_(e.path),n),r=Ye(o,{record:e,parent:a,children:[],alias:[]});return a&&!r.record.aliasOf==!a.record.aliasOf&&a.children.push(r),r}function i_(e,a){const n=[],o=new Map;a=zr({strict:!1,end:!0,sensitive:!1},a);function r(g){return o.get(g)}function c(g,m,h){const v=!h,b=l_(g);b.aliasOf=h&&h.record;const C=zr(a,g),k=[b];if("alias"in g){const w=typeof g.alias=="string"?[g.alias]:g.alias;for(const x of w)k.push(Ye({},b,{components:h?h.record.components:b.components,path:x,aliasOf:h?h.record:b}))}let T,_;for(const w of k){const{path:x}=w;if(m&&x[0]!=="/"){const B=m.record.path,I=B[B.length-1]==="/"?"":"/";w.path=m.record.path+(x&&I+x)}if(T=t_(w,m,C),h?h.alias.push(T):(_=_||T,_!==T&&_.alias.push(T),v&&g.name&&!Rr(T)&&p(g.name)),"children"in b){const B=b.children;for(let I=0;I<B.length;I++)c(B[I],T,h&&h.children[I])}h=h||T,s(T)}return _?()=>{p(_)}:Wa}function p(g){if(km(g)){const m=o.get(g);m&&(o.delete(g),n.splice(n.indexOf(m),1),m.children.forEach(p),m.alias.forEach(p))}else{const m=n.indexOf(g);m>-1&&(n.splice(m,1),g.record.name&&o.delete(g.record.name),g.children.forEach(p),g.alias.forEach(p))}}function f(){return n}function s(g){let m=0;for(;m<n.length&&Xh(g,n[m])>=0;)m++;n.splice(m,0,g),g.record.name&&!Rr(g)&&o.set(g.record.name,g)}function u(g,m){let h,v={},b,C;if("name"in g&&g.name){if(h=o.get(g.name),!h)throw Ca(1,{location:g});C=h.record.name,v=Ye(a_(m.params,h.keys.filter(_=>!_.optional).map(_=>_.name)),g.params),b=h.stringify(v)}else if("path"in g)b=g.path,h=n.find(_=>_.re.test(b)),h&&(v=h.parse(b),C=h.record.name);else{if(h=m.name?o.get(m.name):n.find(_=>_.re.test(m.path)),!h)throw Ca(1,{location:g,currentLocation:m});C=h.record.name,v=Ye({},m.params,g.params),b=h.stringify(v)}const k=[];let T=h;for(;T;)k.unshift(T.record),T=T.parent;return{name:C,path:b,params:v,matched:k,meta:o_(k)}}return e.forEach(g=>c(g)),{addRoute:c,resolve:u,removeRoute:p,getRoutes:f,getRecordMatcher:r}}function a_(e,a){const n={};for(const o of a)o in e&&(n[o]=e[o]);return n}function l_(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:n_(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function n_(e){const a={},n=e.props||!1;if("component"in e)a.default=n;else for(const o in e.components)a[o]=typeof n=="boolean"?n:n[o];return a}function Rr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function o_(e){return e.reduce((a,n)=>Ye(a,n.meta),{})}function zr(e,a){const n={};for(const o in e)n[o]=o in a?a[o]:e[o];return n}const $m=/#/g,s_=/&/g,r_=/\//g,u_=/=/g,c_=/\?/g,Bm=/\+/g,d_=/%5B/g,m_=/%5D/g,Tm=/%5E/g,p_=/%60/g,Lm=/%7B/g,f_=/%7C/g,Dm=/%7D/g,g_=/%20/g;function Ls(e){return encodeURI(""+e).replace(f_,"|").replace(d_,"[").replace(m_,"]")}function h_(e){return Ls(e).replace(Lm,"{").replace(Dm,"}").replace(Tm,"^")}function Do(e){return Ls(e).replace(Bm,"%2B").replace(g_,"+").replace($m,"%23").replace(s_,"%26").replace(p_,"`").replace(Lm,"{").replace(Dm,"}").replace(Tm,"^")}function __(e){return Do(e).replace(u_,"%3D")}function b_(e){return Ls(e).replace($m,"%23").replace(c_,"%3F")}function v_(e){return e==null?"":b_(e).replace(r_,"%2F")}function Jl(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function y_(e){const a={};if(e===""||e==="?")return a;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<o.length;++r){const c=o[r].replace(Bm," "),p=c.indexOf("="),f=Jl(p<0?c:c.slice(0,p)),s=p<0?null:Jl(c.slice(p+1));if(f in a){let u=a[f];Array.isArray(u)||(u=a[f]=[u]),u.push(s)}else a[f]=s}return a}function Fr(e){let a="";for(let n in e){const o=e[n];if(n=__(n),o==null){o!==void 0&&(a+=(a.length?"&":"")+n);continue}(Array.isArray(o)?o.map(c=>c&&Do(c)):[o&&Do(o)]).forEach(c=>{c!==void 0&&(a+=(a.length?"&":"")+n,c!=null&&(a+="="+c))})}return a}function S_(e){const a={};for(const n in e){const o=e[n];o!==void 0&&(a[n]=Array.isArray(o)?o.map(r=>r==null?null:""+r):o==null?o:""+o)}return a}function za(){let e=[];function a(o){return e.push(o),()=>{const r=e.indexOf(o);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:a,list:()=>e,reset:n}}function w_(e,a,n){const o=()=>{e[a].delete(n)};Zi(o),ys(o),vs(()=>{e[a].add(n)}),e[a].add(n)}function C_(e){const a=He(wm,{}).value;a&&w_(a,"updateGuards",e)}function bi(e,a,n,o,r){const c=o&&(o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise((p,f)=>{const s=m=>{m===!1?f(Ca(4,{from:n,to:a})):m instanceof Error?f(m):Uh(m)?f(Ca(2,{from:a,to:m})):(c&&o.enterCallbacks[r]===c&&typeof m=="function"&&c.push(m),p())},u=e.call(o&&o.instances[r],a,n,s);let g=Promise.resolve(u);e.length<3&&(g=g.then(s)),g.catch(m=>f(m))})}function Jn(e,a,n,o){const r=[];for(const c of e)for(const p in c.components){let f=c.components[p];if(!(a!=="beforeRouteEnter"&&!c.instances[p]))if(A_(f)){const u=(f.__vccOpts||f)[a];u&&r.push(bi(u,n,o,c,p))}else{let s=f();r.push(()=>s.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${p}" at "${c.path}"`));const g=Bh(u)?u.default:u;c.components[p]=g;const h=(g.__vccOpts||g)[a];return h&&bi(h,n,o,c,p)()}))}}return r}function A_(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Pr(e){const a=He(Dn),n=He(Ts),o=H(()=>a.resolve(d(e.to))),r=H(()=>{const{matched:s}=o.value,{length:u}=s,g=s[u-1],m=n.matched;if(!g||!m.length)return-1;const h=m.findIndex(wa.bind(null,g));if(h>-1)return h;const v=Mr(s[u-2]);return u>1&&Mr(g)===v&&m[m.length-1].path!==v?m.findIndex(wa.bind(null,s[u-2])):h}),c=H(()=>r.value>-1&&$_(n.params,o.value.params)),p=H(()=>r.value>-1&&r.value===n.matched.length-1&&Cm(n.params,o.value.params));function f(s={}){return x_(s)?a[d(e.replace)?"replace":"push"](d(e.to)).catch(Wa):Promise.resolve()}return{route:o,href:H(()=>o.value.href),isActive:c,isExactActive:p,navigate:f}}const k_=z({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Pr,setup(e,{slots:a}){const n=oi(Pr(e)),{options:o}=He(Dn),r=H(()=>({[Vr(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Vr(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const c=a.default&&a.default(n);return e.custom?c:J("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},c)}}}),Ds=k_;function x_(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const a=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return e.preventDefault&&e.preventDefault(),!0}}function $_(e,a){for(const n in a){const o=a[n],r=e[n];if(typeof o=="string"){if(o!==r)return!1}else if(!Array.isArray(r)||r.length!==o.length||o.some((c,p)=>c!==r[p]))return!1}return!0}function Mr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Vr=(e,a,n)=>e??a??n,B_=z({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:a,slots:n}){const o=He(To),r=H(()=>e.route||o.value),c=He($r,0),p=H(()=>r.value.matched[c]);dt($r,c+1),dt(wm,p),dt(To,r);const f=G();return gt(()=>[f.value,p.value,e.name],([s,u,g],[m,h,v])=>{u&&(u.instances[g]=s,h&&h!==u&&s&&s===m&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),s&&u&&(!h||!wa(u,h)||!m)&&(u.enterCallbacks[g]||[]).forEach(b=>b(s))},{flush:"post"}),()=>{const s=r.value,u=p.value,g=u&&u.components[e.name],m=e.name;if(!g)return Hr(n.default,{Component:g,route:s});const h=u.props[e.name],v=h?h===!0?s.params:typeof h=="function"?h(s):h:null,C=J(g,Ye({},v,a,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(u.instances[m]=null)},ref:f}));return Hr(n.default,{Component:C,route:s})||C}}});function Hr(e,a){if(!e)return null;const n=e(a);return n.length===1?n[0]:n}const T_=B_;function L_(e){const a=i_(e.routes,e),n=e.parseQuery||y_,o=e.stringifyQuery||Fr,r=e.history,c=za(),p=za(),f=za(),s=Xc(mi);let u=mi;la&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const g=Un.bind(null,Y=>""+Y),m=Un.bind(null,v_),h=Un.bind(null,Jl);function v(Y,se){let oe,_e;return km(Y)?(oe=a.getRecordMatcher(Y),_e=se):_e=Y,a.addRoute(_e,oe)}function b(Y){const se=a.getRecordMatcher(Y);se&&a.removeRoute(se)}function C(){return a.getRoutes().map(Y=>Y.record)}function k(Y){return!!a.getRecordMatcher(Y)}function T(Y,se){if(se=Ye({},se||s.value),typeof Y=="string"){const xe=Yn(n,Y,se.path),L=a.resolve({path:xe.path},se),E=r.createHref(xe.fullPath);return Ye(xe,L,{params:h(L.params),hash:Jl(xe.hash),redirectedFrom:void 0,href:E})}let oe;if("path"in Y)oe=Ye({},Y,{path:Yn(n,Y.path,se.path).path});else{const xe=Ye({},Y.params);for(const L in xe)xe[L]==null&&delete xe[L];oe=Ye({},Y,{params:m(Y.params)}),se.params=m(se.params)}const _e=a.resolve(oe,se),Ne=Y.hash||"";_e.params=g(h(_e.params));const Oe=Dh(o,Ye({},Y,{hash:h_(Ne),path:_e.path})),ke=r.createHref(Oe);return Ye({fullPath:Oe,hash:Ne,query:o===Fr?S_(Y.query):Y.query||{}},_e,{redirectedFrom:void 0,href:ke})}function _(Y){return typeof Y=="string"?Yn(n,Y,s.value.path):Ye({},Y)}function w(Y,se){if(u!==Y)return Ca(8,{from:se,to:Y})}function x(Y){return M(Y)}function B(Y){return x(Ye(_(Y),{replace:!0}))}function I(Y){const se=Y.matched[Y.matched.length-1];if(se&&se.redirect){const{redirect:oe}=se;let _e=typeof oe=="function"?oe(Y):oe;return typeof _e=="string"&&(_e=_e.includes("?")||_e.includes("#")?_e=_(_e):{path:_e},_e.params={}),Ye({query:Y.query,hash:Y.hash,params:Y.params},_e)}}function M(Y,se){const oe=u=T(Y),_e=s.value,Ne=Y.state,Oe=Y.force,ke=Y.replace===!0,xe=I(oe);if(xe)return M(Ye(_(xe),{state:Ne,force:Oe,replace:ke}),se||oe);const L=oe;L.redirectedFrom=se;let E;return!Oe&&Ih(o,_e,oe)&&(E=Ca(16,{to:L,from:_e}),We(_e,_e,!0,!1)),(E?Promise.resolve(E):P(L,_e)).catch(O=>Ii(O)?O:de(O,L,_e)).then(O=>{if(O){if(Ii(O,2))return M(Ye(_(O.to),{state:Ne,force:Oe,replace:ke}),se||L)}else O=X(L,_e,!0,ke,Ne);return j(L,_e,O),O})}function V(Y,se){const oe=w(Y,se);return oe?Promise.reject(oe):Promise.resolve()}function P(Y,se){let oe;const[_e,Ne,Oe]=D_(Y,se);oe=Jn(_e.reverse(),"beforeRouteLeave",Y,se);for(const xe of _e)xe.leaveGuards.forEach(L=>{oe.push(bi(L,Y,se))});const ke=V.bind(null,Y,se);return oe.push(ke),ia(oe).then(()=>{oe=[];for(const xe of c.list())oe.push(bi(xe,Y,se));return oe.push(ke),ia(oe)}).then(()=>{oe=Jn(Ne,"beforeRouteUpdate",Y,se);for(const xe of Ne)xe.updateGuards.forEach(L=>{oe.push(bi(L,Y,se))});return oe.push(ke),ia(oe)}).then(()=>{oe=[];for(const xe of Y.matched)if(xe.beforeEnter&&!se.matched.includes(xe))if(Array.isArray(xe.beforeEnter))for(const L of xe.beforeEnter)oe.push(bi(L,Y,se));else oe.push(bi(xe.beforeEnter,Y,se));return oe.push(ke),ia(oe)}).then(()=>(Y.matched.forEach(xe=>xe.enterCallbacks={}),oe=Jn(Oe,"beforeRouteEnter",Y,se),oe.push(ke),ia(oe))).then(()=>{oe=[];for(const xe of p.list())oe.push(bi(xe,Y,se));return oe.push(ke),ia(oe)}).catch(xe=>Ii(xe,8)?xe:Promise.reject(xe))}function j(Y,se,oe){for(const _e of f.list())_e(Y,se,oe)}function X(Y,se,oe,_e,Ne){const Oe=w(Y,se);if(Oe)return Oe;const ke=se===mi,xe=la?history.state:{};oe&&(_e||ke?r.replace(Y.fullPath,Ye({scroll:ke&&xe&&xe.scroll},Ne)):r.push(Y.fullPath,Ne)),s.value=Y,We(Y,se,oe,ke),De()}let U;function pe(){U=r.listen((Y,se,oe)=>{const _e=T(Y),Ne=I(_e);if(Ne){M(Ye(Ne,{replace:!0}),_e).catch(Wa);return}u=_e;const Oe=s.value;la&&Hh(Lr(Oe.fullPath,oe.delta),In()),P(_e,Oe).catch(ke=>Ii(ke,12)?ke:Ii(ke,2)?(M(ke.to,_e).then(xe=>{Ii(xe,20)&&!oe.delta&&oe.type===sl.pop&&r.go(-1,!1)}).catch(Wa),Promise.reject()):(oe.delta&&r.go(-oe.delta,!1),de(ke,_e,Oe))).then(ke=>{ke=ke||X(_e,Oe,!1),ke&&(oe.delta?r.go(-oe.delta,!1):oe.type===sl.pop&&Ii(ke,20)&&r.go(-1,!1)),j(_e,Oe,ke)}).catch(Wa)})}let Be=za(),q=za(),K;function de(Y,se,oe){De(Y);const _e=q.list();return _e.length?_e.forEach(Ne=>Ne(Y,se,oe)):console.error(Y),Promise.reject(Y)}function ie(){return K&&s.value!==mi?Promise.resolve():new Promise((Y,se)=>{Be.add([Y,se])})}function De(Y){K||(K=!0,pe(),Be.list().forEach(([se,oe])=>Y?oe(Y):se()),Be.reset())}function We(Y,se,oe,_e){const{scrollBehavior:Ne}=e;if(!la||!Ne)return Promise.resolve();const Oe=!oe&&Nh(Lr(Y.fullPath,0))||(_e||!oe)&&history.state&&history.state.scroll||null;return Ta().then(()=>Ne(Y,se,Oe)).then(ke=>ke&&Vh(ke)).catch(ke=>de(ke,Y,se))}const st=Y=>r.go(Y);let Ue;const Xt=new Set;return{currentRoute:s,addRoute:v,removeRoute:b,hasRoute:k,getRoutes:C,resolve:T,options:e,push:x,replace:B,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:c.add,beforeResolve:p.add,afterEach:f.add,onError:q.add,isReady:ie,install(Y){const se=this;Y.component("RouterLink",Ds),Y.component("RouterView",T_),Y.config.globalProperties.$router=se,Object.defineProperty(Y.config.globalProperties,"$route",{enumerable:!0,get:()=>d(s)}),la&&!Ue&&s.value===mi&&(Ue=!0,x(r.location).catch(Ne=>{}));const oe={};for(const Ne in mi)oe[Ne]=H(()=>s.value[Ne]);Y.provide(Dn,se),Y.provide(Ts,oi(oe)),Y.provide(To,s);const _e=Y.unmount;Xt.add(Y),Y.unmount=function(){Xt.delete(Y),Xt.size<1&&(u=mi,U&&U(),s.value=mi,Ue=!1,K=!1),_e()}}}}function ia(e){return e.reduce((a,n)=>a.then(()=>n()),Promise.resolve())}function D_(e,a){const n=[],o=[],r=[],c=Math.max(a.matched.length,e.matched.length);for(let p=0;p<c;p++){const f=a.matched[p];f&&(e.matched.find(u=>wa(u,f))?o.push(f):n.push(f));const s=e.matched[p];s&&(a.matched.find(u=>wa(u,s))||r.push(s))}return[n,o,r]}function Im(){return He(Dn)}function Em(){return He(Ts)}const I_={__name:"Navbar",props:["onClick"],setup(e){const a=G(),n=Im();function o(r){return r.charAt(0).toUpperCase()+r.slice(1)}return hs(()=>{const p=n.currentRoute.value.path.match(/\/([^/]+)$/);p&&(a.value=o(p[1]))}),(r,c)=>{const p=y("SuiIcon"),f=y("SuiMenuItem"),s=y("SuiMenu");return $(),D(s,{id:"navbar",fixed:"",icon:"",inverted:"",size:"big"},{default:i(()=>[t(f,{onClick:e.onClick},{default:i(()=>[t(p,{name:"hamburger"})]),_:1},8,["onClick"]),t(f,null,{default:i(()=>[l(Te(a.value),1)]),_:1})]),_:1})}}},E_=$e(I_,[["__scopeId","data-v-338afb35"]]),R_=z({name:"Sidebar",setup(){const e=Em();return{isActive:p=>e.path===p,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),z_=S("strong",null," Fomantic UI Vue ",-1),F_=S("b",null,"Getting Started",-1);function P_(e,a,n,o,r,c){const p=y("sui-menu-item"),f=y("sui-menu-header"),s=y("sui-menu-menu"),u=y("sui-menu");return $(),D(u,{fluid:"",inverted:"",vertical:""},{default:i(()=>[t(p,{as:"div"},{default:i(()=>[z_]),_:1}),t(p,{as:"router-link",to:"/"},{default:i(()=>[F_]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Elements"}),t(s,null,{default:i(()=>[($(!0),he(Ce,null,et(e.elements,g=>($(),D(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Collections"}),t(s,null,{default:i(()=>[($(!0),he(Ce,null,et(e.collections,g=>($(),D(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Views"}),t(s,null,{default:i(()=>[($(!0),he(Ce,null,et(e.views,g=>($(),D(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Modules"}),t(s,null,{default:i(()=>[($(!0),he(Ce,null,et(e.modules,g=>($(),D(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const M_=$e(R_,[["render",P_]]),V_={class:"sidemenu"},H_={style:{flex:"1","overflow-y":"scroll"}},N_={__name:"Sidebar",setup(e){return(a,n)=>($(),he("div",V_,[S("div",H_,[t(M_)])]))}},O_=$e(N_,[["__scopeId","data-v-379ef704"]]),j_=z({name:"Sidebar",setup(){const e=Em();return{isActive:p=>e.path===p,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),G_=S("strong",null," Fomantic UI Vue ",-1),q_=S("b",null,"Getting Started",-1);function U_(e,a,n,o,r,c){const p=y("sui-menu-item"),f=y("sui-menu-header"),s=y("sui-menu-menu"),u=y("sui-sidebar");return $(),D(u,{dimmed:"",inverted:"",style:{width:"250px"}},{default:i(()=>[t(p,{as:"div"},{default:i(()=>[G_]),_:1}),t(p,{as:"router-link",to:"/"},{default:i(()=>[q_]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Elements"}),t(s,null,{default:i(()=>[($(!0),he(Ce,null,et(e.elements,g=>($(),D(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Collections"}),t(s,null,{default:i(()=>[($(!0),he(Ce,null,et(e.collections,g=>($(),D(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Views"}),t(s,null,{default:i(()=>[($(!0),he(Ce,null,et(e.views,g=>($(),D(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Modules"}),t(s,null,{default:i(()=>[($(!0),he(Ce,null,et(e.modules,g=>($(),D(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const Y_=$e(j_,[["render",U_]]),J_={class:"pusher",style:{height:"100vh"}},W_={class:"article"},K_={__name:"Home",setup(e){const a=G(!1),n=()=>a.value=!a.value;return C_(()=>{a.value=!1}),(o,r)=>{const c=y("router-view"),p=y("SuiSegment");return $(),D(p,{class:"pushable",style:{border:"none"}},{default:i(()=>[t(Y_,{visible:a.value},null,8,["visible"]),S("div",J_,[t(O_),t(E_,{"on-click":n}),S("div",W_,[t(c)])])]),_:1})}}},X_=$e(K_,[["__scopeId","data-v-0bfd4ee9"]]),Q_={__name:"DocSections",props:["docs"],setup(e){const a=e,n=H(()=>[...new Set(a.docs.map(o=>o.category))]);return(o,r)=>{const c=y("SuiHeader");return $(!0),he(Ce,null,et(n.value,(p,f)=>($(),he(Ce,{key:p},[t(c,{as:"h2",dividing:"",style:Ba({marginTop:f!==0?"5rem":"0",paddingTop:"2rem"})},{default:i(()=>[l(Te(p),1)]),_:2},1032,["style"]),($(!0),he(Ce,null,et(e.docs.filter(s=>s.category===p),(s,u)=>($(),D(ud(s.component),{key:s.label+"_"+u,id:s.id,style:{paddingTop:"3rem"}},null,8,["id"]))),128))],64))),128)}}},Z_=e=>(od("data-v-e2ae2e49"),e=e(),sd(),e),eb={class:"item"},tb=Z_(()=>S("i",{class:"dropdown icon"},null,-1)),ib={class:"content menu active"},ab={__name:"DocTableLink",props:["header","items"],setup(e){const{id:a}=$d(),n=p=>{p.preventDefault();const f=document.getElementById(a);f.open?r(f):(f.open=!0,o(f))},o=p=>{p.querySelector(".title").classList.add("active");const s=p.querySelector(".content"),u=s.offsetHeight;s.style.maxHeight=0,requestAnimationFrame(()=>{s.style.maxHeight=`${u}px`});const g=new AbortController;s.addEventListener("transitionend",()=>{s.removeAttribute("style"),g.abort()},{signal:g.signal})},r=p=>{const f=p.querySelector(".title"),s=p.querySelector(".content"),u=s.offsetHeight;s.style.maxHeight=`${u}px`,requestAnimationFrame(()=>{s.style.maxHeight=0,f.classList.remove("active")});const g=new AbortController;s.addEventListener("transitionend",()=>{s.removeAttribute("style"),p.open=!1,g.abort()},{signal:g.signal})},c=(p,f)=>{p.preventDefault(),document.getElementById(f.replace("_link","")).scrollIntoView({behavior:"smooth",block:"start"})};return(p,f)=>($(),he("details",eb,[S("summary",{class:"title",onClick:n},[tb,S("b",null,Te(e.header),1)]),S("div",ib,[($(!0),he(Ce,null,et(e.items,s=>($(),D(d(Ds),{to:`#${s.id}`,class:"item",onClick:u=>c(u,s.id)},{default:i(()=>[l(Te(s.label),1)]),_:2},1032,["to","onClick"]))),256))])]))}},lb=$e(ab,[["__scopeId","data-v-e2ae2e49"]]),nb={class:"sticky"},ob={class:"ui vertical following fluid accordion text large menu"},sb={__name:"DocTableContents",props:["title","links"],setup(e){const a=e,n=[...new Set(a.links.map(o=>o.category))];return(o,r)=>{const c=y("SuiHeader"),p=y("SuiRail");return $(),D(p,{id:"table-contents",position:"right",dividing:""},{default:i(()=>[S("div",nb,[t(c,{as:"h3"},{default:i(()=>[l(Te(e.title),1)]),_:1}),S("div",ob,[($(),he(Ce,null,et(n,f=>t(lb,{id:`${f}_link`,header:f,items:e.links.filter(s=>s.category===f)},null,8,["id","header","items"])),64))])])]),_:1})}}},rb=$e(sb,[["__scopeId","data-v-bd90305d"]]),ub={class:"intro"},cb={__name:"DocComponent",props:["title","description","componentDocs"],setup(e){const a=G();return(n,o)=>{const r=y("SuiHeaderSubheader"),c=y("SuiHeader"),p=y("SuiDivider"),f=y("SuiIcon"),s=y("SuiMenuItem"),u=y("SuiPopup"),g=y("SuiMenu"),m=y("SuiContainer"),h=y("SuiSegment");return $(),he("div",null,[t(h,{id:"masthead",vertical:"",style:{"border-bottom":"1px solid #DDDDDD"}},{default:i(()=>[t(m,{class:"main"},{default:i(()=>[S("div",ub,[t(c,{as:"h1"},{default:i(()=>[l(Te(e.title)+" ",1),t(r,null,{default:i(()=>[l(Te(e.description),1)]),_:1})]),_:1}),t(p,{hidden:""}),t(g,{icon:"",floated:"right"},{default:i(()=>[t(s,{as:"a",icon:"",ref_key:"el",ref:a,href:"https://github.com/nightswinger/vue-fomantic-ui"},{default:i(()=>[t(f,{name:"alternate github"})]),_:1},512),t(u,{trigger:a.value,position:"top right"},{default:i(()=>[l(" View Project on GitHub ")]),_:1},8,["trigger"])]),_:1})])]),_:1})]),_:1}),t(m,{class:"main"},{default:i(()=>[t(h,{basic:"",fitted:""},{default:i(()=>[e.componentDocs?($(),he(Ce,{key:0},[t(Q_,{docs:e.componentDocs},null,8,["docs"]),t(rb,{title:e.title,links:e.componentDocs},null,8,["title","links"])],64)):As("",!0),ji(n.$slots,"default",{},void 0,!0)]),_:3})]),_:3})])}}},_t=$e(cb,[["__scopeId","data-v-d22eb33f"]]);var Nr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function db(e){if(e.__esModule)return e;var a=e.default;if(typeof a=="function"){var n=function o(){return this instanceof o?Reflect.construct(a,arguments,this.constructor):a.apply(this,arguments)};n.prototype=a.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(o){var r=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(n,o,r.get?r:{enumerable:!0,get:function(){return e[o]}})}),n}var zm={exports:{}};(function(e){var a=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(o){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,c=0,p={},f={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function _(w){return w instanceof s?new s(w.type,_(w.content),w.alias):Array.isArray(w)?w.map(_):w.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(_){return Object.prototype.toString.call(_).slice(8,-1)},objId:function(_){return _.__id||Object.defineProperty(_,"__id",{value:++c}),_.__id},clone:function _(w,x){x=x||{};var B,I;switch(f.util.type(w)){case"Object":if(I=f.util.objId(w),x[I])return x[I];B={},x[I]=B;for(var M in w)w.hasOwnProperty(M)&&(B[M]=_(w[M],x));return B;case"Array":return I=f.util.objId(w),x[I]?x[I]:(B=[],x[I]=B,w.forEach(function(V,P){B[P]=_(V,x)}),B);default:return w}},getLanguage:function(_){for(;_;){var w=r.exec(_.className);if(w)return w[1].toLowerCase();_=_.parentElement}return"none"},setLanguage:function(_,w){_.className=_.className.replace(RegExp(r,"gi"),""),_.classList.add("language-"+w)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(B){var _=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(B.stack)||[])[1];if(_){var w=document.getElementsByTagName("script");for(var x in w)if(w[x].src==_)return w[x]}return null}},isActive:function(_,w,x){for(var B="no-"+w;_;){var I=_.classList;if(I.contains(w))return!0;if(I.contains(B))return!1;_=_.parentElement}return!!x}},languages:{plain:p,plaintext:p,text:p,txt:p,extend:function(_,w){var x=f.util.clone(f.languages[_]);for(var B in w)x[B]=w[B];return x},insertBefore:function(_,w,x,B){B=B||f.languages;var I=B[_],M={};for(var V in I)if(I.hasOwnProperty(V)){if(V==w)for(var P in x)x.hasOwnProperty(P)&&(M[P]=x[P]);x.hasOwnProperty(V)||(M[V]=I[V])}var j=B[_];return B[_]=M,f.languages.DFS(f.languages,function(X,U){U===j&&X!=_&&(this[X]=M)}),M},DFS:function _(w,x,B,I){I=I||{};var M=f.util.objId;for(var V in w)if(w.hasOwnProperty(V)){x.call(w,V,w[V],B||V);var P=w[V],j=f.util.type(P);j==="Object"&&!I[M(P)]?(I[M(P)]=!0,_(P,x,null,I)):j==="Array"&&!I[M(P)]&&(I[M(P)]=!0,_(P,x,V,I))}}},plugins:{},highlightAll:function(_,w){f.highlightAllUnder(document,_,w)},highlightAllUnder:function(_,w,x){var B={callback:x,container:_,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};f.hooks.run("before-highlightall",B),B.elements=Array.prototype.slice.apply(B.container.querySelectorAll(B.selector)),f.hooks.run("before-all-elements-highlight",B);for(var I=0,M;M=B.elements[I++];)f.highlightElement(M,w===!0,B.callback)},highlightElement:function(_,w,x){var B=f.util.getLanguage(_),I=f.languages[B];f.util.setLanguage(_,B);var M=_.parentElement;M&&M.nodeName.toLowerCase()==="pre"&&f.util.setLanguage(M,B);var V=_.textContent,P={element:_,language:B,grammar:I,code:V};function j(U){P.highlightedCode=U,f.hooks.run("before-insert",P),P.element.innerHTML=P.highlightedCode,f.hooks.run("after-highlight",P),f.hooks.run("complete",P),x&&x.call(P.element)}if(f.hooks.run("before-sanity-check",P),M=P.element.parentElement,M&&M.nodeName.toLowerCase()==="pre"&&!M.hasAttribute("tabindex")&&M.setAttribute("tabindex","0"),!P.code){f.hooks.run("complete",P),x&&x.call(P.element);return}if(f.hooks.run("before-highlight",P),!P.grammar){j(f.util.encode(P.code));return}if(w&&o.Worker){var X=new Worker(f.filename);X.onmessage=function(U){j(U.data)},X.postMessage(JSON.stringify({language:P.language,code:P.code,immediateClose:!0}))}else j(f.highlight(P.code,P.grammar,P.language))},highlight:function(_,w,x){var B={code:_,grammar:w,language:x};if(f.hooks.run("before-tokenize",B),!B.grammar)throw new Error('The language "'+B.language+'" has no grammar.');return B.tokens=f.tokenize(B.code,B.grammar),f.hooks.run("after-tokenize",B),s.stringify(f.util.encode(B.tokens),B.language)},tokenize:function(_,w){var x=w.rest;if(x){for(var B in x)w[B]=x[B];delete w.rest}var I=new m;return h(I,I.head,_),g(_,I,w,I.head,0),b(I)},hooks:{all:{},add:function(_,w){var x=f.hooks.all;x[_]=x[_]||[],x[_].push(w)},run:function(_,w){var x=f.hooks.all[_];if(!(!x||!x.length))for(var B=0,I;I=x[B++];)I(w)}},Token:s};o.Prism=f;function s(_,w,x,B){this.type=_,this.content=w,this.alias=x,this.length=(B||"").length|0}s.stringify=function _(w,x){if(typeof w=="string")return w;if(Array.isArray(w)){var B="";return w.forEach(function(j){B+=_(j,x)}),B}var I={type:w.type,content:_(w.content,x),tag:"span",classes:["token",w.type],attributes:{},language:x},M=w.alias;M&&(Array.isArray(M)?Array.prototype.push.apply(I.classes,M):I.classes.push(M)),f.hooks.run("wrap",I);var V="";for(var P in I.attributes)V+=" "+P+'="'+(I.attributes[P]||"").replace(/"/g,"&quot;")+'"';return"<"+I.tag+' class="'+I.classes.join(" ")+'"'+V+">"+I.content+"</"+I.tag+">"};function u(_,w,x,B){_.lastIndex=w;var I=_.exec(x);if(I&&B&&I[1]){var M=I[1].length;I.index+=M,I[0]=I[0].slice(M)}return I}function g(_,w,x,B,I,M){for(var V in x)if(!(!x.hasOwnProperty(V)||!x[V])){var P=x[V];P=Array.isArray(P)?P:[P];for(var j=0;j<P.length;++j){if(M&&M.cause==V+","+j)return;var X=P[j],U=X.inside,pe=!!X.lookbehind,Be=!!X.greedy,q=X.alias;if(Be&&!X.pattern.global){var K=X.pattern.toString().match(/[imsuy]*$/)[0];X.pattern=RegExp(X.pattern.source,K+"g")}for(var de=X.pattern||X,ie=B.next,De=I;ie!==w.tail&&!(M&&De>=M.reach);De+=ie.value.length,ie=ie.next){var We=ie.value;if(w.length>_.length)return;if(!(We instanceof s)){var st=1,Ue;if(Be){if(Ue=u(de,De,_,pe),!Ue||Ue.index>=_.length)break;var se=Ue.index,Xt=Ue.index+Ue[0].length,Rt=De;for(Rt+=ie.value.length;se>=Rt;)ie=ie.next,Rt+=ie.value.length;if(Rt-=ie.value.length,De=Rt,ie.value instanceof s)continue;for(var Y=ie;Y!==w.tail&&(Rt<Xt||typeof Y.value=="string");Y=Y.next)st++,Rt+=Y.value.length;st--,We=_.slice(De,Rt),Ue.index-=De}else if(Ue=u(de,0,We,pe),!Ue)continue;var se=Ue.index,oe=Ue[0],_e=We.slice(0,se),Ne=We.slice(se+oe.length),Oe=De+We.length;M&&Oe>M.reach&&(M.reach=Oe);var ke=ie.prev;_e&&(ke=h(w,ke,_e),De+=_e.length),v(w,ke,st);var xe=new s(V,U?f.tokenize(oe,U):oe,q,oe);if(ie=h(w,ke,xe),Ne&&h(w,ie,Ne),st>1){var L={cause:V+","+j,reach:Oe};g(_,w,x,ie.prev,De,L),M&&L.reach>M.reach&&(M.reach=L.reach)}}}}}}function m(){var _={value:null,prev:null,next:null},w={value:null,prev:_,next:null};_.next=w,this.head=_,this.tail=w,this.length=0}function h(_,w,x){var B=w.next,I={value:x,prev:w,next:B};return w.next=I,B.prev=I,_.length++,I}function v(_,w,x){for(var B=w.next,I=0;I<x&&B!==_.tail;I++)B=B.next;w.next=B,B.prev=w,_.length-=I}function b(_){for(var w=[],x=_.head.next;x!==_.tail;)w.push(x.value),x=x.next;return w}if(!o.document)return o.addEventListener&&(f.disableWorkerMessageHandler||o.addEventListener("message",function(_){var w=JSON.parse(_.data),x=w.language,B=w.code,I=w.immediateClose;o.postMessage(f.highlight(B,f.languages[x],x)),I&&o.close()},!1)),f;var C=f.util.currentScript();C&&(f.filename=C.src,C.hasAttribute("data-manual")&&(f.manual=!0));function k(){f.manual||f.highlightAll()}if(!f.manual){var T=document.readyState;T==="loading"||T==="interactive"&&C&&C.defer?document.addEventListener("DOMContentLoaded",k):window.requestAnimationFrame?window.requestAnimationFrame(k):window.setTimeout(k,16)}return f}(a);e.exports&&(e.exports=n),typeof Nr<"u"&&(Nr.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(r,c){var p={};p["language-"+c]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[c]},p.cdata=/^<!\[CDATA\[|\]\]>$/i;var f={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:p}};f["language-"+c]={pattern:/[\s\S]+/,inside:n.languages[c]};var s={};s[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:f},n.languages.insertBefore("markup","cdata",s)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(o,r){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:n.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(o){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var c=o.languages.markup;c&&(c.tag.addInlined("style","css"),c.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading…",r=function(C,k){return"✖ Error "+C+" while fetching file: "+k},c="✖ Error: File does not exist or is empty",p={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},f="data-src-status",s="loading",u="loaded",g="failed",m="pre[data-src]:not(["+f+'="'+u+'"]):not(['+f+'="'+s+'"])';function h(C,k,T){var _=new XMLHttpRequest;_.open("GET",C,!0),_.onreadystatechange=function(){_.readyState==4&&(_.status<400&&_.responseText?k(_.responseText):_.status>=400?T(r(_.status,_.statusText)):T(c))},_.send(null)}function v(C){var k=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(C||"");if(k){var T=Number(k[1]),_=k[2],w=k[3];return _?w?[T,Number(w)]:[T,void 0]:[T,T]}}n.hooks.add("before-highlightall",function(C){C.selector+=", "+m}),n.hooks.add("before-sanity-check",function(C){var k=C.element;if(k.matches(m)){C.code="",k.setAttribute(f,s);var T=k.appendChild(document.createElement("CODE"));T.textContent=o;var _=k.getAttribute("data-src"),w=C.language;if(w==="none"){var x=(/\.(\w+)$/.exec(_)||[,"none"])[1];w=p[x]||x}n.util.setLanguage(T,w),n.util.setLanguage(k,w);var B=n.plugins.autoloader;B&&B.loadLanguages(w),h(_,function(I){k.setAttribute(f,u);var M=v(k.getAttribute("data-range"));if(M){var V=I.split(/\r\n?|\n/g),P=M[0],j=M[1]==null?V.length:M[1];P<0&&(P+=V.length),P=Math.max(0,Math.min(P-1,V.length)),j<0&&(j+=V.length),j=Math.max(0,Math.min(j,V.length)),I=V.slice(P,j).join(`
`),k.hasAttribute("data-start")||k.setAttribute("data-start",String(P+1))}T.textContent=I,n.highlightElement(T)},function(I){k.setAttribute(f,g),T.textContent=I})}}),n.plugins.fileHighlight={highlight:function(k){for(var T=(k||document).querySelectorAll(m),_=0,w;w=T[_++];)n.highlightElement(w)}};var b=!1;n.fileHighlight=function(){b||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),b=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(zm);var Fm=zm.exports;const mb=Rm(Fm),Rl={mounted(e,a){var r;const n=a.modifiers,o=a.value;n.script||o==="script"?e.className="language-javascript":e.className="language-markup",mb.highlightElement(e.children[0]),(r=e.children[0].parentElement)==null||r.setAttribute("tabindex","-1")}},pb={style:{paddingTop:"3rem"}},fb=S("p",null," Fomantic-UI Vue provides UI components based on Fomantic-UI. ",-1),gb=S("code",null,`$ npm install vue-fomantic-ui
$ npm install fomantic-ui-css
# or
$ yarn add vue-fomantic-ui
$ yarn add fomantic-ui-css`,-1),hb=[gb],_b={style:{paddingTop:"3rem",marginBottom:"3rem"}},bb=S("p",null," You can import all components as Vue plugin. ",-1),vb=S("code",null,`import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

const app = createApp(App)

app.use(FomanticUI)`,-1),yb=[vb],Sb=S("br",null,null,-1),wb=S("p",null," Or pick a component indivisually, add it to your components option. ",-1),Cb=S("code",null,`import { SuiButton } from 'vue-fomantic-ui'

export default {
  components: { SuiButton },
  // ...
}`,-1),Ab=[Cb],kb={__name:"GettingStarted",setup(e){return(a,n)=>{const o=y("SuiHeader");return $(),D(_t,{title:"Getting Started",description:"Getting up and running with Fomantic-UI Vue"},{default:i(()=>[S("section",pb,[t(o,{as:"h2"},{default:i(()=>[l("Install")]),_:1}),fb,t(o,{as:"h3"},{default:i(()=>[l("via Package Manager")]),_:1}),wi(($(),he("pre",null,hb)),[[d(Rl)]])]),S("section",_b,[t(o,{as:"h2"},{default:i(()=>[l("Usage")]),_:1}),bb,wi(($(),he("pre",null,yb)),[[d(Rl),void 0,void 0,{script:!0}]]),Sb,wb,wi(($(),he("pre",null,Ab)),[[d(Rl),void 0,void 0,{script:!0}]])])]),_:1})}}};function Pm(e){var a,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(n=Pm(e[a]))&&(o&&(o+=" "),o+=n);else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function ee(){for(var e,a,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(a=Pm(e))&&(o&&(o+=" "),o+=a);return o}const A=(e,a)=>e?a:"",Me=(e,a)=>typeof e=="string"?`${e} ${a}`:"",Pe=(e,a)=>e===!0?a:e==="below"?`${a} ${e}`:typeof e=="string"?`${e} ${a}`:"",Da=e=>e==="justified"?"justified":Me(e,"aligned"),ri=(e,a)=>typeof e=="number"&&a?`${Io(e)} ${a}`:typeof e=="number"&&!a?Io(e):typeof e=="string"&&e==="equal"?`${e} width`:"",Fa=(e,a)=>e?`${Io(e)} wide ${a}`:"",Io=e=>["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"][e-1],W=z({name:"SuiIcon",props:{as:String,bordered:Boolean,circular:Boolean,color:String,colored:Boolean,corner:[Boolean,String],disabled:Boolean,fitted:Boolean,flipped:String,inverted:Boolean,link:Boolean,loading:Boolean,name:String,primary:Boolean,rotated:String,secondary:Boolean,size:String},setup(e){return{classes:H(()=>ee(e.color,e.name,e.size,A(e.primary,"primary"),A(e.secondary,"secondary"),A(e.bordered,"bordered"),A(e.circular,"circular"),A(e.colored,"colored"),A(e.disabled,"disabled"),A(e.fitted,"fitted"),A(e.inverted,"inverted"),A(e.link,"link"),A(e.loading,"loading"),Me(e.flipped,"flipped"),Me(e.rotated,"rotated"),Pe(e.corner,"corner"),"icon"))}},render(){let e=this.$props.as||"i";return J(e,{"aria-hidden":!0,class:this.classes})}}),yi=z({name:"SuiIconGroup",props:{as:String,size:String},setup(e){return{computedClass:H(()=>ee(e.size,"icons"))}},render(){var e,a;let n=this.$props.as||"i";return J(n,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),xb={install(e){e.component(W.name,W),e.component(yi.name,yi)}},$b=()=>({icon:[Boolean,String]}),Bb=e=>({iconClasses:H(()=>typeof e.icon=="boolean"&&e.icon||e.labeled&&e.icon?"icon":ee({icon:e.icon&&!e.content}))}),Tb=["right","left"],Lb=()=>({labeled:[Boolean,String]}),Db=e=>({labeledClasses:H(()=>typeof e.labeled=="boolean"&&e.labeled?"labeled":Tb.includes(e.labeled)?`${e.labeled} labeled`:"")}),Ib=["double","elastic"],Eb=()=>({loading:{type:[Boolean,String],validator:e=>Ib.includes(e)||typeof e=="boolean"}}),Rb=e=>({loadingClasses:H(()=>ee(e.loading,{loading:e.loading}))}),F=z({name:"SuiButton",props:{active:Boolean,animated:[Boolean,String],as:{type:String,default:"button"},attached:String,basic:Boolean,circular:Boolean,color:String,compact:Boolean,content:[String,Array],disabled:Boolean,facebook:Boolean,floated:String,fluid:Boolean,google:Boolean,linkedin:Boolean,instagram:Boolean,inverted:Boolean,negative:Boolean,positive:Boolean,primary:Boolean,secondary:Boolean,size:String,telegram:Boolean,tertiary:Boolean,toggle:Boolean,twitter:Boolean,vk:Boolean,whatsapp:Boolean,youtube:Boolean,...$b(),...Lb(),...Eb()},setup(e){const{iconClasses:a}=Bb(e),{labeledClasses:n}=Db(e),{loadingClasses:o}=Rb(e);return{classes:H(()=>ee("ui",e.color,e.size,A(e.active,"active"),A(e.basic,"basic"),A(e.circular,"circular"),A(e.compact,"compact"),A(e.disabled,"disabled"),A(e.facebook,"facebook"),A(e.fluid,"fluid"),A(e.google,"google"),A(e.linkedin,"linkedin"),A(e.instagram,"instagram"),A(e.inverted,"inverted"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.primary,"primary"),A(e.secondary,"secondary"),A(e.telegram,"telegram"),A(e.tertiary,"tertiary"),A(e.toggle,"toggle"),A(e.twitter,"twitter"),A(e.vk,"vk"),A(e.whatsapp,"whatsapp"),A(e.youtube,"youtube"),Me(e.attached,"attached"),Me(e.floated,"floated"),Pe(e.animated,"animated"),a.value,n.value,o.value,"button"))}},render(){let e=this.as||"div";return t(e,{class:this.classes,role:"button"},{default:()=>{var a,n;return[typeof this.icon=="string"&&t(W,{name:this.icon},null),this.content||((n=(a=this.$slots).default)==null?void 0:n.call(a))]}})}}),vi=z({name:"SuiButtonContent",props:{hidden:Boolean,visible:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.hidden,"hidden"),A(e.visible,"visible"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),pt=z({name:"SuiButtonGroup",props:{attached:String,basic:Boolean,color:String,icon:Boolean,labeled:Boolean,size:String,vertical:Boolean,widths:Number},setup(e){return{computedClass:H(()=>ee("ui",e.color,e.size,A(e.basic,"basic"),A(e.icon,"icon"),A(e.labeled,"labeled"),A(e.vertical,"vertical"),Me(e.attached,"attached"),ri(e.widths,""),"buttons"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),zb={install(e){e.component(F.name,F),e.component(vi.name,vi),e.component(pt.name,pt)}},Ci=z({name:"SuiContainer",props:{fluid:Boolean,text:Boolean,textAlign:String},setup(e){return{computedClass:H(()=>ee("ui",A(e.fluid,"fluid"),A(e.text,"text"),Da(e.textAlign),"container"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Fb={install(e){e.component(Ci.name,Ci)}},Pb=["mini","tiny","small","medium","large","big","huge","massive"],Mm=()=>({size:{type:String,validator:e=>Pb.includes(e)}}),Vm=e=>({sizeClass:H(()=>e.size)}),Ve=z({name:"SuiDivider",props:{clearing:Boolean,fitted:Boolean,hidden:Boolean,horizontal:Boolean,inverted:Boolean,section:Boolean,textAlign:String,vertical:Boolean,...Mm()},setup(e){const{sizeClass:a}=Vm(e);return{classes:H(()=>ee("ui",a.value,A(e.clearing,"clearing"),A(e.fitted,"fitted"),A(e.hidden,"hidden"),A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),A(e.section,"section"),A(e.vertical,"vertical"),Me(e.textAlign,"aligned"),"divider"))}},render(){var e,a;return J("div",{class:this.classes},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Mb={install(e){e.component(Ve.name,Ve)}},At=z({name:"SuiEmoji",props:{disabled:Boolean,link:Boolean,loading:Boolean,name:String,size:String},setup(e){return{computedClass:H(()=>ee(e.size,A(e.disabled,"disabled"),A(e.link,"link"),A(e.loading,"loading")))}},render(){return this.computedClass?J("em",{class:this.computedClass,"data-emoji":this.$props.name}):J("em",{"data-emoji":this.$props.name})}}),Vb={install(e){e.component(At.name,At)}},Nt=z({name:"SuiFlag",props:{name:String,...Mm()},setup(e){const{sizeClass:a}=Vm(e);return{classes:H(()=>ee(a.value,e.name,"flag"))}},render(){return J("i",{class:this.classes})}}),Hb={install(e){e.component(Nt.name,Nt)}},Aa=z({name:"SuiHeaderSubheader",props:{as:String},setup(e){return{elementType:e.as||"div"}},render(){var e,a;return J(this.elementType,{class:"sub header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),fe=z({name:"SuiHeader",components:{HeaderSubheader:Aa},props:{as:String,attached:[Boolean,String],block:Boolean,color:String,content:String,disabled:Boolean,dividing:Boolean,floated:String,icon:Boolean,image:Boolean,inverted:Boolean,primary:Boolean,secondary:Boolean,size:String,sub:Boolean,subheader:String,textAlign:String},setup(e){const a=e.as||"div",n=H(()=>ee("ui",e.color,e.size,A(e.primary,"primary"),A(e.secondary,"secondary"),A(e.block,"block"),A(e.disabled,"disabled"),A(e.dividing,"dividing"),A(e.icon,"icon"),A(e.image,"image"),A(e.inverted,"inverted"),A(e.sub,"sub"),Me(e.floated,"floated"),Pe(e.attached,"attached"),Da(e.textAlign),"header"));return{elementType:a,computedClass:n}},render(){var e,a;let n=[];return this.content&&n.push(this.content),this.subheader&&n.push(J(Aa,{},this.subheader)),n.length>0?J(this.elementType,{class:this.computedClass},n):J(this.elementType,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Wl=z({name:"SuiHeaderContent",render(){var e,a;return J("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Nb={install(e){e.component(fe.name,fe),e.component(Wl.name,Wl),e.component(Aa.name,Aa)}},Hm=["top","middle","bottom"],Ob={verticalAlign:{type:String,validator:e=>Hm.includes(e)}};function jb(e){return{verticalAlignClass:H(()=>e.verticalAlign&&Hm.includes(e.verticalAlign)?`${e.verticalAlign} aligned`:null)}}const Gb=["left","right"],qb={floated:{type:String,validator:e=>Gb.includes(e)}};function Ub(e){return{floatedClass:H(()=>e.floated&&(e.floated==="left"||e.floated==="right")?`${e.floated} floated`:null)}}const N=z({name:"SuiLabel",props:{as:String,attached:String,basic:Boolean,circular:Boolean,color:String,corner:String,empty:Boolean,floating:Boolean,horizontal:Boolean,icon:String,image:Boolean,inverted:Boolean,pointing:[Boolean,String],prompt:Boolean,ribbon:[Boolean,String],size:String,tag:Boolean},setup(e,{slots:a}){const n=H(()=>ee("ui",e.size,e.color,A(e.basic,"basic"),A(e.circular,"circular"),A(e.empty,"empty"),A(e.floating,"floating"),A(e.horizontal,"horizontal"),A(!!e.icon&&a.default===void 0,"icon"),A(e.image,"image"),A(e.inverted,"inverted"),A(e.prompt,"prompt"),A(e.tag,"tag"),Me(e.attached,"attached"),Me(e.corner,"corner"),Pe(e.pointing,"pointing"),Pe(e.ribbon,"ribbon"),"label"));let o=e.as||"div";return e.icon?()=>{var r;return J(o,{class:n.value},[J(W,{name:e.icon}),(r=a.default)==null?void 0:r.call(a)])}:()=>{var r;return J(o,{class:n.value},(r=a.default)==null?void 0:r.call(a))}}}),Yi=z({name:"SuiLabelDetail",render(){var e,a;return t("div",{class:"detail"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Ji=z({name:"SuiLabelGroup",props:{basic:Boolean,circular:Boolean,color:String,size:String,tag:Boolean},setup(e,{slots:a}){const n=H(()=>ee("ui",e.color,e.size,A(e.basic,"basic"),A(e.circular,"circular"),A(e.tag,"tag"),"labels"));return()=>{var o;return J("div",{class:n.value},(o=a.default)==null?void 0:o.call(a))}}}),Yb={install(e){e.component(N.name,N),e.component(Yi.name,Yi),e.component(Ji.name,Ji)}},ce=z({name:"SuiImage",props:{as:String,avatar:Boolean,bordered:Boolean,centered:Boolean,circular:Boolean,disabled:Boolean,fluid:Boolean,hidden:Boolean,href:String,inline:Boolean,label:Object,target:String,wrapped:Boolean,rounded:Boolean,size:String,spaced:[Boolean,String],src:String,...Ob,...qb},setup(e,{slots:a}){const{verticalAlignClass:n}=jb(e),{floatedClass:o}=Ub(e),r=H(()=>ee("ui",e.size,n.value,o.value,A(e.avatar,"avatar"),A(e.bordered,"bordered"),A(e.centered,"centered"),A(e.circular,"circular"),A(e.disabled,"disabled"),A(e.fluid,"fluid"),A(e.hidden,"hidden"),A(e.inline,"inline"),A(e.rounded,"rounded"),Pe(e.spaced,"spaced"),"image"));if(e.as==="a"||e.as==="router-link"){let c=e.as;return e.as==="router-link"&&(c=y(e.as)),()=>{var p;return J(c,{class:r.value,href:e.href,target:e.target&&e.target},J("img",{src:e.src},(p=a.default)==null?void 0:p.call(a)))}}return e.wrapped?()=>{var c;return J("div",{class:r.value},J("img",{src:e.src},(c=a.default)==null?void 0:c.call(a)))}:e.label?()=>J("div",{class:r.value},[J("img",{src:e.src}),J(N,{...e.label})]):()=>t("img",{class:r.value,src:e.src},null)}}),Kl=z({name:"SuiImageGroup",props:{size:String},setup(e,{slots:a}){const n=H(()=>ee("ui",e.size,"images"));return()=>{var o;return J("div",{class:n.value},(o=a.default)==null?void 0:o.call(a))}}}),Jb={install(e){e.component(ce.name,ce),e.component(Kl.name,Kl)}},Ze=z({name:"SuiInput",emits:["update:modelValue"],props:{action:String,disabled:Boolean,error:Boolean,fluid:Boolean,focus:Boolean,icon:String,iconPosition:String,inverted:Boolean,label:String,labeled:Boolean,loading:Boolean,modelValue:String,placeholder:String,size:String,transparent:Boolean,type:String},setup(e,{emit:a}){const n=H(()=>typeof e.icon=="string"||e.loading),o=H(()=>!!e.label||e.labeled),r=H(()=>ee("ui",e.size,e.action&&"action",A(e.disabled,"disabled"),A(e.error,"error"),A(e.fluid,"fluid"),A(e.focus,"focus"),e.iconPosition,A(n.value,"icon"),A(e.inverted,"inverted"),A(e.loading,"loading"),A(e.transparent,"transparent"),A(o.value,"labeled"),"input")),c=p=>a("update:modelValue",p.target.value);return()=>t("div",{class:r.value},[e.label&&t(N,null,{default:()=>[e.label]}),t("input",{type:e.type||"text",placeholder:e.placeholder,value:e.modelValue,onInput:p=>c(p)},null),n.value&&t(W,{name:e.icon||"spinner"},null),e.action&&t(F,null,{default:()=>[e.action]})])}}),Wb={install(e){e.component(Ze.name,Ze)}},Eo=z({name:"SuiList",props:{animated:Boolean,as:String,bulleted:Boolean,celled:Boolean,divided:Boolean,floated:String,horizontal:Boolean,inverted:Boolean,ordered:Boolean,relaxed:Boolean,link:Boolean,selection:Boolean,verticalAlign:String},setup(e,{slots:a}){const n=H(()=>ee("ui",A(e.animated,"animated"),A(e.bulleted,"bulleted"),A(e.celled,"celled"),A(e.divided,"divided"),A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),A(e.link,"link"),A(e.ordered,"ordered"),A(e.relaxed,"relaxed"),A(e.selection,"selection"),Me(e.verticalAlign,"aligned"),Me(e.floated,"floated"),"list"));let o=e.as||"div";return()=>{var r;return J(o,{class:n.value},(r=a.default)==null?void 0:r.call(a))}}}),na=z({name:"SuiListItem",props:{active:Boolean,as:String,disabled:Boolean},setup(e,{slots:a}){let n=e.as||"div";const o=H(()=>ee(A(e.active,"active"),A(e.disabled,"disabled"),"item"));return()=>{var r;return J(n,{class:o.value},(r=a.default)==null?void 0:r.call(a))}}}),Or=z({name:"SuiListIcon",components:{Icon:W},setup(e,{slots:a}){return()=>{var n;return J(y(W.name),{...e},(n=a.default)==null?void 0:n.call(a))}}}),jr=z({name:"SuiListContent",props:{verticalAlign:String},setup(e){return{computedClass:H(()=>ee(Me(e.verticalAlign,"aligned"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Gr=z({name:"SuiListHeader",props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:a}){return()=>{var n;return J(e.as,{class:"header"},(n=a.default)==null?void 0:n.call(a))}}}),qr=z({name:"SuiListDescription",props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:a}){return()=>{var n;return J(e.as,{class:"description"},(n=a.default)==null?void 0:n.call(a))}}}),Ur=z({name:"SuiListList",render(){var e,a;return t("div",{class:"list"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Kb={install(e){e.component(Eo.name,Eo),e.component(na.name,na),e.component(Or.name,Or),e.component(jr.name,jr),e.component(Gr.name,Gr),e.component(qr.name,qr),e.component(Ur.name,Ur)}},Re=z({name:"SuiLoader",props:{active:Boolean,color:String,disabled:Boolean,fast:Boolean,indeterminate:Boolean,inline:[Boolean,String],inverted:Boolean,size:String,slow:Boolean,text:Boolean},setup(e,{slots:a}){return{computedClass:H(()=>{var n;return ee("ui",e.color,e.size,A(e.active,"active"),A(e.disabled,"disabled"),A(e.fast,"fast"),A(e.indeterminate,"indeterminate"),A(e.inverted,"inverted"),A(e.slow,"slow"),A(e.text||!!((n=a.default)!=null&&n.call(a)),"text"),Pe(e.inline,"inline"),"loader")})}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Xb={install(e){e.component(Re.name,Re)}},Yr=z({name:"SuiRail",props:{attached:Boolean,close:[Boolean,String],dividing:Boolean,internal:Boolean,position:String,size:String},setup(e){return{computedClass:H(()=>ee("ui",e.position,e.size,A(e.attached,"attached"),A(e.dividing,"dividing"),A(e.internal,"internal"),Pe(e.close,"close"),"rail"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Qb={install(e){e.component(Yr.name,Yr)}},Jr=z({name:"SuiReveal",props:{active:Boolean,animated:String,disabled:Boolean,instant:Boolean},setup(e){return{computedClass:H(()=>ee("ui",e.animated,A(e.active,"active"),A(e.disabled,"disabled"),A(e.instant,"instant"),"reveal"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Wr=z({name:"SuiRevealContent",props:{visible:Boolean,hidden:Boolean},setup(e){return{computedClass:H(()=>ee("ui",A(e.visible,"visible"),A(e.hidden,"hidden"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Zb={install(e){e.component(Jr.name,Jr),e.component(Wr.name,Wr)}},Le=z({name:"SuiSegment",props:{attached:[Boolean,String],basic:Boolean,circular:Boolean,clearing:Boolean,color:String,compact:Boolean,disabled:Boolean,fitted:[Boolean,String],floated:String,inverted:Boolean,loading:Boolean,padded:[Boolean,String],piled:Boolean,placeholder:Boolean,raised:Boolean,secondary:Boolean,size:String,stacked:Boolean,tertiary:Boolean,textAlign:String,vertical:Boolean},setup(e){return{computedClass:H(()=>ee("ui",e.color,e.size,A(e.basic,"basic"),A(e.circular,"circular"),A(e.clearing,"clearing"),A(e.compact,"compact"),A(e.disabled,"disabled"),A(e.inverted,"inverted"),A(e.loading,"loading"),A(e.piled,"piled"),A(e.placeholder,"placeholder"),A(e.raised,"raised"),A(e.secondary,"secondary"),A(e.stacked,"stacked"),A(e.tertiary,"tertiary"),A(e.vertical,"vertical"),Me(e.floated,"floated"),Me(e.textAlign,"aligned"),Pe(e.attached,"attached"),Pe(e.fitted,"fitted"),Pe(e.padded,"padded"),"segment"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Kr=z({name:"SuiSegmentGroup",props:{compact:Boolean,horizontal:Boolean,piled:Boolean,raised:Boolean,size:String,stacked:Boolean},setup(e){return{computedClass:H(()=>ee("ui",e.size,A(e.compact,"compact"),A(e.horizontal,"horizontal"),A(e.piled,"piled"),A(e.raised,"raised"),A(e.stacked,"stacked"),"segments"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Xr=z({name:"SuiSegmentInline",render(){var e,a;return t("div",{class:"inline"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),ev={install(e){e.component(Le.name,Le),e.component(Kr.name,Kr),e.component(Xr.name,Xr)}},Qr=z({name:"SuiStep",props:{active:Boolean,completed:Boolean,disabled:Boolean,fluid:Boolean,href:String,link:Boolean,vertical:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.active,"active"),A(e.completed,"completed"),A(e.disabled,"disabled"),A(e.fluid,"fluid"),A(e.link,"link"),A(e.vertical,"vertical"),"step"))}},render(){var e,a,n,o;return this.href?t("a",{class:this.computedClass,href:this.href},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("div",{class:this.computedClass},[(o=(n=this.$slots).default)==null?void 0:o.call(n)])}}),tv=["one","two","three","four","five","six","seven","eight"],Zr=z({name:"SuiStepGroup",props:{attached:String,fluid:Boolean,inverted:Boolean,ordered:Boolean,size:String,stackable:String,unstackable:Boolean,vertical:Boolean,widths:Number},setup(e){const{widths:a}=e;return{computedClass:H(()=>ee("ui",a&&tv[a-1],e.size,A(e.fluid,"fluid"),A(e.inverted,"inverted"),A(e.ordered,"ordered"),A(e.unstackable,"unstackable"),A(e.vertical,"vertical"),Me(e.attached,"attached"),Me(e.stackable,"stackable"),"steps"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),eu=z({name:"SuiStepContent",render(){var e,a;return t("div",{class:"content"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),tu=z({name:"SuiStepTitle",render(){var e,a;return t("div",{class:"title"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),iu=z({name:"SuiStepDescription",render(){var e,a;return t("div",{class:"description"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),iv={install(e){e.component(Qr.name,Qr),e.component(Zr.name,Zr),e.component(eu.name,eu),e.component(tu.name,tu),e.component(iu.name,iu)}},av=Object.freeze(Object.defineProperty({__proto__:null,Button:zb,Container:Fb,Divider:Mb,Emoji:Vb,Flag:Hb,Header:Nb,Icon:xb,Image:Jb,Input:Wb,Label:Yb,List:Kb,Loader:Xb,Rail:Qb,Reveal:Zb,Segment:ev,Step:iv},Symbol.toStringTag,{value:"Module"})),kt=z({name:"SuiBreadcrumbDivider",props:{icon:String},setup(e){return{computedClass:H(()=>ee(e.icon,"icon","divider"))}},render(){var e,a;return this.icon?t("i",{"aria-hidden":"true",class:this.computedClass},null):t("div",{class:"divider"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),it=z({name:"SuiBreadcrumbSection",props:{active:Boolean,href:String,link:Boolean,to:String},setup(e){const a=H(()=>ee(A(e.active,"active"),"section")),n=e.link||!!e.href;return{computedClass:a,isLink:n}},render(){let e="div";this.isLink?e="a":this.to&&(e=y("router-link"));const a={href:this.href,to:this.to};return t(e,ea({class:this.computedClass},a),{default:()=>{var n,o;return[(o=(n=this.$slots).default)==null?void 0:o.call(n)]}})}}),Wt=z({name:"SuiBreadcrumb",props:{icon:String,inverted:Boolean,sections:{type:Array,default:()=>[]},size:String},setup(e){return{computedClass:H(()=>ee("ui",e.size,A(e.inverted,"inverted"),"breadcrumb"))}},render(){var e,a;const n=()=>{var o;return(o=this.sections)==null?void 0:o.map((r,c)=>{const p={active:r.active,href:r.href,link:r.link,to:r.to};return t(Ce,null,[t(it,p,{default:()=>[r.content]}),this.sections.length!==c+1&&t(kt,{icon:this.icon},{default:()=>[l(" / ")]})])})};return t("div",{class:this.computedClass},[((a=(e=this.$slots).default)==null?void 0:a.call(e))||n()])}}),lv={install(e){e.component(Wt.name,Wt),e.component(kt.name,kt),e.component(it.name,it)}},Et=z({name:"SuiForm",props:{error:Boolean,inverted:Boolean,loading:Boolean,reply:Boolean,success:Boolean,unstackable:Boolean,warning:Boolean,size:String},setup(e){return{computedClass:H(()=>ee("ui",e.size,A(e.error,"error"),A(e.inverted,"inverted"),A(e.loading,"loading"),A(e.reply,"reply"),A(e.success,"success"),A(e.unstackable,"unstackable"),A(e.warning,"warning"),"form"))}},render(){var e,a;return t("form",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),au=["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"];function nv(e){return{widthClass:H(()=>Number(e.width)>0?`${au[Number(e.width)-1]} wide`:typeof e.width=="string"||au.includes(e.width)?`${e.width} wide`:null)}}const at=z({name:"SuiFormField",emits:["update:modelValue"],props:{disabled:Boolean,error:Boolean,inline:Boolean,label:String,modelValue:String,placeholder:String,required:Boolean,type:String,width:String||Number},setup(e,{emit:a}){const{widthClass:n}=nv(e),o=H(()=>ee(A(e.disabled,"disabled"),A(e.error,"error"),A(e.inline,"inline"),A(e.required,"required"),n.value,"field")),r=e.type||"text";return{computedClass:o,inputType:r,onInput:c=>a("update:modelValue",c.target.value)}},render(){var e,a;return this.label?t("div",{class:this.computedClass},[t("label",null,[this.label]),t("input",{type:this.inputType,placeholder:this.placeholder,value:this.modelValue,onInput:this.onInput},null)]):t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Xl=z({name:"SuiFormGroup",props:{widths:String},setup(e){return{computedClass:H(()=>ee(Me(e.widths,"width"),"fields"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Ql=z({name:"SuiFormTextarea",props:{label:String,placeholder:String,rows:[Number,String]},render(){return this.label?t("div",{class:"field"},[t("label",null,[this.label]),t("textarea",{placeholder:this.placeholder,rows:this.rows},null)]):t("div",{class:"field"},[t("textarea",{placeholder:this.placeholder,rows:this.rows},null)])}}),ov={install(e){e.component(Et.name,Et),e.component(at.name,at),e.component(Xl.name,Xl),e.component(Ql.name,Ql)}},ka=z({name:"SuiGrid",props:{celled:[Boolean,String],centered:Boolean,columns:[Number,String],compact:Boolean,container:Boolean,divided:[Boolean,String],doubling:Boolean,inverted:Boolean,padded:[Boolean,String],relaxed:[Boolean,String],reversed:String,stackable:Boolean,textAlign:String,verticalAlign:String},setup(e){return{computedClass:H(()=>ee("ui",e.container&&"container",A(e.centered,"centered"),A(e.compact,"compact"),A(e.doubling,"doubling"),A(e.inverted,"inverted"),A(e.stackable,"stackable"),Me(e.reversed,"reversed"),Me(e.verticalAlign,"aligned"),Pe(e.celled,"celled"),Pe(e.divided,"divided"),Pe(e.padded,"padded"),Pe(e.relaxed,"relaxed"),Da(e.textAlign),ri(e.columns,"column"),"grid"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),St=z({name:"SuiGridColumn",props:{color:String,computer:Number,floated:String,largeScreen:Number,mobile:Number,only:String,tablet:Number,textAlign:String,width:Number,widescreen:Number},setup(e){return{computedClass:H(()=>ee(e.color,Me(e.floated,"floated"),Me(e.only,"only"),Da(e.textAlign),ri(e.width,"wide"),Fa(e.mobile,"mobile"),Fa(e.tablet,"tablet"),Fa(e.computer,"computer"),Fa(e.largeScreen,"large screen"),Fa(e.widescreen,"widescreen"),"column"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Zl=z({name:"SuiGridRow",props:{centered:Boolean,color:String,columns:Number,only:String,stretched:Boolean,textAlign:String},setup(e){return{computedClass:H(()=>ee(e.color,A(e.centered,"centered"),A(e.stretched,"stretched"),Me(e.only,"only"),ri(e.columns,"column"),Da(e.textAlign),"row"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),sv={install(e){e.component(ka.name,ka),e.component(St.name,St),e.component(Zl.name,Zl)}},Ro=z({name:"SuiMenu",props:{attached:[Boolean,String],borderless:Boolean,color:Boolean,compact:Boolean,fixed:Boolean,floated:[Boolean,String],fluid:Boolean,icon:[Boolean,String],inverted:Boolean,pagination:Boolean,pointing:Boolean,secondary:Boolean,size:String,stackable:Boolean,tabular:[Boolean,String],text:Boolean,vertical:Boolean,widths:Number},setup(e){return{computedClass:H(()=>ee("ui",e.color,e.size,A(e.borderless,"borderless"),A(e.compact,"compact"),A(e.fixed,"fixed"),A(e.fluid,"fluid"),A(e.inverted,"inverted"),A(e.pagination,"pagination"),A(e.pointing,"pointing"),A(e.secondary,"secondary"),A(e.stackable,"stackable"),A(e.text,"text"),A(e.vertical,"vertical"),Pe(e.attached,"attached"),Pe(e.floated,"floated"),Pe(e.icon,"icon"),Pe(e.tabular,"tabular"),ri(e.widths,"item"),"menu"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),lu=z({name:"SuiMenuHeader",props:{as:String,content:String},setup(e,{slots:a}){let n=e.as||"div";return()=>t(n,{class:"header"},{default:()=>{var o;return[e.content||((o=a.default)==null?void 0:o.call(a))]}})}}),en=z({name:"SuiMenuItem",props:{action:Boolean,active:Boolean,as:String,browse:Boolean,color:String,disabled:Boolean,fitted:[Boolean,String],header:Boolean,icon:Boolean,index:Number,link:Boolean,name:String,position:String,stackable:Boolean},setup(e,{slots:a}){let n=e.as||"a";e.header&&(n="div"),e.as==="router-link"&&(n=y(e.as));const o=H(()=>ee(e.color,e.position,A(e.action,"action"),A(e.active,"active"),A(e.browse,"browse"),A(e.disabled,"disabled"),A(e.header,"header"),A(e.icon,"icon"),A(e.link,"link"),Pe(e.fitted,"fitted"),"item"));return()=>t(n,{class:o.value},{default:()=>{var r;return[e.name||((r=a.default)==null?void 0:r.call(a))]}})}}),nu=z({name:"SuiMenuMenu",props:{position:String},setup(e){const{position:a}=e;return{computedClass:H(()=>ee(a,"menu"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),rv={install(e){e.component(Ro.name,Ro),e.component(lu.name,lu),e.component(en.name,en),e.component(nu.name,nu)}},rl=z({name:"SuiMessage",props:{attached:[Boolean,String],color:String,compact:Boolean,content:String,header:String,error:Boolean,floating:Boolean,hidden:Boolean,icon:Boolean,info:Boolean,negative:Boolean,positive:Boolean,size:String,success:Boolean,visible:Boolean,warning:Boolean},setup(e){return{computedClass:H(()=>ee("ui",e.color,e.size,A(e.compact,"compact"),A(e.error,"error"),A(e.floating,"floating"),A(e.hidden,"hidden"),A(e.icon,"icon"),A(e.info,"info"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.success,"success"),A(e.visible,"visible"),A(e.warning,"warning"),Pe(e.attached,"attached"),"message"))}},render(){var e,a;return t("div",{class:this.computedClass},[(this.header||this.content)&&t(zo,null,{default:()=>[t(Fo,null,{default:()=>[this.header]}),t("p",null,[this.content])]}),(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),zo=z({name:"SuiMessageContent",render(){var e,a;return J("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Fo=z({name:"SuiMessageHeader",render(){var e,a;return J("div",{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ou=z({name:"SuiMessageItem",render(){var e,a;return J("li",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),su=z({name:"SuiMessageList",render(){var e,a;return J("ul",{class:"list"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),uv={install(e){e.component(rl.name,rl),e.component(zo.name,zo),e.component(Fo.name,Fo),e.component(ou.name,ou),e.component(su.name,su)}},ru=z({name:"SuiTable",props:{attached:[Boolean,String],basic:[Boolean,String],celled:Boolean,collapsing:Boolean,color:String,columns:Number,compact:[Boolean,String],definition:Boolean,fixed:Boolean,inverted:Boolean,padded:[Boolean,String],selectable:Boolean,singleLine:Boolean,size:String,stackable:Boolean,striped:Boolean,structured:Boolean,unstackable:Boolean},setup(e){return{computedClass:H(()=>ee("ui",e.color,e.size,A(e.celled,"celled"),A(e.collapsing,"collapsing"),A(e.definition,"definition"),A(e.fixed,"fixed"),A(e.inverted,"inverted"),A(e.selectable,"selectable"),A(e.singleLine,"single line"),A(e.stackable,"stackable"),A(e.striped,"striped"),A(e.structured,"structured"),A(e.unstackable,"unstackable"),Pe(e.attached,"attached"),Pe(e.basic,"basic"),Pe(e.compact,"compact"),Pe(e.padded,"padded"),ri(e.columns,"column"),"table"))}},render(){var e,a;return t("table",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),uu=z({name:"SuiTableBody",render(){var e,a;return J("tbody",{},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),cu=z({name:"SuiTableCell",props:{active:Boolean,collapsing:Boolean,color:String,disabled:Boolean,error:Boolean,marked:String,negative:Boolean,positive:Boolean,selectable:Boolean,singleLine:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:H(()=>ee(e.color,A(e.active,"active"),A(e.collapsing,"collapsing"),A(e.disabled,"disabled"),A(e.error,"error"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.selectable,"selectable"),A(e.singleLine,"single line"),A(e.warning,"warning"),Me(e.verticalAlign,"aligned"),Me(e.marked,"marked"),Da(e.textAlign)))}},render(){var e,a,n,o;return this.computedClass?t("td",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("td",null,[(o=(n=this.$slots).default)==null?void 0:o.call(n)])}}),du=z({name:"SuiTableFooter",props:{fullWidth:Boolean},setup(e){const{fullWidth:a}=e;return{computedClass:H(()=>ee(A(a,"full-width")))}},render(){var e,a,n,o;return this.computedClass?J("tfoot",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):J("tfoot",{},(o=(n=this.$slots).default)==null?void 0:o.call(n))}}),mu=z({name:"SuiTableHeader",props:{fullWidth:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.fullWidth,"full-width")))}},render(){var e,a,n,o;return this.computedClass?J("thead",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):J("thead",{},(o=(n=this.$slots).default)==null?void 0:o.call(n))}}),pu=z({name:"SuiTableHeaderCell",props:{singleLine:Boolean,textAlign:String,width:Number},setup(e){return{computedClass:H(()=>ee(A(e.singleLine,"single line"),Me(e.textAlign,"aligned"),ri(e.width,"wide")))}},render(){var e,a,n,o;return this.computedClass?t("th",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("th",null,[(o=(n=this.$slots).default)==null?void 0:o.call(n)])}}),fu=z({name:"SuiTableRow",props:{active:Boolean,color:String,disabled:Boolean,error:Boolean,negative:Boolean,positive:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:H(()=>ee(e.color,A(e.active,"active"),A(e.disabled,"disabled"),A(e.error,"error"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.warning,"warning"),Me(e.textAlign,"aligned"),Me(e.verticalAlign,"aligned")))}},render(){var e,a,n,o;return this.computedClass?t("tr",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("tr",null,[(o=(n=this.$slots).default)==null?void 0:o.call(n)])}}),cv={install(e){e.component(ru.name,ru),e.component(uu.name,uu),e.component(cu.name,cu),e.component(du.name,du),e.component(mu.name,mu),e.component(pu.name,pu),e.component(fu.name,fu)}},dv=Object.freeze(Object.defineProperty({__proto__:null,Breadcrumb:lv,Form:ov,Grid:sv,Menu:rv,Message:uv,Table:cv},Symbol.toStringTag,{value:"Module"})),gu=z({name:"SuiAdvertisement",props:{centered:Boolean,test:String,unit:String},setup(e){return{computedClass:H(()=>ee("ui",e.unit,A(e.centered,"centered"),A(!!e.test,"test"),"ad"))}},render(){var e,a,n,o;return this.$props.test?J("div",{class:this.computedClass,"data-text":this.$props.test},(a=(e=this.$slots).default)==null?void 0:a.call(e)):J("div",{class:this.computedClass},(o=(n=this.$slots).default)==null?void 0:o.call(n))}}),mv={install(e){e.component(gu.name,gu)}},hu=z({name:"SuiCard",props:{centered:Boolean,color:String,fluid:Boolean,horizontal:Boolean,href:String,link:Boolean,raised:Boolean},setup(e){return{computedClass:H(()=>ee("ui",e.color,A(e.centered,"centered"),A(e.fluid,"fluid"),A(e.horizontal,"horizontal"),A(e.link,"link"),A(e.raised,"raised"),"card"))}},render(){var e,a,n,o;return this.$props.href||this.$props.link?J("a",{class:this.computedClass,href:this.$slots.href},(a=(e=this.$slots).default)==null?void 0:a.call(e)):J("div",{class:this.computedClass},(o=(n=this.$slots).default)==null?void 0:o.call(n))}}),_u=z({name:"SuiCardContent",props:{extra:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.extra,"extra"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),bu=z({name:"SuiCardDescription",props:{textAlign:String},setup(e){return{computedClass:H(()=>ee(Me(e.textAlign,"aligned"),"description"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),vu=z({name:"SuiCardGroup",props:{centered:Boolean,doubling:Boolean,inverted:Boolean,itemsPerRow:Number,stackable:Boolean},setup(e){return{computedClass:H(()=>ee("ui",A(e.centered,"centered"),A(e.doubling,"doubling"),A(e.inverted,"inverted"),A(e.stackable,"stackable"),ri(e.itemsPerRow,""),"cards"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),yu=z({name:"SuiCardHeader",props:{textAlign:String},setup(e){return{computedClass:H(()=>ee(Me(e.textAlign,"aligned"),"header"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Su=z({name:"SuiCardMeta",render(){var e,a;return J("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),pv={install(e){e.component(hu.name,hu),e.component(_u.name,_u),e.component(bu.name,bu),e.component(vu.name,vu),e.component(yu.name,yu),e.component(Su.name,Su)}},wu=z({name:"SuiComment",render(){var e,a;return J("div",{class:"comment"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Cu=z({name:"SuiCommentAction",props:{active:Boolean},setup(e){const{active:a}=e;return{computedClass:H(()=>ee(A(a,"active")))}},render(){var e,a,n,o;return this.computedClass?J("a",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):J("a",{},(o=(n=this.$slots).default)==null?void 0:o.call(n))}}),Au=z({name:"SuiCommentActions",render(){var e,a;return J("div",{class:"actions"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ku=z({name:"SuiCommentAuthor",props:{as:String},render(){var e,a;let n=this.$props.as||"div";return J(n,{class:"author"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),xu=z({name:"SuiCommentAvatar",props:{as:String,src:String},render(){let e=this.$props.as||"div";return J(e,{class:"avatar"},J("img",{src:this.$props.src}))}}),$u=z({name:"SuiCommentContent",render(){var e,a;return J("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Bu=z({name:"SuiCommentGroup",props:{collapsed:Boolean,inverted:Boolean,minimal:Boolean,size:String,threaded:Boolean},setup(e){return{computedClass:H(()=>ee("ui",e.size,A(e.collapsed,"collapsed"),A(e.inverted,"inverted"),A(e.minimal,"minimal"),A(e.threaded,"threaded"),"comments"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Tu=z({name:"SuiCommentMetadata",render(){var e,a;return J("div",{class:"metadata"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Lu=z({name:"SuiCommentText",render(){var e,a;return J("div",{class:"text"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),fv={install(e){e.component(wu.name,wu),e.component(Cu.name,Cu),e.component(Au.name,Au),e.component(ku.name,ku),e.component(xu.name,xu),e.component($u.name,$u),e.component(Bu.name,Bu),e.component(Tu.name,Tu),e.component(Lu.name,Lu)}},Du=z({name:"SuiFeed",props:{inverted:Boolean,size:String},setup(e){return{computedClass:H(()=>ee("ui",e.size,A(e.inverted,"inverted"),"feed"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Iu=z({name:"SuiFeedContent",render(){var e,a;return J("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Eu=z({name:"SuiFeedDate",render(){var e,a;return J("div",{class:"date"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ru=z({name:"SuiFeedEvent",render(){var e,a;return J("div",{class:"event"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),zu=z({name:"SuiFeedExtra",props:{images:Boolean,text:Boolean},setup(e){const{images:a,text:n}=e;return{computedClass:H(()=>ee(A(a,"images"),A(n,"text"),"extra"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Fu=z({name:"SuiFeedLabel",render(){var e,a;return J("div",{class:"label"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Pu=z({name:"SuiFeedLike",render(){var e,a;return J("a",{class:"like"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Mu=z({name:"SuiFeedMeta",render(){var e,a;return J("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Vu=z({name:"SuiFeedSummary",render(){var e,a;return J("div",{class:"summary"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Hu=z({name:"SuiFeedUser",render(){var e,a;return J("a",{class:"user"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),gv={install(e){e.component(Du.name,Du),e.component(Iu.name,Iu),e.component(Eu.name,Eu),e.component(Ru.name,Ru),e.component(zu.name,zu),e.component(Fu.name,Fu),e.component(Pu.name,Pu),e.component(Mu.name,Mu),e.component(Vu.name,Vu),e.component(Hu.name,Hu)}},Nu=z({name:"SuiItem",render(){var e,a;return J("div",{class:"item"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ou=z({name:"SuiItemContent",props:{verticalAlign:String},setup(e){const{verticalAlign:a}=e;return{computedClass:H(()=>ee(Me(a,"aligned"),"content"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ju=z({name:"SuiItemDescription",render(){var e,a;return J("div",{class:"description"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Gu=z({name:"SuiItemExtra",render(){var e,a;return J("div",{class:"extra"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),qu=z({name:"SuiItemGroup",props:{divided:Boolean,inverted:Boolean,link:Boolean,relaxed:[Boolean,String],unstackable:Boolean},setup(e){return{computedClass:H(()=>ee("ui",A(e.divided,"divided"),A(e.inverted,"inverted"),A(e.link,"link"),A(e.unstackable,"unstackable"),Pe(e.relaxed,"relaxed"),"items"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Uu=z({name:"SuiItemHeader",props:{as:String},render(){var e,a;let n=this.$props.as||"div";return J(n,{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Yu=z({name:"SuiItemImage",props:{size:String},setup(e){return{computedClass:H(()=>ee(e.size,"image"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ju=z({name:"SuiItemMeta",render(){var e,a;return J("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),hv={install(e){e.component(Nu.name,Nu),e.component(Ou.name,Ou),e.component(ju.name,ju),e.component(Gu.name,Gu),e.component(qu.name,qu),e.component(Uu.name,Uu),e.component(Yu.name,Yu),e.component(Ju.name,Ju)}},tn=z({name:"SuiStatisticLabel",props:{content:String},render(){var e,a;return this.$props.content?J("div",{class:"label"},this.$props.content):J("div",{class:"label"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),an=z({name:"SuiStatisticValue",props:{content:String,text:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.text,"text"),"value"))}},render(){var e,a;return this.$props.content?J("div",{class:this.computedClass},this.$props.content):J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Wu=z({name:"SuiStatistic",components:{StatisticLabel:tn,StatisticValue:an},props:{color:String,floated:[Boolean,String],horizontal:Boolean,inverted:Boolean,label:String,size:String,text:Boolean,value:String},setup(e){const a=He("ui",!0);return{computedClass:H(()=>ee(a&&"ui",e.color,e.size,A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),A(e.text,"text"),Pe(e.floated,"floated"),"statistic"))}},render(){var e,a,n,o,r,c;let p=[];return this.$props.value&&p.push(J(an,{content:this.$props.value},(a=(e=this.$slots).default)==null?void 0:a.call(e))),this.$props.label&&p.push(J(tn,{content:this.$props.label},(o=(n=this.$slots).default)==null?void 0:o.call(n))),J("div",{class:this.computedClass},p.length>0?p:(c=(r=this.$slots).default)==null?void 0:c.call(r))}}),Ku=z({name:"SuiStatisticGroup",props:{color:String,horizontal:Boolean,inverted:Boolean,size:String,widths:Number},setup(e){return dt("ui",!1),{computedClass:H(()=>ee("ui",e.color,e.size,A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),ri(e.widths,""),"statistics"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),_v={install(e){e.component(Wu.name,Wu),e.component(Ku.name,Ku),e.component(tn.name,tn),e.component(an.name,an)}},bv=Object.freeze(Object.defineProperty({__proto__:null,Advertisement:mv,Card:pv,Comment:fv,Feed:gv,Item:hv,Statistic:_v},Symbol.toStringTag,{value:"Module"})),Xu=z({name:"SuiAccordion",props:{fluid:Boolean,inverted:Boolean,multiple:Boolean,styled:Boolean},setup(e){const a=e.multiple?G([]):G(-1),n=r=>e.multiple?a.value.includes(r):a.value===r,o=r=>{const c=n(r);e.multiple?c?a.value=a.value.filter(p=>p!==r):a.value.push(r):a.value=c?-1:r};return dt("isTabActive",n),dt("updateActiveIndex",o),{computedClass:H(()=>ee("ui",A(e.fluid,"fluid"),A(e.inverted,"inverted"),A(e.styled,"styled"),"accordion"))}},render(){var e,a;const n=o=>(o.forEach((r,c)=>{r.props.index=c}),o);return t("div",{class:this.computedClass},[n((a=(e=this.$slots).default)==null?void 0:a.call(e))])}}),Qu=z({name:"SuiAccordionAccordion",render(){var e,a;return J("div",{class:"accordion"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Po=z({name:"SuiAccordionContent",props:{active:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.active,"active"),"content"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Zu=z({name:"SuiAccordionTab",props:{index:Number,title:String},setup(e){const a=He("isTabActive"),n=He("updateActiveIndex"),o=H(()=>ee(A(a(e.index),"active"),"title"));return{isTabActive:a,updateActiveIndex:n,titleClass:o}},render(){return t(Ce,null,[t("div",{class:this.titleClass,onClick:()=>this.updateActiveIndex(this.index)},[t(W,{name:"dropdown"},null),this.title]),t(Po,{active:this.isTabActive(this.index)},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})])}}),ec=z({name:"SuiAccordionTitle",props:{active:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.active,"active"),"title"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),vv={install(e){e.component(Xu.name,Xu),e.component(Qu.name,Qu),e.component(Po.name,Po),e.component(Zu.name,Zu),e.component(ec.name,ec)}},yv=(e,a,n)=>{e.clickOutside=o=>{e===o.target||e.contains(o.target)||a.value(o,e)},document.body.addEventListener("click",e.clickOutside)},Sv=(e,a,n)=>{document.body.removeEventListener("click",e.clickOutside)},Is={mounted:yv,unmounted:Sv};function wv(e,a={}){const n=G(e.value?"open":"closed"),o=()=>n.value=e.value?"open":"closed";gt(e,f=>{n.value=f?"opening":"closing"});const r=f=>{f.addEventListener("animationend",o,!0)},c=f=>{f&&f.removeEventListener("animationend",o)},p=H((f="scale")=>{switch(n.value){case"opening":return`animating ${f} in`;case"open":return"visible active";case"closing":return`visible active animating ${f} out`;case"closed":return"hidden"}});return{setupAnimation:r,removeAnimation:c,computeAnimationClass:p}}const Cv=z({name:"SuiCalendarDay",emits:["select-day"],props:{active:Boolean,date:null,disabled:Boolean,onSelectDay:Function},setup(e,{emit:a}){const n=G(!1),o=()=>{e.disabled||(n.value=!0)},r=()=>n.value=!1,c=()=>{e.disabled||a("select-day",e.date)},p=()=>{let s=new Date;return s.getFullYear()===e.date.year&&s.getMonth()===e.date.month&&s.getDate()===e.date.day},f=H(()=>ee("link",A(n.value,"focus"),A(e.active&&!e.disabled,"active"),A(e.disabled,"adjacent disabled"),A(p(),"today")));return{onMouseEnter:o,onMouseLeave:r,onClick:c,computedClass:f}},render(){var e,a;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:It(this.onClick,["stop"])},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Av=z({name:"SuiCalendarDateTable",setup(){const{calendarDays:e,updateSelectMode:a,set:n,add:o,subtract:r,selectedDate:c,setSelectedDate:p,selectType:f,updateVisible:s,formatDate:u}=He(Bi);return{calendarDays:e,isEqualDay:g=>{if(!c.value)return!1;const m=c.value;return m.getFullYear()===g.year&&m.getMonth()===g.month&&m.getDate()===g.day},onSelectDay:g=>{if(n(g.year,"years"),n(g.month,"months"),n(g.day,"days"),f.value==="date"){let m=new Date(g.year,g.month,g.day);p(m),s(!1);return}a("hour")},updateSelectMode:a,formatDate:u,add:o,subtract:r}},render(){const e=()=>this.calendarDays.map((a,n)=>t("tr",null,[a.map(o=>t(Cv,{active:this.isEqualDay(o),date:o,disabled:!o.currentMonth,onSelectDay:this.onSelectDay},{default:()=>[o.day]}))]));return t("table",{class:"ui celled center aligned unstackable table day seven column"},[t("thead",null,[t("tr",null,[t("th",{colspan:7},[t("span",{class:"link",onClick:It(()=>this.updateSelectMode("month"),["stop"])},[this.formatDate("date")]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"months")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"months")},[t("i",{class:"chevron right icon"},null)])])]),t("tr",null,[t("th",null,[l("S")]),t("th",null,[l("M")]),t("th",null,[l("T")]),t("th",null,[l("W")]),t("th",null,[l("T")]),t("th",null,[l("F")]),t("th",null,[l("S")])])]),t("tbody",null,[e()])])}}),Se=z({name:"SuiCalendarTableCell",emits:["click-cell"],props:{active:Boolean,today:Boolean,value:null,onClickCell:Function},setup(e){const a=G(!1),n=()=>a.value=!0,o=()=>a.value=!1,r=H(()=>ee("link",A(e.active,"active"),A(e.today,"today"),A(a.value,"focus")));return{onMouseEnter:n,onMouseLeave:o,computedClass:r}},render(){var e,a;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:It(()=>this.$emit("click-cell",this.value),["stop"])},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),kv=z({name:"SuiCalendarMonthTable",setup(){const{state:e,set:a,add:n,subtract:o,selectedDate:r,updateSelectMode:c}=He(Bi);return{state:e,add:n,subtract:o,updateSelectMode:c,isActive:p=>r.value?e.year===r.value.getFullYear()&&e.month===p:!1,isThisMonth:p=>{let f=new Date;return p===f.getMonth()&&e.year===f.getFullYear()},onClickCell:p=>{a(p,"months"),c("day")}}},render(){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=()=>Array(4).fill(0).map((n,o)=>t("tr",null,[t(Se,{value:o*3,active:this.isActive(o*3),today:this.isThisMonth(o*3),onClickCell:this.onClickCell},{default:()=>[e[o*3]]}),t(Se,{value:o*3+1,active:this.isActive(o*3+1),today:this.isThisMonth(o*3+1),onClickCell:this.onClickCell},{default:()=>[e[o*3+1]]}),t(Se,{value:o*3+2,active:this.isActive(o*3+2),today:this.isThisMonth(o*3+2),onClickCell:this.onClickCell},{default:()=>[e[o*3+2]]})]));return t("table",{class:"ui celled center aligned unstackable table month three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:It(()=>this.updateSelectMode("year"),["stop"])},[this.state.year]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"years")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"years")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[a()])])}}),xv=z({name:"SuiCalendarYearTable",setup(e){const{state:a,set:n,add:o,subtract:r,selectedDate:c,updateSelectMode:p}=He(Bi),f=()=>o(10,"years"),s=()=>r(10,"years"),u=H(()=>Math.round(a.year/10)*10+1);return{updateSelectMode:p,moveNextTwelveYears:f,movePrevTwelveYears:s,headerStartYear:u,isActive:g=>c.value?g===c.value.getFullYear():!1,isThisYear:g=>g===new Date().getFullYear(),onClickCell:g=>{n(g,"years"),p("day")}}},render(){return t("table",{class:"ui celled center aligned unstackable table year three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:It(()=>this.updateSelectMode("day"),["stop"])},[this.headerStartYear,l(" - "),this.headerStartYear+11]),t("span",{class:"prev link",onClick:this.movePrevTwelveYears},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.moveNextTwelveYears},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(Se,{value:this.headerStartYear,active:this.isActive(this.headerStartYear),today:this.isThisYear(this.headerStartYear),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear]}),t(Se,{value:this.headerStartYear+1,active:this.isActive(this.headerStartYear+1),today:this.isThisYear(this.headerStartYear+1),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+1]}),t(Se,{value:this.headerStartYear+2,active:this.isActive(this.headerStartYear+2),today:this.isThisYear(this.headerStartYear+2),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+2]})]),t("tr",null,[t(Se,{value:this.headerStartYear+3,active:this.isActive(this.headerStartYear+3),today:this.isThisYear(this.headerStartYear+3),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+3]}),t(Se,{value:this.headerStartYear+4,active:this.isActive(this.headerStartYear+4),today:this.isThisYear(this.headerStartYear+4),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+4]}),t(Se,{value:this.headerStartYear+5,active:this.isActive(this.headerStartYear+5),today:this.isThisYear(this.headerStartYear+5),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+5]})]),t("tr",null,[t(Se,{value:this.headerStartYear+6,active:this.isActive(this.headerStartYear+6),today:this.isThisYear(this.headerStartYear+6),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+6]}),t(Se,{value:this.headerStartYear+7,active:this.isActive(this.headerStartYear+7),today:this.isThisYear(this.headerStartYear+7),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+7]}),t(Se,{value:this.headerStartYear+8,active:this.isActive(this.headerStartYear+8),today:this.isThisYear(this.headerStartYear+8),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+8]})]),t("tr",null,[t(Se,{value:this.headerStartYear+9,active:this.isActive(this.headerStartYear+9),today:this.isThisYear(this.headerStartYear+9),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+9]}),t(Se,{value:this.headerStartYear+10,active:this.isActive(this.headerStartYear+10),today:this.isThisYear(this.headerStartYear+10),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+10]}),t(Se,{value:this.headerStartYear+11,active:this.isActive(this.headerStartYear+11),today:this.isThisYear(this.headerStartYear+11),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+11]})])])])}}),$v=z({name:"SuiCalendarHourTable",setup(){const{updateSelectMode:e,state:a,set:n,add:o,subtract:r,formatDate:c,selectedDate:p}=He(Bi);return{updateSelectMode:e,formatDate:c,onPrevClick:()=>r(1,"days"),onNextClick:()=>o(1,"days"),onClickCell:f=>{n(f,"hours"),e("minute")},isActive:f=>{if(!p.value)return!1;let s=p.value.getFullYear(),u=p.value.getMonth(),g=p.value.getDate(),m=p.value.getHours();return a.year===s&&a.month===u&&a.day===g&&f===m}}},render(){return t("table",{class:"ui celled center aligned unstackable table hour four column"},[t("thead",null,[t("tr",null,[t("th",{colspan:4},[t("span",{class:"link",onClick:It(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:this.onPrevClick},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.onNextClick},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(Se,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},{default:()=>[l("12:00 AM")]}),t(Se,{active:this.isActive(1),value:1,onClickCell:this.onClickCell},{default:()=>[l("1:00 AM")]}),t(Se,{active:this.isActive(2),value:2,onClickCell:this.onClickCell},{default:()=>[l("2:00 AM")]}),t(Se,{active:this.isActive(3),value:3,onClickCell:this.onClickCell},{default:()=>[l("3:00 AM")]})]),t("tr",null,[t(Se,{active:this.isActive(4),value:4,onClickCell:this.onClickCell},{default:()=>[l("4:00 AM")]}),t(Se,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},{default:()=>[l("5:00 AM")]}),t(Se,{active:this.isActive(6),value:6,onClickCell:this.onClickCell},{default:()=>[l("6:00 AM")]}),t(Se,{active:this.isActive(7),value:7,onClickCell:this.onClickCell},{default:()=>[l("7:00 AM")]})]),t("tr",null,[t(Se,{active:this.isActive(8),value:8,onClickCell:this.onClickCell},{default:()=>[l("8:00 AM")]}),t(Se,{active:this.isActive(9),value:9,onClickCell:this.onClickCell},{default:()=>[l("9:00 AM")]}),t(Se,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},{default:()=>[l("10:00 AM")]}),t(Se,{active:this.isActive(11),value:11,onClickCell:this.onClickCell},{default:()=>[l("11:00 AM")]})]),t("tr",null,[t(Se,{active:this.isActive(12),value:12,onClickCell:this.onClickCell},{default:()=>[l("12:00 PM")]}),t(Se,{active:this.isActive(13),value:13,onClickCell:this.onClickCell},{default:()=>[l("1:00 PM")]}),t(Se,{active:this.isActive(14),value:14,onClickCell:this.onClickCell},{default:()=>[l("2:00 PM")]}),t(Se,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},{default:()=>[l("3:00 PM")]})]),t("tr",null,[t(Se,{active:this.isActive(16),value:16,onClickCell:this.onClickCell},{default:()=>[l("4:00 PM")]}),t(Se,{active:this.isActive(17),value:17,onClickCell:this.onClickCell},{default:()=>[l("5:00 PM")]}),t(Se,{active:this.isActive(18),value:18,onClickCell:this.onClickCell},{default:()=>[l("6:00 PM")]}),t(Se,{active:this.isActive(19),value:19,onClickCell:this.onClickCell},{default:()=>[l("7:00 PM")]})]),t("tr",null,[t(Se,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},{default:()=>[l("8:00 PM")]}),t(Se,{active:this.isActive(21),value:21,onClickCell:this.onClickCell},{default:()=>[l("9:00 PM")]}),t(Se,{active:this.isActive(22),value:22,onClickCell:this.onClickCell},{default:()=>[l("10:00 PM")]}),t(Se,{active:this.isActive(23),value:23,onClickCell:this.onClickCell},{default:()=>[l("11:00 PM")]})])])])}});function Ft(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Vt(e)}const Bv=z({name:"SuiCalendarMinuteTable",setup(){const{state:e,set:a,add:n,subtract:o,formatDate:r,updateSelectMode:c,updateVisible:p,selectedDate:f}=He(Bi);return{add:n,subtract:o,formatDate:r,updateSelectMode:c,getTimeLabel:s=>{let u=e.hour%12,g=e.hour>12?"PM":"AM",m=s.toString().padStart(2,"0");return e.hour===0?`12:${m} AM`:e.hour===12?`12:${m} PM`:`${u}:${m} ${g}`},onClickCell:s=>{a(s,"minutes"),f.value=new Date(e.year,e.month,e.day,e.hour,e.minute),p(!1)},isActive:s=>{if(!f.value)return!1;let u=f.value.getFullYear(),g=f.value.getMonth(),m=f.value.getDate(),h=f.value.getHours(),v=f.value.getMinutes();return e.year===u&&e.month===g&&e.day===m&&e.hour===h&&s===v}}},render(){let e,a,n,o,r,c,p,f,s,u,g,m;return t("table",{class:"ui celled center aligned unstackable table minute three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:It(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"days")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"days")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(Se,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},Ft(e=this.getTimeLabel(0))?e:{default:()=>[e]}),t(Se,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},Ft(a=this.getTimeLabel(5))?a:{default:()=>[a]}),t(Se,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},Ft(n=this.getTimeLabel(10))?n:{default:()=>[n]})]),t("tr",null,[t(Se,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},Ft(o=this.getTimeLabel(15))?o:{default:()=>[o]}),t(Se,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},Ft(r=this.getTimeLabel(20))?r:{default:()=>[r]}),t(Se,{active:this.isActive(25),value:25,onClickCell:this.onClickCell},Ft(c=this.getTimeLabel(25))?c:{default:()=>[c]})]),t("tr",null,[t(Se,{active:this.isActive(30),value:30,onClickCell:this.onClickCell},Ft(p=this.getTimeLabel(30))?p:{default:()=>[p]}),t(Se,{active:this.isActive(35),value:35,onClickCell:this.onClickCell},Ft(f=this.getTimeLabel(35))?f:{default:()=>[f]}),t(Se,{active:this.isActive(40),value:40,onClickCell:this.onClickCell},Ft(s=this.getTimeLabel(40))?s:{default:()=>[s]})]),t("tr",null,[t(Se,{active:this.isActive(45),value:45,onClickCell:this.onClickCell},Ft(u=this.getTimeLabel(45))?u:{default:()=>[u]}),t(Se,{active:this.isActive(50),value:50,onClickCell:this.onClickCell},Ft(g=this.getTimeLabel(50))?g:{default:()=>[g]}),t(Se,{active:this.isActive(55),value:55,onClickCell:this.onClickCell},Ft(m=this.getTimeLabel(55))?m:{default:()=>[m]})])])])}}),Tv=z({name:"SuiCalendarBody",setup(){const e=G(null),{visible:a,selectMode:n}=He(Bi),{setupAnimation:o,removeAnimation:r,computeAnimationClass:c}=wv(a);$i(()=>o(e.value)),Zi(()=>r(e.value));const p=H(()=>ee("ui popup calendar","bottom left","transition",c.value));return{rootRef:e,computedClass:p,selectMode:n}},render(){const e=()=>{switch(this.selectMode){case"day":return t(Av,null,null);case"month":return t(kv,null,null);case"year":return t(xv,null,null);case"hour":return t($v,null,null);case"minute":return t(Bv,null,null)}};return t("div",{ref:a=>this.rootRef=a,class:this.computedClass,style:"inset: 38px auto auto 0px;"},[e()])}}),Lv=z({name:"SuiCalendarInput",props:{placeholder:String,value:null},setup(e){const{visible:a,updateVisible:n,updateSelectMode:o,set:r,state:c,formatCalendarDate:p}=He(Bi);return{visible:a,formatCalendarDate:p,onClick:()=>{a.value||(o("day"),e.value&&(r(e.value.getFullYear(),"years"),r(e.value.getMonth(),"months"))),n(!a.value)}}},render(){return t("input",{type:"text",placeholder:this.placeholder,value:this.formatCalendarDate(this.value),onClick:()=>this.onClick()},null)}}),Dv=(e,a)=>{let n=new Date;n.setDate(1),n.setMonth(a),n.setFullYear(e);let o=n.getDay();return o>=7?o-7:o},Iv=(e,a)=>{let n,o;return a===0?(n=11,o=e-1):(n=a-1,o=e),32-new Date(o,n,32).getDate()},Wn=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e];function Ev(){const e=G(!1),a=(C=!1)=>e.value=C,n=new Date;function o(C){if(!C)return;let k=C.getFullYear(),T=Wn(C.getMonth()),_=C.getDate(),w=C.getHours(),x=C.getMinutes(),B=w>11?"PM":"AM";w=w%12,w===0&&(w=12);let I=x.toString().padStart(2,"0");return`${T} ${_}, ${k} ${w}:${I} ${B}`}const r=G("default"),c=G("day");function p(C){c.value=C}const f=G(null),s=C=>{f.value=C},u=oi({year:n.getFullYear(),month:n.getMonth(),day:n.getDate(),hour:n.getHours(),minute:n.getMinutes()}),g=(C,k)=>{switch(k){case"years":u.year=C;break;case"months":u.month=C;break;case"days":u.day=C;break;case"hours":u.hour=C;break;case"minutes":u.minute=C}},m=(C,k)=>{let T=new Date(u.year,u.month,u.day,u.hour);switch(k){case"years":T.setFullYear(T.getFullYear()+C);break;case"months":T.setMonth(T.getMonth()+C);break;case"days":T.setDate(T.getDate()+C);break;case"hours":T.setHours(T.getHours()+C);break}u.year=T.getFullYear(),u.month=T.getMonth(),u.day=T.getDate(),u.hour=T.getHours()},h=(C,k)=>{let T=new Date(u.year,u.month,u.day,u.hour);switch(k){case"years":T.setFullYear(T.getFullYear()-C);break;case"months":T.setMonth(T.getMonth()-C);break;case"days":T.setDate(T.getDate()-C);break;case"hours":T.setHours(T.getHours()-C);break}u.year=T.getFullYear(),u.month=T.getMonth(),u.day=T.getDate(),u.hour=T.getHours()},v=(C="default")=>C==="date"?`${Wn(u.month)} ${u.year}`:`${Wn(u.month)} ${u.day}, ${u.year}`,b=H(()=>{let C=u.month,k=u.year;C>11&&(C=C%11-1,k+=1);let T=[],_=Dv(k,C),w=32-new Date(k,C,32).getDate(),x=Iv(k,C),B=1;for(let I=0;I<6;I++){let M=[];if(I===0){for(let P=x-_+1;P<=x;P++){let j=C===0?11:C-1,X=C===0?k-1:k;M.push({day:P,month:j,year:X,currentMonth:!1})}let V=7-M.length;for(let P=0;P<V;P++)M.push({day:B,month:C,year:k,currentMonth:!0}),B++}else for(let V=0;V<7;V++){if(B>w){let P=C===11?0:C+1,j=C===11?k+1:k;M.push({day:B-w,month:P,year:j,currentMonth:!1})}else M.push({day:B,month:C,year:k,currentMonth:!0});B++}T.push(M)}return T});return{visible:e,updateVisible:a,calendarDays:b,formatCalendarDate:o,selectMode:c,updateSelectMode:p,selectType:r,selectedDate:f,setSelectedDate:s,state:u,set:g,add:m,subtract:h,formatDate:v}}const Bi=Symbol("useCalendar"),tc=z({name:"SuiCalendar",directives:{clickoutside:Is},emits:["update:modelValue"],props:{modelValue:null,placeholder:String},setup(e,{emit:a}){const n=Ev();dt(Bi,n);const{updateVisible:o,selectedDate:r}=n;return gt(r,c=>{a("update:modelValue",c)}),{updateVisible:o}},render(){return wi(t("div",{class:"ui calendar"},[t("div",{class:"ui input left icon"},[t(Tv,null,null),t("i",{class:"calendar icon"},null),t(Lv,{placeholder:this.placeholder,value:this.modelValue},null)])]),[[Sn("clickoutside"),()=>this.updateVisible(!1)]])}}),Rv={install:e=>{e.component(tc.name,tc)}},Mo=z({name:"SuiCheckbox",emits:["update:modelValue","change","click"],props:{disabled:Boolean,indeterminate:Boolean,label:String,modelValue:null,radio:Boolean,readOnly:Boolean,slider:Boolean,toggle:Boolean,value:null},setup(e,{emit:a}){const n=H(()=>ee("ui",!e.label&&"fitted",A(e.disabled,"disabled"),A(e.indeterminate,"indeterminate"),A(e.radio,"radio"),A(e.readOnly,"read-only"),A(e.slider,"slider"),A(e.toggle,"toggle"),"checkbox")),o=H(()=>Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue);return{computedClass:n,checked:o,onClick:r=>{if(e.disabled||e.readOnly)return;let c;e.value?o.value?c=e.modelValue.filter(p=>e.value!==p):c=e.modelValue?[...e.modelValue,e.value]:[e.value]:c=!e.modelValue,a("change",r),a("click",r),a("update:modelValue",c)}}},render(){return t("div",{class:this.computedClass,onClick:this.onClick},[t("input",{type:this.radio?"radio":"checkbox",class:"hidden",checked:this.checked,readonly:!0},null),t("label",null,[this.label])])}}),zv={install(e){e.component(Mo.name,Mo)}},Ot=z({name:"SuiDimmer",props:{active:Boolean,inverted:Boolean,page:Boolean,simple:Boolean,verticalAlign:String},setup(e){return{computedClass:H(()=>ee("ui",A(e.active,"active"),A(e.inverted,"inverted"),A(e.page,"page"),A(e.simple,"simple"),Me(e.verticalAlign,"aligned"),"dimmer"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ic=z({name:"SuiDimmerDimmable",components:{Segment:Le},props:{blurring:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.blurring,"blurring"),"dimmable"))}},render(){var e,a;return J(Le,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Fv={install(e){e.component(Ot.name,Ot),e.component(ic.name,ic)}},Pv=(e,a)=>e.map(n=>n[a]),Mv=z({name:"SuiDropdownText",emits:["remove"],props:{clearable:Boolean,filtered:Boolean,icon:{type:String,default:"dropdown"},item:[Object,String],placeholder:String,text:String,onRemove:Function},setup(e){return{computedClass:H(()=>ee(A(e.filtered,"filtered"),A(!e.text&&!e.item||Array.isArray(e.item)&&e.item.length===0,"default"),"text"))}},render(){var e,a;let n;if(this.item&&!Array.isArray(this.item))if(typeof this.item=="object"){const{flag:c,text:p}=this.item;n=t(Ce,null,[c&&t("i",{class:`${c} flag`},null),p])}else n=this.item;else n=this.text||this.placeholder;const o=typeof this.item=="object"?(e=this.item)==null?void 0:e.image:null,r=typeof this.item=="object"?(a=this.item)==null?void 0:a.label:null;return t(Ce,null,[t("div",{class:this.computedClass},[o&&t(ce,o,null),r&&t(N,r,null),n]),t("i",{class:`${this.icon} icon`},null),this.$props.clearable&&t("i",{class:"remove icon",onClick:It(()=>this.$emit("remove"),["stop"])},null)])}}),Vv=e=>{const a=oi({visible:!1,animating:!1,direction:"down",multiple:e.multiple});return gt(()=>a.visible,()=>{a.animating=!0,setTimeout(()=>a.animating=!1,200)}),{state:a,show:()=>!a.animating&&(a.visible=!0),hide:()=>{a.animating||(a.visible=!1)}}};function Hv(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Vt(e)}const ac=z({name:"SuiDropdown",directives:{clickoutside:Is},emits:["update:modelValue"],props:{button:Boolean,clearable:Boolean,compact:Boolean,floating:Boolean,fluid:Boolean,icon:String,inline:Boolean,item:Boolean,labeled:Boolean,modelValue:[Object,String],multiple:Boolean,options:Array,placeholder:String,pointing:[Boolean,String],scrolling:Boolean,selection:Boolean,search:Boolean,searchInMenu:Boolean,simple:Boolean,text:String},setup(e,{emit:a}){const n=Vv(e);dt("useDropdown",n);const{state:o,show:r,hide:c}=n,p=H(()=>ee("ui",A(e.button,"button"),A(e.clearable,"clearable"),A(e.compact,"compact"),A(e.floating,"floating"),A(e.fluid,"fluid"),A(!!e.icon,"icon"),A(e.inline,"inline"),A(e.item,"item"),A(e.labeled,"labeled"),A(e.multiple,"multiple"),A(e.search,"search"),A(e.scrolling,"scrolling"),A(e.selection,"selection"),A(e.simple,"simple"),Pe(e.pointing,"pointing"),"dropdown",A(o.visible,"active visible"),A(o.direction==="up","upward"))),f=()=>{var k;if(o.visible)return c();(k=h.value)==null||k.focus(),r()},s=()=>{e.search&&h.value&&h.value.focus(),r()},u=()=>c(),g=G(""),m=H(()=>{const k=g.value.toLowerCase();return e.options.filter(T=>{const _=typeof T=="object"?T.text:T,w=_.toLowerCase().includes(k);if(!e.multiple)return w;if(Array.isArray(e.modelValue)){const x=typeof T=="object"?Pv(e.modelValue,"text").includes(_):e.modelValue.includes(_);return w&&!x}return w})}),h=G(null),v=k=>g.value=k.target.value,b=k=>{var T;if(g.value="",e.search&&((T=h.value)==null||T.focus()),e.multiple){let _=Array.isArray(e.modelValue)?[...e.modelValue,k]:[k];return a("update:modelValue",_)}return a("update:modelValue",k)},C=k=>{if(Array.isArray(e.modelValue)){const T=e.modelValue.findIndex(_=>_===k);if(T>-1){let _=Object.assign(e.modelValue);_.splice(T,1),a("update:modelValue",_)}}};return dt("selection",e.selection),{computedClass:p,onClick:f,openMenu:s,closeMenu:u,filteredText:g,filteredOptions:m,inputRef:h,onInput:v,onSelect:b,removeItem:C}},render(){var e,a;const n=()=>{if(Array.isArray(this.$props.modelValue))return this.$props.modelValue.map(p=>typeof p=="object"?t("a",{class:"ui label"},[p.flag&&t("i",{class:`${p.flag} flag`},null),p.text,t("i",{class:"delete icon",onClick:It(()=>this.removeItem(p),["stop"])},null)]):t("a",{class:"ui label"},[p,t("i",{class:"delete icon",onClick:It(()=>this.removeItem(p),["stop"])},null)]))},o=()=>this.filteredOptions.filter(p=>this.$props.multiple&&Array.isArray(this.$props.modelValue)?!this.$props.modelValue.includes(p):!0).map(p=>t(Vo,{item:p,active:this.$props.modelValue&&typeof p=="object"?p.text===this.$props.modelValue.text:p===this.$props.modelValue,text:typeof p=="object"?p.text:p,flag:typeof p=="object"&&Object.keys(p).includes("flag")?p.flag:"",image:p.image,label:p.label,disabled:p.disabled,onSelect:this.onSelect},null)),r=()=>{let p={clearable:this.clearable,filtered:this.filteredText.length>0,icon:this.icon,item:this.modelValue,placeholder:this.placeholder,text:this.text};return t(Mv,ea(p,{onRemove:()=>this.$emit("update:modelValue",null)}),null)},c=()=>{let p;return t(Ho,{search:this.$props.searchInMenu,onSearch:this.onInput},Hv(p=o())?p:{default:()=>[p]})};return wi(t("div",{class:this.computedClass,onClick:this.onClick},[this.$props.multiple&&n(),this.search&&t("input",{ref:p=>this.inputRef=p,type:"text",class:"search",autocomplete:"off",tabindex:0,value:this.filteredText,onInput:p=>this.onInput(p)},null),this.search&&this.multiple&&t("span",{class:"sizer"},null),r(),((a=(e=this.$slots).default)==null?void 0:a.call(e))||c()]),[[Sn("clickoutside"),this.closeMenu]])}}),Vo=z({name:"SuiDropdownItem",emits:["select"],props:{active:Boolean,flag:String,description:String,icon:String,image:Object,item:[Object,String],label:Object,text:String,disabled:Boolean,onSelect:Function},setup(e,{emit:a}){const{state:n,hide:o}=He("useDropdown");return{computedClass:H(()=>ee(A(e.active,"active"),A(e.disabled,"disabled"),"item")),onClick:()=>{n.multiple||o(),a("select",e.item?e.item:e.text)}}},render(){return t("div",{class:this.computedClass,onClick:It(this.onClick,["stop"])},[this.flag&&t("i",{class:`${this.flag} flag`},null),this.icon&&t("i",{class:`${this.icon} icon`},null),this.image&&t(ce,this.image,null),this.label&&t(N,this.label,null),this.description&&t("span",{class:"description"},[this.description]),this.text])}}),Ho=z({name:"SuiDropdownMenu",emits:["search"],props:{search:Boolean,onSearch:Function},setup(e,{emit:a,slots:n}){const{state:o}=He("useDropdown"),r=G(null),c=H(()=>{let f=()=>o.visible?`animating slide ${o.direction} in visible`:`animating slide ${o.direction} out visible`;return ee("menu","transition",A(o.visible,"visible"),A(!o.visible&&!o.animating,"hidden"),A(o.animating,f()))});gt(()=>o.visible,f=>{if(!f||!r.value)return;let s=r.value.parentElement;const{top:u,height:g}=s==null?void 0:s.getBoundingClientRect(),m=u-p.value.length*37,h=document.documentElement.clientHeight-u-g-p.value.length*37;o.direction=m>h?"up":"down"});const p=H(()=>{var f;let s=[],u=(f=n.default)==null?void 0:f.call(n);return u&&u.forEach(g=>{g.type.name==="SuiSelectItem"&&s.push(g)}),s});return{container:r,computedClass:c,onSearchInput:f=>a("search",f)}},render(){var e,a,n,o;const r=()=>t(Ce,null,[t("div",{class:"ui left icon input",onClick:It(()=>{},["stop"])},[t("input",{type:"text",onInput:c=>this.onSearchInput(c)},null),t("i",{class:"search icon"},null)]),t("div",{class:"ui divider"},null)]);return t("div",{ref:c=>this.container=c,class:this.computedClass},[this.$slots.header&&t("div",{class:"header"},[(a=(e=this.$slots).header)==null?void 0:a.call(e)]),this.$props.search&&r(),(o=(n=this.$slots).default)==null?void 0:o.call(n)])}}),Nv={install(e){e.component(ac.name,ac),e.component(Vo.name,Vo),e.component(Ho.name,Ho)}},lc=z({name:"SuiEmbed",props:{active:Boolean,aspectRatio:Boolean,autoplay:Boolean,id:String,placeholder:String,source:String,url:String},setup(e){const a=G(e.active),n=()=>{a.value=!a.value},o=()=>e.source==="youtube"?[`//www.youtube.com/embed/${e.id}`,"?autohide=true",`&amp;autoplay=${e.autoplay}`,"&amp;jsapi=false"].join(""):e.url,r=H(()=>ee("ui",e.aspectRatio,A(a.value,"active"),"embed"));return{active:a,getSrc:o,clickHandler:n,computedClass:r}},render(){let e=[J("i",{class:"video play icon"}),J("img",{class:"placeholder",src:this.placeholder})];return this.active&&e.push(J("div",{class:"embed"},J("iframe",{src:this.getSrc()}))),J("div",{class:this.computedClass,onClick:this.clickHandler},e)}}),Ov={install(e){e.component(lc.name,lc)}};function jv(e){return ts()?(Rc(e),!0):!1}function Nm(e){return typeof e=="function"?e():d(e)}const Om=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Gv=Object.prototype.toString,qv=e=>Gv.call(e)==="[object Object]",zl=()=>{},Uv=Yv();function Yv(){var e,a;return Om&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((a=window==null?void 0:window.navigator)==null?void 0:a.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function Ha(e){var a;const n=Nm(e);return(a=n==null?void 0:n.$el)!=null?a:n}const jm=Om?window:void 0;function Kn(...e){let a,n,o,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,o,r]=e,a=jm):[a,n,o,r]=e,!a)return zl;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const c=[],p=()=>{c.forEach(g=>g()),c.length=0},f=(g,m,h,v)=>(g.addEventListener(m,h,v),()=>g.removeEventListener(m,h,v)),s=gt(()=>[Ha(a),Nm(r)],([g,m])=>{if(p(),!g)return;const h=qv(m)?{...m}:m;c.push(...n.flatMap(v=>o.map(b=>f(g,v,b,h))))},{immediate:!0,flush:"post"}),u=()=>{s(),p()};return jv(u),u}let nc=!1;function Jv(e,a,n={}){const{window:o=jm,ignore:r=[],capture:c=!0,detectIframe:p=!1}=n;if(!o)return zl;Uv&&!nc&&(nc=!0,Array.from(o.document.body.children).forEach(g=>g.addEventListener("click",zl)),o.document.documentElement.addEventListener("click",zl));let f=!0;const s=g=>r.some(m=>{if(typeof m=="string")return Array.from(o.document.querySelectorAll(m)).some(h=>h===g.target||g.composedPath().includes(h));{const h=Ha(m);return h&&(g.target===h||g.composedPath().includes(h))}}),u=[Kn(o,"click",g=>{const m=Ha(e);if(!(!m||m===g.target||g.composedPath().includes(m))){if(g.detail===0&&(f=!s(g)),!f){f=!0;return}a(g)}},{passive:!0,capture:c}),Kn(o,"pointerdown",g=>{const m=Ha(e);f=!s(g)&&!!(m&&!g.composedPath().includes(m))},{passive:!0}),p&&Kn(o,"blur",g=>{setTimeout(()=>{var m;const h=Ha(e);((m=o.document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(h!=null&&h.contains(o.document.activeElement))&&a(g)},0)})].filter(Boolean);return()=>u.forEach(g=>g())}function Gm(e,a="scale"){const n=G(e.modelValue?"open":"closed");return gt(()=>e.modelValue,o=>{n.value=o?"opening":"closing"}),{animationClasses:H(()=>{switch(n.value){case"opening":return`animating ${a} in`;case"open":return"visible active";case"closing":return`visible active animating ${a} out`;case"closed":return"hidden"}}),isClosed:H(()=>n.value==="closed"),onAnimationEnd:()=>n.value=e.modelValue?"open":"closed"}}const Wv=z({name:"SuiModalDemmer",props:{blurring:Boolean,inverted:Boolean,modelValue:Boolean},setup(e){const{animationClasses:a,isClosed:n,onAnimationEnd:o}=Gm(e,"fade"),r=H(()=>ee("ui","page modals dimmer transition",A(e.inverted,"inverted"),a.value)),c=H(()=>({display:n.value?"none !important":"flex !important",animationDuration:"500ms"})),p=H(()=>ee("dimmable","dimmed",A(e.blurring,"blurring")));return gt(()=>e.modelValue,f=>{if(f){document.body.classList.add(...p.value.split(" "));return}document.body.classList.remove(...p.value.split(" "))}),{className:r,style:c,onAnimationEnd:o}},render(){var e,a;return t("div",{class:this.className,style:this.style,onAnimationend:this.onAnimationEnd},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),ln=z({name:"SuiModal",props:{basic:Boolean,closeIcon:Boolean,dimmer:String,modelValue:Boolean,size:String,closable:{type:Boolean,default:!0},overlay:Boolean,fullscreen:Boolean},setup(e,{emit:a}){const n=G(),{animationClasses:o,isClosed:r}=Gm(e),c=H(()=>ee("ui",e.size,A(e.basic,"basic"),A(e.overlay,"overlay"),A(e.fullscreen,"fullscreen"),"modal","transition",o.value)),p=H(()=>({display:r.value?"none !important":"block !important",animationDuration:"500ms"})),f=()=>a("update:modelValue",!1);return Jv(n,()=>e.closable&&a("update:modelValue",!1)),{computedClass:c,style:p,close:f,modalRef:n}},render(){return t(xn,{to:"body"},{default:()=>[t(Wv,{blurring:this.dimmer==="blurring",inverted:this.dimmer==="inverted",modelValue:this.modelValue},{default:()=>{var e,a;return[t("div",{class:this.computedClass,style:this.style,onClick:n=>n.stopPropagation(),ref:n=>this.modalRef=n},[this.closeIcon&&t("i",{"aria-hidden":"true",class:"close icon",onClick:this.close},null),(a=(e=this.$slots).default)==null?void 0:a.call(e)])]}})]})}}),nn=z({name:"SuiModalActions",render(){var e,a;return t("div",{class:"actions"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),on=z({name:"SuiModalContent",props:{image:Boolean,scrolling:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.image,"image"),A(e.scrolling,"scrolling"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),No=z({name:"SuiModalDescription",render(){var e,a;return J("div",{class:"description"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),sn=z({name:"SuiModalHeader",render(){var e,a;return J("div",{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Kv={install(e){e.component(ln.name,ln),e.component(nn.name,nn),e.component(on.name,on),e.component(No.name,No),e.component(sn.name,sn)}},Xv=e=>{const a=G(!1),n=co(e,"position"),o=G(null),r=co(e,"trigger"),c=()=>{a.value=!0,Ta(()=>f())},p=()=>{a.value=!1},f=()=>{if(!o.value||!r.value)return;let s=0,u=0;const g=o.value,m=r.value.$el;g.style.transform=`translate(${s}px, ${u}px)`;const{top:h,left:v,width:b,height:C}=m.getBoundingClientRect(),k=g.getBoundingClientRect(),{pageXOffset:T,pageYOffset:_}=window;if(n.value.includes("top")?(s=T+v,u=_+h-g.offsetTop-g.offsetHeight):(s=v,u=h+C-k.top),n.value.includes("right")){const w=b-k.width;s=v+w}if(n.value.includes("center")){const w=b/2-k.width/2;s=v+w}n.value==="right center"&&(s=v+b,u=h+C/2-k.top-k.height/2),n.value==="left center"&&(s=v-k.width,u=h+C/2-k.top-k.height/2),g.style.display="flex",g.style.position="absolute",g.style.transform=`translate(${s}px, ${u}px)`};return{show:a,showPopup:c,hidePopup:p,placement:n,popupRef:o,triggerRef:r}},oc=z({name:"SuiPopup",props:{basic:Boolean,content:String,flowing:Boolean,header:String,inverted:Boolean,position:{type:String,default:"top left"},size:String,trigger:Object,wide:[Boolean,String]},setup(e,{slots:a}){const{show:n,showPopup:o,hidePopup:r,popupRef:c,triggerRef:p}=Xv(e);hs(()=>{var h,v,b;(h=p.value)!=null&&h.$el&&((v=p.value)==null||v.$el.addEventListener("mouseenter",o),(b=p.value)==null||b.$el.addEventListener("mouseleave",r))});const f=G(n.value?"open":"close");H(()=>f.value!=="closed"),gt(()=>n.value,h=>{f.value=h?"opening":"closing"});const s=(h,v="scale")=>{switch(h){case"opening":return`animating ${v} in`;case"open":return"visible active";case"closing":return`visible active animating ${v} out`;case"closed":return"hidden"}},u=()=>f.value=n.value?"open":"closed";$i(()=>{var h;(h=c.value)==null||h.addEventListener("animationend",u,!0)}),Zi(()=>{var h;(h=c.value)==null||h.removeEventListener("animationend",u)});const g={position:"initial",animationDuration:"200ms"},m=H(()=>ee("ignored ui",e.position,e.size,A(e.basic,"basic"),A(e.flowing,"flowing"),A(e.inverted,"inverted"),Pe(e.wide,"wide"),"popup transition",s(f.value,"scale")));return()=>t(xn,{to:"body"},{default:()=>{var h;return[t("div",{ref:c,style:"display: flex; position: absolute; transform: translate(0px, 0px);"},[t("div",{class:m.value,style:g},[e.header&&t("div",{class:"header"},[e.header]),t("div",{class:"content"},[e.content?e.content:(h=a.default)==null?void 0:h.call(a)])])])]}})}}),Qv={install(e){e.component(oc.name,oc)}},Zv=["top","bottom","left"],Es=()=>({attached:{type:String,validator:e=>Zv.includes(e)}}),qm=e=>({attachedClasses:H(()=>ee(e.attached,{attached:e.attached}))}),e1=["red","orange","yellow","olive","green","teal","blue","purple","violet","pink","brown","grey","black"],Um=()=>({color:{type:String,validator:e=>e1.includes(e)}}),Ym=e=>({colorClasses:H(()=>ee(e.inverted&&"inverted",e.color))}),rn=z({name:"SuiProgress",props:{active:Boolean,disabled:Boolean,error:Boolean,indicating:Boolean,inverted:Boolean,label:String,percent:Number,progress:[Boolean,String],size:String,success:Boolean,warning:Boolean,...Es(),...Um()},setup(e){const{attachedClasses:a}=qm(e),{colorClasses:n}=Ym(e),o=H(()=>ee("ui",n.value,e.size,A(e.active||e.indicating,"active"),A(e.disabled,"disabled"),A(e.error,"error"),A(e.indicating,"indicating"),A(e.success,"success"),A(e.warning,"warning"),a.value,"progress")),r=H(()=>ee(Pe(e.progress,"progress"))),c=H(()=>e.progress!=="centered"?{}:{right:0});return()=>t("div",{class:o.value,"data-percent":e.percent},[t("div",{class:"bar",style:`width: ${e.percent}%; transition-duration: 300ms;`},[e.progress&&t("div",{class:r.value,style:c.value},[`${e.percent}%`])]),e.label&&t("div",{class:"label"},[e.label])])}}),t1={install(e){e.component(rn.name,rn)}},i1=z({name:"SuiRatingIcon",props:{icon:String,index:{type:Number,default:0}},setup(e){const a=He("rating",G(0)),n=He("updateRating"),o=He("selectedIndex",G(0)),r=He("updateSelectedIndex"),c=He("clearable",!1),p=He("disabled",!1),f=()=>{if(!p){if(c&&e.index===a.value){n(0),r(0);return}n(e.index)}},s=()=>{p||r(e.index)},u=H(()=>e.index<=a.value),g=H(()=>e.index<=o.value),m=H(()=>ee(e.icon,A(u.value,"active"),A(g.value,"selected"),"icon"));return()=>t("i",{class:m.value,onClick:()=>f(),onMouseenter:()=>s()},null)}}),sc=z({name:"SuiRating",props:{clearable:Boolean,color:String,defaultRating:{type:Number,default:0},disabled:Boolean,icon:{type:String,default:"star"},maxRating:{type:Number,default:1},modelValue:Number,size:String},setup(e,{emit:a}){const n=G(e.modelValue||e.defaultRating),o=G(!1),r=G(0),c=g=>{n.value=g,a("update:modelValue",g),a("change",g)},p=g=>r.value=g,f=()=>{e.disabled||(o.value=!0)},s=()=>{e.disabled||(o.value=!1,p(0))},u=H(()=>ee("ui",e.color,e.icon,e.size,A(e.disabled,"disabled"),"rating",A(o.value,"selected")));return dt("rating",n),dt("updateRating",c),dt("selectedIndex",r),dt("updateSelectedIndex",p),dt("clearable",e.clearable),dt("disabled",e.disabled),()=>t("div",{class:u.value,onMouseenter:()=>f(),onMouseleave:()=>s()},[[...Array(e.maxRating)].map((g,m)=>t(i1,{icon:e.icon,index:m+1},null))])}}),a1={install(e){e.component(sc.name,sc)}},rc=z({name:"SuiSearch",props:{icon:String,placeholder:String},setup(e){return()=>t("div",{class:"ui search"},[t("div",{class:"ui icon input"},[t("input",{type:"text",class:"prompt",placeholder:e.placeholder},null),t("i",{class:"search icon"},null)]),t("div",{class:"results"},null)])}}),l1={install(e){e.component(rc.name,rc)}},uc=z({name:"SuiSidebar",directives:{clickoutside:Is},emits:["update:visible","show","hide"],props:{animation:{type:String,default:"overlay"},dimmed:Boolean,direction:{type:String,default:"left"},icon:[Boolean,String],inverted:Boolean,visible:Boolean},setup(e,{emit:a}){const n=oi({animating:!1}),o=H(()=>{const r=e.direction==="right"||e.direction==="left";return ee("ui","sidebar",e.direction,e.animation,A(e.inverted,"inverted"),A(e.visible,"visible"),A(n.animating,"animating"),A(r,"vertical"),Pe(e.icon,"icon"),"menu")});return gt(()=>e.visible,()=>{if(n.animating=!0,setTimeout(()=>n.animating=!1,500),e.dimmed){const r=document.querySelector(".pusher");r&&r.classList.toggle("dimmed")}}),{computedClass:o,onClickPusher:r=>{const c=r.path||r.composedPath&&r.composedPath();c&&c.find(p=>p.classList&&p.classList.contains("pusher"))&&e.visible&&a("update:visible",!1)}}},render(){var e,a;return wi(t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]),[[Sn("clickoutside"),this.onClickPusher]])}}),n1={install:e=>{e.component(uc.name,uc)}};class Xn{static getWindowScrollTop(){let{documentElement:a}=document;return(window.pageYOffset||a.scrollTop)-(a.clientTop||0)}static getWindowScrollLeft(){let{documentElement:a}=document;return(window.pageXOffset||a.scrollLeft)-(a.clientLeft||0)}static hasClass(a,n){return a.classList.contains(n)}}const cc=z({name:"SuiSlider",emits:["change","slideend","update:modelValue"],props:{color:String,disabled:Boolean,inverted:Boolean,labeled:[Boolean,String],labels:Array,max:{type:Number,default:10},min:{type:Number,default:0},modelValue:{type:[Number,Array],default:0},range:Boolean,reversed:Boolean,size:String,step:{type:Number,default:1},vertical:Boolean,verticalHeight:{type:[Number,String],default:200}},setup(e,{emit:a}){const n=H(()=>ee("ui",e.color,e.size,A(e.disabled,"disabled"),A(e.inverted,"inverted"),A(e.reversed,"reversed"),A(e.vertical,"vertical"),Pe(e.labeled,"labeled"),"slider")),o=()=>100*(e.modelValue[0]-e.min)/(e.max-e.min),r=()=>100*(e.modelValue[1]-e.min)/(e.max-e.min),c=H(()=>{if(e.range)return e.reversed&&!e.vertical?{right:o()+"%",width:r()-o()+"%"}:e.vertical?e.reversed?{bottom:o()+"%",height:r()-o()+"%"}:{top:o()+"%",height:r()-o()+"%"}:{left:o()+"%",width:r()-o()+"%"};let q=e.modelValue>e.max?e.max:e.modelValue;return e.reversed?e.vertical?{bottom:"0%",top:`${100-(q-e.min)/(e.max-e.min)*100}%`}:{right:"0%",left:`${100-(q-e.min)/(e.max-e.min)*100}%`}:e.vertical?{top:"0%",bottom:`${100-(q-e.min)/(e.max-e.min)*100}%`}:{left:"0%",right:`${100-(q-e.min)/(e.max-e.min)*100}%`}}),p=H(()=>{let q=e.range?e.modelValue[0]:e.modelValue>e.max?e.max:e.modelValue;return!e.reversed&&e.vertical?{top:`calc(${(q-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:e.reversed&&e.vertical?{top:"auto",bottom:`calc(${(q-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.reversed&&!e.vertical?{left:"auto",right:`calc(${(q-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{left:`calc(${(q-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),f=H(()=>{let q=e.modelValue[1]>e.max?e.max:e.modelValue[1];return e.reversed&&!e.vertical?{left:"auto",right:`calc(${(q-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.vertical?e.reversed?{top:"auto",bottom:`calc(${(q-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{top:`calc(${(q-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:{left:`calc(${(q-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),s=H(()=>e.labels?e.labels:[...Array(e.max-e.min+1)].map((q,K)=>K*e.step+e.min)),u=()=>{var q,K;let de=1,ie=g(),De=(e.vertical?(q=h.value)==null?void 0:q.clientHeight:(K=h.value)==null?void 0:K.clientWidth)||0,We=1;if(De>0)for(;De/ie*We<100;)ie%We||(de=We),We+=1;return de},g=()=>Math.round((e.max-e.min)/e.step),m=G(null),h=G(null),v=G(0),b=G(0),C=G(0),k=G(0),T=()=>{if(!m.value)return;let q=m.value.getBoundingClientRect();v.value=q.left+Xn.getWindowScrollLeft(),b.value=q.top+Xn.getWindowScrollTop(),C.value=m.value.offsetWidth,k.value=m.value.offsetHeight},_=G(0),w=q=>{let{pageX:K,pageY:de}=q.touches?q.touches[0]:q,ie,De;e.vertical?ie=(b.value+k.value-de)*100/k.value:ie=(K-v.value)*100/C.value,De=(e.max-e.min)*(ie/100)+e.min;const We=e.range?e.modelValue[_.value]:e.modelValue||0;De=We+Math.round(De/e.step-We/e.step)*e.step,e.reversed&&(De=e.max-De+e.min),e.vertical&&(De=e.max-De+e.min),x(De)},x=q=>{let K=q,de;if(e.range)if(de=e.modelValue?[...e.modelValue]:[],_.value===0){let ie=e.modelValue?e.modelValue[1]:e.max;K<e.min?K=e.min:K>ie&&(K=ie),de[0]=K,de[1]=de[1]||e.max}else{let ie=e.modelValue?e.modelValue[0]:e.min;K>e.max?K=e.max:K<ie&&(K=ie),de[0]=de[0]||e.min,de[1]=K}else K<e.min&&(K=e.min),K>e.max&&(K=e.max),de=K;a("update:modelValue",de),a("change",de)},B=G(!1),I=q=>B.value=q,M=(q,K=0)=>{I(!0),T(),_.value=K,q.preventDefault()},V=q=>{B.value&&(I(!1),document.removeEventListener("mousemove",P),a("slideend",{event:q,value:e.modelValue}))},P=q=>{B.value&&(w(q),q==null||q.preventDefault())},j=(q,K=0)=>{e.disabled||(M(q,K),document.addEventListener("mousemove",P),document.addEventListener("mouseup",V),q.preventDefault())},X=(q,K=0)=>{switch(_.value=K,q.code){case"ArrowUp":e.vertical&&(e.reversed?U():pe()),q.preventDefault();break;case"ArrowDown":e.vertical&&(e.reversed?pe():U()),q.preventDefault();break;case"ArrowRight":e.reversed?pe():U(),q.preventDefault();break;case"ArrowLeft":e.reversed?U():pe(),q.preventDefault();break}},U=()=>{let q=0;e.range?q=e.modelValue[_.value]+e.step:q=e.modelValue+e.step,x(q)},pe=()=>{let q=0;e.range?q=e.modelValue[_.value]-e.step:q=e.modelValue-e.step,x(q)},Be=q=>{if(!e.disabled&&!Xn.hasClass(q.target,"thumb")){if(e.range){let K=(e.vertical?q.offsetY/q.target.clientHeight:q.offsetX/q.target.clientWidth)*100,de=(o()+r())/2;K<de?_.value=e.reversed?1:0:_.value=e.reversed?0:1}T(),w(q)}};return()=>t("div",{ref:q=>m.value=q,class:n.value,style:e.vertical?`height: ${e.verticalHeight}px;`:""},[t("div",{class:"inner",onClick:Be},[t("div",{class:"track",ref:q=>h.value=q},null),t("div",{class:"track-fill",style:c.value},null),t("div",{class:"thumb",style:p.value,onMousedown:q=>j(q),onTouchstart:q=>M(q),onTouchmove:q=>P(q),onTouchend:q=>V(q),onKeydown:q=>X(q),tabindex:0},null),e.range&&t("div",{class:"thumb second",style:f.value,onMousedown:q=>j(q,1),onTouchstart:q=>M(q,1),onTouchmove:q=>P(q),onTouchend:q=>V(q),onKeydown:q=>X(q,1),tabindex:0},null)]),e.labeled&&t("ul",{class:"auto labels"},[[...Array(g()+1)].map((q,K)=>{let de=K/g();return K%u()?t("li",{class:"halftick label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${de} + 7px);`},null):t("li",{class:"label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${de} + 7px);`},[e.reversed&&!e.vertical?e.labels?e.labels[g()-K]:s.value[g()-K]:e.labels?e.labels[K]:s.value[K]])})])])}}),o1={install(e){e.component(cc.name,cc)}},Oo=z({name:"SuiTabPanel",props:{active:Boolean,attached:[Boolean,String],header:String},setup(e){return{computedClass:H(()=>ee("ui tab segment",A(e.active,"active"),Pe(e.attached,"attached")))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),dc=z({name:"SuiTab",emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},pointing:Boolean,secondary:Boolean,text:Boolean},setup(e,{emit:a,slots:n}){const o=G(e.activeIndex);gt(()=>e.activeIndex,u=>{o.value=u});const r=(u,g)=>{o.value!==g&&(o.value=g,a("update:activeIndex",g),a("tab-change",{event:u,index:g})),a("tab-click",{event:u,index:g})},c=(u,g)=>{u.key==="Enter"&&r(u,g)},p=H(()=>{var u,g;let m=[];return(u=n.default)!=null&&u.call(n)&&((g=n.default)==null||g.call(n).forEach(h=>{h.type.name==="SuiTabPanel"&&m.push(h)})),m}),f=H(()=>!e.secondary&&!e.pointing&&!e.text),s=H(()=>ee("ui menu",A(f.value,"tabular attached"),A(e.pointing,"pointing"),A(e.secondary,"secondary"),A(e.text,"text")));return{onClick:r,onKeyDown:c,tabIndex:o,tabs:p,tabMenuClass:s,isDefaultMenu:f}},render(){const e=()=>this.tabs.map((n,o)=>t("a",{class:`item ${this.tabIndex===o&&"active"}`,onClick:r=>this.onClick(r,o),onKeydown:r=>this.onKeyDown(r,o),tabindex:0},[n.props.header])),a=()=>this.tabs.map((n,o)=>t(Oo,ea(n.props,{active:this.tabIndex===o,attached:this.isDefaultMenu?"bottom":!1}),{default:()=>{var r,c;return[(c=(r=n.children).default)==null?void 0:c.call(r)]}}));return t(Ce,null,[t("div",{class:this.tabMenuClass},[e()]),a()])}}),s1={install(e){e.component(dc.name,dc),e.component(Oo.name,Oo)}};function r1(e,a){e.indexOf(a)===-1&&e.push(a)}const Jm=(e,a,n)=>Math.min(Math.max(n,e),a),Pt={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},un=e=>typeof e=="number",pa=e=>Array.isArray(e)&&!un(e[0]),u1=(e,a,n)=>{const o=a-e;return((n-e)%o+o)%o+e};function c1(e,a){return pa(e)?e[u1(0,e.length,a)]:e}const Wm=(e,a,n)=>-n*e+n*a+e,Km=()=>{},Ai=e=>e,Rs=(e,a,n)=>a-e===0?1:(n-e)/(a-e);function Xm(e,a){const n=e[e.length-1];for(let o=1;o<=a;o++){const r=Rs(0,a,o);e.push(Wm(n,1,r))}}function d1(e){const a=[0];return Xm(a,e-1),a}function m1(e,a=d1(e.length),n=Ai){const o=e.length,r=o-a.length;return r>0&&Xm(a,r),c=>{let p=0;for(;p<o-2&&!(c<a[p+1]);p++);let f=Jm(0,1,Rs(a[p],a[p+1],c));return f=c1(n,p)(f),Wm(e[p],e[p+1],f)}}const Qm=e=>Array.isArray(e)&&un(e[0]),jo=e=>typeof e=="object"&&!!e.createAnimation,xa=e=>typeof e=="function",p1=e=>typeof e=="string",Xa={ms:e=>e*1e3,s:e=>e/1e3},Zm=(e,a,n)=>(((1-3*n+3*a)*e+(3*n-6*a))*e+3*a)*e,f1=1e-7,g1=12;function h1(e,a,n,o,r){let c,p,f=0;do p=a+(n-a)/2,c=Zm(p,o,r)-e,c>0?n=p:a=p;while(Math.abs(c)>f1&&++f<g1);return p}function Na(e,a,n,o){if(e===a&&n===o)return Ai;const r=c=>h1(c,0,1,e,n);return c=>c===0||c===1?c:Zm(r(c),a,o)}const _1=(e,a="end")=>n=>{n=a==="end"?Math.min(n,.999):Math.max(n,.001);const o=n*e,r=a==="end"?Math.floor(o):Math.ceil(o);return Jm(0,1,r/e)},mc={ease:Na(.25,.1,.25,1),"ease-in":Na(.42,0,1,1),"ease-in-out":Na(.42,0,.58,1),"ease-out":Na(0,0,.58,1)},b1=/\((.*?)\)/;function pc(e){if(xa(e))return e;if(Qm(e))return Na(...e);if(mc[e])return mc[e];if(e.startsWith("steps")){const a=b1.exec(e);if(a){const n=a[1].split(",");return _1(parseFloat(n[0]),n[1].trim())}}return Ai}class ep{constructor(a,n=[0,1],{easing:o,duration:r=Pt.duration,delay:c=Pt.delay,endDelay:p=Pt.endDelay,repeat:f=Pt.repeat,offset:s,direction:u="normal",autoplay:g=!0}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=Ai,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((h,v)=>{this.resolve=h,this.reject=v}),o=o||Pt.easing,jo(o)){const h=o.createAnimation(n);o=h.easing,n=h.keyframes||n,r=h.duration||r}this.repeat=f,this.easing=pa(o)?Ai:pc(o),this.updateDuration(r);const m=m1(n,s,pa(o)?o.map(pc):Ai);this.tick=h=>{var v;c=c;let b=0;this.pauseTime!==void 0?b=this.pauseTime:b=(h-this.startTime)*this.rate,this.t=b,b/=1e3,b=Math.max(b-c,0),this.playState==="finished"&&this.pauseTime===void 0&&(b=this.totalDuration);const C=b/this.duration;let k=Math.floor(C),T=C%1;!T&&C>=1&&(T=1),T===1&&k--;const _=k%2;(u==="reverse"||u==="alternate"&&_||u==="alternate-reverse"&&!_)&&(T=1-T);const w=b>=this.totalDuration?1:Math.min(T,1),x=m(this.easing(w));a(x),this.pauseTime===void 0&&(this.playState==="finished"||b>=this.totalDuration+p)?(this.playState="finished",(v=this.resolve)===null||v===void 0||v.call(this,x)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},g&&this.play()}play(){const a=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=a-this.pauseTime:this.startTime||(this.startTime=a),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var a;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(a=this.reject)===null||a===void 0||a.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(a){this.duration=a,this.totalDuration=a*(this.repeat+1)}get currentTime(){return this.t}set currentTime(a){this.pauseTime!==void 0||this.rate===0?this.pauseTime=a:this.startTime=performance.now()-a/this.rate}get playbackRate(){return this.rate}set playbackRate(a){this.rate=a}}class v1{setAnimation(a){this.animation=a,a==null||a.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const Qn=new WeakMap;function tp(e){return Qn.has(e)||Qn.set(e,{transforms:[],values:new Map}),Qn.get(e)}function y1(e,a){return e.has(a)||e.set(a,new v1),e.get(a)}const S1=["","X","Y","Z"],w1=["translate","scale","rotate","skew"],cn={x:"translateX",y:"translateY",z:"translateZ"},fc={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:e=>e+"deg"},C1={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:e=>e+"px"},rotate:fc,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:Ai},skew:fc},ul=new Map,zs=e=>`--motion-${e}`,dn=["x","y","z"];w1.forEach(e=>{S1.forEach(a=>{dn.push(e+a),ul.set(zs(e+a),C1[e])})});const A1=(e,a)=>dn.indexOf(e)-dn.indexOf(a),k1=new Set(dn),ip=e=>k1.has(e),x1=(e,a)=>{cn[a]&&(a=cn[a]);const{transforms:n}=tp(e);r1(n,a),e.style.transform=$1(n)},$1=e=>e.sort(A1).reduce(B1,"").trim(),B1=(e,a)=>`${e} ${a}(var(${zs(a)}))`,Go=e=>e.startsWith("--"),gc=new Set;function T1(e){if(!gc.has(e)){gc.add(e);try{const{syntax:a,initialValue:n}=ul.has(e)?ul.get(e):{};CSS.registerProperty({name:e,inherits:!1,syntax:a,initialValue:n})}catch{}}}const Zn=(e,a)=>document.createElement("div").animate(e,a),hc={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{Zn({opacity:[1]})}catch{return!1}return!0},finished:()=>!!Zn({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{Zn({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},eo={},oa={};for(const e in hc)oa[e]=()=>(eo[e]===void 0&&(eo[e]=hc[e]()),eo[e]);const L1=.015,D1=(e,a)=>{let n="";const o=Math.round(a/L1);for(let r=0;r<o;r++)n+=e(Rs(0,o-1,r))+", ";return n.substring(0,n.length-2)},_c=(e,a)=>xa(e)?oa.linearEasing()?`linear(${D1(e,a)})`:Pt.easing:Qm(e)?I1(e):e,I1=([e,a,n,o])=>`cubic-bezier(${e}, ${a}, ${n}, ${o})`;function E1(e,a){for(let n=0;n<e.length;n++)e[n]===null&&(e[n]=n?e[n-1]:a());return e}const R1=e=>Array.isArray(e)?e:[e];function qo(e){return cn[e]&&(e=cn[e]),ip(e)?zs(e):e}const Bl={get:(e,a)=>{a=qo(a);let n=Go(a)?e.style.getPropertyValue(a):getComputedStyle(e)[a];if(!n&&n!==0){const o=ul.get(a);o&&(n=o.initialValue)}return n},set:(e,a,n)=>{a=qo(a),Go(a)?e.style.setProperty(a,n):e.style[a]=n}};function ap(e,a=!0){if(!(!e||e.playState==="finished"))try{e.stop?e.stop():(a&&e.commitStyles(),e.cancel())}catch{}}function z1(e,a){var n;let o=(a==null?void 0:a.toDefaultUnit)||Ai;const r=e[e.length-1];if(p1(r)){const c=((n=r.match(/(-?[\d.]+)([a-z%]*)/))===null||n===void 0?void 0:n[2])||"";c&&(o=p=>p+c)}return o}function F1(){return window.__MOTION_DEV_TOOLS_RECORD}function P1(e,a,n,o={},r){const c=F1(),p=o.record!==!1&&c;let f,{duration:s=Pt.duration,delay:u=Pt.delay,endDelay:g=Pt.endDelay,repeat:m=Pt.repeat,easing:h=Pt.easing,persist:v=!1,direction:b,offset:C,allowWebkitAcceleration:k=!1,autoplay:T=!0}=o;const _=tp(e),w=ip(a);let x=oa.waapi();w&&x1(e,a);const B=qo(a),I=y1(_.values,B),M=ul.get(B);return ap(I.animation,!(jo(h)&&I.generator)&&o.record!==!1),()=>{const V=()=>{var X,U;return(U=(X=Bl.get(e,B))!==null&&X!==void 0?X:M==null?void 0:M.initialValue)!==null&&U!==void 0?U:0};let P=E1(R1(n),V);const j=z1(P,M);if(jo(h)){const X=h.createAnimation(P,a!=="opacity",V,B,I);h=X.easing,P=X.keyframes||P,s=X.duration||s}if(Go(B)&&(oa.cssRegisterProperty()?T1(B):x=!1),w&&!oa.linearEasing()&&(xa(h)||pa(h)&&h.some(xa))&&(x=!1),x){M&&(P=P.map(pe=>un(pe)?M.toDefaultUnit(pe):pe)),P.length===1&&(!oa.partialKeyframes()||p)&&P.unshift(V());const X={delay:Xa.ms(u),duration:Xa.ms(s),endDelay:Xa.ms(g),easing:pa(h)?void 0:_c(h,s),direction:b,iterations:m+1,fill:"both"};f=e.animate({[B]:P,offset:C,easing:pa(h)?h.map(pe=>_c(pe,s)):void 0},X),f.finished||(f.finished=new Promise((pe,Be)=>{f.onfinish=pe,f.oncancel=Be}));const U=P[P.length-1];f.finished.then(()=>{v||(Bl.set(e,B,U),f.cancel())}).catch(Km),k||(f.playbackRate=1.000001)}else if(r&&w)P=P.map(X=>typeof X=="string"?parseFloat(X):X),P.length===1&&P.unshift(parseFloat(V())),f=new r(X=>{Bl.set(e,B,j?j(X):X)},P,Object.assign(Object.assign({},o),{duration:s,easing:h}));else{const X=P[P.length-1];Bl.set(e,B,M&&un(X)?M.toDefaultUnit(X):X)}return p&&c(e,a,P,{duration:s,delay:u,easing:h,repeat:m,offset:C},"motion-one"),I.setAnimation(f),f&&!T&&f.pause(),f}}const M1=(e,a)=>e[a]?Object.assign(Object.assign({},e),e[a]):Object.assign({},e);function V1(e,a){var n;return typeof e=="string"?a?((n=a[e])!==null&&n!==void 0||(a[e]=document.querySelectorAll(e)),e=a[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const H1=e=>e(),lp=(e,a,n=Pt.duration)=>new Proxy({animations:e.map(H1).filter(Boolean),duration:n,options:a},O1),N1=e=>e.animations[0],O1={get:(e,a)=>{const n=N1(e);switch(a){case"duration":return e.duration;case"currentTime":return Xa.s((n==null?void 0:n[a])||0);case"playbackRate":case"playState":return n==null?void 0:n[a];case"finished":return e.finished||(e.finished=Promise.all(e.animations.map(j1)).catch(Km)),e.finished;case"stop":return()=>{e.animations.forEach(o=>ap(o))};case"forEachNative":return o=>{e.animations.forEach(r=>o(r,e))};default:return typeof(n==null?void 0:n[a])>"u"?void 0:()=>e.animations.forEach(o=>o[a]())}},set:(e,a,n)=>{switch(a){case"currentTime":n=Xa.ms(n);case"playbackRate":for(let o=0;o<e.animations.length;o++)e.animations[o][a]=n;return!0}return!1}},j1=e=>e.finished;function G1(e,a,n){return xa(e)?e(a,n):e}function q1(e){return function(a,n,o={}){a=V1(a);const r=a.length,c=[];for(let p=0;p<r;p++){const f=a[p];for(const s in n){const u=M1(o,s);u.delay=G1(u.delay,p,r);const g=P1(f,s,n[s],u,e);c.push(g)}}return lp(c,o,o.duration)}}const U1=q1(ep);function Y1(e,a={}){return lp([()=>{const n=new ep(e,[0,1],a);return n.finished.catch(()=>{}),n}],a,a.duration)}function J1(e,a,n){return(xa(e)?Y1:U1)(e,a,n)}const be=(e,a)=>(n,{duration:o,keyframesOverride:r={}})=>J1(n,{...e,...r},{autoplay:!1,...a,duration:o}),bc=be({transform:["scale(0.8) translateZ(0px)","scale(0.8) translateZ(0px)","scale(1.05) translateZ(0px)","scale(1) translateZ(0px)"],opacity:[null,.7,1,null],zIndex:[-1,-1,999,999]},{duration:.5,offset:[0,.1,.8,1]}),W1=be({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,-1,null,-1]},{duration:.5,offset:[0,.5,.8,1]}),K1=be({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,1,null,1]},{duration:.5,offset:[0,.5,.8,1]}),X1=be({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(0)","scale(1)"],opacity:[0,1]},{duration:.4,offset:[0,1]}),Q1=be({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(1)","scale(0)"],opacity:[1,0]},{duration:.4,offset:[0,1]}),Z1=be({opacity:[0,1]},{duration:.5,offset:[0,1]}),ey=be({opacity:[0,1],transform:["translateY(10%)","export translateY(0%)"]},{duration:.5,offset:[0,1]}),ty=be({opacity:[0,1],transform:["translateY(-10%)","translateY(0%)"]},{duration:.5,offset:[0,1]}),iy=be({opacity:[0,1],transform:["translateX(10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),ay=be({opacity:[0,1],transform:["translateX(-10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),ly=be({opacity:[1,0]},{duration:.5,offset:[0,1]}),ny=be({opacity:[1,0],transform:["translateY(0%)","texport ranslateY(5%)"]},{duration:.5,offset:[0,1]}),oy=be({opacity:[1,0],transform:["translateY(0%)","translateY(-5%)"]},{duration:.5,offset:[0,1]}),sy=be({opacity:[1,0],transform:["translateX(0%)","translateX(5%)"]},{duration:.5,offset:[0,1]}),ry=be({opacity:[1,0],transform:["translateX(0%)","translateX(-5%)"]},{duration:.5,offset:[0,1]}),uy=be({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["scale3d(.3, .3, .3)","scale3d(1.1, 1.1, 1.1)","scale3d(.9, .9, .9)","scale3d(1.03, 1.03, 1.03)","scale3d(.97, .97, .97)","scale3d(1, 1, 1)"],opacity:[0,null,null,1,null,1]},{duration:.6,offset:[0,.2,.4,.6,.8,1]}),cy=be({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, 1500px, 0","translate3d(0, -20px, 0)","translate3d(0, 10px, 0)","translate3d(0, -5px, 0)","translate3d(0, 0, 0)"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),dy=be({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, -1500px, 0","translate3d(0, 25px, 0)","translate3d(0, -10px, 0)","translate3d(0, 5px, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),my=be({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(1500px, 0, 0","translate3d(-25px, 0, 0)","translate3d(10px, 0, 0)","translate3d(-5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),py=be({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(-1500px, 0, 0","translate3d(25px, 0, 0)","translate3d(-10px, 0, 0)","translate3d(5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),fy=be({transform:["scale3d(.9, .9, .9)","scale3d(1.1, 1.1, 1.1)","scale3d(1.1, 1.1, 1.1)","scale3d(.3, .3, .3)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.5,.55,1]}),gy=be({transform:["translate3d(0, 10px, 0)","translate3d(0, -20px, 0)","translate3d(0, -20px, 0)","translate3d(0, 2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),hy=be({transform:["translate3d(0, -10px, 0)","translate3d(0, 20px, 0)","translate3d(0, 20px, 0)","translate3d(0, -2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),_y=be({transform:["translate3d(-20px, 0, 0)","translate3d(2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),by=be({transform:["translate3d(20px, 0, 0)","translate3d(-2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),vy=be({transform:["perspective(2000px) rotateY(-90deg)","perspective(2000px) rotateY(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),yy=be({transform:["perspective(2000px) rotateY(0deg)","perspective(2000px) rotateY(90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),Sy=be({transform:["perspective(2000px) rotateX(-90deg)","perspective(2000px) rotateX(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),wy=be({transform:["perspective(2000px) rotateX(0deg)","perspective(2000px) rotateX(-90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),Cy=be({transform:["scale(0.8)","scale(1)"],opacity:[0,1]},{duration:.5,offset:[0,1]}),Ay=be({transform:["scale(1)","scale(0.9)"],opacity:[1,0]},{duration:.5,offset:[0,1]}),np={transform:["scaleY(0)","scaleY(1)"],opacity:[0,1]},op={transform:["scaleX(0)","scaleX(1)"],opacity:[0,1]},sp={transform:["scaleY(1)","scaleY(0)"],opacity:[1,0]},ky={transform:["scaleX(1)","scaleX(0)"],opacity:[1,0]},xy=be({transformOrigin:"top center",...np},{offset:[0,1]}),$y=be({transformOrigin:"bottom center",...np},{offset:[0,1]}),By=be({transformOrigin:"center right",...op},{offset:[0,1]}),Ty=be({transformOrigin:"center left",...op},{offset:[0,1]}),Ly=be({transformOrigin:"top center",...sp},{offset:[0,1]}),Dy=be({transformOrigin:"bottom center",...sp},{offset:[0,1]}),vc=be({transformOrigin:"center left",...ky},{offset:[0,1]}),Ti=.8,fa={transform:["perspective(1000px) rotateX(90deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(15deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},ga={transform:["perspective(1000px) rotateY(-90deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-17.5deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},ha={transform:["perspective(1000px) rotateX(0deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(17.5deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},_a={transform:["perspective(1000px) rotateY(0deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(-10deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},Iy=be({transformOrigin:"top center",transform:fa.transform,opacity:fa.opacity},{duration:Ti,offset:fa.offset}),Ey=be({transformOrigin:"bottom center",transform:fa.transform,opacity:fa.opacity},{duration:Ti,offset:fa.offset}),Ry=be({transformOrigin:"center right",transform:ga.transform,opacity:ga.opacity},{duration:Ti,offset:ga.offset}),zy=be({transformOrigin:"center left",transform:ga.transform,opacity:ga.opacity},{duration:Ti,offset:ga.offset}),Fy=be({transformOrigin:"top center",transform:ha.transform,opacity:ha.opacity},{duration:Ti,offset:ha.offset}),Py=be({transformOrigin:"bottom center",transform:ha.transform,opacity:ha.opacity},{duration:Ti,offset:ha.offset}),My=be({transformOrigin:"center right",transform:_a.transform,opacity:_a.opacity},{duration:Ti,offset:_a.offset}),Vy=be({transformOrigin:"center left",transform:_a.transform,opacity:_a.opacity},{duration:Ti,offset:_a.offset}),Hy=be({transform:["scale(0)","scale(1)"],opacity:[1,1]},{offset:[0,1]}),Ny=be({transform:["scale(1)","scale(0)"],opacity:[1,1]},{offset:[0,1]}),Oy=be({transform:["translateY(0)","translateY(0)","translateY(-30px)","translateY(0)","translateY(-15px)","translateY(0)","translateY(0)"]},{offset:[0,.2,.4,.5,.6,.8,1]}),jy=be({opacity:[1,0,1,0,1]},{offset:[0,.25,.5,.75,1]}),Gy=be({animationTimingFunction:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",backgroundColor:["#FCFCFD","#FFF6CD","FCFCFD"]},{duration:2,offset:[0,.3,1]}),qy=be({transform:["scale3d(1, 1, 1)","scale3d(1.25, 0.75, 1)","scale3d(0.75, 1.25, 1)","scale3d(1.15, 0.85, 1)","scale3d(0.95, 1.05, 1)","scale3d(1.05, 0.95, 1)","scale3d(1, 1, 1)"]},{duration:.75,offset:[0,.3,.4,.5,.6,.75,1]}),Uy=be({transform:["scale(1)","scale(0.9)","scale(1)"],opacity:[1,.7,1]},{offset:[0,.5,1]}),Yy=be({transform:["translateX(0)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(0)"]}),Jy=be({transform:["scale(1)","scale(0.9) rotate(-3deg)","scale(0.9) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1) rotate(0)"]},{offset:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]}),Wy={browse:[bc,W1],"browse right":[bc,K1],drop:[X1,Q1],fade:[Z1,ly],"fade up":[ey,ny],"fade down":[ty,oy],"fade left":[iy,sy],"fade right":[ay,ry],fly:[uy,fy],"fly up":[cy,gy],"fly down":[dy,hy],"fly left":[my,_y],"fly right":[py,by],"horizontal flip":[vy,yy],"vertical flip":[Sy,wy],scale:[Cy,Ay],"slide up":[$y,Dy],"slide down":[xy,Ly],"slide left":[By,vc],"slide right":[Ty,vc],"swing up":[Ey,Py],"swing down":[Iy,Fy],"swing left":[Ry,My],"swing right":[zy,Vy],zoom:[Hy,Ny]},Ky={bounce:[Oy,void 0],flash:[jy,void 0],glow:[Gy,void 0],jiggle:[qy,void 0],pulse:[Uy,void 0],shake:[Yy,void 0],tada:[Jy,void 0]},rp=e=>({...Wy,...Ky})[e],Xy=e=>{const[a,n]=rp(e.animation),o=H(()=>e.duration?e.duration/1e3:.5),r=H(()=>(p,f)=>{if(!a)return f();const s=a(p,{duration:o.value});s.play(),s.finished.then(f)}),c=H(()=>(p,f)=>{if(!n)return f();const s=n(p,{duration:o.value});s.play(),s.finished.then(f)});return{onEnter:r,onLeave:c}},yc=z({name:"SuiTransition",props:{animation:{type:String,default:"fade"},duration:{type:Number,default:500}},setup(e){const{onEnter:a,onLeave:n}=Xy(e);return{onEnter:a,onLeave:n}},render(){return t(Tn,{onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})}}),Uo=z({name:"SuiTransitionGroup",props:{tag:String,animation:{type:String,default:"fade"},enterKeyframes:{type:Function,default:()=>({})},leaveKeyframes:{type:Function,default:()=>({})}},setup(e){const[a,n]=rp(e.animation),o=H(()=>(c,p)=>{if(!a)return p();const f=a(c,{duration:.5,keyframesOverride:e.enterKeyframes(c)});f.play(),f.finished.then(p)}),r=H(()=>(c,p)=>{if(!n)return p();const f=n(c,{duration:.5,keyframesOverride:e.leaveKeyframes(c)});f.play(),f.finished.then(p)});return{onEnter:o,onLeave:r}},render(){return t(um,{tag:this.tag,onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})}}),Qy={install(e){e.component(yc.name,yc),e.component(Uo.name,Uo)}},Zy=Object.freeze(Object.defineProperty({__proto__:null,Accordion:vv,Calendar:Rv,Checkbox:zv,Dimmer:Fv,Dropdown:Nv,Embed:Ov,Modal:Kv,Popup:Qv,Progress:t1,Rating:a1,Search:l1,Sidebar:n1,Slider:o1,Tab:s1,Transition:Qy},Symbol.toStringTag,{value:"Module"})),to=z({name:"SuiToastActions",props:{aligned:String,basic:Boolean,vertical:Boolean,...Es()},setup(e,{slots:a}){const n=H(()=>ee("actions",e.basic&&"basic",e.aligned,e.vertical&&"vertical"));return()=>{var o;return e.attached?t(pt,{attached:e.attached,vertical:e.vertical},{default:()=>{var r;return[(r=a.default)==null?void 0:r.call(a)]}}):t("div",{class:n.value},[(o=a.default)==null?void 0:o.call(a)])}}}),eS=z({name:"SuiToastBox",props:{unclickable:Boolean,verticalAttached:Boolean},setup(e,{slots:a}){const n=H(()=>ee("floating toast-box compact",e.unclickable&&"unclickable"));return()=>{var o,r;return e.verticalAttached?t("div",{class:n.value,style:"display: block !important;"},[t("div",{class:"vertical attached compact right"},[(o=a.default)==null?void 0:o.call(a)])]):t("div",{class:n.value,style:"display: block !important;"},[(r=a.default)==null?void 0:r.call(a)])}}});function io(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Vt(e)}const tS=z({name:"SuiToast",emits:["click","close"],props:{id:Number,displayTime:{type:Number,default:3e3},type:String,title:String,message:{type:String,required:!0},centered:Boolean,messageStyle:Boolean,actions:Function,actionsProps:Object,showProgress:{type:String},showProgressColor:String,showProgressUp:Boolean,inverted:Boolean,...Um()},setup(e,{emit:a}){const{colorClasses:n}=Ym(e),o=H(()=>{var p,f,s,u,g;return ee(e.centered&&"center aligned",e.type||"neutral",n.value,"ui",e.messageStyle?"message":"toast",e.actions&&!((p=e.actionsProps)!=null&&p.vertical)&&"actions",((f=e.actionsProps)==null?void 0:f.attached)==="top"&&"bottom attached",((s=e.actionsProps)==null?void 0:s.attached)==="bottom"&&"top attached",((u=e.actionsProps)==null?void 0:u.attached)==="left"&&"left attached",((g=e.actionsProps)==null?void 0:g.vertical)&&"vertical","compact")}),r=G(e.showProgressUp?0:100),c=()=>{const p=e.displayTime/100;setTimeout(()=>{const f=setInterval(()=>{if(e.showProgressUp){r.value>=100&&clearInterval(f),r.value+=1;return}r.value<=0&&clearInterval(f),r.value-=1},p)},500)};return $i(()=>e.showProgress&&c()),setTimeout(()=>e.displayTime>0&&a("close"),e.displayTime+750),{classes:o,progress:r}},render(){var e;let a,n,o;return t(eS,{unclickable:!!this.actions,verticalAttached:((e=this.actionsProps)==null?void 0:e.attached)==="left"},{default:()=>{var r,c,p,f;return[this.showProgress==="top"&&t(rn,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null),this.actions&&(((r=this.actionsProps)==null?void 0:r.attached)==="top"||((c=this.actionsProps)==null?void 0:c.attached)==="left")&&t(to,this.actionsProps,io(a=this.actions({close:()=>this.$emit("close")}))?a:{default:()=>[a]}),t("div",{role:"alert",class:this.classes,onClick:()=>!this.actions&&this.$emit("click")},[t("div",{class:"content"},[this.title&&t("div",{class:"ui header"},[this.title]),t("div",{class:"message"},[this.message])]),this.actions&&!((p=this.actionsProps)!=null&&p.attached)&&t(to,this.actionsProps,io(n=this.actions({close:()=>this.$emit("close")}))?n:{default:()=>[n]})]),this.actions&&((f=this.actionsProps)==null?void 0:f.attached)==="bottom"&&t(to,this.actionsProps,io(o=this.actions({close:()=>this.$emit("close")}))?o:{default:()=>[o]}),this.showProgress==="bottom"&&t(rn,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null)]}})}}),iS=["top right","top center","top left","bottom right","bottom center","bottom left","centered"],aS=({defaultValue:e}={})=>({position:{type:String,validator:a=>iS.includes(a),default:e}}),lS=e=>({positionClasses:H(()=>e.position||"")});function nS(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Vt(e)}const oS=z({name:"SuiToastContainer",props:{horizontal:Boolean,...Es(),...aS({defaultValue:"top right"})},setup(e){const{items:a,remove:n}=up(),{attachedClasses:o}=qm(e),{positionClasses:r}=lS(e);return{classes:H(()=>ee(o.value||r.value,"ui toast-container",e.horizontal&&"horizontal")),items:a,remove:n,enterKeyframes:c=>{if(!(c instanceof HTMLElement))return{};const p=[0,`${c.offsetHeight}px`],f=[0,`${parseInt(getComputedStyle(c).marginBottom,10)}px`];return{height:p,marginBottom:f}},leaveKeyframes:c=>{if(!(c instanceof HTMLElement))return{};const p=[`${c.offsetWidth}px`,0],f=[`${c.offsetHeight}px`,0],s=e.horizontal?{width:p}:{height:f},u=[`${parseInt(getComputedStyle(c).marginBottom,10)}px`,0];return{...s,marginBottom:u}}}},render(){let e;return t(xn,{to:"body"},{default:()=>[t("div",{class:this.classes},[t(Uo,{animation:"scale",enterKeyframes:this.enterKeyframes,leaveKeyframes:this.leaveKeyframes},nS(e=this.items.filter(({position:a,attached:n})=>this.attached?n===this.attached:a===this.position).filter(({horizontal:a})=>this.horizontal===!!a).map(({id:a,...n})=>t(tS,ea({key:a},n,{onClick:()=>this.remove(a),onClose:()=>this.remove(a)}),null)))?e:{default:()=>[e]})])]})}}),sS=G(1),Pa=G([]),up=()=>({items:Pa,add:e=>{e.position=e.position||"top right",Pa.value=[...Pa.value,{id:sS.value++,...e}]},remove:e=>{Pa.value=Pa.value.filter(a=>a.id!==e)}}),ut=()=>{var e;const a=(e=Kt())==null?void 0:e.appContext,{add:n}=up();return{toast:o=>{const{position:r,attached:c,horizontal:p}=o;cS({position:r,attached:c,horizontal:p})||uS(a,{position:r,attached:c,horizontal:p}),n(o)}}},rS=(e,{appContext:a,element:n}={})=>{const o=n||document.createElement("div");return a&&(e.appContext=a),Yl(e,o),{vNode:e,el:o}},uS=(e,{position:a="top right",attached:n,horizontal:o=!1}={})=>{const r=J(oS,{position:a,attached:n,horizontal:o}),{el:c}=rS(r,{appContext:e});return{vNode:r,el:c}},cS=({position:e="top right",attached:a,horizontal:n})=>{const o=a?`.ui.toast-container.${a}.attached`:`.ui.toast-container.${e.split(" ").join(".")}${n?".horizontal":":not(.horizontal)"}`;return document.querySelector(o)};function dS(e){Object.values({...av,...dv,...bv,...Zy}).map(a=>e.use(a))}const mS={install:dS},pS=Object.assign({inheritAttrs:!1},{__name:"DocSectionText",props:["label","onClick"],setup(e){const a=Im(),n=H(()=>{const r=a.currentRoute.value.path;return r.lastIndexOf("/")===r.length-1?r.slice(0,-1):r}),o=r=>{r.preventDefault();const p=r.target.parentElement.getAttribute("href"),f=p.slice(p.indexOf("#")+1),s=document.getElementById(f);s&&s.scrollIntoView({behavior:"smooth"})};return(r,c)=>{const p=y("SuiHeader"),f=y("SuiGridColumn"),s=y("SuiGridRow");return $(),he(Ce,null,[t(s,null,{default:i(()=>[t(f,null,{default:i(()=>[t(p,{as:"h3",class:"doc-section-text"},{default:i(()=>[l(Te(e.label)+" ",1),t(d(Ds),{to:`${n.value}#${r.$attrs.id}`,target:"_self",onClick:o},{default:i(()=>[t(d(W),{name:"linkify",color:"grey",size:"small",link:"",fitted:""})]),_:1},8,["to"])]),_:1})]),_:1}),t(f,{textAlign:"right"},{default:i(()=>[t(d(W),{name:"code",color:"grey",link:"",onClick:e.onClick},null,8,["onClick"])]),_:1})]),_:1}),S("p",null,[ji(r.$slots,"default",{},void 0,!0)])],64)}}}),fS=$e(pS,[["__scopeId","data-v-a2b78897"]]),gS={class:"inner"},hS={__name:"DocSectionCode",props:["code","hideCode"],setup(e){return(a,n)=>{const o=y("SuiGridColumn"),r=y("SuiGridRow");return $(),D(r,null,{default:i(()=>[t(o,{width:16},{default:i(()=>[ji(a.$slots,"default",{},void 0,!0)]),_:3}),t(o,{width:16,id:"accordion","aria-hidden":e.hideCode},{default:i(()=>[S("div",gS,[wi(($(),he("pre",null,[S("code",null,Te(e.code)+`
`,1)])),[[d(Rl)]])])]),_:1},8,["aria-hidden"])]),_:3})}}},_S=$e(hS,[["__scopeId","data-v-965e7ddc"]]),R={__name:"DocSection",props:["label","code"],setup(e){const a=G(!0),n=()=>a.value=!a.value;return(o,r)=>{const c=y("SuiGrid");return $(),he("section",null,[t(c,{columns:2},{default:i(()=>[t(fS,ea({label:e.label,"on-click":n},o.$attrs),{default:i(()=>[ji(o.$slots,"description")]),_:3},16,["label"]),t(_S,{code:e.code,"hide-code":a.value},{default:i(()=>[ji(o.$slots,"example")]),_:3},8,["code","hide-code"])]),_:3})])}}},bS=`<template>
  <SuiButton @click="onClick">{{ label }}</SuiButton>
</template>

<script setup>
import { ref } from 'vue'
import { SuiButton } from 'vue-fomantic-ui'

const label = ref('Follow')
const onClick = () => label.value = label.value === 'Follow' ? 'Following' : 'Follow'
<\/script>`,vS={__name:"ButtonDoc",setup(e){const a=G("Follow"),n=()=>a.value=a.value==="Follow"?"Following":"Follow";return(o,r)=>($(),D(R,{label:"Button",code:bS},{description:i(()=>[l(" A standard button ")]),example:i(()=>[t(d(F),{onClick:n},{default:i(()=>[l(Te(a.value),1)]),_:1})]),_:1}))}},yS=`<template>
  <SuiButton primary>Save</SuiButton>
  <SuiButton secondary>Okay</SuiButton>
  <SuiButton>Cancel</SuiButton>
</template>`,SS={__name:"EmphasisDoc",setup(e){return(a,n)=>($(),D(R,{label:"Emphasis",code:yS},{description:i(()=>[l(" A button can be formatted to show different levels of emphasis ")]),example:i(()=>[t(d(F),{primary:""},{default:i(()=>[l("Save")]),_:1}),t(d(F),{secondary:""},{default:i(()=>[l("Okay")]),_:1}),t(d(F),null,{default:i(()=>[l("Cancel")]),_:1})]),_:1}))}},wS=`<template>
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
</template>`,CS={__name:"AnimatedDoc",setup(e){return(a,n)=>($(),D(R,{label:"Animated",code:wS},{description:i(()=>[l(" A button can animate to show hidden content ")]),example:i(()=>[t(d(F),{animated:""},{default:i(()=>[t(d(vi),{visible:""},{default:i(()=>[l("Next")]),_:1}),t(d(vi),{hidden:""},{default:i(()=>[t(d(W),{name:"arrow right"})]),_:1})]),_:1}),t(d(F),{animated:"vertical"},{default:i(()=>[t(d(vi),{visible:""},{default:i(()=>[t(d(W),{name:"shop"})]),_:1}),t(d(vi),{hidden:""},{default:i(()=>[l("Shop")]),_:1})]),_:1}),t(d(F),{animated:"fade"},{default:i(()=>[t(d(vi),{visible:""},{default:i(()=>[l(" Sign-up for a Pro account ")]),_:1}),t(d(vi),{hidden:""},{default:i(()=>[l("$12.99 a month")]),_:1})]),_:1})]),_:1}))}},AS=`<template>
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
</template>`,kS={__name:"LabeledDoc",setup(e){return(a,n)=>($(),D(R,{label:"Labeled",code:AS},{description:i(()=>[l(" A button can appear alongside a label ")]),example:i(()=>[t(d(F),{labeled:"right",as:"div"},{default:i(()=>[t(d(F),{icon:"heart",content:" Like"}),t(d(N),{basic:""},{default:i(()=>[l("2,048")]),_:1})]),_:1}),t(d(F),{labeled:"left",as:"div"},{default:i(()=>[t(d(N),{basic:"",pointing:"right"},{default:i(()=>[l("2,048")]),_:1}),t(d(F),{icon:"heart",content:" Like"})]),_:1}),t(d(F),{labeled:"left",as:"div"},{default:i(()=>[t(d(N),{basic:""},{default:i(()=>[l("1,048")]),_:1}),t(d(F),{icon:"fork"})]),_:1})]),_:1}))}},xS=`<template>
  <SuiButton icon="cloud" />
</template>`,$S={__name:"IconDoc",setup(e){return(a,n)=>($(),D(R,{label:"Icon",code:xS},{description:i(()=>[l(" A button can have only an icon ")]),example:i(()=>[t(d(F),{icon:"cloud"})]),_:1}))}},BS=`<template>
  <SuiButton labeled icon="pause" content="Pause" />
  <SuiButton labeled="right" icon="right arrow" content="Next" />
  <SuiButton labeled icon>
    <SuiIcon loading name="spinner" />
    Loading
  </SuiButton>
</template>`,TS={__name:"LabeledIconDoc",setup(e){return(a,n)=>($(),D(R,{label:"Labeled Icon",code:BS},{description:i(()=>[l(" A button can use an icon as a label ")]),example:i(()=>[t(d(F),{labeled:"",icon:"pause",content:"Pause"}),t(d(F),{labeled:"right",icon:"right arrow",content:"Next"}),t(d(F),{labeled:"",icon:""},{default:i(()=>[t(d(W),{loading:"",name:"spinner"}),l(" Loading ")]),_:1})]),_:1}))}},LS=`<template>
  <SuiButton basic primary>Primary</SuiButton>
  <SuiButton basic secondary>Secondary</SuiButton>
  <SuiButton basic positive>Positive</SuiButton>
  <SuiButton basic negative>Negative</SuiButton>
</template>`,DS={__name:"BasicDoc",setup(e){return(a,n)=>($(),D(R,{label:"Basic",code:LS},{description:i(()=>[l(" A basic button is less pronounced ")]),example:i(()=>[t(d(F),{basic:"",primary:""},{default:i(()=>[l("Primary")]),_:1}),t(d(F),{basic:"",secondary:""},{default:i(()=>[l("Secondary")]),_:1}),t(d(F),{basic:"",positive:""},{default:i(()=>[l("Positive")]),_:1}),t(d(F),{basic:"",negative:""},{default:i(()=>[l("Negative")]),_:1})]),_:1}))}},IS=`<template>
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
</template>`,ES={__name:"TertiaryDoc",setup(e){return(a,n)=>($(),D(R,{label:"Tertiary",code:IS},{description:i(()=>[l(" An none bordered less important button ")]),example:i(()=>[t(d(F),{tertiary:"",primary:""},{default:i(()=>[l("Primary")]),_:1}),t(d(F),{tertiary:"",secondary:""},{default:i(()=>[l("Secondary")]),_:1}),t(d(F),{tertiary:"",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(d(F),{tertiary:"",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(d(F),{tertiary:"",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(d(F),{tertiary:"",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(d(F),{tertiary:"",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(d(F),{tertiary:"",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(d(F),{tertiary:"",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(d(F),{tertiary:"",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(d(F),{tertiary:"",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(d(F),{tertiary:"",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(d(F),{tertiary:"",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(d(F),{tertiary:"",color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(d(F),{tertiary:"",color:"black"},{default:i(()=>[l("Black")]),_:1})]),_:1}))}},RS=`<template>
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
</template>`,zS={__name:"InvertedDoc",setup(e){return(a,n)=>($(),D(R,{label:"Inverted",code:RS},{description:i(()=>[l(" A button can be formatted to appear on dark backgrounds ")]),example:i(()=>[t(d(Le),{inverted:""},{default:i(()=>[t(d(F),{inverted:"",primary:""},{default:i(()=>[l("Primary")]),_:1}),t(d(F),{inverted:"",secondary:""},{default:i(()=>[l("Secondary")]),_:1}),t(d(F),{inverted:"",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(d(F),{inverted:"",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(d(F),{inverted:"",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(d(F),{inverted:"",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(d(F),{inverted:"",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(d(F),{inverted:"",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(d(F),{inverted:"",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(d(F),{inverted:"",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(d(F),{inverted:"",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(d(F),{inverted:"",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(d(F),{inverted:"",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(d(F),{inverted:"",color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(d(F),{inverted:"",color:"black"},{default:i(()=>[l("Black")]),_:1})]),_:1})]),_:1}))}},FS=`<template>
  <SuiButtonGroup>
    <SuiButton content="One" />
    <SuiButton content="Two" />
    <SuiButton content="Three" />
  </SuiButtonGroup>
</template>`,PS={__name:"ButtonsDoc",setup(e){return(a,n)=>($(),D(R,{label:"Buttons",code:FS},{description:i(()=>[l(" Buttons can exist together as a group ")]),example:i(()=>[t(d(pt),null,{default:i(()=>[t(d(F),{content:"One"}),t(d(F),{content:"Two"}),t(d(F),{content:"Three"})]),_:1})]),_:1}))}},MS=`<template>
  <SuiButtonGroup icon>
    <SuiButton icon="align left" />
    <SuiButton icon="align center" />
    <SuiButton icon="align right" />
    <SuiButton icon="align justify" />
  </SuiButtonGroup>
</template>`,VS={__name:"IconButtonsDoc",setup(e){return(a,n)=>($(),D(R,{label:"Icon Buttons",code:MS},{description:i(()=>[l(" Button groups can show groups of icons ")]),example:i(()=>[t(d(pt),{icon:""},{default:i(()=>[t(d(F),{icon:"align left"}),t(d(F),{icon:"align center"}),t(d(F),{icon:"align right"}),t(d(F),{icon:"align justify"})]),_:1})]),_:1}))}},HS=S("div",{class:"or"},null,-1),NS=S("div",{class:"or","data-text":"ou"},null,-1),OS=`<template>
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
</template>`,jS={__name:"ConditionalsDoc",setup(e){return(a,n)=>($(),D(R,{label:"Conditionals",code:OS},{description:i(()=>[l(" Button groups can contain conditionals ")]),example:i(()=>[t(d(pt),null,{default:i(()=>[t(d(F),{content:"Cancel"}),HS,t(d(F),{content:"Save",positive:""})]),_:1}),t(d(pt),null,{default:i(()=>[t(d(F),{content:"un"}),NS,t(d(F),{content:"deux",positive:""})]),_:1})]),_:1}))}},GS=`<template>
  <SuiButton active icon="user" content=" Follow" />
</template>`,qS={__name:"ActiveDoc",setup(e){return(a,n)=>($(),D(R,{label:"Active",code:GS},{description:i(()=>[l(" A button can show it is currently the active user selection ")]),example:i(()=>[t(d(F),{active:"",icon:"user",content:" Follow"})]),_:1}))}},US=`<template>
  <SuiButton disabled icon="user" content=" Followed" />
</template>`,YS={__name:"DisabledDoc",setup(e){return(a,n)=>($(),D(R,{label:"Disabled",code:US},{description:i(()=>[l(" A button can show it is currently unable to be interacted with ")]),example:i(()=>[t(d(F),{disabled:"",icon:"user",content:" Followed"})]),_:1}))}},JS=`<template>
  <SuiButton loading content="Loading" />
  <SuiButton loading="double" primary content="Loading" />
  <SuiButton loading="elastic" secondary content="Loading" />
</template>`,WS={__name:"LoadingDoc",setup(e){return(a,n)=>($(),D(R,{label:"Loading",code:JS},{description:i(()=>[l(" A button can show a loading indicator ")]),example:i(()=>[t(d(F),{loading:"",content:"Loading"}),t(d(F),{loading:"double",primary:"",content:"Loading"}),t(d(F),{loading:"elastic",secondary:"",content:"Loading"})]),_:1}))}},KS=`<template>
  <SuiButton facebook icon="facebook" content=" Facebook" />
  <SuiButton twitter icon="twitter" content=" Twitter" />
  <SuiButton vk icon="vk" content="VK" />
  <SuiButton linkedin icon="linkedin" content=" LinkedIn" />
  <SuiButton instagram icon="instagram" content=" Instagram" />
  <SuiButton youtube icon="youtube" content=" YouTube" />
  <SuiButton whatsapp icon="whatsapp" content=" WhatsApp" />
  <SuiButton telegram icon="telegram" content=" Telegram" />
</template>`,XS={__name:"SocialDoc",setup(e){return(a,n)=>($(),D(R,{label:"Social",code:KS},{description:i(()=>[l(" A button can be formatted to link to a social website ")]),example:i(()=>[t(d(F),{facebook:"",icon:"facebook",content:" Facebook"}),t(d(F),{twitter:"",icon:"twitter",content:" Twitter"}),t(d(F),{vk:"",icon:"vk",content:"VK"}),t(d(F),{linkedin:"",icon:"linkedin",content:" LinkedIn"}),t(d(F),{instagram:"",icon:"instagram",content:" Instagram"}),t(d(F),{youtube:"",icon:"youtube",content:" YouTube"}),t(d(F),{whatsapp:"",icon:"whatsapp",content:" WhatsApp"}),t(d(F),{telegram:"",icon:"telegram",content:" Telegram"})]),_:1}))}},QS=`<template>
  <SuiButton size="mini" content="Mini" />
  <SuiButton size="tiny" content="Tiny" />
  <SuiButton size="small" content="Small" />
  <SuiButton size="medium" content="Medium" />
  <SuiButton size="large" content="Large" />
  <SuiButton size="big" content="Big" />
  <SuiButton size="huge" content="Huge" />
  <SuiButton size="massive" content="Massive" />
</template>`,ZS={__name:"SizeDoc",setup(e){return(a,n)=>($(),D(R,{label:"Size",code:QS},{description:i(()=>[l(" A button can have different sizes ")]),example:i(()=>[t(d(F),{size:"mini",content:"Mini"}),t(d(F),{size:"tiny",content:"Tiny"}),t(d(F),{size:"small",content:"Small"}),t(d(F),{size:"medium",content:"Medium"}),t(d(F),{size:"large",content:"Large"}),t(d(F),{size:"big",content:"Big"}),t(d(F),{size:"huge",content:"Huge"}),t(d(F),{size:"massive",content:"Massive"})]),_:1}))}},ew=`<template>
  <SuiButton floated="left" content="Left Floated" />
  <SuiButton floated="right" content="Right Floated" />
</template>`,tw={__name:"FloatedDoc",setup(e){return(a,n)=>($(),D(R,{label:"Floated",code:ew},{description:i(()=>[l(" A button can be aligned to the left or right of its container ")]),example:i(()=>[t(d(F),{floated:"left",content:"Left Floated"}),t(d(F),{floated:"right",content:"Right Floated"})]),_:1}))}},iw=`<template>
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
</template>`,aw={__name:"ColoredDoc",setup(e){return(a,n)=>($(),D(R,{label:"Colored",code:iw},{description:i(()=>[l(" A button can have different colors ")]),example:i(()=>[t(d(F),{color:"red"},{default:i(()=>[l("Red")]),_:1}),t(d(F),{color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(d(F),{color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(d(F),{color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(d(F),{color:"green"},{default:i(()=>[l("Green")]),_:1}),t(d(F),{color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(d(F),{color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(d(F),{color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(d(F),{color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(d(F),{color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(d(F),{color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(d(F),{color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(d(F),{color:"black"},{default:i(()=>[l("Black")]),_:1})]),_:1}))}},lw=`<template>
  <SuiButton compact content="Hold" />
  <SuiButton compact icon="pause" />
  <SuiButton compact labeled icon="pause" content="Pause" />
</template>`,nw={__name:"CompactDoc",setup(e){return(a,n)=>($(),D(R,{label:"Compact",code:lw},{description:i(()=>[l(" A button can reduce its padding to fit into tighter spaces ")]),example:i(()=>[t(d(F),{compact:"",content:"Hold"}),t(d(F),{compact:"",icon:"pause"}),t(d(F),{compact:"",labeled:"",icon:"pause",content:"Pause"})]),_:1}))}},ow=`<template>
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
<\/script>`,sw={__name:"ToggleDoc",setup(e){const a=G(!1);return(n,o)=>($(),D(R,{label:"Toggle",code:ow},{description:i(()=>[l(" A button can be formatted to toggle on and off ")]),example:i(()=>[t(d(F),{toggle:"",active:a.value,onClick:()=>a.value=!a.value,content:a.value?"Voted":"Vote",style:{"min-width":"200px"}},null,8,["active","onClick","content"])]),_:1}))}},rw=`<template>
  <SuiButton positive content="Positive Button" />
</template>`,uw={__name:"PositiveDoc",setup(e){return(a,n)=>($(),D(R,{label:"Positive",code:rw},{description:i(()=>[l(" A button can hint towards a positive consequence ")]),example:i(()=>[t(d(F),{positive:"",content:"Positive Button"})]),_:1}))}},cw=`<template>
  <SuiButton negative content="Negative Button" />
</template>`,dw={__name:"NegativeDoc",setup(e){return(a,n)=>($(),D(R,{label:"Negative",code:cw},{description:i(()=>[l(" A button can hint towards a negative consequence ")]),example:i(()=>[t(d(F),{negative:"",content:"Negative Button"})]),_:1}))}},mw=`<template>
  <SuiButton fluid content="Fits container" />
</template>`,pw={__name:"FluidDoc",setup(e){return(a,n)=>($(),D(R,{label:"Fluid",code:mw},{description:i(()=>[l(" A button can take the width of its container ")]),example:i(()=>[t(d(F),{fluid:"",content:"Fits container"})]),_:1}))}},fw=`<template>
  <SuiButton circular icon="settings" />
</template>`,gw={__name:"CircularDoc",setup(e){return(a,n)=>($(),D(R,{label:"Circular",code:fw},{description:i(()=>[l(" A button can be circular ")]),example:i(()=>[t(d(F),{circular:"",icon:"settings"})]),_:1}))}},hw=S("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?",-1),_w=`<template>
  <SuiButton attached="top" content="Top" />
  <SuiSegment>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?</p>
  </SuiSegment>
  <SuiButton attached="bottom" content="Bottom" />
</template>`,bw={__name:"VerticallyAttachedDoc",setup(e){return(a,n)=>($(),D(R,{label:"Vertically Attached",code:_w},{description:i(()=>[l(" A button can be attached to the top or bottom of other content ")]),example:i(()=>[t(d(F),{attached:"top",content:"Top"}),t(d(Le),{attached:""},{default:i(()=>[hw]),_:1}),t(d(F),{attached:"bottom",content:"Bottom"})]),_:1}))}},vw=`<template>
  <SuiButton attached="left" content="Left" />
  <SuiButton attached="right" content="Right" />
</template>`,yw={__name:"HorizontallyAttachedDoc",setup(e){return(a,n)=>($(),D(R,{label:"Horizontally Attached",code:vw},{description:i(()=>[l(" A button can be attached to the left or right of other content ")]),example:i(()=>[t(d(F),{attached:"left",content:"Left"}),t(d(F),{attached:"right",content:"Right"})]),_:1}))}},Sw=`<template>
  <SuiButtonGroup vertical>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,ww={__name:"VerticalButtonsDoc",setup(e){return(a,n)=>($(),D(R,{label:"Vertical Buttons",code:Sw},{description:i(()=>[l(" Groups can be formatted to appear vertically ")]),example:i(()=>[t(d(pt),{vertical:""},{default:i(()=>[t(d(F),null,{default:i(()=>[l("Feed")]),_:1}),t(d(F),null,{default:i(()=>[l("Messages")]),_:1}),t(d(F),null,{default:i(()=>[l("Events")]),_:1}),t(d(F),null,{default:i(()=>[l("Photos")]),_:1})]),_:1})]),_:1}))}},Cw=`<template>
  <SuiButtonGroup stackable>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,Aw={__name:"StackableButtonsDoc",setup(e){return(a,n)=>($(),D(R,{label:"Stackable Buttons",code:Cw},{description:i(()=>[l(" Horizontal groups can automatically be stacked on mobile devices ")]),example:i(()=>[t(d(pt),{stackable:""},{default:i(()=>[t(d(F),null,{default:i(()=>[l("Feed")]),_:1}),t(d(F),null,{default:i(()=>[l("Messages")]),_:1}),t(d(F),null,{default:i(()=>[l("Events")]),_:1}),t(d(F),null,{default:i(()=>[l("Photos")]),_:1})]),_:1})]),_:1}))}},kw=`<template>
  <SuiButtonGroup vertical labeled icon>
    <SuiButton icon="pause" content="Pause" />
    <SuiButton icon="play" content="Play" />
    <SuiButton icon="shuffle" content="Shuffle" />
  </SuiButtonGroup>
</template>`,xw={__name:"LabeledIconButtonsDoc",setup(e){return(a,n)=>($(),D(R,{label:"Icon Buttons",code:kw},{description:i(()=>[l(" Groups can be formatted as labeled icons ")]),example:i(()=>[t(d(pt),{vertical:"",labeled:"",icon:""},{default:i(()=>[t(d(F),{icon:"pause",content:"Pause"}),t(d(F),{icon:"play",content:"Play"}),t(d(F),{icon:"shuffle",content:"Shuffle"})]),_:1})]),_:1}))}},$w=`<template>
  <SuiButtonGroup>
    <SuiButton labeled icon="left chevron" content="Back" />
    <SuiButton icon="stop" content="Stop" />
    <SuiButton icon labeled="right">
      <SuiIcon name="right chevron" />
      Forward
    </SuiButton>
  </SuiButtonGroup>
</template>`,Bw={__name:"MixedGroupDoc",setup(e){return(a,n)=>($(),D(R,{label:"Mixed Group",code:$w},{description:i(()=>[l(" Button groups can show groups of icons ")]),example:i(()=>[t(d(pt),null,{default:i(()=>[t(d(F),{labeled:"",icon:"left chevron",content:"Back"}),t(d(F),{icon:"stop",content:"Stop"}),t(d(F),{icon:"",labeled:"right"},{default:i(()=>[t(d(W),{name:"right chevron"}),l(" Forward ")]),_:1})]),_:1})]),_:1}))}},Tw=`<template>
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
</template>`,Lw={__name:"EqualWidthDoc",setup(e){return(a,n)=>($(),D(R,{label:"Equal Width",code:Tw},{description:i(()=>[l(" Groups can have their widths divided evenly ")]),example:i(()=>[t(d(pt),{widths:5},{default:i(()=>[t(d(F),null,{default:i(()=>[l("Overview")]),_:1}),t(d(F),null,{default:i(()=>[l("Specs")]),_:1}),t(d(F),null,{default:i(()=>[l("Warranty")]),_:1}),t(d(F),null,{default:i(()=>[l("Reviews")]),_:1}),t(d(F),null,{default:i(()=>[l("Support")]),_:1})]),_:1}),t(d(pt),{widths:3},{default:i(()=>[t(d(F),null,{default:i(()=>[l("Overview")]),_:1}),t(d(F),null,{default:i(()=>[l("Specs")]),_:1}),t(d(F),null,{default:i(()=>[l("Support")]),_:1})]),_:1})]),_:1}))}},Dw=`<template>
  <SuiButtonGroup color="blue">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Iw={__name:"ColoredButtonsDoc",setup(e){return(a,n)=>($(),D(R,{label:"Colored Buttons",code:Dw},{description:i(()=>[l(" Groups can have a shared color ")]),example:i(()=>[t(d(pt),{color:"blue"},{default:i(()=>[t(d(F),null,{default:i(()=>[l("One")]),_:1}),t(d(F),null,{default:i(()=>[l("Two")]),_:1}),t(d(F),null,{default:i(()=>[l("Three")]),_:1})]),_:1})]),_:1}))}},Ew=`<template>
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
</template>`,Rw={__name:"BasicButtonsDoc",setup(e){return(a,n)=>($(),D(R,{label:"Basic Buttons",code:Ew},{description:i(()=>[l(" A button group can be less pronounced ")]),example:i(()=>[t(d(pt),{basic:""},{default:i(()=>[t(d(F),null,{default:i(()=>[l("One")]),_:1}),t(d(F),null,{default:i(()=>[l("Two")]),_:1}),t(d(F),null,{default:i(()=>[l("Three")]),_:1})]),_:1}),t(d(pt),null,{default:i(()=>[t(d(F),{basic:"",color:"red"},{default:i(()=>[l("One")]),_:1}),t(d(F),{basic:"",color:"blue"},{default:i(()=>[l("Two")]),_:1}),t(d(F),{basic:"",color:"green"},{default:i(()=>[l("Three")]),_:1})]),_:1})]),_:1}))}},zw=`<template>
  <SuiButtonGroup size="large">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Fw={__name:"GroupSizesDoc",setup(e){return(a,n)=>($(),D(R,{label:"Group Sizes",code:zw},{description:i(()=>[l(" Groups can have a shared color ")]),example:i(()=>[t(d(pt),{size:"large"},{default:i(()=>[t(d(F),null,{default:i(()=>[l("One")]),_:1}),t(d(F),null,{default:i(()=>[l("Two")]),_:1}),t(d(F),null,{default:i(()=>[l("Three")]),_:1})]),_:1})]),_:1}))}},Pw={__name:"Button",setup(e){const a=[{id:"button",label:"Button",category:"Types",component:vS},{id:"emphasis",label:"Emphasis",category:"Types",component:SS},{id:"animated",label:"Animated",category:"Types",component:CS},{id:"labeled",label:"Labeled",category:"Types",component:kS},{id:"icon",label:"Icon",category:"Types",component:$S},{id:"labeled-icon",label:"Labeled Icon",category:"Types",component:TS},{id:"basic",label:"Basic",category:"Types",component:DS},{id:"tertiary",label:"Tertiary",category:"Types",component:ES},{id:"inverted",label:"Inverted",category:"Types",component:zS},{id:"buttons",label:"Buttons",category:"Groups",component:PS},{id:"icon-buttons",label:"Icon Buttons",category:"Groups",component:VS},{id:"content",label:"Content",category:"Content",component:jS},{id:"active",label:"Active",category:"States",component:qS},{id:"disabled",label:"Disabled",category:"States",component:YS},{id:"loading",label:"Loading",category:"States",component:WS},{id:"social",label:"Social",category:"Variations",component:XS},{id:"size",label:"Size",category:"Variations",component:ZS},{id:"floated",label:"Floated",category:"Variations",component:tw},{id:"colored",label:"Colored",category:"Variations",component:aw},{id:"compact",label:"Compact",category:"Variations",component:nw},{id:"toggle",label:"Toggle",category:"Variations",component:sw},{id:"positive",label:"Positive",category:"Variations",component:uw},{id:"negative",label:"Negative",category:"Variations",component:dw},{id:"fluid",label:"Fluid",category:"Variations",component:pw},{id:"circular",label:"Circular",category:"Variations",component:gw},{id:"vertically-attached",label:"Vertically Attached",category:"Variations",component:bw},{id:"horizontally-attached",label:"Horizontally Attached",category:"Variations",component:yw},{id:"vertical-buttons",label:"Vertical Buttons",category:"Group Variations",component:ww},{id:"stackable-buttons",label:"Stackable Buttons",category:"Group Variations",component:Aw},{id:"labeled-icon-buttons",label:"Labeled Icon Buttons",category:"Group Variations",component:xw},{id:"mixed-group",label:"Mixed Group",category:"Group Variations",component:Bw},{id:"equal-width",label:"Equal Width",category:"Group Variations",component:Lw},{id:"colored-buttons",label:"Colored Buttons",category:"Group Variations",component:Iw},{id:"basic-buttons",label:"Basic Buttons",category:"Group Variations",component:Rw},{id:"group-sizes",label:"Group Sizes",category:"Group Variations",component:Fw}];return(n,o)=>($(),D(_t,{title:"Button",description:"A button indicates a possible user action","component-docs":a}))}},Mw=S("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Vw=`<template>
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
</template>`,Hw={__name:"ContainerDoc",setup(e){return(a,n)=>($(),D(R,{label:"Container",code:Vw},{description:i(()=>[l(" A standard container ")]),example:i(()=>[t(d(Ci),null,{default:i(()=>[Mw]),_:1})]),_:1}))}},Nw=S("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Ow=`<template>
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
</template>`,jw={__name:"TextContainerDoc",setup(e){return(a,n)=>($(),D(R,{label:"Text Container",code:Ow},{description:i(()=>[l(" A container can reduce its maximum width to more naturally accommodate a single column of text ")]),example:i(()=>[t(d(Ci),{text:""},{default:i(()=>[t(d(fe),{as:"h2"},{default:i(()=>[l("Header")]),_:1}),Nw]),_:1})]),_:1}))}},Gw=`<template>
  <SuiContainer textAlign="left">Left Aligned</SuiContainer>
  <SuiContainer textAlign="center">Center Aligned</SuiContainer>
  <SuiContainer textAlign="right">Right Aligned</SuiContainer>
</template>`,qw={__name:"TextAlignmentDoc",setup(e){return(a,n)=>($(),D(R,{label:"Text Alignment",code:Gw},{description:i(()=>[l(" A container can specify its text alignment ")]),example:i(()=>[t(d(Ci),{textAlign:"left"},{default:i(()=>[l("Left Aligned")]),_:1}),t(d(Ci),{textAlign:"center"},{default:i(()=>[l("Center Aligned")]),_:1}),t(d(Ci),{textAlign:"right"},{default:i(()=>[l("Right Aligned")]),_:1})]),_:1}))}},Uw=S("p",null," Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today. ",-1),Yw=`<template>
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
</template>`,Jw={__name:"FluidDoc",setup(e){return(a,n)=>($(),D(R,{label:"Fluid",code:Yw},{description:i(()=>[l(" A fluid container has no maximum width ")]),example:i(()=>[t(d(Ci),{fluid:""},{default:i(()=>[t(d(fe),{as:"h2"},{default:i(()=>[l("Dogs Roles with Humans")]),_:1}),Uw]),_:1})]),_:1}))}},Ww={__name:"Container",setup(e){const a=[{id:"container",label:"Container",category:"Types",component:Hw},{id:"text-container",label:"Text Container",category:"Types",component:jw},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:qw},{id:"fluid",label:"Fluid",category:"Variations",component:Jw}];return(n,o)=>($(),D(_t,{title:"Container",description:"A container limits content to a maximum width","component-docs":a}))}},Kw=`<template>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider />
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,Xw={__name:"DividerDoc",setup(e){return(a,n)=>($(),D(R,{label:"Divider",code:Kw},{description:i(()=>[l(" A standard divider ")]),example:i(()=>[t(d(ce),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(d(Ve)),t(d(ce),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},Qw=S("label",null,"Username",-1),Zw=S("input",{type:"text",placeholder:"Username"},null,-1),eC=S("label",null,"Password",-1),tC=S("input",{type:"password",placeholder:"Password"},null,-1),iC=`<template>
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
</template>`,aC={__name:"VerticalDividerDoc",setup(e){return(a,n)=>($(),D(R,{label:"Vertical Divider",code:iC},{description:i(()=>[l(" A divider can segment content vertically. ")]),example:i(()=>[t(d(Le),{placeholder:""},{default:i(()=>[t(d(ka),{columns:"equal"},{default:i(()=>[t(d(St),null,{default:i(()=>[t(d(Et),null,{default:i(()=>[t(d(at),null,{default:i(()=>[Qw,Zw]),_:1}),t(d(at),null,{default:i(()=>[eC,tC]),_:1}),t(d(F),{primary:""},{default:i(()=>[l("Login")]),_:1})]),_:1})]),_:1}),t(d(St),{textAlign:"middle"},{default:i(()=>[t(d(F),{secondary:"",icon:"signup",content:"Sign Up"})]),_:1})]),_:1}),t(d(Ve),{vertical:""},{default:i(()=>[l("Or")]),_:1})]),_:1})]),_:1}))}},lC=`<template>
  <SuiSegment basic textAlign="center">
    <SuiInput icon="search" iconPosition="left" action="Search" placeholder="Order #" />
    <SuiDivider horizontal>Or</SuiDivider>
    <SuiButton labeled icon="add" color="green" content="Create New Order" />
  </SuiSegment>
</template>`,nC={__name:"HorizontalDividerDoc",setup(e){return(a,n)=>($(),D(R,{label:"Horizontal Divider",code:lC},{description:i(()=>[l(" A divider can segment content horizontally ")]),example:i(()=>[t(d(Le),{basic:"",textAlign:"center"},{default:i(()=>[t(d(Ze),{icon:"search",iconPosition:"left",action:"Search",placeholder:"Order #"}),t(d(Ve),{horizontal:""},{default:i(()=>[l("Or")]),_:1}),t(d(F),{labeled:"",icon:"add",color:"green",content:"Create New Order"})]),_:1})]),_:1}))}},oC=`<template>
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
</template>`,sC={__name:"HorizontalAlignmentDoc",setup(e){return(a,n)=>($(),D(R,{label:"Horizontal Alignment",code:oC},{description:i(()=>[l(" A horizontal divider can be aligned ")]),example:i(()=>[t(d(Ve),{horizontal:"",textAlign:"left"},{default:i(()=>[t(d(W),{name:"left align"}),l(" Left Aligned ")]),_:1}),t(d(Ve),{horizontal:"",textAlign:"center"},{default:i(()=>[t(d(W),{name:"center align"}),l(" Center Aligned ")]),_:1}),t(d(Ve),{horizontal:"",textAlign:"right"},{default:i(()=>[t(d(W),{name:"right align"}),l(" Right Aligned ")]),_:1})]),_:1}))}},rC=`<template>
  <SuiSegment inverted>
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider inverted />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider horizontal inverted>Horizontal</SuiDivider>
  </SuiSegment>
</template>`,uC={__name:"InvertedDoc",setup(e){return(a,n)=>($(),D(R,{label:"Inverted",code:rC},{description:i(()=>[l(" A divider can have its colors inverted ")]),example:i(()=>[t(d(Le),{inverted:""},{default:i(()=>[t(d(ce),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(d(Ve),{inverted:""}),t(d(ce),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(d(Ve),{horizontal:"",inverted:""},{default:i(()=>[l("Horizontal")]),_:1})]),_:1})]),_:1}))}},cC=`<template>
  <SuiSegment>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
    <SuiDivider fitted />
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
  </SuiSegment>
</template>`,dC={__name:"FittedDoc",setup(e){return(a,n)=>($(),D(R,{label:"Inverted",code:cC},{description:i(()=>[l(" A divider can be fitted, without any space above or below it. ")]),example:i(()=>[t(d(Le),null,{default:i(()=>[l(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),t(d(Ve),{fitted:""}),l(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. ")]),_:1})]),_:1}))}},mC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider hidden />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,pC={__name:"HiddenDoc",setup(e){return(a,n)=>($(),D(R,{label:"Hidden",code:mC},{description:i(()=>[l(" A hidden divider divides content without creating a dividing line ")]),example:i(()=>[t(d(fe),null,{default:i(()=>[l("Section One")]),_:1}),t(d(ce),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(d(Ve),{hidden:""}),t(d(fe),null,{default:i(()=>[l("Section Two")]),_:1}),t(d(ce),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},fC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider section />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,gC={__name:"SectionDoc",setup(e){return(a,n)=>($(),D(R,{label:"Section",code:fC},{description:i(()=>[l(" A divider can provide greater margins to divide sections of content ")]),example:i(()=>[t(d(fe),null,{default:i(()=>[l("Section One")]),_:1}),t(d(ce),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(d(Ve),{section:""}),t(d(fe),null,{default:i(()=>[l("Section Two")]),_:1}),t(d(ce),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},hC=`<template>
  <SuiSegment>
    <SuiHeader floated="right">Section One</SuiHeader>
    <SuiDivider clearing />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,_C={__name:"ClearingDoc",setup(e){return(a,n)=>($(),D(R,{label:"Clearing",code:hC},{description:i(()=>[l(" A divider can clear the contents above it ")]),example:i(()=>[t(d(Le),null,{default:i(()=>[t(d(fe),{floated:"right"},{default:i(()=>[l("Section One")]),_:1}),t(d(Ve),{clearing:""}),t(d(ce),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},bC=`<template>
  <SuiDivider size="mini">MINI</SuiDivider>
  <SuiDivider size="tiny">TINY</SuiDivider>
  <SuiDivider size="small">SMALL</SuiDivider>
  <SuiDivider size="large">LARGE</SuiDivider>
  <SuiDivider size="big">BIG</SuiDivider>
  <SuiDivider size="huge">HUGE</SuiDivider>
  <SuiDivider size="massive">MASSIVE</SuiDivider>
</template>`,vC={__name:"SizeDoc",setup(e){return(a,n)=>($(),D(R,{label:"Size",code:bC},{description:i(()=>[l(" A divider text can vary in size ")]),example:i(()=>[t(d(Ve),{horizontal:"",size:"mini"},{default:i(()=>[l("MINI")]),_:1}),t(d(Ve),{horizontal:"",size:"tiny"},{default:i(()=>[l("TINY")]),_:1}),t(d(Ve),{horizontal:"",size:"small"},{default:i(()=>[l("SMALL")]),_:1}),t(d(Ve),{horizontal:"",size:"large"},{default:i(()=>[l("LARGE")]),_:1}),t(d(Ve),{horizontal:"",size:"big"},{default:i(()=>[l("BIG")]),_:1}),t(d(Ve),{horizontal:"",size:"huge"},{default:i(()=>[l("HUGE")]),_:1}),t(d(Ve),{horizontal:"",size:"massive"},{default:i(()=>[l("MASSIVE")]),_:1})]),_:1}))}},yC={__name:"Divider",setup(e){const a=[{id:"divider",label:"Divider",category:"Types",component:Xw},{id:"vertical-divider",label:"Vertical Divider",category:"Types",component:aC},{id:"horizontal-divider",label:"Horizontal Divider",category:"Types",component:nC},{id:"horizontal-alignment",label:"Horizontal Alignment",category:"Types",component:sC},{id:"inverted",label:"Inverted",category:"Variations",component:uC},{id:"fitted",label:"Fitted",category:"Variations",component:dC},{id:"hidden",label:"Hidden",category:"Variations",component:pC},{id:"section",label:"Section",category:"Variations",component:gC},{id:"clearing",label:"Clearing",category:"Variations",component:_C},{id:"size",label:"Size",category:"Variations",component:vC}];return(n,o)=>($(),D(_t,{title:"Divider",description:"A divider visually segments content into groups","component-docs":a}))}},SC=`<template>
  <SuiEmoji name="anguished" disabled />
</template>`,wC={__name:"DisabledDoc",setup(e){return(a,n)=>($(),D(R,{label:"Disabled",code:SC},{description:i(()=>[l(" An emoji can show that it is disabled ")]),example:i(()=>[t(d(At),{name:"anguished",disabled:""})]),_:1}))}},CC=`<template>
  <SuiEmoji name="angel" loading />
  <SuiEmoji name="blush" loading />
  <SuiEmoji name="grin" loading />
</template>`,AC={__name:"LoadingDoc",setup(e){return(a,n)=>($(),D(R,{label:"Loading",code:CC},{description:i(()=>[l(" An emoji can be used as a simple loader ")]),example:i(()=>[t(d(At),{name:"angel",loading:""}),t(d(At),{name:"blush",loading:""}),t(d(At),{name:"grin",loading:""})]),_:1}))}},kC=`<template>
  <SuiEmoji name="relaxed" size="small" />
  <SuiEmoji name="relaxed" size="medium" />
  <SuiEmoji name="relaxed" size="large" />
  <SuiEmoji name="relaxed" size="big" />
</template>`,xC={__name:"SizeDoc",setup(e){return(a,n)=>($(),D(R,{label:"Size",code:kC},{description:i(()=>[l(" An emoji can vary in size ")]),example:i(()=>[t(d(At),{name:"relaxed",size:"small"}),t(d(At),{name:"relaxed",size:"medium"}),t(d(At),{name:"relaxed",size:"large"}),t(d(At),{name:"relaxed",size:"big"})]),_:1}))}},$C=`<template>
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
</template>`,BC={__name:"AutosizingDoc",setup(e){return(a,n)=>($(),D(R,{label:"Autosizing",code:$C},{description:i(()=>[l(" If no specific size class is given, all emojis are automatically sized according to the current element font-size ")]),example:i(()=>[t(d(fe),{size:"small"},{default:i(()=>[l(" Within a Header "),t(d(At),{name:"relaxed"})]),_:1}),t(d(F),{as:"div",size:"large"},{default:i(()=>[l(" Within a Button "),t(d(At),{name:"relaxed"})]),_:1}),t(d(N),{size:"massive"},{default:i(()=>[l(" Within a Label "),t(d(At),{name:"relaxed"})]),_:1})]),_:1}))}},TC=`<template>
  <SuiEmoji link name="slight_smile" size="medium" />
</template>`,LC={__name:"LinkDoc",setup(e){return(a,n)=>($(),D(R,{label:"Link",code:TC},{description:i(()=>[l(" An emoji can be formatted as a link ")]),example:i(()=>[t(d(At),{link:"",name:"slight_smile",size:"medium"})]),_:1}))}},DC={__name:"Emoji",setup(e){const a=[{id:"disabled",label:"Disabled",category:"States",component:wC},{id:"loading",label:"Loading",category:"States",component:AC},{id:"size",label:"Size",category:"Variations",component:xC},{id:"autosizing",label:"Autosizing",category:"Variations",component:BC},{id:"link",label:"Link",category:"Variations",component:LC}];return(n,o)=>($(),D(_t,{title:"Emoji",description:"An emoji is a glyph used to represent an emotional state","component-docs":a}))}},IC=`<template>
  <SuiFlag name="de" size="small" />
  <SuiFlag name="fr" size="medium" />
  <SuiFlag name="li" size="large" />
  <SuiFlag name="jp" size="big" />
  <SuiFlag name="gb" size="huge" />
  <SuiFlag name="un" size="massive" />
</template>`,EC={__name:"SizeDoc",setup(e){return(a,n)=>($(),D(R,{label:"Size",code:IC},{description:i(()=>[l(" A flag can vary in size ")]),example:i(()=>[t(d(Nt),{name:"de",size:"small"}),t(d(Nt),{name:"fr",size:"medium"}),t(d(Nt),{name:"li",size:"large"}),t(d(Nt),{name:"jp",size:"big"}),t(d(Nt),{name:"gb",size:"huge"}),t(d(Nt),{name:"un",size:"massive"})]),_:1}))}},RC=`<template>
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
</template>`,zC={__name:"AutosizingDoc",setup(e){return(a,n)=>($(),D(R,{label:"Autosizing",code:RC},{description:i(()=>[l(" If no specific size class is given, all flags are automatically sized according to the current element font-size ")]),example:i(()=>[t(d(fe),{size:"small"},{default:i(()=>[l(" Within a Header "),t(d(Nt),{name:"us"})]),_:1}),t(d(F),{as:"div",size:"large"},{default:i(()=>[l(" Within a Button "),t(d(Nt),{name:"eu"})]),_:1}),t(d(N),{size:"massive"},{default:i(()=>[l(" Within a Label "),t(d(Nt),{name:"pirate"})]),_:1})]),_:1}))}},FC={__name:"Flag",setup(e){const a=[{id:"size",label:"Size",category:"Types",component:EC},{id:"autosizing",label:"Autosizing",category:"Types",component:zC}];return(n,o)=>($(),D(_t,{title:"Flag",description:"A flag is used to represent a political state","component-docs":a}))}},PC=`<template>
  <SuiHeader as="h1">First Header</SuiHeader>
  <SuiHeader as="h2">Second Header</SuiHeader>
  <SuiHeader as="h3">Third Header</SuiHeader>
  <SuiHeader as="h4">Fourth Header</SuiHeader>
  <SuiHeader as="h5">Fifth Header</SuiHeader>
</template>`,MC={__name:"PageHeadersDoc",setup(e){return(a,n)=>($(),D(R,{label:"Page Headers",code:PC},{description:i(()=>[l(" Headers may be oriented to give the hierarchy of a section in the context of the page ")]),example:i(()=>[t(d(fe),{as:"h1"},{default:i(()=>[l("First Header")]),_:1}),t(d(fe),{as:"h2"},{default:i(()=>[l("Second Header")]),_:1}),t(d(fe),{as:"h3"},{default:i(()=>[l("Third Header")]),_:1}),t(d(fe),{as:"h4"},{default:i(()=>[l("Fourth Header")]),_:1}),t(d(fe),{as:"h5"},{default:i(()=>[l("Fifth Header")]),_:1})]),_:1}))}},VC=`<template>
  <SuiHeader size="huge">Huge Header</SuiHeader>
  <SuiHeader size="large">Large Header</SuiHeader>
  <SuiHeader size="medium">Medium Header</SuiHeader>
  <SuiHeader size="small">Small Header</SuiHeader>
  <SuiHeader size="tiny">Tiny Header</SuiHeader>
</template>`,HC={__name:"ContentHeadersDoc",setup(e){return(a,n)=>($(),D(R,{label:"Content Headers",code:VC},{description:i(()=>[l(" Headers may be oriented to give the importance of a section in the context of the content that surrounds it ")]),example:i(()=>[t(d(fe),{size:"huge"},{default:i(()=>[l("Huge Header")]),_:1}),t(d(fe),{size:"large"},{default:i(()=>[l("Large Header")]),_:1}),t(d(fe),{size:"medium"},{default:i(()=>[l("Medium Header")]),_:1}),t(d(fe),{size:"small"},{default:i(()=>[l("Small Header")]),_:1}),t(d(fe),{size:"tiny"},{default:i(()=>[l("Tiny Header")]),_:1})]),_:1}))}},NC=`<template>
  <SuiHeader icon>
    <SuiIcon name="settings" />
    <SuiHeaderContent>
      Account Settings
    </SuiHeaderContent>
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,OC={__name:"IconHeadersDoc",setup(e){return(a,n)=>($(),D(R,{label:"Icon Headers",code:NC},{description:i(()=>[l(" A header can be formatted to emphasize an icon ")]),example:i(()=>[t(d(fe),{icon:""},{default:i(()=>[t(d(W),{name:"settings"}),t(d(Wl),null,{default:i(()=>[l(" Account Settings ")]),_:1}),t(d(Aa),null,{default:i(()=>[l(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},jC=S("span",null,"$10.99",-1),GC=`<template>
  <SuiHeader sub>Price</SuiHeader>
  <span>$10.99</span>
</template>`,qC={__name:"SubHeadersDoc",setup(e){return(a,n)=>($(),D(R,{label:"Sub Headers",code:GC},{description:i(()=>[l(" Headers may be formatted to label smaller or de-emphasized content. ")]),example:i(()=>[t(d(fe),{sub:""},{default:i(()=>[l("Price")]),_:1}),jC]),_:1}))}},UC=`<template>
  <SuiHeader as="h2">
    <SuiImage src="/images/avatar/large/steve.jpg" avatar />
    Steve
  </SuiHeader>
</template>`,YC={__name:"ImageDoc",setup(e){return(a,n)=>($(),D(R,{label:"Image",code:UC},{description:i(()=>[l(" A header may contain an image ")]),example:i(()=>[t(d(fe),{as:"h2"},{default:i(()=>[t(d(ce),{src:"/vue-fomantic-ui/images/avatar/large/steve.jpg",avatar:""}),l(" Steve ")]),_:1})]),_:1}))}},JC=`<template>
  <SuiHeader as="h2">
    <SuiIcon name="plug" />
    <SuiHeaderContent>
      Uptime Guarantee
    </SuiHeaderContent>
  </SuiHeader>
</template>`,WC={__name:"IconDoc",setup(e){return(a,n)=>($(),D(R,{label:"Icon",code:JC},{description:i(()=>[l(" A header may contain an Icon ")]),example:i(()=>[t(d(fe),{as:"h2"},{default:i(()=>[t(d(W),{name:"plug"}),t(d(Wl),null,{default:i(()=>[l(" Uptime Guarantee ")]),_:1})]),_:1})]),_:1}))}},KC=`<template>
  <SuiHeader as="h2">
    Account Settings
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,XC={__name:"SubheaderDoc",setup(e){return(a,n)=>($(),D(R,{label:"Subheader",code:KC},{description:i(()=>[l(" Headers may contain subheaders ")]),example:i(()=>[t(d(fe),{as:"h2"},{default:i(()=>[l(" Account Settings "),t(d(Aa),null,{default:i(()=>[l(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},QC=`<template>
  <SuiHeader disabled>
    Disabled Header
  </SuiHeader>
</template>`,ZC={__name:"DisabledDoc",setup(e){return(a,n)=>($(),D(R,{label:"Disabled",code:QC},{description:i(()=>[l(" A header can show that it is inactive ")]),example:i(()=>[t(d(fe),{disabled:""},{default:i(()=>[l(" Disabled Header ")]),_:1})]),_:1}))}},eA=`<template>
  <SuiHeader as="h3" dividing>
    Dividing Header
  </SuiHeader>
</template>`,tA={__name:"DividingDoc",setup(e){return(a,n)=>($(),D(R,{label:"Dividing",code:eA},{description:i(()=>[l(" A header can be formatted to divide itself from the content below it ")]),example:i(()=>[t(d(fe),{as:"h3",dividing:""},{default:i(()=>[l(" Dividing Header ")]),_:1})]),_:1}))}},iA=`<template>
  <SuiHeader as="h3" block>
    Block Header
  </SuiHeader>
</template>`,aA={__name:"BlockDoc",setup(e){return(a,n)=>($(),D(R,{label:"Block",code:iA},{description:i(()=>[l(" A header can be formatted to appear inside a content block ")]),example:i(()=>[t(d(fe),{as:"h3",block:""},{default:i(()=>[l(" Block Header ")]),_:1})]),_:1}))}},lA=`<template>
  <SuiHeader as="h2" attached="top">
    Attached Header
  </SuiHeader>
  <SuiSegment attached>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </SuiSegment>
</template>`,nA={__name:"AttachedDoc",setup(e){return(a,n)=>($(),D(R,{label:"Attached",code:lA},{description:i(()=>[l(" A header can be attached to other content, like a segment ")]),example:i(()=>[t(d(fe),{as:"h2",attached:"top"},{default:i(()=>[l(" Attached Header ")]),_:1}),t(d(Le),{attached:""},{default:i(()=>[l(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),_:1})]),_:1}))}},oA=`<template>
  <SuiSegment clearing>
    <SuiHeader as="h3" floated="right">
      Go Forward
    </SuiHeader>
    <SuiHeader as="h3" floated="left">
      Go Back
    </SuiHeader>
  </SuiSegment>
</template>`,sA={__name:"FloatingDoc",setup(e){return(a,n)=>($(),D(R,{label:"Floating",code:oA},{description:i(()=>[l(" A header can sit to the left or right of other content ")]),example:i(()=>[t(d(Le),{clearing:""},{default:i(()=>[t(d(fe),{as:"h3",floated:"right"},{default:i(()=>[l(" Go Forward ")]),_:1}),t(d(fe),{as:"h3",floated:"left"},{default:i(()=>[l(" Go Back ")]),_:1})]),_:1})]),_:1}))}},rA=`<template>
  <SuiSegment>
    <SuiHeader as="h3" textAlign="right">Float Right</SuiHeader>
    <SuiHeader as="h3" textAlign="left">Float Left</SuiHeader>
    <SuiHeader as="h3" textAlign="justified">
      This text takes up the full width of the container
    </SuiHeader>
    <SuiHeader as="h3" textAlign="center">Centered</SuiHeader>
  </SuiSegment>
</template>`,uA={__name:"TextAlignmentDoc",setup(e){return(a,n)=>($(),D(R,{label:"Text Alignment",code:rA},{description:i(()=>[l(" A header can have its text aligned to a side ")]),example:i(()=>[t(d(Le),null,{default:i(()=>[t(d(fe),{as:"h3",textAlign:"right"},{default:i(()=>[l("Float Right")]),_:1}),t(d(fe),{as:"h3",textAlign:"left"},{default:i(()=>[l("Float Left")]),_:1}),t(d(fe),{as:"h3",textAlign:"justified"},{default:i(()=>[l(" This text takes up the full width of the container ")]),_:1}),t(d(fe),{as:"h3",textAlign:"center"},{default:i(()=>[l("Centered")]),_:1})]),_:1})]),_:1}))}},cA=`<template>
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
</template>`,dA={__name:"ColoredDoc",setup(e){return(a,n)=>($(),D(R,{label:"Colored",code:cA},{description:i(()=>[l(" A header can be formatted with different colors ")]),example:i(()=>[t(d(fe),{as:"h4",primary:""},{default:i(()=>[l("Primary")]),_:1}),t(d(fe),{as:"h4",secondary:""},{default:i(()=>[l("Secondary")]),_:1}),t(d(fe),{as:"h4",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(d(fe),{as:"h4",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(d(fe),{as:"h4",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(d(fe),{as:"h4",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(d(fe),{as:"h4",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(d(fe),{as:"h4",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(d(fe),{as:"h4",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(d(fe),{as:"h4",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(d(fe),{as:"h4",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(d(fe),{as:"h4",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(d(fe),{as:"h4",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(d(fe),{as:"h4",color:"grey"},{default:i(()=>[l("Grey")]),_:1})]),_:1}))}},mA=`<template>
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
</template>`,pA={__name:"InvertedDoc",setup(e){return(a,n)=>($(),D(R,{label:"Colored",code:mA},{description:i(()=>[l(" A header can have its colors inverted for contrast ")]),example:i(()=>[t(d(Le),{inverted:""},{default:i(()=>[t(d(fe),{as:"h4",inverted:"",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(d(fe),{as:"h4",inverted:"",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(d(fe),{as:"h4",inverted:"",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(d(fe),{as:"h4",inverted:"",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(d(fe),{as:"h4",inverted:"",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(d(fe),{as:"h4",inverted:"",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(d(fe),{as:"h4",inverted:"",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(d(fe),{as:"h4",inverted:"",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(d(fe),{as:"h4",inverted:"",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(d(fe),{as:"h4",inverted:"",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(d(fe),{as:"h4",inverted:"",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(d(fe),{as:"h4",inverted:"",color:"grey"},{default:i(()=>[l("Grey")]),_:1})]),_:1})]),_:1}))}},fA={__name:"Header",setup(e){const a=[{id:"page-headers",label:"Page Headers",category:"Types",component:MC},{id:"content-headers",label:"Content Headers",category:"Types",component:HC},{id:"icon-headers",label:"Icon Headers",category:"Types",component:OC},{id:"sub-headers",label:"Sub Headers",category:"Types",component:qC},{id:"image",label:"Image",category:"Content",component:YC},{id:"icon",label:"Icon",category:"Content",component:WC},{id:"subheader",label:"Subheader",category:"Content",component:XC},{id:"disabled",label:"Disabled",category:"States",component:ZC},{id:"dividing",label:"Dividing",category:"Variations",component:tA},{id:"block",label:"Block",category:"Variations",component:aA},{id:"attached",label:"Attached",category:"Variations",component:nA},{id:"floating",label:"Floating",category:"Variations",component:sA},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:uA},{id:"colored",label:"Colored",category:"Variations",component:dA},{id:"inverted",label:"Inverted",category:"Variations",component:pA}];return(n,o)=>($(),D(_t,{title:"Header",description:"A header provides a short summary of content","component-docs":a}))}},gA=`<template>
  <SuiIcon name="users" disabled />
</template>`,hA={__name:"DisabledDoc",setup(e){return(a,n)=>($(),D(R,{label:"Disabled",code:gA},{description:i(()=>[l(" An icon can show that it is disabled ")]),example:i(()=>[t(d(W),{name:"users",disabled:""})]),_:1}))}},_A=`<template>
  <SuiIcon name="spinner" loading />
  <SuiIcon name="notched circle" loading />
  <SuiIcon name="asterisk" loading />
</template>`,bA={__name:"LoadingDoc",setup(e){return(a,n)=>($(),D(R,{label:"Loading",code:_A},{description:i(()=>[l(" An icon can be used as a simple loader ")]),example:i(()=>[t(d(W),{name:"spinner",loading:""}),t(d(W),{name:"notched circle",loading:""}),t(d(W),{name:"asterisk",loading:""})]),_:1}))}},vA=S("br",null,null,-1),yA=`<template>
  <div>
    This icon
    <SuiIcon name="help" fitted />
    is fitted.
    <br />
    This icon
    <SuiIcon name="help" />
    is not fitted.
  </div>
</template>`,SA={__name:"FittedDoc",setup(e){return(a,n)=>($(),D(R,{label:"Fitted",code:yA},{description:i(()=>[l(" An icon can be fitted, without any space to the left or right of it. ")]),example:i(()=>[S("div",null,[l(" This icon "),t(d(W),{name:"help",fitted:""}),l(" is fitted. "),vA,l(" This icon "),t(d(W),{name:"help"}),l(" is not fitted. ")])]),_:1}))}},wA=`<template>
  <SuiIcon name="home" size="mini" />
  <SuiIcon name="home" size="tiny" />
  <SuiIcon name="home" size="small" />
  <SuiIcon name="home" />
  <SuiIcon name="home" size="large" />
  <SuiIcon name="home" size="big" />
  <SuiIcon name="home" size="huge" />
  <SuiIcon name="home" size="massive" />
</template>`,CA={__name:"SizeDoc",setup(e){return(a,n)=>($(),D(R,{label:"Size",code:wA},{description:i(()=>[l(" An icon can vary in size ")]),example:i(()=>[t(d(W),{name:"home",size:"mini"}),t(d(W),{name:"home",size:"tiny"}),t(d(W),{name:"home",size:"small"}),t(d(W),{name:"home"}),t(d(W),{name:"home",size:"large"}),t(d(W),{name:"home",size:"big"}),t(d(W),{name:"home",size:"huge"}),t(d(W),{name:"home",size:"massive"})]),_:1}))}},AA=`<template>
  <SuiIcon name="close" link />
  <SuiIcon name="help" link />
</template>`,kA={__name:"LinkDoc",setup(e){return(a,n)=>($(),D(R,{label:"Link",code:AA},{description:i(()=>[l(" An icon can be formatted as a link ")]),example:i(()=>[t(d(W),{name:"close",link:""}),t(d(W),{name:"help",link:""})]),_:1}))}},xA=`<template>
  <SuiIcon name="cloud" flipped="horizontally" />
  <SuiIcon name="cloud" flipped="vertically" />
</template>`,$A={__name:"FlippedDoc",setup(e){return(a,n)=>($(),D(R,{label:"Flipped",code:xA},{description:i(()=>[l(" An icon can be flipped ")]),example:i(()=>[t(d(W),{name:"cloud",flipped:"horizontally"}),t(d(W),{name:"cloud",flipped:"vertically"})]),_:1}))}},BA=`<template>
  <SuiIcon name="cloud" rotated="clockwise" />
  <SuiIcon name="cloud" rotated="counterclockwise" />
</template>`,TA={__name:"RotatedDoc",setup(e){return(a,n)=>($(),D(R,{label:"Rotated",code:BA},{description:i(()=>[l(" An icon can be rotated ")]),example:i(()=>[t(d(W),{name:"cloud",rotated:"clockwise"}),t(d(W),{name:"cloud",rotated:"counterclockwise"})]),_:1}))}},LA=`<template>
  <SuiIcon name="users" circular />
  <SuiIcon name="users" circular color="teal" />
  <SuiIcon name="users" circular inverted />
  <SuiIcon name="users" circular inverted color="teal" />
</template>`,DA={__name:"CircularDoc",setup(e){return(a,n)=>($(),D(R,{label:"Circular",code:LA},{description:i(()=>[l(" An icon can be formatted to appear circular ")]),example:i(()=>[t(d(W),{name:"users",circular:""}),t(d(W),{name:"users",circular:"",color:"teal"}),t(d(W),{name:"users",circular:"",inverted:""}),t(d(W),{name:"users",circular:"",inverted:"",color:"teal"})]),_:1}))}},IA=`<template>
  <SuiIcon name="users" circular colored color="red" />
  <SuiIcon name="users" circular colored color="green" />
  <SuiIcon name="users" circular colored color="blue" />
</template>`,EA={__name:"CircularColoredDoc",setup(e){return(a,n)=>($(),D(R,{label:"Circular Colored",code:IA},{description:i(()=>[l(" The circular color can appear in the same color as the icon itself ")]),example:i(()=>[t(d(W),{name:"users",circular:"",colored:"",color:"red"}),t(d(W),{name:"users",circular:"",colored:"",color:"green"}),t(d(W),{name:"users",circular:"",colored:"",color:"blue"})]),_:1}))}},RA=`<template>
  <SuiIcon name="users" bordered />
  <SuiIcon name="users" bordered color="teal" />
  <SuiIcon name="users" bordered inverted color="black" />
  <SuiIcon name="users" bordered inverted color="teal" />
</template>`,zA={__name:"BorderedDoc",setup(e){return(a,n)=>($(),D(R,{label:"Bordered",code:RA},{description:i(()=>[l(" An icon can be formatted to appear bordered ")]),example:i(()=>[t(d(W),{name:"users",bordered:""}),t(d(W),{name:"users",bordered:"",color:"teal"}),t(d(W),{name:"users",bordered:"",inverted:"",color:"black"}),t(d(W),{name:"users",bordered:"",inverted:"",color:"teal"})]),_:1}))}},FA=`<template>
  <SuiIcon name="users" bordered colored color="red" />
  <SuiIcon name="users" bordered colored color="green" />
  <SuiIcon name="users" bordered colored color="blue" />
</template>`,PA={__name:"BorderedColoredDoc",setup(e){return(a,n)=>($(),D(R,{label:"Bordered Colored",code:FA},{description:i(()=>[l(" The bordered color can appear in the same color as the icon itself ")]),example:i(()=>[t(d(W),{name:"users",bordered:"",colored:"",color:"red"}),t(d(W),{name:"users",bordered:"",colored:"",color:"green"}),t(d(W),{name:"users",bordered:"",colored:"",color:"blue"})]),_:1}))}},MA=`<template>
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
</template>`,VA={__name:"ColoredDoc",setup(e){return(a,n)=>($(),D(R,{label:"Colored",code:MA},{description:i(()=>[l(" An icon can be formatted with different colors ")]),example:i(()=>[t(d(W),{name:"users",primary:""}),t(d(W),{name:"users",secondary:""}),t(d(W),{name:"users",color:"red"}),t(d(W),{name:"users",color:"orange"}),t(d(W),{name:"users",color:"yellow"}),t(d(W),{name:"users",color:"olive"}),t(d(W),{name:"users",color:"green"}),t(d(W),{name:"users",color:"teal"}),t(d(W),{name:"users",color:"blue"}),t(d(W),{name:"users",color:"violet"}),t(d(W),{name:"users",color:"purple"}),t(d(W),{name:"users",color:"pink"}),t(d(W),{name:"users",color:"brown"}),t(d(W),{name:"users",color:"grey"}),t(d(W),{name:"users",color:"black"})]),_:1}))}},HA=`<template>
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
</template>`,NA={__name:"InvertedDoc",setup(e){return(a,n)=>($(),D(R,{label:"Inverted",code:HA},{description:i(()=>[l(" An icon can have its colors inverted for contrast ")]),example:i(()=>[t(d(W),{name:"users",inverted:""}),t(d(W),{name:"users",inverted:"",primary:""}),t(d(W),{name:"users",inverted:"",secondary:""}),t(d(W),{name:"users",inverted:"",color:"red"}),t(d(W),{name:"users",inverted:"",color:"orange"}),t(d(W),{name:"users",inverted:"",color:"yellow"}),t(d(W),{name:"users",inverted:"",color:"olive"}),t(d(W),{name:"users",inverted:"",color:"green"}),t(d(W),{name:"users",inverted:"",color:"teal"}),t(d(W),{name:"users",inverted:"",color:"blue"}),t(d(W),{name:"users",inverted:"",color:"violet"}),t(d(W),{name:"users",inverted:"",color:"purple"}),t(d(W),{name:"users",inverted:"",color:"pink"}),t(d(W),{name:"users",inverted:"",color:"brown"}),t(d(W),{name:"users",inverted:"",color:"grey"})]),_:1}))}},OA=`<template>
  <SuiIconGroup size="huge">
    <SuiIcon name="circle outline" size="big" />
    <SuiIcon name="user" />
  </SuiIconGroup>
  <SuiIconGroup size="huge">
    <SuiIcon name="dont" size="big" color="red" />
    <SuiIcon name="user" color="black" />
  </SuiIconGroup>
</template>`,jA={__name:"IconsDoc",setup(e){return(a,n)=>($(),D(R,{label:"Icons",code:OA},{description:i(()=>[l(" Several icons can be used together as a group ")]),example:i(()=>[t(d(yi),{size:"huge"},{default:i(()=>[t(d(W),{name:"circle outline",size:"big"}),t(d(W),{name:"user"})]),_:1}),t(d(yi),{size:"huge"},{default:i(()=>[t(d(W),{name:"dont",size:"big",color:"red"}),t(d(W),{name:"user",color:"black"})]),_:1})]),_:1}))}},GA=`<template>
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
</template>`,qA={__name:"CornerIconDoc",setup(e){return(a,n)=>($(),D(R,{label:"Corner Icon",code:GA},{description:i(()=>[l(" A group of icons can display a smaller corner icon ")]),example:i(()=>[t(d(yi),{size:"huge"},{default:i(()=>[t(d(W),{name:"puzzle"}),t(d(W),{name:"add",corner:"top left"})]),_:1}),t(d(yi),{size:"huge"},{default:i(()=>[t(d(W),{name:"puzzle"}),t(d(W),{name:"add",corner:"top right"})]),_:1}),t(d(yi),{size:"huge"},{default:i(()=>[t(d(W),{name:"puzzle"}),t(d(W),{name:"add",corner:"bottom left"})]),_:1}),t(d(yi),{size:"huge"},{default:i(()=>[t(d(W),{name:"puzzle"}),t(d(W),{name:"add",corner:"bottom right"})]),_:1})]),_:1}))}},UA={__name:"Icon",setup(e){const a=[{id:"disabled",label:"Disabled",category:"States",component:hA},{id:"loading",label:"Loading",category:"States",component:bA},{id:"fitted",label:"Fitted",category:"Variations",component:SA},{id:"size",label:"Size",category:"Variations",component:CA},{id:"link",label:"Link",category:"Variations",component:kA},{id:"flipped",label:"Flipped",category:"Variations",component:$A},{id:"rotated",label:"Rotated",category:"Variations",component:TA},{id:"circular",label:"Circular",category:"Variations",component:DA},{id:"circular-colored",label:"Circular Colored",category:"Variations",component:EA},{id:"bordered",label:"Bordered",category:"Variations",component:zA},{id:"bordered-colored",label:"Bordered Colored",category:"Variations",component:PA},{id:"colored",label:"Colored",category:"Variations",component:VA},{id:"inverted",label:"Inverted",category:"Variations",component:NA},{id:"icons",label:"Icons",category:"Groups",component:jA},{id:"corner-icon",label:"Corner Icon",category:"Groups",component:qA}];return(n,o)=>($(),D(_t,{title:"Icon",description:"An icon is a glyph used to represent something else","component-docs":a}))}},YA=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" />
</template>`,JA={__name:"ImageDoc",setup(e){return(a,n)=>($(),D(R,{label:"Image",code:YA},{description:i(()=>[l(" An image ")]),example:i(()=>[t(d(ce),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}))}},WA=`<template>
  <SuiImage
    as="a"
    size="medium"
    href="https://google.com"
    src="/images/wireframe/image-text.png"
    target="_blank"
  />
</template>`,KA={__name:"ImageLinkDoc",setup(e){return(a,n)=>($(),D(R,{label:"Image Link",code:WA},{description:i(()=>[l(" An image can be formatted to link to other content ")]),example:i(()=>[t(d(ce),{as:"a",size:"medium",href:"https://google.com",src:"/vue-fomantic-ui/images/wireframe/image-text.png",target:"_blank"})]),_:1}))}},XA=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" hidden />
</template>`,QA={__name:"HiddenDoc",setup(e){return(a,n)=>($(),D(R,{label:"Hidden",code:XA},{description:i(()=>[l(" An image can be hidden ")]),example:i(()=>[t(d(ce),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png",hidden:""})]),_:1}))}},ZA=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" disabled />
</template>`,e0={__name:"DisabledDoc",setup(e){return(a,n)=>($(),D(R,{label:"Disabled",code:ZA},{description:i(()=>[l(" An image can show that it is disabled and cannot be selected ")]),example:i(()=>[t(d(ce),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png",disabled:""})]),_:1}))}},t0=S("span",null,"Username",-1),i0=`<template>
  <SuiImage src="/images/wireframe/square-image.png" avatar />
  <span>Username</span>
</template>`,a0={__name:"AvatarDoc",setup(e){return(a,n)=>($(),D(R,{label:"Avatar",code:i0},{description:i(()=>[l(" An image may be formatted to appear inline with text as an avatar ")]),example:i(()=>[t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/square-image.png",avatar:""}),t0]),_:1}))}},l0=`<template>
  <SuiImage size="medium" src="/images/wireframe/white-image.png" bordered />
</template>`,n0={__name:"BorderedDoc",setup(e){return(a,n)=>($(),D(R,{label:"Bordered",code:l0},{description:i(()=>[l(" An image may include a border to emphasize the edges of white or transparent content ")]),example:i(()=>[t(d(ce),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/white-image.png",bordered:""})]),_:1}))}},o0=`<template>
  <SuiImage src="/images/wireframe/image.png" fluid />
</template>`,s0={__name:"FluidDoc",setup(e){return(a,n)=>($(),D(R,{label:"Fluid",code:o0},{description:i(()=>[l(" An image can take up the width of its container ")]),example:i(()=>[t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/image.png",fluid:""})]),_:1}))}},r0=`<template>
  <SuiImage src="/images/wireframe/image.png" rounded />
</template>`,u0={__name:"RoundedDoc",setup(e){return(a,n)=>($(),D(R,{label:"Rounded",code:r0},{description:i(()=>[l(" An image may appear rounded ")]),example:i(()=>[t(d(ce),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png",rounded:""})]),_:1}))}},c0=`<template>
  <SuiImage src="/images/wireframe/square-image.png" circular />
</template>`,d0={__name:"CircularDoc",setup(e){return(a,n)=>($(),D(R,{label:"Circular",code:c0},{description:i(()=>[l(" An image may appear circular ")]),example:i(()=>[t(d(ce),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/square-image.png",circular:""})]),_:1}))}},m0=S("span",null,"Top Aligned",-1),p0=S("span",null,"Middle Aligned",-1),f0=S("span",null,"Bottom Aligned",-1),g0=`<template>
  <SuiImage verticalAlign="top" size="tiny" src="/images/wireframe/image.png" />
  <span>Top Aligned</span>
  <SuiDivider />
  <SuiImage verticalAlign="middle" size="tiny" src="/images/wireframe/image.png" />
  <span>Middle Aligned</span>
  <SuiDivider />
  <SuiImage verticalAlign="bottom" size="tiny" src="/images/wireframe/image.png" />
  <span>Bottom Aligned</span>
</template>`,h0={__name:"VerticallyAlignedDoc",setup(e){return(a,n)=>($(),D(R,{label:"Vertically Aligned",code:g0},{description:i(()=>[l(" An image can specify its vertical alignment ")]),example:i(()=>[t(d(ce),{verticalAlign:"top",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),m0,t(d(Ve)),t(d(ce),{verticalAlign:"middle",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),p0,t(d(Ve)),t(d(ce),{verticalAlign:"bottom",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),f0]),_:1}))}},_0=S("p",null," Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ",-1),b0=S("p",null," Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. ",-1),v0=S("p",null," Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id. ",-1),y0=`<template>
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
</template>`,S0={__name:"CenteredDoc",setup(e){return(a,n)=>($(),D(R,{label:"Centered",code:y0},{description:i(()=>[l(" An image can appear centered in a content block ")]),example:i(()=>[t(d(Le),null,{default:i(()=>[t(d(ce),{centered:"",size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png"}),_0,b0,t(d(ce),{centered:"",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),v0]),_:1})]),_:1}))}},w0=`<template>
  <SuiSegment>
    <p>
      Te eum doming eirmod, nominati pertinacia <SuiImage spaced size="mini" src="/images/wireframe/image.png" /> argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
    </p>
  </SuiSegment>
</template>`,C0={__name:"SpacedDoc",setup(e){return(a,n)=>($(),D(R,{label:"Spaced",code:w0},{description:i(()=>[l(" An image can appear centered in a content block ")]),example:i(()=>[t(d(Le),null,{default:i(()=>[S("p",null,[l(" Te eum doming eirmod, nominati pertinacia "),t(d(ce),{spaced:"",size:"mini",src:"/vue-fomantic-ui/images/wireframe/image.png"}),l(" argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ")])]),_:1})]),_:1}))}},A0=S("p",null," Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ",-1),k0=S("p",null," Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. ",-1),x0=S("p",null," Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id. ",-1),$0=`<template>
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
</template>`,B0={__name:"FloatedDoc",setup(e){return(a,n)=>($(),D(R,{label:"Floated",code:$0},{description:i(()=>[l(" An image can sit to the left or right of other content ")]),example:i(()=>[t(d(Le),null,{default:i(()=>[t(d(ce),{floated:"left",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),A0,t(d(ce),{floated:"right",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),k0,x0]),_:1})]),_:1}))}},T0=`<template>
  <SuiImage size="mini" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="tiny" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="small" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="medium" src="/images/wireframe/image.png" />
</template>`,L0={__name:"SizeDoc",setup(e){return(a,n)=>($(),D(R,{label:"Size",code:T0},{description:i(()=>[l(" An image may appear at different sizes ")]),example:i(()=>[t(d(ce),{size:"mini",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(d(Ve),{hidden:""}),t(d(ce),{size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(d(Ve),{hidden:""}),t(d(ce),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(d(Ve),{hidden:""}),t(d(ce),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}))}},D0=`<template>
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
</template>`,I0={__name:"GroupSizeDoc",setup(e){return(a,n)=>($(),D(R,{label:"Size",code:D0},{description:i(()=>[l(" A group of images can be formatted to have the same size. ")]),example:i(()=>[t(d(Kl),{size:"tiny"},{default:i(()=>[t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(d(Ve),{hidden:""}),t(d(Kl),{size:"small"},{default:i(()=>[t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1}))}},E0={__name:"Image",setup(e){const a=[{id:"image",label:"Image",category:"Types",component:JA},{id:"image-link",label:"Image Link",category:"Types",component:KA},{id:"hidden",label:"Hidden",category:"States",component:QA},{id:"disabled",label:"Disabled",category:"States",component:e0},{id:"avatar",label:"Avatar",category:"Variations",component:a0},{id:"bordered",label:"Bordered",category:"Variations",component:n0},{id:"fluid",label:"Fluid",category:"Variations",component:s0},{id:"rounded",label:"Rounded",category:"Variations",component:u0},{id:"circular",label:"Circular",category:"Variations",component:d0},{id:"vertically-aligned",label:"Vertically Aligned",category:"Variations",component:h0},{id:"centered",label:"Centered",category:"Variations",component:S0},{id:"spaced",label:"Spaced",category:"Variations",component:C0},{id:"floated",label:"Floated",category:"Variations",component:B0},{id:"size",label:"Size",category:"Variations",component:L0},{id:"group-size",label:"Size",category:"Groups",component:I0}];return(n,o)=>($(),D(_t,{title:"Image",description:"An image is a graphic representation of something","component-docs":a}))}},R0=`<template>
  <SuiInput placeholder="Search..." />
</template>`,z0={__name:"InputDoc",setup(e){return(a,n)=>($(),D(R,{label:"Input",code:R0},{description:i(()=>[l(" A standard input ")]),example:i(()=>[t(d(Ze),{placeholder:"Search..."})]),_:1}))}},F0=`<template>
  <SuiInput focus placeholder="Search..." />
</template>`,P0={__name:"FocusDoc",setup(e){return(a,n)=>($(),D(R,{label:"Focus",code:F0},{description:i(()=>[l(" An input field can show a user is currently interacting with it ")]),example:i(()=>[t(d(Ze),{focus:"",placeholder:"Search..."})]),_:1}))}},M0=`<template>
  <SuiInput loading icon="user" placeholder="Search..." />
  <SuiInput loading icon="user" iconPosition="left" placeholder="Search..." />
</template>`,V0={__name:"LoadingDoc",setup(e){return(a,n)=>($(),D(R,{label:"Loading",code:M0},{description:i(()=>[l(" An icon input field can show that it is currently loading data ")]),example:i(()=>[t(d(Ze),{loading:"",icon:"user",placeholder:"Search..."}),t(d(Ze),{loading:"",icon:"user",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},H0=`<template>
  <SuiInput disabled placeholder="Search..." />
</template>`,N0={__name:"DisabledDoc",setup(e){return(a,n)=>($(),D(R,{label:"Disabled",code:H0},{description:i(()=>[l(" An input field can show that it is disabled ")]),example:i(()=>[t(d(Ze),{disabled:"",placeholder:"Search..."})]),_:1}))}},O0=`<template>
  <SuiInput error placeholder="Search..." />
</template>`,j0={__name:"ErrorDoc",setup(e){return(a,n)=>($(),D(R,{label:"Error",code:O0},{description:i(()=>[l(" An input field can show the data contains errors ")]),example:i(()=>[t(d(Ze),{error:"",placeholder:"Search..."})]),_:1}))}},G0=`<template>
  <SuiInput icon="search" placeholder="Search..." />
  <SuiInput icon="users" iconPosition="left" placeholder="Search..." />
</template>`,q0={__name:"IconDoc",setup(e){return(a,n)=>($(),D(R,{label:"Icon",code:G0},{description:i(()=>[l(" An input can be formatted with an icon ")]),example:i(()=>[t(d(Ze),{icon:"search",placeholder:"Search..."}),t(d(Ze),{icon:"users",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},U0=`<template>
  <SuiInput label="http://" placeholder="mysite.com" />
</template>`,Y0={__name:"LabeledDoc",setup(e){return(a,n)=>($(),D(R,{label:"Labeled",code:U0},{description:i(()=>[l(" An input can be formatted with a label ")]),example:i(()=>[t(d(Ze),{label:"http://",placeholder:"mysite.com"})]),_:1}))}},J0=`<template>
  <SuiInput action="Search" />
</template>`,W0={__name:"ActionDoc",setup(e){return(a,n)=>($(),D(R,{label:"Action",code:J0},{description:i(()=>[l(" An input can be formatted to alert the user to an action they may perform ")]),example:i(()=>[t(d(Ze),{action:"Search"})]),_:1}))}},K0=`<template>
  <SuiInput transparent icon="search" placeholder="Search..." />
</template>`,X0={__name:"TransparentDoc",setup(e){return(a,n)=>($(),D(R,{label:"Transparent",code:K0},{description:i(()=>[l(" A transparent input has no background ")]),example:i(()=>[t(d(Ze),{transparent:"",icon:"search",placeholder:"Search..."})]),_:1}))}},Q0=`<template>
  <SuiSegment inverted>
    <SuiInput inverted placeholder="Search..." />
  </SuiSegment>
</template>`,Z0={__name:"InvertedDoc",setup(e){return(a,n)=>{const o=y("SuiSegment");return $(),D(R,{label:"Inverted",code:Q0},{description:i(()=>[l(" An input can be formatted to appear on dark backgrounds ")]),example:i(()=>[t(o,{inverted:""},{default:i(()=>[t(d(Ze),{inverted:"",placeholder:"Search..."})]),_:1})]),_:1})}}},ek=`<template>
  <SuiInput fluid icon="search" placeholder="Search..." />
</template>`,tk={__name:"FluidDoc",setup(e){return(a,n)=>($(),D(R,{label:"Fluid",code:ek},{description:i(()=>[l(" An input can take the size of its container ")]),example:i(()=>[t(d(Ze),{fluid:"",icon:"search",placeholder:"Search..."})]),_:1}))}},ik=`<template>
  <SuiInput icon="search" placeholder="Search mini..." size="mini" />
  <SuiInput icon="search" placeholder="Search small..." size="small" />
  <SuiInput icon="search" placeholder="Search large..." size="large" />
  <SuiInput icon="search" placeholder="Search big..." size="big" />
  <SuiInput icon="search" placeholder="Search huge..." size="huge" />
  <SuiInput icon="search" placeholder="Search massive..." size="massive" />
</template>`,ak={__name:"SizeDoc",setup(e){return(a,n)=>($(),D(R,{label:"Size",code:ik},{description:i(()=>[l(" An input can vary in size ")]),example:i(()=>[t(d(Ze),{icon:"search",placeholder:"Search mini...",size:"mini"}),t(d(Ze),{icon:"search",placeholder:"Search small...",size:"small"}),t(d(Ze),{icon:"search",placeholder:"Search large...",size:"large"}),t(d(Ze),{icon:"search",placeholder:"Search big...",size:"big"}),t(d(Ze),{icon:"search",placeholder:"Search huge...",size:"huge"}),t(d(Ze),{icon:"search",placeholder:"Search massive...",size:"massive"})]),_:1}))}},lk={__name:"Input",setup(e){const a=[{id:"input",label:"Input",category:"Types",component:z0},{id:"focus",label:"Focus",category:"States",component:P0},{id:"loading",label:"Loading",category:"States",component:V0},{id:"disabled",label:"Disabled",category:"States",component:N0},{id:"error",label:"Error",category:"States",component:j0},{id:"icon",label:"Icon",category:"Variations",component:q0},{id:"labeled",label:"Labeled",category:"Variations",component:Y0},{id:"action",label:"Action",category:"Variations",component:W0},{id:"transparent",label:"Transparent",category:"Variations",component:X0},{id:"inverted",label:"Inverted",category:"Variations",component:Z0},{id:"fluid",label:"Fluid",category:"Variations",component:tk},{id:"size",label:"Size",category:"Variations",component:ak}];return(n,o)=>($(),D(_t,{title:"Input",description:"An input is a field used to elicit a response from a user","component-docs":a}))}},nk=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
</template>`,ok={__name:"LabelDoc",setup(e){return(a,n)=>($(),D(R,{label:"Label",code:nk},{description:i(()=>[l(" A label ")]),example:i(()=>[t(d(N),null,{default:i(()=>[t(d(W),{name:"mail"}),l(" 23 ")]),_:1})]),_:1}))}},Yo="/vue-fomantic-ui/images/avatar/small/joe.jpg",cp="/vue-fomantic-ui/images/avatar/small/veronika.jpg",ni="/vue-fomantic-ui/images/avatar/small/elliot.jpg",sk=S("img",{src:Yo},null,-1),rk=S("img",{src:cp},null,-1),uk=S("img",{src:ni},null,-1),ck=`<template>
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
</template>`,dk={__name:"ImageDoc",setup(e){return(a,n)=>($(),D(R,{label:"Image",code:ck},{description:i(()=>[l(" A label can be formatted to emphasize an image ")]),example:i(()=>[t(d(N),{as:"a",image:""},{default:i(()=>[sk,l(" Joe ")]),_:1}),t(d(N),{as:"a",image:"",color:"blue"},{default:i(()=>[rk,l(" Veronika "),t(d(Yi),null,{default:i(()=>[l("Friend")]),_:1})]),_:1}),t(d(N),{as:"a",image:""},{default:i(()=>[uk,l(" Elliot "),t(d(W),{name:"delete"})]),_:1})]),_:1}))}},mk=S("input",{type:"text",placeholder:"First Name"},null,-1),pk=S("input",{type:"text"},null,-1),fk=S("input",{type:"text",placeholder:"Username"},null,-1),gk=S("input",{type:"password"},null,-1),hk=`<template>
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
</template>`,_k={__name:"PointingDoc",setup(e){return(a,n)=>($(),D(R,{label:"Pointing",code:hk},{description:i(()=>[l(" A label can point to content next to it ")]),example:i(()=>[t(d(Et),{fluid:""},{default:i(()=>[t(d(at),null,{default:i(()=>[mk,t(d(N),{pointing:""},{default:i(()=>[l("Please enter a value")]),_:1})]),_:1}),t(d(Ve)),t(d(at),null,{default:i(()=>[t(d(N),{pointing:"below"},{default:i(()=>[l("Please enter a value")]),_:1}),pk]),_:1}),t(d(Ve)),t(d(at),{inline:""},{default:i(()=>[fk,t(d(N),{pointing:"left",color:"red",basic:""},{default:i(()=>[l("That name is taken!")]),_:1})]),_:1}),t(d(Ve)),t(d(at),{inline:""},{default:i(()=>[t(d(N),{pointing:"right",color:"red",basic:""},{default:i(()=>[l("Your password must be 6 characters or more")]),_:1}),gk]),_:1})]),_:1})]),_:1}))}},bk=`<template>
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
</template>`,vk={__name:"CornerDoc",setup(e){return(a,n)=>($(),D(R,{label:"Corner",code:bk},{description:i(()=>[l(" A label can position itself in the corner of an element ")]),example:i(()=>[t(d(ka),{columns:2},{default:i(()=>[t(d(St),null,{default:i(()=>[t(d(ce),{label:{as:"a",corner:"left",icon:"heart"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(d(St),null,{default:i(()=>[t(d(ce),{label:{as:"a",color:"red",corner:"right",icon:"save"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1})]),_:1}))}},yk=`<template>
  <SuiLabel as="a" tag>New</SuiLabel>
  <SuiLabel as="a" tag color="red">Upcoming</SuiLabel>
  <SuiLabel as="a" tag color="teal">Featured</SuiLabel>
</template>`,Sk={__name:"TagDoc",setup(e){return(a,n)=>($(),D(R,{label:"Tag",code:yk},{description:i(()=>[l(" A label can appear as a tag ")]),example:i(()=>[t(d(N),{as:"a",tag:""},{default:i(()=>[l("New")]),_:1}),t(d(N),{as:"a",tag:"",color:"red"},{default:i(()=>[l("Upcoming")]),_:1}),t(d(N),{as:"a",tag:"",color:"teal"},{default:i(()=>[l("Featured")]),_:1})]),_:1}))}},wk=S("span",null,"Account Details",-1),Ck=S("span",null,"User Reviews",-1),Ak=S("span",null,"Technical Specifications",-1),kk=S("span",null,"User Reviews",-1),xk=`<template>
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
</template>`,$k={__name:"RibbonDoc",setup(e){return(a,n)=>($(),D(R,{label:"Ribbon",code:xk},{description:i(()=>[l(" A label can appear as a ribbon attaching itself to an element. ")]),example:i(()=>[t(d(ka),{columns:2},{default:i(()=>[t(d(St),null,{default:i(()=>[t(d(Le),{raised:""},{default:i(()=>[t(d(N),{as:"a",ribbon:"",color:"red"},{default:i(()=>[l("Overview")]),_:1}),wk,t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),t(d(N),{as:"a",ribbon:"",color:"blue"},{default:i(()=>[l("Community")]),_:1}),Ck,t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(d(St),null,{default:i(()=>[t(d(Le),{raised:""},{default:i(()=>[t(d(N),{as:"a",ribbon:"right",color:"orange"},{default:i(()=>[l("Specs")]),_:1}),Ak,t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),t(d(N),{as:"a",ribbon:"right",color:"teal"},{default:i(()=>[l("Reviews")]),_:1}),kk,t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1}))}},Bk=`<template>
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
</template>`,Tk={__name:"AttachedDoc",setup(e){return(a,n)=>($(),D(R,{label:"Attached",code:Bk},{description:i(()=>[l(" A label can attach to a content segment ")]),example:i(()=>[t(d(ka),{columns:3},{default:i(()=>[t(d(Zl),null,{default:i(()=>[t(d(St),null,{default:i(()=>[t(d(Le),{padded:""},{default:i(()=>[t(d(N),{attached:"top"},{default:i(()=>[l("HTML")]),_:1}),t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(d(St),null,{default:i(()=>[t(d(Le),{padded:""},{default:i(()=>[t(d(N),{attached:"bottom"},{default:i(()=>[l("CSS")]),_:1}),t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(d(St),null,{default:i(()=>[t(d(Le),{padded:""},{default:i(()=>[t(d(N),{attached:"top right"},{default:i(()=>[l("Code")]),_:1}),t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1}),t(d(Zl),null,{default:i(()=>[t(d(St),null,{default:i(()=>[t(d(Le),{padded:""},{default:i(()=>[t(d(N),{attached:"top left"},{default:i(()=>[l("View")]),_:1}),t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(d(St),null,{default:i(()=>[t(d(Le),{padded:""},{default:i(()=>[t(d(N),{attached:"bottom left"},{default:i(()=>[l("User View")]),_:1}),t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(d(St),null,{default:i(()=>[t(d(Le),{padded:""},{default:i(()=>[t(d(N),{attached:"bottom right"},{default:i(()=>[l("Admin View")]),_:1}),t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},Lk=`<template>
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
</template>`,Dk={__name:"HorizontalDoc",setup(e){return(a,n)=>($(),D(R,{label:"Horizontal",code:Lk},{description:i(()=>[l(" A horizontal label is formatted to label content along-side it horizontally ")]),example:i(()=>[t(d(Eo),{divided:"",selection:""},{default:i(()=>[t(d(na),null,{default:i(()=>[t(d(N),{color:"red",horizontal:""},{default:i(()=>[l("Fruit")]),_:1}),l(" Kumquats ")]),_:1}),t(d(na),null,{default:i(()=>[t(d(N),{color:"purple",horizontal:""},{default:i(()=>[l("Candy")]),_:1}),l(" Ice Cream ")]),_:1}),t(d(na),null,{default:i(()=>[t(d(N),{color:"red",horizontal:""},{default:i(()=>[l("Fruit")]),_:1}),l(" Orange ")]),_:1}),t(d(na),null,{default:i(()=>[t(d(N),{horizontal:""},{default:i(()=>[l("Dog")]),_:1}),l(" Poodle ")]),_:1})]),_:1})]),_:1}))}},Ik=`<template>
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
</template>`,Ek={__name:"FloatingDoc",setup(e){return(a,n)=>($(),D(R,{label:"Floating",code:Ik},{description:i(()=>[l(" A label can float above or below another element ")]),example:i(()=>[t(d(Ro),{compact:""},{default:i(()=>[t(d(en),null,{default:i(()=>[t(d(W),{name:"mail"}),l(" Messages "),t(d(N),{floating:"",color:"red"},{default:i(()=>[l("22")]),_:1})]),_:1}),t(d(en),null,{default:i(()=>[t(d(W),{name:"users"}),l(" Friends "),t(d(N),{floating:"",color:"teal"},{default:i(()=>[l("22")]),_:1})]),_:1})]),_:1})]),_:1}))}},Rk=`<template>
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
</template>`,zk={__name:"InvertedDoc",setup(e){return(a,n)=>($(),D(R,{label:"Inverted",code:Rk},{description:i(()=>[l(" All Variants of Label can be inverted ")]),example:i(()=>[t(d(Le),{inverted:""},{default:i(()=>[t(d(N),{as:"a",inverted:"",primary:""},{default:i(()=>[l("Primary")]),_:1}),t(d(N),{as:"a",inverted:"",secondary:""},{default:i(()=>[l("Secondary")]),_:1}),t(d(N),{as:"a",inverted:"",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(d(N),{as:"a",inverted:"",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(d(N),{as:"a",inverted:"",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(d(N),{as:"a",basic:"",inverted:"",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(d(N),{as:"a",basic:"",inverted:"",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(d(N),{as:"a",basic:"",inverted:"",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(d(N),{as:"a",basic:"",inverted:"",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(d(N),{as:"a",basic:"",inverted:"",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(d(N),{as:"a",tag:"",inverted:"",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(d(N),{as:"a",tag:"",inverted:"",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(d(N),{as:"a",tag:"",inverted:"",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(d(N),{as:"a",tag:"",inverted:"",color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(d(N),{as:"a",tag:"",inverted:"",color:"black"},{default:i(()=>[l("Black")]),_:1})]),_:1})]),_:1}))}},Fk=`<template>
  <SuiLabel>
    Dogs
    <SuiLabelDetail>214</SuiLabelDetail>
  </SuiLabel>
</template>`,Pk={__name:"DetailDoc",setup(e){return(a,n)=>($(),D(R,{label:"Detail",code:Fk},{description:i(()=>[l(" A label can contain a detail ")]),example:i(()=>[t(d(N),null,{default:i(()=>[l(" Dogs "),t(d(Yi),null,{default:i(()=>[l("214")]),_:1})]),_:1})]),_:1}))}},Mk=`<template>
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
</template>`,Vk={__name:"IconDoc",setup(e){return(a,n)=>($(),D(R,{label:"Icon",code:Mk},{description:i(()=>[l(" A label can include an icon ")]),example:i(()=>[t(d(N),null,{default:i(()=>[t(d(W),{name:"mail"}),l(" Mail ")]),_:1}),t(d(N),null,{default:i(()=>[t(d(W),{name:"checkmark"}),l(" Test Passed ")]),_:1}),t(d(N),{icon:"dog"}),t(d(N),{icon:"cat"})]),_:1}))}},Hk=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
    <SuiLabelContent>View Mail</SuiLabelContent>
  </SuiLabel>
</template>`,Nk={__name:"LinkDoc",setup(e){return(a,n)=>($(),D(R,{label:"Link",code:Hk},{description:i(()=>[l(" A label can be a link or contain an item that links ")]),example:i(()=>[t(d(N),{as:"a"},{default:i(()=>[t(d(W),{name:"mail"}),l(" 23 ")]),_:1}),t(d(N),null,{default:i(()=>[t(d(W),{name:"mail"}),l(" 23 "),t(d(Yi),null,{default:i(()=>[l("View Mail")]),_:1})]),_:1})]),_:1}))}},Ok=`<template>
  <SuiLabel disabled>Disabled Label</SuiLabel>
</template>`,jk={__name:"DisabledDoc",setup(e){return(a,n)=>($(),D(R,{label:"Disabled",code:Ok},{description:i(()=>[l(" A label can show it is currently unable to be interacted with ")]),example:i(()=>[t(d(N),{disabled:""},{default:i(()=>[l("Disabled Label")]),_:1})]),_:1}))}},Gk=`<template>
  <SuiLabel fluid>Fits container</SuiLabel>
</template>`,qk={__name:"FluidDoc",setup(e){return(a,n)=>($(),D(R,{label:"Fluid",code:Gk},{description:i(()=>[l(" A label can take the width of its container ")]),example:i(()=>[t(d(N),{fluid:""},{default:i(()=>[l("Fits container")]),_:1})]),_:1}))}},Uk=`<template>
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
</template>`,Yk={__name:"CircularDoc",setup(e){return(a,n)=>($(),D(R,{label:"Circular",code:Uk},{description:i(()=>[l(" A label can be circular ")]),example:i(()=>[t(d(N),{circular:"",color:"red"},{default:i(()=>[l("2")]),_:1}),t(d(N),{circular:"",color:"orange"},{default:i(()=>[l("2")]),_:1}),t(d(N),{circular:"",color:"yellow"},{default:i(()=>[l("2")]),_:1}),t(d(N),{circular:"",color:"olive"},{default:i(()=>[l("2")]),_:1}),t(d(N),{circular:"",color:"green"},{default:i(()=>[l("2")]),_:1}),t(d(N),{circular:"",color:"teal"},{default:i(()=>[l("2")]),_:1}),t(d(N),{circular:"",color:"blue"},{default:i(()=>[l("2")]),_:1}),t(d(N),{circular:"",color:"violet"},{default:i(()=>[l("2")]),_:1}),t(d(N),{circular:"",color:"purple"},{default:i(()=>[l("2")]),_:1}),t(d(N),{circular:"",color:"pink"},{default:i(()=>[l("2")]),_:1}),t(d(N),{circular:"",color:"brown"},{default:i(()=>[l("2")]),_:1}),t(d(N),{circular:"",color:"grey"},{default:i(()=>[l("2")]),_:1}),t(d(N),{circular:"",color:"black"},{default:i(()=>[l("2")]),_:1})]),_:1}))}},Jk=S("img",{src:ni},null,-1),Wk=`<template>
  <SuiLabel as="a" basic>Basic</SuiLabel>
  <SuiLabel as="a" basic pointing>Pointing</SuiLabel>
  <SuiLabel as="a" basic image>
    <img src="/images/avatar/small/elliot.jpg" />
    Elliot
  </SuiLabel>
  <SuiLabel as="a" basic pointing color="red">Red Pointing</SuiLabel>
  <SuiLabel as="a" basic color="blue">Blue</SuiLabel>
</template>`,Kk={__name:"BasicDoc",setup(e){return(a,n)=>($(),D(R,{label:"Basic",code:Wk},{description:i(()=>[l(" A label can reduce its complexity ")]),example:i(()=>[t(d(N),{as:"a",basic:""},{default:i(()=>[l("Basic")]),_:1}),t(d(N),{as:"a",basic:"",pointing:""},{default:i(()=>[l("Pointing")]),_:1}),t(d(N),{as:"a",basic:"",image:""},{default:i(()=>[Jk,l(" Elliot ")]),_:1}),t(d(N),{as:"a",basic:"",pointing:"",color:"red"},{default:i(()=>[l("Red Pointing")]),_:1}),t(d(N),{as:"a",basic:"",color:"blue"},{default:i(()=>[l("Blue")]),_:1})]),_:1}))}},Xk=`<template>
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
</template>`,Qk={__name:"ColoredDoc",setup(e){return(a,n)=>($(),D(R,{label:"Colored",code:Xk},{description:i(()=>[l(" A label can have different colors ")]),example:i(()=>[t(d(N),{as:"a",primary:""},{default:i(()=>[l("Primary")]),_:1}),t(d(N),{as:"a",secondary:""},{default:i(()=>[l("Secondary")]),_:1}),t(d(N),{as:"a",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(d(N),{as:"a",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(d(N),{as:"a",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(d(N),{as:"a",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(d(N),{as:"a",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(d(N),{as:"a",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(d(N),{as:"a",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(d(N),{as:"a",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(d(N),{as:"a",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(d(N),{as:"a",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(d(N),{as:"a",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(d(N),{as:"a",color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(d(N),{as:"a",color:"black"},{default:i(()=>[l("Black")]),_:1})]),_:1}))}},Zk=`<template>
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
</template>`,ex={__name:"BasicTagDoc",setup(e){return(a,n)=>($(),D(R,{label:"Basic Tag",code:Zk},{description:i(()=>[]),example:i(()=>[t(d(N),{as:"a",basic:"",tag:"",primary:""},{default:i(()=>[l("Primary")]),_:1}),t(d(N),{as:"a",basic:"",tag:"",secondary:""},{default:i(()=>[l("Secondary")]),_:1}),t(d(N),{as:"a",basic:"",tag:"",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(d(N),{as:"a",basic:"",tag:"",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(d(N),{as:"a",basic:"",tag:"",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(d(N),{as:"a",basic:"",tag:"",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(d(N),{as:"a",basic:"",tag:"",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(d(N),{as:"a",basic:"",tag:"",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(d(N),{as:"a",basic:"",tag:"",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(d(N),{as:"a",basic:"",tag:"",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(d(N),{as:"a",basic:"",tag:"",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(d(N),{as:"a",basic:"",tag:"",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(d(N),{as:"a",basic:"",tag:"",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(d(N),{as:"a",basic:"",tag:"",color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(d(N),{as:"a",basic:"",tag:"",color:"black"},{default:i(()=>[l("Black")]),_:1})]),_:1}))}},tx=`<template>
  <SuiLabel size="mini">Mini</SuiLabel>
  <SuiLabel size="tiny">Tiny</SuiLabel>
  <SuiLabel size="small">Small</SuiLabel>
  <SuiLabel>Medium</SuiLabel>
  <SuiLabel size="large">Large</SuiLabel>
  <SuiLabel size="big">Big</SuiLabel>
  <SuiLabel size="huge">Huge</SuiLabel>
  <SuiLabel size="massive">Massive</SuiLabel>
</template>`,ix={__name:"SizeDoc",setup(e){return(a,n)=>($(),D(R,{label:"Size",code:tx},{description:i(()=>[l(" A label can be small or large ")]),example:i(()=>[t(d(N),{size:"mini"},{default:i(()=>[l("Mini")]),_:1}),t(d(N),{size:"tiny"},{default:i(()=>[l("Tiny")]),_:1}),t(d(N),{size:"small"},{default:i(()=>[l("Small")]),_:1}),t(d(N),null,{default:i(()=>[l("Medium")]),_:1}),t(d(N),{size:"large"},{default:i(()=>[l("Large")]),_:1}),t(d(N),{size:"big"},{default:i(()=>[l("Big")]),_:1}),t(d(N),{size:"huge"},{default:i(()=>[l("Huge")]),_:1}),t(d(N),{size:"massive"},{default:i(()=>[l("Massive")]),_:1})]),_:1}))}},ax=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,lx={__name:"GroupSizeDoc",setup(e){return(a,n)=>($(),D(R,{label:"Group Size",code:ax},{description:i(()=>[l(" Labels can share sizes together ")]),example:i(()=>[t(d(Ji),{size:"huge"},{default:i(()=>[t(d(N),null,{default:i(()=>[l("Fun")]),_:1}),t(d(N),null,{default:i(()=>[l("Happy")]),_:1}),t(d(N),null,{default:i(()=>[l("Smart")]),_:1}),t(d(N),null,{default:i(()=>[l("Witty")]),_:1})]),_:1})]),_:1}))}},nx=`<template>
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
</template>`,ox={__name:"ColoredGroupDoc",setup(e){return(a,n)=>($(),D(R,{label:"Clored Group",code:nx},{description:i(()=>[l(" Labels can share colors together ")]),example:i(()=>[t(d(Ji),{color:"blue"},{default:i(()=>[t(d(N),null,{default:i(()=>[l(" Fun "),t(d(W),{name:"close"})]),_:1}),t(d(N),null,{default:i(()=>[l(" Happy "),t(d(Yi),null,{default:i(()=>[l("Smart")]),_:1})]),_:1}),t(d(N),null,{default:i(()=>[l("Insane")]),_:1}),t(d(N),null,{default:i(()=>[l("Exciting")]),_:1})]),_:1})]),_:1}))}},sx=`<template>
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
</template>`,rx={__name:"BasicGroupDoc",setup(e){return(a,n)=>($(),D(R,{label:"Basic Group",code:sx},{description:i(()=>[l(" Labels can share their style together ")]),example:i(()=>[t(d(Ji),{basic:""},{default:i(()=>[t(d(N),null,{default:i(()=>[l(" Fun "),t(d(W),{name:"close"})]),_:1}),t(d(N),null,{default:i(()=>[l(" Happy "),t(d(Yi),null,{default:i(()=>[l("Smart")]),_:1})]),_:1}),t(d(N),null,{default:i(()=>[l("Insane")]),_:1}),t(d(N),null,{default:i(()=>[l("Exciting")]),_:1})]),_:1})]),_:1}))}},ux=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,cx={__name:"TagGroupDoc",setup(e){return(a,n)=>($(),D(R,{label:"Tag Group",code:ux},{description:i(()=>[l(" Labels can share tag formatting ")]),example:i(()=>[t(d(Ji),{tag:""},{default:i(()=>[t(d(N),{as:"a"},{default:i(()=>[l("$10.00")]),_:1}),t(d(N),{as:"a"},{default:i(()=>[l("$19.99")]),_:1}),t(d(N),{as:"a"},{default:i(()=>[l("$24.99")]),_:1}),t(d(N),{as:"a"},{default:i(()=>[l("$10.25")]),_:1})]),_:1})]),_:1}))}},dx=`<template>
  <SuiLabelGroup tag>
    <SuiLabel as="a">1</SuiLabel>
    <SuiLabel as="a">3</SuiLabel>
    <SuiLabel as="a">4</SuiLabel>
    <SuiLabel as="a">14</SuiLabel>
    <SuiLabel as="a">16</SuiLabel>
    <SuiLabel as="a">34</SuiLabel>
  </SuiLabelGroup>
</template>`,mx={__name:"CircularGroupDoc",setup(e){return(a,n)=>($(),D(R,{label:"Circular Group",code:dx},{description:i(()=>[l(" Labels can share shapes ")]),example:i(()=>[t(d(Ji),{circular:""},{default:i(()=>[t(d(N),{as:"a"},{default:i(()=>[l("1")]),_:1}),t(d(N),{as:"a"},{default:i(()=>[l("3")]),_:1}),t(d(N),{as:"a"},{default:i(()=>[l("4")]),_:1}),t(d(N),{as:"a"},{default:i(()=>[l("14")]),_:1}),t(d(N),{as:"a"},{default:i(()=>[l("16")]),_:1}),t(d(N),{as:"a"},{default:i(()=>[l("34")]),_:1})]),_:1})]),_:1}))}},px={__name:"Label",setup(e){const a=[{id:"label",label:"Label",category:"Types",component:ok},{id:"image",label:"Image",category:"Types",component:dk},{id:"pointing",label:"Pointing",category:"Types",component:_k},{id:"corner",label:"Corner",category:"Types",component:vk},{id:"tag",label:"Tag",category:"Types",component:Sk},{id:"ribbon",label:"Ribbon",category:"Types",component:$k},{id:"attached",label:"Attached",category:"Types",component:Tk},{id:"horizontal",label:"Horizontal",category:"Types",component:Dk},{id:"floating",label:"Floating",category:"Types",component:Ek},{id:"inverted",label:"Inverted",category:"Types",component:zk},{id:"detail",label:"Detail",category:"Content",component:Pk},{id:"icon",label:"Icon",category:"Content",component:Vk},{id:"link",label:"Link",category:"Content",component:Nk},{id:"disabled",label:"Disabled",category:"States",component:jk},{id:"fluid",label:"Fluid",category:"Variations",component:qk},{id:"circular",label:"Circular",category:"Variations",component:Yk},{id:"basic",label:"Basic",category:"Variations",component:Kk},{id:"colored",label:"Colored",category:"Variations",component:Qk},{id:"basic-tag",label:"Basic Tag",category:"Variations",component:ex},{id:"size",label:"Size",category:"Variations",component:ix},{id:"group-size",label:"Group Size",category:"Groups",component:lx},{id:"colored-group",label:"Colored Group",category:"Groups",component:ox},{id:"basic-group",label:"Basic Group",category:"Groups",component:rx},{id:"tag-group",label:"Tag Group",category:"Groups",component:cx},{id:"circular-group",label:"Circular Group",category:"Groups",component:mx}];return(n,o)=>($(),D(_t,{title:"Label",description:"A label displays content classification","component-docs":a}))}},fx=db(Ah);function gx(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Tl=fx,ao=gx(Fm),hx=Tl.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function(a,n){var o=n.slots,r=n.attrs,c=o&&o.default&&o.default()||[],p=a.code||c&&c.length?c[0].children:"",f=a.inline,s=a.language,u=ao.languages[s],g="language-".concat(s);return function(){return f?Tl.h("code",{class:[g],innerHTML:ao.highlight(p,u)}):Tl.h("pre",Object.assign({},r,{class:[r.class,g]}),[Tl.h("code",Object.assign({},r,{class:[r.class,g],innerHTML:ao.highlight(p,u)}))])}}}),_x=hx;const bx=Rm(_x),vx=z({name:"DocExample",components:{Prism:bx},props:{title:String,description:String,code:String},setup(){const e=G(!1);return{active:e,toggle:()=>e.value=!e.value}}}),yx={class:"example"};function Sx(e,a,n,o,r,c){const p=y("sui-header-subheader"),f=y("sui-header"),s=y("sui-grid-column"),u=y("sui-icon"),g=y("sui-grid-row"),m=y("prism"),h=y("sui-grid");return $(),he("div",yx,[t(h,{columns:2},{default:i(()=>[t(g,null,{default:i(()=>[t(s,null,{default:i(()=>[t(f,{as:"h3"},{default:i(()=>[l(Te(e.title)+" ",1),t(p,null,{default:i(()=>[l(Te(e.description),1)]),_:1})]),_:1})]),_:1}),t(s,{textAlign:"right"},{default:i(()=>[t(u,{name:"code",color:"grey",onClick:e.toggle,link:""},null,8,["onClick"])]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(s,{width:16},{default:i(()=>[ji(e.$slots,"default",{},void 0,!0)]),_:3}),e.active?($(),D(s,{key:0,width:16},{default:i(()=>[t(m,{language:"markup"},{default:i(()=>[l(Te(e.code),1)]),_:1})]),_:1})):As("",!0)]),_:3})]),_:3})])}const Je=$e(vx,[["render",Sx],["__scopeId","data-v-fcfb6a67"]]),wx="/vue-fomantic-ui/images/avatar/small/rachel.png",Cx="/vue-fomantic-ui/images/avatar/small/lindsay.png",Ax="/vue-fomantic-ui/images/avatar/small/matthew.png",En="/vue-fomantic-ui/images/avatar/small/jenny.jpg",kx="/vue-fomantic-ui/images/avatar/small/tom.jpg",Ll="/vue-fomantic-ui/images/avatar/small/christian.jpg",Rn="/vue-fomantic-ui/images/avatar/small/matt.jpg",Oa="/vue-fomantic-ui/images/avatar/small/helen.jpg",Ei="/vue-fomantic-ui/images/avatar/small/daniel.jpg",Jo="/vue-fomantic-ui/images/avatar/small/stevie.jpg",ei="/vue-fomantic-ui/images/wireframe/square-image.png",xx=z({name:"ListDoc",components:{DocExample:Je},setup(){return{listCode:`<sui-list>
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
</div>`}}}),$x={class:"intro"},Bx=S("div",null,"Benefits",-1),Tx={class:"list"},Lx=S("a",null,"Languages",-1),Dx=S("a",null,[S("b",null,"Arrested Development")],-1),Ix=S("a",null,[S("b",null,"Bob's Burgers")],-1),Ex=S("a",null,[S("b",null,"The Godfather Part 2")],-1),Rx=S("a",null,[S("b",null,"Twin Peaks")],-1),zx=S("a",null,[S("b",null,"Arrested Development")],-1),Fx=S("a",null,[S("b",null,"Bob's Burgers")],-1),Px=S("a",null,[S("b",null,"The Godfather Part 2")],-1);function Mx(e,a,n,o,r,c){const p=y("sui-header-subheader"),f=y("sui-header"),s=y("sui-divider"),u=y("sui-icon"),g=y("sui-menu-item"),m=y("sui-menu"),h=y("sui-container"),v=y("sui-segment"),b=y("sui-list-item"),C=y("sui-list"),k=y("doc-example"),T=y("sui-list-list"),_=y("sui-list-header"),w=y("sui-list-description"),x=y("sui-list-content"),B=y("sui-image");return $(),he("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",$x,[t(f,{as:"h1"},{default:i(()=>[l("List "),t(p,null,{default:i(()=>[l(" A list is used to group related content ")]),_:1})]),_:1}),t(s,{hidden:""}),t(m,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(k,{title:"List",description:"A list groups related content",code:e.listCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Apples")]),_:1}),t(b,null,{default:i(()=>[l("Pears")]),_:1}),t(b,null,{default:i(()=>[l("Oranges")]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Bulleted",description:"A list can mark items with a bullet",code:e.bulletedCode},{default:i(()=>[t(C,{bulleted:""},{default:i(()=>[t(b,null,{default:i(()=>[l("Gaining Access")]),_:1}),t(b,null,{default:i(()=>[l("Inviting Friends")]),_:1}),t(b,null,{default:i(()=>[Bx,S("div",Tx,[t(b,{as:"a"},{default:i(()=>[l("Link to somewhere")]),_:1}),t(b,null,{default:i(()=>[l("Rebates")]),_:1}),t(b,null,{default:i(()=>[l("Discounts")]),_:1})])]),_:1}),t(b,null,{default:i(()=>[l("Warranty")]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Ordered",description:"A list can be ordered numerically",code:e.orderedCode},{default:i(()=>[t(C,{ordered:""},{default:i(()=>[t(b,{as:"a"},{default:i(()=>[l("Getting Started")]),_:1}),t(b,{as:"a"},{default:i(()=>[l("Introduction")]),_:1}),t(b,null,{default:i(()=>[Lx,t(T,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[l("HTML")]),_:1}),t(b,{as:"a"},{default:i(()=>[l("Javascript")]),_:1}),t(b,{as:"a"},{default:i(()=>[l("CSS")]),_:1})]),_:1})]),_:1}),t(b,{as:"a"},{default:i(()=>[l("Review")]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Link",description:"A list can be specially formatted for navigation links",code:e.linkCode},{default:i(()=>[t(C,{link:""},{default:i(()=>[t(b,{active:""},{default:i(()=>[l("Home")]),_:1}),t(b,{as:"a"},{default:i(()=>[l("About")]),_:1}),t(b,{as:"a"},{default:i(()=>[l("Jobs")]),_:1}),t(b,{as:"a"},{default:i(()=>[l("Team")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(k,{title:"Item",description:"A list item can contain a set of items",code:e.itemCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[l("1")]),_:1}),t(b,null,{default:i(()=>[l("2")]),_:1}),t(b,null,{default:i(()=>[l("3")]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Icon",description:"A list item can contain an icon",code:e.iconCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[t(u,{name:"help"}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Floated Icon")]),_:1}),t(w,null,{default:i(()=>[l(" This text will always have a left margin to make sure it sits alongside your icon ")]),_:1})]),_:1})]),_:1}),t(b,{as:"a"},{default:i(()=>[t(u,{name:"right triangle"}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Icon Alignment")]),_:1}),t(w,null,{default:i(()=>[l(" Floated icons are by default top aligned. To have an icon top aligned try this example ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(u,{name:"help"}),l(" Inline Text ")]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Image",description:"A list can contain an image",code:e.imageContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(B,{avatar:"",src:wx}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Rachel")]),_:1}),t(w,null,{default:i(()=>[l(" Last seen watching "),Dx,l(" just now. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:Cx}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Lindsay")]),_:1}),t(w,null,{default:i(()=>[l(" Last seen watching "),Ix,l(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:Ax}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Matthew")]),_:1}),t(w,null,{default:i(()=>[l(" Last seen watching "),Ex,l(" yesterday. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:En}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Jenny Hess")]),_:1}),t(w,null,{default:i(()=>[l(" Last seen watching "),Rx,l(" 3 days ago. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:cp}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Veronika Ossi")]),_:1}),t(w,null,{default:i(()=>[l(" Has not watched anything recently ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Link",description:"A list can contain links",code:e.linkContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[l("What is a FAQ?")]),_:1}),t(b,{as:"a"},{default:i(()=>[l("Who is our user?")]),_:1}),t(b,{as:"a"},{default:i(()=>[l("Where is our office located?")]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"header",description:"A list item can contain a header",code:e.headerContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[l("New York City")]),_:1}),l(" A lovely city ")]),_:1}),t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Chicago")]),_:1}),l(" Also quite a lovely city ")]),_:1}),t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Los Angeles")]),_:1}),l(" Sometimes can be a lovely city ")]),_:1}),t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[l("San Francisco")]),_:1}),l(" What a lovely city ")]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Description",description:"A list item can contain a description",code:e.descriptionContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(u,{name:"map marker"}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Krolewskie Jadlo")]),_:1}),t(w,null,{default:i(()=>[l(" An excellent polish restaurant, quick delivery and hearty, filling meals. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(u,{name:"map marker"}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Xian Famous Foods")]),_:1}),t(w,null,{default:i(()=>[l(" A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(u,{name:"map marker"}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Sapporo Haru")]),_:1}),t(w,null,{default:i(()=>[l(" Greenpoint's best choice for quick and delicious sushi. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(u,{name:"map marker"}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Enid's")]),_:1}),t(w,null,{default:i(()=>[l(" At night a bar, during the day a delicious brunch spot. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(k,{title:"Horizontal",description:"A list can be formatted to have items appear horizontally",code:e.horizontalVarCode},{default:i(()=>[t(C,{horizontal:""},{default:i(()=>[t(b,null,{default:i(()=>[t(B,{avatar:"",src:kx}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Tom")]),_:1}),l(" Top Contributor ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:Ll}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Christian Rocha")]),_:1}),l(" Admin ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:Rn}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Matt")]),_:1}),l(" Top Rated User ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Inverted",description:"A list can be inverted to appear on a dark background",code:e.invertedVarCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(C,{inverted:"",relaxed:"",divided:""},{default:i(()=>[t(b,null,{default:i(()=>[t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Snickerdoodle")]),_:1}),l(" An excellent companion ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Poodle")]),_:1}),l(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Paulo")]),_:1}),l(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Selection",description:"A selection list formats list items as possible choices",code:e.selectionVarCode},{default:i(()=>[t(C,{selection:"",verticalAlign:"middle"},{default:i(()=>[t(b,null,{default:i(()=>[t(B,{avatar:"",src:Oa}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Helen")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:Ll}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Christian")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:Ei}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Animated",description:"A list can animate to set the current item apart from the list",code:e.animatedVarCode},{default:i(()=>[t(C,{animated:"",verticalAlign:"middle"},{default:i(()=>[t(b,null,{default:i(()=>[t(B,{avatar:"",src:Oa}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Helen")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:Ll}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Christian")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:Ei}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Relaxed",description:"A list can relax its padding to provide more negative space",code:e.relaxedVarCode},{default:i(()=>[t(C,{relaxed:""},{default:i(()=>[t(b,null,{default:i(()=>[t(B,{avatar:"",src:Ei}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Daniel Louise")]),_:1}),t(w,null,{default:i(()=>[l(" Last seen watching "),zx,l(" just now. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:Jo}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Stevie Feliciano")]),_:1}),t(w,null,{default:i(()=>[l(" Last seen watching "),Fx,l(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:ni}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(w,null,{default:i(()=>[l(" Last seen watching "),Px,l(" yesterday. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Divided",description:"A list can show divisions between content",code:e.dividedVarCode},{default:i(()=>[t(C,{divided:"",verticalAlign:"middle"},{default:i(()=>[t(b,null,{default:i(()=>[t(B,{avatar:"",src:Ei}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Daniel Louise")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:Jo}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Stevie Feliciano")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:ni}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Celled",description:"A list can divide its items into cells",code:e.celledVarCode},{default:i(()=>[t(C,{celled:""},{default:i(()=>[t(b,null,{default:i(()=>[t(B,{avatar:"",src:Oa}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Snickerdoodle")]),_:1}),l(" An excellent companion ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:Ei}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Poodle")]),_:1}),l(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:Ei}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Paulo")]),_:1}),l(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Size",description:"A list can vary in size",code:e.sizeCode},{default:i(()=>[t(C,{horizontal:"",divided:"",size:"mini"},{default:i(()=>[t(b,null,{default:i(()=>[t(B,{avatar:"",src:Oa}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Helen")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:Ll}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Christian")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:Ei}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Content Variations")]),_:1}),t(k,{title:"Vertical Aligned",description:"An element inside a list can be vertically aligned",code:e.verticalAlignedCode},{default:i(()=>[t(C,{horizontal:""},{default:i(()=>[t(b,null,{default:i(()=>[t(B,{avatar:"",src:ei}),t(x,{verticalAlign:"top"},{default:i(()=>[l(" Top Aligned ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:ei}),t(x,{verticalAlign:"middle"},{default:i(()=>[l(" Middle ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:ei}),t(x,{verticalAlign:"bottom"},{default:i(()=>[l(" Bottom ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Floated",description:"An list, or an element inside a list can be floated left or right",code:e.floatedCode},{default:i(()=>[S("div",null,[t(C,{floated:"right",horizontal:""},{default:i(()=>[t(b,{disabled:""},{default:i(()=>[l("© GitHub, Inc.")]),_:1}),t(b,{as:"a"},{default:i(()=>[l("Terms")]),_:1}),t(b,{as:"a"},{default:i(()=>[l("Privacy")]),_:1}),t(b,{as:"a"},{default:i(()=>[l("Contact")]),_:1})]),_:1}),t(C,{horizontal:""},{default:i(()=>[t(b,{as:"a"},{default:i(()=>[l("About Us")]),_:1}),t(b,{as:"a"},{default:i(()=>[l("Jobs")]),_:1})]),_:1})])]),_:1},8,["code"])]),_:1})])}const Vx=$e(xx,[["render",Mx]]),Hx=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader />
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Nx={__name:"LoaderDoc",setup(e){return(a,n)=>($(),D(R,{label:"Loader",code:Hx},{description:i(()=>[l(" A loader ")]),example:i(()=>[t(d(Le),null,{default:i(()=>[t(d(Ot),{active:""},{default:i(()=>[t(d(Re))]),_:1}),t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Ox=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text>Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,jx={__name:"TextLoaderDoc",setup(e){return(a,n)=>($(),D(R,{label:"Text Loader",code:Ox},{description:i(()=>[l(" A loader can contain text ")]),example:i(()=>[t(d(Le),null,{default:i(()=>[t(d(Ot),{active:""},{default:i(()=>[t(d(Re),{text:""},{default:i(()=>[l("Loading")]),_:1})]),_:1}),t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Gx=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader Indeterminate text>Preparing Files</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,qx={__name:"IndeterminateDoc",setup(e){return(a,n)=>($(),D(R,{label:"Indeterminate",code:Gx},{description:i(()=>[l(" A loader can show it's unsure of how long a task will take ")]),example:i(()=>[t(d(Le),null,{default:i(()=>[t(d(Ot),{active:""},{default:i(()=>[t(d(Re),{Indeterminate:"",text:""},{default:i(()=>[l("Preparing Files")]),_:1})]),_:1}),t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Ux=`<template>
  <SuiSegment>
    <SuiLoader active />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Yx={__name:"ActiveDoc",setup(e){return(a,n)=>($(),D(R,{label:"Active",code:Ux},{description:i(()=>[l(" A loader can be active or visible ")]),example:i(()=>[t(d(Le),null,{default:i(()=>[t(d(Re),{active:""}),t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Jx=`<template>
  <SuiSegment>
    <SuiLoader disabled />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Wx={__name:"DisabledDoc",setup(e){return(a,n)=>($(),D(R,{label:"Disabled",code:Jx},{description:i(()=>[l(" A loader can be disabled or hidden ")]),example:i(()=>[t(d(Le),null,{default:i(()=>[t(d(Re),{disabled:""}),t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Kx=`<template>
  <SuiLoader active inline />
</template>`,Xx={__name:"InlineDoc",setup(e){return(a,n)=>($(),D(R,{label:"Inline",code:Kx},{description:i(()=>[l(" Loaders can appear inline with content ")]),example:i(()=>[t(d(Re),{active:"",inline:""})]),_:1}))}},Qx=`<template>
  <SuiLoader active inline />
</template>`,Zx={__name:"InlineCenterDoc",setup(e){return(a,n)=>($(),D(R,{label:"Inline Center",code:Qx},{description:i(()=>[l(" Loaders can appear inline centered with content ")]),example:i(()=>[t(d(Re),{active:"",inline:"centered"})]),_:1}))}},e$=`<template>
  <SuiLoader slow active inline />
  <SuiLoader active inline />
  <SuiLoader fast active inline />
</template>`,t$={__name:"SpeedDoc",setup(e){return(a,n)=>($(),D(R,{label:"Speed",code:e$},{description:i(()=>[l(" Loaders can appear slow, normal or fast ")]),example:i(()=>[t(d(Re),{slow:"",active:"",inline:""}),t(d(Re),{active:"",inline:""}),t(d(Re),{fast:"",active:"",inline:""})]),_:1}))}},i$=`<template>
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
</template>`,a$={__name:"ColorsDoc",setup(e){return(a,n)=>($(),D(R,{label:"Colors",code:i$},{description:i(()=>[l(" Loaders can be different colors ")]),example:i(()=>[t(d(Re),{active:"",inline:"",primary:""}),t(d(Re),{active:"",inline:"",secondary:""}),t(d(Re),{active:"",inline:"",color:"red"}),t(d(Re),{active:"",inline:"",color:"orange"}),t(d(Re),{active:"",inline:"",color:"yellow"}),t(d(Re),{active:"",inline:"",color:"olive"}),t(d(Re),{active:"",inline:"",color:"green"}),t(d(Re),{active:"",inline:"",color:"teal"}),t(d(Re),{active:"",inline:"",color:"blue"}),t(d(Re),{active:"",inline:"",color:"violet"}),t(d(Re),{active:"",inline:"",color:"purple"}),t(d(Re),{active:"",inline:"",color:"pink"}),t(d(Re),{active:"",inline:"",color:"brown"}),t(d(Re),{active:"",inline:"",color:"grey"}),t(d(Re),{active:"",inline:"",color:"black"})]),_:1}))}},l$=`<template>
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
</template>`,n$={__name:"SizeDoc",setup(e){return(a,n)=>($(),D(R,{label:"Size",code:l$},{description:i(()=>[l(" Loaders can have different sizes ")]),example:i(()=>[t(d(Le),null,{default:i(()=>[t(d(Ot),{active:""},{default:i(()=>[t(d(Re),{text:"",size:"mini"},{default:i(()=>[l("Loading")]),_:1})]),_:1}),t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(d(Le),null,{default:i(()=>[t(d(Ot),{active:""},{default:i(()=>[t(d(Re),{text:"",size:"tiny"},{default:i(()=>[l("Loading")]),_:1})]),_:1}),t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(d(Le),null,{default:i(()=>[t(d(Ot),{active:""},{default:i(()=>[t(d(Re),{text:"",size:"small"},{default:i(()=>[l("Loading")]),_:1})]),_:1}),t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(d(Le),null,{default:i(()=>[t(d(Ot),{active:""},{default:i(()=>[t(d(Re),{text:"",size:"large"},{default:i(()=>[l("Loading")]),_:1})]),_:1}),t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(d(Le),null,{default:i(()=>[t(d(Ot),{active:""},{default:i(()=>[t(d(Re),{text:"",size:"big"},{default:i(()=>[l("Loading")]),_:1})]),_:1}),t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(d(Le),null,{default:i(()=>[t(d(Ot),{active:""},{default:i(()=>[t(d(Re),{text:"",size:"huge"},{default:i(()=>[l("Loading")]),_:1})]),_:1}),t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},o$=`<template>
  <SuiSegment inverted>
    <SuiLoader active inverted />

    <SuiImage src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,s$={__name:"InvertedDoc",setup(e){return(a,n)=>($(),D(R,{label:"Inverted",code:o$},{description:i(()=>[l(" Loaders can have their colors inverted. ")]),example:i(()=>[t(d(Le),{inverted:""},{default:i(()=>[t(d(Re),{active:"",inverted:""}),t(d(ce),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},r$={__name:"Loader",setup(e){const a=[{id:"loader",label:"Loader",category:"Types",component:Nx},{id:"text-loader",label:"Text Loader",category:"Types",component:jx},{id:"indeterminate",label:"Indeterminate",category:"States",component:qx},{id:"active",label:"Active",category:"States",component:Yx},{id:"disabled",label:"Disabled",category:"States",component:Wx},{id:"inline",label:"Inline",category:"Variations",component:Xx},{id:"inline-center",label:"Inline Center",category:"Variations",component:Zx},{id:"speed",label:"Speed",category:"Variations",component:t$},{id:"colors",label:"Colors",category:"Variations",component:a$},{id:"size",label:"Size",category:"Variations",component:n$},{id:"inverted",label:"Inverted",category:"Variations",component:s$}];return(n,o)=>($(),D(_t,{title:"Loader",description:"A loader alerts a user to wait for an activity to complete","component-docs":a}))}},nt="/vue-fomantic-ui/images/wireframe/short-paragraph.png",u$=z({name:"RailDoc",components:{DocExample:Je},setup(){return{railCode:`<sui-grid centered :columns="3">
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
</sui-grid>`}}}),c$={class:"intro"};function d$(e,a,n,o,r,c){const p=y("sui-header-subheader"),f=y("sui-header"),s=y("sui-divider"),u=y("sui-icon"),g=y("sui-menu-item"),m=y("sui-menu"),h=y("sui-container"),v=y("sui-segment"),b=y("sui-image"),C=y("sui-rail"),k=y("sui-grid-column"),T=y("sui-grid"),_=y("doc-example");return $(),he("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",c$,[t(f,{as:"h1"},{default:i(()=>[l("Rail "),t(p,null,{default:i(()=>[l(" A rail is used to show accompanying content outside the boundaries of the main view of a site ")]),_:1})]),_:1}),t(s,{hidden:""}),t(m,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(_,{title:"Rail",description:"A rail can be presented on the left or right side of a container",code:e.railCode},{default:i(()=>[t(T,{centered:"",columns:3},{default:i(()=>[t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[t(b,{src:nt}),t(C,{position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Left Rail Content ")]),_:1})]),_:1}),t(C,{position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Internal",description:"A rail can attach itself to the inside of a container",code:e.internalCode},{default:i(()=>[t(v,{textAlign:"center"},{default:i(()=>[t(b,{src:nt}),t(C,{internal:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[l("Left Rail Content")]),_:1})]),_:1}),t(C,{internal:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[l("Right Rail Content")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Dividing",description:"A rail can create a division between itself and a container",code:e.dividingCode},{default:i(()=>[t(T,{centered:"",columns:3},{default:i(()=>[t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[t(b,{src:nt}),t(C,{dividing:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Left Rail Content ")]),_:1})]),_:1}),t(C,{dividing:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(_,{title:"Attached",description:"A rail can appear attached to the main viewport",code:e.attachedCode},{default:i(()=>[t(T,{centered:"",columns:3},{default:i(()=>[t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[t(b,{src:nt}),t(C,{attached:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Left Rail Content ")]),_:1})]),_:1}),t(C,{attached:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Close",description:"A rail can appear closer to the main viewport",code:e.closeCode},{default:i(()=>[t(T,{centered:"",columns:3},{default:i(()=>[t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[t(b,{src:nt}),t(C,{close:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Left Rail Content ")]),_:1})]),_:1}),t(C,{close:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Size",description:"A rail can have different sizes",code:e.sizeCode},{default:i(()=>[t(T,{centered:"",columns:3},{default:i(()=>[t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[t(b,{src:nt}),t(C,{size:"small",position:"left"},{default:i(()=>[l(" Left Small Rail ")]),_:1}),t(C,{size:"large",position:"right"},{default:i(()=>[l(" Right Large Rail ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const m$=$e(u$,[["render",d$]]),p$="/vue-fomantic-ui/images/avatar/large/ade.jpg",Sc="/vue-fomantic-ui/images/avatar/large/chris.jpg",Wo="/vue-fomantic-ui/images/avatar/large/stevie.jpg",wc="/vue-fomantic-ui/images/avatar/large/nan.jpg",f$=z({name:"RevealDoc",components:{DocExample:Je},setup(){return{fadeCode:`<sui-reveal animated="fade">
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
</sui-reveal>`}}}),g$={class:"intro"};function h$(e,a,n,o,r,c){const p=y("sui-header-subheader"),f=y("sui-header"),s=y("sui-divider"),u=y("sui-icon"),g=y("sui-menu-item"),m=y("sui-menu"),h=y("sui-container"),v=y("sui-segment"),b=y("sui-image"),C=y("sui-reveal-content"),k=y("sui-reveal"),T=y("doc-example");return $(),he("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",g$,[t(f,{as:"h1"},{default:i(()=>[l("Reveal "),t(p,null,{default:i(()=>[l(" A reveal displays additional content in place of previous content when activated ")]),_:1})]),_:1}),t(s,{hidden:""}),t(m,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(T,{title:"Fade",description:"An element can disappear to reveal content below",code:e.fadeCode},{default:i(()=>[t(k,{animated:"fade"},{default:i(()=>[t(C,{visible:""},{default:i(()=>[t(b,{size:"small",src:ei})]),_:1}),t(C,{hidden:""},{default:i(()=>[t(b,{size:"small",src:p$})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Move",description:"An element can move in a direction to reveal content",code:e.moveCode},{default:i(()=>[t(k,{animated:"move"},{default:i(()=>[t(C,{visible:""},{default:i(()=>[t(b,{size:"small",src:ei})]),_:1}),t(C,{hidden:""},{default:i(()=>[t(b,{size:"small",src:Sc})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Rotate",description:"An element can rotate to reveal content below",code:e.rotateCode},{default:i(()=>[t(k,{animated:"rotate"},{default:i(()=>[t(C,{visible:""},{default:i(()=>[t(b,{circular:"",size:"small",src:ei})]),_:1}),t(C,{hidden:""},{default:i(()=>[t(b,{circular:"",size:"small",src:Wo})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(T,{title:"Active",description:"An active reveal displays its hidden content",code:e.activeCode},{default:i(()=>[t(k,{active:"",animated:"move"},{default:i(()=>[t(C,{visible:""},{default:i(()=>[t(b,{size:"small",src:ei})]),_:1}),t(C,{hidden:""},{default:i(()=>[t(b,{size:"small",src:wc})]),_:1})]),_:1})]),_:1},8,["code"]),t(T,{title:"Disabled",description:"A disabled reveal will not animate when hovered",code:e.disabledCode},{default:i(()=>[t(k,{disabled:"",animated:"move"},{default:i(()=>[t(C,{visible:""},{default:i(()=>[t(b,{size:"small",src:ei})]),_:1}),t(C,{hidden:""},{default:i(()=>[t(b,{size:"small",src:wc})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(T,{title:"Instant",description:"An element can show its content without delay",code:e.instantCode},{default:i(()=>[t(k,{instant:"",animated:"move"},{default:i(()=>[t(C,{visible:""},{default:i(()=>[t(b,{size:"small",src:ei})]),_:1}),t(C,{hidden:""},{default:i(()=>[t(b,{size:"small",src:Sc})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const _$=$e(f$,[["render",h$]]),b$=z({name:"SegmentDoc",components:{DocExample:Je},setup(){return{segmentCode:"<sui-segment>Pellentesque habitant morbi tristique senectus.</sui-segment>",placeholderCode:`<sui-segment placeholder>
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
</sui-segment>`}}}),v$={class:"intro"},y$=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),S$=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),w$=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),C$=S("p",null,"Top",-1),A$=S("p",null,"Middle",-1),k$=S("p",null,"Middle",-1),x$=S("p",null,"Middle",-1),$$=S("p",null,"Bottom",-1),B$=S("p",null,"I'm here to tell you something, and you will probably read me first.",-1),T$=S("p",null,"This segment is on top",-1),L$=S("p",null,"This segment is attached on both sides",-1),D$=S("p",null,"This segment is on bottom",-1),I$=S("p",null,"Fitted Segment",-1),E$=S("p",null,"Horizontally fitted segment",-1),R$=S("p",null,"Vertically fitted segment",-1),z$=S("p",null,"I'm here to tell you something, and you will probably read me first.",-1),F$=S("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),P$=S("p",null,"If you notice me you must be looking very hard.",-1),M$=S("p",null,"This segment will appear to the right",-1),V$=S("p",null,"This segment will appear to the left",-1),H$=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1);function N$(e,a,n,o,r,c){const p=y("sui-header-subheader"),f=y("sui-header"),s=y("sui-divider"),u=y("sui-icon"),g=y("sui-menu-item"),m=y("sui-menu"),h=y("sui-container"),v=y("sui-segment"),b=y("doc-example"),C=y("sui-button"),k=y("sui-segment-group");return $(),he("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",v$,[t(f,{as:"h1"},{default:i(()=>[l("Segment "),t(p,null,{default:i(()=>[l(" A segment is used to create a grouping of related content ")]),_:1})]),_:1}),t(s,{hidden:""}),t(m,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(b,{title:"Segment",description:"A segment of content",code:e.segmentCode},{default:i(()=>[t(v,null,{default:i(()=>[l("Pellentesque habitant morbi tristique senectus.")]),_:1})]),_:1},8,["code"]),t(b,{title:"Placeholder Segment",description:"A segment can be used to reserve space for conditionally displayed content",code:e.placeholderCode},{default:i(()=>[t(v,{placeholder:""},{default:i(()=>[t(f,{icon:""},{default:i(()=>[t(u,{name:"file outline"}),l(" No documents are listed for this customer. ")]),_:1}),t(C,{color:"primary"},{default:i(()=>[l("Add Document")]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Raised",description:"A segment may be formatted to raise above the page",code:e.raisedCode},{default:i(()=>[t(v,{raised:""},{default:i(()=>[y$]),_:1})]),_:1},8,["code"]),t(b,{title:"Stacked",description:"A segment can be formatted to show it contains multiple pages",code:e.stackedCode},{default:i(()=>[t(v,{stacked:""},{default:i(()=>[S$]),_:1})]),_:1},8,["code"]),t(b,{title:"Piled",description:"A segment can be formatted to look like a pile of pages",code:e.piledCode},{default:i(()=>[t(v,{piled:""},{default:i(()=>[w$]),_:1})]),_:1},8,["code"]),t(b,{title:"Vertical Segment",description:"A vertical segment formats content to be aligned as part of a vertical group",code:e.verticalCode},{default:i(()=>[S("div",null,[t(v,{vertical:""},{default:i(()=>[l(" Te eum doming eirmod, nominati pertinacia argumentum ad his. ")]),_:1}),t(v,{vertical:""},{default:i(()=>[l(" Pellentesque habitant morbi tristique senectus. ")]),_:1}),t(v,{vertical:""},{default:i(()=>[l(" Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. ")]),_:1})])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Groups")]),_:1}),t(b,{title:"Segments",description:"A group of segments can be formatted to appear together",code:e.segmentsCode},{default:i(()=>[t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[C$]),_:1}),t(v,null,{default:i(()=>[A$]),_:1}),t(v,null,{default:i(()=>[k$]),_:1}),t(v,null,{default:i(()=>[x$]),_:1}),t(v,null,{default:i(()=>[$$]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Nested Segments",description:"A group of segments can be nested in another group of segments",code:e.nestedCode},{default:i(()=>[t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Top")]),_:1}),t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Nested Top")]),_:1}),t(v,null,{default:i(()=>[l("Nested Middle")]),_:1}),t(v,null,{default:i(()=>[l("Nested Bottom")]),_:1})]),_:1}),t(k,{horizontal:""},{default:i(()=>[t(v,null,{default:i(()=>[l("Top")]),_:1}),t(v,null,{default:i(()=>[l("Middle")]),_:1}),t(v,null,{default:i(()=>[l("Bottom")]),_:1})]),_:1}),t(v,null,{default:i(()=>[l("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Horizontal Segments",description:"A segment group can appear horizontally",code:e.horizontalCode},{default:i(()=>[t(k,{horizontal:""},{default:i(()=>[t(v,null,{default:i(()=>[l("Left")]),_:1}),t(v,null,{default:i(()=>[l("Middle")]),_:1}),t(v,null,{default:i(()=>[l("Right")]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Raised Segments",description:"A group of segments can be raised",code:e.raisedSegmentsCode},{default:i(()=>[t(k,{raised:""},{default:i(()=>[t(v,null,{default:i(()=>[l("Top")]),_:1}),t(v,null,{default:i(()=>[l("Middle")]),_:1}),t(v,null,{default:i(()=>[l("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Stacked Segments",description:"A group of segments can be stacked",code:e.stackedSegmentsCode},{default:i(()=>[t(k,{stacked:""},{default:i(()=>[t(v,null,{default:i(()=>[l("Top")]),_:1}),t(v,null,{default:i(()=>[l("Middle")]),_:1}),t(v,null,{default:i(()=>[l("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Piled Segments",description:"A group of segments can be piled",code:e.piledSegmentsCode},{default:i(()=>[t(k,{piled:""},{default:i(()=>[t(v,null,{default:i(()=>[l("Top")]),_:1}),t(v,null,{default:i(()=>[l("Middle")]),_:1}),t(v,null,{default:i(()=>[l("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(b,{title:"Disabled",description:"A segment may show its content is disabled",code:e.disabledCode},{default:i(()=>[t(v,{disabled:""},{default:i(()=>[l("Disabled content")]),_:1})]),_:1},8,["code"]),t(b,{title:"Loading",description:"A segment may show its content is being loaded",code:e.loadingCode},{default:i(()=>[t(v,{loading:""},{default:i(()=>[l("Now Loading...")]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(b,{title:"Inverted",description:"A segment can have its colors inverted for contrast",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[B$]),_:1})]),_:1},8,["code"]),t(b,{title:"Attached",description:"A segment can be attached to other content on a page",code:e.attachedCode},{default:i(()=>[S("div",null,[t(v,{attached:"top"},{default:i(()=>[T$]),_:1}),t(v,{attached:""},{default:i(()=>[L$]),_:1}),t(v,{attached:"bottom"},{default:i(()=>[D$]),_:1})])]),_:1},8,["code"]),t(b,{title:"Padded",description:"A segment can increase its padding",code:e.paddedCode},{default:i(()=>[t(v,{padded:""},{default:i(()=>[l("Padded content")]),_:1})]),_:1},8,["code"]),t(b,{title:"Fitted",description:"A segment can remove its padding, vertically or horizontally",code:e.fittedCode},{default:i(()=>[S("div",null,[t(v,{fitted:""},{default:i(()=>[I$]),_:1}),t(v,{fitted:"horizontally"},{default:i(()=>[E$]),_:1}),t(v,{fitted:"vertically"},{default:i(()=>[R$]),_:1})])]),_:1},8,["code"]),t(b,{title:"Compact",description:"A segment may take up only as much space as is necessary",code:e.compactCode},{default:i(()=>[t(v,{compact:""},{default:i(()=>[l("Compact content")]),_:1})]),_:1},8,["code"]),t(b,{title:"Colored",description:"A segment can be colored",code:e.coloredCode},{default:i(()=>[S("div",null,[t(v,{color:"red"},{default:i(()=>[l("Red")]),_:1}),t(v,{color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(v,{color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(v,{color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(v,{color:"green"},{default:i(()=>[l("Green")]),_:1}),t(v,{color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(v,{color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(v,{color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(v,{color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(v,{color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(v,{color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(v,{color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(v,{color:"black"},{default:i(()=>[l("Black")]),_:1})])]),_:1},8,["code"]),t(b,{title:"Emphasis",description:"A segment can be formatted to appear more or less noticeable",code:e.emphasisCode},{default:i(()=>[S("div",null,[t(v,null,{default:i(()=>[z$]),_:1}),t(v,{secondary:""},{default:i(()=>[F$]),_:1}),t(v,{tertiary:""},{default:i(()=>[P$]),_:1})])]),_:1},8,["code"]),t(b,{title:"Circular",description:"A segment can be circular",code:e.circularCode},{default:i(()=>[S("div",null,[t(v,{circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[t(f,{as:"h2"},{default:i(()=>[l(" Buy Now "),t(p,null,{default:i(()=>[l(" $10.99 ")]),_:1})]),_:1})]),_:1}),t(v,{inverted:"",circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[t(f,{as:"h2"},{default:i(()=>[l(" Buy Now "),t(p,null,{default:i(()=>[l(" $10.99 ")]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(b,{title:"Clearing",description:"A segment can clear floated content",code:e.clearingCode},{default:i(()=>[t(v,{clearing:""},{default:i(()=>[t(C,{floated:"right"},{default:i(()=>[l("Floated")]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Floated",description:"A segment can appear to the left or right of other content",code:e.floatedCode},{default:i(()=>[S("div",null,[t(v,{floated:"right"},{default:i(()=>[M$]),_:1}),t(v,{floated:"left"},{default:i(()=>[V$]),_:1})])]),_:1},8,["code"]),t(b,{title:"Text Alignment",description:"A segment can have its text aligned to a side",code:e.textAlignCode},{default:i(()=>[S("div",null,[t(v,{textAlign:"right"},{default:i(()=>[l(" Right ")]),_:1}),t(v,{textAlign:"left"},{default:i(()=>[l(" Left ")]),_:1}),t(v,{textAlign:"center"},{default:i(()=>[l(" Center ")]),_:1})])]),_:1},8,["code"]),t(b,{title:"Basic",description:"A basic segment has no special formatting",code:e.basicCode},{default:i(()=>[t(v,{basic:""},{default:i(()=>[H$]),_:1})]),_:1},8,["code"])]),_:1})])}const O$=$e(b$,[["render",N$]]),j$=z({name:"StepDoc",components:{DocExample:Je},setup(){return{stepCode:`<sui-step-group>
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
</sui-segment>`}}}),G$={class:"intro"},q$=S("p",null,"The steps take up the entire column width",-1),U$=S("p",null,"Main content",-1);function Y$(e,a,n,o,r,c){const p=y("sui-header-subheader"),f=y("sui-header"),s=y("sui-divider"),u=y("sui-icon"),g=y("sui-menu-item"),m=y("sui-menu"),h=y("sui-container"),v=y("sui-segment"),b=y("sui-step"),C=y("sui-step-group"),k=y("doc-example"),T=y("sui-step-title"),_=y("sui-step-description"),w=y("sui-step-content"),x=y("sui-grid-column"),B=y("sui-grid");return $(),he("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",G$,[t(f,{as:"h1"},{default:i(()=>[l("Step "),t(p,null,{default:i(()=>[l(" A step shows the completion status of an activity in a series of activities ")]),_:1})]),_:1}),t(s,{hidden:""}),t(m,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(k,{title:"Step",description:"A single step",code:e.stepCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Shipping")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Groups")]),_:1}),t(k,{title:"Steps",description:"A set of steps",code:e.stepsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(u,{name:"info"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Ordered",description:"A step can show a ordered sequence of steps",code:e.orderedCode},{default:i(()=>[t(C,{ordered:""},{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{completed:""},{default:i(()=>[t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Vertical",description:"A step can be displayed stacked vertically",code:e.verticalCode},{default:i(()=>[t(C,{vertical:""},{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{completed:""},{default:i(()=>[t(u,{name:"credit card"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(u,{name:"info"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(k,{title:"Description",description:"A step can contain a description",code:e.descriptionCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Icon",description:"A step can contain an icon",code:e.iconCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Link",description:"A step can link",code:e.linkCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{link:""},{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(k,{title:"Active",description:"A step can be highlighted as active",code:e.activeCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Completed",description:"A step can show that a user has completed it",code:e.completedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(u,{name:"payment"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Disabled",description:"A step can show that it cannot be selected",code:e.disabledCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{disabled:""},{default:i(()=>[l("Billing")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(k,{title:"Stackable",description:"A step can stack vertically only on smaller screens",code:e.stackableCode},{default:i(()=>[t(C,{stackable:"tablet"},{default:i(()=>[t(b,null,{default:i(()=>[t(u,{name:"plane"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(u,{name:"dollar"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(u,{name:"info circle"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Unstackable",description:"A step can prevent itself from stacking on mobile",code:e.unstackableCode},{default:i(()=>[t(C,{unstackable:""},{default:i(()=>[t(b,null,{default:i(()=>[t(u,{name:"plane"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(u,{name:"dollar"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(u,{name:"info circle"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Fluid",description:"A fluid step takes up the width of its container",code:e.fluidCode},{default:i(()=>[t(B,{columns:2},{default:i(()=>[t(x,null,{default:i(()=>[t(C,{fluid:"",vertical:""},{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(u,{name:"dollar"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(x,null,{default:i(()=>[q$]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Attached",description:"Steps can be attached to other elements",code:e.attachedCode},{default:i(()=>[S("div",null,[t(C,{attached:"top"},{default:i(()=>[t(b,null,{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{attached:""},{default:i(()=>[U$]),_:1}),t(C,{attached:"bottom"},{default:i(()=>[t(b,null,{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(k,{title:"Evenly Divided",description:"Steps can be divided evenly inside their parent",code:e.evenlyDividedCode},{default:i(()=>[t(C,{widths:2},{default:i(()=>[t(b,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Billing")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(u,{name:"info"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Size",description:"Steps can have different sizes",code:e.sizeCode},{default:i(()=>[t(C,{size:"mini"},{default:i(()=>[t(b,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Billing")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(u,{name:"info"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Inverted",description:"A step's color can be inverted",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(C,{inverted:"",vertical:""},{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{completed:""},{default:i(()=>[t(u,{name:"credit card"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(u,{name:"info"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[l("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const J$=$e(j$,[["render",Y$]]),W$=`<template>
  <SuiBreadcrumb
    :sections="[
      { content: 'Home', link: true },
      { content: 'Store', link: true },
      { content: 'T-Shirt', active: true }
    ]"
    icon="right angle"
  />
</template>`,K$={__name:"BreadcrumbDoc",setup(e){return(a,n)=>($(),D(R,{label:"Breadcrumb",code:W$},{description:i(()=>[l(" A standard breadcrumb ")]),example:i(()=>[t(d(Wt),{sections:[{content:"Home",link:!0},{content:"Store",link:!0},{content:"T-Shirt",active:!0}],icon:"right angle"})]),_:1}))}},X$=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection link>Registration</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Personal Information</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,Q$={__name:"DividerDoc",setup(e){return(a,n)=>($(),D(R,{label:"Divider",code:X$},{description:i(()=>[l(" A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text. ")]),example:i(()=>[t(d(Wt),null,{default:i(()=>[t(d(it),{link:""},{default:i(()=>[l("Home")]),_:1}),t(d(kt),null,{default:i(()=>[l(" / ")]),_:1}),t(d(it),{link:""},{default:i(()=>[l("Registration")]),_:1}),t(d(kt),null,{default:i(()=>[l(" / ")]),_:1}),t(d(it),{active:""},{default:i(()=>[l("Personal Information")]),_:1})]),_:1})]),_:1}))}},Z$=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Search</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,eB={__name:"SectionDoc",setup(e){return(a,n)=>($(),D(R,{label:"Section",code:Z$},{description:i(()=>[l(" A breadcrumb can contain sections that can either be formatted as a link or text ")]),example:i(()=>[t(d(Wt),null,{default:i(()=>[t(d(it),{link:""},{default:i(()=>[l("Home")]),_:1}),t(d(kt),null,{default:i(()=>[l(" / ")]),_:1}),t(d(it),{active:""},{default:i(()=>[l("Search")]),_:1})]),_:1})]),_:1}))}},tB=S("a",{href:"#"},"paper towels",-1),iB=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Search for: <a href="#">paper towels</a></SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,aB={__name:"LinkDoc",setup(e){return(a,n)=>($(),D(R,{label:"Link",code:iB},{description:i(()=>[l(" A section may be linkable or contain a link ")]),example:i(()=>[t(d(Wt),null,{default:i(()=>[t(d(it),{link:""},{default:i(()=>[l("Home")]),_:1}),t(d(kt),null,{default:i(()=>[l(" / ")]),_:1}),t(d(it),{active:""},{default:i(()=>[l("Search for: "),tB]),_:1})]),_:1})]),_:1}))}},lB=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Products</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Paper Towels</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,nB={__name:"ActiveDoc",setup(e){return(a,n)=>($(),D(R,{label:"Active",code:lB},{description:i(()=>[l(" A section can be active ")]),example:i(()=>[t(d(Wt),null,{default:i(()=>[t(d(it),{link:""},{default:i(()=>[l("Products")]),_:1}),t(d(kt),null,{default:i(()=>[l(" / ")]),_:1}),t(d(it),{active:""},{default:i(()=>[l("Paper Towels")]),_:1})]),_:1})]),_:1}))}},oB=S("br",null,null,-1),sB=`<template>
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
</template>`,rB={__name:"InvertedDoc",setup(e){return(a,n)=>($(),D(R,{label:"Inverted",code:sB},{description:i(()=>[l(" A breadcrumb can be inverted ")]),example:i(()=>[t(d(Le),{inverted:""},{default:i(()=>[t(d(Wt),{inverted:""},{default:i(()=>[t(d(it),{link:""},{default:i(()=>[l("Home")]),_:1}),t(d(kt),null,{default:i(()=>[l(" / ")]),_:1}),t(d(it),{link:""},{default:i(()=>[l("Registration")]),_:1}),t(d(kt),null,{default:i(()=>[l(" / ")]),_:1}),t(d(it),{active:""},{default:i(()=>[l("Personal Information")]),_:1})]),_:1}),oB,t(d(Wt),{inverted:""},{default:i(()=>[t(d(it),null,{default:i(()=>[l("Home")]),_:1}),t(d(kt),null,{default:i(()=>[l(" / ")]),_:1}),t(d(it),null,{default:i(()=>[l("Registration")]),_:1}),t(d(kt),null,{default:i(()=>[l(" / ")]),_:1}),t(d(it),{active:""},{default:i(()=>[l("Personal Information")]),_:1})]),_:1})]),_:1})]),_:1}))}},uB=`<template>
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
</template>`,cB={__name:"SizeDoc",setup(e){const a=["mini","tiny","small","large","big","huge","massive"];return(n,o)=>($(),D(R,{label:"Size",code:uB},{description:i(()=>[l(" A breadcrumb can vary in size ")]),example:i(()=>[($(),he(Ce,null,et(a,r=>($(),he(Ce,{key:r},[t(d(Wt),{size:r},{default:i(()=>[t(d(it),{link:""},{default:i(()=>[l("Home")]),_:1}),t(d(kt),null,{default:i(()=>[l(" / ")]),_:1}),t(d(it),{link:""},{default:i(()=>[l("Registration")]),_:1}),t(d(kt),null,{default:i(()=>[l(" / ")]),_:1}),t(d(it),{active:""},{default:i(()=>[l("Personal Information")]),_:1})]),_:2},1032,["size"]),t(d(Ve),{hidden:""})],64))),64))]),_:1}))}},dB={__name:"Breadcrumb",setup(e){const a=[{id:"breadcrumb",label:"Breadcrumb",category:"Types",component:K$},{id:"divider",label:"Divider",category:"Content",component:Q$},{id:"section",label:"Section",category:"Content",component:eB},{id:"link",label:"Link",category:"Content",component:aB},{id:"active",label:"Active",category:"States",component:nB},{id:"inverted",label:"Inverted",category:"Variations",component:rB},{id:"size",label:"Size",category:"Variations",component:cB}];return(n,o)=>($(),D(_t,{title:"Breadcrumb",description:"A standard breadcrumb","component-docs":a}))}},mB=`<template>
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
</template>`,pB={__name:"FormDoc",setup(e){return(a,n)=>($(),D(R,{label:"Form",code:mB},{description:i(()=>[l(" A Form ")]),example:i(()=>[t(d(Et),null,{default:i(()=>[t(d(at),{label:"First Name",placeholder:"First Name"}),t(d(at),{label:"Last Name",placeholder:"Last Name"}),t(d(at),null,{default:i(()=>[t(d(Mo),{label:"I agree to the Terms and Conditions"})]),_:1}),t(d(F),{type:"submit"},{default:i(()=>[l("Submit")]),_:1})]),_:1})]),_:1}))}},fB=`<template>
  <SuiForm>
    <SuiFormField
      label="User Input"
    />
  </SuiForm>
</template>`,gB={__name:"FieldDoc",setup(e){return(a,n)=>($(),D(R,{label:"Field",code:fB},{description:i(()=>[l(" A field is a form element containing a label and an input ")]),example:i(()=>[t(d(Et),null,{default:i(()=>[t(d(at),{label:"User Input"})]),_:1})]),_:1}))}},hB=`<template>
  <SuiForm>
    <SuiFormGroup>
      <SuiFormField label="First Name" />
      <SuiFormField label="Middle Name" />
      <SuiFormField label="Last Name" />
    </SuiFormGroup>
  </SuiForm>
</template>`,_B={__name:"FieldsDoc",setup(e){return(a,n)=>($(),D(R,{label:"Fields",code:hB},{description:i(()=>[l(" A set of fields can appear grouped together ")]),example:i(()=>[t(d(Et),null,{default:i(()=>[t(d(Xl),null,{default:i(()=>[t(d(at),{label:"First Name"}),t(d(at),{label:"Middle Name"}),t(d(at),{label:"Last Name"})]),_:1})]),_:1})]),_:1}))}},bB=`<template>
  <SuiForm>
    <SuiFormTextarea label="Text" />
    <SuiFormTextarea label="Short Text" :rows="2" />
  </SuiForm>
</template>`,vB={__name:"TextAreaDoc",setup(e){return(a,n)=>($(),D(R,{label:"TextArea",code:bB},{description:i(()=>[l(" A textarea can be used to allow for extended user input. ")]),example:i(()=>[t(d(Et),null,{default:i(()=>[t(d(Ql),{label:"Text"}),t(d(Ql),{label:"Short Text",rows:2})]),_:1})]),_:1}))}},yB=`<template>
  <SuiForm loading>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,SB={__name:"LoadingDoc",setup(e){return(a,n)=>($(),D(R,{label:"Loading",code:yB},{description:i(()=>[l(" If a form is in loading state, it will automatically show a loading indicator. ")]),example:i(()=>[t(d(Et),{loading:""},{default:i(()=>[t(d(at),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(d(F),{type:"submit"},{default:i(()=>[l("Submit")]),_:1})]),_:1})]),_:1}))}},wB=`<template>
  <SuiForm success>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      success
      header='Form Completed'
      content="You're all signed up for the newsletter"
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,CB={__name:"SuccessDoc",setup(e){return(a,n)=>($(),D(R,{label:"Success",code:wB},{description:i(()=>[l(" If a form is in an success state, it will automatically show any success message blocks. ")]),example:i(()=>[t(d(Et),{success:""},{default:i(()=>[t(d(at),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(d(rl),{success:"",header:"Form Completed",content:"You're all signed up for the newsletter"}),t(d(F),{type:"submit"},{default:i(()=>[l("Submit")]),_:1})]),_:1})]),_:1}))}},AB=`<template>
  <SuiForm error>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      error
      header='Action Forbidden'
      content='You can only sign up for an account once with a given e-mail address.'
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,kB={__name:"ErrorDoc",setup(e){return(a,n)=>($(),D(R,{label:"Error",code:AB},{description:i(()=>[l(" If a form is in an error state, it will automatically show any error message blocks. ")]),example:i(()=>[t(d(Et),{error:""},{default:i(()=>[t(d(at),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(d(rl),{error:"",header:"Action Forbidden",content:"You can only sign up for an account once with a given e-mail address."}),t(d(F),{type:"submit"},{default:i(()=>[l("Submit")]),_:1})]),_:1})]),_:1}))}},xB=`<template>
  <SuiForm warning>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      warning
      header='Could you check something!'
      content='That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.'
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,$B={__name:"WarningDoc",setup(e){return(a,n)=>($(),D(R,{label:"Warning",code:xB},{description:i(()=>[l(" If a form is in warning state, it will automatically show any warning message block. ")]),example:i(()=>[t(d(Et),{warning:""},{default:i(()=>[t(d(at),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(d(rl),{warning:"",header:"Could you check something!",content:"That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail."}),t(d(F),{type:"submit"},{default:i(()=>[l("Submit")]),_:1})]),_:1})]),_:1}))}},BB=`<template>
  <SuiForm>
    <SuiFormGroup>
      <SuiFormField disabled label="First name" placeholder="Read only" />
      <SuiFormField disabled label="Last name" placeholder="Disabled" />
    </SuiFormGroup>
  </SuiForm>
</template>`,TB={__name:"DisabledDoc",setup(e){return(a,n)=>($(),D(R,{label:"Disabled",code:BB},{description:i(()=>[l(" Individual fields may be disabled ")]),example:i(()=>[t(d(Et),null,{default:i(()=>[t(d(Xl),null,{default:i(()=>[t(d(at),{disabled:"",label:"First name",placeholder:"Read only"}),t(d(at),{disabled:"",label:"Last name",placeholder:"Disabled"})]),_:1})]),_:1})]),_:1}))}},LB={__name:"Form",setup(e){const a=[{id:"form",label:"Form",category:"Types",component:pB},{id:"field",label:"Field",category:"Content",component:gB},{id:"fields",label:"Fields",category:"Content",component:_B},{id:"textarea",label:"TextArea",category:"Content",component:vB},{id:"loading",label:"Loading",category:"Form States",component:SB},{id:"success",label:"Success",category:"Form States",component:CB},{id:"error",label:"Error",category:"Form States",component:kB},{id:"warning",label:"Warning",category:"Form States",component:$B},{id:"disabled",label:"Disabled",category:"Field States",component:TB}];return(n,o)=>($(),D(_t,{title:"Form",description:"A form displays a set of related user input fields in a structured way","component-docs":a}))}},DB=z({name:"DocPageHeader",props:{title:String,sub:String}}),IB={class:"intro",style:{padding:"2rem"}};function EB(e,a,n,o,r,c){const p=y("sui-header-subheader"),f=y("sui-header"),s=y("sui-divider"),u=y("sui-icon"),g=y("sui-menu-item"),m=y("sui-menu"),h=y("sui-container"),v=y("sui-segment");return $(),D(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",IB,[t(f,{as:"h1"},{default:i(()=>[l(Te(e.title)+" ",1),t(p,null,{default:i(()=>[l(Te(e.sub),1)]),_:1})]),_:1}),t(s,{hidden:""}),t(m,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1})}const tt=$e(DB,[["render",EB]]),ue="/vue-fomantic-ui/images/wireframe/image.png",Zt="/vue-fomantic-ui/images/wireframe/media-paragraph.png",ze="/vue-fomantic-ui/images/wireframe/paragraph.png",Cc="/vue-fomantic-ui/images/wireframe/centered-paragraph.png",RB=z({name:"GridDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{numbers:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],gridCode:`<sui-grid>
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
</sui-grid>`}}}),zB=S("br",null,null,-1);function FB(e,a,n,o,r,c){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-image"),u=y("sui-grid-column"),g=y("sui-grid"),m=y("doc-example"),h=y("sui-grid-row"),v=y("sui-segment"),b=y("sui-divider"),C=y("sui-menu-item"),k=y("sui-menu"),T=y("sui-container");return $(),he("div",null,[t(p,{title:"Grid",sub:"A grid is used to harmonize negative space in a layout"}),t(T,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(m,{title:"Grid",description:"A basic grid",code:e.gridCode},{default:i(()=>[t(g,null,{default:i(()=>[($(!0),he(Ce,null,et(e.numbers,_=>($(),D(u,{key:_},{default:i(()=>[t(s,{src:ue})]),_:2},1024))),128))]),_:1})]),_:1},8,["code"]),t(m,{title:"Divided",description:"A grid can have dividers between its columns",code:e.dividedCode},{default:i(()=>[t(g,{columns:3,divided:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:Zt})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:Zt})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:Zt})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:Zt})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:Zt})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:Zt})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Vertical Divided",description:"A grid can have dividers between rows",code:e.verticalDividedCode},{default:i(()=>[t(g,{divided:"vertically"},{default:i(()=>[t(h,{columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(h,{columns:3},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Celled",description:"A grid can have rows divided into cells",code:e.celledCode},{default:i(()=>[t(g,{celled:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,{width:3},{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,{width:13},{default:i(()=>[t(s,{src:Cc})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{width:3},{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,{width:10},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{width:3},{default:i(()=>[t(s,{src:ue})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Internally Celled",description:"A grid can have rows divisions only between internal rows",code:e.internallyCelledCode},{default:i(()=>[t(g,{celled:"internally"},{default:i(()=>[t(h,null,{default:i(()=>[t(u,{width:3},{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,{width:13},{default:i(()=>[t(s,{src:Cc})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{width:3},{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,{width:10},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{width:3},{default:i(()=>[t(s,{src:ue})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(m,{title:"Rows",description:"A row is a horizontal grouping of columns",code:e.rowsCode},{default:i(()=>[t(g,{columns:3},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Columns",description:"Columns each contain gutters giving them equal spacing from other columns",code:e.columnsCode},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{width:8},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{width:8},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{width:8},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{width:8},{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(m,{title:"Floated",description:"A column can sit flush against the left or right edge of a row",code:e.floatedCode},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{floated:"left",width:5},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{floated:"right",width:5},{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Column Width",description:"A column can vary in width taking up more than a single grid column",code:e.columnWidthCode},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{width:4},{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,{width:9},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{width:3},{default:i(()=>[t(s,{src:Zt})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Column Count",description:"A grid can have a different number of columns per row",code:e.columnCountCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,{columns:3},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1})]),_:1}),t(h,{columns:4},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Equal Width",description:"Equal Width",code:e.equalWidthCode},{default:i(()=>[t(g,{columns:"equal"},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("1")]),_:1})]),_:1}),t(u,{width:8},{default:i(()=>[t(v,null,{default:i(()=>[l("2")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("3")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Stretched",description:"A row can stretch its contents to take up the entire column height",code:e.stretchedCode},{default:i(()=>[t(g,{columns:3,divided:""},{default:i(()=>[t(h,{stretched:""},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("1")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("1")]),_:1}),t(v,null,{default:i(()=>[l("2")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("1")]),_:1}),t(v,null,{default:i(()=>[l("2")]),_:1}),t(v,null,{default:i(()=>[l("3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Padded",description:"A grid can preserve its vertical and horizontal gutters on first and last columns",code:e.paddedCode},{default:i(()=>[S("div",null,[t(b),t(g,{padded:"",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})])]),_:1},8,["code"]),t(m,{title:"Relaxed",description:"A grid can increase its gutters to allow for more negative space",code:e.relaxedCode},{default:i(()=>[t(g,{relaxed:"",columns:4},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Colored",description:"A row or column can be colored",code:e.coloredCode},{default:i(()=>[t(g,{padded:"",columns:5},{default:i(()=>[t(u,{color:"red"},{default:i(()=>[l("Red")]),_:1}),t(u,{color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(u,{color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(u,{color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(u,{color:"green"},{default:i(()=>[l("Green")]),_:1}),t(u,{color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(u,{color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(u,{color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(u,{color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(u,{color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(u,{color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(u,{color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(u,{color:"black"},{default:i(()=>[l("Black")]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Centered",description:"A grid can have its columns centered",code:e.centeredCode},{default:i(()=>[t(g,{centered:"",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(h,{centered:"",columns:4},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Text Alignment",description:"A grid, row, or column can specify its text alignment",code:e.textAlignCode},{default:i(()=>[t(g,{textAlign:"center",columns:3},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(k,{vertical:"",fluid:""},{default:i(()=>[t(C,{header:""},{default:i(()=>[l("Cats")]),_:1})]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(k,{vertical:"",fluid:""},{default:i(()=>[t(C,{header:""},{default:i(()=>[l("Dogs")]),_:1}),t(C,null,{default:i(()=>[l("Poodle")]),_:1}),t(C,null,{default:i(()=>[l("Cockerspaniel")]),_:1})]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(k,{vertical:"",fluid:""},{default:i(()=>[t(C,{header:""},{default:i(()=>[l("Monkeys")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Vertical Alignment",description:"A grid, row, or column can specify its vertical alignment to have all its columns vertically centered",code:e.verticalAlignCode},{default:i(()=>[t(g,{verticalAlign:"middle",columns:4,centered:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue}),zB,t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Responsive Variations")]),_:1}),t(m,{title:"Doubling",description:"A grid can double its column width on tablet and mobile sizes",code:e.doublingCode},{default:i(()=>[t(g,{doubling:"",columns:5},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ue})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"stackable",description:"A grid can have its columns stack on-top of each other after reaching mobile breakpoints",code:e.stackableCode},{default:i(()=>[t(g,{stackable:"",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Reversed",description:"A grid or row can specify that its columns should reverse order at different device sizes",code:e.reversedCode},{default:i(()=>[t(g,{reversed:"computer vertically"},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Computer Row 3")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Computer Row 2")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Computer Row 1")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Device Visibility",description:"A columns or row can appear only for a specific device, or screen sizes",code:e.deviceVisibilityCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,{only:"large screen",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Large Screen")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Large Screen")]),_:1})]),_:1})]),_:1}),t(h,{only:"widescreen",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Widescreen")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Widescreen")]),_:1})]),_:1})]),_:1}),t(h,{only:"mobile",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Mobile")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Mobile")]),_:1})]),_:1})]),_:1}),t(h,{columns:3},{default:i(()=>[t(u,{only:"computer"},{default:i(()=>[t(v,null,{default:i(()=>[l("Computer")]),_:1})]),_:1}),t(u,{only:"mobile"},{default:i(()=>[t(v,null,{default:i(()=>[l("Tablet and Mobile")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("All Sizes")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("All Sizes")]),_:1})]),_:1})]),_:1}),t(h,{only:"computer",columns:4},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Computer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Computer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Computer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Computer")]),_:1})]),_:1})]),_:1}),t(h,{only:"tablet",columns:3},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Tablet")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Tablet")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Tablet")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Responsive Width",description:"A column can specify a width for a specific device",code:e.responsiveWidthCode},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const PB=$e(RB,[["render",FB]]),MB="/vue-fomantic-ui/images/logo.png",VB=z({name:"MenuDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{menuCode:`<sui-menu>
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
</sui-menu>`}}}),HB=S("p",null,"Check out our new promotions",-1),NB=S("p",null,"Check out our collection of coupons",-1),OB=S("p",null,"Visit our rebate forum for information on claiming rebates",-1),jB=S("img",{src:MB},null,-1);function GB(e,a,n,o,r,c){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-menu-item"),u=y("sui-menu"),g=y("doc-example"),m=y("sui-input"),h=y("sui-menu-menu"),v=y("sui-label"),b=y("sui-button"),C=y("sui-dropdown-item"),k=y("sui-dropdown-menu"),T=y("sui-dropdown"),_=y("sui-icon"),w=y("sui-segment"),x=y("sui-container");return $(),he("div",null,[t(p,{title:"Menu",sub:"A menu displays grouped navigation actions"}),t(x,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(g,{title:"Menu",description:"A menu",code:e.menuCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Editorials")]),_:1}),t(s,null,{default:i(()=>[l("Reviews")]),_:1}),t(s,null,{default:i(()=>[l("Upcoming Events")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Secondary Menu",description:"A menu can adjust its appearance to de-emphasize its contents",code:e.secondaryMenuCode},{default:i(()=>[t(u,{secondary:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[l("Home")]),_:1}),t(s,null,{default:i(()=>[l("Messages")]),_:1}),t(s,null,{default:i(()=>[l("Friends")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(s,null,{default:i(()=>[t(m,{icon:"search",placeholder:"Search..."})]),_:1}),t(s,null,{default:i(()=>[l("logout")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Pointing",description:"A menu can point to show its relationship to nearby content",code:e.pointingCode},{default:i(()=>[t(u,{pointing:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[l("Home")]),_:1}),t(s,null,{default:i(()=>[l("Messages")]),_:1}),t(s,null,{default:i(()=>[l("Friends")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(s,null,{default:i(()=>[t(m,{transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Tabular",description:"A menu can be formatted to show tabs of information",code:e.tabularCode},{default:i(()=>[t(u,{tabular:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[l("Bio")]),_:1}),t(s,null,{default:i(()=>[l("Photos")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Text",description:"A menu can be formatted for text content",code:e.textCode},{default:i(()=>[t(u,{text:""},{default:i(()=>[t(s,{header:""},{default:i(()=>[l("Sort By")]),_:1}),t(s,{active:""},{default:i(()=>[l("Closest")]),_:1}),t(s,null,{default:i(()=>[l("Most Comments")]),_:1}),t(s,null,{default:i(()=>[l("Most Popular")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Vertical Menu",description:"A vertical menu displays elements vertically",code:e.verticalMenuCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(s,{active:"",color:"teal"},{default:i(()=>[l(" Inbox "),t(v,{color:"teal",pointing:"left"},{default:i(()=>[l("1")]),_:1})]),_:1}),t(s,null,{default:i(()=>[l(" Spam "),t(v,null,{default:i(()=>[l("51")]),_:1})]),_:1}),t(s,null,{default:i(()=>[l(" Updates "),t(v,null,{default:i(()=>[l("1")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(m,{transparent:"",icon:"search",placeholder:"Search mail..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Pagination",description:"A pagination menu is specially formatted to present links to pages of content",code:e.paginationCode},{default:i(()=>[t(u,{pagination:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[l("1")]),_:1}),t(s,{disabled:""},{default:i(()=>[l("...")]),_:1}),t(s,null,{default:i(()=>[l("10")]),_:1}),t(s,null,{default:i(()=>[l("11")]),_:1}),t(s,null,{default:i(()=>[l("12")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(g,{title:"Header",description:"A menu item may include a header or may itself be a header",code:e.headerCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{header:""},{default:i(()=>[l("Our Company")]),_:1}),t(s,null,{default:i(()=>[l("About us")]),_:1}),t(s,null,{default:i(()=>[l("Jobs")]),_:1}),t(s,null,{default:i(()=>[l("Locations")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"textContentCode",description:"A vertical menu item can include any type of text content",code:e.textContentCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(s,null,{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[l("Promotions")]),_:1}),HB]),_:1}),t(s,null,{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[l("Coupons")]),_:1}),NB]),_:1}),t(s,null,{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[l("Rebates")]),_:1}),OB]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Input",description:"A menu item can contain an input inside of it",code:e.inputCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{as:"div"},{default:i(()=>[t(m,{icon:"search",placeholder:"Search..."})]),_:1}),t(s,{position:"right",as:"div"},{default:i(()=>[t(m,{placeholder:"Navigate to ..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Button",description:"A menu item can contain a button inside of it",code:e.buttonCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{as:"div"},{default:i(()=>[t(b,{color:"primary"},{default:i(()=>[l("Sign up")]),_:1})]),_:1}),t(s,{as:"div"},{default:i(()=>[t(b,null,{default:i(()=>[l("Log in")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Link Item",description:"A menu may contain a link item, or an item formatted as if it is a link",code:e.linkItemCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(s,{href:"https://google.com"},{default:i(()=>[l("Visit Google")]),_:1}),t(s,{link:"",as:"div"},{default:i(()=>[l("Javascript Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Dropdown Item",description:"An item may contain a nested menu in a dropdown",code:e.dropdownItemCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(T,{item:"",text:"Categories"},{default:i(()=>[t(k,null,{default:i(()=>[t(C,{text:"Electoronics"}),t(C,{text:"Automotive"}),t(C,{text:"Home"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Menu",description:"A menu may contain another menu group in the same level as menu items",code:e.menuContentCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Browse")]),_:1}),t(s,null,{default:i(()=>[l("Submit")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(s,null,{default:i(()=>[l("Sign up")]),_:1}),t(s,null,{default:i(()=>[l("Help")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Sub Menu",description:"A menu item may contain another menu nested inside that acts as a grouped sub-menu",code:e.subMenuCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(s,{as:"div"},{default:i(()=>[t(m,{placeholder:"Search..."})]),_:1}),t(s,{as:"div"},{default:i(()=>[l(" Home "),t(h,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Search")]),_:1}),t(s,null,{default:i(()=>[l("Add")]),_:1}),t(s,null,{default:i(()=>[l("Remove")]),_:1})]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"grid layout"}),l(" Browse ")]),_:1}),t(s,null,{default:i(()=>[l("Messages")]),_:1}),t(T,{item:"",text:"More"},{default:i(()=>[t(k,null,{default:i(()=>[t(C,{icon:"edit",text:"Edit Profile"}),t(C,{icon:"globe",text:"Choose Language"}),t(C,{icon:"settings",text:"Account Settings"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(g,{title:"Hover",description:"A menu item can be hovered",code:e.hoverCode},{default:i(()=>[t(u,{compact:""},{default:i(()=>[t(s,null,{default:i(()=>[l("A link")]),_:1}),t(s,{as:"div",link:""},{default:i(()=>[l("div Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Active",description:"A menu item can be active",code:e.activeCode},{default:i(()=>[t(u,{compact:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[l("Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(g,{title:"Stackable",description:"A menu can stack at mobile resolutions",code:e.stackableCode},{default:i(()=>[t(u,{stackable:""},{default:i(()=>[t(s,{as:"div"},{default:i(()=>[jB]),_:1}),t(s,null,{default:i(()=>[l("Features")]),_:1}),t(s,null,{default:i(()=>[l("Testimonials")]),_:1}),t(s,null,{default:i(()=>[l("Sign in")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Inverted",description:"A menu may have its colors inverted to show greater contrast",code:e.invertedCode},{default:i(()=>[t(u,{inverted:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[l("Home")]),_:1}),t(s,null,{default:i(()=>[l("Messages")]),_:1}),t(s,null,{default:i(()=>[l("Friends")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored",description:"Additional colors can be specified",code:e.coloredCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{active:"",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(s,{color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(s,{color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(s,{color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(s,{color:"green"},{default:i(()=>[l("Green")]),_:1}),t(s,{color:"teal"},{default:i(()=>[l("Teal")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Icons",description:"A menu may have just icons",code:e.iconsCode},{default:i(()=>[t(u,{icon:""},{default:i(()=>[t(s,null,{default:i(()=>[t(_,{name:"gamepad"})]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video camera"})]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video play"})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Labeled Icon",description:"A menu may have labeled icons",code:e.labeledIconCode},{default:i(()=>[t(u,{icon:"labeled"},{default:i(()=>[t(s,null,{default:i(()=>[t(_,{name:"gamepad"}),l(" Games ")]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video camera"}),l(" Channels ")]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video play"}),l(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Fluid",description:"A vertical menu may take the size of its container",code:e.fluidCode},{default:i(()=>[t(u,{fluid:"",vertical:""},{default:i(()=>[t(s,null,{default:i(()=>[l("Run")]),_:1}),t(s,null,{default:i(()=>[l("Walk")]),_:1}),t(s,null,{default:i(()=>[l("Bike")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Compact",description:"A menu can take up only the space necessary to fit its content",code:e.compactCode},{default:i(()=>[t(u,{compact:""},{default:i(()=>[t(s,null,{default:i(()=>[t(_,{name:"gamepad"}),l(" Games ")]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video camera"}),l(" Channels ")]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video play"}),l(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Evenly Divided",description:"A menu may divide its items evenly",code:e.evenlyDividedCode},{default:i(()=>[t(u,{fluid:"",widths:3},{default:i(()=>[t(s,null,{default:i(()=>[l("Buy")]),_:1}),t(s,null,{default:i(()=>[l("Sell")]),_:1}),t(s,null,{default:i(()=>[l("Rent")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Attached",description:"A menu may be attached to other content segments",code:e.attachedCode},{default:i(()=>[S("div",null,[t(u,{attached:"top",tabular:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[l("tab1")]),_:1}),t(s,null,{default:i(()=>[l("tab2")]),_:1})]),_:1}),t(w,{attached:"bottom"},{default:i(()=>[l(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. ")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Size",description:"A menu can vary in size",code:e.sizeCode},{default:i(()=>[t(u,{size:"mini"},{default:i(()=>[t(s,{active:""},{default:i(()=>[l("Home")]),_:1}),t(s,null,{default:i(()=>[l("Messages")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(T,{item:"",text:"Language"},{default:i(()=>[t(k,null,{default:i(()=>[t(C,null,{default:i(()=>[l("English")]),_:1}),t(C,null,{default:i(()=>[l("Russian")]),_:1}),t(C,null,{default:i(()=>[l("Spanish")]),_:1})]),_:1})]),_:1}),t(s,{as:"div"},{default:i(()=>[t(b,{color:"primary"},{default:i(()=>[l("Sign up")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Fitted",description:"A menu item or menu can remove element padding, vertically or horizontally",code:e.fittedCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{fitted:""},{default:i(()=>[l("No padding whatsoever")]),_:1}),t(s,{fitted:"horizontally"},{default:i(()=>[l("No horizontal padding")]),_:1}),t(s,{fitted:"vertically"},{default:i(()=>[l("No vertical padding")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Borderless",description:"A menu item or menu can have no borders",code:e.borderlessCode},{default:i(()=>[t(u,{borderless:""},{default:i(()=>[t(s,null,{default:i(()=>[l("1")]),_:1}),t(s,null,{default:i(()=>[l("2")]),_:1}),t(s,null,{default:i(()=>[l("3")]),_:1}),t(s,null,{default:i(()=>[l("4")]),_:1}),t(s,null,{default:i(()=>[l("5")]),_:1}),t(s,null,{default:i(()=>[l("6")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const qB=$e(VB,[["render",GB]]),UB=z({name:"MessageDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{messageCode:`<sui-message>
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
</div>`}}}),YB=S("p",null,"We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.",-1),JB=S("p",null,"Get the best news in your e-mail every day.",-1),WB=S("p",null,"You can't see me",-1),KB=S("p",null,"You can always see me",-1),XB=S("p",null,"Way to go!",-1),QB=S("p",null,"Get all the best inventions in your e-mail every day. Sign up now!",-1),ZB=S("a",{href:"#"},"Login here",-1),eT=S("p",null,[l("Go to your "),S("b",null,"special offers"),l(" page to see now.")],-1),tT=S("p",null,"That offer has expired",-1);function iT(e,a,n,o,r,c){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-message-header"),u=y("sui-message"),g=y("doc-example"),m=y("sui-message-item"),h=y("sui-message-list"),v=y("sui-icon"),b=y("sui-message-content"),C=y("sui-form-field"),k=y("sui-form-group"),T=y("sui-button"),_=y("sui-form"),w=y("sui-container");return $(),he("div",null,[t(p,{title:"Message",sub:"A message displays information that explains nearby content"}),t(w,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(g,{title:"Message",description:"A basic message",code:e.messageCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Changes in Service")]),_:1}),YB]),_:1})]),_:1},8,["code"]),t(g,{title:"List Message",description:"A message with a list",code:e.listMessageCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("New Site Features")]),_:1}),t(h,null,{default:i(()=>[t(m,null,{default:i(()=>[l("You can now have cover images on blog pages")]),_:1}),t(m,null,{default:i(()=>[l("Drafts will now auto-save while writing")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Icon Message",description:"A message can contain an icon",code:e.iconMessageCode},{default:i(()=>[t(u,{icon:""},{default:i(()=>[t(v,{name:"inbox"}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[l(" Have you heard about our mailing list? ")]),_:1}),JB]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(g,{title:"Hidden",description:"A message can be hidden",code:e.hiddenCode},{default:i(()=>[t(u,{hidden:""},{default:i(()=>[WB]),_:1})]),_:1},8,["code"]),t(g,{title:"Visible",description:"A message can be set to visible to force itself to be shown",code:e.visibleCode},{default:i(()=>[t(u,{visible:""},{default:i(()=>[KB]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(g,{title:"Floating",description:"A message can float above content that it is related to",code:e.floatingCode},{default:i(()=>[t(u,{floating:""},{default:i(()=>[XB]),_:1})]),_:1},8,["code"]),t(g,{title:"Compact",description:"A message can only take up the width of its content",code:e.compactCode},{default:i(()=>[t(u,{compact:""},{default:i(()=>[QB]),_:1})]),_:1},8,["code"]),t(g,{title:"Attached",description:"A message can be formatted to attach itself to other content",code:e.attachedCode},{default:i(()=>[S("div",null,[t(u,{attached:"",header:"Welcome to our site!",content:"Fill out the form below to sign-up for a new account"}),t(_,{class:"attached fluid segment"},{default:i(()=>[t(k,{widths:"equal"},{default:i(()=>[t(C,{label:"First Name",placeholder:"First Name"}),t(C,{label:"Last Name",placeholder:"Last Name"})]),_:1}),t(C,{label:"Username",placeholder:"Username"}),t(C,{label:"Password",placeholder:"Password"}),t(T,{color:"primary"},{default:i(()=>[l("Submit")]),_:1})]),_:1}),t(u,{attached:"bottom",warning:""},{default:i(()=>[t(v,{name:"help"}),l(" Already signed up? "),ZB,l(" instead. ")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Warning",description:"A message may be formatted to display warning messages",code:e.warningCode},{default:i(()=>[t(u,{warning:""},{default:i(()=>[t(v,{name:"close"}),t(s,null,{default:i(()=>[l(" You must register before you can do that! ")]),_:1}),l(" Visit our registration page, then try again ")]),_:1})]),_:1},8,["code"]),t(g,{title:"Info",description:"A message may be formatted to display information",code:e.infoCode},{default:i(()=>[t(u,{info:""},{default:i(()=>[t(s,null,{default:i(()=>[l("Was this what you wanted?")]),_:1}),t(h,null,{default:i(()=>[l("It's good to see you again.")]),_:1}),t(h,null,{default:i(()=>[l("Did you know it's been a while?")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Positive / Success",description:"A message may be formatted to display a positive message",code:e.positiveSuccessCode},{default:i(()=>[t(u,{positive:""},{default:i(()=>[t(s,null,{default:i(()=>[l("You are eligible for a reward")]),_:1}),eT]),_:1})]),_:1},8,["code"]),t(g,{title:"Negative / Error",description:"A message may be formatted to display a negative message",code:e.negativeErrorCode},{default:i(()=>[t(u,{negative:""},{default:i(()=>[t(v,{name:"close"}),t(s,null,{default:i(()=>[l("We're sorry we can't apply that discount")]),_:1}),tT]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored",description:"A message can be formatted to be different colors",code:e.coloredCode},{default:i(()=>[S("div",null,[t(u,{color:"red"},{default:i(()=>[l("Red")]),_:1}),t(u,{color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(u,{color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(u,{color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(u,{color:"green"},{default:i(()=>[l("Green")]),_:1}),t(u,{color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(u,{color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(u,{color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(u,{color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(u,{color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(u,{color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(u,{color:"black"},{default:i(()=>[l("Black")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Size",description:"A message can have different sizes",code:e.sizeCode},{default:i(()=>[S("div",null,[t(u,{size:"mini"},{default:i(()=>[l("This is a mini message.")]),_:1}),t(u,{size:"large"},{default:i(()=>[l("This is a large message.")]),_:1}),t(u,{size:"massive"},{default:i(()=>[l("This is a massive message.")]),_:1})])]),_:1},8,["code"])]),_:1})])}const aT=$e(UB,[["render",iT]]),lT=z({name:"TableDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{tableCode:`<sui-table celled>
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
</sui-table>`}}}),nT=S("a",{href:"#"},"Edit",-1),oT=S("a",{href:"#"},"Edit",-1),sT=S("a",{href:"#"},"Edit",-1),rT=S("br",null,null,-1),uT=S("br",null,null,-1),cT=S("br",null,null,-1),dT=S("br",null,null,-1),mT=S("br",null,null,-1),pT=S("br",null,null,-1),fT=S("br",null,null,-1);function gT(e,a,n,o,r,c){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-table-header-cell"),u=y("sui-table-row"),g=y("sui-table-header"),m=y("sui-table-cell"),h=y("sui-table-body"),v=y("sui-table"),b=y("doc-example"),C=y("sui-icon"),k=y("sui-table-footer"),T=y("sui-container");return $(),he("div",null,[t(p,{title:"Table",sub:"A table displays a collections of data grouped into rows"}),t(T,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(b,{title:"Table",description:"A standard table",code:e.tableCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Age")]),_:1}),t(s,null,{default:i(()=>[l("Job")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("James")]),_:1}),t(m,null,{default:i(()=>[l("24")]),_:1}),t(m,null,{default:i(()=>[l("Engineer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jill")]),_:1}),t(m,null,{default:i(()=>[l("26")]),_:1}),t(m,null,{default:i(()=>[l("Engineer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Elyse")]),_:1}),t(m,null,{default:i(()=>[l("24")]),_:1}),t(m,null,{default:i(()=>[l("Designer")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Definition",description:"A table may be formatted to emphasize a first column that defines a rows content",code:e.definitionCode},{default:i(()=>[t(v,{definition:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s),t(s,null,{default:i(()=>[l("Arguments")]),_:1}),t(s,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("reset rating")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1}),t(m,null,{default:i(()=>[l("Resets rating to default value")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("set rating")]),_:1}),t(m,null,{default:i(()=>[l("rating (integer)")]),_:1}),t(m,null,{default:i(()=>[l("Sets the current star rating to specified value")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Structured",description:"A table can be formatted to display complex structured data",code:e.structuredCode},{default:i(()=>[t(v,{structured:"",celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{rowspan:"2"},{default:i(()=>[l("Name")]),_:1}),t(s,{rowspan:"2"},{default:i(()=>[l("Type")]),_:1}),t(s,{rowspan:"2"},{default:i(()=>[l("Files")]),_:1}),t(s,{colspan:"3"},{default:i(()=>[l("Languages")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Ruby")]),_:1}),t(s,null,{default:i(()=>[l("Javascript")]),_:1}),t(s,null,{default:i(()=>[l("Python")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Alpha Team")]),_:1}),t(m,null,{default:i(()=>[l("Project 1")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[l("2")]),_:1}),t(m,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(m),t(m)]),_:1}),t(u,null,{default:i(()=>[t(m,{rowspan:"3"},{default:i(()=>[l("Beta Team")]),_:1}),t(m,null,{default:i(()=>[l("Project 1")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[l("52")]),_:1}),t(m,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(m),t(m)]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Project 2")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[l("12")]),_:1}),t(m),t(m,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(m)]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Project 3")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[l("21")]),_:1}),t(m,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(m),t(m)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(b,{title:"Positive / Negative",description:"A cell or row may let a user know whether a value is good or bad",code:e.positiveNegativeCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("No Name Specified")]),_:1}),t(m,null,{default:i(()=>[l("Unknown")]),_:1}),t(m,{negative:""},{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,{positive:""},{default:i(()=>[t(m,null,{default:i(()=>[l("Jimmy")]),_:1}),t(m,null,{default:i(()=>[t(C,{name:"checkmark"}),l(" Approved ")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jamie")]),_:1}),t(m,null,{default:i(()=>[l("Unknown")]),_:1}),t(m,{positive:""},{default:i(()=>[t(C,{name:"close"}),l(" Requires call ")]),_:1})]),_:1}),t(u,{negative:""},{default:i(()=>[t(m,null,{default:i(()=>[l("Jill")]),_:1}),t(m,null,{default:i(()=>[l("Unknown")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Error",description:"A cell or row may call attention to an error or a negative value",code:e.errorCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("No Name Specified")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,{error:""},{default:i(()=>[t(m,null,{default:i(()=>[l("Jimmy")]),_:1}),t(m,null,{default:i(()=>[l("Cannot pull data")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jamie")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,{error:""},{default:i(()=>[t(C,{name:"attention"}),l(" Requires call ")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jill")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Warning",description:"A cell or row may warn a user",code:e.warningCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("No Name Specified")]),_:1}),t(m,null,{default:i(()=>[l("Unknown")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,{warning:""},{default:i(()=>[t(m,null,{default:i(()=>[l("Jimmy")]),_:1}),t(m,null,{default:i(()=>[t(C,{name:"attention"}),l(" Requires Action ")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jamie")]),_:1}),t(m,null,{default:i(()=>[l("Unknown")]),_:1}),t(m,{warning:""},{default:i(()=>[t(C,{name:"attention"}),l(" Hostile ")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jill")]),_:1}),t(m,null,{default:i(()=>[l("Unknown")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Active",description:"A cell or row can be active or selected by a user",code:e.activeCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("No Name Specified")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,{active:""},{default:i(()=>[t(m,null,{default:i(()=>[l("Jimmy")]),_:1}),t(m,null,{default:i(()=>[l("Selected")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jamie")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,{active:""},{default:i(()=>[l("Jill")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Disabled",description:"A cell can be disabled",code:e.disabledCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{disabled:""},{default:i(()=>[t(m,null,{default:i(()=>[l("No Name Specified")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jimmy")]),_:1}),t(m,null,{default:i(()=>[l("Selected")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jamie")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,{disabled:""},{default:i(()=>[l("Jill")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Colored Cells",description:"A cell can be styled by the central color palette colors",code:e.coloredCellsCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,{color:"orange"},{default:i(()=>[l("No Name Specified")]),_:1}),t(m,null,{default:i(()=>[l("Unknown")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,{color:"blue"},{default:i(()=>[t(m,null,{default:i(()=>[l("Jimmy")]),_:1}),t(m,null,{default:i(()=>[t(C,{name:"microphone"}),l(" Recording session ")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jamie")]),_:1}),t(m,null,{default:i(()=>[l("Unknown")]),_:1}),t(m,{color:"pink"},{default:i(()=>[t(C,{name:"child"}),l(" Baby Party ")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jill")]),_:1}),t(m,null,{default:i(()=>[l("Unknown")]),_:1}),t(m,{color:"green"},{default:i(()=>[l("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Marked",description:"A cell or row can be marked by a colored left or right border",code:e.markedCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,{marked:"right",color:"blue"},{default:i(()=>[l("No Name Specified")]),_:1}),t(m,{marked:"left",color:"red"},{default:i(()=>[l("Unknown")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,{marked:"left",color:"green"},{default:i(()=>[l("Jimmy")]),_:1}),t(m,null,{default:i(()=>[t(C,{name:"microphone"}),l(" Recording session ")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jamie")]),_:1}),t(m,null,{default:i(()=>[l("Unknown")]),_:1}),t(m,{marked:"left",color:"orange"},{default:i(()=>[t(C,{name:"child"}),l(" Baby Party ")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jill")]),_:1}),t(m,null,{default:i(()=>[l("Unknown")]),_:1}),t(m,{marked:"right",color:"purple"},{default:i(()=>[l("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(b,{title:"Single Line",description:"A table can specify that its cell contents should remain on a single line, and not wrap",code:e.singleLineCode},{default:i(()=>[t(v,{"single-line":""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Registration Date")]),_:1}),t(s,null,{default:i(()=>[l("E-mail address")]),_:1}),t(s,null,{default:i(()=>[l("Premium Plan")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("John Lilki")]),_:1}),t(m,null,{default:i(()=>[l("September 14, 2013")]),_:1}),t(m,null,{default:i(()=>[l("jhlilk22@yahoo.com")]),_:1}),t(m,null,{default:i(()=>[l("No")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jamie Harington")]),_:1}),t(m,null,{default:i(()=>[l("January 11, 2014")]),_:1}),t(m,null,{default:i(()=>[l("jamieharingonton@yahoo.com")]),_:1}),t(m,null,{default:i(()=>[l("Yes")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jill Lewis")]),_:1}),t(m,null,{default:i(()=>[l("May 11, 2014")]),_:1}),t(m,null,{default:i(()=>[l("jilsewris22@yahoo.com")]),_:1}),t(m,null,{default:i(()=>[l("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Fixed",description:"A table can use `table-layout: fixed` a special faster form of table rendering that does not resize table cells based on content",code:e.fixedCode},{default:i(()=>[t(v,{fixed:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("John")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jimmy")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jamie")]),_:1}),t(m,null,{default:i(()=>[l("Denied")]),_:1}),t(m,null,{default:i(()=>[l("Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Stacking",descirption:"A table can specify how it stacks table content responsively",code:e.stackingCode},{default:i(()=>[t(v,{stackable:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("John")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jimmy")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jamie")]),_:1}),t(m,null,{default:i(()=>[l("Denied")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Selectable Row",description:"A table can have its rows appear selectable",code:e.selectableRowCode},{default:i(()=>[t(v,{selectable:"",celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("John")]),_:1}),t(m,{positive:""},{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,{warning:""},{default:i(()=>[t(m,null,{default:i(()=>[l("Jimmy")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jamie")]),_:1}),t(m,{negative:""},{default:i(()=>[l("Denied")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Selectable Cell",description:"A table cell can be selectable",code:e.selectableCellCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("John")]),_:1}),t(m,{positive:""},{default:i(()=>[l("Approved")]),_:1}),t(m,{selectable:""},{default:i(()=>[nT]),_:1})]),_:1}),t(u,{warning:""},{default:i(()=>[t(m,null,{default:i(()=>[l("Jimmy")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,{selectable:""},{default:i(()=>[oT]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jamie")]),_:1}),t(m,{negative:""},{default:i(()=>[l("Denied")]),_:1}),t(m,{selectable:""},{default:i(()=>[sT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Verical Alignment",description:"A table header, row, or cell can adjust its vertical alignment",code:e.verticalAlignmentCode},{default:i(()=>[t(v,{striped:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{verticalAlign:"top"},{default:i(()=>[t(m,null,{default:i(()=>[l("John")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,{verticalAlign:"top"},{default:i(()=>[l(" Notes "),rT,l(" 1"),uT,l(" 2"),cT]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jamie")]),_:1}),t(m,{verticalAlign:"bottom"},{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l(" Notes "),dT,l(" 1"),mT,l(" 2"),pT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Text Alignment",description:"A table header, row, or cell can adjust its text alignment",code:e.textAlignCode},{default:i(()=>[t(v,{striped:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,{textAlign:"right"},{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{textAlign:"center"},{default:i(()=>[t(m,null,{default:i(()=>[l("John")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jamie")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jamie")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Striped",description:"A table can stripe alternate rows of content with a darker color to increase contrast",code:e.stripedCode},{default:i(()=>[t(v,{striped:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Date Joined")]),_:1}),t(s,null,{default:i(()=>[l("E-mail")]),_:1}),t(s,null,{default:i(()=>[l("Called")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("John Lilki")]),_:1}),t(m,null,{default:i(()=>[l("September 14, 2013")]),_:1}),t(m,null,{default:i(()=>[l("jhlilk22@yahoo.com")]),_:1}),t(m,null,{default:i(()=>[l("No")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jamie Harington")]),_:1}),t(m,null,{default:i(()=>[l("January 11, 2014")]),_:1}),t(m,null,{default:i(()=>[l("jamieharingonton@yahoo.com")]),_:1}),t(m,null,{default:i(()=>[l("Yes")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jill Lewis")]),_:1}),t(m,null,{default:i(()=>[l("May 11, 2014")]),_:1}),t(m,null,{default:i(()=>[l("jilsewris22@yahoo.com")]),_:1}),t(m,null,{default:i(()=>[l("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Celled",description:"A table may be divided each row into separate cells",code:e.celledCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("John")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jamie")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jill")]),_:1}),t(m,null,{default:i(()=>[l("Denied")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1}),t(k,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("3 People")]),_:1}),t(m,null,{default:i(()=>[l("2 Approved")]),_:1}),t(m)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Basic",description:"A table can reduce its complexity to increase readability",code:e.basicCode},{default:i(()=>[S("div",null,[t(v,{basic:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("John")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jamie")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jill")]),_:1}),t(m,null,{default:i(()=>[l("Denied")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1}),fT,t(v,{basic:"very"},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("John")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jamie")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jill")]),_:1}),t(m,null,{default:i(()=>[l("Denied")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(b,{title:"Collapsing",description:"A table can be collapsing, taking up only as much space as its rows",code:e.collapsingCode},{default:i(()=>[t(v,{collapsing:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Age")]),_:1}),t(s,null,{default:i(()=>[l("Gender")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("John")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("27")]),_:1}),t(m,null,{default:i(()=>[l("Male")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jamie")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("32")]),_:1}),t(m,null,{default:i(()=>[l("Other")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jill")]),_:1}),t(m,null,{default:i(()=>[l("Denied")]),_:1}),t(m,null,{default:i(()=>[l("22")]),_:1}),t(m,null,{default:i(()=>[l("Other")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1}),t(k,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("3 People")]),_:1}),t(s,null,{default:i(()=>[l("2 Approved")]),_:1}),t(s),t(s),t(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Collapsing Cell",description:"A cell can be collapsing so that it only uses as much space as required",code:e.collapsingCellCode},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,{collapsing:""},{default:i(()=>[t(C,{name:"folder"}),l(" node_modules ")]),_:1}),t(m,null,{default:i(()=>[l("Initial commit")]),_:1}),t(m,null,{default:i(()=>[l("10 hours ago")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,{collapsing:""},{default:i(()=>[t(C,{name:"folder"}),l(" node_modules ")]),_:1}),t(m,null,{default:i(()=>[l("Initial commit")]),_:1}),t(m,null,{default:i(()=>[l("10 hours ago")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,{collapsing:""},{default:i(()=>[t(C,{name:"folder"}),l(" node_modules ")]),_:1}),t(m,null,{default:i(()=>[l("Initial commit")]),_:1}),t(m,null,{default:i(()=>[l("10 hours ago")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Column Count",description:"A table can specify its column count to divide its content evenly",code:e.columnCountCode},{default:i(()=>[t(v,{columns:5},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Age")]),_:1}),t(s,null,{default:i(()=>[l("Gender")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("John")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("27")]),_:1}),t(m,null,{default:i(()=>[l("Male")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jamie")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("32")]),_:1}),t(m,null,{default:i(()=>[l("Other")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jill")]),_:1}),t(m,null,{default:i(()=>[l("Denied")]),_:1}),t(m,null,{default:i(()=>[l("22")]),_:1}),t(m,null,{default:i(()=>[l("Other")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1}),t(k,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("3 People")]),_:1}),t(s,null,{default:i(()=>[l("2 Approved")]),_:1}),t(s),t(s),t(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Column Width",description:"Column Width",code:e.columnWidthCode},{default:i(()=>[t(v,null,{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{width:10},{default:i(()=>[l("Name")]),_:1}),t(s,{width:6},{default:i(()=>[l("Status")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("John")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jamie")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Colored",description:"A table can be given a color to distinguish it from other tables",code:e.coloredCode},{default:i(()=>[t(v,{color:"red"},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Food")]),_:1}),t(s,null,{default:i(()=>[l("Calories")]),_:1}),t(s,null,{default:i(()=>[l("Protein")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Apples")]),_:1}),t(m,null,{default:i(()=>[l("200")]),_:1}),t(m,null,{default:i(()=>[l("0g")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Orange")]),_:1}),t(m,null,{default:i(()=>[l("310")]),_:1}),t(m,null,{default:i(()=>[l("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Inverted",description:"A table's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Food")]),_:1}),t(s,null,{default:i(()=>[l("Calories")]),_:1}),t(s,null,{default:i(()=>[l("Protein")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Apples")]),_:1}),t(m,null,{default:i(()=>[l("200")]),_:1}),t(m,null,{default:i(()=>[l("0g")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Orange")]),_:1}),t(m,null,{default:i(()=>[l("310")]),_:1}),t(m,null,{default:i(()=>[l("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Padded",description:"A table may sometimes need to be more padded for legibility",code:e.paddedCode},{default:i(()=>[S("div",null,[t(v,{padded:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("John")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jamie")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{padded:"very"},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("John")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jamie")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(b,{title:"Compact",description:"A table may sometimes need to be more compact to make more rows visible at a time",code:e.compactCode},{default:i(()=>[S("div",null,[t(v,{compact:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("John")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jamie")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{compact:"very"},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("John")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jamie")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(b,{title:"Size",description:"A table can also be small or large",code:e.sizeCode},{default:i(()=>[t(v,{size:"small"},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("John")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jamie")]),_:1}),t(m,null,{default:i(()=>[l("Approved")]),_:1}),t(m,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Jill")]),_:1}),t(m,null,{default:i(()=>[l("Denied")]),_:1}),t(m,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const hT=$e(lT,[["render",gT]]),_T=z({name:"AdvertisementDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{adCode:`<sui-advertisement unit="medium rectangle">
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
</div>`,panoramaCode:'<sui-advertisement unit="panorama" test="Panorama" />',netboardCode:'<sui-advertisement unit="netboard" test="Netboard" />',centeredCode:'<sui-advertisement centered unit="banner" test="Centered" /> ',testCode:'<sui-advertisement unit="medium rectangle" test="Ad Unit 1" />'}}}),bT=S("img",{src:ue},null,-1),vT=S("br",null,null,-1);function yT(e,a,n,o,r,c){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-advertisement"),u=y("doc-example"),g=y("sui-container");return $(),he("div",null,[t(p,{title:"Advertisement",sub:"An ad displays third-party promotional content"}),t(g,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"Ad",description:"A standard ad",code:e.adCode},{default:i(()=>[t(s,{unit:"medium rectangle"},{default:i(()=>[bT]),_:1})]),_:1},8,["code"]),t(u,{title:"Common Units",description:"An advertisement can appear in common ad unit sizes",code:e.commonUnitsCode},{default:i(()=>[S("div",null,[t(s,{unit:"medium rectangle",test:"Medium Rectangle"}),t(s,{unit:"banner",test:"Banner"}),t(s,{unit:"leaderboard",test:"Leaderboard"}),t(s,{unit:"large rectangle",test:"Large Rectangle"}),t(s,{unit:"half page",test:"Half Page"})])]),_:1},8,["code"]),t(u,{title:"Mobile",description:"An ad can use common mobile ad sizes",code:e.mobileCode},{default:i(()=>[S("div",null,[t(s,{unit:"mobile banner",test:"Mobile Banner"}),t(s,{unit:"mobile leaderboard",test:"Mobile Leaderboard"})])]),_:1},8,["code"]),t(u,{title:"Rectangle",description:"An ad can use a common rectangle ad unit size",code:e.rectangleCode},{default:i(()=>[t(s,{unit:"medium rectangle",test:"Medium Rectangle"})]),_:1},8,["code"]),t(u,{title:"Button",description:"An ad can use button ad unit size",code:e.buttonCode},{default:i(()=>[S("div",null,[t(s,{unit:"button",test:"Button"}),t(s,{unit:"square button",test:"Square Button"}),t(s,{unit:"small button",test:"Small Button"})])]),_:1},8,["code"]),t(u,{title:"Skyscraper",description:"An ad can use skyscraper ad unit size",code:e.skyscraperCode},{default:i(()=>[S("div",null,[t(s,{unit:"skyscraper",test:"Skyscraper"}),vT,t(s,{unit:"wide skyscraper",test:"Wide Skyscraper"})])]),_:1},8,["code"]),t(u,{title:"Banner",description:"An ad can use banner ad unit size",code:e.bannerCode},{default:i(()=>[S("div",null,[t(s,{unit:"banner",test:"Banner"}),t(s,{unit:"vertical banner",test:"Vertical Banner"}),t(s,{unit:"top banner",test:"Top Banner"}),t(s,{unit:"half banner",test:"Half Banner"})])]),_:1},8,["code"]),t(u,{title:"Leaderboard",description:"An ad can use leaderboard ad unit size",code:e.leaderboardCode},{default:i(()=>[S("div",null,[t(s,{unit:"leaderboard",test:"Leaderboard"}),t(s,{unit:"large leaderboard",test:"Large Leaderboard"}),t(s,{unit:"billboard",test:"Billboard"})])]),_:1},8,["code"]),t(u,{title:"Panorama",description:"An ad can use panorama ad unit size",code:e.panoramaCode},{default:i(()=>[t(s,{unit:"panorama",test:"Panorama"})]),_:1},8,["code"]),t(u,{title:"Netboard",description:"An ad can use netboard ad unit size",code:e.netboardCode},{default:i(()=>[t(s,{unit:"netboard",test:"Netboard"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(u,{title:"Centered",description:"An advertisement can appear centered",code:e.centeredCode},{default:i(()=>[t(s,{centered:"",unit:"banner",test:"Centered"})]),_:1},8,["code"]),t(u,{title:"Test",description:"A advertisement can be formatted to help verify placement",code:e.testCode},{default:i(()=>[t(s,{unit:"medium rectangle",test:"Ad Unit 1"})]),_:1},8,["code"])]),_:1})])}const ST=$e(_T,[["render",yT]]),Ac="/vue-fomantic-ui/images/avatar/large/kristy.png",wT="/vue-fomantic-ui/images/avatar/large/daniel.jpg",lo="/vue-fomantic-ui/images/avatar/large/helen.jpg",no="/vue-fomantic-ui/images/avatar/large/elliot.jpg",oo="/vue-fomantic-ui/images/avatar/large/elyse.png",CT="/vue-fomantic-ui/images/avatar/large/matthew.png",AT="/vue-fomantic-ui/images/avatar/large/molly.png",Dl="/vue-fomantic-ui/images/wireframe/white-image.png",kc="/vue-fomantic-ui/images/avatar/large/jenny.jpg",xc="/vue-fomantic-ui/images/avatar/large/veronika.jpg",$c="/vue-fomantic-ui/images/avatar/large/steve.jpg",kT=z({name:"CardDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{cardCode:`<sui-card>
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
</sui-card-group>`}}}),xT=S("span",{class:"date"},"Joined in 2013",-1),$T=S("a",null,"Elliot Fu",-1),BT=S("a",null,"Jenny Hess",-1),TT=S("a",null,"Stevie Feliciano",-1),LT=S("a",null,"Administrator",-1),DT=S("a",null,"Helen Troy",-1),IT=S("span",{class:"date"},"Joined in 2013",-1),ET=S("span",null,"2 days ago",-1),RT=S("a",null,"Animals",-1),zT=S("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),FT=S("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),PT=S("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),MT=S("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),VT=S("span",{class:"category"},"Animals",-1),HT=S("span",{class:"category"},"Animals",-1),NT=S("div",{class:"right floated author"},[S("img",{class:"ui avatar image",src:Rn}),l(" Matt ")],-1),OT=S("span",{class:"category"},"Animals",-1),jT=S("div",{class:"right floated author"},[S("img",{class:"ui avatar image",src:Rn}),l(" Matt ")],-1),GT=S("p",null,"Jenny is a student studying Media Management at the New School",-1),qT=S("div",{class:"center aligned author"},[S("img",{class:"ui avatar image",src:En}),l(" Jenny ")],-1),UT=S("a",null,"Friends",-1),YT=S("span",{class:"right floated"}," Joined in 2013 ",-1),JT=S("a",null,[S("i",{class:"user icon"}),l(" 75 Friends ")],-1),WT=S("a",null,"Coworker",-1),KT=S("span",{class:"right floated"}," Joined in 2011 ",-1),XT=S("a",null,[S("i",{class:"user icon"}),l(" 35 Friends ")],-1),QT=S("a",null,"Coworker",-1),ZT=S("span",{class:"right floated"}," Joined in 2014 ",-1),e2=S("a",null,[S("i",{class:"user icon"}),l(" 151 Friends ")],-1);function t2(e,a,n,o,r,c){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-image"),u=y("sui-card-header"),g=y("sui-card-meta"),m=y("sui-card-description"),h=y("sui-card-content"),v=y("sui-icon"),b=y("sui-card"),C=y("doc-example"),k=y("sui-button"),T=y("sui-button-group"),_=y("sui-card-group"),w=y("sui-feed-summary"),x=y("sui-feed-content"),B=y("sui-feed-event"),I=y("sui-feed"),M=y("sui-grid-column"),V=y("sui-grid"),P=y("sui-segment"),j=y("sui-container");return $(),he("div",null,[t(p,{title:"Card",sub:"A card displays site content in a manner similar to a playing card"}),t(j,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(C,{title:"Card",description:"A single card",code:e.cardCode},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:Ac,wrapped:""}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Kristy")]),_:1}),t(g,null,{default:i(()=>[xT]),_:1}),t(m,null,{default:i(()=>[l(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[S("a",null,[t(v,{name:"user"}),l(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Cards",description:"A group of cards",code:e.cardsCode},{default:i(()=>[t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(s,{src:ni,floated:"right",size:"mini"}),t(u,null,{default:i(()=>[l("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[l("Friends of Veronika")]),_:1}),t(m,null,{default:i(()=>[l("Elliot requested permission to view your contact details")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(T,{widths:2},{default:i(()=>[t(k,{basic:"",color:"green"},{default:i(()=>[l("Approve")]),_:1}),t(k,{basic:"",color:"red"},{default:i(()=>[l("Decline")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(s,{src:En,floated:"right",size:"mini"}),t(u,null,{default:i(()=>[l("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[l("New Member")]),_:1}),t(m,null,{default:i(()=>[l("Jenny wants to add you to the group best friends")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(T,{widths:2},{default:i(()=>[t(k,{basic:"",color:"green"},{default:i(()=>[l("Approve")]),_:1}),t(k,{basic:"",color:"red"},{default:i(()=>[l("Decline")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(C,{title:"Content Block",description:"A card can contain blocks of content",code:e.contentBlockCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Project Timeline")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(f,{sub:""},{default:i(()=>[l("Activity")]),_:1}),t(I,{size:"small"},{default:i(()=>[t(B,null,{default:i(()=>[t(x,null,{default:i(()=>[t(w,null,{default:i(()=>[$T,l(" added "),BT,l(" to the project ")]),_:1})]),_:1})]),_:1}),t(B,null,{default:i(()=>[t(x,null,{default:i(()=>[t(w,null,{default:i(()=>[TT,l(" was added as an "),LT]),_:1})]),_:1})]),_:1}),t(B,null,{default:i(()=>[t(x,null,{default:i(()=>[t(w,null,{default:i(()=>[DT,l(" added two pictures ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(k,{as:"button"},{default:i(()=>[l("Join Project")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Image",description:"A card can contain an image",code:e.imageCode},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:Ac,wrapped:""}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Kristy")]),_:1}),t(g,null,{default:i(()=>[IT]),_:1}),t(m,null,{default:i(()=>[l(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[S("a",null,[t(v,{name:"user"}),l(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Header",description:"A card can contain a header",code:e.headerCode},{default:i(()=>[t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[l("Friend")]),_:1}),t(m,null,{default:i(()=>[l(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Veronika Ossi")]),_:1}),t(g,null,{default:i(()=>[l("Friend")]),_:1}),t(m,null,{default:i(()=>[l(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[l("Friend")]),_:1}),t(m,null,{default:i(()=>[l(" Jenny is a student studying Media Management at the New School ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Metadata",description:"A card can contain content metadata",code:e.metadataCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[ET,RT]),_:1}),t(m,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Buttons",description:"A card can contain buttons",code:e.buttonsCode},{default:i(()=>[t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elliot Fu")]),_:1}),t(m,null,{default:i(()=>[l(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1}),t(k,{attached:"bottom"},{default:i(()=>[t(v,{name:"add"}),l(" Add Friend ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Veronika Ossi")]),_:1}),t(m,null,{default:i(()=>[l(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1}),t(k,{attached:"bottom"},{default:i(()=>[t(v,{name:"add"}),l(" Add Friend ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Description",description:"A card can contain a description with one or more paragraphs",code:e.descriptionCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[l("2 days ago")]),_:1}),t(m,null,{default:i(()=>[zT,FT]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Extra Content",description:"A card can contain extra content meant to be formatted separately from the main content",code:e.extraContentCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[l("2 days ago")]),_:1}),t(m,null,{default:i(()=>[PT,MT]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(v,{name:"check"}),l(" 121 Votes ")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(C,{title:"Fluid Card",description:"A fluid card takes up the width of its container",code:e.fluidCardCode},{default:i(()=>[t(V,{columns:3},{default:i(()=>[t(M,null,{default:i(()=>[t(b,{fluid:""},{default:i(()=>[t(s,{src:wT}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Daniel Louise")]),_:1})]),_:1})]),_:1})]),_:1}),t(M,null,{default:i(()=>[t(b,{fluid:""},{default:i(()=>[t(s,{src:lo}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Helen Troy")]),_:1})]),_:1})]),_:1})]),_:1}),t(M,null,{default:i(()=>[t(b,{fluid:""},{default:i(()=>[t(s,{src:no}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Centered Card",description:"A card can center itself inside its container",code:e.centeredCardCode},{default:i(()=>[t(b,{centered:""},{default:i(()=>[t(s,{src:oo}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elyse")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Horizontal Cards",description:"A card can display horizontally",code:e.horizontalCardsCode},{default:i(()=>[t(b,{horizontal:""},{default:i(()=>[t(s,{src:oo}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[VT]),_:1}),t(m,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Raised Card",description:"A card may be formatted to raise above the page",code:e.raisedCode},{default:i(()=>[t(b,{raised:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[HT]),_:1}),t(m,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[NT]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Link Card",description:"A card can be formatted so that the entire contents link to another page",code:e.linkCardCode},{default:i(()=>[t(b,{href:"#",raised:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[OT]),_:1}),t(m,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[jT]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Text Alignment",description:"Any element inside a card can have its text alignment specified",code:e.textAlignCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,{textAlign:"center"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(m,{textAlign:"center"},{default:i(()=>[GT]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[qT]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Inverted",description:"Card's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(P,{inverted:""},{default:i(()=>[t(_,{inverted:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:CT}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Matt Giampietro")]),_:1}),t(g,null,{default:i(()=>[UT]),_:1}),t(m,null,{default:i(()=>[l(" Matthew is an interior designer living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[YT,JT]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:AT}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Molly")]),_:1}),t(g,null,{default:i(()=>[WT]),_:1}),t(m,null,{default:i(()=>[l(" Molly is a personal assistant living in Paris. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[KT,XT]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:oo}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elyse")]),_:1}),t(g,null,{default:i(()=>[QT]),_:1}),t(m,null,{default:i(()=>[l(" Elyse is a copywriter working in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[ZT,e2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Colored",description:"A card can specify a color",code:e.coloredCode},{default:i(()=>[t(_,{itemsPerRow:4},{default:i(()=>[t(b,{color:"primary",href:"#"},{default:i(()=>[t(s,{src:Dl})]),_:1}),t(b,{color:"secondary",href:"#"},{default:i(()=>[t(s,{src:Dl})]),_:1}),t(b,{color:"red",href:"#"},{default:i(()=>[t(s,{src:Dl})]),_:1}),t(b,{color:"orange",href:"#"},{default:i(()=>[t(s,{src:Dl})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Column Count",description:"A group of cards can set how many cards should exist in a row",code:e.columnCountCode},{default:i(()=>[t(_,{itemsPerRow:4},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:ue})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:ue})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Stackable",description:"A group of cards can automatically stack rows to a single columns on mobile devices",code:e.stackableCode},{default:i(()=>[t(_,{itemsPerRow:3,stackable:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:no})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:lo})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:kc})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:xc})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Wo})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:$c})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Doubling",description:"A group of cards can double its column width for mobile",code:e.doublingCode},{default:i(()=>[t(_,{itemsPerRow:6,doubling:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:no})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:lo})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:kc})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:xc})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Wo})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:$c})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const i2=$e(kT,[["render",t2]]),a2=z({name:"CommentDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{commentsCode:`<sui-comment-group>
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
  </sui-segment>`}}}),l2=S("span",null,"Today at 5:42PM",-1),n2=S("a",null,"Reply",-1),o2=S("span",null,"Yesterday at 12:30AM",-1),s2=S("a",null,"Reply",-1),r2={class:"comments"},u2=S("span",null,"Just now",-1),c2=S("a",null,"Reply",-1),d2=S("span",null,"5 days ago",-1),m2=S("a",null,"Reply",-1),p2=S("div",{class:"date"},"2 days ago",-1),f2=S("div",{class:"rating"},[S("i",{class:"star icon"}),l(" 5 Faves ")],-1),g2=S("a",null,"Reply",-1),h2=S("a",null,"Save",-1),_2=S("a",null,"Hide",-1),b2=S("a",null,[S("i",{class:"expand icon"}),l(" Full-screen ")],-1),v2=S("a",null,"Reply",-1),y2=S("a",null,"Reply",-1),S2=S("a",null,"Replay",-1),w2=S("span",null,"Today at 5:42PM",-1),C2=S("a",{href:"#"},"Replay",-1),A2=S("span",null,"Yesterday at 12:30AM",-1),k2=S("a",{href:"#"},"Replay",-1),x2=S("span",null,"Just now",-1),$2=S("a",{href:"#"},"Replay",-1),B2=S("span",null,"5 days ago",-1),T2=S("a",{href:"#"},"Replay",-1),L2=S("span",null,"Today at 5:42PM",-1),D2=S("a",{href:"#"},"Replay",-1),I2=S("span",null,"Yesterday at 12:30AM",-1),E2=S("a",{href:"#"},"Replay",-1),R2=S("span",null,"Just now",-1),z2=S("a",{href:"#"},"Replay",-1),F2=S("span",null,"5 days ago",-1),P2=S("a",{href:"#"},"Replay",-1),M2=S("span",null,"Today at 5:42PM",-1),V2=S("a",{href:"#"},"Replay",-1),H2=S("span",null,"Yesterday at 12:30AM",-1),N2=S("a",{href:"#"},"Replay",-1),O2=S("span",null,"Just now",-1),j2=S("a",{href:"#"},"Replay",-1),G2=S("span",null,"5 days ago",-1),q2=S("a",{href:"#"},"Replay",-1),U2=S("span",null,"Today at 5:42PM",-1),Y2=S("a",{href:"#"},"Replay",-1),J2=S("span",null,"Yesterday at 12:30AM",-1),W2=S("a",{href:"#"},"Replay",-1),K2=S("span",null,"Just now",-1),X2=S("a",{href:"#"},"Replay",-1),Q2=S("span",null,"5 days ago",-1),Z2=S("a",{href:"#"},"Replay",-1);function eL(e,a,n,o,r,c){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-comment-avatar"),u=y("sui-comment-author"),g=y("sui-comment-metadata"),m=y("sui-comment-text"),h=y("sui-comment-actions"),v=y("sui-comment-content"),b=y("sui-comment"),C=y("sui-comment-group"),k=y("doc-example"),T=y("sui-form-textarea"),_=y("sui-icon"),w=y("sui-button"),x=y("sui-form"),B=y("sui-segment"),I=y("sui-container");return $(),he("div",null,[t(p,{title:"Comment",sub:"A comment displays user feedback to site content"}),t(I,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(k,{title:"Comments",description:"A basic list of comments",code:e.commentsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(f,{as:"h3",dividing:""},{default:i(()=>[l("Comments")]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Matt")]),_:1}),t(g,null,{default:i(()=>[l2]),_:1}),t(m,null,{default:i(()=>[l("How artistic!")]),_:1}),t(h,null,{default:i(()=>[n2]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[o2]),_:1}),t(m,null,{default:i(()=>[l("This has been very useful for my research. Thanks as well!")]),_:1}),t(h,null,{default:i(()=>[s2]),_:1})]),_:1}),S("div",r2,[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[u2]),_:1}),t(m,null,{default:i(()=>[l("Elliot you are always so right :)")]),_:1}),t(h,null,{default:i(()=>[c2]),_:1})]),_:1})]),_:1})])]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Joe Henderson")]),_:1}),t(g,null,{default:i(()=>[d2]),_:1}),t(m,null,{default:i(()=>[l("Dude, this is awesome. Thanks so much")]),_:1}),t(h,null,{default:i(()=>[m2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(k,{title:"avatar",description:"A comment can contain an image or avatar",code:e.avatarCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Metadata",description:"A comment can contain metadata about the comment, an arbitrary amount of metadata may be defined",code:e.metadataCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/stevie.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Stevie Feliciano")]),_:1}),t(g,null,{default:i(()=>[p2,f2]),_:1}),t(m,null,{default:i(()=>[l(" Hey guys, I hope this example comment is helping you read this documentation. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Actions",description:"A comment can contain an list of actions a user may perform related to this comment",code:e.actionsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Tom Lukic")]),_:1}),t(m,null,{default:i(()=>[l(" This will be great for business reports. I will definitely download this. ")]),_:1}),t(h,null,{default:i(()=>[g2,h2,_2,b2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Reply Form",description:"A comment can contain a form to reply to a comment. This may have arbitrary content",code:e.replyFormCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/steve.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Steve Jobs")]),_:1}),t(g,null,{default:i(()=>[l("2 days ago")]),_:1}),t(m,null,{default:i(()=>[l("Revolutionary!")]),_:1}),t(h,null,{default:i(()=>[v2]),_:1}),t(x,{reply:""},{default:i(()=>[t(T),t(w,{color:"primary",icon:"",labelPosition:"left"},{default:i(()=>[t(_,{name:"edit"}),l(" Add Reply ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(k,{title:"Collapsed",description:"Comments can be collapsed, or hidden from view",code:e.collapsedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/christian.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Christian Rocha")]),_:1}),t(g,null,{default:i(()=>[l("2 days ago")]),_:1}),t(m,null,{default:i(()=>[l(" I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket? ")]),_:1}),t(h,null,{default:i(()=>[y2]),_:1})]),_:1}),t(C,{collapsed:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[l("1 days ago")]),_:1}),t(m,null,{default:i(()=>[l("No, it wont")]),_:1}),t(h,null,{default:i(()=>[S2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(k,{title:"Threaded",description:"A comment list can be threaded to showing the relationship between conversations",code:e.threadedCode},{default:i(()=>[t(C,{threaded:""},{default:i(()=>[t(f,{as:"h3",dividing:""},{default:i(()=>[l("Comments")]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Matt")]),_:1}),t(g,null,{default:i(()=>[w2]),_:1}),t(m,null,{default:i(()=>[l(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[C2]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[A2]),_:1}),t(m,null,{default:i(()=>[l(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[k2]),_:1})]),_:1}),t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[x2]),_:1}),t(m,null,{default:i(()=>[l(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[$2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Joe Henderson")]),_:1}),t(g,null,{default:i(()=>[B2]),_:1}),t(m,null,{default:i(()=>[l(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[T2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Minimal",description:"Comments can hide extra information unless a user shows intent to interact with a comment",code:e.minimalCode},{default:i(()=>[t(C,{minimal:""},{default:i(()=>[t(f,{as:"h3",dividing:""},{default:i(()=>[l("Comments")]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Matt")]),_:1}),t(g,null,{default:i(()=>[L2]),_:1}),t(m,null,{default:i(()=>[l(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[D2]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[I2]),_:1}),t(m,null,{default:i(()=>[l(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[E2]),_:1})]),_:1}),t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[R2]),_:1}),t(m,null,{default:i(()=>[l(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[z2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Joe Henderson")]),_:1}),t(g,null,{default:i(()=>[F2]),_:1}),t(m,null,{default:i(()=>[l(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[P2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Size",description:"Comments can have different sizes",code:e.sizeCode},{default:i(()=>[t(C,{size:"small"},{default:i(()=>[t(f,{as:"h3",dividing:""},{default:i(()=>[l("Comments")]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Matt")]),_:1}),t(g,null,{default:i(()=>[M2]),_:1}),t(m,null,{default:i(()=>[l(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[V2]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[H2]),_:1}),t(m,null,{default:i(()=>[l(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[N2]),_:1})]),_:1}),t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[O2]),_:1}),t(m,null,{default:i(()=>[l(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[j2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Joe Henderson")]),_:1}),t(g,null,{default:i(()=>[G2]),_:1}),t(m,null,{default:i(()=>[l(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[q2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Inverted",description:"Comments's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(B,{inverted:""},{default:i(()=>[t(C,{inverted:""},{default:i(()=>[t(f,{as:"h3",inverted:"",dividing:""},{default:i(()=>[l("Comments")]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Matt")]),_:1}),t(g,null,{default:i(()=>[U2]),_:1}),t(m,null,{default:i(()=>[l(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[Y2]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[J2]),_:1}),t(m,null,{default:i(()=>[l(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[W2]),_:1})]),_:1}),t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[K2]),_:1}),t(m,null,{default:i(()=>[l(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[X2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Joe Henderson")]),_:1}),t(g,null,{default:i(()=>[Q2]),_:1}),t(m,null,{default:i(()=>[l(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[Z2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const tL=$e(a2,[["render",eL]]),iL=z({name:"FeedDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{feedCode:`<sui-feed>
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
</sui-feed>`}}}),aL=S("img",{src:ni},null,-1),lL=S("img",{src:ni},null,-1),nL=S("a",null,"Coworkers",-1),oL=S("img",{src:En},null,-1),sL=S("a",null,"Jenny Hess",-1),rL=S("a",null,"coworker",-1),uL=S("img",{src:Oa},null,-1),cL=S("a",null,"Helen Troy",-1),dL=S("a",null,[S("img",{src:ue})],-1),mL=S("a",null,[S("img",{src:ue})],-1),pL=S("a",null,"Elliot Fu",-1),fL=S("a",null,"Jenny Hess",-1),gL=S("a",null,"Stevie Feliciano",-1),hL=S("a",null,"Elliot Fu",-1),_L=S("a",null,"Helen Troy",-1),bL=S("a",null,"Christian Rocha",-1),vL=S("img",{src:ni},null,-1),yL=S("div",{class:"date"},"Just now",-1),SL=S("a",{class:"user"},"Elliot Fu",-1);function wL(e,a,n,o,r,c){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-feed-label"),u=y("sui-feed-user"),g=y("sui-feed-date"),m=y("sui-feed-summary"),h=y("sui-icon"),v=y("sui-feed-like"),b=y("sui-feed-meta"),C=y("sui-feed-content"),k=y("sui-feed-event"),T=y("sui-feed"),_=y("doc-example"),w=y("sui-feed-extra"),x=y("sui-segment"),B=y("sui-container");return $(),he("div",null,[t(p,{title:"Feed",sub:"A feed presents user activity chronologically"}),t(B,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(_,{title:"Feed",description:"A feed",code:e.feedCode},{default:i(()=>[t(T,null,{default:i(()=>[t(k,null,{default:i(()=>[t(s,null,{default:i(()=>[aL]),_:1}),t(C,null,{default:i(()=>[t(m,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elliot Fu")]),_:1}),l(" added you as a friend "),t(g,null,{default:i(()=>[l("1 Hour Ago")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(v,null,{default:i(()=>[t(h,{name:"like"}),l(" 4 Likes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(_,{title:"Label",description:"An event can contain an image or icon label",code:e.labelCode},{default:i(()=>[t(T,null,{default:i(()=>[t(k,null,{default:i(()=>[t(s,null,{default:i(()=>[lL]),_:1}),t(C,null,{default:i(()=>[l(" You added Elliot Fu to the group "),nL]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Date",description:"An event or an event summary can contain a date",code:e.dateCode},{default:i(()=>[t(T,null,{default:i(()=>[t(k,null,{default:i(()=>[t(s,null,{default:i(()=>[oL]),_:1}),t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[l(" 3 days ago ")]),_:1}),t(m,null,{default:i(()=>[l(" You added "),sL,l(" to your "),rL,l(" group. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Additional information",description:"An event can contain additional information like a set of images or text",code:e.additionalInfoCode},{default:i(()=>[t(T,null,{default:i(()=>[t(k,null,{default:i(()=>[t(s,null,{default:i(()=>[uL]),_:1}),t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[l(" 3 days ago ")]),_:1}),t(m,null,{default:i(()=>[cL,l(" added 2 photos ")]),_:1}),t(w,{images:""},{default:i(()=>[dL,mL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(_,{title:"Size",description:"A feed can have different sizes",code:e.sizeCode},{default:i(()=>[t(T,{size:"small"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[l("Followers Activity")]),_:1}),t(k,null,{default:i(()=>[t(C,null,{default:i(()=>[t(m,null,{default:i(()=>[pL,l(" added "),fL,l(" as a friend ")]),_:1})]),_:1})]),_:1}),t(k,null,{default:i(()=>[t(C,null,{default:i(()=>[t(m,null,{default:i(()=>[gL,l(" added "),hL,l(" as a friend ")]),_:1})]),_:1})]),_:1}),t(k,null,{default:i(()=>[t(C,null,{default:i(()=>[t(m,null,{default:i(()=>[_L,l(" added "),bL,l(" as a friend ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Inverted",description:"A feed's color can be inverted",code:e.invertedCode},{default:i(()=>[t(x,{inverted:""},{default:i(()=>[t(T,{inverted:""},{default:i(()=>[t(k,null,{default:i(()=>[t(s,null,{default:i(()=>[vL]),_:1}),t(C,null,{default:i(()=>[yL,t(m,null,{default:i(()=>[SL,l(" posted on his page ")]),_:1}),t(w,{text:""},{default:i(()=>[l(" Hey there ! ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const CL=$e(iL,[["render",wL]]),AL=z({name:"ItemDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{itemsCode:`<sui-item-group>
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
</sui-item-group>`}}}),kL=S("img",{src:ue},null,-1),xL=S("span",null,"Description",-1),$L=S("img",{src:nt},null,-1),BL=S("img",{src:ue},null,-1),TL=S("span",null,"Description",-1),LL=S("img",{src:nt},null,-1),DL=S("img",{src:ue},null,-1),IL=S("img",{src:ue},null,-1),EL=S("img",{src:ue},null,-1),RL=S("img",{src:ue},null,-1),zL=S("img",{src:ue},null,-1),FL=S("img",{src:ue},null,-1),PL=S("img",{src:ue},null,-1),ML=S("span",{class:"price"},"$1200",-1),VL=S("span",{class:"stay"},"1 Month",-1),HL=S("img",{src:nt},null,-1),NL=S("span",{class:"price"},"$1000",-1),OL=S("span",{class:"stay"},"2 Weeks",-1),jL=S("img",{src:nt},null,-1),GL=S("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),qL=S("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),UL=S("img",{src:nt},null,-1),YL=S("img",{src:ue},null,-1),JL=S("span",{class:"cinema"},"Union Square 14",-1),WL=S("img",{src:nt},null,-1),KL=S("img",{src:ue},null,-1),XL=S("span",{class:"cinema"},"IFC Cinema",-1),QL=S("img",{src:nt},null,-1),ZL=S("img",{src:ue},null,-1),eD=S("span",{class:"cinema"},"IFC",-1),tD=S("img",{src:nt},null,-1),iD=S("img",{src:nt},null,-1),aD=S("img",{src:nt},null,-1),lD=S("img",{src:nt},null,-1),nD=S("span",{class:"price"},"$1200",-1),oD=S("span",{class:"stay"},"1 Month",-1),sD=S("img",{src:nt},null,-1),rD=S("span",{class:"price"},"$1000",-1),uD=S("span",{class:"stay"},"2 Weeks",-1),cD=S("img",{src:nt},null,-1);function dD(e,a,n,o,r,c){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-item-image"),u=y("sui-item-header"),g=y("sui-item-meta"),m=y("sui-item-description"),h=y("sui-item-extra"),v=y("sui-item-content"),b=y("sui-item"),C=y("sui-item-group"),k=y("doc-example"),T=y("sui-image"),_=y("sui-icon"),w=y("sui-label"),x=y("sui-button"),B=y("sui-segment"),I=y("sui-container");return $(),he("div",null,[t(p,{title:"Item",sub:"An item view presents large collections of site content for display"}),t(I,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(k,{title:"Items",description:"A group of items",code:e.itemsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[kL]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Header")]),_:1}),t(g,null,{default:i(()=>[xL]),_:1}),t(m,null,{default:i(()=>[$L]),_:1}),t(h,null,{default:i(()=>[l(" Additional Details ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[BL]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Header")]),_:1}),t(g,null,{default:i(()=>[TL]),_:1}),t(m,null,{default:i(()=>[LL]),_:1}),t(h,null,{default:i(()=>[l(" Additional Details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(k,{title:"Image",description:"An item can contain an image",code:e.imageCode},{default:i(()=>[t(C,{divided:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[DL]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[IL]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[EL]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Content",description:"An item can contain content",code:e.contentCode},{default:i(()=>[t(C,{divided:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[RL]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[l(" Content A ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[zL]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[l(" Content B ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[FL]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[l(" Content C ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Header",description:"An item can contain a header",code:e.headerCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[PL]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[l("12 Years a Slave")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Metadata",description:"An item can contain content metadata",code:e.metadataCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(T,{size:"small",src:ue}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Arrowhead Valley Camp")]),_:1}),t(g,null,{default:i(()=>[ML,VL]),_:1}),t(m,null,{default:i(()=>[HL]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{size:"small",src:ue}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Buck's Homebrew Stayaway")]),_:1}),t(g,null,{default:i(()=>[NL,OL]),_:1}),t(m,null,{default:i(()=>[jL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Description",description:"An item can contain a description with a single or multiple paragraphs",code:e.descriptionCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(T,{size:"small",src:ue}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(m,null,{default:i(()=>[GL,qL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Extra Content",description:"An item can contain extra content meant to be formatted separately from the main content",code:e.extraContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(m,null,{default:i(()=>[UL]),_:1}),t(h,null,{default:i(()=>[t(_,{name:"check",color:"green"}),l(" 121 Votes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(k,{title:"Divided",description:"Items can be divided to better distinguish between grouped content",code:e.dividedCode},{default:i(()=>[t(C,{divided:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[YL]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("12 Years a Slave")]),_:1}),t(g,null,{default:i(()=>[JL]),_:1}),t(m,null,{default:i(()=>[WL]),_:1}),t(h,null,{default:i(()=>[t(w,null,{default:i(()=>[l("IMAX")]),_:1}),t(w,null,{default:i(()=>[t(_,{name:"globe"}),l(" Additional Languages ")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[KL]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("My Neighbor Totoro")]),_:1}),t(g,null,{default:i(()=>[XL]),_:1}),t(m,null,{default:i(()=>[QL]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right",color:"primary"},{default:i(()=>[l(" Buy tickets "),t(_,{name:"right chevron"})]),_:1}),t(w,null,{default:i(()=>[l("Limited")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[ZL]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Watchmen")]),_:1}),t(g,null,{default:i(()=>[eD]),_:1}),t(m,null,{default:i(()=>[tD]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right",color:"primary"},{default:i(()=>[l(" Buy tickets "),t(_,{name:"right chevron"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Relaxed",description:"A group of items can relax its padding to provide more negative space",code:e.relaxedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(T,{size:"tiny",src:ue}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("12 Years a Slave")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{size:"tiny",src:ue}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("My Neighbor Totoro")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{size:"tiny",src:ue}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Watchmen")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Vertical Alignment",description:"Content can specify its vertical alignment",code:e.verticalAlignCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(T,{size:"small",src:ue}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Top Aligned")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{size:"small",src:ue}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[l("Middle Aligned")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{size:"small",src:ue}),t(v,{verticalAlign:"bottom"},{default:i(()=>[t(u,null,{default:i(()=>[l("Bottom Aligned")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Floated Content",description:"Any content element can be floated left or right",code:e.floatedContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(T,{size:"small",src:ue}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[l("Content A")]),_:1}),t(m,null,{default:i(()=>[iD]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right"},{default:i(()=>[l("Action")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{size:"small",src:ue}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[l("Content B")]),_:1}),t(m,null,{default:i(()=>[aD]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right"},{default:i(()=>[l("Action")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{size:"small",src:ue}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[l("Content C")]),_:1}),t(m,null,{default:i(()=>[lD]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right"},{default:i(()=>[l("Action")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Inverted",description:"An item can be inverted to appear on a dark background",code:e.invertedCode},{default:i(()=>[t(B,{inverted:""},{default:i(()=>[t(C,{inverted:""},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{size:"small",src:ue}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Arrowhead Valley Camp")]),_:1}),t(g,null,{default:i(()=>[nD,oD]),_:1}),t(m,null,{default:i(()=>[sD]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{size:"small",src:ue}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Buck's Homebrew Stayaway")]),_:1}),t(g,null,{default:i(()=>[rD,uD]),_:1}),t(m,null,{default:i(()=>[cD]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const mD=$e(AL,[["render",dD]]),pD=z({name:"StatisticDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{statisticCode:'<sui-statistic value="5,550" label="Downloads" />',groupCode:`<sui-statistic-group>
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
<sui-statistic size="huge" value="2,204" label="Views" />`}}}),fD=S("br",null,null,-1),gD=S("br",null,null,-1),hD=S("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),_D=S("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),bD=S("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),vD=S("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1);function yD(e,a,n,o,r,c){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-statistic"),u=y("doc-example"),g=y("sui-statistic-group"),m=y("sui-statistic-value"),h=y("sui-statistic-label"),v=y("sui-icon"),b=y("sui-image"),C=y("sui-segment"),k=y("sui-container");return $(),he("div",null,[t(p,{title:"Statistic",sub:"A statistic emphasizes the current value of an attribute"}),t(k,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"Statistic",description:"A statistic can display a value with a label above or below it",code:e.statisticCode},{default:i(()=>[t(s,{value:"5,550",label:"Downloads"})]),_:1},8,["code"]),t(u,{title:"Statistic Group",description:"A group of statistics",code:e.groupCode},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{value:"22",label:"Faves"}),t(s,{value:"31,200",label:"Views"}),t(s,{value:"22",label:"Members"})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(u,{title:"Value",description:"A statistic can contain a numeric, icon, image, or text value",code:e.valueCode},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{value:"22",label:"Faves"}),t(s,null,{default:i(()=>[t(m,{text:""},{default:i(()=>[l(" Three"),fD,l(" Thousand ")]),_:1}),t(h,null,{default:i(()=>[l("Signups")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(m,null,{default:i(()=>[t(v,{name:"plane"}),l(" 5 ")]),_:1}),t(h,null,{default:i(()=>[l("Flights")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(m,null,{default:i(()=>[t(b,{circular:"",inline:"",src:Yo}),l(" 42 ")]),_:1}),t(h,null,{default:i(()=>[l("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(u,{title:"Label",description:"A statistic can contain a label to help provide context for the presented value",code:e.labelCode},{default:i(()=>[t(s,{value:"2,204",label:"Views"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(u,{title:"Horizontal Statistic",description:"A statistic can present its measurement horizontally",code:e.horizontalCode},{default:i(()=>[t(s,{horizontal:"",value:"2,204",label:"Views"})]),_:1},8,["code"]),t(u,{title:"Colored",description:"A statistic can be formatted to be different colors",code:e.coloredCode},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{color:"red",value:"27",label:"Red"}),t(s,{color:"orange",value:"8",label:"Orange"}),t(s,{color:"yellow",value:"28",label:"Yellow"}),t(s,{color:"olive",value:"7",label:"Olive"}),t(s,{color:"green",value:"14",label:"Green"}),t(s,{color:"teal",value:"82",label:"Teal"}),t(s,{color:"blue",value:"1",label:"Blue"}),t(s,{color:"violet",value:"22",label:"Violet"}),t(s,{color:"purple",value:"23",label:"Purple"}),t(s,{color:"pink",value:"15",label:"Pink"}),t(s,{color:"brown",value:"36",label:"Brown"}),t(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),t(u,{title:"Inverted",description:"A statistic can be formatted to fit on a dark background",code:e.invertedCode},{default:i(()=>[t(C,{inverted:""},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(s,{color:"red",value:"27",label:"Red"}),t(s,{color:"orange",value:"8",label:"Orange"}),t(s,{color:"yellow",value:"28",label:"Yellow"}),t(s,{color:"olive",value:"7",label:"Olive"}),t(s,{color:"green",value:"14",label:"Green"}),t(s,{color:"teal",value:"82",label:"Teal"}),t(s,{color:"blue",value:"1",label:"Blue"}),t(s,{color:"violet",value:"22",label:"Violet"}),t(s,{color:"purple",value:"23",label:"Purple"}),t(s,{color:"pink",value:"15",label:"Pink"}),t(s,{color:"brown",value:"36",label:"Brown"}),t(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1})]),_:1},8,["code"]),t(u,{title:"Stackable",description:"A statistic can automatically stack rows to a single columns on mobile devices",code:e.stackableCode},{default:i(()=>[t(g,{stackable:""},{default:i(()=>[t(s,{color:"red",value:"27",label:"Red"}),t(s,{color:"orange",value:"8",label:"Orange"}),t(s,{color:"yellow",value:"28",label:"Yellow"}),t(s,{color:"olive",value:"7",label:"Olive"}),t(s,{color:"green",value:"14",label:"Green"}),t(s,{color:"teal",value:"82",label:"Teal"}),t(s,{color:"blue",value:"1",label:"Blue"}),t(s,{color:"violet",value:"22",label:"Violet"}),t(s,{color:"purple",value:"23",label:"Purple"}),t(s,{color:"pink",value:"15",label:"Pink"}),t(s,{color:"brown",value:"36",label:"Brown"}),t(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),t(u,{title:"Evenly Divided",description:"A statistic group can have its items divided evenly",code:e.evenlyDividedCode},{default:i(()=>[t(g,{widths:4},{default:i(()=>[t(s,{value:"22",label:"Faves"}),t(s,null,{default:i(()=>[t(m,{text:""},{default:i(()=>[l(" Three"),gD,l(" Thousand ")]),_:1}),t(h,null,{default:i(()=>[l("Signups")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(m,null,{default:i(()=>[t(v,{name:"plane"}),l(" 5 ")]),_:1}),t(h,null,{default:i(()=>[l("Flights")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(m,null,{default:i(()=>[t(b,{circular:"",inline:"",src:Yo}),l(" 42 ")]),_:1}),t(h,null,{default:i(()=>[l("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(u,{title:"Floated",description:"An statistic can sit to the left or right of other content",code:e.floatedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(s,{floated:"right",value:"2,204",label:"Views"}),hD,_D,t(s,{floated:"left",value:"2,204",label:"Views"}),bD,vD]),_:1})]),_:1},8,["code"]),t(u,{title:"Size",description:"A statistic can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{size:"mini",value:"2,204",label:"Views"}),t(s,{size:"tiny",value:"2,204",label:"Views"}),t(s,{size:"small",value:"2,204",label:"Views"}),t(s,{value:"2,204",label:"Views"}),t(s,{size:"large",value:"2,204",label:"Views"}),t(s,{size:"huge",value:"2,204",label:"Views"})]),_:1},8,["code"])]),_:1})])}const SD=$e(pD,[["render",yD]]),wD=z({name:"AccordionDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{accordionCode:`<sui-accordion>
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
</sui-segment>`}}}),CD=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),AD=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),kD=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),xD=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),$D=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),BD=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),TD=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),LD=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),DD=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),ID=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),ED=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),RD=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),zD=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),FD=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),PD=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),MD=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),VD=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),HD=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),ND=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),OD=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1);function jD(e,a,n,o,r,c){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-accordion-tab"),u=y("sui-accordion"),g=y("doc-example"),m=y("sui-segment"),h=y("sui-container");return $(),he("div",null,[t(p,{title:"Accordion",sub:"An accordion allows users to toggle the display of sections of content"}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(g,{title:"Accordion",description:"A standard accordion",code:e.accordionCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[CD]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[AD]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[kD,xD]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Styled",description:"A styled accordion adds basic formatting",code:e.styledCode},{default:i(()=>[t(u,{styled:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[$D]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[BD]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[TD,LD]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(g,{title:"Fluid",description:"An accordion can take up the width of its container",code:e.fluidCode},{default:i(()=>[t(u,{fluid:"",styled:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[DD]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[ID]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[ED,RD]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Inverted",description:"An accordion can be formatted to appear on dark backgrounds",code:e.invertedCode},{default:i(()=>[t(m,{inverted:""},{default:i(()=>[t(u,{inverted:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[zD]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[FD]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[PD,MD]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Usage")]),_:1}),t(g,{title:"Multiple",description:"An accordion can have multiple panels open at the same time",code:e.multipleCode},{default:i(()=>[t(u,{multiple:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[VD]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[HD]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[ND,OD]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const GD=$e(wD,[["render",jD]]),qD=z({name:"CalendarDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{calendar1:G(null),calendarCode:'<sui-calendar v-model="calendar1" placeholder="Date/Time" />'}}});function UD(e,a,n,o,r,c){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-calendar"),u=y("doc-example"),g=y("sui-container");return $(),he("div",null,[t(p,{title:"Calendar",sub:"A calendar allows users to select any date or time"}),t(g,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"Calendar",description:"A standard calendar",code:e.calendarCode},{default:i(()=>[t(s,{modelValue:e.calendar1,"onUpdate:modelValue":a[0]||(a[0]=m=>e.calendar1=m),placeholder:"Date/Time"},null,8,["modelValue"])]),_:1},8,["code"])]),_:1})])}const YD=$e(qD,[["render",UD]]),JD=z({name:"PropertyListTable",props:{properties:Array}});function WD(e,a,n,o,r,c){const p=y("sui-table-header-cell"),f=y("sui-table-row"),s=y("sui-table-header"),u=y("sui-table-cell"),g=y("sui-table-body"),m=y("sui-table");return $(),D(m,{celled:""},{default:i(()=>[t(s,null,{default:i(()=>[t(f,null,{default:i(()=>[t(p,null,{default:i(()=>[l("Name")]),_:1}),t(p,null,{default:i(()=>[l("Type")]),_:1}),t(p,null,{default:i(()=>[l("Default")]),_:1}),t(p,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[($(!0),he(Ce,null,et(e.properties,h=>($(),D(f,{key:h.name},{default:i(()=>[t(u,null,{default:i(()=>[l(Te(h.name),1)]),_:2},1024),t(u,null,{default:i(()=>[l(Te(h.type),1)]),_:2},1024),t(u,null,{default:i(()=>[l(Te(h.default),1)]),_:2},1024),t(u,null,{default:i(()=>[l(Te(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const zn=$e(JD,[["render",WD]]),KD=z({name:"CheckboxDoc",components:{DocPageHeader:tt,DocExample:Je,PropertyListTable:zn},setup(){const e=G(!1),a='<sui-checkbox label="Make my profile visible" v-model="checked" />',n=G([]),o=`<sui-checkbox label="Apple" value="Apple" v-model="selected"  />
<sui-checkbox label="Banana" value="Banana" v-model="selected"  />
<sui-checkbox label="Chocolate" value="Chocolate" v-model="selected"  />`,r=G(!1),c='<sui-checkbox toggle v-model="toggle" />',p=G(!1);return{checked:e,checkboxCode:a,selected:n,multipleCode:o,toggle:r,toggleCode:c,slider:p,sliderCode:'<sui-checkbox slider v-model="slider" />',properties:[{name:"label",type:"string",default:"null",description:"Label of the checkbox."},{name:"modelValue",type:"any",default:"null",description:"Value binding of the checkbox."},{name:"value",type:"any",default:"null",description:"Value of the checkbox."}],events:[{name:"change",description:"Callback to invoke when checkbox value is changed."},{name:"click",description:"Callback to invoke when checkbox is clicked."}]}}}),XD={class:"ui form"},QD={class:"grouped fields"},ZD={class:"field"},eI={class:"field"},tI={class:"field"};function iI(e,a,n,o,r,c){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-checkbox"),u=y("doc-example"),g=y("property-list-table"),m=y("sui-table-header-cell"),h=y("sui-table-row"),v=y("sui-table-header"),b=y("sui-table-cell"),C=y("sui-table-body"),k=y("sui-table"),T=y("sui-container");return $(),he("div",null,[t(p,{title:"Checkbox",sub:"A checkbox allows a user to select a value from a small set of options, often binary"}),t(T,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"Checkbox",description:"A standard checkbox",code:e.checkboxCode},{default:i(()=>[t(s,{label:"Make my profile visible",modelValue:e.checked,"onUpdate:modelValue":a[0]||(a[0]=_=>e.checked=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Multiple",description:"Multiple mode is enabled by default, v-model property refers to an array to bind the selected values",code:e.multipleCode},{default:i(()=>[S("div",XD,[S("div",QD,[S("div",ZD,[t(s,{label:"Apple",value:"Apple",modelValue:e.selected,"onUpdate:modelValue":a[1]||(a[1]=_=>e.selected=_)},null,8,["modelValue"])]),S("div",eI,[t(s,{label:"Banana",value:"Banana",modelValue:e.selected,"onUpdate:modelValue":a[2]||(a[2]=_=>e.selected=_)},null,8,["modelValue"])]),S("div",tI,[t(s,{label:"Chocolate",value:"Chocolate",modelValue:e.selected,"onUpdate:modelValue":a[3]||(a[3]=_=>e.selected=_)},null,8,["modelValue"])])])]),l(" selected : "+Te(e.selected),1)]),_:1},8,["code"]),t(u,{title:"Toggle",description:"A checkbox can toggle",code:e.toggleCode},{default:i(()=>[t(s,{toggle:"",modelValue:e.toggle,"onUpdate:modelValue":a[4]||(a[4]=_=>e.toggle=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Slider",description:"A checkbox can look like a slider",code:e.sliderCode},{default:i(()=>[t(s,{slider:"",modelValue:e.slider,"onUpdate:modelValue":a[5]||(a[5]=_=>e.slider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Properties")]),_:1}),t(g,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Events")]),_:1}),t(k,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Name")]),_:1}),t(m,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[($(!0),he(Ce,null,et(e.events,_=>($(),D(h,{key:_.name},{default:i(()=>[t(b,null,{default:i(()=>[l(Te(_.name),1)]),_:2},1024),t(b,null,{default:i(()=>[l(Te(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const aI=$e(KD,[["render",iI]]),lI=z({name:"DimmerDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){const e=`<sui-dimmer-dimmable>
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
</sui-dimmer-dimmable>`,n=G(!1);return{dimmerCode:e,contentDimmerCode:a,active:n,pageDimmerCode:`<div>
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
</div>`}}});function nI(e,a,n,o,r,c){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-image"),u=y("sui-image-group"),g=y("sui-dimmer"),m=y("sui-dimmer-dimmable"),h=y("doc-example"),v=y("sui-icon"),b=y("sui-button"),C=y("sui-header-subheader"),k=y("sui-container");return $(),he("div",null,[t(p,{title:"Dimmer",sub:"A dimmer hides distractions to focus attention on particular content"}),t(k,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(h,{title:"Dimmer",description:"A simple dimmer displays no content",code:e.dimmerCode},{default:i(()=>[t(m,null,{default:i(()=>[t(f,{as:"h3"},{default:i(()=>[l("Overlayable Section")]),_:1}),t(u,{size:"small"},{default:i(()=>[t(s,{src:ue}),t(s,{src:ue}),t(s,{src:ue})]),_:1}),t(s,{size:"medium",src:Zt}),t(g,{active:""})]),_:1})]),_:1},8,["code"]),t(h,{title:"Content Dimmer",description:"A dimmer can display content",code:e.contentDimmerCode},{default:i(()=>[t(m,null,{default:i(()=>[t(f,{as:"h3"},{default:i(()=>[l("Overlayable Section")]),_:1}),t(u,{size:"small"},{default:i(()=>[t(s,{src:ue}),t(s,{src:ue}),t(s,{src:ue})]),_:1}),t(s,{size:"medium",src:Zt}),t(g,{active:""},{default:i(()=>[t(f,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(v,{name:"heart"}),l(" Dimmed Message! ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Page Dimmer",description:"A dimmer can be formatted to be fixed to the page",code:e.pageDimmerCode},{default:i(()=>[S("div",null,[t(b,{labeled:"",icon:"",onClick:a[0]||(a[0]=T=>e.active=!0)},{default:i(()=>[t(v,{name:"plus"}),l(" Show ")]),_:1}),t(g,{active:e.active,page:"",onClick:a[1]||(a[1]=T=>e.active=!1)},{default:i(()=>[t(f,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(v,{name:"heart"}),l(" Dimmed Message! "),t(C,null,{default:i(()=>[l("Dimmer sub-header")]),_:1})]),_:1})]),_:1},8,["active"])])]),_:1},8,["code"])]),_:1})])}const oI=$e(lI,[["render",nI]]),sI=z({name:"DropdownDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){const e=`<sui-dropdown text="File">
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
</sui-dropdown>`,a=G(null),n=`<sui-dropdown
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
/>`,p=G(null),f=["Arabic","Chinese","Danish","Dutch","English","French","German","Greek","Hungarian","Italian","Japanese","Korean","Lithuanian","Persian","Polish","Portuguese","Russian","Spanish","Swedish","Turkish","Vietnamese"],s=`<sui-dropdown
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
/>`,v=G(null),b=`<sui-dropdown
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
/>`,T=G({text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}});return{dropdownCode:e,selected1:a,selectionCode:n,selected2:o,searchSelectionOptions:r,searchSelectionCode:c,selected3:p,clearableSelectionOptions:f,clearableSelectionCode:s,selected4:u,multipleCode:g,selected5:m,multipleCode2:h,selected6:v,searchDropdownCode:b,selected7:C,searchInMenuCode:k,selected8:T,inlineCode:`<span>
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
</sui-button-group>`}}});function rI(e,a,n,o,r,c){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-dropdown-item"),u=y("sui-divider"),g=y("sui-dropdown-menu"),m=y("sui-dropdown"),h=y("doc-example"),v=y("sui-button"),b=y("sui-button-group"),C=y("sui-container");return $(),he("div",null,[t(p,{title:"Dropdown",sub:"A dropdown allows a user to select a value from a series of options"}),t(C,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(h,{title:"Dropdown",description:"A dropdown",code:e.dropdownCode},{default:i(()=>[t(m,{text:"File"},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{text:"New"}),t(s,{text:"Open...",description:"ctrl + o"}),t(s,{text:"Save as...",description:"ctrl + s"}),t(s,{text:"Rename",description:"ctrl + r"}),t(s,{text:"Make a copy"}),t(s,{icon:"folder",text:"Move to folder"}),t(s,{icon:"trash",text:"Move to trash"}),t(u),t(s,{text:"Download As..."}),t(s,{text:"Publish To Web"}),t(s,{text:"E-mail Collaborators"})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Selection",description:"A dropdown can be used to select between choices in a form",code:e.selectionCode},{default:i(()=>[t(m,{selection:"",placeholder:"Pet",modelValue:e.selected1,"onUpdate:modelValue":a[0]||(a[0]=k=>e.selected1=k),options:["Cat","Dog","Bird","Rabbit","Squirrel","Horse"]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search Selection",description:"A selection dropdown can allow a user to search through a large list of choices",code:e.searchSelectionCode},{default:i(()=>[t(m,{search:"",selection:"",fluid:"",modelValue:e.selected2,"onUpdate:modelValue":a[1]||(a[1]=k=>e.selected2=k),options:e.searchSelectionOptions,placeholder:"Select Country"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(h,{title:"Clearable Selection",description:"A clearable selection dropdown can allow a user to cancel to cancel a previous selection",code:e.clearableSelectionCode},{default:i(()=>[t(m,{clearable:"",selection:"",modelValue:e.selected3,"onUpdate:modelValue":a[2]||(a[2]=k=>e.selected3=k),options:e.clearableSelectionOptions,placeholder:"Select Language"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(h,{title:"Multiple Selection",description:"A selection dropdown can allow multiple selections",code:e.multipleCode},{default:i(()=>[t(m,{selection:"",multiple:"",fluid:"",modelValue:e.selected4,"onUpdate:modelValue":a[3]||(a[3]=k=>e.selected4=k),placeholder:"Skills",options:["Angular","CSS","Ember","HTML","Javascript","NodeJS"]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{code:e.multipleCode2},{default:i(()=>[t(m,{selection:"",multiple:"",fluid:"",search:"",modelValue:e.selected5,"onUpdate:modelValue":a[4]||(a[4]=k=>e.selected5=k),placeholder:"Skills",options:[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"}]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search Dropdown",description:"A dropdown can be searchable",code:e.searchDropdownCode},{default:i(()=>[t(m,{button:"",floating:"",labeled:"",search:"",icon:"world",modelValue:e.selected6,"onUpdate:modelValue":a[5]||(a[5]=k=>e.selected6=k),options:[{text:"Arabic",value:"Arabic"},{text:"Chinese",value:"Chinese"},{text:"Danish",value:"Danish"},{text:"Dutch",value:"Dutch"},{text:"English",value:"English"},{text:"French",value:"French"},{text:"German",value:"German"},{text:"Greek",value:"Greek"},{text:"Hungarian",value:"Hungarian"},{text:"Italian",value:"Italian"},{text:"Japanese",value:"Japanese"},{text:"Korean",value:"Korean"},{text:"Lithuanian",value:"Lithuanian"},{text:"Persian",value:"Persian"},{text:"Polish",value:"Polish"},{text:"Portuguese",value:"Portuguese"},{text:"Russian",value:"Russian"},{text:"Spanish",value:"Spanish"},{text:"Swedish",value:"Swedish"},{text:"Turkish",value:"Turkish"},{text:"Vietnamese",value:"Vietnamese"}],text:"Select Language"},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search In-Menu",description:"A dropdown can include a search prompt inside its menu",code:e.searchInMenuCode},{default:i(()=>[t(m,{text:"Filter Posts",icon:"filter",floating:"",labeled:"",button:"",searchInMenu:"",modelValue:e.selected7,"onUpdate:modelValue":a[6]||(a[6]=k=>e.selected7=k),options:[{text:"Important",value:"Important",label:{color:"red",empty:!0,circular:!0}},{text:"Announcement",value:"Announcement",label:{color:"blue",empty:!0,circular:!0}},{text:"Cannot Fix",value:"Cannot Fix",label:{color:"black",empty:!0,circular:!0}},{text:"News",value:"News",label:{color:"purple",empty:!0,circular:!0}},{text:"Enhancement",value:"Enhancement",label:{color:"orange",empty:!0,circular:!0}},{text:"Change Declined",value:"Change Declined",label:{empty:!0,circular:!0}},{text:"Off Topic",value:"Off Topic",label:{color:"yellow",empty:!0,circular:!0}},{text:"Interesting",value:"Interesting",label:{color:"pink",empty:!0,circular:!0}},{text:"Discussion",value:"Discussion",label:{color:"green",empty:!0,circular:!0}}]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Inline",description:"A dropdown can be formatted to appear inline in other content",code:e.inlineCode},{default:i(()=>[S("span",null,[l(" Show me posts by "),t(m,{inline:"",modelValue:e.selected8,"onUpdate:modelValue":a[7]||(a[7]=k=>e.selected8=k),options:[{text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}},{text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/images/avatar/small/elliot.jpg"}},{text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/images/avatar/small/stevie.jpg"}},{text:"Christian",value:"Christian",image:{avatar:!0,src:"/images/avatar/small/christian.jpg"}}]},null,8,["modelValue","options"])])]),_:1},8,["code"]),t(h,{title:"Pointing",description:"A dropdown can be formatted so that its menu is pointing",code:e.pointingCode},{default:i(()=>[t(m,{icon:"wrench",button:"",pointing:"top left"},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{text:"New"}),t(s,{text:"Save As"}),t(s,{text:"Edit"})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Floating",description:"A dropdown menu can appear to be floating below an element",code:e.floatingCode},{default:i(()=>[t(b,{color:"teal"},{default:i(()=>[t(v,null,{default:i(()=>[l("Save")]),_:1}),t(m,{floating:"",button:"",icon:"dropdown"},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{text:"Edit Post",icon:"edit"}),t(s,{text:"Remove Post",icon:"delete"}),t(s,{text:"Hide Post",icon:"hide"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const uI=$e(sI,[["render",rI]]),cI=z({name:"EmbedDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{youtubeCode:`<sui-embed
  id="O6Xo21L0ybE"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`,aspectRatioCode:`<sui-embed
  aspectRatio="4:3"
  id="HTZudKi36bo"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`}}});function dI(e,a,n,o,r,c){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-embed"),u=y("doc-example"),g=y("sui-container");return $(),he("div",null,[t(p,{title:"Embed",sub:"An embed displays content from other websites like YouTube videos or Google Maps"}),t(g,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"YouTube",description:"An embed can be used to display YouTube Content",code:e.youtubeCode},{default:i(()=>[t(s,{id:"O6Xo21L0ybE",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(u,{title:"Aspect Ratio",description:"An embed can specify an alternative aspect ratio",code:e.aspectRatioCode},{default:i(()=>[t(s,{aspectRatio:"4:3",id:"HTZudKi36bo",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"])]),_:1})])}const mI=$e(cI,[["render",dI]]),pI=S("p",null," We've found the following gravatar image associated with your e-mail address. ",-1),fI=S("p",null,"Is it okay to use this photo?",-1),gI=`<template>
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
<\/script>`,hI={__name:"ModalDoc",setup(e){const a=G(!1);return(n,o)=>($(),D(R,{label:"Modal",code:gI},{description:i(()=>[l(" A standard modal ")]),example:i(()=>[t(d(F),{onClick:o[0]||(o[0]=r=>a.value=!0)},{default:i(()=>[l("Show Modal")]),_:1}),t(d(ln),{modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=r=>a.value=r)},{default:i(()=>[t(d(sn),null,{default:i(()=>[l("Select a Photo")]),_:1}),t(d(on),{image:""},{default:i(()=>[t(d(ce),{wrapped:"",size:"medium",src:"/vue-fomantic-ui/images/avatar/large/rachel.png"}),t(d(No),null,{default:i(()=>[t(d(fe),null,{default:i(()=>[l("Default Profile Image")]),_:1}),pI,fI]),_:1})]),_:1}),t(d(nn),null,{default:i(()=>[t(d(F),{positive:"",onClick:o[1]||(o[1]=r=>a.value=!1)},{default:i(()=>[l("OK")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},_I=S("p",null," Your inbox is getting full, would you like us to enable automatic archiving of old messages? ",-1),bI=`<template>
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
<\/script>`,vI={__name:"BasicDoc",setup(e){const a=G(!1);return(n,o)=>($(),D(R,{label:"Basic",code:bI},{description:i(()=>[l(" A modal can reduce its complexity ")]),example:i(()=>[t(d(F),{onClick:o[0]||(o[0]=r=>a.value=!0)},{default:i(()=>[l("Basic Modal")]),_:1}),t(d(ln),{basic:"",modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=r=>a.value=r)},{default:i(()=>[t(d(sn),{icon:""},{default:i(()=>[t(d(W),{name:"archive"}),l(" Archive Old Messages")]),_:1}),t(d(on),null,{default:i(()=>[_I]),_:1}),t(d(nn),null,{default:i(()=>[t(d(F),{basic:"",color:"red",inverted:"",icon:"remove",content:"No",onClick:o[1]||(o[1]=r=>a.value=!1)}),t(d(F),{basic:"",color:"green",icon:"checkmark",content:"Yes"})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},yI={__name:"Modal",setup(e){const a=[{id:"modal",label:"Modal",category:"Types",component:hI},{id:"basic",label:"Basic",category:"Types",component:vI}];return(n,o)=>($(),D(_t,{title:"Modal",description:"A modal displays content that temporarily blocks interactions with the main view of a site","component-docs":a}))}},SI="/vue-fomantic-ui/images/movies/totoro-horizontal.jpg",wI=z({name:"PopupDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){const e=G(null),a=`<sui-button icon ref="trigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup :trigger="trigger">
  Add users to your feed
</sui-popup>`,n=G(null),o=G(null),r=G(null),c=`<sui-image avatar src="/images/avatar/small/elliot.jpg" ref="titledTrigger1" />
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
</sui-popup>`,s=G(null),u=`<sui-button icon ref="basicTrigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup
  :trigger="basicTrigger"
  basic
  content="The default theme's basic popup removes the pointing arrow."
/>`,g=G(null),m=G(null),h=G(null),v=`<sui-icon name="heart" circular ref="wideTrigger1" />
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
</sui-popup>`,b=G(null),C=G(null),k=G(null),T=G(null),_=G(null),w=G(null),x=G(null),B=G(null),I=`<sui-button ref="positionTrigger1">Top Left</sui-button>
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
<sui-popup :trigger="positionTrigger8" position="left center" content="I am positioned to the left center" />`,M=G(null),V=`<sui-button ref="flowingTrigger">Show Flowing Popup</sui-button>
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
</sui-popup>`,P=G(null),j=G(null),X=G(null),U=G(null),pe=G(null),Be=`<sui-icon name="heart" circular link ref="sizeTrigger1" />
<sui-icon name="heart" circular link ref="sizeTrigger2" />
<sui-icon name="heart" circular link ref="sizeTrigger3" />
<sui-icon name="heart" circular link ref="sizeTrigger4" />
<sui-icon name="heart" circular link ref="sizeTrigger5" />

<sui-popup size="mini" content="Hello. This is a mini popup" :trigger="sizeTrigger1" />
<sui-popup size="tiny" content="Hello. This is a tiny popup" :trigger="sizeTrigger2" />
<sui-popup size="small" content="Hello. This is a small popup" :trigger="sizeTrigger3" />
<sui-popup size="large" content="Hello. This is a large popup" :trigger="sizeTrigger4" />
<sui-popup size="huge" content="Hello. This is a huge popup" :trigger="sizeTrigger5" />`,q=G(null),K=G(null);return{popupTrigger:e,popupCode:a,titledTrigger1:n,titledTrigger2:o,titledTrigger3:r,titledCode:c,triggerTriger:p,triggerCode:f,basicTrigger:s,basicCode:u,wideTrigger1:g,wideTrigger2:m,wideTrigger3:h,wideCode:v,positionTrigger1:b,positionTrigger2:C,positionTrigger3:k,positionTrigger4:T,positionTrigger5:_,positionTrigger6:w,positionTrigger7:x,positionTrigger8:B,positionCode:I,flowingTrigger:M,flowingCode:V,sizeTrigger1:P,sizeTrigger2:j,sizeTrigger3:X,sizeTrigger4:U,sizeTrigger5:pe,sizeCode:Be,invertedTrigger1:q,invertedTrigger2:K,invertedCode:`<sui-icon name="heart" circular ref="invertedTrigger1" />
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
/>`}}}),CI=S("p",null,[S("b",null,"2"),l(" projects, $10 a month ")],-1),AI=S("p",null,[S("b",null,"5"),l(" projects, $20 a month ")],-1),kI=S("p",null,[S("b",null,"8"),l(" projects, $25 a month ")],-1);function xI(e,a,n,o,r,c){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-icon"),u=y("sui-button"),g=y("sui-popup"),m=y("doc-example"),h=y("sui-image"),v=y("sui-card-header"),b=y("sui-card-description"),C=y("sui-card-content"),k=y("sui-card"),T=y("sui-rating"),_=y("sui-divider"),w=y("sui-grid-column"),x=y("sui-grid"),B=y("sui-container");return $(),he("div",null,[t(p,{title:"Popup",sub:"A popup displays additional information on top of a page"}),t(B,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(m,{title:"Popup",description:"An element can specify popup content to appear",code:e.popupCode},{default:i(()=>[t(u,{icon:"",ref:"popupTrigger"},{default:i(()=>[t(s,{name:"add"})]),_:1},512),t(g,{trigger:e.popupTrigger},{default:i(()=>[l(" Add users to your feed ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Titled",description:"An element can specify popup content with a title",code:e.titledCode},{default:i(()=>[t(h,{avatar:"",src:ni,ref:"titledTrigger1"},null,512),t(h,{avatar:"",src:Jo,ref:"titledTrigger2"},null,512),t(h,{avatar:"",src:Rn,ref:"titledTrigger3"},null,512),t(g,{trigger:e.titledTrigger1,header:"Elliot Fu",content:"Elliot has been a member since July 2012"},null,8,["trigger"]),t(g,{trigger:e.titledTrigger2,header:"Stevie Feliciano",content:"Stevie has been a member since August 2013"},null,8,["trigger"]),t(g,{trigger:e.titledTrigger3,header:"Matt",content:"Matt has been a member since July 2014"},null,8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Trigger",description:"A trigger can be complex element",code:e.triggerCode},{default:i(()=>[t(k,{ref:"triggerTriger"},{default:i(()=>[t(h,{src:SI}),t(C,null,{default:i(()=>[t(v,null,{default:i(()=>[l("My Neighbor Totoro")]),_:1}),t(b,null,{default:i(()=>[l(" Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits. ")]),_:1})]),_:1})]),_:1},512),t(g,{trigger:e.triggerTriger,header:"User Rating"},{default:i(()=>[t(T,{icon:"star",defaultRating:3,maxRating:4})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(m,{title:"Basic",description:"A popup can provide more basic formatting",code:e.basicCode},{default:i(()=>[t(u,{icon:"",ref:"basicTrigger"},{default:i(()=>[t(s,{name:"add"})]),_:1},512),t(g,{trigger:e.basicTrigger,basic:"",content:"The default theme's basic popup removes the pointing arrow."},null,8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Position",description:"A popup can be position around its trigger",code:e.positionCode},{default:i(()=>[t(u,{ref:"positionTrigger1"},{default:i(()=>[l("Top Left")]),_:1},512),t(u,{ref:"positionTrigger2"},{default:i(()=>[l("Top Center")]),_:1},512),t(u,{ref:"positionTrigger3"},{default:i(()=>[l("Top Right")]),_:1},512),t(_),t(u,{ref:"positionTrigger4"},{default:i(()=>[l("Bottom Left")]),_:1},512),t(u,{ref:"positionTrigger5"},{default:i(()=>[l("Bottom Center")]),_:1},512),t(u,{ref:"positionTrigger6"},{default:i(()=>[l("Bottom Right")]),_:1},512),t(_),t(u,{ref:"positionTrigger7"},{default:i(()=>[l("Right Center")]),_:1},512),t(u,{ref:"positionTrigger8"},{default:i(()=>[l("Left Center")]),_:1},512),t(g,{trigger:e.positionTrigger1,position:"top left",content:"I am positioned to the top left"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger2,position:"top center",content:"I am positioned to the top center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger3,position:"top right",content:"I am positioned to the top right"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger4,position:"bottom left",content:"I am positioned to the bottom left"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger5,position:"bottom center",content:"I am positioned to the bottom center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger6,position:"bottom right",content:"I am positioned to the bottom right"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger7,position:"right center",content:"I am positioned to the right center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger8,position:"left center",content:"I am positioned to the left center"},null,8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Flowing",description:"A popup can have no maximum width and continue to flow to fit its content",code:e.flowingCode},{default:i(()=>[t(u,{ref:"flowingTrigger"},{default:i(()=>[l("Show Flowing Popup")]),_:1},512),t(g,{trigger:e.flowingTrigger,flowing:""},{default:i(()=>[t(x,{centered:"",divided:"",columns:3},{default:i(()=>[t(w,{textAlign:"center"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[l("Basic Plan")]),_:1}),CI,t(u,null,{default:i(()=>[l("Choose")]),_:1})]),_:1}),t(w,{textAlign:"center"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[l("Business Plan")]),_:1}),AI,t(u,null,{default:i(()=>[l("Choose")]),_:1})]),_:1}),t(w,{textAlign:"center"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[l("Premium Plan")]),_:1}),kI,t(u,null,{default:i(()=>[l("Choose")]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Size",description:"A popup can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger1"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger2"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger3"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger4"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger5"},null,512),t(g,{size:"mini",content:"Hello. This is a mini popup",trigger:e.sizeTrigger1},null,8,["trigger"]),t(g,{size:"tiny",content:"Hello. This is a tiny popup",trigger:e.sizeTrigger2},null,8,["trigger"]),t(g,{size:"small",content:"Hello. This is a small popup",trigger:e.sizeTrigger3},null,8,["trigger"]),t(g,{size:"large",content:"Hello. This is a large popup",trigger:e.sizeTrigger4},null,8,["trigger"]),t(g,{size:"huge",content:"Hello. This is a huge popup",trigger:e.sizeTrigger5},null,8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Wide",description:"A popup can be extra wide to allow for longer content",code:e.wideCode},{default:i(()=>[t(s,{name:"heart",circular:"",ref:"wideTrigger1"},null,512),t(s,{name:"heart",circular:"",ref:"wideTrigger2"},null,512),t(s,{name:"heart",circular:"",ref:"wideTrigger3"},null,512),t(g,{trigger:e.wideTrigger1},{default:i(()=>[l(" Hello. This is a regular pop-up which does not allow for lots of content. You cannot fit a lot of words here as the paragraphs will be pretty narrow. ")]),_:1},8,["trigger"]),t(g,{trigger:e.wideTrigger2,wide:""},{default:i(()=>[l(" Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"]),t(g,{trigger:e.wideTrigger3,wide:"very"},{default:i(()=>[l(" Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Inverted",description:"A popup can have its colors inverted",code:e.invertedCode},{default:i(()=>[t(s,{name:"heart",circular:"",ref:"invertedTrigger1"},null,512),t(u,{icon:"",ref:"invertedTrigger2"},{default:i(()=>[t(s,{name:"add"})]),_:1},512),t(g,{trigger:e.invertedTrigger1,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"]),t(g,{trigger:e.invertedTrigger2,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"])]),_:1},8,["code"])]),_:1})])}const $I=$e(wI,[["render",xI]]),BI=z({name:"ProgressDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{standardCode:'<sui-progress :percent="42" label="Uploading Files" progress />',indicatingCode:'<sui-progress :percent="30" label="30% Founded" indicating active />',barCode:'<sui-progress :percent="33" />',progressCode:'<sui-progress :percent="14" progress />',centeredCode:'<sui-progress :percent="68" progress="centered" />',labelCode:'<sui-progress :percent="37" label="Uploading Files" progress />',activeCode:'<sui-progress :percent="33" label="Uploading Files" progress active />',successCode:'<sui-progress :percent="100" label="Everything worked, your file is all ready." progress success />',warningCode:`<sui-progress :percent="100" label="Your file didn't meet the minimum resolution requirements." progress warning />`,errorCode:'<sui-progress :percent="100" label="There was an error." progress error />',disabledCode:'<sui-progress :percent="25" disabled />',invertedCode:`<sui-segment inverted>
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
<sui-progress :percent="73" color="black" />`}}});function TI(e,a,n,o,r,c){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-progress"),u=y("doc-example"),g=y("sui-segment"),m=y("sui-container");return $(),he("div",null,[t(p,{title:"Progress",sub:"A progress bar shows the progression of a task"}),t(m,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"Standard",description:"A standard progress bar",code:e.standardCode},{default:i(()=>[t(s,{percent:42,label:"Uploading Files",progress:""})]),_:1},8,["code"]),t(u,{title:"Indicating",description:"An indicating progress bar visually indicates the current level of progress of a task",code:e.indicatingCode},{default:i(()=>[t(s,{percent:30,label:"30% Founded",indicating:"",active:""})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(u,{title:"Bar",description:"A progress element can contain a bar visually indicating progress",code:e.barCode},{default:i(()=>[t(s,{percent:33})]),_:1},8,["code"]),t(u,{title:"Progress",description:"A progress bar can contain a text value indicating current progress",code:e.progressCode},{default:i(()=>[t(s,{percent:14,progress:""})]),_:1},8,["code"]),t(u,{title:"Centered Progress Text",description:"The text inside a progress can be centered",code:e.centeredCode},{default:i(()=>[t(s,{percent:68,progress:"centered"})]),_:1},8,["code"]),t(u,{title:"Label",description:"A progress element can contain a label",code:e.labelCode},{default:i(()=>[t(s,{percent:37,label:"Uploading Files",progress:""})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(u,{title:"Active",description:"A progress bar can show activity",code:e.activeCode},{default:i(()=>[t(s,{percent:33,label:"Uploading Files",progress:"",active:""})]),_:1},8,["code"]),t(u,{title:"Success",description:"A progress bar can show a success state",code:e.successCode},{default:i(()=>[t(s,{percent:100,label:"Everything worked, your file is all ready.",progress:"",success:""})]),_:1},8,["code"]),t(u,{title:"Warning",description:"A progress bar can show a warning state",code:e.warningCode},{default:i(()=>[t(s,{percent:100,label:"Your file didn't meet the minimum resolution requirements.",progress:"",warning:""})]),_:1},8,["code"]),t(u,{title:"Error",description:"A progress bar can show an error state",code:e.errorCode},{default:i(()=>[t(s,{percent:100,label:"There was an error.",progress:"",error:""})]),_:1},8,["code"]),t(u,{title:"Disabled",description:"A progress bar can be disabled",code:e.disabledCode},{default:i(()=>[t(s,{percent:25,disabled:""})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(u,{title:"Inverted",description:"A progress bar can have its colors inverted",code:e.invertedCode},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(s,{inverted:"",percent:41,label:"Uploading Files",progress:""}),t(s,{inverted:"",percent:100,label:"Success",success:"",progress:""}),t(s,{inverted:"",percent:100,label:"Warning",warning:"",progress:""}),t(s,{inverted:"",percent:100,label:"Error",error:"",progress:""})]),_:1})]),_:1},8,["code"]),t(u,{title:"Attached",description:"A progress bar can show progress of an element",code:e.attachedCode},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{percent:47,attached:"top"}),l(" La la la la "),t(s,{percent:26,attached:"bottom"})]),_:1})]),_:1},8,["code"]),t(u,{title:"Size",description:"A progress bar can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{percent:88,size:"tiny",label:"tiny"}),t(s,{percent:100,size:"small",label:"small",success:""}),t(s,{percent:83,label:"standard"}),t(s,{percent:73,size:"large",label:"large"}),t(s,{percent:94,size:"big",label:"big"})]),_:1},8,["code"]),t(u,{title:"Color",description:"A progress bar can have different colors",code:e.colorCode},{default:i(()=>[t(s,{percent:32,color:"red"}),t(s,{percent:53,color:"orange"}),t(s,{percent:13,color:"yellow"}),t(s,{percent:37,color:"olive"}),t(s,{percent:83,color:"green"}),t(s,{percent:24,color:"teal"}),t(s,{percent:88,color:"blue"}),t(s,{percent:41,color:"violet"}),t(s,{percent:47,color:"purple"}),t(s,{percent:30,color:"pink"}),t(s,{percent:68,color:"brown"}),t(s,{percent:35,color:"grey"}),t(s,{percent:73,color:"black"})]),_:1},8,["code"])]),_:1})])}const LI=$e(BI,[["render",TI]]),DI=z({name:"RatingDoc",components:{DocPageHeader:tt,DocExample:Je,PropertyListTable:zn},setup(){return{ratingCode:'<sui-rating v-model="value" />',iconCode:`<sui-rating :defaultRating="2" :maxRating="4" color="yellow" />
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
<sui-rating size="massive" :defaultRating="3" :maxRating="4" color="yellow" />`,properties:[{name:"color",type:"string",default:"",description:"A rating can have different colors"},{name:"defaultRating",type:"number",default:0,description:"The initial value of rating."},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"icon",type:"string",default:"star",description:"A rating can use a set of specified icons."},{name:"maxRating",type:"number",default:1,description:"The total number of icons."},{name:"modelValue",type:"number",default:"null",description:"A value of rating."},{name:"size",type:"string",default:"",description:"A rating can have different sizes."}],events:[{name:"change",description:"Callback to invoke on value change."}]}}}),II=S("br",null,null,-1),EI=S("br",null,null,-1),RI=S("br",null,null,-1),zI=S("br",null,null,-1),FI=S("br",null,null,-1),PI=S("br",null,null,-1),MI=S("br",null,null,-1),VI=S("br",null,null,-1),HI=S("br",null,null,-1),NI=S("br",null,null,-1),OI=S("br",null,null,-1),jI=S("br",null,null,-1),GI=S("br",null,null,-1),qI=S("br",null,null,-1),UI=S("br",null,null,-1),YI=S("br",null,null,-1),JI=S("br",null,null,-1),WI=S("br",null,null,-1),KI=S("br",null,null,-1),XI=S("br",null,null,-1),QI=S("br",null,null,-1),ZI=S("br",null,null,-1),eE=S("br",null,null,-1),tE=S("br",null,null,-1),iE=S("br",null,null,-1),aE=S("br",null,null,-1),lE=S("br",null,null,-1),nE=S("br",null,null,-1),oE=S("br",null,null,-1),sE=S("br",null,null,-1),rE=S("br",null,null,-1),uE=S("br",null,null,-1),cE=S("br",null,null,-1),dE=S("br",null,null,-1),mE=S("br",null,null,-1),pE=S("br",null,null,-1),fE=S("br",null,null,-1),gE=S("br",null,null,-1),hE=S("br",null,null,-1),_E=S("br",null,null,-1),bE=S("br",null,null,-1),vE=S("br",null,null,-1),yE=S("br",null,null,-1),SE=S("br",null,null,-1),wE=S("br",null,null,-1),CE=S("br",null,null,-1),AE=S("br",null,null,-1),kE=S("br",null,null,-1);function xE(e,a,n,o,r,c){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-rating"),u=y("doc-example"),g=y("property-list-table"),m=y("sui-table-header-cell"),h=y("sui-table-row"),v=y("sui-table-header"),b=y("sui-table-cell"),C=y("sui-table-body"),k=y("sui-table"),T=y("sui-container");return $(),he("div",null,[t(p,{title:"Rating",sub:"A rating indicates user interest in content"}),t(T,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"Rating",description:"A Basic rating",code:e.ratingCode},{default:i(()=>[t(s)]),_:1},8,["code"]),t(u,{title:"Icon",description:"You can use any available icon as rating indicator",code:e.iconCode},{default:i(()=>[t(s,{defaultRating:2,maxRating:4,color:"yellow"}),II,EI,t(s,{defaultRating:2,maxRating:4,icon:"heart",color:"red"}),RI,zI,t(s,{defaultRating:2,maxRating:4,icon:"female",color:"purple"}),FI,PI,t(s,{defaultRating:2,maxRating:4,icon:"male",color:"blue"}),MI,VI,t(s,{defaultRating:2,maxRating:4,icon:"cloud",color:"grey"}),HI,NI,t(s,{defaultRating:2,maxRating:4,icon:"cat",color:"pink"}),OI,jI,t(s,{defaultRating:2,maxRating:4,icon:"circle",color:"orange"})]),_:1},8,["code"]),t(u,{title:"Color",description:"You can specify any color of the FUI color palette",code:e.colorCode},{default:i(()=>[t(s,{defaultRating:1,maxRating:7,color:"red"}),GI,qI,t(s,{defaultRating:2,maxRating:7,color:"orange"}),UI,YI,t(s,{defaultRating:3,maxRating:7,color:"yellow"}),JI,WI,t(s,{defaultRating:4,maxRating:7,color:"olive"}),KI,XI,t(s,{defaultRating:5,maxRating:7,color:"green"}),QI,ZI,t(s,{defaultRating:6,maxRating:7,color:"teal"}),eE,tE,t(s,{defaultRating:6,maxRating:7,color:"blue"}),iE,aE,t(s,{defaultRating:5,maxRating:7,color:"violet"}),lE,nE,t(s,{defaultRating:4,maxRating:7,color:"purple"}),oE,sE,t(s,{defaultRating:3,maxRating:7,color:"pink"}),rE,uE,t(s,{defaultRating:2,maxRating:7,color:"brown"}),cE,dE,t(s,{defaultRating:1,maxRating:7,color:"grey"}),mE,pE,t(s,{defaultRating:1,maxRating:7,color:"black"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(u,{title:"Disabled",description:"A rating can be started in non-interactive mode by adding a disabled class",code:e.disabledCode},{default:i(()=>[t(s,{disabled:"",defaultRating:3,maxRating:5,color:"yellow"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(u,{title:"Size",description:"A rating can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{size:"mini",defaultRating:3,maxRating:4,color:"yellow"}),fE,gE,t(s,{size:"tiny",defaultRating:3,maxRating:4,color:"yellow"}),hE,_E,t(s,{size:"small",defaultRating:3,maxRating:4,color:"yellow"}),bE,vE,t(s,{defaultRating:3,maxRating:4,color:"yellow"}),yE,SE,t(s,{size:"large",defaultRating:3,maxRating:4,color:"yellow"}),wE,CE,t(s,{size:"huge",defaultRating:3,maxRating:4,color:"yellow"}),AE,kE,t(s,{size:"massive",defaultRating:3,maxRating:4,color:"yellow"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Properties")]),_:1}),t(g,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Events")]),_:1}),t(k,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Name")]),_:1}),t(m,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[($(!0),he(Ce,null,et(e.events,_=>($(),D(h,{key:_.name},{default:i(()=>[t(b,null,{default:i(()=>[l(Te(_.name),1)]),_:2},1024),t(b,null,{default:i(()=>[l(Te(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const $E=$e(DI,[["render",xE]]),BE=z({name:"SidebarDoc",components:{DocPageHeader:tt,DocExample:Je,PropertyListTable:zn},setup(){return{visible1:G(!1),sidebarCode:`<sui-grid :columns="1">
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
</sui-grid>`,properties:[{name:"animation",type:"string",default:"overlay",description:"Specifies the animation of the sidebar."},{name:"dimmed",type:"boolean",default:"false",description:"When specified, display the dim inside pusher content."},{name:"direction",type:"string",default:"left",description:"Specifies the direction the sidebar should appear on."},{name:"visible",type:"boolean",default:"false",description:"Specifies the visibility of the sidebar."}],events:[{name:"hide",description:"Callback to invoke when sidebar hide."},{name:"show",description:"Callback to invoke when sidebar show."}]}}}),TE={class:"pusher"};function LE(e,a,n,o,r,c){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-icon"),u=y("sui-button"),g=y("sui-grid-column"),m=y("sui-menu-item"),h=y("sui-sidebar"),v=y("sui-image"),b=y("sui-segment"),C=y("sui-grid"),k=y("doc-example"),T=y("property-list-table"),_=y("sui-table-header-cell"),w=y("sui-table-row"),x=y("sui-table-header"),B=y("sui-table-cell"),I=y("sui-table-body"),M=y("sui-table"),V=y("sui-container");return $(),he("div",null,[t(p,{title:"Sidebar",sub:"A sidebar hides additional content beside a page"}),t(V,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(k,{title:"Sidebar",description:"A sidebar",code:e.sidebarCode},{default:i(()=>[t(C,{columns:1},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{onClick:a[0]||(a[0]=P=>e.visible1=!e.visible1),icon:""},{default:i(()=>[t(s,{name:"arrow right"})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(b,{class:"pushable"},{default:i(()=>[t(h,{visible:e.visible1,"onUpdate:visible":a[1]||(a[1]=P=>e.visible1=P),dimmed:"",icon:"labeled",inverted:""},{default:i(()=>[t(m,null,{default:i(()=>[t(s,{name:"home"}),l(" Home ")]),_:1}),t(m,null,{default:i(()=>[t(s,{name:"gamepad"}),l(" Games ")]),_:1}),t(m,null,{default:i(()=>[t(s,{name:"camera"}),l(" Channels ")]),_:1})]),_:1},8,["visible"]),S("div",TE,[t(b,null,{default:i(()=>[t(f,{as:"h2"},{default:i(()=>[l("Main Header")]),_:1}),t(v,{src:ze})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Properties")]),_:1}),t(T,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Events")]),_:1}),t(M,{celled:""},{default:i(()=>[t(x,null,{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Name")]),_:1}),t(_,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(I,null,{default:i(()=>[($(!0),he(Ce,null,et(e.events,P=>($(),D(w,{key:P.name},{default:i(()=>[t(B,null,{default:i(()=>[l(Te(P.name),1)]),_:2},1024),t(B,null,{default:i(()=>[l(Te(P.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const DE=$e(BE,[["render",LE]]),IE=z({name:"SliderDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){const e=G(5),a='<sui-slider v-model="slider1" />',n=G(4),o='<sui-slider labeled v-model="slider2" />',r=G(6),c='<sui-slider labeled="ticked" v-model="slider3" />',p=G(0),f=`<sui-slider
  v-model="slider4"
  labeled="ticked"
  :labels='["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ/ς", "τ", "υ", "φ"]'
  :max="20"
/>`,s=G(40),u='<sui-slider v-model="slider5" labeled :step="5" :max="120" :min="20" />',g=G([]);g.value.push(20,60);const m='<sui-slider v-model="slider6" range labeled="ticked" :min="5" :max="100" :step="5" />',h=G(7),v='<sui-slider disabled v-model="slider7" />',b=G(8),C=`<sui-segment inverted>
  <sui-slider inverted v-model="slider8" />
</sui-segment>`,k=G(3),T='<sui-slider reversed v-model="slider9" />',_=G(18),w='<sui-slider vertical v-model="slider10" :max="20" />',x=G(5),B=G(5),I=G(5),M=G(5),V=G(5),P=G(5),j=G(5),X=G(5),U=G(5),pe=G(5),Be=G(5),q=G(5),K=G(5),de=`<sui-slider color="red" v-model="redSlider" />
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
</sui-segment>`,De=G(5),We=G(5),st=G(5);return{slider1:e,sliderCode:a,slider2:n,labeledSliderCode:o,slider3:r,labeledTickedCode:c,slider4:p,customLabelsCode:f,slider5:s,stepCode:u,slider6:g,rangeCode:m,slider7:h,disabledCode:v,slider8:b,invertedCode:C,slider9:k,reversedCode:T,slider10:_,verticalCode:w,redSlider:x,orangeSlider:B,yellowSlider:I,oliveSlider:M,greenSlider:V,tealSlider:P,blueSlider:j,violetSlider:X,purpleSlider:U,pinkSlider:pe,brownSlider:Be,greySlider:q,blackSlider:K,coloredCode:de,invertedColoredCode:ie,smallSlider:De,largeSlider:We,bigSlider:st,sizeCode:`<sui-slider size="small" color="red" v-model="smallSlider" />
<sui-slider size="large" color="yellow" v-model="largeSlider" />
<sui-slider size="big" color="olive" v-model="bigSlider" />`,properties:[{name:"color",type:"string",default:"",description:"A slider can have different colors"},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"inverted",type:"boolean",default:!1,description:"A slider can be formatted to appear on dark backgrounds."},{name:"labeled",type:"boolean|string",default:!1,description:"A slider can show its labels."},{name:"labels",type:"string[]",default:"",description:"A slider can have a custom label according to the label value."},{name:"max",type:"number",default:10,description:"Maximum boundary value."},{name:"min",type:"number",default:0,description:"Mininum boundary value."},{name:"modelValue",type:"number|number[]",default:0,description:"A value of component."},{name:"range",type:"boolean",default:!1,description:"When specified, allows two boundary values to be picked."},{name:"reversed",type:"boolean",default:!1,description:"A slider can be reversed."},{name:"size",type:"string",default:"",description:"A slider can have different sizes."},{name:"step",type:"number",default:1,description:"Step factor to increment/decrement the value."},{name:"vertical",type:"boolean",default:!1,description:"When specified, orientation of the slider becomes vertical."},{name:"verticalHeight",type:"number|string",default:200,description:"Height of the vertical slider."}],events:[{name:"change",description:"Callback to invoke on value change."},{name:"slideend",description:"Callback to invoke when slide end."}]}}});function EE(e,a,n,o,r,c){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-slider"),u=y("doc-example"),g=y("sui-segment"),m=y("sui-table-header-cell"),h=y("sui-table-row"),v=y("sui-table-header"),b=y("sui-table-cell"),C=y("sui-table-body"),k=y("sui-table"),T=y("sui-container");return $(),he("div",null,[t(p,{title:"Slider",sub:"A slider allows users to select values within a range"}),t(T,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"Slider",description:"A standard slider",code:e.sliderCode},{default:i(()=>[t(s,{modelValue:e.slider1,"onUpdate:modelValue":a[0]||(a[0]=_=>e.slider1=_)},null,8,["modelValue"]),l(" "+Te(e.slider1),1)]),_:1},8,["code"]),t(u,{title:"Labeled Slider",description:"A slider that show its labels",code:e.labeledSliderCode},{default:i(()=>[t(s,{labeled:"",modelValue:e.slider2,"onUpdate:modelValue":a[1]||(a[1]=_=>e.slider2=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Labeled Ticked Slider",description:"A slider that show its labels and ticks",code:e.labeledTickedCode},{default:i(()=>[t(s,{labeled:"ticked",modelValue:e.slider3,"onUpdate:modelValue":a[2]||(a[2]=_=>e.slider3=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Custom Interpreted Labels",description:"You can provide a function which returns a custom label according to the label value",code:e.customLabelsCode},{default:i(()=>[t(s,{modelValue:e.slider4,"onUpdate:modelValue":a[3]||(a[3]=_=>e.slider4=_),labeled:"ticked",labels:["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ/ς","τ","υ","φ"],max:20},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Step",description:"A slider can change the default step increment",code:e.stepCode},{default:i(()=>[t(s,{modelValue:e.slider5,"onUpdate:modelValue":a[4]||(a[4]=_=>e.slider5=_),labeled:"",step:5,max:120,min:20},null,8,["modelValue"]),l(" "+Te(e.slider5),1)]),_:1},8,["code"]),t(u,{title:"Range",description:"A range slider which allow you to select a range between two values",code:e.rangeCode},{default:i(()=>[t(s,{modelValue:e.slider6,"onUpdate:modelValue":a[5]||(a[5]=_=>e.slider6=_),range:"",labeled:"ticked",min:5,max:100,step:5},null,8,["modelValue"]),l(" "+Te(e.slider6),1)]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(u,{title:"Disabled",description:"A slider can appear disabled",code:e.disabledCode},{default:i(()=>[t(s,{disabled:"",modelValue:e.slider7,"onUpdate:modelValue":a[6]||(a[6]=_=>e.slider7=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Inverted",description:"A slider can be inverted",code:e.invertedCode},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(s,{inverted:"",modelValue:e.slider8,"onUpdate:modelValue":a[7]||(a[7]=_=>e.slider8=_)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(u,{title:"Reversed",description:"A slider can be reversed",code:e.reversedCode},{default:i(()=>[t(s,{reversed:"",modelValue:e.slider9,"onUpdate:modelValue":a[8]||(a[8]=_=>e.slider9=_)},null,8,["modelValue"]),l(" "+Te(e.slider9),1)]),_:1},8,["code"]),t(u,{title:"Vertical",description:"A slider can be vertical",code:e.verticalCode},{default:i(()=>[t(s,{vertical:"",modelValue:e.slider10,"onUpdate:modelValue":a[9]||(a[9]=_=>e.slider10=_),max:20},null,8,["modelValue"]),l(" "+Te(e.slider10),1)]),_:1},8,["code"]),t(u,{title:"Colored",description:"A slider can be different colors",code:e.coloredCode},{default:i(()=>[t(s,{color:"red",modelValue:e.redSlider,"onUpdate:modelValue":a[10]||(a[10]=_=>e.redSlider=_)},null,8,["modelValue"]),t(s,{color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":a[11]||(a[11]=_=>e.orangeSlider=_)},null,8,["modelValue"]),t(s,{color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":a[12]||(a[12]=_=>e.yellowSlider=_)},null,8,["modelValue"]),t(s,{color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":a[13]||(a[13]=_=>e.oliveSlider=_)},null,8,["modelValue"]),t(s,{color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":a[14]||(a[14]=_=>e.greenSlider=_)},null,8,["modelValue"]),t(s,{color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":a[15]||(a[15]=_=>e.tealSlider=_)},null,8,["modelValue"]),t(s,{color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":a[16]||(a[16]=_=>e.blueSlider=_)},null,8,["modelValue"]),t(s,{color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":a[17]||(a[17]=_=>e.violetSlider=_)},null,8,["modelValue"]),t(s,{color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":a[18]||(a[18]=_=>e.purpleSlider=_)},null,8,["modelValue"]),t(s,{color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":a[19]||(a[19]=_=>e.pinkSlider=_)},null,8,["modelValue"]),t(s,{color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":a[20]||(a[20]=_=>e.brownSlider=_)},null,8,["modelValue"]),t(s,{color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":a[21]||(a[21]=_=>e.greySlider=_)},null,8,["modelValue"]),t(s,{color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":a[22]||(a[22]=_=>e.blackSlider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Inverted Colored",description:"A slider can be different colors while inverted",code:e.invertedColoredCode},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(s,{inverted:"",color:"red",modelValue:e.redSlider,"onUpdate:modelValue":a[23]||(a[23]=_=>e.redSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":a[24]||(a[24]=_=>e.orangeSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":a[25]||(a[25]=_=>e.yellowSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":a[26]||(a[26]=_=>e.oliveSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":a[27]||(a[27]=_=>e.greenSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":a[28]||(a[28]=_=>e.tealSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":a[29]||(a[29]=_=>e.blueSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":a[30]||(a[30]=_=>e.violetSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":a[31]||(a[31]=_=>e.purpleSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":a[32]||(a[32]=_=>e.pinkSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":a[33]||(a[33]=_=>e.brownSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":a[34]||(a[34]=_=>e.greySlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":a[35]||(a[35]=_=>e.blackSlider=_)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(u,{title:"Size",description:"A slider can have different sizes",code:e.sizeCode},{default:i(()=>[t(s,{size:"small",color:"red",modelValue:e.smallSlider,"onUpdate:modelValue":a[36]||(a[36]=_=>e.smallSlider=_)},null,8,["modelValue"]),t(s,{size:"large",color:"yellow",modelValue:e.largeSlider,"onUpdate:modelValue":a[37]||(a[37]=_=>e.largeSlider=_)},null,8,["modelValue"]),t(s,{size:"big",color:"olive",modelValue:e.bigSlider,"onUpdate:modelValue":a[38]||(a[38]=_=>e.bigSlider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Properties")]),_:1}),t(k,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Name")]),_:1}),t(m,null,{default:i(()=>[l("Type")]),_:1}),t(m,null,{default:i(()=>[l("Default")]),_:1}),t(m,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[($(!0),he(Ce,null,et(e.properties,_=>($(),D(h,{key:_.name},{default:i(()=>[t(b,null,{default:i(()=>[l(Te(_.name),1)]),_:2},1024),t(b,null,{default:i(()=>[l(Te(_.type),1)]),_:2},1024),t(b,null,{default:i(()=>[l(Te(_.default),1)]),_:2},1024),t(b,null,{default:i(()=>[l(Te(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Events")]),_:1}),t(k,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Name")]),_:1}),t(m,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[($(!0),he(Ce,null,et(e.events,_=>($(),D(h,{key:_.name},{default:i(()=>[t(b,null,{default:i(()=>[l(Te(_.name),1)]),_:2},1024),t(b,null,{default:i(()=>[l(Te(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const RE=$e(IE,[["render",EE]]),zE=z({name:"TabDoc",components:{DocPageHeader:tt,DocExample:Je,PropertyListTable:zn},setup(){return{basicCode:`<sui-tab>
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
</sui-tab>`,tabProperties:[{name:"activeIndex",type:"string",default:0,description:"Index of the active tab."},{name:"pointing",type:"boolean",default:!1,description:""}],tabPanelProperties:[{name:"header",type:"boolean",default:"null",description:"Orientation of tab headers."}],events:[{name:"tab-change",description:"Callback to invoke when an active tab is changed."},{name:"tab-click",description:"Callback to invoke when an tab is clicked."}]}}});function FE(e,a,n,o,r,c){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-tab-panel"),u=y("sui-tab"),g=y("doc-example"),m=y("property-list-table"),h=y("sui-table-header-cell"),v=y("sui-table-row"),b=y("sui-table-header"),C=y("sui-table-cell"),k=y("sui-table-body"),T=y("sui-table"),_=y("sui-container");return $(),he("div",null,[t(p,{title:"Tab",sub:"A tab is a hidden section of content activated by a menu"}),t(_,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[l("Examples")]),_:1}),t(g,{title:"Basic",code:e.basicCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{header:"First"},{default:i(()=>[l("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[l("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[l("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Pointing",code:e.pointingCode},{default:i(()=>[t(u,{pointing:""},{default:i(()=>[t(s,{header:"First"},{default:i(()=>[l("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[l("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[l("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Secondary",code:e.secondaryCode},{default:i(()=>[t(u,{secondary:""},{default:i(()=>[t(s,{header:"First"},{default:i(()=>[l("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[l("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[l("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Text",code:e.textCode},{default:i(()=>[t(u,{text:""},{default:i(()=>[t(s,{header:"First"},{default:i(()=>[l("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[l("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[l("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Properties")]),_:1}),t(f,{as:"h3"},{default:i(()=>[l("Tab")]),_:1}),t(m,{properties:e.tabProperties},null,8,["properties"]),t(f,{as:"h3"},{default:i(()=>[l("TabPanel")]),_:1}),t(m,{properties:e.tabPanelProperties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[l("Events")]),_:1}),t(T,{celled:""},{default:i(()=>[t(b,null,{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[l("Name")]),_:1}),t(h,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(k,null,{default:i(()=>[($(!0),he(Ce,null,et(e.events,w=>($(),D(v,{key:w.name},{default:i(()=>[t(C,null,{default:i(()=>[l(Te(w.name),1)]),_:2},1024),t(C,null,{default:i(()=>[l(Te(w.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const PE=$e(zE,[["render",FE]]),ME=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({ message: 'I am a toast, nice to meet you !' })
}
<\/script>`,VE={__name:"MinimalDoc",setup(e){const{toast:a}=ut(),n=()=>{a({message:"I am a toast, nice to meet you !"})};return(o,r)=>{const c=y("SuiButton");return $(),D(R,{label:"Minimal",code:ME},{description:i(()=>[l(" A minimal toast will just display a message. ")]),example:i(()=>[t(c,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},HE=`<template>
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
<\/script>`,NE={__name:"TitledDoc",setup(e){const{toast:a}=ut(),n=()=>{a({title:"Better ?",message:"Hey look, I have a title !"})};return(o,r)=>{const c=y("SuiButton");return $(),D(R,{label:"Titled",code:HE},{description:i(()=>[l(" You can add a title to your toast. ")]),example:i(()=>[t(c,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},OE=`<template>
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
<\/script>`,jE={__name:"ProgressBarDoc",setup(e){const{toast:a}=ut(),n=o=>{a({title:"LOOK",message:"See, how long i will last",showProgress:"bottom",showProgressColor:o})};return(o,r)=>{const c=y("SuiButton");return $(),D(R,{label:"Progress Bar",code:OE},{description:i(()=>[l(" You can attach a progress bar to your toast. ")]),example:i(()=>[t(c,{onClick:n},{default:i(()=>[l("Show")]),_:1}),t(c,{color:"red",onClick:r[0]||(r[0]=p=>n("red"))},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},GE=`<template>
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
<\/script>`,qE={__name:"ToastTypeDoc",setup(e){const{toast:a}=ut(),n=o=>{a({message:"You're using the good framework !",type:o})};return(o,r)=>{const c=y("SuiButton");return $(),D(R,{label:"Toast Type",code:GE},{description:i(()=>[l(" A toast can be used to display different types of informations. ")]),example:i(()=>[t(c,{onClick:r[0]||(r[0]=p=>n("success")),positive:""},{default:i(()=>[l("Success")]),_:1}),t(c,{onClick:r[1]||(r[1]=p=>n("error")),negative:""},{default:i(()=>[l("Error")]),_:1}),t(c,{onClick:r[2]||(r[2]=p=>n("warning")),color:"yellow"},{default:i(()=>[l("Warning")]),_:1})]),_:1})}}},UE=`<template>
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
<\/script>`,YE={__name:"PositionDoc",setup(e){const{toast:a}=ut(),n=o=>{a({position:o,message:"Look, I'm here !"})};return(o,r)=>{const c=y("SuiButton");return $(),D(R,{label:"Position",code:UE},{description:i(()=>[l(" A toast can appear at different positions on the screen. ")]),example:i(()=>[t(c,{onClick:r[0]||(r[0]=p=>n("top left"))},{default:i(()=>[l("Top Left")]),_:1}),t(c,{onClick:r[1]||(r[1]=p=>n("bottom right"))},{default:i(()=>[l("Bottom Right")]),_:1})]),_:1})}}},JE=S("br",null,null,-1),WE=`<template>
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
<\/script>`,KE={__name:"AttachedPosition",setup(e){const{toast:a}=ut(),n=o=>{a({attached:o,title:"Watch out!",message:`I am a ${o} attached toast`})};return(o,r)=>{const c=y("SuiButton");return $(),D(R,{label:"Attached Position",code:WE},{description:i(()=>[l(" A toast can have an attached position which will show the toast over the whole width of the screen."),JE,l(" Just like notifications on mobile devices. ")]),example:i(()=>[t(c,{onClick:r[0]||(r[0]=p=>n("top"))},{default:i(()=>[l("Top")]),_:1}),t(c,{onClick:r[1]||(r[1]=p=>n("bottom"))},{default:i(()=>[l("Bottom")]),_:1})]),_:1})}}},XE=`<template>
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
<\/script>`,QE={__name:"DirectionDoc",setup(e){const{toast:a}=ut(),n=()=>{a({horizontal:!0,position:"top left",title:"Watch out!",message:"Next one will open to the right"})};return(o,r)=>{const c=y("SuiButton");return $(),D(R,{label:"Direction",code:XE},{description:i(()=>[l(" Toasts can stack horizontal ")]),example:i(()=>[t(c,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},ZE=`<template>
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
<\/script>`,eR={__name:"CenterAligned",setup(e){const{toast:a}=ut(),n=()=>{a({centered:!0,title:"Veronika has joined",message:"Welcome to the Fomantic-UI community!"})};return(o,r)=>{const c=y("SuiButton");return $(),D(R,{label:"Center Aligned",code:ZE},{description:i(()=>[l(" The toasts content can be shown center aligned. ")]),example:i(()=>[t(c,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},tR=`<template>
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
<\/script>`,iR={__name:"DurationDoc",setup(e){const{toast:a}=ut(),n=o=>{a({displayTime:o,message:o===0?"I'll stay here until you click on me !":"You will see me for 5 seconds."})};return(o,r)=>{const c=y("SuiButton");return $(),D(R,{label:"Duration",code:tR},{description:i(()=>[l(" You can choose how long a toast should be displayed. ")]),example:i(()=>[t(c,{onClick:r[0]||(r[0]=p=>n(5e3))},{default:i(()=>[l("5 seconds")]),_:1}),t(c,{onClick:r[1]||(r[1]=p=>n(0))},{default:i(()=>[l("Stay")]),_:1})]),_:1})}}},aR=`<template>
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
<\/script>`,lR={__name:"MessageStyleDoc",setup(e){const{toast:a}=ut(),n=()=>{a({messageStyle:!0,message:"I got my style from the message class",color:"purple"})};return(o,r)=>{const c=y("SuiButton");return $(),D(R,{label:"Use Message Style",code:aR},{description:i(()=>[l(" You can use all of the styles and colors from the message component. ")]),example:i(()=>[t(c,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},nR=`<template>
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
<\/script>`,oR={__name:"IncreasingProgressBarDoc",setup(e){const{toast:a}=ut(),n=()=>{a({title:"LOOK",message:"See, how long i will last",showProgress:"top",showProgressUp:!0})};return(o,r)=>{const c=y("SuiButton");return $(),D(R,{label:"Increasing Progress Bar",code:nR},{description:i(()=>[l(" You can use the progress bar to show the progress of a task. ")]),example:i(()=>[t(c,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},sR=`<template>
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
<\/script>`,rR={__name:"ColorVariantsDoc",setup(e){const{toast:a}=ut(),n=G(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],r=()=>{a({color:o[n.value],message:"I am a colorful toast",showProgress:"bottom"}),n.value=(n.value+1)%o.length};return(c,p)=>{const f=y("SuiButton");return $(),D(R,{label:"Color Variants",code:sR},{description:i(()=>[l(" You can use all of the usual color names. ")]),example:i(()=>[t(f,{onClick:r},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},uR={__name:"InvertedColorsDoc",setup(e){const{toast:a}=ut(),n=G(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],r=()=>{a({color:o[n.value],inverted:!0,message:"I am an inverted colorful toast",showProgress:"bottom"}),n.value=(n.value+1)%o.length};return(c,p)=>{const f=y("SuiButton");return $(),D(R,{label:"Inverted Colors",code:c.code},{description:i(()=>[l(" Same as above, just add inverted to the class definition. ")]),example:i(()=>[t(f,{onClick:r},{default:i(()=>[l("Show")]),_:1})]),_:1},8,["code"])}}},cR=`<template>
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
<\/script>`,dR={__name:"ActionGeneralDoc",setup(e){const{toast:a}=ut(),n=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[J(F,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>[J(W,{name:"check"}),"Yes"]),J(F,{color:"red",icon:!0},()=>[J(W,{name:"ban"})]),J(F,{color:"blue",onclick:()=>a({message:"Returning false from the click handler avoids closing the toast"})},()=>"?")]})};return(o,r)=>($(),D(R,{label:"General",code:cR},{description:i(()=>[l(" Define click actions to your toast by providing a text and/or icon, optional class and click handler. ")]),example:i(()=>[t(d(F),{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1}))}},mR=`<template>
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
<\/script>`,pR={__name:"ActionBasicDoc",setup(e){const{toast:a}=ut(),n=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[J(F,{color:"yellow",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really")],actionsProps:{basic:!0,aligned:"left"}})};return(o,r)=>($(),D(R,{label:"Basic",code:mR},{description:i(()=>[l(" The classActions setting provides you a way to adjust the overall appearance of the action buttons. Using basic class does not lighten the actions background. left aligns the buttons to the left. ")]),example:i(()=>[t(d(F),{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1}))}},fR=`<template>
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
<\/script>`,gR={__name:"ActionAttachedDoc",setup(e){const{toast:a}=ut(),n=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[J(F,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),J(F,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"top"}})};return(o,r)=>($(),D(R,{label:"Attached",code:fR},{description:i(()=>[l(" Using attached converts your actions into a Button group. Also add top to display the actions attached to the top of the toast. ")]),example:i(()=>[t(d(F),{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1}))}},hR=`<template>
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
<\/script>`,_R={__name:"ActionVerticalDoc",setup(e){const{toast:a}=ut(),n=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[J(F,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),J(F,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{vertical:!0}})};return(o,r)=>($(),D(R,{label:"Vertical",code:hR},{description:i(()=>[l(" You can use vertical to display your actions to the right of the toast. ")]),example:i(()=>[t(d(F),{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1}))}},bR=S("br",null,null,-1),vR=`<template>
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
<\/script>`,yR={__name:"ActionVerticalAttachedDoc",setup(e){const{toast:a}=ut(),n=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[J(F,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),J(F,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"left",vertical:!0}})};return(o,r)=>($(),D(R,{label:"Vertical Attached",code:vR},{description:i(()=>[l(" Vertical actions can also be displayed as button groups using vertical attached."),bR,l(" Vertical attached actions also support left. ")]),example:i(()=>[t(d(F),{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1}))}},SR={__name:"Toast",setup(e){const a=[{id:"minimal",label:"Minimal",category:"Types",component:VE},{id:"titled",label:"Titled",category:"Types",component:NE},{id:"progress-bar",label:"Progress Bar",category:"Types",component:jE},{id:"toast-type",label:"Toast Type",category:"Variations",component:qE},{id:"position",label:"Position",category:"Variations",component:YE},{id:"attached-position",label:"Attached Position",category:"Variations",component:KE},{id:"direction",label:"Direction",category:"Variations",component:QE},{id:"center-aligned",label:"Center Aligned",category:"Variations",component:eR},{id:"duration",label:"Duration",category:"Variations",component:iR},{id:"message-style",label:"Use Message Style",category:"Variations",component:lR},{id:"increasing-progress-bar",label:"Increasing Progress Bar",category:"Variations",component:oR},{id:"color-variants",label:"Color Variants",category:"Variations",component:rR},{id:"inverted-colors",label:"Inverted Colors",category:"Variations",component:uR},{id:"general",label:"General",category:"Actions",component:dR},{id:"action-basic",label:"Basic",category:"Actions",component:pR},{id:"action-attached",label:"Attached",category:"Actions",component:gR},{id:"action-vertical",label:"Vertical",category:"Actions",component:_R},{id:"action-vertical-attached",label:"Vertical Attached",category:"Actions",component:yR}];return(n,o)=>($(),D(_t,{title:"Toast",description:"A toast allows users to be notified of an event","component-docs":a}))}},wR=[{path:"/",component:X_,children:[{path:"/",component:kb},{path:"elements/button",component:Pw},{path:"elements/container",component:Ww},{path:"elements/divider",component:yC},{path:"elements/emoji",component:DC},{path:"elements/flag",component:FC},{path:"elements/header",component:fA},{path:"elements/icon",component:UA},{path:"elements/image",component:E0},{path:"elements/input",component:lk},{path:"elements/label",component:px},{path:"elements/list",component:Vx},{path:"elements/loader",component:r$},{path:"elements/rail",component:m$},{path:"elements/reveal",component:_$},{path:"elements/segment",component:O$},{path:"elements/step",component:J$},{path:"collections/breadcrumb",component:dB},{path:"collections/form",component:LB},{path:"collections/grid",component:PB},{path:"collections/menu",component:qB},{path:"collections/message",component:aT},{path:"collections/table",component:hT},{path:"views/advertisement",component:ST},{path:"views/card",component:i2},{path:"views/comment",component:tL},{path:"views/feed",component:CL},{path:"views/item",component:mD},{path:"views/statistic",component:SD},{path:"modules/accordion",component:GD},{path:"modules/calendar",component:YD},{path:"modules/checkbox",component:aI},{path:"modules/dimmer",component:oI},{path:"modules/dropdown",component:uI},{path:"modules/embed",component:mI},{path:"modules/modal",component:yI},{path:"modules/popup",component:$I},{path:"modules/progress",component:LI},{path:"modules/rating",component:$E},{path:"modules/sidebar",component:DE},{path:"modules/slider",component:RE},{path:"modules/tab",component:PE},{path:"modules/toast",component:SR}]}],CR=L_({history:qh("/vue-fomantic-ui/"),routes:wR,scrollBehavior(e,a,n){var o;e.hash||(o=document.querySelector(".article"))==null||o.scrollTo(0,0)}});(function(e){var a="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},o={bash:n,environment:{pattern:RegExp("\\$"+a),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+a),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+a),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:o},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:o},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:o.entity}}],environment:{pattern:RegExp("\\$?"+a),alias:"constant"},variable:o.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var r=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],c=o.variable[1].inside,p=0;p<r.length;p++)c[r[p]]=e.languages.bash[r[p]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);const Fs=bm($h);Fs.use(CR);Fs.use(mS);Fs.mount("#app");

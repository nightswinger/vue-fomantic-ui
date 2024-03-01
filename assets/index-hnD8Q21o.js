(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ql(e,a){const n=new Set(e.split(","));return a?o=>n.has(o.toLowerCase()):o=>n.has(o)}const He={},Zi=[],bt=()=>{},dp=()=>!1,al=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Mo=e=>e.startsWith("onUpdate:"),Qe=Object.assign,Vo=(e,a)=>{const n=e.indexOf(a);n>-1&&e.splice(n,1)},mp=Object.prototype.hasOwnProperty,Ie=(e,a)=>mp.call(e,a),pe=Array.isArray,ea=e=>ya(e)==="[object Map]",Ni=e=>ya(e)==="[object Set]",Ts=e=>ya(e)==="[object Date]",pp=e=>ya(e)==="[object RegExp]",Se=e=>typeof e=="function",Ze=e=>typeof e=="string",bi=e=>typeof e=="symbol",Oe=e=>e!==null&&typeof e=="object",Ho=e=>(Oe(e)||Se(e))&&Se(e.then)&&Se(e.catch),Lc=Object.prototype.toString,ya=e=>Lc.call(e),fp=e=>ya(e).slice(8,-1),Ec=e=>ya(e)==="[object Object]",No=e=>Ze(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Fa=Ql(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zl=e=>{const a=Object.create(null);return n=>a[n]||(a[n]=e(n))},gp=/-(\w)/g,gt=Zl(e=>e.replace(gp,(a,n)=>n?n.toUpperCase():"")),hp=/\B([A-Z])/g,xt=Zl(e=>e.replace(hp,"-$1").toLowerCase()),ll=Zl(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ma=Zl(e=>e?`on${ll(e)}`:""),Mt=(e,a)=>!Object.is(e,a),ta=(e,a)=>{for(let n=0;n<e.length;n++)e[n](a)},Tl=(e,a,n)=>{Object.defineProperty(e,a,{configurable:!0,enumerable:!1,value:n})},Ua=e=>{const a=parseFloat(e);return isNaN(a)?e:a},Ll=e=>{const a=Ze(e)?Number(e):NaN;return isNaN(a)?e:a};let Ls;const Dc=()=>Ls||(Ls=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),_p="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",bp=Ql(_p);function Sa(e){if(pe(e)){const a={};for(let n=0;n<e.length;n++){const o=e[n],r=Ze(o)?wp(o):Sa(o);if(r)for(const c in r)a[c]=r[c]}return a}else if(Ze(e)||Oe(e))return e}const vp=/;(?![^(]*\))/g,yp=/:([^]+)/,Sp=/\/\*[^]*?\*\//g;function wp(e){const a={};return e.replace(Sp,"").split(vp).forEach(n=>{if(n){const o=n.split(yp);o.length>1&&(a[o[0].trim()]=o[1].trim())}}),a}function nl(e){let a="";if(Ze(e))a=e;else if(pe(e))for(let n=0;n<e.length;n++){const o=nl(e[n]);o&&(a+=o+" ")}else if(Oe(e))for(const n in e)e[n]&&(a+=n+" ");return a.trim()}function Cp(e){if(!e)return null;let{class:a,style:n}=e;return a&&!Ze(a)&&(e.class=nl(a)),n&&(e.style=Sa(n)),e}const Ap="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kp=Ql(Ap);function Ic(e){return!!e||e===""}function xp(e,a){if(e.length!==a.length)return!1;let n=!0;for(let o=0;n&&o<e.length;o++)n=Xt(e[o],a[o]);return n}function Xt(e,a){if(e===a)return!0;let n=Ts(e),o=Ts(a);if(n||o)return n&&o?e.getTime()===a.getTime():!1;if(n=bi(e),o=bi(a),n||o)return e===a;if(n=pe(e),o=pe(a),n||o)return n&&o?xp(e,a):!1;if(n=Oe(e),o=Oe(a),n||o){if(!n||!o)return!1;const r=Object.keys(e).length,c=Object.keys(a).length;if(r!==c)return!1;for(const m in e){const p=e.hasOwnProperty(m),s=a.hasOwnProperty(m);if(p&&!s||!p&&s||!Xt(e[m],a[m]))return!1}}return String(e)===String(a)}function en(e,a){return e.findIndex(n=>Xt(n,a))}const ke=e=>Ze(e)?e:e==null?"":pe(e)||Oe(e)&&(e.toString===Lc||!Se(e.toString))?JSON.stringify(e,Rc,2):String(e),Rc=(e,a)=>a&&a.__v_isRef?Rc(e,a.value):ea(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((n,[o,r],c)=>(n[An(o,c)+" =>"]=r,n),{})}:Ni(a)?{[`Set(${a.size})`]:[...a.values()].map(n=>An(n))}:bi(a)?An(a):Oe(a)&&!pe(a)&&!Ec(a)?String(a):a,An=(e,a="")=>{var n;return bi(e)?`Symbol(${(n=e.description)!=null?n:a})`:e};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ct;class Oo{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ct,!a&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const n=Ct;try{return Ct=this,a()}finally{Ct=n}}}on(){Ct=this}off(){Ct=this.parent}stop(a){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!a){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function $p(e){return new Oo(e)}function zc(e,a=Ct){a&&a.active&&a.effects.push(e)}function jo(){return Ct}function Pc(e){Ct&&Ct.cleanups.push(e)}let Ti;class ca{constructor(a,n,o,r){this.fn=a,this.trigger=n,this.scheduler=o,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,zc(this,r)}get dirty(){if(this._dirtyLevel===1){Oi();for(let a=0;a<this._depsLength;a++){const n=this.deps[a];if(n.computed&&(Bp(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),ji()}return this._dirtyLevel>=2}set dirty(a){this._dirtyLevel=a?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let a=gi,n=Ti;try{return gi=!0,Ti=this,this._runnings++,Es(this),this.fn()}finally{Ds(this),this._runnings--,Ti=n,gi=a}}stop(){var a;this.active&&(Es(this),Ds(this),(a=this.onStop)==null||a.call(this),this.active=!1)}}function Bp(e){return e.value}function Es(e){e._trackId++,e._depsLength=0}function Ds(e){if(e.deps&&e.deps.length>e._depsLength){for(let a=e._depsLength;a<e.deps.length;a++)Fc(e.deps[a],e);e.deps.length=e._depsLength}}function Fc(e,a){const n=e.get(a);n!==void 0&&a._trackId!==n&&(e.delete(a),e.size===0&&e.cleanup())}function Tp(e,a){e.effect instanceof ca&&(e=e.effect.fn);const n=new ca(e,bt,()=>{n.dirty&&n.run()});a&&(Qe(n,a),a.scope&&zc(n,a.scope)),(!a||!a.lazy)&&n.run();const o=n.run.bind(n);return o.effect=n,o}function Lp(e){e.effect.stop()}let gi=!0,Wn=0;const Mc=[];function Oi(){Mc.push(gi),gi=!1}function ji(){const e=Mc.pop();gi=e===void 0?!0:e}function Go(){Wn++}function qo(){for(Wn--;!Wn&&Kn.length;)Kn.shift()()}function Vc(e,a,n){if(a.get(e)!==e._trackId){a.set(e,e._trackId);const o=e.deps[e._depsLength];o!==a?(o&&Fc(o,e),e.deps[e._depsLength++]=a):e._depsLength++}}const Kn=[];function Hc(e,a,n){Go();for(const o of e.keys())if(o._dirtyLevel<a&&e.get(o)===o._trackId){const r=o._dirtyLevel;o._dirtyLevel=a,r===0&&(o._shouldSchedule=!0,o.trigger())}Nc(e),qo()}function Nc(e){for(const a of e.keys())a.scheduler&&a._shouldSchedule&&(!a._runnings||a.allowRecurse)&&e.get(a)===a._trackId&&(a._shouldSchedule=!1,Kn.push(a.scheduler))}const Oc=(e,a)=>{const n=new Map;return n.cleanup=e,n.computed=a,n},El=new WeakMap,Li=Symbol(""),Xn=Symbol("");function St(e,a,n){if(gi&&Ti){let o=El.get(e);o||El.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=Oc(()=>o.delete(n))),Vc(Ti,r)}}function Wt(e,a,n,o,r,c){const m=El.get(e);if(!m)return;let p=[];if(a==="clear")p=[...m.values()];else if(n==="length"&&pe(e)){const s=Number(o);m.forEach((u,f)=>{(f==="length"||!bi(f)&&f>=s)&&p.push(u)})}else switch(n!==void 0&&p.push(m.get(n)),a){case"add":pe(e)?No(n)&&p.push(m.get("length")):(p.push(m.get(Li)),ea(e)&&p.push(m.get(Xn)));break;case"delete":pe(e)||(p.push(m.get(Li)),ea(e)&&p.push(m.get(Xn)));break;case"set":ea(e)&&p.push(m.get(Li));break}Go();for(const s of p)s&&Hc(s,2);qo()}function Ep(e,a){var n;return(n=El.get(e))==null?void 0:n.get(a)}const Dp=Ql("__proto__,__v_isRef,__isVue"),jc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(bi)),Is=Ip();function Ip(){const e={};return["includes","indexOf","lastIndexOf"].forEach(a=>{e[a]=function(...n){const o=Ee(this);for(let c=0,m=this.length;c<m;c++)St(o,"get",c+"");const r=o[a](...n);return r===-1||r===!1?o[a](...n.map(Ee)):r}}),["push","pop","shift","unshift","splice"].forEach(a=>{e[a]=function(...n){Oi(),Go();const o=Ee(this)[a].apply(this,n);return qo(),ji(),o}}),e}function Rp(e){const a=Ee(this);return St(a,"has",e),a.hasOwnProperty(e)}class Gc{constructor(a=!1,n=!1){this._isReadonly=a,this._shallow=n}get(a,n,o){const r=this._isReadonly,c=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return c;if(n==="__v_raw")return o===(r?c?Kc:Wc:c?Jc:Yc).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(o)?a:void 0;const m=pe(a);if(!r){if(m&&Ie(Is,n))return Reflect.get(Is,n,o);if(n==="hasOwnProperty")return Rp}const p=Reflect.get(a,n,o);return(bi(n)?jc.has(n):Dp(n))||(r||St(a,"get",n),c)?p:ut(p)?m&&No(n)?p:p.value:Oe(p)?r?Yo(p):Zt(p):p}}class qc extends Gc{constructor(a=!1){super(!1,a)}set(a,n,o,r){let c=a[n];if(!this._shallow){const s=Ri(c);if(!Ya(o)&&!Ri(o)&&(c=Ee(c),o=Ee(o)),!pe(a)&&ut(c)&&!ut(o))return s?!1:(c.value=o,!0)}const m=pe(a)&&No(n)?Number(n)<a.length:Ie(a,n),p=Reflect.set(a,n,o,r);return a===Ee(r)&&(m?Mt(o,c)&&Wt(a,"set",n,o):Wt(a,"add",n,o)),p}deleteProperty(a,n){const o=Ie(a,n);a[n];const r=Reflect.deleteProperty(a,n);return r&&o&&Wt(a,"delete",n,void 0),r}has(a,n){const o=Reflect.has(a,n);return(!bi(n)||!jc.has(n))&&St(a,"has",n),o}ownKeys(a){return St(a,"iterate",pe(a)?"length":Li),Reflect.ownKeys(a)}}class Uc extends Gc{constructor(a=!1){super(!0,a)}set(a,n){return!0}deleteProperty(a,n){return!0}}const zp=new qc,Pp=new Uc,Fp=new qc(!0),Mp=new Uc(!0),Uo=e=>e,tn=e=>Reflect.getPrototypeOf(e);function cl(e,a,n=!1,o=!1){e=e.__v_raw;const r=Ee(e),c=Ee(a);n||(Mt(a,c)&&St(r,"get",a),St(r,"get",c));const{has:m}=tn(r),p=o?Uo:n?Ko:Ja;if(m.call(r,a))return p(e.get(a));if(m.call(r,c))return p(e.get(c));e!==r&&e.get(a)}function dl(e,a=!1){const n=this.__v_raw,o=Ee(n),r=Ee(e);return a||(Mt(e,r)&&St(o,"has",e),St(o,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function ml(e,a=!1){return e=e.__v_raw,!a&&St(Ee(e),"iterate",Li),Reflect.get(e,"size",e)}function Rs(e){e=Ee(e);const a=Ee(this);return tn(a).has.call(a,e)||(a.add(e),Wt(a,"add",e,e)),this}function zs(e,a){a=Ee(a);const n=Ee(this),{has:o,get:r}=tn(n);let c=o.call(n,e);c||(e=Ee(e),c=o.call(n,e));const m=r.call(n,e);return n.set(e,a),c?Mt(a,m)&&Wt(n,"set",e,a):Wt(n,"add",e,a),this}function Ps(e){const a=Ee(this),{has:n,get:o}=tn(a);let r=n.call(a,e);r||(e=Ee(e),r=n.call(a,e)),o&&o.call(a,e);const c=a.delete(e);return r&&Wt(a,"delete",e,void 0),c}function Fs(){const e=Ee(this),a=e.size!==0,n=e.clear();return a&&Wt(e,"clear",void 0,void 0),n}function pl(e,a){return function(o,r){const c=this,m=c.__v_raw,p=Ee(m),s=a?Uo:e?Ko:Ja;return!e&&St(p,"iterate",Li),m.forEach((u,f)=>o.call(r,s(u),s(f),c))}}function fl(e,a,n){return function(...o){const r=this.__v_raw,c=Ee(r),m=ea(c),p=e==="entries"||e===Symbol.iterator&&m,s=e==="keys"&&m,u=r[e](...o),f=n?Uo:a?Ko:Ja;return!a&&St(c,"iterate",s?Xn:Li),{next(){const{value:d,done:h}=u.next();return h?{value:d,done:h}:{value:p?[f(d[0]),f(d[1])]:f(d),done:h}},[Symbol.iterator](){return this}}}}function ii(e){return function(...a){return e==="delete"?!1:e==="clear"?void 0:this}}function Vp(){const e={get(c){return cl(this,c)},get size(){return ml(this)},has:dl,add:Rs,set:zs,delete:Ps,clear:Fs,forEach:pl(!1,!1)},a={get(c){return cl(this,c,!1,!0)},get size(){return ml(this)},has:dl,add:Rs,set:zs,delete:Ps,clear:Fs,forEach:pl(!1,!0)},n={get(c){return cl(this,c,!0)},get size(){return ml(this,!0)},has(c){return dl.call(this,c,!0)},add:ii("add"),set:ii("set"),delete:ii("delete"),clear:ii("clear"),forEach:pl(!0,!1)},o={get(c){return cl(this,c,!0,!0)},get size(){return ml(this,!0)},has(c){return dl.call(this,c,!0)},add:ii("add"),set:ii("set"),delete:ii("delete"),clear:ii("clear"),forEach:pl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(c=>{e[c]=fl(c,!1,!1),n[c]=fl(c,!0,!1),a[c]=fl(c,!1,!0),o[c]=fl(c,!0,!0)}),[e,n,a,o]}const[Hp,Np,Op,jp]=Vp();function an(e,a){const n=a?e?jp:Op:e?Np:Hp;return(o,r,c)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(Ie(n,r)&&r in o?n:o,r,c)}const Gp={get:an(!1,!1)},qp={get:an(!1,!0)},Up={get:an(!0,!1)},Yp={get:an(!0,!0)},Yc=new WeakMap,Jc=new WeakMap,Wc=new WeakMap,Kc=new WeakMap;function Jp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wp(e){return e.__v_skip||!Object.isExtensible(e)?0:Jp(fp(e))}function Zt(e){return Ri(e)?e:ln(e,!1,zp,Gp,Yc)}function Xc(e){return ln(e,!1,Fp,qp,Jc)}function Yo(e){return ln(e,!0,Pp,Up,Wc)}function Kp(e){return ln(e,!0,Mp,Yp,Kc)}function ln(e,a,n,o,r){if(!Oe(e)||e.__v_raw&&!(a&&e.__v_isReactive))return e;const c=r.get(e);if(c)return c;const m=Wp(e);if(m===0)return e;const p=new Proxy(e,m===2?o:n);return r.set(e,p),p}function Ei(e){return Ri(e)?Ei(e.__v_raw):!!(e&&e.__v_isReactive)}function Ri(e){return!!(e&&e.__v_isReadonly)}function Ya(e){return!!(e&&e.__v_isShallow)}function Jo(e){return Ei(e)||Ri(e)}function Ee(e){const a=e&&e.__v_raw;return a?Ee(a):e}function Wo(e){return Tl(e,"__v_skip",!0),e}const Ja=e=>Oe(e)?Zt(e):e,Ko=e=>Oe(e)?Yo(e):e;class Qc{constructor(a,n,o,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ca(()=>a(this._value),()=>ia(this,1),()=>this.dep&&Nc(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const a=Ee(this);return(!a._cacheable||a.effect.dirty)&&Mt(a._value,a._value=a.effect.run())&&ia(a,2),Xo(a),a.effect._dirtyLevel>=1&&ia(a,1),a._value}set value(a){this._setter(a)}get _dirty(){return this.effect.dirty}set _dirty(a){this.effect.dirty=a}}function Xp(e,a,n=!1){let o,r;const c=Se(e);return c?(o=e,r=bt):(o=e.get,r=e.set),new Qc(o,r,c||!r,n)}function Xo(e){gi&&Ti&&(e=Ee(e),Vc(Ti,e.dep||(e.dep=Oc(()=>e.dep=void 0,e instanceof Qc?e:void 0))))}function ia(e,a=2,n){e=Ee(e);const o=e.dep;o&&Hc(o,a)}function ut(e){return!!(e&&e.__v_isRef===!0)}function q(e){return ed(e,!1)}function Zc(e){return ed(e,!0)}function ed(e,a){return ut(e)?e:new Qp(e,a)}class Qp{constructor(a,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?a:Ee(a),this._value=n?a:Ja(a)}get value(){return Xo(this),this._value}set value(a){const n=this.__v_isShallow||Ya(a)||Ri(a);a=n?a:Ee(a),Mt(a,this._rawValue)&&(this._rawValue=a,this._value=n?a:Ja(a),ia(this,2))}}function Zp(e){ia(e,2)}function g(e){return ut(e)?e.value:e}function ef(e){return Se(e)?e():g(e)}const tf={get:(e,a,n)=>g(Reflect.get(e,a,n)),set:(e,a,n,o)=>{const r=e[a];return ut(r)&&!ut(n)?(r.value=n,!0):Reflect.set(e,a,n,o)}};function Qo(e){return Ei(e)?e:new Proxy(e,tf)}class af{constructor(a){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:o}=a(()=>Xo(this),()=>ia(this));this._get=n,this._set=o}get value(){return this._get()}set value(a){this._set(a)}}function td(e){return new af(e)}function lf(e){const a=pe(e)?new Array(e.length):{};for(const n in e)a[n]=id(e,n);return a}class nf{constructor(a,n,o){this._object=a,this._key=n,this._defaultValue=o,this.__v_isRef=!0}get value(){const a=this._object[this._key];return a===void 0?this._defaultValue:a}set value(a){this._object[this._key]=a}get dep(){return Ep(Ee(this._object),this._key)}}class of{constructor(a){this._getter=a,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Qn(e,a,n){return ut(e)?e:Se(e)?new of(e):Oe(e)&&arguments.length>1?id(e,a,n):q(e)}function id(e,a,n){const o=e[a];return ut(o)?o:new nf(e,a,n)}const sf={GET:"get",HAS:"has",ITERATE:"iterate"},rf={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function uf(e,a){}const cf={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},df={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function Kt(e,a,n,o){let r;try{r=o?e(...o):e()}catch(c){Gi(c,a,n)}return r}function $t(e,a,n,o){if(Se(e)){const c=Kt(e,a,n,o);return c&&Ho(c)&&c.catch(m=>{Gi(m,a,n)}),c}const r=[];for(let c=0;c<e.length;c++)r.push($t(e[c],a,n,o));return r}function Gi(e,a,n,o=!0){const r=a?a.vnode:null;if(a){let c=a.parent;const m=a.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const u=c.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,m,p)===!1)return}c=c.parent}const s=a.appContext.config.errorHandler;if(s){Kt(s,null,10,[e,m,p]);return}}mf(e,n,r,o)}function mf(e,a,n,o=!0){console.error(e)}let Wa=!1,Zn=!1;const dt=[];let Nt=0;const aa=[];let si=null,$i=0;const ad=Promise.resolve();let Zo=null;function wa(e){const a=Zo||ad;return e?a.then(this?e.bind(this):e):a}function pf(e){let a=Nt+1,n=dt.length;for(;a<n;){const o=a+n>>>1,r=dt[o],c=Ka(r);c<e||c===e&&r.pre?a=o+1:n=o}return a}function nn(e){(!dt.length||!dt.includes(e,Wa&&e.allowRecurse?Nt+1:Nt))&&(e.id==null?dt.push(e):dt.splice(pf(e.id),0,e),ld())}function ld(){!Wa&&!Zn&&(Zn=!0,Zo=ad.then(nd))}function ff(e){const a=dt.indexOf(e);a>Nt&&dt.splice(a,1)}function Dl(e){pe(e)?aa.push(...e):(!si||!si.includes(e,e.allowRecurse?$i+1:$i))&&aa.push(e),ld()}function Ms(e,a,n=Wa?Nt+1:0){for(;n<dt.length;n++){const o=dt[n];if(o&&o.pre){if(e&&o.id!==e.uid)continue;dt.splice(n,1),n--,o()}}}function Il(e){if(aa.length){const a=[...new Set(aa)].sort((n,o)=>Ka(n)-Ka(o));if(aa.length=0,si){si.push(...a);return}for(si=a,$i=0;$i<si.length;$i++)si[$i]();si=null,$i=0}}const Ka=e=>e.id==null?1/0:e.id,gf=(e,a)=>{const n=Ka(e)-Ka(a);if(n===0){if(e.pre&&!a.pre)return-1;if(a.pre&&!e.pre)return 1}return n};function nd(e){Zn=!1,Wa=!0,dt.sort(gf);try{for(Nt=0;Nt<dt.length;Nt++){const a=dt[Nt];a&&a.active!==!1&&Kt(a,null,14)}}finally{Nt=0,dt.length=0,Il(),Wa=!1,Zo=null,(dt.length||aa.length)&&nd()}}let Wi,gl=[];function od(e,a){var n,o;Wi=e,Wi?(Wi.enabled=!0,gl.forEach(({event:r,args:c})=>Wi.emit(r,...c)),gl=[]):typeof window<"u"&&window.HTMLElement&&!((o=(n=window.navigator)==null?void 0:n.userAgent)!=null&&o.includes("jsdom"))?((a.__VUE_DEVTOOLS_HOOK_REPLAY__=a.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(c=>{od(c,a)}),setTimeout(()=>{Wi||(a.__VUE_DEVTOOLS_HOOK_REPLAY__=null,gl=[])},3e3)):gl=[]}function hf(e,a,...n){if(e.isUnmounted)return;const o=e.vnode.props||He;let r=n;const c=a.startsWith("update:"),m=c&&a.slice(7);if(m&&m in o){const f=`${m==="modelValue"?"model":m}Modifiers`,{number:d,trim:h}=o[f]||He;h&&(r=n.map(v=>Ze(v)?v.trim():v)),d&&(r=n.map(Ua))}let p,s=o[p=Ma(a)]||o[p=Ma(gt(a))];!s&&c&&(s=o[p=Ma(xt(a))]),s&&$t(s,e,6,r);const u=o[p+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[p])return;e.emitted[p]=!0,$t(u,e,6,r)}}function sd(e,a,n=!1){const o=a.emitsCache,r=o.get(e);if(r!==void 0)return r;const c=e.emits;let m={},p=!1;if(!Se(e)){const s=u=>{const f=sd(u,a,!0);f&&(p=!0,Qe(m,f))};!n&&a.mixins.length&&a.mixins.forEach(s),e.extends&&s(e.extends),e.mixins&&e.mixins.forEach(s)}return!c&&!p?(Oe(e)&&o.set(e,null),null):(pe(c)?c.forEach(s=>m[s]=null):Qe(m,c),Oe(e)&&o.set(e,m),m)}function on(e,a){return!e||!al(a)?!1:(a=a.slice(2).replace(/Once$/,""),Ie(e,a[0].toLowerCase()+a.slice(1))||Ie(e,xt(a))||Ie(e,a))}let it=null,sn=null;function Xa(e){const a=it;return it=e,sn=e&&e.type.__scopeId||null,a}function es(e){sn=e}function ts(){sn=null}const _f=e=>i;function i(e,a=it,n){if(!a||e._n)return e;const o=(...r)=>{o._d&&so(-1);const c=Xa(a);let m;try{m=e(...r)}finally{Xa(c),o._d&&so(1)}return m};return o._n=!0,o._c=!0,o._d=!0,o}function xl(e){const{type:a,vnode:n,proxy:o,withProxy:r,props:c,propsOptions:[m],slots:p,attrs:s,emit:u,render:f,renderCache:d,data:h,setupState:v,ctx:_,inheritAttrs:w}=e;let A,$;const b=Xa(e);try{if(n.shapeFlag&4){const x=r||o,B=x;A=At(f.call(B,x,d,c,v,h,_)),$=s}else{const x=a;A=At(x.length>1?x(c,{attrs:s,slots:p,emit:u}):x(c,null)),$=a.props?s:vf(s)}}catch(x){Na.length=0,Gi(x,e,1),A=t(pt)}let C=A;if($&&w!==!1){const x=Object.keys($),{shapeFlag:B}=C;x.length&&B&7&&(m&&x.some(Mo)&&($=yf($,m)),C=Ot(C,$))}return n.dirs&&(C=Ot(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),A=C,Xa(b),A}function bf(e,a=!0){let n;for(let o=0;o<e.length;o++){const r=e[o];if(Rt(r)){if(r.type!==pt||r.children==="v-if"){if(n)return;n=r}}else return}return n}const vf=e=>{let a;for(const n in e)(n==="class"||n==="style"||al(n))&&((a||(a={}))[n]=e[n]);return a},yf=(e,a)=>{const n={};for(const o in e)(!Mo(o)||!(o.slice(9)in a))&&(n[o]=e[o]);return n};function Sf(e,a,n){const{props:o,children:r,component:c}=e,{props:m,children:p,patchFlag:s}=a,u=c.emitsOptions;if(a.dirs||a.transition)return!0;if(n&&s>=0){if(s&1024)return!0;if(s&16)return o?Vs(o,m,u):!!m;if(s&8){const f=a.dynamicProps;for(let d=0;d<f.length;d++){const h=f[d];if(m[h]!==o[h]&&!on(u,h))return!0}}}else return(r||p)&&(!p||!p.$stable)?!0:o===m?!1:o?m?Vs(o,m,u):!0:!!m;return!1}function Vs(e,a,n){const o=Object.keys(a);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const c=o[r];if(a[c]!==e[c]&&!on(n,c))return!0}return!1}function is({vnode:e,parent:a},n){for(;a;){const o=a.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=a.vnode).el=n,a=a.parent;else break}}const as="components",wf="directives";function y(e,a){return ls(as,e,!0,a)||e}const rd=Symbol.for("v-ndc");function ud(e){return Ze(e)?ls(as,e,!1)||e:e||rd}function rn(e){return ls(wf,e)}function ls(e,a,n=!0,o=!1){const r=it||at;if(r){const c=r.type;if(e===as){const p=po(c,!1);if(p&&(p===a||p===gt(a)||p===ll(gt(a))))return c}const m=Hs(r[e]||c[e],a)||Hs(r.appContext[e],a);return!m&&o?c:m}}function Hs(e,a){return e&&(e[a]||e[gt(a)]||e[ll(gt(a))])}const cd=e=>e.__isSuspense;let eo=0;const Cf={name:"Suspense",__isSuspense:!0,process(e,a,n,o,r,c,m,p,s,u){if(e==null)kf(a,n,o,r,c,m,p,s,u);else{if(c&&c.deps>0){a.suspense=e.suspense;return}xf(e,a,n,o,r,m,p,s,u)}},hydrate:$f,create:ns,normalize:Bf},Af=Cf;function Qa(e,a){const n=e.props&&e.props[a];Se(n)&&n()}function kf(e,a,n,o,r,c,m,p,s){const{p:u,o:{createElement:f}}=s,d=f("div"),h=e.suspense=ns(e,r,o,a,d,n,c,m,p,s);u(null,h.pendingBranch=e.ssContent,d,null,o,h,c,m),h.deps>0?(Qa(e,"onPending"),Qa(e,"onFallback"),u(null,e.ssFallback,a,n,o,null,c,m),la(h,e.ssFallback)):h.resolve(!1,!0)}function xf(e,a,n,o,r,c,m,p,{p:s,um:u,o:{createElement:f}}){const d=a.suspense=e.suspense;d.vnode=a,a.el=e.el;const h=a.ssContent,v=a.ssFallback,{activeBranch:_,pendingBranch:w,isInFallback:A,isHydrating:$}=d;if(w)d.pendingBranch=h,Ft(h,w)?(s(w,h,d.hiddenContainer,null,r,d,c,m,p),d.deps<=0?d.resolve():A&&($||(s(_,v,n,o,r,null,c,m,p),la(d,v)))):(d.pendingId=eo++,$?(d.isHydrating=!1,d.activeBranch=w):u(w,r,d),d.deps=0,d.effects.length=0,d.hiddenContainer=f("div"),A?(s(null,h,d.hiddenContainer,null,r,d,c,m,p),d.deps<=0?d.resolve():(s(_,v,n,o,r,null,c,m,p),la(d,v))):_&&Ft(h,_)?(s(_,h,n,o,r,d,c,m,p),d.resolve(!0)):(s(null,h,d.hiddenContainer,null,r,d,c,m,p),d.deps<=0&&d.resolve()));else if(_&&Ft(h,_))s(_,h,n,o,r,d,c,m,p),la(d,h);else if(Qa(a,"onPending"),d.pendingBranch=h,h.shapeFlag&512?d.pendingId=h.component.suspenseId:d.pendingId=eo++,s(null,h,d.hiddenContainer,null,r,d,c,m,p),d.deps<=0)d.resolve();else{const{timeout:b,pendingId:C}=d;b>0?setTimeout(()=>{d.pendingId===C&&d.fallback(v)},b):b===0&&d.fallback(v)}}function ns(e,a,n,o,r,c,m,p,s,u,f=!1){const{p:d,m:h,um:v,n:_,o:{parentNode:w,remove:A}}=u;let $;const b=Tf(e);b&&a!=null&&a.pendingBranch&&($=a.pendingId,a.deps++);const C=e.props?Ll(e.props.timeout):void 0,x=c,B={vnode:e,parent:a,parentComponent:n,namespace:m,container:o,hiddenContainer:r,deps:0,pendingId:eo++,timeout:typeof C=="number"?C:-1,activeBranch:null,pendingBranch:null,isInFallback:!f,isHydrating:f,isUnmounted:!1,effects:[],resolve(E=!1,F=!1){const{vnode:M,activeBranch:z,pendingBranch:j,pendingId:K,effects:U,parentComponent:me,container:Be}=B;let G=!1;B.isHydrating?B.isHydrating=!1:E||(G=z&&j.transition&&j.transition.mode==="out-in",G&&(z.transition.afterLeave=()=>{K===B.pendingId&&(h(j,Be,c===x?_(z):c,0),Dl(U))}),z&&(w(z.el)!==B.hiddenContainer&&(c=_(z)),v(z,me,B,!0)),G||h(j,Be,c,0)),la(B,j),B.pendingBranch=null,B.isInFallback=!1;let W=B.parent,ce=!1;for(;W;){if(W.pendingBranch){W.effects.push(...U),ce=!0;break}W=W.parent}!ce&&!G&&Dl(U),B.effects=[],b&&a&&a.pendingBranch&&$===a.pendingId&&(a.deps--,a.deps===0&&!F&&a.resolve()),Qa(M,"onResolve")},fallback(E){if(!B.pendingBranch)return;const{vnode:F,activeBranch:M,parentComponent:z,container:j,namespace:K}=B;Qa(F,"onFallback");const U=_(M),me=()=>{B.isInFallback&&(d(null,E,j,U,z,null,K,p,s),la(B,E))},Be=E.transition&&E.transition.mode==="out-in";Be&&(M.transition.afterLeave=me),B.isInFallback=!0,v(M,z,null,!0),Be||me()},move(E,F,M){B.activeBranch&&h(B.activeBranch,E,F,M),B.container=E},next(){return B.activeBranch&&_(B.activeBranch)},registerDep(E,F){const M=!!B.pendingBranch;M&&B.deps++;const z=E.vnode.el;E.asyncDep.catch(j=>{Gi(j,E,0)}).then(j=>{if(E.isUnmounted||B.isUnmounted||B.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:K}=E;co(E,j,!1),z&&(K.el=z);const U=!z&&E.subTree.el;F(E,K,w(z||E.subTree.el),z?null:_(E.subTree),B,m,s),U&&A(U),is(E,K.el),M&&--B.deps===0&&B.resolve()})},unmount(E,F){B.isUnmounted=!0,B.activeBranch&&v(B.activeBranch,n,E,F),B.pendingBranch&&v(B.pendingBranch,n,E,F)}};return B}function $f(e,a,n,o,r,c,m,p,s){const u=a.suspense=ns(a,o,n,e.parentNode,document.createElement("div"),null,r,c,m,p,!0),f=s(e,u.pendingBranch=a.ssContent,n,u,c,m);return u.deps===0&&u.resolve(!1,!0),f}function Bf(e){const{shapeFlag:a,children:n}=e,o=a&32;e.ssContent=Ns(o?n.default:n),e.ssFallback=o?Ns(n.fallback):t(pt)}function Ns(e){let a;if(Se(e)){const n=Fi&&e._c;n&&(e._d=!1,L()),e=e(),n&&(e._d=!0,a=vt,Od())}return pe(e)&&(e=bf(e)),e=At(e),a&&!e.dynamicChildren&&(e.dynamicChildren=a.filter(n=>n!==e)),e}function dd(e,a){a&&a.pendingBranch?pe(e)?a.effects.push(...e):a.effects.push(e):Dl(e)}function la(e,a){e.activeBranch=a;const{vnode:n,parentComponent:o}=e;let r=a.el;for(;!r&&a.component;)a=a.component.subTree,r=a.el;n.el=r,o&&o.subTree===n&&(o.vnode.el=r,is(o,r))}function Tf(e){var a;return((a=e.props)==null?void 0:a.suspensible)!=null&&e.props.suspensible!==!1}const md=Symbol.for("v-scx"),pd=()=>Fe(md);function os(e,a){return ol(e,null,a)}function fd(e,a){return ol(e,null,{flush:"post"})}function gd(e,a){return ol(e,null,{flush:"sync"})}const hl={};function mt(e,a,n){return ol(e,a,n)}function ol(e,a,{immediate:n,deep:o,flush:r,once:c,onTrack:m,onTrigger:p}=He){if(a&&c){const E=a;a=(...F)=>{E(...F),B()}}const s=at,u=E=>o===!0?E:Bi(E,o===!1?1:void 0);let f,d=!1,h=!1;if(ut(e)?(f=()=>e.value,d=Ya(e)):Ei(e)?(f=()=>u(e),d=!0):pe(e)?(h=!0,d=e.some(E=>Ei(E)||Ya(E)),f=()=>e.map(E=>{if(ut(E))return E.value;if(Ei(E))return u(E);if(Se(E))return Kt(E,s,2)})):Se(e)?a?f=()=>Kt(e,s,2):f=()=>(v&&v(),$t(e,s,3,[_])):f=bt,a&&o){const E=f;f=()=>Bi(E())}let v,_=E=>{v=C.onStop=()=>{Kt(E,s,4),v=C.onStop=void 0}},w;if(ul)if(_=bt,a?n&&$t(a,s,3,[f(),h?[]:void 0,_]):f(),r==="sync"){const E=pd();w=E.__watcherHandles||(E.__watcherHandles=[])}else return bt;let A=h?new Array(e.length).fill(hl):hl;const $=()=>{if(!(!C.active||!C.dirty))if(a){const E=C.run();(o||d||(h?E.some((F,M)=>Mt(F,A[M])):Mt(E,A)))&&(v&&v(),$t(a,s,3,[E,A===hl?void 0:h&&A[0]===hl?[]:A,_]),A=E)}else C.run()};$.allowRecurse=!!a;let b;r==="sync"?b=$:r==="post"?b=()=>st($,s&&s.suspense):($.pre=!0,s&&($.id=s.uid),b=()=>nn($));const C=new ca(f,bt,b),x=jo(),B=()=>{C.stop(),x&&Vo(x.effects,C)};return a?n?$():A=C.run():r==="post"?st(C.run.bind(C),s&&s.suspense):C.run(),w&&w.push(B),B}function Lf(e,a,n){const o=this.proxy,r=Ze(e)?e.includes(".")?hd(o,e):()=>o[e]:e.bind(o,o);let c;Se(a)?c=a:(c=a.handler,n=a);const m=Mi(this),p=ol(r,c.bind(o),n);return m(),p}function hd(e,a){const n=a.split(".");return()=>{let o=e;for(let r=0;r<n.length&&o;r++)o=o[n[r]];return o}}function Bi(e,a,n=0,o){if(!Oe(e)||e.__v_skip)return e;if(a&&a>0){if(n>=a)return e;n++}if(o=o||new Set,o.has(e))return e;if(o.add(e),ut(e))Bi(e.value,a,n,o);else if(pe(e))for(let r=0;r<e.length;r++)Bi(e[r],a,n,o);else if(Ni(e)||ea(e))e.forEach(r=>{Bi(r,a,n,o)});else if(Ec(e))for(const r in e)Bi(e[r],a,n,o);return e}function sl(e,a){if(it===null)return e;const n=gn(it)||it.proxy,o=e.dirs||(e.dirs=[]);for(let r=0;r<a.length;r++){let[c,m,p,s=He]=a[r];c&&(Se(c)&&(c={mounted:c,updated:c}),c.deep&&Bi(m),o.push({dir:c,instance:n,value:m,oldValue:void 0,arg:p,modifiers:s}))}return e}function Ht(e,a,n,o){const r=e.dirs,c=a&&a.dirs;for(let m=0;m<r.length;m++){const p=r[m];c&&(p.oldValue=c[m].value);let s=p.dir[o];s&&(Oi(),$t(s,n,8,[e.el,p,e,a]),ji())}}const ri=Symbol("_leaveCb"),_l=Symbol("_enterCb");function ss(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return yi(()=>{e.isMounted=!0}),mn(()=>{e.isUnmounting=!0}),e}const Lt=[Function,Array],rs={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Lt,onEnter:Lt,onAfterEnter:Lt,onEnterCancelled:Lt,onBeforeLeave:Lt,onLeave:Lt,onAfterLeave:Lt,onLeaveCancelled:Lt,onBeforeAppear:Lt,onAppear:Lt,onAfterAppear:Lt,onAppearCancelled:Lt},Ef={name:"BaseTransition",props:rs,setup(e,{slots:a}){const n=jt(),o=ss();let r;return()=>{const c=a.default&&un(a.default(),!0);if(!c||!c.length)return;let m=c[0];if(c.length>1){for(const w of c)if(w.type!==pt){m=w;break}}const p=Ee(e),{mode:s}=p;if(o.isLeaving)return kn(m);const u=Os(m);if(!u)return kn(m);const f=da(u,p,o,n);zi(u,f);const d=n.subTree,h=d&&Os(d);let v=!1;const{getTransitionKey:_}=u.type;if(_){const w=_();r===void 0?r=w:w!==r&&(r=w,v=!0)}if(h&&h.type!==pt&&(!Ft(u,h)||v)){const w=da(h,p,o,n);if(zi(h,w),s==="out-in")return o.isLeaving=!0,w.afterLeave=()=>{o.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},kn(m);s==="in-out"&&u.type!==pt&&(w.delayLeave=(A,$,b)=>{const C=bd(o,h);C[String(h.key)]=h,A[ri]=()=>{$(),A[ri]=void 0,delete f.delayedLeave},f.delayedLeave=b})}return m}}},_d=Ef;function bd(e,a){const{leavingVNodes:n}=e;let o=n.get(a.type);return o||(o=Object.create(null),n.set(a.type,o)),o}function da(e,a,n,o){const{appear:r,mode:c,persisted:m=!1,onBeforeEnter:p,onEnter:s,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:h,onAfterLeave:v,onLeaveCancelled:_,onBeforeAppear:w,onAppear:A,onAfterAppear:$,onAppearCancelled:b}=a,C=String(e.key),x=bd(n,e),B=(M,z)=>{M&&$t(M,o,9,z)},E=(M,z)=>{const j=z[1];B(M,z),pe(M)?M.every(K=>K.length<=1)&&j():M.length<=1&&j()},F={mode:c,persisted:m,beforeEnter(M){let z=p;if(!n.isMounted)if(r)z=w||p;else return;M[ri]&&M[ri](!0);const j=x[C];j&&Ft(e,j)&&j.el[ri]&&j.el[ri](),B(z,[M])},enter(M){let z=s,j=u,K=f;if(!n.isMounted)if(r)z=A||s,j=$||u,K=b||f;else return;let U=!1;const me=M[_l]=Be=>{U||(U=!0,Be?B(K,[M]):B(j,[M]),F.delayedLeave&&F.delayedLeave(),M[_l]=void 0)};z?E(z,[M,me]):me()},leave(M,z){const j=String(e.key);if(M[_l]&&M[_l](!0),n.isUnmounting)return z();B(d,[M]);let K=!1;const U=M[ri]=me=>{K||(K=!0,z(),me?B(_,[M]):B(v,[M]),M[ri]=void 0,x[j]===e&&delete x[j])};x[j]=e,h?E(h,[M,U]):U()},clone(M){return da(M,a,n,o)}};return F}function kn(e){if(rl(e))return e=Ot(e),e.children=null,e}function Os(e){return rl(e)?e.children?e.children[0]:void 0:e}function zi(e,a){e.shapeFlag&6&&e.component?zi(e.component.subTree,a):e.shapeFlag&128?(e.ssContent.transition=a.clone(e.ssContent),e.ssFallback.transition=a.clone(e.ssFallback)):e.transition=a}function un(e,a=!1,n){let o=[],r=0;for(let c=0;c<e.length;c++){let m=e[c];const p=n==null?m.key:String(n)+String(m.key!=null?m.key:c);m.type===Ce?(m.patchFlag&128&&r++,o=o.concat(un(m.children,a,p))):(a||m.type!==pt)&&o.push(p!=null?Ot(m,{key:p}):m)}if(r>1)for(let c=0;c<o.length;c++)o[c].patchFlag=-2;return o}/*! #__NO_SIDE_EFFECTS__ */function D(e,a){return Se(e)?Qe({name:e.name},a,{setup:e}):e}const Di=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Df(e){Se(e)&&(e={loader:e});const{loader:a,loadingComponent:n,errorComponent:o,delay:r=200,timeout:c,suspensible:m=!0,onError:p}=e;let s=null,u,f=0;const d=()=>(f++,s=null,h()),h=()=>{let v;return s||(v=s=a().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),p)return new Promise((w,A)=>{p(_,()=>w(d()),()=>A(_),f+1)});throw _}).then(_=>v!==s&&s?s:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),u=_,_)))};return D({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return u},setup(){const v=at;if(u)return()=>xn(u,v);const _=b=>{s=null,Gi(b,v,13,!o)};if(m&&v.suspense||ul)return h().then(b=>()=>xn(b,v)).catch(b=>(_(b),()=>o?t(o,{error:b}):null));const w=q(!1),A=q(),$=q(!!r);return r&&setTimeout(()=>{$.value=!1},r),c!=null&&setTimeout(()=>{if(!w.value&&!A.value){const b=new Error(`Async component timed out after ${c}ms.`);_(b),A.value=b}},c),h().then(()=>{w.value=!0,v.parent&&rl(v.parent.vnode)&&(v.parent.effect.dirty=!0,nn(v.parent.update))}).catch(b=>{_(b),A.value=b}),()=>{if(w.value&&u)return xn(u,v);if(A.value&&o)return t(o,{error:A.value});if(n&&!$.value)return t(n)}}})}function xn(e,a){const{ref:n,props:o,children:r,ce:c}=a.vnode,m=t(e,o,r);return m.ref=n,m.ce=c,delete a.vnode.ce,m}const rl=e=>e.type.__isKeepAlive,If={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:a}){const n=jt(),o=n.ctx;if(!o.renderer)return()=>{const b=a.default&&a.default();return b&&b.length===1?b[0]:b};const r=new Map,c=new Set;let m=null;const p=n.suspense,{renderer:{p:s,m:u,um:f,o:{createElement:d}}}=o,h=d("div");o.activate=(b,C,x,B,E)=>{const F=b.component;u(b,C,x,0,p),s(F.vnode,b,C,x,F,p,B,b.slotScopeIds,E),st(()=>{F.isDeactivated=!1,F.a&&ta(F.a);const M=b.props&&b.props.onVnodeMounted;M&&ht(M,F.parent,b)},p)},o.deactivate=b=>{const C=b.component;u(b,h,null,1,p),st(()=>{C.da&&ta(C.da);const x=b.props&&b.props.onVnodeUnmounted;x&&ht(x,C.parent,b),C.isDeactivated=!0},p)};function v(b){$n(b),f(b,n,p,!0)}function _(b){r.forEach((C,x)=>{const B=po(C.type);B&&(!b||!b(B))&&w(x)})}function w(b){const C=r.get(b);!m||!Ft(C,m)?v(C):m&&$n(m),r.delete(b),c.delete(b)}mt(()=>[e.include,e.exclude],([b,C])=>{b&&_(x=>Ea(b,x)),C&&_(x=>!Ea(C,x))},{flush:"post",deep:!0});let A=null;const $=()=>{A!=null&&r.set(A,Bn(n.subTree))};return yi($),dn($),mn(()=>{r.forEach(b=>{const{subTree:C,suspense:x}=n,B=Bn(C);if(b.type===B.type&&b.key===B.key){$n(B);const E=B.component.da;E&&st(E,x);return}v(b)})}),()=>{if(A=null,!a.default)return null;const b=a.default(),C=b[0];if(b.length>1)return m=null,b;if(!Rt(C)||!(C.shapeFlag&4)&&!(C.shapeFlag&128))return m=null,C;let x=Bn(C);const B=x.type,E=po(Di(x)?x.type.__asyncResolved||{}:B),{include:F,exclude:M,max:z}=e;if(F&&(!E||!Ea(F,E))||M&&E&&Ea(M,E))return m=x,C;const j=x.key==null?B:x.key,K=r.get(j);return x.el&&(x=Ot(x),C.shapeFlag&128&&(C.ssContent=x)),A=j,K?(x.el=K.el,x.component=K.component,x.transition&&zi(x,x.transition),x.shapeFlag|=512,c.delete(j),c.add(j)):(c.add(j),z&&c.size>parseInt(z,10)&&w(c.values().next().value)),x.shapeFlag|=256,m=x,cd(C.type)?C:x}}},Rf=If;function Ea(e,a){return pe(e)?e.some(n=>Ea(n,a)):Ze(e)?e.split(",").includes(a):pp(e)?e.test(a):!1}function us(e,a){vd(e,"a",a)}function cs(e,a){vd(e,"da",a)}function vd(e,a,n=at){const o=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(cn(a,o,n),n){let r=n.parent;for(;r&&r.parent;)rl(r.parent.vnode)&&zf(o,a,n,r),r=r.parent}}function zf(e,a,n,o){const r=cn(a,e,o,!0);qi(()=>{Vo(o[a],r)},n)}function $n(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Bn(e){return e.shapeFlag&128?e.ssContent:e}function cn(e,a,n=at,o=!1){if(n){const r=n[e]||(n[e]=[]),c=a.__weh||(a.__weh=(...m)=>{if(n.isUnmounted)return;Oi();const p=Mi(n),s=$t(a,n,e,m);return p(),ji(),s});return o?r.unshift(c):r.push(c),c}}const ei=e=>(a,n=at)=>(!ul||e==="sp")&&cn(e,(...o)=>a(...o),n),yd=ei("bm"),yi=ei("m"),Sd=ei("bu"),dn=ei("u"),mn=ei("bum"),qi=ei("um"),wd=ei("sp"),Cd=ei("rtg"),Ad=ei("rtc");function kd(e,a=at){cn("ec",e,a)}function tt(e,a,n,o){let r;const c=n&&n[o];if(pe(e)||Ze(e)){r=new Array(e.length);for(let m=0,p=e.length;m<p;m++)r[m]=a(e[m],m,void 0,c&&c[m])}else if(typeof e=="number"){r=new Array(e);for(let m=0;m<e;m++)r[m]=a(m+1,m,void 0,c&&c[m])}else if(Oe(e))if(e[Symbol.iterator])r=Array.from(e,(m,p)=>a(m,p,void 0,c&&c[p]));else{const m=Object.keys(e);r=new Array(m.length);for(let p=0,s=m.length;p<s;p++){const u=m[p];r[p]=a(e[u],u,p,c&&c[p])}}else r=[];return n&&(n[o]=r),r}function Pf(e,a){for(let n=0;n<a.length;n++){const o=a[n];if(pe(o))for(let r=0;r<o.length;r++)e[o[r].name]=o[r].fn;else o&&(e[o.name]=o.key?(...r)=>{const c=o.fn(...r);return c&&(c.key=o.key),c}:o.fn)}return e}function ma(e,a,n={},o,r){if(it.isCE||it.parent&&Di(it.parent)&&it.parent.isCE)return a!=="default"&&(n.name=a),t("slot",n,o&&o());let c=e[a];c&&c._c&&(c._d=!1),L();const m=c&&xd(c(n)),p=R(Ce,{key:n.key||m&&m.key||`_${a}`},m||(o?o():[]),m&&e._===1?64:-2);return!r&&p.scopeId&&(p.slotScopeIds=[p.scopeId+"-s"]),c&&c._c&&(c._d=!0),p}function xd(e){return e.some(a=>Rt(a)?!(a.type===pt||a.type===Ce&&!xd(a.children)):!0)?e:null}function Ff(e,a){const n={};for(const o in e)n[a&&/[A-Z]/.test(o)?`on:${o}`:Ma(o)]=e[o];return n}const to=e=>e?Jd(e)?gn(e)||e.proxy:to(e.parent):null,Va=Qe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>to(e.parent),$root:e=>to(e.root),$emit:e=>e.emit,$options:e=>ds(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,nn(e.update)}),$nextTick:e=>e.n||(e.n=wa.bind(e.proxy)),$watch:e=>Lf.bind(e)}),Tn=(e,a)=>e!==He&&!e.__isScriptSetup&&Ie(e,a),io={get({_:e},a){const{ctx:n,setupState:o,data:r,props:c,accessCache:m,type:p,appContext:s}=e;let u;if(a[0]!=="$"){const v=m[a];if(v!==void 0)switch(v){case 1:return o[a];case 2:return r[a];case 4:return n[a];case 3:return c[a]}else{if(Tn(o,a))return m[a]=1,o[a];if(r!==He&&Ie(r,a))return m[a]=2,r[a];if((u=e.propsOptions[0])&&Ie(u,a))return m[a]=3,c[a];if(n!==He&&Ie(n,a))return m[a]=4,n[a];ao&&(m[a]=0)}}const f=Va[a];let d,h;if(f)return a==="$attrs"&&St(e,"get",a),f(e);if((d=p.__cssModules)&&(d=d[a]))return d;if(n!==He&&Ie(n,a))return m[a]=4,n[a];if(h=s.config.globalProperties,Ie(h,a))return h[a]},set({_:e},a,n){const{data:o,setupState:r,ctx:c}=e;return Tn(r,a)?(r[a]=n,!0):o!==He&&Ie(o,a)?(o[a]=n,!0):Ie(e.props,a)||a[0]==="$"&&a.slice(1)in e?!1:(c[a]=n,!0)},has({_:{data:e,setupState:a,accessCache:n,ctx:o,appContext:r,propsOptions:c}},m){let p;return!!n[m]||e!==He&&Ie(e,m)||Tn(a,m)||(p=c[0])&&Ie(p,m)||Ie(o,m)||Ie(Va,m)||Ie(r.config.globalProperties,m)},defineProperty(e,a,n){return n.get!=null?e._.accessCache[a]=0:Ie(n,"value")&&this.set(e,a,n.value,null),Reflect.defineProperty(e,a,n)}},Mf=Qe({},io,{get(e,a){if(a!==Symbol.unscopables)return io.get(e,a,e)},has(e,a){return a[0]!=="_"&&!bp(a)}});function Vf(){return null}function Hf(){return null}function Nf(e){}function Of(e){}function jf(){return null}function Gf(){}function qf(e,a){return null}function Uf(){return Bd().slots}function $d(){return Bd().attrs}function Bd(){const e=jt();return e.setupContext||(e.setupContext=Xd(e))}function Za(e){return pe(e)?e.reduce((a,n)=>(a[n]=null,a),{}):e}function Yf(e,a){const n=Za(e);for(const o in a){if(o.startsWith("__skip"))continue;let r=n[o];r?pe(r)||Se(r)?r=n[o]={type:r,default:a[o]}:r.default=a[o]:r===null&&(r=n[o]={default:a[o]}),r&&a[`__skip_${o}`]&&(r.skipFactory=!0)}return n}function Jf(e,a){return!e||!a?e||a:pe(e)&&pe(a)?e.concat(a):Qe({},Za(e),Za(a))}function Wf(e,a){const n={};for(const o in e)a.includes(o)||Object.defineProperty(n,o,{enumerable:!0,get:()=>e[o]});return n}function Kf(e){const a=jt();let n=e();return uo(),Ho(n)&&(n=n.catch(o=>{throw Mi(a),o})),[n,()=>Mi(a)]}let ao=!0;function Xf(e){const a=ds(e),n=e.proxy,o=e.ctx;ao=!1,a.beforeCreate&&js(a.beforeCreate,e,"bc");const{data:r,computed:c,methods:m,watch:p,provide:s,inject:u,created:f,beforeMount:d,mounted:h,beforeUpdate:v,updated:_,activated:w,deactivated:A,beforeDestroy:$,beforeUnmount:b,destroyed:C,unmounted:x,render:B,renderTracked:E,renderTriggered:F,errorCaptured:M,serverPrefetch:z,expose:j,inheritAttrs:K,components:U,directives:me,filters:Be}=a;if(u&&Qf(u,o,null),m)for(const ce in m){const ie=m[ce];Se(ie)&&(o[ce]=ie.bind(n))}if(r){const ce=r.call(n,n);Oe(ce)&&(e.data=Zt(ce))}if(ao=!0,c)for(const ce in c){const ie=c[ce],Te=Se(ie)?ie.bind(n,n):Se(ie.get)?ie.get.bind(n,n):bt,Je=!Se(ie)&&Se(ie.set)?ie.set.bind(n):bt,lt=V({get:Te,set:Je});Object.defineProperty(o,ce,{enumerable:!0,configurable:!0,get:()=>lt.value,set:je=>lt.value=je})}if(p)for(const ce in p)Td(p[ce],o,n,ce);if(s){const ce=Se(s)?s.call(n):s;Reflect.ownKeys(ce).forEach(ie=>{rt(ie,ce[ie])})}f&&js(f,e,"c");function W(ce,ie){pe(ie)?ie.forEach(Te=>ce(Te.bind(n))):ie&&ce(ie.bind(n))}if(W(yd,d),W(yi,h),W(Sd,v),W(dn,_),W(us,w),W(cs,A),W(kd,M),W(Ad,E),W(Cd,F),W(mn,b),W(qi,x),W(wd,z),pe(j))if(j.length){const ce=e.exposed||(e.exposed={});j.forEach(ie=>{Object.defineProperty(ce,ie,{get:()=>n[ie],set:Te=>n[ie]=Te})})}else e.exposed||(e.exposed={});B&&e.render===bt&&(e.render=B),K!=null&&(e.inheritAttrs=K),U&&(e.components=U),me&&(e.directives=me)}function Qf(e,a,n=bt){pe(e)&&(e=lo(e));for(const o in e){const r=e[o];let c;Oe(r)?"default"in r?c=Fe(r.from||o,r.default,!0):c=Fe(r.from||o):c=Fe(r),ut(c)?Object.defineProperty(a,o,{enumerable:!0,configurable:!0,get:()=>c.value,set:m=>c.value=m}):a[o]=c}}function js(e,a,n){$t(pe(e)?e.map(o=>o.bind(a.proxy)):e.bind(a.proxy),a,n)}function Td(e,a,n,o){const r=o.includes(".")?hd(n,o):()=>n[o];if(Ze(e)){const c=a[e];Se(c)&&mt(r,c)}else if(Se(e))mt(r,e.bind(n));else if(Oe(e))if(pe(e))e.forEach(c=>Td(c,a,n,o));else{const c=Se(e.handler)?e.handler.bind(n):a[e.handler];Se(c)&&mt(r,c,e)}}function ds(e){const a=e.type,{mixins:n,extends:o}=a,{mixins:r,optionsCache:c,config:{optionMergeStrategies:m}}=e.appContext,p=c.get(a);let s;return p?s=p:!r.length&&!n&&!o?s=a:(s={},r.length&&r.forEach(u=>Rl(s,u,m,!0)),Rl(s,a,m)),Oe(a)&&c.set(a,s),s}function Rl(e,a,n,o=!1){const{mixins:r,extends:c}=a;c&&Rl(e,c,n,!0),r&&r.forEach(m=>Rl(e,m,n,!0));for(const m in a)if(!(o&&m==="expose")){const p=Zf[m]||n&&n[m];e[m]=p?p(e[m],a[m]):a[m]}return e}const Zf={data:Gs,props:qs,emits:qs,methods:Da,computed:Da,beforeCreate:ft,created:ft,beforeMount:ft,mounted:ft,beforeUpdate:ft,updated:ft,beforeDestroy:ft,beforeUnmount:ft,destroyed:ft,unmounted:ft,activated:ft,deactivated:ft,errorCaptured:ft,serverPrefetch:ft,components:Da,directives:Da,watch:tg,provide:Gs,inject:eg};function Gs(e,a){return a?e?function(){return Qe(Se(e)?e.call(this,this):e,Se(a)?a.call(this,this):a)}:a:e}function eg(e,a){return Da(lo(e),lo(a))}function lo(e){if(pe(e)){const a={};for(let n=0;n<e.length;n++)a[e[n]]=e[n];return a}return e}function ft(e,a){return e?[...new Set([].concat(e,a))]:a}function Da(e,a){return e?Qe(Object.create(null),e,a):a}function qs(e,a){return e?pe(e)&&pe(a)?[...new Set([...e,...a])]:Qe(Object.create(null),Za(e),Za(a??{})):a}function tg(e,a){if(!e)return a;if(!a)return e;const n=Qe(Object.create(null),e);for(const o in a)n[o]=ft(e[o],a[o]);return n}function Ld(){return{app:null,config:{isNativeTag:dp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ig=0;function ag(e,a){return function(o,r=null){Se(o)||(o=Qe({},o)),r!=null&&!Oe(r)&&(r=null);const c=Ld(),m=new WeakSet;let p=!1;const s=c.app={_uid:ig++,_component:o,_props:r,_container:null,_context:c,_instance:null,version:Zd,get config(){return c.config},set config(u){},use(u,...f){return m.has(u)||(u&&Se(u.install)?(m.add(u),u.install(s,...f)):Se(u)&&(m.add(u),u(s,...f))),s},mixin(u){return c.mixins.includes(u)||c.mixins.push(u),s},component(u,f){return f?(c.components[u]=f,s):c.components[u]},directive(u,f){return f?(c.directives[u]=f,s):c.directives[u]},mount(u,f,d){if(!p){const h=t(o,r);return h.appContext=c,d===!0?d="svg":d===!1&&(d=void 0),f&&a?a(h,u):e(h,u,d),p=!0,s._container=u,u.__vue_app__=s,gn(h.component)||h.component.proxy}},unmount(){p&&(e(null,s._container),delete s._container.__vue_app__)},provide(u,f){return c.provides[u]=f,s},runWithContext(u){el=s;try{return u()}finally{el=null}}};return s}}let el=null;function rt(e,a){if(at){let n=at.provides;const o=at.parent&&at.parent.provides;o===n&&(n=at.provides=Object.create(o)),n[e]=a}}function Fe(e,a,n=!1){const o=at||it;if(o||el){const r=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:el._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&Se(a)?a.call(o&&o.proxy):a}}function lg(){return!!(at||it||el)}function ng(e,a,n,o=!1){const r={},c={};Tl(c,fn,1),e.propsDefaults=Object.create(null),Ed(e,a,r,c);for(const m in e.propsOptions[0])m in r||(r[m]=void 0);n?e.props=o?r:Xc(r):e.type.props?e.props=r:e.props=c,e.attrs=c}function og(e,a,n,o){const{props:r,attrs:c,vnode:{patchFlag:m}}=e,p=Ee(r),[s]=e.propsOptions;let u=!1;if((o||m>0)&&!(m&16)){if(m&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let h=f[d];if(on(e.emitsOptions,h))continue;const v=a[h];if(s)if(Ie(c,h))v!==c[h]&&(c[h]=v,u=!0);else{const _=gt(h);r[_]=no(s,p,_,v,e,!1)}else v!==c[h]&&(c[h]=v,u=!0)}}}else{Ed(e,a,r,c)&&(u=!0);let f;for(const d in p)(!a||!Ie(a,d)&&((f=xt(d))===d||!Ie(a,f)))&&(s?n&&(n[d]!==void 0||n[f]!==void 0)&&(r[d]=no(s,p,d,void 0,e,!0)):delete r[d]);if(c!==p)for(const d in c)(!a||!Ie(a,d))&&(delete c[d],u=!0)}u&&Wt(e,"set","$attrs")}function Ed(e,a,n,o){const[r,c]=e.propsOptions;let m=!1,p;if(a)for(let s in a){if(Fa(s))continue;const u=a[s];let f;r&&Ie(r,f=gt(s))?!c||!c.includes(f)?n[f]=u:(p||(p={}))[f]=u:on(e.emitsOptions,s)||(!(s in o)||u!==o[s])&&(o[s]=u,m=!0)}if(c){const s=Ee(n),u=p||He;for(let f=0;f<c.length;f++){const d=c[f];n[d]=no(r,s,d,u[d],e,!Ie(u,d))}}return m}function no(e,a,n,o,r,c){const m=e[n];if(m!=null){const p=Ie(m,"default");if(p&&o===void 0){const s=m.default;if(m.type!==Function&&!m.skipFactory&&Se(s)){const{propsDefaults:u}=r;if(n in u)o=u[n];else{const f=Mi(r);o=u[n]=s.call(null,a),f()}}else o=s}m[0]&&(c&&!p?o=!1:m[1]&&(o===""||o===xt(n))&&(o=!0))}return o}function Dd(e,a,n=!1){const o=a.propsCache,r=o.get(e);if(r)return r;const c=e.props,m={},p=[];let s=!1;if(!Se(e)){const f=d=>{s=!0;const[h,v]=Dd(d,a,!0);Qe(m,h),v&&p.push(...v)};!n&&a.mixins.length&&a.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!c&&!s)return Oe(e)&&o.set(e,Zi),Zi;if(pe(c))for(let f=0;f<c.length;f++){const d=gt(c[f]);Us(d)&&(m[d]=He)}else if(c)for(const f in c){const d=gt(f);if(Us(d)){const h=c[f],v=m[d]=pe(h)||Se(h)?{type:h}:Qe({},h);if(v){const _=Ws(Boolean,v.type),w=Ws(String,v.type);v[0]=_>-1,v[1]=w<0||_<w,(_>-1||Ie(v,"default"))&&p.push(d)}}}const u=[m,p];return Oe(e)&&o.set(e,u),u}function Us(e){return e[0]!=="$"}function Ys(e){const a=e&&e.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:e===null?"null":""}function Js(e,a){return Ys(e)===Ys(a)}function Ws(e,a){return pe(a)?a.findIndex(n=>Js(n,e)):Se(a)&&Js(a,e)?0:-1}const Id=e=>e[0]==="_"||e==="$stable",ms=e=>pe(e)?e.map(At):[At(e)],sg=(e,a,n)=>{if(a._n)return a;const o=i((...r)=>ms(a(...r)),n);return o._c=!1,o},Rd=(e,a,n)=>{const o=e._ctx;for(const r in e){if(Id(r))continue;const c=e[r];if(Se(c))a[r]=sg(r,c,o);else if(c!=null){const m=ms(c);a[r]=()=>m}}},zd=(e,a)=>{const n=ms(a);e.slots.default=()=>n},rg=(e,a)=>{if(e.vnode.shapeFlag&32){const n=a._;n?(e.slots=Ee(a),Tl(a,"_",n)):Rd(a,e.slots={})}else e.slots={},a&&zd(e,a);Tl(e.slots,fn,1)},ug=(e,a,n)=>{const{vnode:o,slots:r}=e;let c=!0,m=He;if(o.shapeFlag&32){const p=a._;p?n&&p===1?c=!1:(Qe(r,a),!n&&p===1&&delete r._):(c=!a.$stable,Rd(a,r)),m=a}else a&&(zd(e,a),m={default:1});if(c)for(const p in r)!Id(p)&&m[p]==null&&delete r[p]};function zl(e,a,n,o,r=!1){if(pe(e)){e.forEach((h,v)=>zl(h,a&&(pe(a)?a[v]:a),n,o,r));return}if(Di(o)&&!r)return;const c=o.shapeFlag&4?gn(o.component)||o.component.proxy:o.el,m=r?null:c,{i:p,r:s}=e,u=a&&a.r,f=p.refs===He?p.refs={}:p.refs,d=p.setupState;if(u!=null&&u!==s&&(Ze(u)?(f[u]=null,Ie(d,u)&&(d[u]=null)):ut(u)&&(u.value=null)),Se(s))Kt(s,p,12,[m,f]);else{const h=Ze(s),v=ut(s),_=e.f;if(h||v){const w=()=>{if(_){const A=h?Ie(d,s)?d[s]:f[s]:s.value;r?pe(A)&&Vo(A,c):pe(A)?A.includes(c)||A.push(c):h?(f[s]=[c],Ie(d,s)&&(d[s]=f[s])):(s.value=[c],e.k&&(f[e.k]=s.value))}else h?(f[s]=m,Ie(d,s)&&(d[s]=m)):v&&(s.value=m,e.k&&(f[e.k]=m))};r||_?w():(w.id=-1,st(w,n))}}}let ai=!1;const cg=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",dg=e=>e.namespaceURI.includes("MathML"),bl=e=>{if(cg(e))return"svg";if(dg(e))return"mathml"},vl=e=>e.nodeType===8;function mg(e){const{mt:a,p:n,o:{patchProp:o,createText:r,nextSibling:c,parentNode:m,remove:p,insert:s,createComment:u}}=e,f=(C,x)=>{if(!x.hasChildNodes()){n(null,C,x),Il(),x._vnode=C;return}ai=!1,d(x.firstChild,C,null,null,null),Il(),x._vnode=C,ai&&console.error("Hydration completed but contains mismatches.")},d=(C,x,B,E,F,M=!1)=>{const z=vl(C)&&C.data==="[",j=()=>w(C,x,B,E,F,z),{type:K,ref:U,shapeFlag:me,patchFlag:Be}=x;let G=C.nodeType;x.el=C,Be===-2&&(M=!1,x.dynamicChildren=null);let W=null;switch(K){case Pi:G!==3?x.children===""?(s(x.el=r(""),m(C),C),W=C):W=j():(C.data!==x.children&&(ai=!0,C.data=x.children),W=c(C));break;case pt:b(C)?(W=c(C),$(x.el=C.content.firstChild,C,B)):G!==8||z?W=j():W=c(C);break;case Ii:if(z&&(C=c(C),G=C.nodeType),G===1||G===3){W=C;const ce=!x.children.length;for(let ie=0;ie<x.staticCount;ie++)ce&&(x.children+=W.nodeType===1?W.outerHTML:W.data),ie===x.staticCount-1&&(x.anchor=W),W=c(W);return z?c(W):W}else j();break;case Ce:z?W=_(C,x,B,E,F,M):W=j();break;default:if(me&1)(G!==1||x.type.toLowerCase()!==C.tagName.toLowerCase())&&!b(C)?W=j():W=h(C,x,B,E,F,M);else if(me&6){x.slotScopeIds=F;const ce=m(C);if(z?W=A(C):vl(C)&&C.data==="teleport start"?W=A(C,C.data,"teleport end"):W=c(C),a(x,ce,null,B,E,bl(ce),M),Di(x)){let ie;z?(ie=t(Ce),ie.anchor=W?W.previousSibling:ce.lastChild):ie=C.nodeType===3?l(""):t("div"),ie.el=C,x.component.subTree=ie}}else me&64?G!==8?W=j():W=x.type.hydrate(C,x,B,E,F,M,e,v):me&128&&(W=x.type.hydrate(C,x,B,E,bl(m(C)),F,M,e,d))}return U!=null&&zl(U,null,E,x),W},h=(C,x,B,E,F,M)=>{M=M||!!x.dynamicChildren;const{type:z,props:j,patchFlag:K,shapeFlag:U,dirs:me,transition:Be}=x,G=z==="input"||z==="option";if(G||K!==-1){me&&Ht(x,null,B,"created");let W=!1;if(b(C)){W=Vd(E,Be)&&B&&B.vnode.props&&B.vnode.props.appear;const ie=C.content.firstChild;W&&Be.beforeEnter(ie),$(ie,C,B),x.el=C=ie}if(U&16&&!(j&&(j.innerHTML||j.textContent))){let ie=v(C.firstChild,x,C,B,E,F,M);for(;ie;){ai=!0;const Te=ie;ie=ie.nextSibling,p(Te)}}else U&8&&C.textContent!==x.children&&(ai=!0,C.textContent=x.children);if(j)if(G||!M||K&48)for(const ie in j)(G&&(ie.endsWith("value")||ie==="indeterminate")||al(ie)&&!Fa(ie)||ie[0]===".")&&o(C,ie,null,j[ie],void 0,void 0,B);else j.onClick&&o(C,"onClick",null,j.onClick,void 0,void 0,B);let ce;(ce=j&&j.onVnodeBeforeMount)&&ht(ce,B,x),me&&Ht(x,null,B,"beforeMount"),((ce=j&&j.onVnodeMounted)||me||W)&&dd(()=>{ce&&ht(ce,B,x),W&&Be.enter(C),me&&Ht(x,null,B,"mounted")},E)}return C.nextSibling},v=(C,x,B,E,F,M,z)=>{z=z||!!x.dynamicChildren;const j=x.children,K=j.length;for(let U=0;U<K;U++){const me=z?j[U]:j[U]=At(j[U]);if(C)C=d(C,me,E,F,M,z);else{if(me.type===Pi&&!me.children)continue;ai=!0,n(null,me,B,null,E,F,bl(B),M)}}return C},_=(C,x,B,E,F,M)=>{const{slotScopeIds:z}=x;z&&(F=F?F.concat(z):z);const j=m(C),K=v(c(C),x,j,B,E,F,M);return K&&vl(K)&&K.data==="]"?c(x.anchor=K):(ai=!0,s(x.anchor=u("]"),j,K),K)},w=(C,x,B,E,F,M)=>{if(ai=!0,x.el=null,M){const K=A(C);for(;;){const U=c(C);if(U&&U!==K)p(U);else break}}const z=c(C),j=m(C);return p(C),n(null,x,j,z,B,E,bl(j),F),z},A=(C,x="[",B="]")=>{let E=0;for(;C;)if(C=c(C),C&&vl(C)&&(C.data===x&&E++,C.data===B)){if(E===0)return c(C);E--}return C},$=(C,x,B)=>{const E=x.parentNode;E&&E.replaceChild(C,x);let F=B;for(;F;)F.vnode.el===x&&(F.vnode.el=F.subTree.el=C),F=F.parent},b=C=>C.nodeType===1&&C.tagName.toLowerCase()==="template";return[f,d]}const st=dd;function Pd(e){return Md(e)}function Fd(e){return Md(e,mg)}function Md(e,a){const n=Dc();n.__VUE__=!0;const{insert:o,remove:r,patchProp:c,createElement:m,createText:p,createComment:s,setText:u,setElementText:f,parentNode:d,nextSibling:h,setScopeId:v=bt,insertStaticContent:_}=e,w=(T,I,O,X=null,Z=null,ne=null,ue=void 0,le=null,oe=!!I.dynamicChildren)=>{if(T===I)return;T&&!Ft(T,I)&&(X=se(T),je(T,Z,ne,!0),T=null),I.patchFlag===-2&&(oe=!1,I.dynamicChildren=null);const{type:te,ref:de,shapeFlag:ve}=I;switch(te){case Pi:A(T,I,O,X);break;case pt:$(T,I,O,X);break;case Ii:T==null&&b(I,O,X,ue);break;case Ce:U(T,I,O,X,Z,ne,ue,le,oe);break;default:ve&1?B(T,I,O,X,Z,ne,ue,le,oe):ve&6?me(T,I,O,X,Z,ne,ue,le,oe):(ve&64||ve&128)&&te.process(T,I,O,X,Z,ne,ue,le,oe,Ve)}de!=null&&Z&&zl(de,T&&T.ref,ne,I||T,!I)},A=(T,I,O,X)=>{if(T==null)o(I.el=p(I.children),O,X);else{const Z=I.el=T.el;I.children!==T.children&&u(Z,I.children)}},$=(T,I,O,X)=>{T==null?o(I.el=s(I.children||""),O,X):I.el=T.el},b=(T,I,O,X)=>{[T.el,T.anchor]=_(T.children,I,O,X,T.el,T.anchor)},C=({el:T,anchor:I},O,X)=>{let Z;for(;T&&T!==I;)Z=h(T),o(T,O,X),T=Z;o(I,O,X)},x=({el:T,anchor:I})=>{let O;for(;T&&T!==I;)O=h(T),r(T),T=O;r(I)},B=(T,I,O,X,Z,ne,ue,le,oe)=>{I.type==="svg"?ue="svg":I.type==="math"&&(ue="mathml"),T==null?E(I,O,X,Z,ne,ue,le,oe):z(T,I,Z,ne,ue,le,oe)},E=(T,I,O,X,Z,ne,ue,le)=>{let oe,te;const{props:de,shapeFlag:ve,transition:be,dirs:Ae}=T;if(oe=T.el=m(T.type,ne,de&&de.is,de),ve&8?f(oe,T.children):ve&16&&M(T.children,oe,null,X,Z,Ln(T,ne),ue,le),Ae&&Ht(T,null,X,"created"),F(oe,T,T.scopeId,ue,X),de){for(const Ne in de)Ne!=="value"&&!Fa(Ne)&&c(oe,Ne,null,de[Ne],ne,T.children,X,Z,re);"value"in de&&c(oe,"value",null,de.value,ne),(te=de.onVnodeBeforeMount)&&ht(te,X,T)}Ae&&Ht(T,null,X,"beforeMount");const Le=Vd(Z,be);Le&&be.beforeEnter(oe),o(oe,I,O),((te=de&&de.onVnodeMounted)||Le||Ae)&&st(()=>{te&&ht(te,X,T),Le&&be.enter(oe),Ae&&Ht(T,null,X,"mounted")},Z)},F=(T,I,O,X,Z)=>{if(O&&v(T,O),X)for(let ne=0;ne<X.length;ne++)v(T,X[ne]);if(Z){let ne=Z.subTree;if(I===ne){const ue=Z.vnode;F(T,ue,ue.scopeId,ue.slotScopeIds,Z.parent)}}},M=(T,I,O,X,Z,ne,ue,le,oe=0)=>{for(let te=oe;te<T.length;te++){const de=T[te]=le?ui(T[te]):At(T[te]);w(null,de,I,O,X,Z,ne,ue,le)}},z=(T,I,O,X,Z,ne,ue)=>{const le=I.el=T.el;let{patchFlag:oe,dynamicChildren:te,dirs:de}=I;oe|=T.patchFlag&16;const ve=T.props||He,be=I.props||He;let Ae;if(O&&Ci(O,!1),(Ae=be.onVnodeBeforeUpdate)&&ht(Ae,O,I,T),de&&Ht(I,T,O,"beforeUpdate"),O&&Ci(O,!0),te?j(T.dynamicChildren,te,le,O,X,Ln(I,Z),ne):ue||ie(T,I,le,null,O,X,Ln(I,Z),ne,!1),oe>0){if(oe&16)K(le,I,ve,be,O,X,Z);else if(oe&2&&ve.class!==be.class&&c(le,"class",null,be.class,Z),oe&4&&c(le,"style",ve.style,be.style,Z),oe&8){const Le=I.dynamicProps;for(let Ne=0;Ne<Le.length;Ne++){const We=Le[Ne],nt=ve[We],zt=be[We];(zt!==nt||We==="value")&&c(le,We,nt,zt,Z,T.children,O,X,re)}}oe&1&&T.children!==I.children&&f(le,I.children)}else!ue&&te==null&&K(le,I,ve,be,O,X,Z);((Ae=be.onVnodeUpdated)||de)&&st(()=>{Ae&&ht(Ae,O,I,T),de&&Ht(I,T,O,"updated")},X)},j=(T,I,O,X,Z,ne,ue)=>{for(let le=0;le<I.length;le++){const oe=T[le],te=I[le],de=oe.el&&(oe.type===Ce||!Ft(oe,te)||oe.shapeFlag&70)?d(oe.el):O;w(oe,te,de,null,X,Z,ne,ue,!0)}},K=(T,I,O,X,Z,ne,ue)=>{if(O!==X){if(O!==He)for(const le in O)!Fa(le)&&!(le in X)&&c(T,le,O[le],null,ue,I.children,Z,ne,re);for(const le in X){if(Fa(le))continue;const oe=X[le],te=O[le];oe!==te&&le!=="value"&&c(T,le,te,oe,ue,I.children,Z,ne,re)}"value"in X&&c(T,"value",O.value,X.value,ue)}},U=(T,I,O,X,Z,ne,ue,le,oe)=>{const te=I.el=T?T.el:p(""),de=I.anchor=T?T.anchor:p("");let{patchFlag:ve,dynamicChildren:be,slotScopeIds:Ae}=I;Ae&&(le=le?le.concat(Ae):Ae),T==null?(o(te,O,X),o(de,O,X),M(I.children||[],O,de,Z,ne,ue,le,oe)):ve>0&&ve&64&&be&&T.dynamicChildren?(j(T.dynamicChildren,be,O,Z,ne,ue,le),(I.key!=null||Z&&I===Z.subTree)&&ps(T,I,!0)):ie(T,I,O,de,Z,ne,ue,le,oe)},me=(T,I,O,X,Z,ne,ue,le,oe)=>{I.slotScopeIds=le,T==null?I.shapeFlag&512?Z.ctx.activate(I,O,X,ue,oe):Be(I,O,X,Z,ne,ue,oe):G(T,I,oe)},Be=(T,I,O,X,Z,ne,ue)=>{const le=T.component=Yd(T,X,Z);if(rl(T)&&(le.ctx.renderer=Ve),Wd(le),le.asyncDep){if(Z&&Z.registerDep(le,W),!T.el){const oe=le.subTree=t(pt);$(null,oe,I,O)}}else W(le,T,I,O,Z,ne,ue)},G=(T,I,O)=>{const X=I.component=T.component;if(Sf(T,I,O))if(X.asyncDep&&!X.asyncResolved){ce(X,I,O);return}else X.next=I,ff(X.update),X.effect.dirty=!0,X.update();else I.el=T.el,X.vnode=I},W=(T,I,O,X,Z,ne,ue)=>{const le=()=>{if(T.isMounted){let{next:de,bu:ve,u:be,parent:Ae,vnode:Le}=T;{const Yi=Hd(T);if(Yi){de&&(de.el=Le.el,ce(T,de,ue)),Yi.asyncDep.then(()=>{T.isUnmounted||le()});return}}let Ne=de,We;Ci(T,!1),de?(de.el=Le.el,ce(T,de,ue)):de=Le,ve&&ta(ve),(We=de.props&&de.props.onVnodeBeforeUpdate)&&ht(We,Ae,de,Le),Ci(T,!0);const nt=xl(T),zt=T.subTree;T.subTree=nt,w(zt,nt,d(zt.el),se(zt),T,Z,ne),de.el=nt.el,Ne===null&&is(T,nt.el),be&&st(be,Z),(We=de.props&&de.props.onVnodeUpdated)&&st(()=>ht(We,Ae,de,Le),Z)}else{let de;const{el:ve,props:be}=I,{bm:Ae,m:Le,parent:Ne}=T,We=Di(I);if(Ci(T,!1),Ae&&ta(Ae),!We&&(de=be&&be.onVnodeBeforeMount)&&ht(de,Ne,I),Ci(T,!0),ve&&$e){const nt=()=>{T.subTree=xl(T),$e(ve,T.subTree,T,Z,null)};We?I.type.__asyncLoader().then(()=>!T.isUnmounted&&nt()):nt()}else{const nt=T.subTree=xl(T);w(null,nt,O,X,T,Z,ne),I.el=nt.el}if(Le&&st(Le,Z),!We&&(de=be&&be.onVnodeMounted)){const nt=I;st(()=>ht(de,Ne,nt),Z)}(I.shapeFlag&256||Ne&&Di(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&T.a&&st(T.a,Z),T.isMounted=!0,I=O=X=null}},oe=T.effect=new ca(le,bt,()=>nn(te),T.scope),te=T.update=()=>{oe.dirty&&oe.run()};te.id=T.uid,Ci(T,!0),te()},ce=(T,I,O)=>{I.component=T;const X=T.vnode.props;T.vnode=I,T.next=null,og(T,I.props,X,O),ug(T,I.children,O),Oi(),Ms(T),ji()},ie=(T,I,O,X,Z,ne,ue,le,oe=!1)=>{const te=T&&T.children,de=T?T.shapeFlag:0,ve=I.children,{patchFlag:be,shapeFlag:Ae}=I;if(be>0){if(be&128){Je(te,ve,O,X,Z,ne,ue,le,oe);return}else if(be&256){Te(te,ve,O,X,Z,ne,ue,le,oe);return}}Ae&8?(de&16&&re(te,Z,ne),ve!==te&&f(O,ve)):de&16?Ae&16?Je(te,ve,O,X,Z,ne,ue,le,oe):re(te,Z,ne,!0):(de&8&&f(O,""),Ae&16&&M(ve,O,X,Z,ne,ue,le,oe))},Te=(T,I,O,X,Z,ne,ue,le,oe)=>{T=T||Zi,I=I||Zi;const te=T.length,de=I.length,ve=Math.min(te,de);let be;for(be=0;be<ve;be++){const Ae=I[be]=oe?ui(I[be]):At(I[be]);w(T[be],Ae,O,null,Z,ne,ue,le,oe)}te>de?re(T,Z,ne,!0,!1,ve):M(I,O,X,Z,ne,ue,le,oe,ve)},Je=(T,I,O,X,Z,ne,ue,le,oe)=>{let te=0;const de=I.length;let ve=T.length-1,be=de-1;for(;te<=ve&&te<=be;){const Ae=T[te],Le=I[te]=oe?ui(I[te]):At(I[te]);if(Ft(Ae,Le))w(Ae,Le,O,null,Z,ne,ue,le,oe);else break;te++}for(;te<=ve&&te<=be;){const Ae=T[ve],Le=I[be]=oe?ui(I[be]):At(I[be]);if(Ft(Ae,Le))w(Ae,Le,O,null,Z,ne,ue,le,oe);else break;ve--,be--}if(te>ve){if(te<=be){const Ae=be+1,Le=Ae<de?I[Ae].el:X;for(;te<=be;)w(null,I[te]=oe?ui(I[te]):At(I[te]),O,Le,Z,ne,ue,le,oe),te++}}else if(te>be)for(;te<=ve;)je(T[te],Z,ne,!0),te++;else{const Ae=te,Le=te,Ne=new Map;for(te=Le;te<=be;te++){const wt=I[te]=oe?ui(I[te]):At(I[te]);wt.key!=null&&Ne.set(wt.key,te)}let We,nt=0;const zt=be-Le+1;let Yi=!1,xs=0;const ka=new Array(zt);for(te=0;te<zt;te++)ka[te]=0;for(te=Ae;te<=ve;te++){const wt=T[te];if(nt>=zt){je(wt,Z,ne,!0);continue}let Vt;if(wt.key!=null)Vt=Ne.get(wt.key);else for(We=Le;We<=be;We++)if(ka[We-Le]===0&&Ft(wt,I[We])){Vt=We;break}Vt===void 0?je(wt,Z,ne,!0):(ka[Vt-Le]=te+1,Vt>=xs?xs=Vt:Yi=!0,w(wt,I[Vt],O,null,Z,ne,ue,le,oe),nt++)}const $s=Yi?pg(ka):Zi;for(We=$s.length-1,te=zt-1;te>=0;te--){const wt=Le+te,Vt=I[wt],Bs=wt+1<de?I[wt+1].el:X;ka[te]===0?w(null,Vt,O,Bs,Z,ne,ue,le,oe):Yi&&(We<0||te!==$s[We]?lt(Vt,O,Bs,2):We--)}}},lt=(T,I,O,X,Z=null)=>{const{el:ne,type:ue,transition:le,children:oe,shapeFlag:te}=T;if(te&6){lt(T.component.subTree,I,O,X);return}if(te&128){T.suspense.move(I,O,X);return}if(te&64){ue.move(T,I,O,Ve);return}if(ue===Ce){o(ne,I,O);for(let ve=0;ve<oe.length;ve++)lt(oe[ve],I,O,X);o(T.anchor,I,O);return}if(ue===Ii){C(T,I,O);return}if(X!==2&&te&1&&le)if(X===0)le.beforeEnter(ne),o(ne,I,O),st(()=>le.enter(ne),Z);else{const{leave:ve,delayLeave:be,afterLeave:Ae}=le,Le=()=>o(ne,I,O),Ne=()=>{ve(ne,()=>{Le(),Ae&&Ae()})};be?be(ne,Le,Ne):Ne()}else o(ne,I,O)},je=(T,I,O,X=!1,Z=!1)=>{const{type:ne,props:ue,ref:le,children:oe,dynamicChildren:te,shapeFlag:de,patchFlag:ve,dirs:be}=T;if(le!=null&&zl(le,null,O,T,!0),de&256){I.ctx.deactivate(T);return}const Ae=de&1&&be,Le=!Di(T);let Ne;if(Le&&(Ne=ue&&ue.onVnodeBeforeUnmount)&&ht(Ne,I,T),de&6)Y(T.component,O,X);else{if(de&128){T.suspense.unmount(O,X);return}Ae&&Ht(T,null,I,"beforeUnmount"),de&64?T.type.remove(T,I,O,Z,Ve,X):te&&(ne!==Ce||ve>0&&ve&64)?re(te,I,O,!1,!0):(ne===Ce&&ve&384||!Z&&de&16)&&re(oe,I,O),X&&qt(T)}(Le&&(Ne=ue&&ue.onVnodeUnmounted)||Ae)&&st(()=>{Ne&&ht(Ne,I,T),Ae&&Ht(T,null,I,"unmounted")},O)},qt=T=>{const{type:I,el:O,anchor:X,transition:Z}=T;if(I===Ce){Tt(O,X);return}if(I===Ii){x(T);return}const ne=()=>{r(O),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(T.shapeFlag&1&&Z&&!Z.persisted){const{leave:ue,delayLeave:le}=Z,oe=()=>ue(O,ne);le?le(T.el,ne,oe):oe()}else ne()},Tt=(T,I)=>{let O;for(;T!==I;)O=h(T),r(T),T=O;r(I)},Y=(T,I,O)=>{const{bum:X,scope:Z,update:ne,subTree:ue,um:le}=T;X&&ta(X),Z.stop(),ne&&(ne.active=!1,je(ue,T,I,O)),le&&st(le,I),st(()=>{T.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},re=(T,I,O,X=!1,Z=!1,ne=0)=>{for(let ue=ne;ue<T.length;ue++)je(T[ue],I,O,X,Z)},se=T=>T.shapeFlag&6?se(T.component.subTree):T.shapeFlag&128?T.suspense.next():h(T.anchor||T.el);let he=!1;const Me=(T,I,O)=>{T==null?I._vnode&&je(I._vnode,null,null,!0):w(I._vnode||null,T,I,null,null,null,O),he||(he=!0,Ms(),Il(),he=!1),I._vnode=T},Ve={p:w,um:je,m:lt,r:qt,mt:Be,mc:M,pc:ie,pbc:j,n:se,o:e};let xe,$e;return a&&([xe,$e]=a(Ve)),{render:Me,hydrate:xe,createApp:ag(Me,xe)}}function Ln({type:e,props:a},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&a&&a.encoding&&a.encoding.includes("html")?void 0:n}function Ci({effect:e,update:a},n){e.allowRecurse=a.allowRecurse=n}function Vd(e,a){return(!e||e&&!e.pendingBranch)&&a&&!a.persisted}function ps(e,a,n=!1){const o=e.children,r=a.children;if(pe(o)&&pe(r))for(let c=0;c<o.length;c++){const m=o[c];let p=r[c];p.shapeFlag&1&&!p.dynamicChildren&&((p.patchFlag<=0||p.patchFlag===32)&&(p=r[c]=ui(r[c]),p.el=m.el),n||ps(m,p)),p.type===Pi&&(p.el=m.el)}}function pg(e){const a=e.slice(),n=[0];let o,r,c,m,p;const s=e.length;for(o=0;o<s;o++){const u=e[o];if(u!==0){if(r=n[n.length-1],e[r]<u){a[o]=r,n.push(o);continue}for(c=0,m=n.length-1;c<m;)p=c+m>>1,e[n[p]]<u?c=p+1:m=p;u<e[n[c]]&&(c>0&&(a[o]=n[c-1]),n[c]=o)}}for(c=n.length,m=n[c-1];c-- >0;)n[c]=m,m=a[m];return n}function Hd(e){const a=e.subTree.component;if(a)return a.asyncDep&&!a.asyncResolved?a:Hd(a)}const fg=e=>e.__isTeleport,Ha=e=>e&&(e.disabled||e.disabled===""),Ks=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Xs=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,oo=(e,a)=>{const n=e&&e.to;return Ze(n)?a?a(n):null:n},gg={name:"Teleport",__isTeleport:!0,process(e,a,n,o,r,c,m,p,s,u){const{mc:f,pc:d,pbc:h,o:{insert:v,querySelector:_,createText:w,createComment:A}}=u,$=Ha(a.props);let{shapeFlag:b,children:C,dynamicChildren:x}=a;if(e==null){const B=a.el=w(""),E=a.anchor=w("");v(B,n,o),v(E,n,o);const F=a.target=oo(a.props,_),M=a.targetAnchor=w("");F&&(v(M,F),m==="svg"||Ks(F)?m="svg":(m==="mathml"||Xs(F))&&(m="mathml"));const z=(j,K)=>{b&16&&f(C,j,K,r,c,m,p,s)};$?z(n,E):F&&z(F,M)}else{a.el=e.el;const B=a.anchor=e.anchor,E=a.target=e.target,F=a.targetAnchor=e.targetAnchor,M=Ha(e.props),z=M?n:E,j=M?B:F;if(m==="svg"||Ks(E)?m="svg":(m==="mathml"||Xs(E))&&(m="mathml"),x?(h(e.dynamicChildren,x,z,r,c,m,p),ps(e,a,!0)):s||d(e,a,z,j,r,c,m,p,!1),$)M?a.props&&e.props&&a.props.to!==e.props.to&&(a.props.to=e.props.to):yl(a,n,B,u,1);else if((a.props&&a.props.to)!==(e.props&&e.props.to)){const K=a.target=oo(a.props,_);K&&yl(a,K,null,u,0)}else M&&yl(a,E,F,u,1)}Nd(a)},remove(e,a,n,o,{um:r,o:{remove:c}},m){const{shapeFlag:p,children:s,anchor:u,targetAnchor:f,target:d,props:h}=e;if(d&&c(f),m&&c(u),p&16){const v=m||!Ha(h);for(let _=0;_<s.length;_++){const w=s[_];r(w,a,n,v,!!w.dynamicChildren)}}},move:yl,hydrate:hg};function yl(e,a,n,{o:{insert:o},m:r},c=2){c===0&&o(e.targetAnchor,a,n);const{el:m,anchor:p,shapeFlag:s,children:u,props:f}=e,d=c===2;if(d&&o(m,a,n),(!d||Ha(f))&&s&16)for(let h=0;h<u.length;h++)r(u[h],a,n,2);d&&o(p,a,n)}function hg(e,a,n,o,r,c,{o:{nextSibling:m,parentNode:p,querySelector:s}},u){const f=a.target=oo(a.props,s);if(f){const d=f._lpa||f.firstChild;if(a.shapeFlag&16)if(Ha(a.props))a.anchor=u(m(e),a,p(e),n,o,r,c),a.targetAnchor=d;else{a.anchor=m(e);let h=d;for(;h;)if(h=m(h),h&&h.nodeType===8&&h.data==="teleport anchor"){a.targetAnchor=h,f._lpa=a.targetAnchor&&m(a.targetAnchor);break}u(d,a,f,n,o,r,c)}Nd(a)}return a.anchor&&m(a.anchor)}const pn=gg;function Nd(e){const a=e.ctx;if(a&&a.ut){let n=e.children[0].el;for(;n&&n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",a.uid),n=n.nextSibling;a.ut()}}const Ce=Symbol.for("v-fgt"),Pi=Symbol.for("v-txt"),pt=Symbol.for("v-cmt"),Ii=Symbol.for("v-stc"),Na=[];let vt=null;function L(e=!1){Na.push(vt=e?null:[])}function Od(){Na.pop(),vt=Na[Na.length-1]||null}let Fi=1;function so(e){Fi+=e}function jd(e){return e.dynamicChildren=Fi>0?vt||Zi:null,Od(),Fi>0&&vt&&vt.push(e),e}function ge(e,a,n,o,r,c){return jd(S(e,a,n,o,r,c,!0))}function R(e,a,n,o,r){return jd(t(e,a,n,o,r,!0))}function Rt(e){return e?e.__v_isVNode===!0:!1}function Ft(e,a){return e.type===a.type&&e.key===a.key}function _g(e){}const fn="__vInternal",Gd=({key:e})=>e??null,$l=({ref:e,ref_key:a,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ze(e)||ut(e)||Se(e)?{i:it,r:e,k:a,f:!!n}:e:null);function S(e,a=null,n=null,o=0,r=null,c=e===Ce?0:1,m=!1,p=!1){const s={__v_isVNode:!0,__v_skip:!0,type:e,props:a,key:a&&Gd(a),ref:a&&$l(a),scopeId:sn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:c,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:it};return p?(fs(s,n),c&128&&e.normalize(s)):n&&(s.shapeFlag|=Ze(n)?8:16),Fi>0&&!m&&vt&&(s.patchFlag>0||c&6)&&s.patchFlag!==32&&vt.push(s),s}const t=bg;function bg(e,a=null,n=null,o=0,r=null,c=!1){if((!e||e===rd)&&(e=pt),Rt(e)){const p=Ot(e,a,!0);return n&&fs(p,n),Fi>0&&!c&&vt&&(p.shapeFlag&6?vt[vt.indexOf(e)]=p:vt.push(p)),p.patchFlag|=-2,p}if(xg(e)&&(e=e.__vccOpts),a){a=qd(a);let{class:p,style:s}=a;p&&!Ze(p)&&(a.class=nl(p)),Oe(s)&&(Jo(s)&&!pe(s)&&(s=Qe({},s)),a.style=Sa(s))}const m=Ze(e)?1:cd(e)?128:fg(e)?64:Oe(e)?4:Se(e)?2:0;return S(e,a,n,o,r,m,c,!0)}function qd(e){return e?Jo(e)||fn in e?Qe({},e):e:null}function Ot(e,a,n=!1){const{props:o,ref:r,patchFlag:c,children:m}=e,p=a?Ui(o||{},a):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Gd(p),ref:a&&a.ref?n&&r?pe(r)?r.concat($l(a)):[r,$l(a)]:$l(a):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:m,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:a&&e.type!==Ce?c===-1?16:c|16:c,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ot(e.ssContent),ssFallback:e.ssFallback&&Ot(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function l(e=" ",a=0){return t(Pi,null,e,a)}function vg(e,a){const n=t(Ii,null,e);return n.staticCount=a,n}function Ud(e="",a=!1){return a?(L(),R(pt,null,e)):t(pt,null,e)}function At(e){return e==null||typeof e=="boolean"?t(pt):pe(e)?t(Ce,null,e.slice()):typeof e=="object"?ui(e):t(Pi,null,String(e))}function ui(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ot(e)}function fs(e,a){let n=0;const{shapeFlag:o}=e;if(a==null)a=null;else if(pe(a))n=16;else if(typeof a=="object")if(o&65){const r=a.default;r&&(r._c&&(r._d=!1),fs(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=a._;!r&&!(fn in a)?a._ctx=it:r===3&&it&&(it.slots._===1?a._=1:(a._=2,e.patchFlag|=1024))}else Se(a)?(a={default:a,_ctx:it},n=32):(a=String(a),o&64?(n=16,a=[l(a)]):n=8);e.children=a,e.shapeFlag|=n}function Ui(...e){const a={};for(let n=0;n<e.length;n++){const o=e[n];for(const r in o)if(r==="class")a.class!==o.class&&(a.class=nl([a.class,o.class]));else if(r==="style")a.style=Sa([a.style,o.style]);else if(al(r)){const c=a[r],m=o[r];m&&c!==m&&!(pe(c)&&c.includes(m))&&(a[r]=c?[].concat(c,m):m)}else r!==""&&(a[r]=o[r])}return a}function ht(e,a,n,o=null){$t(e,a,7,[n,o])}const yg=Ld();let Sg=0;function Yd(e,a,n){const o=e.type,r=(a?a.appContext:e.appContext)||yg,c={uid:Sg++,vnode:e,type:o,parent:a,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Oo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dd(o,r),emitsOptions:sd(o,r),emit:null,emitted:null,propsDefaults:He,inheritAttrs:o.inheritAttrs,ctx:He,data:He,props:He,attrs:He,slots:He,refs:He,setupState:He,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return c.ctx={_:c},c.root=a?a.root:c,c.emit=hf.bind(null,c),e.ce&&e.ce(c),c}let at=null;const jt=()=>at||it;let Pl,ro;{const e=Dc(),a=(n,o)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(o),c=>{r.length>1?r.forEach(m=>m(c)):r[0](c)}};Pl=a("__VUE_INSTANCE_SETTERS__",n=>at=n),ro=a("__VUE_SSR_SETTERS__",n=>ul=n)}const Mi=e=>{const a=at;return Pl(e),e.scope.on(),()=>{e.scope.off(),Pl(a)}},uo=()=>{at&&at.scope.off(),Pl(null)};function Jd(e){return e.vnode.shapeFlag&4}let ul=!1;function Wd(e,a=!1){a&&ro(a);const{props:n,children:o}=e.vnode,r=Jd(e);ng(e,n,r,a),rg(e,o);const c=r?wg(e,a):void 0;return a&&ro(!1),c}function wg(e,a){const n=e.type;e.accessCache=Object.create(null),e.proxy=Wo(new Proxy(e.ctx,io));const{setup:o}=n;if(o){const r=e.setupContext=o.length>1?Xd(e):null,c=Mi(e);Oi();const m=Kt(o,e,0,[e.props,r]);if(ji(),c(),Ho(m)){if(m.then(uo,uo),a)return m.then(p=>{co(e,p,a)}).catch(p=>{Gi(p,e,0)});e.asyncDep=m}else co(e,m,a)}else Kd(e,a)}function co(e,a,n){Se(a)?e.type.__ssrInlineRender?e.ssrRender=a:e.render=a:Oe(a)&&(e.setupState=Qo(a)),Kd(e,n)}let Fl,mo;function Cg(e){Fl=e,mo=a=>{a.render._rc&&(a.withProxy=new Proxy(a.ctx,Mf))}}const Ag=()=>!Fl;function Kd(e,a,n){const o=e.type;if(!e.render){if(!a&&Fl&&!o.render){const r=o.template||ds(e).template;if(r){const{isCustomElement:c,compilerOptions:m}=e.appContext.config,{delimiters:p,compilerOptions:s}=o,u=Qe(Qe({isCustomElement:c,delimiters:p},m),s);o.render=Fl(r,u)}}e.render=o.render||bt,mo&&mo(e)}{const r=Mi(e);Oi();try{Xf(e)}finally{ji(),r()}}}function kg(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(a,n){return St(e,"get","$attrs"),a[n]}}))}function Xd(e){const a=n=>{e.exposed=n||{}};return{get attrs(){return kg(e)},slots:e.slots,emit:e.emit,expose:a}}function gn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Qo(Wo(e.exposed)),{get(a,n){if(n in a)return a[n];if(n in Va)return Va[n](e)},has(a,n){return n in a||n in Va}}))}function po(e,a=!0){return Se(e)?e.displayName||e.name:e.name||a&&e.__name}function xg(e){return Se(e)&&"__vccOpts"in e}const V=(e,a)=>Xp(e,a,ul);function $g(e,a,n=He){const o=jt(),r=gt(a),c=xt(a),m=td((s,u)=>{let f;return gd(()=>{const d=e[a];Mt(f,d)&&(f=d,u())}),{get(){return s(),n.get?n.get(f):f},set(d){const h=o.vnode.props;!(h&&(a in h||r in h||c in h)&&(`onUpdate:${a}`in h||`onUpdate:${r}`in h||`onUpdate:${c}`in h))&&Mt(d,f)&&(f=d,u()),o.emit(`update:${a}`,n.set?n.set(d):d)}}}),p=a==="modelValue"?"modelModifiers":`${a}Modifiers`;return m[Symbol.iterator]=()=>{let s=0;return{next(){return s<2?{value:s++?e[p]||{}:m,done:!1}:{done:!0}}}},m}function J(e,a,n){const o=arguments.length;return o===2?Oe(a)&&!pe(a)?Rt(a)?t(e,null,[a]):t(e,a):t(e,null,a):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&Rt(n)&&(n=[n]),t(e,a,n))}function Bg(){}function Tg(e,a,n,o){const r=n[o];if(r&&Qd(r,e))return r;const c=a();return c.memo=e.slice(),n[o]=c}function Qd(e,a){const n=e.memo;if(n.length!=a.length)return!1;for(let o=0;o<n.length;o++)if(Mt(n[o],a[o]))return!1;return Fi>0&&vt&&vt.push(e),!0}const Zd="3.4.15",Lg=bt,Eg=df,Dg=Wi,Ig=od,Rg={createComponentInstance:Yd,setupComponent:Wd,renderComponentRoot:xl,setCurrentRenderingInstance:Xa,isVNode:Rt,normalizeVNode:At},zg=Rg,Pg=null,Fg=null,Mg=null;/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Vg="http://www.w3.org/2000/svg",Hg="http://www.w3.org/1998/Math/MathML",ci=typeof document<"u"?document:null,Qs=ci&&ci.createElement("template"),Ng={insert:(e,a,n)=>{a.insertBefore(e,n||null)},remove:e=>{const a=e.parentNode;a&&a.removeChild(e)},createElement:(e,a,n,o)=>{const r=a==="svg"?ci.createElementNS(Vg,e):a==="mathml"?ci.createElementNS(Hg,e):ci.createElement(e,n?{is:n}:void 0);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>ci.createTextNode(e),createComment:e=>ci.createComment(e),setText:(e,a)=>{e.nodeValue=a},setElementText:(e,a)=>{e.textContent=a},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ci.querySelector(e),setScopeId(e,a){e.setAttribute(a,"")},insertStaticContent(e,a,n,o,r,c){const m=n?n.previousSibling:a.lastChild;if(r&&(r===c||r.nextSibling))for(;a.insertBefore(r.cloneNode(!0),n),!(r===c||!(r=r.nextSibling)););else{Qs.innerHTML=o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e;const p=Qs.content;if(o==="svg"||o==="mathml"){const s=p.firstChild;for(;s.firstChild;)p.appendChild(s.firstChild);p.removeChild(s)}a.insertBefore(p,n)}return[m?m.nextSibling:a.firstChild,n?n.previousSibling:a.lastChild]}},li="transition",xa="animation",pa=Symbol("_vtc"),hn=(e,{slots:a})=>J(_d,tm(e),a);hn.displayName="Transition";const em={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Og=hn.props=Qe({},rs,em),Ai=(e,a=[])=>{pe(e)?e.forEach(n=>n(...a)):e&&e(...a)},Zs=e=>e?pe(e)?e.some(a=>a.length>1):e.length>1:!1;function tm(e){const a={};for(const U in e)U in em||(a[U]=e[U]);if(e.css===!1)return a;const{name:n="v",type:o,duration:r,enterFromClass:c=`${n}-enter-from`,enterActiveClass:m=`${n}-enter-active`,enterToClass:p=`${n}-enter-to`,appearFromClass:s=c,appearActiveClass:u=m,appearToClass:f=p,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=e,_=jg(r),w=_&&_[0],A=_&&_[1],{onBeforeEnter:$,onEnter:b,onEnterCancelled:C,onLeave:x,onLeaveCancelled:B,onBeforeAppear:E=$,onAppear:F=b,onAppearCancelled:M=C}=a,z=(U,me,Be)=>{oi(U,me?f:p),oi(U,me?u:m),Be&&Be()},j=(U,me)=>{U._isLeaving=!1,oi(U,d),oi(U,v),oi(U,h),me&&me()},K=U=>(me,Be)=>{const G=U?F:b,W=()=>z(me,U,Be);Ai(G,[me,W]),er(()=>{oi(me,U?s:c),Ut(me,U?f:p),Zs(G)||tr(me,o,w,W)})};return Qe(a,{onBeforeEnter(U){Ai($,[U]),Ut(U,c),Ut(U,m)},onBeforeAppear(U){Ai(E,[U]),Ut(U,s),Ut(U,u)},onEnter:K(!1),onAppear:K(!0),onLeave(U,me){U._isLeaving=!0;const Be=()=>j(U,me);Ut(U,d),am(),Ut(U,h),er(()=>{U._isLeaving&&(oi(U,d),Ut(U,v),Zs(x)||tr(U,o,A,Be))}),Ai(x,[U,Be])},onEnterCancelled(U){z(U,!1),Ai(C,[U])},onAppearCancelled(U){z(U,!0),Ai(M,[U])},onLeaveCancelled(U){j(U),Ai(B,[U])}})}function jg(e){if(e==null)return null;if(Oe(e))return[En(e.enter),En(e.leave)];{const a=En(e);return[a,a]}}function En(e){return Ll(e)}function Ut(e,a){a.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[pa]||(e[pa]=new Set)).add(a)}function oi(e,a){a.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const n=e[pa];n&&(n.delete(a),n.size||(e[pa]=void 0))}function er(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Gg=0;function tr(e,a,n,o){const r=e._endId=++Gg,c=()=>{r===e._endId&&o()};if(n)return setTimeout(c,n);const{type:m,timeout:p,propCount:s}=im(e,a);if(!m)return o();const u=m+"end";let f=0;const d=()=>{e.removeEventListener(u,h),c()},h=v=>{v.target===e&&++f>=s&&d()};setTimeout(()=>{f<s&&d()},p+1),e.addEventListener(u,h)}function im(e,a){const n=window.getComputedStyle(e),o=_=>(n[_]||"").split(", "),r=o(`${li}Delay`),c=o(`${li}Duration`),m=ir(r,c),p=o(`${xa}Delay`),s=o(`${xa}Duration`),u=ir(p,s);let f=null,d=0,h=0;a===li?m>0&&(f=li,d=m,h=c.length):a===xa?u>0&&(f=xa,d=u,h=s.length):(d=Math.max(m,u),f=d>0?m>u?li:xa:null,h=f?f===li?c.length:s.length:0);const v=f===li&&/\b(transform|all)(,|$)/.test(o(`${li}Property`).toString());return{type:f,timeout:d,propCount:h,hasTransform:v}}function ir(e,a){for(;e.length<a.length;)e=e.concat(e);return Math.max(...a.map((n,o)=>ar(n)+ar(e[o])))}function ar(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function am(){return document.body.offsetHeight}function qg(e,a,n){const o=e[pa];o&&(a=(a?[a,...o]:[...o]).join(" ")),a==null?e.removeAttribute("class"):n?e.setAttribute("class",a):e.className=a}const gs=Symbol("_vod"),lm={beforeMount(e,{value:a},{transition:n}){e[gs]=e.style.display==="none"?"":e.style.display,n&&a?n.beforeEnter(e):$a(e,a)},mounted(e,{value:a},{transition:n}){n&&a&&n.enter(e)},updated(e,{value:a,oldValue:n},{transition:o}){!a!=!n&&(o?a?(o.beforeEnter(e),$a(e,!0),o.enter(e)):o.leave(e,()=>{$a(e,!1)}):$a(e,a))},beforeUnmount(e,{value:a}){$a(e,a)}};function $a(e,a){e.style.display=a?e[gs]:"none"}function Ug(){lm.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const nm=Symbol("");function Yg(e){const a=jt();if(!a)return;const n=a.ut=(r=e(a.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${a.uid}"]`)).forEach(c=>go(c,r))},o=()=>{const r=e(a.proxy);fo(a.subTree,r),n(r)};fd(o),yi(()=>{const r=new MutationObserver(o);r.observe(a.subTree.el.parentNode,{childList:!0}),qi(()=>r.disconnect())})}function fo(e,a){if(e.shapeFlag&128){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{fo(n.activeBranch,a)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)go(e.el,a);else if(e.type===Ce)e.children.forEach(n=>fo(n,a));else if(e.type===Ii){let{el:n,anchor:o}=e;for(;n&&(go(n,a),n!==o);)n=n.nextSibling}}function go(e,a){if(e.nodeType===1){const n=e.style;let o="";for(const r in a)n.setProperty(`--${r}`,a[r]),o+=`--${r}: ${a[r]};`;n[nm]=o}}function Jg(e,a,n){const o=e.style,r=o.display,c=Ze(n);if(n&&!c){if(a&&!Ze(a))for(const m in a)n[m]==null&&ho(o,m,"");for(const m in n)ho(o,m,n[m])}else if(c){if(a!==n){const m=o[nm];m&&(n+=";"+m),o.cssText=n}}else a&&e.removeAttribute("style");gs in e&&(o.display=r)}const lr=/\s*!important$/;function ho(e,a,n){if(pe(n))n.forEach(o=>ho(e,a,o));else if(n==null&&(n=""),a.startsWith("--"))e.setProperty(a,n);else{const o=Wg(e,a);lr.test(n)?e.setProperty(xt(o),n.replace(lr,""),"important"):e[o]=n}}const nr=["Webkit","Moz","ms"],Dn={};function Wg(e,a){const n=Dn[a];if(n)return n;let o=gt(a);if(o!=="filter"&&o in e)return Dn[a]=o;o=ll(o);for(let r=0;r<nr.length;r++){const c=nr[r]+o;if(c in e)return Dn[a]=c}return a}const or="http://www.w3.org/1999/xlink";function Kg(e,a,n,o,r){if(o&&a.startsWith("xlink:"))n==null?e.removeAttributeNS(or,a.slice(6,a.length)):e.setAttributeNS(or,a,n);else{const c=kp(a);n==null||c&&!Ic(n)?e.removeAttribute(a):e.setAttribute(a,c?"":n)}}function Xg(e,a,n,o,r,c,m){if(a==="innerHTML"||a==="textContent"){o&&m(o,r,c),e[a]=n??"";return}const p=e.tagName;if(a==="value"&&p!=="PROGRESS"&&!p.includes("-")){e._value=n;const u=p==="OPTION"?e.getAttribute("value"):e.value,f=n??"";u!==f&&(e.value=f),n==null&&e.removeAttribute(a);return}let s=!1;if(n===""||n==null){const u=typeof e[a];u==="boolean"?n=Ic(n):n==null&&u==="string"?(n="",s=!0):u==="number"&&(n=0,s=!0)}try{e[a]=n}catch{}s&&e.removeAttribute(a)}function Jt(e,a,n,o){e.addEventListener(a,n,o)}function Qg(e,a,n,o){e.removeEventListener(a,n,o)}const sr=Symbol("_vei");function Zg(e,a,n,o,r=null){const c=e[sr]||(e[sr]={}),m=c[a];if(o&&m)m.value=o;else{const[p,s]=eh(a);if(o){const u=c[a]=ah(o,r);Jt(e,p,u,s)}else m&&(Qg(e,p,m,s),c[a]=void 0)}}const rr=/(?:Once|Passive|Capture)$/;function eh(e){let a;if(rr.test(e)){a={};let o;for(;o=e.match(rr);)e=e.slice(0,e.length-o[0].length),a[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):xt(e.slice(2)),a]}let In=0;const th=Promise.resolve(),ih=()=>In||(th.then(()=>In=0),In=Date.now());function ah(e,a){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;$t(lh(o,n.value),a,5,[o])};return n.value=e,n.attached=ih(),n}function lh(e,a){if(pe(a)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},a.map(o=>r=>!r._stopped&&o&&o(r))}else return a}const ur=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,nh=(e,a,n,o,r,c,m,p,s)=>{const u=r==="svg";a==="class"?qg(e,o,u):a==="style"?Jg(e,n,o):al(a)?Mo(a)||Zg(e,a,n,o,m):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):oh(e,a,o,u))?Xg(e,a,o,c,m,p,s):(a==="true-value"?e._trueValue=o:a==="false-value"&&(e._falseValue=o),Kg(e,a,o,u))};function oh(e,a,n,o){if(o)return!!(a==="innerHTML"||a==="textContent"||a in e&&ur(a)&&Se(n));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&e.tagName==="INPUT"||a==="type"&&e.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ur(a)&&Ze(n)?!1:a in e}/*! #__NO_SIDE_EFFECTS__ */function om(e,a){const n=D(e);class o extends _n{constructor(c){super(n,c,a)}}return o.def=n,o}/*! #__NO_SIDE_EFFECTS__ */const sh=e=>om(e,bm),rh=typeof HTMLElement<"u"?HTMLElement:class{};class _n extends rh{constructor(a,n={},o){super(),this._def=a,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&o?o(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),wa(()=>{this._connected||(Hl(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let o=0;o<this.attributes.length;o++)this._setAttr(this.attributes[o].name);this._ob=new MutationObserver(o=>{for(const r of o)this._setAttr(r.attributeName)}),this._ob.observe(this,{attributes:!0});const a=(o,r=!1)=>{const{props:c,styles:m}=o;let p;if(c&&!pe(c))for(const s in c){const u=c[s];(u===Number||u&&u.type===Number)&&(s in this._props&&(this._props[s]=Ll(this._props[s])),(p||(p=Object.create(null)))[gt(s)]=!0)}this._numberProps=p,r&&this._resolveProps(o),this._applyStyles(m),this._update()},n=this._def.__asyncLoader;n?n().then(o=>a(o,!0)):a(this._def)}_resolveProps(a){const{props:n}=a,o=pe(n)?n:Object.keys(n||{});for(const r of Object.keys(this))r[0]!=="_"&&o.includes(r)&&this._setProp(r,this[r],!0,!1);for(const r of o.map(gt))Object.defineProperty(this,r,{get(){return this._getProp(r)},set(c){this._setProp(r,c)}})}_setAttr(a){let n=this.getAttribute(a);const o=gt(a);this._numberProps&&this._numberProps[o]&&(n=Ll(n)),this._setProp(o,n,!1)}_getProp(a){return this._props[a]}_setProp(a,n,o=!0,r=!0){n!==this._props[a]&&(this._props[a]=n,r&&this._instance&&this._update(),o&&(n===!0?this.setAttribute(xt(a),""):typeof n=="string"||typeof n=="number"?this.setAttribute(xt(a),n+""):n||this.removeAttribute(xt(a))))}_update(){Hl(this._createVNode(),this.shadowRoot)}_createVNode(){const a=t(this._def,Qe({},this._props));return this._instance||(a.ce=n=>{this._instance=n,n.isCE=!0;const o=(c,m)=>{this.dispatchEvent(new CustomEvent(c,{detail:m}))};n.emit=(c,...m)=>{o(c,m),xt(c)!==c&&o(xt(c),m)};let r=this;for(;r=r&&(r.parentNode||r.host);)if(r instanceof _n){n.parent=r._instance,n.provides=r._instance.provides;break}}),a}_applyStyles(a){a&&a.forEach(n=>{const o=document.createElement("style");o.textContent=n,this.shadowRoot.appendChild(o)})}}function uh(e="$style"){{const a=jt();if(!a)return He;const n=a.type.__cssModules;if(!n)return He;const o=n[e];return o||He}}const sm=new WeakMap,rm=new WeakMap,Ml=Symbol("_moveCb"),cr=Symbol("_enterCb"),um={name:"TransitionGroup",props:Qe({},Og,{tag:String,moveClass:String}),setup(e,{slots:a}){const n=jt(),o=ss();let r,c;return dn(()=>{if(!r.length)return;const m=e.moveClass||`${e.name||"v"}-move`;if(!fh(r[0].el,n.vnode.el,m))return;r.forEach(dh),r.forEach(mh);const p=r.filter(ph);am(),p.forEach(s=>{const u=s.el,f=u.style;Ut(u,m),f.transform=f.webkitTransform=f.transitionDuration="";const d=u[Ml]=h=>{h&&h.target!==u||(!h||/transform$/.test(h.propertyName))&&(u.removeEventListener("transitionend",d),u[Ml]=null,oi(u,m))};u.addEventListener("transitionend",d)})}),()=>{const m=Ee(e),p=tm(m);let s=m.tag||Ce;r=c,c=a.default?un(a.default()):[];for(let u=0;u<c.length;u++){const f=c[u];f.key!=null&&zi(f,da(f,p,o,n))}if(r)for(let u=0;u<r.length;u++){const f=r[u];zi(f,da(f,p,o,n)),sm.set(f,f.el.getBoundingClientRect())}return t(s,null,c)}}},ch=e=>delete e.mode;um.props;const cm=um;function dh(e){const a=e.el;a[Ml]&&a[Ml](),a[cr]&&a[cr]()}function mh(e){rm.set(e,e.el.getBoundingClientRect())}function ph(e){const a=sm.get(e),n=rm.get(e),o=a.left-n.left,r=a.top-n.top;if(o||r){const c=e.el.style;return c.transform=c.webkitTransform=`translate(${o}px,${r}px)`,c.transitionDuration="0s",e}}function fh(e,a,n){const o=e.cloneNode(),r=e[pa];r&&r.forEach(p=>{p.split(/\s+/).forEach(s=>s&&o.classList.remove(s))}),n.split(/\s+/).forEach(p=>p&&o.classList.add(p)),o.style.display="none";const c=a.nodeType===1?a:a.parentNode;c.appendChild(o);const{hasTransform:m}=im(o);return c.removeChild(o),m}const vi=e=>{const a=e.props["onUpdate:modelValue"]||!1;return pe(a)?n=>ta(a,n):a};function gh(e){e.target.composing=!0}function dr(e){const a=e.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const It=Symbol("_assign"),Vl={created(e,{modifiers:{lazy:a,trim:n,number:o}},r){e[It]=vi(r);const c=o||r.props&&r.props.type==="number";Jt(e,a?"change":"input",m=>{if(m.target.composing)return;let p=e.value;n&&(p=p.trim()),c&&(p=Ua(p)),e[It](p)}),n&&Jt(e,"change",()=>{e.value=e.value.trim()}),a||(Jt(e,"compositionstart",gh),Jt(e,"compositionend",dr),Jt(e,"change",dr))},mounted(e,{value:a}){e.value=a??""},beforeUpdate(e,{value:a,modifiers:{lazy:n,trim:o,number:r}},c){if(e[It]=vi(c),e.composing)return;const m=r||e.type==="number"?Ua(e.value):e.value,p=a??"";m!==p&&(document.activeElement===e&&e.type!=="range"&&(n||o&&e.value.trim()===p)||(e.value=p))}},hs={deep:!0,created(e,a,n){e[It]=vi(n),Jt(e,"change",()=>{const o=e._modelValue,r=fa(e),c=e.checked,m=e[It];if(pe(o)){const p=en(o,r),s=p!==-1;if(c&&!s)m(o.concat(r));else if(!c&&s){const u=[...o];u.splice(p,1),m(u)}}else if(Ni(o)){const p=new Set(o);c?p.add(r):p.delete(r),m(p)}else m(mm(e,c))})},mounted:mr,beforeUpdate(e,a,n){e[It]=vi(n),mr(e,a,n)}};function mr(e,{value:a,oldValue:n},o){e._modelValue=a,pe(a)?e.checked=en(a,o.props.value)>-1:Ni(a)?e.checked=a.has(o.props.value):a!==n&&(e.checked=Xt(a,mm(e,!0)))}const _s={created(e,{value:a},n){e.checked=Xt(a,n.props.value),e[It]=vi(n),Jt(e,"change",()=>{e[It](fa(e))})},beforeUpdate(e,{value:a,oldValue:n},o){e[It]=vi(o),a!==n&&(e.checked=Xt(a,o.props.value))}},dm={deep:!0,created(e,{value:a,modifiers:{number:n}},o){const r=Ni(a);Jt(e,"change",()=>{const c=Array.prototype.filter.call(e.options,m=>m.selected).map(m=>n?Ua(fa(m)):fa(m));e[It](e.multiple?r?new Set(c):c:c[0]),e._assigning=!0,wa(()=>{e._assigning=!1})}),e[It]=vi(o)},mounted(e,{value:a,oldValue:n,modifiers:{number:o}}){pr(e,a,n,o)},beforeUpdate(e,a,n){e[It]=vi(n)},updated(e,{value:a,oldValue:n,modifiers:{number:o}}){e._assigning||pr(e,a,n,o)}};function pr(e,a,n,o){const r=e.multiple,c=pe(a);if(!(r&&!c&&!Ni(a))&&!(c&&Xt(a,n))){for(let m=0,p=e.options.length;m<p;m++){const s=e.options[m],u=fa(s);if(r)if(c){const f=typeof u;f==="string"||f==="number"?s.selected=a.includes(o?Ua(u):u):s.selected=en(a,u)>-1}else s.selected=a.has(u);else if(Xt(fa(s),a)){e.selectedIndex!==m&&(e.selectedIndex=m);return}}!r&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function fa(e){return"_value"in e?e._value:e.value}function mm(e,a){const n=a?"_trueValue":"_falseValue";return n in e?e[n]:a}const pm={created(e,a,n){Sl(e,a,n,null,"created")},mounted(e,a,n){Sl(e,a,n,null,"mounted")},beforeUpdate(e,a,n,o){Sl(e,a,n,o,"beforeUpdate")},updated(e,a,n,o){Sl(e,a,n,o,"updated")}};function fm(e,a){switch(e){case"SELECT":return dm;case"TEXTAREA":return Vl;default:switch(a){case"checkbox":return hs;case"radio":return _s;default:return Vl}}}function Sl(e,a,n,o,r){const m=fm(e.tagName,n.props&&n.props.type)[r];m&&m(e,a,n,o)}function hh(){Vl.getSSRProps=({value:e})=>({value:e}),_s.getSSRProps=({value:e},a)=>{if(a.props&&Xt(a.props.value,e))return{checked:!0}},hs.getSSRProps=({value:e},a)=>{if(pe(e)){if(a.props&&en(e,a.props.value)>-1)return{checked:!0}}else if(Ni(e)){if(a.props&&e.has(a.props.value))return{checked:!0}}else if(e)return{checked:!0}},pm.getSSRProps=(e,a)=>{if(typeof a.type!="string")return;const n=fm(a.type.toUpperCase(),a.props&&a.props.type);if(n.getSSRProps)return n.getSSRProps(e,a)}}const _h=["ctrl","shift","alt","meta"],bh={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,a)=>_h.some(n=>e[`${n}Key`]&&!a.includes(n))},Bt=(e,a)=>{const n=e._withMods||(e._withMods={}),o=a.join(".");return n[o]||(n[o]=(r,...c)=>{for(let m=0;m<a.length;m++){const p=bh[a[m]];if(p&&p(r,a))return}return e(r,...c)})},vh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},yh=(e,a)=>{const n=e._withKeys||(e._withKeys={}),o=a.join(".");return n[o]||(n[o]=r=>{if(!("key"in r))return;const c=xt(r.key);if(a.some(m=>m===c||vh[m]===c))return e(r)})},gm=Qe({patchProp:nh},Ng);let Oa,fr=!1;function hm(){return Oa||(Oa=Pd(gm))}function _m(){return Oa=fr?Oa:Fd(gm),fr=!0,Oa}const Hl=(...e)=>{hm().render(...e)},bm=(...e)=>{_m().hydrate(...e)},vm=(...e)=>{const a=hm().createApp(...e),{mount:n}=a;return a.mount=o=>{const r=Sm(o);if(!r)return;const c=a._component;!Se(c)&&!c.render&&!c.template&&(c.template=r.innerHTML),r.innerHTML="";const m=n(r,!1,ym(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),m},a},Sh=(...e)=>{const a=_m().createApp(...e),{mount:n}=a;return a.mount=o=>{const r=Sm(o);if(r)return n(r,!0,ym(r))},a};function ym(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Sm(e){return Ze(e)?document.querySelector(e):e}let gr=!1;const wh=()=>{gr||(gr=!0,hh(),Ug())};/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Ch=()=>{},Ah=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:_d,BaseTransitionPropsValidators:rs,Comment:pt,DeprecationTypes:Mg,EffectScope:Oo,ErrorCodes:cf,ErrorTypeStrings:Eg,Fragment:Ce,KeepAlive:Rf,ReactiveEffect:ca,Static:Ii,Suspense:Af,Teleport:pn,Text:Pi,TrackOpTypes:sf,Transition:hn,TransitionGroup:cm,TriggerOpTypes:rf,VueElement:_n,assertNumber:uf,callWithAsyncErrorHandling:$t,callWithErrorHandling:Kt,camelize:gt,capitalize:ll,cloneVNode:Ot,compatUtils:Fg,compile:Ch,computed:V,createApp:vm,createBlock:R,createCommentVNode:Ud,createElementBlock:ge,createElementVNode:S,createHydrationRenderer:Fd,createPropsRestProxy:Wf,createRenderer:Pd,createSSRApp:Sh,createSlots:Pf,createStaticVNode:vg,createTextVNode:l,createVNode:t,customRef:td,defineAsyncComponent:Df,defineComponent:D,defineCustomElement:om,defineEmits:Hf,defineExpose:Nf,defineModel:Gf,defineOptions:Of,defineProps:Vf,defineSSRCustomElement:sh,defineSlots:jf,devtools:Dg,effect:Tp,effectScope:$p,getCurrentInstance:jt,getCurrentScope:jo,getTransitionRawChildren:un,guardReactiveProps:qd,h:J,handleError:Gi,hasInjectionContext:lg,hydrate:bm,initCustomFormatter:Bg,initDirectivesForSSR:wh,inject:Fe,isMemoSame:Qd,isProxy:Jo,isReactive:Ei,isReadonly:Ri,isRef:ut,isRuntimeOnly:Ag,isShallow:Ya,isVNode:Rt,markRaw:Wo,mergeDefaults:Yf,mergeModels:Jf,mergeProps:Ui,nextTick:wa,normalizeClass:nl,normalizeProps:Cp,normalizeStyle:Sa,onActivated:us,onBeforeMount:yd,onBeforeUnmount:mn,onBeforeUpdate:Sd,onDeactivated:cs,onErrorCaptured:kd,onMounted:yi,onRenderTracked:Ad,onRenderTriggered:Cd,onScopeDispose:Pc,onServerPrefetch:wd,onUnmounted:qi,onUpdated:dn,openBlock:L,popScopeId:ts,provide:rt,proxyRefs:Qo,pushScopeId:es,queuePostFlushCb:Dl,reactive:Zt,readonly:Yo,ref:q,registerRuntimeCompiler:Cg,render:Hl,renderList:tt,renderSlot:ma,resolveComponent:y,resolveDirective:rn,resolveDynamicComponent:ud,resolveFilter:Pg,resolveTransitionHooks:da,setBlockTracking:so,setDevtoolsHook:Ig,setTransitionHooks:zi,shallowReactive:Xc,shallowReadonly:Kp,shallowRef:Zc,ssrContextKey:md,ssrUtils:zg,stop:Lp,toDisplayString:ke,toHandlerKey:Ma,toHandlers:Ff,toRaw:Ee,toRef:Qn,toRefs:lf,toValue:ef,transformVNodeArgs:_g,triggerRef:Zp,unref:g,useAttrs:$d,useCssModule:uh,useCssVars:Yg,useModel:$g,useSSRContext:pd,useSlots:Uf,useTransitionState:ss,vModelCheckbox:hs,vModelDynamic:pm,vModelRadio:_s,vModelSelect:dm,vModelText:Vl,vShow:lm,version:Zd,warn:Lg,watch:mt,watchEffect:os,watchPostEffect:fd,watchSyncEffect:gd,withAsyncContext:Kf,withCtx:i,withDefaults:qf,withDirectives:sl,withKeys:yh,withMemo:Tg,withModifiers:Bt,withScopeId:_f},Symbol.toStringTag,{value:"Module"})),kh=D({name:"App"}),we=(e,a)=>{const n=e.__vccOpts||e;for(const[o,r]of a)n[o]=r;return n};function xh(e,a,n,o,r,c){const m=y("router-view");return L(),R(m)}const $h=we(kh,[["render",xh]]);/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const wm=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Ca=e=>wm?Symbol(e):"_vr_"+e,Cm=Ca("rvlm"),hr=Ca("rvd"),bn=Ca("r"),bs=Ca("rl"),_o=Ca("rvl"),Ki=typeof window<"u";function Bh(e){return e.__esModule||wm&&e[Symbol.toStringTag]==="Module"}const Ge=Object.assign;function Rn(e,a){const n={};for(const o in a){const r=a[o];n[o]=Array.isArray(r)?r.map(e):e(r)}return n}const ja=()=>{},Th=/\/$/,Lh=e=>e.replace(Th,"");function zn(e,a,n="/"){let o,r={},c="",m="";const p=a.indexOf("?"),s=a.indexOf("#",p>-1?p:0);return p>-1&&(o=a.slice(0,p),c=a.slice(p+1,s>-1?s:a.length),r=e(c)),s>-1&&(o=o||a.slice(0,s),m=a.slice(s,a.length)),o=Rh(o??a,n),{fullPath:o+(c&&"?")+c+m,path:o,query:r,hash:m}}function Eh(e,a){const n=a.query?e(a.query):"";return a.path+(n&&"?")+n+(a.hash||"")}function _r(e,a){return!a||!e.toLowerCase().startsWith(a.toLowerCase())?e:e.slice(a.length)||"/"}function Dh(e,a,n){const o=a.matched.length-1,r=n.matched.length-1;return o>-1&&o===r&&ga(a.matched[o],n.matched[r])&&Am(a.params,n.params)&&e(a.query)===e(n.query)&&a.hash===n.hash}function ga(e,a){return(e.aliasOf||e)===(a.aliasOf||a)}function Am(e,a){if(Object.keys(e).length!==Object.keys(a).length)return!1;for(const n in e)if(!Ih(e[n],a[n]))return!1;return!0}function Ih(e,a){return Array.isArray(e)?br(e,a):Array.isArray(a)?br(a,e):e===a}function br(e,a){return Array.isArray(a)?e.length===a.length&&e.every((n,o)=>n===a[o]):e.length===1&&e[0]===a}function Rh(e,a){if(e.startsWith("/"))return e;if(!e)return a;const n=a.split("/"),o=e.split("/");let r=n.length-1,c,m;for(c=0;c<o.length;c++)if(m=o[c],!(r===1||m==="."))if(m==="..")r--;else break;return n.slice(0,r).join("/")+"/"+o.slice(c-(c===o.length?1:0)).join("/")}var tl;(function(e){e.pop="pop",e.push="push"})(tl||(tl={}));var Ga;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ga||(Ga={}));function zh(e){if(!e)if(Ki){const a=document.querySelector("base");e=a&&a.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Lh(e)}const Ph=/^[^#]+#/;function Fh(e,a){return e.replace(Ph,"#")+a}function Mh(e,a){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:a.behavior,left:o.left-n.left-(a.left||0),top:o.top-n.top-(a.top||0)}}const vn=()=>({left:window.pageXOffset,top:window.pageYOffset});function Vh(e){let a;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;a=Mh(r,e)}else a=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function vr(e,a){return(history.state?history.state.position-a:-1)+e}const bo=new Map;function Hh(e,a){bo.set(e,a)}function Nh(e){const a=bo.get(e);return bo.delete(e),a}let Oh=()=>location.protocol+"//"+location.host;function km(e,a){const{pathname:n,search:o,hash:r}=a,c=e.indexOf("#");if(c>-1){let p=r.includes(e.slice(c))?e.slice(c).length:1,s=r.slice(p);return s[0]!=="/"&&(s="/"+s),_r(s,"")}return _r(n,e)+o+r}function jh(e,a,n,o){let r=[],c=[],m=null;const p=({state:h})=>{const v=km(e,location),_=n.value,w=a.value;let A=0;if(h){if(n.value=v,a.value=h,m&&m===_){m=null;return}A=w?h.position-w.position:0}else o(v);r.forEach($=>{$(n.value,_,{delta:A,type:tl.pop,direction:A?A>0?Ga.forward:Ga.back:Ga.unknown})})};function s(){m=n.value}function u(h){r.push(h);const v=()=>{const _=r.indexOf(h);_>-1&&r.splice(_,1)};return c.push(v),v}function f(){const{history:h}=window;h.state&&h.replaceState(Ge({},h.state,{scroll:vn()}),"")}function d(){for(const h of c)h();c=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",f),{pauseListeners:s,listen:u,destroy:d}}function yr(e,a,n,o=!1,r=!1){return{back:e,current:a,forward:n,replaced:o,position:window.history.length,scroll:r?vn():null}}function Gh(e){const{history:a,location:n}=window,o={value:km(e,n)},r={value:a.state};r.value||c(o.value,{back:null,current:o.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function c(s,u,f){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+s:Oh()+e+s;try{a[f?"replaceState":"pushState"](u,"",h),r.value=u}catch(v){console.error(v),n[f?"replace":"assign"](h)}}function m(s,u){const f=Ge({},a.state,yr(r.value.back,s,r.value.forward,!0),u,{position:r.value.position});c(s,f,!0),o.value=s}function p(s,u){const f=Ge({},r.value,a.state,{forward:s,scroll:vn()});c(f.current,f,!0);const d=Ge({},yr(o.value,s,null),{position:f.position+1},u);c(s,d,!1),o.value=s}return{location:o,state:r,push:p,replace:m}}function qh(e){e=zh(e);const a=Gh(e),n=jh(e,a.state,a.location,a.replace);function o(c,m=!0){m||n.pauseListeners(),history.go(c)}const r=Ge({location:"",base:e,go:o,createHref:Fh.bind(null,e)},a,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>a.state.value}),r}function Uh(e){return typeof e=="string"||e&&typeof e=="object"}function xm(e){return typeof e=="string"||typeof e=="symbol"}const ni={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},$m=Ca("nf");var Sr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Sr||(Sr={}));function ha(e,a){return Ge(new Error,{type:e,[$m]:!0},a)}function ki(e,a){return e instanceof Error&&$m in e&&(a==null||!!(e.type&a))}const wr="[^/]+?",Yh={sensitive:!1,strict:!1,start:!0,end:!0},Jh=/[.+*?^${}()[\]/\\]/g;function Wh(e,a){const n=Ge({},Yh,a),o=[];let r=n.start?"^":"";const c=[];for(const u of e){const f=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const h=u[d];let v=40+(n.sensitive?.25:0);if(h.type===0)d||(r+="/"),r+=h.value.replace(Jh,"\\$&"),v+=40;else if(h.type===1){const{value:_,repeatable:w,optional:A,regexp:$}=h;c.push({name:_,repeatable:w,optional:A});const b=$||wr;if(b!==wr){v+=10;try{new RegExp(`(${b})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+x.message)}}let C=w?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;d||(C=A&&u.length<2?`(?:/${C})`:"/"+C),A&&(C+="?"),r+=C,v+=20,A&&(v+=-8),w&&(v+=-20),b===".*"&&(v+=-50)}f.push(v)}o.push(f)}if(n.strict&&n.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const m=new RegExp(r,n.sensitive?"":"i");function p(u){const f=u.match(m),d={};if(!f)return null;for(let h=1;h<f.length;h++){const v=f[h]||"",_=c[h-1];d[_.name]=v&&_.repeatable?v.split("/"):v}return d}function s(u){let f="",d=!1;for(const h of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const v of h)if(v.type===0)f+=v.value;else if(v.type===1){const{value:_,repeatable:w,optional:A}=v,$=_ in u?u[_]:"";if(Array.isArray($)&&!w)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=Array.isArray($)?$.join("/"):$;if(!b)if(A)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);f+=b}}return f}return{re:m,score:o,keys:c,parse:p,stringify:s}}function Kh(e,a){let n=0;for(;n<e.length&&n<a.length;){const o=a[n]-e[n];if(o)return o;n++}return e.length<a.length?e.length===1&&e[0]===80?-1:1:e.length>a.length?a.length===1&&a[0]===80?1:-1:0}function Xh(e,a){let n=0;const o=e.score,r=a.score;for(;n<o.length&&n<r.length;){const c=Kh(o[n],r[n]);if(c)return c;n++}return r.length-o.length}const Qh={type:0,value:""},Zh=/[a-zA-Z0-9_]/;function e_(e){if(!e)return[[]];if(e==="/")return[[Qh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function a(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,o=n;const r=[];let c;function m(){c&&r.push(c),c=[]}let p=0,s,u="",f="";function d(){u&&(n===0?c.push({type:0,value:u}):n===1||n===2||n===3?(c.length>1&&(s==="*"||s==="+")&&a(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),c.push({type:1,value:u,regexp:f,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):a("Invalid state to consume buffer"),u="")}function h(){u+=s}for(;p<e.length;){if(s=e[p++],s==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:s==="/"?(u&&d(),m()):s===":"?(d(),n=1):h();break;case 4:h(),n=o;break;case 1:s==="("?n=2:Zh.test(s)?h():(d(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&p--);break;case 2:s===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+s:n=3:f+=s;break;case 3:d(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&p--,f="";break;default:a("Unknown state");break}}return n===2&&a(`Unfinished custom RegExp for param "${u}"`),d(),m(),r}function t_(e,a,n){const o=Wh(e_(e.path),n),r=Ge(o,{record:e,parent:a,children:[],alias:[]});return a&&!r.record.aliasOf==!a.record.aliasOf&&a.children.push(r),r}function i_(e,a){const n=[],o=new Map;a=Ar({strict:!1,end:!0,sensitive:!1},a);function r(f){return o.get(f)}function c(f,d,h){const v=!h,_=l_(f);_.aliasOf=h&&h.record;const w=Ar(a,f),A=[_];if("alias"in f){const C=typeof f.alias=="string"?[f.alias]:f.alias;for(const x of C)A.push(Ge({},_,{components:h?h.record.components:_.components,path:x,aliasOf:h?h.record:_}))}let $,b;for(const C of A){const{path:x}=C;if(d&&x[0]!=="/"){const B=d.record.path,E=B[B.length-1]==="/"?"":"/";C.path=d.record.path+(x&&E+x)}if($=t_(C,d,w),h?h.alias.push($):(b=b||$,b!==$&&b.alias.push($),v&&f.name&&!Cr($)&&m(f.name)),"children"in _){const B=_.children;for(let E=0;E<B.length;E++)c(B[E],$,h&&h.children[E])}h=h||$,s($)}return b?()=>{m(b)}:ja}function m(f){if(xm(f)){const d=o.get(f);d&&(o.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(m),d.alias.forEach(m))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&o.delete(f.record.name),f.children.forEach(m),f.alias.forEach(m))}}function p(){return n}function s(f){let d=0;for(;d<n.length&&Xh(f,n[d])>=0;)d++;n.splice(d,0,f),f.record.name&&!Cr(f)&&o.set(f.record.name,f)}function u(f,d){let h,v={},_,w;if("name"in f&&f.name){if(h=o.get(f.name),!h)throw ha(1,{location:f});w=h.record.name,v=Ge(a_(d.params,h.keys.filter(b=>!b.optional).map(b=>b.name)),f.params),_=h.stringify(v)}else if("path"in f)_=f.path,h=n.find(b=>b.re.test(_)),h&&(v=h.parse(_),w=h.record.name);else{if(h=d.name?o.get(d.name):n.find(b=>b.re.test(d.path)),!h)throw ha(1,{location:f,currentLocation:d});w=h.record.name,v=Ge({},d.params,f.params),_=h.stringify(v)}const A=[];let $=h;for(;$;)A.unshift($.record),$=$.parent;return{name:w,path:_,params:v,matched:A,meta:o_(A)}}return e.forEach(f=>c(f)),{addRoute:c,resolve:u,removeRoute:m,getRoutes:p,getRecordMatcher:r}}function a_(e,a){const n={};for(const o of a)o in e&&(n[o]=e[o]);return n}function l_(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:n_(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function n_(e){const a={},n=e.props||!1;if("component"in e)a.default=n;else for(const o in e.components)a[o]=typeof n=="boolean"?n:n[o];return a}function Cr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function o_(e){return e.reduce((a,n)=>Ge(a,n.meta),{})}function Ar(e,a){const n={};for(const o in e)n[o]=o in a?a[o]:e[o];return n}const Bm=/#/g,s_=/&/g,r_=/\//g,u_=/=/g,c_=/\?/g,Tm=/\+/g,d_=/%5B/g,m_=/%5D/g,Lm=/%5E/g,p_=/%60/g,Em=/%7B/g,f_=/%7C/g,Dm=/%7D/g,g_=/%20/g;function vs(e){return encodeURI(""+e).replace(f_,"|").replace(d_,"[").replace(m_,"]")}function h_(e){return vs(e).replace(Em,"{").replace(Dm,"}").replace(Lm,"^")}function vo(e){return vs(e).replace(Tm,"%2B").replace(g_,"+").replace(Bm,"%23").replace(s_,"%26").replace(p_,"`").replace(Em,"{").replace(Dm,"}").replace(Lm,"^")}function __(e){return vo(e).replace(u_,"%3D")}function b_(e){return vs(e).replace(Bm,"%23").replace(c_,"%3F")}function v_(e){return e==null?"":b_(e).replace(r_,"%2F")}function Nl(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function y_(e){const a={};if(e===""||e==="?")return a;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<o.length;++r){const c=o[r].replace(Tm," "),m=c.indexOf("="),p=Nl(m<0?c:c.slice(0,m)),s=m<0?null:Nl(c.slice(m+1));if(p in a){let u=a[p];Array.isArray(u)||(u=a[p]=[u]),u.push(s)}else a[p]=s}return a}function kr(e){let a="";for(let n in e){const o=e[n];if(n=__(n),o==null){o!==void 0&&(a+=(a.length?"&":"")+n);continue}(Array.isArray(o)?o.map(c=>c&&vo(c)):[o&&vo(o)]).forEach(c=>{c!==void 0&&(a+=(a.length?"&":"")+n,c!=null&&(a+="="+c))})}return a}function S_(e){const a={};for(const n in e){const o=e[n];o!==void 0&&(a[n]=Array.isArray(o)?o.map(r=>r==null?null:""+r):o==null?o:""+o)}return a}function Ba(){let e=[];function a(o){return e.push(o),()=>{const r=e.indexOf(o);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:a,list:()=>e,reset:n}}function w_(e,a,n){const o=()=>{e[a].delete(n)};qi(o),cs(o),us(()=>{e[a].add(n)}),e[a].add(n)}function C_(e){const a=Fe(Cm,{}).value;a&&w_(a,"updateGuards",e)}function di(e,a,n,o,r){const c=o&&(o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise((m,p)=>{const s=d=>{d===!1?p(ha(4,{from:n,to:a})):d instanceof Error?p(d):Uh(d)?p(ha(2,{from:a,to:d})):(c&&o.enterCallbacks[r]===c&&typeof d=="function"&&c.push(d),m())},u=e.call(o&&o.instances[r],a,n,s);let f=Promise.resolve(u);e.length<3&&(f=f.then(s)),f.catch(d=>p(d))})}function Pn(e,a,n,o){const r=[];for(const c of e)for(const m in c.components){let p=c.components[m];if(!(a!=="beforeRouteEnter"&&!c.instances[m]))if(A_(p)){const u=(p.__vccOpts||p)[a];u&&r.push(di(u,n,o,c,m))}else{let s=p();r.push(()=>s.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${m}" at "${c.path}"`));const f=Bh(u)?u.default:u;c.components[m]=f;const h=(f.__vccOpts||f)[a];return h&&di(h,n,o,c,m)()}))}}return r}function A_(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function xr(e){const a=Fe(bn),n=Fe(bs),o=V(()=>a.resolve(g(e.to))),r=V(()=>{const{matched:s}=o.value,{length:u}=s,f=s[u-1],d=n.matched;if(!f||!d.length)return-1;const h=d.findIndex(ga.bind(null,f));if(h>-1)return h;const v=$r(s[u-2]);return u>1&&$r(f)===v&&d[d.length-1].path!==v?d.findIndex(ga.bind(null,s[u-2])):h}),c=V(()=>r.value>-1&&$_(n.params,o.value.params)),m=V(()=>r.value>-1&&r.value===n.matched.length-1&&Am(n.params,o.value.params));function p(s={}){return x_(s)?a[g(e.replace)?"replace":"push"](g(e.to)).catch(ja):Promise.resolve()}return{route:o,href:V(()=>o.value.href),isActive:c,isExactActive:m,navigate:p}}const k_=D({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xr,setup(e,{slots:a}){const n=Zt(xr(e)),{options:o}=Fe(bn),r=V(()=>({[Br(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Br(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const c=a.default&&a.default(n);return e.custom?c:J("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},c)}}}),ys=k_;function x_(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const a=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return e.preventDefault&&e.preventDefault(),!0}}function $_(e,a){for(const n in a){const o=a[n],r=e[n];if(typeof o=="string"){if(o!==r)return!1}else if(!Array.isArray(r)||r.length!==o.length||o.some((c,m)=>c!==r[m]))return!1}return!0}function $r(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Br=(e,a,n)=>e??a??n,B_=D({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:a,slots:n}){const o=Fe(_o),r=V(()=>e.route||o.value),c=Fe(hr,0),m=V(()=>r.value.matched[c]);rt(hr,c+1),rt(Cm,m),rt(_o,r);const p=q();return mt(()=>[p.value,m.value,e.name],([s,u,f],[d,h,v])=>{u&&(u.instances[f]=s,h&&h!==u&&s&&s===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),s&&u&&(!h||!ga(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(_=>_(s))},{flush:"post"}),()=>{const s=r.value,u=m.value,f=u&&u.components[e.name],d=e.name;if(!f)return Tr(n.default,{Component:f,route:s});const h=u.props[e.name],v=h?h===!0?s.params:typeof h=="function"?h(s):h:null,w=J(f,Ge({},v,a,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(u.instances[d]=null)},ref:p}));return Tr(n.default,{Component:w,route:s})||w}}});function Tr(e,a){if(!e)return null;const n=e(a);return n.length===1?n[0]:n}const T_=B_;function L_(e){const a=i_(e.routes,e),n=e.parseQuery||y_,o=e.stringifyQuery||kr,r=e.history,c=Ba(),m=Ba(),p=Ba(),s=Zc(ni);let u=ni;Ki&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Rn.bind(null,Y=>""+Y),d=Rn.bind(null,v_),h=Rn.bind(null,Nl);function v(Y,re){let se,he;return xm(Y)?(se=a.getRecordMatcher(Y),he=re):he=Y,a.addRoute(he,se)}function _(Y){const re=a.getRecordMatcher(Y);re&&a.removeRoute(re)}function w(){return a.getRoutes().map(Y=>Y.record)}function A(Y){return!!a.getRecordMatcher(Y)}function $(Y,re){if(re=Ge({},re||s.value),typeof Y=="string"){const $e=zn(n,Y,re.path),T=a.resolve({path:$e.path},re),I=r.createHref($e.fullPath);return Ge($e,T,{params:h(T.params),hash:Nl($e.hash),redirectedFrom:void 0,href:I})}let se;if("path"in Y)se=Ge({},Y,{path:zn(n,Y.path,re.path).path});else{const $e=Ge({},Y.params);for(const T in $e)$e[T]==null&&delete $e[T];se=Ge({},Y,{params:d(Y.params)}),re.params=d(re.params)}const he=a.resolve(se,re),Me=Y.hash||"";he.params=f(h(he.params));const Ve=Eh(o,Ge({},Y,{hash:h_(Me),path:he.path})),xe=r.createHref(Ve);return Ge({fullPath:Ve,hash:Me,query:o===kr?S_(Y.query):Y.query||{}},he,{redirectedFrom:void 0,href:xe})}function b(Y){return typeof Y=="string"?zn(n,Y,s.value.path):Ge({},Y)}function C(Y,re){if(u!==Y)return ha(8,{from:re,to:Y})}function x(Y){return F(Y)}function B(Y){return x(Ge(b(Y),{replace:!0}))}function E(Y){const re=Y.matched[Y.matched.length-1];if(re&&re.redirect){const{redirect:se}=re;let he=typeof se=="function"?se(Y):se;return typeof he=="string"&&(he=he.includes("?")||he.includes("#")?he=b(he):{path:he},he.params={}),Ge({query:Y.query,hash:Y.hash,params:Y.params},he)}}function F(Y,re){const se=u=$(Y),he=s.value,Me=Y.state,Ve=Y.force,xe=Y.replace===!0,$e=E(se);if($e)return F(Ge(b($e),{state:Me,force:Ve,replace:xe}),re||se);const T=se;T.redirectedFrom=re;let I;return!Ve&&Dh(o,he,se)&&(I=ha(16,{to:T,from:he}),Je(he,he,!0,!1)),(I?Promise.resolve(I):z(T,he)).catch(O=>ki(O)?O:ce(O,T,he)).then(O=>{if(O){if(ki(O,2))return F(Ge(b(O.to),{state:Me,force:Ve,replace:xe}),re||T)}else O=K(T,he,!0,xe,Me);return j(T,he,O),O})}function M(Y,re){const se=C(Y,re);return se?Promise.reject(se):Promise.resolve()}function z(Y,re){let se;const[he,Me,Ve]=E_(Y,re);se=Pn(he.reverse(),"beforeRouteLeave",Y,re);for(const $e of he)$e.leaveGuards.forEach(T=>{se.push(di(T,Y,re))});const xe=M.bind(null,Y,re);return se.push(xe),Ji(se).then(()=>{se=[];for(const $e of c.list())se.push(di($e,Y,re));return se.push(xe),Ji(se)}).then(()=>{se=Pn(Me,"beforeRouteUpdate",Y,re);for(const $e of Me)$e.updateGuards.forEach(T=>{se.push(di(T,Y,re))});return se.push(xe),Ji(se)}).then(()=>{se=[];for(const $e of Y.matched)if($e.beforeEnter&&!re.matched.includes($e))if(Array.isArray($e.beforeEnter))for(const T of $e.beforeEnter)se.push(di(T,Y,re));else se.push(di($e.beforeEnter,Y,re));return se.push(xe),Ji(se)}).then(()=>(Y.matched.forEach($e=>$e.enterCallbacks={}),se=Pn(Ve,"beforeRouteEnter",Y,re),se.push(xe),Ji(se))).then(()=>{se=[];for(const $e of m.list())se.push(di($e,Y,re));return se.push(xe),Ji(se)}).catch($e=>ki($e,8)?$e:Promise.reject($e))}function j(Y,re,se){for(const he of p.list())he(Y,re,se)}function K(Y,re,se,he,Me){const Ve=C(Y,re);if(Ve)return Ve;const xe=re===ni,$e=Ki?history.state:{};se&&(he||xe?r.replace(Y.fullPath,Ge({scroll:xe&&$e&&$e.scroll},Me)):r.push(Y.fullPath,Me)),s.value=Y,Je(Y,re,se,xe),Te()}let U;function me(){U=r.listen((Y,re,se)=>{const he=$(Y),Me=E(he);if(Me){F(Ge(Me,{replace:!0}),he).catch(ja);return}u=he;const Ve=s.value;Ki&&Hh(vr(Ve.fullPath,se.delta),vn()),z(he,Ve).catch(xe=>ki(xe,12)?xe:ki(xe,2)?(F(xe.to,he).then($e=>{ki($e,20)&&!se.delta&&se.type===tl.pop&&r.go(-1,!1)}).catch(ja),Promise.reject()):(se.delta&&r.go(-se.delta,!1),ce(xe,he,Ve))).then(xe=>{xe=xe||K(he,Ve,!1),xe&&(se.delta?r.go(-se.delta,!1):se.type===tl.pop&&ki(xe,20)&&r.go(-1,!1)),j(he,Ve,xe)}).catch(ja)})}let Be=Ba(),G=Ba(),W;function ce(Y,re,se){Te(Y);const he=G.list();return he.length?he.forEach(Me=>Me(Y,re,se)):console.error(Y),Promise.reject(Y)}function ie(){return W&&s.value!==ni?Promise.resolve():new Promise((Y,re)=>{Be.add([Y,re])})}function Te(Y){W||(W=!0,me(),Be.list().forEach(([re,se])=>Y?se(Y):re()),Be.reset())}function Je(Y,re,se,he){const{scrollBehavior:Me}=e;if(!Ki||!Me)return Promise.resolve();const Ve=!se&&Nh(vr(Y.fullPath,0))||(he||!se)&&history.state&&history.state.scroll||null;return wa().then(()=>Me(Y,re,Ve)).then(xe=>xe&&Vh(xe)).catch(xe=>ce(xe,Y,re))}const lt=Y=>r.go(Y);let je;const qt=new Set;return{currentRoute:s,addRoute:v,removeRoute:_,hasRoute:A,getRoutes:w,resolve:$,options:e,push:x,replace:B,go:lt,back:()=>lt(-1),forward:()=>lt(1),beforeEach:c.add,beforeResolve:m.add,afterEach:p.add,onError:G.add,isReady:ie,install(Y){const re=this;Y.component("RouterLink",ys),Y.component("RouterView",T_),Y.config.globalProperties.$router=re,Object.defineProperty(Y.config.globalProperties,"$route",{enumerable:!0,get:()=>g(s)}),Ki&&!je&&s.value===ni&&(je=!0,x(r.location).catch(Me=>{}));const se={};for(const Me in ni)se[Me]=V(()=>s.value[Me]);Y.provide(bn,re),Y.provide(bs,Zt(se)),Y.provide(_o,s);const he=Y.unmount;qt.add(Y),Y.unmount=function(){qt.delete(Y),qt.size<1&&(u=ni,U&&U(),s.value=ni,je=!1,W=!1),he()}}}}function Ji(e){return e.reduce((a,n)=>a.then(()=>n()),Promise.resolve())}function E_(e,a){const n=[],o=[],r=[],c=Math.max(a.matched.length,e.matched.length);for(let m=0;m<c;m++){const p=a.matched[m];p&&(e.matched.find(u=>ga(u,p))?o.push(p):n.push(p));const s=e.matched[m];s&&(a.matched.find(u=>ga(u,s))||r.push(s))}return[n,o,r]}function Im(){return Fe(bn)}function Rm(){return Fe(bs)}const D_={__name:"Navbar",props:["onClick"],setup(e){const a=q(),n=Im();function o(r){return r.charAt(0).toUpperCase()+r.slice(1)}return os(()=>{const m=n.currentRoute.value.path.match(/\/([^/]+)$/);m&&(a.value=o(m[1]))}),(r,c)=>{const m=y("SuiIcon"),p=y("SuiMenuItem"),s=y("SuiMenu");return L(),R(s,{id:"navbar",fixed:"",icon:"",inverted:"",size:"big"},{default:i(()=>[t(p,{onClick:e.onClick},{default:i(()=>[t(m,{name:"hamburger"})]),_:1},8,["onClick"]),t(p,null,{default:i(()=>[l(ke(a.value),1)]),_:1})]),_:1})}}},I_=we(D_,[["__scopeId","data-v-338afb35"]]),R_=D({name:"Sidebar",setup(){const e=Rm();return{isActive:m=>e.path===m,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),z_=S("strong",null," Fomantic UI Vue ",-1),P_=S("b",null,"Getting Started",-1);function F_(e,a,n,o,r,c){const m=y("sui-menu-item"),p=y("sui-menu-header"),s=y("sui-menu-menu"),u=y("sui-menu");return L(),R(u,{fluid:"",inverted:"",vertical:""},{default:i(()=>[t(m,{as:"div"},{default:i(()=>[z_]),_:1}),t(m,{as:"router-link",to:"/"},{default:i(()=>[P_]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Elements"}),t(s,null,{default:i(()=>[(L(!0),ge(Ce,null,tt(e.elements,f=>(L(),R(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Collections"}),t(s,null,{default:i(()=>[(L(!0),ge(Ce,null,tt(e.collections,f=>(L(),R(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Views"}),t(s,null,{default:i(()=>[(L(!0),ge(Ce,null,tt(e.views,f=>(L(),R(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Modules"}),t(s,null,{default:i(()=>[(L(!0),ge(Ce,null,tt(e.modules,f=>(L(),R(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const M_=we(R_,[["render",F_]]),V_={class:"sidemenu"},H_={style:{flex:"1","overflow-y":"scroll"}},N_={__name:"Sidebar",setup(e){return(a,n)=>(L(),ge("div",V_,[S("div",H_,[t(M_)])]))}},O_=we(N_,[["__scopeId","data-v-379ef704"]]),j_=D({name:"Sidebar",setup(){const e=Rm();return{isActive:m=>e.path===m,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),G_=S("strong",null," Fomantic UI Vue ",-1),q_=S("b",null,"Getting Started",-1);function U_(e,a,n,o,r,c){const m=y("sui-menu-item"),p=y("sui-menu-header"),s=y("sui-menu-menu"),u=y("sui-sidebar");return L(),R(u,{dimmed:"",inverted:"",style:{width:"250px"}},{default:i(()=>[t(m,{as:"div"},{default:i(()=>[G_]),_:1}),t(m,{as:"router-link",to:"/"},{default:i(()=>[q_]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Elements"}),t(s,null,{default:i(()=>[(L(!0),ge(Ce,null,tt(e.elements,f=>(L(),R(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Collections"}),t(s,null,{default:i(()=>[(L(!0),ge(Ce,null,tt(e.collections,f=>(L(),R(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Views"}),t(s,null,{default:i(()=>[(L(!0),ge(Ce,null,tt(e.views,f=>(L(),R(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Modules"}),t(s,null,{default:i(()=>[(L(!0),ge(Ce,null,tt(e.modules,f=>(L(),R(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const Y_=we(j_,[["render",U_]]),J_={class:"pusher",style:{height:"100vh"}},W_={class:"article"},K_={__name:"Home",setup(e){const a=q(!1),n=()=>a.value=!a.value;return C_(()=>{a.value=!1}),(o,r)=>{const c=y("router-view"),m=y("SuiSegment");return L(),R(m,{class:"pushable",style:{border:"none"}},{default:i(()=>[t(Y_,{visible:a.value},null,8,["visible"]),S("div",J_,[t(O_),t(I_,{"on-click":n}),S("div",W_,[t(c)])])]),_:1})}}},X_=we(K_,[["__scopeId","data-v-0bfd4ee9"]]);var Lr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Q_(e){if(e.__esModule)return e;var a=e.default;if(typeof a=="function"){var n=function o(){return this instanceof o?Reflect.construct(a,arguments,this.constructor):a.apply(this,arguments)};n.prototype=a.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(o){var r=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(n,o,r.get?r:{enumerable:!0,get:function(){return e[o]}})}),n}const Z_=Q_(Ah);var Pm={exports:{}};(function(e){var a=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(o){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,c=0,m={},p={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function b(C){return C instanceof s?new s(C.type,b(C.content),C.alias):Array.isArray(C)?C.map(b):C.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++c}),b.__id},clone:function b(C,x){x=x||{};var B,E;switch(p.util.type(C)){case"Object":if(E=p.util.objId(C),x[E])return x[E];B={},x[E]=B;for(var F in C)C.hasOwnProperty(F)&&(B[F]=b(C[F],x));return B;case"Array":return E=p.util.objId(C),x[E]?x[E]:(B=[],x[E]=B,C.forEach(function(M,z){B[z]=b(M,x)}),B);default:return C}},getLanguage:function(b){for(;b;){var C=r.exec(b.className);if(C)return C[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,C){b.className=b.className.replace(RegExp(r,"gi"),""),b.classList.add("language-"+C)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(B){var b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(B.stack)||[])[1];if(b){var C=document.getElementsByTagName("script");for(var x in C)if(C[x].src==b)return C[x]}return null}},isActive:function(b,C,x){for(var B="no-"+C;b;){var E=b.classList;if(E.contains(C))return!0;if(E.contains(B))return!1;b=b.parentElement}return!!x}},languages:{plain:m,plaintext:m,text:m,txt:m,extend:function(b,C){var x=p.util.clone(p.languages[b]);for(var B in C)x[B]=C[B];return x},insertBefore:function(b,C,x,B){B=B||p.languages;var E=B[b],F={};for(var M in E)if(E.hasOwnProperty(M)){if(M==C)for(var z in x)x.hasOwnProperty(z)&&(F[z]=x[z]);x.hasOwnProperty(M)||(F[M]=E[M])}var j=B[b];return B[b]=F,p.languages.DFS(p.languages,function(K,U){U===j&&K!=b&&(this[K]=F)}),F},DFS:function b(C,x,B,E){E=E||{};var F=p.util.objId;for(var M in C)if(C.hasOwnProperty(M)){x.call(C,M,C[M],B||M);var z=C[M],j=p.util.type(z);j==="Object"&&!E[F(z)]?(E[F(z)]=!0,b(z,x,null,E)):j==="Array"&&!E[F(z)]&&(E[F(z)]=!0,b(z,x,M,E))}}},plugins:{},highlightAll:function(b,C){p.highlightAllUnder(document,b,C)},highlightAllUnder:function(b,C,x){var B={callback:x,container:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};p.hooks.run("before-highlightall",B),B.elements=Array.prototype.slice.apply(B.container.querySelectorAll(B.selector)),p.hooks.run("before-all-elements-highlight",B);for(var E=0,F;F=B.elements[E++];)p.highlightElement(F,C===!0,B.callback)},highlightElement:function(b,C,x){var B=p.util.getLanguage(b),E=p.languages[B];p.util.setLanguage(b,B);var F=b.parentElement;F&&F.nodeName.toLowerCase()==="pre"&&p.util.setLanguage(F,B);var M=b.textContent,z={element:b,language:B,grammar:E,code:M};function j(U){z.highlightedCode=U,p.hooks.run("before-insert",z),z.element.innerHTML=z.highlightedCode,p.hooks.run("after-highlight",z),p.hooks.run("complete",z),x&&x.call(z.element)}if(p.hooks.run("before-sanity-check",z),F=z.element.parentElement,F&&F.nodeName.toLowerCase()==="pre"&&!F.hasAttribute("tabindex")&&F.setAttribute("tabindex","0"),!z.code){p.hooks.run("complete",z),x&&x.call(z.element);return}if(p.hooks.run("before-highlight",z),!z.grammar){j(p.util.encode(z.code));return}if(C&&o.Worker){var K=new Worker(p.filename);K.onmessage=function(U){j(U.data)},K.postMessage(JSON.stringify({language:z.language,code:z.code,immediateClose:!0}))}else j(p.highlight(z.code,z.grammar,z.language))},highlight:function(b,C,x){var B={code:b,grammar:C,language:x};if(p.hooks.run("before-tokenize",B),!B.grammar)throw new Error('The language "'+B.language+'" has no grammar.');return B.tokens=p.tokenize(B.code,B.grammar),p.hooks.run("after-tokenize",B),s.stringify(p.util.encode(B.tokens),B.language)},tokenize:function(b,C){var x=C.rest;if(x){for(var B in x)C[B]=x[B];delete C.rest}var E=new d;return h(E,E.head,b),f(b,E,C,E.head,0),_(E)},hooks:{all:{},add:function(b,C){var x=p.hooks.all;x[b]=x[b]||[],x[b].push(C)},run:function(b,C){var x=p.hooks.all[b];if(!(!x||!x.length))for(var B=0,E;E=x[B++];)E(C)}},Token:s};o.Prism=p;function s(b,C,x,B){this.type=b,this.content=C,this.alias=x,this.length=(B||"").length|0}s.stringify=function b(C,x){if(typeof C=="string")return C;if(Array.isArray(C)){var B="";return C.forEach(function(j){B+=b(j,x)}),B}var E={type:C.type,content:b(C.content,x),tag:"span",classes:["token",C.type],attributes:{},language:x},F=C.alias;F&&(Array.isArray(F)?Array.prototype.push.apply(E.classes,F):E.classes.push(F)),p.hooks.run("wrap",E);var M="";for(var z in E.attributes)M+=" "+z+'="'+(E.attributes[z]||"").replace(/"/g,"&quot;")+'"';return"<"+E.tag+' class="'+E.classes.join(" ")+'"'+M+">"+E.content+"</"+E.tag+">"};function u(b,C,x,B){b.lastIndex=C;var E=b.exec(x);if(E&&B&&E[1]){var F=E[1].length;E.index+=F,E[0]=E[0].slice(F)}return E}function f(b,C,x,B,E,F){for(var M in x)if(!(!x.hasOwnProperty(M)||!x[M])){var z=x[M];z=Array.isArray(z)?z:[z];for(var j=0;j<z.length;++j){if(F&&F.cause==M+","+j)return;var K=z[j],U=K.inside,me=!!K.lookbehind,Be=!!K.greedy,G=K.alias;if(Be&&!K.pattern.global){var W=K.pattern.toString().match(/[imsuy]*$/)[0];K.pattern=RegExp(K.pattern.source,W+"g")}for(var ce=K.pattern||K,ie=B.next,Te=E;ie!==C.tail&&!(F&&Te>=F.reach);Te+=ie.value.length,ie=ie.next){var Je=ie.value;if(C.length>b.length)return;if(!(Je instanceof s)){var lt=1,je;if(Be){if(je=u(ce,Te,b,me),!je||je.index>=b.length)break;var re=je.index,qt=je.index+je[0].length,Tt=Te;for(Tt+=ie.value.length;re>=Tt;)ie=ie.next,Tt+=ie.value.length;if(Tt-=ie.value.length,Te=Tt,ie.value instanceof s)continue;for(var Y=ie;Y!==C.tail&&(Tt<qt||typeof Y.value=="string");Y=Y.next)lt++,Tt+=Y.value.length;lt--,Je=b.slice(Te,Tt),je.index-=Te}else if(je=u(ce,0,Je,me),!je)continue;var re=je.index,se=je[0],he=Je.slice(0,re),Me=Je.slice(re+se.length),Ve=Te+Je.length;F&&Ve>F.reach&&(F.reach=Ve);var xe=ie.prev;he&&(xe=h(C,xe,he),Te+=he.length),v(C,xe,lt);var $e=new s(M,U?p.tokenize(se,U):se,G,se);if(ie=h(C,xe,$e),Me&&h(C,ie,Me),lt>1){var T={cause:M+","+j,reach:Ve};f(b,C,x,ie.prev,Te,T),F&&T.reach>F.reach&&(F.reach=T.reach)}}}}}}function d(){var b={value:null,prev:null,next:null},C={value:null,prev:b,next:null};b.next=C,this.head=b,this.tail=C,this.length=0}function h(b,C,x){var B=C.next,E={value:x,prev:C,next:B};return C.next=E,B.prev=E,b.length++,E}function v(b,C,x){for(var B=C.next,E=0;E<x&&B!==b.tail;E++)B=B.next;C.next=B,B.prev=C,b.length-=E}function _(b){for(var C=[],x=b.head.next;x!==b.tail;)C.push(x.value),x=x.next;return C}if(!o.document)return o.addEventListener&&(p.disableWorkerMessageHandler||o.addEventListener("message",function(b){var C=JSON.parse(b.data),x=C.language,B=C.code,E=C.immediateClose;o.postMessage(p.highlight(B,p.languages[x],x)),E&&o.close()},!1)),p;var w=p.util.currentScript();w&&(p.filename=w.src,w.hasAttribute("data-manual")&&(p.manual=!0));function A(){p.manual||p.highlightAll()}if(!p.manual){var $=document.readyState;$==="loading"||$==="interactive"&&w&&w.defer?document.addEventListener("DOMContentLoaded",A):window.requestAnimationFrame?window.requestAnimationFrame(A):window.setTimeout(A,16)}return p}(a);e.exports&&(e.exports=n),typeof Lr<"u"&&(Lr.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(r,c){var m={};m["language-"+c]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[c]},m.cdata=/^<!\[CDATA\[|\]\]>$/i;var p={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:m}};p["language-"+c]={pattern:/[\s\S]+/,inside:n.languages[c]};var s={};s[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:p},n.languages.insertBefore("markup","cdata",s)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(o,r){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:n.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(o){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var c=o.languages.markup;c&&(c.tag.addInlined("style","css"),c.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading…",r=function(w,A){return"✖ Error "+w+" while fetching file: "+A},c="✖ Error: File does not exist or is empty",m={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},p="data-src-status",s="loading",u="loaded",f="failed",d="pre[data-src]:not(["+p+'="'+u+'"]):not(['+p+'="'+s+'"])';function h(w,A,$){var b=new XMLHttpRequest;b.open("GET",w,!0),b.onreadystatechange=function(){b.readyState==4&&(b.status<400&&b.responseText?A(b.responseText):b.status>=400?$(r(b.status,b.statusText)):$(c))},b.send(null)}function v(w){var A=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(w||"");if(A){var $=Number(A[1]),b=A[2],C=A[3];return b?C?[$,Number(C)]:[$,void 0]:[$,$]}}n.hooks.add("before-highlightall",function(w){w.selector+=", "+d}),n.hooks.add("before-sanity-check",function(w){var A=w.element;if(A.matches(d)){w.code="",A.setAttribute(p,s);var $=A.appendChild(document.createElement("CODE"));$.textContent=o;var b=A.getAttribute("data-src"),C=w.language;if(C==="none"){var x=(/\.(\w+)$/.exec(b)||[,"none"])[1];C=m[x]||x}n.util.setLanguage($,C),n.util.setLanguage(A,C);var B=n.plugins.autoloader;B&&B.loadLanguages(C),h(b,function(E){A.setAttribute(p,u);var F=v(A.getAttribute("data-range"));if(F){var M=E.split(/\r\n?|\n/g),z=F[0],j=F[1]==null?M.length:F[1];z<0&&(z+=M.length),z=Math.max(0,Math.min(z-1,M.length)),j<0&&(j+=M.length),j=Math.max(0,Math.min(j,M.length)),E=M.slice(z,j).join(`
`),A.hasAttribute("data-start")||A.setAttribute("data-start",String(z+1))}$.textContent=E,n.highlightElement($)},function(E){A.setAttribute(p,f),$.textContent=E})}}),n.plugins.fileHighlight={highlight:function(A){for(var $=(A||document).querySelectorAll(d),b=0,C;C=$[b++];)n.highlightElement(C)}};var _=!1;n.fileHighlight=function(){_||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),_=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Pm);var Fm=Pm.exports;const eb=zm(Fm);function tb(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var wl=Z_,Fn=tb(Fm),ib=wl.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function(a,n){var o=n.slots,r=n.attrs,c=o&&o.default&&o.default()||[],m=a.code||c&&c.length?c[0].children:"",p=a.inline,s=a.language,u=Fn.languages[s],f="language-".concat(s);return function(){return p?wl.h("code",{class:[f],innerHTML:Fn.highlight(m,u)}):wl.h("pre",Object.assign({},r,{class:[r.class,f]}),[wl.h("code",Object.assign({},r,{class:[r.class,f],innerHTML:Fn.highlight(m,u)}))])}}}),ab=ib;const Mm=zm(ab),lb=D({name:"DocPageHeader",props:{title:String,sub:String}}),nb={class:"intro",style:{padding:"2rem"}};function ob(e,a,n,o,r,c){const m=y("sui-header-subheader"),p=y("sui-header"),s=y("sui-divider"),u=y("sui-icon"),f=y("sui-menu-item"),d=y("sui-menu"),h=y("sui-container"),v=y("sui-segment");return L(),R(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",nb,[t(p,{as:"h1"},{default:i(()=>[l(ke(e.title)+" ",1),t(m,null,{default:i(()=>[l(ke(e.sub),1)]),_:1})]),_:1}),t(s,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1})}const Ye=we(lb,[["render",ob]]),sb=D({name:"GettingStarted",components:{Prism:Mm,DocPageHeader:Ye}}),yn=e=>(es("data-v-2f4c2002"),e=e(),ts(),e),rb=yn(()=>S("p",null," Fomantic-UI Vue provides UI components based on Fomantic-UI. ",-1)),ub=yn(()=>S("p",null," You can import all components as Vue plugin. ",-1)),cb=yn(()=>S("br",null,null,-1)),db=yn(()=>S("p",null," Or pick a component indivisually, add it to your components option. ",-1));function mb(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("prism"),u=y("sui-container");return L(),ge("div",null,[t(m,{title:"Getting Started",sub:"Getting up and running with Fomantic-UI Vue"}),t(u,{class:"main"},{default:i(()=>[t(p,{as:"h2"},{default:i(()=>[l("Install")]),_:1}),rb,t(p,{as:"h3"},{default:i(()=>[l("via Package Manager")]),_:1}),t(s,{language:"bash"},{default:i(()=>[l(ke(`$ npm install vue-fomantic-ui
$ npm install fomantic-ui-css
# or
$ yarn add vue-fomantic-ui
$ yarn add fomantic-ui-css`))]),_:1}),t(p,{as:"h2"},{default:i(()=>[l("Usage")]),_:1}),ub,t(s,{language:"js"},{default:i(()=>[l(ke(`import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

const app = createApp(App)
app.use(FomanticUI)`),1)]),_:1}),cb,db,t(s,{language:"js"},{default:i(()=>[l(ke(`import { SuiButton } from 'vue-fomantic-ui'

export default {
  components: { SuiButton },
  // ...
}`),1)]),_:1})]),_:1})])}const pb=we(sb,[["render",mb],["__scopeId","data-v-2f4c2002"]]),fb={__name:"DocSections",props:["docs"],setup(e){const a=e,n=V(()=>[...new Set(a.docs.map(o=>o.category))]);return(o,r)=>{const c=y("SuiHeader");return L(!0),ge(Ce,null,tt(n.value,(m,p)=>(L(),ge(Ce,{key:m},[t(c,{as:"h2",dividing:"",style:Sa({marginTop:p!==0?"5rem":"0",paddingTop:"2rem"})},{default:i(()=>[l(ke(m),1)]),_:2},1032,["style"]),(L(!0),ge(Ce,null,tt(e.docs.filter(s=>s.category===m),(s,u)=>(L(),R(ud(s.component),{key:s.label+"_"+u,id:s.id,style:{paddingTop:"3rem"}},null,8,["id"]))),128))],64))),128)}}},gb=e=>(es("data-v-e2ae2e49"),e=e(),ts(),e),hb={class:"item"},_b=gb(()=>S("i",{class:"dropdown icon"},null,-1)),bb={class:"content menu active"},vb={__name:"DocTableLink",props:["header","items"],setup(e){const{id:a}=$d(),n=m=>{m.preventDefault();const p=document.getElementById(a);p.open?r(p):(p.open=!0,o(p))},o=m=>{m.querySelector(".title").classList.add("active");const s=m.querySelector(".content"),u=s.offsetHeight;s.style.maxHeight=0,requestAnimationFrame(()=>{s.style.maxHeight=`${u}px`});const f=new AbortController;s.addEventListener("transitionend",()=>{s.removeAttribute("style"),f.abort()},{signal:f.signal})},r=m=>{const p=m.querySelector(".title"),s=m.querySelector(".content"),u=s.offsetHeight;s.style.maxHeight=`${u}px`,requestAnimationFrame(()=>{s.style.maxHeight=0,p.classList.remove("active")});const f=new AbortController;s.addEventListener("transitionend",()=>{s.removeAttribute("style"),m.open=!1,f.abort()},{signal:f.signal})},c=(m,p)=>{m.preventDefault(),document.getElementById(p.replace("_link","")).scrollIntoView({behavior:"smooth",block:"start"})};return(m,p)=>(L(),ge("details",hb,[S("summary",{class:"title",onClick:n},[_b,S("b",null,ke(e.header),1)]),S("div",bb,[(L(!0),ge(Ce,null,tt(e.items,s=>(L(),R(g(ys),{to:`#${s.id}`,class:"item",onClick:u=>c(u,s.id)},{default:i(()=>[l(ke(s.label),1)]),_:2},1032,["to","onClick"]))),256))])]))}},yb=we(vb,[["__scopeId","data-v-e2ae2e49"]]),Sb={class:"sticky"},wb={class:"ui vertical following fluid accordion text large menu"},Cb={__name:"DocTableContents",props:["title","links"],setup(e){const a=e,n=[...new Set(a.links.map(o=>o.category))];return(o,r)=>{const c=y("SuiHeader"),m=y("SuiRail");return L(),R(m,{id:"table-contents",position:"right",dividing:""},{default:i(()=>[S("div",Sb,[t(c,{as:"h3"},{default:i(()=>[l(ke(e.title),1)]),_:1}),S("div",wb,[(L(),ge(Ce,null,tt(n,p=>t(yb,{id:`${p}_link`,header:p,items:e.links.filter(s=>s.category===p)},null,8,["id","header","items"])),64))])])]),_:1})}}},Ab=we(Cb,[["__scopeId","data-v-bd90305d"]]),kb={class:"intro"},xb={__name:"DocComponent",props:["title","description","componentDocs"],setup(e){return(a,n)=>{const o=y("SuiHeaderSubheader"),r=y("SuiHeader"),c=y("SuiDivider"),m=y("SuiIcon"),p=y("SuiMenuItem"),s=y("SuiMenu"),u=y("SuiContainer"),f=y("SuiSegment");return L(),ge("div",null,[t(f,{id:"masthead",vertical:"",style:{"border-bottom":"1px solid #DDDDDD"}},{default:i(()=>[t(u,{class:"main"},{default:i(()=>[S("div",kb,[t(r,{as:"h1"},{default:i(()=>[l(ke(e.title)+" ",1),t(o,null,{default:i(()=>[l(ke(e.description),1)]),_:1})]),_:1}),t(c,{hidden:""}),t(s,{floated:"right"},{default:i(()=>[t(p,{as:"a",icon:""},{default:i(()=>[t(m,{name:"edit"})]),_:1}),t(p,{as:"a",icon:""},{default:i(()=>[t(m,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(u,{class:"main"},{default:i(()=>[t(f,{basic:"",fitted:""},{default:i(()=>[t(fb,{docs:e.componentDocs},null,8,["docs"]),t(Ab,{title:e.title,links:e.componentDocs},null,8,["title","links"])]),_:1})]),_:1})])}}},Gt=we(xb,[["__scopeId","data-v-56cc7477"]]);function Vm(e){var a,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(n=Vm(e[a]))&&(o&&(o+=" "),o+=n);else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function ee(){for(var e,a,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(a=Vm(e))&&(o&&(o+=" "),o+=a);return o}const k=(e,a)=>e?a:"",ze=(e,a)=>typeof e=="string"?`${e} ${a}`:"",Re=(e,a)=>e===!0?a:e==="below"?`${a} ${e}`:typeof e=="string"?`${e} ${a}`:"",Aa=e=>e==="justified"?"justified":ze(e,"aligned"),ti=(e,a)=>typeof e=="number"&&a?`${yo(e)} ${a}`:typeof e=="number"&&!a?yo(e):typeof e=="string"&&e==="equal"?`${e} width`:"",Ta=(e,a)=>e?`${yo(e)} wide ${a}`:"",yo=e=>["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"][e-1],Q=D({name:"SuiIcon",props:{as:String,bordered:Boolean,circular:Boolean,color:String,corner:[Boolean,String],disabled:Boolean,fitted:Boolean,flipped:String,inverted:Boolean,link:Boolean,loading:Boolean,name:String,rotated:String,size:String},setup(e){return{computedClass:V(()=>ee(e.color,e.name,e.size,k(e.bordered,"bordered"),k(e.circular,"circular"),k(e.disabled,"disabled"),k(e.fitted,"fitted"),k(e.inverted,"inverted"),k(e.link,"link"),k(e.loading,"loading"),ze(e.flipped,"flipped"),ze(e.rotated,"rotated"),Re(e.corner,"corner"),"icon"))}},render(){let e=this.$props.as||"i";return J(e,{"aria-hidden":!0,class:this.computedClass})}}),pi=D({name:"SuiIconGroup",props:{as:String,size:String},setup(e){return{computedClass:V(()=>ee(e.size,"icons"))}},render(){var e,a;let n=this.$props.as||"i";return J(n,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),$b={install(e){e.component(Q.name,Q),e.component(pi.name,pi)}},Bb=()=>({icon:[Boolean,String]}),Tb=e=>({iconClasses:V(()=>typeof e.icon=="boolean"&&e.icon||e.labeled&&e.icon?"icon":ee({icon:e.icon&&!e.content}))}),Lb=["right","left"],Eb=()=>({labeled:[Boolean,String]}),Db=e=>({labeledClasses:V(()=>typeof e.labeled=="boolean"&&e.labeled?"labeled":Lb.includes(e.labeled)?`${e.labeled} labeled`:"")}),Ib=["double","elastic"],Rb=()=>({loading:{type:[Boolean,String],validator:e=>Ib.includes(e)||typeof e=="boolean"}}),zb=e=>({loadingClasses:V(()=>ee(e.loading,{loading:e.loading}))}),P=D({name:"SuiButton",props:{active:Boolean,animated:[Boolean,String],as:{type:String,default:"button"},attached:String,basic:Boolean,circular:Boolean,color:String,compact:Boolean,content:[String,Array],disabled:Boolean,facebook:Boolean,floated:String,fluid:Boolean,google:Boolean,linkedin:Boolean,instagram:Boolean,inverted:Boolean,negative:Boolean,positive:Boolean,primary:Boolean,secondary:Boolean,size:String,telegram:Boolean,tertiary:Boolean,toggle:Boolean,twitter:Boolean,vk:Boolean,whatsapp:Boolean,youtube:Boolean,...Bb(),...Eb(),...Rb()},setup(e){const{iconClasses:a}=Tb(e),{labeledClasses:n}=Db(e),{loadingClasses:o}=zb(e);return{classes:V(()=>ee("ui",e.color,e.size,k(e.active,"active"),k(e.basic,"basic"),k(e.circular,"circular"),k(e.compact,"compact"),k(e.disabled,"disabled"),k(e.facebook,"facebook"),k(e.fluid,"fluid"),k(e.google,"google"),k(e.linkedin,"linkedin"),k(e.instagram,"instagram"),k(e.inverted,"inverted"),k(e.negative,"negative"),k(e.positive,"positive"),k(e.primary,"primary"),k(e.secondary,"secondary"),k(e.telegram,"telegram"),k(e.tertiary,"tertiary"),k(e.toggle,"toggle"),k(e.twitter,"twitter"),k(e.vk,"vk"),k(e.whatsapp,"whatsapp"),k(e.youtube,"youtube"),ze(e.attached,"attached"),ze(e.floated,"floated"),Re(e.animated,"animated"),a.value,n.value,o.value,"button"))}},render(){let e=this.as||"div";return t(e,{class:this.classes,role:"button"},{default:()=>{var a,n;return[typeof this.icon=="string"&&t(Q,{name:this.icon},null),this.content||((n=(a=this.$slots).default)==null?void 0:n.call(a))]}})}}),mi=D({name:"SuiButtonContent",props:{hidden:Boolean,visible:Boolean},setup(e){return{computedClass:V(()=>ee(k(e.hidden,"hidden"),k(e.visible,"visible"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),ct=D({name:"SuiButtonGroup",props:{attached:String,basic:Boolean,color:String,icon:Boolean,labeled:Boolean,size:String,vertical:Boolean,widths:Number},setup(e){return{computedClass:V(()=>ee("ui",e.color,e.size,k(e.basic,"basic"),k(e.icon,"icon"),k(e.labeled,"labeled"),k(e.vertical,"vertical"),ze(e.attached,"attached"),ti(e.widths,""),"buttons"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Pb={install(e){e.component(P.name,P),e.component(mi.name,mi),e.component(ct.name,ct)}},hi=D({name:"SuiContainer",props:{fluid:Boolean,text:Boolean,textAlign:String},setup(e){return{computedClass:V(()=>ee("ui",k(e.fluid,"fluid"),k(e.text,"text"),Aa(e.textAlign),"container"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Fb={install(e){e.component(hi.name,hi)}},Ke=D({name:"SuiDivider",props:{clearing:Boolean,fitted:Boolean,hidden:Boolean,horizontal:Boolean,inverted:Boolean,section:Boolean,textAlign:String,vertical:Boolean},setup(e){return{computedClass:V(()=>ee("ui",k(e.clearing,"clearing"),k(e.fitted,"fitted"),k(e.hidden,"hidden"),k(e.horizontal,"horizontal"),k(e.inverted,"inverted"),k(e.section,"section"),k(e.vertical,"vertical"),ze(e.textAlign,"aligned"),"divider"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Mb={install(e){e.component(Ke.name,Ke)}},yt=D({name:"SuiEmoji",props:{disabled:Boolean,link:Boolean,loading:Boolean,name:String,size:String},setup(e){return{computedClass:V(()=>ee(e.size,k(e.disabled,"disabled"),k(e.link,"link"),k(e.loading,"loading")))}},render(){return this.computedClass?J("em",{class:this.computedClass,"data-emoji":this.$props.name}):J("em",{"data-emoji":this.$props.name})}}),Vb={install(e){e.component(yt.name,yt)}},Pt=D({name:"SuiFlag",props:{name:String},setup(e){return{computedClass:V(()=>ee(e.name,"flag"))}},render(){return J("i",{class:this.computedClass})}}),Hb={install(e){e.component(Pt.name,Pt)}},_a=D({name:"SuiHeaderSubheader",props:{as:String},setup(e){return{elementType:e.as||"div"}},render(){var e,a;return J(this.elementType,{class:"sub header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),fe=D({name:"SuiHeader",components:{HeaderSubheader:_a},props:{as:String,attached:[Boolean,String],block:Boolean,color:String,content:String,disabled:Boolean,dividing:Boolean,floated:String,icon:Boolean,image:Boolean,inverted:Boolean,size:String,sub:Boolean,subheader:String,textAlign:String},setup(e){const a=e.as||"div",n=V(()=>ee("ui",e.color,e.size,k(e.block,"block"),k(e.disabled,"disabled"),k(e.dividing,"dividing"),k(e.icon,"icon"),k(e.image,"image"),k(e.inverted,"inverted"),k(e.sub,"sub"),ze(e.floated,"floated"),Re(e.attached,"attached"),Aa(e.textAlign),"header"));return{elementType:a,computedClass:n}},render(){var e,a;let n=[];return this.content&&n.push(this.content),this.subheader&&n.push(J(_a,{},this.subheader)),n.length>0?J(this.elementType,{class:this.computedClass},n):J(this.elementType,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ol=D({name:"SuiHeaderContent",render(){var e,a;return J("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Nb={install(e){e.component(fe.name,fe),e.component(Ol.name,Ol),e.component(_a.name,_a)}},Hm=["top","middle","bottom"],Ob={verticalAlign:{type:String,validator:e=>Hm.includes(e)}};function jb(e){return{verticalAlignClass:V(()=>e.verticalAlign&&Hm.includes(e.verticalAlign)?`${e.verticalAlign} aligned`:null)}}const Gb=["left","right"],qb={floated:{type:String,validator:e=>Gb.includes(e)}};function Ub(e){return{floatedClass:V(()=>e.floated&&(e.floated==="left"||e.floated==="right")?`${e.floated} floated`:null)}}const H=D({name:"SuiLabel",props:{as:String,attached:String,basic:Boolean,circular:Boolean,color:String,corner:String,empty:Boolean,floating:Boolean,horizontal:Boolean,icon:String,image:Boolean,inverted:Boolean,pointing:[Boolean,String],prompt:Boolean,ribbon:[Boolean,String],size:String,tag:Boolean},setup(e,{slots:a}){const n=V(()=>ee("ui",e.size,e.color,k(e.basic,"basic"),k(e.circular,"circular"),k(e.empty,"empty"),k(e.floating,"floating"),k(e.horizontal,"horizontal"),k(e.image,"image"),k(e.inverted,"inverted"),k(e.prompt,"prompt"),k(e.tag,"tag"),ze(e.attached,"attached"),ze(e.corner,"corner"),Re(e.pointing,"pointing"),Re(e.ribbon,"ribbon"),"label"));let o=e.as||"div";return e.icon?()=>J(o,{class:n.value},J(Q,{name:e.icon})):()=>{var r;return J(o,{class:n.value},(r=a.default)==null?void 0:r.call(a))}}}),Vi=D({name:"SuiLabelDetail",render(){var e,a;return t("div",{class:"detail"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Hi=D({name:"SuiLabelGroup",props:{basic:Boolean,circular:Boolean,color:String,size:String,tag:Boolean},setup(e,{slots:a}){const n=V(()=>ee("ui",e.color,e.size,k(e.basic,"basic"),k(e.circular,"circular"),k(e.tag,"tag"),"labels"));return()=>{var o;return J("div",{class:n.value},(o=a.default)==null?void 0:o.call(a))}}}),Yb={install(e){e.component(H.name,H),e.component(Vi.name,Vi),e.component(Hi.name,Hi)}},Ue=D({name:"SuiImage",props:{as:String,avatar:Boolean,bordered:Boolean,centered:Boolean,circular:Boolean,disabled:Boolean,fluid:Boolean,hidden:Boolean,href:String,inline:Boolean,label:Object,target:String,wrapped:Boolean,rounded:Boolean,size:String,spaced:[Boolean,String],src:String,...Ob,...qb},setup(e,{slots:a}){const{verticalAlignClass:n}=jb(e),{floatedClass:o}=Ub(e),r=V(()=>ee("ui",e.size,n.value,o.value,k(e.avatar,"avatar"),k(e.bordered,"bordered"),k(e.centered,"centered"),k(e.circular,"circular"),k(e.disabled,"disabled"),k(e.fluid,"fluid"),k(e.hidden,"hidden"),k(e.inline,"inline"),k(e.rounded,"rounded"),Re(e.spaced,"spaced"),"image"));if(e.as==="a"||e.as==="router-link"){let c=e.as;return e.as==="router-link"&&(c=y(e.as)),()=>{var m;return J(c,{class:r.value,href:e.href,target:e.target&&e.target},J("img",{src:e.src},(m=a.default)==null?void 0:m.call(a)))}}return e.wrapped?()=>{var c;return J("div",{class:r.value},J("img",{src:e.src},(c=a.default)==null?void 0:c.call(a)))}:e.label?()=>J("div",{class:r.value},[J("img",{src:e.src}),J(H,{...e.label})]):()=>t("img",{class:r.value,src:e.src},null)}}),Er=D({name:"SuiImageGroup",props:{size:String},setup(e,{slots:a}){const n=V(()=>ee("ui",e.size,"images"));return()=>{var o;return J("div",{class:n.value},(o=a.default)==null?void 0:o.call(a))}}}),Jb={install(e){e.component(Ue.name,Ue),e.component(Er.name,Er)}},et=D({name:"SuiInput",emits:["update:modelValue"],props:{action:String,disabled:Boolean,error:Boolean,fluid:Boolean,focus:Boolean,icon:String,iconPosition:String,inverted:Boolean,label:String,labeled:Boolean,loading:Boolean,modelValue:String,placeholder:String,size:String,transparent:Boolean,type:String},setup(e,{emit:a}){const n=V(()=>typeof e.icon=="string"||e.loading),o=V(()=>!!e.label||e.labeled),r=V(()=>ee("ui",e.size,e.action&&"action",k(e.disabled,"disabled"),k(e.error,"error"),k(e.fluid,"fluid"),k(e.focus,"focus"),e.iconPosition,k(n.value,"icon"),k(e.inverted,"inverted"),k(e.loading,"loading"),k(e.transparent,"transparent"),k(o.value,"labeled"),"input")),c=m=>a("update:modelValue",m.target.value);return()=>t("div",{class:r.value},[e.label&&t(H,null,{default:()=>[e.label]}),t("input",{type:e.type||"text",placeholder:e.placeholder,value:e.modelValue,onInput:m=>c(m)},null),n.value&&t(Q,{name:e.icon||"spinner"},null),e.action&&t(P,null,{default:()=>[e.action]})])}}),Wb={install(e){e.component(et.name,et)}},So=D({name:"SuiList",props:{animated:Boolean,as:String,bulleted:Boolean,celled:Boolean,divided:Boolean,floated:String,horizontal:Boolean,inverted:Boolean,ordered:Boolean,relaxed:Boolean,link:Boolean,selection:Boolean,verticalAlign:String},setup(e,{slots:a}){const n=V(()=>ee("ui",k(e.animated,"animated"),k(e.bulleted,"bulleted"),k(e.celled,"celled"),k(e.divided,"divided"),k(e.horizontal,"horizontal"),k(e.inverted,"inverted"),k(e.link,"link"),k(e.ordered,"ordered"),k(e.relaxed,"relaxed"),k(e.selection,"selection"),ze(e.verticalAlign,"aligned"),ze(e.floated,"floated"),"list"));let o=e.as||"div";return()=>{var r;return J(o,{class:n.value},(r=a.default)==null?void 0:r.call(a))}}}),Xi=D({name:"SuiListItem",props:{active:Boolean,as:String,disabled:Boolean},setup(e,{slots:a}){let n=e.as||"div";const o=V(()=>ee(k(e.active,"active"),k(e.disabled,"disabled"),"item"));return()=>{var r;return J(n,{class:o.value},(r=a.default)==null?void 0:r.call(a))}}}),Dr=D({name:"SuiListIcon",components:{Icon:Q},setup(e,{slots:a}){return()=>{var n;return J(y(Q.name),{...e},(n=a.default)==null?void 0:n.call(a))}}}),Ir=D({name:"SuiListContent",props:{verticalAlign:String},setup(e){return{computedClass:V(()=>ee(ze(e.verticalAlign,"aligned"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Rr=D({name:"SuiListHeader",props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:a}){return()=>{var n;return J(e.as,{class:"header"},(n=a.default)==null?void 0:n.call(a))}}}),zr=D({name:"SuiListDescription",props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:a}){return()=>{var n;return J(e.as,{class:"description"},(n=a.default)==null?void 0:n.call(a))}}}),Pr=D({name:"SuiListList",render(){var e,a;return t("div",{class:"list"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Kb={install(e){e.component(So.name,So),e.component(Xi.name,Xi),e.component(Dr.name,Dr),e.component(Ir.name,Ir),e.component(Rr.name,Rr),e.component(zr.name,zr),e.component(Pr.name,Pr)}},Fr=D({name:"SuiLoader",props:{active:Boolean,color:String,disabled:Boolean,fast:Boolean,indeterminate:Boolean,inline:[Boolean,String],inverted:Boolean,size:String,slow:Boolean,text:Boolean},setup(e,{slots:a}){return{computedClass:V(()=>{var n;return ee("ui",e.color,e.size,k(e.active,"active"),k(e.disabled,"disabled"),k(e.fast,"fast"),k(e.indeterminate,"indeterminate"),k(e.inverted,"inverted"),k(e.slow,"slow"),k(e.text||!!((n=a.default)!=null&&n.call(a)),"text"),Re(e.inline,"inline"),"loader")})}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Xb={install(e){e.component(Fr.name,Fr)}},Mr=D({name:"SuiRail",props:{attached:Boolean,close:[Boolean,String],dividing:Boolean,internal:Boolean,position:String,size:String},setup(e){return{computedClass:V(()=>ee("ui",e.position,e.size,k(e.attached,"attached"),k(e.dividing,"dividing"),k(e.internal,"internal"),Re(e.close,"close"),"rail"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Qb={install(e){e.component(Mr.name,Mr)}},Vr=D({name:"SuiReveal",props:{active:Boolean,animated:String,disabled:Boolean,instant:Boolean},setup(e){return{computedClass:V(()=>ee("ui",e.animated,k(e.active,"active"),k(e.disabled,"disabled"),k(e.instant,"instant"),"reveal"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Hr=D({name:"SuiRevealContent",props:{visible:Boolean,hidden:Boolean},setup(e){return{computedClass:V(()=>ee("ui",k(e.visible,"visible"),k(e.hidden,"hidden"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Zb={install(e){e.component(Vr.name,Vr),e.component(Hr.name,Hr)}},Xe=D({name:"SuiSegment",props:{attached:[Boolean,String],basic:Boolean,circular:Boolean,clearing:Boolean,color:String,compact:Boolean,disabled:Boolean,fitted:[Boolean,String],floated:String,inverted:Boolean,loading:Boolean,padded:[Boolean,String],piled:Boolean,placeholder:Boolean,raised:Boolean,secondary:Boolean,size:String,stacked:Boolean,tertiary:Boolean,textAlign:String,vertical:Boolean},setup(e){return{computedClass:V(()=>ee("ui",e.color,e.size,k(e.basic,"basic"),k(e.circular,"circular"),k(e.clearing,"clearing"),k(e.compact,"compact"),k(e.disabled,"disabled"),k(e.inverted,"inverted"),k(e.loading,"loading"),k(e.piled,"piled"),k(e.placeholder,"placeholder"),k(e.raised,"raised"),k(e.secondary,"secondary"),k(e.stacked,"stacked"),k(e.tertiary,"tertiary"),k(e.vertical,"vertical"),ze(e.floated,"floated"),ze(e.textAlign,"aligned"),Re(e.attached,"attached"),Re(e.fitted,"fitted"),Re(e.padded,"padded"),"segment"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Nr=D({name:"SuiSegmentGroup",props:{compact:Boolean,horizontal:Boolean,piled:Boolean,raised:Boolean,size:String,stacked:Boolean},setup(e){return{computedClass:V(()=>ee("ui",e.size,k(e.compact,"compact"),k(e.horizontal,"horizontal"),k(e.piled,"piled"),k(e.raised,"raised"),k(e.stacked,"stacked"),"segments"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Or=D({name:"SuiSegmentInline",render(){var e,a;return t("div",{class:"inline"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),ev={install(e){e.component(Xe.name,Xe),e.component(Nr.name,Nr),e.component(Or.name,Or)}},jr=D({name:"SuiStep",props:{active:Boolean,completed:Boolean,disabled:Boolean,fluid:Boolean,href:String,link:Boolean,vertical:Boolean},setup(e){return{computedClass:V(()=>ee(k(e.active,"active"),k(e.completed,"completed"),k(e.disabled,"disabled"),k(e.fluid,"fluid"),k(e.link,"link"),k(e.vertical,"vertical"),"step"))}},render(){var e,a,n,o;return this.href?t("a",{class:this.computedClass,href:this.href},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("div",{class:this.computedClass},[(o=(n=this.$slots).default)==null?void 0:o.call(n)])}}),tv=["one","two","three","four","five","six","seven","eight"],Gr=D({name:"SuiStepGroup",props:{attached:String,fluid:Boolean,inverted:Boolean,ordered:Boolean,size:String,stackable:String,unstackable:Boolean,vertical:Boolean,widths:Number},setup(e){const{widths:a}=e;return{computedClass:V(()=>ee("ui",a&&tv[a-1],e.size,k(e.fluid,"fluid"),k(e.inverted,"inverted"),k(e.ordered,"ordered"),k(e.unstackable,"unstackable"),k(e.vertical,"vertical"),ze(e.attached,"attached"),ze(e.stackable,"stackable"),"steps"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),qr=D({name:"SuiStepContent",render(){var e,a;return t("div",{class:"content"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Ur=D({name:"SuiStepTitle",render(){var e,a;return t("div",{class:"title"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Yr=D({name:"SuiStepDescription",render(){var e,a;return t("div",{class:"description"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),iv={install(e){e.component(jr.name,jr),e.component(Gr.name,Gr),e.component(qr.name,qr),e.component(Ur.name,Ur),e.component(Yr.name,Yr)}},av=Object.freeze(Object.defineProperty({__proto__:null,Button:Pb,Container:Fb,Divider:Mb,Emoji:Vb,Flag:Hb,Header:Nb,Icon:$b,Image:Jb,Input:Wb,Label:Yb,List:Kb,Loader:Xb,Rail:Qb,Reveal:Zb,Segment:ev,Step:iv},Symbol.toStringTag,{value:"Module"})),wo=D({name:"SuiBreadcrumbDivider",props:{icon:String},setup(e){return{computedClass:V(()=>ee(e.icon,"icon","divider"))}},render(){var e,a;return this.icon?t("i",{"aria-hidden":"true",class:this.computedClass},null):t("div",{class:"divider"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Co=D({name:"SuiBreadcrumbSection",props:{active:Boolean,href:String,link:Boolean,to:String},setup(e){const a=V(()=>ee(k(e.active,"active"),"section")),n=e.link||!!e.href;return{computedClass:a,isLink:n}},render(){let e="div";this.isLink?e="a":this.to&&(e=y("router-link"));const a={href:this.href,to:this.to};return t(e,Ui({class:this.computedClass},a),{default:()=>{var n,o;return[(o=(n=this.$slots).default)==null?void 0:o.call(n)]}})}}),Jr=D({name:"SuiBreadcrumb",props:{icon:String,inverted:Boolean,sections:{type:Array,default:()=>[]},size:String},setup(e){return{computedClass:V(()=>ee("ui",e.size,k(e.inverted,"inverted"),"breadcrumb"))}},render(){var e,a;const n=()=>{var o;return(o=this.sections)==null?void 0:o.map((r,c)=>{const m={active:r.active,href:r.href,link:r.link,to:r.to};return t(Ce,null,[t(Co,m,{default:()=>[r.content]}),this.sections.length!==c+1&&t(wo,{icon:this.icon},{default:()=>[l(" / ")]})])})};return t("div",{class:this.computedClass},[((a=(e=this.$slots).default)==null?void 0:a.call(e))||n()])}}),lv={install(e){e.component(Jr.name,Jr),e.component(wo.name,wo),e.component(Co.name,Co)}},jl=D({name:"SuiForm",props:{error:Boolean,inverted:Boolean,loading:Boolean,reply:Boolean,success:Boolean,unstackable:Boolean,warning:Boolean,size:String},setup(e){return{computedClass:V(()=>ee("ui",e.size,k(e.error,"error"),k(e.inverted,"inverted"),k(e.loading,"loading"),k(e.reply,"reply"),k(e.success,"success"),k(e.unstackable,"unstackable"),k(e.warning,"warning"),"form"))}},render(){var e,a;return t("form",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Wr=["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"];function nv(e){return{widthClass:V(()=>Number(e.width)>0?`${Wr[Number(e.width)-1]} wide`:typeof e.width=="string"||Wr.includes(e.width)?`${e.width} wide`:null)}}const fi=D({name:"SuiFormField",emits:["update:modelValue"],props:{disabled:Boolean,error:Boolean,inline:Boolean,label:String,modelValue:String,placeholder:String,required:Boolean,type:String,width:String||Number},setup(e,{emit:a}){const{widthClass:n}=nv(e),o=V(()=>ee(k(e.disabled,"disabled"),k(e.error,"error"),k(e.inline,"inline"),k(e.required,"required"),n.value,"field")),r=e.type||"text";return{computedClass:o,inputType:r,onInput:c=>a("update:modelValue",c.target.value)}},render(){var e,a;return this.label?t("div",{class:this.computedClass},[t("label",null,[this.label]),t("input",{type:this.inputType,placeholder:this.placeholder,value:this.modelValue,onInput:this.onInput},null)]):t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Kr=D({name:"SuiFormGroup",props:{widths:String},setup(e){return{computedClass:V(()=>ee(ze(e.widths,"width"),"fields"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Xr=D({name:"SuiFormTextarea",props:{label:String,placeholder:String},render(){return this.label&&t("div",{class:"field"},[t("label",null,[this.label]),t("textarea",{placeholder:this.placeholder},null)]),t("div",{class:"field"},[t("textarea",{placeholder:this.placeholder},null)])}}),ov={install(e){e.component(jl.name,jl),e.component(fi.name,fi),e.component(Kr.name,Kr),e.component(Xr.name,Xr)}},ba=D({name:"SuiGrid",props:{celled:[Boolean,String],centered:Boolean,columns:[Number,String],compact:Boolean,container:Boolean,divided:[Boolean,String],doubling:Boolean,inverted:Boolean,padded:[Boolean,String],relaxed:[Boolean,String],reversed:String,stackable:Boolean,textAlign:String,verticalAlign:String},setup(e){return{computedClass:V(()=>ee("ui",e.container&&"container",k(e.centered,"centered"),k(e.compact,"compact"),k(e.doubling,"doubling"),k(e.inverted,"inverted"),k(e.stackable,"stackable"),ze(e.reversed,"reversed"),ze(e.verticalAlign,"aligned"),Re(e.celled,"celled"),Re(e.divided,"divided"),Re(e.padded,"padded"),Re(e.relaxed,"relaxed"),Aa(e.textAlign),ti(e.columns,"column"),"grid"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),_t=D({name:"SuiGridColumn",props:{color:String,computer:Number,floated:String,largeScreen:Number,mobile:Number,only:String,tablet:Number,textAlign:String,width:Number,widescreen:Number},setup(e){return{computedClass:V(()=>ee(e.color,ze(e.floated,"floated"),ze(e.only,"only"),Aa(e.textAlign),ti(e.width,"wide"),Ta(e.mobile,"mobile"),Ta(e.tablet,"tablet"),Ta(e.computer,"computer"),Ta(e.largeScreen,"large screen"),Ta(e.widescreen,"widescreen"),"column"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Gl=D({name:"SuiGridRow",props:{centered:Boolean,color:String,columns:Number,only:String,stretched:Boolean,textAlign:String},setup(e){return{computedClass:V(()=>ee(e.color,k(e.centered,"centered"),k(e.stretched,"stretched"),ze(e.only,"only"),ti(e.columns,"column"),Aa(e.textAlign),"row"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),sv={install(e){e.component(ba.name,ba),e.component(_t.name,_t),e.component(Gl.name,Gl)}},Ao=D({name:"SuiMenu",props:{attached:[Boolean,String],borderless:Boolean,color:Boolean,compact:Boolean,fixed:Boolean,floated:[Boolean,String],fluid:Boolean,icon:[Boolean,String],inverted:Boolean,pagination:Boolean,pointing:Boolean,secondary:Boolean,size:String,stackable:Boolean,tabular:[Boolean,String],text:Boolean,vertical:Boolean,widths:Number},setup(e){return{computedClass:V(()=>ee("ui",e.color,e.size,k(e.borderless,"borderless"),k(e.compact,"compact"),k(e.fixed,"fixed"),k(e.fluid,"fluid"),k(e.inverted,"inverted"),k(e.pagination,"pagination"),k(e.pointing,"pointing"),k(e.secondary,"secondary"),k(e.stackable,"stackable"),k(e.text,"text"),k(e.vertical,"vertical"),Re(e.attached,"attached"),Re(e.floated,"floated"),Re(e.icon,"icon"),Re(e.tabular,"tabular"),ti(e.widths,"item"),"menu"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Qr=D({name:"SuiMenuHeader",props:{as:String,content:String},setup(e,{slots:a}){let n=e.as||"div";return()=>t(n,{class:"header"},{default:()=>{var o;return[e.content||((o=a.default)==null?void 0:o.call(a))]}})}}),ql=D({name:"SuiMenuItem",props:{action:Boolean,active:Boolean,as:String,browse:Boolean,color:String,disabled:Boolean,fitted:[Boolean,String],header:Boolean,icon:Boolean,index:Number,link:Boolean,name:String,position:String,stackable:Boolean},setup(e,{slots:a}){let n=e.as||"a";e.header&&(n="div"),e.as==="router-link"&&(n=y(e.as));const o=V(()=>ee(e.color,e.position,k(e.action,"action"),k(e.active,"active"),k(e.browse,"browse"),k(e.disabled,"disabled"),k(e.header,"header"),k(e.link,"link"),Re(e.fitted,"fitted"),"item"));return()=>t(n,{class:o.value},{default:()=>{var r;return[e.name||((r=a.default)==null?void 0:r.call(a))]}})}}),Zr=D({name:"SuiMenuMenu",props:{position:String},setup(e){const{position:a}=e;return{computedClass:V(()=>ee(a,"menu"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),rv={install(e){e.component(Ao.name,Ao),e.component(Qr.name,Qr),e.component(ql.name,ql),e.component(Zr.name,Zr)}},eu=D({name:"SuiMessage",props:{attached:[Boolean,String],color:String,compact:Boolean,content:String,header:String,error:Boolean,floating:Boolean,hidden:Boolean,icon:Boolean,info:Boolean,negative:Boolean,positive:Boolean,size:String,success:Boolean,visible:Boolean,warning:Boolean},setup(e){return{computedClass:V(()=>ee("ui",e.color,e.size,k(e.compact,"compact"),k(e.error,"error"),k(e.floating,"floating"),k(e.hidden,"hidden"),k(e.icon,"icon"),k(e.info,"info"),k(e.negative,"negative"),k(e.positive,"positive"),k(e.success,"success"),k(e.visible,"visible"),k(e.warning,"warning"),Re(e.attached,"attached"),"message"))}},render(){var e,a;return t("div",{class:this.computedClass},[(this.header||this.content)&&t(ko,null,{default:()=>[t(xo,null,{default:()=>[this.header]}),t("p",null,[this.content])]}),(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),ko=D({name:"SuiMessageContent",render(){var e,a;return J("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),xo=D({name:"SuiMessageHeader",render(){var e,a;return J("div",{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),tu=D({name:"SuiMessageItem",render(){var e,a;return J("li",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),iu=D({name:"SuiMessageList",render(){var e,a;return J("ul",{class:"list"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),uv={install(e){e.component(eu.name,eu),e.component(ko.name,ko),e.component(xo.name,xo),e.component(tu.name,tu),e.component(iu.name,iu)}},au=D({name:"SuiTable",props:{attached:[Boolean,String],basic:[Boolean,String],celled:Boolean,collapsing:Boolean,color:String,columns:Number,compact:[Boolean,String],definition:Boolean,fixed:Boolean,inverted:Boolean,padded:[Boolean,String],selectable:Boolean,singleLine:Boolean,size:String,stackable:Boolean,striped:Boolean,structured:Boolean,unstackable:Boolean},setup(e){return{computedClass:V(()=>ee("ui",e.color,e.size,k(e.celled,"celled"),k(e.collapsing,"collapsing"),k(e.definition,"definition"),k(e.fixed,"fixed"),k(e.inverted,"inverted"),k(e.selectable,"selectable"),k(e.singleLine,"single line"),k(e.stackable,"stackable"),k(e.striped,"striped"),k(e.structured,"structured"),k(e.unstackable,"unstackable"),Re(e.attached,"attached"),Re(e.basic,"basic"),Re(e.compact,"compact"),Re(e.padded,"padded"),ti(e.columns,"column"),"table"))}},render(){var e,a;return t("table",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),lu=D({name:"SuiTableBody",render(){var e,a;return J("tbody",{},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),nu=D({name:"SuiTableCell",props:{active:Boolean,collapsing:Boolean,color:String,disabled:Boolean,error:Boolean,marked:String,negative:Boolean,positive:Boolean,selectable:Boolean,singleLine:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:V(()=>ee(e.color,k(e.active,"active"),k(e.collapsing,"collapsing"),k(e.disabled,"disabled"),k(e.error,"error"),k(e.negative,"negative"),k(e.positive,"positive"),k(e.selectable,"selectable"),k(e.singleLine,"single line"),k(e.warning,"warning"),ze(e.verticalAlign,"aligned"),ze(e.marked,"marked"),Aa(e.textAlign)))}},render(){var e,a,n,o;return this.computedClass?t("td",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("td",null,[(o=(n=this.$slots).default)==null?void 0:o.call(n)])}}),ou=D({name:"SuiTableFooter",props:{fullWidth:Boolean},setup(e){const{fullWidth:a}=e;return{computedClass:V(()=>ee(k(a,"full-width")))}},render(){var e,a,n,o;return this.computedClass?J("tfoot",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):J("tfoot",{},(o=(n=this.$slots).default)==null?void 0:o.call(n))}}),su=D({name:"SuiTableHeader",props:{fullWidth:Boolean},setup(e){return{computedClass:V(()=>ee(k(e.fullWidth,"full-width")))}},render(){var e,a,n,o;return this.computedClass?J("thead",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):J("thead",{},(o=(n=this.$slots).default)==null?void 0:o.call(n))}}),ru=D({name:"SuiTableHeaderCell",props:{singleLine:Boolean,textAlign:String,width:Number},setup(e){return{computedClass:V(()=>ee(k(e.singleLine,"single line"),ze(e.textAlign,"aligned"),ti(e.width,"wide")))}},render(){var e,a,n,o;return this.computedClass?t("th",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("th",null,[(o=(n=this.$slots).default)==null?void 0:o.call(n)])}}),uu=D({name:"SuiTableRow",props:{active:Boolean,color:String,disabled:Boolean,error:Boolean,negative:Boolean,positive:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:V(()=>ee(e.color,k(e.active,"active"),k(e.disabled,"disabled"),k(e.error,"error"),k(e.negative,"negative"),k(e.positive,"positive"),k(e.warning,"warning"),ze(e.textAlign,"aligned"),ze(e.verticalAlign,"aligned")))}},render(){var e,a,n,o;return this.computedClass?t("tr",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("tr",null,[(o=(n=this.$slots).default)==null?void 0:o.call(n)])}}),cv={install(e){e.component(au.name,au),e.component(lu.name,lu),e.component(nu.name,nu),e.component(ou.name,ou),e.component(su.name,su),e.component(ru.name,ru),e.component(uu.name,uu)}},dv=Object.freeze(Object.defineProperty({__proto__:null,Breadcrumb:lv,Form:ov,Grid:sv,Menu:rv,Message:uv,Table:cv},Symbol.toStringTag,{value:"Module"})),cu=D({name:"SuiAdvertisement",props:{centered:Boolean,test:String,unit:String},setup(e){return{computedClass:V(()=>ee("ui",e.unit,k(e.centered,"centered"),k(!!e.test,"test"),"ad"))}},render(){var e,a,n,o;return this.$props.test?J("div",{class:this.computedClass,"data-text":this.$props.test},(a=(e=this.$slots).default)==null?void 0:a.call(e)):J("div",{class:this.computedClass},(o=(n=this.$slots).default)==null?void 0:o.call(n))}}),mv={install(e){e.component(cu.name,cu)}},du=D({name:"SuiCard",props:{centered:Boolean,color:String,fluid:Boolean,horizontal:Boolean,href:String,link:Boolean,raised:Boolean},setup(e){return{computedClass:V(()=>ee("ui",e.color,k(e.centered,"centered"),k(e.fluid,"fluid"),k(e.horizontal,"horizontal"),k(e.link,"link"),k(e.raised,"raised"),"card"))}},render(){var e,a,n,o;return this.$props.href||this.$props.link?J("a",{class:this.computedClass,href:this.$slots.href},(a=(e=this.$slots).default)==null?void 0:a.call(e)):J("div",{class:this.computedClass},(o=(n=this.$slots).default)==null?void 0:o.call(n))}}),mu=D({name:"SuiCardContent",props:{extra:Boolean},setup(e){return{computedClass:V(()=>ee(k(e.extra,"extra"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),pu=D({name:"SuiCardDescription",props:{textAlign:String},setup(e){return{computedClass:V(()=>ee(ze(e.textAlign,"aligned"),"description"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),fu=D({name:"SuiCardGroup",props:{centered:Boolean,doubling:Boolean,inverted:Boolean,itemsPerRow:Number,stackable:Boolean},setup(e){return{computedClass:V(()=>ee("ui",k(e.centered,"centered"),k(e.doubling,"doubling"),k(e.inverted,"inverted"),k(e.stackable,"stackable"),ti(e.itemsPerRow,""),"cards"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),gu=D({name:"SuiCardHeader",props:{textAlign:String},setup(e){return{computedClass:V(()=>ee(ze(e.textAlign,"aligned"),"header"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),hu=D({name:"SuiCardMeta",render(){var e,a;return J("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),pv={install(e){e.component(du.name,du),e.component(mu.name,mu),e.component(pu.name,pu),e.component(fu.name,fu),e.component(gu.name,gu),e.component(hu.name,hu)}},_u=D({name:"SuiComment",render(){var e,a;return J("div",{class:"comment"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),bu=D({name:"SuiCommentAction",props:{active:Boolean},setup(e){const{active:a}=e;return{computedClass:V(()=>ee(k(a,"active")))}},render(){var e,a,n,o;return this.computedClass?J("a",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):J("a",{},(o=(n=this.$slots).default)==null?void 0:o.call(n))}}),vu=D({name:"SuiCommentActions",render(){var e,a;return J("div",{class:"actions"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),yu=D({name:"SuiCommentAuthor",props:{as:String},render(){var e,a;let n=this.$props.as||"div";return J(n,{class:"author"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Su=D({name:"SuiCommentAvatar",props:{as:String,src:String},render(){let e=this.$props.as||"div";return J(e,{class:"avatar"},J("img",{src:this.$props.src}))}}),wu=D({name:"SuiCommentContent",render(){var e,a;return J("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Cu=D({name:"SuiCommentGroup",props:{collapsed:Boolean,inverted:Boolean,minimal:Boolean,size:String,threaded:Boolean},setup(e){return{computedClass:V(()=>ee("ui",e.size,k(e.collapsed,"collapsed"),k(e.inverted,"inverted"),k(e.minimal,"minimal"),k(e.threaded,"threaded"),"comments"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Au=D({name:"SuiCommentMetadata",render(){var e,a;return J("div",{class:"metadata"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ku=D({name:"SuiCommentText",render(){var e,a;return J("div",{class:"text"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),fv={install(e){e.component(_u.name,_u),e.component(bu.name,bu),e.component(vu.name,vu),e.component(yu.name,yu),e.component(Su.name,Su),e.component(wu.name,wu),e.component(Cu.name,Cu),e.component(Au.name,Au),e.component(ku.name,ku)}},xu=D({name:"SuiFeed",props:{inverted:Boolean,size:String},setup(e){return{computedClass:V(()=>ee("ui",e.size,k(e.inverted,"inverted"),"feed"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),$u=D({name:"SuiFeedContent",render(){var e,a;return J("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Bu=D({name:"SuiFeedDate",render(){var e,a;return J("div",{class:"date"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Tu=D({name:"SuiFeedEvent",render(){var e,a;return J("div",{class:"event"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Lu=D({name:"SuiFeedExtra",props:{images:Boolean,text:Boolean},setup(e){const{images:a,text:n}=e;return{computedClass:V(()=>ee(k(a,"images"),k(n,"text"),"extra"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Eu=D({name:"SuiFeedLabel",render(){var e,a;return J("div",{class:"label"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Du=D({name:"SuiFeedLike",render(){var e,a;return J("a",{class:"like"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Iu=D({name:"SuiFeedMeta",render(){var e,a;return J("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ru=D({name:"SuiFeedSummary",render(){var e,a;return J("div",{class:"summary"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),zu=D({name:"SuiFeedUser",render(){var e,a;return J("a",{class:"user"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),gv={install(e){e.component(xu.name,xu),e.component($u.name,$u),e.component(Bu.name,Bu),e.component(Tu.name,Tu),e.component(Lu.name,Lu),e.component(Eu.name,Eu),e.component(Du.name,Du),e.component(Iu.name,Iu),e.component(Ru.name,Ru),e.component(zu.name,zu)}},Pu=D({name:"SuiItem",render(){var e,a;return J("div",{class:"item"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Fu=D({name:"SuiItemContent",props:{verticalAlign:String},setup(e){const{verticalAlign:a}=e;return{computedClass:V(()=>ee(ze(a,"aligned"),"content"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Mu=D({name:"SuiItemDescription",render(){var e,a;return J("div",{class:"description"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Vu=D({name:"SuiItemExtra",render(){var e,a;return J("div",{class:"extra"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Hu=D({name:"SuiItemGroup",props:{divided:Boolean,inverted:Boolean,link:Boolean,relaxed:[Boolean,String],unstackable:Boolean},setup(e){return{computedClass:V(()=>ee("ui",k(e.divided,"divided"),k(e.inverted,"inverted"),k(e.link,"link"),k(e.unstackable,"unstackable"),Re(e.relaxed,"relaxed"),"items"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Nu=D({name:"SuiItemHeader",props:{as:String},render(){var e,a;let n=this.$props.as||"div";return J(n,{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ou=D({name:"SuiItemImage",props:{size:String},setup(e){return{computedClass:V(()=>ee(e.size,"image"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ju=D({name:"SuiItemMeta",render(){var e,a;return J("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),hv={install(e){e.component(Pu.name,Pu),e.component(Fu.name,Fu),e.component(Mu.name,Mu),e.component(Vu.name,Vu),e.component(Hu.name,Hu),e.component(Nu.name,Nu),e.component(Ou.name,Ou),e.component(ju.name,ju)}},Ul=D({name:"SuiStatisticLabel",props:{content:String},render(){var e,a;return this.$props.content?J("div",{class:"label"},this.$props.content):J("div",{class:"label"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Yl=D({name:"SuiStatisticValue",props:{content:String,text:Boolean},setup(e){return{computedClass:V(()=>ee(k(e.text,"text"),"value"))}},render(){var e,a;return this.$props.content?J("div",{class:this.computedClass},this.$props.content):J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Gu=D({name:"SuiStatistic",components:{StatisticLabel:Ul,StatisticValue:Yl},props:{color:String,floated:[Boolean,String],horizontal:Boolean,inverted:Boolean,label:String,size:String,text:Boolean,value:String},setup(e){const a=Fe("ui",!0);return{computedClass:V(()=>ee(a&&"ui",e.color,e.size,k(e.horizontal,"horizontal"),k(e.inverted,"inverted"),k(e.text,"text"),Re(e.floated,"floated"),"statistic"))}},render(){var e,a,n,o,r,c;let m=[];return this.$props.value&&m.push(J(Yl,{content:this.$props.value},(a=(e=this.$slots).default)==null?void 0:a.call(e))),this.$props.label&&m.push(J(Ul,{content:this.$props.label},(o=(n=this.$slots).default)==null?void 0:o.call(n))),J("div",{class:this.computedClass},m.length>0?m:(c=(r=this.$slots).default)==null?void 0:c.call(r))}}),qu=D({name:"SuiStatisticGroup",props:{color:String,horizontal:Boolean,inverted:Boolean,size:String,widths:Number},setup(e){return rt("ui",!1),{computedClass:V(()=>ee("ui",e.color,e.size,k(e.horizontal,"horizontal"),k(e.inverted,"inverted"),ti(e.widths,""),"statistics"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),_v={install(e){e.component(Gu.name,Gu),e.component(qu.name,qu),e.component(Ul.name,Ul),e.component(Yl.name,Yl)}},bv=Object.freeze(Object.defineProperty({__proto__:null,Advertisement:mv,Card:pv,Comment:fv,Feed:gv,Item:hv,Statistic:_v},Symbol.toStringTag,{value:"Module"})),Uu=D({name:"SuiAccordion",props:{fluid:Boolean,inverted:Boolean,multiple:Boolean,styled:Boolean},setup(e){const a=e.multiple?q([]):q(-1),n=r=>e.multiple?a.value.includes(r):a.value===r,o=r=>{const c=n(r);e.multiple?c?a.value=a.value.filter(m=>m!==r):a.value.push(r):a.value=c?-1:r};return rt("isTabActive",n),rt("updateActiveIndex",o),{computedClass:V(()=>ee("ui",k(e.fluid,"fluid"),k(e.inverted,"inverted"),k(e.styled,"styled"),"accordion"))}},render(){var e,a;const n=o=>(o.forEach((r,c)=>{r.props.index=c}),o);return t("div",{class:this.computedClass},[n((a=(e=this.$slots).default)==null?void 0:a.call(e))])}}),Yu=D({name:"SuiAccordionAccordion",render(){var e,a;return J("div",{class:"accordion"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),$o=D({name:"SuiAccordionContent",props:{active:Boolean},setup(e){return{computedClass:V(()=>ee(k(e.active,"active"),"content"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ju=D({name:"SuiAccordionTab",props:{index:Number,title:String},setup(e){const a=Fe("isTabActive"),n=Fe("updateActiveIndex"),o=V(()=>ee(k(a(e.index),"active"),"title"));return{isTabActive:a,updateActiveIndex:n,titleClass:o}},render(){return t(Ce,null,[t("div",{class:this.titleClass,onClick:()=>this.updateActiveIndex(this.index)},[t(Q,{name:"dropdown"},null),this.title]),t($o,{active:this.isTabActive(this.index)},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})])}}),Wu=D({name:"SuiAccordionTitle",props:{active:Boolean},setup(e){return{computedClass:V(()=>ee(k(e.active,"active"),"title"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),vv={install(e){e.component(Uu.name,Uu),e.component(Yu.name,Yu),e.component($o.name,$o),e.component(Ju.name,Ju),e.component(Wu.name,Wu)}},yv=(e,a,n)=>{e.clickOutside=o=>{e===o.target||e.contains(o.target)||a.value(o,e)},document.body.addEventListener("click",e.clickOutside)},Sv=(e,a,n)=>{document.body.removeEventListener("click",e.clickOutside)},Ss={mounted:yv,unmounted:Sv};function wv(e,a={}){const n=q(e.value?"open":"closed"),o=()=>n.value=e.value?"open":"closed";mt(e,p=>{n.value=p?"opening":"closing"});const r=p=>{p.addEventListener("animationend",o,!0)},c=p=>{p&&p.removeEventListener("animationend",o)},m=V((p="scale")=>{switch(n.value){case"opening":return`animating ${p} in`;case"open":return"visible active";case"closing":return`visible active animating ${p} out`;case"closed":return"hidden"}});return{setupAnimation:r,removeAnimation:c,computeAnimationClass:m}}const Cv=D({name:"SuiCalendarDay",emits:["select-day"],props:{active:Boolean,date:null,disabled:Boolean,onSelectDay:Function},setup(e,{emit:a}){const n=q(!1),o=()=>{e.disabled||(n.value=!0)},r=()=>n.value=!1,c=()=>{e.disabled||a("select-day",e.date)},m=()=>{let s=new Date;return s.getFullYear()===e.date.year&&s.getMonth()===e.date.month&&s.getDate()===e.date.day},p=V(()=>ee("link",k(n.value,"focus"),k(e.active&&!e.disabled,"active"),k(e.disabled,"adjacent disabled"),k(m(),"today")));return{onMouseEnter:o,onMouseLeave:r,onClick:c,computedClass:p}},render(){var e,a;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:Bt(this.onClick,["stop"])},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Av=D({name:"SuiCalendarDateTable",setup(){const{calendarDays:e,updateSelectMode:a,set:n,add:o,subtract:r,selectedDate:c,setSelectedDate:m,selectType:p,updateVisible:s,formatDate:u}=Fe(Si);return{calendarDays:e,isEqualDay:f=>{if(!c.value)return!1;const d=c.value;return d.getFullYear()===f.year&&d.getMonth()===f.month&&d.getDate()===f.day},onSelectDay:f=>{if(n(f.year,"years"),n(f.month,"months"),n(f.day,"days"),p.value==="date"){let d=new Date(f.year,f.month,f.day);m(d),s(!1);return}a("hour")},updateSelectMode:a,formatDate:u,add:o,subtract:r}},render(){const e=()=>this.calendarDays.map((a,n)=>t("tr",null,[a.map(o=>t(Cv,{active:this.isEqualDay(o),date:o,disabled:!o.currentMonth,onSelectDay:this.onSelectDay},{default:()=>[o.day]}))]));return t("table",{class:"ui celled center aligned unstackable table day seven column"},[t("thead",null,[t("tr",null,[t("th",{colspan:7},[t("span",{class:"link",onClick:Bt(()=>this.updateSelectMode("month"),["stop"])},[this.formatDate("date")]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"months")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"months")},[t("i",{class:"chevron right icon"},null)])])]),t("tr",null,[t("th",null,[l("S")]),t("th",null,[l("M")]),t("th",null,[l("T")]),t("th",null,[l("W")]),t("th",null,[l("T")]),t("th",null,[l("F")]),t("th",null,[l("S")])])]),t("tbody",null,[e()])])}}),ye=D({name:"SuiCalendarTableCell",emits:["click-cell"],props:{active:Boolean,today:Boolean,value:null,onClickCell:Function},setup(e){const a=q(!1),n=()=>a.value=!0,o=()=>a.value=!1,r=V(()=>ee("link",k(e.active,"active"),k(e.today,"today"),k(a.value,"focus")));return{onMouseEnter:n,onMouseLeave:o,computedClass:r}},render(){var e,a;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:Bt(()=>this.$emit("click-cell",this.value),["stop"])},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),kv=D({name:"SuiCalendarMonthTable",setup(){const{state:e,set:a,add:n,subtract:o,selectedDate:r,updateSelectMode:c}=Fe(Si);return{state:e,add:n,subtract:o,updateSelectMode:c,isActive:m=>r.value?e.year===r.value.getFullYear()&&e.month===m:!1,isThisMonth:m=>{let p=new Date;return m===p.getMonth()&&e.year===p.getFullYear()},onClickCell:m=>{a(m,"months"),c("day")}}},render(){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=()=>Array(4).fill(0).map((n,o)=>t("tr",null,[t(ye,{value:o*3,active:this.isActive(o*3),today:this.isThisMonth(o*3),onClickCell:this.onClickCell},{default:()=>[e[o*3]]}),t(ye,{value:o*3+1,active:this.isActive(o*3+1),today:this.isThisMonth(o*3+1),onClickCell:this.onClickCell},{default:()=>[e[o*3+1]]}),t(ye,{value:o*3+2,active:this.isActive(o*3+2),today:this.isThisMonth(o*3+2),onClickCell:this.onClickCell},{default:()=>[e[o*3+2]]})]));return t("table",{class:"ui celled center aligned unstackable table month three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:Bt(()=>this.updateSelectMode("year"),["stop"])},[this.state.year]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"years")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"years")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[a()])])}}),xv=D({name:"SuiCalendarYearTable",setup(e){const{state:a,set:n,add:o,subtract:r,selectedDate:c,updateSelectMode:m}=Fe(Si),p=()=>o(10,"years"),s=()=>r(10,"years"),u=V(()=>Math.round(a.year/10)*10+1);return{updateSelectMode:m,moveNextTwelveYears:p,movePrevTwelveYears:s,headerStartYear:u,isActive:f=>c.value?f===c.value.getFullYear():!1,isThisYear:f=>f===new Date().getFullYear(),onClickCell:f=>{n(f,"years"),m("day")}}},render(){return t("table",{class:"ui celled center aligned unstackable table year three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:Bt(()=>this.updateSelectMode("day"),["stop"])},[this.headerStartYear,l(" - "),this.headerStartYear+11]),t("span",{class:"prev link",onClick:this.movePrevTwelveYears},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.moveNextTwelveYears},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(ye,{value:this.headerStartYear,active:this.isActive(this.headerStartYear),today:this.isThisYear(this.headerStartYear),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear]}),t(ye,{value:this.headerStartYear+1,active:this.isActive(this.headerStartYear+1),today:this.isThisYear(this.headerStartYear+1),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+1]}),t(ye,{value:this.headerStartYear+2,active:this.isActive(this.headerStartYear+2),today:this.isThisYear(this.headerStartYear+2),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+2]})]),t("tr",null,[t(ye,{value:this.headerStartYear+3,active:this.isActive(this.headerStartYear+3),today:this.isThisYear(this.headerStartYear+3),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+3]}),t(ye,{value:this.headerStartYear+4,active:this.isActive(this.headerStartYear+4),today:this.isThisYear(this.headerStartYear+4),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+4]}),t(ye,{value:this.headerStartYear+5,active:this.isActive(this.headerStartYear+5),today:this.isThisYear(this.headerStartYear+5),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+5]})]),t("tr",null,[t(ye,{value:this.headerStartYear+6,active:this.isActive(this.headerStartYear+6),today:this.isThisYear(this.headerStartYear+6),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+6]}),t(ye,{value:this.headerStartYear+7,active:this.isActive(this.headerStartYear+7),today:this.isThisYear(this.headerStartYear+7),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+7]}),t(ye,{value:this.headerStartYear+8,active:this.isActive(this.headerStartYear+8),today:this.isThisYear(this.headerStartYear+8),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+8]})]),t("tr",null,[t(ye,{value:this.headerStartYear+9,active:this.isActive(this.headerStartYear+9),today:this.isThisYear(this.headerStartYear+9),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+9]}),t(ye,{value:this.headerStartYear+10,active:this.isActive(this.headerStartYear+10),today:this.isThisYear(this.headerStartYear+10),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+10]}),t(ye,{value:this.headerStartYear+11,active:this.isActive(this.headerStartYear+11),today:this.isThisYear(this.headerStartYear+11),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+11]})])])])}}),$v=D({name:"SuiCalendarHourTable",setup(){const{updateSelectMode:e,state:a,set:n,add:o,subtract:r,formatDate:c,selectedDate:m}=Fe(Si);return{updateSelectMode:e,formatDate:c,onPrevClick:()=>r(1,"days"),onNextClick:()=>o(1,"days"),onClickCell:p=>{n(p,"hours"),e("minute")},isActive:p=>{if(!m.value)return!1;let s=m.value.getFullYear(),u=m.value.getMonth(),f=m.value.getDate(),d=m.value.getHours();return a.year===s&&a.month===u&&a.day===f&&p===d}}},render(){return t("table",{class:"ui celled center aligned unstackable table hour four column"},[t("thead",null,[t("tr",null,[t("th",{colspan:4},[t("span",{class:"link",onClick:Bt(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:this.onPrevClick},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.onNextClick},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(ye,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},{default:()=>[l("12:00 AM")]}),t(ye,{active:this.isActive(1),value:1,onClickCell:this.onClickCell},{default:()=>[l("1:00 AM")]}),t(ye,{active:this.isActive(2),value:2,onClickCell:this.onClickCell},{default:()=>[l("2:00 AM")]}),t(ye,{active:this.isActive(3),value:3,onClickCell:this.onClickCell},{default:()=>[l("3:00 AM")]})]),t("tr",null,[t(ye,{active:this.isActive(4),value:4,onClickCell:this.onClickCell},{default:()=>[l("4:00 AM")]}),t(ye,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},{default:()=>[l("5:00 AM")]}),t(ye,{active:this.isActive(6),value:6,onClickCell:this.onClickCell},{default:()=>[l("6:00 AM")]}),t(ye,{active:this.isActive(7),value:7,onClickCell:this.onClickCell},{default:()=>[l("7:00 AM")]})]),t("tr",null,[t(ye,{active:this.isActive(8),value:8,onClickCell:this.onClickCell},{default:()=>[l("8:00 AM")]}),t(ye,{active:this.isActive(9),value:9,onClickCell:this.onClickCell},{default:()=>[l("9:00 AM")]}),t(ye,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},{default:()=>[l("10:00 AM")]}),t(ye,{active:this.isActive(11),value:11,onClickCell:this.onClickCell},{default:()=>[l("11:00 AM")]})]),t("tr",null,[t(ye,{active:this.isActive(12),value:12,onClickCell:this.onClickCell},{default:()=>[l("12:00 PM")]}),t(ye,{active:this.isActive(13),value:13,onClickCell:this.onClickCell},{default:()=>[l("1:00 PM")]}),t(ye,{active:this.isActive(14),value:14,onClickCell:this.onClickCell},{default:()=>[l("2:00 PM")]}),t(ye,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},{default:()=>[l("3:00 PM")]})]),t("tr",null,[t(ye,{active:this.isActive(16),value:16,onClickCell:this.onClickCell},{default:()=>[l("4:00 PM")]}),t(ye,{active:this.isActive(17),value:17,onClickCell:this.onClickCell},{default:()=>[l("5:00 PM")]}),t(ye,{active:this.isActive(18),value:18,onClickCell:this.onClickCell},{default:()=>[l("6:00 PM")]}),t(ye,{active:this.isActive(19),value:19,onClickCell:this.onClickCell},{default:()=>[l("7:00 PM")]})]),t("tr",null,[t(ye,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},{default:()=>[l("8:00 PM")]}),t(ye,{active:this.isActive(21),value:21,onClickCell:this.onClickCell},{default:()=>[l("9:00 PM")]}),t(ye,{active:this.isActive(22),value:22,onClickCell:this.onClickCell},{default:()=>[l("10:00 PM")]}),t(ye,{active:this.isActive(23),value:23,onClickCell:this.onClickCell},{default:()=>[l("11:00 PM")]})])])])}});function Et(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Rt(e)}const Bv=D({name:"SuiCalendarMinuteTable",setup(){const{state:e,set:a,add:n,subtract:o,formatDate:r,updateSelectMode:c,updateVisible:m,selectedDate:p}=Fe(Si);return{add:n,subtract:o,formatDate:r,updateSelectMode:c,getTimeLabel:s=>{let u=e.hour%12,f=e.hour>12?"PM":"AM",d=s.toString().padStart(2,"0");return e.hour===0?`12:${d} AM`:e.hour===12?`12:${d} PM`:`${u}:${d} ${f}`},onClickCell:s=>{a(s,"minutes"),p.value=new Date(e.year,e.month,e.day,e.hour,e.minute),m(!1)},isActive:s=>{if(!p.value)return!1;let u=p.value.getFullYear(),f=p.value.getMonth(),d=p.value.getDate(),h=p.value.getHours(),v=p.value.getMinutes();return e.year===u&&e.month===f&&e.day===d&&e.hour===h&&s===v}}},render(){let e,a,n,o,r,c,m,p,s,u,f,d;return t("table",{class:"ui celled center aligned unstackable table minute three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:Bt(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"days")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"days")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(ye,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},Et(e=this.getTimeLabel(0))?e:{default:()=>[e]}),t(ye,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},Et(a=this.getTimeLabel(5))?a:{default:()=>[a]}),t(ye,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},Et(n=this.getTimeLabel(10))?n:{default:()=>[n]})]),t("tr",null,[t(ye,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},Et(o=this.getTimeLabel(15))?o:{default:()=>[o]}),t(ye,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},Et(r=this.getTimeLabel(20))?r:{default:()=>[r]}),t(ye,{active:this.isActive(25),value:25,onClickCell:this.onClickCell},Et(c=this.getTimeLabel(25))?c:{default:()=>[c]})]),t("tr",null,[t(ye,{active:this.isActive(30),value:30,onClickCell:this.onClickCell},Et(m=this.getTimeLabel(30))?m:{default:()=>[m]}),t(ye,{active:this.isActive(35),value:35,onClickCell:this.onClickCell},Et(p=this.getTimeLabel(35))?p:{default:()=>[p]}),t(ye,{active:this.isActive(40),value:40,onClickCell:this.onClickCell},Et(s=this.getTimeLabel(40))?s:{default:()=>[s]})]),t("tr",null,[t(ye,{active:this.isActive(45),value:45,onClickCell:this.onClickCell},Et(u=this.getTimeLabel(45))?u:{default:()=>[u]}),t(ye,{active:this.isActive(50),value:50,onClickCell:this.onClickCell},Et(f=this.getTimeLabel(50))?f:{default:()=>[f]}),t(ye,{active:this.isActive(55),value:55,onClickCell:this.onClickCell},Et(d=this.getTimeLabel(55))?d:{default:()=>[d]})])])])}}),Tv=D({name:"SuiCalendarBody",setup(){const e=q(null),{visible:a,selectMode:n}=Fe(Si),{setupAnimation:o,removeAnimation:r,computeAnimationClass:c}=wv(a);yi(()=>o(e.value)),qi(()=>r(e.value));const m=V(()=>ee("ui popup calendar","bottom left","transition",c.value));return{rootRef:e,computedClass:m,selectMode:n}},render(){const e=()=>{switch(this.selectMode){case"day":return t(Av,null,null);case"month":return t(kv,null,null);case"year":return t(xv,null,null);case"hour":return t($v,null,null);case"minute":return t(Bv,null,null)}};return t("div",{ref:a=>this.rootRef=a,class:this.computedClass,style:"inset: 38px auto auto 0px;"},[e()])}}),Lv=D({name:"SuiCalendarInput",props:{placeholder:String,value:null},setup(e){const{visible:a,updateVisible:n,updateSelectMode:o,set:r,state:c,formatCalendarDate:m}=Fe(Si);return{visible:a,formatCalendarDate:m,onClick:()=>{a.value||(o("day"),e.value&&(r(e.value.getFullYear(),"years"),r(e.value.getMonth(),"months"))),n(!a.value)}}},render(){return t("input",{type:"text",placeholder:this.placeholder,value:this.formatCalendarDate(this.value),onClick:()=>this.onClick()},null)}}),Ev=(e,a)=>{let n=new Date;n.setDate(1),n.setMonth(a),n.setFullYear(e);let o=n.getDay();return o>=7?o-7:o},Dv=(e,a)=>{let n,o;return a===0?(n=11,o=e-1):(n=a-1,o=e),32-new Date(o,n,32).getDate()},Mn=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e];function Iv(){const e=q(!1),a=(w=!1)=>e.value=w,n=new Date;function o(w){if(!w)return;let A=w.getFullYear(),$=Mn(w.getMonth()),b=w.getDate(),C=w.getHours(),x=w.getMinutes(),B=C>11?"PM":"AM";C=C%12,C===0&&(C=12);let E=x.toString().padStart(2,"0");return`${$} ${b}, ${A} ${C}:${E} ${B}`}const r=q("default"),c=q("day");function m(w){c.value=w}const p=q(null),s=w=>{p.value=w},u=Zt({year:n.getFullYear(),month:n.getMonth(),day:n.getDate(),hour:n.getHours(),minute:n.getMinutes()}),f=(w,A)=>{switch(A){case"years":u.year=w;break;case"months":u.month=w;break;case"days":u.day=w;break;case"hours":u.hour=w;break;case"minutes":u.minute=w}},d=(w,A)=>{let $=new Date(u.year,u.month,u.day,u.hour);switch(A){case"years":$.setFullYear($.getFullYear()+w);break;case"months":$.setMonth($.getMonth()+w);break;case"days":$.setDate($.getDate()+w);break;case"hours":$.setHours($.getHours()+w);break}u.year=$.getFullYear(),u.month=$.getMonth(),u.day=$.getDate(),u.hour=$.getHours()},h=(w,A)=>{let $=new Date(u.year,u.month,u.day,u.hour);switch(A){case"years":$.setFullYear($.getFullYear()-w);break;case"months":$.setMonth($.getMonth()-w);break;case"days":$.setDate($.getDate()-w);break;case"hours":$.setHours($.getHours()-w);break}u.year=$.getFullYear(),u.month=$.getMonth(),u.day=$.getDate(),u.hour=$.getHours()},v=(w="default")=>w==="date"?`${Mn(u.month)} ${u.year}`:`${Mn(u.month)} ${u.day}, ${u.year}`,_=V(()=>{let w=u.month,A=u.year;w>11&&(w=w%11-1,A+=1);let $=[],b=Ev(A,w),C=32-new Date(A,w,32).getDate(),x=Dv(A,w),B=1;for(let E=0;E<6;E++){let F=[];if(E===0){for(let z=x-b+1;z<=x;z++){let j=w===0?11:w-1,K=w===0?A-1:A;F.push({day:z,month:j,year:K,currentMonth:!1})}let M=7-F.length;for(let z=0;z<M;z++)F.push({day:B,month:w,year:A,currentMonth:!0}),B++}else for(let M=0;M<7;M++){if(B>C){let z=w===11?0:w+1,j=w===11?A+1:A;F.push({day:B-C,month:z,year:j,currentMonth:!1})}else F.push({day:B,month:w,year:A,currentMonth:!0});B++}$.push(F)}return $});return{visible:e,updateVisible:a,calendarDays:_,formatCalendarDate:o,selectMode:c,updateSelectMode:m,selectType:r,selectedDate:p,setSelectedDate:s,state:u,set:f,add:d,subtract:h,formatDate:v}}const Si=Symbol("useCalendar"),Ku=D({name:"SuiCalendar",directives:{clickoutside:Ss},emits:["update:modelValue"],props:{modelValue:null,placeholder:String},setup(e,{emit:a}){const n=Iv();rt(Si,n);const{updateVisible:o,selectedDate:r}=n;return mt(r,c=>{a("update:modelValue",c)}),{updateVisible:o}},render(){return sl(t("div",{class:"ui calendar"},[t("div",{class:"ui input left icon"},[t(Tv,null,null),t("i",{class:"calendar icon"},null),t(Lv,{placeholder:this.placeholder,value:this.modelValue},null)])]),[[rn("clickoutside"),()=>this.updateVisible(!1)]])}}),Rv={install:e=>{e.component(Ku.name,Ku)}},Xu=D({name:"SuiCheckbox",emits:["update:modelValue","change","click"],props:{disabled:Boolean,indeterminate:Boolean,label:String,modelValue:null,radio:Boolean,readOnly:Boolean,slider:Boolean,toggle:Boolean,value:null},setup(e,{emit:a}){const n=V(()=>ee("ui",!e.label&&"fitted",k(e.disabled,"disabled"),k(e.indeterminate,"indeterminate"),k(e.radio,"radio"),k(e.readOnly,"read-only"),k(e.slider,"slider"),k(e.toggle,"toggle"),"checkbox")),o=V(()=>Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue);return{computedClass:n,checked:o,onClick:r=>{if(e.disabled||e.readOnly)return;let c;e.value?o.value?c=e.modelValue.filter(m=>e.value!==m):c=e.modelValue?[...e.modelValue,e.value]:[e.value]:c=!e.modelValue,a("change",r),a("click",r),a("update:modelValue",c)}}},render(){return t("div",{class:this.computedClass,onClick:this.onClick},[t("input",{type:this.radio?"radio":"checkbox",class:"hidden",checked:this.checked,readonly:!0},null),t("label",null,[this.label])])}}),zv={install(e){e.component(Xu.name,Xu)}},Qu=D({name:"SuiDimmer",props:{active:Boolean,inverted:Boolean,page:Boolean,simple:Boolean,verticalAlign:String},setup(e){return{computedClass:V(()=>ee("ui",k(e.active,"active"),k(e.inverted,"inverted"),k(e.page,"page"),k(e.simple,"simple"),ze(e.verticalAlign,"aligned"),"dimmer"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Zu=D({name:"SuiDimmerDimmable",components:{Segment:Xe},props:{blurring:Boolean},setup(e){return{computedClass:V(()=>ee(k(e.blurring,"blurring"),"dimmable"))}},render(){var e,a;return J(Xe,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Pv={install(e){e.component(Qu.name,Qu),e.component(Zu.name,Zu)}},Fv=(e,a)=>e.map(n=>n[a]),Mv=D({name:"SuiDropdownText",emits:["remove"],props:{clearable:Boolean,filtered:Boolean,icon:{type:String,default:"dropdown"},item:[Object,String],placeholder:String,text:String,onRemove:Function},setup(e){return{computedClass:V(()=>ee(k(e.filtered,"filtered"),k(!e.text&&!e.item||Array.isArray(e.item)&&e.item.length===0,"default"),"text"))}},render(){var e,a;let n;if(this.item&&!Array.isArray(this.item))if(typeof this.item=="object"){const{flag:c,text:m}=this.item;n=t(Ce,null,[c&&t("i",{class:`${c} flag`},null),m])}else n=this.item;else n=this.text||this.placeholder;const o=typeof this.item=="object"?(e=this.item)==null?void 0:e.image:null,r=typeof this.item=="object"?(a=this.item)==null?void 0:a.label:null;return t(Ce,null,[t("div",{class:this.computedClass},[o&&t(Ue,o,null),r&&t(H,r,null),n]),t("i",{class:`${this.icon} icon`},null),this.$props.clearable&&t("i",{class:"remove icon",onClick:Bt(()=>this.$emit("remove"),["stop"])},null)])}}),Vv=e=>{const a=Zt({visible:!1,animating:!1,direction:"down",multiple:e.multiple});return mt(()=>a.visible,()=>{a.animating=!0,setTimeout(()=>a.animating=!1,200)}),{state:a,show:()=>!a.animating&&(a.visible=!0),hide:()=>{a.animating||(a.visible=!1)}}};function Hv(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Rt(e)}const ec=D({name:"SuiDropdown",directives:{clickoutside:Ss},emits:["update:modelValue"],props:{button:Boolean,clearable:Boolean,compact:Boolean,floating:Boolean,fluid:Boolean,icon:String,inline:Boolean,item:Boolean,labeled:Boolean,modelValue:[Object,String],multiple:Boolean,options:Array,placeholder:String,pointing:[Boolean,String],scrolling:Boolean,selection:Boolean,search:Boolean,searchInMenu:Boolean,simple:Boolean,text:String},setup(e,{emit:a}){const n=Vv(e);rt("useDropdown",n);const{state:o,show:r,hide:c}=n,m=V(()=>ee("ui",k(e.button,"button"),k(e.clearable,"clearable"),k(e.compact,"compact"),k(e.floating,"floating"),k(e.fluid,"fluid"),k(!!e.icon,"icon"),k(e.inline,"inline"),k(e.item,"item"),k(e.labeled,"labeled"),k(e.multiple,"multiple"),k(e.search,"search"),k(e.scrolling,"scrolling"),k(e.selection,"selection"),k(e.simple,"simple"),Re(e.pointing,"pointing"),"dropdown",k(o.visible,"active visible"),k(o.direction==="up","upward"))),p=()=>{var A;if(o.visible)return c();(A=h.value)==null||A.focus(),r()},s=()=>{e.search&&h.value&&h.value.focus(),r()},u=()=>c(),f=q(""),d=V(()=>{const A=f.value.toLowerCase();return e.options.filter($=>{const b=typeof $=="object"?$.text:$,C=b.toLowerCase().includes(A);if(!e.multiple)return C;if(Array.isArray(e.modelValue)){const x=typeof $=="object"?Fv(e.modelValue,"text").includes(b):e.modelValue.includes(b);return C&&!x}return C})}),h=q(null),v=A=>f.value=A.target.value,_=A=>{var $;if(f.value="",e.search&&(($=h.value)==null||$.focus()),e.multiple){let b=Array.isArray(e.modelValue)?[...e.modelValue,A]:[A];return a("update:modelValue",b)}return a("update:modelValue",A)},w=A=>{if(Array.isArray(e.modelValue)){const $=e.modelValue.findIndex(b=>b===A);if($>-1){let b=Object.assign(e.modelValue);b.splice($,1),a("update:modelValue",b)}}};return rt("selection",e.selection),{computedClass:m,onClick:p,openMenu:s,closeMenu:u,filteredText:f,filteredOptions:d,inputRef:h,onInput:v,onSelect:_,removeItem:w}},render(){var e,a;const n=()=>{if(Array.isArray(this.$props.modelValue))return this.$props.modelValue.map(m=>typeof m=="object"?t("a",{class:"ui label"},[m.flag&&t("i",{class:`${m.flag} flag`},null),m.text,t("i",{class:"delete icon",onClick:Bt(()=>this.removeItem(m),["stop"])},null)]):t("a",{class:"ui label"},[m,t("i",{class:"delete icon",onClick:Bt(()=>this.removeItem(m),["stop"])},null)]))},o=()=>this.filteredOptions.filter(m=>this.$props.multiple&&Array.isArray(this.$props.modelValue)?!this.$props.modelValue.includes(m):!0).map(m=>t(Bo,{item:m,active:this.$props.modelValue&&typeof m=="object"?m.text===this.$props.modelValue.text:m===this.$props.modelValue,text:typeof m=="object"?m.text:m,flag:typeof m=="object"&&Object.keys(m).includes("flag")?m.flag:"",image:m.image,label:m.label,disabled:m.disabled,onSelect:this.onSelect},null)),r=()=>{let m={clearable:this.clearable,filtered:this.filteredText.length>0,icon:this.icon,item:this.modelValue,placeholder:this.placeholder,text:this.text};return t(Mv,Ui(m,{onRemove:()=>this.$emit("update:modelValue",null)}),null)},c=()=>{let m;return t(To,{search:this.$props.searchInMenu,onSearch:this.onInput},Hv(m=o())?m:{default:()=>[m]})};return sl(t("div",{class:this.computedClass,onClick:this.onClick},[this.$props.multiple&&n(),this.search&&t("input",{ref:m=>this.inputRef=m,type:"text",class:"search",autocomplete:"off",tabindex:0,value:this.filteredText,onInput:m=>this.onInput(m)},null),this.search&&this.multiple&&t("span",{class:"sizer"},null),r(),((a=(e=this.$slots).default)==null?void 0:a.call(e))||c()]),[[rn("clickoutside"),this.closeMenu]])}}),Bo=D({name:"SuiDropdownItem",emits:["select"],props:{active:Boolean,flag:String,description:String,icon:String,image:Object,item:[Object,String],label:Object,text:String,disabled:Boolean,onSelect:Function},setup(e,{emit:a}){const{state:n,hide:o}=Fe("useDropdown");return{computedClass:V(()=>ee(k(e.active,"active"),k(e.disabled,"disabled"),"item")),onClick:()=>{n.multiple||o(),a("select",e.item?e.item:e.text)}}},render(){return t("div",{class:this.computedClass,onClick:Bt(this.onClick,["stop"])},[this.flag&&t("i",{class:`${this.flag} flag`},null),this.icon&&t("i",{class:`${this.icon} icon`},null),this.image&&t(Ue,this.image,null),this.label&&t(H,this.label,null),this.description&&t("span",{class:"description"},[this.description]),this.text])}}),To=D({name:"SuiDropdownMenu",emits:["search"],props:{search:Boolean,onSearch:Function},setup(e,{emit:a,slots:n}){const{state:o}=Fe("useDropdown"),r=q(null),c=V(()=>{let p=()=>o.visible?`animating slide ${o.direction} in visible`:`animating slide ${o.direction} out visible`;return ee("menu","transition",k(o.visible,"visible"),k(!o.visible&&!o.animating,"hidden"),k(o.animating,p()))});mt(()=>o.visible,p=>{if(!p||!r.value)return;let s=r.value.parentElement;const{top:u,height:f}=s==null?void 0:s.getBoundingClientRect(),d=u-m.value.length*37,h=document.documentElement.clientHeight-u-f-m.value.length*37;o.direction=d>h?"up":"down"});const m=V(()=>{var p;let s=[],u=(p=n.default)==null?void 0:p.call(n);return u&&u.forEach(f=>{f.type.name==="SuiSelectItem"&&s.push(f)}),s});return{container:r,computedClass:c,onSearchInput:p=>a("search",p)}},render(){var e,a,n,o;const r=()=>t(Ce,null,[t("div",{class:"ui left icon input",onClick:Bt(()=>{},["stop"])},[t("input",{type:"text",onInput:c=>this.onSearchInput(c)},null),t("i",{class:"search icon"},null)]),t("div",{class:"ui divider"},null)]);return t("div",{ref:c=>this.container=c,class:this.computedClass},[this.$slots.header&&t("div",{class:"header"},[(a=(e=this.$slots).header)==null?void 0:a.call(e)]),this.$props.search&&r(),(o=(n=this.$slots).default)==null?void 0:o.call(n)])}}),Nv={install(e){e.component(ec.name,ec),e.component(Bo.name,Bo),e.component(To.name,To)}},tc=D({name:"SuiEmbed",props:{active:Boolean,aspectRatio:Boolean,autoplay:Boolean,id:String,placeholder:String,source:String,url:String},setup(e){const a=q(e.active),n=()=>{a.value=!a.value},o=()=>e.source==="youtube"?[`//www.youtube.com/embed/${e.id}`,"?autohide=true",`&amp;autoplay=${e.autoplay}`,"&amp;jsapi=false"].join(""):e.url,r=V(()=>ee("ui",e.aspectRatio,k(a.value,"active"),"embed"));return{active:a,getSrc:o,clickHandler:n,computedClass:r}},render(){let e=[J("i",{class:"video play icon"}),J("img",{class:"placeholder",src:this.placeholder})];return this.active&&e.push(J("div",{class:"embed"},J("iframe",{src:this.getSrc()}))),J("div",{class:this.computedClass,onClick:this.clickHandler},e)}}),Ov={install(e){e.component(tc.name,tc)}};function jv(e){return jo()?(Pc(e),!0):!1}function Nm(e){return typeof e=="function"?e():g(e)}const Om=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Gv=Object.prototype.toString,qv=e=>Gv.call(e)==="[object Object]",Bl=()=>{},Uv=Yv();function Yv(){var e,a;return Om&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((a=window==null?void 0:window.navigator)==null?void 0:a.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function Ia(e){var a;const n=Nm(e);return(a=n==null?void 0:n.$el)!=null?a:n}const jm=Om?window:void 0;function Vn(...e){let a,n,o,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,o,r]=e,a=jm):[a,n,o,r]=e,!a)return Bl;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const c=[],m=()=>{c.forEach(f=>f()),c.length=0},p=(f,d,h,v)=>(f.addEventListener(d,h,v),()=>f.removeEventListener(d,h,v)),s=mt(()=>[Ia(a),Nm(r)],([f,d])=>{if(m(),!f)return;const h=qv(d)?{...d}:d;c.push(...n.flatMap(v=>o.map(_=>p(f,v,_,h))))},{immediate:!0,flush:"post"}),u=()=>{s(),m()};return jv(u),u}let ic=!1;function Jv(e,a,n={}){const{window:o=jm,ignore:r=[],capture:c=!0,detectIframe:m=!1}=n;if(!o)return Bl;Uv&&!ic&&(ic=!0,Array.from(o.document.body.children).forEach(f=>f.addEventListener("click",Bl)),o.document.documentElement.addEventListener("click",Bl));let p=!0;const s=f=>r.some(d=>{if(typeof d=="string")return Array.from(o.document.querySelectorAll(d)).some(h=>h===f.target||f.composedPath().includes(h));{const h=Ia(d);return h&&(f.target===h||f.composedPath().includes(h))}}),u=[Vn(o,"click",f=>{const d=Ia(e);if(!(!d||d===f.target||f.composedPath().includes(d))){if(f.detail===0&&(p=!s(f)),!p){p=!0;return}a(f)}},{passive:!0,capture:c}),Vn(o,"pointerdown",f=>{const d=Ia(e);p=!s(f)&&!!(d&&!f.composedPath().includes(d))},{passive:!0}),m&&Vn(o,"blur",f=>{setTimeout(()=>{var d;const h=Ia(e);((d=o.document.activeElement)==null?void 0:d.tagName)==="IFRAME"&&!(h!=null&&h.contains(o.document.activeElement))&&a(f)},0)})].filter(Boolean);return()=>u.forEach(f=>f())}function Gm(e,a="scale"){const n=q(e.modelValue?"open":"closed");return mt(()=>e.modelValue,o=>{n.value=o?"opening":"closing"}),{animationClasses:V(()=>{switch(n.value){case"opening":return`animating ${a} in`;case"open":return"visible active";case"closing":return`visible active animating ${a} out`;case"closed":return"hidden"}}),isClosed:V(()=>n.value==="closed"),onAnimationEnd:()=>n.value=e.modelValue?"open":"closed"}}const Wv=D({name:"SuiModalDemmer",props:{blurring:Boolean,inverted:Boolean,modelValue:Boolean},setup(e){const{animationClasses:a,isClosed:n,onAnimationEnd:o}=Gm(e,"fade"),r=V(()=>ee("ui","page modals dimmer transition",k(e.inverted,"inverted"),a.value)),c=V(()=>({display:n.value?"none !important":"flex !important",animationDuration:"500ms"})),m=V(()=>ee("dimmable","dimmed",k(e.blurring,"blurring")));return mt(()=>e.modelValue,p=>{if(p){document.body.classList.add(...m.value.split(" "));return}document.body.classList.remove(...m.value.split(" "))}),{className:r,style:c,onAnimationEnd:o}},render(){var e,a;return t("div",{class:this.className,style:this.style,onAnimationend:this.onAnimationEnd},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),ac=D({name:"SuiModal",props:{basic:Boolean,closeIcon:Boolean,dimmer:String,modelValue:Boolean,size:String,closable:{type:Boolean,default:!0},overlay:Boolean,fullscreen:Boolean},setup(e,{emit:a}){const n=q(),{animationClasses:o,isClosed:r}=Gm(e),c=V(()=>ee("ui",e.size,k(e.basic,"basic"),k(e.overlay,"overlay"),k(e.fullscreen,"fullscreen"),"modal","transition",o.value)),m=V(()=>({display:r.value?"none !important":"block !important",animationDuration:"500ms"})),p=()=>a("update:modelValue",!1);return Jv(n,()=>e.closable&&a("update:modelValue",!1)),{computedClass:c,style:m,close:p,modalRef:n}},render(){return t(pn,{to:"body"},{default:()=>[t(Wv,{blurring:this.dimmer==="blurring",inverted:this.dimmer==="inverted",modelValue:this.modelValue},{default:()=>{var e,a;return[t("div",{class:this.computedClass,style:this.style,onClick:n=>n.stopPropagation(),ref:n=>this.modalRef=n},[this.closeIcon&&t("i",{"aria-hidden":"true",class:"close icon",onClick:this.close},null),(a=(e=this.$slots).default)==null?void 0:a.call(e)])]}})]})}}),lc=D({name:"SuiModalActions",render(){var e,a;return t("div",{class:"actions"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),nc=D({name:"SuiModalContent",props:{image:Boolean,scrolling:Boolean},setup(e){return{computedClass:V(()=>ee(k(e.image,"image"),k(e.scrolling,"scrolling"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),oc=D({name:"SuiModalDescription",render(){var e,a;return J("div",{class:"description"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),sc=D({name:"SuiModalHeader",render(){var e,a;return J("div",{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Kv={install(e){e.component(ac.name,ac),e.component(lc.name,lc),e.component(nc.name,nc),e.component(oc.name,oc),e.component(sc.name,sc)}},Xv=e=>{const a=q(!1),n=Qn(e,"position"),o=q(null),r=Qn(e,"trigger"),c=()=>{a.value=!0,wa(()=>p())},m=()=>{a.value=!1},p=()=>{if(!o.value||!r.value)return;let s=0,u=0;const f=o.value,d=r.value.$el;f.style.transform=`translate(${s}px, ${u}px)`;const{top:h,left:v,width:_,height:w}=d.getBoundingClientRect(),A=f.getBoundingClientRect(),{pageXOffset:$,pageYOffset:b}=window;if(n.value.includes("top")?(s=$+v,u=b+h-f.offsetTop-f.offsetHeight):(s=v,u=h+w-A.top),n.value.includes("right")){const C=_-A.width;s=v+C}if(n.value.includes("center")){const C=_/2-A.width/2;s=v+C}n.value==="right center"&&(s=v+_,u=h+w/2-A.top-A.height/2),n.value==="left center"&&(s=v-A.width,u=h+w/2-A.top-A.height/2),f.style.display="flex",f.style.position="absolute",f.style.transform=`translate(${s}px, ${u}px)`};return{show:a,showPopup:c,hidePopup:m,placement:n,popupRef:o,triggerRef:r}},rc=D({name:"SuiPopup",props:{basic:Boolean,content:String,flowing:Boolean,header:String,inverted:Boolean,position:{type:String,default:"top left"},size:String,trigger:Object,wide:[Boolean,String]},setup(e,{slots:a}){const{show:n,showPopup:o,hidePopup:r,popupRef:c,triggerRef:m}=Xv(e);os(()=>{var h,v,_;(h=m.value)!=null&&h.$el&&((v=m.value)==null||v.$el.addEventListener("mouseenter",o),(_=m.value)==null||_.$el.addEventListener("mouseleave",r))});const p=q(n.value?"open":"close");V(()=>p.value!=="closed"),mt(()=>n.value,h=>{p.value=h?"opening":"closing"});const s=(h,v="scale")=>{switch(h){case"opening":return`animating ${v} in`;case"open":return"visible active";case"closing":return`visible active animating ${v} out`;case"closed":return"hidden"}},u=()=>p.value=n.value?"open":"closed";yi(()=>{var h;(h=c.value)==null||h.addEventListener("animationend",u,!0)}),qi(()=>{var h;(h=c.value)==null||h.removeEventListener("animationend",u)});const f={position:"initial",animationDuration:"200ms"},d=V(()=>ee("ignored ui",e.position,e.size,k(e.basic,"basic"),k(e.flowing,"flowing"),k(e.inverted,"inverted"),Re(e.wide,"wide"),"popup transition",s(p.value,"scale")));return()=>t(pn,{to:"body"},{default:()=>{var h;return[t("div",{ref:c,style:"display: flex; position: absolute; transform: translate(0px, 0px);"},[t("div",{class:d.value,style:f},[e.header&&t("div",{class:"header"},[e.header]),t("div",{class:"content"},[e.content?e.content:(h=a.default)==null?void 0:h.call(a)])])])]}})}}),Qv={install(e){e.component(rc.name,rc)}},Zv=["top","bottom","left"],ws=()=>({attached:{type:String,validator:e=>Zv.includes(e)}}),qm=e=>({attachedClasses:V(()=>ee(e.attached,{attached:e.attached}))}),e1=["red","orange","yellow","olive","green","teal","blue","purple","violet","pink","brown","grey","black"],Um=()=>({color:{type:String,validator:e=>e1.includes(e)}}),Ym=e=>({colorClasses:V(()=>ee(e.inverted&&"inverted",e.color))}),Jl=D({name:"SuiProgress",props:{active:Boolean,disabled:Boolean,error:Boolean,indicating:Boolean,inverted:Boolean,label:String,percent:Number,progress:[Boolean,String],size:String,success:Boolean,warning:Boolean,...ws(),...Um()},setup(e){const{attachedClasses:a}=qm(e),{colorClasses:n}=Ym(e),o=V(()=>ee("ui",n.value,e.size,k(e.active||e.indicating,"active"),k(e.disabled,"disabled"),k(e.error,"error"),k(e.indicating,"indicating"),k(e.success,"success"),k(e.warning,"warning"),a.value,"progress")),r=V(()=>ee(Re(e.progress,"progress"))),c=V(()=>e.progress!=="centered"?{}:{right:0});return()=>t("div",{class:o.value,"data-percent":e.percent},[t("div",{class:"bar",style:`width: ${e.percent}%; transition-duration: 300ms;`},[e.progress&&t("div",{class:r.value,style:c.value},[`${e.percent}%`])]),e.label&&t("div",{class:"label"},[e.label])])}}),t1={install(e){e.component(Jl.name,Jl)}},i1=D({name:"SuiRatingIcon",props:{icon:String,index:{type:Number,default:0}},setup(e){const a=Fe("rating",q(0)),n=Fe("updateRating"),o=Fe("selectedIndex",q(0)),r=Fe("updateSelectedIndex"),c=Fe("clearable",!1),m=Fe("disabled",!1),p=()=>{if(!m){if(c&&e.index===a.value){n(0),r(0);return}n(e.index)}},s=()=>{m||r(e.index)},u=V(()=>e.index<=a.value),f=V(()=>e.index<=o.value),d=V(()=>ee(e.icon,k(u.value,"active"),k(f.value,"selected"),"icon"));return()=>t("i",{class:d.value,onClick:()=>p(),onMouseenter:()=>s()},null)}}),uc=D({name:"SuiRating",props:{clearable:Boolean,color:String,defaultRating:{type:Number,default:0},disabled:Boolean,icon:{type:String,default:"star"},maxRating:{type:Number,default:1},modelValue:Number,size:String},setup(e,{emit:a}){const n=q(e.modelValue||e.defaultRating),o=q(!1),r=q(0),c=f=>{n.value=f,a("update:modelValue",f),a("change",f)},m=f=>r.value=f,p=()=>{e.disabled||(o.value=!0)},s=()=>{e.disabled||(o.value=!1,m(0))},u=V(()=>ee("ui",e.color,e.icon,e.size,k(e.disabled,"disabled"),"rating",k(o.value,"selected")));return rt("rating",n),rt("updateRating",c),rt("selectedIndex",r),rt("updateSelectedIndex",m),rt("clearable",e.clearable),rt("disabled",e.disabled),()=>t("div",{class:u.value,onMouseenter:()=>p(),onMouseleave:()=>s()},[[...Array(e.maxRating)].map((f,d)=>t(i1,{icon:e.icon,index:d+1},null))])}}),a1={install(e){e.component(uc.name,uc)}},cc=D({name:"SuiSearch",props:{icon:String,placeholder:String},setup(e){return()=>t("div",{class:"ui search"},[t("div",{class:"ui icon input"},[t("input",{type:"text",class:"prompt",placeholder:e.placeholder},null),t("i",{class:"search icon"},null)]),t("div",{class:"results"},null)])}}),l1={install(e){e.component(cc.name,cc)}},dc=D({name:"SuiSidebar",directives:{clickoutside:Ss},emits:["update:visible","show","hide"],props:{animation:{type:String,default:"overlay"},dimmed:Boolean,direction:{type:String,default:"left"},icon:[Boolean,String],inverted:Boolean,visible:Boolean},setup(e,{emit:a}){const n=Zt({animating:!1}),o=V(()=>{const r=e.direction==="right"||e.direction==="left";return ee("ui","sidebar",e.direction,e.animation,k(e.inverted,"inverted"),k(e.visible,"visible"),k(n.animating,"animating"),k(r,"vertical"),Re(e.icon,"icon"),"menu")});return mt(()=>e.visible,()=>{if(n.animating=!0,setTimeout(()=>n.animating=!1,500),e.dimmed){const r=document.querySelector(".pusher");r&&r.classList.toggle("dimmed")}}),{computedClass:o,onClickPusher:r=>{const c=r.path||r.composedPath&&r.composedPath();c&&c.find(m=>m.classList&&m.classList.contains("pusher"))&&e.visible&&a("update:visible",!1)}}},render(){var e,a;return sl(t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]),[[rn("clickoutside"),this.onClickPusher]])}}),n1={install:e=>{e.component(dc.name,dc)}};class Hn{static getWindowScrollTop(){let{documentElement:a}=document;return(window.pageYOffset||a.scrollTop)-(a.clientTop||0)}static getWindowScrollLeft(){let{documentElement:a}=document;return(window.pageXOffset||a.scrollLeft)-(a.clientLeft||0)}static hasClass(a,n){return a.classList.contains(n)}}const mc=D({name:"SuiSlider",emits:["change","slideend","update:modelValue"],props:{color:String,disabled:Boolean,inverted:Boolean,labeled:[Boolean,String],labels:Array,max:{type:Number,default:10},min:{type:Number,default:0},modelValue:{type:[Number,Array],default:0},range:Boolean,reversed:Boolean,size:String,step:{type:Number,default:1},vertical:Boolean,verticalHeight:{type:[Number,String],default:200}},setup(e,{emit:a}){const n=V(()=>ee("ui",e.color,e.size,k(e.disabled,"disabled"),k(e.inverted,"inverted"),k(e.reversed,"reversed"),k(e.vertical,"vertical"),Re(e.labeled,"labeled"),"slider")),o=()=>100*(e.modelValue[0]-e.min)/(e.max-e.min),r=()=>100*(e.modelValue[1]-e.min)/(e.max-e.min),c=V(()=>{if(e.range)return e.reversed&&!e.vertical?{right:o()+"%",width:r()-o()+"%"}:e.vertical?e.reversed?{bottom:o()+"%",height:r()-o()+"%"}:{top:o()+"%",height:r()-o()+"%"}:{left:o()+"%",width:r()-o()+"%"};let G=e.modelValue>e.max?e.max:e.modelValue;return e.reversed?e.vertical?{bottom:"0%",top:`${100-(G-e.min)/(e.max-e.min)*100}%`}:{right:"0%",left:`${100-(G-e.min)/(e.max-e.min)*100}%`}:e.vertical?{top:"0%",bottom:`${100-(G-e.min)/(e.max-e.min)*100}%`}:{left:"0%",right:`${100-(G-e.min)/(e.max-e.min)*100}%`}}),m=V(()=>{let G=e.range?e.modelValue[0]:e.modelValue>e.max?e.max:e.modelValue;return!e.reversed&&e.vertical?{top:`calc(${(G-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:e.reversed&&e.vertical?{top:"auto",bottom:`calc(${(G-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.reversed&&!e.vertical?{left:"auto",right:`calc(${(G-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{left:`calc(${(G-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),p=V(()=>{let G=e.modelValue[1]>e.max?e.max:e.modelValue[1];return e.reversed&&!e.vertical?{left:"auto",right:`calc(${(G-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.vertical?e.reversed?{top:"auto",bottom:`calc(${(G-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{top:`calc(${(G-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:{left:`calc(${(G-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),s=V(()=>e.labels?e.labels:[...Array(e.max-e.min+1)].map((G,W)=>W*e.step+e.min)),u=()=>{var G,W;let ce=1,ie=f(),Te=(e.vertical?(G=h.value)==null?void 0:G.clientHeight:(W=h.value)==null?void 0:W.clientWidth)||0,Je=1;if(Te>0)for(;Te/ie*Je<100;)ie%Je||(ce=Je),Je+=1;return ce},f=()=>Math.round((e.max-e.min)/e.step),d=q(null),h=q(null),v=q(0),_=q(0),w=q(0),A=q(0),$=()=>{if(!d.value)return;let G=d.value.getBoundingClientRect();v.value=G.left+Hn.getWindowScrollLeft(),_.value=G.top+Hn.getWindowScrollTop(),w.value=d.value.offsetWidth,A.value=d.value.offsetHeight},b=q(0),C=G=>{let{pageX:W,pageY:ce}=G.touches?G.touches[0]:G,ie,Te;e.vertical?ie=(_.value+A.value-ce)*100/A.value:ie=(W-v.value)*100/w.value,Te=(e.max-e.min)*(ie/100)+e.min;const Je=e.range?e.modelValue[b.value]:e.modelValue||0;Te=Je+Math.round(Te/e.step-Je/e.step)*e.step,e.reversed&&(Te=e.max-Te+e.min),e.vertical&&(Te=e.max-Te+e.min),x(Te)},x=G=>{let W=G,ce;if(e.range)if(ce=e.modelValue?[...e.modelValue]:[],b.value===0){let ie=e.modelValue?e.modelValue[1]:e.max;W<e.min?W=e.min:W>ie&&(W=ie),ce[0]=W,ce[1]=ce[1]||e.max}else{let ie=e.modelValue?e.modelValue[0]:e.min;W>e.max?W=e.max:W<ie&&(W=ie),ce[0]=ce[0]||e.min,ce[1]=W}else W<e.min&&(W=e.min),W>e.max&&(W=e.max),ce=W;a("update:modelValue",ce),a("change",ce)},B=q(!1),E=G=>B.value=G,F=(G,W=0)=>{E(!0),$(),b.value=W,G.preventDefault()},M=G=>{B.value&&(E(!1),document.removeEventListener("mousemove",z),a("slideend",{event:G,value:e.modelValue}))},z=G=>{B.value&&(C(G),G==null||G.preventDefault())},j=(G,W=0)=>{e.disabled||(F(G,W),document.addEventListener("mousemove",z),document.addEventListener("mouseup",M),G.preventDefault())},K=(G,W=0)=>{switch(b.value=W,G.code){case"ArrowUp":e.vertical&&(e.reversed?U():me()),G.preventDefault();break;case"ArrowDown":e.vertical&&(e.reversed?me():U()),G.preventDefault();break;case"ArrowRight":e.reversed?me():U(),G.preventDefault();break;case"ArrowLeft":e.reversed?U():me(),G.preventDefault();break}},U=()=>{let G=0;e.range?G=e.modelValue[b.value]+e.step:G=e.modelValue+e.step,x(G)},me=()=>{let G=0;e.range?G=e.modelValue[b.value]-e.step:G=e.modelValue-e.step,x(G)},Be=G=>{if(!e.disabled&&!Hn.hasClass(G.target,"thumb")){if(e.range){let W=(e.vertical?G.offsetY/G.target.clientHeight:G.offsetX/G.target.clientWidth)*100,ce=(o()+r())/2;W<ce?b.value=e.reversed?1:0:b.value=e.reversed?0:1}$(),C(G)}};return()=>t("div",{ref:G=>d.value=G,class:n.value,style:e.vertical?`height: ${e.verticalHeight}px;`:""},[t("div",{class:"inner",onClick:Be},[t("div",{class:"track",ref:G=>h.value=G},null),t("div",{class:"track-fill",style:c.value},null),t("div",{class:"thumb",style:m.value,onMousedown:G=>j(G),onTouchstart:G=>F(G),onTouchmove:G=>z(G),onTouchend:G=>M(G),onKeydown:G=>K(G),tabindex:0},null),e.range&&t("div",{class:"thumb second",style:p.value,onMousedown:G=>j(G,1),onTouchstart:G=>F(G,1),onTouchmove:G=>z(G),onTouchend:G=>M(G),onKeydown:G=>K(G,1),tabindex:0},null)]),e.labeled&&t("ul",{class:"auto labels"},[[...Array(f()+1)].map((G,W)=>{let ce=W/f();return W%u()?t("li",{class:"halftick label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${ce} + 7px);`},null):t("li",{class:"label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${ce} + 7px);`},[e.reversed&&!e.vertical?e.labels?e.labels[f()-W]:s.value[f()-W]:e.labels?e.labels[W]:s.value[W]])})])])}}),o1={install(e){e.component(mc.name,mc)}},Lo=D({name:"SuiTabPanel",props:{active:Boolean,attached:[Boolean,String],header:String},setup(e){return{computedClass:V(()=>ee("ui tab segment",k(e.active,"active"),Re(e.attached,"attached")))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),pc=D({name:"SuiTab",emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},pointing:Boolean,secondary:Boolean,text:Boolean},setup(e,{emit:a,slots:n}){const o=q(e.activeIndex);mt(()=>e.activeIndex,u=>{o.value=u});const r=(u,f)=>{o.value!==f&&(o.value=f,a("update:activeIndex",f),a("tab-change",{event:u,index:f})),a("tab-click",{event:u,index:f})},c=(u,f)=>{u.key==="Enter"&&r(u,f)},m=V(()=>{var u,f;let d=[];return(u=n.default)!=null&&u.call(n)&&((f=n.default)==null||f.call(n).forEach(h=>{h.type.name==="SuiTabPanel"&&d.push(h)})),d}),p=V(()=>!e.secondary&&!e.pointing&&!e.text),s=V(()=>ee("ui menu",k(p.value,"tabular attached"),k(e.pointing,"pointing"),k(e.secondary,"secondary"),k(e.text,"text")));return{onClick:r,onKeyDown:c,tabIndex:o,tabs:m,tabMenuClass:s,isDefaultMenu:p}},render(){const e=()=>this.tabs.map((n,o)=>t("a",{class:`item ${this.tabIndex===o&&"active"}`,onClick:r=>this.onClick(r,o),onKeydown:r=>this.onKeyDown(r,o),tabindex:0},[n.props.header])),a=()=>this.tabs.map((n,o)=>t(Lo,Ui(n.props,{active:this.tabIndex===o,attached:this.isDefaultMenu?"bottom":!1}),{default:()=>{var r,c;return[(c=(r=n.children).default)==null?void 0:c.call(r)]}}));return t(Ce,null,[t("div",{class:this.tabMenuClass},[e()]),a()])}}),s1={install(e){e.component(pc.name,pc),e.component(Lo.name,Lo)}};function r1(e,a){e.indexOf(a)===-1&&e.push(a)}const Jm=(e,a,n)=>Math.min(Math.max(n,e),a),Dt={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},Wl=e=>typeof e=="number",na=e=>Array.isArray(e)&&!Wl(e[0]),u1=(e,a,n)=>{const o=a-e;return((n-e)%o+o)%o+e};function c1(e,a){return na(e)?e[u1(0,e.length,a)]:e}const Wm=(e,a,n)=>-n*e+n*a+e,Km=()=>{},_i=e=>e,Cs=(e,a,n)=>a-e===0?1:(n-e)/(a-e);function Xm(e,a){const n=e[e.length-1];for(let o=1;o<=a;o++){const r=Cs(0,a,o);e.push(Wm(n,1,r))}}function d1(e){const a=[0];return Xm(a,e-1),a}function m1(e,a=d1(e.length),n=_i){const o=e.length,r=o-a.length;return r>0&&Xm(a,r),c=>{let m=0;for(;m<o-2&&!(c<a[m+1]);m++);let p=Jm(0,1,Cs(a[m],a[m+1],c));return p=c1(n,m)(p),Wm(e[m],e[m+1],p)}}const Qm=e=>Array.isArray(e)&&Wl(e[0]),Eo=e=>typeof e=="object"&&!!e.createAnimation,va=e=>typeof e=="function",p1=e=>typeof e=="string",qa={ms:e=>e*1e3,s:e=>e/1e3},Zm=(e,a,n)=>(((1-3*n+3*a)*e+(3*n-6*a))*e+3*a)*e,f1=1e-7,g1=12;function h1(e,a,n,o,r){let c,m,p=0;do m=a+(n-a)/2,c=Zm(m,o,r)-e,c>0?n=m:a=m;while(Math.abs(c)>f1&&++p<g1);return m}function Ra(e,a,n,o){if(e===a&&n===o)return _i;const r=c=>h1(c,0,1,e,n);return c=>c===0||c===1?c:Zm(r(c),a,o)}const _1=(e,a="end")=>n=>{n=a==="end"?Math.min(n,.999):Math.max(n,.001);const o=n*e,r=a==="end"?Math.floor(o):Math.ceil(o);return Jm(0,1,r/e)},fc={ease:Ra(.25,.1,.25,1),"ease-in":Ra(.42,0,1,1),"ease-in-out":Ra(.42,0,.58,1),"ease-out":Ra(0,0,.58,1)},b1=/\((.*?)\)/;function gc(e){if(va(e))return e;if(Qm(e))return Ra(...e);if(fc[e])return fc[e];if(e.startsWith("steps")){const a=b1.exec(e);if(a){const n=a[1].split(",");return _1(parseFloat(n[0]),n[1].trim())}}return _i}class ep{constructor(a,n=[0,1],{easing:o,duration:r=Dt.duration,delay:c=Dt.delay,endDelay:m=Dt.endDelay,repeat:p=Dt.repeat,offset:s,direction:u="normal",autoplay:f=!0}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=_i,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((h,v)=>{this.resolve=h,this.reject=v}),o=o||Dt.easing,Eo(o)){const h=o.createAnimation(n);o=h.easing,n=h.keyframes||n,r=h.duration||r}this.repeat=p,this.easing=na(o)?_i:gc(o),this.updateDuration(r);const d=m1(n,s,na(o)?o.map(gc):_i);this.tick=h=>{var v;c=c;let _=0;this.pauseTime!==void 0?_=this.pauseTime:_=(h-this.startTime)*this.rate,this.t=_,_/=1e3,_=Math.max(_-c,0),this.playState==="finished"&&this.pauseTime===void 0&&(_=this.totalDuration);const w=_/this.duration;let A=Math.floor(w),$=w%1;!$&&w>=1&&($=1),$===1&&A--;const b=A%2;(u==="reverse"||u==="alternate"&&b||u==="alternate-reverse"&&!b)&&($=1-$);const C=_>=this.totalDuration?1:Math.min($,1),x=d(this.easing(C));a(x),this.pauseTime===void 0&&(this.playState==="finished"||_>=this.totalDuration+m)?(this.playState="finished",(v=this.resolve)===null||v===void 0||v.call(this,x)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},f&&this.play()}play(){const a=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=a-this.pauseTime:this.startTime||(this.startTime=a),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var a;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(a=this.reject)===null||a===void 0||a.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(a){this.duration=a,this.totalDuration=a*(this.repeat+1)}get currentTime(){return this.t}set currentTime(a){this.pauseTime!==void 0||this.rate===0?this.pauseTime=a:this.startTime=performance.now()-a/this.rate}get playbackRate(){return this.rate}set playbackRate(a){this.rate=a}}class v1{setAnimation(a){this.animation=a,a==null||a.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const Nn=new WeakMap;function tp(e){return Nn.has(e)||Nn.set(e,{transforms:[],values:new Map}),Nn.get(e)}function y1(e,a){return e.has(a)||e.set(a,new v1),e.get(a)}const S1=["","X","Y","Z"],w1=["translate","scale","rotate","skew"],Kl={x:"translateX",y:"translateY",z:"translateZ"},hc={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:e=>e+"deg"},C1={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:e=>e+"px"},rotate:hc,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:_i},skew:hc},il=new Map,As=e=>`--motion-${e}`,Xl=["x","y","z"];w1.forEach(e=>{S1.forEach(a=>{Xl.push(e+a),il.set(As(e+a),C1[e])})});const A1=(e,a)=>Xl.indexOf(e)-Xl.indexOf(a),k1=new Set(Xl),ip=e=>k1.has(e),x1=(e,a)=>{Kl[a]&&(a=Kl[a]);const{transforms:n}=tp(e);r1(n,a),e.style.transform=$1(n)},$1=e=>e.sort(A1).reduce(B1,"").trim(),B1=(e,a)=>`${e} ${a}(var(${As(a)}))`,Do=e=>e.startsWith("--"),_c=new Set;function T1(e){if(!_c.has(e)){_c.add(e);try{const{syntax:a,initialValue:n}=il.has(e)?il.get(e):{};CSS.registerProperty({name:e,inherits:!1,syntax:a,initialValue:n})}catch{}}}const On=(e,a)=>document.createElement("div").animate(e,a),bc={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{On({opacity:[1]})}catch{return!1}return!0},finished:()=>!!On({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{On({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},jn={},Qi={};for(const e in bc)Qi[e]=()=>(jn[e]===void 0&&(jn[e]=bc[e]()),jn[e]);const L1=.015,E1=(e,a)=>{let n="";const o=Math.round(a/L1);for(let r=0;r<o;r++)n+=e(Cs(0,o-1,r))+", ";return n.substring(0,n.length-2)},vc=(e,a)=>va(e)?Qi.linearEasing()?`linear(${E1(e,a)})`:Dt.easing:Qm(e)?D1(e):e,D1=([e,a,n,o])=>`cubic-bezier(${e}, ${a}, ${n}, ${o})`;function I1(e,a){for(let n=0;n<e.length;n++)e[n]===null&&(e[n]=n?e[n-1]:a());return e}const R1=e=>Array.isArray(e)?e:[e];function Io(e){return Kl[e]&&(e=Kl[e]),ip(e)?As(e):e}const Cl={get:(e,a)=>{a=Io(a);let n=Do(a)?e.style.getPropertyValue(a):getComputedStyle(e)[a];if(!n&&n!==0){const o=il.get(a);o&&(n=o.initialValue)}return n},set:(e,a,n)=>{a=Io(a),Do(a)?e.style.setProperty(a,n):e.style[a]=n}};function ap(e,a=!0){if(!(!e||e.playState==="finished"))try{e.stop?e.stop():(a&&e.commitStyles(),e.cancel())}catch{}}function z1(e,a){var n;let o=(a==null?void 0:a.toDefaultUnit)||_i;const r=e[e.length-1];if(p1(r)){const c=((n=r.match(/(-?[\d.]+)([a-z%]*)/))===null||n===void 0?void 0:n[2])||"";c&&(o=m=>m+c)}return o}function P1(){return window.__MOTION_DEV_TOOLS_RECORD}function F1(e,a,n,o={},r){const c=P1(),m=o.record!==!1&&c;let p,{duration:s=Dt.duration,delay:u=Dt.delay,endDelay:f=Dt.endDelay,repeat:d=Dt.repeat,easing:h=Dt.easing,persist:v=!1,direction:_,offset:w,allowWebkitAcceleration:A=!1,autoplay:$=!0}=o;const b=tp(e),C=ip(a);let x=Qi.waapi();C&&x1(e,a);const B=Io(a),E=y1(b.values,B),F=il.get(B);return ap(E.animation,!(Eo(h)&&E.generator)&&o.record!==!1),()=>{const M=()=>{var K,U;return(U=(K=Cl.get(e,B))!==null&&K!==void 0?K:F==null?void 0:F.initialValue)!==null&&U!==void 0?U:0};let z=I1(R1(n),M);const j=z1(z,F);if(Eo(h)){const K=h.createAnimation(z,a!=="opacity",M,B,E);h=K.easing,z=K.keyframes||z,s=K.duration||s}if(Do(B)&&(Qi.cssRegisterProperty()?T1(B):x=!1),C&&!Qi.linearEasing()&&(va(h)||na(h)&&h.some(va))&&(x=!1),x){F&&(z=z.map(me=>Wl(me)?F.toDefaultUnit(me):me)),z.length===1&&(!Qi.partialKeyframes()||m)&&z.unshift(M());const K={delay:qa.ms(u),duration:qa.ms(s),endDelay:qa.ms(f),easing:na(h)?void 0:vc(h,s),direction:_,iterations:d+1,fill:"both"};p=e.animate({[B]:z,offset:w,easing:na(h)?h.map(me=>vc(me,s)):void 0},K),p.finished||(p.finished=new Promise((me,Be)=>{p.onfinish=me,p.oncancel=Be}));const U=z[z.length-1];p.finished.then(()=>{v||(Cl.set(e,B,U),p.cancel())}).catch(Km),A||(p.playbackRate=1.000001)}else if(r&&C)z=z.map(K=>typeof K=="string"?parseFloat(K):K),z.length===1&&z.unshift(parseFloat(M())),p=new r(K=>{Cl.set(e,B,j?j(K):K)},z,Object.assign(Object.assign({},o),{duration:s,easing:h}));else{const K=z[z.length-1];Cl.set(e,B,F&&Wl(K)?F.toDefaultUnit(K):K)}return m&&c(e,a,z,{duration:s,delay:u,easing:h,repeat:d,offset:w},"motion-one"),E.setAnimation(p),p&&!$&&p.pause(),p}}const M1=(e,a)=>e[a]?Object.assign(Object.assign({},e),e[a]):Object.assign({},e);function V1(e,a){var n;return typeof e=="string"?a?((n=a[e])!==null&&n!==void 0||(a[e]=document.querySelectorAll(e)),e=a[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const H1=e=>e(),lp=(e,a,n=Dt.duration)=>new Proxy({animations:e.map(H1).filter(Boolean),duration:n,options:a},O1),N1=e=>e.animations[0],O1={get:(e,a)=>{const n=N1(e);switch(a){case"duration":return e.duration;case"currentTime":return qa.s((n==null?void 0:n[a])||0);case"playbackRate":case"playState":return n==null?void 0:n[a];case"finished":return e.finished||(e.finished=Promise.all(e.animations.map(j1)).catch(Km)),e.finished;case"stop":return()=>{e.animations.forEach(o=>ap(o))};case"forEachNative":return o=>{e.animations.forEach(r=>o(r,e))};default:return typeof(n==null?void 0:n[a])>"u"?void 0:()=>e.animations.forEach(o=>o[a]())}},set:(e,a,n)=>{switch(a){case"currentTime":n=qa.ms(n);case"playbackRate":for(let o=0;o<e.animations.length;o++)e.animations[o][a]=n;return!0}return!1}},j1=e=>e.finished;function G1(e,a,n){return va(e)?e(a,n):e}function q1(e){return function(a,n,o={}){a=V1(a);const r=a.length,c=[];for(let m=0;m<r;m++){const p=a[m];for(const s in n){const u=M1(o,s);u.delay=G1(u.delay,m,r);const f=F1(p,s,n[s],u,e);c.push(f)}}return lp(c,o,o.duration)}}const U1=q1(ep);function Y1(e,a={}){return lp([()=>{const n=new ep(e,[0,1],a);return n.finished.catch(()=>{}),n}],a,a.duration)}function J1(e,a,n){return(va(e)?Y1:U1)(e,a,n)}const _e=(e,a)=>(n,{duration:o,keyframesOverride:r={}})=>J1(n,{...e,...r},{autoplay:!1,...a,duration:o}),yc=_e({transform:["scale(0.8) translateZ(0px)","scale(0.8) translateZ(0px)","scale(1.05) translateZ(0px)","scale(1) translateZ(0px)"],opacity:[null,.7,1,null],zIndex:[-1,-1,999,999]},{duration:.5,offset:[0,.1,.8,1]}),W1=_e({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,-1,null,-1]},{duration:.5,offset:[0,.5,.8,1]}),K1=_e({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,1,null,1]},{duration:.5,offset:[0,.5,.8,1]}),X1=_e({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(0)","scale(1)"],opacity:[0,1]},{duration:.4,offset:[0,1]}),Q1=_e({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(1)","scale(0)"],opacity:[1,0]},{duration:.4,offset:[0,1]}),Z1=_e({opacity:[0,1]},{duration:.5,offset:[0,1]}),ey=_e({opacity:[0,1],transform:["translateY(10%)","export translateY(0%)"]},{duration:.5,offset:[0,1]}),ty=_e({opacity:[0,1],transform:["translateY(-10%)","translateY(0%)"]},{duration:.5,offset:[0,1]}),iy=_e({opacity:[0,1],transform:["translateX(10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),ay=_e({opacity:[0,1],transform:["translateX(-10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),ly=_e({opacity:[1,0]},{duration:.5,offset:[0,1]}),ny=_e({opacity:[1,0],transform:["translateY(0%)","texport ranslateY(5%)"]},{duration:.5,offset:[0,1]}),oy=_e({opacity:[1,0],transform:["translateY(0%)","translateY(-5%)"]},{duration:.5,offset:[0,1]}),sy=_e({opacity:[1,0],transform:["translateX(0%)","translateX(5%)"]},{duration:.5,offset:[0,1]}),ry=_e({opacity:[1,0],transform:["translateX(0%)","translateX(-5%)"]},{duration:.5,offset:[0,1]}),uy=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["scale3d(.3, .3, .3)","scale3d(1.1, 1.1, 1.1)","scale3d(.9, .9, .9)","scale3d(1.03, 1.03, 1.03)","scale3d(.97, .97, .97)","scale3d(1, 1, 1)"],opacity:[0,null,null,1,null,1]},{duration:.6,offset:[0,.2,.4,.6,.8,1]}),cy=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, 1500px, 0","translate3d(0, -20px, 0)","translate3d(0, 10px, 0)","translate3d(0, -5px, 0)","translate3d(0, 0, 0)"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),dy=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, -1500px, 0","translate3d(0, 25px, 0)","translate3d(0, -10px, 0)","translate3d(0, 5px, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),my=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(1500px, 0, 0","translate3d(-25px, 0, 0)","translate3d(10px, 0, 0)","translate3d(-5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),py=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(-1500px, 0, 0","translate3d(25px, 0, 0)","translate3d(-10px, 0, 0)","translate3d(5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),fy=_e({transform:["scale3d(.9, .9, .9)","scale3d(1.1, 1.1, 1.1)","scale3d(1.1, 1.1, 1.1)","scale3d(.3, .3, .3)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.5,.55,1]}),gy=_e({transform:["translate3d(0, 10px, 0)","translate3d(0, -20px, 0)","translate3d(0, -20px, 0)","translate3d(0, 2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),hy=_e({transform:["translate3d(0, -10px, 0)","translate3d(0, 20px, 0)","translate3d(0, 20px, 0)","translate3d(0, -2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),_y=_e({transform:["translate3d(-20px, 0, 0)","translate3d(2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),by=_e({transform:["translate3d(20px, 0, 0)","translate3d(-2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),vy=_e({transform:["perspective(2000px) rotateY(-90deg)","perspective(2000px) rotateY(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),yy=_e({transform:["perspective(2000px) rotateY(0deg)","perspective(2000px) rotateY(90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),Sy=_e({transform:["perspective(2000px) rotateX(-90deg)","perspective(2000px) rotateX(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),wy=_e({transform:["perspective(2000px) rotateX(0deg)","perspective(2000px) rotateX(-90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),Cy=_e({transform:["scale(0.8)","scale(1)"],opacity:[0,1]},{duration:.5,offset:[0,1]}),Ay=_e({transform:["scale(1)","scale(0.9)"],opacity:[1,0]},{duration:.5,offset:[0,1]}),np={transform:["scaleY(0)","scaleY(1)"],opacity:[0,1]},op={transform:["scaleX(0)","scaleX(1)"],opacity:[0,1]},sp={transform:["scaleY(1)","scaleY(0)"],opacity:[1,0]},ky={transform:["scaleX(1)","scaleX(0)"],opacity:[1,0]},xy=_e({transformOrigin:"top center",...np},{offset:[0,1]}),$y=_e({transformOrigin:"bottom center",...np},{offset:[0,1]}),By=_e({transformOrigin:"center right",...op},{offset:[0,1]}),Ty=_e({transformOrigin:"center left",...op},{offset:[0,1]}),Ly=_e({transformOrigin:"top center",...sp},{offset:[0,1]}),Ey=_e({transformOrigin:"bottom center",...sp},{offset:[0,1]}),Sc=_e({transformOrigin:"center left",...ky},{offset:[0,1]}),wi=.8,oa={transform:["perspective(1000px) rotateX(90deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(15deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},sa={transform:["perspective(1000px) rotateY(-90deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-17.5deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},ra={transform:["perspective(1000px) rotateX(0deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(17.5deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},ua={transform:["perspective(1000px) rotateY(0deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(-10deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},Dy=_e({transformOrigin:"top center",transform:oa.transform,opacity:oa.opacity},{duration:wi,offset:oa.offset}),Iy=_e({transformOrigin:"bottom center",transform:oa.transform,opacity:oa.opacity},{duration:wi,offset:oa.offset}),Ry=_e({transformOrigin:"center right",transform:sa.transform,opacity:sa.opacity},{duration:wi,offset:sa.offset}),zy=_e({transformOrigin:"center left",transform:sa.transform,opacity:sa.opacity},{duration:wi,offset:sa.offset}),Py=_e({transformOrigin:"top center",transform:ra.transform,opacity:ra.opacity},{duration:wi,offset:ra.offset}),Fy=_e({transformOrigin:"bottom center",transform:ra.transform,opacity:ra.opacity},{duration:wi,offset:ra.offset}),My=_e({transformOrigin:"center right",transform:ua.transform,opacity:ua.opacity},{duration:wi,offset:ua.offset}),Vy=_e({transformOrigin:"center left",transform:ua.transform,opacity:ua.opacity},{duration:wi,offset:ua.offset}),Hy=_e({transform:["scale(0)","scale(1)"],opacity:[1,1]},{offset:[0,1]}),Ny=_e({transform:["scale(1)","scale(0)"],opacity:[1,1]},{offset:[0,1]}),Oy=_e({transform:["translateY(0)","translateY(0)","translateY(-30px)","translateY(0)","translateY(-15px)","translateY(0)","translateY(0)"]},{offset:[0,.2,.4,.5,.6,.8,1]}),jy=_e({opacity:[1,0,1,0,1]},{offset:[0,.25,.5,.75,1]}),Gy=_e({animationTimingFunction:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",backgroundColor:["#FCFCFD","#FFF6CD","FCFCFD"]},{duration:2,offset:[0,.3,1]}),qy=_e({transform:["scale3d(1, 1, 1)","scale3d(1.25, 0.75, 1)","scale3d(0.75, 1.25, 1)","scale3d(1.15, 0.85, 1)","scale3d(0.95, 1.05, 1)","scale3d(1.05, 0.95, 1)","scale3d(1, 1, 1)"]},{duration:.75,offset:[0,.3,.4,.5,.6,.75,1]}),Uy=_e({transform:["scale(1)","scale(0.9)","scale(1)"],opacity:[1,.7,1]},{offset:[0,.5,1]}),Yy=_e({transform:["translateX(0)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(0)"]}),Jy=_e({transform:["scale(1)","scale(0.9) rotate(-3deg)","scale(0.9) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1) rotate(0)"]},{offset:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]}),Wy={browse:[yc,W1],"browse right":[yc,K1],drop:[X1,Q1],fade:[Z1,ly],"fade up":[ey,ny],"fade down":[ty,oy],"fade left":[iy,sy],"fade right":[ay,ry],fly:[uy,fy],"fly up":[cy,gy],"fly down":[dy,hy],"fly left":[my,_y],"fly right":[py,by],"horizontal flip":[vy,yy],"vertical flip":[Sy,wy],scale:[Cy,Ay],"slide up":[$y,Ey],"slide down":[xy,Ly],"slide left":[By,Sc],"slide right":[Ty,Sc],"swing up":[Iy,Fy],"swing down":[Dy,Py],"swing left":[Ry,My],"swing right":[zy,Vy],zoom:[Hy,Ny]},Ky={bounce:[Oy,void 0],flash:[jy,void 0],glow:[Gy,void 0],jiggle:[qy,void 0],pulse:[Uy,void 0],shake:[Yy,void 0],tada:[Jy,void 0]},rp=e=>({...Wy,...Ky})[e],Xy=e=>{const[a,n]=rp(e.animation),o=V(()=>e.duration?e.duration/1e3:.5),r=V(()=>(m,p)=>{if(!a)return p();const s=a(m,{duration:o.value});s.play(),s.finished.then(p)}),c=V(()=>(m,p)=>{if(!n)return p();const s=n(m,{duration:o.value});s.play(),s.finished.then(p)});return{onEnter:r,onLeave:c}},wc=D({name:"SuiTransition",props:{animation:{type:String,default:"fade"},duration:{type:Number,default:500}},setup(e){const{onEnter:a,onLeave:n}=Xy(e);return{onEnter:a,onLeave:n}},render(){return t(hn,{onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})}}),Ro=D({name:"SuiTransitionGroup",props:{tag:String,animation:{type:String,default:"fade"},enterKeyframes:{type:Function,default:()=>({})},leaveKeyframes:{type:Function,default:()=>({})}},setup(e){const[a,n]=rp(e.animation),o=V(()=>(c,m)=>{if(!a)return m();const p=a(c,{duration:.5,keyframesOverride:e.enterKeyframes(c)});p.play(),p.finished.then(m)}),r=V(()=>(c,m)=>{if(!n)return m();const p=n(c,{duration:.5,keyframesOverride:e.leaveKeyframes(c)});p.play(),p.finished.then(m)});return{onEnter:o,onLeave:r}},render(){return t(cm,{tag:this.tag,onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})}}),Qy={install(e){e.component(wc.name,wc),e.component(Ro.name,Ro)}},Zy=Object.freeze(Object.defineProperty({__proto__:null,Accordion:vv,Calendar:Rv,Checkbox:zv,Dimmer:Pv,Dropdown:Nv,Embed:Ov,Modal:Kv,Popup:Qv,Progress:t1,Rating:a1,Search:l1,Sidebar:n1,Slider:o1,Tab:s1,Transition:Qy},Symbol.toStringTag,{value:"Module"})),Gn=D({name:"SuiToastActions",props:{aligned:String,basic:Boolean,vertical:Boolean,...ws()},setup(e,{slots:a}){const n=V(()=>ee("actions",e.basic&&"basic",e.aligned,e.vertical&&"vertical"));return()=>{var o;return e.attached?t(ct,{attached:e.attached,vertical:e.vertical},{default:()=>{var r;return[(r=a.default)==null?void 0:r.call(a)]}}):t("div",{class:n.value},[(o=a.default)==null?void 0:o.call(a)])}}}),eS=D({name:"SuiToastBox",props:{unclickable:Boolean,verticalAttached:Boolean},setup(e,{slots:a}){const n=V(()=>ee("floating toast-box compact",e.unclickable&&"unclickable"));return()=>{var o,r;return e.verticalAttached?t("div",{class:n.value,style:"display: block !important;"},[t("div",{class:"vertical attached compact right"},[(o=a.default)==null?void 0:o.call(a)])]):t("div",{class:n.value,style:"display: block !important;"},[(r=a.default)==null?void 0:r.call(a)])}}});function qn(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Rt(e)}const tS=D({name:"SuiToast",emits:["click","close"],props:{id:Number,displayTime:{type:Number,default:3e3},type:String,title:String,message:{type:String,required:!0},centered:Boolean,messageStyle:Boolean,actions:Function,actionsProps:Object,showProgress:{type:String},showProgressColor:String,showProgressUp:Boolean,inverted:Boolean,...Um()},setup(e,{emit:a}){const{colorClasses:n}=Ym(e),o=V(()=>{var m,p,s,u,f;return ee(e.centered&&"center aligned",e.type||"neutral",n.value,"ui",e.messageStyle?"message":"toast",e.actions&&!((m=e.actionsProps)!=null&&m.vertical)&&"actions",((p=e.actionsProps)==null?void 0:p.attached)==="top"&&"bottom attached",((s=e.actionsProps)==null?void 0:s.attached)==="bottom"&&"top attached",((u=e.actionsProps)==null?void 0:u.attached)==="left"&&"left attached",((f=e.actionsProps)==null?void 0:f.vertical)&&"vertical","compact")}),r=q(e.showProgressUp?0:100),c=()=>{const m=e.displayTime/100;setTimeout(()=>{const p=setInterval(()=>{if(e.showProgressUp){r.value>=100&&clearInterval(p),r.value+=1;return}r.value<=0&&clearInterval(p),r.value-=1},m)},500)};return yi(()=>e.showProgress&&c()),setTimeout(()=>e.displayTime>0&&a("close"),e.displayTime+750),{classes:o,progress:r}},render(){var e;let a,n,o;return t(eS,{unclickable:!!this.actions,verticalAttached:((e=this.actionsProps)==null?void 0:e.attached)==="left"},{default:()=>{var r,c,m,p;return[this.showProgress==="top"&&t(Jl,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null),this.actions&&(((r=this.actionsProps)==null?void 0:r.attached)==="top"||((c=this.actionsProps)==null?void 0:c.attached)==="left")&&t(Gn,this.actionsProps,qn(a=this.actions({close:()=>this.$emit("close")}))?a:{default:()=>[a]}),t("div",{role:"alert",class:this.classes,onClick:()=>!this.actions&&this.$emit("click")},[t("div",{class:"content"},[this.title&&t("div",{class:"ui header"},[this.title]),t("div",{class:"message"},[this.message])]),this.actions&&!((m=this.actionsProps)!=null&&m.attached)&&t(Gn,this.actionsProps,qn(n=this.actions({close:()=>this.$emit("close")}))?n:{default:()=>[n]})]),this.actions&&((p=this.actionsProps)==null?void 0:p.attached)==="bottom"&&t(Gn,this.actionsProps,qn(o=this.actions({close:()=>this.$emit("close")}))?o:{default:()=>[o]}),this.showProgress==="bottom"&&t(Jl,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null)]}})}}),iS=["top right","top center","top left","bottom right","bottom center","bottom left","centered"],aS=({defaultValue:e}={})=>({position:{type:String,validator:a=>iS.includes(a),default:e}}),lS=e=>({positionClasses:V(()=>e.position||"")});function nS(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Rt(e)}const oS=D({name:"SuiToastContainer",props:{horizontal:Boolean,...ws(),...aS({defaultValue:"top right"})},setup(e){const{items:a,remove:n}=up(),{attachedClasses:o}=qm(e),{positionClasses:r}=lS(e);return{classes:V(()=>ee(o.value||r.value,"ui toast-container",e.horizontal&&"horizontal")),items:a,remove:n,enterKeyframes:c=>{if(!(c instanceof HTMLElement))return{};const m=[0,`${c.offsetHeight}px`],p=[0,`${parseInt(getComputedStyle(c).marginBottom,10)}px`];return{height:m,marginBottom:p}},leaveKeyframes:c=>{if(!(c instanceof HTMLElement))return{};const m=[`${c.offsetWidth}px`,0],p=[`${c.offsetHeight}px`,0],s=e.horizontal?{width:m}:{height:p},u=[`${parseInt(getComputedStyle(c).marginBottom,10)}px`,0];return{...s,marginBottom:u}}}},render(){let e;return t(pn,{to:"body"},{default:()=>[t("div",{class:this.classes},[t(Ro,{animation:"scale",enterKeyframes:this.enterKeyframes,leaveKeyframes:this.leaveKeyframes},nS(e=this.items.filter(({position:a,attached:n})=>this.attached?n===this.attached:a===this.position).filter(({horizontal:a})=>this.horizontal===!!a).map(({id:a,...n})=>t(tS,Ui({key:a},n,{onClick:()=>this.remove(a),onClose:()=>this.remove(a)}),null)))?e:{default:()=>[e]})])]})}}),sS=q(1),La=q([]),up=()=>({items:La,add:e=>{e.position=e.position||"top right",La.value=[...La.value,{id:sS.value++,...e}]},remove:e=>{La.value=La.value.filter(a=>a.id!==e)}}),ot=()=>{var e;const a=(e=jt())==null?void 0:e.appContext,{add:n}=up();return{toast:o=>{const{position:r,attached:c,horizontal:m}=o;cS({position:r,attached:c,horizontal:m})||uS(a,{position:r,attached:c,horizontal:m}),n(o)}}},rS=(e,{appContext:a,element:n}={})=>{const o=n||document.createElement("div");return a&&(e.appContext=a),Hl(e,o),{vNode:e,el:o}},uS=(e,{position:a="top right",attached:n,horizontal:o=!1}={})=>{const r=J(oS,{position:a,attached:n,horizontal:o}),{el:c}=rS(r,{appContext:e});return{vNode:r,el:c}},cS=({position:e="top right",attached:a,horizontal:n})=>{const o=a?`.ui.toast-container.${a}.attached`:`.ui.toast-container.${e.split(" ").join(".")}${n?".horizontal":":not(.horizontal)"}`;return document.querySelector(o)};function dS(e){Object.values({...av,...dv,...bv,...Zy}).map(a=>e.use(a))}const mS={install:dS},pS=Object.assign({inheritAttrs:!1},{__name:"DocSectionText",props:["label","onClick"],setup(e){const a=Im(),n=V(()=>{const r=a.currentRoute.value.path;return r.lastIndexOf("/")===r.length-1?r.slice(0,-1):r}),o=r=>{r.preventDefault();const m=r.target.parentElement.getAttribute("href"),p=m.slice(m.indexOf("#")+1),s=document.getElementById(p);s&&s.scrollIntoView({behavior:"smooth"})};return(r,c)=>{const m=y("SuiHeader"),p=y("SuiGridColumn"),s=y("SuiGridRow");return L(),ge(Ce,null,[t(s,null,{default:i(()=>[t(p,null,{default:i(()=>[t(m,{as:"h3",class:"doc-section-text"},{default:i(()=>[l(ke(e.label)+" ",1),t(g(ys),{to:`${n.value}#${r.$attrs.id}`,target:"_self",onClick:o},{default:i(()=>[t(g(Q),{name:"linkify",color:"grey",size:"small",link:"",fitted:""})]),_:1},8,["to"])]),_:1})]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[t(g(Q),{name:"code",color:"grey",link:"",onClick:e.onClick},null,8,["onClick"])]),_:1})]),_:1}),S("p",null,[ma(r.$slots,"default",{},void 0,!0)])],64)}}}),fS=we(pS,[["__scopeId","data-v-a2b78897"]]),gS={mounted(e,a){var r;const n=a.modifiers,o=a.value;n.script||o==="script"?e.className="language-javascript":e.className="language-markup",eb.highlightElement(e.children[0]),(r=e.children[0].parentElement)==null||r.setAttribute("tabindex","-1")}},hS={class:"inner"},_S={__name:"DocSectionCode",props:["code","hideCode"],setup(e){return(a,n)=>{const o=y("SuiGridColumn"),r=y("SuiGridRow");return L(),R(r,null,{default:i(()=>[t(o,{width:16},{default:i(()=>[ma(a.$slots,"default",{},void 0,!0)]),_:3}),t(o,{width:16,id:"accordion","aria-hidden":e.hideCode},{default:i(()=>[S("div",hS,[sl((L(),ge("pre",null,[S("code",null,ke(e.code)+`
`,1)])),[[g(gS)]])])]),_:1},8,["aria-hidden"])]),_:3})}}},bS=we(_S,[["__scopeId","data-v-965e7ddc"]]),N={__name:"DocSection",props:["label","code"],setup(e){const a=q(!0),n=()=>a.value=!a.value;return(o,r)=>{const c=y("SuiGrid");return L(),ge("section",null,[t(c,{columns:2},{default:i(()=>[t(fS,Ui({label:e.label,"on-click":n},o.$attrs),{default:i(()=>[ma(o.$slots,"description")]),_:3},16,["label"]),t(bS,{code:e.code,"hide-code":a.value},{default:i(()=>[ma(o.$slots,"example")]),_:3},8,["code","hide-code"])]),_:3})])}}},vS=`<template>
  <SuiButton @click="onClick">{{ label }}</SuiButton>
</template>

<script setup>
import { ref } from 'vue'
import { SuiButton } from 'vue-fomantic-ui'

const label = ref('Follow')
const onClick = () => label.value = label.value === 'Follow' ? 'Following' : 'Follow'
<\/script>`,yS={__name:"ButtonDoc",setup(e){const a=q("Follow"),n=()=>a.value=a.value==="Follow"?"Following":"Follow";return(o,r)=>(L(),R(N,{label:"Button",code:vS},{description:i(()=>[l(" A standard button ")]),example:i(()=>[t(g(P),{onClick:n},{default:i(()=>[l(ke(a.value),1)]),_:1})]),_:1}))}},SS=`<template>
  <SuiButton primary>Save</SuiButton>
  <SuiButton secondary>Okay</SuiButton>
  <SuiButton>Cancel</SuiButton>
</template>`,wS={__name:"EmphasisDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Emphasis",code:SS},{description:i(()=>[l(" A button can be formatted to show different levels of emphasis ")]),example:i(()=>[t(g(P),{primary:""},{default:i(()=>[l("Save")]),_:1}),t(g(P),{secondary:""},{default:i(()=>[l("Okay")]),_:1}),t(g(P),null,{default:i(()=>[l("Cancel")]),_:1})]),_:1}))}},CS=`<template>
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
</template>`,AS={__name:"AnimatedDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Animated",code:CS},{description:i(()=>[l(" A button can animate to show hidden content ")]),example:i(()=>[t(g(P),{animated:""},{default:i(()=>[t(g(mi),{visible:""},{default:i(()=>[l("Next")]),_:1}),t(g(mi),{hidden:""},{default:i(()=>[t(g(Q),{name:"arrow right"})]),_:1})]),_:1}),t(g(P),{animated:"vertical"},{default:i(()=>[t(g(mi),{visible:""},{default:i(()=>[t(g(Q),{name:"shop"})]),_:1}),t(g(mi),{hidden:""},{default:i(()=>[l("Shop")]),_:1})]),_:1}),t(g(P),{animated:"fade"},{default:i(()=>[t(g(mi),{visible:""},{default:i(()=>[l(" Sign-up for a Pro account ")]),_:1}),t(g(mi),{hidden:""},{default:i(()=>[l("$12.99 a month")]),_:1})]),_:1})]),_:1}))}},kS=`<template>
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
</template>`,xS={__name:"LabeledDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Labeled",code:kS},{description:i(()=>[l(" A button can appear alongside a label ")]),example:i(()=>[t(g(P),{labeled:"right",as:"div"},{default:i(()=>[t(g(P),{icon:"heart",content:" Like"}),t(g(H),{basic:""},{default:i(()=>[l("2,048")]),_:1})]),_:1}),t(g(P),{labeled:"left",as:"div"},{default:i(()=>[t(g(H),{basic:"",pointing:"right"},{default:i(()=>[l("2,048")]),_:1}),t(g(P),{icon:"heart",content:" Like"})]),_:1}),t(g(P),{labeled:"left",as:"div"},{default:i(()=>[t(g(H),{basic:""},{default:i(()=>[l("1,048")]),_:1}),t(g(P),{icon:"fork"})]),_:1})]),_:1}))}},$S=`<template>
  <SuiButton icon="cloud" />
</template>`,BS={__name:"IconDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Icon",code:$S},{description:i(()=>[l(" A button can have only an icon ")]),example:i(()=>[t(g(P),{icon:"cloud"})]),_:1}))}},TS=`<template>
  <SuiButton labeled icon="pause" content="Pause" />
  <SuiButton labeled="right" icon="right arrow" content="Next" />
  <SuiButton labeled icon>
    <SuiIcon loading name="spinner" />
    Loading
  </SuiButton>
</template>`,LS={__name:"LabeledIconDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Labeled Icon",code:TS},{description:i(()=>[l(" A button can use an icon as a label ")]),example:i(()=>[t(g(P),{labeled:"",icon:"pause",content:"Pause"}),t(g(P),{labeled:"right",icon:"right arrow",content:"Next"}),t(g(P),{labeled:"",icon:""},{default:i(()=>[t(g(Q),{loading:"",name:"spinner"}),l(" Loading ")]),_:1})]),_:1}))}},ES=`<template>
  <SuiButton basic primary>Primary</SuiButton>
  <SuiButton basic secondary>Secondary</SuiButton>
  <SuiButton basic positive>Positive</SuiButton>
  <SuiButton basic negative>Negative</SuiButton>
</template>`,DS={__name:"BasicDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Basic",code:ES},{description:i(()=>[l(" A basic button is less pronounced ")]),example:i(()=>[t(g(P),{basic:"",primary:""},{default:i(()=>[l("Primary")]),_:1}),t(g(P),{basic:"",secondary:""},{default:i(()=>[l("Secondary")]),_:1}),t(g(P),{basic:"",positive:""},{default:i(()=>[l("Positive")]),_:1}),t(g(P),{basic:"",negative:""},{default:i(()=>[l("Negative")]),_:1})]),_:1}))}},IS=`<template>
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
</template>`,RS={__name:"TertiaryDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Tertiary",code:IS},{description:i(()=>[l(" An none bordered less important button ")]),example:i(()=>[t(g(P),{tertiary:"",primary:""},{default:i(()=>[l("Primary")]),_:1}),t(g(P),{tertiary:"",secondary:""},{default:i(()=>[l("Secondary")]),_:1}),t(g(P),{tertiary:"",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(g(P),{tertiary:"",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(g(P),{tertiary:"",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(g(P),{tertiary:"",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(g(P),{tertiary:"",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(g(P),{tertiary:"",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(g(P),{tertiary:"",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(g(P),{tertiary:"",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(g(P),{tertiary:"",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(g(P),{tertiary:"",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(g(P),{tertiary:"",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(g(P),{tertiary:"",color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(g(P),{tertiary:"",color:"black"},{default:i(()=>[l("Black")]),_:1})]),_:1}))}},zS=`<template>
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
</template>`,PS={__name:"InvertedDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Inverted",code:zS},{description:i(()=>[l(" A button can be formatted to appear on dark backgrounds ")]),example:i(()=>[t(g(Xe),{inverted:""},{default:i(()=>[t(g(P),{inverted:"",primary:""},{default:i(()=>[l("Primary")]),_:1}),t(g(P),{inverted:"",secondary:""},{default:i(()=>[l("Secondary")]),_:1}),t(g(P),{inverted:"",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(g(P),{inverted:"",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(g(P),{inverted:"",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(g(P),{inverted:"",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(g(P),{inverted:"",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(g(P),{inverted:"",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(g(P),{inverted:"",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(g(P),{inverted:"",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(g(P),{inverted:"",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(g(P),{inverted:"",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(g(P),{inverted:"",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(g(P),{inverted:"",color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(g(P),{inverted:"",color:"black"},{default:i(()=>[l("Black")]),_:1})]),_:1})]),_:1}))}},FS=`<template>
  <SuiButtonGroup>
    <SuiButton content="One" />
    <SuiButton content="Two" />
    <SuiButton content="Three" />
  </SuiButtonGroup>
</template>`,MS={__name:"ButtonsDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Buttons",code:FS},{description:i(()=>[l(" Buttons can exist together as a group ")]),example:i(()=>[t(g(ct),null,{default:i(()=>[t(g(P),{content:"One"}),t(g(P),{content:"Two"}),t(g(P),{content:"Three"})]),_:1})]),_:1}))}},VS=`<template>
  <SuiButtonGroup icon>
    <SuiButton icon="align left" />
    <SuiButton icon="align center" />
    <SuiButton icon="align right" />
    <SuiButton icon="align justify" />
  </SuiButtonGroup>
</template>`,HS={__name:"IconButtonsDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Icon Buttons",code:VS},{description:i(()=>[l(" Button groups can show groups of icons ")]),example:i(()=>[t(g(ct),{icon:""},{default:i(()=>[t(g(P),{icon:"align left"}),t(g(P),{icon:"align center"}),t(g(P),{icon:"align right"}),t(g(P),{icon:"align justify"})]),_:1})]),_:1}))}},NS=S("div",{class:"or"},null,-1),OS=S("div",{class:"or","data-text":"ou"},null,-1),jS=`<template>
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
</template>`,GS={__name:"ConditionalsDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Conditionals",code:jS},{description:i(()=>[l(" Button groups can contain conditionals ")]),example:i(()=>[t(g(ct),null,{default:i(()=>[t(g(P),{content:"Cancel"}),NS,t(g(P),{content:"Save",positive:""})]),_:1}),t(g(ct),null,{default:i(()=>[t(g(P),{content:"un"}),OS,t(g(P),{content:"deux",positive:""})]),_:1})]),_:1}))}},qS=`<template>
  <SuiButton active icon="user" content=" Follow" />
</template>`,US={__name:"ActiveDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Active",code:qS},{description:i(()=>[l(" A button can show it is currently the active user selection ")]),example:i(()=>[t(g(P),{active:"",icon:"user",content:" Follow"})]),_:1}))}},YS=`<template>
  <SuiButton disabled icon="user" content=" Followed" />
</template>`,JS={__name:"DisabledDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Disabled",code:YS},{description:i(()=>[l(" A button can show it is currently unable to be interacted with ")]),example:i(()=>[t(g(P),{disabled:"",icon:"user",content:" Followed"})]),_:1}))}},WS=`<template>
  <SuiButton loading content="Loading" />
  <SuiButton loading="double" primary content="Loading" />
  <SuiButton loading="elastic" secondary content="Loading" />
</template>`,KS={__name:"LoadingDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Loading",code:WS},{description:i(()=>[l(" A button can show a loading indicator ")]),example:i(()=>[t(g(P),{loading:"",content:"Loading"}),t(g(P),{loading:"double",primary:"",content:"Loading"}),t(g(P),{loading:"elastic",secondary:"",content:"Loading"})]),_:1}))}},XS=`<template>
  <SuiButton facebook icon="facebook" content=" Facebook" />
  <SuiButton twitter icon="twitter" content=" Twitter" />
  <SuiButton vk icon="vk" content="VK" />
  <SuiButton linkedin icon="linkedin" content=" LinkedIn" />
  <SuiButton instagram icon="instagram" content=" Instagram" />
  <SuiButton youtube icon="youtube" content=" YouTube" />
  <SuiButton whatsapp icon="whatsapp" content=" WhatsApp" />
  <SuiButton telegram icon="telegram" content=" Telegram" />
</template>`,QS={__name:"SocialDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Social",code:XS},{description:i(()=>[l(" A button can be formatted to link to a social website ")]),example:i(()=>[t(g(P),{facebook:"",icon:"facebook",content:" Facebook"}),t(g(P),{twitter:"",icon:"twitter",content:" Twitter"}),t(g(P),{vk:"",icon:"vk",content:"VK"}),t(g(P),{linkedin:"",icon:"linkedin",content:" LinkedIn"}),t(g(P),{instagram:"",icon:"instagram",content:" Instagram"}),t(g(P),{youtube:"",icon:"youtube",content:" YouTube"}),t(g(P),{whatsapp:"",icon:"whatsapp",content:" WhatsApp"}),t(g(P),{telegram:"",icon:"telegram",content:" Telegram"})]),_:1}))}},ZS=`<template>
  <SuiButton size="mini" content="Mini" />
  <SuiButton size="tiny" content="Tiny" />
  <SuiButton size="small" content="Small" />
  <SuiButton size="medium" content="Medium" />
  <SuiButton size="large" content="Large" />
  <SuiButton size="big" content="Big" />
  <SuiButton size="huge" content="Huge" />
  <SuiButton size="massive" content="Massive" />
</template>`,ew={__name:"SizeDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Size",code:ZS},{description:i(()=>[l(" A button can have different sizes ")]),example:i(()=>[t(g(P),{size:"mini",content:"Mini"}),t(g(P),{size:"tiny",content:"Tiny"}),t(g(P),{size:"small",content:"Small"}),t(g(P),{size:"medium",content:"Medium"}),t(g(P),{size:"large",content:"Large"}),t(g(P),{size:"big",content:"Big"}),t(g(P),{size:"huge",content:"Huge"}),t(g(P),{size:"massive",content:"Massive"})]),_:1}))}},tw=`<template>
  <SuiButton floated="left" content="Left Floated" />
  <SuiButton floated="right" content="Right Floated" />
</template>`,iw={__name:"FloatedDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Floated",code:tw},{description:i(()=>[l(" A button can be aligned to the left or right of its container ")]),example:i(()=>[t(g(P),{floated:"left",content:"Left Floated"}),t(g(P),{floated:"right",content:"Right Floated"})]),_:1}))}},aw=`<template>
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
</template>`,lw={__name:"ColoredDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Colored",code:aw},{description:i(()=>[l(" A button can have different colors ")]),example:i(()=>[t(g(P),{color:"red"},{default:i(()=>[l("Red")]),_:1}),t(g(P),{color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(g(P),{color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(g(P),{color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(g(P),{color:"green"},{default:i(()=>[l("Green")]),_:1}),t(g(P),{color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(g(P),{color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(g(P),{color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(g(P),{color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(g(P),{color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(g(P),{color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(g(P),{color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(g(P),{color:"black"},{default:i(()=>[l("Black")]),_:1})]),_:1}))}},nw=`<template>
  <SuiButton compact content="Hold" />
  <SuiButton compact icon="pause" />
  <SuiButton compact labeled icon="pause" content="Pause" />
</template>`,ow={__name:"CompactDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Compact",code:nw},{description:i(()=>[l(" A button can reduce its padding to fit into tighter spaces ")]),example:i(()=>[t(g(P),{compact:"",content:"Hold"}),t(g(P),{compact:"",icon:"pause"}),t(g(P),{compact:"",labeled:"",icon:"pause",content:"Pause"})]),_:1}))}},sw=`<template>
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
<\/script>`,rw={__name:"ToggleDoc",setup(e){const a=q(!1);return(n,o)=>(L(),R(N,{label:"Toggle",code:sw},{description:i(()=>[l(" A button can be formatted to toggle on and off ")]),example:i(()=>[t(g(P),{toggle:"",active:a.value,onClick:()=>a.value=!a.value,content:a.value?"Voted":"Vote",style:{"min-width":"200px"}},null,8,["active","onClick","content"])]),_:1}))}},uw=`<template>
  <SuiButton positive content="Positive Button" />
</template>`,cw={__name:"PositiveDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Positive",code:uw},{description:i(()=>[l(" A button can hint towards a positive consequence ")]),example:i(()=>[t(g(P),{positive:"",content:"Positive Button"})]),_:1}))}},dw=`<template>
  <SuiButton negative content="Negative Button" />
</template>`,mw={__name:"NegativeDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Negative",code:dw},{description:i(()=>[l(" A button can hint towards a negative consequence ")]),example:i(()=>[t(g(P),{negative:"",content:"Negative Button"})]),_:1}))}},pw=`<template>
  <SuiButton fluid content="Fits container" />
</template>`,fw={__name:"FluidDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Fluid",code:pw},{description:i(()=>[l(" A button can take the width of its container ")]),example:i(()=>[t(g(P),{fluid:"",content:"Fits container"})]),_:1}))}},gw=`<template>
  <SuiButton circular icon="settings" />
</template>`,hw={__name:"CircularDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Circular",code:gw},{description:i(()=>[l(" A button can be circular ")]),example:i(()=>[t(g(P),{circular:"",icon:"settings"})]),_:1}))}},_w=S("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?",-1),bw=`<template>
  <SuiButton attached="top" content="Top" />
  <SuiSegment>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?</p>
  </SuiSegment>
  <SuiButton attached="bottom" content="Bottom" />
</template>`,vw={__name:"VerticallyAttachedDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Vertically Attached",code:bw},{description:i(()=>[l(" A button can be attached to the top or bottom of other content ")]),example:i(()=>[t(g(P),{attached:"top",content:"Top"}),t(g(Xe),{attached:""},{default:i(()=>[_w]),_:1}),t(g(P),{attached:"bottom",content:"Bottom"})]),_:1}))}},yw=`<template>
  <SuiButton attached="left" content="Left" />
  <SuiButton attached="right" content="Right" />
</template>`,Sw={__name:"HorizontallyAttachedDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Horizontally Attached",code:yw},{description:i(()=>[l(" A button can be attached to the left or right of other content ")]),example:i(()=>[t(g(P),{attached:"left",content:"Left"}),t(g(P),{attached:"right",content:"Right"})]),_:1}))}},ww=`<template>
  <SuiButtonGroup vertical>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,Cw={__name:"VerticalButtonsDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Vertical Buttons",code:ww},{description:i(()=>[l(" Groups can be formatted to appear vertically ")]),example:i(()=>[t(g(ct),{vertical:""},{default:i(()=>[t(g(P),null,{default:i(()=>[l("Feed")]),_:1}),t(g(P),null,{default:i(()=>[l("Messages")]),_:1}),t(g(P),null,{default:i(()=>[l("Events")]),_:1}),t(g(P),null,{default:i(()=>[l("Photos")]),_:1})]),_:1})]),_:1}))}},Aw=`<template>
  <SuiButtonGroup stackable>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,kw={__name:"StackableButtonsDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Stackable Buttons",code:Aw},{description:i(()=>[l(" Horizontal groups can automatically be stacked on mobile devices ")]),example:i(()=>[t(g(ct),{stackable:""},{default:i(()=>[t(g(P),null,{default:i(()=>[l("Feed")]),_:1}),t(g(P),null,{default:i(()=>[l("Messages")]),_:1}),t(g(P),null,{default:i(()=>[l("Events")]),_:1}),t(g(P),null,{default:i(()=>[l("Photos")]),_:1})]),_:1})]),_:1}))}},xw=`<template>
  <SuiButtonGroup vertical labeled icon>
    <SuiButton icon="pause" content="Pause" />
    <SuiButton icon="play" content="Play" />
    <SuiButton icon="shuffle" content="Shuffle" />
  </SuiButtonGroup>
</template>`,$w={__name:"LabeledIconButtonsDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Icon Buttons",code:xw},{description:i(()=>[l(" Groups can be formatted as labeled icons ")]),example:i(()=>[t(g(ct),{vertical:"",labeled:"",icon:""},{default:i(()=>[t(g(P),{icon:"pause",content:"Pause"}),t(g(P),{icon:"play",content:"Play"}),t(g(P),{icon:"shuffle",content:"Shuffle"})]),_:1})]),_:1}))}},Bw=`<template>
  <SuiButtonGroup>
    <SuiButton labeled icon="left chevron" content="Back" />
    <SuiButton icon="stop" content="Stop" />
    <SuiButton icon labeled="right">
      <SuiIcon name="right chevron" />
      Forward
    </SuiButton>
  </SuiButtonGroup>
</template>`,Tw={__name:"MixedGroupDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Mixed Group",code:Bw},{description:i(()=>[l(" Button groups can show groups of icons ")]),example:i(()=>[t(g(ct),null,{default:i(()=>[t(g(P),{labeled:"",icon:"left chevron",content:"Back"}),t(g(P),{icon:"stop",content:"Stop"}),t(g(P),{icon:"",labeled:"right"},{default:i(()=>[t(g(Q),{name:"right chevron"}),l(" Forward ")]),_:1})]),_:1})]),_:1}))}},Lw=`<template>
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
</template>`,Ew={__name:"EqualWidthDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Equal Width",code:Lw},{description:i(()=>[l(" Groups can have their widths divided evenly ")]),example:i(()=>[t(g(ct),{widths:5},{default:i(()=>[t(g(P),null,{default:i(()=>[l("Overview")]),_:1}),t(g(P),null,{default:i(()=>[l("Specs")]),_:1}),t(g(P),null,{default:i(()=>[l("Warranty")]),_:1}),t(g(P),null,{default:i(()=>[l("Reviews")]),_:1}),t(g(P),null,{default:i(()=>[l("Support")]),_:1})]),_:1}),t(g(ct),{widths:3},{default:i(()=>[t(g(P),null,{default:i(()=>[l("Overview")]),_:1}),t(g(P),null,{default:i(()=>[l("Specs")]),_:1}),t(g(P),null,{default:i(()=>[l("Support")]),_:1})]),_:1})]),_:1}))}},Dw=`<template>
  <SuiButtonGroup color="blue">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Iw={__name:"ColoredButtonsDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Colored Buttons",code:Dw},{description:i(()=>[l(" Groups can have a shared color ")]),example:i(()=>[t(g(ct),{color:"blue"},{default:i(()=>[t(g(P),null,{default:i(()=>[l("One")]),_:1}),t(g(P),null,{default:i(()=>[l("Two")]),_:1}),t(g(P),null,{default:i(()=>[l("Three")]),_:1})]),_:1})]),_:1}))}},Rw=`<template>
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
</template>`,zw={__name:"BasicButtonsDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Basic Buttons",code:Rw},{description:i(()=>[l(" A button group can be less pronounced ")]),example:i(()=>[t(g(ct),{basic:""},{default:i(()=>[t(g(P),null,{default:i(()=>[l("One")]),_:1}),t(g(P),null,{default:i(()=>[l("Two")]),_:1}),t(g(P),null,{default:i(()=>[l("Three")]),_:1})]),_:1}),t(g(ct),null,{default:i(()=>[t(g(P),{basic:"",color:"red"},{default:i(()=>[l("One")]),_:1}),t(g(P),{basic:"",color:"blue"},{default:i(()=>[l("Two")]),_:1}),t(g(P),{basic:"",color:"green"},{default:i(()=>[l("Three")]),_:1})]),_:1})]),_:1}))}},Pw=`<template>
  <SuiButtonGroup size="large">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Fw={__name:"GroupSizesDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Group Sizes",code:Pw},{description:i(()=>[l(" Groups can have a shared color ")]),example:i(()=>[t(g(ct),{size:"large"},{default:i(()=>[t(g(P),null,{default:i(()=>[l("One")]),_:1}),t(g(P),null,{default:i(()=>[l("Two")]),_:1}),t(g(P),null,{default:i(()=>[l("Three")]),_:1})]),_:1})]),_:1}))}},Mw={__name:"Button",setup(e){const a=[{id:"button",label:"Button",category:"Types",component:yS},{id:"emphasis",label:"Emphasis",category:"Types",component:wS},{id:"animated",label:"Animated",category:"Types",component:AS},{id:"labeled",label:"Labeled",category:"Types",component:xS},{id:"icon",label:"Icon",category:"Types",component:BS},{id:"labeled-icon",label:"Labeled Icon",category:"Types",component:LS},{id:"basic",label:"Basic",category:"Types",component:DS},{id:"tertiary",label:"Tertiary",category:"Types",component:RS},{id:"inverted",label:"Inverted",category:"Types",component:PS},{id:"buttons",label:"Buttons",category:"Groups",component:MS},{id:"icon-buttons",label:"Icon Buttons",category:"Groups",component:HS},{id:"content",label:"Content",category:"Content",component:GS},{id:"active",label:"Active",category:"States",component:US},{id:"disabled",label:"Disabled",category:"States",component:JS},{id:"loading",label:"Loading",category:"States",component:KS},{id:"social",label:"Social",category:"Variations",component:QS},{id:"size",label:"Size",category:"Variations",component:ew},{id:"floated",label:"Floated",category:"Variations",component:iw},{id:"colored",label:"Colored",category:"Variations",component:lw},{id:"compact",label:"Compact",category:"Variations",component:ow},{id:"toggle",label:"Toggle",category:"Variations",component:rw},{id:"positive",label:"Positive",category:"Variations",component:cw},{id:"negative",label:"Negative",category:"Variations",component:mw},{id:"fluid",label:"Fluid",category:"Variations",component:fw},{id:"circular",label:"Circular",category:"Variations",component:hw},{id:"vertically-attached",label:"Vertically Attached",category:"Variations",component:vw},{id:"horizontally-attached",label:"Horizontally Attached",category:"Variations",component:Sw},{id:"vertical-buttons",label:"Vertical Buttons",category:"Group Variations",component:Cw},{id:"stackable-buttons",label:"Stackable Buttons",category:"Group Variations",component:kw},{id:"labeled-icon-buttons",label:"Labeled Icon Buttons",category:"Group Variations",component:$w},{id:"mixed-group",label:"Mixed Group",category:"Group Variations",component:Tw},{id:"equal-width",label:"Equal Width",category:"Group Variations",component:Ew},{id:"colored-buttons",label:"Colored Buttons",category:"Group Variations",component:Iw},{id:"basic-buttons",label:"Basic Buttons",category:"Group Variations",component:zw},{id:"group-sizes",label:"Group Sizes",category:"Group Variations",component:Fw}];return(n,o)=>(L(),R(Gt,{title:"Button",description:"A button indicates a possible user action","component-docs":a}))}},Vw=S("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Hw=`<template>
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
</template>`,Nw={__name:"ContainerDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Container",code:Hw},{description:i(()=>[l(" A standard container ")]),example:i(()=>[t(g(hi),null,{default:i(()=>[Vw]),_:1})]),_:1}))}},Ow=S("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),jw=`<template>
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
</template>`,Gw={__name:"TextContainerDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Text Container",code:jw},{description:i(()=>[l(" A container can reduce its maximum width to more naturally accommodate a single column of text ")]),example:i(()=>[t(g(hi),{text:""},{default:i(()=>[t(g(fe),{as:"h2"},{default:i(()=>[l("Header")]),_:1}),Ow]),_:1})]),_:1}))}},qw=`<template>
  <SuiContainer textAlign="left">Left Aligned</SuiContainer>
  <SuiContainer textAlign="center">Center Aligned</SuiContainer>
  <SuiContainer textAlign="right">Right Aligned</SuiContainer>
</template>`,Uw={__name:"TextAlignmentDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Text Alignment",code:qw},{description:i(()=>[l(" A container can specify its text alignment ")]),example:i(()=>[t(g(hi),{textAlign:"left"},{default:i(()=>[l("Left Aligned")]),_:1}),t(g(hi),{textAlign:"center"},{default:i(()=>[l("Center Aligned")]),_:1}),t(g(hi),{textAlign:"right"},{default:i(()=>[l("Right Aligned")]),_:1})]),_:1}))}},Yw=S("p",null," Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today. ",-1),Jw=`<template>
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
</template>`,Ww={__name:"FluidDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Fluid",code:Jw},{description:i(()=>[l(" A fluid container has no maximum width ")]),example:i(()=>[t(g(hi),{fluid:""},{default:i(()=>[t(g(fe),{as:"h2"},{default:i(()=>[l("Dogs Roles with Humans")]),_:1}),Yw]),_:1})]),_:1}))}},Kw={__name:"Container",setup(e){const a=[{id:"container",label:"Container",category:"Types",component:Nw},{id:"text-container",label:"Text Container",category:"Types",component:Gw},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:Uw},{id:"fluid",label:"Fluid",category:"Variations",component:Ww}];return(n,o)=>(L(),R(Gt,{title:"Container",description:"A container limits content to a maximum width","component-docs":a}))}},Xw=`<template>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider />
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,Qw={__name:"DividerDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Divider",code:Xw},{description:i(()=>[l(" A standard divider ")]),example:i(()=>[t(g(Ue),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(g(Ke)),t(g(Ue),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},Zw=S("label",null,"Username",-1),eC=S("input",{type:"text",placeholder:"Username"},null,-1),tC=S("label",null,"Password",-1),iC=S("input",{type:"password",placeholder:"Password"},null,-1),aC=`<template>
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
</template>`,lC={__name:"VerticalDividerDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Vertical Divider",code:aC},{description:i(()=>[l(" A divider can segment content vertically. ")]),example:i(()=>[t(g(Xe),{placeholder:""},{default:i(()=>[t(g(ba),{columns:"equal"},{default:i(()=>[t(g(_t),null,{default:i(()=>[t(g(jl),null,{default:i(()=>[t(g(fi),null,{default:i(()=>[Zw,eC]),_:1}),t(g(fi),null,{default:i(()=>[tC,iC]),_:1}),t(g(P),{primary:""},{default:i(()=>[l("Login")]),_:1})]),_:1})]),_:1}),t(g(_t),{textAlign:"middle"},{default:i(()=>[t(g(P),{secondary:"",icon:"signup",content:"Sign Up"})]),_:1})]),_:1}),t(g(Ke),{vertical:""},{default:i(()=>[l("Or")]),_:1})]),_:1})]),_:1}))}},nC=`<template>
  <SuiSegment basic textAlign="center">
    <SuiInput icon="search" iconPosition="left" action="Search" placeholder="Order #" />
    <SuiDivider horizontal>Or</SuiDivider>
    <SuiButton labeled icon="add" color="green" content="Create New Order" />
  </SuiSegment>
</template>`,oC={__name:"HorizontalDividerDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Horizontal Divider",code:nC},{description:i(()=>[l(" A divider can segment content horizontally ")]),example:i(()=>[t(g(Xe),{basic:"",textAlign:"center"},{default:i(()=>[t(g(et),{icon:"search",iconPosition:"left",action:"Search",placeholder:"Order #"}),t(g(Ke),{horizontal:""},{default:i(()=>[l("Or")]),_:1}),t(g(P),{labeled:"",icon:"add",color:"green",content:"Create New Order"})]),_:1})]),_:1}))}},sC=`<template>
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
</template>`,rC={__name:"HorizontalAlignmentDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Horizontal Alignment",code:sC},{description:i(()=>[l(" A horizontal divider can be aligned ")]),example:i(()=>[t(g(Ke),{horizontal:"",textAlign:"left"},{default:i(()=>[t(g(Q),{name:"left align"}),l(" Left Aligned ")]),_:1}),t(g(Ke),{horizontal:"",textAlign:"center"},{default:i(()=>[t(g(Q),{name:"center align"}),l(" Center Aligned ")]),_:1}),t(g(Ke),{horizontal:"",textAlign:"right"},{default:i(()=>[t(g(Q),{name:"right align"}),l(" Right Aligned ")]),_:1})]),_:1}))}},uC=`<template>
  <SuiSegment inverted>
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider inverted />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider horizontal inverted>Horizontal</SuiDivider>
  </SuiSegment>
</template>`,cC={__name:"InvertedDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Inverted",code:uC},{description:i(()=>[l(" A divider can have its colors inverted ")]),example:i(()=>[t(g(Xe),{inverted:""},{default:i(()=>[t(g(Ue),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(g(Ke),{inverted:""}),t(g(Ue),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(g(Ke),{horizontal:"",inverted:""},{default:i(()=>[l("Horizontal")]),_:1})]),_:1})]),_:1}))}},dC=`<template>
  <SuiSegment>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
    <SuiDivider fitted />
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
  </SuiSegment>
</template>`,mC={__name:"FittedDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Inverted",code:dC},{description:i(()=>[l(" A divider can be fitted, without any space above or below it. ")]),example:i(()=>[t(g(Xe),null,{default:i(()=>[l(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),t(g(Ke),{fitted:""}),l(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. ")]),_:1})]),_:1}))}},pC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider hidden />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,fC={__name:"HiddenDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Hidden",code:pC},{description:i(()=>[l(" A hidden divider divides content without creating a dividing line ")]),example:i(()=>[t(g(fe),null,{default:i(()=>[l("Section One")]),_:1}),t(g(Ue),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(g(Ke),{hidden:""}),t(g(fe),null,{default:i(()=>[l("Section Two")]),_:1}),t(g(Ue),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},gC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider section />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,hC={__name:"SectionDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Section",code:gC},{description:i(()=>[l(" A divider can provide greater margins to divide sections of content ")]),example:i(()=>[t(g(fe),null,{default:i(()=>[l("Section One")]),_:1}),t(g(Ue),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(g(Ke),{section:""}),t(g(fe),null,{default:i(()=>[l("Section Two")]),_:1}),t(g(Ue),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},_C=`<template>
  <SuiSegment>
    <SuiHeader floated="right">Section One</SuiHeader>
    <SuiDivider clearing />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,bC={__name:"ClearingDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Clearing",code:_C},{description:i(()=>[l(" A divider can clear the contents above it ")]),example:i(()=>[t(g(Xe),null,{default:i(()=>[t(g(fe),{floated:"right"},{default:i(()=>[l("Section One")]),_:1}),t(g(Ke),{clearing:""}),t(g(Ue),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},vC=`<template>
  <SuiDivider size="mini">MINI</SuiDivider>
  <SuiDivider size="tiny">TINY</SuiDivider>
  <SuiDivider size="small">SMALL</SuiDivider>
  <SuiDivider size="large">LARGE</SuiDivider>
  <SuiDivider size="big">BIG</SuiDivider>
  <SuiDivider size="huge">HUGE</SuiDivider>
  <SuiDivider size="massive">MASSIVE</SuiDivider>
</template>`,yC={__name:"SizeDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Size",code:vC},{description:i(()=>[l(" A divider text can vary in size ")]),example:i(()=>[t(g(Ke),{horizontal:"",size:"mini"},{default:i(()=>[l("MINI")]),_:1}),t(g(Ke),{horizontal:"",size:"tiny"},{default:i(()=>[l("TINY")]),_:1}),t(g(Ke),{horizontal:"",size:"small"},{default:i(()=>[l("SMALL")]),_:1}),t(g(Ke),{horizontal:"",size:"large"},{default:i(()=>[l("LARGE")]),_:1}),t(g(Ke),{horizontal:"",size:"big"},{default:i(()=>[l("BIG")]),_:1}),t(g(Ke),{horizontal:"",size:"huge"},{default:i(()=>[l("HUGE")]),_:1}),t(g(Ke),{horizontal:"",size:"massive"},{default:i(()=>[l("MASSIVE")]),_:1})]),_:1}))}},SC={__name:"Divider",setup(e){const a=[{id:"divider",label:"Divider",category:"Types",component:Qw},{id:"vertical-divider",label:"Vertical Divider",category:"Types",component:lC},{id:"horizontal-divider",label:"Horizontal Divider",category:"Types",component:oC},{id:"horizontal-alignment",label:"Horizontal Alignment",category:"Types",component:rC},{id:"inverted",label:"Inverted",category:"Variations",component:cC},{id:"fitted",label:"Fitted",category:"Variations",component:mC},{id:"hidden",label:"Hidden",category:"Variations",component:fC},{id:"section",label:"Section",category:"Variations",component:hC},{id:"clearing",label:"Clearing",category:"Variations",component:bC},{id:"size",label:"Size",category:"Variations",component:yC}];return(n,o)=>(L(),R(Gt,{title:"Divider",description:"A divider visually segments content into groups","component-docs":a}))}},wC=`<template>
  <SuiEmoji name="anguished" disabled />
</template>`,CC={__name:"DisabledDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Disabled",code:wC},{description:i(()=>[l(" An emoji can show that it is disabled ")]),example:i(()=>[t(g(yt),{name:"anguished",disabled:""})]),_:1}))}},AC=`<template>
  <SuiEmoji name="angel" loading />
  <SuiEmoji name="blush" loading />
  <SuiEmoji name="grin" loading />
</template>`,kC={__name:"LoadingDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Loading",code:AC},{description:i(()=>[l(" An emoji can be used as a simple loader ")]),example:i(()=>[t(g(yt),{name:"angel",loading:""}),t(g(yt),{name:"blush",loading:""}),t(g(yt),{name:"grin",loading:""})]),_:1}))}},xC=`<template>
  <SuiEmoji name="relaxed" size="small" />
  <SuiEmoji name="relaxed" size="medium" />
  <SuiEmoji name="relaxed" size="large" />
  <SuiEmoji name="relaxed" size="big" />
</template>`,$C={__name:"SizeDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Size",code:xC},{description:i(()=>[l(" An emoji can vary in size ")]),example:i(()=>[t(g(yt),{name:"relaxed",size:"small"}),t(g(yt),{name:"relaxed",size:"medium"}),t(g(yt),{name:"relaxed",size:"large"}),t(g(yt),{name:"relaxed",size:"big"})]),_:1}))}},BC=`<template>
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
</template>`,TC={__name:"AutosizingDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Autosizing",code:BC},{description:i(()=>[l(" If no specific size class is given, all emojis are automatically sized according to the current element font-size ")]),example:i(()=>[t(g(fe),{size:"small"},{default:i(()=>[l(" Within a Header "),t(g(yt),{name:"relaxed"})]),_:1}),t(g(P),{as:"div",size:"large"},{default:i(()=>[l(" Within a Button "),t(g(yt),{name:"relaxed"})]),_:1}),t(g(H),{size:"massive"},{default:i(()=>[l(" Within a Label "),t(g(yt),{name:"relaxed"})]),_:1})]),_:1}))}},LC=`<template>
  <SuiEmoji link name="slight_smile" size="medium" />
</template>`,EC={__name:"LinkDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Link",code:LC},{description:i(()=>[l(" An emoji can be formatted as a link ")]),example:i(()=>[t(g(yt),{link:"",name:"slight_smile",size:"medium"})]),_:1}))}},DC={__name:"Emoji",setup(e){const a=[{id:"disabled",label:"Disabled",category:"States",component:CC},{id:"loading",label:"Loading",category:"States",component:kC},{id:"size",label:"Size",category:"Variations",component:$C},{id:"autosizing",label:"Autosizing",category:"Variations",component:TC},{id:"link",label:"Link",category:"Variations",component:EC}];return(n,o)=>(L(),R(Gt,{title:"Emoji",description:"An emoji is a glyph used to represent an emotional state","component-docs":a}))}},IC=`<template>
  <SuiFlag name="de" size="small" />
  <SuiFlag name="fr" size="medium" />
  <SuiFlag name="li" size="large" />
  <SuiFlag name="jp" size="big" />
  <SuiFlag name="gb" size="huge" />
  <SuiFlag name="un" size="massive" />
</template>`,RC={__name:"SizeDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Size",code:IC},{description:i(()=>[l(" A flag can vary in size ")]),example:i(()=>[t(g(Pt),{name:"de",size:"small"}),t(g(Pt),{name:"fr",size:"medium"}),t(g(Pt),{name:"li",size:"large"}),t(g(Pt),{name:"jp",size:"big"}),t(g(Pt),{name:"gb",size:"huge"}),t(g(Pt),{name:"un",size:"massive"})]),_:1}))}},zC=`<template>
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
</template>`,PC={__name:"AutosizingDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Autosizing",code:zC},{description:i(()=>[l(" If no specific size class is given, all flags are automatically sized according to the current element font-size ")]),example:i(()=>[t(g(fe),{size:"small"},{default:i(()=>[l(" Within a Header "),t(g(Pt),{name:"us"})]),_:1}),t(g(P),{as:"div",size:"large"},{default:i(()=>[l(" Within a Button "),t(g(Pt),{name:"eu"})]),_:1}),t(g(H),{size:"massive"},{default:i(()=>[l(" Within a Label "),t(g(Pt),{name:"pirate"})]),_:1})]),_:1}))}},FC={__name:"Flag",setup(e){const a=[{id:"size",label:"Size",category:"Types",component:RC},{id:"autosizing",label:"Autosizing",category:"Types",component:PC}];return(n,o)=>(L(),R(Gt,{title:"Flag",description:"A flag is used to represent a political state","component-docs":a}))}},MC=`<template>
  <SuiHeader as="h1">First Header</SuiHeader>
  <SuiHeader as="h2">Second Header</SuiHeader>
  <SuiHeader as="h3">Third Header</SuiHeader>
  <SuiHeader as="h4">Fourth Header</SuiHeader>
  <SuiHeader as="h5">Fifth Header</SuiHeader>
</template>`,VC={__name:"PageHeadersDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Page Headers",code:MC},{description:i(()=>[l(" Headers may be oriented to give the hierarchy of a section in the context of the page ")]),example:i(()=>[t(g(fe),{as:"h1"},{default:i(()=>[l("First Header")]),_:1}),t(g(fe),{as:"h2"},{default:i(()=>[l("Second Header")]),_:1}),t(g(fe),{as:"h3"},{default:i(()=>[l("Third Header")]),_:1}),t(g(fe),{as:"h4"},{default:i(()=>[l("Fourth Header")]),_:1}),t(g(fe),{as:"h5"},{default:i(()=>[l("Fifth Header")]),_:1})]),_:1}))}},HC=`<template>
  <SuiHeader size="huge">Huge Header</SuiHeader>
  <SuiHeader size="large">Large Header</SuiHeader>
  <SuiHeader size="medium">Medium Header</SuiHeader>
  <SuiHeader size="small">Small Header</SuiHeader>
  <SuiHeader size="tiny">Tiny Header</SuiHeader>
</template>`,NC={__name:"ContentHeadersDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Content Headers",code:HC},{description:i(()=>[l(" Headers may be oriented to give the importance of a section in the context of the content that surrounds it ")]),example:i(()=>[t(g(fe),{size:"huge"},{default:i(()=>[l("Huge Header")]),_:1}),t(g(fe),{size:"large"},{default:i(()=>[l("Large Header")]),_:1}),t(g(fe),{size:"medium"},{default:i(()=>[l("Medium Header")]),_:1}),t(g(fe),{size:"small"},{default:i(()=>[l("Small Header")]),_:1}),t(g(fe),{size:"tiny"},{default:i(()=>[l("Tiny Header")]),_:1})]),_:1}))}},OC=`<template>
  <SuiHeader icon>
    <SuiIcon name="settings" />
    <SuiHeaderContent>
      Account Settings
    </SuiHeaderContent>
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,jC={__name:"IconHeadersDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Icon Headers",code:OC},{description:i(()=>[l(" A header can be formatted to emphasize an icon ")]),example:i(()=>[t(g(fe),{icon:""},{default:i(()=>[t(g(Q),{name:"settings"}),t(g(Ol),null,{default:i(()=>[l(" Account Settings ")]),_:1}),t(g(_a),null,{default:i(()=>[l(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},GC=S("span",null,"$10.99",-1),qC=`<template>
  <SuiHeader sub>Price</SuiHeader>
  <span>$10.99</span>
</template>`,UC={__name:"SubHeadersDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Sub Headers",code:qC},{description:i(()=>[l(" Headers may be formatted to label smaller or de-emphasized content. ")]),example:i(()=>[t(g(fe),{sub:""},{default:i(()=>[l("Price")]),_:1}),GC]),_:1}))}},YC=`<template>
  <SuiHeader as="h2">
    <SuiImage src="/images/avatar/large/steve.jpg" avatar />
    Steve
  </SuiHeader>
</template>`,JC={__name:"ImageDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Image",code:YC},{description:i(()=>[l(" A header may contain an image ")]),example:i(()=>[t(g(fe),{as:"h2"},{default:i(()=>[t(g(Ue),{src:"/vue-fomantic-ui/images/avatar/large/steve.jpg",avatar:""}),l(" Steve ")]),_:1})]),_:1}))}},WC=`<template>
  <SuiHeader as="h2">
    <SuiIcon name="plug" />
    <SuiHeaderContent>
      Uptime Guarantee
    </SuiHeaderContent>
  </SuiHeader>
</template>`,KC={__name:"IconDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Icon",code:WC},{description:i(()=>[l(" A header may contain an Icon ")]),example:i(()=>[t(g(fe),{as:"h2"},{default:i(()=>[t(g(Q),{name:"plug"}),t(g(Ol),null,{default:i(()=>[l(" Uptime Guarantee ")]),_:1})]),_:1})]),_:1}))}},XC=`<template>
  <SuiHeader as="h2">
    Account Settings
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,QC={__name:"SubheaderDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Subheader",code:XC},{description:i(()=>[l(" Headers may contain subheaders ")]),example:i(()=>[t(g(fe),{as:"h2"},{default:i(()=>[l(" Account Settings "),t(g(_a),null,{default:i(()=>[l(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},ZC=`<template>
  <SuiHeader disabled>
    Disabled Header
  </SuiHeader>
</template>`,eA={__name:"DisabledDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Disabled",code:ZC},{description:i(()=>[l(" A header can show that it is inactive ")]),example:i(()=>[t(g(fe),{disabled:""},{default:i(()=>[l(" Disabled Header ")]),_:1})]),_:1}))}},tA=`<template>
  <SuiHeader as="h3" dividing>
    Dividing Header
  </SuiHeader>
</template>`,iA={__name:"DividingDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Dividing",code:tA},{description:i(()=>[l(" A header can be formatted to divide itself from the content below it ")]),example:i(()=>[t(g(fe),{as:"h3",dividing:""},{default:i(()=>[l(" Dividing Header ")]),_:1})]),_:1}))}},aA=`<template>
  <SuiHeader as="h3" block>
    Block Header
  </SuiHeader>
</template>`,lA={__name:"BlockDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Block",code:aA},{description:i(()=>[l(" A header can be formatted to appear inside a content block ")]),example:i(()=>[t(g(fe),{as:"h3",block:""},{default:i(()=>[l(" Block Header ")]),_:1})]),_:1}))}},nA=`<template>
  <SuiHeader as="h2" attached="top">
    Attached Header
  </SuiHeader>
  <SuiSegment attached>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </SuiSegment>
</template>`,oA={__name:"AttachedDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Attached",code:nA},{description:i(()=>[l(" A header can be attached to other content, like a segment ")]),example:i(()=>[t(g(fe),{as:"h2",attached:"top"},{default:i(()=>[l(" Attached Header ")]),_:1}),t(g(Xe),{attached:""},{default:i(()=>[l(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),_:1})]),_:1}))}},sA=`<template>
  <SuiSegment clearing>
    <SuiHeader as="h3" floated="right">
      Go Forward
    </SuiHeader>
    <SuiHeader as="h3" floated="left">
      Go Back
    </SuiHeader>
  </SuiSegment>
</template>`,rA={__name:"FloatingDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Floating",code:sA},{description:i(()=>[l(" A header can sit to the left or right of other content ")]),example:i(()=>[t(g(Xe),{clearing:""},{default:i(()=>[t(g(fe),{as:"h3",floated:"right"},{default:i(()=>[l(" Go Forward ")]),_:1}),t(g(fe),{as:"h3",floated:"left"},{default:i(()=>[l(" Go Back ")]),_:1})]),_:1})]),_:1}))}},uA=`<template>
  <SuiSegment>
    <SuiHeader as="h3" textAlign="right">Float Right</SuiHeader>
    <SuiHeader as="h3" textAlign="left">Float Left</SuiHeader>
    <SuiHeader as="h3" textAlign="justified">
      This text takes up the full width of the container
    </SuiHeader>
    <SuiHeader as="h3" textAlign="center">Centered</SuiHeader>
  </SuiSegment>
</template>`,cA={__name:"TextAlignmentDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Text Alignment",code:uA},{description:i(()=>[l(" A header can have its text aligned to a side ")]),example:i(()=>[t(g(Xe),null,{default:i(()=>[t(g(fe),{as:"h3",textAlign:"right"},{default:i(()=>[l("Float Right")]),_:1}),t(g(fe),{as:"h3",textAlign:"left"},{default:i(()=>[l("Float Left")]),_:1}),t(g(fe),{as:"h3",textAlign:"justified"},{default:i(()=>[l(" This text takes up the full width of the container ")]),_:1}),t(g(fe),{as:"h3",textAlign:"center"},{default:i(()=>[l("Centered")]),_:1})]),_:1})]),_:1}))}},dA=`<template>
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
</template>`,mA={__name:"ColoredDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Colored",code:dA},{description:i(()=>[l(" A header can be formatted with different colors ")]),example:i(()=>[t(g(fe),{as:"h4",primary:""},{default:i(()=>[l("Primary")]),_:1}),t(g(fe),{as:"h4",secondary:""},{default:i(()=>[l("Secondary")]),_:1}),t(g(fe),{as:"h4",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(g(fe),{as:"h4",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(g(fe),{as:"h4",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(g(fe),{as:"h4",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(g(fe),{as:"h4",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(g(fe),{as:"h4",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(g(fe),{as:"h4",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(g(fe),{as:"h4",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(g(fe),{as:"h4",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(g(fe),{as:"h4",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(g(fe),{as:"h4",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(g(fe),{as:"h4",color:"grey"},{default:i(()=>[l("Grey")]),_:1})]),_:1}))}},pA=`<template>
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
</template>`,fA={__name:"InvertedDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Colored",code:pA},{description:i(()=>[l(" A header can have its colors inverted for contrast ")]),example:i(()=>[t(g(Xe),{inverted:""},{default:i(()=>[t(g(fe),{as:"h4",inverted:"",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(g(fe),{as:"h4",inverted:"",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(g(fe),{as:"h4",inverted:"",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(g(fe),{as:"h4",inverted:"",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(g(fe),{as:"h4",inverted:"",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(g(fe),{as:"h4",inverted:"",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(g(fe),{as:"h4",inverted:"",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(g(fe),{as:"h4",inverted:"",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(g(fe),{as:"h4",inverted:"",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(g(fe),{as:"h4",inverted:"",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(g(fe),{as:"h4",inverted:"",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(g(fe),{as:"h4",inverted:"",color:"grey"},{default:i(()=>[l("Grey")]),_:1})]),_:1})]),_:1}))}},gA={__name:"Header",setup(e){const a=[{id:"page-headers",label:"Page Headers",category:"Types",component:VC},{id:"content-headers",label:"Content Headers",category:"Types",component:NC},{id:"icon-headers",label:"Icon Headers",category:"Types",component:jC},{id:"sub-headers",label:"Sub Headers",category:"Types",component:UC},{id:"image",label:"Image",category:"Content",component:JC},{id:"icon",label:"Icon",category:"Content",component:KC},{id:"subheader",label:"Subheader",category:"Content",component:QC},{id:"disabled",label:"Disabled",category:"States",component:eA},{id:"dividing",label:"Dividing",category:"Variations",component:iA},{id:"block",label:"Block",category:"Variations",component:lA},{id:"attached",label:"Attached",category:"Variations",component:oA},{id:"floating",label:"Floating",category:"Variations",component:rA},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:cA},{id:"colored",label:"Colored",category:"Variations",component:mA},{id:"inverted",label:"Inverted",category:"Variations",component:fA}];return(n,o)=>(L(),R(Gt,{title:"Header",description:"A header provides a short summary of content","component-docs":a}))}},hA=`<template>
  <SuiIcon name="users" disabled />
</template>`,_A={__name:"DisabledDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Disabled",code:hA},{description:i(()=>[l(" An icon can show that it is disabled ")]),example:i(()=>[t(g(Q),{name:"users",disabled:""})]),_:1}))}},bA=`<template>
  <SuiIcon name="spinner" loading />
  <SuiIcon name="notched circle" loading />
  <SuiIcon name="asterisk" loading />
</template>`,vA={__name:"LoadingDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Loading",code:bA},{description:i(()=>[l(" An icon can be used as a simple loader ")]),example:i(()=>[t(g(Q),{name:"spinner",loading:""}),t(g(Q),{name:"notched circle",loading:""}),t(g(Q),{name:"asterisk",loading:""})]),_:1}))}},yA=S("br",null,null,-1),SA=`<template>
  <div>
    This icon
    <SuiIcon name="help" fitted />
    is fitted.
    <br />
    This icon
    <SuiIcon name="help" />
    is not fitted.
  </div>
</template>`,wA={__name:"FittedDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Fitted",code:SA},{description:i(()=>[l(" An icon can be fitted, without any space to the left or right of it. ")]),example:i(()=>[S("div",null,[l(" This icon "),t(g(Q),{name:"help",fitted:""}),l(" is fitted. "),yA,l(" This icon "),t(g(Q),{name:"help"}),l(" is not fitted. ")])]),_:1}))}},CA=`<template>
  <SuiIcon name="home" size="mini" />
  <SuiIcon name="home" size="tiny" />
  <SuiIcon name="home" size="small" />
  <SuiIcon name="home" />
  <SuiIcon name="home" size="large" />
  <SuiIcon name="home" size="big" />
  <SuiIcon name="home" size="huge" />
  <SuiIcon name="home" size="massive" />
</template>`,AA={__name:"SizeDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Size",code:CA},{description:i(()=>[l(" An icon can vary in size ")]),example:i(()=>[t(g(Q),{name:"home",size:"mini"}),t(g(Q),{name:"home",size:"tiny"}),t(g(Q),{name:"home",size:"small"}),t(g(Q),{name:"home"}),t(g(Q),{name:"home",size:"large"}),t(g(Q),{name:"home",size:"big"}),t(g(Q),{name:"home",size:"huge"}),t(g(Q),{name:"home",size:"massive"})]),_:1}))}},kA=`<template>
  <SuiIcon name="close" link />
  <SuiIcon name="help" link />
</template>`,xA={__name:"LinkDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Link",code:kA},{description:i(()=>[l(" An icon can be formatted as a link ")]),example:i(()=>[t(g(Q),{name:"close",link:""}),t(g(Q),{name:"help",link:""})]),_:1}))}},$A=`<template>
  <SuiIcon name="cloud" flipped="horizontally" />
  <SuiIcon name="cloud" flipped="vertically" />
</template>`,BA={__name:"FlippedDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Flipped",code:$A},{description:i(()=>[l(" An icon can be flipped ")]),example:i(()=>[t(g(Q),{name:"cloud",flipped:"horizontally"}),t(g(Q),{name:"cloud",flipped:"vertically"})]),_:1}))}},TA=`<template>
  <SuiIcon name="cloud" rotated="clockwise" />
  <SuiIcon name="cloud" rotated="counterclockwise" />
</template>`,LA={__name:"RotatedDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Rotated",code:TA},{description:i(()=>[l(" An icon can be rotated ")]),example:i(()=>[t(g(Q),{name:"cloud",rotated:"clockwise"}),t(g(Q),{name:"cloud",rotated:"counterclockwise"})]),_:1}))}},EA=`<template>
  <SuiIcon name="users" circular />
  <SuiIcon name="users" circular color="teal" />
  <SuiIcon name="users" circular inverted />
  <SuiIcon name="users" circular inverted color="teal" />
</template>`,DA={__name:"CircularDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Circular",code:EA},{description:i(()=>[l(" An icon can be formatted to appear circular ")]),example:i(()=>[t(g(Q),{name:"users",circular:""}),t(g(Q),{name:"users",circular:"",color:"teal"}),t(g(Q),{name:"users",circular:"",inverted:""}),t(g(Q),{name:"users",circular:"",inverted:"",color:"teal"})]),_:1}))}},IA=`<template>
  <SuiIcon name="users" bordered />
  <SuiIcon name="users" bordered color="teal" />
  <SuiIcon name="users" bordered inverted color="black" />
  <SuiIcon name="users" bordered inverted color="teal" />
</template>`,RA={__name:"BorderedDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Bordered",code:IA},{description:i(()=>[l(" An icon can be formatted to appear bordered ")]),example:i(()=>[t(g(Q),{name:"users",bordered:""}),t(g(Q),{name:"users",bordered:"",color:"teal"}),t(g(Q),{name:"users",bordered:"",inverted:"",color:"black"}),t(g(Q),{name:"users",bordered:"",inverted:"",color:"teal"})]),_:1}))}},zA=`<template>
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
</template>`,PA={__name:"ColoredDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Colored",code:zA},{description:i(()=>[l(" An icon can be formatted with different colors ")]),example:i(()=>[t(g(Q),{name:"users",primary:""}),t(g(Q),{name:"users",secondary:""}),t(g(Q),{name:"users",color:"red"}),t(g(Q),{name:"users",color:"orange"}),t(g(Q),{name:"users",color:"yellow"}),t(g(Q),{name:"users",color:"olive"}),t(g(Q),{name:"users",color:"green"}),t(g(Q),{name:"users",color:"teal"}),t(g(Q),{name:"users",color:"blue"}),t(g(Q),{name:"users",color:"violet"}),t(g(Q),{name:"users",color:"purple"}),t(g(Q),{name:"users",color:"pink"}),t(g(Q),{name:"users",color:"brown"}),t(g(Q),{name:"users",color:"grey"}),t(g(Q),{name:"users",color:"black"})]),_:1}))}},FA=`<template>
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
</template>`,MA={__name:"InvertedDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Inverted",code:FA},{description:i(()=>[l(" An icon can have its colors inverted for contrast ")]),example:i(()=>[t(g(Q),{name:"users",inverted:""}),t(g(Q),{name:"users",inverted:"",primary:""}),t(g(Q),{name:"users",inverted:"",secondary:""}),t(g(Q),{name:"users",inverted:"",color:"red"}),t(g(Q),{name:"users",inverted:"",color:"orange"}),t(g(Q),{name:"users",inverted:"",color:"yellow"}),t(g(Q),{name:"users",inverted:"",color:"olive"}),t(g(Q),{name:"users",inverted:"",color:"green"}),t(g(Q),{name:"users",inverted:"",color:"teal"}),t(g(Q),{name:"users",inverted:"",color:"blue"}),t(g(Q),{name:"users",inverted:"",color:"violet"}),t(g(Q),{name:"users",inverted:"",color:"purple"}),t(g(Q),{name:"users",inverted:"",color:"pink"}),t(g(Q),{name:"users",inverted:"",color:"brown"}),t(g(Q),{name:"users",inverted:"",color:"grey"})]),_:1}))}},VA=`<template>
  <SuiIconGroup size="huge">
    <SuiIcon name="circle outline" size="big" />
    <SuiIcon name="user" />
  </SuiIconGroup>
  <SuiIconGroup size="huge">
    <SuiIcon name="dont" size="big" color="red" />
    <SuiIcon name="user" color="black" />
  </SuiIconGroup>
</template>`,HA={__name:"IconsDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Icons",code:VA},{description:i(()=>[l(" Several icons can be used together as a group ")]),example:i(()=>[t(g(pi),{size:"huge"},{default:i(()=>[t(g(Q),{name:"circle outline",size:"big"}),t(g(Q),{name:"user"})]),_:1}),t(g(pi),{size:"huge"},{default:i(()=>[t(g(Q),{name:"dont",size:"big",color:"red"}),t(g(Q),{name:"user",color:"black"})]),_:1})]),_:1}))}},NA=`<template>
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
</template>`,OA={__name:"CornerIconDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Corner Icon",code:NA},{description:i(()=>[l(" A group of icons can display a smaller corner icon ")]),example:i(()=>[t(g(pi),{size:"huge"},{default:i(()=>[t(g(Q),{name:"puzzle"}),t(g(Q),{name:"add",corner:"top left"})]),_:1}),t(g(pi),{size:"huge"},{default:i(()=>[t(g(Q),{name:"puzzle"}),t(g(Q),{name:"add",corner:"top right"})]),_:1}),t(g(pi),{size:"huge"},{default:i(()=>[t(g(Q),{name:"puzzle"}),t(g(Q),{name:"add",corner:"bottom left"})]),_:1}),t(g(pi),{size:"huge"},{default:i(()=>[t(g(Q),{name:"puzzle"}),t(g(Q),{name:"add",corner:"bottom right"})]),_:1})]),_:1}))}},jA={__name:"Icon",setup(e){const a=[{id:"disabled",label:"Disabled",category:"States",component:_A},{id:"loading",label:"Loading",category:"States",component:vA},{id:"fitted",label:"Fitted",category:"Variations",component:wA},{id:"size",label:"Size",category:"Variations",component:AA},{id:"link",label:"Link",category:"Variations",component:xA},{id:"flipped",label:"Flipped",category:"Variations",component:BA},{id:"rotated",label:"Rotated",category:"Variations",component:LA},{id:"circular",label:"Circular",category:"Variations",component:DA},{id:"bordered",label:"Bordered",category:"Variations",component:RA},{id:"colored",label:"Colored",category:"Variations",component:PA},{id:"inverted",label:"Inverted",category:"Variations",component:MA},{id:"icons",label:"Icons",category:"Groups",component:HA},{id:"corner-icon",label:"Corner Icon",category:"Groups",component:OA}];return(n,o)=>(L(),R(Gt,{title:"Icon",description:"An icon is a glyph used to represent something else","component-docs":a}))}},GA=D({name:"DocExample",components:{Prism:Mm},props:{title:String,description:String,code:String},setup(){const e=q(!1);return{active:e,toggle:()=>e.value=!e.value}}}),qA={class:"example"};function UA(e,a,n,o,r,c){const m=y("sui-header-subheader"),p=y("sui-header"),s=y("sui-grid-column"),u=y("sui-icon"),f=y("sui-grid-row"),d=y("prism"),h=y("sui-grid");return L(),ge("div",qA,[t(h,{columns:2},{default:i(()=>[t(f,null,{default:i(()=>[t(s,null,{default:i(()=>[t(p,{as:"h3"},{default:i(()=>[l(ke(e.title)+" ",1),t(m,null,{default:i(()=>[l(ke(e.description),1)]),_:1})]),_:1})]),_:1}),t(s,{textAlign:"right"},{default:i(()=>[t(u,{name:"code",color:"grey",onClick:e.toggle,link:""},null,8,["onClick"])]),_:1})]),_:1}),t(f,null,{default:i(()=>[t(s,{width:16},{default:i(()=>[ma(e.$slots,"default",{},void 0,!0)]),_:3}),e.active?(L(),R(s,{key:0,width:16},{default:i(()=>[t(d,{language:"markup"},{default:i(()=>[l(ke(e.code),1)]),_:1})]),_:1})):Ud("",!0)]),_:3})]),_:3})])}const Pe=we(GA,[["render",UA],["__scopeId","data-v-fcfb6a67"]]),ae="/vue-fomantic-ui/images/wireframe/image.png",Al="/vue-fomantic-ui/images/wireframe/image-text.png",za="/vue-fomantic-ui/images/wireframe/white-image.png",kt="/vue-fomantic-ui/images/wireframe/square-image.png",YA=D({name:"ImageDoc",components:{DocExample:Pe},setup(){return{imageCode:'<sui-image src="/images/image.png" size="small" />',imageLinkCode:`<sui-image
  as="a"
  size="medium"
  src="/images/image-text.png"
  href="https://google.com"
  target="_blank"
/>`,hiddenCode:'<sui-image hidden src="/images/image.png" size="small" />',disabledCode:'<sui-image disabled src="/images/image.png" size="small" />',avatarCode:`<div>
  <sui-image avatar src="/images/image.png" />
  <span>Username</span>
</div>`,borderedCode:'<sui-image bordered size="medium" src="/images/white-image.png" />',fluidCode:'<sui-image fluid src="/images/image.png" />',roundedCode:'<sui-image rounded size="medium" src="/images/image.png" />',circularCode:'<sui-image circular size="medium" src="/images/square-image.png" />',verticallyAlignedCode:`<div>
  <sui-image verticalAlign="top" size="tiny" src="/images/square-image.png" />
  <span>Top Aligned</span>
  <sui-divider />
  <sui-image verticalAlign="middle" size="tiny" src="/images/square-image.png" />
  <span>Middle Aligned</span>
  <sui-divider />
  <sui-image verticalAlign="bottom" size="tiny" src="/images/square-image.png" />
  <span>Bottom Aligned</span>
</div>`,centeredCode:`<sui-segment>
  <sui-image centered size="medium" src="/images/wireframe/image.png" />
  <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
  <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
  <sui-image centered size="small" src="/images/wireframe/image-text.png" />
  <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
</sui-segment>`,spacedCode:`<sui-segment>
  <p>Te eum doming eirmod, nominati pertinacia 
  <sui-image spaced size="mini" src="/images/image.png" />
    argumentum ad his. Ex eam alia facete scriptorem, 
    est autem aliquip detraxit at. Usu ocurreret referrentur at, 
    cu epicurei appellantur vix. Cum ea laoreet recteque electram, 
    eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
</sui-segment>`,floatedCode:`<sui-segment>
  <sui-image floated="left" size="small" src="/images/image-text.png" />
  <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. 
    Ex eam alia facete scriptorem, est autem aliquip detraxit at. 
    Usu ocurreret referrentur at, cu epicurei appellantur vix. 
    Cum ea laoreet recteque electram, eos choro alterum definiebas in. 
    Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
  <sui-image floated="right" size="small" src="/images/image-text.png" />
  <p>Audiam quaerendum eu sea, pro omittam definiebas ex. 
    Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, 
    his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, 
    vim vivendum maiestatis in.</p>
  <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. 
    Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. 
    Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, 
    wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, 
    quas minimum postulant per id.</p>
</sui-segment>`,sizeCode:`<div>
  <sui-image size="mini" src="/images/image.png" />
  <sui-divider hidden />
  <sui-image size="tiny" src="/images/image.png" />
  <sui-divider hidden />
  <sui-image size="medium" src="/images/image.png" />
  <sui-divider hidden />
  <sui-image size="large" src="/images/image.png" />
</div>`,sizeGroupCode:`<sui-image-group size="tiny">
  <sui-image src="/images/image.png" />
  <sui-image src="/images/image.png" />
  <sui-image src="/images/image.png" />
  <sui-image src="/images/image.png" />
</sui-image-group>`}}}),JA={class:"intro"},WA=S("span",null,"Username",-1),KA=S("span",null,"Top Aligned",-1),XA=S("span",null,"Middle Aligned",-1),QA=S("span",null,"Bottom Aligned",-1),ZA=S("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),e0=S("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),t0=S("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),i0=S("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),a0=S("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),l0=S("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1);function n0(e,a,n,o,r,c){const m=y("sui-header-subheader"),p=y("sui-header"),s=y("sui-divider"),u=y("sui-icon"),f=y("sui-menu-item"),d=y("sui-menu"),h=y("sui-container"),v=y("sui-segment"),_=y("sui-image"),w=y("doc-example"),A=y("sui-image-group");return L(),ge("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",JA,[t(p,{as:"h1"},{default:i(()=>[l("Image "),t(m,null,{default:i(()=>[l(" An image is a graphic representation of something ")]),_:1})]),_:1}),t(s,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(w,{title:"Image",description:"An image",code:e.imageCode},{default:i(()=>[t(_,{src:ae,size:"small"})]),_:1},8,["code"]),t(w,{title:"Image Link",description:"An image can be formatted to link to other content",code:e.imageLinkCode},{default:i(()=>[t(_,{as:"a",size:"medium",src:Al,href:"https://google.com",target:"_blank"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(w,{title:"Hidden",description:"An image can be hidden",code:e.hiddenCode},{default:i(()=>[t(_,{hidden:"",src:ae,size:"small"})]),_:1},8,["code"]),t(w,{title:"Disabled",description:"An image can show that it is disabled and cannot be selected",code:e.disabledCode},{default:i(()=>[t(_,{disabled:"",src:ae,size:"small"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(w,{title:"Avatar",description:"An image may be formatted to appear inline with text as an avatar",code:e.avatarCode},{default:i(()=>[S("div",null,[t(_,{avatar:"",src:ae}),WA])]),_:1},8,["code"]),t(w,{title:"Bordered",description:"An image may include a border to emphasize the edges of white or transparent content",code:e.borderedCode},{default:i(()=>[t(_,{bordered:"",size:"medium",src:za})]),_:1},8,["code"]),t(w,{title:"Fluid",description:"An image can take up the width of its container",code:e.fluidCode},{default:i(()=>[t(_,{fluid:"",src:ae})]),_:1},8,["code"]),t(w,{title:"Rounded",description:"An image may appear rounded",code:e.roundedCode},{default:i(()=>[t(_,{rounded:"",size:"medium",src:ae})]),_:1},8,["code"]),t(w,{title:"Circular",description:"An image may appear circular",code:e.circularCode},{default:i(()=>[t(_,{circular:"",size:"medium",src:kt})]),_:1},8,["code"]),t(w,{title:"Vertically Aligned",description:"An image can specify its vertical alignment",code:e.verticallyAlignedCode},{default:i(()=>[S("div",null,[t(_,{verticalAlign:"top",size:"tiny",src:kt}),KA,t(s),t(_,{verticalAlign:"middle",size:"tiny",src:kt}),XA,t(s),t(_,{verticalAlign:"bottom",size:"tiny",src:kt}),QA])]),_:1},8,["code"]),t(w,{title:"Centered",description:"An image can appear centered in a content block",code:e.centeredCode},{default:i(()=>[t(v,null,{default:i(()=>[t(_,{centered:"",size:"medium",src:ae}),ZA,e0,t(_,{centered:"",size:"small",src:Al}),t0]),_:1})]),_:1},8,["code"]),t(w,{title:"Spaced",description:"An image can specify that it needs an additional spacing to separate it from nearby content",code:e.spacedCode},{default:i(()=>[t(v,null,{default:i(()=>[S("p",null,[l("Te eum doming eirmod, nominati pertinacia "),t(_,{spaced:"",size:"mini",src:ae}),l(" argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.")])]),_:1})]),_:1},8,["code"]),t(w,{title:"Floated",description:"An image can sit to the left or right of other content",code:e.floatedCode},{default:i(()=>[t(v,null,{default:i(()=>[t(_,{floated:"left",size:"small",src:Al}),i0,t(_,{floated:"right",size:"small",src:Al}),a0,l0]),_:1})]),_:1},8,["code"]),t(w,{title:"Size",description:"An image may appear at different sizes",code:e.sizeCode},{default:i(()=>[S("div",null,[t(_,{size:"mini",src:ae}),t(s,{hidden:""}),t(_,{size:"tiny",src:ae}),t(s,{hidden:""}),t(_,{size:"medium",src:ae}),t(s,{hidden:""}),t(_,{size:"large",src:ae})])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Groups")]),_:1}),t(w,{title:"Size",description:"A group of images can be formatted to have the same size",code:e.sizeGroupCode},{default:i(()=>[t(A,{size:"tiny"},{default:i(()=>[t(_,{src:ae}),t(_,{src:ae}),t(_,{src:ae}),t(_,{src:ae})]),_:1})]),_:1},8,["code"])]),_:1})])}const o0=we(YA,[["render",n0]]),s0=`<template>
  <SuiInput placeholder="Search..." />
</template>`,r0={__name:"InputDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Input",code:s0},{description:i(()=>[l(" A standard input ")]),example:i(()=>[t(g(et),{placeholder:"Search..."})]),_:1}))}},u0=`<template>
  <SuiInput focus placeholder="Search..." />
</template>`,c0={__name:"FocusDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Focus",code:u0},{description:i(()=>[l(" An input field can show a user is currently interacting with it ")]),example:i(()=>[t(g(et),{focus:"",placeholder:"Search..."})]),_:1}))}},d0=`<template>
  <SuiInput loading icon="user" placeholder="Search..." />
  <SuiInput loading icon="user" iconPosition="left" placeholder="Search..." />
</template>`,m0={__name:"LoadingDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Loading",code:d0},{description:i(()=>[l(" An icon input field can show that it is currently loading data ")]),example:i(()=>[t(g(et),{loading:"",icon:"user",placeholder:"Search..."}),t(g(et),{loading:"",icon:"user",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},p0=`<template>
  <SuiInput disabled placeholder="Search..." />
</template>`,f0={__name:"DisabledDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Disabled",code:p0},{description:i(()=>[l(" An input field can show that it is disabled ")]),example:i(()=>[t(g(et),{disabled:"",placeholder:"Search..."})]),_:1}))}},g0=`<template>
  <SuiInput error placeholder="Search..." />
</template>`,h0={__name:"ErrorDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Error",code:g0},{description:i(()=>[l(" An input field can show the data contains errors ")]),example:i(()=>[t(g(et),{error:"",placeholder:"Search..."})]),_:1}))}},_0=`<template>
  <SuiInput icon="search" placeholder="Search..." />
  <SuiInput icon="users" iconPosition="left" placeholder="Search..." />
</template>`,b0={__name:"IconDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Icon",code:_0},{description:i(()=>[l(" An input can be formatted with an icon ")]),example:i(()=>[t(g(et),{icon:"search",placeholder:"Search..."}),t(g(et),{icon:"users",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},v0=`<template>
  <SuiInput label="http://" placeholder="mysite.com" />
</template>`,y0={__name:"LabeledDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Labeled",code:v0},{description:i(()=>[l(" An input can be formatted with a label ")]),example:i(()=>[t(g(et),{label:"http://",placeholder:"mysite.com"})]),_:1}))}},S0=`<template>
  <SuiInput action="Search" />
</template>`,w0={__name:"ActionDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Action",code:S0},{description:i(()=>[l(" An input can be formatted to alert the user to an action they may perform ")]),example:i(()=>[t(g(et),{action:"Search"})]),_:1}))}},C0=`<template>
  <SuiInput transparent icon="search" placeholder="Search..." />
</template>`,A0={__name:"TransparentDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Transparent",code:C0},{description:i(()=>[l(" A transparent input has no background ")]),example:i(()=>[t(g(et),{transparent:"",icon:"search",placeholder:"Search..."})]),_:1}))}},k0=`<template>
  <SuiSegment inverted>
    <SuiInput inverted placeholder="Search..." />
  </SuiSegment>
</template>`,x0={__name:"InvertedDoc",setup(e){return(a,n)=>{const o=y("SuiSegment");return L(),R(N,{label:"Inverted",code:k0},{description:i(()=>[l(" An input can be formatted to appear on dark backgrounds ")]),example:i(()=>[t(o,{inverted:""},{default:i(()=>[t(g(et),{inverted:"",placeholder:"Search..."})]),_:1})]),_:1})}}},$0=`<template>
  <SuiInput fluid icon="search" placeholder="Search..." />
</template>`,B0={__name:"FluidDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Fluid",code:$0},{description:i(()=>[l(" An input can take the size of its container ")]),example:i(()=>[t(g(et),{fluid:"",icon:"search",placeholder:"Search..."})]),_:1}))}},T0=`<template>
  <SuiInput icon="search" placeholder="Search mini..." size="mini" />
  <SuiInput icon="search" placeholder="Search small..." size="small" />
  <SuiInput icon="search" placeholder="Search large..." size="large" />
  <SuiInput icon="search" placeholder="Search big..." size="big" />
  <SuiInput icon="search" placeholder="Search huge..." size="huge" />
  <SuiInput icon="search" placeholder="Search massive..." size="massive" />
</template>`,L0={__name:"SizeDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Size",code:T0},{description:i(()=>[l(" An input can vary in size ")]),example:i(()=>[t(g(et),{icon:"search",placeholder:"Search mini...",size:"mini"}),t(g(et),{icon:"search",placeholder:"Search small...",size:"small"}),t(g(et),{icon:"search",placeholder:"Search large...",size:"large"}),t(g(et),{icon:"search",placeholder:"Search big...",size:"big"}),t(g(et),{icon:"search",placeholder:"Search huge...",size:"huge"}),t(g(et),{icon:"search",placeholder:"Search massive...",size:"massive"})]),_:1}))}},E0={__name:"Input",setup(e){const a=[{id:"input",label:"Input",category:"Types",component:r0},{id:"focus",label:"Focus",category:"States",component:c0},{id:"loading",label:"Loading",category:"States",component:m0},{id:"disabled",label:"Disabled",category:"States",component:f0},{id:"error",label:"Error",category:"States",component:h0},{id:"icon",label:"Icon",category:"Variations",component:b0},{id:"labeled",label:"Labeled",category:"Variations",component:y0},{id:"action",label:"Action",category:"Variations",component:w0},{id:"transparent",label:"Transparent",category:"Variations",component:A0},{id:"inverted",label:"Inverted",category:"Variations",component:x0},{id:"fluid",label:"Fluid",category:"Variations",component:B0},{id:"size",label:"Size",category:"Variations",component:L0}];return(n,o)=>(L(),R(Gt,{title:"Input",description:"An input is a field used to elicit a response from a user","component-docs":a}))}},D0=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
</template>`,I0={__name:"LabelDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Label",code:D0},{description:i(()=>[l(" A label ")]),example:i(()=>[t(g(H),null,{default:i(()=>[t(g(Q),{name:"mail"}),l(" 23 ")]),_:1})]),_:1}))}},zo="/vue-fomantic-ui/images/avatar/small/joe.jpg",cp="/vue-fomantic-ui/images/avatar/small/veronika.jpg",Qt="/vue-fomantic-ui/images/avatar/small/elliot.jpg",R0=S("img",{src:zo},null,-1),z0=S("img",{src:cp},null,-1),P0=S("img",{src:Qt},null,-1),F0=`<template>
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
</template>`,M0={__name:"ImageDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Image",code:F0},{description:i(()=>[l(" A label can be formatted to emphasize an image ")]),example:i(()=>[t(g(H),{as:"a",image:""},{default:i(()=>[R0,l(" Joe ")]),_:1}),t(g(H),{as:"a",image:"",color:"blue"},{default:i(()=>[z0,l(" Veronika "),t(g(Vi),null,{default:i(()=>[l("Friend")]),_:1})]),_:1}),t(g(H),{as:"a",image:""},{default:i(()=>[P0,l(" Elliot "),t(g(Q),{name:"delete"})]),_:1})]),_:1}))}},V0=S("input",{type:"text",placeholder:"First Name"},null,-1),H0=S("input",{type:"text"},null,-1),N0=S("input",{type:"text",placeholder:"Username"},null,-1),O0=S("input",{type:"password"},null,-1),j0=`<template>
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
</template>`,G0={__name:"PointingDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Pointing",code:j0},{description:i(()=>[l(" A label can point to content next to it ")]),example:i(()=>[t(g(jl),{fluid:""},{default:i(()=>[t(g(fi),null,{default:i(()=>[V0,t(g(H),{pointing:""},{default:i(()=>[l("Please enter a value")]),_:1})]),_:1}),t(g(Ke)),t(g(fi),null,{default:i(()=>[t(g(H),{pointing:"below"},{default:i(()=>[l("Please enter a value")]),_:1}),H0]),_:1}),t(g(Ke)),t(g(fi),{inline:""},{default:i(()=>[N0,t(g(H),{pointing:"left",color:"red",basic:""},{default:i(()=>[l("That name is taken!")]),_:1})]),_:1}),t(g(Ke)),t(g(fi),{inline:""},{default:i(()=>[t(g(H),{pointing:"right",color:"red",basic:""},{default:i(()=>[l("Your password must be 6 characters or more")]),_:1}),O0]),_:1})]),_:1})]),_:1}))}},q0=`<template>
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
</template>`,U0={__name:"CornerDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Corner",code:q0},{description:i(()=>[l(" A label can position itself in the corner of an element ")]),example:i(()=>[t(g(ba),{columns:2},{default:i(()=>[t(g(_t),null,{default:i(()=>[t(g(Ue),{label:{as:"a",corner:"left",icon:"heart"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(g(_t),null,{default:i(()=>[t(g(Ue),{label:{as:"a",color:"red",corner:"right",icon:"save"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1})]),_:1}))}},Y0=`<template>
  <SuiLabel as="a" tag>New</SuiLabel>
  <SuiLabel as="a" tag color="red">Upcoming</SuiLabel>
  <SuiLabel as="a" tag color="teal">Featured</SuiLabel>
</template>`,J0={__name:"TagDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Tag",code:Y0},{description:i(()=>[l(" A label can appear as a tag ")]),example:i(()=>[t(g(H),{as:"a",tag:""},{default:i(()=>[l("New")]),_:1}),t(g(H),{as:"a",tag:"",color:"red"},{default:i(()=>[l("Upcoming")]),_:1}),t(g(H),{as:"a",tag:"",color:"teal"},{default:i(()=>[l("Featured")]),_:1})]),_:1}))}},W0=S("span",null,"Account Details",-1),K0=S("span",null,"User Reviews",-1),X0=S("span",null,"Technical Specifications",-1),Q0=S("span",null,"User Reviews",-1),Z0=`<template>
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
</template>`,ek={__name:"RibbonDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Ribbon",code:Z0},{description:i(()=>[l(" A label can appear as a ribbon attaching itself to an element. ")]),example:i(()=>[t(g(ba),{columns:2},{default:i(()=>[t(g(_t),null,{default:i(()=>[t(g(Xe),{raised:""},{default:i(()=>[t(g(H),{as:"a",ribbon:"",color:"red"},{default:i(()=>[l("Overview")]),_:1}),W0,t(g(Ue),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),t(g(H),{as:"a",ribbon:"",color:"blue"},{default:i(()=>[l("Community")]),_:1}),K0,t(g(Ue),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(g(_t),null,{default:i(()=>[t(g(Xe),{raised:""},{default:i(()=>[t(g(H),{as:"a",ribbon:"right",color:"orange"},{default:i(()=>[l("Specs")]),_:1}),X0,t(g(Ue),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),t(g(H),{as:"a",ribbon:"right",color:"teal"},{default:i(()=>[l("Reviews")]),_:1}),Q0,t(g(Ue),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1}))}},tk=`<template>
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
</template>`,ik={__name:"AttachedDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Attached",code:tk},{description:i(()=>[l(" A label can attach to a content segment ")]),example:i(()=>[t(g(ba),{columns:3},{default:i(()=>[t(g(Gl),null,{default:i(()=>[t(g(_t),null,{default:i(()=>[t(g(Xe),{padded:""},{default:i(()=>[t(g(H),{attached:"top"},{default:i(()=>[l("HTML")]),_:1}),t(g(Ue),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(g(_t),null,{default:i(()=>[t(g(Xe),{padded:""},{default:i(()=>[t(g(H),{attached:"bottom"},{default:i(()=>[l("CSS")]),_:1}),t(g(Ue),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(g(_t),null,{default:i(()=>[t(g(Xe),{padded:""},{default:i(()=>[t(g(H),{attached:"top right"},{default:i(()=>[l("Code")]),_:1}),t(g(Ue),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1}),t(g(Gl),null,{default:i(()=>[t(g(_t),null,{default:i(()=>[t(g(Xe),{padded:""},{default:i(()=>[t(g(H),{attached:"top left"},{default:i(()=>[l("View")]),_:1}),t(g(Ue),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(g(_t),null,{default:i(()=>[t(g(Xe),{padded:""},{default:i(()=>[t(g(H),{attached:"bottom left"},{default:i(()=>[l("User View")]),_:1}),t(g(Ue),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(g(_t),null,{default:i(()=>[t(g(Xe),{padded:""},{default:i(()=>[t(g(H),{attached:"bottom right"},{default:i(()=>[l("Admin View")]),_:1}),t(g(Ue),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},ak=`<template>
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
</template>`,lk={__name:"HorizontalDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Horizontal",code:ak},{description:i(()=>[l(" A horizontal label is formatted to label content along-side it horizontally ")]),example:i(()=>[t(g(So),{divided:"",selection:""},{default:i(()=>[t(g(Xi),null,{default:i(()=>[t(g(H),{color:"red",horizontal:""},{default:i(()=>[l("Fruit")]),_:1}),l(" Kumquats ")]),_:1}),t(g(Xi),null,{default:i(()=>[t(g(H),{color:"purple",horizontal:""},{default:i(()=>[l("Candy")]),_:1}),l(" Ice Cream ")]),_:1}),t(g(Xi),null,{default:i(()=>[t(g(H),{color:"red",horizontal:""},{default:i(()=>[l("Fruit")]),_:1}),l(" Orange ")]),_:1}),t(g(Xi),null,{default:i(()=>[t(g(H),{horizontal:""},{default:i(()=>[l("Dog")]),_:1}),l(" Poodle ")]),_:1})]),_:1})]),_:1}))}},nk=`<template>
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
</template>`,ok={__name:"FloatingDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Floating",code:nk},{description:i(()=>[l(" A label can float above or below another element ")]),example:i(()=>[t(g(Ao),{compact:""},{default:i(()=>[t(g(ql),null,{default:i(()=>[t(g(Q),{name:"mail"}),l(" Messages "),t(g(H),{floating:"",color:"red"},{default:i(()=>[l("22")]),_:1})]),_:1}),t(g(ql),null,{default:i(()=>[t(g(Q),{name:"users"}),l(" Friends "),t(g(H),{floating:"",color:"teal"},{default:i(()=>[l("22")]),_:1})]),_:1})]),_:1})]),_:1}))}},sk=`<template>
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
</template>`,rk={__name:"InvertedDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Inverted",code:sk},{description:i(()=>[l(" All Variants of Label can be inverted ")]),example:i(()=>[t(g(Xe),{inverted:""},{default:i(()=>[t(g(H),{as:"a",inverted:"",primary:""},{default:i(()=>[l("Primary")]),_:1}),t(g(H),{as:"a",inverted:"",secondary:""},{default:i(()=>[l("Secondary")]),_:1}),t(g(H),{as:"a",inverted:"",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(g(H),{as:"a",inverted:"",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(g(H),{as:"a",inverted:"",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(g(H),{as:"a",basic:"",inverted:"",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(g(H),{as:"a",basic:"",inverted:"",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(g(H),{as:"a",basic:"",inverted:"",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(g(H),{as:"a",basic:"",inverted:"",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(g(H),{as:"a",basic:"",inverted:"",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(g(H),{as:"a",tag:"",inverted:"",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(g(H),{as:"a",tag:"",inverted:"",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(g(H),{as:"a",tag:"",inverted:"",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(g(H),{as:"a",tag:"",inverted:"",color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(g(H),{as:"a",tag:"",inverted:"",color:"black"},{default:i(()=>[l("Black")]),_:1})]),_:1})]),_:1}))}},uk=`<template>
  <SuiLabel>
    Dogs
    <SuiLabelDetail>214</SuiLabelDetail>
  </SuiLabel>
</template>`,ck={__name:"DetailDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Detail",code:uk},{description:i(()=>[l(" A label can contain a detail ")]),example:i(()=>[t(g(H),null,{default:i(()=>[l(" Dogs "),t(g(Vi),null,{default:i(()=>[l("214")]),_:1})]),_:1})]),_:1}))}},dk=`<template>
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
</template>`,mk={__name:"IconDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Icon",code:dk},{description:i(()=>[l(" A label can include an icon ")]),example:i(()=>[t(g(H),null,{default:i(()=>[t(g(Q),{name:"mail"}),l(" Mail ")]),_:1}),t(g(H),null,{default:i(()=>[t(g(Q),{name:"checkmark"}),l(" Test Passed ")]),_:1}),t(g(H),{icon:"dog"}),t(g(H),{icon:"cat"})]),_:1}))}},pk=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
    <SuiLabelContent>View Mail</SuiLabelContent>
  </SuiLabel>
</template>`,fk={__name:"LinkDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Link",code:pk},{description:i(()=>[l(" A label can be a link or contain an item that links ")]),example:i(()=>[t(g(H),{as:"a"},{default:i(()=>[t(g(Q),{name:"mail"}),l(" 23 ")]),_:1}),t(g(H),null,{default:i(()=>[t(g(Q),{name:"mail"}),l(" 23 "),t(g(Vi),null,{default:i(()=>[l("View Mail")]),_:1})]),_:1})]),_:1}))}},gk=`<template>
  <SuiLabel disabled>Disabled Label</SuiLabel>
</template>`,hk={__name:"DisabledDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Disabled",code:gk},{description:i(()=>[l(" A label can show it is currently unable to be interacted with ")]),example:i(()=>[t(g(H),{disabled:""},{default:i(()=>[l("Disabled Label")]),_:1})]),_:1}))}},_k=`<template>
  <SuiLabel fluid>Fits container</SuiLabel>
</template>`,bk={__name:"FluidDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Fluid",code:_k},{description:i(()=>[l(" A label can take the width of its container ")]),example:i(()=>[t(g(H),{fluid:""},{default:i(()=>[l("Fits container")]),_:1})]),_:1}))}},vk=`<template>
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
</template>`,yk={__name:"CircularDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Circular",code:vk},{description:i(()=>[l(" A label can be circular ")]),example:i(()=>[t(g(H),{circular:"",color:"red"},{default:i(()=>[l("2")]),_:1}),t(g(H),{circular:"",color:"orange"},{default:i(()=>[l("2")]),_:1}),t(g(H),{circular:"",color:"yellow"},{default:i(()=>[l("2")]),_:1}),t(g(H),{circular:"",color:"olive"},{default:i(()=>[l("2")]),_:1}),t(g(H),{circular:"",color:"green"},{default:i(()=>[l("2")]),_:1}),t(g(H),{circular:"",color:"teal"},{default:i(()=>[l("2")]),_:1}),t(g(H),{circular:"",color:"blue"},{default:i(()=>[l("2")]),_:1}),t(g(H),{circular:"",color:"violet"},{default:i(()=>[l("2")]),_:1}),t(g(H),{circular:"",color:"purple"},{default:i(()=>[l("2")]),_:1}),t(g(H),{circular:"",color:"pink"},{default:i(()=>[l("2")]),_:1}),t(g(H),{circular:"",color:"brown"},{default:i(()=>[l("2")]),_:1}),t(g(H),{circular:"",color:"grey"},{default:i(()=>[l("2")]),_:1}),t(g(H),{circular:"",color:"black"},{default:i(()=>[l("2")]),_:1})]),_:1}))}},Sk=S("img",{src:Qt},null,-1),wk=`<template>
  <SuiLabel as="a" basic>Basic</SuiLabel>
  <SuiLabel as="a" basic pointing>Pointing</SuiLabel>
  <SuiLabel as="a" basic image>
    <img src="/images/avatar/small/elliot.jpg" />
    Elliot
  </SuiLabel>
  <SuiLabel as="a" basic pointing color="red">Red Pointing</SuiLabel>
  <SuiLabel as="a" basic color="blue">Blue</SuiLabel>
</template>`,Ck={__name:"BasicDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Basic",code:wk},{description:i(()=>[l(" A label can reduce its complexity ")]),example:i(()=>[t(g(H),{as:"a",basic:""},{default:i(()=>[l("Basic")]),_:1}),t(g(H),{as:"a",basic:"",pointing:""},{default:i(()=>[l("Pointing")]),_:1}),t(g(H),{as:"a",basic:"",image:""},{default:i(()=>[Sk,l(" Elliot ")]),_:1}),t(g(H),{as:"a",basic:"",pointing:"",color:"red"},{default:i(()=>[l("Red Pointing")]),_:1}),t(g(H),{as:"a",basic:"",color:"blue"},{default:i(()=>[l("Blue")]),_:1})]),_:1}))}},Ak=`<template>
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
</template>`,kk={__name:"ColoredDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Colored",code:Ak},{description:i(()=>[l(" A label can have different colors ")]),example:i(()=>[t(g(H),{as:"a",primary:""},{default:i(()=>[l("Primary")]),_:1}),t(g(H),{as:"a",secondary:""},{default:i(()=>[l("Secondary")]),_:1}),t(g(H),{as:"a",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(g(H),{as:"a",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(g(H),{as:"a",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(g(H),{as:"a",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(g(H),{as:"a",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(g(H),{as:"a",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(g(H),{as:"a",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(g(H),{as:"a",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(g(H),{as:"a",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(g(H),{as:"a",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(g(H),{as:"a",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(g(H),{as:"a",color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(g(H),{as:"a",color:"black"},{default:i(()=>[l("Black")]),_:1})]),_:1}))}},xk=`<template>
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
</template>`,$k={__name:"BasicTagDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Basic Tag",code:xk},{description:i(()=>[]),example:i(()=>[t(g(H),{as:"a",basic:"",tag:"",primary:""},{default:i(()=>[l("Primary")]),_:1}),t(g(H),{as:"a",basic:"",tag:"",secondary:""},{default:i(()=>[l("Secondary")]),_:1}),t(g(H),{as:"a",basic:"",tag:"",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(g(H),{as:"a",basic:"",tag:"",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(g(H),{as:"a",basic:"",tag:"",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(g(H),{as:"a",basic:"",tag:"",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(g(H),{as:"a",basic:"",tag:"",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(g(H),{as:"a",basic:"",tag:"",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(g(H),{as:"a",basic:"",tag:"",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(g(H),{as:"a",basic:"",tag:"",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(g(H),{as:"a",basic:"",tag:"",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(g(H),{as:"a",basic:"",tag:"",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(g(H),{as:"a",basic:"",tag:"",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(g(H),{as:"a",basic:"",tag:"",color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(g(H),{as:"a",basic:"",tag:"",color:"black"},{default:i(()=>[l("Black")]),_:1})]),_:1}))}},Bk=`<template>
  <SuiLabel size="mini">Mini</SuiLabel>
  <SuiLabel size="tiny">Tiny</SuiLabel>
  <SuiLabel size="small">Small</SuiLabel>
  <SuiLabel>Medium</SuiLabel>
  <SuiLabel size="large">Large</SuiLabel>
  <SuiLabel size="big">Big</SuiLabel>
  <SuiLabel size="huge">Huge</SuiLabel>
  <SuiLabel size="massive">Massive</SuiLabel>
</template>`,Tk={__name:"SizeDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Size",code:Bk},{description:i(()=>[l(" A label can be small or large ")]),example:i(()=>[t(g(H),{size:"mini"},{default:i(()=>[l("Mini")]),_:1}),t(g(H),{size:"tiny"},{default:i(()=>[l("Tiny")]),_:1}),t(g(H),{size:"small"},{default:i(()=>[l("Small")]),_:1}),t(g(H),null,{default:i(()=>[l("Medium")]),_:1}),t(g(H),{size:"large"},{default:i(()=>[l("Large")]),_:1}),t(g(H),{size:"big"},{default:i(()=>[l("Big")]),_:1}),t(g(H),{size:"huge"},{default:i(()=>[l("Huge")]),_:1}),t(g(H),{size:"massive"},{default:i(()=>[l("Massive")]),_:1})]),_:1}))}},Lk=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,Ek={__name:"GroupSizeDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Group Size",code:Lk},{description:i(()=>[l(" Labels can share sizes together ")]),example:i(()=>[t(g(Hi),{size:"huge"},{default:i(()=>[t(g(H),null,{default:i(()=>[l("Fun")]),_:1}),t(g(H),null,{default:i(()=>[l("Happy")]),_:1}),t(g(H),null,{default:i(()=>[l("Smart")]),_:1}),t(g(H),null,{default:i(()=>[l("Witty")]),_:1})]),_:1})]),_:1}))}},Dk=`<template>
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
</template>`,Ik={__name:"ColoredGroupDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Clored Group",code:Dk},{description:i(()=>[l(" Labels can share colors together ")]),example:i(()=>[t(g(Hi),{color:"blue"},{default:i(()=>[t(g(H),null,{default:i(()=>[l(" Fun "),t(g(Q),{name:"close"})]),_:1}),t(g(H),null,{default:i(()=>[l(" Happy "),t(g(Vi),null,{default:i(()=>[l("Smart")]),_:1})]),_:1}),t(g(H),null,{default:i(()=>[l("Insane")]),_:1}),t(g(H),null,{default:i(()=>[l("Exciting")]),_:1})]),_:1})]),_:1}))}},Rk=`<template>
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
</template>`,zk={__name:"BasicGroupDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Basic Group",code:Rk},{description:i(()=>[l(" Labels can share their style together ")]),example:i(()=>[t(g(Hi),{basic:""},{default:i(()=>[t(g(H),null,{default:i(()=>[l(" Fun "),t(g(Q),{name:"close"})]),_:1}),t(g(H),null,{default:i(()=>[l(" Happy "),t(g(Vi),null,{default:i(()=>[l("Smart")]),_:1})]),_:1}),t(g(H),null,{default:i(()=>[l("Insane")]),_:1}),t(g(H),null,{default:i(()=>[l("Exciting")]),_:1})]),_:1})]),_:1}))}},Pk=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,Fk={__name:"TagGroupDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Tag Group",code:Pk},{description:i(()=>[l(" Labels can share tag formatting ")]),example:i(()=>[t(g(Hi),{tag:""},{default:i(()=>[t(g(H),{as:"a"},{default:i(()=>[l("$10.00")]),_:1}),t(g(H),{as:"a"},{default:i(()=>[l("$19.99")]),_:1}),t(g(H),{as:"a"},{default:i(()=>[l("$24.99")]),_:1}),t(g(H),{as:"a"},{default:i(()=>[l("$10.25")]),_:1})]),_:1})]),_:1}))}},Mk=`<template>
  <SuiLabelGroup tag>
    <SuiLabel as="a">1</SuiLabel>
    <SuiLabel as="a">3</SuiLabel>
    <SuiLabel as="a">4</SuiLabel>
    <SuiLabel as="a">14</SuiLabel>
    <SuiLabel as="a">16</SuiLabel>
    <SuiLabel as="a">34</SuiLabel>
  </SuiLabelGroup>
</template>`,Vk={__name:"CircularGroupDoc",setup(e){return(a,n)=>(L(),R(N,{label:"Circular Group",code:Mk},{description:i(()=>[l(" Labels can share shapes ")]),example:i(()=>[t(g(Hi),{circular:""},{default:i(()=>[t(g(H),{as:"a"},{default:i(()=>[l("1")]),_:1}),t(g(H),{as:"a"},{default:i(()=>[l("3")]),_:1}),t(g(H),{as:"a"},{default:i(()=>[l("4")]),_:1}),t(g(H),{as:"a"},{default:i(()=>[l("14")]),_:1}),t(g(H),{as:"a"},{default:i(()=>[l("16")]),_:1}),t(g(H),{as:"a"},{default:i(()=>[l("34")]),_:1})]),_:1})]),_:1}))}},Hk={__name:"Label",setup(e){const a=[{id:"label",label:"Label",category:"Types",component:I0},{id:"image",label:"Image",category:"Types",component:M0},{id:"pointing",label:"Pointing",category:"Types",component:G0},{id:"corner",label:"Corner",category:"Types",component:U0},{id:"tag",label:"Tag",category:"Types",component:J0},{id:"ribbon",label:"Ribbon",category:"Types",component:ek},{id:"attached",label:"Attached",category:"Types",component:ik},{id:"horizontal",label:"Horizontal",category:"Types",component:lk},{id:"floating",label:"Floating",category:"Types",component:ok},{id:"inverted",label:"Inverted",category:"Types",component:rk},{id:"detail",label:"Detail",category:"Content",component:ck},{id:"icon",label:"Icon",category:"Content",component:mk},{id:"link",label:"Link",category:"Content",component:fk},{id:"disabled",label:"Disabled",category:"States",component:hk},{id:"fluid",label:"Fluid",category:"Variations",component:bk},{id:"circular",label:"Circular",category:"Variations",component:yk},{id:"basic",label:"Basic",category:"Variations",component:Ck},{id:"colored",label:"Colored",category:"Variations",component:kk},{id:"basic-tag",label:"Basic Tag",category:"Variations",component:$k},{id:"size",label:"Size",category:"Variations",component:Tk},{id:"group-size",label:"Group Size",category:"Groups",component:Ek},{id:"colored-group",label:"Colored Group",category:"Groups",component:Ik},{id:"basic-group",label:"Basic Group",category:"Groups",component:zk},{id:"tag-group",label:"Tag Group",category:"Groups",component:Fk},{id:"circular-group",label:"Circular Group",category:"Groups",component:Vk}];return(n,o)=>(L(),R(Gt,{title:"Label",description:"A label displays content classification","component-docs":a}))}},Nk="/vue-fomantic-ui/images/avatar/small/rachel.png",Ok="/vue-fomantic-ui/images/avatar/small/lindsay.png",jk="/vue-fomantic-ui/images/avatar/small/matthew.png",Sn="/vue-fomantic-ui/images/avatar/small/jenny.jpg",Gk="/vue-fomantic-ui/images/avatar/small/tom.jpg",kl="/vue-fomantic-ui/images/avatar/small/christian.jpg",wn="/vue-fomantic-ui/images/avatar/small/matt.jpg",Pa="/vue-fomantic-ui/images/avatar/small/helen.jpg",xi="/vue-fomantic-ui/images/avatar/small/daniel.jpg",Po="/vue-fomantic-ui/images/avatar/small/stevie.jpg",qk=D({name:"ListDoc",components:{DocExample:Pe},setup(){return{listCode:`<sui-list>
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
</div>`}}}),Uk={class:"intro"},Yk=S("div",null,"Benefits",-1),Jk={class:"list"},Wk=S("a",null,"Languages",-1),Kk=S("a",null,[S("b",null,"Arrested Development")],-1),Xk=S("a",null,[S("b",null,"Bob's Burgers")],-1),Qk=S("a",null,[S("b",null,"The Godfather Part 2")],-1),Zk=S("a",null,[S("b",null,"Twin Peaks")],-1),ex=S("a",null,[S("b",null,"Arrested Development")],-1),tx=S("a",null,[S("b",null,"Bob's Burgers")],-1),ix=S("a",null,[S("b",null,"The Godfather Part 2")],-1);function ax(e,a,n,o,r,c){const m=y("sui-header-subheader"),p=y("sui-header"),s=y("sui-divider"),u=y("sui-icon"),f=y("sui-menu-item"),d=y("sui-menu"),h=y("sui-container"),v=y("sui-segment"),_=y("sui-list-item"),w=y("sui-list"),A=y("doc-example"),$=y("sui-list-list"),b=y("sui-list-header"),C=y("sui-list-description"),x=y("sui-list-content"),B=y("sui-image");return L(),ge("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",Uk,[t(p,{as:"h1"},{default:i(()=>[l("List "),t(m,null,{default:i(()=>[l(" A list is used to group related content ")]),_:1})]),_:1}),t(s,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(A,{title:"List",description:"A list groups related content",code:e.listCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Apples")]),_:1}),t(_,null,{default:i(()=>[l("Pears")]),_:1}),t(_,null,{default:i(()=>[l("Oranges")]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Bulleted",description:"A list can mark items with a bullet",code:e.bulletedCode},{default:i(()=>[t(w,{bulleted:""},{default:i(()=>[t(_,null,{default:i(()=>[l("Gaining Access")]),_:1}),t(_,null,{default:i(()=>[l("Inviting Friends")]),_:1}),t(_,null,{default:i(()=>[Yk,S("div",Jk,[t(_,{as:"a"},{default:i(()=>[l("Link to somewhere")]),_:1}),t(_,null,{default:i(()=>[l("Rebates")]),_:1}),t(_,null,{default:i(()=>[l("Discounts")]),_:1})])]),_:1}),t(_,null,{default:i(()=>[l("Warranty")]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Ordered",description:"A list can be ordered numerically",code:e.orderedCode},{default:i(()=>[t(w,{ordered:""},{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Getting Started")]),_:1}),t(_,{as:"a"},{default:i(()=>[l("Introduction")]),_:1}),t(_,null,{default:i(()=>[Wk,t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("HTML")]),_:1}),t(_,{as:"a"},{default:i(()=>[l("Javascript")]),_:1}),t(_,{as:"a"},{default:i(()=>[l("CSS")]),_:1})]),_:1})]),_:1}),t(_,{as:"a"},{default:i(()=>[l("Review")]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Link",description:"A list can be specially formatted for navigation links",code:e.linkCode},{default:i(()=>[t(w,{link:""},{default:i(()=>[t(_,{active:""},{default:i(()=>[l("Home")]),_:1}),t(_,{as:"a"},{default:i(()=>[l("About")]),_:1}),t(_,{as:"a"},{default:i(()=>[l("Jobs")]),_:1}),t(_,{as:"a"},{default:i(()=>[l("Team")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(A,{title:"Item",description:"A list item can contain a set of items",code:e.itemCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[l("1")]),_:1}),t(_,null,{default:i(()=>[l("2")]),_:1}),t(_,null,{default:i(()=>[l("3")]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Icon",description:"A list item can contain an icon",code:e.iconCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[t(u,{name:"help"}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Floated Icon")]),_:1}),t(C,null,{default:i(()=>[l(" This text will always have a left margin to make sure it sits alongside your icon ")]),_:1})]),_:1})]),_:1}),t(_,{as:"a"},{default:i(()=>[t(u,{name:"right triangle"}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Icon Alignment")]),_:1}),t(C,null,{default:i(()=>[l(" Floated icons are by default top aligned. To have an icon top aligned try this example ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(u,{name:"help"}),l(" Inline Text ")]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Image",description:"A list can contain an image",code:e.imageContentCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t(B,{avatar:"",src:Nk}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Rachel")]),_:1}),t(C,null,{default:i(()=>[l(" Last seen watching "),Kk,l(" just now. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:Ok}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Lindsay")]),_:1}),t(C,null,{default:i(()=>[l(" Last seen watching "),Xk,l(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:jk}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Matthew")]),_:1}),t(C,null,{default:i(()=>[l(" Last seen watching "),Qk,l(" yesterday. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:Sn}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Jenny Hess")]),_:1}),t(C,null,{default:i(()=>[l(" Last seen watching "),Zk,l(" 3 days ago. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:cp}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Veronika Ossi")]),_:1}),t(C,null,{default:i(()=>[l(" Has not watched anything recently ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Link",description:"A list can contain links",code:e.linkContentCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("What is a FAQ?")]),_:1}),t(_,{as:"a"},{default:i(()=>[l("Who is our user?")]),_:1}),t(_,{as:"a"},{default:i(()=>[l("Where is our office located?")]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"header",description:"A list item can contain a header",code:e.headerContentCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[l("New York City")]),_:1}),l(" A lovely city ")]),_:1}),t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Chicago")]),_:1}),l(" Also quite a lovely city ")]),_:1}),t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Los Angeles")]),_:1}),l(" Sometimes can be a lovely city ")]),_:1}),t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[l("San Francisco")]),_:1}),l(" What a lovely city ")]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Description",description:"A list item can contain a description",code:e.descriptionContentCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t(u,{name:"map marker"}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[l("Krolewskie Jadlo")]),_:1}),t(C,null,{default:i(()=>[l(" An excellent polish restaurant, quick delivery and hearty, filling meals. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(u,{name:"map marker"}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[l("Xian Famous Foods")]),_:1}),t(C,null,{default:i(()=>[l(" A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(u,{name:"map marker"}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[l("Sapporo Haru")]),_:1}),t(C,null,{default:i(()=>[l(" Greenpoint's best choice for quick and delicious sushi. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(u,{name:"map marker"}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[l("Enid's")]),_:1}),t(C,null,{default:i(()=>[l(" At night a bar, during the day a delicious brunch spot. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(A,{title:"Horizontal",description:"A list can be formatted to have items appear horizontally",code:e.horizontalVarCode},{default:i(()=>[t(w,{horizontal:""},{default:i(()=>[t(_,null,{default:i(()=>[t(B,{avatar:"",src:Gk}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Tom")]),_:1}),l(" Top Contributor ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:kl}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Christian Rocha")]),_:1}),l(" Admin ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:wn}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Matt")]),_:1}),l(" Top Rated User ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Inverted",description:"A list can be inverted to appear on a dark background",code:e.invertedVarCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(w,{inverted:"",relaxed:"",divided:""},{default:i(()=>[t(_,null,{default:i(()=>[t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Snickerdoodle")]),_:1}),l(" An excellent companion ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Poodle")]),_:1}),l(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Paulo")]),_:1}),l(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Selection",description:"A selection list formats list items as possible choices",code:e.selectionVarCode},{default:i(()=>[t(w,{selection:"",verticalAlign:"middle"},{default:i(()=>[t(_,null,{default:i(()=>[t(B,{avatar:"",src:Pa}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Helen")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:kl}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Christian")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:xi}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Animated",description:"A list can animate to set the current item apart from the list",code:e.animatedVarCode},{default:i(()=>[t(w,{animated:"",verticalAlign:"middle"},{default:i(()=>[t(_,null,{default:i(()=>[t(B,{avatar:"",src:Pa}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Helen")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:kl}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Christian")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:xi}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Relaxed",description:"A list can relax its padding to provide more negative space",code:e.relaxedVarCode},{default:i(()=>[t(w,{relaxed:""},{default:i(()=>[t(_,null,{default:i(()=>[t(B,{avatar:"",src:xi}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[l("Daniel Louise")]),_:1}),t(C,null,{default:i(()=>[l(" Last seen watching "),ex,l(" just now. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:Po}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[l("Stevie Feliciano")]),_:1}),t(C,null,{default:i(()=>[l(" Last seen watching "),tx,l(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:Qt}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(C,null,{default:i(()=>[l(" Last seen watching "),ix,l(" yesterday. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Divided",description:"A list can show divisions between content",code:e.dividedVarCode},{default:i(()=>[t(w,{divided:"",verticalAlign:"middle"},{default:i(()=>[t(_,null,{default:i(()=>[t(B,{avatar:"",src:xi}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[l("Daniel Louise")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:Po}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[l("Stevie Feliciano")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:Qt}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Celled",description:"A list can divide its items into cells",code:e.celledVarCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(_,null,{default:i(()=>[t(B,{avatar:"",src:Pa}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Snickerdoodle")]),_:1}),l(" An excellent companion ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:xi}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Poodle")]),_:1}),l(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:xi}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Paulo")]),_:1}),l(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Size",description:"A list can vary in size",code:e.sizeCode},{default:i(()=>[t(w,{horizontal:"",divided:"",size:"mini"},{default:i(()=>[t(_,null,{default:i(()=>[t(B,{avatar:"",src:Pa}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Helen")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:kl}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Christian")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:xi}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content Variations")]),_:1}),t(A,{title:"Vertical Aligned",description:"An element inside a list can be vertically aligned",code:e.verticalAlignedCode},{default:i(()=>[t(w,{horizontal:""},{default:i(()=>[t(_,null,{default:i(()=>[t(B,{avatar:"",src:kt}),t(x,{verticalAlign:"top"},{default:i(()=>[l(" Top Aligned ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:kt}),t(x,{verticalAlign:"middle"},{default:i(()=>[l(" Middle ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{avatar:"",src:kt}),t(x,{verticalAlign:"bottom"},{default:i(()=>[l(" Bottom ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Floated",description:"An list, or an element inside a list can be floated left or right",code:e.floatedCode},{default:i(()=>[S("div",null,[t(w,{floated:"right",horizontal:""},{default:i(()=>[t(_,{disabled:""},{default:i(()=>[l("© GitHub, Inc.")]),_:1}),t(_,{as:"a"},{default:i(()=>[l("Terms")]),_:1}),t(_,{as:"a"},{default:i(()=>[l("Privacy")]),_:1}),t(_,{as:"a"},{default:i(()=>[l("Contact")]),_:1})]),_:1}),t(w,{horizontal:""},{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("About Us")]),_:1}),t(_,{as:"a"},{default:i(()=>[l("Jobs")]),_:1})]),_:1})])]),_:1},8,["code"])]),_:1})])}const lx=we(qk,[["render",ax]]),qe="/vue-fomantic-ui/images/wireframe/short-paragraph.png",nx=D({name:"LoaderDoc",components:{DocExample:Pe},setup(){return{loaderCode:`<sui-segment>
  <sui-dimmer active>
    <sui-loader />
  </sui-dimmer>

  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`,textLoaderCode:`<sui-segment>
  <sui-dimmer active>
    <sui-loader text>Loading</sui-loader>
  </sui-dimmer>

  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`,indeterminateCode:`<sui-segment>
  <sui-dimmer active>
    <sui-loader indeterminate>Preparing Files</sui-loader>
  </sui-dimmer>

  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`,activeCode:`<sui-segment>
  <sui-loader active />

  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`,disabledCode:`<sui-segment>
  <sui-loader disabled />

  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`,inlineCode:"<sui-loader inline active />",inlineCenterCode:'<sui-loader inline="centered" active />',speedCode:`<div>
  <sui-loader slow active inline />
  <sui-loader active inline />
  <sui-loader fast active inline />
</div>`,colorsCode:`<div>
  <sui-loader color="primary" inline active />
  <sui-loader color="secondary" inline active />
  <sui-loader color="red" inline active />
  <sui-loader color="orange" inline active />
  <sui-loader color="yellow" inline active />
  <sui-loader color="olive" inline active />
  <sui-loader color="green" inline active />
  <sui-loader color="teal" inline active />
  <sui-loader color="blue" inline active />
  <sui-loader color="violet" inline active />
  <sui-loader color="purple" inline active />
  <sui-loader color="pink" inline active />
  <sui-loader color="brown" inline active />
  <sui-loader color="grey" inline active />
  <sui-loader color="black" inline active />
</div>`,sizeCode:`<sui-segment>
  <sui-dimmer active>
    <sui-loader size="mini">Loading</sui-loader>
  </sui-dimmer>

  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`,invertedCode:`<sui-segment>
  <sui-dimmer active inverted>
    <sui-loader>Loading</sui-loader>
  </sui-dimmer>

  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`}}}),ox={class:"intro"};function sx(e,a,n,o,r,c){const m=y("sui-header-subheader"),p=y("sui-header"),s=y("sui-divider"),u=y("sui-icon"),f=y("sui-menu-item"),d=y("sui-menu"),h=y("sui-container"),v=y("sui-segment"),_=y("sui-loader"),w=y("sui-dimmer"),A=y("sui-image"),$=y("doc-example");return L(),ge("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",ox,[t(p,{as:"h1"},{default:i(()=>[l("Loader "),t(m,null,{default:i(()=>[l(" A loader alerts a user to wait for an activity to complete ")]),_:1})]),_:1}),t(s,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t($,{title:"Loader",description:"A loader",code:e.loaderCode},{default:i(()=>[t(v,null,{default:i(()=>[t(w,{active:""},{default:i(()=>[t(_)]),_:1}),t(A,{src:qe})]),_:1})]),_:1},8,["code"]),t($,{title:"Text Loader",description:"A loader can contain text",code:e.textLoaderCode},{default:i(()=>[t(v,null,{default:i(()=>[t(w,{active:""},{default:i(()=>[t(_,null,{default:i(()=>[l("Loading")]),_:1})]),_:1}),t(A,{src:qe})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t($,{title:"Indeterminate",description:"A loader can show it's unsure of how long a task will take",code:e.indeterminateCode},{default:i(()=>[t(v,null,{default:i(()=>[t(w,{active:""},{default:i(()=>[t(_,{indeterminate:""},{default:i(()=>[l("Preparing Files")]),_:1})]),_:1}),t(A,{src:qe})]),_:1})]),_:1},8,["code"]),t($,{title:"Active",description:"A loader can be active or visible",code:e.activeCode},{default:i(()=>[t(v,null,{default:i(()=>[t(_,{active:""}),t(A,{src:qe})]),_:1})]),_:1},8,["code"]),t($,{title:"Diasbled",description:"A loader can be disabled or hidden",code:e.disabledCode},{default:i(()=>[t(v,null,{default:i(()=>[t(_,{disabled:""}),t(A,{src:qe})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t($,{title:"Inline",description:"Loaders can appear inline with content",code:e.inlineCode},{default:i(()=>[t(_,{inline:"",active:""})]),_:1},8,["code"]),t($,{title:"Inline Center",description:"Loaders can appear inline centered with content",code:e.inlineCenterCode},{default:i(()=>[t(_,{inline:"centered",active:""})]),_:1},8,["code"]),t($,{title:"Speed",description:"Loaders can appear slow, normal or fast",code:e.speedCode},{default:i(()=>[S("div",null,[t(_,{slow:"",active:"",inline:""}),t(_,{active:"",inline:""}),t(_,{fast:"",active:"",inline:""})])]),_:1},8,["code"]),t($,{title:"Colors",description:"Loaders can be different colors",code:e.colorsCode},{default:i(()=>[S("div",null,[t(_,{color:"primary",inline:"",active:""}),t(_,{color:"secondary",inline:"",active:""}),t(_,{color:"red",inline:"",active:""}),t(_,{color:"orange",inline:"",active:""}),t(_,{color:"yellow",inline:"",active:""}),t(_,{color:"olive",inline:"",active:""}),t(_,{color:"green",inline:"",active:""}),t(_,{color:"teal",inline:"",active:""}),t(_,{color:"blue",inline:"",active:""}),t(_,{color:"violet",inline:"",active:""}),t(_,{color:"purple",inline:"",active:""}),t(_,{color:"pink",inline:"",active:""}),t(_,{color:"brown",inline:"",active:""}),t(_,{color:"grey",inline:"",active:""}),t(_,{color:"black",inline:"",active:""})])]),_:1},8,["code"]),t($,{title:"Size",description:"Loaders can have different sizes",code:e.sizeCode},{default:i(()=>[t(v,null,{default:i(()=>[t(w,{active:""},{default:i(()=>[t(_,{size:"mini"},{default:i(()=>[l("Loading")]),_:1})]),_:1}),t(A,{src:qe})]),_:1})]),_:1},8,["code"]),t($,{title:"Inverted",description:"Loaders can have their colors inverted",code:e.invertedCode},{default:i(()=>[t(v,null,{default:i(()=>[t(w,{active:"",inverted:""},{default:i(()=>[t(_,null,{default:i(()=>[l("Loading")]),_:1})]),_:1}),t(A,{src:qe})]),_:1})]),_:1},8,["code"])]),_:1})])}const rx=we(nx,[["render",sx]]),ux=D({name:"RailDoc",components:{DocExample:Pe},setup(){return{railCode:`<sui-grid centered :columns="3">
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
</sui-grid>`}}}),cx={class:"intro"};function dx(e,a,n,o,r,c){const m=y("sui-header-subheader"),p=y("sui-header"),s=y("sui-divider"),u=y("sui-icon"),f=y("sui-menu-item"),d=y("sui-menu"),h=y("sui-container"),v=y("sui-segment"),_=y("sui-image"),w=y("sui-rail"),A=y("sui-grid-column"),$=y("sui-grid"),b=y("doc-example");return L(),ge("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",cx,[t(p,{as:"h1"},{default:i(()=>[l("Rail "),t(m,null,{default:i(()=>[l(" A rail is used to show accompanying content outside the boundaries of the main view of a site ")]),_:1})]),_:1}),t(s,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(b,{title:"Rail",description:"A rail can be presented on the left or right side of a container",code:e.railCode},{default:i(()=>[t($,{centered:"",columns:3},{default:i(()=>[t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[t(_,{src:qe}),t(w,{position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Left Rail Content ")]),_:1})]),_:1}),t(w,{position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Internal",description:"A rail can attach itself to the inside of a container",code:e.internalCode},{default:i(()=>[t(v,{textAlign:"center"},{default:i(()=>[t(_,{src:qe}),t(w,{internal:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[l("Left Rail Content")]),_:1})]),_:1}),t(w,{internal:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[l("Right Rail Content")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Dividing",description:"A rail can create a division between itself and a container",code:e.dividingCode},{default:i(()=>[t($,{centered:"",columns:3},{default:i(()=>[t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[t(_,{src:qe}),t(w,{dividing:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Left Rail Content ")]),_:1})]),_:1}),t(w,{dividing:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(b,{title:"Attached",description:"A rail can appear attached to the main viewport",code:e.attachedCode},{default:i(()=>[t($,{centered:"",columns:3},{default:i(()=>[t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[t(_,{src:qe}),t(w,{attached:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Left Rail Content ")]),_:1})]),_:1}),t(w,{attached:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Close",description:"A rail can appear closer to the main viewport",code:e.closeCode},{default:i(()=>[t($,{centered:"",columns:3},{default:i(()=>[t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[t(_,{src:qe}),t(w,{close:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Left Rail Content ")]),_:1})]),_:1}),t(w,{close:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Size",description:"A rail can have different sizes",code:e.sizeCode},{default:i(()=>[t($,{centered:"",columns:3},{default:i(()=>[t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[t(_,{src:qe}),t(w,{size:"small",position:"left"},{default:i(()=>[l(" Left Small Rail ")]),_:1}),t(w,{size:"large",position:"right"},{default:i(()=>[l(" Right Large Rail ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const mx=we(ux,[["render",dx]]),px="/vue-fomantic-ui/images/avatar/large/ade.jpg",Cc="/vue-fomantic-ui/images/avatar/large/chris.jpg",Fo="/vue-fomantic-ui/images/avatar/large/stevie.jpg",Ac="/vue-fomantic-ui/images/avatar/large/nan.jpg",fx=D({name:"RevealDoc",components:{DocExample:Pe},setup(){return{fadeCode:`<sui-reveal animated="fade">
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
</sui-reveal>`}}}),gx={class:"intro"};function hx(e,a,n,o,r,c){const m=y("sui-header-subheader"),p=y("sui-header"),s=y("sui-divider"),u=y("sui-icon"),f=y("sui-menu-item"),d=y("sui-menu"),h=y("sui-container"),v=y("sui-segment"),_=y("sui-image"),w=y("sui-reveal-content"),A=y("sui-reveal"),$=y("doc-example");return L(),ge("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",gx,[t(p,{as:"h1"},{default:i(()=>[l("Reveal "),t(m,null,{default:i(()=>[l(" A reveal displays additional content in place of previous content when activated ")]),_:1})]),_:1}),t(s,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t($,{title:"Fade",description:"An element can disappear to reveal content below",code:e.fadeCode},{default:i(()=>[t(A,{animated:"fade"},{default:i(()=>[t(w,{visible:""},{default:i(()=>[t(_,{size:"small",src:kt})]),_:1}),t(w,{hidden:""},{default:i(()=>[t(_,{size:"small",src:px})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Move",description:"An element can move in a direction to reveal content",code:e.moveCode},{default:i(()=>[t(A,{animated:"move"},{default:i(()=>[t(w,{visible:""},{default:i(()=>[t(_,{size:"small",src:kt})]),_:1}),t(w,{hidden:""},{default:i(()=>[t(_,{size:"small",src:Cc})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Rotate",description:"An element can rotate to reveal content below",code:e.rotateCode},{default:i(()=>[t(A,{animated:"rotate"},{default:i(()=>[t(w,{visible:""},{default:i(()=>[t(_,{circular:"",size:"small",src:kt})]),_:1}),t(w,{hidden:""},{default:i(()=>[t(_,{circular:"",size:"small",src:Fo})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t($,{title:"Active",description:"An active reveal displays its hidden content",code:e.activeCode},{default:i(()=>[t(A,{active:"",animated:"move"},{default:i(()=>[t(w,{visible:""},{default:i(()=>[t(_,{size:"small",src:kt})]),_:1}),t(w,{hidden:""},{default:i(()=>[t(_,{size:"small",src:Ac})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Disabled",description:"A disabled reveal will not animate when hovered",code:e.disabledCode},{default:i(()=>[t(A,{disabled:"",animated:"move"},{default:i(()=>[t(w,{visible:""},{default:i(()=>[t(_,{size:"small",src:kt})]),_:1}),t(w,{hidden:""},{default:i(()=>[t(_,{size:"small",src:Ac})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t($,{title:"Instant",description:"An element can show its content without delay",code:e.instantCode},{default:i(()=>[t(A,{instant:"",animated:"move"},{default:i(()=>[t(w,{visible:""},{default:i(()=>[t(_,{size:"small",src:kt})]),_:1}),t(w,{hidden:""},{default:i(()=>[t(_,{size:"small",src:Cc})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const _x=we(fx,[["render",hx]]),bx=D({name:"SegmentDoc",components:{DocExample:Pe},setup(){return{segmentCode:"<sui-segment>Pellentesque habitant morbi tristique senectus.</sui-segment>",placeholderCode:`<sui-segment placeholder>
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
</sui-segment>`}}}),vx={class:"intro"},yx=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),Sx=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),wx=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),Cx=S("p",null,"Top",-1),Ax=S("p",null,"Middle",-1),kx=S("p",null,"Middle",-1),xx=S("p",null,"Middle",-1),$x=S("p",null,"Bottom",-1),Bx=S("p",null,"I'm here to tell you something, and you will probably read me first.",-1),Tx=S("p",null,"This segment is on top",-1),Lx=S("p",null,"This segment is attached on both sides",-1),Ex=S("p",null,"This segment is on bottom",-1),Dx=S("p",null,"Fitted Segment",-1),Ix=S("p",null,"Horizontally fitted segment",-1),Rx=S("p",null,"Vertically fitted segment",-1),zx=S("p",null,"I'm here to tell you something, and you will probably read me first.",-1),Px=S("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),Fx=S("p",null,"If you notice me you must be looking very hard.",-1),Mx=S("p",null,"This segment will appear to the right",-1),Vx=S("p",null,"This segment will appear to the left",-1),Hx=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1);function Nx(e,a,n,o,r,c){const m=y("sui-header-subheader"),p=y("sui-header"),s=y("sui-divider"),u=y("sui-icon"),f=y("sui-menu-item"),d=y("sui-menu"),h=y("sui-container"),v=y("sui-segment"),_=y("doc-example"),w=y("sui-button"),A=y("sui-segment-group");return L(),ge("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",vx,[t(p,{as:"h1"},{default:i(()=>[l("Segment "),t(m,null,{default:i(()=>[l(" A segment is used to create a grouping of related content ")]),_:1})]),_:1}),t(s,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(_,{title:"Segment",description:"A segment of content",code:e.segmentCode},{default:i(()=>[t(v,null,{default:i(()=>[l("Pellentesque habitant morbi tristique senectus.")]),_:1})]),_:1},8,["code"]),t(_,{title:"Placeholder Segment",description:"A segment can be used to reserve space for conditionally displayed content",code:e.placeholderCode},{default:i(()=>[t(v,{placeholder:""},{default:i(()=>[t(p,{icon:""},{default:i(()=>[t(u,{name:"file outline"}),l(" No documents are listed for this customer. ")]),_:1}),t(w,{color:"primary"},{default:i(()=>[l("Add Document")]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Raised",description:"A segment may be formatted to raise above the page",code:e.raisedCode},{default:i(()=>[t(v,{raised:""},{default:i(()=>[yx]),_:1})]),_:1},8,["code"]),t(_,{title:"Stacked",description:"A segment can be formatted to show it contains multiple pages",code:e.stackedCode},{default:i(()=>[t(v,{stacked:""},{default:i(()=>[Sx]),_:1})]),_:1},8,["code"]),t(_,{title:"Piled",description:"A segment can be formatted to look like a pile of pages",code:e.piledCode},{default:i(()=>[t(v,{piled:""},{default:i(()=>[wx]),_:1})]),_:1},8,["code"]),t(_,{title:"Vertical Segment",description:"A vertical segment formats content to be aligned as part of a vertical group",code:e.verticalCode},{default:i(()=>[S("div",null,[t(v,{vertical:""},{default:i(()=>[l(" Te eum doming eirmod, nominati pertinacia argumentum ad his. ")]),_:1}),t(v,{vertical:""},{default:i(()=>[l(" Pellentesque habitant morbi tristique senectus. ")]),_:1}),t(v,{vertical:""},{default:i(()=>[l(" Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. ")]),_:1})])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Groups")]),_:1}),t(_,{title:"Segments",description:"A group of segments can be formatted to appear together",code:e.segmentsCode},{default:i(()=>[t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[Cx]),_:1}),t(v,null,{default:i(()=>[Ax]),_:1}),t(v,null,{default:i(()=>[kx]),_:1}),t(v,null,{default:i(()=>[xx]),_:1}),t(v,null,{default:i(()=>[$x]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Nested Segments",description:"A group of segments can be nested in another group of segments",code:e.nestedCode},{default:i(()=>[t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Top")]),_:1}),t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Nested Top")]),_:1}),t(v,null,{default:i(()=>[l("Nested Middle")]),_:1}),t(v,null,{default:i(()=>[l("Nested Bottom")]),_:1})]),_:1}),t(A,{horizontal:""},{default:i(()=>[t(v,null,{default:i(()=>[l("Top")]),_:1}),t(v,null,{default:i(()=>[l("Middle")]),_:1}),t(v,null,{default:i(()=>[l("Bottom")]),_:1})]),_:1}),t(v,null,{default:i(()=>[l("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Horizontal Segments",description:"A segment group can appear horizontally",code:e.horizontalCode},{default:i(()=>[t(A,{horizontal:""},{default:i(()=>[t(v,null,{default:i(()=>[l("Left")]),_:1}),t(v,null,{default:i(()=>[l("Middle")]),_:1}),t(v,null,{default:i(()=>[l("Right")]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Raised Segments",description:"A group of segments can be raised",code:e.raisedSegmentsCode},{default:i(()=>[t(A,{raised:""},{default:i(()=>[t(v,null,{default:i(()=>[l("Top")]),_:1}),t(v,null,{default:i(()=>[l("Middle")]),_:1}),t(v,null,{default:i(()=>[l("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Stacked Segments",description:"A group of segments can be stacked",code:e.stackedSegmentsCode},{default:i(()=>[t(A,{stacked:""},{default:i(()=>[t(v,null,{default:i(()=>[l("Top")]),_:1}),t(v,null,{default:i(()=>[l("Middle")]),_:1}),t(v,null,{default:i(()=>[l("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Piled Segments",description:"A group of segments can be piled",code:e.piledSegmentsCode},{default:i(()=>[t(A,{piled:""},{default:i(()=>[t(v,null,{default:i(()=>[l("Top")]),_:1}),t(v,null,{default:i(()=>[l("Middle")]),_:1}),t(v,null,{default:i(()=>[l("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(_,{title:"Disabled",description:"A segment may show its content is disabled",code:e.disabledCode},{default:i(()=>[t(v,{disabled:""},{default:i(()=>[l("Disabled content")]),_:1})]),_:1},8,["code"]),t(_,{title:"Loading",description:"A segment may show its content is being loaded",code:e.loadingCode},{default:i(()=>[t(v,{loading:""},{default:i(()=>[l("Now Loading...")]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(_,{title:"Inverted",description:"A segment can have its colors inverted for contrast",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[Bx]),_:1})]),_:1},8,["code"]),t(_,{title:"Attached",description:"A segment can be attached to other content on a page",code:e.attachedCode},{default:i(()=>[S("div",null,[t(v,{attached:"top"},{default:i(()=>[Tx]),_:1}),t(v,{attached:""},{default:i(()=>[Lx]),_:1}),t(v,{attached:"bottom"},{default:i(()=>[Ex]),_:1})])]),_:1},8,["code"]),t(_,{title:"Padded",description:"A segment can increase its padding",code:e.paddedCode},{default:i(()=>[t(v,{padded:""},{default:i(()=>[l("Padded content")]),_:1})]),_:1},8,["code"]),t(_,{title:"Fitted",description:"A segment can remove its padding, vertically or horizontally",code:e.fittedCode},{default:i(()=>[S("div",null,[t(v,{fitted:""},{default:i(()=>[Dx]),_:1}),t(v,{fitted:"horizontally"},{default:i(()=>[Ix]),_:1}),t(v,{fitted:"vertically"},{default:i(()=>[Rx]),_:1})])]),_:1},8,["code"]),t(_,{title:"Compact",description:"A segment may take up only as much space as is necessary",code:e.compactCode},{default:i(()=>[t(v,{compact:""},{default:i(()=>[l("Compact content")]),_:1})]),_:1},8,["code"]),t(_,{title:"Colored",description:"A segment can be colored",code:e.coloredCode},{default:i(()=>[S("div",null,[t(v,{color:"red"},{default:i(()=>[l("Red")]),_:1}),t(v,{color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(v,{color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(v,{color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(v,{color:"green"},{default:i(()=>[l("Green")]),_:1}),t(v,{color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(v,{color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(v,{color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(v,{color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(v,{color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(v,{color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(v,{color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(v,{color:"black"},{default:i(()=>[l("Black")]),_:1})])]),_:1},8,["code"]),t(_,{title:"Emphasis",description:"A segment can be formatted to appear more or less noticeable",code:e.emphasisCode},{default:i(()=>[S("div",null,[t(v,null,{default:i(()=>[zx]),_:1}),t(v,{secondary:""},{default:i(()=>[Px]),_:1}),t(v,{tertiary:""},{default:i(()=>[Fx]),_:1})])]),_:1},8,["code"]),t(_,{title:"Circular",description:"A segment can be circular",code:e.circularCode},{default:i(()=>[S("div",null,[t(v,{circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[t(p,{as:"h2"},{default:i(()=>[l(" Buy Now "),t(m,null,{default:i(()=>[l(" $10.99 ")]),_:1})]),_:1})]),_:1}),t(v,{inverted:"",circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[t(p,{as:"h2"},{default:i(()=>[l(" Buy Now "),t(m,null,{default:i(()=>[l(" $10.99 ")]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(_,{title:"Clearing",description:"A segment can clear floated content",code:e.clearingCode},{default:i(()=>[t(v,{clearing:""},{default:i(()=>[t(w,{floated:"right"},{default:i(()=>[l("Floated")]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Floated",description:"A segment can appear to the left or right of other content",code:e.floatedCode},{default:i(()=>[S("div",null,[t(v,{floated:"right"},{default:i(()=>[Mx]),_:1}),t(v,{floated:"left"},{default:i(()=>[Vx]),_:1})])]),_:1},8,["code"]),t(_,{title:"Text Alignment",description:"A segment can have its text aligned to a side",code:e.textAlignCode},{default:i(()=>[S("div",null,[t(v,{textAlign:"right"},{default:i(()=>[l(" Right ")]),_:1}),t(v,{textAlign:"left"},{default:i(()=>[l(" Left ")]),_:1}),t(v,{textAlign:"center"},{default:i(()=>[l(" Center ")]),_:1})])]),_:1},8,["code"]),t(_,{title:"Basic",description:"A basic segment has no special formatting",code:e.basicCode},{default:i(()=>[t(v,{basic:""},{default:i(()=>[Hx]),_:1})]),_:1},8,["code"])]),_:1})])}const Ox=we(bx,[["render",Nx]]),jx=D({name:"StepDoc",components:{DocExample:Pe},setup(){return{stepCode:`<sui-step-group>
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
</sui-segment>`}}}),Gx={class:"intro"},qx=S("p",null,"The steps take up the entire column width",-1),Ux=S("p",null,"Main content",-1);function Yx(e,a,n,o,r,c){const m=y("sui-header-subheader"),p=y("sui-header"),s=y("sui-divider"),u=y("sui-icon"),f=y("sui-menu-item"),d=y("sui-menu"),h=y("sui-container"),v=y("sui-segment"),_=y("sui-step"),w=y("sui-step-group"),A=y("doc-example"),$=y("sui-step-title"),b=y("sui-step-description"),C=y("sui-step-content"),x=y("sui-grid-column"),B=y("sui-grid");return L(),ge("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",Gx,[t(p,{as:"h1"},{default:i(()=>[l("Step "),t(m,null,{default:i(()=>[l(" A step shows the completion status of an activity in a series of activities ")]),_:1})]),_:1}),t(s,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(A,{title:"Step",description:"A single step",code:e.stepCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Shipping")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Groups")]),_:1}),t(A,{title:"Steps",description:"A set of steps",code:e.stepsCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t(u,{name:"truck"}),t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Shipping")]),_:1}),t(b,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Billing")]),_:1}),t(b,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(_,{disabled:""},{default:i(()=>[t(u,{name:"info"}),t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Ordered",description:"A step can show a ordered sequence of steps",code:e.orderedCode},{default:i(()=>[t(w,{ordered:""},{default:i(()=>[t(_,{completed:""},{default:i(()=>[t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Shipping")]),_:1}),t(b,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,{completed:""},{default:i(()=>[t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Billing")]),_:1}),t(b,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(_,{active:""},{default:i(()=>[t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Confirm Order")]),_:1}),t(b,null,{default:i(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Vertical",description:"A step can be displayed stacked vertically",code:e.verticalCode},{default:i(()=>[t(w,{vertical:""},{default:i(()=>[t(_,{completed:""},{default:i(()=>[t(u,{name:"truck"}),t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Shipping")]),_:1}),t(b,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,{completed:""},{default:i(()=>[t(u,{name:"credit card"}),t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Billing")]),_:1}),t(b,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(_,{active:""},{default:i(()=>[t(u,{name:"info"}),t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Confirm Order")]),_:1}),t(b,null,{default:i(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(A,{title:"Description",description:"A step can contain a description",code:e.descriptionCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t($,null,{default:i(()=>[l("Shipping")]),_:1}),t(b,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Icon",description:"A step can contain an icon",code:e.iconCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t(u,{name:"truck"}),t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Shipping")]),_:1}),t(b,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Link",description:"A step can link",code:e.linkCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,{link:""},{default:i(()=>[t(u,{name:"truck"}),t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Shipping")]),_:1}),t(b,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Billing")]),_:1}),t(b,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(A,{title:"Active",description:"A step can be highlighted as active",code:e.activeCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Billing")]),_:1}),t(b,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Completed",description:"A step can show that a user has completed it",code:e.completedCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,{completed:""},{default:i(()=>[t(u,{name:"payment"}),t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Billing")]),_:1}),t(b,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Disabled",description:"A step can show that it cannot be selected",code:e.disabledCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,{disabled:""},{default:i(()=>[l("Billing")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(A,{title:"Stackable",description:"A step can stack vertically only on smaller screens",code:e.stackableCode},{default:i(()=>[t(w,{stackable:"tablet"},{default:i(()=>[t(_,null,{default:i(()=>[t(u,{name:"plane"}),t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Shipping")]),_:1}),t(b,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,{active:""},{default:i(()=>[t(u,{name:"dollar"}),t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Billing")]),_:1}),t(b,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(_,{disabled:""},{default:i(()=>[t(u,{name:"info circle"}),t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Confirm Order")]),_:1}),t(b,null,{default:i(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Unstackable",description:"A step can prevent itself from stacking on mobile",code:e.unstackableCode},{default:i(()=>[t(w,{unstackable:""},{default:i(()=>[t(_,null,{default:i(()=>[t(u,{name:"plane"}),t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Shipping")]),_:1}),t(b,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,{active:""},{default:i(()=>[t(u,{name:"dollar"}),t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Billing")]),_:1}),t(b,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(_,{disabled:""},{default:i(()=>[t(u,{name:"info circle"}),t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Confirm Order")]),_:1}),t(b,null,{default:i(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Fluid",description:"A fluid step takes up the width of its container",code:e.fluidCode},{default:i(()=>[t(B,{columns:2},{default:i(()=>[t(x,null,{default:i(()=>[t(w,{fluid:"",vertical:""},{default:i(()=>[t(_,{completed:""},{default:i(()=>[t(u,{name:"truck"}),t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Shipping")]),_:1}),t(b,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,{active:""},{default:i(()=>[t(u,{name:"dollar"}),t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Billing")]),_:1}),t(b,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(x,null,{default:i(()=>[qx]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Attached",description:"Steps can be attached to other elements",code:e.attachedCode},{default:i(()=>[S("div",null,[t(w,{attached:"top"},{default:i(()=>[t(_,null,{default:i(()=>[t(u,{name:"truck"}),t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Shipping")]),_:1}),t(b,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Billing")]),_:1}),t(b,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{attached:""},{default:i(()=>[Ux]),_:1}),t(w,{attached:"bottom"},{default:i(()=>[t(_,null,{default:i(()=>[t(u,{name:"truck"}),t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Shipping")]),_:1}),t(b,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Billing")]),_:1}),t(b,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(A,{title:"Evenly Divided",description:"Steps can be divided evenly inside their parent",code:e.evenlyDividedCode},{default:i(()=>[t(w,{widths:2},{default:i(()=>[t(_,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Billing")]),_:1})]),_:1})]),_:1}),t(_,{disabled:""},{default:i(()=>[t(u,{name:"info"}),t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Size",description:"Steps can have different sizes",code:e.sizeCode},{default:i(()=>[t(w,{size:"mini"},{default:i(()=>[t(_,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Billing")]),_:1})]),_:1})]),_:1}),t(_,{disabled:""},{default:i(()=>[t(u,{name:"info"}),t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Inverted",description:"A step's color can be inverted",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(w,{inverted:"",vertical:""},{default:i(()=>[t(_,{completed:""},{default:i(()=>[t(u,{name:"truck"}),t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Shipping")]),_:1}),t(b,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,{completed:""},{default:i(()=>[t(u,{name:"credit card"}),t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Billing")]),_:1}),t(b,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(_,{active:""},{default:i(()=>[t(u,{name:"info"}),t(C,null,{default:i(()=>[t($,null,{default:i(()=>[l("Confirm Order")]),_:1}),t(b,null,{default:i(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Jx=we(jx,[["render",Yx]]),Wx=D({name:"BreadcrumbDoc",components:{DocPageHeader:Ye,DocExample:Pe},setup(){return{breadcrumbCode:`<sui-breadcrumb>
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
</sui-breadcrumb>`}}});function Kx(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-breadcrumb-section"),u=y("sui-breadcrumb-divider"),f=y("sui-breadcrumb"),d=y("doc-example"),h=y("sui-segment"),v=y("sui-container");return L(),ge("div",null,[t(m,{title:"Breadcrumb",sub:"A breadcrumb is used to show hierarchy between content"}),t(v,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(d,{title:"Breadcrumb",description:"A standard breadcrumb",code:e.breadcrumbCode},{default:i(()=>[t(f,null,{default:i(()=>[t(s,{link:""},{default:i(()=>[l("Home")]),_:1}),t(u,null,{default:i(()=>[l(" / ")]),_:1}),t(s,{link:""},{default:i(()=>[l("Store")]),_:1}),t(u,null,{default:i(()=>[l(" / ")]),_:1}),t(s,{active:""},{default:i(()=>[l("T-Shirt")]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{description:"You can do the same using shorthands",code:e.breadcrumbCode2},{default:i(()=>[t(f,{sections:[{content:"Home",link:!0},{content:"Store",link:!0},{content:"T-Shirt",active:!0}],icon:"right angle"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(d,{title:"Divider",description:"A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text",code:e.dividerCode},{default:i(()=>[t(f,null,{default:i(()=>[t(s,{link:""},{default:i(()=>[l("Home")]),_:1}),t(u,{icon:"right chevron"}),t(s,{link:""},{default:i(()=>[l("Registration")]),_:1}),t(u,{icon:"right arrow"}),t(s,{active:""},{default:i(()=>[l("Personal Information")]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Section",description:"A breadcrumb can contain sections that can either be formatted as a link or text",code:e.sectionCode},{default:i(()=>[t(f,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Home")]),_:1}),t(u,null,{default:i(()=>[l(" / ")]),_:1}),t(s,{active:""},{default:i(()=>[l("Search")]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Link",description:"A section may be linkable or contain a link",code:e.linkCode},{default:i(()=>[t(f,null,{default:i(()=>[t(s,{link:""},{default:i(()=>[l("Home")]),_:1}),t(u,null,{default:i(()=>[l(" / ")]),_:1}),t(s,{active:""},{default:i(()=>[l("Search")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(d,{title:"Active",description:"A section can be active",code:e.activeCode},{default:i(()=>[t(f,null,{default:i(()=>[t(s,{link:""},{default:i(()=>[l("Product")]),_:1}),t(u,null,{default:i(()=>[l(" / ")]),_:1}),t(s,{active:""},{default:i(()=>[l("Paper Towels")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(d,{title:"Inverted",description:"A breadcrumb can be inverted",code:e.invertedCode},{default:i(()=>[t(h,{inverted:""},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(s,{link:""},{default:i(()=>[l("Home")]),_:1}),t(u,{icon:"right chevron"}),t(s,{link:""},{default:i(()=>[l("Registration")]),_:1}),t(u,{icon:"right chevron"}),t(s,{active:""},{default:i(()=>[l("Personal Information")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Size",description:"A breadcrumb can vary in size",code:e.sizeCode},{default:i(()=>[t(f,{size:"mini"},{default:i(()=>[t(s,{link:""},{default:i(()=>[l("Home")]),_:1}),t(u,{icon:"right chevron"}),t(s,{link:""},{default:i(()=>[l("Registration")]),_:1}),t(u,{icon:"right chevron"}),t(s,null,{default:i(()=>[l("Personal Information")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Xx=we(Wx,[["render",Kx]]),Qx=D({name:"FormDoc",components:{DocPageHeader:Ye,DocExample:Pe},setup(){return{formCode:`<sui-form>
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
</sui-form>`}}});function Zx(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-form-field"),u=y("sui-checkbox"),f=y("sui-button"),d=y("sui-form"),h=y("doc-example"),v=y("sui-form-group"),_=y("sui-container");return L(),ge("div",null,[t(m,{title:"Form",sub:"A form displays a set of related user input fields in a structured way"}),t(_,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(h,{title:"Form",description:"A form",code:e.formCode},{default:i(()=>[t(d,null,{default:i(()=>[t(s,{label:"First Name",placeholder:"First Name"}),t(s,{label:"Last Name",placeholder:"Last Name"}),t(s,null,{default:i(()=>[t(u,{label:"I agree to the Terms and Conditions"})]),_:1}),t(f,null,{default:i(()=>[l("Submit")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(h,{title:"Field",description:"A field is a form element containing a label and an input",code:e.fieldCode},{default:i(()=>[t(d,null,{default:i(()=>[t(s,{label:"Enter Password",type:"password"})]),_:1})]),_:1},8,["code"]),t(h,{title:"Fields",description:"A set of fields can appear grouped together",code:e.fieldsCode},{default:i(()=>[t(d,null,{default:i(()=>[t(v,null,{default:i(()=>[t(s,{label:"First name",placeholder:"First Name"}),t(s,{label:"Middle name",placeholder:"Middle Name"}),t(s,{label:"Last name",placeholder:"Last Name"})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const e$=we(Qx,[["render",Zx]]),Yt="/vue-fomantic-ui/images/wireframe/media-paragraph.png",De="/vue-fomantic-ui/images/wireframe/paragraph.png",kc="/vue-fomantic-ui/images/wireframe/centered-paragraph.png",t$=D({name:"GridDoc",components:{DocPageHeader:Ye,DocExample:Pe},setup(){return{numbers:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],gridCode:`<sui-grid>
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
</sui-grid>`}}}),i$=S("br",null,null,-1);function a$(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-image"),u=y("sui-grid-column"),f=y("sui-grid"),d=y("doc-example"),h=y("sui-grid-row"),v=y("sui-segment"),_=y("sui-divider"),w=y("sui-menu-item"),A=y("sui-menu"),$=y("sui-container");return L(),ge("div",null,[t(m,{title:"Grid",sub:"A grid is used to harmonize negative space in a layout"}),t($,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(d,{title:"Grid",description:"A basic grid",code:e.gridCode},{default:i(()=>[t(f,null,{default:i(()=>[(L(!0),ge(Ce,null,tt(e.numbers,b=>(L(),R(u,{key:b},{default:i(()=>[t(s,{src:ae})]),_:2},1024))),128))]),_:1})]),_:1},8,["code"]),t(d,{title:"Divided",description:"A grid can have dividers between its columns",code:e.dividedCode},{default:i(()=>[t(f,{columns:3,divided:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:Yt})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:Yt})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:Yt})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:Yt})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:Yt})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:Yt})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Vertical Divided",description:"A grid can have dividers between rows",code:e.verticalDividedCode},{default:i(()=>[t(f,{divided:"vertically"},{default:i(()=>[t(h,{columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:De})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:De})]),_:1})]),_:1}),t(h,{columns:3},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:De})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:De})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:De})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Celled",description:"A grid can have rows divided into cells",code:e.celledCode},{default:i(()=>[t(f,{celled:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,{width:3},{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,{width:13},{default:i(()=>[t(s,{src:kc})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{width:3},{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,{width:10},{default:i(()=>[t(s,{src:De})]),_:1}),t(u,{width:3},{default:i(()=>[t(s,{src:ae})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Internally Celled",description:"A grid can have rows divisions only between internal rows",code:e.internallyCelledCode},{default:i(()=>[t(f,{celled:"internally"},{default:i(()=>[t(h,null,{default:i(()=>[t(u,{width:3},{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,{width:13},{default:i(()=>[t(s,{src:kc})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{width:3},{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,{width:10},{default:i(()=>[t(s,{src:De})]),_:1}),t(u,{width:3},{default:i(()=>[t(s,{src:ae})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(d,{title:"Rows",description:"A row is a horizontal grouping of columns",code:e.rowsCode},{default:i(()=>[t(f,{columns:3},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:De})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:De})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:De})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:De})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:De})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Columns",description:"Columns each contain gutters giving them equal spacing from other columns",code:e.columnsCode},{default:i(()=>[t(f,null,{default:i(()=>[t(u,{width:8},{default:i(()=>[t(s,{src:De})]),_:1}),t(u,{width:8},{default:i(()=>[t(s,{src:De})]),_:1}),t(u,{width:8},{default:i(()=>[t(s,{src:De})]),_:1}),t(u,{width:8},{default:i(()=>[t(s,{src:De})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(d,{title:"Floated",description:"A column can sit flush against the left or right edge of a row",code:e.floatedCode},{default:i(()=>[t(f,null,{default:i(()=>[t(u,{floated:"left",width:5},{default:i(()=>[t(s,{src:De})]),_:1}),t(u,{floated:"right",width:5},{default:i(()=>[t(s,{src:De})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Column Width",description:"A column can vary in width taking up more than a single grid column",code:e.columnWidthCode},{default:i(()=>[t(f,null,{default:i(()=>[t(u,{width:4},{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,{width:9},{default:i(()=>[t(s,{src:De})]),_:1}),t(u,{width:3},{default:i(()=>[t(s,{src:Yt})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Column Count",description:"A grid can have a different number of columns per row",code:e.columnCountCode},{default:i(()=>[t(f,null,{default:i(()=>[t(h,{columns:3},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1})]),_:1}),t(h,{columns:4},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Equal Width",description:"Equal Width",code:e.equalWidthCode},{default:i(()=>[t(f,{columns:"equal"},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("1")]),_:1})]),_:1}),t(u,{width:8},{default:i(()=>[t(v,null,{default:i(()=>[l("2")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("3")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Stretched",description:"A row can stretch its contents to take up the entire column height",code:e.stretchedCode},{default:i(()=>[t(f,{columns:3,divided:""},{default:i(()=>[t(h,{stretched:""},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("1")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("1")]),_:1}),t(v,null,{default:i(()=>[l("2")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("1")]),_:1}),t(v,null,{default:i(()=>[l("2")]),_:1}),t(v,null,{default:i(()=>[l("3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Padded",description:"A grid can preserve its vertical and horizontal gutters on first and last columns",code:e.paddedCode},{default:i(()=>[S("div",null,[t(_),t(f,{padded:"",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:De})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:De})]),_:1})]),_:1})])]),_:1},8,["code"]),t(d,{title:"Relaxed",description:"A grid can increase its gutters to allow for more negative space",code:e.relaxedCode},{default:i(()=>[t(f,{relaxed:"",columns:4},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Colored",description:"A row or column can be colored",code:e.coloredCode},{default:i(()=>[t(f,{padded:"",columns:5},{default:i(()=>[t(u,{color:"red"},{default:i(()=>[l("Red")]),_:1}),t(u,{color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(u,{color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(u,{color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(u,{color:"green"},{default:i(()=>[l("Green")]),_:1}),t(u,{color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(u,{color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(u,{color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(u,{color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(u,{color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(u,{color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(u,{color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(u,{color:"black"},{default:i(()=>[l("Black")]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Centered",description:"A grid can have its columns centered",code:e.centeredCode},{default:i(()=>[t(f,{centered:"",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(h,{centered:"",columns:4},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Text Alignment",description:"A grid, row, or column can specify its text alignment",code:e.textAlignCode},{default:i(()=>[t(f,{textAlign:"center",columns:3},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(A,{vertical:"",fluid:""},{default:i(()=>[t(w,{header:""},{default:i(()=>[l("Cats")]),_:1})]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(A,{vertical:"",fluid:""},{default:i(()=>[t(w,{header:""},{default:i(()=>[l("Dogs")]),_:1}),t(w,null,{default:i(()=>[l("Poodle")]),_:1}),t(w,null,{default:i(()=>[l("Cockerspaniel")]),_:1})]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(A,{vertical:"",fluid:""},{default:i(()=>[t(w,{header:""},{default:i(()=>[l("Monkeys")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Vertical Alignment",description:"A grid, row, or column can specify its vertical alignment to have all its columns vertically centered",code:e.verticalAlignCode},{default:i(()=>[t(f,{verticalAlign:"middle",columns:4,centered:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae}),i$,t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Responsive Variations")]),_:1}),t(d,{title:"Doubling",description:"A grid can double its column width on tablet and mobile sizes",code:e.doublingCode},{default:i(()=>[t(f,{doubling:"",columns:5},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"stackable",description:"A grid can have its columns stack on-top of each other after reaching mobile breakpoints",code:e.stackableCode},{default:i(()=>[t(f,{stackable:"",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[t(s,{src:De})]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[t(s,{src:De})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Reversed",description:"A grid or row can specify that its columns should reverse order at different device sizes",code:e.reversedCode},{default:i(()=>[t(f,{reversed:"computer vertically"},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Computer Row 3")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Computer Row 2")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Computer Row 1")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Device Visibility",description:"A columns or row can appear only for a specific device, or screen sizes",code:e.deviceVisibilityCode},{default:i(()=>[t(f,null,{default:i(()=>[t(h,{only:"large screen",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Large Screen")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Large Screen")]),_:1})]),_:1})]),_:1}),t(h,{only:"widescreen",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Widescreen")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Widescreen")]),_:1})]),_:1})]),_:1}),t(h,{only:"mobile",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Mobile")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Mobile")]),_:1})]),_:1})]),_:1}),t(h,{columns:3},{default:i(()=>[t(u,{only:"computer"},{default:i(()=>[t(v,null,{default:i(()=>[l("Computer")]),_:1})]),_:1}),t(u,{only:"mobile"},{default:i(()=>[t(v,null,{default:i(()=>[l("Tablet and Mobile")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("All Sizes")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("All Sizes")]),_:1})]),_:1})]),_:1}),t(h,{only:"computer",columns:4},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Computer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Computer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Computer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Computer")]),_:1})]),_:1})]),_:1}),t(h,{only:"tablet",columns:3},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Tablet")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Tablet")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Tablet")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Responsive Width",description:"A column can specify a width for a specific device",code:e.responsiveWidthCode},{default:i(()=>[t(f,null,{default:i(()=>[t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:De})]),_:1}),t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:De})]),_:1}),t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:De})]),_:1}),t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:De})]),_:1}),t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:De})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const l$=we(t$,[["render",a$]]),n$="/vue-fomantic-ui/images/logo.png",o$=D({name:"MenuDoc",components:{DocPageHeader:Ye,DocExample:Pe},setup(){return{menuCode:`<sui-menu>
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
</sui-menu>`}}}),s$=S("p",null,"Check out our new promotions",-1),r$=S("p",null,"Check out our collection of coupons",-1),u$=S("p",null,"Visit our rebate forum for information on claiming rebates",-1),c$=S("img",{src:n$},null,-1);function d$(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-menu-item"),u=y("sui-menu"),f=y("doc-example"),d=y("sui-input"),h=y("sui-menu-menu"),v=y("sui-label"),_=y("sui-button"),w=y("sui-dropdown-item"),A=y("sui-dropdown-menu"),$=y("sui-dropdown"),b=y("sui-icon"),C=y("sui-segment"),x=y("sui-container");return L(),ge("div",null,[t(m,{title:"Menu",sub:"A menu displays grouped navigation actions"}),t(x,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(f,{title:"Menu",description:"A menu",code:e.menuCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Editorials")]),_:1}),t(s,null,{default:i(()=>[l("Reviews")]),_:1}),t(s,null,{default:i(()=>[l("Upcoming Events")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Secondary Menu",description:"A menu can adjust its appearance to de-emphasize its contents",code:e.secondaryMenuCode},{default:i(()=>[t(u,{secondary:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[l("Home")]),_:1}),t(s,null,{default:i(()=>[l("Messages")]),_:1}),t(s,null,{default:i(()=>[l("Friends")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(s,null,{default:i(()=>[t(d,{icon:"search",placeholder:"Search..."})]),_:1}),t(s,null,{default:i(()=>[l("logout")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Pointing",description:"A menu can point to show its relationship to nearby content",code:e.pointingCode},{default:i(()=>[t(u,{pointing:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[l("Home")]),_:1}),t(s,null,{default:i(()=>[l("Messages")]),_:1}),t(s,null,{default:i(()=>[l("Friends")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(s,null,{default:i(()=>[t(d,{transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Tabular",description:"A menu can be formatted to show tabs of information",code:e.tabularCode},{default:i(()=>[t(u,{tabular:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[l("Bio")]),_:1}),t(s,null,{default:i(()=>[l("Photos")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Text",description:"A menu can be formatted for text content",code:e.textCode},{default:i(()=>[t(u,{text:""},{default:i(()=>[t(s,{header:""},{default:i(()=>[l("Sort By")]),_:1}),t(s,{active:""},{default:i(()=>[l("Closest")]),_:1}),t(s,null,{default:i(()=>[l("Most Comments")]),_:1}),t(s,null,{default:i(()=>[l("Most Popular")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Vertical Menu",description:"A vertical menu displays elements vertically",code:e.verticalMenuCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(s,{active:"",color:"teal"},{default:i(()=>[l(" Inbox "),t(v,{color:"teal",pointing:"left"},{default:i(()=>[l("1")]),_:1})]),_:1}),t(s,null,{default:i(()=>[l(" Spam "),t(v,null,{default:i(()=>[l("51")]),_:1})]),_:1}),t(s,null,{default:i(()=>[l(" Updates "),t(v,null,{default:i(()=>[l("1")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(d,{transparent:"",icon:"search",placeholder:"Search mail..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Pagination",description:"A pagination menu is specially formatted to present links to pages of content",code:e.paginationCode},{default:i(()=>[t(u,{pagination:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[l("1")]),_:1}),t(s,{disabled:""},{default:i(()=>[l("...")]),_:1}),t(s,null,{default:i(()=>[l("10")]),_:1}),t(s,null,{default:i(()=>[l("11")]),_:1}),t(s,null,{default:i(()=>[l("12")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(f,{title:"Header",description:"A menu item may include a header or may itself be a header",code:e.headerCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{header:""},{default:i(()=>[l("Our Company")]),_:1}),t(s,null,{default:i(()=>[l("About us")]),_:1}),t(s,null,{default:i(()=>[l("Jobs")]),_:1}),t(s,null,{default:i(()=>[l("Locations")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"textContentCode",description:"A vertical menu item can include any type of text content",code:e.textContentCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(s,null,{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[l("Promotions")]),_:1}),s$]),_:1}),t(s,null,{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[l("Coupons")]),_:1}),r$]),_:1}),t(s,null,{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[l("Rebates")]),_:1}),u$]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Input",description:"A menu item can contain an input inside of it",code:e.inputCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{as:"div"},{default:i(()=>[t(d,{icon:"search",placeholder:"Search..."})]),_:1}),t(s,{position:"right",as:"div"},{default:i(()=>[t(d,{placeholder:"Navigate to ..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Button",description:"A menu item can contain a button inside of it",code:e.buttonCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{as:"div"},{default:i(()=>[t(_,{color:"primary"},{default:i(()=>[l("Sign up")]),_:1})]),_:1}),t(s,{as:"div"},{default:i(()=>[t(_,null,{default:i(()=>[l("Log in")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Link Item",description:"A menu may contain a link item, or an item formatted as if it is a link",code:e.linkItemCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(s,{href:"https://google.com"},{default:i(()=>[l("Visit Google")]),_:1}),t(s,{link:"",as:"div"},{default:i(()=>[l("Javascript Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Dropdown Item",description:"An item may contain a nested menu in a dropdown",code:e.dropdownItemCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t($,{item:"",text:"Categories"},{default:i(()=>[t(A,null,{default:i(()=>[t(w,{text:"Electoronics"}),t(w,{text:"Automotive"}),t(w,{text:"Home"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Menu",description:"A menu may contain another menu group in the same level as menu items",code:e.menuContentCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Browse")]),_:1}),t(s,null,{default:i(()=>[l("Submit")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(s,null,{default:i(()=>[l("Sign up")]),_:1}),t(s,null,{default:i(()=>[l("Help")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Sub Menu",description:"A menu item may contain another menu nested inside that acts as a grouped sub-menu",code:e.subMenuCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(s,{as:"div"},{default:i(()=>[t(d,{placeholder:"Search..."})]),_:1}),t(s,{as:"div"},{default:i(()=>[l(" Home "),t(h,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Search")]),_:1}),t(s,null,{default:i(()=>[l("Add")]),_:1}),t(s,null,{default:i(()=>[l("Remove")]),_:1})]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(b,{name:"grid layout"}),l(" Browse ")]),_:1}),t(s,null,{default:i(()=>[l("Messages")]),_:1}),t($,{item:"",text:"More"},{default:i(()=>[t(A,null,{default:i(()=>[t(w,{icon:"edit",text:"Edit Profile"}),t(w,{icon:"globe",text:"Choose Language"}),t(w,{icon:"settings",text:"Account Settings"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(f,{title:"Hover",description:"A menu item can be hovered",code:e.hoverCode},{default:i(()=>[t(u,{compact:""},{default:i(()=>[t(s,null,{default:i(()=>[l("A link")]),_:1}),t(s,{as:"div",link:""},{default:i(()=>[l("div Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Active",description:"A menu item can be active",code:e.activeCode},{default:i(()=>[t(u,{compact:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[l("Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(f,{title:"Stackable",description:"A menu can stack at mobile resolutions",code:e.stackableCode},{default:i(()=>[t(u,{stackable:""},{default:i(()=>[t(s,{as:"div"},{default:i(()=>[c$]),_:1}),t(s,null,{default:i(()=>[l("Features")]),_:1}),t(s,null,{default:i(()=>[l("Testimonials")]),_:1}),t(s,null,{default:i(()=>[l("Sign in")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Inverted",description:"A menu may have its colors inverted to show greater contrast",code:e.invertedCode},{default:i(()=>[t(u,{inverted:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[l("Home")]),_:1}),t(s,null,{default:i(()=>[l("Messages")]),_:1}),t(s,null,{default:i(()=>[l("Friends")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Colored",description:"Additional colors can be specified",code:e.coloredCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{active:"",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(s,{color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(s,{color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(s,{color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(s,{color:"green"},{default:i(()=>[l("Green")]),_:1}),t(s,{color:"teal"},{default:i(()=>[l("Teal")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Icons",description:"A menu may have just icons",code:e.iconsCode},{default:i(()=>[t(u,{icon:""},{default:i(()=>[t(s,null,{default:i(()=>[t(b,{name:"gamepad"})]),_:1}),t(s,null,{default:i(()=>[t(b,{name:"video camera"})]),_:1}),t(s,null,{default:i(()=>[t(b,{name:"video play"})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Labeled Icon",description:"A menu may have labeled icons",code:e.labeledIconCode},{default:i(()=>[t(u,{icon:"labeled"},{default:i(()=>[t(s,null,{default:i(()=>[t(b,{name:"gamepad"}),l(" Games ")]),_:1}),t(s,null,{default:i(()=>[t(b,{name:"video camera"}),l(" Channels ")]),_:1}),t(s,null,{default:i(()=>[t(b,{name:"video play"}),l(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Fluid",description:"A vertical menu may take the size of its container",code:e.fluidCode},{default:i(()=>[t(u,{fluid:"",vertical:""},{default:i(()=>[t(s,null,{default:i(()=>[l("Run")]),_:1}),t(s,null,{default:i(()=>[l("Walk")]),_:1}),t(s,null,{default:i(()=>[l("Bike")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Compact",description:"A menu can take up only the space necessary to fit its content",code:e.compactCode},{default:i(()=>[t(u,{compact:""},{default:i(()=>[t(s,null,{default:i(()=>[t(b,{name:"gamepad"}),l(" Games ")]),_:1}),t(s,null,{default:i(()=>[t(b,{name:"video camera"}),l(" Channels ")]),_:1}),t(s,null,{default:i(()=>[t(b,{name:"video play"}),l(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Evenly Divided",description:"A menu may divide its items evenly",code:e.evenlyDividedCode},{default:i(()=>[t(u,{fluid:"",widths:3},{default:i(()=>[t(s,null,{default:i(()=>[l("Buy")]),_:1}),t(s,null,{default:i(()=>[l("Sell")]),_:1}),t(s,null,{default:i(()=>[l("Rent")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Attached",description:"A menu may be attached to other content segments",code:e.attachedCode},{default:i(()=>[S("div",null,[t(u,{attached:"top",tabular:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[l("tab1")]),_:1}),t(s,null,{default:i(()=>[l("tab2")]),_:1})]),_:1}),t(C,{attached:"bottom"},{default:i(()=>[l(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. ")]),_:1})])]),_:1},8,["code"]),t(f,{title:"Size",description:"A menu can vary in size",code:e.sizeCode},{default:i(()=>[t(u,{size:"mini"},{default:i(()=>[t(s,{active:""},{default:i(()=>[l("Home")]),_:1}),t(s,null,{default:i(()=>[l("Messages")]),_:1}),t(h,{position:"right"},{default:i(()=>[t($,{item:"",text:"Language"},{default:i(()=>[t(A,null,{default:i(()=>[t(w,null,{default:i(()=>[l("English")]),_:1}),t(w,null,{default:i(()=>[l("Russian")]),_:1}),t(w,null,{default:i(()=>[l("Spanish")]),_:1})]),_:1})]),_:1}),t(s,{as:"div"},{default:i(()=>[t(_,{color:"primary"},{default:i(()=>[l("Sign up")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Fitted",description:"A menu item or menu can remove element padding, vertically or horizontally",code:e.fittedCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{fitted:""},{default:i(()=>[l("No padding whatsoever")]),_:1}),t(s,{fitted:"horizontally"},{default:i(()=>[l("No horizontal padding")]),_:1}),t(s,{fitted:"vertically"},{default:i(()=>[l("No vertical padding")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Borderless",description:"A menu item or menu can have no borders",code:e.borderlessCode},{default:i(()=>[t(u,{borderless:""},{default:i(()=>[t(s,null,{default:i(()=>[l("1")]),_:1}),t(s,null,{default:i(()=>[l("2")]),_:1}),t(s,null,{default:i(()=>[l("3")]),_:1}),t(s,null,{default:i(()=>[l("4")]),_:1}),t(s,null,{default:i(()=>[l("5")]),_:1}),t(s,null,{default:i(()=>[l("6")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const m$=we(o$,[["render",d$]]),p$=D({name:"MessageDoc",components:{DocPageHeader:Ye,DocExample:Pe},setup(){return{messageCode:`<sui-message>
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
</div>`}}}),f$=S("p",null,"We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.",-1),g$=S("p",null,"Get the best news in your e-mail every day.",-1),h$=S("p",null,"You can't see me",-1),_$=S("p",null,"You can always see me",-1),b$=S("p",null,"Way to go!",-1),v$=S("p",null,"Get all the best inventions in your e-mail every day. Sign up now!",-1),y$=S("a",{href:"#"},"Login here",-1),S$=S("p",null,[l("Go to your "),S("b",null,"special offers"),l(" page to see now.")],-1),w$=S("p",null,"That offer has expired",-1);function C$(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-message-header"),u=y("sui-message"),f=y("doc-example"),d=y("sui-message-item"),h=y("sui-message-list"),v=y("sui-icon"),_=y("sui-message-content"),w=y("sui-form-field"),A=y("sui-form-group"),$=y("sui-button"),b=y("sui-form"),C=y("sui-container");return L(),ge("div",null,[t(m,{title:"Message",sub:"A message displays information that explains nearby content"}),t(C,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(f,{title:"Message",description:"A basic message",code:e.messageCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Changes in Service")]),_:1}),f$]),_:1})]),_:1},8,["code"]),t(f,{title:"List Message",description:"A message with a list",code:e.listMessageCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("New Site Features")]),_:1}),t(h,null,{default:i(()=>[t(d,null,{default:i(()=>[l("You can now have cover images on blog pages")]),_:1}),t(d,null,{default:i(()=>[l("Drafts will now auto-save while writing")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Icon Message",description:"A message can contain an icon",code:e.iconMessageCode},{default:i(()=>[t(u,{icon:""},{default:i(()=>[t(v,{name:"inbox"}),t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[l(" Have you heard about our mailing list? ")]),_:1}),g$]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(f,{title:"Hidden",description:"A message can be hidden",code:e.hiddenCode},{default:i(()=>[t(u,{hidden:""},{default:i(()=>[h$]),_:1})]),_:1},8,["code"]),t(f,{title:"Visible",description:"A message can be set to visible to force itself to be shown",code:e.visibleCode},{default:i(()=>[t(u,{visible:""},{default:i(()=>[_$]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(f,{title:"Floating",description:"A message can float above content that it is related to",code:e.floatingCode},{default:i(()=>[t(u,{floating:""},{default:i(()=>[b$]),_:1})]),_:1},8,["code"]),t(f,{title:"Compact",description:"A message can only take up the width of its content",code:e.compactCode},{default:i(()=>[t(u,{compact:""},{default:i(()=>[v$]),_:1})]),_:1},8,["code"]),t(f,{title:"Attached",description:"A message can be formatted to attach itself to other content",code:e.attachedCode},{default:i(()=>[S("div",null,[t(u,{attached:"",header:"Welcome to our site!",content:"Fill out the form below to sign-up for a new account"}),t(b,{class:"attached fluid segment"},{default:i(()=>[t(A,{widths:"equal"},{default:i(()=>[t(w,{label:"First Name",placeholder:"First Name"}),t(w,{label:"Last Name",placeholder:"Last Name"})]),_:1}),t(w,{label:"Username",placeholder:"Username"}),t(w,{label:"Password",placeholder:"Password"}),t($,{color:"primary"},{default:i(()=>[l("Submit")]),_:1})]),_:1}),t(u,{attached:"bottom",warning:""},{default:i(()=>[t(v,{name:"help"}),l(" Already signed up? "),y$,l(" instead. ")]),_:1})])]),_:1},8,["code"]),t(f,{title:"Warning",description:"A message may be formatted to display warning messages",code:e.warningCode},{default:i(()=>[t(u,{warning:""},{default:i(()=>[t(v,{name:"close"}),t(s,null,{default:i(()=>[l(" You must register before you can do that! ")]),_:1}),l(" Visit our registration page, then try again ")]),_:1})]),_:1},8,["code"]),t(f,{title:"Info",description:"A message may be formatted to display information",code:e.infoCode},{default:i(()=>[t(u,{info:""},{default:i(()=>[t(s,null,{default:i(()=>[l("Was this what you wanted?")]),_:1}),t(h,null,{default:i(()=>[l("It's good to see you again.")]),_:1}),t(h,null,{default:i(()=>[l("Did you know it's been a while?")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Positive / Success",description:"A message may be formatted to display a positive message",code:e.positiveSuccessCode},{default:i(()=>[t(u,{positive:""},{default:i(()=>[t(s,null,{default:i(()=>[l("You are eligible for a reward")]),_:1}),S$]),_:1})]),_:1},8,["code"]),t(f,{title:"Negative / Error",description:"A message may be formatted to display a negative message",code:e.negativeErrorCode},{default:i(()=>[t(u,{negative:""},{default:i(()=>[t(v,{name:"close"}),t(s,null,{default:i(()=>[l("We're sorry we can't apply that discount")]),_:1}),w$]),_:1})]),_:1},8,["code"]),t(f,{title:"Colored",description:"A message can be formatted to be different colors",code:e.coloredCode},{default:i(()=>[S("div",null,[t(u,{color:"red"},{default:i(()=>[l("Red")]),_:1}),t(u,{color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(u,{color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(u,{color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(u,{color:"green"},{default:i(()=>[l("Green")]),_:1}),t(u,{color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(u,{color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(u,{color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(u,{color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(u,{color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(u,{color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(u,{color:"black"},{default:i(()=>[l("Black")]),_:1})])]),_:1},8,["code"]),t(f,{title:"Size",description:"A message can have different sizes",code:e.sizeCode},{default:i(()=>[S("div",null,[t(u,{size:"mini"},{default:i(()=>[l("This is a mini message.")]),_:1}),t(u,{size:"large"},{default:i(()=>[l("This is a large message.")]),_:1}),t(u,{size:"massive"},{default:i(()=>[l("This is a massive message.")]),_:1})])]),_:1},8,["code"])]),_:1})])}const A$=we(p$,[["render",C$]]),k$=D({name:"TableDoc",components:{DocPageHeader:Ye,DocExample:Pe},setup(){return{tableCode:`<sui-table celled>
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
</sui-table>`}}}),x$=S("a",{href:"#"},"Edit",-1),$$=S("a",{href:"#"},"Edit",-1),B$=S("a",{href:"#"},"Edit",-1),T$=S("br",null,null,-1),L$=S("br",null,null,-1),E$=S("br",null,null,-1),D$=S("br",null,null,-1),I$=S("br",null,null,-1),R$=S("br",null,null,-1),z$=S("br",null,null,-1);function P$(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-table-header-cell"),u=y("sui-table-row"),f=y("sui-table-header"),d=y("sui-table-cell"),h=y("sui-table-body"),v=y("sui-table"),_=y("doc-example"),w=y("sui-icon"),A=y("sui-table-footer"),$=y("sui-container");return L(),ge("div",null,[t(m,{title:"Table",sub:"A table displays a collections of data grouped into rows"}),t($,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(_,{title:"Table",description:"A standard table",code:e.tableCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Age")]),_:1}),t(s,null,{default:i(()=>[l("Job")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("James")]),_:1}),t(d,null,{default:i(()=>[l("24")]),_:1}),t(d,null,{default:i(()=>[l("Engineer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jill")]),_:1}),t(d,null,{default:i(()=>[l("26")]),_:1}),t(d,null,{default:i(()=>[l("Engineer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Elyse")]),_:1}),t(d,null,{default:i(()=>[l("24")]),_:1}),t(d,null,{default:i(()=>[l("Designer")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Definition",description:"A table may be formatted to emphasize a first column that defines a rows content",code:e.definitionCode},{default:i(()=>[t(v,{definition:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s),t(s,null,{default:i(()=>[l("Arguments")]),_:1}),t(s,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("reset rating")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1}),t(d,null,{default:i(()=>[l("Resets rating to default value")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("set rating")]),_:1}),t(d,null,{default:i(()=>[l("rating (integer)")]),_:1}),t(d,null,{default:i(()=>[l("Sets the current star rating to specified value")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Structured",description:"A table can be formatted to display complex structured data",code:e.structuredCode},{default:i(()=>[t(v,{structured:"",celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{rowspan:"2"},{default:i(()=>[l("Name")]),_:1}),t(s,{rowspan:"2"},{default:i(()=>[l("Type")]),_:1}),t(s,{rowspan:"2"},{default:i(()=>[l("Files")]),_:1}),t(s,{colspan:"3"},{default:i(()=>[l("Languages")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Ruby")]),_:1}),t(s,null,{default:i(()=>[l("Javascript")]),_:1}),t(s,null,{default:i(()=>[l("Python")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Alpha Team")]),_:1}),t(d,null,{default:i(()=>[l("Project 1")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[l("2")]),_:1}),t(d,{textAlign:"center"},{default:i(()=>[t(w,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(d),t(d)]),_:1}),t(u,null,{default:i(()=>[t(d,{rowspan:"3"},{default:i(()=>[l("Beta Team")]),_:1}),t(d,null,{default:i(()=>[l("Project 1")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[l("52")]),_:1}),t(d,{textAlign:"center"},{default:i(()=>[t(w,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(d),t(d)]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Project 2")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[l("12")]),_:1}),t(d),t(d,{textAlign:"center"},{default:i(()=>[t(w,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(d)]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Project 3")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[l("21")]),_:1}),t(d,{textAlign:"center"},{default:i(()=>[t(w,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(d),t(d)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(_,{title:"Positive / Negative",description:"A cell or row may let a user know whether a value is good or bad",code:e.positiveNegativeCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("No Name Specified")]),_:1}),t(d,null,{default:i(()=>[l("Unknown")]),_:1}),t(d,{negative:""},{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,{positive:""},{default:i(()=>[t(d,null,{default:i(()=>[l("Jimmy")]),_:1}),t(d,null,{default:i(()=>[t(w,{name:"checkmark"}),l(" Approved ")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Unknown")]),_:1}),t(d,{positive:""},{default:i(()=>[t(w,{name:"close"}),l(" Requires call ")]),_:1})]),_:1}),t(u,{negative:""},{default:i(()=>[t(d,null,{default:i(()=>[l("Jill")]),_:1}),t(d,null,{default:i(()=>[l("Unknown")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Error",description:"A cell or row may call attention to an error or a negative value",code:e.errorCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("No Name Specified")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,{error:""},{default:i(()=>[t(d,null,{default:i(()=>[l("Jimmy")]),_:1}),t(d,null,{default:i(()=>[l("Cannot pull data")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,{error:""},{default:i(()=>[t(w,{name:"attention"}),l(" Requires call ")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jill")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Warning",description:"A cell or row may warn a user",code:e.warningCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("No Name Specified")]),_:1}),t(d,null,{default:i(()=>[l("Unknown")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,{warning:""},{default:i(()=>[t(d,null,{default:i(()=>[l("Jimmy")]),_:1}),t(d,null,{default:i(()=>[t(w,{name:"attention"}),l(" Requires Action ")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Unknown")]),_:1}),t(d,{warning:""},{default:i(()=>[t(w,{name:"attention"}),l(" Hostile ")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jill")]),_:1}),t(d,null,{default:i(()=>[l("Unknown")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Active",description:"A cell or row can be active or selected by a user",code:e.activeCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("No Name Specified")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,{active:""},{default:i(()=>[t(d,null,{default:i(()=>[l("Jimmy")]),_:1}),t(d,null,{default:i(()=>[l("Selected")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,{active:""},{default:i(()=>[l("Jill")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Disabled",description:"A cell can be disabled",code:e.disabledCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{disabled:""},{default:i(()=>[t(d,null,{default:i(()=>[l("No Name Specified")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jimmy")]),_:1}),t(d,null,{default:i(()=>[l("Selected")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,{disabled:""},{default:i(()=>[l("Jill")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Colored Cells",description:"A cell can be styled by the central color palette colors",code:e.coloredCellsCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,{color:"orange"},{default:i(()=>[l("No Name Specified")]),_:1}),t(d,null,{default:i(()=>[l("Unknown")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,{color:"blue"},{default:i(()=>[t(d,null,{default:i(()=>[l("Jimmy")]),_:1}),t(d,null,{default:i(()=>[t(w,{name:"microphone"}),l(" Recording session ")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Unknown")]),_:1}),t(d,{color:"pink"},{default:i(()=>[t(w,{name:"child"}),l(" Baby Party ")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jill")]),_:1}),t(d,null,{default:i(()=>[l("Unknown")]),_:1}),t(d,{color:"green"},{default:i(()=>[l("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Marked",description:"A cell or row can be marked by a colored left or right border",code:e.markedCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,{marked:"right",color:"blue"},{default:i(()=>[l("No Name Specified")]),_:1}),t(d,{marked:"left",color:"red"},{default:i(()=>[l("Unknown")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,{marked:"left",color:"green"},{default:i(()=>[l("Jimmy")]),_:1}),t(d,null,{default:i(()=>[t(w,{name:"microphone"}),l(" Recording session ")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Unknown")]),_:1}),t(d,{marked:"left",color:"orange"},{default:i(()=>[t(w,{name:"child"}),l(" Baby Party ")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jill")]),_:1}),t(d,null,{default:i(()=>[l("Unknown")]),_:1}),t(d,{marked:"right",color:"purple"},{default:i(()=>[l("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(_,{title:"Single Line",description:"A table can specify that its cell contents should remain on a single line, and not wrap",code:e.singleLineCode},{default:i(()=>[t(v,{"single-line":""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Registration Date")]),_:1}),t(s,null,{default:i(()=>[l("E-mail address")]),_:1}),t(s,null,{default:i(()=>[l("Premium Plan")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John Lilki")]),_:1}),t(d,null,{default:i(()=>[l("September 14, 2013")]),_:1}),t(d,null,{default:i(()=>[l("jhlilk22@yahoo.com")]),_:1}),t(d,null,{default:i(()=>[l("No")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie Harington")]),_:1}),t(d,null,{default:i(()=>[l("January 11, 2014")]),_:1}),t(d,null,{default:i(()=>[l("jamieharingonton@yahoo.com")]),_:1}),t(d,null,{default:i(()=>[l("Yes")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jill Lewis")]),_:1}),t(d,null,{default:i(()=>[l("May 11, 2014")]),_:1}),t(d,null,{default:i(()=>[l("jilsewris22@yahoo.com")]),_:1}),t(d,null,{default:i(()=>[l("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Fixed",description:"A table can use `table-layout: fixed` a special faster form of table rendering that does not resize table cells based on content",code:e.fixedCode},{default:i(()=>[t(v,{fixed:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jimmy")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Denied")]),_:1}),t(d,null,{default:i(()=>[l("Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Stacking",descirption:"A table can specify how it stacks table content responsively",code:e.stackingCode},{default:i(()=>[t(v,{stackable:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jimmy")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Denied")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Selectable Row",description:"A table can have its rows appear selectable",code:e.selectableRowCode},{default:i(()=>[t(v,{selectable:"",celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,{positive:""},{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,{warning:""},{default:i(()=>[t(d,null,{default:i(()=>[l("Jimmy")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,{negative:""},{default:i(()=>[l("Denied")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Selectable Cell",description:"A table cell can be selectable",code:e.selectableCellCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,{positive:""},{default:i(()=>[l("Approved")]),_:1}),t(d,{selectable:""},{default:i(()=>[x$]),_:1})]),_:1}),t(u,{warning:""},{default:i(()=>[t(d,null,{default:i(()=>[l("Jimmy")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,{selectable:""},{default:i(()=>[$$]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,{negative:""},{default:i(()=>[l("Denied")]),_:1}),t(d,{selectable:""},{default:i(()=>[B$]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Verical Alignment",description:"A table header, row, or cell can adjust its vertical alignment",code:e.verticalAlignmentCode},{default:i(()=>[t(v,{striped:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{verticalAlign:"top"},{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,{verticalAlign:"top"},{default:i(()=>[l(" Notes "),T$,l(" 1"),L$,l(" 2"),E$]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,{verticalAlign:"bottom"},{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l(" Notes "),D$,l(" 1"),I$,l(" 2"),R$]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Text Alignment",description:"A table header, row, or cell can adjust its text alignment",code:e.textAlignCode},{default:i(()=>[t(v,{striped:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,{textAlign:"right"},{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{textAlign:"center"},{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Striped",description:"A table can stripe alternate rows of content with a darker color to increase contrast",code:e.stripedCode},{default:i(()=>[t(v,{striped:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Date Joined")]),_:1}),t(s,null,{default:i(()=>[l("E-mail")]),_:1}),t(s,null,{default:i(()=>[l("Called")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John Lilki")]),_:1}),t(d,null,{default:i(()=>[l("September 14, 2013")]),_:1}),t(d,null,{default:i(()=>[l("jhlilk22@yahoo.com")]),_:1}),t(d,null,{default:i(()=>[l("No")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie Harington")]),_:1}),t(d,null,{default:i(()=>[l("January 11, 2014")]),_:1}),t(d,null,{default:i(()=>[l("jamieharingonton@yahoo.com")]),_:1}),t(d,null,{default:i(()=>[l("Yes")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jill Lewis")]),_:1}),t(d,null,{default:i(()=>[l("May 11, 2014")]),_:1}),t(d,null,{default:i(()=>[l("jilsewris22@yahoo.com")]),_:1}),t(d,null,{default:i(()=>[l("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Celled",description:"A table may be divided each row into separate cells",code:e.celledCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jill")]),_:1}),t(d,null,{default:i(()=>[l("Denied")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("3 People")]),_:1}),t(d,null,{default:i(()=>[l("2 Approved")]),_:1}),t(d)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Basic",description:"A table can reduce its complexity to increase readability",code:e.basicCode},{default:i(()=>[S("div",null,[t(v,{basic:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jill")]),_:1}),t(d,null,{default:i(()=>[l("Denied")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1}),z$,t(v,{basic:"very"},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jill")]),_:1}),t(d,null,{default:i(()=>[l("Denied")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(_,{title:"Collapsing",description:"A table can be collapsing, taking up only as much space as its rows",code:e.collapsingCode},{default:i(()=>[t(v,{collapsing:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Age")]),_:1}),t(s,null,{default:i(()=>[l("Gender")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("27")]),_:1}),t(d,null,{default:i(()=>[l("Male")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("32")]),_:1}),t(d,null,{default:i(()=>[l("Other")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jill")]),_:1}),t(d,null,{default:i(()=>[l("Denied")]),_:1}),t(d,null,{default:i(()=>[l("22")]),_:1}),t(d,null,{default:i(()=>[l("Other")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("3 People")]),_:1}),t(s,null,{default:i(()=>[l("2 Approved")]),_:1}),t(s),t(s),t(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Collapsing Cell",description:"A cell can be collapsing so that it only uses as much space as required",code:e.collapsingCellCode},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,{collapsing:""},{default:i(()=>[t(w,{name:"folder"}),l(" node_modules ")]),_:1}),t(d,null,{default:i(()=>[l("Initial commit")]),_:1}),t(d,null,{default:i(()=>[l("10 hours ago")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,{collapsing:""},{default:i(()=>[t(w,{name:"folder"}),l(" node_modules ")]),_:1}),t(d,null,{default:i(()=>[l("Initial commit")]),_:1}),t(d,null,{default:i(()=>[l("10 hours ago")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,{collapsing:""},{default:i(()=>[t(w,{name:"folder"}),l(" node_modules ")]),_:1}),t(d,null,{default:i(()=>[l("Initial commit")]),_:1}),t(d,null,{default:i(()=>[l("10 hours ago")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Column Count",description:"A table can specify its column count to divide its content evenly",code:e.columnCountCode},{default:i(()=>[t(v,{columns:5},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Age")]),_:1}),t(s,null,{default:i(()=>[l("Gender")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("27")]),_:1}),t(d,null,{default:i(()=>[l("Male")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("32")]),_:1}),t(d,null,{default:i(()=>[l("Other")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jill")]),_:1}),t(d,null,{default:i(()=>[l("Denied")]),_:1}),t(d,null,{default:i(()=>[l("22")]),_:1}),t(d,null,{default:i(()=>[l("Other")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("3 People")]),_:1}),t(s,null,{default:i(()=>[l("2 Approved")]),_:1}),t(s),t(s),t(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Column Width",description:"Column Width",code:e.columnWidthCode},{default:i(()=>[t(v,null,{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{width:10},{default:i(()=>[l("Name")]),_:1}),t(s,{width:6},{default:i(()=>[l("Status")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Colored",description:"A table can be given a color to distinguish it from other tables",code:e.coloredCode},{default:i(()=>[t(v,{color:"red"},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Food")]),_:1}),t(s,null,{default:i(()=>[l("Calories")]),_:1}),t(s,null,{default:i(()=>[l("Protein")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Apples")]),_:1}),t(d,null,{default:i(()=>[l("200")]),_:1}),t(d,null,{default:i(()=>[l("0g")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Orange")]),_:1}),t(d,null,{default:i(()=>[l("310")]),_:1}),t(d,null,{default:i(()=>[l("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Inverted",description:"A table's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Food")]),_:1}),t(s,null,{default:i(()=>[l("Calories")]),_:1}),t(s,null,{default:i(()=>[l("Protein")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Apples")]),_:1}),t(d,null,{default:i(()=>[l("200")]),_:1}),t(d,null,{default:i(()=>[l("0g")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Orange")]),_:1}),t(d,null,{default:i(()=>[l("310")]),_:1}),t(d,null,{default:i(()=>[l("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Padded",description:"A table may sometimes need to be more padded for legibility",code:e.paddedCode},{default:i(()=>[S("div",null,[t(v,{padded:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{padded:"very"},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(_,{title:"Compact",description:"A table may sometimes need to be more compact to make more rows visible at a time",code:e.compactCode},{default:i(()=>[S("div",null,[t(v,{compact:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{compact:"very"},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(_,{title:"Size",description:"A table can also be small or large",code:e.sizeCode},{default:i(()=>[t(v,{size:"small"},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jill")]),_:1}),t(d,null,{default:i(()=>[l("Denied")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const F$=we(k$,[["render",P$]]),M$=D({name:"AdvertisementDoc",components:{DocPageHeader:Ye,DocExample:Pe},setup(){return{adCode:`<sui-advertisement unit="medium rectangle">
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
</div>`,panoramaCode:'<sui-advertisement unit="panorama" test="Panorama" />',netboardCode:'<sui-advertisement unit="netboard" test="Netboard" />',centeredCode:'<sui-advertisement centered unit="banner" test="Centered" /> ',testCode:'<sui-advertisement unit="medium rectangle" test="Ad Unit 1" />'}}}),V$=S("img",{src:ae},null,-1),H$=S("br",null,null,-1);function N$(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-advertisement"),u=y("doc-example"),f=y("sui-container");return L(),ge("div",null,[t(m,{title:"Advertisement",sub:"An ad displays third-party promotional content"}),t(f,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"Ad",description:"A standard ad",code:e.adCode},{default:i(()=>[t(s,{unit:"medium rectangle"},{default:i(()=>[V$]),_:1})]),_:1},8,["code"]),t(u,{title:"Common Units",description:"An advertisement can appear in common ad unit sizes",code:e.commonUnitsCode},{default:i(()=>[S("div",null,[t(s,{unit:"medium rectangle",test:"Medium Rectangle"}),t(s,{unit:"banner",test:"Banner"}),t(s,{unit:"leaderboard",test:"Leaderboard"}),t(s,{unit:"large rectangle",test:"Large Rectangle"}),t(s,{unit:"half page",test:"Half Page"})])]),_:1},8,["code"]),t(u,{title:"Mobile",description:"An ad can use common mobile ad sizes",code:e.mobileCode},{default:i(()=>[S("div",null,[t(s,{unit:"mobile banner",test:"Mobile Banner"}),t(s,{unit:"mobile leaderboard",test:"Mobile Leaderboard"})])]),_:1},8,["code"]),t(u,{title:"Rectangle",description:"An ad can use a common rectangle ad unit size",code:e.rectangleCode},{default:i(()=>[t(s,{unit:"medium rectangle",test:"Medium Rectangle"})]),_:1},8,["code"]),t(u,{title:"Button",description:"An ad can use button ad unit size",code:e.buttonCode},{default:i(()=>[S("div",null,[t(s,{unit:"button",test:"Button"}),t(s,{unit:"square button",test:"Square Button"}),t(s,{unit:"small button",test:"Small Button"})])]),_:1},8,["code"]),t(u,{title:"Skyscraper",description:"An ad can use skyscraper ad unit size",code:e.skyscraperCode},{default:i(()=>[S("div",null,[t(s,{unit:"skyscraper",test:"Skyscraper"}),H$,t(s,{unit:"wide skyscraper",test:"Wide Skyscraper"})])]),_:1},8,["code"]),t(u,{title:"Banner",description:"An ad can use banner ad unit size",code:e.bannerCode},{default:i(()=>[S("div",null,[t(s,{unit:"banner",test:"Banner"}),t(s,{unit:"vertical banner",test:"Vertical Banner"}),t(s,{unit:"top banner",test:"Top Banner"}),t(s,{unit:"half banner",test:"Half Banner"})])]),_:1},8,["code"]),t(u,{title:"Leaderboard",description:"An ad can use leaderboard ad unit size",code:e.leaderboardCode},{default:i(()=>[S("div",null,[t(s,{unit:"leaderboard",test:"Leaderboard"}),t(s,{unit:"large leaderboard",test:"Large Leaderboard"}),t(s,{unit:"billboard",test:"Billboard"})])]),_:1},8,["code"]),t(u,{title:"Panorama",description:"An ad can use panorama ad unit size",code:e.panoramaCode},{default:i(()=>[t(s,{unit:"panorama",test:"Panorama"})]),_:1},8,["code"]),t(u,{title:"Netboard",description:"An ad can use netboard ad unit size",code:e.netboardCode},{default:i(()=>[t(s,{unit:"netboard",test:"Netboard"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(u,{title:"Centered",description:"An advertisement can appear centered",code:e.centeredCode},{default:i(()=>[t(s,{centered:"",unit:"banner",test:"Centered"})]),_:1},8,["code"]),t(u,{title:"Test",description:"A advertisement can be formatted to help verify placement",code:e.testCode},{default:i(()=>[t(s,{unit:"medium rectangle",test:"Ad Unit 1"})]),_:1},8,["code"])]),_:1})])}const O$=we(M$,[["render",N$]]),xc="/vue-fomantic-ui/images/avatar/large/kristy.png",j$="/vue-fomantic-ui/images/avatar/large/daniel.jpg",Un="/vue-fomantic-ui/images/avatar/large/helen.jpg",Yn="/vue-fomantic-ui/images/avatar/large/elliot.jpg",Jn="/vue-fomantic-ui/images/avatar/large/elyse.png",G$="/vue-fomantic-ui/images/avatar/large/matthew.png",q$="/vue-fomantic-ui/images/avatar/large/molly.png",$c="/vue-fomantic-ui/images/avatar/large/jenny.jpg",Bc="/vue-fomantic-ui/images/avatar/large/veronika.jpg",Tc="/vue-fomantic-ui/images/avatar/large/steve.jpg",U$=D({name:"CardDoc",components:{DocPageHeader:Ye,DocExample:Pe},setup(){return{cardCode:`<sui-card>
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
</sui-card-group>`}}}),Y$=S("span",{class:"date"},"Joined in 2013",-1),J$=S("a",null,"Elliot Fu",-1),W$=S("a",null,"Jenny Hess",-1),K$=S("a",null,"Stevie Feliciano",-1),X$=S("a",null,"Administrator",-1),Q$=S("a",null,"Helen Troy",-1),Z$=S("span",{class:"date"},"Joined in 2013",-1),eB=S("span",null,"2 days ago",-1),tB=S("a",null,"Animals",-1),iB=S("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),aB=S("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),lB=S("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),nB=S("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),oB=S("span",{class:"category"},"Animals",-1),sB=S("span",{class:"category"},"Animals",-1),rB=S("div",{class:"right floated author"},[S("img",{class:"ui avatar image",src:wn}),l(" Matt ")],-1),uB=S("span",{class:"category"},"Animals",-1),cB=S("div",{class:"right floated author"},[S("img",{class:"ui avatar image",src:wn}),l(" Matt ")],-1),dB=S("p",null,"Jenny is a student studying Media Management at the New School",-1),mB=S("div",{class:"center aligned author"},[S("img",{class:"ui avatar image",src:Sn}),l(" Jenny ")],-1),pB=S("a",null,"Friends",-1),fB=S("span",{class:"right floated"}," Joined in 2013 ",-1),gB=S("a",null,[S("i",{class:"user icon"}),l(" 75 Friends ")],-1),hB=S("a",null,"Coworker",-1),_B=S("span",{class:"right floated"}," Joined in 2011 ",-1),bB=S("a",null,[S("i",{class:"user icon"}),l(" 35 Friends ")],-1),vB=S("a",null,"Coworker",-1),yB=S("span",{class:"right floated"}," Joined in 2014 ",-1),SB=S("a",null,[S("i",{class:"user icon"}),l(" 151 Friends ")],-1);function wB(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-image"),u=y("sui-card-header"),f=y("sui-card-meta"),d=y("sui-card-description"),h=y("sui-card-content"),v=y("sui-icon"),_=y("sui-card"),w=y("doc-example"),A=y("sui-button"),$=y("sui-button-group"),b=y("sui-card-group"),C=y("sui-feed-summary"),x=y("sui-feed-content"),B=y("sui-feed-event"),E=y("sui-feed"),F=y("sui-grid-column"),M=y("sui-grid"),z=y("sui-segment"),j=y("sui-container");return L(),ge("div",null,[t(m,{title:"Card",sub:"A card displays site content in a manner similar to a playing card"}),t(j,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(w,{title:"Card",description:"A single card",code:e.cardCode},{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:xc,wrapped:""}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Kristy")]),_:1}),t(f,null,{default:i(()=>[Y$]),_:1}),t(d,null,{default:i(()=>[l(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[S("a",null,[t(v,{name:"user"}),l(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),t(w,{title:"Cards",description:"A group of cards",code:e.cardsCode},{default:i(()=>[t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(s,{src:Qt,floated:"right",size:"mini"}),t(u,null,{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[l("Friends of Veronika")]),_:1}),t(d,null,{default:i(()=>[l("Elliot requested permission to view your contact details")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t($,{widths:2},{default:i(()=>[t(A,{basic:"",color:"green"},{default:i(()=>[l("Approve")]),_:1}),t(A,{basic:"",color:"red"},{default:i(()=>[l("Decline")]),_:1})]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(s,{src:Sn,floated:"right",size:"mini"}),t(u,null,{default:i(()=>[l("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[l("New Member")]),_:1}),t(d,null,{default:i(()=>[l("Jenny wants to add you to the group best friends")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t($,{widths:2},{default:i(()=>[t(A,{basic:"",color:"green"},{default:i(()=>[l("Approve")]),_:1}),t(A,{basic:"",color:"red"},{default:i(()=>[l("Decline")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(w,{title:"Content Block",description:"A card can contain blocks of content",code:e.contentBlockCode},{default:i(()=>[t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Project Timeline")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(p,{sub:""},{default:i(()=>[l("Activity")]),_:1}),t(E,{size:"small"},{default:i(()=>[t(B,null,{default:i(()=>[t(x,null,{default:i(()=>[t(C,null,{default:i(()=>[J$,l(" added "),W$,l(" to the project ")]),_:1})]),_:1})]),_:1}),t(B,null,{default:i(()=>[t(x,null,{default:i(()=>[t(C,null,{default:i(()=>[K$,l(" was added as an "),X$]),_:1})]),_:1})]),_:1}),t(B,null,{default:i(()=>[t(x,null,{default:i(()=>[t(C,null,{default:i(()=>[Q$,l(" added two pictures ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(A,{as:"button"},{default:i(()=>[l("Join Project")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(w,{title:"Image",description:"A card can contain an image",code:e.imageCode},{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:xc,wrapped:""}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Kristy")]),_:1}),t(f,null,{default:i(()=>[Z$]),_:1}),t(d,null,{default:i(()=>[l(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[S("a",null,[t(v,{name:"user"}),l(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),t(w,{title:"Header",description:"A card can contain a header",code:e.headerCode},{default:i(()=>[t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[l("Friend")]),_:1}),t(d,null,{default:i(()=>[l(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Veronika Ossi")]),_:1}),t(f,null,{default:i(()=>[l("Friend")]),_:1}),t(d,null,{default:i(()=>[l(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[l("Friend")]),_:1}),t(d,null,{default:i(()=>[l(" Jenny is a student studying Media Management at the New School ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(w,{title:"Metadata",description:"A card can contain content metadata",code:e.metadataCode},{default:i(()=>[t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[eB,tB]),_:1}),t(d,null,{default:i(()=>[t(s,{src:De})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(w,{title:"Buttons",description:"A card can contain buttons",code:e.buttonsCode},{default:i(()=>[t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elliot Fu")]),_:1}),t(d,null,{default:i(()=>[l(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1}),t(A,{attached:"bottom"},{default:i(()=>[t(v,{name:"add"}),l(" Add Friend ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Veronika Ossi")]),_:1}),t(d,null,{default:i(()=>[l(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1}),t(A,{attached:"bottom"},{default:i(()=>[t(v,{name:"add"}),l(" Add Friend ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(w,{title:"Description",description:"A card can contain a description with one or more paragraphs",code:e.descriptionCode},{default:i(()=>[t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[l("2 days ago")]),_:1}),t(d,null,{default:i(()=>[iB,aB]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(w,{title:"Extra Content",description:"A card can contain extra content meant to be formatted separately from the main content",code:e.extraContentCode},{default:i(()=>[t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[l("2 days ago")]),_:1}),t(d,null,{default:i(()=>[lB,nB]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(v,{name:"check"}),l(" 121 Votes ")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(w,{title:"Fluid Card",description:"A fluid card takes up the width of its container",code:e.fluidCardCode},{default:i(()=>[t(M,{columns:3},{default:i(()=>[t(F,null,{default:i(()=>[t(_,{fluid:""},{default:i(()=>[t(s,{src:j$}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Daniel Louise")]),_:1})]),_:1})]),_:1})]),_:1}),t(F,null,{default:i(()=>[t(_,{fluid:""},{default:i(()=>[t(s,{src:Un}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Helen Troy")]),_:1})]),_:1})]),_:1})]),_:1}),t(F,null,{default:i(()=>[t(_,{fluid:""},{default:i(()=>[t(s,{src:Yn}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(w,{title:"Centered Card",description:"A card can center itself inside its container",code:e.centeredCardCode},{default:i(()=>[t(_,{centered:""},{default:i(()=>[t(s,{src:Jn}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elyse")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(w,{title:"Horizontal Cards",description:"A card can display horizontally",code:e.horizontalCardsCode},{default:i(()=>[t(_,{horizontal:""},{default:i(()=>[t(s,{src:Jn}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[oB]),_:1}),t(d,null,{default:i(()=>[t(s,{src:De})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(w,{title:"Raised Card",description:"A card may be formatted to raise above the page",code:e.raisedCode},{default:i(()=>[t(_,{raised:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[sB]),_:1}),t(d,null,{default:i(()=>[t(s,{src:De})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[rB]),_:1})]),_:1})]),_:1},8,["code"]),t(w,{title:"Link Card",description:"A card can be formatted so that the entire contents link to another page",code:e.linkCardCode},{default:i(()=>[t(_,{href:"#",raised:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[uB]),_:1}),t(d,null,{default:i(()=>[t(s,{src:De})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[cB]),_:1})]),_:1})]),_:1},8,["code"]),t(w,{title:"Text Alignment",description:"Any element inside a card can have its text alignment specified",code:e.textAlignCode},{default:i(()=>[t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,{textAlign:"center"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(d,{textAlign:"center"},{default:i(()=>[dB]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[mB]),_:1})]),_:1})]),_:1},8,["code"]),t(w,{title:"Inverted",description:"Card's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(z,{inverted:""},{default:i(()=>[t(b,{inverted:""},{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:G$}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Matt Giampietro")]),_:1}),t(f,null,{default:i(()=>[pB]),_:1}),t(d,null,{default:i(()=>[l(" Matthew is an interior designer living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[fB,gB]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:q$}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Molly")]),_:1}),t(f,null,{default:i(()=>[hB]),_:1}),t(d,null,{default:i(()=>[l(" Molly is a personal assistant living in Paris. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[_B,bB]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:Jn}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elyse")]),_:1}),t(f,null,{default:i(()=>[vB]),_:1}),t(d,null,{default:i(()=>[l(" Elyse is a copywriter working in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[yB,SB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(w,{title:"Colored",description:"A card can specify a color",code:e.coloredCode},{default:i(()=>[t(b,{itemsPerRow:4},{default:i(()=>[t(_,{color:"primary",href:"#"},{default:i(()=>[t(s,{src:za})]),_:1}),t(_,{color:"secondary",href:"#"},{default:i(()=>[t(s,{src:za})]),_:1}),t(_,{color:"red",href:"#"},{default:i(()=>[t(s,{src:za})]),_:1}),t(_,{color:"orange",href:"#"},{default:i(()=>[t(s,{src:za})]),_:1})]),_:1})]),_:1},8,["code"]),t(w,{title:"Column Count",description:"A group of cards can set how many cards should exist in a row",code:e.columnCountCode},{default:i(()=>[t(b,{itemsPerRow:4},{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:ae})]),_:1})]),_:1})]),_:1},8,["code"]),t(w,{title:"Stackable",description:"A group of cards can automatically stack rows to a single columns on mobile devices",code:e.stackableCode},{default:i(()=>[t(b,{itemsPerRow:3,stackable:""},{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:Yn})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:Un})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:$c})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:Bc})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:Fo})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:Tc})]),_:1})]),_:1})]),_:1},8,["code"]),t(w,{title:"Doubling",description:"A group of cards can double its column width for mobile",code:e.doublingCode},{default:i(()=>[t(b,{itemsPerRow:6,doubling:""},{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:Yn})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:Un})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:$c})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:Bc})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:Fo})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:Tc})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const CB=we(U$,[["render",wB]]),AB=D({name:"CommentDoc",components:{DocPageHeader:Ye,DocExample:Pe},setup(){return{commentsCode:`<sui-comment-group>
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
  </sui-segment>`}}}),kB=S("span",null,"Today at 5:42PM",-1),xB=S("a",null,"Reply",-1),$B=S("span",null,"Yesterday at 12:30AM",-1),BB=S("a",null,"Reply",-1),TB={class:"comments"},LB=S("span",null,"Just now",-1),EB=S("a",null,"Reply",-1),DB=S("span",null,"5 days ago",-1),IB=S("a",null,"Reply",-1),RB=S("div",{class:"date"},"2 days ago",-1),zB=S("div",{class:"rating"},[S("i",{class:"star icon"}),l(" 5 Faves ")],-1),PB=S("a",null,"Reply",-1),FB=S("a",null,"Save",-1),MB=S("a",null,"Hide",-1),VB=S("a",null,[S("i",{class:"expand icon"}),l(" Full-screen ")],-1),HB=S("a",null,"Reply",-1),NB=S("a",null,"Reply",-1),OB=S("a",null,"Replay",-1),jB=S("span",null,"Today at 5:42PM",-1),GB=S("a",{href:"#"},"Replay",-1),qB=S("span",null,"Yesterday at 12:30AM",-1),UB=S("a",{href:"#"},"Replay",-1),YB=S("span",null,"Just now",-1),JB=S("a",{href:"#"},"Replay",-1),WB=S("span",null,"5 days ago",-1),KB=S("a",{href:"#"},"Replay",-1),XB=S("span",null,"Today at 5:42PM",-1),QB=S("a",{href:"#"},"Replay",-1),ZB=S("span",null,"Yesterday at 12:30AM",-1),eT=S("a",{href:"#"},"Replay",-1),tT=S("span",null,"Just now",-1),iT=S("a",{href:"#"},"Replay",-1),aT=S("span",null,"5 days ago",-1),lT=S("a",{href:"#"},"Replay",-1),nT=S("span",null,"Today at 5:42PM",-1),oT=S("a",{href:"#"},"Replay",-1),sT=S("span",null,"Yesterday at 12:30AM",-1),rT=S("a",{href:"#"},"Replay",-1),uT=S("span",null,"Just now",-1),cT=S("a",{href:"#"},"Replay",-1),dT=S("span",null,"5 days ago",-1),mT=S("a",{href:"#"},"Replay",-1),pT=S("span",null,"Today at 5:42PM",-1),fT=S("a",{href:"#"},"Replay",-1),gT=S("span",null,"Yesterday at 12:30AM",-1),hT=S("a",{href:"#"},"Replay",-1),_T=S("span",null,"Just now",-1),bT=S("a",{href:"#"},"Replay",-1),vT=S("span",null,"5 days ago",-1),yT=S("a",{href:"#"},"Replay",-1);function ST(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-comment-avatar"),u=y("sui-comment-author"),f=y("sui-comment-metadata"),d=y("sui-comment-text"),h=y("sui-comment-actions"),v=y("sui-comment-content"),_=y("sui-comment"),w=y("sui-comment-group"),A=y("doc-example"),$=y("sui-form-textarea"),b=y("sui-icon"),C=y("sui-button"),x=y("sui-form"),B=y("sui-segment"),E=y("sui-container");return L(),ge("div",null,[t(m,{title:"Comment",sub:"A comment displays user feedback to site content"}),t(E,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(A,{title:"Comments",description:"A basic list of comments",code:e.commentsCode},{default:i(()=>[t(w,null,{default:i(()=>[t(p,{as:"h3",dividing:""},{default:i(()=>[l("Comments")]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Matt")]),_:1}),t(f,null,{default:i(()=>[kB]),_:1}),t(d,null,{default:i(()=>[l("How artistic!")]),_:1}),t(h,null,{default:i(()=>[xB]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[$B]),_:1}),t(d,null,{default:i(()=>[l("This has been very useful for my research. Thanks as well!")]),_:1}),t(h,null,{default:i(()=>[BB]),_:1})]),_:1}),S("div",TB,[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[LB]),_:1}),t(d,null,{default:i(()=>[l("Elliot you are always so right :)")]),_:1}),t(h,null,{default:i(()=>[EB]),_:1})]),_:1})]),_:1})])]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[DB]),_:1}),t(d,null,{default:i(()=>[l("Dude, this is awesome. Thanks so much")]),_:1}),t(h,null,{default:i(()=>[IB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(A,{title:"avatar",description:"A comment can contain an image or avatar",code:e.avatarCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Metadata",description:"A comment can contain metadata about the comment, an arbitrary amount of metadata may be defined",code:e.metadataCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/stevie.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Stevie Feliciano")]),_:1}),t(f,null,{default:i(()=>[RB,zB]),_:1}),t(d,null,{default:i(()=>[l(" Hey guys, I hope this example comment is helping you read this documentation. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Actions",description:"A comment can contain an list of actions a user may perform related to this comment",code:e.actionsCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Tom Lukic")]),_:1}),t(d,null,{default:i(()=>[l(" This will be great for business reports. I will definitely download this. ")]),_:1}),t(h,null,{default:i(()=>[PB,FB,MB,VB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Reply Form",description:"A comment can contain a form to reply to a comment. This may have arbitrary content",code:e.replyFormCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/steve.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Steve Jobs")]),_:1}),t(f,null,{default:i(()=>[l("2 days ago")]),_:1}),t(d,null,{default:i(()=>[l("Revolutionary!")]),_:1}),t(h,null,{default:i(()=>[HB]),_:1}),t(x,{reply:""},{default:i(()=>[t($),t(C,{color:"primary",icon:"",labelPosition:"left"},{default:i(()=>[t(b,{name:"edit"}),l(" Add Reply ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(A,{title:"Collapsed",description:"Comments can be collapsed, or hidden from view",code:e.collapsedCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/christian.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Christian Rocha")]),_:1}),t(f,null,{default:i(()=>[l("2 days ago")]),_:1}),t(d,null,{default:i(()=>[l(" I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket? ")]),_:1}),t(h,null,{default:i(()=>[NB]),_:1})]),_:1}),t(w,{collapsed:""},{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[l("1 days ago")]),_:1}),t(d,null,{default:i(()=>[l("No, it wont")]),_:1}),t(h,null,{default:i(()=>[OB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(A,{title:"Threaded",description:"A comment list can be threaded to showing the relationship between conversations",code:e.threadedCode},{default:i(()=>[t(w,{threaded:""},{default:i(()=>[t(p,{as:"h3",dividing:""},{default:i(()=>[l("Comments")]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Matt")]),_:1}),t(f,null,{default:i(()=>[jB]),_:1}),t(d,null,{default:i(()=>[l(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[GB]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[qB]),_:1}),t(d,null,{default:i(()=>[l(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[UB]),_:1})]),_:1}),t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[YB]),_:1}),t(d,null,{default:i(()=>[l(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[JB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[WB]),_:1}),t(d,null,{default:i(()=>[l(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[KB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Minimal",description:"Comments can hide extra information unless a user shows intent to interact with a comment",code:e.minimalCode},{default:i(()=>[t(w,{minimal:""},{default:i(()=>[t(p,{as:"h3",dividing:""},{default:i(()=>[l("Comments")]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Matt")]),_:1}),t(f,null,{default:i(()=>[XB]),_:1}),t(d,null,{default:i(()=>[l(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[QB]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[ZB]),_:1}),t(d,null,{default:i(()=>[l(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[eT]),_:1})]),_:1}),t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[tT]),_:1}),t(d,null,{default:i(()=>[l(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[iT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[aT]),_:1}),t(d,null,{default:i(()=>[l(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[lT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Size",description:"Comments can have different sizes",code:e.sizeCode},{default:i(()=>[t(w,{size:"small"},{default:i(()=>[t(p,{as:"h3",dividing:""},{default:i(()=>[l("Comments")]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Matt")]),_:1}),t(f,null,{default:i(()=>[nT]),_:1}),t(d,null,{default:i(()=>[l(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[oT]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[sT]),_:1}),t(d,null,{default:i(()=>[l(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[rT]),_:1})]),_:1}),t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[uT]),_:1}),t(d,null,{default:i(()=>[l(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[cT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[dT]),_:1}),t(d,null,{default:i(()=>[l(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[mT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Inverted",description:"Comments's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(B,{inverted:""},{default:i(()=>[t(w,{inverted:""},{default:i(()=>[t(p,{as:"h3",inverted:"",dividing:""},{default:i(()=>[l("Comments")]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Matt")]),_:1}),t(f,null,{default:i(()=>[pT]),_:1}),t(d,null,{default:i(()=>[l(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[fT]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[gT]),_:1}),t(d,null,{default:i(()=>[l(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[hT]),_:1})]),_:1}),t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[_T]),_:1}),t(d,null,{default:i(()=>[l(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[bT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[vT]),_:1}),t(d,null,{default:i(()=>[l(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[yT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const wT=we(AB,[["render",ST]]),CT=D({name:"FeedDoc",components:{DocPageHeader:Ye,DocExample:Pe},setup(){return{feedCode:`<sui-feed>
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
</sui-feed>`}}}),AT=S("img",{src:Qt},null,-1),kT=S("img",{src:Qt},null,-1),xT=S("a",null,"Coworkers",-1),$T=S("img",{src:Sn},null,-1),BT=S("a",null,"Jenny Hess",-1),TT=S("a",null,"coworker",-1),LT=S("img",{src:Pa},null,-1),ET=S("a",null,"Helen Troy",-1),DT=S("a",null,[S("img",{src:ae})],-1),IT=S("a",null,[S("img",{src:ae})],-1),RT=S("a",null,"Elliot Fu",-1),zT=S("a",null,"Jenny Hess",-1),PT=S("a",null,"Stevie Feliciano",-1),FT=S("a",null,"Elliot Fu",-1),MT=S("a",null,"Helen Troy",-1),VT=S("a",null,"Christian Rocha",-1),HT=S("img",{src:Qt},null,-1),NT=S("div",{class:"date"},"Just now",-1),OT=S("a",{class:"user"},"Elliot Fu",-1);function jT(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-feed-label"),u=y("sui-feed-user"),f=y("sui-feed-date"),d=y("sui-feed-summary"),h=y("sui-icon"),v=y("sui-feed-like"),_=y("sui-feed-meta"),w=y("sui-feed-content"),A=y("sui-feed-event"),$=y("sui-feed"),b=y("doc-example"),C=y("sui-feed-extra"),x=y("sui-segment"),B=y("sui-container");return L(),ge("div",null,[t(m,{title:"Feed",sub:"A feed presents user activity chronologically"}),t(B,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(b,{title:"Feed",description:"A feed",code:e.feedCode},{default:i(()=>[t($,null,{default:i(()=>[t(A,null,{default:i(()=>[t(s,null,{default:i(()=>[AT]),_:1}),t(w,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elliot Fu")]),_:1}),l(" added you as a friend "),t(f,null,{default:i(()=>[l("1 Hour Ago")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(v,null,{default:i(()=>[t(h,{name:"like"}),l(" 4 Likes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(b,{title:"Label",description:"An event can contain an image or icon label",code:e.labelCode},{default:i(()=>[t($,null,{default:i(()=>[t(A,null,{default:i(()=>[t(s,null,{default:i(()=>[kT]),_:1}),t(w,null,{default:i(()=>[l(" You added Elliot Fu to the group "),xT]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Date",description:"An event or an event summary can contain a date",code:e.dateCode},{default:i(()=>[t($,null,{default:i(()=>[t(A,null,{default:i(()=>[t(s,null,{default:i(()=>[$T]),_:1}),t(w,null,{default:i(()=>[t(f,null,{default:i(()=>[l(" 3 days ago ")]),_:1}),t(d,null,{default:i(()=>[l(" You added "),BT,l(" to your "),TT,l(" group. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Additional information",description:"An event can contain additional information like a set of images or text",code:e.additionalInfoCode},{default:i(()=>[t($,null,{default:i(()=>[t(A,null,{default:i(()=>[t(s,null,{default:i(()=>[LT]),_:1}),t(w,null,{default:i(()=>[t(f,null,{default:i(()=>[l(" 3 days ago ")]),_:1}),t(d,null,{default:i(()=>[ET,l(" added 2 photos ")]),_:1}),t(C,{images:""},{default:i(()=>[DT,IT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(b,{title:"Size",description:"A feed can have different sizes",code:e.sizeCode},{default:i(()=>[t($,{size:"small"},{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[l("Followers Activity")]),_:1}),t(A,null,{default:i(()=>[t(w,null,{default:i(()=>[t(d,null,{default:i(()=>[RT,l(" added "),zT,l(" as a friend ")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[t(w,null,{default:i(()=>[t(d,null,{default:i(()=>[PT,l(" added "),FT,l(" as a friend ")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[t(w,null,{default:i(()=>[t(d,null,{default:i(()=>[MT,l(" added "),VT,l(" as a friend ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Inverted",description:"A feed's color can be inverted",code:e.invertedCode},{default:i(()=>[t(x,{inverted:""},{default:i(()=>[t($,{inverted:""},{default:i(()=>[t(A,null,{default:i(()=>[t(s,null,{default:i(()=>[HT]),_:1}),t(w,null,{default:i(()=>[NT,t(d,null,{default:i(()=>[OT,l(" posted on his page ")]),_:1}),t(C,{text:""},{default:i(()=>[l(" Hey there ! ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const GT=we(CT,[["render",jT]]),qT=D({name:"ItemDoc",components:{DocPageHeader:Ye,DocExample:Pe},setup(){return{itemsCode:`<sui-item-group>
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
</sui-item-group>`}}}),UT=S("img",{src:ae},null,-1),YT=S("span",null,"Description",-1),JT=S("img",{src:qe},null,-1),WT=S("img",{src:ae},null,-1),KT=S("span",null,"Description",-1),XT=S("img",{src:qe},null,-1),QT=S("img",{src:ae},null,-1),ZT=S("img",{src:ae},null,-1),e2=S("img",{src:ae},null,-1),t2=S("img",{src:ae},null,-1),i2=S("img",{src:ae},null,-1),a2=S("img",{src:ae},null,-1),l2=S("img",{src:ae},null,-1),n2=S("span",{class:"price"},"$1200",-1),o2=S("span",{class:"stay"},"1 Month",-1),s2=S("img",{src:qe},null,-1),r2=S("span",{class:"price"},"$1000",-1),u2=S("span",{class:"stay"},"2 Weeks",-1),c2=S("img",{src:qe},null,-1),d2=S("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),m2=S("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),p2=S("img",{src:qe},null,-1),f2=S("img",{src:ae},null,-1),g2=S("span",{class:"cinema"},"Union Square 14",-1),h2=S("img",{src:qe},null,-1),_2=S("img",{src:ae},null,-1),b2=S("span",{class:"cinema"},"IFC Cinema",-1),v2=S("img",{src:qe},null,-1),y2=S("img",{src:ae},null,-1),S2=S("span",{class:"cinema"},"IFC",-1),w2=S("img",{src:qe},null,-1),C2=S("img",{src:qe},null,-1),A2=S("img",{src:qe},null,-1),k2=S("img",{src:qe},null,-1),x2=S("span",{class:"price"},"$1200",-1),$2=S("span",{class:"stay"},"1 Month",-1),B2=S("img",{src:qe},null,-1),T2=S("span",{class:"price"},"$1000",-1),L2=S("span",{class:"stay"},"2 Weeks",-1),E2=S("img",{src:qe},null,-1);function D2(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-item-image"),u=y("sui-item-header"),f=y("sui-item-meta"),d=y("sui-item-description"),h=y("sui-item-extra"),v=y("sui-item-content"),_=y("sui-item"),w=y("sui-item-group"),A=y("doc-example"),$=y("sui-image"),b=y("sui-icon"),C=y("sui-label"),x=y("sui-button"),B=y("sui-segment"),E=y("sui-container");return L(),ge("div",null,[t(m,{title:"Item",sub:"An item view presents large collections of site content for display"}),t(E,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(A,{title:"Items",description:"A group of items",code:e.itemsCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[UT]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Header")]),_:1}),t(f,null,{default:i(()=>[YT]),_:1}),t(d,null,{default:i(()=>[JT]),_:1}),t(h,null,{default:i(()=>[l(" Additional Details ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[WT]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Header")]),_:1}),t(f,null,{default:i(()=>[KT]),_:1}),t(d,null,{default:i(()=>[XT]),_:1}),t(h,null,{default:i(()=>[l(" Additional Details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(A,{title:"Image",description:"An item can contain an image",code:e.imageCode},{default:i(()=>[t(w,{divided:""},{default:i(()=>[t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[QT]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[ZT]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[e2]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Content",description:"An item can contain content",code:e.contentCode},{default:i(()=>[t(w,{divided:""},{default:i(()=>[t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[t2]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[l(" Content A ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[i2]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[l(" Content B ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[a2]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[l(" Content C ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Header",description:"An item can contain a header",code:e.headerCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[l2]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[l("12 Years a Slave")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Metadata",description:"An item can contain content metadata",code:e.metadataCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t($,{size:"small",src:ae}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Arrowhead Valley Camp")]),_:1}),t(f,null,{default:i(()=>[n2,o2]),_:1}),t(d,null,{default:i(()=>[s2]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t($,{size:"small",src:ae}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Buck's Homebrew Stayaway")]),_:1}),t(f,null,{default:i(()=>[r2,u2]),_:1}),t(d,null,{default:i(()=>[c2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Description",description:"An item can contain a description with a single or multiple paragraphs",code:e.descriptionCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t($,{size:"small",src:ae}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(d,null,{default:i(()=>[d2,m2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Extra Content",description:"An item can contain extra content meant to be formatted separately from the main content",code:e.extraContentCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(d,null,{default:i(()=>[p2]),_:1}),t(h,null,{default:i(()=>[t(b,{name:"check",color:"green"}),l(" 121 Votes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(A,{title:"Divided",description:"Items can be divided to better distinguish between grouped content",code:e.dividedCode},{default:i(()=>[t(w,{divided:""},{default:i(()=>[t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[f2]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("12 Years a Slave")]),_:1}),t(f,null,{default:i(()=>[g2]),_:1}),t(d,null,{default:i(()=>[h2]),_:1}),t(h,null,{default:i(()=>[t(C,null,{default:i(()=>[l("IMAX")]),_:1}),t(C,null,{default:i(()=>[t(b,{name:"globe"}),l(" Additional Languages ")]),_:1})]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[_2]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("My Neighbor Totoro")]),_:1}),t(f,null,{default:i(()=>[b2]),_:1}),t(d,null,{default:i(()=>[v2]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right",color:"primary"},{default:i(()=>[l(" Buy tickets "),t(b,{name:"right chevron"})]),_:1}),t(C,null,{default:i(()=>[l("Limited")]),_:1})]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[y2]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Watchmen")]),_:1}),t(f,null,{default:i(()=>[S2]),_:1}),t(d,null,{default:i(()=>[w2]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right",color:"primary"},{default:i(()=>[l(" Buy tickets "),t(b,{name:"right chevron"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Relaxed",description:"A group of items can relax its padding to provide more negative space",code:e.relaxedCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t($,{size:"tiny",src:ae}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("12 Years a Slave")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t($,{size:"tiny",src:ae}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("My Neighbor Totoro")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t($,{size:"tiny",src:ae}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Watchmen")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Vertical Alignment",description:"Content can specify its vertical alignment",code:e.verticalAlignCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t($,{size:"small",src:ae}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Top Aligned")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t($,{size:"small",src:ae}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[l("Middle Aligned")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t($,{size:"small",src:ae}),t(v,{verticalAlign:"bottom"},{default:i(()=>[t(u,null,{default:i(()=>[l("Bottom Aligned")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Floated Content",description:"Any content element can be floated left or right",code:e.floatedContentCode},{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[t($,{size:"small",src:ae}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[l("Content A")]),_:1}),t(d,null,{default:i(()=>[C2]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right"},{default:i(()=>[l("Action")]),_:1})]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t($,{size:"small",src:ae}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[l("Content B")]),_:1}),t(d,null,{default:i(()=>[A2]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right"},{default:i(()=>[l("Action")]),_:1})]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t($,{size:"small",src:ae}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[l("Content C")]),_:1}),t(d,null,{default:i(()=>[k2]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right"},{default:i(()=>[l("Action")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Inverted",description:"An item can be inverted to appear on a dark background",code:e.invertedCode},{default:i(()=>[t(B,{inverted:""},{default:i(()=>[t(w,{inverted:""},{default:i(()=>[t(_,null,{default:i(()=>[t($,{size:"small",src:ae}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Arrowhead Valley Camp")]),_:1}),t(f,null,{default:i(()=>[x2,$2]),_:1}),t(d,null,{default:i(()=>[B2]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t($,{size:"small",src:ae}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Buck's Homebrew Stayaway")]),_:1}),t(f,null,{default:i(()=>[T2,L2]),_:1}),t(d,null,{default:i(()=>[E2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const I2=we(qT,[["render",D2]]),R2=D({name:"StatisticDoc",components:{DocPageHeader:Ye,DocExample:Pe},setup(){return{statisticCode:'<sui-statistic value="5,550" label="Downloads" />',groupCode:`<sui-statistic-group>
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
<sui-statistic size="huge" value="2,204" label="Views" />`}}}),z2=S("br",null,null,-1),P2=S("br",null,null,-1),F2=S("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),M2=S("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),V2=S("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),H2=S("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1);function N2(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-statistic"),u=y("doc-example"),f=y("sui-statistic-group"),d=y("sui-statistic-value"),h=y("sui-statistic-label"),v=y("sui-icon"),_=y("sui-image"),w=y("sui-segment"),A=y("sui-container");return L(),ge("div",null,[t(m,{title:"Statistic",sub:"A statistic emphasizes the current value of an attribute"}),t(A,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"Statistic",description:"A statistic can display a value with a label above or below it",code:e.statisticCode},{default:i(()=>[t(s,{value:"5,550",label:"Downloads"})]),_:1},8,["code"]),t(u,{title:"Statistic Group",description:"A group of statistics",code:e.groupCode},{default:i(()=>[t(f,null,{default:i(()=>[t(s,{value:"22",label:"Faves"}),t(s,{value:"31,200",label:"Views"}),t(s,{value:"22",label:"Members"})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(u,{title:"Value",description:"A statistic can contain a numeric, icon, image, or text value",code:e.valueCode},{default:i(()=>[t(f,null,{default:i(()=>[t(s,{value:"22",label:"Faves"}),t(s,null,{default:i(()=>[t(d,{text:""},{default:i(()=>[l(" Three"),z2,l(" Thousand ")]),_:1}),t(h,null,{default:i(()=>[l("Signups")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(d,null,{default:i(()=>[t(v,{name:"plane"}),l(" 5 ")]),_:1}),t(h,null,{default:i(()=>[l("Flights")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(d,null,{default:i(()=>[t(_,{circular:"",inline:"",src:zo}),l(" 42 ")]),_:1}),t(h,null,{default:i(()=>[l("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(u,{title:"Label",description:"A statistic can contain a label to help provide context for the presented value",code:e.labelCode},{default:i(()=>[t(s,{value:"2,204",label:"Views"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(u,{title:"Horizontal Statistic",description:"A statistic can present its measurement horizontally",code:e.horizontalCode},{default:i(()=>[t(s,{horizontal:"",value:"2,204",label:"Views"})]),_:1},8,["code"]),t(u,{title:"Colored",description:"A statistic can be formatted to be different colors",code:e.coloredCode},{default:i(()=>[t(f,null,{default:i(()=>[t(s,{color:"red",value:"27",label:"Red"}),t(s,{color:"orange",value:"8",label:"Orange"}),t(s,{color:"yellow",value:"28",label:"Yellow"}),t(s,{color:"olive",value:"7",label:"Olive"}),t(s,{color:"green",value:"14",label:"Green"}),t(s,{color:"teal",value:"82",label:"Teal"}),t(s,{color:"blue",value:"1",label:"Blue"}),t(s,{color:"violet",value:"22",label:"Violet"}),t(s,{color:"purple",value:"23",label:"Purple"}),t(s,{color:"pink",value:"15",label:"Pink"}),t(s,{color:"brown",value:"36",label:"Brown"}),t(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),t(u,{title:"Inverted",description:"A statistic can be formatted to fit on a dark background",code:e.invertedCode},{default:i(()=>[t(w,{inverted:""},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(s,{color:"red",value:"27",label:"Red"}),t(s,{color:"orange",value:"8",label:"Orange"}),t(s,{color:"yellow",value:"28",label:"Yellow"}),t(s,{color:"olive",value:"7",label:"Olive"}),t(s,{color:"green",value:"14",label:"Green"}),t(s,{color:"teal",value:"82",label:"Teal"}),t(s,{color:"blue",value:"1",label:"Blue"}),t(s,{color:"violet",value:"22",label:"Violet"}),t(s,{color:"purple",value:"23",label:"Purple"}),t(s,{color:"pink",value:"15",label:"Pink"}),t(s,{color:"brown",value:"36",label:"Brown"}),t(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1})]),_:1},8,["code"]),t(u,{title:"Stackable",description:"A statistic can automatically stack rows to a single columns on mobile devices",code:e.stackableCode},{default:i(()=>[t(f,{stackable:""},{default:i(()=>[t(s,{color:"red",value:"27",label:"Red"}),t(s,{color:"orange",value:"8",label:"Orange"}),t(s,{color:"yellow",value:"28",label:"Yellow"}),t(s,{color:"olive",value:"7",label:"Olive"}),t(s,{color:"green",value:"14",label:"Green"}),t(s,{color:"teal",value:"82",label:"Teal"}),t(s,{color:"blue",value:"1",label:"Blue"}),t(s,{color:"violet",value:"22",label:"Violet"}),t(s,{color:"purple",value:"23",label:"Purple"}),t(s,{color:"pink",value:"15",label:"Pink"}),t(s,{color:"brown",value:"36",label:"Brown"}),t(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),t(u,{title:"Evenly Divided",description:"A statistic group can have its items divided evenly",code:e.evenlyDividedCode},{default:i(()=>[t(f,{widths:4},{default:i(()=>[t(s,{value:"22",label:"Faves"}),t(s,null,{default:i(()=>[t(d,{text:""},{default:i(()=>[l(" Three"),P2,l(" Thousand ")]),_:1}),t(h,null,{default:i(()=>[l("Signups")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(d,null,{default:i(()=>[t(v,{name:"plane"}),l(" 5 ")]),_:1}),t(h,null,{default:i(()=>[l("Flights")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(d,null,{default:i(()=>[t(_,{circular:"",inline:"",src:zo}),l(" 42 ")]),_:1}),t(h,null,{default:i(()=>[l("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(u,{title:"Floated",description:"An statistic can sit to the left or right of other content",code:e.floatedCode},{default:i(()=>[t(w,null,{default:i(()=>[t(s,{floated:"right",value:"2,204",label:"Views"}),F2,M2,t(s,{floated:"left",value:"2,204",label:"Views"}),V2,H2]),_:1})]),_:1},8,["code"]),t(u,{title:"Size",description:"A statistic can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{size:"mini",value:"2,204",label:"Views"}),t(s,{size:"tiny",value:"2,204",label:"Views"}),t(s,{size:"small",value:"2,204",label:"Views"}),t(s,{value:"2,204",label:"Views"}),t(s,{size:"large",value:"2,204",label:"Views"}),t(s,{size:"huge",value:"2,204",label:"Views"})]),_:1},8,["code"])]),_:1})])}const O2=we(R2,[["render",N2]]),j2=D({name:"AccordionDoc",components:{DocPageHeader:Ye,DocExample:Pe},setup(){return{accordionCode:`<sui-accordion>
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
</sui-segment>`}}}),G2=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),q2=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),U2=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),Y2=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),J2=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),W2=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),K2=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),X2=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),Q2=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),Z2=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),eL=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),tL=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),iL=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),aL=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),lL=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),nL=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),oL=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),sL=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),rL=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),uL=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1);function cL(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-accordion-tab"),u=y("sui-accordion"),f=y("doc-example"),d=y("sui-segment"),h=y("sui-container");return L(),ge("div",null,[t(m,{title:"Accordion",sub:"An accordion allows users to toggle the display of sections of content"}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(f,{title:"Accordion",description:"A standard accordion",code:e.accordionCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[G2]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[q2]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[U2,Y2]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Styled",description:"A styled accordion adds basic formatting",code:e.styledCode},{default:i(()=>[t(u,{styled:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[J2]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[W2]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[K2,X2]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(f,{title:"Fluid",description:"An accordion can take up the width of its container",code:e.fluidCode},{default:i(()=>[t(u,{fluid:"",styled:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[Q2]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[Z2]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[eL,tL]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Inverted",description:"An accordion can be formatted to appear on dark backgrounds",code:e.invertedCode},{default:i(()=>[t(d,{inverted:""},{default:i(()=>[t(u,{inverted:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[iL]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[aL]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[lL,nL]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Usage")]),_:1}),t(f,{title:"Multiple",description:"An accordion can have multiple panels open at the same time",code:e.multipleCode},{default:i(()=>[t(u,{multiple:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[oL]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[sL]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[rL,uL]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const dL=we(j2,[["render",cL]]),mL=D({name:"CalendarDoc",components:{DocPageHeader:Ye,DocExample:Pe},setup(){return{calendar1:q(null),calendarCode:'<sui-calendar v-model="calendar1" placeholder="Date/Time" />'}}});function pL(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-calendar"),u=y("doc-example"),f=y("sui-container");return L(),ge("div",null,[t(m,{title:"Calendar",sub:"A calendar allows users to select any date or time"}),t(f,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"Calendar",description:"A standard calendar",code:e.calendarCode},{default:i(()=>[t(s,{modelValue:e.calendar1,"onUpdate:modelValue":a[0]||(a[0]=d=>e.calendar1=d),placeholder:"Date/Time"},null,8,["modelValue"])]),_:1},8,["code"])]),_:1})])}const fL=we(mL,[["render",pL]]),gL=D({name:"PropertyListTable",props:{properties:Array}});function hL(e,a,n,o,r,c){const m=y("sui-table-header-cell"),p=y("sui-table-row"),s=y("sui-table-header"),u=y("sui-table-cell"),f=y("sui-table-body"),d=y("sui-table");return L(),R(d,{celled:""},{default:i(()=>[t(s,null,{default:i(()=>[t(p,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Name")]),_:1}),t(m,null,{default:i(()=>[l("Type")]),_:1}),t(m,null,{default:i(()=>[l("Default")]),_:1}),t(m,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(f,null,{default:i(()=>[(L(!0),ge(Ce,null,tt(e.properties,h=>(L(),R(p,{key:h.name},{default:i(()=>[t(u,null,{default:i(()=>[l(ke(h.name),1)]),_:2},1024),t(u,null,{default:i(()=>[l(ke(h.type),1)]),_:2},1024),t(u,null,{default:i(()=>[l(ke(h.default),1)]),_:2},1024),t(u,null,{default:i(()=>[l(ke(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const Cn=we(gL,[["render",hL]]),_L=D({name:"CheckboxDoc",components:{DocPageHeader:Ye,DocExample:Pe,PropertyListTable:Cn},setup(){const e=q(!1),a='<sui-checkbox label="Make my profile visible" v-model="checked" />',n=q([]),o=`<sui-checkbox label="Apple" value="Apple" v-model="selected"  />
<sui-checkbox label="Banana" value="Banana" v-model="selected"  />
<sui-checkbox label="Chocolate" value="Chocolate" v-model="selected"  />`,r=q(!1),c='<sui-checkbox toggle v-model="toggle" />',m=q(!1);return{checked:e,checkboxCode:a,selected:n,multipleCode:o,toggle:r,toggleCode:c,slider:m,sliderCode:'<sui-checkbox slider v-model="slider" />',properties:[{name:"label",type:"string",default:"null",description:"Label of the checkbox."},{name:"modelValue",type:"any",default:"null",description:"Value binding of the checkbox."},{name:"value",type:"any",default:"null",description:"Value of the checkbox."}],events:[{name:"change",description:"Callback to invoke when checkbox value is changed."},{name:"click",description:"Callback to invoke when checkbox is clicked."}]}}}),bL={class:"ui form"},vL={class:"grouped fields"},yL={class:"field"},SL={class:"field"},wL={class:"field"};function CL(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-checkbox"),u=y("doc-example"),f=y("property-list-table"),d=y("sui-table-header-cell"),h=y("sui-table-row"),v=y("sui-table-header"),_=y("sui-table-cell"),w=y("sui-table-body"),A=y("sui-table"),$=y("sui-container");return L(),ge("div",null,[t(m,{title:"Checkbox",sub:"A checkbox allows a user to select a value from a small set of options, often binary"}),t($,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"Checkbox",description:"A standard checkbox",code:e.checkboxCode},{default:i(()=>[t(s,{label:"Make my profile visible",modelValue:e.checked,"onUpdate:modelValue":a[0]||(a[0]=b=>e.checked=b)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Multiple",description:"Multiple mode is enabled by default, v-model property refers to an array to bind the selected values",code:e.multipleCode},{default:i(()=>[S("div",bL,[S("div",vL,[S("div",yL,[t(s,{label:"Apple",value:"Apple",modelValue:e.selected,"onUpdate:modelValue":a[1]||(a[1]=b=>e.selected=b)},null,8,["modelValue"])]),S("div",SL,[t(s,{label:"Banana",value:"Banana",modelValue:e.selected,"onUpdate:modelValue":a[2]||(a[2]=b=>e.selected=b)},null,8,["modelValue"])]),S("div",wL,[t(s,{label:"Chocolate",value:"Chocolate",modelValue:e.selected,"onUpdate:modelValue":a[3]||(a[3]=b=>e.selected=b)},null,8,["modelValue"])])])]),l(" selected : "+ke(e.selected),1)]),_:1},8,["code"]),t(u,{title:"Toggle",description:"A checkbox can toggle",code:e.toggleCode},{default:i(()=>[t(s,{toggle:"",modelValue:e.toggle,"onUpdate:modelValue":a[4]||(a[4]=b=>e.toggle=b)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Slider",description:"A checkbox can look like a slider",code:e.sliderCode},{default:i(()=>[t(s,{slider:"",modelValue:e.slider,"onUpdate:modelValue":a[5]||(a[5]=b=>e.slider=b)},null,8,["modelValue"])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Properties")]),_:1}),t(f,{properties:e.properties},null,8,["properties"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Events")]),_:1}),t(A,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Name")]),_:1}),t(d,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(w,null,{default:i(()=>[(L(!0),ge(Ce,null,tt(e.events,b=>(L(),R(h,{key:b.name},{default:i(()=>[t(_,null,{default:i(()=>[l(ke(b.name),1)]),_:2},1024),t(_,null,{default:i(()=>[l(ke(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const AL=we(_L,[["render",CL]]),kL=D({name:"DimmerDoc",components:{DocPageHeader:Ye,DocExample:Pe},setup(){const e=`<sui-dimmer-dimmable>
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
</sui-dimmer-dimmable>`,n=q(!1);return{dimmerCode:e,contentDimmerCode:a,active:n,pageDimmerCode:`<div>
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
</div>`}}});function xL(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-image"),u=y("sui-image-group"),f=y("sui-dimmer"),d=y("sui-dimmer-dimmable"),h=y("doc-example"),v=y("sui-icon"),_=y("sui-button"),w=y("sui-header-subheader"),A=y("sui-container");return L(),ge("div",null,[t(m,{title:"Dimmer",sub:"A dimmer hides distractions to focus attention on particular content"}),t(A,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(h,{title:"Dimmer",description:"A simple dimmer displays no content",code:e.dimmerCode},{default:i(()=>[t(d,null,{default:i(()=>[t(p,{as:"h3"},{default:i(()=>[l("Overlayable Section")]),_:1}),t(u,{size:"small"},{default:i(()=>[t(s,{src:ae}),t(s,{src:ae}),t(s,{src:ae})]),_:1}),t(s,{size:"medium",src:Yt}),t(f,{active:""})]),_:1})]),_:1},8,["code"]),t(h,{title:"Content Dimmer",description:"A dimmer can display content",code:e.contentDimmerCode},{default:i(()=>[t(d,null,{default:i(()=>[t(p,{as:"h3"},{default:i(()=>[l("Overlayable Section")]),_:1}),t(u,{size:"small"},{default:i(()=>[t(s,{src:ae}),t(s,{src:ae}),t(s,{src:ae})]),_:1}),t(s,{size:"medium",src:Yt}),t(f,{active:""},{default:i(()=>[t(p,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(v,{name:"heart"}),l(" Dimmed Message! ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Page Dimmer",description:"A dimmer can be formatted to be fixed to the page",code:e.pageDimmerCode},{default:i(()=>[S("div",null,[t(_,{labeled:"",icon:"",onClick:a[0]||(a[0]=$=>e.active=!0)},{default:i(()=>[t(v,{name:"plus"}),l(" Show ")]),_:1}),t(f,{active:e.active,page:"",onClick:a[1]||(a[1]=$=>e.active=!1)},{default:i(()=>[t(p,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(v,{name:"heart"}),l(" Dimmed Message! "),t(w,null,{default:i(()=>[l("Dimmer sub-header")]),_:1})]),_:1})]),_:1},8,["active"])])]),_:1},8,["code"])]),_:1})])}const $L=we(kL,[["render",xL]]),BL=D({name:"DropdownDoc",components:{DocPageHeader:Ye,DocExample:Pe},setup(){const e=`<sui-dropdown text="File">
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
</sui-dropdown>`,a=q(null),n=`<sui-dropdown
  selection
  placeholder="Pet"
  v-model="selected1"
  :options="['Cat', 'Dog', 'Bird', 'Rabbit', 'Squirrel', 'Horse']"
/>`,o=q(null),r=[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"},{value:"ad",flag:"ad",text:"Andorra"},{value:"ao",flag:"ao",text:"Angola"},{value:"ai",flag:"ai",text:"Anguilla"},{value:"ag",flag:"ag",text:"Antigua"},{value:"ar",flag:"ar",text:"Argentina"},{value:"am",flag:"am",text:"Armenia"},{value:"aw",flag:"aw",text:"Aruba"},{value:"au",flag:"au",text:"Australia"},{value:"at",flag:"at",text:"Austria"},{value:"az",flag:"az",text:"Azerbaijan"},{value:"bs",flag:"bs",text:"Bahamas"},{value:"bh",flag:"bh",text:"Bahrain"},{value:"bd",flag:"bd",text:"Bangladesh"},{value:"bb",flag:"bb",text:"Barbados"},{value:"by",flag:"by",text:"Belarus"},{value:"be",flag:"be",text:"Belgium"},{value:"bz",flag:"bz",text:"Belize"},{value:"bj",flag:"bj",text:"Benin"}],c=`<sui-dropdown
  search
  selection
  fluid
  v-model="selected2"
  :options="searchSelectionOptions"
  placeholder="Select Country"
/>`,m=q(null),p=["Arabic","Chinese","Danish","Dutch","English","French","German","Greek","Hungarian","Italian","Japanese","Korean","Lithuanian","Persian","Polish","Portuguese","Russian","Spanish","Swedish","Turkish","Vietnamese"],s=`<sui-dropdown
  clearable
  selection
  v-model="selected3"
  :options="clearableSelectionOptions"
  placeholder="Select Language"
/>`,u=q(null),f=`<sui-dropdown
  selection
  multiple
  fluid
  v-model="selected4"
  placeholder="Skills"
  :options="['Angular', 'CSS', 'Ember', 'HTML', 'Javascript', 'NodeJS']"
/>`,d=q(null),h=`<sui-dropdown
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
/>`,v=q(null),_=`<sui-dropdown
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
/>`,w=q(null),A=`<sui-dropdown
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
/>`,$=q({text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}});return{dropdownCode:e,selected1:a,selectionCode:n,selected2:o,searchSelectionOptions:r,searchSelectionCode:c,selected3:m,clearableSelectionOptions:p,clearableSelectionCode:s,selected4:u,multipleCode:f,selected5:d,multipleCode2:h,selected6:v,searchDropdownCode:_,selected7:w,searchInMenuCode:A,selected8:$,inlineCode:`<span>
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
</sui-button-group>`}}});function TL(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-dropdown-item"),u=y("sui-divider"),f=y("sui-dropdown-menu"),d=y("sui-dropdown"),h=y("doc-example"),v=y("sui-button"),_=y("sui-button-group"),w=y("sui-container");return L(),ge("div",null,[t(m,{title:"Dropdown",sub:"A dropdown allows a user to select a value from a series of options"}),t(w,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(h,{title:"Dropdown",description:"A dropdown",code:e.dropdownCode},{default:i(()=>[t(d,{text:"File"},{default:i(()=>[t(f,null,{default:i(()=>[t(s,{text:"New"}),t(s,{text:"Open...",description:"ctrl + o"}),t(s,{text:"Save as...",description:"ctrl + s"}),t(s,{text:"Rename",description:"ctrl + r"}),t(s,{text:"Make a copy"}),t(s,{icon:"folder",text:"Move to folder"}),t(s,{icon:"trash",text:"Move to trash"}),t(u),t(s,{text:"Download As..."}),t(s,{text:"Publish To Web"}),t(s,{text:"E-mail Collaborators"})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Selection",description:"A dropdown can be used to select between choices in a form",code:e.selectionCode},{default:i(()=>[t(d,{selection:"",placeholder:"Pet",modelValue:e.selected1,"onUpdate:modelValue":a[0]||(a[0]=A=>e.selected1=A),options:["Cat","Dog","Bird","Rabbit","Squirrel","Horse"]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search Selection",description:"A selection dropdown can allow a user to search through a large list of choices",code:e.searchSelectionCode},{default:i(()=>[t(d,{search:"",selection:"",fluid:"",modelValue:e.selected2,"onUpdate:modelValue":a[1]||(a[1]=A=>e.selected2=A),options:e.searchSelectionOptions,placeholder:"Select Country"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(h,{title:"Clearable Selection",description:"A clearable selection dropdown can allow a user to cancel to cancel a previous selection",code:e.clearableSelectionCode},{default:i(()=>[t(d,{clearable:"",selection:"",modelValue:e.selected3,"onUpdate:modelValue":a[2]||(a[2]=A=>e.selected3=A),options:e.clearableSelectionOptions,placeholder:"Select Language"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(h,{title:"Multiple Selection",description:"A selection dropdown can allow multiple selections",code:e.multipleCode},{default:i(()=>[t(d,{selection:"",multiple:"",fluid:"",modelValue:e.selected4,"onUpdate:modelValue":a[3]||(a[3]=A=>e.selected4=A),placeholder:"Skills",options:["Angular","CSS","Ember","HTML","Javascript","NodeJS"]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{code:e.multipleCode2},{default:i(()=>[t(d,{selection:"",multiple:"",fluid:"",search:"",modelValue:e.selected5,"onUpdate:modelValue":a[4]||(a[4]=A=>e.selected5=A),placeholder:"Skills",options:[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"}]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search Dropdown",description:"A dropdown can be searchable",code:e.searchDropdownCode},{default:i(()=>[t(d,{button:"",floating:"",labeled:"",search:"",icon:"world",modelValue:e.selected6,"onUpdate:modelValue":a[5]||(a[5]=A=>e.selected6=A),options:[{text:"Arabic",value:"Arabic"},{text:"Chinese",value:"Chinese"},{text:"Danish",value:"Danish"},{text:"Dutch",value:"Dutch"},{text:"English",value:"English"},{text:"French",value:"French"},{text:"German",value:"German"},{text:"Greek",value:"Greek"},{text:"Hungarian",value:"Hungarian"},{text:"Italian",value:"Italian"},{text:"Japanese",value:"Japanese"},{text:"Korean",value:"Korean"},{text:"Lithuanian",value:"Lithuanian"},{text:"Persian",value:"Persian"},{text:"Polish",value:"Polish"},{text:"Portuguese",value:"Portuguese"},{text:"Russian",value:"Russian"},{text:"Spanish",value:"Spanish"},{text:"Swedish",value:"Swedish"},{text:"Turkish",value:"Turkish"},{text:"Vietnamese",value:"Vietnamese"}],text:"Select Language"},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search In-Menu",description:"A dropdown can include a search prompt inside its menu",code:e.searchInMenuCode},{default:i(()=>[t(d,{text:"Filter Posts",icon:"filter",floating:"",labeled:"",button:"",searchInMenu:"",modelValue:e.selected7,"onUpdate:modelValue":a[6]||(a[6]=A=>e.selected7=A),options:[{text:"Important",value:"Important",label:{color:"red",empty:!0,circular:!0}},{text:"Announcement",value:"Announcement",label:{color:"blue",empty:!0,circular:!0}},{text:"Cannot Fix",value:"Cannot Fix",label:{color:"black",empty:!0,circular:!0}},{text:"News",value:"News",label:{color:"purple",empty:!0,circular:!0}},{text:"Enhancement",value:"Enhancement",label:{color:"orange",empty:!0,circular:!0}},{text:"Change Declined",value:"Change Declined",label:{empty:!0,circular:!0}},{text:"Off Topic",value:"Off Topic",label:{color:"yellow",empty:!0,circular:!0}},{text:"Interesting",value:"Interesting",label:{color:"pink",empty:!0,circular:!0}},{text:"Discussion",value:"Discussion",label:{color:"green",empty:!0,circular:!0}}]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Inline",description:"A dropdown can be formatted to appear inline in other content",code:e.inlineCode},{default:i(()=>[S("span",null,[l(" Show me posts by "),t(d,{inline:"",modelValue:e.selected8,"onUpdate:modelValue":a[7]||(a[7]=A=>e.selected8=A),options:[{text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}},{text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/images/avatar/small/elliot.jpg"}},{text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/images/avatar/small/stevie.jpg"}},{text:"Christian",value:"Christian",image:{avatar:!0,src:"/images/avatar/small/christian.jpg"}}]},null,8,["modelValue","options"])])]),_:1},8,["code"]),t(h,{title:"Pointing",description:"A dropdown can be formatted so that its menu is pointing",code:e.pointingCode},{default:i(()=>[t(d,{icon:"wrench",button:"",pointing:"top left"},{default:i(()=>[t(f,null,{default:i(()=>[t(s,{text:"New"}),t(s,{text:"Save As"}),t(s,{text:"Edit"})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Floating",description:"A dropdown menu can appear to be floating below an element",code:e.floatingCode},{default:i(()=>[t(_,{color:"teal"},{default:i(()=>[t(v,null,{default:i(()=>[l("Save")]),_:1}),t(d,{floating:"",button:"",icon:"dropdown"},{default:i(()=>[t(f,null,{default:i(()=>[t(s,{text:"Edit Post",icon:"edit"}),t(s,{text:"Remove Post",icon:"delete"}),t(s,{text:"Hide Post",icon:"hide"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const LL=we(BL,[["render",TL]]),EL=D({name:"EmbedDoc",components:{DocPageHeader:Ye,DocExample:Pe},setup(){return{youtubeCode:`<sui-embed
  id="O6Xo21L0ybE"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`,aspectRatioCode:`<sui-embed
  aspectRatio="4:3"
  id="HTZudKi36bo"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`}}});function DL(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-embed"),u=y("doc-example"),f=y("sui-container");return L(),ge("div",null,[t(m,{title:"Embed",sub:"An embed displays content from other websites like YouTube videos or Google Maps"}),t(f,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"YouTube",description:"An embed can be used to display YouTube Content",code:e.youtubeCode},{default:i(()=>[t(s,{id:"O6Xo21L0ybE",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(u,{title:"Aspect Ratio",description:"An embed can specify an alternative aspect ratio",code:e.aspectRatioCode},{default:i(()=>[t(s,{aspectRatio:"4:3",id:"HTZudKi36bo",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"])]),_:1})])}const IL=we(EL,[["render",DL]]),RL="/vue-fomantic-ui/images/avatar/large/rachel.png",zL=D({name:"ModalDoc",components:{DocPageHeader:Ye,DocExample:Pe},setup(){const e=`<div>
  <sui-button @click="modal1 = true">Show Modal</sui-button>
  <sui-modal v-model="modal1">
    <sui-modal-header>Select a Photo</sui-modal-header>
    <sui-modal-content image>
      <sui-image
        wrapped
        size="medium"
        src="/images/avatar/large/rachel.png"
      />
      <sui-modal-description>
        <sui-header>Default Profile Image</sui-header>
        <p>
          We've found the following gravatar image associated with your e-mail
          address.
        </p>
        <p>Is it okay to use this photo?</p>
      </sui-modal-description>
    </sui-modal-content>
    <sui-modal-actions>
      <sui-button positive @click="modal1 = false">OK</sui-button>
    </sui-modal-actions>
  </sui-modal>
</div>`,a=q(!1),n=q(!1);return{modalCode:e,modal1:a,basicModal:n,basicCode:`<div>
  <sui-button @click="basicModal = true">Basic Modal</sui-button>
  <sui-modal basic v-model="basicModal">
    <sui-modal-header icon>
      <sui-icon name="archive" />
      Archive Old Messages
    </sui-modal-header>
    <sui-modal-content>
      <p>
        Your inbox is getting full, would you like us to enable automatic
        archiving of old messages?
      </p>
    </sui-modal-content>
    <sui-modal-actions>
      <sui-button basic color="red" inverted @click="basicModal = false">
        <sui-icon name="remove" /> No
      </sui-button>
      <sui-button basic color="green">
        <sui-icon name="checkmark" /> Yes
      </sui-button>
    </sui-modal-actions>
  </sui-modal>
</div>`}}}),PL=S("p",null," We've found the following gravatar image associated with your e-mail address. ",-1),FL=S("p",null,"Is it okay to use this photo?",-1),ML=S("p",null," Your inbox is getting full, would you like us to enable automatic archiving of old messages? ",-1);function VL(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-button"),u=y("sui-modal-header"),f=y("sui-image"),d=y("sui-modal-description"),h=y("sui-modal-content"),v=y("sui-modal-actions"),_=y("sui-modal"),w=y("doc-example"),A=y("sui-icon"),$=y("sui-container");return L(),ge("div",null,[t(m,{title:"Modal",sub:"A modal displays content that temporarily blocks interactions with the main view of a site"}),t($,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(w,{title:"Modal",description:"A standard modal",code:e.modalCode},{default:i(()=>[S("div",null,[t(s,{onClick:a[0]||(a[0]=b=>e.modal1=!0)},{default:i(()=>[l("Show Modal")]),_:1}),t(_,{modelValue:e.modal1,"onUpdate:modelValue":a[2]||(a[2]=b=>e.modal1=b)},{default:i(()=>[t(u,null,{default:i(()=>[l("Select a Photo")]),_:1}),t(h,{image:""},{default:i(()=>[t(f,{wrapped:"",size:"medium",src:RL}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[l("Default Profile Image")]),_:1}),PL,FL]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(s,{positive:"",onClick:a[1]||(a[1]=b=>e.modal1=!1)},{default:i(()=>[l("OK")]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),t(w,{title:"Basic",description:"A modal can reduce its complexity",code:e.basicCode},{default:i(()=>[S("div",null,[t(s,{onClick:a[3]||(a[3]=b=>e.basicModal=!0)},{default:i(()=>[l("Basic Modal")]),_:1}),t(_,{basic:"",modelValue:e.basicModal,"onUpdate:modelValue":a[5]||(a[5]=b=>e.basicModal=b)},{default:i(()=>[t(u,{icon:""},{default:i(()=>[t(A,{name:"archive"}),l(" Archive Old Messages ")]),_:1}),t(h,null,{default:i(()=>[ML]),_:1}),t(v,null,{default:i(()=>[t(s,{basic:"",color:"red",inverted:"",onClick:a[4]||(a[4]=b=>e.basicModal=!1)},{default:i(()=>[t(A,{name:"remove"}),l(" No ")]),_:1}),t(s,{basic:"",color:"green"},{default:i(()=>[t(A,{name:"checkmark"}),l(" Yes ")]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["code"])]),_:1})])}const HL=we(zL,[["render",VL]]),NL="/vue-fomantic-ui/images/movies/totoro-horizontal.jpg",OL=D({name:"PopupDoc",components:{DocPageHeader:Ye,DocExample:Pe},setup(){const e=q(null),a=`<sui-button icon ref="trigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup :trigger="trigger">
  Add users to your feed
</sui-popup>`,n=q(null),o=q(null),r=q(null),c=`<sui-image avatar src="/images/avatar/small/elliot.jpg" ref="titledTrigger1" />
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
/>`,m=q(null),p=`<sui-card ref="triggerTriger">
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
</sui-popup>`,s=q(null),u=`<sui-button icon ref="basicTrigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup
  :trigger="basicTrigger"
  basic
  content="The default theme's basic popup removes the pointing arrow."
/>`,f=q(null),d=q(null),h=q(null),v=`<sui-icon name="heart" circular ref="wideTrigger1" />
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
</sui-popup>`,_=q(null),w=q(null),A=q(null),$=q(null),b=q(null),C=q(null),x=q(null),B=q(null),E=`<sui-button ref="positionTrigger1">Top Left</sui-button>
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
<sui-popup :trigger="positionTrigger8" position="left center" content="I am positioned to the left center" />`,F=q(null),M=`<sui-button ref="flowingTrigger">Show Flowing Popup</sui-button>
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
</sui-popup>`,z=q(null),j=q(null),K=q(null),U=q(null),me=q(null),Be=`<sui-icon name="heart" circular link ref="sizeTrigger1" />
<sui-icon name="heart" circular link ref="sizeTrigger2" />
<sui-icon name="heart" circular link ref="sizeTrigger3" />
<sui-icon name="heart" circular link ref="sizeTrigger4" />
<sui-icon name="heart" circular link ref="sizeTrigger5" />

<sui-popup size="mini" content="Hello. This is a mini popup" :trigger="sizeTrigger1" />
<sui-popup size="tiny" content="Hello. This is a tiny popup" :trigger="sizeTrigger2" />
<sui-popup size="small" content="Hello. This is a small popup" :trigger="sizeTrigger3" />
<sui-popup size="large" content="Hello. This is a large popup" :trigger="sizeTrigger4" />
<sui-popup size="huge" content="Hello. This is a huge popup" :trigger="sizeTrigger5" />`,G=q(null),W=q(null);return{popupTrigger:e,popupCode:a,titledTrigger1:n,titledTrigger2:o,titledTrigger3:r,titledCode:c,triggerTriger:m,triggerCode:p,basicTrigger:s,basicCode:u,wideTrigger1:f,wideTrigger2:d,wideTrigger3:h,wideCode:v,positionTrigger1:_,positionTrigger2:w,positionTrigger3:A,positionTrigger4:$,positionTrigger5:b,positionTrigger6:C,positionTrigger7:x,positionTrigger8:B,positionCode:E,flowingTrigger:F,flowingCode:M,sizeTrigger1:z,sizeTrigger2:j,sizeTrigger3:K,sizeTrigger4:U,sizeTrigger5:me,sizeCode:Be,invertedTrigger1:G,invertedTrigger2:W,invertedCode:`<sui-icon name="heart" circular ref="invertedTrigger1" />
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
/>`}}}),jL=S("p",null,[S("b",null,"2"),l(" projects, $10 a month ")],-1),GL=S("p",null,[S("b",null,"5"),l(" projects, $20 a month ")],-1),qL=S("p",null,[S("b",null,"8"),l(" projects, $25 a month ")],-1);function UL(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-icon"),u=y("sui-button"),f=y("sui-popup"),d=y("doc-example"),h=y("sui-image"),v=y("sui-card-header"),_=y("sui-card-description"),w=y("sui-card-content"),A=y("sui-card"),$=y("sui-rating"),b=y("sui-divider"),C=y("sui-grid-column"),x=y("sui-grid"),B=y("sui-container");return L(),ge("div",null,[t(m,{title:"Popup",sub:"A popup displays additional information on top of a page"}),t(B,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(d,{title:"Popup",description:"An element can specify popup content to appear",code:e.popupCode},{default:i(()=>[t(u,{icon:"",ref:"popupTrigger"},{default:i(()=>[t(s,{name:"add"})]),_:1},512),t(f,{trigger:e.popupTrigger},{default:i(()=>[l(" Add users to your feed ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(d,{title:"Titled",description:"An element can specify popup content with a title",code:e.titledCode},{default:i(()=>[t(h,{avatar:"",src:Qt,ref:"titledTrigger1"},null,512),t(h,{avatar:"",src:Po,ref:"titledTrigger2"},null,512),t(h,{avatar:"",src:wn,ref:"titledTrigger3"},null,512),t(f,{trigger:e.titledTrigger1,header:"Elliot Fu",content:"Elliot has been a member since July 2012"},null,8,["trigger"]),t(f,{trigger:e.titledTrigger2,header:"Stevie Feliciano",content:"Stevie has been a member since August 2013"},null,8,["trigger"]),t(f,{trigger:e.titledTrigger3,header:"Matt",content:"Matt has been a member since July 2014"},null,8,["trigger"])]),_:1},8,["code"]),t(d,{title:"Trigger",description:"A trigger can be complex element",code:e.triggerCode},{default:i(()=>[t(A,{ref:"triggerTriger"},{default:i(()=>[t(h,{src:NL}),t(w,null,{default:i(()=>[t(v,null,{default:i(()=>[l("My Neighbor Totoro")]),_:1}),t(_,null,{default:i(()=>[l(" Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits. ")]),_:1})]),_:1})]),_:1},512),t(f,{trigger:e.triggerTriger,header:"User Rating"},{default:i(()=>[t($,{icon:"star",defaultRating:3,maxRating:4})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(d,{title:"Basic",description:"A popup can provide more basic formatting",code:e.basicCode},{default:i(()=>[t(u,{icon:"",ref:"basicTrigger"},{default:i(()=>[t(s,{name:"add"})]),_:1},512),t(f,{trigger:e.basicTrigger,basic:"",content:"The default theme's basic popup removes the pointing arrow."},null,8,["trigger"])]),_:1},8,["code"]),t(d,{title:"Position",description:"A popup can be position around its trigger",code:e.positionCode},{default:i(()=>[t(u,{ref:"positionTrigger1"},{default:i(()=>[l("Top Left")]),_:1},512),t(u,{ref:"positionTrigger2"},{default:i(()=>[l("Top Center")]),_:1},512),t(u,{ref:"positionTrigger3"},{default:i(()=>[l("Top Right")]),_:1},512),t(b),t(u,{ref:"positionTrigger4"},{default:i(()=>[l("Bottom Left")]),_:1},512),t(u,{ref:"positionTrigger5"},{default:i(()=>[l("Bottom Center")]),_:1},512),t(u,{ref:"positionTrigger6"},{default:i(()=>[l("Bottom Right")]),_:1},512),t(b),t(u,{ref:"positionTrigger7"},{default:i(()=>[l("Right Center")]),_:1},512),t(u,{ref:"positionTrigger8"},{default:i(()=>[l("Left Center")]),_:1},512),t(f,{trigger:e.positionTrigger1,position:"top left",content:"I am positioned to the top left"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger2,position:"top center",content:"I am positioned to the top center"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger3,position:"top right",content:"I am positioned to the top right"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger4,position:"bottom left",content:"I am positioned to the bottom left"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger5,position:"bottom center",content:"I am positioned to the bottom center"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger6,position:"bottom right",content:"I am positioned to the bottom right"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger7,position:"right center",content:"I am positioned to the right center"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger8,position:"left center",content:"I am positioned to the left center"},null,8,["trigger"])]),_:1},8,["code"]),t(d,{title:"Flowing",description:"A popup can have no maximum width and continue to flow to fit its content",code:e.flowingCode},{default:i(()=>[t(u,{ref:"flowingTrigger"},{default:i(()=>[l("Show Flowing Popup")]),_:1},512),t(f,{trigger:e.flowingTrigger,flowing:""},{default:i(()=>[t(x,{centered:"",divided:"",columns:3},{default:i(()=>[t(C,{textAlign:"center"},{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[l("Basic Plan")]),_:1}),jL,t(u,null,{default:i(()=>[l("Choose")]),_:1})]),_:1}),t(C,{textAlign:"center"},{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[l("Business Plan")]),_:1}),GL,t(u,null,{default:i(()=>[l("Choose")]),_:1})]),_:1}),t(C,{textAlign:"center"},{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[l("Premium Plan")]),_:1}),qL,t(u,null,{default:i(()=>[l("Choose")]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(d,{title:"Size",description:"A popup can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger1"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger2"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger3"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger4"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger5"},null,512),t(f,{size:"mini",content:"Hello. This is a mini popup",trigger:e.sizeTrigger1},null,8,["trigger"]),t(f,{size:"tiny",content:"Hello. This is a tiny popup",trigger:e.sizeTrigger2},null,8,["trigger"]),t(f,{size:"small",content:"Hello. This is a small popup",trigger:e.sizeTrigger3},null,8,["trigger"]),t(f,{size:"large",content:"Hello. This is a large popup",trigger:e.sizeTrigger4},null,8,["trigger"]),t(f,{size:"huge",content:"Hello. This is a huge popup",trigger:e.sizeTrigger5},null,8,["trigger"])]),_:1},8,["code"]),t(d,{title:"Wide",description:"A popup can be extra wide to allow for longer content",code:e.wideCode},{default:i(()=>[t(s,{name:"heart",circular:"",ref:"wideTrigger1"},null,512),t(s,{name:"heart",circular:"",ref:"wideTrigger2"},null,512),t(s,{name:"heart",circular:"",ref:"wideTrigger3"},null,512),t(f,{trigger:e.wideTrigger1},{default:i(()=>[l(" Hello. This is a regular pop-up which does not allow for lots of content. You cannot fit a lot of words here as the paragraphs will be pretty narrow. ")]),_:1},8,["trigger"]),t(f,{trigger:e.wideTrigger2,wide:""},{default:i(()=>[l(" Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"]),t(f,{trigger:e.wideTrigger3,wide:"very"},{default:i(()=>[l(" Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(d,{title:"Inverted",description:"A popup can have its colors inverted",code:e.invertedCode},{default:i(()=>[t(s,{name:"heart",circular:"",ref:"invertedTrigger1"},null,512),t(u,{icon:"",ref:"invertedTrigger2"},{default:i(()=>[t(s,{name:"add"})]),_:1},512),t(f,{trigger:e.invertedTrigger1,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"]),t(f,{trigger:e.invertedTrigger2,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"])]),_:1},8,["code"])]),_:1})])}const YL=we(OL,[["render",UL]]),JL=D({name:"ProgressDoc",components:{DocPageHeader:Ye,DocExample:Pe},setup(){return{standardCode:'<sui-progress :percent="42" label="Uploading Files" progress />',indicatingCode:'<sui-progress :percent="30" label="30% Founded" indicating active />',barCode:'<sui-progress :percent="33" />',progressCode:'<sui-progress :percent="14" progress />',centeredCode:'<sui-progress :percent="68" progress="centered" />',labelCode:'<sui-progress :percent="37" label="Uploading Files" progress />',activeCode:'<sui-progress :percent="33" label="Uploading Files" progress active />',successCode:'<sui-progress :percent="100" label="Everything worked, your file is all ready." progress success />',warningCode:`<sui-progress :percent="100" label="Your file didn't meet the minimum resolution requirements." progress warning />`,errorCode:'<sui-progress :percent="100" label="There was an error." progress error />',disabledCode:'<sui-progress :percent="25" disabled />',invertedCode:`<sui-segment inverted>
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
<sui-progress :percent="73" color="black" />`}}});function WL(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-progress"),u=y("doc-example"),f=y("sui-segment"),d=y("sui-container");return L(),ge("div",null,[t(m,{title:"Progress",sub:"A progress bar shows the progression of a task"}),t(d,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"Standard",description:"A standard progress bar",code:e.standardCode},{default:i(()=>[t(s,{percent:42,label:"Uploading Files",progress:""})]),_:1},8,["code"]),t(u,{title:"Indicating",description:"An indicating progress bar visually indicates the current level of progress of a task",code:e.indicatingCode},{default:i(()=>[t(s,{percent:30,label:"30% Founded",indicating:"",active:""})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(u,{title:"Bar",description:"A progress element can contain a bar visually indicating progress",code:e.barCode},{default:i(()=>[t(s,{percent:33})]),_:1},8,["code"]),t(u,{title:"Progress",description:"A progress bar can contain a text value indicating current progress",code:e.progressCode},{default:i(()=>[t(s,{percent:14,progress:""})]),_:1},8,["code"]),t(u,{title:"Centered Progress Text",description:"The text inside a progress can be centered",code:e.centeredCode},{default:i(()=>[t(s,{percent:68,progress:"centered"})]),_:1},8,["code"]),t(u,{title:"Label",description:"A progress element can contain a label",code:e.labelCode},{default:i(()=>[t(s,{percent:37,label:"Uploading Files",progress:""})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(u,{title:"Active",description:"A progress bar can show activity",code:e.activeCode},{default:i(()=>[t(s,{percent:33,label:"Uploading Files",progress:"",active:""})]),_:1},8,["code"]),t(u,{title:"Success",description:"A progress bar can show a success state",code:e.successCode},{default:i(()=>[t(s,{percent:100,label:"Everything worked, your file is all ready.",progress:"",success:""})]),_:1},8,["code"]),t(u,{title:"Warning",description:"A progress bar can show a warning state",code:e.warningCode},{default:i(()=>[t(s,{percent:100,label:"Your file didn't meet the minimum resolution requirements.",progress:"",warning:""})]),_:1},8,["code"]),t(u,{title:"Error",description:"A progress bar can show an error state",code:e.errorCode},{default:i(()=>[t(s,{percent:100,label:"There was an error.",progress:"",error:""})]),_:1},8,["code"]),t(u,{title:"Disabled",description:"A progress bar can be disabled",code:e.disabledCode},{default:i(()=>[t(s,{percent:25,disabled:""})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(u,{title:"Inverted",description:"A progress bar can have its colors inverted",code:e.invertedCode},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(s,{inverted:"",percent:41,label:"Uploading Files",progress:""}),t(s,{inverted:"",percent:100,label:"Success",success:"",progress:""}),t(s,{inverted:"",percent:100,label:"Warning",warning:"",progress:""}),t(s,{inverted:"",percent:100,label:"Error",error:"",progress:""})]),_:1})]),_:1},8,["code"]),t(u,{title:"Attached",description:"A progress bar can show progress of an element",code:e.attachedCode},{default:i(()=>[t(f,null,{default:i(()=>[t(s,{percent:47,attached:"top"}),l(" La la la la "),t(s,{percent:26,attached:"bottom"})]),_:1})]),_:1},8,["code"]),t(u,{title:"Size",description:"A progress bar can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{percent:88,size:"tiny",label:"tiny"}),t(s,{percent:100,size:"small",label:"small",success:""}),t(s,{percent:83,label:"standard"}),t(s,{percent:73,size:"large",label:"large"}),t(s,{percent:94,size:"big",label:"big"})]),_:1},8,["code"]),t(u,{title:"Color",description:"A progress bar can have different colors",code:e.colorCode},{default:i(()=>[t(s,{percent:32,color:"red"}),t(s,{percent:53,color:"orange"}),t(s,{percent:13,color:"yellow"}),t(s,{percent:37,color:"olive"}),t(s,{percent:83,color:"green"}),t(s,{percent:24,color:"teal"}),t(s,{percent:88,color:"blue"}),t(s,{percent:41,color:"violet"}),t(s,{percent:47,color:"purple"}),t(s,{percent:30,color:"pink"}),t(s,{percent:68,color:"brown"}),t(s,{percent:35,color:"grey"}),t(s,{percent:73,color:"black"})]),_:1},8,["code"])]),_:1})])}const KL=we(JL,[["render",WL]]),XL=D({name:"RatingDoc",components:{DocPageHeader:Ye,DocExample:Pe,PropertyListTable:Cn},setup(){return{ratingCode:'<sui-rating v-model="value" />',iconCode:`<sui-rating :defaultRating="2" :maxRating="4" color="yellow" />
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
<sui-rating size="massive" :defaultRating="3" :maxRating="4" color="yellow" />`,properties:[{name:"color",type:"string",default:"",description:"A rating can have different colors"},{name:"defaultRating",type:"number",default:0,description:"The initial value of rating."},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"icon",type:"string",default:"star",description:"A rating can use a set of specified icons."},{name:"maxRating",type:"number",default:1,description:"The total number of icons."},{name:"modelValue",type:"number",default:"null",description:"A value of rating."},{name:"size",type:"string",default:"",description:"A rating can have different sizes."}],events:[{name:"change",description:"Callback to invoke on value change."}]}}}),QL=S("br",null,null,-1),ZL=S("br",null,null,-1),eE=S("br",null,null,-1),tE=S("br",null,null,-1),iE=S("br",null,null,-1),aE=S("br",null,null,-1),lE=S("br",null,null,-1),nE=S("br",null,null,-1),oE=S("br",null,null,-1),sE=S("br",null,null,-1),rE=S("br",null,null,-1),uE=S("br",null,null,-1),cE=S("br",null,null,-1),dE=S("br",null,null,-1),mE=S("br",null,null,-1),pE=S("br",null,null,-1),fE=S("br",null,null,-1),gE=S("br",null,null,-1),hE=S("br",null,null,-1),_E=S("br",null,null,-1),bE=S("br",null,null,-1),vE=S("br",null,null,-1),yE=S("br",null,null,-1),SE=S("br",null,null,-1),wE=S("br",null,null,-1),CE=S("br",null,null,-1),AE=S("br",null,null,-1),kE=S("br",null,null,-1),xE=S("br",null,null,-1),$E=S("br",null,null,-1),BE=S("br",null,null,-1),TE=S("br",null,null,-1),LE=S("br",null,null,-1),EE=S("br",null,null,-1),DE=S("br",null,null,-1),IE=S("br",null,null,-1),RE=S("br",null,null,-1),zE=S("br",null,null,-1),PE=S("br",null,null,-1),FE=S("br",null,null,-1),ME=S("br",null,null,-1),VE=S("br",null,null,-1),HE=S("br",null,null,-1),NE=S("br",null,null,-1),OE=S("br",null,null,-1),jE=S("br",null,null,-1),GE=S("br",null,null,-1),qE=S("br",null,null,-1);function UE(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-rating"),u=y("doc-example"),f=y("property-list-table"),d=y("sui-table-header-cell"),h=y("sui-table-row"),v=y("sui-table-header"),_=y("sui-table-cell"),w=y("sui-table-body"),A=y("sui-table"),$=y("sui-container");return L(),ge("div",null,[t(m,{title:"Rating",sub:"A rating indicates user interest in content"}),t($,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"Rating",description:"A Basic rating",code:e.ratingCode},{default:i(()=>[t(s)]),_:1},8,["code"]),t(u,{title:"Icon",description:"You can use any available icon as rating indicator",code:e.iconCode},{default:i(()=>[t(s,{defaultRating:2,maxRating:4,color:"yellow"}),QL,ZL,t(s,{defaultRating:2,maxRating:4,icon:"heart",color:"red"}),eE,tE,t(s,{defaultRating:2,maxRating:4,icon:"female",color:"purple"}),iE,aE,t(s,{defaultRating:2,maxRating:4,icon:"male",color:"blue"}),lE,nE,t(s,{defaultRating:2,maxRating:4,icon:"cloud",color:"grey"}),oE,sE,t(s,{defaultRating:2,maxRating:4,icon:"cat",color:"pink"}),rE,uE,t(s,{defaultRating:2,maxRating:4,icon:"circle",color:"orange"})]),_:1},8,["code"]),t(u,{title:"Color",description:"You can specify any color of the FUI color palette",code:e.colorCode},{default:i(()=>[t(s,{defaultRating:1,maxRating:7,color:"red"}),cE,dE,t(s,{defaultRating:2,maxRating:7,color:"orange"}),mE,pE,t(s,{defaultRating:3,maxRating:7,color:"yellow"}),fE,gE,t(s,{defaultRating:4,maxRating:7,color:"olive"}),hE,_E,t(s,{defaultRating:5,maxRating:7,color:"green"}),bE,vE,t(s,{defaultRating:6,maxRating:7,color:"teal"}),yE,SE,t(s,{defaultRating:6,maxRating:7,color:"blue"}),wE,CE,t(s,{defaultRating:5,maxRating:7,color:"violet"}),AE,kE,t(s,{defaultRating:4,maxRating:7,color:"purple"}),xE,$E,t(s,{defaultRating:3,maxRating:7,color:"pink"}),BE,TE,t(s,{defaultRating:2,maxRating:7,color:"brown"}),LE,EE,t(s,{defaultRating:1,maxRating:7,color:"grey"}),DE,IE,t(s,{defaultRating:1,maxRating:7,color:"black"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(u,{title:"Disabled",description:"A rating can be started in non-interactive mode by adding a disabled class",code:e.disabledCode},{default:i(()=>[t(s,{disabled:"",defaultRating:3,maxRating:5,color:"yellow"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(u,{title:"Size",description:"A rating can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{size:"mini",defaultRating:3,maxRating:4,color:"yellow"}),RE,zE,t(s,{size:"tiny",defaultRating:3,maxRating:4,color:"yellow"}),PE,FE,t(s,{size:"small",defaultRating:3,maxRating:4,color:"yellow"}),ME,VE,t(s,{defaultRating:3,maxRating:4,color:"yellow"}),HE,NE,t(s,{size:"large",defaultRating:3,maxRating:4,color:"yellow"}),OE,jE,t(s,{size:"huge",defaultRating:3,maxRating:4,color:"yellow"}),GE,qE,t(s,{size:"massive",defaultRating:3,maxRating:4,color:"yellow"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Properties")]),_:1}),t(f,{properties:e.properties},null,8,["properties"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Events")]),_:1}),t(A,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Name")]),_:1}),t(d,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(w,null,{default:i(()=>[(L(!0),ge(Ce,null,tt(e.events,b=>(L(),R(h,{key:b.name},{default:i(()=>[t(_,null,{default:i(()=>[l(ke(b.name),1)]),_:2},1024),t(_,null,{default:i(()=>[l(ke(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const YE=we(XL,[["render",UE]]),JE=D({name:"SidebarDoc",components:{DocPageHeader:Ye,DocExample:Pe,PropertyListTable:Cn},setup(){return{visible1:q(!1),sidebarCode:`<sui-grid :columns="1">
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
</sui-grid>`,properties:[{name:"animation",type:"string",default:"overlay",description:"Specifies the animation of the sidebar."},{name:"dimmed",type:"boolean",default:"false",description:"When specified, display the dim inside pusher content."},{name:"direction",type:"string",default:"left",description:"Specifies the direction the sidebar should appear on."},{name:"visible",type:"boolean",default:"false",description:"Specifies the visibility of the sidebar."}],events:[{name:"hide",description:"Callback to invoke when sidebar hide."},{name:"show",description:"Callback to invoke when sidebar show."}]}}}),WE={class:"pusher"};function KE(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-icon"),u=y("sui-button"),f=y("sui-grid-column"),d=y("sui-menu-item"),h=y("sui-sidebar"),v=y("sui-image"),_=y("sui-segment"),w=y("sui-grid"),A=y("doc-example"),$=y("property-list-table"),b=y("sui-table-header-cell"),C=y("sui-table-row"),x=y("sui-table-header"),B=y("sui-table-cell"),E=y("sui-table-body"),F=y("sui-table"),M=y("sui-container");return L(),ge("div",null,[t(m,{title:"Sidebar",sub:"A sidebar hides additional content beside a page"}),t(M,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(A,{title:"Sidebar",description:"A sidebar",code:e.sidebarCode},{default:i(()=>[t(w,{columns:1},{default:i(()=>[t(f,null,{default:i(()=>[t(u,{onClick:a[0]||(a[0]=z=>e.visible1=!e.visible1),icon:""},{default:i(()=>[t(s,{name:"arrow right"})]),_:1})]),_:1}),t(f,null,{default:i(()=>[t(_,{class:"pushable"},{default:i(()=>[t(h,{visible:e.visible1,"onUpdate:visible":a[1]||(a[1]=z=>e.visible1=z),dimmed:"",icon:"labeled",inverted:""},{default:i(()=>[t(d,null,{default:i(()=>[t(s,{name:"home"}),l(" Home ")]),_:1}),t(d,null,{default:i(()=>[t(s,{name:"gamepad"}),l(" Games ")]),_:1}),t(d,null,{default:i(()=>[t(s,{name:"camera"}),l(" Channels ")]),_:1})]),_:1},8,["visible"]),S("div",WE,[t(_,null,{default:i(()=>[t(p,{as:"h2"},{default:i(()=>[l("Main Header")]),_:1}),t(v,{src:De})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Properties")]),_:1}),t($,{properties:e.properties},null,8,["properties"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Events")]),_:1}),t(F,{celled:""},{default:i(()=>[t(x,null,{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Name")]),_:1}),t(b,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(E,null,{default:i(()=>[(L(!0),ge(Ce,null,tt(e.events,z=>(L(),R(C,{key:z.name},{default:i(()=>[t(B,null,{default:i(()=>[l(ke(z.name),1)]),_:2},1024),t(B,null,{default:i(()=>[l(ke(z.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const XE=we(JE,[["render",KE]]),QE=D({name:"SliderDoc",components:{DocPageHeader:Ye,DocExample:Pe},setup(){const e=q(5),a='<sui-slider v-model="slider1" />',n=q(4),o='<sui-slider labeled v-model="slider2" />',r=q(6),c='<sui-slider labeled="ticked" v-model="slider3" />',m=q(0),p=`<sui-slider
  v-model="slider4"
  labeled="ticked"
  :labels='["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ/ς", "τ", "υ", "φ"]'
  :max="20"
/>`,s=q(40),u='<sui-slider v-model="slider5" labeled :step="5" :max="120" :min="20" />',f=q([]);f.value.push(20,60);const d='<sui-slider v-model="slider6" range labeled="ticked" :min="5" :max="100" :step="5" />',h=q(7),v='<sui-slider disabled v-model="slider7" />',_=q(8),w=`<sui-segment inverted>
  <sui-slider inverted v-model="slider8" />
</sui-segment>`,A=q(3),$='<sui-slider reversed v-model="slider9" />',b=q(18),C='<sui-slider vertical v-model="slider10" :max="20" />',x=q(5),B=q(5),E=q(5),F=q(5),M=q(5),z=q(5),j=q(5),K=q(5),U=q(5),me=q(5),Be=q(5),G=q(5),W=q(5),ce=`<sui-slider color="red" v-model="redSlider" />
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
</sui-segment>`,Te=q(5),Je=q(5),lt=q(5);return{slider1:e,sliderCode:a,slider2:n,labeledSliderCode:o,slider3:r,labeledTickedCode:c,slider4:m,customLabelsCode:p,slider5:s,stepCode:u,slider6:f,rangeCode:d,slider7:h,disabledCode:v,slider8:_,invertedCode:w,slider9:A,reversedCode:$,slider10:b,verticalCode:C,redSlider:x,orangeSlider:B,yellowSlider:E,oliveSlider:F,greenSlider:M,tealSlider:z,blueSlider:j,violetSlider:K,purpleSlider:U,pinkSlider:me,brownSlider:Be,greySlider:G,blackSlider:W,coloredCode:ce,invertedColoredCode:ie,smallSlider:Te,largeSlider:Je,bigSlider:lt,sizeCode:`<sui-slider size="small" color="red" v-model="smallSlider" />
<sui-slider size="large" color="yellow" v-model="largeSlider" />
<sui-slider size="big" color="olive" v-model="bigSlider" />`,properties:[{name:"color",type:"string",default:"",description:"A slider can have different colors"},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"inverted",type:"boolean",default:!1,description:"A slider can be formatted to appear on dark backgrounds."},{name:"labeled",type:"boolean|string",default:!1,description:"A slider can show its labels."},{name:"labels",type:"string[]",default:"",description:"A slider can have a custom label according to the label value."},{name:"max",type:"number",default:10,description:"Maximum boundary value."},{name:"min",type:"number",default:0,description:"Mininum boundary value."},{name:"modelValue",type:"number|number[]",default:0,description:"A value of component."},{name:"range",type:"boolean",default:!1,description:"When specified, allows two boundary values to be picked."},{name:"reversed",type:"boolean",default:!1,description:"A slider can be reversed."},{name:"size",type:"string",default:"",description:"A slider can have different sizes."},{name:"step",type:"number",default:1,description:"Step factor to increment/decrement the value."},{name:"vertical",type:"boolean",default:!1,description:"When specified, orientation of the slider becomes vertical."},{name:"verticalHeight",type:"number|string",default:200,description:"Height of the vertical slider."}],events:[{name:"change",description:"Callback to invoke on value change."},{name:"slideend",description:"Callback to invoke when slide end."}]}}});function ZE(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-slider"),u=y("doc-example"),f=y("sui-segment"),d=y("sui-table-header-cell"),h=y("sui-table-row"),v=y("sui-table-header"),_=y("sui-table-cell"),w=y("sui-table-body"),A=y("sui-table"),$=y("sui-container");return L(),ge("div",null,[t(m,{title:"Slider",sub:"A slider allows users to select values within a range"}),t($,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"Slider",description:"A standard slider",code:e.sliderCode},{default:i(()=>[t(s,{modelValue:e.slider1,"onUpdate:modelValue":a[0]||(a[0]=b=>e.slider1=b)},null,8,["modelValue"]),l(" "+ke(e.slider1),1)]),_:1},8,["code"]),t(u,{title:"Labeled Slider",description:"A slider that show its labels",code:e.labeledSliderCode},{default:i(()=>[t(s,{labeled:"",modelValue:e.slider2,"onUpdate:modelValue":a[1]||(a[1]=b=>e.slider2=b)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Labeled Ticked Slider",description:"A slider that show its labels and ticks",code:e.labeledTickedCode},{default:i(()=>[t(s,{labeled:"ticked",modelValue:e.slider3,"onUpdate:modelValue":a[2]||(a[2]=b=>e.slider3=b)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Custom Interpreted Labels",description:"You can provide a function which returns a custom label according to the label value",code:e.customLabelsCode},{default:i(()=>[t(s,{modelValue:e.slider4,"onUpdate:modelValue":a[3]||(a[3]=b=>e.slider4=b),labeled:"ticked",labels:["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ/ς","τ","υ","φ"],max:20},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Step",description:"A slider can change the default step increment",code:e.stepCode},{default:i(()=>[t(s,{modelValue:e.slider5,"onUpdate:modelValue":a[4]||(a[4]=b=>e.slider5=b),labeled:"",step:5,max:120,min:20},null,8,["modelValue"]),l(" "+ke(e.slider5),1)]),_:1},8,["code"]),t(u,{title:"Range",description:"A range slider which allow you to select a range between two values",code:e.rangeCode},{default:i(()=>[t(s,{modelValue:e.slider6,"onUpdate:modelValue":a[5]||(a[5]=b=>e.slider6=b),range:"",labeled:"ticked",min:5,max:100,step:5},null,8,["modelValue"]),l(" "+ke(e.slider6),1)]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(u,{title:"Disabled",description:"A slider can appear disabled",code:e.disabledCode},{default:i(()=>[t(s,{disabled:"",modelValue:e.slider7,"onUpdate:modelValue":a[6]||(a[6]=b=>e.slider7=b)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Inverted",description:"A slider can be inverted",code:e.invertedCode},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(s,{inverted:"",modelValue:e.slider8,"onUpdate:modelValue":a[7]||(a[7]=b=>e.slider8=b)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(u,{title:"Reversed",description:"A slider can be reversed",code:e.reversedCode},{default:i(()=>[t(s,{reversed:"",modelValue:e.slider9,"onUpdate:modelValue":a[8]||(a[8]=b=>e.slider9=b)},null,8,["modelValue"]),l(" "+ke(e.slider9),1)]),_:1},8,["code"]),t(u,{title:"Vertical",description:"A slider can be vertical",code:e.verticalCode},{default:i(()=>[t(s,{vertical:"",modelValue:e.slider10,"onUpdate:modelValue":a[9]||(a[9]=b=>e.slider10=b),max:20},null,8,["modelValue"]),l(" "+ke(e.slider10),1)]),_:1},8,["code"]),t(u,{title:"Colored",description:"A slider can be different colors",code:e.coloredCode},{default:i(()=>[t(s,{color:"red",modelValue:e.redSlider,"onUpdate:modelValue":a[10]||(a[10]=b=>e.redSlider=b)},null,8,["modelValue"]),t(s,{color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":a[11]||(a[11]=b=>e.orangeSlider=b)},null,8,["modelValue"]),t(s,{color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":a[12]||(a[12]=b=>e.yellowSlider=b)},null,8,["modelValue"]),t(s,{color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":a[13]||(a[13]=b=>e.oliveSlider=b)},null,8,["modelValue"]),t(s,{color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":a[14]||(a[14]=b=>e.greenSlider=b)},null,8,["modelValue"]),t(s,{color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":a[15]||(a[15]=b=>e.tealSlider=b)},null,8,["modelValue"]),t(s,{color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":a[16]||(a[16]=b=>e.blueSlider=b)},null,8,["modelValue"]),t(s,{color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":a[17]||(a[17]=b=>e.violetSlider=b)},null,8,["modelValue"]),t(s,{color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":a[18]||(a[18]=b=>e.purpleSlider=b)},null,8,["modelValue"]),t(s,{color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":a[19]||(a[19]=b=>e.pinkSlider=b)},null,8,["modelValue"]),t(s,{color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":a[20]||(a[20]=b=>e.brownSlider=b)},null,8,["modelValue"]),t(s,{color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":a[21]||(a[21]=b=>e.greySlider=b)},null,8,["modelValue"]),t(s,{color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":a[22]||(a[22]=b=>e.blackSlider=b)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Inverted Colored",description:"A slider can be different colors while inverted",code:e.invertedColoredCode},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(s,{inverted:"",color:"red",modelValue:e.redSlider,"onUpdate:modelValue":a[23]||(a[23]=b=>e.redSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":a[24]||(a[24]=b=>e.orangeSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":a[25]||(a[25]=b=>e.yellowSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":a[26]||(a[26]=b=>e.oliveSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":a[27]||(a[27]=b=>e.greenSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":a[28]||(a[28]=b=>e.tealSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":a[29]||(a[29]=b=>e.blueSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":a[30]||(a[30]=b=>e.violetSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":a[31]||(a[31]=b=>e.purpleSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":a[32]||(a[32]=b=>e.pinkSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":a[33]||(a[33]=b=>e.brownSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":a[34]||(a[34]=b=>e.greySlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":a[35]||(a[35]=b=>e.blackSlider=b)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(u,{title:"Size",description:"A slider can have different sizes",code:e.sizeCode},{default:i(()=>[t(s,{size:"small",color:"red",modelValue:e.smallSlider,"onUpdate:modelValue":a[36]||(a[36]=b=>e.smallSlider=b)},null,8,["modelValue"]),t(s,{size:"large",color:"yellow",modelValue:e.largeSlider,"onUpdate:modelValue":a[37]||(a[37]=b=>e.largeSlider=b)},null,8,["modelValue"]),t(s,{size:"big",color:"olive",modelValue:e.bigSlider,"onUpdate:modelValue":a[38]||(a[38]=b=>e.bigSlider=b)},null,8,["modelValue"])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Properties")]),_:1}),t(A,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Name")]),_:1}),t(d,null,{default:i(()=>[l("Type")]),_:1}),t(d,null,{default:i(()=>[l("Default")]),_:1}),t(d,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(w,null,{default:i(()=>[(L(!0),ge(Ce,null,tt(e.properties,b=>(L(),R(h,{key:b.name},{default:i(()=>[t(_,null,{default:i(()=>[l(ke(b.name),1)]),_:2},1024),t(_,null,{default:i(()=>[l(ke(b.type),1)]),_:2},1024),t(_,null,{default:i(()=>[l(ke(b.default),1)]),_:2},1024),t(_,null,{default:i(()=>[l(ke(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Events")]),_:1}),t(A,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Name")]),_:1}),t(d,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(w,null,{default:i(()=>[(L(!0),ge(Ce,null,tt(e.events,b=>(L(),R(h,{key:b.name},{default:i(()=>[t(_,null,{default:i(()=>[l(ke(b.name),1)]),_:2},1024),t(_,null,{default:i(()=>[l(ke(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const eD=we(QE,[["render",ZE]]),tD=D({name:"TabDoc",components:{DocPageHeader:Ye,DocExample:Pe,PropertyListTable:Cn},setup(){return{basicCode:`<sui-tab>
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
</sui-tab>`,tabProperties:[{name:"activeIndex",type:"string",default:0,description:"Index of the active tab."},{name:"pointing",type:"boolean",default:!1,description:""}],tabPanelProperties:[{name:"header",type:"boolean",default:"null",description:"Orientation of tab headers."}],events:[{name:"tab-change",description:"Callback to invoke when an active tab is changed."},{name:"tab-click",description:"Callback to invoke when an tab is clicked."}]}}});function iD(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-tab-panel"),u=y("sui-tab"),f=y("doc-example"),d=y("property-list-table"),h=y("sui-table-header-cell"),v=y("sui-table-row"),_=y("sui-table-header"),w=y("sui-table-cell"),A=y("sui-table-body"),$=y("sui-table"),b=y("sui-container");return L(),ge("div",null,[t(m,{title:"Tab",sub:"A tab is a hidden section of content activated by a menu"}),t(b,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Examples")]),_:1}),t(f,{title:"Basic",code:e.basicCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{header:"First"},{default:i(()=>[l("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[l("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[l("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Pointing",code:e.pointingCode},{default:i(()=>[t(u,{pointing:""},{default:i(()=>[t(s,{header:"First"},{default:i(()=>[l("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[l("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[l("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Secondary",code:e.secondaryCode},{default:i(()=>[t(u,{secondary:""},{default:i(()=>[t(s,{header:"First"},{default:i(()=>[l("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[l("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[l("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Text",code:e.textCode},{default:i(()=>[t(u,{text:""},{default:i(()=>[t(s,{header:"First"},{default:i(()=>[l("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[l("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[l("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Properties")]),_:1}),t(p,{as:"h3"},{default:i(()=>[l("Tab")]),_:1}),t(d,{properties:e.tabProperties},null,8,["properties"]),t(p,{as:"h3"},{default:i(()=>[l("TabPanel")]),_:1}),t(d,{properties:e.tabPanelProperties},null,8,["properties"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Events")]),_:1}),t($,{celled:""},{default:i(()=>[t(_,null,{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[l("Name")]),_:1}),t(h,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[(L(!0),ge(Ce,null,tt(e.events,C=>(L(),R(v,{key:C.name},{default:i(()=>[t(w,null,{default:i(()=>[l(ke(C.name),1)]),_:2},1024),t(w,null,{default:i(()=>[l(ke(C.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const aD=we(tD,[["render",iD]]),lD=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({ message: 'I am a toast, nice to meet you !' })
}
<\/script>`,nD={__name:"MinimalDoc",setup(e){const{toast:a}=ot(),n=()=>{a({message:"I am a toast, nice to meet you !"})};return(o,r)=>{const c=y("SuiButton");return L(),R(N,{label:"Minimal",code:lD},{description:i(()=>[l(" A minimal toast will just display a message. ")]),example:i(()=>[t(c,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},oD=`<template>
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
<\/script>`,sD={__name:"TitledDoc",setup(e){const{toast:a}=ot(),n=()=>{a({title:"Better ?",message:"Hey look, I have a title !"})};return(o,r)=>{const c=y("SuiButton");return L(),R(N,{label:"Titled",code:oD},{description:i(()=>[l(" You can add a title to your toast. ")]),example:i(()=>[t(c,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},rD=`<template>
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
<\/script>`,uD={__name:"ProgressBarDoc",setup(e){const{toast:a}=ot(),n=o=>{a({title:"LOOK",message:"See, how long i will last",showProgress:"bottom",showProgressColor:o})};return(o,r)=>{const c=y("SuiButton");return L(),R(N,{label:"Progress Bar",code:rD},{description:i(()=>[l(" You can attach a progress bar to your toast. ")]),example:i(()=>[t(c,{onClick:n},{default:i(()=>[l("Show")]),_:1}),t(c,{color:"red",onClick:r[0]||(r[0]=m=>n("red"))},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},cD=`<template>
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
<\/script>`,dD={__name:"ToastTypeDoc",setup(e){const{toast:a}=ot(),n=o=>{a({message:"You're using the good framework !",type:o})};return(o,r)=>{const c=y("SuiButton");return L(),R(N,{label:"Toast Type",code:cD},{description:i(()=>[l(" A toast can be used to display different types of informations. ")]),example:i(()=>[t(c,{onClick:r[0]||(r[0]=m=>n("success")),positive:""},{default:i(()=>[l("Success")]),_:1}),t(c,{onClick:r[1]||(r[1]=m=>n("error")),negative:""},{default:i(()=>[l("Error")]),_:1}),t(c,{onClick:r[2]||(r[2]=m=>n("warning")),color:"yellow"},{default:i(()=>[l("Warning")]),_:1})]),_:1})}}},mD=`<template>
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
<\/script>`,pD={__name:"PositionDoc",setup(e){const{toast:a}=ot(),n=o=>{a({position:o,message:"Look, I'm here !"})};return(o,r)=>{const c=y("SuiButton");return L(),R(N,{label:"Position",code:mD},{description:i(()=>[l(" A toast can appear at different positions on the screen. ")]),example:i(()=>[t(c,{onClick:r[0]||(r[0]=m=>n("top left"))},{default:i(()=>[l("Top Left")]),_:1}),t(c,{onClick:r[1]||(r[1]=m=>n("bottom right"))},{default:i(()=>[l("Bottom Right")]),_:1})]),_:1})}}},fD=S("br",null,null,-1),gD=`<template>
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
<\/script>`,hD={__name:"AttachedPosition",setup(e){const{toast:a}=ot(),n=o=>{a({attached:o,title:"Watch out!",message:`I am a ${o} attached toast`})};return(o,r)=>{const c=y("SuiButton");return L(),R(N,{label:"Attached Position",code:gD},{description:i(()=>[l(" A toast can have an attached position which will show the toast over the whole width of the screen."),fD,l(" Just like notifications on mobile devices. ")]),example:i(()=>[t(c,{onClick:r[0]||(r[0]=m=>n("top"))},{default:i(()=>[l("Top")]),_:1}),t(c,{onClick:r[1]||(r[1]=m=>n("bottom"))},{default:i(()=>[l("Bottom")]),_:1})]),_:1})}}},_D=`<template>
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
<\/script>`,bD={__name:"DirectionDoc",setup(e){const{toast:a}=ot(),n=()=>{a({horizontal:!0,position:"top left",title:"Watch out!",message:"Next one will open to the right"})};return(o,r)=>{const c=y("SuiButton");return L(),R(N,{label:"Direction",code:_D},{description:i(()=>[l(" Toasts can stack horizontal ")]),example:i(()=>[t(c,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},vD=`<template>
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
<\/script>`,yD={__name:"CenterAligned",setup(e){const{toast:a}=ot(),n=()=>{a({centered:!0,title:"Veronika has joined",message:"Welcome to the Fomantic-UI community!"})};return(o,r)=>{const c=y("SuiButton");return L(),R(N,{label:"Center Aligned",code:vD},{description:i(()=>[l(" The toasts content can be shown center aligned. ")]),example:i(()=>[t(c,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},SD=`<template>
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
<\/script>`,wD={__name:"DurationDoc",setup(e){const{toast:a}=ot(),n=o=>{a({displayTime:o,message:o===0?"I'll stay here until you click on me !":"You will see me for 5 seconds."})};return(o,r)=>{const c=y("SuiButton");return L(),R(N,{label:"Duration",code:SD},{description:i(()=>[l(" You can choose how long a toast should be displayed. ")]),example:i(()=>[t(c,{onClick:r[0]||(r[0]=m=>n(5e3))},{default:i(()=>[l("5 seconds")]),_:1}),t(c,{onClick:r[1]||(r[1]=m=>n(0))},{default:i(()=>[l("Stay")]),_:1})]),_:1})}}},CD=`<template>
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
<\/script>`,AD={__name:"MessageStyleDoc",setup(e){const{toast:a}=ot(),n=()=>{a({messageStyle:!0,message:"I got my style from the message class",color:"purple"})};return(o,r)=>{const c=y("SuiButton");return L(),R(N,{label:"Use Message Style",code:CD},{description:i(()=>[l(" You can use all of the styles and colors from the message component. ")]),example:i(()=>[t(c,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},kD=`<template>
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
<\/script>`,xD={__name:"IncreasingProgressBarDoc",setup(e){const{toast:a}=ot(),n=()=>{a({title:"LOOK",message:"See, how long i will last",showProgress:"top",showProgressUp:!0})};return(o,r)=>{const c=y("SuiButton");return L(),R(N,{label:"Increasing Progress Bar",code:kD},{description:i(()=>[l(" You can use the progress bar to show the progress of a task. ")]),example:i(()=>[t(c,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},$D=`<template>
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
<\/script>`,BD={__name:"ColorVariantsDoc",setup(e){const{toast:a}=ot(),n=q(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],r=()=>{a({color:o[n.value],message:"I am a colorful toast",showProgress:"bottom"}),n.value=(n.value+1)%o.length};return(c,m)=>{const p=y("SuiButton");return L(),R(N,{label:"Color Variants",code:$D},{description:i(()=>[l(" You can use all of the usual color names. ")]),example:i(()=>[t(p,{onClick:r},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},TD={__name:"InvertedColorsDoc",setup(e){const{toast:a}=ot(),n=q(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],r=()=>{a({color:o[n.value],inverted:!0,message:"I am an inverted colorful toast",showProgress:"bottom"}),n.value=(n.value+1)%o.length};return(c,m)=>{const p=y("SuiButton");return L(),R(N,{label:"Inverted Colors",code:c.code},{description:i(()=>[l(" Same as above, just add inverted to the class definition. ")]),example:i(()=>[t(p,{onClick:r},{default:i(()=>[l("Show")]),_:1})]),_:1},8,["code"])}}},LD=`<template>
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
<\/script>`,ED={__name:"ActionGeneralDoc",setup(e){const{toast:a}=ot(),n=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[J(P,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>[J(Q,{name:"check"}),"Yes"]),J(P,{color:"red",icon:!0},()=>[J(Q,{name:"ban"})]),J(P,{color:"blue",onclick:()=>a({message:"Returning false from the click handler avoids closing the toast"})},()=>"?")]})};return(o,r)=>(L(),R(N,{label:"General",code:LD},{description:i(()=>[l(" Define click actions to your toast by providing a text and/or icon, optional class and click handler. ")]),example:i(()=>[t(g(P),{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1}))}},DD=`<template>
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
<\/script>`,ID={__name:"ActionBasicDoc",setup(e){const{toast:a}=ot(),n=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[J(P,{color:"yellow",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really")],actionsProps:{basic:!0,aligned:"left"}})};return(o,r)=>(L(),R(N,{label:"Basic",code:DD},{description:i(()=>[l(" The classActions setting provides you a way to adjust the overall appearance of the action buttons. Using basic class does not lighten the actions background. left aligns the buttons to the left. ")]),example:i(()=>[t(g(P),{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1}))}},RD=`<template>
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
<\/script>`,zD={__name:"ActionAttachedDoc",setup(e){const{toast:a}=ot(),n=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[J(P,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),J(P,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"top"}})};return(o,r)=>(L(),R(N,{label:"Attached",code:RD},{description:i(()=>[l(" Using attached converts your actions into a Button group. Also add top to display the actions attached to the top of the toast. ")]),example:i(()=>[t(g(P),{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1}))}},PD=`<template>
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
<\/script>`,FD={__name:"ActionVerticalDoc",setup(e){const{toast:a}=ot(),n=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[J(P,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),J(P,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{vertical:!0}})};return(o,r)=>(L(),R(N,{label:"Vertical",code:PD},{description:i(()=>[l(" You can use vertical to display your actions to the right of the toast. ")]),example:i(()=>[t(g(P),{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1}))}},MD=S("br",null,null,-1),VD=`<template>
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
<\/script>`,HD={__name:"ActionVerticalAttachedDoc",setup(e){const{toast:a}=ot(),n=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[J(P,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),J(P,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"left",vertical:!0}})};return(o,r)=>(L(),R(N,{label:"Vertical Attached",code:VD},{description:i(()=>[l(" Vertical actions can also be displayed as button groups using vertical attached."),MD,l(" Vertical attached actions also support left. ")]),example:i(()=>[t(g(P),{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1}))}},ND={__name:"Toast",setup(e){const a=[{id:"minimal",label:"Minimal",category:"Types",component:nD},{id:"titled",label:"Titled",category:"Types",component:sD},{id:"progress-bar",label:"Progress Bar",category:"Types",component:uD},{id:"toast-type",label:"Toast Type",category:"Variations",component:dD},{id:"position",label:"Position",category:"Variations",component:pD},{id:"attached-position",label:"Attached Position",category:"Variations",component:hD},{id:"direction",label:"Direction",category:"Variations",component:bD},{id:"center-aligned",label:"Center Aligned",category:"Variations",component:yD},{id:"duration",label:"Duration",category:"Variations",component:wD},{id:"message-style",label:"Use Message Style",category:"Variations",component:AD},{id:"increasing-progress-bar",label:"Increasing Progress Bar",category:"Variations",component:xD},{id:"color-variants",label:"Color Variants",category:"Variations",component:BD},{id:"inverted-colors",label:"Inverted Colors",category:"Variations",component:TD},{id:"general",label:"General",category:"Actions",component:ED},{id:"action-basic",label:"Basic",category:"Actions",component:ID},{id:"action-attached",label:"Attached",category:"Actions",component:zD},{id:"action-vertical",label:"Vertical",category:"Actions",component:FD},{id:"action-vertical-attached",label:"Vertical Attached",category:"Actions",component:HD}];return(n,o)=>(L(),R(Gt,{title:"Toast",description:"A toast allows users to be notified of an event","component-docs":a}))}},OD=[{path:"/",component:X_,children:[{path:"/",component:pb},{path:"elements/button",component:Mw},{path:"elements/container",component:Kw},{path:"elements/divider",component:SC},{path:"elements/emoji",component:DC},{path:"elements/flag",component:FC},{path:"elements/header",component:gA},{path:"elements/icon",component:jA},{path:"elements/image",component:o0},{path:"elements/input",component:E0},{path:"elements/label",component:Hk},{path:"elements/list",component:lx},{path:"elements/loader",component:rx},{path:"elements/rail",component:mx},{path:"elements/reveal",component:_x},{path:"elements/segment",component:Ox},{path:"elements/step",component:Jx},{path:"collections/breadcrumb",component:Xx},{path:"collections/form",component:e$},{path:"collections/grid",component:l$},{path:"collections/menu",component:m$},{path:"collections/message",component:A$},{path:"collections/table",component:F$},{path:"views/advertisement",component:O$},{path:"views/card",component:CB},{path:"views/comment",component:wT},{path:"views/feed",component:GT},{path:"views/item",component:I2},{path:"views/statistic",component:O2},{path:"modules/accordion",component:dL},{path:"modules/calendar",component:fL},{path:"modules/checkbox",component:AL},{path:"modules/dimmer",component:$L},{path:"modules/dropdown",component:LL},{path:"modules/embed",component:IL},{path:"modules/modal",component:HL},{path:"modules/popup",component:YL},{path:"modules/progress",component:KL},{path:"modules/rating",component:YE},{path:"modules/sidebar",component:XE},{path:"modules/slider",component:eD},{path:"modules/tab",component:aD},{path:"modules/toast",component:ND}]}],jD=L_({history:qh("/vue-fomantic-ui/"),routes:OD});(function(e){var a="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},o={bash:n,environment:{pattern:RegExp("\\$"+a),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+a),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+a),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:o},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:o},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:o.entity}}],environment:{pattern:RegExp("\\$?"+a),alias:"constant"},variable:o.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var r=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],c=o.variable[1].inside,m=0;m<r.length;m++)c[r[m]]=e.languages.bash[r[m]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);const ks=vm($h);ks.use(jD);ks.use(mS);ks.mount("#app");

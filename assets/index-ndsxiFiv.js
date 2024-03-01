(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function en(e,a){const n=new Set(e.split(","));return a?o=>n.has(o.toLowerCase()):o=>n.has(o)}const je={},ta=[],vt=()=>{},dp=()=>!1,nl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ho=e=>e.startsWith("onUpdate:"),Qe=Object.assign,No=(e,a)=>{const n=e.indexOf(a);n>-1&&e.splice(n,1)},mp=Object.prototype.hasOwnProperty,Pe=(e,a)=>mp.call(e,a),pe=Array.isArray,ia=e=>wa(e)==="[object Map]",ji=e=>wa(e)==="[object Set]",Ds=e=>wa(e)==="[object Date]",pp=e=>wa(e)==="[object RegExp]",Se=e=>typeof e=="function",Ze=e=>typeof e=="string",yi=e=>typeof e=="symbol",qe=e=>e!==null&&typeof e=="object",Oo=e=>(qe(e)||Se(e))&&Se(e.then)&&Se(e.catch),Lc=Object.prototype.toString,wa=e=>Lc.call(e),fp=e=>wa(e).slice(8,-1),Dc=e=>wa(e)==="[object Object]",jo=e=>Ze(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Va=en(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tn=e=>{const a=Object.create(null);return n=>a[n]||(a[n]=e(n))},gp=/-(\w)/g,ht=tn(e=>e.replace(gp,(a,n)=>n?n.toUpperCase():"")),hp=/\B([A-Z])/g,$t=tn(e=>e.replace(hp,"-$1").toLowerCase()),ol=tn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ha=tn(e=>e?`on${ol(e)}`:""),Ht=(e,a)=>!Object.is(e,a),aa=(e,a)=>{for(let n=0;n<e.length;n++)e[n](a)},Dl=(e,a,n)=>{Object.defineProperty(e,a,{configurable:!0,enumerable:!1,value:n})},Ja=e=>{const a=parseFloat(e);return isNaN(a)?e:a},Il=e=>{const a=Ze(e)?Number(e):NaN;return isNaN(a)?e:a};let Is;const Ic=()=>Is||(Is=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),_p="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",bp=en(_p);function Ca(e){if(pe(e)){const a={};for(let n=0;n<e.length;n++){const o=e[n],r=Ze(o)?wp(o):Ca(o);if(r)for(const c in r)a[c]=r[c]}return a}else if(Ze(e)||qe(e))return e}const vp=/;(?![^(]*\))/g,yp=/:([^]+)/,Sp=/\/\*[^]*?\*\//g;function wp(e){const a={};return e.replace(Sp,"").split(vp).forEach(n=>{if(n){const o=n.split(yp);o.length>1&&(a[o[0].trim()]=o[1].trim())}}),a}function sl(e){let a="";if(Ze(e))a=e;else if(pe(e))for(let n=0;n<e.length;n++){const o=sl(e[n]);o&&(a+=o+" ")}else if(qe(e))for(const n in e)e[n]&&(a+=n+" ");return a.trim()}function Cp(e){if(!e)return null;let{class:a,style:n}=e;return a&&!Ze(a)&&(e.class=sl(a)),n&&(e.style=Ca(n)),e}const Ap="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kp=en(Ap);function Ec(e){return!!e||e===""}function xp(e,a){if(e.length!==a.length)return!1;let n=!0;for(let o=0;n&&o<e.length;o++)n=Zt(e[o],a[o]);return n}function Zt(e,a){if(e===a)return!0;let n=Ds(e),o=Ds(a);if(n||o)return n&&o?e.getTime()===a.getTime():!1;if(n=yi(e),o=yi(a),n||o)return e===a;if(n=pe(e),o=pe(a),n||o)return n&&o?xp(e,a):!1;if(n=qe(e),o=qe(a),n||o){if(!n||!o)return!1;const r=Object.keys(e).length,c=Object.keys(a).length;if(r!==c)return!1;for(const m in e){const p=e.hasOwnProperty(m),s=a.hasOwnProperty(m);if(p&&!s||!p&&s||!Zt(e[m],a[m]))return!1}}return String(e)===String(a)}function an(e,a){return e.findIndex(n=>Zt(n,a))}const ke=e=>Ze(e)?e:e==null?"":pe(e)||qe(e)&&(e.toString===Lc||!Se(e.toString))?JSON.stringify(e,Rc,2):String(e),Rc=(e,a)=>a&&a.__v_isRef?Rc(e,a.value):ia(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((n,[o,r],c)=>(n[xn(o,c)+" =>"]=r,n),{})}:ji(a)?{[`Set(${a.size})`]:[...a.values()].map(n=>xn(n))}:yi(a)?xn(a):qe(a)&&!pe(a)&&!Dc(a)?String(a):a,xn=(e,a="")=>{var n;return yi(e)?`Symbol(${(n=e.description)!=null?n:a})`:e};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let At;class Go{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=At,!a&&At&&(this.index=(At.scopes||(At.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const n=At;try{return At=this,a()}finally{At=n}}}on(){At=this}off(){At=this.parent}stop(a){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!a){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function $p(e){return new Go(e)}function zc(e,a=At){a&&a.active&&a.effects.push(e)}function qo(){return At}function Pc(e){At&&At.cleanups.push(e)}let Di;class ma{constructor(a,n,o,r){this.fn=a,this.trigger=n,this.scheduler=o,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,zc(this,r)}get dirty(){if(this._dirtyLevel===1){Gi();for(let a=0;a<this._depsLength;a++){const n=this.deps[a];if(n.computed&&(Bp(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),qi()}return this._dirtyLevel>=2}set dirty(a){this._dirtyLevel=a?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let a=_i,n=Di;try{return _i=!0,Di=this,this._runnings++,Es(this),this.fn()}finally{Rs(this),this._runnings--,Di=n,_i=a}}stop(){var a;this.active&&(Es(this),Rs(this),(a=this.onStop)==null||a.call(this),this.active=!1)}}function Bp(e){return e.value}function Es(e){e._trackId++,e._depsLength=0}function Rs(e){if(e.deps&&e.deps.length>e._depsLength){for(let a=e._depsLength;a<e.deps.length;a++)Fc(e.deps[a],e);e.deps.length=e._depsLength}}function Fc(e,a){const n=e.get(a);n!==void 0&&a._trackId!==n&&(e.delete(a),e.size===0&&e.cleanup())}function Tp(e,a){e.effect instanceof ma&&(e=e.effect.fn);const n=new ma(e,vt,()=>{n.dirty&&n.run()});a&&(Qe(n,a),a.scope&&zc(n,a.scope)),(!a||!a.lazy)&&n.run();const o=n.run.bind(n);return o.effect=n,o}function Lp(e){e.effect.stop()}let _i=!0,Xn=0;const Mc=[];function Gi(){Mc.push(_i),_i=!1}function qi(){const e=Mc.pop();_i=e===void 0?!0:e}function Uo(){Xn++}function Yo(){for(Xn--;!Xn&&Qn.length;)Qn.shift()()}function Vc(e,a,n){if(a.get(e)!==e._trackId){a.set(e,e._trackId);const o=e.deps[e._depsLength];o!==a?(o&&Fc(o,e),e.deps[e._depsLength++]=a):e._depsLength++}}const Qn=[];function Hc(e,a,n){Uo();for(const o of e.keys())if(o._dirtyLevel<a&&e.get(o)===o._trackId){const r=o._dirtyLevel;o._dirtyLevel=a,r===0&&(o._shouldSchedule=!0,o.trigger())}Nc(e),Yo()}function Nc(e){for(const a of e.keys())a.scheduler&&a._shouldSchedule&&(!a._runnings||a.allowRecurse)&&e.get(a)===a._trackId&&(a._shouldSchedule=!1,Qn.push(a.scheduler))}const Oc=(e,a)=>{const n=new Map;return n.cleanup=e,n.computed=a,n},El=new WeakMap,Ii=Symbol(""),Zn=Symbol("");function wt(e,a,n){if(_i&&Di){let o=El.get(e);o||El.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=Oc(()=>o.delete(n))),Vc(Di,r)}}function Xt(e,a,n,o,r,c){const m=El.get(e);if(!m)return;let p=[];if(a==="clear")p=[...m.values()];else if(n==="length"&&pe(e)){const s=Number(o);m.forEach((u,f)=>{(f==="length"||!yi(f)&&f>=s)&&p.push(u)})}else switch(n!==void 0&&p.push(m.get(n)),a){case"add":pe(e)?jo(n)&&p.push(m.get("length")):(p.push(m.get(Ii)),ia(e)&&p.push(m.get(Zn)));break;case"delete":pe(e)||(p.push(m.get(Ii)),ia(e)&&p.push(m.get(Zn)));break;case"set":ia(e)&&p.push(m.get(Ii));break}Uo();for(const s of p)s&&Hc(s,2);Yo()}function Dp(e,a){var n;return(n=El.get(e))==null?void 0:n.get(a)}const Ip=en("__proto__,__v_isRef,__isVue"),jc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(yi)),zs=Ep();function Ep(){const e={};return["includes","indexOf","lastIndexOf"].forEach(a=>{e[a]=function(...n){const o=Ee(this);for(let c=0,m=this.length;c<m;c++)wt(o,"get",c+"");const r=o[a](...n);return r===-1||r===!1?o[a](...n.map(Ee)):r}}),["push","pop","shift","unshift","splice"].forEach(a=>{e[a]=function(...n){Gi(),Uo();const o=Ee(this)[a].apply(this,n);return Yo(),qi(),o}}),e}function Rp(e){const a=Ee(this);return wt(a,"has",e),a.hasOwnProperty(e)}class Gc{constructor(a=!1,n=!1){this._isReadonly=a,this._shallow=n}get(a,n,o){const r=this._isReadonly,c=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return c;if(n==="__v_raw")return o===(r?c?Kc:Wc:c?Jc:Yc).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(o)?a:void 0;const m=pe(a);if(!r){if(m&&Pe(zs,n))return Reflect.get(zs,n,o);if(n==="hasOwnProperty")return Rp}const p=Reflect.get(a,n,o);return(yi(n)?jc.has(n):Ip(n))||(r||wt(a,"get",n),c)?p:ct(p)?m&&jo(n)?p:p.value:qe(p)?r?Wo(p):ti(p):p}}class qc extends Gc{constructor(a=!1){super(!1,a)}set(a,n,o,r){let c=a[n];if(!this._shallow){const s=Pi(c);if(!Wa(o)&&!Pi(o)&&(c=Ee(c),o=Ee(o)),!pe(a)&&ct(c)&&!ct(o))return s?!1:(c.value=o,!0)}const m=pe(a)&&jo(n)?Number(n)<a.length:Pe(a,n),p=Reflect.set(a,n,o,r);return a===Ee(r)&&(m?Ht(o,c)&&Xt(a,"set",n,o):Xt(a,"add",n,o)),p}deleteProperty(a,n){const o=Pe(a,n);a[n];const r=Reflect.deleteProperty(a,n);return r&&o&&Xt(a,"delete",n,void 0),r}has(a,n){const o=Reflect.has(a,n);return(!yi(n)||!jc.has(n))&&wt(a,"has",n),o}ownKeys(a){return wt(a,"iterate",pe(a)?"length":Ii),Reflect.ownKeys(a)}}class Uc extends Gc{constructor(a=!1){super(!0,a)}set(a,n){return!0}deleteProperty(a,n){return!0}}const zp=new qc,Pp=new Uc,Fp=new qc(!0),Mp=new Uc(!0),Jo=e=>e,ln=e=>Reflect.getPrototypeOf(e);function ml(e,a,n=!1,o=!1){e=e.__v_raw;const r=Ee(e),c=Ee(a);n||(Ht(a,c)&&wt(r,"get",a),wt(r,"get",c));const{has:m}=ln(r),p=o?Jo:n?Qo:Ka;if(m.call(r,a))return p(e.get(a));if(m.call(r,c))return p(e.get(c));e!==r&&e.get(a)}function pl(e,a=!1){const n=this.__v_raw,o=Ee(n),r=Ee(e);return a||(Ht(e,r)&&wt(o,"has",e),wt(o,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function fl(e,a=!1){return e=e.__v_raw,!a&&wt(Ee(e),"iterate",Ii),Reflect.get(e,"size",e)}function Ps(e){e=Ee(e);const a=Ee(this);return ln(a).has.call(a,e)||(a.add(e),Xt(a,"add",e,e)),this}function Fs(e,a){a=Ee(a);const n=Ee(this),{has:o,get:r}=ln(n);let c=o.call(n,e);c||(e=Ee(e),c=o.call(n,e));const m=r.call(n,e);return n.set(e,a),c?Ht(a,m)&&Xt(n,"set",e,a):Xt(n,"add",e,a),this}function Ms(e){const a=Ee(this),{has:n,get:o}=ln(a);let r=n.call(a,e);r||(e=Ee(e),r=n.call(a,e)),o&&o.call(a,e);const c=a.delete(e);return r&&Xt(a,"delete",e,void 0),c}function Vs(){const e=Ee(this),a=e.size!==0,n=e.clear();return a&&Xt(e,"clear",void 0,void 0),n}function gl(e,a){return function(o,r){const c=this,m=c.__v_raw,p=Ee(m),s=a?Jo:e?Qo:Ka;return!e&&wt(p,"iterate",Ii),m.forEach((u,f)=>o.call(r,s(u),s(f),c))}}function hl(e,a,n){return function(...o){const r=this.__v_raw,c=Ee(r),m=ia(c),p=e==="entries"||e===Symbol.iterator&&m,s=e==="keys"&&m,u=r[e](...o),f=n?Jo:a?Qo:Ka;return!a&&wt(c,"iterate",s?Zn:Ii),{next(){const{value:d,done:h}=u.next();return h?{value:d,done:h}:{value:p?[f(d[0]),f(d[1])]:f(d),done:h}},[Symbol.iterator](){return this}}}}function li(e){return function(...a){return e==="delete"?!1:e==="clear"?void 0:this}}function Vp(){const e={get(c){return ml(this,c)},get size(){return fl(this)},has:pl,add:Ps,set:Fs,delete:Ms,clear:Vs,forEach:gl(!1,!1)},a={get(c){return ml(this,c,!1,!0)},get size(){return fl(this)},has:pl,add:Ps,set:Fs,delete:Ms,clear:Vs,forEach:gl(!1,!0)},n={get(c){return ml(this,c,!0)},get size(){return fl(this,!0)},has(c){return pl.call(this,c,!0)},add:li("add"),set:li("set"),delete:li("delete"),clear:li("clear"),forEach:gl(!0,!1)},o={get(c){return ml(this,c,!0,!0)},get size(){return fl(this,!0)},has(c){return pl.call(this,c,!0)},add:li("add"),set:li("set"),delete:li("delete"),clear:li("clear"),forEach:gl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(c=>{e[c]=hl(c,!1,!1),n[c]=hl(c,!0,!1),a[c]=hl(c,!1,!0),o[c]=hl(c,!0,!0)}),[e,n,a,o]}const[Hp,Np,Op,jp]=Vp();function nn(e,a){const n=a?e?jp:Op:e?Np:Hp;return(o,r,c)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(Pe(n,r)&&r in o?n:o,r,c)}const Gp={get:nn(!1,!1)},qp={get:nn(!1,!0)},Up={get:nn(!0,!1)},Yp={get:nn(!0,!0)},Yc=new WeakMap,Jc=new WeakMap,Wc=new WeakMap,Kc=new WeakMap;function Jp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wp(e){return e.__v_skip||!Object.isExtensible(e)?0:Jp(fp(e))}function ti(e){return Pi(e)?e:on(e,!1,zp,Gp,Yc)}function Xc(e){return on(e,!1,Fp,qp,Jc)}function Wo(e){return on(e,!0,Pp,Up,Wc)}function Kp(e){return on(e,!0,Mp,Yp,Kc)}function on(e,a,n,o,r){if(!qe(e)||e.__v_raw&&!(a&&e.__v_isReactive))return e;const c=r.get(e);if(c)return c;const m=Wp(e);if(m===0)return e;const p=new Proxy(e,m===2?o:n);return r.set(e,p),p}function Ei(e){return Pi(e)?Ei(e.__v_raw):!!(e&&e.__v_isReactive)}function Pi(e){return!!(e&&e.__v_isReadonly)}function Wa(e){return!!(e&&e.__v_isShallow)}function Ko(e){return Ei(e)||Pi(e)}function Ee(e){const a=e&&e.__v_raw;return a?Ee(a):e}function Xo(e){return Dl(e,"__v_skip",!0),e}const Ka=e=>qe(e)?ti(e):e,Qo=e=>qe(e)?Wo(e):e;class Qc{constructor(a,n,o,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ma(()=>a(this._value),()=>la(this,1),()=>this.dep&&Nc(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const a=Ee(this);return(!a._cacheable||a.effect.dirty)&&Ht(a._value,a._value=a.effect.run())&&la(a,2),Zo(a),a.effect._dirtyLevel>=1&&la(a,1),a._value}set value(a){this._setter(a)}get _dirty(){return this.effect.dirty}set _dirty(a){this.effect.dirty=a}}function Xp(e,a,n=!1){let o,r;const c=Se(e);return c?(o=e,r=vt):(o=e.get,r=e.set),new Qc(o,r,c||!r,n)}function Zo(e){_i&&Di&&(e=Ee(e),Vc(Di,e.dep||(e.dep=Oc(()=>e.dep=void 0,e instanceof Qc?e:void 0))))}function la(e,a=2,n){e=Ee(e);const o=e.dep;o&&Hc(o,a)}function ct(e){return!!(e&&e.__v_isRef===!0)}function q(e){return ed(e,!1)}function Zc(e){return ed(e,!0)}function ed(e,a){return ct(e)?e:new Qp(e,a)}class Qp{constructor(a,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?a:Ee(a),this._value=n?a:Ka(a)}get value(){return Zo(this),this._value}set value(a){const n=this.__v_isShallow||Wa(a)||Pi(a);a=n?a:Ee(a),Ht(a,this._rawValue)&&(this._rawValue=a,this._value=n?a:Ka(a),la(this,2))}}function Zp(e){la(e,2)}function g(e){return ct(e)?e.value:e}function ef(e){return Se(e)?e():g(e)}const tf={get:(e,a,n)=>g(Reflect.get(e,a,n)),set:(e,a,n,o)=>{const r=e[a];return ct(r)&&!ct(n)?(r.value=n,!0):Reflect.set(e,a,n,o)}};function es(e){return Ei(e)?e:new Proxy(e,tf)}class af{constructor(a){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:o}=a(()=>Zo(this),()=>la(this));this._get=n,this._set=o}get value(){return this._get()}set value(a){this._set(a)}}function td(e){return new af(e)}function lf(e){const a=pe(e)?new Array(e.length):{};for(const n in e)a[n]=id(e,n);return a}class nf{constructor(a,n,o){this._object=a,this._key=n,this._defaultValue=o,this.__v_isRef=!0}get value(){const a=this._object[this._key];return a===void 0?this._defaultValue:a}set value(a){this._object[this._key]=a}get dep(){return Dp(Ee(this._object),this._key)}}class of{constructor(a){this._getter=a,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function eo(e,a,n){return ct(e)?e:Se(e)?new of(e):qe(e)&&arguments.length>1?id(e,a,n):q(e)}function id(e,a,n){const o=e[a];return ct(o)?o:new nf(e,a,n)}const sf={GET:"get",HAS:"has",ITERATE:"iterate"},rf={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function uf(e,a){}const cf={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},df={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function Qt(e,a,n,o){let r;try{r=o?e(...o):e()}catch(c){Ui(c,a,n)}return r}function Bt(e,a,n,o){if(Se(e)){const c=Qt(e,a,n,o);return c&&Oo(c)&&c.catch(m=>{Ui(m,a,n)}),c}const r=[];for(let c=0;c<e.length;c++)r.push(Bt(e[c],a,n,o));return r}function Ui(e,a,n,o=!0){const r=a?a.vnode:null;if(a){let c=a.parent;const m=a.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const u=c.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,m,p)===!1)return}c=c.parent}const s=a.appContext.config.errorHandler;if(s){Qt(s,null,10,[e,m,p]);return}}mf(e,n,r,o)}function mf(e,a,n,o=!0){console.error(e)}let Xa=!1,to=!1;const mt=[];let Gt=0;const na=[];let ui=null,Ti=0;const ad=Promise.resolve();let ts=null;function Aa(e){const a=ts||ad;return e?a.then(this?e.bind(this):e):a}function pf(e){let a=Gt+1,n=mt.length;for(;a<n;){const o=a+n>>>1,r=mt[o],c=Qa(r);c<e||c===e&&r.pre?a=o+1:n=o}return a}function sn(e){(!mt.length||!mt.includes(e,Xa&&e.allowRecurse?Gt+1:Gt))&&(e.id==null?mt.push(e):mt.splice(pf(e.id),0,e),ld())}function ld(){!Xa&&!to&&(to=!0,ts=ad.then(nd))}function ff(e){const a=mt.indexOf(e);a>Gt&&mt.splice(a,1)}function Rl(e){pe(e)?na.push(...e):(!ui||!ui.includes(e,e.allowRecurse?Ti+1:Ti))&&na.push(e),ld()}function Hs(e,a,n=Xa?Gt+1:0){for(;n<mt.length;n++){const o=mt[n];if(o&&o.pre){if(e&&o.id!==e.uid)continue;mt.splice(n,1),n--,o()}}}function zl(e){if(na.length){const a=[...new Set(na)].sort((n,o)=>Qa(n)-Qa(o));if(na.length=0,ui){ui.push(...a);return}for(ui=a,Ti=0;Ti<ui.length;Ti++)ui[Ti]();ui=null,Ti=0}}const Qa=e=>e.id==null?1/0:e.id,gf=(e,a)=>{const n=Qa(e)-Qa(a);if(n===0){if(e.pre&&!a.pre)return-1;if(a.pre&&!e.pre)return 1}return n};function nd(e){to=!1,Xa=!0,mt.sort(gf);try{for(Gt=0;Gt<mt.length;Gt++){const a=mt[Gt];a&&a.active!==!1&&Qt(a,null,14)}}finally{Gt=0,mt.length=0,zl(),Xa=!1,ts=null,(mt.length||na.length)&&nd()}}let Xi,_l=[];function od(e,a){var n,o;Xi=e,Xi?(Xi.enabled=!0,_l.forEach(({event:r,args:c})=>Xi.emit(r,...c)),_l=[]):typeof window<"u"&&window.HTMLElement&&!((o=(n=window.navigator)==null?void 0:n.userAgent)!=null&&o.includes("jsdom"))?((a.__VUE_DEVTOOLS_HOOK_REPLAY__=a.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(c=>{od(c,a)}),setTimeout(()=>{Xi||(a.__VUE_DEVTOOLS_HOOK_REPLAY__=null,_l=[])},3e3)):_l=[]}function hf(e,a,...n){if(e.isUnmounted)return;const o=e.vnode.props||je;let r=n;const c=a.startsWith("update:"),m=c&&a.slice(7);if(m&&m in o){const f=`${m==="modelValue"?"model":m}Modifiers`,{number:d,trim:h}=o[f]||je;h&&(r=n.map(v=>Ze(v)?v.trim():v)),d&&(r=n.map(Ja))}let p,s=o[p=Ha(a)]||o[p=Ha(ht(a))];!s&&c&&(s=o[p=Ha($t(a))]),s&&Bt(s,e,6,r);const u=o[p+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[p])return;e.emitted[p]=!0,Bt(u,e,6,r)}}function sd(e,a,n=!1){const o=a.emitsCache,r=o.get(e);if(r!==void 0)return r;const c=e.emits;let m={},p=!1;if(!Se(e)){const s=u=>{const f=sd(u,a,!0);f&&(p=!0,Qe(m,f))};!n&&a.mixins.length&&a.mixins.forEach(s),e.extends&&s(e.extends),e.mixins&&e.mixins.forEach(s)}return!c&&!p?(qe(e)&&o.set(e,null),null):(pe(c)?c.forEach(s=>m[s]=null):Qe(m,c),qe(e)&&o.set(e,m),m)}function rn(e,a){return!e||!nl(a)?!1:(a=a.slice(2).replace(/Once$/,""),Pe(e,a[0].toLowerCase()+a.slice(1))||Pe(e,$t(a))||Pe(e,a))}let it=null,un=null;function Za(e){const a=it;return it=e,un=e&&e.type.__scopeId||null,a}function is(e){un=e}function as(){un=null}const _f=e=>i;function i(e,a=it,n){if(!a||e._n)return e;const o=(...r)=>{o._d&&uo(-1);const c=Za(a);let m;try{m=e(...r)}finally{Za(c),o._d&&uo(1)}return m};return o._n=!0,o._c=!0,o._d=!0,o}function Bl(e){const{type:a,vnode:n,proxy:o,withProxy:r,props:c,propsOptions:[m],slots:p,attrs:s,emit:u,render:f,renderCache:d,data:h,setupState:v,ctx:_,inheritAttrs:C}=e;let k,B;const b=Za(e);try{if(n.shapeFlag&4){const x=r||o,$=x;k=kt(f.call($,x,d,c,v,h,_)),B=s}else{const x=a;k=kt(x.length>1?x(c,{attrs:s,slots:p,emit:u}):x(c,null)),B=a.props?s:vf(s)}}catch(x){ja.length=0,Ui(x,e,1),k=t(ft)}let w=k;if(B&&C!==!1){const x=Object.keys(B),{shapeFlag:$}=w;x.length&&$&7&&(m&&x.some(Ho)&&(B=yf(B,m)),w=qt(w,B))}return n.dirs&&(w=qt(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),k=w,Za(b),k}function bf(e,a=!0){let n;for(let o=0;o<e.length;o++){const r=e[o];if(zt(r)){if(r.type!==ft||r.children==="v-if"){if(n)return;n=r}}else return}return n}const vf=e=>{let a;for(const n in e)(n==="class"||n==="style"||nl(n))&&((a||(a={}))[n]=e[n]);return a},yf=(e,a)=>{const n={};for(const o in e)(!Ho(o)||!(o.slice(9)in a))&&(n[o]=e[o]);return n};function Sf(e,a,n){const{props:o,children:r,component:c}=e,{props:m,children:p,patchFlag:s}=a,u=c.emitsOptions;if(a.dirs||a.transition)return!0;if(n&&s>=0){if(s&1024)return!0;if(s&16)return o?Ns(o,m,u):!!m;if(s&8){const f=a.dynamicProps;for(let d=0;d<f.length;d++){const h=f[d];if(m[h]!==o[h]&&!rn(u,h))return!0}}}else return(r||p)&&(!p||!p.$stable)?!0:o===m?!1:o?m?Ns(o,m,u):!0:!!m;return!1}function Ns(e,a,n){const o=Object.keys(a);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const c=o[r];if(a[c]!==e[c]&&!rn(n,c))return!0}return!1}function ls({vnode:e,parent:a},n){for(;a;){const o=a.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=a.vnode).el=n,a=a.parent;else break}}const ns="components",wf="directives";function y(e,a){return os(ns,e,!0,a)||e}const rd=Symbol.for("v-ndc");function ud(e){return Ze(e)?os(ns,e,!1)||e:e||rd}function cn(e){return os(wf,e)}function os(e,a,n=!0,o=!1){const r=it||lt;if(r){const c=r.type;if(e===ns){const p=go(c,!1);if(p&&(p===a||p===ht(a)||p===ol(ht(a))))return c}const m=Os(r[e]||c[e],a)||Os(r.appContext[e],a);return!m&&o?c:m}}function Os(e,a){return e&&(e[a]||e[ht(a)]||e[ol(ht(a))])}const cd=e=>e.__isSuspense;let io=0;const Cf={name:"Suspense",__isSuspense:!0,process(e,a,n,o,r,c,m,p,s,u){if(e==null)kf(a,n,o,r,c,m,p,s,u);else{if(c&&c.deps>0){a.suspense=e.suspense;return}xf(e,a,n,o,r,m,p,s,u)}},hydrate:$f,create:ss,normalize:Bf},Af=Cf;function el(e,a){const n=e.props&&e.props[a];Se(n)&&n()}function kf(e,a,n,o,r,c,m,p,s){const{p:u,o:{createElement:f}}=s,d=f("div"),h=e.suspense=ss(e,r,o,a,d,n,c,m,p,s);u(null,h.pendingBranch=e.ssContent,d,null,o,h,c,m),h.deps>0?(el(e,"onPending"),el(e,"onFallback"),u(null,e.ssFallback,a,n,o,null,c,m),oa(h,e.ssFallback)):h.resolve(!1,!0)}function xf(e,a,n,o,r,c,m,p,{p:s,um:u,o:{createElement:f}}){const d=a.suspense=e.suspense;d.vnode=a,a.el=e.el;const h=a.ssContent,v=a.ssFallback,{activeBranch:_,pendingBranch:C,isInFallback:k,isHydrating:B}=d;if(C)d.pendingBranch=h,Vt(h,C)?(s(C,h,d.hiddenContainer,null,r,d,c,m,p),d.deps<=0?d.resolve():k&&(B||(s(_,v,n,o,r,null,c,m,p),oa(d,v)))):(d.pendingId=io++,B?(d.isHydrating=!1,d.activeBranch=C):u(C,r,d),d.deps=0,d.effects.length=0,d.hiddenContainer=f("div"),k?(s(null,h,d.hiddenContainer,null,r,d,c,m,p),d.deps<=0?d.resolve():(s(_,v,n,o,r,null,c,m,p),oa(d,v))):_&&Vt(h,_)?(s(_,h,n,o,r,d,c,m,p),d.resolve(!0)):(s(null,h,d.hiddenContainer,null,r,d,c,m,p),d.deps<=0&&d.resolve()));else if(_&&Vt(h,_))s(_,h,n,o,r,d,c,m,p),oa(d,h);else if(el(a,"onPending"),d.pendingBranch=h,h.shapeFlag&512?d.pendingId=h.component.suspenseId:d.pendingId=io++,s(null,h,d.hiddenContainer,null,r,d,c,m,p),d.deps<=0)d.resolve();else{const{timeout:b,pendingId:w}=d;b>0?setTimeout(()=>{d.pendingId===w&&d.fallback(v)},b):b===0&&d.fallback(v)}}function ss(e,a,n,o,r,c,m,p,s,u,f=!1){const{p:d,m:h,um:v,n:_,o:{parentNode:C,remove:k}}=u;let B;const b=Tf(e);b&&a!=null&&a.pendingBranch&&(B=a.pendingId,a.deps++);const w=e.props?Il(e.props.timeout):void 0,x=c,$={vnode:e,parent:a,parentComponent:n,namespace:m,container:o,hiddenContainer:r,deps:0,pendingId:io++,timeout:typeof w=="number"?w:-1,activeBranch:null,pendingBranch:null,isInFallback:!f,isHydrating:f,isUnmounted:!1,effects:[],resolve(D=!1,F=!1){const{vnode:V,activeBranch:z,pendingBranch:j,pendingId:K,effects:U,parentComponent:me,container:Te}=$;let G=!1;$.isHydrating?$.isHydrating=!1:D||(G=z&&j.transition&&j.transition.mode==="out-in",G&&(z.transition.afterLeave=()=>{K===$.pendingId&&(h(j,Te,c===x?_(z):c,0),Rl(U))}),z&&(C(z.el)!==$.hiddenContainer&&(c=_(z)),v(z,me,$,!0)),G||h(j,Te,c,0)),oa($,j),$.pendingBranch=null,$.isInFallback=!1;let W=$.parent,ce=!1;for(;W;){if(W.pendingBranch){W.effects.push(...U),ce=!0;break}W=W.parent}!ce&&!G&&Rl(U),$.effects=[],b&&a&&a.pendingBranch&&B===a.pendingId&&(a.deps--,a.deps===0&&!F&&a.resolve()),el(V,"onResolve")},fallback(D){if(!$.pendingBranch)return;const{vnode:F,activeBranch:V,parentComponent:z,container:j,namespace:K}=$;el(F,"onFallback");const U=_(V),me=()=>{$.isInFallback&&(d(null,D,j,U,z,null,K,p,s),oa($,D))},Te=D.transition&&D.transition.mode==="out-in";Te&&(V.transition.afterLeave=me),$.isInFallback=!0,v(V,z,null,!0),Te||me()},move(D,F,V){$.activeBranch&&h($.activeBranch,D,F,V),$.container=D},next(){return $.activeBranch&&_($.activeBranch)},registerDep(D,F){const V=!!$.pendingBranch;V&&$.deps++;const z=D.vnode.el;D.asyncDep.catch(j=>{Ui(j,D,0)}).then(j=>{if(D.isUnmounted||$.isUnmounted||$.pendingId!==D.suspenseId)return;D.asyncResolved=!0;const{vnode:K}=D;po(D,j,!1),z&&(K.el=z);const U=!z&&D.subTree.el;F(D,K,C(z||D.subTree.el),z?null:_(D.subTree),$,m,s),U&&k(U),ls(D,K.el),V&&--$.deps===0&&$.resolve()})},unmount(D,F){$.isUnmounted=!0,$.activeBranch&&v($.activeBranch,n,D,F),$.pendingBranch&&v($.pendingBranch,n,D,F)}};return $}function $f(e,a,n,o,r,c,m,p,s){const u=a.suspense=ss(a,o,n,e.parentNode,document.createElement("div"),null,r,c,m,p,!0),f=s(e,u.pendingBranch=a.ssContent,n,u,c,m);return u.deps===0&&u.resolve(!1,!0),f}function Bf(e){const{shapeFlag:a,children:n}=e,o=a&32;e.ssContent=js(o?n.default:n),e.ssFallback=o?js(n.fallback):t(ft)}function js(e){let a;if(Se(e)){const n=Vi&&e._c;n&&(e._d=!1,T()),e=e(),n&&(e._d=!0,a=yt,Od())}return pe(e)&&(e=bf(e)),e=kt(e),a&&!e.dynamicChildren&&(e.dynamicChildren=a.filter(n=>n!==e)),e}function dd(e,a){a&&a.pendingBranch?pe(e)?a.effects.push(...e):a.effects.push(e):Rl(e)}function oa(e,a){e.activeBranch=a;const{vnode:n,parentComponent:o}=e;let r=a.el;for(;!r&&a.component;)a=a.component.subTree,r=a.el;n.el=r,o&&o.subTree===n&&(o.vnode.el=r,ls(o,r))}function Tf(e){var a;return((a=e.props)==null?void 0:a.suspensible)!=null&&e.props.suspensible!==!1}const md=Symbol.for("v-scx"),pd=()=>Ve(md);function rs(e,a){return rl(e,null,a)}function fd(e,a){return rl(e,null,{flush:"post"})}function gd(e,a){return rl(e,null,{flush:"sync"})}const bl={};function pt(e,a,n){return rl(e,a,n)}function rl(e,a,{immediate:n,deep:o,flush:r,once:c,onTrack:m,onTrigger:p}=je){if(a&&c){const D=a;a=(...F)=>{D(...F),$()}}const s=lt,u=D=>o===!0?D:Li(D,o===!1?1:void 0);let f,d=!1,h=!1;if(ct(e)?(f=()=>e.value,d=Wa(e)):Ei(e)?(f=()=>u(e),d=!0):pe(e)?(h=!0,d=e.some(D=>Ei(D)||Wa(D)),f=()=>e.map(D=>{if(ct(D))return D.value;if(Ei(D))return u(D);if(Se(D))return Qt(D,s,2)})):Se(e)?a?f=()=>Qt(e,s,2):f=()=>(v&&v(),Bt(e,s,3,[_])):f=vt,a&&o){const D=f;f=()=>Li(D())}let v,_=D=>{v=w.onStop=()=>{Qt(D,s,4),v=w.onStop=void 0}},C;if(dl)if(_=vt,a?n&&Bt(a,s,3,[f(),h?[]:void 0,_]):f(),r==="sync"){const D=pd();C=D.__watcherHandles||(D.__watcherHandles=[])}else return vt;let k=h?new Array(e.length).fill(bl):bl;const B=()=>{if(!(!w.active||!w.dirty))if(a){const D=w.run();(o||d||(h?D.some((F,V)=>Ht(F,k[V])):Ht(D,k)))&&(v&&v(),Bt(a,s,3,[D,k===bl?void 0:h&&k[0]===bl?[]:k,_]),k=D)}else w.run()};B.allowRecurse=!!a;let b;r==="sync"?b=B:r==="post"?b=()=>rt(B,s&&s.suspense):(B.pre=!0,s&&(B.id=s.uid),b=()=>sn(B));const w=new ma(f,vt,b),x=qo(),$=()=>{w.stop(),x&&No(x.effects,w)};return a?n?B():k=w.run():r==="post"?rt(w.run.bind(w),s&&s.suspense):w.run(),C&&C.push($),$}function Lf(e,a,n){const o=this.proxy,r=Ze(e)?e.includes(".")?hd(o,e):()=>o[e]:e.bind(o,o);let c;Se(a)?c=a:(c=a.handler,n=a);const m=Hi(this),p=rl(r,c.bind(o),n);return m(),p}function hd(e,a){const n=a.split(".");return()=>{let o=e;for(let r=0;r<n.length&&o;r++)o=o[n[r]];return o}}function Li(e,a,n=0,o){if(!qe(e)||e.__v_skip)return e;if(a&&a>0){if(n>=a)return e;n++}if(o=o||new Set,o.has(e))return e;if(o.add(e),ct(e))Li(e.value,a,n,o);else if(pe(e))for(let r=0;r<e.length;r++)Li(e[r],a,n,o);else if(ji(e)||ia(e))e.forEach(r=>{Li(r,a,n,o)});else if(Dc(e))for(const r in e)Li(e[r],a,n,o);return e}function ul(e,a){if(it===null)return e;const n=_n(it)||it.proxy,o=e.dirs||(e.dirs=[]);for(let r=0;r<a.length;r++){let[c,m,p,s=je]=a[r];c&&(Se(c)&&(c={mounted:c,updated:c}),c.deep&&Li(m),o.push({dir:c,instance:n,value:m,oldValue:void 0,arg:p,modifiers:s}))}return e}function jt(e,a,n,o){const r=e.dirs,c=a&&a.dirs;for(let m=0;m<r.length;m++){const p=r[m];c&&(p.oldValue=c[m].value);let s=p.dir[o];s&&(Gi(),Bt(s,n,8,[e.el,p,e,a]),qi())}}const ci=Symbol("_leaveCb"),vl=Symbol("_enterCb");function us(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return wi(()=>{e.isMounted=!0}),fn(()=>{e.isUnmounting=!0}),e}const Dt=[Function,Array],cs={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Dt,onEnter:Dt,onAfterEnter:Dt,onEnterCancelled:Dt,onBeforeLeave:Dt,onLeave:Dt,onAfterLeave:Dt,onLeaveCancelled:Dt,onBeforeAppear:Dt,onAppear:Dt,onAfterAppear:Dt,onAppearCancelled:Dt},Df={name:"BaseTransition",props:cs,setup(e,{slots:a}){const n=Ut(),o=us();let r;return()=>{const c=a.default&&dn(a.default(),!0);if(!c||!c.length)return;let m=c[0];if(c.length>1){for(const C of c)if(C.type!==ft){m=C;break}}const p=Ee(e),{mode:s}=p;if(o.isLeaving)return $n(m);const u=Gs(m);if(!u)return $n(m);const f=pa(u,p,o,n);Fi(u,f);const d=n.subTree,h=d&&Gs(d);let v=!1;const{getTransitionKey:_}=u.type;if(_){const C=_();r===void 0?r=C:C!==r&&(r=C,v=!0)}if(h&&h.type!==ft&&(!Vt(u,h)||v)){const C=pa(h,p,o,n);if(Fi(h,C),s==="out-in")return o.isLeaving=!0,C.afterLeave=()=>{o.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},$n(m);s==="in-out"&&u.type!==ft&&(C.delayLeave=(k,B,b)=>{const w=bd(o,h);w[String(h.key)]=h,k[ci]=()=>{B(),k[ci]=void 0,delete f.delayedLeave},f.delayedLeave=b})}return m}}},_d=Df;function bd(e,a){const{leavingVNodes:n}=e;let o=n.get(a.type);return o||(o=Object.create(null),n.set(a.type,o)),o}function pa(e,a,n,o){const{appear:r,mode:c,persisted:m=!1,onBeforeEnter:p,onEnter:s,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:h,onAfterLeave:v,onLeaveCancelled:_,onBeforeAppear:C,onAppear:k,onAfterAppear:B,onAppearCancelled:b}=a,w=String(e.key),x=bd(n,e),$=(V,z)=>{V&&Bt(V,o,9,z)},D=(V,z)=>{const j=z[1];$(V,z),pe(V)?V.every(K=>K.length<=1)&&j():V.length<=1&&j()},F={mode:c,persisted:m,beforeEnter(V){let z=p;if(!n.isMounted)if(r)z=C||p;else return;V[ci]&&V[ci](!0);const j=x[w];j&&Vt(e,j)&&j.el[ci]&&j.el[ci](),$(z,[V])},enter(V){let z=s,j=u,K=f;if(!n.isMounted)if(r)z=k||s,j=B||u,K=b||f;else return;let U=!1;const me=V[vl]=Te=>{U||(U=!0,Te?$(K,[V]):$(j,[V]),F.delayedLeave&&F.delayedLeave(),V[vl]=void 0)};z?D(z,[V,me]):me()},leave(V,z){const j=String(e.key);if(V[vl]&&V[vl](!0),n.isUnmounting)return z();$(d,[V]);let K=!1;const U=V[ci]=me=>{K||(K=!0,z(),me?$(_,[V]):$(v,[V]),V[ci]=void 0,x[j]===e&&delete x[j])};x[j]=e,h?D(h,[V,U]):U()},clone(V){return pa(V,a,n,o)}};return F}function $n(e){if(cl(e))return e=qt(e),e.children=null,e}function Gs(e){return cl(e)?e.children?e.children[0]:void 0:e}function Fi(e,a){e.shapeFlag&6&&e.component?Fi(e.component.subTree,a):e.shapeFlag&128?(e.ssContent.transition=a.clone(e.ssContent),e.ssFallback.transition=a.clone(e.ssFallback)):e.transition=a}function dn(e,a=!1,n){let o=[],r=0;for(let c=0;c<e.length;c++){let m=e[c];const p=n==null?m.key:String(n)+String(m.key!=null?m.key:c);m.type===Ce?(m.patchFlag&128&&r++,o=o.concat(dn(m.children,a,p))):(a||m.type!==ft)&&o.push(p!=null?qt(m,{key:p}):m)}if(r>1)for(let c=0;c<o.length;c++)o[c].patchFlag=-2;return o}/*! #__NO_SIDE_EFFECTS__ */function E(e,a){return Se(e)?Qe({name:e.name},a,{setup:e}):e}const Ri=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function If(e){Se(e)&&(e={loader:e});const{loader:a,loadingComponent:n,errorComponent:o,delay:r=200,timeout:c,suspensible:m=!0,onError:p}=e;let s=null,u,f=0;const d=()=>(f++,s=null,h()),h=()=>{let v;return s||(v=s=a().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),p)return new Promise((C,k)=>{p(_,()=>C(d()),()=>k(_),f+1)});throw _}).then(_=>v!==s&&s?s:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),u=_,_)))};return E({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return u},setup(){const v=lt;if(u)return()=>Bn(u,v);const _=b=>{s=null,Ui(b,v,13,!o)};if(m&&v.suspense||dl)return h().then(b=>()=>Bn(b,v)).catch(b=>(_(b),()=>o?t(o,{error:b}):null));const C=q(!1),k=q(),B=q(!!r);return r&&setTimeout(()=>{B.value=!1},r),c!=null&&setTimeout(()=>{if(!C.value&&!k.value){const b=new Error(`Async component timed out after ${c}ms.`);_(b),k.value=b}},c),h().then(()=>{C.value=!0,v.parent&&cl(v.parent.vnode)&&(v.parent.effect.dirty=!0,sn(v.parent.update))}).catch(b=>{_(b),k.value=b}),()=>{if(C.value&&u)return Bn(u,v);if(k.value&&o)return t(o,{error:k.value});if(n&&!B.value)return t(n)}}})}function Bn(e,a){const{ref:n,props:o,children:r,ce:c}=a.vnode,m=t(e,o,r);return m.ref=n,m.ce=c,delete a.vnode.ce,m}const cl=e=>e.type.__isKeepAlive,Ef={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:a}){const n=Ut(),o=n.ctx;if(!o.renderer)return()=>{const b=a.default&&a.default();return b&&b.length===1?b[0]:b};const r=new Map,c=new Set;let m=null;const p=n.suspense,{renderer:{p:s,m:u,um:f,o:{createElement:d}}}=o,h=d("div");o.activate=(b,w,x,$,D)=>{const F=b.component;u(b,w,x,0,p),s(F.vnode,b,w,x,F,p,$,b.slotScopeIds,D),rt(()=>{F.isDeactivated=!1,F.a&&aa(F.a);const V=b.props&&b.props.onVnodeMounted;V&&_t(V,F.parent,b)},p)},o.deactivate=b=>{const w=b.component;u(b,h,null,1,p),rt(()=>{w.da&&aa(w.da);const x=b.props&&b.props.onVnodeUnmounted;x&&_t(x,w.parent,b),w.isDeactivated=!0},p)};function v(b){Tn(b),f(b,n,p,!0)}function _(b){r.forEach((w,x)=>{const $=go(w.type);$&&(!b||!b($))&&C(x)})}function C(b){const w=r.get(b);!m||!Vt(w,m)?v(w):m&&Tn(m),r.delete(b),c.delete(b)}pt(()=>[e.include,e.exclude],([b,w])=>{b&&_(x=>Ea(b,x)),w&&_(x=>!Ea(w,x))},{flush:"post",deep:!0});let k=null;const B=()=>{k!=null&&r.set(k,Ln(n.subTree))};return wi(B),pn(B),fn(()=>{r.forEach(b=>{const{subTree:w,suspense:x}=n,$=Ln(w);if(b.type===$.type&&b.key===$.key){Tn($);const D=$.component.da;D&&rt(D,x);return}v(b)})}),()=>{if(k=null,!a.default)return null;const b=a.default(),w=b[0];if(b.length>1)return m=null,b;if(!zt(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return m=null,w;let x=Ln(w);const $=x.type,D=go(Ri(x)?x.type.__asyncResolved||{}:$),{include:F,exclude:V,max:z}=e;if(F&&(!D||!Ea(F,D))||V&&D&&Ea(V,D))return m=x,w;const j=x.key==null?$:x.key,K=r.get(j);return x.el&&(x=qt(x),w.shapeFlag&128&&(w.ssContent=x)),k=j,K?(x.el=K.el,x.component=K.component,x.transition&&Fi(x,x.transition),x.shapeFlag|=512,c.delete(j),c.add(j)):(c.add(j),z&&c.size>parseInt(z,10)&&C(c.values().next().value)),x.shapeFlag|=256,m=x,cd(w.type)?w:x}}},Rf=Ef;function Ea(e,a){return pe(e)?e.some(n=>Ea(n,a)):Ze(e)?e.split(",").includes(a):pp(e)?e.test(a):!1}function ds(e,a){vd(e,"a",a)}function ms(e,a){vd(e,"da",a)}function vd(e,a,n=lt){const o=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(mn(a,o,n),n){let r=n.parent;for(;r&&r.parent;)cl(r.parent.vnode)&&zf(o,a,n,r),r=r.parent}}function zf(e,a,n,o){const r=mn(a,e,o,!0);Yi(()=>{No(o[a],r)},n)}function Tn(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Ln(e){return e.shapeFlag&128?e.ssContent:e}function mn(e,a,n=lt,o=!1){if(n){const r=n[e]||(n[e]=[]),c=a.__weh||(a.__weh=(...m)=>{if(n.isUnmounted)return;Gi();const p=Hi(n),s=Bt(a,n,e,m);return p(),qi(),s});return o?r.unshift(c):r.push(c),c}}const ii=e=>(a,n=lt)=>(!dl||e==="sp")&&mn(e,(...o)=>a(...o),n),yd=ii("bm"),wi=ii("m"),Sd=ii("bu"),pn=ii("u"),fn=ii("bum"),Yi=ii("um"),wd=ii("sp"),Cd=ii("rtg"),Ad=ii("rtc");function kd(e,a=lt){mn("ec",e,a)}function tt(e,a,n,o){let r;const c=n&&n[o];if(pe(e)||Ze(e)){r=new Array(e.length);for(let m=0,p=e.length;m<p;m++)r[m]=a(e[m],m,void 0,c&&c[m])}else if(typeof e=="number"){r=new Array(e);for(let m=0;m<e;m++)r[m]=a(m+1,m,void 0,c&&c[m])}else if(qe(e))if(e[Symbol.iterator])r=Array.from(e,(m,p)=>a(m,p,void 0,c&&c[p]));else{const m=Object.keys(e);r=new Array(m.length);for(let p=0,s=m.length;p<s;p++){const u=m[p];r[p]=a(e[u],u,p,c&&c[p])}}else r=[];return n&&(n[o]=r),r}function Pf(e,a){for(let n=0;n<a.length;n++){const o=a[n];if(pe(o))for(let r=0;r<o.length;r++)e[o[r].name]=o[r].fn;else o&&(e[o.name]=o.key?(...r)=>{const c=o.fn(...r);return c&&(c.key=o.key),c}:o.fn)}return e}function fa(e,a,n={},o,r){if(it.isCE||it.parent&&Ri(it.parent)&&it.parent.isCE)return a!=="default"&&(n.name=a),t("slot",n,o&&o());let c=e[a];c&&c._c&&(c._d=!1),T();const m=c&&xd(c(n)),p=I(Ce,{key:n.key||m&&m.key||`_${a}`},m||(o?o():[]),m&&e._===1?64:-2);return!r&&p.scopeId&&(p.slotScopeIds=[p.scopeId+"-s"]),c&&c._c&&(c._d=!0),p}function xd(e){return e.some(a=>zt(a)?!(a.type===ft||a.type===Ce&&!xd(a.children)):!0)?e:null}function Ff(e,a){const n={};for(const o in e)n[a&&/[A-Z]/.test(o)?`on:${o}`:Ha(o)]=e[o];return n}const ao=e=>e?Jd(e)?_n(e)||e.proxy:ao(e.parent):null,Na=Qe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ao(e.parent),$root:e=>ao(e.root),$emit:e=>e.emit,$options:e=>ps(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,sn(e.update)}),$nextTick:e=>e.n||(e.n=Aa.bind(e.proxy)),$watch:e=>Lf.bind(e)}),Dn=(e,a)=>e!==je&&!e.__isScriptSetup&&Pe(e,a),lo={get({_:e},a){const{ctx:n,setupState:o,data:r,props:c,accessCache:m,type:p,appContext:s}=e;let u;if(a[0]!=="$"){const v=m[a];if(v!==void 0)switch(v){case 1:return o[a];case 2:return r[a];case 4:return n[a];case 3:return c[a]}else{if(Dn(o,a))return m[a]=1,o[a];if(r!==je&&Pe(r,a))return m[a]=2,r[a];if((u=e.propsOptions[0])&&Pe(u,a))return m[a]=3,c[a];if(n!==je&&Pe(n,a))return m[a]=4,n[a];no&&(m[a]=0)}}const f=Na[a];let d,h;if(f)return a==="$attrs"&&wt(e,"get",a),f(e);if((d=p.__cssModules)&&(d=d[a]))return d;if(n!==je&&Pe(n,a))return m[a]=4,n[a];if(h=s.config.globalProperties,Pe(h,a))return h[a]},set({_:e},a,n){const{data:o,setupState:r,ctx:c}=e;return Dn(r,a)?(r[a]=n,!0):o!==je&&Pe(o,a)?(o[a]=n,!0):Pe(e.props,a)||a[0]==="$"&&a.slice(1)in e?!1:(c[a]=n,!0)},has({_:{data:e,setupState:a,accessCache:n,ctx:o,appContext:r,propsOptions:c}},m){let p;return!!n[m]||e!==je&&Pe(e,m)||Dn(a,m)||(p=c[0])&&Pe(p,m)||Pe(o,m)||Pe(Na,m)||Pe(r.config.globalProperties,m)},defineProperty(e,a,n){return n.get!=null?e._.accessCache[a]=0:Pe(n,"value")&&this.set(e,a,n.value,null),Reflect.defineProperty(e,a,n)}},Mf=Qe({},lo,{get(e,a){if(a!==Symbol.unscopables)return lo.get(e,a,e)},has(e,a){return a[0]!=="_"&&!bp(a)}});function Vf(){return null}function Hf(){return null}function Nf(e){}function Of(e){}function jf(){return null}function Gf(){}function qf(e,a){return null}function Uf(){return Bd().slots}function $d(){return Bd().attrs}function Bd(){const e=Ut();return e.setupContext||(e.setupContext=Xd(e))}function tl(e){return pe(e)?e.reduce((a,n)=>(a[n]=null,a),{}):e}function Yf(e,a){const n=tl(e);for(const o in a){if(o.startsWith("__skip"))continue;let r=n[o];r?pe(r)||Se(r)?r=n[o]={type:r,default:a[o]}:r.default=a[o]:r===null&&(r=n[o]={default:a[o]}),r&&a[`__skip_${o}`]&&(r.skipFactory=!0)}return n}function Jf(e,a){return!e||!a?e||a:pe(e)&&pe(a)?e.concat(a):Qe({},tl(e),tl(a))}function Wf(e,a){const n={};for(const o in e)a.includes(o)||Object.defineProperty(n,o,{enumerable:!0,get:()=>e[o]});return n}function Kf(e){const a=Ut();let n=e();return mo(),Oo(n)&&(n=n.catch(o=>{throw Hi(a),o})),[n,()=>Hi(a)]}let no=!0;function Xf(e){const a=ps(e),n=e.proxy,o=e.ctx;no=!1,a.beforeCreate&&qs(a.beforeCreate,e,"bc");const{data:r,computed:c,methods:m,watch:p,provide:s,inject:u,created:f,beforeMount:d,mounted:h,beforeUpdate:v,updated:_,activated:C,deactivated:k,beforeDestroy:B,beforeUnmount:b,destroyed:w,unmounted:x,render:$,renderTracked:D,renderTriggered:F,errorCaptured:V,serverPrefetch:z,expose:j,inheritAttrs:K,components:U,directives:me,filters:Te}=a;if(u&&Qf(u,o,null),m)for(const ce in m){const ie=m[ce];Se(ie)&&(o[ce]=ie.bind(n))}if(r){const ce=r.call(n,n);qe(ce)&&(e.data=ti(ce))}if(no=!0,c)for(const ce in c){const ie=c[ce],Le=Se(ie)?ie.bind(n,n):Se(ie.get)?ie.get.bind(n,n):vt,We=!Se(ie)&&Se(ie.set)?ie.set.bind(n):vt,nt=H({get:Le,set:We});Object.defineProperty(o,ce,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Ue=>nt.value=Ue})}if(p)for(const ce in p)Td(p[ce],o,n,ce);if(s){const ce=Se(s)?s.call(n):s;Reflect.ownKeys(ce).forEach(ie=>{ut(ie,ce[ie])})}f&&qs(f,e,"c");function W(ce,ie){pe(ie)?ie.forEach(Le=>ce(Le.bind(n))):ie&&ce(ie.bind(n))}if(W(yd,d),W(wi,h),W(Sd,v),W(pn,_),W(ds,C),W(ms,k),W(kd,V),W(Ad,D),W(Cd,F),W(fn,b),W(Yi,x),W(wd,z),pe(j))if(j.length){const ce=e.exposed||(e.exposed={});j.forEach(ie=>{Object.defineProperty(ce,ie,{get:()=>n[ie],set:Le=>n[ie]=Le})})}else e.exposed||(e.exposed={});$&&e.render===vt&&(e.render=$),K!=null&&(e.inheritAttrs=K),U&&(e.components=U),me&&(e.directives=me)}function Qf(e,a,n=vt){pe(e)&&(e=oo(e));for(const o in e){const r=e[o];let c;qe(r)?"default"in r?c=Ve(r.from||o,r.default,!0):c=Ve(r.from||o):c=Ve(r),ct(c)?Object.defineProperty(a,o,{enumerable:!0,configurable:!0,get:()=>c.value,set:m=>c.value=m}):a[o]=c}}function qs(e,a,n){Bt(pe(e)?e.map(o=>o.bind(a.proxy)):e.bind(a.proxy),a,n)}function Td(e,a,n,o){const r=o.includes(".")?hd(n,o):()=>n[o];if(Ze(e)){const c=a[e];Se(c)&&pt(r,c)}else if(Se(e))pt(r,e.bind(n));else if(qe(e))if(pe(e))e.forEach(c=>Td(c,a,n,o));else{const c=Se(e.handler)?e.handler.bind(n):a[e.handler];Se(c)&&pt(r,c,e)}}function ps(e){const a=e.type,{mixins:n,extends:o}=a,{mixins:r,optionsCache:c,config:{optionMergeStrategies:m}}=e.appContext,p=c.get(a);let s;return p?s=p:!r.length&&!n&&!o?s=a:(s={},r.length&&r.forEach(u=>Pl(s,u,m,!0)),Pl(s,a,m)),qe(a)&&c.set(a,s),s}function Pl(e,a,n,o=!1){const{mixins:r,extends:c}=a;c&&Pl(e,c,n,!0),r&&r.forEach(m=>Pl(e,m,n,!0));for(const m in a)if(!(o&&m==="expose")){const p=Zf[m]||n&&n[m];e[m]=p?p(e[m],a[m]):a[m]}return e}const Zf={data:Us,props:Ys,emits:Ys,methods:Ra,computed:Ra,beforeCreate:gt,created:gt,beforeMount:gt,mounted:gt,beforeUpdate:gt,updated:gt,beforeDestroy:gt,beforeUnmount:gt,destroyed:gt,unmounted:gt,activated:gt,deactivated:gt,errorCaptured:gt,serverPrefetch:gt,components:Ra,directives:Ra,watch:tg,provide:Us,inject:eg};function Us(e,a){return a?e?function(){return Qe(Se(e)?e.call(this,this):e,Se(a)?a.call(this,this):a)}:a:e}function eg(e,a){return Ra(oo(e),oo(a))}function oo(e){if(pe(e)){const a={};for(let n=0;n<e.length;n++)a[e[n]]=e[n];return a}return e}function gt(e,a){return e?[...new Set([].concat(e,a))]:a}function Ra(e,a){return e?Qe(Object.create(null),e,a):a}function Ys(e,a){return e?pe(e)&&pe(a)?[...new Set([...e,...a])]:Qe(Object.create(null),tl(e),tl(a??{})):a}function tg(e,a){if(!e)return a;if(!a)return e;const n=Qe(Object.create(null),e);for(const o in a)n[o]=gt(e[o],a[o]);return n}function Ld(){return{app:null,config:{isNativeTag:dp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ig=0;function ag(e,a){return function(o,r=null){Se(o)||(o=Qe({},o)),r!=null&&!qe(r)&&(r=null);const c=Ld(),m=new WeakSet;let p=!1;const s=c.app={_uid:ig++,_component:o,_props:r,_container:null,_context:c,_instance:null,version:Zd,get config(){return c.config},set config(u){},use(u,...f){return m.has(u)||(u&&Se(u.install)?(m.add(u),u.install(s,...f)):Se(u)&&(m.add(u),u(s,...f))),s},mixin(u){return c.mixins.includes(u)||c.mixins.push(u),s},component(u,f){return f?(c.components[u]=f,s):c.components[u]},directive(u,f){return f?(c.directives[u]=f,s):c.directives[u]},mount(u,f,d){if(!p){const h=t(o,r);return h.appContext=c,d===!0?d="svg":d===!1&&(d=void 0),f&&a?a(h,u):e(h,u,d),p=!0,s._container=u,u.__vue_app__=s,_n(h.component)||h.component.proxy}},unmount(){p&&(e(null,s._container),delete s._container.__vue_app__)},provide(u,f){return c.provides[u]=f,s},runWithContext(u){il=s;try{return u()}finally{il=null}}};return s}}let il=null;function ut(e,a){if(lt){let n=lt.provides;const o=lt.parent&&lt.parent.provides;o===n&&(n=lt.provides=Object.create(o)),n[e]=a}}function Ve(e,a,n=!1){const o=lt||it;if(o||il){const r=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:il._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&Se(a)?a.call(o&&o.proxy):a}}function lg(){return!!(lt||it||il)}function ng(e,a,n,o=!1){const r={},c={};Dl(c,hn,1),e.propsDefaults=Object.create(null),Dd(e,a,r,c);for(const m in e.propsOptions[0])m in r||(r[m]=void 0);n?e.props=o?r:Xc(r):e.type.props?e.props=r:e.props=c,e.attrs=c}function og(e,a,n,o){const{props:r,attrs:c,vnode:{patchFlag:m}}=e,p=Ee(r),[s]=e.propsOptions;let u=!1;if((o||m>0)&&!(m&16)){if(m&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let h=f[d];if(rn(e.emitsOptions,h))continue;const v=a[h];if(s)if(Pe(c,h))v!==c[h]&&(c[h]=v,u=!0);else{const _=ht(h);r[_]=so(s,p,_,v,e,!1)}else v!==c[h]&&(c[h]=v,u=!0)}}}else{Dd(e,a,r,c)&&(u=!0);let f;for(const d in p)(!a||!Pe(a,d)&&((f=$t(d))===d||!Pe(a,f)))&&(s?n&&(n[d]!==void 0||n[f]!==void 0)&&(r[d]=so(s,p,d,void 0,e,!0)):delete r[d]);if(c!==p)for(const d in c)(!a||!Pe(a,d))&&(delete c[d],u=!0)}u&&Xt(e,"set","$attrs")}function Dd(e,a,n,o){const[r,c]=e.propsOptions;let m=!1,p;if(a)for(let s in a){if(Va(s))continue;const u=a[s];let f;r&&Pe(r,f=ht(s))?!c||!c.includes(f)?n[f]=u:(p||(p={}))[f]=u:rn(e.emitsOptions,s)||(!(s in o)||u!==o[s])&&(o[s]=u,m=!0)}if(c){const s=Ee(n),u=p||je;for(let f=0;f<c.length;f++){const d=c[f];n[d]=so(r,s,d,u[d],e,!Pe(u,d))}}return m}function so(e,a,n,o,r,c){const m=e[n];if(m!=null){const p=Pe(m,"default");if(p&&o===void 0){const s=m.default;if(m.type!==Function&&!m.skipFactory&&Se(s)){const{propsDefaults:u}=r;if(n in u)o=u[n];else{const f=Hi(r);o=u[n]=s.call(null,a),f()}}else o=s}m[0]&&(c&&!p?o=!1:m[1]&&(o===""||o===$t(n))&&(o=!0))}return o}function Id(e,a,n=!1){const o=a.propsCache,r=o.get(e);if(r)return r;const c=e.props,m={},p=[];let s=!1;if(!Se(e)){const f=d=>{s=!0;const[h,v]=Id(d,a,!0);Qe(m,h),v&&p.push(...v)};!n&&a.mixins.length&&a.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!c&&!s)return qe(e)&&o.set(e,ta),ta;if(pe(c))for(let f=0;f<c.length;f++){const d=ht(c[f]);Js(d)&&(m[d]=je)}else if(c)for(const f in c){const d=ht(f);if(Js(d)){const h=c[f],v=m[d]=pe(h)||Se(h)?{type:h}:Qe({},h);if(v){const _=Xs(Boolean,v.type),C=Xs(String,v.type);v[0]=_>-1,v[1]=C<0||_<C,(_>-1||Pe(v,"default"))&&p.push(d)}}}const u=[m,p];return qe(e)&&o.set(e,u),u}function Js(e){return e[0]!=="$"}function Ws(e){const a=e&&e.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:e===null?"null":""}function Ks(e,a){return Ws(e)===Ws(a)}function Xs(e,a){return pe(a)?a.findIndex(n=>Ks(n,e)):Se(a)&&Ks(a,e)?0:-1}const Ed=e=>e[0]==="_"||e==="$stable",fs=e=>pe(e)?e.map(kt):[kt(e)],sg=(e,a,n)=>{if(a._n)return a;const o=i((...r)=>fs(a(...r)),n);return o._c=!1,o},Rd=(e,a,n)=>{const o=e._ctx;for(const r in e){if(Ed(r))continue;const c=e[r];if(Se(c))a[r]=sg(r,c,o);else if(c!=null){const m=fs(c);a[r]=()=>m}}},zd=(e,a)=>{const n=fs(a);e.slots.default=()=>n},rg=(e,a)=>{if(e.vnode.shapeFlag&32){const n=a._;n?(e.slots=Ee(a),Dl(a,"_",n)):Rd(a,e.slots={})}else e.slots={},a&&zd(e,a);Dl(e.slots,hn,1)},ug=(e,a,n)=>{const{vnode:o,slots:r}=e;let c=!0,m=je;if(o.shapeFlag&32){const p=a._;p?n&&p===1?c=!1:(Qe(r,a),!n&&p===1&&delete r._):(c=!a.$stable,Rd(a,r)),m=a}else a&&(zd(e,a),m={default:1});if(c)for(const p in r)!Ed(p)&&m[p]==null&&delete r[p]};function Fl(e,a,n,o,r=!1){if(pe(e)){e.forEach((h,v)=>Fl(h,a&&(pe(a)?a[v]:a),n,o,r));return}if(Ri(o)&&!r)return;const c=o.shapeFlag&4?_n(o.component)||o.component.proxy:o.el,m=r?null:c,{i:p,r:s}=e,u=a&&a.r,f=p.refs===je?p.refs={}:p.refs,d=p.setupState;if(u!=null&&u!==s&&(Ze(u)?(f[u]=null,Pe(d,u)&&(d[u]=null)):ct(u)&&(u.value=null)),Se(s))Qt(s,p,12,[m,f]);else{const h=Ze(s),v=ct(s),_=e.f;if(h||v){const C=()=>{if(_){const k=h?Pe(d,s)?d[s]:f[s]:s.value;r?pe(k)&&No(k,c):pe(k)?k.includes(c)||k.push(c):h?(f[s]=[c],Pe(d,s)&&(d[s]=f[s])):(s.value=[c],e.k&&(f[e.k]=s.value))}else h?(f[s]=m,Pe(d,s)&&(d[s]=m)):v&&(s.value=m,e.k&&(f[e.k]=m))};r||_?C():(C.id=-1,rt(C,n))}}}let ni=!1;const cg=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",dg=e=>e.namespaceURI.includes("MathML"),yl=e=>{if(cg(e))return"svg";if(dg(e))return"mathml"},Sl=e=>e.nodeType===8;function mg(e){const{mt:a,p:n,o:{patchProp:o,createText:r,nextSibling:c,parentNode:m,remove:p,insert:s,createComment:u}}=e,f=(w,x)=>{if(!x.hasChildNodes()){n(null,w,x),zl(),x._vnode=w;return}ni=!1,d(x.firstChild,w,null,null,null),zl(),x._vnode=w,ni&&console.error("Hydration completed but contains mismatches.")},d=(w,x,$,D,F,V=!1)=>{const z=Sl(w)&&w.data==="[",j=()=>C(w,x,$,D,F,z),{type:K,ref:U,shapeFlag:me,patchFlag:Te}=x;let G=w.nodeType;x.el=w,Te===-2&&(V=!1,x.dynamicChildren=null);let W=null;switch(K){case Mi:G!==3?x.children===""?(s(x.el=r(""),m(w),w),W=w):W=j():(w.data!==x.children&&(ni=!0,w.data=x.children),W=c(w));break;case ft:b(w)?(W=c(w),B(x.el=w.content.firstChild,w,$)):G!==8||z?W=j():W=c(w);break;case zi:if(z&&(w=c(w),G=w.nodeType),G===1||G===3){W=w;const ce=!x.children.length;for(let ie=0;ie<x.staticCount;ie++)ce&&(x.children+=W.nodeType===1?W.outerHTML:W.data),ie===x.staticCount-1&&(x.anchor=W),W=c(W);return z?c(W):W}else j();break;case Ce:z?W=_(w,x,$,D,F,V):W=j();break;default:if(me&1)(G!==1||x.type.toLowerCase()!==w.tagName.toLowerCase())&&!b(w)?W=j():W=h(w,x,$,D,F,V);else if(me&6){x.slotScopeIds=F;const ce=m(w);if(z?W=k(w):Sl(w)&&w.data==="teleport start"?W=k(w,w.data,"teleport end"):W=c(w),a(x,ce,null,$,D,yl(ce),V),Ri(x)){let ie;z?(ie=t(Ce),ie.anchor=W?W.previousSibling:ce.lastChild):ie=w.nodeType===3?l(""):t("div"),ie.el=w,x.component.subTree=ie}}else me&64?G!==8?W=j():W=x.type.hydrate(w,x,$,D,F,V,e,v):me&128&&(W=x.type.hydrate(w,x,$,D,yl(m(w)),F,V,e,d))}return U!=null&&Fl(U,null,D,x),W},h=(w,x,$,D,F,V)=>{V=V||!!x.dynamicChildren;const{type:z,props:j,patchFlag:K,shapeFlag:U,dirs:me,transition:Te}=x,G=z==="input"||z==="option";if(G||K!==-1){me&&jt(x,null,$,"created");let W=!1;if(b(w)){W=Vd(D,Te)&&$&&$.vnode.props&&$.vnode.props.appear;const ie=w.content.firstChild;W&&Te.beforeEnter(ie),B(ie,w,$),x.el=w=ie}if(U&16&&!(j&&(j.innerHTML||j.textContent))){let ie=v(w.firstChild,x,w,$,D,F,V);for(;ie;){ni=!0;const Le=ie;ie=ie.nextSibling,p(Le)}}else U&8&&w.textContent!==x.children&&(ni=!0,w.textContent=x.children);if(j)if(G||!V||K&48)for(const ie in j)(G&&(ie.endsWith("value")||ie==="indeterminate")||nl(ie)&&!Va(ie)||ie[0]===".")&&o(w,ie,null,j[ie],void 0,void 0,$);else j.onClick&&o(w,"onClick",null,j.onClick,void 0,void 0,$);let ce;(ce=j&&j.onVnodeBeforeMount)&&_t(ce,$,x),me&&jt(x,null,$,"beforeMount"),((ce=j&&j.onVnodeMounted)||me||W)&&dd(()=>{ce&&_t(ce,$,x),W&&Te.enter(w),me&&jt(x,null,$,"mounted")},D)}return w.nextSibling},v=(w,x,$,D,F,V,z)=>{z=z||!!x.dynamicChildren;const j=x.children,K=j.length;for(let U=0;U<K;U++){const me=z?j[U]:j[U]=kt(j[U]);if(w)w=d(w,me,D,F,V,z);else{if(me.type===Mi&&!me.children)continue;ni=!0,n(null,me,$,null,D,F,yl($),V)}}return w},_=(w,x,$,D,F,V)=>{const{slotScopeIds:z}=x;z&&(F=F?F.concat(z):z);const j=m(w),K=v(c(w),x,j,$,D,F,V);return K&&Sl(K)&&K.data==="]"?c(x.anchor=K):(ni=!0,s(x.anchor=u("]"),j,K),K)},C=(w,x,$,D,F,V)=>{if(ni=!0,x.el=null,V){const K=k(w);for(;;){const U=c(w);if(U&&U!==K)p(U);else break}}const z=c(w),j=m(w);return p(w),n(null,x,j,z,$,D,yl(j),F),z},k=(w,x="[",$="]")=>{let D=0;for(;w;)if(w=c(w),w&&Sl(w)&&(w.data===x&&D++,w.data===$)){if(D===0)return c(w);D--}return w},B=(w,x,$)=>{const D=x.parentNode;D&&D.replaceChild(w,x);let F=$;for(;F;)F.vnode.el===x&&(F.vnode.el=F.subTree.el=w),F=F.parent},b=w=>w.nodeType===1&&w.tagName.toLowerCase()==="template";return[f,d]}const rt=dd;function Pd(e){return Md(e)}function Fd(e){return Md(e,mg)}function Md(e,a){const n=Ic();n.__VUE__=!0;const{insert:o,remove:r,patchProp:c,createElement:m,createText:p,createComment:s,setText:u,setElementText:f,parentNode:d,nextSibling:h,setScopeId:v=vt,insertStaticContent:_}=e,C=(L,R,O,X=null,Z=null,ne=null,ue=void 0,le=null,oe=!!R.dynamicChildren)=>{if(L===R)return;L&&!Vt(L,R)&&(X=se(L),Ue(L,Z,ne,!0),L=null),R.patchFlag===-2&&(oe=!1,R.dynamicChildren=null);const{type:te,ref:de,shapeFlag:ve}=R;switch(te){case Mi:k(L,R,O,X);break;case ft:B(L,R,O,X);break;case zi:L==null&&b(R,O,X,ue);break;case Ce:U(L,R,O,X,Z,ne,ue,le,oe);break;default:ve&1?$(L,R,O,X,Z,ne,ue,le,oe):ve&6?me(L,R,O,X,Z,ne,ue,le,oe):(ve&64||ve&128)&&te.process(L,R,O,X,Z,ne,ue,le,oe,Oe)}de!=null&&Z&&Fl(de,L&&L.ref,ne,R||L,!R)},k=(L,R,O,X)=>{if(L==null)o(R.el=p(R.children),O,X);else{const Z=R.el=L.el;R.children!==L.children&&u(Z,R.children)}},B=(L,R,O,X)=>{L==null?o(R.el=s(R.children||""),O,X):R.el=L.el},b=(L,R,O,X)=>{[L.el,L.anchor]=_(L.children,R,O,X,L.el,L.anchor)},w=({el:L,anchor:R},O,X)=>{let Z;for(;L&&L!==R;)Z=h(L),o(L,O,X),L=Z;o(R,O,X)},x=({el:L,anchor:R})=>{let O;for(;L&&L!==R;)O=h(L),r(L),L=O;r(R)},$=(L,R,O,X,Z,ne,ue,le,oe)=>{R.type==="svg"?ue="svg":R.type==="math"&&(ue="mathml"),L==null?D(R,O,X,Z,ne,ue,le,oe):z(L,R,Z,ne,ue,le,oe)},D=(L,R,O,X,Z,ne,ue,le)=>{let oe,te;const{props:de,shapeFlag:ve,transition:be,dirs:Ae}=L;if(oe=L.el=m(L.type,ne,de&&de.is,de),ve&8?f(oe,L.children):ve&16&&V(L.children,oe,null,X,Z,In(L,ne),ue,le),Ae&&jt(L,null,X,"created"),F(oe,L,L.scopeId,ue,X),de){for(const Ge in de)Ge!=="value"&&!Va(Ge)&&c(oe,Ge,null,de[Ge],ne,L.children,X,Z,re);"value"in de&&c(oe,"value",null,de.value,ne),(te=de.onVnodeBeforeMount)&&_t(te,X,L)}Ae&&jt(L,null,X,"beforeMount");const De=Vd(Z,be);De&&be.beforeEnter(oe),o(oe,R,O),((te=de&&de.onVnodeMounted)||De||Ae)&&rt(()=>{te&&_t(te,X,L),De&&be.enter(oe),Ae&&jt(L,null,X,"mounted")},Z)},F=(L,R,O,X,Z)=>{if(O&&v(L,O),X)for(let ne=0;ne<X.length;ne++)v(L,X[ne]);if(Z){let ne=Z.subTree;if(R===ne){const ue=Z.vnode;F(L,ue,ue.scopeId,ue.slotScopeIds,Z.parent)}}},V=(L,R,O,X,Z,ne,ue,le,oe=0)=>{for(let te=oe;te<L.length;te++){const de=L[te]=le?di(L[te]):kt(L[te]);C(null,de,R,O,X,Z,ne,ue,le)}},z=(L,R,O,X,Z,ne,ue)=>{const le=R.el=L.el;let{patchFlag:oe,dynamicChildren:te,dirs:de}=R;oe|=L.patchFlag&16;const ve=L.props||je,be=R.props||je;let Ae;if(O&&ki(O,!1),(Ae=be.onVnodeBeforeUpdate)&&_t(Ae,O,R,L),de&&jt(R,L,O,"beforeUpdate"),O&&ki(O,!0),te?j(L.dynamicChildren,te,le,O,X,In(R,Z),ne):ue||ie(L,R,le,null,O,X,In(R,Z),ne,!1),oe>0){if(oe&16)K(le,R,ve,be,O,X,Z);else if(oe&2&&ve.class!==be.class&&c(le,"class",null,be.class,Z),oe&4&&c(le,"style",ve.style,be.style,Z),oe&8){const De=R.dynamicProps;for(let Ge=0;Ge<De.length;Ge++){const Ke=De[Ge],ot=ve[Ke],Pt=be[Ke];(Pt!==ot||Ke==="value")&&c(le,Ke,ot,Pt,Z,L.children,O,X,re)}}oe&1&&L.children!==R.children&&f(le,R.children)}else!ue&&te==null&&K(le,R,ve,be,O,X,Z);((Ae=be.onVnodeUpdated)||de)&&rt(()=>{Ae&&_t(Ae,O,R,L),de&&jt(R,L,O,"updated")},X)},j=(L,R,O,X,Z,ne,ue)=>{for(let le=0;le<R.length;le++){const oe=L[le],te=R[le],de=oe.el&&(oe.type===Ce||!Vt(oe,te)||oe.shapeFlag&70)?d(oe.el):O;C(oe,te,de,null,X,Z,ne,ue,!0)}},K=(L,R,O,X,Z,ne,ue)=>{if(O!==X){if(O!==je)for(const le in O)!Va(le)&&!(le in X)&&c(L,le,O[le],null,ue,R.children,Z,ne,re);for(const le in X){if(Va(le))continue;const oe=X[le],te=O[le];oe!==te&&le!=="value"&&c(L,le,te,oe,ue,R.children,Z,ne,re)}"value"in X&&c(L,"value",O.value,X.value,ue)}},U=(L,R,O,X,Z,ne,ue,le,oe)=>{const te=R.el=L?L.el:p(""),de=R.anchor=L?L.anchor:p("");let{patchFlag:ve,dynamicChildren:be,slotScopeIds:Ae}=R;Ae&&(le=le?le.concat(Ae):Ae),L==null?(o(te,O,X),o(de,O,X),V(R.children||[],O,de,Z,ne,ue,le,oe)):ve>0&&ve&64&&be&&L.dynamicChildren?(j(L.dynamicChildren,be,O,Z,ne,ue,le),(R.key!=null||Z&&R===Z.subTree)&&gs(L,R,!0)):ie(L,R,O,de,Z,ne,ue,le,oe)},me=(L,R,O,X,Z,ne,ue,le,oe)=>{R.slotScopeIds=le,L==null?R.shapeFlag&512?Z.ctx.activate(R,O,X,ue,oe):Te(R,O,X,Z,ne,ue,oe):G(L,R,oe)},Te=(L,R,O,X,Z,ne,ue)=>{const le=L.component=Yd(L,X,Z);if(cl(L)&&(le.ctx.renderer=Oe),Wd(le),le.asyncDep){if(Z&&Z.registerDep(le,W),!L.el){const oe=le.subTree=t(ft);B(null,oe,R,O)}}else W(le,L,R,O,Z,ne,ue)},G=(L,R,O)=>{const X=R.component=L.component;if(Sf(L,R,O))if(X.asyncDep&&!X.asyncResolved){ce(X,R,O);return}else X.next=R,ff(X.update),X.effect.dirty=!0,X.update();else R.el=L.el,X.vnode=R},W=(L,R,O,X,Z,ne,ue)=>{const le=()=>{if(L.isMounted){let{next:de,bu:ve,u:be,parent:Ae,vnode:De}=L;{const Wi=Hd(L);if(Wi){de&&(de.el=De.el,ce(L,de,ue)),Wi.asyncDep.then(()=>{L.isUnmounted||le()});return}}let Ge=de,Ke;ki(L,!1),de?(de.el=De.el,ce(L,de,ue)):de=De,ve&&aa(ve),(Ke=de.props&&de.props.onVnodeBeforeUpdate)&&_t(Ke,Ae,de,De),ki(L,!0);const ot=Bl(L),Pt=L.subTree;L.subTree=ot,C(Pt,ot,d(Pt.el),se(Pt),L,Z,ne),de.el=ot.el,Ge===null&&ls(L,ot.el),be&&rt(be,Z),(Ke=de.props&&de.props.onVnodeUpdated)&&rt(()=>_t(Ke,Ae,de,De),Z)}else{let de;const{el:ve,props:be}=R,{bm:Ae,m:De,parent:Ge}=L,Ke=Ri(R);if(ki(L,!1),Ae&&aa(Ae),!Ke&&(de=be&&be.onVnodeBeforeMount)&&_t(de,Ge,R),ki(L,!0),ve&&$e){const ot=()=>{L.subTree=Bl(L),$e(ve,L.subTree,L,Z,null)};Ke?R.type.__asyncLoader().then(()=>!L.isUnmounted&&ot()):ot()}else{const ot=L.subTree=Bl(L);C(null,ot,O,X,L,Z,ne),R.el=ot.el}if(De&&rt(De,Z),!Ke&&(de=be&&be.onVnodeMounted)){const ot=R;rt(()=>_t(de,Ge,ot),Z)}(R.shapeFlag&256||Ge&&Ri(Ge.vnode)&&Ge.vnode.shapeFlag&256)&&L.a&&rt(L.a,Z),L.isMounted=!0,R=O=X=null}},oe=L.effect=new ma(le,vt,()=>sn(te),L.scope),te=L.update=()=>{oe.dirty&&oe.run()};te.id=L.uid,ki(L,!0),te()},ce=(L,R,O)=>{R.component=L;const X=L.vnode.props;L.vnode=R,L.next=null,og(L,R.props,X,O),ug(L,R.children,O),Gi(),Hs(L),qi()},ie=(L,R,O,X,Z,ne,ue,le,oe=!1)=>{const te=L&&L.children,de=L?L.shapeFlag:0,ve=R.children,{patchFlag:be,shapeFlag:Ae}=R;if(be>0){if(be&128){We(te,ve,O,X,Z,ne,ue,le,oe);return}else if(be&256){Le(te,ve,O,X,Z,ne,ue,le,oe);return}}Ae&8?(de&16&&re(te,Z,ne),ve!==te&&f(O,ve)):de&16?Ae&16?We(te,ve,O,X,Z,ne,ue,le,oe):re(te,Z,ne,!0):(de&8&&f(O,""),Ae&16&&V(ve,O,X,Z,ne,ue,le,oe))},Le=(L,R,O,X,Z,ne,ue,le,oe)=>{L=L||ta,R=R||ta;const te=L.length,de=R.length,ve=Math.min(te,de);let be;for(be=0;be<ve;be++){const Ae=R[be]=oe?di(R[be]):kt(R[be]);C(L[be],Ae,O,null,Z,ne,ue,le,oe)}te>de?re(L,Z,ne,!0,!1,ve):V(R,O,X,Z,ne,ue,le,oe,ve)},We=(L,R,O,X,Z,ne,ue,le,oe)=>{let te=0;const de=R.length;let ve=L.length-1,be=de-1;for(;te<=ve&&te<=be;){const Ae=L[te],De=R[te]=oe?di(R[te]):kt(R[te]);if(Vt(Ae,De))C(Ae,De,O,null,Z,ne,ue,le,oe);else break;te++}for(;te<=ve&&te<=be;){const Ae=L[ve],De=R[be]=oe?di(R[be]):kt(R[be]);if(Vt(Ae,De))C(Ae,De,O,null,Z,ne,ue,le,oe);else break;ve--,be--}if(te>ve){if(te<=be){const Ae=be+1,De=Ae<de?R[Ae].el:X;for(;te<=be;)C(null,R[te]=oe?di(R[te]):kt(R[te]),O,De,Z,ne,ue,le,oe),te++}}else if(te>be)for(;te<=ve;)Ue(L[te],Z,ne,!0),te++;else{const Ae=te,De=te,Ge=new Map;for(te=De;te<=be;te++){const Ct=R[te]=oe?di(R[te]):kt(R[te]);Ct.key!=null&&Ge.set(Ct.key,te)}let Ke,ot=0;const Pt=be-De+1;let Wi=!1,Bs=0;const $a=new Array(Pt);for(te=0;te<Pt;te++)$a[te]=0;for(te=Ae;te<=ve;te++){const Ct=L[te];if(ot>=Pt){Ue(Ct,Z,ne,!0);continue}let Ot;if(Ct.key!=null)Ot=Ge.get(Ct.key);else for(Ke=De;Ke<=be;Ke++)if($a[Ke-De]===0&&Vt(Ct,R[Ke])){Ot=Ke;break}Ot===void 0?Ue(Ct,Z,ne,!0):($a[Ot-De]=te+1,Ot>=Bs?Bs=Ot:Wi=!0,C(Ct,R[Ot],O,null,Z,ne,ue,le,oe),ot++)}const Ts=Wi?pg($a):ta;for(Ke=Ts.length-1,te=Pt-1;te>=0;te--){const Ct=De+te,Ot=R[Ct],Ls=Ct+1<de?R[Ct+1].el:X;$a[te]===0?C(null,Ot,O,Ls,Z,ne,ue,le,oe):Wi&&(Ke<0||te!==Ts[Ke]?nt(Ot,O,Ls,2):Ke--)}}},nt=(L,R,O,X,Z=null)=>{const{el:ne,type:ue,transition:le,children:oe,shapeFlag:te}=L;if(te&6){nt(L.component.subTree,R,O,X);return}if(te&128){L.suspense.move(R,O,X);return}if(te&64){ue.move(L,R,O,Oe);return}if(ue===Ce){o(ne,R,O);for(let ve=0;ve<oe.length;ve++)nt(oe[ve],R,O,X);o(L.anchor,R,O);return}if(ue===zi){w(L,R,O);return}if(X!==2&&te&1&&le)if(X===0)le.beforeEnter(ne),o(ne,R,O),rt(()=>le.enter(ne),Z);else{const{leave:ve,delayLeave:be,afterLeave:Ae}=le,De=()=>o(ne,R,O),Ge=()=>{ve(ne,()=>{De(),Ae&&Ae()})};be?be(ne,De,Ge):Ge()}else o(ne,R,O)},Ue=(L,R,O,X=!1,Z=!1)=>{const{type:ne,props:ue,ref:le,children:oe,dynamicChildren:te,shapeFlag:de,patchFlag:ve,dirs:be}=L;if(le!=null&&Fl(le,null,O,L,!0),de&256){R.ctx.deactivate(L);return}const Ae=de&1&&be,De=!Ri(L);let Ge;if(De&&(Ge=ue&&ue.onVnodeBeforeUnmount)&&_t(Ge,R,L),de&6)Y(L.component,O,X);else{if(de&128){L.suspense.unmount(O,X);return}Ae&&jt(L,null,R,"beforeUnmount"),de&64?L.type.remove(L,R,O,Z,Oe,X):te&&(ne!==Ce||ve>0&&ve&64)?re(te,R,O,!1,!0):(ne===Ce&&ve&384||!Z&&de&16)&&re(oe,R,O),X&&Yt(L)}(De&&(Ge=ue&&ue.onVnodeUnmounted)||Ae)&&rt(()=>{Ge&&_t(Ge,R,L),Ae&&jt(L,null,R,"unmounted")},O)},Yt=L=>{const{type:R,el:O,anchor:X,transition:Z}=L;if(R===Ce){Lt(O,X);return}if(R===zi){x(L);return}const ne=()=>{r(O),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(L.shapeFlag&1&&Z&&!Z.persisted){const{leave:ue,delayLeave:le}=Z,oe=()=>ue(O,ne);le?le(L.el,ne,oe):oe()}else ne()},Lt=(L,R)=>{let O;for(;L!==R;)O=h(L),r(L),L=O;r(R)},Y=(L,R,O)=>{const{bum:X,scope:Z,update:ne,subTree:ue,um:le}=L;X&&aa(X),Z.stop(),ne&&(ne.active=!1,Ue(ue,L,R,O)),le&&rt(le,R),rt(()=>{L.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&L.asyncDep&&!L.asyncResolved&&L.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},re=(L,R,O,X=!1,Z=!1,ne=0)=>{for(let ue=ne;ue<L.length;ue++)Ue(L[ue],R,O,X,Z)},se=L=>L.shapeFlag&6?se(L.component.subTree):L.shapeFlag&128?L.suspense.next():h(L.anchor||L.el);let he=!1;const Ne=(L,R,O)=>{L==null?R._vnode&&Ue(R._vnode,null,null,!0):C(R._vnode||null,L,R,null,null,null,O),he||(he=!0,Hs(),zl(),he=!1),R._vnode=L},Oe={p:C,um:Ue,m:nt,r:Yt,mt:Te,mc:V,pc:ie,pbc:j,n:se,o:e};let xe,$e;return a&&([xe,$e]=a(Oe)),{render:Ne,hydrate:xe,createApp:ag(Ne,xe)}}function In({type:e,props:a},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&a&&a.encoding&&a.encoding.includes("html")?void 0:n}function ki({effect:e,update:a},n){e.allowRecurse=a.allowRecurse=n}function Vd(e,a){return(!e||e&&!e.pendingBranch)&&a&&!a.persisted}function gs(e,a,n=!1){const o=e.children,r=a.children;if(pe(o)&&pe(r))for(let c=0;c<o.length;c++){const m=o[c];let p=r[c];p.shapeFlag&1&&!p.dynamicChildren&&((p.patchFlag<=0||p.patchFlag===32)&&(p=r[c]=di(r[c]),p.el=m.el),n||gs(m,p)),p.type===Mi&&(p.el=m.el)}}function pg(e){const a=e.slice(),n=[0];let o,r,c,m,p;const s=e.length;for(o=0;o<s;o++){const u=e[o];if(u!==0){if(r=n[n.length-1],e[r]<u){a[o]=r,n.push(o);continue}for(c=0,m=n.length-1;c<m;)p=c+m>>1,e[n[p]]<u?c=p+1:m=p;u<e[n[c]]&&(c>0&&(a[o]=n[c-1]),n[c]=o)}}for(c=n.length,m=n[c-1];c-- >0;)n[c]=m,m=a[m];return n}function Hd(e){const a=e.subTree.component;if(a)return a.asyncDep&&!a.asyncResolved?a:Hd(a)}const fg=e=>e.__isTeleport,Oa=e=>e&&(e.disabled||e.disabled===""),Qs=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Zs=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,ro=(e,a)=>{const n=e&&e.to;return Ze(n)?a?a(n):null:n},gg={name:"Teleport",__isTeleport:!0,process(e,a,n,o,r,c,m,p,s,u){const{mc:f,pc:d,pbc:h,o:{insert:v,querySelector:_,createText:C,createComment:k}}=u,B=Oa(a.props);let{shapeFlag:b,children:w,dynamicChildren:x}=a;if(e==null){const $=a.el=C(""),D=a.anchor=C("");v($,n,o),v(D,n,o);const F=a.target=ro(a.props,_),V=a.targetAnchor=C("");F&&(v(V,F),m==="svg"||Qs(F)?m="svg":(m==="mathml"||Zs(F))&&(m="mathml"));const z=(j,K)=>{b&16&&f(w,j,K,r,c,m,p,s)};B?z(n,D):F&&z(F,V)}else{a.el=e.el;const $=a.anchor=e.anchor,D=a.target=e.target,F=a.targetAnchor=e.targetAnchor,V=Oa(e.props),z=V?n:D,j=V?$:F;if(m==="svg"||Qs(D)?m="svg":(m==="mathml"||Zs(D))&&(m="mathml"),x?(h(e.dynamicChildren,x,z,r,c,m,p),gs(e,a,!0)):s||d(e,a,z,j,r,c,m,p,!1),B)V?a.props&&e.props&&a.props.to!==e.props.to&&(a.props.to=e.props.to):wl(a,n,$,u,1);else if((a.props&&a.props.to)!==(e.props&&e.props.to)){const K=a.target=ro(a.props,_);K&&wl(a,K,null,u,0)}else V&&wl(a,D,F,u,1)}Nd(a)},remove(e,a,n,o,{um:r,o:{remove:c}},m){const{shapeFlag:p,children:s,anchor:u,targetAnchor:f,target:d,props:h}=e;if(d&&c(f),m&&c(u),p&16){const v=m||!Oa(h);for(let _=0;_<s.length;_++){const C=s[_];r(C,a,n,v,!!C.dynamicChildren)}}},move:wl,hydrate:hg};function wl(e,a,n,{o:{insert:o},m:r},c=2){c===0&&o(e.targetAnchor,a,n);const{el:m,anchor:p,shapeFlag:s,children:u,props:f}=e,d=c===2;if(d&&o(m,a,n),(!d||Oa(f))&&s&16)for(let h=0;h<u.length;h++)r(u[h],a,n,2);d&&o(p,a,n)}function hg(e,a,n,o,r,c,{o:{nextSibling:m,parentNode:p,querySelector:s}},u){const f=a.target=ro(a.props,s);if(f){const d=f._lpa||f.firstChild;if(a.shapeFlag&16)if(Oa(a.props))a.anchor=u(m(e),a,p(e),n,o,r,c),a.targetAnchor=d;else{a.anchor=m(e);let h=d;for(;h;)if(h=m(h),h&&h.nodeType===8&&h.data==="teleport anchor"){a.targetAnchor=h,f._lpa=a.targetAnchor&&m(a.targetAnchor);break}u(d,a,f,n,o,r,c)}Nd(a)}return a.anchor&&m(a.anchor)}const gn=gg;function Nd(e){const a=e.ctx;if(a&&a.ut){let n=e.children[0].el;for(;n&&n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",a.uid),n=n.nextSibling;a.ut()}}const Ce=Symbol.for("v-fgt"),Mi=Symbol.for("v-txt"),ft=Symbol.for("v-cmt"),zi=Symbol.for("v-stc"),ja=[];let yt=null;function T(e=!1){ja.push(yt=e?null:[])}function Od(){ja.pop(),yt=ja[ja.length-1]||null}let Vi=1;function uo(e){Vi+=e}function jd(e){return e.dynamicChildren=Vi>0?yt||ta:null,Od(),Vi>0&&yt&&yt.push(e),e}function ge(e,a,n,o,r,c){return jd(S(e,a,n,o,r,c,!0))}function I(e,a,n,o,r){return jd(t(e,a,n,o,r,!0))}function zt(e){return e?e.__v_isVNode===!0:!1}function Vt(e,a){return e.type===a.type&&e.key===a.key}function _g(e){}const hn="__vInternal",Gd=({key:e})=>e??null,Tl=({ref:e,ref_key:a,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ze(e)||ct(e)||Se(e)?{i:it,r:e,k:a,f:!!n}:e:null);function S(e,a=null,n=null,o=0,r=null,c=e===Ce?0:1,m=!1,p=!1){const s={__v_isVNode:!0,__v_skip:!0,type:e,props:a,key:a&&Gd(a),ref:a&&Tl(a),scopeId:un,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:c,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:it};return p?(hs(s,n),c&128&&e.normalize(s)):n&&(s.shapeFlag|=Ze(n)?8:16),Vi>0&&!m&&yt&&(s.patchFlag>0||c&6)&&s.patchFlag!==32&&yt.push(s),s}const t=bg;function bg(e,a=null,n=null,o=0,r=null,c=!1){if((!e||e===rd)&&(e=ft),zt(e)){const p=qt(e,a,!0);return n&&hs(p,n),Vi>0&&!c&&yt&&(p.shapeFlag&6?yt[yt.indexOf(e)]=p:yt.push(p)),p.patchFlag|=-2,p}if(xg(e)&&(e=e.__vccOpts),a){a=qd(a);let{class:p,style:s}=a;p&&!Ze(p)&&(a.class=sl(p)),qe(s)&&(Ko(s)&&!pe(s)&&(s=Qe({},s)),a.style=Ca(s))}const m=Ze(e)?1:cd(e)?128:fg(e)?64:qe(e)?4:Se(e)?2:0;return S(e,a,n,o,r,m,c,!0)}function qd(e){return e?Ko(e)||hn in e?Qe({},e):e:null}function qt(e,a,n=!1){const{props:o,ref:r,patchFlag:c,children:m}=e,p=a?Ji(o||{},a):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Gd(p),ref:a&&a.ref?n&&r?pe(r)?r.concat(Tl(a)):[r,Tl(a)]:Tl(a):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:m,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:a&&e.type!==Ce?c===-1?16:c|16:c,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&qt(e.ssContent),ssFallback:e.ssFallback&&qt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function l(e=" ",a=0){return t(Mi,null,e,a)}function vg(e,a){const n=t(zi,null,e);return n.staticCount=a,n}function Ud(e="",a=!1){return a?(T(),I(ft,null,e)):t(ft,null,e)}function kt(e){return e==null||typeof e=="boolean"?t(ft):pe(e)?t(Ce,null,e.slice()):typeof e=="object"?di(e):t(Mi,null,String(e))}function di(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:qt(e)}function hs(e,a){let n=0;const{shapeFlag:o}=e;if(a==null)a=null;else if(pe(a))n=16;else if(typeof a=="object")if(o&65){const r=a.default;r&&(r._c&&(r._d=!1),hs(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=a._;!r&&!(hn in a)?a._ctx=it:r===3&&it&&(it.slots._===1?a._=1:(a._=2,e.patchFlag|=1024))}else Se(a)?(a={default:a,_ctx:it},n=32):(a=String(a),o&64?(n=16,a=[l(a)]):n=8);e.children=a,e.shapeFlag|=n}function Ji(...e){const a={};for(let n=0;n<e.length;n++){const o=e[n];for(const r in o)if(r==="class")a.class!==o.class&&(a.class=sl([a.class,o.class]));else if(r==="style")a.style=Ca([a.style,o.style]);else if(nl(r)){const c=a[r],m=o[r];m&&c!==m&&!(pe(c)&&c.includes(m))&&(a[r]=c?[].concat(c,m):m)}else r!==""&&(a[r]=o[r])}return a}function _t(e,a,n,o=null){Bt(e,a,7,[n,o])}const yg=Ld();let Sg=0;function Yd(e,a,n){const o=e.type,r=(a?a.appContext:e.appContext)||yg,c={uid:Sg++,vnode:e,type:o,parent:a,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Go(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Id(o,r),emitsOptions:sd(o,r),emit:null,emitted:null,propsDefaults:je,inheritAttrs:o.inheritAttrs,ctx:je,data:je,props:je,attrs:je,slots:je,refs:je,setupState:je,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return c.ctx={_:c},c.root=a?a.root:c,c.emit=hf.bind(null,c),e.ce&&e.ce(c),c}let lt=null;const Ut=()=>lt||it;let Ml,co;{const e=Ic(),a=(n,o)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(o),c=>{r.length>1?r.forEach(m=>m(c)):r[0](c)}};Ml=a("__VUE_INSTANCE_SETTERS__",n=>lt=n),co=a("__VUE_SSR_SETTERS__",n=>dl=n)}const Hi=e=>{const a=lt;return Ml(e),e.scope.on(),()=>{e.scope.off(),Ml(a)}},mo=()=>{lt&&lt.scope.off(),Ml(null)};function Jd(e){return e.vnode.shapeFlag&4}let dl=!1;function Wd(e,a=!1){a&&co(a);const{props:n,children:o}=e.vnode,r=Jd(e);ng(e,n,r,a),rg(e,o);const c=r?wg(e,a):void 0;return a&&co(!1),c}function wg(e,a){const n=e.type;e.accessCache=Object.create(null),e.proxy=Xo(new Proxy(e.ctx,lo));const{setup:o}=n;if(o){const r=e.setupContext=o.length>1?Xd(e):null,c=Hi(e);Gi();const m=Qt(o,e,0,[e.props,r]);if(qi(),c(),Oo(m)){if(m.then(mo,mo),a)return m.then(p=>{po(e,p,a)}).catch(p=>{Ui(p,e,0)});e.asyncDep=m}else po(e,m,a)}else Kd(e,a)}function po(e,a,n){Se(a)?e.type.__ssrInlineRender?e.ssrRender=a:e.render=a:qe(a)&&(e.setupState=es(a)),Kd(e,n)}let Vl,fo;function Cg(e){Vl=e,fo=a=>{a.render._rc&&(a.withProxy=new Proxy(a.ctx,Mf))}}const Ag=()=>!Vl;function Kd(e,a,n){const o=e.type;if(!e.render){if(!a&&Vl&&!o.render){const r=o.template||ps(e).template;if(r){const{isCustomElement:c,compilerOptions:m}=e.appContext.config,{delimiters:p,compilerOptions:s}=o,u=Qe(Qe({isCustomElement:c,delimiters:p},m),s);o.render=Vl(r,u)}}e.render=o.render||vt,fo&&fo(e)}{const r=Hi(e);Gi();try{Xf(e)}finally{qi(),r()}}}function kg(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(a,n){return wt(e,"get","$attrs"),a[n]}}))}function Xd(e){const a=n=>{e.exposed=n||{}};return{get attrs(){return kg(e)},slots:e.slots,emit:e.emit,expose:a}}function _n(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(es(Xo(e.exposed)),{get(a,n){if(n in a)return a[n];if(n in Na)return Na[n](e)},has(a,n){return n in a||n in Na}}))}function go(e,a=!0){return Se(e)?e.displayName||e.name:e.name||a&&e.__name}function xg(e){return Se(e)&&"__vccOpts"in e}const H=(e,a)=>Xp(e,a,dl);function $g(e,a,n=je){const o=Ut(),r=ht(a),c=$t(a),m=td((s,u)=>{let f;return gd(()=>{const d=e[a];Ht(f,d)&&(f=d,u())}),{get(){return s(),n.get?n.get(f):f},set(d){const h=o.vnode.props;!(h&&(a in h||r in h||c in h)&&(`onUpdate:${a}`in h||`onUpdate:${r}`in h||`onUpdate:${c}`in h))&&Ht(d,f)&&(f=d,u()),o.emit(`update:${a}`,n.set?n.set(d):d)}}}),p=a==="modelValue"?"modelModifiers":`${a}Modifiers`;return m[Symbol.iterator]=()=>{let s=0;return{next(){return s<2?{value:s++?e[p]||{}:m,done:!1}:{done:!0}}}},m}function J(e,a,n){const o=arguments.length;return o===2?qe(a)&&!pe(a)?zt(a)?t(e,null,[a]):t(e,a):t(e,null,a):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&zt(n)&&(n=[n]),t(e,a,n))}function Bg(){}function Tg(e,a,n,o){const r=n[o];if(r&&Qd(r,e))return r;const c=a();return c.memo=e.slice(),n[o]=c}function Qd(e,a){const n=e.memo;if(n.length!=a.length)return!1;for(let o=0;o<n.length;o++)if(Ht(n[o],a[o]))return!1;return Vi>0&&yt&&yt.push(e),!0}const Zd="3.4.15",Lg=vt,Dg=df,Ig=Xi,Eg=od,Rg={createComponentInstance:Yd,setupComponent:Wd,renderComponentRoot:Bl,setCurrentRenderingInstance:Za,isVNode:zt,normalizeVNode:kt},zg=Rg,Pg=null,Fg=null,Mg=null;/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Vg="http://www.w3.org/2000/svg",Hg="http://www.w3.org/1998/Math/MathML",mi=typeof document<"u"?document:null,er=mi&&mi.createElement("template"),Ng={insert:(e,a,n)=>{a.insertBefore(e,n||null)},remove:e=>{const a=e.parentNode;a&&a.removeChild(e)},createElement:(e,a,n,o)=>{const r=a==="svg"?mi.createElementNS(Vg,e):a==="mathml"?mi.createElementNS(Hg,e):mi.createElement(e,n?{is:n}:void 0);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>mi.createTextNode(e),createComment:e=>mi.createComment(e),setText:(e,a)=>{e.nodeValue=a},setElementText:(e,a)=>{e.textContent=a},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>mi.querySelector(e),setScopeId(e,a){e.setAttribute(a,"")},insertStaticContent(e,a,n,o,r,c){const m=n?n.previousSibling:a.lastChild;if(r&&(r===c||r.nextSibling))for(;a.insertBefore(r.cloneNode(!0),n),!(r===c||!(r=r.nextSibling)););else{er.innerHTML=o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e;const p=er.content;if(o==="svg"||o==="mathml"){const s=p.firstChild;for(;s.firstChild;)p.appendChild(s.firstChild);p.removeChild(s)}a.insertBefore(p,n)}return[m?m.nextSibling:a.firstChild,n?n.previousSibling:a.lastChild]}},oi="transition",Ba="animation",ga=Symbol("_vtc"),bn=(e,{slots:a})=>J(_d,tm(e),a);bn.displayName="Transition";const em={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Og=bn.props=Qe({},cs,em),xi=(e,a=[])=>{pe(e)?e.forEach(n=>n(...a)):e&&e(...a)},tr=e=>e?pe(e)?e.some(a=>a.length>1):e.length>1:!1;function tm(e){const a={};for(const U in e)U in em||(a[U]=e[U]);if(e.css===!1)return a;const{name:n="v",type:o,duration:r,enterFromClass:c=`${n}-enter-from`,enterActiveClass:m=`${n}-enter-active`,enterToClass:p=`${n}-enter-to`,appearFromClass:s=c,appearActiveClass:u=m,appearToClass:f=p,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=e,_=jg(r),C=_&&_[0],k=_&&_[1],{onBeforeEnter:B,onEnter:b,onEnterCancelled:w,onLeave:x,onLeaveCancelled:$,onBeforeAppear:D=B,onAppear:F=b,onAppearCancelled:V=w}=a,z=(U,me,Te)=>{ri(U,me?f:p),ri(U,me?u:m),Te&&Te()},j=(U,me)=>{U._isLeaving=!1,ri(U,d),ri(U,v),ri(U,h),me&&me()},K=U=>(me,Te)=>{const G=U?F:b,W=()=>z(me,U,Te);xi(G,[me,W]),ir(()=>{ri(me,U?s:c),Jt(me,U?f:p),tr(G)||ar(me,o,C,W)})};return Qe(a,{onBeforeEnter(U){xi(B,[U]),Jt(U,c),Jt(U,m)},onBeforeAppear(U){xi(D,[U]),Jt(U,s),Jt(U,u)},onEnter:K(!1),onAppear:K(!0),onLeave(U,me){U._isLeaving=!0;const Te=()=>j(U,me);Jt(U,d),am(),Jt(U,h),ir(()=>{U._isLeaving&&(ri(U,d),Jt(U,v),tr(x)||ar(U,o,k,Te))}),xi(x,[U,Te])},onEnterCancelled(U){z(U,!1),xi(w,[U])},onAppearCancelled(U){z(U,!0),xi(V,[U])},onLeaveCancelled(U){j(U),xi($,[U])}})}function jg(e){if(e==null)return null;if(qe(e))return[En(e.enter),En(e.leave)];{const a=En(e);return[a,a]}}function En(e){return Il(e)}function Jt(e,a){a.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[ga]||(e[ga]=new Set)).add(a)}function ri(e,a){a.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const n=e[ga];n&&(n.delete(a),n.size||(e[ga]=void 0))}function ir(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Gg=0;function ar(e,a,n,o){const r=e._endId=++Gg,c=()=>{r===e._endId&&o()};if(n)return setTimeout(c,n);const{type:m,timeout:p,propCount:s}=im(e,a);if(!m)return o();const u=m+"end";let f=0;const d=()=>{e.removeEventListener(u,h),c()},h=v=>{v.target===e&&++f>=s&&d()};setTimeout(()=>{f<s&&d()},p+1),e.addEventListener(u,h)}function im(e,a){const n=window.getComputedStyle(e),o=_=>(n[_]||"").split(", "),r=o(`${oi}Delay`),c=o(`${oi}Duration`),m=lr(r,c),p=o(`${Ba}Delay`),s=o(`${Ba}Duration`),u=lr(p,s);let f=null,d=0,h=0;a===oi?m>0&&(f=oi,d=m,h=c.length):a===Ba?u>0&&(f=Ba,d=u,h=s.length):(d=Math.max(m,u),f=d>0?m>u?oi:Ba:null,h=f?f===oi?c.length:s.length:0);const v=f===oi&&/\b(transform|all)(,|$)/.test(o(`${oi}Property`).toString());return{type:f,timeout:d,propCount:h,hasTransform:v}}function lr(e,a){for(;e.length<a.length;)e=e.concat(e);return Math.max(...a.map((n,o)=>nr(n)+nr(e[o])))}function nr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function am(){return document.body.offsetHeight}function qg(e,a,n){const o=e[ga];o&&(a=(a?[a,...o]:[...o]).join(" ")),a==null?e.removeAttribute("class"):n?e.setAttribute("class",a):e.className=a}const _s=Symbol("_vod"),lm={beforeMount(e,{value:a},{transition:n}){e[_s]=e.style.display==="none"?"":e.style.display,n&&a?n.beforeEnter(e):Ta(e,a)},mounted(e,{value:a},{transition:n}){n&&a&&n.enter(e)},updated(e,{value:a,oldValue:n},{transition:o}){!a!=!n&&(o?a?(o.beforeEnter(e),Ta(e,!0),o.enter(e)):o.leave(e,()=>{Ta(e,!1)}):Ta(e,a))},beforeUnmount(e,{value:a}){Ta(e,a)}};function Ta(e,a){e.style.display=a?e[_s]:"none"}function Ug(){lm.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const nm=Symbol("");function Yg(e){const a=Ut();if(!a)return;const n=a.ut=(r=e(a.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${a.uid}"]`)).forEach(c=>_o(c,r))},o=()=>{const r=e(a.proxy);ho(a.subTree,r),n(r)};fd(o),wi(()=>{const r=new MutationObserver(o);r.observe(a.subTree.el.parentNode,{childList:!0}),Yi(()=>r.disconnect())})}function ho(e,a){if(e.shapeFlag&128){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{ho(n.activeBranch,a)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)_o(e.el,a);else if(e.type===Ce)e.children.forEach(n=>ho(n,a));else if(e.type===zi){let{el:n,anchor:o}=e;for(;n&&(_o(n,a),n!==o);)n=n.nextSibling}}function _o(e,a){if(e.nodeType===1){const n=e.style;let o="";for(const r in a)n.setProperty(`--${r}`,a[r]),o+=`--${r}: ${a[r]};`;n[nm]=o}}function Jg(e,a,n){const o=e.style,r=o.display,c=Ze(n);if(n&&!c){if(a&&!Ze(a))for(const m in a)n[m]==null&&bo(o,m,"");for(const m in n)bo(o,m,n[m])}else if(c){if(a!==n){const m=o[nm];m&&(n+=";"+m),o.cssText=n}}else a&&e.removeAttribute("style");_s in e&&(o.display=r)}const or=/\s*!important$/;function bo(e,a,n){if(pe(n))n.forEach(o=>bo(e,a,o));else if(n==null&&(n=""),a.startsWith("--"))e.setProperty(a,n);else{const o=Wg(e,a);or.test(n)?e.setProperty($t(o),n.replace(or,""),"important"):e[o]=n}}const sr=["Webkit","Moz","ms"],Rn={};function Wg(e,a){const n=Rn[a];if(n)return n;let o=ht(a);if(o!=="filter"&&o in e)return Rn[a]=o;o=ol(o);for(let r=0;r<sr.length;r++){const c=sr[r]+o;if(c in e)return Rn[a]=c}return a}const rr="http://www.w3.org/1999/xlink";function Kg(e,a,n,o,r){if(o&&a.startsWith("xlink:"))n==null?e.removeAttributeNS(rr,a.slice(6,a.length)):e.setAttributeNS(rr,a,n);else{const c=kp(a);n==null||c&&!Ec(n)?e.removeAttribute(a):e.setAttribute(a,c?"":n)}}function Xg(e,a,n,o,r,c,m){if(a==="innerHTML"||a==="textContent"){o&&m(o,r,c),e[a]=n??"";return}const p=e.tagName;if(a==="value"&&p!=="PROGRESS"&&!p.includes("-")){e._value=n;const u=p==="OPTION"?e.getAttribute("value"):e.value,f=n??"";u!==f&&(e.value=f),n==null&&e.removeAttribute(a);return}let s=!1;if(n===""||n==null){const u=typeof e[a];u==="boolean"?n=Ec(n):n==null&&u==="string"?(n="",s=!0):u==="number"&&(n=0,s=!0)}try{e[a]=n}catch{}s&&e.removeAttribute(a)}function Kt(e,a,n,o){e.addEventListener(a,n,o)}function Qg(e,a,n,o){e.removeEventListener(a,n,o)}const ur=Symbol("_vei");function Zg(e,a,n,o,r=null){const c=e[ur]||(e[ur]={}),m=c[a];if(o&&m)m.value=o;else{const[p,s]=eh(a);if(o){const u=c[a]=ah(o,r);Kt(e,p,u,s)}else m&&(Qg(e,p,m,s),c[a]=void 0)}}const cr=/(?:Once|Passive|Capture)$/;function eh(e){let a;if(cr.test(e)){a={};let o;for(;o=e.match(cr);)e=e.slice(0,e.length-o[0].length),a[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$t(e.slice(2)),a]}let zn=0;const th=Promise.resolve(),ih=()=>zn||(th.then(()=>zn=0),zn=Date.now());function ah(e,a){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;Bt(lh(o,n.value),a,5,[o])};return n.value=e,n.attached=ih(),n}function lh(e,a){if(pe(a)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},a.map(o=>r=>!r._stopped&&o&&o(r))}else return a}const dr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,nh=(e,a,n,o,r,c,m,p,s)=>{const u=r==="svg";a==="class"?qg(e,o,u):a==="style"?Jg(e,n,o):nl(a)?Ho(a)||Zg(e,a,n,o,m):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):oh(e,a,o,u))?Xg(e,a,o,c,m,p,s):(a==="true-value"?e._trueValue=o:a==="false-value"&&(e._falseValue=o),Kg(e,a,o,u))};function oh(e,a,n,o){if(o)return!!(a==="innerHTML"||a==="textContent"||a in e&&dr(a)&&Se(n));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&e.tagName==="INPUT"||a==="type"&&e.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return dr(a)&&Ze(n)?!1:a in e}/*! #__NO_SIDE_EFFECTS__ */function om(e,a){const n=E(e);class o extends vn{constructor(c){super(n,c,a)}}return o.def=n,o}/*! #__NO_SIDE_EFFECTS__ */const sh=e=>om(e,bm),rh=typeof HTMLElement<"u"?HTMLElement:class{};class vn extends rh{constructor(a,n={},o){super(),this._def=a,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&o?o(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),Aa(()=>{this._connected||(Ol(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let o=0;o<this.attributes.length;o++)this._setAttr(this.attributes[o].name);this._ob=new MutationObserver(o=>{for(const r of o)this._setAttr(r.attributeName)}),this._ob.observe(this,{attributes:!0});const a=(o,r=!1)=>{const{props:c,styles:m}=o;let p;if(c&&!pe(c))for(const s in c){const u=c[s];(u===Number||u&&u.type===Number)&&(s in this._props&&(this._props[s]=Il(this._props[s])),(p||(p=Object.create(null)))[ht(s)]=!0)}this._numberProps=p,r&&this._resolveProps(o),this._applyStyles(m),this._update()},n=this._def.__asyncLoader;n?n().then(o=>a(o,!0)):a(this._def)}_resolveProps(a){const{props:n}=a,o=pe(n)?n:Object.keys(n||{});for(const r of Object.keys(this))r[0]!=="_"&&o.includes(r)&&this._setProp(r,this[r],!0,!1);for(const r of o.map(ht))Object.defineProperty(this,r,{get(){return this._getProp(r)},set(c){this._setProp(r,c)}})}_setAttr(a){let n=this.getAttribute(a);const o=ht(a);this._numberProps&&this._numberProps[o]&&(n=Il(n)),this._setProp(o,n,!1)}_getProp(a){return this._props[a]}_setProp(a,n,o=!0,r=!0){n!==this._props[a]&&(this._props[a]=n,r&&this._instance&&this._update(),o&&(n===!0?this.setAttribute($t(a),""):typeof n=="string"||typeof n=="number"?this.setAttribute($t(a),n+""):n||this.removeAttribute($t(a))))}_update(){Ol(this._createVNode(),this.shadowRoot)}_createVNode(){const a=t(this._def,Qe({},this._props));return this._instance||(a.ce=n=>{this._instance=n,n.isCE=!0;const o=(c,m)=>{this.dispatchEvent(new CustomEvent(c,{detail:m}))};n.emit=(c,...m)=>{o(c,m),$t(c)!==c&&o($t(c),m)};let r=this;for(;r=r&&(r.parentNode||r.host);)if(r instanceof vn){n.parent=r._instance,n.provides=r._instance.provides;break}}),a}_applyStyles(a){a&&a.forEach(n=>{const o=document.createElement("style");o.textContent=n,this.shadowRoot.appendChild(o)})}}function uh(e="$style"){{const a=Ut();if(!a)return je;const n=a.type.__cssModules;if(!n)return je;const o=n[e];return o||je}}const sm=new WeakMap,rm=new WeakMap,Hl=Symbol("_moveCb"),mr=Symbol("_enterCb"),um={name:"TransitionGroup",props:Qe({},Og,{tag:String,moveClass:String}),setup(e,{slots:a}){const n=Ut(),o=us();let r,c;return pn(()=>{if(!r.length)return;const m=e.moveClass||`${e.name||"v"}-move`;if(!fh(r[0].el,n.vnode.el,m))return;r.forEach(dh),r.forEach(mh);const p=r.filter(ph);am(),p.forEach(s=>{const u=s.el,f=u.style;Jt(u,m),f.transform=f.webkitTransform=f.transitionDuration="";const d=u[Hl]=h=>{h&&h.target!==u||(!h||/transform$/.test(h.propertyName))&&(u.removeEventListener("transitionend",d),u[Hl]=null,ri(u,m))};u.addEventListener("transitionend",d)})}),()=>{const m=Ee(e),p=tm(m);let s=m.tag||Ce;r=c,c=a.default?dn(a.default()):[];for(let u=0;u<c.length;u++){const f=c[u];f.key!=null&&Fi(f,pa(f,p,o,n))}if(r)for(let u=0;u<r.length;u++){const f=r[u];Fi(f,pa(f,p,o,n)),sm.set(f,f.el.getBoundingClientRect())}return t(s,null,c)}}},ch=e=>delete e.mode;um.props;const cm=um;function dh(e){const a=e.el;a[Hl]&&a[Hl](),a[mr]&&a[mr]()}function mh(e){rm.set(e,e.el.getBoundingClientRect())}function ph(e){const a=sm.get(e),n=rm.get(e),o=a.left-n.left,r=a.top-n.top;if(o||r){const c=e.el.style;return c.transform=c.webkitTransform=`translate(${o}px,${r}px)`,c.transitionDuration="0s",e}}function fh(e,a,n){const o=e.cloneNode(),r=e[ga];r&&r.forEach(p=>{p.split(/\s+/).forEach(s=>s&&o.classList.remove(s))}),n.split(/\s+/).forEach(p=>p&&o.classList.add(p)),o.style.display="none";const c=a.nodeType===1?a:a.parentNode;c.appendChild(o);const{hasTransform:m}=im(o);return c.removeChild(o),m}const Si=e=>{const a=e.props["onUpdate:modelValue"]||!1;return pe(a)?n=>aa(a,n):a};function gh(e){e.target.composing=!0}function pr(e){const a=e.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const Rt=Symbol("_assign"),Nl={created(e,{modifiers:{lazy:a,trim:n,number:o}},r){e[Rt]=Si(r);const c=o||r.props&&r.props.type==="number";Kt(e,a?"change":"input",m=>{if(m.target.composing)return;let p=e.value;n&&(p=p.trim()),c&&(p=Ja(p)),e[Rt](p)}),n&&Kt(e,"change",()=>{e.value=e.value.trim()}),a||(Kt(e,"compositionstart",gh),Kt(e,"compositionend",pr),Kt(e,"change",pr))},mounted(e,{value:a}){e.value=a??""},beforeUpdate(e,{value:a,modifiers:{lazy:n,trim:o,number:r}},c){if(e[Rt]=Si(c),e.composing)return;const m=r||e.type==="number"?Ja(e.value):e.value,p=a??"";m!==p&&(document.activeElement===e&&e.type!=="range"&&(n||o&&e.value.trim()===p)||(e.value=p))}},bs={deep:!0,created(e,a,n){e[Rt]=Si(n),Kt(e,"change",()=>{const o=e._modelValue,r=ha(e),c=e.checked,m=e[Rt];if(pe(o)){const p=an(o,r),s=p!==-1;if(c&&!s)m(o.concat(r));else if(!c&&s){const u=[...o];u.splice(p,1),m(u)}}else if(ji(o)){const p=new Set(o);c?p.add(r):p.delete(r),m(p)}else m(mm(e,c))})},mounted:fr,beforeUpdate(e,a,n){e[Rt]=Si(n),fr(e,a,n)}};function fr(e,{value:a,oldValue:n},o){e._modelValue=a,pe(a)?e.checked=an(a,o.props.value)>-1:ji(a)?e.checked=a.has(o.props.value):a!==n&&(e.checked=Zt(a,mm(e,!0)))}const vs={created(e,{value:a},n){e.checked=Zt(a,n.props.value),e[Rt]=Si(n),Kt(e,"change",()=>{e[Rt](ha(e))})},beforeUpdate(e,{value:a,oldValue:n},o){e[Rt]=Si(o),a!==n&&(e.checked=Zt(a,o.props.value))}},dm={deep:!0,created(e,{value:a,modifiers:{number:n}},o){const r=ji(a);Kt(e,"change",()=>{const c=Array.prototype.filter.call(e.options,m=>m.selected).map(m=>n?Ja(ha(m)):ha(m));e[Rt](e.multiple?r?new Set(c):c:c[0]),e._assigning=!0,Aa(()=>{e._assigning=!1})}),e[Rt]=Si(o)},mounted(e,{value:a,oldValue:n,modifiers:{number:o}}){gr(e,a,n,o)},beforeUpdate(e,a,n){e[Rt]=Si(n)},updated(e,{value:a,oldValue:n,modifiers:{number:o}}){e._assigning||gr(e,a,n,o)}};function gr(e,a,n,o){const r=e.multiple,c=pe(a);if(!(r&&!c&&!ji(a))&&!(c&&Zt(a,n))){for(let m=0,p=e.options.length;m<p;m++){const s=e.options[m],u=ha(s);if(r)if(c){const f=typeof u;f==="string"||f==="number"?s.selected=a.includes(o?Ja(u):u):s.selected=an(a,u)>-1}else s.selected=a.has(u);else if(Zt(ha(s),a)){e.selectedIndex!==m&&(e.selectedIndex=m);return}}!r&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function ha(e){return"_value"in e?e._value:e.value}function mm(e,a){const n=a?"_trueValue":"_falseValue";return n in e?e[n]:a}const pm={created(e,a,n){Cl(e,a,n,null,"created")},mounted(e,a,n){Cl(e,a,n,null,"mounted")},beforeUpdate(e,a,n,o){Cl(e,a,n,o,"beforeUpdate")},updated(e,a,n,o){Cl(e,a,n,o,"updated")}};function fm(e,a){switch(e){case"SELECT":return dm;case"TEXTAREA":return Nl;default:switch(a){case"checkbox":return bs;case"radio":return vs;default:return Nl}}}function Cl(e,a,n,o,r){const m=fm(e.tagName,n.props&&n.props.type)[r];m&&m(e,a,n,o)}function hh(){Nl.getSSRProps=({value:e})=>({value:e}),vs.getSSRProps=({value:e},a)=>{if(a.props&&Zt(a.props.value,e))return{checked:!0}},bs.getSSRProps=({value:e},a)=>{if(pe(e)){if(a.props&&an(e,a.props.value)>-1)return{checked:!0}}else if(ji(e)){if(a.props&&e.has(a.props.value))return{checked:!0}}else if(e)return{checked:!0}},pm.getSSRProps=(e,a)=>{if(typeof a.type!="string")return;const n=fm(a.type.toUpperCase(),a.props&&a.props.type);if(n.getSSRProps)return n.getSSRProps(e,a)}}const _h=["ctrl","shift","alt","meta"],bh={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,a)=>_h.some(n=>e[`${n}Key`]&&!a.includes(n))},Tt=(e,a)=>{const n=e._withMods||(e._withMods={}),o=a.join(".");return n[o]||(n[o]=(r,...c)=>{for(let m=0;m<a.length;m++){const p=bh[a[m]];if(p&&p(r,a))return}return e(r,...c)})},vh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},yh=(e,a)=>{const n=e._withKeys||(e._withKeys={}),o=a.join(".");return n[o]||(n[o]=r=>{if(!("key"in r))return;const c=$t(r.key);if(a.some(m=>m===c||vh[m]===c))return e(r)})},gm=Qe({patchProp:nh},Ng);let Ga,hr=!1;function hm(){return Ga||(Ga=Pd(gm))}function _m(){return Ga=hr?Ga:Fd(gm),hr=!0,Ga}const Ol=(...e)=>{hm().render(...e)},bm=(...e)=>{_m().hydrate(...e)},vm=(...e)=>{const a=hm().createApp(...e),{mount:n}=a;return a.mount=o=>{const r=Sm(o);if(!r)return;const c=a._component;!Se(c)&&!c.render&&!c.template&&(c.template=r.innerHTML),r.innerHTML="";const m=n(r,!1,ym(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),m},a},Sh=(...e)=>{const a=_m().createApp(...e),{mount:n}=a;return a.mount=o=>{const r=Sm(o);if(r)return n(r,!0,ym(r))},a};function ym(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Sm(e){return Ze(e)?document.querySelector(e):e}let _r=!1;const wh=()=>{_r||(_r=!0,hh(),Ug())};/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Ch=()=>{},Ah=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:_d,BaseTransitionPropsValidators:cs,Comment:ft,DeprecationTypes:Mg,EffectScope:Go,ErrorCodes:cf,ErrorTypeStrings:Dg,Fragment:Ce,KeepAlive:Rf,ReactiveEffect:ma,Static:zi,Suspense:Af,Teleport:gn,Text:Mi,TrackOpTypes:sf,Transition:bn,TransitionGroup:cm,TriggerOpTypes:rf,VueElement:vn,assertNumber:uf,callWithAsyncErrorHandling:Bt,callWithErrorHandling:Qt,camelize:ht,capitalize:ol,cloneVNode:qt,compatUtils:Fg,compile:Ch,computed:H,createApp:vm,createBlock:I,createCommentVNode:Ud,createElementBlock:ge,createElementVNode:S,createHydrationRenderer:Fd,createPropsRestProxy:Wf,createRenderer:Pd,createSSRApp:Sh,createSlots:Pf,createStaticVNode:vg,createTextVNode:l,createVNode:t,customRef:td,defineAsyncComponent:If,defineComponent:E,defineCustomElement:om,defineEmits:Hf,defineExpose:Nf,defineModel:Gf,defineOptions:Of,defineProps:Vf,defineSSRCustomElement:sh,defineSlots:jf,devtools:Ig,effect:Tp,effectScope:$p,getCurrentInstance:Ut,getCurrentScope:qo,getTransitionRawChildren:dn,guardReactiveProps:qd,h:J,handleError:Ui,hasInjectionContext:lg,hydrate:bm,initCustomFormatter:Bg,initDirectivesForSSR:wh,inject:Ve,isMemoSame:Qd,isProxy:Ko,isReactive:Ei,isReadonly:Pi,isRef:ct,isRuntimeOnly:Ag,isShallow:Wa,isVNode:zt,markRaw:Xo,mergeDefaults:Yf,mergeModels:Jf,mergeProps:Ji,nextTick:Aa,normalizeClass:sl,normalizeProps:Cp,normalizeStyle:Ca,onActivated:ds,onBeforeMount:yd,onBeforeUnmount:fn,onBeforeUpdate:Sd,onDeactivated:ms,onErrorCaptured:kd,onMounted:wi,onRenderTracked:Ad,onRenderTriggered:Cd,onScopeDispose:Pc,onServerPrefetch:wd,onUnmounted:Yi,onUpdated:pn,openBlock:T,popScopeId:as,provide:ut,proxyRefs:es,pushScopeId:is,queuePostFlushCb:Rl,reactive:ti,readonly:Wo,ref:q,registerRuntimeCompiler:Cg,render:Ol,renderList:tt,renderSlot:fa,resolveComponent:y,resolveDirective:cn,resolveDynamicComponent:ud,resolveFilter:Pg,resolveTransitionHooks:pa,setBlockTracking:uo,setDevtoolsHook:Eg,setTransitionHooks:Fi,shallowReactive:Xc,shallowReadonly:Kp,shallowRef:Zc,ssrContextKey:md,ssrUtils:zg,stop:Lp,toDisplayString:ke,toHandlerKey:Ha,toHandlers:Ff,toRaw:Ee,toRef:eo,toRefs:lf,toValue:ef,transformVNodeArgs:_g,triggerRef:Zp,unref:g,useAttrs:$d,useCssModule:uh,useCssVars:Yg,useModel:$g,useSSRContext:pd,useSlots:Uf,useTransitionState:us,vModelCheckbox:bs,vModelDynamic:pm,vModelRadio:vs,vModelSelect:dm,vModelText:Nl,vShow:lm,version:Zd,warn:Lg,watch:pt,watchEffect:rs,watchPostEffect:fd,watchSyncEffect:gd,withAsyncContext:Kf,withCtx:i,withDefaults:qf,withDirectives:ul,withKeys:yh,withMemo:Tg,withModifiers:Tt,withScopeId:_f},Symbol.toStringTag,{value:"Module"})),kh=E({name:"App"}),we=(e,a)=>{const n=e.__vccOpts||e;for(const[o,r]of a)n[o]=r;return n};function xh(e,a,n,o,r,c){const m=y("router-view");return T(),I(m)}const $h=we(kh,[["render",xh]]);/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const wm=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",ka=e=>wm?Symbol(e):"_vr_"+e,Cm=ka("rvlm"),br=ka("rvd"),yn=ka("r"),ys=ka("rl"),vo=ka("rvl"),Qi=typeof window<"u";function Bh(e){return e.__esModule||wm&&e[Symbol.toStringTag]==="Module"}const Ye=Object.assign;function Pn(e,a){const n={};for(const o in a){const r=a[o];n[o]=Array.isArray(r)?r.map(e):e(r)}return n}const qa=()=>{},Th=/\/$/,Lh=e=>e.replace(Th,"");function Fn(e,a,n="/"){let o,r={},c="",m="";const p=a.indexOf("?"),s=a.indexOf("#",p>-1?p:0);return p>-1&&(o=a.slice(0,p),c=a.slice(p+1,s>-1?s:a.length),r=e(c)),s>-1&&(o=o||a.slice(0,s),m=a.slice(s,a.length)),o=Rh(o??a,n),{fullPath:o+(c&&"?")+c+m,path:o,query:r,hash:m}}function Dh(e,a){const n=a.query?e(a.query):"";return a.path+(n&&"?")+n+(a.hash||"")}function vr(e,a){return!a||!e.toLowerCase().startsWith(a.toLowerCase())?e:e.slice(a.length)||"/"}function Ih(e,a,n){const o=a.matched.length-1,r=n.matched.length-1;return o>-1&&o===r&&_a(a.matched[o],n.matched[r])&&Am(a.params,n.params)&&e(a.query)===e(n.query)&&a.hash===n.hash}function _a(e,a){return(e.aliasOf||e)===(a.aliasOf||a)}function Am(e,a){if(Object.keys(e).length!==Object.keys(a).length)return!1;for(const n in e)if(!Eh(e[n],a[n]))return!1;return!0}function Eh(e,a){return Array.isArray(e)?yr(e,a):Array.isArray(a)?yr(a,e):e===a}function yr(e,a){return Array.isArray(a)?e.length===a.length&&e.every((n,o)=>n===a[o]):e.length===1&&e[0]===a}function Rh(e,a){if(e.startsWith("/"))return e;if(!e)return a;const n=a.split("/"),o=e.split("/");let r=n.length-1,c,m;for(c=0;c<o.length;c++)if(m=o[c],!(r===1||m==="."))if(m==="..")r--;else break;return n.slice(0,r).join("/")+"/"+o.slice(c-(c===o.length?1:0)).join("/")}var al;(function(e){e.pop="pop",e.push="push"})(al||(al={}));var Ua;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ua||(Ua={}));function zh(e){if(!e)if(Qi){const a=document.querySelector("base");e=a&&a.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Lh(e)}const Ph=/^[^#]+#/;function Fh(e,a){return e.replace(Ph,"#")+a}function Mh(e,a){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:a.behavior,left:o.left-n.left-(a.left||0),top:o.top-n.top-(a.top||0)}}const Sn=()=>({left:window.pageXOffset,top:window.pageYOffset});function Vh(e){let a;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;a=Mh(r,e)}else a=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function Sr(e,a){return(history.state?history.state.position-a:-1)+e}const yo=new Map;function Hh(e,a){yo.set(e,a)}function Nh(e){const a=yo.get(e);return yo.delete(e),a}let Oh=()=>location.protocol+"//"+location.host;function km(e,a){const{pathname:n,search:o,hash:r}=a,c=e.indexOf("#");if(c>-1){let p=r.includes(e.slice(c))?e.slice(c).length:1,s=r.slice(p);return s[0]!=="/"&&(s="/"+s),vr(s,"")}return vr(n,e)+o+r}function jh(e,a,n,o){let r=[],c=[],m=null;const p=({state:h})=>{const v=km(e,location),_=n.value,C=a.value;let k=0;if(h){if(n.value=v,a.value=h,m&&m===_){m=null;return}k=C?h.position-C.position:0}else o(v);r.forEach(B=>{B(n.value,_,{delta:k,type:al.pop,direction:k?k>0?Ua.forward:Ua.back:Ua.unknown})})};function s(){m=n.value}function u(h){r.push(h);const v=()=>{const _=r.indexOf(h);_>-1&&r.splice(_,1)};return c.push(v),v}function f(){const{history:h}=window;h.state&&h.replaceState(Ye({},h.state,{scroll:Sn()}),"")}function d(){for(const h of c)h();c=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",f),{pauseListeners:s,listen:u,destroy:d}}function wr(e,a,n,o=!1,r=!1){return{back:e,current:a,forward:n,replaced:o,position:window.history.length,scroll:r?Sn():null}}function Gh(e){const{history:a,location:n}=window,o={value:km(e,n)},r={value:a.state};r.value||c(o.value,{back:null,current:o.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function c(s,u,f){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+s:Oh()+e+s;try{a[f?"replaceState":"pushState"](u,"",h),r.value=u}catch(v){console.error(v),n[f?"replace":"assign"](h)}}function m(s,u){const f=Ye({},a.state,wr(r.value.back,s,r.value.forward,!0),u,{position:r.value.position});c(s,f,!0),o.value=s}function p(s,u){const f=Ye({},r.value,a.state,{forward:s,scroll:Sn()});c(f.current,f,!0);const d=Ye({},wr(o.value,s,null),{position:f.position+1},u);c(s,d,!1),o.value=s}return{location:o,state:r,push:p,replace:m}}function qh(e){e=zh(e);const a=Gh(e),n=jh(e,a.state,a.location,a.replace);function o(c,m=!0){m||n.pauseListeners(),history.go(c)}const r=Ye({location:"",base:e,go:o,createHref:Fh.bind(null,e)},a,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>a.state.value}),r}function Uh(e){return typeof e=="string"||e&&typeof e=="object"}function xm(e){return typeof e=="string"||typeof e=="symbol"}const si={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},$m=ka("nf");var Cr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Cr||(Cr={}));function ba(e,a){return Ye(new Error,{type:e,[$m]:!0},a)}function $i(e,a){return e instanceof Error&&$m in e&&(a==null||!!(e.type&a))}const Ar="[^/]+?",Yh={sensitive:!1,strict:!1,start:!0,end:!0},Jh=/[.+*?^${}()[\]/\\]/g;function Wh(e,a){const n=Ye({},Yh,a),o=[];let r=n.start?"^":"";const c=[];for(const u of e){const f=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const h=u[d];let v=40+(n.sensitive?.25:0);if(h.type===0)d||(r+="/"),r+=h.value.replace(Jh,"\\$&"),v+=40;else if(h.type===1){const{value:_,repeatable:C,optional:k,regexp:B}=h;c.push({name:_,repeatable:C,optional:k});const b=B||Ar;if(b!==Ar){v+=10;try{new RegExp(`(${b})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+x.message)}}let w=C?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;d||(w=k&&u.length<2?`(?:/${w})`:"/"+w),k&&(w+="?"),r+=w,v+=20,k&&(v+=-8),C&&(v+=-20),b===".*"&&(v+=-50)}f.push(v)}o.push(f)}if(n.strict&&n.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const m=new RegExp(r,n.sensitive?"":"i");function p(u){const f=u.match(m),d={};if(!f)return null;for(let h=1;h<f.length;h++){const v=f[h]||"",_=c[h-1];d[_.name]=v&&_.repeatable?v.split("/"):v}return d}function s(u){let f="",d=!1;for(const h of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const v of h)if(v.type===0)f+=v.value;else if(v.type===1){const{value:_,repeatable:C,optional:k}=v,B=_ in u?u[_]:"";if(Array.isArray(B)&&!C)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=Array.isArray(B)?B.join("/"):B;if(!b)if(k)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);f+=b}}return f}return{re:m,score:o,keys:c,parse:p,stringify:s}}function Kh(e,a){let n=0;for(;n<e.length&&n<a.length;){const o=a[n]-e[n];if(o)return o;n++}return e.length<a.length?e.length===1&&e[0]===80?-1:1:e.length>a.length?a.length===1&&a[0]===80?1:-1:0}function Xh(e,a){let n=0;const o=e.score,r=a.score;for(;n<o.length&&n<r.length;){const c=Kh(o[n],r[n]);if(c)return c;n++}return r.length-o.length}const Qh={type:0,value:""},Zh=/[a-zA-Z0-9_]/;function e_(e){if(!e)return[[]];if(e==="/")return[[Qh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function a(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,o=n;const r=[];let c;function m(){c&&r.push(c),c=[]}let p=0,s,u="",f="";function d(){u&&(n===0?c.push({type:0,value:u}):n===1||n===2||n===3?(c.length>1&&(s==="*"||s==="+")&&a(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),c.push({type:1,value:u,regexp:f,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):a("Invalid state to consume buffer"),u="")}function h(){u+=s}for(;p<e.length;){if(s=e[p++],s==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:s==="/"?(u&&d(),m()):s===":"?(d(),n=1):h();break;case 4:h(),n=o;break;case 1:s==="("?n=2:Zh.test(s)?h():(d(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&p--);break;case 2:s===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+s:n=3:f+=s;break;case 3:d(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&p--,f="";break;default:a("Unknown state");break}}return n===2&&a(`Unfinished custom RegExp for param "${u}"`),d(),m(),r}function t_(e,a,n){const o=Wh(e_(e.path),n),r=Ye(o,{record:e,parent:a,children:[],alias:[]});return a&&!r.record.aliasOf==!a.record.aliasOf&&a.children.push(r),r}function i_(e,a){const n=[],o=new Map;a=xr({strict:!1,end:!0,sensitive:!1},a);function r(f){return o.get(f)}function c(f,d,h){const v=!h,_=l_(f);_.aliasOf=h&&h.record;const C=xr(a,f),k=[_];if("alias"in f){const w=typeof f.alias=="string"?[f.alias]:f.alias;for(const x of w)k.push(Ye({},_,{components:h?h.record.components:_.components,path:x,aliasOf:h?h.record:_}))}let B,b;for(const w of k){const{path:x}=w;if(d&&x[0]!=="/"){const $=d.record.path,D=$[$.length-1]==="/"?"":"/";w.path=d.record.path+(x&&D+x)}if(B=t_(w,d,C),h?h.alias.push(B):(b=b||B,b!==B&&b.alias.push(B),v&&f.name&&!kr(B)&&m(f.name)),"children"in _){const $=_.children;for(let D=0;D<$.length;D++)c($[D],B,h&&h.children[D])}h=h||B,s(B)}return b?()=>{m(b)}:qa}function m(f){if(xm(f)){const d=o.get(f);d&&(o.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(m),d.alias.forEach(m))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&o.delete(f.record.name),f.children.forEach(m),f.alias.forEach(m))}}function p(){return n}function s(f){let d=0;for(;d<n.length&&Xh(f,n[d])>=0;)d++;n.splice(d,0,f),f.record.name&&!kr(f)&&o.set(f.record.name,f)}function u(f,d){let h,v={},_,C;if("name"in f&&f.name){if(h=o.get(f.name),!h)throw ba(1,{location:f});C=h.record.name,v=Ye(a_(d.params,h.keys.filter(b=>!b.optional).map(b=>b.name)),f.params),_=h.stringify(v)}else if("path"in f)_=f.path,h=n.find(b=>b.re.test(_)),h&&(v=h.parse(_),C=h.record.name);else{if(h=d.name?o.get(d.name):n.find(b=>b.re.test(d.path)),!h)throw ba(1,{location:f,currentLocation:d});C=h.record.name,v=Ye({},d.params,f.params),_=h.stringify(v)}const k=[];let B=h;for(;B;)k.unshift(B.record),B=B.parent;return{name:C,path:_,params:v,matched:k,meta:o_(k)}}return e.forEach(f=>c(f)),{addRoute:c,resolve:u,removeRoute:m,getRoutes:p,getRecordMatcher:r}}function a_(e,a){const n={};for(const o of a)o in e&&(n[o]=e[o]);return n}function l_(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:n_(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function n_(e){const a={},n=e.props||!1;if("component"in e)a.default=n;else for(const o in e.components)a[o]=typeof n=="boolean"?n:n[o];return a}function kr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function o_(e){return e.reduce((a,n)=>Ye(a,n.meta),{})}function xr(e,a){const n={};for(const o in e)n[o]=o in a?a[o]:e[o];return n}const Bm=/#/g,s_=/&/g,r_=/\//g,u_=/=/g,c_=/\?/g,Tm=/\+/g,d_=/%5B/g,m_=/%5D/g,Lm=/%5E/g,p_=/%60/g,Dm=/%7B/g,f_=/%7C/g,Im=/%7D/g,g_=/%20/g;function Ss(e){return encodeURI(""+e).replace(f_,"|").replace(d_,"[").replace(m_,"]")}function h_(e){return Ss(e).replace(Dm,"{").replace(Im,"}").replace(Lm,"^")}function So(e){return Ss(e).replace(Tm,"%2B").replace(g_,"+").replace(Bm,"%23").replace(s_,"%26").replace(p_,"`").replace(Dm,"{").replace(Im,"}").replace(Lm,"^")}function __(e){return So(e).replace(u_,"%3D")}function b_(e){return Ss(e).replace(Bm,"%23").replace(c_,"%3F")}function v_(e){return e==null?"":b_(e).replace(r_,"%2F")}function jl(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function y_(e){const a={};if(e===""||e==="?")return a;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<o.length;++r){const c=o[r].replace(Tm," "),m=c.indexOf("="),p=jl(m<0?c:c.slice(0,m)),s=m<0?null:jl(c.slice(m+1));if(p in a){let u=a[p];Array.isArray(u)||(u=a[p]=[u]),u.push(s)}else a[p]=s}return a}function $r(e){let a="";for(let n in e){const o=e[n];if(n=__(n),o==null){o!==void 0&&(a+=(a.length?"&":"")+n);continue}(Array.isArray(o)?o.map(c=>c&&So(c)):[o&&So(o)]).forEach(c=>{c!==void 0&&(a+=(a.length?"&":"")+n,c!=null&&(a+="="+c))})}return a}function S_(e){const a={};for(const n in e){const o=e[n];o!==void 0&&(a[n]=Array.isArray(o)?o.map(r=>r==null?null:""+r):o==null?o:""+o)}return a}function La(){let e=[];function a(o){return e.push(o),()=>{const r=e.indexOf(o);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:a,list:()=>e,reset:n}}function w_(e,a,n){const o=()=>{e[a].delete(n)};Yi(o),ms(o),ds(()=>{e[a].add(n)}),e[a].add(n)}function C_(e){const a=Ve(Cm,{}).value;a&&w_(a,"updateGuards",e)}function pi(e,a,n,o,r){const c=o&&(o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise((m,p)=>{const s=d=>{d===!1?p(ba(4,{from:n,to:a})):d instanceof Error?p(d):Uh(d)?p(ba(2,{from:a,to:d})):(c&&o.enterCallbacks[r]===c&&typeof d=="function"&&c.push(d),m())},u=e.call(o&&o.instances[r],a,n,s);let f=Promise.resolve(u);e.length<3&&(f=f.then(s)),f.catch(d=>p(d))})}function Mn(e,a,n,o){const r=[];for(const c of e)for(const m in c.components){let p=c.components[m];if(!(a!=="beforeRouteEnter"&&!c.instances[m]))if(A_(p)){const u=(p.__vccOpts||p)[a];u&&r.push(pi(u,n,o,c,m))}else{let s=p();r.push(()=>s.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${m}" at "${c.path}"`));const f=Bh(u)?u.default:u;c.components[m]=f;const h=(f.__vccOpts||f)[a];return h&&pi(h,n,o,c,m)()}))}}return r}function A_(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Br(e){const a=Ve(yn),n=Ve(ys),o=H(()=>a.resolve(g(e.to))),r=H(()=>{const{matched:s}=o.value,{length:u}=s,f=s[u-1],d=n.matched;if(!f||!d.length)return-1;const h=d.findIndex(_a.bind(null,f));if(h>-1)return h;const v=Tr(s[u-2]);return u>1&&Tr(f)===v&&d[d.length-1].path!==v?d.findIndex(_a.bind(null,s[u-2])):h}),c=H(()=>r.value>-1&&$_(n.params,o.value.params)),m=H(()=>r.value>-1&&r.value===n.matched.length-1&&Am(n.params,o.value.params));function p(s={}){return x_(s)?a[g(e.replace)?"replace":"push"](g(e.to)).catch(qa):Promise.resolve()}return{route:o,href:H(()=>o.value.href),isActive:c,isExactActive:m,navigate:p}}const k_=E({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Br,setup(e,{slots:a}){const n=ti(Br(e)),{options:o}=Ve(yn),r=H(()=>({[Lr(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Lr(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const c=a.default&&a.default(n);return e.custom?c:J("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},c)}}}),ws=k_;function x_(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const a=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return e.preventDefault&&e.preventDefault(),!0}}function $_(e,a){for(const n in a){const o=a[n],r=e[n];if(typeof o=="string"){if(o!==r)return!1}else if(!Array.isArray(r)||r.length!==o.length||o.some((c,m)=>c!==r[m]))return!1}return!0}function Tr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Lr=(e,a,n)=>e??a??n,B_=E({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:a,slots:n}){const o=Ve(vo),r=H(()=>e.route||o.value),c=Ve(br,0),m=H(()=>r.value.matched[c]);ut(br,c+1),ut(Cm,m),ut(vo,r);const p=q();return pt(()=>[p.value,m.value,e.name],([s,u,f],[d,h,v])=>{u&&(u.instances[f]=s,h&&h!==u&&s&&s===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),s&&u&&(!h||!_a(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(_=>_(s))},{flush:"post"}),()=>{const s=r.value,u=m.value,f=u&&u.components[e.name],d=e.name;if(!f)return Dr(n.default,{Component:f,route:s});const h=u.props[e.name],v=h?h===!0?s.params:typeof h=="function"?h(s):h:null,C=J(f,Ye({},v,a,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(u.instances[d]=null)},ref:p}));return Dr(n.default,{Component:C,route:s})||C}}});function Dr(e,a){if(!e)return null;const n=e(a);return n.length===1?n[0]:n}const T_=B_;function L_(e){const a=i_(e.routes,e),n=e.parseQuery||y_,o=e.stringifyQuery||$r,r=e.history,c=La(),m=La(),p=La(),s=Zc(si);let u=si;Qi&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Pn.bind(null,Y=>""+Y),d=Pn.bind(null,v_),h=Pn.bind(null,jl);function v(Y,re){let se,he;return xm(Y)?(se=a.getRecordMatcher(Y),he=re):he=Y,a.addRoute(he,se)}function _(Y){const re=a.getRecordMatcher(Y);re&&a.removeRoute(re)}function C(){return a.getRoutes().map(Y=>Y.record)}function k(Y){return!!a.getRecordMatcher(Y)}function B(Y,re){if(re=Ye({},re||s.value),typeof Y=="string"){const $e=Fn(n,Y,re.path),L=a.resolve({path:$e.path},re),R=r.createHref($e.fullPath);return Ye($e,L,{params:h(L.params),hash:jl($e.hash),redirectedFrom:void 0,href:R})}let se;if("path"in Y)se=Ye({},Y,{path:Fn(n,Y.path,re.path).path});else{const $e=Ye({},Y.params);for(const L in $e)$e[L]==null&&delete $e[L];se=Ye({},Y,{params:d(Y.params)}),re.params=d(re.params)}const he=a.resolve(se,re),Ne=Y.hash||"";he.params=f(h(he.params));const Oe=Dh(o,Ye({},Y,{hash:h_(Ne),path:he.path})),xe=r.createHref(Oe);return Ye({fullPath:Oe,hash:Ne,query:o===$r?S_(Y.query):Y.query||{}},he,{redirectedFrom:void 0,href:xe})}function b(Y){return typeof Y=="string"?Fn(n,Y,s.value.path):Ye({},Y)}function w(Y,re){if(u!==Y)return ba(8,{from:re,to:Y})}function x(Y){return F(Y)}function $(Y){return x(Ye(b(Y),{replace:!0}))}function D(Y){const re=Y.matched[Y.matched.length-1];if(re&&re.redirect){const{redirect:se}=re;let he=typeof se=="function"?se(Y):se;return typeof he=="string"&&(he=he.includes("?")||he.includes("#")?he=b(he):{path:he},he.params={}),Ye({query:Y.query,hash:Y.hash,params:Y.params},he)}}function F(Y,re){const se=u=B(Y),he=s.value,Ne=Y.state,Oe=Y.force,xe=Y.replace===!0,$e=D(se);if($e)return F(Ye(b($e),{state:Ne,force:Oe,replace:xe}),re||se);const L=se;L.redirectedFrom=re;let R;return!Oe&&Ih(o,he,se)&&(R=ba(16,{to:L,from:he}),We(he,he,!0,!1)),(R?Promise.resolve(R):z(L,he)).catch(O=>$i(O)?O:ce(O,L,he)).then(O=>{if(O){if($i(O,2))return F(Ye(b(O.to),{state:Ne,force:Oe,replace:xe}),re||L)}else O=K(L,he,!0,xe,Ne);return j(L,he,O),O})}function V(Y,re){const se=w(Y,re);return se?Promise.reject(se):Promise.resolve()}function z(Y,re){let se;const[he,Ne,Oe]=D_(Y,re);se=Mn(he.reverse(),"beforeRouteLeave",Y,re);for(const $e of he)$e.leaveGuards.forEach(L=>{se.push(pi(L,Y,re))});const xe=V.bind(null,Y,re);return se.push(xe),Ki(se).then(()=>{se=[];for(const $e of c.list())se.push(pi($e,Y,re));return se.push(xe),Ki(se)}).then(()=>{se=Mn(Ne,"beforeRouteUpdate",Y,re);for(const $e of Ne)$e.updateGuards.forEach(L=>{se.push(pi(L,Y,re))});return se.push(xe),Ki(se)}).then(()=>{se=[];for(const $e of Y.matched)if($e.beforeEnter&&!re.matched.includes($e))if(Array.isArray($e.beforeEnter))for(const L of $e.beforeEnter)se.push(pi(L,Y,re));else se.push(pi($e.beforeEnter,Y,re));return se.push(xe),Ki(se)}).then(()=>(Y.matched.forEach($e=>$e.enterCallbacks={}),se=Mn(Oe,"beforeRouteEnter",Y,re),se.push(xe),Ki(se))).then(()=>{se=[];for(const $e of m.list())se.push(pi($e,Y,re));return se.push(xe),Ki(se)}).catch($e=>$i($e,8)?$e:Promise.reject($e))}function j(Y,re,se){for(const he of p.list())he(Y,re,se)}function K(Y,re,se,he,Ne){const Oe=w(Y,re);if(Oe)return Oe;const xe=re===si,$e=Qi?history.state:{};se&&(he||xe?r.replace(Y.fullPath,Ye({scroll:xe&&$e&&$e.scroll},Ne)):r.push(Y.fullPath,Ne)),s.value=Y,We(Y,re,se,xe),Le()}let U;function me(){U=r.listen((Y,re,se)=>{const he=B(Y),Ne=D(he);if(Ne){F(Ye(Ne,{replace:!0}),he).catch(qa);return}u=he;const Oe=s.value;Qi&&Hh(Sr(Oe.fullPath,se.delta),Sn()),z(he,Oe).catch(xe=>$i(xe,12)?xe:$i(xe,2)?(F(xe.to,he).then($e=>{$i($e,20)&&!se.delta&&se.type===al.pop&&r.go(-1,!1)}).catch(qa),Promise.reject()):(se.delta&&r.go(-se.delta,!1),ce(xe,he,Oe))).then(xe=>{xe=xe||K(he,Oe,!1),xe&&(se.delta?r.go(-se.delta,!1):se.type===al.pop&&$i(xe,20)&&r.go(-1,!1)),j(he,Oe,xe)}).catch(qa)})}let Te=La(),G=La(),W;function ce(Y,re,se){Le(Y);const he=G.list();return he.length?he.forEach(Ne=>Ne(Y,re,se)):console.error(Y),Promise.reject(Y)}function ie(){return W&&s.value!==si?Promise.resolve():new Promise((Y,re)=>{Te.add([Y,re])})}function Le(Y){W||(W=!0,me(),Te.list().forEach(([re,se])=>Y?se(Y):re()),Te.reset())}function We(Y,re,se,he){const{scrollBehavior:Ne}=e;if(!Qi||!Ne)return Promise.resolve();const Oe=!se&&Nh(Sr(Y.fullPath,0))||(he||!se)&&history.state&&history.state.scroll||null;return Aa().then(()=>Ne(Y,re,Oe)).then(xe=>xe&&Vh(xe)).catch(xe=>ce(xe,Y,re))}const nt=Y=>r.go(Y);let Ue;const Yt=new Set;return{currentRoute:s,addRoute:v,removeRoute:_,hasRoute:k,getRoutes:C,resolve:B,options:e,push:x,replace:$,go:nt,back:()=>nt(-1),forward:()=>nt(1),beforeEach:c.add,beforeResolve:m.add,afterEach:p.add,onError:G.add,isReady:ie,install(Y){const re=this;Y.component("RouterLink",ws),Y.component("RouterView",T_),Y.config.globalProperties.$router=re,Object.defineProperty(Y.config.globalProperties,"$route",{enumerable:!0,get:()=>g(s)}),Qi&&!Ue&&s.value===si&&(Ue=!0,x(r.location).catch(Ne=>{}));const se={};for(const Ne in si)se[Ne]=H(()=>s.value[Ne]);Y.provide(yn,re),Y.provide(ys,ti(se)),Y.provide(vo,s);const he=Y.unmount;Yt.add(Y),Y.unmount=function(){Yt.delete(Y),Yt.size<1&&(u=si,U&&U(),s.value=si,Ue=!1,W=!1),he()}}}}function Ki(e){return e.reduce((a,n)=>a.then(()=>n()),Promise.resolve())}function D_(e,a){const n=[],o=[],r=[],c=Math.max(a.matched.length,e.matched.length);for(let m=0;m<c;m++){const p=a.matched[m];p&&(e.matched.find(u=>_a(u,p))?o.push(p):n.push(p));const s=e.matched[m];s&&(a.matched.find(u=>_a(u,s))||r.push(s))}return[n,o,r]}function Em(){return Ve(yn)}function Rm(){return Ve(ys)}const I_={__name:"Navbar",props:["onClick"],setup(e){const a=q(),n=Em();function o(r){return r.charAt(0).toUpperCase()+r.slice(1)}return rs(()=>{const m=n.currentRoute.value.path.match(/\/([^/]+)$/);m&&(a.value=o(m[1]))}),(r,c)=>{const m=y("SuiIcon"),p=y("SuiMenuItem"),s=y("SuiMenu");return T(),I(s,{id:"navbar",fixed:"",icon:"",inverted:"",size:"big"},{default:i(()=>[t(p,{onClick:e.onClick},{default:i(()=>[t(m,{name:"hamburger"})]),_:1},8,["onClick"]),t(p,null,{default:i(()=>[l(ke(a.value),1)]),_:1})]),_:1})}}},E_=we(I_,[["__scopeId","data-v-338afb35"]]),R_=E({name:"Sidebar",setup(){const e=Rm();return{isActive:m=>e.path===m,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),z_=S("strong",null," Fomantic UI Vue ",-1),P_=S("b",null,"Getting Started",-1);function F_(e,a,n,o,r,c){const m=y("sui-menu-item"),p=y("sui-menu-header"),s=y("sui-menu-menu"),u=y("sui-menu");return T(),I(u,{fluid:"",inverted:"",vertical:""},{default:i(()=>[t(m,{as:"div"},{default:i(()=>[z_]),_:1}),t(m,{as:"router-link",to:"/"},{default:i(()=>[P_]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Elements"}),t(s,null,{default:i(()=>[(T(!0),ge(Ce,null,tt(e.elements,f=>(T(),I(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Collections"}),t(s,null,{default:i(()=>[(T(!0),ge(Ce,null,tt(e.collections,f=>(T(),I(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Views"}),t(s,null,{default:i(()=>[(T(!0),ge(Ce,null,tt(e.views,f=>(T(),I(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Modules"}),t(s,null,{default:i(()=>[(T(!0),ge(Ce,null,tt(e.modules,f=>(T(),I(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const M_=we(R_,[["render",F_]]),V_={class:"sidemenu"},H_={style:{flex:"1","overflow-y":"scroll"}},N_={__name:"Sidebar",setup(e){return(a,n)=>(T(),ge("div",V_,[S("div",H_,[t(M_)])]))}},O_=we(N_,[["__scopeId","data-v-379ef704"]]),j_=E({name:"Sidebar",setup(){const e=Rm();return{isActive:m=>e.path===m,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),G_=S("strong",null," Fomantic UI Vue ",-1),q_=S("b",null,"Getting Started",-1);function U_(e,a,n,o,r,c){const m=y("sui-menu-item"),p=y("sui-menu-header"),s=y("sui-menu-menu"),u=y("sui-sidebar");return T(),I(u,{dimmed:"",inverted:"",style:{width:"250px"}},{default:i(()=>[t(m,{as:"div"},{default:i(()=>[G_]),_:1}),t(m,{as:"router-link",to:"/"},{default:i(()=>[q_]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Elements"}),t(s,null,{default:i(()=>[(T(!0),ge(Ce,null,tt(e.elements,f=>(T(),I(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Collections"}),t(s,null,{default:i(()=>[(T(!0),ge(Ce,null,tt(e.collections,f=>(T(),I(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Views"}),t(s,null,{default:i(()=>[(T(!0),ge(Ce,null,tt(e.views,f=>(T(),I(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Modules"}),t(s,null,{default:i(()=>[(T(!0),ge(Ce,null,tt(e.modules,f=>(T(),I(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const Y_=we(j_,[["render",U_]]),J_={class:"pusher",style:{height:"100vh"}},W_={class:"article"},K_={__name:"Home",setup(e){const a=q(!1),n=()=>a.value=!a.value;return C_(()=>{a.value=!1}),(o,r)=>{const c=y("router-view"),m=y("SuiSegment");return T(),I(m,{class:"pushable",style:{border:"none"}},{default:i(()=>[t(Y_,{visible:a.value},null,8,["visible"]),S("div",J_,[t(O_),t(E_,{"on-click":n}),S("div",W_,[t(c)])])]),_:1})}}},X_=we(K_,[["__scopeId","data-v-0bfd4ee9"]]);var Ir=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Q_(e){if(e.__esModule)return e;var a=e.default;if(typeof a=="function"){var n=function o(){return this instanceof o?Reflect.construct(a,arguments,this.constructor):a.apply(this,arguments)};n.prototype=a.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(o){var r=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(n,o,r.get?r:{enumerable:!0,get:function(){return e[o]}})}),n}const Z_=Q_(Ah);var Pm={exports:{}};(function(e){var a=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(o){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,c=0,m={},p={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function b(w){return w instanceof s?new s(w.type,b(w.content),w.alias):Array.isArray(w)?w.map(b):w.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++c}),b.__id},clone:function b(w,x){x=x||{};var $,D;switch(p.util.type(w)){case"Object":if(D=p.util.objId(w),x[D])return x[D];$={},x[D]=$;for(var F in w)w.hasOwnProperty(F)&&($[F]=b(w[F],x));return $;case"Array":return D=p.util.objId(w),x[D]?x[D]:($=[],x[D]=$,w.forEach(function(V,z){$[z]=b(V,x)}),$);default:return w}},getLanguage:function(b){for(;b;){var w=r.exec(b.className);if(w)return w[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,w){b.className=b.className.replace(RegExp(r,"gi"),""),b.classList.add("language-"+w)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch($){var b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec($.stack)||[])[1];if(b){var w=document.getElementsByTagName("script");for(var x in w)if(w[x].src==b)return w[x]}return null}},isActive:function(b,w,x){for(var $="no-"+w;b;){var D=b.classList;if(D.contains(w))return!0;if(D.contains($))return!1;b=b.parentElement}return!!x}},languages:{plain:m,plaintext:m,text:m,txt:m,extend:function(b,w){var x=p.util.clone(p.languages[b]);for(var $ in w)x[$]=w[$];return x},insertBefore:function(b,w,x,$){$=$||p.languages;var D=$[b],F={};for(var V in D)if(D.hasOwnProperty(V)){if(V==w)for(var z in x)x.hasOwnProperty(z)&&(F[z]=x[z]);x.hasOwnProperty(V)||(F[V]=D[V])}var j=$[b];return $[b]=F,p.languages.DFS(p.languages,function(K,U){U===j&&K!=b&&(this[K]=F)}),F},DFS:function b(w,x,$,D){D=D||{};var F=p.util.objId;for(var V in w)if(w.hasOwnProperty(V)){x.call(w,V,w[V],$||V);var z=w[V],j=p.util.type(z);j==="Object"&&!D[F(z)]?(D[F(z)]=!0,b(z,x,null,D)):j==="Array"&&!D[F(z)]&&(D[F(z)]=!0,b(z,x,V,D))}}},plugins:{},highlightAll:function(b,w){p.highlightAllUnder(document,b,w)},highlightAllUnder:function(b,w,x){var $={callback:x,container:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};p.hooks.run("before-highlightall",$),$.elements=Array.prototype.slice.apply($.container.querySelectorAll($.selector)),p.hooks.run("before-all-elements-highlight",$);for(var D=0,F;F=$.elements[D++];)p.highlightElement(F,w===!0,$.callback)},highlightElement:function(b,w,x){var $=p.util.getLanguage(b),D=p.languages[$];p.util.setLanguage(b,$);var F=b.parentElement;F&&F.nodeName.toLowerCase()==="pre"&&p.util.setLanguage(F,$);var V=b.textContent,z={element:b,language:$,grammar:D,code:V};function j(U){z.highlightedCode=U,p.hooks.run("before-insert",z),z.element.innerHTML=z.highlightedCode,p.hooks.run("after-highlight",z),p.hooks.run("complete",z),x&&x.call(z.element)}if(p.hooks.run("before-sanity-check",z),F=z.element.parentElement,F&&F.nodeName.toLowerCase()==="pre"&&!F.hasAttribute("tabindex")&&F.setAttribute("tabindex","0"),!z.code){p.hooks.run("complete",z),x&&x.call(z.element);return}if(p.hooks.run("before-highlight",z),!z.grammar){j(p.util.encode(z.code));return}if(w&&o.Worker){var K=new Worker(p.filename);K.onmessage=function(U){j(U.data)},K.postMessage(JSON.stringify({language:z.language,code:z.code,immediateClose:!0}))}else j(p.highlight(z.code,z.grammar,z.language))},highlight:function(b,w,x){var $={code:b,grammar:w,language:x};if(p.hooks.run("before-tokenize",$),!$.grammar)throw new Error('The language "'+$.language+'" has no grammar.');return $.tokens=p.tokenize($.code,$.grammar),p.hooks.run("after-tokenize",$),s.stringify(p.util.encode($.tokens),$.language)},tokenize:function(b,w){var x=w.rest;if(x){for(var $ in x)w[$]=x[$];delete w.rest}var D=new d;return h(D,D.head,b),f(b,D,w,D.head,0),_(D)},hooks:{all:{},add:function(b,w){var x=p.hooks.all;x[b]=x[b]||[],x[b].push(w)},run:function(b,w){var x=p.hooks.all[b];if(!(!x||!x.length))for(var $=0,D;D=x[$++];)D(w)}},Token:s};o.Prism=p;function s(b,w,x,$){this.type=b,this.content=w,this.alias=x,this.length=($||"").length|0}s.stringify=function b(w,x){if(typeof w=="string")return w;if(Array.isArray(w)){var $="";return w.forEach(function(j){$+=b(j,x)}),$}var D={type:w.type,content:b(w.content,x),tag:"span",classes:["token",w.type],attributes:{},language:x},F=w.alias;F&&(Array.isArray(F)?Array.prototype.push.apply(D.classes,F):D.classes.push(F)),p.hooks.run("wrap",D);var V="";for(var z in D.attributes)V+=" "+z+'="'+(D.attributes[z]||"").replace(/"/g,"&quot;")+'"';return"<"+D.tag+' class="'+D.classes.join(" ")+'"'+V+">"+D.content+"</"+D.tag+">"};function u(b,w,x,$){b.lastIndex=w;var D=b.exec(x);if(D&&$&&D[1]){var F=D[1].length;D.index+=F,D[0]=D[0].slice(F)}return D}function f(b,w,x,$,D,F){for(var V in x)if(!(!x.hasOwnProperty(V)||!x[V])){var z=x[V];z=Array.isArray(z)?z:[z];for(var j=0;j<z.length;++j){if(F&&F.cause==V+","+j)return;var K=z[j],U=K.inside,me=!!K.lookbehind,Te=!!K.greedy,G=K.alias;if(Te&&!K.pattern.global){var W=K.pattern.toString().match(/[imsuy]*$/)[0];K.pattern=RegExp(K.pattern.source,W+"g")}for(var ce=K.pattern||K,ie=$.next,Le=D;ie!==w.tail&&!(F&&Le>=F.reach);Le+=ie.value.length,ie=ie.next){var We=ie.value;if(w.length>b.length)return;if(!(We instanceof s)){var nt=1,Ue;if(Te){if(Ue=u(ce,Le,b,me),!Ue||Ue.index>=b.length)break;var re=Ue.index,Yt=Ue.index+Ue[0].length,Lt=Le;for(Lt+=ie.value.length;re>=Lt;)ie=ie.next,Lt+=ie.value.length;if(Lt-=ie.value.length,Le=Lt,ie.value instanceof s)continue;for(var Y=ie;Y!==w.tail&&(Lt<Yt||typeof Y.value=="string");Y=Y.next)nt++,Lt+=Y.value.length;nt--,We=b.slice(Le,Lt),Ue.index-=Le}else if(Ue=u(ce,0,We,me),!Ue)continue;var re=Ue.index,se=Ue[0],he=We.slice(0,re),Ne=We.slice(re+se.length),Oe=Le+We.length;F&&Oe>F.reach&&(F.reach=Oe);var xe=ie.prev;he&&(xe=h(w,xe,he),Le+=he.length),v(w,xe,nt);var $e=new s(V,U?p.tokenize(se,U):se,G,se);if(ie=h(w,xe,$e),Ne&&h(w,ie,Ne),nt>1){var L={cause:V+","+j,reach:Oe};f(b,w,x,ie.prev,Le,L),F&&L.reach>F.reach&&(F.reach=L.reach)}}}}}}function d(){var b={value:null,prev:null,next:null},w={value:null,prev:b,next:null};b.next=w,this.head=b,this.tail=w,this.length=0}function h(b,w,x){var $=w.next,D={value:x,prev:w,next:$};return w.next=D,$.prev=D,b.length++,D}function v(b,w,x){for(var $=w.next,D=0;D<x&&$!==b.tail;D++)$=$.next;w.next=$,$.prev=w,b.length-=D}function _(b){for(var w=[],x=b.head.next;x!==b.tail;)w.push(x.value),x=x.next;return w}if(!o.document)return o.addEventListener&&(p.disableWorkerMessageHandler||o.addEventListener("message",function(b){var w=JSON.parse(b.data),x=w.language,$=w.code,D=w.immediateClose;o.postMessage(p.highlight($,p.languages[x],x)),D&&o.close()},!1)),p;var C=p.util.currentScript();C&&(p.filename=C.src,C.hasAttribute("data-manual")&&(p.manual=!0));function k(){p.manual||p.highlightAll()}if(!p.manual){var B=document.readyState;B==="loading"||B==="interactive"&&C&&C.defer?document.addEventListener("DOMContentLoaded",k):window.requestAnimationFrame?window.requestAnimationFrame(k):window.setTimeout(k,16)}return p}(a);e.exports&&(e.exports=n),typeof Ir<"u"&&(Ir.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(r,c){var m={};m["language-"+c]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[c]},m.cdata=/^<!\[CDATA\[|\]\]>$/i;var p={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:m}};p["language-"+c]={pattern:/[\s\S]+/,inside:n.languages[c]};var s={};s[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:p},n.languages.insertBefore("markup","cdata",s)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(o,r){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:n.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(o){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var c=o.languages.markup;c&&(c.tag.addInlined("style","css"),c.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading…",r=function(C,k){return"✖ Error "+C+" while fetching file: "+k},c="✖ Error: File does not exist or is empty",m={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},p="data-src-status",s="loading",u="loaded",f="failed",d="pre[data-src]:not(["+p+'="'+u+'"]):not(['+p+'="'+s+'"])';function h(C,k,B){var b=new XMLHttpRequest;b.open("GET",C,!0),b.onreadystatechange=function(){b.readyState==4&&(b.status<400&&b.responseText?k(b.responseText):b.status>=400?B(r(b.status,b.statusText)):B(c))},b.send(null)}function v(C){var k=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(C||"");if(k){var B=Number(k[1]),b=k[2],w=k[3];return b?w?[B,Number(w)]:[B,void 0]:[B,B]}}n.hooks.add("before-highlightall",function(C){C.selector+=", "+d}),n.hooks.add("before-sanity-check",function(C){var k=C.element;if(k.matches(d)){C.code="",k.setAttribute(p,s);var B=k.appendChild(document.createElement("CODE"));B.textContent=o;var b=k.getAttribute("data-src"),w=C.language;if(w==="none"){var x=(/\.(\w+)$/.exec(b)||[,"none"])[1];w=m[x]||x}n.util.setLanguage(B,w),n.util.setLanguage(k,w);var $=n.plugins.autoloader;$&&$.loadLanguages(w),h(b,function(D){k.setAttribute(p,u);var F=v(k.getAttribute("data-range"));if(F){var V=D.split(/\r\n?|\n/g),z=F[0],j=F[1]==null?V.length:F[1];z<0&&(z+=V.length),z=Math.max(0,Math.min(z-1,V.length)),j<0&&(j+=V.length),j=Math.max(0,Math.min(j,V.length)),D=V.slice(z,j).join(`
`),k.hasAttribute("data-start")||k.setAttribute("data-start",String(z+1))}B.textContent=D,n.highlightElement(B)},function(D){k.setAttribute(p,f),B.textContent=D})}}),n.plugins.fileHighlight={highlight:function(k){for(var B=(k||document).querySelectorAll(d),b=0,w;w=B[b++];)n.highlightElement(w)}};var _=!1;n.fileHighlight=function(){_||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),_=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Pm);var Fm=Pm.exports;const eb=zm(Fm);function tb(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Al=Z_,Vn=tb(Fm),ib=Al.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function(a,n){var o=n.slots,r=n.attrs,c=o&&o.default&&o.default()||[],m=a.code||c&&c.length?c[0].children:"",p=a.inline,s=a.language,u=Vn.languages[s],f="language-".concat(s);return function(){return p?Al.h("code",{class:[f],innerHTML:Vn.highlight(m,u)}):Al.h("pre",Object.assign({},r,{class:[r.class,f]}),[Al.h("code",Object.assign({},r,{class:[r.class,f],innerHTML:Vn.highlight(m,u)}))])}}}),ab=ib;const Mm=zm(ab),lb=E({name:"DocPageHeader",props:{title:String,sub:String}}),nb={class:"intro",style:{padding:"2rem"}};function ob(e,a,n,o,r,c){const m=y("sui-header-subheader"),p=y("sui-header"),s=y("sui-divider"),u=y("sui-icon"),f=y("sui-menu-item"),d=y("sui-menu"),h=y("sui-container"),v=y("sui-segment");return T(),I(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",nb,[t(p,{as:"h1"},{default:i(()=>[l(ke(e.title)+" ",1),t(m,null,{default:i(()=>[l(ke(e.sub),1)]),_:1})]),_:1}),t(s,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1})}const Je=we(lb,[["render",ob]]),sb=E({name:"GettingStarted",components:{Prism:Mm,DocPageHeader:Je}}),wn=e=>(is("data-v-2f4c2002"),e=e(),as(),e),rb=wn(()=>S("p",null," Fomantic-UI Vue provides UI components based on Fomantic-UI. ",-1)),ub=wn(()=>S("p",null," You can import all components as Vue plugin. ",-1)),cb=wn(()=>S("br",null,null,-1)),db=wn(()=>S("p",null," Or pick a component indivisually, add it to your components option. ",-1));function mb(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("prism"),u=y("sui-container");return T(),ge("div",null,[t(m,{title:"Getting Started",sub:"Getting up and running with Fomantic-UI Vue"}),t(u,{class:"main"},{default:i(()=>[t(p,{as:"h2"},{default:i(()=>[l("Install")]),_:1}),rb,t(p,{as:"h3"},{default:i(()=>[l("via Package Manager")]),_:1}),t(s,{language:"bash"},{default:i(()=>[l(ke(`$ npm install vue-fomantic-ui
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
}`),1)]),_:1})]),_:1})])}const pb=we(sb,[["render",mb],["__scopeId","data-v-2f4c2002"]]),fb={__name:"DocSections",props:["docs"],setup(e){const a=e,n=H(()=>[...new Set(a.docs.map(o=>o.category))]);return(o,r)=>{const c=y("SuiHeader");return T(!0),ge(Ce,null,tt(n.value,(m,p)=>(T(),ge(Ce,{key:m},[t(c,{as:"h2",dividing:"",style:Ca({marginTop:p!==0?"5rem":"0",paddingTop:"2rem"})},{default:i(()=>[l(ke(m),1)]),_:2},1032,["style"]),(T(!0),ge(Ce,null,tt(e.docs.filter(s=>s.category===m),(s,u)=>(T(),I(ud(s.component),{key:s.label+"_"+u,id:s.id,style:{paddingTop:"3rem"}},null,8,["id"]))),128))],64))),128)}}},gb=e=>(is("data-v-e2ae2e49"),e=e(),as(),e),hb={class:"item"},_b=gb(()=>S("i",{class:"dropdown icon"},null,-1)),bb={class:"content menu active"},vb={__name:"DocTableLink",props:["header","items"],setup(e){const{id:a}=$d(),n=m=>{m.preventDefault();const p=document.getElementById(a);p.open?r(p):(p.open=!0,o(p))},o=m=>{m.querySelector(".title").classList.add("active");const s=m.querySelector(".content"),u=s.offsetHeight;s.style.maxHeight=0,requestAnimationFrame(()=>{s.style.maxHeight=`${u}px`});const f=new AbortController;s.addEventListener("transitionend",()=>{s.removeAttribute("style"),f.abort()},{signal:f.signal})},r=m=>{const p=m.querySelector(".title"),s=m.querySelector(".content"),u=s.offsetHeight;s.style.maxHeight=`${u}px`,requestAnimationFrame(()=>{s.style.maxHeight=0,p.classList.remove("active")});const f=new AbortController;s.addEventListener("transitionend",()=>{s.removeAttribute("style"),m.open=!1,f.abort()},{signal:f.signal})},c=(m,p)=>{m.preventDefault(),document.getElementById(p.replace("_link","")).scrollIntoView({behavior:"smooth",block:"start"})};return(m,p)=>(T(),ge("details",hb,[S("summary",{class:"title",onClick:n},[_b,S("b",null,ke(e.header),1)]),S("div",bb,[(T(!0),ge(Ce,null,tt(e.items,s=>(T(),I(g(ws),{to:`#${s.id}`,class:"item",onClick:u=>c(u,s.id)},{default:i(()=>[l(ke(s.label),1)]),_:2},1032,["to","onClick"]))),256))])]))}},yb=we(vb,[["__scopeId","data-v-e2ae2e49"]]),Sb={class:"sticky"},wb={class:"ui vertical following fluid accordion text large menu"},Cb={__name:"DocTableContents",props:["title","links"],setup(e){const a=e,n=[...new Set(a.links.map(o=>o.category))];return(o,r)=>{const c=y("SuiHeader"),m=y("SuiRail");return T(),I(m,{id:"table-contents",position:"right",dividing:""},{default:i(()=>[S("div",Sb,[t(c,{as:"h3"},{default:i(()=>[l(ke(e.title),1)]),_:1}),S("div",wb,[(T(),ge(Ce,null,tt(n,p=>t(yb,{id:`${p}_link`,header:p,items:e.links.filter(s=>s.category===p)},null,8,["id","header","items"])),64))])])]),_:1})}}},Ab=we(Cb,[["__scopeId","data-v-bd90305d"]]),kb={class:"intro"},xb={__name:"DocComponent",props:["title","description","componentDocs"],setup(e){return(a,n)=>{const o=y("SuiHeaderSubheader"),r=y("SuiHeader"),c=y("SuiDivider"),m=y("SuiIcon"),p=y("SuiMenuItem"),s=y("SuiMenu"),u=y("SuiContainer"),f=y("SuiSegment");return T(),ge("div",null,[t(f,{id:"masthead",vertical:"",style:{"border-bottom":"1px solid #DDDDDD"}},{default:i(()=>[t(u,{class:"main"},{default:i(()=>[S("div",kb,[t(r,{as:"h1"},{default:i(()=>[l(ke(e.title)+" ",1),t(o,null,{default:i(()=>[l(ke(e.description),1)]),_:1})]),_:1}),t(c,{hidden:""}),t(s,{floated:"right"},{default:i(()=>[t(p,{as:"a",icon:""},{default:i(()=>[t(m,{name:"edit"})]),_:1}),t(p,{as:"a",icon:""},{default:i(()=>[t(m,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(u,{class:"main"},{default:i(()=>[t(f,{basic:"",fitted:""},{default:i(()=>[t(fb,{docs:e.componentDocs},null,8,["docs"]),t(Ab,{title:e.title,links:e.componentDocs},null,8,["title","links"])]),_:1})]),_:1})])}}},Nt=we(xb,[["__scopeId","data-v-56cc7477"]]);function Vm(e){var a,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(n=Vm(e[a]))&&(o&&(o+=" "),o+=n);else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function ee(){for(var e,a,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(a=Vm(e))&&(o&&(o+=" "),o+=a);return o}const A=(e,a)=>e?a:"",Me=(e,a)=>typeof e=="string"?`${e} ${a}`:"",Fe=(e,a)=>e===!0?a:e==="below"?`${a} ${e}`:typeof e=="string"?`${e} ${a}`:"",xa=e=>e==="justified"?"justified":Me(e,"aligned"),ai=(e,a)=>typeof e=="number"&&a?`${wo(e)} ${a}`:typeof e=="number"&&!a?wo(e):typeof e=="string"&&e==="equal"?`${e} width`:"",Da=(e,a)=>e?`${wo(e)} wide ${a}`:"",wo=e=>["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"][e-1],Q=E({name:"SuiIcon",props:{as:String,bordered:Boolean,circular:Boolean,color:String,corner:[Boolean,String],disabled:Boolean,fitted:Boolean,flipped:String,inverted:Boolean,link:Boolean,loading:Boolean,name:String,rotated:String,size:String},setup(e){return{computedClass:H(()=>ee(e.color,e.name,e.size,A(e.bordered,"bordered"),A(e.circular,"circular"),A(e.disabled,"disabled"),A(e.fitted,"fitted"),A(e.inverted,"inverted"),A(e.link,"link"),A(e.loading,"loading"),Me(e.flipped,"flipped"),Me(e.rotated,"rotated"),Fe(e.corner,"corner"),"icon"))}},render(){let e=this.$props.as||"i";return J(e,{"aria-hidden":!0,class:this.computedClass})}}),gi=E({name:"SuiIconGroup",props:{as:String,size:String},setup(e){return{computedClass:H(()=>ee(e.size,"icons"))}},render(){var e,a;let n=this.$props.as||"i";return J(n,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),$b={install(e){e.component(Q.name,Q),e.component(gi.name,gi)}},Bb=()=>({icon:[Boolean,String]}),Tb=e=>({iconClasses:H(()=>typeof e.icon=="boolean"&&e.icon||e.labeled&&e.icon?"icon":ee({icon:e.icon&&!e.content}))}),Lb=["right","left"],Db=()=>({labeled:[Boolean,String]}),Ib=e=>({labeledClasses:H(()=>typeof e.labeled=="boolean"&&e.labeled?"labeled":Lb.includes(e.labeled)?`${e.labeled} labeled`:"")}),Eb=["double","elastic"],Rb=()=>({loading:{type:[Boolean,String],validator:e=>Eb.includes(e)||typeof e=="boolean"}}),zb=e=>({loadingClasses:H(()=>ee(e.loading,{loading:e.loading}))}),P=E({name:"SuiButton",props:{active:Boolean,animated:[Boolean,String],as:{type:String,default:"button"},attached:String,basic:Boolean,circular:Boolean,color:String,compact:Boolean,content:[String,Array],disabled:Boolean,facebook:Boolean,floated:String,fluid:Boolean,google:Boolean,linkedin:Boolean,instagram:Boolean,inverted:Boolean,negative:Boolean,positive:Boolean,primary:Boolean,secondary:Boolean,size:String,telegram:Boolean,tertiary:Boolean,toggle:Boolean,twitter:Boolean,vk:Boolean,whatsapp:Boolean,youtube:Boolean,...Bb(),...Db(),...Rb()},setup(e){const{iconClasses:a}=Tb(e),{labeledClasses:n}=Ib(e),{loadingClasses:o}=zb(e);return{classes:H(()=>ee("ui",e.color,e.size,A(e.active,"active"),A(e.basic,"basic"),A(e.circular,"circular"),A(e.compact,"compact"),A(e.disabled,"disabled"),A(e.facebook,"facebook"),A(e.fluid,"fluid"),A(e.google,"google"),A(e.linkedin,"linkedin"),A(e.instagram,"instagram"),A(e.inverted,"inverted"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.primary,"primary"),A(e.secondary,"secondary"),A(e.telegram,"telegram"),A(e.tertiary,"tertiary"),A(e.toggle,"toggle"),A(e.twitter,"twitter"),A(e.vk,"vk"),A(e.whatsapp,"whatsapp"),A(e.youtube,"youtube"),Me(e.attached,"attached"),Me(e.floated,"floated"),Fe(e.animated,"animated"),a.value,n.value,o.value,"button"))}},render(){let e=this.as||"div";return t(e,{class:this.classes,role:"button"},{default:()=>{var a,n;return[typeof this.icon=="string"&&t(Q,{name:this.icon},null),this.content||((n=(a=this.$slots).default)==null?void 0:n.call(a))]}})}}),fi=E({name:"SuiButtonContent",props:{hidden:Boolean,visible:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.hidden,"hidden"),A(e.visible,"visible"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),dt=E({name:"SuiButtonGroup",props:{attached:String,basic:Boolean,color:String,icon:Boolean,labeled:Boolean,size:String,vertical:Boolean,widths:Number},setup(e){return{computedClass:H(()=>ee("ui",e.color,e.size,A(e.basic,"basic"),A(e.icon,"icon"),A(e.labeled,"labeled"),A(e.vertical,"vertical"),Me(e.attached,"attached"),ai(e.widths,""),"buttons"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Pb={install(e){e.component(P.name,P),e.component(fi.name,fi),e.component(dt.name,dt)}},bi=E({name:"SuiContainer",props:{fluid:Boolean,text:Boolean,textAlign:String},setup(e){return{computedClass:H(()=>ee("ui",A(e.fluid,"fluid"),A(e.text,"text"),xa(e.textAlign),"container"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Fb={install(e){e.component(bi.name,bi)}},Xe=E({name:"SuiDivider",props:{clearing:Boolean,fitted:Boolean,hidden:Boolean,horizontal:Boolean,inverted:Boolean,section:Boolean,textAlign:String,vertical:Boolean},setup(e){return{computedClass:H(()=>ee("ui",A(e.clearing,"clearing"),A(e.fitted,"fitted"),A(e.hidden,"hidden"),A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),A(e.section,"section"),A(e.vertical,"vertical"),Me(e.textAlign,"aligned"),"divider"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Mb={install(e){e.component(Xe.name,Xe)}},St=E({name:"SuiEmoji",props:{disabled:Boolean,link:Boolean,loading:Boolean,name:String,size:String},setup(e){return{computedClass:H(()=>ee(e.size,A(e.disabled,"disabled"),A(e.link,"link"),A(e.loading,"loading")))}},render(){return this.computedClass?J("em",{class:this.computedClass,"data-emoji":this.$props.name}):J("em",{"data-emoji":this.$props.name})}}),Vb={install(e){e.component(St.name,St)}},Ft=E({name:"SuiFlag",props:{name:String},setup(e){return{computedClass:H(()=>ee(e.name,"flag"))}},render(){return J("i",{class:this.computedClass})}}),Hb={install(e){e.component(Ft.name,Ft)}},va=E({name:"SuiHeaderSubheader",props:{as:String},setup(e){return{elementType:e.as||"div"}},render(){var e,a;return J(this.elementType,{class:"sub header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),fe=E({name:"SuiHeader",components:{HeaderSubheader:va},props:{as:String,attached:[Boolean,String],block:Boolean,color:String,content:String,disabled:Boolean,dividing:Boolean,floated:String,icon:Boolean,image:Boolean,inverted:Boolean,size:String,sub:Boolean,subheader:String,textAlign:String},setup(e){const a=e.as||"div",n=H(()=>ee("ui",e.color,e.size,A(e.block,"block"),A(e.disabled,"disabled"),A(e.dividing,"dividing"),A(e.icon,"icon"),A(e.image,"image"),A(e.inverted,"inverted"),A(e.sub,"sub"),Me(e.floated,"floated"),Fe(e.attached,"attached"),xa(e.textAlign),"header"));return{elementType:a,computedClass:n}},render(){var e,a;let n=[];return this.content&&n.push(this.content),this.subheader&&n.push(J(va,{},this.subheader)),n.length>0?J(this.elementType,{class:this.computedClass},n):J(this.elementType,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Gl=E({name:"SuiHeaderContent",render(){var e,a;return J("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Nb={install(e){e.component(fe.name,fe),e.component(Gl.name,Gl),e.component(va.name,va)}},Hm=["top","middle","bottom"],Ob={verticalAlign:{type:String,validator:e=>Hm.includes(e)}};function jb(e){return{verticalAlignClass:H(()=>e.verticalAlign&&Hm.includes(e.verticalAlign)?`${e.verticalAlign} aligned`:null)}}const Gb=["left","right"],qb={floated:{type:String,validator:e=>Gb.includes(e)}};function Ub(e){return{floatedClass:H(()=>e.floated&&(e.floated==="left"||e.floated==="right")?`${e.floated} floated`:null)}}const N=E({name:"SuiLabel",props:{as:String,attached:String,basic:Boolean,circular:Boolean,color:String,corner:String,empty:Boolean,floating:Boolean,horizontal:Boolean,icon:String,image:Boolean,inverted:Boolean,pointing:[Boolean,String],prompt:Boolean,ribbon:[Boolean,String],size:String,tag:Boolean},setup(e,{slots:a}){const n=H(()=>ee("ui",e.size,e.color,A(e.basic,"basic"),A(e.circular,"circular"),A(e.empty,"empty"),A(e.floating,"floating"),A(e.horizontal,"horizontal"),A(e.image,"image"),A(e.inverted,"inverted"),A(e.prompt,"prompt"),A(e.tag,"tag"),Me(e.attached,"attached"),Me(e.corner,"corner"),Fe(e.pointing,"pointing"),Fe(e.ribbon,"ribbon"),"label"));let o=e.as||"div";return e.icon?()=>J(o,{class:n.value},J(Q,{name:e.icon})):()=>{var r;return J(o,{class:n.value},(r=a.default)==null?void 0:r.call(a))}}}),Ni=E({name:"SuiLabelDetail",render(){var e,a;return t("div",{class:"detail"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Oi=E({name:"SuiLabelGroup",props:{basic:Boolean,circular:Boolean,color:String,size:String,tag:Boolean},setup(e,{slots:a}){const n=H(()=>ee("ui",e.color,e.size,A(e.basic,"basic"),A(e.circular,"circular"),A(e.tag,"tag"),"labels"));return()=>{var o;return J("div",{class:n.value},(o=a.default)==null?void 0:o.call(a))}}}),Yb={install(e){e.component(N.name,N),e.component(Ni.name,Ni),e.component(Oi.name,Oi)}},Be=E({name:"SuiImage",props:{as:String,avatar:Boolean,bordered:Boolean,centered:Boolean,circular:Boolean,disabled:Boolean,fluid:Boolean,hidden:Boolean,href:String,inline:Boolean,label:Object,target:String,wrapped:Boolean,rounded:Boolean,size:String,spaced:[Boolean,String],src:String,...Ob,...qb},setup(e,{slots:a}){const{verticalAlignClass:n}=jb(e),{floatedClass:o}=Ub(e),r=H(()=>ee("ui",e.size,n.value,o.value,A(e.avatar,"avatar"),A(e.bordered,"bordered"),A(e.centered,"centered"),A(e.circular,"circular"),A(e.disabled,"disabled"),A(e.fluid,"fluid"),A(e.hidden,"hidden"),A(e.inline,"inline"),A(e.rounded,"rounded"),Fe(e.spaced,"spaced"),"image"));if(e.as==="a"||e.as==="router-link"){let c=e.as;return e.as==="router-link"&&(c=y(e.as)),()=>{var m;return J(c,{class:r.value,href:e.href,target:e.target&&e.target},J("img",{src:e.src},(m=a.default)==null?void 0:m.call(a)))}}return e.wrapped?()=>{var c;return J("div",{class:r.value},J("img",{src:e.src},(c=a.default)==null?void 0:c.call(a)))}:e.label?()=>J("div",{class:r.value},[J("img",{src:e.src}),J(N,{...e.label})]):()=>t("img",{class:r.value,src:e.src},null)}}),Er=E({name:"SuiImageGroup",props:{size:String},setup(e,{slots:a}){const n=H(()=>ee("ui",e.size,"images"));return()=>{var o;return J("div",{class:n.value},(o=a.default)==null?void 0:o.call(a))}}}),Jb={install(e){e.component(Be.name,Be),e.component(Er.name,Er)}},et=E({name:"SuiInput",emits:["update:modelValue"],props:{action:String,disabled:Boolean,error:Boolean,fluid:Boolean,focus:Boolean,icon:String,iconPosition:String,inverted:Boolean,label:String,labeled:Boolean,loading:Boolean,modelValue:String,placeholder:String,size:String,transparent:Boolean,type:String},setup(e,{emit:a}){const n=H(()=>typeof e.icon=="string"||e.loading),o=H(()=>!!e.label||e.labeled),r=H(()=>ee("ui",e.size,e.action&&"action",A(e.disabled,"disabled"),A(e.error,"error"),A(e.fluid,"fluid"),A(e.focus,"focus"),e.iconPosition,A(n.value,"icon"),A(e.inverted,"inverted"),A(e.loading,"loading"),A(e.transparent,"transparent"),A(o.value,"labeled"),"input")),c=m=>a("update:modelValue",m.target.value);return()=>t("div",{class:r.value},[e.label&&t(N,null,{default:()=>[e.label]}),t("input",{type:e.type||"text",placeholder:e.placeholder,value:e.modelValue,onInput:m=>c(m)},null),n.value&&t(Q,{name:e.icon||"spinner"},null),e.action&&t(P,null,{default:()=>[e.action]})])}}),Wb={install(e){e.component(et.name,et)}},Co=E({name:"SuiList",props:{animated:Boolean,as:String,bulleted:Boolean,celled:Boolean,divided:Boolean,floated:String,horizontal:Boolean,inverted:Boolean,ordered:Boolean,relaxed:Boolean,link:Boolean,selection:Boolean,verticalAlign:String},setup(e,{slots:a}){const n=H(()=>ee("ui",A(e.animated,"animated"),A(e.bulleted,"bulleted"),A(e.celled,"celled"),A(e.divided,"divided"),A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),A(e.link,"link"),A(e.ordered,"ordered"),A(e.relaxed,"relaxed"),A(e.selection,"selection"),Me(e.verticalAlign,"aligned"),Me(e.floated,"floated"),"list"));let o=e.as||"div";return()=>{var r;return J(o,{class:n.value},(r=a.default)==null?void 0:r.call(a))}}}),Zi=E({name:"SuiListItem",props:{active:Boolean,as:String,disabled:Boolean},setup(e,{slots:a}){let n=e.as||"div";const o=H(()=>ee(A(e.active,"active"),A(e.disabled,"disabled"),"item"));return()=>{var r;return J(n,{class:o.value},(r=a.default)==null?void 0:r.call(a))}}}),Rr=E({name:"SuiListIcon",components:{Icon:Q},setup(e,{slots:a}){return()=>{var n;return J(y(Q.name),{...e},(n=a.default)==null?void 0:n.call(a))}}}),zr=E({name:"SuiListContent",props:{verticalAlign:String},setup(e){return{computedClass:H(()=>ee(Me(e.verticalAlign,"aligned"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Pr=E({name:"SuiListHeader",props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:a}){return()=>{var n;return J(e.as,{class:"header"},(n=a.default)==null?void 0:n.call(a))}}}),Fr=E({name:"SuiListDescription",props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:a}){return()=>{var n;return J(e.as,{class:"description"},(n=a.default)==null?void 0:n.call(a))}}}),Mr=E({name:"SuiListList",render(){var e,a;return t("div",{class:"list"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Kb={install(e){e.component(Co.name,Co),e.component(Zi.name,Zi),e.component(Rr.name,Rr),e.component(zr.name,zr),e.component(Pr.name,Pr),e.component(Fr.name,Fr),e.component(Mr.name,Mr)}},Re=E({name:"SuiLoader",props:{active:Boolean,color:String,disabled:Boolean,fast:Boolean,indeterminate:Boolean,inline:[Boolean,String],inverted:Boolean,size:String,slow:Boolean,text:Boolean},setup(e,{slots:a}){return{computedClass:H(()=>{var n;return ee("ui",e.color,e.size,A(e.active,"active"),A(e.disabled,"disabled"),A(e.fast,"fast"),A(e.indeterminate,"indeterminate"),A(e.inverted,"inverted"),A(e.slow,"slow"),A(e.text||!!((n=a.default)!=null&&n.call(a)),"text"),Fe(e.inline,"inline"),"loader")})}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Xb={install(e){e.component(Re.name,Re)}},Vr=E({name:"SuiRail",props:{attached:Boolean,close:[Boolean,String],dividing:Boolean,internal:Boolean,position:String,size:String},setup(e){return{computedClass:H(()=>ee("ui",e.position,e.size,A(e.attached,"attached"),A(e.dividing,"dividing"),A(e.internal,"internal"),Fe(e.close,"close"),"rail"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Qb={install(e){e.component(Vr.name,Vr)}},Hr=E({name:"SuiReveal",props:{active:Boolean,animated:String,disabled:Boolean,instant:Boolean},setup(e){return{computedClass:H(()=>ee("ui",e.animated,A(e.active,"active"),A(e.disabled,"disabled"),A(e.instant,"instant"),"reveal"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Nr=E({name:"SuiRevealContent",props:{visible:Boolean,hidden:Boolean},setup(e){return{computedClass:H(()=>ee("ui",A(e.visible,"visible"),A(e.hidden,"hidden"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Zb={install(e){e.component(Hr.name,Hr),e.component(Nr.name,Nr)}},Ie=E({name:"SuiSegment",props:{attached:[Boolean,String],basic:Boolean,circular:Boolean,clearing:Boolean,color:String,compact:Boolean,disabled:Boolean,fitted:[Boolean,String],floated:String,inverted:Boolean,loading:Boolean,padded:[Boolean,String],piled:Boolean,placeholder:Boolean,raised:Boolean,secondary:Boolean,size:String,stacked:Boolean,tertiary:Boolean,textAlign:String,vertical:Boolean},setup(e){return{computedClass:H(()=>ee("ui",e.color,e.size,A(e.basic,"basic"),A(e.circular,"circular"),A(e.clearing,"clearing"),A(e.compact,"compact"),A(e.disabled,"disabled"),A(e.inverted,"inverted"),A(e.loading,"loading"),A(e.piled,"piled"),A(e.placeholder,"placeholder"),A(e.raised,"raised"),A(e.secondary,"secondary"),A(e.stacked,"stacked"),A(e.tertiary,"tertiary"),A(e.vertical,"vertical"),Me(e.floated,"floated"),Me(e.textAlign,"aligned"),Fe(e.attached,"attached"),Fe(e.fitted,"fitted"),Fe(e.padded,"padded"),"segment"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Or=E({name:"SuiSegmentGroup",props:{compact:Boolean,horizontal:Boolean,piled:Boolean,raised:Boolean,size:String,stacked:Boolean},setup(e){return{computedClass:H(()=>ee("ui",e.size,A(e.compact,"compact"),A(e.horizontal,"horizontal"),A(e.piled,"piled"),A(e.raised,"raised"),A(e.stacked,"stacked"),"segments"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),jr=E({name:"SuiSegmentInline",render(){var e,a;return t("div",{class:"inline"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),ev={install(e){e.component(Ie.name,Ie),e.component(Or.name,Or),e.component(jr.name,jr)}},Gr=E({name:"SuiStep",props:{active:Boolean,completed:Boolean,disabled:Boolean,fluid:Boolean,href:String,link:Boolean,vertical:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.active,"active"),A(e.completed,"completed"),A(e.disabled,"disabled"),A(e.fluid,"fluid"),A(e.link,"link"),A(e.vertical,"vertical"),"step"))}},render(){var e,a,n,o;return this.href?t("a",{class:this.computedClass,href:this.href},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("div",{class:this.computedClass},[(o=(n=this.$slots).default)==null?void 0:o.call(n)])}}),tv=["one","two","three","four","five","six","seven","eight"],qr=E({name:"SuiStepGroup",props:{attached:String,fluid:Boolean,inverted:Boolean,ordered:Boolean,size:String,stackable:String,unstackable:Boolean,vertical:Boolean,widths:Number},setup(e){const{widths:a}=e;return{computedClass:H(()=>ee("ui",a&&tv[a-1],e.size,A(e.fluid,"fluid"),A(e.inverted,"inverted"),A(e.ordered,"ordered"),A(e.unstackable,"unstackable"),A(e.vertical,"vertical"),Me(e.attached,"attached"),Me(e.stackable,"stackable"),"steps"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Ur=E({name:"SuiStepContent",render(){var e,a;return t("div",{class:"content"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Yr=E({name:"SuiStepTitle",render(){var e,a;return t("div",{class:"title"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Jr=E({name:"SuiStepDescription",render(){var e,a;return t("div",{class:"description"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),iv={install(e){e.component(Gr.name,Gr),e.component(qr.name,qr),e.component(Ur.name,Ur),e.component(Yr.name,Yr),e.component(Jr.name,Jr)}},av=Object.freeze(Object.defineProperty({__proto__:null,Button:Pb,Container:Fb,Divider:Mb,Emoji:Vb,Flag:Hb,Header:Nb,Icon:$b,Image:Jb,Input:Wb,Label:Yb,List:Kb,Loader:Xb,Rail:Qb,Reveal:Zb,Segment:ev,Step:iv},Symbol.toStringTag,{value:"Module"})),Ao=E({name:"SuiBreadcrumbDivider",props:{icon:String},setup(e){return{computedClass:H(()=>ee(e.icon,"icon","divider"))}},render(){var e,a;return this.icon?t("i",{"aria-hidden":"true",class:this.computedClass},null):t("div",{class:"divider"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),ko=E({name:"SuiBreadcrumbSection",props:{active:Boolean,href:String,link:Boolean,to:String},setup(e){const a=H(()=>ee(A(e.active,"active"),"section")),n=e.link||!!e.href;return{computedClass:a,isLink:n}},render(){let e="div";this.isLink?e="a":this.to&&(e=y("router-link"));const a={href:this.href,to:this.to};return t(e,Ji({class:this.computedClass},a),{default:()=>{var n,o;return[(o=(n=this.$slots).default)==null?void 0:o.call(n)]}})}}),Wr=E({name:"SuiBreadcrumb",props:{icon:String,inverted:Boolean,sections:{type:Array,default:()=>[]},size:String},setup(e){return{computedClass:H(()=>ee("ui",e.size,A(e.inverted,"inverted"),"breadcrumb"))}},render(){var e,a;const n=()=>{var o;return(o=this.sections)==null?void 0:o.map((r,c)=>{const m={active:r.active,href:r.href,link:r.link,to:r.to};return t(Ce,null,[t(ko,m,{default:()=>[r.content]}),this.sections.length!==c+1&&t(Ao,{icon:this.icon},{default:()=>[l(" / ")]})])})};return t("div",{class:this.computedClass},[((a=(e=this.$slots).default)==null?void 0:a.call(e))||n()])}}),lv={install(e){e.component(Wr.name,Wr),e.component(Ao.name,Ao),e.component(ko.name,ko)}},ql=E({name:"SuiForm",props:{error:Boolean,inverted:Boolean,loading:Boolean,reply:Boolean,success:Boolean,unstackable:Boolean,warning:Boolean,size:String},setup(e){return{computedClass:H(()=>ee("ui",e.size,A(e.error,"error"),A(e.inverted,"inverted"),A(e.loading,"loading"),A(e.reply,"reply"),A(e.success,"success"),A(e.unstackable,"unstackable"),A(e.warning,"warning"),"form"))}},render(){var e,a;return t("form",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Kr=["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"];function nv(e){return{widthClass:H(()=>Number(e.width)>0?`${Kr[Number(e.width)-1]} wide`:typeof e.width=="string"||Kr.includes(e.width)?`${e.width} wide`:null)}}const hi=E({name:"SuiFormField",emits:["update:modelValue"],props:{disabled:Boolean,error:Boolean,inline:Boolean,label:String,modelValue:String,placeholder:String,required:Boolean,type:String,width:String||Number},setup(e,{emit:a}){const{widthClass:n}=nv(e),o=H(()=>ee(A(e.disabled,"disabled"),A(e.error,"error"),A(e.inline,"inline"),A(e.required,"required"),n.value,"field")),r=e.type||"text";return{computedClass:o,inputType:r,onInput:c=>a("update:modelValue",c.target.value)}},render(){var e,a;return this.label?t("div",{class:this.computedClass},[t("label",null,[this.label]),t("input",{type:this.inputType,placeholder:this.placeholder,value:this.modelValue,onInput:this.onInput},null)]):t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Xr=E({name:"SuiFormGroup",props:{widths:String},setup(e){return{computedClass:H(()=>ee(Me(e.widths,"width"),"fields"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Qr=E({name:"SuiFormTextarea",props:{label:String,placeholder:String},render(){return this.label&&t("div",{class:"field"},[t("label",null,[this.label]),t("textarea",{placeholder:this.placeholder},null)]),t("div",{class:"field"},[t("textarea",{placeholder:this.placeholder},null)])}}),ov={install(e){e.component(ql.name,ql),e.component(hi.name,hi),e.component(Xr.name,Xr),e.component(Qr.name,Qr)}},ya=E({name:"SuiGrid",props:{celled:[Boolean,String],centered:Boolean,columns:[Number,String],compact:Boolean,container:Boolean,divided:[Boolean,String],doubling:Boolean,inverted:Boolean,padded:[Boolean,String],relaxed:[Boolean,String],reversed:String,stackable:Boolean,textAlign:String,verticalAlign:String},setup(e){return{computedClass:H(()=>ee("ui",e.container&&"container",A(e.centered,"centered"),A(e.compact,"compact"),A(e.doubling,"doubling"),A(e.inverted,"inverted"),A(e.stackable,"stackable"),Me(e.reversed,"reversed"),Me(e.verticalAlign,"aligned"),Fe(e.celled,"celled"),Fe(e.divided,"divided"),Fe(e.padded,"padded"),Fe(e.relaxed,"relaxed"),xa(e.textAlign),ai(e.columns,"column"),"grid"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),bt=E({name:"SuiGridColumn",props:{color:String,computer:Number,floated:String,largeScreen:Number,mobile:Number,only:String,tablet:Number,textAlign:String,width:Number,widescreen:Number},setup(e){return{computedClass:H(()=>ee(e.color,Me(e.floated,"floated"),Me(e.only,"only"),xa(e.textAlign),ai(e.width,"wide"),Da(e.mobile,"mobile"),Da(e.tablet,"tablet"),Da(e.computer,"computer"),Da(e.largeScreen,"large screen"),Da(e.widescreen,"widescreen"),"column"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Ul=E({name:"SuiGridRow",props:{centered:Boolean,color:String,columns:Number,only:String,stretched:Boolean,textAlign:String},setup(e){return{computedClass:H(()=>ee(e.color,A(e.centered,"centered"),A(e.stretched,"stretched"),Me(e.only,"only"),ai(e.columns,"column"),xa(e.textAlign),"row"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),sv={install(e){e.component(ya.name,ya),e.component(bt.name,bt),e.component(Ul.name,Ul)}},xo=E({name:"SuiMenu",props:{attached:[Boolean,String],borderless:Boolean,color:Boolean,compact:Boolean,fixed:Boolean,floated:[Boolean,String],fluid:Boolean,icon:[Boolean,String],inverted:Boolean,pagination:Boolean,pointing:Boolean,secondary:Boolean,size:String,stackable:Boolean,tabular:[Boolean,String],text:Boolean,vertical:Boolean,widths:Number},setup(e){return{computedClass:H(()=>ee("ui",e.color,e.size,A(e.borderless,"borderless"),A(e.compact,"compact"),A(e.fixed,"fixed"),A(e.fluid,"fluid"),A(e.inverted,"inverted"),A(e.pagination,"pagination"),A(e.pointing,"pointing"),A(e.secondary,"secondary"),A(e.stackable,"stackable"),A(e.text,"text"),A(e.vertical,"vertical"),Fe(e.attached,"attached"),Fe(e.floated,"floated"),Fe(e.icon,"icon"),Fe(e.tabular,"tabular"),ai(e.widths,"item"),"menu"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Zr=E({name:"SuiMenuHeader",props:{as:String,content:String},setup(e,{slots:a}){let n=e.as||"div";return()=>t(n,{class:"header"},{default:()=>{var o;return[e.content||((o=a.default)==null?void 0:o.call(a))]}})}}),Yl=E({name:"SuiMenuItem",props:{action:Boolean,active:Boolean,as:String,browse:Boolean,color:String,disabled:Boolean,fitted:[Boolean,String],header:Boolean,icon:Boolean,index:Number,link:Boolean,name:String,position:String,stackable:Boolean},setup(e,{slots:a}){let n=e.as||"a";e.header&&(n="div"),e.as==="router-link"&&(n=y(e.as));const o=H(()=>ee(e.color,e.position,A(e.action,"action"),A(e.active,"active"),A(e.browse,"browse"),A(e.disabled,"disabled"),A(e.header,"header"),A(e.link,"link"),Fe(e.fitted,"fitted"),"item"));return()=>t(n,{class:o.value},{default:()=>{var r;return[e.name||((r=a.default)==null?void 0:r.call(a))]}})}}),eu=E({name:"SuiMenuMenu",props:{position:String},setup(e){const{position:a}=e;return{computedClass:H(()=>ee(a,"menu"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),rv={install(e){e.component(xo.name,xo),e.component(Zr.name,Zr),e.component(Yl.name,Yl),e.component(eu.name,eu)}},tu=E({name:"SuiMessage",props:{attached:[Boolean,String],color:String,compact:Boolean,content:String,header:String,error:Boolean,floating:Boolean,hidden:Boolean,icon:Boolean,info:Boolean,negative:Boolean,positive:Boolean,size:String,success:Boolean,visible:Boolean,warning:Boolean},setup(e){return{computedClass:H(()=>ee("ui",e.color,e.size,A(e.compact,"compact"),A(e.error,"error"),A(e.floating,"floating"),A(e.hidden,"hidden"),A(e.icon,"icon"),A(e.info,"info"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.success,"success"),A(e.visible,"visible"),A(e.warning,"warning"),Fe(e.attached,"attached"),"message"))}},render(){var e,a;return t("div",{class:this.computedClass},[(this.header||this.content)&&t($o,null,{default:()=>[t(Bo,null,{default:()=>[this.header]}),t("p",null,[this.content])]}),(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),$o=E({name:"SuiMessageContent",render(){var e,a;return J("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Bo=E({name:"SuiMessageHeader",render(){var e,a;return J("div",{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),iu=E({name:"SuiMessageItem",render(){var e,a;return J("li",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),au=E({name:"SuiMessageList",render(){var e,a;return J("ul",{class:"list"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),uv={install(e){e.component(tu.name,tu),e.component($o.name,$o),e.component(Bo.name,Bo),e.component(iu.name,iu),e.component(au.name,au)}},lu=E({name:"SuiTable",props:{attached:[Boolean,String],basic:[Boolean,String],celled:Boolean,collapsing:Boolean,color:String,columns:Number,compact:[Boolean,String],definition:Boolean,fixed:Boolean,inverted:Boolean,padded:[Boolean,String],selectable:Boolean,singleLine:Boolean,size:String,stackable:Boolean,striped:Boolean,structured:Boolean,unstackable:Boolean},setup(e){return{computedClass:H(()=>ee("ui",e.color,e.size,A(e.celled,"celled"),A(e.collapsing,"collapsing"),A(e.definition,"definition"),A(e.fixed,"fixed"),A(e.inverted,"inverted"),A(e.selectable,"selectable"),A(e.singleLine,"single line"),A(e.stackable,"stackable"),A(e.striped,"striped"),A(e.structured,"structured"),A(e.unstackable,"unstackable"),Fe(e.attached,"attached"),Fe(e.basic,"basic"),Fe(e.compact,"compact"),Fe(e.padded,"padded"),ai(e.columns,"column"),"table"))}},render(){var e,a;return t("table",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),nu=E({name:"SuiTableBody",render(){var e,a;return J("tbody",{},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ou=E({name:"SuiTableCell",props:{active:Boolean,collapsing:Boolean,color:String,disabled:Boolean,error:Boolean,marked:String,negative:Boolean,positive:Boolean,selectable:Boolean,singleLine:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:H(()=>ee(e.color,A(e.active,"active"),A(e.collapsing,"collapsing"),A(e.disabled,"disabled"),A(e.error,"error"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.selectable,"selectable"),A(e.singleLine,"single line"),A(e.warning,"warning"),Me(e.verticalAlign,"aligned"),Me(e.marked,"marked"),xa(e.textAlign)))}},render(){var e,a,n,o;return this.computedClass?t("td",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("td",null,[(o=(n=this.$slots).default)==null?void 0:o.call(n)])}}),su=E({name:"SuiTableFooter",props:{fullWidth:Boolean},setup(e){const{fullWidth:a}=e;return{computedClass:H(()=>ee(A(a,"full-width")))}},render(){var e,a,n,o;return this.computedClass?J("tfoot",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):J("tfoot",{},(o=(n=this.$slots).default)==null?void 0:o.call(n))}}),ru=E({name:"SuiTableHeader",props:{fullWidth:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.fullWidth,"full-width")))}},render(){var e,a,n,o;return this.computedClass?J("thead",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):J("thead",{},(o=(n=this.$slots).default)==null?void 0:o.call(n))}}),uu=E({name:"SuiTableHeaderCell",props:{singleLine:Boolean,textAlign:String,width:Number},setup(e){return{computedClass:H(()=>ee(A(e.singleLine,"single line"),Me(e.textAlign,"aligned"),ai(e.width,"wide")))}},render(){var e,a,n,o;return this.computedClass?t("th",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("th",null,[(o=(n=this.$slots).default)==null?void 0:o.call(n)])}}),cu=E({name:"SuiTableRow",props:{active:Boolean,color:String,disabled:Boolean,error:Boolean,negative:Boolean,positive:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:H(()=>ee(e.color,A(e.active,"active"),A(e.disabled,"disabled"),A(e.error,"error"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.warning,"warning"),Me(e.textAlign,"aligned"),Me(e.verticalAlign,"aligned")))}},render(){var e,a,n,o;return this.computedClass?t("tr",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("tr",null,[(o=(n=this.$slots).default)==null?void 0:o.call(n)])}}),cv={install(e){e.component(lu.name,lu),e.component(nu.name,nu),e.component(ou.name,ou),e.component(su.name,su),e.component(ru.name,ru),e.component(uu.name,uu),e.component(cu.name,cu)}},dv=Object.freeze(Object.defineProperty({__proto__:null,Breadcrumb:lv,Form:ov,Grid:sv,Menu:rv,Message:uv,Table:cv},Symbol.toStringTag,{value:"Module"})),du=E({name:"SuiAdvertisement",props:{centered:Boolean,test:String,unit:String},setup(e){return{computedClass:H(()=>ee("ui",e.unit,A(e.centered,"centered"),A(!!e.test,"test"),"ad"))}},render(){var e,a,n,o;return this.$props.test?J("div",{class:this.computedClass,"data-text":this.$props.test},(a=(e=this.$slots).default)==null?void 0:a.call(e)):J("div",{class:this.computedClass},(o=(n=this.$slots).default)==null?void 0:o.call(n))}}),mv={install(e){e.component(du.name,du)}},mu=E({name:"SuiCard",props:{centered:Boolean,color:String,fluid:Boolean,horizontal:Boolean,href:String,link:Boolean,raised:Boolean},setup(e){return{computedClass:H(()=>ee("ui",e.color,A(e.centered,"centered"),A(e.fluid,"fluid"),A(e.horizontal,"horizontal"),A(e.link,"link"),A(e.raised,"raised"),"card"))}},render(){var e,a,n,o;return this.$props.href||this.$props.link?J("a",{class:this.computedClass,href:this.$slots.href},(a=(e=this.$slots).default)==null?void 0:a.call(e)):J("div",{class:this.computedClass},(o=(n=this.$slots).default)==null?void 0:o.call(n))}}),pu=E({name:"SuiCardContent",props:{extra:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.extra,"extra"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),fu=E({name:"SuiCardDescription",props:{textAlign:String},setup(e){return{computedClass:H(()=>ee(Me(e.textAlign,"aligned"),"description"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),gu=E({name:"SuiCardGroup",props:{centered:Boolean,doubling:Boolean,inverted:Boolean,itemsPerRow:Number,stackable:Boolean},setup(e){return{computedClass:H(()=>ee("ui",A(e.centered,"centered"),A(e.doubling,"doubling"),A(e.inverted,"inverted"),A(e.stackable,"stackable"),ai(e.itemsPerRow,""),"cards"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),hu=E({name:"SuiCardHeader",props:{textAlign:String},setup(e){return{computedClass:H(()=>ee(Me(e.textAlign,"aligned"),"header"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),_u=E({name:"SuiCardMeta",render(){var e,a;return J("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),pv={install(e){e.component(mu.name,mu),e.component(pu.name,pu),e.component(fu.name,fu),e.component(gu.name,gu),e.component(hu.name,hu),e.component(_u.name,_u)}},bu=E({name:"SuiComment",render(){var e,a;return J("div",{class:"comment"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),vu=E({name:"SuiCommentAction",props:{active:Boolean},setup(e){const{active:a}=e;return{computedClass:H(()=>ee(A(a,"active")))}},render(){var e,a,n,o;return this.computedClass?J("a",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):J("a",{},(o=(n=this.$slots).default)==null?void 0:o.call(n))}}),yu=E({name:"SuiCommentActions",render(){var e,a;return J("div",{class:"actions"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Su=E({name:"SuiCommentAuthor",props:{as:String},render(){var e,a;let n=this.$props.as||"div";return J(n,{class:"author"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),wu=E({name:"SuiCommentAvatar",props:{as:String,src:String},render(){let e=this.$props.as||"div";return J(e,{class:"avatar"},J("img",{src:this.$props.src}))}}),Cu=E({name:"SuiCommentContent",render(){var e,a;return J("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Au=E({name:"SuiCommentGroup",props:{collapsed:Boolean,inverted:Boolean,minimal:Boolean,size:String,threaded:Boolean},setup(e){return{computedClass:H(()=>ee("ui",e.size,A(e.collapsed,"collapsed"),A(e.inverted,"inverted"),A(e.minimal,"minimal"),A(e.threaded,"threaded"),"comments"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),ku=E({name:"SuiCommentMetadata",render(){var e,a;return J("div",{class:"metadata"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),xu=E({name:"SuiCommentText",render(){var e,a;return J("div",{class:"text"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),fv={install(e){e.component(bu.name,bu),e.component(vu.name,vu),e.component(yu.name,yu),e.component(Su.name,Su),e.component(wu.name,wu),e.component(Cu.name,Cu),e.component(Au.name,Au),e.component(ku.name,ku),e.component(xu.name,xu)}},$u=E({name:"SuiFeed",props:{inverted:Boolean,size:String},setup(e){return{computedClass:H(()=>ee("ui",e.size,A(e.inverted,"inverted"),"feed"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Bu=E({name:"SuiFeedContent",render(){var e,a;return J("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Tu=E({name:"SuiFeedDate",render(){var e,a;return J("div",{class:"date"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Lu=E({name:"SuiFeedEvent",render(){var e,a;return J("div",{class:"event"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Du=E({name:"SuiFeedExtra",props:{images:Boolean,text:Boolean},setup(e){const{images:a,text:n}=e;return{computedClass:H(()=>ee(A(a,"images"),A(n,"text"),"extra"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Iu=E({name:"SuiFeedLabel",render(){var e,a;return J("div",{class:"label"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Eu=E({name:"SuiFeedLike",render(){var e,a;return J("a",{class:"like"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ru=E({name:"SuiFeedMeta",render(){var e,a;return J("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),zu=E({name:"SuiFeedSummary",render(){var e,a;return J("div",{class:"summary"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Pu=E({name:"SuiFeedUser",render(){var e,a;return J("a",{class:"user"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),gv={install(e){e.component($u.name,$u),e.component(Bu.name,Bu),e.component(Tu.name,Tu),e.component(Lu.name,Lu),e.component(Du.name,Du),e.component(Iu.name,Iu),e.component(Eu.name,Eu),e.component(Ru.name,Ru),e.component(zu.name,zu),e.component(Pu.name,Pu)}},Fu=E({name:"SuiItem",render(){var e,a;return J("div",{class:"item"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Mu=E({name:"SuiItemContent",props:{verticalAlign:String},setup(e){const{verticalAlign:a}=e;return{computedClass:H(()=>ee(Me(a,"aligned"),"content"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Vu=E({name:"SuiItemDescription",render(){var e,a;return J("div",{class:"description"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Hu=E({name:"SuiItemExtra",render(){var e,a;return J("div",{class:"extra"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Nu=E({name:"SuiItemGroup",props:{divided:Boolean,inverted:Boolean,link:Boolean,relaxed:[Boolean,String],unstackable:Boolean},setup(e){return{computedClass:H(()=>ee("ui",A(e.divided,"divided"),A(e.inverted,"inverted"),A(e.link,"link"),A(e.unstackable,"unstackable"),Fe(e.relaxed,"relaxed"),"items"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ou=E({name:"SuiItemHeader",props:{as:String},render(){var e,a;let n=this.$props.as||"div";return J(n,{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ju=E({name:"SuiItemImage",props:{size:String},setup(e){return{computedClass:H(()=>ee(e.size,"image"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Gu=E({name:"SuiItemMeta",render(){var e,a;return J("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),hv={install(e){e.component(Fu.name,Fu),e.component(Mu.name,Mu),e.component(Vu.name,Vu),e.component(Hu.name,Hu),e.component(Nu.name,Nu),e.component(Ou.name,Ou),e.component(ju.name,ju),e.component(Gu.name,Gu)}},Jl=E({name:"SuiStatisticLabel",props:{content:String},render(){var e,a;return this.$props.content?J("div",{class:"label"},this.$props.content):J("div",{class:"label"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Wl=E({name:"SuiStatisticValue",props:{content:String,text:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.text,"text"),"value"))}},render(){var e,a;return this.$props.content?J("div",{class:this.computedClass},this.$props.content):J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),qu=E({name:"SuiStatistic",components:{StatisticLabel:Jl,StatisticValue:Wl},props:{color:String,floated:[Boolean,String],horizontal:Boolean,inverted:Boolean,label:String,size:String,text:Boolean,value:String},setup(e){const a=Ve("ui",!0);return{computedClass:H(()=>ee(a&&"ui",e.color,e.size,A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),A(e.text,"text"),Fe(e.floated,"floated"),"statistic"))}},render(){var e,a,n,o,r,c;let m=[];return this.$props.value&&m.push(J(Wl,{content:this.$props.value},(a=(e=this.$slots).default)==null?void 0:a.call(e))),this.$props.label&&m.push(J(Jl,{content:this.$props.label},(o=(n=this.$slots).default)==null?void 0:o.call(n))),J("div",{class:this.computedClass},m.length>0?m:(c=(r=this.$slots).default)==null?void 0:c.call(r))}}),Uu=E({name:"SuiStatisticGroup",props:{color:String,horizontal:Boolean,inverted:Boolean,size:String,widths:Number},setup(e){return ut("ui",!1),{computedClass:H(()=>ee("ui",e.color,e.size,A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),ai(e.widths,""),"statistics"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),_v={install(e){e.component(qu.name,qu),e.component(Uu.name,Uu),e.component(Jl.name,Jl),e.component(Wl.name,Wl)}},bv=Object.freeze(Object.defineProperty({__proto__:null,Advertisement:mv,Card:pv,Comment:fv,Feed:gv,Item:hv,Statistic:_v},Symbol.toStringTag,{value:"Module"})),Yu=E({name:"SuiAccordion",props:{fluid:Boolean,inverted:Boolean,multiple:Boolean,styled:Boolean},setup(e){const a=e.multiple?q([]):q(-1),n=r=>e.multiple?a.value.includes(r):a.value===r,o=r=>{const c=n(r);e.multiple?c?a.value=a.value.filter(m=>m!==r):a.value.push(r):a.value=c?-1:r};return ut("isTabActive",n),ut("updateActiveIndex",o),{computedClass:H(()=>ee("ui",A(e.fluid,"fluid"),A(e.inverted,"inverted"),A(e.styled,"styled"),"accordion"))}},render(){var e,a;const n=o=>(o.forEach((r,c)=>{r.props.index=c}),o);return t("div",{class:this.computedClass},[n((a=(e=this.$slots).default)==null?void 0:a.call(e))])}}),Ju=E({name:"SuiAccordionAccordion",render(){var e,a;return J("div",{class:"accordion"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),To=E({name:"SuiAccordionContent",props:{active:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.active,"active"),"content"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Wu=E({name:"SuiAccordionTab",props:{index:Number,title:String},setup(e){const a=Ve("isTabActive"),n=Ve("updateActiveIndex"),o=H(()=>ee(A(a(e.index),"active"),"title"));return{isTabActive:a,updateActiveIndex:n,titleClass:o}},render(){return t(Ce,null,[t("div",{class:this.titleClass,onClick:()=>this.updateActiveIndex(this.index)},[t(Q,{name:"dropdown"},null),this.title]),t(To,{active:this.isTabActive(this.index)},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})])}}),Ku=E({name:"SuiAccordionTitle",props:{active:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.active,"active"),"title"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),vv={install(e){e.component(Yu.name,Yu),e.component(Ju.name,Ju),e.component(To.name,To),e.component(Wu.name,Wu),e.component(Ku.name,Ku)}},yv=(e,a,n)=>{e.clickOutside=o=>{e===o.target||e.contains(o.target)||a.value(o,e)},document.body.addEventListener("click",e.clickOutside)},Sv=(e,a,n)=>{document.body.removeEventListener("click",e.clickOutside)},Cs={mounted:yv,unmounted:Sv};function wv(e,a={}){const n=q(e.value?"open":"closed"),o=()=>n.value=e.value?"open":"closed";pt(e,p=>{n.value=p?"opening":"closing"});const r=p=>{p.addEventListener("animationend",o,!0)},c=p=>{p&&p.removeEventListener("animationend",o)},m=H((p="scale")=>{switch(n.value){case"opening":return`animating ${p} in`;case"open":return"visible active";case"closing":return`visible active animating ${p} out`;case"closed":return"hidden"}});return{setupAnimation:r,removeAnimation:c,computeAnimationClass:m}}const Cv=E({name:"SuiCalendarDay",emits:["select-day"],props:{active:Boolean,date:null,disabled:Boolean,onSelectDay:Function},setup(e,{emit:a}){const n=q(!1),o=()=>{e.disabled||(n.value=!0)},r=()=>n.value=!1,c=()=>{e.disabled||a("select-day",e.date)},m=()=>{let s=new Date;return s.getFullYear()===e.date.year&&s.getMonth()===e.date.month&&s.getDate()===e.date.day},p=H(()=>ee("link",A(n.value,"focus"),A(e.active&&!e.disabled,"active"),A(e.disabled,"adjacent disabled"),A(m(),"today")));return{onMouseEnter:o,onMouseLeave:r,onClick:c,computedClass:p}},render(){var e,a;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:Tt(this.onClick,["stop"])},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Av=E({name:"SuiCalendarDateTable",setup(){const{calendarDays:e,updateSelectMode:a,set:n,add:o,subtract:r,selectedDate:c,setSelectedDate:m,selectType:p,updateVisible:s,formatDate:u}=Ve(Ci);return{calendarDays:e,isEqualDay:f=>{if(!c.value)return!1;const d=c.value;return d.getFullYear()===f.year&&d.getMonth()===f.month&&d.getDate()===f.day},onSelectDay:f=>{if(n(f.year,"years"),n(f.month,"months"),n(f.day,"days"),p.value==="date"){let d=new Date(f.year,f.month,f.day);m(d),s(!1);return}a("hour")},updateSelectMode:a,formatDate:u,add:o,subtract:r}},render(){const e=()=>this.calendarDays.map((a,n)=>t("tr",null,[a.map(o=>t(Cv,{active:this.isEqualDay(o),date:o,disabled:!o.currentMonth,onSelectDay:this.onSelectDay},{default:()=>[o.day]}))]));return t("table",{class:"ui celled center aligned unstackable table day seven column"},[t("thead",null,[t("tr",null,[t("th",{colspan:7},[t("span",{class:"link",onClick:Tt(()=>this.updateSelectMode("month"),["stop"])},[this.formatDate("date")]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"months")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"months")},[t("i",{class:"chevron right icon"},null)])])]),t("tr",null,[t("th",null,[l("S")]),t("th",null,[l("M")]),t("th",null,[l("T")]),t("th",null,[l("W")]),t("th",null,[l("T")]),t("th",null,[l("F")]),t("th",null,[l("S")])])]),t("tbody",null,[e()])])}}),ye=E({name:"SuiCalendarTableCell",emits:["click-cell"],props:{active:Boolean,today:Boolean,value:null,onClickCell:Function},setup(e){const a=q(!1),n=()=>a.value=!0,o=()=>a.value=!1,r=H(()=>ee("link",A(e.active,"active"),A(e.today,"today"),A(a.value,"focus")));return{onMouseEnter:n,onMouseLeave:o,computedClass:r}},render(){var e,a;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:Tt(()=>this.$emit("click-cell",this.value),["stop"])},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),kv=E({name:"SuiCalendarMonthTable",setup(){const{state:e,set:a,add:n,subtract:o,selectedDate:r,updateSelectMode:c}=Ve(Ci);return{state:e,add:n,subtract:o,updateSelectMode:c,isActive:m=>r.value?e.year===r.value.getFullYear()&&e.month===m:!1,isThisMonth:m=>{let p=new Date;return m===p.getMonth()&&e.year===p.getFullYear()},onClickCell:m=>{a(m,"months"),c("day")}}},render(){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=()=>Array(4).fill(0).map((n,o)=>t("tr",null,[t(ye,{value:o*3,active:this.isActive(o*3),today:this.isThisMonth(o*3),onClickCell:this.onClickCell},{default:()=>[e[o*3]]}),t(ye,{value:o*3+1,active:this.isActive(o*3+1),today:this.isThisMonth(o*3+1),onClickCell:this.onClickCell},{default:()=>[e[o*3+1]]}),t(ye,{value:o*3+2,active:this.isActive(o*3+2),today:this.isThisMonth(o*3+2),onClickCell:this.onClickCell},{default:()=>[e[o*3+2]]})]));return t("table",{class:"ui celled center aligned unstackable table month three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:Tt(()=>this.updateSelectMode("year"),["stop"])},[this.state.year]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"years")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"years")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[a()])])}}),xv=E({name:"SuiCalendarYearTable",setup(e){const{state:a,set:n,add:o,subtract:r,selectedDate:c,updateSelectMode:m}=Ve(Ci),p=()=>o(10,"years"),s=()=>r(10,"years"),u=H(()=>Math.round(a.year/10)*10+1);return{updateSelectMode:m,moveNextTwelveYears:p,movePrevTwelveYears:s,headerStartYear:u,isActive:f=>c.value?f===c.value.getFullYear():!1,isThisYear:f=>f===new Date().getFullYear(),onClickCell:f=>{n(f,"years"),m("day")}}},render(){return t("table",{class:"ui celled center aligned unstackable table year three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:Tt(()=>this.updateSelectMode("day"),["stop"])},[this.headerStartYear,l(" - "),this.headerStartYear+11]),t("span",{class:"prev link",onClick:this.movePrevTwelveYears},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.moveNextTwelveYears},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(ye,{value:this.headerStartYear,active:this.isActive(this.headerStartYear),today:this.isThisYear(this.headerStartYear),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear]}),t(ye,{value:this.headerStartYear+1,active:this.isActive(this.headerStartYear+1),today:this.isThisYear(this.headerStartYear+1),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+1]}),t(ye,{value:this.headerStartYear+2,active:this.isActive(this.headerStartYear+2),today:this.isThisYear(this.headerStartYear+2),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+2]})]),t("tr",null,[t(ye,{value:this.headerStartYear+3,active:this.isActive(this.headerStartYear+3),today:this.isThisYear(this.headerStartYear+3),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+3]}),t(ye,{value:this.headerStartYear+4,active:this.isActive(this.headerStartYear+4),today:this.isThisYear(this.headerStartYear+4),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+4]}),t(ye,{value:this.headerStartYear+5,active:this.isActive(this.headerStartYear+5),today:this.isThisYear(this.headerStartYear+5),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+5]})]),t("tr",null,[t(ye,{value:this.headerStartYear+6,active:this.isActive(this.headerStartYear+6),today:this.isThisYear(this.headerStartYear+6),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+6]}),t(ye,{value:this.headerStartYear+7,active:this.isActive(this.headerStartYear+7),today:this.isThisYear(this.headerStartYear+7),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+7]}),t(ye,{value:this.headerStartYear+8,active:this.isActive(this.headerStartYear+8),today:this.isThisYear(this.headerStartYear+8),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+8]})]),t("tr",null,[t(ye,{value:this.headerStartYear+9,active:this.isActive(this.headerStartYear+9),today:this.isThisYear(this.headerStartYear+9),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+9]}),t(ye,{value:this.headerStartYear+10,active:this.isActive(this.headerStartYear+10),today:this.isThisYear(this.headerStartYear+10),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+10]}),t(ye,{value:this.headerStartYear+11,active:this.isActive(this.headerStartYear+11),today:this.isThisYear(this.headerStartYear+11),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+11]})])])])}}),$v=E({name:"SuiCalendarHourTable",setup(){const{updateSelectMode:e,state:a,set:n,add:o,subtract:r,formatDate:c,selectedDate:m}=Ve(Ci);return{updateSelectMode:e,formatDate:c,onPrevClick:()=>r(1,"days"),onNextClick:()=>o(1,"days"),onClickCell:p=>{n(p,"hours"),e("minute")},isActive:p=>{if(!m.value)return!1;let s=m.value.getFullYear(),u=m.value.getMonth(),f=m.value.getDate(),d=m.value.getHours();return a.year===s&&a.month===u&&a.day===f&&p===d}}},render(){return t("table",{class:"ui celled center aligned unstackable table hour four column"},[t("thead",null,[t("tr",null,[t("th",{colspan:4},[t("span",{class:"link",onClick:Tt(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:this.onPrevClick},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.onNextClick},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(ye,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},{default:()=>[l("12:00 AM")]}),t(ye,{active:this.isActive(1),value:1,onClickCell:this.onClickCell},{default:()=>[l("1:00 AM")]}),t(ye,{active:this.isActive(2),value:2,onClickCell:this.onClickCell},{default:()=>[l("2:00 AM")]}),t(ye,{active:this.isActive(3),value:3,onClickCell:this.onClickCell},{default:()=>[l("3:00 AM")]})]),t("tr",null,[t(ye,{active:this.isActive(4),value:4,onClickCell:this.onClickCell},{default:()=>[l("4:00 AM")]}),t(ye,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},{default:()=>[l("5:00 AM")]}),t(ye,{active:this.isActive(6),value:6,onClickCell:this.onClickCell},{default:()=>[l("6:00 AM")]}),t(ye,{active:this.isActive(7),value:7,onClickCell:this.onClickCell},{default:()=>[l("7:00 AM")]})]),t("tr",null,[t(ye,{active:this.isActive(8),value:8,onClickCell:this.onClickCell},{default:()=>[l("8:00 AM")]}),t(ye,{active:this.isActive(9),value:9,onClickCell:this.onClickCell},{default:()=>[l("9:00 AM")]}),t(ye,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},{default:()=>[l("10:00 AM")]}),t(ye,{active:this.isActive(11),value:11,onClickCell:this.onClickCell},{default:()=>[l("11:00 AM")]})]),t("tr",null,[t(ye,{active:this.isActive(12),value:12,onClickCell:this.onClickCell},{default:()=>[l("12:00 PM")]}),t(ye,{active:this.isActive(13),value:13,onClickCell:this.onClickCell},{default:()=>[l("1:00 PM")]}),t(ye,{active:this.isActive(14),value:14,onClickCell:this.onClickCell},{default:()=>[l("2:00 PM")]}),t(ye,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},{default:()=>[l("3:00 PM")]})]),t("tr",null,[t(ye,{active:this.isActive(16),value:16,onClickCell:this.onClickCell},{default:()=>[l("4:00 PM")]}),t(ye,{active:this.isActive(17),value:17,onClickCell:this.onClickCell},{default:()=>[l("5:00 PM")]}),t(ye,{active:this.isActive(18),value:18,onClickCell:this.onClickCell},{default:()=>[l("6:00 PM")]}),t(ye,{active:this.isActive(19),value:19,onClickCell:this.onClickCell},{default:()=>[l("7:00 PM")]})]),t("tr",null,[t(ye,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},{default:()=>[l("8:00 PM")]}),t(ye,{active:this.isActive(21),value:21,onClickCell:this.onClickCell},{default:()=>[l("9:00 PM")]}),t(ye,{active:this.isActive(22),value:22,onClickCell:this.onClickCell},{default:()=>[l("10:00 PM")]}),t(ye,{active:this.isActive(23),value:23,onClickCell:this.onClickCell},{default:()=>[l("11:00 PM")]})])])])}});function It(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!zt(e)}const Bv=E({name:"SuiCalendarMinuteTable",setup(){const{state:e,set:a,add:n,subtract:o,formatDate:r,updateSelectMode:c,updateVisible:m,selectedDate:p}=Ve(Ci);return{add:n,subtract:o,formatDate:r,updateSelectMode:c,getTimeLabel:s=>{let u=e.hour%12,f=e.hour>12?"PM":"AM",d=s.toString().padStart(2,"0");return e.hour===0?`12:${d} AM`:e.hour===12?`12:${d} PM`:`${u}:${d} ${f}`},onClickCell:s=>{a(s,"minutes"),p.value=new Date(e.year,e.month,e.day,e.hour,e.minute),m(!1)},isActive:s=>{if(!p.value)return!1;let u=p.value.getFullYear(),f=p.value.getMonth(),d=p.value.getDate(),h=p.value.getHours(),v=p.value.getMinutes();return e.year===u&&e.month===f&&e.day===d&&e.hour===h&&s===v}}},render(){let e,a,n,o,r,c,m,p,s,u,f,d;return t("table",{class:"ui celled center aligned unstackable table minute three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:Tt(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"days")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"days")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(ye,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},It(e=this.getTimeLabel(0))?e:{default:()=>[e]}),t(ye,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},It(a=this.getTimeLabel(5))?a:{default:()=>[a]}),t(ye,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},It(n=this.getTimeLabel(10))?n:{default:()=>[n]})]),t("tr",null,[t(ye,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},It(o=this.getTimeLabel(15))?o:{default:()=>[o]}),t(ye,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},It(r=this.getTimeLabel(20))?r:{default:()=>[r]}),t(ye,{active:this.isActive(25),value:25,onClickCell:this.onClickCell},It(c=this.getTimeLabel(25))?c:{default:()=>[c]})]),t("tr",null,[t(ye,{active:this.isActive(30),value:30,onClickCell:this.onClickCell},It(m=this.getTimeLabel(30))?m:{default:()=>[m]}),t(ye,{active:this.isActive(35),value:35,onClickCell:this.onClickCell},It(p=this.getTimeLabel(35))?p:{default:()=>[p]}),t(ye,{active:this.isActive(40),value:40,onClickCell:this.onClickCell},It(s=this.getTimeLabel(40))?s:{default:()=>[s]})]),t("tr",null,[t(ye,{active:this.isActive(45),value:45,onClickCell:this.onClickCell},It(u=this.getTimeLabel(45))?u:{default:()=>[u]}),t(ye,{active:this.isActive(50),value:50,onClickCell:this.onClickCell},It(f=this.getTimeLabel(50))?f:{default:()=>[f]}),t(ye,{active:this.isActive(55),value:55,onClickCell:this.onClickCell},It(d=this.getTimeLabel(55))?d:{default:()=>[d]})])])])}}),Tv=E({name:"SuiCalendarBody",setup(){const e=q(null),{visible:a,selectMode:n}=Ve(Ci),{setupAnimation:o,removeAnimation:r,computeAnimationClass:c}=wv(a);wi(()=>o(e.value)),Yi(()=>r(e.value));const m=H(()=>ee("ui popup calendar","bottom left","transition",c.value));return{rootRef:e,computedClass:m,selectMode:n}},render(){const e=()=>{switch(this.selectMode){case"day":return t(Av,null,null);case"month":return t(kv,null,null);case"year":return t(xv,null,null);case"hour":return t($v,null,null);case"minute":return t(Bv,null,null)}};return t("div",{ref:a=>this.rootRef=a,class:this.computedClass,style:"inset: 38px auto auto 0px;"},[e()])}}),Lv=E({name:"SuiCalendarInput",props:{placeholder:String,value:null},setup(e){const{visible:a,updateVisible:n,updateSelectMode:o,set:r,state:c,formatCalendarDate:m}=Ve(Ci);return{visible:a,formatCalendarDate:m,onClick:()=>{a.value||(o("day"),e.value&&(r(e.value.getFullYear(),"years"),r(e.value.getMonth(),"months"))),n(!a.value)}}},render(){return t("input",{type:"text",placeholder:this.placeholder,value:this.formatCalendarDate(this.value),onClick:()=>this.onClick()},null)}}),Dv=(e,a)=>{let n=new Date;n.setDate(1),n.setMonth(a),n.setFullYear(e);let o=n.getDay();return o>=7?o-7:o},Iv=(e,a)=>{let n,o;return a===0?(n=11,o=e-1):(n=a-1,o=e),32-new Date(o,n,32).getDate()},Hn=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e];function Ev(){const e=q(!1),a=(C=!1)=>e.value=C,n=new Date;function o(C){if(!C)return;let k=C.getFullYear(),B=Hn(C.getMonth()),b=C.getDate(),w=C.getHours(),x=C.getMinutes(),$=w>11?"PM":"AM";w=w%12,w===0&&(w=12);let D=x.toString().padStart(2,"0");return`${B} ${b}, ${k} ${w}:${D} ${$}`}const r=q("default"),c=q("day");function m(C){c.value=C}const p=q(null),s=C=>{p.value=C},u=ti({year:n.getFullYear(),month:n.getMonth(),day:n.getDate(),hour:n.getHours(),minute:n.getMinutes()}),f=(C,k)=>{switch(k){case"years":u.year=C;break;case"months":u.month=C;break;case"days":u.day=C;break;case"hours":u.hour=C;break;case"minutes":u.minute=C}},d=(C,k)=>{let B=new Date(u.year,u.month,u.day,u.hour);switch(k){case"years":B.setFullYear(B.getFullYear()+C);break;case"months":B.setMonth(B.getMonth()+C);break;case"days":B.setDate(B.getDate()+C);break;case"hours":B.setHours(B.getHours()+C);break}u.year=B.getFullYear(),u.month=B.getMonth(),u.day=B.getDate(),u.hour=B.getHours()},h=(C,k)=>{let B=new Date(u.year,u.month,u.day,u.hour);switch(k){case"years":B.setFullYear(B.getFullYear()-C);break;case"months":B.setMonth(B.getMonth()-C);break;case"days":B.setDate(B.getDate()-C);break;case"hours":B.setHours(B.getHours()-C);break}u.year=B.getFullYear(),u.month=B.getMonth(),u.day=B.getDate(),u.hour=B.getHours()},v=(C="default")=>C==="date"?`${Hn(u.month)} ${u.year}`:`${Hn(u.month)} ${u.day}, ${u.year}`,_=H(()=>{let C=u.month,k=u.year;C>11&&(C=C%11-1,k+=1);let B=[],b=Dv(k,C),w=32-new Date(k,C,32).getDate(),x=Iv(k,C),$=1;for(let D=0;D<6;D++){let F=[];if(D===0){for(let z=x-b+1;z<=x;z++){let j=C===0?11:C-1,K=C===0?k-1:k;F.push({day:z,month:j,year:K,currentMonth:!1})}let V=7-F.length;for(let z=0;z<V;z++)F.push({day:$,month:C,year:k,currentMonth:!0}),$++}else for(let V=0;V<7;V++){if($>w){let z=C===11?0:C+1,j=C===11?k+1:k;F.push({day:$-w,month:z,year:j,currentMonth:!1})}else F.push({day:$,month:C,year:k,currentMonth:!0});$++}B.push(F)}return B});return{visible:e,updateVisible:a,calendarDays:_,formatCalendarDate:o,selectMode:c,updateSelectMode:m,selectType:r,selectedDate:p,setSelectedDate:s,state:u,set:f,add:d,subtract:h,formatDate:v}}const Ci=Symbol("useCalendar"),Xu=E({name:"SuiCalendar",directives:{clickoutside:Cs},emits:["update:modelValue"],props:{modelValue:null,placeholder:String},setup(e,{emit:a}){const n=Ev();ut(Ci,n);const{updateVisible:o,selectedDate:r}=n;return pt(r,c=>{a("update:modelValue",c)}),{updateVisible:o}},render(){return ul(t("div",{class:"ui calendar"},[t("div",{class:"ui input left icon"},[t(Tv,null,null),t("i",{class:"calendar icon"},null),t(Lv,{placeholder:this.placeholder,value:this.modelValue},null)])]),[[cn("clickoutside"),()=>this.updateVisible(!1)]])}}),Rv={install:e=>{e.component(Xu.name,Xu)}},Qu=E({name:"SuiCheckbox",emits:["update:modelValue","change","click"],props:{disabled:Boolean,indeterminate:Boolean,label:String,modelValue:null,radio:Boolean,readOnly:Boolean,slider:Boolean,toggle:Boolean,value:null},setup(e,{emit:a}){const n=H(()=>ee("ui",!e.label&&"fitted",A(e.disabled,"disabled"),A(e.indeterminate,"indeterminate"),A(e.radio,"radio"),A(e.readOnly,"read-only"),A(e.slider,"slider"),A(e.toggle,"toggle"),"checkbox")),o=H(()=>Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue);return{computedClass:n,checked:o,onClick:r=>{if(e.disabled||e.readOnly)return;let c;e.value?o.value?c=e.modelValue.filter(m=>e.value!==m):c=e.modelValue?[...e.modelValue,e.value]:[e.value]:c=!e.modelValue,a("change",r),a("click",r),a("update:modelValue",c)}}},render(){return t("div",{class:this.computedClass,onClick:this.onClick},[t("input",{type:this.radio?"radio":"checkbox",class:"hidden",checked:this.checked,readonly:!0},null),t("label",null,[this.label])])}}),zv={install(e){e.component(Qu.name,Qu)}},Mt=E({name:"SuiDimmer",props:{active:Boolean,inverted:Boolean,page:Boolean,simple:Boolean,verticalAlign:String},setup(e){return{computedClass:H(()=>ee("ui",A(e.active,"active"),A(e.inverted,"inverted"),A(e.page,"page"),A(e.simple,"simple"),Me(e.verticalAlign,"aligned"),"dimmer"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Zu=E({name:"SuiDimmerDimmable",components:{Segment:Ie},props:{blurring:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.blurring,"blurring"),"dimmable"))}},render(){var e,a;return J(Ie,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Pv={install(e){e.component(Mt.name,Mt),e.component(Zu.name,Zu)}},Fv=(e,a)=>e.map(n=>n[a]),Mv=E({name:"SuiDropdownText",emits:["remove"],props:{clearable:Boolean,filtered:Boolean,icon:{type:String,default:"dropdown"},item:[Object,String],placeholder:String,text:String,onRemove:Function},setup(e){return{computedClass:H(()=>ee(A(e.filtered,"filtered"),A(!e.text&&!e.item||Array.isArray(e.item)&&e.item.length===0,"default"),"text"))}},render(){var e,a;let n;if(this.item&&!Array.isArray(this.item))if(typeof this.item=="object"){const{flag:c,text:m}=this.item;n=t(Ce,null,[c&&t("i",{class:`${c} flag`},null),m])}else n=this.item;else n=this.text||this.placeholder;const o=typeof this.item=="object"?(e=this.item)==null?void 0:e.image:null,r=typeof this.item=="object"?(a=this.item)==null?void 0:a.label:null;return t(Ce,null,[t("div",{class:this.computedClass},[o&&t(Be,o,null),r&&t(N,r,null),n]),t("i",{class:`${this.icon} icon`},null),this.$props.clearable&&t("i",{class:"remove icon",onClick:Tt(()=>this.$emit("remove"),["stop"])},null)])}}),Vv=e=>{const a=ti({visible:!1,animating:!1,direction:"down",multiple:e.multiple});return pt(()=>a.visible,()=>{a.animating=!0,setTimeout(()=>a.animating=!1,200)}),{state:a,show:()=>!a.animating&&(a.visible=!0),hide:()=>{a.animating||(a.visible=!1)}}};function Hv(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!zt(e)}const ec=E({name:"SuiDropdown",directives:{clickoutside:Cs},emits:["update:modelValue"],props:{button:Boolean,clearable:Boolean,compact:Boolean,floating:Boolean,fluid:Boolean,icon:String,inline:Boolean,item:Boolean,labeled:Boolean,modelValue:[Object,String],multiple:Boolean,options:Array,placeholder:String,pointing:[Boolean,String],scrolling:Boolean,selection:Boolean,search:Boolean,searchInMenu:Boolean,simple:Boolean,text:String},setup(e,{emit:a}){const n=Vv(e);ut("useDropdown",n);const{state:o,show:r,hide:c}=n,m=H(()=>ee("ui",A(e.button,"button"),A(e.clearable,"clearable"),A(e.compact,"compact"),A(e.floating,"floating"),A(e.fluid,"fluid"),A(!!e.icon,"icon"),A(e.inline,"inline"),A(e.item,"item"),A(e.labeled,"labeled"),A(e.multiple,"multiple"),A(e.search,"search"),A(e.scrolling,"scrolling"),A(e.selection,"selection"),A(e.simple,"simple"),Fe(e.pointing,"pointing"),"dropdown",A(o.visible,"active visible"),A(o.direction==="up","upward"))),p=()=>{var k;if(o.visible)return c();(k=h.value)==null||k.focus(),r()},s=()=>{e.search&&h.value&&h.value.focus(),r()},u=()=>c(),f=q(""),d=H(()=>{const k=f.value.toLowerCase();return e.options.filter(B=>{const b=typeof B=="object"?B.text:B,w=b.toLowerCase().includes(k);if(!e.multiple)return w;if(Array.isArray(e.modelValue)){const x=typeof B=="object"?Fv(e.modelValue,"text").includes(b):e.modelValue.includes(b);return w&&!x}return w})}),h=q(null),v=k=>f.value=k.target.value,_=k=>{var B;if(f.value="",e.search&&((B=h.value)==null||B.focus()),e.multiple){let b=Array.isArray(e.modelValue)?[...e.modelValue,k]:[k];return a("update:modelValue",b)}return a("update:modelValue",k)},C=k=>{if(Array.isArray(e.modelValue)){const B=e.modelValue.findIndex(b=>b===k);if(B>-1){let b=Object.assign(e.modelValue);b.splice(B,1),a("update:modelValue",b)}}};return ut("selection",e.selection),{computedClass:m,onClick:p,openMenu:s,closeMenu:u,filteredText:f,filteredOptions:d,inputRef:h,onInput:v,onSelect:_,removeItem:C}},render(){var e,a;const n=()=>{if(Array.isArray(this.$props.modelValue))return this.$props.modelValue.map(m=>typeof m=="object"?t("a",{class:"ui label"},[m.flag&&t("i",{class:`${m.flag} flag`},null),m.text,t("i",{class:"delete icon",onClick:Tt(()=>this.removeItem(m),["stop"])},null)]):t("a",{class:"ui label"},[m,t("i",{class:"delete icon",onClick:Tt(()=>this.removeItem(m),["stop"])},null)]))},o=()=>this.filteredOptions.filter(m=>this.$props.multiple&&Array.isArray(this.$props.modelValue)?!this.$props.modelValue.includes(m):!0).map(m=>t(Lo,{item:m,active:this.$props.modelValue&&typeof m=="object"?m.text===this.$props.modelValue.text:m===this.$props.modelValue,text:typeof m=="object"?m.text:m,flag:typeof m=="object"&&Object.keys(m).includes("flag")?m.flag:"",image:m.image,label:m.label,disabled:m.disabled,onSelect:this.onSelect},null)),r=()=>{let m={clearable:this.clearable,filtered:this.filteredText.length>0,icon:this.icon,item:this.modelValue,placeholder:this.placeholder,text:this.text};return t(Mv,Ji(m,{onRemove:()=>this.$emit("update:modelValue",null)}),null)},c=()=>{let m;return t(Do,{search:this.$props.searchInMenu,onSearch:this.onInput},Hv(m=o())?m:{default:()=>[m]})};return ul(t("div",{class:this.computedClass,onClick:this.onClick},[this.$props.multiple&&n(),this.search&&t("input",{ref:m=>this.inputRef=m,type:"text",class:"search",autocomplete:"off",tabindex:0,value:this.filteredText,onInput:m=>this.onInput(m)},null),this.search&&this.multiple&&t("span",{class:"sizer"},null),r(),((a=(e=this.$slots).default)==null?void 0:a.call(e))||c()]),[[cn("clickoutside"),this.closeMenu]])}}),Lo=E({name:"SuiDropdownItem",emits:["select"],props:{active:Boolean,flag:String,description:String,icon:String,image:Object,item:[Object,String],label:Object,text:String,disabled:Boolean,onSelect:Function},setup(e,{emit:a}){const{state:n,hide:o}=Ve("useDropdown");return{computedClass:H(()=>ee(A(e.active,"active"),A(e.disabled,"disabled"),"item")),onClick:()=>{n.multiple||o(),a("select",e.item?e.item:e.text)}}},render(){return t("div",{class:this.computedClass,onClick:Tt(this.onClick,["stop"])},[this.flag&&t("i",{class:`${this.flag} flag`},null),this.icon&&t("i",{class:`${this.icon} icon`},null),this.image&&t(Be,this.image,null),this.label&&t(N,this.label,null),this.description&&t("span",{class:"description"},[this.description]),this.text])}}),Do=E({name:"SuiDropdownMenu",emits:["search"],props:{search:Boolean,onSearch:Function},setup(e,{emit:a,slots:n}){const{state:o}=Ve("useDropdown"),r=q(null),c=H(()=>{let p=()=>o.visible?`animating slide ${o.direction} in visible`:`animating slide ${o.direction} out visible`;return ee("menu","transition",A(o.visible,"visible"),A(!o.visible&&!o.animating,"hidden"),A(o.animating,p()))});pt(()=>o.visible,p=>{if(!p||!r.value)return;let s=r.value.parentElement;const{top:u,height:f}=s==null?void 0:s.getBoundingClientRect(),d=u-m.value.length*37,h=document.documentElement.clientHeight-u-f-m.value.length*37;o.direction=d>h?"up":"down"});const m=H(()=>{var p;let s=[],u=(p=n.default)==null?void 0:p.call(n);return u&&u.forEach(f=>{f.type.name==="SuiSelectItem"&&s.push(f)}),s});return{container:r,computedClass:c,onSearchInput:p=>a("search",p)}},render(){var e,a,n,o;const r=()=>t(Ce,null,[t("div",{class:"ui left icon input",onClick:Tt(()=>{},["stop"])},[t("input",{type:"text",onInput:c=>this.onSearchInput(c)},null),t("i",{class:"search icon"},null)]),t("div",{class:"ui divider"},null)]);return t("div",{ref:c=>this.container=c,class:this.computedClass},[this.$slots.header&&t("div",{class:"header"},[(a=(e=this.$slots).header)==null?void 0:a.call(e)]),this.$props.search&&r(),(o=(n=this.$slots).default)==null?void 0:o.call(n)])}}),Nv={install(e){e.component(ec.name,ec),e.component(Lo.name,Lo),e.component(Do.name,Do)}},tc=E({name:"SuiEmbed",props:{active:Boolean,aspectRatio:Boolean,autoplay:Boolean,id:String,placeholder:String,source:String,url:String},setup(e){const a=q(e.active),n=()=>{a.value=!a.value},o=()=>e.source==="youtube"?[`//www.youtube.com/embed/${e.id}`,"?autohide=true",`&amp;autoplay=${e.autoplay}`,"&amp;jsapi=false"].join(""):e.url,r=H(()=>ee("ui",e.aspectRatio,A(a.value,"active"),"embed"));return{active:a,getSrc:o,clickHandler:n,computedClass:r}},render(){let e=[J("i",{class:"video play icon"}),J("img",{class:"placeholder",src:this.placeholder})];return this.active&&e.push(J("div",{class:"embed"},J("iframe",{src:this.getSrc()}))),J("div",{class:this.computedClass,onClick:this.clickHandler},e)}}),Ov={install(e){e.component(tc.name,tc)}};function jv(e){return qo()?(Pc(e),!0):!1}function Nm(e){return typeof e=="function"?e():g(e)}const Om=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Gv=Object.prototype.toString,qv=e=>Gv.call(e)==="[object Object]",Ll=()=>{},Uv=Yv();function Yv(){var e,a;return Om&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((a=window==null?void 0:window.navigator)==null?void 0:a.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function za(e){var a;const n=Nm(e);return(a=n==null?void 0:n.$el)!=null?a:n}const jm=Om?window:void 0;function Nn(...e){let a,n,o,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,o,r]=e,a=jm):[a,n,o,r]=e,!a)return Ll;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const c=[],m=()=>{c.forEach(f=>f()),c.length=0},p=(f,d,h,v)=>(f.addEventListener(d,h,v),()=>f.removeEventListener(d,h,v)),s=pt(()=>[za(a),Nm(r)],([f,d])=>{if(m(),!f)return;const h=qv(d)?{...d}:d;c.push(...n.flatMap(v=>o.map(_=>p(f,v,_,h))))},{immediate:!0,flush:"post"}),u=()=>{s(),m()};return jv(u),u}let ic=!1;function Jv(e,a,n={}){const{window:o=jm,ignore:r=[],capture:c=!0,detectIframe:m=!1}=n;if(!o)return Ll;Uv&&!ic&&(ic=!0,Array.from(o.document.body.children).forEach(f=>f.addEventListener("click",Ll)),o.document.documentElement.addEventListener("click",Ll));let p=!0;const s=f=>r.some(d=>{if(typeof d=="string")return Array.from(o.document.querySelectorAll(d)).some(h=>h===f.target||f.composedPath().includes(h));{const h=za(d);return h&&(f.target===h||f.composedPath().includes(h))}}),u=[Nn(o,"click",f=>{const d=za(e);if(!(!d||d===f.target||f.composedPath().includes(d))){if(f.detail===0&&(p=!s(f)),!p){p=!0;return}a(f)}},{passive:!0,capture:c}),Nn(o,"pointerdown",f=>{const d=za(e);p=!s(f)&&!!(d&&!f.composedPath().includes(d))},{passive:!0}),m&&Nn(o,"blur",f=>{setTimeout(()=>{var d;const h=za(e);((d=o.document.activeElement)==null?void 0:d.tagName)==="IFRAME"&&!(h!=null&&h.contains(o.document.activeElement))&&a(f)},0)})].filter(Boolean);return()=>u.forEach(f=>f())}function Gm(e,a="scale"){const n=q(e.modelValue?"open":"closed");return pt(()=>e.modelValue,o=>{n.value=o?"opening":"closing"}),{animationClasses:H(()=>{switch(n.value){case"opening":return`animating ${a} in`;case"open":return"visible active";case"closing":return`visible active animating ${a} out`;case"closed":return"hidden"}}),isClosed:H(()=>n.value==="closed"),onAnimationEnd:()=>n.value=e.modelValue?"open":"closed"}}const Wv=E({name:"SuiModalDemmer",props:{blurring:Boolean,inverted:Boolean,modelValue:Boolean},setup(e){const{animationClasses:a,isClosed:n,onAnimationEnd:o}=Gm(e,"fade"),r=H(()=>ee("ui","page modals dimmer transition",A(e.inverted,"inverted"),a.value)),c=H(()=>({display:n.value?"none !important":"flex !important",animationDuration:"500ms"})),m=H(()=>ee("dimmable","dimmed",A(e.blurring,"blurring")));return pt(()=>e.modelValue,p=>{if(p){document.body.classList.add(...m.value.split(" "));return}document.body.classList.remove(...m.value.split(" "))}),{className:r,style:c,onAnimationEnd:o}},render(){var e,a;return t("div",{class:this.className,style:this.style,onAnimationend:this.onAnimationEnd},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),ac=E({name:"SuiModal",props:{basic:Boolean,closeIcon:Boolean,dimmer:String,modelValue:Boolean,size:String,closable:{type:Boolean,default:!0},overlay:Boolean,fullscreen:Boolean},setup(e,{emit:a}){const n=q(),{animationClasses:o,isClosed:r}=Gm(e),c=H(()=>ee("ui",e.size,A(e.basic,"basic"),A(e.overlay,"overlay"),A(e.fullscreen,"fullscreen"),"modal","transition",o.value)),m=H(()=>({display:r.value?"none !important":"block !important",animationDuration:"500ms"})),p=()=>a("update:modelValue",!1);return Jv(n,()=>e.closable&&a("update:modelValue",!1)),{computedClass:c,style:m,close:p,modalRef:n}},render(){return t(gn,{to:"body"},{default:()=>[t(Wv,{blurring:this.dimmer==="blurring",inverted:this.dimmer==="inverted",modelValue:this.modelValue},{default:()=>{var e,a;return[t("div",{class:this.computedClass,style:this.style,onClick:n=>n.stopPropagation(),ref:n=>this.modalRef=n},[this.closeIcon&&t("i",{"aria-hidden":"true",class:"close icon",onClick:this.close},null),(a=(e=this.$slots).default)==null?void 0:a.call(e)])]}})]})}}),lc=E({name:"SuiModalActions",render(){var e,a;return t("div",{class:"actions"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),nc=E({name:"SuiModalContent",props:{image:Boolean,scrolling:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.image,"image"),A(e.scrolling,"scrolling"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),oc=E({name:"SuiModalDescription",render(){var e,a;return J("div",{class:"description"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),sc=E({name:"SuiModalHeader",render(){var e,a;return J("div",{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Kv={install(e){e.component(ac.name,ac),e.component(lc.name,lc),e.component(nc.name,nc),e.component(oc.name,oc),e.component(sc.name,sc)}},Xv=e=>{const a=q(!1),n=eo(e,"position"),o=q(null),r=eo(e,"trigger"),c=()=>{a.value=!0,Aa(()=>p())},m=()=>{a.value=!1},p=()=>{if(!o.value||!r.value)return;let s=0,u=0;const f=o.value,d=r.value.$el;f.style.transform=`translate(${s}px, ${u}px)`;const{top:h,left:v,width:_,height:C}=d.getBoundingClientRect(),k=f.getBoundingClientRect(),{pageXOffset:B,pageYOffset:b}=window;if(n.value.includes("top")?(s=B+v,u=b+h-f.offsetTop-f.offsetHeight):(s=v,u=h+C-k.top),n.value.includes("right")){const w=_-k.width;s=v+w}if(n.value.includes("center")){const w=_/2-k.width/2;s=v+w}n.value==="right center"&&(s=v+_,u=h+C/2-k.top-k.height/2),n.value==="left center"&&(s=v-k.width,u=h+C/2-k.top-k.height/2),f.style.display="flex",f.style.position="absolute",f.style.transform=`translate(${s}px, ${u}px)`};return{show:a,showPopup:c,hidePopup:m,placement:n,popupRef:o,triggerRef:r}},rc=E({name:"SuiPopup",props:{basic:Boolean,content:String,flowing:Boolean,header:String,inverted:Boolean,position:{type:String,default:"top left"},size:String,trigger:Object,wide:[Boolean,String]},setup(e,{slots:a}){const{show:n,showPopup:o,hidePopup:r,popupRef:c,triggerRef:m}=Xv(e);rs(()=>{var h,v,_;(h=m.value)!=null&&h.$el&&((v=m.value)==null||v.$el.addEventListener("mouseenter",o),(_=m.value)==null||_.$el.addEventListener("mouseleave",r))});const p=q(n.value?"open":"close");H(()=>p.value!=="closed"),pt(()=>n.value,h=>{p.value=h?"opening":"closing"});const s=(h,v="scale")=>{switch(h){case"opening":return`animating ${v} in`;case"open":return"visible active";case"closing":return`visible active animating ${v} out`;case"closed":return"hidden"}},u=()=>p.value=n.value?"open":"closed";wi(()=>{var h;(h=c.value)==null||h.addEventListener("animationend",u,!0)}),Yi(()=>{var h;(h=c.value)==null||h.removeEventListener("animationend",u)});const f={position:"initial",animationDuration:"200ms"},d=H(()=>ee("ignored ui",e.position,e.size,A(e.basic,"basic"),A(e.flowing,"flowing"),A(e.inverted,"inverted"),Fe(e.wide,"wide"),"popup transition",s(p.value,"scale")));return()=>t(gn,{to:"body"},{default:()=>{var h;return[t("div",{ref:c,style:"display: flex; position: absolute; transform: translate(0px, 0px);"},[t("div",{class:d.value,style:f},[e.header&&t("div",{class:"header"},[e.header]),t("div",{class:"content"},[e.content?e.content:(h=a.default)==null?void 0:h.call(a)])])])]}})}}),Qv={install(e){e.component(rc.name,rc)}},Zv=["top","bottom","left"],As=()=>({attached:{type:String,validator:e=>Zv.includes(e)}}),qm=e=>({attachedClasses:H(()=>ee(e.attached,{attached:e.attached}))}),e1=["red","orange","yellow","olive","green","teal","blue","purple","violet","pink","brown","grey","black"],Um=()=>({color:{type:String,validator:e=>e1.includes(e)}}),Ym=e=>({colorClasses:H(()=>ee(e.inverted&&"inverted",e.color))}),Kl=E({name:"SuiProgress",props:{active:Boolean,disabled:Boolean,error:Boolean,indicating:Boolean,inverted:Boolean,label:String,percent:Number,progress:[Boolean,String],size:String,success:Boolean,warning:Boolean,...As(),...Um()},setup(e){const{attachedClasses:a}=qm(e),{colorClasses:n}=Ym(e),o=H(()=>ee("ui",n.value,e.size,A(e.active||e.indicating,"active"),A(e.disabled,"disabled"),A(e.error,"error"),A(e.indicating,"indicating"),A(e.success,"success"),A(e.warning,"warning"),a.value,"progress")),r=H(()=>ee(Fe(e.progress,"progress"))),c=H(()=>e.progress!=="centered"?{}:{right:0});return()=>t("div",{class:o.value,"data-percent":e.percent},[t("div",{class:"bar",style:`width: ${e.percent}%; transition-duration: 300ms;`},[e.progress&&t("div",{class:r.value,style:c.value},[`${e.percent}%`])]),e.label&&t("div",{class:"label"},[e.label])])}}),t1={install(e){e.component(Kl.name,Kl)}},i1=E({name:"SuiRatingIcon",props:{icon:String,index:{type:Number,default:0}},setup(e){const a=Ve("rating",q(0)),n=Ve("updateRating"),o=Ve("selectedIndex",q(0)),r=Ve("updateSelectedIndex"),c=Ve("clearable",!1),m=Ve("disabled",!1),p=()=>{if(!m){if(c&&e.index===a.value){n(0),r(0);return}n(e.index)}},s=()=>{m||r(e.index)},u=H(()=>e.index<=a.value),f=H(()=>e.index<=o.value),d=H(()=>ee(e.icon,A(u.value,"active"),A(f.value,"selected"),"icon"));return()=>t("i",{class:d.value,onClick:()=>p(),onMouseenter:()=>s()},null)}}),uc=E({name:"SuiRating",props:{clearable:Boolean,color:String,defaultRating:{type:Number,default:0},disabled:Boolean,icon:{type:String,default:"star"},maxRating:{type:Number,default:1},modelValue:Number,size:String},setup(e,{emit:a}){const n=q(e.modelValue||e.defaultRating),o=q(!1),r=q(0),c=f=>{n.value=f,a("update:modelValue",f),a("change",f)},m=f=>r.value=f,p=()=>{e.disabled||(o.value=!0)},s=()=>{e.disabled||(o.value=!1,m(0))},u=H(()=>ee("ui",e.color,e.icon,e.size,A(e.disabled,"disabled"),"rating",A(o.value,"selected")));return ut("rating",n),ut("updateRating",c),ut("selectedIndex",r),ut("updateSelectedIndex",m),ut("clearable",e.clearable),ut("disabled",e.disabled),()=>t("div",{class:u.value,onMouseenter:()=>p(),onMouseleave:()=>s()},[[...Array(e.maxRating)].map((f,d)=>t(i1,{icon:e.icon,index:d+1},null))])}}),a1={install(e){e.component(uc.name,uc)}},cc=E({name:"SuiSearch",props:{icon:String,placeholder:String},setup(e){return()=>t("div",{class:"ui search"},[t("div",{class:"ui icon input"},[t("input",{type:"text",class:"prompt",placeholder:e.placeholder},null),t("i",{class:"search icon"},null)]),t("div",{class:"results"},null)])}}),l1={install(e){e.component(cc.name,cc)}},dc=E({name:"SuiSidebar",directives:{clickoutside:Cs},emits:["update:visible","show","hide"],props:{animation:{type:String,default:"overlay"},dimmed:Boolean,direction:{type:String,default:"left"},icon:[Boolean,String],inverted:Boolean,visible:Boolean},setup(e,{emit:a}){const n=ti({animating:!1}),o=H(()=>{const r=e.direction==="right"||e.direction==="left";return ee("ui","sidebar",e.direction,e.animation,A(e.inverted,"inverted"),A(e.visible,"visible"),A(n.animating,"animating"),A(r,"vertical"),Fe(e.icon,"icon"),"menu")});return pt(()=>e.visible,()=>{if(n.animating=!0,setTimeout(()=>n.animating=!1,500),e.dimmed){const r=document.querySelector(".pusher");r&&r.classList.toggle("dimmed")}}),{computedClass:o,onClickPusher:r=>{const c=r.path||r.composedPath&&r.composedPath();c&&c.find(m=>m.classList&&m.classList.contains("pusher"))&&e.visible&&a("update:visible",!1)}}},render(){var e,a;return ul(t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]),[[cn("clickoutside"),this.onClickPusher]])}}),n1={install:e=>{e.component(dc.name,dc)}};class On{static getWindowScrollTop(){let{documentElement:a}=document;return(window.pageYOffset||a.scrollTop)-(a.clientTop||0)}static getWindowScrollLeft(){let{documentElement:a}=document;return(window.pageXOffset||a.scrollLeft)-(a.clientLeft||0)}static hasClass(a,n){return a.classList.contains(n)}}const mc=E({name:"SuiSlider",emits:["change","slideend","update:modelValue"],props:{color:String,disabled:Boolean,inverted:Boolean,labeled:[Boolean,String],labels:Array,max:{type:Number,default:10},min:{type:Number,default:0},modelValue:{type:[Number,Array],default:0},range:Boolean,reversed:Boolean,size:String,step:{type:Number,default:1},vertical:Boolean,verticalHeight:{type:[Number,String],default:200}},setup(e,{emit:a}){const n=H(()=>ee("ui",e.color,e.size,A(e.disabled,"disabled"),A(e.inverted,"inverted"),A(e.reversed,"reversed"),A(e.vertical,"vertical"),Fe(e.labeled,"labeled"),"slider")),o=()=>100*(e.modelValue[0]-e.min)/(e.max-e.min),r=()=>100*(e.modelValue[1]-e.min)/(e.max-e.min),c=H(()=>{if(e.range)return e.reversed&&!e.vertical?{right:o()+"%",width:r()-o()+"%"}:e.vertical?e.reversed?{bottom:o()+"%",height:r()-o()+"%"}:{top:o()+"%",height:r()-o()+"%"}:{left:o()+"%",width:r()-o()+"%"};let G=e.modelValue>e.max?e.max:e.modelValue;return e.reversed?e.vertical?{bottom:"0%",top:`${100-(G-e.min)/(e.max-e.min)*100}%`}:{right:"0%",left:`${100-(G-e.min)/(e.max-e.min)*100}%`}:e.vertical?{top:"0%",bottom:`${100-(G-e.min)/(e.max-e.min)*100}%`}:{left:"0%",right:`${100-(G-e.min)/(e.max-e.min)*100}%`}}),m=H(()=>{let G=e.range?e.modelValue[0]:e.modelValue>e.max?e.max:e.modelValue;return!e.reversed&&e.vertical?{top:`calc(${(G-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:e.reversed&&e.vertical?{top:"auto",bottom:`calc(${(G-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.reversed&&!e.vertical?{left:"auto",right:`calc(${(G-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{left:`calc(${(G-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),p=H(()=>{let G=e.modelValue[1]>e.max?e.max:e.modelValue[1];return e.reversed&&!e.vertical?{left:"auto",right:`calc(${(G-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.vertical?e.reversed?{top:"auto",bottom:`calc(${(G-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{top:`calc(${(G-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:{left:`calc(${(G-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),s=H(()=>e.labels?e.labels:[...Array(e.max-e.min+1)].map((G,W)=>W*e.step+e.min)),u=()=>{var G,W;let ce=1,ie=f(),Le=(e.vertical?(G=h.value)==null?void 0:G.clientHeight:(W=h.value)==null?void 0:W.clientWidth)||0,We=1;if(Le>0)for(;Le/ie*We<100;)ie%We||(ce=We),We+=1;return ce},f=()=>Math.round((e.max-e.min)/e.step),d=q(null),h=q(null),v=q(0),_=q(0),C=q(0),k=q(0),B=()=>{if(!d.value)return;let G=d.value.getBoundingClientRect();v.value=G.left+On.getWindowScrollLeft(),_.value=G.top+On.getWindowScrollTop(),C.value=d.value.offsetWidth,k.value=d.value.offsetHeight},b=q(0),w=G=>{let{pageX:W,pageY:ce}=G.touches?G.touches[0]:G,ie,Le;e.vertical?ie=(_.value+k.value-ce)*100/k.value:ie=(W-v.value)*100/C.value,Le=(e.max-e.min)*(ie/100)+e.min;const We=e.range?e.modelValue[b.value]:e.modelValue||0;Le=We+Math.round(Le/e.step-We/e.step)*e.step,e.reversed&&(Le=e.max-Le+e.min),e.vertical&&(Le=e.max-Le+e.min),x(Le)},x=G=>{let W=G,ce;if(e.range)if(ce=e.modelValue?[...e.modelValue]:[],b.value===0){let ie=e.modelValue?e.modelValue[1]:e.max;W<e.min?W=e.min:W>ie&&(W=ie),ce[0]=W,ce[1]=ce[1]||e.max}else{let ie=e.modelValue?e.modelValue[0]:e.min;W>e.max?W=e.max:W<ie&&(W=ie),ce[0]=ce[0]||e.min,ce[1]=W}else W<e.min&&(W=e.min),W>e.max&&(W=e.max),ce=W;a("update:modelValue",ce),a("change",ce)},$=q(!1),D=G=>$.value=G,F=(G,W=0)=>{D(!0),B(),b.value=W,G.preventDefault()},V=G=>{$.value&&(D(!1),document.removeEventListener("mousemove",z),a("slideend",{event:G,value:e.modelValue}))},z=G=>{$.value&&(w(G),G==null||G.preventDefault())},j=(G,W=0)=>{e.disabled||(F(G,W),document.addEventListener("mousemove",z),document.addEventListener("mouseup",V),G.preventDefault())},K=(G,W=0)=>{switch(b.value=W,G.code){case"ArrowUp":e.vertical&&(e.reversed?U():me()),G.preventDefault();break;case"ArrowDown":e.vertical&&(e.reversed?me():U()),G.preventDefault();break;case"ArrowRight":e.reversed?me():U(),G.preventDefault();break;case"ArrowLeft":e.reversed?U():me(),G.preventDefault();break}},U=()=>{let G=0;e.range?G=e.modelValue[b.value]+e.step:G=e.modelValue+e.step,x(G)},me=()=>{let G=0;e.range?G=e.modelValue[b.value]-e.step:G=e.modelValue-e.step,x(G)},Te=G=>{if(!e.disabled&&!On.hasClass(G.target,"thumb")){if(e.range){let W=(e.vertical?G.offsetY/G.target.clientHeight:G.offsetX/G.target.clientWidth)*100,ce=(o()+r())/2;W<ce?b.value=e.reversed?1:0:b.value=e.reversed?0:1}B(),w(G)}};return()=>t("div",{ref:G=>d.value=G,class:n.value,style:e.vertical?`height: ${e.verticalHeight}px;`:""},[t("div",{class:"inner",onClick:Te},[t("div",{class:"track",ref:G=>h.value=G},null),t("div",{class:"track-fill",style:c.value},null),t("div",{class:"thumb",style:m.value,onMousedown:G=>j(G),onTouchstart:G=>F(G),onTouchmove:G=>z(G),onTouchend:G=>V(G),onKeydown:G=>K(G),tabindex:0},null),e.range&&t("div",{class:"thumb second",style:p.value,onMousedown:G=>j(G,1),onTouchstart:G=>F(G,1),onTouchmove:G=>z(G),onTouchend:G=>V(G),onKeydown:G=>K(G,1),tabindex:0},null)]),e.labeled&&t("ul",{class:"auto labels"},[[...Array(f()+1)].map((G,W)=>{let ce=W/f();return W%u()?t("li",{class:"halftick label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${ce} + 7px);`},null):t("li",{class:"label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${ce} + 7px);`},[e.reversed&&!e.vertical?e.labels?e.labels[f()-W]:s.value[f()-W]:e.labels?e.labels[W]:s.value[W]])})])])}}),o1={install(e){e.component(mc.name,mc)}},Io=E({name:"SuiTabPanel",props:{active:Boolean,attached:[Boolean,String],header:String},setup(e){return{computedClass:H(()=>ee("ui tab segment",A(e.active,"active"),Fe(e.attached,"attached")))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),pc=E({name:"SuiTab",emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},pointing:Boolean,secondary:Boolean,text:Boolean},setup(e,{emit:a,slots:n}){const o=q(e.activeIndex);pt(()=>e.activeIndex,u=>{o.value=u});const r=(u,f)=>{o.value!==f&&(o.value=f,a("update:activeIndex",f),a("tab-change",{event:u,index:f})),a("tab-click",{event:u,index:f})},c=(u,f)=>{u.key==="Enter"&&r(u,f)},m=H(()=>{var u,f;let d=[];return(u=n.default)!=null&&u.call(n)&&((f=n.default)==null||f.call(n).forEach(h=>{h.type.name==="SuiTabPanel"&&d.push(h)})),d}),p=H(()=>!e.secondary&&!e.pointing&&!e.text),s=H(()=>ee("ui menu",A(p.value,"tabular attached"),A(e.pointing,"pointing"),A(e.secondary,"secondary"),A(e.text,"text")));return{onClick:r,onKeyDown:c,tabIndex:o,tabs:m,tabMenuClass:s,isDefaultMenu:p}},render(){const e=()=>this.tabs.map((n,o)=>t("a",{class:`item ${this.tabIndex===o&&"active"}`,onClick:r=>this.onClick(r,o),onKeydown:r=>this.onKeyDown(r,o),tabindex:0},[n.props.header])),a=()=>this.tabs.map((n,o)=>t(Io,Ji(n.props,{active:this.tabIndex===o,attached:this.isDefaultMenu?"bottom":!1}),{default:()=>{var r,c;return[(c=(r=n.children).default)==null?void 0:c.call(r)]}}));return t(Ce,null,[t("div",{class:this.tabMenuClass},[e()]),a()])}}),s1={install(e){e.component(pc.name,pc),e.component(Io.name,Io)}};function r1(e,a){e.indexOf(a)===-1&&e.push(a)}const Jm=(e,a,n)=>Math.min(Math.max(n,e),a),Et={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},Xl=e=>typeof e=="number",sa=e=>Array.isArray(e)&&!Xl(e[0]),u1=(e,a,n)=>{const o=a-e;return((n-e)%o+o)%o+e};function c1(e,a){return sa(e)?e[u1(0,e.length,a)]:e}const Wm=(e,a,n)=>-n*e+n*a+e,Km=()=>{},vi=e=>e,ks=(e,a,n)=>a-e===0?1:(n-e)/(a-e);function Xm(e,a){const n=e[e.length-1];for(let o=1;o<=a;o++){const r=ks(0,a,o);e.push(Wm(n,1,r))}}function d1(e){const a=[0];return Xm(a,e-1),a}function m1(e,a=d1(e.length),n=vi){const o=e.length,r=o-a.length;return r>0&&Xm(a,r),c=>{let m=0;for(;m<o-2&&!(c<a[m+1]);m++);let p=Jm(0,1,ks(a[m],a[m+1],c));return p=c1(n,m)(p),Wm(e[m],e[m+1],p)}}const Qm=e=>Array.isArray(e)&&Xl(e[0]),Eo=e=>typeof e=="object"&&!!e.createAnimation,Sa=e=>typeof e=="function",p1=e=>typeof e=="string",Ya={ms:e=>e*1e3,s:e=>e/1e3},Zm=(e,a,n)=>(((1-3*n+3*a)*e+(3*n-6*a))*e+3*a)*e,f1=1e-7,g1=12;function h1(e,a,n,o,r){let c,m,p=0;do m=a+(n-a)/2,c=Zm(m,o,r)-e,c>0?n=m:a=m;while(Math.abs(c)>f1&&++p<g1);return m}function Pa(e,a,n,o){if(e===a&&n===o)return vi;const r=c=>h1(c,0,1,e,n);return c=>c===0||c===1?c:Zm(r(c),a,o)}const _1=(e,a="end")=>n=>{n=a==="end"?Math.min(n,.999):Math.max(n,.001);const o=n*e,r=a==="end"?Math.floor(o):Math.ceil(o);return Jm(0,1,r/e)},fc={ease:Pa(.25,.1,.25,1),"ease-in":Pa(.42,0,1,1),"ease-in-out":Pa(.42,0,.58,1),"ease-out":Pa(0,0,.58,1)},b1=/\((.*?)\)/;function gc(e){if(Sa(e))return e;if(Qm(e))return Pa(...e);if(fc[e])return fc[e];if(e.startsWith("steps")){const a=b1.exec(e);if(a){const n=a[1].split(",");return _1(parseFloat(n[0]),n[1].trim())}}return vi}class ep{constructor(a,n=[0,1],{easing:o,duration:r=Et.duration,delay:c=Et.delay,endDelay:m=Et.endDelay,repeat:p=Et.repeat,offset:s,direction:u="normal",autoplay:f=!0}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=vi,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((h,v)=>{this.resolve=h,this.reject=v}),o=o||Et.easing,Eo(o)){const h=o.createAnimation(n);o=h.easing,n=h.keyframes||n,r=h.duration||r}this.repeat=p,this.easing=sa(o)?vi:gc(o),this.updateDuration(r);const d=m1(n,s,sa(o)?o.map(gc):vi);this.tick=h=>{var v;c=c;let _=0;this.pauseTime!==void 0?_=this.pauseTime:_=(h-this.startTime)*this.rate,this.t=_,_/=1e3,_=Math.max(_-c,0),this.playState==="finished"&&this.pauseTime===void 0&&(_=this.totalDuration);const C=_/this.duration;let k=Math.floor(C),B=C%1;!B&&C>=1&&(B=1),B===1&&k--;const b=k%2;(u==="reverse"||u==="alternate"&&b||u==="alternate-reverse"&&!b)&&(B=1-B);const w=_>=this.totalDuration?1:Math.min(B,1),x=d(this.easing(w));a(x),this.pauseTime===void 0&&(this.playState==="finished"||_>=this.totalDuration+m)?(this.playState="finished",(v=this.resolve)===null||v===void 0||v.call(this,x)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},f&&this.play()}play(){const a=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=a-this.pauseTime:this.startTime||(this.startTime=a),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var a;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(a=this.reject)===null||a===void 0||a.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(a){this.duration=a,this.totalDuration=a*(this.repeat+1)}get currentTime(){return this.t}set currentTime(a){this.pauseTime!==void 0||this.rate===0?this.pauseTime=a:this.startTime=performance.now()-a/this.rate}get playbackRate(){return this.rate}set playbackRate(a){this.rate=a}}class v1{setAnimation(a){this.animation=a,a==null||a.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const jn=new WeakMap;function tp(e){return jn.has(e)||jn.set(e,{transforms:[],values:new Map}),jn.get(e)}function y1(e,a){return e.has(a)||e.set(a,new v1),e.get(a)}const S1=["","X","Y","Z"],w1=["translate","scale","rotate","skew"],Ql={x:"translateX",y:"translateY",z:"translateZ"},hc={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:e=>e+"deg"},C1={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:e=>e+"px"},rotate:hc,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:vi},skew:hc},ll=new Map,xs=e=>`--motion-${e}`,Zl=["x","y","z"];w1.forEach(e=>{S1.forEach(a=>{Zl.push(e+a),ll.set(xs(e+a),C1[e])})});const A1=(e,a)=>Zl.indexOf(e)-Zl.indexOf(a),k1=new Set(Zl),ip=e=>k1.has(e),x1=(e,a)=>{Ql[a]&&(a=Ql[a]);const{transforms:n}=tp(e);r1(n,a),e.style.transform=$1(n)},$1=e=>e.sort(A1).reduce(B1,"").trim(),B1=(e,a)=>`${e} ${a}(var(${xs(a)}))`,Ro=e=>e.startsWith("--"),_c=new Set;function T1(e){if(!_c.has(e)){_c.add(e);try{const{syntax:a,initialValue:n}=ll.has(e)?ll.get(e):{};CSS.registerProperty({name:e,inherits:!1,syntax:a,initialValue:n})}catch{}}}const Gn=(e,a)=>document.createElement("div").animate(e,a),bc={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{Gn({opacity:[1]})}catch{return!1}return!0},finished:()=>!!Gn({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{Gn({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},qn={},ea={};for(const e in bc)ea[e]=()=>(qn[e]===void 0&&(qn[e]=bc[e]()),qn[e]);const L1=.015,D1=(e,a)=>{let n="";const o=Math.round(a/L1);for(let r=0;r<o;r++)n+=e(ks(0,o-1,r))+", ";return n.substring(0,n.length-2)},vc=(e,a)=>Sa(e)?ea.linearEasing()?`linear(${D1(e,a)})`:Et.easing:Qm(e)?I1(e):e,I1=([e,a,n,o])=>`cubic-bezier(${e}, ${a}, ${n}, ${o})`;function E1(e,a){for(let n=0;n<e.length;n++)e[n]===null&&(e[n]=n?e[n-1]:a());return e}const R1=e=>Array.isArray(e)?e:[e];function zo(e){return Ql[e]&&(e=Ql[e]),ip(e)?xs(e):e}const kl={get:(e,a)=>{a=zo(a);let n=Ro(a)?e.style.getPropertyValue(a):getComputedStyle(e)[a];if(!n&&n!==0){const o=ll.get(a);o&&(n=o.initialValue)}return n},set:(e,a,n)=>{a=zo(a),Ro(a)?e.style.setProperty(a,n):e.style[a]=n}};function ap(e,a=!0){if(!(!e||e.playState==="finished"))try{e.stop?e.stop():(a&&e.commitStyles(),e.cancel())}catch{}}function z1(e,a){var n;let o=(a==null?void 0:a.toDefaultUnit)||vi;const r=e[e.length-1];if(p1(r)){const c=((n=r.match(/(-?[\d.]+)([a-z%]*)/))===null||n===void 0?void 0:n[2])||"";c&&(o=m=>m+c)}return o}function P1(){return window.__MOTION_DEV_TOOLS_RECORD}function F1(e,a,n,o={},r){const c=P1(),m=o.record!==!1&&c;let p,{duration:s=Et.duration,delay:u=Et.delay,endDelay:f=Et.endDelay,repeat:d=Et.repeat,easing:h=Et.easing,persist:v=!1,direction:_,offset:C,allowWebkitAcceleration:k=!1,autoplay:B=!0}=o;const b=tp(e),w=ip(a);let x=ea.waapi();w&&x1(e,a);const $=zo(a),D=y1(b.values,$),F=ll.get($);return ap(D.animation,!(Eo(h)&&D.generator)&&o.record!==!1),()=>{const V=()=>{var K,U;return(U=(K=kl.get(e,$))!==null&&K!==void 0?K:F==null?void 0:F.initialValue)!==null&&U!==void 0?U:0};let z=E1(R1(n),V);const j=z1(z,F);if(Eo(h)){const K=h.createAnimation(z,a!=="opacity",V,$,D);h=K.easing,z=K.keyframes||z,s=K.duration||s}if(Ro($)&&(ea.cssRegisterProperty()?T1($):x=!1),w&&!ea.linearEasing()&&(Sa(h)||sa(h)&&h.some(Sa))&&(x=!1),x){F&&(z=z.map(me=>Xl(me)?F.toDefaultUnit(me):me)),z.length===1&&(!ea.partialKeyframes()||m)&&z.unshift(V());const K={delay:Ya.ms(u),duration:Ya.ms(s),endDelay:Ya.ms(f),easing:sa(h)?void 0:vc(h,s),direction:_,iterations:d+1,fill:"both"};p=e.animate({[$]:z,offset:C,easing:sa(h)?h.map(me=>vc(me,s)):void 0},K),p.finished||(p.finished=new Promise((me,Te)=>{p.onfinish=me,p.oncancel=Te}));const U=z[z.length-1];p.finished.then(()=>{v||(kl.set(e,$,U),p.cancel())}).catch(Km),k||(p.playbackRate=1.000001)}else if(r&&w)z=z.map(K=>typeof K=="string"?parseFloat(K):K),z.length===1&&z.unshift(parseFloat(V())),p=new r(K=>{kl.set(e,$,j?j(K):K)},z,Object.assign(Object.assign({},o),{duration:s,easing:h}));else{const K=z[z.length-1];kl.set(e,$,F&&Xl(K)?F.toDefaultUnit(K):K)}return m&&c(e,a,z,{duration:s,delay:u,easing:h,repeat:d,offset:C},"motion-one"),D.setAnimation(p),p&&!B&&p.pause(),p}}const M1=(e,a)=>e[a]?Object.assign(Object.assign({},e),e[a]):Object.assign({},e);function V1(e,a){var n;return typeof e=="string"?a?((n=a[e])!==null&&n!==void 0||(a[e]=document.querySelectorAll(e)),e=a[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const H1=e=>e(),lp=(e,a,n=Et.duration)=>new Proxy({animations:e.map(H1).filter(Boolean),duration:n,options:a},O1),N1=e=>e.animations[0],O1={get:(e,a)=>{const n=N1(e);switch(a){case"duration":return e.duration;case"currentTime":return Ya.s((n==null?void 0:n[a])||0);case"playbackRate":case"playState":return n==null?void 0:n[a];case"finished":return e.finished||(e.finished=Promise.all(e.animations.map(j1)).catch(Km)),e.finished;case"stop":return()=>{e.animations.forEach(o=>ap(o))};case"forEachNative":return o=>{e.animations.forEach(r=>o(r,e))};default:return typeof(n==null?void 0:n[a])>"u"?void 0:()=>e.animations.forEach(o=>o[a]())}},set:(e,a,n)=>{switch(a){case"currentTime":n=Ya.ms(n);case"playbackRate":for(let o=0;o<e.animations.length;o++)e.animations[o][a]=n;return!0}return!1}},j1=e=>e.finished;function G1(e,a,n){return Sa(e)?e(a,n):e}function q1(e){return function(a,n,o={}){a=V1(a);const r=a.length,c=[];for(let m=0;m<r;m++){const p=a[m];for(const s in n){const u=M1(o,s);u.delay=G1(u.delay,m,r);const f=F1(p,s,n[s],u,e);c.push(f)}}return lp(c,o,o.duration)}}const U1=q1(ep);function Y1(e,a={}){return lp([()=>{const n=new ep(e,[0,1],a);return n.finished.catch(()=>{}),n}],a,a.duration)}function J1(e,a,n){return(Sa(e)?Y1:U1)(e,a,n)}const _e=(e,a)=>(n,{duration:o,keyframesOverride:r={}})=>J1(n,{...e,...r},{autoplay:!1,...a,duration:o}),yc=_e({transform:["scale(0.8) translateZ(0px)","scale(0.8) translateZ(0px)","scale(1.05) translateZ(0px)","scale(1) translateZ(0px)"],opacity:[null,.7,1,null],zIndex:[-1,-1,999,999]},{duration:.5,offset:[0,.1,.8,1]}),W1=_e({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,-1,null,-1]},{duration:.5,offset:[0,.5,.8,1]}),K1=_e({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,1,null,1]},{duration:.5,offset:[0,.5,.8,1]}),X1=_e({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(0)","scale(1)"],opacity:[0,1]},{duration:.4,offset:[0,1]}),Q1=_e({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(1)","scale(0)"],opacity:[1,0]},{duration:.4,offset:[0,1]}),Z1=_e({opacity:[0,1]},{duration:.5,offset:[0,1]}),ey=_e({opacity:[0,1],transform:["translateY(10%)","export translateY(0%)"]},{duration:.5,offset:[0,1]}),ty=_e({opacity:[0,1],transform:["translateY(-10%)","translateY(0%)"]},{duration:.5,offset:[0,1]}),iy=_e({opacity:[0,1],transform:["translateX(10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),ay=_e({opacity:[0,1],transform:["translateX(-10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),ly=_e({opacity:[1,0]},{duration:.5,offset:[0,1]}),ny=_e({opacity:[1,0],transform:["translateY(0%)","texport ranslateY(5%)"]},{duration:.5,offset:[0,1]}),oy=_e({opacity:[1,0],transform:["translateY(0%)","translateY(-5%)"]},{duration:.5,offset:[0,1]}),sy=_e({opacity:[1,0],transform:["translateX(0%)","translateX(5%)"]},{duration:.5,offset:[0,1]}),ry=_e({opacity:[1,0],transform:["translateX(0%)","translateX(-5%)"]},{duration:.5,offset:[0,1]}),uy=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["scale3d(.3, .3, .3)","scale3d(1.1, 1.1, 1.1)","scale3d(.9, .9, .9)","scale3d(1.03, 1.03, 1.03)","scale3d(.97, .97, .97)","scale3d(1, 1, 1)"],opacity:[0,null,null,1,null,1]},{duration:.6,offset:[0,.2,.4,.6,.8,1]}),cy=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, 1500px, 0","translate3d(0, -20px, 0)","translate3d(0, 10px, 0)","translate3d(0, -5px, 0)","translate3d(0, 0, 0)"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),dy=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, -1500px, 0","translate3d(0, 25px, 0)","translate3d(0, -10px, 0)","translate3d(0, 5px, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),my=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(1500px, 0, 0","translate3d(-25px, 0, 0)","translate3d(10px, 0, 0)","translate3d(-5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),py=_e({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(-1500px, 0, 0","translate3d(25px, 0, 0)","translate3d(-10px, 0, 0)","translate3d(5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),fy=_e({transform:["scale3d(.9, .9, .9)","scale3d(1.1, 1.1, 1.1)","scale3d(1.1, 1.1, 1.1)","scale3d(.3, .3, .3)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.5,.55,1]}),gy=_e({transform:["translate3d(0, 10px, 0)","translate3d(0, -20px, 0)","translate3d(0, -20px, 0)","translate3d(0, 2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),hy=_e({transform:["translate3d(0, -10px, 0)","translate3d(0, 20px, 0)","translate3d(0, 20px, 0)","translate3d(0, -2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),_y=_e({transform:["translate3d(-20px, 0, 0)","translate3d(2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),by=_e({transform:["translate3d(20px, 0, 0)","translate3d(-2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),vy=_e({transform:["perspective(2000px) rotateY(-90deg)","perspective(2000px) rotateY(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),yy=_e({transform:["perspective(2000px) rotateY(0deg)","perspective(2000px) rotateY(90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),Sy=_e({transform:["perspective(2000px) rotateX(-90deg)","perspective(2000px) rotateX(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),wy=_e({transform:["perspective(2000px) rotateX(0deg)","perspective(2000px) rotateX(-90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),Cy=_e({transform:["scale(0.8)","scale(1)"],opacity:[0,1]},{duration:.5,offset:[0,1]}),Ay=_e({transform:["scale(1)","scale(0.9)"],opacity:[1,0]},{duration:.5,offset:[0,1]}),np={transform:["scaleY(0)","scaleY(1)"],opacity:[0,1]},op={transform:["scaleX(0)","scaleX(1)"],opacity:[0,1]},sp={transform:["scaleY(1)","scaleY(0)"],opacity:[1,0]},ky={transform:["scaleX(1)","scaleX(0)"],opacity:[1,0]},xy=_e({transformOrigin:"top center",...np},{offset:[0,1]}),$y=_e({transformOrigin:"bottom center",...np},{offset:[0,1]}),By=_e({transformOrigin:"center right",...op},{offset:[0,1]}),Ty=_e({transformOrigin:"center left",...op},{offset:[0,1]}),Ly=_e({transformOrigin:"top center",...sp},{offset:[0,1]}),Dy=_e({transformOrigin:"bottom center",...sp},{offset:[0,1]}),Sc=_e({transformOrigin:"center left",...ky},{offset:[0,1]}),Ai=.8,ra={transform:["perspective(1000px) rotateX(90deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(15deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},ua={transform:["perspective(1000px) rotateY(-90deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-17.5deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},ca={transform:["perspective(1000px) rotateX(0deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(17.5deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},da={transform:["perspective(1000px) rotateY(0deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(-10deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},Iy=_e({transformOrigin:"top center",transform:ra.transform,opacity:ra.opacity},{duration:Ai,offset:ra.offset}),Ey=_e({transformOrigin:"bottom center",transform:ra.transform,opacity:ra.opacity},{duration:Ai,offset:ra.offset}),Ry=_e({transformOrigin:"center right",transform:ua.transform,opacity:ua.opacity},{duration:Ai,offset:ua.offset}),zy=_e({transformOrigin:"center left",transform:ua.transform,opacity:ua.opacity},{duration:Ai,offset:ua.offset}),Py=_e({transformOrigin:"top center",transform:ca.transform,opacity:ca.opacity},{duration:Ai,offset:ca.offset}),Fy=_e({transformOrigin:"bottom center",transform:ca.transform,opacity:ca.opacity},{duration:Ai,offset:ca.offset}),My=_e({transformOrigin:"center right",transform:da.transform,opacity:da.opacity},{duration:Ai,offset:da.offset}),Vy=_e({transformOrigin:"center left",transform:da.transform,opacity:da.opacity},{duration:Ai,offset:da.offset}),Hy=_e({transform:["scale(0)","scale(1)"],opacity:[1,1]},{offset:[0,1]}),Ny=_e({transform:["scale(1)","scale(0)"],opacity:[1,1]},{offset:[0,1]}),Oy=_e({transform:["translateY(0)","translateY(0)","translateY(-30px)","translateY(0)","translateY(-15px)","translateY(0)","translateY(0)"]},{offset:[0,.2,.4,.5,.6,.8,1]}),jy=_e({opacity:[1,0,1,0,1]},{offset:[0,.25,.5,.75,1]}),Gy=_e({animationTimingFunction:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",backgroundColor:["#FCFCFD","#FFF6CD","FCFCFD"]},{duration:2,offset:[0,.3,1]}),qy=_e({transform:["scale3d(1, 1, 1)","scale3d(1.25, 0.75, 1)","scale3d(0.75, 1.25, 1)","scale3d(1.15, 0.85, 1)","scale3d(0.95, 1.05, 1)","scale3d(1.05, 0.95, 1)","scale3d(1, 1, 1)"]},{duration:.75,offset:[0,.3,.4,.5,.6,.75,1]}),Uy=_e({transform:["scale(1)","scale(0.9)","scale(1)"],opacity:[1,.7,1]},{offset:[0,.5,1]}),Yy=_e({transform:["translateX(0)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(0)"]}),Jy=_e({transform:["scale(1)","scale(0.9) rotate(-3deg)","scale(0.9) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1) rotate(0)"]},{offset:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]}),Wy={browse:[yc,W1],"browse right":[yc,K1],drop:[X1,Q1],fade:[Z1,ly],"fade up":[ey,ny],"fade down":[ty,oy],"fade left":[iy,sy],"fade right":[ay,ry],fly:[uy,fy],"fly up":[cy,gy],"fly down":[dy,hy],"fly left":[my,_y],"fly right":[py,by],"horizontal flip":[vy,yy],"vertical flip":[Sy,wy],scale:[Cy,Ay],"slide up":[$y,Dy],"slide down":[xy,Ly],"slide left":[By,Sc],"slide right":[Ty,Sc],"swing up":[Ey,Fy],"swing down":[Iy,Py],"swing left":[Ry,My],"swing right":[zy,Vy],zoom:[Hy,Ny]},Ky={bounce:[Oy,void 0],flash:[jy,void 0],glow:[Gy,void 0],jiggle:[qy,void 0],pulse:[Uy,void 0],shake:[Yy,void 0],tada:[Jy,void 0]},rp=e=>({...Wy,...Ky})[e],Xy=e=>{const[a,n]=rp(e.animation),o=H(()=>e.duration?e.duration/1e3:.5),r=H(()=>(m,p)=>{if(!a)return p();const s=a(m,{duration:o.value});s.play(),s.finished.then(p)}),c=H(()=>(m,p)=>{if(!n)return p();const s=n(m,{duration:o.value});s.play(),s.finished.then(p)});return{onEnter:r,onLeave:c}},wc=E({name:"SuiTransition",props:{animation:{type:String,default:"fade"},duration:{type:Number,default:500}},setup(e){const{onEnter:a,onLeave:n}=Xy(e);return{onEnter:a,onLeave:n}},render(){return t(bn,{onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})}}),Po=E({name:"SuiTransitionGroup",props:{tag:String,animation:{type:String,default:"fade"},enterKeyframes:{type:Function,default:()=>({})},leaveKeyframes:{type:Function,default:()=>({})}},setup(e){const[a,n]=rp(e.animation),o=H(()=>(c,m)=>{if(!a)return m();const p=a(c,{duration:.5,keyframesOverride:e.enterKeyframes(c)});p.play(),p.finished.then(m)}),r=H(()=>(c,m)=>{if(!n)return m();const p=n(c,{duration:.5,keyframesOverride:e.leaveKeyframes(c)});p.play(),p.finished.then(m)});return{onEnter:o,onLeave:r}},render(){return t(cm,{tag:this.tag,onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})}}),Qy={install(e){e.component(wc.name,wc),e.component(Po.name,Po)}},Zy=Object.freeze(Object.defineProperty({__proto__:null,Accordion:vv,Calendar:Rv,Checkbox:zv,Dimmer:Pv,Dropdown:Nv,Embed:Ov,Modal:Kv,Popup:Qv,Progress:t1,Rating:a1,Search:l1,Sidebar:n1,Slider:o1,Tab:s1,Transition:Qy},Symbol.toStringTag,{value:"Module"})),Un=E({name:"SuiToastActions",props:{aligned:String,basic:Boolean,vertical:Boolean,...As()},setup(e,{slots:a}){const n=H(()=>ee("actions",e.basic&&"basic",e.aligned,e.vertical&&"vertical"));return()=>{var o;return e.attached?t(dt,{attached:e.attached,vertical:e.vertical},{default:()=>{var r;return[(r=a.default)==null?void 0:r.call(a)]}}):t("div",{class:n.value},[(o=a.default)==null?void 0:o.call(a)])}}}),eS=E({name:"SuiToastBox",props:{unclickable:Boolean,verticalAttached:Boolean},setup(e,{slots:a}){const n=H(()=>ee("floating toast-box compact",e.unclickable&&"unclickable"));return()=>{var o,r;return e.verticalAttached?t("div",{class:n.value,style:"display: block !important;"},[t("div",{class:"vertical attached compact right"},[(o=a.default)==null?void 0:o.call(a)])]):t("div",{class:n.value,style:"display: block !important;"},[(r=a.default)==null?void 0:r.call(a)])}}});function Yn(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!zt(e)}const tS=E({name:"SuiToast",emits:["click","close"],props:{id:Number,displayTime:{type:Number,default:3e3},type:String,title:String,message:{type:String,required:!0},centered:Boolean,messageStyle:Boolean,actions:Function,actionsProps:Object,showProgress:{type:String},showProgressColor:String,showProgressUp:Boolean,inverted:Boolean,...Um()},setup(e,{emit:a}){const{colorClasses:n}=Ym(e),o=H(()=>{var m,p,s,u,f;return ee(e.centered&&"center aligned",e.type||"neutral",n.value,"ui",e.messageStyle?"message":"toast",e.actions&&!((m=e.actionsProps)!=null&&m.vertical)&&"actions",((p=e.actionsProps)==null?void 0:p.attached)==="top"&&"bottom attached",((s=e.actionsProps)==null?void 0:s.attached)==="bottom"&&"top attached",((u=e.actionsProps)==null?void 0:u.attached)==="left"&&"left attached",((f=e.actionsProps)==null?void 0:f.vertical)&&"vertical","compact")}),r=q(e.showProgressUp?0:100),c=()=>{const m=e.displayTime/100;setTimeout(()=>{const p=setInterval(()=>{if(e.showProgressUp){r.value>=100&&clearInterval(p),r.value+=1;return}r.value<=0&&clearInterval(p),r.value-=1},m)},500)};return wi(()=>e.showProgress&&c()),setTimeout(()=>e.displayTime>0&&a("close"),e.displayTime+750),{classes:o,progress:r}},render(){var e;let a,n,o;return t(eS,{unclickable:!!this.actions,verticalAttached:((e=this.actionsProps)==null?void 0:e.attached)==="left"},{default:()=>{var r,c,m,p;return[this.showProgress==="top"&&t(Kl,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null),this.actions&&(((r=this.actionsProps)==null?void 0:r.attached)==="top"||((c=this.actionsProps)==null?void 0:c.attached)==="left")&&t(Un,this.actionsProps,Yn(a=this.actions({close:()=>this.$emit("close")}))?a:{default:()=>[a]}),t("div",{role:"alert",class:this.classes,onClick:()=>!this.actions&&this.$emit("click")},[t("div",{class:"content"},[this.title&&t("div",{class:"ui header"},[this.title]),t("div",{class:"message"},[this.message])]),this.actions&&!((m=this.actionsProps)!=null&&m.attached)&&t(Un,this.actionsProps,Yn(n=this.actions({close:()=>this.$emit("close")}))?n:{default:()=>[n]})]),this.actions&&((p=this.actionsProps)==null?void 0:p.attached)==="bottom"&&t(Un,this.actionsProps,Yn(o=this.actions({close:()=>this.$emit("close")}))?o:{default:()=>[o]}),this.showProgress==="bottom"&&t(Kl,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null)]}})}}),iS=["top right","top center","top left","bottom right","bottom center","bottom left","centered"],aS=({defaultValue:e}={})=>({position:{type:String,validator:a=>iS.includes(a),default:e}}),lS=e=>({positionClasses:H(()=>e.position||"")});function nS(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!zt(e)}const oS=E({name:"SuiToastContainer",props:{horizontal:Boolean,...As(),...aS({defaultValue:"top right"})},setup(e){const{items:a,remove:n}=up(),{attachedClasses:o}=qm(e),{positionClasses:r}=lS(e);return{classes:H(()=>ee(o.value||r.value,"ui toast-container",e.horizontal&&"horizontal")),items:a,remove:n,enterKeyframes:c=>{if(!(c instanceof HTMLElement))return{};const m=[0,`${c.offsetHeight}px`],p=[0,`${parseInt(getComputedStyle(c).marginBottom,10)}px`];return{height:m,marginBottom:p}},leaveKeyframes:c=>{if(!(c instanceof HTMLElement))return{};const m=[`${c.offsetWidth}px`,0],p=[`${c.offsetHeight}px`,0],s=e.horizontal?{width:m}:{height:p},u=[`${parseInt(getComputedStyle(c).marginBottom,10)}px`,0];return{...s,marginBottom:u}}}},render(){let e;return t(gn,{to:"body"},{default:()=>[t("div",{class:this.classes},[t(Po,{animation:"scale",enterKeyframes:this.enterKeyframes,leaveKeyframes:this.leaveKeyframes},nS(e=this.items.filter(({position:a,attached:n})=>this.attached?n===this.attached:a===this.position).filter(({horizontal:a})=>this.horizontal===!!a).map(({id:a,...n})=>t(tS,Ji({key:a},n,{onClick:()=>this.remove(a),onClose:()=>this.remove(a)}),null)))?e:{default:()=>[e]})])]})}}),sS=q(1),Ia=q([]),up=()=>({items:Ia,add:e=>{e.position=e.position||"top right",Ia.value=[...Ia.value,{id:sS.value++,...e}]},remove:e=>{Ia.value=Ia.value.filter(a=>a.id!==e)}}),st=()=>{var e;const a=(e=Ut())==null?void 0:e.appContext,{add:n}=up();return{toast:o=>{const{position:r,attached:c,horizontal:m}=o;cS({position:r,attached:c,horizontal:m})||uS(a,{position:r,attached:c,horizontal:m}),n(o)}}},rS=(e,{appContext:a,element:n}={})=>{const o=n||document.createElement("div");return a&&(e.appContext=a),Ol(e,o),{vNode:e,el:o}},uS=(e,{position:a="top right",attached:n,horizontal:o=!1}={})=>{const r=J(oS,{position:a,attached:n,horizontal:o}),{el:c}=rS(r,{appContext:e});return{vNode:r,el:c}},cS=({position:e="top right",attached:a,horizontal:n})=>{const o=a?`.ui.toast-container.${a}.attached`:`.ui.toast-container.${e.split(" ").join(".")}${n?".horizontal":":not(.horizontal)"}`;return document.querySelector(o)};function dS(e){Object.values({...av,...dv,...bv,...Zy}).map(a=>e.use(a))}const mS={install:dS},pS=Object.assign({inheritAttrs:!1},{__name:"DocSectionText",props:["label","onClick"],setup(e){const a=Em(),n=H(()=>{const r=a.currentRoute.value.path;return r.lastIndexOf("/")===r.length-1?r.slice(0,-1):r}),o=r=>{r.preventDefault();const m=r.target.parentElement.getAttribute("href"),p=m.slice(m.indexOf("#")+1),s=document.getElementById(p);s&&s.scrollIntoView({behavior:"smooth"})};return(r,c)=>{const m=y("SuiHeader"),p=y("SuiGridColumn"),s=y("SuiGridRow");return T(),ge(Ce,null,[t(s,null,{default:i(()=>[t(p,null,{default:i(()=>[t(m,{as:"h3",class:"doc-section-text"},{default:i(()=>[l(ke(e.label)+" ",1),t(g(ws),{to:`${n.value}#${r.$attrs.id}`,target:"_self",onClick:o},{default:i(()=>[t(g(Q),{name:"linkify",color:"grey",size:"small",link:"",fitted:""})]),_:1},8,["to"])]),_:1})]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[t(g(Q),{name:"code",color:"grey",link:"",onClick:e.onClick},null,8,["onClick"])]),_:1})]),_:1}),S("p",null,[fa(r.$slots,"default",{},void 0,!0)])],64)}}}),fS=we(pS,[["__scopeId","data-v-a2b78897"]]),gS={mounted(e,a){var r;const n=a.modifiers,o=a.value;n.script||o==="script"?e.className="language-javascript":e.className="language-markup",eb.highlightElement(e.children[0]),(r=e.children[0].parentElement)==null||r.setAttribute("tabindex","-1")}},hS={class:"inner"},_S={__name:"DocSectionCode",props:["code","hideCode"],setup(e){return(a,n)=>{const o=y("SuiGridColumn"),r=y("SuiGridRow");return T(),I(r,null,{default:i(()=>[t(o,{width:16},{default:i(()=>[fa(a.$slots,"default",{},void 0,!0)]),_:3}),t(o,{width:16,id:"accordion","aria-hidden":e.hideCode},{default:i(()=>[S("div",hS,[ul((T(),ge("pre",null,[S("code",null,ke(e.code)+`
`,1)])),[[g(gS)]])])]),_:1},8,["aria-hidden"])]),_:3})}}},bS=we(_S,[["__scopeId","data-v-965e7ddc"]]),M={__name:"DocSection",props:["label","code"],setup(e){const a=q(!0),n=()=>a.value=!a.value;return(o,r)=>{const c=y("SuiGrid");return T(),ge("section",null,[t(c,{columns:2},{default:i(()=>[t(fS,Ji({label:e.label,"on-click":n},o.$attrs),{default:i(()=>[fa(o.$slots,"description")]),_:3},16,["label"]),t(bS,{code:e.code,"hide-code":a.value},{default:i(()=>[fa(o.$slots,"example")]),_:3},8,["code","hide-code"])]),_:3})])}}},vS=`<template>
  <SuiButton @click="onClick">{{ label }}</SuiButton>
</template>

<script setup>
import { ref } from 'vue'
import { SuiButton } from 'vue-fomantic-ui'

const label = ref('Follow')
const onClick = () => label.value = label.value === 'Follow' ? 'Following' : 'Follow'
<\/script>`,yS={__name:"ButtonDoc",setup(e){const a=q("Follow"),n=()=>a.value=a.value==="Follow"?"Following":"Follow";return(o,r)=>(T(),I(M,{label:"Button",code:vS},{description:i(()=>[l(" A standard button ")]),example:i(()=>[t(g(P),{onClick:n},{default:i(()=>[l(ke(a.value),1)]),_:1})]),_:1}))}},SS=`<template>
  <SuiButton primary>Save</SuiButton>
  <SuiButton secondary>Okay</SuiButton>
  <SuiButton>Cancel</SuiButton>
</template>`,wS={__name:"EmphasisDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Emphasis",code:SS},{description:i(()=>[l(" A button can be formatted to show different levels of emphasis ")]),example:i(()=>[t(g(P),{primary:""},{default:i(()=>[l("Save")]),_:1}),t(g(P),{secondary:""},{default:i(()=>[l("Okay")]),_:1}),t(g(P),null,{default:i(()=>[l("Cancel")]),_:1})]),_:1}))}},CS=`<template>
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
</template>`,AS={__name:"AnimatedDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Animated",code:CS},{description:i(()=>[l(" A button can animate to show hidden content ")]),example:i(()=>[t(g(P),{animated:""},{default:i(()=>[t(g(fi),{visible:""},{default:i(()=>[l("Next")]),_:1}),t(g(fi),{hidden:""},{default:i(()=>[t(g(Q),{name:"arrow right"})]),_:1})]),_:1}),t(g(P),{animated:"vertical"},{default:i(()=>[t(g(fi),{visible:""},{default:i(()=>[t(g(Q),{name:"shop"})]),_:1}),t(g(fi),{hidden:""},{default:i(()=>[l("Shop")]),_:1})]),_:1}),t(g(P),{animated:"fade"},{default:i(()=>[t(g(fi),{visible:""},{default:i(()=>[l(" Sign-up for a Pro account ")]),_:1}),t(g(fi),{hidden:""},{default:i(()=>[l("$12.99 a month")]),_:1})]),_:1})]),_:1}))}},kS=`<template>
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
</template>`,xS={__name:"LabeledDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Labeled",code:kS},{description:i(()=>[l(" A button can appear alongside a label ")]),example:i(()=>[t(g(P),{labeled:"right",as:"div"},{default:i(()=>[t(g(P),{icon:"heart",content:" Like"}),t(g(N),{basic:""},{default:i(()=>[l("2,048")]),_:1})]),_:1}),t(g(P),{labeled:"left",as:"div"},{default:i(()=>[t(g(N),{basic:"",pointing:"right"},{default:i(()=>[l("2,048")]),_:1}),t(g(P),{icon:"heart",content:" Like"})]),_:1}),t(g(P),{labeled:"left",as:"div"},{default:i(()=>[t(g(N),{basic:""},{default:i(()=>[l("1,048")]),_:1}),t(g(P),{icon:"fork"})]),_:1})]),_:1}))}},$S=`<template>
  <SuiButton icon="cloud" />
</template>`,BS={__name:"IconDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Icon",code:$S},{description:i(()=>[l(" A button can have only an icon ")]),example:i(()=>[t(g(P),{icon:"cloud"})]),_:1}))}},TS=`<template>
  <SuiButton labeled icon="pause" content="Pause" />
  <SuiButton labeled="right" icon="right arrow" content="Next" />
  <SuiButton labeled icon>
    <SuiIcon loading name="spinner" />
    Loading
  </SuiButton>
</template>`,LS={__name:"LabeledIconDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Labeled Icon",code:TS},{description:i(()=>[l(" A button can use an icon as a label ")]),example:i(()=>[t(g(P),{labeled:"",icon:"pause",content:"Pause"}),t(g(P),{labeled:"right",icon:"right arrow",content:"Next"}),t(g(P),{labeled:"",icon:""},{default:i(()=>[t(g(Q),{loading:"",name:"spinner"}),l(" Loading ")]),_:1})]),_:1}))}},DS=`<template>
  <SuiButton basic primary>Primary</SuiButton>
  <SuiButton basic secondary>Secondary</SuiButton>
  <SuiButton basic positive>Positive</SuiButton>
  <SuiButton basic negative>Negative</SuiButton>
</template>`,IS={__name:"BasicDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Basic",code:DS},{description:i(()=>[l(" A basic button is less pronounced ")]),example:i(()=>[t(g(P),{basic:"",primary:""},{default:i(()=>[l("Primary")]),_:1}),t(g(P),{basic:"",secondary:""},{default:i(()=>[l("Secondary")]),_:1}),t(g(P),{basic:"",positive:""},{default:i(()=>[l("Positive")]),_:1}),t(g(P),{basic:"",negative:""},{default:i(()=>[l("Negative")]),_:1})]),_:1}))}},ES=`<template>
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
</template>`,RS={__name:"TertiaryDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Tertiary",code:ES},{description:i(()=>[l(" An none bordered less important button ")]),example:i(()=>[t(g(P),{tertiary:"",primary:""},{default:i(()=>[l("Primary")]),_:1}),t(g(P),{tertiary:"",secondary:""},{default:i(()=>[l("Secondary")]),_:1}),t(g(P),{tertiary:"",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(g(P),{tertiary:"",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(g(P),{tertiary:"",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(g(P),{tertiary:"",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(g(P),{tertiary:"",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(g(P),{tertiary:"",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(g(P),{tertiary:"",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(g(P),{tertiary:"",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(g(P),{tertiary:"",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(g(P),{tertiary:"",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(g(P),{tertiary:"",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(g(P),{tertiary:"",color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(g(P),{tertiary:"",color:"black"},{default:i(()=>[l("Black")]),_:1})]),_:1}))}},zS=`<template>
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
</template>`,PS={__name:"InvertedDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Inverted",code:zS},{description:i(()=>[l(" A button can be formatted to appear on dark backgrounds ")]),example:i(()=>[t(g(Ie),{inverted:""},{default:i(()=>[t(g(P),{inverted:"",primary:""},{default:i(()=>[l("Primary")]),_:1}),t(g(P),{inverted:"",secondary:""},{default:i(()=>[l("Secondary")]),_:1}),t(g(P),{inverted:"",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(g(P),{inverted:"",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(g(P),{inverted:"",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(g(P),{inverted:"",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(g(P),{inverted:"",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(g(P),{inverted:"",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(g(P),{inverted:"",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(g(P),{inverted:"",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(g(P),{inverted:"",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(g(P),{inverted:"",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(g(P),{inverted:"",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(g(P),{inverted:"",color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(g(P),{inverted:"",color:"black"},{default:i(()=>[l("Black")]),_:1})]),_:1})]),_:1}))}},FS=`<template>
  <SuiButtonGroup>
    <SuiButton content="One" />
    <SuiButton content="Two" />
    <SuiButton content="Three" />
  </SuiButtonGroup>
</template>`,MS={__name:"ButtonsDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Buttons",code:FS},{description:i(()=>[l(" Buttons can exist together as a group ")]),example:i(()=>[t(g(dt),null,{default:i(()=>[t(g(P),{content:"One"}),t(g(P),{content:"Two"}),t(g(P),{content:"Three"})]),_:1})]),_:1}))}},VS=`<template>
  <SuiButtonGroup icon>
    <SuiButton icon="align left" />
    <SuiButton icon="align center" />
    <SuiButton icon="align right" />
    <SuiButton icon="align justify" />
  </SuiButtonGroup>
</template>`,HS={__name:"IconButtonsDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Icon Buttons",code:VS},{description:i(()=>[l(" Button groups can show groups of icons ")]),example:i(()=>[t(g(dt),{icon:""},{default:i(()=>[t(g(P),{icon:"align left"}),t(g(P),{icon:"align center"}),t(g(P),{icon:"align right"}),t(g(P),{icon:"align justify"})]),_:1})]),_:1}))}},NS=S("div",{class:"or"},null,-1),OS=S("div",{class:"or","data-text":"ou"},null,-1),jS=`<template>
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
</template>`,GS={__name:"ConditionalsDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Conditionals",code:jS},{description:i(()=>[l(" Button groups can contain conditionals ")]),example:i(()=>[t(g(dt),null,{default:i(()=>[t(g(P),{content:"Cancel"}),NS,t(g(P),{content:"Save",positive:""})]),_:1}),t(g(dt),null,{default:i(()=>[t(g(P),{content:"un"}),OS,t(g(P),{content:"deux",positive:""})]),_:1})]),_:1}))}},qS=`<template>
  <SuiButton active icon="user" content=" Follow" />
</template>`,US={__name:"ActiveDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Active",code:qS},{description:i(()=>[l(" A button can show it is currently the active user selection ")]),example:i(()=>[t(g(P),{active:"",icon:"user",content:" Follow"})]),_:1}))}},YS=`<template>
  <SuiButton disabled icon="user" content=" Followed" />
</template>`,JS={__name:"DisabledDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Disabled",code:YS},{description:i(()=>[l(" A button can show it is currently unable to be interacted with ")]),example:i(()=>[t(g(P),{disabled:"",icon:"user",content:" Followed"})]),_:1}))}},WS=`<template>
  <SuiButton loading content="Loading" />
  <SuiButton loading="double" primary content="Loading" />
  <SuiButton loading="elastic" secondary content="Loading" />
</template>`,KS={__name:"LoadingDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Loading",code:WS},{description:i(()=>[l(" A button can show a loading indicator ")]),example:i(()=>[t(g(P),{loading:"",content:"Loading"}),t(g(P),{loading:"double",primary:"",content:"Loading"}),t(g(P),{loading:"elastic",secondary:"",content:"Loading"})]),_:1}))}},XS=`<template>
  <SuiButton facebook icon="facebook" content=" Facebook" />
  <SuiButton twitter icon="twitter" content=" Twitter" />
  <SuiButton vk icon="vk" content="VK" />
  <SuiButton linkedin icon="linkedin" content=" LinkedIn" />
  <SuiButton instagram icon="instagram" content=" Instagram" />
  <SuiButton youtube icon="youtube" content=" YouTube" />
  <SuiButton whatsapp icon="whatsapp" content=" WhatsApp" />
  <SuiButton telegram icon="telegram" content=" Telegram" />
</template>`,QS={__name:"SocialDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Social",code:XS},{description:i(()=>[l(" A button can be formatted to link to a social website ")]),example:i(()=>[t(g(P),{facebook:"",icon:"facebook",content:" Facebook"}),t(g(P),{twitter:"",icon:"twitter",content:" Twitter"}),t(g(P),{vk:"",icon:"vk",content:"VK"}),t(g(P),{linkedin:"",icon:"linkedin",content:" LinkedIn"}),t(g(P),{instagram:"",icon:"instagram",content:" Instagram"}),t(g(P),{youtube:"",icon:"youtube",content:" YouTube"}),t(g(P),{whatsapp:"",icon:"whatsapp",content:" WhatsApp"}),t(g(P),{telegram:"",icon:"telegram",content:" Telegram"})]),_:1}))}},ZS=`<template>
  <SuiButton size="mini" content="Mini" />
  <SuiButton size="tiny" content="Tiny" />
  <SuiButton size="small" content="Small" />
  <SuiButton size="medium" content="Medium" />
  <SuiButton size="large" content="Large" />
  <SuiButton size="big" content="Big" />
  <SuiButton size="huge" content="Huge" />
  <SuiButton size="massive" content="Massive" />
</template>`,ew={__name:"SizeDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Size",code:ZS},{description:i(()=>[l(" A button can have different sizes ")]),example:i(()=>[t(g(P),{size:"mini",content:"Mini"}),t(g(P),{size:"tiny",content:"Tiny"}),t(g(P),{size:"small",content:"Small"}),t(g(P),{size:"medium",content:"Medium"}),t(g(P),{size:"large",content:"Large"}),t(g(P),{size:"big",content:"Big"}),t(g(P),{size:"huge",content:"Huge"}),t(g(P),{size:"massive",content:"Massive"})]),_:1}))}},tw=`<template>
  <SuiButton floated="left" content="Left Floated" />
  <SuiButton floated="right" content="Right Floated" />
</template>`,iw={__name:"FloatedDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Floated",code:tw},{description:i(()=>[l(" A button can be aligned to the left or right of its container ")]),example:i(()=>[t(g(P),{floated:"left",content:"Left Floated"}),t(g(P),{floated:"right",content:"Right Floated"})]),_:1}))}},aw=`<template>
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
</template>`,lw={__name:"ColoredDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Colored",code:aw},{description:i(()=>[l(" A button can have different colors ")]),example:i(()=>[t(g(P),{color:"red"},{default:i(()=>[l("Red")]),_:1}),t(g(P),{color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(g(P),{color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(g(P),{color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(g(P),{color:"green"},{default:i(()=>[l("Green")]),_:1}),t(g(P),{color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(g(P),{color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(g(P),{color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(g(P),{color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(g(P),{color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(g(P),{color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(g(P),{color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(g(P),{color:"black"},{default:i(()=>[l("Black")]),_:1})]),_:1}))}},nw=`<template>
  <SuiButton compact content="Hold" />
  <SuiButton compact icon="pause" />
  <SuiButton compact labeled icon="pause" content="Pause" />
</template>`,ow={__name:"CompactDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Compact",code:nw},{description:i(()=>[l(" A button can reduce its padding to fit into tighter spaces ")]),example:i(()=>[t(g(P),{compact:"",content:"Hold"}),t(g(P),{compact:"",icon:"pause"}),t(g(P),{compact:"",labeled:"",icon:"pause",content:"Pause"})]),_:1}))}},sw=`<template>
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
<\/script>`,rw={__name:"ToggleDoc",setup(e){const a=q(!1);return(n,o)=>(T(),I(M,{label:"Toggle",code:sw},{description:i(()=>[l(" A button can be formatted to toggle on and off ")]),example:i(()=>[t(g(P),{toggle:"",active:a.value,onClick:()=>a.value=!a.value,content:a.value?"Voted":"Vote",style:{"min-width":"200px"}},null,8,["active","onClick","content"])]),_:1}))}},uw=`<template>
  <SuiButton positive content="Positive Button" />
</template>`,cw={__name:"PositiveDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Positive",code:uw},{description:i(()=>[l(" A button can hint towards a positive consequence ")]),example:i(()=>[t(g(P),{positive:"",content:"Positive Button"})]),_:1}))}},dw=`<template>
  <SuiButton negative content="Negative Button" />
</template>`,mw={__name:"NegativeDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Negative",code:dw},{description:i(()=>[l(" A button can hint towards a negative consequence ")]),example:i(()=>[t(g(P),{negative:"",content:"Negative Button"})]),_:1}))}},pw=`<template>
  <SuiButton fluid content="Fits container" />
</template>`,fw={__name:"FluidDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Fluid",code:pw},{description:i(()=>[l(" A button can take the width of its container ")]),example:i(()=>[t(g(P),{fluid:"",content:"Fits container"})]),_:1}))}},gw=`<template>
  <SuiButton circular icon="settings" />
</template>`,hw={__name:"CircularDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Circular",code:gw},{description:i(()=>[l(" A button can be circular ")]),example:i(()=>[t(g(P),{circular:"",icon:"settings"})]),_:1}))}},_w=S("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?",-1),bw=`<template>
  <SuiButton attached="top" content="Top" />
  <SuiSegment>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?</p>
  </SuiSegment>
  <SuiButton attached="bottom" content="Bottom" />
</template>`,vw={__name:"VerticallyAttachedDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Vertically Attached",code:bw},{description:i(()=>[l(" A button can be attached to the top or bottom of other content ")]),example:i(()=>[t(g(P),{attached:"top",content:"Top"}),t(g(Ie),{attached:""},{default:i(()=>[_w]),_:1}),t(g(P),{attached:"bottom",content:"Bottom"})]),_:1}))}},yw=`<template>
  <SuiButton attached="left" content="Left" />
  <SuiButton attached="right" content="Right" />
</template>`,Sw={__name:"HorizontallyAttachedDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Horizontally Attached",code:yw},{description:i(()=>[l(" A button can be attached to the left or right of other content ")]),example:i(()=>[t(g(P),{attached:"left",content:"Left"}),t(g(P),{attached:"right",content:"Right"})]),_:1}))}},ww=`<template>
  <SuiButtonGroup vertical>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,Cw={__name:"VerticalButtonsDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Vertical Buttons",code:ww},{description:i(()=>[l(" Groups can be formatted to appear vertically ")]),example:i(()=>[t(g(dt),{vertical:""},{default:i(()=>[t(g(P),null,{default:i(()=>[l("Feed")]),_:1}),t(g(P),null,{default:i(()=>[l("Messages")]),_:1}),t(g(P),null,{default:i(()=>[l("Events")]),_:1}),t(g(P),null,{default:i(()=>[l("Photos")]),_:1})]),_:1})]),_:1}))}},Aw=`<template>
  <SuiButtonGroup stackable>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,kw={__name:"StackableButtonsDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Stackable Buttons",code:Aw},{description:i(()=>[l(" Horizontal groups can automatically be stacked on mobile devices ")]),example:i(()=>[t(g(dt),{stackable:""},{default:i(()=>[t(g(P),null,{default:i(()=>[l("Feed")]),_:1}),t(g(P),null,{default:i(()=>[l("Messages")]),_:1}),t(g(P),null,{default:i(()=>[l("Events")]),_:1}),t(g(P),null,{default:i(()=>[l("Photos")]),_:1})]),_:1})]),_:1}))}},xw=`<template>
  <SuiButtonGroup vertical labeled icon>
    <SuiButton icon="pause" content="Pause" />
    <SuiButton icon="play" content="Play" />
    <SuiButton icon="shuffle" content="Shuffle" />
  </SuiButtonGroup>
</template>`,$w={__name:"LabeledIconButtonsDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Icon Buttons",code:xw},{description:i(()=>[l(" Groups can be formatted as labeled icons ")]),example:i(()=>[t(g(dt),{vertical:"",labeled:"",icon:""},{default:i(()=>[t(g(P),{icon:"pause",content:"Pause"}),t(g(P),{icon:"play",content:"Play"}),t(g(P),{icon:"shuffle",content:"Shuffle"})]),_:1})]),_:1}))}},Bw=`<template>
  <SuiButtonGroup>
    <SuiButton labeled icon="left chevron" content="Back" />
    <SuiButton icon="stop" content="Stop" />
    <SuiButton icon labeled="right">
      <SuiIcon name="right chevron" />
      Forward
    </SuiButton>
  </SuiButtonGroup>
</template>`,Tw={__name:"MixedGroupDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Mixed Group",code:Bw},{description:i(()=>[l(" Button groups can show groups of icons ")]),example:i(()=>[t(g(dt),null,{default:i(()=>[t(g(P),{labeled:"",icon:"left chevron",content:"Back"}),t(g(P),{icon:"stop",content:"Stop"}),t(g(P),{icon:"",labeled:"right"},{default:i(()=>[t(g(Q),{name:"right chevron"}),l(" Forward ")]),_:1})]),_:1})]),_:1}))}},Lw=`<template>
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
</template>`,Dw={__name:"EqualWidthDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Equal Width",code:Lw},{description:i(()=>[l(" Groups can have their widths divided evenly ")]),example:i(()=>[t(g(dt),{widths:5},{default:i(()=>[t(g(P),null,{default:i(()=>[l("Overview")]),_:1}),t(g(P),null,{default:i(()=>[l("Specs")]),_:1}),t(g(P),null,{default:i(()=>[l("Warranty")]),_:1}),t(g(P),null,{default:i(()=>[l("Reviews")]),_:1}),t(g(P),null,{default:i(()=>[l("Support")]),_:1})]),_:1}),t(g(dt),{widths:3},{default:i(()=>[t(g(P),null,{default:i(()=>[l("Overview")]),_:1}),t(g(P),null,{default:i(()=>[l("Specs")]),_:1}),t(g(P),null,{default:i(()=>[l("Support")]),_:1})]),_:1})]),_:1}))}},Iw=`<template>
  <SuiButtonGroup color="blue">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Ew={__name:"ColoredButtonsDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Colored Buttons",code:Iw},{description:i(()=>[l(" Groups can have a shared color ")]),example:i(()=>[t(g(dt),{color:"blue"},{default:i(()=>[t(g(P),null,{default:i(()=>[l("One")]),_:1}),t(g(P),null,{default:i(()=>[l("Two")]),_:1}),t(g(P),null,{default:i(()=>[l("Three")]),_:1})]),_:1})]),_:1}))}},Rw=`<template>
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
</template>`,zw={__name:"BasicButtonsDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Basic Buttons",code:Rw},{description:i(()=>[l(" A button group can be less pronounced ")]),example:i(()=>[t(g(dt),{basic:""},{default:i(()=>[t(g(P),null,{default:i(()=>[l("One")]),_:1}),t(g(P),null,{default:i(()=>[l("Two")]),_:1}),t(g(P),null,{default:i(()=>[l("Three")]),_:1})]),_:1}),t(g(dt),null,{default:i(()=>[t(g(P),{basic:"",color:"red"},{default:i(()=>[l("One")]),_:1}),t(g(P),{basic:"",color:"blue"},{default:i(()=>[l("Two")]),_:1}),t(g(P),{basic:"",color:"green"},{default:i(()=>[l("Three")]),_:1})]),_:1})]),_:1}))}},Pw=`<template>
  <SuiButtonGroup size="large">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Fw={__name:"GroupSizesDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Group Sizes",code:Pw},{description:i(()=>[l(" Groups can have a shared color ")]),example:i(()=>[t(g(dt),{size:"large"},{default:i(()=>[t(g(P),null,{default:i(()=>[l("One")]),_:1}),t(g(P),null,{default:i(()=>[l("Two")]),_:1}),t(g(P),null,{default:i(()=>[l("Three")]),_:1})]),_:1})]),_:1}))}},Mw={__name:"Button",setup(e){const a=[{id:"button",label:"Button",category:"Types",component:yS},{id:"emphasis",label:"Emphasis",category:"Types",component:wS},{id:"animated",label:"Animated",category:"Types",component:AS},{id:"labeled",label:"Labeled",category:"Types",component:xS},{id:"icon",label:"Icon",category:"Types",component:BS},{id:"labeled-icon",label:"Labeled Icon",category:"Types",component:LS},{id:"basic",label:"Basic",category:"Types",component:IS},{id:"tertiary",label:"Tertiary",category:"Types",component:RS},{id:"inverted",label:"Inverted",category:"Types",component:PS},{id:"buttons",label:"Buttons",category:"Groups",component:MS},{id:"icon-buttons",label:"Icon Buttons",category:"Groups",component:HS},{id:"content",label:"Content",category:"Content",component:GS},{id:"active",label:"Active",category:"States",component:US},{id:"disabled",label:"Disabled",category:"States",component:JS},{id:"loading",label:"Loading",category:"States",component:KS},{id:"social",label:"Social",category:"Variations",component:QS},{id:"size",label:"Size",category:"Variations",component:ew},{id:"floated",label:"Floated",category:"Variations",component:iw},{id:"colored",label:"Colored",category:"Variations",component:lw},{id:"compact",label:"Compact",category:"Variations",component:ow},{id:"toggle",label:"Toggle",category:"Variations",component:rw},{id:"positive",label:"Positive",category:"Variations",component:cw},{id:"negative",label:"Negative",category:"Variations",component:mw},{id:"fluid",label:"Fluid",category:"Variations",component:fw},{id:"circular",label:"Circular",category:"Variations",component:hw},{id:"vertically-attached",label:"Vertically Attached",category:"Variations",component:vw},{id:"horizontally-attached",label:"Horizontally Attached",category:"Variations",component:Sw},{id:"vertical-buttons",label:"Vertical Buttons",category:"Group Variations",component:Cw},{id:"stackable-buttons",label:"Stackable Buttons",category:"Group Variations",component:kw},{id:"labeled-icon-buttons",label:"Labeled Icon Buttons",category:"Group Variations",component:$w},{id:"mixed-group",label:"Mixed Group",category:"Group Variations",component:Tw},{id:"equal-width",label:"Equal Width",category:"Group Variations",component:Dw},{id:"colored-buttons",label:"Colored Buttons",category:"Group Variations",component:Ew},{id:"basic-buttons",label:"Basic Buttons",category:"Group Variations",component:zw},{id:"group-sizes",label:"Group Sizes",category:"Group Variations",component:Fw}];return(n,o)=>(T(),I(Nt,{title:"Button",description:"A button indicates a possible user action","component-docs":a}))}},Vw=S("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Hw=`<template>
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
</template>`,Nw={__name:"ContainerDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Container",code:Hw},{description:i(()=>[l(" A standard container ")]),example:i(()=>[t(g(bi),null,{default:i(()=>[Vw]),_:1})]),_:1}))}},Ow=S("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),jw=`<template>
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
</template>`,Gw={__name:"TextContainerDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Text Container",code:jw},{description:i(()=>[l(" A container can reduce its maximum width to more naturally accommodate a single column of text ")]),example:i(()=>[t(g(bi),{text:""},{default:i(()=>[t(g(fe),{as:"h2"},{default:i(()=>[l("Header")]),_:1}),Ow]),_:1})]),_:1}))}},qw=`<template>
  <SuiContainer textAlign="left">Left Aligned</SuiContainer>
  <SuiContainer textAlign="center">Center Aligned</SuiContainer>
  <SuiContainer textAlign="right">Right Aligned</SuiContainer>
</template>`,Uw={__name:"TextAlignmentDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Text Alignment",code:qw},{description:i(()=>[l(" A container can specify its text alignment ")]),example:i(()=>[t(g(bi),{textAlign:"left"},{default:i(()=>[l("Left Aligned")]),_:1}),t(g(bi),{textAlign:"center"},{default:i(()=>[l("Center Aligned")]),_:1}),t(g(bi),{textAlign:"right"},{default:i(()=>[l("Right Aligned")]),_:1})]),_:1}))}},Yw=S("p",null," Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today. ",-1),Jw=`<template>
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
</template>`,Ww={__name:"FluidDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Fluid",code:Jw},{description:i(()=>[l(" A fluid container has no maximum width ")]),example:i(()=>[t(g(bi),{fluid:""},{default:i(()=>[t(g(fe),{as:"h2"},{default:i(()=>[l("Dogs Roles with Humans")]),_:1}),Yw]),_:1})]),_:1}))}},Kw={__name:"Container",setup(e){const a=[{id:"container",label:"Container",category:"Types",component:Nw},{id:"text-container",label:"Text Container",category:"Types",component:Gw},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:Uw},{id:"fluid",label:"Fluid",category:"Variations",component:Ww}];return(n,o)=>(T(),I(Nt,{title:"Container",description:"A container limits content to a maximum width","component-docs":a}))}},Xw=`<template>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider />
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,Qw={__name:"DividerDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Divider",code:Xw},{description:i(()=>[l(" A standard divider ")]),example:i(()=>[t(g(Be),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(g(Xe)),t(g(Be),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},Zw=S("label",null,"Username",-1),eC=S("input",{type:"text",placeholder:"Username"},null,-1),tC=S("label",null,"Password",-1),iC=S("input",{type:"password",placeholder:"Password"},null,-1),aC=`<template>
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
</template>`,lC={__name:"VerticalDividerDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Vertical Divider",code:aC},{description:i(()=>[l(" A divider can segment content vertically. ")]),example:i(()=>[t(g(Ie),{placeholder:""},{default:i(()=>[t(g(ya),{columns:"equal"},{default:i(()=>[t(g(bt),null,{default:i(()=>[t(g(ql),null,{default:i(()=>[t(g(hi),null,{default:i(()=>[Zw,eC]),_:1}),t(g(hi),null,{default:i(()=>[tC,iC]),_:1}),t(g(P),{primary:""},{default:i(()=>[l("Login")]),_:1})]),_:1})]),_:1}),t(g(bt),{textAlign:"middle"},{default:i(()=>[t(g(P),{secondary:"",icon:"signup",content:"Sign Up"})]),_:1})]),_:1}),t(g(Xe),{vertical:""},{default:i(()=>[l("Or")]),_:1})]),_:1})]),_:1}))}},nC=`<template>
  <SuiSegment basic textAlign="center">
    <SuiInput icon="search" iconPosition="left" action="Search" placeholder="Order #" />
    <SuiDivider horizontal>Or</SuiDivider>
    <SuiButton labeled icon="add" color="green" content="Create New Order" />
  </SuiSegment>
</template>`,oC={__name:"HorizontalDividerDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Horizontal Divider",code:nC},{description:i(()=>[l(" A divider can segment content horizontally ")]),example:i(()=>[t(g(Ie),{basic:"",textAlign:"center"},{default:i(()=>[t(g(et),{icon:"search",iconPosition:"left",action:"Search",placeholder:"Order #"}),t(g(Xe),{horizontal:""},{default:i(()=>[l("Or")]),_:1}),t(g(P),{labeled:"",icon:"add",color:"green",content:"Create New Order"})]),_:1})]),_:1}))}},sC=`<template>
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
</template>`,rC={__name:"HorizontalAlignmentDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Horizontal Alignment",code:sC},{description:i(()=>[l(" A horizontal divider can be aligned ")]),example:i(()=>[t(g(Xe),{horizontal:"",textAlign:"left"},{default:i(()=>[t(g(Q),{name:"left align"}),l(" Left Aligned ")]),_:1}),t(g(Xe),{horizontal:"",textAlign:"center"},{default:i(()=>[t(g(Q),{name:"center align"}),l(" Center Aligned ")]),_:1}),t(g(Xe),{horizontal:"",textAlign:"right"},{default:i(()=>[t(g(Q),{name:"right align"}),l(" Right Aligned ")]),_:1})]),_:1}))}},uC=`<template>
  <SuiSegment inverted>
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider inverted />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider horizontal inverted>Horizontal</SuiDivider>
  </SuiSegment>
</template>`,cC={__name:"InvertedDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Inverted",code:uC},{description:i(()=>[l(" A divider can have its colors inverted ")]),example:i(()=>[t(g(Ie),{inverted:""},{default:i(()=>[t(g(Be),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(g(Xe),{inverted:""}),t(g(Be),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(g(Xe),{horizontal:"",inverted:""},{default:i(()=>[l("Horizontal")]),_:1})]),_:1})]),_:1}))}},dC=`<template>
  <SuiSegment>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
    <SuiDivider fitted />
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
  </SuiSegment>
</template>`,mC={__name:"FittedDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Inverted",code:dC},{description:i(()=>[l(" A divider can be fitted, without any space above or below it. ")]),example:i(()=>[t(g(Ie),null,{default:i(()=>[l(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),t(g(Xe),{fitted:""}),l(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. ")]),_:1})]),_:1}))}},pC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider hidden />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,fC={__name:"HiddenDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Hidden",code:pC},{description:i(()=>[l(" A hidden divider divides content without creating a dividing line ")]),example:i(()=>[t(g(fe),null,{default:i(()=>[l("Section One")]),_:1}),t(g(Be),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(g(Xe),{hidden:""}),t(g(fe),null,{default:i(()=>[l("Section Two")]),_:1}),t(g(Be),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},gC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider section />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,hC={__name:"SectionDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Section",code:gC},{description:i(()=>[l(" A divider can provide greater margins to divide sections of content ")]),example:i(()=>[t(g(fe),null,{default:i(()=>[l("Section One")]),_:1}),t(g(Be),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(g(Xe),{section:""}),t(g(fe),null,{default:i(()=>[l("Section Two")]),_:1}),t(g(Be),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},_C=`<template>
  <SuiSegment>
    <SuiHeader floated="right">Section One</SuiHeader>
    <SuiDivider clearing />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,bC={__name:"ClearingDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Clearing",code:_C},{description:i(()=>[l(" A divider can clear the contents above it ")]),example:i(()=>[t(g(Ie),null,{default:i(()=>[t(g(fe),{floated:"right"},{default:i(()=>[l("Section One")]),_:1}),t(g(Xe),{clearing:""}),t(g(Be),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},vC=`<template>
  <SuiDivider size="mini">MINI</SuiDivider>
  <SuiDivider size="tiny">TINY</SuiDivider>
  <SuiDivider size="small">SMALL</SuiDivider>
  <SuiDivider size="large">LARGE</SuiDivider>
  <SuiDivider size="big">BIG</SuiDivider>
  <SuiDivider size="huge">HUGE</SuiDivider>
  <SuiDivider size="massive">MASSIVE</SuiDivider>
</template>`,yC={__name:"SizeDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Size",code:vC},{description:i(()=>[l(" A divider text can vary in size ")]),example:i(()=>[t(g(Xe),{horizontal:"",size:"mini"},{default:i(()=>[l("MINI")]),_:1}),t(g(Xe),{horizontal:"",size:"tiny"},{default:i(()=>[l("TINY")]),_:1}),t(g(Xe),{horizontal:"",size:"small"},{default:i(()=>[l("SMALL")]),_:1}),t(g(Xe),{horizontal:"",size:"large"},{default:i(()=>[l("LARGE")]),_:1}),t(g(Xe),{horizontal:"",size:"big"},{default:i(()=>[l("BIG")]),_:1}),t(g(Xe),{horizontal:"",size:"huge"},{default:i(()=>[l("HUGE")]),_:1}),t(g(Xe),{horizontal:"",size:"massive"},{default:i(()=>[l("MASSIVE")]),_:1})]),_:1}))}},SC={__name:"Divider",setup(e){const a=[{id:"divider",label:"Divider",category:"Types",component:Qw},{id:"vertical-divider",label:"Vertical Divider",category:"Types",component:lC},{id:"horizontal-divider",label:"Horizontal Divider",category:"Types",component:oC},{id:"horizontal-alignment",label:"Horizontal Alignment",category:"Types",component:rC},{id:"inverted",label:"Inverted",category:"Variations",component:cC},{id:"fitted",label:"Fitted",category:"Variations",component:mC},{id:"hidden",label:"Hidden",category:"Variations",component:fC},{id:"section",label:"Section",category:"Variations",component:hC},{id:"clearing",label:"Clearing",category:"Variations",component:bC},{id:"size",label:"Size",category:"Variations",component:yC}];return(n,o)=>(T(),I(Nt,{title:"Divider",description:"A divider visually segments content into groups","component-docs":a}))}},wC=`<template>
  <SuiEmoji name="anguished" disabled />
</template>`,CC={__name:"DisabledDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Disabled",code:wC},{description:i(()=>[l(" An emoji can show that it is disabled ")]),example:i(()=>[t(g(St),{name:"anguished",disabled:""})]),_:1}))}},AC=`<template>
  <SuiEmoji name="angel" loading />
  <SuiEmoji name="blush" loading />
  <SuiEmoji name="grin" loading />
</template>`,kC={__name:"LoadingDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Loading",code:AC},{description:i(()=>[l(" An emoji can be used as a simple loader ")]),example:i(()=>[t(g(St),{name:"angel",loading:""}),t(g(St),{name:"blush",loading:""}),t(g(St),{name:"grin",loading:""})]),_:1}))}},xC=`<template>
  <SuiEmoji name="relaxed" size="small" />
  <SuiEmoji name="relaxed" size="medium" />
  <SuiEmoji name="relaxed" size="large" />
  <SuiEmoji name="relaxed" size="big" />
</template>`,$C={__name:"SizeDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Size",code:xC},{description:i(()=>[l(" An emoji can vary in size ")]),example:i(()=>[t(g(St),{name:"relaxed",size:"small"}),t(g(St),{name:"relaxed",size:"medium"}),t(g(St),{name:"relaxed",size:"large"}),t(g(St),{name:"relaxed",size:"big"})]),_:1}))}},BC=`<template>
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
</template>`,TC={__name:"AutosizingDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Autosizing",code:BC},{description:i(()=>[l(" If no specific size class is given, all emojis are automatically sized according to the current element font-size ")]),example:i(()=>[t(g(fe),{size:"small"},{default:i(()=>[l(" Within a Header "),t(g(St),{name:"relaxed"})]),_:1}),t(g(P),{as:"div",size:"large"},{default:i(()=>[l(" Within a Button "),t(g(St),{name:"relaxed"})]),_:1}),t(g(N),{size:"massive"},{default:i(()=>[l(" Within a Label "),t(g(St),{name:"relaxed"})]),_:1})]),_:1}))}},LC=`<template>
  <SuiEmoji link name="slight_smile" size="medium" />
</template>`,DC={__name:"LinkDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Link",code:LC},{description:i(()=>[l(" An emoji can be formatted as a link ")]),example:i(()=>[t(g(St),{link:"",name:"slight_smile",size:"medium"})]),_:1}))}},IC={__name:"Emoji",setup(e){const a=[{id:"disabled",label:"Disabled",category:"States",component:CC},{id:"loading",label:"Loading",category:"States",component:kC},{id:"size",label:"Size",category:"Variations",component:$C},{id:"autosizing",label:"Autosizing",category:"Variations",component:TC},{id:"link",label:"Link",category:"Variations",component:DC}];return(n,o)=>(T(),I(Nt,{title:"Emoji",description:"An emoji is a glyph used to represent an emotional state","component-docs":a}))}},EC=`<template>
  <SuiFlag name="de" size="small" />
  <SuiFlag name="fr" size="medium" />
  <SuiFlag name="li" size="large" />
  <SuiFlag name="jp" size="big" />
  <SuiFlag name="gb" size="huge" />
  <SuiFlag name="un" size="massive" />
</template>`,RC={__name:"SizeDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Size",code:EC},{description:i(()=>[l(" A flag can vary in size ")]),example:i(()=>[t(g(Ft),{name:"de",size:"small"}),t(g(Ft),{name:"fr",size:"medium"}),t(g(Ft),{name:"li",size:"large"}),t(g(Ft),{name:"jp",size:"big"}),t(g(Ft),{name:"gb",size:"huge"}),t(g(Ft),{name:"un",size:"massive"})]),_:1}))}},zC=`<template>
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
</template>`,PC={__name:"AutosizingDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Autosizing",code:zC},{description:i(()=>[l(" If no specific size class is given, all flags are automatically sized according to the current element font-size ")]),example:i(()=>[t(g(fe),{size:"small"},{default:i(()=>[l(" Within a Header "),t(g(Ft),{name:"us"})]),_:1}),t(g(P),{as:"div",size:"large"},{default:i(()=>[l(" Within a Button "),t(g(Ft),{name:"eu"})]),_:1}),t(g(N),{size:"massive"},{default:i(()=>[l(" Within a Label "),t(g(Ft),{name:"pirate"})]),_:1})]),_:1}))}},FC={__name:"Flag",setup(e){const a=[{id:"size",label:"Size",category:"Types",component:RC},{id:"autosizing",label:"Autosizing",category:"Types",component:PC}];return(n,o)=>(T(),I(Nt,{title:"Flag",description:"A flag is used to represent a political state","component-docs":a}))}},MC=`<template>
  <SuiHeader as="h1">First Header</SuiHeader>
  <SuiHeader as="h2">Second Header</SuiHeader>
  <SuiHeader as="h3">Third Header</SuiHeader>
  <SuiHeader as="h4">Fourth Header</SuiHeader>
  <SuiHeader as="h5">Fifth Header</SuiHeader>
</template>`,VC={__name:"PageHeadersDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Page Headers",code:MC},{description:i(()=>[l(" Headers may be oriented to give the hierarchy of a section in the context of the page ")]),example:i(()=>[t(g(fe),{as:"h1"},{default:i(()=>[l("First Header")]),_:1}),t(g(fe),{as:"h2"},{default:i(()=>[l("Second Header")]),_:1}),t(g(fe),{as:"h3"},{default:i(()=>[l("Third Header")]),_:1}),t(g(fe),{as:"h4"},{default:i(()=>[l("Fourth Header")]),_:1}),t(g(fe),{as:"h5"},{default:i(()=>[l("Fifth Header")]),_:1})]),_:1}))}},HC=`<template>
  <SuiHeader size="huge">Huge Header</SuiHeader>
  <SuiHeader size="large">Large Header</SuiHeader>
  <SuiHeader size="medium">Medium Header</SuiHeader>
  <SuiHeader size="small">Small Header</SuiHeader>
  <SuiHeader size="tiny">Tiny Header</SuiHeader>
</template>`,NC={__name:"ContentHeadersDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Content Headers",code:HC},{description:i(()=>[l(" Headers may be oriented to give the importance of a section in the context of the content that surrounds it ")]),example:i(()=>[t(g(fe),{size:"huge"},{default:i(()=>[l("Huge Header")]),_:1}),t(g(fe),{size:"large"},{default:i(()=>[l("Large Header")]),_:1}),t(g(fe),{size:"medium"},{default:i(()=>[l("Medium Header")]),_:1}),t(g(fe),{size:"small"},{default:i(()=>[l("Small Header")]),_:1}),t(g(fe),{size:"tiny"},{default:i(()=>[l("Tiny Header")]),_:1})]),_:1}))}},OC=`<template>
  <SuiHeader icon>
    <SuiIcon name="settings" />
    <SuiHeaderContent>
      Account Settings
    </SuiHeaderContent>
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,jC={__name:"IconHeadersDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Icon Headers",code:OC},{description:i(()=>[l(" A header can be formatted to emphasize an icon ")]),example:i(()=>[t(g(fe),{icon:""},{default:i(()=>[t(g(Q),{name:"settings"}),t(g(Gl),null,{default:i(()=>[l(" Account Settings ")]),_:1}),t(g(va),null,{default:i(()=>[l(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},GC=S("span",null,"$10.99",-1),qC=`<template>
  <SuiHeader sub>Price</SuiHeader>
  <span>$10.99</span>
</template>`,UC={__name:"SubHeadersDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Sub Headers",code:qC},{description:i(()=>[l(" Headers may be formatted to label smaller or de-emphasized content. ")]),example:i(()=>[t(g(fe),{sub:""},{default:i(()=>[l("Price")]),_:1}),GC]),_:1}))}},YC=`<template>
  <SuiHeader as="h2">
    <SuiImage src="/images/avatar/large/steve.jpg" avatar />
    Steve
  </SuiHeader>
</template>`,JC={__name:"ImageDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Image",code:YC},{description:i(()=>[l(" A header may contain an image ")]),example:i(()=>[t(g(fe),{as:"h2"},{default:i(()=>[t(g(Be),{src:"/vue-fomantic-ui/images/avatar/large/steve.jpg",avatar:""}),l(" Steve ")]),_:1})]),_:1}))}},WC=`<template>
  <SuiHeader as="h2">
    <SuiIcon name="plug" />
    <SuiHeaderContent>
      Uptime Guarantee
    </SuiHeaderContent>
  </SuiHeader>
</template>`,KC={__name:"IconDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Icon",code:WC},{description:i(()=>[l(" A header may contain an Icon ")]),example:i(()=>[t(g(fe),{as:"h2"},{default:i(()=>[t(g(Q),{name:"plug"}),t(g(Gl),null,{default:i(()=>[l(" Uptime Guarantee ")]),_:1})]),_:1})]),_:1}))}},XC=`<template>
  <SuiHeader as="h2">
    Account Settings
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,QC={__name:"SubheaderDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Subheader",code:XC},{description:i(()=>[l(" Headers may contain subheaders ")]),example:i(()=>[t(g(fe),{as:"h2"},{default:i(()=>[l(" Account Settings "),t(g(va),null,{default:i(()=>[l(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},ZC=`<template>
  <SuiHeader disabled>
    Disabled Header
  </SuiHeader>
</template>`,eA={__name:"DisabledDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Disabled",code:ZC},{description:i(()=>[l(" A header can show that it is inactive ")]),example:i(()=>[t(g(fe),{disabled:""},{default:i(()=>[l(" Disabled Header ")]),_:1})]),_:1}))}},tA=`<template>
  <SuiHeader as="h3" dividing>
    Dividing Header
  </SuiHeader>
</template>`,iA={__name:"DividingDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Dividing",code:tA},{description:i(()=>[l(" A header can be formatted to divide itself from the content below it ")]),example:i(()=>[t(g(fe),{as:"h3",dividing:""},{default:i(()=>[l(" Dividing Header ")]),_:1})]),_:1}))}},aA=`<template>
  <SuiHeader as="h3" block>
    Block Header
  </SuiHeader>
</template>`,lA={__name:"BlockDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Block",code:aA},{description:i(()=>[l(" A header can be formatted to appear inside a content block ")]),example:i(()=>[t(g(fe),{as:"h3",block:""},{default:i(()=>[l(" Block Header ")]),_:1})]),_:1}))}},nA=`<template>
  <SuiHeader as="h2" attached="top">
    Attached Header
  </SuiHeader>
  <SuiSegment attached>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </SuiSegment>
</template>`,oA={__name:"AttachedDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Attached",code:nA},{description:i(()=>[l(" A header can be attached to other content, like a segment ")]),example:i(()=>[t(g(fe),{as:"h2",attached:"top"},{default:i(()=>[l(" Attached Header ")]),_:1}),t(g(Ie),{attached:""},{default:i(()=>[l(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),_:1})]),_:1}))}},sA=`<template>
  <SuiSegment clearing>
    <SuiHeader as="h3" floated="right">
      Go Forward
    </SuiHeader>
    <SuiHeader as="h3" floated="left">
      Go Back
    </SuiHeader>
  </SuiSegment>
</template>`,rA={__name:"FloatingDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Floating",code:sA},{description:i(()=>[l(" A header can sit to the left or right of other content ")]),example:i(()=>[t(g(Ie),{clearing:""},{default:i(()=>[t(g(fe),{as:"h3",floated:"right"},{default:i(()=>[l(" Go Forward ")]),_:1}),t(g(fe),{as:"h3",floated:"left"},{default:i(()=>[l(" Go Back ")]),_:1})]),_:1})]),_:1}))}},uA=`<template>
  <SuiSegment>
    <SuiHeader as="h3" textAlign="right">Float Right</SuiHeader>
    <SuiHeader as="h3" textAlign="left">Float Left</SuiHeader>
    <SuiHeader as="h3" textAlign="justified">
      This text takes up the full width of the container
    </SuiHeader>
    <SuiHeader as="h3" textAlign="center">Centered</SuiHeader>
  </SuiSegment>
</template>`,cA={__name:"TextAlignmentDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Text Alignment",code:uA},{description:i(()=>[l(" A header can have its text aligned to a side ")]),example:i(()=>[t(g(Ie),null,{default:i(()=>[t(g(fe),{as:"h3",textAlign:"right"},{default:i(()=>[l("Float Right")]),_:1}),t(g(fe),{as:"h3",textAlign:"left"},{default:i(()=>[l("Float Left")]),_:1}),t(g(fe),{as:"h3",textAlign:"justified"},{default:i(()=>[l(" This text takes up the full width of the container ")]),_:1}),t(g(fe),{as:"h3",textAlign:"center"},{default:i(()=>[l("Centered")]),_:1})]),_:1})]),_:1}))}},dA=`<template>
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
</template>`,mA={__name:"ColoredDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Colored",code:dA},{description:i(()=>[l(" A header can be formatted with different colors ")]),example:i(()=>[t(g(fe),{as:"h4",primary:""},{default:i(()=>[l("Primary")]),_:1}),t(g(fe),{as:"h4",secondary:""},{default:i(()=>[l("Secondary")]),_:1}),t(g(fe),{as:"h4",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(g(fe),{as:"h4",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(g(fe),{as:"h4",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(g(fe),{as:"h4",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(g(fe),{as:"h4",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(g(fe),{as:"h4",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(g(fe),{as:"h4",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(g(fe),{as:"h4",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(g(fe),{as:"h4",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(g(fe),{as:"h4",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(g(fe),{as:"h4",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(g(fe),{as:"h4",color:"grey"},{default:i(()=>[l("Grey")]),_:1})]),_:1}))}},pA=`<template>
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
</template>`,fA={__name:"InvertedDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Colored",code:pA},{description:i(()=>[l(" A header can have its colors inverted for contrast ")]),example:i(()=>[t(g(Ie),{inverted:""},{default:i(()=>[t(g(fe),{as:"h4",inverted:"",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(g(fe),{as:"h4",inverted:"",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(g(fe),{as:"h4",inverted:"",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(g(fe),{as:"h4",inverted:"",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(g(fe),{as:"h4",inverted:"",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(g(fe),{as:"h4",inverted:"",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(g(fe),{as:"h4",inverted:"",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(g(fe),{as:"h4",inverted:"",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(g(fe),{as:"h4",inverted:"",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(g(fe),{as:"h4",inverted:"",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(g(fe),{as:"h4",inverted:"",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(g(fe),{as:"h4",inverted:"",color:"grey"},{default:i(()=>[l("Grey")]),_:1})]),_:1})]),_:1}))}},gA={__name:"Header",setup(e){const a=[{id:"page-headers",label:"Page Headers",category:"Types",component:VC},{id:"content-headers",label:"Content Headers",category:"Types",component:NC},{id:"icon-headers",label:"Icon Headers",category:"Types",component:jC},{id:"sub-headers",label:"Sub Headers",category:"Types",component:UC},{id:"image",label:"Image",category:"Content",component:JC},{id:"icon",label:"Icon",category:"Content",component:KC},{id:"subheader",label:"Subheader",category:"Content",component:QC},{id:"disabled",label:"Disabled",category:"States",component:eA},{id:"dividing",label:"Dividing",category:"Variations",component:iA},{id:"block",label:"Block",category:"Variations",component:lA},{id:"attached",label:"Attached",category:"Variations",component:oA},{id:"floating",label:"Floating",category:"Variations",component:rA},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:cA},{id:"colored",label:"Colored",category:"Variations",component:mA},{id:"inverted",label:"Inverted",category:"Variations",component:fA}];return(n,o)=>(T(),I(Nt,{title:"Header",description:"A header provides a short summary of content","component-docs":a}))}},hA=`<template>
  <SuiIcon name="users" disabled />
</template>`,_A={__name:"DisabledDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Disabled",code:hA},{description:i(()=>[l(" An icon can show that it is disabled ")]),example:i(()=>[t(g(Q),{name:"users",disabled:""})]),_:1}))}},bA=`<template>
  <SuiIcon name="spinner" loading />
  <SuiIcon name="notched circle" loading />
  <SuiIcon name="asterisk" loading />
</template>`,vA={__name:"LoadingDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Loading",code:bA},{description:i(()=>[l(" An icon can be used as a simple loader ")]),example:i(()=>[t(g(Q),{name:"spinner",loading:""}),t(g(Q),{name:"notched circle",loading:""}),t(g(Q),{name:"asterisk",loading:""})]),_:1}))}},yA=S("br",null,null,-1),SA=`<template>
  <div>
    This icon
    <SuiIcon name="help" fitted />
    is fitted.
    <br />
    This icon
    <SuiIcon name="help" />
    is not fitted.
  </div>
</template>`,wA={__name:"FittedDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Fitted",code:SA},{description:i(()=>[l(" An icon can be fitted, without any space to the left or right of it. ")]),example:i(()=>[S("div",null,[l(" This icon "),t(g(Q),{name:"help",fitted:""}),l(" is fitted. "),yA,l(" This icon "),t(g(Q),{name:"help"}),l(" is not fitted. ")])]),_:1}))}},CA=`<template>
  <SuiIcon name="home" size="mini" />
  <SuiIcon name="home" size="tiny" />
  <SuiIcon name="home" size="small" />
  <SuiIcon name="home" />
  <SuiIcon name="home" size="large" />
  <SuiIcon name="home" size="big" />
  <SuiIcon name="home" size="huge" />
  <SuiIcon name="home" size="massive" />
</template>`,AA={__name:"SizeDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Size",code:CA},{description:i(()=>[l(" An icon can vary in size ")]),example:i(()=>[t(g(Q),{name:"home",size:"mini"}),t(g(Q),{name:"home",size:"tiny"}),t(g(Q),{name:"home",size:"small"}),t(g(Q),{name:"home"}),t(g(Q),{name:"home",size:"large"}),t(g(Q),{name:"home",size:"big"}),t(g(Q),{name:"home",size:"huge"}),t(g(Q),{name:"home",size:"massive"})]),_:1}))}},kA=`<template>
  <SuiIcon name="close" link />
  <SuiIcon name="help" link />
</template>`,xA={__name:"LinkDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Link",code:kA},{description:i(()=>[l(" An icon can be formatted as a link ")]),example:i(()=>[t(g(Q),{name:"close",link:""}),t(g(Q),{name:"help",link:""})]),_:1}))}},$A=`<template>
  <SuiIcon name="cloud" flipped="horizontally" />
  <SuiIcon name="cloud" flipped="vertically" />
</template>`,BA={__name:"FlippedDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Flipped",code:$A},{description:i(()=>[l(" An icon can be flipped ")]),example:i(()=>[t(g(Q),{name:"cloud",flipped:"horizontally"}),t(g(Q),{name:"cloud",flipped:"vertically"})]),_:1}))}},TA=`<template>
  <SuiIcon name="cloud" rotated="clockwise" />
  <SuiIcon name="cloud" rotated="counterclockwise" />
</template>`,LA={__name:"RotatedDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Rotated",code:TA},{description:i(()=>[l(" An icon can be rotated ")]),example:i(()=>[t(g(Q),{name:"cloud",rotated:"clockwise"}),t(g(Q),{name:"cloud",rotated:"counterclockwise"})]),_:1}))}},DA=`<template>
  <SuiIcon name="users" circular />
  <SuiIcon name="users" circular color="teal" />
  <SuiIcon name="users" circular inverted />
  <SuiIcon name="users" circular inverted color="teal" />
</template>`,IA={__name:"CircularDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Circular",code:DA},{description:i(()=>[l(" An icon can be formatted to appear circular ")]),example:i(()=>[t(g(Q),{name:"users",circular:""}),t(g(Q),{name:"users",circular:"",color:"teal"}),t(g(Q),{name:"users",circular:"",inverted:""}),t(g(Q),{name:"users",circular:"",inverted:"",color:"teal"})]),_:1}))}},EA=`<template>
  <SuiIcon name="users" bordered />
  <SuiIcon name="users" bordered color="teal" />
  <SuiIcon name="users" bordered inverted color="black" />
  <SuiIcon name="users" bordered inverted color="teal" />
</template>`,RA={__name:"BorderedDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Bordered",code:EA},{description:i(()=>[l(" An icon can be formatted to appear bordered ")]),example:i(()=>[t(g(Q),{name:"users",bordered:""}),t(g(Q),{name:"users",bordered:"",color:"teal"}),t(g(Q),{name:"users",bordered:"",inverted:"",color:"black"}),t(g(Q),{name:"users",bordered:"",inverted:"",color:"teal"})]),_:1}))}},zA=`<template>
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
</template>`,PA={__name:"ColoredDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Colored",code:zA},{description:i(()=>[l(" An icon can be formatted with different colors ")]),example:i(()=>[t(g(Q),{name:"users",primary:""}),t(g(Q),{name:"users",secondary:""}),t(g(Q),{name:"users",color:"red"}),t(g(Q),{name:"users",color:"orange"}),t(g(Q),{name:"users",color:"yellow"}),t(g(Q),{name:"users",color:"olive"}),t(g(Q),{name:"users",color:"green"}),t(g(Q),{name:"users",color:"teal"}),t(g(Q),{name:"users",color:"blue"}),t(g(Q),{name:"users",color:"violet"}),t(g(Q),{name:"users",color:"purple"}),t(g(Q),{name:"users",color:"pink"}),t(g(Q),{name:"users",color:"brown"}),t(g(Q),{name:"users",color:"grey"}),t(g(Q),{name:"users",color:"black"})]),_:1}))}},FA=`<template>
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
</template>`,MA={__name:"InvertedDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Inverted",code:FA},{description:i(()=>[l(" An icon can have its colors inverted for contrast ")]),example:i(()=>[t(g(Q),{name:"users",inverted:""}),t(g(Q),{name:"users",inverted:"",primary:""}),t(g(Q),{name:"users",inverted:"",secondary:""}),t(g(Q),{name:"users",inverted:"",color:"red"}),t(g(Q),{name:"users",inverted:"",color:"orange"}),t(g(Q),{name:"users",inverted:"",color:"yellow"}),t(g(Q),{name:"users",inverted:"",color:"olive"}),t(g(Q),{name:"users",inverted:"",color:"green"}),t(g(Q),{name:"users",inverted:"",color:"teal"}),t(g(Q),{name:"users",inverted:"",color:"blue"}),t(g(Q),{name:"users",inverted:"",color:"violet"}),t(g(Q),{name:"users",inverted:"",color:"purple"}),t(g(Q),{name:"users",inverted:"",color:"pink"}),t(g(Q),{name:"users",inverted:"",color:"brown"}),t(g(Q),{name:"users",inverted:"",color:"grey"})]),_:1}))}},VA=`<template>
  <SuiIconGroup size="huge">
    <SuiIcon name="circle outline" size="big" />
    <SuiIcon name="user" />
  </SuiIconGroup>
  <SuiIconGroup size="huge">
    <SuiIcon name="dont" size="big" color="red" />
    <SuiIcon name="user" color="black" />
  </SuiIconGroup>
</template>`,HA={__name:"IconsDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Icons",code:VA},{description:i(()=>[l(" Several icons can be used together as a group ")]),example:i(()=>[t(g(gi),{size:"huge"},{default:i(()=>[t(g(Q),{name:"circle outline",size:"big"}),t(g(Q),{name:"user"})]),_:1}),t(g(gi),{size:"huge"},{default:i(()=>[t(g(Q),{name:"dont",size:"big",color:"red"}),t(g(Q),{name:"user",color:"black"})]),_:1})]),_:1}))}},NA=`<template>
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
</template>`,OA={__name:"CornerIconDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Corner Icon",code:NA},{description:i(()=>[l(" A group of icons can display a smaller corner icon ")]),example:i(()=>[t(g(gi),{size:"huge"},{default:i(()=>[t(g(Q),{name:"puzzle"}),t(g(Q),{name:"add",corner:"top left"})]),_:1}),t(g(gi),{size:"huge"},{default:i(()=>[t(g(Q),{name:"puzzle"}),t(g(Q),{name:"add",corner:"top right"})]),_:1}),t(g(gi),{size:"huge"},{default:i(()=>[t(g(Q),{name:"puzzle"}),t(g(Q),{name:"add",corner:"bottom left"})]),_:1}),t(g(gi),{size:"huge"},{default:i(()=>[t(g(Q),{name:"puzzle"}),t(g(Q),{name:"add",corner:"bottom right"})]),_:1})]),_:1}))}},jA={__name:"Icon",setup(e){const a=[{id:"disabled",label:"Disabled",category:"States",component:_A},{id:"loading",label:"Loading",category:"States",component:vA},{id:"fitted",label:"Fitted",category:"Variations",component:wA},{id:"size",label:"Size",category:"Variations",component:AA},{id:"link",label:"Link",category:"Variations",component:xA},{id:"flipped",label:"Flipped",category:"Variations",component:BA},{id:"rotated",label:"Rotated",category:"Variations",component:LA},{id:"circular",label:"Circular",category:"Variations",component:IA},{id:"bordered",label:"Bordered",category:"Variations",component:RA},{id:"colored",label:"Colored",category:"Variations",component:PA},{id:"inverted",label:"Inverted",category:"Variations",component:MA},{id:"icons",label:"Icons",category:"Groups",component:HA},{id:"corner-icon",label:"Corner Icon",category:"Groups",component:OA}];return(n,o)=>(T(),I(Nt,{title:"Icon",description:"An icon is a glyph used to represent something else","component-docs":a}))}},GA=E({name:"DocExample",components:{Prism:Mm},props:{title:String,description:String,code:String},setup(){const e=q(!1);return{active:e,toggle:()=>e.value=!e.value}}}),qA={class:"example"};function UA(e,a,n,o,r,c){const m=y("sui-header-subheader"),p=y("sui-header"),s=y("sui-grid-column"),u=y("sui-icon"),f=y("sui-grid-row"),d=y("prism"),h=y("sui-grid");return T(),ge("div",qA,[t(h,{columns:2},{default:i(()=>[t(f,null,{default:i(()=>[t(s,null,{default:i(()=>[t(p,{as:"h3"},{default:i(()=>[l(ke(e.title)+" ",1),t(m,null,{default:i(()=>[l(ke(e.description),1)]),_:1})]),_:1})]),_:1}),t(s,{textAlign:"right"},{default:i(()=>[t(u,{name:"code",color:"grey",onClick:e.toggle,link:""},null,8,["onClick"])]),_:1})]),_:1}),t(f,null,{default:i(()=>[t(s,{width:16},{default:i(()=>[fa(e.$slots,"default",{},void 0,!0)]),_:3}),e.active?(T(),I(s,{key:0,width:16},{default:i(()=>[t(d,{language:"markup"},{default:i(()=>[l(ke(e.code),1)]),_:1})]),_:1})):Ud("",!0)]),_:3})]),_:3})])}const He=we(GA,[["render",UA],["__scopeId","data-v-fcfb6a67"]]),ae="/vue-fomantic-ui/images/wireframe/image.png",xl="/vue-fomantic-ui/images/wireframe/image-text.png",Fa="/vue-fomantic-ui/images/wireframe/white-image.png",xt="/vue-fomantic-ui/images/wireframe/square-image.png",YA=E({name:"ImageDoc",components:{DocExample:He},setup(){return{imageCode:'<sui-image src="/images/image.png" size="small" />',imageLinkCode:`<sui-image
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
</sui-image-group>`}}}),JA={class:"intro"},WA=S("span",null,"Username",-1),KA=S("span",null,"Top Aligned",-1),XA=S("span",null,"Middle Aligned",-1),QA=S("span",null,"Bottom Aligned",-1),ZA=S("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),e0=S("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),t0=S("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),i0=S("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),a0=S("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),l0=S("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1);function n0(e,a,n,o,r,c){const m=y("sui-header-subheader"),p=y("sui-header"),s=y("sui-divider"),u=y("sui-icon"),f=y("sui-menu-item"),d=y("sui-menu"),h=y("sui-container"),v=y("sui-segment"),_=y("sui-image"),C=y("doc-example"),k=y("sui-image-group");return T(),ge("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",JA,[t(p,{as:"h1"},{default:i(()=>[l("Image "),t(m,null,{default:i(()=>[l(" An image is a graphic representation of something ")]),_:1})]),_:1}),t(s,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(C,{title:"Image",description:"An image",code:e.imageCode},{default:i(()=>[t(_,{src:ae,size:"small"})]),_:1},8,["code"]),t(C,{title:"Image Link",description:"An image can be formatted to link to other content",code:e.imageLinkCode},{default:i(()=>[t(_,{as:"a",size:"medium",src:xl,href:"https://google.com",target:"_blank"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(C,{title:"Hidden",description:"An image can be hidden",code:e.hiddenCode},{default:i(()=>[t(_,{hidden:"",src:ae,size:"small"})]),_:1},8,["code"]),t(C,{title:"Disabled",description:"An image can show that it is disabled and cannot be selected",code:e.disabledCode},{default:i(()=>[t(_,{disabled:"",src:ae,size:"small"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(C,{title:"Avatar",description:"An image may be formatted to appear inline with text as an avatar",code:e.avatarCode},{default:i(()=>[S("div",null,[t(_,{avatar:"",src:ae}),WA])]),_:1},8,["code"]),t(C,{title:"Bordered",description:"An image may include a border to emphasize the edges of white or transparent content",code:e.borderedCode},{default:i(()=>[t(_,{bordered:"",size:"medium",src:Fa})]),_:1},8,["code"]),t(C,{title:"Fluid",description:"An image can take up the width of its container",code:e.fluidCode},{default:i(()=>[t(_,{fluid:"",src:ae})]),_:1},8,["code"]),t(C,{title:"Rounded",description:"An image may appear rounded",code:e.roundedCode},{default:i(()=>[t(_,{rounded:"",size:"medium",src:ae})]),_:1},8,["code"]),t(C,{title:"Circular",description:"An image may appear circular",code:e.circularCode},{default:i(()=>[t(_,{circular:"",size:"medium",src:xt})]),_:1},8,["code"]),t(C,{title:"Vertically Aligned",description:"An image can specify its vertical alignment",code:e.verticallyAlignedCode},{default:i(()=>[S("div",null,[t(_,{verticalAlign:"top",size:"tiny",src:xt}),KA,t(s),t(_,{verticalAlign:"middle",size:"tiny",src:xt}),XA,t(s),t(_,{verticalAlign:"bottom",size:"tiny",src:xt}),QA])]),_:1},8,["code"]),t(C,{title:"Centered",description:"An image can appear centered in a content block",code:e.centeredCode},{default:i(()=>[t(v,null,{default:i(()=>[t(_,{centered:"",size:"medium",src:ae}),ZA,e0,t(_,{centered:"",size:"small",src:xl}),t0]),_:1})]),_:1},8,["code"]),t(C,{title:"Spaced",description:"An image can specify that it needs an additional spacing to separate it from nearby content",code:e.spacedCode},{default:i(()=>[t(v,null,{default:i(()=>[S("p",null,[l("Te eum doming eirmod, nominati pertinacia "),t(_,{spaced:"",size:"mini",src:ae}),l(" argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.")])]),_:1})]),_:1},8,["code"]),t(C,{title:"Floated",description:"An image can sit to the left or right of other content",code:e.floatedCode},{default:i(()=>[t(v,null,{default:i(()=>[t(_,{floated:"left",size:"small",src:xl}),i0,t(_,{floated:"right",size:"small",src:xl}),a0,l0]),_:1})]),_:1},8,["code"]),t(C,{title:"Size",description:"An image may appear at different sizes",code:e.sizeCode},{default:i(()=>[S("div",null,[t(_,{size:"mini",src:ae}),t(s,{hidden:""}),t(_,{size:"tiny",src:ae}),t(s,{hidden:""}),t(_,{size:"medium",src:ae}),t(s,{hidden:""}),t(_,{size:"large",src:ae})])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Groups")]),_:1}),t(C,{title:"Size",description:"A group of images can be formatted to have the same size",code:e.sizeGroupCode},{default:i(()=>[t(k,{size:"tiny"},{default:i(()=>[t(_,{src:ae}),t(_,{src:ae}),t(_,{src:ae}),t(_,{src:ae})]),_:1})]),_:1},8,["code"])]),_:1})])}const o0=we(YA,[["render",n0]]),s0=`<template>
  <SuiInput placeholder="Search..." />
</template>`,r0={__name:"InputDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Input",code:s0},{description:i(()=>[l(" A standard input ")]),example:i(()=>[t(g(et),{placeholder:"Search..."})]),_:1}))}},u0=`<template>
  <SuiInput focus placeholder="Search..." />
</template>`,c0={__name:"FocusDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Focus",code:u0},{description:i(()=>[l(" An input field can show a user is currently interacting with it ")]),example:i(()=>[t(g(et),{focus:"",placeholder:"Search..."})]),_:1}))}},d0=`<template>
  <SuiInput loading icon="user" placeholder="Search..." />
  <SuiInput loading icon="user" iconPosition="left" placeholder="Search..." />
</template>`,m0={__name:"LoadingDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Loading",code:d0},{description:i(()=>[l(" An icon input field can show that it is currently loading data ")]),example:i(()=>[t(g(et),{loading:"",icon:"user",placeholder:"Search..."}),t(g(et),{loading:"",icon:"user",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},p0=`<template>
  <SuiInput disabled placeholder="Search..." />
</template>`,f0={__name:"DisabledDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Disabled",code:p0},{description:i(()=>[l(" An input field can show that it is disabled ")]),example:i(()=>[t(g(et),{disabled:"",placeholder:"Search..."})]),_:1}))}},g0=`<template>
  <SuiInput error placeholder="Search..." />
</template>`,h0={__name:"ErrorDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Error",code:g0},{description:i(()=>[l(" An input field can show the data contains errors ")]),example:i(()=>[t(g(et),{error:"",placeholder:"Search..."})]),_:1}))}},_0=`<template>
  <SuiInput icon="search" placeholder="Search..." />
  <SuiInput icon="users" iconPosition="left" placeholder="Search..." />
</template>`,b0={__name:"IconDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Icon",code:_0},{description:i(()=>[l(" An input can be formatted with an icon ")]),example:i(()=>[t(g(et),{icon:"search",placeholder:"Search..."}),t(g(et),{icon:"users",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},v0=`<template>
  <SuiInput label="http://" placeholder="mysite.com" />
</template>`,y0={__name:"LabeledDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Labeled",code:v0},{description:i(()=>[l(" An input can be formatted with a label ")]),example:i(()=>[t(g(et),{label:"http://",placeholder:"mysite.com"})]),_:1}))}},S0=`<template>
  <SuiInput action="Search" />
</template>`,w0={__name:"ActionDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Action",code:S0},{description:i(()=>[l(" An input can be formatted to alert the user to an action they may perform ")]),example:i(()=>[t(g(et),{action:"Search"})]),_:1}))}},C0=`<template>
  <SuiInput transparent icon="search" placeholder="Search..." />
</template>`,A0={__name:"TransparentDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Transparent",code:C0},{description:i(()=>[l(" A transparent input has no background ")]),example:i(()=>[t(g(et),{transparent:"",icon:"search",placeholder:"Search..."})]),_:1}))}},k0=`<template>
  <SuiSegment inverted>
    <SuiInput inverted placeholder="Search..." />
  </SuiSegment>
</template>`,x0={__name:"InvertedDoc",setup(e){return(a,n)=>{const o=y("SuiSegment");return T(),I(M,{label:"Inverted",code:k0},{description:i(()=>[l(" An input can be formatted to appear on dark backgrounds ")]),example:i(()=>[t(o,{inverted:""},{default:i(()=>[t(g(et),{inverted:"",placeholder:"Search..."})]),_:1})]),_:1})}}},$0=`<template>
  <SuiInput fluid icon="search" placeholder="Search..." />
</template>`,B0={__name:"FluidDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Fluid",code:$0},{description:i(()=>[l(" An input can take the size of its container ")]),example:i(()=>[t(g(et),{fluid:"",icon:"search",placeholder:"Search..."})]),_:1}))}},T0=`<template>
  <SuiInput icon="search" placeholder="Search mini..." size="mini" />
  <SuiInput icon="search" placeholder="Search small..." size="small" />
  <SuiInput icon="search" placeholder="Search large..." size="large" />
  <SuiInput icon="search" placeholder="Search big..." size="big" />
  <SuiInput icon="search" placeholder="Search huge..." size="huge" />
  <SuiInput icon="search" placeholder="Search massive..." size="massive" />
</template>`,L0={__name:"SizeDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Size",code:T0},{description:i(()=>[l(" An input can vary in size ")]),example:i(()=>[t(g(et),{icon:"search",placeholder:"Search mini...",size:"mini"}),t(g(et),{icon:"search",placeholder:"Search small...",size:"small"}),t(g(et),{icon:"search",placeholder:"Search large...",size:"large"}),t(g(et),{icon:"search",placeholder:"Search big...",size:"big"}),t(g(et),{icon:"search",placeholder:"Search huge...",size:"huge"}),t(g(et),{icon:"search",placeholder:"Search massive...",size:"massive"})]),_:1}))}},D0={__name:"Input",setup(e){const a=[{id:"input",label:"Input",category:"Types",component:r0},{id:"focus",label:"Focus",category:"States",component:c0},{id:"loading",label:"Loading",category:"States",component:m0},{id:"disabled",label:"Disabled",category:"States",component:f0},{id:"error",label:"Error",category:"States",component:h0},{id:"icon",label:"Icon",category:"Variations",component:b0},{id:"labeled",label:"Labeled",category:"Variations",component:y0},{id:"action",label:"Action",category:"Variations",component:w0},{id:"transparent",label:"Transparent",category:"Variations",component:A0},{id:"inverted",label:"Inverted",category:"Variations",component:x0},{id:"fluid",label:"Fluid",category:"Variations",component:B0},{id:"size",label:"Size",category:"Variations",component:L0}];return(n,o)=>(T(),I(Nt,{title:"Input",description:"An input is a field used to elicit a response from a user","component-docs":a}))}},I0=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
</template>`,E0={__name:"LabelDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Label",code:I0},{description:i(()=>[l(" A label ")]),example:i(()=>[t(g(N),null,{default:i(()=>[t(g(Q),{name:"mail"}),l(" 23 ")]),_:1})]),_:1}))}},Fo="/vue-fomantic-ui/images/avatar/small/joe.jpg",cp="/vue-fomantic-ui/images/avatar/small/veronika.jpg",ei="/vue-fomantic-ui/images/avatar/small/elliot.jpg",R0=S("img",{src:Fo},null,-1),z0=S("img",{src:cp},null,-1),P0=S("img",{src:ei},null,-1),F0=`<template>
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
</template>`,M0={__name:"ImageDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Image",code:F0},{description:i(()=>[l(" A label can be formatted to emphasize an image ")]),example:i(()=>[t(g(N),{as:"a",image:""},{default:i(()=>[R0,l(" Joe ")]),_:1}),t(g(N),{as:"a",image:"",color:"blue"},{default:i(()=>[z0,l(" Veronika "),t(g(Ni),null,{default:i(()=>[l("Friend")]),_:1})]),_:1}),t(g(N),{as:"a",image:""},{default:i(()=>[P0,l(" Elliot "),t(g(Q),{name:"delete"})]),_:1})]),_:1}))}},V0=S("input",{type:"text",placeholder:"First Name"},null,-1),H0=S("input",{type:"text"},null,-1),N0=S("input",{type:"text",placeholder:"Username"},null,-1),O0=S("input",{type:"password"},null,-1),j0=`<template>
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
</template>`,G0={__name:"PointingDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Pointing",code:j0},{description:i(()=>[l(" A label can point to content next to it ")]),example:i(()=>[t(g(ql),{fluid:""},{default:i(()=>[t(g(hi),null,{default:i(()=>[V0,t(g(N),{pointing:""},{default:i(()=>[l("Please enter a value")]),_:1})]),_:1}),t(g(Xe)),t(g(hi),null,{default:i(()=>[t(g(N),{pointing:"below"},{default:i(()=>[l("Please enter a value")]),_:1}),H0]),_:1}),t(g(Xe)),t(g(hi),{inline:""},{default:i(()=>[N0,t(g(N),{pointing:"left",color:"red",basic:""},{default:i(()=>[l("That name is taken!")]),_:1})]),_:1}),t(g(Xe)),t(g(hi),{inline:""},{default:i(()=>[t(g(N),{pointing:"right",color:"red",basic:""},{default:i(()=>[l("Your password must be 6 characters or more")]),_:1}),O0]),_:1})]),_:1})]),_:1}))}},q0=`<template>
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
</template>`,U0={__name:"CornerDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Corner",code:q0},{description:i(()=>[l(" A label can position itself in the corner of an element ")]),example:i(()=>[t(g(ya),{columns:2},{default:i(()=>[t(g(bt),null,{default:i(()=>[t(g(Be),{label:{as:"a",corner:"left",icon:"heart"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(g(bt),null,{default:i(()=>[t(g(Be),{label:{as:"a",color:"red",corner:"right",icon:"save"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1})]),_:1}))}},Y0=`<template>
  <SuiLabel as="a" tag>New</SuiLabel>
  <SuiLabel as="a" tag color="red">Upcoming</SuiLabel>
  <SuiLabel as="a" tag color="teal">Featured</SuiLabel>
</template>`,J0={__name:"TagDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Tag",code:Y0},{description:i(()=>[l(" A label can appear as a tag ")]),example:i(()=>[t(g(N),{as:"a",tag:""},{default:i(()=>[l("New")]),_:1}),t(g(N),{as:"a",tag:"",color:"red"},{default:i(()=>[l("Upcoming")]),_:1}),t(g(N),{as:"a",tag:"",color:"teal"},{default:i(()=>[l("Featured")]),_:1})]),_:1}))}},W0=S("span",null,"Account Details",-1),K0=S("span",null,"User Reviews",-1),X0=S("span",null,"Technical Specifications",-1),Q0=S("span",null,"User Reviews",-1),Z0=`<template>
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
</template>`,ek={__name:"RibbonDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Ribbon",code:Z0},{description:i(()=>[l(" A label can appear as a ribbon attaching itself to an element. ")]),example:i(()=>[t(g(ya),{columns:2},{default:i(()=>[t(g(bt),null,{default:i(()=>[t(g(Ie),{raised:""},{default:i(()=>[t(g(N),{as:"a",ribbon:"",color:"red"},{default:i(()=>[l("Overview")]),_:1}),W0,t(g(Be),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),t(g(N),{as:"a",ribbon:"",color:"blue"},{default:i(()=>[l("Community")]),_:1}),K0,t(g(Be),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(g(bt),null,{default:i(()=>[t(g(Ie),{raised:""},{default:i(()=>[t(g(N),{as:"a",ribbon:"right",color:"orange"},{default:i(()=>[l("Specs")]),_:1}),X0,t(g(Be),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),t(g(N),{as:"a",ribbon:"right",color:"teal"},{default:i(()=>[l("Reviews")]),_:1}),Q0,t(g(Be),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1}))}},tk=`<template>
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
</template>`,ik={__name:"AttachedDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Attached",code:tk},{description:i(()=>[l(" A label can attach to a content segment ")]),example:i(()=>[t(g(ya),{columns:3},{default:i(()=>[t(g(Ul),null,{default:i(()=>[t(g(bt),null,{default:i(()=>[t(g(Ie),{padded:""},{default:i(()=>[t(g(N),{attached:"top"},{default:i(()=>[l("HTML")]),_:1}),t(g(Be),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(g(bt),null,{default:i(()=>[t(g(Ie),{padded:""},{default:i(()=>[t(g(N),{attached:"bottom"},{default:i(()=>[l("CSS")]),_:1}),t(g(Be),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(g(bt),null,{default:i(()=>[t(g(Ie),{padded:""},{default:i(()=>[t(g(N),{attached:"top right"},{default:i(()=>[l("Code")]),_:1}),t(g(Be),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1}),t(g(Ul),null,{default:i(()=>[t(g(bt),null,{default:i(()=>[t(g(Ie),{padded:""},{default:i(()=>[t(g(N),{attached:"top left"},{default:i(()=>[l("View")]),_:1}),t(g(Be),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(g(bt),null,{default:i(()=>[t(g(Ie),{padded:""},{default:i(()=>[t(g(N),{attached:"bottom left"},{default:i(()=>[l("User View")]),_:1}),t(g(Be),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(g(bt),null,{default:i(()=>[t(g(Ie),{padded:""},{default:i(()=>[t(g(N),{attached:"bottom right"},{default:i(()=>[l("Admin View")]),_:1}),t(g(Be),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},ak=`<template>
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
</template>`,lk={__name:"HorizontalDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Horizontal",code:ak},{description:i(()=>[l(" A horizontal label is formatted to label content along-side it horizontally ")]),example:i(()=>[t(g(Co),{divided:"",selection:""},{default:i(()=>[t(g(Zi),null,{default:i(()=>[t(g(N),{color:"red",horizontal:""},{default:i(()=>[l("Fruit")]),_:1}),l(" Kumquats ")]),_:1}),t(g(Zi),null,{default:i(()=>[t(g(N),{color:"purple",horizontal:""},{default:i(()=>[l("Candy")]),_:1}),l(" Ice Cream ")]),_:1}),t(g(Zi),null,{default:i(()=>[t(g(N),{color:"red",horizontal:""},{default:i(()=>[l("Fruit")]),_:1}),l(" Orange ")]),_:1}),t(g(Zi),null,{default:i(()=>[t(g(N),{horizontal:""},{default:i(()=>[l("Dog")]),_:1}),l(" Poodle ")]),_:1})]),_:1})]),_:1}))}},nk=`<template>
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
</template>`,ok={__name:"FloatingDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Floating",code:nk},{description:i(()=>[l(" A label can float above or below another element ")]),example:i(()=>[t(g(xo),{compact:""},{default:i(()=>[t(g(Yl),null,{default:i(()=>[t(g(Q),{name:"mail"}),l(" Messages "),t(g(N),{floating:"",color:"red"},{default:i(()=>[l("22")]),_:1})]),_:1}),t(g(Yl),null,{default:i(()=>[t(g(Q),{name:"users"}),l(" Friends "),t(g(N),{floating:"",color:"teal"},{default:i(()=>[l("22")]),_:1})]),_:1})]),_:1})]),_:1}))}},sk=`<template>
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
</template>`,rk={__name:"InvertedDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Inverted",code:sk},{description:i(()=>[l(" All Variants of Label can be inverted ")]),example:i(()=>[t(g(Ie),{inverted:""},{default:i(()=>[t(g(N),{as:"a",inverted:"",primary:""},{default:i(()=>[l("Primary")]),_:1}),t(g(N),{as:"a",inverted:"",secondary:""},{default:i(()=>[l("Secondary")]),_:1}),t(g(N),{as:"a",inverted:"",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(g(N),{as:"a",inverted:"",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(g(N),{as:"a",inverted:"",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(g(N),{as:"a",basic:"",inverted:"",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(g(N),{as:"a",basic:"",inverted:"",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(g(N),{as:"a",basic:"",inverted:"",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(g(N),{as:"a",basic:"",inverted:"",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(g(N),{as:"a",basic:"",inverted:"",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(g(N),{as:"a",tag:"",inverted:"",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(g(N),{as:"a",tag:"",inverted:"",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(g(N),{as:"a",tag:"",inverted:"",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(g(N),{as:"a",tag:"",inverted:"",color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(g(N),{as:"a",tag:"",inverted:"",color:"black"},{default:i(()=>[l("Black")]),_:1})]),_:1})]),_:1}))}},uk=`<template>
  <SuiLabel>
    Dogs
    <SuiLabelDetail>214</SuiLabelDetail>
  </SuiLabel>
</template>`,ck={__name:"DetailDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Detail",code:uk},{description:i(()=>[l(" A label can contain a detail ")]),example:i(()=>[t(g(N),null,{default:i(()=>[l(" Dogs "),t(g(Ni),null,{default:i(()=>[l("214")]),_:1})]),_:1})]),_:1}))}},dk=`<template>
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
</template>`,mk={__name:"IconDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Icon",code:dk},{description:i(()=>[l(" A label can include an icon ")]),example:i(()=>[t(g(N),null,{default:i(()=>[t(g(Q),{name:"mail"}),l(" Mail ")]),_:1}),t(g(N),null,{default:i(()=>[t(g(Q),{name:"checkmark"}),l(" Test Passed ")]),_:1}),t(g(N),{icon:"dog"}),t(g(N),{icon:"cat"})]),_:1}))}},pk=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
    <SuiLabelContent>View Mail</SuiLabelContent>
  </SuiLabel>
</template>`,fk={__name:"LinkDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Link",code:pk},{description:i(()=>[l(" A label can be a link or contain an item that links ")]),example:i(()=>[t(g(N),{as:"a"},{default:i(()=>[t(g(Q),{name:"mail"}),l(" 23 ")]),_:1}),t(g(N),null,{default:i(()=>[t(g(Q),{name:"mail"}),l(" 23 "),t(g(Ni),null,{default:i(()=>[l("View Mail")]),_:1})]),_:1})]),_:1}))}},gk=`<template>
  <SuiLabel disabled>Disabled Label</SuiLabel>
</template>`,hk={__name:"DisabledDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Disabled",code:gk},{description:i(()=>[l(" A label can show it is currently unable to be interacted with ")]),example:i(()=>[t(g(N),{disabled:""},{default:i(()=>[l("Disabled Label")]),_:1})]),_:1}))}},_k=`<template>
  <SuiLabel fluid>Fits container</SuiLabel>
</template>`,bk={__name:"FluidDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Fluid",code:_k},{description:i(()=>[l(" A label can take the width of its container ")]),example:i(()=>[t(g(N),{fluid:""},{default:i(()=>[l("Fits container")]),_:1})]),_:1}))}},vk=`<template>
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
</template>`,yk={__name:"CircularDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Circular",code:vk},{description:i(()=>[l(" A label can be circular ")]),example:i(()=>[t(g(N),{circular:"",color:"red"},{default:i(()=>[l("2")]),_:1}),t(g(N),{circular:"",color:"orange"},{default:i(()=>[l("2")]),_:1}),t(g(N),{circular:"",color:"yellow"},{default:i(()=>[l("2")]),_:1}),t(g(N),{circular:"",color:"olive"},{default:i(()=>[l("2")]),_:1}),t(g(N),{circular:"",color:"green"},{default:i(()=>[l("2")]),_:1}),t(g(N),{circular:"",color:"teal"},{default:i(()=>[l("2")]),_:1}),t(g(N),{circular:"",color:"blue"},{default:i(()=>[l("2")]),_:1}),t(g(N),{circular:"",color:"violet"},{default:i(()=>[l("2")]),_:1}),t(g(N),{circular:"",color:"purple"},{default:i(()=>[l("2")]),_:1}),t(g(N),{circular:"",color:"pink"},{default:i(()=>[l("2")]),_:1}),t(g(N),{circular:"",color:"brown"},{default:i(()=>[l("2")]),_:1}),t(g(N),{circular:"",color:"grey"},{default:i(()=>[l("2")]),_:1}),t(g(N),{circular:"",color:"black"},{default:i(()=>[l("2")]),_:1})]),_:1}))}},Sk=S("img",{src:ei},null,-1),wk=`<template>
  <SuiLabel as="a" basic>Basic</SuiLabel>
  <SuiLabel as="a" basic pointing>Pointing</SuiLabel>
  <SuiLabel as="a" basic image>
    <img src="/images/avatar/small/elliot.jpg" />
    Elliot
  </SuiLabel>
  <SuiLabel as="a" basic pointing color="red">Red Pointing</SuiLabel>
  <SuiLabel as="a" basic color="blue">Blue</SuiLabel>
</template>`,Ck={__name:"BasicDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Basic",code:wk},{description:i(()=>[l(" A label can reduce its complexity ")]),example:i(()=>[t(g(N),{as:"a",basic:""},{default:i(()=>[l("Basic")]),_:1}),t(g(N),{as:"a",basic:"",pointing:""},{default:i(()=>[l("Pointing")]),_:1}),t(g(N),{as:"a",basic:"",image:""},{default:i(()=>[Sk,l(" Elliot ")]),_:1}),t(g(N),{as:"a",basic:"",pointing:"",color:"red"},{default:i(()=>[l("Red Pointing")]),_:1}),t(g(N),{as:"a",basic:"",color:"blue"},{default:i(()=>[l("Blue")]),_:1})]),_:1}))}},Ak=`<template>
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
</template>`,kk={__name:"ColoredDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Colored",code:Ak},{description:i(()=>[l(" A label can have different colors ")]),example:i(()=>[t(g(N),{as:"a",primary:""},{default:i(()=>[l("Primary")]),_:1}),t(g(N),{as:"a",secondary:""},{default:i(()=>[l("Secondary")]),_:1}),t(g(N),{as:"a",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(g(N),{as:"a",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(g(N),{as:"a",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(g(N),{as:"a",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(g(N),{as:"a",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(g(N),{as:"a",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(g(N),{as:"a",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(g(N),{as:"a",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(g(N),{as:"a",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(g(N),{as:"a",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(g(N),{as:"a",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(g(N),{as:"a",color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(g(N),{as:"a",color:"black"},{default:i(()=>[l("Black")]),_:1})]),_:1}))}},xk=`<template>
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
</template>`,$k={__name:"BasicTagDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Basic Tag",code:xk},{description:i(()=>[]),example:i(()=>[t(g(N),{as:"a",basic:"",tag:"",primary:""},{default:i(()=>[l("Primary")]),_:1}),t(g(N),{as:"a",basic:"",tag:"",secondary:""},{default:i(()=>[l("Secondary")]),_:1}),t(g(N),{as:"a",basic:"",tag:"",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(g(N),{as:"a",basic:"",tag:"",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(g(N),{as:"a",basic:"",tag:"",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(g(N),{as:"a",basic:"",tag:"",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(g(N),{as:"a",basic:"",tag:"",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(g(N),{as:"a",basic:"",tag:"",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(g(N),{as:"a",basic:"",tag:"",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(g(N),{as:"a",basic:"",tag:"",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(g(N),{as:"a",basic:"",tag:"",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(g(N),{as:"a",basic:"",tag:"",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(g(N),{as:"a",basic:"",tag:"",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(g(N),{as:"a",basic:"",tag:"",color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(g(N),{as:"a",basic:"",tag:"",color:"black"},{default:i(()=>[l("Black")]),_:1})]),_:1}))}},Bk=`<template>
  <SuiLabel size="mini">Mini</SuiLabel>
  <SuiLabel size="tiny">Tiny</SuiLabel>
  <SuiLabel size="small">Small</SuiLabel>
  <SuiLabel>Medium</SuiLabel>
  <SuiLabel size="large">Large</SuiLabel>
  <SuiLabel size="big">Big</SuiLabel>
  <SuiLabel size="huge">Huge</SuiLabel>
  <SuiLabel size="massive">Massive</SuiLabel>
</template>`,Tk={__name:"SizeDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Size",code:Bk},{description:i(()=>[l(" A label can be small or large ")]),example:i(()=>[t(g(N),{size:"mini"},{default:i(()=>[l("Mini")]),_:1}),t(g(N),{size:"tiny"},{default:i(()=>[l("Tiny")]),_:1}),t(g(N),{size:"small"},{default:i(()=>[l("Small")]),_:1}),t(g(N),null,{default:i(()=>[l("Medium")]),_:1}),t(g(N),{size:"large"},{default:i(()=>[l("Large")]),_:1}),t(g(N),{size:"big"},{default:i(()=>[l("Big")]),_:1}),t(g(N),{size:"huge"},{default:i(()=>[l("Huge")]),_:1}),t(g(N),{size:"massive"},{default:i(()=>[l("Massive")]),_:1})]),_:1}))}},Lk=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,Dk={__name:"GroupSizeDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Group Size",code:Lk},{description:i(()=>[l(" Labels can share sizes together ")]),example:i(()=>[t(g(Oi),{size:"huge"},{default:i(()=>[t(g(N),null,{default:i(()=>[l("Fun")]),_:1}),t(g(N),null,{default:i(()=>[l("Happy")]),_:1}),t(g(N),null,{default:i(()=>[l("Smart")]),_:1}),t(g(N),null,{default:i(()=>[l("Witty")]),_:1})]),_:1})]),_:1}))}},Ik=`<template>
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
</template>`,Ek={__name:"ColoredGroupDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Clored Group",code:Ik},{description:i(()=>[l(" Labels can share colors together ")]),example:i(()=>[t(g(Oi),{color:"blue"},{default:i(()=>[t(g(N),null,{default:i(()=>[l(" Fun "),t(g(Q),{name:"close"})]),_:1}),t(g(N),null,{default:i(()=>[l(" Happy "),t(g(Ni),null,{default:i(()=>[l("Smart")]),_:1})]),_:1}),t(g(N),null,{default:i(()=>[l("Insane")]),_:1}),t(g(N),null,{default:i(()=>[l("Exciting")]),_:1})]),_:1})]),_:1}))}},Rk=`<template>
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
</template>`,zk={__name:"BasicGroupDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Basic Group",code:Rk},{description:i(()=>[l(" Labels can share their style together ")]),example:i(()=>[t(g(Oi),{basic:""},{default:i(()=>[t(g(N),null,{default:i(()=>[l(" Fun "),t(g(Q),{name:"close"})]),_:1}),t(g(N),null,{default:i(()=>[l(" Happy "),t(g(Ni),null,{default:i(()=>[l("Smart")]),_:1})]),_:1}),t(g(N),null,{default:i(()=>[l("Insane")]),_:1}),t(g(N),null,{default:i(()=>[l("Exciting")]),_:1})]),_:1})]),_:1}))}},Pk=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,Fk={__name:"TagGroupDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Tag Group",code:Pk},{description:i(()=>[l(" Labels can share tag formatting ")]),example:i(()=>[t(g(Oi),{tag:""},{default:i(()=>[t(g(N),{as:"a"},{default:i(()=>[l("$10.00")]),_:1}),t(g(N),{as:"a"},{default:i(()=>[l("$19.99")]),_:1}),t(g(N),{as:"a"},{default:i(()=>[l("$24.99")]),_:1}),t(g(N),{as:"a"},{default:i(()=>[l("$10.25")]),_:1})]),_:1})]),_:1}))}},Mk=`<template>
  <SuiLabelGroup tag>
    <SuiLabel as="a">1</SuiLabel>
    <SuiLabel as="a">3</SuiLabel>
    <SuiLabel as="a">4</SuiLabel>
    <SuiLabel as="a">14</SuiLabel>
    <SuiLabel as="a">16</SuiLabel>
    <SuiLabel as="a">34</SuiLabel>
  </SuiLabelGroup>
</template>`,Vk={__name:"CircularGroupDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Circular Group",code:Mk},{description:i(()=>[l(" Labels can share shapes ")]),example:i(()=>[t(g(Oi),{circular:""},{default:i(()=>[t(g(N),{as:"a"},{default:i(()=>[l("1")]),_:1}),t(g(N),{as:"a"},{default:i(()=>[l("3")]),_:1}),t(g(N),{as:"a"},{default:i(()=>[l("4")]),_:1}),t(g(N),{as:"a"},{default:i(()=>[l("14")]),_:1}),t(g(N),{as:"a"},{default:i(()=>[l("16")]),_:1}),t(g(N),{as:"a"},{default:i(()=>[l("34")]),_:1})]),_:1})]),_:1}))}},Hk={__name:"Label",setup(e){const a=[{id:"label",label:"Label",category:"Types",component:E0},{id:"image",label:"Image",category:"Types",component:M0},{id:"pointing",label:"Pointing",category:"Types",component:G0},{id:"corner",label:"Corner",category:"Types",component:U0},{id:"tag",label:"Tag",category:"Types",component:J0},{id:"ribbon",label:"Ribbon",category:"Types",component:ek},{id:"attached",label:"Attached",category:"Types",component:ik},{id:"horizontal",label:"Horizontal",category:"Types",component:lk},{id:"floating",label:"Floating",category:"Types",component:ok},{id:"inverted",label:"Inverted",category:"Types",component:rk},{id:"detail",label:"Detail",category:"Content",component:ck},{id:"icon",label:"Icon",category:"Content",component:mk},{id:"link",label:"Link",category:"Content",component:fk},{id:"disabled",label:"Disabled",category:"States",component:hk},{id:"fluid",label:"Fluid",category:"Variations",component:bk},{id:"circular",label:"Circular",category:"Variations",component:yk},{id:"basic",label:"Basic",category:"Variations",component:Ck},{id:"colored",label:"Colored",category:"Variations",component:kk},{id:"basic-tag",label:"Basic Tag",category:"Variations",component:$k},{id:"size",label:"Size",category:"Variations",component:Tk},{id:"group-size",label:"Group Size",category:"Groups",component:Dk},{id:"colored-group",label:"Colored Group",category:"Groups",component:Ek},{id:"basic-group",label:"Basic Group",category:"Groups",component:zk},{id:"tag-group",label:"Tag Group",category:"Groups",component:Fk},{id:"circular-group",label:"Circular Group",category:"Groups",component:Vk}];return(n,o)=>(T(),I(Nt,{title:"Label",description:"A label displays content classification","component-docs":a}))}},Nk="/vue-fomantic-ui/images/avatar/small/rachel.png",Ok="/vue-fomantic-ui/images/avatar/small/lindsay.png",jk="/vue-fomantic-ui/images/avatar/small/matthew.png",Cn="/vue-fomantic-ui/images/avatar/small/jenny.jpg",Gk="/vue-fomantic-ui/images/avatar/small/tom.jpg",$l="/vue-fomantic-ui/images/avatar/small/christian.jpg",An="/vue-fomantic-ui/images/avatar/small/matt.jpg",Ma="/vue-fomantic-ui/images/avatar/small/helen.jpg",Bi="/vue-fomantic-ui/images/avatar/small/daniel.jpg",Mo="/vue-fomantic-ui/images/avatar/small/stevie.jpg",qk=E({name:"ListDoc",components:{DocExample:He},setup(){return{listCode:`<sui-list>
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
</div>`}}}),Uk={class:"intro"},Yk=S("div",null,"Benefits",-1),Jk={class:"list"},Wk=S("a",null,"Languages",-1),Kk=S("a",null,[S("b",null,"Arrested Development")],-1),Xk=S("a",null,[S("b",null,"Bob's Burgers")],-1),Qk=S("a",null,[S("b",null,"The Godfather Part 2")],-1),Zk=S("a",null,[S("b",null,"Twin Peaks")],-1),ex=S("a",null,[S("b",null,"Arrested Development")],-1),tx=S("a",null,[S("b",null,"Bob's Burgers")],-1),ix=S("a",null,[S("b",null,"The Godfather Part 2")],-1);function ax(e,a,n,o,r,c){const m=y("sui-header-subheader"),p=y("sui-header"),s=y("sui-divider"),u=y("sui-icon"),f=y("sui-menu-item"),d=y("sui-menu"),h=y("sui-container"),v=y("sui-segment"),_=y("sui-list-item"),C=y("sui-list"),k=y("doc-example"),B=y("sui-list-list"),b=y("sui-list-header"),w=y("sui-list-description"),x=y("sui-list-content"),$=y("sui-image");return T(),ge("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",Uk,[t(p,{as:"h1"},{default:i(()=>[l("List "),t(m,null,{default:i(()=>[l(" A list is used to group related content ")]),_:1})]),_:1}),t(s,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(k,{title:"List",description:"A list groups related content",code:e.listCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Apples")]),_:1}),t(_,null,{default:i(()=>[l("Pears")]),_:1}),t(_,null,{default:i(()=>[l("Oranges")]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Bulleted",description:"A list can mark items with a bullet",code:e.bulletedCode},{default:i(()=>[t(C,{bulleted:""},{default:i(()=>[t(_,null,{default:i(()=>[l("Gaining Access")]),_:1}),t(_,null,{default:i(()=>[l("Inviting Friends")]),_:1}),t(_,null,{default:i(()=>[Yk,S("div",Jk,[t(_,{as:"a"},{default:i(()=>[l("Link to somewhere")]),_:1}),t(_,null,{default:i(()=>[l("Rebates")]),_:1}),t(_,null,{default:i(()=>[l("Discounts")]),_:1})])]),_:1}),t(_,null,{default:i(()=>[l("Warranty")]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Ordered",description:"A list can be ordered numerically",code:e.orderedCode},{default:i(()=>[t(C,{ordered:""},{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Getting Started")]),_:1}),t(_,{as:"a"},{default:i(()=>[l("Introduction")]),_:1}),t(_,null,{default:i(()=>[Wk,t(B,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("HTML")]),_:1}),t(_,{as:"a"},{default:i(()=>[l("Javascript")]),_:1}),t(_,{as:"a"},{default:i(()=>[l("CSS")]),_:1})]),_:1})]),_:1}),t(_,{as:"a"},{default:i(()=>[l("Review")]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Link",description:"A list can be specially formatted for navigation links",code:e.linkCode},{default:i(()=>[t(C,{link:""},{default:i(()=>[t(_,{active:""},{default:i(()=>[l("Home")]),_:1}),t(_,{as:"a"},{default:i(()=>[l("About")]),_:1}),t(_,{as:"a"},{default:i(()=>[l("Jobs")]),_:1}),t(_,{as:"a"},{default:i(()=>[l("Team")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(k,{title:"Item",description:"A list item can contain a set of items",code:e.itemCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[l("1")]),_:1}),t(_,null,{default:i(()=>[l("2")]),_:1}),t(_,null,{default:i(()=>[l("3")]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Icon",description:"A list item can contain an icon",code:e.iconCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[t(u,{name:"help"}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Floated Icon")]),_:1}),t(w,null,{default:i(()=>[l(" This text will always have a left margin to make sure it sits alongside your icon ")]),_:1})]),_:1})]),_:1}),t(_,{as:"a"},{default:i(()=>[t(u,{name:"right triangle"}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Icon Alignment")]),_:1}),t(w,null,{default:i(()=>[l(" Floated icons are by default top aligned. To have an icon top aligned try this example ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(u,{name:"help"}),l(" Inline Text ")]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Image",description:"A list can contain an image",code:e.imageContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t($,{avatar:"",src:Nk}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Rachel")]),_:1}),t(w,null,{default:i(()=>[l(" Last seen watching "),Kk,l(" just now. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t($,{avatar:"",src:Ok}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Lindsay")]),_:1}),t(w,null,{default:i(()=>[l(" Last seen watching "),Xk,l(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t($,{avatar:"",src:jk}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Matthew")]),_:1}),t(w,null,{default:i(()=>[l(" Last seen watching "),Qk,l(" yesterday. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t($,{avatar:"",src:Cn}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Jenny Hess")]),_:1}),t(w,null,{default:i(()=>[l(" Last seen watching "),Zk,l(" 3 days ago. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t($,{avatar:"",src:cp}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Veronika Ossi")]),_:1}),t(w,null,{default:i(()=>[l(" Has not watched anything recently ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Link",description:"A list can contain links",code:e.linkContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("What is a FAQ?")]),_:1}),t(_,{as:"a"},{default:i(()=>[l("Who is our user?")]),_:1}),t(_,{as:"a"},{default:i(()=>[l("Where is our office located?")]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"header",description:"A list item can contain a header",code:e.headerContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[l("New York City")]),_:1}),l(" A lovely city ")]),_:1}),t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Chicago")]),_:1}),l(" Also quite a lovely city ")]),_:1}),t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Los Angeles")]),_:1}),l(" Sometimes can be a lovely city ")]),_:1}),t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[l("San Francisco")]),_:1}),l(" What a lovely city ")]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Description",description:"A list item can contain a description",code:e.descriptionContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(u,{name:"map marker"}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[l("Krolewskie Jadlo")]),_:1}),t(w,null,{default:i(()=>[l(" An excellent polish restaurant, quick delivery and hearty, filling meals. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(u,{name:"map marker"}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[l("Xian Famous Foods")]),_:1}),t(w,null,{default:i(()=>[l(" A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(u,{name:"map marker"}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[l("Sapporo Haru")]),_:1}),t(w,null,{default:i(()=>[l(" Greenpoint's best choice for quick and delicious sushi. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(u,{name:"map marker"}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[l("Enid's")]),_:1}),t(w,null,{default:i(()=>[l(" At night a bar, during the day a delicious brunch spot. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(k,{title:"Horizontal",description:"A list can be formatted to have items appear horizontally",code:e.horizontalVarCode},{default:i(()=>[t(C,{horizontal:""},{default:i(()=>[t(_,null,{default:i(()=>[t($,{avatar:"",src:Gk}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Tom")]),_:1}),l(" Top Contributor ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t($,{avatar:"",src:$l}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Christian Rocha")]),_:1}),l(" Admin ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t($,{avatar:"",src:An}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Matt")]),_:1}),l(" Top Rated User ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Inverted",description:"A list can be inverted to appear on a dark background",code:e.invertedVarCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(C,{inverted:"",relaxed:"",divided:""},{default:i(()=>[t(_,null,{default:i(()=>[t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Snickerdoodle")]),_:1}),l(" An excellent companion ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Poodle")]),_:1}),l(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Paulo")]),_:1}),l(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Selection",description:"A selection list formats list items as possible choices",code:e.selectionVarCode},{default:i(()=>[t(C,{selection:"",verticalAlign:"middle"},{default:i(()=>[t(_,null,{default:i(()=>[t($,{avatar:"",src:Ma}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Helen")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t($,{avatar:"",src:$l}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Christian")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t($,{avatar:"",src:Bi}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Animated",description:"A list can animate to set the current item apart from the list",code:e.animatedVarCode},{default:i(()=>[t(C,{animated:"",verticalAlign:"middle"},{default:i(()=>[t(_,null,{default:i(()=>[t($,{avatar:"",src:Ma}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Helen")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t($,{avatar:"",src:$l}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Christian")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t($,{avatar:"",src:Bi}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Relaxed",description:"A list can relax its padding to provide more negative space",code:e.relaxedVarCode},{default:i(()=>[t(C,{relaxed:""},{default:i(()=>[t(_,null,{default:i(()=>[t($,{avatar:"",src:Bi}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[l("Daniel Louise")]),_:1}),t(w,null,{default:i(()=>[l(" Last seen watching "),ex,l(" just now. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t($,{avatar:"",src:Mo}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[l("Stevie Feliciano")]),_:1}),t(w,null,{default:i(()=>[l(" Last seen watching "),tx,l(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t($,{avatar:"",src:ei}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(w,null,{default:i(()=>[l(" Last seen watching "),ix,l(" yesterday. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Divided",description:"A list can show divisions between content",code:e.dividedVarCode},{default:i(()=>[t(C,{divided:"",verticalAlign:"middle"},{default:i(()=>[t(_,null,{default:i(()=>[t($,{avatar:"",src:Bi}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[l("Daniel Louise")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t($,{avatar:"",src:Mo}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[l("Stevie Feliciano")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t($,{avatar:"",src:ei}),t(x,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Celled",description:"A list can divide its items into cells",code:e.celledVarCode},{default:i(()=>[t(C,{celled:""},{default:i(()=>[t(_,null,{default:i(()=>[t($,{avatar:"",src:Ma}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Snickerdoodle")]),_:1}),l(" An excellent companion ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t($,{avatar:"",src:Bi}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Poodle")]),_:1}),l(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t($,{avatar:"",src:Bi}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Paulo")]),_:1}),l(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Size",description:"A list can vary in size",code:e.sizeCode},{default:i(()=>[t(C,{horizontal:"",divided:"",size:"mini"},{default:i(()=>[t(_,null,{default:i(()=>[t($,{avatar:"",src:Ma}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Helen")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t($,{avatar:"",src:$l}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Christian")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t($,{avatar:"",src:Bi}),t(x,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content Variations")]),_:1}),t(k,{title:"Vertical Aligned",description:"An element inside a list can be vertically aligned",code:e.verticalAlignedCode},{default:i(()=>[t(C,{horizontal:""},{default:i(()=>[t(_,null,{default:i(()=>[t($,{avatar:"",src:xt}),t(x,{verticalAlign:"top"},{default:i(()=>[l(" Top Aligned ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t($,{avatar:"",src:xt}),t(x,{verticalAlign:"middle"},{default:i(()=>[l(" Middle ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t($,{avatar:"",src:xt}),t(x,{verticalAlign:"bottom"},{default:i(()=>[l(" Bottom ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Floated",description:"An list, or an element inside a list can be floated left or right",code:e.floatedCode},{default:i(()=>[S("div",null,[t(C,{floated:"right",horizontal:""},{default:i(()=>[t(_,{disabled:""},{default:i(()=>[l("© GitHub, Inc.")]),_:1}),t(_,{as:"a"},{default:i(()=>[l("Terms")]),_:1}),t(_,{as:"a"},{default:i(()=>[l("Privacy")]),_:1}),t(_,{as:"a"},{default:i(()=>[l("Contact")]),_:1})]),_:1}),t(C,{horizontal:""},{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("About Us")]),_:1}),t(_,{as:"a"},{default:i(()=>[l("Jobs")]),_:1})]),_:1})])]),_:1},8,["code"])]),_:1})])}const lx=we(qk,[["render",ax]]),nx=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader />
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,ox={__name:"LoaderDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Loader",code:nx},{description:i(()=>[l(" A loader ")]),example:i(()=>[t(g(Ie),null,{default:i(()=>[t(g(Mt),{active:""},{default:i(()=>[t(g(Re))]),_:1}),t(g(Be),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},sx=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text>Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,rx={__name:"TextLoaderDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Text Loader",code:sx},{description:i(()=>[l(" A loader can contain text ")]),example:i(()=>[t(g(Ie),null,{default:i(()=>[t(g(Mt),{active:""},{default:i(()=>[t(g(Re),{text:""},{default:i(()=>[l("Loading")]),_:1})]),_:1}),t(g(Be),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},ux=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader Indeterminate text>Preparing Files</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,cx={__name:"IndeterminateDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Indeterminate",code:ux},{description:i(()=>[l(" A loader can show it's unsure of how long a task will take ")]),example:i(()=>[t(g(Ie),null,{default:i(()=>[t(g(Mt),{active:""},{default:i(()=>[t(g(Re),{Indeterminate:"",text:""},{default:i(()=>[l("Preparing Files")]),_:1})]),_:1}),t(g(Be),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},dx=`<template>
  <SuiSegment>
    <SuiLoader active />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,mx={__name:"ActiveDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Active",code:dx},{description:i(()=>[l(" A loader can be active or visible ")]),example:i(()=>[t(g(Ie),null,{default:i(()=>[t(g(Re),{active:""}),t(g(Be),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},px=`<template>
  <SuiSegment>
    <SuiLoader disabled />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,fx={__name:"DisabledDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Disabled",code:px},{description:i(()=>[l(" A loader can be disabled or hidden ")]),example:i(()=>[t(g(Ie),null,{default:i(()=>[t(g(Re),{disabled:""}),t(g(Be),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},gx=`<template>
  <SuiLoader active inline />
</template>`,hx={__name:"InlineDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Inline",code:gx},{description:i(()=>[l(" Loaders can appear inline with content ")]),example:i(()=>[t(g(Re),{active:"",inline:""})]),_:1}))}},_x=`<template>
  <SuiLoader active inline />
</template>`,bx={__name:"InlineCenterDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Inline Center",code:_x},{description:i(()=>[l(" Loaders can appear inline centered with content ")]),example:i(()=>[t(g(Re),{active:"",inline:"centered"})]),_:1}))}},vx=`<template>
  <SuiLoader slow active inline />
  <SuiLoader active inline />
  <SuiLoader fast active inline />
</template>`,yx={__name:"SpeedDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Speed",code:vx},{description:i(()=>[l(" Loaders can appear slow, normal or fast ")]),example:i(()=>[t(g(Re),{slow:"",active:"",inline:""}),t(g(Re),{active:"",inline:""}),t(g(Re),{fast:"",active:"",inline:""})]),_:1}))}},Sx=`<template>
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
</template>`,wx={__name:"ColorsDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Colors",code:Sx},{description:i(()=>[l(" Loaders can be different colors ")]),example:i(()=>[t(g(Re),{active:"",inline:"",primary:""}),t(g(Re),{active:"",inline:"",secondary:""}),t(g(Re),{active:"",inline:"",color:"red"}),t(g(Re),{active:"",inline:"",color:"orange"}),t(g(Re),{active:"",inline:"",color:"yellow"}),t(g(Re),{active:"",inline:"",color:"olive"}),t(g(Re),{active:"",inline:"",color:"green"}),t(g(Re),{active:"",inline:"",color:"teal"}),t(g(Re),{active:"",inline:"",color:"blue"}),t(g(Re),{active:"",inline:"",color:"violet"}),t(g(Re),{active:"",inline:"",color:"purple"}),t(g(Re),{active:"",inline:"",color:"pink"}),t(g(Re),{active:"",inline:"",color:"brown"}),t(g(Re),{active:"",inline:"",color:"grey"}),t(g(Re),{active:"",inline:"",color:"black"})]),_:1}))}},Cx=`<template>
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
</template>`,Ax={__name:"SizeDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Size",code:Cx},{description:i(()=>[l(" Loaders can have different sizes ")]),example:i(()=>[t(g(Ie),null,{default:i(()=>[t(g(Mt),{active:""},{default:i(()=>[t(g(Re),{text:"",size:"mini"},{default:i(()=>[l("Loading")]),_:1})]),_:1}),t(g(Be),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(g(Ie),null,{default:i(()=>[t(g(Mt),{active:""},{default:i(()=>[t(g(Re),{text:"",size:"tiny"},{default:i(()=>[l("Loading")]),_:1})]),_:1}),t(g(Be),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(g(Ie),null,{default:i(()=>[t(g(Mt),{active:""},{default:i(()=>[t(g(Re),{text:"",size:"small"},{default:i(()=>[l("Loading")]),_:1})]),_:1}),t(g(Be),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(g(Ie),null,{default:i(()=>[t(g(Mt),{active:""},{default:i(()=>[t(g(Re),{text:"",size:"large"},{default:i(()=>[l("Loading")]),_:1})]),_:1}),t(g(Be),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(g(Be),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(g(Ie),null,{default:i(()=>[t(g(Mt),{active:""},{default:i(()=>[t(g(Re),{text:"",size:"big"},{default:i(()=>[l("Loading")]),_:1})]),_:1}),t(g(Be),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(g(Be),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(g(Ie),null,{default:i(()=>[t(g(Mt),{active:""},{default:i(()=>[t(g(Re),{text:"",size:"huge"},{default:i(()=>[l("Loading")]),_:1})]),_:1}),t(g(Be),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(g(Be),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},kx=`<template>
  <SuiSegment inverted>
    <SuiLoader active inverted />

    <SuiImage src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,xx={__name:"InvertedDoc",setup(e){return(a,n)=>(T(),I(M,{label:"Inverted",code:kx},{description:i(()=>[l(" Loaders can have their colors inverted. ")]),example:i(()=>[t(g(Ie),{inverted:""},{default:i(()=>[t(g(Re),{active:"",inverted:""}),t(g(Be),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},$x={__name:"Loader",setup(e){const a=[{id:"loader",label:"Loader",category:"Types",component:ox},{id:"text-loader",label:"Text Loader",category:"Types",component:rx},{id:"indeterminate",label:"Indeterminate",category:"States",component:cx},{id:"active",label:"Active",category:"States",component:mx},{id:"disabled",label:"Disabled",category:"States",component:fx},{id:"inline",label:"Inline",category:"Variations",component:hx},{id:"inline-center",label:"Inline Center",category:"Variations",component:bx},{id:"speed",label:"Speed",category:"Variations",component:yx},{id:"colors",label:"Colors",category:"Variations",component:wx},{id:"size",label:"Size",category:"Variations",component:Ax},{id:"inverted",label:"Inverted",category:"Variations",component:xx}];return(n,o)=>(T(),I(Nt,{title:"Loader",description:"A loader alerts a user to wait for an activity to complete","component-docs":a}))}},at="/vue-fomantic-ui/images/wireframe/short-paragraph.png",Bx=E({name:"RailDoc",components:{DocExample:He},setup(){return{railCode:`<sui-grid centered :columns="3">
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
</sui-grid>`}}}),Tx={class:"intro"};function Lx(e,a,n,o,r,c){const m=y("sui-header-subheader"),p=y("sui-header"),s=y("sui-divider"),u=y("sui-icon"),f=y("sui-menu-item"),d=y("sui-menu"),h=y("sui-container"),v=y("sui-segment"),_=y("sui-image"),C=y("sui-rail"),k=y("sui-grid-column"),B=y("sui-grid"),b=y("doc-example");return T(),ge("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",Tx,[t(p,{as:"h1"},{default:i(()=>[l("Rail "),t(m,null,{default:i(()=>[l(" A rail is used to show accompanying content outside the boundaries of the main view of a site ")]),_:1})]),_:1}),t(s,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(b,{title:"Rail",description:"A rail can be presented on the left or right side of a container",code:e.railCode},{default:i(()=>[t(B,{centered:"",columns:3},{default:i(()=>[t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[t(_,{src:at}),t(C,{position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Left Rail Content ")]),_:1})]),_:1}),t(C,{position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Internal",description:"A rail can attach itself to the inside of a container",code:e.internalCode},{default:i(()=>[t(v,{textAlign:"center"},{default:i(()=>[t(_,{src:at}),t(C,{internal:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[l("Left Rail Content")]),_:1})]),_:1}),t(C,{internal:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[l("Right Rail Content")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Dividing",description:"A rail can create a division between itself and a container",code:e.dividingCode},{default:i(()=>[t(B,{centered:"",columns:3},{default:i(()=>[t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[t(_,{src:at}),t(C,{dividing:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Left Rail Content ")]),_:1})]),_:1}),t(C,{dividing:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(b,{title:"Attached",description:"A rail can appear attached to the main viewport",code:e.attachedCode},{default:i(()=>[t(B,{centered:"",columns:3},{default:i(()=>[t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[t(_,{src:at}),t(C,{attached:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Left Rail Content ")]),_:1})]),_:1}),t(C,{attached:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Close",description:"A rail can appear closer to the main viewport",code:e.closeCode},{default:i(()=>[t(B,{centered:"",columns:3},{default:i(()=>[t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[t(_,{src:at}),t(C,{close:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Left Rail Content ")]),_:1})]),_:1}),t(C,{close:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Size",description:"A rail can have different sizes",code:e.sizeCode},{default:i(()=>[t(B,{centered:"",columns:3},{default:i(()=>[t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[t(_,{src:at}),t(C,{size:"small",position:"left"},{default:i(()=>[l(" Left Small Rail ")]),_:1}),t(C,{size:"large",position:"right"},{default:i(()=>[l(" Right Large Rail ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Dx=we(Bx,[["render",Lx]]),Ix="/vue-fomantic-ui/images/avatar/large/ade.jpg",Cc="/vue-fomantic-ui/images/avatar/large/chris.jpg",Vo="/vue-fomantic-ui/images/avatar/large/stevie.jpg",Ac="/vue-fomantic-ui/images/avatar/large/nan.jpg",Ex=E({name:"RevealDoc",components:{DocExample:He},setup(){return{fadeCode:`<sui-reveal animated="fade">
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
</sui-reveal>`}}}),Rx={class:"intro"};function zx(e,a,n,o,r,c){const m=y("sui-header-subheader"),p=y("sui-header"),s=y("sui-divider"),u=y("sui-icon"),f=y("sui-menu-item"),d=y("sui-menu"),h=y("sui-container"),v=y("sui-segment"),_=y("sui-image"),C=y("sui-reveal-content"),k=y("sui-reveal"),B=y("doc-example");return T(),ge("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",Rx,[t(p,{as:"h1"},{default:i(()=>[l("Reveal "),t(m,null,{default:i(()=>[l(" A reveal displays additional content in place of previous content when activated ")]),_:1})]),_:1}),t(s,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(B,{title:"Fade",description:"An element can disappear to reveal content below",code:e.fadeCode},{default:i(()=>[t(k,{animated:"fade"},{default:i(()=>[t(C,{visible:""},{default:i(()=>[t(_,{size:"small",src:xt})]),_:1}),t(C,{hidden:""},{default:i(()=>[t(_,{size:"small",src:Ix})]),_:1})]),_:1})]),_:1},8,["code"]),t(B,{title:"Move",description:"An element can move in a direction to reveal content",code:e.moveCode},{default:i(()=>[t(k,{animated:"move"},{default:i(()=>[t(C,{visible:""},{default:i(()=>[t(_,{size:"small",src:xt})]),_:1}),t(C,{hidden:""},{default:i(()=>[t(_,{size:"small",src:Cc})]),_:1})]),_:1})]),_:1},8,["code"]),t(B,{title:"Rotate",description:"An element can rotate to reveal content below",code:e.rotateCode},{default:i(()=>[t(k,{animated:"rotate"},{default:i(()=>[t(C,{visible:""},{default:i(()=>[t(_,{circular:"",size:"small",src:xt})]),_:1}),t(C,{hidden:""},{default:i(()=>[t(_,{circular:"",size:"small",src:Vo})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(B,{title:"Active",description:"An active reveal displays its hidden content",code:e.activeCode},{default:i(()=>[t(k,{active:"",animated:"move"},{default:i(()=>[t(C,{visible:""},{default:i(()=>[t(_,{size:"small",src:xt})]),_:1}),t(C,{hidden:""},{default:i(()=>[t(_,{size:"small",src:Ac})]),_:1})]),_:1})]),_:1},8,["code"]),t(B,{title:"Disabled",description:"A disabled reveal will not animate when hovered",code:e.disabledCode},{default:i(()=>[t(k,{disabled:"",animated:"move"},{default:i(()=>[t(C,{visible:""},{default:i(()=>[t(_,{size:"small",src:xt})]),_:1}),t(C,{hidden:""},{default:i(()=>[t(_,{size:"small",src:Ac})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(B,{title:"Instant",description:"An element can show its content without delay",code:e.instantCode},{default:i(()=>[t(k,{instant:"",animated:"move"},{default:i(()=>[t(C,{visible:""},{default:i(()=>[t(_,{size:"small",src:xt})]),_:1}),t(C,{hidden:""},{default:i(()=>[t(_,{size:"small",src:Cc})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Px=we(Ex,[["render",zx]]),Fx=E({name:"SegmentDoc",components:{DocExample:He},setup(){return{segmentCode:"<sui-segment>Pellentesque habitant morbi tristique senectus.</sui-segment>",placeholderCode:`<sui-segment placeholder>
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
</sui-segment>`}}}),Mx={class:"intro"},Vx=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),Hx=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),Nx=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),Ox=S("p",null,"Top",-1),jx=S("p",null,"Middle",-1),Gx=S("p",null,"Middle",-1),qx=S("p",null,"Middle",-1),Ux=S("p",null,"Bottom",-1),Yx=S("p",null,"I'm here to tell you something, and you will probably read me first.",-1),Jx=S("p",null,"This segment is on top",-1),Wx=S("p",null,"This segment is attached on both sides",-1),Kx=S("p",null,"This segment is on bottom",-1),Xx=S("p",null,"Fitted Segment",-1),Qx=S("p",null,"Horizontally fitted segment",-1),Zx=S("p",null,"Vertically fitted segment",-1),e$=S("p",null,"I'm here to tell you something, and you will probably read me first.",-1),t$=S("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),i$=S("p",null,"If you notice me you must be looking very hard.",-1),a$=S("p",null,"This segment will appear to the right",-1),l$=S("p",null,"This segment will appear to the left",-1),n$=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1);function o$(e,a,n,o,r,c){const m=y("sui-header-subheader"),p=y("sui-header"),s=y("sui-divider"),u=y("sui-icon"),f=y("sui-menu-item"),d=y("sui-menu"),h=y("sui-container"),v=y("sui-segment"),_=y("doc-example"),C=y("sui-button"),k=y("sui-segment-group");return T(),ge("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",Mx,[t(p,{as:"h1"},{default:i(()=>[l("Segment "),t(m,null,{default:i(()=>[l(" A segment is used to create a grouping of related content ")]),_:1})]),_:1}),t(s,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(_,{title:"Segment",description:"A segment of content",code:e.segmentCode},{default:i(()=>[t(v,null,{default:i(()=>[l("Pellentesque habitant morbi tristique senectus.")]),_:1})]),_:1},8,["code"]),t(_,{title:"Placeholder Segment",description:"A segment can be used to reserve space for conditionally displayed content",code:e.placeholderCode},{default:i(()=>[t(v,{placeholder:""},{default:i(()=>[t(p,{icon:""},{default:i(()=>[t(u,{name:"file outline"}),l(" No documents are listed for this customer. ")]),_:1}),t(C,{color:"primary"},{default:i(()=>[l("Add Document")]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Raised",description:"A segment may be formatted to raise above the page",code:e.raisedCode},{default:i(()=>[t(v,{raised:""},{default:i(()=>[Vx]),_:1})]),_:1},8,["code"]),t(_,{title:"Stacked",description:"A segment can be formatted to show it contains multiple pages",code:e.stackedCode},{default:i(()=>[t(v,{stacked:""},{default:i(()=>[Hx]),_:1})]),_:1},8,["code"]),t(_,{title:"Piled",description:"A segment can be formatted to look like a pile of pages",code:e.piledCode},{default:i(()=>[t(v,{piled:""},{default:i(()=>[Nx]),_:1})]),_:1},8,["code"]),t(_,{title:"Vertical Segment",description:"A vertical segment formats content to be aligned as part of a vertical group",code:e.verticalCode},{default:i(()=>[S("div",null,[t(v,{vertical:""},{default:i(()=>[l(" Te eum doming eirmod, nominati pertinacia argumentum ad his. ")]),_:1}),t(v,{vertical:""},{default:i(()=>[l(" Pellentesque habitant morbi tristique senectus. ")]),_:1}),t(v,{vertical:""},{default:i(()=>[l(" Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. ")]),_:1})])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Groups")]),_:1}),t(_,{title:"Segments",description:"A group of segments can be formatted to appear together",code:e.segmentsCode},{default:i(()=>[t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[Ox]),_:1}),t(v,null,{default:i(()=>[jx]),_:1}),t(v,null,{default:i(()=>[Gx]),_:1}),t(v,null,{default:i(()=>[qx]),_:1}),t(v,null,{default:i(()=>[Ux]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Nested Segments",description:"A group of segments can be nested in another group of segments",code:e.nestedCode},{default:i(()=>[t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Top")]),_:1}),t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Nested Top")]),_:1}),t(v,null,{default:i(()=>[l("Nested Middle")]),_:1}),t(v,null,{default:i(()=>[l("Nested Bottom")]),_:1})]),_:1}),t(k,{horizontal:""},{default:i(()=>[t(v,null,{default:i(()=>[l("Top")]),_:1}),t(v,null,{default:i(()=>[l("Middle")]),_:1}),t(v,null,{default:i(()=>[l("Bottom")]),_:1})]),_:1}),t(v,null,{default:i(()=>[l("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Horizontal Segments",description:"A segment group can appear horizontally",code:e.horizontalCode},{default:i(()=>[t(k,{horizontal:""},{default:i(()=>[t(v,null,{default:i(()=>[l("Left")]),_:1}),t(v,null,{default:i(()=>[l("Middle")]),_:1}),t(v,null,{default:i(()=>[l("Right")]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Raised Segments",description:"A group of segments can be raised",code:e.raisedSegmentsCode},{default:i(()=>[t(k,{raised:""},{default:i(()=>[t(v,null,{default:i(()=>[l("Top")]),_:1}),t(v,null,{default:i(()=>[l("Middle")]),_:1}),t(v,null,{default:i(()=>[l("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Stacked Segments",description:"A group of segments can be stacked",code:e.stackedSegmentsCode},{default:i(()=>[t(k,{stacked:""},{default:i(()=>[t(v,null,{default:i(()=>[l("Top")]),_:1}),t(v,null,{default:i(()=>[l("Middle")]),_:1}),t(v,null,{default:i(()=>[l("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Piled Segments",description:"A group of segments can be piled",code:e.piledSegmentsCode},{default:i(()=>[t(k,{piled:""},{default:i(()=>[t(v,null,{default:i(()=>[l("Top")]),_:1}),t(v,null,{default:i(()=>[l("Middle")]),_:1}),t(v,null,{default:i(()=>[l("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(_,{title:"Disabled",description:"A segment may show its content is disabled",code:e.disabledCode},{default:i(()=>[t(v,{disabled:""},{default:i(()=>[l("Disabled content")]),_:1})]),_:1},8,["code"]),t(_,{title:"Loading",description:"A segment may show its content is being loaded",code:e.loadingCode},{default:i(()=>[t(v,{loading:""},{default:i(()=>[l("Now Loading...")]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(_,{title:"Inverted",description:"A segment can have its colors inverted for contrast",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[Yx]),_:1})]),_:1},8,["code"]),t(_,{title:"Attached",description:"A segment can be attached to other content on a page",code:e.attachedCode},{default:i(()=>[S("div",null,[t(v,{attached:"top"},{default:i(()=>[Jx]),_:1}),t(v,{attached:""},{default:i(()=>[Wx]),_:1}),t(v,{attached:"bottom"},{default:i(()=>[Kx]),_:1})])]),_:1},8,["code"]),t(_,{title:"Padded",description:"A segment can increase its padding",code:e.paddedCode},{default:i(()=>[t(v,{padded:""},{default:i(()=>[l("Padded content")]),_:1})]),_:1},8,["code"]),t(_,{title:"Fitted",description:"A segment can remove its padding, vertically or horizontally",code:e.fittedCode},{default:i(()=>[S("div",null,[t(v,{fitted:""},{default:i(()=>[Xx]),_:1}),t(v,{fitted:"horizontally"},{default:i(()=>[Qx]),_:1}),t(v,{fitted:"vertically"},{default:i(()=>[Zx]),_:1})])]),_:1},8,["code"]),t(_,{title:"Compact",description:"A segment may take up only as much space as is necessary",code:e.compactCode},{default:i(()=>[t(v,{compact:""},{default:i(()=>[l("Compact content")]),_:1})]),_:1},8,["code"]),t(_,{title:"Colored",description:"A segment can be colored",code:e.coloredCode},{default:i(()=>[S("div",null,[t(v,{color:"red"},{default:i(()=>[l("Red")]),_:1}),t(v,{color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(v,{color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(v,{color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(v,{color:"green"},{default:i(()=>[l("Green")]),_:1}),t(v,{color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(v,{color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(v,{color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(v,{color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(v,{color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(v,{color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(v,{color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(v,{color:"black"},{default:i(()=>[l("Black")]),_:1})])]),_:1},8,["code"]),t(_,{title:"Emphasis",description:"A segment can be formatted to appear more or less noticeable",code:e.emphasisCode},{default:i(()=>[S("div",null,[t(v,null,{default:i(()=>[e$]),_:1}),t(v,{secondary:""},{default:i(()=>[t$]),_:1}),t(v,{tertiary:""},{default:i(()=>[i$]),_:1})])]),_:1},8,["code"]),t(_,{title:"Circular",description:"A segment can be circular",code:e.circularCode},{default:i(()=>[S("div",null,[t(v,{circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[t(p,{as:"h2"},{default:i(()=>[l(" Buy Now "),t(m,null,{default:i(()=>[l(" $10.99 ")]),_:1})]),_:1})]),_:1}),t(v,{inverted:"",circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[t(p,{as:"h2"},{default:i(()=>[l(" Buy Now "),t(m,null,{default:i(()=>[l(" $10.99 ")]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(_,{title:"Clearing",description:"A segment can clear floated content",code:e.clearingCode},{default:i(()=>[t(v,{clearing:""},{default:i(()=>[t(C,{floated:"right"},{default:i(()=>[l("Floated")]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Floated",description:"A segment can appear to the left or right of other content",code:e.floatedCode},{default:i(()=>[S("div",null,[t(v,{floated:"right"},{default:i(()=>[a$]),_:1}),t(v,{floated:"left"},{default:i(()=>[l$]),_:1})])]),_:1},8,["code"]),t(_,{title:"Text Alignment",description:"A segment can have its text aligned to a side",code:e.textAlignCode},{default:i(()=>[S("div",null,[t(v,{textAlign:"right"},{default:i(()=>[l(" Right ")]),_:1}),t(v,{textAlign:"left"},{default:i(()=>[l(" Left ")]),_:1}),t(v,{textAlign:"center"},{default:i(()=>[l(" Center ")]),_:1})])]),_:1},8,["code"]),t(_,{title:"Basic",description:"A basic segment has no special formatting",code:e.basicCode},{default:i(()=>[t(v,{basic:""},{default:i(()=>[n$]),_:1})]),_:1},8,["code"])]),_:1})])}const s$=we(Fx,[["render",o$]]),r$=E({name:"StepDoc",components:{DocExample:He},setup(){return{stepCode:`<sui-step-group>
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
</sui-segment>`}}}),u$={class:"intro"},c$=S("p",null,"The steps take up the entire column width",-1),d$=S("p",null,"Main content",-1);function m$(e,a,n,o,r,c){const m=y("sui-header-subheader"),p=y("sui-header"),s=y("sui-divider"),u=y("sui-icon"),f=y("sui-menu-item"),d=y("sui-menu"),h=y("sui-container"),v=y("sui-segment"),_=y("sui-step"),C=y("sui-step-group"),k=y("doc-example"),B=y("sui-step-title"),b=y("sui-step-description"),w=y("sui-step-content"),x=y("sui-grid-column"),$=y("sui-grid");return T(),ge("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",u$,[t(p,{as:"h1"},{default:i(()=>[l("Step "),t(m,null,{default:i(()=>[l(" A step shows the completion status of an activity in a series of activities ")]),_:1})]),_:1}),t(s,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(k,{title:"Step",description:"A single step",code:e.stepCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Shipping")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Groups")]),_:1}),t(k,{title:"Steps",description:"A set of steps",code:e.stepsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(b,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(b,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(_,{disabled:""},{default:i(()=>[t(u,{name:"info"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Ordered",description:"A step can show a ordered sequence of steps",code:e.orderedCode},{default:i(()=>[t(C,{ordered:""},{default:i(()=>[t(_,{completed:""},{default:i(()=>[t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(b,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,{completed:""},{default:i(()=>[t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(b,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(_,{active:""},{default:i(()=>[t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Confirm Order")]),_:1}),t(b,null,{default:i(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Vertical",description:"A step can be displayed stacked vertically",code:e.verticalCode},{default:i(()=>[t(C,{vertical:""},{default:i(()=>[t(_,{completed:""},{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(b,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,{completed:""},{default:i(()=>[t(u,{name:"credit card"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(b,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(_,{active:""},{default:i(()=>[t(u,{name:"info"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Confirm Order")]),_:1}),t(b,null,{default:i(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(k,{title:"Description",description:"A step can contain a description",code:e.descriptionCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(b,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Icon",description:"A step can contain an icon",code:e.iconCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(b,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Link",description:"A step can link",code:e.linkCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,{link:""},{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(b,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(b,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(k,{title:"Active",description:"A step can be highlighted as active",code:e.activeCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(b,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Completed",description:"A step can show that a user has completed it",code:e.completedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,{completed:""},{default:i(()=>[t(u,{name:"payment"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(b,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Disabled",description:"A step can show that it cannot be selected",code:e.disabledCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,{disabled:""},{default:i(()=>[l("Billing")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(k,{title:"Stackable",description:"A step can stack vertically only on smaller screens",code:e.stackableCode},{default:i(()=>[t(C,{stackable:"tablet"},{default:i(()=>[t(_,null,{default:i(()=>[t(u,{name:"plane"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(b,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,{active:""},{default:i(()=>[t(u,{name:"dollar"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(b,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(_,{disabled:""},{default:i(()=>[t(u,{name:"info circle"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Confirm Order")]),_:1}),t(b,null,{default:i(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Unstackable",description:"A step can prevent itself from stacking on mobile",code:e.unstackableCode},{default:i(()=>[t(C,{unstackable:""},{default:i(()=>[t(_,null,{default:i(()=>[t(u,{name:"plane"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(b,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,{active:""},{default:i(()=>[t(u,{name:"dollar"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(b,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(_,{disabled:""},{default:i(()=>[t(u,{name:"info circle"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Confirm Order")]),_:1}),t(b,null,{default:i(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Fluid",description:"A fluid step takes up the width of its container",code:e.fluidCode},{default:i(()=>[t($,{columns:2},{default:i(()=>[t(x,null,{default:i(()=>[t(C,{fluid:"",vertical:""},{default:i(()=>[t(_,{completed:""},{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(b,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,{active:""},{default:i(()=>[t(u,{name:"dollar"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(b,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(x,null,{default:i(()=>[c$]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Attached",description:"Steps can be attached to other elements",code:e.attachedCode},{default:i(()=>[S("div",null,[t(C,{attached:"top"},{default:i(()=>[t(_,null,{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(b,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(b,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{attached:""},{default:i(()=>[d$]),_:1}),t(C,{attached:"bottom"},{default:i(()=>[t(_,null,{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(b,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(b,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(k,{title:"Evenly Divided",description:"Steps can be divided evenly inside their parent",code:e.evenlyDividedCode},{default:i(()=>[t(C,{widths:2},{default:i(()=>[t(_,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1})]),_:1})]),_:1}),t(_,{disabled:""},{default:i(()=>[t(u,{name:"info"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Size",description:"Steps can have different sizes",code:e.sizeCode},{default:i(()=>[t(C,{size:"mini"},{default:i(()=>[t(_,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1})]),_:1})]),_:1}),t(_,{disabled:""},{default:i(()=>[t(u,{name:"info"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Inverted",description:"A step's color can be inverted",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(C,{inverted:"",vertical:""},{default:i(()=>[t(_,{completed:""},{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(b,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(_,{completed:""},{default:i(()=>[t(u,{name:"credit card"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(b,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(_,{active:""},{default:i(()=>[t(u,{name:"info"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Confirm Order")]),_:1}),t(b,null,{default:i(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const p$=we(r$,[["render",m$]]),f$=E({name:"BreadcrumbDoc",components:{DocPageHeader:Je,DocExample:He},setup(){return{breadcrumbCode:`<sui-breadcrumb>
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
</sui-breadcrumb>`}}});function g$(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-breadcrumb-section"),u=y("sui-breadcrumb-divider"),f=y("sui-breadcrumb"),d=y("doc-example"),h=y("sui-segment"),v=y("sui-container");return T(),ge("div",null,[t(m,{title:"Breadcrumb",sub:"A breadcrumb is used to show hierarchy between content"}),t(v,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(d,{title:"Breadcrumb",description:"A standard breadcrumb",code:e.breadcrumbCode},{default:i(()=>[t(f,null,{default:i(()=>[t(s,{link:""},{default:i(()=>[l("Home")]),_:1}),t(u,null,{default:i(()=>[l(" / ")]),_:1}),t(s,{link:""},{default:i(()=>[l("Store")]),_:1}),t(u,null,{default:i(()=>[l(" / ")]),_:1}),t(s,{active:""},{default:i(()=>[l("T-Shirt")]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{description:"You can do the same using shorthands",code:e.breadcrumbCode2},{default:i(()=>[t(f,{sections:[{content:"Home",link:!0},{content:"Store",link:!0},{content:"T-Shirt",active:!0}],icon:"right angle"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(d,{title:"Divider",description:"A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text",code:e.dividerCode},{default:i(()=>[t(f,null,{default:i(()=>[t(s,{link:""},{default:i(()=>[l("Home")]),_:1}),t(u,{icon:"right chevron"}),t(s,{link:""},{default:i(()=>[l("Registration")]),_:1}),t(u,{icon:"right arrow"}),t(s,{active:""},{default:i(()=>[l("Personal Information")]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Section",description:"A breadcrumb can contain sections that can either be formatted as a link or text",code:e.sectionCode},{default:i(()=>[t(f,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Home")]),_:1}),t(u,null,{default:i(()=>[l(" / ")]),_:1}),t(s,{active:""},{default:i(()=>[l("Search")]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Link",description:"A section may be linkable or contain a link",code:e.linkCode},{default:i(()=>[t(f,null,{default:i(()=>[t(s,{link:""},{default:i(()=>[l("Home")]),_:1}),t(u,null,{default:i(()=>[l(" / ")]),_:1}),t(s,{active:""},{default:i(()=>[l("Search")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(d,{title:"Active",description:"A section can be active",code:e.activeCode},{default:i(()=>[t(f,null,{default:i(()=>[t(s,{link:""},{default:i(()=>[l("Product")]),_:1}),t(u,null,{default:i(()=>[l(" / ")]),_:1}),t(s,{active:""},{default:i(()=>[l("Paper Towels")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(d,{title:"Inverted",description:"A breadcrumb can be inverted",code:e.invertedCode},{default:i(()=>[t(h,{inverted:""},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(s,{link:""},{default:i(()=>[l("Home")]),_:1}),t(u,{icon:"right chevron"}),t(s,{link:""},{default:i(()=>[l("Registration")]),_:1}),t(u,{icon:"right chevron"}),t(s,{active:""},{default:i(()=>[l("Personal Information")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Size",description:"A breadcrumb can vary in size",code:e.sizeCode},{default:i(()=>[t(f,{size:"mini"},{default:i(()=>[t(s,{link:""},{default:i(()=>[l("Home")]),_:1}),t(u,{icon:"right chevron"}),t(s,{link:""},{default:i(()=>[l("Registration")]),_:1}),t(u,{icon:"right chevron"}),t(s,null,{default:i(()=>[l("Personal Information")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const h$=we(f$,[["render",g$]]),_$=E({name:"FormDoc",components:{DocPageHeader:Je,DocExample:He},setup(){return{formCode:`<sui-form>
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
</sui-form>`}}});function b$(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-form-field"),u=y("sui-checkbox"),f=y("sui-button"),d=y("sui-form"),h=y("doc-example"),v=y("sui-form-group"),_=y("sui-container");return T(),ge("div",null,[t(m,{title:"Form",sub:"A form displays a set of related user input fields in a structured way"}),t(_,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(h,{title:"Form",description:"A form",code:e.formCode},{default:i(()=>[t(d,null,{default:i(()=>[t(s,{label:"First Name",placeholder:"First Name"}),t(s,{label:"Last Name",placeholder:"Last Name"}),t(s,null,{default:i(()=>[t(u,{label:"I agree to the Terms and Conditions"})]),_:1}),t(f,null,{default:i(()=>[l("Submit")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(h,{title:"Field",description:"A field is a form element containing a label and an input",code:e.fieldCode},{default:i(()=>[t(d,null,{default:i(()=>[t(s,{label:"Enter Password",type:"password"})]),_:1})]),_:1},8,["code"]),t(h,{title:"Fields",description:"A set of fields can appear grouped together",code:e.fieldsCode},{default:i(()=>[t(d,null,{default:i(()=>[t(v,null,{default:i(()=>[t(s,{label:"First name",placeholder:"First Name"}),t(s,{label:"Middle name",placeholder:"Middle Name"}),t(s,{label:"Last name",placeholder:"Last Name"})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const v$=we(_$,[["render",b$]]),Wt="/vue-fomantic-ui/images/wireframe/media-paragraph.png",ze="/vue-fomantic-ui/images/wireframe/paragraph.png",kc="/vue-fomantic-ui/images/wireframe/centered-paragraph.png",y$=E({name:"GridDoc",components:{DocPageHeader:Je,DocExample:He},setup(){return{numbers:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],gridCode:`<sui-grid>
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
</sui-grid>`}}}),S$=S("br",null,null,-1);function w$(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-image"),u=y("sui-grid-column"),f=y("sui-grid"),d=y("doc-example"),h=y("sui-grid-row"),v=y("sui-segment"),_=y("sui-divider"),C=y("sui-menu-item"),k=y("sui-menu"),B=y("sui-container");return T(),ge("div",null,[t(m,{title:"Grid",sub:"A grid is used to harmonize negative space in a layout"}),t(B,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(d,{title:"Grid",description:"A basic grid",code:e.gridCode},{default:i(()=>[t(f,null,{default:i(()=>[(T(!0),ge(Ce,null,tt(e.numbers,b=>(T(),I(u,{key:b},{default:i(()=>[t(s,{src:ae})]),_:2},1024))),128))]),_:1})]),_:1},8,["code"]),t(d,{title:"Divided",description:"A grid can have dividers between its columns",code:e.dividedCode},{default:i(()=>[t(f,{columns:3,divided:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:Wt})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:Wt})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:Wt})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:Wt})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:Wt})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:Wt})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Vertical Divided",description:"A grid can have dividers between rows",code:e.verticalDividedCode},{default:i(()=>[t(f,{divided:"vertically"},{default:i(()=>[t(h,{columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(h,{columns:3},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Celled",description:"A grid can have rows divided into cells",code:e.celledCode},{default:i(()=>[t(f,{celled:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,{width:3},{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,{width:13},{default:i(()=>[t(s,{src:kc})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{width:3},{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,{width:10},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{width:3},{default:i(()=>[t(s,{src:ae})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Internally Celled",description:"A grid can have rows divisions only between internal rows",code:e.internallyCelledCode},{default:i(()=>[t(f,{celled:"internally"},{default:i(()=>[t(h,null,{default:i(()=>[t(u,{width:3},{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,{width:13},{default:i(()=>[t(s,{src:kc})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{width:3},{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,{width:10},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{width:3},{default:i(()=>[t(s,{src:ae})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(d,{title:"Rows",description:"A row is a horizontal grouping of columns",code:e.rowsCode},{default:i(()=>[t(f,{columns:3},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Columns",description:"Columns each contain gutters giving them equal spacing from other columns",code:e.columnsCode},{default:i(()=>[t(f,null,{default:i(()=>[t(u,{width:8},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{width:8},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{width:8},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{width:8},{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(d,{title:"Floated",description:"A column can sit flush against the left or right edge of a row",code:e.floatedCode},{default:i(()=>[t(f,null,{default:i(()=>[t(u,{floated:"left",width:5},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{floated:"right",width:5},{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Column Width",description:"A column can vary in width taking up more than a single grid column",code:e.columnWidthCode},{default:i(()=>[t(f,null,{default:i(()=>[t(u,{width:4},{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,{width:9},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{width:3},{default:i(()=>[t(s,{src:Wt})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Column Count",description:"A grid can have a different number of columns per row",code:e.columnCountCode},{default:i(()=>[t(f,null,{default:i(()=>[t(h,{columns:3},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1})]),_:1}),t(h,{columns:4},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Equal Width",description:"Equal Width",code:e.equalWidthCode},{default:i(()=>[t(f,{columns:"equal"},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("1")]),_:1})]),_:1}),t(u,{width:8},{default:i(()=>[t(v,null,{default:i(()=>[l("2")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("3")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Stretched",description:"A row can stretch its contents to take up the entire column height",code:e.stretchedCode},{default:i(()=>[t(f,{columns:3,divided:""},{default:i(()=>[t(h,{stretched:""},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("1")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("1")]),_:1}),t(v,null,{default:i(()=>[l("2")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("1")]),_:1}),t(v,null,{default:i(()=>[l("2")]),_:1}),t(v,null,{default:i(()=>[l("3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Padded",description:"A grid can preserve its vertical and horizontal gutters on first and last columns",code:e.paddedCode},{default:i(()=>[S("div",null,[t(_),t(f,{padded:"",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})])]),_:1},8,["code"]),t(d,{title:"Relaxed",description:"A grid can increase its gutters to allow for more negative space",code:e.relaxedCode},{default:i(()=>[t(f,{relaxed:"",columns:4},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Colored",description:"A row or column can be colored",code:e.coloredCode},{default:i(()=>[t(f,{padded:"",columns:5},{default:i(()=>[t(u,{color:"red"},{default:i(()=>[l("Red")]),_:1}),t(u,{color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(u,{color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(u,{color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(u,{color:"green"},{default:i(()=>[l("Green")]),_:1}),t(u,{color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(u,{color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(u,{color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(u,{color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(u,{color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(u,{color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(u,{color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(u,{color:"black"},{default:i(()=>[l("Black")]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Centered",description:"A grid can have its columns centered",code:e.centeredCode},{default:i(()=>[t(f,{centered:"",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(h,{centered:"",columns:4},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Text Alignment",description:"A grid, row, or column can specify its text alignment",code:e.textAlignCode},{default:i(()=>[t(f,{textAlign:"center",columns:3},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(k,{vertical:"",fluid:""},{default:i(()=>[t(C,{header:""},{default:i(()=>[l("Cats")]),_:1})]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(k,{vertical:"",fluid:""},{default:i(()=>[t(C,{header:""},{default:i(()=>[l("Dogs")]),_:1}),t(C,null,{default:i(()=>[l("Poodle")]),_:1}),t(C,null,{default:i(()=>[l("Cockerspaniel")]),_:1})]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(k,{vertical:"",fluid:""},{default:i(()=>[t(C,{header:""},{default:i(()=>[l("Monkeys")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Vertical Alignment",description:"A grid, row, or column can specify its vertical alignment to have all its columns vertically centered",code:e.verticalAlignCode},{default:i(()=>[t(f,{verticalAlign:"middle",columns:4,centered:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae}),S$,t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Responsive Variations")]),_:1}),t(d,{title:"Doubling",description:"A grid can double its column width on tablet and mobile sizes",code:e.doublingCode},{default:i(()=>[t(f,{doubling:"",columns:5},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ae})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"stackable",description:"A grid can have its columns stack on-top of each other after reaching mobile breakpoints",code:e.stackableCode},{default:i(()=>[t(f,{stackable:"",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Reversed",description:"A grid or row can specify that its columns should reverse order at different device sizes",code:e.reversedCode},{default:i(()=>[t(f,{reversed:"computer vertically"},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Computer Row 3")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Computer Row 2")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Computer Row 1")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Device Visibility",description:"A columns or row can appear only for a specific device, or screen sizes",code:e.deviceVisibilityCode},{default:i(()=>[t(f,null,{default:i(()=>[t(h,{only:"large screen",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Large Screen")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Large Screen")]),_:1})]),_:1})]),_:1}),t(h,{only:"widescreen",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Widescreen")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Widescreen")]),_:1})]),_:1})]),_:1}),t(h,{only:"mobile",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Mobile")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Mobile")]),_:1})]),_:1})]),_:1}),t(h,{columns:3},{default:i(()=>[t(u,{only:"computer"},{default:i(()=>[t(v,null,{default:i(()=>[l("Computer")]),_:1})]),_:1}),t(u,{only:"mobile"},{default:i(()=>[t(v,null,{default:i(()=>[l("Tablet and Mobile")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("All Sizes")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("All Sizes")]),_:1})]),_:1})]),_:1}),t(h,{only:"computer",columns:4},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Computer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Computer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Computer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Computer")]),_:1})]),_:1})]),_:1}),t(h,{only:"tablet",columns:3},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Tablet")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Tablet")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Tablet")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Responsive Width",description:"A column can specify a width for a specific device",code:e.responsiveWidthCode},{default:i(()=>[t(f,null,{default:i(()=>[t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const C$=we(y$,[["render",w$]]),A$="/vue-fomantic-ui/images/logo.png",k$=E({name:"MenuDoc",components:{DocPageHeader:Je,DocExample:He},setup(){return{menuCode:`<sui-menu>
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
</sui-menu>`}}}),x$=S("p",null,"Check out our new promotions",-1),$$=S("p",null,"Check out our collection of coupons",-1),B$=S("p",null,"Visit our rebate forum for information on claiming rebates",-1),T$=S("img",{src:A$},null,-1);function L$(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-menu-item"),u=y("sui-menu"),f=y("doc-example"),d=y("sui-input"),h=y("sui-menu-menu"),v=y("sui-label"),_=y("sui-button"),C=y("sui-dropdown-item"),k=y("sui-dropdown-menu"),B=y("sui-dropdown"),b=y("sui-icon"),w=y("sui-segment"),x=y("sui-container");return T(),ge("div",null,[t(m,{title:"Menu",sub:"A menu displays grouped navigation actions"}),t(x,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(f,{title:"Menu",description:"A menu",code:e.menuCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Editorials")]),_:1}),t(s,null,{default:i(()=>[l("Reviews")]),_:1}),t(s,null,{default:i(()=>[l("Upcoming Events")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Secondary Menu",description:"A menu can adjust its appearance to de-emphasize its contents",code:e.secondaryMenuCode},{default:i(()=>[t(u,{secondary:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[l("Home")]),_:1}),t(s,null,{default:i(()=>[l("Messages")]),_:1}),t(s,null,{default:i(()=>[l("Friends")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(s,null,{default:i(()=>[t(d,{icon:"search",placeholder:"Search..."})]),_:1}),t(s,null,{default:i(()=>[l("logout")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Pointing",description:"A menu can point to show its relationship to nearby content",code:e.pointingCode},{default:i(()=>[t(u,{pointing:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[l("Home")]),_:1}),t(s,null,{default:i(()=>[l("Messages")]),_:1}),t(s,null,{default:i(()=>[l("Friends")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(s,null,{default:i(()=>[t(d,{transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Tabular",description:"A menu can be formatted to show tabs of information",code:e.tabularCode},{default:i(()=>[t(u,{tabular:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[l("Bio")]),_:1}),t(s,null,{default:i(()=>[l("Photos")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Text",description:"A menu can be formatted for text content",code:e.textCode},{default:i(()=>[t(u,{text:""},{default:i(()=>[t(s,{header:""},{default:i(()=>[l("Sort By")]),_:1}),t(s,{active:""},{default:i(()=>[l("Closest")]),_:1}),t(s,null,{default:i(()=>[l("Most Comments")]),_:1}),t(s,null,{default:i(()=>[l("Most Popular")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Vertical Menu",description:"A vertical menu displays elements vertically",code:e.verticalMenuCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(s,{active:"",color:"teal"},{default:i(()=>[l(" Inbox "),t(v,{color:"teal",pointing:"left"},{default:i(()=>[l("1")]),_:1})]),_:1}),t(s,null,{default:i(()=>[l(" Spam "),t(v,null,{default:i(()=>[l("51")]),_:1})]),_:1}),t(s,null,{default:i(()=>[l(" Updates "),t(v,null,{default:i(()=>[l("1")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(d,{transparent:"",icon:"search",placeholder:"Search mail..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Pagination",description:"A pagination menu is specially formatted to present links to pages of content",code:e.paginationCode},{default:i(()=>[t(u,{pagination:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[l("1")]),_:1}),t(s,{disabled:""},{default:i(()=>[l("...")]),_:1}),t(s,null,{default:i(()=>[l("10")]),_:1}),t(s,null,{default:i(()=>[l("11")]),_:1}),t(s,null,{default:i(()=>[l("12")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(f,{title:"Header",description:"A menu item may include a header or may itself be a header",code:e.headerCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{header:""},{default:i(()=>[l("Our Company")]),_:1}),t(s,null,{default:i(()=>[l("About us")]),_:1}),t(s,null,{default:i(()=>[l("Jobs")]),_:1}),t(s,null,{default:i(()=>[l("Locations")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"textContentCode",description:"A vertical menu item can include any type of text content",code:e.textContentCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(s,null,{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[l("Promotions")]),_:1}),x$]),_:1}),t(s,null,{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[l("Coupons")]),_:1}),$$]),_:1}),t(s,null,{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[l("Rebates")]),_:1}),B$]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Input",description:"A menu item can contain an input inside of it",code:e.inputCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{as:"div"},{default:i(()=>[t(d,{icon:"search",placeholder:"Search..."})]),_:1}),t(s,{position:"right",as:"div"},{default:i(()=>[t(d,{placeholder:"Navigate to ..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Button",description:"A menu item can contain a button inside of it",code:e.buttonCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{as:"div"},{default:i(()=>[t(_,{color:"primary"},{default:i(()=>[l("Sign up")]),_:1})]),_:1}),t(s,{as:"div"},{default:i(()=>[t(_,null,{default:i(()=>[l("Log in")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Link Item",description:"A menu may contain a link item, or an item formatted as if it is a link",code:e.linkItemCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(s,{href:"https://google.com"},{default:i(()=>[l("Visit Google")]),_:1}),t(s,{link:"",as:"div"},{default:i(()=>[l("Javascript Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Dropdown Item",description:"An item may contain a nested menu in a dropdown",code:e.dropdownItemCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(B,{item:"",text:"Categories"},{default:i(()=>[t(k,null,{default:i(()=>[t(C,{text:"Electoronics"}),t(C,{text:"Automotive"}),t(C,{text:"Home"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Menu",description:"A menu may contain another menu group in the same level as menu items",code:e.menuContentCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Browse")]),_:1}),t(s,null,{default:i(()=>[l("Submit")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(s,null,{default:i(()=>[l("Sign up")]),_:1}),t(s,null,{default:i(()=>[l("Help")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Sub Menu",description:"A menu item may contain another menu nested inside that acts as a grouped sub-menu",code:e.subMenuCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(s,{as:"div"},{default:i(()=>[t(d,{placeholder:"Search..."})]),_:1}),t(s,{as:"div"},{default:i(()=>[l(" Home "),t(h,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Search")]),_:1}),t(s,null,{default:i(()=>[l("Add")]),_:1}),t(s,null,{default:i(()=>[l("Remove")]),_:1})]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(b,{name:"grid layout"}),l(" Browse ")]),_:1}),t(s,null,{default:i(()=>[l("Messages")]),_:1}),t(B,{item:"",text:"More"},{default:i(()=>[t(k,null,{default:i(()=>[t(C,{icon:"edit",text:"Edit Profile"}),t(C,{icon:"globe",text:"Choose Language"}),t(C,{icon:"settings",text:"Account Settings"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(f,{title:"Hover",description:"A menu item can be hovered",code:e.hoverCode},{default:i(()=>[t(u,{compact:""},{default:i(()=>[t(s,null,{default:i(()=>[l("A link")]),_:1}),t(s,{as:"div",link:""},{default:i(()=>[l("div Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Active",description:"A menu item can be active",code:e.activeCode},{default:i(()=>[t(u,{compact:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[l("Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(f,{title:"Stackable",description:"A menu can stack at mobile resolutions",code:e.stackableCode},{default:i(()=>[t(u,{stackable:""},{default:i(()=>[t(s,{as:"div"},{default:i(()=>[T$]),_:1}),t(s,null,{default:i(()=>[l("Features")]),_:1}),t(s,null,{default:i(()=>[l("Testimonials")]),_:1}),t(s,null,{default:i(()=>[l("Sign in")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Inverted",description:"A menu may have its colors inverted to show greater contrast",code:e.invertedCode},{default:i(()=>[t(u,{inverted:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[l("Home")]),_:1}),t(s,null,{default:i(()=>[l("Messages")]),_:1}),t(s,null,{default:i(()=>[l("Friends")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Colored",description:"Additional colors can be specified",code:e.coloredCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{active:"",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(s,{color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(s,{color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(s,{color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(s,{color:"green"},{default:i(()=>[l("Green")]),_:1}),t(s,{color:"teal"},{default:i(()=>[l("Teal")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Icons",description:"A menu may have just icons",code:e.iconsCode},{default:i(()=>[t(u,{icon:""},{default:i(()=>[t(s,null,{default:i(()=>[t(b,{name:"gamepad"})]),_:1}),t(s,null,{default:i(()=>[t(b,{name:"video camera"})]),_:1}),t(s,null,{default:i(()=>[t(b,{name:"video play"})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Labeled Icon",description:"A menu may have labeled icons",code:e.labeledIconCode},{default:i(()=>[t(u,{icon:"labeled"},{default:i(()=>[t(s,null,{default:i(()=>[t(b,{name:"gamepad"}),l(" Games ")]),_:1}),t(s,null,{default:i(()=>[t(b,{name:"video camera"}),l(" Channels ")]),_:1}),t(s,null,{default:i(()=>[t(b,{name:"video play"}),l(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Fluid",description:"A vertical menu may take the size of its container",code:e.fluidCode},{default:i(()=>[t(u,{fluid:"",vertical:""},{default:i(()=>[t(s,null,{default:i(()=>[l("Run")]),_:1}),t(s,null,{default:i(()=>[l("Walk")]),_:1}),t(s,null,{default:i(()=>[l("Bike")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Compact",description:"A menu can take up only the space necessary to fit its content",code:e.compactCode},{default:i(()=>[t(u,{compact:""},{default:i(()=>[t(s,null,{default:i(()=>[t(b,{name:"gamepad"}),l(" Games ")]),_:1}),t(s,null,{default:i(()=>[t(b,{name:"video camera"}),l(" Channels ")]),_:1}),t(s,null,{default:i(()=>[t(b,{name:"video play"}),l(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Evenly Divided",description:"A menu may divide its items evenly",code:e.evenlyDividedCode},{default:i(()=>[t(u,{fluid:"",widths:3},{default:i(()=>[t(s,null,{default:i(()=>[l("Buy")]),_:1}),t(s,null,{default:i(()=>[l("Sell")]),_:1}),t(s,null,{default:i(()=>[l("Rent")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Attached",description:"A menu may be attached to other content segments",code:e.attachedCode},{default:i(()=>[S("div",null,[t(u,{attached:"top",tabular:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[l("tab1")]),_:1}),t(s,null,{default:i(()=>[l("tab2")]),_:1})]),_:1}),t(w,{attached:"bottom"},{default:i(()=>[l(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. ")]),_:1})])]),_:1},8,["code"]),t(f,{title:"Size",description:"A menu can vary in size",code:e.sizeCode},{default:i(()=>[t(u,{size:"mini"},{default:i(()=>[t(s,{active:""},{default:i(()=>[l("Home")]),_:1}),t(s,null,{default:i(()=>[l("Messages")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(B,{item:"",text:"Language"},{default:i(()=>[t(k,null,{default:i(()=>[t(C,null,{default:i(()=>[l("English")]),_:1}),t(C,null,{default:i(()=>[l("Russian")]),_:1}),t(C,null,{default:i(()=>[l("Spanish")]),_:1})]),_:1})]),_:1}),t(s,{as:"div"},{default:i(()=>[t(_,{color:"primary"},{default:i(()=>[l("Sign up")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Fitted",description:"A menu item or menu can remove element padding, vertically or horizontally",code:e.fittedCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{fitted:""},{default:i(()=>[l("No padding whatsoever")]),_:1}),t(s,{fitted:"horizontally"},{default:i(()=>[l("No horizontal padding")]),_:1}),t(s,{fitted:"vertically"},{default:i(()=>[l("No vertical padding")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Borderless",description:"A menu item or menu can have no borders",code:e.borderlessCode},{default:i(()=>[t(u,{borderless:""},{default:i(()=>[t(s,null,{default:i(()=>[l("1")]),_:1}),t(s,null,{default:i(()=>[l("2")]),_:1}),t(s,null,{default:i(()=>[l("3")]),_:1}),t(s,null,{default:i(()=>[l("4")]),_:1}),t(s,null,{default:i(()=>[l("5")]),_:1}),t(s,null,{default:i(()=>[l("6")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const D$=we(k$,[["render",L$]]),I$=E({name:"MessageDoc",components:{DocPageHeader:Je,DocExample:He},setup(){return{messageCode:`<sui-message>
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
</div>`}}}),E$=S("p",null,"We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.",-1),R$=S("p",null,"Get the best news in your e-mail every day.",-1),z$=S("p",null,"You can't see me",-1),P$=S("p",null,"You can always see me",-1),F$=S("p",null,"Way to go!",-1),M$=S("p",null,"Get all the best inventions in your e-mail every day. Sign up now!",-1),V$=S("a",{href:"#"},"Login here",-1),H$=S("p",null,[l("Go to your "),S("b",null,"special offers"),l(" page to see now.")],-1),N$=S("p",null,"That offer has expired",-1);function O$(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-message-header"),u=y("sui-message"),f=y("doc-example"),d=y("sui-message-item"),h=y("sui-message-list"),v=y("sui-icon"),_=y("sui-message-content"),C=y("sui-form-field"),k=y("sui-form-group"),B=y("sui-button"),b=y("sui-form"),w=y("sui-container");return T(),ge("div",null,[t(m,{title:"Message",sub:"A message displays information that explains nearby content"}),t(w,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(f,{title:"Message",description:"A basic message",code:e.messageCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Changes in Service")]),_:1}),E$]),_:1})]),_:1},8,["code"]),t(f,{title:"List Message",description:"A message with a list",code:e.listMessageCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("New Site Features")]),_:1}),t(h,null,{default:i(()=>[t(d,null,{default:i(()=>[l("You can now have cover images on blog pages")]),_:1}),t(d,null,{default:i(()=>[l("Drafts will now auto-save while writing")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Icon Message",description:"A message can contain an icon",code:e.iconMessageCode},{default:i(()=>[t(u,{icon:""},{default:i(()=>[t(v,{name:"inbox"}),t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[l(" Have you heard about our mailing list? ")]),_:1}),R$]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(f,{title:"Hidden",description:"A message can be hidden",code:e.hiddenCode},{default:i(()=>[t(u,{hidden:""},{default:i(()=>[z$]),_:1})]),_:1},8,["code"]),t(f,{title:"Visible",description:"A message can be set to visible to force itself to be shown",code:e.visibleCode},{default:i(()=>[t(u,{visible:""},{default:i(()=>[P$]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(f,{title:"Floating",description:"A message can float above content that it is related to",code:e.floatingCode},{default:i(()=>[t(u,{floating:""},{default:i(()=>[F$]),_:1})]),_:1},8,["code"]),t(f,{title:"Compact",description:"A message can only take up the width of its content",code:e.compactCode},{default:i(()=>[t(u,{compact:""},{default:i(()=>[M$]),_:1})]),_:1},8,["code"]),t(f,{title:"Attached",description:"A message can be formatted to attach itself to other content",code:e.attachedCode},{default:i(()=>[S("div",null,[t(u,{attached:"",header:"Welcome to our site!",content:"Fill out the form below to sign-up for a new account"}),t(b,{class:"attached fluid segment"},{default:i(()=>[t(k,{widths:"equal"},{default:i(()=>[t(C,{label:"First Name",placeholder:"First Name"}),t(C,{label:"Last Name",placeholder:"Last Name"})]),_:1}),t(C,{label:"Username",placeholder:"Username"}),t(C,{label:"Password",placeholder:"Password"}),t(B,{color:"primary"},{default:i(()=>[l("Submit")]),_:1})]),_:1}),t(u,{attached:"bottom",warning:""},{default:i(()=>[t(v,{name:"help"}),l(" Already signed up? "),V$,l(" instead. ")]),_:1})])]),_:1},8,["code"]),t(f,{title:"Warning",description:"A message may be formatted to display warning messages",code:e.warningCode},{default:i(()=>[t(u,{warning:""},{default:i(()=>[t(v,{name:"close"}),t(s,null,{default:i(()=>[l(" You must register before you can do that! ")]),_:1}),l(" Visit our registration page, then try again ")]),_:1})]),_:1},8,["code"]),t(f,{title:"Info",description:"A message may be formatted to display information",code:e.infoCode},{default:i(()=>[t(u,{info:""},{default:i(()=>[t(s,null,{default:i(()=>[l("Was this what you wanted?")]),_:1}),t(h,null,{default:i(()=>[l("It's good to see you again.")]),_:1}),t(h,null,{default:i(()=>[l("Did you know it's been a while?")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Positive / Success",description:"A message may be formatted to display a positive message",code:e.positiveSuccessCode},{default:i(()=>[t(u,{positive:""},{default:i(()=>[t(s,null,{default:i(()=>[l("You are eligible for a reward")]),_:1}),H$]),_:1})]),_:1},8,["code"]),t(f,{title:"Negative / Error",description:"A message may be formatted to display a negative message",code:e.negativeErrorCode},{default:i(()=>[t(u,{negative:""},{default:i(()=>[t(v,{name:"close"}),t(s,null,{default:i(()=>[l("We're sorry we can't apply that discount")]),_:1}),N$]),_:1})]),_:1},8,["code"]),t(f,{title:"Colored",description:"A message can be formatted to be different colors",code:e.coloredCode},{default:i(()=>[S("div",null,[t(u,{color:"red"},{default:i(()=>[l("Red")]),_:1}),t(u,{color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(u,{color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(u,{color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(u,{color:"green"},{default:i(()=>[l("Green")]),_:1}),t(u,{color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(u,{color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(u,{color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(u,{color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(u,{color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(u,{color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(u,{color:"black"},{default:i(()=>[l("Black")]),_:1})])]),_:1},8,["code"]),t(f,{title:"Size",description:"A message can have different sizes",code:e.sizeCode},{default:i(()=>[S("div",null,[t(u,{size:"mini"},{default:i(()=>[l("This is a mini message.")]),_:1}),t(u,{size:"large"},{default:i(()=>[l("This is a large message.")]),_:1}),t(u,{size:"massive"},{default:i(()=>[l("This is a massive message.")]),_:1})])]),_:1},8,["code"])]),_:1})])}const j$=we(I$,[["render",O$]]),G$=E({name:"TableDoc",components:{DocPageHeader:Je,DocExample:He},setup(){return{tableCode:`<sui-table celled>
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
</sui-table>`}}}),q$=S("a",{href:"#"},"Edit",-1),U$=S("a",{href:"#"},"Edit",-1),Y$=S("a",{href:"#"},"Edit",-1),J$=S("br",null,null,-1),W$=S("br",null,null,-1),K$=S("br",null,null,-1),X$=S("br",null,null,-1),Q$=S("br",null,null,-1),Z$=S("br",null,null,-1),eB=S("br",null,null,-1);function tB(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-table-header-cell"),u=y("sui-table-row"),f=y("sui-table-header"),d=y("sui-table-cell"),h=y("sui-table-body"),v=y("sui-table"),_=y("doc-example"),C=y("sui-icon"),k=y("sui-table-footer"),B=y("sui-container");return T(),ge("div",null,[t(m,{title:"Table",sub:"A table displays a collections of data grouped into rows"}),t(B,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(_,{title:"Table",description:"A standard table",code:e.tableCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Age")]),_:1}),t(s,null,{default:i(()=>[l("Job")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("James")]),_:1}),t(d,null,{default:i(()=>[l("24")]),_:1}),t(d,null,{default:i(()=>[l("Engineer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jill")]),_:1}),t(d,null,{default:i(()=>[l("26")]),_:1}),t(d,null,{default:i(()=>[l("Engineer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Elyse")]),_:1}),t(d,null,{default:i(()=>[l("24")]),_:1}),t(d,null,{default:i(()=>[l("Designer")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Definition",description:"A table may be formatted to emphasize a first column that defines a rows content",code:e.definitionCode},{default:i(()=>[t(v,{definition:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s),t(s,null,{default:i(()=>[l("Arguments")]),_:1}),t(s,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("reset rating")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1}),t(d,null,{default:i(()=>[l("Resets rating to default value")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("set rating")]),_:1}),t(d,null,{default:i(()=>[l("rating (integer)")]),_:1}),t(d,null,{default:i(()=>[l("Sets the current star rating to specified value")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Structured",description:"A table can be formatted to display complex structured data",code:e.structuredCode},{default:i(()=>[t(v,{structured:"",celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{rowspan:"2"},{default:i(()=>[l("Name")]),_:1}),t(s,{rowspan:"2"},{default:i(()=>[l("Type")]),_:1}),t(s,{rowspan:"2"},{default:i(()=>[l("Files")]),_:1}),t(s,{colspan:"3"},{default:i(()=>[l("Languages")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Ruby")]),_:1}),t(s,null,{default:i(()=>[l("Javascript")]),_:1}),t(s,null,{default:i(()=>[l("Python")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Alpha Team")]),_:1}),t(d,null,{default:i(()=>[l("Project 1")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[l("2")]),_:1}),t(d,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(d),t(d)]),_:1}),t(u,null,{default:i(()=>[t(d,{rowspan:"3"},{default:i(()=>[l("Beta Team")]),_:1}),t(d,null,{default:i(()=>[l("Project 1")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[l("52")]),_:1}),t(d,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(d),t(d)]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Project 2")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[l("12")]),_:1}),t(d),t(d,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(d)]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Project 3")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[l("21")]),_:1}),t(d,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(d),t(d)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(_,{title:"Positive / Negative",description:"A cell or row may let a user know whether a value is good or bad",code:e.positiveNegativeCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("No Name Specified")]),_:1}),t(d,null,{default:i(()=>[l("Unknown")]),_:1}),t(d,{negative:""},{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,{positive:""},{default:i(()=>[t(d,null,{default:i(()=>[l("Jimmy")]),_:1}),t(d,null,{default:i(()=>[t(C,{name:"checkmark"}),l(" Approved ")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Unknown")]),_:1}),t(d,{positive:""},{default:i(()=>[t(C,{name:"close"}),l(" Requires call ")]),_:1})]),_:1}),t(u,{negative:""},{default:i(()=>[t(d,null,{default:i(()=>[l("Jill")]),_:1}),t(d,null,{default:i(()=>[l("Unknown")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Error",description:"A cell or row may call attention to an error or a negative value",code:e.errorCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("No Name Specified")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,{error:""},{default:i(()=>[t(d,null,{default:i(()=>[l("Jimmy")]),_:1}),t(d,null,{default:i(()=>[l("Cannot pull data")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,{error:""},{default:i(()=>[t(C,{name:"attention"}),l(" Requires call ")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jill")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Warning",description:"A cell or row may warn a user",code:e.warningCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("No Name Specified")]),_:1}),t(d,null,{default:i(()=>[l("Unknown")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,{warning:""},{default:i(()=>[t(d,null,{default:i(()=>[l("Jimmy")]),_:1}),t(d,null,{default:i(()=>[t(C,{name:"attention"}),l(" Requires Action ")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Unknown")]),_:1}),t(d,{warning:""},{default:i(()=>[t(C,{name:"attention"}),l(" Hostile ")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jill")]),_:1}),t(d,null,{default:i(()=>[l("Unknown")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Active",description:"A cell or row can be active or selected by a user",code:e.activeCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("No Name Specified")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,{active:""},{default:i(()=>[t(d,null,{default:i(()=>[l("Jimmy")]),_:1}),t(d,null,{default:i(()=>[l("Selected")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,{active:""},{default:i(()=>[l("Jill")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Disabled",description:"A cell can be disabled",code:e.disabledCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{disabled:""},{default:i(()=>[t(d,null,{default:i(()=>[l("No Name Specified")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jimmy")]),_:1}),t(d,null,{default:i(()=>[l("Selected")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,{disabled:""},{default:i(()=>[l("Jill")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Colored Cells",description:"A cell can be styled by the central color palette colors",code:e.coloredCellsCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,{color:"orange"},{default:i(()=>[l("No Name Specified")]),_:1}),t(d,null,{default:i(()=>[l("Unknown")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,{color:"blue"},{default:i(()=>[t(d,null,{default:i(()=>[l("Jimmy")]),_:1}),t(d,null,{default:i(()=>[t(C,{name:"microphone"}),l(" Recording session ")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Unknown")]),_:1}),t(d,{color:"pink"},{default:i(()=>[t(C,{name:"child"}),l(" Baby Party ")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jill")]),_:1}),t(d,null,{default:i(()=>[l("Unknown")]),_:1}),t(d,{color:"green"},{default:i(()=>[l("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Marked",description:"A cell or row can be marked by a colored left or right border",code:e.markedCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,{marked:"right",color:"blue"},{default:i(()=>[l("No Name Specified")]),_:1}),t(d,{marked:"left",color:"red"},{default:i(()=>[l("Unknown")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,{marked:"left",color:"green"},{default:i(()=>[l("Jimmy")]),_:1}),t(d,null,{default:i(()=>[t(C,{name:"microphone"}),l(" Recording session ")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Unknown")]),_:1}),t(d,{marked:"left",color:"orange"},{default:i(()=>[t(C,{name:"child"}),l(" Baby Party ")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jill")]),_:1}),t(d,null,{default:i(()=>[l("Unknown")]),_:1}),t(d,{marked:"right",color:"purple"},{default:i(()=>[l("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(_,{title:"Single Line",description:"A table can specify that its cell contents should remain on a single line, and not wrap",code:e.singleLineCode},{default:i(()=>[t(v,{"single-line":""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Registration Date")]),_:1}),t(s,null,{default:i(()=>[l("E-mail address")]),_:1}),t(s,null,{default:i(()=>[l("Premium Plan")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John Lilki")]),_:1}),t(d,null,{default:i(()=>[l("September 14, 2013")]),_:1}),t(d,null,{default:i(()=>[l("jhlilk22@yahoo.com")]),_:1}),t(d,null,{default:i(()=>[l("No")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie Harington")]),_:1}),t(d,null,{default:i(()=>[l("January 11, 2014")]),_:1}),t(d,null,{default:i(()=>[l("jamieharingonton@yahoo.com")]),_:1}),t(d,null,{default:i(()=>[l("Yes")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jill Lewis")]),_:1}),t(d,null,{default:i(()=>[l("May 11, 2014")]),_:1}),t(d,null,{default:i(()=>[l("jilsewris22@yahoo.com")]),_:1}),t(d,null,{default:i(()=>[l("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Fixed",description:"A table can use `table-layout: fixed` a special faster form of table rendering that does not resize table cells based on content",code:e.fixedCode},{default:i(()=>[t(v,{fixed:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jimmy")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Denied")]),_:1}),t(d,null,{default:i(()=>[l("Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Stacking",descirption:"A table can specify how it stacks table content responsively",code:e.stackingCode},{default:i(()=>[t(v,{stackable:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jimmy")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Denied")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Selectable Row",description:"A table can have its rows appear selectable",code:e.selectableRowCode},{default:i(()=>[t(v,{selectable:"",celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,{positive:""},{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,{warning:""},{default:i(()=>[t(d,null,{default:i(()=>[l("Jimmy")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,{negative:""},{default:i(()=>[l("Denied")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Selectable Cell",description:"A table cell can be selectable",code:e.selectableCellCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,{positive:""},{default:i(()=>[l("Approved")]),_:1}),t(d,{selectable:""},{default:i(()=>[q$]),_:1})]),_:1}),t(u,{warning:""},{default:i(()=>[t(d,null,{default:i(()=>[l("Jimmy")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,{selectable:""},{default:i(()=>[U$]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,{negative:""},{default:i(()=>[l("Denied")]),_:1}),t(d,{selectable:""},{default:i(()=>[Y$]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Verical Alignment",description:"A table header, row, or cell can adjust its vertical alignment",code:e.verticalAlignmentCode},{default:i(()=>[t(v,{striped:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{verticalAlign:"top"},{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,{verticalAlign:"top"},{default:i(()=>[l(" Notes "),J$,l(" 1"),W$,l(" 2"),K$]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,{verticalAlign:"bottom"},{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l(" Notes "),X$,l(" 1"),Q$,l(" 2"),Z$]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Text Alignment",description:"A table header, row, or cell can adjust its text alignment",code:e.textAlignCode},{default:i(()=>[t(v,{striped:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,{textAlign:"right"},{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{textAlign:"center"},{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Striped",description:"A table can stripe alternate rows of content with a darker color to increase contrast",code:e.stripedCode},{default:i(()=>[t(v,{striped:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Date Joined")]),_:1}),t(s,null,{default:i(()=>[l("E-mail")]),_:1}),t(s,null,{default:i(()=>[l("Called")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John Lilki")]),_:1}),t(d,null,{default:i(()=>[l("September 14, 2013")]),_:1}),t(d,null,{default:i(()=>[l("jhlilk22@yahoo.com")]),_:1}),t(d,null,{default:i(()=>[l("No")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie Harington")]),_:1}),t(d,null,{default:i(()=>[l("January 11, 2014")]),_:1}),t(d,null,{default:i(()=>[l("jamieharingonton@yahoo.com")]),_:1}),t(d,null,{default:i(()=>[l("Yes")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jill Lewis")]),_:1}),t(d,null,{default:i(()=>[l("May 11, 2014")]),_:1}),t(d,null,{default:i(()=>[l("jilsewris22@yahoo.com")]),_:1}),t(d,null,{default:i(()=>[l("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Celled",description:"A table may be divided each row into separate cells",code:e.celledCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jill")]),_:1}),t(d,null,{default:i(()=>[l("Denied")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1}),t(k,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("3 People")]),_:1}),t(d,null,{default:i(()=>[l("2 Approved")]),_:1}),t(d)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Basic",description:"A table can reduce its complexity to increase readability",code:e.basicCode},{default:i(()=>[S("div",null,[t(v,{basic:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jill")]),_:1}),t(d,null,{default:i(()=>[l("Denied")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1}),eB,t(v,{basic:"very"},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jill")]),_:1}),t(d,null,{default:i(()=>[l("Denied")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(_,{title:"Collapsing",description:"A table can be collapsing, taking up only as much space as its rows",code:e.collapsingCode},{default:i(()=>[t(v,{collapsing:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Age")]),_:1}),t(s,null,{default:i(()=>[l("Gender")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("27")]),_:1}),t(d,null,{default:i(()=>[l("Male")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("32")]),_:1}),t(d,null,{default:i(()=>[l("Other")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jill")]),_:1}),t(d,null,{default:i(()=>[l("Denied")]),_:1}),t(d,null,{default:i(()=>[l("22")]),_:1}),t(d,null,{default:i(()=>[l("Other")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1}),t(k,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("3 People")]),_:1}),t(s,null,{default:i(()=>[l("2 Approved")]),_:1}),t(s),t(s),t(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Collapsing Cell",description:"A cell can be collapsing so that it only uses as much space as required",code:e.collapsingCellCode},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,{collapsing:""},{default:i(()=>[t(C,{name:"folder"}),l(" node_modules ")]),_:1}),t(d,null,{default:i(()=>[l("Initial commit")]),_:1}),t(d,null,{default:i(()=>[l("10 hours ago")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,{collapsing:""},{default:i(()=>[t(C,{name:"folder"}),l(" node_modules ")]),_:1}),t(d,null,{default:i(()=>[l("Initial commit")]),_:1}),t(d,null,{default:i(()=>[l("10 hours ago")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,{collapsing:""},{default:i(()=>[t(C,{name:"folder"}),l(" node_modules ")]),_:1}),t(d,null,{default:i(()=>[l("Initial commit")]),_:1}),t(d,null,{default:i(()=>[l("10 hours ago")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Column Count",description:"A table can specify its column count to divide its content evenly",code:e.columnCountCode},{default:i(()=>[t(v,{columns:5},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Age")]),_:1}),t(s,null,{default:i(()=>[l("Gender")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("27")]),_:1}),t(d,null,{default:i(()=>[l("Male")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("32")]),_:1}),t(d,null,{default:i(()=>[l("Other")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jill")]),_:1}),t(d,null,{default:i(()=>[l("Denied")]),_:1}),t(d,null,{default:i(()=>[l("22")]),_:1}),t(d,null,{default:i(()=>[l("Other")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1}),t(k,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("3 People")]),_:1}),t(s,null,{default:i(()=>[l("2 Approved")]),_:1}),t(s),t(s),t(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Column Width",description:"Column Width",code:e.columnWidthCode},{default:i(()=>[t(v,null,{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{width:10},{default:i(()=>[l("Name")]),_:1}),t(s,{width:6},{default:i(()=>[l("Status")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Colored",description:"A table can be given a color to distinguish it from other tables",code:e.coloredCode},{default:i(()=>[t(v,{color:"red"},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Food")]),_:1}),t(s,null,{default:i(()=>[l("Calories")]),_:1}),t(s,null,{default:i(()=>[l("Protein")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Apples")]),_:1}),t(d,null,{default:i(()=>[l("200")]),_:1}),t(d,null,{default:i(()=>[l("0g")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Orange")]),_:1}),t(d,null,{default:i(()=>[l("310")]),_:1}),t(d,null,{default:i(()=>[l("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Inverted",description:"A table's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Food")]),_:1}),t(s,null,{default:i(()=>[l("Calories")]),_:1}),t(s,null,{default:i(()=>[l("Protein")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Apples")]),_:1}),t(d,null,{default:i(()=>[l("200")]),_:1}),t(d,null,{default:i(()=>[l("0g")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Orange")]),_:1}),t(d,null,{default:i(()=>[l("310")]),_:1}),t(d,null,{default:i(()=>[l("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Padded",description:"A table may sometimes need to be more padded for legibility",code:e.paddedCode},{default:i(()=>[S("div",null,[t(v,{padded:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{padded:"very"},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(_,{title:"Compact",description:"A table may sometimes need to be more compact to make more rows visible at a time",code:e.compactCode},{default:i(()=>[S("div",null,[t(v,{compact:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{compact:"very"},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(_,{title:"Size",description:"A table can also be small or large",code:e.sizeCode},{default:i(()=>[t(v,{size:"small"},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[l("Name")]),_:1}),t(s,null,{default:i(()=>[l("Status")]),_:1}),t(s,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("John")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jamie")]),_:1}),t(d,null,{default:i(()=>[l("Approved")]),_:1}),t(d,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Jill")]),_:1}),t(d,null,{default:i(()=>[l("Denied")]),_:1}),t(d,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const iB=we(G$,[["render",tB]]),aB=E({name:"AdvertisementDoc",components:{DocPageHeader:Je,DocExample:He},setup(){return{adCode:`<sui-advertisement unit="medium rectangle">
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
</div>`,panoramaCode:'<sui-advertisement unit="panorama" test="Panorama" />',netboardCode:'<sui-advertisement unit="netboard" test="Netboard" />',centeredCode:'<sui-advertisement centered unit="banner" test="Centered" /> ',testCode:'<sui-advertisement unit="medium rectangle" test="Ad Unit 1" />'}}}),lB=S("img",{src:ae},null,-1),nB=S("br",null,null,-1);function oB(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-advertisement"),u=y("doc-example"),f=y("sui-container");return T(),ge("div",null,[t(m,{title:"Advertisement",sub:"An ad displays third-party promotional content"}),t(f,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"Ad",description:"A standard ad",code:e.adCode},{default:i(()=>[t(s,{unit:"medium rectangle"},{default:i(()=>[lB]),_:1})]),_:1},8,["code"]),t(u,{title:"Common Units",description:"An advertisement can appear in common ad unit sizes",code:e.commonUnitsCode},{default:i(()=>[S("div",null,[t(s,{unit:"medium rectangle",test:"Medium Rectangle"}),t(s,{unit:"banner",test:"Banner"}),t(s,{unit:"leaderboard",test:"Leaderboard"}),t(s,{unit:"large rectangle",test:"Large Rectangle"}),t(s,{unit:"half page",test:"Half Page"})])]),_:1},8,["code"]),t(u,{title:"Mobile",description:"An ad can use common mobile ad sizes",code:e.mobileCode},{default:i(()=>[S("div",null,[t(s,{unit:"mobile banner",test:"Mobile Banner"}),t(s,{unit:"mobile leaderboard",test:"Mobile Leaderboard"})])]),_:1},8,["code"]),t(u,{title:"Rectangle",description:"An ad can use a common rectangle ad unit size",code:e.rectangleCode},{default:i(()=>[t(s,{unit:"medium rectangle",test:"Medium Rectangle"})]),_:1},8,["code"]),t(u,{title:"Button",description:"An ad can use button ad unit size",code:e.buttonCode},{default:i(()=>[S("div",null,[t(s,{unit:"button",test:"Button"}),t(s,{unit:"square button",test:"Square Button"}),t(s,{unit:"small button",test:"Small Button"})])]),_:1},8,["code"]),t(u,{title:"Skyscraper",description:"An ad can use skyscraper ad unit size",code:e.skyscraperCode},{default:i(()=>[S("div",null,[t(s,{unit:"skyscraper",test:"Skyscraper"}),nB,t(s,{unit:"wide skyscraper",test:"Wide Skyscraper"})])]),_:1},8,["code"]),t(u,{title:"Banner",description:"An ad can use banner ad unit size",code:e.bannerCode},{default:i(()=>[S("div",null,[t(s,{unit:"banner",test:"Banner"}),t(s,{unit:"vertical banner",test:"Vertical Banner"}),t(s,{unit:"top banner",test:"Top Banner"}),t(s,{unit:"half banner",test:"Half Banner"})])]),_:1},8,["code"]),t(u,{title:"Leaderboard",description:"An ad can use leaderboard ad unit size",code:e.leaderboardCode},{default:i(()=>[S("div",null,[t(s,{unit:"leaderboard",test:"Leaderboard"}),t(s,{unit:"large leaderboard",test:"Large Leaderboard"}),t(s,{unit:"billboard",test:"Billboard"})])]),_:1},8,["code"]),t(u,{title:"Panorama",description:"An ad can use panorama ad unit size",code:e.panoramaCode},{default:i(()=>[t(s,{unit:"panorama",test:"Panorama"})]),_:1},8,["code"]),t(u,{title:"Netboard",description:"An ad can use netboard ad unit size",code:e.netboardCode},{default:i(()=>[t(s,{unit:"netboard",test:"Netboard"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(u,{title:"Centered",description:"An advertisement can appear centered",code:e.centeredCode},{default:i(()=>[t(s,{centered:"",unit:"banner",test:"Centered"})]),_:1},8,["code"]),t(u,{title:"Test",description:"A advertisement can be formatted to help verify placement",code:e.testCode},{default:i(()=>[t(s,{unit:"medium rectangle",test:"Ad Unit 1"})]),_:1},8,["code"])]),_:1})])}const sB=we(aB,[["render",oB]]),xc="/vue-fomantic-ui/images/avatar/large/kristy.png",rB="/vue-fomantic-ui/images/avatar/large/daniel.jpg",Jn="/vue-fomantic-ui/images/avatar/large/helen.jpg",Wn="/vue-fomantic-ui/images/avatar/large/elliot.jpg",Kn="/vue-fomantic-ui/images/avatar/large/elyse.png",uB="/vue-fomantic-ui/images/avatar/large/matthew.png",cB="/vue-fomantic-ui/images/avatar/large/molly.png",$c="/vue-fomantic-ui/images/avatar/large/jenny.jpg",Bc="/vue-fomantic-ui/images/avatar/large/veronika.jpg",Tc="/vue-fomantic-ui/images/avatar/large/steve.jpg",dB=E({name:"CardDoc",components:{DocPageHeader:Je,DocExample:He},setup(){return{cardCode:`<sui-card>
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
</sui-card-group>`}}}),mB=S("span",{class:"date"},"Joined in 2013",-1),pB=S("a",null,"Elliot Fu",-1),fB=S("a",null,"Jenny Hess",-1),gB=S("a",null,"Stevie Feliciano",-1),hB=S("a",null,"Administrator",-1),_B=S("a",null,"Helen Troy",-1),bB=S("span",{class:"date"},"Joined in 2013",-1),vB=S("span",null,"2 days ago",-1),yB=S("a",null,"Animals",-1),SB=S("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),wB=S("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),CB=S("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),AB=S("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),kB=S("span",{class:"category"},"Animals",-1),xB=S("span",{class:"category"},"Animals",-1),$B=S("div",{class:"right floated author"},[S("img",{class:"ui avatar image",src:An}),l(" Matt ")],-1),BB=S("span",{class:"category"},"Animals",-1),TB=S("div",{class:"right floated author"},[S("img",{class:"ui avatar image",src:An}),l(" Matt ")],-1),LB=S("p",null,"Jenny is a student studying Media Management at the New School",-1),DB=S("div",{class:"center aligned author"},[S("img",{class:"ui avatar image",src:Cn}),l(" Jenny ")],-1),IB=S("a",null,"Friends",-1),EB=S("span",{class:"right floated"}," Joined in 2013 ",-1),RB=S("a",null,[S("i",{class:"user icon"}),l(" 75 Friends ")],-1),zB=S("a",null,"Coworker",-1),PB=S("span",{class:"right floated"}," Joined in 2011 ",-1),FB=S("a",null,[S("i",{class:"user icon"}),l(" 35 Friends ")],-1),MB=S("a",null,"Coworker",-1),VB=S("span",{class:"right floated"}," Joined in 2014 ",-1),HB=S("a",null,[S("i",{class:"user icon"}),l(" 151 Friends ")],-1);function NB(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-image"),u=y("sui-card-header"),f=y("sui-card-meta"),d=y("sui-card-description"),h=y("sui-card-content"),v=y("sui-icon"),_=y("sui-card"),C=y("doc-example"),k=y("sui-button"),B=y("sui-button-group"),b=y("sui-card-group"),w=y("sui-feed-summary"),x=y("sui-feed-content"),$=y("sui-feed-event"),D=y("sui-feed"),F=y("sui-grid-column"),V=y("sui-grid"),z=y("sui-segment"),j=y("sui-container");return T(),ge("div",null,[t(m,{title:"Card",sub:"A card displays site content in a manner similar to a playing card"}),t(j,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(C,{title:"Card",description:"A single card",code:e.cardCode},{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:xc,wrapped:""}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Kristy")]),_:1}),t(f,null,{default:i(()=>[mB]),_:1}),t(d,null,{default:i(()=>[l(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[S("a",null,[t(v,{name:"user"}),l(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Cards",description:"A group of cards",code:e.cardsCode},{default:i(()=>[t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(s,{src:ei,floated:"right",size:"mini"}),t(u,null,{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[l("Friends of Veronika")]),_:1}),t(d,null,{default:i(()=>[l("Elliot requested permission to view your contact details")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(B,{widths:2},{default:i(()=>[t(k,{basic:"",color:"green"},{default:i(()=>[l("Approve")]),_:1}),t(k,{basic:"",color:"red"},{default:i(()=>[l("Decline")]),_:1})]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(s,{src:Cn,floated:"right",size:"mini"}),t(u,null,{default:i(()=>[l("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[l("New Member")]),_:1}),t(d,null,{default:i(()=>[l("Jenny wants to add you to the group best friends")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(B,{widths:2},{default:i(()=>[t(k,{basic:"",color:"green"},{default:i(()=>[l("Approve")]),_:1}),t(k,{basic:"",color:"red"},{default:i(()=>[l("Decline")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(C,{title:"Content Block",description:"A card can contain blocks of content",code:e.contentBlockCode},{default:i(()=>[t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Project Timeline")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(p,{sub:""},{default:i(()=>[l("Activity")]),_:1}),t(D,{size:"small"},{default:i(()=>[t($,null,{default:i(()=>[t(x,null,{default:i(()=>[t(w,null,{default:i(()=>[pB,l(" added "),fB,l(" to the project ")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[t(x,null,{default:i(()=>[t(w,null,{default:i(()=>[gB,l(" was added as an "),hB]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[t(x,null,{default:i(()=>[t(w,null,{default:i(()=>[_B,l(" added two pictures ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(k,{as:"button"},{default:i(()=>[l("Join Project")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Image",description:"A card can contain an image",code:e.imageCode},{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:xc,wrapped:""}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Kristy")]),_:1}),t(f,null,{default:i(()=>[bB]),_:1}),t(d,null,{default:i(()=>[l(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[S("a",null,[t(v,{name:"user"}),l(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Header",description:"A card can contain a header",code:e.headerCode},{default:i(()=>[t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[l("Friend")]),_:1}),t(d,null,{default:i(()=>[l(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Veronika Ossi")]),_:1}),t(f,null,{default:i(()=>[l("Friend")]),_:1}),t(d,null,{default:i(()=>[l(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[l("Friend")]),_:1}),t(d,null,{default:i(()=>[l(" Jenny is a student studying Media Management at the New School ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Metadata",description:"A card can contain content metadata",code:e.metadataCode},{default:i(()=>[t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[vB,yB]),_:1}),t(d,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Buttons",description:"A card can contain buttons",code:e.buttonsCode},{default:i(()=>[t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elliot Fu")]),_:1}),t(d,null,{default:i(()=>[l(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1}),t(k,{attached:"bottom"},{default:i(()=>[t(v,{name:"add"}),l(" Add Friend ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Veronika Ossi")]),_:1}),t(d,null,{default:i(()=>[l(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1}),t(k,{attached:"bottom"},{default:i(()=>[t(v,{name:"add"}),l(" Add Friend ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Description",description:"A card can contain a description with one or more paragraphs",code:e.descriptionCode},{default:i(()=>[t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[l("2 days ago")]),_:1}),t(d,null,{default:i(()=>[SB,wB]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Extra Content",description:"A card can contain extra content meant to be formatted separately from the main content",code:e.extraContentCode},{default:i(()=>[t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[l("2 days ago")]),_:1}),t(d,null,{default:i(()=>[CB,AB]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(v,{name:"check"}),l(" 121 Votes ")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(C,{title:"Fluid Card",description:"A fluid card takes up the width of its container",code:e.fluidCardCode},{default:i(()=>[t(V,{columns:3},{default:i(()=>[t(F,null,{default:i(()=>[t(_,{fluid:""},{default:i(()=>[t(s,{src:rB}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Daniel Louise")]),_:1})]),_:1})]),_:1})]),_:1}),t(F,null,{default:i(()=>[t(_,{fluid:""},{default:i(()=>[t(s,{src:Jn}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Helen Troy")]),_:1})]),_:1})]),_:1})]),_:1}),t(F,null,{default:i(()=>[t(_,{fluid:""},{default:i(()=>[t(s,{src:Wn}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Centered Card",description:"A card can center itself inside its container",code:e.centeredCardCode},{default:i(()=>[t(_,{centered:""},{default:i(()=>[t(s,{src:Kn}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elyse")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Horizontal Cards",description:"A card can display horizontally",code:e.horizontalCardsCode},{default:i(()=>[t(_,{horizontal:""},{default:i(()=>[t(s,{src:Kn}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[kB]),_:1}),t(d,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Raised Card",description:"A card may be formatted to raise above the page",code:e.raisedCode},{default:i(()=>[t(_,{raised:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[xB]),_:1}),t(d,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[$B]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Link Card",description:"A card can be formatted so that the entire contents link to another page",code:e.linkCardCode},{default:i(()=>[t(_,{href:"#",raised:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[BB]),_:1}),t(d,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[TB]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Text Alignment",description:"Any element inside a card can have its text alignment specified",code:e.textAlignCode},{default:i(()=>[t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,{textAlign:"center"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(d,{textAlign:"center"},{default:i(()=>[LB]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[DB]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Inverted",description:"Card's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(z,{inverted:""},{default:i(()=>[t(b,{inverted:""},{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:uB}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Matt Giampietro")]),_:1}),t(f,null,{default:i(()=>[IB]),_:1}),t(d,null,{default:i(()=>[l(" Matthew is an interior designer living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[EB,RB]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:cB}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Molly")]),_:1}),t(f,null,{default:i(()=>[zB]),_:1}),t(d,null,{default:i(()=>[l(" Molly is a personal assistant living in Paris. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[PB,FB]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:Kn}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elyse")]),_:1}),t(f,null,{default:i(()=>[MB]),_:1}),t(d,null,{default:i(()=>[l(" Elyse is a copywriter working in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[VB,HB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Colored",description:"A card can specify a color",code:e.coloredCode},{default:i(()=>[t(b,{itemsPerRow:4},{default:i(()=>[t(_,{color:"primary",href:"#"},{default:i(()=>[t(s,{src:Fa})]),_:1}),t(_,{color:"secondary",href:"#"},{default:i(()=>[t(s,{src:Fa})]),_:1}),t(_,{color:"red",href:"#"},{default:i(()=>[t(s,{src:Fa})]),_:1}),t(_,{color:"orange",href:"#"},{default:i(()=>[t(s,{src:Fa})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Column Count",description:"A group of cards can set how many cards should exist in a row",code:e.columnCountCode},{default:i(()=>[t(b,{itemsPerRow:4},{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:ae})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:ae})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Stackable",description:"A group of cards can automatically stack rows to a single columns on mobile devices",code:e.stackableCode},{default:i(()=>[t(b,{itemsPerRow:3,stackable:""},{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:Wn})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:Jn})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:$c})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:Bc})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:Vo})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:Tc})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Doubling",description:"A group of cards can double its column width for mobile",code:e.doublingCode},{default:i(()=>[t(b,{itemsPerRow:6,doubling:""},{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:Wn})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:Jn})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:$c})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:Bc})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:Vo})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:Tc})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const OB=we(dB,[["render",NB]]),jB=E({name:"CommentDoc",components:{DocPageHeader:Je,DocExample:He},setup(){return{commentsCode:`<sui-comment-group>
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
  </sui-segment>`}}}),GB=S("span",null,"Today at 5:42PM",-1),qB=S("a",null,"Reply",-1),UB=S("span",null,"Yesterday at 12:30AM",-1),YB=S("a",null,"Reply",-1),JB={class:"comments"},WB=S("span",null,"Just now",-1),KB=S("a",null,"Reply",-1),XB=S("span",null,"5 days ago",-1),QB=S("a",null,"Reply",-1),ZB=S("div",{class:"date"},"2 days ago",-1),eT=S("div",{class:"rating"},[S("i",{class:"star icon"}),l(" 5 Faves ")],-1),tT=S("a",null,"Reply",-1),iT=S("a",null,"Save",-1),aT=S("a",null,"Hide",-1),lT=S("a",null,[S("i",{class:"expand icon"}),l(" Full-screen ")],-1),nT=S("a",null,"Reply",-1),oT=S("a",null,"Reply",-1),sT=S("a",null,"Replay",-1),rT=S("span",null,"Today at 5:42PM",-1),uT=S("a",{href:"#"},"Replay",-1),cT=S("span",null,"Yesterday at 12:30AM",-1),dT=S("a",{href:"#"},"Replay",-1),mT=S("span",null,"Just now",-1),pT=S("a",{href:"#"},"Replay",-1),fT=S("span",null,"5 days ago",-1),gT=S("a",{href:"#"},"Replay",-1),hT=S("span",null,"Today at 5:42PM",-1),_T=S("a",{href:"#"},"Replay",-1),bT=S("span",null,"Yesterday at 12:30AM",-1),vT=S("a",{href:"#"},"Replay",-1),yT=S("span",null,"Just now",-1),ST=S("a",{href:"#"},"Replay",-1),wT=S("span",null,"5 days ago",-1),CT=S("a",{href:"#"},"Replay",-1),AT=S("span",null,"Today at 5:42PM",-1),kT=S("a",{href:"#"},"Replay",-1),xT=S("span",null,"Yesterday at 12:30AM",-1),$T=S("a",{href:"#"},"Replay",-1),BT=S("span",null,"Just now",-1),TT=S("a",{href:"#"},"Replay",-1),LT=S("span",null,"5 days ago",-1),DT=S("a",{href:"#"},"Replay",-1),IT=S("span",null,"Today at 5:42PM",-1),ET=S("a",{href:"#"},"Replay",-1),RT=S("span",null,"Yesterday at 12:30AM",-1),zT=S("a",{href:"#"},"Replay",-1),PT=S("span",null,"Just now",-1),FT=S("a",{href:"#"},"Replay",-1),MT=S("span",null,"5 days ago",-1),VT=S("a",{href:"#"},"Replay",-1);function HT(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-comment-avatar"),u=y("sui-comment-author"),f=y("sui-comment-metadata"),d=y("sui-comment-text"),h=y("sui-comment-actions"),v=y("sui-comment-content"),_=y("sui-comment"),C=y("sui-comment-group"),k=y("doc-example"),B=y("sui-form-textarea"),b=y("sui-icon"),w=y("sui-button"),x=y("sui-form"),$=y("sui-segment"),D=y("sui-container");return T(),ge("div",null,[t(m,{title:"Comment",sub:"A comment displays user feedback to site content"}),t(D,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(k,{title:"Comments",description:"A basic list of comments",code:e.commentsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(p,{as:"h3",dividing:""},{default:i(()=>[l("Comments")]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Matt")]),_:1}),t(f,null,{default:i(()=>[GB]),_:1}),t(d,null,{default:i(()=>[l("How artistic!")]),_:1}),t(h,null,{default:i(()=>[qB]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[UB]),_:1}),t(d,null,{default:i(()=>[l("This has been very useful for my research. Thanks as well!")]),_:1}),t(h,null,{default:i(()=>[YB]),_:1})]),_:1}),S("div",JB,[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[WB]),_:1}),t(d,null,{default:i(()=>[l("Elliot you are always so right :)")]),_:1}),t(h,null,{default:i(()=>[KB]),_:1})]),_:1})]),_:1})])]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[XB]),_:1}),t(d,null,{default:i(()=>[l("Dude, this is awesome. Thanks so much")]),_:1}),t(h,null,{default:i(()=>[QB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(k,{title:"avatar",description:"A comment can contain an image or avatar",code:e.avatarCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Metadata",description:"A comment can contain metadata about the comment, an arbitrary amount of metadata may be defined",code:e.metadataCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/stevie.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Stevie Feliciano")]),_:1}),t(f,null,{default:i(()=>[ZB,eT]),_:1}),t(d,null,{default:i(()=>[l(" Hey guys, I hope this example comment is helping you read this documentation. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Actions",description:"A comment can contain an list of actions a user may perform related to this comment",code:e.actionsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Tom Lukic")]),_:1}),t(d,null,{default:i(()=>[l(" This will be great for business reports. I will definitely download this. ")]),_:1}),t(h,null,{default:i(()=>[tT,iT,aT,lT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Reply Form",description:"A comment can contain a form to reply to a comment. This may have arbitrary content",code:e.replyFormCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/steve.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Steve Jobs")]),_:1}),t(f,null,{default:i(()=>[l("2 days ago")]),_:1}),t(d,null,{default:i(()=>[l("Revolutionary!")]),_:1}),t(h,null,{default:i(()=>[nT]),_:1}),t(x,{reply:""},{default:i(()=>[t(B),t(w,{color:"primary",icon:"",labelPosition:"left"},{default:i(()=>[t(b,{name:"edit"}),l(" Add Reply ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(k,{title:"Collapsed",description:"Comments can be collapsed, or hidden from view",code:e.collapsedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/christian.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Christian Rocha")]),_:1}),t(f,null,{default:i(()=>[l("2 days ago")]),_:1}),t(d,null,{default:i(()=>[l(" I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket? ")]),_:1}),t(h,null,{default:i(()=>[oT]),_:1})]),_:1}),t(C,{collapsed:""},{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[l("1 days ago")]),_:1}),t(d,null,{default:i(()=>[l("No, it wont")]),_:1}),t(h,null,{default:i(()=>[sT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(k,{title:"Threaded",description:"A comment list can be threaded to showing the relationship between conversations",code:e.threadedCode},{default:i(()=>[t(C,{threaded:""},{default:i(()=>[t(p,{as:"h3",dividing:""},{default:i(()=>[l("Comments")]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Matt")]),_:1}),t(f,null,{default:i(()=>[rT]),_:1}),t(d,null,{default:i(()=>[l(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[uT]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[cT]),_:1}),t(d,null,{default:i(()=>[l(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[dT]),_:1})]),_:1}),t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[mT]),_:1}),t(d,null,{default:i(()=>[l(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[pT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[fT]),_:1}),t(d,null,{default:i(()=>[l(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[gT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Minimal",description:"Comments can hide extra information unless a user shows intent to interact with a comment",code:e.minimalCode},{default:i(()=>[t(C,{minimal:""},{default:i(()=>[t(p,{as:"h3",dividing:""},{default:i(()=>[l("Comments")]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Matt")]),_:1}),t(f,null,{default:i(()=>[hT]),_:1}),t(d,null,{default:i(()=>[l(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[_T]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[bT]),_:1}),t(d,null,{default:i(()=>[l(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[vT]),_:1})]),_:1}),t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[yT]),_:1}),t(d,null,{default:i(()=>[l(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[ST]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[wT]),_:1}),t(d,null,{default:i(()=>[l(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[CT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Size",description:"Comments can have different sizes",code:e.sizeCode},{default:i(()=>[t(C,{size:"small"},{default:i(()=>[t(p,{as:"h3",dividing:""},{default:i(()=>[l("Comments")]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Matt")]),_:1}),t(f,null,{default:i(()=>[AT]),_:1}),t(d,null,{default:i(()=>[l(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[kT]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[xT]),_:1}),t(d,null,{default:i(()=>[l(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[$T]),_:1})]),_:1}),t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[BT]),_:1}),t(d,null,{default:i(()=>[l(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[TT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[LT]),_:1}),t(d,null,{default:i(()=>[l(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[DT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Inverted",description:"Comments's colors can be inverted",code:e.invertedCode},{default:i(()=>[t($,{inverted:""},{default:i(()=>[t(C,{inverted:""},{default:i(()=>[t(p,{as:"h3",inverted:"",dividing:""},{default:i(()=>[l("Comments")]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Matt")]),_:1}),t(f,null,{default:i(()=>[IT]),_:1}),t(d,null,{default:i(()=>[l(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[ET]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[RT]),_:1}),t(d,null,{default:i(()=>[l(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[zT]),_:1})]),_:1}),t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[PT]),_:1}),t(d,null,{default:i(()=>[l(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[FT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[MT]),_:1}),t(d,null,{default:i(()=>[l(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[VT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const NT=we(jB,[["render",HT]]),OT=E({name:"FeedDoc",components:{DocPageHeader:Je,DocExample:He},setup(){return{feedCode:`<sui-feed>
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
</sui-feed>`}}}),jT=S("img",{src:ei},null,-1),GT=S("img",{src:ei},null,-1),qT=S("a",null,"Coworkers",-1),UT=S("img",{src:Cn},null,-1),YT=S("a",null,"Jenny Hess",-1),JT=S("a",null,"coworker",-1),WT=S("img",{src:Ma},null,-1),KT=S("a",null,"Helen Troy",-1),XT=S("a",null,[S("img",{src:ae})],-1),QT=S("a",null,[S("img",{src:ae})],-1),ZT=S("a",null,"Elliot Fu",-1),e2=S("a",null,"Jenny Hess",-1),t2=S("a",null,"Stevie Feliciano",-1),i2=S("a",null,"Elliot Fu",-1),a2=S("a",null,"Helen Troy",-1),l2=S("a",null,"Christian Rocha",-1),n2=S("img",{src:ei},null,-1),o2=S("div",{class:"date"},"Just now",-1),s2=S("a",{class:"user"},"Elliot Fu",-1);function r2(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-feed-label"),u=y("sui-feed-user"),f=y("sui-feed-date"),d=y("sui-feed-summary"),h=y("sui-icon"),v=y("sui-feed-like"),_=y("sui-feed-meta"),C=y("sui-feed-content"),k=y("sui-feed-event"),B=y("sui-feed"),b=y("doc-example"),w=y("sui-feed-extra"),x=y("sui-segment"),$=y("sui-container");return T(),ge("div",null,[t(m,{title:"Feed",sub:"A feed presents user activity chronologically"}),t($,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(b,{title:"Feed",description:"A feed",code:e.feedCode},{default:i(()=>[t(B,null,{default:i(()=>[t(k,null,{default:i(()=>[t(s,null,{default:i(()=>[jT]),_:1}),t(C,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elliot Fu")]),_:1}),l(" added you as a friend "),t(f,null,{default:i(()=>[l("1 Hour Ago")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(v,null,{default:i(()=>[t(h,{name:"like"}),l(" 4 Likes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(b,{title:"Label",description:"An event can contain an image or icon label",code:e.labelCode},{default:i(()=>[t(B,null,{default:i(()=>[t(k,null,{default:i(()=>[t(s,null,{default:i(()=>[GT]),_:1}),t(C,null,{default:i(()=>[l(" You added Elliot Fu to the group "),qT]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Date",description:"An event or an event summary can contain a date",code:e.dateCode},{default:i(()=>[t(B,null,{default:i(()=>[t(k,null,{default:i(()=>[t(s,null,{default:i(()=>[UT]),_:1}),t(C,null,{default:i(()=>[t(f,null,{default:i(()=>[l(" 3 days ago ")]),_:1}),t(d,null,{default:i(()=>[l(" You added "),YT,l(" to your "),JT,l(" group. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Additional information",description:"An event can contain additional information like a set of images or text",code:e.additionalInfoCode},{default:i(()=>[t(B,null,{default:i(()=>[t(k,null,{default:i(()=>[t(s,null,{default:i(()=>[WT]),_:1}),t(C,null,{default:i(()=>[t(f,null,{default:i(()=>[l(" 3 days ago ")]),_:1}),t(d,null,{default:i(()=>[KT,l(" added 2 photos ")]),_:1}),t(w,{images:""},{default:i(()=>[XT,QT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(b,{title:"Size",description:"A feed can have different sizes",code:e.sizeCode},{default:i(()=>[t(B,{size:"small"},{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[l("Followers Activity")]),_:1}),t(k,null,{default:i(()=>[t(C,null,{default:i(()=>[t(d,null,{default:i(()=>[ZT,l(" added "),e2,l(" as a friend ")]),_:1})]),_:1})]),_:1}),t(k,null,{default:i(()=>[t(C,null,{default:i(()=>[t(d,null,{default:i(()=>[t2,l(" added "),i2,l(" as a friend ")]),_:1})]),_:1})]),_:1}),t(k,null,{default:i(()=>[t(C,null,{default:i(()=>[t(d,null,{default:i(()=>[a2,l(" added "),l2,l(" as a friend ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Inverted",description:"A feed's color can be inverted",code:e.invertedCode},{default:i(()=>[t(x,{inverted:""},{default:i(()=>[t(B,{inverted:""},{default:i(()=>[t(k,null,{default:i(()=>[t(s,null,{default:i(()=>[n2]),_:1}),t(C,null,{default:i(()=>[o2,t(d,null,{default:i(()=>[s2,l(" posted on his page ")]),_:1}),t(w,{text:""},{default:i(()=>[l(" Hey there ! ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const u2=we(OT,[["render",r2]]),c2=E({name:"ItemDoc",components:{DocPageHeader:Je,DocExample:He},setup(){return{itemsCode:`<sui-item-group>
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
</sui-item-group>`}}}),d2=S("img",{src:ae},null,-1),m2=S("span",null,"Description",-1),p2=S("img",{src:at},null,-1),f2=S("img",{src:ae},null,-1),g2=S("span",null,"Description",-1),h2=S("img",{src:at},null,-1),_2=S("img",{src:ae},null,-1),b2=S("img",{src:ae},null,-1),v2=S("img",{src:ae},null,-1),y2=S("img",{src:ae},null,-1),S2=S("img",{src:ae},null,-1),w2=S("img",{src:ae},null,-1),C2=S("img",{src:ae},null,-1),A2=S("span",{class:"price"},"$1200",-1),k2=S("span",{class:"stay"},"1 Month",-1),x2=S("img",{src:at},null,-1),$2=S("span",{class:"price"},"$1000",-1),B2=S("span",{class:"stay"},"2 Weeks",-1),T2=S("img",{src:at},null,-1),L2=S("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),D2=S("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),I2=S("img",{src:at},null,-1),E2=S("img",{src:ae},null,-1),R2=S("span",{class:"cinema"},"Union Square 14",-1),z2=S("img",{src:at},null,-1),P2=S("img",{src:ae},null,-1),F2=S("span",{class:"cinema"},"IFC Cinema",-1),M2=S("img",{src:at},null,-1),V2=S("img",{src:ae},null,-1),H2=S("span",{class:"cinema"},"IFC",-1),N2=S("img",{src:at},null,-1),O2=S("img",{src:at},null,-1),j2=S("img",{src:at},null,-1),G2=S("img",{src:at},null,-1),q2=S("span",{class:"price"},"$1200",-1),U2=S("span",{class:"stay"},"1 Month",-1),Y2=S("img",{src:at},null,-1),J2=S("span",{class:"price"},"$1000",-1),W2=S("span",{class:"stay"},"2 Weeks",-1),K2=S("img",{src:at},null,-1);function X2(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-item-image"),u=y("sui-item-header"),f=y("sui-item-meta"),d=y("sui-item-description"),h=y("sui-item-extra"),v=y("sui-item-content"),_=y("sui-item"),C=y("sui-item-group"),k=y("doc-example"),B=y("sui-image"),b=y("sui-icon"),w=y("sui-label"),x=y("sui-button"),$=y("sui-segment"),D=y("sui-container");return T(),ge("div",null,[t(m,{title:"Item",sub:"An item view presents large collections of site content for display"}),t(D,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(k,{title:"Items",description:"A group of items",code:e.itemsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[d2]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Header")]),_:1}),t(f,null,{default:i(()=>[m2]),_:1}),t(d,null,{default:i(()=>[p2]),_:1}),t(h,null,{default:i(()=>[l(" Additional Details ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[f2]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Header")]),_:1}),t(f,null,{default:i(()=>[g2]),_:1}),t(d,null,{default:i(()=>[h2]),_:1}),t(h,null,{default:i(()=>[l(" Additional Details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(k,{title:"Image",description:"An item can contain an image",code:e.imageCode},{default:i(()=>[t(C,{divided:""},{default:i(()=>[t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[_2]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[b2]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[v2]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Content",description:"An item can contain content",code:e.contentCode},{default:i(()=>[t(C,{divided:""},{default:i(()=>[t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[y2]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[l(" Content A ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[S2]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[l(" Content B ")]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[w2]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[l(" Content C ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Header",description:"An item can contain a header",code:e.headerCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[C2]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[l("12 Years a Slave")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Metadata",description:"An item can contain content metadata",code:e.metadataCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(B,{size:"small",src:ae}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Arrowhead Valley Camp")]),_:1}),t(f,null,{default:i(()=>[A2,k2]),_:1}),t(d,null,{default:i(()=>[x2]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{size:"small",src:ae}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Buck's Homebrew Stayaway")]),_:1}),t(f,null,{default:i(()=>[$2,B2]),_:1}),t(d,null,{default:i(()=>[T2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Description",description:"An item can contain a description with a single or multiple paragraphs",code:e.descriptionCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(B,{size:"small",src:ae}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(d,null,{default:i(()=>[L2,D2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Extra Content",description:"An item can contain extra content meant to be formatted separately from the main content",code:e.extraContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(d,null,{default:i(()=>[I2]),_:1}),t(h,null,{default:i(()=>[t(b,{name:"check",color:"green"}),l(" 121 Votes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(k,{title:"Divided",description:"Items can be divided to better distinguish between grouped content",code:e.dividedCode},{default:i(()=>[t(C,{divided:""},{default:i(()=>[t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[E2]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("12 Years a Slave")]),_:1}),t(f,null,{default:i(()=>[R2]),_:1}),t(d,null,{default:i(()=>[z2]),_:1}),t(h,null,{default:i(()=>[t(w,null,{default:i(()=>[l("IMAX")]),_:1}),t(w,null,{default:i(()=>[t(b,{name:"globe"}),l(" Additional Languages ")]),_:1})]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[P2]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("My Neighbor Totoro")]),_:1}),t(f,null,{default:i(()=>[F2]),_:1}),t(d,null,{default:i(()=>[M2]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right",color:"primary"},{default:i(()=>[l(" Buy tickets "),t(b,{name:"right chevron"})]),_:1}),t(w,null,{default:i(()=>[l("Limited")]),_:1})]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(s,null,{default:i(()=>[V2]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Watchmen")]),_:1}),t(f,null,{default:i(()=>[H2]),_:1}),t(d,null,{default:i(()=>[N2]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right",color:"primary"},{default:i(()=>[l(" Buy tickets "),t(b,{name:"right chevron"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Relaxed",description:"A group of items can relax its padding to provide more negative space",code:e.relaxedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(B,{size:"tiny",src:ae}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("12 Years a Slave")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{size:"tiny",src:ae}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("My Neighbor Totoro")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{size:"tiny",src:ae}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Watchmen")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Vertical Alignment",description:"Content can specify its vertical alignment",code:e.verticalAlignCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(B,{size:"small",src:ae}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Top Aligned")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{size:"small",src:ae}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[l("Middle Aligned")]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{size:"small",src:ae}),t(v,{verticalAlign:"bottom"},{default:i(()=>[t(u,null,{default:i(()=>[l("Bottom Aligned")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Floated Content",description:"Any content element can be floated left or right",code:e.floatedContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(_,null,{default:i(()=>[t(B,{size:"small",src:ae}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[l("Content A")]),_:1}),t(d,null,{default:i(()=>[O2]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right"},{default:i(()=>[l("Action")]),_:1})]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{size:"small",src:ae}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[l("Content B")]),_:1}),t(d,null,{default:i(()=>[j2]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right"},{default:i(()=>[l("Action")]),_:1})]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{size:"small",src:ae}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[l("Content C")]),_:1}),t(d,null,{default:i(()=>[G2]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right"},{default:i(()=>[l("Action")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Inverted",description:"An item can be inverted to appear on a dark background",code:e.invertedCode},{default:i(()=>[t($,{inverted:""},{default:i(()=>[t(C,{inverted:""},{default:i(()=>[t(_,null,{default:i(()=>[t(B,{size:"small",src:ae}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Arrowhead Valley Camp")]),_:1}),t(f,null,{default:i(()=>[q2,U2]),_:1}),t(d,null,{default:i(()=>[Y2]),_:1})]),_:1})]),_:1}),t(_,null,{default:i(()=>[t(B,{size:"small",src:ae}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Buck's Homebrew Stayaway")]),_:1}),t(f,null,{default:i(()=>[J2,W2]),_:1}),t(d,null,{default:i(()=>[K2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Q2=we(c2,[["render",X2]]),Z2=E({name:"StatisticDoc",components:{DocPageHeader:Je,DocExample:He},setup(){return{statisticCode:'<sui-statistic value="5,550" label="Downloads" />',groupCode:`<sui-statistic-group>
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
<sui-statistic size="huge" value="2,204" label="Views" />`}}}),eL=S("br",null,null,-1),tL=S("br",null,null,-1),iL=S("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),aL=S("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),lL=S("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),nL=S("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1);function oL(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-statistic"),u=y("doc-example"),f=y("sui-statistic-group"),d=y("sui-statistic-value"),h=y("sui-statistic-label"),v=y("sui-icon"),_=y("sui-image"),C=y("sui-segment"),k=y("sui-container");return T(),ge("div",null,[t(m,{title:"Statistic",sub:"A statistic emphasizes the current value of an attribute"}),t(k,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"Statistic",description:"A statistic can display a value with a label above or below it",code:e.statisticCode},{default:i(()=>[t(s,{value:"5,550",label:"Downloads"})]),_:1},8,["code"]),t(u,{title:"Statistic Group",description:"A group of statistics",code:e.groupCode},{default:i(()=>[t(f,null,{default:i(()=>[t(s,{value:"22",label:"Faves"}),t(s,{value:"31,200",label:"Views"}),t(s,{value:"22",label:"Members"})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(u,{title:"Value",description:"A statistic can contain a numeric, icon, image, or text value",code:e.valueCode},{default:i(()=>[t(f,null,{default:i(()=>[t(s,{value:"22",label:"Faves"}),t(s,null,{default:i(()=>[t(d,{text:""},{default:i(()=>[l(" Three"),eL,l(" Thousand ")]),_:1}),t(h,null,{default:i(()=>[l("Signups")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(d,null,{default:i(()=>[t(v,{name:"plane"}),l(" 5 ")]),_:1}),t(h,null,{default:i(()=>[l("Flights")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(d,null,{default:i(()=>[t(_,{circular:"",inline:"",src:Fo}),l(" 42 ")]),_:1}),t(h,null,{default:i(()=>[l("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(u,{title:"Label",description:"A statistic can contain a label to help provide context for the presented value",code:e.labelCode},{default:i(()=>[t(s,{value:"2,204",label:"Views"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(u,{title:"Horizontal Statistic",description:"A statistic can present its measurement horizontally",code:e.horizontalCode},{default:i(()=>[t(s,{horizontal:"",value:"2,204",label:"Views"})]),_:1},8,["code"]),t(u,{title:"Colored",description:"A statistic can be formatted to be different colors",code:e.coloredCode},{default:i(()=>[t(f,null,{default:i(()=>[t(s,{color:"red",value:"27",label:"Red"}),t(s,{color:"orange",value:"8",label:"Orange"}),t(s,{color:"yellow",value:"28",label:"Yellow"}),t(s,{color:"olive",value:"7",label:"Olive"}),t(s,{color:"green",value:"14",label:"Green"}),t(s,{color:"teal",value:"82",label:"Teal"}),t(s,{color:"blue",value:"1",label:"Blue"}),t(s,{color:"violet",value:"22",label:"Violet"}),t(s,{color:"purple",value:"23",label:"Purple"}),t(s,{color:"pink",value:"15",label:"Pink"}),t(s,{color:"brown",value:"36",label:"Brown"}),t(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),t(u,{title:"Inverted",description:"A statistic can be formatted to fit on a dark background",code:e.invertedCode},{default:i(()=>[t(C,{inverted:""},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(s,{color:"red",value:"27",label:"Red"}),t(s,{color:"orange",value:"8",label:"Orange"}),t(s,{color:"yellow",value:"28",label:"Yellow"}),t(s,{color:"olive",value:"7",label:"Olive"}),t(s,{color:"green",value:"14",label:"Green"}),t(s,{color:"teal",value:"82",label:"Teal"}),t(s,{color:"blue",value:"1",label:"Blue"}),t(s,{color:"violet",value:"22",label:"Violet"}),t(s,{color:"purple",value:"23",label:"Purple"}),t(s,{color:"pink",value:"15",label:"Pink"}),t(s,{color:"brown",value:"36",label:"Brown"}),t(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1})]),_:1},8,["code"]),t(u,{title:"Stackable",description:"A statistic can automatically stack rows to a single columns on mobile devices",code:e.stackableCode},{default:i(()=>[t(f,{stackable:""},{default:i(()=>[t(s,{color:"red",value:"27",label:"Red"}),t(s,{color:"orange",value:"8",label:"Orange"}),t(s,{color:"yellow",value:"28",label:"Yellow"}),t(s,{color:"olive",value:"7",label:"Olive"}),t(s,{color:"green",value:"14",label:"Green"}),t(s,{color:"teal",value:"82",label:"Teal"}),t(s,{color:"blue",value:"1",label:"Blue"}),t(s,{color:"violet",value:"22",label:"Violet"}),t(s,{color:"purple",value:"23",label:"Purple"}),t(s,{color:"pink",value:"15",label:"Pink"}),t(s,{color:"brown",value:"36",label:"Brown"}),t(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),t(u,{title:"Evenly Divided",description:"A statistic group can have its items divided evenly",code:e.evenlyDividedCode},{default:i(()=>[t(f,{widths:4},{default:i(()=>[t(s,{value:"22",label:"Faves"}),t(s,null,{default:i(()=>[t(d,{text:""},{default:i(()=>[l(" Three"),tL,l(" Thousand ")]),_:1}),t(h,null,{default:i(()=>[l("Signups")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(d,null,{default:i(()=>[t(v,{name:"plane"}),l(" 5 ")]),_:1}),t(h,null,{default:i(()=>[l("Flights")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(d,null,{default:i(()=>[t(_,{circular:"",inline:"",src:Fo}),l(" 42 ")]),_:1}),t(h,null,{default:i(()=>[l("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(u,{title:"Floated",description:"An statistic can sit to the left or right of other content",code:e.floatedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(s,{floated:"right",value:"2,204",label:"Views"}),iL,aL,t(s,{floated:"left",value:"2,204",label:"Views"}),lL,nL]),_:1})]),_:1},8,["code"]),t(u,{title:"Size",description:"A statistic can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{size:"mini",value:"2,204",label:"Views"}),t(s,{size:"tiny",value:"2,204",label:"Views"}),t(s,{size:"small",value:"2,204",label:"Views"}),t(s,{value:"2,204",label:"Views"}),t(s,{size:"large",value:"2,204",label:"Views"}),t(s,{size:"huge",value:"2,204",label:"Views"})]),_:1},8,["code"])]),_:1})])}const sL=we(Z2,[["render",oL]]),rL=E({name:"AccordionDoc",components:{DocPageHeader:Je,DocExample:He},setup(){return{accordionCode:`<sui-accordion>
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
</sui-segment>`}}}),uL=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),cL=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),dL=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),mL=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),pL=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),fL=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),gL=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),hL=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),_L=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),bL=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),vL=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),yL=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),SL=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),wL=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),CL=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),AL=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),kL=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),xL=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),$L=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),BL=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1);function TL(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-accordion-tab"),u=y("sui-accordion"),f=y("doc-example"),d=y("sui-segment"),h=y("sui-container");return T(),ge("div",null,[t(m,{title:"Accordion",sub:"An accordion allows users to toggle the display of sections of content"}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(f,{title:"Accordion",description:"A standard accordion",code:e.accordionCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[uL]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[cL]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[dL,mL]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Styled",description:"A styled accordion adds basic formatting",code:e.styledCode},{default:i(()=>[t(u,{styled:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[pL]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[fL]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[gL,hL]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(f,{title:"Fluid",description:"An accordion can take up the width of its container",code:e.fluidCode},{default:i(()=>[t(u,{fluid:"",styled:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[_L]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[bL]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[vL,yL]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Inverted",description:"An accordion can be formatted to appear on dark backgrounds",code:e.invertedCode},{default:i(()=>[t(d,{inverted:""},{default:i(()=>[t(u,{inverted:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[SL]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[wL]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[CL,AL]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Usage")]),_:1}),t(f,{title:"Multiple",description:"An accordion can have multiple panels open at the same time",code:e.multipleCode},{default:i(()=>[t(u,{multiple:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[kL]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[xL]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[$L,BL]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const LL=we(rL,[["render",TL]]),DL=E({name:"CalendarDoc",components:{DocPageHeader:Je,DocExample:He},setup(){return{calendar1:q(null),calendarCode:'<sui-calendar v-model="calendar1" placeholder="Date/Time" />'}}});function IL(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-calendar"),u=y("doc-example"),f=y("sui-container");return T(),ge("div",null,[t(m,{title:"Calendar",sub:"A calendar allows users to select any date or time"}),t(f,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"Calendar",description:"A standard calendar",code:e.calendarCode},{default:i(()=>[t(s,{modelValue:e.calendar1,"onUpdate:modelValue":a[0]||(a[0]=d=>e.calendar1=d),placeholder:"Date/Time"},null,8,["modelValue"])]),_:1},8,["code"])]),_:1})])}const EL=we(DL,[["render",IL]]),RL=E({name:"PropertyListTable",props:{properties:Array}});function zL(e,a,n,o,r,c){const m=y("sui-table-header-cell"),p=y("sui-table-row"),s=y("sui-table-header"),u=y("sui-table-cell"),f=y("sui-table-body"),d=y("sui-table");return T(),I(d,{celled:""},{default:i(()=>[t(s,null,{default:i(()=>[t(p,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Name")]),_:1}),t(m,null,{default:i(()=>[l("Type")]),_:1}),t(m,null,{default:i(()=>[l("Default")]),_:1}),t(m,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(f,null,{default:i(()=>[(T(!0),ge(Ce,null,tt(e.properties,h=>(T(),I(p,{key:h.name},{default:i(()=>[t(u,null,{default:i(()=>[l(ke(h.name),1)]),_:2},1024),t(u,null,{default:i(()=>[l(ke(h.type),1)]),_:2},1024),t(u,null,{default:i(()=>[l(ke(h.default),1)]),_:2},1024),t(u,null,{default:i(()=>[l(ke(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const kn=we(RL,[["render",zL]]),PL=E({name:"CheckboxDoc",components:{DocPageHeader:Je,DocExample:He,PropertyListTable:kn},setup(){const e=q(!1),a='<sui-checkbox label="Make my profile visible" v-model="checked" />',n=q([]),o=`<sui-checkbox label="Apple" value="Apple" v-model="selected"  />
<sui-checkbox label="Banana" value="Banana" v-model="selected"  />
<sui-checkbox label="Chocolate" value="Chocolate" v-model="selected"  />`,r=q(!1),c='<sui-checkbox toggle v-model="toggle" />',m=q(!1);return{checked:e,checkboxCode:a,selected:n,multipleCode:o,toggle:r,toggleCode:c,slider:m,sliderCode:'<sui-checkbox slider v-model="slider" />',properties:[{name:"label",type:"string",default:"null",description:"Label of the checkbox."},{name:"modelValue",type:"any",default:"null",description:"Value binding of the checkbox."},{name:"value",type:"any",default:"null",description:"Value of the checkbox."}],events:[{name:"change",description:"Callback to invoke when checkbox value is changed."},{name:"click",description:"Callback to invoke when checkbox is clicked."}]}}}),FL={class:"ui form"},ML={class:"grouped fields"},VL={class:"field"},HL={class:"field"},NL={class:"field"};function OL(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-checkbox"),u=y("doc-example"),f=y("property-list-table"),d=y("sui-table-header-cell"),h=y("sui-table-row"),v=y("sui-table-header"),_=y("sui-table-cell"),C=y("sui-table-body"),k=y("sui-table"),B=y("sui-container");return T(),ge("div",null,[t(m,{title:"Checkbox",sub:"A checkbox allows a user to select a value from a small set of options, often binary"}),t(B,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"Checkbox",description:"A standard checkbox",code:e.checkboxCode},{default:i(()=>[t(s,{label:"Make my profile visible",modelValue:e.checked,"onUpdate:modelValue":a[0]||(a[0]=b=>e.checked=b)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Multiple",description:"Multiple mode is enabled by default, v-model property refers to an array to bind the selected values",code:e.multipleCode},{default:i(()=>[S("div",FL,[S("div",ML,[S("div",VL,[t(s,{label:"Apple",value:"Apple",modelValue:e.selected,"onUpdate:modelValue":a[1]||(a[1]=b=>e.selected=b)},null,8,["modelValue"])]),S("div",HL,[t(s,{label:"Banana",value:"Banana",modelValue:e.selected,"onUpdate:modelValue":a[2]||(a[2]=b=>e.selected=b)},null,8,["modelValue"])]),S("div",NL,[t(s,{label:"Chocolate",value:"Chocolate",modelValue:e.selected,"onUpdate:modelValue":a[3]||(a[3]=b=>e.selected=b)},null,8,["modelValue"])])])]),l(" selected : "+ke(e.selected),1)]),_:1},8,["code"]),t(u,{title:"Toggle",description:"A checkbox can toggle",code:e.toggleCode},{default:i(()=>[t(s,{toggle:"",modelValue:e.toggle,"onUpdate:modelValue":a[4]||(a[4]=b=>e.toggle=b)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Slider",description:"A checkbox can look like a slider",code:e.sliderCode},{default:i(()=>[t(s,{slider:"",modelValue:e.slider,"onUpdate:modelValue":a[5]||(a[5]=b=>e.slider=b)},null,8,["modelValue"])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Properties")]),_:1}),t(f,{properties:e.properties},null,8,["properties"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Events")]),_:1}),t(k,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Name")]),_:1}),t(d,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[(T(!0),ge(Ce,null,tt(e.events,b=>(T(),I(h,{key:b.name},{default:i(()=>[t(_,null,{default:i(()=>[l(ke(b.name),1)]),_:2},1024),t(_,null,{default:i(()=>[l(ke(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const jL=we(PL,[["render",OL]]),GL=E({name:"DimmerDoc",components:{DocPageHeader:Je,DocExample:He},setup(){const e=`<sui-dimmer-dimmable>
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
</div>`}}});function qL(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-image"),u=y("sui-image-group"),f=y("sui-dimmer"),d=y("sui-dimmer-dimmable"),h=y("doc-example"),v=y("sui-icon"),_=y("sui-button"),C=y("sui-header-subheader"),k=y("sui-container");return T(),ge("div",null,[t(m,{title:"Dimmer",sub:"A dimmer hides distractions to focus attention on particular content"}),t(k,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(h,{title:"Dimmer",description:"A simple dimmer displays no content",code:e.dimmerCode},{default:i(()=>[t(d,null,{default:i(()=>[t(p,{as:"h3"},{default:i(()=>[l("Overlayable Section")]),_:1}),t(u,{size:"small"},{default:i(()=>[t(s,{src:ae}),t(s,{src:ae}),t(s,{src:ae})]),_:1}),t(s,{size:"medium",src:Wt}),t(f,{active:""})]),_:1})]),_:1},8,["code"]),t(h,{title:"Content Dimmer",description:"A dimmer can display content",code:e.contentDimmerCode},{default:i(()=>[t(d,null,{default:i(()=>[t(p,{as:"h3"},{default:i(()=>[l("Overlayable Section")]),_:1}),t(u,{size:"small"},{default:i(()=>[t(s,{src:ae}),t(s,{src:ae}),t(s,{src:ae})]),_:1}),t(s,{size:"medium",src:Wt}),t(f,{active:""},{default:i(()=>[t(p,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(v,{name:"heart"}),l(" Dimmed Message! ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Page Dimmer",description:"A dimmer can be formatted to be fixed to the page",code:e.pageDimmerCode},{default:i(()=>[S("div",null,[t(_,{labeled:"",icon:"",onClick:a[0]||(a[0]=B=>e.active=!0)},{default:i(()=>[t(v,{name:"plus"}),l(" Show ")]),_:1}),t(f,{active:e.active,page:"",onClick:a[1]||(a[1]=B=>e.active=!1)},{default:i(()=>[t(p,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(v,{name:"heart"}),l(" Dimmed Message! "),t(C,null,{default:i(()=>[l("Dimmer sub-header")]),_:1})]),_:1})]),_:1},8,["active"])])]),_:1},8,["code"])]),_:1})])}const UL=we(GL,[["render",qL]]),YL=E({name:"DropdownDoc",components:{DocPageHeader:Je,DocExample:He},setup(){const e=`<sui-dropdown text="File">
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
/>`,C=q(null),k=`<sui-dropdown
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
/>`,B=q({text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}});return{dropdownCode:e,selected1:a,selectionCode:n,selected2:o,searchSelectionOptions:r,searchSelectionCode:c,selected3:m,clearableSelectionOptions:p,clearableSelectionCode:s,selected4:u,multipleCode:f,selected5:d,multipleCode2:h,selected6:v,searchDropdownCode:_,selected7:C,searchInMenuCode:k,selected8:B,inlineCode:`<span>
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
</sui-button-group>`}}});function JL(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-dropdown-item"),u=y("sui-divider"),f=y("sui-dropdown-menu"),d=y("sui-dropdown"),h=y("doc-example"),v=y("sui-button"),_=y("sui-button-group"),C=y("sui-container");return T(),ge("div",null,[t(m,{title:"Dropdown",sub:"A dropdown allows a user to select a value from a series of options"}),t(C,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(h,{title:"Dropdown",description:"A dropdown",code:e.dropdownCode},{default:i(()=>[t(d,{text:"File"},{default:i(()=>[t(f,null,{default:i(()=>[t(s,{text:"New"}),t(s,{text:"Open...",description:"ctrl + o"}),t(s,{text:"Save as...",description:"ctrl + s"}),t(s,{text:"Rename",description:"ctrl + r"}),t(s,{text:"Make a copy"}),t(s,{icon:"folder",text:"Move to folder"}),t(s,{icon:"trash",text:"Move to trash"}),t(u),t(s,{text:"Download As..."}),t(s,{text:"Publish To Web"}),t(s,{text:"E-mail Collaborators"})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Selection",description:"A dropdown can be used to select between choices in a form",code:e.selectionCode},{default:i(()=>[t(d,{selection:"",placeholder:"Pet",modelValue:e.selected1,"onUpdate:modelValue":a[0]||(a[0]=k=>e.selected1=k),options:["Cat","Dog","Bird","Rabbit","Squirrel","Horse"]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search Selection",description:"A selection dropdown can allow a user to search through a large list of choices",code:e.searchSelectionCode},{default:i(()=>[t(d,{search:"",selection:"",fluid:"",modelValue:e.selected2,"onUpdate:modelValue":a[1]||(a[1]=k=>e.selected2=k),options:e.searchSelectionOptions,placeholder:"Select Country"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(h,{title:"Clearable Selection",description:"A clearable selection dropdown can allow a user to cancel to cancel a previous selection",code:e.clearableSelectionCode},{default:i(()=>[t(d,{clearable:"",selection:"",modelValue:e.selected3,"onUpdate:modelValue":a[2]||(a[2]=k=>e.selected3=k),options:e.clearableSelectionOptions,placeholder:"Select Language"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(h,{title:"Multiple Selection",description:"A selection dropdown can allow multiple selections",code:e.multipleCode},{default:i(()=>[t(d,{selection:"",multiple:"",fluid:"",modelValue:e.selected4,"onUpdate:modelValue":a[3]||(a[3]=k=>e.selected4=k),placeholder:"Skills",options:["Angular","CSS","Ember","HTML","Javascript","NodeJS"]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{code:e.multipleCode2},{default:i(()=>[t(d,{selection:"",multiple:"",fluid:"",search:"",modelValue:e.selected5,"onUpdate:modelValue":a[4]||(a[4]=k=>e.selected5=k),placeholder:"Skills",options:[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"}]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search Dropdown",description:"A dropdown can be searchable",code:e.searchDropdownCode},{default:i(()=>[t(d,{button:"",floating:"",labeled:"",search:"",icon:"world",modelValue:e.selected6,"onUpdate:modelValue":a[5]||(a[5]=k=>e.selected6=k),options:[{text:"Arabic",value:"Arabic"},{text:"Chinese",value:"Chinese"},{text:"Danish",value:"Danish"},{text:"Dutch",value:"Dutch"},{text:"English",value:"English"},{text:"French",value:"French"},{text:"German",value:"German"},{text:"Greek",value:"Greek"},{text:"Hungarian",value:"Hungarian"},{text:"Italian",value:"Italian"},{text:"Japanese",value:"Japanese"},{text:"Korean",value:"Korean"},{text:"Lithuanian",value:"Lithuanian"},{text:"Persian",value:"Persian"},{text:"Polish",value:"Polish"},{text:"Portuguese",value:"Portuguese"},{text:"Russian",value:"Russian"},{text:"Spanish",value:"Spanish"},{text:"Swedish",value:"Swedish"},{text:"Turkish",value:"Turkish"},{text:"Vietnamese",value:"Vietnamese"}],text:"Select Language"},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search In-Menu",description:"A dropdown can include a search prompt inside its menu",code:e.searchInMenuCode},{default:i(()=>[t(d,{text:"Filter Posts",icon:"filter",floating:"",labeled:"",button:"",searchInMenu:"",modelValue:e.selected7,"onUpdate:modelValue":a[6]||(a[6]=k=>e.selected7=k),options:[{text:"Important",value:"Important",label:{color:"red",empty:!0,circular:!0}},{text:"Announcement",value:"Announcement",label:{color:"blue",empty:!0,circular:!0}},{text:"Cannot Fix",value:"Cannot Fix",label:{color:"black",empty:!0,circular:!0}},{text:"News",value:"News",label:{color:"purple",empty:!0,circular:!0}},{text:"Enhancement",value:"Enhancement",label:{color:"orange",empty:!0,circular:!0}},{text:"Change Declined",value:"Change Declined",label:{empty:!0,circular:!0}},{text:"Off Topic",value:"Off Topic",label:{color:"yellow",empty:!0,circular:!0}},{text:"Interesting",value:"Interesting",label:{color:"pink",empty:!0,circular:!0}},{text:"Discussion",value:"Discussion",label:{color:"green",empty:!0,circular:!0}}]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Inline",description:"A dropdown can be formatted to appear inline in other content",code:e.inlineCode},{default:i(()=>[S("span",null,[l(" Show me posts by "),t(d,{inline:"",modelValue:e.selected8,"onUpdate:modelValue":a[7]||(a[7]=k=>e.selected8=k),options:[{text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}},{text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/images/avatar/small/elliot.jpg"}},{text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/images/avatar/small/stevie.jpg"}},{text:"Christian",value:"Christian",image:{avatar:!0,src:"/images/avatar/small/christian.jpg"}}]},null,8,["modelValue","options"])])]),_:1},8,["code"]),t(h,{title:"Pointing",description:"A dropdown can be formatted so that its menu is pointing",code:e.pointingCode},{default:i(()=>[t(d,{icon:"wrench",button:"",pointing:"top left"},{default:i(()=>[t(f,null,{default:i(()=>[t(s,{text:"New"}),t(s,{text:"Save As"}),t(s,{text:"Edit"})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Floating",description:"A dropdown menu can appear to be floating below an element",code:e.floatingCode},{default:i(()=>[t(_,{color:"teal"},{default:i(()=>[t(v,null,{default:i(()=>[l("Save")]),_:1}),t(d,{floating:"",button:"",icon:"dropdown"},{default:i(()=>[t(f,null,{default:i(()=>[t(s,{text:"Edit Post",icon:"edit"}),t(s,{text:"Remove Post",icon:"delete"}),t(s,{text:"Hide Post",icon:"hide"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const WL=we(YL,[["render",JL]]),KL=E({name:"EmbedDoc",components:{DocPageHeader:Je,DocExample:He},setup(){return{youtubeCode:`<sui-embed
  id="O6Xo21L0ybE"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`,aspectRatioCode:`<sui-embed
  aspectRatio="4:3"
  id="HTZudKi36bo"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`}}});function XL(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-embed"),u=y("doc-example"),f=y("sui-container");return T(),ge("div",null,[t(m,{title:"Embed",sub:"An embed displays content from other websites like YouTube videos or Google Maps"}),t(f,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"YouTube",description:"An embed can be used to display YouTube Content",code:e.youtubeCode},{default:i(()=>[t(s,{id:"O6Xo21L0ybE",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(u,{title:"Aspect Ratio",description:"An embed can specify an alternative aspect ratio",code:e.aspectRatioCode},{default:i(()=>[t(s,{aspectRatio:"4:3",id:"HTZudKi36bo",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"])]),_:1})])}const QL=we(KL,[["render",XL]]),ZL="/vue-fomantic-ui/images/avatar/large/rachel.png",eD=E({name:"ModalDoc",components:{DocPageHeader:Je,DocExample:He},setup(){const e=`<div>
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
</div>`}}}),tD=S("p",null," We've found the following gravatar image associated with your e-mail address. ",-1),iD=S("p",null,"Is it okay to use this photo?",-1),aD=S("p",null," Your inbox is getting full, would you like us to enable automatic archiving of old messages? ",-1);function lD(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-button"),u=y("sui-modal-header"),f=y("sui-image"),d=y("sui-modal-description"),h=y("sui-modal-content"),v=y("sui-modal-actions"),_=y("sui-modal"),C=y("doc-example"),k=y("sui-icon"),B=y("sui-container");return T(),ge("div",null,[t(m,{title:"Modal",sub:"A modal displays content that temporarily blocks interactions with the main view of a site"}),t(B,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(C,{title:"Modal",description:"A standard modal",code:e.modalCode},{default:i(()=>[S("div",null,[t(s,{onClick:a[0]||(a[0]=b=>e.modal1=!0)},{default:i(()=>[l("Show Modal")]),_:1}),t(_,{modelValue:e.modal1,"onUpdate:modelValue":a[2]||(a[2]=b=>e.modal1=b)},{default:i(()=>[t(u,null,{default:i(()=>[l("Select a Photo")]),_:1}),t(h,{image:""},{default:i(()=>[t(f,{wrapped:"",size:"medium",src:ZL}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[l("Default Profile Image")]),_:1}),tD,iD]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(s,{positive:"",onClick:a[1]||(a[1]=b=>e.modal1=!1)},{default:i(()=>[l("OK")]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),t(C,{title:"Basic",description:"A modal can reduce its complexity",code:e.basicCode},{default:i(()=>[S("div",null,[t(s,{onClick:a[3]||(a[3]=b=>e.basicModal=!0)},{default:i(()=>[l("Basic Modal")]),_:1}),t(_,{basic:"",modelValue:e.basicModal,"onUpdate:modelValue":a[5]||(a[5]=b=>e.basicModal=b)},{default:i(()=>[t(u,{icon:""},{default:i(()=>[t(k,{name:"archive"}),l(" Archive Old Messages ")]),_:1}),t(h,null,{default:i(()=>[aD]),_:1}),t(v,null,{default:i(()=>[t(s,{basic:"",color:"red",inverted:"",onClick:a[4]||(a[4]=b=>e.basicModal=!1)},{default:i(()=>[t(k,{name:"remove"}),l(" No ")]),_:1}),t(s,{basic:"",color:"green"},{default:i(()=>[t(k,{name:"checkmark"}),l(" Yes ")]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["code"])]),_:1})])}const nD=we(eD,[["render",lD]]),oD="/vue-fomantic-ui/images/movies/totoro-horizontal.jpg",sD=E({name:"PopupDoc",components:{DocPageHeader:Je,DocExample:He},setup(){const e=q(null),a=`<sui-button icon ref="trigger">
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
</sui-popup>`,_=q(null),C=q(null),k=q(null),B=q(null),b=q(null),w=q(null),x=q(null),$=q(null),D=`<sui-button ref="positionTrigger1">Top Left</sui-button>
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
<sui-popup :trigger="positionTrigger8" position="left center" content="I am positioned to the left center" />`,F=q(null),V=`<sui-button ref="flowingTrigger">Show Flowing Popup</sui-button>
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
</sui-popup>`,z=q(null),j=q(null),K=q(null),U=q(null),me=q(null),Te=`<sui-icon name="heart" circular link ref="sizeTrigger1" />
<sui-icon name="heart" circular link ref="sizeTrigger2" />
<sui-icon name="heart" circular link ref="sizeTrigger3" />
<sui-icon name="heart" circular link ref="sizeTrigger4" />
<sui-icon name="heart" circular link ref="sizeTrigger5" />

<sui-popup size="mini" content="Hello. This is a mini popup" :trigger="sizeTrigger1" />
<sui-popup size="tiny" content="Hello. This is a tiny popup" :trigger="sizeTrigger2" />
<sui-popup size="small" content="Hello. This is a small popup" :trigger="sizeTrigger3" />
<sui-popup size="large" content="Hello. This is a large popup" :trigger="sizeTrigger4" />
<sui-popup size="huge" content="Hello. This is a huge popup" :trigger="sizeTrigger5" />`,G=q(null),W=q(null);return{popupTrigger:e,popupCode:a,titledTrigger1:n,titledTrigger2:o,titledTrigger3:r,titledCode:c,triggerTriger:m,triggerCode:p,basicTrigger:s,basicCode:u,wideTrigger1:f,wideTrigger2:d,wideTrigger3:h,wideCode:v,positionTrigger1:_,positionTrigger2:C,positionTrigger3:k,positionTrigger4:B,positionTrigger5:b,positionTrigger6:w,positionTrigger7:x,positionTrigger8:$,positionCode:D,flowingTrigger:F,flowingCode:V,sizeTrigger1:z,sizeTrigger2:j,sizeTrigger3:K,sizeTrigger4:U,sizeTrigger5:me,sizeCode:Te,invertedTrigger1:G,invertedTrigger2:W,invertedCode:`<sui-icon name="heart" circular ref="invertedTrigger1" />
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
/>`}}}),rD=S("p",null,[S("b",null,"2"),l(" projects, $10 a month ")],-1),uD=S("p",null,[S("b",null,"5"),l(" projects, $20 a month ")],-1),cD=S("p",null,[S("b",null,"8"),l(" projects, $25 a month ")],-1);function dD(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-icon"),u=y("sui-button"),f=y("sui-popup"),d=y("doc-example"),h=y("sui-image"),v=y("sui-card-header"),_=y("sui-card-description"),C=y("sui-card-content"),k=y("sui-card"),B=y("sui-rating"),b=y("sui-divider"),w=y("sui-grid-column"),x=y("sui-grid"),$=y("sui-container");return T(),ge("div",null,[t(m,{title:"Popup",sub:"A popup displays additional information on top of a page"}),t($,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(d,{title:"Popup",description:"An element can specify popup content to appear",code:e.popupCode},{default:i(()=>[t(u,{icon:"",ref:"popupTrigger"},{default:i(()=>[t(s,{name:"add"})]),_:1},512),t(f,{trigger:e.popupTrigger},{default:i(()=>[l(" Add users to your feed ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(d,{title:"Titled",description:"An element can specify popup content with a title",code:e.titledCode},{default:i(()=>[t(h,{avatar:"",src:ei,ref:"titledTrigger1"},null,512),t(h,{avatar:"",src:Mo,ref:"titledTrigger2"},null,512),t(h,{avatar:"",src:An,ref:"titledTrigger3"},null,512),t(f,{trigger:e.titledTrigger1,header:"Elliot Fu",content:"Elliot has been a member since July 2012"},null,8,["trigger"]),t(f,{trigger:e.titledTrigger2,header:"Stevie Feliciano",content:"Stevie has been a member since August 2013"},null,8,["trigger"]),t(f,{trigger:e.titledTrigger3,header:"Matt",content:"Matt has been a member since July 2014"},null,8,["trigger"])]),_:1},8,["code"]),t(d,{title:"Trigger",description:"A trigger can be complex element",code:e.triggerCode},{default:i(()=>[t(k,{ref:"triggerTriger"},{default:i(()=>[t(h,{src:oD}),t(C,null,{default:i(()=>[t(v,null,{default:i(()=>[l("My Neighbor Totoro")]),_:1}),t(_,null,{default:i(()=>[l(" Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits. ")]),_:1})]),_:1})]),_:1},512),t(f,{trigger:e.triggerTriger,header:"User Rating"},{default:i(()=>[t(B,{icon:"star",defaultRating:3,maxRating:4})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(d,{title:"Basic",description:"A popup can provide more basic formatting",code:e.basicCode},{default:i(()=>[t(u,{icon:"",ref:"basicTrigger"},{default:i(()=>[t(s,{name:"add"})]),_:1},512),t(f,{trigger:e.basicTrigger,basic:"",content:"The default theme's basic popup removes the pointing arrow."},null,8,["trigger"])]),_:1},8,["code"]),t(d,{title:"Position",description:"A popup can be position around its trigger",code:e.positionCode},{default:i(()=>[t(u,{ref:"positionTrigger1"},{default:i(()=>[l("Top Left")]),_:1},512),t(u,{ref:"positionTrigger2"},{default:i(()=>[l("Top Center")]),_:1},512),t(u,{ref:"positionTrigger3"},{default:i(()=>[l("Top Right")]),_:1},512),t(b),t(u,{ref:"positionTrigger4"},{default:i(()=>[l("Bottom Left")]),_:1},512),t(u,{ref:"positionTrigger5"},{default:i(()=>[l("Bottom Center")]),_:1},512),t(u,{ref:"positionTrigger6"},{default:i(()=>[l("Bottom Right")]),_:1},512),t(b),t(u,{ref:"positionTrigger7"},{default:i(()=>[l("Right Center")]),_:1},512),t(u,{ref:"positionTrigger8"},{default:i(()=>[l("Left Center")]),_:1},512),t(f,{trigger:e.positionTrigger1,position:"top left",content:"I am positioned to the top left"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger2,position:"top center",content:"I am positioned to the top center"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger3,position:"top right",content:"I am positioned to the top right"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger4,position:"bottom left",content:"I am positioned to the bottom left"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger5,position:"bottom center",content:"I am positioned to the bottom center"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger6,position:"bottom right",content:"I am positioned to the bottom right"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger7,position:"right center",content:"I am positioned to the right center"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger8,position:"left center",content:"I am positioned to the left center"},null,8,["trigger"])]),_:1},8,["code"]),t(d,{title:"Flowing",description:"A popup can have no maximum width and continue to flow to fit its content",code:e.flowingCode},{default:i(()=>[t(u,{ref:"flowingTrigger"},{default:i(()=>[l("Show Flowing Popup")]),_:1},512),t(f,{trigger:e.flowingTrigger,flowing:""},{default:i(()=>[t(x,{centered:"",divided:"",columns:3},{default:i(()=>[t(w,{textAlign:"center"},{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[l("Basic Plan")]),_:1}),rD,t(u,null,{default:i(()=>[l("Choose")]),_:1})]),_:1}),t(w,{textAlign:"center"},{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[l("Business Plan")]),_:1}),uD,t(u,null,{default:i(()=>[l("Choose")]),_:1})]),_:1}),t(w,{textAlign:"center"},{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[l("Premium Plan")]),_:1}),cD,t(u,null,{default:i(()=>[l("Choose")]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(d,{title:"Size",description:"A popup can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger1"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger2"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger3"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger4"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger5"},null,512),t(f,{size:"mini",content:"Hello. This is a mini popup",trigger:e.sizeTrigger1},null,8,["trigger"]),t(f,{size:"tiny",content:"Hello. This is a tiny popup",trigger:e.sizeTrigger2},null,8,["trigger"]),t(f,{size:"small",content:"Hello. This is a small popup",trigger:e.sizeTrigger3},null,8,["trigger"]),t(f,{size:"large",content:"Hello. This is a large popup",trigger:e.sizeTrigger4},null,8,["trigger"]),t(f,{size:"huge",content:"Hello. This is a huge popup",trigger:e.sizeTrigger5},null,8,["trigger"])]),_:1},8,["code"]),t(d,{title:"Wide",description:"A popup can be extra wide to allow for longer content",code:e.wideCode},{default:i(()=>[t(s,{name:"heart",circular:"",ref:"wideTrigger1"},null,512),t(s,{name:"heart",circular:"",ref:"wideTrigger2"},null,512),t(s,{name:"heart",circular:"",ref:"wideTrigger3"},null,512),t(f,{trigger:e.wideTrigger1},{default:i(()=>[l(" Hello. This is a regular pop-up which does not allow for lots of content. You cannot fit a lot of words here as the paragraphs will be pretty narrow. ")]),_:1},8,["trigger"]),t(f,{trigger:e.wideTrigger2,wide:""},{default:i(()=>[l(" Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"]),t(f,{trigger:e.wideTrigger3,wide:"very"},{default:i(()=>[l(" Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(d,{title:"Inverted",description:"A popup can have its colors inverted",code:e.invertedCode},{default:i(()=>[t(s,{name:"heart",circular:"",ref:"invertedTrigger1"},null,512),t(u,{icon:"",ref:"invertedTrigger2"},{default:i(()=>[t(s,{name:"add"})]),_:1},512),t(f,{trigger:e.invertedTrigger1,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"]),t(f,{trigger:e.invertedTrigger2,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"])]),_:1},8,["code"])]),_:1})])}const mD=we(sD,[["render",dD]]),pD=E({name:"ProgressDoc",components:{DocPageHeader:Je,DocExample:He},setup(){return{standardCode:'<sui-progress :percent="42" label="Uploading Files" progress />',indicatingCode:'<sui-progress :percent="30" label="30% Founded" indicating active />',barCode:'<sui-progress :percent="33" />',progressCode:'<sui-progress :percent="14" progress />',centeredCode:'<sui-progress :percent="68" progress="centered" />',labelCode:'<sui-progress :percent="37" label="Uploading Files" progress />',activeCode:'<sui-progress :percent="33" label="Uploading Files" progress active />',successCode:'<sui-progress :percent="100" label="Everything worked, your file is all ready." progress success />',warningCode:`<sui-progress :percent="100" label="Your file didn't meet the minimum resolution requirements." progress warning />`,errorCode:'<sui-progress :percent="100" label="There was an error." progress error />',disabledCode:'<sui-progress :percent="25" disabled />',invertedCode:`<sui-segment inverted>
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
<sui-progress :percent="73" color="black" />`}}});function fD(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-progress"),u=y("doc-example"),f=y("sui-segment"),d=y("sui-container");return T(),ge("div",null,[t(m,{title:"Progress",sub:"A progress bar shows the progression of a task"}),t(d,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"Standard",description:"A standard progress bar",code:e.standardCode},{default:i(()=>[t(s,{percent:42,label:"Uploading Files",progress:""})]),_:1},8,["code"]),t(u,{title:"Indicating",description:"An indicating progress bar visually indicates the current level of progress of a task",code:e.indicatingCode},{default:i(()=>[t(s,{percent:30,label:"30% Founded",indicating:"",active:""})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(u,{title:"Bar",description:"A progress element can contain a bar visually indicating progress",code:e.barCode},{default:i(()=>[t(s,{percent:33})]),_:1},8,["code"]),t(u,{title:"Progress",description:"A progress bar can contain a text value indicating current progress",code:e.progressCode},{default:i(()=>[t(s,{percent:14,progress:""})]),_:1},8,["code"]),t(u,{title:"Centered Progress Text",description:"The text inside a progress can be centered",code:e.centeredCode},{default:i(()=>[t(s,{percent:68,progress:"centered"})]),_:1},8,["code"]),t(u,{title:"Label",description:"A progress element can contain a label",code:e.labelCode},{default:i(()=>[t(s,{percent:37,label:"Uploading Files",progress:""})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(u,{title:"Active",description:"A progress bar can show activity",code:e.activeCode},{default:i(()=>[t(s,{percent:33,label:"Uploading Files",progress:"",active:""})]),_:1},8,["code"]),t(u,{title:"Success",description:"A progress bar can show a success state",code:e.successCode},{default:i(()=>[t(s,{percent:100,label:"Everything worked, your file is all ready.",progress:"",success:""})]),_:1},8,["code"]),t(u,{title:"Warning",description:"A progress bar can show a warning state",code:e.warningCode},{default:i(()=>[t(s,{percent:100,label:"Your file didn't meet the minimum resolution requirements.",progress:"",warning:""})]),_:1},8,["code"]),t(u,{title:"Error",description:"A progress bar can show an error state",code:e.errorCode},{default:i(()=>[t(s,{percent:100,label:"There was an error.",progress:"",error:""})]),_:1},8,["code"]),t(u,{title:"Disabled",description:"A progress bar can be disabled",code:e.disabledCode},{default:i(()=>[t(s,{percent:25,disabled:""})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(u,{title:"Inverted",description:"A progress bar can have its colors inverted",code:e.invertedCode},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(s,{inverted:"",percent:41,label:"Uploading Files",progress:""}),t(s,{inverted:"",percent:100,label:"Success",success:"",progress:""}),t(s,{inverted:"",percent:100,label:"Warning",warning:"",progress:""}),t(s,{inverted:"",percent:100,label:"Error",error:"",progress:""})]),_:1})]),_:1},8,["code"]),t(u,{title:"Attached",description:"A progress bar can show progress of an element",code:e.attachedCode},{default:i(()=>[t(f,null,{default:i(()=>[t(s,{percent:47,attached:"top"}),l(" La la la la "),t(s,{percent:26,attached:"bottom"})]),_:1})]),_:1},8,["code"]),t(u,{title:"Size",description:"A progress bar can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{percent:88,size:"tiny",label:"tiny"}),t(s,{percent:100,size:"small",label:"small",success:""}),t(s,{percent:83,label:"standard"}),t(s,{percent:73,size:"large",label:"large"}),t(s,{percent:94,size:"big",label:"big"})]),_:1},8,["code"]),t(u,{title:"Color",description:"A progress bar can have different colors",code:e.colorCode},{default:i(()=>[t(s,{percent:32,color:"red"}),t(s,{percent:53,color:"orange"}),t(s,{percent:13,color:"yellow"}),t(s,{percent:37,color:"olive"}),t(s,{percent:83,color:"green"}),t(s,{percent:24,color:"teal"}),t(s,{percent:88,color:"blue"}),t(s,{percent:41,color:"violet"}),t(s,{percent:47,color:"purple"}),t(s,{percent:30,color:"pink"}),t(s,{percent:68,color:"brown"}),t(s,{percent:35,color:"grey"}),t(s,{percent:73,color:"black"})]),_:1},8,["code"])]),_:1})])}const gD=we(pD,[["render",fD]]),hD=E({name:"RatingDoc",components:{DocPageHeader:Je,DocExample:He,PropertyListTable:kn},setup(){return{ratingCode:'<sui-rating v-model="value" />',iconCode:`<sui-rating :defaultRating="2" :maxRating="4" color="yellow" />
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
<sui-rating size="massive" :defaultRating="3" :maxRating="4" color="yellow" />`,properties:[{name:"color",type:"string",default:"",description:"A rating can have different colors"},{name:"defaultRating",type:"number",default:0,description:"The initial value of rating."},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"icon",type:"string",default:"star",description:"A rating can use a set of specified icons."},{name:"maxRating",type:"number",default:1,description:"The total number of icons."},{name:"modelValue",type:"number",default:"null",description:"A value of rating."},{name:"size",type:"string",default:"",description:"A rating can have different sizes."}],events:[{name:"change",description:"Callback to invoke on value change."}]}}}),_D=S("br",null,null,-1),bD=S("br",null,null,-1),vD=S("br",null,null,-1),yD=S("br",null,null,-1),SD=S("br",null,null,-1),wD=S("br",null,null,-1),CD=S("br",null,null,-1),AD=S("br",null,null,-1),kD=S("br",null,null,-1),xD=S("br",null,null,-1),$D=S("br",null,null,-1),BD=S("br",null,null,-1),TD=S("br",null,null,-1),LD=S("br",null,null,-1),DD=S("br",null,null,-1),ID=S("br",null,null,-1),ED=S("br",null,null,-1),RD=S("br",null,null,-1),zD=S("br",null,null,-1),PD=S("br",null,null,-1),FD=S("br",null,null,-1),MD=S("br",null,null,-1),VD=S("br",null,null,-1),HD=S("br",null,null,-1),ND=S("br",null,null,-1),OD=S("br",null,null,-1),jD=S("br",null,null,-1),GD=S("br",null,null,-1),qD=S("br",null,null,-1),UD=S("br",null,null,-1),YD=S("br",null,null,-1),JD=S("br",null,null,-1),WD=S("br",null,null,-1),KD=S("br",null,null,-1),XD=S("br",null,null,-1),QD=S("br",null,null,-1),ZD=S("br",null,null,-1),eI=S("br",null,null,-1),tI=S("br",null,null,-1),iI=S("br",null,null,-1),aI=S("br",null,null,-1),lI=S("br",null,null,-1),nI=S("br",null,null,-1),oI=S("br",null,null,-1),sI=S("br",null,null,-1),rI=S("br",null,null,-1),uI=S("br",null,null,-1),cI=S("br",null,null,-1);function dI(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-rating"),u=y("doc-example"),f=y("property-list-table"),d=y("sui-table-header-cell"),h=y("sui-table-row"),v=y("sui-table-header"),_=y("sui-table-cell"),C=y("sui-table-body"),k=y("sui-table"),B=y("sui-container");return T(),ge("div",null,[t(m,{title:"Rating",sub:"A rating indicates user interest in content"}),t(B,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"Rating",description:"A Basic rating",code:e.ratingCode},{default:i(()=>[t(s)]),_:1},8,["code"]),t(u,{title:"Icon",description:"You can use any available icon as rating indicator",code:e.iconCode},{default:i(()=>[t(s,{defaultRating:2,maxRating:4,color:"yellow"}),_D,bD,t(s,{defaultRating:2,maxRating:4,icon:"heart",color:"red"}),vD,yD,t(s,{defaultRating:2,maxRating:4,icon:"female",color:"purple"}),SD,wD,t(s,{defaultRating:2,maxRating:4,icon:"male",color:"blue"}),CD,AD,t(s,{defaultRating:2,maxRating:4,icon:"cloud",color:"grey"}),kD,xD,t(s,{defaultRating:2,maxRating:4,icon:"cat",color:"pink"}),$D,BD,t(s,{defaultRating:2,maxRating:4,icon:"circle",color:"orange"})]),_:1},8,["code"]),t(u,{title:"Color",description:"You can specify any color of the FUI color palette",code:e.colorCode},{default:i(()=>[t(s,{defaultRating:1,maxRating:7,color:"red"}),TD,LD,t(s,{defaultRating:2,maxRating:7,color:"orange"}),DD,ID,t(s,{defaultRating:3,maxRating:7,color:"yellow"}),ED,RD,t(s,{defaultRating:4,maxRating:7,color:"olive"}),zD,PD,t(s,{defaultRating:5,maxRating:7,color:"green"}),FD,MD,t(s,{defaultRating:6,maxRating:7,color:"teal"}),VD,HD,t(s,{defaultRating:6,maxRating:7,color:"blue"}),ND,OD,t(s,{defaultRating:5,maxRating:7,color:"violet"}),jD,GD,t(s,{defaultRating:4,maxRating:7,color:"purple"}),qD,UD,t(s,{defaultRating:3,maxRating:7,color:"pink"}),YD,JD,t(s,{defaultRating:2,maxRating:7,color:"brown"}),WD,KD,t(s,{defaultRating:1,maxRating:7,color:"grey"}),XD,QD,t(s,{defaultRating:1,maxRating:7,color:"black"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(u,{title:"Disabled",description:"A rating can be started in non-interactive mode by adding a disabled class",code:e.disabledCode},{default:i(()=>[t(s,{disabled:"",defaultRating:3,maxRating:5,color:"yellow"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(u,{title:"Size",description:"A rating can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{size:"mini",defaultRating:3,maxRating:4,color:"yellow"}),ZD,eI,t(s,{size:"tiny",defaultRating:3,maxRating:4,color:"yellow"}),tI,iI,t(s,{size:"small",defaultRating:3,maxRating:4,color:"yellow"}),aI,lI,t(s,{defaultRating:3,maxRating:4,color:"yellow"}),nI,oI,t(s,{size:"large",defaultRating:3,maxRating:4,color:"yellow"}),sI,rI,t(s,{size:"huge",defaultRating:3,maxRating:4,color:"yellow"}),uI,cI,t(s,{size:"massive",defaultRating:3,maxRating:4,color:"yellow"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Properties")]),_:1}),t(f,{properties:e.properties},null,8,["properties"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Events")]),_:1}),t(k,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Name")]),_:1}),t(d,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[(T(!0),ge(Ce,null,tt(e.events,b=>(T(),I(h,{key:b.name},{default:i(()=>[t(_,null,{default:i(()=>[l(ke(b.name),1)]),_:2},1024),t(_,null,{default:i(()=>[l(ke(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const mI=we(hD,[["render",dI]]),pI=E({name:"SidebarDoc",components:{DocPageHeader:Je,DocExample:He,PropertyListTable:kn},setup(){return{visible1:q(!1),sidebarCode:`<sui-grid :columns="1">
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
</sui-grid>`,properties:[{name:"animation",type:"string",default:"overlay",description:"Specifies the animation of the sidebar."},{name:"dimmed",type:"boolean",default:"false",description:"When specified, display the dim inside pusher content."},{name:"direction",type:"string",default:"left",description:"Specifies the direction the sidebar should appear on."},{name:"visible",type:"boolean",default:"false",description:"Specifies the visibility of the sidebar."}],events:[{name:"hide",description:"Callback to invoke when sidebar hide."},{name:"show",description:"Callback to invoke when sidebar show."}]}}}),fI={class:"pusher"};function gI(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-icon"),u=y("sui-button"),f=y("sui-grid-column"),d=y("sui-menu-item"),h=y("sui-sidebar"),v=y("sui-image"),_=y("sui-segment"),C=y("sui-grid"),k=y("doc-example"),B=y("property-list-table"),b=y("sui-table-header-cell"),w=y("sui-table-row"),x=y("sui-table-header"),$=y("sui-table-cell"),D=y("sui-table-body"),F=y("sui-table"),V=y("sui-container");return T(),ge("div",null,[t(m,{title:"Sidebar",sub:"A sidebar hides additional content beside a page"}),t(V,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(k,{title:"Sidebar",description:"A sidebar",code:e.sidebarCode},{default:i(()=>[t(C,{columns:1},{default:i(()=>[t(f,null,{default:i(()=>[t(u,{onClick:a[0]||(a[0]=z=>e.visible1=!e.visible1),icon:""},{default:i(()=>[t(s,{name:"arrow right"})]),_:1})]),_:1}),t(f,null,{default:i(()=>[t(_,{class:"pushable"},{default:i(()=>[t(h,{visible:e.visible1,"onUpdate:visible":a[1]||(a[1]=z=>e.visible1=z),dimmed:"",icon:"labeled",inverted:""},{default:i(()=>[t(d,null,{default:i(()=>[t(s,{name:"home"}),l(" Home ")]),_:1}),t(d,null,{default:i(()=>[t(s,{name:"gamepad"}),l(" Games ")]),_:1}),t(d,null,{default:i(()=>[t(s,{name:"camera"}),l(" Channels ")]),_:1})]),_:1},8,["visible"]),S("div",fI,[t(_,null,{default:i(()=>[t(p,{as:"h2"},{default:i(()=>[l("Main Header")]),_:1}),t(v,{src:ze})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Properties")]),_:1}),t(B,{properties:e.properties},null,8,["properties"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Events")]),_:1}),t(F,{celled:""},{default:i(()=>[t(x,null,{default:i(()=>[t(w,null,{default:i(()=>[t(b,null,{default:i(()=>[l("Name")]),_:1}),t(b,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(D,null,{default:i(()=>[(T(!0),ge(Ce,null,tt(e.events,z=>(T(),I(w,{key:z.name},{default:i(()=>[t($,null,{default:i(()=>[l(ke(z.name),1)]),_:2},1024),t($,null,{default:i(()=>[l(ke(z.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const hI=we(pI,[["render",gI]]),_I=E({name:"SliderDoc",components:{DocPageHeader:Je,DocExample:He},setup(){const e=q(5),a='<sui-slider v-model="slider1" />',n=q(4),o='<sui-slider labeled v-model="slider2" />',r=q(6),c='<sui-slider labeled="ticked" v-model="slider3" />',m=q(0),p=`<sui-slider
  v-model="slider4"
  labeled="ticked"
  :labels='["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ/ς", "τ", "υ", "φ"]'
  :max="20"
/>`,s=q(40),u='<sui-slider v-model="slider5" labeled :step="5" :max="120" :min="20" />',f=q([]);f.value.push(20,60);const d='<sui-slider v-model="slider6" range labeled="ticked" :min="5" :max="100" :step="5" />',h=q(7),v='<sui-slider disabled v-model="slider7" />',_=q(8),C=`<sui-segment inverted>
  <sui-slider inverted v-model="slider8" />
</sui-segment>`,k=q(3),B='<sui-slider reversed v-model="slider9" />',b=q(18),w='<sui-slider vertical v-model="slider10" :max="20" />',x=q(5),$=q(5),D=q(5),F=q(5),V=q(5),z=q(5),j=q(5),K=q(5),U=q(5),me=q(5),Te=q(5),G=q(5),W=q(5),ce=`<sui-slider color="red" v-model="redSlider" />
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
</sui-segment>`,Le=q(5),We=q(5),nt=q(5);return{slider1:e,sliderCode:a,slider2:n,labeledSliderCode:o,slider3:r,labeledTickedCode:c,slider4:m,customLabelsCode:p,slider5:s,stepCode:u,slider6:f,rangeCode:d,slider7:h,disabledCode:v,slider8:_,invertedCode:C,slider9:k,reversedCode:B,slider10:b,verticalCode:w,redSlider:x,orangeSlider:$,yellowSlider:D,oliveSlider:F,greenSlider:V,tealSlider:z,blueSlider:j,violetSlider:K,purpleSlider:U,pinkSlider:me,brownSlider:Te,greySlider:G,blackSlider:W,coloredCode:ce,invertedColoredCode:ie,smallSlider:Le,largeSlider:We,bigSlider:nt,sizeCode:`<sui-slider size="small" color="red" v-model="smallSlider" />
<sui-slider size="large" color="yellow" v-model="largeSlider" />
<sui-slider size="big" color="olive" v-model="bigSlider" />`,properties:[{name:"color",type:"string",default:"",description:"A slider can have different colors"},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"inverted",type:"boolean",default:!1,description:"A slider can be formatted to appear on dark backgrounds."},{name:"labeled",type:"boolean|string",default:!1,description:"A slider can show its labels."},{name:"labels",type:"string[]",default:"",description:"A slider can have a custom label according to the label value."},{name:"max",type:"number",default:10,description:"Maximum boundary value."},{name:"min",type:"number",default:0,description:"Mininum boundary value."},{name:"modelValue",type:"number|number[]",default:0,description:"A value of component."},{name:"range",type:"boolean",default:!1,description:"When specified, allows two boundary values to be picked."},{name:"reversed",type:"boolean",default:!1,description:"A slider can be reversed."},{name:"size",type:"string",default:"",description:"A slider can have different sizes."},{name:"step",type:"number",default:1,description:"Step factor to increment/decrement the value."},{name:"vertical",type:"boolean",default:!1,description:"When specified, orientation of the slider becomes vertical."},{name:"verticalHeight",type:"number|string",default:200,description:"Height of the vertical slider."}],events:[{name:"change",description:"Callback to invoke on value change."},{name:"slideend",description:"Callback to invoke when slide end."}]}}});function bI(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-slider"),u=y("doc-example"),f=y("sui-segment"),d=y("sui-table-header-cell"),h=y("sui-table-row"),v=y("sui-table-header"),_=y("sui-table-cell"),C=y("sui-table-body"),k=y("sui-table"),B=y("sui-container");return T(),ge("div",null,[t(m,{title:"Slider",sub:"A slider allows users to select values within a range"}),t(B,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"Slider",description:"A standard slider",code:e.sliderCode},{default:i(()=>[t(s,{modelValue:e.slider1,"onUpdate:modelValue":a[0]||(a[0]=b=>e.slider1=b)},null,8,["modelValue"]),l(" "+ke(e.slider1),1)]),_:1},8,["code"]),t(u,{title:"Labeled Slider",description:"A slider that show its labels",code:e.labeledSliderCode},{default:i(()=>[t(s,{labeled:"",modelValue:e.slider2,"onUpdate:modelValue":a[1]||(a[1]=b=>e.slider2=b)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Labeled Ticked Slider",description:"A slider that show its labels and ticks",code:e.labeledTickedCode},{default:i(()=>[t(s,{labeled:"ticked",modelValue:e.slider3,"onUpdate:modelValue":a[2]||(a[2]=b=>e.slider3=b)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Custom Interpreted Labels",description:"You can provide a function which returns a custom label according to the label value",code:e.customLabelsCode},{default:i(()=>[t(s,{modelValue:e.slider4,"onUpdate:modelValue":a[3]||(a[3]=b=>e.slider4=b),labeled:"ticked",labels:["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ/ς","τ","υ","φ"],max:20},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Step",description:"A slider can change the default step increment",code:e.stepCode},{default:i(()=>[t(s,{modelValue:e.slider5,"onUpdate:modelValue":a[4]||(a[4]=b=>e.slider5=b),labeled:"",step:5,max:120,min:20},null,8,["modelValue"]),l(" "+ke(e.slider5),1)]),_:1},8,["code"]),t(u,{title:"Range",description:"A range slider which allow you to select a range between two values",code:e.rangeCode},{default:i(()=>[t(s,{modelValue:e.slider6,"onUpdate:modelValue":a[5]||(a[5]=b=>e.slider6=b),range:"",labeled:"ticked",min:5,max:100,step:5},null,8,["modelValue"]),l(" "+ke(e.slider6),1)]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(u,{title:"Disabled",description:"A slider can appear disabled",code:e.disabledCode},{default:i(()=>[t(s,{disabled:"",modelValue:e.slider7,"onUpdate:modelValue":a[6]||(a[6]=b=>e.slider7=b)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Inverted",description:"A slider can be inverted",code:e.invertedCode},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(s,{inverted:"",modelValue:e.slider8,"onUpdate:modelValue":a[7]||(a[7]=b=>e.slider8=b)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(u,{title:"Reversed",description:"A slider can be reversed",code:e.reversedCode},{default:i(()=>[t(s,{reversed:"",modelValue:e.slider9,"onUpdate:modelValue":a[8]||(a[8]=b=>e.slider9=b)},null,8,["modelValue"]),l(" "+ke(e.slider9),1)]),_:1},8,["code"]),t(u,{title:"Vertical",description:"A slider can be vertical",code:e.verticalCode},{default:i(()=>[t(s,{vertical:"",modelValue:e.slider10,"onUpdate:modelValue":a[9]||(a[9]=b=>e.slider10=b),max:20},null,8,["modelValue"]),l(" "+ke(e.slider10),1)]),_:1},8,["code"]),t(u,{title:"Colored",description:"A slider can be different colors",code:e.coloredCode},{default:i(()=>[t(s,{color:"red",modelValue:e.redSlider,"onUpdate:modelValue":a[10]||(a[10]=b=>e.redSlider=b)},null,8,["modelValue"]),t(s,{color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":a[11]||(a[11]=b=>e.orangeSlider=b)},null,8,["modelValue"]),t(s,{color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":a[12]||(a[12]=b=>e.yellowSlider=b)},null,8,["modelValue"]),t(s,{color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":a[13]||(a[13]=b=>e.oliveSlider=b)},null,8,["modelValue"]),t(s,{color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":a[14]||(a[14]=b=>e.greenSlider=b)},null,8,["modelValue"]),t(s,{color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":a[15]||(a[15]=b=>e.tealSlider=b)},null,8,["modelValue"]),t(s,{color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":a[16]||(a[16]=b=>e.blueSlider=b)},null,8,["modelValue"]),t(s,{color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":a[17]||(a[17]=b=>e.violetSlider=b)},null,8,["modelValue"]),t(s,{color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":a[18]||(a[18]=b=>e.purpleSlider=b)},null,8,["modelValue"]),t(s,{color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":a[19]||(a[19]=b=>e.pinkSlider=b)},null,8,["modelValue"]),t(s,{color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":a[20]||(a[20]=b=>e.brownSlider=b)},null,8,["modelValue"]),t(s,{color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":a[21]||(a[21]=b=>e.greySlider=b)},null,8,["modelValue"]),t(s,{color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":a[22]||(a[22]=b=>e.blackSlider=b)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Inverted Colored",description:"A slider can be different colors while inverted",code:e.invertedColoredCode},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(s,{inverted:"",color:"red",modelValue:e.redSlider,"onUpdate:modelValue":a[23]||(a[23]=b=>e.redSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":a[24]||(a[24]=b=>e.orangeSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":a[25]||(a[25]=b=>e.yellowSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":a[26]||(a[26]=b=>e.oliveSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":a[27]||(a[27]=b=>e.greenSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":a[28]||(a[28]=b=>e.tealSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":a[29]||(a[29]=b=>e.blueSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":a[30]||(a[30]=b=>e.violetSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":a[31]||(a[31]=b=>e.purpleSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":a[32]||(a[32]=b=>e.pinkSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":a[33]||(a[33]=b=>e.brownSlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":a[34]||(a[34]=b=>e.greySlider=b)},null,8,["modelValue"]),t(s,{inverted:"",color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":a[35]||(a[35]=b=>e.blackSlider=b)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(u,{title:"Size",description:"A slider can have different sizes",code:e.sizeCode},{default:i(()=>[t(s,{size:"small",color:"red",modelValue:e.smallSlider,"onUpdate:modelValue":a[36]||(a[36]=b=>e.smallSlider=b)},null,8,["modelValue"]),t(s,{size:"large",color:"yellow",modelValue:e.largeSlider,"onUpdate:modelValue":a[37]||(a[37]=b=>e.largeSlider=b)},null,8,["modelValue"]),t(s,{size:"big",color:"olive",modelValue:e.bigSlider,"onUpdate:modelValue":a[38]||(a[38]=b=>e.bigSlider=b)},null,8,["modelValue"])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Properties")]),_:1}),t(k,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Name")]),_:1}),t(d,null,{default:i(()=>[l("Type")]),_:1}),t(d,null,{default:i(()=>[l("Default")]),_:1}),t(d,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[(T(!0),ge(Ce,null,tt(e.properties,b=>(T(),I(h,{key:b.name},{default:i(()=>[t(_,null,{default:i(()=>[l(ke(b.name),1)]),_:2},1024),t(_,null,{default:i(()=>[l(ke(b.type),1)]),_:2},1024),t(_,null,{default:i(()=>[l(ke(b.default),1)]),_:2},1024),t(_,null,{default:i(()=>[l(ke(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Events")]),_:1}),t(k,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(d,null,{default:i(()=>[l("Name")]),_:1}),t(d,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[(T(!0),ge(Ce,null,tt(e.events,b=>(T(),I(h,{key:b.name},{default:i(()=>[t(_,null,{default:i(()=>[l(ke(b.name),1)]),_:2},1024),t(_,null,{default:i(()=>[l(ke(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const vI=we(_I,[["render",bI]]),yI=E({name:"TabDoc",components:{DocPageHeader:Je,DocExample:He,PropertyListTable:kn},setup(){return{basicCode:`<sui-tab>
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
</sui-tab>`,tabProperties:[{name:"activeIndex",type:"string",default:0,description:"Index of the active tab."},{name:"pointing",type:"boolean",default:!1,description:""}],tabPanelProperties:[{name:"header",type:"boolean",default:"null",description:"Orientation of tab headers."}],events:[{name:"tab-change",description:"Callback to invoke when an active tab is changed."},{name:"tab-click",description:"Callback to invoke when an tab is clicked."}]}}});function SI(e,a,n,o,r,c){const m=y("doc-page-header"),p=y("sui-header"),s=y("sui-tab-panel"),u=y("sui-tab"),f=y("doc-example"),d=y("property-list-table"),h=y("sui-table-header-cell"),v=y("sui-table-row"),_=y("sui-table-header"),C=y("sui-table-cell"),k=y("sui-table-body"),B=y("sui-table"),b=y("sui-container");return T(),ge("div",null,[t(m,{title:"Tab",sub:"A tab is a hidden section of content activated by a menu"}),t(b,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Examples")]),_:1}),t(f,{title:"Basic",code:e.basicCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{header:"First"},{default:i(()=>[l("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[l("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[l("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Pointing",code:e.pointingCode},{default:i(()=>[t(u,{pointing:""},{default:i(()=>[t(s,{header:"First"},{default:i(()=>[l("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[l("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[l("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Secondary",code:e.secondaryCode},{default:i(()=>[t(u,{secondary:""},{default:i(()=>[t(s,{header:"First"},{default:i(()=>[l("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[l("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[l("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Text",code:e.textCode},{default:i(()=>[t(u,{text:""},{default:i(()=>[t(s,{header:"First"},{default:i(()=>[l("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[l("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[l("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Properties")]),_:1}),t(p,{as:"h3"},{default:i(()=>[l("Tab")]),_:1}),t(d,{properties:e.tabProperties},null,8,["properties"]),t(p,{as:"h3"},{default:i(()=>[l("TabPanel")]),_:1}),t(d,{properties:e.tabPanelProperties},null,8,["properties"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Events")]),_:1}),t(B,{celled:""},{default:i(()=>[t(_,null,{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[l("Name")]),_:1}),t(h,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(k,null,{default:i(()=>[(T(!0),ge(Ce,null,tt(e.events,w=>(T(),I(v,{key:w.name},{default:i(()=>[t(C,null,{default:i(()=>[l(ke(w.name),1)]),_:2},1024),t(C,null,{default:i(()=>[l(ke(w.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const wI=we(yI,[["render",SI]]),CI=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({ message: 'I am a toast, nice to meet you !' })
}
<\/script>`,AI={__name:"MinimalDoc",setup(e){const{toast:a}=st(),n=()=>{a({message:"I am a toast, nice to meet you !"})};return(o,r)=>{const c=y("SuiButton");return T(),I(M,{label:"Minimal",code:CI},{description:i(()=>[l(" A minimal toast will just display a message. ")]),example:i(()=>[t(c,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},kI=`<template>
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
<\/script>`,xI={__name:"TitledDoc",setup(e){const{toast:a}=st(),n=()=>{a({title:"Better ?",message:"Hey look, I have a title !"})};return(o,r)=>{const c=y("SuiButton");return T(),I(M,{label:"Titled",code:kI},{description:i(()=>[l(" You can add a title to your toast. ")]),example:i(()=>[t(c,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},$I=`<template>
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
<\/script>`,BI={__name:"ProgressBarDoc",setup(e){const{toast:a}=st(),n=o=>{a({title:"LOOK",message:"See, how long i will last",showProgress:"bottom",showProgressColor:o})};return(o,r)=>{const c=y("SuiButton");return T(),I(M,{label:"Progress Bar",code:$I},{description:i(()=>[l(" You can attach a progress bar to your toast. ")]),example:i(()=>[t(c,{onClick:n},{default:i(()=>[l("Show")]),_:1}),t(c,{color:"red",onClick:r[0]||(r[0]=m=>n("red"))},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},TI=`<template>
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
<\/script>`,LI={__name:"ToastTypeDoc",setup(e){const{toast:a}=st(),n=o=>{a({message:"You're using the good framework !",type:o})};return(o,r)=>{const c=y("SuiButton");return T(),I(M,{label:"Toast Type",code:TI},{description:i(()=>[l(" A toast can be used to display different types of informations. ")]),example:i(()=>[t(c,{onClick:r[0]||(r[0]=m=>n("success")),positive:""},{default:i(()=>[l("Success")]),_:1}),t(c,{onClick:r[1]||(r[1]=m=>n("error")),negative:""},{default:i(()=>[l("Error")]),_:1}),t(c,{onClick:r[2]||(r[2]=m=>n("warning")),color:"yellow"},{default:i(()=>[l("Warning")]),_:1})]),_:1})}}},DI=`<template>
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
<\/script>`,II={__name:"PositionDoc",setup(e){const{toast:a}=st(),n=o=>{a({position:o,message:"Look, I'm here !"})};return(o,r)=>{const c=y("SuiButton");return T(),I(M,{label:"Position",code:DI},{description:i(()=>[l(" A toast can appear at different positions on the screen. ")]),example:i(()=>[t(c,{onClick:r[0]||(r[0]=m=>n("top left"))},{default:i(()=>[l("Top Left")]),_:1}),t(c,{onClick:r[1]||(r[1]=m=>n("bottom right"))},{default:i(()=>[l("Bottom Right")]),_:1})]),_:1})}}},EI=S("br",null,null,-1),RI=`<template>
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
<\/script>`,zI={__name:"AttachedPosition",setup(e){const{toast:a}=st(),n=o=>{a({attached:o,title:"Watch out!",message:`I am a ${o} attached toast`})};return(o,r)=>{const c=y("SuiButton");return T(),I(M,{label:"Attached Position",code:RI},{description:i(()=>[l(" A toast can have an attached position which will show the toast over the whole width of the screen."),EI,l(" Just like notifications on mobile devices. ")]),example:i(()=>[t(c,{onClick:r[0]||(r[0]=m=>n("top"))},{default:i(()=>[l("Top")]),_:1}),t(c,{onClick:r[1]||(r[1]=m=>n("bottom"))},{default:i(()=>[l("Bottom")]),_:1})]),_:1})}}},PI=`<template>
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
<\/script>`,FI={__name:"DirectionDoc",setup(e){const{toast:a}=st(),n=()=>{a({horizontal:!0,position:"top left",title:"Watch out!",message:"Next one will open to the right"})};return(o,r)=>{const c=y("SuiButton");return T(),I(M,{label:"Direction",code:PI},{description:i(()=>[l(" Toasts can stack horizontal ")]),example:i(()=>[t(c,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},MI=`<template>
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
<\/script>`,VI={__name:"CenterAligned",setup(e){const{toast:a}=st(),n=()=>{a({centered:!0,title:"Veronika has joined",message:"Welcome to the Fomantic-UI community!"})};return(o,r)=>{const c=y("SuiButton");return T(),I(M,{label:"Center Aligned",code:MI},{description:i(()=>[l(" The toasts content can be shown center aligned. ")]),example:i(()=>[t(c,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},HI=`<template>
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
<\/script>`,NI={__name:"DurationDoc",setup(e){const{toast:a}=st(),n=o=>{a({displayTime:o,message:o===0?"I'll stay here until you click on me !":"You will see me for 5 seconds."})};return(o,r)=>{const c=y("SuiButton");return T(),I(M,{label:"Duration",code:HI},{description:i(()=>[l(" You can choose how long a toast should be displayed. ")]),example:i(()=>[t(c,{onClick:r[0]||(r[0]=m=>n(5e3))},{default:i(()=>[l("5 seconds")]),_:1}),t(c,{onClick:r[1]||(r[1]=m=>n(0))},{default:i(()=>[l("Stay")]),_:1})]),_:1})}}},OI=`<template>
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
<\/script>`,jI={__name:"MessageStyleDoc",setup(e){const{toast:a}=st(),n=()=>{a({messageStyle:!0,message:"I got my style from the message class",color:"purple"})};return(o,r)=>{const c=y("SuiButton");return T(),I(M,{label:"Use Message Style",code:OI},{description:i(()=>[l(" You can use all of the styles and colors from the message component. ")]),example:i(()=>[t(c,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},GI=`<template>
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
<\/script>`,qI={__name:"IncreasingProgressBarDoc",setup(e){const{toast:a}=st(),n=()=>{a({title:"LOOK",message:"See, how long i will last",showProgress:"top",showProgressUp:!0})};return(o,r)=>{const c=y("SuiButton");return T(),I(M,{label:"Increasing Progress Bar",code:GI},{description:i(()=>[l(" You can use the progress bar to show the progress of a task. ")]),example:i(()=>[t(c,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},UI=`<template>
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
<\/script>`,YI={__name:"ColorVariantsDoc",setup(e){const{toast:a}=st(),n=q(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],r=()=>{a({color:o[n.value],message:"I am a colorful toast",showProgress:"bottom"}),n.value=(n.value+1)%o.length};return(c,m)=>{const p=y("SuiButton");return T(),I(M,{label:"Color Variants",code:UI},{description:i(()=>[l(" You can use all of the usual color names. ")]),example:i(()=>[t(p,{onClick:r},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},JI={__name:"InvertedColorsDoc",setup(e){const{toast:a}=st(),n=q(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],r=()=>{a({color:o[n.value],inverted:!0,message:"I am an inverted colorful toast",showProgress:"bottom"}),n.value=(n.value+1)%o.length};return(c,m)=>{const p=y("SuiButton");return T(),I(M,{label:"Inverted Colors",code:c.code},{description:i(()=>[l(" Same as above, just add inverted to the class definition. ")]),example:i(()=>[t(p,{onClick:r},{default:i(()=>[l("Show")]),_:1})]),_:1},8,["code"])}}},WI=`<template>
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
<\/script>`,KI={__name:"ActionGeneralDoc",setup(e){const{toast:a}=st(),n=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[J(P,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>[J(Q,{name:"check"}),"Yes"]),J(P,{color:"red",icon:!0},()=>[J(Q,{name:"ban"})]),J(P,{color:"blue",onclick:()=>a({message:"Returning false from the click handler avoids closing the toast"})},()=>"?")]})};return(o,r)=>(T(),I(M,{label:"General",code:WI},{description:i(()=>[l(" Define click actions to your toast by providing a text and/or icon, optional class and click handler. ")]),example:i(()=>[t(g(P),{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1}))}},XI=`<template>
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
<\/script>`,QI={__name:"ActionBasicDoc",setup(e){const{toast:a}=st(),n=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[J(P,{color:"yellow",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really")],actionsProps:{basic:!0,aligned:"left"}})};return(o,r)=>(T(),I(M,{label:"Basic",code:XI},{description:i(()=>[l(" The classActions setting provides you a way to adjust the overall appearance of the action buttons. Using basic class does not lighten the actions background. left aligns the buttons to the left. ")]),example:i(()=>[t(g(P),{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1}))}},ZI=`<template>
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
<\/script>`,eE={__name:"ActionAttachedDoc",setup(e){const{toast:a}=st(),n=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[J(P,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),J(P,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"top"}})};return(o,r)=>(T(),I(M,{label:"Attached",code:ZI},{description:i(()=>[l(" Using attached converts your actions into a Button group. Also add top to display the actions attached to the top of the toast. ")]),example:i(()=>[t(g(P),{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1}))}},tE=`<template>
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
<\/script>`,iE={__name:"ActionVerticalDoc",setup(e){const{toast:a}=st(),n=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[J(P,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),J(P,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{vertical:!0}})};return(o,r)=>(T(),I(M,{label:"Vertical",code:tE},{description:i(()=>[l(" You can use vertical to display your actions to the right of the toast. ")]),example:i(()=>[t(g(P),{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1}))}},aE=S("br",null,null,-1),lE=`<template>
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
<\/script>`,nE={__name:"ActionVerticalAttachedDoc",setup(e){const{toast:a}=st(),n=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[J(P,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),J(P,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"left",vertical:!0}})};return(o,r)=>(T(),I(M,{label:"Vertical Attached",code:lE},{description:i(()=>[l(" Vertical actions can also be displayed as button groups using vertical attached."),aE,l(" Vertical attached actions also support left. ")]),example:i(()=>[t(g(P),{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1}))}},oE={__name:"Toast",setup(e){const a=[{id:"minimal",label:"Minimal",category:"Types",component:AI},{id:"titled",label:"Titled",category:"Types",component:xI},{id:"progress-bar",label:"Progress Bar",category:"Types",component:BI},{id:"toast-type",label:"Toast Type",category:"Variations",component:LI},{id:"position",label:"Position",category:"Variations",component:II},{id:"attached-position",label:"Attached Position",category:"Variations",component:zI},{id:"direction",label:"Direction",category:"Variations",component:FI},{id:"center-aligned",label:"Center Aligned",category:"Variations",component:VI},{id:"duration",label:"Duration",category:"Variations",component:NI},{id:"message-style",label:"Use Message Style",category:"Variations",component:jI},{id:"increasing-progress-bar",label:"Increasing Progress Bar",category:"Variations",component:qI},{id:"color-variants",label:"Color Variants",category:"Variations",component:YI},{id:"inverted-colors",label:"Inverted Colors",category:"Variations",component:JI},{id:"general",label:"General",category:"Actions",component:KI},{id:"action-basic",label:"Basic",category:"Actions",component:QI},{id:"action-attached",label:"Attached",category:"Actions",component:eE},{id:"action-vertical",label:"Vertical",category:"Actions",component:iE},{id:"action-vertical-attached",label:"Vertical Attached",category:"Actions",component:nE}];return(n,o)=>(T(),I(Nt,{title:"Toast",description:"A toast allows users to be notified of an event","component-docs":a}))}},sE=[{path:"/",component:X_,children:[{path:"/",component:pb},{path:"elements/button",component:Mw},{path:"elements/container",component:Kw},{path:"elements/divider",component:SC},{path:"elements/emoji",component:IC},{path:"elements/flag",component:FC},{path:"elements/header",component:gA},{path:"elements/icon",component:jA},{path:"elements/image",component:o0},{path:"elements/input",component:D0},{path:"elements/label",component:Hk},{path:"elements/list",component:lx},{path:"elements/loader",component:$x},{path:"elements/rail",component:Dx},{path:"elements/reveal",component:Px},{path:"elements/segment",component:s$},{path:"elements/step",component:p$},{path:"collections/breadcrumb",component:h$},{path:"collections/form",component:v$},{path:"collections/grid",component:C$},{path:"collections/menu",component:D$},{path:"collections/message",component:j$},{path:"collections/table",component:iB},{path:"views/advertisement",component:sB},{path:"views/card",component:OB},{path:"views/comment",component:NT},{path:"views/feed",component:u2},{path:"views/item",component:Q2},{path:"views/statistic",component:sL},{path:"modules/accordion",component:LL},{path:"modules/calendar",component:EL},{path:"modules/checkbox",component:jL},{path:"modules/dimmer",component:UL},{path:"modules/dropdown",component:WL},{path:"modules/embed",component:QL},{path:"modules/modal",component:nD},{path:"modules/popup",component:mD},{path:"modules/progress",component:gD},{path:"modules/rating",component:mI},{path:"modules/sidebar",component:hI},{path:"modules/slider",component:vI},{path:"modules/tab",component:wI},{path:"modules/toast",component:oE}]}],rE=L_({history:qh("/vue-fomantic-ui/"),routes:sE,scrollBehavior(){var e;(e=document.querySelector(".article"))==null||e.scrollTo(0,0)}});(function(e){var a="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},o={bash:n,environment:{pattern:RegExp("\\$"+a),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+a),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+a),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:o},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:o},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:o.entity}}],environment:{pattern:RegExp("\\$?"+a),alias:"constant"},variable:o.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var r=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],c=o.variable[1].inside,m=0;m<r.length;m++)c[r[m]]=e.languages.bash[r[m]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);const $s=vm($h);$s.use(rE);$s.use(mS);$s.mount("#app");
